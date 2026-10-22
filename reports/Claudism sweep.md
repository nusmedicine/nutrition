# Claudism sweep (2026-10-22)

> **Outcome.** Author chose: Part II "internal and external factors"; scope = all majors + every recurring tic
> (380 applied). Six adversarial verifiers then reviewed every changed hunk and raised 41 issues (5 blockers:
> three epigraph blockquotes broken by re-wrapping, one Healthier SG enrolment fact changed, one macronutrients
> caveat changed); all were fixed. Over-corrections reverted: "disproportionate" benefit (obesity case), "the
> whole dietary pattern matters more than any single nutrient" (bone). Exercise-and-bone claims aligned
> book-wide to "a key modifiable factor". AUTHOR.md gained the business-word and hyperbole rules;
> `scripts/copy-audit.mjs` gained `business` and `superlative` checks. Minor taste-level items in the appendix
> were not applied.

Read-only sweep of every chapter, quiz, case, island YAML and visible island text for three kinds of AI-writing tic. **Nothing has been changed yet.** 718 items: 205 major, 513 minor.

| Category | Major | Minor | What it is |
|---|---|---|---|
| Business / journalism jargon | 130 | 105 | *lever(s)*, *high-yield*, *drivers* (= causes), *headline* (= main result), *anchor(s)*, *toolkit*, *payoff*, *move* (= clinical step) |
| Odd phrasing | 52 | 328 | private metaphors and literary turns: *quieter*, *lands a verdict*, *the arithmetic quietly turns against them*, *the hormone story*, slogan closers (*X beats Y*), *the real X* |
| Hyperbole | 23 | 80 | unsupported superlatives: *No single lever matters more*, *the single biggest determinant*, *the strongest modifiable factor*, *more than any* |

## The recurring tics (counts of flagged items containing them)

