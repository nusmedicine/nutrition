# Retrofit log: Type 2 Diabetes

Files changed:

- book/chapters/type-2-diabetes.qmd
- book/diagrams/carb-safety-check.yml
- book/quizzes/type-2-diabetes.quiz.yml
- book/cases/early-t2d-remission.case.yml

## Gate (HEAD vs working copy)

- Citation multiset: IDENTICAL (48 keys, 54 instances; `diff` of `uniq -c` output empty). Keys moved only with
  their claims: `hu2012whiterice` / `seah2019scriphealthrice` split onto the pooled-data and SCHS sentences;
  `mohNPHS2024` (2nd instance) onto the ethnic-gradient data sentence; `dnsg2023easd` onto the GI-table
  sentence; `zainudin2017knowledge` stays on the belief-and-harm sentence; `hassanein2022ramadan` on the
  guidance sentence.
- Islands 3 -> 3. Figures 2 -> 2 (`#fig-t2d-continuum` moved from the mechanism movement to the at-a-glance
  as the overview figure; `#fig-brown-rice` in place). Tables 1 -> 1.
- Callouts 3 -> 13: +1 Learning objectives, +8 Check yourself (2 per movement x 4), +1 "Progress is saved
  locally; replay to explore the other paths." house note (present in 14 chapters at HEAD; pilot form).
