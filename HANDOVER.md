# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-02.**
> Branch: **`curriculum-restructure`** (base: `main`). All work is committed; **nothing pushed** (see §10).
> **The LLM simulated-patient is now BUILT, verified, and documented (§3).** The one remaining
> step is **deployment**: stand up the `patient-proxy` Docker sidecar on the NUS box, then flip
> the book's `patient-llm` meta to production (§4).
> Read order: this file → [`patient-proxy/README.md`](patient-proxy/README.md) (deploy) →
> [`CASE-AUTHORING.md`](CASE-AUTHORING.md) (authoring) → [`ARCHITECTURE.md`](ARCHITECTURE.md) §8 →
> [`CASE-FORMAT.md`](CASE-FORMAT.md) §4.5 (patient-chat node).

## 1. What this is
**"Health in Medicine"** — an interactive web **e-textbook** (Quarto + Svelte 5 islands) on
**nutrition** for **first-year medical students (NUS)**. Didactic chapters + live diagrams +
self-test quizzes + branching **clinical cases** (visual-novel patient portraits) + a new
**Integrated cases** chapter with **live simulated-patient AI chat**. Backed by an evidence repo
(`research/`). Branding: **"Health in Medicine"**, *not* "lifestyle medicine".

## 2. Where we are
Part I (4 chapters) is authored and verified in-browser, plus:
- **Preface** ([`index.qmd`](book/index.qmd)); **Ch.1** six pillars; **Ch.2** energy balance;
  **Ch.3 Macronutrients** = THE template reference ([`AUTHOR.md`](AUTHOR.md) §11); **Ch.4**
  micronutrients & hydration. Each chapter has a quiz + a **choice-based** clinical case.
- **NEW — Integrated cases chapter** ([`chapters/cases.qmd`](book/chapters/cases.qmd)): four
  **simulated-patient (LLM chat)** encounters (§5).
- **NEW — the LLM simulated-patient feature is fully built & verified** (§3): live guardrailed
  AI patient in the CasePlayer, streaming, reactive portraits, post-chat rubric feedback.

**Interactive islands** (Svelte 5, `components/src/`, registered in `main.js`):
`quiz`, `case` (**CasePlayer — now with live patient-chat**), `gi`, `molecule`, `protein`.

## 3. The LLM simulated-patient — BUILT (this was the prior "next focus")
The `patient-chat` case node now hands off to a **real, guardrailed AI patient** the student
talks to in their own words. As shipped:
- **Client-composed prompt** (decision "fork A"): the CasePlayer builds the patient system prompt
  from the **case YAML** (`persona` + the node's new `brief`/`opener`/`objective`). No server-side
  scenario config. Guardrails validated on a **32-probe adversarial battery** (32/32 held) —
  `spikes/llm-patient/eval/` (battery + runner + `FINDINGS-hosted.md`).
- **Key stays server-side**: the browser posts `{messages}` to a thin proxy that holds the API
  key (§4). It never reaches the client.
- **Streaming** (SSE) — replies stream token-by-token into the dialogue bubble.
- **Per-turn emotions** — the patient prefixes each reply with a `(emotion)` tag (5-set); the
  client strips it from the text and drives the **portrait sprite** live.
- **Post-encounter feedback** — a second "evaluator" call turns the transcript + the case
  `objectives` into a **structured JSON rubric** (what went well / to improve / objective met?),
  rendered inline; then routes `goto` (met) vs `fallbackGoto` (not met).
- **Graceful degradation** — no endpoint configured → the node shows a placeholder and takes
  `fallbackGoto`, so the book never breaks offline.
- Code: [`components/src/lib/patient.js`](components/src/lib/patient.js) (prompt/eval/calls/parse),
  [`components/src/lib/config.js`](components/src/lib/config.js) (endpoint config),
  [`components/src/CasePlayer.svelte`](components/src/CasePlayer.svelte) (chat UI),
  `lib/engine.js` (`finishPatientChat`). Verified E2E in-browser multiple times.

## 4. Deploy the proxy (the ONE remaining step)
`patient-proxy/` is a **zero-dependency Node proxy** that holds the key, **pins the model**,
injects `enable_thinking:false`, and adds **CORS allow-list + per-IP rate limit + token/size caps
+ optional cohort access token**. Verified working against the live endpoint.
- **Path 1 (recommended, matches your infra):** run it as a **Docker sidecar** next to llama.cpp,
  exposed via **FRP** as `patient-api.phm.nusmed.space`; make llama.cpp **internal-only** so the
  guardrailed proxy is the only public door. See [`patient-proxy/README.md`](patient-proxy/README.md),
  `docker-compose.example.yml`, `frpc.example.toml`.
- **Then flip the book to production:** in [`book/_quarto.yml`](book/_quarto.yml) set the
  `patient-llm` meta to `{"endpoint":"https://patient-api.phm.nusmed.space","enabled":true}`.
- **Endpoint reality** (memory [[qwen-llm-endpoint]]): it's a **llama.cpp router**; OpenAI route is
  **`/v1`** (not `/api`); **Qwen3.6 needs `enable_thinking:false`** or `content` is empty; model
  `Qwen3.6-35B-A3B-BF16`. TLS is Let's Encrypt (has expired before — check the cert first if the
  hosted column suddenly fails).
