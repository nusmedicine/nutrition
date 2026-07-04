# Part II roadmap — "Advising people in a state of health" (Ch.9–13)

> Full roadmap from a 5-dossier pre-flight (one reviewer per chapter, 2026-07-05). Part II turns Part I's
> science into **practice**: what a good diet is, how it shifts across a life, how to assess someone's
> eating, how to help them change it, and how to sort evidence from hype. Chapters **11 & 12 are the
> payoff** for all the "we'll cover this later" forward-references scattered through the Part I cases.

## Readiness scorecard

| Ch | Chapter | Dossier | State | Blocking pre-work before drafting |
|----|---------|---------|-------|-----------------------------------|
| 9 | What a Healthy Diet Looks Like | `05-dietary-guidelines-patterns` | 🟢 ready | 2 BibTeX entries; build out food-environment strand; re-point old cross-refs |
| 10 | Nutrition Across the Life Cycle | `08-life-cycle-undernutrition` | 🟢 research, ⚠ **merged** | **Split the dossier** (undernutrition → Ch.19) before drafting |
| 11 | Assessing Diet & Talking to Patients | `06-dietary-assessment` | 🟢 ready | 6 BibTeX entries; verify Nutri-Grade sat-fat figure; decide label-ownership split; retitle |
| 12 | Behaviour-Change Counselling | `13-counselling` | 🟢 content (🟡 bib) | 3 citation confirms; **reconcile "5 A's" with Ch.11** |
| 13 | Evidence vs Hype & Everyday Questions | `07-evidence-literacy` | 🟡 **incomplete** | **Research pass**: food-&-acne (deep) + everyday-questions bank; re-scope vs Part I |

**Bottom line:** three chapters (9, 11, 12) are draft-ready after light chores; **two need real pre-work** —
Ch.10 a dossier *split*, Ch.13 a focused *research pass* (acne is the one deep sub-task).

## Two structural blockers (the only things that gate drafting)

1. **Ch.10 dossier split.** `08-life-cycle-undernutrition.md` is a *merged* file; the undernutrition half
   (defining malnutrition, MUST screening, MDT, special/texture-modified diets, the Mdm Tan/MUST case,
   the MUST-calculator + MDT islands) belongs to **Ch.19 (Undernutrition, Part III)**. The split is
   *interleaved*, not sequential — the reviewer mapped it section-by-section. Carve it out first; the
   life-cycle remainder is then draft-ready.
2. **Ch.13 research-completion pass (~half a normal dossier).** `07-evidence-literacy` fully delivers the
   evidence-literacy *toolkit* but is missing the two things the map added: (a) **food & acne**
   (dairy / high-glycaemic-load / whey — needs a real SR/meta-analysis + AAD-guideline pass, PMIDs
   adversarially verified — the single biggest lift) and (b) a **light everyday-questions bank** (coffee,
   sugar-"toxicity", gluten-free, one "superfood" — 1–2 sources each as toolkit demos).

## Cross-cutting pre-draft chores (apply to every chapter)

- **Dossier renumbering / cross-ref re-point.** Every Part II dossier still uses its *old* filename &
  spine numbers; internal cross-refs point at the pre-restructure numbering. Re-point them to the new
  spine (Ch.9–13, Part III = 14–19, Ch.20 referral, Ch.21 capstone) at draft time. *(Most error-prone
  step per the Ch.9 review — worth a mapping table.)*
- **Write the pending BibTeX entries.** Several dossiers verified citations but never added them to the
  bib: Ch.9 (`herforth2019fbdg` PMID 31041447, `jacobs2003synergy` PMID 12936941), Ch.11 (6 keys:
  `bapenMUST`, `scoffMorgan1999`, `kutzScoff2020`, `fiveAsNutrition`, `measurementToolkitDiet`,
  `nutriGradeRCT2023`), Ch.12 (`hpbMohCPG`, `usptfBehavioural`, `canPaeds2025dieting`, …). Batch this.
- **Confirm the canonical bib file.** Ch.11's dossier says entries go in `research/evidence/references.bib`,
  but the book renders from **`book/references.bib`** (per `_quarto.yml`). Confirm which is source-of-truth
  and land the entries there.
