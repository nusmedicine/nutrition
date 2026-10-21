# Retrofit log: Brain Health & Dementia

Files changed (all five owned files):

- book/chapters/brain-health-dementia.qmd
- book/diagrams/trial-check.yml
- book/quizzes/brain-health-dementia.quiz.yml
- book/cases/dementia-prevention.case.yml
- book/cases/dementia-feeding.case.yml

## Gate and checks

| Check | Before | After |
|---|---|---|
| Citation multiset (18 keys; livingston2024lancet x2) | baseline | identical (diffed) |
| Islands | 4 | 4 |
| Callouts | 1 | 6 (+1 Learning objectives, +4 Check yourself) |
| Tables | 1 | 1 |
| Figures | 1 | 1 |
| {#sec/#fig} ids from HEAD | fig-two-pathways | kept; 13 new sec ids added |
| copy-audit flags (5 files) | 50 | 0 |
| Chapter em dashes / "rather than" / bold per 1,000 | 9 / 4 / 21.4 | 0 / 0 / 5 |
| Chapter "you" | 9 | 3 (quoted advice "get your hearing and eyes checked"; Practise intro "asks you", "Your choices branch the case") |
| YAML (js-yaml load) | | all 4 OK |
| validate-cases.mjs | | dementia-prevention OK, dementia-feeding OK |

New non-callout divs: 1 `.concept-tree` (chapter map), 1 `.example` (Nun Study). No `@fig-` cross-references
added (the gate grep would count them as citation keys).

## Summary of changes

Chapter (.qmd)

- Opener cut to two sentences; "you will hear" → "doctors hear".
- Added Learning objectives (6) and a 3-branch chapter map linked to new movement ids.
- Ids: sec-overview, sec-dementia-pathways, sec-dementia-levers (+ -vascular, -diet, -supplements, -beyond),
  sec-dementia-advanced, sec-singapore, sec-close, sec-quiz, sec-case, sec-case-feeding.
- Headings: movement 1 → "The science underneath: two pathways, one brain" (Part IV scaffold, as in the
  T2D/CKD/CVD/Undernutrition retrofits); "What's good for the heart…" → "Vascular risk: what protects the heart
  protects the brain"; "The supplement question" → "Do brain supplements prevent dementia?" (common-belief
  question); "Beyond the plate" → "Levers beyond the plate"; advanced-dementia movement retitled topic-first;
  close → "What should a patient worried about dementia be told?". H1 left as is.
- At a glance: dementia defined here (moved from movement 1, bold at first use); bold sentence lead-ins removed
  from the four bullets; "clearest 'save your money' advice in the book" superlative and "genuinely" x2 removed;
  altitude line kept as "The task here is…".
- Movement 1: bold only at defining uses (neurodegeneration, amyloid-β, tau, cerebral small-vessel disease,
  lacunar strokes, mixed pathology); vascular paragraph split in two (hypertension; diabetes); chapter-as-
  possessive-narrator removed (parenthetical links); "shrinkage" → "atrophy", "chronic high pressure" →
  "hypertension", "high-glucose" → "hyperglycaemic"; metacommentary "The safe way to teach this" removed; Nun
  Study moved to an example box; "visibly demented" → "had dementia". Check yourself CY1 added.
- Movement 2: movement intro deleted. Vascular: "This is the chapter's central…" deleted, "you already know"
  removed, em-dash pair → parentheses, Lancet paragraph split into two, bold reduced to the defined term
  (population-attributable estimate), "not a deathbed one" tic trimmed, "key window" → "the window that matters
  most"; SPRINT MIND unbolded and split; mild cognitive impairment defined at first use. Diet: common-belief
  pattern (belief and its source, then the trial); MIND diet defined in its own sentence; three explanations
  made explicit sentences; **confounding** bold-defined (Evidence vs Hype does not use the word; ownership rule);
  one sentence before the island states what it tests; "So what do you tell a patient?" scaffold removed;
  multidomain programmes bold-defined; long sentences split. Supplements: lead-in rewritten; table cells
  unbolded; glosses for homocysteine and MCT; "shrinkage" → "atrophy"; em dash removed; "rather than" removed;
  genetic-testing paragraph split off, APOE glossed. Beyond: four bold run-ins → bulleted list of parallel
  levers, personification fixed ("the Healthy Ageing chapter builds the case" → "(see the … chapter on
  exercise in older adults)"); **cognitive reserve** glossed (decision 2). CY2 and CY3 added.
