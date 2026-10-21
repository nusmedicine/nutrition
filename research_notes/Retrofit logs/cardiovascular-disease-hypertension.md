# Retrofit log: Cardiovascular Disease & Hypertension

Files changed (only these):

- book/chapters/cardiovascular-disease-hypertension.qmd
- book/diagrams/fat-swap.yml
- book/quizzes/cardiovascular-disease-hypertension.quiz.yml
- book/cases/mr-chua-cvd.case.yml

## Summary of changes

Chapter (followed the plan, with two overrides noted below):

- Opener: plain 4-line blockquote with meta ("What matters here is…") replaced by one italic blockquote of
  two sentences (insulin resistance / abnormal lipids → raised blood pressure and furred arteries; leading
  cause of death in Singapore; diet-modifiable via hawker salt and cooking-oil fat).
- Added Learning objectives callout (6 verb phrases) and a 4-branch chapter map linked to new section ids.
- Section ids added to every `##`/`###`: #sec-overview, #sec-cvd-science, #sec-cvd-pressure, #sec-cvd-dash,
  #sec-cvd-sodium, #sec-cvd-artery, #sec-cvd-fat, #sec-cvd-fish, #sec-cvd-mediterranean, #sec-cvd-alcohol,
  #sec-singapore, #sec-close, #sec-quiz, #sec-case. OVERRIDE of the plan's ids: the plan's #sec-dash and
  #sec-mediterranean already exist in dietary-guidelines-patterns.qmd, so all chapter-specific ids carry a
  `cvd-` prefix to avoid book-wide duplicate labels (generic overview/singapore/close/quiz/case ids follow
  the pilot's convention). Both figure ids kept.
- Structure (decision 4): the one-paragraph `## Think patterns, not single nutrients` was folded into the at a
  glance (its heading removed, all text and both citations kept; its first sentence dropped as bullet 1 now
  states it). Four movements = four map branches. Movement intros of *Lowering the blood pressure* and
  *Protecting the artery* deleted (§11g no movement intros).
- At a glance: deleted the "This chapter follows…" roadmap sentence (book acts); "Three habits of mind run
  through the chapter" → "Three principles frame the dietary advice", bullets de-bolded and made parallel,
  "You do not memorise…" → third person; AHA features → 5-item bulleted list; all emphasis bold stripped.
  OVERRIDE of the plan (term-ownership.md): **hypertension** is owned by this chapter, so it is bold-defined
  here ("persistently raised blood pressure"); **primary prevention** defined.
- Science underneath: rhetorical "you" question → topic sentence; cross-references in parentheses (added the
  *Integrative Metabolism* #sec-lipoproteins anchor, which exists in HEAD); definition list (atherosclerosis,
  vascular tone, endothelium, dyslipidaemia) before the figure; two bold run-ins kept (parallel pathways);
  convergence sentence moved to its own paragraph, em-dash endothelium gloss removed (now in the list);
  "counter-regulates" → "works the other way".
- DASH: unbolded (owner *Why Nutrition Matters*; pointer to *What a Healthy Diet Looks Like*, which treats DASH
  with its trials), long trial sentence split, em dash removed, "stacks with cutting salt" → "adds to salt
  reduction".
- Sodium: sentence split, em dashes and "~" removed, "rather than" → "not"; J-curve parenthetical ("One myth to
  retire") turned into a plain paragraph that bold-defines **sodium J-curve** and moved up to sit after the
  "graded" claim it qualifies (citation moved with it); metacommentary "which makes it a useful do-no-harm
  example" removed; warning callout: ARBs expanded, hyperkalaemia unbolded (owner *Chronic Kidney Disease*)
  with its plain gloss kept, `[@neal2021ssass]` moved from the CKD-pointer sentence to the exclusion sentence
  it supports, "The renal potassium story is owned by…" → "(For the renal side of potassium, see the *Chronic
  Kidney Disease* chapter.)"; 🍜 Eating out: six swaps → bulleted list, five emphasis bolds stripped.
- Fat quality: padded opener ("The single most useful idea…") → topic sentence + *Macronutrients* pointer;
  numbers sentence split; **statin** defined; "famous" → "widely reported"; one island-instruction sentence
  added ("Try each replacement below."). Fish: bold inline-header bullets → parallel sentences, **icosapent
  ethyl** bold at its defining use, em dashes and "you cannot extrapolate" removed. Mediterranean: unbolded,
  metacommentary ("both show something useful about reading evidence") removed, caveats as First/Second,
  "not a magic number" antithesis removed.
- Alcohol: heading "Alcohol is not cardioprotective" → "Does alcohol protect the heart?" (common-belief rule,
  §11h no punchline heading); paragraph split into belief/origin/evidence and the lever; "quietly" dropped;
  "studies using genetics" → "Mendelian randomisation studies, which use genetic variants to remove that
  bias" (correct term, owner *Adulthood & Working Life*, plain with gloss) plus a pointer to that chapter;
  "≈ 10 g" → "about 10 g of alcohol".
- Singapore picture: bold run-ins kept but made claim sentences; "leading killer" → "leading cause of death";
  "national machinery" → "national measures"; em dash removed; ACE expanded (Agency for Care Effectiveness);
  "signposted, not drilled" (meta about the book) → "for the treating clinician to look up"; EatWise SG
  pointer to *Interprofessional Practice & Referral*. Callout title "You look the targets up, you don't
  memorise them" → "Blood-pressure and cholesterol targets: risk-tiered and looked up" (topical, not the
  plan's "Targets are looked up, not memorised", which is still a punchline); body tightened.
- Close: opening antithesis removed; six-item series → bulleted list; next-chapter announcement ("the cascade
  runs on to the kidneys…") deleted (§11c).
- Practise: paragraph trimmed to a teaser (the readings and the "Work through the visit" preview duplicated
  the case intro); island instruction "Your choices branch the case." kept.
- Six collapsed Check yourself callouts: 1 after the science movement, 2 after *Lowering the blood pressure*,
  2 after *Protecting the artery*, 1 after the alcohol movement; none in the overview, Singapore picture or
  close. Each asks why/what follows and is answered from the chapter text.

Quiz: all 8 "Correct." openers removed; emphasis bold removed from stems (only the negative **not** in q8
kept); all em dashes removed (q4 options " — so" → ", so"); neg-parallel lines rewritten (q2 c, q7 b); "you
cannot extrapolate" → "does not carry over"/"cannot be extrapolated"; q6 "generates" → "gives" (matches the
chapter callout); "rather than the salt shaker" → "not in the salt shaker"; chapter name italicised. Opening
words checked: no two consecutive feedbacks share an opening word, including across question boundaries.

Case: every em dash (50) removed; emphasis bold stripped (bold kept only on the two do-no-harm warning
phrases in q-salt-substitute feedback, and "a genuine do-no-harm error" in remedial and end-partial);
"Right.", "Too fast.", "That misses…", "This misses…", "Necessary but nowhere near enough.", "Exactly the
do-no-harm answer.", "This is the trap…", "This is the whole job…", "Two errors here.", "Wrong instinct
here." openers removed, so feedback starts with the explanation; long correct options trimmed to match the
distractors (q-first-move a, q-diet a, q-salt-substitute a, q-refer a; detail kept in feedback); intro's
third paragraph ("Work through the visit…") deleted (repeated the chapter's Practise paragraph, decision 9);
"Crucially," and the meta sentence "That's exactly the altitude for this chapter…" deleted from end-good;
plain-text fields (objectives, keyPoints) use plain chapter names and no asterisks; "ACE inhibitor / ARB /
potassium-sparing diuretic" slashes → "ACE inhibitor, ARB or potassium-sparing diuretic". No patient-chat node
added; ids, routes, effects, goto, persona, references unchanged.

fat-swap.yml: intro cut to the scenario (dropped the two sentences that repeated the chapter paragraph and
the `prompt`); `caption` key deleted (it repeated the chapter's "replaced with what?" sentence verbatim,
decision 9; FatSwap.svelte renders no caption when the key is absent, checked: `data = parsed`, no merge with
FALLBACK); the "the swap, not the cut, is what protects the heart" tag line removed from all verdicts/notes;
"Good swap." / "Little or no benefit." verdict openers removed; all em dashes removed (including two in header
comments). Labels, examples, effects, best, prompt, title, credit unchanged.

## Gate and checks

- Citation multiset: IDENTICAL (35 keys, 47 uses; diff of `uniq -c` output empty).
- Islands 3 → 3 (lines identical); figures 2 → 2 (lines and captions identical); callouts 3 → 10 (+1 Learning
  objectives, +6 Check yourself); tables 0 → 0.
- HEAD ids #fig-cvd-pathways and #fig-oily-fish present. Every in-chapter `](#sec-…)` link resolves to an id
  in the file. External anchor integrative-metabolism.qmd#sec-lipoproteins exists in HEAD.
- copy-audit --you on the four files: 1 flag (quiz q5 "VITAL", the trial acronym matched by the "vital"
  vocabulary rule: a false positive). Chapter: 0 flags, 0 em dashes, bold 4.2/1,000 words, "rather than" 2,
  "you" 3 (the quoted belief "protects your heart", CY6's clinician question per decision 10, and the island
  instruction). fat-swap 0 flags/0 dashes; case 0 flags.
- js-yaml load OK for all three YAML files; validate-cases: OK mr-chua-cvd.case.yml.
- Not run (forbidden in this workflow): render, check-assets.

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| book/cases/mr-chua-cvd.case.yml | q-refer option c text | "Skip the dietitian and just add a second blood-pressure tablet now…" | "Skip the dietitian and add a blood-pressure tablet now, since it's simpler." | Internal contradiction: Mr Chua is on no medication (case intro and chapter Practise: "do I need to start medication?") |
| book/cases/mr-chua-cvd.case.yml | q-refer option c feedback | "reaching for another tablet skips the whole lever…" | "Reaching for a tablet skips the lever…" | Internal contradiction (same as above) |
| book/cases/mr-chua-cvd.case.yml | q-first-move option b feedback | "A single raised reading isn't confirmed hypertension" | "Raised readings at a single visit aren't yet confirmed hypertension" | Internal contradiction: the stem gives two readings (148/92 then 146/90) at one visit; the case's own option a says to confirm over repeated readings |

## Deferred content concerns (need source checking; not changed)

- C1 Chapter warning callout, quiz q8 a feedback, case q-salt-substitute a/b feedback, remedial body,
  end-partial body: SSaSS (`neal2021ssass`) is said to have excluded people on ACE inhibitors and ARBs; the
  planner's understanding is that it excluded serious kidney disease and potassium-sparing diuretics or
  potassium supplements, not ACE inhibitors/ARBs. Check against the paper; the clinical caution itself holds.
- C2 Chapter alcohol movement, "and it lowers triglycerides [@roerecke2017bp]": roerecke2017bp is a
  blood-pressure meta-analysis; the dossier sourced the triglyceride claim to klop2013alcoholtg (not in
  references.bib).
- C3 Singapore picture "a 15%-by-2026 reduction target" (`hpb2023sodium`): time-sensitive wording now that it
  is late 2026.
- C4 Undiagnosed hypertension: "over half of them undiagnosed" (at a glance) vs "about half of them are
  undiagnosed" (Singapore picture), both `nphs2024`; bib note reportedly 51.2%. Harmonise ("just over half")
  after checking.
- C4b (new) Cardiovascular deaths: "about a third of all deaths" (at a glance) vs "about 30% of deaths"
  (Singapore picture), both `shfHeartStats2024`. Harmonise after checking the source.
- C5/C6: fixed (see content fixes).
- C7 Case reveal-first-move: "kopi-C twice (with condensed/evaporated milk and sugar)": kopi-C is evaporated
  milk and sugar (condensed milk is plain kopi). No other chapter states the recipe, so not an internal
  contradiction; needs a factual check.
- C8 fat-swap.yml refined-carb note: "LDL is roughly unchanged" when saturated fat is replaced with refined
  carbohydrate; pooled feeding data may show a small LDL fall with HDL down and triglycerides up. Check the
  wording against mensink2003.
- C9 Chapter fat-quality paragraph 2: `siritarino2010` (cohort meta-analysis behind the "exonerated"
  headlines) also carries "when the replacement is refined carbohydrate and sugar, there is no benefit";
  check whether that half needs a different source (e.g. hooper2020 / sacks2017).
- C10 Chapter DASH paragraph 2: "In Singapore, DASH *is* My Healthy Plate" overstates an equivalence; the
  Singapore picture's "the ready-made local form of the DASH and Mediterranean patterns" is more accurate.
- C11 (new) Quiz q5 a feedback names the trials "(VITAL, ASCEND)", which the chapter text does not name (it
  cites manson2019vital and ascend2018omega3 by author); author's call whether to keep the names (they
  also trip the copy-audit "vital" rule as a false positive).
- C12 (new) Quiz q8 correct option "…ARB or K-sparer": the abbreviation "K-sparer" is not used in the chapter
  (which writes "potassium-sparing diuretics"); kept to preserve option-length parity.

## Deferred backlog (not done: house blocks, figures, big restructures)

- House blocks: the chapter has only 🍜 Eating out (in the sodium sub-topic). No 🔬 Food science or 🍳 Healthy
  kitchen block anywhere (candidates: 🍳 cooking oil choice and less deep-frying under fat quality; 🔬 why
  potassium-enriched salt tastes salty / sodium in soup stock). Decision 4: deferred.
- The Nutri-Grade extension to sauces/instant noodles appears in both 🍜 Eating out and the Singapore picture
  (§11c: the Singapore picture should not repeat the Eating out block); cutting either would drop a citation
  use from the multiset, so both kept.
- components/src/FatSwap.svelte FALLBACK copy still carries the old intro/notes/verdicts/caption with em
  dashes and the "swap, not the cut" tag line (shown only if the YAML fails to load; components are out of
  scope).
- No new teaching figure considered necessary (two figures already: the pathways schematic and oily fish);
  an evidence spectrum across the levers and a fish/capsule/drug table were considered and rejected by the
  planner (would imply claims the chapter does not make).
- Render-time checks (TOC shows four movements, no single-child ###; check-assets; map links) to be run by
  the orchestrator after all agents finish.

## Glossary rows owned by this chapter (orchestrator adds to book/glossary.qmd)

| Term | Meaning | Introduced in |
|---|---|---|
| Atherosclerosis | The build-up of plaque in the artery wall, where LDL cholesterol is deposited and inflames the wall; the plaque narrows the vessel and can rupture | Cardiovascular Disease & Hypertension |
| Dyslipidaemia | An abnormal pattern of blood lipids, the cholesterol and triglycerides carried in lipoproteins | Cardiovascular Disease & Hypertension |
| Endothelium | The inner lining of a blood vessel | Cardiovascular Disease & Hypertension |
| Hypertension | Persistently raised blood pressure | Cardiovascular Disease & Hypertension |
| Icosapent ethyl | A high-dose prescription drug used in selected patients, tested in the trial often cited as the "fish-oil trial"; its result does not extend to over-the-counter fish oil | Cardiovascular Disease & Hypertension |
| Primary prevention | Preventing disease before it develops | Cardiovascular Disease & Hypertension |
| Sodium J-curve | The suggestion that very low salt intake is harmful; largely a measurement artefact | Cardiovascular Disease & Hypertension |
| Statin | A cholesterol-lowering drug | Cardiovascular Disease & Hypertension |
| Vascular tone | How constricted the blood vessels are; higher tone raises blood pressure | Cardiovascular Disease & Hypertension |

Used here unbolded (owned elsewhere): hyperkalaemia (Chronic Kidney Disease; plain gloss kept), DASH pattern,
Mediterranean pattern, My Healthy Plate, Nutri-Grade (Why Nutrition Matters), LDL, lipoprotein, food matrix,
free sugars, wholegrain (Macronutrients), insulin resistance (Obesity & Metabolic Syndrome), surrogate
endpoint, composite endpoint, relative risk reduction, confounding (Evidence vs Hype), Mendelian
randomisation, standard drink (Adulthood & Working Life; plain glosses kept), ultra-processed foods (Appetite
& Weight Regulation).

## Owner terms from term-ownership.md that do not occur in this chapter

None: all nine terms assigned to cardiovascular-disease-hypertension occur and are defined (hypertension,
primary prevention, sodium J-curve, statin and icosapent ethyl in bold at first use; atherosclerosis,
vascular tone, endothelium and dyslipidaemia in the definition list).

## Fix round 1 (verifier issues)

Chapter (book/chapters/cardiovascular-disease-hypertension.qmd):

- BLOCKER, AHA count: "The American Heart Association describes the pattern by five features" → "The American
  Heart Association organises heart-healthy eating around these features" (no count; AHA 2021 lists ten, as
  *What a Healthy Diet Looks Like* says with the same key; the list here is a selection). Content fix,
  category: contradiction with another chapter's explicit, cited figure.
- Science opener: hedge restored ("through two pathways" → "mainly through two pathways"); metacommentary
  "The underlying biology is covered earlier: … Here we follow how diet pushes on them." → "Both pathways
  build on how fats are carried as lipoproteins (…) and how the body handles sodium and water (…)."; list
  lead-in "Four terms describe the two pathways:" → "Four terms recur below:" (dyslipidaemia feeds both
  pathways and is not part of either). The verifier's alternative "Four terms describe them:" was not used,
  as it repeats the mislabel.
- Citation re-attachment (sentence splits rejoined; no key moved or added): sodium "About 9 in 10 …
  [@hpb2023sodium]" is one sentence again, with "the limit" → "the recommended sodium limit" for a referent
  (the verifier's "WHO limit" was not used: the HPB source note says "the sodium limit", so naming whose
  limit would be a new claim); J-curve "…measurement artefact, and it is irrelevant …
  [@cappuccio2022sodiummyths]"; SG-FRS "…Indian groups; it estimates only 10-year coronary risk …
  [@sgfrs2023]"; fat quality "…cuts cardiovascular events: reducing saturated fat cuts events by around
  17% … [@mensink2003; @hooper2020; @sacks2017]"; alcohol "…(see the *Adulthood & Working Life* chapter);
  Mendelian randomisation studies … [@biddinger2022mralcohol]".
- Practise: restored "Work through the visit: lead with the right first move, translate the pattern to his
  hawker plate, handle the salt-substitute safety check, and notice where memorising a target, or reaching
  for a drug first, would be the wrong reflex." before "Your choices branch the case." (the case-intro copy
  stays deleted, decision 9).