- **Local dev loop meanwhile:** `.\scripts\patient-proxy.ps1` (self-locates node, reads
  `patient-proxy/.env`), then open a Cases page with **`?patient-llm=http://localhost:8787`**
  (a localhost-only override in `config.js`, so a deployed book can't be repointed elsewhere).

## 5. Cases — the two-versions model
- **In-chapter cases = choice-based** (MCQ, deterministic): drill one specific application of a
  chapter's knowledge. The four existing ones stay as they are.
- **Integrated cases chapter = simulated-patient (LLM)** encounters, **chat-forward** (short
  `info` intro → `patient-chat` → success/partial ending). Four so far, all realism-checked:
  **Mdm Tan** (pre-diabetes), **Mr Lim** (nutrition myths), **Aisha** (fatigue / iron deficiency),
  **Mr Tan** (sceptical, asymptomatic). **BMR was deliberately skipped** — a clinician calculation
  no patient asks about (kept as the existing MCQ case).
- Each sim case reuses the patient's **persona + sprite** (reactive portraits) and adds a private
  **`brief`** (the AI's briefing, written for **gradual disclosure — "one thing at a time"**).
- **Authoring:** [`CASE-AUTHORING.md`](CASE-AUTHORING.md) is the **non-technical educator guide**
  (how to write a case + a patient brief, with a copy-paste template). [`CASE-FORMAT.md`](CASE-FORMAT.md)
  is the technical spec. **Held off adding more encounters** to stabilise the feature first.

## 6. Build & preview (READ the env gotchas below)
```powershell
.\scripts\preview.ps1              # build islands, render out-of-tree (lock-proof), serve, open
.\scripts\preview.ps1 -SkipBuild -Port 9000
.\scripts\patient-proxy.ps1        # local simulated-patient proxy (self-locates node; reads .env)
```
- Island build: `npm --prefix components run build` → writes the gitignored `book/assets/` bundle.
- Islands need **HTTP** (not `file://`). Data folders must be in `book/_quarto.yml` `resources:`.
- **Full render check (no serve):** copy `book/` out-of-tree (avoid the Dropbox lock) then
  `quarto render .` — verified exit 0 with all chapters incl. `cases.html`.

## 7. Environment gotchas (this machine — READ THESE)
- **Dropbox/Defender file-locks.** In-place `quarto render book` fails (`os error 32`); render
  **out-of-tree** (`preview.ps1` does this). Same class hit **Vite's dep cache** in the spike
  (`EBUSY` on `.vite/deps`) — fixed by moving `cacheDir` out of the Dropbox tree. Memory:
  [[dropbox-quarto-render-lock]].
- **`node` not on PATH / stale env** in some shells: node is a portable install at
  `%LOCALAPPDATA%\node\current`. `preview.ps1` and `patient-proxy.ps1` **self-locate** it; ad-hoc,
  use the full path `%LOCALAPPDATA%\node\current\node.exe`.
- **PowerShell tool gotchas:** avoid `2>&1` on native exes; the sandbox static scanner
  **false-positives** on tokens like `/E` (robocopy) or globs (`book\*`) in `Remove-Item`/pipeline
  commands — reword, or drive copy+render from **Node** (`fs.cpSync` + `spawnSync`), which sidesteps it.
- **Toolchain:** Node 24 + npm 11; Quarto 1.9.x (`%LOCALAPPDATA%\quarto\current\bin`). Dropbox
  folder → harmless Git "LF will be replaced by CRLF" warnings.

## 8. Key decisions (don't re-litigate)
- **LLM patient:** client-composed prompt (fork A); **key server-side** in a proxy; **streaming**;
  **per-turn `(emotion)` tag** drives the portrait; brief pattern = **"ONE THING AT A TIME"**
  gradual disclosure; **two-versions** cases (choice-based in chapters, LLM in the Cases chapter);
  **BMR skipped** (not patient-facing); **graceful degradation** preserved. Server-side guardrail
  hardening (scenario config keyed by `scenarioId`) is a **Phase-2** option — today the prompt is
  client-composed, so guardrails are inspectable (acceptable for a formative tool).
- **Branding** "Health in Medicine"; **chapter template** = AUTHOR §11 (5-beat + 🔬🍜🍳); fibre a
  `###` under carbohydrate.
- **Cases** are formative, single `quality` var, success/partial endings, **question-driven**,
  **patient-facing plain language**, referral kept light + forward-referenced.
- **Case visuals**: standardized emotions (neutral/concerned/relieved/skeptical/surprised);
  **DiceBear Avataaars** sprites.
- **Structures**: RDKit 2D; curated PD lipids; hand-drawn carb schematic; 3Dmol cartoon proteins;
  CC0/PD/CC-BY/CC-BY-SA only, logged in `book/figures/CREDITS.csv`. Memory:
  [[chemical-structure-and-image-rendering]].

## 9. Repository map (updated)
```
HANDOVER.md PLANNING.md REQUIREMENTS.md ARCHITECTURE.md(§8=LLM) AUTHOR.md(§11=template)
CASE-FORMAT.md(§4a,§4.5=spec) CASE-AUTHORING.md(educator guide) README.md
scripts/preview.ps1                lock-proof local preview (self-locates node/quarto)
scripts/patient-proxy.ps1          local simulated-patient proxy launcher (self-locates node)
scripts/gen-persona-sprites.ps1    regenerate all patient sprite sets (DiceBear)
patient-proxy/                     PROD key-holding proxy: server.mjs, Dockerfile, docker-compose +
                                   frpc examples, .env(.example), README (deploy guide). .env gitignored.
book/
  index.qmd  _quarto.yml           preface; book config (chapters, resources, includes, patient-llm meta)
  chapters/*.qmd                   Part I (01…, energy-balance, macronutrients, 04…) + cases.qmd (Integrated cases)
  cases/*.case.yml                 choice-based: pillar-mapping-mr-tan, bmr-estimation, common-questions,
                                   iron-deficiency-aisha, prediabetes-counseling(unused/choice) ;
                                   simulated-patient (LLM, chat-forward): sim-prediabetes-mdm-tan,
                                   sim-common-questions-mr-lim, sim-iron-deficiency-aisha, sim-pillar-mr-tan
  figures/personas/<id>/<emotion>.svg   sprite sets (mr-lim, mr-tan, aisha, mdm-tan)
  assets/                          GENERATED island bundle (gitignored)
components/src/                    main.js(REGISTRY), CasePlayer(+chat), Quiz, GlucoScale, Molecule, Protein,
                                   lib/{engine,expr,md,store, patient, config}.js
spikes/llm-patient/                throwaway bake-off + eval/ (battery.json, run-hosted.mjs, FINDINGS-hosted.md)
research/                          evidence repo (curriculum-map.md spine, chapter dossiers)
```

## 10. Git state
- Branch **`curriculum-restructure`**; base `main`. **Nothing pushed to a remote.**
- The LLM-patient arc (newest first): `b0b5a18` educator guide · `a1eb438` streaming+emotions ·
  `55d6261` Mdm Tan polish · `8c6de1b` +3 encounters · `7aa480b` proxy launcher · `b92c30f`
  Cases chapter + dev override · `e3064c7` CasePlayer chat · `a460f46` patient-proxy · `18c693f`
  bake-off spike. Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`.

## 11. Open items / risks
- **Deploy the proxy** (Docker sidecar) + **flip the `patient-llm` meta** — the main remaining step (§4).
- **Deployment base-path** for island `data-src` (subpath GitHub Pages) still unresolved
  ([`ARCHITECTURE.md`](ARCHITECTURE.md) §9; [`AUTHOR.md`](AUTHOR.md) §8).
- **Server-side guardrail hardening** is Phase-2 (currently client-composed prompt).
- **Battery gaps** flagged by the design critic: multi-turn compounding attacks, turn-limit
  pressure, non-English/obfuscated input, a positive-control encounter.
- **`prediabetes-counseling`** (choice version) is unused/not embedded; the LLM version lives in
  the Cases chapter.
- **Ch.1/2/4 predate the §11 template** — retro-fit when convenient.
- **Net-new ✨ chapters need research dossiers first** (`research/00-overview/curriculum-map.md`).
- **Future polish (deferred):** more encounters, per-turn emotion tuning, streaming for the evaluator.

## 12. Memory (auto-loaded each session — see `memory/MEMORY.md`)
- [[qwen-llm-endpoint]] — llama.cpp router shape: base `/v1`, `enable_thinking:false`, model list, TLS note.
- [[dropbox-quarto-render-lock]] — the os-error-32 / EBUSY cause + out-of-tree workaround.
- [[chemical-structure-and-image-rendering]] — verified library picks, RDKit pipeline, image licensing.
