# Retrofit log: *Undernutrition & Malnutrition*

Files edited (only these): `book/chapters/undernutrition-malnutrition.qmd`, `book/diagrams/must-screen.yml`,
`book/quizzes/undernutrition-malnutrition.quiz.yml`, `book/cases/mdm-tan-malnutrition.case.yml`.

## Gate and checks

- Citation multiset: IDENTICAL to HEAD (diff empty). Keys moved only with their claims (the five-key
  screening-tool citation split so each key sits on its own tool; the at-risk-groups pair moved to the list's
  intro sentence).
- Islands 3 → 3 (must-screen, quiz, case; same order). Figures 2 → 2 (`#fig-malnutrition`, `#fig-ons-ladder`;
  ids kept; the ladder figure moved up within its own `###` to sit after the ladder list). Tables 0 → 0.
- Callouts 4 → 11: +1 Learning objectives, +6 collapsed Check yourself (2 per movement). The four existing
  callouts kept, same types and order.
- HEAD ids: `#fig-malnutrition`, `#fig-ons-ladder` (no `#sec-` ids at HEAD) — both present. New ids:
  `sec-overview`, `sec-mal-science`, `sec-mal-recognise`, `sec-mal-suspect`, `sec-mal-screening`,
  `sec-mal-support`, `sec-mal-team`, `sec-mal-ons`, `sec-mal-dysphagia`, `sec-singapore`, `sec-close`,
  `sec-quiz`, `sec-case`. All chapter-map links resolve. No other file links to an anchor in this chapter.
- Copy audit (`--you`, 4 files): 112 flags → 0. Chapter: 0 em dashes, bold 29.3 → 4.9 per 1,000 words,
  "rather than" 7 → 0, "you" 15 → 10 (all clinician-in-practice: Who-to-suspect screen sentence, dysphagia
  refer clause, the quoted "who do you eat with?", the altitude-callout heading, the close, the case-section
  instruction). Quiz, case, island: 0 flags, 0 em dashes, 0 "rather than".
- YAML: all three files load with js-yaml. `validate-cases.mjs`: `OK mdm-tan-malnutrition.case.yml`.
- Feedback opening words (file order) have no consecutive repeats in quiz or case.
- Not run (per instructions): render / quarto. TOC: 3 movements; Recognising has 2 `###`, Support has 3;
  no single-child headings.

## Summary of changes

