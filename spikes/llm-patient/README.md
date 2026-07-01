# LLM simulated-patient bake-off (throwaway spike)

**Purpose:** resolve one question before we commit to an architecture — *is a
browser-local model good enough to play the patient, or do we need the hosted
Qwen?* This app lets you run the **same scenario + same system prompt** against
both backends, side by side, and judge:

1. **Realism** — does it feel like a worried patient, not an assistant?
2. **Guardrails** — does it stay in character / deflect off-topic + jailbreak attempts?
3. **Feedback** — can it emit the post-encounter rubric as clean JSON?

This is **not** part of the book build (Quarto/Svelte are untouched). Throwaway.

## Scenario
`prediabetes-mdm-tan` — mirrors `book/cases/prediabetes-counseling.case.yml`
(persona, voice, objective, turn limit). The patient opens the conversation; you
play the student; hit the turn limit (8) then **End & get feedback**.

## Run
```bash
npm install
npm run dev        # serves http://localhost:5188 (open it in Chrome/Edge)
```

- **Local column** works with nothing configured — pick a model, **Start**, and
  the weights download once (cached by the browser). Needs **WebGPU** (recent
  Chrome/Edge; the app says so if it's missing).
- **Hosted column** needs your Qwen endpoint. Copy `.env.example` → `.env`
  (gitignored) and set `QWEN_BASE_URL` (OpenAI-compatible, e.g. `.../v1`),
  `QWEN_API_KEY`, `QWEN_MODEL`. Restart `npm run dev`. The key stays in the Vite
  dev proxy (`vite.config.js`) — it never reaches the browser.

## Notes
- **Blind toggle** hides which column is which (left/right are randomized each
  load) so you judge realism honestly; **Reveal** shows the truth.
- **Download transcript** dumps both conversations + models to JSON for the record.
- Local model list is discovered from WebLLM's `prebuiltAppConfig`, so it tracks
  whatever the installed version ships (default prefers a Qwen instruct model for
  a fair family comparison).
- The evaluator uses **each column's own model**, so the hosted-vs-local JSON
  reliability gap is visible directly.

## What to do with the result
- Local feels good enough → lean **local WebGPU** (no key, no server, no abuse
  surface, privacy, static-first).
- Local falls short → **hosted Qwen** via a real Cloudflare Worker (this proxy is
  the seed) with access gating + rate limits + the same guardrails/feedback.