| Tic | Items | Standard replacement |
|---|---|---|
| lever / levers | 70 | factor, modifiable factor, measure, change, intervention, control (islands) |
| driver(s) meaning cause | 52 | cause, risk factor, factor, contributor |
| high-yield / highest-yield / outyields | 40 | most useful, most informative, important |
| unsupported superlatives (single biggest/strongest/more than any/most important) | 35 | a major, an important, one of the main (or cite the source) |
| move (a clinical step) | 32 | step, approach, response, change |
| anchor(s) / anchored | 27 | based on, everyday comparisons, reference point |
| "the real X" | 16 | drop "real", or "what does help" |
| "X beats Y" slogans | 16 | plain comparison ("works better than") |
| headline (a study's result) | 15 | main result, best-known result (literal news headlines kept) |
| "fix" | 13 | treat, correct, address |
| land(s) | 12 | reach, apply, be received |
| story (= explanation) | 11 | explanation, evidence, account |
| quiet / quietly | 8 | gradual, without symptoms, or drop |
| payoff / pays off / buys | 8 | benefit, effect |

## Worst examples

**Hyperbole**
- Preface: "No single lever matters more to it than nutrition." → "Nutrition is one of the main modifiable influences on it."
- Preface: "Diet is one of the most powerful levers a doctor has" → "one of the main modifiable risk factors a doctor can address"
- Childhood: peak bone mass "is the single biggest determinant of how much bone a person can afford to lose" (the next sentence credits genetics with most of it) → "a major determinant"
- Bone: "Mechanical loading: the strongest modifiable factor" (one small trial) → "a key modifiable factor"
- CKD: "the country's most important CKD-prevention strategy" → "a central CKD-prevention strategy"

**Odd phrasing / private metaphor**
- Preface: "The second is easy to neglect, because it is quieter, slower and rarely an emergency."
- Evidence vs hype: "Appraisal is calibration: a fixed routine that lands a proportionate verdict."
- Appetite: "so the arithmetic quietly turns against them"; "That arithmetic is real, but it is not free."
- Obesity: "the hormone story suggests a direction, not a proven mechanism"; "Central fat rarely travels alone."
- BoneBank island: "the youth deposit pays off most"
- Integrative metabolism: "The question is the wrong shape."; "no metabolic catastrophe in a missed meal, and no metabolic magic in a fasting schedule"
- Behaviour change: "One change the patient chose beats ten you prescribed."; "A change that fits the family meal survives; one that fights it fails."
- Childhood: "getting that wrong is where the harm lives"; "a slow-motion bone-health emergency"
- Referral case: "a referral complete enough to be a head start, not a shrug"

**Business jargon**
- Part II driver table: "Internal drivers" / "External levers"; Pregnancy: "The levers the woman and her clinician can pull"
- Dietary assessment: "One probe outyields all the others locally: drinks."; "The highest-yield question is often the one not asked" (also in the DietHistory island, 4×)
- Islands: "Move the levers · watch when the account runs low"; "Scrub age · toggle the levers"; screen-reader label "Bone-building levers"
- Gut test-kit case: "Redirect to the real lever, fibre diversity" (7× in the case)
- Interprofessional: "toolkit" (2×), "The headline … results"

**Also caught (not style)**
- Macronutrients L137: "These are associations, not proof of cause: the benefit is real" contradicts its own caveat.
- Case player: developer text visible to students: "continues seamlessly (graceful fallbackGoto)".

## Decisions needed
1. **Part II driver vocabulary.** The table rows ("Internal drivers" / "External levers"), the "<stage> at a glance: two drivers" headings, the glossary entries and the Part II intro all use it. Proposed: "Internal factors" / "External factors" and "<stage> at a glance: internal and external factors".
2. **Scope.** All 718, or the 205 majors plus every instance of the recurring tics above (minors that are only taste left alone)?

## Appendix: every finding, by file


### book/cases/appetite-defended-weight.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 39 | phrasing | Regain is the predicted output of a regulated system: biology reasserting itself, not a moral failing. | Regain is the predicted output of a regulated system, not a moral failing. |
| 45 | phrasing | discipline alone is fighting physiology. | discipline alone cannot fully counter these physiological changes. |
| 108 | phrasing | willpower alone is fighting body-weight regulation. | willpower alone cannot fully counter body-weight regulation. |

### book/cases/bmr-estimation.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 117 | phrasing | energy balance is actively regulated, not free. | energy balance is actively regulated. |
| 146 | phrasing | A shaky energy estimate makes for shaky advice. | An inaccurate energy estimate leads to inaccurate advice. |

### book/cases/common-questions.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 6 | jargon | Give quality guidance, anchor to My Healthy Plate, | Give quality guidance, base it on My Healthy Plate, |
| 43 | phrasing | isn't a proven long-term win | has no proven long-term benefit |
| 55 | phrasing | A flood of refined starch is what nudges glucose up | Large amounts of refined starch raise glucose |
| 78 | phrasing | Moderation, and mind the company they keep. | Eat them in moderation, and watch what they are served with. |
| 140 | jargon | Anchor advice to My Healthy Plate, correct mistaken beliefs | Base advice on My Healthy Plate, correct mistaken beliefs |
| 176 | jargon | Anchor advice to My Healthy Plate and Nutri-Grade. | Base advice on My Healthy Plate and Nutri-Grade. |

### book/cases/dairy-acne-tiktok.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 87 | phrasing | This stopped being about acne. | The priority is now her eating, not her acne. |
| 114 | phrasing | Two habits carry this case: | This case tests two habits: |
| 126 | jargon | You traced the viral claim to its real evidence | You traced the viral claim to its actual evidence |

### book/cases/dementia-feeding.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 117 | phrasing | The through-line: recognise that weight loss is part of advanced dementia | In summary: recognise that weight loss is part of advanced dementia |

### book/cases/dementia-prevention.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 53 | jargon | fatalism misses the real, actionable risk factors. | fatalism misses the actionable risk factors. |
| 72 | jargon | That repeats the headline as fact. | That repeats the online claim as fact. |
| 116 | phrasing | The through-line: **lead with vascular risk** | In summary: **lead with vascular risk** |
| 144 | jargon | repeating the '50%' headline as fact | repeating the '50%' claim as fact |

### book/cases/early-t2d-remission.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 112 | phrasing | Total diet replacement is a supervised programme, not a solo project. | Total diet replacement is a supervised programme, not something to do alone. |

### book/cases/gut-microbiome-test-kit.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 5 | jargon ★ | Redirect to the real lever, fibre diversity, instead of the supplements a kit upsells. | Redirect to what does help, fibre diversity, instead of the supplements a kit upsells. |
| 80 | jargon ★ | Fibre diversity is the evidence-based lever, and most people fall short | Fibre diversity is the evidence-based change, and most people fall short |
| 86 | jargon ★ | No single food does this; the lever is variety of fibre across the week | No single food does this; what matters is variety of fibre across the week |
| 91 | jargon ★ | Diverse plants are the lever. | Eating diverse plants is what helps. |
| 126 | phrasing | Two things to hold together. | Two points apply. |
| 128 | jargon ★ | the real lever is fibre diversity (many different plants) | what helps is fibre diversity (many different plants) |
| 139 | jargon ★ | the real lever is **eating a wider variety of plants** | what helps is **eating a wider variety of plants** |
| 147 | jargon ★ | fibre diversity is the real, food-first lever. | fibre diversity is the food-first change that helps. |
| 156 | jargon ★ | the real lever is **fibre diversity** | what helps is **fibre diversity** |

### book/cases/infancy-feeding.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 42 | phrasing | Watch the baby, not the calendar. | Readiness cues matter more than the exact date. |
| 177 | phrasing | turned the allergen worry around | corrected the allergen worry |

### book/cases/iron-deficiency-aisha.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 62 | jargon | heavy menstrual bleeding is a major driver | heavy menstrual bleeding is a major cause |
| 126 | jargon | monthly blood loss is a major driver of iron deficiency in women of reproductive age. | monthly blood loss is a major cause of iron deficiency in women of reproductive age. |

### book/cases/madam-lim-bone.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 47 | hyperbole | but the everyday source is what matters most. | but the everyday food source comes first. |
| 78 | phrasing | Oxalate locks spinach's calcium away, | Oxalate binds spinach's calcium, |
| 202 | phrasing | Bioavailability beats content: | Bioavailability matters more than content: |

### book/cases/mdm-lim-widowed.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 41 | phrasing | The loose cheongsam is the signal that ageing in health has tipped into something to act on. | The loose cheongsam signals that healthy ageing has become a problem to act on. |
| 142 | hyperbole | The most important modifiable factor is that she eats alone | A key modifiable factor is that she eats alone |
| 163 | hyperbole | Eating alone is a powerful, modifiable risk factor | Eating alone is an important, modifiable risk factor |

### book/cases/mdm-tan-malnutrition.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 44 | jargon | are the social and clinical drivers that mark someone out for screening. | are the social and clinical risk factors that mark someone out for screening. |
| 55 | jargon | the strongest signals here are the social drivers and the weight loss | the strongest signals here are the social risk factors and the weight loss |

### book/cases/menopause-soy.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 67 | phrasing | The rodent-oestrogen story doesn't translate to humans. | The rodent oestrogen findings don't translate to humans. |
| 117 | jargon ★ | the right lever | the right intervention |
| 124 | phrasing | a symptom diet can't touch | a symptom diet does not affect |

### book/cases/mr-chua-cvd.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 57 | jargon ★ | is the high-prevalence, high-yield situation where lifestyle-first counselling and a proper risk assessment change the trajectory. | is the common situation in which lifestyle-first counselling and a proper risk assessment can lower his risk. |
| 89 | phrasing | the table-salt tip is necessary but barely moves Mr Chua | the table-salt tip is necessary but does little for Mr Chua |
| 136 | phrasing | and no amount of good advice elsewhere buys it back. | and good advice elsewhere does not make up for it. |
| 150 | phrasing | the old 'protective' story is confounding. | the old 'protective' finding reflects confounding. |

### book/cases/mr-lim-ckd.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 102 | phrasing | and no amount of good advice elsewhere buys it back. | and good advice elsewhere does not make up for it. |
| 195 | phrasing | so in CKD they are an absolute avoid. | so in CKD they must be avoided completely. |

### book/cases/mr-tan-joint.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 6 | hyperbole | the strongest thing that helps. | the best-supported intervention. |
| 86 | phrasing | Consumer messaging can outrun the evidence; trust the guidance. | Consumer messaging can overstate the evidence; trust the guidance. |
| 88 | phrasing | Consumer messaging can outrun the evidence; trust the clinical guidance. | Consumer messaging can overstate the evidence; trust the clinical guidance. |
| 112 | jargon ★ | that's the high-yield plan, not a supplement. | that's the most useful plan, not a supplement. |
| 175 | phrasing | deflate the hype | correct the overstated claims |
| 195 | phrasing | recognise that consumer messaging can outrun the evidence | recognise that consumer messaging can overstate the evidence |

### book/cases/mr-tan-obesity.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 127 | jargon | are the real modifiable factors here. | are the modifiable factors here. |
| 141 | phrasing | A strong answer elsewhere can't buy back reaching for a drug first. | A strong answer elsewhere does not make up for reaching for a drug first. |
| 163 | hyperbole | yields a disproportionate cardiometabolic benefit | yields a worthwhile cardiometabolic benefit |
| 170 | phrasing | bans breed rebound and dent the relationship. | bans tend to cause rebound and can harm rapport. |
| 203 | jargon ★ | Aim for a modest, high-yield ~5–10% loss | Aim for a modest, worthwhile ~5–10% loss |

### book/cases/pillar-mapping-mr-tan.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 5 | jargon | Choose dietary advice that fits the patient's real food environment. | Choose dietary advice that fits the patient's actual food environment. |
| 95 | phrasing | so diet advice alone struggles while those two keep pushing intake up. | so diet advice alone is less effective while those two keep pushing intake up. |
| 101 | jargon ★ | it is among the largest modifiable levers | it is among the largest modifiable factors |
| 152 | jargon | Choose a swap that fits his real food environment. | Choose a swap that fits his actual food environment. |
| 184 | jargon | chose advice that fits his real food environment | chose advice that fits his actual food environment |
| 200 | phrasing | a more environment-specific swap would land better. | a more environment-specific swap would work better. |

### book/cases/prediabetes-counseling.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 55 | jargon ★ | Which single change is the most realistic, high-yield first goal? | Which single change is the most realistic and useful first goal? |
| 107 | phrasing | a more patient-centred approach would land better. | a more patient-centred approach would work better. |

### book/cases/pregnancy-gdm.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 177 | phrasing | You offered the test that feeling-well would have talked you out of | You offered the test even though she felt well |

### book/cases/rachel-athlete.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 54 | phrasing ★ | it can signal under-fuelling that is quietly harming her bones. Dismissing it misses a slow-motion emergency. | it can signal under-fuelling that is harming her bones without symptoms. Dismissing it misses a serious, progressive problem. |

### book/cases/rahmat-shift-runner.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 32 | phrasing | and where the one real red flag is hiding. | and which issue is the one real red flag. |
| 102 | jargon ★ | the useful lever is meal timing, weighted toward the daytime. | the useful change is meal timing, weighted toward the daytime. |
| 125 | jargon ★ | Activity is a weak lever on weight once excess has accumulated | Activity has a weak effect on weight once excess has accumulated |
| 167 | phrasing | weight creep yields to small, steady habits | weight creep responds to small, steady habits |
| 181 | hyperbole | recognise the one thing that matters. | recognise the one real red flag. |

### book/cases/refer-or-advise.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 63 | phrasing | turn a hand-off into a head start. | give the dietitian what they need to begin. |
| 126 | phrasing ★ | wrote a referral complete enough to be a head start, not a shrug. | wrote a referral complete enough for the dietitian to act on. |

### book/cases/sim-bone-fracture-mdm-devi.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 10 | jargon | Name the real modifiable factors: | Name the modifiable factors that matter: |
| 103 | jargon | Reframe 'more calcium' to food-first plus the real modifiable factors | Reframe 'more calcium' to food-first plus the modifiable factors that matter |

### book/cases/sim-ckd-protein-encik-rahman.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 11 | phrasing | star fruit/belimbing is an absolute avoid in kidney disease | star fruit/belimbing must be avoided completely in kidney disease |
| 91 | phrasing | star fruit and belimbing are an absolute avoid in kidney disease | star fruit and belimbing must be avoided completely in kidney disease |
| 92 | phrasing | the National Kidney Foundation runs the education a referral plugs into | the National Kidney Foundation runs the education programme that a referral links to |

### book/cases/sim-common-questions-mr-lim.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 72 | jargon | the cholesterol in eggs is not the main driver for most people | the cholesterol in eggs is not the main influence on blood cholesterol for most people |

### book/cases/sim-dementia-prevention-mdm-goh.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 11 | phrasing | risk factors that carry real weight | risk factors that also matter |
| 88 | phrasing | are exactly where the work is. | are what to address first. |
| 89 | phrasing | Brain supplements are the clearest 'save your money' advice: | Brain supplements are not worth the money: |
| 90 | phrasing | Non-dietary risk factors carry real weight: | Non-dietary risk factors also matter: |

### book/cases/sim-frailty-undernutrition-mr-chua.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 93 | jargon ★ | is one of the highest-yield questions | is one of the most useful questions |

### book/cases/sim-pillar-mr-tan.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 94 | phrasing | a single concrete, environment-specific swap would land and stick better. | a single concrete, environment-specific swap is more likely to be adopted and kept up. |

### book/cases/three-households-one-plate.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 5 | hyperbole | Tackle the two biggest local gaps | Tackle two major local gaps |
| 41 | jargon ★ | are the two highest-yield local moves. | are the two most useful local changes. |
| 64 | phrasing | so portion and the vegetable half do the work. | so the changes come from portion size and the vegetable half. |
| 117 | phrasing | This overclaims on every axis: | This overclaims in three ways: |
| 122 | jargon ★ | a reanalysis that upheld the headline | a reanalysis that upheld the main result |
| 137 | phrasing | The thread runs through all three kitchens: | The same principle applies in all three kitchens: |
| 139 | jargon | target the two real gaps | target the two main gaps |
| 150 | jargon ★ | made the two highest-yield local changes | made the two most useful local changes |
| 160 | jargon ★ | The two highest-yield local swaps recur in every kitchen | The two most useful local swaps recur in every kitchen |
| 171 | jargon | pair the headline with its caveat | state the main result with its caveat |
| 177 | jargon | Target the two real local gaps | Target the two main local gaps |
| 178 | jargon ★ | a headline alone is how hype starts. | stating the benefit alone overstates it. |

### book/cases/two-kopi-a-day.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 53 | phrasing | A lecture is the righting reflex in its purest form: | A lecture is a clear example of the righting reflex: |
| 71 | phrasing | He just handed you real motivation and the righting reflex buries it. | He has just voiced his own motivation, and instructing him now overrides it. |
| 158 | phrasing | small and chosen beats big and imposed. | a small, chosen goal works better than a large, imposed one. |

### book/cases/weight-gain-bubble-tea.case.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 5 | jargon ★ | Ask the highest-yield question (drinks) | Ask the most informative question (drinks) |
| 63 | jargon ★ | This is the highest-yield question locally, and here it pays off: | This is the most informative question locally, and here it is revealing: |
| 63 | hyperbole | Sugary drinks are the biggest hidden source. | Sugary drinks are a major hidden source. |
| 75 | jargon ★ | they are not the highest-yield probe here | they are not the most informative question here |
| 75 | hyperbole | the bigger contributor by far. | the larger contributor. |
| 98 | jargon ★ | Avoiding the highest-yield issue helps no one. | Avoiding the most important issue helps no one. |
| 147 | jargon ★ | asked the highest-yield question and uncovered the bubble tea | asked the most informative question and uncovered the bubble tea |
| 157 | jargon ★ | the highest-yield, most-often-skipped question in a local diet history. | the most informative, most-often-skipped question in a local diet history. |
| 174 | jargon ★ | Drinks are the highest-yield probe; ask with permission before advising. | Drinks are the most informative question; ask with permission before advising. |

### book/chapters/01-why-nutrition-matters.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 18 | jargon ★ | the two tools used as counselling anchors (My Healthy Plate, Nutri-Grade). | the two tools used in counselling (My Healthy Plate, Nutri-Grade). |
| 35 | phrasing | These have not gone away, but they have been overtaken. | These have not gone away, but they are no longer the main causes of death. |
| 39 | phrasing | NCDs are, in large part, slow diseases of daily living, driven by a handful of modifiable behaviours: | NCDs develop slowly and are, in large part, linked to a handful of modifiable behaviours: |
| 57 | phrasing | A clinician who can only treat the acute crisis arrives late by definition. | A clinician who only treats the acute crisis intervenes late in the disease. |
| 57 | hyperbole | The larger opportunity, and the harder skill, is to prevent and slow chronic disease, and nutrition is where that work begins. | The larger opportunity, and the harder skill, is to prevent and slow chronic disease, and nutrition is a central part of that work. |
| 63 | phrasing | A clinician who can only treat the acute crisis therefore arrives late, so the larger opportunity is to prevent and slow chronic disease. | A clinician who only treats the acute crisis therefore intervenes late, so the larger opportunity is to prevent and slow chronic disease. |
| 64 | hyperbole | which is why that preventive work begins with nutrition. | which is why nutrition is a central part of that preventive work. |
| 104 | hyperbole | Of the six pillars, nutrition is central: it connects to each of the other five, in both directions, | Nutrition is linked to each of the other five pillars, in both directions, |
| 120 | hyperbole | so social context can entrench or transform a diet. | so social context can entrench or change a diet. |
| 137 | phrasing | A persistent trap for patients and doctors alike is **single-nutrient reductionism**, the search for one villain (carbohydrate, fat, gluten) or one "superfood". | A common error among patients and doctors alike is **single-nutrient reductionism**, the search for one nutrient to blame (carbohydrate, fat, gluten) or one "superfood". |
| 152 | jargon ★ | PREDIMED's headline comes from a 2018 re-analysis, | PREDIMED's reported result comes from a 2018 re-analysis, |
| 224 | jargon ★ | Singapore translates the guidelines into two tools that clinicians use as counselling anchors: | Singapore translates the guidelines into two tools that clinicians use in counselling: |
| 248 | jargon | then choose advice that fits his real food environment. | then choose advice that fits his actual food environment. |

### book/chapters/04-micronutrients-hydration.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 6 | phrasing ★ | Singapore's signature problem with them is an excess: too much sodium. | in Singapore the main problem with them is an excess: too much sodium. |
| 67 | phrasing ★ | What helps is regular intake, not megadoses. For most people, food beats pills. | Regular intake is what is needed, not megadoses, and for most people food is a better source than supplements. |
| 70 | phrasing | Minerals and trace elements each have a signature role: | Each mineral and trace element has a main role: |
| 83 | hyperbole | vitamins A and D, matter most in practice. | vitamins A and D, are the main concerns in practice. |
| 94 | phrasing | which is why it demands strict pregnancy prevention. | which is why it requires strict pregnancy prevention. |
| 127 | hyperbole | are among the most recognisable syndromes in medicine. | are classic, recognisable syndromes. |
| 165 | phrasing | so the advice to take folic acid before conception carries more of the weight here. | so the advice to take folic acid before conception is all the more important here. |
| 166 | phrasing | Food sources live up to the name (Latin *folium*, leaf): dark leafy greens, beans and legumes. | The name comes from Latin *folium*, leaf; food sources include dark leafy greens, beans and legumes. |
| 181 | phrasing ★ | **Vitamin C** builds collagen, the body's "glue", so its deficiency, **scurvy**, is a disease of things falling apart: | **Vitamin C** is needed to make collagen, so its deficiency, **scurvy**, weakens connective tissue: |
| 226 | phrasing | its absorption swings with what else is on the plate | its absorption varies with the rest of the meal |
| 248 | phrasing | Bone mass is built early in life and drawn on later, which is why bone is often likened to a bank. | Bone mass is built early in life and drawn on later. |
| 277 | phrasing | Iodine's single job is to build thyroid hormone, which sets metabolic rate and drives foetal brain development. | Iodine is needed to make thyroid hormone, which regulates metabolic rate and is essential for foetal brain development. |
| 282 | phrasing ★ | Iodising salt has pushed iodine deficiency out of most of the world. Two trends can let it quietly return: | Salt iodisation has made iodine deficiency much less common worldwide. Two trends could allow it to return: |
| 291 | phrasing | Iodised salt: a cheap population-wide fix for iodine deficiency; | Iodised salt: a low-cost population-wide measure against iodine deficiency; |
| 376 | phrasing | Supplements earn their place for specific, identifiable needs: | Supplements are justified for specific, identifiable needs: |
| 385 | phrasing | Food comes first; supplements are for an identified need. | Food is the first-line source; supplements are for an identified need. |
| 390 | phrasing ★ | Three micronutrient problems are sharply local: | Three micronutrient problems are particularly relevant in Singapore: |
| 394 | phrasing ★ | The signature micronutrient problem in Singapore, however, is an excess: too much sodium. | The main micronutrient problem in Singapore, however, is an excess: too much sodium. |
| 402 | phrasing | The population response is policy, not willpower alone. | The population response relies on policy as well as individual effort. |

### book/chapters/06-dietary-assessment.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 11 | hyperbole | explain why the drinks question yields the most in a Singapore diet. | explain why the drinks question is especially informative in a Singapore diet. |
| 77 | phrasing | \| Method \| What it is \| Strength \| Its signature bias \| | \| Method \| What it is \| Strength \| Characteristic bias \| |
| 93 | jargon ★ | then probe the high-yield areas: | then probe the most informative areas: |
| 97 | hyperbole ★ | One probe outyields all the others locally: drinks. | Locally, the most useful single probe is drinks. |
| 99 | hyperbole | and they are the question most often skipped. | and they are a question that is often skipped. |
| 108 | jargon ★ | ## The highest-yield question is often the one not asked | ## The most useful question is often the one not asked |
| 110 | jargon | Ask specifically, with everyday anchors ("how big, a *rice bowl*? two scoops?"), | Ask specifically, with everyday comparisons ("how big, a *rice bowl*? two scoops?"), |
| 111 | hyperbole | and you uncover far more than an open "so, how's your diet?" ever will. | and you uncover more than an open "so, how's your diet?" does. |
| 127 | phrasing | turns the label into a one-glance judgement. | summarises the label in a single grade. |
| 135 | phrasing | Nutri-Grade works as a nudge, not a verdict. | Nutri-Grade works as a nudge, not as a judgement on the whole diet. |
| 137 | phrasing | A grade moves one choice; it does not fix a diet. | A grade influences one choice; it does not change the whole diet. |
| 138 | phrasing | an "A" drink is not a licence, and Nutri-Grade says nothing about solid food. | an "A" drink is not automatically healthy, and Nutri-Grade says nothing about solid food. |
| 142 | phrasing ★ | ## 🍜 Eating out: the one swap that lands | ## 🍜 Eating out: start with the drink |
| 143 | jargon ★ | The single highest-yield swap in a Singapore diet history is the drink. | In a Singapore diet history, the drink is usually the most useful swap. |
| 150 | phrasing | One realistic swap the patient agrees to beats a lecture on all of them. | One realistic swap the patient agrees to is more useful than a lecture on all of them. |
| 159 | jargon | everyday anchors, uncovers what people do not volunteer. | everyday comparisons, uncovers what people do not volunteer. |
| 166 | phrasing | A grade moves one choice; it does not fix a diet, so the rest of the history still needs reading. | A grade influences one choice but not the whole diet, so the rest of the history still needs reading. |
| 189 | jargon | adds an objective anchor to the history. | adds objective measurements to the history. |
| 200 | phrasing | BMI is a screen, not a verdict: | BMI is a screening measure, not a diagnosis: |
| 211 | phrasing | Unplanned weight loss earns its place in MUST for a physiological reason. | Unplanned weight loss is part of MUST for a physiological reason. |
| 214 | phrasing | The loss of that functional tissue erodes strength, immunity and recovery. | The loss of that functional tissue impairs strength, immunity and recovery. |
| 222 | jargon | ask whether the real problem is that they are eating too little, | ask whether the problem is in fact that they are eating too little, |
| 249 | phrasing | Knowing the food is half the job; the other half is the conversation, which has its own structure. | Assessing the diet is one part of the task; the conversation is the other, and it has its own structure. |
| 262 | hyperbole | The opening moves, assess and advise, are where first contact succeeds or fails. | The opening steps, assess and advise, are the focus at first contact. |
| 266 | phrasing | earns a hearing, and an unasked-for lecture does not. | invites the patient to listen, and an unasked-for lecture does not. |
| 268 | phrasing | Two rules carry most of the weight. | Two rules are central. |
| 299 | phrasing | so the idea that follows earns a hearing; an unasked-for lecture does not. | so the patient is more likely to listen to the idea that follows; an unasked-for lecture does not have that effect. |
| 327 | phrasing | so "grade your drink" is a real exercise and not a supermarket abstraction | so "grade your drink" applies to everyday purchases, not only to supermarket products |
| 328 | phrasing | The National Nutrition Survey shows what to expect before the patient says a word: | The National Nutrition Survey shows what to expect before the history is taken: |

### book/chapters/adulthood-working-life.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 6 | jargon ★ | the levers are activity, muscle, the food environment and a few small > habits. | the modifiable factors are activity, muscle, the food environment and a few small habits. |
| 38 | jargon | Adulthood at a glance: two drivers | Adulthood at a glance: internal and external factors |
| 51 | jargon | Internal drivers (inside the body) | Internal factors (inside the body) |
| 52 | jargon ★ | External levers (life and environment) | External factors (life and environment) |
| 75 | jargon ★ | Activity alone, however, is a fairly weak lever on weight once excess has accumulated, | Activity alone, however, has a fairly weak effect on weight once excess has accumulated, |
| 81 | phrasing | Adulthood is about keeping the muscle that growth built. | In adulthood, the aim is to keep the muscle built during growth. |
| 105 | phrasing | so food does the job without a powder or a 30-minute shake. | so food is enough, without a powder or a 30-minute shake. |
| 118 | jargon ★ | Because activity alone is a fairly weak lever once excess has accumulated, | Because activity alone has a fairly weak effect on weight once excess has accumulated, |
| 149 | phrasing | Caffeine, the working adult's staple, is a separate question: | Caffeine, which many working adults drink daily, is a separate question: |
| 155 | phrasing | The tropics change the advice in one place, fluid. | In the tropics, the advice changes only for fluid. |
| 171 | phrasing | Three forces dominate. | Three factors stand out. |
| 175 | jargon ★ | The hawker plate, not the home recipe, is therefore the real lever, | The hawker plate, not the home recipe, is therefore the main target for change, |
| 210 | phrasing | so it stacks on top of an eating-out diet | so its energy adds to that of an eating-out diet |
| 257 | phrasing | the practical reading is "aim for steady, not sawtooth". | the practical reading is to aim for a steady weight, not repeated loss and regain. |
| 282 | jargon ★ | The levers are therefore activity, muscle and the food environment, worked through a few durable habits. | The modifiable factors are therefore activity, muscle and the food environment, addressed through a few lasting habits. |
| 287 | hyperbole | The hawker plate is the food environment. | The hawker plate dominates the food environment. |
| 291 | jargon ★ | both practical levers to point patients toward | both practical tools to point patients toward |

### book/chapters/appetite-weight-regulation.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 3 | phrasing ★ | A lost 10 kg is so often found again because the hormones and brain circuits that regulate body > weight respond far more strongly to weight loss than to weight gain. | Weight lost by dieting is often regained because the hormones and brain circuits that regulate body > weight respond more strongly to weight loss than to weight gain. |
| 29 | jargon ★ | hunger, satiation, satiety and the levers | hunger, satiation, satiety and what affects them |
| 32 | jargon ★ | Sleep and stress: two neglected levers](#sec-sleep-stress) | Sleep and stress: two neglected influences](#sec-sleep-stress) |
| 38 | phrasing ★ | That arithmetic is real, but it is not free. | That arithmetic holds, but its terms are not freely chosen. |
| 41 | phrasing | Appetite is not a free choice laid on top of a passive body. | Appetite is not simply a matter of free choice. |
| 48 | hyperbole | can override fullness when such food is everywhere. | can override fullness when such food is readily available. |
| 49 | phrasing | Underneath it all, body weight is regulated, and the responses that oppose weight loss are far stronger than those that oppose weight gain. | Body weight itself is regulated, and the responses that oppose weight loss are stronger than those that oppose weight gain. |
| 53 | jargon ★ | A few modifiable levers (protein and fibre, portion and drink defaults, sleep and stress) do more than any exhortation to eat less. | A few modifiable factors (protein and fibre, portion and drink defaults, sleep and stress) are more useful than simply advising patients to eat less. |
| 63 | phrasing | and so can "taste" the blood for hunger and fullness hormones. | and so can detect hunger and fullness hormones in the blood. |
| 94 | phrasing | cannot act and appetite runs relentlessly high. Hunger is, in this sense, set by biology. | cannot act and appetite stays persistently high. In these patients, hunger is set by biology. |
| 110 | hyperbole | daily leptin injections transformed this: | daily leptin injections reversed this: |
| 120 | hyperbole | nothing like the transformation in the leptin-deficient children | far less than in the leptin-deficient children |
| 166 | phrasing | fibre fermented in the colon also turns up satiety. | fibre fermented in the colon also increases satiety signalling. |
| 213 | jargon ★ | through five levers: | through five factors: |
| 215 | jargon ★ | \| Lever \| Why it works \| Practical version \| | \| Factor \| Why it works \| Practical version \| |
| 223 | jargon ★ | Two studies put numbers on these levers. A striking demonstration came from protein: | Two studies quantify these effects. The first concerned protein: |
| 234 | jargon ★ | The fuller-for-longer swaps use the levers above: | The fuller-for-longer swaps use the factors above: |
| 256 | phrasing | Changing what was eaten changed how much was eaten. | The change in food composition reduced the amount eaten. |
| 270 | hyperbole | it can override fullness entirely. | it can override fullness. |
| 325 | hyperbole | The response to weight loss, however, is not in doubt. | The response to weight loss, however, is well documented. |
| 336 | phrasing ★ | than someone of the same weight who was never heavier, so the arithmetic quietly turns against them. | than someone of the same weight who was never heavier, which favours regain. |
| 351 | jargon ★ | ### Sleep and stress: two neglected levers {#sec-sleep-stress} | ### Sleep and stress: two neglected influences {#sec-sleep-stress} |
| 353 | jargon ★ | Sleep and stress are two modifiable levers on appetite | Sleep and stress are two modifiable influences on appetite |
| 394 | phrasing | because the defended range was opposed, never removed | because the drug opposes the defended range but does not remove it |
| 395 | hyperbole | Regain on stopping is the clearest demonstration that obesity is a chronic, regulated condition and that "just try harder" misreads the biology. | Regain on stopping is strong evidence that obesity is a chronic, regulated condition and that advice to "just try harder" does not fit the biology. |
| 414 | phrasing | which is why "just try harder" misreads the biology. | which is why advice to "just try harder" does not fit the biology. |
| 419 | phrasing | No. Appetite is a signalled biological drive. | No. Appetite is a biologically regulated drive. |
| 422 | phrasing ★ | is real, but it is biologically regulated, not free. | still applies, but it is biologically regulated rather than freely chosen. |
| 427 | phrasing | That environment collides with the biology of weight regulation, which is why | Combined with the biology of weight regulation, that environment is why |
| 433 | phrasing ★ | **The food environment is built for wanting.** | **The food environment encourages reward-driven eating.** |
| 436 | phrasing | the everyday form of the reward-and-cue physiology | which engages the reward and cue responses |
| 441 | jargon ★ | is a concrete environmental lever on them, | is a concrete environmental measure targeting them, |
| 445 | hyperbole ★ | **Short sleep, exam stress and shift-work stress are the norm.** | **Short sleep, exam stress and shift-work stress are common.** |
| 459 | jargon ★ | The levers are the food kept at home, portion defaults, sleep, protein and fibre, and eating more slowly. | The changes that help are the food kept at home, portion defaults, sleep, protein and fibre, and eating more slowly. |

### book/chapters/behaviour-change-counselling.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 3 | phrasing ★ | Knowing the right diet is rarely what changes a patient; the conversation is. | Knowing the right diet is rarely enough to change what a patient eats; the conversation matters as much. |
| 36 | hyperbole | The gap between "I know I should eat better" and actually doing it is where most advice fails, | The gap between "I know I should eat better" and actually doing it is where much advice fails, |
| 52 | hyperbole | operating in a food environment engineered to exploit both, not a weak will | operating in a food environment that encourages overeating, not a weak will |
| 57 | phrasing | so small-and-sustained beats big-and-brief [@lally2010habits]. | so small, sustained changes work better than large, short-lived ones [@lally2010habits]. |
| 102 | phrasing | MI's central move is a restraint: resisting the **righting reflex**, the near-irresistible urge to jump in and fix, warn or lecture. | A central skill in MI is resisting the **righting reflex**, the strong urge to jump in and fix, warn or lecture. |
| 103 | hyperbole | The reflex feels helpful, but it reliably provokes resistance. | The reflex feels helpful, but it tends to provoke resistance. |
| 133 | phrasing | Two rules matter more than the letters. | Two rules matter more than the acronym. |
| 135 | phrasing | It should also be small: one achievable change beats five aspirational ones. | It should also be small: one achievable change is more useful than several ambitious ones. |
| 188 | phrasing ★ | A goal that fights the patient's real world loses. | A goal that conflicts with the patient's daily routine is unlikely to last. |
| 195 | phrasing | The best SMART goals build on existing rituals: | Useful SMART goals build on existing routines: |
| 203 | phrasing ★ | A change that fits the family meal survives; one that fights it fails. | A change that fits the family meal is more likely to last than one that conflicts with it. |
| 217 | phrasing ★ | fights the patient's real world, and a goal that does that loses. | conflicts with the patient's daily routine, so it is unlikely to last. |
| 220 | phrasing | A change that also fits the family meal survives. | A change that also fits the family meal is more likely to last. |
| 253 | phrasing | Not by knowing more, and not by trying harder to convince. | More knowledge and harder persuasion are not what start it. |
| 256 | phrasing ★ | One change the patient chose beats ten you prescribed. | One change the patient chose is more likely to last than several you prescribed. |

### book/chapters/bone-health-osteoporosis.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | phrasing ★ | while osteoarthritis and > gout have almost the mirror-image story: | while osteoarthritis and > gout are almost the opposite case: |
| 56 | phrasing | Three conditions patients confuse, and their different diet stories. | Three conditions patients confuse, and their different dietary management. |
| 56 | jargon | the real treatment is a urate-lowering drug | the main treatment is a urate-lowering drug |
| 59 | phrasing | and gout is neither wear nor thinning. | and gout is neither cartilage wear nor bone loss. |
| 77 | phrasing | Bone is living tissue in constant turnover, not inert scaffolding, which is why diet matters even for something as solid as the skeleton. | Bone is living tissue in constant turnover, which is why diet affects the skeleton. |
| 155 | hyperbole | Absorption matters more than content. How much calcium a food delivers depends on its bioavailability, and absorption varies enormously. | How much calcium a food delivers depends on its bioavailability, and absorption varies widely between foods. |
| 159 | hyperbole | The spinach that looks calcium-rich on a label is therefore nearly useless for bone, and the tofu beside it an excellent source | The spinach that looks calcium-rich on a label is therefore a poor source for bone, and the tofu beside it a good one |
| 175 | phrasing | Small swaps stack up: | Small changes add up: |
| 230 | hyperbole | The whole dietary pattern matters more than any single nutrient: | The whole dietary pattern matters, not only single nutrients: |
| 236 | hyperbole ★ | ## Mechanical loading: the strongest modifiable factor | ## Mechanical loading: a key modifiable factor |
| 237 | hyperbole ★ | but the strongest modifiable signal to bone is mechanical loading | but mechanical loading is also an important modifiable influence on bone |
| 241 | phrasing | Nutrition and loading are partners (calcium is the substrate, loading is the signal to use it). | Nutrition and loading work together (calcium is the substrate, and loading stimulates bone formation). |
| 300 | phrasing ★ | is where the most-asked supplement question lands, and the answer has two parts. | is the condition patients most often ask about supplements for, and the answer has two parts. |
| 324 | phrasing | Glucosamine shows how consumer messaging can outrun the evidence. | Glucosamine shows how consumer messaging can go beyond the evidence. |
| 371 | phrasing | a different condition with a different diet story. | a different condition with different dietary advice. |
| 415 | jargon | Singapore's own data show that the real problem is under-treatment: | Singapore's own data show that the main problem is under-treatment: |
| 454 | phrasing | **Two local facts overturn imported assumptions.** | **Two local findings contradict common assumptions.** |

### book/chapters/brain-health-dementia.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | phrasing ★ | The answer is not a superfood or a supplement; it starts > with the blood vessels. | The best-supported answer is not a superfood or a supplement but > control of vascular risk. |
| 16 | phrasing | Identify the non-dietary measures with real weight: | Identify the non-dietary measures with good supporting evidence: |
| 38 | hyperbole | It is the condition patients most want a food fix for, and careful counselling | Patients often hope for a dietary way to prevent it, and careful counselling |
| 93 | phrasing | The additive model has a hopeful corollary. | The additive model has a practical implication. |
| 111 | jargon | are also the modifiable drivers of the vascular contribution | are also the modifiable risk factors for the vascular contribution |
| 125 | phrasing | Two further points make the estimate usable. | Two further points help interpret the estimate. |
| 127 | hyperbole | Midlife is also the period that matters most, so prevention is a long-term | Midlife is also a key period, so prevention is a long-term |
| 135 | hyperbole | Even with that caveat, it is the strongest signal we have, and it points to vascular risk. | Even with that caveat, it is the best trial evidence available, and it points to vascular risk. |
| 147 | phrasing | The cohort signal did not survive the trial. | The trial did not confirm the cohort association. |
| 151 | hyperbole | People who eat well differ in a hundred other ways, | People who eat well differ in many other ways, |
| 157 | phrasing | Which impressive claims survive a randomised trial is rarely obvious in advance. | Whether an observational finding will be confirmed in a randomised trial is often hard to predict. |
| 171 | phrasing | Sooner or later the patient asks about a pill. | Patients often ask about supplements. |
| 177 | phrasing | eat fish as food: the capsule is not the food | eat fish rather than taking capsules |
| 191 | jargon ★ | physical activity, a headline recommendation for brain health | physical activity, a core recommendation for brain health |
| 195 | jargon | checked" is concrete, high-value advice. | checked" is concrete, useful advice. |
| 266 | phrasing | The recognise-and-refer posture, and the malnutrition screening behind it, | The recognise-and-refer approach, and the malnutrition screening behind it, |
| 286 | phrasing | Add the non-dietary measures that carry real weight, | Add the non-dietary measures with good supporting evidence, |

### book/chapters/cardiovascular-disease-hypertension.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 38 | phrasing | Two facts set the stakes. | Two figures show the scale of the problem. |
| 125 | phrasing | which beats the matched supplements | which is more effective than the matched supplements |
| 134 | jargon ★ | Sodium is Singapore's headline dietary problem | Excess sodium is a major dietary problem in Singapore |
| 155 | phrasing | and if in doubt, don't. | and if in doubt, do not recommend one. |
| 231 | phrasing ★ | with its conclusion upheld: science self-correcting, not a diet debunked. | with its conclusion upheld: the record was corrected, but the finding stood. |
| 318 | jargon | Measured hypertension, a silent driver of that burden, | Measured hypertension, a silent risk factor behind that burden, |
| 345 | phrasing | memorising a target, or reaching for a drug first, would be the wrong reflex | memorising a target, or reaching for a drug first, would be a mistake |

### book/chapters/cases-counselling.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 12 | phrasing | All four patients are the bread and butter of prevention. | All four patients are typical of everyday preventive care. |

### book/chapters/cases-referral.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 6 | hyperbole | Often the safest and most skilful move is to recognise the limit of general advice and refer. | Often the safest course is to recognise the limit of general advice and refer. |
| 43 | phrasing | and recognise where this belongs. | and recognise when to refer. |

### book/chapters/childhood-adolescence.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | hyperbole ★ | The biggest risks at this stage come not from a missing > nutrient but from the environment and from how weight is talked about, where a careless word can start > real damage. | Many of the risks at this stage come less from a missing nutrient than from the environment and from how weight is talked about, where careless comments can cause harm. |
| 12 | jargon ★ | which levers (weight-bearing activity, calcium, vitamin D, adequate energy) change bone accrual, | which factors (weight-bearing activity, calcium, vitamin D, adequate energy) change bone accrual, |
| 37 | jargon | Childhood & adolescence at a glance: two drivers | Childhood & adolescence at a glance: internal and external factors |
| 42 | jargon | As at every life stage, two drivers shape nutrition: | As at every life stage, two sets of factors shape nutrition: |
| 46 | jargon | Internal drivers (inside the body) | Internal factors (inside the body) |
| 46 | phrasing | The window for accruing peak bone mass briefly opens and then closes for life. | The window for accruing peak bone mass opens briefly and then closes. |
| 47 | jargon ★ | External levers (life and environment) | External factors (life and environment) |
| 76 | phrasing | A mid-pubertal teenager eating far more is usually feeding a spurt. | A mid-pubertal teenager eating far more is usually meeting the needs of a growth spurt. |
| 92 | hyperbole ★ | (the most bone a person ever has), is the single biggest determinant of how much bone a person can afford to lose in later life | (the most bone a person ever has), is a major determinant of how much bone loss a person can tolerate in later life |
| 97 | jargon | Lifestyle is worth optimising, but it does not override genetics. | Lifestyle is worth improving, but it does not override genetics. |
| 100 | jargon ★ | toggle the levers to see how far lifestyle moves the attainable peak | toggle the lifestyle factors to see how far they move the attainable peak |
| 105 | phrasing | What actually builds bone is more specific, and less tidy, than "drink milk". | The evidence on what builds bone is more specific than "drink milk". |
| 119 | hyperbole ★ | The fastest way to impair bone accrual in adolescence is too little energy. | In adolescence, bone accrual is often impaired by too little energy. |
| 123 | phrasing ★ | fracture is a slow-motion bone-health emergency: recognise it and refer, | fracture is at risk of lasting bone loss: recognise it and refer, |
| 132 | hyperbole | a combination that multiplies the odds of deficiency far beyond either alone | a combination that raises the odds of deficiency more than either alone |
| 149 | jargon | The practical wins come from pairing foods, not from supplements. | The practical gains come from pairing foods, not from supplements. |
| 163 | phrasing | trajectory is usually feeding a spurt. | trajectory is usually meeting the needs of a growth spurt. |
| 170 | hyperbole ★ | The bone mass accrued by the end of adolescence is the single biggest determinant of how much bone a person can afford to lose in later life. | The bone mass accrued by the end of adolescence is a major determinant of how much bone loss a person can tolerate in later life. |
| 185 | jargon | is anchored first on dental caries (tooth decay), not weight | is based first on dental caries (tooth decay), not weight |
| 190 | phrasing | Sugary drinks are a red flag to recognise at this life stage, not a poison to fear. | Sugary drinks are a risk to recognise at this life stage, but they are not uniquely toxic. |
| 196 | jargon ★ | Much of the effect also runs through other levers (eating while watching, exposure to the adverts and lost sleep), | Much of the effect also runs through other pathways (eating while watching, exposure to the adverts and lost sleep), |
| 201 | phrasing | Family meals are the counterweight. | Family meals can offset some of these influences. |
| 212 | phrasing | an active adolescent needs to be fuelled, not slimmed. | an active adolescent needs enough energy, not weight loss. |
| 283 | phrasing | That single finding links both problems. | This finding links both problems. |
| 355 | phrasing ★ | No, and getting that wrong is where the harm lives. | No, and getting that wrong can cause harm. |
| 355 | jargon | The internal drivers set needs for quality and timing, not bulk. | The internal changes set needs for quality and timing, not quantity. |
| 369 | hyperbole | It is nonetheless the country's canonical example of how not to run such a scheme: | It is nonetheless an example of how not to run such a scheme: |
| 380 | jargon ★ | so the label is one lever among many, | so the label is one measure among many, |
| 383 | jargon | Singapore's recommendations track the drivers well: | Singapore's recommendations track these physiological changes well: |
| 397 | phrasing | These atypical presentations are the local face of eating disorders across the weight spectrum. | These atypical presentations show that, locally too, eating disorders occur across the weight spectrum. |

### book/chapters/chronic-kidney-disease.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 41 | jargon ★ | and it shares their drivers | and it shares their risk factors |
| 65 | phrasing | A printout is not a prescription | A generic diet sheet does not replace individual advice |
| 126 | hyperbole ★ | Protein is the most misunderstood part of the renal diet, because the advice reverses at dialysis. | Protein is a commonly misunderstood part of the renal diet, because the advice reverses at dialysis. |
| 162 | phrasing | Singaporeans start badly placed | Singaporeans start from a high intake |
| 163 | phrasing | The population story of sodium and blood pressure | The population evidence on sodium and blood pressure |
| 205 | jargon ★ | Retained phosphate is a quiet driver of CKD–mineral and bone disease | Retained phosphate contributes, without symptoms, to CKD–mineral and bone disease |
| 275 | phrasing | patient education that a referral plugs into | patient education that a referral connects the patient to |
| 311 | jargon ★ | Local CKD prevalence tracks the cardiometabolic drivers closely | Local CKD prevalence tracks the cardiometabolic risk factors closely |
| 313 | hyperbole | The largest gain for the kidney is therefore made years upstream, in the control of diabetes and blood pressure. | Much of the benefit for the kidney therefore comes years earlier, from the control of diabetes and blood pressure. |
| 318 | hyperbole ★ | the national War on Diabetes is also the country's most important CKD-prevention strategy | the national War on Diabetes is also a central CKD-prevention strategy |
| 323 | phrasing ★ | The renal diet clashes with the hawker palate, and the clash drives poor intake. | The renal diet conflicts with typical hawker food, which contributes to poor intake. |
| 338 | phrasing | notice where prescribing a number instead of referring would be the wrong reflex | notice where prescribing a number instead of referring would be a mistake |

### book/chapters/dietary-guidelines-patterns.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 45 | phrasing | Those stages all bend from a shared baseline, the healthy pattern for a general, healthy adult. | Those stages all adjust a shared baseline, the healthy pattern for a general, healthy adult. |
| 62 | hyperbole | strength, because it smooths out the single dramatic trial, and its limit, | strength, because it reduces the weight of any single striking trial, and its limit, |
| 85 | phrasing | The plate therefore travels well across ages, jobs and cuisines: | The plate therefore applies across ages, jobs and cuisines: |
| 95 | phrasing | The WHO Healthy Diet is the normative backbone of thresholds: | The WHO Healthy Diet sets the reference thresholds: |
| 133 | phrasing | the answer is reassuring: the guidelines broadly agree, and the agreement is unglamorous. | the answer is reassuring: the guidelines broadly agree, and what they agree on is simple. |
| 164 | phrasing | The pattern view also disarms the perennial "is [food] good or bad now?" question. | The pattern view also answers the recurring "is [food] good or bad now?" question. |
| 165 | phrasing | Asked as "what pattern is this part of?", the noise settles. | Asked as "what pattern is this part of?", the findings become more consistent. |
| 173 | phrasing | The idea is sound; the magnitude is easy to oversell. | The idea is well supported, but its size is easily overstated. |
| 190 | jargon ★ | Two caveats belong with that headline whenever it is quoted: | Two caveats belong with that main result whenever it is quoted: |
| 195 | jargon ★ | The reanalysis upheld the headline, and the episode shows that even landmark trials get corrected. | The reanalysis upheld the main result, and the episode shows that even landmark trials get corrected. |
| 233 | phrasing | A benefit quoted without its caveat is how hype begins, and spotting the gap is a skill in its own right | A benefit quoted without its caveat overstates the evidence, and spotting the omission is a skill in its own right |
| 260 | phrasing ★ | a clinician who cannot discuss these diets credibly loses the room. | a clinician who cannot discuss these diets credibly loses the patient's trust. |
| 267 | phrasing | Trials comparing every mix of fat, protein and carbohydrate reach the same verdict [@sacks2009pounds]. | Trials comparing every mix of fat, protein and carbohydrate reach the same conclusion [@sacks2009pounds]. |
| 270 | phrasing | That finding gives each popular diet a verdict, set out below with the evidence behind it: | The table below applies that finding to each popular diet, with the evidence behind it: |
| 284 | phrasing | The best diet for a patient is the healthy pattern they will sustain, not the cleverest one. | The best diet for a patient is the healthy pattern they will sustain, not the most elaborate one. |
| 287 | jargon | steer toward whichever sustainable pattern fits their life, anchored to My Healthy Plate. | steer toward whichever sustainable pattern fits their life, based on My Healthy Plate. |
| 288 | hyperbole | The one real harm to watch for is disordered eating, | The main harm to watch for is disordered eating, |
| 295 | phrasing | and that environment does much of the deciding for them. | and that environment strongly influences what they choose. |
| 309 | phrasing | recognise that policy and environment shape what lands on the plate, | recognise that policy and environment shape what people eat, |
| 366 | phrasing | Small, repeated shifts in the everyday meal beat any occasional "superfood". | Small, repeated changes to everyday meals matter more than any occasional "superfood". |
| 374 | jargon | You then steer toward a sustainable pattern anchored to My Healthy Plate, | You then steer toward a sustainable pattern based on My Healthy Plate, |
| 400 | jargon ★ | The two highest-yield moves are therefore to shift refined rice and noodles toward wholegrains, and to cut the free sugar and salt. | The two main changes are therefore to shift refined rice and noodles toward wholegrains, and to cut the free sugar and salt. |
| 400 | hyperbole ★ | The brown-rice swap and the water-over-sugary-drink swap are the two swaps that matter most in the local diet. | The brown-rice swap and the water-over-sugary-drink swap address these two gaps directly. |
| 405 | phrasing ★ | A diet a patient will keep beats a "better" one they abandon by Friday. | A diet a patient will keep is more useful than a "better" one they soon abandon. |

### book/chapters/digestion-absorption.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 106 | phrasing | starch → smaller sugars; a token start on fat | starch → smaller sugars; a little fat |
| 162 | phrasing | The gut hormones share one logic: | The gut hormones follow a common pattern: |
| 296 | phrasing | A fat or bile problem can therefore quietly cause deficiency of the fat-soluble vitamins too. | A fat or bile problem can therefore cause deficiency of the fat-soluble vitamins too. |
| 390 | phrasing | Viscous fibre acts twice, once on speed and once on bile. | Viscous fibre has two effects: it slows digestion and it binds bile salts. |
| 421 | phrasing | The priority is the habit rather than the list: | Building the habit matters more than memorising the list: |
| 515 | hyperbole | matter far more here than advice to "just drink more milk". | are more useful here than advice to "just drink more milk". |
| 520 | hyperbole | in the gastroenteritis every family meets. | in the gastroenteritis most families meet. |

### book/chapters/energy-balance.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 17 | jargon ★ | Relate Singapore's food environment to energy balance, and name the practical levers that shift it. | Relate Singapore's food environment to energy balance, and name the practical changes that shift it. |
| 53 | jargon ★ | The smallness is also the good news: small, sustainable changes are the practical lever in counselling, | For the same reason, small, sustainable changes are the practical approach in counselling, |
| 83 | hyperbole | NEAT varies enormously between people and, over a day, can outweigh formal exercise entirely [@levine2002neat]. | NEAT varies widely between people and, over a day, can exceed the energy spent in formal exercise [@levine2002neat]. |
| 125 | jargon | the main driver of BMR. | the main determinant of BMR. |
| 131 | hyperbole | can differ completely in how much of it is muscle and how much is fat, | can differ greatly in how much of it is muscle and how much is fat, |
| 212 | phrasing | The rule "calories in minus calories out" is therefore the right *bookkeeping* and a poor *strategy*, | The rule "calories in minus calories out" therefore describes the accounting correctly but is a poor basis for weight management, |
| 219 | phrasing ★ | Singapore's food environment tilts the balance toward the "in" side, quietly and by default. | Singapore's food environment tends to favour a high energy intake. |
| 228 | phrasing | None of this is a moral failing; it is an environment that keeps "energy in" easy and "energy out" low. | This reflects the environment, not a moral failing: it makes a high energy intake easy and keeps activity low. |
| 231 | jargon ★ | Three practical levers aim to close that gap without calorie counting: | Three practical measures aim to close that gap without calorie counting: |

### book/chapters/evidence-vs-hype.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 43 | phrasing ★ | Appraisal is calibration: a fixed routine that lands a proportionate verdict. | Appraisal is a fixed routine that reaches a conclusion in proportion to the evidence. |
| 89 | phrasing ★ | Run a few real claims through the four questions below to see how differently they land. | Run a few real claims through the four questions below to see how differently they are rated. |
| 126 | phrasing | An association is a question, not an answer. | An association raises a hypothesis; it does not establish cause. |
| 132 | phrasing | A convincing biological story only raises a hypothesis. | A convincing biological explanation only raises a hypothesis. |
| 145 | phrasing | Both are real results, correctly bounded. | Both are real results, when quoted with their limits. |
| 169 | phrasing ★ | Five claims that come up often land very differently once traced to their evidence: | Five claims that come up often receive very different verdicts once traced to their evidence: |
| 178 | jargon ★ | The headline 2024 trial was retracted in 2025 when its analyses could not be reproduced | The most widely reported 2024 trial was retracted in 2025 when its analyses could not be reproduced |
| 226 | phrasing | the blood and excrete them in urine, every hour of every day. | the blood and excrete them in urine, continuously. |
| 252 | phrasing | A habit separates them: the same four questions asked of every claim, | A consistent method separates them: the same four questions asked of every claim, |

### book/chapters/gut-microbiome.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | hyperbole | Few topics in > consumer nutrition carry more marketing claims, so the mechanism is the test of each one. | Consumer > nutrition marketing makes many claims about it, and each can be tested by asking for its mechanism. |
| 44 | hyperbole | It is also one of the most heavily marketed topics in consumer nutrition. | It is also heavily marketed in consumer nutrition. |
| 45 | phrasing | many of the marketing claims do not survive the question "by what mechanism?" | many of the marketing claims have no established mechanism. |
| 98 | phrasing | not a number to maximise or buy in a bottle | not a number to maximise or to raise with supplements |
| 124 | jargon | feeding mode is the stronger and more durable driver, | feeding mode is the stronger and more durable influence, |
| 159 | hyperbole | For the host, this is the microbiome's most important function. | For the host, this is a major function of the microbiome. |
| 183 | phrasing | so claims that butyrate pills cure disease run ahead of the evidence. | so claims that butyrate pills cure disease are not supported by the evidence. |
| 265 | hyperbole | Diet is the dominant, fast-acting and reversible influence on the microbiome. | Diet is a major, fast-acting and reversible influence on the microbiome. |
| 268 | phrasing | Diet is therefore an ongoing influence, renewed at every meal, and not a one-time reprogramming. | Diet therefore has a continuing rather than a one-off effect. |
| 271 | hyperbole ★ | The variety of plants matters more than any single food. | What matters is the variety of plants eaten rather than any single food. |
| 277 | hyperbole | The most dramatic version of this, | The extreme version of this, |
| 285 | jargon ★ | The lever is fibre variety, and Singapore's food offers easy swaps: | The main dietary change is greater fibre variety, and Singapore's food offers easy swaps: |
| 293 | jargon ★ | so for most people this is the largest single lever available | so for most people this is a worthwhile change |
| 398 | phrasing | The only intervention in medicine that resets the community is FMT, for its one narrow indication. | The only established intervention that replaces the community is FMT, for its one narrow indication. |
| 402 | phrasing | The metaphor has no mechanism behind it. | The claim that gut serotonin controls mood has no mechanism behind it. |
| 411 | phrasing | The channel is real; the mood claims are unproven. | The axis exists, but the mood claims are unproven. |
| 433 | phrasing ★ | Like a garden, the microbiome is maintained by habitual diet: what it is fed every day. | The microbiome is maintained by habitual diet, what is eaten every day. |
| 441 | jargon ★ | are the highest-value change available. | are a worthwhile change for most people. |
| 474 | phrasing | A marketed benefit is not the same as a proven benefit. | Marketing claims are not evidence of benefit. |

### book/chapters/healthy-ageing.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 5 | hyperbole ★ | it is to eat a denser plate and, above all, to eat it in company. | it is to eat a denser plate and, often, to eat it in company. |
| 31 | jargon | Healthy ageing at a glance: two drivers | Healthy ageing at a glance: internal and external factors |
| 34 | jargon | two drivers shape nutrition, and in later life they pull in an unexpected direction: | two sets of factors shape nutrition, and in later life they change needs in an unexpected way: |
| 39 | jargon | Internal drivers (inside the body) | Internal factors (inside the body) |
| 39 | phrasing | B12, vitamin D and thirst all quietly decline | B12, vitamin D and thirst all decline |
| 40 | jargon ★ | External levers (life and environment) | External factors (life and environment) |
| 40 | hyperbole ★ | do more damage to an older diet than any single nutrient, and a shared meal is one of the strongest remedies | often harm an older diet more than a single nutrient shortfall does, and a shared meal is an effective remedy |
| 72 | phrasing | Enough protein, with exercise, also defends against **sarcopenia**, | Enough protein, with exercise, also helps protect against **sarcopenia**, |
| 126 | phrasing | which drains food of its reward | which makes food less rewarding |
| 157 | phrasing | faded taste and smell drain food of its reward. | faded taste and smell make food less rewarding. |
| 172 | hyperbole ★ | For older adults, company at meals often does more for nutrition than any single nutrient. | For older adults, company at meals matters for nutrition as well as individual nutrients. |
| 189 | jargon ★ | "Who do you eat with?" is one of the highest-yield questions. | "Who do you eat with?" is one of the most useful questions. |
| 261 | hyperbole ★ | Company at meals, often the most effective change of all, | Company at meals, often one of the most effective changes, |
| 264 | phrasing | make the small food-first moves; | make the small food-first changes; |

### book/chapters/infancy-early-childhood.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 35 | jargon | Infancy & early childhood at a glance: two drivers | Infancy & early childhood at a glance: internal and external factors |
| 40 | jargon | the needs follow from two drivers, one inside the body and one outside it: | the needs follow from two sets of factors, one inside the body and one outside it: |
| 45 | jargon | Internal drivers (inside the body) | Internal factors (inside the body) |
| 46 | jargon ★ | External levers (life and environment) | External factors (life and environment) |
| 48 | jargon ★ | Most recommendations for this stage match an external lever to an internal driver, | Most recommendations for this stage match an external factor to an internal one, |
| 70 | hyperbole | The question parents ask most, "when do we start?", has a physiological answer. | A question parents often ask, "when do we start?", has a physiological answer. |
| 96 | hyperbole | which is the strongest argument for getting the first foods right | which is a main reason for getting the first foods right |
| 205 | phrasing | plain full-fat cow's milk does the job, | plain full-fat cow's milk is enough, |
| 216 | hyperbole | How a child is fed matters as much as what. | How a child is fed matters, as well as what. |
| 298 | phrasing | Breast milk is a strong start, not a complete one. | Breast milk is a good start but is not nutritionally complete. |
| 307 | phrasing | is gently retiring a well-meant tradition. | is gently correcting well-meant traditional advice. |

### book/chapters/integrative-metabolism.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | phrasing | One connected network of pathways does both, thrown | One connected network of pathways does both, switched |
| 54 | phrasing | Metabolism is one network with a logic. | Metabolism is a single network organised by a few principles. |
| 106 | phrasing | that convergence is what holds the map together. | that convergence is what links the pathways into one map. |
| 130 | hyperbole ★ | Even so, the belief that glycolysis consumes oxygen is the single most common one about glucose breakdown. | Even so, the belief that glycolysis consumes oxygen is a common misconception about glucose breakdown. |
| 151 | hyperbole | its irreversibility makes it the first and most important of the map's four irreversible steps, | it is the first of the map's four irreversible steps, |
| 235 | phrasing | it carries a warning that shapes the response to fasting: | it has one feature that shapes the response to fasting: |
| 315 | hyperbole | This one contrast explains most of the fed-state picture. | This contrast explains much of the fed-state picture. |
| 350 | phrasing | yet it cannot donate a single glucose molecule to the blood. | yet it cannot release glucose into the blood. |
| 522 | phrasing | sports drinks and gels are marketing, not physiology | sports drinks and gels are not needed |
| 600 | phrasing ★ | The question is the wrong shape. Every body fasts every night. | The question has no single answer. Everyone fasts overnight. |
| 603 | phrasing ★ | There is no metabolic catastrophe in a missed meal, and no metabolic magic in a fasting schedule. | A missed meal does no metabolic harm, and a fasting schedule has no special metabolic effect. |
| 635 | hyperbole | but not dramatic afternoon ketosis; | but not marked afternoon ketosis; |

### book/chapters/interprofessional-referral.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | phrasing | the edges of the role, and a clean hand-off follows when a patient crosses them. | the limits of the role, and a clear referral follows when a patient's needs exceed them. |
| 5 | phrasing ★ | health is the one instrument that cannot be referred out, and it needs looking after. | health also needs looking after. |
| 34 | phrasing | Good dietary care calls for humility with competence: | Good dietary care calls for competence and an awareness of its limits: |
| 47 | jargon ★ | That care draws on the toolkit of the *What a healthy diet looks like*, *Assessing diet and talking to patients* and *Behaviour-change counselling* chapters, and the toolkit stops short of individualised therapy for a medical condition. | That care draws on the skills of the *What a healthy diet looks like*, *Assessing diet and talking to patients* and *Behaviour-change counselling* chapters, and those skills stop short of individualised therapy for a medical condition. |
| 58 | hyperbole | sit on either side of a clean line, and holding that line is the core skill here: | sit on either side of a clear line, and recognising that line is a key skill here: |
| 78 | phrasing ★ | The same question ("should I advise, or refer?") lands differently depending on complexity. | The answer to the same question ("should I advise, or refer?") differs depending on complexity. |
| 133 | phrasing ★ | Completeness is itself a clinical skill: it turns a hand-off into a head start. | Writing a complete referral is itself a clinical skill: it lets the dietitian start work without repeating the assessment. |
| 147 | phrasing | The whole is more than any one professional's slice. | The team achieves more than any one professional alone. |
| 150 | phrasing | That "more than one slice" cuts both ways: it is a common trap to over-claim the nutrition part of the team's results. | The converse also applies: it is a common error to over-claim the nutrition part of the team's results. |
| 151 | jargon ★ | The headline lifestyle results (see the *Type 2 diabetes* chapter) came from team-delivered, intensive programmes, not a clinic chat: | The best-known lifestyle results (see the *Type 2 diabetes* chapter) came from team-delivered, intensive programmes, not a single clinic conversation: |
| 163 | phrasing | the dietitian's time well and turns the hand-off into a head start. | the dietitian's time well and lets them start work without repeating the assessment. |
| 168 | jargon ★ | The headline results came from team-delivered, intensive programmes. | The best-known results came from team-delivered, intensive programmes. |
| 177 | hyperbole ★ | The last part of the role is the one clinicians skip: their own health. | The last part of the role is one clinicians often neglect: their own health. |
| 185 | jargon | a sleep anchor (a fixed bedtime or wake time) | a fixed bedtime or wake time |
| 198 | jargon | swap, a sleep anchor, a short daily walk), not an overhaul. | swap, a fixed bedtime or wake time, a short daily walk), not an overhaul. |