- HEAD had no {#sec-} ids; both {#fig-} ids kept. New ids: sec-overview, sec-t2d-mechanism, sec-t2d-levers,
  sec-t2d-carbohydrate, sec-t2d-patterns, sec-t2d-remission-prevention, sec-t2d-remission,
  sec-t2d-prevention, sec-t2d-safety, sec-t2d-hypoglycaemia, sec-t2d-ramadan, sec-singapore, sec-close,
  sec-quiz, sec-case. All 10 chapter-map links resolve; no t2d- id used elsewhere; no inbound anchors.
- Copy audit (`--you`, 4 files): 103 flags -> 0. Chapter: 0 em dashes, bold 34.8 -> 3.6 per 1,000 words,
  "rather than" 8 -> 1, "you" 8 -> 7 (all clinician-in-practice, the do-no-harm callout title, or the
  quoted "you should lose weight").
- YAML: all three files load with js-yaml. validate-cases: early-t2d-remission OK.
- Not run (forbidden for this agent): render / TOC extraction. Expected TOC: at a glance, 4 movements
  (mechanism with no ###; levers, remission & prevention, safety with two ### each), Singapore, close,
  quiz, case.

## Summary of changes

Chapter

- Opener: one italic 2-sentence blockquote; Learning objectives (6); chapter map (4 branches).
- At a glance: "This chapter follows..." removed; prediabetes and remission bold-defined; figure moved here;
  hand-off paragraph; the two inline-header bullets became two prose paragraphs ("you" kept, clinician);
  "That check runs through the whole chapter" deleted; War on Diabetes / one in three unbolded.
- Mechanism: negative-parallel opener and roadmap meta rewritten; new `.flow` (insulin resistance ->
  beta-cells compensate -> insulin secretion declines -> blood glucose rises), placed before the paragraph
  that fills it in; bold run-in lead-ins dropped; beta-cells, twin-cycle model, personal fat threshold
  bold-defined; ectopic fat glossed plainly with chapter pointer; promotional colour ("A powerful way",
  "The hopeful corollary") cut; Asian/threshold sentence split into its own paragraph. 2 Check yourself.
- Dietary levers: movement intro deleted; ### renamed "Carbohydrate: quality and consistency" and
  "Choosing a dietary pattern"; significance padding cut; HbA1c bold-defined (owner reassignment);
  glycaemic-index pointer to Macronutrients; fibre split into its own paragraph; all emphasis bold removed; "This is where" scaffold
  removed; rice callout retitled as a neutral question and restructured belief -> evidence; the pattern
  paragraph became an intro sentence + 3-item list, with both cardiovascular signposts (DASH, PREDIMED)
  gathered in one sentence after it; plate method bold-defined; Eating out callout de-bolded and its
  signpost parenthetical moved out. 2 Check yourself.
- Remission & prevention: movement intro deleted; significance padding cut; the inline-header qualifier list
  kept as a list with plain first sentences; "fat threshold" -> "personal fat threshold" (no synonym
  cycling); DiRECT expanded (gloss); total diet replacement bold-defined; "crucially" cut; bare imperative
  recast as the clinician's task; "how you deliver it" -> "the way it is delivered"; Pre-DICTED glossed as
  a trial; "So" opener dropped; behaviour-change signpost put in parentheses. 2 Check yourself.
- Safety: movement intro and "do-no-harm heart of the chapter" meta deleted; table de-bolded, header and row
  labels clarified; older-people sentence moved up beside the drug risk; carbohydrate consistency and
  15-15 rule bold-defined; "a conscious hypo" -> "hypoglycaemia in a conscious patient"; island instruction
  trimmed to one sentence; warning callout "genuinely" cut (one bold warning kept); Ramadan: "not a
  footnote" antithesis cut, Integrative Metabolism physiology pointer, the 2-item bullet list became two
  paragraphs (belief stated first, "wrongly" removed), pre-Ramadan review bold-defined, FAST algorithm
  named with pointer, vague "it" replaced; scope disambiguation "Most people with diabetes fast" ->
  "Most Muslim patients with diabetes fast" (the sentence follows "For Singapore's Malay-Muslim community";
  matches the EPIDIAR population; claim and citation unchanged). 2 Check yourself.
- Singapore picture: meta "the framing runs through this chapter" cut; all emphasis bold removed; long
  sentences split; ACE expanded at first use; "GLP-1 agonists" -> "GLP-1 receptor agonists"; "which is
  exactly how to use it" cut; medication sentence in its own paragraph.
- Close: answers the question only; summary/next-chapter sentences removed.
- Practise intro trimmed to two sentences; progress note added.

Island (carb-safety-check.yml): `intro` and `caption` deleted (decision 9: they repeated the chapter paragraph
and the static drug-class table beside the island; the component renders both only when present and uses
the parsed YAML without merging FALLBACK). Every em dash removed from notes and verdicts; "a hypo" ->
"hypoglycaemia"; "FIRST" capitals removed; GLP-1 note made parallel with DPP-4. Comment block: two em
dashes replaced, one explanatory comment line added.

Quiz: all stem bold removed; every "Correct." opener removed (feedback starts with the explanation); all em
dashes removed; "hypo" -> "hypoglycaemia"; "approach" -> "rule" (chapter term); DPP-4/SGLT2/GLP-1 written as
full class names; "This repeats the misconception" cut; "correct the misconception" -> "address the
belief"; no two consecutive feedbacks share an opening word (checked programmatically).

Case: all em dashes removed; "Right." / "Exactly the right words." / "Too much, too certain." / "That's out
of date and dismissive." / "That's the wrong instinct here." / "This is the whole job at this altitude." /
"This is the do-no-harm answer." / "This is unsafe, and it's the trap in this case." / "This is the
misconception to avoid." openers removed; "crucially", "crucial", "genuinely", "genuine", "this chapter",
"Let's" removed; bold cut to at most one warning per node; correct options trimmed to distractor length;
reveal-eligibility given a title and trimmed; teaching prose uses "blood glucose", dialogue stays plain;
"rather than" -> "instead of". persona, tags, variables, route, objectivesMet, references unchanged.

## Content fixes (decision 1 categories)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| quiz | q2, option a feedback | "within a defined (ethnicity-adjusted) BMI range" | "within a defined BMI range" | Contradiction with own chapter (chapter: entry criteria *should be* ethnicity-adjusted, not the Western band DiRECT applied) |
| quiz | q3, option b feedback | "A normal HbA1c off drugs defines remission" | "An HbA1c below the diabetes range off drugs defines remission" | Contradiction with own chapter (cited definition: below the diabetes range) |
| case | q-remission-not-cure, option a feedback | "blood sugar back in the normal range off glucose-lowering tablets" | "blood glucose back below the diabetes range off glucose-lowering tablets" | Contradiction with own chapter (cited definition) |
| case | q-remission-not-cure, option a text | "Your sugar can come back to normal off tablets" | "Your sugar can fall below the diabetes range off tablets" | Contradiction with own chapter (same definition, plain wording kept) |
| case | q-plan, option a feedback | "My Healthy Plate (a quarter wholegrains, a quarter protein, half vegetables)" | "...half fruit and vegetables)" | Contradiction with own chapter (cited My Healthy Plate text) |
| chapter | drug-class table | header "Hypo risk"; rows "Risk" / "Low risk used alone" | "Hypoglycaemia risk"; "High" / "Low when used alone" | Label that misnamed what the row shows ("Risk" for the high-risk row); now matches the island's high/low classes |
| quiz | q8, option a feedback | "Many patients wrongly believe otherwise and come to harm" | "Many patients believe otherwise and some come to harm" | Contradiction with own chapter (cited text: "some come to harm because of that belief" [@zainudin2017knowledge]). Logged in fix round 1 |

## Deferred content concerns (need a source check; not changed)

1. Quiz q7 option c / feedback: "Condensed-milk kopi-c". Locally kopi-c is coffee with evaporated milk and
   sugar; plain kopi is the condensed-milk order. No cited text in the book defines kopi-c, so not fixed.
2. Chapter, fibre: "an optimum around 25-29 g of fibre a day" sits in a diabetes sentence citing Reynolds 2019
   and 2020. The 25-29 g figure is from Reynolds 2019 (general population); Reynolds 2020 (diabetes) suggested
   +15 g/day or ~35 g/day. Check attribution.
3. Chapter, Ramadan (and Check yourself / quiz q8 b, which repeat it): EPIDIAR's several-fold rise in severe
   hypoglycaemia was for Ramadan versus other months overall, not specifically for insulin or sulfonylurea
   users. Check wording.
4. Singapore picture: "Indian and Malay residents carry roughly twice the prevalence of Chinese residents":
   verify the Malay ratio against NPHS 2023/24 (may be nearer 1.5x).
5. DPP 58% and 31% are relative risk reductions; §11d asks for relative vs absolute with a landmark trial
   (an absolute figure needs a number and citation: author's call). Same in quiz q1.
6. Island note, table and quiz q4: SGLT2 inhibitors are "low risk", so a lower-carbohydrate change is
   "reasonable"; guidance carries a euglycaemic-ketoacidosis caution for strict low-carbohydrate/ketogenic
   diets and fasting on an SGLT2 inhibitor. Consider a caveat for strict versions.
7. (New) Chapter Singapore picture / figure: "current prevalence is around 9% of adults" with two keys
   (@mohWarOnDiabetes; @mohNPHS2024): check which source carries the 9% figure (same check as 4).
8. (Fix round 1) Chapter, fibre paragraph: "International guidelines converge on the same plate ... with
   refined grains and sugary drinks kept to a minimum [@who2023carbohydrate]" is vague attribution (several
   guidelines claimed, only WHO cited). Before naming WHO as the source, check whether the WHO carbohydrate
   guideline (2023) itself covers sugary drinks (WHO treats free sugars in a separate guideline). HEAD claim
   kept unchanged.

## Deferred backlog

- House blocks: only a 🍜 Eating out callout; no 🔬 Food science or 🍳 Healthy kitchen block (decision 4,
  deferred).
- Figure `figures/mechanisms/t2d-continuum.svg`: em dashes, the abbreviated chapter name "CVD & Hypertension",
  and "Complications hand forward to the ... chapters" (the book acting). Figure pass.
- `components/src/CarbSafetyCheck.svelte`: inserts " — " before each note and in the "Triggered by" line; its
  FALLBACK copy mirrors the old YAML (intro, caption, em dashes, "FIRST" capitals, "a hypo"). Component owner.
- Drug-class table vs carb-safety-check island show the same high/low classification: both kept (decision 9:
  the cited static table stays; repeated island text cut).
- Heading "Preventing diabetes: structure beats a single conversation" keeps a punchline-style subtitle (plan
  kept it); consider a topical subtitle in a later pass.
- Glossary rows below to be added to book/glossary.qmd by the integrator.
- HbA1c ownership moved to this chapter: the *Interprofessional Practice & Referral* chapter (bold HbA1c) and
  *Behaviour-Change Counselling* (first unglossed use, earlier in reading order) need the owner rule applied
  by their agents.
- Integrator: render out-of-tree and confirm the TOC hierarchy and the `.flow` box render.

## Glossary rows owned (term | meaning | introduced in)

| Term | Meaning | Introduced in |
|---|---|---|
| 15-15 rule | Treatment of hypoglycaemia in a conscious patient: about 15 g of fast-acting glucose, then a recheck in 15 minutes | Type 2 Diabetes |
| β-cell | An insulin-producing cell of the pancreas; in type 2 diabetes β-cells first compensate for insulin resistance, then fail | Type 2 Diabetes |
| Carbohydrate consistency | Keeping the timing and amount of carbohydrate steady from day to day; the counselling message for someone on a fixed insulin dose | Type 2 Diabetes |
| HbA1c | A blood marker of average blood glucose over about three months | Type 2 Diabetes |
| Personal fat threshold | The individual level of body fat beyond which a person develops type 2 diabetes; people of Asian descent can cross it at a lower BMI than Western cut-offs assume | Type 2 Diabetes |
| Plate method | A low-numeracy tool that sets the proportions of the plate; Singapore's version is My Healthy Plate (a quarter wholegrains, a quarter protein, half fruit and vegetables) | Type 2 Diabetes |
| Prediabetes | The phase in which blood glucose has started to rise but is not yet in the diabetes range; it is usually long and silent, and not everyone progresses | Type 2 Diabetes |
| Pre-Ramadan review | A consultation, ideally weeks before Ramadan, to risk-stratify a patient with diabetes and adjust medication for fasting | Type 2 Diabetes |
| Remission (type 2 diabetes) | Blood glucose held below the diabetes range off glucose-lowering drugs (formally, an HbA1c below the diabetes range sustained off them); it is not cure, because it can relapse, so monitoring continues | Type 2 Diabetes |
| Total diet replacement | A supervised low-calorie formula phase followed by structured food reintroduction, used in remission programmes, with medication adjusted by the programme's clinical team on day one | Type 2 Diabetes |
| Twin-cycle model | The model in which excess fat in the liver raises fasting glucose and fat in the pancreas impairs β-cell function, each cycle feeding the other | Type 2 Diabetes |

## Owner terms from term-ownership.md that do not occur in the chapter

None: all 11 terms owned by type-2-diabetes occur and are bold-defined once.

Terms owned elsewhere and used plain here (no bold): insulin resistance, ectopic fat (Obesity & Metabolic
Syndrome); hypoglycaemia (Integrative Metabolism); medical nutrition therapy (Interprofessional Practice &
Referral); glycaemic index, wholegrain, dietary fibre (Macronutrients); Mediterranean/DASH pattern, dietary
pattern, My Healthy Plate, Nutri-Grade, War on Diabetes, Healthier SG (Why Nutrition Matters); GLP-1
receptor agonists (Appetite & Weight Regulation); motivational interviewing (Behaviour-Change Counselling);
BMI (Energy Balance).

## Fix round 1

Verifier issues (2 blockers, 6 majors, 31 minors) applied, except where noted under "Not applied".

### Log corrections

- Content-fix table: the WHO row ("International guidelines converge" -> "The WHO carbohydrate guideline
  points to") removed, because the HEAD claim is restored (see below) and the attribution question is now
  deferred concern 8. The "Most Muslim patients" row moved out of the table into the Safety bullet of the
  change summary as a scope disambiguation (not a decision-1 content fix). New row added for quiz q8 a
  ("and come to harm" -> "and some come to harm", contradiction with own chapter).
- Glossary rows: "Remission (type 2 diabetes)" aligned to the chapter's bold-defining wording at first use
  (at a glance: "blood glucose held below the diabetes range off glucose-lowering drugs"), with the formal
  HbA1c definition of the remission section in parentheses. HbA1c is defined later (dietary levers), so the
  at-a-glance definition keeps plain wording. "Total diet replacement" now says "the programme's clinical
  team" to match the chapter. These two rows supersede the wording in term-ownership.md.

### Chapter (type-2-diabetes.qmd)

Restored HEAD meaning (edit-introduced changes reverted):

- Fibre paragraph: "The WHO carbohydrate guideline points to the same plate" -> HEAD claim "International
  guidelines converge on the same plate: ... with refined grains and sugary drinks kept to a minimum
  [@who2023carbohydrate]".
- Sugary drinks: "Ordering *kopi* or *teh kosong* (no sugar) or *siu dai* (less sweet)" -> "Ordering *kopi
  kosong* or *teh kosong* (no sugar), or *kopi* or *teh siu dai* (less sweet)" (HEAD "*kopi/teh* kosong ...
  siu dai"; plain *kopi* is the sweetened order).
- Eating out: "*kopi-o* or *teh-o kosong* or water" -> "*kopi-o kosong*, *teh-o kosong* or water" (HEAD
  "kopi/teh-o kosong"; *kopi-o* alone is sweetened; matches quiz q7 and the book's other chapters).
- Glycaemic index: the split sentences rejoined so `@dnsg2023easd` covers the whole claim: "...not by
  memorising glycaemic-index tables (see the *Macronutrients* chapter), which are measured for single foods
  and blunted in mixed meals [@dnsg2023easd]."
- Opener: "and reverse early disease, provided the change is safe with the patient's glucose-lowering drugs"
  -> "and put early disease into remission, provided the change is safe with the patient's glucose-lowering
  drugs and the plan is made by referral" (HEAD's remission and referral points).
- Drug-class rule: "The first step is therefore" -> "The first step, every time, is therefore" (HEAD
  "every time").
- Twin cycle: "explains why the β-cells fail" -> "offers one explanation of why the β-cells fail" (HEAD
  framed it as one model).
- Healthier SG: "whose subsidised screening is the delivery vehicle" -> "with its subsidised screening, as
  the delivery vehicle" (HEAD).
- Close: "In every case, the clinician checks the drug class before endorsing a low-carbohydrate diet or a
  fast." deleted (restated the safety movement); "The individualised plan is made by referral, to the
  dietitian and the diabetes team." appended (HEAD's recognise-and-refer line).

Structure and cohesion:

- β-cells bold-defined in the mechanism lead-in, before the `.flow` that uses the term; later use unbolded.
- Twin cycles named: "(the liver cycle)", "(the pancreas cycle)" (decision 2 gloss; Taylor's own names).
- Safety: the carbohydrate-consistency and 15-15 paragraphs moved after the warning callout (still before
  the Ramadan ###), so the order is table -> older-people sentence -> island instruction -> island ->
  warning. The older-people sentence is now its own paragraph.
- Total diet replacement: "The clinician adjusts the medication ... the clinician's task" -> "The
  programme's clinical team adjusts the medication on day one ... A total diet replacement is therefore not
  a self-directed crash diet: the referring clinician's task is to recognise the candidate and refer".
- At a glance: "It manages established diabetes through diet. It can also put early disease into
  **remission**" -> "It manages established diabetes, and it can put early disease into **remission**"
  (circular "through diet" cut; two short "It" sentences merged).
- Prevention: "Prevention works upstream of all this, and the evidence is clear that the way it is
  delivered decides whether it works." -> "Prevention works upstream of diagnosis, and how it is delivered
  decides whether it works."
- "real" cut at "Its real benefit at six months" and "a real ethnic gradient" (kept at "small but real" and
  in the close's "real but eligibility-bound").
- DiRECT: "about 36% at two years and ~13% at five" -> "about 13%".
- Check yourself (carbohydrate): "what improves glucose is carbohydrate quality and consistency" -> "what
  matters is carbohydrate quality and consistency".
- Learning objective: "drug classes that cause hypoglycaemia" -> "that can cause hypoglycaemia" (same fix as
  the quiz).
- Lines rewrapped where edits left long lines.

Further content fixes (decision 1 categories), before -> after:

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | Check yourself (metformin vs sulfonylurea) | "Metformin does not cause hypoglycaemia used alone" | "Metformin used alone carries a low hypoglycaemia risk" | Contradiction with own chapter (cited drug-class table: "Low when used alone") |
| chapter | Ramadan, FAST sentence | "shows that fasting with diabetes can be done safely [@lum2020fast]" | "shows that fasting with diabetes can be done safely when medication is adjusted by the algorithm [@lum2020fast]" | Restores the condition HEAD's "it" carried; matches the *Integrative Metabolism* chapter's cited text ("guides pre-Ramadan medication adjustment [@lum2020fast]") |
| quiz | q2 d, q4 c, q8 c feedback | "a drug that causes hypoglycaemia"; "The classes that cause hypoglycaemia"; "medications that cause hypoglycaemia" | "can cause" in each | Contradiction with own chapter ("can cause dangerous hypoglycaemia"; HEAD said "hypo-risk") |
| case | q-remission-not-cure, option a text | "...off tablets, but it can fade, so we keep monitoring." | "It's remission, not cure. Off tablets your sugar can fall below the diabetes range, but it can fade if weight returns, so we keep monitoring." | Contradiction with the case's own objective 2 and feedback (remission depends on keeping the weight off) |

### Island (carb-safety-check.yml)

- Insulin note: "so cutting the carbohydrate lets the same dose drive glucose dangerously low" -> "so after
  the carbohydrate is cut the same dose can drive glucose dangerously low" (HEAD modal "can").

### Quiz (type-2-diabetes.quiz.yml)

- q1 b feedback: "the DPP result" -> "the Diabetes Prevention Program result" (avoids confusion with
  DPP-4 inhibitors).
- q3 a feedback: "~13% at five" -> "about 13% at five" (matches "about 36%").
- Length cues trimmed (distractors only, meaning kept): q1 b "A one-off conversation advising weight loss
  and more exercise"; q1 c "Metformin started early, since a drug beats any lifestyle change"; q1 d "Placebo
  with reassurance, since most prediabetes reverts anyway"; q4 b "Metformin, which causes low glucose
  whenever carbohydrate is cut"; q4 c "An SGLT2 inhibitor, with an insulin-like hypoglycaemia risk"; q4 d
  "A GLP-1 receptor agonist, as risky here as a sulfonylurea". Lengths now q1 59/61/64/63, q4 55/64/59/57.
- q8 a feedback wording kept (now logged in the content-fix table).

### Case (early-t2d-remission.case.yml)

- q-plan a feedback: "kopi-o or teh-o kosong or water" -> "kopi-o kosong, teh-o kosong or water" (restores
  HEAD "kopi/teh-o kosong"; not previously logged).
- q-eligibility a text: "weight-loss programme" -> "weight-management programme" (the case's term; no
  synonym cycling).
- intro body: the "Work through the visit..." paragraph deleted (repeated the chapter's Practise sentence).
- end-good: "you did **not** endorse" -> "you did not endorse" (emphasis bold).
- "real" cut from 6 to 2 (kept "It is real, but it can fade" and "no real plan"): "misses an opportunity";
  "The next step is a plan for him."; "Then you gave him a concrete plan:"; "hand him a plan with a
  dietitian and interim quality swaps."
- brief/persona/variables/route/objectivesMet/references unchanged.

### Not applied (or applied in part)

- Close, optional tie-in "For most people, whose disease is not early enough for remission, ...": not
  applied. It adds an uncited claim, and "most people" here includes people with prediabetes, who have no
  disease to put into remission.
- Remission definition: the verifier offered two options; the glossary row was aligned to the at-a-glance
  wording (option 1) instead of moving the bold to the remission section, because the at-a-glance is the
  term's first use and HbA1c is not yet defined there.
- Case q-remission-not-cure a: the correct option is now 143 characters against 105 for the distractor
  (HEAD's was about 170). Adding the weight element costs length; the opener was shortened to "It's
  remission, not cure." to limit the gap. Distractor not padded.

### Gate after fix round 1

- Citation multiset: IDENTICAL to HEAD (48 keys; `diff` of `uniq -c` output empty).
- Islands 3 -> 3; figures 2 -> 2; tables 1 -> 1; callouts 3 -> 13 (unchanged from round 0: +1 Learning
  objectives, +8 Check yourself, +1 progress note).
- Both HEAD {#fig-} ids present; all 10 chapter-map links resolve.
- Copy audit (`--you`, 4 files): 0 flags. "you" 7 in the chapter (all clinician-in-practice, the do-no-harm
  callout title, or the quoted "you should lose weight").
- YAML: all three files load with js-yaml. validate-cases: early-t2d-remission OK.
- Feedback openers: no two consecutive feedback strings share an opening word (42 checked, quiz + case).
