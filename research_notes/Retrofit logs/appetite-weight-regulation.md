# Retrofit log: Appetite & Weight Regulation

Files changed:

- book/chapters/appetite-weight-regulation.qmd
- book/diagrams/appetite-thermostat.yml
- book/quizzes/appetite-weight-regulation.quiz.yml
- book/cases/appetite-defended-weight.case.yml

## Gate (HEAD → working copy)

| Check | Before | After | Note |
|---|---|---|---|
| Citation multiset | 42 keys, each ×1 | identical (diff empty) | Moves with their claims only: benelam2009satiation to the definition-list lead sentence; gibbs1973cck and batterham2002pyy into the satiety-peptide table; aponte2011agrp into the AgRP/NPY definition entry |
| data-island | 3 | 3 | |
| callouts | 9 | 18 | +1 Learning objectives, +8 Check yourself (two per movement); all 9 existing kept (6 retitled) |
| tables | 1 | 2 | +1 satiety-peptide table (form by relation) |
| figures | 0 | 0 | |
| ids | 13 | 13 + sec-control | none removed or renamed; all internal #sec- links resolve |

Copy audit (`--you`, four files): 114 flags → 0. Em dashes 11/16/32/20 → 0/0/0/0. Bold 36.6 → 5.9 per 1,000 words. "rather than" 3 → 0. Chapter "you": 27 → 2 (the quoted viral claim "dieting permanently wrecks your metabolism", and the clinician sentence "When you discuss weight with a patient" in the 🍜 callout). All three YAML files load with js-yaml; validate-cases: OK appetite-defended-weight.case.yml.

## Summary of changes

