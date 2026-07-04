# Part I polishing plan

> Systematic 5-lens review of Part I (Ch.1–8) run 2026-07-05 to scope a polishing pass.
> Five parallel read-only review agents assessed: **house-style conformance · cross-references &
> overlap-ownership · evidence & citation hygiene · pedagogical arc/altitude/prose · quiz & case
> quality**. This file is the consolidated findings + the workstream plan. Severity: **BLOCKER /
> SHOULD-FIX / NICE-TO-HAVE**.

## Verdict

Part I is a **genuinely coherent, well-architected sequence** — the cross-reference web is
deliberate and lands (RQ Ch.2→Ch.6, leptin Ch.2→Ch.8, incretins Ch.5→Ch.8, SCFA Ch.7→Ch.8), the
house rules (recognise-don't-manage, honest-caveat-on-every-claim, forward-reference clinical skills)
are honoured, and the prose is confident and clean. **No BLOCKERS. No broken citations** (all 195
`@keys` resolve). **No broken cross-refs** (every numeric ref maps correctly post-resequence). **No
Singapore local-research-rule violations** (prior audit confirmed).

**Decisions (2026-07-05, user):** Ch.2 → **full rebuild to template** (incl. new island). Ch.6 →
**demote enzymes to asides** (lower altitude). Scope → **everything** (all six workstreams, SHOULD-FIX
+ nice-to-have). Executing in the recommended sequence below.

Two chapters need real work, pointing in **opposite altitude directions**:
- **Ch.2 Energy Balance sits too low** — the outlier on *every* lens (thin, only chapter with zero
  citations, no island, no Singapore section, no question-close, thinnest quiz + case) yet it carries
  a load-bearing role (Ch.8's capstone reopens "the question Part I opened in Chapter 2").
- **Ch.6 Integrative Metabolism reaches too high** — biochemistry creep against its own stated
  altitude contract (named enzymes as load-bearing text), plus it's the length outlier at 566 lines.

Everything else is polish.

## Chapter scorecard

| Ch | Chapter | Lines | House-style | Island | Question-close | SG section | Notes |
|----|---------|------:|-------------|--------|:--------------:|:----------:|-------|
| 1 | Why nutrition matters | 160 | Off-template but *appropriate* (gateway) | — | ✗ | ✓ (woven) | Solid for its role |
| 2 | Energy balance | 87 | **Weakest** — predates template | **✗ none** | ✗ | ✗ | **Rebuild target** |
| 3 | Macronutrients | 419 | 🟢 reference standard | ✓ gi | ✓ | ✓ | The yardstick |
| 4 | Micronutrients & hydration | 298 | Good (survey role) | ✓ molecule | ✗ | ⚠ nested `###` | Promote SG to `##` |
| 5 | Digestion & absorption | 357 | Good (process role) | ✓ gut | ✗ | ✗ (woven) | Add consolidated SG |
| 6 | Integrative metabolism | 566 | 🟢 skeleton, but altitude/order issues | ✓ ×2 | ✓ | ✓ | Lower altitude |
| 7 | Gut microbiome | 377 | 🟢 strong | ✓ scfa-flow | ✓ | ✓ | Model systems chapter |
| 8 | Appetite & weight regulation | 336 | 🟢 strong capstone | ✓ thermostat | ✓ | ✓ | Leptin back-ref to fix |

---

## Workstreams

### WS1 — Rebuild Ch.2 Energy Balance to house style  ★ highest impact
Four of five lenses flag Ch.2 as the outlier. Bring it up to the §11 template (~150–180 lines).
- **[SHOULD-FIX] Content depth.** Develop (not just tease) the ideas the chapter leans on: *why
  "calories in − calories out" is deceptive*, body composition (BMI/BIA/DXA/waist), the **EAT vs NEAT**
  split, adaptive/defended expenditure teaser, and a line on measurement error in BMR estimation.
  (house-style + arc)
- **[SHOULD-FIX] Teaching island.** The single most-warranted missing island in Part I — a **BMR/TEE
  calculator** (Mifflin–St Jeor + PAL) *or* a **TEE-components stepper** that Ch.8's
  adaptive-thermogenesis section can call back to. Pattern: copy `ScfaFlow.svelte`/`MetabolicMap.svelte`.
  (house-style)
- **[SHOULD-FIX] Citations.** Ch.2 is the ONLY Part I chapter with zero `@keys`, yet asserts
  Mifflin–St Jeor, BMR/TEF/PAL percentages, and "~100 kcal/yr" as bare fact. Cite Mifflin–St Jeor
  (original), Hill 2003 (energy gap), and the BMR/TEF/PAL sources. (evidence)
- **[SHOULD-FIX] "The Singapore picture" section** — portion sizes, hawker energy density, sedentary
  lifestyle. Currently the only Part I chapter with no SG lens. (house-style)
- **[SHOULD-FIX] "So — …?" question-close** — the blockquote *poses* "is weight just calories in/out?"
  but never gives even a one-line closing beat. (arc)
- **[SHOULD-FIX] Quiz** (`energy-balance.quiz.yml`, 4 Q = thinnest) → expand to ~6 Q covering the
  energy-balance *concept* (intake vs expenditure, why "eat less/move more" is incomplete) + TEF/NEAT,
  not just BMR mechanics. (quiz)
- **[NICE-TO-HAVE] Case** (`bmr-estimation.case.yml`) — currently 3 arithmetic steps that duplicate the
  quiz's Mifflin question; convert one step to an applied interpretation choice. (case)

### WS2 — Recalibrate Ch.6 Integrative Metabolism
- **[SHOULD-FIX] Lower altitude.** Demote the named-enzyme roster (PFK-1, CPT1, ACC, SCOT; the
  glucogenic/ketogenic amino-acid enumeration `:186-204`; lipoprotein-particle bookkeeping `:432-449`)
  from inline load-bearing text to **optional asides**. Keep the five-crossroads / one-way-street logic
  (excellent, genuinely first-year). Chapter violates its own blockquote contract ("never the full
  enzyme machinery", `:20`). Biggest single lever for altitude *and* length. `integrative-metabolism.qmd:64-84, 134-149, 186-204, 432-449` (arc)
- **[SHOULD-FIX] House-block order** — 🔬 (`:87`) … 🍳 (`:422`) … 🍜 (`:524`) violates §11b's
  "always 🔬→🍜→🍳". Reorder or decouple. (house-style)
- **[SHOULD-FIX] H1 dividers** — Part A/Part B use `#` (H1) at `:33`/`:212`, competing with the chapter
  title. Verify TOC/numbering renders as intended; consider `##` + visual divider. (house-style)
- **[NICE-TO-HAVE] Prose register** — tips into lecture-hall drama ("the door that only opens one way",
  "the single most important fact in the whole chapter"); calm to match Ch.4/5/7's even tone. (prose)

### WS3 — Standardise cross-references to chapter NAMES (book-wide)
No refs are broken today, but Part I was *just* resequenced — numbers are the fragile encoding.
- **[SHOULD-FIX]** Convert ~24 numeric refs in **Ch.5–8** to the "→ the *X* chapter" form Ch.3 models.
  Heaviest: `gut-microbiome.qmd` (9), `appetite-weight-regulation.qmd` (9), `integrative-metabolism.qmd`
  (5), the numeric half of `digestion-absorption.qmd`. (cross-refs)
- **[NICE-TO-HAVE]** Harmonise `macronutrients.qmd:235` "the metabolism chapter" → "the Integrative
  Metabolism chapter". (cross-refs)
- **[NICE-TO-HAVE]** Confirm the generic-name convention for forward Part II/III refs ("the diabetes
  chapter") is the deliberate house style. (cross-refs)

### WS4 — Consistency: question-closes + Singapore sections
- **[SHOULD-FIX] Add "So — …?" question-close** to Ch.2, Ch.4, Ch.5 (present in Ch.3/6/7/8; the ritual
  is broken by 3 peers). Cheapest fix, high arc-coherence payoff. (arc)
- **[NICE-TO-HAVE] Ch.4** — promote the flagship Singapore-salt content from `###` (under "Sodium and
  potassium", `:256`) to a top-level `## The Singapore picture`. (house-style)
- **[NICE-TO-HAVE] Ch.5** — add a consolidated `## The Singapore picture` gathering the woven SG
  content (lactase deficiency, cai png meal order, ORS). (house-style)

### WS5 — Small high-confidence accuracy fixes
- **[SHOULD-FIX] Ch.8→Ch.6 leptin promise mismatch.** `appetite-weight-regulation.qmd:68` says Ch.6
  "covered its metabolic role", but `integrative-metabolism.qmd:249-251` only name-drops leptin and
  defers to Ch.8. Either soften the Ch.8 back-ref or add one substantive leptin sentence to Ch.6.
  (cross-refs)
- **[NICE-TO-HAVE] curriculum-map.md:98** — lists gut peptides "(ghrelin, CCK, GLP-1, PYY, amylin —
  reused from Ch.5)"; ghrelin/PYY/amylin are actually *introduced in Ch.8* (Ch.5 has only CCK, GIP,
  GLP-1). Chapters are self-consistent; the map overstates. *(= HANDOVER deferred item #3.)* (cross-refs)
- **[NICE-TO-HAVE] references.bib** — `dallman2003` and `dallman2003comfortfood` are the same paper;
  the *cited* key is the thinner entry (no DOI/PMID). Merge + repoint. Remove 4 unused entries
  (`cochraneVitA`, `hmbIron2020`, `whoAnaemia`, the dallman duplicate). (evidence)
- **[NICE-TO-HAVE] digestion-absorption.qmd:236-237** — move the "small, short-term studies" caveat
  closer to the crisp 45%/40% meal-order figures. (evidence)

### WS6 — Prose & case-shape polish (mostly optional)
- **[NICE-TO-HAVE] Repeated openers** — 4× "The goal is **recognition**" blockquote stem (Ch.4/5/7/8);
  3× "more isn't better" tag in Ch.4 (`:34, 54, 231`); tighten Ch.8's four-hedge sleep/stress paragraph
  (`:253-258`). (prose)
- **[NICE-TO-HAVE] Case MCQ count** — Ch.2/4/5 cases have only 3 graded MCQs (target 4–5); add one
  choice each. (case)
- **[NICE-TO-HAVE] patient-chat node convention** — Ch.1–4 cases include a live `patient-chat` node;
  Ch.5–8 don't. Decide deliberately vs drift. (case)
- **[NICE-TO-HAVE] Ch.3 case objective-3** ("know when to refer") reads like a taught Part I competency;
  reword as a forward-reference. (case)
- **[NICE-TO-HAVE] Ch.1** — optional six-pillars "hub" interactive (bidirectional links now a bullet
  list) + a question-close. (house-style/arc)
- **[NICE-TO-HAVE] Quiz length** — Ch.4/5 are 12 Q (long outliers) vs a 6–10 norm; optionally trim
  1–2 low-yield items. (quiz)

---

## Recommended sequence
1. **WS5** (small accuracy fixes) + **WS3** (cross-ref names) — mechanical, no judgment calls, best done
   first so later edits don't collide.
2. **WS4** (question-closes + SG sections) — quick structural consistency.
3. **WS2** (Ch.6 recalibration).
4. **WS1** (Ch.2 rebuild — the big one, done deliberately, incl. a new island).
5. **WS6** (final prose + case polish).
6. Re-render + browser-verify (memory: book-preview-verification); re-run `check-assets`; commit + push
   (redeploys via Pages CI).

---

## Execution log (2026-07-05)

**All six workstreams executed.** Build ✓ (islands compile clean), render ✓ (exit 0, all 10 files),
`check-assets` ✓ (34 manifests, no missing refs), browser-verify ✓ (new island computes/interacts;
Ch.6 dividers render as unnumbered banners with section numbering intact).

- **WS1 — Ch.2 full rebuild.** Rewrote [`energy-balance.qmd`](book/chapters/energy-balance.qmd) to the
  §11 template (87 → ~175 lines): deceptive-equation thesis; three expenditure components with the
  **EAT/NEAT** split; Mifflin worked example; new **body-composition + measurement** section
  (BMI/waist/BIA/DXA, calorimetry/DLW); "defended, not free" section folding adaptive-thermogenesis +
  leptin + RQ teasers; **The Singapore picture**; **"So —"** question-close. Citations added
  (Mifflin, Hill energy-gap, NEAT, DLW, WHO waist). New **`energy-budget` island**
  ([`EnergyBudget.svelte`](components/src/EnergyBudget.svelte) + [`energy-budget.yml`](book/diagrams/energy-budget.yml),
  registered in `main.js`) — interactive Mifflin BMR/TEE calculator with a live BMR/TEF/PA stacked bar.
  Quiz expanded 4 → 7 Q (NEAT, defended-balance, BMI). Case gained an applied-interpretation MCQ.
- **WS2 — Ch.6 recalibration.** Enzyme roster (PFK-1, PDH, CPT1/ACC, SCOT, ketogenic-AA list) demoted
  to asides / de-bolded, keeping the crossroads + one-way-street logic; added a "for reference" aside
  for the CPT1/ACC switch. Part A/B `#`→`## … {.unnumbered}` (fixes rogue-H1). One superlative trimmed.
  *House-block order:* assessed — the three 🔬/🍜/🍳 callouts are on **different topics**, correctly
  placed per section (not one per-topic triad), so the strict 🔬→🍜→🍳 order does not bind; left in place.
- **WS3 — cross-refs → names.** All ~24 numeric "Chapter N" refs in Ch.5–8 (+ the Ch.3 short-name)
  converted to the "the *X* chapter" form. `grep 'Chapter [0-9]'` across chapters now returns nothing.
  Forward-refs to unbuilt Part II/III chapters kept as generic names (deliberate).
- **WS4 — closes + SG.** "So —" question-closes added to Ch.1, Ch.2, Ch.4, Ch.5. Ch.4 salt content
  promoted to a top-level `## The Singapore picture`; Ch.5 gained a consolidated `## The Singapore picture`.
- **WS5 — accuracy.** Ch.8→Ch.6 leptin back-ref softened to match what Ch.6 delivers (both use names now);
  `curriculum-map.md` gut-peptide line fixed; `dallman2003` duplicate merged (richer metadata kept, dupe
  deleted); Ch.5 meal-order caveat moved next to the 45/40% figures.
- **WS6 — polish.** Openers varied (Ch.4, Ch.7); one "more isn't better" tic reworded (Ch.4); Ch.8
  four-hedge cortisol paragraph tightened; +1 MCQ each to the ORT and iron cases (both now 4 scored MCQs,
  thresholds bumped to ≥3); Ch.3 case objective-3 softened to a forward-reference.

**Decisions taken during execution:**
- **patient-chat convention (revised by author):** the AI chat belongs **only in the Integrated cases
  chapter**, never in a Part I in-chapter case. The four in-chapter cases that had drifted to include a
  live `patient-chat` node — `pillar-mapping-mr-tan` (Ch.1), `bmr-estimation` (Ch.2), `common-questions`
  (Ch.3), `iron-deficiency-aisha` (Ch.4) — had those nodes **removed** and their `route` branches
  rewired straight to the existing endings. No content lost: every one of those personas already has a
  dedicated AI version as an Integrated case (`sim-pillar-mr-tan`, `sim-prediabetes-mdm-tan`,
  `sim-common-questions-mr-lim`, `sim-iron-deficiency-aisha`); and `bmr` was documented as MCQ-only in
  HANDOVER §5 anyway. Chosen over a CasePlayer flag because the case data itself now expresses the intent
  (a case is choice-only iff it has no chat node) — no runtime complexity. Verified: a graph linter
  (no chat nodes + all gotos resolve) and in-browser playthroughs (both reach endings, `sawChat:false`).
  In-chapter cases are now MCQ-only across Part I; the Ch.5–8 cases never had chat.
- **Ch.4/Ch.5 12-Q quizzes:** left at 12 (quality is high; the Ch.2 expansion narrowed the gap). Trimming
  good questions for uniformity wasn't worth the lost coverage.
- **Ch.1 six-pillars "hub" island:** deferred (a whole new island for marginal value on a gateway chapter
  that already works well). Question-close added instead.

**Verify-before-lock:**
- The **5 new Ch.2 citations** (mifflin1990, hill2003energygap, levine2002neat, westerterp2017dlw,
  whoWaist2011) were **adversarially web-verified ✓** (every field checked against PubMed + CrossRef;
  all DOIs resolve to the exact papers; no PMID misattribution). Supporting figures confirmed standard
  (Hill 2003 = the ~100 kcal/day energy-gap source; TEF ~10%, BMR 60–70% of TEE). No corrections needed.
- **Not yet committed/pushed** — pushing redeploys the live site, so it awaits the author's review.

## Pre-existing HANDOVER §11 follow-ups — ✅ ALL DONE 2026-07-05 (second session pass)
- **Ch.4 dossier** — SG iodine + folate web-verified **voluntary** (cited `codling2017iodine`,
  `ffiFortification`); Turkey-PMID trap confirmed excluded; quiz already at 12 Q. *(Optional "sodium day"
  / iron-interactive widgets left un-built — the static tables cover them.)*
- **Ch.5 dossier** — `yap1989` kept + newer `goh2018lactase` added (recency gap); NNS ~4% wholegrain
  confirmed vs `mohNNS2022`; SG ORT epidemiology kept general (no verified local figure exists).
- **Ch.5 gut-island hotspots** — all 9 recalibrated against a coordinate grid + click-tested
  (gallbladder/pancreas/liver/stomach/mouth now on the right anatomy; large-intestine → descending colon);
  the manifest's numeric chapter-refs also converted to names.
- **Ch.6 residual** — `krebs1969alcohol` PMID pinned (5774487); StatPearls bookshelf IDs already present.
- **Ch.1 six-pillars hub island** — built (`pillars-hub`), wired into Ch.1, browser-verified (supersedes
  the "deferred" note above).
- **Docs refreshed** — HANDOVER (status + §7 tooling reference + §9 map + §11/§12), AUTHOR (cross-ref-by-
  name + MCQ-only cases), all three dossier flag sections. New reusable scripts: `scripts/render.mjs`,
  `scripts/validate-cases.mjs`.

*(First-pass status note above — "not yet committed" — is superseded: the Part I polish shipped as commit
`ae8f3d3`; this follow-up pass is a second commit.)*
