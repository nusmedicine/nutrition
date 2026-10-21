# Retrofit log: *Infancy & Early Childhood*

Files changed:

- book/chapters/infancy-early-childhood.qmd
- book/diagrams/food-form-sorter.yml
- book/quizzes/infancy-early-childhood.quiz.yml
- book/cases/infancy-feeding.case.yml

## Gate and checks

- Citation multiset: IDENTICAL to HEAD (39 keys, 43 instances). Moves, each with its own claim and within its
  paragraph: `@sgBreastfeeding2024` (1st) now follows the 3% statistic; `@daniels2018bliss` / `@fangupo2016choking`
  split onto the iron claim and the choking claim; `@hand2022vitk` sits on the vitamin K deficiency bleeding sentence
  after the gaps table; `@meek2022breastfeeding` sits in the vitamin D table row; `@tanGrandparents2019` now ends
  the caregiver sentence that includes "so counsel the whole household".
- data-island 3 -> 3; callouts 1 -> 7 (+1 Learning objectives, +5 Check yourself); tables 0 -> 2 (Part II driver
  table, milk-gaps table); figures 0 -> 0. HEAD had no {#sec-}/{#fig-} ids; 13 new ids added.
- copy-audit (`--you`, 4 files): 83 flags -> 0. Chapter: 0 em dashes, 0 "rather than", bold 40.1 -> 8.1 per 1,000
  words. Remaining "you" lines (4): clinician in practice (mixed-feeding support; refer the high-risk infant),
  a quoted claim ("finish your plate") and the island instruction ("Your choices branch the case").
- js-yaml load OK for all three YAML files; `validate-cases.mjs`: `OK infancy-feeding.case.yml`.

## Summary of changes

Chapter

- Opener -> one italic blockquote (cut "small but sharp", "genuinely"). Added Learning objectives (6) and a
  3-branch chapter map linked to new section ids.
- At a glance: book-acts/meta opener rewritten; the bold-label "What's changing inside/outside" list -> the
  decision-5 two-row driver table (cells from the existing text, labels unbolded); a 6-node `.flow` of age
  milestones (every node a claim the chapter makes and cites; ordered by age, so it does not redraw the sorter,
  which is ordered by food and verdict); one-line island instruction.
- Milk: movement intro deleted; slogan heading -> "Breast milk: composition, evidence and gaps"; "Formula and
  mixed feeding, without judgment" -> "Formula and mixed feeding". Dense composition paragraph split, terms
  pre-taught (colostrum, foremilk, hindmilk, secretory IgA); HMOs left unbolded as a reminder with a linked
  pointer to the *Gut Microbiome* chapter. All emphasis bold removed. Three inline-header em-dash bullets for
  vitamin D/K/iron -> a 3-column table (form by relation: items compared on the same attributes), with the
  vitamin K deficiency bleeding definition in prose after it. "you adjust" -> impersonal. Exclusive
  breastfeeding, complementary foods and mixed feeding defined at first use. 🍜 callout kept (heading, type,
  position); scaffolding ("Two local, practical points. First, … Second, …"), the "not just" antithesis and
  emphasis bold removed; 4 sentences. Two Check yourself callouts at the end of the movement.
- Starting solids: movement intro deleted; long first paragraph split; readiness signs -> a 4-item list,
  tongue-thrust reflex defined; "the key to a genuine tension" / "Both are right at different framings" ->
  plain statement; "Three more things follow from the iron clock" + three bold-sentence bullets -> three prose
  paragraphs with topic sentences (no arrows); corrected age defined. "The allergen reversal" -> common-belief
  heading "Does delaying peanut and egg prevent allergy?" (belief -> mechanism -> evidence); 8 bolds -> 3 defined
  terms; "Singapore's feeding guidance mirrors this" cut (the Singapore picture states it). "Feed the person,
  not the plate" -> "Responsive feeding and fussy eating"; 190-word paragraph split into three; responsive
  feeding, division of responsibility, food neophobia and baby-led weaning defined; "the arrow runs both ways"
  -> "the association runs both ways". Two Check yourself callouts.
- Do no harm: bold rule lead-ins removed (the list marks them); infant botulism defined; "hard raw veg" ->
  "hard raw vegetables"; not tabulated (the sorter owns these foods). One Check yourself.
- Singapore picture: one 200-word paragraph -> five parallel entries with bold topic-sentence lead-ins; the
  guideline timing items -> a list; "striking", "collapses", "not just parents", "rather than" removed; the
  ethics-code sentence joined to the breastfeeding entry; the vitamin D/sunshine sentence given its own entry.
- Close: restatement and "saying so plainly", "surprisingly concrete", six bolds removed; answers the question
  with a 4-item list of what protects after the milk stage.
- Practise paragraph no longer gives away the answers ("the tempting, traditional choices are the wrong ones").
- Global: digits for ages and durations; "picky eating" -> "fussy eating"; "weaning foods" -> "first foods";
  "spoon feeding" -> "spoon-feeding"; "judgment/non-judgmental" -> "judgement/non-judgemental"; "≥70 °C" ->
  "70 °C or above"; "the bleeding disease of the newborn" -> "vitamin K deficiency bleeding" (correct term,
  §11g); glosses added for occult "(hidden)", *Cronobacter*, confinement caregivers.

Island data

- Sorter (plain text): title "weaning-food" -> "first-food"; intro first sentence (repeat of the chapter) cut,
  em dash -> colon, parenthetical -> sentence; all em dashes, CAPS emphasis ("EARLY", "SAME", "FORM", "AND",
  "FOODS"), the arrow and the slash removed; "form, not the food" stated once (quartered grapes).
  House-style wording change (re-logged in fix round 1; not a decision-1 contradiction fix): Plain rice-water
  porridge "the issue is nutrition: empty calories on its own" -> "the issue is nutrition, since on its own it
  supplies little iron" (drops the calorie wording, house kcal rule; narrows "few nutrients" to the iron point the
  chapter makes with @tohFeeding2016). Fix round 2 widened it again to HEAD's meaning: "…since on its own it
  supplies energy but few nutrients, including little iron."
