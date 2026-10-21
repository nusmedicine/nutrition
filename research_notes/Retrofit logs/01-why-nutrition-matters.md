# Retrofit log: Why Nutrition Matters (`book/chapters/01-why-nutrition-matters.qmd`)

Files changed: `book/chapters/01-why-nutrition-matters.qmd`, `book/diagrams/pillars-hub.yml`,
`book/quizzes/why-nutrition-matters.quiz.yml`, `book/cases/pillar-mapping-mr-tan.case.yml`.

## Summary of changes

- Top of chapter: the question-and-roadmap opener is now a concrete problem statement. Added a Learning
  objectives callout (6 objectives, in section order) and a 4-branch chapter map.
- Structure (plan option A, decision 4, small moves only): "The six pillars of health" and "Nutrition as
  the hub" are merged into one movement `## The six pillars of health {#sec-pillars}` with two `###`
  children (`#sec-six-pillars`, `#sec-hub`). The whole "learnable skill" section (prose + scope callout)
  moved up before the Singapore picture, giving movements → The Singapore picture → close. New ids:
  sec-burden, sec-pillars, sec-six-pillars, sec-hub, sec-patterns, sec-skill, sec-singapore, sec-close,
  sec-quiz, sec-case (HEAD had none, and nothing links into an anchor of this chapter).
- Headings: "Why this is Singapore's fight" → "The Singapore picture"; "A learnable, examinable clinical
  skill" → "Nutrition counselling as a learnable skill"; "Why a doctor should care about food" → "Why
  should a doctor care about food?". Callout titles: "Read the headline carefully" → "How precise is the
  11 million figure?"; "Prevention, the Singapore way" → "Healthier SG: prevention in primary care";
  "What this year will, and won't, do" → "The scope at this stage".
