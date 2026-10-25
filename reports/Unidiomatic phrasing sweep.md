# Unidiomatic phrasing sweep (2026-10-25)

**What it is.** Wording no standard medical textbook or clinician would use, even when the meaning can be worked out: "a bedside **read** of central fat" (→ "a simple bedside measure"), a value that "**sits** at" (→ "is"), "**tracks with**" (→ "is associated with"), "the first **move**" (→ "the first step"), "an absolute **avoid**" (→ "must be avoided completely"), "**low-regret**" (→ "low-risk"), "fed up quickly" for refeeding (→ "refed rapidly"), plus coined labels, figures of speech where a literal term exists, slogan-like compressed sentences, and vague intensifiers ("a great deal", "does the work").

**Applied:** 1426 rewrites across chapters, glossary, quizzes, cases and island text (this includes 315 milder items left over from the first style sweep, re-judged). Six adversarial checkers then reviewed every changed line and raised 88 issues (no fact changes survived; 11 serious: two broken sentences, MCQ length tells, one CKD contradiction, the macronutrients "better fat, not less fat" meaning flip, the same-plate island title); all were fixed. Shared phrases were then made consistent book-wide.

**Kept by decision:** the heading "The Singapore picture" (you chose it in the scaffold pass; readers flagged "picture" as unusual, so it is listed here for a decision) and the defined term "defended range".

**Guardrail:** AUTHOR.md copy-audit checklist gains the rule ("would a standard medical textbook phrase it this way?") with the recurring words; `scripts/copy-audit.mjs` gains an `unidiomatic` check.

## Every change, by file

### book/cases/alcohol-fasting-hypoglycaemia.case.yml

| Line | | Before | After |
|---|---|---|---|
| 6 |  | Give recognition-level management: | Give appropriate initial management: |
| 39 |  | reversible if caught. His reads low. | reversible if caught. His result is low. |
| 45 |  | always check the glucose. His reads low. | always check the glucose. His result is low. |
| 50 |  | check the glucose first. His reads low. | check the glucose first. His result is low. |
| 71 |  | Here it is blocked on both fronts: | Here both routes are blocked: |

### book/cases/appetite-defended-weight.case.yml

| Line | | Before | After |
|---|---|---|---|
| 4 |  | Recognise weight regain as the predicted output of body-weight regulation | Recognise weight regain as the predicted outcome of body-weight regulation |
| 39 |  | Regain is the predicted output of a regulated system: biology reasserting itself, not a moral failing. | Regain is the predicted outcome of a regulated system, not a moral failing. |
| 81 |  | The 'permanent damage' story comes from | The 'permanent damage' claim comes from |
| 130 |  | Regain is the predicted output of that system | Regain is the predicted outcome of that system |
| 132 |  | The useful move is to change the environment and habits | The useful step is to change the environment and habits |
| 148 |  | Weight regain is the predicted output of body-weight regulation | Weight regain is the predicted outcome of body-weight regulation |
| 159 |  | favouring regain of lost fat. His metabolism | favours regain of lost fat. His metabolism |

### book/cases/bmr-estimation.case.yml

| Line | | Before | After |
|---|---|---|---|
| 117 | ★ | energy balance is actively regulated, not free. | energy balance is actively regulated. |
| 146 |  | A shaky energy estimate makes for shaky advice. | An inaccurate energy estimate leads to inaccurate advice. |

### book/cases/common-questions.case.yml

| Line | | Before | After |
|---|---|---|---|
| 31 |  | and watch the same thread run | and notice the principle that runs |
| 43 |  | isn't a proven long-term win | has no proven long-term benefit |
| 55 | ★ | A flood of refined starch is what nudges glucose up | Large amounts of refined starch raise glucose |
| 66 |  | The cholesterol in food moves blood cholesterol far less than saturated and trans fat do. | The cholesterol in food raises blood cholesterol far less than saturated and trans fat do. |
| 71 |  | Saturated and trans fat move blood cholesterol more than | Saturated and trans fat raise blood cholesterol more than |
| 94 |  | the move is to swap saturated for unsaturated fat | the aim is to swap saturated for unsaturated fat |
| 99 |  | Unsaturated oils (peanut, canola, olive) make the everyday default | Unsaturated oils (peanut, canola, olive) should be the everyday default |
| 139 |  | The thread across all four questions is the same: | The principle across all four questions is the same: |
| 161 | ★ | processed meat is the stronger signal; | processed meat has the stronger evidence of harm; |
| 171 |  | remember the referral boundary when a plan turns restrictive. | remember to refer when a plan turns restrictive. |

### book/cases/dairy-acne-tiktok.case.yml

| Line | | Before | After |
|---|---|---|---|
| 6 |  | Recognise when appraisal becomes a do-no-harm conversation: | Recognise when appraising a claim becomes a safety issue: |
| 87 |  | This stopped being about acne. | Acne is no longer the main concern. |
| 87 |  | the safe move is a supportive screen and referral | the safe response is a supportive screen and referral |
| 99 |  | are red flags that outrank the acne question | are red flags that take priority over the acne question |
| 114 |  | Two habits carry this case: | This case tests two habits: |
| 124 | ★ | Signal from hype, and a red flag caught | Evidence weighed, and a red flag caught |
| 126 |  | You traced the viral claim to its real evidence | You traced the viral claim to its actual evidence |
| 128 |  | not a strict dairy cut in a growing teenager | not strict dairy elimination in a growing teenager |
| 130 |  | become a do-no-harm one | become a safety issue |
| 136 |  | Watch for the pivot: | Watch for warning signs: |

### book/cases/dementia-feeding.case.yml

| Line | | Before | After |
|---|---|---|---|
| 115 |  | Comfort, not a tube, held with compassion | Comfort, not a tube, offered with compassion |
| 117 |  | The through-line: recognise that weight loss is part of advanced dementia | In summary: recognise that weight loss is part of advanced dementia |
| 127 |  | Careful hand feeding, held with compassion | Careful hand feeding, offered with compassion |
| 136 |  | not a reversible feeding gap. | not a reversible shortfall in intake. |
| 138 |  | not a tube to appease. | not a tube inserted to appease the family. |
| 146 |  | Replay and run the safe path: | Replay and take the safe path: |

### book/cases/dementia-prevention.case.yml

| Line | | Before | After |
|---|---|---|---|
| 4 |  | Lead worried-well dementia counselling with vascular and metabolic risk, the best-supported approach. | When counselling worried-well patients about dementia, lead with vascular and metabolic risk, the best-supported approach. |
| 72 |  | The cohort signal did not survive the prevention trial; | The cohort association was not confirmed by the prevention trial; |
| 88 |  | Ginkgo was null, omega-3 capsules are null, | Trials of ginkgo and of omega-3 capsules were null, |
| 116 |  | The through-line: **lead with vascular risk** | In summary: **lead with vascular risk** |
| 120 |  | helps without selling false hope. | helps without offering false hope. |
| 144 |  | Replay and run the safe path: | Replay and take the safe path: |
| 151 |  | The cohort '50%' did not survive the prevention trial, so don't promise it. | The '50%' from cohort studies was not confirmed by the prevention trial, so don't promise it. |

### book/cases/early-t2d-remission.case.yml

| Line | | Before | After |
|---|---|---|---|
| 44 |  | The safe move is to name remission as a realistic goal | The safe approach is to name remission as a realistic goal |
| 103 |  | not the starting move | not the first step |
| 108 |  | One thing to reset before we plan | One thing to correct before we plan |
| 112 |  | not a solo project. | not something to do alone. |
| 132 |  | give him something concrete and hawker-realistic: | give him something concrete that works at the hawker centre: |
| 132 |  | and let Healthier SG carry the follow-up. | and arrange follow-up through Healthier SG. |

### book/cases/gut-microbiome-test-kit.case.yml

| Line | | Before | After |
|---|---|---|---|
| 91 |  | so tracking it spends money to chase noise. | so tracking it spends money on random variation. |
| 126 |  | Two things to hold together. | Keep two points in mind. |

### book/cases/infancy-feeding.case.yml

| Line | | Before | After |
|---|---|---|---|
| 42 |  | 'About 6 months' has a 4-month floor for the ready baby | 'About 6 months' allows a start from 4 months for a baby who is ready |
| 42 |  | Watch the baby, not the calendar. | Readiness matters more than the exact date. |
| 54 |  | and also nudges a sweet preference. | and may encourage a preference for sweet tastes. |
| 88 |  | helps the grandmother come along. | helps the grandmother accept the advice. |
| 113 |  | so it waits as the *main drink* | so it should not be the *main drink* until then |
| 169 |  | Replay and run the safe path. | Replay and take the safe path. |
| 177 |  | foods, turned the | foods, addressed the |
| 178 |  | allergen worry around, | allergen worry, |
| 184 |  | iron-store depletion at ~6 months sets the default, and readiness, not the calendar, sets each baby's start. | iron stores run low at ~6 months, which sets the usual start, and readiness, not the calendar, decides when each baby begins. |
| 186 |  | mind food form for choking. | choose food textures that avoid choking. |
| 196 |  | and run the safe path: iron-rich | and take the safe path: iron-rich |

### book/cases/iron-deficiency-aisha.case.yml

| Line | | Before | After |
|---|---|---|---|
| 52 |  | Transfusion would be over-escalation, and it is not the call to make here. | Transfusion would be excessive and is not indicated here. |
| 60 |  | Aisha sits squarely in the **classic at-risk group** | Aisha belongs to the **classic at-risk group** |

### book/cases/madam-lim-bone.case.yml

| Line | | Before | After |
|---|---|---|---|
| 5 |  | so content is not availability; | so high content does not mean high bioavailability; |
| 7 |  | deliver food-first and loading advice, and correct real deficiency | deliver food-first and weight-bearing exercise advice, and correct real deficiency |
| 58 |  | content isn't availability. | high content does not mean high absorption. |
| 78 |  | Oxalate locks spinach's calcium away, | Oxalate binds spinach's calcium, |
| 78 |  | Content is not availability: | Bioavailability matters more than content: |
| 84 |  | This confuses content with availability. | This confuses content with bioavailability. |
| 146 |  | The right move is to screen (OSTA) | The right step is to screen (OSTA) |
| 189 |  | Food-first, screened and referred, not drugged | Food-first, screened and referred, not medicated |
| 204 |  | deliver food-first and loading advice, correct deficiency | deliver food-first and weight-bearing exercise advice, correct deficiency |
| 217 |  | content isn't availability; | bioavailability matters more than content; |
| 224 |  | Content isn't availability: | Bioavailability matters more than content: |

### book/cases/mdm-lim-widowed.case.yml

| Line | | Before | After |
|---|---|---|---|
| 41 | ★ | The loose cheongsam is the signal that ageing in health has tipped into something to act on. | The loose cheongsam is the sign that normal ageing has become a problem that needs action. |
| 48 |  | Weight loss without trying flags malignancy, depression, dental, swallowing or medication problems | Weight loss without trying can indicate malignancy, depression, dental, swallowing or medication problems |
| 71 |  | strips intake and flavour | reduces intake and flavour |
| 88 |  | Targeting the at-risk nutrient beats blanket supplementation. | Targeting the at-risk nutrient is better than blanket supplementation. |
| 123 |  | A one-line instruction will not shift an isolated, grieving older woman with a poor appetite; | A one-line instruction will not help an isolated, grieving older woman with a poor appetite; |
| 143 |  | Replay and run it through. | Replay the case. |
| 154 |  | when a normal shift has tipped into a problem | when a normal change has become a problem |
| 155 |  | moves that help straight away. | changes that help straight away. |
| 171 |  | Replay and run the safe path: | Replay and take the safe path: |

### book/cases/mdm-tan-malnutrition.case.yml

| Line | | Before | After |
|---|---|---|---|
| 6 |  | ONS is an add-on, not the opener, | ONS is an add-on, not the first step, |
| 50 |  | Being reassured by a near-normal BMI is the classic miss. | Being reassured by a near-normal BMI is the classic error. |
| 50 |  | her BMI does not clear her, | her BMI does not rule it out, |
| 61 |  | Mdm Tan sits squarely in an at-risk group: | Mdm Tan clearly belongs to an at-risk group: |
| 81 |  | the right move is to document intake and refer now. | the right step is to document intake and refer now. |
| 105 |  | so each mouthful carries more without more volume. | so each mouthful provides more energy and protein without more volume. |
| 105 |  | may layer on later, not the opening move. | may layer on later, not the first step. |
| 160 |  | the electrolyte and pacing management is specialist, later learning. | managing electrolytes and the pace of feeding is specialist work, covered later. |
| 184 |  | a near-normal BMI does not clear her. | a near-normal BMI does not rule out malnutrition. |
| 194 |  | ONS is a dietitian's add-on, not the opener, | ONS is a dietitian's add-on, not the first step, |
| 208 |  | a normal BMI doesn't clear her | a normal BMI doesn't rule out malnutrition |
| 215 |  | ONS is an add-on, not the opening move. | ONS is an add-on, not the first step. |

### book/cases/menopause-soy.case.yml

| Line | | Before | After |
|---|---|---|---|
| 105 |  | shift to protein, activity and pattern. | shift to protein, activity and eating pattern. |
| 117 |  | Diet does a lot for bone and heart, a little for flushes, and nothing for genitourinary symptoms | Diet clearly benefits bone and heart, helps flushes a little, and does nothing for genitourinary symptoms |
| 124 | ★ | a symptom diet can't touch | a symptom that diet cannot treat |
| 130 |  | which is much of the midlife benefit. | which is a major part of the midlife benefit. |
| 179 |  | Replay and run the safe path: | Replay and take the safe path: |

### book/cases/mr-chua-cvd.case.yml

| Line | | Before | After |
|---|---|---|---|
| 4 |  | Lead with the right first move: | Take the right first step: |
| 38 |  | The first move | The first step |
| 41 |  | What is the best first move? | What should you do first? |
| 46 |  | At this stage the frame is lifestyle-first | At this stage the approach is lifestyle-first |
| 57 |  | in a hawker-lunch regular who barely walks | in a man who eats hawker lunches daily and barely walks |
| 65 |  | This is a picture you can work with: | This gives you plenty to work with: |
| 73 |  | his first dietary steer | his first dietary advice |
| 78 |  | The frame is a whole pattern plus sodium reduction | The approach is a whole pattern plus sodium reduction |
| 84 |  | Dietary fat works through quality and replacement, not blanket avoidance. | What matters with dietary fat is its quality and what replaces it, not blanket avoidance. |
| 95 |  | hawker-realistic swaps | swaps that are realistic at the hawker centre |
| 156 |  | line hasn't held up either | claim hasn't held up either |
| 161 |  | a risk-tiered clinician call | a risk-tiered clinical decision |
| 176 |  | You led with the right first move | You took the right first step |
| 187 |  | First move is lifestyle-first plus risk assessment: | The first step is lifestyle-first care plus risk assessment: |

### book/cases/mr-lim-ckd.case.yml

| Line | | Before | After |
|---|---|---|---|
| 46 |  | sits firmly in the high-risk zone | falls in the high-risk zone |
| 63 |  | the renal end of the cascade that runs through | the kidney component of the continuum that links |
| 162 |  | Both are specialist calls, not a generalist's opening move. | Both are specialist decisions, not a generalist's first step. |
| 195 | ★ | so in CKD they are an absolute avoid. | so in CKD they must be avoided completely. |

### book/cases/mr-tan-joint.case.yml

| Line | | Before | After |
|---|---|---|---|
| 5 |  | Handle the professional-vs-consumer messaging gap: | Handle the gap between professional guidance and consumer messaging: |
| 86 |  | Consumer messaging can outrun the evidence; trust the guidance. | Consumer messaging can go beyond the evidence; trust the guidance. |
| 88 |  | Consumer messaging can outrun the evidence; trust the clinical guidance. | Consumer messaging can go beyond the evidence; trust the clinical guidance. |
| 94 |  | Go on the clinical evidence, not the shelf or the website. | Base the decision on the clinical evidence, not on what is sold or posted online. |
| 112 |  | a diet-plus-exercise programme losing about 10% of body weight | a diet-plus-exercise programme that produced about 10% weight loss |
| 123 |  | the goal is a lighter, stronger, more active knee | the goal is less load on the knee, stronger muscles and more activity |
| 175 |  | deflate the hype | correct the overstated claims |
| 195 |  | recognise that consumer messaging can outrun the evidence | recognise that consumer messaging can go beyond the evidence |

### book/cases/mr-tan-obesity.case.yml

| Line | | Before | After |
|---|---|---|---|
| 5 | ★ | not a disease to be drugged. | not a disease to be treated with a drug. |
| 37 |  | would be the wrong move. | would be the wrong approach. |
| 57 |  | Singapore's clinical action points sit lower | Singapore's clinical action points are lower |
| 63 | ★ | a 98 cm waist clears the Asian central-obesity cut-off | a 98 cm waist exceeds the Asian central-obesity cut-off |
| 71 |  | Mr Tan sits in Singapore's high-risk band | Mr Tan falls in Singapore's high-risk band |
| 84 |  | the label is a risk marker, not a disease to drug. | the label is a risk marker, not a disease with its own drug. |
| 109 |  | What is the right first move? | What should you do first? |
| 114 |  | are real tiers, but they sit above lifestyle | are real tiers, but they come after lifestyle change |
| 134 |  | Two things to reset before we plan | Two things to correct before we plan |
| 139 |  | are genuine tiers, but they sit above lifestyle | are genuine tiers, but they come after lifestyle change |
| 148 |  | With that reset, | With those corrections, |
| 163 |  | The swaps are specific and hawker-realistic | The swaps are specific and realistic at the hawker centre |
| 163 |  | and let Healthier SG carry the follow-up. | and arrange follow-up through Healthier SG. |
| 170 |  | bans breed rebound and dent the relationship. | bans tend to cause rebound eating and can damage rapport. |
| 194 |  | marker and not a disease to drug | marker and not a disease with its own drug |
| 195 |  | as specialist referrals, not a first move, | as specialist referrals, not a first step, |
| 212 |  | not a disease to drug) | not a disease with its own drug) |
| 213 |  | instead of a first move, | instead of a first step, |
| 222 |  | medication and surgery are recognise-and-refer, | medication and surgery are for recognition and referral, |

### book/cases/ort-drip-free-rescue.case.yml

| Line | | Before | After |
|---|---|---|---|
| 2 |  | The drip-free rescue | Rehydration without a drip |
| 40 |  | A drip is kept for severe dehydration | A drip is reserved for severe dehydration |
| 82 |  | over-sugary drinks are osmotically the wrong tool. | drinks with too much sugar are osmotically unsuitable. |

### book/cases/pillar-mapping-mr-tan.case.yml

| Line | | Before | After |
|---|---|---|---|
| 6 |  | a single-pillar plan often underperforms a multi-pillar one | a single-pillar plan is often less effective than a multi-pillar one |
| 30 |  | a picture emerges: | a pattern emerges: |
| 48 |  | sit around his food-court diet | surround his food-court diet |
| 64 |  | but it does not sit alone. | but it is not the only factor. |
| 85 |  | leave plenty of modifiable ground | leave plenty of room for change |
| 90 |  | Why might addressing *only* his diet underperform? | Why might addressing *only* his diet be less effective? |
| 112 |  | a short daily stress micro-break | a short daily break to manage stress |
| 190 |  | Being asymptomatic is the time to prevent disease, not an all-clear. | The asymptomatic stage is the time to prevent disease, not an all-clear. |
| 205 |  | before deciding where to push. | before deciding where to focus. |

### book/cases/prediabetes-counseling.case.yml

| Line | | Before | After |
|---|---|---|---|
| 66 |  | Large, abrupt change — low adherence, risks rapport. | A large, abrupt change: adherence is likely to be low, and it risks rapport. |
| 100 |  | One specific, achievable change beats a forbidden-foods list. | One specific, achievable change works better than a list of forbidden foods. |

### book/cases/pregnancy-gdm.case.yml