- Top matter: new opener (the old one said "This chapter follows…"), Learning objectives (6), chapter map with four branches = four `##` movements (sec-control, sec-satiety, sec-hedonic, sec-defended).
- At a glance: rewritten as three prose paragraphs (the chapter no longer "treated" anything; the inline-header "Three ideas" list became prose); bold cut to two defining uses (controlled variable, reward system).
- `## How hunger and fullness are controlled` gains `{#sec-control}`; movement intro deleted (§11g no movement intros).
- Thermostat: §11j pass 2 definition list pre-teaches AgRP/NPY and POMC/CART neurons before the see-saw paragraph; MC4R bold-defined; second metaphor ("volume knob") and roadmap phrase dropped; island instruction kept as one sentence with a link to the section that explains the last two states.
- Abbreviation glosses added (decision 2, which names AgRP/POMC expansions; this goes beyond the plan's Uncertainty 1 recommendation of no expansions): AgRP, NPY, POMC, CART, α-MSH, NTS, PYY, GLP-1. They sit in the definition list or at first mention, not inside the mechanism sentences.
- Common-belief callouts retitled as neutral questions and restructured belief → origin → evidence: "Why doesn't leptin treat common obesity?", "Is dopamine the pleasure chemical?", "Does dieting permanently damage the metabolism?", "🍜 Is "eat less, move more" enough?". Other callouts retitled: "MC4R deficiency: the same circuit in humans", "The ileal brake and the microbiome".
- Satiety peptides: inline-header list → three-column table (where made, effect on eating), rows in anatomical order; meta "(Amylin is defined here…)" deleted.
- What makes a meal filling (renamed from "What actually fills you up"): hunger/satiation/satiety as a definition list; satiety cascade as a `.flow` beside one prose sentence; the restating "one-line version" deleted; lever-table labels unbolded; "Solid > liquid" → "Solid over liquid".
- 🍜 Eating-for-fullness swaps as a bulleted list; *kosong* glossed "(no sugar)" (the book's own gloss); local food words italicised.
- Reward system: food cues and ultra-processed foods bold-defined; the long paragraph split in two.
- Ultra-processed foods: bold-defined here with a one-line standard gloss ("industrial formulations made largely from refined ingredients and additives, with little intact whole food"), because term-ownership.md reassigns the term to this chapter (the plan had said leave it unbolded).
- Why the body defends its weight: opening negation and parenthetical aside rewritten; "defended range" made the chapter's single term for the defended level; the three regain arms changed from a numbered list to a bulleted one (concurrent, not ordered); the take-home sentence moved to follow the list; re-bold of adaptive thermogenesis removed.
- Headings: "Two neglected levers: sleep and stress" → "Sleep and stress: two neglected levers"; "When the switch is stuck: obesity as a defended system" → "Obesity as a defended system".
- GLP-1 receptor agonists: defined; "you met above", "this chapter drew", "strikingly", "tellingly", "cleanest possible" removed; tirzepatide glossed as a dual GIP/GLP-1 receptor agonist (decision 2 gloss).
- Singapore picture: obesogenic food environment defined; the four inline-header bullets became four parallel bold run-in paragraphs; "near-perfect", "exactly", "the Spiegel/Al Khatib physiology, lived" removed; "it worked:" removed, with the reformulation figure kept and its causal link kept ("As manufacturers reformulated…").
- Close: answers the question with content; Part I reference and "It is not free. It is defended." stack removed.
- Voice: every prose "you"/"we/us" converted to third person, except the two noted above; all contractions in prose expanded (the advice line "Eat fruit, don't drink it" kept); long sentences split (§11j thresholds).
- Diagram YAML: `intro:` deleted (it repeated the chapter paragraph beside the island and duplicated the component's own click prompt); every em dash, "you", capitalised emphasis (OWN, HIGHER, DISPROPORTIONATELY) and the untaught "orexigenic" removed; "the chapter drew" removed; the summary and principle fields stay plain sentences.
- Quiz: no "Correct."/"No —"/"Reversed —"/"Close —"/"Overstated —"/"Not quite —" openers; no "myth"/"the chapter dismantles"; "(incentive salience)" removed (term not taught); "controlled studies show" replaced with the named experiment; correct options trimmed to similar length; no two consecutive feedbacks share an opening word (checked by script across quiz and case).
- Case: em dashes, "Correct."/"Right —"/"Exactly —" openers, "myth the chapter dismantles", "This is where…" scaffold and the end-good tagline removed; remedial keeps one bold; options trimmed to similar length; q-damaged options in plain patient language (§11e). Ids, `correct` flags, option order, effects, routing, objectives and tags unchanged.

## Content fixes (decision 1 categories)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | #sec-obesity (two parentheticals merged) | "(Its classification, staging and management are Part III; here the point is the concept.)" and "(Who should take these, dosing, side-effects and surgery are Part III; here we cover only the mechanism.)" | "(The classification and management of obesity, including where these medicines and surgery fit, are in the *Obesity & Metabolic Syndrome* chapter.)" | Cross-reference retarget: obesity is a Part IV chapter, and it covers classification (BMI, waist, Asian cut-offs), lifestyle-first management and the medication/surgery ladder as recognise-and-refer, but not staging, dosing or side effects, so those pointers were dropped |
| chapter | #sec-leptin callout | "Insulin acts as a second, weaker fuel-gauge signal to the same neurons; its main home is the Integrative Metabolism chapter." | "Insulin (its metabolic actions are in the *Integrative Metabolism* chapter) is a second, weaker fuel-gauge signal to the same neurons." | Cross-reference precision: Integrative Metabolism covers insulin's metabolic actions, not its signalling to hypothalamic neurons |
| chapter | #sec-hedonic (Hall trial) + Check yourself 6 | "with meals matched for calories, macronutrients, sugar, fat, salt and fibre" | "The diets were matched for the calories presented, macronutrients, sugar, fat, salt and fibre" | Contradiction with another chapter's explicit cited text: *Digestion & Absorption* describes the same @hall2019upf trial as matched for "calories presented" |
| chapter | #sec-obesity GLP-1 paragraph | "because the defended set-point was never removed, only opposed" | "because the defended range was opposed, never removed" | Internal contradiction: the chapter's cited text (#sec-defended, @speakman2018lipostatic) says no single set point has been located; the view is a defended range |
| diagram | glp1.summary; glp1.detail.hunger | "the defended set-point reasserts"; "It opposes the defended set-point rather than removing it" | "the defended range reasserts itself"; "The drug opposes the defended range without removing it" | Island vs chapter cited text (as above) |
| quiz | q-glp1 opt2 text + feedback | "They permanently reset the body's defended weight to a lower level."; "they oppose the defended set-point while present" | "They permanently reset the defended range lower."; "The drugs oppose the defended range while present" | Quiz vs chapter cited text (as above) |
| quiz | q-adaptation opt3 feedback | "The point is it's modest and reversible, not permanent damage." | "It is modest and largely reversible, not permanent damage." | Quiz vs chapter cited text ("real but modest and largely reversible", @hall2022biggestloser) |
| case | q-damaged opt c fb; end-good body; end-good keyPoint 3; end-partial keyPoint 3 | "modest and reversible" (4 places) | "modest and largely reversible" | Case vs chapter cited text (as above) |
| quiz | q-mc4r opt2 feedback | "(~6%) of severe childhood obesity" | "(about 6%) of severe childhood-onset obesity" | Quiz vs chapter cited text ("severe childhood-onset obesity", @farooqi2003mc4r) |
| quiz | q-sleep opt3 feedback | "controlled studies show clear shifts (leptin down, ghrelin up, hunger up), especially for energy-dense foods" | "In a controlled experiment, two nights of short sleep lowered leptin, raised ghrelin and raised hunger, especially for calorie-dense foods." | Quiz vs chapter cited text: vague plural "studies" replaced by the single cited experiment (@spiegel2004sleep) the chapter describes |

## Deferred content concerns (not changed; need source-checking)

| Location | Issue |
|---|---|
| chapter #sec-obesity, para 1 | "Obesity is increasingly understood as a disease of a dysregulated system, not a lifestyle choice [@rubino2025clinicalobesity]": the Lancet commission distinguishes clinical from preclinical obesity; the sentence may overstate what it says |
| chapter #sec-singapore, Nutri-Grade paragraph | The 7.1% → 4.6% median-sugar figure and its attribution to the scheme need checking against the cited HPB page (@hpbNutriGrade) |
| chapter #sec-hedonic, food-cues paragraph | @fazzino2019hyperpalatable defines hyperpalatable foods and estimates how common they are; it does not show that ultra-processed foods are "engineered … at maximally rewarding levels" |
| chapter #sec-hedonic, Hall trial | The trial's limits that *Digestion & Absorption* gives (n = 20, two weeks per diet, metabolic ward) are not echoed here (§11d: name a landmark trial with its limits); "the clearest evidence" is a superlative to check |
| chapter #sec-obesity, GLP-1 paragraphs | ~15% (semaglutide) and ~21% (tirzepatide, top dose) are treatment-regimen means from STEP 1 / SURMOUNT-1; check the figures and the estimand. Tirzepatide is now glossed as a dual GIP/GLP-1 receptor agonist, but the class definition "engineered, long-acting versions of GLP-1" fits it only loosely |
| chapter #sec-singapore, opening paragraph | "Adult obesity has kept rising despite sustained public-health effort" is uncited |
| chapter #sec-gut-peptides, ghrelin paragraph | Learned (entrained) pre-meal ghrelin rise and "protein suppresses ghrelin most durably" are not obviously supported by @kojima1999ghrelin / @cummings2001preprandial |
| chapter #sec-singapore, food-environment paragraph | "most residents eat out most days" needs checking against @tan2020whereweeat |
| chapter #sec-gut-peptides, satiety-peptide table (Amylin row) | "Reduces meal size and slows the stomach" is uncited |
| chapter #sec-satiety, lever table | The "Why it works" mechanisms (protein raises GLP-1/PYY, viscous fibre feeds the ileal brake, fast eating outruns fullness signals) are uncited in the table |
| chapter #sec-leptin, congenital deficiency | "leptin injections rescue them completely" may overstate the cited case reports (@farooqi1999leptintherapy) |

## Deferred backlog

- No teaching figure (§11f): commission a labelled gut-to-brain signalling schematic (stomach and gut peptides, vagus, NTS, hypothalamus) in a later content pass. The thermostat island carries the hypothalamic mechanism.
- No 🔬 Food science house block (§11b): the satiety movement has 🍜 and 🍳 only; adding one is deferred (decision 4).
- The 🍜 callout in the Singapore picture ("Is "eat less, move more" enough?") is counselling framing, not an eating-out block; consider re-typing it in a later pass (the emoji and type were kept as a hard constraint).
- Glossary: the 26 rows below need adding to book/glossary.qmd (not edited in this pass).
- Render verification not run (forbidden while other agents share the checkout): check that the TOC shows four movements with their sub-topics, that the chapter-map links resolve, that the `.flow` and both definition lists render, that the satiety-peptide table wraps acceptably at phone width (its third column is long), and that the thermostat island renders with no intro.
- Cross-chapter: *Energy Balance* still calls this chapter "the capstone of Part I" and says "that chapter takes up" (not this agent's file).

## Glossary rows owned (introduced in *Appetite & Weight Regulation*)

| Term | Meaning | Introduced in |
|---|---|---|
| AgRP/NPY neurons | The accelerator neurons of the arcuate nucleus, which release agouti-related peptide (AgRP) and neuropeptide Y (NPY) and drive eating; AgRP blocks MC4R | Appetite & Weight Regulation |
| Amylin | A satiety peptide released with insulin from the pancreas at each meal; it reduces meal size and slows the stomach | Appetite & Weight Regulation |
| Arcuate nucleus | The sensing hub of the hypothalamic appetite thermostat, beside a gap in the blood–brain barrier, where hunger and fullness hormones in the blood are read | Appetite & Weight Regulation |
| Congenital leptin deficiency | A rare condition in which a child is born unable to make leptin, with extreme, early-onset obesity and relentless hunger; leptin injections rescue it | Appetite & Weight Regulation |
| Controlled variable | A quantity that an integrated system of hormones and brain circuits defends, as it defends blood glucose and body temperature; appetite behaves this way | Appetite & Weight Regulation |
| Defended range | The range of body weight the body defends, with a strong lower brake against starvation and a leaky upper one; no single set point has been located | Appetite & Weight Regulation |
| Food cues | The sight, smell and advertising of food, which trigger the reward system and can spark food-seeking even after a full meal | Appetite & Weight Regulation |
| Ghrelin | The stomach hormone that drives hunger; it rises before meals, partly entrained to habitual meal times, and falls after eating | Appetite & Weight Regulation |
| GLP-1 receptor agonists | Engineered, long-acting versions of the gut satiety hormone GLP-1 (semaglutide; tirzepatide is a dual GIP/GLP-1 receptor agonist) that amplify satiety signalling; weight returns when they are stopped | Appetite & Weight Regulation |
| Hedonic hunger | Wanting food for pleasure with no energy need | Appetite & Weight Regulation |
| Hunger | The drive that starts a meal | Appetite & Weight Regulation |
| Ileal brake | Feedback from the GLP-1/PYY cells at the far end of the small intestine that slows the stomach and signals fullness | Appetite & Weight Regulation |
| Leptin resistance | The brain's failure to respond to the high leptin of common obesity, which is why leptin therapy does not treat it | Appetite & Weight Regulation |
| Liking | The actual pleasure of a food, driven by opioid "hotspots" separate from dopamine | Appetite & Weight Regulation |
| Melanocortin-4 receptor (MC4R) | The receptor where the appetite accelerator and brake are summed: α-MSH activates it to reduce eating and AgRP blocks it to increase eating; MC4R mutations are the commonest single-gene cause of severe obesity | Appetite & Weight Regulation |
| Obesogenic food environment | A food environment in which palatable, energy-dense food is cheap, abundant and always in view | Appetite & Weight Regulation |
| POMC/CART neurons | The brake neurons of the arcuate nucleus, which make pro-opiomelanocortin (POMC) and cocaine- and amphetamine-regulated transcript (CART) and suppress eating; POMC is cut into α-MSH, the "stop" signal that activates MC4R | Appetite & Weight Regulation |
| PYY (peptide YY) | A satiety peptide from cells lower down the small intestine; at normal post-meal levels it cuts food intake by about a third | Appetite & Weight Regulation |
| Reward system | The brain system that drives eating because food is pleasurable and available; it can override fullness | Appetite & Weight Regulation |
| Satiation | The fullness that builds during a meal and ends it; it sets meal size | Appetite & Weight Regulation |
| Satiety | The fullness after a meal that delays the next one; it sets how long until hunger returns | Appetite & Weight Regulation |
| Satiety cascade | The sequence in which fullness signals act over a meal: sensory, cognitive, gut and absorbed-nutrient signals | Appetite & Weight Regulation |
| Satiety peptides | Hormones released as food arrives, roughly in proportion to the calories eaten, that signal fullness: CCK, GLP-1, PYY and amylin | Appetite & Weight Regulation |
| Sensory-specific satiety | The fall in the pleasantness of a food as it is eaten, while a different food stays appealing | Appetite & Weight Regulation |
| Ultra-processed foods | Industrial formulations made largely from refined ingredients and additives, with little intact whole food | Appetite & Weight Regulation |
| Wanting | The motivational pull toward a food, driven by dopamine | Appetite & Weight Regulation |

## Owner terms that do not occur in the chapter

None. All 25 rows that term-ownership.md assigns to appetite-weight-regulation, plus the reassigned "ultra-processed foods", occur in the chapter and are defined there.

Terms used here but owned elsewhere (left unbolded): leptin, adaptive thermogenesis, central (visceral) fat (*Energy Balance*); CCK, incretin (*Digestion & Absorption*); short-chain fatty acids (*Gut Microbiome* / *Macronutrients*); cortisol, Nutri-Grade (*Why Nutrition Matters*).

## Fix round 1 (verifier findings)

All 25 findings applied (the two GLP-1 citation findings are the same fix). One wording tweak: the gut-signals
cohesion fix reads "mainly through hormones" (verifier: "through hormones"), because the same section goes on
to a purely mechanical stretch signal and "through hormones" alone would imply exclusivity.

### Restorations of HEAD claims (undoing round-0 changes that altered a claim or its citation)

| File | Location | Before (round 0) | After (round 1) | Reason |
|---|---|---|---|---|
| chapter | #sec-obesity, GLP-1 efficacy | "…about 21% with tirzepatide at the top dose. When the drug stops, … never removed [@wilding2021step1; @jastreboff2022surmount1; @wilding2022step1extension]." | "…at the top dose [@wilding2021step1; @jastreboff2022surmount1]. When the drug stops, … never removed [@wilding2022step1extension]." | Keys moved back with their claims after the sentence split (multiset unchanged): STEP 1 / SURMOUNT-1 support the efficacy figures, the STEP 1 extension supports regain |
| chapter | #sec-singapore, Nutri-Grade | "…is a concrete environmental lever. As manufacturers reformulated, the median sugar content … fell from 7.1% to 4.6%" | "…is a concrete environmental lever on them, and it has worked: as manufacturers reformulated, the median sugar content … fell from 7.1% to 4.6% [@hpbNutriGrade]." | HEAD's efficacy claim restored (decision 1: claim strength not changed); the Nutri-Grade description is back in the cited sentence. Attribution stays in the deferred list |
| chapter | #sec-satiety, study lead-in | "Two controlled studies put numbers on these levers." | "Two studies put numbers on these levers." | "controlled" was a new design claim (Weigle 2005 is a sequential within-subject design) |
| chapter | Check yourself (protein 15% → 30%) | "Protein is the most satiating macronutrient: it suppresses ghrelin most durably and raises the satiety peptides GLP-1 and PYY. A higher-protein diet therefore turns up fullness through the body's own signals…" | "Protein is the most satiating macronutrient, so a higher-protein diet turns up fullness: the volunteers spontaneously ate about 440 kcal/day less and lost about 4.9 kg over 12 weeks, with no instruction to eat less." | The answer attached a deferred (possibly unsupported) hormone mechanism to a trial that did not show it |
| chapter | #sec-leptin callout, first sentence | "Because leptin injections rescue children who cannot make leptin, leptin looked like a possible treatment…" | "Because leptin presses the appetite brake, it looked like a possible treatment for obesity in general." | Round-0 origin sentence was an unsupported (and anachronistic) historical claim; replaced with an origin the chapter itself teaches |
| chapter | Check yourself (leptin) | "Leptin works mainly as a starvation alarm: … Leptin therapy helps only the rare child with congenital leptin deficiency." | "On the current reading, leptin acts mainly as a starvation alarm: … Leptin therapy works for the rare congenital leptin deficiency, not for common obesity." | Hedge restored; added exclusivity/age limit removed (matches the chapter text) |
| diagram | fasted.inputs.leptin.note | "Low or falling, so it eases off the brake." | "Lower or falling, so it eases off the brake." | HEAD's hedge ("Low-ish") restored; keeps contrast with the post-loss "disproportionately low" |
| chapter | Learning objective 5 | "…how short sleep and chronic stress bias appetite toward hunger." | "…how short sleep (and, plausibly, chronic stress) biases appetite toward hunger." | Matches the chapter's "plausible but not proven" stress evidence |
| chapter | Chapter map, sleep node | "two levers that bias appetite toward hunger" | "levers that can bias appetite toward hunger" | As above |
| chapter | #sec-obesity, first sentence | "In obesity, the same defended system defends an elevated weight." | "…defends an elevated weight, so the problem is not a failure of discipline." | HEAD's non-blame statement restored in this section |
| case | q-arms opt b | "…so regain is overeating." | "…so regain is simply overeating." | Restores HEAD's "purely" sense; reads clearly |
| case | q-say opt a (correct) | "Explain the regain as biology, then focus on environment and habits." | "Explain the regain as biology, not weakness, then focus on habits." | Restores the non-blame contrast that separates it from the willpower distractor |
| case | q-damaged opt b feedback | "the large figure comes from an extreme outlier" | "the large, lasting drop behind that claim comes from an extreme outlier" | Antecedent restored after the option was trimmed |

### Style and structure fixes

- Close (#sec-close): deleted the three-part recap sentence ("A hypothalamic thermostat integrates it … pushes on it.") per §11c.
- Satiety cascade: detail moved into the `.flow` labels ("Sensory: taste and pleasure", "Cognitive: how much has been eaten", "Gut signals: stretch, CCK, GLP-1, PYY", "Absorbed nutrients"); the sentence re-narrating the flow deleted (§11j).
- Singapore callout: retitled "Is "eat less, move more" enough?" with no emoji (§11g: emoji only on house blocks; callout type and count unchanged), levers sentence rewritten as "The levers are the food kept at home, portion defaults, sleep, protein and fibre, and eating more slowly." This resolves the backlog note above about the 🍜 on this callout.
- Blame refrain thinned: deleted the one-sentence paragraph after the three-systems list ("Weight regain after a diet is therefore the predicted output … not a failure of willpower."; the regain Check yourself carries it), and ended the MC4R callout at "Hunger is, in this sense, hardware." (": the biological basis for treating weight without blame" deleted).
- #sec-gut-peptides opener: "…in real time, mainly through hormones. Two of these gut hormones…" (antecedent for "these").
- Insulin fuel-gauge sentence moved unchanged from the end of the leptin callout to the end of the first #sec-leptin paragraph (it did not answer the callout's question).
- Chapter map: "[Obesity as a defended system](#sec-obesity): the GLP-1 medicines" (leading "and" dropped).
- Singapore food environment: "keep such food cheap, abundant and always in view" → "put such food within reach day and night" (removes the verbatim repeat of the obesogenic-environment definition).
- Tildes → "about": sleep experiment (leptin about 18%, ghrelin about 28%, hunger about 24%); quiz q-adaptation option 2 and its feedback ("about 500 kcal/day").
- Biggest Loser callout: "and the *Biggest Loser* cohort is an extreme outlier" (italics consistent).
- Quiz q-wanting-liking stem: "anymore" → "any more".

### Gate after round 1

| Check | HEAD | Working copy |
|---|---|---|
| Citation multiset | 42 keys, each ×1 | identical (diff empty) |
| data-island | 3 | 3 |
| callouts | 9 | 18 (unchanged from round 0) |
| tables | 1 | 2 (unchanged from round 0) |
| figures | 0 | 0 |
| {#sec-…}/{#fig-…} ids | 13 | all present; every internal #sec- link resolves |

Copy audit (`--you`, four files): 0 flags; em dashes 0; bold 6 per 1,000 words; "rather than" 0; chapter "you" 2 (the quoted
viral claim and the clinician sentence in the "eat less, move more" callout). js-yaml loads all three YAML files;
validate-cases: OK appetite-defended-weight.case.yml.

Deferred content concerns: unchanged from the table above (the Nutri-Grade attribution and "protein suppresses ghrelin
most durably" remain deferred; neither is now restated in a Check yourself answer).

Nutri-Grade citation placement (verifier minor, two options offered): the first sentence ("Sugary drinks are Singapore's biggest source of dietary sugar.") stays separate under the paragraph-level citation; the scheme description and the reformulation figure now share the cited sentence. Joining all three would have produced a single sentence of about 55 words.

## Fix round 2 (verifier findings)

All 19 findings were acted on. Sixteen were applied as specified. Three were applied with a wording change
(findings 2, 8 and 9; see the first table). One extra fix was made in the case: the intro quote's
punctuation, the same class as finding 17. The diagram YAML was not touched.

### Applied with a change, and why

| Finding | Verifier text | Applied text | Reason |
|---|---|---|---|
| 2 (major): protein Check yourself | "…fuller for the same calories: satiation ends each meal sooner and satiety delays the next. …" | Same answer without the clause "satiation ends each meal sooner and satiety delays the next" | @weigle2005highprotein reports higher satiety ratings and lower total ad libitum intake. It did not separate meal size (satiation) from the gap between meals (satiety), and the chapter does not say protein acts through both. The clause would attach a new mechanism to a trial that did not show it, which is the round-1 rule |
| 8: leptin fuel gauge | "Because its level tracks fat mass, it serves as the brain's long-term fuel gauge." | "Because its level tracks fat mass, leptin is the brain's long-term fuel gauge." | §11g says prefer "is" over "serves as" (copy-audit copula rule). Repeating the noun also fixes the "it" antecedent (§11j cohesion) |
| 9: Singapore sleep paragraph | "**Short sleep and high pressure are the norm.** Short sleep and exam and shift-work stress are common. In a large…" | "**Short sleep, exam stress and shift-work stress are the norm.** In a large…" (the paraphrase sentence is deleted) | The verifier's text would still change HEAD's "the norm" to "common" and repeat "Short sleep". Moving HEAD's claim into the bold lead-in restores it word for word (only the slash is expanded). Bold count is unchanged |

### Content changes (before → after)

| File | Location | Before (round 1) | After (round 2) | Category |
|---|---|---|---|---|
| chapter | Check yourself (UPF trial) | "…not from the eaters' character. Ultra-processed foods combine sugar, fat and salt at highly rewarding levels, and the reward system responds to them and to food cues. Overeating in this setting…" | "…not from the eaters' character. Overeating in this setting is a normal reward system responding to an abnormal environment." | Removes a deferred mechanism (the Fazzino claim) given as the reason for a trial whose diets were matched for sugar, fat and salt; it contradicted *Digestion & Absorption* ("mechanism is still debated") and *Obesity & Metabolic Syndrome* |
| chapter | Check yourself (protein 15% → 30%) | "Protein is the most satiating macronutrient, so a higher-protein diet turns up fullness: the volunteers spontaneously ate about 440 kcal/day less and lost about 4.9 kg over 12 weeks, with no instruction to eat less." | "Protein is the most satiating macronutrient, so higher-protein meals leave people fuller for the same calories. The volunteers were never told to eat less, so the fall of about 440 kcal/day (and about 4.9 kg over 12 weeks) came from their own fullness, not from a decision to restrain. Changing what was eaten changed how much was eaten." | §11j: the answer now explains the mechanism in 3 sentences, using only the chapter's own claims (lever table: protein changes fullness "for the same calories"; the trial: "spontaneously", "no instruction") |
| chapter | #sec-defended para 1 | "…weight gain weakly. No single set point…" | "…weight gain weakly. Models of this defence should be weighed with care. No single set point…" | Restores HEAD's hedge ("Weigh the models with care.") |
| chapter | #sec-leptin callout, last paragraph | "…while a rise is quietly ignored [@flier2024leptin30]. That asymmetry underlies weight regain (see [Why the body defends its weight](#sec-defended))." | "…while a rise is quietly ignored, an asymmetry that underlies weight regain [@flier2024leptin30] (see [Why the body defends its weight](#sec-defended))." | Citation coverage restored to HEAD's (the key covers both the starvation-alarm reading and the regain claim). The key is not moved; the two sentences are joined. "[@key] (see …)" is an existing book pattern (CVD, CKD, D&A, Undernutrition) |
| chapter | #sec-leptin para 1 | "…eases off the accelerator (AgRP), which makes it the brain's long-term fuel gauge." | "…eases off the accelerator (AgRP). Because its level tracks fat mass, leptin is the brain's long-term fuel gauge." | Removes a causal link that HEAD did not draw (the gauge role follows from tracking fat mass, not from acting on the arcuate neurons) |
| chapter | #sec-singapore sleep paragraph | "**Short sleep and high pressure are the norm.** Exam stress and shift work are widespread." | "**Short sleep, exam stress and shift-work stress are the norm.**" | Restores HEAD's claim ("Short sleep and exam/shift-work stress are the norm") |
| chapter | #sec-hedonic, Hall trial | "The diets were matched for the calories presented, …" | "An ultra-processed diet and an unprocessed one were matched for the calories presented, …" | Cohesion: names the two arms (comparator as in *Digestion & Absorption*: "an unprocessed one"). Rest of the sentence and its key unchanged |
| chapter | #sec-defended, Biggest Loser callout | "…below what their body size predicted, and the gap persisted [@fothergill2016biggestloser]." | "…below what their body size predicted [@fothergill2016biggestloser]." | Redundant with "six years later"; the claim's duration is still stated |
| chapter | #sec-satiety flow, item 3 | "Gut signals: stretch, CCK, GLP-1, PYY" | "Gut signals: stretch, CCK, then GLP-1 and PYY" | Restores HEAD's order ("stretch, CCK, then GLP-1/PYY"), which the eating-slowly Check yourself relies on |
| chapter | #sec-thermostat, island instruction | "(fasted, fed, after weight loss and on a GLP-1 drug)" | "(fasted, just ate, after weight loss and on a GLP-1 drug)" | Island label consistency (the island's second state is "Just ate") |
| quiz | q-mc4r, correct option | "That appetite is set by a brain circuit." | "That appetite is a drive, not just willpower." | Restores HEAD's willpower contrast and its non-deterministic sense ("a biological drive, not just willpower", trimmed for length) |
| case | q-say, option a (correct) | "Explain the regain as biology, not weakness, then focus on habits." | "Explain the regain as biology, not weakness; change environment and habits." | Restores HEAD's "environment" (dropped silently in round 1). Lengths 75 / 71 / 68 characters |
| case | q-damaged, option a (correct) | "No, it slows only modestly, and that mostly recovers." | "No, it slows only a little, and mostly recovers." | Clarity (vague "that"); same claim as the feedback ("modest and largely reversible"). Lengths 48 / 65 / 50 |

### Style-only changes

- MC4R callout: "The same circuit operates in humans." deleted (it repeated the heading); the body opens with "MC4R mutations are…".
- #sec-leptin: etymology "and named from the Greek *leptos*, "thin"" deleted (§11j pass 1, seductive detail). "[@zhang1994leptin]" stays with the discovery claim.
- Wanting/liking callout: ", not a weakness" deleted (stacked antithesis, §11g).
- #sec-hedonic: the ultra-processed material is now its own paragraph. It opens with the verifier's topic sentence "The foods themselves can also be built to trigger the reward system." The definition and the "engineered…" claim are one sentence that ends on [@fazzino2019hyperpalatable]. The food-cues sentence is now a one-sentence paragraph.
- Quote punctuation, British placement: chapter case lead-in `"doing everything right". Work through why`; case intro `*"eating less than before"*.` (extra, not in the findings; this matches the persona line in the same file and the other cases, e.g. "to be safe".).
- Case bold removed (emphasis, not a definition): "12 kg" and "9 kg" (intro), "defended system" (end-good), "biology, not weakness" (end-partial). The only bold left is "biologically defended" in remedial.
- Biggest Loser callout source lines reflowed (no text change).

### Gate after round 2

| Check | HEAD | Working copy |
|---|---|---|
| Citation multiset | 42 keys, each ×1 | identical (diff empty) |
| data-island | 3 | 3 |
| callouts | 9 | 18 (unchanged from rounds 0 and 1) |
| tables | 1 | 2 (unchanged) |
| figures | 0 | 0 |
| {#sec-…}/{#fig-…} ids | 13 | all present (+ sec-control); every internal #sec- link resolves |

Copy audit (`--you`, four files): 1 flag. It is quiz line 19, neg-parallel "not just" in the q-mc4r correct option. It was reviewed and kept: the verifier asked for HEAD's wording back, and the contrast answers the misconception named in distractor 3 ("That people with obesity lack willpower."), which §11g allows. Em dashes 0. Bold 6 per 1,000 words. "rather than" 0. Chapter "you" 2 (the same two as before). js-yaml loads all three YAML files. validate-cases: OK appetite-defended-weight.case.yml.

### Deferred content concerns added in round 2

| Location | Issue |
|---|---|
| chapter #sec-hedonic, UPF paragraph topic sentence | "The foods themselves can also be built to trigger the reward system" restates the deferred @fazzino2019hyperpalatable claim ("engineered … at maximally rewarding levels"). It stands or falls with that claim |
| chapter #sec-singapore, sleep lead-in | "Short sleep, exam stress and shift-work stress are the norm" (HEAD's claim, restored) is uncited |
| chapter Check yourself (protein) | Whether protein acts on satiation (meal size) as well as on satiety was left unstated, pending a source |