### book/chapters/macronutrients.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | jargon | because quality drives health as | because quality affects health as |
| 18 | jargon ★ | give quality-based advice anchored to My Healthy Plate, | give quality-based advice based on My Healthy Plate, |
| 52 | phrasing | The question that matters clinically is almost never "how many grams?" but "what kind, from what food?" | Clinically, the more useful question is usually "what kind, from what food?" rather than "how many grams?" |
| 58 | hyperbole | where a food sits on it matters far more than the word "carb": | a food's place on it says more about its health effect than the label "carb" does: |
| 109 | phrasing | so the amylose advantage is real but relative | so the effect of amylose is real but modest |
| 137 | phrasing ★ | These are associations, not proof of cause: the benefit is real, but it carries that caveat. | These are associations, not proof of cause, and the apparent benefit should be read with that caveat. |
| 184 | phrasing | Three caveats keep GI in proportion: | Three caveats limit how GI should be used: |
| 205 | phrasing | The effect is real but modest: a refinement of "quality over quantity", not a way to make white rice "low-carb". | The effect is modest and does not make white rice a low-carbohydrate food. |
| 239 | phrasing | the food matrix, why whole beats juiced | the food matrix, why whole fruit differs from juice |
| 245 | phrasing | part of why wholegrains beat refined starch. | part of the reason wholegrains are preferred to refined starch. |
| 279 | phrasing | Three variables generate every dietary fat: chain length, saturation and the geometry of any double bonds. | Dietary fats differ in three variables: chain length, saturation and the geometry of any double bonds. |
| 331 | phrasing | For decades the advice was "eat less fat"; the better message is "eat better fat". | For decades the advice was to eat less fat; current advice focuses on the type of fat. |
| 349 | phrasing | the practical move is to replace it with unsaturated fat, | the practical advice is to replace it with unsaturated fat, |
| 420 | phrasing | The goal is better fat, not less fat. | The aim is to improve the type of fat, not only to reduce the amount. |
| 529 | hyperbole | Modern guidelines have moved decisively from | Modern guidelines have moved from |
| 550 | hyperbole | and they are not remotely the same for health. | and their effects on health differ. |
| 551 | jargon ★ | anchor it to My Healthy Plate, | base it on My Healthy Plate, |
| 553 | phrasing | Prescribing grams is not the task at this stage. | Prescribing gram targets is not expected at this stage. |
| 563 | phrasing | The gap between what the science recommends and what the population actually eats is where a brown-rice swap, a less oily order and a plainer drink make a difference. | Small changes such as a brown-rice swap, a less oily order and a plainer drink help to close this gap. |

