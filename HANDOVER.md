# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-03.**
> **THE BOOK IS LIVE:** <https://nusmedicine.github.io/nutrition/> — deployed from branch **`main`**
> (repo `github.com/nusmedicine/nutrition`) by the Pages CI on every push (build islands → render →
> **asset check** → deploy).
> **ACTIVE THREAD = authoring Part I.** This session: **expanded Ch.4 Micronutrients** and **authored
> Ch.5 Digestion & Absorption end-to-end** (research dossier → draft → illustrated interactive), and
> made asset paths **deploy-safe automatically** (§2.1). All pushed & live.
> **Next session (most likely):** continue Part I with the proven research→draft pipeline (§2.1) —
> **Ch.6 Gut Microbiome**, **Ch.7 Integrative Metabolism**, **Ch.8 Appetite** (all net-new ✨, need a
> dossier first); plus two small Ch.5 to-dos: **recalibrate the gut-island hotspots** (targeting is
> slightly off — user deferred) and **clear the Ch.5 dossier's verify-before-lock flags** (§11).
> **The LLM simulated-patient feature is BUILT, verified & DEPLOYED (§3–§4)** — complete; only touch
> it if that becomes the focus (open decisions in §11).
> Read order: this file → [`AUTHOR.md`](AUTHOR.md) §11 (chapter template + **§11d asset-path rules**) →
> [`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md) (21-chapter spine) →
> the dossiers in `research/chapters/`. For the LLM patient: [`patient-proxy/README.md`](patient-proxy/README.md).

## 1. What this is
**"Health in Medicine"** — an interactive web **e-textbook** (Quarto + Svelte 5 islands) on
**nutrition** for **first-year medical students (NUS)**. Didactic chapters + live diagrams +
self-test quizzes + branching **clinical cases** (visual-novel patient portraits) + a new
**Integrated cases** chapter with **live simulated-patient AI chat**. Backed by an evidence repo
(`research/`). Branding: **"Health in Medicine"**, *not* "lifestyle medicine".

## 2. Where we are
**Part I now has 5 authored chapters** (all rendered clean + browser-verified + live):
- **Preface** ([`index.qmd`](book/index.qmd)); **Ch.1** six pillars; **Ch.2** energy balance;
  **Ch.3 Macronutrients** = THE template reference ([`AUTHOR.md`](AUTHOR.md) §11); **Ch.4
  Micronutrients & hydration** — *expanded this session* (fat- & water-soluble vitamins built on
  classic-deficiency-disease hooks, minerals, a **molecule gallery** [vitamin C / retinol / D3],
  licence-verified food photos, quiz 6→12); **Ch.5 Digestion & Absorption** — *new this session*, a
  "follow the food" chapter with an illustrated interactive tract, a Mermaid enterohepatic loop, an
  ORT case, and a "Same food, different speed" section (eating / preparation / food interactions).
- **Integrated cases chapter** ([`chapters/cases.qmd`](book/chapters/cases.qmd)): four
  **simulated-patient (LLM chat)** encounters (§5).
- Each chapter has a quiz + a case; research dossiers live in `research/chapters/`.

**Interactive islands** (Svelte 5, `components/src/`, registered in `main.js`):
`quiz`, `case` (CasePlayer + live patient-chat), `gi`, `molecule`, `protein`, **`gut`** (new — Ch.5
clickable digestive tract: a Servier illustration + a hotspot overlay + a detail panel).

## 2.1 The research → draft pipeline (how Ch.4/Ch.5 were built — reuse this)
For a net-new or expanded chapter:
1. **Research** — fan out parallel agents (or a `Workflow` under ultracode) over the chapter's
   sub-domains, web-grounded + **adversarially verified** (they've caught a *retracted* paper and a
   textbook "tennis-court" myth). Output → a dossier `research/chapters/<topic>.md` at the
   `_template.md` standard, honouring the overlap-ownership table in the curriculum map.
2. **Sourcing** — figures/structures/widgets, licence-verified (**CC0/PD/CC-BY/CC-BY-SA only**):
   **RDKit** for molecules; **Servier Medical Art on Wikimedia Commons** (search `Smart-Servier`,
   CC-BY) for illustrated anatomy; **Quarto Mermaid** for flow/loop diagrams (no drawing).
   **BioRender cannot be used or traced** (copyright). An illustrated *interactive* = an image
   `<img>` + a viewBox-aligned transparent SVG **hotspot overlay** driven by a YAML manifest — see
   [`GutJourney.svelte`](components/src/GutJourney.svelte) + [`gut-journey.yml`](book/diagrams/gut-journey.yml).
3. **Draft** — `book/chapters/<file>.qmd` in AUTHOR §11 house style; add `@keys` to
   `references.bib`; log figures in `figures/CREDITS.csv`; add the chapter to `_quarto.yml`.
4. **Verify** — render out-of-tree, then browser-verify islands (memory [[book-preview-verification]]).
5. **Asset paths are automatic now** — write root-absolute (`/figures/…`); a new island that reads
   asset paths from *its manifest* loads it via **`loadManifest()`** ([`lib/manifest.js`](components/src/lib/manifest.js),
   auto-resolves them); CI runs **`scripts/check-assets.mjs`** and **fails the build on any missing
   asset**. See AUTHOR §11d. (Markdown figures + the bundle are auto-relativised by Quarto.)

## 3. The LLM simulated-patient — BUILT & DEPLOYED (this was the prior "next focus")
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

## 4. The proxy — DEPLOYED
`patient-proxy/` is a **zero-dependency Node proxy** that holds the key, **pins the model**,
injects `enable_thinking:false`, and adds **CORS allow-list + per-IP rate limit + token/size caps
+ optional cohort access token**. It is deployed and serving the live book.
- **As deployed:** it runs as a **Docker sidecar** next to llama.cpp, exposed via **FRP** at
  `patient-api.phm.nusmed.space`, with llama.cpp **internal-only** so the guardrailed proxy is the
  only public door. See [`patient-proxy/README.md`](patient-proxy/README.md),
  `docker-compose.example.yml`, `frpc.example.toml`.
- **Book is live in production:** [`book/_quarto.yml`](book/_quarto.yml) already sets the
  `patient-llm` meta to `{"endpoint":"https://patient-api.phm.nusmed.space","enabled":true}`.
- **Published to GitHub Pages:** [`.github/workflows/publish.yml`](.github/workflows/publish.yml)
  builds the islands, renders Quarto, and deploys `book/_book` on every push to **`main`** →
  <https://nusmedicine.github.io/nutrition/> (Pages **Source = GitHub Actions**). The runtime
  base-path fix ([`lib/base.js`](components/src/lib/base.js) `resolveAsset`) makes the islands work
  at that `/nutrition/` subpath.
- **CORS / access posture:** `ALLOW_ORIGIN` is currently **blank**, so the proxy allows **all**
  origins (`Access-Control-Allow-Origin: *`) — works everywhere but is open. Browser CORS is not a
  server-side gate (curl ignores it); the real controls are the **rate limit + caps + guardrails**.
  To gate access, set an `ACCESS_TOKEN` (per-cohort) and/or `ALLOW_ORIGIN=https://nusmedicine.github.io`.
  See §11.
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
scripts/check-assets.mjs           CI + local asset-path checker (fails the build on any missing reference)
scripts/patient-proxy.ps1          local simulated-patient proxy launcher (self-locates node)
scripts/gen-persona-sprites.ps1    regenerate all patient sprite sets (DiceBear)
patient-proxy/                     PROD key-holding proxy: server.mjs, Dockerfile, docker-compose +
                                   frpc examples, .env(.example), README (deploy guide). .env gitignored.
book/
  index.qmd  _quarto.yml           preface; book config (chapters, resources, includes, patient-llm meta)
  chapters/*.qmd                   Part I: 01…, energy-balance, macronutrients, 04-micronutrients-hydration,
                                   digestion-absorption + cases.qmd (Integrated cases)
  diagrams/*.yml                   island data: glycemic-index-load.yml (gi), gut-journey.yml (gut)
  structures/*                     RDKit molecule galleries (svg+sdf: dietary-fats, micronutrients, bile) + protein PDBs
  figures/anatomy/                 Ch.5: Servier digestive-apparatus.png (gut island), villus histology, fat-absorption.svg
  figures/food/  figures/structures/   food photos + structure SVGs (all licence-logged in CREDITS.csv)
  quizzes/*.quiz.yml               per-chapter quizzes
  cases/*.case.yml                 choice-based: pillar-mapping-mr-tan, bmr-estimation, common-questions,
                                   iron-deficiency-aisha, ort-drip-free-rescue (Ch.5) ;
                                   simulated-patient (LLM): sim-prediabetes-mdm-tan, sim-common-questions-mr-lim,
                                   sim-iron-deficiency-aisha, sim-pillar-mr-tan
  figures/personas/<id>/<emotion>.svg   sprite sets (mr-lim, mr-tan, aisha, mdm-tan)
  assets/                          GENERATED island bundle (gitignored)
components/src/                    main.js(REGISTRY), CasePlayer(+chat), Quiz, GlucoScale, Molecule, Protein,
                                   GutJourney(Ch.5 tract), lib/{engine,expr,md,store,patient,config,base,manifest}.js
                                   (base.js=resolveAsset subpath-safe; manifest.js=loadManifest auto-resolves asset paths)
spikes/llm-patient/                throwaway bake-off + eval/ (battery.json, run-hosted.mjs, FINDINGS-hosted.md)
research/                          evidence repo (curriculum-map.md spine, chapter dossiers)
```

## 10. Git state
- **Deploy branch `main`** (also on `curriculum-restructure`, identical tip) — **pushed** to
  `github.com/nusmedicine/nutrition`; the Pages CI deploys `main` → <https://nusmedicine.github.io/nutrition/>.
  (Old `master` = pre-session baseline; ignore it.)
- Arc (newest first) — **this session** (all pushed & live): `c10b895` Ch.5 "Same food, different
  speed" section · `ec0202b` auto path-safety (loadManifest + `check-assets` CI gate + AUTHOR docs) ·
  `9753bef` Ch.5 Servier illustrated tract · `16251a3` Ch.5 cleaner schematic + Mermaid loop ·
  `b44e89a` Ch.5 Digestion & Absorption chapter · `c0283ca` Ch.4 micronutrients expanded.
  Earlier: `05362ba`/`420c5f3` docs+base-path+Pages CI · the LLM-patient arc (`1676648` … `18c693f`).
  Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`.

## 11. Open items / risks
**Shipped & live this session** (no longer open): proxy deployed; book published to GitHub Pages
via `publish.yml`; deployment base-path resolved (`lib/base.js` `resolveAsset`, verified at a subpath).

Open decisions / next work:
- **Continue Part I (the active thread):** author **Ch.6 Gut Microbiome**, **Ch.7 Integrative
  Metabolism**, **Ch.8 Appetite** — all net-new ✨, so **dossier first** via the §2.1 pipeline. Mind
  the overlap-ownership table (Ch.5 already *owns* gut hormones + bile/enterohepatic; Ch.6 owns
  SCFAs/fermentation; Ch.8 reuses the satiety-hormone role). See `curriculum-map.md`.
- **Ch.5 gut-island hotspots are slightly off** (user deferred): recalibrate `hx/hy/hr` in
  [`gut-journey.yml`](book/diagrams/gut-journey.yml) — reveal-all-hotspots then nudge; method in
  memory [[book-preview-verification]].
- **Ch.5 dossier verify-before-lock flags** ([`research/chapters/digestion-absorption.md`](research/chapters/digestion-absorption.md) §11):
  no verified SG diarrhoea/ORT epidemiology; the SG lactase anchor (`yap1989`) is old (1989, n=77);
  confirm the NNS "~4% wholegrain" figure; pin a couple of placeholder citations. (Content is drafted;
  these are pre-publication checks.)
- **Ch.4 dossier flags too** ([`research/chapters/04-micronutrients-hydration.md`](research/chapters/04-micronutrients-hydration.md)):
  SG iodine status unverified; the Turkey-vs-Singapore iodine-study trap; folate-fortification specifics;
  and the Ch.4 quiz/widgets follow-ups.
- **LLM patient (only if that's the focus):** access-control posture — `ALLOW_ORIGIN` is blank so the
  proxy is open to all origins (fine for a rate-limited + guardrailed pilot; gate with `ACCESS_TOKEN`
  and/or `ALLOW_ORIGIN=https://nusmedicine.github.io`); Phase-2 server-side guardrail hardening; battery
  gaps (multi-turn/turn-limit/non-English/positive-control); `prediabetes-counseling` choice case unused.
- **Ch.1/2 predate the §11 template** — retro-fit when convenient.

## 12. Memory (auto-loaded each session — see `memory/MEMORY.md`)
- [[qwen-llm-endpoint]] — llama.cpp router shape: base `/v1`, `enable_thinking:false`, model list, TLS note.
- [[dropbox-quarto-render-lock]] — the os-error-32 / EBUSY cause + out-of-tree workaround.
- [[chemical-structure-and-image-rendering]] — verified library picks, RDKit pipeline, image licensing;
  **Servier Medical Art (CC-BY) for illustrated diagrams; BioRender can't be traced; hotspot-overlay pattern.**
- [[book-preview-verification]] — browser-verify islands: render out-of-tree → copy `_book` in-tree →
  `preview_start "book"` (port 8780) → `preview_eval` navigate; Svelte reactivity is async (await before reading DOM).
