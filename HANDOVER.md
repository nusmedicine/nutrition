# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-06 (PARTS I–III DEPLOYED · ALL 6 PART IV
> DOSSIERS VERIFIED · PART IV REORDERED CASCADE-FIRST · 5 of 6 PART IV CHAPTERS DRAFTED — 19 Obesity, 20 T2D,
> 21 CVD/HTN, 22 CKD, 23 Undernutrition · NEXT = DRAFT Ch.24 BONE HEALTH & OSTEOPOROSIS, the last Part IV chapter).**
>
> **★★ NEXT ACTION: DRAFT Ch.24 Bone Health & Osteoporosis** — the **last** Part IV chapter, in **cascade order
> (decision J)**. Reuse the exact per-chapter pipeline (§2). Its dossier is researched & 🟢 in
> `research/chapters/bone-health-osteoporosis.md`. The chapter carries a **basic pathophysiology beat + ≥1
> teaching figure** (AUTHOR §11f — see §2/§3). After Ch.24, Part IV is complete → the Part III physiology
> retrofit, then Part V (§4).
>
> **★ THE BOOK IS LIVE:** <https://nusmedicine.github.io/nutrition/> — deployed from `main` by the Pages CI
> (`publish.yml`) on every push. Parts I–III + Part IV Ch.19–22 are drafted & DEPLOYED; **Ch.23 Undernutrition
> is committed (`6f814ee`) but NOT yet pushed this session — push + verify the deploy.**
>
> **⚠ SOURCE OF TRUTH = [`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md)**
> (read it first) + the auto-loaded memory ([[part4-dossiers-verified]], [[chapter-depth-and-figures]],
> [[authoring-style-rules]]).

## 0. What happened this session (2026-07-06)

- **Researched & adversarially verified all 6 Part IV dossiers** in one ~160-agent `Workflow` (per-subtopic
  web research → refute-every-citation PMID/DOI check → synthesis → completeness critic). Caught real
  misattributions in several. Committed `a0118f4`. Memory [[part4-dossiers-verified]].
- **Reordered Part IV to the cardiometabolic-renal cascade (decision J):** 19 Obesity → 20 T2D → 21 CVD/HTN →
  22 CKD → 23 Undernutrition → 24 Bone. The "two tails of malnutrition" became a **part-opening frame + narrative
  bookend**, not adjacency (keeps metabolic syndrome next to diabetes). Applied to `book/_quarto.yml`.
- **New depth directives (user feedback → codified in AUTHOR §11f + curriculum-map principle 4).**
  (1) **Part IV chapters carry a basic PATHOPHYSIOLOGY beat** — the disease mechanism, built on the Part I owner
  chapters BY NAME. (2) **Part III chapters need a PHYSIOLOGY/BIOCHEM background retrofit** (Part III is deployed
  — a separate pass, NOT yet done). (3) **Use figures where they teach** (≥1 substantive teaching figure per
  chapter beyond the island + case persona). Memory [[chapter-depth-and-figures]].
- **Fixed chapter numbering:** `book/chapters/part2-intro.qmd` H1 is now `{.unnumbered}`, so Quarto's displayed
  numbers match the map — **Part IV = Ch.19–24** (it was displaying 20–25 because the intro consumed a number).
- **Drafted 5 Part IV chapters** through the full pipeline (each = pathophysiology section + bespoke island +
  MCQ quiz + MCQ-only do-no-harm case + ≥1 figure + verified bib keys + 5-dim review + browser-verify + commit):
  - **Ch.19 Obesity & Metabolic Syndrome** (`1897ccf`) — island `mets-cluster` (MetS clustering wheel); case
    `mr-tan-obesity`; figs `obesity-pathophysiology.svg` + `char-kway-teow.jpg`; +40 bib keys.
  - **Ch.20 Type 2 Diabetes** (`186cf4a`) — island `carb-safety-check` (drug-class hypo-safety); case
    `early-t2d-remission`; figs `t2d-continuum.svg` + reused `brown-rice.jpg`; +36 keys.
  - **Ch.21 Cardiovascular Disease & Hypertension** (`660fef5`) — island `fat-swap` ("replaced with what?");
    case `mr-chua-cvd` (salt-substitute do-no-harm); figs `cvd-diet-pathways.svg` + reused `grilled-salmon.jpg`;
    +26 keys.
  - **Ch.22 Chronic Kidney Disease** (`2504903`) — island `renal-flip` ("advice that flips in CKD" context
    toggle — 4 population messages reverse, sodium holds as the control); case `mr-lim-ckd` ("Uncle Lim":
    potassium/salt-substitute do-no-harm, closing the CVD chapter's hyperkalaemia loop); figs
    `ckd-diet-levers.svg` + `phosphate-absorption.svg` (both own-work); **+34 keys**. Passed the 5-dim review
    (0 blockers; fixes: quiz/case option length-parity, island aria-live scope, minor evidence/attribution).
    **⚠ Cited the CVD-consistent keys `neal2021ssass`/`who2012potassium`/`hpb2023sodium` for the shared
    salt-substitute/potassium/sodium story — the repo has duplicate bib-key pairs (see §4 flag).**
  - **Ch.23 Undernutrition & Malnutrition** (`6f814ee`) — the two-tails bookend to Ch.19. Island `must-screen`
    (a MUST calculator teaching that weight-loss/acute-illness score independently of BMI → a normal BMI can
    still be high risk); case `mdm-tan-malnutrition` ("Mdm Tan, 82": refeeding do-no-harm — don't feed a
    long-poor-eater up fast); figs `malnutrition-mechanism.svg` + `oral-support-ladder.svg` (both own-work);
    **+35 keys**. Passed the 5-dim review (0 blockers; fixes: 2× "first-year" prose breaches removed, added the
    Bone Health signpost, GLIM/appetite/3-MinNS glosses, quiz/case option length-parity, admission figure→~35%,
    ladder-figure overflow, MUST BMI band). SCREEN→recognise→refer altitude.

## 1. The spine — 26 chapters, 5 parts. Full table + decisions A–J in `curriculum-map.md`.

Legend: ✅ drafted (deployed once pushed) · 🟢 dossier verified · stub = "in preparation" placeholder in book.

| Part | Chapters | Status |
|---|---|---|
| **I** · The metabolic & physiological basis | 1–8 | ✅ deployed |
| **II** · Across the life stages | part2-intro (unnumbered) + 9 Infancy · 10 Childhood & Adolescence · 11 Adulthood · 12 Pregnancy · 13 Menopause · 14 Healthy Ageing | ✅ deployed |
| **III** · Advising the healthy | 15 What a Healthy Diet · 16 Evidence vs Hype · 17 Assessing Diet · 18 Behaviour-Change Counselling | ✅ deployed (⚠ physiology-background retrofit pending — §11f) |
| **IV** · Advising the chronically ill (cascade order — decision J) | **19 Obesity ✅ · 20 T2D ✅ · 21 CVD & Hypertension ✅ · 22 Chronic Kidney Disease ✅ · 23 Undernutrition & Malnutrition ✅** · 24 Bone Health & Osteoporosis 🟢 | **5/6 drafted; 24 last** |
| **V** · Integration & practice | 25 Interprofessional Practice & Referral (🟢 dossier `14-interprofessional-referral`, no stub yet) · 26 Capstone: Integrated Cases (= `cases.qmd`, home of the live LLM patient) | partial |

**Cross-refs are by NAME**, so numbering is safe. Part IV files: `obesity-metabolic-syndrome`, `type-2-diabetes`,
`cardiovascular-disease-hypertension`, `chronic-kidney-disease`, `undernutrition-malnutrition` are **drafted**;
`bone-health-osteoporosis` remains a stub.

## 2. The per-chapter pipeline (reuse for Ch.22–24) — load-bearing discipline

1. **Read the verified dossier** `research/chapters/<name>.md` — each has **drafting directives** at the top, an
   evidence table with **already-verified** citation keys, and §11 **residual "verify exact figure before
   printing"** notes. Honour those §11 flags.
2. **Draft the `.qmd`** (AUTHOR §11 + [[authoring-style-rules]] + [[chapter-depth-and-figures]]). Shape: framing
   blockquote → "*<Topic>* at a glance" → **a PATHOPHYSIOLOGY section** ("The science underneath…", building on
   the Part I owner chapters BY NAME) → the dietary-lever sections (with 🍜/callouts where genuine) → "The
   Singapore picture" → chapter-question close → quiz → case. Embed **≥1 teaching figure**: an own-work mechanism
   **SVG in `book/figures/mechanisms/`** and/or a reused/sourced **CC-licensed photo** — log every image in
   `book/figures/CREDITS.csv` (CC0/PD/CC-BY/CC-BY-SA only).
   - **Pathophys citations:** if the mechanism refs are already in the dossier (as for T2D's twin-cycle, CVD's
     fat/sodium), use them; if net-new (as for Ch.19's adipose-inflammation refs), run a small research+verify
     `Workflow` first and add the verified keys.
3. **Build the artifacts in parallel** (4 background `Agent`s in ONE message): a **bespoke island**
   (`components/src/<Name>.svelte` + `book/diagrams/<name>.yml` + register in `main.js` + `npm --prefix
   components run build`), an **MCQ quiz**, an **MCQ-only case** with a **do-no-harm hard route** (unsafe choice →
   remedial node, and its lost points cap the score below the `quality>=N` success threshold — mirror
   `mr-chua-cvd`/`early-t2d-remission`), and the **bib keys** (append the dossier's verified entries to
   `references.bib`; **reconcile against existing keys to avoid duplicate entries for the same paper** — e.g.
   alcohol keys already exist from the Adulthood chapter).
4. **5-dimension review — a `Workflow`** (house-style/altitude+pathophys · cross-refs/boundaries · evidence vs
   the dossier · quiz/case · island+figure fidelity) → triage → apply fixes. Copy the `chXX-review` script shape.
5. **Render + gate + browser-verify:** `find book -name '*.tmp.*' -delete` → `node scripts/render.mjs` →
   `node scripts/check-assets.mjs "…/book-health-preview/_book"` → `node scripts/validate-cases.mjs` →
   preview_start **"book-preview"** (port 8781) → `preview_eval location.href=…` then step the island/case in a
   **separate** eval ([[book-preview-verification]]; Svelte reactivity is async; the combined navigate+read eval
   throws "target navigated" — navigate in one call, read in the next). Commit.

**House rules reviewers enforce:** cross-ref chapters BY NAME; never "first-year" in prose; no "honest"/"honestly"
tic; in-chapter cases **MCQ-only** (no `patient-chat`; `validate-cases.mjs` enforces); the **do-no-harm hard
route**; **MCQ options no-bold + similar length** (trim the correct option, detail → feedback); **Part IV altitude
= recognise the levers + refer** — signpost pharmacotherapy / specialist targets, never "manage with drug X", no
memorised drug thresholds; the **pathophysiology beat builds on Part I by name**; **≥1 teaching figure**. Island
accessibility: use the house `role="group"` + `<button aria-pressed>` pattern (all options Tab-reachable), not a
radiogroup without arrow-key handling.

> **⚠ Dropbox editing gotcha:** edits can leave `*.tmp.PID.hash` artifacts — run `find book -name '*.tmp.*'
> -delete` before rendering/committing. On multi-line `Edit`s, watch line-wraps (the tool needs exact whitespace).

## 3. Decisions (don't re-litigate) — full log in `curriculum-map.md`

- **(J, 2026-07-06)** Part IV = the cardiometabolic-renal cascade (Obesity → T2D → CVD/HTN → CKD → Undernutrition
  → Bone). Two-tails = a part-opening frame + bookend, not adjacency.
- **(§11f depth, 2026-07-06)** Part IV chapters carry a pathophysiology beat (built on Part I by name); Part III
  chapters get a physiology-background retrofit (**pending**); figures where they teach.
- **(G)** patient-state axis: II life stages → III advising the healthy → IV advising the chronically ill → V.
- **(C)** older-age ↔ undernutrition boundary: *Healthy Ageing* = ageing **in health**; *Undernutrition &
  Malnutrition* (Ch.23) = the **pathological** state (MUST/MDT/ONS/refeeding). Ch.14 hands off to it.
- **(F)** therapeutic low-carb/VLCD for T2D remission → the *Type 2 Diabetes* chapter (**done**, Ch.20).
- **PREDIMED is owned by the *CVD & Hypertension* chapter** (**done** — Obesity/T2D deferred it by name).

## 4. Remaining work

**Draft Ch.24** (the LAST Part IV chapter; a recognise-and-refer chapter WITH a pathophysiology beat + ≥1 figure):

1. **Ch.24 Bone Health & Osteoporosis** — `research/chapters/bone-health-osteoporosis.md` 🟢 (net-new). Ca / vit-D
   / protein & bone; peak bone mass & age-related loss; the SG vitamin-D paradox; non-dairy Ca sources. Forward-
   referenced from the Childhood & Adolescence, Menopause & Midlife, Healthy Ageing, *Chronic Kidney Disease*
   (CKD–mineral & bone disease) and now *Undernutrition & Malnutrition* (**muscle–bone overlap** — signposted by
   name in Ch.23) chapters. **Pathophys:** bone as living, remodelling tissue; peak bone mass then age-related
   loss; the Ca / vit-D / protein levers.

**Ch.22–23 done this session** — `chronic-kidney-disease.qmd` (`2504903`; island `renal-flip`, case `mr-lim-ckd`,
+34 keys) + `undernutrition-malnutrition.qmd` (`6f814ee`; island `must-screen`, case `mdm-tan-malnutrition`,
+35 keys). See §0.

**Then the Part III physiology retrofit (§11f decision, deferred to after Part IV):** add a relevant
physiology/biochem background layer to the 4 deployed Part III chapters (e.g. the food–acne worked example →
sebum/androgens/IGF-1/glycaemic load; "detox" myths → hepatic & renal clearance).

**Then Part V:** Ch.25 Interprofessional Practice & Referral (dossier `14-interprofessional-referral` 🟢 — needs a
stub + drafting); Ch.26 Capstone = the existing `cases.qmd` (Integrated cases).

**Cross-chapter / maintainer flags:**
- **Duplicate bib-key pairs (book-wide dedup pending).** The repo has TWO entries each for the same paper:
  `whoPotassium2012`≡`who2012potassium`, `ssass2021`≡`neal2021ssass`, `hpbLessSalt`≡`hpb2023sodium`. Part IV
  chapters (CVD, CKD) cite the `who2012potassium`/`neal2021ssass`/`hpb2023sodium` variants; Part I Micronutrients
  uses `whoPotassium2012`/`ssass2021`/`hpbLessSalt`. Both resolve, so builds pass — but at a cleanup pass pick one
  canonical key per source, update the citing chapters, and delete the duplicates.
- **`ada2024care`** is stale — re-pin book-wide to **`ada2026care`** (ADA Standards of Care 2026, DOI
  10.2337/dc26-S005) at a cleanup pass. The T2D/CVD chapters already use the newer `ada2026*` keys;
  `ada2024care` was left untouched (may still be cited by an older chapter — check before deleting).
- **`medUmbrella`** resolves to **Dinu 2018** (a valid Mediterranean umbrella review), not the CVD dossier's
  preferred Hareer 2025 — fine as-is; re-pin only if a specific Hareer figure is ever needed.
- The **legacy numbered dossiers** (`09-overnutrition`, `10-cvd-hypertension`, `11-type-2-diabetes`,
  `08-life-cycle-undernutrition`) are **superseded** by the descriptive-named verified ones — safe to retire.
- Orphaned life-cycle files (`book/quizzes/life-cycle-nutrition.quiz.yml`, `book/cases/mrs-devi-gdm.case.yml`,
  `book/diagrams/life-stages.yml`, `research/chapters/life-cycle-nutrition.source.qmd`) — delete when convenient.

## 5. The LLM simulated-patient — BUILT, VERIFIED & DEPLOYED (unchanged; touch only if it's the focus)

`patient-chat` case node → a real guardrailed AI patient. Client-composed prompt; key server-side in a
zero-dep proxy (`patient-proxy/`, FRP at `patient-api.phm.nusmed.space`); SSE streaming; `(emotion)` tag drives
the portrait; post-encounter JSON rubric; graceful fallback. Lives ONLY in `sim-*` cases (Integrated cases).
Endpoint reality (memory [[qwen-llm-endpoint]]): llama.cpp router, `/v1`, Qwen3.6 needs `enable_thinking:false`.
Code: `components/src/lib/{patient,config}.js`, `CasePlayer.svelte`, `lib/engine.js`.

## 6. Build, preview & deploy (env gotchas below)

```bash
# Toolchain is portable, often NOT on PATH in a fresh shell — use full paths (Bash tool):
#   node/npm: "$LOCALAPPDATA/node/current/node.exe" (npm.cmd)   ·   quarto: "$LOCALAPPDATA/quarto/current/bin/quarto.exe"
#   gh: NOT installed, no token — use git + the public GitHub API for CI checks.
npm --prefix components run build              # 1. rebuild island bundle (only if you touched components/src)
node scripts/render.mjs                        # 2. LOCK-PROOF out-of-tree render (avoids Dropbox os-error-32)
node scripts/check-assets.mjs "C:/Users/Admin/AppData/Local/Temp/book-health-preview/_book"   # 3. asset gate
node scripts/validate-cases.mjs                # 4. case linter (dangling gotos + MCQ-only rule)
# Browser-verify: preview_start "book-preview" (port 8781, serves %TEMP%\book-health-preview\_book)
#   → preview_eval location.href=…  (separate eval) → step island/case. Async reactivity.
```
**Gotchas:** Dropbox/Defender file-locks make in-place `quarto render book` fail (os error 32) → always render
**out-of-tree**. Edits can leave `*.tmp.*` artifacts (§2). Islands need **HTTP** (not `file://`). Harmless
"LF→CRLF" warnings on every add. Occasional harmless `git .git/objects Permission denied` on commit (commit
still lands). `book/assets/components.js` is **gitignored** (CI rebuilds from `components/src`), so a rebuilt
bundle won't show in `git status` — commit the `components/src` source, CI builds the bundle.

**Deploy (no `gh`):** `git push origin main` → `publish.yml` builds islands, renders Quarto, deploys `book/_book/`.
Check the run via the public API:
```powershell
Invoke-RestMethod "https://api.github.com/repos/nusmedicine/nutrition/actions/runs?per_page=3" `
  -Headers @{ "User-Agent"="claude-code"; "Accept"="application/vnd.github+json" } |
  ForEach-Object { $_.workflow_runs } | Select-Object status, conclusion, head_sha -First 3
```
> **Pushing is user-gated:** ask before pushing to `main` (deploying is outward-facing). Commit freely.

## 7. Repository map

```
HANDOVER.md(this) · AUTHOR.md(§11 + §11f = template + house rules) · curriculum-map.md = SOURCE OF TRUTH
scripts/ render.mjs · check-assets.mjs · validate-cases.mjs · preview.ps1 · patient-proxy.ps1
patient-proxy/  PROD key-holding proxy (deployed; §5)
book/
  _quarto.yml            Parts I–IV (Part IV Ch.19–23 drafted, 24 stub) + Integrated cases
  references.bib         SINGLE source of truth for citations (~670 entries)
  chapters/*.qmd         I (1–8) · II (part2-intro + 6) · III (4) · IV (19–23 drafted, 24 stub) · cases.qmd
  figures/               food/ · structures/ · anatomy/ · personas/ · mechanisms/(own-work pathophys SVGs) · CREDITS.csv
  diagrams/*.yml         island data (incl. mets-cluster, carb-safety-check, fat-swap, renal-flip, must-screen, + earlier)
  quizzes/*.quiz.yml · cases/*.case.yml   (in-chapter cases MCQ-only; sim-* = live AI chat)
components/src/          main.js(REGISTRY) + Quiz/CasePlayer + island .svelte (incl. MetsCluster/CarbSafetyCheck/FatSwap) + lib/
research/
  00-overview/curriculum-map.md   ← the 26-ch spine + decisions A–J (READ FIRST)
  chapters/*.md                   dossiers — all 6 Part IV verified 🟢 (descriptive names); legacy numbered ones superseded
```

## 8. Git state

- **On `main`, committed but ⚠ NOT yet pushed this session:** Ch.23 Undernutrition `6f814ee` + this wrap-up commit.
  **Ask the user, then `git push origin main` and verify the CI run (§6).**
- **Already on origin/main & DEPLOYED:** research `a0118f4` + Ch.19 `1897ccf` + Ch.20 `186cf4a` +
  Ch.21 `660fef5` + wrap-up `ca33315` + **Ch.22 CKD `2504903` + wrap-up `4d714df`** (verified live this session).
- **Working tree:** untracked user file `Update Health in Medicine 2026 v2.pptx` (leave it) + modified
  `.claude/launch.json` (a `book-fix`/`book-preview` preview config — harmless dev tooling; not committed).
- Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`. `book/_book/` and `book/assets/components.js` are
  gitignored (built by CI).

## 9. Memory (auto-loaded each session — `memory/MEMORY.md`)

- [[part4-dossiers-verified]] — all 6 Part IV dossiers verified 🟢; **Ch.19/20/21 drafted & committed** (hashes
  inside); cascade order; the ~247-key/PREDIMED/ada2026 cross-chapter flags.
- [[chapter-depth-and-figures]] — 2026-07-06 directives: Part IV **pathophysiology beat**; Part III
  physiology-background retrofit (**pending**); **figures where they teach**; the numbering fix.
- [[authoring-style-rules]] — MCQ options no-bold + same-length; no "honest" tic; JIT-gloss; recognise-and-refer.
- [[research-subagent-gotchas]] — always adversarially verify citations before printing.
- [[book-preview-verification]] · [[dropbox-quarto-render-lock]] · [[in-chapter-cases-mcq-only]] ·
  [[singapore-context-citation-principle]] · [[chemical-structure-and-image-rendering]] · [[qwen-llm-endpoint]].
