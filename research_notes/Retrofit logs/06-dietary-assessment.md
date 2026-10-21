# Retrofit log: Assessing Diet & Talking to Patients (06-dietary-assessment)

Files changed:

- book/chapters/06-dietary-assessment.qmd
- book/diagrams/diet-history.yml
- book/diagrams/nutri-grade.yml
- book/quizzes/06-dietary-assessment.quiz.yml
- book/cases/weight-gain-bubble-tea.case.yml

## Summary of changes

Chapter (`06-dietary-assessment.qmd`), following the plan:

- Opener rewritten (2 sentences, no generic "you"); new Learning objectives callout (6 items); new
  chapter map (`.concept-tree`, 3 branches = the 3 movements, linked).
- `{#sec-…}` ids added to every `##` and `###` (HEAD had none, and nothing links in). Headings renamed:
  "Where the practice begins" → "Diet assessment at a glance"; "From the history to the likely problems" →
  "Likely surpluses and shortfalls"; "Talking to patients: the first moves" → "The first moves: assess and
  advise"; "How do you start?" → "How should a first nutrition conversation start?".
- Three movement intros deleted (§11g "no movement intros").
- §11g voice: chapter no longer the subject of action verbs; generic/prescriptive "you" converted to third
  person (42 → 22 "you", all remaining = clinician in practice, quoted speech, the island instruction, or the
  case lead-in); "Crucially", "Reassuringly", "really", "meaningfully", "uniquely", "Everything here has a
  local hook", "(more on that below)", "the next section", "Here you practise only" removed; em dashes 3 → 0;
  "rather than" 5 → 0; bold 32.2 → 3.3 per 1,000 words (defining uses only).
- §11j pass 2: habitual intake, recall bias, reactivity pre-taught as a definition list before the methods
  table; table cells unbolded (definition table marks the terms).
- §11j form-by-relation: inline-header Assess/Advise list replaced by prose plus a `.flow` of the 5 A's; three
  surpluses, four red flags and four 🍜 swaps made bulleted lists; BMI cut-offs moved into a small
  Asian-vs-international table (no island shows them; the reason stays in prose with its citation); close
  rewritten as a numbered sequence answering the heading's question (summary sentence announcing the next
  chapter deleted, §11c).
- Terms bold-defined at first use (owner = this chapter): diet history, under-reporting, Nutrition
  Information Panel, anthropometry, MUST, lean body mass, 5 A's, SCOFF, sensitivity, specificity. Owner terms
  from other chapters left unbolded: Nutri-Grade, BMI, waist circumference, central (visceral) fat, body
  composition, free sugars, catabolism, undernutrition/malnutrition, disordered eating; "randomised trial"
  plain. "free sugar" → "free sugars"; "under-nourished" → "undernutrition"; "central adiposity" → "excess
  central (visceral) fat" (the Energy Balance owner term).
- One standard gloss added: *tapau* (buy takeaway). Sensitivity and specificity defined in words (standard
  definitions, decision 2); the cited pooled numbers unchanged.
- 6 collapsed Check yourself callouts, two at the end of each movement.
- Case lead-in callout em dash replaced.

Gate (HEAD → working copy): citation multiset IDENTICAL; islands 4 → 4; callouts 5 → 12 (+1 Learning
objectives, +6 Check yourself); tables 1 → 2 (+1 BMI cut-off table); figures 0 → 0; HEAD had no
`{#sec-…}`/`{#fig-…}` ids, so none missing. External anchors used (`energy-balance.qmd#sec-measuring`,
`integrative-metabolism.qmd#sec-starvation`) exist in HEAD.

Island/quiz/case data:

- `diet-history.yml`: `intro` deleted (repeated the chapter paragraph and the chapter's island instruction;
  decision 9; field is optional in DietHistory.svelte). `patient.line`: literal `\"` in a folded block scalar
  (rendered as backslashes) fixed to plain quotes. 19 em dashes → 0; "honestly" in patient speech →
  "actually"; capitals-as-emphasis "BEFORE" → "before"; "free sugar" → "free sugars". Yields/ids untouched
  (intake yields still sum to 100).
- `nutri-grade.yml`: `intro` cut to the island instruction + the "values are approximate" caveat (the A–D
  thresholds, sat-fat downgrade and C/D display rules repeated the chapter paragraph beside it; decision 9).
  9 em dashes → 0; "free sugar" → "free sugars". Sugar values, bands, colours, ids unchanged.
- `06-dietary-assessment.quiz.yml`: every "Correct —"/"The opposite —"/"There are —" feedback opener removed
  (feedback starts with the explanation); no two consecutive feedbacks share an opening word; 24 em dashes → 0;
  stem bold removed (q2, q8); options trimmed toward parallel length (q1, q4, q5, q8); "FFQ" spelled out;
  "unintentional(ly)" → "unplanned"; "under-nutrition" → "undernutrition"; "action points" → "cut-offs".
