# HANDOVER — continue in a new session

> Snapshot for picking this project up fresh. **Last updated: 2026-07-06.**
>
> **★ THE BOOK IS CONTENT-COMPLETE: 27 teaching chapters across 5 parts (28 numbered, since the Capstone is now
> split 4+4), all drafted, reviewed & LIVE.** Title is now **_Health in Medicine: Nutrition_** (subtitle "An
> interactive companion for medical students"). <https://nusmedicine.github.io/nutrition/> — deployed from `main`
> by the Pages CI (`publish.yml`) on every push.
> ⚠ **There is committed-but-UNPUSHED work awaiting a user go-ahead to deploy** (see §8): the Capstone `sim-*`
> enrichment, the Part V 4+4 split, a readability/table pass on 6 disease chapters, the retitle, and index fixes.
>
> **★★ NO REQUIRED WORK REMAINS.** The next session is open-ended. Sensible options: **(a)** add another chapter
> (there's an established, high-reliability pipeline — §2; candidate Phase-2 topics in §5); **(b)** enrich the
> **Capstone** (`cases-counselling.qmd` + `cases-referral.qmd`) with more `sim-*` AI-patient cases (§6); **(c)** a
> light polish/maintenance pass (§5 flags), e.g. extend the table/readability pass to more chapters. If the user
> names something else, just do that.
>
> **⚠ SOURCE OF TRUTH = [`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md)**
> (the 27-chapter spine + the full decision log A–M) + the auto-loaded memory (`memory/MEMORY.md`).
>
> **⚠ TWO RECURRING TRAPS.** (1) The **"honest"/"honestly" tic** is banned prose ([[authoring-style-rules]], AUTHOR
> §11d/§11g) and *keeps slipping into new drafts* — it was caught again in the newest chapter (5×). **Grep every
> new `.qmd`/`.case.yml`/`.quiz.yml` for `honest` and `first-year` BEFORE review.** (2) **Disk C: is near-full**
> (a few GB free) — commits have failed with *"unable to write new index file"* and succeeded on retry; the flaky
> **GitHub Pages *deploy* step** also fails intermittently (build always passes) — just re-run the failed deploy
> job. See §7.

## 0. How we got here (recent milestones — most recent first)

All on `main`. Full detail lives in the curriculum-map decision log + git history.

- **AI-disclosure front-matter + colophon** — added an **AI-use disclosure** callout to the Preface (`index.qmd`)
  and a new unnumbered end page **`chapters/colophon.qmd` ("How this book was made")** covering the technical build
  (Quarto/KaTeX/BibTeX · Svelte+Vite islands · GitHub Actions deploy), the self-hosted **Qwen** simulated-patient
  model, and the agentic authoring process (Claude Opus 4 via Claude Code; research→refute-check→draft→adversarial
  review→mechanical verify), with accountability held by the Dept + "reviewed and edited by medical educators". Wired
  into `_quarto.yml` after Part V. (User hand-edited the wording before deploy.) Best-practice basis: no AI authorship,
  disclose use, human accountability (COPE/ICMJE-aligned).
- **Part V split + readability/table pass + retitle** — (1) **Split the Capstone into two chapters** (decision N):
  Ch.27 *Everyday and preventive counselling* (`cases-counselling.qmd` — Mdm Tan, Mr Lim, Mr Tan, Mdm Goh) and
  Ch.28 *Recognising risk and knowing when to refer* (`cases-referral.qmd` — Aisha, Mr Chua, Mdm Devi, Encik
  Rahman); `cases.qmd` removed; two "capstone chapter"→"capstone cases" cross-refs updated. (2) **Readability pass**
  via a convert→adversarial-verify `Workflow`: **5 house-style tables** added to 5 previously table-less disease
  chapters (bone=calcium-by-life-stage, brain=supplement verdicts, T2D=hypo-risk drug classes,
  healthy-ageing=refer-list, evidence-vs-hype=claim/evidence/verdict) — **every citation preserved; the verify
  stage caught & fixed one fabricated cell in healthy-ageing.** Two other proposed tables (bone *three-conditions*,
  CKD *phosphate*) were **dropped in review because an existing figure already showed the same info** —
  ⚠ don't table-ify content a nearby figure already owns (`#fig-disambiguation`, `#fig-phosphate`). (3) **Retitle** to *Health in Medicine: Nutrition* (`_quarto.yml`), drop
  "first-year" framing in the preface, **remove the stale "pilot" note**, fix the "honesty"→"candour" style tic.
  All rendered (30/30) + asset-gated + case-linted + tic-grepped + browser-verified.
- **Capstone sim-case enrichment (+4 AI-patient cases)** — added four new `sim-*` encounters to Ch.27
  (`cases.qmd`), taking the Capstone from 4 → **8** live-AI-patient cases, each grounded in its source
  chapter and leaning into a do-no-harm trap: **Mr Chua** (79, frailty/undernutrition — *density up,
  restriction off*), **Mdm Devi** (63, post-fracture bone — calcium-megadose trap + refer for DXA),
  **Mdm Goh** (55, dementia-prevention — brain-supplement "save your money" + vascular levers),
  **Encik Rahman** (58, early CKD — DIY protein-restriction / star-fruit / K⁺-salt-substitute traps +
  renal-dietitian referral). Each has its own persona sprite set (DiceBear Avataaars, registered in
  `scripts/gen-persona-sprites.ps1`). No new island/JS: the `case` island reads the `.case.yml` at
  runtime. Rendered + asset-gated + case-linted + browser-verified (all 8 islands mount, all 20 new
  sprites resolve, portraits look right, no tics). **Names reuse common SG surnames as *different*
  patients — the book's established convention (Mdm Tan spans ages 51–82 across 6 cases; Mr Chua 46/52/79).**
- **Ch.26 Brain Health & Dementia (net-new, decision M)** `86d4256` — the closing Part IV chapter. Verified dossier
  `5a10551` (65-agent research→refute-check→synthesize→critic Workflow, 56 cites, 0 refuted). Prevention-first frame
  (vascular lever → MIND-RCT-null patterns → supplement do-no-harm → advanced-dementia feeding do-no-harm). Island
  `trial-check`, quiz, two do-no-harm cases, own-work figure.
- **Book-wide tone/style pass + part renames** `00d3519`, `fb5d0cf` — revised **all 26 prior chapters** to strip
  AI-writing tells (em-dashes ~1,500 → a few dozen; no "it's not X, it's Y"; no meta-commentary; no "So —"
  headers), codified in **AUTHOR §11g**. Renamed the parts to a clinical-function axis (**decision L** — see §1).
  Cleanup backlog done (bib-key dedup, `ada2024care`→`ada2026standards`, legacy/orphaned files retired).
- **Ch.19 Interprofessional Practice, Referral & Self-Care + restructure (decision K)** `f2fce0d` — referral folded
  into Part III; the AI-patient capstone became its own final Part V.
- **Part III §11f physiology retrofit** `2be9f8f`; **Part IV drafted** (Ch.20–25, cascade order — decision J,
  incl. the Ch.25 "Bone & Joint Health" reframe); **Parts I–III** drafted earlier.

## 1. The spine — 27 chapters, 5 parts (part titles per decision L)

Full table + decisions A–M in `curriculum-map.md` (READ IT FIRST). Cross-refs are by **NAME**, so renumbering is safe.

| Part | Chapters | Status |
|---|---|---|
| **I · Foundations of Nutrition Science** | 1 Why Nutrition Matters · 2 Energy Balance · 3 Macronutrients · 4 Micronutrients/Hydration · 5 Digestion & Absorption · 6 Integrative Metabolism · 7 Gut Microbiome · 8 Appetite & Weight Regulation | ✅ live |
| **II · Nutrition across Life Stages** | part2-intro (unnumbered) + 9 Infancy · 10 Childhood & Adolescence · 11 Adulthood · 12 Pregnancy · 13 Menopause · 14 Healthy Ageing | ✅ live |
| **III · Assessing and Advising Patients** | 15 What a Healthy Diet · 16 Evidence vs Hype · 17 Assessing Diet · 18 Behaviour-Change Counselling · 19 Interprofessional Practice, Referral & Self-Care | ✅ live |
| **IV · Nutrition in Disease** (cascade order — decision J) | 20 Obesity & Metabolic Syndrome · 21 Type 2 Diabetes · 22 CVD & Hypertension · 23 Chronic Kidney Disease · 24 Undernutrition & Malnutrition · 25 Bone & Joint Health · 26 Brain Health & Dementia | ✅ live |
| **V · Integrative Cases** | 27 Everyday & Preventive Counselling (`cases-counselling.qmd`) · 28 Recognising Risk & When to Refer (`cases-referral.qmd`) — **8 `sim-*` live-LLM-patient encounters, split 4+4** | ✅ live |

Every chapter has: pathophysiology/physiology beat where relevant (§11f), ≥1 teaching figure, a bespoke island, an
MCQ quiz, and an MCQ-only case with a do-no-harm hard route. Part IV/disease chapters run at **recognise-the-levers
+ refer** altitude.

## 2. The per-chapter pipeline (reuse for any new chapter) — load-bearing discipline

1. **Research a verified dossier first** (`research/chapters/<name>.md`). For a net-new topic, run a
   research→**refute-check every citation**→synthesize→completeness-critic `Workflow` (the Brain Health & Dementia
   dossier is the current exemplar; script persisted under the session dir). Every citation must be independently
   PMID/DOI-verified — research subagents *reliably* misattribute PMIDs ([[research-subagent-gotchas]]). The dossier
   carries drafting directives (§0/critic addenda), an evidence table with verified keys, and §11 "verify exact
   figure before printing" flags — **honour those flags**.
2. **Draft the `.qmd`** (AUTHOR §11 + §11f + §11g + [[authoring-style-rules]]). Shape: in-world framing blockquote →
   "*<Topic>* at a glance" → **pathophysiology beat** (built on the Part I / prior chapters BY NAME) → the
   dietary-lever sections → "The Singapore picture" → plain chapter-close → quiz → case(s). Embed **≥1 teaching
   figure** (own-work mechanism SVG in `book/figures/mechanisms/`, or a CC-licensed photo — log every image in
   `book/figures/CREDITS.csv`, CC0/PD/CC-BY/CC-BY-SA only).
3. **Build the artifacts:** a **bespoke island** (`components/src/<Name>.svelte` + `book/diagrams/<name>.yml` +
   register in `main.js` + `npm --prefix components run build`) — the pick-and-check pattern in `AdviseRefer.svelte`
   / `TrialCheck.svelte` is the easiest reliable model; an **MCQ quiz**; an **MCQ-only case** with a **do-no-harm
   hard route** (unsafe choice → `remedial`, and its lost point caps `quality` below the `quality >= N` success
   gate — mirror `dementia-feeding` / `refer-or-advise`); and the **bib keys** (append the dossier's verified
   entries to `references.bib`; a script that checks for key collisions before appending is safest).
4. **5-dimension review `Workflow`** (house-style/altitude · cross-refs/boundaries · evidence-vs-dossier · quiz/case
   · island+figure fidelity) → triage → apply fixes. Copy the `*-review` script shape from a recent run.
5. **Render + gate + browser-verify + commit** (§7): tmp-clean → `render.mjs` → `check-assets.mjs` →
   `validate-cases.mjs` → grep for the `honest`/`first-year` tics → browser-verify the island (pick, then read in a
   **separate** eval — Svelte reactivity is async) → add to `book/_quarto.yml` → commit.

**House rules the review enforces:** cross-ref chapters BY NAME (italic titles), and only to content that chapter
*actually owns*; never "first-year" or "honest/honestly" in prose (§11d/§11g); in-chapter cases **MCQ-only** (no
`patient-chat`; `validate-cases.mjs` enforces); the **do-no-harm hard route**; **MCQ options no-bold + similar
length** (trim the correct option, push detail into feedback); **disease-chapter altitude = recognise + refer**, no
memorised drug names/doses; **§11g prose style** (em-dashes sparingly, no antithesis/meta tics, professional-but-
warm); just-in-time glosses for prerequisite jargon; **≥1 teaching figure**; island accessibility (`role="group"`
+ `aria-pressed` + `aria-labelledby` tying each option group to its prompt).

> **⚠ Dropbox editing gotcha:** edits can leave `*.tmp.PID.hash` artifacts — `find book -name '*.tmp.*' -delete`
> before rendering/committing. On multi-line `Edit`s the tool needs exact whitespace/wrapping (the rendered file
> often wraps differently from the draft — re-read the region if an edit fails to match).

## 3. Decisions (don't re-litigate) — full log A–M in `curriculum-map.md`

- **(G)** Spine organised by the patient / clinical function, not knowledge-vs-skills.
- **(J)** Part IV = the cardiometabolic-renal cascade (Obesity → T2D → CVD → CKD → Undernutrition → Bone → Brain);
  the "two tails of malnutrition" is a part-opening frame + bookend, not adjacency.
- **(K)** *Interprofessional Practice & Referral* is a clinical skill → it lives in Part III (Ch.19); the AI-patient
  capstone is its own final part.
- **(L)** Part titles renamed to a clinical-function axis (the five titles in §1).
- **(M)** *Brain Health & Dementia* added as the closing Part IV chapter (Ch.26).
- **(N)** Part V (Integrative Cases) split into **two capstone chapters** — *Everyday and preventive counselling*
  (well / worried-well: history, myths, prevention) + *Recognising risk and knowing when to refer* (deficiency,
  disease, do-no-harm, safety-net). Grouped by consultation type (mirrors the book's spine); promote a 3rd chapter
  when a bucket reaches ~3 cases.
- **(§11f)** Part IV chapters carry a pathophysiology beat (built on Part I by name); Part III chapters carry
  relevant physiology background; figures where they teach.
- **(§11g)** Prose must not read like AI (em-dashes sparingly; no "it's not X, it's Y"; no meta-commentary;
  professional-but-warm; no curse-of-knowledge). Codified after a book-wide pass.

## 4. Optional / candidate work + maintainer flags

**No required work.** If extending the book:
- **More chapters (Phase-2 topics, deferred earlier):** standalone **Skin & Nutrition**, **GI conditions**, a
  standalone **Public-Health** chapter. (Joints were folded into the Bone chapter; acne lives in *Evidence vs Hype*.)
  Any new chapter goes through the §2 pipeline (dossier first).
- **Capstone enrichment:** add more `sim-*` AI-patient cases to `cases.qmd` (Ch.27) — see §6.
- **Polish:** the tone pass hit all chapters, but a re-read for any residual "truthful/honest"-family repetition is
  cheap value.

**Maintainer flags (low priority):**
- **`medUmbrella`** resolves to Dinu 2018 (a valid Mediterranean umbrella review), not the CVD dossier's preferred
  Hareer 2025 — fine as-is; re-pin only if a specific Hareer figure is ever needed.
- `references.bib` is large (~780+ entries). When adding keys, always check for a duplicate entry for the same paper
  before appending (the who2012potassium/ssass/hpb-sodium duplicates were cleaned in `fb5d0cf`; don't reintroduce).

## 5. Build, preview & deploy (env gotchas)

Toolchain is portable and often **not on PATH** in a fresh shell — use full paths (Bash tool):
- node/npm: `"$LOCALAPPDATA/node/current/node.exe"` (and `npm.cmd`) · quarto: `"$LOCALAPPDATA/quarto/current/bin/quarto.exe"`.
- **`gh` is NOT installed and there's no token** — use `git` + the *public* GitHub API for CI checks (read-only;
  you cannot trigger a workflow re-run via API).

```bash
npm --prefix components run build              # 1. rebuild the island bundle (only if you touched components/src)
node scripts/render.mjs                        # 2. LOCK-PROOF out-of-tree render (avoids the Dropbox os-error-32)
node scripts/check-assets.mjs "C:/Users/Admin/AppData/Local/Temp/book-health-preview/_book"   # 3. asset gate
node scripts/validate-cases.mjs                # 4. case linter (dangling gotos + MCQ-only rule)
```
- **Browser-verify:** `preview_start "book-fix"` (port **8783**) or `"book-preview"` (port **8781**) — both serve
  `%TEMP%\book-health-preview\_book`. (8781 is sometimes held by another chat's server → use 8783.) Navigate in one
  `preview_eval`, read DOM state in the **next** (async reactivity — [[book-preview-verification]]). Islands need HTTP.
- **Deploy (no `gh`):** `git push origin main` → `publish.yml` builds islands, renders Quarto, deploys `book/_book/`.
  **Pushing is user-gated — ask before pushing to `main`.** Check the run via the public API:
```powershell
Invoke-RestMethod "https://api.github.com/repos/nusmedicine/nutrition/actions/runs?per_page=1" `
  -Headers @{ "User-Agent"="claude-code"; "Accept"="application/vnd.github+json" } |
  ForEach-Object { $_.workflow_runs } | Select-Object status, conclusion, head_sha -First 1
```
> **⚠ The Pages *deploy* step is flaky** — it failed twice this session (build always passed). If a run shows
> `build: success` / `deploy: failure`, it's transient: the user re-runs the failed deploy job from the Actions UI
> ("Re-run failed jobs", reuses the artifact), or the next push carries it. **⚠ Disk C: is near-full** — commits can
> fail with "unable to write new index file"; **retry the commit** (it lands) and consider freeing space.
> Harmless "LF→CRLF" warnings on every add. `book/_book/` and `book/assets/components.js` are gitignored (CI rebuilds
> the bundle from `components/src`), so a rebuilt bundle won't show in `git status`.

## 6. The LLM simulated patient — BUILT, VERIFIED & DEPLOYED (touch only if it's the focus)

The `patient-chat` case node → a real guardrailed AI patient. Client-composed prompt; key held server-side in a
zero-dep proxy (`patient-proxy/`, FRP at `patient-api.phm.nusmed.space`); SSE streaming; an `(emotion)` tag drives
the portrait (fixed set: `neutral, concerned, relieved, skeptical, surprised`); a post-encounter JSON rubric;
graceful fallback if disabled. It lives **ONLY** in `sim-*` cases (the two Integrative-Cases / Capstone chapters,
`cases-counselling.qmd` + `cases-referral.qmd` — **8** encounters, split 4+4) — never in a per-chapter case
([[in-chapter-cases-mcq-only]], enforced by `validate-cases.mjs`). **Adding a sim case = self-contained `.case.yml`
(persona + `brief` + `opener` + intro/patient-chat/end nodes; no scenario registry, no JS) + a persona sprite folder
of the 5 emotions (`gen-persona-sprites.ps1`) + a section in whichever capstone chapter fits (counselling vs refer).** Endpoint reality ([[qwen-llm-endpoint]]): llama.cpp router, OpenAI API at `/v1`,
Qwen3.6 needs `enable_thinking:false` or content comes back empty. Code: `components/src/lib/{patient,config}.js`,
`CasePlayer.svelte`, `lib/engine.js`.

## 7. Repository map

```
HANDOVER.md(this) · AUTHOR.md(§11 = chapter template + house rules; §11f depth; §11g prose style) · README/etc.
scripts/  render.mjs · check-assets.mjs · validate-cases.mjs · preview.ps1 · patient-proxy.ps1
patient-proxy/  PROD key-holding proxy (deployed; §6)
book/
  _quarto.yml            5 parts, 28 numbered chapters (title "Health in Medicine: Nutrition")
  references.bib          SINGLE source of truth for citations (~780+ entries)
  chapters/*.qmd          I(1–8) · II(part2-intro + 9–14) · III(15–19) · IV(20–26) · V: cases-counselling(27) + cases-referral(28) · colophon(unnumbered)
  figures/  food/ · structures/ · anatomy/ · personas/ · mechanisms/(own-work SVGs) · CREDITS.csv
  diagrams/*.yml          island data (advise-refer, trial-check, renal-flip, must-screen, bone-bank, …)
  quizzes/*.quiz.yml · cases/*.case.yml   (in-chapter cases MCQ-only; sim-* = live AI chat)
components/src/           main.js(REGISTRY) + Quiz/CasePlayer + island .svelte files + lib/
research/
  00-overview/curriculum-map.md   ← the 27-ch spine + decisions A–M (READ FIRST)
  chapters/*.md                   verified dossiers (descriptive names)
```

## 8. Git state

- **`origin/main` is at `09d1da6` (last deployed); local `main` is 3 commits AHEAD, all UNPUSHED and awaiting a
  user go-ahead to deploy:** `1fb4b90` (HANDOVER rewrite) · `369d7c3` (Capstone +4 sim cases) · the split/tables/
  retitle commit. Once pushed, the live site rebuilds and the title becomes *Health in Medicine: Nutrition*.
- **Working tree:** untracked user file `Update Health in Medicine 2026 v2.pptx` (leave it) + modified
  `.claude/launch.json` (a `book-fix`/`book-preview` preview config — harmless dev tooling; intentionally uncommitted).
- Identity: `Kenneth Ban Hon Kim <kennethban@gmail.com>`. Commit freely; **ask before pushing** (deploying is
  outward-facing).

## 9. Memory (auto-loaded each session — `memory/MEMORY.md`)

- [[part4-dossiers-verified]] — the running state: all parts done, 27 chapters live; decisions J–M; the cross-chapter
  flags. (Now large — a `consolidate-memory` pass would be reasonable.)
- [[chapter-depth-and-figures]] — §11f depth directives (pathophysiology beat; physiology background; figures).
- [[authoring-style-rules]] — §11d/§11g: MCQ options no-bold + same-length; no "honest" tic; no AI-writing tells
  (em-dashes/antithesis/meta); JIT glosses; recognise-and-refer.
- [[research-subagent-gotchas]] — always adversarially refute-check citations before a dossier is 🟢; add a
  "do it yourself, no sub-agents" guardrail to research prompts.
- [[book-preview-verification]] · [[dropbox-quarto-render-lock]] · [[in-chapter-cases-mcq-only]] ·
  [[singapore-context-citation-principle]] · [[chemical-structure-and-image-rendering]] · [[qwen-llm-endpoint]].