Chapter: new two-sentence opener (stale Part IV framing and bold removed); Learning objectives (6); chapter
map (3 branches, 5 sub-topics); `{#sec-…}` ids; at-a-glance now bold-defines undernutrition and malnutrition
and drops "This chapter takes the handover"; the three principles lost their inline-header bold and arrows;
science movement: causal-chain paragraph rewritten (cohesion), the three aetiological types pre-taught as a
definition list, heart-failure figure in an `.example` box, sarcopenia unbolded with a reminder gloss (owner
*Healthy Ageing*), sarcopenic obesity narrowed to the high-BMI case, AWGS expanded; "Recognising it" →
"Recognising and screening for malnutrition" and the movement intro sentence deleted; at-risk groups and
screening tools as bulleted lists (acronyms expanded at first use; 3-MinNS expansion moved here from the
Singapore picture); nutrition screening bold-defined; MUST unbolded with a pointer to its owner chapter;
one-sentence island instruction added in the chapter (island `intro` deleted, decision 9); GLIM callout
retitled "Screening is not diagnosis", GLIM criteria bold-defined; "Supporting and referring" → "Nutrition
support and referral", movement intro deleted; team as a bulleted list (seven bolded roles unbolded; "spin
the wheel" and "the posture this book teaches" removed; pointer to *Interprofessional Practice & Referral*);
ladder as a numbered list (food fortification, ONS, enteral, parenteral bold-defined); ONS-evidence paragraph
de-bolded and "worth stating plainly" removed; 🍜 callout de-bolded, dish names italicised; do-no-harm
callout: refeeding syndrome and hypophosphataemia unbolded and linked to *Integrative Metabolism*
`#sec-refeeding`, one warning bold kept; dysphagia: red flags as a list, aspiration and IDDSI bold-defined,
dysphagia and texture-modified food unbolded (owner *Healthy Ageing*); Singapore picture: statistics and
programme names unbolded, the three run-in lead-ins kept ("The under-tail" → "Undernutrition" to avoid
synonym cycling), long hospital paragraph trimmed ("genuinely", "a concrete local example of the MUST-style
concept" cut); altitude callout retitled without em dash, metacommentary cut; close retitled as a question
and answered as a numbered sequence; case-section intro trimmed (it repeated the case's intro node). Spelling
and terms: etiologic → aetiological, inter-professional → interprofessional, calorie needs/titration →
energy needs/titration. Standard glosses added (decision 2): cachexia, frailty (reminder), dysphagia
(reminder), NRS-2002, MNA-SF, WHO ICOPE, AWGS.

must-screen.yml: `intro` deleted (repeated the chapter paragraph; the chapter now carries the instruction);
em dashes out of actions, independence note, caption, credit and comments; "AND little/no" → "and little or
no"; "dietitian / nutrition team" → "dietitian or nutrition team"; caption's second sentence ("The point MUST makes plain: weight loss and acute illness count even
when BMI looks fine") cut under decision 9, because the chapter prose beside the island and the island's
independenceNote repeat it (corrected in fix round 1: it is the island's teaching point, not metacommentary). Scores, bands, labels otherwise unchanged.

Quiz: every "Correct." opener removed; stems unbolded; all em dashes out; q2 correct option "Inflammation drives catabolism, not just low intake" → "Inflammation drives catabolism and
blunts appetite" (the "not just low intake" contrast replaced by the chapter's own wording, which the
feedback already carried; corrected in fix round 1);
q6 stem rephrased ("Why not simply" → "Why should they not be fed up quickly?"); q4 stem gains the >5-day
duration (content fix 5). Options stay parallel length and unbolded.

Case: "Right."/"Correct."/"Exactly" openers removed; all em dashes out (dialogue included); arrows and "+"
shorthand out; "this chapter's altitude" metacommentary cut; bold cut to two screen inputs in the intro and
one warning (refeeding syndrome) in the remedial and partial-end nodes (27.9 → ~2.5 per 1,000 words);
"rather than" 5 → 0; q-refeeding title `"Let's build her up fast"` → `"Build her up fast"` and the doctor's
quoted line "Let's build her up gradually" → "We'll build her up gradually" (clears the scaffold flags without
changing meaning); option c "detailed high-calorie" → "high-energy" (parallel length, house energy term).
Objectives, end bodies and keyPoints rewritten without em dashes; `references:` unchanged.

## Content fixes (decision 1)

| File / location | Before | After | Category |
|---|---|---|---|
| chapter, science para, last sentence | "Muscle is the body's mobilisable protein store, so a sustained deficit spends it." | "Muscle is spent because the body has no designed protein store: its protein is working tissue, so a sustained deficit dismantles muscle" | Contradiction with another chapter's explicit cited text (*Integrative Metabolism* `#sec-amino` "no storage protein"; `#sec-starvation` table "not a designed store at all", @cahill2006fuel) |
| chapter, science para, pointer | "builds on the fasted-state biology of the *Integrative Metabolism* chapter and the body-composition and nitrogen-balance ideas of the *Energy Balance & Body Composition* and *Macronutrients* chapters" | "(see the fasted and starved states in the [*Integrative Metabolism*](integrative-metabolism.qmd#sec-starvation) chapter, and body composition in the *Energy Balance* chapter)" | Cross-reference to a chapter that does not cover the topic (nitrogen balance is not taught in *Macronutrients* or anywhere in the book); wrong chapter name |
| chapter, inflammation para, pointer | "(the appetite regulation of the *Appetite & Weight Regulation* chapter)" | "(for how appetite is regulated, see the *Appetite & Weight Regulation* chapter)" | Cross-reference narrowed: that chapter teaches appetite regulation but never inflammation-driven loss of appetite |
| chapter, sarcopenia para | "a person can be sarcopenic at a normal or high BMI. This **sarcopenic obesity** is exactly why…" | "a person can be sarcopenic at a normal or high BMI; at a high BMI the combination is **sarcopenic obesity**" | Label misnames the content (normal-BMI sarcopenia is not obesity; conflicts with the book's BMI cut-offs) |
| chapter, heading | "### Who to suspect: the recognition map" | "### Who to suspect" | Heading misnames the content (there is no map) |
| chapter, opener and close | "Part IV opened with the diseases of too much; it closes with the other tail" / "the *too much* that opened Part IV, and the *too little* that closes it" | removed (new opener; close answers its question) | Internal consistency: the chapter no longer closes Part IV (*Bone & Joint Health* and *Brain Health & Dementia* follow) |
| quiz q4 stem | "is acutely unwell eating almost nothing" | "is acutely unwell, having eaten almost nothing for more than five days" | Chapter–quiz contradiction: the chapter's cited MUST acute-disease effect needs little or no intake for more than about five days, and the feedback scores it 2 |

## Deferred content concerns (need source-checking; not changed)

1. Chapter, aetiology definition list: "at the cachexia end" on the acute disease- or injury-related type
   (kept, with a standard gloss). ESPEN 2017 (@cederholm2017espenTerminology, cited for this classification)
   treats cachexia as chronic disease-related malnutrition with inflammation (cancer, cardiac cachexia). The
   figure label "severe (the cachexia end)" in `figures/mechanisms/malnutrition-mechanism.svg` repeats it.
2. `figures/mechanisms/malnutrition-mechanism.svg`: label "(muscle = the body's protein store)" now
   contradicts the revised prose and *Integrative Metabolism*; fix in a figure pass.
3. Singapore picture, @wei2018slasOutcomes: "raised mortality several-fold" rests on crude rates
   (0.54 → 3.04 per 100 person-years); the bib note gives an adjusted HR of 1.72.
4. Singapore picture, @mohMalnutritionTracking2025: bib note says the "1 in 4 below minimum energy, about half
   below protein" figures are for adults aged 50–69; the chapter says "older adults".
5. Singapore picture, @wei2017slasFrailty: "about 1 in 4 … (27.6%)" (27.6% is nearer 1 in 3.6); check the
   framing against the source.
6. `must-screen.yml` medium-risk action "document food intake for 2–3 days"; BAPEN's MUST says 3 days
   (hospital or care home).
7. Chapter screening-tools list: WHO ICOPE "vitality question"; the bib note describes a two-question
   case-finder.
8. Other chapters point here for content this chapter lacks: *Childhood & Adolescence* ("anaemia itself sits
   in the *Undernutrition & Malnutrition* chapter") and *Infancy & Early Childhood* plus
   `infancy-feeding.case.yml` ("faltering growth is worked up and managed in the *Undernutrition &
   Malnutrition* chapter"). This chapter covers adults and older adults only; those chapters' owners should
   retarget.
9. The same stale "this part opens with one tail and closes with the other" framing is in *Obesity &
   Metabolic Syndrome* and the *Chronic Kidney Disease* close (other agents' files).

## Deferred backlog

- Figure pass on `malnutrition-mechanism.svg` (cachexia label; protein-store label).
- `components/src/MustScreen.svelte` FALLBACK object still carries the old intro, em dashes and the old
  caption/credit (component code, out of scope; only used if the YAML fails to load).
- Glossary rows below to be added to `book/glossary.qmd` (not edited here).
- Paediatric undernutrition / faltering growth: a gap other chapters already forward-refer into (new
  content, not a retrofit task).
- Render out of tree and confirm TOC and the two `integrative-metabolism.qmd#sec-…` links in the built site.
- No 🔬/🍳 blocks added (Part IV exemption; the single 🍜 block kept).

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Acute disease- or injury-related malnutrition | Malnutrition with severe inflammation, as in acute illness or injury; the cachexia end | Undernutrition & Malnutrition |
| Aspiration | Food or drink entering the airway; up to a third is silent, with no cough | Undernutrition & Malnutrition |
| Chronic disease-related malnutrition | Malnutrition with mild-to-moderate inflammation, as in heart failure, cancer or kidney disease | Undernutrition & Malnutrition |
| Disease-related malnutrition | The chronic and acute disease-related types together, in which inflammation drives catabolism and blunts appetite, so it resists feeding alone | Undernutrition & Malnutrition |
| Enteral feeding | Tube feeding; a specialist rung of nutrition support | Undernutrition & Malnutrition |
| Food fortification | Enriching familiar dishes (with egg, minced fish, tofu, milk powder, oil or full-fat dairy) so that each mouthful carries more energy and protein without more volume | Undernutrition & Malnutrition |
| GLIM criteria | The Global Leadership Initiative on Malnutrition's diagnostic rule, applied after a positive screen: at least one phenotypic criterion (weight loss, low BMI, reduced muscle mass) plus at least one aetiological criterion (reduced intake or absorption, or inflammation or disease burden) | Undernutrition & Malnutrition |
| IDDSI | The International Dysphagia Diet Standardisation Initiative: a colour-coded 0–7 framework that gives texture levels the same meaning in every setting | Undernutrition & Malnutrition |
| Malnutrition | In clinical screening and diagnosis, the deficit state (undernutrition): a disease state in which a deficit of energy, protein or micronutrients measurably changes body composition and function and worsens outcomes. In the broad sense, overnutrition and undernutrition are its two tails | Undernutrition & Malnutrition |
| Nutrition screening | A fast, low-skill filter that anyone can apply to flag malnutrition risk and trigger referral; it is not the assessment or the diagnosis | Undernutrition & Malnutrition |
| Oral nutritional supplements (ONS) | Supplement drinks, used as an evidence-based add-on when food-based measures fall short | Undernutrition & Malnutrition |
| Parenteral feeding | Intravenous feeding; a specialist rung of nutrition support | Undernutrition & Malnutrition |
| Sarcopenic obesity | Sarcopenia together with obesity | Undernutrition & Malnutrition |
| Starvation-related malnutrition | Malnutrition from a pure intake deficit, without inflammation | Undernutrition & Malnutrition |
| Undernutrition | The deficit tail of malnutrition; what clinical screening and diagnosis mean by malnutrition | Undernutrition & Malnutrition |

Terms used here but owned elsewhere (unbolded, with a reminder gloss or pointer where the sentence needed
it): sarcopenia, frailty, dysphagia, texture-modified food, nutrient density (*Healthy Ageing*); refeeding
syndrome, hypophosphataemia, catabolism (*Integrative Metabolism*); MUST (*Assessing Diet & Talking to
Patients*); food-first (*Micronutrients, Hydration & Electrolytes*); BMI (*Energy Balance*); metabolic
syndrome (*Obesity & Metabolic Syndrome*).

## Owner terms from term-ownership.md missing from this chapter

None. The map assigns this chapter only "undernutrition" and "malnutrition" (orchestrator reassignment);
both occur and are bold-defined in the at-a-glance. No table row lists `undernutrition-malnutrition` as
owner.

## Fix round 1

Applied the verifier's round-1 list (2 majors, 24 minors). Files touched: the chapter, `must-screen.yml` and
`mdm-tan-malnutrition.case.yml`. The quiz file is unchanged (its q2 item was fixed in the log only, see below).

### Chapter (`book/chapters/undernutrition-malnutrition.qmd`)

- **Close restructured (major).** The `::: {.callout-important}` "You screen and refer; you do not prescribe
  the feeding plan" moved word for word, with both citations (@sgPostDischarge2023, @aclm2022comp), from the
  end of The Singapore picture into the close. The close's numbered recap ("In practice you:" 1–4 plus
  "Throughout, you do no harm…") was replaced by one answering sentence followed by the callout: "It looks
  like catching malnutrition early and handing it on safely, without doing harm on the way: not feeding a
  starved patient up too fast, and referring a risky swallow on its red flags instead of waiting for a
  cough." The Singapore picture now ends on the population and policy paragraph. This also removes the
  three close-list issues (step 1 "chronically ill" dropping the acutely ill; step 3 "while the referral is
  in progress" contradicting the order; the "In practice you:" fragment lead-in).
- Opener rewritten so it no longer duplicates the at-a-glance definition: "*Malnutrition can be present at a
  normal or even high BMI, so it is rarely noticed until someone looks for it. In Singapore it hides in
  plain sight among frail, isolated and hospitalised older adults.*"
- At-a-glance: "Over- and under-nutrition are the two tails" → "Overnutrition and undernutrition are the two
  tails" (owned-term spelling consistent). Principle 1: "so it is screened for" → "so it should be screened
  for" (an instruction again, no longer contradicting "routinely missed").
- Chapter map: first node now uses the exact heading text, "The science underneath: what malnutrition does
  to the body", and its label "graded by inflammation" → "with types classified by inflammation".
- Science paragraph 1, protein sentence (reworded so it stays true to *Integrative Metabolism* and no longer
  clashes head-on with the figure label): "Muscle is spent because the body has no designed protein store:
  its protein is working tissue, so a sustained deficit dismantles muscle" → "Muscle is the protein reserve
  that a sustained deficit draws on, but it is not a designed store: its protein is working tissue, so
  spending that protein dismantles muscle". The figure-label item stays deferred (concern 2), high priority.
- Science paragraph 2 opener (cohesion): "Inflammation is what makes malnutrition a doctor's problem, and it
  is the basis of the classification by cause." → "Inflammation is the basis of the classification by cause,
  and it explains why some malnutrition responds poorly to feeding alone." (The verifier's "does not respond
  to feeding" was softened to "responds poorly to feeding alone" to match the chapter's own hedge,
  "resists feeding alone".)
- Definition list made parallel and matched to the glossary rows: ": Malnutrition from a pure intake deficit,
  without inflammation." / ": Malnutrition with mild-to-moderate inflammation, as in heart failure, cancer or
  kidney disease." / ": Malnutrition with severe inflammation, as in acute illness or injury; the cachexia
  end (cachexia is illness-driven wasting of muscle, often with loss of fat)." ("as in" used instead of the
  suggested "after", parallel with the chronic row; the cachexia gloss corrected to the standard definition,
  muscle loss with or without fat loss. The cachexia placement stays deferred concern 1.)
- The 46-word mechanism sentence split in two: "…(for how appetite is regulated, see the *Appetite & Weight
  Regulation* chapter). **Disease-related malnutrition**, the chronic and acute types together, therefore
  resists feeding alone: …"
- Check yourself 1 title: "Why will feeding alone not reverse the malnutrition?" → "Why is feeding alone
  unlikely to reverse the malnutrition?"
- Who to suspect: "…is one of the first things to ask about, because it is a core feature of frailty (…)" →
  "…is a core feature of frailty (…) and one of the first things to ask about [@fried2001frailty]." Pre-test
  probability glossed (decision 2) and the sentence split, with the key noun repeated: "…raises the pre-test
  probability (the chance, before any test, that the patient has the condition). You therefore screen the
  patient instead of waiting for malnutrition to look obvious, and screening is the difference between
  catching malnutrition and missing it." The case's "raises the pre-test probability" now rests on this
  gloss and is unchanged.
- Check yourself (MUST) answer: "an acute illness with little or no intake" → "an acute illness with little
  or no intake for more than about five days" (matches the chapter's acute-disease effect and quiz q4).
- ONS paragraph (no synonym cycling once ONS is defined): "Supplement drinks are often reached for too
  early… In at-risk older people they produce…" → "ONS are often started too early… In at-risk older people
  ONS produce…"; last sentence "ONS is therefore a genuine tool, … not a drink that fixes malnutrition on
  its own." → "ONS are therefore a genuine tool, … not a fix for malnutrition on their own." "A specialised
  supplement" kept for the SHIELD product.
- "a difficult swallow" → "dysphagia" in ladder item 1 and in the Check yourself 5 answer (term taught in
  *Healthy Ageing*, earlier in the reading order).
- Check yourself 5 retitled without the judging word: "…Why is that the wrong first move?" → "…What should
  come first, and why?" Its last sentence: "Supplements on their own give a small weight gain and fewer
  complications, but no significant mortality benefit." → "The benefit of ONS is also modest: in at-risk
  older people they give a small, consistent weight gain and fewer complications, but no significant overall
  mortality benefit." (Restates the cited @milne2009ons sentence with its population; the verifier's "Even
  then, supplements give…" was not used because "then" had no clear referent after the rung list.)
- Singapore picture: "a direction of travel, not yet a settled mandate" → "a direction of travel, not a
  settled mandate" (HEAD's sense restored).
- Line rewraps only elsewhere.

### Case (`book/cases/mdm-tan-malnutrition.case.yml`)

- q-refeeding option a feedback (major, overstated safety claim restored to HEAD's strength): "Building up
  gradually, with the dietitian setting a safe pace and monitoring, avoids it, because the hazard is the
  speed, not the food." → "…reduces that risk, because the hazard is the speed, not the food." (The
  verifier's alternative "not because food is bad but because the speed matters" was not used: it is the
  "not because… but because" antithesis pattern that §11g lists.)
- Objective 4: "…build up gradually and let the dietitian set the pace." → "…build up gradually and let the
  dietitian set the pace; recognise the risk and refer." (HEAD's recognise-and-refer clause restored; this is
  not a sim case, so decision 8 does not apply.)
- q-refeeding option b feedback: "The goal is right; the speed is the hazard." → "The goal is right; the
  speed is the hazard, so recognise it and refer." (HEAD's clause restored.)
- q-suspect option b feedback: "A near-normal BMI is the classic miss." → "Being reassured by a near-normal
  BMI is the classic miss." (HEAD's sense restored.)
- Intro node: final paragraph ("Work through the visit. Decide what raises your suspicion, … Your choices
  branch the case.") deleted (decision 9; the chapter's Practise paragraph is the single instruction). The
  vignette and the daughter's quoted line remain.

### Island (`book/diagrams/must-screen.yml`)

- `caption:` key deleted (decision 9: it repeated the prose beside the island and the "Screening is not
  diagnosis" callout; `MustScreen.svelte` guards it with `{#if data.caption}` and does not merge the
  FALLBACK into loaded data). The unused `prompt:` key deleted (referenced only in the component's FALLBACK
  object, never in the template). `credit` kept. Header comment updated to say why there is no intro or
  caption.

### Log corrections (made in place above)

- must-screen caption: the cut second sentence is now logged as cut under decision 9 (repeats the adjacent
  prose and `independenceNote`), not as metacommentary.
- Quiz q2: logged accurately as "Inflammation drives catabolism, not just low intake" → "Inflammation drives
  catabolism and blunts appetite". The option itself is kept: it matches the chapter, is parallel in length
  with the distractors, and the feedback carries the catabolism point.
- Glossary rows updated to match the chapter: acute type → "Malnutrition with severe inflammation, as in acute
  illness or injury; the cachexia end"; disease-related malnutrition → "…so it resists feeding alone" (was
  "does not reverse it", stronger than the chapter's hedge); malnutrition → "overnutrition and undernutrition
  are its two tails".

### Further content fixes (decision 1) this round

| File / location | Before | After | Category |
|---|---|---|---|
| case, q-refeeding option a feedback | "…avoids it, because the hazard is the speed…" | "…reduces that risk, because the hazard is the speed…" | Chapter–case contradiction: the chapter's cited text says only "refer for cautious, monitored refeeding"; "avoids" overstated it (restores HEAD's strength) |
| chapter, Check yourself 5 answer | "Supplements on their own give a small weight gain and fewer complications, but no significant mortality benefit." | "…in at-risk older people they give a small, consistent weight gain and fewer complications, but no significant overall mortality benefit." | Internal consistency with the chapter's own cited sentence (@milne2009ons) |
| chapter, cachexia gloss | "illness-driven wasting of muscle and fat" | "illness-driven wasting of muscle, often with loss of fat" | Decision-2 gloss corrected to the standard definition |

### Checks after round 1

- Gate: citation multiset IDENTICAL to HEAD (46 distinct keys, same counts); islands 3 → 3; figures 2 → 2;
  callouts 4 → 11 (unchanged from round 0: the scope callout moved, not added); tables 0 → 0. Every HEAD
  `{#fig-…}` id present; every chapter-map link resolves.
- Copy audit (`--you`, 4 files): 0 flags, 0 em dashes, 0 "rather than", bold 4.9 per 1,000 words. "You" 10 → 6
  in the chapter, all clinician-in-practice (screen sentence, dysphagia refer clause, the quoted "who do you
  eat with?", the scope-callout heading, the case-section instruction).
- YAML: all three data files load with js-yaml. `validate-cases.mjs`: `OK mdm-tan-malnutrition.case.yml`.
- Feedback opening words: no consecutive repeats in the case (q-suspect a/b/c now "Living / Being / The").
- Not run (per instructions): render / quarto.

## Fix round 2

Applied the verifier's round-2 list (3 majors, 21 minors). All four files touched. Where two items asked
for different wordings of the same sentence, they were reconciled as noted below.

### Chapter (`book/chapters/undernutrition-malnutrition.qmd`)

- **`#fig-ons-ladder` caption (major, decision-1 content fix).** The caption contradicted its own figure, so
  it now uses the figure's own wording (see the table below).
- At-a-glance reordered, with undernutrition bolded at first use: "Overnutrition and **undernutrition** are
  the two tails of malnutrition. Undernutrition is the deficit tail, and it is what clinical screening and
  diagnosis mean by **malnutrition**. In that sense malnutrition is a disease state: … The frail,
  undernourished senior is as much a nutritional patient as the person with metabolic syndrome (see the
  *Obesity & Metabolic Syndrome* chapter). Healthy ageing is ageing *in health* …" No words added or cut;
  the metabolic-syndrome sentence moved after the two-step definition.
- Chapter map: "the food-first ladder" → "the food-first ladder and refeeding risk" (the do-no-harm
  refeeding callout lives in `#sec-mal-ons`).
- Science paragraph 1, protein sentence (cohesion, 48 words → 39): "Muscle is the protein reserve that a
  sustained deficit draws on, but it is not a designed store: its protein is working tissue, so spending
  that protein dismantles muscle (see …)" → "A sustained deficit draws its protein from muscle, which is
  working tissue, not a designed store (see …)". Pointers unchanged. Deferred concern 2 (the figure label
  "muscle = the body's protein store") still stands and is now the only contradicting text; high priority
  for the figure pass.
- Sarcopenia paragraph (three items reconciled):
  - The first two sentences merged so @cruzjentoft2019ewgsop2 again covers the "related to but distinct"
    claim, as at HEAD: "Sarcopenia, the age-related loss of muscle strength and mass (see the *Healthy
    Ageing* chapter), is a muscle disorder, diagnosed on low strength confirmed by low muscle quantity, and
    is related to but distinct from a nutritional deficit [@cruzjentoft2019ewgsop2]."
  - The garden-path sentence was split, and the verifier's sarcopenic-obesity wording ("with obesity") used in
    place of the garden-path item's "at a high BMI", because the two items conflicted: "The two overlap:
    reduced muscle mass is a feature of malnutrition, and a nutritional deficit accelerates muscle loss.
    However, a person can be sarcopenic at a normal or high BMI; with obesity, the combination is
    **sarcopenic obesity**." "Muscle therefore has to be assessed as well as weight." kept.
  - A new paragraph starts at "In Singapore the Asian Working Group for Sarcopenia (AWGS 2019) cut-offs
    apply…"; that sentence and the *Bone & Joint Health* pointer are unchanged.
- Check yourself (sarcopenia) answer: "(sarcopenic obesity at a high BMI)" → "(sarcopenic obesity when
  obesity is present)".