- `weight-gain-bubble-tea.case.yml`: 35 em dashes → 0; "Good —", "Right —", "Correct — do no harm." openers
  removed; no consecutive same-word feedback openers; "Honestly" in patient speech → "Actually"; quoted "Here's
  a strict…plan" → "I'll give you a strict…plan" (audit scaffold flag); end-good italic parenthetical
  rewritten so the chapter is not the subject. `validate-cases.mjs` passes.

Audit: `node scripts/copy-audit.mjs --you <5 files>` → 0 flags (baseline 99). YAML: all 4 files load with
js-yaml. `validate-cases.mjs`: OK.

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapters/06-dietary-assessment.qmd | callout in #sec-overview | "Part I invited you to audit your *own* diet. The move now is outward…" | Pointer dropped; callout retitled "From one's own plate to a patient's" and states the shared structure directly | Cross-reference to a part that does not cover the topic (no Part I chapter contains a diet self-audit; grep for "audit" finds none) → pointer dropped |
| chapters/06-dietary-assessment.qmd | #sec-both-tails, MUST paragraph | "as the *Integrative Metabolism* chapter's fasted state shows" | "(see prolonged fasting in the [*Integrative Metabolism*](integrative-metabolism.qmd#sec-starvation) chapter)" | Cross-reference retargeted: protein/lean-tissue breakdown is taught in "Prolonged fasting: ketones and the sparing of protein" (#sec-starvation), not in "The fasted state" (#sec-fasted) |
| chapters/06-dietary-assessment.qmd | #sec-both-tails, end | "(The recognition and management of the malnourished patient belongs to the undernutrition chapter.)" | "(see the [*Undernutrition & Malnutrition*](undernutrition-malnutrition.qmd) chapter for the recognition and management of the malnourished patient)" | Cross-reference: generic forward name replaced by the canonical name of the now-written chapter (decision 6) |
| chapters/06-dietary-assessment.qmd | #sec-case lead-in | "Take a history, read the drink, open the conversation…" | "Take a history, ask about the drinks, open the conversation…" | Label misnames what the content shows: the case has no label-reading decision; its drinks fork is the drinks question |
| cases/weight-gain-bubble-tea.case.yml | q-opener option b + its feedback | option: "…free sugars exceeding the recommended limit."; feedback quoted "'free sugars exceeding the limit'" | option: "…free sugars over the limit."; feedback: "'free sugars over the limit'" | Internal inconsistency: feedback quoted wording that the option does not contain |
| quizzes/06-dietary-assessment.quiz.yml | q6 stem, opt 1, opt 2 feedback; q7 opt 3 feedback | "unintentionally lost weight", "Unintentional weight loss", "under-nutrition", "Asian action points" | "unplanned weight loss", "undernutrition", "Asian cut-offs" | Terminology made consistent with the chapter's cited text (MUST "unplanned weight loss"; "Asian cut-offs"); no claim changed |

## Deferred content concerns (need source-checking; not changed)

1. `#sec-first-moves`, "Brief, respectful counselling in this style measurably improves what people actually
   eat [@frost2018mi]" (also restated, uncited, in Check yourself 5): confirm frost2018mi (a motivational
   interviewing review) reports a dietary-intake effect and supports "brief".
2. `#sec-nutri-grade`, "about 1.5 g less per serving" and "the label alone did not improve the overall quality
   of their basket [@nutriGradeRCT2023]": check the number, its unit (per serving vs per 100 ml) and the
   basket-quality outcome against the trial.
3. `#sec-nutri-grade` and The Singapore picture: "Since 30 December 2023 the mark has also covered
   freshly-prepared drinks, the *kopi*, *teh* and bubble tea bought at the stall [@hpbNutriGrade]": check the
   scope of the freshly-prepared requirement (it may apply only to some F&B outlets, not every hawker stall),
   which would make "bought at the stall" an overstatement.
4. `#sec-do-no-harm`, SCOFF "pooled sensitivity about 0.86 and specificity about 0.83 [@scoffMorgan1999;
   @kutzScoff2020]": the pooled figures come from the Kutz 2020 meta-analysis; Morgan 1999 is the original
   validation with different figures. Consider citing Kutz alone for the pooled numbers and Morgan for the
   tool (citation multiset had to stay identical).
5. `#sec-do-no-harm`, "Structured weight-management advice does not raise eating-disorder symptoms for most
   people (on average they ease slightly), but a small minority develop new symptoms [@jebeile2023edrisk]":
   check whether the review covers adults or only children/adolescents in obesity treatment, since the
   sentence generalises to "most people".
6. `#sec-methods`, "under-reporting is greater at higher body weight [@measurementToolkitDiet]": confirm the
   toolkit supports the body-weight gradient.
