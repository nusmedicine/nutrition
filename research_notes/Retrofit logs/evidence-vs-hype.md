# Retrofit log: Evidence vs Hype (`book/chapters/evidence-vs-hype.qmd`)

Files changed: `book/chapters/evidence-vs-hype.qmd`, `book/diagrams/claim-analyzer.yml`,
`book/quizzes/evidence-vs-hype.quiz.yml`, `book/cases/dairy-acne-tiktok.case.yml`.

## Gate (HEAD → working copy)

- Citations: 22 keys, each ×1, multiset IDENTICAL (diff of sorted key lists empty).
- Islands 3 → 3. Figures 0 → 0.
- Callouts 3 → 8 (+1 Learning objectives, +4 Check yourself).
- Tables 1 → 2 (+1 supplements form-by-relation table).
- HEAD had no {#sec-…}/{#fig-…} ids; none missing. New ids (unique book-wide, checked): sec-overview,
  sec-appraisal, sec-funnel, sec-hierarchy, sec-traps, sec-applying, sec-everyday, sec-supplements,
  sec-detox, sec-singapore, sec-close, sec-quiz, sec-case.
- Copy audit (4 files): 84 flags → 1 flag. Remaining: `vital` on "VITAL" (the trial's name; false
  positive, kept). Em dashes 84 → 0 across all four files. Chapter bold density 31.9 → 3.1 per 1,000
  words. "you" 16 → 5 (quoted claim in the opener, "your patient" in funnel step 4, quoted claim
  "Coffee protects your heart.", the CY4 clinician question, the case instruction "Your choices
  branch the case").
- YAML: all three files load with js-yaml. `validate-cases.mjs`: OK dairy-acne-tiktok.case.yml.
- Not done (forbidden here): render. Still to check at render time: the spectrum, both definition
  lists (one inside the 🔬 callout), the chapter-map anchors, and the TOC (2 movements × 3 children).

## Summary of changes

Chapter
- Opener rewritten (expository "you" removed; one "not X" contrast kept, naming the real misconception).
- New Learning objectives callout (6) and chapter map (2 branches, 6 sub-topics, linked).
- Ids on every heading; movement intros deleted (§11g "No movement intros").
- Funnel: pre-teach definition list (hard/surrogate endpoint, relative/absolute risk reduction) before
  the numbered funnel; bold step labels and italics removed (inline-header list); "you must know where
  you are" converted.
- Hierarchy: new design spectrum (single studies, weaker → stronger) before the prose; paragraph split
  into prose + three-reason bulleted list; RCT, blinding and prospective cohort bold-defined (standard
  one-line glosses, decision 2); emphasis bold removed; "for reasons worth understanding" cut.
- Traps: inline-header bullets and "≠" removed; each bullet opens with a plain topic sentence;
  healthy-user bias and reverse causation bold-defined; time-restricted eating unbolded (owned by
  *Integrative Metabolism*); "beautiful"/"cleanest" colour words replaced.
- PREDIMED/DASH callout retitled "Re-appraising PREDIMED and DASH"; "you" removed; composite endpoint
  bold-defined; decorative italics removed.
- Two Check yourself callouts end *The appraisal method*; two end *Applying the funnel*.
- "Putting it to work" → "Applying the funnel" (topical heading, §11h).
- Everyday questions: duplicated lead merged; table unbolded, headers simplified, acne cell split into
  three sentences, contractions expanded.
- 🔬 callout retitled "🔬 Food science: the pathway under the acne signal" (house pattern); rhetorical
  opener removed; four players moved to a definition list before the causal chain (pass 2); chain kept
  in prose with explicit "which drives" link (pass 3); glycaemic load referenced to *Macronutrients*.
- Supplements paragraph → lead sentence + 3-row table (indicated / not indicated / harmful), citations
  moved with their claims.
- New `### Do detox products remove toxins?` (common-belief rule, §11g): belief stated, then the
  physiology, then the evidence; "As the *Digestion & Absorption* chapter noted, you…" → parenthetical
  reference; biotransformation bold-defined; split into two paragraphs.
- Singapore: "hands you" → third person; emphasis bold/italics and metacommentary tail removed.
- Close retitled "What separates signal from hype?"; antithesis opener and restated funnel removed;
  "taken up in the … chapter" → parenthetical reference.
- Case intro: "after she quit milk" → "after the friend quit milk"; "actually" dropped; progress tip em
  dash → semicolon.

Island (claim-analyzer.yml, plain text)
- `intro:` deleted (repeated the chapter's opener and island sentence; decision 9; component renders
  intro only `{#if data.intro}`).
- All 25 em dashes removed; capitals for emphasis (RETRACTED, NO, NOT, INCREASED) removed; "RCT"
  abbreviation spelled out; "no magic, but not useless", "decisively", "actively harmed", "Not merely
  unproven —" flourishes removed; AAD expanded.

Quiz
- Every feedback opens with the explanation (no "Correct —", "Not in general —", "Over-correction —");
  bold removed from stems q2 and q5; italics removed from feedback; options trimmed to similar length
  and unbolded; "key question" → "What should you ask first?"; "widely-shared" → "widely shared";
  "1-in-1000" → "1-in-1,000"; no two consecutive feedbacks share an opening word (checked by script).

Case
- Em dashes removed throughout (33 → 0), including both end-node titles and the remedial title;
  "Right —", "Exactly —", "Correct —", "Overstated.", "Over-corrected.", "Too dismissive —" openers
  replaced by explanations; correct options trimmed (rationale moved to feedback); stray `\n` removed
  from q-safety option c; the closing flourish "That is appraisal *and* safety, together." cut;
  "Let's also treat your skin" → "We can treat your skin too" (audit scaffold flag on quoted dialogue).
  MCQ-only structure, routing, effects and debrief objectivesMet unchanged.

## Content fixes (decision 1/2 categories)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| book/diagrams/claim-analyzer.yml | claims.acne.outcome | "A modest, reproducible association (skim milk strongest) — but association on a weak design can't prove milk causes spots." | "A weak but reproducible association (strongest for skimmed milk), and an association from observational studies cannot prove that milk causes acne." (final wording after fix rounds 1 and 2) | Island contradicts own chapter; resolved toward the chapter's cited "weak" (@juhl2018dairyacne). Only "modest" was changed: "reproducible" (deleted in round 0) was restored in fix round 2, since it does not conflict with the chapter and its removal would have been an unchecked change to the consistency claim |
| book/diagrams/claim-analyzer.yml | verdicts.weak.label | "Weak — association" | "Weak association" | Island label aligned with the chapter's verdict list |
| book/chapters/evidence-vs-hype.qmd | 🔬 callout, androgen gloss | "(androgens are the sex hormones, such as testosterone)" | "Androgens: The class of sex hormones that includes testosterone." | Gloss precision (decision 2): oestrogens are also sex hormones |
| book/chapters/evidence-vs-hype.qmd | Everyday questions table, acne row | "both editions of the dermatology guidelines conclude there is insufficient evidence…" | "Both editions of the American Academy of Dermatology guidelines find insufficient evidence…" | Vague attribution (§11g); body named as in the chapter's own island and the cited keys @aad2016acne/@aad2024acne |
| book/chapters/evidence-vs-hype.qmd | Funnel step 2 | "a case report, a survey, a cohort, a randomised trial, a review?" | "a case report, a survey, a cohort study, a randomised trial or a systematic review?" | Clarification (decision 2): in a design hierarchy "review" means a systematic review |
| book/quizzes/evidence-vs-hype.quiz.yml | q2, option b feedback | "Not in general — for a drug, the RCT is superior. Nutrition is the special case, for the reasons above." | "For a drug question the randomised trial is the stronger design. Nutrition is the special case, because diets are hard to blind and their effects build over decades." | Internal reference fix: only the chosen option's feedback is shown, so "the reasons above" pointed at nothing; reasons taken from the chapter text |

Cross-references checked, none retargeted: *What a Healthy Diet Looks Like* (covers PREDIMED and DASH
with caveats), *Digestion & Absorption* (liver and kidneys already detoxify), *Macronutrients* (owns
glycaemic load), *Assessing Diet & Talking to Patients* (has the do-no-harm section).

## Deferred content concerns (need source checking; not changed)

- Everyday table, sugar row, `@wolraich1994sugar` (and island sugar `outcome`): the NEJM trial showed
  sucrose had no behavioural effect; the "parental expectancy" claim usually rests on a separate
  expectancy study (Hoover & Milich 1994). Check the citation supports the expectancy part.
- Traps bullet 4, `@lowe2020treat`: TREAT compared 16:8 TRE with three structured meals, not with
  calorie restriction; only `@lin2023tre` tested TRE against calorie restriction.
- Everyday table, ACV row, `@acvBodyComp`: a body-composition meta-analysis cited for "the real
  glycaemic effects are tiny".
- Supplements table, `@vital2019`: the key is the vitamin D paper; the null fish-oil result is a
  companion paper, yet the row says "vitamin D and fish oil".
- Supplements table, `@caret1996`: CARET tested beta-carotene plus vitamin A in smokers and
  asbestos-exposed workers; "beta-carotene supplements" is a shorthand (ATBC is only in the bib note).
- Singapore picture: HSA "notifies" supplements; check the regulatory term (health supplements are not
  pre-market approved; "notification" is the cosmetics regime). `@hpbHealthSupplements` is a generic
  HealthHub URL covering both HealthHub and HSA.
- Singapore picture: the quotation "cannot and should not replace a balanced diet"; the bib note
  paraphrases "cannot replace". Check the exact wording, since it is in quotation marks.
- Overview, `@crowley2019`: supports "graduates feel unprepared for nutrition care" generally; "this is
  where they feel least equipped" (appraising claims) may go further than the source.
- Bib: `glutenFreeNonceliac` and `glutenFreeNonCeliac` are duplicate entries for the same paper
  (Niland & Cash 2018); this chapter uses `glutenFreeNonCeliac`, *Digestion & Absorption* the other.
  Left untouched (gate requires the key multiset to stay identical).
- 🔬 callout, mTORC1 gloss "a growth-sensing signalling pathway inside cells": mTORC1 is strictly a
  protein-kinase complex at the hub of that pathway; kept as the ownership map's wording.
- Case q-advise feedback names benzoyl peroxide and retinoids as proven acne treatment; the chapter
  says only "medication" and cites no source for these drugs.
- Other chapters (not my files, for their owners): *What a Healthy Diet Looks Like* sends
  "single-nutrient reductionism" to this chapter, which does not name the idea; *Interprofessional
  Practice & Referral* says "As the *Evidence vs Hype* chapter argued, don't promise those outcomes"
  (book acts; this chapter covers applicability only in funnel step 4, not DiRECT/DPP).

## Deferred backlog (house blocks, figures, restructures)

- Only two `##` movements (below §11h's 3–5); kept as planned (no re-architecture). Splitting
  *The appraisal method* into method + traps is the candidate if the author wants three.
- No teaching figure (§11f): candidates are a labelled acne-pathway schematic (high glycaemic load /
  dairy → insulin and IGF-1 → androgens and mTORC1 → sebum and keratinisation → blocked pore) or an
  icon array showing relative vs absolute risk.
- House blocks: one 🔬 only (skills-chapter exemption, §11b). A 🍜 *Eating out* on the pharmacy
  supplement aisle could be considered; not forced.
- Everyday-questions table overlaps the claim-analyzer island (acne, coffee, sugar, ACV); both kept
  (decision 9: the cited static table stays; island intro cut).
- Glossary rows below to be added to `book/glossary.qmd` by the glossary owner.
- Render check outstanding (see Gate).

## Glossary rows owned (term | meaning | introduced in)

Updated in place to the final wording after fix rounds 1 and 2 (Absolute risk reduction, mTORC1,
Prospective cohort study changed; Observational study added). The round-1 and round-2 tables below
record the changes.

| Term | Meaning | Introduced in |
|---|---|---|
| Absolute risk reduction | The actual difference in risk between the groups being compared, which depends on how high the starting (baseline) risk was | Evidence vs Hype |
| Androgens | The class of sex hormones that includes testosterone | Evidence vs Hype |
| Biotransformation | The liver's chemical conversion of drugs, hormones and metabolic waste into water-soluble forms, in two stages (Phase I and Phase II), so the kidneys can excrete them | Evidence vs Hype |
| Blinding | Keeping trial participants unaware of which treatment they receive | Evidence vs Hype |
| Composite endpoint | Several outcomes counted together as one result | Evidence vs Hype |
| Hard endpoint | An outcome that matters to the patient directly, such as a heart attack or death | Evidence vs Hype |
| Healthy-user bias | The tendency of people who choose one habit to differ in many other health-related ways, which can make the habit look protective in observational data | Evidence vs Hype |
| IGF-1 (insulin-like growth factor 1) | A growth-signalling hormone closely related to insulin; dairy raises it | Evidence vs Hype |
| mTORC1 | Mechanistic target of rapamycin complex 1, a growth-sensing protein complex at the hub of a signalling pathway inside cells | Evidence vs Hype |
| Observational study | A study that records what people already do, without assigning a treatment; a prospective cohort study is one | Evidence vs Hype |
| Prospective cohort study | A study that records what people eat (or another exposure) and follows them forward for years to see who develops disease | Evidence vs Hype |
| Randomised controlled trial (RCT) | A study in which chance decides who receives the treatment and who receives the comparison | Evidence vs Hype |
| Relative risk reduction | A change expressed as a share of the starting risk, such as "30% lower" | Evidence vs Hype |
| Reverse causation | An association produced when the outcome changes the exposure, as when people who become ill cut back on coffee | Evidence vs Hype |
| Sebum | The oily secretion of the skin's sebaceous glands | Evidence vs Hype |
| Surrogate endpoint | A measured marker, such as blood pressure or a blood test, that stands in for a hard endpoint | Evidence vs Hype |

## Owner terms from term-ownership.md that do not occur in this chapter

- Confounding (conditionally reassigned to Evidence vs Hype; the chapter does not use the word, so per
  the ownership map *Brain Health & Dementia* owns it). Not added.

## Fix round 1 (verifier issues)

Gate re-run (HEAD → working copy): citations 22 keys, each ×1, multiset IDENTICAL; islands 3 → 3; figures
0 → 0; callouts 3 → 8 (+Learning objectives, +4 Check yourself); tables 1 → 2 (+supplements table). HEAD
had no {#sec-…}/{#fig-…} ids; all 8 chapter-map anchors resolve. YAML: all three data files load with
js-yaml. `validate-cases.mjs`: exit 0, OK dairy-acne-tiktok.case.yml. Copy audit (4 files): 1 flag (`VITAL`,
trial name, false positive). No two consecutive feedbacks share an opening word (re-checked by script).

### Chapter (`book/chapters/evidence-vs-hype.qmd`)

| Location | Before | After | Reason |
|---|---|---|---|
| Singapore picture | "…detox claims are unevidenced. The Health Sciences Authority notifies supplements…" | "…detox claims are unevidenced; the Health Sciences Authority notifies supplements…" | Blocker: rejoined so the single end citation `@hpbHealthSupplements` covers the HealthHub quotation again (key multiset unchanged) |
| Singapore picture, first sentence | "Singapore's health authorities offer an authoritative counter-voice to these claims." | "Singapore's health authorities counter these claims directly." | Repeated root (authorities/authoritative) |
| At-a-glance heading | `## A claim is not evidence {#sec-overview}` | `## Evidence appraisal at a glance {#sec-overview}` | Major: §11c/§11h "<Topic> at a glance"; bare punchline heading; id kept |
| Opener | "The answer is a habit, not a list of red-flag words: tracing the claim back…" | "The answer is a habit of tracing the claim back to its evidence and reaching a defensible verdict, including "modest but real", in place of a list of red-flag words." | Colon attachment ambiguity |
| Learning objective 6 | "Recognise when a claim leads towards restrictive eating or a possible eating disorder, and refer." | "Recognise when a claim shades into restrictive eating or a possible eating disorder, and turn the conversation to doing no harm." | Objective now matches what the chapter close teaches (referral itself is taught in the case, q-safety) |
| Chapter map | Supplements and detox nodes had no descriptor | "…(#sec-supplements): whether one is needed at all"; "…(#sec-detox): the liver and kidneys already clear them" | Map consistency; both descriptors restate the sections' own opening claims (no new content) |
| Funnel lead-in | "Two distinctions decide how much a study's result means for a patient: what was measured, and how the change is expressed." | "The appraisal funnel asks the same four questions of every claim. Its second question places the study by its design, and its third turns on what was measured and how the change is expressed. Six terms name these ideas:" | §11j pass 3 link to the funnel; "six" (not the suggested "four") because RCT and prospective cohort study now join the list (next row) |
| Funnel definition list | 4 terms | + "Prospective cohort study: A study that records what people eat and follows them forward for years." + "Randomised controlled trial (RCT): A study in which chance decides who receives the treatment and who receives the comparison." (placed first, in funnel order) | §11g define at first appearance / §11j pass 2; wording identical to the existing bold glosses and glossary rows |
| Hierarchy prose | "the **randomised controlled trial (RCT)**, in which chance decides who receives the treatment and who receives the comparison, sits at the top"; "Well-conducted **prospective cohort studies**, which record what people eat and follow them forward for years, therefore…" | "the randomised controlled trial (RCT) sits at the top"; "Well-conducted prospective cohort studies therefore…" | Bold glosses removed now that the definition list defines both terms earlier (one defining use per term) |
| Funnel list lead | "Every claim gets the same four questions:" | "The four questions are:" | Avoids repeating the new lead-in |
| Funnel step 2 | "a randomised trial or a systematic review?" | "a randomised trial or a review?" | Reverted to HEAD: the round-0 narrowing was outside decision 1/2 scope. Round-0 content-fix row "Funnel step 2" is withdrawn |
| Absolute risk reduction definition | "…between the groups, which depends…" | "…between the groups being compared, which depends…" | Antecedent for a standalone definition (glossary row updated below) |
| Everyday table, acne row | "strongest for skim milk" | "strongest for skimmed milk" | British form |
| 🔬 callout lead-in | "…one shared hormonal pathway, with four players:" | "…one shared hormonal pathway. Four terms describe it:" | Sebum is the output, not a player; insulin is a player not listed |
| 🔬 callout, mTORC1 | "A growth-sensing signalling pathway inside cells." | "Mechanistic target of rapamycin complex 1, a growth-sensing protein complex at the hub of a signalling pathway inside cells." | Decision 2 gloss precision + abbreviation expansion; round-0 deferred concern on mTORC1 now resolved (glossary row updated below) |
| 🔬 callout causal sentence (42 words) | "Insulin and IGF-1 together raise androgen activity and switch on mTORC1 in the skin, which drives the sebaceous glands to produce more sebum and the follicle lining to over-keratinise (build up excess keratin): the two changes that seed a blocked pore [@melnik2015acne]." | "Insulin and IGF-1 together raise androgen activity and switch on mTORC1 in the skin. The result is more sebum from the sebaceous glands and a follicle lining that over-keratinises (builds up excess keratin): the two changes that seed a blocked pore [@melnik2015acne]." | ~25-word lint; citation stays with its claim |
| Supplements table, Indicated row | "A documented deficiency or a life-stage need" | "A documented deficiency, or a life-stage or dietary need" | Internal consistency: B12 for vegans is a dietary need, as quiz q5 feedback says |
| Supplements table, Harmful row | "The wrong supplement in the wrong group" | "A supplement with a proven downside in a particular group" | Near-tautological cell; the cited beta-carotene/smokers example supports "proven downside" |
| Check yourself (acne) last sentence | "Guidelines find insufficient evidence to recommend cutting any food, so a lower-sugar trial is reasonable, while a strict elimination diet is not." | "Because the trial evidence favours glycaemic load, a lower-sugar trial is reasonable; because guidelines find insufficient evidence to recommend cutting any food, a strict elimination diet is not." | Non sequitur fixed (two overlapping verifier items). The suggested clause "and the change is low-risk" was left out: the chapter does not make or cite that claim |

### Island (`book/diagrams/claim-analyzer.yml`, plain text)

| Location | Before | After | Reason |
|---|---|---|---|
| claims.acne.design | "(the trials are of high-glycaemic-load diets)" | "(the trials are on high-glycaemic-load diets)" | Restores HEAD sense (trials about glycaemic load) |
| claims.acne.outcome | "…(strongest for skim milk)… cannot prove that milk causes spots." | "…(strongest for skimmed milk)… cannot prove that milk causes acne." | Medical term outside patient dialogue; British form |

### Quiz (`book/quizzes/evidence-vs-hype.quiz.yml`)

| Location | Before | After | Reason |
|---|---|---|---|
| q3 stem | "What should you ask first?" | "What is the most important question to ask?" | "First" clashed with the funnel order (Find the study comes first) |
| q5 option c feedback | "…so this request is actively harmful." | "…so taking it would be actively harmful." | Harm sits on taking the supplement |
| q7 option c feedback | "Diet does have a weak association with acne, and high glycaemic load a stronger one." | "Dairy does have a weak association with acne, and high glycaemic load a stronger one." | Self-contradiction (GL is part of diet); restores HEAD's dairy-vs-GL sense |

### Case (`book/cases/dairy-acne-tiktok.case.yml`)

| Location | Before | After | Reason |
|---|---|---|---|
| q-claim option a feedback | "(strongest for skim milk, with no trials)" | "(strongest for skimmed milk, with no trials)" | British form |
| q-claim option c feedback | "Diet does carry a weak association with acne…" | "Dairy does carry a weak association with acne…" | As quiz q7 |
| q-advise option a (correct) | "\"Cutting sugary snacks has better evidence than cutting dairy. We can treat your skin too.\"" | "\"Eating less sugar has better evidence than cutting out dairy. We can get your skin properly treated too.\"" | Blocker: restores reduce-not-eliminate and arranged-treatment senses (HEAD meaning). Verifier's text applied as given; HEAD's optional "If you want to trial a change" framing is not restored in the option, but the feedback still calls it "a lower-sugar trial" |
| q-safety option a (correct) | "Acknowledge the restriction and guilt, add no new food rules, and arrange referral." | "Gently acknowledge the restriction and guilt, add no new food rules, and arrange follow-up and referral." | Blocker: restores the safety-netting follow-up and the gentle approach from HEAD |
| q-safety option c feedback | "…they need addressing before any further talk about skin." | "…they should not pass unaddressed." | Restores HEAD strength (no added sequencing rule) |
| remedial body | "the moment it **stops being about acne**." | "the moment it stops being about acne." | §11g: no emphasis bold |

Option lengths after the blocker fixes: q-advise 106/71/79 and q-safety 104/88/54 characters (correct
option longest). Accepted: both restore HEAD safety/meaning content the verifier required; distractors were
not padded.

### Glossary rows changed (for the glossary owner; replace the round-0 rows)

| Term | Meaning | Introduced in |
|---|---|---|
| Absolute risk reduction | The actual difference in risk between the groups being compared, which depends on how high the starting (baseline) risk was | Evidence vs Hype |
| mTORC1 | Mechanistic target of rapamycin complex 1, a growth-sensing protein complex at the hub of a signalling pathway inside cells | Evidence vs Hype |

The round-0 deferred concern "mTORC1 gloss … kept as the ownership map's wording" is closed by this change
(term-ownership.md still holds the old wording; the glossary owner should use the row above).

## Fix round 2 (verifier issues)

Gate re-run (HEAD → working copy): citations 22 keys, each ×1, multiset IDENTICAL (diff empty); islands
3 → 3; figures 0 → 0; callouts 3 → 8 (+Learning objectives, +4 Check yourself); tables 1 → 2
(+supplements table). HEAD had no {#sec-…}/{#fig-…} ids; all 8 chapter-map anchors resolve. YAML: all
three data files load with js-yaml. `validate-cases.mjs`: exit 0, OK dairy-acne-tiktok.case.yml. Copy
audit (4 files): 1 flag (`VITAL`, trial name, false positive); em dashes 0; "you" 5 (unchanged); bold
2.5 per 1,000 words. No two consecutive case feedbacks share an opening word (re-checked by script).
Case option lengths (correct first): q-claim 87/78/61, q-advise 109/71/79, q-safety 107/88/54.

### Chapter (`book/chapters/evidence-vs-hype.qmd`)

| Location | Before | After | Reason |
|---|---|---|---|
| 🔬 callout, causal sentence | "…switch on mTORC1 in the skin. The result is more sebum from the sebaceous glands and a follicle lining that over-keratinises (builds up excess keratin): the two changes that seed a blocked pore [@melnik2015acne]." | "…switch on mTORC1 in the skin; the result is more sebum from the sebaceous glands and a follicle lining that over-keratinises (builds up excess keratin), the two changes that seed a blocked pore [@melnik2015acne]." | Blocker: rejoined so the single `@melnik2015acne` covers the whole chain (androgen and mTORC1 activation included), as in HEAD. Reverses the round-1 split; key multiset unchanged |
| 🔬 callout, last two sentences | "Because refined-carbohydrate and dairy foods converge on the same insulin/IGF-1/androgen axis, they share a signal. The broad glycaemic-load lever, which the trials tested, is therefore more useful advice than singling out milk." | "Because a high glycaemic load and dairy converge on this insulin/IGF-1/androgen axis, the broad glycaemic-load lever, which the trials tested, is more useful advice than singling out milk." | Block 7 → 5 sentences (§11b/§11d); the repeat of the opening sentence is gone. Verifier's text used with "both" replaced by the explicit nouns (§11j pass 3): after the rejoined sentence, "both" could be read as insulin and IGF-1 or as "the two changes" |
| Hierarchy paragraph | "In drug research the randomised controlled trial (RCT) sits at the top. Observational studies, by contrast, are treated with suspicion." | "In drug research the RCT sits at the top. **Observational studies** (which record what people already do, without assigning a treatment; a prospective cohort study is one) are, by contrast, treated with suspicion." | Major: "observational" carries the chapter's verdicts but was never defined (no chapter bold-defines it; checked by grep). Standard one-line gloss (decision 2); RCT is no longer spelled out a second time after the definition list. Glossary row below |
| Hierarchy list, bullet 1 | "- **Blinding** (keeping participants unaware of which treatment they receive) is often impossible, because people know what they are eating." | "- With a diet, **blinding** (keeping participants unaware of which treatment they receive) is often impossible, because people know what they are eating." | The bullet no longer opens with a bold word (§11g inline-header lists). Wording differs from the verifier's "A diet often cannot undergo **blinding**…" only because "undergo blinding" is unidiomatic; same structure and meaning. The clause "because people know what they are eating" is kept and logged as a decision-2 clarification: it restates the gloss (participants know their treatment) for a diet and adds no fact, number or citation (HEAD: "You often can't blind a diet") |
| Funnel definition list, Prospective cohort study | "A study that records what people eat and follows them forward for years." | "A study that records what people eat (or another exposure) and follows them forward for years to see who develops disease." | Decision 2 gloss precision: the owner definition now includes the defining feature (following people to the outcome). Glossary row below |
| Traps lead-in | "Most overstated nutrition claims fail at one of four predictable points:" | "Most overstated nutrition claims fail at one of a few predictable points:" | Restores HEAD's "a few" (the four bullets are common examples, not a complete list) |
| Chapter map, traps node | "…(#sec-traps): four predictable failure points" | "…(#sec-traps): predictable failure points" | As above |
| Traps bullet 2 | "A relative change can hide a small absolute one. … the absolute benefit can be tiny." | "A relative risk reduction can hide a small absolute one. … the absolute risk reduction can be tiny." | §11g: no synonym cycling for the two terms the funnel definition list has just defined |
| PREDIMED box | "PREDIMED's "~30%" is a relative reduction on a stroke-dominated composite endpoint" | "PREDIMED's "~30%" is a relative risk reduction on a stroke-dominated composite endpoint" | Same terminology fix (the verifier's problem statement names this box); lines rewrapped |
| Everyday table, acne row | Evidence cell ended "…is high glycaemic load [@meixiong2022dietacne]. Both editions of the American Academy of Dermatology guidelines find insufficient evidence to recommend cutting any food to treat acne [@aad2016acne; @aad2024acne]"; verdict cell "Real but weak; a lower-sugar trial is reasonable, a strict elimination diet is not" | Evidence cell ends "…is high glycaemic load [@meixiong2022dietacne]"; verdict cell "Real but weak. A lower-sugar trial is reasonable; a strict elimination diet is not, because both editions of the American Academy of Dermatology guidelines find insufficient evidence to recommend cutting any food to treat acne [@aad2016acne; @aad2024acne]" | §11j table scanning: evidence cell ~85 → ~50 words. The guideline sentence moves with both its citations (multiset unchanged). It is ordered so the guideline finding supports the elimination-diet half of the verdict, matching the round-1 Check yourself logic; the verifier's "Real but weak: both editions…" would have attached it to "Real but weak" instead |
| Everyday table, coffee row | "A large umbrella review links…" | "A large umbrella review (a review of many earlier reviews) links…" | Decision 2 gloss of a design term in the chapter that teaches designs. Unbolded passing gloss, consistent with *What a Healthy Diet Looks Like* ("an umbrella review of many meta-analyses"); no glossary row |
| Supplements lead-in and table header | "The evidence sorts supplement use into three groups:" / header "Example" | "Supplement use falls into three groups:" / header "Example or evidence" | Decision 1 (a label that misnames content: two of the three cells are trial results); the grouping is the chapter's framing, not an actor "the evidence" |
| Detox paragraph | ""Detox" products, from juice cleanses to detox teas, rest on…" | ""Detox" products, such as juice cleanses and detox teas, rest on…" | §11g false range |
| Detox paragraph, cross-reference | "(see the [*Digestion & Absorption*](digestion-absorption.qmd) chapter)" | "(see the [*Digestion & Absorption*](digestion-absorption.qmd#sec-digestion-beliefs) chapter)" | §11d section anchor: the detox point is one line in that section. The id exists in the working copy (added by that chapter's retrofit, not in HEAD); confirm at render. Paragraph rewrapped, no other wording change |
| Close | "…the right answer. Most fads are overstated and a few carry a genuine signal. The clinician's task is to tell which, transparently, and to keep a patient…" | "…the right answer. The clinician's task is to tell which claims carry a signal, and to keep a patient…" | §11c/§11g: the sentence repeated the at-a-glance line, and "transparently" was vague filler. The content survives in the at-a-glance section |
| Close, cross-reference | "(see the [*Assessing Diet & Talking to Patients*](06-dietary-assessment.qmd) chapter)" | "(see the [*Assessing Diet & Talking to Patients*](06-dietary-assessment.qmd#sec-do-no-harm) chapter)" | §11d section anchor. The id exists in the working copy (added by that chapter's retrofit, not in HEAD); confirm at render |

### Island (`book/diagrams/claim-analyzer.yml`, plain text)

| Location | Before | After | Reason |
|---|---|---|---|
| claims.acne.outcome | "A weak association (strongest for skimmed milk), and an association from observational studies cannot prove that milk causes acne." | "A weak but reproducible association (strongest for skimmed milk), and an association from observational studies cannot prove that milk causes acne." | Blocker: decision 1 allowed only "modest" → "weak" (the contradiction with the chapter's cited "weak"); deleting "reproducible" changed a consistency claim without source checking. Restored. The round-0 content-fix row above now shows this final wording |
| claims.tre.design | "Randomised trials testing the claim head-on, the strongest part of the evidence." | "Randomised trials testing the claim head-on: the strong part of the evidence." | Restores HEAD strength ("the strong part"); the superlative was an upgrade |

### Case (`book/cases/dairy-acne-tiktok.case.yml`)

| Location | Before | After | Reason |
|---|---|---|---|
| q-advise option a (correct) | "Eating less sugar has better evidence than cutting out dairy. We can get your skin properly treated too." (106 characters with quotes) | "If you want to try a change, cut back on sugar instead of dairy. We can get your skin properly treated too." (109) | Restores HEAD's optional, patient-led framing ("If you want to trial a change", "cutting back on"), which matters for a patient who turns out to be restricting. The verifier's text (135 characters against distractors of 71 and 79) would have broken the §11g same-length rule, so the evidence rationale moved into the feedback instead, the house rule's own mechanism. Round-1 senses kept: reduce, not eliminate; arranged, proper treatment |
| q-advise option a feedback | "A lower-sugar trial is reasonable and low-risk; a growing teenager…" | "A lower-sugar trial is reasonable, low-risk and better evidenced than cutting out dairy; a growing teenager…" | Carries the "better evidence" rationale moved out of the option; supported by the chapter (dairy: weak, observational only; glycaemic load: the stronger signal and the only one tested in trials). Opening word unchanged |
| q-safety option a (correct) | "Gently acknowledge the restriction and guilt, add no new food rules, and arrange follow-up and referral." | "Gently shift focus to the restriction and guilt, add no new food rules, and arrange follow-up and referral." | Restores HEAD's explicit move away from acne ("Gently shift focus: acknowledge…"); verifier's text; 104 → 107 characters |

Not changed: q-claim option a. The suggested text ("Her skin may have improved for many reasons. The link with
dairy is weak, and guidelines don't advise cutting foods.") is 118 characters against distractors of 78
and 61, which breaks the §11g same-length rule. The verifier allowed leaving it, and the guideline point
remains in the option's feedback.

### Glossary rows (for the glossary owner; the main table above is updated to match)

| Term | Meaning | Introduced in |
|---|---|---|
| Observational study | A study that records what people already do, without assigning a treatment; a prospective cohort study is one | Evidence vs Hype |
| Prospective cohort study | A study that records what people eat (or another exposure) and follows them forward for years to see who develops disease | Evidence vs Hype |

"Observational study" is a new owned term (not in term-ownership.md; no chapter bold-defines it).
term-ownership.md still holds the old Prospective cohort study wording; use the row above.

### Further content fixes (decision 1/2 categories), before → after

- Supplements table header "Example" → "Example or evidence" (decision 1: the label misnamed two
  trial-result cells).
- Island claims.acne.outcome: "reproducible" restored (correction of the round-0 decision-1 fix; see the
  updated content-fix row).
- Glosses (decision 2): observational studies added; umbrella review added; prospective cohort study
  broadened; the blinding clause "because people know what they are eating" logged as a clarification.
- No new claims, numbers or citations. No new deferred content concerns.