- Movement 3: "Everything above is prevention" signpost removed; emphasis bold removed; paragraph split in three;
  "and unusually important" padding removed; "pressure sores" → "pressure ulcers"; "Every major body —…—" →
  "Geriatrics societies and the Choosing Wisely campaign"; **careful hand feeding** bold-defined; "rather than"
  x2 removed; "swallowing problems" → "dysphagia" (owned by Healthy Ageing, earlier). CY4 added.
- Singapore: bolded statistics/foods unbolded; em-dash pair → parentheses; "First/Second" scaffold,
  "intriguingly", "worth knowing" and the closing book-acts metacommentary removed; long sentences split.
- Close: restatement recast as a numbered order of levers; closing triad tagline deleted.
- Practise: "blood pressure is up" → "raised"; long sentence split; progress-callout em dash → semicolon.

Island data

- trial-check.yml: intro cut to the instruction (decision 9 / §11i.8); four claims reworded as plain questions
  (em dashes and curly quotes removed); fragments "A definitive null." and "No benefit…" opener fixed. Claim
  order unchanged (stored picks are keyed by index).
- Quiz: all "Correct —/Not so —/No —/Overstated —/The opposite —" openers removed; explanation first; no two
  consecutive feedbacks share an opening word (Controlling, The, Ginkgo, It, Each, Modelled, The, Real, A,
  Ginkgo, A, High-dose, Uncorrected, Multivitamins, Decaffeinated, In, Tube, Pressure, Weight, The,
  Late-stage); q6 and q7 correct options trimmed to distractor length; terminology aligned with the chapter.
- Cases: "Right —/Correct —/Too dismissive —/Also wrong —" openers removed; em dashes and "rather than" removed;
  correct options trimmed (q-recommend a, q-frame a, q-decision a) with the rationale moved into feedback;
  "BP" and "NG" expanded; PEG expanded at first use; remedial bodies cut to one bold; closing praise sentences
  deleted from end-good bodies; feedback opening words checked for consecutive repeats (prevention: Her, This,
  Vascular, The, That, A, Ginkgo, High-dose, A; feeding: In, A, Late-stage, Weight, This, Late-stage, You,
  Appeasing, A).

