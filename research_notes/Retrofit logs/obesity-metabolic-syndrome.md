# Retrofit log: Obesity & Metabolic Syndrome

Files changed (only these):

- book/chapters/obesity-metabolic-syndrome.qmd
- book/diagrams/mets-cluster.yml
- book/quizzes/obesity-metabolic-syndrome.quiz.yml
- book/cases/mr-tan-obesity.case.yml

## Gate (HEAD vs working copy)

| Check | Before | After |
|---|---|---|
| Citation multiset | 52 keys (6 x2, mohNPHS2024 x3) | identical (`diff` empty) |
| data-island | 3 | 3 |
| callouts | 4 | 11 (+1 Learning objectives, +6 Check yourself) |
| tables | 0 | 1 (two number-lines, form-by-relation) |
| figures | 2 | 2 (`#fig-obesity-pathophysiology`, `#fig-char-kway-teow` kept) |
| HEAD ids | fig ids only | both present |
| New ids | none | sec-overview, sec-recognising, sec-phenotype, sec-mets, sec-science, sec-mechanism, sec-accumulation, sec-managing, sec-lifestyle, sec-weight-inclusive, sec-singapore, sec-close, sec-quiz, sec-case (all chapter-map links resolve) |

Copy audit (`--you`, four files): 119 flags before, 0 after. Chapter: 0 em dashes, bold 5.6 per 1,000
words (was 35.3), "rather than" 1 (was 10), 1 "you" ("Your choices branch the case", island
instruction). Island, quiz and case: 0 em dashes, 0 flags; case "rather than" 1, quiz 0.
YAML: all three files load with js-yaml. `validate-cases.mjs`: OK for mr-tan-obesity.case.yml.

## Summary of changes

Chapter: italic two-sentence opener; Learning objectives (6); chapter map (3 branches = the 3
movements, each with its two sub-topics); ids on every heading; movement intros deleted; the
at-a-glance "deliberately bounded" sentence deleted (restated the objectives); inline-header lists
removed (three-point list now plain sentences; MetS criteria a plain list, not a table, because the
mets-cluster island owns that display; two WHO/Singapore number-lines now a table); BMI-24 patient
moved into an `.example` box; definition list (ectopic fat, chronic low-grade inflammation, adipokines,
lipotoxicity) placed before the mechanism figure; the four bold run-ins of the causal chain turned
into plain topic sentences (chain kept in prose); two driver paragraphs and five lever paragraphs keep
bold run-ins (genuinely parallel entries); Singapore-picture run-ins rewritten as full claims; 🍜 swaps
as a bulleted list; weight-stigma consequences and the language-shift habits as bulleted lists;
reader-directed imperatives in exposition made expository ("Teach the hormone story directionally",
"name the mechanism"); close rewritten as a common-belief answer (belief, its source, the evidence),
no summary or next-chapter announcement; practise intro trimmed (it repeated the case intro). Six
collapsed Check yourself callouts (two per movement), answers built only from chapter text, no
citations. Overlong sentences split. TNF-α and IL-6 expanded (decision 2 gloss). Insulin resistance
given the standard one-line gloss incl. pancreatic compensation (decision 2).

Term ownership applied (term-ownership.md overrides the plan): this chapter now BOLD-DEFINES insulin
resistance, metabolic syndrome and weight-inclusive (the plan had them unbolded as taught earlier),
plus central obesity, non-sugar sweeteners, metabolic-bariatric surgery, weight stigma and person-first
language; the four mechanism terms are in an unbolded definition list. Terms owned elsewhere are
unbolded here (BMI, waist circumference, visceral fat, DXA, leptin, energy balance: Energy Balance;
leptin resistance, satiety, ghrelin: Appetite & Weight Regulation; ultra-processed foods: Appetite &
Weight Regulation; My Healthy Plate, Nutri-Grade, Healthier SG, War on Diabetes, cortisol, insulin
sensitivity: Why Nutrition Matters; hypertension, statin: Cardiovascular Disease & Hypertension;
free sugars, triglyceride, cholesterol: Macronutrients). At-a-glance bullet 3 rephrased so it does not
use "weight-inclusive"/"person-first language" before their definitions.

Island (mets-cluster.yml, plain text): `intro` key deleted (repeated the chapter paragraph beside it,
decision 9; the component renders it only `{#if data.intro}` and its own hint line carries the toggle
instruction); em dashes removed from title, notes, verdicts; "cut-points" -> "cut-offs" (synonym
cycling with the chapter); caption cut to the take-home the chapter does not state; all-caps emphasis
removed; chapter name plain ("the Type 2 Diabetes chapter").

Quiz: all bold removed from stems; seven "Correct." openers removed; 22 em dashes removed; "robust" x2
removed; option lengths evened (q4 d, q7 d trimmed); meta "Teaching the dissociation is the point"
removed; undefined "weight-normative" removed; q5 stem names the patient as a man (grounds "him" in
option d); "bariatric surgery" -> "metabolic-bariatric surgery" (q5 c) to match the defined term.
Feedback opening words checked: no two consecutive the same.