- **`dga2025` hold.** Do NOT cite the 2025–2030 Dietary Guidelines for Americans until a primary source is
  locked; teach 2020–2025 as the stable reference + a "guidelines evolve" beat.

## Four cross-chapter consistency decisions

| # | Decision | Recommendation |
|---|----------|----------------|
| A | **Nutri-Grade / food-label ownership** (Ch.9 vs Ch.11) | Ch.9 owns the **food-environment framing** (how policy/environment shapes choice); Ch.11 owns the **label-reading skill**. Retitle Ch.11 → "Assessing Diet & Talking to Patients". |
| B | **The "5 A's" wording** (Ch.11 ↔ Ch.12) | Adopt **Assess–Advise–Agree–Assist–Arrange** in both; fold "ask permission" in as an MI micro-skill. (Ch.11 already committed to this; align Ch.12.) |
| C | **Ch.10 ↔ Ch.19 boundary** | Ch.10 = *anticipating normal shifting needs in health*; Ch.19 = *recognising the pathological state*. One-line forward-ref (older-adult isolation → undernutrition risk → Ch.19). |
| D | **Ch.13 vs Part I** | **Demote** Part I's landmark trials/myths (PREDIMED, DASH, detox, keto, fat-burning-zone…) from "content to teach" to **worked examples the student runs the toolkit on**. Keep TRE + PREDIMED as calibration anchors. |

## Per-chapter capsules

**Ch.9 — What a Healthy Diet Looks Like** *(Part II anchor; synthesizes Part I into patterns)*
- *Spine:* why guidelines exist → My Healthy Plate/QQH as the SG anchor → reading/comparing guidelines
  (they **converge**) → pattern-thinking vs nutrient reductionism → Mediterranean (PREDIMED, w/ caveats)
  → DASH (w/ caveats) → the **food environment & tools** (Nutri-Grade/HCS/Healthier Dining) → translating
  to real hawker/3-cuisine meals.
- *Island:* **"Build a Healthy Plate"** QQH plate-builder with a **Chinese / Malay / Indian cuisine toggle**
  (same target, three ways) — the archetypal Part II practice island. *(Secondary: a guideline comparator
  highlighting the shared messages.)*
- *Case (MCQ):* **"Three households, one plate"** + a PREDIMED-caveat branch (forward-ref Ch.13).

**Ch.10 — Nutrition Across the Life Cycle** *(after the dossier split)*
- *Spine:* nutrition is dynamic → pregnancy/lactation (folate/iron/iodine/Ca-D, food safety) → **GDM
  (universal 75 g OGTT — SG signature)** → infancy (EBF ~6 mo, complementary feeding) → childhood/
  adolescence (bone accrual, iron) → older age (energy down, density & protein up; sarcopenia/frailty).
- *Island:* **"Life-Stage Needs Explorer"** (timeline selector → stage-defining nutrients + SG guideline).
  *(Secondary: GDM universal-screening pathway walk-through.)*
- *Case (MCQ):* **"Mrs Devi, 26 weeks pregnant"** (GDM recognition + universal screening). *(NOT the
  Mdm Tan/MUST case — that migrates to Ch.19.)*

**Ch.11 — Assessing Diet & Talking to Patients** *(pays off the biggest Part I debt)*
- *Spine:* why assess first → the **3 methods + their biases** (24-h recall / FFQ / food diary) → a
  practical **diet-history skeleton** (drinks = highest local yield) → history → nutrients of deficit/excess
  → screening at **recognise-and-refer** depth (MUST, Asian BMI ≥23/≥27.5) → first-year altitude (take a
  basic history, don't do full dietetics).
- *Island:* **diet-history simulator** (branching `case-player` "day-in-the-life"; patient reveals intake
  only on direct questioning — the drinks-probe is the hinge). *(Secondary: Nutri-Grade sugar-ladder or a
  24h/FFQ/diary method-comparator.)*
- *Case (MCQ):* **"Weight gain & bubble tea"** OSCE-style diet-history station.
- *Add:* a callback to Part I's "audit your own diet" taster.

**Ch.12 — Behaviour-Change Counselling** *(the "how to help someone change" payoff; Ch.21 seed)*
- *Spine:* knowledge ≠ change → **5 A's** consult backbone → **MI spirit + OARS + change talk** (resist the
  righting reflex) → intention → **one SMART goal** + if-then implementation intention → **Stages of Change
  as a tailoring heuristic** (taught with humility) → cultural tailoring → **do-no-harm** (ED red flags,
  weight-neutral language, recognise-and-refer).