- Quiz: bold removed from all stems; every em dash removed; no feedback opens with Correct/Right/Not so/No/Also
  wrong/Overstated/Too cautious; no two consecutive feedbacks share an opening word (Breast, A, Many, The, Each,
  PROBIT, Early, Delay, The, A, Milk, Fruit, Before, As, Cow's, Spores, Even, All, Food, Pressure, Acceptance,
  The, Modified, Gagging); repeated closing sentences cut; option lengths evened (q1 opt 3, q5 opt 2); q8 option
  "rather than" -> "instead of".
- Case: all 36 em dashes removed (dialogue included); feedback openers "Right —", "Correct —", "Correct on both
  counts", "Over-rigid.", "This is unsafe.", "Not from birth —", "This misses the point", "We keep…" replaced
  by explanations (opening sequence: 'About, A, His, Early, Delaying, The, Honey, Even, All, Cow's, As, All,
  Vitamin, His, Infants); bold removed except one warning (No honey before 12 months, in the remedial node);
  q-allergen correct option trimmed to parallel length (detail moved to feedback); "save your money" moved out
  of the option; slashes ("breast milk/formula", "premium/toddler", "when/what", "salt/sugar") spelled out;
  "EARLY" -> "early"; "not just the date" / "not just manuka" rephrased; objectives em dashes and
  "non-judgmentally" fixed (not a sim case, so objectives are ordinary prose). The remedial body is prose, not
  a list, because CasePlayer's `md()` renders paragraphs, bold and italics only (a Markdown list would collapse
  into one paragraph of dashes).

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| infancy-early-childhood.qmd | Breast milk, vitamin D gap | "This is the one routine infant supplement, and it is owned here; the *mother's* high-dose alternative lives in the *Pregnancy & Lactation* chapter." | "Vitamin D is the one routine infant supplement." | Cross-reference to a chapter that does not cover the topic: dropped (Pregnancy & Lactation has no maternal high-dose vitamin D option; it says milk is low in vitamin D whatever the mother eats) |
| infancy-early-childhood.qmd | Close | "…time to refer, since faltering growth is worked up and managed in the *Undernutrition & Malnutrition* chapter." | "…time to refer (faltering growth is among the refer triggers in the [*Childhood & Adolescence*](childhood-adolescence.qmd) chapter)." (wording as of fix round 1) | Cross-reference retargeted (Undernutrition & Malnutrition covers adult malnutrition only; Childhood & Adolescence lists growth faltering / crossing down the centiles as a refer trigger) |
| infancy-feeding.case.yml | end-good body | "*(Growth faltering and its management belong to the Undernutrition & Malnutrition chapter.)*" | (removed; keyPoints keep "Recognise faltering growth and refer.") | Cross-reference to a chapter that does not cover the topic: dropped |
| infancy-early-childhood.qmd | Starting solids | "Three more things follow from the iron clock:" (introducing cow's milk, prevention and texture bullets) | Three paragraphs; cow's milk "for the same iron reason", the texture paragraph opens "Textures also have to progress." | Label misnames content (texture progression does not follow from the iron clock) |
| infancy-early-childhood.quiz.yml | q2 opt 2 feedback | "the obesity association is confounded" | "the obesity link is an association, not proof" | Island/chapter consistency, resolved toward the chapter's cited wording (@horta2023obesity) |
| infancy-early-childhood.quiz.yml | q3 opt 2 feedback | "This is the outdated, now-harmful advice. Early introduction in the 4–6-month window *prevents* allergy; withholding does harm." | "Delay was the advice for years, and the trials reversed it: early introduction in the 4–6-month window prevents allergy, so withholding peanut and egg gives up that protection." | Island/chapter consistency (chapter: trials reversed the advice; early introduction protects); also non-scolding feedback |

## Deferred content concerns (need a source check; not changed)

- C1. Breast milk, PROBIT paragraph: `@kramer2008cognition` is the 6.5-year PROBIT follow-up, so it cannot support
  "had largely faded by adolescence" (that is the 16-year follow-up, Yang et al., JAMA Pediatrics 2018); the bib
  note repeats the claim. Same claim in quiz q2 opt 2 feedback ("mostly faded by adolescence").
- C4. Singapore picture: "vegetables first" (from `@smjFeeding2023`) reads as contradicting the chapter's
  "iron-rich first foods"; check the guideline wording (probably vegetables before fruit) and clarify.
- C5. Responsive feeding / quiz q8 / Check yourself: "about a third of all infants gag or choke a little"
  (`@fangupo2016choking`); the source reports ~35% choking at least once at 6–8 months, gagging measured
  separately. Consider "about a third of all infants choke at least once while learning".
- C6. Island-only claims not in the chapter text: "the immature gut lacks the protective gut microbes that stop
  the spores colonising" (quiz q6, case q-honey; "flora" -> "gut microbes" in fix round 1, wording only) and
  "delaying now increases allergy risk" (quiz q3 opt 1 feedback, restored in fix round 1; case q-allergen opt a
  and opt b feedback; case end-good keyPoints). Both are standard, but uncited in the chapter.
- C9 (fix round 1, safety). Smooth peanut butter as a choking-safe form: the AAP choking statement the chapter
  cites for its choking rules (`@aap2010choking`) lists peanut butter among choking hazards, and allergy guidance
  usually advises thinning it (with water, breast milk or formula, or stirred into purée) for young infants.
  Check against the source: sorter "Smooth peanut butter" (verdict safe) and "Whole peanuts" why ("protective as
  smooth peanut butter"); quiz q8 opt 1 feedback ("safe as smooth peanut butter"); quiz q3 opt 3 feedback and
  case q-allergen opt c feedback ("use smooth peanut butter"); the hazards Check yourself (whole peanuts), now
  worded "peanut is offered as smooth peanut butter instead" without calling it choking-safe. The chapter prose
  itself never says smooth peanut butter is not a choking hazard.
- C8 (new). The "about 3% exclusively breastfed at 6 months" statistic appears twice (Formula and mixed feeding;
  The Singapore picture), each with its own `@sgBreastfeeding2024`; one could become a back-reference in a later
  content pass.
- C10 (fix round 2). Routine iron for the exclusively breastfed infant. The chapter's own `@baker2010iron` (AAP
  2010) recommends oral iron from 4 months for exclusively breastfed term infants until iron-rich complementary
  foods are introduced. Several places take "no iron drops" as their premise: the chapter sentence "Vitamin D is the
  one routine daily infant supplement" (after the gaps table; HEAD: "This is the one routine infant supplement"),
  the Check yourself "…vitamin D drops from birth, but no iron drops. Why the difference?" and its answer ("filled
  by iron-rich first foods, not drops"), quiz q1 option 2 and its feedback ("not drops from birth"), and case
  q-supplement option b and its feedback. The wording matches HEAD, so it is not a fidelity error. The quiz and
  case distractors say "iron drops from birth", which the AAP does not recommend either (its iron starts at 4
  months), so they may stand as distractors once their feedback is checked; the chapter sentence and the Check
  yourself premise and answer are the claims most in need of checking. Source-check against `@baker2010iron` and
  the Singapore guideline (`@smjFeeding2023`) before changing anything; no text changed in round 2.

## Deferred backlog

- U3b / §11h: the Part II "Recognising trouble, and when to refer" movement is absent; refer cues (preterm/low
  birth weight, high-risk allergy, faltering growth) are scattered and there is no refer table. The chapter's
  movements also do not follow the Part II normal -> clinical arc (decision 4: deferred).
- §11b: only the 🍜 block exists; no 🔬 or 🍳 block (decision 4: not added).
- §11f: no static teaching figure beyond the island and case persona (decision 4: not added).
- C7 (component, out of scope): `FoodFormSorter.svelte` labels the `modify` verdict "Yes — but change the form"
  (em dash), which also mislabels "Plain rice-water porridge" (a nutrition fix, not a form fix).
- Glossary: the 18 rows below go into book/glossary.qmd (not edited in this pass).
- When the *Childhood & Adolescence* chapter's "Recognising trouble, and when to refer" section gets an id, the
  close's link can point to that anchor.

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Baby-led weaning | An approach to starting solids in which the infant feeds itself instead of being spoon-fed | Infancy & Early Childhood |
| Colostrum | The low-volume, antibody-dense milk of the first days after birth | Infancy & Early Childhood |
| Complementary foods | Solids given alongside breast milk or formula, from about 6 months | Infancy & Early Childhood |
| Corrected age | A preterm infant's age counted from the due date, used to time solids | Infancy & Early Childhood |
| Division of responsibility | The feeding principle in which the parent decides what, when and where, and the child decides whether and how much | Infancy & Early Childhood |
| Dual-allergen hypothesis | The hypothesis that the route of first exposure to a food decides the immune outcome: inflamed, eczematous skin sensitises, whereas meeting the food by mouth first builds tolerance | Infancy & Early Childhood |
| Exclusive breastfeeding | Feeding breast milk only, with no other food or drink apart from vitamin drops or medicines | Infancy & Early Childhood |
| Food neophobia | Refusal of new foods on sight; a normal, usually transient toddler phase | Infancy & Early Childhood |
| Foremilk | The watery milk at the start of a feed | Infancy & Early Childhood |
| Hindmilk | The fat-rich milk later in a feed | Infancy & Early Childhood |
| Infant botulism | Illness caused when *Clostridium botulinum* spores, for example from honey, colonise the immature infant gut and make toxin | Infancy & Early Childhood |
| Mixed feeding | Giving an infant both breast milk and formula | Infancy & Early Childhood |
| Responsive feeding | Feeding that responds to the child's hunger and fullness cues | Infancy & Early Childhood |
| Secretory IgA | An antibody in breast milk that coats the infant's gut and blocks pathogens while the infant's own immunity matures | Infancy & Early Childhood |
| Sensitisation | Priming of the immune system to react to a food | Infancy & Early Childhood |
| Tolerance | Acceptance of a food by the immune system, so that eating it causes no reaction | Infancy & Early Childhood |
| Tongue-thrust reflex | An infant reflex that pushes food out of the mouth; its loss is one sign of readiness for solids | Infancy & Early Childhood |
| Vitamin K deficiency bleeding | Bleeding in newborns and young infants caused by too little vitamin K, prevented by a single vitamin K injection at birth | Infancy & Early Childhood |

## Owner terms from term-ownership.md that do not occur in this chapter

None: all 18 terms owned by infancy-early-childhood occur and are bold-defined at first use.

Terms owned elsewhere that occur here, left unbolded: cluster-randomised trial (Micronutrients, Hydration &
Electrolytes), internal drivers / external levers (Reading the Life Stages; table labels, unbolded), human milk
oligosaccharides and short-chain fatty acids (taught in the Gut Microbiome chapter; reminder plus link).

## Deviations from the plan

- Driver table labels follow decision 5 ("Internal drivers (inside the body)", "External levers (life and
  environment)"), not the plan's wording.
- U3: retargeted to *Childhood & Adolescence* in the chapter close (decision 1 allows retargeting to the chapter
  that does cover the topic) instead of dropping; dropped in the case end-good body as the plan defaulted.
- Remedial node: prose instead of the planned bulleted list (CasePlayer does not render Markdown lists).
- Singapore picture: the ethics-code sentence joined the breastfeeding entry and the sunshine sentence got its
  own lead-in, so no unheaded paragraph trails the parallel entries.
- Learning objective 6 lists honey, choking shapes and added sugar and salt (the do-no-harm movement's three
  rules); cow's milk is taught in the solids movement.
- Flow node labels shortened to label length (§11j: `.flow` for short labels); title "Milestones for the healthy
  term infant" (retitled "Feeding timeline for the healthy term infant" in fix round 2, which also rewrote nodes
  2 to 6 and the lead-in).

## Fix round 1

Verifier fixes applied (2 blockers, 3 majors, minors). Rows in the tables above were updated in place where
noted (decision-1 table: close wording, rice-water porridge row moved out; C6 extended; new C9; glossary rows for
dual-allergen hypothesis, exclusive breastfeeding, responsive feeding and vitamin K deficiency bleeding).

### Restored content (claims or hedges dropped in the first pass without a log entry)

| File | Location | Before (pass 1) | After (fix round 1) | Reason |
|---|---|---|---|---|
| infancy-early-childhood.quiz.yml | q7 opt 2 feedback | "Pressure is associated with more fussiness, not less, although fussy children also draw more pressure. Offer…" | "Pressure is counter-productive: it is associated with more fussiness, not less. Offer the vegetable repeatedly and calmly instead." | Restores HEAD's causal verdict (chapter: "pressure backfires"); the pass-1 change was unlogged and weakened the claim |
| food-form-sorter.yml | intro | "The categories apply to the healthy term infant." | "These are teaching categories for the healthy term infant." | Restores HEAD's hedge "(Teaching categories, …)" so the verdicts are not read as clinical rules |
| infancy-early-childhood.quiz.yml | q3 opt 1 feedback | "…are offered once solids start. Refer high-risk infants…" | "…are offered once solids start; delaying now increases allergy risk. Refer high-risk infants…" | Restores HEAD's claim; the quiz instance is now listed under deferred concern C6 with the case instances |
| infancy-early-childhood.quiz.yml | q2 opt 1 feedback | "…no reduction in respiratory infection, and the obesity link is a modest association, not proof." | "…no reduction in respiratory infection; the IQ association is small and shrinks after adjustment for the mother's own IQ; and the obesity link is a modest association, not proof." | Restores HEAD's IQ caveat, worded as the chapter states it (@horta2015iq) |
| infancy-feeding.case.yml | remedial body | "…the high-risk infant is referred." / "…and premium and toddler milks are unnecessary." / "A baby whose growth is faltering is referred." | "…refer the high-risk infant." / "…; reassure her that premium and toddler milks are unnecessary." / "And always recognise a baby whose growth is faltering, and refer." | Restores HEAD's clinician actions (recognise, reassure, refer); the high-risk-infant clause given the same active form for consistency |
| infancy-early-childhood.qmd | Practise paragraph | "…with his mother, who has a list of worries from the internet and the family." | "…with his mother. She brings worries about solids, allergens, honey, cow's milk and formula from the internet, the family and a neighbour." | Keeps HEAD's scenario specifics without the answer give-away |

### Content-wording fixes (chapter)

| Location | Before | After | Reason |
|---|---|---|---|
| Check yourself (peanut and egg) answer | "LEAP cut peanut allergy by around 80% in high-risk infants, … Because LEAP studied high-risk infants, those infants are referred for specialist-guided introduction." | "LEAP cut peanut allergy by around 80%, … LEAP's 80% figure comes from high-risk infants (those with severe eczema or egg allergy), so it does not transfer to every infant. A high-risk infant is referred for specialist-guided peanut introduction instead of improvising it." | False causal link (referral is a safety step, not a consequence of LEAP's population); the chapter's two separate cautions restored |
| Check yourself (whole peanuts) answer | "A whole nut is a choking shape and smooth peanut butter is not, while early oral peanut builds tolerance." | "A whole nut is a choking shape, so peanut is offered as smooth peanut butter instead, and early oral peanut builds tolerance." | The prose never says smooth peanut butter is not a choking hazard; safety question deferred as C9 |
| Check yourself (vitamin D vs iron) | title "a breastfed baby…"; answer "the stores present at birth last about 6 months" | title "a healthy term breastfed baby…"; answer "a term infant's stores present at birth last about 6 months" | Preterm and low-birth-weight infants deplete earlier (chapter); matches quiz q1 |
| Check yourself (cow's milk) | title "yogurt and cheese are fine from 6 months. Why, then, does cow's milk wait…?"; last sentence "…; the concern is cow's milk in the role of main drink." | title "iron stores run low at about 6 months. Why does that keep cow's milk from being the main drink until about 12 months?"; last sentence "Small amounts of yogurt or cheese are still fine as complementary foods, so the rule is about cow's milk as the main drink, not dairy as a food." | The old question was circular and not answerable from the chapter; the new one is answered by the chapter's iron reasoning |
| Responsive feeding | "**Responsive feeding** leaves the child's appetite in charge of how much is eaten, and its organising idea is the **division of responsibility**" | "**Responsive feeding** follows the child's hunger and fullness cues, and the organising idea for how a child is fed is the **division of responsibility**" | Standard gloss (decision 2); removes the new link between responsive feeding and Satter's model (HEAD: the organising idea for how a child is fed) |
| Breast milk, recommendation | "**exclusive breastfeeding** (breast milk only, without formula or solids)" | "(breast milk only, with no other food or drink apart from vitamin drops or medicines)" | Standard WHO-style gloss (decision 2); consistent with the vitamin D drops the chapter gives |
| Breast milk, after the gaps table | "The vitamin K injection prevents **vitamin K deficiency bleeding**, bleeding in the newborn caused by too little vitamin K, to which breastfed infants are the most prone [@hand2022vitk]." | "**Vitamin K deficiency bleeding** is bleeding in newborns and young infants caused by too little vitamin K. Because breast milk is low in vitamin K, breastfed infants are the most prone to it, and the single injection at birth prevents it [@hand2022vitk]." | Gloss widened (late VKDB occurs up to about 6 months); the cited sentence now carries the table row's claims (low in milk; single injection), as HEAD's one citation did |
| Breast milk, first sentence | "both over the first days and within each feed" | "both as it matures after birth and within each feed" | "Over the first days" was a new, imprecise time frame |
| Breast milk, PROBIT paragraph | "needs reading against the trial evidence" | "needs reading against the evidence" | The paragraph and the next also use observational evidence (HEAD: "the evidence") |
| Breast milk, gaps lead-in; Learning objective 1 | "Breast milk supplies three nutrients poorly, and each gap has a standard remedy"; "Identify the three nutrients breast milk supplies poorly (…) and how each gap is filled." | "Breast milk leaves three nutrient gaps, and each has a standard remedy"; "Identify the three nutrient gaps of the breastfed infant (…) and how each is filled." | The iron row is a store-depletion gap, not milk supplying iron poorly (HEAD: "three gaps") |
| Breast milk, recommendation | "The recommendation built on this evidence is…" | "The recommendation built on the trial evidence and these gaps is…" | §11j cohesion: "this evidence" had no clear antecedent |
| Close | "The rest is recognising the infant… (see the [*Childhood & Adolescence*](…) chapter on faltering growth)." | "Another part is recognising the infant… (faltering growth is among the refer triggers in the [*Childhood & Adolescence*](childhood-adolescence.qmd) chapter)." | "The rest" overstated; that chapter lists faltering growth only as a refer trigger (its lines 289 and 327) |
| At a glance, `.flow` | node 1 "vitamin D drops if breastfed"; node 3 "iron-rich solids, peanut, egg" | node 1 "vitamin D drops if any breast milk"; node 3 "iron-rich solids; peanut and egg as solids start" | Matches the chapter: partially breastfed infants get vitamin D; peanut and egg go in once solids begin (4 to 6 months) |
| Singapore picture, caregiving | "The common feeding patterns to counsel (pushing…, feeding in front of screens and prolonged night bottles) involve grandparents and helpers as well as parents, so counselling has to reach them too" | "Counselling on the common feeding patterns, such as pushing a child to finish, feeding in front of screens and prolonged night bottles, has to reach grandparents and helpers as well as parents" | Restores "such as" (list not exhaustive) and HEAD's meaning (counselling reaches them, not that they do these things). Reworded from the verifier's suggestion ("The common feeding patterns … have to reach") so that counselling, not the patterns, is the subject |
| Do no harm, sugar and salt | "(and little juice after), because early sweetness sets a lasting preference" | "(and little juice after); early sweetness sets a lasting preference" | HEAD's semicolon restored; "because" made sweetness the reason for the salt rule (the chapter gives the kidney) |
| Allergens, dual-allergen paragraph | one 42-word sentence defining **dual-allergen hypothesis**, **sensitised** and **tolerance** inside the mechanism | "Two immune outcomes are possible when an infant first meets a food. **Sensitisation** primes the immune system to react to it; **tolerance** is acceptance, so eating the food causes no reaction. The **dual-allergen hypothesis** holds that the route of first exposure decides which occurs: inflamed, eczematous skin sensitises, whereas meeting the food by mouth first builds tolerance [@lack2008dual]." | §11j pass 2: terms pre-taught before the mechanism; citation stays on the mechanism claim |
| Allergens, LEAP | "The LEAP trial gave high-risk infants peanut early…"; "Two cautions keep early introduction safe. LEAP studied high-risk infants (those with severe eczema or egg allergy), so…" | "The LEAP trial gave high-risk infants (those with severe eczema or egg allergy) peanut early…"; "Two cautions apply. LEAP studied only these high-risk infants, so…" | Term defined at first use; the label misnamed the first caution (evidence interpretation, not safety) |
| Close list | four bare noun phrases | each item given its reason ("…, because the iron stores present at birth run out"; "…, because oral exposure builds tolerance"; "…, because each prevents a specific, avoidable harm"; "…, because pressure to eat backfires") | §11c: the close answers the question instead of recapping the movements |
| Antithesis tic | "…that follow, not as dogma [@kramer2012cochrane]"; "individualised and referred, not held to these term-infant rules"; "introduced once solids begin, not avoided"; "gently retiring a tradition, not adding a supplement" | "…that follow [@kramer2012cochrane]"; "individualised and referred"; "introduced once solids begin"; "gently retiring a well-meant tradition" | §11g: contrast kept only where a misconception is named |
| Do no harm, choking | "Quarter grapes lengthwise and cut food small" | "Grapes are quartered lengthwise and food is cut small" | §11g hybrid voice: the list is expository |
| Singapore picture, guidelines | "The national consensus guidelines for feeding infants and young children (0–2 years) are built around…"; "Their practical advice includes:" | "The national consensus guidelines are built around…"; "Their practical advice includes five points:" | Repeat of the bold lead-in removed; list introduced by a full sentence. "includes five points" used instead of the suggested "covers five points", which would imply the list is the whole guideline |
| 🍜 callout | "confinement caregivers (carers who help during the traditional postpartum confinement)" | "confinement caregivers (carers who look after mother and baby during the traditional period of rest after birth)" | The gloss was circular |
| Opener | "fill the few nutrients that milk lacks, time solids and allergens correctly and, often, gently correct…" | "fill the few nutrient gaps that milk leaves, time solids and allergens well and, often, gently correct…" | Right object ("gaps"); removes "correctly … correct" |

### Island wording fixes

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| food-form-sorter.yml | Whole peanuts why | "The same food is a choking hazard whole but protective as smooth peanut butter." | "Peanut is a choking hazard whole but protective as smooth peanut butter." | Each card is read alone, so "The same food" had no antecedent |
| food-form-sorter.yml | Plain rice-water porridge | (text unchanged) | (text unchanged) | Re-logged as a house-style wording change (see Island data above), not a decision-1 contradiction fix |
| infancy-early-childhood.quiz.yml | q6 opt 1 feedback | "lacks the protective flora that stops them" | "lacks the protective gut microbes that stop them" | §11g: no outdated synonym for the *Gut Microbiome* chapter's term; claim unchanged (C6) |
| infancy-feeding.case.yml | q-honey opt a feedback | "lacks the protective flora that would stop them" | "lacks the protective gut microbes that would stop them" | As above |
| infancy-early-childhood.quiz.yml | q8 opt 1 feedback | "safe as smooth butter" | "safe as smooth peanut butter" | Matches the sorter and chapter term (safety check deferred, C9) |
| infancy-early-childhood.quiz.yml | q2 opt 3 feedback | "PROBIT showed genuine reductions…" | "PROBIT showed reductions…" | Emphasis framing cut, as in the chapter |
| infancy-feeding.case.yml | q-allergen opt a text | "…lowers the risk: smooth peanut butter and well-cooked egg." | "…lowers the risk. Try smooth peanut butter and well-cooked egg." | The clinician's spoken line no longer reads clipped; "never whole peanuts" stays in the feedback |

### Not applied as written

- Gaps table vitamin K row: the verifier asked for a second `[@hand2022vitk]` in the row while keeping the one on
  the VKDB sentence. A second instance would change the citation multiset, which the gate requires to be
  identical. Instead the cited sentence directly after the table now states the row's claims (breast milk low in
  vitamin K; the single injection at birth prevents VKDB), so the one citation covers them as it did in HEAD.

### Gate and checks after fix round 1

- Citation multiset: IDENTICAL to HEAD (39 keys, 43 instances). data-island 3 -> 3; callouts 1 -> 7; tables
  0 -> 2; figures 0 -> 0 (all unchanged from pass 1). HEAD had no {#sec-}/{#fig-} ids; the 13 added ids remain.
- copy-audit (`--you`, 4 files): 0 flags. Chapter: 0 em dashes, 0 "rather than", bold 7.8 per 1,000 words;
  4 "you" lines (mixed-feeding clinician, high-risk-infant referral, the quoted "finish your plate", the island
  instruction).
- js-yaml load OK for all three YAML files; `validate-cases.mjs`: `OK infancy-feeding.case.yml`.
- Quiz feedback openers still never repeat consecutively (q2: The, Each, PROBIT; q3: Early, Delay, The; q7: Food,
  Pressure, Acceptance; q8: The, Modified, Gagging).

## Fix round 2

Verifier fixes applied (2 majors, 19 minors; all 21 items). Earlier sections were updated in place only where
noted: the Island data paragraph (rice-water porridge), Deviations from the plan (flow title), and the new
deferred concern C10.

### Restored content (claims, hedges or clinician instructions dropped without a log entry)

| File | Location | Before (round 1) | After (fix round 2) | Reason |
|---|---|---|---|---|
| infancy-feeding.case.yml | remedial body | "**No honey before 12 months** (infant botulism), however well-meant the offer." | "**No honey before 12 months** (infant botulism); never endorse it, however well-meant the offer." | Restores HEAD's clinician instruction ("infant botulism — never endorse it, however well-meant"). This is the node a student reaches after endorsing honey (q-honey b and c); same standard as the round-1 restorations in this body (reassure, refer, recognise and refer) |
| infancy-feeding.case.yml | q-honey opt c feedback | "Endorsing any honey for an infant risks harm." | "Endorsing any honey for an infant breaks a do-no-harm rule." | Restores HEAD's categorical verdict ("is a do-harm error"), in non-scolding words; matches quiz q6 ("a firm do-no-harm rule") |
| infancy-early-childhood.quiz.yml | q8 opt 3 feedback | "Gagging is a normal, protective reflex while textures are learned, …" | "Gagging is a normal, protective reflex that is common while textures are learned, …" | Restores HEAD's "common" |
| infancy-early-childhood.quiz.yml | q3 opt 1 feedback | "Early oral exposure builds tolerance, whereas sensitisation happens through inflamed skin, so smooth peanut butter and well-cooked egg are offered once solids start; …" | "Early oral exposure builds tolerance, whereas sensitisation happens through inflamed skin, and the LEAP and EAT trials reversed the old advice to delay. Smooth peanut butter and well-cooked egg are therefore offered once solids start; …" | Restores HEAD's "the LEAP/EAT reversal" (the trials behind the advice, which the chapter and the case feedback name) |
| food-form-sorter.yml | Plain rice-water porridge, why | "…the issue is nutrition, since on its own it supplies little iron." | "…the issue is nutrition, since on its own it supplies energy but few nutrients, including little iron." | Restores HEAD's meaning ("empty calories": energy with few nutrients) without the calorie wording (house kcal rule); round 1 had narrowed it to one nutrient |

### Content-wording fixes (chapter)

| Location | Before | After | Reason |
|---|---|---|---|
| At a glance, flow nodes 2 and 3 | "2. From 4 months: solids, if ready" / "3. About 6 months: iron-rich solids; peanut and egg as solids start" | "2. From 4 months, if ready: iron-rich first foods, with peanut and egg" / "3. About 6 months: the usual start, as iron stores run low" | Internal contradiction (decision 1). The old nodes implied that an infant starting at 4 to 5 months needs no iron-rich foods and that peanut and egg wait until 6 months. The chapter says "the first foods must be iron-rich", introduces peanut and egg "once solids begin" (4 to 6 months), and calls about 6 months the population default; the case's correct answer for 5-month-old Aidan begins with iron-rich foods |
| At a glance, flow nodes 4 to 6 | "4. By 9 to 10 months: lumpy textures" / "5. 12 months: cow's milk as main drink, honey" / "6. About 4 years: whole nuts, whole grapes" | "4. By about 9 to 10 months: lumpy textures" / "5. About 12 months: cow's milk as main drink; honey allowed from 12 months" / "6. About 4 years: whole nuts and whole grapes allowed" | Restores the chapter's hedges ("later than about 9 to 10 months"; cow's milk waits "until about 12 months"); only the honey rule is a firm 12 months. "allowed" stops nodes 5 and 6 being read as introductions or as hazards |
| At a glance, flow lead-in and title | "…match an external lever to an internal driver, and they fall in a fixed order:"; "[Milestones for the healthy term infant]" | "…match an external lever to an internal driver, and many are tied to age:"; "[Feeding timeline for the healthy term infant]" | Overclaim: formula preparation, responsive feeding and the sugar and salt rules are not tied to an age, and "fixed" sat badly with "readiness, not the calendar". "Milestones" reads as developmental milestones |
| Breast milk, after the gaps table | "Vitamin D is the one routine infant supplement." | "Vitamin D is the one routine daily infant supplement." | Directly under the table's vitamin K row (a routine injection at birth) the old sentence read as a contradiction; matches the case ("the one routine daily supplement"). The claim itself is deferred for a source check (C10) |
| Breast milk, recommendation | One ~50-word sentence defining **exclusive breastfeeding** and **complementary foods**, then "It is applied with the iron and allergen caveats that follow [@kramer2012cochrane]." | "…is **exclusive breastfeeding** (…) for about 6 months. After that come **complementary foods** (solids given alongside milk), with continued breastfeeding into the second year, supported by the Baby-Friendly Hospital Initiative [@whoBreastfeeding]. The recommendation is applied with the iron and allergen caveats that follow [@kramer2012cochrane]." | §11j lint (~25 words, two new bold terms stacked in one sentence). After the split "It" would point at complementary foods, so the key noun is repeated (§11j cohesion). Both citations stay where they were |
| 🍜 callout, first sentence | "Premium formulas and toddler milks add cost without adding nutrition: every infant formula sold in Singapore meets the same standard, and prices have more than doubled without added benefit." | "Premium formulas and toddler milks add cost, not nutrition: every infant formula sold in Singapore meets the same standard, yet prices have more than doubled." | "without adding nutrition" and "without added benefit" repeated each other. The contrast stays because it names a real marketing claim (HEAD: "a marketing story, not a nutrition one"). Callout still 4 sentences |
| Starting solids, prevention paragraph | "The aim is to prevent iron deficiency, not to treat it later." | "The aim is to prevent iron deficiency before it starts." | §11g antithesis tic (no named misconception); the next sentence ("persist into adulthood despite later iron") carries the point about later treatment |
| Responsive feeding | "**Responsive feeding** follows the child's hunger and fullness cues, and the organising idea for how a child is fed is the **division of responsibility**:" | "**Responsive feeding** follows the child's hunger and fullness cues. The organising idea for feeding a young child is the **division of responsibility**:" | "how a child is fed" repeated the topic sentence in the next breath. Two sentences keep responsive feeding and Satter's model separate (the round-1 constraint: no "its") |
| Singapore picture, guidelines | "…an unhurried screen-free setting and sensible timing [@smjFeeding2023]. Their practical advice includes five points:" | "…an unhurried screen-free setting and sensible timing. Their practical advice includes five points [@smjFeeding2023]:" | In HEAD the one citation followed the timing specifics; pass 1 moved it ahead of the five-point list without a log entry, leaving the most checkable claims uncited. Key moved to the list lead-in; multiset unchanged |
| Singapore picture, rice-based entry | "**First foods are usually rice-based.** Rice-based first foods are fine if the congee is made iron-rich…" | "**First foods are usually rice-based.** Congee is a fine first food if it is made iron-rich…" | The bold lead-in was repeated word for word |
| Close, lead-in | "It has three specific gaps (vitamin D, vitamin K and iron), formula and mixed feeding are safe, and much of what protects an infant comes after the milk stage:" | "It leaves three specific gaps (vitamin D, vitamin K and iron), and formula and mixed feeding are safe alternatives. Much of what protects an infant lies beyond the milk itself:" | "comes after the milk stage" was a new claim (HEAD: "the real wins are surprisingly concrete") that the list contradicts: responsive feeding runs "from birth" (Singapore guideline list). The three-subject comma triad is split (§11g reflexive triads); "leaves" matches "Breast milk leaves three nutrient gaps". List unchanged |

### Island consistency fix

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| infancy-feeding.case.yml | end-good keyPoint 1 | "…with iron-rich first foods: the iron clock, not the calendar, drives the timing." | "…with iron-rich first foods: the iron clock sets the default, and readiness, not the calendar, sets each baby's start." | Island/chapter consistency (decision 1): the chapter contrasts readiness with the calendar ("The infant's readiness, not the calendar, sets the start for each child"; q-solids "Watch the baby, not the calendar") and treats the iron clock as the population default |

### House spelling

- "yogurt" -> "yoghurt" in all 6 places: chapter (cow's-milk paragraph in Starting solids; the cow's-milk Check
  yourself), quiz q5 opt 1 and opt 2 feedback, case q-milk opt a feedback, sorter card name ("Yoghurt / cheese").
  The rest of the book uses "yoghurt" (digestion-absorption.qmd ×3, dairy-acne-tiktok.case.yml ×2).
  `FoodFormSorter.svelte` keys its saved state by card index, not name, so the rename is safe.

### Render-neutral re-wraps

- Chapter: 🍜 callout paragraph (one round-1 line ran past 120 characters), the vitamin D / VKDB paragraph and the
  close lead-in (keeps "vitamin K" on one source line). Quarto treats soft line breaks as spaces.
- Case remedial body re-wrapped after the insertion; CasePlayer's `md()` collapses single newlines.

### Applied with a small deviation

- Quiz q3 opt 1: the suggested single ~45-word sentence is given as two sentences ("…reversed the old advice to
  delay. Smooth peanut butter and well-cooked egg are therefore offered…"); content identical.
- Flow lead-in: the two suggestions ("many are tied to age" / "many are tied to an age") given one wording,
  "many are tied to age".
- Flow node 5: merges the two suggestions ("About 12 months: cow's milk as main drink; honey from 12 months" and
  "12 months: cow's milk as main drink; honey allowed") into "About 12 months: cow's milk as main drink; honey
  allowed from 12 months", keeping both the hedge on cow's milk and the firm honey rule.
- Close: the two fixes to the same sentence (the "lies beyond the milk itself" wording and the sentence split)
  applied together.
- Recommendation split: "It is applied…" -> "The recommendation is applied…" added (the suggested split left "It"
  without a clear antecedent).

### Deferred (no text change, as instructed)

- C10 added to the deferred content concerns above: "Vitamin D is the one routine daily infant supplement" and
  the "no iron drops" premise (Check yourself, quiz q1 opt 2, case q-supplement opt b) need a source check against
  `@baker2010iron`, which recommends oral iron from 4 months for exclusively breastfed term infants.

### Gate and checks after fix round 2

- Citation multiset: IDENTICAL to HEAD (39 keys, 43 instances); one key moved with its claim (`@smjFeeding2023`
  to the list lead-in). data-island 3 -> 3; callouts 1 -> 7; tables 0 -> 2; figures 0 -> 0 (all unchanged from
  round 1). HEAD had no {#sec-}/{#fig-} ids; the 13 added ids remain and every internal anchor resolves.
- copy-audit (`--you`, 4 files): 0 flags. Chapter: 0 em dashes, 0 "rather than", bold 7.8 per 1,000 words, 0
  curly quotes; 4 "you" lines, unchanged (mixed-feeding clinician, high-risk-infant referral, the quoted "finish
  your plate", the island instruction).
- js-yaml load OK for all three YAML files; `validate-cases.mjs` exit 0: `OK infancy-feeding.case.yml`.
- Feedback openers unchanged, so none repeat consecutively (quiz q3: Early, Delay, The; q8: The, Modified,
  Gagging; case q-honey: Honey, Even, All).
