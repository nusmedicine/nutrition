import './styles.css'
import { SCENARIOS, DEFAULT_SCENARIO_ID } from './scenario.js'
import { patientSystemPrompt, evaluatorMessages } from './prompt.js'
import {
  createLocalProvider,
  createHostedProvider,
  localModelOptions,
  defaultLocalModel,
  labelForModel,
} from './providers.js'

const scenario = SCENARIOS[DEFAULT_SCENARIO_ID]
const ui = { blind: false, revealed: false }

// ----- shell -----
const app = document.querySelector('#app')
app.innerHTML = `
  <header class="topbar">
    <div class="title">
      <h1>Simulated Patient — bake-off</h1>
      <p class="sub">${scenario.title}</p>
    </div>
    <div class="controls">
      <label class="chk"><input type="checkbox" id="blind" /> Blind (hide which is which)</label>
      <button id="reveal" class="btn ghost" disabled>Reveal</button>
      <button id="reset" class="btn ghost">Reset both</button>
      <button id="download" class="btn ghost">Download transcript</button>
    </div>
  </header>
  <p class="objective"><strong>Your goal:</strong> ${scenario.objective}
     <span class="badge">turn limit ${scenario.turnLimit}</span></p>
  <main class="grid">
    <section id="panel-a" class="panel"></section>
    <section id="panel-b" class="panel"></section>
  </main>
  <footer class="foot">Local runs entirely in your browser (WebGPU). Hosted calls your Qwen endpoint through a
    local proxy that keeps the key server-side. This is a throwaway spike — judge realism, guardrails, and
    the JSON feedback, then decide hosted vs local.</footer>
`

// ----- providers, randomized L/R for genuine blindness -----
const local = createLocalProvider()
const hosted = createHostedProvider()
const leftIsLocal = Math.random() < 0.5
const providerFor = { A: leftIsLocal ? local : hosted, B: leftIsLocal ? hosted : local }

const panels = [
  createPanel(document.querySelector('#panel-a'), providerFor.A, 'A'),
  createPanel(document.querySelector('#panel-b'), providerFor.B, 'B'),
]

// ----- top-bar wiring -----
const blindEl = document.querySelector('#blind')
const revealBtn = document.querySelector('#reveal')
blindEl.addEventListener('change', () => {
  ui.blind = blindEl.checked
  ui.revealed = false
  revealBtn.disabled = !ui.blind
  panels.forEach((p) => p.refreshLabel())
})
revealBtn.addEventListener('click', () => {
  ui.revealed = true
  panels.forEach((p) => p.refreshLabel())
})
document.querySelector('#reset').addEventListener('click', () => panels.forEach((p) => p.reset()))
document.querySelector('#download').addEventListener('click', downloadTranscript)

