// Two backends behind one interface: local WebLLM (WebGPU, in-browser) and the
// hosted Qwen endpoint (via the Vite dev proxy in vite.config.js).
//
// provider shape:
//   kind      'local' | 'hosted'
//   label     human label
//   available() -> bool         (can this run at all here?)
//   ready       bool            (is it loaded / usable now?)
//   load(id?, onProgress?)      (local: download+init model; hosted: no-op)
//   chat(messages, opts) -> string
//   evaluate(messages) -> string (JSON-mode where supported)

import * as webllm from '@mlc-ai/web-llm'

// ---- local model discovery (self-describing, robust to WebLLM version bumps) ----

export function localModelOptions() {
  const list = webllm.prebuiltAppConfig?.model_list ?? []
  return list
    .filter((m) => /instruct|-it-|chat/i.test(m.model_id))
    .map((m) => ({
      id: m.model_id,
      vramMB: m.vram_required_MB ?? null,
      low: !!m.low_resource_required,
    }))
    .sort((a, b) => (a.vramMB ?? 1e9) - (b.vramMB ?? 1e9))
}

export function defaultLocalModel(opts) {
  const pick = (re) => opts.find((o) => re.test(o.id))
  const chosen =
    pick(/Qwen3.*(7B|8B).*(instruct|it)?/i) ||
    pick(/Qwen2\.5-7B-Instruct.*q4f16/i) ||
    pick(/Qwen.*7B.*Instruct/i) ||
    pick(/Qwen.*3B.*Instruct/i) ||
    pick(/Llama-3.*8B-Instruct/i) ||
    opts[0]
  return chosen?.id ?? null
}

export function labelForModel(o) {
  const gb = o.vramMB ? ` (~${(o.vramMB / 1024).toFixed(1)} GB VRAM)` : ''
  return `${o.id}${gb}`
}

// ---- providers ----

export function createLocalProvider() {
  let engine = null
  let modelId = null
  return {
    kind: 'local',
    label: 'Local · WebLLM (WebGPU)',
    get ready() {
      return !!engine
    },
    get modelId() {
      return modelId
    },
    available() {
      return typeof navigator !== 'undefined' && !!navigator.gpu
    },
    async load(id, onProgress) {
      modelId = id
      engine = await webllm.CreateMLCEngine(id, {
        initProgressCallback: onProgress,
      })
    },
    async chat(messages, opts = {}) {
      const r = await engine.chat.completions.create({
        messages,
        temperature: opts.temperature ?? 0.7,
        max_tokens: opts.max_tokens ?? 400,
      })
      return r.choices?.[0]?.message?.content ?? ''
    },
    async evaluate(messages) {
      const r = await engine.chat.completions.create({
        messages,
        temperature: 0.2,
        max_tokens: 800,
        response_format: { type: 'json_object' },
      })
      return r.choices?.[0]?.message?.content ?? ''
    },
  }
}

export function createHostedProvider() {
  return {
    kind: 'hosted',
    label: 'Hosted · Qwen (via proxy)',
    ready: true,
    modelId: 'server-configured',
    available() {
      return true
    },
    async load() {
      /* no-op: nothing to download */
    },
    async chat(messages, opts = {}) {
      return postChat('/api/patient', {
        messages,
        temperature: opts.temperature ?? 0.7,
        max_tokens: opts.max_tokens ?? 400,
      })
    },
    async evaluate(messages) {
      return postChat('/api/evaluate', {
        messages,
        temperature: 0.2,
        max_tokens: 800,
        response_format: { type: 'json_object' },
      })
    },
  }
}

async function postChat(url, body) {
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await r.json().catch(() => ({}))
  if (!r.ok) throw new Error(data.error || `${r.status} ${r.statusText}`)
  return data.choices?.[0]?.message?.content ?? ''
}
