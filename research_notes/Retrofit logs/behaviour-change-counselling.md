# Retrofit log: *Behaviour-Change Counselling*

Files changed (only these):

- book/chapters/behaviour-change-counselling.qmd
- book/diagrams/response-chooser.yml
- book/quizzes/behaviour-change-counselling.quiz.yml
- book/cases/two-kopi-a-day.case.yml

## Gate (HEAD vs working copy)

| Check | Before | After |
|---|---|---|
| Citation multiset | 16 keys, 17 occurrences (usptfBehavioural x2) | identical (diff empty) |
| data-island | 3 | 3 |
| Callouts | 3 | 10 (+1 Learning objectives, +6 Check yourself) |
| Tables | 0 | 0 |
| Figures | 0 | 0 |
| {#sec-/#fig-} ids at HEAD | none | 13 new: sec-knowledge, sec-conversation, sec-five-as, sec-mi, sec-smart, sec-tailoring, sec-stages, sec-fit, sec-harm, sec-singapore, sec-close, sec-quiz, sec-case |

All nine chapter-map links resolve to ids in the file.
Copy audit (`--you`, four files): 92 flags -> 0 flags. qmd: 0 em dashes (was 6), bold 5.3 per 1,000 words
(was 34.6), 1 "rather than" (was 4), 19 "you" (was 30; all are clinician-in-practice, island
instruction, quoted speech or the close-question heading).
YAML: all three files load with js-yaml. `node scripts/validate-cases.mjs`: all OK, exit 0.
Not run (forbidden in this step): render, TOC extraction, check-assets.

## Summary of changes

Chapter

- New opener (2 sentences, no "you", no question form), Learning objectives callout (6 items), chapter
  map (4 branches = 4 movements, with sub-branches).
- Headings: "Knowledge is not enough" -> "Why knowledge is not enough: reward and habit" (bare punchline);
  "Make it fit the life" -> "Fitting the goal to daily life" (imperative). {#sec-} ids on every ## / ###.
- Deleted the two movement intros (The conversation; Tailoring it to the person) and the metacommentary
  ("That reframes the task.", "The rest of this chapter is those two levers.", "earns its place",
  "The single most important move", "Its core is deceptively simple").
- The book no longer acts: chapter references moved into parentheses, by canonical name, with links.
- Unbolded terms owned elsewhere (reward system, wanting, cues -> "food cues", 5 A's, Nutri-Grade, War
  on Diabetes, My Healthy Plate) and every emphasis bold/italic. Bold kept only at defining uses (habit,
  MI, OARS, change talk, righting reflex, scaling question, SMART goal, if-then plan, stages-of-change,
  weight-neutral), the two parallel run-in lead-ins in Do no harm, and one warning bold in the stages
  callout.
- Form by relation: 5 A's em-dash inline-header bullets -> numbered list with plain labels; stages ->
  definition list before the tailoring sentence (density alarm: 4 bold terms in one paragraph);
  🍜 callout's 5 bolded goals -> bulleted list; two {.example} boxes (righting-reflex exchange; the kopi
  siu dai SMART goal).
- Cohesion: split the 200-word mechanism paragraph and the 5 A's caveat paragraph; split the MI
  paragraph; split long sentences (levers, red flags, War on Diabetes); "these red flags" (no
  antecedent) -> "the vigilance for eating-disorder red flags".
- Stages callout retitled "Hold the model loosely" -> "Does a patient's stage predict who will
  succeed?" (common-beliefs neutral question; states the belief, then the evidence).
- Six collapsed Check yourself callouts: 1 after movement 1, 2 after movement 2, 2 after movement 3,
  1 after movement 4. None after The Singapore picture or the close.
- Close: kept in the clinician voice, unbolded, broken into shorter sentences, and the sentence
  announcing the capstone cases deleted.
- Singapore picture: third person, unbolded, two paragraphs.
- Case section: HbA1c gloss added; "actually" dropped; progress callout em dash -> semicolon (pilot
  wording).

response-chooser.yml (plain text)

- Deleted the `intro:` block (repeated the chapter's instruction paragraph; decision 9). "Try more
  than one" absorbed into the chapter's instruction sentence.
- All 24 em dashes removed; literal asterisks (`*siu dai*`, `*can*`) removed.
- Feedback no longer opens by naming the response type (the badge already shows it); openers
  per turn: The / Naming / Asking / Gathering; He / Genuine / Gently / A; The / Letting / A / Vague.
- "Honestly" (t1, t3) and "not just" (t2 reaction) dropped from patient lines (audit to 0; meaning
  unchanged).

Quiz

- No "Correct —" openers; feedback starts with the explanation; no two consecutive feedbacks share an
  opening word; no bold in stems; correct options trimmed (q2a, q4a, q6a) and distractors made
  parallel (q3b, q5c, q6b, q6c); "genuinely", "actually", "key caveat", "taught with humility" removed;
  British punctuation outside the quote in q4 stem.

Case (per-chapter MCQ case; no patient-chat)

- No "Right —", "Exactly —", "Correct —" openers; all em dashes removed; options trimmed toward equal
  length (q-open a, q-changetalk a); stray "\n" removed from q-safety c; remedial body four bolds -> one
  warning bold; summary filler deleted ("This is MI working.", "That's what sticks.", "That's how a
  brief consult starts a change, safely."); "Honestly" removed from the q-open stem.

## Content fixes (decision 1 categories, plus decision 2 glosses)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| quiz | q3 stem | In the 5 A's (Assess, Advise, Agree, Assist, Arrange), what should come **before** you give advice? | Within the Advise step of the 5 A's, what should come before the advice itself? | Internal consistency: in the chapter's 5 A's sequence Assess precedes Advise, so the old stem contradicted its own keyed answer (ask permission) |
| quiz | q7a feedback | on average weight management is safe | On average, structured weight management does not increase eating-disorder symptoms | Internal consistency: resolved toward the chapter's cited claim [@jebeile2023edrisk] |
| case | q-safety a feedback | on average weight advice is safe | On average, structured weight management does not increase eating-disorder symptoms | Internal consistency: as above |
| quiz | q6a and q6b feedback | it's low-certainty evidence / it doesn't predict sustained weight loss | the evidence that it produces sustained weight loss is low-certainty / ... so it cannot forecast who will succeed | Internal consistency: resolved toward the chapter's cited wording [@mastellos2014ttm] |
| chapter | 5 A's caveat | ...programmes that actually shift outcomes belong to the diabetes chapter | ...are discussed with diabetes prevention (see the [*Type 2 Diabetes*](type-2-diabetes.qmd) chapter) | Cross-reference: generic placeholder -> canonical name of the chapter that covers the intensive programmes (DPP) |
| case | end-good body | *(Carrying the whole conversation live with a simulated patient is the capstone chapter.)* | (Whole consultations with a live simulated patient are practised in the *Everyday & Preventive Counselling* chapter.) | Cross-reference: unnamed "capstone chapter" -> canonical name |
| chapter | close | Carrying the whole conversation live, with a simulated patient, comes in the capstone cases. | (deleted) | Cross-reference: unnamed pointer that announces a later chapter (§11c); the case's end node keeps the named pointer |
| chapter | scaling question | "on a 0–10, how confident..." | "On a scale of 0 to 10, how confident..." | Internal consistency: matches the island's wording |
| response-chooser | t3 second open option, feedback | The confidence ruler — an evoking open question. | A scaling question surfaces... | Label misnames: island used a synonym for the chapter's term |
| chapter | Do no harm, opener | Two habits protect against this. | Two practices protect against harm. | Terminology: "habit" is defined in this chapter as automatic, context-cued behaviour |
| chapter | SMART example | kopi *siu dai* | kopi *siu dai* (less sweet) | Gloss (decision 2); matches the island's "siu dai, less sweet" (added to this table in fix round 1) |
| chapter + response-chooser | case intro; island patient line | borderline HbA1c | borderline HbA1c (a blood marker of average blood-glucose control) | Gloss (decision 2; Uncertainty 1). HbA1c is first met here in reading order; owner = *Type 2 Diabetes*, so unbolded |

## Deferred content concerns (source-checking not done; decision 1)

1. The Singapore picture: "The HPB–MOH clinical practice guidelines build brief lifestyle counselling
   on the 5 A's and MI-style engagement [@hpbMohCPG; @sgObesityBMI]". Check that both sources say
   this; @sgObesityBMI may be a BMI/obesity guideline rather than a counselling one (plan content
   concern 1). Wording left as it was.
2. Stages-of-change callout and quiz q6 feedback: @mastellos2014ttm is about whether TTM-based
   interventions produce sustained weight loss, while the chapter callout (title "Does a patient's stage
   predict who will succeed?"; "a heuristic, not a proven predictor"; "it does not tell you whether
   they'll succeed") and the q6 feedback (q6a "not to label them or forecast success"; q6b "the model is
   not a proven predictor of who will succeed") frame it as a prediction of success. The glossary row
   ("it does not predict success") carries the same framing. Check whether the source supports the
   prediction framing, or reword these claims to "stage-matched interventions" after checking.
   (Reworded in fix round 2. The q6 keyed option is back to HEAD's weight-loss scope, "doesn't reliably
   predict sustained weight loss"; if the claims above are reworded after the source check, reword it
   with them.)
3. 5 A's dose claim "(often a dozen or more sessions)" [@usptfBehavioural]: check the number against the
   USPSTF recommendation.
4. response-chooser t1 feedback "a respectful opener that almost always gets a yes": unsourced claim in
   island data (kept from the original).
5. Quiz q2b/q2c use "sustain talk", which the chapter never names (glossed inline in the feedback only).
   Adding the term to the MI paragraph would be new content; author to decide.
6. response-chooser t3 last option ("Don't worry about it. Just try your best, okay?") carries
   `type: closed` (badge "Closed question"), but the feedback calls it vague reassurance. A new type
   (e.g. "Reassurance") would add a category; left unchanged pending the author (plan Uncertainty 2).

## Deferred backlog

- No teaching figure in the chapter (§11f "at least one" beyond the islands); not added in a style pass.
- 🔬 and 🍳 house blocks not added: skills-chapter exemption (§11b); the single 🍜 block stays.
- The *Assessing Diet & Talking to Patients* chapter (being retrofitted in parallel) now carries
  `#sec-first-moves` (5 A's) and `#sec-do-no-harm` (red flags) in the working copy. Once committed, the two
  cross-references here can take those anchors. Not linked now because the ids are not at HEAD.
- Render out of tree and check: TOC shows 4 movements (3 + 2 children); definition list, two
  {.example} boxes and chapter-map links render; the response-chooser shows no intro and no asterisks.
- Glossary rows below go to `book/glossary.qmd` in the glossary pass.

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Change talk | The patient voicing their own motivation to change | Behaviour-Change Counselling |
| Contemplation | The stage of change in which a patient is weighing a change up | Behaviour-Change Counselling |
| Habit | Automatic, context-cued behaviour that runs with little conscious thought; a routine repeated in a consistent context takes weeks to months to become automatic | Behaviour-Change Counselling |
| If-then plan (implementation intention) | A plan that decides in advance when and where to act on a goal, such as "if the stall auntie forgets, then I'll remind her siu dai" | Behaviour-Change Counselling |
| Motivational interviewing (MI) | A collaborative way of talking that draws out the patient's own reasons to change instead of supplying the clinician's | Behaviour-Change Counselling |
| OARS | The four micro-skills of motivational interviewing: open questions, affirmations, reflective listening and summaries | Behaviour-Change Counselling |
| Pre-contemplation | The stage of change in which a patient has not yet thought about changing | Behaviour-Change Counselling |
| Preparation (stage of change) | The stage of change in which a patient is ready to plan a change | Behaviour-Change Counselling |
| Righting reflex | The near-irresistible urge to jump in and fix, warn or lecture; it feels helpful but reliably provokes resistance | Behaviour-Change Counselling |
| Scaling question | A question asking the patient to rate their confidence in a change from 0 to 10, and what makes it that number and not lower | Behaviour-Change Counselling |
| SMART goal | A goal that is specific, measurable, achievable, relevant and time-bound | Behaviour-Change Counselling |
| Stages of change | A heuristic model that names a patient's points of readiness to change (including pre-contemplation, contemplation and preparation), used to tailor how the clinician talks; it does not predict success | Behaviour-Change Counselling |
| Weight-neutral language | Counselling language that centres on sustainable eating patterns and how the patient feels more than on body weight | Behaviour-Change Counselling |

Terms used here but owned elsewhere (unbolded, reminder gloss only where needed): 5 A's (*Assessing
Diet & Talking to Patients*), reward system and wanting (*Appetite & Weight Regulation*), Nutri-Grade,
My Healthy Plate and War on Diabetes (*Why Nutrition Matters*), food environment (*What a Healthy Diet
Looks Like*), HbA1c (*Type 2 Diabetes*), simulated patient (*Everyday & Preventive Counselling*).

## Owner terms from term-ownership.md that do not occur in this chapter

None: all 13 terms assigned to behaviour-change-counselling occur in the chapter.

## Fix round 1

All 32 verifier issues (7 major, 25 minor) handled; files touched are the same four. Several restore wording or
hedges that the first pass had trimmed (the trims changed meaning and were not logged).

### Content fixes (before -> after, reason)

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| case | q-open a (keyed line) | "The kopi keeps you going, and the sugar's on your mind too. OK if we talk about it?" | "The kopi keeps you going, and it sounds like the sugar's a bit on your mind too. OK to talk about it?" | Restores the tentative complex reflection ("it sounds like", "a bit"); the flat version asserted a feeling he had not voiced, and differed from island t1 / quiz q1 |
| case | q-changetalk a (keyed line) | "It took something to say that. Watching your dad makes this feel real." | "That shows how much you want to stay well for your family. Watching your dad makes this real." | Restores the values affirmation that the feedback credits and that prompts his "daughter's getting married" reply; generic opener cut instead |
| chapter | CY after The conversation, title | ...comes from programmes of a dozen or more sessions. | ...comes from intensive, multi-contact programmes, often a dozen or more sessions. | Restores the chapter's hedge ("effectiveness", "often"); the number stays deferred (concern 3) |
| chapter | CY after Do no harm, title | structured weight management | structured behavioural weight management | Matches the cited claim [@jebeile2023edrisk]; without "behavioural" the reassurance widened to drug/surgical programmes |
| quiz | q7a feedback | structured weight management | structured behavioural weight management | As above (the round-0 fix had not matched the chapter's wording) |
| case | q-safety a feedback | structured weight management | structured behavioural weight management | As above |
| chapter | MI, righting reflex | MI also asks for a restraint: resisting the righting reflex | MI's central move is a restraint: resisting the righting reflex | Restores the priority claim (not meta); agrees with island t1 ("the core of motivational interviewing") |
| chapter | 🍜 callout, last sentence | A change that fits the family meal survives. | A change that fits the family meal survives; one that fights it fails. | Restores the dropped half of the contrast |
| chapter | Fitting the goal, para 1 | a small, culturally familiar shift in what the patient orders there | a small, culturally familiar shift | Removes an unlogged narrowing to ordering (the section also covers the family meal) |
| chapter | Levers paragraph | One is the patient's own motivation | One is eliciting the patient's own motivation | Restores the clinician's action (bridge to MI) |
| chapter | CY after Tailoring, title + last sentence | why is co-setting a SMART goal with a patient in pre-contemplation unlikely to work...? / ...because the evidence for the model is low-certainty. | a patient in pre-contemplation has not yet thought about changing. Why does co-setting a SMART goal not fit yet...? / The stage guides how to talk, not whether the patient will succeed: the evidence that the model produces sustained weight loss is low-certainty. | Title no longer uses the stage to predict failure (chapter: hold the model loosely); evidence statement narrowed back to the cited scope [@mastellos2014ttm]. Answer's first sentence reworded ("The patient has voiced no change yet...") so it does not repeat the new title |
| quiz | q6a feedback | ...not to label them or forecast success. | ...not to label them or forecast success. Present it as a tool, not a proven fact. | Restores the dropped caveat that echoes the chapter callout |
| quiz | q6b feedback | ...is low-certainty, so it cannot forecast who will succeed. | ...is low-certainty, and the model is not a proven predictor of who will succeed. | Drops the unlogged inference from weight-loss evidence to prediction; matches the chapter's "not a proven predictor" |
| quiz | q6c feedback | It is an organising heuristic, not a validated predictor or a proven-best method. | It is an organising heuristic: even the evidence that it produces sustained weight loss is low-certainty, so it is far from a proven-best method. | Wrong-answer feedback now gives the evidence (§11g). Deviates from the verifier's text, which said "so it is neither a validated predictor nor..." and would have re-created the weight-loss -> prediction inference removed from q6b (deferred concern 2) |
| quiz | q2c feedback | Resistance like this is sustain talk, often a sign... | Resistance or sustain talk like this is often a sign... | Undoes the over-definite equation. The verifier's text ("This is resistance or sustain talk...") would open with the same word as q2b ("This is sustain talk"), breaking the no-consecutive-openers rule, so the word order was kept |
| case | q-changetalk c feedback | A data question pulls... | Not wrong, but a data question pulls... | Restores the hedge: the HbA1c question is mistimed, not wrong |
| response-chooser | t2 closed feedback | A data question pulls... | Not wrong, but a data question pulls... | As above (matches the tier-ok badge) |
| response-chooser | t1 open feedback | a respectful opener | a safe, respectful opener | Restores the dropped word (the claim itself is still deferred, concern 4) |

### Style, cohesion and structure fixes

- Opener: "A brief consult has to draw out..." -> "A brief consult needs a structure; it has to draw out..."
  (previews the 5 A's movement again).
- Chapter map node 1: "[Why knowledge is not enough: reward and habit](#sec-knowledge): motivation and habit are the
  levers" -> "[Why knowledge is not enough](#sec-knowledge): reward, habit and the two levers" (no double colon).
- Righting-reflex paragraph: the {.example} box now follows the sentence it illustrates ("...reliably provokes
  resistance."); "MI does the opposite..." is a new paragraph after the box.
- Antithesis load: "the acronym is a scaffold, not a guarantee" -> "the acronym is only a scaffold"; "endorsed local
  practice, not an import." -> "endorsed local practice."
- Singapore picture: the two-sentence opener merged into one ("The HPB–MOH clinical practice guidelines already build
  brief lifestyle counselling on the 5 A's and MI-style engagement [@hpbMohCPG; @sgObesityBMI], so the approach is
  endorsed local practice."); both citations stay on the claim. "The War on Diabetes framing, with its higher risk
  among some ethnic groups, is a cue to tailor." -> "The War on Diabetes framing draws attention to a higher risk
  among some ethnic groups, which is a cue to tailor."
- "The best of these shifts also travel with the patient's social world." -> "The shifts that last also involve the
  people the patient eats with."
- CY after Tailoring (hawker centre) answer rewritten with the chapter's own habit mechanism (no new claims): the
  hawker centre is the setting that cues eating habits; a goal to stop going fights habit and food environment, so it
  is soon dropped; a swap inside an existing ritual changes only the order; repeated in the same context it can become
  automatic; plus the family-meal line. Kept rather than cut, so the movement still has two Check yourself questions
  (the §11j maximum).
- Close: step list replaced by the principle: "A change starts when the patient hears their own reason for it and
  leaves with one small step they chose, planned around the obstacle and followed up. It stays safe while the
  language stays kind and the clinician keeps watching for restriction, ready to pause the goal and refer." The
  verifier's single long sentence was split in two, and "ready to pause the goal and refer" keeps the referral point
  of the old close.
- Quiz q1c: "Avoidance isn't needed: the topic can be raised with permission and reflection, without either
  lecturing or ignoring it." -> "Avoidance isn't the answer either: permission and reflection let you raise the topic
  without lecturing." (the verifier's text kept the odd "raised... without ignoring it"; dropped).
- Quiz q2a: "His own reason to change is change talk." -> "The statement voices his own reason to change, which is
  change talk."
- Quiz q7a option: "Pause the weight and portion goals, gently screen, and consider referral" (72 chars) -> "Pause
  the weight goals, screen gently and consider referral" (59; distractors 67 and 41). "Weight and portion goals"
  moved into the feedback ("...so pause the weight and portion goals and offer support and referral.") so the
  chapter's wording is not lost.
- response-chooser t1 righting feedback: "Resisting this urge is the core of the style." -> "Resisting the urge to fix is the
  core of motivational interviewing." (antecedent; island data is read on its own).
- Siu dai gloss row added to the round-0 content-fix table above.
- Long lines reflowed in the levers, SMART and Singapore paragraphs (no wording change).

### Known trade-off (not changed)

- Restoring the two keyed case lines makes each the longest option in its question: q-open (about 104 chars vs 78
  and 60) and q-changetalk (about 97 vs 59 and 38). The skill each line models (tentative reflection; values
  affirmation) outranks equal length, and distractors were not padded (§11g). The author may trim further without
  losing the hedge or the family clause.

### Checks after round 1

| Check | HEAD | After round 1 |
|---|---|---|
| Citation multiset | 16 keys, 17 occurrences | identical (diff empty) |
| data-island | 3 | 3 |
| Callouts | 3 | 10 (unchanged from round 0) |
| Tables / figures | 0 / 0 | 0 / 0 |
| {#sec-/#fig-} ids at HEAD | none | n/a; all chapter-map anchors resolve |

Copy audit (`--you`, four files): 0 flags; qmd 0 em dashes, bold 5.3 per 1,000 words, 1 "rather than", 14 "you"
(all clinician-in-practice, island instruction, quoted speech or the close heading). js-yaml loads all three YAML
files. `node scripts/validate-cases.mjs`: all OK, exit 0. Not run: render, check-assets (forbidden in this step).

## Fix round 2

All 16 verifier issues (2 blockers, 1 major, 13 minors, including the optional dopamine-sentence join) applied.
Two case options use a variant of the verifier's text (q-changetalk a, q-safety a; reasons in the table). Files
touched: the same four.

### Content fixes (before -> after, reason)

| File | Location | Before | After | Reason |
|---|---|---|---|---|
| quiz | q6 keyed option | It is a useful heuristic, not a reliable predictor of success | It is a useful heuristic but doesn't reliably predict sustained weight loss | Blocker. Round 0 widened the keyed claim from sustained weight loss (HEAD: "doesn't reliably predict who will sustain weight loss") to "success" and logged it only as a trim. Scope restored to HEAD's, which is the scope of @mastellos2014ttm (decision 1). 75 chars vs distractors 63 / 57. Deferred concern 2 reworded above so it quotes the callout and q6 feedback, not this option |
| chapter | The Singapore picture, para 2 | The War on Diabetes framing draws attention to a higher risk among some ethnic groups, which is a cue to tailor. The aim is to meet a Malay, Indian or Chinese patient inside their own food culture instead of handing everyone the same script [@mohWarOnDiabetes]. | The War on Diabetes framing draws attention to a higher risk among some ethnic groups, a cue to tailor: to meet a Malay, Indian or Chinese patient inside their own food culture instead of handing everyone the same script [@mohWarOnDiabetes]. | Blocker. The round-0 split left the sourced claim (framing, higher risk) without its key; one sentence again, so the key covers the whole claim as at HEAD. Multiset unchanged |
| chapter | Why knowledge is not enough, para 2 | ...a dopamine-driven pull toward palatable food. Food cues, such as the sight, smell or advertisement of a snack, trigger that pull, and it can override... [@berridge2009dissecting; @volkow2017dopamine]. | ...a dopamine-driven pull toward palatable food; food cues, such as the sight, smell or advertisement of a snack, trigger that pull, and it can override... [@berridge2009dissecting; @volkow2017dopamine]. | Minor (verifier: optional; applied). The keys sit in the same sentence as the dopamine/wanting claim again, as at HEAD; the semicolon keeps the two clauses distinct (39 words) |
| chapter | close | It stays safe while the language stays kind and the clinician keeps watching for restriction, ready to pause the goal and refer. | It stays safe while the language stays kind and weight-neutral and the clinician keeps watching for red flags, ready to pause the goal and refer. | Restores HEAD's "weight-neutral"; the trigger is the chapter's whole red-flag list again (restriction alone was one of three: skipping meals, guilt or secrecy, a driven pursuit of thinness) |
| chapter | CY hawker centre, first two sentences | The hawker centre and the *kopitiam* are the setting that cues the patient's eating habits. A goal to stop going there fights both the habit and the food environment, so it is soon dropped. | The hawker centre and the *kopitiam* are the patient's food environment. A goal to stop going there fights the patient's real world, and a goal that does that loses. | Removes a round-1 inference beyond the chapter text (a cueing setting; "soon dropped"); now the chapter's own claim ("A goal that fights the patient's real world loses"). Rest of the answer unchanged |
| chapter | CY righting reflex, second sentence | It feels helpful but reliably provokes resistance, so the patient digs in. | It supplies the doctor's reason to change, but the lever that moves behaviour is the patient's own motivation, so the warning provokes resistance and he digs in. | The answer restated the question; it now gives the chapter's mechanism (the reason to change has to come from the patient; MI draws out the patient's reasons instead of supplying the clinician's) |
| chapter | CY pre-contemplation, last sentence | The stage guides how to talk, not whether the patient will succeed: the evidence that the model produces sustained weight loss is low-certainty. | (deleted) | Did not answer the question (why a SMART goal does not fit yet), repeated the callout, and its colon presented weight-loss evidence as the reason the stage cannot predict success (the inference deferred as concern 2). Answer now 2 sentences |
| case | q-open a (keyed) | "The kopi keeps you going, and it sounds like the sugar's a bit on your mind too. OK to talk about it?" (103) | "It keeps you going, and it sounds like the sugar worries you a bit. OK to talk?" (81; b 77, c 61) | Major: the keyed option was the longest in every case MCQ, so always picking the longest scored 4/4 (§11g equal length). Verifier's text. Keeps the tentative two-sided reflection and the permission request; "the sugar worries you a bit" now matches quiz q1 feedback and island t1. Feedback unchanged |
| case | q-changetalk a (keyed) | "That shows how much you want to stay well for your family. Watching your dad makes this real." (95) | "That shows how much your family matters. Seeing your dad makes this feel real." (80; b 60, c 39) | Major (trim) plus minor ("feel"). The verifier's trim ("...Seeing your dad made it real.", 72) also lacked "feel", which would have kept the minor issue's problem (a statement by the clinician in place of a reflection of his feeling). Applied the verifier's first sentence and "makes this feel real" (matches island t2 and HEAD), at 8 chars over the verifier's version. Feedback unchanged (affirmation plus reflection) |
| case | q-safety a (keyed) | Pause the kopi goal, ask gently about the skipping and guilt, and consider referral. (84) | Pause the kopi goal, ask gently about the skipping and consider referral. (73; b 76, c 61) | Major (trim). The verifier's "ask gently about it" (63) would leave "the kopi goal" as the nearest antecedent of "it" (§11j: repeat the key noun, not "it"); "the skipping" keeps the noun, and the option is no longer the longest. Feedback unchanged (it names meal-skipping and guilt, and "screen gently and refer") |

### Style, cohesion and structure fixes

- Opener, second sentence: "A brief consult needs a structure; it has to draw out the patient's own motivation, turn a vague wish
  into one concrete goal, and do it without causing harm." -> "A brief consult has to give that conversation a structure,
  draw out the patient's own motivation, turn a vague wish into one concrete goal, and do it without causing harm." (one
  semicolon left, in the first sentence).
- 5 A's caveat: "The more intensive, multi-session programmes that shift outcomes are discussed with diabetes prevention
  (see the [*Type 2 Diabetes*](type-2-diabetes.qmd) chapter)." -> "The more intensive, multi-session programmes that do
  shift outcomes belong to diabetes prevention (see the [*Type 2 Diabetes*](type-2-diabetes.qmd) chapter)." The passive
  described where the text is (§11g, the book never acts); "do" restores HEAD's emphasis ("actually"). Checked: the
  *Type 2 Diabetes* chapter covers the Diabetes Prevention Program's multi-session curriculum, so the pointer is right.
- "Much of what we eat is also **habit**" -> "Much of what people eat is also **habit**" (§11g: "we" is for shared reasoning;
  matches the Check yourself answer).
- SMART, two rules: one 35-word sentence -> "The goal must be the patient's, because an over-engineered goal they did not choose
  won't stick. It should also be small: one achievable change beats five aspirational ones." (§11j, one idea per sentence).
- Heading: "### Motivational interviewing: elicit, don't argue {#sec-mi}" -> "### Motivational interviewing: drawing out the
  patient's reasons {#sec-mi}" (§11h, no imperative headings; matches "Fitting the goal to daily life"). Id kept; chapter-map
  node "Motivational interviewing" unchanged.
- Check yourself title (movement 1): "a patient knows his sweet kopi is bad for him" -> "a patient knows he should cut down his
  sweet kopi" (the chapter teaches "There are no 'good' and 'bad' foods").
- The two Check yourself callouts at the end of The conversation swapped: 5 A's question first, then the righting-reflex
  question (movement order). Answers otherwise as above.
- response-chooser t1 closed feedback: "It is useful later, not as the move that gets the conversation going." -> "It is
  useful later, but it is not the move that gets the conversation going." (parallel grammar).

### Notes

- The round-1 "Known trade-off" is superseded by the three case trims. Option lengths now (keyed vs distractors): q-open
  81 vs 77 / 61; q-changetalk 80 vs 60 / 39; q-goal 64 vs 57 / 43 (not flagged, unchanged); q-safety 73 vs 76 / 61. Always
  picking the longest option now scores 3/4, as it would with the verifier's exact texts. The q-changetalk gap is the cost
  of keeping the affirmation plus the reflection of feeling; distractors were not padded (§11g).
- Not changed: the close does not say "ask before you advise" (noted in the verifier's problem text but not in its fix;
  the body keeps permission in the 5 A's Advise step, the MI section and the case).
- No new deferred content concerns.

### Checks after round 2

| Check | HEAD | After round 2 |
|---|---|---|
| Citation multiset | 16 keys, 17 occurrences | identical (diff empty) |
| data-island | 3 | 3 |
| Callouts | 3 | 10 (unchanged from rounds 0 and 1) |
| Tables / figures | 0 / 0 | 0 / 0 |
| {#sec-/#fig-} ids at HEAD | none | n/a; all nine chapter-map anchors resolve |

Copy audit (`--you`, four files): 0 flags; qmd 0 em dashes, bold 5.3 per 1,000 words, 1 "rather than", 14 "you" (the same
set as round 1: clinician-in-practice, island instruction, quoted speech or the close heading). js-yaml loads all three YAML
files. `node scripts/validate-cases.mjs`: all OK, exit 0. Not run: render, check-assets (forbidden in this step).
