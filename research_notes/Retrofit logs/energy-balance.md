# Retrofit log: Energy Balance

Files edited (only these):

- book/chapters/energy-balance.qmd
- book/diagrams/energy-budget.yml
- book/quizzes/energy-balance.quiz.yml
- book/cases/bmr-estimation.case.yml

## Gate (HEAD vs working copy, chapter .qmd)

| Check | Before | After | Note |
|---|---|---|---|
| Citation multiset | 10 keys, 11 uses (westerterp2017dlw ×2) | identical (diff empty) | every key on the sentence it supported; mohNNS2022 moved with its sentence to the head of the Singapore levers paragraph |
| data-island | 3 | 3 | energy-budget, quiz, case |
| Callouts | 3 | 8 | +1 Learning objectives, +5 Check yourself, −1 "Worked example" (now a `.example` box) |
| Tables | 0 | 1 | body-composition tools table (form-by-relation) |
| Figures | 0 | 0 | |
| Ids | sec-overview, sec-expenditure, sec-bmr, sec-measuring, sec-defended, sec-singapore, sec-close, sec-quiz, sec-case | all kept + new `sec-out` | `sec-out` added for the chapter map |

Copy audit (`--you`, four files): 34 flags before → 0 after. Em dashes 0 in all four files; "you" 0 in chapter prose
(only the standard "Check your understanding" heading); chapter bold density 32.4 → ~7 per 1,000 words.
YAML: all three files load with js-yaml. `validate-cases.mjs`: OK bmr-estimation.case.yml.

Not done (forbidden in this run): render. Needs a render check that the definition list and the `.example` box
render, the TOC reads at-a-glance · Energy expenditure: the "out" side (2 children) · Measuring the body and its
budget · How the body defends its weight · Singapore · close · quiz · case, and that the anchors
`appetite-weight-regulation.qmd#sec-satiety`, `#sec-defended`, `integrative-metabolism.qmd#sec-rq` and
`01-why-nutrition-matters.qmd` resolve (all ids exist at HEAD).

## Summary of changes

Chapter:

- Opener replaced (2 sentences, no "you", no bold, no chapter-as-actor).
- Added Learning objectives (6) and a 3-branch chapter map (sec-out with 2 children, sec-measuring, sec-defended).
- Headings: "Energy in, energy out" → "Energy balance at a glance" (§11c); "The 'out' side of the equation" →
  "Energy expenditure: the 'out' side {#sec-out}"; "The balance is defended, not free" → "How the body defends its
  weight" (bare punchline heading, §11h). All ids kept.
