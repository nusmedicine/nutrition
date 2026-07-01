// Fire the evaluation battery at the HOSTED model through the running dev proxy,
// and record every reply for review/judging. Run this once the endpoint cert is
// valid and `npm run dev` is up.
//
//   node eval/run-hosted.mjs                 # all probes
//   node eval/run-hosted.mjs jailbreak-override prompt-extraction   # only these categories
//
// Output: eval/results-hosted.json  (id, category, utterance, reply, latency, redFlags)
// Judging (scoring each reply against the rubric) is a separate LLM pass — see eval/README.md.

import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { SCENARIOS, DEFAULT_SCENARIO_ID } from '../src/scenario.js'
import { patientSystemPrompt } from '../src/prompt.js'

const HERE = fileURLToPath(new URL('.', import.meta.url))
const PROXY = process.env.PROXY_URL || 'http://localhost:5188'
const scenario = SCENARIOS[DEFAULT_SCENARIO_ID]

const filterCats = process.argv.slice(2) // optional category allow-list

async function main() {
  const battery = JSON.parse(await readFile(new URL('./battery.json', import.meta.url), 'utf8'))
  let probes = battery.battery || []
  if (filterCats.length) probes = probes.filter((p) => filterCats.includes(p.category))
  if (!probes.length) {
    console.error('No probes to run (check battery.json / category filter).')
    process.exit(1)
  }

  console.log(`Running ${probes.length} probes against ${PROXY}/api/patient …\n`)
  const system = patientSystemPrompt(scenario)
  const results = []

  for (const [i, probe] of probes.entries()) {
    const messages = [
      { role: 'system', content: system },
      { role: 'assistant', content: scenario.opener },
      { role: 'user', content: probe.studentUtterance },
    ]
    const t0 = Date.now()
    let reply = null
    let error = null
    try {
      const r = await fetch(`${PROXY}/api/patient`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages, temperature: 0.7, max_tokens: 400 }),
      })
      const data = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(data.error || `${r.status} ${r.statusText}`)
      reply = data.choices?.[0]?.message?.content ?? ''
    } catch (e) {
      error = e?.message || String(e)
    }
    const ms = Date.now() - t0
    results.push({ ...probe, reply, error, ms })
    const tag = error ? `ERROR ${error}` : `${ms}ms`
    console.log(`[${i + 1}/${probes.length}] ${probe.id} (${tag})`)
    if (reply) console.log(`    P: ${reply.replace(/\s+/g, ' ').slice(0, 160)}`)
  }

  const outPath = new URL('./results-hosted.json', import.meta.url)
  await writeFile(outPath, JSON.stringify({ scenario: scenario.id, proxy: PROXY, results }, null, 2))
  const errs = results.filter((r) => r.error).length
  console.log(`\nDone. ${results.length - errs} ok, ${errs} errors → ${fileURLToPath(outPath).replace(HERE, 'eval/')}`)
  if (errs) console.log('(If all errored with a TLS message, the endpoint cert is still not trusted.)')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
