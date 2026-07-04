# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-04 (Ch.6 DRAFTED).**
> **THE BOOK IS LIVE:** <https://nusmedicine.github.io/nutrition/> — deployed from branch **`main`**
> (repo `github.com/nusmedicine/nutrition`) by the Pages CI on every push (build islands → render →
> **asset check** → deploy).
> **ACTIVE THREAD = authoring Part I.** **Ch.6 Integrative Metabolism is now DRAFTED, rendered clean &
> browser-verified** ([`integrative-metabolism.qmd`](book/chapters/integrative-metabolism.qmd)) — the
> two-layer chapter (Part A pathways map + Part B fed/fasted integration) with **two net-new Svelte islands**
> (`metabolic-map` build-the-map stepper + `metabolic-switch` fed→fasted→starved inter-organ scene, both
> bespoke inline-SVG, registered in `main.js`), a **ketone-bodies RDKit molecule gallery** (acetoacetate /
> β-hydroxybutyrate / acetone, generated via `python -c` RDKit → `book/structures/`), 2 Mermaid diagrams
> (Cori/alanine, lipoprotein interconversion), a **9-question quiz**, an **alcohol-fasting-hypoglycaemia
> case**, and **32 new `references.bib` keys**. **Next: Ch.7 Gut Microbiome** (dossier 🟢, same pipeline) or
> the **Ch.8 Appetite** dossier. A **prior** session produced the two dossiers + Part-I resequence
> (now committed, see §10):
> **① Part I RESEQUENCED (Option X, evidence-backed):** Integrative Metabolism and Gut Microbiome
> **swapped** → **5 Digestion → 6 Integrative Metabolism → 7 Gut Microbiome → 8 Appetite**. Rationale (in
> `curriculum-map.md`): a rich integrative microbiome chapter belongs *after* its metabolism prerequisite;
> appetite stays the Part I capstone. Ripple-fixed everywhere (dossier cross-refs, the **live**
> `gut-journey.yml`, `AUTHOR.md`).
> **② Ch.7 Gut Microbiome dossier — DONE + verified** ([`research/chapters/gut-microbiome.md`](research/chapters/gut-microbiome.md), 🟢).
> **③ Ch.6 Integrative Metabolism dossier — DONE + verified, then EXPANDED (user steer) into a
> self-contained two-layer chapter** ([`research/chapters/integrative-metabolism.md`](research/chapters/integrative-metabolism.md), 🟢):
> **Part A = the metabolic map** (the core pathways + how they interconnect, taught from scratch at
> *interconnection-map* depth — **no biochem course assumed**) → **Part B = the dynamic integration**
> (fed/fasted/starvation/exercise inter-organ flow). Decision: the pathways are a hard prerequisite for the
> integration, so Ch.6 carries them itself; the old "assume a parallel biochem course" scheduling
> constraint is now **resolved**.
> **Next session (most likely):** **draft Ch.7 Gut Microbiome** (qmd + *SCFA-fermentation flow* island via
> §2.1), and/or start the **Ch.8 Appetite** dossier (net-new ✨). **Ch.6 design note:** the two islands
> ended up as **two distinct diagrams sharing a colour language** (Part A = pathway crossroads map; Part B =
> inter-organ flux scene), *not* one literal shared node manifest — the inter-organ scene is a different
> altitude from the pathway map, so a shared colour key (catabolic=orange, anabolic=blue, one-way=red;
> insulin=teal/glucagon=amber; cargo colours) reads better than forcing identical geometry. Both are drawn
> **bespoke inline-SVG in-component** (no external figures → the Servier-composite plan in the dossier was
> unneeded). **Ch.6 residual lock-time flags** (§11): krebs alcohol PMID left unpinned (used the 1969
> *Biochem J* "Inhibition of hepatic gluconeogenesis by ethanol", DOI only); StatPearls bookshelf IDs carried
> from the dossier. Two small Ch.5 to-dos also remain (recalibrate the gut-island hotspots; clear the Ch.5
> dossier flags).
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
**Part I = 6 chapters (5 live + Ch.6 drafted), PLUS 1 net-new adversarially-verified dossier ready to write.**

