# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-06 (★ ALL 26 CHAPTERS NOW EXIST — the book
> is content-complete. Parts I–IV deployed; Part III §11f retrofit DONE (`2be9f8f`); ★ Ch.19 Interprofessional
> Practice, Referral & Self-Care DRAFTED & folded into Part III (decision K, `f2fce0d`); the AI-patient capstone
> is its own final Part V. NEXT = capstone polish + the cleanup backlog).**
>
> **★★ NEXT ACTION: capstone polish + cleanup — no chapter drafting remains.** (1) The **Capstone = `cases.qmd`**
> (Part V · Integrative Cases; home of the live LLM patient — largely built, §5): review/polish as the finale.
> (2) The **cleanup backlog** (§4): duplicate bib-key dedup, `ada2024care`→`ada2026care` book-wide, retire the
> legacy numbered + orphaned dossiers. Optional now that Referral has a page: tighten the disease chapters'
> *generic* forward-refs to *Interprofessional Practice & Referral* to by-name.
>
> **⚠ RECURRING HOUSE-STYLE TRAP — the "honest"/"honestly" tic.** It has been caught by the review in *three*
> chapters now (Ch.22, Ch.24, and the Ch.24 joint reframe where it was a **BLOCKER, 8×**). It is banned prose
> ([[authoring-style-rules]], AUTHOR §11d). **Scrub "honest"/"honestly" at draft time** — grep every new .qmd and
> .case.yml before review.
>
> **★ THE BOOK IS LIVE:** <https://nusmedicine.github.io/nutrition/> — deployed from `main` by the Pages CI
> (`publish.yml`) on every push. All of Parts I–IV are deployed. **⚠ The Part III retrofit (`2be9f8f`) was pushed
> but its Pages *deploy* step hit a TRANSIENT failure (build passed) — it is NOT yet live. The Ch.19 Referral
> chapter (`f2fce0d`) + this wrap-up are committed, NOT pushed. Pushing re-triggers CI and deploys BOTH; then
> verify the run (§6). ⚠ Disk C: was ~100% full (3.6 GB free) — a commit failed once with "unable to write
> new index file" and succeeded on retry; watch for this.**
>
> **⚠ SOURCE OF TRUTH = [`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md)**
> (read it first) + the auto-loaded memory ([[part4-dossiers-verified]], [[chapter-depth-and-figures]],
> [[authoring-style-rules]]).

## 0. What happened — most recent first (2026-07-06)

- **★ GLOBAL REVIEW: tone/style pass + part renames (`00d3519`).** (1) **Part renames (decision L):** I "Foundations
  of Nutrition Science" · II "Nutrition across Life Stages" · III "Assessing and Advising Patients" · IV "Nutrition
  in Disease" · V "Integrative Cases" — a clinical-function axis (user found "Advising the healthy/chronically ill"
  mislabelled/over-claimed). `book/_quarto.yml` + the one stale in-prose ref (`part2-intro`). (2) **Book-wide tone
  pass:** revised **all 26 chapters** to remove AI-writing tells — em-dashes ~1,500 → a few dozen; cut the "it's not
  X, it's Y" antithesis tic, teacherly meta-commentary, and "So —" headers; softened curse-of-knowledge jargon;
  kept the warmth + Singapore flavour + all content. **Method:** per-chapter audit `Workflow` → guardrailed rewrite
  `Workflow` (exemplar = `01-why-nutrition-matters.qmd`, hand-done first) → **mechanical preservation gate** (0
  citations/islands/callouts/figures dropped across 27 chapters, diffed vs a captured baseline — this gate is
  essential, a full-file rewrite by subagents can silently drop a citation) → render exit 0 (28 pages) + asset gate
  + case linter + tic scan clean. Codified the 5 rules in **AUTHOR §11g** + [[authoring-style-rules]]. ⚠ Bone chapter
  kept 30 em-dashes (from 92) — the highest residual; fine, but could trim further if wanted.
- **★ Part restructure (decision K) + Ch.19 Interprofessional Practice, Referral & Self-Care DRAFTED (`f2fce0d`).**
  User decision: Referral is a clinical **skill** beside assessment/counselling, not "integration" — so it moved
  from the trailing part into **Part III "Advising the healthy"** as its closing chapter (the arc: healthy diet →
  appraise → assess → counsel → **refer**); the disease chapters became **Part IV** (renumbered 20–25); the
  AI-patient capstone (`cases.qmd`) became its own **Part V · Integrative Cases** (Ch.26). Applied to `_quarto.yml`;
  cross-refs by name so the renumber is safe. **Chose the minimal 5-part option** over a 6-part "clinical method"
  split (thin healthy part + skills-before-content) — see decision K in the curriculum-map. Drafted the chapter
  from the `14-interprofessional-referral` dossier **Part-III-appropriately** (general skill first; disease
  examples forward-referenced by name), keeping all 3 strands (interprofessional practice, referral, self-care).
  Island **`advise-refer`** (pick-and-check "advise or refer?" over 7 scenarios; new `AdviseRefer.svelte`); quiz
  (7 MCQs); MCQ case **`refer-or-advise`** (Mdm Tan T2DM+CKD, do-no-harm hard route); own-work figure
  **`hsg-ecosystem.svg`**. Citations mostly reused + `ada2024care`→`ada2026standards` re-pin; **2 net-new keys
  refute-checked** (`lobelo2015rolemodel` PMID 26213523; `mohChronicTier` — HSG figures verified live-current: from
  1 Feb 2024, up to 87.5% no cap, up to \$360/yr, no dedicated dietitian subsidy line). Render exit 0 (28 pages),
  asset gate clean, case linter OK, **browser-verified** (island pick-and-check + scoring, case player, figure),
  5-dim review clean (0 blockers; fixes applied: MCQ length-parity, part-not-chapter cross-ref, HbA1c gloss, SVG
  desc caveat, vestigial `next:` keys, island `aria-labelledby`). **This completes all 26 chapters.**
- **★ Part III §11f physiology/biochem retrofit — DONE (`2be9f8f`).** Added a short, relevant physiology layer
  to the 4 **deployed** Part III chapters, anchored to Part I owners BY NAME (uneven by design: heavy Ch.16,
  light Ch.17). **Ch.16 Evidence vs Hype** — new "🔬 The pathway under the acne signal" callout (glycaemic
  load→insulin, dairy→IGF-1, → androgen + mTORC1 → sebum + follicular hyperkeratinisation, unifying the dairy &
  GL signals under one axis) + a **detox** hepatic-Phase-I/II / renal-clearance beat anchored to *Digestion &
  Absorption*. **Ch.18 Behaviour-Change** — a reward-system beat (wanting/dopamine + cues override intention)
  grounding *why* knowledge/willpower are weak levers, anchored to *Appetite & Weight Regulation*. **Ch.15** —
  the food-science box strengthened (glycaemic response, fibre→satiety, fibre→SCFA); **Ch.17** — one sentence on
  why MUST weights unplanned weight loss (lean-mass catabolism → *Integrative Metabolism*). **3 net-new citations**
  found + adversarially refute-checked in a small find→refute `Workflow` (`melnik2015acne`, `klein2015detox`,
  `lally2010habits`; 0 refuted, 0 corrected — the refute pass caught a right-paper/wrong-PMID trap on Lally);
  everything else **reused existing verified keys** (reward → Ch.8's `berridge2009dissecting`/`volkow2017dopamine`/
  `berthoud2017blaming`). Render exit 0 (27 pages), asset gate clean, **0 unresolved citations**, 4-dim review
  clean (0 blockers; 5 nits, all applied). Prose-only — no islands/cases touched.
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
- **Drafted 6 Part IV chapters — PART IV COMPLETE** — through the full pipeline (each = pathophysiology section + bespoke island +
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
  - **Ch.24 Bone Health & Osteoporosis** (`04a1e22`) — the LAST Part IV chapter; the deficiency/frailty pair
    with Ch.23. Island `bone-bank` (a life-course BMD curve with sliders → "years of delay, not a fracture
    rate"; peak dominates: +10% → +12 yr vs loss +2 / menopause +4, after Hernandez 2003); case
    `madam-lim-bone` ("Madam Lim, 58": "start a drug on worry" over-reach do-no-harm); figs
    `calcium-bioavailability.svg` + `vitamin-d-calcium-axis.svg` (own-work); **+36 keys**. Passed the 5-dim
    review (0 blockers; fixes: "honest" tic removed **again** — watch this tic, Childhood/CKD reciprocal
    signposts, T-score/fragility glosses, island loss-lever rebalanced so peak dominates, figure overflow).
    Also fixed a sibling inconsistency in `healthy-ageing.qmd` ("widest gap" → dossier wording).
- **Reframed Ch.24 → "Bone & Joint Health"** (user decision: integrate joint health, since GP patients ask about
  OA/gout diet & supplements). Built a **verified joint mini-dossier** (`research/chapters/joint-health-nutrition.md`
  🟢 — research + refute-every-citation Workflow; caught a **fabricated author list** + 7 metadata errors; 0
  refuted). Added to the chapter: a **"three conditions people confuse"** disambiguation frame + figure
  (`bone-joint-disambiguation.svg`); **osteoarthritis** (weight = the real lever via IDEA; glucosamine = the
  evidence-vs-hype example — ACR/OARSI/NICE/SG-ACE all against, ESCEO the industry-linked dissent; the SG
  ACE-vs-HealthHub messaging gap); **gout** (diet-adjunct-to-allopurinol, corrects the blame/over-restriction
  myth); **RA** one line. New case `mr-tan-joint` (glucosamine do-no-harm = *opportunity cost*, not toxicity);
  **+4 joint quiz items**; **+31 verified bib keys**; retitled the quiz; renamed 5 sibling cross-refs
  ("*Bone Health & Osteoporosis*" → "*Bone & Joint Health*"). Passed a 5-dim review — **which caught the "honest"
  tic as a BLOCKER (8×), now fixed** — plus `purine`/`urate` glosses + a missing citation. `bone-bank` island
  unchanged. (File stays `bone-health-osteoporosis.qmd`; only the H1/display title changed.)

## 1. The spine — 26 chapters, 5 parts. Full table + decisions A–J in `curriculum-map.md`.

Legend: ✅ drafted (deployed once pushed) · 🟢 dossier verified · stub = "in preparation" placeholder in book.

| Part | Chapters | Status |
|---|---|---|
| **I** · Foundations of Nutrition Science *(renamed, decision L)* | 1–8 | ✅ deployed |
| **II** · Nutrition across Life Stages *(renamed L)* | part2-intro (unnumbered) + 9 Infancy · 10 Childhood & Adolescence · 11 Adulthood · 12 Pregnancy · 13 Menopause · 14 Healthy Ageing | ✅ deployed |
| **III** · Assessing and Advising Patients *(renamed L; + refer, decision K)* | 15 What a Healthy Diet · 16 Evidence vs Hype · 17 Assessing Diet · 18 Behaviour-Change Counselling · **19 Interprofessional Practice, Referral & Self-Care ✅** (`f2fce0d`) | ✅ deployed (Ch.15–18); §11f retrofit `2be9f8f`; Ch.19 + style pass push pending |
| **IV** · Nutrition in Disease *(renamed L; cascade order — decision J)* | **20 Obesity · 21 T2D · 22 CVD & Hypertension · 23 Chronic Kidney Disease · 24 Undernutrition & Malnutrition · 25 Bone & Joint Health** (renumbered +1 by decision K) | **✅ COMPLETE (6/6), deployed** |
| **V** · Integrative Cases (decision K) | 26 Capstone: Integrative Cases (= `cases.qmd`, home of the live LLM patient — largely built, §5) | ✅ in book (polish pending) |

**Cross-refs are by NAME**, so numbering is safe. **All six Part IV files** (`obesity-metabolic-syndrome`,
`type-2-diabetes`, `cardiovascular-disease-hypertension`, `chronic-kidney-disease`, `undernutrition-malnutrition`,
`bone-health-osteoporosis`) are **drafted — no Part IV stubs remain.**

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

**★ ALL 26 CHAPTERS NOW EXIST — the book is content-complete.** Parts I–IV drafted/reviewed/deployed; the Part III
§11f retrofit is DONE (`2be9f8f`); Ch.19 Interprofessional Practice, Referral & Self-Care is DRAFTED and folded
into Part III (decision K, `f2fce0d`); the AI-patient capstone is its own Part V. **No chapter drafting remains.**
Two closing work streams:

**1. Capstone polish.** Ch.26 **= `cases.qmd`** (Part V · Integrative Cases — home of the live LLM patient; largely
built, §5). Review/polish it as the finale; confirm the sim-* cases and the AI patient still work end-to-end.

**2. The cleanup backlog** (below): bib-key dedup, `ada2024care`→`ada2026care` book-wide, retire legacy/orphaned
dossiers. **Optional now that Referral has a page:** the Bone/CKD/Undernutrition chapters forward-ref referral
*generically* — tighten those to *Interprofessional Practice & Referral* by name.

*(Done this session: the §11f Part III retrofit — food–acne → IGF-1/androgen/mTORC1→sebum, "detox" → hepatic/renal
clearance, satiety/behaviour → reward pathways — and the Ch.19 Referral chapter + decision K restructure. See §0.)*

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
  _quarto.yml            Parts I–IV (Part IV Ch.19–24 ALL drafted; Ch.24 = "Bone & Joint Health") + Integrated cases
  references.bib         SINGLE source of truth for citations (~737 entries)
  chapters/*.qmd         I (1–8) · II (part2-intro + 6) · III (4) · IV (19–24 all drafted; Ch.24 bone+joint) · cases.qmd
  figures/               food/ · structures/ · anatomy/ · personas/ · mechanisms/(own-work pathophys SVGs) · CREDITS.csv
  diagrams/*.yml         island data (incl. mets-cluster, carb-safety-check, fat-swap, renal-flip, must-screen, bone-bank, + earlier)
  quizzes/*.quiz.yml · cases/*.case.yml   (in-chapter cases MCQ-only; sim-* = live AI chat)
components/src/          main.js(REGISTRY) + Quiz/CasePlayer + island .svelte (incl. MetsCluster/CarbSafetyCheck/FatSwap) + lib/
research/
  00-overview/curriculum-map.md   ← the 26-ch spine + decisions A–J (READ FIRST)
  chapters/*.md                   dossiers — all 6 Part IV verified 🟢 (descriptive names); legacy numbered ones superseded
```

## 8. Git state

- **This session — committed on `main`, mostly NOT pushed:** (1) Part III §11f retrofit `2be9f8f` (**pushed**; its
  Pages *deploy* step hit a TRANSIENT failure — build passed — so **not yet live**). (2) Ch.19 Referral `f2fce0d`
  + wrap-up `dc7a88d`. (3) **Global tone/style pass + part renames `00d3519`** (29 files) + this wrap-up.
  **All of (2)+(3) are committed but NOT pushed.** **One push re-triggers CI and deploys everything** (retrofit +
  Referral + style pass + renames) and clears the failed deploy — then verify the run (§6). Push is user-gated.
  ⚠ Disk C: was ~100% full (3.6 GB free); a commit failed once ("unable to write new index file") and succeeded on
  retry — retry commits if this recurs, and free disk space.
- **All prior work is pushed & DEPLOYED live** (`origin/main` was `bbac6f7` at session start): Part IV Ch.19–24
  (now renumbered 20–25) including the Ch.24→25 "Bone & Joint Health" joint reframe (`bbac6f7`); Ch.24 Bone
  `04a1e22`; research `a0118f4`; Obesity `1897ccf` · T2D `186cf4a` · CVD `660fef5` · CKD `2504903` · Undernutrition `6f814ee`.
- **Working tree:** untracked user file `Update Health in Medicine 2026 v2.pptx` (leave it) + modified
  `.claude/launch.json` (a `book-fix`/`book-preview` preview config — harmless dev tooling; not committed).
- Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`. `book/_book/` and `book/assets/components.js` are
  gitignored (built by CI).

## 9. Memory (auto-loaded each session — `memory/MEMORY.md`)

- [[part4-dossiers-verified]] — all 6 Part IV dossiers verified 🟢; **Ch.19/20/21 drafted & committed** (hashes
  inside); cascade order; the ~247-key/PREDIMED/ada2026 cross-chapter flags.
- [[chapter-depth-and-figures]] — 2026-07-06 directives: Part IV **pathophysiology beat**; Part III
  physiology-background retrofit (**DONE `2be9f8f`**); **figures where they teach**; the numbering fix.
- [[authoring-style-rules]] — MCQ options no-bold + same-length; no "honest" tic; JIT-gloss; recognise-and-refer.
- [[research-subagent-gotchas]] — always adversarially verify citations before printing.
- [[book-preview-verification]] · [[dropbox-quarto-render-lock]] · [[in-chapter-cases-mcq-only]] ·
  [[singapore-context-citation-principle]] · [[chemical-structure-and-image-rendering]] · [[qwen-llm-endpoint]].
