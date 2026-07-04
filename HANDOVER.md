# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-05 (PART I DRAFTED + POLISHED).**
> **THE BOOK IS LIVE:** <https://nusmedicine.github.io/nutrition/> — deployed from branch **`main`**
> (repo `github.com/nusmedicine/nutrition`) by the Pages CI on every push (build islands → render →
> **asset check** → deploy).
>
> **★ 2026-07-05 — PART I POLISHING PASS + FOLLOW-UPS DONE (this session), all shipped & deployed.**
> A systematic 5-lens review (house-style · cross-refs · evidence · arc · quiz/case) drove a full polish
> — see **[`POLISH-PLAN.md`](POLISH-PLAN.md)** for findings + execution log. Highlights: **Ch.2 Energy
> Balance rebuilt** to the §11 template (new **`energy-budget`** BMR/TEE-calculator island; body-comp /
> NEAT / defended-balance content; 5 new web-verified citations); **Ch.6 altitude lowered** (enzyme names
> → asides; Part A/B → unnumbered `##`); **all cross-refs converted to chapter NAMES**; "So —"
> question-closes + Singapore sections added; **in-chapter cases are now MCQ-only** (live AI chat removed
> from the Ch.1–4 cases → it belongs only in the Integrated cases chapter; memory
> [[in-chapter-cases-mcq-only]]); new **`pillars-hub`** island (Ch.1); **gut-island hotspots
> recalibrated**; **Ch.4/5/6 dossier verify-before-lock flags resolved** (SG iodine/folate = voluntary,
> Krebs PMID pinned, Goh 2018 lactase added, NNS 4% confirmed). New tooling: **`scripts/render.mjs`** +
> **`scripts/validate-cases.mjs`** (§7).
>
> **★ PART I IS NOW FULLY DRAFTED (Ch.1–8) + reviewed.** Ch.6 (Integrative Metabolism), Ch.7 (Gut
> Microbiome) and **Ch.8 Appetite & Weight Regulation — the capstone**
> ([`appetite-weight-regulation.qmd`](book/chapters/appetite-weight-regulation.qmd)) are all drafted,
> browser-verified and committed. Ch.8 went through the **full net-new pipeline**: 8-agent research fan-out
> → dossier ([`appetite-weight-regulation.md`](research/chapters/appetite-weight-regulation.md), 🟢) →
> adversarial verification (every claim confirmed, 3 wrong-PMIDs fixed) → draft + `appetite-thermostat`
> island (accelerator/brake state-stepper; the GLP-1 drug plugs into the same circuit). A **4-agent Part I
> review** (workflow `partI-review`) then confirmed Ch.3–8 hang together well (cross-refs, overlap-ownership,
> altitude, arc all consistent) and its fixes are applied (Ch.2↔Ch.8 loop reciprocated; broken back-refs
> fixed). **DEFERRED FOLLOW-UPS the review flagged — ✅ ALL DONE 2026-07-05 (see the ★ note above + POLISH-PLAN.md):**
> **(1) Ch.2 (Energy Balance) + Ch.1 predate the §11 template** — Ch.2 got a *bounded* uplift (blockquote +
> RQ preview + leptin teaser so the loop reciprocates) but still lacks the map's full scope (body composition
> BMI/BIA/DXA/waist, the EAT+NEAT split, calorimetry/DLW) and a **teaching island** (a TEE-components stepper
> that Ch.8's adaptive-thermogenesis section could call back to). Retrofit Ch.1/Ch.2 to house style.
> **(2) Cross-reference STYLE split** — Ch.3/Ch.5 refer to chapters by NAME, Ch.6–8 by NUMBER; pick one
> convention book-wide (names survive re-ordering). **(3)** update `curriculum-map.md` Ch.8 line (amylin is
> *introduced* in Ch.8, not "reused from Ch.5"). **Otherwise: start Part II/III, or the Ch.9+ dossiers.**
>
> **ACTIVE THREAD = authoring Part I. Ch.7 The Gut Microbiome is now DRAFTED, verified & committed**
> ([`gut-microbiome.qmd`](book/chapters/gut-microbiome.qmd)) — composition/scale (1:1 correction) →
> development → **fibre→SCFA fermentation (owned centrepiece)** → microbial vitamins/B12 paradox → diet +
> the "-biotics"/fermented foods (science-to-plate triad fits naturally here) → applied
> (antibiotics/*C.diff*/FMT + test-kit/detox/gut-brain myth-busts). New **`scfa-flow`** island
> ([`ScfaFlow.svelte`](components/src/ScfaFlow.svelte)) + SCFA RDKit gallery + cross-feeding Mermaid +
> 10-Q quiz + microbiome-test-kit case + 44 refs. **SG context = food-culture-first** (fibre gap, fermented
> foods live-vs-cooked, Yakult, "no predominant microbiota" Khine 2021) per the citation principle.
> **An adversarial `Workflow` web-verified all 44 new citations → 42 clean, 2 wrong-PMIDs caught & fixed**
> (chaudhary 29470620→29497795; the "Yeo" SG paper was a mis-attribution → **Khine et al. 2021**). Also this
> session: **full-book preview** — all 7 chapters + preface + cases fit together (sidebar, flow, cross-refs);
> fixed Ch.6/Ch.7 to reference **unwritten chapters by name, not number** (matches the Ch.5 convention).
> **Next: Ch.8 Appetite** dossier (net-new ✨) or another Part I chapter. **Prior context:**
> **Ch.6 Integrative Metabolism DRAFTED** ([`integrative-metabolism.qmd`](book/chapters/integrative-metabolism.qmd)) — the
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
**Part I = 7 chapters authored (Ch.1–7). No dossier is now "ready to write" — Ch.8 Appetite is dossier-first (net-new).**

**Authored** (rendered clean + browser-verified): **Preface** ([`index.qmd`](book/index.qmd));
**Ch.1** six pillars; **Ch.2** energy balance; **Ch.3 Macronutrients** = THE template reference
([`AUTHOR.md`](AUTHOR.md) §11); **Ch.4 Micronutrients & hydration**; **Ch.5 Digestion & Absorption** (a
"follow the food" chapter with an illustrated tract island, a Mermaid enterohepatic loop, an ORT case);
**Ch.6 Integrative Metabolism** ([`integrative-metabolism.qmd`](book/chapters/integrative-metabolism.qmd))
— two-layer (Part A pathways map + Part B fed/fasted integration), 2 flagship islands + ketone gallery +
2 Mermaid + 9-Q quiz + alcohol-hypoglycaemia case; **Ch.7 The Gut Microbiome**
([`gut-microbiome.qmd`](book/chapters/gut-microbiome.qmd), **drafted 2026-07-05**) — fibre→SCFA
fermentation centrepiece, `scfa-flow` island + SCFA gallery + cross-feeding Mermaid + 10-Q quiz +
test-kit case. *(Ch.5 = earlier; Ch.6/Ch.7 = recent sessions. Both registered in `_quarto.yml` under Part I.)*

**Next dossier to write (net-new ✨):** **Ch.8 Appetite & Weight Regulation** — dossier-first via §2.1
(fan out → adversarial-verify → 🟢), then draft. Overlap-ownership (`curriculum-map.md`): Ch.8 owns
satiety hormones/leptin/adiposity signalling + the SCFA→GLP-1/PYY appetite payoff that Ch.6/Ch.7 hand to it.

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
Ch.7 adds **`scfa-flow`** ([`ScfaFlow.svelte`](components/src/ScfaFlow.svelte) — stepped fibre→ferment→3
SCFAs+gas→3 fates, data [`scfa-flow.yml`](book/diagrams/scfa-flow.yml)) + an **SCFA RDKit gallery**
([`scfa.mol.yml`](book/structures/scfa.mol.yml)). All bespoke inline-SVG, same design language.
**Pattern for the next island (Ch.8):** copy `ScfaFlow.svelte`/`MetabolicMap.svelte` — data-driven nodes +
edges + stepper + clickable detail panel, `loadManifest` + `store.js`, no external figures.

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

## 7. Environment, tooling & paths (this machine — READ THESE, saves re-discovery each session)

**Installed toolchain & exact paths** (portable installs; often NOT on `PATH` in a fresh shell —
use the full path). In **Git Bash**, `%LOCALAPPDATA%` = `$LOCALAPPDATA`:
| Tool | Path | Notes |
|---|---|---|
| **node** / **npm** | `%LOCALAPPDATA%\node\current\node.exe` (`\npm.cmd`) | Node 24 + npm 11. Bash: `"$LOCALAPPDATA/node/current/node.exe"`. |
| **quarto** | `%LOCALAPPDATA%\quarto\current\bin\quarto.exe` (fallback `%LOCALAPPDATA%\Programs\Quarto\bin`) | Quarto 1.9.x. |
| **python** | on `PATH` (`python -m http.server`) | Used by the preview launch configs. |
| **gh** | **NOT INSTALLED** | Do **not** use `gh`. For CI/deploy status use the **GitHub API** (below). Use `git` directly for push/commit. |
| **git identity** | `Kenneth Ban Hon Kim <kennethban@gmail.com>` | Repo `github.com/nusmedicine/nutrition`, deploy branch `main`. |

**The everyday loop (commands that work here):**
```bash
# 1. Build the Svelte island bundle (writes the gitignored book/assets/):
npm --prefix components run build            # or "$LOCALAPPDATA/node/current/node.exe" via npm.cmd
# 2. Lock-proof out-of-tree render (avoids the Dropbox os-error-32; see below):
node scripts/render.mjs                      # copies book/ -> %TEMP%\book-health-preview, renders there
# 3. Asset check (fails on any missing referenced asset):
node scripts/check-assets.mjs "C:/Users/Admin/AppData/Local/Temp/book-health-preview/_book"
# 4. Case-graph linter (dangling gotos + the MCQ-only rule, §5):
node scripts/validate-cases.mjs
```
Two reusable scripts were added 2026-07-05: **`scripts/render.mjs`** (out-of-tree render, self-locates
quarto) and **`scripts/validate-cases.mjs`** (case linter). `scripts/preview.ps1` is the PowerShell
equivalent that also serves.

**Browser-verify the islands** (memory [[book-preview-verification]]): after `render.mjs`, start the
preview server via the **`book-preview`** launch config (`preview_start "book-preview"`, python static
server on **port 8781**, serving `%TEMP%\book-health-preview\_book`) → `preview_eval` to navigate
(`location.href='http://localhost:8781/chapters/<file>.html'`) → the eval target closes on navigation,
so re-eval after a short wait to read the DOM. Svelte reactivity is async — `await` a tick before
reading. To inspect/calibrate a hotspot overlay island, inject a `<style>`/SVG overlay via `preview_eval`.

**Deploy & check it (no `gh`):** `git push origin main` triggers `publish.yml` (build islands → render →
asset check → deploy `book/_book`) → <https://nusmedicine.github.io/nutrition/>. Check the run via the
**public GitHub API** (PowerShell):
```powershell
Invoke-RestMethod "https://api.github.com/repos/nusmedicine/nutrition/actions/runs?per_page=3" `
  -Headers @{ "User-Agent"="claude-code"; "Accept"="application/vnd.github+json" } |
  ForEach-Object { $_.workflow_runs } | Select-Object status, conclusion, head_sha -First 3
```
(Pushing to `main` redeploys the live site — an outward-facing action; get explicit user go-ahead, and
the auto-mode classifier may still gate `git push` to the default branch.)

**Gotchas:**
- **Dropbox/Defender file-locks.** In-place `quarto render book` fails (`os error 32`); always render
  **out-of-tree** (`scripts/render.mjs` / `preview.ps1`). Same class hit Vite's dep cache in the spike
  (`EBUSY` on `.vite/deps`). Memory [[dropbox-quarto-render-lock]].
- **PowerShell/sandbox:** avoid `2>&1` on native exes; the sandbox static scanner false-positives on
  tokens like `/E` (robocopy) or globs in `Remove-Item` — drive copy+render from **Node** (`fs.cpSync` +
  `spawnSync`), which `render.mjs` does. Dropbox folder → harmless Git "LF will be replaced by CRLF".
- **Islands need HTTP** (not `file://`); data folders must be in `book/_quarto.yml` `resources:`.

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
CASE-FORMAT.md(§4a,§4.5=spec) CASE-AUTHORING.md(educator guide) POLISH-PLAN.md(Part-I review+log) README.md
scripts/render.mjs                 lock-proof out-of-tree render (Node; self-locates quarto) — see §7
scripts/validate-cases.mjs         case-graph linter: dangling gotos + the MCQ-only rule (§5)
scripts/preview.ps1                lock-proof local preview (self-locates node/quarto)
scripts/check-assets.mjs           CI + local asset-path checker (fails the build on any missing reference)
scripts/patient-proxy.ps1          local simulated-patient proxy launcher (self-locates node)
scripts/gen-persona-sprites.ps1    regenerate all patient sprite sets (DiceBear)
patient-proxy/                     PROD key-holding proxy: server.mjs, Dockerfile, docker-compose +
                                   frpc examples, .env(.example), README (deploy guide). .env gitignored.
book/
  index.qmd  _quarto.yml           preface; book config (chapters, resources, includes, patient-llm meta)
  chapters/*.qmd                   Part I (Ch.1–8): 01-why…, energy-balance, macronutrients, 04-micronutrients…,
                                   digestion-absorption, integrative-metabolism, gut-microbiome,
                                   appetite-weight-regulation + cases.qmd (Integrated cases)
  diagrams/*.yml                   island data: glycemic-index-load(gi), gut-journey(gut), metabolic-map,
                                   metabolic-switch, scfa-flow, appetite-thermostat, energy-budget(Ch.2), pillars-hub(Ch.1)
  structures/*                     RDKit galleries (dietary-fats, micronutrients, bile, ketone-bodies, scfa) + protein PDBs
  figures/anatomy/                 Ch.5: Servier digestive-apparatus.png (gut island), villus histology, fat-absorption.svg
  figures/food/  figures/structures/   food photos + structure SVGs (all licence-logged in CREDITS.csv)
  quizzes/*.quiz.yml               per-chapter quizzes
  cases/*.case.yml                 in-chapter = MCQ-only (1 per chapter: pillar-mapping-mr-tan, bmr-estimation,
                                   common-questions, iron-deficiency-aisha, ort-drip-free-rescue, alcohol-fasting-
                                   hypoglycaemia, gut-microbiome-test-kit, appetite-defended-weight) ;
                                   Integrated cases = live AI chat, sim-* (mdm-tan, mr-lim, aisha, mr-tan).
                                   validate-cases.mjs enforces "no patient-chat in a non-sim case".
  figures/personas/<id>/<emotion>.svg   sprite sets (mr-lim, mr-tan, aisha, mdm-tan)
  assets/                          GENERATED island bundle (gitignored)
components/src/                    main.js(REGISTRY), CasePlayer(+chat), Quiz, GlucoScale, Molecule, Protein,
                                   GutJourney(Ch.5), MetabolicMap+MetabolicSwitch(Ch.6), ScfaFlow(Ch.7),
                                   AppetiteThermostat(Ch.8), EnergyBudget(Ch.2 calc), PillarsHub(Ch.1),
                                   lib/{engine,expr,md,store,patient,config,base,manifest}.js
                                   (base.js=resolveAsset subpath-safe; manifest.js=loadManifest auto-resolves asset paths)
spikes/llm-patient/                throwaway bake-off + eval/ (battery.json, run-hosted.mjs, FINDINGS-hosted.md)
research/                          evidence repo — curriculum-map.md spine; chapter dossiers incl. NEW
                                   gut-microbiome.md + integrative-metabolism.md (both 🟢, verified 2026-07-04)
```

## 10. Git state
- **✅ PUSHED to `origin/main` 2026-07-05** — the whole Ch.6/Ch.7/Ch.8 stack (Part I complete + review +
  first-year cleanup + citation-principle) is now on the remote and **deploying via the Pages CI** →
  <https://nusmedicine.github.io/nutrition/>. Working tree clean; `git log origin/main..main` should be empty.
  What shipped this push (highlights): Ch.6 (`0b5046a` + SG/citation follow-ups), Ch.7 (`01471b1` + the
  `62ba8ad` wrong-PMID fixes), Ch.8 (`621ce6d` + `c1c5a1c` verified dossier), the Part I review fixes
  (`f2ab204`), and the dossiers/curriculum resequence (`1e9fcf8`).
- **Verify the deploy after pushing (no `gh` on this box):** query the public GitHub API for the
  `publish.yml` run — see §7 for the exact `Invoke-RestMethod` one-liner. The workflow builds islands →
  renders → **asset check** → deploys `book/_book`. If it fails, it is almost always a missing-asset path
  (check-assets gate) or a `.bib` key — run `scripts/check-assets.mjs` + a local render first.
- **Untracked / left alone:** `Update Health in Medicine 2026 v2.pptx` (user file); throwaway scratch
  (`…/scratchpad/render.mjs`, `ch6/7/8-refs.bib`, `gen_*.py`) under the session temp dir.
- **Deploy branch `main`** → Pages CI → <https://nusmedicine.github.io/nutrition/>. `book/_book/` is
  gitignored (built by CI). Future work: commit on `main`, push when ready — each push redeploys.
- **Local preview:** `.claude/launch.json` has a **`book-preview`** config (serves the out-of-tree render at
  `%TEMP%\book-health-preview\_book`, port 8781) — used because the in-tree `book/_book` copy intermittently
  hits the Dropbox lock. Render via the Node script (`fs.cpSync` out-of-tree + `quarto render` + copy back).
- ⚠ **`gut-journey.yml` is a deployed asset:** committing + pushing its chapter-ref fix changes the live
  Ch.5 island's forward-references (harmless — they point at not-yet-published chapters, now numbered right).
- Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`.

## 11. Open items / risks
**New editorial rule (2026-07-04, now in [`AUTHOR.md`](AUTHOR.md) §11d + memory
[[singapore-context-citation-principle]]):** the Singapore context is the **practical + social/cultural**
side of diet (food culture, festivals, Ramadan, hawker/supper culture, national policy) — **not** a
showcase for local research. Cite a Singapore study only if it is **socio-cultural** or supports
**evidence-based clinical practice**; never local basic-metabolism "for local relevance" (e.g. the A\*STAR
`roder2016pancreatic` review — flagged do-not-use in the Ch.6 dossier). A `Workflow` audit of all Part I
chapters (2026-07-04) found **every local citation already appropriate** — no cuts needed.

**Shipped & live this session** (no longer open): proxy deployed; book published to GitHub Pages
via `publish.yml`; deployment base-path resolved (`lib/base.js` `resolveAsset`, verified at a subpath).

Open decisions / next work:
- **Part I (Ch.1–8) is DRAFTED, POLISHED, verified and deployed.** The 2026-07-05 polishing pass +
  follow-ups are all done (see the ★ note at the top + [`POLISH-PLAN.md`](POLISH-PLAN.md)). ✅ Resolved
  this session: Ch.1/Ch.2 retrofit to the §11 template (Ch.2 **rebuilt** with the `energy-budget` island);
  all cross-refs → chapter NAMES; **gut-island hotspots recalibrated**; **Ch.4 dossier flags** (SG iodine
  + folate confirmed **voluntary** and cited; Turkey-PMID trap confirmed excluded; quiz already expanded);
  **Ch.5 dossier flags** (`yap1989` kept + newer `goh2018lactase` added; NNS ~4% wholegrain confirmed vs
  `mohNNS2022`; SG ORT epidemiology kept general — no verified local figure exists); **Ch.6 residual**
  (`krebs1969alcohol` PMID pinned; StatPearls bookshelf IDs already pinned).
- **Next: Part II onward** — no Part II/III/IV chapter is drafted yet. Dossiers exist in
  `research/chapters/` for the later spine (`09-overnutrition` … `14-interprofessional-referral`, plus
  10-CVD, 11-T2D, 12-public-health, 13-counselling); pick one and run the §2.1 pipeline.
- **Case convention (now enforced):** in-chapter cases are **MCQ-only**; the live AI chat lives only in
  the Integrated cases chapter (`sim-*`). `scripts/validate-cases.mjs` guards it. Memory
  [[in-chapter-cases-mcq-only]].
- **LLM patient (only if that's the focus):** access-control posture — `ALLOW_ORIGIN` is blank so the
  proxy is open to all origins (fine for a rate-limited + guardrailed pilot; gate with `ACCESS_TOKEN`
  and/or `ALLOW_ORIGIN=https://nusmedicine.github.io`); Phase-2 server-side guardrail hardening; battery
  gaps (multi-turn/turn-limit/non-English/positive-control).

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
- [[singapore-context-citation-principle]] — SG context = practical/social-cultural side of diet; cite local
  research only if socio-cultural OR clinical-practice, never local basic-metabolism. Codified in AUTHOR §11d.
- [[in-chapter-cases-mcq-only]] — per-chapter cases are MCQ/choice-only; the live AI patient-chat belongs
  ONLY in the Integrated cases chapter (`sim-*`). Don't add a `patient-chat` node to a per-chapter case.