7. `#sec-overview`, "Graduates consistently report feeling least prepared in exactly this applied territory
   [@crowley2019; @aclm2022comp]": confirm both sources support "least prepared" for this territory.
8. `#sec-diet-history` (and diet-history.yml drinks note), "Sugary drinks … are the biggest hidden source of
   energy and free sugars in many Singaporean diets": uncited; consider a source (e.g. the NNS).
9. `#sec-both-tails`, waist circumference ≥90 cm (men) / ≥80 cm (women): uncited here (the Obesity &
   Metabolic Syndrome chapter carries the same cut-offs); consider a citation.
10. nutri-grade.yml drink sugar values (water 0, kopi-o 0, kopi-c siu dai 4.5, isotonic 6, Milo 7.5, packet
    tea 8, orange juice 9, cola 10.6, bubble tea 11 g/100 ml) are uncited approximations; the island flags them
    as approximate. Check against product data or cite.

## Deferred backlog (not done; decision 4 or out of scope)

- §11f teaching figure: the chapter has no static figure beyond the islands. Candidate: an annotated
  Nutrition Information Panel (per-serving vs per-100 ml column, ingredient order), or a hawker-drinks photo.
- Component code (not my files): `components/src/DietHistory.svelte` verdict strings (~lines 83–92, e.g.
  "Good — you ran the do-no-harm check.") and `components/src/NutriGrade.svelte` satnote (~line 111) contain em
  dashes and "Good —" openers.
- Term-ownership follow-ups for other chapters: Behaviour-Change Counselling bolds **5 A's** (line ~36) and
  Undernutrition & Malnutrition bolds **MUST** (line ~72); both are owned here, so those chapters should
  unbold them.
- Glossary: "Lean body mass" (this chapter) and "Fat-free (lean) mass" (Energy Balance) are near-synonyms;
  consider cross-referencing or merging the two rows.
- No 🔬/🍳 house blocks added (skills-chapter exemption, §11b); the single 🍜 block stays.
- Quiz q8 sits before q7 in file order (ids left unchanged).

## Glossary rows owned by this chapter (term | meaning | introduced in)

| Term | Meaning | Introduced in |
|---|---|---|
| 24-hour recall | A dietary assessment method in which the patient reports everything eaten and drunk the previous day; quick, but one day may not be a usual day | Assessing Diet & Talking to Patients |
| 5 A's | A five-step scaffold for brief counselling: assess, advise, agree, assist and arrange | Assessing Diet & Talking to Patients |
| Anthropometry | Body measurements, such as weight, height and waist circumference, used as an objective anchor in assessment | Assessing Diet & Talking to Patients |
| Diet history | A structured conversation about what a patient usually eats and drinks, walking through a typical day and probing high-yield areas such as drinks, snacks and portions | Assessing Diet & Talking to Patients |
| Food diary | A dietary assessment method in which the patient records everything as it is eaten, for several days; rich in detail but prone to reactivity | Assessing Diet & Talking to Patients |
| Food-frequency questionnaire | A checklist of how often foods are eaten over months; captures the habitual pattern and ranks people, but estimates quantities poorly | Assessing Diet & Talking to Patients |
| Habitual intake | What a person usually eats over months, as opposed to on any one day | Assessing Diet & Talking to Patients |
| Lean body mass | The body's functional, non-fat tissue (muscle and organ protein), broken down in a sustained energy deficit | Assessing Diet & Talking to Patients |
| Malnutrition Universal Screening Tool (MUST) | A validated screen for malnutrition risk that combines BMI, recent unplanned weight loss and acute illness stopping intake | Assessing Diet & Talking to Patients |
| Nutrition Information Panel | The nutrient table on a packaged food or drink, quoted per serving and per 100 g or 100 ml | Assessing Diet & Talking to Patients |
| Reactivity | Eating differently because intake is being recorded; the signature bias of a food diary | Assessing Diet & Talking to Patients |
| Recall bias | Error in reported intake that arises because the report depends on memory | Assessing Diet & Talking to Patients |
| SCOFF | A five-question screen for eating disorders (vomiting, loss of control, recent weight loss, feeling fat, food dominating life); a screen, not a diagnosis | Assessing Diet & Talking to Patients |
| Sensitivity | The proportion of people with a condition whom a screening test correctly flags | Assessing Diet & Talking to Patients |
| Specificity | The proportion of people without a condition whom a screening test correctly clears | Assessing Diet & Talking to Patients |
| Under-reporting | The systematic omission or shrinking of less-flattering foods and portions in self-reported intake, greater at higher body weight | Assessing Diet & Talking to Patients |

## Owner terms (term-ownership.md) not occurring in this chapter

None: all 16 terms assigned to 06-dietary-assessment occur and are defined (bold in prose; the three methods
in the methods table and the three bias terms in the definition list are unbolded, as §11g directs for
definition tables and lists).
