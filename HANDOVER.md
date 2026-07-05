# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-05 (PART II RE-ORGANISED &
> RE-SEQUENCED · 3 OF 6 PART-II CHAPTERS DRAFTED · PUSHED & DEPLOYING).**
>
> **★★ NEXT ACTION: DRAFT Ch.10 "Childhood & Adolescence"** — the next chapter in Part II's chronological
> arc (a *split-and-deepen*, like Infancy and Pregnancy). Then Ch.11 Adulthood (net-new) and Ch.14 Healthy
> Ageing, then Part IV (conditions) and Part V. See §4.
>
> **★ THE BOOK IS LIVE:** <https://nusmedicine.github.io/nutrition/> — deployed from `main` by the Pages CI
> on every push. This session's work (the Part II re-organisation + Infancy/Pregnancy/Menopause chapters +
> the option-markdown component fix) was **pushed 2026-07-05 and is deploying** — verify the `publish.yml`
> run (§6).
>
> **⚠ THE SOURCE OF TRUTH IS [`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md)**
> (read it first) and the auto-loaded memory [[part2-drafting-state]]. This handover summarises; the map has
> the full 26-chapter table + decisions A–I.

## 0. What happened this session (2026-07-05)

**Re-organised Part II and drafted the first three life-stage chapters.** Two structural decisions plus a
run of chapters through the standard discipline.

- **Decision H — Part II split per life stage.** The single "Nutrition Across the Life Cycle" overview was
  split into per-stage chapters, each on a shared **internal↔external driver template** (what changes
  *inside* — hormonal/growth/physiological — vs the *external* levers: activity, food environment, screening).
- **Decision I — Part II re-sequenced chronologically + a new Adulthood chapter.** The arc now follows the
  reader's own life (starting with pregnancy read backwards): **Infancy (9) → Childhood & Adolescence (10) →
  Adulthood: working life & activity (11, NEW) → Pregnancy & Lactation (12) → Menopause & Midlife (13) →
  Healthy Ageing (14).** The old life-cycle overview is **retired** (§7). Book → **26 chapters**.
- **3 chapters drafted → reviewed → committed:** Ch.9 Infancy (`9eb4d8b`), Ch.12 Pregnancy (`f930886`),
  Ch.13 Menopause (`774048d`); plus the re-sequence + a shared component fix (`28d55a6`).
- **3 new bespoke Svelte islands:** `menopause-timeline`, `requirement-dial`, `food-form-sorter` (all in
  `components/src/`, registered in `main.js`, data in `book/diagrams/`).
- **Shared component fix:** `Quiz.svelte` + `CasePlayer.svelte` now render **option text as inline markdown**
  (previously only stems/feedback did, so `**bold**` in options showed literal asterisks). Author option text
  with markdown freely.

## 1. The spine — 26 chapters, 5 parts (decisions H+I). Full table in `curriculum-map.md`.

Part II is the active area. Legend: 🔴 not started · 🟡 split-source ready · 🟢 dossier ready · ✅ drafted/committed.

| # | Part II · Across the life stages (chronological) | Status | Island |
|---|---|---|---|
| 9 | **Infancy & Early Childhood** | ✅ committed | `food-form-sorter` |
| 10 | **Childhood & Adolescence** | 🟡 **NEXT — split-and-deepen** | (tbd) |
| 11 | **Adulthood: working life & activity** ✨ | 🔴 net-new (needs a dossier) | (tbd) |
| 12 | **Pregnancy & Lactation** | ✅ committed | `requirement-dial` |
| 13 | **Menopause & Midlife Health** | ✅ committed | `menopause-timeline` |
| 14 | **Healthy Ageing (Older Adults)** | 🟡 split-and-deepen | (tbd) |

Part I (Ch.1–8, ✅ deployed) unchanged. Part III (14–17 Advising the healthy, ✅ book), Part IV (18–24
conditions), Part V (25–26 integration) — see `curriculum-map.md`. **Cross-refs are by NAME**, so the
provisional numbering (Infancy/Pregnancy/Menopause render as 9/10/11 until Ch.10/11/14 land) is harmless.

## 2. The pipeline (reuse it for every chapter) — and the load-bearing discipline

For each chapter (split-and-deepen or net-new):
1. **Read the source** — `research/chapters/08-life-cycle-undernutrition.md` (SPLIT dossier) +
   `research/chapters/life-cycle-nutrition.source.qmd` (retired overview's prose) for the split chapters;
   deepen the *mechanism/evidence layer*, don't repeat the headline.
2. **Research + adversarially verify — a `Workflow`.** 5 web-grounded research agents (one per subtopic,
   on the internal↔external template) → **refute-every-PMID verification** → synthesize the dossier in house
   format → a **completeness/boundary critic**. **This caught real errors in EVERY chapter** (memory
   [[research-subagent-gotchas]]): wrong PMIDs / wrong author / wrong CI / a synthesis agent re-introducing
   numbers a parent dossier had deleted / 5 wrong-paper PMIDs in one chapter. **Never print a citation before
   this pass.** Apply the critic's fixes; run a small find-verify Workflow for any added-topic citations.
3. **Draft** the qmd (AUTHOR §11 house style) + a **bespoke island** + MCQ quiz + **MCQ-only** case; add
   `@keys` to `book/references.bib`; register the chapter in `book/_quarto.yml` and the island in `main.js`.
4. **Review** with a 5-dimension `Workflow` (house-style/altitude · cross-refs & decisions · evidence vs the
   verified dossier · quiz/case · island fidelity) → triage → apply fixes.
5. **Build + render + browser-verify**: `npm --prefix components run build` → `node scripts/render.mjs` →
   `node scripts/check-assets.mjs …` → `node scripts/validate-cases.mjs` → preview_start "book-preview" (8781)
   → drive the island/case (memory [[book-preview-verification]]). Then commit.

**House rules reviewers keep enforcing** (AUTHOR §11): cross-ref chapters **by NAME** never number; **never
say "first-year"** in prose; in-chapter cases are **MCQ-only** (no `patient-chat`; enforced by
`validate-cases.mjs`); the **do-no-harm safety fork** must **hard-route unsafe choices to `remedial`** so a
high score can't buy the success ending (every drafted case has one); the 🔬🍜🍳 triad is **exempt for Part
II** (use a lone 🍜 only where genuine).

> **⚠ Preview cache gotcha (new):** after rebuilding the bundle, the browser may keep a **cached
> `components.js`**, so a newly-added island won't mount on a plain reload — force a fresh load with a
> cache-busted dynamic import (`await import('/assets/components.js?bust='+performance.now())`) to verify.
> Not a real bug (CI + normal loads get the fresh bundle).

## 3. Decisions (don't re-litigate) — full log in `curriculum-map.md`

- **(H)** Part II split per life stage (2026-07-05) — the internal↔external template.
- **(I)** Part II re-sequenced chronologically + **Adulthood** chapter added (2026-07-05) — supersedes the
  pregnancy-first order; retires the life-cycle overview.
- Carried: **(G)** patient-state axis; **(A–F)** Part III ownership/decisions; **(C)** the older-age ↔
  undernutrition boundary (Healthy Ageing = ageing *in health*; Undernutrition = the disease state).
- **Boundary seams that matter:** the MATERNAL side of lactation → *Pregnancy & Lactation*; INFANT feeding →
  *Infancy*; GDM management → the obstetric/diabetes team (NOT the T2D chapter, which disclaims GDM); nutrient
  DRIs → Part I *Micronutrients*.

## 4. Remaining work

1. **Ch.10 Childhood & Adolescence (NEXT).** Split-and-deepen (school-age ~5+ through adolescence; the seam
   with Infancy is ~4–5 y). Growth spurt, peak bone mass, iron in menstruating girls, disordered-eating onset,
   the food/peer environment, sport. Run the full pipeline.
2. **Ch.11 Adulthood: working life & activity (net-new).** Needs a fresh research+verify dossier. Scope
   (curriculum-map seed): exercise/sports nutrition (fuelling, protein for active adults, hydration), the
   working-life food environment (shift work, daily hawker meals, stress, alcohol), midlife weight-creep —
   **scope carefully vs Part I Energy Balance and Part III**.
3. **Ch.14 Healthy Ageing (split-and-deepen).** Older-adult protein/sarcopenia (~1.0–1.2 g/kg), Ca/vit-D/B12,
   appetite/dentition/social isolation; the boundary to *Undernutrition & Malnutrition* (decision C).
4. **Then retire `life-cycle-nutrition.source.qmd` fully** once Ch.10/14 exist (its infancy/childhood/older
   prose seeds them). **Cleanup:** the orphaned `book/cases/mrs-devi-gdm.case.yml` (superseded by
   `pregnancy-gdm`) and the life-cycle quiz's stale pregnancy questions.
5. **Part IV (conditions):** Ch.18 Obesity 🟢, Ch.19 Undernutrition 🟡 (the `08` SPLIT undernutrition half),
   Ch.20 T2D 🟢, Ch.21 CVD/HTN 🟢, Ch.22 CKD 🔴, Ch.23 Bone 🔴. **Part V:** Ch.25 Referral 🟢, Ch.26 Capstone 🔴.

## 5. The LLM simulated-patient — BUILT, VERIFIED & DEPLOYED (unchanged; touch only if it's the focus)

The `patient-chat` case node hands off to a real, guardrailed AI patient. Client-composed prompt; key
server-side in a zero-dep proxy (`patient-proxy/`, deployed via FRP at `patient-api.phm.nusmed.space`); SSE
streaming; per-turn `(emotion)` tag drives the portrait; post-encounter JSON rubric; graceful degradation to a
placeholder + `fallbackGoto`. Lives ONLY in the Integrated-cases `sim-*` cases. Endpoint reality (memory
[[qwen-llm-endpoint]]): llama.cpp router, OpenAI route `/v1`, Qwen3.6 needs `enable_thinking:false`. Code:
`components/src/lib/{patient,config}.js`, `CasePlayer.svelte`, `lib/engine.js`.

## 6. Build, preview & deploy (env gotchas below)

```bash
# Toolchain is portable, often NOT on PATH in a fresh shell — use full paths.
#   node/npm: %LOCALAPPDATA%\node\current\node.exe (\npm.cmd)  [Bash: "$LOCALAPPDATA/node/current/..."]
#   quarto:   %LOCALAPPDATA%\quarto\current\bin\quarto.exe   ·   gh: NOT INSTALLED — use git + the public GitHub API.
npm --prefix components run build              # 1. rebuild island bundle (gitignored book/assets/)
node scripts/render.mjs                        # 2. LOCK-PROOF out-of-tree render (avoids Dropbox os-error-32)
node scripts/check-assets.mjs "C:/Users/Admin/AppData/Local/Temp/book-health-preview/_book"   # 3. asset gate
node scripts/validate-cases.mjs                # 4. case linter (dangling gotos + MCQ-only rule)
# Browser-verify: preview_start "book-preview" (python, port 8781, serves %TEMP%\book-health-preview\_book)
# → preview_eval location.href=… → step the island/case. Svelte reactivity is async — await before reading DOM.
```
**Gotchas:** Dropbox/Defender file-locks make in-place `quarto render book` fail (os error 32) and cause
intermittent `git .git/objects Permission denied` on commit (the commit still lands — a harmless `dangling
tree` from `git fsck` is not corruption) — always render **out-of-tree**. Islands need **HTTP** (not
`file://`); data folders must be in `_quarto.yml` `resources:`. `{@const}` must be an immediate child of a
block. Harmless Git "LF will be replaced by CRLF" warnings on every add.

**Deploy check (no `gh`):** `git push origin main` → `publish.yml`. Query the run via the public GitHub API:
```powershell
Invoke-RestMethod "https://api.github.com/repos/nusmedicine/nutrition/actions/runs?per_page=3" `
  -Headers @{ "User-Agent"="claude-code"; "Accept"="application/vnd.github+json" } |
  ForEach-Object { $_.workflow_runs } | Select-Object status, conclusion, head_sha -First 3
```

## 7. Repository map (updated)

```
HANDOVER.md(this) AUTHOR.md(§11=template+house rules) curriculum-map.md=SOURCE OF TRUTH
PART2-ROADMAP.md / POLISH-PLAN.md / CASE-FORMAT.md / CASE-AUTHORING.md  (older logs — PART2-ROADMAP predates decisions H/I)
scripts/ render.mjs · check-assets.mjs · validate-cases.mjs · preview.ps1 · patient-proxy.ps1
patient-proxy/  PROD key-holding proxy (deployed; §5)
book/
  _quarto.yml            Part II now = infancy, pregnancy, menopause (the drafted three; others pending)
  references.bib         SINGLE source of truth for citations (book renders from here)
  chapters/*.qmd         Part I (1–8) + Part II: infancy-early-childhood · pregnancy-lactation · menopause-midlife
                         + Part III (dietary-guidelines-patterns · evidence-vs-hype · 06-dietary-assessment ·
                         behaviour-change-counselling) + cases.qmd
  diagrams/*.yml         island data incl. NEW: food-form-sorter, requirement-dial, menopause-timeline
  quizzes/*.quiz.yml · cases/*.case.yml   (in-chapter cases MCQ-only; sim-* = live AI chat)
components/src/          main.js(REGISTRY) + Quiz/CasePlayer (option-markdown fix) + NEW islands:
                         FoodFormSorter, RequirementDial, MenopauseTimeline ; lib/{engine,store,manifest,base,md}
research/
  00-overview/curriculum-map.md   ← THE 26-ch spine + decisions A–I (READ FIRST)
  chapters/*.md                   dossiers incl. NEW: infancy-early-childhood, pregnancy-lactation, menopause-midlife
  chapters/life-cycle-nutrition.source.qmd   ← RETIRED overview, kept as split-source for Ch.10/14 (not rendered)
```

## 8. Git state

- **PUSHED to `origin/main` 2026-07-05.** Four commits from this session are on the remote and **deploying**
  (`publish.yml`): `774048d` (Menopause + decision H), `f930886` (Pregnancy), `28d55a6` (re-sequence decision I
  + option-markdown fix), `9eb4d8b` (Infancy). Verify the run (§6); `origin/main..main` should be empty.
- **Working tree clean** except the untracked user file `Update Health in Medicine 2026 v2.pptx` (leave it).
  Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`. `book/_book/` is gitignored (built by CI).

## 9. Memory (auto-loaded each session — `memory/MEMORY.md`)

- [[part2-drafting-state]] — **the resume anchor**: Part II = 6 chronological chapters (H+I); Infancy/Pregnancy/
  Menopause drafted & committed; Ch.10/11/14 remain; life-cycle retired; option-markdown fix. **HANDOVER may
  lag — trust curriculum-map.**
- [[research-subagent-gotchas]] — **load-bearing**: always adversarially verify citations before printing; the
  Workflow caught a real error in every chapter this project.
- [[book-preview-verification]] — render out-of-tree → preview_start (8781) → eval-navigate; async reactivity.
- [[dropbox-quarto-render-lock]] · [[in-chapter-cases-mcq-only]] · [[singapore-context-citation-principle]] ·
  [[chemical-structure-and-image-rendering]] · [[qwen-llm-endpoint]].
