# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-06 (PARTS I–III COMPLETE & DEPLOYED ·
> WHOLE-BOOK REVIEW DONE · PART IV STUBBED · ALL 6 PART IV DOSSIERS RESEARCHED, VERIFIED & 🟢 · PART IV
> REORDERED CASCADE-FIRST · NEXT = DRAFT PART IV CONDITIONS CHAPTERS).**
>
> **★★ NEXT ACTION: DRAFT PART IV (the conditions chapters).** Six "Advising the chronically ill" chapters
> exist as **stubs** ("in preparation" placeholders) so cross-refs resolve. **Their research dossiers are now
> all done** — researched, adversarially citation-verified & 🟢 in `research/chapters/` (descriptive names:
> `obesity-metabolic-syndrome`, `type-2-diabetes`, `cardiovascular-disease-hypertension`,
> `chronic-kidney-disease`, `undernutrition-malnutrition`, `bone-health-osteoporosis`). Replace the stubs with
> full content, reusing the exact per-chapter pipeline (§2). **Draft in the new cascade order (decision J):
> Obesity & Metabolic Syndrome → Type 2 Diabetes → Cardiovascular Disease & Hypertension → Chronic Kidney
> Disease → Undernutrition & Malnutrition → Bone Health & Osteoporosis.** Each dossier's §11/§12 lists the new
> `.bib` keys to add (~247 total) + residual "verify exact figure before printing" notes. See §4.
>
> **★ THE BOOK IS LIVE:** <https://nusmedicine.github.io/nutrition/> — deployed from `main` by the Pages CI
> (`publish.yml`) on every push. Parts I, II and III are fully drafted, reviewed and deployed.
>
> **⚠ SOURCE OF TRUTH = [`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md)**
> (read it first) + the auto-loaded memory ([[part2-drafting-state]], [[authoring-style-rules]]).

## 0. What happened last session (2026-07-05)

- **Completed Part II "Across the life stages" (6 chapters).** Drafted **Ch.10 Childhood & Adolescence**,
  **Ch.11 Adulthood: working life & activity** (net-new), **Ch.14 Healthy Ageing** — each through the full
  pipeline (research+verify Workflow → draft qmd + bespoke island + quiz + MCQ-only case → 5-dimension review
  → build/browser-verify → commit → deploy). (Ch.9 Infancy, Ch.12 Pregnancy, Ch.13 Menopause were done the
  session before.) New islands: `bone-window`, `fuel-dial`, `same-plate`.
- **Fixed the case scroll-jump bug** (`CasePlayer.svelte`): the focus-on-mount effect scrolled the case into
  view on every chapter load. Fix = skip focus on initial mount + `focus({preventScroll:true})` on genuine
  transitions. Verified.
- **Whole-book editorial + pedagogical review** (see [[authoring-style-rules]]): reduced the overused word
  "honest" (38→0 in prose); **de-biased every MCQ** (removed bold from options, balanced option length so the
  correct answer isn't given away — 146 quiz questions verified); added **just-in-time glosses** for the one
  genuine prerequisite gap (*insulin resistance*, at Ch.10 first use + Ch.12 GDM) and *metabolic syndrome*
  (Ch.11); added a **Ch.15 archetype bridge** and a **Part II intro page** (`part2-intro.qmd`) setting the
  recognise-and-refer altitude. A cross-chapter audit confirmed the Part II→III sequencing is **sound — do
  not re-sequence** (every Part II reliance on a Part III skill is recognise-and-refer, never perform).
- **Stubbed Part IV** — 6 "in preparation" placeholder chapters so the by-name cross-refs resolve.

## 1. The spine — 26 chapters, 5 parts. Full table + decisions A–I in `curriculum-map.md`.

Legend: ✅ drafted & deployed · 🟢 dossier ready · 🟡 split-source ready · 🔴 net-new/stub.

| Part | Chapters | Status |
|---|---|---|
| **I** · The metabolic & physiological basis | 1–8 (why-nutrition, energy-balance, macronutrients, micronutrients, digestion-absorption, integrative-metabolism, gut-microbiome, appetite) | ✅ deployed |
| **II** · Across the life stages | 9 Infancy · 10 Childhood & Adolescence · 11 Adulthood · 12 Pregnancy · 13 Menopause · 14 Healthy Ageing (+ `part2-intro.qmd`) | ✅ **complete & deployed** |
| **III** · Advising the healthy | 15 What a Healthy Diet · 16 Evidence vs Hype · 17 Assessing Diet · 18 Behaviour-Change Counselling | ✅ deployed |
| **IV** · Advising the chronically ill | 19 Obesity & Metabolic Syndrome · 20 Type 2 Diabetes · 21 CVD & Hypertension · 22 Chronic Kidney Disease · 23 Undernutrition & Malnutrition · 24 Bone Health & Osteoporosis (cascade order — decision J) | 🟢 **dossiers verified · stubs in book — next to draft** |
| **V** · Integration & practice | 25 Interprofessional Practice & Referral (🟢 dossier, no stub) · 26 Capstone: Integrated Cases (= `cases.qmd`, exists) | partial |

**Cross-refs are by NAME**, so the numbering is safe. Part IV chapter files: `obesity-metabolic-syndrome`,
`undernutrition-malnutrition`, `type-2-diabetes`, `cardiovascular-disease-hypertension`,
`chronic-kidney-disease`, `bone-health-osteoporosis` — all currently stubs.

## 2. The pipeline (reuse for every chapter) — and its load-bearing discipline

1. **Read the source dossier** in `research/chapters/` (see §4 for which). Deepen the mechanism/evidence layer.
2. **Research + adversarially verify — a `Workflow`.** ~6 web-grounded research agents (one per subtopic) →
   **refute-every-PMID verification** → synthesize the dossier → a completeness/boundary critic. **This caught
   real citation errors in EVERY chapter** (wrong PMIDs, wrong first authors, dead URLs, over-attributed
   numbers — memory [[research-subagent-gotchas]]). **Never print a citation before this pass.** For any
   residual specific numbers you want to keep, run a small find-verify Workflow (as done for Ch.10/11).
3. **Draft** the qmd (AUTHOR §11 house style + [[authoring-style-rules]]) + a **bespoke island** + MCQ quiz +
   **MCQ-only** case (with a do-no-harm hard route); add `@keys` to `book/references.bib`; register the
   chapter in `book/_quarto.yml` and the island in `components/src/main.js`.
4. **Review** with a 5-dimension `Workflow` (house-style/altitude · cross-refs & decisions · evidence vs the
   verified dossier · quiz/case · island fidelity) → triage → apply fixes.
5. **Build + render + browser-verify**: `npm --prefix components run build` → `node scripts/render.mjs` →
   `node scripts/check-assets.mjs …` → `node scripts/validate-cases.mjs` → preview_start "book-fix" (port
   8783, or "book-preview" 8781 if free) → drive island/case (memory [[book-preview-verification]]). Commit.

**House rules reviewers enforce** (AUTHOR §11 + [[authoring-style-rules]]): cross-ref chapters **by NAME**;
never say "first-year" in prose; **in-chapter cases are MCQ-only** (no `patient-chat`; `validate-cases.mjs`
enforces); the **do-no-harm fork hard-routes unsafe choices to `remedial`** (a high score can't buy success);
**MCQ options: no bold, similar length** (trim the correct option, move detail to feedback); **no "honest"
tic**; **JIT-gloss** any term not yet taught in reading order. The 🔬🍜🍳 triad is exempt for Part II+ (use a
lone 🍜 only where genuine). Part IV chapters are **management** — but still pitched to recognise the
nutritional levers and refer, not prescribe the full regimen (see each chapter's dossier depth note).

> **⚠ Editing gotcha (Dropbox):** file edits on this Dropbox tree can leave `*.tmp.PID.hash` artifacts. After
> any bulk edit, run `find book -name '*.tmp.*' -delete` before rendering/committing.

## 3. Decisions (don't re-litigate) — full log in `curriculum-map.md`

- **(G)** patient-state axis: II life stages → III advising the healthy → IV advising the chronically ill → V.
- **(H)/(I)** Part II split per life stage + re-sequenced chronologically + Adulthood chapter added. **Done.**
- **(C)** older-age ↔ undernutrition boundary: *Healthy Ageing* = ageing **in health**; *Undernutrition &
  Malnutrition* (Part IV) = the **pathological** state (MUST/MNA/MDT/ONS/refeeding). Ch.14 hands off to it.
- **(F)** popular diets: *What a Healthy Diet* owns the map; *Evidence vs Hype* owns the appraisal; therapeutic
  low-carb/VLCD for T2D remission → the *Type 2 Diabetes* chapter.
- **Part II→III sequencing is intentional** (recognise-and-refer altitude; the `part2-intro.qmd` primer makes
  it explicit). Do NOT re-order.

## 4. Remaining work — draft Part IV, then finish Part V

**All six Part IV research dossiers are now built, adversarially citation-verified & 🟢** (2026-07-06 Workflow).
Draft in the **cascade order (decision J)** below — each is a **management** chapter but at
recognise-the-levers-and-refer altitude. Each dossier's §5 evidence table + §11/§12 list the **new `.bib` keys
to add** (~247 across the six) and the residual "verify exact figure/wording before printing" items; add keys
per chapter at draft time (do **not** bulk-add up front).

1. **Ch.19 Obesity & Metabolic Syndrome** — `research/chapters/obesity-metabolic-syndrome.md` 🟢. Cascade opener;
   Asian BMI action points, MetS clustering, lifestyle-first, sleep/stress axis, weight-inclusive framing.
2. **Ch.20 Type 2 Diabetes** — `research/chapters/type-2-diabetes.md` 🟢. Carb quality/GL, patterns, weight-centred
   remission (DiRECT/TDR/low-carb, with eligibility caveats), DPP prevention, Ramadan, SG War on Diabetes. GDM
   management disclaimed here (the Pregnancy chapter owns "why SG screens universally").
3. **Ch.21 Cardiovascular Disease & Hypertension** — `research/chapters/cardiovascular-disease-hypertension.md` 🟢.
   DASH, sodium (+K), fat/lipid quality, Mediterranean/PREDIMED (honest caveats), alcohol, hawker sodium.
4. **Ch.22 Chronic Kidney Disease** — `research/chapters/chronic-kidney-disease.md` 🟢 (net-new, now built).
   Protein adequacy-vs-restriction + PEW, Na/K/phosphate (hidden/additive), fluid; dietitian-led renal diet; refer.
5. **Ch.23 Undernutrition & Malnutrition** — `research/chapters/undernutrition-malnutrition.md` 🟢 (carved from the
   `08` SPLIT source). MUST, the MDT, ONS/food-first, refeeding *awareness*, IDDSI — the pathological under-tail
   (boundary C).
6. **Ch.24 Bone Health & Osteoporosis** — `research/chapters/bone-health-osteoporosis.md` 🟢 (net-new, now built).
   Ca/vit-D/protein & bone, peak bone mass & loss, SG vit-D paradox, non-dairy Ca sources; recognise & refer.
   (Part II Childhood/Menopause/Healthy-Ageing forward-ref it.)

**Cross-chapter drafting flags from the verification pass:** (a) **PREDIMED** is owned by the *CVD & Hypertension*
chapter — the Obesity & T2D chapters may cite it only for generic pattern-quality (no CVD-endpoint numbers).
(b) The stale **`ada2024care`** key in `references.bib` must be re-pinned book-wide to **`ada2026care`** (ADA
Standards of Care 2026, DOI 10.2337/dc26-S005) when adding T2D/CVD keys. (c) The legacy numbered source dossiers
(`09-overnutrition`, `10-cvd-hypertension`, `11-type-2-diabetes`, `08-life-cycle-undernutrition`) are now
**superseded** by the descriptive-named verified dossiers — safe to retire at cleanup.

**Then Part V:** Ch.25 Interprofessional Practice & Referral (dossier `14-interprofessional-referral` 🟢 —
needs a stub + drafting); Ch.26 Capstone = the existing `cases.qmd` (Integrated cases, home of the live LLM
patient) — may want expansion/renumber under a "Part V" label later.

**Cleanup deferred:** the orphaned `book/quizzes/life-cycle-nutrition.quiz.yml` and
`book/cases/mrs-devi-gdm.case.yml` (+ `diagrams/life-stages.yml`) from the retired life-cycle chapter — delete
when convenient. `research/chapters/life-cycle-nutrition.source.qmd` (retired overview) can be dropped now that
Ch.9/10/14 exist.

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
# Browser-verify: preview_start "book-fix" (python, port 8783, serves %TEMP%\book-health-preview\_book)
#   [another chat may hold 8781/"book-preview"] → preview_eval location.href=… → step island/case. Async reactivity.
```
**Gotchas:** Dropbox/Defender file-locks make in-place `quarto render book` fail (os error 32) → always render
**out-of-tree**. Edits can leave `*.tmp.*` artifacts (§2 gotcha). Islands need **HTTP** (not `file://`). Harmless
"LF→CRLF" warnings on every add. Occasional harmless `git .git/objects Permission denied` on commit (commit
still lands; a `dangling tree` from `git fsck` is not corruption).

**Deploy (no `gh`):** `git push origin main` → `publish.yml` (build always passes; the `actions/deploy-pages`
step failed **transiently once** — re-trigger with an empty commit, or ask the user to "Re-run failed jobs").
Check the run via the public API:
```powershell
Invoke-RestMethod "https://api.github.com/repos/nusmedicine/nutrition/actions/runs?per_page=3" `
  -Headers @{ "User-Agent"="claude-code"; "Accept"="application/vnd.github+json" } |
  ForEach-Object { $_.workflow_runs } | Select-Object status, conclusion, head_sha -First 3
```
> **Pushing is user-gated:** the auto-mode classifier blocks pushes to `main` without explicit per-batch
> user go-ahead (deploying is outward-facing). Commit freely; ask before you push.

## 7. Repository map

```
HANDOVER.md(this) · AUTHOR.md(§11 = template + house rules) · curriculum-map.md = SOURCE OF TRUTH
scripts/ render.mjs · check-assets.mjs · validate-cases.mjs · preview.ps1 · patient-proxy.ps1
patient-proxy/  PROD key-holding proxy (deployed; §5)
book/
  _quarto.yml            Parts I–IV + Integrated cases (Part IV = 6 stubs)
  references.bib         SINGLE source of truth for citations (499 entries)
  chapters/*.qmd         Parts I (1–8) · II (part2-intro + 6) · III (4) · IV (6 stubs) · cases.qmd
  diagrams/*.yml         island data (incl. bone-window, fuel-dial, same-plate, requirement-dial, …)
  quizzes/*.quiz.yml · cases/*.case.yml   (in-chapter cases MCQ-only; sim-* = live AI chat)
components/src/          main.js(REGISTRY) + Quiz/CasePlayer + island .svelte + lib/{engine,store,manifest,base,md}
research/
  00-overview/curriculum-map.md   ← the 26-ch spine + decisions A–I (READ FIRST)
  chapters/*.md                   dossiers (Part IV: 09-overnutrition🟢, 11-type-2-diabetes🟢, 10-cvd-hypertension🟢,
                                  08-life-cycle-undernutrition🟡; CKD/Bone = net-new needed)
```

## 8. Git state

- **On `origin/main` & DEPLOYED:** everything through the whole-book review (`5d376e1`).
- **Committed this wrap-up (verify pushed):** the Part IV stubs + `_quarto.yml` + this HANDOVER + curriculum-map
  update. If `origin/main..main` is non-empty, they're unpushed — push (redeploys) needs the user's go-ahead.
- **Working tree:** the untracked user file `Update Health in Medicine 2026 v2.pptx` (leave it) and a modified
  `.claude/launch.json` (added a `book-fix` preview config on port 8783 — harmless dev tooling; not committed).
- Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`. `book/_book/` is gitignored (built by CI).

## 9. Memory (auto-loaded each session — `memory/MEMORY.md`)

- [[part2-drafting-state]] — Part II COMPLETE & deployed; next = Part IV; per-chapter pipeline + push/deploy notes.
- [[authoring-style-rules]] — **load-bearing house rules from the review**: MCQ options no-bold + same-length;
  no "honest" tic; JIT-gloss prerequisite gaps; Part II→III is recognise-and-refer (don't re-sequence); Ch.15
  is the life-stage-independent archetype.
- [[research-subagent-gotchas]] — always adversarially verify citations before printing; caught errors in EVERY
  chapter.
- [[book-preview-verification]] · [[dropbox-quarto-render-lock]] · [[in-chapter-cases-mcq-only]] ·
  [[singapore-context-citation-principle]] · [[chemical-structure-and-image-rendering]] · [[qwen-llm-endpoint]].