| Line | | Before | After |
|---|---|---|---|
| 4 |  | withholding the test from a well-feeling woman is the error. | withholding the test from a woman who feels well is the error. |
| 6 |  | without over-reaching into insulin. | without starting insulin yourself. |
| 7 |  | Explain the foetal-hyperinsulinaemia chain and | Explain foetal hyperinsulinaemia and its consequences, and |
| 48 |  | from a well-feeling woman is the harmful choice here. | from a woman who feels well is the harmful choice here. |
| 61 | ★ | What's the right first read? | What is the most likely explanation? |
| 84 |  | What's the right first move? | What should you do first? |
| 112 |  | Macrosomia and neonatal hypoglycaemia are two ends of this one chain, | Macrosomia and neonatal hypoglycaemia are two consequences of this one mechanism, |
| 160 |  | Screen everyone, read the blood right, refer, follow up | Screen everyone, interpret the blood count, refer, follow up |
| 169 |  | Replay and run the safe path. | Replay and take the safe path. |
| 181 |  | detailed management sit with the obstetric and | detailed management are decided by the obstetric and |
| 188 |  | don't over-reach into insulin. | don't start insulin yourself. |
| 189 |  | Explain the foetal-hyperinsulinaemia chain (macrosomia | Explain the consequences of foetal hyperinsulinaemia (macrosomia |
| 197 |  | the first move after diagnosis | the first step after diagnosis |
| 198 |  | Replay and run the safe path: | Replay and take the safe path: |

### book/cases/rachel-athlete.case.yml

| Line | | Before | After |
|---|---|---|---|
| 36 |  | What is your first move? | What do you do first? |
| 48 | ★ | This is the do-harm move: | This is the harmful option: |
| 79 |  | The bigger picture is under-fuelling | The underlying problem is under-fuelling |
| 137 |  | The safe line: recognise, don't restrict, refer | The safe approach: recognise, don't restrict, refer |
| 143 |  | Replay and run the safe path. | Replay and take the safe path. |
| 171 |  | the do-no-harm fork | the do-no-harm decision |
| 173 |  | Replay and run the safe path: | Replay and take the safe path: |
| 178 |  | The requested 'put her on a diet' is the harmful answer; | Agreeing to 'put her on a diet' is the harmful answer; |

### book/cases/rahmat-shift-runner.case.yml

| Line | | Before | After |
|---|---|---|---|
| 4 |  | Right-size exercise fuelling for a recreational adult: | Match exercise fuelling to a recreational adult's needs: |
| 5 |  | Give a calibrated protein message | Give an accurate protein message |
| 56 |  | ordinary meals do the job. | ordinary meals are enough. |
| 67 |  | the worry belongs to established kidney disease. | the concern applies only to established kidney disease. |
| 90 |  | the most evidence-aligned practical change. | the practical change best supported by evidence. |
| 97 |  | worsens the metabolic picture for shift workers. | is metabolically harmful for shift workers. |
| 113 |  | best undone by durable small changes | best reversed by small, lasting changes |
| 120 |  | Crash-and-rebound rarely holds and sets up weight cycling. | Crash dieting followed by rebound rarely works and sets up weight cycling. |
| 149 |  | Drop the cardioprotection line | Drop the cardioprotection claim |
| 163 |  | Right-size the advice, and catch the real red flag | Match the advice to his needs, and catch the real red flag |
| 170 |  | Replay and run it through. | Replay the case. |
| 176 |  | Right-sized, and the red flag caught | Advice matched to need, and the red flag caught |
| 179 |  | small, sustainable changes for the creep. | small, sustainable changes for the weight creep. |
| 181 |  | right-size the popular advice | tailor the popular advice to his needs |
| 182 |  | thing that matters. *(He | real red flag. *(He |
| 199 |  | Replay and run the safe path: | Replay and take the safe path: |
| 200 |  | small steady habits for the creep | small steady habits for the weight creep |
| 205 |  | Right-size fuelling: | Match fuelling to need: |

### book/cases/refer-or-advise.case.yml

| Line | | Before | After |
|---|---|---|---|
| 35 |  | what is your first move? | what do you do first? |
| 40 |  | crosses into medical nutrition therapy, which is the dietitian's role | requires medical nutrition therapy, which is the dietitian's role |
| 47 |  | don't advise-and-stop. | don't give advice and stop there. |
| 63 |  | turn a hand-off into a head start. | give the dietitian what they need to start work. |
| 113 |  | Her complexity crosses into medical nutrition therapy | Her complexity requires medical nutrition therapy |
| 125 |  | three medicines crosses into medical | three medicines requires medical |
| 133 |  | crosses into MNT: refer, don't improvise. | requires MNT: refer, don't improvise. |
| 134 |  | A useful referral carries diagnoses | A useful referral includes diagnoses |
| 142 |  | advising-and-stopping for a complex | giving advice without referring a complex |
| 144 |  | Replay and run the safe path: | Replay and take the safe path: |
| 149 |  | Recognise when complexity crosses into MNT and refer, rather than advising-and-stopping or overstepping. | Recognise when complexity requires MNT and refer, rather than advising without referring, or overstepping. |

### book/cases/sim-bone-fracture-mdm-devi.case.yml

| Line | | Before | After |
|---|---|---|---|
| 11 |  | Recognise that a fragility fracture is the gateway to an osteoporosis assessment (DXA | Recognise that a fragility fracture should prompt an osteoporosis assessment (DXA |
| 80 |  | Food first, load the bone, and refer | Food first, weight-bearing exercise, and refer |
| 82 |  | You reframed her away from megadosing calcium | You moved her away from megadosing calcium |
| 84 |  | small fall is the gateway to a proper osteoporosis assessment. | small fall should prompt a proper osteoporosis assessment. |
| 90 |  | is the gateway to an osteoporosis assessment: she needs | should prompt an osteoporosis assessment: she needs |
| 97 |  | or left the fracture unactioned. | or did not act on the fracture. |
| 103 |  | megadosing calcium adds risk, not bone. | megadosing calcium adds risk without strengthening bone. |

### book/cases/sim-ckd-protein-encik-rahman.case.yml

| Line | | Before | After |
|---|---|---|---|
| 11 | ★ | star fruit/belimbing is an absolute avoid in kidney disease | star fruit/belimbing must be avoided completely in kidney disease |
| 37 |  | and recognise where this belongs. | and recognise when to refer. |
| 43 |  | Undo the 'avoid protein' belief | Correct the 'avoid protein' belief |
| 43 |  | the one safe generalist change | the one change a generalist can safely make |
| 43 | ★ | (an absolute avoid in kidney disease) | (to be avoided completely in kidney disease) |
| 85 |  | the one change that is safe to push | the one change that is safe to encourage |
| 90 |  | 'Avoid protein' is a harmful instinct here: | 'Avoid protein' is harmful advice here: |
| 91 | ★ | star fruit and belimbing are an absolute avoid in kidney disease | star fruit and belimbing must be avoided completely in kidney disease |
| 92 |  | (the National Kidney Foundation runs the education a referral plugs into) | (a referral can link him to the National Kidney Foundation's education programmes) |
| 99 |  | left a hazard standing or slipped into prescribing amounts. | missed a hazard or started prescribing amounts. |
| 100 | ★ | reassure him off the near-total protein restriction | reassure him and correct the near-total protein restriction |

### book/cases/sim-common-questions-mr-lim.case.yml

| Line | | Before | After |
|---|---|---|---|
| 64 |  | is a job for a dietitian. | needs a dietitian. |
| 71 |  | Met the keto keenness with a kinder, more sustainable message instead of validating it | Responded to his keenness on keto with a kinder, more sustainable message instead of endorsing it |
| 73 |  | layered on borderline glucose and raised cholesterol | in someone with borderline glucose and raised cholesterol |
| 79 |  | or left a misconception standing. | or left a misconception uncorrected. |
| 79 |  | and remember the referral boundary. | and remember when to refer. |

### book/cases/sim-dementia-prevention-mdm-goh.case.yml

| Line | | Before | After |
|---|---|---|---|
| 10 |  | rather than a proven shield. | rather than proven protection. |
| 11 |  | risk factors that carry real weight | risk factors that also contribute substantially |
| 80 |  | Look after the vessels, skip the tonics | Vascular risk first, not supplements |
| 84 |  | with referral held in reserve for her ongoing worry. | with referral available if her worry persists. |
| 88 |  | are exactly where the work is. | are the place to start. |
| 89 |  | Brain supplements are the clearest 'save your money' advice: | Brain supplements are not worth buying: |
| 89 |  | not a proven shield. | not proven protection. |
| 90 |  | Non-dietary risk factors carry real weight: | Non-dietary risk factors also contribute substantially: |

### book/cases/sim-frailty-undernutrition-mr-chua.case.yml

| Line | | Before | After |
|---|---|---|---|
| 85 |  | protein-fuller familiar food | higher-protein familiar food |
| 86 |  | flagged the dietitian: | suggested a dietitian referral: |
| 91 |  | the low-fat, low-sugar, eat-less reflex is actively harmful here. | the usual low-fat, low-sugar, eat-less advice is actively harmful here. |
| 102 |  | and flag the dietitian. | and suggest a dietitian referral. |

### book/cases/sim-iron-deficiency-aisha.case.yml

| Line | | Before | After |
|---|---|---|---|
| 70 |  | You drew out the picture she was playing down | You drew out the history she was playing down |
| 77 |  | Elicited the full picture ( | Elicited the full history ( |

### book/cases/sim-pillar-mr-tan.case.yml

| Line | | Before | After |
|---|---|---|---|
| 73 |  | looked past the plate to sleep, stress and the rest | looked beyond diet to sleep, stress and other factors |
| 88 |  | or landed on something too vague. | or agreed a change that was too vague. |
| 93 |  | Reframed 'asymptomatic' as the prevention window rather than the all-clear | Reframed 'asymptomatic' as the time for prevention rather than an all-clear |

### book/cases/sim-prediabetes-mdm-tan.case.yml

| Line | | Before | After |
|---|---|---|---|
| 77 |  | One specific, achievable change beats a forbidden-foods list. | One specific, achievable change works better than a list of forbidden foods. |

### book/cases/three-households-one-plate.case.yml

| Line | | Before | After |
|---|---|---|---|
| 36 |  | What's your first move with My Healthy Plate? | What do you suggest first, using My Healthy Plate? |
| 41 |  | and hit all four slots: | and cover all four parts of the plate: |
| 64 |  | so portion and the vegetable half do the work. | so the changes come from portion size and the vegetable half. |
| 99 |  | The fix is to add legumes | The better approach is to add legumes |
| 117 |  | This overclaims on every axis: | This overclaims in three ways: |
| 137 |  | The thread runs through all three kitchens: | The same principle applies in all three kitchens: |
| 139 |  | target the two real gaps | target the two main gaps |
| 161 |  | Legumes are a full protein quarter; | Legumes can fill the protein quarter; |

### book/cases/two-kopi-a-day.case.yml

| Line | | Before | After |
|---|---|---|---|
| 71 |  | He just handed you real motivation and the righting reflex buries it. | He has just voiced his own motivation, and instructing him now would override it. |
| 117 |  | Recognise the signal and switch | Recognise the red flag and switch |
| 122 |  | outrank the kopi goal | take priority over the kopi goal |
| 167 |  | Replay and run the safe path: | Replay and take the safe path: |

### book/cases/weight-gain-bubble-tea.case.yml

| Line | | Before | After |
|---|---|---|---|
| 6 | ★ | and never prescribe restriction into possible harm. | and never prescribe restriction where it could cause harm. |
| 40 |  | guards against the single-day trap. | guards against relying on one unrepresentative day. |
| 86 |  | beats a list she'll ignore. | works better than a list she'll ignore. |
| 116 | ★ | Prescribing restriction into a possible eating disorder is the harm to avoid. | Prescribing restriction to someone who may have an eating disorder is the harm to avoid. |
| 116 |  | Missing the safety fork means | Missing this safety point means |
| 139 |  | try the safe path through each fork. | take the safe path at each decision point. |
| 156 |  | widen a single day to 'is that typical?'. | check whether a single day is typical. |
| 159 | ★ | refer; never prescribe restriction into possible harm. | refer; never prescribe restriction where it could cause harm. |
| 166 |  | slipped on at least one fork: | slipped on at least one point: |
| 168 |  | run the safe path: assess | take the safe path: assess |

### book/chapters/01-why-nutrition-matters.qmd

| Line | | Before | After |
|---|---|---|---|
| 12 |  | as a signal of risk, not a precise count. | as an indicator of risk, not a precise count. |
| 19 |  | Describe how far Singapore's population diet sits from the guidelines | Describe how far Singapore's population diet departs from the guidelines |
| 37 |  | These have not gone away, but they have been overtaken. | These have not gone away, but they are no longer the main causes of death. |
| 42 | ★ | large part, slow diseases of daily living, driven by a handful of modifiable behaviours: | large part, chronic diseases that develop slowly and are driven by a handful of modifiable behaviours: |
| 43 |  | Diet sits near the top of that list. | Diet is near the top of that list. |
| 54 |  | The figure signals that diet is among the leading modifiable risks; | The figure indicates that diet is among the leading modifiable risks; |
| 59 |  | crisis arrives late by definition. | crisis necessarily intervenes late in the disease. |
| 60 |  | and nutrition is where that work begins. | and nutrition is central to that work. |
| 64 | ★ | slow diseases of daily living, driven by modifiable behaviours such as diet. | chronic diseases that develop slowly and are driven by modifiable behaviours such as diet. |
| 65 |  | crisis therefore arrives late, so | crisis therefore intervenes late, so |
| 67 |  | which is why that preventive work begins with nutrition. | which is why nutrition is central to that preventive work. |
| 99 |  | this preventive, behaviour-first approach is increasingly the organising frame of | this preventive approach, centred on behaviour change, is increasingly the organising principle of |
| 107 |  | so a change in diet tends to shift the other pillars as well | so a change in diet tends to affect the other pillars as well |
| 123 |  | can entrench or transform a diet. | can reinforce eating habits or help to change them. |
| 124 |  | and also disinhibits food choice. | and also reduces restraint over eating. |
| 126 |  | start with nutrition, but plan across the pillars, because fixing the diet | start with nutrition, but plan for all the pillars, because improving the diet |
| 134 |  | but plan across the pillars. | but plan for all the pillars. |
| 139 |  | A persistent trap for patients and doctors alike | A common error among patients and doctors alike |
| 140 |  | one villain (carbohydrate, fat, gluten) | one nutrient to blame (carbohydrate, fat, gluten) |
| 162 |  | What follows from the evidence for the advice he should get? | What advice does the evidence support? |
| 209 |  | it can move the other pillars too | it can benefit the other pillars too |
| 218 |  | how far the population diet sits from the guidelines | how far the population diet departs from the guidelines |

### book/chapters/04-micronutrients-hydration.qmd

| Line | | Before | After |
|---|---|---|---|
| 56 |  | so it dissolves in water and is washed out. | so it dissolves in water and is readily excreted. |
| 127 |  | classic deficiency diseases are among the most recognisable syndromes in medicine. | classic deficiency diseases are well-recognised clinical syndromes. |
| 163 |  | have seen neural-tube defects fall, the same logic of changing the food supply as salt reduction. | have seen neural-tube defects fall; salt reduction uses the same approach of changing the food supply. |
| 165 |  | carries more of the weight | is all the more important |
| 166 |  | Food sources live up to the name (Latin *folium*, leaf): dark leafy greens, beans and legumes. | As the name suggests (Latin *folium*, leaf), food sources include dark leafy greens, beans and legumes. |
| 178 |  | because they contain an inactive look-alike. | because they contain an inactive B12 analogue. |
| 225 |  | and its absorption swings with what else is on | and its absorption depends on what else is on |
| 243 |  | non-haem iron from plants needs more help to be absorbed. | non-haem iron from plants is less well absorbed. |
| 277 |  | Iodine's single job is to build thyroid hormone, which sets metabolic rate and drives foetal brain | Iodine's only known role is in making thyroid hormone, which regulates metabolic rate and is essential for foetal brain |
| 376 |  | Supplements earn their place for specific, identifiable needs: | Supplements are justified for specific, identifiable needs: |
| 397 |  | food eaten out of home | food eaten away from home |
| 398 |  | hawker-culture issue. | problem closely tied to hawker food. |
| 402 |  | The population response is policy, not willpower alone. | The population response relies on policy, not on individual willpower alone. |
| 404 |  | label-led logic | labelling principle |

### book/chapters/06-dietary-assessment.qmd

| Line | | Before | After |
|---|---|---|---|
| 42 |  | a diet cannot be counselled | a patient cannot be counselled about a diet |
| 44 |  | The same short conversation that surfaces food also surfaces | The same short conversation that covers food also covers |
| 85 |  | or shrink the less-flattering foods and portions, and | or understate the less-flattering foods and portions, and |
| 100 |  | and they are the question most often skipped. | and they are the topic most often left out. |
| 101 |  | folds in a routine, non-judgemental question about alcohol. | includes a routine, non-judgemental question about alcohol. |
| 103 |  | watch the picture build | watch the history build up |
| 118 |  | Its trap is the serving size. | The common pitfall is the serving size. |
| 121 |  | The ingredient list adds one more signal: | The ingredient list gives one more clue: |
| 128 |  | turns the label into a one-glance | condenses the label into a single |
| 136 |  | Nutri-Grade works as a nudge, not a verdict. | Nutri-Grade works as a nudge, not as a judgement on the whole diet. |
| 139 | ★ | an "A" drink is not a licence, and Nutri-Grade gives no information | an "A" grade does not offset the rest of the diet, and Nutri-Grade gives no information |
| 158 |  | or shrink the less-flattering foods and portions. Asking | or understate the less-flattering foods and portions. Asking |
| 168 |  | so the rest of the history still needs reading. | so the rest of the history still needs to be assessed. |
| 186 |  | plain terms, the two or three things worth shifting. | plain terms, the two or three things worth changing. |
| 202 |  | a screen, not a verdict: it does not capture | a screening measure, not a diagnosis: it does not capture |
| 205 |  | the two tails of the | the two extremes of |
| 206 | ★ | same range, and the commoner instinct is to look only at excess. | nutritional status, and clinicians tend to look only for excess. |
| 212 | ★ | Unplanned weight loss earns its place in MUST for a physiological reason. | Unplanned weight loss is included in MUST for a physiological reason. |
| 215 |  | The loss of that functional tissue erodes strength, immunity and recovery. | The loss of that functional tissue impairs strength, immune function and recovery. |
| 234 |  | three things worth shifting, not calculating | three things worth changing, not calculating |
| 239 |  | because the loss itself does the harm | because the loss itself is harmful |
| 241 |  | losing that functional tissue erodes strength, immunity and recovery | losing that functional tissue impairs strength, immune function and recovery |
| 250 | ★ | Knowing the food is half the job; the other half is the conversation, which has its own structure. | Assessing the diet is only part of the task; the conversation is the other part, and it has its own structure. |
| 251 |  | The widely recommended scaffold for brief counselling | The widely recommended framework for brief counselling |
| 267 | ★ | idea about your drinks?" earns a hearing, and an unasked-for lecture does not. | idea about your drinks?" makes the patient more willing to listen; an unasked-for lecture does not. |
| 269 |  | Two rules carry most of the weight. | Two rules matter most. |
| 280 |  | A do-no-harm reflex therefore belongs at first contact | Attention to possible harm therefore belongs at first contact |
| 286 |  | weight talk that feels charged. | emotionally charged talk about weight. |
| 288 |  | When something flags, a brief screen | When a red flag appears, a brief screen |
| 295 | ★ | do not prescribe restriction into a possible eating | do not advise dietary restriction when there may be an eating |
| 300 | ★ | so the idea that follows earns a hearing; an | so the patient is more willing to listen to the idea that follows; an |
| 310 | ★ | red flag. The safe response is the same either way: do not prescribe restriction into a possible | red flag. The safe response is the same either way: do not advise dietary restriction when there may be an |
| 322 |  | Say one useful, permission-first sentence. | Ask permission, then offer one useful piece of advice. |
| 323 |  | When the picture is complex or restrictive, or a red flag shows | When the diet is complex or restrictive, or a red flag appears |
| 329 |  | exercise and not a supermarket abstraction | exercise that applies beyond packaged supermarket drinks |
| 342 |  | stay alert for the signal that this is not a weight-loss conversation | stay alert for signs that this is not a weight-loss conversation |

### book/chapters/adulthood-working-life.qmd

| Line | | Before | After |
|---|---|---|---|
| 40 |  | and sits between adolescence and the midlife and older years | and comes between adolescence and the midlife and older years |
| 43 |  | eating well inside a working | eating well during a working |
| 72 |  | The fixes therefore lie in staying | The remedies therefore lie in staying |
| 80 |  | Adulthood is about keeping the muscle that growth built. | In adulthood the aim is to keep the muscle built during growth. |
| 85 |  | so keeping muscle protects metabolic health upstream | so keeping muscle also helps protect metabolic health |
| 98 |  | The range is illustrative, not a number to titrate: | The range is illustrative, not a precise target: |
| 100 |  | three common worries about protein: | three common concerns about protein is as follows: |
| 104 |  | so food does the job without a powder or a | so ordinary food is enough, without a powder or a |
| 116 |  | The fixes are staying active, | The remedies are staying active, |
| 148 |  | Caffeine, the working adult's staple, is a separate question: | Caffeine, which many working adults drink daily, is a separate question: |
| 154 |  | The tropics change the advice in one place, fluid. | In the tropics, only the advice on fluid changes. |
| 159 |  | plain water is right. | plain water is enough. |
| 171 |  | Three forces dominate. | Three influences stand out. |
| 182 |  | mechanism runs through **circadian misalignment** | mechanism involves **circadian misalignment** |
| 185 |  | The most useful evidence-aligned change | The most useful evidence-based change |
| 210 |  | so it stacks on top of an eating-out diet | so its energy adds to that of an eating-out diet |
| 219 |  | deeper management sits with addiction services | further management is the role of addiction services |
| 257 |  | reading is "aim for steady, not sawtooth". | conclusion is to aim for a steady weight, not repeated loss and regain. |
| 273 |  | The practical reading is to aim | The practical conclusion is to aim |
| 279 |  | leads to the wrong fixes. | leads to the wrong remedies. |
| 286 | ★ | The hawker plate is the food environment. | Hawker food dominates the food environment. |

### book/chapters/appetite-weight-regulation.qmd

| Line | | Before | After |
|---|---|---|---|
| 44 |  | a free choice laid on top of a passive body. | simply a matter of conscious choice. |
| 51 |  | is everywhere. Underneath it all, body weight is regulated | is readily available. Body weight itself is regulated |
| 55 |  | why weight is so hard to shift | why weight is so hard to lose |
| 56 |  | portion and drink defaults | portion sizes and drink choices |
| 56 |  | This physiology is the basis for weight care without blame | This physiology is the basis for managing weight without blame |
| 64 |  | sits beside a gap in the blood–brain barrier and so can "taste" the blood for hunger and fullness | lies beside a gap in the blood–brain barrier and so can sense circulating hunger and fullness |
| 74 |  | POMC is cut into a small signal, α-MSH | POMC is cleaved to form a smaller peptide, α-MSH |
| 95 |  | cannot act and appetite runs relentlessly high. | cannot act and appetite remains persistently high. |
| 111 |  | daily leptin injections transformed this: | daily leptin injections reversed this: |
| 121 |  | nothing like the transformation in the leptin-deficient children | far less than in the leptin-deficient children |
| 124 |  | The current reading is that leptin | The current view is that leptin |
| 167 |  | fibre fermented in the colon also turns up satiety. | fibre fermented in the colon also promotes satiety. |
| 175 |  | cannot act there, so appetite runs | cannot act there, so appetite stays |
| 183 |  | reading, leptin acts mainly as a starvation signal | view, leptin acts mainly as a starvation signal |
| 221 |  | \| Eat fruit, don't drink it \| | \| Eat whole fruit rather than drinking juice \| |
| 235 |  | The fuller-for-longer swaps use the factors above: | Swaps that keep people full for longer use the factors above: |
| 245 | ★ | ## 🍳 Healthy kitchen: cook for volume, eat for time | ## 🍳 Healthy kitchen: add volume and eat slowly |
| 256 |  | not from a decision to restrain. | not from a deliberate decision to eat less. |
| 263 |  | Fast eating outruns them, so more is eaten before satiation can end the meal. | With fast eating, more is eaten before satiation can end the meal. |
| 309 |  | Both are normal outputs of a reward system | Both are normal responses of a reward system |
| 328 |  | After meaningful weight loss, | After substantial weight loss, |
| 334 |  | Energy expenditure drops more than the smaller body should need. | Energy expenditure falls more than would be predicted for the smaller body. |
| 346 |  | that ongoing effort, not permanent damage, trims | that ongoing effort, not permanent damage, lowers |
| 357 |  | **Short sleep tilts appetite toward hunger.** | **Short sleep increases hunger.** |
| 361 |  | a clear tilt toward positive energy | a clear shift toward positive energy |
| 371 |  | so the loop is plausible but not | so the link is plausible but not |
| 380 |  | A 2025 commission draws a line within it: | A 2025 commission distinguishes two forms: |
| 405 |  | and energy expenditure drops more than the smaller body needs | and energy expenditure falls more than predicted for the smaller body |
| 406 |  | Her regain is the predicted output of body-weight | Her regain is the predicted result of body-weight |
| 420 |  | No. Appetite is a signalled biological drive. | No. Appetite is a biologically regulated drive. |
| 428 |  | That environment collides with the biology of | That environment interacts with the biology of |
| 437 | ★ | the easy default, the everyday form of the reward-and-cue physiology (see | the easy default, and they engage the reward and cue responses (see |
| 447 |  | shorter and poorer sleep tracked with greater adiposity [@helios2024sleepadiposity]: the physiology of | shorter and poorer sleep was associated with greater adiposity [@helios2024sleepadiposity], consistent with |
| 448 |  | the sleep experiments in [Sleep and stress](#sec-sleep-stress), seen in everyday life. | the sleep experiments in [Sleep and stress](#sec-sleep-stress). |
| 457 |  | as freely chosen dials, whereas | as freely chosen, whereas |
| 459 |  | useful reframe is to change | useful approach is to change |
| 460 |  | portion defaults, sleep | portion sizes, sleep |

### book/chapters/behaviour-change-counselling.qmd

| Line | | Before | After |
|---|---|---|---|
| 58 |  | to turn automatic | to become automatic |
| 65 |  | More information reaches only the deliberate part. | More information affects only the deliberate part of eating. |
| 84 |  | The 5 A's carry one caveat, about dose. | One caveat about the 5 A's concerns the amount of contact. |
| 84 |  | realistically initiates change rather than delivering | is more likely to start a change than to complete |
| 85 |  | The more intensive, multi-session programmes that do shift | The more intensive, multi-session programmes that do improve |
| 104 |  | but it reliably provokes resistance. | but it tends to provoke resistance. |
| 115 |  | surfaces what the patient can do and what is harder | shows what the patient feels able to do and what is harder |
| 118 |  | Practise the moves below with Mr Tan | Practise these skills below with Mr Tan |
| 125 |  | Once a patient voices a change | Once a patient voices a wish to change |
| 135 |  | more than the letters. | more than the acronym. |
| 135 |  | because an over-engineered goal they did not | because an elaborate goal they did not |
| 138 |  | One add-on helps: | One addition helps: |
| 145 |  | realistically starts a change but does not deliver it | realistically starts a change but does not complete it |
| 196 |  | The best SMART goals build on existing rituals: | The best SMART goals build on existing routines: |
| 204 |  | Enlist the people around the food too: | Involve the people the patient eats with too: |
| 219 |  | ritual keeps the setting and the routine and changes only the order | habit keeps the setting and the routine and changes only the order |
| 221 |  | A change that also fits the family meal survives. | A change that also fits the family meal is more likely to last. |
| 239 |  | The stance is therefore reassurance plus vigilance. | The approach is therefore to reassure while staying vigilant. |
| 254 |  | Not by knowing more, and not by trying harder to convince. | Not by the patient knowing more, and not by the clinician trying harder to persuade. |
| 255 |  | planned around the obstacle | planned around the likely obstacle |
| 270 |  | framing draws attention to a higher risk among some ethnic groups, a cue to | campaign draws attention to a higher risk among some ethnic groups, a reason to |

### book/chapters/bone-health-osteoporosis.qmd

| Line | | Before | After |
|---|---|---|---|
| 48 |  | skip the supplement and refer. | avoid the supplement and refer. |
| 54 |  | and getting them backwards is a common error. | and confusing them is a common error. |
| 56 |  | where diet nudges urate only modestly | where diet changes urate only modestly |
| 58 |  | The trap is treating them alike: | A common error is to treat them alike: |
| 59 |  | and gout is neither wear nor thinning. | and gout is neither cartilage wear nor bone loss. |
| 64 | ★ | lifestyle, a real but bounded influence: | lifestyle, a real but limited influence: |
| 69 |  | help people who are genuinely short, | help people who are genuinely deficient, |
| 71 |  | the best-marketed supplement (glucosamine) | the most heavily marketed supplement (glucosamine) |
| 77 |  | not inert scaffolding, which is why diet matters even for something as solid as the skeleton. Two cell types do the work: | not an inert structure, which is why diet affects the skeleton. Two cell types carry out this turnover: |
| 103 |  | not as a percentage cut in fractures. | not as a percentage reduction in fractures. |
| 106 |  | In women, the loss sharpens around the menopause. | In women, bone loss accelerates around the menopause. |
| 110 |  | here we follow the diet. | this chapter focuses on diet. |
| 135 |  | years of delay, not a percentage cut in fractures. | years of delay, not a percentage reduction in fractures. |
| 142 | ★ | Singapore's calcium requirements run across the life course, plus a raised need in pregnancy and lactation | Singapore's calcium requirements vary across the life course, with a raised need in pregnancy and lactation |
| 155 |  | Absorption matters more than content. How much calcium a food delivers depends on its bioavailability, and absorption varies enormously. | How much calcium a food delivers depends on its bioavailability, and absorption varies widely between foods. |
| 159 |  | The spinach that looks calcium-rich on a label is therefore nearly useless for bone, and the tofu beside it an excellent source | Spinach, although calcium-rich on a label, is therefore a poor source for bone, and calcium-set tofu a good one |
| 163 |  | milk and calcium-set tofu sit around a quarter to a third | milk and calcium-set tofu are around a quarter to a third absorbed |
| 167 |  | Dairy is optional in Singapore. Familiar foods close the gap | Dairy is not essential for calcium. Familiar local foods can close the gap |
| 175 |  | Small swaps stack up: | Small changes add up: |
| 200 |  | Common deficiency does not justify testing and dosing everyone. | Common deficiency does not justify testing and supplementing everyone. |
| 206 |  | rather than to blanket-dose the population. | rather than to supplement the whole population. |
| 214 |  | and higher protein intake with adequate calcium tracks about 11% lower hip-fracture risk | and higher protein intake with adequate calcium is associated with about 11% lower hip-fracture risk |
| 221 |  | the advice is the opposite of the fear: | the advice is the opposite: |
| 227 |  | because low weight tracks lower bone density | because low weight is associated with lower bone density |
| 241 |  | Nutrition and loading are partners (calcium is the substrate, loading is the signal to use it). | Nutrition and loading work together (calcium is the substrate, and loading is the stimulus for bone formation). |
| 249 |  | The solid dietary risks are | The established dietary risks are |
| 256 |  | is offset by the splash of milk in the coffee | is offset by a little milk in the coffee |
| 257 |  | The cola–bone signal is observational | The cola–bone association is observational |
| 291 |  | Cherries for gout: an observational signal only | Cherries for gout: an observational association only |
| 300 |  | the commonest arthritis and a very high local burden, | the commonest arthritis and very common locally, |
| 303 |  | Obesity is the leading modifiable risk, | Obesity is the leading modifiable risk factor, |
| 324 |  | Glucosamine shows how consumer messaging can outrun the evidence. | Glucosamine shows how consumer messaging can go beyond the evidence. |
| 327 |  | The do-no-harm point is | The point about harm is |
| 328 |  | these supplements are physically fairly safe | these supplements are generally safe |
| 336 |  | it is misunderstood at both ends. | it is misunderstood in two opposite ways. |
| 337 |  | respond by cutting food drastically; | respond by cutting back on food drastically; |
| 341 |  | nudges urate in both directions, but only modestly | changes urate in both directions, but only modestly |
| 354 |  | the message runs: | the message is: |
| 370 |  | Calcium belongs to osteoporosis, a | Calcium is relevant to osteoporosis, a |
| 390 |  | National guidance sets case-finding and treatment. | National guidance covers case-finding and treatment. |
| 421 |  | without blanket-supplementing | without supplementing everyone |
| 430 |  | Diet nudges urate only modestly: | Diet has only a modest effect on urate: |
| 446 |  | For the joints, the answer is usually less about a pill: | For the joints, the answer usually does not involve a supplement: |
| 454 |  | **Two local facts overturn imported assumptions.** | **Two local findings contradict common assumptions.** |
| 457 |  | The imported assumptions (that a | The common assumptions (that a |
| 465 |  | carry the highest ethnic risk | have the highest risk of any ethnic group |

### book/chapters/brain-health-dementia.qmd

| Line | | Before | After |
|---|---|---|---|
| 15 |  | Mediterranean-style pattern as a low-regret choice. | Mediterranean-style pattern as a low-risk choice. |
| 17 |  | Identify the non-dietary measures with real weight: | Identify the non-dietary measures with good supporting evidence: |
| 29 |  | a cohort signal, a null trial | a cohort association, a null trial |
| 40 |  | the evidence is encouraging in one place and thin in the others | the evidence is encouraging in one area and weak in the others |
| 48 |  | a reasonable, low-regret choice | a reasonable, low-risk choice |
| 60 |  | Two kinds of brain damage usually run together in dementia. | Two kinds of brain damage usually occur together in dementia. |
| 64 |  | Neurodegeneration is the dominant picture in Alzheimer's disease. | Neurodegeneration is the dominant process in Alzheimer's disease. |
| 94 |  | The additive model has a hopeful corollary. | The additive model has a practical implication. |
| 126 |  | points make the estimate usable. | points help in interpreting the estimate. |
| 148 |  | The cohort signal did not survive the trial. | The trial did not confirm the cohort association. |
| 150 |  | Three explanations fit the gap | Three explanations could account for the difference |
| 152 |  | People who eat well differ in a hundred other ways, | People who eat well differ in many other ways, |
| 158 |  | Which impressive claims survive a randomised trial is rarely obvious in advance. | It is rarely possible to predict which promising observational findings a randomised trial will confirm. |
| 163 |  | It is reasonable to recommend as a low-regret choice | It is reasonable to recommend as a low-risk choice |
| 167 |  | the benefit probably runs largely through the | the benefit probably comes largely from the |
| 172 |  | Sooner or later the patient asks about a pill. | Patients often ask about supplements. |
| 178 |  | eat fish as food: the capsule is not the food | eat fish rather than taking capsules |
| 179 |  | so this one can harm | so this one can cause harm |
| 189 |  | The worried-well patient deserves the whole picture, and some of the strongest preventive measures are | The worried-well patient should hear about all the options, and some of the strongest preventive measures are |
| 196 |  | checked" is concrete, high-value advice. | checked" is concrete, useful advice. |
| 198 |  | round out the picture. | complete the list. |
| 206 |  | Vascular risk control has the strongest trial signal: | Vascular risk control has the strongest trial evidence: |
| 210 |  | and it did not survive a three-year randomised trial. | and it was not confirmed in a three-year randomised trial. |
| 211 |  | a low-regret, heart-healthy choice | a low-risk, heart-healthy choice |
| 267 |  | The recognise-and-refer posture, and the malnutrition screening behind it, | The recognise-and-refer approach, and the malnutrition screening behind it, |
| 284 |  | a sensible, low-regret choice | a sensible, low-risk choice |
| 286 |  | can occasionally harm. | can occasionally cause harm. |
| 287 |  | Add the non-dietary measures that carry real weight, | Add the non-dietary measures with good supporting evidence, |
| 291 |  | evidence-based answer is comfort, not a tube, | evidence-based answer is careful hand feeding for comfort, not a tube, |
| 308 |  | The second is a set of local socio-cultural signals. | The second is a set of local socio-cultural findings. |
| 309 |  | tracks with better cognition | is associated with better cognition |
| 322 |  | without selling false hope. | without offering false hope. |

### book/chapters/cardiovascular-disease-hypertension.qmd

| Line | | Before | After |
|---|---|---|---|
| 38 |  | Two facts set the stakes. | Two figures show the scale of the problem. |
| 43 |  | Two principles frame the advice and the referral: | Two principles guide the advice and the referral: |
| 45 |  | The modern framing treats heart-healthy eating | Current guidance treats heart-healthy eating |
| 60 |  | all sit within this pattern | are all part of this pattern |
| 100 |  | feed both pathways | contribute to both pathways |
| 108 |  | Easing either pathway | Acting on either pathway |
| 122 |  | with pooled trials nearer 3–7/2–4 mmHg | with pooled trials showing falls nearer 3–7/2–4 mmHg |
| 123 |  | Even so, a few mmHg across a population meaningfully lowers stroke and heart disease. | Even so, a fall of a few mmHg across a population meaningfully lowers rates of stroke and heart disease. |
| 126 |  | so the advice is *potassium-rich produce, not pills* | so the advice is to eat potassium-rich produce, not to take pills |
| 128 |  | My Healthy Plate carries the core of DASH into everyday meals | My Healthy Plate applies the core of DASH to everyday meals |
| 145 |  | One option with hard-outcome support is | One option supported by hard-outcome evidence is |
| 155 |  | if in doubt, don't. | if in doubt, do not recommend it. |
| 162 |  | *soup* can carry most of a day's sodium | *soup* can contain most of a day's sodium |
| 187 |  | soup can carry most of a day's sodium on its own | soup can contain most of a day's sodium on its own |
| 210 |  | The answer separates three | The answer distinguishes three |
| 215 |  | so the advice is the fish, not the capsule | so the advice is to eat the fish, not take the capsule |
| 227 |  | signal driven mainly by stroke | reduction driven mainly by stroke |
| 229 |  | The evidence carries two caveats. | Two caveats apply to the evidence. |
| 249 |  | Alcohol reduction is therefore a cardiovascular measure for people who drink, but never a reason for anyone to start. | Alcohol reduction is therefore a cardiovascular measure for people who drink, but the evidence gives no one a reason to start. |
| 277 |  | lower risk and refer or co-manage for the plan: | lower risk, then refer or share care to make the plan: |
| 294 |  | Why is quoting a target from memory the wrong move? | Why is quoting a target from memory a mistake? |
| 320 |  | is the case for screening a disease that has no symptoms | shows the need to screen for a disease that has no symptoms |
| 323 |  | **The dietary changes have national counterparts.** | **National measures support each dietary change.** |
| 330 |  | **Risk is estimated, and the tool must fit the population.** | **Risk scores must be calibrated to the local population.** |
| 343 |  | lead with the right first move | start with the right first step |
| 345 |  | or reaching for a drug first, would be the wrong reflex | or reaching for a drug first, would be a mistake |
| 345 |  | Your choices branch the case. | The case branches according to your choices. |

### book/chapters/cases-counselling.qmd

| Line | | Before | After |
|---|---|---|---|
| 9 |  | All four patients are the bread and butter of prevention. | All four patients are typical of everyday preventive care. |
| 30 | ★ | Answer them on quality-not-bans terms | Answer them by focusing on overall diet quality rather than banning foods |

### book/chapters/cases-referral.qmd

| Line | | Before | After |
|---|---|---|---|
| 27 |  | the advice around, and agree a safe next step. | the advice towards eating more, and agree a safe next step. |
| 43 |  | and recognise where this belongs. | and recognise when to refer. |

### book/chapters/childhood-adolescence.qmd

| Line | | Before | After |
|---|---|---|---|
| 4 |  | while eating habits form that tend to last. | while eating habits that tend to persist are formed. |
| 46 |  | The window for accruing peak bone mass briefly opens and then closes for life. | The window for accruing peak bone mass opens briefly and then closes. |
| 55 |  | a child's height is best read as a point on | a child's height is best interpreted as a point on |
| 76 |  | so appetite is best read against growth. | so appetite is best judged against growth. |
| 77 |  | mid-pubertal teenager eating far more is usually feeding a spurt. | mid-pubertal teenager eating far more is usually meeting the needs of a growth spurt. |
| 77 |  | The flag worth noticing is intake that | The warning sign is intake that |
| 90 |  | a brief, hormone-gated window | a brief, hormone-dependent window |
| 105 |  | What actually builds bone is more specific, and less tidy, than "drink milk". | The evidence on what builds bone is more specific than the advice to "drink milk". |
| 107 |  | vitamin D help but carry weaker evidence | vitamin D help but the evidence for them is weaker |
| 132 |  | the risk compounds when heavy periods meet a meat-light diet, a combination that | the risk rises further when heavy periods occur with a diet low in meat, a combination that |
| 133 |  | multiplies the odds of deficiency far beyond either alone | multiplies the odds of deficiency compared with either factor alone |
| 149 |  | The practical wins come from pairing foods, not from supplements. | The practical gains come from combining foods, not from supplements. |
| 163 |  | trajectory is usually feeding a spurt. | trajectory usually reflects a growth spurt. |
| 164 |  | would be the flag. | would be the warning sign. |
| 181 |  | Two environmental forces stand out. | Two environmental influences stand out. |
| 185 |  | cleanest evidence comes from trials | strongest evidence comes from trials |
| 189 |  | Sugary drinks are a red flag to recognise at this life stage, not a poison to | Sugary drinks are a risk to recognise at this life stage, not a toxin to |
| 200 |  | Family meals are the counterweight. | Family meals can offset some of these influences. |
| 211 |  | an active adolescent needs to be fuelled, not slimmed. | an active adolescent needs enough energy, not weight loss. |
| 265 |  | Adolescence is the peak onset window for eating disorders: | Adolescence is the peak age of onset for eating disorders: |
| 285 |  | Two points sharpen recognition. | Two points help with recognition. |
| 297 |  | Two further patterns complete the picture. | Two further patterns are worth recognising. |
| 305 |  | because ordinary physiology meets an obesogenic environment. | because normal pubertal physiology coincides with an obesogenic environment. |
| 311 |  | diabetes is now emerging downstream of it, | diabetes is now emerging as a consequence, |
| 322 | ★ | How to raise weight safely, the do-no-harm interview itself, is | How to raise the subject of weight safely is |
| 348 |  | paediatric type 2 diabetes is emerging downstream of it. | paediatric type 2 diabetes is emerging as a consequence. |
| 368 |  | It is nonetheless the country's canonical example of how not to run such a scheme: | It is nonetheless Singapore's best-known example of how not to run such a scheme: |
| 373 |  | do-no-harm rule made national policy: | do-no-harm rule, now national policy: |
| 380 |  | best paired with the family and school environment. | best combined with changes at home and at school. |
| 394 |  | screen at-risk (with | screen positive for risk (with |
| 396 |  | These atypical presentations are the local face of eating | These atypical presentations show that, in Singapore too, eating |
| 397 |  | disorders across the weight spectrum. | disorders occur across the weight spectrum. |

### book/chapters/chronic-kidney-disease.qmd

| Line | | Before | After |
|---|---|---|---|
| 3 |  | is mostly the downstream damage of diabetes | is mostly a complication of diabetes |
| 17 |  | explain why star fruit is an absolute avoid | explain why star fruit must be avoided completely |
| 40 |  | It is the renal end of the cascade that runs through obesity | It is the kidney complication of the disease process that links obesity |
| 53 |  | The goal here is recognition, not threshold recall | The goal here is to recognise risk, not to recall thresholds |
| 59 |  | Most CKD is the organ damage of poorly controlled diabetes and hypertension | Most CKD is organ damage caused by poorly controlled diabetes and hypertension |
| 60 |  | "renal diet" is upstream: glycaemic and blood-pressure control years earlier | "renal diet" is good glycaemic and blood-pressure control, years earlier |
| 65 |  | A printout is not a   prescription | A generic diet sheet does not   replace individual advice |
| 73 |  | whereas heart disease mostly changes how much of certain foods. | whereas heart disease mostly changes how much of certain foods they should eat. |
| 84 |  | a dietary load that a healthy kidney would shed | a dietary load that a healthy kidney would clear |
| 96 |  | therefore readily slide into **protein-energy wasting**, undernutrition layered on top of kidney | therefore readily develop **protein-energy wasting**, undernutrition superimposed on kidney |
| 97 |  | makes reflexive restriction hazardous | makes automatic restriction hazardous |
| 111 |  | already slide easily into protein-energy wasting | are already prone to protein-energy wasting |
| 135 |  | the confident reading that | the confident conclusion that |
| 136 |  | The fair reading is a benefit with a caveat, not a settled prescription. | A fair interpretation is a qualified benefit, not a settled prescription. |
| 143 |  | tip into protein-energy wasting | develop protein-energy wasting |
| 162 | ★ | Singaporeans start badly placed: | Singaporeans start from a high intake: |
| 164 | ★ | CKD adds a firm caution about one common way of cutting salt, the potassium salt substitute | In CKD, one common way of cutting salt, the potassium salt substitute, needs particular caution |
| 177 |  | That individualising is a dietitian's job | Individualising the advice is a dietitian's job |
| 198 |  | they are an **absolute avoid**, not a portion-controlled food | they must be **avoided completely**, not eaten in controlled portions |
| 205 |  | its form matters more than the milligrams | its form matters more than the amount |
| 215 |  | the printed phosphorus number badly under-counts what is actually absorbed | the printed phosphorus figure greatly underestimates what is actually absorbed |
| 252 |  | The potassium amount is set to blood levels by a dietitian. | A dietitian sets the potassium amount according to blood levels. |
| 275 |  | patient education that a referral plugs into | patient education programmes to which patients are referred |
| 284 | ★ | avoid the do-no-harm hazards | avoid the two safety hazards |
| 299 |  | tuned to the person and | adjusted to the person and |
| 303 |  | managed to blood levels rather than banned | adjusted according to blood levels rather than banned |
| 311 |  | Local CKD prevalence tracks the cardiometabolic risk factors closely | Local CKD prevalence is closely linked to the cardiometabolic risk factors |
| 313 |  | The largest gain for the kidney is therefore made years upstream, in the control of diabetes and blood pressure. | The largest benefit for the kidney therefore comes years earlier, from the control of diabetes and blood pressure. |
| 316 |  | diabetic kidney disease dominates new dialysis | diabetic kidney disease accounts for most new dialysis starts |
| 324 |  | runs against a flavour-dense hawker palate built on soy, | conflicts with strongly flavoured hawker food based on soy, |
| 325 |  | struggle to eat well and slide toward wasting | struggle to eat well and develop wasting |
| 339 |  | would be the wrong reflex. | would be a mistake. |

### book/chapters/dietary-guidelines-patterns.qmd

| Line | | Before | After |
|---|---|---|---|
| 46 | ★ | Those stages all bend from a shared baseline, the healthy pattern for a general, healthy adult. | Each stage adjusts a shared baseline, the healthy pattern for a general, healthy adult. |
| 48 |  | so the shape is learned once and then adjusted to each patient | so the pattern is learned once and then adjusted to each patient |
| 54 |  | knowing where that boundary sits | knowing where that boundary lies |
| 63 |  | strength, because it smooths out the single dramatic trial, and its limit, | strength, because it does not rest on any single striking trial, and its limit, |
| 66 | ★ | Guidelines come in two registers: | Guidelines take two forms: |
| 86 |  | The plate therefore travels well | The plate therefore applies equally well |
| 87 |  | it fixes the shape of a meal and leaves the size to appetite and need | it fixes the proportions of a meal and leaves the amount to appetite and need |
| 96 | ★ | The WHO Healthy Diet is the normative backbone of thresholds: | The WHO Healthy Diet sets the reference thresholds: |
| 120 |  | read from each one's own text | taken from each guideline's own text |
| 134 |  | the guidelines broadly agree, and the agreement is | the guidelines broadly agree, and the shared advice is |
| 135 |  | unglamorous. Eat mostly plants and whole foods, and go easy on sugar, salt and highly processed | simple: eat mostly plants and whole foods, and limit sugar, salt and highly processed |
| 165 | ★ | The pattern view also disarms the perennial "is [food] good or bad now?" question. | The pattern view also answers the recurring "is [food] good or bad now?" question. |
| 167 | ★ | "what pattern is this part of?", the noise settles. | "what pattern is this part of?", the findings become more consistent. |
| 175 |  | sound; the magnitude is easy to oversell. | sound, but its size is easily overstated. |
| 179 |  | each trial's limits belong with its result | each trial's limits should be quoted with its result |
| 225 |  | The trial is a clean demonstration that a dietary pattern moves a risk factor | The trial clearly shows that a dietary pattern can lower a risk factor |
| 235 |  | its caveat is how hype begins, and spotting the gap is a skill in its own right | its caveat overstates the evidence, and spotting the omission is a skill in its own right |
| 242 | ★ | At the level of the pattern the noise settles, because | At the level of the pattern the findings are more consistent, because |
| 252 |  | The trial therefore shows that a pattern moves a risk factor | The trial therefore shows that a pattern can lower a risk factor |
| 262 | ★ | Each can be read with the same pattern lens: | Each can be judged by the same question: |
| 268 |  | reach the same verdict | reach the same conclusion |
| 271 |  | That finding gives each popular diet a verdict, set out below with | The table below applies that finding to each popular diet, with |
| 277 | ★ | it helps whoever it helps to eat less | it works only for people whom it helps to eat less |
| 277 |  | A reasonable structure for some, not a metabolic reset | A reasonable structure for some, with no special metabolic benefit |
| 285 |  | not the cleverest one | not the most elaborate one |
| 289 |  | The one real harm to watch for is disordered eating | The main harm to watch for is disordered eating |
| 290 |  | refer if a red flag shows (see | refer if a red flag appears (see |
| 318 |  | cooking to the quarter-quarter-half shape | cooking to the quarter-quarter-half proportions |
| 328 | ★ | why the pattern does the work | why the whole pattern matters |
| 329 | ★ | No single swap on that plate does all the work; the effect is mechanistic and cumulative. | No single swap on that plate accounts for the benefit; the effects are mechanistic and cumulative. |
| 332 |  | then does three jobs at once: | then has three effects: |
| 342 |  | what tracks with better health | what is associated with better health |
| 348 |  | Hit the plate with hawker choices | Meet the plate's proportions with hawker choices |
| 359 |  | At home the plate is easier to hit: | At home the plate is easier to follow: |
| 393 |  | their own cuisine rebuilt to the plate | their own cuisine adapted to the plate's proportions |

### book/chapters/digestion-absorption.qmd

| Line | | Before | After |
|---|---|---|---|
| 84 |  | sweeps leftovers and | sweeps undigested residue and |
| 89 |  | Transit times are coarse ranges, not fixed numbers | Transit times are approximate ranges, not fixed numbers |
| 102 |  | Four sites do the chemical work, each with its own enzymes and targets: | Chemical digestion takes place at four sites, each with its own enzymes and targets: |
| 106 |  | a token start on fat | a small amount of fat |
| 128 |  | The concept matters here, not the named activation cascade. | At this stage the concept matters, not the details of the activation cascade. |
| 162 |  | The gut hormones share one logic: | The gut hormones follow a common principle: |
| 176 |  | carried by GIP and a | mediated by GIP and a |
| 186 |  | This is the general logic of the gut hormones: | This is the general principle of the gut hormones: |
| 204 |  | fuzz of **microvilli** | dense layer of **microvilli** |
| 369 |  | Industrial processing performs much of the gut's mechanical work | Industrial processing does much of the breakdown that the gut would otherwise do |
| 372 |  | Their soft textures are also eaten more quickly and signal satiety less effectively, | Because of their soft texture, they are also eaten more quickly and are less satiating, |
| 390 | ★ | Viscous fibre acts twice, once on speed and once on bile. | Viscous fibre has two effects: it slows digestion and it binds bile salts. |
| 393 |  | This is the enterohepatic circulation deliberately interrupted | In effect, the fibre interrupts the enterohepatic circulation |
| 422 |  | priority is the habit rather than the list: | habit matters more than memorising the list: |
| 430 |  | still gets fluid in. | still allows fluid to be absorbed. |
| 443 |  | the modern WHO formula is a precise, low-strength mix | the modern WHO formula is a reduced-osmolarity solution |
| 461 |  | Going gluten-free can cost fibre and micronutrients | Going gluten-free can reduce the intake of fibre and micronutrients |
| 464 |  | as a diagnosable, supplement-fixable disease | as a diagnosable disease that supplements can treat |
| 502 |  | the last enzymes finish the sugars and peptides | the last enzymes complete the digestion of sugars and peptides |
| 520 |  | in the gastroenteritis every family meets. | in the gastroenteritis that most families encounter. |

### book/chapters/energy-balance.qmd

| Line | | Before | After |
|---|---|---|---|
| 36 |  | imbalance shifts body weight and metabolic health. | imbalance changes body weight and affects metabolic health. |
| 52 |  | ## Small numbers, long time | ## Small surpluses add up over time |
| 53 |  | is enough to add meaningful weight | is enough to cause appreciable weight gain |
| 56 |  | months, not meals. | months rather than single meals. |
| 84 |  | NEAT varies enormously between people and, over a day, can outweigh   formal exercise entirely | NEAT varies widely between people and, over a day, can exceed the energy spent in   formal exercise |
| 126 |  | so it cannot see how much of her weight is lean mass | so it does not account for how much of her weight is lean mass |
| 133 |  | can differ completely in how much of it is muscle and how much is fat | can differ greatly in how much of it is muscle and how much is fat |
| 141 |  | but easily thrown off by hydration | but readily affected by hydration status |
| 147 |  | so the waist measurement adds what BMI misses | so the waist measurement adds information that BMI does not give |
| 154 |  | clinic, the estimating equations do the everyday work. | clinic, the estimating equations are used instead. |
| 163 |  | Why does the waist measurement change the picture? | Why does the waist measurement change the assessment? |
| 204 | ★ | Energy balance is actively regulated, not free, and | Energy balance is actively regulated, not free to drift, and |
| 210 |  | Partly. The equation is real: | Partly. The equation holds: |
| 214 | ★ | right *bookkeeping* and a poor *strategy*, | correct accounting but a poor basis for weight management, |
| 224 |  | A largely sedentary, air-conditioned, car-and-MRT lifestyle keeps the | A largely sedentary lifestyle, in air-conditioned buildings and travelling by car or MRT, keeps the |
| 230 |  | it is an environment that keeps "energy in" easy and "energy out" low. | it reflects an environment that makes a high energy intake easy and keeps activity low. |
| 232 |  | shows a gap between the guidelines and the plate | shows a gap between the guidelines and what people actually eat |
| 238 |  | Nutri-Grade flags the sugary drinks that are the easiest surplus to cut. | Nutri-Grade identifies sugary drinks, the easiest source of surplus energy to cut. |

### book/chapters/evidence-vs-hype.qmd

| Line | | Before | After |
|---|---|---|---|
| 40 |  | containing a real signal. | supported by real evidence. |
| 43 |  | The common trap is to swing between two failures: swallowing whatever is trending, or turning | The common error is to swing between two extremes: accepting whatever is trending, or turning |
| 78 |  | What actual evidence sits behind the headline? | What actual evidence lies behind the headline? |
| 80 |  | Where does it sit: | Where does it rank: |
| 83 |  | study sits. | study ranks. |
| 125 |  | carries a **healthy-user bias** | is open to **healthy-user bias** |
| 126 |  | The comparison can also carry **reverse causation** | The comparison can also reflect **reverse causation** |
| 127 |  | An association is a question, not an answer. | An association suggests a hypothesis; it does not establish cause. |
| 146 | ★ | Both are real results, correctly bounded. | Both are real results, provided they are quoted with these limits. |
| 175 |  | The stronger acne signal, and the only one tested in trials, is high glycaemic load | The stronger association with acne, and the only one tested in trials, is with high glycaemic load |
| 227 |  | the blood and excrete them in urine, every hour of every day. | the blood and excrete them in urine. |
| 231 |  | comes from water and bowel loss [@klein2015detox] | comes from loss of water and bowel contents [@klein2015detox] |
| 237 |  | whereas high glycaemic load is the stronger signal and the only one tested in trials | whereas high glycaemic load has the stronger association and is the only one tested in trials |
| 247 |  | visible effect comes from water and bowel loss. | visible effect comes from loss of water and bowel contents. |
| 251 |  | ## What separates signal from hype? | ## What separates evidence from hype? |
| 253 |  | A habit separates them: | A consistent method separates them: |
| 255 |  | clinician's task is to tell which claims carry a signal, and to keep | clinician's task is to tell which claims have real evidence behind them, and to keep |
| 264 |  | calls detox claims unevidenced; | states that detox claims lack evidence; |

### book/chapters/gut-microbiome.qmd

| Line | | Before | After |
|---|---|---|---|
| 45 |  | with no single part to fix with a pill. | with no single component that a pill can correct. |
| 47 |  | of the marketing claims do not survive the question "by what mechanism?" | of the marketing claims lack a plausible mechanism. |
| 99 |  | so diversity is one context-dependent signal, not a number | so diversity is one context-dependent marker, not a number |
| 105 |  | is now read as a continuous gradient | is now regarded as a continuous gradient |
| 184 |  | disease run ahead of the evidence. | disease are not supported by the evidence. |
| 270 |  | not a one-time reprogramming. | not a one-off, permanent change. |
| 278 |  | The most dramatic version of this, | The most extreme version of this, |
| 299 |  | ## 🍳 Healthy kitchen: go gradual, and keep the fluids | ## 🍳 Healthy kitchen: increase fibre gradually, with fluids |
| 313 |  | Live, defined, dosed microbes shown to do something | Live, defined, dosed microbes with a proven benefit |
| 368 | ★ | and there is a counter-signal that | and there is some evidence that |
| 400 |  | that resets the community is FMT, for its one narrow indication. | that restores the community is FMT, for its one narrow indication. |
| 403 |  | The metaphor has no mechanism behind it. | The claim that gut serotonin controls mood has no mechanism behind it. |
| 406 |  | ## The gut–brain axis: real channel, cautious claims | ## The gut–brain axis: a real pathway, unproven claims |
| 412 |  | The channel is real; the mood claims are unproven. | The axis is real; the claims about mood are unproven. |
| 420 |  | rather than treating FMT as a wellness reset. | rather than treating FMT as a wellness treatment. |
| 444 |  | Fermented foods run through | Fermented foods are common across |
| 445 |  | and they divide along the line that matters for the probiotic definition: | and they fall into the two groups that matter for the probiotic definition: |
| 461 |  | *Yong tau foo*, a common confusion, is not a fermented food. | *Yong tau foo* is often mistaken for a fermented food, but it is not one. |
| 472 |  | has some signals from small trials | has some supporting evidence from small trials |
| 478 |  | a close-to-home illustration | a local illustration |

### book/chapters/healthy-ageing.qmd

| Line | | Before | After |
|---|---|---|---|
| 43 |  | The through-line is a mismatch: | The central problem is a mismatch: |
| 63 |  | it is not a dose to titrate. | it is not a precise target. |
| 74 |  | Sarcopenia is screened simply in the community, | Sarcopenia can be screened for simply in the community, |
| 127 |  | which drains food of its reward | which makes food less rewarding |
| 145 |  | the first move is to make | the first step is to make |
| 158 |  | faded taste and smell drain food of its reward. | faded taste and smell make food less rewarding. |
| 176 |  | tracks with lower fruit, vegetable and protein intake and with | is associated with lower fruit, vegetable and protein intake and with |
| 196 |  | Solitary eating tracks with | Solitary eating is associated with |
| 214 |  | The clearest signal that ageing in health | The clearest sign that ageing in health |
| 227 |  | it strips intake and flavour | it reduces intake and flavour |
| 248 |  | Restriction strips intake and | Restriction reduces intake and |
| 249 |  | flavour from someone who is already eating too little | flavour in someone who is already eating too little |
| 276 |  | Local guidance puts numbers to the protein point: | Local guidance gives figures for protein: |
| 277 |  | carried by familiar foods | provided by familiar foods |
| 292 |  | that tracks with frailty | that is associated with frailty |

### book/chapters/infancy-early-childhood.qmd

| Line | | Before | After |
|---|---|---|---|
| 83 |  | The 4-month floor reconciles two guideline positions. | The lower limit of 4 months reconciles two guideline positions. |
| 86 |  | and 4 months is the floor for an individual infant | and 4 months is the earliest age for an individual infant |
| 92 |  | so the line falls between cow's milk as the main drink and dairy | so the distinction is between cow's milk as the main drink and dairy |
| 114 |  | the same way, with adherence the practical limit, | the same way, although poor adherence limited its effect, |
| 149 |  | Two components of breast milk do work that no formula fully copies. | Two components of breast milk have functions that no formula fully reproduces. |
| 156 |  | needs reading against the evidence. | needs to be checked against the evidence. |
| 156 |  | The cleanest data come from | The strongest data come from |
| 191 |  | the counselling posture is support, not shame. | the counselling approach is supportive, not shaming. |
| 192 |  | so the clinician's contribution is safe preparation. | so the clinician's role is to advise on safe preparation. |
| 207 |  | milk does the job, so toddler | milk is adequate, so toddler |
| 210 |  | They carry beliefs worth gently addressing, | They hold beliefs worth gently addressing, |
| 217 |  | How a child is fed matters as much as what. | How a child is fed matters as much as what the child eats. |
| 224 |  | and yields to repeated, low-pressure offering, | and responds to repeated, low-pressure offering, |
| 299 |  | Breast milk is a strong start, not a complete one. | Breast milk is a good start but is not nutritionally complete. |
| 309 |  | is gently retiring a well-meant tradition. | is gently correcting well-meant traditional advice. |
| 326 |  | so the sensible posture is realistic | so the sensible approach is realistic |

### book/chapters/integrative-metabolism.qmd

| Line | | Before | After |
|---|---|---|---|
| 16 |  | Describe the hand-off from glycogenolysis to gluconeogenesis to ketosis in a fast | Describe the sequence from glycogenolysis to gluconeogenesis to ketosis in a fast |
| 56 |  | Metabolism is one network with a logic. | Metabolism is a single network that follows a few general principles. |
| 58 |  | At the depth of a map, | At the level of a map, |
| 67 |  | carbon can turn several ways | carbon can take several routes |
| 70 |  | Glucose tagged with a phosphate as it enters a cell | Glucose phosphorylated as it enters a cell |
| 108 |  | joins: that convergence is what holds the map together. | joins: this convergence is what links the pathways into a single network. |
| 114 |  | it is tagged with a phosphate to make | it is phosphorylated to form |
| 145 |  | Pyruvate sits at the end of glycolysis as a junction, and its carbon can go four ways: | Pyruvate, the end product of glycolysis, is a branch point from which its carbon can go four ways: |
| 154 |  | steps, with a large consequence for fasting. | steps, and it has an important consequence for fasting. |
| 173 |  | **Gluconeogenesis, making glucose from scratch.** | **Gluconeogenesis, making glucose from non-carbohydrate sources.** |
| 179 |  | The raw materials are enough at the depth | Knowing the raw materials is enough at the level |
| 188 |  | **β-oxidation** chops it into many molecules of acetyl-CoA | **β-oxidation** breaks it down into many molecules of acetyl-CoA |
| 233 |  | Confusing the two is a common slip. | Confusing the two is a common error. |
| 305 |  | it brakes the release of fat from the store | it inhibits the release of fat from the store |
| 318 |  | of the fed-state picture. | of how the tissues behave in the fed state. |
| 352 |  | yet it cannot donate a single glucose molecule to the blood. | yet it cannot release any glucose into the blood. |
| 383 |  | \| Protein \| not a designed store at all \| | \| Protein \| not a true store \| |
| 386 |  | show a shape: fat dwarfs the other reserves | show the proportions: fat far exceeds the other reserves |
| 387 |  | not really available at all | not a true reserve |
| 389 |  | Fasting is a staged hand-off, often described as | Fasting proceeds in stages, often described as |
| 408 |  | foundational and directionally right | foundational and qualitatively correct |
| 410 |  | rather than snapping to a fixed value | rather than reaching a fixed value at once |
| 428 |  | Almost absent, so fat breakdown and ketone production run away | Almost absent, so fat breakdown and ketone production are unrestrained |
| 449 |  | blood levels can crash; | blood levels can fall sharply; |
| 467 |  | Blood levels of these minerals can then crash, phosphate most dangerously | Blood levels of these minerals can then fall sharply, phosphate most dangerously |
| 474 |  | The same fuel metabolism can be applied in three further settings: | The same principles of fuel metabolism apply in three further settings: |
| 482 |  | protein and a mixed diet sit in | protein and a mixed diet lie in |
| 502 |  | summarises the trade: | summarises this relationship: |
| 504 |  | produces the sudden fade that athletes call | produces the sudden fatigue that athletes call |
| 515 |  | not the zone a session sat in | not the intensity of each session |
| 524 |  | sports drinks and gels are marketing, not physiology | sports drinks and gels are unnecessary |
| 563 |  | run unchecked, the road to DKA (see | run unchecked, leading to DKA (see |
| 580 |  | The dependable point is that the autonomic warning comes before the brain | What is consistent is that the autonomic warning comes before the brain |
| 605 |  | A longer fast escalates into ketosis | A longer fast progresses to ketosis |
| 636 |  | Physiologically, each day runs glycogenolysis giving way to gluconeogenesis | Physiologically, each day glycogenolysis gives way to gluconeogenesis |
| 637 |  | but not dramatic afternoon ketosis | but not marked afternoon ketosis |
| 643 |  | keep the day's swing gentle. | keep the change from fasting to feeding gradual. |

### book/chapters/interprofessional-referral.qmd

| Line | | Before | After |
|---|---|---|---|
| 12 |  | Write a dietitian referral that carries what the dietitian needs to act on. | Write a dietitian referral that contains the information the dietitian needs to act on. |
| 34 |  | Good dietary care calls for humility with competence: | Good dietary care calls for competence and an awareness of its limits: |
| 56 |  | sit on either side of a clean line, and holding that line is the core skill | lie on either side of a clear line, and recognising that line is the core skill |
| 67 |  | and outcome-tracked [@ada2026standards]. | and with outcomes monitored [@ada2026standards]. |
| 73 |  | Conflating the two fails in both directions. | Confusing the two causes problems in both directions. |
| 76 |  | Run a few patients through the line below. | Try a few patients in the interactive below. |
| 95 |  | These are recognition triggers, not treatment cues: | These triggers are for recognising when to refer, not for starting treatment: |
| 110 |  | Conflating advice and therapy fails in both | Confusing advice and therapy causes problems in both |
| 119 |  | A referral that helps carries: | A referral that helps contains: |
| 136 | ★ | hand-off: | role: |
| 148 |  | This cuts both ways: it is a common trap to over-claim the nutrition part of the | The reverse also applies: a common error is to overstate the nutrition part of the |
| 149 |  | ran on a structured total-diet-replacement programme | was achieved with a structured total-diet-replacement programme |
| 149 |  | reached its prevention effect with | achieved its preventive effect with |
| 161 |  | the dietitian's time well and turns the hand-off into a head start. | the dietitian's time well and lets the dietitian start work without repeating the basics. |
| 181 |  | The packed-roster diet of skipped meals, *kopi* and five hours' sleep therefore | A packed roster of skipped meals, *kopi* and five hours' sleep therefore |
| 204 |  | sits well inside the role | falls well within the role |
| 206 |  | three medicines sits beyond it | three medicines falls outside it |
| 214 |  | and refer it [@mohHealthierSG]. | and make a referral [@mohHealthierSG]. |

### book/chapters/macronutrients.qmd

| Line | | Before | After |
|---|---|---|---|
| 11 |  | change the verdict | change the assessment |
| 53 |  | The question that matters clinically is almost never "how many | Clinically, the more useful question is usually not "how many |
| 59 |  | Carbohydrates run a wide spectrum, and where a food sits on it matters far | Carbohydrates cover a wide spectrum, and a food's position on it matters far |
| 108 |  | high-amylose basmati sits lower. | high-amylose basmati raises it less. |
| 110 |  | advantage is real but relative | advantage is real but limited |
| 179 |  | which grows the shaded area | which enlarges the shaded area |
| 185 |  | Three caveats keep GI in proportion: | Three caveats limit how far GI should be relied on: |
| 206 | ★ | The effect is real but modest: a refinement of "quality over quantity", not a way to make white rice "low-carb". | The effect is real but modest, and it does not make white rice "low-carb". |
| 243 |  | satisfied less, and drew a larger insulin response | was less satiating, and produced a larger insulin response |
| 252 |  | to lift the fibre of an otherwise | to raise the fibre content of an otherwise |
| 259 |  | for an easy fibre lift. | to add fibre easily. |
| 280 |  | Three variables generate every dietary fat: | Dietary fats differ in three variables: |
| 298 |  | The omega count runs from the tail end of the chain. | The omega number is counted from the tail end of the chain. |
| 300 |  | Fatty acids rarely travel alone. | Fatty acids are rarely found on their own. |
| 303 |  | which is the point of "MCT" | which is the rationale for "MCT" |
| 332 |  | For decades the advice was "eat less fat"; the better message is "eat better fat". | For decades the advice was to eat less fat; current advice is to eat better types of fat. |
| 359 |  | Yet chasing "low fat" often means swapping fat for refined starch or sugar, frequently a worse trade. | Yet choosing "low fat" often means replacing fat with refined starch or sugar, which is frequently worse for health. |
| 361 | ★ | Where saturated fat sits within a whole food | Whether the effect of saturated fat depends on the whole food that contains it |
| 402 |  | Fried foods draw in oil and energy, and frequent intake tracks with higher type 2 diabetes and heart-failure risk | Fried foods absorb oil, which adds energy, and frequent intake is associated with a higher risk of type 2 diabetes and heart failure |
| 418 |  | which is frequently a worse trade. | which is frequently worse for health. |
| 421 |  | The goal is better fat, not less fat. | The aim is to improve the type of fat, not only to reduce the amount. |
| 426 |  | Every amino acid is built on one plan: | Every amino acid has the same basic structure: |
| 530 |  | Modern guidelines have moved decisively from | Modern guidelines have moved from |
| 551 |  | "carbs", and they are not remotely the same for health. | "carbs", but their effects on health are very different. |
| 554 |  | Prescribing grams is not the task at this stage. | Prescribing gram targets is not expected at this stage. |
| 565 |  | is where a brown-rice swap, a less oily order and a plainer drink make a difference. | can be narrowed by small changes such as a brown-rice swap, a less oily order and a less sugary drink. |
| 575 |  | Answer each on quality-and-portion terms | Answer each in terms of quality and portion |

### book/chapters/menopause-midlife.qmd

| Line | | Before | After |
|---|---|---|---|
| 63 |  | but the local picture differs. | but the local pattern differs. |
| 72 |  | Almost every woman reaches midlife having been told that menopause will make her gain weight and slow her | Many women reach midlife having been told that menopause will make them gain weight and slow their |
| 77 |  | the scale rises steadily with age | weight rises steadily with age |
| 78 |  | What menopause does change is where the fat sits. | What menopause does change is where fat is stored. |
| 89 |  | and mind the pattern | and attend to the dietary pattern |
| 139 |  | intake instead tracks with better bone | intake is instead associated with better bone |
| 146 |  | a real but bounded effect. | a real but limited effect. |
| 147 |  | not a prescription to self-load heavily. | not a prescription for heavy unsupervised loading. |
| 155 |  | Local calcium is easier to find than it looks: | Calcium-rich local foods are easier to find than many people think: |
| 164 |  | Local calcium intakes sit at or below target, | Local calcium intakes are at or below target, |
| 183 |  | before the numbers go wrong. (The management | before cardiovascular risk factors rise. (The management |
| 200 |  | early acts before the numbers go wrong. | early acts before cardiovascular risk factors rise. |
| 222 |  | The line to give a patient: | A suitable explanation for a patient: |
| 237 |  | the underlying evidence is in the *Evidence vs hype* chapter.) | the underlying evidence are in the *Evidence vs hype* chapter.) |
| 258 | ★ | easily exploited where diet reaches its limits. | easily exploited by unproven remedies where diet reaches its limits. |
| 275 |  | minding weight. | managing weight. |
| 315 |  | (food-first minerals plus loading) | (minerals from food, plus mechanical loading) |
| 328 |  | soy tracks with lower | soy is associated with lower |
| 333 |  | when symptoms outrun what nutrition and | when symptoms need more than nutrition and |

### book/chapters/obesity-metabolic-syndrome.qmd

| Line | | Before | After |
|---|---|---|---|
| 39 | ★ | Over- and under-nutrition are the two tails of malnutrition | Over- and under-nutrition are the two forms of malnutrition |
| 40 |  | Obesity is also the entry point to a cardiometabolic cascade | Obesity also commonly precedes other cardiometabolic disease |
| 48 |  | Diet quality matters more than calorie arithmetic alone | Diet quality matters more than calorie counting alone |
| 53 |  | The physiology underneath | The underlying physiology |
| 69 |  | The local Yishun Study made the gap concrete. | The local Yishun Study demonstrated this difference. |
| 70 |  | classifying by body fat instead of BMI flagged far more adults as carrying excess body fat than BMI did | classifying by body fat identified far more adults with excess body fat than BMI did |
| 73 |  | Singapore shifts its action points down from the WHO cut-offs | Singapore sets its action points below the WHO cut-offs |
| 83 | ★ | The most useful bedside addition is the waist circumference, because it reads central fat, the metabolically active kind. | The most useful additional bedside measure is waist circumference, because it reflects central fat, the metabolically active kind. |
| 84 |  | The Asian cut-offs sit lower here too | The Asian cut-offs are lower here too |
| 86 |  | BMI and waist are therefore read together, never BMI alone. | BMI and waist circumference are therefore interpreted together, never BMI alone. |
| 90 |  | is still carrying risk | is still at increased risk |
| 110 |  | The syndrome is therefore best read as a risk marker, not a single disease with a single drug | The syndrome is therefore best regarded as a risk marker, not a single disease treated with a single drug |
| 114 |  | components do not always behave as one tidy syndrome across Singapore's ethnic groups | components do not always cluster in the same way across Singapore's ethnic groups |
| 118 |  | how sleep loss and stress feed the same underlying abnormalities | how sleep loss and stress contribute to the same underlying abnormalities |
| 141 | ★ | where it sits and how it behaves link a waistline to a blood-glucose reading | its location and metabolic activity link central obesity to raised blood glucose |
| 168 | ★ | The waist circumference, a bedside read of central fat, therefore adds a great deal to what BMI shows. | Waist circumference, a simple bedside measure of central fat, therefore adds information that BMI does not give. |
| 171 |  | Enlarged fat then becomes inflamed fat. | Enlarged fat tissue then becomes inflamed. |
| 172 |  | and it settles into chronic low-grade inflammation | and develops chronic low-grade inflammation |
| 185 |  | Fat also signals the brain, and in obesity the signal goes wrong. | Fat also signals to the brain, and in obesity this signalling is impaired. |
| 186 |  | runs high, but central leptin signalling is blunted | is raised, but central leptin signalling is blunted |
| 194 |  | At the level of physics, weight gain is a chronic positive energy balance | In thermodynamic terms, weight gain results from a chronic positive energy balance |
| 203 |  | Higher ultra-processed intake tracks with obesity | Higher ultra-processed intake is associated with obesity |
| 216 |  | The message is patterns over single nutrients, and minimally processed food over ultra-processed | The emphasis is on dietary patterns rather than single nutrients, and on minimally processed rather than ultra-processed food |
| 225 |  | is a modifiable factor worth naming | is a modifiable factor in its own right |
| 230 |  | Energy-dense staples add up fast: a plate of char kway teow runs to roughly 744 kcal | Many staples are energy-dense: a plate of char kway teow provides roughly 744 kcal |
| 232 |  | Several lower-density swaps still fit My Healthy Plate | Several lower-energy-density swaps still fit My Healthy Plate |
| 259 |  | Advice works at the level of the pattern: | Advice should target the overall dietary pattern: |
| 274 |  | routinely under-used | routinely overlooked |
| 277 |  | The dietary change is a set of pattern-level substitutions built on My Healthy Plate, not a branded diet | The dietary change is a set of food substitutions based on My Healthy Plate, not a branded diet |
| 280 |  | Activity works partly independently of the scale | Activity has benefits partly independent of weight loss |
| 281 |  | even when weight barely moves | even when weight changes little |
| 293 |  | and channel fat to the abdomen | and promote abdominal fat deposition |
| 294 |  | human associations, so the loop | human associations, so the cycle |
| 298 |  | Behaviour-change skills make the other four changes stick | Behaviour-change skills help patients sustain the other four changes |
| 301 |  | Two evidence cautions apply | Two cautions about the evidence apply |
| 319 |  | the loop proposed | the cycle proposed |
| 325 |  | Weight stigma is a live issue in Singapore | Weight stigma is also common in Singapore |
| 336 |  | while still holding | while still keeping |
| 346 |  | even when weight barely moves. | even when weight changes little. |
| 360 |  | Lifestyle change stays the base of care at every step | Lifestyle change remains the basis of care at every step |
| 365 |  | Above lifestyle sit two specialist tiers | Above lifestyle change are two specialist tiers |
| 381 |  | The belief comes from the arithmetic of energy balance | The belief comes from the principle of energy balance |
| 382 |  | The arithmetic is right, but it leaves out | The principle is correct, but it leaves out |
| 384 |  | push intake past need | increase intake beyond need |
| 385 |  | the harm depends on where the fat sits | the harm depends on where the fat is stored |
| 387 |  | which is why Singapore reads BMI at lower cut-offs and always alongside the waist | which is why Singapore interprets BMI at lower cut-offs and always alongside waist circumference |
| 390 |  | Care therefore works on those causes | Care therefore addresses those causes |
| 397 |  | clinical action starts far earlier | clinical action starts at a much lower BMI |
| 399 |  | Over the same window | Over the same period |
| 400 |  | a Singapore-grounded argument for | local evidence for |
| 405 | ★ | the population denominators behind the clustering idea | the population figures behind the clustering of these risk factors |
| 407 |  | Malay and Indian residents carry markedly higher obesity and diabetes than Chinese residents | Malay and Indian residents have markedly higher rates of obesity and diabetes than Chinese residents |
| 416 |  | turns "recognise and refer" into a longitudinal health plan | builds "recognise and refer" into a longitudinal health plan |
| 430 |  | Your choices branch the case. | The case branches according to your choices. |

### book/chapters/part2-intro.qmd

| Line | | Before | After |
|---|---|---|---|
| 4 |  | each stage is read through the same two sets of factors. | each stage is described in terms of the same two sets of factors. |
| 7 |  | Each stage is then read for the needs that result, | Each stage is then examined for the needs that result, |
| 8 |  | tipped into a problem to act on. | become a problem that needs action. |
| 10 |  | One posture runs through all six chapters: | One approach runs through all six chapters: |
| 11 |  | the stage-defining need, | the main nutritional need of each stage, |
| 12 |  | full diet history and appraising a trial come later. They are real skills, taught in Part III, | full diet history and appraising a trial are taught later, in Part III, |

### book/chapters/pregnancy-lactation.qmd

| Line | | Before | After |
|---|---|---|---|
| 3 |  | Pregnancy changes a woman's physiology automatically, expanding | Pregnancy itself changes a woman's physiology, expanding |
| 46 |  | The automatic physiology of placental hormones, an expanding blood volume, a normal slide into insulin resistance, | The effects of placental hormones, an expanding blood volume, a normal rise in insulin resistance, |
| 65 | ★ | so folic acid has to be running already | so folic acid has to be started beforehand |
| 71 |  | of good antenatal nutrition is really *pre*-natal. | of good antenatal nutrition therefore begins before conception. |
| 78 |  | It is one extra snack, not a second dinner. | That is about one extra snack a day, not an extra meal. |
| 92 |  | not a verdict. | not a fixed target. |
| 109 |  | because iron's gut side-effects are where supplementation fails. | because iron's gut side-effects are a common reason supplementation fails. |
| 120 |  | a short list of nutrients carries most of the weight: | a short list of nutrients needs particular attention: |
| 149 |  | Most of it is miserable but benign. | Most cases are distressing but benign. |
| 165 | ★ | started after a positive test can miss the window it protects. It has to be running before | started after a positive test can come too late. It has to be started before |
| 188 |  | Pregnancy adds a food-safety layer. | Pregnancy adds food-safety precautions. |
| 191 |  | low seafood intake tracks with worse child | low seafood intake is associated with worse child |
| 193 |  | the everyday drinks in view for caffeine: | the everyday drinks in mind when counting caffeine: |
| 194 |  | a pragmatic line, since | a pragmatic limit, since |
| 206 | ★ | a chosen line, not a | an agreed convention, not a |
| 207 | ★ | biological cliff: | biological boundary: |
| 227 |  | That link is why GDM sits inside Singapore's | That link is why GDM is part of Singapore's |
| 233 |  | Diet works best within a woman's usual | Diet works best when based on a woman's usual |
| 301 |  | is counselling within a woman's usual food. | is counselling based on a woman's usual diet. |
| 350 |  | practice, and guiding only its risky edges. Those edges are alcohol | practice, and modifying only its risky parts. These are alcohol |
| 352 |  | The same respectful lens covers | The same respectful approach applies to |

### book/chapters/type-2-diabetes.qmd

| Line | | Before | After |
|---|---|---|---|
| 3 |  | and type 2 > diabetes is the point at which it stays high | and type 2 > diabetes is diagnosed once it stays high |
| 42 |  | Type 2 diabetes grows out of insulin resistance | Type 2 diabetes develops from insulin resistance |
| 43 |  | Nutrition acts along the whole course of the disease. | Nutrition matters throughout the course of the disease. |
| 59 |  | All of this sits within Singapore's War on Diabetes | All of this is part of Singapore's War on Diabetes |
| 64 |  | Type 2 diabetes is the end of a long compensation for insulin resistance | Type 2 diabetes is the end result of a long period of compensation for insulin resistance |
| 66 |  | The progression runs in four steps: | The progression has four steps: |
| 85 |  | (the pancreas cycle), and each cycle feeds the other | (the pancreas cycle), and each cycle reinforces the other |
| 105 |  | β-cells, and each cycle feeds the other. | β-cells, and each cycle reinforces the other. |
| 122 |  | Patient can go dangerously low | Risk of dangerous hypoglycaemia |
| 126 | ★ | One caveat sits outside hypoglycaemia | One further caution is unrelated to hypoglycaemia |
| 144 |  | Ramadan fasting is an important, faith-aware counselling task | Ramadan fasting is an important counselling topic that needs sensitivity to faith |
| 164 |  | That improvement is best delivered as concrete swaps | That improvement is best achieved through specific food swaps |
| 168 |  | Fibre and wholegrains carry the strongest | Fibre and wholegrains have the strongest |
| 172 |  | International guidelines converge on the same plate: | International guidelines agree on the same advice: |
| 190 |  | The shift has far to go locally: | Wholegrain intake is still low locally: |
| 197 |  | the one a person will actually keep | the one a person will actually follow |
| 200 |  | has the deepest diabetes-specific evidence | has the strongest diabetes-specific evidence |
| 213 |  | a low-numeracy tool that sets the proportions of the plate, makes any of these patterns work at a *cai png* (mixed-rice) stall | a tool that sets the proportions of the plate without counting, lets any of these patterns be applied at a *cai png* (mixed-rice) stall |
| 230 |  | is accurate and keeps a cultural staple without stigma | is accurate, keeps a cultural staple on the plate and avoids stigma |
| 236 |  | The right pattern is the one he will keep | The right pattern is the one he will follow |
| 255 |  | tracking with weight regained | in line with weight regain |
| 354 |  | Indian and Malay residents carry roughly twice the prevalence | Indian and Malay residents have roughly twice the prevalence |
| 356 |  | individual counselling stays individualised | counselling is still tailored to the individual |
| 358 |  | The local food environment is where these modifiable dietary factors are found: | These modifiable dietary factors are prominent in the local food environment: |
| 361 |  | as the delivery vehicle for early detection and lifestyle advice | as the main route to early detection and lifestyle advice |

### book/chapters/undernutrition-malnutrition.qmd

| Line | | Before | After |
|---|---|---|---|
| 46 |  | and isolation tip people into. | and isolation can lead to. |
| 51 |  | Weight loss and acute illness harm nutrition independently of body size | Weight loss and acute illness indicate risk independently of body size |
| 60 |  | which is working tissue, not a designed store | which is functional tissue, not a dedicated protein store |
| 65 |  | Malnutrition is a causal chain, not a body size. | Malnutrition is defined by a causal chain, not by body size. |
| 65 |  | The three aetiological categories sit on an inflammation gradient, from | The three aetiological categories are ordered by degree of inflammation, from |
| 83 |  | therefore is hard to reverse with feeding alone: extra feeding cannot simply outpace inflammation-driven catabolism, and | is therefore hard to reverse with feeding alone: extra feeding cannot simply overcome inflammation-driven catabolism, and |
| 100 |  | muscle–bone overlap, and the resistance-exercise and bone-loading side of protecting the frail patient, are | muscle–bone overlap, and the role of resistance exercise and bone loading in protecting the frail patient, are |
| 106 |  | so extra food cannot simply outpace the | so extra food cannot simply overcome the |
| 131 |  | a core feature of frailty (a clinical picture in older age | a core feature of frailty (a clinical syndrome of older age |
| 140 |  | **Nutrition screening** is a fast, low-skill filter that anyone can apply | **Nutrition screening** is a quick, simple check that any trained staff member can apply |
| 153 |  | "she looks fine, her BMI isn't low" is the classic miss | "she looks fine, her BMI isn't low" is a common reason malnutrition is missed |
| 169 |  | a phenotype of loss plus a cause | that is, a measurable loss plus a cause |
| 170 |  | GLIM sits downstream of screening and is applied by the dietitian or team; | GLIM is applied after screening, by the dietitian or team; |
| 179 |  | That is why "her BMI isn't low" is the classic miss. | That is why "her BMI isn't low" is a common reason malnutrition is missed. |
| 200 |  | and can lift    intake substantially | and can increase    intake substantially |
| 209 |  | starts food-first and fortification | starts a food-first approach and fortification |
| 234 |  | that can bring cardiac and neurological harm | that can cause cardiac and neurological complications |
| 238 |  | is specialist, later learning. | is specialist work, learnt later in training. |
| 248 |  | meals that drag on; | prolonged mealtimes; |
| 252 |  | The trap is to assume that no cough means a safe swallow. | A common error is to assume that the absence of a cough means a safe swallow. |
| 283 |  | and each member has a distinct part | and each member has a distinct role |
| 287 |  | the doctor treats the underlying cause and champions nutrition by referring; | the doctor treats the underlying cause and refers; |
| 290 |  | restore the function that lets improved eating last; | restore the physical function needed to sustain better eating; |
| 292 |  | the pharmacist watches drug–nutrient and electrolyte safety. | the pharmacist monitors drug–nutrient interactions and electrolyte safety. |
| 294 |  | the referral that sets the team in motion; the feeding plan is | the referral that brings in the team; the feeding plan is |
| 295 |  | not solo prescribing | not prescribing by a single clinician |
| 301 |  | starts food-first and social support, and | starts a food-first approach and social support, and |
| 309 |  | starts food-first and social support, treats | starts a food-first approach and social support, treats |
| 310 |  | that referral is what sets the team in motion | that referral is what brings in the team |
| 318 |  | It looks like catching malnutrition early and handing it on safely, without doing harm on the way: | It means recognising malnutrition early and referring the patient safely, without causing harm in the process: |
| 319 |  | referring a risky swallow on its red flags | referring an unsafe swallow on the basis of its red flags |
| 324 |  | **Undernutrition begins in the community, not the ward.** | **Undernutrition is common in the community, not only on the ward.** |
| 327 |  | The harm concentrates where they co-occur: | The risk is greatest where they co-occur: |
| 329 | ★ | The practical frame is to screen the frail senior for malnutrition specifically. | In practice, this means screening the frail senior for malnutrition specifically. |
| 331 | ★ | a direction of travel, not a settled mandate | a proposal, not yet settled policy |
| 336 |  | tracks poorer diet quality and higher malnutrition risk | is associated with poorer diet quality and higher malnutrition risk |
| 346 |  | though local dietetic capacity is scarce | though local dietetic capacity is limited |
| 347 |  | food-first and social support early. | a food-first approach and social support early. |

### book/diagrams/advise-refer.yml

| Line | | Before | After |
|---|---|---|---|
| 2 |  | title: "The line: advise or refer?" | title: "Advise or refer?" |
| 3 |  | the advise-vs-MNT line follows the chapter | the distinction between general advice and medical nutrition therapy follows the chapter |
| 7 |  | is safe for almost anyone and is exactly your job. | is safe for almost anyone and is part of your role. |
| 16 |  | screen, then hand to the dietitian for assessment | screen, then refer to the dietitian for assessment |

### book/diagrams/appetite-thermostat.yml

| Line | | Before | After |
|---|---|---|---|
| 23 |  | ghrelin is high and leptin eases | ghrelin is high and leptin falls |
| 24 |  | MC4R output swings toward hunger | MC4R output falls, so hunger rises |
| 43 |  | leptin's background tone holds | background leptin signalling is maintained |
| 66 |  | AgRP/NPY drive is turned up hard by the low-leptin 'starvation' signal | AgRP/NPY activity is strongly increased by the low-leptin 'starvation' signal |
| 68 |  | Output swings far toward hunger; this persists | Output falls sharply, so hunger is high; this persists |
| 69 |  | This is regain pressure, not a willpower failure. | These changes favour weight regain; they do not reflect a lack of willpower. |

### book/diagrams/bone-bank.yml

| Line | | Before | After |
|---|---|---|---|
| 12 |  | title: "Build the bank, defend the balance" | title: "Build peak bone mass, slow the loss" |

### book/diagrams/bone-window.yml

| Line | | Before | After |
|---|---|---|---|
| 36 |  | Grade A for accrual; food first. | Grade A for accrual; food sources are preferred. |

### book/diagrams/carb-safety-check.yml

| Line | | Before | After |
|---|---|---|---|
| 36 |  | example: "sitagliptin, linagliptin"     risk: low     note: "Glucose-dependent action, so no hypoglycaemia used alone." | example: "sitagliptin, linagliptin"     risk: low     note: "Acts in a glucose-dependent way, so it does not cause hypoglycaemia when used alone." |
| 46 |  | example: "semaglutide, liraglutide"     risk: low     note: "Glucose-dependent action, so no hypoglycaemia used alone." | example: "semaglutide, liraglutide"     risk: low     note: "Acts in a glucose-dependent way, so it does not cause hypoglycaemia when used alone." |

### book/diagrams/claim-analyzer.yml

| Line | | Before | After |
|---|---|---|---|
| 7 |  | What actual evidence sits behind the headline? | What evidence supports the headline? |
| 8 |  | Where does it sit on the evidence hierarchy? | Where does it rank in the hierarchy of evidence? |
| 9 |  | What did it really measure, and did it hold up? | What did it measure, and was the result robust? |
| 24 |  | The claim leans on a 2024 randomised trial | The claim rests on a 2024 randomised trial |
| 34 |  | tracked with the lowest all-cause and cardiovascular mortality | was associated with the lowest all-cause and cardiovascular mortality |
| 35 | ★ | 'Protective in the data' isn't 'start drinking it to protect your heart'. | An association in observational data does not justify advising people to start drinking coffee to protect the heart. |
| 37 |  | Moderate coffee is fine, but it is not medicine. | Moderate coffee intake is safe, but it is not a treatment. |
| 40 |  | milk nudges IGF-1 and insulin up | milk modestly raises IGF-1 and insulin |
| 45 |  | A real but weak signal. | A real but weak association. |
| 49 |  | testing the claim head-on: the strong part of the evidence. | testing the claim directly: the strongest part of the evidence. |
| 51 |  | for someone whom it helps to eat less and who can sustain it | for someone who finds that it helps them eat less and who can sustain it |
| 53 |  | the overall pattern, not the clock | the overall diet, not on meal timing |
| 69 |  | Harmful in the wrong group, which is worse than unproven. | Harmful in one group (smokers), which is worse than merely unproven. |

### book/diagrams/diet-history.yml

| Line | | Before | After |
|---|---|---|---|
| 27 |  | so they are worth a brief line | so they are worth a brief question |
| 34 |  | The drinks probe folds in a routine alcohol question too. | The question about drinks should also include a routine question about alcohol. |
| 46 | ★ | Eating out shifts portions, oil, salt and sugar upward and control downward | Eating out tends to increase portion size, oil, salt and sugar and to reduce control over what is eaten |
| 70 |  | If it flags, switch from | If it raises concern, switch from |
| 70 | ★ | Never prescribe restriction into a possible eating disorder. | Never advise dietary restriction for someone who may have an eating disorder. |

### book/diagrams/fat-swap.yml

| Line | | Before | After |
|---|---|---|---|
| 36 |  | Trade saturated fat for refined starch and sugar and the benefit disappears: | If saturated fat is replaced with refined starch and sugar, the benefit disappears: |

### book/diagrams/food-form-sorter.yml

| Line | | Before | After |
|---|---|---|---|
| 12 |  | Iron stores run low at ~6 months, so first foods | Iron stores become depleted by ~6 months, so first foods |
| 15 |  | as iron stores run low at ~6 months | as iron stores become depleted by ~6 months |
| 18 |  | early peanut protects against peanut allergy (LEAP) | early introduction of peanut reduces the risk of peanut allergy (LEAP) |
| 21 |  | Peanut is a choking hazard whole but protective as smooth peanut butter. | Whole peanuts are a choking hazard; as smooth peanut butter, peanut is safe and protects against allergy. |
| 24 |  | early egg lowers egg-allergy risk | early introduction of egg lowers egg-allergy risk |
| 27 |  | A leading choking shape. | A common choking hazard because of its shape. |
| 30 |  | the hazard is the form, not the food | the choking risk comes from the shape, not the food itself |
| 33 |  | A classic choking shape when sliced into rounds. | A common choking hazard when sliced into rounds. |
| 39 |  | a route to iron deficiency | a cause of iron deficiency |
| 45 |  | Early sweetness sets a lasting preference. | Early exposure to sweet tastes sets a lasting preference for sweetness. |
| 51 |  | tastes are being set | taste preferences are still developing |

### book/diagrams/fuel-dial.yml

| Line | | Before | After |
|---|---|---|---|
| 5 |  | title: "Fuel to fit the training: usually less than expected" | title: "Matching food to training: usually less is needed than expected" |
| 38 |  | Salt matters only for long or very sweaty efforts. | Salt matters only for long sessions or heavy sweating. |
| 39 |  | fuelling framing from Thomas 2016 | fuelling guidance from Thomas 2016 |

### book/diagrams/gut-journey.yml

| Line | | Before | After |
|---|---|---|---|
| 18 |  | a little lingual lipase starts on fat | a little lingual lipase begins fat digestion |
| 35 |  | when it leaks, stomach acid rises and causes heartburn (reflux) | when it does not close properly, stomach acid flows back into the oesophagus and causes heartburn (reflux) |
| 69 |  | it pours about 1.5 L a day | it secretes about 1.5 L a day |

### book/diagrams/healthy-plate.yml

| Line | | Before | After |
|---|---|---|---|
| 23 |  | Portion fixed, but still refined; a wholegrain swap is the bigger win. | Portion corrected, but still refined; switching to wholegrain matters more. |
| 26 |  | the protein quarter carries a lot of extra energy | the protein quarter adds substantial extra energy |
| 39 |  | an easy local way to bulk up greens | an easy local way to add more vegetables |
| 41 |  | swimming in coconut gravy, energy-dense before the protein even arrives | soaked in coconut gravy, energy-dense even before the protein is added |
| 45 |  | this is a fatty take on the protein quarter | this is a high-fat choice for the protein quarter |
| 51 |  | Water or an unsweetened tea beats any sweetened drink. | Water or an unsweetened tea is better than any sweetened drink. |
| 61 |  | Portion sorted, but still refined. | Portion reduced, but still refined. |
| 68 |  | Sweetened milk drinks carry a lot of free sugar. | Sweetened milk drinks contain large amounts of free sugar. |

### book/diagrams/menopause-timeline.yml

| Line | | Before | After |
|---|---|---|---|
| 16 |  | the waistline, not the scale, is the | waist circumference, not body weight, is the |
| 22 |  | creeps up with age, with no jump at the FMP | rises gradually with age, with no jump at the FMP |
| 53 |  | LDL-cholesterol steps up right around the FMP | LDL-cholesterol rises abruptly around the FMP |
| 54 |  | pressure drifts up with age. Separating | pressure rises gradually with age. Separating |
| 64 |  | drifts up with age, not timed to the FMP | rises gradually with age, not timed to the FMP |

### book/diagrams/metabolic-map.yml

| Line | | Before | After |
|---|---|---|---|
| 95 |  | using protein for fuel dismantles working tissue | using protein for fuel breaks down functional tissue |
| 137 |  | acetyl-CoA sits past the irreversible PDH step | acetyl-CoA is formed after the irreversible PDH step |
| 148 |  | The three one-way-street arrows stand for | The three arrows marking irreversible steps stand for |
| 151 |  | whole map is five hubs, four irreversible steps and reciprocally regulated flux. | whole map consists of five hubs and four irreversible steps, with reciprocal regulation of flux. |

### book/diagrams/metabolic-switch.yml

| Line | | Before | After |
|---|---|---|---|
| 40 |  | to stock the fat cell | for storage in the fat cell |
| 61 |  | Its own glycogen stays locked up for local use only. | Its own glycogen is reserved for use within the muscle. |
| 83 |  | Lipolysis in full flow: | Lipolysis is maximal: |
| 99 |  | The liver floods with fat-derived acetyl-CoA and exports ketone bodies. | Fat-derived acetyl-CoA accumulates in the liver, which exports ketone bodies. |
| 101 |  | This adaptation stretches survival from weeks toward months. | This adaptation extends survival from weeks toward months. |
| 105 |  | protein breakdown eases now that | protein breakdown falls now that |
| 106 |  | the feedstock for the liver's ketones | the substrate for the liver's ketone production |

### book/diagrams/mets-cluster.yml

| Line | | Before | After |
|---|---|---|---|
| 21 | ★ | The waist reads visceral fat, the depot that drives the risk, not overall weight. | Waist circumference reflects visceral fat, the depot most closely linked to the risk, rather than overall weight. |
| 37 |  | Impaired fasting glucose: an early signal, | Impaired fasting glucose: an early marker, |
| 46 |  | caption: "Modifiable factors that feed central fat and insulin resistance" | caption: "Modifiable factors that contribute to central fat and insulin resistance" |
| 50 |  | and tracks with more central fat | and is associated with more central fat |
| 57 |  | factors that feed them, not one number in isolation | factors that contribute to them, not one number in isolation |

### book/diagrams/nutri-grade.yml

| Line | | Before | After |
|---|---|---|---|
| 23 |  | most of the grade is the added sugar | the poor grade comes mostly from the added sugar |
| 24 |  | less of a sugar hit | a smaller sugar load |

### book/diagrams/pillars-hub.yml

| Line | | Before | After |
|---|---|---|---|
| 19 |  | raises appetite, especially for energy-dense food, and energy intake | raises appetite (especially for energy-dense food) and energy intake |
| 27 |  | so social context can entrench or transform a diet | so social context can reinforce or change eating habits |
| 31 |  | and also disinhibits food choice | and also weakens restraint over food choices |

### book/diagrams/renal-flip.yml

| Line | | Before | After |
|---|---|---|---|
| 11 |  | title: "The advice that flips in CKD" | title: "Advice that reverses in CKD" |
| 45 |  | in a large trial it cut strokes and deaths. | in a large trial it reduced strokes and deaths. |
| 52 |  | if unsure, don't. | if unsure, do not recommend it. |
| 65 |  | DASH is deliberately loaded with potassium | DASH is deliberately rich in potassium |
| 79 |  | they carry a neurotoxin | they contain a neurotoxin |
| 80 |  | An absolute avoid, not a portion-controlled food. | They must be avoided completely, not just limited in portion. |
| 100 |  | the quantities are a renal dietitian's to set | a renal dietitian sets the quantities |

### book/diagrams/requirement-dial.yml

| Line | | Before | After |
|---|---|---|---|
| 31 |  | Rises for the foetal thyroid hormone that builds the brain | Rises to supply foetal thyroid hormone, which is needed for brain development |
| 49 |  | then carries on into the milk | and the need continues in lactation as DHA passes into the milk |

### book/diagrams/response-chooser.yml

| Line | | Before | After |
|---|---|---|---|
| 23 |  | jumping straight to fixing provokes resistance and he digs in | moving straight to fixing the problem provokes resistance |
| 38 |  | it is not the move that gets the conversation going | it is not the best way to open the conversation |
| 46 | ★ | He just gave you real motivation, and the lecture buries it. Rushing to warn and instruct flips him from 'I want to' back to 'don't push me'. | He has just expressed real motivation, and the lecture overrides it. Rushing to warn and instruct turns his willingness to change back into resistance. |
| 74 |  | gives a small, owned goal (kopi siu dai on workday mornings), the right base for a SMART goal | gives a small goal he has chosen himself (kopi siu dai on workday mornings), a good basis for a SMART goal |
| 84 |  | Vague reassurance capped with a yes/no 'okay?' lets the moment slip. | Vague reassurance ending in a yes/no 'okay?' misses the opportunity. |
| 84 |  | help him co-write one small, specific goal | help him agree on one small, specific goal |

### book/diagrams/same-plate.yml

| Line | | Before | After |
|---|---|---|---|
| 5 |  | title: "Fortify the familiar: energy down, density up" | title: "Fortifying familiar foods: lower energy, higher nutrient density" |

### book/diagrams/scfa-flow.yml

| Line | | Before | After |
|---|---|---|---|
| 66 |  | Acetate, the most far-travelling SCFA, | Acetate, the SCFA that travels furthest, |

### book/diagrams/trial-check.yml

| Line | | Before | After |
|---|---|---|---|
| 11 |  | Vascular risk control is the intervention that holds up in a trial. | Vascular risk control is the intervention with trial support here. |
| 14 |  | The GEM trial, a definitive null, found | The GEM trial, a large trial with a clear null result, found |
| 20 |  | the capsule is not the food | a capsule is not a substitute for the food |

### book/glossary.qmd

| Line | | Before | After |
|---|---|---|---|
| 8 |  | A five-step scaffold for brief counselling | A five-step framework for brief counselling |
| 26 |  | so drawing on it for fuel dismantles working tissue | so using it for fuel breaks down functional tissue |
| 43 | ★ | it steps up with LDL-cholesterol around the final menstrual period | it rises with LDL cholesterol around the final menstrual period |
| 44 |  | The sensing hub of the hypothalamic neurons that set hunger, beside a gap in the blood–brain barrier, where hunger and fullness hormones in the blood are read | The hypothalamic nucleus whose neurons regulate hunger, beside a gap in the blood–brain barrier, where hunger and fullness hormones in the blood are detected |
| 62 |  | easily thrown off by hydration | easily distorted by hydration status |
| 72 |  | The staged hand-off of fuel supply in fasting | The successive phases of fuel supply in fasting |
| 81 | ★ | read at the bedside by waist circumference | measured at the bedside by waist circumference |
| 109 |  | leptin injections rescue it | leptin injections reverse it |
| 129 |  | The diet taken as a whole, which predicts health better than any isolated nutrient | The diet taken as a whole, which predicts health outcomes better than any single nutrient |
| 146 |  | The energy left for the body's own housekeeping after training has taken its share | The energy left for the body's basic functions after the energy cost of exercise |
| 183 |  | A clinical picture in older age whose features include | A clinical syndrome of older age whose features include |
| 218 |  | context-cued behaviour that runs with little conscious thought | context-cued behaviour that occurs with little conscious thought |
| 275 | ★ | In the broad sense, overnutrition and undernutrition are its two tails | In the broad sense, it covers both overnutrition and undernutrition |
| 285 |  | in which the ovaries wind down and oestrogen falls | in which ovarian function declines and oestrogen falls |
| 292 |  | The fuzz of tiny projections | The dense layer of tiny projections |
| 294 |  | that sweeps leftovers and bacteria onward | that sweeps undigested residue and bacteria onward |
| 298 |  | even when the mother runs low | even when the mother is deficient |
| 301 |  | that ferry those products to the brush border | that carry those products to the brush border |
| 311 |  | A building currency, made by the pentose phosphate pathway and spent on synthesis | A carrier of reducing power, made by the pentose phosphate pathway and used for synthesis |
| 315 |  | Symptoms of the brain running short of glucose | Symptoms of glucose deprivation in the brain |
| 317 |  | it varies enormously between people | it varies widely between people |
| 324 |  | A fast, low-skill filter that anyone can apply | A quick, simple check that any trained staff member can apply |
| 348 |  | The exit from glucose-6-phosphate that yields | The branch pathway from glucose-6-phosphate that yields |
| 384 |  | Undernutrition layered on kidney disease | Undernutrition in the setting of kidney disease |
| 394 |  | the signature bias of a food diary | the characteristic bias of a food diary |
| 396 |  | so that one runs while its opposite idles | so that one is active while the opposing pathway is inhibited |
| 397 |  | \| Recognise and refer \| The posture of the life-stage chapters: | \| Recognise and refer \| The approach of the life-stage chapters: |
| 428 |  | Transport that spends a gradient built by a pump, as SGLT1 spends the sodium gradient | Transport that uses a gradient built by a pump, as SGLT1 uses the sodium gradient |
| 474 | ★ | The deficit tail of malnutrition | The deficit form of malnutrition |
| 483 |  | that adds the metabolic risk information BMI misses | that adds information on metabolic risk that BMI does not give |

### book/index.qmd

| Line | | Before | After |
|---|---|---|---|
| 12 |  | What, and how, people eat sits at the centre | What people eat, and how they eat, is at the centre |
| 20 |  | diseases of how people live, | lifestyle-related diseases, |
| 22 |  | is part of that picture: | contributes to that risk: |
| 40 |  | The book is built for an integrated study loop: | The book is designed to be used in four steps: |
| 66 |  | built by doing. | learned through practice. |

### book/quizzes/06-dietary-assessment.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 9 |  | Day-to-day intake varies a lot | Day-to-day intake varies considerably |
| 15 |  | the signature bias of a prospective food diary | the characteristic bias of a prospective food diary |
| 35 |  | This is the serving-size trap. | Serving sizes on labels can be misleading. |
| 35 |  | shows what a realistic portion delivers | shows how much a realistic portion contains |
| 41 | ★ | The grade is a useful glance, but it won't reveal the per-serving trap | The grade is a useful quick guide, but it does not reveal the per-serving problem |
| 48 |  | Permission turns advice into a conversation. | Asking permission makes the advice part of a two-way conversation. |
| 64 | ★ | A restrictive plan prescribes restriction into a possible eating disorder, the harm to avoid. | A restrictive plan could worsen a possible eating disorder, which is the harm to avoid. |
| 67 |  | Dismissing the flag misses a chance to help safely. | Dismissing these warning signs misses a chance to help safely. |
| 87 |  | captures the long-run pattern | captures the long-term pattern |

### book/quizzes/adulthood-working-life.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 22 |  | the high-carbohydrate and during-exercise advice is calibrated for serious endurance athletes | the high-carbohydrate and during-exercise advice is designed for serious endurance athletes |
| 22 |  | Sports nutrition is needed only at true endurance volume | Sports nutrition is needed only at true endurance training volumes |
| 28 |  | and food does the job | and food is sufficient |
| 31 | ★ | Which is the calibrated advice? | Which is the evidence-based advice? |
| 35 |  | the RDA (about 0.8 g/kg/day) is a floor | the RDA (about 0.8 g/kg/day) is a minimum |
| 35 |  | so resistance exercise two or more times a week is the necessary partner | so resistance exercise two or more times a week is also needed |
| 54 |  | The healthy-kidney reassurance isn't source-specific | The reassurance about healthy kidneys applies to plant and animal protein alike |
| 74 |  | People who flush and keep drinking are the high-risk combination | Flushing combined with continued drinking carries the highest risk |
| 87 |  | the most evidence-aligned practical change | the best-supported practical change |
| 90 |  | worsens the metabolic picture, so weight meals toward the daytime | worsens metabolic health, so move meals toward the daytime |

### book/quizzes/appetite-weight-regulation.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 9 |  | The two are easily swapped. | The two are easily confused. |
| 21 |  | This is the biological basis for treating weight without blame. | This is the biological basis for managing weight without blaming the patient. |
| 24 |  | Their importance is what they show | Their importance lies in what they show |
| 39 |  | Diet is not the missing ingredient: | Diet is not the missing factor: |
| 69 |  | the two can come apart | the two can dissociate |
| 81 |  | Weight regain is the predicted output of body-weight regulation | Weight regain is the expected result of body-weight regulation |
| 117 |  | Sleep loss tilts the same hormones toward hunger | Sleep loss shifts the same hormones toward hunger |

### book/quizzes/behaviour-change-counselling.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 22 |  | a lecture buries it | a lecture tends to suppress it |
| 28 |  | ease off the righting reflex | resist the righting reflex |
| 35 |  | tends to bounce off | tends to be ignored |
| 54 |  | an over-big goal | an overly ambitious goal |
| 57 |  | What add-on improves the odds it happens? | What addition makes the goal more likely to be achieved? |
| 61 |  | makes the goal more likely to happen | makes the goal more likely to be achieved |
| 77 |  | It tailors the style of the conversation, nothing more. | It helps tailor the style of the conversation, nothing more. |
| 80 |  | far from a proven-best method | far from proven to be the best method |
| 90 |  | Recognise the signal and switch to support and referral. | Recognise the warning signs and switch to support and referral. |
| 93 |  | Missing this is a do-no-harm failure. The red flags outrank the diet goal; | Missing this could cause harm. The red flags take priority over the diet goal; |

### book/quizzes/bone-health-osteoporosis.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 9 |  | calcium and physical activity carry the strongest evidence | calcium and physical activity have the strongest evidence |
| 9 |  | That is a real but bounded effect | That is a real but limited effect |
| 15 |  | Their effect is bounded, not absent. | Their effect is limited, not absent. |
| 25 |  | Content is not availability: spinach's calcium is locked up by oxalate | Calcium content is not the same as bioavailability: spinach's calcium is bound by oxalate |
| 28 |  | it is a poor bone source despite the label | it is a poor source of calcium for bone despite its reputation |
| 73 |  | higher protein tracks about 11% lower hip-fracture risk | higher protein is associated with about 11% lower hip-fracture risk |
| 73 |  | The acid-ash idea that protein leaches calcium therefore runs against the evidence. | The acid-ash idea that protein leaches calcium is therefore contradicted by the evidence. |
| 73 |  | Protein is the collagen matrix and preserves fall-preventing muscle | Protein forms the collagen matrix and preserves fall-preventing muscle |
| 79 |  | it is the collagen matrix, drives IGF-1 | it forms the collagen matrix, raises IGF-1 |
| 79 |  | With adequate calcium it tracks lower fracture risk. | With adequate calcium it is associated with lower fracture risk. |
| 85 |  | Why is a low body weight a bone red flag? | Why is a low body weight a red flag for bone health? |
| 89 |  | largely because it tracks lower bone density | largely because it is associated with lower bone density |
| 89 |  | carry a bone red flag | have a red flag for bone health |
| 92 |  | low body weight tracks lower bone density | low body weight is associated with lower bone density |
| 111 |  | for those who are genuinely short | for those who are genuinely deficient |
| 153 |  | a diet-plus-exercise programme losing about 10% of body weight | a diet-plus-exercise programme that produced about 10% weight loss |
| 169 |  | Diet nudges urate only modestly: | Diet affects urate only modestly: |
| 169 |  | a urate-lowering drug (allopurinol) to target | a urate-lowering drug (allopurinol) titrated to a target urate level |
| 191 |  | glucosamine helps nothing | glucosamine helps neither condition |

### book/quizzes/brain-health-dementia.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 12 |  | The MIND pattern is a reasonable low-regret choice | The MIND pattern is a reasonable choice with little downside |
| 27 |  | The best trial signal, from blood-pressure control | The best trial evidence, from blood-pressure control |
| 33 | ★ | The cohort signal did not survive the trial. | The trial did not confirm the cohort association. |
| 33 |  | Recommend the pattern as low-regret, not as proven prevention. | Recommend the pattern as having little downside, not as proven prevention. |
| 45 |  | Ginkgo was null, omega-3 capsules are null (eat fish as food) | Trials of ginkgo and omega-3 capsules found no benefit (eat fish as food) |
| 51 |  | so adding it is a do-no-harm error | so adding it risks harm |
| 57 |  | is concrete, high-value advice | is concrete, useful advice |
| 63 |  | the high-value non-food actions are | the most useful non-food actions are |
| 72 |  | and it is associated with more pressure ulcers: a do-no-harm error | and it is associated with more pressure ulcers, so it can cause harm |
| 84 |  | not a care failure | not a failure of care |

### book/quizzes/cardiovascular-disease-hypertension.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 15 |  | Only the Mediterranean pattern has the event-level PREDIMED signal | Only the Mediterranean pattern has event-level evidence, from PREDIMED |
| 41 |  | with its finding standing: science self-correcting, not a diet debunked. | with its finding unchanged: an example of science correcting itself, not of a diet being disproved. |
| 57 |  | can carry most of a day's sodium | can contain most of a day's sodium |
| 63 |  | are the potassium counterpart you want more of | are good sources of potassium, which should be increased |
| 66 |  | where the sodium actually sits | where the sodium actually comes from |
| 95 |  | not a reflex from one number | not an automatic response to one number |
| 121 |  | and if in doubt, don't | and if in doubt, do not recommend it |

### book/quizzes/childhood-adolescence.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 9 |  | Demand tracks pubertal stage, not birthday. | Nutritional demand follows pubertal stage, not chronological age. |
| 25 |  | Per-kilogram protein needs drift *down*, not up | Per-kilogram protein needs *fall*, not rise |
| 35 | ★ | iron need jumps at menarche as monthly loss stacks on growth. | iron need rises sharply at menarche as menstrual loss adds to the demands of growth. |
| 48 |  | so sugary drinks are a red flag to recognise, not a poison to fear. | so sugary drinks are a risk to recognise and reduce, not a toxin. |
| 64 |  | and healthy-habit framing is what's safe | and framing advice around healthy habits is the safe approach |
| 74 |  | The message is to fuel, not restrict (never a stricter diet) | The advice is to eat enough for her training, not to restrict (never a stricter diet) |
| 100 |  | genetics still sets most of the ceiling | genetics still determines most of the peak achievable |

### book/quizzes/chronic-kidney-disease.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 7 |  | High-risk CKD, so his diet is now dietitian-led work | High-risk CKD, so his nutrition care is now dietitian-led |
| 9 |  | sits firmly in the high-risk zone | falls in the high-risk category |
| 12 |  | waiting for symptoms misses the window | waiting for symptoms misses the chance to intervene early |
| 15 |  | Reading these results as reassuring reverses the heat map. | Reading these results as reassuring misreads the heat map. |
| 28 |  | Sodium reduction is the one piece of advice that does not reverse in CKD | Sodium reduction is the one piece of advice that still applies in CKD |
| 31 |  | It is not the advice that reverses. | It is not the advice that changes in CKD. |
| 57 |  | The fair position is benefit with a caveat, not a settled prescription | The fair conclusion is a benefit with a caveat, not a settled prescription |
| 79 |  | This picture is protein-energy wasting | This presentation indicates protein-energy wasting |
| 101 | ★ | Which food is an absolute avoid in CKD, rather than a portion-controlled one? | Which food must be avoided completely in CKD, rather than portion-controlled? |
| 105 |  | carry a neurotoxin that healthy kidneys clear | contain a neurotoxin that healthy kidneys clear |
| 105 | ★ | That makes them an absolute avoid | They must therefore be avoided completely |
| 108 | ★ | White rice is low in potassium and not an absolute avoid. | White rice is low in potassium and need not be avoided. |
| 111 | ★ | so their portions are managed to blood levels, but they are not an absolute avoid | so their portions are adjusted to blood potassium levels, but they need not be avoided completely |
| 114 | ★ | Oily fish is not an absolute avoid | Oily fish need not be avoided |
| 114 | ★ | The absolute avoid is star fruit and belimbing. | The foods to avoid completely are star fruit and belimbing. |
| 119 |  | Cutting sodium, the advice that does not reverse in CKD | Cutting sodium, the advice that still applies in CKD |
| 121 |  | Unlike the potassium message, it does not reverse. | Unlike the potassium message, it still applies. |
| 121 |  | avoids the do-no-harm hazards | avoids the known hazards |

### book/quizzes/dietary-guidelines-patterns.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 35 |  | Food synergy is a framework for reading evidence, though | Food synergy is a framework for interpreting evidence, though |
| 38 |  | within the whole pattern of food they arrive in | within the overall dietary pattern in which they are eaten |
| 41 |  | although patterns do also communicate well | although patterns are also easier to communicate |
| 48 |  | a strong pattern, not a personal guarantee | good evidence for the pattern, not a personal guarantee |
| 61 |  | it shows that a pattern moves a risk factor, not that it prevents events | it shows that a pattern changes a risk factor, not that it prevents cardiovascular events |
| 77 |  | Patterns are principles to adapt, not menus to impose. | Dietary patterns are principles to adapt to a family's own food, not fixed menus to impose. |

### book/quizzes/digestion-absorption.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 12 |  | but the small intestine does most of the work | but most digestion takes place in the small intestine |
| 28 |  | Pancreatic enzymes do much of the work | Pancreatic enzymes carry out most digestion |
| 41 |  | They do different jobs: one propels, the other mixes. | They have different functions: one propels, the other mixes. |
| 54 |  | the near-neutral pH of the bicarbonate-treated duodenum | the near-neutral pH that bicarbonate produces in the duodenum |
| 77 |  | Secretin handles bicarbonate; CCK handles bile release and enzymes. | Secretin stimulates bicarbonate secretion; CCK stimulates bile release and enzyme secretion. |
| 113 |  | kept up by a pump | maintained by the sodium pump |
| 158 |  | it is the mechanism, not flavouring | it is essential to the mechanism, not a flavouring |

### book/quizzes/energy-balance.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 15 |  | Physical activity and TEF together take a meaningful share of TEE | Physical activity and TEF together account for a substantial share of TEE |
| 25 |  | NEAT alone varies enormously from person to person. | NEAT alone varies widely from person to person. |
| 61 |  | varies enormously between people | varies widely between people |
| 64 |  | TEF tracks what you eat, not incidental movement; it's roughly 10% of TEE and fairly fixed. | TEF depends on food intake, not incidental movement; it is roughly 10% of TEE and fairly constant. |
| 74 | ★ | The 'out' side falls by more than the smaller body needs | Energy expenditure falls by more than the smaller body size predicts |
| 74 |  | Energy balance is actively regulated, not free | Energy balance is actively regulated |
| 83 |  | Why is BMI treated as a screening flag and not a measure of body fat? | Why is BMI treated as a screening tool and not a measure of body fat? |

### book/quizzes/evidence-vs-hype.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 12 |  | Reflex cynicism skips the evidence just as credulity does. Traced to its source, the verdict might be | Reflex cynicism ignores the evidence just as credulity does. Traced to its source, the conclusion might be |
| 48 |  | judged by adherence, not by the clock. | judged by adherence rather than by meal timing. |
| 72 |  | Whether the study survived, or has been retracted | Whether the study has since been retracted |
| 74 |  | 'Did the study survive?' is part of appraisal. | Checking whether a study has been retracted is part of appraisal. |
| 87 |  | The signal is real but weak: | The evidence is real but weak: |
| 87 |  | a strict elimination diet isn't worth its cost | a strict elimination diet is not justified |

### book/quizzes/gut-microbiome.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 12 |  | it came from a 1970s back-of-envelope estimate | it came from a rough 1970s estimate |
| 81 |  | Dietary (animal-source) B12 is the functional supply | Dietary (animal-source) B12 is the only usable source |
| 84 |  | Colonic synthesis sits past the absorption site (terminal ileum) | Colonic synthesis occurs beyond the absorption site (terminal ileum) |
| 84 |  | Diet is the functional source. | Diet is the only usable source. |
| 93 |  | carry few or no live microbes | contain few or no live microbes |
| 117 |  | 'gut serotonin = happiness' is a metaphor without a mechanism. | 'gut serotonin = happiness' has no mechanism to support it. |

### book/quizzes/healthy-ageing.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 7 |  | Energy needs fall, but nutrient needs don't, so the plate should be denser. | Energy needs fall, but nutrient needs don't, so meals should be more nutrient-dense. |
| 12 |  | shrinks the nutrients along with the energy | reduces nutrients along with energy |
| 61 |  | or for someone to look dry | or for clinical signs of dehydration |
| 74 |  | Solitary eating tracks with poorer diets and low mood | Eating alone is associated with poorer diets and low mood |
| 80 |  | and it tracks with low mood | and it is associated with low mood |
| 87 |  | this is the point where ageing in health has tipped into undernutrition | this degree of loss suggests that undernutrition has developed |
| 87 |  | support his intake with food-first density | support his intake with nutrient-dense food first |
| 90 |  | it flags malignancy, depression, dental, swallowing or medication problems | it may indicate malignancy, depression, or dental, swallowing or medication problems |
| 93 |  | worsens malnutrition: the do-no-harm trap | worsens malnutrition, which is the harm to avoid |

### book/quizzes/infancy-early-childhood.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 22 |  | The cleanest trial, PROBIT, | The most rigorous trial, PROBIT, |
| 41 |  | so peanut goes in as smooth peanut butter | so peanut is given as smooth peanut butter |
| 48 |  | with a 4-month floor | but not before 4 months |
| 61 | ★ | so it waits as the main drink | so it should not yet be the main drink |
| 64 | ★ | but cow's milk waits as the drink | but cow's milk should not yet be the main drink |
| 77 |  | this is a firm do-no-harm rule | this is a firm safety rule |

### book/quizzes/integrative-metabolism.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 33 |  | 'the sugar hormone' undersells it | calling it 'the sugar hormone' is incomplete |
| 57 |  | the liver ships its whole ketone output to the brain, muscle and heart | the liver exports all the ketones it makes to the brain, muscle and heart |
| 73 |  | Nothing; they are the same process at different sizes. | Nothing; they are the same process to different degrees. |
| 75 |  | Same molecules, different regulatory context: | The molecules are the same, but the regulation differs: |
| 87 |  | Protein sits around 0.8. | Protein gives an RQ of about 0.8. |

### book/quizzes/interprofessional-referral.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 21 |  | A useful one carries the reason and urgency | A useful one includes the reason and urgency |
| 39 |  | A one-size printout is universal advice | A one-size-fits-all handout is universal advice |
| 45 |  | Nutrition care is rarely a solo act. | Nutrition care is usually shared across a team. |
| 57 |  | with hand-offs to the dietitian, nurse and pharmacist | with referrals to the dietitian, nurse and pharmacist |
| 57 |  | that makes referral and follow-up happen | that supports referral and follow-up |
| 87 |  | a clinician's own habits track with counselling behaviour and credibility | a clinician's own habits are associated with counselling behaviour and credibility |

### book/quizzes/macronutrients.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 28 |  | wholegrain starch sits at the protective end of the carbohydrate spectrum | wholegrain starch is at the protective end of the carbohydrate spectrum |
| 35 |  | *Trans* fat is the clearest harm | *Trans* fat has the clearest evidence of harm |
| 41 |  | *trans* fat carries the clearest harm signal, so it ranks first | *trans* fat has the clearest evidence of harm, so it ranks first |
| 67 |  | This reflects the belief that carbs are bad | This reflects the belief that carbohydrate is harmful |

### book/quizzes/menopause-midlife.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 9 |  | In cohort data the scale climbs steadily through the transition | In cohort data weight rises steadily through the transition |
| 9 |  | so the waistline, not the scale, is the better indicator | so waist circumference, not weight, is the better indicator |
| 12 |  | not how much the scale reads | not how much she weighs |
| 28 |  | Adjusted expenditure holds roughly flat to age 60 | Adjusted expenditure stays roughly stable to age 60 |
| 46 |  | LDL-cholesterol steps up at menopause; blood pressure tracks age | LDL-cholesterol rises at menopause; blood pressure tracks age |
| 48 |  | The menopause-linked change is the lipid step | The menopause-linked change is the rise in lipids |
| 54 |  | The LDL-cholesterol and apoB step and the visceral fat gain are real | The rise in LDL-cholesterol and apoB and the visceral fat gain are real |
| 61 |  | so soy is a food to enjoy, not a cure, | so soy is a reasonable food choice, not a treatment, |
| 74 |  | should be worked up, not topped up with a supplement | should be investigated, not simply treated with a supplement |
| 77 |  | not an empirical top-up | not empirical supplementation |
| 90 |  | especially for symptoms diet can't touch | especially for symptoms that diet does not affect |
| 93 |  | Writing diet off ignores what it does well | Dismissing diet ignores what it does well |

### book/quizzes/micronutrients-hydration.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 113 |  | Iodine builds thyroid hormone, which drives foetal brain development | Iodine is needed to make thyroid hormone, which is essential for foetal brain development |
| 119 |  | All these salts carry essentially the same sodium | All these salts contain essentially the same amount of sodium |
| 126 |  | Sodium and potassium pull in opposite directions | Sodium and potassium have opposite effects on blood pressure |

### book/quizzes/obesity-metabolic-syndrome.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 7 |  | Past Singapore's ≥23 intervention point | Above Singapore's ≥23 intervention point |
| 12 |  | so this reading misses real risk | so this interpretation misses real risk |
| 53 |  | sleeps poorly and stress-snacks on nights. Which statement about the sleep, stress and weight link is most defensible? | sleeps poorly and snacks when stressed on night shifts. Which statement about the link between sleep, stress and weight is best supported? |
| 57 |  | is the reproducible signal | is the reproducible finding |
| 60 |  | The hormone account is directional and contested | The hormone account is suggestive and contested |
| 60 |  | The reliable signal is the increase in intake, not the hormone mediator. | The reliable finding is the increase in intake, not a change in hormones. |
| 76 |  | Prescribing sits outside this stage | Prescribing is beyond this stage |
| 89 |  | unsweetened kopi-o kosong and water sit at the low-sugar A end | unsweetened kopi-o kosong and water are at the low-sugar A end |
| 92 |  | so a diet version is not the fix the label implies | so a diet version is not the solution the label implies |
| 105 |  | is the evidence-based frame. Stigma degrades care and drives avoidance | is the evidence-based approach. Stigma lowers the quality of care and leads patients to avoid healthcare |
| 108 |  | stigma degrades care and drives avoidance | stigma lowers the quality of care and leads patients to avoid healthcare |

### book/quizzes/pregnancy-lactation.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 9 |  | so the extra is a snack, not a second dinner. | so the extra amounts to about a snack, not an extra meal. |
| 18 | ★ | What's the right first read? | What is the most likely explanation? |
| 35 |  | so thiamine goes in before glucose | so thiamine is given before glucose |
| 38 |  | Thiamine goes in before glucose. | Thiamine is given before glucose. |
| 61 |  | so check that a multivitamin is not over-dosed in retinol and skip liver | so check that a multivitamin does not contain high-dose retinol, and avoid liver |
| 87 | ★ | Macrosomia and neonatal hypoglycaemia are two ends of one chain: maternal glucose in, foetal insulin out, overgrowth, then hypoglycaemia once the supply stops. | Macrosomia and neonatal hypoglycaemia share one cause: high maternal glucose raises foetal insulin, which drives overgrowth and then hypoglycaemia once the supply stops. |

### book/quizzes/type-2-diabetes.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 28 |  | falls outside the studied window, and remission tracks with substantial weight loss | falls outside the studied range, and remission is associated with substantial weight loss |
| 31 |  | Insulin-treated diabetes was an exclusion in DiRECT | Insulin-treated diabetes was an exclusion criterion in DiRECT |
| 31 |  | insulin use moves this patient outside the eligibility band | insulin use places this patient outside the eligibility criteria |
| 34 |  | beyond the diagnosis window | beyond the time-since-diagnosis limit |
| 47 |  | a durable-but-reversible state that tracks with keeping weight off | a lasting but reversible state that depends on keeping weight off |
| 89 |  | It substitutes toward quality instead of banning rice | This approach swaps toward better-quality foods instead of banning rice |
| 95 |  | The gain comes from substitution toward wholegrain | The benefit comes from substituting wholegrain |
| 105 |  | unsweetened kopi-o kosong and water sit at the low-sugar A end | unsweetened kopi-o kosong and water are at the low-sugar A end |
| 124 |  | so fasting on insulin is not preparation-free | so fasting on insulin needs preparation |

### book/quizzes/undernutrition-malnutrition.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 41 |  | Formal diagnosis applies the GLIM criteria downstream (a phenotype of loss plus a cause), done by the dietitian or team. | Formal diagnosis then applies the GLIM criteria (at least one phenotypic and one aetiological criterion), carried out by the dietitian or team. |
| 44 |  | Diagnosis (GLIM) sits downstream of screening | Diagnosis (GLIM) follows screening |
| 55 |  | High risk: the other two score regardless of BMI | High risk: the other two components score regardless of BMI |
| 57 |  | scoring all three components is what avoids the classic 'she looks fine' miss | scoring all three components avoids the classic error of missing malnutrition because 'she looks fine' |
| 63 |  | MUST scores fine with a normal BMI; the other two components carry the score here | MUST can be scored with a normal BMI; the other two components account for the score here |
| 76 |  | using it without fixing the cause underperforms | using it without addressing the cause is less effective |
| 85 | ★ | Why should they not be fed up quickly? | Why should their feeding not be increased quickly? |
| 89 |  | The job here is to recognise the at-risk patient | The generalist's role here is to recognise the at-risk patient |
| 95 |  | for a cautious, monitored restart | for cautious, monitored refeeding |
| 98 | ★ | not fed up fast | not refed rapidly |
| 105 |  | so you refer on the pattern, not the presence of a cough | so referral is based on the pattern, not on the presence of a cough |
| 114 |  | The red flags stand on their own. | The red flags are sufficient on their own. |
| 124 |  | The generalist's part is screen, recognise and refer. | The generalist's part is to screen, recognise and refer. |
| 127 | ★ | Refeeding management is specialist, later learning. | Refeeding management is a specialist task, learned later in training. |

### book/quizzes/why-nutrition-matters.quiz.yml

| Line | | Before | After |
|---|---|---|---|
| 28 |  | fixing the diet often means addressing sleep and stress too | improving the diet often means addressing sleep and stress too |
| 48 |  | Every landmark trial carries limits. | Even landmark trials have limitations. |
| 54 |  | the claim needs stating precisely, with its limits | the claim needs to be stated precisely, with its limitations |

### book/structures/bile.mol.yml

| Line | | Before | After |
|---|---|---|---|
| 13 |  | the steroid back is | the other face of the steroid ring system is |

### book/structures/dietary-fats.mol.yml

| Line | | Before | After |
|---|---|---|---|
| 21 |  | industrial trans fat carries the clearest dietary harm signal | industrial trans fat has the clearest evidence of harm of any dietary fat |

### book/structures/micronutrients.mol.yml

| Line | | Before | After |
|---|---|---|---|
| 22 |  | Storage cuts both ways: | Storage has two consequences: |

### components/src/AdviseRefer.svelte

| Line | | Before | After |
|---|---|---|---|
| 21 |  | title: 'The line: advise or refer?', | title: 'Advise or refer?', |
| 23 |  | is safe for almost anyone and is your job. | is safe for almost anyone and is part of your role. |
| 26 |  | screen, then hand to the dietitian. | screen, then refer to the dietitian. |
| 78 |  | {data.title \|\| 'The line: advise or refer?'} | {data.title \|\| 'Advise or refer?'} |
| 79 |  | then check your call | then check your answer |

### components/src/BoneBank.svelte

| Line | | Before | After |
|---|---|---|---|
| 18 |  | title: 'Build the bank, defend the balance', | title: 'Build peak bone mass, slow the loss', |
| 125 |  | {data.title \|\| 'Build the bank, defend the balance'} | {data.title \|\| 'Build peak bone mass, slow the loss'} |
| 137 |  | the modifiable band over a mostly-inherited floor | the range lifestyle can change, above a largely inherited minimum |

### components/src/BoneWindow.svelte

| Line | | Before | After |
|---|---|---|---|
| 23 |  | Scrub the age, then toggle the factors | Move the age slider, then toggle the factors |
| 38 |  | Grade-A for accrual — but food-first. A supplement helps a teen who is short of calcium, little if they already have enough. | Grade A for accrual, with food sources preferred. A supplement helps a teenager who is short of calcium, and adds little for one who already has enough. |
| 43 |  | drops oestrogen and stalls accrual — it shaves the ceiling for life, whatever else you do. | lowers oestrogen and stalls accrual — the loss can be permanent, regardless of the other factors. |
| 149 |  | Scrub age · toggle the factors | Move the age slider · toggle the factors |

### components/src/CarbSafetyCheck.svelte

| Line | | Before | After |
|---|---|---|---|
| 20 |  | The reflex is drug-class-first: | Always check the drug class first: |
| 26 |  | Glucose-dependent action — no hypoglycaemia used alone. | Acts in a glucose-dependent way, so it does not cause hypoglycaemia when used alone. |
| 27 |  | (mind fluid/ketone advice separately) | (give separate advice on fluids and ketone risk) |
| 28 |  | Glucose-dependent — no hypoglycaemia used alone. | Acts in a glucose-dependent way, so it does not cause hypoglycaemia when used alone. |
| 42 |  | Drug class first, every time. | Always check the drug class first. |

### components/src/CasePlayer.svelte

| Line | | Before | After |
|---|---|---|---|
| 249 |  | converse with a guardrailed AI | converse with a safety-constrained AI |
| 251 | ★ | Not enabled in this build, so the case continues seamlessly (graceful <code>fallbackGoto</code>). | Not available in this version, so the case continues without it. |

### components/src/ClaimAnalyzer.svelte

| Line | | Before | After |
|---|---|---|---|
| 18 |  | What evidence sits behind the headline? | What evidence supports the headline? |
| 19 |  | Where on the hierarchy? | Where does it rank in the hierarchy of evidence? |
| 78 |  | Pick a claim, then step it down the funnel | Pick a claim, then work through the four questions |

### components/src/DietHistory.svelte

| Line | | Before | After |
|---|---|---|---|
| 83 |  | You built a picture — but you never asked about drinks | You gathered useful information — but you never asked about drinks |
| 87 |  | You caught the drinks — her largest source — and | You asked about drinks — her largest source of sugar — and |
| 91 | ★ | (eating-out and portions carry a lot) | (eating out and portion size contribute a large share) |
| 92 |  | Good — you ran the do-no-harm check. | Good — you completed the do-no-harm check. |
| 115 |  | Intake picture uncovered | Intake information gathered |
| 145 |  | Picture so far: | Findings so far: |

### components/src/EnergyBudget.svelte

| Line | | Before | After |
|---|---|---|---|
| 189 |  | BMR — just staying alive at rest (the biggest slice) | BMR — energy used at rest for basic body functions (the largest component) |
| 190 |  | TEF — digesting the food | TEF — energy used to digest and process food |

### components/src/FatSwap.svelte

| Line | | Before | After |
|---|---|---|---|
| 22 |  | cuts cardiovascular events — a change roughly the size of a statin. | cuts cardiovascular events by roughly as much as a statin does. |
| 23 |  | they are the backbone of the Mediterranean pattern | they are central to the Mediterranean pattern |
| 24 |  | Trade saturated fat for refined starch and sugar and the benefit disappears — | If saturated fat is replaced with refined starch and sugar, the benefit disappears — |
| 28 |  | cuts cardiovascular events — the swap, not the cut, is what protects the heart. | cuts cardiovascular events; what matters is what replaces the fat, not the cut itself. |
| 29 |  | LDL and events barely move — the swap, not the cut, is what protects the heart. | LDL and events barely change; what matters is what replaces the fat, not the cut itself. |
| 30 |  | This replacement can push risk the wrong way — the swap, not the cut, is what protects the heart. | This replacement can increase cardiovascular risk; what matters is what replaces the fat, not the cut itself. |
| 34 |  | Butter or palm oil for olive or canola oil, yes; butter for white bread, no. The swap, not the cut, is what protects the heart. | Replacing butter or palm oil with olive or canola oil helps; replacing butter with white bread does not. What matters is what replaces the fat, not the cut itself. |

### components/src/FoodFormSorter.svelte

| Line | | Before | After |
|---|---|---|---|
| 25 |  | A choking hazard whole — the SAME food is safe as smooth butter. Hazard is about form. | A choking hazard when whole — the same food is safe as smooth peanut butter. The risk depends on the form. |

### components/src/FuelDial.svelte

| Line | | Before | After |
|---|---|---|---|
| 20 |  | title: 'Fuel to fit your training — usually less than you think', | title: 'Matching food to your training — usually less is needed than you think', |
| 42 |  | Salt only matters for long or very sweaty efforts. | Salt only matters for long sessions or heavy sweating. |
| 43 |  | fuelling framing from Thomas 2016 | fuelling guidance from Thomas 2016 |
| 103 |  | Dial your week · read what you actually need | Set your training week · see what you need |

### components/src/HealthyPlate.svelte

| Line | | Before | After |
|---|---|---|---|
| 193 |  | That is the whole           idea: adapt the plate to the cuisine, not the family to a foreign diet. | The aim is to adapt the plate to the household's cuisine, not to impose           an unfamiliar diet. |

### components/src/LifeStages.svelte

| Line | | Before | After |
|---|---|---|---|
| 88 |  | Anchored to: <span | Based on: <span |

### components/src/MenopauseTimeline.svelte

| Line | | Before | After |
|---|---|---|---|
| 24 | ★ | The scale rises with age — no jump at the FMP. What is menopause-specific is fat moving inward and muscle falling. | Body weight rises with age — no jump at the FMP. What is menopause-specific is fat shifting to the abdomen and lean mass falling. |
| 45 |  | LDL-cholesterol steps up around the FMP (menopause-linked); blood pressure just drifts up with age. | LDL-cholesterol rises abruptly around the FMP (menopause-linked); blood pressure rises gradually with age. |
| 136 |  | Switch the layer to see what really changes | Switch the layer to see what changes at menopause |

### components/src/MetabolicMap.svelte

| Line | | Before | After |
|---|---|---|---|
| 119 |  | then click a crossroad (★) | then click a hub (★) |
| 131 |  | >One-way streets</button> | >Irreversible steps</button> |
| 196 |  | A molecule that links the crossroads on the map. | A molecule that links the hubs on the map. |
| 204 |  | ✗ one-way street | ✗ irreversible step |

### components/src/MetsCluster.svelte

| Line | | Before | After |
|---|---|---|---|
| 19 |  | tend to travel together because they share a common root | tend to occur together because they share a common underlying cause |
| 23 |  | is the shared root that pulls the whole cluster together | is the shared underlying abnormality that links the components |
| 30 |  | Impaired fasting glucose — an early signal, | Impaired fasting glucose — an early marker, |
| 35 |  | caption: 'Modifiable factors that feed central fat and insulin resistance', | caption: 'Modifiable factors that contribute to central fat and insulin resistance', |
| 42 |  | it flags a shared root (insulin resistance and central adiposity) | it indicates a shared underlying abnormality (insulin resistance and central adiposity) |
| 164 |  | >shared root</text> | >shared cause</text> |
| 194 |  | \|\| 'Modifiable factors that feed central fat and insulin resistance'} | \|\| 'Modifiable factors that contribute to central fat and insulin resistance'} |

### components/src/PillarsHub.svelte

| Line | | Before | After |
|---|---|---|---|
| 24 |  | Alcohol is empty energy and disinhibits food choice. | Alcohol supplies empty calories and weakens restraint over food choices. |
| 70 |  | how it and nutrition pull on each other | how it and nutrition affect each other |

### components/src/RenalFlip.svelte

| Line | | Before | After |
|---|---|---|---|
| 19 |  | title: 'The advice that flips in CKD', | title: 'Advice that reverses in CKD', |
| 21 |  | watch each verdict flip — except | watch each verdict change — except |
| 41 |  | in a large trial it cut strokes and deaths. | in a large trial it reduced strokes and deaths. |
| 42 |  | Check first — if unsure, don’t. | Check first; if unsure, do not recommend it. |
| 51 |  | DASH is deliberately loaded with potassium | DASH is deliberately rich in potassium |
| 60 |  | They carry a neurotoxin | They contain a neurotoxin |
| 60 |  | An absolute avoid, not a portion-controlled food. | They must be avoided completely, not just limited in portion. |
| 69 |  | badge: "Still good — doesn't flip" | badge: "Still good — doesn't reverse" |
| 69 |  | reduces protein leak | reduces albuminuria |
| 73 |  | see which advice flips — and which one holds. | see which advice reverses — and which does not. |
| 75 |  | Recognising the flip is the skill; the quantities are a renal dietitian’s. | The skill is recognising which advice reverses; a renal dietitian sets the quantities. |
| 128 |  | {data.title \|\| 'The advice that flips in CKD'} | {data.title \|\| 'Advice that reverses in CKD'} |
| 129 |  | Toggle the patient · watch each verdict flip | Toggle the patient · see which verdicts change |

### components/src/RequirementDial.svelte

| Line | | Before | After |
|---|---|---|---|
| 20 | ★ | Back-loaded and modest in pregnancy — then it jumps for milk. "Eating for two" only nearly fits lactation. | Modest in pregnancy and concentrated in the later trimesters, then highest in lactation for milk production. "Eating for two" comes closest to true only in lactation. |
| 22 |  | The surprise: the requirement barely rises | The requirement barely rises |
| 23 |  | unit: 'floor flat — with an upper limit', why: 'The floor barely moves — but high-dose preformed retinol is teratogenic. A ceiling to respect, not a target.' | unit: 'requirement flat, with an upper limit', why: 'The requirement barely moves, but high-dose preformed retinol is teratogenic, so the advice is an upper limit to respect, not a target.' |

### components/src/SamePlate.svelte

| Line | | Before | After |
|---|---|---|---|
| 19 |  | title: 'Fortify the familiar: energy down, density up', | title: 'Fortifying familiar foods: lower energy, higher nutrient density', |
| 36 |  | The rule here is density UP, restriction OFF. | The aim is to raise nutrient density, not to restrict the diet. |
