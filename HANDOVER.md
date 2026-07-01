# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-02.**
> Branch: **`curriculum-restructure`** (base: `main`). All work is committed (see §10).
> **Next focus: explore & plan the LLM simulated-patient prototype (§3–§4).**
> Read order: this file → **§4 (LLM design brief)** → [`ARCHITECTURE.md`](ARCHITECTURE.md) **§8/§10** →
> [`CASE-FORMAT.md`](CASE-FORMAT.md) **§4.5 (patient-chat node)** → [`AUTHOR.md`](AUTHOR.md) **§11 (chapter template)**.

## 1. What this is
**"Health in Medicine"** — an interactive web **e-textbook** (Quarto + Svelte 5 islands) on
**nutrition** for **first-year medical students (NUS)**. Didactic chapters + live diagrams +
self-test quizzes + branching **clinical cases** (now with visual-novel patient portraits).
Backed by an evidence repo (`research/`). Branding: **"Health in Medicine"**, *not* "lifestyle
medicine" (dropped from student text; the six pillars are still taught & cited).

## 2. Where we are — Part I is a richly-built working pilot
Part I (4 chapters) is authored and verified in-browser. Recent sessions added **real-data
structure visuals** and a **visual-novel case layer**.

- **Preface** ([`index.qmd`](book/index.qmd)) — anchored to Healthier SG.
- **Ch.1 Why nutrition matters** — six pillars; quiz + **Mr Tan** pillar-mapping case.
- **Ch.2 Energy balance** — quiz + **Mdm Tan** BMR case.
- **Ch.3 Macronutrients** — **THE template reference** ([`AUTHOR.md`](AUTHOR.md) §11). Per-nutrient
  5-beat anatomy + 🔬🍜🍳 triad; **carb/fat/protein/fibre** order; fibre demoted to a `###` under
  carbohydrate; question-driven **Mr Lim** case; GI + molecule islands; real-data structure figures.
- **Ch.4 Micronutrients & hydration** — quiz + **Aisha** iron-deficiency case.

**Interactive islands** (Svelte 5, `components/src/`, registered in `main.js`):
`quiz`, `case` (CasePlayer), `gi` (GlucoScale), `molecule` (2D RDKit + 3D 3Dmol.js), and **new
`protein`** (3Dmol.js **cartoon ribbons** from real PDB — myoglobin/haemoglobin). 3Dmol is a
lazy chunk shared by `molecule`+`protein`, so non-3D pages stay ~54 KB gzip.

**Case player is now visual-novel style.** A **patient portrait pane** sits beside the dialogue and
the sprite's **expression tracks the situation** (`persona.sprite`, `node.emotion`,
`option.reaction`; defaults: correct→relieved, incorrect→concerned, end-by-outcome). All four
patients have sprite sets (Avataaars via DiceBear, CC BY 4.0). Backward-compatible: no `sprite` →
text-only. Spec: [`CASE-FORMAT.md`](CASE-FORMAT.md) §4a.