## Content fixes (decision 1 consistency categories; before → after)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| dementia-prevention.case.yml | q-priority a feedback | "the same prevention as the cardiovascular and diabetes chapters" | "the same prevention as in the *Cardiovascular Disease & Hypertension* and *Type 2 Diabetes* chapters" | cross-reference to canonical chapter names (decision 6) |
| brain-health-dementia.quiz.yml | q2 a feedback | "population-attributable fraction" | "population-attributable estimate" | quiz vs chapter terminology (chapter's defined term) |
| brain-health-dementia.quiz.yml | q4 c feedback | "has been linked to increased death" | "has been linked to a small increase in death" | quiz vs chapter (chapter table: "small increase in death") |
| quiz q6/q7; dementia-feeding.case.yml objectives, feedback, titles, keyPoints, end-partial | "comfort feeding" | "Comfort feeding" / "comfort-feeding position" | "Careful hand feeding" / "position on careful hand feeding" | quiz/case vs chapter terminology (chapter's defined term) |
| chapter movement 3; quiz q6 a; dementia-feeding.case.yml objective 2, end-good keyPoint 2 | "pressure sores" / "heal sores" | "pressure sores" (beside "pressure ulcers" in the same sentence) | "pressure ulcers" | chapter-internal and case vs chapter terminology (one term) |
| ~~brain-health-dementia.qmd~~ | ~~movement 3, para 2~~ | (moved) | (moved) | Re-logged in Fix round 1 as a meaning-preserving style fix, not a decision-1 content fix |

## Deferred content concerns (source-checking needed; not changed)

1. Lancet Commission 2024 (`@livingston2024lancet`): hearing loss and high LDL cholesterol are reported as the
   joint largest contributors; the chapter names hearing loss and "education and social factors, not diet" and
   omits LDL. Quiz q5 a feedback says "Uncorrected hearing loss is among the largest single modifiable
   contributors in the population estimate, larger than diet" (HEAD: "among the single largest modifiable
   contributors, larger than diet in the population estimate"; the retrofit moved the qualifier, unlogged until
   round 2; the claim is unchanged), but diet is not one of the Commission's 14 factors. Check against the source.
2. Nun Study (example box) and "most brains examined at post-mortem show it" are uncited.
3. Vitamin E: table row and trial-check island ("no benefit for preventing dementia or slowing mild
   impairment") rest only on `@miller2005vitamine`, which supports the mortality signal, not the efficacy claim.
4. Uncited: ginkgo bleeding risk and blood-thinner interaction; coconut oil "about 90% saturated fat"; "rising
   education levels are lowering dementia rates across generations"; "local prevention programmes are adapting
   the multidomain approach" (presumably SINGER).
5. Choosing Wisely position is uncited; only AGS 2014 is cited for the hand-feeding position.
6. Routine fluid thickening "evidence is weak" is uncited. The *Healthy Ageing* chapter says thickened fluids
   "make swallowing safer but tend to lower intake" and *Undernutrition & Malnutrition* defers texture levels to
   the speech therapist (IDDSI); check that the three chapters agree.
7. Singapore ethnic gradient (Indian > Chinese) and the causal "mirroring" of diabetes and vascular burden:
   check against `@subramaniam2025wisedecade`.
8. MIND RCT (`@barnes2023mindrct`): both arms received mild caloric-restriction counselling; "a comparison group
   also nudged toward better eating" (chapter, island) is loose. Check the wording.
9. Tube feeding: the Cochrane review (`@davies2021cochranetubefeeding`) found insufficient, low-certainty
   evidence; the chapter's "does not prolong survival…" is firmer than that review, though it matches AGS.
10. trial-check.yml: "over about 6 years" (GEM) and "slowing mild impairment" (vitamin E) are not in the chapter
    text, so the chapter citations do not visibly support them.
11. (new) Lancet "up to about 45%" is the 2024 Commission figure; no other chapter cites a different figure, so no
    cross-chapter conflict found.

## Deferred backlog (structure, house blocks, figures, component code)

- No 🔬🍜🍳 house blocks in this chapter; sibling Part IV chapters (T2D, CKD, CVD, Undernutrition) carry a 🍜 Eating
  out callout. A Singapore hawker "MIND-style plate" 🍜 block would fit the diet sub-section (decision 4: not added).
- Sibling Part IV retrofits have an explicit "When to refer" movement or a "You recognise the levers…" callout;
  this chapter keeps refer points inline (APOE worry, advanced-dementia goals of care, speech therapy). Consider
  a short refer table if the Part IV scaffold is harmonised.
- H1 "# Brain health and dementia" left as is; other Part IV H1s use "&" (e.g. "# Bone & joint health").
  Harmonise book-wide in one pass.
- components/src/TrialCheck.svelte hard-coded fallback (lines 21–25) still carries the old em-dash and curly-quote
  strings and the old island wording; it only shows if the YAML fails to load (component code, not owned).
- Optional figure: none needed beyond #fig-two-pathways; the trial-check island owns "which claims survive a
  trial" (no evidence spectrum added, to avoid redrawing it).
- Glossary (book/glossary.qmd, not edited): add the 15 rows below.
- If the *Evidence vs Hype* retrofit later adopts the word "confounding" as a bold-defined term, move the
  Confounding glossary row there and unbold it here.

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Amyloid-β | An abnormal protein that accumulates in plaques between neurons in neurodegeneration | Brain Health & Dementia |
| Careful hand feeding | Offering food by hand for comfort; the approach preferred to tube feeding in advanced dementia | Brain Health & Dementia |
| Cerebral small-vessel disease | Damage to the brain's small blood vessels, driven by chronic hypertension and worsened by diabetes, that produces lacunar strokes and white-matter changes | Brain Health & Dementia |
| Cognitive reserve | The brain's capacity to absorb damage before dementia shows | Brain Health & Dementia |
| Confounding | Distortion of an association by a third factor linked to both the exposure and the outcome | Brain Health & Dementia |
| Dementia | A clinical syndrome of acquired, progressive loss of memory and thinking severe enough to affect daily life | Brain Health & Dementia |
| Lacunar stroke | A small, deep brain infarct caused by cerebral small-vessel disease | Brain Health & Dementia |
| Medical food | A regulatory product category with a lower bar than a medicine; the label is not evidence that the product works | Brain Health & Dementia |
| Mild cognitive impairment | A decline in memory or thinking that falls short of dementia | Brain Health & Dementia |
| MIND diet | A blend of Mediterranean and DASH eating that emphasises leafy greens, berries, nuts, wholegrains, fish and olive oil | Brain Health & Dementia |
| Mixed pathology | More than one disease process in the same brain, typically neurodegeneration with small-vessel disease; the rule in older people | Brain Health & Dementia |
| Multidomain programme | A prevention programme that combines diet, exercise, cognitive activity and vascular monitoring | Brain Health & Dementia |
| Neurodegeneration | The accumulation of abnormal proteins (amyloid-β, tau) with loss of synapses and neurons and brain atrophy; the dominant process in Alzheimer's disease | Brain Health & Dementia |
| Population-attributable estimate | The share of cases associated with a set of risk factors, assuming they are fully causal and could be eliminated from the whole population; a theoretical ceiling, not an individual's risk reduction | Brain Health & Dementia |
| Tau | A protein that accumulates in tangles inside neurons in neurodegeneration | Brain Health & Dementia |

Terms used here but owned elsewhere (unbolded): hypertension (Cardiovascular Disease & Hypertension), insulin
resistance (Obesity & Metabolic Syndrome), dysphagia (Healthy Ageing), reverse causation and hard endpoint
(Evidence vs Hype), DASH and Mediterranean pattern (Why Nutrition Matters), malnutrition (Undernutrition &
Malnutrition).

## Owner terms from term-ownership.md that do not occur in this chapter

None: all 13 terms assigned to brain-health-dementia occur and are defined (Medical food is defined in the
supplement table, where the table marks the term).

## Glosses added (decision 2)

confounding (definition), cognitive reserve (definition), APOE ("whose variants are linked to Alzheimer's
risk"), homocysteine ("an amino acid in the blood"), MCT (medium-chain triglycerides), PEG (percutaneous
endoscopic gastrostomy), NG → nasogastric.

## Fix round 1 (verifier issues; 33 raised, 33 resolved)

Pre-round snapshot of all five files: `retrofit-logs/bhd-round1-pre/`.

### Checks after the round

| Check | Result |
|---|---|
| Citation multiset vs HEAD | identical (18 keys; livingston2024lancet x2) |
| Islands / callouts / tables / figures | 4 / 6 / 1 / 1 (same as round 0: +1 Learning objectives, +4 Check yourself) |
| HEAD {#sec/#fig} ids | fig-two-pathways kept |
| copy-audit (5 files) | 0 flags; 0 em dashes; bold 5 per 1,000; "you" 3 (unchanged: quoted advice, Practise intro x2) |
| YAML (js-yaml load) | all 4 OK |
| validate-cases.mjs | exit 0; dementia-prevention OK, dementia-feeding OK |
| Consecutive feedback openers | none repeated (quiz, both cases) |
| MCQ option lengths | correct option within distractor range in every question |

### Content restorations (meaning lost or shifted in round 0; before → after)

| # | File / location | Before (round 0) | After | Reason |
|---|---|---|---|---|
| 1 (blocker) | qmd, supplements lead-in | "Sooner or later the patient asks about a pill, usually one sold on a plausible rationale. No supplement…" | "Sooner or later the patient asks about a pill. No supplement…" | Unlogged addition; lent supplements a credibility the table contradicts. Restored to HEAD |
| 2 | quiz q7 correct option | "An expected part of the illness, not a feeding gap" | "An expected part of the illness, not a reversible gap" | Restores HEAD qualifier "reversible"; aligns with chapter and case ("not a reversible deficit / feeding gap"). 53 chars vs distractors 50/61 |
| 3 | prevention case q-priority a feedback | "Her blood pressure and glucose are the levers with the best evidence, because the vascular contribution is the modifiable pathway." | "The vascular contribution is the modifiable pathway, and her blood pressure and glucose are the levers with the best evidence." | Round 0 added a causal link HEAD did not make |
| 4 | qmd, mixed pathology | "The two kinds of damage add up: …" | "The safest reading is that the two kinds of damage add up: …" | Restores HEAD hedge on the additive model |
| 5 | quiz q1 a feedback | "…most actionable message, because the vascular contribution is the modifiable pathway: …" | "Controlling cardiometabolic risk is the best-supported, most actionable message, and the vascular contribution is the modifiable pathway: what protects the heart protects the brain." | Same causal-link issue as #3. Verifier's wording ("The vascular contribution…") not used verbatim because q1 b also opens "The"; kept the "Controlling" opener and HEAD's "and" |
| 6, 25 | qmd, CY2 answer | "The vascular lever is the one with trial support: in SPRINT MIND, intensive blood-pressure lowering reduced mild cognitive impairment." | "The vascular lever has the strongest trial signal: in SPRINT MIND, intensive blood-pressure lowering reduced mild cognitive impairment, although the trial was underpowered to show fewer cases of dementia itself. Diabetes injures the same small vessels, so glucose control belongs to the same vascular lever." | Answer claimed more than the chapter ("strongest signal we have", dementia not reduced); the glucose half of the question was unanswered (new sentence uses the chapter's own diabetes paragraph) |
| 7 | qmd, additive-model corollary | "whichever model turns out to be right" | "whichever model of neurodegeneration turns out to be right" | Referent ambiguity undercut the corollary; matches CY1 |
| 8 | qmd, vascular paragraph | "damages the brain's own small vessels in the same way" | "damages the brain's own small vessels too" | "In the same way" claimed an identical mechanism; HEAD said only that the story extends |
| 9 | feeding case q-decision a | "Explain gently that a tube would not help, and refer for goals of care." | "Explain gently that a tube would not help, keep hand feeding, and refer." | Restores the comfort-feeding step the feedback, objectives and end-good rely on |
| 10 | feeding case q-frame a | "…not underfeeding." | "…not a sign of underfeeding." | Restores HEAD sense (answers the neglect worry) |
| 15 | trial-check.yml ginkgo why | "…over about 6 years, and it can raise bleeding risk." | "…over about 6 years, a definitive null, and it can raise bleeding risk." | Restores HEAD strength characterisation (plain text) |
| 16 | quiz q5 c feedback | "Decaffeinated coffee is not a dementia lever;" | "Decaffeinated coffee is not a meaningful dementia lever;" | Restores HEAD hedge |
| 17 | qmd, at a glance | "…for, and the evidence is encouraging in one place and thin in the others." | "…for, and careful counselling matters because the evidence is encouraging in one place and thin in the others." | Restores HEAD rationale linking mixed evidence to counselling |
| 18 | qmd, Singapore para 3 lead-in | "Local cohorts also link diet to cognition." | "Local socio-cultural signals also shape counselling." | Restores HEAD's socio-cultural framing (AUTHOR §11d); the two cited sentences unchanged |
| 19 | feeding case q-recommend b feedback | "A PEG does neither in advanced dementia, and tube feeding is associated with more pressure ulcers: …" | "The evidence shows a PEG does neither in advanced dementia, and PEG is associated with more pressure ulcers: …" | Restores HEAD subject (PEG) and attribution |
| 19 (quiz) | quiz q6 b feedback | "Tube feeding does neither in advanced dementia, …" | "The evidence shows tube feeding does neither in advanced dementia, …" | Same dropped attribution (named in issue 19) |
| 22 | qmd, Lancet para | "The large number therefore comes from…" | "Because each effect is modest, the large number comes from…" | "therefore" followed a two-part sentence whose second clause does not support the conclusion |

### Decision-1 consistency fix (new this round)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| dementia-prevention.case.yml | q-supplement b feedback | "has been linked to increased death" | "has been linked to a small increase in death" | case vs chapter table (cited `@miller2005vitamine` row: "small increase in death"); now matches chapter, quiz q4 c, trial-check and q-supplement a |

### Re-classification (issue 14)

- qmd movement 3: "Every major body — geriatrics societies and the Choosing Wisely campaign — converges" →
  "Geriatrics societies and the Choosing Wisely campaign converge". Wording kept. Re-logged as a style fix that
  preserves meaning (HEAD's appositive named these same two bodies), not a decision-1 content fix. Deferred
  concern 5 (Choosing Wisely uncited) stands.

### Style and readability fixes (meaning preserved)

- Learning objective 2: "up to 45%" → "up to about 45%" (matches the chapter's hedge).
- Neurodegeneration sentence split (garden path, three bold terms in one 29-word sentence): "…abnormal proteins,
  with loss of synapses and neurons and brain atrophy. Two proteins accumulate: **amyloid-β**, in plaques
  between neurons, and **tau**, in tangles inside them."
- "The largest individual contributors are hearing loss and education and social factors" → "The largest single
  contributors are hearing loss, and education and social factors" (list ambiguity; per-factor not per-person).
- Cognitive reserve: two sentences ("…also counts. Cognitive and social reserve built early are…") merged into
  "Building **cognitive reserve** (the brain's capacity to absorb damage before dementia shows) and social reserve
  early is part of why rising education levels are lowering dementia rates across generations."
- Diet sub-section: multidomain programmes moved into their own paragraph (one idea per paragraph); closing
  restatement "Recommend the pattern, but do not promise that it prevents dementia." deleted (repeats "not as a
  proven shield" two sentences earlier).
- Table: "eat fish as food, since the capsule is not the food" → "eat fish as food; the capsule is not the food"
  (circular "since").
- "Four messages summarise it:" → "Four messages summarise the evidence:" (§11j repeat the key noun).
- Singapore: "…have a large local market, and a product sold in a pharmacy is not thereby proven or approved for
  dementia." → "…have a large local market. Being sold in a pharmacy does not make a product proven or approved
  for dementia."
- Close: "then work through the levers in this order:" → "then cover four points:" (the list is a conversational
  sequence, not a ranking; item 3 is not a lever).
- Prevention case remedial: "the best-evidenced lever" → "the best-evidenced levers" (number agreement).
- Feeding case q-recommend a: "Hand feed her" → "Hand-feed her" (verb takes the hyphen); objective 3: "hold the
  position on careful hand feeding kindly under family pressure" → "kindly hold the position on careful hand
  feeding under family pressure" (adverb placement; non-sim case, so objectives are editable).
- Source lines reflowed after the edits (no wording change).

### Log corrections

- Glossary row "Cerebral small-vessel disease" (above) corrected: "driven mainly by chronic hypertension and
  diabetes" → "driven by chronic hypertension and worsened by diabetes" ("mainly" is not in the chapter; the
  chapter says diabetes "adds to" the injury). term-ownership.md still carries the old wording (not owned here;
  the orchestrator should update it when the glossary is filled).

### New deferred content concern

12. Ginkgo interaction is uncited and uses the lay term 'blood thinners'; when it is sourced, replace it with the
    medical term that matches the source's scope (e.g. 'anticoagulant and antiplatelet drugs').

## Fix round 2 (verifier issues; 24 raised: 1 blocker, 23 minor; 23 resolved here, 1 for the orchestrator)

Pre-round snapshot of all five files: `retrofit-logs/bhd-round2-pre/`.

### Checks after the round

| Check | Result |
|---|---|
| Citation multiset vs HEAD | identical (18 keys, 19 uses; livingston2024lancet x2); no key moved |
| Islands / callouts / tables / figures | 4 / 6 / 1 / 1 (unchanged from round 1; HEAD 4 / 1 / 1 / 1, +1 Learning objectives, +4 Check yourself) |
| HEAD {#sec/#fig} ids | fig-two-pathways kept (HEAD has no sec ids); all 13 round-0 sec ids unchanged |
| copy-audit --you (5 files) | 0 flags; 0 em dashes; bold 4.9 per 1,000; "rather than" 0; "you" 3 (unchanged); curly quotes 0 |
| YAML (js-yaml load) | all 4 OK |
| validate-cases.mjs | exit 0; dementia-prevention OK, dementia-feeding OK |
| Consecutive feedback openers | none repeated (quiz: Controlling, The, Ginkgo, It, Each, Modelled, The, These, A, Ginkgo, A, Vitamin, Uncorrected, Multivitamins, Decaffeinated, In, The, Pressure, Weight, The, Late-stage) |
| Correct option longest | 5 of 13 MCQs (was 7): q2 +5, q3 +6, q4 +1, q-priority +6, q-frame +2 characters; left as "about the same length" |
| Line endings | LF before and after (unchanged) |

### Content restorations (meaning shifted in rounds 0–1; before → after)

| # | File / location | Before (round 1) | After | Reason |
|---|---|---|---|---|
| 1 (blocker) | qmd, supplement table, ginkgo verdict | "can increase bleeding and interact with anticoagulants" | "can increase bleeding and interact with blood thinners" | Restored HEAD. "Anticoagulants" narrowed a drug-interaction safety caveat (lay "blood thinners" also covers antiplatelet drugs such as aspirin): a content change outside decision 1, wrongly logged in round 1 as a style fix. Round-1 style bullet corrected (the anticoagulant half deleted); deferred concern 12 reworded |
| 2 | qmd, CY1 answer | "The two kinds of damage add up, so vascular injury…" | "On the safest reading, the two kinds of damage add up, so vascular injury…" | Answer had dropped the body's hedge on the additive model (the hedge round 1 restored in the body) |
| 3 | qmd, CY1 title | "food cannot clear amyloid plaques or tau tangles" | "food cannot yet clear amyloid plaques or tau tangles" | Restores the body's temporal hedge ("We cannot yet clear…") |
| 14 | qmd, CY1 answer, sentence 1 | "Most dementia in older people reflects mixed pathology, with neurodegeneration and cerebral small-vessel disease in the same brain." | "In older people, mixed pathology is the rule: neurodegeneration and cerebral small-vessel disease often occur in the same brain." | The summary made a claim about dementia cases that the prose does not make (prose: mixed pathology is the rule in older people's brains) |
| 4 | qmd, Levers beyond the plate | Four parallel bullets under "some of the strongest levers": activity; hearing and vision; "staying socially and mentally engaged;"; "treating depression and sleep problems." | Two bullets (activity; hearing and vision, now ending "advice."), then HEAD's sentence: "Staying socially and mentally engaged, and treating depression and sleep problems, round out the picture." | Parallel bullets ranked sleep and depression treatment among "the strongest levers"; HEAD ranked them below |
| 5 | qmd, cognitive reserve | "Building **cognitive reserve** (…) and social reserve early is part of why rising education levels…" | "Building **cognitive reserve** (…) and social reserve early also helps; it is part of why rising education levels…" | HEAD gave this as a lever ("Build … early; it is part of why…"); the merged sentence had left only the population trend |
| 6 | qmd, diet, confounding item | "any of which could produce the association" | "some of which could produce the association" | Round-0 clause overstated: only differences linked to both diet and dementia can confound (the definition that follows) |
| 7 | qmd, CY3 answer | "…deserves scepticism until the outcome that matters is measured." | "…deserves scepticism." | Qualifier not in the chapter; it fitted only the marker case and implied the scepticism ends once memory is measured. Now matches the chapter's rule |
| 8 | quiz q3 b feedback | "Real cohorts can still mislead: observational associations often overstate a benefit compared with a trial." | "These cohorts are real, but observational associations often overstate a benefit compared with a trial." | Restores HEAD's direct rebuttal of the "fabricated" distractor ("the cohorts are real") |
| 9 | quiz q4 b feedback | "…did not reduce dementia, and it can raise bleeding risk, so it is not protective." | "…did not reduce dementia, so it is not protective, and it can raise bleeding risk." | The added "so" made bleeding risk part of the reason ginkgo is "not protective"; HEAD kept them separate |
| 10 | quiz q4 c feedback | "High-dose vitamin E does not prevent dementia and has been linked to a small increase in death, …" | "Vitamin E does not prevent dementia and, at high doses, has been linked to a small increase in death, …" | Restores HEAD scope: the efficacy claim covers vitamin E generally (chapter table: "No benefit"); the dose qualifier belongs to the harm. Not logged in round 0. (Prevention case q-supplement b already said "High-dose vitamin E does not prevent dementia" at HEAD, so left as is) |
| 11 | feeding case q-decision a feedback | "…and refer for a proper conversation." | "…and refer for a goals-of-care conversation." | The trimmed option no longer named the referral target; the feedback now does (HEAD option: "refer for goals of care"). Option text unchanged |

### Style and readability fixes (meaning preserved)

- Diet sub-section (issue 13): the three explanations for the cohort–trial gap are now a bulleted list after a
  full lead-in sentence ending in a colon (§11g "Lists for parallel points"; §11j 3–7 parallel items). Items:
  confounding (with its bold definition), reverse causation, "Three years may be too short." List connectives
  "also" and "Finally," dropped. "some of which" (issue 6) used in place of the "any of which" that issue 13's
  text copied. "Which impressive claims survive a randomised trial is rarely obvious in advance." kept as the
  one-line lead-in to the island.
- Chapter map (issue 23): "[Can a diet prevent dementia?](#sec-dementia-diet): …" → "[Diet and
  dementia](#sec-dementia-diet): …"; "[Do brain supplements prevent dementia?](#sec-dementia-supplements): …" →
  "[Brain supplements](#sec-dementia-supplements): …" (avoids "dementia?: a cohort signal…"; the headings keep
  the neutral questions).
- Infarct gloss (issue 21, decision 2): "**lacunar strokes** (small, deep infarcts)" → "**lacunar strokes**
  (small, deep infarcts: areas of brain tissue killed by a blocked small vessel)". Variant: a colon, not the
  suggested comma, so "small, deep infarcts, areas of…" cannot be read as a list.
- Fish-oil cell (issue 22): "eat fish as food; the capsule is not the food" → "eat fish as food: the capsule is
  not the food" (two stacked semicolons in one cell).
- Lancet paragraph (issue 19): "It is easy to oversell. It does not promise" → "The estimate is easy to
  oversell. It does not promise" (three "It" openers in a row; §11j repeat the key noun).
- Singapore (issue 18): topic sentence restored for cohesion. "Over-the-counter "brain tonics" (…) have a large
  local market." → "Two local realities shape counselling. The first is a large local market in over-the-counter
  "brain tonics" (ginkgo, fish oil and traditional tonics)."; "Local socio-cultural signals also shape
  counselling." → "The second is a set of local socio-cultural signals." (The "also" had nothing to point back
  to.)
- trial-check.yml ginkgo why (issue 20): "The GEM trial found ginkgo did not reduce dementia at all over about 6
  years, a definitive null, and it can raise bleeding risk." → "The GEM trial, a definitive null, found that
  ginkgo did not reduce dementia at all over about 6 years. Ginkgo can also raise bleeding risk." Variant: the
  verifier's single sentence ("…over about 6 years, and ginkgo can raise bleeding risk") is split in two, so the
  uncited bleeding claim (concern 4) cannot be read as a GEM finding.
- Quiz option parallelism and length (issue 15; §11g: short parallel statement, rationale in feedback):
  - q1 a: "Manage her vascular risk: blood pressure, glucose, weight, smoking, activity" (76) → "Manage her blood
    pressure, glucose and other vascular risks" (59; distractors 67/57). The dropped items moved into the
    feedback: "Controlling cardiometabolic risk (blood pressure, glucose, weight, smoking and activity) is…".
  - q4 a: "None is proven to prevent dementia, and a couple can do harm" (60) → "Keep none of them, since none is
    proven and some can harm" (57; distractors 54/56). It is now an imperative like "Keep the ginkgo…" and
    "Add…". The chapter's "a few can do harm" / "several carry a downside" back "some can harm".
  - q6 a: "Careful hand feeding and a goals-of-care referral" (49) → "Hand-feed her carefully and refer for a
    goals-of-care talk" (58; distractors 63/47). It is now an imperative like "Insert a…", and matches the case
    wording.
  - q7 a (optional): "An expected part of the illness, not a reversible gap" → "An expected part of the illness,
    not a reversible deficit" (57; distractors 50/61). Variant: the verifier's "not a feeding gap" would drop
    "reversible" again, which round-1 fix 2 restored as a meaning fix. "Reversible deficit" is the feeding
    case's own HEAD objective-1 wording, so the noun is restored and the qualifier kept.
- Prevention case q-diet a (issue 16): "A sensible, low-regret pattern; the trial did not prove it prevents
  dementia." (77) → "Worth following, but its trial did not show it prevents dementia." (65; distractors
  67/61). "Low-regret" (objective 2's term) moved into the feedback: "Recommend the pattern as sensible,
  low-regret eating, not a proven shield."
- Quiz q5 stem (issue 17, a pre-retrofit item flaw): "Which non-dietary factor is one of the largest individual
  modifiable contributors to dementia risk?" → "Which of these is one of the largest individual modifiable
  contributors to dementia risk?" ("non-dietary" ruled out both dietary distractors.)
- Source reflow of the Lancet paragraph and the Singapore curry sentence after the edits (no wording change).

### Log corrections (issues 1 and 12)

- Round-1 "Style and readability fixes", Table bullet: the "interact with blood thinners → interact with
  anticoagulants (§11g medical term)" half deleted. That change was a content change, now reverted (row 1
  above).
- Deferred concern 12 reworded: "Ginkgo interaction is uncited and uses the lay term 'blood thinners'; when it is
  sourced, replace it with the medical term that matches the source's scope (e.g. 'anticoagulant and
  antiplatelet drugs')."
- Deferred concern 1 now quotes the current q5 a feedback ("…among the largest single modifiable contributors in
  the population estimate, larger than diet"). It also records that round 0 moved the qualifier without logging
  it; the claim is unchanged.

### For the orchestrator (issue 24; not editable by agents)

- book/glossary.qmd needs the rows "Cognitive reserve | The brain's capacity to absorb damage before dementia
  shows | Brain Health & Dementia" and "Confounding | Distortion of an association by a third factor linked to
  both the exposure and the outcome | Brain Health & Dementia", alongside the 13 owned terms in
  term-ownership.md. Both rows are already in "Glossary rows owned by this chapter" above. term-ownership.md does
  not list cognitive reserve. This chapter owns confounding only by the fallback rule (Evidence vs Hype uses
  "healthy-user bias" and "reverse causation", not "confounding"). Medical food stays as it is: it is defined,
  unbolded, in the supplement table.
- Optional: the glossary row "Lacunar stroke" uses "infarct", which the glossary does not define. The chapter now
  glosses it ("areas of brain tissue killed by a blocked small vessel").