function downloadTranscript() {
  const out = {
    scenario: scenario.id,
    exportedAt: new Date().toISOString(),
    panels: panels.map((p) => p.data()),
  }
  const blob = new Blob([JSON.stringify(out, null, 2)], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = `bakeoff-${scenario.id}.json`
  a.click()
  URL.revokeObjectURL(a.href)
}

// ============================================================================
// Panel: one column = one provider playing the patient.
// ============================================================================
function createPanel(root, provider, tag) {
  const isLocal = provider.kind === 'local'
  const modelOpts = isLocal ? localModelOptions() : []
  const defaultModel = isLocal ? defaultLocalModel(modelOpts) : null

  root.innerHTML = `
    <div class="phead">
      <span class="plabel" data-role="label"></span>
      <span class="pstatus" data-role="status"></span>
    </div>
    <div class="pconfig" data-role="config">
      <select data-role="model"></select>
      <button class="btn" data-role="start">Start conversation</button>
    </div>
    <div class="log" data-role="log"></div>
    <div class="turns" data-role="turns"></div>
    <div class="inputrow">
      <textarea data-role="input" rows="2" placeholder="Type what you (the student) say…" disabled></textarea>
      <button class="btn" data-role="send" disabled>Send</button>
    </div>
    <div class="endrow">
      <button class="btn warn" data-role="end" disabled>End &amp; get feedback</button>
    </div>
    <div class="feedback" data-role="feedback" hidden></div>
  `

  const $ = (r) => root.querySelector(`[data-role="${r}"]`)
  const el = {
    label: $('label'),
    status: $('status'),
    config: $('config'),
    model: $('model'),
    start: $('start'),
    log: $('log'),
    turns: $('turns'),
    input: $('input'),
    send: $('send'),
    end: $('end'),
    feedback: $('feedback'),
  }

  if (isLocal) {
    for (const o of modelOpts) {
      const opt = document.createElement('option')
      opt.value = o.id
      opt.textContent = labelForModel(o)
      if (o.id === defaultModel) opt.selected = true
      el.model.appendChild(opt)
    }
    if (!provider.available()) {
      el.status.textContent = 'WebGPU not available in this browser.'
      el.start.disabled = true
    }
  } else {
    el.model.hidden = true
  }

  let conversation = [] // {role:'assistant'|'user', content, ms?}
  let studentTurns = 0
  let busy = false
  let started = false

  function refreshLabel() {
    const masked = ui.blind && !ui.revealed
    if (masked) {
      el.label.textContent = `Patient ${tag}`
    } else if (isLocal) {
      el.label.textContent = provider.ready
        ? `${provider.label} · ${provider.modelId}`
        : provider.label
    } else {
      el.label.textContent = provider.label
    }
    // In blind mode, hide the model dropdown (it would leak "local").
    el.model.style.visibility = masked && isLocal ? 'hidden' : ''
  }

  function setBusy(v) {
    busy = v
    const canType = started && !busy && studentTurns < scenario.turnLimit
    el.send.disabled = !canType
    el.input.disabled = !canType
    el.end.disabled = !started || busy || conversation.length < 2
  }

  function renderTurns() {
    el.turns.textContent = `Turn ${studentTurns} / ${scenario.turnLimit}`
  }

  function bubble(role, content, ms) {
    const div = document.createElement('div')
    div.className = `msg ${role === 'assistant' ? 'patient' : 'student'}`
    const who = role === 'assistant' ? scenario.patient.name : 'You'
    div.innerHTML = `<span class="who">${who}</span><span class="text"></span>`
    div.querySelector('.text').textContent = content
    if (ms != null) {
      const b = document.createElement('span')
      b.className = 'lat'
      b.textContent = `${ms} ms`
      div.appendChild(b)
    }
    el.log.appendChild(div)
    el.log.scrollTop = el.log.scrollHeight
    return div
  }

  function push(role, content, ms) {
    conversation.push({ role, content, ms })
    bubble(role, content, ms)
  }

  function note(text, cls = 'sys') {
    const div = document.createElement('div')
    div.className = `msg ${cls}`
    div.textContent = text
    el.log.appendChild(div)
    el.log.scrollTop = el.log.scrollHeight
  }

  async function start() {
    el.start.disabled = true
    try {
      if (isLocal && !provider.ready) {
        el.status.textContent = 'Loading model… (first run downloads weights)'
        await provider.load(el.model.value, (p) => {
          const pct = p.progress ? ` ${Math.round(p.progress * 100)}%` : ''
          el.status.textContent = `${p.text || 'Loading'}${pct}`
        })
      }
      el.status.textContent = 'Ready.'
      el.config.hidden = true
      started = true
      // Patient opens the conversation.
      push('assistant', scenario.opener)
      refreshLabel()
      renderTurns()
      setBusy(false)
      el.input.focus()
    } catch (e) {
      el.status.textContent = `Load failed: ${e?.message || e}`
      el.start.disabled = false
    }
  }

  async function send() {
    const text = el.input.value.trim()
    if (!text || busy || studentTurns >= scenario.turnLimit) return
    el.input.value = ''
    push('user', text)
    studentTurns += 1
    renderTurns()
    setBusy(true)
    try {
      const messages = [
        { role: 'system', content: patientSystemPrompt(scenario) },
        ...conversation.map(({ role, content }) => ({ role, content })),
      ]
      const t0 = performance.now()
      const reply = await provider.chat(messages)
      push('assistant', reply, Math.round(performance.now() - t0))
    } catch (e) {
      note(`⚠ ${e?.message || e}`, 'err')
    } finally {
      setBusy(false)
      if (studentTurns >= scenario.turnLimit) {
        note(`Turn limit reached — end the encounter for feedback.`)
      }
    }
  }

  async function end() {
    setBusy(true)
    el.end.disabled = true
    el.feedback.hidden = false
    el.feedback.innerHTML = '<div class="fhead">Assessing…</div>'
    try {
      const raw = await provider.evaluate(evaluatorMessages(scenario, conversation))
      renderFeedback(el.feedback, raw)
    } catch (e) {
      el.feedback.innerHTML = `<div class="fhead err">Feedback error: ${escapeHtml(e?.message || String(e))}</div>`
    } finally {
      busy = false
    }
  }

  function reset() {
    conversation = []
    studentTurns = 0
    busy = false
    started = false
    el.log.innerHTML = ''
    el.turns.textContent = ''
    el.feedback.hidden = true
    el.feedback.innerHTML = ''
    el.config.hidden = false
    el.input.value = ''
    el.input.disabled = true
    el.send.disabled = true
    el.end.disabled = true
    el.start.disabled = isLocal && !provider.available()
    el.status.textContent = provider.ready ? 'Model ready.' : ''
    refreshLabel()
  }

  el.start.addEventListener('click', start)
  el.send.addEventListener('click', send)
  el.end.addEventListener('click', end)
  el.input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  })

  refreshLabel()
  return {
    refreshLabel,
    reset,
    data: () => ({
      provider: provider.kind,
      model: provider.modelId,
      turns: studentTurns,
      conversation,
    }),
  }
}

// ----- feedback rendering -----
function renderFeedback(host, raw) {
  const parsed = safeParseJson(raw)
  if (!parsed) {
    host.innerHTML = `
      <div class="fhead err">Model did not return valid JSON (a data point in itself).</div>
      <pre class="raw"></pre>`
    host.querySelector('.raw').textContent = raw
    return
  }
  const met = parsed.objectiveMet
  const scores = parsed.scores || {}
  const rows = Object.entries(scores)
    .map(([k, v]) => `<tr><td>${escapeHtml(k)}</td><td class="s s${v}">${v}</td></tr>`)
    .join('')
  const list = (arr) =>
    Array.isArray(arr) && arr.length
      ? `<ul>${arr.map((x) => `<li>${escapeHtml(String(x))}</li>`).join('')}</ul>`
      : '<p class="muted">—</p>'

  host.innerHTML = `
    <div class="fhead">Feedback
      <span class="obj ${met ? 'ok' : 'no'}">${met ? 'objective met' : 'objective not met'}</span>
    </div>
    <table class="scores"><tbody>${rows}</tbody></table>
    <div class="fcol"><h4>What went well</h4>${list(parsed.wentWell)}</div>
    <div class="fcol"><h4>To improve</h4>${list(parsed.toImprove)}</div>
    <p class="overall">${escapeHtml(parsed.overall || '')}</p>`
}

function safeParseJson(raw) {
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    // Models sometimes wrap JSON in prose or code fences — grab the outermost object.
    const m = raw.match(/\{[\s\S]*\}/)
    if (m) {
      try {
        return JSON.parse(m[0])
      } catch {
        return null
      }
    }
    return null
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}