- Mediterranean: "Guidelines endorse the pattern as a whole" → "Guidelines endorse the pattern itself rather
  than a specific percentage reduction" (restores HEAD's contrast with the 30% figure); paragraph split into
  three (result / two caveats / guidelines and plate), no words changed.
- Check yourself (fish-oil trial) answer, causal link fixed. Before: "…Routine omega-3 supplements failed …,
  so the drug's result does not extend to over-the-counter fish oil." After: "The trial tested icosapent
  ethyl, a high-dose prescription drug given to selected patients, so its result does not extend to
  over-the-counter fish oil, and prescribing it is a specialist decision. Routine omega-3 supplements, by
  contrast, failed to prevent cardiovascular events in large trials." Category: internal consistency with
  the chapter's fish section.
- Check yourself 1 answer: "plaque that narrows a vessel or ruptures causes heart attacks and strokes" →
  "plaque that narrows a vessel can rupture, causing heart attacks and strokes" (matches the prose).
  Category: internal consistency.
- 🍜 Eating out lead-in: "The practical swaps are made at the stall:" → "The practical, recognise-and-advise
  swaps are made at the stall:" (HEAD's altitude marker restored).
- At a glance: "Three principles frame the dietary advice:" → "Three principles frame the advice and the
  referral:" (label fix; chosen over the alternative "run through the chapter" to avoid chapter
  self-reference); bullet 1 → "The modern framing treats heart-healthy eating as a whole dietary pattern,
  not a list of good and bad nutrients [@aha2021diet]." (restores "the modern framing"; reworded from the
  verifier's appositive for grammar); bullet 2 "refer for the plan" → "refer or co-manage for the plan"
  (HEAD's co-management option restored).
- Learning objective 1 → "Explain how saturated and *trans* fat, by raising LDL cholesterol, build
  atherosclerotic plaque, and how sodium raises blood pressure." (no longer promises an LDL-raising
  mechanism the chapter does not give). Category: label misnames content.