### book/chapters/menopause-midlife.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 37 | jargon | Menopause & midlife health at a glance: two drivers | Menopause & midlife health at a glance: internal and external factors |
| 54 | jargon ★ | through the internal drivers and external levers that frame every life stage | through the internal and external factors that frame every life stage |
| 59 | jargon | Internal drivers (inside the body) | Internal factors (inside the body) |
| 60 | jargon ★ | External levers (life and environment) | External factors (life and environment) |
| 71 | hyperbole | Almost every woman reaches midlife having been told that menopause will make her gain weight and slow her metabolism, | Many women reach midlife having been told that menopause will make them gain weight and slow their metabolism, |
| 204 | hyperbole ★ | No midlife topic attracts more marketing than soy and its **phytoestrogens**, | Few midlife topics attract more marketing than soy and its **phytoestrogens**, |
| 205 | phrasing | The popular story errs in both directions: | Popular claims err in both directions: |
| 235 | jargon ★ | The appraisal toolkit for tracing claims | The appraisal methods for tracing claims |
| 256 | phrasing | Patients are most easily exploited where diet reaches its limits. | Unproven remedies are most often marketed where diet reaches its limits. |
| 287 | jargon ★ | That counselling is anchored on protein, activity and a sound pattern, not on weight loss, | That counselling centres on protein, activity and a sound pattern, not on weight loss, |