- *Island:* **"Righting reflex vs reflective listening" response-chooser** (fix the patient's turn, vary the
  clinician's — the deterministic way to teach a conversation). *(Secondary: Readiness-Ruler + SMART-goal
  builder.)*
- *Case (MCQ):* **"The two kopi gao a day"** (Mr Tan, taxi driver) — the natural **LLM-patient capstone
  seed** for Ch.21.

**Ch.13 — Evidence vs Hype & Everyday Questions** *(Part II closer; needs the research pass first)*
- *Spine:* a claim ≠ evidence (trace headline → study) → the **evidence hierarchy (and why nutrition bends
  it)** → **correlation ≠ causation** → relative vs absolute risk → surrogate vs hard endpoints →
  mechanism-plausible ≠ proven → **marketing/COI red flags**.
- *Everyday questions:* **acne** (deep — dairy/high-GL, the flagship), coffee, sugar-"toxicity", gluten-free,
  one superfood; reuse detox/supplement/TRE as ready-made appraisal demos.
- *Island:* **"Spot the Red Flag"** claim-analyzer + an **evidence-hierarchy sorter** (with a "nutrition
  twist" toggle).
- *Case (MCQ):* **"Cutting out milk cleared her skin — should I stop dairy?"** (teen acne + TikTok claim).

## Overlap-ownership additions for Part II (extend the curriculum-map table)
| Topic | Owner | Reuses / cross-refs |
|---|---|---|
| Dietary patterns & guidelines (Med/DASH/QQH) | **Ch.9** | Ch.1 (teasers), Part III (therapeutic use) |
| Food environment & policy (Nutri-Grade/HCS framing) | **Ch.9** | Ch.11 (the label-reading *skill*) |
| Diet-history methods & screening | **Ch.11** | Ch.12 (the change conversation), Ch.20 (referral) |
| The 5 A's + MI + SMART goals | **Ch.12** | Ch.11 (opening moves only), Ch.21 (live-chat capstone) |
| Evidence-literacy toolkit | **Ch.13** | all of Part I (trials/myths → practice material) |
| GDM (recognition + universal screening) | **Ch.10** | Ch.15 T2DM (management) |
| Bone nutrients across life stages | **Ch.10** (life-stage need) | Ch.17 osteoporosis, Ch.18 menopause |

## Recommended sequence & effort
1. **Prep sweep (do first, mostly mechanical):** land the pending BibTeX entries; settle decisions A–D;
   **split the Ch.10 dossier**; kick off the **Ch.13 research pass** (acne + everyday questions, adversarially
   verified — this can run in parallel while other chapters draft).
2. **Draft in this order** (readiness + narrative): **Ch.9** (anchor) → **Ch.11** (diet-history payoff;
   lock the 5 A's wording here) → **Ch.12** (counselling; align 5 A's; seed Ch.21) → **Ch.10** (once split)
   → **Ch.13** (once research lands). Cross-refs are by *name* now, so out-of-spine drafting is safe.
3. Each chapter via the §2.1 pipeline: clear dossier flags → draft qmd + island(s) → quiz + MCQ case →
   render/verify/browser-test → ship. Islands are **skills-style** (plate builder, diet-history sim,
   MI response-chooser, claim analyzer), not molecular diagrams.

**Character shift from Part I:** cases carry more weight (counselling/assessment live in conversations —
but stay **MCQ-only in-chapter**; the live AI-chat versions are the Ch.21 capstone), and the interactives
are practice tools rather than mechanism diagrams.
