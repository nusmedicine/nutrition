# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-05 (PART III COMPLETE ·
> SPINE RE-AXED TO 22 CHAPTERS · PART II/III PUSHED & DEPLOYING).**
>
> **★★ NEXT ACTION: DRAFT Ch.10 "Menopause & Midlife Health"** — the one remaining front-half chapter
> (net-new dossier needed). Then Part IV (conditions) and Part V (integration). See "Remaining work".
>
> **★ THE BOOK IS LIVE:** <https://nusmedicine.github.io/nutrition/> — deployed from `main` by the Pages
> CI on every push. **Part II/III (the front half of the advising arc) was pushed 2026-07-05 and is
> deploying now** — verify the `publish.yml` run (§6). Live after this deploy: Part I (Ch.1–8) + the
> life-cycle, what-a-healthy-diet, evidence-vs-hype, assessing-diet and counselling chapters. (Ch.10
> Menopause still to come — until then the rendered numbers compact; see the numbering caveat below.)

## 0. What happened this session (2026-07-05)

Drafted the **entire front half of the "advising" arc** and **re-organised the spine**. Every chapter
went through the same discipline: **adversarially verify citations (Workflow) → draft qmd + island(s)
+ quiz + MCQ case → multi-dimensional review (Workflow) → apply fixes → render/browser-verify →
commit.** Six new commits on `main`:

| Commit | What |
|---|---|
| `e895bf5` | **Ch.9-slot "What a Healthy Diet Looks Like"** + HealthyPlate island (QQH plate-builder, 3-cuisine toggle) |
| `31cdbbc` | **"Assessing Diet & Talking to Patients"** + DietHistory + NutriGrade islands |
| `8b1975d` | **"Nutrition Across the Life Cycle"** + LifeStages island (+ first Part II split) |
| `2a542de` | **Re-axis to the 22-chapter patient-state spine** (decision G) — docs + `_quarto.yml` only |
| `5acf96f` | **Popular-diets section** (into the healthy-diet chapter) + **"Evidence vs Hype"** + ClaimAnalyzer island |
| `d791ac0` | **"Behaviour-Change Counselling"** + ResponseChooser island (completes Part III) |

**6 new Svelte islands** (all in `components/src/`, registered in `main.js`, data in `book/diagrams/`):
`healthy-plate`, `life-stages`, `diet-history`, `nutri-grade`, `claim-analyzer`, `response-chooser`.
All bespoke, data-driven (`loadManifest` + `store.js`), same card/colour language as the Part I islands.

## 1. The spine — RE-AXED 2026-07-05 (decision G). 22 chapters, 5 parts, patient-state axis.