### book/chapters/obesity-metabolic-syndrome.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 82 | hyperbole | The most useful bedside addition is the waist circumference, because it reads central fat, the metabolically active kind. | A useful bedside addition is the waist circumference, because it measures central fat, the metabolically active kind. |
| 94 | phrasing ★ | Central fat rarely travels alone. | Central fat is rarely the only abnormality. |
| 112 | phrasing | the components do not always behave as one tidy syndrome across Singapore's ethnic groups | the components do not always cluster in the same way across Singapore's ethnic groups |
| 140 | phrasing | where it sits and how it behaves link a waistline to a blood-glucose reading | its location and activity link central fat to raised blood glucose |
| 167 | hyperbole | therefore adds a great deal to what BMI shows | therefore adds information that BMI alone does not give |
| 170 | phrasing | Enlarged fat then becomes inflamed fat. | Enlarged fat tissue then becomes inflamed. |
| 184 | phrasing | Fat also signals the brain, and in obesity the signal goes wrong. | Fat also signals to the brain, and in obesity this signalling is disrupted. |
| 196 | jargon ★ | Two drivers do most of the work. | Two dietary factors are the main contributors. |
| 207 | phrasing | Swapping to a "diet" drink is not the fix the label implies. | Swapping to a "diet" drink is not a reliable solution. |
| 229 | phrasing ★ | The hawker plate is where most of this is decided. | These targets apply directly to hawker meals. |
| 288 | phrasing ★ | Intake is the reliable signal; the hormone story suggests a direction, not a proven mechanism. | The effect on intake is consistent; the hormonal explanation is plausible but unproven. |
| 294 | phrasing | so the mechanism can be named but a fix cannot be promised | so the mechanism can be explained but an effective intervention cannot be promised |
| 297 | phrasing | Behaviour-change skills make the other four changes stick | Behaviour-change skills help patients sustain the other four changes |
| 323 | jargon ★ | it anchors counselling on health behaviours and metabolic markers instead of on the scale alone | it bases counselling on health behaviours and metabolic markers instead of on the scale alone |
| 324 | phrasing | Weight stigma is a live issue in Singapore | Weight stigma is common in Singapore |
| 338 | phrasing ★ | Shaming does not motivate; it backfires. | Shaming does not motivate weight loss and may promote weight gain. |
| 346 | phrasing | The target is metabolic health. | The goal is metabolic health, not the BMI band. |
| 380 | phrasing | The arithmetic is right, but it leaves out three things. | The energy-balance principle is correct, but it leaves out three things. |
| 397 | phrasing ★ | "12.7% obese" is the newspaper figure; ≥27.5 and ≥23 are the clinic figures. | The 12.7% figure is used for international comparison; the ≥27.5 and ≥23 cut-offs are the ones used in clinical practice. |
| 407 | jargon ★ | The drivers are genetic, socio-economic, dietary and environmental, not moral | The contributing factors are genetic, socio-economic, dietary and environmental, not moral |
| 415 | phrasing | turns "recognise and refer" into a longitudinal health plan | extends "recognise and refer" into a longitudinal health plan |

