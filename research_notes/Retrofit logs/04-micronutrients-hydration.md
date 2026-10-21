# Retrofit log: Micronutrients, Hydration & Electrolytes (04-micronutrients-hydration)

Files changed:
- book/chapters/04-micronutrients-hydration.qmd
- book/structures/micronutrients.mol.yml
- book/quizzes/micronutrients-hydration.quiz.yml
- book/cases/iron-deficiency-aisha.case.yml

## Gate (HEAD vs working copy)

| Item | Before | After | Note |
|---|---|---|---|
| Citation multiset | 32 keys / 33 uses | identical (diff empty) | `@sgVitDeficiency` moved with its sentence into the sunny-climate callout |
| data-island | 3 | 3 | |
| callouts | 9 | 17 | +1 Learning objectives, +6 Check yourself, +1 "Optional: scurvy and the limeys" |
| table separator rows | 3 | 3 | |
| figures | 5 | 5 | #fig-salmon #fig-citrus #fig-redmeat #fig-kailan #fig-iodisedsalt all present |
| HEAD ids missing | none | | HEAD had no {#sec-} ids; 15 added |

Copy audit (`--you`, all four files): 60 flags -> 0. Chapter: 0 em dashes, 0 "you", 0 "rather than", bold 9.6 per 1,000 words (was 57.5).
YAML: all three YAML files load with js-yaml. validate-cases: `iron-deficiency-aisha.case.yml` OK.
Not done (forbidden in this run): render / TOC check / anchor check in rendered HTML.

## Summary of changes

Chapter
- Opener replaced (objectives-in-imperative + roadmap meta -> two-sentence problem statement).
- Added Learning objectives (6) and a three-branch chapter map linked to new {#sec-} ids.
- Headings: "Micronutrients enable; they don't fuel" -> "Micronutrients at a glance"; "Iron, and why *where it comes from* matters" -> "Iron: why the source matters"; "Iodine, a public-health success worth knowing" -> "Iodine and iodised salt"; "Water, and the electrolytes" -> "Water and electrolytes"; "Water is a nutrient" -> "Water and hydration"; "Sodium and potassium: opposite directions" -> "...: opposite effects on blood pressure"; "Do I need a supplement?" -> "When does a patient need a supplement?".
- Movement intros deleted (vitamins, water).
- Common-belief callouts retitled as neutral questions and opened with the belief: "More vitamins = healthier" is false -> Are more vitamins healthier?; The sunny-country paradox ("myth") -> Does a sunny climate prevent vitamin D deficiency?; Does everyone need a calcium supplement? No. -> no answer in heading; colds callout states the belief.
- Other callout retitles: "Two classic diseases of 'missing' B-vitamins" -> "Beriberi and pellagra: diseases of food processing"; "Folate before pregnancy, a public-health win" -> "Folate before conception"; "Salt substitutes work, but read the trial carefully" -> "Salt substitutes and the SSaSS trial" (caveats as a 4-item list; closing metacommentary dropped).
- Sentence moves (no content change): B6/vitamin C toxicity sentence moved from the colds callout to "Are more vitamins healthier?"; Singapore vitamin D prevalence sentence (with @sgVitDeficiency) moved into the sunny-climate callout; Lind/"limeys" historical aside moved to a collapsed Optional box (§11j pass 1).
- Form by relation: mineral signature roles -> bulleted list; haem/non-haem bullets -> definition list; dehydration/over-hydration inline-header bullets -> definition list; supplement indications -> bulleted list; SSaSS caveats -> bulleted list; vitamin K/E, zinc/magnesium/selenium, iodine and vitamin A paragraphs split (one idea per paragraph).
- Bold reduced to defining uses, five-beat run-in lead-ins (Vitamin A/D/K/E/C, Zinc/Magnesium/Selenium) and one warning per callout. All bold removed from tables.
- Emphasis italics removed in prose (kept: opener, chapter names, Latin *folium*).
- "you" converted to expository everywhere (5 lines); "this chapter", "Crucially", "not only... but", "not just" removed; em dashes removed (3).
- One-line glosses added (decision 2): cofactor, xerophthalmia, preformed vitamin A, β-carotene (precursor), teratogenic, UVB, neural-tube defects, folic acid, myelin, anaemia, metformin, bioavailability, phytates, oxalate, peak bone mass (plain, owner = Childhood & Adolescence), osteoporosis (plain, owner = Bone & Joint Health), electrolytes, ADH, open-label, cluster-randomised, SSaSS expansion, hypertension (plain, owner = CVD & Hypertension), hyperkalaemia (plain, owner = CKD).
- Term consistency: "non-haem iron" after its definition (not "plant iron"); "vitamin C-rich"; "1.8×" -> "1.8 times"; "carbs" -> "carbohydrates"; "the isolated elderly" -> "isolated older adults"; "(TB)" -> "for tuberculosis".
- Forward references added by name (targets checked): *Digestion & Absorption* (site-specific absorption, iron in the duodenum), *Bone & Joint Health* (supplements, osteoporosis), *Cardiovascular Disease & Hypertension* (sodium/potassium and blood pressure). In-page links to #sec-iron and #sec-case.
- Six collapsed Check yourself callouts, two at the end of each movement.
- Tip line: em dash -> semicolon.

Structure island (micronutrients.mol.yml)
- intro cut to the instruction only (it repeated the chapter paragraph; decision 9).
- Names: em dash -> parentheses. Notes: em dashes and "you"/"greasy" removed; same facts.

Quiz
- Every feedback now opens with the explanation (no "Correct —", "No —", "The opposite —", "Actually", "A common misconception —"); 23 em dashes removed; "vital"/"key" removed; BP/CKD spelt out; italics removed from stems/feedback.
- Options: q5a trimmed to "Strict vegans, older adults and metformin users"; q6a "Add a vitamin C-rich food and save tea for between meals"; q7c "B12 deficiency from long-term metformin"; q10a "High sodium raises it; adequate potassium helps lower it"; q11b/c "Mostly" dropped.
- First words checked in sequence (Fat-soluble, Vitamins, Absorption, This, Scurvy, Vitamin, The, Pregnancy, Folate, Vitamin, Bleeding, Night, All, Animal, Sun, Vitamin, Tea, Calcium, Fatigue, Vitamin, B12, Spinach's, Tofu, Kai-lan, Iodising, Most, All, Sodium, Potassium, Both, Most, Table, Fresh, SSaSS, The, Salt): no two consecutive the same.

Case (iron-deficiency-aisha)
- Em dashes and arrows removed throughout; "Right —"/"Correct —"/"Exactly —" openers removed; "enhances" -> "increases"; bold removed from stems; q-diet and q-absorption correct options trimmed; q-diet correct feedback no longer gives away the next question's answer.
- remedial/end bodies and debrief keyPoints rewritten as plain sentences (no arrows, no "not just").
- end-good body: one-sentence forward reference to the *Interprofessional Practice & Referral* chapter (§11e).
- First words: Fatigue, Stress, Transfusion, Non-haem, Plants, Refined, Vitamin, Tannins, Vegetables, Recognise, Choosing, A.

## Content fixes (before -> after, category)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | Calcium supplement callout | "limited fracture-\nprevention benefit" (hyphen at a line break renders "fracture- prevention") | "limited fracture-prevention benefit" on one line | Rendering error (misrendered compound) |
| chapter | B-vitamin table, B12 and C rows | "the isolated elderly"; "DNA + nerve myelin"; "Anaemia + nerve damage" | "isolated older adults"; "DNA and nerve myelin"; "Anaemia and nerve damage" | Terminology consistency (house term "older adults") |
| chapter | Iron section opener | "is covered in the case below; here the key idea is bioavailability" | "(the pattern in [the case](#sec-case) below) ... (for where in the gut iron is absorbed, see the *Digestion & Absorption* chapter)" | Cross-reference (added forward reference; target verified: D&A states iron is absorbed in the duodenum) |
| chapter | Calcium supplement callout | no pointer | "(see the *Bone & Joint Health* chapter)" | Cross-reference (target verified: covers calcium/vitamin D supplements and osteoporosis) |
| chapter | Sodium and potassium paragraph | no pointer | "(see the *Cardiovascular Disease & Hypertension* chapter)" | Cross-reference (target verified: covers sodium-potassium and blood pressure) |
| case | end-good body | no pointer | "When and how to refer is taught in the *Interprofessional Practice & Referral* chapter." | Cross-reference (§11e forward reference for a Part I case) |

## Deferred content concerns

- Chapter, Calcium and bone, P1: "hip-fracture rates are among the highest in Asia" is uncited. The *Bone & Joint Health* chapter reports Singapore's hip-fracture rates falling since 2000 and uses "among the highest in Asia" for local calcium intake (its line 91); possible conflation. Needs a source (e.g. @yong2019hipfracSG) or rewording.
- Chapter, Optional box: Lind 1747 as the "first-ever controlled dietary trial" and the "limeys" link are uncited and simplified (the navy adopted lemon juice decades later; limes came later still).
- Chapter, Vitamin A paragraph: isotretinoin is itself a retinoid, so "which is why acne drugs such as isotretinoin demand strict pregnancy prevention" links the two loosely.
- Chapter, calcium-supplement callout: "some analyses have raised cardiovascular questions" is cited to @uspstfCalcium2018; check that the USPSTF statement discusses cardiovascular harm.
- Chapter, Singapore picture P1: "iodised salt is quietly slipping as 'gourmet' salts spread" is stated as a local fact without a source, while the iodine section says no national iodine-status survey has been published.
- Chapter: magnesium associations (heavy alcohol use, poorly controlled diabetes, medicines) and "whole-diet patterns beat isolated pills for almost every vitamin and mineral" are uncited.
- Chapter, Iron: "roughly 1.8 times as much iron" has no citation in its sentence (presumably @odsIron).
- Quiz q11 attributes "where sodium comes from" to the National Nutrition Survey 2022, but the chapter's sodium-source sentence is uncited; confirm NNS 2022 reports sources.
- Case reveal-group: "nearly one in three women aged 15–49 are anaemic" is uncited in the case data and not stated in the chapter.
- Quiz q7 repeats the case presentation almost verbatim (24-year-old woman, fatigue, pallor, heavy periods).
- Chapter, SSaSS callout: the 14% / 13% / 12% figures are relative reductions; §11d asks for relative vs absolute, but adding "relative" or absolute numbers needs the source.
- Chapter vs owner chapters: peak bone mass "about 90% by age 18–20, account closes around age 30" (@nofPeakBoneMass2016) vs *Bone & Joint Health* "set by the late twenties" (same key) and *Childhood & Adolescence* citing @nof_weaver_2016_pbm_position; compatible, but the two bib keys may be duplicates of the same NOF position statement.
- Case altitude (§11e): q-action grades a referral decision in a Part I case. Kept (plan option a) with a forward reference added; the author may prefer re-aiming q-action at "address the cause (the heavy periods)" (option b) or deleting it (option c).

## Deferred backlog

- 🔬🍜🍳 house blocks: none in this Part I nutrient chapter (§11b expects a triad per topic); adding cited triads is deferred (decision 4).
- Teaching figure (§11f): the chapter has food photos and the molecule island but no mechanism schematic (candidate: the bone-bank curve, or iron absorption enhancers/inhibitors); deferred.
- Example boxes (§11g Examples) not added (e.g. a hawker dish for sodium); deferred.
- Render out-of-tree and check the TOC (3 movements, no single-child ###), chapter-map anchors, definition lists and the fracture-prevention line.
- Glossary: add the 33 rows below to book/glossary.qmd.
- Optional: decide the case q-action altitude question above.

## Glossary rows owned (Introduced in: Micronutrients, Hydration & Electrolytes)

| Term | Meaning |
|---|---|
| Anaemia | A shortage of red blood cells or haemoglobin; in this chapter, from iron, folate or B12 deficiency |
| Antidiuretic hormone (ADH) | The hormone that reduces water loss in urine; with thirst, the everyday regulator of water balance |
| Beriberi | Thiamine (B1) deficiency, appearing where the staple is heavily refined; heart failure and oedema ("wet") or nerve damage ("dry") |
| β-carotene | A precursor in orange and dark-green produce that the body converts to vitamin A as needed; safe from food because the conversion is self-limiting |
| Bioavailability | The proportion of a nutrient in food that is absorbed |
| Cluster-randomised trial | A trial in which groups, not individuals, are assigned to each arm |
| Cofactor | A non-protein helper that an enzyme needs in order to work; many micronutrients act as cofactors |
| Dehydration | Too little body water, shown by thirst, dark concentrated urine, dizziness and reduced urine output |
| Electrolytes | Charged minerals dissolved in body fluids, such as sodium and potassium |
| Exercise-associated hyponatraemia | Low blood sodium during or after prolonged exercise, the over-hydration end of the hydration range; drinking only plain water in large amounts during endurance exercise can cause it |
| Fat-soluble vitamins | Vitamins A, D, E and K: stored in fat and the liver, so deficiency develops slowly and megadoses can be toxic |
| Folic acid | The form of folate used in supplements and food fortification |
| Food-first | Meeting micronutrient needs from a varied, mostly whole-food diet before turning to supplements |
| Goitre | A swollen thyroid, caused by iodine deficiency |
| Haem iron | Iron bound in haem, which comes from meat, fish and poultry; well absorbed and little affected by the rest of the meal |
| Keshan disease | A disease of heart muscle caused by selenium deficiency, which depends on soil selenium |
| Koilonychia | Spoon-shaped nails, a sign of iron deficiency |
| Micronutrients | The vitamins and minerals: needed in milligram or microgram amounts, they supply almost no energy but enable the body's reactions |
| Neural-tube defect | A birth defect of the brain or spinal cord, such as spina bifida, risked when folate is too low as the neural tube closes, about four weeks after conception |
| Non-haem iron | Iron not bound in haem, which comes from plants, eggs and fortified foods; poorly and variably absorbed, depending on the rest of the meal |
| Open-label trial | A trial in which participants know which treatment they are receiving |
| Osteomalacia | Vitamin D deficiency in adults, with soft, aching bones |
| Oxalate | A compound in some greens, notably spinach, that binds calcium and reduces its absorption |
| Pellagra | Niacin (B3) deficiency, remembered as the "3 Ds": dermatitis, diarrhoea and dementia |
| Phytate | A compound in wholegrains, legumes and nuts that binds iron and zinc and reduces their absorption |
| Pica | Craving for non-foods, classically ice; a sign of iron deficiency |
| Preformed vitamin A | Ready-made vitamin A, found in liver, egg yolk and dairy; teratogenic at high doses |
| Rickets | Vitamin D deficiency in children, with bowed legs or knock-knees |
| Scurvy | Vitamin C deficiency: bleeding, spongy gums, easy bruising, poor wound healing and corkscrew hairs, because collagen is not built |
| Teratogenic | Able to cause birth defects |
| Water-soluble vitamins | The B-complex vitamins and vitamin C: largely not stored (except B12), so they need regular intake |
| Wernicke's encephalopathy | A thiamine-deficiency emergency, classically in heavy drinkers, with confusion, unsteadiness and eye-movement problems; thiamine is given first |
| Xerophthalmia | Dryness of the eyes from vitamin A deficiency, between night blindness and corneal damage |

Defined in-chapter by a table or definition list (unbolded there, per §11g): fat-soluble and water-soluble vitamins (class table), haem and non-haem iron, dehydration (definition lists). Bold-defined since fix round 1: exercise-associated hyponatraemia (inside the "Over-hydration" definition-list entry) and phytates (iron enhancers/inhibitors table, which is a comparison table, not a definition table).

## Owner terms not occurring in the chapter

None: all 33 terms that term-ownership.md assigns to this chapter occur and are defined.

Terms owned elsewhere that occur here, left unbolded: peak bone mass (Childhood & Adolescence; plain gloss), hypertension (Cardiovascular Disease & Hypertension; plain gloss), hyperkalaemia (Chronic Kidney Disease; plain gloss), osteoporosis (Bone & Joint Health; plain gloss), My Healthy Plate and Nutri-Grade (Why Nutrition Matters), dementia (Brain Health & Dementia; used only in the pellagra "3 Ds").

## Fix round 1

Applied all 4 blockers, all 3 majors and all 25 minors from the verifier. No case change this round.

### Chapter (04-micronutrients-hydration.qmd)

Content fixes (before -> after, reason):

| Location | Before | After | Reason |
|---|---|---|---|
| Water, definition list | "Exercise-associated hyponatraemia: The over-hydration end of the range, rarer than dehydration but real: a dangerously low blood sodium caused by drinking only plain water ..." | "Over-hydration: Rarer than dehydration, but real: drinking only plain water in large amounts during endurance exercise can cause dangerous **exercise-associated hyponatraemia** (low blood sodium)." | Blocker: restore HEAD's label and hedge ("can cause"); EAH is not defined by one cause or by severity |
| Water, Check yourself (marathon) | "can cause exercise-associated hyponatraemia, a dangerously low blood sodium" | "can cause dangerous exercise-associated hyponatraemia (low blood sodium)" | Same error carried into the answer; aligned with the corrected entry |
| Singapore picture, P3 | "This is the same label-led logic ... change the food supply instead of relying on each individual." | "The approach follows the same label-led logic ... change the food supply as well as individual habits." | Blocker: restore HEAD's "both" meaning (HEAD: "not just the individual"); vague "This" opener. The minor's alternative wording ("not only each individual's choices") was not used because the blocker's wording avoids the not-only antithesis |
| Vitamin C colds callout | "The small benefit comes from regular intake, not from megadoses." | sentence removed here; "What helps is regular intake, not megadoses." restored after the B6/vitamin C harm sentence in "Are more vitamins healthier?" | Major: the rewrite had turned general dosing advice into an evidence claim about the Cochrane result; the sentence now sits with the dose-harm sentence it followed in HEAD |
| SSaSS callout | "Four caveats limit how widely the result applies:"; close "Salt substitutes are therefore **not blanket advice**." | "Four caveats temper the result:"; close "... **not blanket advice**, and the trial must be read together with its caveats." | Major: open-label/cluster design is internal validity, potassium mediation is mechanism; HEAD's appraisal point restored |
| Iodine P2 | "rising plant-based eating, which cuts out the main sources" | "which reduces intake of the main sources" | Overstated (plant-based patterns often include dairy and eggs) |
| Iodine P2 | "Iodised salt should therefore stay the kitchen default." | "Keeping iodised salt as the kitchen default guards against both." | Prescriptive "should" in exposition (§11g) |
| Check yourself (sodium/potassium) | "at least 3,510 mg a day), which fruit and vegetables ... supply naturally." | "at least 3,510 mg a day); fruit and vegetables ... are its natural source." | Answer went beyond the chapter text |
| Calcium P2 | "binds calcium and stops it being absorbed"; "Spinach is the exception among greens" | "binds calcium and reduces its absorption"; "Spinach is the main exception" | Gloss overstated; matching glossary row corrected above |
| Calcium P1 | "...drawn on later. About 90% of peak bone mass ..." (two sentences, one key) | "...which works as a bank, with deposits made early in life and drawn on later: about 90% of peak bone mass ... around age 30 [@nofPeakBoneMass2016]." | Citation scope: rejoined so the 99%/bank claims share @nofPeakBoneMass2016 as in HEAD (repeating the key would change the multiset) |
| Close | "for almost every vitamin and mineral." | "for almost every vitamin and mineral here." | Scope restored from HEAD |
| Check yourself (iron) | "well absorbed whatever else is in the meal" | "well absorbed and little affected by the rest of the meal" | Answer overstated the chapter |
| Check yourself (calcium) | "and that reserve is what protects against fractures decades later" | "and that protects against fractures decades later" | Implied the reserve is the only protection |
| Learning objectives | "a vitamin's structure predicts its storage" | "relates to its storage" | Objective overstated the chapter ("can often be seen") |
| Learning objectives | "... and the groups at risk, and refer." | "... and the groups at risk." | Chapter does not teach referral (§11e, Part I) |
| Beriberi/pellagra callout | "Pellagra, niacin (B3) deficiency, is remembered as ... In both diseases, the way food was processed changed which disease a population got." | "Pellagra, niacin (B3) deficiency, appears in maize-dependent diets and is remembered as ... In both diseases, how a population's staple food was processed affected whether the deficiency appeared." | Awkward close; the maize fact comes from the chapter's own B-vitamin table. Used "affected" (closer to HEAD's "changing") instead of the verifier's "determined" |
| Singapore picture P2 | "3,620 mg/day" | "3,620 mg a day" | Unit consistency |

Style-only fixes:
- Iron table: "**Phytates** (compounds that bind iron)" bolded at its defining use (owner term; a comparison table, not a definition table). The later zinc mention stays plain.
- Chapter map: "thirst and ADH" -> "thirst and antidiuretic hormone" (abbreviation used before its definition).
- Vitamin K sentence (~40 words) split into two; iron bioavailability sentence split, with the *Digestion & Absorption* pointer as its own parenthetical sentence.
- "worth recognising" tic: mineral list intro -> "each have a signature role:"; urine-colour sentence -> "problems lie at both ends of the range:" (koilonychia/pica phrasing kept). "matter" tic: "the foods eaten with it matter:" -> "can increase or reduce how much is absorbed:"; "Diet matters locally too:" -> "Low intake adds to the concern:".
- Close: imperative slogan -> "The plate comes before the pillbox, and supplements are kept for people with an identified need."

### Structure island (micronutrients.mol.yml)
- Retinol note: "which in early pregnancy are teratogenic" -> "which in early pregnancy can cause birth defects" (term not yet defined at that point; plain-text YAML cannot carry a gloss).

### Quiz (micronutrients-hydration.quiz.yml)

| Location | Before | After | Reason |
|---|---|---|---|
| q2a feedback | "Thiamine is given urgently, before anything else, to prevent permanent damage." | "Thiamine is given urgently to at-risk drinkers to prevent permanent damage." | Blocker: unlogged safety overstatement (implied before resuscitation or glucose) |
| q9a feedback | "Iodising salt is what has pushed iodine deficiency out of most of the world, so ..." | "Iodised salt is an important iodine source, so ..." | Blocker: the round-0 "contradiction" fix is withdrawn (no contradiction existed); HEAD's logic restored without "key". Its row is removed from the content-fix table above |
| q6c feedback | "reduces non-haem iron absorption, so a supplement with the meal would hinder, not help." | "can reduce non-haem iron absorption, so a supplement with the meal will not help and may hinder." | Major: HEAD's hedges restored |
| q2c feedback | "and does not cause acute confusion." | "and does not explain this acute confusion." | Broadened claim (severe deficiency with hypocalcaemia can cause confusion) |
| q7c feedback | "she is not on metformin" | "she is not described as taking metformin" | The stem does not state her medicines |
| q5a option | "Strict vegans, older adults and metformin users" | "Vegans, older adults and long-term metformin users" | "long-term" restored (the chapter's risk group). Deviation from the verifier's text: "Strict" dropped to keep the option near the distractors' length (50 vs 36/39 characters; the verifier's version would be 57); "vegans" matches the chapter ("vegans and strict vegetarians") |
| q5a feedback | "All three are recognised at-risk groups: B12 is essentially absent from plant foods, and older adults ... are also at risk." | "B12 is essentially absent from plant foods, which puts vegans at risk; older adults and people on long-term metformin are the other recognised at-risk groups." (folate sentence kept) | Circular reasoning |
| q4a option | "Vitamin C (scurvy)" | "Vitamin C" | Length and specificity cue; the feedback already names scurvy |
| q11c option + feedback | "Fresh fruit" / "Fresh fruit is low in sodium and is a good source of potassium." | "Fresh fruit and vegetables" / "Fresh fruit and vegetables are low in sodium and are good sources of potassium." | Option-length mismatch |

First words re-checked: q5a now opens "B12" (between "Night" and "Animal"), q9a now "Iodised" (between "Kai-lan" and "Most"); no two consecutive feedback strings share an opening word.

### Gate after round 1
- Citations: 32 keys, multiset identical to HEAD (diff empty). Islands 3 -> 3; figures 5 -> 5; tables 3 -> 3; callouts 9 -> 17 (same as round 0: +1 Learning objectives, +6 Check yourself, +1 Optional). All HEAD {#fig-} ids present (HEAD had no {#sec-} ids).
- Copy audit (`--you`, all four files): 0 flags.
- YAML: quiz, structure and case load with js-yaml. validate-cases: all OK (case not changed this round).

### Further deferred concerns (round 1)
- Beriberi/pellagra callout: the heading and closing sentence present food processing as the link for pellagra, but the chapter never explains it (how maize is processed affects the niacin available). Adding that mechanism would be new content needing a source; deferred.
- term-ownership.md still carries the old EAH and oxalate meanings ("A dangerously low blood sodium caused by..."; "blocks its absorption"); the glossary rows above are the corrected ones to use.

## Fix round 2

Applied the 1 major and all 22 minors from the verifier. Two of the minors were the same fix (the close's opening sentence), so there are 22 distinct changes. There were no blockers this round. The glossary rows for Haem iron, Non-haem iron and Teratogenic in the table above were corrected in place.

### Chapter (04-micronutrients-hydration.qmd)

Content fixes (before -> after, reason):

| Location | Before | After | Reason |
|---|---|---|---|
| Iron, definition list | "Haem iron: The iron in meat, fish and poultry. It is well absorbed ..."; "Non-haem iron: The iron in plants, eggs and fortified foods, and the only source for vegetarians. It is poorly ..." | "Haem iron: Iron bound in haem, which comes from meat, fish and poultry. It is well absorbed ..."; "Non-haem iron: Iron not bound in haem, which comes from plants, eggs and fortified foods and is the only source for vegetarians. It is poorly ... [@odsIron]." | Major. The definition-list conversion had turned HEAD's source statements ("from meat, fish, poultry") into definitions that say all iron in meat is haem, which is wrong because meat also contains non-haem iron. The glossary rows were corrected to match |
| Iron P1 | "Two forms of dietary iron differ sharply in bioavailability" | "... differ in bioavailability" | "sharply" was a new intensifier (HEAD: "not all dietary iron is absorbed equally") |
| Vitamin A P2 | "**teratogenic** (it causes birth defects)" | "(it can cause birth defects)" | The gloss stated as certain what the term carries as a capacity. It now matches the structure island. Glossary row "Teratogenic" changed to "Able to cause birth defects" so the two definitions stay the same (§11g) |
| At a glance, B12 sentence | "Vitamin B12 is the exception" | "Vitamin B12 is one exception" | HEAD's "One exception" restored |
| Check yourself (vitamin A) | "a high dose is stored, not excreted," | "a high dose is stored rather than readily excreted," | "not excreted" was absolute; now aligned with quiz q1a |
| Calcium P1 | "...fractures decades later. That reserve matters in Singapore, where hip-fracture rates are among the highest in Asia." | "...fractures decades later, and hip-fracture rates in Singapore are among the highest in Asia." | HEAD's side-by-side construction restored. The rewrite had added an inferential link to an uncited claim, which stays in the deferred log |
| Calcium P1 | One 52-word sentence: "...works as a bank, with deposits made early in life and drawn on later: about 90% ... around age 30 [@nofPeakBoneMass2016]." | "...works as a bank: deposits are made early in life and drawn on later. About 90% ... around age 30 [@nofPeakBoneMass2016]." | §11j sentence-length lint. The single key still closes the two-sentence passage, so the multiset is unchanged |
| B-vitamin table, B1 row | "Beriberi; Wernicke–Korsakoff" | "Beriberi; Wernicke's encephalopathy" | Korsakoff was never explained, and the label competed with the term the callout below bold-defines |
| Singapore picture P1 | "vitamin D insufficiency is widespread despite the climate" | "vitamin D deficiency is common despite the climate" | Terminology consistency with the cited sunny-climate callout ("Deficiency is common in Singapore despite the climate") |
| SSaSS callout, close | "and the trial must be read together with its caveats." | "and SSaSS shows why any trial must be read together with its caveats." | HEAD's general appraisal point restored. One deviation: the verifier's "the trial shows why any trial" became "SSaSS shows why any trial" to avoid repeating the noun. The meaning is the same |
| Close P1 | "For most people ..., the answer is no." | "For most people ..., a supplement is not needed." | The yes/no answer did not fit the "When does ...?" heading. Two verifier items, one fix |
| Close, last sentence | "The plate comes before the pillbox, and supplements are kept for people with an identified need." | "The plate comes before the pillbox." | The second clause restated the paragraph's own answer (§11c chapter ending, §11g section summaries). HEAD's "plate before the pillbox" phrase is kept |
| Water-soluble vitamins | Collapsed box "Optional: scurvy and the 'limeys'": "Scurvy was the classic disease of sailors, and the first-ever controlled dietary trial (Lind's citrus trial, 1747) is why British sailors became 'limeys'." (HEAD, in the Vitamin C paragraph: "It was the classic disease of sailors, and the first-ever controlled dietary trial (Lind's citrus, 1747) is why British sailors became 'limeys.'") | Cut | §11j pass 1: a historical aside is a seductive detail. It also caused signal overload (four callouts in a row after the citrus figure). The verifier's alternative, moving the colds callout above the citrus figure, was not used because it would separate the figure from the paragraph that interprets it (§11j pass 5). The text is kept here in case the author wants a sourced version |

Style-only fixes:
- Iron P1: "(Where in the gut iron is absorbed is covered in the *Digestion & Absorption* chapter.)" -> "(For where in the gut iron is absorbed, see the *Digestion & Absorption* chapter.)". Under §11g the book never acts. The wording now matches the round-0 content-fix table.
- Iron P1: "tiredness, pallor and breathlessness" -> "fatigue, pallor and breathlessness". This is now one term, matching "Beyond fatigue", the practise intro and the case (§11g: never cycle synonyms).
- Kai-lan caption: "calcium, folate and plant iron" -> "calcium, folate and non-haem iron", because the caption comes after the definition list.
- Calcium-supplement callout: "build the bone bank from diet and activity, and reserve supplements for ..." -> "the bone bank is built from diet and activity, and supplements are reserved for ...". A common-belief callout takes expository voice (§11g).
- Iron Check yourself: broken line wrap reflowed (no wording change).

### Structure island (micronutrients.mol.yml)
- Vitamin D note cut to its structural point: "Built on a modified cholesterol skeleton and, like retinol, mostly hydrocarbon, so it is fat-soluble and stored."
  - Removed: "The body makes it in skin from a cholesterol precursor using UVB light, then activates it in the liver and kidney. Like vitamin A, it can reach toxic levels from mis-dosed supplements, though not from sunlight."
  - Reason: the island renders in the at-a-glance section, before the chapter expands UVB. Both sentences also repeated chapter prose: the Vitamin D paragraph, and the paragraph beside the island ("which is why they can build up to harmful levels if over-supplemented"). This follows decision 9.
  - This applies the verifier's optional fix, which also removes the unexpanded abbreviation. The primary fix ("ultraviolet B (UVB) light") had no sentence left to apply to. Both facts remain in the chapter.

### Quiz (micronutrients-hydration.quiz.yml)

| Location | Before | After | Reason |
|---|---|---|---|
| q6a option | "Add a vitamin C-rich food and save tea for between meals" | "Add a vitamin C-rich food; have tea or coffee between meals" | Coffee restored (HEAD: "keep tea/coffee for between meals"). Length 59 characters, against 56 and 39 for the distractors |
| q12c feedback | "Salt matters: SSaSS cut stroke, cardiovascular events and death. ..." | "SSaSS showed real benefit: the substitute cut stroke, cardiovascular events and death. ..." | "Salt matters" credited the result to salt, but the chapter attributes most of the blood-pressure effect to the added potassium. HEAD: "It showed real benefit" |

First words re-checked: q12 now opens SSaSS, The, SSaSS, after q11's "Fresh". No two consecutive feedback strings share an opening word.

### Case (iron-deficiency-aisha.case.yml)
- end-good body: "When and how to refer is taught in the *Interprofessional Practice & Referral* chapter." -> "(For when and how to refer, see the *Interprofessional Practice & Referral* chapter.)". The reference is now a parenthetical, so the chapter is no longer the agent (§11d/§11g). This replaces the wording in the round-0 content-fix row (case, end-good body).

### Gate after round 2
- Citations: 32 keys and 33 uses; the multiset is identical to HEAD (diff empty).
- Islands 3 -> 3. Figures 5 -> 5, with all five #fig- ids present. Tables 3 -> 3.
- Callouts 9 -> 16: +1 Learning objectives and +6 Check yourself. The round-0 Optional box is cut.
- No HEAD {#sec-} or {#fig-} id is missing.
- Copy audit (`--you`, all four files): 0 flags.
- YAML: the structure, quiz and case files load with js-yaml. validate-cases exits 0, with iron-deficiency-aisha.case.yml OK.
- Not done (forbidden): render, TOC check, anchor check.

### Deferred concerns (round 2 updates)
- Hip-fracture claim (Calcium P1): restored to HEAD's construction. The concern above still stands: the claim is uncited and may conflate figures with the *Bone & Joint Health* chapter's "among the highest in Asia", which refers to calcium intake.
- Optional-box concern (Lind 1747 / "limeys"): moot now that the box is cut. If the author restores it, it needs a source and corrected history.
- term-ownership.md still carries the old meanings for Haem iron ("The iron in meat, fish and poultry"), Non-haem iron ("The iron in plants, eggs and fortified foods") and Teratogenic ("Causing birth defects"). Use the corrected glossary rows above.
- The new haem/non-haem definitions rely on "haem", which no earlier chapter glosses. No gloss was added, because the sentence before the list ties iron to haemoglobin. The author may want a one-line gloss of haem.
