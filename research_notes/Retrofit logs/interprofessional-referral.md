# Retrofit log: *Interprofessional Practice & Referral*

Files: `book/chapters/interprofessional-referral.qmd`, `book/diagrams/advise-refer.yml`,
`book/quizzes/interprofessional-referral.quiz.yml`, `book/cases/refer-or-advise.case.yml`.
Plan followed: `retrofit-plans/interprofessional-referral.md`, except where noted (overrides from
retrofit-decisions.md / term-ownership.md).

## Gate (HEAD -> working copy)

- Citation multiset: IDENTICAL (13 keys, same counts; `diff` empty).
- Islands 3 -> 3; figures 1 -> 1 (`#fig-hsg-ecosystem` kept, caption unchanged); tables 0 -> 0.
- Callouts 2 -> 8 (+1 Learning objectives, +5 Check yourself).
- IDs: HEAD had only `{#fig-hsg-ecosystem}`, still present. New ids: sec-overview, sec-scope,
  sec-role-limits, sec-advice-therapy, sec-referral-triggers, sec-referral-team, sec-referral-letter,
  sec-care-team, sec-clinician-health, sec-singapore, sec-close, sec-quiz, sec-case. All chapter-map
  links resolve.
- copy-audit on all four files: 53 flags -> 0. Chapter: 0 em dashes, bold 43.1 -> 2.3 per 1,000 words,
  "rather than" 4 -> 1, "you" 43 -> 8 (H1; "Treat all advice as MNT and you freeze…"; "your job is to spot
  them"; "the patient in front of you"; the Practise instruction).
- YAML (js-yaml) OK for all three data files; `validate-cases.mjs` exit 0 (refer-or-advise OK).

## Summary of changes

Chapter
- Opener rewritten to third person, emphasis bold out. Learning objectives (6) and a three-branch
  chapter map added.
- At a glance renamed ("Interprofessional practice at a glance"); bold-label inline-header list ->
  parallel gerund list with a full lead-in; closing summary sentence ("The throughline is…") deleted.
- Headings: "Knowing your limits: advise, or refer" -> "Scope of practice: advise or refer";
  "Knowing where your role ends" -> "Where the clinician's role ends"; "Nutrition is a team sport" ->
  "The nutrition care team"; "Physician, mind thyself" -> "The clinician's own health: physician, mind
  thyself"; "Where does your role end?" -> "Where does a clinician's role end?". Ids on every ##/###.
- Movement intros deleted (two: "Safe care starts with…", "A hand-off is only as good as…").
- Scope paragraph: defining bold **Scope of practice** + gloss; topic sentence first; chapters no longer
  the actor; one "rather than" removed; emphasis bold removed.
- Advice vs therapy: inline-header bullets -> definition list (Universal advice; MNT), arrows ->
  words, em dash out, "RD" abbreviation dropped chapter-wide; HbA1c outcome sentence split out.
  HbA1c left UNBOLDED with its plain gloss (term-ownership: owner is *Type 2 Diabetes*; overrides the
  plan's Uncertainty 1 recommendation).
- Referral triggers: topic sentence first, bold out, items parallel; "GI" spelled out; "Part IV"
  pointer removed (see content fix 2); Undernutrition pointer in parenthesis form.
- Referral callout: bold labels out, "e.g." -> "such as", slash -> "or", eGFR expanded (unbolded;
  owner *Chronic Kidney Disease*).
- Care team: five-bold semicolon sentence -> bulleted list of five parallel roles + the cited sentence.
- DiRECT/DPP paragraph: "you may have met" removed (first appearance in reading order), both trials
  named in full, pointer to *Type 2 Diabetes*, split into two paragraphs; cross-reference retargeted
  (content fix 1).
- Clinician's-own-health movement: 165-word paragraph split in two; third person; uncited "the one
  clinicians skip" generalisation dropped; chapter-as-actor -> parenthesis; bold out; second antithesis
  ("not a box to tick once") dropped; ill-formed "burnout is a longitudinal skill" repaired to "guarding
  against burnout is a longitudinal skill" (wording only; source question deferred).
- STRUCTURE (decision 4): the clinician's-own-health movement was moved, whole, from after the Singapore
  picture to before it, giving the §11c order movements -> Singapore -> close (the plan had kept the
  old order; decision 4 overrides). Prose unchanged by the move.
- Singapore picture: split into four paragraphs; Healthier SG unbolded with a brief gloss + pointer to
  *Why Nutrition Matters*; defining bolds kept only for Health Plan, social prescriptions, tiered
  dietitian pathway, Healthier SG Chronic Tier; "actually"/"deliberately"/"One caveat to flag" removed;
  CHAS expanded; slashes -> lists; "Teach the pathway and the principle" (author's note) -> "Explain the
  pathway and the principle to patients, and check current figures before quoting them."
- Close rewritten to answer the question (no summary, no next-chapter announcement).
- Practise intro trimmed to the pilot's two-sentence form (detail lives in the case intro node);
  progress callout em dash -> semicolon.
- 5 Check yourself callouts (2 + 2 + 1), collapsed, why/what-follows questions, answers from chapter
  text, no citations.

Diagram (`advise-refer.yml`, plain text)
- `intro` field deleted (repeats the chapter instruction sentence and the component's built-in hint;
  decision 9). All 9 em dashes removed; "early CKD" -> "early kidney impairment"; "polypharmacy" ->
  "three medicines" (content fix 3); minor grammar ("is required", "is needed").

Quiz
- All feedback opens with the explanation (no "Correct —", "No —", "Not quite —", "Overstated —", "Too
  dismissive —", "The opposite —", "The evidence suggests otherwise —"); 0 em dashes; no consecutive
  repeated opening words (Diabetes · This · Swapping · A · Referral · Individualised · MNT · That · A ·
  The · Dietitians · Team-based · Healthier · The · Healthier · DiRECT's · Those · Diet · Clinicians ·
  The · A).
- q1a "early CKD and polypharmacy" -> "early kidney impairment, on three medicines"; q3a arrows
  "assess–diagnose–intervene–monitor" -> "cycle of assessment, diagnosis, intervention and monitoring";
  q3b "freeze you" -> "leave a clinician too afraid"; q4 correct option trimmed ("reviews the patient's
  medicines"; no "her" referent in the stem); q4b metacommentary "Knowing the hand-offs is the point."
  deleted; q5 correct option trimmed to distractor length ("One enrolled family doctor and a
  personalised Health Plan"); q5a "each resident" -> "each enrolled resident"; q5b "Teach the pathway"
  -> "Explain the pathway, and check current figures"; q6 "DPP" spelled out, "genuinely" dropped; q7a
  "counsel more and more credibly" -> "counsel more often, and arguably more credibly" (matches chapter).

Case (`refer-or-advise.case.yml`, not a sim case)
- Objectives, intro, feedback, remedial, end bodies: all 20 em dashes removed; "Right —"/"Correct —"
  openings removed; "early CKD"/"+" -> words; "polypharmacy" -> "three medicines" (content fix 3);
  remedial body keeps one bold (stay in scope); end-good tag line "That is what … looks like." deleted;
  one "rather than" -> "without". Opening words: The · A · An · Reason · A · Burying · Safe · Specific ·
  That.

## Content fixes (decision 1 categories)

1. Chapter, care-team section (HEAD line 107). Before: "As the *Evidence vs Hype* chapter argued, don't
   promise those outcomes from advice alone." After: "Don't promise those outcomes from advice alone. The
   trial patients were selected, so the first question is whether a result applies to the patient in
   front of you (see the *Evidence vs Hype* chapter). The dose was intensive, and a single clinic visit
   does not deliver it (see the *Behaviour-Change Counselling* chapter)." Category: cross-reference to a
   chapter that does not cover the topic (Evidence vs Hype has "Check it applies" but no dose/advice
   argument; the dose caveat is in Behaviour-Change Counselling) — retargeted.
2. Chapter, referral triggers (HEAD line 64). Before: "(the conditions you'll meet in Part IV, the disease
   chapters that follow)". After: pointer dropped. Category: cross-reference to chapters that do not
   cover the topic (no Part IV chapter covers gastrointestinal disease; also a Part reference).
3. Diagram s2 `why`, quiz q1a feedback, case q-line a feedback, case end-good body, case end-good
   keyPoints[0]. Before: "polypharmacy" for a patient on three medicines. After: "three medicines".
   Category: contradiction with another chapter's explicit, cited definition (*Healthy Ageing*:
   "Polypharmacy, taking five or more medicines" [@kok2022polypharmacy]; term-ownership meaning "Taking
   five or more medicines"). NB the explicit ≥5 definition is in Healthy Ageing's working copy (its
   retrofit, in progress); HEAD Healthy Ageing used the word without a number.
4. Chapter, Singapore picture (HEAD line 112–113). Before: "gives every resident one enrolled family
   doctor". After: "Each enrolled resident has one family doctor". Also quiz q5a feedback "each resident"
   -> "each enrolled resident". Category: contradiction between the chapter and its own quiz (q5 stem:
   "every enrolled resident"); resolved to the enrolled-resident wording, which the HEAD phrase "enrolled
   family doctor" already implied. Confirm voluntary-enrolment nuance against @mohHealthierSG (deferred
   concern 1).

## Deferred content concerns (not changed; need a source check)

1. Singapore picture, Health Plan sentence: confirm against @mohHealthierSG that enrolment is voluntary
   and the wording "Each enrolled resident has one family doctor" matches the White Paper.
2. Singapore picture, social-prescriptions sentence: now its own sentence with no citation;
   @mohEatWiseSG (bib note: tiered dietitian pathway) stays on the tiered-pathway sentence. Check whether
   @mohHealthierSG covers social prescribing and cite it there if so.
3. Clinician's-own-health, last sentence: @lianov2010 (Lianov & Johnson 2010, JAMA, physician
   competencies for prescribing lifestyle medicine) may not support a burnout or patient-safety claim;
   the sentence was also ill-formed at HEAD ("burnout is a longitudinal skill") and is repaired in
   wording only.
4. Care team: "Team-based care is associated with better chronic-disease outcomes" is cited to two
   curriculum/competency documents (@aclm2022comp, @afn2021curriculum), not outcome studies.
5. @sleepRestriction and @spiegel2004sleep (used in *Appetite & Weight Regulation*) are the same paper
   (Spiegel et al. 2004, Ann Intern Med): duplicate bib entry.
6. @lobelo2015rolemodel: bib year 2016 (key says 2015; Epub 2014/2015). Cosmetic.
7. Case q-interim option a "note that Healthier SG follow-up is subsidised" (and feedback "subsidised
   Healthier SG pathway"): Chronic Tier subsidies are means-tested for CHAS/PG/MG cardholders, Mdm Tan's
   card status is not given, and the chapter says there is no dedicated dietitian subsidy line. Slight
   overclaim.
8. Polypharmacy fix (content fix 3) depends on Healthy Ageing keeping its ≥5-medicines definition; if
   that chapter's retrofit changes it, re-check.
9. Island scenario s2 "HbA1c 9%" vs case "HbA1c 9.1%": schematic scenario, not Mdm Tan; left as is.

## Deferred backlog

- Glossary rows below to be added to `book/glossary.qmd` by its owner (not edited here).
- §11f: the chapter has one figure (`#fig-hsg-ecosystem`); a referral-pathway or advise/refer teaching
  figure could be added later (no new figures in this pass).
- No 🔬🍜🍳 house blocks (skills-chapter exemption §11b; none at HEAD); none added.
- H1 "Interprofessional practice, referral and looking after yourself" keeps "yourself" and differs
  from the canonical name *Interprofessional Practice & Referral* (kept per plan; author may retitle).
- HbA1c: if the *Type 2 Diabetes* owner wants a forward pointer here, add "(see the *Type 2 Diabetes*
  chapter)" in a later pass; first use in reading order is *Behaviour-Change Counselling* (unglossed).
- Bib duplicate (@sleepRestriction / @spiegel2004sleep) and @lobelo2015rolemodel year: bib cleanup.

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Health Plan | The personalised plan that a resident enrolled in Healthier SG co-develops with their family doctor; the natural place to raise and refer a nutrition concern | Interprofessional Practice & Referral |
| Healthier SG Chronic Tier | The Healthier SG subsidy framework (from 2024) that gives enrolled cardholders means-tested subsidies on selected chronic medications and other care components | Interprofessional Practice & Referral |
| Medical nutrition therapy (MNT) | An individualised, therapeutic nutrition plan for a medical condition, delivered by a registered dietitian through a cycle of assessment, diagnosis, intervention and monitoring | Interprofessional Practice & Referral |
| Scope of practice | The care a clinician's role allows them to deliver and be accountable for; knowing the science does not extend it | Interprofessional Practice & Referral |
| Social prescription | A family doctor's referral of a patient to a community programme, such as Health Promotion Board activities, Active Ageing Centres or SportSG | Interprofessional Practice & Referral |
| Tiered dietitian pathway | The Healthier SG arrangement in which clinicians give first-line dietary advice and escalate complex cases to a registered dietitian | Interprofessional Practice & Referral |
| Universal advice | General nutrition guidance that is safe for almost anyone and that every clinician should give, such as My Healthy Plate | Interprofessional Practice & Referral |

Not owned here (unbolded in this chapter): HbA1c (*Type 2 Diabetes*), eGFR (*Chronic Kidney Disease*),
Healthier SG, My Healthy Plate, Nutri-Grade (*Why Nutrition Matters*), ghrelin, satiety (*Appetite &
Weight Regulation*), polypharmacy (*Healthy Ageing*), BMI (*Energy Balance*), malnutrition
(*Undernutrition & Malnutrition*), total diet replacement, remission (*Type 2 Diabetes*).

## Owner terms from term-ownership.md missing from this chapter

None: all seven owner terms (Health Plan, Healthier SG Chronic Tier, MNT, Scope of practice, Social
prescription, Tiered dietitian pathway, Universal advice) occur and are defined.

## Fix round 1

Verifier issues applied (files: chapter, quiz, case; diagram unchanged this round).

Chapter
- Care team, applicability sentence: "so the first question is whether a result applies to the patient
  in front of you" -> "so check whether a result applies to the patient in front of you" (removes an
  unsupported priority claim that contradicted *Evidence vs Hype*, where "Check it applies" is step 4).
- Singapore picture: social-prescription and tiered-pathway clauses rejoined into one sentence under
  [@mohEatWiseSG], as at HEAD (gloss in parentheses, the house pattern); the inference "The line between
  advising and referring is therefore built into the health system itself" is its own sentence (no
  factual claim). Deferred concern 2 updated below.