### book/chapters/part2-intro.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | jargon | each stage is read through the same two drivers. | each stage is read through the same two sets of factors. |
| 5 | jargon | The **internal drivers** are what changes inside the body: growth, hormones and physiology. | The **internal factors** are what changes inside the body: growth, hormones and physiology. |
| 5 | jargon ★ | **external levers** are what changes outside it: the food environment, activity, and who a person eats with. | **external factors** are what changes outside it: the food environment, activity, and who a person eats with. |
| 11 | phrasing | Taking a full diet history and appraising a trial come later. They are real skills, taught in Part III, | Taking a full diet history and appraising a trial come later, in Part III, |

### book/chapters/pregnancy-lactation.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 40 | jargon | Pregnancy & lactation at a glance: two drivers | Pregnancy & lactation at a glance: internal and external factors |
| 42 | jargon | As at every life stage, two drivers shape a woman's nutrition in pregnancy: | As at every life stage, two sets of factors shape a woman's nutrition in pregnancy: |
| 46 | jargon | Internal drivers (inside the body) | Internal factors (inside the body) |
| 47 | jargon ★ | External levers (life and environment) \| The levers the woman and her clinician can pull: | External factors (life and environment) \| The factors the woman and her clinician can change: |
| 49 | jargon | The internal drivers explain three facts that would otherwise seem counter-intuitive: | The internal changes explain three facts that would otherwise seem counter-intuitive: |
| 64 | hyperbole ★ | The most important nutrition window opens before conception. | A key nutrition window opens before conception. |
| 69 | jargon | where weight and blood glucose are best optimised | where weight and blood glucose are best brought into range |
| 70 | phrasing | Much of good antenatal nutrition is really *pre*-natal. | Much of good antenatal nutrition therefore starts before conception. |
| 78 | phrasing | It is one extra snack, not a second dinner. | That is about one extra snack a day, not an extra meal. |
| 91 | phrasing | so they work as a framework, not a verdict. | so they serve as a guide, not a fixed target. |
| 109 | phrasing | because iron's gut side-effects are where supplementation fails. | because iron's gut side-effects are a common reason supplementation fails. |
| 120 | phrasing | a short list of nutrients carries most of the weight: | a short list of other nutrients needs attention: |
| 155 | hyperbole ★ | Gestational diabetes is Singapore's defining antenatal nutrition issue, and both drivers shape it. | Gestational diabetes is a major antenatal nutrition issue in Singapore, and both internal and external factors shape it. |
| 155 | jargon | internal driver is the normal insulin resistance of pregnancy. | internal factor is the normal insulin resistance of pregnancy. |
| 181 | jargon ★ | Physical activity is an external lever with clear benefit. | Physical activity is an external factor with clear benefit. |
| 201 | jargon ★ | The external lever is how pregnancies are screened. | The external factor here is how pregnancies are screened. |
| 206 | phrasing | The diagnostic thresholds are a chosen line, not a biological cliff: | The diagnostic thresholds are set by convention, not by biology: |

### book/chapters/type-2-diabetes.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 126 | phrasing | One caveat sits outside hypoglycaemia | One further caution is unrelated to hypoglycaemia |
| 144 | jargon ★ | Ramadan fasting is a high-yield, faith-aware counselling task | Ramadan fasting is an important, faith-aware counselling task |
| 176 | jargon ★ | is the highest-yield carbohydrate-quality move | is a key carbohydrate-quality change |
| 178 | jargon ★ | Sugar-sweetened drinks are a separate, high-yield target. | Sugar-sweetened drinks are a separate, important target. |
| 190 | phrasing | The shift has far to go locally | Wholegrain intake remains low locally |
| 284 | jargon ★ | for motivational interviewing and the wider behaviour-change toolkit | for motivational interviewing and other behaviour-change techniques |
| 361 | jargon | as the delivery vehicle for early detection and lifestyle advice | as the means of delivering early detection and lifestyle advice |

