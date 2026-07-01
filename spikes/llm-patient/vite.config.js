import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

// Resolve paths from THIS file's location, not the launcher's cwd (the preview
// runner may launch us from the repo root).
const here = fileURLToPath(new URL('.', import.meta.url))

// Thin dev-only proxy so the Qwen API key never reaches the browser.
// This is the seed of the real Cloudflare Worker if we go the hosted route.
// Reads QWEN_BASE_URL / QWEN_API_KEY / QWEN_MODEL from a gitignored .env.
function qwenProxy(env) {
  const BASE = (env.QWEN_BASE_URL || '').replace(/\/+$/, '')
  const KEY = env.QWEN_API_KEY || ''
  const MODEL = env.QWEN_MODEL || ''
  // Escape hatch for a dev endpoint whose TLS cert has expired. OFF by default;
  // only the user setting QWEN_INSECURE_TLS=true in .env enables it. Dev-only,
  // and it disables cert verification for THIS proxy process — the real fix is
  // renewing the endpoint cert (an expired cert breaks students' browsers too).
  const INSECURE = String(env.QWEN_INSECURE_TLS || '').toLowerCase() === 'true'
  // Qwen3.6 is a reasoning model: by default it burns the token budget on
  // <think> and returns empty `content`. For a simulated patient we want direct
  // replies, so disable thinking unless QWEN_ENABLE_THINKING=true. (llama.cpp
  // honours chat_template_kwargs.enable_thinking.)
  const ENABLE_THINKING = String(env.QWEN_ENABLE_THINKING || '').toLowerCase() === 'true'

  return {
    name: 'qwen-proxy',
    configureServer(server) {
      if (INSECURE) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
        server.config.logger.warn(
          '[qwen-proxy] QWEN_INSECURE_TLS=true — TLS certificate verification is DISABLED for the dev proxy. Dev-only; renew the endpoint cert to remove this.'
        )
      }
      // connect strips the '/api' mount prefix, so req.url is '/patient' | '/evaluate'
      server.middlewares.use('/api', async (req, res, next) => {
        const path = (req.url || '').split('?')[0]
        if (req.method !== 'POST' || !/^\/(patient|evaluate)$/.test(path)) return next()

        const json = (code, obj) => {
          res.statusCode = code
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify(obj))
        }

        if (!BASE || !KEY) {
          return json(503, {
            error:
              'Hosted endpoint not configured. Copy .env.example to .env and set QWEN_BASE_URL + QWEN_API_KEY, then restart `npm run dev`.',
          })
        }

        try {
          const body = await readJson(req)
          const upstream = {
            model: MODEL || body.model,
            messages: body.messages,
            temperature: body.temperature ?? 0.7,
            max_tokens: body.max_tokens ?? 400,
          }
          if (body.response_format) upstream.response_format = body.response_format
          upstream.chat_template_kwargs = { enable_thinking: ENABLE_THINKING }

          const r = await fetch(`${BASE}/chat/completions`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `Bearer ${KEY}`,
            },
            body: JSON.stringify(upstream),
          })
          const text = await r.text()
          res.statusCode = r.status
          res.setHeader('content-type', r.headers.get('content-type') || 'application/json')
          res.end(text)
        } catch (e) {
          json(502, { error: `Proxy error: ${e?.message || e}` })
        }
      })
    },
  }
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (c) => {
      data += c
      if (data.length > 1_000_000) reject(new Error('payload too large'))
    })
    req.on('end', () => {
      try {
        resolve(JSON.parse(data || '{}'))
      } catch (e) {
        reject(e)
      }
    })
    req.on('error', reject)
  })
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, here, '') // load ALL vars (server-side only; not exposed to client)
  return {
    root: here,
    envDir: here,
    // Keep Vite's dep cache OUT of the Dropbox-synced tree: the optimizer renames
    // deps_temp_* -> deps, and the Dropbox/Defender watcher locks it (EBUSY, the
    // same class as the quarto os-error-32 render lock). See HANDOVER §7.
    cacheDir: path.join(os.tmpdir(), 'vite-cache-llm-patient-spike'),
    plugins: [qwenProxy(env)],
    server: { port: 5188, open: false },
    // WebLLM pulls a big wasm/worker chunk; don't warn about it in this throwaway.
    build: { chunkSizeWarningLimit: 4000 },
  }
})