- Singapore picture: "Measured hypertension affects about 34%…" → "Measured hypertension, a silent driver
  of that burden, affects about 34%…" (HEAD's "driver" restored).
- Singapore picture ACE sentence: "…are risk-tiered and lifestyle-first, and their drug targets and drug
  classes are for the treating clinician to look up [@aceHtn2023; @aceLipid2023]." → "…are risk-tiered and
  lifestyle-first [@aceHtn2023; @aceLipid2023]." (the callout below owns "looked up"); the close's last
  sentence "Recognise these levers, and refer for the structured plan and the risk-tiered targets." deleted
  (restated the chapter; no citation).
- Warning callout: "ACE inhibitors" → "angiotensin-converting enzyme or ACE inhibitors" (gloss, decision 2;
  separates it from the Agency for Care Effectiveness "ACE").
- The DASH Check yourself now precedes the sodium one (matches sub-topic order); text unchanged.
- Close list: "Oily fish rather than fish-oil capsules." → "Oily fish, not fish-oil capsules." (keeps the
  copy-audit "rather than" count at 2 after the Mediterranean fix added one).
- Three lines re-wrapped (no word changes).
- Cross-references, for the record (no text change): the round-0 pointers "(see the *Micronutrients,
  Hydration & Electrolytes* chapter)" in the Sodium paragraph (04-micronutrients-hydration.qmd covers
  Singapore sodium) and "see the *What a Healthy Diet Looks Like* chapter" in the Mediterranean paragraph
  (dietary-guidelines-patterns.qmd has #sec-mediterranean) were added in round 0 and belong with the Sodium
  and Mediterranean entries of the summary above.

Case (book/cases/mr-chua-cvd.case.yml):

- objectives[1]: "recognising that fat quality and replacement matter more than blanket fat avoidance" →
  "recognising that what counts is fat quality and replacement, not blanket fat avoidance" (meaning restored:
  rejects blanket avoidance, consistent with q-diet b feedback and the fat-swap island). Category: internal
  consistency.
- end-good body: "recognising that fat quality matters more than blanket avoidance" → "recognising that what
  counts is fat quality, not blanket avoidance" (same reason).
- q-refer a feedback: "…delivers the structured pattern change, alongside a formal cardiovascular-risk
  assessment and a re-check…" → "…delivers the structured pattern change; alongside it, arrange a formal
  cardiovascular-risk assessment and a re-check…" (required action restored).
- Correct options trimmed (detail already in feedback): q-first-move a → "Confirm the readings, take a
  history, counsel, and arrange a risk assessment." (77; distractors 78/63); q-diet a → "Suggest My Healthy
  Plate (half vegetables and fruit) plus less salt." (68; distractors 68/71); q-salt-substitute a → "It's
  reasonable for most people, but first let me check your kidneys and medicines." (83; distractor 90);
  q-refer a → "Refer to a dietitian, arrange risk assessment, look targets up, and advise against drinking
  for the heart." (106; distractors 96/75; still the longest, because a shorter cut drops one of the three
  parts the stem asks for, and distractors are not padded).