### book/chapters/undernutrition-malnutrition.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | phrasing | In Singapore it hides in plain sight among frail, isolated and hospitalised older adults. | In Singapore it is common, and often missed, among frail, isolated and hospitalised older adults. |
| 43 | phrasing | malnutrition is the pathological state that ageing, illness and isolation tip people into. | malnutrition is the pathological state that ageing, illness and isolation can lead to. |
| 54 | phrasing | Malnutrition is defined by a causal chain, not by body size, and that chain is what makes a wasted, weak patient a medical problem. | Malnutrition is defined by a causal chain, not by body size, and it is this chain that makes a wasted, weak patient a medical problem. |
| 58 | phrasing | which is working tissue, not a designed store | which is functional tissue, not a protein store |
| 63 | phrasing | Malnutrition is a causal chain, not a body size. | Malnutrition is defined by a causal chain, not by body size. |
| 133 | hyperbole ★ | Knowing the group is the difference between catching malnutrition and missing it. | Knowing the at-risk groups makes malnutrition less likely to be missed. |
| 151 | phrasing | "she looks fine, her BMI isn't low" is the classic miss | "she looks fine, her BMI isn't low" is a common reason it is missed |
| 177 | phrasing | That is why "her BMI isn't low" is the classic miss. | That is why "her BMI isn't low" is a common reason malnutrition is missed. |
| 196 | jargon | finances or appetite-blunting drugs) and optimises ordinary food. | finances or appetite-blunting drugs) and makes the most of ordinary meals. |
| 201 | phrasing | food-based measures fall short, not the opening move | food-based measures fall short, not the first step |
| 207 | jargon | (fix the cause of poor intake and optimise ordinary food) | (fix the cause of poor intake and make the most of ordinary meals) |
| 241 | jargon ★ | is a common, dangerous driver of undernutrition | is a common, dangerous cause of undernutrition |
| 285 | jargon | the doctor treats the underlying cause and champions nutrition by referring; | the doctor treats the underlying cause and refers; |
| 289 | jargon | the medical social worker tackles the social drivers; | the medical social worker addresses the social causes; |
| 292 | phrasing | The doctor's distinctive contribution is the referral that sets the team in motion; the feeding plan is the dietitian's. | The doctor's distinctive contribution is the referral that brings in the team; the feeding plan is the dietitian's. |
| 299 | jargon | loss, poor intake, dysphagia, a social driver, refeeding risk) | loss, poor intake, dysphagia, a social cause, refeeding risk) |
| 308 | phrasing | that referral is what sets the team in motion | that referral is what brings in the team |
| 309 | jargon | the medical social worker tackles the social drivers such as living alone | the medical social worker addresses social causes such as living alone |
| 316 | phrasing | It looks like catching malnutrition early and handing it on safely, without doing harm on the way: | It means recognising malnutrition early and referring safely, without causing harm along the way: |
| 322 | phrasing | **Undernutrition begins in the community, not the ward.** | **Undernutrition is common in the community, not only on the ward.** |
| 327 | jargon | The practical frame is to screen the frail senior for malnutrition specifically. | In practice, screen the frail senior for malnutrition specifically. |
| 329 | phrasing | a direction of travel, not a settled mandate | a proposal, not yet settled policy |

### book/diagrams/appetite-thermostat.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 66 | phrasing | AgRP/NPY drive is turned up hard by the low-leptin 'starvation' signal | AgRP/NPY activity is strongly increased by the low-leptin 'starvation' signal |
| 69 | phrasing | This is regain pressure, not a willpower failure. | These changes favour weight regain; they do not reflect a lack of willpower. |
| 84 | phrasing | When the drug stops, the defended range reasserts itself and the weight returns. | When the drug stops, regulation returns to the defended range and the weight is regained. |

### book/diagrams/bone-bank.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 12 | phrasing | Build the bank, defend the balance | Build peak bone mass, slow the loss |

### book/diagrams/bone-window.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 31 | hyperbole | The strongest modifiable factor, and most powerful in early puberty: high-impact loading builds bone directly. | A major modifiable factor, and most effective in early puberty: high-impact loading builds bone directly. |
| 48 | jargon ★ | the loss can be permanent whatever the other levers do | the loss can be permanent regardless of the other factors |

### book/diagrams/claim-analyzer.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 27 | jargon | With the headline study withdrawn | With the main study withdrawn |
| 29 | jargon ★ | The flagship study was retracted, so the claim rests on nothing solid. | The main study was retracted, so the claim has no reliable support. |
| 37 | phrasing | Moderate coffee is fine, but it is not medicine. | Moderate coffee intake is safe, but it should not be recommended as a treatment. |
| 61 | jargon | Cut added sugar for the real reasons, not for hyperactivity. | Cut added sugar for its established harms, not for hyperactivity. |
| 69 | phrasing | Harmful in the wrong group, which is worse than unproven. | Harmful in one group (smokers), not merely unproven. |

### book/diagrams/diet-history.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 21 | jargon | The core question, which anchors everything else. | The core question, on which the rest of the history builds. |
| 34 | jargon ★ | The highest-yield local question, and the one most often skipped. | Often the most informative question locally, and the one most often skipped. |
| 46 | jargon ★ | which makes it a high-yield pattern probe locally | which makes it an informative question locally |
| 52 | jargon | so use everyday anchors (bowls, palms) | so use everyday reference objects (bowls, palms) |

### book/diagrams/fat-swap.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 44 | phrasing | What moves LDL and events is the quality of the swap. | LDL and cardiovascular events depend on what replaces the fat. |

### book/diagrams/food-form-sorter.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 30 | phrasing | the hazard is the form, not the food | the choking risk depends on the form, not the food |

### book/diagrams/healthy-plate.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 23 | jargon | a wholegrain swap is the bigger win | a wholegrain swap matters more |
| 30 | jargon ★ | swapping it for water is one of the two highest-yield changes in the local diet | swapping it for water is one of the two most effective changes in the local diet |
| 32 | jargon ★ | is the simplest high-yield swap | is a simple, effective swap |

### book/diagrams/menopause-timeline.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 38 | phrasing | This is the window to act in. | This is the period in which to intervene. |

### book/diagrams/metabolic-switch.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 99 | phrasing | The liver floods with fat-derived acetyl-CoA and exports ketone bodies. | Fat-derived acetyl-CoA accumulates in the liver, which exports ketone bodies. |

### book/diagrams/mets-cluster.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 21 | jargon | the depot that drives the risk | the depot linked to the risk |

### book/diagrams/nutri-grade.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | phrasing | Tap a drink to see where it lands and the swap that moves it to a better grade. | Tap a drink to see its grade and the swap that moves it to a better grade. |

### book/diagrams/pillars-hub.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 27 | hyperbole | so social context can entrench or transform a diet | so social context can entrench or change a diet |

### book/diagrams/renal-flip.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 51 | phrasing | Check first, and if unsure, don't. | Check first; if unsure, do not recommend it. |

### book/diagrams/response-chooser.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 23 | hyperbole | Resisting the urge to fix is the core of motivational interviewing. | Resisting the urge to fix (the righting reflex) is a core principle of motivational interviewing. |

### book/diagrams/scfa-flow.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 52 | hyperbole | The least abundant SCFA but the most important locally | The least abundant SCFA but the main one used locally |

### book/diagrams/trial-check.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 8 | phrasing ★ | The impressive cohort number did not survive the trial. | The trial did not confirm the large effect seen in the cohort studies. |
| 11 | phrasing | Vascular risk control is the intervention that holds up in a trial. | Vascular risk control is the intervention with trial support here. |
| 14 | phrasing | The GEM trial, a definitive null, found | The GEM trial, a large trial with a clear null result, found |
| 20 | phrasing | the capsule is not the food | a capsule is not a substitute for the food |

### book/glossary.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 40 | jargon | used as an objective anchor in assessment | used as an objective measure in assessment |
| 126 | jargon | probing high-yield areas such as drinks, snacks and portions | probing common problem areas such as drinks, snacks and portions |
| 129 | hyperbole | The diet taken as a whole, which predicts health better than any isolated nutrient | The diet taken as a whole, which often predicts health better than isolated nutrients |
| 159 | jargon ★ | \| External levers \| What changes outside the body at a life stage: | \| External factors \| What changes outside the body at a life stage: |
| 248 | jargon | \| Internal drivers \| What changes inside the body at a life stage: | \| Internal factors \| What changes inside the body at a life stage: |
| 277 | hyperbole | the most effective lifestyle measure for bone at menopause | a key lifestyle measure for bone at menopause |
| 317 | hyperbole | taking the stairs and standing; it varies enormously between people | taking the stairs and standing; it varies widely between people |
| 397 | phrasing | \| Recognise and refer \| The posture of the life-stage chapters: | \| Recognise and refer \| The approach of the life-stage chapters: |
| 414 | hyperbole | The near-irresistible urge to jump in and fix, warn or lecture; it feels helpful but reliably provokes resistance | The urge to jump in and fix, warn or lecture; it feels helpful but tends to provoke resistance |
| 489 | jargon | Care that anchors counselling on health behaviours and metabolic markers | Care that bases counselling on health behaviours and metabolic markers |

### book/index.qmd

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 4 | phrasing ★ | The second is easy to neglect, because it is quieter, slower and rarely an emergency. | The second is easy to neglect, because its effects are gradual and it is rarely an emergency. |
| 4 | hyperbole ★ | Yet it is where most of today's gains in length and quality of life are won. | Yet it offers large gains in length and quality of life. |
| 6 | jargon ★ | No single lever matters more to it than nutrition. | Nutrition is one of the main modifiable influences on it. |
| 12 | hyperbole | What, and how, people eat sits at the centre of that plan and is the subject of this book. | What, and how, people eat is a central part of that plan and is the subject of this book. |
| 20 | jargon | diet is among the largest modifiable drivers [@gbd2019diet] | diet is among the largest modifiable risk factors [@gbd2019diet] |
| 26 | jargon ★ | Diet is one of the most powerful levers a doctor has, yet it is one of the least taught subjects in medical training. | Diet is one of the main modifiable risk factors a doctor can address, yet it is taught little in medical training. |
| 36 | phrasing | It is Singapore-first: it is anchored in tools that are already part of daily life here, and generalised from them to the international evidence. | It starts from Singapore: it is built on tools that are already part of daily life here, and moves from them to the international evidence. |
| 65 | phrasing | Counselling is a skill, and skills are built by doing. | Counselling is a skill, and it is learned through practice. |
| 78 | phrasing ★ | A doctor who can help a patient eat well is practising medicine at its most preventive and most human. | Helping a patient eat well is a core part of preventive medicine. |

### book/quizzes/06-dietary-assessment.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 44 | phrasing | What is the best opening move? | What is the best way to start? |
| 48 | phrasing | Permission turns advice into a conversation. | Asking permission makes the advice part of a two-way conversation. |
| 54 | jargon ★ | Avoiding the highest-yield issue helps no one. | Avoiding the most important dietary issue helps no one. |
| 64 | phrasing | A restrictive plan prescribes restriction into a possible eating disorder, the harm to avoid. | A restrictive plan could worsen a possible eating disorder, the harm to avoid. |
| 67 | phrasing | A brief screen and referral consideration is the do-no-harm move. | A brief screen and consideration of referral is the safe next step. |

### book/quizzes/adulthood-working-life.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 9 | phrasing | The fix is to keep moving and keep muscle, not to crash-diet against a metabolic decline that is not happening. | The aim is to stay active and preserve muscle, not to crash-diet against a metabolic decline that is not happening. |
| 15 | jargon ★ | Small, sustainable habits and preserving muscle are the levers; the metabolism is not the cause. | Small, sustainable habits and preserving muscle are what can be changed; the metabolism is not the cause. |
| 31 | phrasing | Which is the calibrated advice? | Which is the evidence-based advice? |
| 87 | phrasing | the most evidence-aligned practical change | the best-supported practical change |
| 93 | jargon ★ | the useful lever is meal *timing*, weighted toward the daytime. | the useful change is meal *timing*, weighted toward the daytime. |

### book/quizzes/appetite-weight-regulation.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 81 | phrasing | Weight regain is the predicted output of body-weight regulation | Weight regain is the expected result of body-weight regulation |
| 117 | jargon ★ | It is a modifiable lever that 'eat less, move more' ignores. | It is a modifiable factor that 'eat less, move more' ignores. |

### book/quizzes/behaviour-change-counselling.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 5 | phrasing | What's the motivational-interviewing move? | What is the motivational-interviewing response? |
| 22 | phrasing | A reflection or affirmation reinforces it; a lecture buries it. | A reflection or affirmation reinforces it; a lecture tends to suppress it. |
| 35 | phrasing | Unasked-for advice, however good, tends to bounce off. | Unasked-for advice, however good, tends to be ignored. |
| 48 | phrasing ★ | Small and owned beats big and imposed. | A small goal the patient chooses works better than a large imposed one. |
| 64 | phrasing | one small, well-planned change beats five aspirational ones. | one small, well-planned change works better than five ambitious ones. |
| 93 | phrasing | The red flags outrank the diet goal; | The red flags take priority over the diet goal; |

### book/quizzes/bone-health-osteoporosis.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 9 | phrasing | A higher peak buys years of delay before osteoporosis, | A higher peak delays the onset of osteoporosis by years, |
| 18 | hyperbole | The biggest window is youth, | The main window is youth, |
| 149 | hyperbole | What is the single most effective intervention for knee osteoarthritis? | Which intervention has the best evidence for knee osteoarthritis? |
| 153 | phrasing | Weight and activity beat any supplement. | Weight loss and activity help more than supplements. |
| 169 | phrasing | Diet nudges urate only modestly: | Diet lowers urate only modestly: |
| 185 | phrasing | The two 'osteo' conditions have opposite diet stories: | The two 'osteo' conditions need different dietary measures: |