- Chronic Tier: eligibility merged into the cited sentence ("Enrolled holders of Community Health Assist
  Scheme (CHAS), Pioneer Generation and Merdeka Generation cards receive means-tested subsidies ...
  [@mohChronicTier]").
- HbA1c sentence rejoined, so the 0.3–2.0% figure carries [@ada2026standards] directly, as at HEAD.
- Close rewritten: no recap of the movements and no closing moral ("Knowing these limits is one of the
  clearest marks of a safe clinician." deleted). It now applies the accountability edge to two cases
  taken from the chapter's own quiz, island and case (the well adult and the brown-rice swap inside the
  role; newly diagnosed type 2 diabetes with early kidney impairment and three medicines beyond it) and
  ends on what the clinician still does beyond the edge (a complete referral, safe universal advice
  while the patient waits). No new facts.
- Opener: now two sentences; "hand-over" -> "hand-off" (the chapter's term); "good advice" restores
  HEAD's "advise well"; the own-health clause restores HEAD's instruction ("needs looking after"); the
  team item dropped from the opener (not an "edge"; it has its own movement).
- At a glance: the four-item roadmap list -> three orienting sentences of prose (the own-health sentence
  kept so HEAD's "plausibly, a credibility one" hedge is not lost).
- Scope paragraph: 36-word sentence split; the toolkit pointer in parenthesis form; HEAD caveat restored
  as "recognise it and refer, without overreaching to cover it" (avoids a second antithesis next to "not
  an admission of failure").
- Advice vs therapy lead-in: HEAD's "holding that line is the core skill here" restored.
- Chapter map: "universal advice or MNT" -> "universal advice or dietitian-led therapy" (MNT no longer
  used before its definition).
- Referral triggers: Part IV pointer retargeted instead of dropped (see content fix 2, revised).
- Care team: "The same point limits what nutrition advice alone can claim." -> "Because the whole is
  more than any one professional's slice, nutrition advice from one clinician cannot claim the team's
  results, and over-claiming them is a common trap." (cohesion, plus HEAD's over-claim caveat restored).
- DiRECT/DPP: the free-standing "Both trials return in the *Type 2 Diabetes* chapter." deleted; the
  pointer moved into a parenthesis after "The headline lifestyle results"; DiRECT expanded (Diabetes
  Remission Clinical Trial); total diet replacement glossed "(low-calorie formula meals in place of
  ordinary food for a period)", consistent with the owner's (*Type 2 Diabetes*) definition, unbolded;
  "(DPP)" dropped (never reused). The combined citation [@lean2018direct; @dpp2002] split so each key
  sits on its own trial's sentence (keys moved with their claims; multiset unchanged).
- Own health: HEAD's "the one clinicians skip" restored (deleting it was a content change; it is now a
  deferred concern instead, see 10); "sleep anchor" glossed "(a fixed bedtime or wake time)".
- Singapore picture: "has rolled out nationally since 2023" -> "has been rolled out since 2023"
  ("national ... nationally" repetition).
- Figure #fig-hsg-ecosystem moved up to sit after the Chronic Tier paragraph it illustrates, before the
  funding-caveat paragraph (caption unchanged).
- Practise intro: "Mdm Tan, 58, is enrolled with her Healthier SG family doctor. She has newly diagnosed
  type 2 diabetes with early kidney impairment and asks what she should eat now." (HEAD framing; the
  reader is no longer cast as that doctor).
- NOT changed: H1 "...and looking after yourself" (optional; a chapter-title change alters the sidebar
  and TOC, so it stays the author's call; still in the backlog).

Quiz
- q4 correct option "The pharmacist, who reviews the patient's medicines" -> "The pharmacist, as part of
  the care team" (removes the stem-echo cue; lengths 40/44/40).
- q6 correct option -> "Those results came from intensive programmes in selected patients" (65 vs
  70/59); its feedback now opens "The headline results came from intensive, team-delivered programmes."
  so the trimmed "team-delivered" is still taught (chapter text, no new claim).
- q7 correct option -> "They are associated with more preventive counselling" (52 vs 63/53); the
  "arguably more credibly" hedge stays in the feedback.

Case (`refer-or-advise.case.yml`)
- Intro node: last sentence ("Decide what is yours to do, ...") deleted; it repeated the chapter's
  Practise intro (decision 9). The body now ends at *"What should I eat now?"*
- Remedial body: emphasis bold on "stay in scope" removed (no bold left in the node).
- Option-length cue (the verifier noted the correct option was longest in 8 of 10 MCQs): q-line a "Refer
  her for a dietitian's individualised plan, and give safe general advice meanwhile." -> "Refer her to a
  dietitian, and give safe general advice meanwhile." (65 vs 67/83); q-referral a -> "Her diagnoses, key
  results, medicines, weight trend and goals." (61 vs 50/64); the full list, social context included,
  stays in the feedback. The correct option is now longest in 3 of 10 MCQs (quiz q1, q2 and q3,
  each by a small margin).

### Content fixes, revised and added (decision 1)

- Content fix 1 (revised). The added applicability sentence no longer claims priority: "so the first
  question is whether a result applies" -> "so check whether a result applies". Category unchanged
  (cross-reference retarget); the retargeted pointers stay.
- Content fix 2 (revised). Before (round 0): Part IV pointer dropped. After: "...or gastrointestinal
  disease (see the *Type 2 Diabetes*, *Chronic Kidney Disease* and *Cardiovascular Disease &
  Hypertension* chapters);". Category: cross-reference to chapters that do not cover the whole topic;
  retargeted to the three disease chapters that cover three of the four conditions (no chapter covers
  gastrointestinal disease, so it carries no pointer).
- Content fix 4 (reclassified). "Each enrolled resident has one family doctor" is resolved toward HEAD's
  own "one enrolled family doctor" wording (the chapter text), not toward the quiz. It is a
  source-dependent change: deferred concern 1 stays OPEN until @mohHealthierSG is checked.
- Content fix 5 (newly logged; made in round 0). Quiz q7a feedback. Before: "counsel more and more
  credibly". After: "counsel more often, and arguably more credibly". Category: contradiction between the
  chapter (cited to @lobelo2015rolemodel and @lianov2010, which says "arguably more credibly") and its
  own quiz; resolved toward the cited chapter text.

### Deferred content concerns, updated

- 1 (open): unchanged; see content fix 4.
- 2 (updated): the social-prescription claim is back in the same sentence as the tiered pathway, under
  [@mohEatWiseSG], as at HEAD. The bib note for @mohEatWiseSG describes only the tiered dietitian
  pathway, so check whether it (or @mohHealthierSG) supports social prescribing.
- 10 (new): own-health opening, "the one clinicians skip" (restored HEAD wording): an uncited
  generalisation about clinician behaviour. Check whether @lobelo2015rolemodel or @lianov2010 supports
  it; if not, cite a source or soften it.

### Gate and checks after round 1

- Citation multiset IDENTICAL to HEAD (13 keys, same counts). Islands 3 -> 3; figures 1 -> 1
  (#fig-hsg-ecosystem kept, moved within the Singapore picture); tables 0 -> 0; callouts 2 -> 8
  (unchanged from round 0: +1 Learning objectives, +5 Check yourself). All HEAD ids present; all
  chapter-map links resolve.
- copy-audit --you on the four files: 0 flags; chapter 0 em dashes, bold 2.3 per 1,000 words,
  "rather than" 1, "you" 8 (H1, the "Treat all advice as MNT and you freeze" pair, "your job is to spot
  them", "the patient in front of you", the Practise instruction): all clinician-in-practice or the
  title.
- js-yaml OK for the diagram, quiz and case; validate-cases.mjs exit 0 (refer-or-advise OK).

## Fix round 2

Verifier round-2 issues applied (files: chapter, quiz, case, diagram).

Chapter
- At a glance: the 36-word semicolon sentence split in two: "Brief, general, evidence-aligned advice is
  every clinician's work, and individualised therapy for a condition is a dietitian's. The care around a
  chronic condition is shared by a team, which Singapore's health system is built to support."
- Scope paragraph: the 15-word parenthesis between subject and verb removed: "That care draws on the
  toolkit of the *What a Healthy Diet Looks Like*, *Assessing Diet & Talking to Patients* and
  *Behaviour-Change Counselling* chapters, and the toolkit stops short of individualised therapy for a
  medical condition." Paragraph split at "Graduates consistently report..." (now 4 + 2 sentences; was 6
  sentences, 129 words).
- Referral triggers, first bullet: pointer reordered so it covers only the three conditions those
  chapters teach (content fix 10).
- Trigger close: HEAD's "not treatment cues" restored (content fix 8).
- Care team, second paragraph opener: "Because the whole is more than any one professional's slice,
  nutrition advice from one clinician cannot claim the team's results, and over-claiming them is a common
  trap." -> "That "more than one slice" cuts both ways: it is a common trap to over-claim the nutrition
  part of the team's results." (content fix 7). This also removes the word-for-word repeat of the
  previous paragraph's closing clause (verifier issue 9; see "Resolved by another fix" below).
- DiRECT sentence (39 words, two nested parentheticals) split in two: "In the DiRECT trial (Diabetes
  Remission Clinical Trial), diabetes remission ran on a structured total-diet-replacement programme, in
  which low-calorie formula meals replace ordinary food for a period. Its patients were selected: they
  had early type 2 diabetes and were not on insulin [@lean2018direct]." Key stays with the DiRECT claim.
- Own health, opener: "The last part of a clinician's scope is the one clinicians skip" -> "The last part of
  the role is the one clinicians skip: their own health." (keeps "scope of practice" to its defined
  sense, §11g one meaning per term). This paragraph and the next were re-wrapped (two over-long lines left
  by round 1; whitespace only).
- Chronic Tier: "(from 2024)" and the scheme's role moved back into the sentence cited to
  [@mohChronicTier] (content fix 9), as a colon join: "The **Healthier SG Chronic Tier** (from 2024) is
  the subsidy framework that keeps chronic-disease follow-up affordable: enrolled holders of Community
  Health Assist Scheme (CHAS), Pioneer Generation and Merdeka Generation cards receive means-tested
  subsidies of up to about 87.5% on selected chronic medications, with no dollar cap, plus up to about
  \$360 a year toward other care components such as consultations and tests [@mohChronicTier]."
  Deviation from the verifier's wording: its appositive form ("(from 2024), the subsidy framework ...,
  gives enrolled holders of ... cards means-tested subsidies ...") puts 10 words between subject and verb
  and a 12-word indirect object before the object. The colon form is the same single cited sentence (same
  coverage) with the "X is Y" definition pattern and a visible break.
- Funding caveat: "The published scheme centres on" -> "The published Chronic Tier scheme centres on"
  (referent across the figure); "Explain the pathway and the principle to patients" -> "Explain the
  referral pathway and the advise-or-refer principle to patients".

Quiz
- q2 stem: \"please advise on diet.\" -> \"please advise on diet\". (British punctuation, matching the
  chapter's Check yourself title and the case keyPoint).
- q4 correct option: "The pharmacist, as part of the care team" -> "The pharmacist, working alongside the
  doctor" (44 characters vs distractors 44/40; removes the stem echo). Deviation from the verifier's "The
  pharmacist, alongside the doctor and nurse": that text is 46 characters, not 41, so it would make the
  correct option the longest. "X, alongside Y and Z" also reads naturally as "X together with Y and Z",
  i.e. as naming the doctor and nurse as sharing the core medication-review role, which contradicts the
  chapter's role list (doctor coordinates, nurse monitors and educates) and the option's own feedback.
  "working alongside" attaches the phrase to the pharmacist.
- q4 correct feedback: "The pharmacist reviews medications, ..." -> "The pharmacist reviews and reconciles
  medications, ..." (content fix 11).
- q7c feedback: hedge restored (content fix 6).
- Feedback opening words still never repeat consecutively (... A · The · Dietitians · Team-based ·
  Healthier ... Diet · Clinicians · The · Evidence). Option lengths: q4 now 44*/44/40.

Case (`refer-or-advise.case.yml`, not a sim case)
- remedial body: "The through-line: recognise that her complexity crosses into medical nutrition therapy and
  refer;" -> "Her complexity crosses into medical nutrition therapy, so recognise it and refer;"
  (metacommentary label removed; rest of the body unchanged, re-wrapped).
- end-partial keyPoints[1]: "Write a complete referral, not \"please advise on diet.\"" -> "Write a complete
  referral, not \"please advise on diet\"." (British punctuation; chapter, quiz and case now agree).

Diagram (`advise-refer.yml`, plain text)
- s2 patient: "(eGFR 52)" -> "(eGFR, an estimate of kidney filtration, 52)". Gloss (decision 2): the island
  is where the reader first meets eGFR in reading order (no earlier chapter uses it; the chapter's
  referral callout expands it later). Deviation: "an estimate of" in place of the verifier's "a measure
  of", matching the owner's (*Chronic Kidney Disease*) meaning ("An estimate of kidney filtration") and the
  "estimated" in eGFR. The callout's full expansion (estimated glomerular filtration rate, eGFR) stays.

### Not applied

- Verifier issue 3 (colon-join the general "team-delivered, intensive programmes" claim to both trial
  sentences so the keys cover it): conflicts with issue 11 on the same passage. The join would rebuild one
  sentence of about 75 words with three parentheticals (two nested), which issue 11 and the §11j lint
  (~25 words) ask to split; issue 11 was applied instead. Each key may appear only once (the gate requires
  an identical multiset), so the topic sentence cannot carry its own copy. It now opens a paragraph whose
  next sentences, both cited, show "intensive" (structured total diet replacement in selected patients
  [@lean2018direct]; a 16-session curriculum [@dpp2002]). "team-delivered" is not restated in them:
  deferred concern 11.

### Resolved by another fix

- Verifier issue 9 (word-for-word repeat of "the whole is more than any one professional's slice" across
  the paragraph break): fixed by issue 2's wording on the same sentence. Issue 9's own proposed wording
  ("For the same reason, nutrition advice from one clinician cannot claim the team's results ...") was not
  used, because it keeps the absolute bar that issue 2 asks to remove.

### Content fixes, round 2 (decision 1)

6. Quiz q7c feedback. Before: "A clinician's own habits track with counselling behaviour and credibility,
   and short sleep affects their own metabolic health too." (round 0 deleted HEAD's opener "The evidence
   suggests otherwise", and the hedge went with it; not logged then). After: "Evidence suggests a
   clinician's own habits track with counselling behaviour and credibility, and short sleep affects their
   own metabolic health too." Category: contradiction between the quiz and its chapter's cited text
   ("arguably more credibly"; "The evidence is associational, not proof of cause" [@lobelo2015rolemodel;
   @lianov2010]) and q7a's own feedback; resolved toward the cited chapter text (HEAD's hedge restored).