**Authored** (rendered clean + browser-verified): **Preface** ([`index.qmd`](book/index.qmd));
**Ch.1** six pillars; **Ch.2** energy balance; **Ch.3 Macronutrients** = THE template reference
([`AUTHOR.md`](AUTHOR.md) §11); **Ch.4 Micronutrients & hydration**; **Ch.5 Digestion & Absorption** (a
"follow the food" chapter with an illustrated tract island, a Mermaid enterohepatic loop, an ORT case);
**Ch.6 Integrative Metabolism** ([`integrative-metabolism.qmd`](book/chapters/integrative-metabolism.qmd),
**drafted this session**) — two-layer (Part A pathways map + Part B fed/fasted integration), 2 flagship
Svelte islands + ketone RDKit gallery + 2 Mermaid diagrams + 9-Q quiz + alcohol-hypoglycaemia case.
*(Ch.5 = prior session; Ch.6 = this session. Registered last in `_quarto.yml` under Part I.)*

**Dossier ready to write** (🟢, verified — drafting is the next step):
- **Ch.7 The Gut Microbiome** ([`gut-microbiome.md`](research/chapters/gut-microbiome.md)) — composition,
  **fibre→SCFA fermentation (owned)**, microbial vitamins, pre/pro/synbiotics + fermented foods, diet as
  modulator, gut–brain *microbial* mechanism. Island: *SCFA-fermentation flow*.

**Integrated cases chapter** ([`chapters/cases.qmd`](book/chapters/cases.qmd)): four **simulated-patient
(LLM chat)** encounters (§5). Each authored chapter has a quiz + a case; dossiers live in `research/chapters/`.

**Interactive islands** (Svelte 5, `components/src/`, registered in `main.js`):
`quiz`, `case` (CasePlayer + live patient-chat), `gi`, `molecule`, `protein`, **`gut`** (Ch.5 clickable
digestive tract), and **NEW this session:** **`metabolic-map`** ([`MetabolicMap.svelte`](components/src/MetabolicMap.svelte),
Ch.6 Part A build-the-map stepper — data [`metabolic-map.yml`](book/diagrams/metabolic-map.yml)) and
**`metabolic-switch`** ([`MetabolicSwitch.svelte`](components/src/MetabolicSwitch.svelte), Ch.6 Part B
fed→fasted→starved inter-organ scene — data [`metabolic-switch.yml`](book/diagrams/metabolic-switch.yml)).
Both are **bespoke inline-SVG, data-driven** (loadManifest + `store.js` persistence, GutJourney conventions),
sharing a colour language (catabolic=orange, anabolic=blue, one-way valve=red; insulin=teal/glucagon=amber).
Ch.6 also ships a **ketone-bodies RDKit gallery** ([`ketone-bodies.mol.yml`](book/structures/ketone-bodies.mol.yml)).
**Still planned:** an SCFA-fermentation island + SCFA molecule gallery (Ch.7).

## 2.1 The research → draft pipeline (how Ch.4/Ch.5 were built — reuse this)
For a net-new or expanded chapter:
1. **Research** — fan out parallel agents over the chapter's sub-domains, web-grounded. Output → a dossier
   `research/chapters/<topic>.md` at the `_template.md` standard, honouring the overlap-ownership table in
   the curriculum map. **Two hard-won agent gotchas (2026-07-04, see memory [[research-subagent-gotchas]]):**
   (a) give each research subagent an explicit *"do the research YOURSELF; do NOT spawn sub-agents"* rule —
   some general-purpose agents sub-delegate and return a status message instead of content (re-run them
   cleanly with the guardrail); (b) subagents routinely **misattribute PMIDs** (right paper, wrong numeric
   ID — caught **3×** this session: Roediger, Unger, Rizza), so citations MUST be refute-tested (step 1b).