- end-good keyPoints[0]: "diet/activity/alcohol history" → "diet, activity and alcohol history".

Quiz (book/quizzes/cardiovascular-disease-hypertension.quiz.yml): q8 correct option "…on an ACE inhibitor,
ARB or K-sparer" → "…on a potassium-raising blood-pressure drug" (73 chars; distractors 66-69; the feedback
still names the drug classes). Deferred concern C12 is resolved.

fat-swap.yml: refined-carb note "mislead for this reason, because the studies…" → "mislead because the
studies…".

### Gate and checks after round 1

- Citation multiset IDENTICAL to HEAD (35 keys; `uniq -c` diff empty). Islands 3 → 3 and figures 2 → 2
  (lines identical); callouts 3 → 10 (unchanged from round 0: Learning objectives + 6 Check yourself);
  tables 0 → 0. HEAD ids #fig-cvd-pathways and #fig-oily-fish present; every in-chapter #sec link resolves.
- copy-audit --you on the four files: 1 flag (quiz q5 "VITAL", the trial acronym, a false positive; C11).
  Chapter: 0 flags, 0 em dashes, bold 4.1/1,000 words, "rather than" 2, "you" 3 (quoted belief, the Check
  yourself clinician question per decision 10, the island instruction).
- js-yaml load OK for all three YAML files; validate-cases: OK mr-chua-cvd.case.yml.
- Not run (forbidden): render, check-assets.