- §11g voice: all 10 exposition "you/your" removed (cross-ref in parentheses, "tools that clinicians
  use", "familiar from the labels", scope callout in third person, quiz/case intros rewritten). Book-as-
  actor and metacommentary cut ("It is the natural spine of this course", "That gap is why this course
  exists", "The conviction behind Health in Medicine…", "the trap the chapter warns against", "the
  starting point for everything that follows in this book").
- Bold only at defining uses (NCDs, six pillars of health, Healthier SG, insulin sensitivity, cortisol,
  single-nutrient reductionism, dietary pattern, Mediterranean pattern, DASH pattern, War on Diabetes);
  emphasis bold and emphasis italics removed; bold removed from the NNS table cells.
- §11j form by relation: six-pillar inline-header list → definition list (terms the hub sub-section
  depends on); My Healthy Plate / Nutri-Grade inline-header list → definition list; hub list → plain
  full-sentence bullets in pillar order with a lead-in; the cai png / kopi-o kosong illustration → an
  `.example` box; the close → a direct answer as four parallel reasons. Long sentences split; vague
  "This" openers replaced; "carbs" → "carbohydrate".
- Six collapsed Check yourself callouts: 2 after The shape of modern disease, 1 after The six pillars of
  health, 2 after Patterns over nutrients, 1 after Nutrition counselling as a learnable skill. None
  after the Singapore picture or the close.
- Island (pillars-hub.yml): title and links without em dashes; hub.note cut to the instruction (its
  first sentence repeated the hub paragraph; kept non-empty because the component falls back to a
  built-in default with an em dash); footer deleted (repeated the "One practical rule follows"
  paragraph and rendered as a bold takeaway; decision 9); header comment names the chapter.
- Quiz: no bold, no em dashes, no "Correct —/No —/Too low —" openers; options trimmed to similar
  length; q2 and q6 stems rewritten (q6 no longer brands the book); no two consecutive feedbacks share
  an opening word (checked by script).
- Case: em dashes, emphasis bold and the bold arrow chain removed (remedial is now a numbered list);
  Plan 1 / Plan 2 labels unbolded; options trimmed; feedback opens with the explanation; caveat slide
  rewritten with unbolded glosses of residual confounding and reverse causation and a pointer to the
  *Evidence vs Hype* chapter (owner of those terms).
- Term ownership override of the plan: "composite endpoint" is owned by Evidence vs Hype, so it is NOT
  bold-defined here (the plan wanted it). The chapter keeps its plain phrase ("its main result combined
  several cardiovascular events"); the quiz uses "a combined measure/outcome" instead of the term.
- Citation placement: the plan moved `@sleepRestriction` onto the appetite claim. Not done (decision 1:
  that is a source-support judgment); the key stays at the end of the sleep bullet, where it was.
  `@gbd2019diet`, `@frost2018mi` and `@mohWarOnDiabetes` stay on the claims they supported.

## Gate (HEAD vs working copy)

- Citation multiset identical (16 keys, each once).
- Islands 3 → 3; figures 0 → 0; tables 1 → 1; callouts 5 → 12 (+1 Learning objectives, +6 Check
  yourself; no existing callout removed).
- HEAD had no {#sec-…}/{#fig-…} ids, so none are missing.
- copy-audit (all four files, --you): 71 flags → 0 flags; 0 "you" in the chapter.
- YAML validation: all three YAML files load. validate-cases: exit 0, pillar-mapping-mr-tan OK.
- Not rendered (render/quarto forbidden in this run): TOC, chapter-map anchors and the `.example` box
  (first use in the book) still need a render check.

## Content fixes (before → after, category)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| case | persona.presentation | "BMI 27 (obese by Asian cut-offs)" | "BMI 27 (overweight by Asian cut-offs)" | Contradiction with another chapter's cited figure (Assessing Diet & Talking to Patients: overweight ≥23, obese ≥27.5, @sgObesityBMI) |
| case | intro.body | "His BMI is **27** — in the obese range by Asian cut-offs." | "His BMI is 27, in the overweight range by Asian cut-offs." | Same as above |
| chapter | Patterns over nutrients, Mediterranean bullet | "a combined measure of heart-disease events" | "a combined measure of cardiovascular events" | Label misnames content (the events were mostly strokes, which are not heart-disease events) |
| chapter | "Landmark trials come with caveats" callout | "combined several heart-disease events, most of them strokes" | "combined several cardiovascular events, most of them strokes" | Label misnames content |
| chapter | "Landmark trials come with caveats" callout | "limits you will examine in the clinical chapters" | "(see the *What a Healthy Diet Looks Like* chapter)" | Cross-reference retargeted to the chapter that covers the PREDIMED/DASH caveats |
| chapter | Close | "Nutrition is where the largest and most modifiable share of modern disease is decided" | "Diet is among the leading modifiable risks for the non-communicable diseases that now cause most deaths." | Internal contradiction: the close overstated the body's hedged claim |
| quiz | q2, correct feedback | "stress drives comfort eating" | "stress is thought to drive comfort eating" | Contradiction with the chapter's own hedged, cited text (@dallman2003) |
| case | q-underperform a | option "his 5.5 h sleep and work stress keep driving appetite and comfort eating" (unhedged) | option "short sleep and stress keep driving his intake up"; feedback "work stress is thought to drive comfort eating" | Same as above |
| case | q-plan b, feedback | "less stress reduces comfort eating" | "less stress may reduce comfort eating" | Same as above |
| quiz | q4, correct feedback | "a stroke-dominated composite endpoint, partly cluster-randomised, from a 2018 re-analysis after the original was withdrawn" | "a combined measure of cardiovascular events dominated by strokes, in a 2018 re-analysis published after the original was withdrawn over problems with how participants were assigned to groups" | Terminology: terms the chapter does not teach (owned by Evidence vs Hype and Micronutrients) replaced by the chapter's own phrases |
| diagram | pillars-hub substances `full` | "Avoiding risky substances" | "Avoidance of risky substances" | Label consistency with the chapter's pillar name |
| case | caveat-slide | "Residual confounding and reverse causation mean…" | glossed in plain words, plus "(see the *Evidence vs Hype* chapter)" | Gloss (decision 2) and owner-chapter pointer (decision 3) |

## Deferred content concerns (need source-checking; not changed)

1. Chapter para 1 "three-quarters of all deaths worldwide [@who2020diet]" (and quiz q1 "74%", preface):
   who2020diet is the WHO healthy-diet fact sheet; the NCD share comes from the WHO NCD fact sheet.
   Check the source states it, or swap the key.
2. Hub list, sleep bullet [@sleepRestriction] (and the uncited pillars-hub sleep link): Spiegel 2004
   supports "raises appetite", not "lowers insulin sensitivity" or "late, heavy meals worsen sleep". The
   key was left in its original place (end of the bullet).
3. Mediterranean bullet and caveat callout "most of them strokes" (quiz q4 correct feedback: "most of
   them strokes" since fix round 1; quiz q4 option a feedback: "its combined outcome was dominated by
   strokes rather than heart attacks"): check against estruch2018predimed whether strokes were the
   majority of composite events or the main driver of the reduction (the CVD chapter says "driven
   mainly by stroke").
4. Mediterranean bullet "about a 30% lower risk": not labelled relative (§11d; the quiz, the CVD chapter
   and Evidence vs Hype all call it relative); "was associated with" is odd wording for a randomised
   result.
5. Case caveat-slide "roughly half the mortality risk of the least healthy": no citation supports it.
6. Scope callout "Detailed medical nutrition therapy, drug choices and disease management come later,
   as does deciding when to refer": the book itself teaches when to refer (Interprofessional Practice &
   Referral, Part IV recognise-and-refer), so "later" may read as "not in this book". Author to confirm
   the intended meaning (later chapters vs later years).
7. Whole chapter vs the preface (book/index.qmd): heavy overlap (NCD share, GBD estimate, 1 in 3
   lifetime diabetes risk, NNS figures, crowley2019, a near-duplicate scope statement).

## Deferred backlog

- No 🔬🍜🍳 house blocks; the cai png / Nutri-Grade swap could become a 🍜 Eating out block
  (decision 4: adding house blocks deferred).
- No substantive teaching figure (§11f), for example a My Healthy Plate visual or a GBD dietary-risk
  chart (decision 4: deferred).
- No "Why nutrition matters at a glance" section (plan Uncertainty 2: not added; the opener,
  objectives and chapter map orient the reader).
- Add the glossary rows below to book/glossary.qmd (not an owned file).
- Render check: TOC (four movements, #sec-pillars with exactly two ### children), chapter-map links,
  the new `.example` box, and the pillars-hub island showing the new prompt with no footer.
- components/src/PillarsHub.svelte: the built-in fallback title and hub note contain em dashes and the
  fallback note repeats the chapter text (component outside this run's scope).

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Cortisol | The main stress hormone | Why Nutrition Matters |
| DASH pattern | Dietary Approaches to Stop Hypertension: a dietary pattern rich in fruit, vegetables and low-fat dairy that lowers blood pressure | Why Nutrition Matters |
| Dietary pattern | The diet taken as a whole, which predicts health better than any isolated nutrient | Why Nutrition Matters |
| Healthier SG | Singapore's national shift from reactive hospital care toward proactive, relationship-based prevention in primary care | Why Nutrition Matters |
| Insulin sensitivity | How well the body clears glucose in response to insulin | Why Nutrition Matters |
| Mediterranean pattern | A dietary pattern built on olive oil, nuts, legumes, fish and vegetables | Why Nutrition Matters |
| My Healthy Plate | Singapore's "quarter, quarter, half" plate: a quarter wholegrains, a quarter protein and half fruit and vegetables | Why Nutrition Matters |
| Non-communicable disease (NCD) | A chronic disease that is not passed from person to person, such as cardiovascular disease, type 2 diabetes, cancer or chronic respiratory disease | Why Nutrition Matters |
| Nutri-Grade | Singapore's A–D front-of-pack grade on drinks, based on sugar and saturated fat | Why Nutrition Matters |
| Single-nutrient reductionism | The search for one villain nutrient or one "superfood", in place of attention to the whole diet | Why Nutrition Matters |
| Six pillars of health | The evidence-based behaviours, used alongside drugs and surgery, that prevent, treat and sometimes reverse chronic disease: nutrition, physical activity, restorative sleep, stress management, positive social connection and avoidance of risky substances | Why Nutrition Matters |
| War on Diabetes | Singapore's national programme, launched in 2016, that treats diabetes as a population-scale problem | Why Nutrition Matters |

(The plan's "Composite endpoint" row is dropped: the term is owned by Evidence vs Hype and no longer
appears in this chapter.)

## Owner terms from term-ownership.md that do not occur in this chapter

None. All 12 terms assigned to 01-why-nutrition-matters occur and are defined (10 in bold, My Healthy
Plate and Nutri-Grade as definition-list terms).

## Fix round 1 (verifier findings)

All 1 blocker, 3 majors and 25 minors addressed. Two fixes were applied in a modified form, explained
below. No new claims, numbers or citations.

### Citation placement restored (decision 1: a key moves only with its claim)

| Location | Before (round 0) | After | Note |
|---|---|---|---|
| Singapore picture, War on Diabetes | "...launched in 2016, treats diabetes as a population-scale problem. Roughly 1 in 3 ... residents [@mohWarOnDiabetes]." | "...launched in 2016, treats diabetes as a population-scale problem [@mohWarOnDiabetes]: roughly 1 in 3 Singaporeans has a lifetime risk of diabetes, with higher risk among Malay and Indian residents." | HEAD placement restored (blocker). The minor finding on the same sentence suggested the key at the end instead; the blocker's HEAD-placement fix was followed. Whether the key also supports the 1-in-3 / ethnic-risk statistic is a source question: see deferred concern 8 |
| Healthier SG callout | "...the preventive, behaviour-first approach of the six pillars is increasingly the organising frame of primary care. Its most visible form is **Healthier SG**, ... [@mohHealthierSG]." | "In Singapore, this preventive, behaviour-first approach is increasingly the organising frame of primary care, most visibly through **Healthier SG**, ... [@mohHealthierSG]." | HEAD sentence restored; the key again covers the primary-care claim and no explicit six-pillar tie is asserted |
| Shape of modern disease, GBD | "...too little fruit [@gbd2019diet]. That estimate puts diet among the largest modifiable contributors to early death." | "...too little fruit, which puts diet among the largest modifiable contributors to early death [@gbd2019diet]." | The conclusion is back inside the cited sentence |

The "Citation placement" bullet in the summary above is now accurate for all three keys.

### Content fixes (before → after, category)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| quiz | q2 option c feedback | "so it cannot be treated in isolation: fixing the diet often means..." | "so treating it in isolation tends to fall short: fixing the diet often means..." | Internal consistency: absolute claim vs the chapter's hedged "often". The verifier's "often falls short" was changed to "tends to fall short" so that "often" does not appear twice in one sentence |
| case | q-leverage option c feedback | "Medication is premature: he is well, and his diet, ..." | "Medication is premature and out of scope here: his diet, sleep, stress and alcohol leave plenty of modifiable ground, so lifestyle comes first." | Internal contradiction ("he is well" vs the case's "Feeling well does not mean low risk" and "Asymptomatic is ... not the all-clear"); HEAD's scope point restored. Modified: the verifier's "he has no symptoms" clause was left out, because giving the lack of symptoms as the reason medication is premature repeats the reasoning the case teaches against (that symptoms decide whether to act); HEAD gave no such reason |
| case | q-underperform option a text | "Because short sleep and stress keep driving his intake up." | "Because short sleep and stress can keep pushing his intake up." | Internal consistency with the chapter's hedged, cited "are thought to drive" (@dallman2003) |
| case | q-pillars option a feedback | "...and each feeds back onto his eating, so a diet-only view misses most of the picture." | "...and they feed back onto his eating, so a diet-only view is too narrow." | Overstatement relative to the chapter (activity does not feed back onto eating there; nutrition is the hub) |
| case | caveat-slide gloss | "Residual confounding (the healthiest people differ in other ways too)" | "Residual confounding (the healthiest people differ in other ways that the analysis cannot fully adjust for)" | Gloss accuracy (decision 2): adds the "residual" element |
| chapter | Scope callout | "Training as a dietitian and prescribing protocols lie outside it." | "...lie outside it at this stage." | Restores HEAD's "Won't (yet)" meaning |
| chapter | Check yourself (neglect) | "Training can close that gap, because..." | "The gap is not fixed, because..." | Removes an efficacy claim the chapter does not make |
| chapter | Check yourself (NCDs) | "NCDs are slow diseases of daily living, driven in large part by..." | "NCDs are, in large part, slow diseases of daily living, driven by..." | Hedge restored to match the body text |
| chapter | Check yourself (DASH) | "...was not tested." | "...was not tested in that trial." | Scope of the claim (the trial, not all research) |
| quiz | q4 option a feedback | "its combined outcome was made up mostly of strokes, not heart attacks." | "its combined outcome was dominated by strokes rather than heart attacks." | Wording that holds under either reading of deferred concern 3; location added to concern 3 |

### Style and structure fixes

| File | Location | Before | After |
|---|---|---|---|
| chapter | Opener | two sentences ("...a patient can change. A doctor who treats only the acute crisis arrives late.") | first sentence only (the punchline stays in the body and the first Check yourself) |
| chapter | Shape of modern disease | "These are, in large part, slow diseases..." | "NCDs are, in large part, slow diseases..." (§11j cohesion) |
| chapter | Shape of modern disease | Check yourself "a headline says poor diet kills 11 million people a year. What can, and cannot, be concluded?" | deleted: it repeated the "How precise is the 11 million figure?" callout a few lines above (recall, not explanation; two boxes on one point). The verifier offered deletion as an alternative to a rewrite; deletion fixes both the repetition and the signal overload. The movement keeps the NCD Check yourself |
| chapter | Hub list lead-in | "The links to the other five pillars are these:" | "Nutrition links to each of the other five pillars in its own way:" |
| chapter | Caveat callout | "...hold within their limits, which is how any landmark trial is best read." | "...hold within their limits, and any landmark trial is best read the same way." |
| chapter | Patterns over nutrients, Check yourself | title "...Why does the evidence point him to his overall pattern instead?"; answer restated the claim and said the trials "show it" | title "...What follows from the evidence for the advice he should get?"; answer: "The search for one superfood, or one villain nutrient, is single-nutrient reductionism. The evidence points to the dietary pattern, the diet taken as a whole, which predicts health better than any isolated nutrient. The advice therefore targets his overall pattern instead of one food. The Mediterranean and DASH patterns illustrate the point, each within the limits of its trial." (the verifier's 33-word second sentence split in two, §11j) |
| chapter | Scope callout | "Detailed medical nutrition therapy, drug choices..." | "Detailed medical nutrition therapy (a dietitian's individualised nutrition plan for a medical condition), drug choices..." (plain, unbolded gloss; term owned by Interprofessional Practice & Referral, decisions 2 and 3) |
| chapter | Singapore picture | "These tools keep advice concrete and local." (stranded one-sentence paragraph) | "These tools keep advice concrete and local, as in two everyday swaps:" as the example box's lead-in |
| chapter | Close | "Together, these make nutrition core clinical work." | deleted (a summary of the four-bullet answer, §11c) |
| quiz | q4 correct feedback | one 40-word sentence | "The trial found a ~30% relative reduction in a combined measure of cardiovascular events, most of them strokes. That result comes from a 2018 re-analysis, published after the original was withdrawn over problems with how participants were assigned to groups." |
| quiz | q6 option a | "Instead of drugs and surgery, as an alternative to them" | "Instead of drugs and surgery, replacing usual care" (no padding) |
| quiz | q3 option b | "Find the one magic nutrient and maximise it" | "One magic nutrient, maximised, will fix the diet" (parallel statements) |
| case | q-pillars option b | "All six pillars, social connection only weakly." | "All six pillars, though social connection is weaker." |
| case | q-plan option b feedback | "(next screen)" | "(see the evidence screen that follows)" (learners with quality < 3 see the remedial screen first) |
| diagram | credit | "after ACLM / lifestyle-medicine frameworks." | "after the American College of Lifestyle Medicine (ACLM) and other lifestyle-medicine frameworks." (abbreviation expanded, decision 2) |

### Deferred content concern added

8. Singapore picture, War on Diabetes sentence: with HEAD's placement restored, [@mohWarOnDiabetes] sits on
   the programme claim, and the 1-in-3 lifetime-risk and higher Malay/Indian risk statistic after the colon
   has no key of its own. Check whether mohWarOnDiabetes states the statistic. If it does, the author may
   also put the key on the statistic; if it does not, a source is needed.

### Gate after fix round 1 (HEAD vs working copy)

- Citation multiset identical (16 keys, each once; `diff` of the sorted key lists is empty).
- Islands 3 → 3; figures 0 → 0; tables 1 → 1; callouts 5 → 11 (+1 Learning objectives, +5 Check yourself:
  1 after The shape of modern disease, 1 after The six pillars of health, 2 after Patterns over
  nutrients, 1 after Nutrition counselling as a learnable skill). This replaces the "callouts 5 → 12" and
  "Six collapsed Check yourself" counts above.
- HEAD had no {#sec-…}/{#fig-…} ids, so none are missing; all round-0 ids are still present.
- copy-audit --you (all four files): 0 flags, 0 "you" in the chapter, 1 "rather than" (quiz q4a, below the
  threshold of 3).
- YAML validation: quiz, case and diagram all load. validate-cases: exit 0, pillar-mapping-mr-tan OK.
- No two consecutive feedback strings share an opening word (quiz and case, checked by script).
- Still not rendered (render/quarto forbidden in this run).