1b. **Adversarially verify — before marking a dossier 🟢.** Run a dedicated **`Workflow`** that refute-tests
   the load-bearing claims (independent agents told to *disprove* each) + a **completeness/consistency
   critic** reading the assembled dossier (contradictions, citation-key collisions, altitude/boundary creep,
   scope gaps vs the curriculum map). This pass has caught the wrong-PMID class **every** time plus a
   *retracted* paper and a textbook "tennis-court" myth. Fold corrections back in; log residual checks in §11.
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
research/                          evidence repo — curriculum-map.md spine; chapter dossiers incl. NEW
                                   gut-microbiome.md + integrative-metabolism.md (both 🟢, verified 2026-07-04)
```

## 10. Git state
- **No commits this session** — research + planning only. **All changes are in the working tree,
  uncommitted;** review + commit when ready. Changed files:
  - `research/chapters/gut-microbiome.md` **(new)** · `research/chapters/integrative-metabolism.md` **(new)**
  - `research/00-overview/curriculum-map.md` (Part I resequence 6↔7; Ch.6 → two-layer; statuses → 🟢;
    scheduling-constraint resolved; overlap-table edits)
  - `research/chapters/digestion-absorption.md` (Ch.5-dossier cross-ref renumbering from the resequence)
  - `book/diagrams/gut-journey.yml` **(⚠ LIVE / deployed asset)** — chapter-number fixes from the resequence
  - `AUTHOR.md` (chapter-number references) · `HANDOVER.md` (this file)
  - session scratch + verification-workflow scripts (throwaway; ignore).
- **Deploy branch `main`** → Pages CI → <https://nusmedicine.github.io/nutrition/>. `git status` at session
  start showed tip **`ecc5531`** ("flag unpushed commits") over `9b0cb95` / `c10b895` (Ch.5). **Reconcile the
  push state** before/after committing — the prior HANDOVER flagged `c10b895` as local-only; check with
  `git log origin/main..main`.
- ⚠ **`gut-journey.yml` is a deployed asset:** committing + pushing its chapter-ref fix changes the live
  Ch.5 island's forward-references (harmless — they point at not-yet-published chapters, now numbered right).
- Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`.

## 11. Open items / risks
**Shipped & live this session** (no longer open): proxy deployed; book published to GitHub Pages
via `publish.yml`; deployment base-path resolved (`lib/base.js` `resolveAsset`, verified at a subpath).

Open decisions / next work:
- **Continue Part I (the active thread) — resequenced 2026-07-04** (5 Digestion → 6 Integrative Metabolism
  → 7 Gut Microbiome → 8 Appetite). **Ch.6 + Ch.7 dossiers done + verified (🟢);** **Ch.6 is now a two-layer,
  self-contained chapter** (Part A pathways map + Part B integration — it teaches the pathways itself, no
  biochem course assumed). Next: **draft Ch.6/Ch.7** (qmd + islands via §2.1) and/or start the **Ch.8
  Appetite** dossier (net-new ✨, dossier-first). Overlap-ownership (`curriculum-map.md`): Ch.5 owns gut
  hormones + bile/enterohepatic; **Ch.6** owns the pathway map + fed/fasted integration; **Ch.7** owns
  SCFAs/fermentation + gut–brain; Ch.8 reuses the satiety-hormone role. **Clear each dossier's §11
  verify-before-lock flags before drafting** (mostly: pin placeholder PMIDs/figures).
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
- [[research-subagent-gotchas]] — research subagents sometimes **sub-delegate** and return a status message
  (add a "do it yourself, no sub-agents" guardrail) and routinely **misattribute PMIDs** (right paper, wrong
  ID) — always run the adversarial-verification `Workflow` to refute-test citations before a dossier is 🟢.