The old single Part II ("Advising people in a state of health") was **re-organised around the patient**
(supersedes the earlier knowledge/skills split, decision E). Full table + rationale in
[`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md) (read it first).

| # | Chapter | Status | Island(s) |
|---|---------|--------|-----------|
| **I** | **— The metabolic & physiological basis —** | ✅ **deployed** | (Part I) |
| 1–8 | Why…, Energy Balance, Macronutrients, Micronutrients, Digestion, Integrative Metabolism, Gut Microbiome, Appetite | ✅ book | gi, gut, metabolic-map/switch, scfa-flow, appetite-thermostat, energy-budget, pillars-hub |
| **II** | **— Across the life stages —** (needs vary by stage) | | |
| 9 | Nutrition Across the Life Cycle | ✅ **drafted** (local) | `life-stages` |
| 10 | **Menopause & Midlife Health** ✨ | 🔴 **NEXT — net-new dossier** | (tbd) |
| **III** | **— Advising the healthy —** (toolkit + skills; prevention) | | |
| 11 | What a Healthy Diet Looks Like (patterns, guidelines, **popular diets**) | ✅ **drafted** (local) | `healthy-plate` |
| 12 | Evidence vs Hype & Everyday Questions (incl. **acne**) | ✅ **drafted** (local) | `claim-analyzer` |
| 13 | Assessing Diet & Talking to Patients | ✅ **drafted** (local) | `diet-history`, `nutri-grade` |
| 14 | Behaviour-Change Counselling | ✅ **drafted** (local) | `response-chooser` |
| **IV** | **— Advising the chronically ill —** (maintain health *with* disease) | | |
| 15 | Obesity & Metabolic Syndrome (over-nutrition) | 🟢 dossier `09-overnutrition` | |
| 16 | Undernutrition & Malnutrition (the other tail) | 🟡 dossier `08-life-cycle-undernutrition` (undernutrition part) | |
| 17 | Type 2 Diabetes | 🟢 dossier `11-type-2-diabetes` | |
| 18 | Cardiovascular Disease & Hypertension | 🟢 dossier `10-cvd-hypertension` | |
| 19 | **Chronic Kidney Disease** ✨ | 🔴 net-new | |
| 20 | **Bone Health & Osteoporosis** ✨ | 🔴 net-new | |
| **V** | **— Integration & practice —** | | |
| 21 | Interprofessional Practice & Referral | 🟢 dossier `14-interprofessional-referral` | |
| 22 | **Capstone: Integrative Cases (LLM patient)** ✨ | 🔴 net-new (LLM patient already built, §5) | |

> **⚠ PROVISIONAL NUMBERING IN THE RENDERED BOOK.** Because Ch.10 (menopause) isn't drafted yet, the
> live/rendered chapter numbers **compact** — life-cycle currently renders as Ch.9, healthy-diet as
> Ch.10, evidence as Ch.11, assessing as Ch.12, counselling as Ch.13. They settle to the table's
> 9/11/12/13/14 once menopause is inserted. **The part labels and ORDER are correct now**; only the
> numbers shift. Cross-refs are all **by name**, so this is harmless.

## 2. The pipeline (reuse it for every chapter) — and a hard-won discipline

For each chapter (net-new or dossier-ready):
1. **Read the dossier** (`research/chapters/<topic>.md`) — apply its "apply-at-draft" notes and any SPLIT directives.
2. **Adversarially verify the load-bearing citations FIRST**, via a `Workflow` of parallel web-grounded
   agents told to *refute* each PMID/claim. **This caught a real error in EVERY chapter this session**
   (memory [[research-subagent-gotchas]]): Ch.9/13 RCT was **Shin/Puri/Finkelstein, not "Dunford"**;
   GDM paper first author is **Chong, not "Chu"**; the counselling chapter **overstated `frost2018mi`**;
   SMJ feeding consensus is a **2026** paper; VITAL/CARET/Johnston hygiene flags resolved; the ACV RCT
   **retraction (23 Sep 2025)** confirmed. **Never print a citation before this pass.**
3. **Draft** qmd (AUTHOR §11 house style) + skills-style island(s) + MCQ quiz + **MCQ-only** case; add
   `@keys` to `book/references.bib`; register the chapter in `book/_quarto.yml` and the island in `main.js`.
4. **Review** with a multi-dimensional `Workflow` (house-style/altitude · cross-refs & decisions ·
   evidence-accuracy vs the verified facts · quiz/case quality · island correctness). Apply the fixes.
5. **Build + render + browser-verify**: `npm --prefix components run build` → `node scripts/render.mjs`
   → `node scripts/check-assets.mjs` → `node scripts/validate-cases.mjs` → preview_start "book-preview"
   (port 8781) → drive the island/case (memory [[book-preview-verification]]). Then commit.

**House rules that reviewers keep enforcing** (AUTHOR §11): cross-ref chapters **by NAME** never number;
**never say "first-year" in prose**; in-chapter cases are **MCQ-only** (no `patient-chat`; enforced by
`validate-cases.mjs`); the do-no-harm/eating-disorder safety fork in a case must **hard-route unsafe
choices to `remedial`** so a high score can't buy the success ending; the 🔬🍜🍳 triad is **exempt for
Part II/III skills chapters** (use a lone 🍜 only where genuine — noted in AUTHOR §11b).

## 3. Decisions this session (don't re-litigate) — in `curriculum-map.md`

- **(E) Part split** — SUPERSEDED by (G).
- **(F) Popular diets** — the *What a Healthy Diet Looks Like* chapter owns the **map** (keto/low-carb/IF/
  paleo + a pattern verdict + how to counsel); the *Evidence vs Hype* chapter owns the **appraisal**;
  therapeutic low-carb (T2D remission) → the diabetes chapter. **Done** (section + ClaimAnalyzer).
- **(G) Patient-state re-axis** — the spine is organised by *who you advise* (life stages → healthy →
  chronically ill), 22 chapters. Menopause → Part II (a life stage); healthy-diet opens Part III; CKD
  added (Ch.19); acne stays a Ch.12 evidence example (no separate skin chapter). Two tails
  (over/under-nutrition) adjacent in Part IV.
- Carried from prior: **(A)** food-environment framing (Ch.11) vs label-reading skill (Ch.13);
  **(B)** 5 A's = **Assess-Advise-Agree-Assist-Arrange** (diet/lifestyle ordering, NOT the tobacco
  Ask-Advise-Assess-Assist-Arrange), consistent across Ch.13/14; **(C)** life-cycle vs undernutrition
  boundary; **(D)** Ch.12 re-appraises Part I's trials, doesn't re-teach.

## 4. Remaining work (front half → back half)

1. **Ch.10 Menopause & Midlife Health (NEXT).** Net-new — needs a dossier (research fan-out → adversarial
   verify → 🟢), then draft. Scope (curriculum-map "new-chapter scope seeds"): nutrition around menopause
   — bone, cardiometabolic shift, weight redistribution, phytoestrogens **evidence vs hype**; practical
   counselling. Depth: midlife literacy & myth-busting, not HRT management. A life stage, so it pairs with
   the life-cycle chapter (Ch.9). Completes Part II.
2. **Part IV (conditions).** Ch.15 Obesity 🟢, Ch.16 Undernutrition 🟡 (from the `08-life-cycle-undernutrition`
   SPLIT — the undernutrition half: defining malnutrition, MUST scoring, MDT, special/texture-modified
   diets, the Mdm Tan/MUST case), Ch.17 T2D 🟢, Ch.18 CVD/HTN 🟢, Ch.19 CKD 🔴 (net-new), Ch.20 Bone 🔴
   (net-new). Frame Part IV as *maintaining health WITH disease*. Over/under-nutrition taught as the two tails.
3. **Part V.** Ch.21 Referral 🟢 (`14-interprofessional-referral`); Ch.22 Capstone (net-new; the LLM
   patient is already built & deployed, §5 — this chapter is its content home; the counselling case
   "two kopi gao" is a natural live-chat seed).
4. **Then: review the 6 local commits and PUSH** to deploy Part II/III (outward-facing — get go-ahead).

## 5. The LLM simulated-patient — BUILT, VERIFIED & DEPLOYED (unchanged; touch only if it's the focus)

The `patient-chat` case node hands off to a real, guardrailed AI patient. **Client-composed prompt**
(from case YAML `persona` + node `brief`/`opener`/`objective`); **key server-side** in a zero-dep proxy
(`patient-proxy/`, deployed as a Docker sidecar via FRP at `patient-api.phm.nusmed.space`); **SSE
streaming**; **per-turn `(emotion)` tag** drives the portrait; **post-encounter JSON rubric**; **graceful
degradation** to a placeholder + `fallbackGoto` when no endpoint. Lives ONLY in the Integrated-cases
`sim-*` cases. Endpoint reality (memory [[qwen-llm-endpoint]]): llama.cpp router, OpenAI route `/v1`,
Qwen3.6 needs `enable_thinking:false`. Book meta in `book/_quarto.yml` points at the live proxy.
Access posture: `ALLOW_ORIGIN` blank (open, but rate-limited + guarded). Code:
`components/src/lib/{patient,config}.js`, `CasePlayer.svelte`, `lib/engine.js`.

## 6. Build, preview & deploy (env gotchas below)

```bash
# Toolchain is portable, often NOT on PATH in a fresh shell — use full paths.
#   node/npm: %LOCALAPPDATA%\node\current\node.exe (\npm.cmd)  [Bash: "$LOCALAPPDATA/node/current/..."]
#   quarto:   %LOCALAPPDATA%\quarto\current\bin\quarto.exe
#   gh:       NOT INSTALLED — use git directly + the public GitHub API for CI status.
npm --prefix components run build              # 1. rebuild island bundle (gitignored book/assets/)
node scripts/render.mjs                        # 2. LOCK-PROOF out-of-tree render (avoids Dropbox os-error-32)
node scripts/check-assets.mjs "C:/Users/Admin/AppData/Local/Temp/book-health-preview/_book"   # 3. asset gate
node scripts/validate-cases.mjs                # 4. case linter (dangling gotos + MCQ-only rule)
# Browser-verify (memory book-preview-verification): preview_start "book-preview" (python, port 8781,
# serves %TEMP%\book-health-preview\_book) → preview_eval location.href=... → step the island/case.
# Svelte reactivity is async — await a tick before reading the DOM. Islands persist to localStorage,
# so clicking toggles/reset state carries across evals; account for it.
```
**Gotchas:** Dropbox/Defender file-locks make in-place `quarto render book` fail (os error 32) and cause
intermittent `git .git/objects Permission denied` on commit (the commit still lands — verify with
`git fsck --connectivity-only`) — always render **out-of-tree** via `render.mjs`. Islands need **HTTP**
(not `file://`); data folders must be in `_quarto.yml` `resources:`. `{@const}` must be an immediate
child of a block (`{#if}`/`{#each}`…) — a Svelte compile error caught twice this session. Harmless Git
"LF will be replaced by CRLF" warnings on every add.

**Deploy check (no `gh`):** `git push origin main` → `publish.yml` (build islands → render → asset check
→ deploy `book/_book`). Query the run via the public GitHub API:
```powershell
Invoke-RestMethod "https://api.github.com/repos/nusmedicine/nutrition/actions/runs?per_page=3" `
  -Headers @{ "User-Agent"="claude-code"; "Accept"="application/vnd.github+json" } |
  ForEach-Object { $_.workflow_runs } | Select-Object status, conclusion, head_sha -First 3
```

## 7. Repository map (updated)

```
HANDOVER.md(this) AUTHOR.md(§11=template+house rules) PART2-ROADMAP.md(pre-flight; predates the re-axis banner)
POLISH-PLAN.md(Part-I review log) CASE-FORMAT.md / CASE-AUTHORING.md(case DSL + educator guide)
scripts/ render.mjs · check-assets.mjs · validate-cases.mjs · preview.ps1 · patient-proxy.ps1
patient-proxy/  PROD key-holding proxy (deployed; §5)
book/
  _quarto.yml            chapters (Parts I–III + Integrated cases), resources, patient-llm meta
  references.bib         SINGLE source of truth for citations (book renders from here, NOT research/evidence/)
  chapters/*.qmd         Part I (1–8) + dietary-guidelines-patterns · life-cycle-nutrition ·
                         evidence-vs-hype · 06-dietary-assessment · behaviour-change-counselling · cases.qmd
  diagrams/*.yml         island data incl. NEW: healthy-plate, life-stages, diet-history, nutri-grade,
                         claim-analyzer, response-chooser
  quizzes/*.quiz.yml · cases/*.case.yml   (in-chapter cases MCQ-only; sim-* = live AI chat)
components/src/          main.js(REGISTRY) + CasePlayer, Quiz, … + NEW: HealthyPlate, LifeStages,
                         DietHistory, NutriGrade, ClaimAnalyzer, ResponseChooser ; lib/{engine,store,manifest,base,…}
research/
  00-overview/curriculum-map.md   ← THE 22-ch spine + decisions A–G (read first)
  chapters/*.md                   dossiers (05-dietary-guidelines-patterns, 06-dietary-assessment,
                                  07-evidence-literacy, 08-life-cycle-undernutrition[SPLIT], 13-counselling,
                                  09-overnutrition, 10-cvd-hypertension, 11-type-2-diabetes, 14-interprofessional…)
  evidence/references.bib         ← research-side bib; NOT the render source. Keep in sync when you fix a key.
```

## 8. Git state

- **PUSHED to `origin/main` 2026-07-05** — the whole Part II/III re-axis + chapter stack (`e895bf5`…the
  handover commit) is on the remote and **deploying via the Pages CI** (`publish.yml` → build islands →
  render → asset check → deploy `book/_book`). Verify the run (§6); `origin/main..main` should be empty.
- **Working tree clean** except the untracked user file `Update Health in Medicine 2026 v2.pptx` (leave it).
  `git fsck` clean. Future work: commit on `main`, push when ready — each push redeploys the live site.
- Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`. Deploy branch `main` → Pages CI →
  <https://nusmedicine.github.io/nutrition/>. `book/_book/` is gitignored (built by CI).

## 9. Memory (auto-loaded each session — `memory/MEMORY.md`)

- [[research-subagent-gotchas]] — **the load-bearing one this session**: always adversarially verify citations
  before printing; caught a real PMID/author error in every chapter (Shin≠Dunford, Chong≠Chu, frost overstated…).
- [[book-preview-verification]] — render out-of-tree → preview_start "book-preview" (8781) → eval-navigate; async reactivity.
- [[dropbox-quarto-render-lock]] — os-error-32 / EBUSY / commit permission-denied → render & work out-of-tree.
- [[in-chapter-cases-mcq-only]] — per-chapter cases MCQ-only; live AI chat only in `sim-*` Integrated cases.
- [[singapore-context-citation-principle]] — SG context = practical/social-cultural + clinical-practice, not local basic-science.
- [[chemical-structure-and-image-rendering]] · [[qwen-llm-endpoint]] — RDKit/licensing; LLM endpoint shape.
