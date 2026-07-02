// Guardrailed, key-holding proxy for the simulated-patient chat.
// Zero dependencies (Node >= 20 built-in http + fetch) so the container image is
// tiny and needs no `npm install`. Sits between the book (browser) and the
// llama.cpp / Qwen upstream; the API key never leaves this process.
//
// Hardening beyond the dev spike:
//   - model pinned server-side (client cannot run other models on your box)
//   - enable_thinking:false injected (Qwen3.6 returns empty content otherwise)
//   - CORS allow-list, per-IP rate limit, token/message/body caps
//   - optional per-cohort access token (X-Patient-Access)
//   - logs status/latency only — no bodies, no student identifiers

import http from 'node:http'

const {
  QWEN_BASE_URL,
  QWEN_API_KEY,
  QWEN_MODEL,
  QWEN_ENABLE_THINKING = 'false',
  ALLOW_ORIGIN = '',
  ACCESS_TOKEN = '',
  RATE_LIMIT_RPM = '20',
  MAX_TOKENS_CAP = '600',
  MAX_MESSAGES = '40',
  MAX_BODY_BYTES = '65536',
  PORT = '8787',
} = process.env

const BASE = (QWEN_BASE_URL || '').replace(/\/+$/, '')
const THINKING = String(QWEN_ENABLE_THINKING).toLowerCase() === 'true'
const ORIGINS = ALLOW_ORIGIN.split(',').map((s) => s.trim()).filter(Boolean)
const RPM = int(RATE_LIMIT_RPM, 20)
const TOK_CAP = int(MAX_TOKENS_CAP, 600)
const MSG_CAP = int(MAX_MESSAGES, 40)
const BODY_CAP = int(MAX_BODY_BYTES, 65536)

if (!BASE || !QWEN_API_KEY || !QWEN_MODEL) {
  console.error('[patient-proxy] FATAL: set QWEN_BASE_URL, QWEN_API_KEY, QWEN_MODEL')
  process.exit(1)
}

// --- naive fixed-window per-IP rate limiter (fine for a pilot; swap for Redis at scale) ---
const hits = new Map() // key -> { count, resetAt }
function rateLimited(key) {
  const now = Date.now()
  let e = hits.get(key)
  if (!e || now >= e.resetAt) { e = { count: 0, resetAt: now + 60_000 }; hits.set(key, e) }
  e.count += 1
  return e.count > RPM
}
setInterval(() => {
  const now = Date.now()
  for (const [k, v] of hits) if (now >= v.resetAt) hits.delete(k)
}, 60_000).unref()

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin
  const cors = corsHeaders(origin)
  const path = (req.url || '').split('?')[0]

  if (req.method === 'OPTIONS') { res.writeHead(204, cors); res.end(); return }
  if (req.method === 'GET' && path === '/health') return send(res, 200, { status: 'ok' }, cors)
  if (req.method !== 'POST' || !/^\/api\/(patient|evaluate)$/.test(path)) {
    return send(res, 404, { error: 'not found' }, cors)
  }

  // Block cross-origin browsers not in the allow-list (when a list is configured).
  if (ORIGINS.length && origin && !ORIGINS.includes(origin)) {
    return send(res, 403, { error: 'origin not allowed' }, cors)
  }
  // Optional cohort gate. NOTE: this token is visible in the book client — it is a
  // rate-limit/revocation handle, not a secret. Pair it with the rate limit.
  if (ACCESS_TOKEN && req.headers['x-patient-access'] !== ACCESS_TOKEN) {
    return send(res, 401, { error: 'unauthorized' }, cors)
  }

  const ip = clientIp(req)
  if (rateLimited(ip)) return send(res, 429, { error: 'rate limit exceeded, please slow down' }, cors)

  let body
  try { body = await readJson(req, BODY_CAP) }
  catch (e) { return send(res, e.code || 400, { error: e.message }, cors) }

  const messages = Array.isArray(body.messages) ? body.messages : null
  if (!messages || !messages.length) return send(res, 400, { error: 'messages[] required' }, cors)
  if (messages.length > MSG_CAP) return send(res, 400, { error: 'too many messages' }, cors)

  const upstream = {
    model: QWEN_MODEL, // pinned server-side; ignore any client-supplied model
    messages,
    temperature: clamp(body.temperature, 0, 2, 0.7),
    max_tokens: Math.min(clamp(body.max_tokens, 1, TOK_CAP, 400), TOK_CAP),
    chat_template_kwargs: { enable_thinking: THINKING },
  }
  // Only the evaluator endpoint may request JSON mode.
  if (body.response_format && path.endsWith('/evaluate')) upstream.response_format = body.response_format

  const t0 = Date.now()
  try {
    const r = await fetch(`${BASE}/chat/completions`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${QWEN_API_KEY}` },
      body: JSON.stringify(upstream),
    })
    const text = await r.text()
    log(path, r.status, Date.now() - t0, ip)
    res.writeHead(r.status, { 'content-type': r.headers.get('content-type') || 'application/json', ...cors })
    res.end(text)
  } catch (e) {
    log(path, 502, Date.now() - t0, ip)
    send(res, 502, { error: `upstream error: ${e?.message || e}` }, cors)
  }
})

server.listen(int(PORT, 8787), () => {
  console.log(
    `[patient-proxy] :${int(PORT, 8787)} -> ${BASE} | model=${QWEN_MODEL} thinking=${THINKING ? 'on' : 'off'} ` +
    `rpm=${RPM} origins=${ORIGINS.length ? ORIGINS.join(',') : '*'} token=${ACCESS_TOKEN ? 'on' : 'off'}`
  )
})

// --- helpers ---
function corsHeaders(origin) {
  const h = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type, x-patient-access',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
  if (!ORIGINS.length) h['Access-Control-Allow-Origin'] = '*'
  else if (origin && ORIGINS.includes(origin)) h['Access-Control-Allow-Origin'] = origin
  return h
}
function send(res, code, obj, extra = {}) {
  res.writeHead(code, { 'content-type': 'application/json', ...extra })
  res.end(JSON.stringify(obj))
}
function readJson(req, limit) {
  return new Promise((resolve, reject) => {
    let data = '', size = 0
    req.on('data', (c) => {
      size += c.length
      if (size > limit) { req.destroy(); reject(Object.assign(new Error('payload too large'), { code: 413 })) }
      else data += c
    })
    req.on('end', () => {
      try { resolve(JSON.parse(data || '{}')) }
      catch { reject(Object.assign(new Error('invalid JSON'), { code: 400 })) }
    })
    req.on('error', reject)
  })
}
function clientIp(req) {
  const xff = req.headers['x-forwarded-for'] // FRP / reverse proxies set this
  return xff ? String(xff).split(',')[0].trim() : req.socket.remoteAddress || 'unknown'
}
function clamp(v, min, max, def) {
  const n = typeof v === 'number' && Number.isFinite(v) ? v : def
  return Math.max(min, Math.min(max, n))
}
function int(v, def) { const n = parseInt(v, 10); return Number.isFinite(n) ? n : def }
function log(path, status, ms, ip) {
  console.log(`${new Date().toISOString()} ${path} ${status} ${ms}ms ip=${hashIp(ip)}`)
}
function hashIp(ip) { let h = 0; for (const c of String(ip)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h.toString(16) }