7. Chapter, care team. Before (round 1): "Because the whole is more than any one professional's slice,
   nutrition advice from one clinician cannot claim the team's results, and over-claiming them is a common
   trap." After: "That "more than one slice" cuts both ways: it is a common trap to over-claim the nutrition
   part of the team's results." Category: round 1 had turned HEAD's warning against over-claiming the
   nutrition share into an absolute bar with a different subject; HEAD's claim restored (no source check
   needed).
8. Chapter, referral-trigger close. Before (round 0/1): "These are recognition triggers: your job is to
   spot them and hand over, and the dietitian works up the plan." After: "These are recognition triggers,
   not treatment cues: your job is to spot them and hand over, and the dietitian works up the plan."
   Category: HEAD's explicit do-not-treat instruction (the recognise-and-refer safety point) restored.
9. Chapter, Chronic Tier. Before (round 1): "(from 2024)" and "the subsidy framework that keeps
   chronic-disease follow-up affordable" in an uncited sentence of their own. After: both back in the
   sentence cited to [@mohChronicTier], as at HEAD (wording above). Category: citation coverage of a dated
   policy fact restored (a key may move only with its claim).
10. Content fix 2, revised again. Before (round 1): "... chronic kidney disease, cardiovascular disease or
    gastrointestinal disease (see the *Type 2 Diabetes*, *Chronic Kidney Disease* and *Cardiovascular
    Disease & Hypertension* chapters);". After: "... chronic kidney disease or cardiovascular disease (see
    the *Type 2 Diabetes*, *Chronic Kidney Disease* and *Cardiovascular Disease & Hypertension* chapters),
    or gastrointestinal disease;". Category: cross-reference read as covering a topic its chapters do not
    cover (no chapter covers gastrointestinal disease).