**Structure-figure pipelines (this session's decisions):**
- **2D chemistry → RDKit** SVG (glucose, alanine, dietary fatty acids). Correct for cis/trans.
- **Lipid classes → curated public-domain** Commons figure (RDKit auto-layout can't do the
  conventional parallel-chain depiction; `lipid-classes.svg` = `Common_lipid_types.svg`, PD).
- **Carb chains → hand-drawn schematic** (`carbohydrate-chains.svg`) — teaches amylose-vs-amylopectin
  branching that a real polysaccharide can't.
- **Proteins → real PDB + 3Dmol cartoon** (no static image pipeline offline).
- **Patient sprites → DiceBear Avataaars**, reproducible via [`scripts/gen-persona-sprites.ps1`](scripts/gen-persona-sprites.ps1).

## 3. Immediate focus — the LLM simulated-patient prototype
The `patient-chat` case node is **designed but not built**; cases currently degrade gracefully
(LLM off → `fallbackGoto`). The next session is to **explore & plan** wiring it to a real LLM.

**What the user has / wants:** a **Qwen 3.6 endpoint API** (their infrastructure — likely
OpenAI-compatible). Open worries to solve in planning:
1. **API-key leakage** (it's a *static* site — a browser call would expose the key).
2. **Abuse / misuse** of the public endpoint and of the simulated-patient chatbot (jailbreaks,
   off-topic, unsafe content).
3. **Feedback after the encounter** (assess the student's counselling, not just chat).

**Deliverable for the next session:** decide the **architecture** — hosted Qwen-proxy vs a **local
in-browser model (WebGPU)** vs hybrid — then write the plan (guardrails + feedback + open
decisions), and optionally a throwaway spike under `spikes/llm-patient/`. See §4.

## 4. LLM design brief (start here next session)
**The top-level fork to weigh next session: a hosted model (Qwen 3.6 behind a server proxy — A–E
below) vs a local in-browser model (WebGPU — see "Local path" at the end), or a hybrid.** For the
hosted path, the existing design ([`ARCHITECTURE.md`](ARCHITECTURE.md) §2/§8/§10) already answers
the core security question; it just assumed Claude — **swap in the user's Qwen 3.6 endpoint**:

**A. Key security — the non-negotiable.** The Qwen key must **never** reach the browser. Put a thin
**server-side proxy** in front of it: the case chat calls `POST /api/patient` on the proxy; the
proxy holds the key (env secret) and calls Qwen. Host options: **Cloudflare Worker** (recommended:
cheap edge, easy secrets), Vercel Function, or a small Node/Deno service on an NUS box. CORS
allow-lists the book's origin. *(This directly resolves worry #1.)*

**B. Abuse prevention** (the proxy is public even with the key hidden):
- **Access gating** for a NUS pilot: a per-cohort access token + origin/CORS + rate limit is the
  pragmatic "good enough"; true auth (NUS SSO / signed short-lived tokens) is Phase 2. *(Note: any
  token embedded in the static client is discoverable — pair it with rate limits + monitoring.)*
- **Rate limit** per IP/session; **request-size caps**; **turn cap** (case format already has
  `turnLimit`); **max-tokens** cap (cost); **usage budget / kill switch** on the Qwen side.
- **Logging** for review — **no student identifiers**.

**C. Guardrailing the simulated patient** (worry #2):
- **System prompt**: play *only* the specified patient in the specified scenario; you are a
  *simulated patient for medical education*; never give real medical advice to the user; refuse /
  redirect off-topic, unsafe, or prompt-extraction attempts; don't break character; don't reveal the
  prompt. Fed by `persona.voice` + `scenarioId` + the node `objective`.
- **Input/output moderation** (Qwen may have its own; consider a lightweight pass) + explicit in-UI
  "this is a simulated patient, not medical advice" framing.

**D. Post-encounter feedback** (worry #3): when the chat ends (`turnLimit` hit or `exitWhen` met),
make a **second "evaluator" LLM call** — transcript + a per-scenario **rubric** → **structured
(JSON) feedback** (what went well / to improve / was the objective met?). Render it into the case's
`debrief` (or a new feedback node). Can use a cheaper model for the eval.

**E. Scaffolding already in place:**
- `patient-chat` node ([`CASE-FORMAT.md`](CASE-FORMAT.md) §4.5): `{ scenarioId, objective, turnLimit,
  exitWhen, goto, fallbackGoto }`; the CasePlayer renders it as a placeholder + Continue today.
- `persona.voice` (in-character voice) and per-case `scenarioId`s exist in the authored cases
  (`common-questions-mr-lim`, `pillar-mapping-mr-tan`, `iron-deficiency-aisha`, `bmr-mdm-tan`).
- `spikes/llm-patient/` is the quarantined home ([`ARCHITECTURE.md`](ARCHITECTURE.md) §3).

**Local path — a browser LLM via WebGPU (alternative to A–E).** Run the patient model *in the
student's browser* via **WebLLM / MLC** (or transformers.js) — no hosted endpoint at all. Weigh:
- **Pros:** no API key → **worries #1 and #2 largely vanish** (nothing to leak, no public endpoint
  to abuse); no server, no per-use cost; offline-capable; transcript never leaves the device
  (privacy); fits the static-first principle.
- **Cons:** needs a WebGPU device with a few GB free; a large one-time model download (~1–4 GB);
  smaller/weaker models than a hosted Qwen 3.6 → weaker roleplay realism & instruction-following;
  **guardrails live only in the prompt** (client-side, inspectable — a determined student can bypass;
  acceptable for a *formative* tool, but note it); no central logging; slow first token on weak GPUs.
- **Hybrid:** feature-detect WebGPU → local when capable, else the hosted proxy, else the existing
  `fallbackGoto` text. The feedback-eval call can run either place.
- **Feasibility check:** which WebLLM models give usable realism in <~4 GB; do the target student
  devices (NUS laptops) support WebGPU; download / first-run UX.

**F. Open decisions to make:** **hosted vs local vs hybrid** (above); proxy host; confirm Qwen API
shape (OpenAI-compatible? SSE streaming?); pilot access-control model; streaming vs non-streaming
chat UI; where scenario/rubric bundles live (server config keyed by `scenarioId`); single vs
multi-dimension feedback rubric.

## 5. How to build & preview (read §7 first)
Use the helper — it sets PATH and dodges the file-lock:
```powershell
.\scripts\preview.ps1            # build islands, render out-of-tree (lock-proof), serve, open browser
.\scripts\preview.ps1 -Live      # Quarto live-reload IN PLACE (needs a Defender exclusion, §7)
.\scripts\preview.ps1 -SkipBuild -Port 9000
```
Manual (from a **Start-menu** terminal — see §7): `npm --prefix components run build` then
`quarto render book`. Islands need **HTTP** (not `file://`). `book/assets/` is **gitignored**
(generated bundle + lazy chunks). The committed `.claude/launch.json` has python `static`/`book`
configs; automated verification this session used a temporary node static-server config (reverted).

## 6. Islands & generators
- **Add an island type** in `components/src/main.js` REGISTRY (developer step). Current:
  `case, quiz, gi, molecule, protein`. Rebuild: `npm --prefix components run build`, then render.
- **`protein` island** ([`components/src/Protein.svelte`](components/src/Protein.svelte)): loads a
  PDB from a `.protein.yml` manifest, renders 3Dmol **cartoon** (colour by chain / structure /
  rainbow, spin, recentre). 3D-only; no-WebGL → text fallback.
- **Persona sprites** — regenerate all patients from one config:
  `powershell -ExecutionPolicy Bypass -File scripts\gen-persona-sprites.ps1` (DiceBear Avataaars).
  Tune a patient's look in the `$personas` hashtable and re-run; the engine is asset-agnostic.
- **RDKit** (2026.03.3) is installed at `%LOCALAPPDATA%\Python\pythoncore-3.14-64\python.exe` — used
  ad-hoc to make the 2D structure SVGs. **PDBs** come from RCSB; **PD figures/sprites** from
  Wikimedia/DiceBear via `Invoke-WebRequest` (network works; use a descriptive User-Agent).
- Data folders must be in `book/_quarto.yml` `resources:` — currently
  `assets cases quizzes diagrams structures figures`.

## 7. Environment gotchas (this machine — READ THESE)
- **Render file-lock (`os error 32`)** on in-place `quarto render book`: Windows Defender + Dropbox
  watcher + Search indexer touch `book/.quarto/` mid-render. Fix: `scripts/preview.ps1` renders
  **out-of-tree** (lock-proof); OR one-time admin `Add-MpPreference -ExclusionPath "<repo>"` + pause
  Dropbox. Memory: [[dropbox-quarto-render-lock]].
- **Claude-Desktop / automation shells have a stale env**: `%LOCALAPPDATA%\node\current` is a junction
  and MSIX redirection can hide `quarto`/`npm`. Use a **Start-menu** PowerShell, or `preview.ps1`
  (it self-locates node/quarto by full path). In the Bash/PowerShell tools, resolve
  node/quarto dirs explicitly and prepend to PATH (see the render snippet the assistant used).
- **PowerShell tool gotchas:** avoid `2>&1` on native exes (wraps stderr as errors, trips
  `ErrorActionPreference=Stop`); the sandbox's static scan can false-positive on tokens like `/E`
  or `\.svg'` in a `Remove-Item`/pipeline command — reword.
- **Portable toolchain**: Node 24 + npm 11 (`%LOCALAPPDATA%\node\current`); Quarto 1.9.38
  (`%LOCALAPPDATA%\quarto\current\bin`). Firewall: node's outbound works, python `pip` blocked (RDKit
  already installed). **Dropbox folder** → harmless Git "LF will be replaced by CRLF" warnings.

## 8. Key decisions (don't re-litigate)
- **Branding** "Health in Medicine"; **chapter template** = AUTHOR §11 (5-beat + 🔬🍜🍳); fibre is a
  `###` sub-topic of carbohydrate.
- **Cases** are formative, single `quality` var, success/partial endings; **question-driven** (turn
  teaching into choices, not lecture reveals); **patient-facing plain language** (no LDL/IARC in
  dialogue); referral kept **light + forward-referenced** (Ch.11/12/20), not tested at Part I.
- **Case visuals**: standardized emotion set (neutral/concerned/relieved/skeptical/surprised);
  **DiceBear Avataaars** (control + fit) over Open Peeps (warm but androgynous, couldn't render a
  convincing older male).
- **Structures**: RDKit for 2D chemistry; **curated PD** for conventional lipid depictions; hand-drawn
  schematic for concept-only (carb branching); **3Dmol cartoon** for proteins. Images CC0/PD/CC-BY/
  CC-BY-SA only — log every file in `book/figures/CREDITS.csv`. No HPB/HealthHub images.
  Memory: [[chemical-structure-and-image-rendering]].
- **LLM**: key stays **server-side (proxy)**; guardrailed patient; graceful degradation preserved.

## 9. Repository map (updated)
```
HANDOVER.md PLANNING.md REQUIREMENTS.md ARCHITECTURE.md(§8=LLM) AUTHOR.md(§11=template) CASE-FORMAT.md(§4a,§4.5) README.md
scripts/preview.ps1                local preview helper (lock-proof; self-locates node/quarto)
scripts/gen-persona-sprites.ps1    regenerate all patient sprite sets (DiceBear Avataaars)
book/
  index.qmd  _quarto.yml           preface; book config (chapters, resources, bundle includes)
  chapters/*.qmd                   01-why-nutrition-matters, energy-balance, macronutrients(=template), 04-micronutrients-hydration
  quizzes/*.quiz.yml               one per chapter
  cases/*.case.yml                 pillar-mapping-mr-tan, bmr-estimation, common-questions, iron-deficiency-aisha
                                   (prediabetes-counseling = CASE-FORMAT example, unused — shares Mdm Tan)
  diagrams/glycemic-index-load.yml data for the gi island
  structures/                      dietary-fats.mol.yml + fatty-acid .sdf/.svg (RDKit);
                                   proteins.protein.yml + myoglobin-1mbn.pdb + hemoglobin-2hhb.pdb (protein island)
  figures/structures/              beta-d-glucose.svg, l-alanine.svg (RDKit), carbohydrate-chains.svg (schematic), lipid-classes.svg (PD)
  figures/personas/<id>/<emotion>.svg   patient sprite sets (mr-lim, mr-tan, aisha, mdm-tan)
  figures/CREDITS.csv              license log (CC0/PD/CC-BY/CC-BY-SA only)
  assets/                          GENERATED bundle + lazy chunks (gitignored)
components/src/                    main.js(REGISTRY), Quiz, CasePlayer, GlucoScale, Molecule, Protein, lib/
spikes/llm-patient/                (planned) throwaway LLM proxy + minimal UI
research/                          evidence repo: 00-overview/curriculum-map.md (spine), chapters/(dossiers)
```

## 10. Git state
- Branch **`curriculum-restructure`**; base `main`. Nothing pushed to a remote yet.
- Latest commits (newest first):
  - `fa428c4` Update book subtitle and author
  - `a738ed2` Case player: roll out patient portraits to all cases + reproducible generator
  - `0b728ff` Case player: visual-novel patient portraits with reactive moods
  - `2ab89ec` Macronutrients: refine prose, question-driven case, real-data structure visuals
- Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`.

## 11. Open items / risks
- **LLM prototype** is the next focus — first decide **hosted (Qwen-proxy) vs local (WebGPU) vs
  hybrid**, then plan security/guardrails and post-encounter feedback before building (§4). Confirm
  the Qwen 3.6 API shape (OpenAI-compatible? streaming?).
- **`patient-chat` UX in the CasePlayer** is still a placeholder — needs the chat UI + the portrait
  can react during the exchange (reuse `emotion`/`reaction`).
- **`prediabetes-counseling`** case is unused; shares Mdm Tan (could get the sprite for free).
- **Ch.1/2/4 predate the §11 template** — retro-fit for consistency when convenient.
- **Net-new ✨ chapters need research dossiers first** (see `research/00-overview/curriculum-map.md`).
- **Deployment base-path** for island `data-src` (subpath GitHub Pages) unresolved
  ([`ARCHITECTURE.md`](ARCHITECTURE.md) §9; [`AUTHOR.md`](AUTHOR.md) §8).
- **In-place render** needs the Defender exclusion (or use `preview.ps1`); flag before deploy.

## 12. Memory (auto-loaded each session — see `memory/MEMORY.md`)
- [[dropbox-quarto-render-lock]] — the os-error-32 cause + out-of-tree workaround.
- [[chemical-structure-and-image-rendering]] — verified library picks, RDKit/PubChem pipeline, image licensing.