Case: 47 em dashes removed; "Right —", "Correct on both counts.", "Yes —", "This is the whole job at
this stage.", "Let's", "the crucial bit" and the altitude-meta sentence removed; bold reduced to at
most one span per body/feedback (remedial node keeps its two parallel run-ins); options trimmed to
similar length; reveal-numberlines cut to a thin bridge (§11e); "GLP-1 agents" -> "GLP-1 receptor
agonists" and "bariatric surgery" -> "metabolic-bariatric surgery" (match the chapter); units added to
blood pressure (mmHg). Scoring, routing, persona sprite, references unchanged. No patient-chat node.

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | at a glance, para 1 | "this part opens with one tail and closes with the other (the *Undernutrition & Malnutrition* chapter)" | "obesity is the more familiar one (undernutrition is in the *Undernutrition & Malnutrition* chapter)" | cross-reference (stale: Bone & Joint Health and Brain Health & Dementia now follow Undernutrition in Part IV) |
| chapter | at a glance para 3; mechanism para 1 | "*Energy Balance & Body Composition*" (2x) | "[*Energy Balance*](energy-balance.qmd)" | cross-reference (stale chapter title) |
| chapter | leptin paragraph | "leptin, the satiety signal from fat introduced in the *Appetite & Weight Regulation* chapter" | leptin plain; "This leptin resistance (see the [*Appetite & Weight Regulation*](appetite-weight-regulation.qmd#sec-leptin) chapter)" | cross-reference (leptin is introduced in Energy Balance; Appetite #sec-leptin is where leptin resistance is taught) |
| chapter | treatment-ladder callout | "improving those risk factors is not the same as preventing heart attacks: ... did not reduce cardiovascular events" | "...is not the same as preventing cardiovascular events: ... did not reduce cardiovascular events" | label misnames content (the outcome was cardiovascular events, as the same sentence says) |
| quiz | q1 option a; q1 b feedback | "Increased-risk on the Singapore line"; "≥23 for increased risk" | "Past Singapore's ≥23 intervention point"; "Singapore acts earlier, at ≥23" | quiz-chapter label mismatch (chapter names ≥23 the intervention point, never "increased risk") |
| quiz | q2 a feedback | "Three of five with no obligatory component defines the syndrome as a risk marker" | "Three of five, with no obligatory component, meets the definition" | quiz-chapter consistency (the count defines the syndrome; the risk-marker reading is separate in the chapter) |
| case | reveal-numberlines body | "The WHO reports obesity at ≥30 for international comparison, but Singapore's clinical action..." | thin bridge: "Mr Tan sits in Singapore's high-risk band (≥27.5) with central obesity by the Asian waist cut-off. Now look at the rest of his findings together." | §11e trim (thin bridge), not a contradiction fix: re-categorised in fix round 1, which also restored "intervention starts at ≥23" |
| case | q-levers option a + feedback; remedial last para | "Map the levers across all five pillars — diet, activity, sleep and stress" (four listed); levers list without behaviour change | "Map all five lifestyle levers..."; feedback and remedial add "with behaviour change to make them stick" | case-chapter contradiction (chapter's five levers include behaviour change) |
| case | objectives[2], q-plan a feedback, end-good body, both keyPoints, end-partial body | "five pillars" | "five levers" | terminology (chapter says levers; "pillars" collides with the six pillars of health in *Why Nutrition Matters*) |
| case | q-mets a feedback; end-good keyPoints[1] | "a risk marker for diabetes and heart disease" | "a risk marker for type 2 diabetes and cardiovascular disease" | label (chapter's cited text says cardiovascular disease; "heart disease" drops stroke) |

## Deferred content concerns (need source checking; not changed)

1. Chapter Sleep lever paragraph and quiz q4 a: "the classic leptin-down, ghrelin-up account is echoed observationally" cites @spiegel2004, which the *Appetite & Weight Regulation* chapter describes as a controlled experiment (two nights restricted to 4 h). The design description may be wrong. Joint bracket [@spiegel2004; @sleepHormonesMeta2025] left intact.
2. Singapore picture: "the ≥27.5 high-risk band is a stable roughly one in five adults" [@mohNPHS2024]: "stable" and "one in five" need checking against the survey.
3. 🍜 callout and figure caption: char kway teow "about 38 g of fat, close to a whole day's fat in one dish" [@healthhubHawkerSwaps]: 38 g is well under a typical adult daily fat intake; the comparison may overstate.
4. Chapter 🍜 drinks line ("condensed-milk ... drink") and quiz q6 option c ("Condensed-milk kopi-C"): in Singapore usage kopi-C is evaporated milk with sugar, and plain "kopi" is the condensed-milk drink. Check and fix the option (case uses "kopi-C" as Mr Tan's drink, which is fine).
5. Quiz q2 stem: "takes a statin for low HDL": statins are LDL-lowering; the harmonised criteria count drug treatment for reduced HDL (the usual examples are fibrates or nicotinic acid). The vignette is clinically odd; check against @alberti2009harmonizingMetS.
6. Stress lever (chapter), island lever note, CY6 answer and quiz q4 c state as established that chronic stress and cortisol bias eating toward comfort food and channel fat to the abdomen [@dallman2003]; the *Appetite & Weight Regulation* chapter, citing the same source, calls the loop "plausible but not proven" (animal models and human associations). Certainty mismatch between chapters.
7. 🔬 callout and CY4: eating rate presented as "the finding of the inpatient feeding trial" [@hall2019upf]; the *Digestion & Absorption* chapter says the mechanism is still debated (energy density, texture and eating rate are all candidates). Certainty mismatch.
8. Yishun Study sentence: "matched for BMI, age and sex, Singaporeans had higher percentage body fat" does not name the comparison group; check @chen2021yishun and name it.
9. Glossary row for insulin resistance: term-ownership.md's proposed meaning ends "transient and normal in puberty", which this chapter does not say (that is Childhood & Adolescence content). Orchestrator to decide whether the shared row keeps it.

## Deferred backlog

- No 🍳 Healthy kitchen block (decision 4: adding missing house blocks is deferred). A home-cooking swap block (e.g. cooking hawker favourites with less oil) would fit the accumulation sub-section.
- Component code: `components/src/MetsCluster.svelte` joins lever label and note with " — " (around line 197) and its FALLBACK strings contain em dashes ("Metabolic syndrome — a cluster...", "{n} of 5 — not yet"); its hint line "Toggle each component · any 3 of 5 meets the criteria" is hard-coded. Needs a component pass (out of scope).
- The Singapore weight-stigma survey sentence sits in the weight-inclusive sub-section, not in The Singapore picture; kept beside its argument (a move could be considered later).
- Glossary rows below to be added to book/glossary.qmd by the orchestrator.
- *Assessing Diet & Talking to Patients* labels the Asian cut-offs "Overweight ≥23 / Obese ≥27.5" while this chapter (and its cited CPG) says "intervene ≥23 / high risk ≥27.5"; same numbers, different labels. Not a contradiction in figures, but worth one book-wide label convention.

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Adipokines | The hormones and signalling proteins that fat tissue releases, such as adiponectin, which is insulin-sensitising and anti-inflammatory; in obesity adiponectin falls and pro-inflammatory adipokines rise | Obesity & Metabolic Syndrome |
| Central obesity | Excess fat carried around the abdomen, read at the bedside by waist circumference; in Asian adults, a waist of ≥90 cm in men or ≥80 cm in women | Obesity & Metabolic Syndrome |
| Chronic low-grade inflammation | A persistent, mild inflammatory state; in obesity it is driven by macrophages recruited into enlarged, stressed fat tissue | Obesity & Metabolic Syndrome |
| Ectopic fat | Fat deposited inside organs such as the liver and muscle, instead of under the skin | Obesity & Metabolic Syndrome |
| Insulin resistance | A reduced response of the body's cells to insulin; at first the pancreas compensates by making more insulin to keep blood glucose normal; with central fat, the hub of the metabolic syndrome | Obesity & Metabolic Syndrome |
| Lipotoxicity | The harm done when free fatty acids and ectopic lipid spill over into non-fat tissues; in liver and muscle it disrupts insulin signalling | Obesity & Metabolic Syndrome |
| Metabolic syndrome | The tendency for five cardiometabolic problems (central obesity, raised triglycerides, low HDL cholesterol, raised blood pressure, raised fasting glucose) to appear together; diagnosed when any three are present | Obesity & Metabolic Syndrome |
| Metabolic-bariatric surgery | Weight-loss surgery; a specialist tier of obesity treatment for selected patients, added to lifestyle change | Obesity & Metabolic Syndrome |
| Non-sugar sweeteners | Sugar substitutes, as in "diet" drinks; the WHO advises against relying on them for weight control | Obesity & Metabolic Syndrome |
| Person-first language | Language that names the person before the condition ("a person with obesity", not "an obese patient") | Obesity & Metabolic Syndrome |
| Weight stigma | Negative attitudes towards, and treatment of, people because of their weight, such as blame, shaming or disrespect | Obesity & Metabolic Syndrome |
| Weight-inclusive (care) | Care that anchors counselling on health behaviours and metabolic markers instead of on the scale alone | Obesity & Metabolic Syndrome |

## Owner terms from term-ownership.md that do not occur in this chapter

None. All twelve terms owned by obesity-metabolic-syndrome occur and are defined here.

## Fix round 1 (verifier findings)

All 1 blocker, 2 majors and 41 minors addressed (same four files only). Eleven fixes were applied in a
modified form, explained in the Note column. No new claims, numbers or citations; the citation multiset
is unchanged (one key pair moved with its claim inside the number-line table).

### Content fixes (before → after, category)

| File | Location | Before (round 0) | After | Category / note |
|---|---|---|---|---|
| case | q-levers option b feedback | "Anti-obesity medication ... not to prescribe or select them. Lifestyle change does work: a modest 5–10% loss already improves glucose, blood pressure and lipids, and his history is full of modifiable levers." | "Not the right move here, and not safe practice. Anti-obesity medication ... not to prescribe or select them. Lifestyle-first care is where you start, and his history is full of modifiable levers." | Blocker. Round 0 made an unlogged content change: it dropped the do-no-harm safety label and added an efficacy claim that overstates the chapter (the treatment-ladder callout says the landmark lifestyle results came from intensive, structured programmes). HEAD sense restored |
| case | q-levers option c feedback | "Shaming doesn't motivate. ... person-first framing is part of the treatment. 'Eat less'..." | "This is the do-no-harm trap. Shaming doesn't motivate. ... person-first framing is part of the treatment, not a courtesy. 'Eat less'..." | Major. Safety label (the option routes to remedial-donoharm) and HEAD's "not a courtesy" restored; neither was a meta sentence |
| chapter | Check yourself (why can shaming...) | "Stigma also raises cortisol and comfort-eating, which can promote weight gain (the COBWEBS loop), and chronic stress channels fat to the abdomen, the central-adiposity hub." | "Stigma also raises cortisol and comfort-eating, which can promote weight gain (the COBWEBS loop)." | Major. Removes a new, unhedged causal chain (stigma to abdominal fat) that the chapter never states and that *Appetite & Weight Regulation* calls "plausible but not proven" (deferred concern 6); it also did not answer the question. Modified reading: the finding's fix line quoted the COBWEBS sentence as the clause to delete, but its problem text targets the stress-to-abdomen clause. Deleting the COBWEBS sentence would have kept the faulty clause and removed the part that answers the question, so the stress clause was deleted and the COBWEBS sentence kept |
| case | reveal-numberlines body | "Mr Tan sits in Singapore's high-risk band (≥27.5) with central obesity by the Asian waist cut-off." | "Mr Tan sits in Singapore's high-risk band (≥27.5; intervention starts at ≥23) with central obesity by the Asian waist cut-off." | Restores the only place a learner on the correct path sees the ≥23 point. The round-0 row for this node is re-categorised above as a §11e trim, not a contradiction fix |
| case | q-plan option a feedback | "...and they are agreed with him, not dictated." | "...and they are agreed with him, not dictated, and reviewed together." | HEAD's "review together" (dropped from the trimmed option) moved into the feedback; option c's feedback recommends the same |
| case | q-mets option a text | "Four of five components: he meets criteria, as a risk marker, not a disease to drug." | "Four of five: he meets criteria; the label is a risk marker, not a disease to drug." | "Risk marker" reattached to the label (HEAD sense). Modified: "components" dropped so the correct option (83 chars) stays near its distractors (76, 79); the verifier's wording was 94 chars, a length cue (§11g) |
| case | q-mets option a feedback | "Diabetes, lipid and blood-pressure management belong to..." | "Detailed diabetes, lipid and blood-pressure management belongs to..." | HEAD's "detailed" restored (this chapter teaches first-line lifestyle management of the components) |
| chapter | insulin-resistance gloss | "The pancreas compensates by making more insulin..." | "At first, the pancreas compensates by making more insulin..." | Time frame added so the gloss sits with "Insulin resistance raises blood glucose" and the raised-glucose component (consistent with the *Type 2 Diabetes* β-cell row: β-cells "first compensate ... then fail"). Glossary row updated |
| chapter | definition list, Lipotoxicity | "The disruption of insulin signalling in liver and muscle by a spillover of free fatty acids and ectopic lipid." | "The harm done when free fatty acids and ectopic lipid spill over into non-fat tissues; in liver and muscle it disrupts insulin signalling." | Standard (broader) definition, decision 2. Glossary row updated |
| chapter | Sleep lever | "the hormone story gives the likely direction, not a proven mechanism" | "the hormone story suggests a direction, not a proven mechanism" | Probability judgement the cited 2025 meta-analysis does not support removed (matches quiz q4) |
| chapter | weight-stigma lead-in | "Weight stigma harms health in three ways [...]:" | "Weight stigma is a health hazard [...]:" | HEAD wording; "in three ways" made the list sound exhaustive |
| chapter | close, para 1 | "...behind the metabolic-syndrome cluster. That is why Singapore reads BMI at lower cut-offs..." | "...behind the metabolic-syndrome cluster. Singaporean adults carry more visceral fat at a given BMI, which is why Singapore reads BMI at lower cut-offs and always alongside the waist." | The missing step restored. Modified: "visceral fat" instead of the verifier's "more of that fat" (which would include ectopic fat; the chapter's cited claim is body and visceral fat), and two sentences instead of one 35-word sentence |
| chapter | number-line table | Singapore row with [@hpbmoh2016obesityCPG; @sgObesityBMI] in the ≥27.5 cell | the same keys on the row label "Singapore (clinical action)" | Citation placement: the keys support both Singapore thresholds, so they move with the claim to the row label (multiset unchanged) |
| chapter | Check yourself (inpatient trial) | "Soft, energy-dense, quick-to-eat foods are eaten faster and in greater volume before fullness signals catch up, so intake runs ahead of need even when the composition is matched." | "Because the diets were matched on composition, the difference lies in the form of the food. Soft, energy-dense, quick-to-eat foods are eaten faster and in greater volume before fullness signals catch up, though which of these features matters most is still debated." | Two findings combined (the hedge, and the answer repeating the 🔬 callout). Certainty aligned to *Digestion & Absorption*'s cited text ("the mechanism is still debated (energy density, texture and eating rate are all candidates)"). Modified: "lies" for "has to lie", and split into two sentences. The 🔬 callout's own wording stays in deferred concern 7 |
| chapter | Check yourself (waist under the cut-off) | "its shared root (insulin resistance with central adiposity)" | "its shared root (insulin resistance at the hub)" | Central adiposity is not her shared root when her waist is under the cut-off. Modified: "of the cluster" dropped, since the same sentence already says "the whole cluster" |
| chapter | Singapore picture, ethnic gradient | "...not moral, and they motivate culturally tailored counselling..." | "...not moral, and the gradient motivates culturally tailored counselling..." | Referent restored to HEAD's sense (the gradient, not the drivers) |
| chapter | Learning objective 4 | "Explain why ultra-processed foods and sugar-sweetened drinks push intake beyond what calorie arithmetic predicts." | "Explain why ultra-processed foods and sugar-sweetened drinks drive overeating: what is eaten shapes how much is eaten." | Calorie arithmetic predicts weight change, not intake. Modified: a colon instead of the verifier's "so that" (the principle explains the overeating; it does not follow from it); "overeating" per the owner chapter |
| chapter | Learning objective 5 | "and recognise when to refer for medication or surgery." | "and recognise medication and surgery as specialist tiers to refer for." | The chapter teaches that the tiers exist and are referred, not referral criteria |
| chapter | MetS list | "Treatment for a component counts the same as a raised reading." | "...as an abnormal reading." | HDL counts when low; matches quiz q2 |
| chapter | Five levers lead-in | "Five levers make up first-line care, and two of them, sleep and stress, are routinely under-used" | unchanged | Logging only: round 0 named the two under-used levers (HEAD said "two of them are routinely under-used:" without naming them). Cross-reference/specification supported by *Appetite & Weight Regulation* `#sec-sleep-stress` ("Sleep and stress: two neglected levers") |
| quiz | q3 option d feedback | "Both numbers are consistent: ..." | "The two numbers are comparable and consistent: ..." | Rebuts the option's "neither one is really comparable" again (HEAD sense) |
| quiz | q2 option a feedback | "...and low HDL all count, because treatment for a component counts the same as an abnormal reading." | "...and low HDL all count; the treated HDL is included because treatment for a component counts the same as an abnormal reading." | The "because" clause explains only the treated HDL. Modified: "is included" for the verifier's "counts" (three "counts" in one sentence) |
| diagram | waist component note | "Asian cut-offs. The waist reads visceral fat, the depot that drives the risk." | "...the depot that drives the risk, not overall weight." | HEAD's teaching contrast restored |
| log | glossary row, Weight-inclusive (care) | "...instead of on the scale alone, delivered without weight stigma" | "...instead of on the scale alone" | Row now matches the chapter's definition |

### Style and structure fixes

| File | Location | Before | After |
|---|---|---|---|
| chapter | close, para 2 | "Care therefore targets causes, not willpower. First-line care spans diet quality, ... medication and surgery are recognised and referred. Because weight stigma can itself promote weight gain, weight-inclusive, person-first care is part of the treatment." | "Care therefore works on those causes, and the way it is delivered matters too: because weight stigma can itself promote weight gain, weight-inclusive, person-first care is part of the treatment." (§11c: no summary. Modified: "matters too" for the verifier's "is part of it", which repeated "part of the treatment") |
| chapter | hub paragraph | "central adiposity and **insulin resistance**" | "central obesity and **insulin resistance**" (the defined term; §11g no synonym cycling) |
| chapter | Stress lever | "a self-reinforcing loop that feeds the central-adiposity hub" | "a self-reinforcing loop that feeds the hub of central obesity and insulin resistance" |
| diagram | hub `sub`, `caption`, header comment | "+ central adiposity"; "(insulin resistance with central adiposity)" | "+ central obesity"; "(insulin resistance with central obesity)" (glossary row for insulin resistance changed the same way) |
| chapter | mechanism opener | "body fat is an active endocrine organ, not inert padding:" | "body fat is an active endocrine organ:" |
| chapter | weight-inclusive opener | "so framing is a clinical skill, not a courtesy." | "so framing is a clinical skill." |
| chapter | Check yourself (6% loss) | "The target is metabolic health, not a BMI category." | "The target is metabolic health." |
| chapter | Singapore picture, components | "The survey reports the components separately, not as a bundled figure." | "The survey reports the components separately." |
| chapter | leptin paragraph | "which is why lifestyle change is a physiological lever and not a test of willpower." | "which is why lifestyle change acts on the physiology that holds it there." (Modified: "acts on" for the verifier's "works on", which can read as an efficacy claim; "holds it there" avoids repeating "the weight") |
| diagram | hub `note` | "Insulin resistance together with central (visceral) adiposity is the shared root of the cluster, which is why the components tend to appear as a group." | key deleted (decision 9: it repeated the chapter sentence beside the island). Checked `MetsCluster.svelte` line 189: the prompt is `data.hub.note` or else "Click a component to toggle it and read what its threshold means."; parsed YAML is used as-is (no merge with FALLBACK), so the built-in instruction shows. A YAML comment records why |
| chapter | definition-list lead-in | "Four terms describe what goes wrong:" | "Four terms describe the process:" |
| chapter | stigma list item 3 | "the loop captured by the COBWEBS model." | "the loop captured by the Cyclic Obesity/Weight-Based Stigma (COBWEBS) model." (decision 2 expansion) |
| chapter | treatment-ladder callout | "Two evidence cautions travel with the prevention story." | "Two evidence cautions apply to what lifestyle change can be expected to achieve." (Modified: the verifier's "apply when lifestyle change is offered to prevent diabetes" would misdescribe the cautions: DiRECT is remission, and Look AHEAD is cardiovascular events in established diabetes) |
| chapter | hub paragraph | one six-sentence paragraph (hub + risk-marker reading + local caveat) | split at "The syndrome is therefore best read as a risk marker..." (§11j one idea per paragraph) |
| chapter | 🔬 heading | "why "same nutrients" still means more calories" | "why "same nutrients" can still mean more energy eaten" |
| chapter | opener | "Obesity and the metabolic syndrome are written by biology and environment together," | "Obesity and the metabolic syndrome are a pattern written by biology and environment together," (HEAD's "a pattern") |
| chapter | at a glance | "Three points run through the chapter:" | "Three ideas shape how over-nutrition is recognised and managed:" (Modified: "in Singapore" dropped, since bullets 2 and 3 are not Singapore-specific) |
| chapter | Yishun sentence; UPF run-in | "flagged far more adults as over-fat than BMI did"; "**Ultra-processed foods drive over-eating...**" | "flagged far more adults as carrying excess body fat than BMI did"; "**Ultra-processed foods drive overeating...**" (owner-chapter spelling) |
| quiz | q4 option a; q5 option a | "Poor sleep reliably raises intake, though the appetite-hormone mechanism is contested" (85 chars); "Reinforce lifestyle as first-line; medication and surgery are specialist referrals" (82) | "Poor sleep reliably raises intake; the hormone mechanism is contested" (69 vs 69/72/69); "Reinforce lifestyle as first-line and refer for medication or surgery" (69 vs 67/74/63) |
| quiz | q7 stem | "with a patient who has felt judged" | "with a man who has felt judged" (grounds "he/him" in the options) |
| case | q-classify option b; q-plan option a | "Normal: his BMI is under 30, so he isn't obese." (47); "Agree a few realistic swaps and small activity and sleep targets, aiming for ~5–10% loss." (89) | "Normal: his BMI is under the WHO line of 30, so he isn't obese." (63 vs 64/61); "Agree a few realistic swaps and small activity and sleep goals for ~5–10% loss." (79 vs 84/76) |
| case | end-good body; end-partial body | "as **specialist referrals**, not a first move"; "*specialist referrals*"; "start **lifestyle-first**" | all three unbolded / un-italicised (no emphasis bold, §11g) |

Line re-wraps only elsewhere (opener, risk-marker paragraph, Stress lever, treatment-ladder callout).

### Deferred content concerns (updated)

6. (updated) The stress-to-abdominal-fat claim no longer appears in the CY6 answer (clause deleted). It
   remains, stated as established, in the Stress lever [@dallman2003], the island stress lever note and quiz
   q4 option c feedback; the certainty mismatch with *Appetite & Weight Regulation* ("plausible but not
   proven") still needs an author decision.
7. (updated) CY4 is now hedged in line with *Digestion & Absorption*. The 🔬 callout still says "That is the
   finding of the inpatient feeding trial" for the eating-rate account [@hall2019upf]; faster eating was
   measured in the trial, but whether it explains the extra intake is debated. Check and hedge the callout.
10. (new) Singapore picture: "national physical activity recovered to 84.7%" [@mohNPHS2024] has no referent
    (84.7% of what?). Check the survey and name the measure (for example, the share of residents meeting
    activity guidelines). Not reworded before that check. The case q-plan option c feedback ("nationally,
    activity rose while obesity still climbed") rests on the same figure.

### Gate after fix round 1 (HEAD vs working copy)

| Check | HEAD | Working copy |
|---|---|---|
| Citation multiset | 61 citations, 53 unique keys (6 x2, mohNPHS2024 x3; round 0 miscounted 52) (`uniq -c` md5 ba8b4340...) | identical (same md5; one key pair moved with its claim inside the table) |
| data-island | 3 | 3 |
| callouts | 4 | 11 (+1 Learning objectives, +6 Check yourself) |
| tables | 0 | 1 (two number-lines) |
| figures | 2 | 2 |
| HEAD {#sec-/#fig-} ids | `fig-obesity-pathophysiology`, `fig-char-kway-teow` | both present; all nine chapter-map `#sec-` links resolve |

Copy audit (`--you`, four files): 0 flags; chapter 0 em dashes, bold 5.5 per 1,000 words, "rather than" 1,
1 "you" (the case instruction "Your choices branch the case"). YAML: all three files load with js-yaml
(hub is now `{label, sub}` only). `validate-cases.mjs`: OK for mr-tan-obesity.case.yml (no patient-chat
node).

## Fix round 2 (verifier findings)

24 findings (1 blocker, 23 minors), all handled in the same four files. 22 were applied as specified or
in a lightly modified form (see the Note column). Two pairs of findings asked for conflicting fixes at the
same spot, and one fix from each pair was applied: the leptin sentence (the blocker against a minor) and
quiz q5 option a (two different wordings). No new claims, numbers or citations. The citation multiset is
unchanged, and two keys again sit on the sentences they support.

### Content fixes (before → after, category)

| File | Location | Before (round 1) | After | Category / note |
|---|---|---|---|---|
| chapter | leptin paragraph, last sentence (#sec-mechanism) | "The same biology that builds the cluster also defends the weight, which is why lifestyle change acts on the physiology that holds it there." | "...also defends the weight, which is why lifestyle change is a physiological lever, not a test of willpower." | Blocker. **Content restoration, not a style fix.** HEAD read "a genuine physiological lever rather than a test of willpower"; the new text drops only "genuine". Round 1 cut the clause and logged it as a style fix (Style table, "leptin paragraph"), which is withdrawn. The willpower contrast is a real, named misconception (§11g), and quiz q4 d, quiz q5 d, case q-levers c and remedial-donoharm all test it against the chapter. "willpower" now occurs once in the chapter. The restoration also removes the round-1 non-sequitur ("acts on the physiology that holds it there"), so the competing minor finding (end the sentence at "defends the weight") is superseded |
| chapter | opener | HEAD: "...written by biology and environment together, not a number on a scale or a failure of willpower." | unchanged this round | Log only. Round 0 cut this clause and did not log it. It is not restored in the opener: the verifier's fix restores the willpower contrast in the leptin paragraph, which now carries it, and the opener stays at two sentences (§11c). The "number on a scale" idea is in the opener's first sentence ("reassuring" BMI) and in the weight-inclusive section ("switch focus from the scale to health and behaviour") |
| chapter | opener | "start lifestyle-first care and refer onward, without stigma" | "start lifestyle-first care and know what to refer onward, without stigma" | Restores HEAD's selective sense ("knowing what to refer onward"). The chapter refers only for the specialist tiers, and the case's correct path refers no one |
| chapter | hub sentence (#sec-mets); Stress lever | "central obesity and **insulin resistance**"; "feeds the hub of central obesity and insulin resistance" | "central fat and **insulin resistance**"; "feeds the hub of central fat and insulin resistance" | Reverses a round-1 change (Style table, "hub paragraph" and "Stress lever"). Once central obesity has a cut-off (bold-defined four sentences earlier as one of the five toggleable components), it cannot also be the threshold-free hub. As the hub term it clashed with "no single obligatory component" and with CY2 (waist under the cut-off, still metabolic syndrome). "Central fat" is the chapter's existing threshold-free term ("reads central fat", "Central fat rarely travels alone", "a bedside read of central fat"); *Energy Balance* owns "central (visceral) fat"; case q-mets already reads "insulin resistance and central fat at the hub". "Central obesity" stays for the component and its definition |
| diagram | hub `sub`; `caption`; header comment | "+ central obesity"; "(insulin resistance with central obesity)" | "+ central fat"; "(insulin resistance with central fat)" | The same hub fix. The island no longer shows "Central obesity" as both a spoke and part of the shared root |
| log | glossary row, Insulin resistance | "...with central obesity, the hub of the metabolic syndrome" | "...with central fat, the hub of the metabolic syndrome" | Row matches the chapter's hub sentence again (updated in place above) |
| chapter | number-line lead-in (#sec-phenotype) | "Singapore therefore works with two number-lines for BMI:" | "There are therefore two number-lines for BMI:" | Restores HEAD's sense ("So there are, in effect, two number-lines"): the WHO global line set against Singapore's clinical line. The chapter never says that Singapore itself uses the WHO overweight ≥25 line; it says only that Singapore reports population obesity at WHO ≥30 |
| chapter | mechanism, visceral-fat paragraph | "therefore adds to what BMI shows" | "therefore adds a great deal to what BMI shows" | Restores the strength of HEAD's claim ("adds so much to the BMI"). Round 0 weakened it without logging |
| chapter | Singapore picture, para 1 | "...between 2019–20 and 2023–24. Clinical action starts far earlier, and the ≥27.5 high-risk band is a stable roughly one in five adults [@mohNPHS2024]." | "...between 2019–20 and 2023–24; clinical action starts far earlier, and the ≥27.5 high-risk band has held steady at roughly 1 in 5 adults [@mohNPHS2024]." | Citation placement: the round-0 split left the 10.5% → 12.7% survey statistic in a sentence with no key. Rejoined with a semicolon (HEAD was one sentence), so [@mohNPHS2024] covers it again; multiset unchanged. Two minor findings on the same sentence: the ungrammatical "is a stable roughly one in five" now reads "has held steady at roughly 1 in 5" (digits for statistics, §11g). The claim is unchanged; deferred concern 2 still covers it |
| chapter | ultra-processed driver paragraph (#sec-accumulation) | "...than the same people on an unprocessed diet, and gained weight. The two diets were matched for sugar, fat, fibre and salt [@hall2019upf]." | "...than the same people on an unprocessed diet, and gained weight, although the two diets were matched for sugar, fat, fibre and salt [@hall2019upf]." | Citation placement: the round-0 split left the trial's headline result (about 500 kcal a day more, weight gained) in a sentence with no key. Rejoined (HEAD structure, "despite") |
| diagram | glucose component note | "an early signal, well below the diagnostic cut-off in the Type 2 Diabetes chapter" | "an early signal, well before the diagnostic cut-off in the Type 2 Diabetes chapter" | Restores HEAD's sense: a stage in the progression towards diabetes, not a numeric comparison of 5.6 with the diagnostic value. Round 0 changed it without logging |
| diagram | caption | "...and its modifiable levers, not on one number at a time." | "...and its modifiable levers, not by chasing one number." | Restores HEAD's instruction (do not fixate on a single number). "One number at a time" meant something else: do not treat the numbers in sequence |
| quiz | q5 option a | "Reinforce lifestyle as first-line and refer for medication or surgery" (69 chars) | "Reinforce lifestyle as first-line; drugs and surgery are specialist tiers" (73; distractors 67/74/63) | Two findings gave two wordings for this option. Both had the same problem: round 1 made referral of this BMI-28 man for medication or surgery part of the right answer, a stronger directive than the chapter gives, and only "at once" separated the option from distractor c. Applied the "specialist tiers" wording, the chapter's own term ("two specialist tiers"). It restores HEAD's meaning (the tiers are specialist referrals) and shares no "refer" with distractor c ("Refer for metabolic-bariatric surgery at once..."). Not applied: "Reinforce lifestyle first; drugs and surgery are specialist referrals" (69) |
| quiz | q3 option b feedback | "The ≥30 line is the correct surveillance and international-comparison threshold. ..." | "It is not an error: the ≥30 line is the correct surveillance and international-comparison threshold. ..." | HEAD's direct answer to the option's main claim ("simply an error") restored |
| case | reveal-numberlines body | "...with central obesity by the Asian waist cut-off." | "...with central obesity by the Asian waist cut-off (≥90 cm in men)." | Every path passes through this bridge. Only q-classify option a's feedback gave the value, so learners who chose b or c never saw it (HEAD's bridge gave both cut-offs) |
| case | q-plan option a feedback | "A sustained 5–10% loss yields..." | "A sustained, gradual 5–10% loss yields..." | HEAD's "gradual" restored (round 1 dropped it with the option-text trim). It is the contrast with option b's crash diet, and the chapter supports it ("a 5–10% loss over 6–12 months") |
| case | q-plan option b feedback | "Bans breed rebound and dent the relationship, so a crash diet is unlikely to stick. ..." | "This crash diet is too big and too abrupt to stick: bans breed rebound and dent the relationship. ..." | HEAD's critique ("Too big, too abrupt") restored. Modified: "This crash diet" for the verifier's "A crash diet", because option a's feedback now opens with "A" and §11g bars two consecutive feedback strings with the same opening word |
| case | q-plan option c feedback | "'Exercise more' alone is a weak weight lever (nationally, ...), and a 15 kg target ..." | "The advice is too vague and the target too big: 'exercise more' alone is a weak weight lever (nationally, ...), and a 15 kg target ..." | HEAD's critique ("Too vague and too much") restored. Modified: the verifier's text restored only "too vague"; "and the target too big" (HEAD's "too much") is added so that the colon introduces both critiques that follow (the weak advice and the 15 kg target). Openers are now A / This / The |
| chapter | four cross-references added in rounds 0–1 | (a) "the controlled inpatient trial met in the *Digestion & Absorption* chapter"; (b) "(see the *Energy Balance* chapter)"; (c) "BMI (weight ÷ height², introduced in the [*Energy Balance*](energy-balance.qmd#sec-measuring) chapter)"; (d) "[*Integrative Metabolism*](integrative-metabolism.qmd#sec-switch)" | all kept; (b) is now linked: "(see the [*Energy Balance*](energy-balance.qmd) chapter)" | Logging only: these four were missing from both earlier content-fix tables. All four checked as accurate. (a) *Digestion & Absorption* describes the Hall trial in its "What a controlled trial showed, and its limits" callout. (c) *Energy Balance* `#sec-measuring` ("Measuring the body and its budget") defines BMI as weight ÷ height². (d) *Integrative Metabolism* `#sec-switch` ("The master switch: the insulin-to-glucagon ratio") covers insulin-driven fuel storage and its anti-lipolytic brake. (b) points to *Energy Balance* for energy balance, the topic that chapter owns. Before this round, (b) was the only one of these four left unlinked |

### Style and structure fixes

| File | Location | Before | After |
|---|---|---|---|
| chapter | #sec-phenotype, para 1 | "Singapore shifts its action points down from the global figures [@whoExpert2004AsianBMI]." | "...from the WHO cut-offs [@whoExpert2004AsianBMI]." (§11g, no synonym cycling; "figure" is used later for prevalence, "the newspaper figure"). "Action points" kept: quiz q1/q3 and the case use it for Singapore's clinical cut-offs |
| chapter | Check yourself 1 (BMI 23) | "...so the global lines would miss real risk." | "...so the WHO cut-offs would miss real risk." Extends the same synonym-cycling fix, which listed "the global lines (Check yourself 1)": the previous sentence now ends "behind the WHO cut-offs" and the question says "the WHO line". At a glance ("than the global ones") and LO1 ("the WHO lines") are not changed. "The global ones" also covers the waist cut-offs, and the chapter does not attribute those to the WHO |
| chapter | #sec-phenotype, para 1 | one six-sentence paragraph (the limitation of BMI, then the Yishun evidence and the lowered action points) | split at "The local Yishun Study made the gap concrete." (§11j, one idea per paragraph; wording unchanged) |
| chapter | Check yourself 1, first sentence | "BMI cannot show how much of the weight is fat or where it sits, and Singaporean adults carry more body fat, ..." (41 words, two ideas joined by "and") | "BMI cannot show how much of the weight is fat or where it sits. Singaporean adults carry more body fat, ..." (§11j) |
| chapter | Singapore picture, dating sentence | "One dating note applies to the 2016 obesity guideline: its Asian BMI cut-offs remain current, but its treatment sections ..." | "The 2016 obesity guideline's Asian BMI cut-offs remain current, but its treatment sections ..." (metacommentary removed, §11g; citation pair unchanged) |
| chapter | 🍜 Eating out list | "teochew porridge with lean sides." | "Teochew porridge with lean sides." (proper noun) |
| chapter | accumulation paragraph | | re-wrapped after the link was added (no wording change) |
| quiz | q7 option d | "Avoid the topic of weight entirely so as not to offend him this visit" | "...so as not to offend him at this visit" (72 chars; others 80/76/68) |
| case | q-levers option b feedback | "Not the right move here, and not safe practice. Anti-obesity medication ..." | "Reaching for a drug first is not safe practice. Anti-obesity medication ..." (feedback opens with the explanation, not a verdict, §11g; the do-no-harm label restored in round 1 is kept; openers now Lifestyle / Reaching / This). Rest of the feedback unchanged |

### Not applied

- Minor finding on the leptin sentence: end it at "...also defends the weight" by deleting the clause. This conflicts
  with the blocker, which restores the willpower clause at the same place. The blocker's wording also
  replaces the vague "acts on the physiology that holds it there", which was the target of this finding.
- Quiz q5 option a, wording "Reinforce lifestyle first; drugs and surgery are specialist referrals": the other
  q5 finding's wording was applied instead (see the content table).

### Deferred content concerns (updated)

2. (updated wording) Singapore picture: "the ≥27.5 high-risk band has held steady at roughly 1 in 5 adults"
   [@mohNPHS2024] (was "is a stable roughly one in five adults"). "Held steady" and "1 in 5" still need
   checking against the survey.

### Gate after fix round 2 (HEAD vs working copy)

| Check | HEAD | Working copy |
|---|---|---|
| Citation multiset | 61 citations, 53 unique keys (`uniq -c` md5 ba8b4340...) | identical (`diff` empty). Within their paragraphs, [@mohNPHS2024] and [@hall2019upf] again cover the statistic and the trial result |
| data-island | 3 | 3 |
| callouts | 4 | 11 (+1 Learning objectives, +6 Check yourself; unchanged this round) |
| tables | 0 | 1 (two number-lines) |
| figures | 2 | 2 |
| HEAD {#sec-/#fig-} ids | `fig-obesity-pathophysiology`, `fig-char-kway-teow` | both present; all nine chapter-map `#sec-` links resolve |

Copy audit (`--you`, four files): 0 flags. Chapter: 0 em dashes, bold 5.5 per 1,000 words, "rather than" 1,
and 1 "you" (the case instruction "Your choices branch the case"). YAML: all three files load with js-yaml.
`validate-cases.mjs`: exit 0, OK for mr-tan-obesity.case.yml (no patient-chat node). MCQ checks: q5 option
lengths 73*/67/74/63 and q7 80*/76/68/72. No two consecutive feedback strings share an opening word (q-plan
A / This / The; q-levers Lifestyle / Reaching / This; quiz q3 Singapore / It / Singapore's / The).