11. Quiz q4 feedback. Before (round 1): "The pharmacist reviews medications, ...". After: "The pharmacist
    reviews and reconciles medications, ...". Category: HEAD content ("who reviews and reconciles her
    medicines", in the HEAD correct option) lost in round 1's length trim; restored in the feedback.

### Deferred content concerns, updated

- 11 (new): care team, "The headline lifestyle results (see the *Type 2 Diabetes* chapter) came from
  team-delivered, intensive programmes, not a clinic chat." is a topic sentence without its own key
  (verifier issue 3 not applied). "intensive" is supported by the two cited sentences after it;
  "team-delivered" is not restated there. Check whether @lean2018direct and @dpp2002 describe delivery
  by a team. If they do, either add that delivery detail to the trial sentences or accept the topic
  sentence as their summary. If they do not, soften "team-delivered" (it also appears in the Check
  yourself answer and in quiz q6a's feedback).

### Deferred backlog, added

- Chronic Tier sentence is long (about 62 words: a 16-word definition clause and a 46-word details clause
  joined by a colon). The only split that keeps both clauses cited needs a second @mohChronicTier key,
  which this retrofit's gate does not allow; leave it for the author.

### Gate and checks after round 2

- Citation multiset IDENTICAL to HEAD (13 keys, same counts; diff empty). Islands 3 -> 3; figures 1 -> 1
  (#fig-hsg-ecosystem); tables 0 -> 0; callouts 2 -> 8 (unchanged since round 0: +1 Learning objectives,
  +5 Check yourself). The HEAD id #fig-hsg-ecosystem is present; all 8 chapter-map links resolve.
- copy-audit --you on the four files: 0 flags; chapter 0 em dashes, bold 2.3 per 1,000 words, "rather
  than" 1, "you" 8 (same set as round 1: H1, the "Treat all advice as MNT and you freeze" pair, "your job
  is to spot them", "the patient in front of you", the Practise instruction).
- js-yaml OK for the diagram, quiz and case; validate-cases.mjs exit 0 (refer-or-advise OK).
- Line endings unchanged (CRLF throughout, as at HEAD).