- Deleted movement intro and hook lines with "you"; deleted meta/roadmap sentences ("the thread this chapter
  opens and the capstone of Part I closes", "two ideas planted now are developed later in Part I", "Hold that
  tension…", "For now the definition is enough…"); chapter-as-actor references replaced by parenthetical
  "(see the *X* chapter)" links.
- TEE sentence now spells out BMR, TEF and PA before they are used.
- Emphasis bold removed throughout (bold now only at 15 defining uses).
- Exercise/NEAT inline-header list → definition list (terms unbolded).
- Worked example callout → `.example` box (\mathbf removed, thousands commas `1{,}240`), caveat moved to prose.
- BMI/waist/BIA/DXA inline-header list → 4-row table (cheap screen → reference), followed by a prose paragraph
  that carries the causal chain (BMI blind spot → Asian cut-offs → flag not verdict; waist → central fat risk).
- Bold run-in lead-ins dropped in sec-measuring and sec-defended (argument paragraphs, not parallel entries).
- §11j pass 1 (objective test): RQ paragraph moved from sec-defended to sec-measuring (RQ is read from the
  indirect-calorimetry gases; sec-defended's own intro promised two ideas). No citation on it, gate unaffected.
- Adaptive-thermogenesis paragraph: "This is the single biggest reason…" → "That defence is the single biggest
  reason…" (keeps the original referent, the preceding sentence about active defence; the plan's "Adaptive
  thermogenesis is…" would have narrowed the claim, see deferred concern 1).
- Leptin paragraph split (38-word sentence) and "Body fat is not a passive store" folded into the topic sentence.
- Five collapsed Check yourself callouts: 2 at end of sec-out, 2 at end of sec-measuring, 1 at end of sec-defended.
- Singapore picture: comma splice fixed, long sentences split, "calories" → "kcal", "easily-missed" → "easily
  missed", "nasi lemak" dropped (one example per idea; char kway teow is the case persona's anchor), "banking"
  metaphor plain-worded, "makes the arithmetic vivid" → "adds to the surplus", "Singapore-first" (internal label)
  dropped, NNS sentence moved to the front as topic sentence, three levers set as a bulleted list, My Healthy
  Plate and Nutri-Grade unbolded (owned by *Why Nutrition Matters*) with a linked reminder.
- "Small numbers, long time" callout: emphasis bold removed; "or a couple of biscuits" dropped (one example per
  idea; the sweetened drink is the anchor used later).
- Close rewritten to answer with content ("Partly."), "you" removed, "a hormone" → leptin, announcement of the next
  chapter replaced by a parenthetical cross-reference; sentence-initial "Calories…" (audit us-spelling flag on the
  slogan) reworded to 'The rule "calories in minus calories out"…'.
- Quiz section intro paragraph deleted (pilot form); case intro rewritten from the persona's presentation; tip
  callout em dash → semicolon.
- One term, one name: "lean mass" after the "fat-free (lean) mass" definition; energy in "kcal" (calories only in
  the quoted slogan and "calorie counting").

Island data:

- energy-budget.yml: `intro` key deleted (repeated the chapter's instruction sentence and the BMR/PA paragraphs;
  decision 9; component renders it only `{#if data.intro}` and the FALLBACK has none); "On your feet…" →
  "Often standing or walking…"; credit and comment em dashes → semicolons; comment "Chapter 2" → "the Energy
  Balance chapter".
- energy-balance.quiz.yml: every "Correct —"/"Too high —" opener removed; feedback starts with the explanation;
  em dashes removed; stem emphasis bold → italic; Oxford commas removed; q3 age feedback gains the chapter's
  mechanism ("partly because lean mass is lost"); q6 option 3 trimmed ("simply" dropped); q7 stem drops "rather
  than". Opening words checked: no consecutive repeats within or across questions.
- bmr-estimation.case.yml: "Right —"/"Correct:" openers removed; em dashes removed; emphasis bold removed (only
  the formula line keeps bold); thousands commas (1,240 / 1,405 / 1,700 / 1,740 / 1,000+); remedial title "Let's
  revisit the estimate" → "Revisiting the estimate"; arrows in remedial body → prose list; "kopi-o kosong"
  italicised; "Slow and steady wins" cliché dropped. Opening words checked per node. Objectives, persona,
  route and structure untouched; still MCQ-only.

## Content fixes (decision 1, each logged)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| book/quizzes/energy-balance.quiz.yml | q2, option "Thermic effect of food", feedback | "TEF is fairly constant at ~10% of intake." | "TEF is fairly constant at about 10% of TEE." | Contradiction between chapter and its quiz (chapter: TEF is "about 10% of TEE"), resolved toward the chapter text |
| book/cases/bmr-estimation.case.yml | q-tee, option c (≈ 2.2), feedback | "~2.2 is for very active people — not a sedentary teacher." | "Factors of about 2.0 or more describe very active people, not a sedentary teacher." | Contradiction between chapter and its case (chapter's PAL bands put "very active" at 2.0), resolved toward the chapter text |
| book/chapters/energy-balance.qmd | sec-measuring, table, DXA row | "**DXA** (a low-dose X-ray scan)" | "DXA (dual-energy X-ray absorptiometry), a low-dose X-ray scan" | Gloss: abbreviation expansion (decision 2; DXA named explicitly there) |
| book/chapters/energy-balance.qmd | sec-singapore, paragraph 1 | "hawker and food-court favourites are **energy-dense**:" | "Hawker and food-court favourites are energy-dense (high in kcal for their weight)." | Gloss: one-line standard definition of a term used but never defined in reading order (decision 2); left unbolded because no owner is assigned (see backlog) |

## Deferred content concerns (source-checking; not changed)

1. sec-defended, adaptive-thermogenesis paragraph: "That defence is the single biggest reason 'just eat less' so
   often fails [@hall2022biggestloser]". The Biggest Loser follow-up literature reports persistent metabolic
   adaptation that was not associated with greater regain (and attributes regain mainly to rising intake), so the
   key may not support "single biggest reason", nor the plan's attribution of it to adaptive thermogenesis
   specifically (plan Uncertainty 3). Quiz q6 and case q-advice feedback lean on the same idea.
2. sec-defended: "it defends against loss far harder than against gain" has no citation of its own; check against
   the cited sources or the *Appetite & Weight Regulation* chapter's sources.
3. sec-measuring: "Because of that blind spot [BMI cannot tell muscle from fat], Asian cut-offs for overweight are
   set lower than the international ones" (wording kept from "for this reason"). The usual rationale is higher body
   fat and cardiometabolic risk at a given BMI in Asian populations; the causal link as written, and the uncited
   cut-off claim, need checking against the WHO expert consultation.
4. sec-expenditure: TEF "about 10% of TEE" and "Protein costs the most to process" carry no citation.
5. sec-measuring: RQ values (1.0 / 0.7 / 0.85) carry no citation here (*Integrative Metabolism* cites
   `rqValuesStd` for the same values).
6. sec-defended: leptin "in rough proportion to the amount of fat carried" is uncited (the paragraph's only key
   supports the leptin-injection sentence).
7. sec-singapore: "most residents [eat out] most days" and "Portions have grown" are uncited.
8. Case q-advice / counselling: "~300–500 kcal/day deficit" and "~0.25–0.5 kg/week" are uncited and not taught in
   the chapter text (the case tests a number the chapter never states); check source and consider whether the
   chapter should state it.
9. Quiz q6 correct feedback and case q-advice feedback assert that hunger rises after weight loss; the chapter
   implies it only via leptin as appetite regulator (stated directly in *Appetite & Weight Regulation*).

## Deferred backlog

- 🔬🍜🍳 house blocks: none in this Part I chapter (§11b expects them per topic); decision 4 defers adding them.
- §11f teaching figure: none beyond the island and case persona; candidate a static schematic of adaptive
  thermogenesis (expected vs actual expenditure after weight loss) or a hawker-plate energy visual. Deferred.
- Glossary: 21 rows below to add to book/glossary.qmd (not edited here).
- "energy-dense" / "energy density" has no owner in term-ownership.md. It is used undefined in *Why Nutrition
  Matters*, glossed plainly here, and treated as "taught earlier" by the *Integrative Metabolism* and *Healthy
  Ageing* plans (one says *Macronutrients*). Orchestrator to assign an owner and glossary row (proposed: "Energy-
  dense | High in kcal for its weight").
- components/src/EnergyBudget.svelte (not data, not mine): hard-coded em dashes and "you" in the legend
  ("■ TEF — digesting the food", "■ Activity — the one you can change"), the note template "PAL {pal} —
  {level.note}", the FALLBACK note "On your feet…", and the header comment's chapter numbers ("Chapter 2", "Ch.8").
- Island preset label "Worked example (52 y woman)" now points at an example box rather than a "Worked example"
  callout; harmless, left as is.
- Later chapters re-bold terms this chapter owns (leptin, adaptive thermogenesis, RQ, BMI, waist circumference):
  *Integrative Metabolism* (RQ, and "The Energy Balance chapter *defined* RQ" is a chapter-as-actor), *Appetite &
  Weight Regulation* (leptin), *Assessing Diet & Talking to Patients* (BMI, waist). Their retrofits should unbold.
- *Appetite & Weight Regulation* has a sec-defended heading "Why the body defends its weight", close to this
  chapter's "How the body defends its weight"; deliberate (this chapter introduces, that one develops), but the
  pair could be differentiated in a later pass.
- Render verification (see Gate section).

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Adaptive thermogenesis | The extra fall in energy expenditure after weight loss, beyond what the smaller body requires; it makes lost weight easy to regain | Energy Balance |
| Basal metabolic rate (BMR) | The energy needed to keep the body running at complete rest; the largest component of total energy expenditure (typically 60–70%), driven mainly by fat-free mass | Energy Balance |
| Bioelectrical impedance (BIA) | An estimate of fat versus lean mass from a tiny electrical current, as in "body-fat" bathroom scales; easily thrown off by hydration | Energy Balance |
| Body composition | What body weight is made of, in particular how much is muscle and how much is fat | Energy Balance |
| Body mass index (BMI) | Weight divided by height squared; a cheap population screening tool that cannot tell muscle from fat | Energy Balance |
| Calorimetry | Measurement of energy expenditure, directly from the heat the body produces or indirectly from the oxygen consumed and carbon dioxide produced | Energy Balance |
| Central (visceral) fat | Fat stored around the abdomen; it carries more metabolic risk than fat on the hips and thighs | Energy Balance |
| Doubly labelled water | A harmless isotope tracer, followed over one to two weeks, that measures total energy expenditure in free-living people; the gold standard | Energy Balance |
| DXA | Dual-energy X-ray absorptiometry: a low-dose X-ray scan that measures fat and lean mass; the accurate clinical and research reference for body composition | Energy Balance |
| Energy balance | The relationship between the energy taken in as food and drink and the energy the body spends | Energy Balance |
| Exercise activity | Deliberate exercise, such as a run, a gym session or a swim | Energy Balance |
| Fat-free (lean) mass | Body mass other than fat; its muscle and organs are metabolically active and mainly determine basal metabolic rate | Energy Balance |
| Leptin | A hormone released by body fat in rough proportion to the amount stored; a long-term fuel gauge the brain reads to regulate appetite and defend body weight | Energy Balance |
| Mifflin–St Jeor equation | An equation that estimates basal metabolic rate from weight, height, age and sex | Energy Balance |
| Non-exercise activity thermogenesis (NEAT) | The energy spent on all movement other than deliberate exercise, such as walking, fidgeting, taking the stairs and standing; it varies enormously between people | Energy Balance |
| Physical activity (PA) | The most variable component of total energy expenditure, made up of exercise activity and NEAT | Energy Balance |
| Physical-activity level (PAL) | A factor that multiplies basal metabolic rate to estimate total energy expenditure, from about 1.4 (sedentary) to 2.0 (very active) | Energy Balance |
| Respiratory quotient (RQ) | The ratio of carbon dioxide produced to oxygen consumed: about 1.0 when burning carbohydrate, about 0.7 when burning fat, around 0.85 on a mixed diet | Energy Balance |
| Thermic effect of food (TEF) | The energy cost of digesting, absorbing and processing a meal, about 10% of total energy expenditure; highest for protein | Energy Balance |
| Total energy expenditure (TEE) | The energy the body spends: basal metabolic rate plus the thermic effect of food plus physical activity | Energy Balance |
| Waist circumference | A measure of central (visceral) fat that adds the metabolic risk information BMI misses | Energy Balance |

## Owner terms from term-ownership.md that do not occur in this chapter

None: all 21 terms assigned to energy-balance occur and are defined (bold in prose, or unbolded in the definition
list / table for exercise activity, NEAT, BMI, waist circumference, BIA and DXA).

Terms owned elsewhere that occur here, kept unbolded: My Healthy Plate, Nutri-Grade (*Why Nutrition Matters*,
with a linked reminder); food environment (*What a Healthy Diet Looks Like*); lean mass is used as the short form
of this chapter's "fat-free (lean) mass", distinct from "lean body mass" (*Assessing Diet & Talking to Patients*).

## Fix round 1 (verifier fixes)

All 21 verifier issues addressed; where two issues gave different wordings for the same sentence, one wording
was chosen (noted below). Files touched: book/chapters/energy-balance.qmd, book/quizzes/energy-balance.quiz.yml,
book/cases/bmr-estimation.case.yml (energy-budget.yml unchanged this round).

### Content fixes (decision 1; each a reversal of an unlogged round-0 change or a consistency fix)

| File | Location | Before (round 0) | After | Category |
|---|---|---|---|---|
| book/quizzes/energy-balance.quiz.yml | q7 correct feedback, last sentence | "Asian cut-offs for overweight are set lower because of the same blind spot." | "Asian cut-offs for overweight are set lower." | Revert: round 0 added an unlogged causal claim that deferred concern 3 already flags for source-checking (HEAD gave no cause) |
| book/quizzes/energy-balance.quiz.yml | q6 distractor 3 and its feedback | "The Mifflin–St Jeor equation is inaccurate at lower weights" / "Estimation error is not the main problem: …" | "The Mifflin–St Jeor equation is simply inaccurate at lower weights" / "Estimation error is not the point: …" | Revert: dropping "simply" turned the misconception into a flat claim close to what the sec-defended Check yourself teaches, and "not the main problem" conceded it (HEAD wording restored; em dash → colon kept) |
| book/chapters/energy-balance.qmd | sec-close | "body fat releases leptin in proportion to its size" | "body fat releases leptin in rough proportion to its size" | Internal contradiction: matches the chapter body ("in rough proportion") and the *Appetite & Weight Regulation* chapter's disproportionate fall after weight loss |
| book/chapters/energy-balance.qmd | sec-defended, Check yourself answer | "an estimate based on her new weight overstates what she now spends and leaves her in surplus" | "an estimate based on her new weight is likely to overstate what she now spends and can leave her in surplus" | Strength of claim matched to the chapter ("easy to regain"); no new fact |
| book/chapters/energy-balance.qmd | sec-defended, leptin paragraph | "Giving leptin does not, however, melt away common obesity [@heymsfield1999recombinant]." | "Giving leptin does not, however, reverse common obesity [@heymsfield1999recombinant] (see the [*Appetite & Weight Regulation*](appetite-weight-regulation.qmd#sec-leptin) chapter)." | Cross-reference restored (HEAD had "a twist that chapter takes up"); target checked: #sec-leptin holds the callout "Why doesn't leptin treat common obesity?". Citation stays on the same claim; colloquial "melt away" → "reverse" |

### Prose, hedge and style fixes

| File | Location | Before | After |
|---|---|---|---|
| energy-balance.qmd | sec-expenditure, BMR paragraph | "driven mainly by **fat-free (lean) mass**, because muscle and organs are metabolically busy…" | "driven mainly by **fat-free (lean) mass**, the body mass other than fat, because its muscle and organs are metabolically busy…" (bold term + plain definition, matching the glossary row) |
| energy-balance.qmd | sec-expenditure, NEAT definition | ": All other movement: walking to the hawker centre, fidgeting, taking the stairs, standing." | ": The energy spent on all other movement, such as walking to the hawker centre, fidgeting, taking the stairs and standing." (same definition as the glossary row; continuation unchanged) |
| energy-balance.qmd | sec-bmr, 2nd Check yourself title | "the Mifflin–St Jeor equation puts a sedentary woman's needs at about 1,740 kcal/day" | "the Mifflin–St Jeor equation and a PAL of 1.4 put a sedentary woman's needs at about 1,740 kcal/day" (the equation gives BMR; 1,740 is BMR × PAL) |
| energy-balance.qmd | sec-measuring, table lead-in | "The everyday tools for estimating body composition are rough. Four are compared below, from cheap screening to the reference standard:" | "Four tools for estimating body composition are compared below, from cheap, rough screening to the accurate reference standard:" (issue 16 wording chosen over issue 11's; it no longer counts DXA among the rough tools) |
| energy-balance.qmd | sec-measuring, table waist row | "Central fat, around the abdomen" | "Central (visceral) fat, stored around the abdomen" (one term, one name; glossed at first appearance) |
| energy-balance.qmd | sec-measuring, BMI paragraph | "Waist circumference fills part of the gap." | "Waist circumference adds what BMI misses." (HEAD strength restored; matches the table row) |
| energy-balance.qmd | sec-measuring, doubly labelled water | "the gold standard behind the numbers above" | "the gold standard behind the expenditure shares given earlier" (vague referent after reordering) |
| energy-balance.qmd | sec-defended, Check yourself answer | "Her smaller fat stores also release less leptin, the long-term fuel gauge the brain reads to defend body weight." | "Her smaller fat stores also release less leptin, the brain's long-term fuel gauge, so the brain registers a smaller store and acts to restore it." (consequence for regain made explicit; the verifier's wording tightened to avoid "reads … reads" and keep the sentence at 25 words; the answer stays at 3 sentences) |
| energy-balance.qmd | sec-singapore, paragraph 1 | "and the drink alone adds a couple of hundred easily missed kcal" | "and the drink alone can add a couple of hundred easily missed kcal" (back under the sentence's "can", as with HEAD's participle) |
| energy-balance.qmd | sec-singapore, levers lead-in | "Three practical levers turn the balance back without calorie counting:" | "Three practical levers help close that gap without calorie counting:" (issue 17 wording chosen over issue 10's; repeats the key noun "gap" and restores HEAD's link between the survey and the levers) |
| bmr-estimation.case.yml | reveal node, formula line | "**BMR = 10·W + 6.25·H − 5·A − 161**" | "BMR = 10·W + 6.25·H − 5·A − 161" (last emphasis bold removed; the formula already sits on its own line) |
| bmr-estimation.case.yml | q-tee option a feedback | "1.4 is the factor for a sedentary adult: …" | "Roughly 1.4 is the factor for a sedentary adult: …" (approximation restored; "Roughly", the chapter's own word, used in place of the verifier's "About" because the preceding feedback string, q-bmr option c, already opens with "About") |
| bmr-estimation.case.yml | q-advice option a feedback | "… through swaps she can keep up. Drastic cuts …" | "… through swaps she can keep up, and is far easier to sustain. Drastic cuts …" (HEAD's comparative point restored) |
| bmr-estimation.case.yml | counselling node | "swapping two sweetened kopi for *kopi-o kosong*" | "swapping two sweetened *kopi* for *kopi-o kosong*" (consistent italics for local food words) |

Source lines touched by the edits were re-wrapped to the file's ~100-character width (no wording change).

### Corrections to the round-0 summary above

- Quiz: "q6 option 3 trimmed ('simply' dropped)" is reversed; "simply" is back (distractors are not trimmed).
- Case: "only the formula line keeps bold" no longer holds; the case now has no bold.
- Quiz q7 feedback no longer gives a reason for the lower Asian cut-offs. The chapter prose in sec-measuring still
  says "Because of that blind spot, Asian cut-offs …"; that sentence stays under deferred concern 3.

### Deferred content concerns added this round

10. sec-overview callout ("about 100 kcal, roughly one sweetened drink") vs sec-singapore ("the drink alone can add
    a couple of hundred easily missed kcal"): kcal per sweetened drink inconsistent; check against
    hill2003energygap and a local drink-energy source. (Round 0 dropped "or a couple of biscuits" from the
    callout under the one-example rule, which left the drink as the only 100 kcal anchor and sharpened the clash;
    the numbers were not changed here.)

### Gate and checks after round 1

| Check | HEAD | Working copy | Note |
|---|---|---|---|
| Citation multiset | 10 keys, 11 uses (westerterp2017dlw ×2) | identical (diff empty) | heymsfield1999recombinant still on the leptin-injection claim |
| data-island | 3 | 3 | |
| Callouts | 3 | 8 | unchanged from round 0 (+1 Learning objectives, +5 Check yourself, −1 Worked example → `.example`) |
| Tables | 0 | 1 | body-composition tools table |
| Figures | 0 | 0 | |
| Ids | all HEAD {#sec-…} ids | all present | |

Copy audit (`--you`, four files): 0 flags. YAML: energy-budget.yml, energy-balance.quiz.yml and
bmr-estimation.case.yml all load with js-yaml. `validate-cases.mjs`: OK bmr-estimation.case.yml (exit 0).
Feedback opening words rechecked in quiz q6–q7 and case q-bmr → q-advice: no consecutive repeats.

## Fix round 2 (verifier fixes)

All 18 issues addressed (1 major, 17 minor). Four requested wordings were adapted (issues 3, 15, 16, 18) and two
pairs that rewrote the same sentence were merged (4 + 15, 8 + 13); each adaptation is explained below. Files
touched: book/chapters/energy-balance.qmd, book/quizzes/energy-balance.quiz.yml, book/cases/bmr-estimation.case.yml
(energy-budget.yml unchanged this round).

### Content fixes (decision 1; HEAD hedges or caveats restored, or internal consistency)

| File | Location | Before (round 1) | After | Category |
|---|---|---|---|---|
| energy-balance.qmd | sec-measuring, table lead-in | "Four tools for estimating body composition are compared below, from cheap, rough screening to the accurate reference standard:" | "Four tools for screening or measuring body composition are compared below, from cheap, rough screening to the accurate reference standard:" | Internal contradiction (issue 1, major): the lead-in counted BMI as a body-composition estimate, against quiz q7 and the chapter's own "a flag, not a verdict" |
| energy-balance.qmd | sec-measuring, table, BMI row | "Cheap population screening; cannot tell muscle from fat" | "Cheap population screening, not a body-fat measurement; cannot tell muscle from fat" | Same issue: HEAD's caveat ("not a body-fat measurement") restored |
| energy-balance.qmd | opener | "when intake falls, the body spends less to close it." | "when intake falls for long enough, the body spends less, narrowing it." | Hedge restored (issue 2): the body text says "for long enough", and "to close it" read as full compensation, against the close's "a sustained deficit does lower weight" |
| energy-balance.qmd | sec-defended, opening sentence | "Energy balance is defended, not free: the body resists changes in its weight in two ways, by lowering expenditure …" | "Energy balance is defended, not free. The body resists changes in its weight in two ways introduced here: by lowering expenditure …" | Exhaustive reading removed (issue 3): quiz q6, case q-advice and the *Appetite & Weight Regulation* chapter also name rising hunger |
| energy-balance.qmd | sec-defended, leptin paragraph | "Giving leptin does not, however, reverse common obesity [@heymsfield1999recombinant] (see the [*Appetite & Weight Regulation*](appetite-weight-regulation.qmd#sec-leptin) chapter)." | "If leptin signals a large store, extra leptin might be expected to cut appetite and weight. Simply giving it does not, however, reverse common obesity [@heymsfield1999recombinant]; the reason is taken up under leptin in the [*Appetite & Weight Regulation*](appetite-weight-regulation.qmd#sec-leptin) chapter." | Issues 8 + 13: "Simply" restored (HEAD nuance; that chapter reports "only modest, highly variable weight loss"); the expectation that "however" contrasts with is now stated (it matches that chapter's "it looked like a possible treatment"); the two back-to-back parentheticals are gone. The key stays on the leptin-injection claim |
| energy-balance.qmd | sec-bmr, 2nd Check yourself, title | "the Mifflin–St Jeor equation and a PAL of 1.4 put a sedentary woman's needs at about 1,740 kcal/day. Why is that a starting point and not a measurement of her needs?" (33 words) | "why is the estimate of 1,740 kcal/day for the sedentary woman in the example only a starting point?" (19 words with "Check yourself:") | Issues 4 + 15: the figure is tied to the example woman, not sedentary women in general; title shortened and its "X, not Y" removed (wording adapted, see below) |
| energy-balance.qmd | sec-bmr, 2nd Check yourself, answer | "The equation is a population estimate: … enters only as a rough PAL band. The figure is a sensible place to start, not a precise value for her." | "The Mifflin–St Jeor equation is a population estimate: … enters only as a rough PAL band." | Issue 15: repeated antithesis deleted (the verifier's "or simply delete" option); equation named because the new title no longer names it |
| energy-balance.qmd | sec-singapore, levers lead-in | "Three practical levers help close that gap without calorie counting:" | "Three practical levers aim to close that gap without calorie counting:" | Strength of claim back to HEAD's intent ("trying to close") (issue 5) |
| bmr-estimation.case.yml | q-advice, option c, text | "No change to intake: tell her to exercise it off" | "No change to intake: just tell her to exercise it off" | Revert of an unlogged round-0 distractor trim (issue 6; distractors are not trimmed) |
| energy-balance.quiz.yml | q3, option 1 feedback | "Lean mass (muscle and organs) is metabolically active and is the main driver of BMR." | "Lean mass, whose muscle and organs are metabolically active, is the main driver of BMR." | Consistency with the chapter's definition (lean mass is all non-fat mass; muscle and organs are its active part) (issue 7) |
| energy-balance.quiz.yml | q7, stem | "Why is BMI a screening flag and not a measure of body fat?" | "Why is BMI treated as a screening flag and not a measure of body fat?" | Revert of an unlogged round-0 change: the stem is about clinical use again (issue 9) |
| energy-balance.quiz.yml | q7, correct feedback, last sentence | "Asian cut-offs for overweight are set lower." | "(Asian cut-offs for overweight are set lower.)" | HEAD's aside form restored, so the fact no longer reads as part of the answer (issue 11) |

### Prose, cross-reference and style fixes

| File | Location | Before | After |
|---|---|---|---|
| energy-balance.qmd | sec-close | "(see the *Appetite & Weight Regulation* chapter)" | "(see the [*Appetite & Weight Regulation*](appetite-weight-regulation.qmd#sec-defended) chapter)" (issue 10; the chapter's only unlinked cross-reference) |
| energy-balance.qmd | sec-measuring, paragraph after the table | "Waist circumference adds what BMI misses. It captures **central (visceral) fat**, the fat stored around the abdomen, which carries more metabolic risk than fat on the hips and thighs [@whoWaist2011]." | "Waist circumference captures **central (visceral) fat**, the fat stored around the abdomen. That fat carries more metabolic risk than fat on the hips and thighs, so the waist measurement adds what BMI misses [@whoWaist2011]." (issue 12; mechanism then consequence, HEAD's order; the key ends the same claim, as at HEAD) |
| energy-balance.qmd | sec-bmr, PAL bands | "roughly 1.4 for a sedentary person, 1.6 lightly active, 1.75 moderately active and 2.0 very active." | "roughly 1.4 for a sedentary person, 1.6 for a lightly active one, 1.75 for a moderately active one and 2.0 for a very active one." (issue 14; parallel list) |
| energy-balance.qmd | sec-measuring, doubly labelled water | "Total expenditure in free-living people is measured with …" | "Total expenditure in free-living people (those going about their normal lives) is measured with …" (issue 18; gloss under decision 2) |
| energy-balance.quiz.yml | q3, option 3 feedback | "Reduced thyroid hormone lowers BMR." | "Reduced thyroid hormone lowers BMR instead of increasing it." (issue 16; wording adapted, see below) |
| bmr-estimation.case.yml | q-inputs, option b | text "Weight only"; feedback "Weight alone is not enough: height, age and sex all enter the equation." | text "Weight and activity level only"; feedback "Activity level comes later, as the PAL factor; the BMR equation itself needs weight, height, age and sex." (issue 17; options now 27/30/34 characters) |

Source lines touched by the edits were re-wrapped to the file's ~100-character width.

### Adapted wordings (why the exact request was not used)

- Issue 3: the requested "…in two ways introduced here: by lowering…" would put a second colon into a sentence
  that already had one ("Energy balance is defended, not free: …"). The sentence is split at the first colon;
  the requested words are otherwise used as given.
- Issues 4 + 15 (same Check yourself): issue 15's title ("why is a Mifflin–St Jeor estimate of 1,740 kcal/day for
  a sedentary woman only a starting point for her needs?") (a) brings back "a sedentary woman", the
  generalisation issue 4 removes, and (b) calls 1,740 kcal/day a Mifflin–St Jeor estimate. The chapter defines the
  equation as estimating BMR (1,240 kcal/day); 1,740 is BMR × PAL, which is the round-1 fix, and case q-bmr marks
  "~1,700 kcal/day" wrong as a BMR for exactly that confusion. The title used keeps issue 15's shape and length and
  issue 4's "the sedentary woman in the example". Of issue 15's two answer options, deletion was chosen: "to be
  adjusted as her weight responds" would add a practice claim the chapter does not make (decision 1). The answer
  keeps two sentences and no "X, not Y".
- Issues 8 + 13: issue 13's sentence with issue 8's "Simply" ("Simply giving it does not, however, …"). The
  passive "is taken up" is kept: its subject is the topic ("the reason"), which §11d allows, and the chapter is
  not the actor.
- Issue 16: the requested "Reduced thyroid hormone lowers BMR, so it moves resting expenditure down, not up."
  renames BMR as "resting expenditure" within one sentence (§11g: never cycle synonyms for a technical term),
  which also makes the "so" clause circular. The wording used keeps the requested point (the option moves BMR the
  opposite way to the stem's "increase") and adds no fact. A mechanism (what thyroid hormone does) would be a
  claim the chapter does not make, so none was added.
- Issue 18: "(those going about their normal lives)" in place of "(people going about their normal lives)",
  to avoid "free-living people (people …".

### Corrections to the earlier summaries above

- Round 1's table lead-in entry is superseded: the lead-in now reads "screening or measuring body composition".
- Round 1's levers lead-in entry ("help close that gap") is superseded: now "aim to close that gap".
- Round 0's "q7 stem drops 'rather than'" now means "rather than" → "and not", with "treated as" kept.
- Round 0's "Weight only" distractor in case q-inputs is replaced (issue 17).

### Deferred content concerns

None added. Concern 3 still stands (chapter prose "Because of that blind spot, Asian cut-offs … are set lower";
quiz q7 now gives the cut-off as an aside, with no cause). Concern 9 (hunger rising after weight loss) is now
stated directly, with a citation, in the working copy of the *Appetite & Weight Regulation* chapter's
#sec-defended; issue 3's fix points to that chapter rather than adding the claim here.

### Gate and checks after round 2

| Check | HEAD | Working copy | Note |
|---|---|---|---|
| Citation multiset | 10 keys, 11 uses (westerterp2017dlw ×2) | identical (diff empty) | whoWaist2011 still ends the waist-risk sentence; heymsfield1999recombinant still on the leptin-injection claim |
| data-island | 3 | 3 | |
| Callouts | 3 | 8 | unchanged from round 1 |
| Tables | 0 | 1 | body-composition tools table |
| Figures | 0 | 0 | |
| Ids | 9 HEAD {#sec-…} ids | all present | |

Copy audit (`--you`, four files): 0 flags; em dashes 0. YAML: energy-budget.yml, energy-balance.quiz.yml and
bmr-estimation.case.yml all load with js-yaml. `validate-cases.mjs`: all cases OK, including bmr-estimation.case.yml
(exit 0). Feedback opening words rechecked across the whole quiz and case: no consecutive repeats. Cross-reference
targets checked in the working copy of appetite-weight-regulation.qmd: #sec-leptin holds the callout "Why doesn't
leptin treat common obesity?" (the reason the new sentence points to), and #sec-defended lists adaptive
thermogenesis among the shifts that push toward regain (the "out" column the close refers to). Render not run
(forbidden in this run).