### book/quizzes/brain-health-dementia.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 9 | phrasing ★ | and the vascular contribution is the modifiable pathway: what protects the heart protects the brain. | and vascular risk is the main modifiable pathway, since the same risk factors harm both heart and brain. |
| 33 | phrasing | The cohort signal did not survive the trial. | The trial did not confirm the cohort signal. |
| 57 | jargon | is concrete, high-value advice. | is concrete, useful advice. |
| 63 | jargon | the high-value non-food actions are | the most useful non-food actions are |

### book/quizzes/cardiovascular-disease-hypertension.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 41 | phrasing | with its finding standing: science self-correcting, not a diet debunked. | with its finding unchanged. |
| 57 | jargon | targets the real source. | targets the main source. |
| 63 | phrasing | Cutting them is the opposite of the right move. | Cutting them would be counter-productive. |
| 95 | phrasing | The move here is lifestyle-first and refer, | The step here is lifestyle advice first, then referral, |
| 121 | phrasing | and if in doubt, don't | and if in doubt, do not recommend it |
| 127 | jargon | The real do-not-switch group is defined by kidney disease and potassium-raising medications. | The group who should not switch is defined by kidney disease and potassium-raising medications. |

### book/quizzes/childhood-adolescence.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 35 | phrasing | iron need jumps at menarche as monthly loss stacks on growth. | iron need rises sharply at menarche as monthly loss adds to the demands of growth. |
| 44 | jargon | What is that threshold anchored on, and how strong is the sugary-drink-to-weight evidence? | What is that threshold based on, and how strong is the sugary-drink-to-weight evidence? |
| 46 | jargon | It's anchored first on dental caries; the weight effect is real but modest | It's based first on dental caries; the weight effect is real but modest |
| 48 | phrasing | so sugary drinks are a red flag to recognise, not a poison to fear. | so sugary drinks are a risk to recognise and reduce, not a toxin. |
| 49 | jargon | It's anchored on obesity; trials prove sugary drinks are its sole cause | It's based on obesity; trials prove sugary drinks are its sole cause |
| 51 | jargon ★ | The threshold is anchored on *caries*, and the weight evidence, while real, is modest and multi-factorial: sugary drinks are one lever among many, not the sole cause. | The threshold is based on *caries*, and the weight evidence, while real, is modest and multi-factorial: sugary drinks are one factor among many, not the sole cause. |
| 57 | phrasing | Why is this the wrong move? | Why is this the wrong approach? |

### book/quizzes/dietary-guidelines-patterns.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 48 | phrasing | A relative effect on a composite cannot promise any individual outcome: a strong pattern, not a personal guarantee. | A relative effect on a composite cannot promise any individual outcome. |
| 74 | phrasing | the fix is to rebuild the family's own food to quarter-quarter-half | the aim is to adapt the family's own food to quarter-quarter-half |
| 77 | phrasing | Patterns are principles to adapt, not menus to impose. | Dietary patterns should be adapted to a family's own food, not imposed. |
| 83 | jargon | points to two of the biggest real gaps in the local diet | points to two major gaps in the local diet |
| 87 | jargon ★ | which makes the brown-rice swap and cutting salt and sugary drinks the two highest-yield moves. | which makes the brown-rice swap and cutting salt and sugary drinks the two most useful changes. |

### book/quizzes/energy-balance.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 25 | hyperbole | NEAT alone varies enormously from person to person. | NEAT alone varies widely from person to person. |
| 35 | jargon | is the main driver of BMR. | is the main determinant of BMR. |
| 61 | hyperbole | varies enormously between people | varies widely between people |
| 74 | phrasing | Energy balance is actively regulated, not free | Energy balance is actively regulated |

### book/quizzes/evidence-vs-hype.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 5 | phrasing | What's your first move as an appraiser? | What should you do first to appraise it? |
| 48 | phrasing | judged by adherence, not by the clock. | judged by adherence rather than meal timing. |
| 72 | phrasing | Whether the study survived, or has been retracted | Whether the study has since been retracted |
| 74 | phrasing | 'Did the study survive?' is part of appraisal. | Checking whether a study has been retracted is part of appraisal. |

### book/quizzes/gut-microbiome.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 117 | phrasing | 'gut serotonin = happiness' is a metaphor without a mechanism. | 'gut serotonin = happiness' has no supporting mechanism. |

### book/quizzes/healthy-ageing.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 54 | jargon | the main driver in older adults is reduced sun exposure | the main cause in older adults is reduced sun exposure |
| 74 | jargon ★ | is one of the highest-yield questions, | is one of the most useful questions to ask, |
| 87 | phrasing | this is the point where ageing in health has tipped into undernutrition. | this degree of loss suggests that undernutrition has developed. |

### book/quizzes/infancy-early-childhood.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 51 | jargon | the driver is iron-store depletion | the reason is iron-store depletion |
| 100 | phrasing | so the fix is the shape: | so the answer is to change the food's shape: |

### book/quizzes/interprofessional-referral.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 45 | phrasing | Nutrition care is rarely a solo act. | Nutrition care is usually shared across a team. |
| 57 | jargon | Healthier SG anchors each enrolled resident to one family doctor | Healthier SG enrols each resident with one family doctor |
| 69 | jargon ★ | The headline results came from intensive, team-delivered programmes. | The reported results came from intensive, team-delivered programmes. |

### book/quizzes/menopause-midlife.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 22 | jargon | Muscle loss is the modifiable driver, | Muscle loss is the modifiable factor, |
| 25 | jargon | the modifiable driver of any fall is muscle loss. | the modifiable cause of any fall is muscle loss. |
| 61 | phrasing | so soy is a food to enjoy, not a cure, | so soy is a reasonable food choice but not a treatment, |
| 87 | phrasing ★ | knowing when to refer beats selling a supplement. | knowing when to refer matters more than recommending a supplement. |
| 90 | phrasing | especially for symptoms diet can't touch. | especially for symptoms diet does not affect. |

### book/quizzes/micronutrients-hydration.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 113 | jargon | Iodine builds thyroid hormone, which drives foetal brain development | Iodine is needed to make thyroid hormone, which is essential for foetal brain development |

### book/quizzes/obesity-metabolic-syndrome.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 57 | phrasing ★ | The classic leptin-down, ghrelin-up story comes from a small early sleep-restriction experiment, but a 2025 meta-analysis of trials found no reliable hormone shift, so the hormone story gives a direction, not a proven mechanism. | The classic leptin-down, ghrelin-up account comes from a small early sleep-restriction experiment, but a 2025 meta-analysis of trials found no reliable hormone shift, so the hormone mechanism is suggestive, not proven. |
| 66 | jargon | misframes an upstream driver as a character flaw. | misframes an underlying cause as a character flaw. |
| 79 | phrasing | not a first-line move. | not a first-line step. |

### book/quizzes/pregnancy-lactation.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 9 | phrasing | so the extra is a snack, not a second dinner. | so the extra amounts to about a snack a day. |
| 18 | phrasing | What's the right first read? | What is the most likely explanation? |
| 87 | phrasing | Macrosomia and neonatal hypoglycaemia are two ends of one chain: maternal glucose in, foetal insulin out, overgrowth, then hypoglycaemia once the supply stops. | Macrosomia and neonatal hypoglycaemia share one cause: high maternal glucose raises foetal insulin, which drives overgrowth and then hypoglycaemia once the supply stops. |

### book/quizzes/type-2-diabetes.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 15 | phrasing | is the stronger first move. | is the stronger first step. |
| 92 | phrasing | The better move is to shift toward wholegrains | The better choice is to shift toward wholegrains |

### book/quizzes/undernutrition-malnutrition.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 73 | phrasing | not the opening move, | not the first step, |
| 76 | jargon | using it without fixing the cause underperforms. | using it without fixing the cause is less effective. |

### book/quizzes/why-nutrition-matters.quiz.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 33 | hyperbole | Whole dietary patterns matter more than any single food | Whole dietary patterns matter more than single foods |
| 48 | phrasing | Every landmark trial carries limits. | PREDIMED has important limitations. |

### book/structures/scfa.mol.yml

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 26 | hyperbole | The least abundant SCFA yet the most important locally | The least abundant SCFA yet the main one used locally |

### components/src/BoneBank.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 20 | jargon ★ | Move the levers and watch WHEN the account crosses the osteoporosis line. The biggest lever is the peak you build young. | Move the controls and watch WHEN the account crosses the osteoporosis line. Peak bone mass built when young has the largest effect. |
| 27 | jargon ★ | the youth deposit pays off most | a higher peak built in youth has the largest effect |
| 126 | jargon ★ | Move the levers · watch when the account runs low | Move the controls · watch when bone density reaches the osteoporosis line |

### components/src/BoneWindow.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 23 | jargon | Scrub the age, then toggle the levers: watch the bank fill, then plateau. | Scrub the age, then toggle the factors: watch the bank fill, then plateau. |
| 36 | jargon ★ | The strongest lever, and most powerful in early puberty — high-impact loading builds bone directly. | A major modifiable factor, and most effective in early puberty — high-impact loading builds bone directly. |
| 43 | phrasing | it shaves the ceiling for life, whatever else you do | the loss can be permanent, whatever the other factors |
| 44 | jargon ★ | the levers show the payoff of reaching adequacy | the toggles show the benefit of reaching adequate intake |
| 139 | hyperbole | The steep climb, and the biggest opportunity, is still ahead. | The steepest gain in bone mass is still ahead. |
| 149 | jargon ★ | Scrub age · toggle the levers | Scrub age · toggle the factors |
| 212 | jargon | Bone-building levers | Bone-building factors |

### components/src/CarbSafetyCheck.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 42 | phrasing | Drug class first, every time. | Check the drug class first. |

### components/src/CasePlayer.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 251 | phrasing | Not enabled in this build, so the case continues seamlessly (graceful <code>fallbackGoto</code>). | Not enabled in this version, so the case continues without it. |

### components/src/ClaimAnalyzer.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 111 | phrasing | then try another claim and watch where it lands | then try another claim and compare its verdict |

### components/src/DietHistory.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 21 | jargon | note: 'The highest-yield probe.' | note: 'The most informative question.' |
| 82 | jargon ★ | You missed the highest-yield question | You missed the most informative question |
| 83 | jargon ★ | The highest-yield question is often the one not asked. | The most informative question is often the one not asked. |
| 87 | jargon ★ | enough of the high-yield pattern to advise well | enough of the main eating pattern to advise well |
| 91 | jargon ★ | now cover the other high-yield strands | now cover the other informative areas |

### components/src/FatSwap.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 22 | phrasing | This is the swap the trials reward. | This is the swap the trials support. |
| 23 | phrasing | they are the backbone of the Mediterranean pattern | they are central to the Mediterranean pattern |
| 25 | phrasing | It is the quality of the swap, not the size of the cut, that moves LDL and events. | LDL and events depend on what replaces the fat, not on how much is cut. |
| 34 | phrasing | The swap, not the cut, is what protects the heart. | The benefit comes from the replacement, not from the cut alone. |

### components/src/HealthyPlate.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 193 | phrasing | That is the whole idea: adapt the plate to the cuisine, not the family to a foreign diet. | The aim is to adapt the plate to the household's cuisine, not to impose an unfamiliar diet. |

### components/src/MetsCluster.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 23 | phrasing | is the shared root that pulls the whole cluster together | is the shared underlying abnormality that links the components |
| 26 | jargon | visceral fat, not overall weight, is the driver | visceral fat, not overall weight, carries the risk |
| 35 | jargon | caption: 'Modifiable levers that feed the hub', | caption: 'Modifiable factors that feed central fat and insulin resistance', |
| 194 | jargon ★ | \|\| 'Modifiable levers that feed the hub' | \|\| 'Modifiable factors that feed central fat and insulin resistance' |

### components/src/PillarsHub.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 70 | phrasing | Click a pillar to see how it and nutrition pull on each other | Click a pillar to see how it and nutrition affect each other |
| 116 | phrasing | Nutrition connects to every other pillar, in both directions — pull on it and the whole web tends to move. | Nutrition is linked to every other pillar, in both directions, so a change in one tends to affect the others. |

### components/src/RenalFlip.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 21 | jargon ★ | except the one lever that doesn't | except the one piece of advice that doesn't |
| 42 | phrasing | Check first — if unsure, don’t. | Check first; if unsure, do not recommend it. |
| 69 | jargon ★ | Sodium is the one lever that does NOT reverse in CKD | Cutting sodium is the one piece of advice that does NOT reverse in CKD |
| 69 | jargon ★ | The lever a generalist can safely reinforce. | It is the change a generalist can safely reinforce. |
| 75 | phrasing | Recognising the flip is the skill; | The skill is recognising which advice reverses; |

### components/src/RequirementDial.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 22 | phrasing | The surprise: the requirement barely rises | The requirement barely rises |

### components/src/SamePlate.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 36 | phrasing | The rule here is density UP, restriction OFF. | The aim is to raise nutrient density, not to restrict the diet. |

### components/src/TrialCheck.svelte

| Line | Kind | Current | Proposed |
|---|---|---|---|
| 23 | phrasing ★ | The impressive cohort number did not survive the trial. | The trial did not confirm the large effect seen in the cohort studies. |
| 24 | jargon ★ | The vascular lever is the one that holds up. | Vascular risk control is the intervention with trial support. |