- Who to suspect, frailty reminder gloss (decision 3, owner's definition): "(reduced physiological reserve
  in older age; see …)" → "(a clinical picture in older age whose other features include weakness, slow
  walking and exhaustion; see the *Healthy Ageing* chapter)". Two verifier items covered this gloss. The
  owner's exact wording was used, from *Healthy Ageing* l. 217 and the term-ownership row, in place of
  the second item's paraphrase "that also includes". [@fried2001frailty] stays at the end of the sentence.
- Who to suspect, last sentence (HEAD's subject restored): "…to look obvious, and screening is the
  difference between catching malnutrition and missing it." → "…to look obvious. Knowing the group is the
  difference between catching malnutrition and missing it."
- Screening-is-not-diagnosis callout (decision-2 gloss): "GLIM sits downstream of screening and is done by
  the dietitian or team; the generalist's job is the screen and the referral, not the grading." → "…is
  applied by the dietitian or team; the generalist's job is the screen and the referral, not the diagnosis
  or the grading of its severity."
- ONS paragraph ("genuine" intensifier out): "ONS are therefore a genuine tool, used after food-first and by
  a dietitian, not a fix for malnutrition on their own." → "ONS are therefore a useful tool, used after
  food-first and by a dietitian, but they do not fix malnutrition on their own."
- 🍜 callout, first sentence (one term, one meaning): "The local food-first lever is fortifying familiar
  hawker and home dishes, since…" → "Locally, food fortification means enriching familiar hawker and home
  dishes, since…". The rest of the callout is unchanged (rewrapped).
- The Singapore picture: the sentence "Nationally, about 1 in 4 older adults fall below minimum energy needs
  and about half below protein needs, and standardised screening in polyclinics and Active Ageing Centres is
  under active discussion: a direction of travel, not a settled mandate [@mohMalnutritionTracking2025;
  @mohPolyclinicScreening2026]." moved word for word, with both keys, from the end of the hospital paragraph
  to the end of the "Undernutrition begins in the community, not the ward." paragraph. The hospital
  paragraph now ends on 3-MinNS. Deferred concern 4 (the 50–69 age band) travels with the sentence.
- Rewrap only: the MUST Check yourself answer (an over-long line left from round 1).

### Quiz (`book/quizzes/undernutrition-malnutrition.quiz.yml`)

- q5 option 1 feedback (major, decision 1): replaced (see table). Opener "Food-first" kept, so there are no
  consecutive repeats.
- q5 option 1 text (same contradiction, not on the verifier's list): "Food-first: fix the cause and fortify
  familiar meals" → "Food-first, then fortify their familiar meals". The colon made fortification part of
  food-first, which contradicts the chapter's numbered rungs and the item's own revised feedback. The new
  label follows the ladder order and the q5 option-2 feedback ("Food-first comes first, then fortification,
  then ONS"). Length 45 against the distractors' 48/49/54; no bold.
- q1 option b feedback: "People rarely look 'starved', which is why malnutrition is so often missed." →
  "People with malnutrition often don't look 'starved', which is why it is so often missed."
- q4 option 1 feedback (normal BMI no longer reads as the cause of the risk; dangling -ing removed): "A
  normal BMI therefore still puts this patient at high risk, avoiding the classic 'she looks fine' miss." →
  "Despite the normal BMI, this patient is therefore at high risk; scoring all three components is what
  avoids the classic 'she looks fine' miss."
- q4 options 2 and 4 (one name for the MUST component, §11g): "an acute-illness effect" → "an acute-disease
  effect"; "acute-illness (2) scores" → "acute-disease (2) scores".

### Case (`book/cases/mdm-tan-malnutrition.case.yml`)

- q-firstline option a feedback, first sentence (major, decision 1): replaced (see table). The rest of the
  feedback is unchanged. Opener "The" is not next to q-suspect c's "The".
- q-firstline option a text (decision 1, internal consistency with its own stem "alongside the referral" and
  with reveal-screen): "Food-first and social support, then refer to the dietitian." → "Food-first and
  social support, alongside the dietitian referral." (64 characters; b 60, c 64).
- objectives[1]: "the acute-illness effect" → "the acute-disease effect" (not a sim case, so decision 8 does
  not restrict it).
- end-good body: "understanding that a screen flags risk without diagnosing it." → "understanding that a
  screen flags risk and does not make the diagnosis."
- remedial-refeeding and end-partial bodies: "is a genuine do-no-harm error" → "is a do-no-harm error" (both
  places; consistent with the chapter's Practise intro).
- Kept: the umbrella phrase "food-first and social support (fortify familiar dishes, …)" in objective 3,
  end-good and the keyPoints. It is the chapter's own scope-callout wording for the generalist's overall
  response, and it never says fortification is the first rung.

### Island (`book/diagrams/must-screen.yml`)

- independenceNote (decision 1): "…so a normal or high BMI can still be high risk." → "…so a normal or high
  BMI can still carry medium or high risk." `MustScreen.svelte` shows the note whenever BMI scores 0 and the
  total is ≥1 (verified: `bmiScore === 0 && total >= 1`), so it also appears under "Medium risk". The
  header comment was updated to match (comment only, not rendered).

### Further content fixes (decision 1) this round

| File / location | Before | After | Category |
|---|---|---|---|
| chapter, `#fig-ons-ladder` caption | "The generalist screens and refers into the lower rungs, and the plan itself is dietitian-led." | "The generalist screens, starts food-first and fortification, and refers; the plan itself is dietitian-led." | Caption contradicted its own figure (`oral-support-ladder.svg` desc and "generalist starts at rungs 1–2" label), the scope callout and the case |
| quiz q5 option 1 feedback | "Food-first is the first rung: fix the cause of poor intake (isolation, dentition, mood, swallow, drugs) and fortify familiar dishes … Oral supplement drinks are an evidence-based add-on later, …" | "Food-first is the first rung (fix the cause of poor intake: isolation, dentition, mood, dysphagia, drugs), and fortifying familiar dishes for more energy and protein per mouthful is the second. Oral supplement drinks are an evidence-based add-on after both, …" | Chapter–quiz contradiction: the chapter's ladder, LO5, figure and Check yourself 5 make fortification the second rung |
| quiz q5 option 1 text | "Food-first: fix the cause and fortify familiar meals" | "Food-first, then fortify their familiar meals" | Same chapter–quiz contradiction, in the option label |
| case q-firstline option a feedback | "Food-first is the first rung: fix the causes (…) and fortify familiar dishes (…) so each mouthful…" | "The food-based rungs come first: fix the causes (…), then fortify familiar dishes (…) so each mouthful…" | Chapter–case contradiction, as for quiz q5 |
| case q-firstline option a text | "Food-first and social support, then refer to the dietitian." | "Food-first and social support, alongside the dietitian referral." | Internal inconsistency: the stem says "alongside the referral" and reveal-screen refers first |
| chapter, 🍜 callout | "The local food-first lever is fortifying familiar hawker and home dishes" | "Locally, food fortification means enriching familiar hawker and home dishes" | One term for two things inside the chapter (food-first is rung 1, fortification rung 2); this sentence was where the quiz and case conflation came from |
| chapter, sarcopenia paragraph and its Check yourself | "at a high BMI the combination is **sarcopenic obesity**" / "(sarcopenic obesity at a high BMI)" | "with obesity, the combination is **sarcopenic obesity**" / "(sarcopenic obesity when obesity is present)" | Label misnames the content: in this book "high BMI" includes the ≥23 action band (*Obesity & Metabolic Syndrome* table, ≥27.5 high risk), and sarcopenic obesity needs obesity; completes round-0 content fix 4 |
| island independenceNote | "…can still be high risk." | "…can still carry medium or high risk." | Note misnamed what the island shows (it appears under the Medium-risk band too) |

### Log corrections (made in place above)

- Glossary row "Sarcopenic obesity": "Sarcopenia at a high BMI" → "Sarcopenia together with obesity".
- The round-0 summary's "frailty (reminder)" gloss is now the owner's definition (see above).

### Checks after round 2

- Gate: citation multiset IDENTICAL to HEAD (46 distinct keys, 60 instances; `diff` empty). Keys moved only
  with their claims (@cruzjentoft2019ewgsop2 within the merged sentence; @mohMalnutritionTracking2025 and
  @mohPolyclinicScreening2026 with their moved sentence). Islands 3 → 3 (must-screen, quiz, case; same
  order); figures 2 → 2; tables 0 → 0; callouts 4 → 11 (no change this round). Every HEAD `{#fig-…}` id and
  every round-1 `{#sec-…}` id present; all eight chapter-map links resolve.
- Copy audit (`--you`, 4 files): 0 flags, 0 em dashes, 0 "rather than", 0 curly quotes, bold 4.9 per 1,000
  words. "You" 6, unchanged and all clinician-in-practice.
- YAML: all three data files load with js-yaml. `validate-cases.mjs`: `OK mdm-tan-malnutrition.case.yml`.
- Feedback opening words (file order): no consecutive repeats in the quiz or the case.
- Grep of the four files: no "genuine", "acute-illness", "food-first lever", "refers into", "at a high BMI"
  or "first rung" statement that includes fortification remains.
- Not run (per instructions): render / quarto.
