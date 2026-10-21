# Retrofit log: Chronic Kidney Disease

Files changed (only these):

- book/chapters/chronic-kidney-disease.qmd
- book/diagrams/renal-flip.yml
- book/quizzes/chronic-kidney-disease.quiz.yml
- book/cases/mr-lim-ckd.case.yml

## Summary of changes

Started from the planner's reference drafts (`retrofit-plans/ckd-drafts/`), then applied the deviations
required by retrofit-decisions.md and term-ownership.md (listed under "Deviations from the plan").

Chapter:

- Opener: 5-sentence non-italic blockquote replaced with a 2-sentence italic hook (no "This chapter").
- Added Learning objectives (6 verb phrases) and a chapter map (3 branches: science, five levers with
  5 children, when to refer).
- Added `{#sec-…}` ids to every `##`/`###` heading: sec-overview, sec-ckd-science, sec-ckd-levers,
  sec-ckd-protein, sec-ckd-sodium, sec-ckd-potassium, sec-ckd-phosphate, sec-ckd-fluid, sec-ckd-refer,
  sec-singapore, sec-close, sec-quiz, sec-case. Figure ids unchanged.
- At a glance: bold-defined CKD, eGFR, albuminuria and dialysis; definition before staging before
  principles; "Three habits of mind" inline-header list turned into a plain three-sentence list; book-acts
  and meta sentences cut; duplicate "6 a day / 9,000 on dialysis" statistics cut here (kept, with the
  same citation key, in the Singapore picture; both keys stay in the at-a-glance sentence).
- Science movement: rhetorical question and "not only a filter" antithesis replaced by a topic sentence;
  the 170-word, 5-bold mechanism paragraph split into a 4-item consequences list (parallel) plus a prose
  paragraph for the counter-force causal chain (uraemia → poor appetite → protein-energy wasting).
  Bold-defined nephron, oedema, hyperkalaemia, CKD–mineral and bone disease, uraemia, protein-energy wasting.
- Five levers: roadmap sentence cut; emphasis bold removed throughout; "Same patient, opposite advice."
  stacked sentences merged; MDRD expanded; "genuinely", "famous", "good lesson" meta cut.
- Warning callout retitled to the common-belief form ("Is a low-protein diet always good for the
  kidneys?"), states the belief and its source first; "calories" → "energy" (no synonym cycling); one
  warning bold.
- Sodium heading "the lever you *can* reinforce" → "the lever a generalist can reinforce" (no "you" in
  TOC headings); vague "Guidance suggests" → "The KDIGO (Kidney Disease: Improving Global Outcomes)
  guideline suggests" (same citation); paragraph split; "owned by … chapter" → parenthesis.
- Potassium: "signature reversal" meta cut; island instruction sentence added before the island; island
  `intro` deleted (decision 9); hazard lead-in moved below the island; ARBs expanded; "not merely … they
  carry" antithesis recast; one warning bold (**absolute avoid**) kept with the two parallel run-ins.
- Phosphate: bold-defined phosphate additives and phosphate binder; "enhance" → "improve"; figure-caption
  em dash removed; 🍜 Eating out kept in place, emphasis bold removed, label-colon fragments recast as a
  sentence, **leaching** bold-defined.
- Fluid: emphasis bold removed, "no universal number" sentences merged.
- When to refer: five triggers as a bulleted list introduced by a full sentence; stale cross-reference
  fixed (see content fixes).
- Singapore picture: three bold run-ins reworded as plain claims; War on Diabetes unbolded (owned by Why
  Nutrition Matters); cardiovascular-kidney-metabolic framing bold-defined; "ACE guidance" expanded
  (Agency for Care Effectiveness) to avoid the ACE-inhibitor clash; altitude callout kept here, meta cut,
  one bold.
- Close: kept the answer; advanced-CKD balance as a 3-item list; restating summary and next-chapter
  announcement cut (§11c).
- Practise intro: shortened (it repeated the case's own intro node, and had an em dash).
- Check yourself: 5 collapsed callouts (2 science, 2 five levers, 1 when to refer); none in Singapore
  picture or close.

Island (renal-flip.yml): `intro` deleted (component renders it only `{#if data.intro}`); 11 em dashes
removed; "NOT" → "not"; "genuine" → "real"; star-fruit antithesis recast; "kidney-protective drugs" →
"blood-pressure drugs" (REVERTED in round 2, see Fix round 2); caption meta ("Recognising the flip is the
skill") cut. Structure (ids, kinds,
contexts, items, credit) unchanged (checked programmatically against HEAD).

Quiz: 8 "Correct." openers removed; 34 em dashes removed; stem bold removed; option "Correct — it was a
decisive…" → "It was a decisive…"; no two consecutive feedbacks share an opening word; options
unbolded and within ~15 characters of each other. Ids and `correct` flags unchanged.

Case: em dashes, "Right."/"Exactly" openers, "Crucially", "this chapter's altitude" meta removed;
emphasis bold cut to one per node; options unbolded and similar length; "calories" → "energy". Node ids,
`correct`, `goto`, `effects`, `next`, route rule, `objectivesMet`, `references`, persona unchanged
(checked programmatically). validate-cases.mjs: OK.

## Deviations from the plan (and why)

1. **Altitude callout NOT moved** (plan uncertainty 1, option a). Decision 4 allows only section
   merges/moves needed for a ≤4-branch map or the §11c order; this move is neither. The sibling Part IV
   plans (Cardiovascular Disease & Hypertension, Undernutrition & Malnutrition) keep their altitude
   callouts at the end of the Singapore picture, so the move would also break consistency. Applied
   option (b): callout stays after the third Singapore paragraph, meta cut. Title comma splice fixed to
   "You recognise the levers; you do not prescribe the renal diet" (same form the Undernutrition plan
   adopted for its matching callout).
2. **Hyperkalaemia bold-defined here** (term-ownership.md reassigns it to Chronic Kidney Disease). The
   draft's "(see the *Cardiovascular Disease & Hypertension* chapter)" pointer after hyperkalaemia was
   dropped. Glossary row added.
3. **Oedema bold-glossed here** (plan uncertainty 3 fallback): checked the Micronutrients, Hydration &
   Electrolytes working copy, which uses "oedema" once (beriberi) without a definition; no other chapter
   uses the term. Gloss "(swelling from fluid collecting in the tissues)" (decision 2). Glossary row
   added; oedema is not in term-ownership.md, so the orchestrator should confirm ownership.
4. Small extra polish: eGFR gloss "an estimate of filtration" (circular) → "an estimate of how well the
   kidneys filter"; KDIGO expanded; "…, but … but…" in the potassium paragraph fixed; "~" → "about" in
   quiz q6 (matches the chapter); "genuinely" removed from the case intro; em dash removed from a
   renal-flip.yml comment.

## Gate

- Citation multiset: IDENTICAL to HEAD (37 keys, 65 instances).
- Islands 3 → 3; figures 2 → 2 (`#fig-ckd-levers`, `#fig-phosphate` present); tables 0 → 0.
- Callouts 4 → 10 (+1 Learning objectives, +5 Check yourself).
- HEAD had no `{#sec-…}` ids; all `{#fig-…}` ids kept. All chapter-map / in-text `#sec-` links resolve.
- copy-audit: 0 flags across the 4 files (was 135); 0 em dashes; 6.8 bold/1,000 words; 4 "you" lines,
  all clinician/instruction (altitude callout title ×2, "Your part is…", Practise instruction).
- YAML: all three files load with js-yaml. validate-cases.mjs: OK.

## Content fixes (decision 1 categories)

| Location | Before | After | Category |
|---|---|---|---|
| chapter, When to refer, last sentence | "The wider referral map, who does what across the multidisciplinary team, is the subject of later teaching on interprofessional practice and referral." | "(The wider referral map, who does what across the multidisciplinary team, is in the [*Interprofessional Practice & Referral*](interprofessional-referral.qmd) chapter.)" | Cross-reference to wrong place (that chapter precedes this one in reading order) |
| chapter, Phosphate, para 2 | "…the bone side of CKD–mineral and bone disease (calcium, vitamin D, PTH, fracture risk) belongs to the *Bone & Joint Health* chapter" | "(The calcium and vitamin D physiology behind the bone side of the disorder, including parathyroid hormone and fracture risk, is in the [*Bone & Joint Health*](bone-health-osteoporosis.qmd) chapter.)" | Cross-reference retargeted: the Bone chapter does not teach CKD–MBD (it points back here) but does teach calcium/vitamin D/parathyroid physiology and fracture risk |
| chapter, When to refer, trigger list | "eGFR is falling or in the lower stages (roughly G3b and below)" | "eGFR is falling, or is roughly in category G3b or worse" | Label misnames the content ("lower stages" for G3b–G5, which are higher categories with lower eGFR); meaning unchanged |
| **REVERTED in round 2.** renal-flip.yml sodium.ckd.why; quiz q2 option b and q8 option a feedback | "helps kidney-protective drugs work" / "lets kidney-protective drugs work" | ~~"helps blood-pressure drugs work"~~ (HEAD wording restored in round 2) | Not a decision-1 fix: the two phrases agree, so there was no contradiction, and the change altered the claim (renoprotection → blood-pressure lowering) |
| quiz q1 stem | "A patient's results…" | "A man's results…" | Internal consistency within the item (options and feedback say "his"/"him") |
| quiz q4 option b | "Correct — it was a decisive positive trial with a hard endpoint" | "It was a decisive positive trial with a hard endpoint" | Label misleads: a wrong option began with "Correct" |

## Deferred content concerns (need source checking or an author decision)

1. Five levers intro: "International guidelines specify that it should be delivered by a renal dietitian
   [@kdoqi2020nutrition; @aceCKD2023]". `aceCKD2023` is Singapore's national ACE guidance, which (per the
   Singapore picture) is selective about referral; pairing it with "international guidelines specify"
   may overstate it. Suggested: "The KDOQI guideline specifies… [@kdoqi2020nutrition], and Singapore's
   ACE guidance refers those with complex needs [@aceCKD2023]". Left verbatim.
2. Fluid: "Fluid is the lever generalists most often over-apply." carries no citation.
3. Quiz q7 option a feedback lists hiccups among star-fruit intoxication symptoms; the chapter does not
   mention hiccups (not contradicted, but unsupported by the chapter text). Kept.
4. Case persona `presentation` (rendered) says Uncle Lim drinks "the occasional star-fruit juice", an
   absolute avoid at eGFR 38, but no node or debrief addresses it. Planner recommends adding one keyPoint
   to both end nodes ("He also drinks star-fruit juice: in CKD star fruit is an absolute avoid, because
   its neurotoxin cannot be cleared."). Not done: adding a teaching point is outside decision 1.
5. Circular CKD–MBD ownership: the *Bone & Joint Health* chapter (lines ~68–69) says CKD–MBD "is the
   *Chronic Kidney Disease* chapter's"; this chapter teaches it in one bullet and one phosphate paragraph
   only. Consider a short CKD–MBD paragraph here later (new content).
6. *Bone & Joint Health* (lines ~265–266) says "the kidney's role in urate" belongs to this chapter; this
   chapter says nothing about urate. That pointer lives in another chapter's file (its owner should drop
   or retarget it).
7. Case q-lever option b feedback: "Early-to-moderate CKD usually needs no fixed fluid limit"; the chapter
   says "Early CKD usually needs no fluid restriction; limits matter mainly in advanced disease and on
   dialysis". Not a contradiction, but "moderate" extends the chapter's claim; check against KDOQI 2020.
8. Out of scope but stale: `components/src/RenalFlip.svelte` FALLBACK object duplicates the old YAML text
   (intro, em dashes, "kidney-protective drugs"); shown only if the YAML fails to load. (Round 2: the
   YAML again says "kidney-protective drugs", so that phrase is no longer stale; the intro and em dashes
   still are.) The figure SVG
   `figures/mechanisms/ckd-diet-levers.svg` has an em dash in its accessible description.

## Deferred backlog

- House blocks (decision 4): the chapter has one 🍜 Eating out (phosphate) and no 🔬 Food science or 🍳
  Healthy kitchen. Natural candidates: 🔬 phosphate additives vs phytate-bound phosphate; 🍳 leaching
  and low-salt flavouring at home.
- Structure: consider moving the Part IV altitude callouts (CKD, CVD, Undernutrition, Bone & Joint) into
  each chapter's referral movement book-wide, consistently (plan uncertainty 1); not done here alone.
- Figures (§11f): a CKD heat-map (G × A grid) figure would teach staging, but needs thresholds the chapter
  does not state; deferred.
- Glossary: add the rows below to `book/glossary.qmd` (not edited in this pass).
- Once the *Interprofessional Practice & Referral* retrofit lands, the "wider referral map" link could
  point to its care-team section (its working copy now has `#sec-care-team`).

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Albuminuria | Protein (albumin) leaking into the urine; graded A1–A3 and read with eGFR to stage CKD | *Chronic Kidney Disease* |
| Cardiovascular-kidney-metabolic framing | The international framing that treats obesity, diabetes, cardiovascular disease and CKD as one connected disorder | *Chronic Kidney Disease* |
| Chronic kidney disease (CKD) | The progressive, largely silent loss of kidney function, defined and staged by its cause, eGFR and albuminuria | *Chronic Kidney Disease* |
| CKD–mineral and bone disease | The disorder of bone and blood vessels driven by retained phosphate and the failing kidney's loss of vitamin D activation | *Chronic Kidney Disease* |
| Dialysis | Treatment that partly takes over the kidney's clearance of wastes and water once the kidney fails | *Chronic Kidney Disease* |
| Estimated glomerular filtration rate (eGFR) | An estimate of how well the kidneys filter, in categories G1–G5, read with albuminuria to stage CKD | *Chronic Kidney Disease* |
| Hyperkalaemia | Raised blood potassium, which disturbs the heart's rhythm; in CKD a risk from potassium loads, potassium salt substitutes and potassium-raising drugs | *Chronic Kidney Disease* |
| Leaching | Soaking cut vegetables, then boiling them and discarding the water, to lower their potassium | *Chronic Kidney Disease* |
| Nephron | One of the kidney's filtering units; CKD is their progressive loss | *Chronic Kidney Disease* |
| Oedema | Swelling from fluid collecting in the tissues | *Chronic Kidney Disease* |
| Phosphate additives | Inorganic phosphates used to preserve and improve processed foods; absorbed almost completely and often not on the label | *Chronic Kidney Disease* |
| Phosphate binder | A drug taken with meals to manage retained phosphate in CKD; prescribing it is a specialist decision | *Chronic Kidney Disease* |
| Protein-energy wasting | Undernutrition layered on kidney disease: low body and muscle mass, poor intake and abnormal blood chemistry; common on dialysis and linked to death | *Chronic Kidney Disease* |
| Uraemia | The build-up in the blood of the wastes the kidney normally clears, such as urea; it blunts appetite | *Chronic Kidney Disease* |

(Oedema is not in term-ownership.md; claimed here because no earlier chapter defines it. Terms used
unbolded here because another chapter owns them: medical nutrition therapy, DASH pattern, War on
Diabetes, hypertension, surrogate/hard endpoint, catabolism (via "catabolic"), undernutrition,
ultra-processed (quiz).)

## Owner terms from term-ownership.md not occurring in this chapter

None. All 13 terms assigned to Chronic Kidney Disease occur and are bold-defined in the chapter.

## Fix round 1

Applied the verifier's round-1 issues (all blockers, all majors, and the minors). Same four files only.

### Restored content (unlogged drops in the first pass)

| Location | Before (round 0) | After (round 1) |
|---|---|---|
| case, remedial-potassium | "The WHO advice and the large salt-substitute trial both excluded people like him, so neither covers his case." | "The WHO's advice to eat more potassium explicitly excludes people who can't excrete it, and the large salt-substitute trial deliberately excluded serious kidney disease and potassium-raising drugs, so its safety data don't cover him." (restores the potassium-raising-drugs exclusion and the present-tense WHO wording from HEAD) |
| case, remedial-potassium para 2 | opened "For the general public, …" | opens "This is the advice that flips in CKD. For the general public, …" (HEAD lead restored, unbolded) |
| case, remedial-potassium last sentence | "…is a do-no-harm error." | "…is a do-no-harm error, and no amount of good advice elsewhere buys it back." |
| case, q-potassium option b feedback | "'Potassium is heart-healthy' … The safe answer is to hold off and refer." | "This is the trap, and it can cause real harm. 'Potassium is heart-healthy' … The safe answer is to hold off and refer. Good advice elsewhere does not make blanket 'more is better' advice safe here." |
| quiz q6 option a feedback | "…scanning ingredient lists for '-PHOS' additives." | "…scanning ingredient lists for '-PHOS' additives, which is a dietitian's skill." |
| renal-flip.yml potassium.ckd.why | "The WHO advice explicitly excludes CKD; intake is individualised to blood levels by a dietitian." | "The WHO advice explicitly excludes CKD. These foods are not eaten freely: a dietitian individualises the amount to blood levels." (restores HEAD's "not eaten freely"; recast so the subject is the foods, not "intake") |

### Hedges and warnings returned to HEAD strength (chapter)

| Location | Before (round 0) | After (round 1) |
|---|---|---|
| Opener | "once the kidney fails, the diet must take on some of its work" | "once the kidney is failing, the diet must take on some of its work" |
| Protein, MDRD | "The trial supports a possible benefit with a caveat, not a settled prescription." | "The fair reading is a benefit with a caveat, not a settled prescription." (matches quiz q4) |
| Protein warning callout | "Pushed too far, it does harm." | "Applied reflexively, it can do real harm." |
| Sodium | "CKD adds a caution about one common way of cutting salt" | "CKD adds a firm caution about one common way of cutting salt" |
| Potassium | "Renal guidance is moving away from blanket fruit-and-vegetable bans" | "The field is moving away from blanket fruit-and-vegetable bans" (HEAD) |
| Potassium traps callout | "a real cardiovascular benefit" | "a real cardiovascular lever" |
| Singapore picture para 2 run-in | "**National policy treats diabetes and CKD as one problem.**" | "**Diabetes prevention is also CKD prevention.**" (no longer claims national policy treats them as one) |
| Check yourself (refer) answer | "his protein, potassium, phosphate and fluid targets depend on his stage…" | "his protein, potassium, phosphate and fluid needs change with his stage…" (no implied fluid target in early CKD) |

### Citation placement (keys moved only with their claims; multiset unchanged)

- When to refer: "Refer whenever the advice needed exceeds general healthy eating [@kdoqi2020nutrition; @aceCKD2023]. In practice that means referring when:" → "Refer whenever the advice needed exceeds general healthy eating; in practice that means referring when [@kdoqi2020nutrition; @aceCKD2023]:" (keys now cover the trigger list, as in HEAD).
- Science: "…undernutrition layered on top of kidney disease [@fouque2008pew; @carrero2013pewetiology]. Reflexive restriction is therefore hazardous." → hazard claim rejoined inside the cited sentence (see the uraemia rewrite below).

### Definitions and glosses

- At a glance: "**Chronic kidney disease (CKD)** is the progressive loss of kidney function." → "**Chronic kidney disease (CKD)** is long-term damage to the kidneys, usually with a gradual loss of their function." (standard definition; covers albuminuric CKD with preserved eGFR; decision 2 gloss).
- Science, uraemia/PEW (verifier issues 10, 11 and 22 combined): "**Uraemia**, the build-up of these wastes in the blood, blunts appetite while illness raises the body's demands, so patients readily slide into **protein-energy wasting**, undernutrition layered on top of kidney disease [@fouque2008pew; @carrero2013pewetiology]. Reflexive restriction is therefore hazardous." → "The build-up in the blood of urea and the other wastes the kidney normally clears is **uraemia**, and it blunts appetite just as illness raises the body's demands. Patients therefore readily slide into **protein-energy wasting**, undernutrition layered on top of kidney disease, and that risk makes reflexive restriction hazardous [@fouque2008pew; @carrero2013pewetiology]." Used issue 10's wording ("urea and the other wastes the kidney normally clears", which matches the glossary row) rather than issue 22's "wastes of protein metabolism", with issue 22's split; "and that risk makes" in place of "which makes" so the clause cannot attach to "kidney disease".
- **Glossary row to update** (supersedes the CKD row in the table above): Chronic kidney disease (CKD) | Long-term damage to the kidneys, usually with a gradual loss of their function; defined and staged by its cause, eGFR and albuminuria | *Chronic Kidney Disease*. (term-ownership.md still carries the old "progressive, largely silent loss" wording.) The Uraemia row needs no change.

### Common-belief wording (§11g: no "wrong")

- Protein callout: "**unsupervised low-protein advice is the wrong instinct** [@piccoli2023lowprotein]" → "**unsupervised low-protein advice is unsafe** [@piccoli2023lowprotein]" (citation and Undernutrition pointer unchanged).
- Case objective 3: "so skipping meals is the wrong instinct; refer." → "so skipping meals does harm; refer." (non-sim case; HEAD already had "wrong instinct"). Superseded in round 2: "…can do harm; refer." (hedge restored).
- Case q-protein option a feedback: "Skipping meals is the wrong instinct; reassure him" → "Skipping meals does more harm than good; reassure him" (matches reveal-protein). Superseded in round 2: "Skipping meals could do more harm than good; …" (reveal-protein says "could"; the round-1 form dropped it).

### Sodium lever wording

- Altitude callout: "Your part is to reinforce the one lever that does not reverse (sodium)" → "Your part is to reinforce the one lever a generalist can safely reinforce (sodium)"; LO6: "the one lever that does not reverse" → "the one lever a generalist can safely reinforce" (the five levers are not the five advice cards; same phrase as case objective 4). Superseded in round 2: the "reinforce … can safely reinforce" repetition was removed from LO6, the callout and case objective 4 (see Fix round 2).
- Altitude callout first sentence made active: "The five levers (…) are recognised, but the quantities are individualised … by a renal dietitian" → "You recognise the five levers (…), but a renal dietitian individualises the quantities to the patient's stage, dialysis status and blood results". The callout stays in The Singapore picture (book-wide move still deferred to the orchestrator; if decided, move it to the end of "When to refer", before its Check yourself).
- **REVERTED in round 2.** ~~Re-logged (not a contradiction fix): the round-0 change "kidney-protective drugs" → "blood-pressure drugs" in renal-flip.yml sodium.ckd.why, quiz q2 option b and q8 option a feedback is **harmonisation** with the chapter's wording ("lets blood-pressure drugs work better"), not a decision-1 contradiction; both phrases describe ACE inhibitors/ARBs. Kept.~~ Being outside decision 1, the change should not have been made; round 2 restored HEAD's "kidney-protective drugs" in all three places. The case's "helps his ACE inhibitor protect the kidney" was never changed.

### Density, cohesion and grammar (§11j)

- At a glance sentence 2 (about 44 words): "It is the shared downstream organ damage of the drivers behind obesity, type 2 diabetes and cardiovascular disease, the renal end of the cascade that runs through those conditions (see …)" → "It is the renal end of the cascade that runs through obesity, type 2 diabetes and cardiovascular disease, and it shares their drivers (see …)".
- "The goal at this stage is recognition" → "The goal here is recognition" (not a disease stage).
- "…where heart disease mostly changed how much of certain foods" → "…whereas heart disease mostly changes how much of certain foods".
- Protein: "the lever is recognised and referred, not applied as a number from memory" → "the clinician recognises the lever and refers the patient instead of applying a number from memory"; quiz q3 option a: "why the lever is recognised and referred, not applied from memory" → "why the target is left to the renal dietitian, not applied from memory".
- 🍜 Eating out: the 9-item + 6-item one-sentence list → lead-in "…are specific and local, and fall into two groups:" plus a two-row form-by-relation table (Hazard | Common local sources: High potassium; Additive phosphate). Same foods, same order; leaching sentence and [@nkfsEatingRightCKD] kept after the table. Tables 0 → 1.
- Antithesis trim: "Renal nutrition is individualised medical nutrition therapy, not a fixed list to hand out." → "Renal nutrition is individualised medical nutrition therapy." (the at-a-glance "no single renal diet / A printout is not a prescription" carries the point). The verifier's other example (line 135 → "only a possible benefit") was NOT applied: it contradicts the major fix restoring HEAD's hedge. Remaining "X, not Y" contrasts each name a misconception the quiz/case tests (recognition not threshold recall; absolute avoid not portion-controlled; not a millilitre limit; a dietitian, not a list).

### Island and case text

- Case intro node: deleted the third paragraph ("Work through the visit. Classify his risk, … Your choices branch the case."), which repeated the chapter's Practise instruction (decision 9). The intro now holds only the scenario.
- Quiz q2 correct option: "Eat more potassium, or a potassium salt substitute" → "Eating more potassium or a potassium salt substitute" (gerund, parallel with the distractors). Deviation from the verifier's "Eating more potassium, or using a potassium salt substitute" (59 characters): that would make the correct option the longest by 8+ characters (§11g length cue); this form is 52, against 42–51 for the distractors.
- Case end-partial: "slipped on at least one key point" → "slipped on at least one point".
- Line-wrap tidy only: remedial-potassium para 2 and the Eating out leaching sentence reflowed.

### Gate (round 1)

- Citation multiset: IDENTICAL to HEAD (37 keys, 65 instances).
- Islands 3 → 3; figures 2 → 2; callouts 4 → 10 (Learning objectives + 5 Check yourself, unchanged from round 0); tables 0 → 1 (the Eating out form-by-relation table).
- All HEAD `{#fig-…}` ids present (HEAD had no `{#sec-…}` ids); every `(#sec-…)` link resolves.
- copy-audit (4 files): 0 flags, 0 em dashes, 6.8 bold/1,000 words; 5 "you" lines, all clinician/instruction (altitude callout title ×2, its first sentence "You recognise…", "Your part is…", the Practise instruction).
- YAML: renal-flip.yml, chronic-kidney-disease.quiz.yml and mr-lim-ckd.case.yml load with js-yaml. validate-cases.mjs: all OK (mr-lim-ckd.case.yml OK).

## Fix round 2

Applied the verifier's round-2 issues (2 blockers, 3 majors, 17 minors; the two q3 option d minors merged
into one edit). Same four files only. Three small deviations from the verifier's exact wording, each
explained below: the q3 option d opener, the When to refer semicolon, and parentheses in the altitude callout.

### Reverted: out-of-scope round-0 change (blockers 1–2)

| Location | Round 1 | Round 2 (HEAD claim restored) |
|---|---|---|
| renal-flip.yml sodium.ckd.why | "…reduces protein leak and helps blood-pressure drugs work. It is the lever a generalist can safely reinforce." | "…reduces protein leak and helps kidney-protective drugs work. It is the lever a generalist can safely reinforce." (round-0 punctuation kept) |
| quiz q2 option b feedback | "…reduces protein leak and helps blood-pressure drugs work. It is the lever…" | "…reduces protein leak and helps kidney-protective drugs work. It is the lever…" |
| quiz q8 option a feedback | "…and it also reduces protein leak and helps blood-pressure drugs work. Unlike the potassium message…" | "…and it also reduces protein leak and lets kidney-protective drugs work. Unlike the potassium message, it does not reverse. …" |

The content-fix table row, the round-0 summary line and the round-1 "Re-logged" note are marked REVERTED
above. The chapter's own "lets blood-pressure drugs work better" sentence and the salt-vs-potassium Check
yourself answer keep the blood-pressure wording (with "albuminuria" now, below). The case's "helps his ACE
inhibitor protect the kidney" is unchanged.

### Hedges restored (case; majors 3–4)

- Objective 3: "…so skipping meals does harm; refer." → "…so skipping meals can do harm; refer."
- q-protein option a feedback: "Skipping meals does more harm than good; reassure him…" → "Skipping meals
  could do more harm than good; reassure him…" (now matches reveal-protein, which says "could").

### Citation placement (major 5)

- Eating out lead-in: "…specific and local, and fall into two groups:" → "…specific and local, and fall
  into two groups [@nkfsEatingRightCKD]:". The source of the local food lists now sits with the lists, as in
  HEAD's single cited paragraph and as in the book's other cited tables (key in the lead-in before the colon).
  The key also stays on the leaching sentence after the table. This adds one instance of an existing key:
  multiset 65 → 66 instances, key set unchanged (37 keys). The table cells are untouched.

### Content fixes (decision 1)

| Location | Before | After | Category |
|---|---|---|---|
| chapter, opener (changed in round 0; logged now) | "…in Singapore this is overwhelmingly the downstream damage of diabetes" (HEAD) | "In Singapore, chronic kidney disease is mostly the downstream damage of diabetes…" | Internal consistency: the hook brought into line with the chapter's own cited figure ("roughly 2 in 3 new cases" [@nkfsKeyStats]) |
| chapter, Singapore picture para 1 run-in | "**Most kidney failure in Singapore is driven by diabetes.**" (round 0; HEAD "The burden is a diabetes story.") | "**Diabetes drives most new cases of kidney failure in Singapore.**" | Label misnames the content: the cited figure it introduces counts new cases ("roughly 2 in 3 new cases are due to diabetes"), not all kidney failure |
| chapter, LO2 | "…and recognise that confirmed CKD makes the diet dietitian-led." | "…and recognise that high-risk CKD makes the diet dietitian-led." | Internal contradiction: the blanket "confirmed CKD = dietitian-led" claim conflicts with the cited trigger list, ACE's "not every patient needs a dietitian, but those with complex needs do", and the close. New wording is the at-a-glance's own ("high-risk CKD … from that point on the patient's diet is a specialist matter") |
| chapter, Check yourself (refer) answer | opened "Once CKD is confirmed, individualised nutrition is the treatment, and it is dietitian-led. CKD with diabetes is itself a trigger…" | first sentence deleted: "CKD with diabetes is itself a trigger for referral, because the advice he needs exceeds general healthy eating: …" | Same contradiction; the answer now rests on the cited trigger. No sourced claim changed (the source sentence in When to refer stays; see deferred concern 9) |

### Restored content (dropped in rounds 0–1)

| Location | Before (round 1) | After (round 2) |
|---|---|---|
| chapter, Practise paragraph | "…handle the potassium advice and the protein mistake safely, and choose the one lever you can reinforce." | "…handle the potassium advice and the protein mistake safely, choose the one lever you can reinforce, and notice where prescribing a number instead of referring would be the wrong reflex." HEAD's refer-don't-prescribe prompt restored. "instead of referring" replaces HEAD's ", rather than referring,": the meaning is identical, and it keeps the chapter at 2 "rather than" (the audit marks 3 or more; the verbatim clause made it 3) |
| quiz q3 option d feedback | "Stopping protein would accelerate wasting. On dialysis the target is increased relative to the pre-dialysis target." | "Stopping protein would accelerate wasting, so protein is never stopped. On dialysis the target is higher than before dialysis." Minors 9 and 22 merged: HEAD's categorical rule is restored and the "target … target" repetition is gone. The verifier's opener "Protein is never stopped, because…" was not used verbatim, because option c's feedback opens "Protein advice…" and §11g forbids two consecutive feedbacks with the same opening word (the reason round 0 reworded this line) |
| case q-potassium option b text | "Yes to both: potassium is heart-healthy and low-sodium salt lowers his blood pressure." | "…lowers his blood pressure, so more is better." The feedback quotes "more is better". The distractor is 105 characters against 93 for the correct option, so there is no length cue toward the answer |

### Form, voice and density (§11g, §11j)

- When to refer (minor 11): the fragment lead-in and lower-case, semicolon-ended items → "Refer whenever the
  advice needed exceeds general healthy eating; in practice, five findings trigger a referral
  [@kdoqi2020nutrition; @aceCKD2023]:" plus five capitalised full-sentence items ending in full stops ("eGFR is
  falling, or is roughly in category G3b or worse." / "CKD coexists with diabetes." / "Potassium or phosphate
  blood levels are abnormal." / "There is weight loss or any sign of protein-energy wasting." / "The patient is
  starting dialysis."). Deviation: the semicolon between the principle and "in practice, …" is kept (the
  verifier used a full stop). One sentence lets the existing keys cover both the principle and the triggers,
  as in HEAD. The lead-in is still a full sentence, and the keys are unchanged.
- Terminology (minor 12): "reduces protein leak" → "reduces albuminuria" in the Sodium section ("…and it also
  reduces albuminuria and lets blood-pressure drugs work better [@kdigo2024ckd; @kdoqi2020nutrition]") and in
  the salt-vs-potassium Check yourself ("…and it also reduces albuminuria and helps blood-pressure drugs
  work"). Albuminuria is bold-defined in the at-a-glance. "Protein leak" stays in renal-flip.yml, the quiz and
  the case (plain island text).
- Close (minor 13): "It looks like a dietitian, not a list." → "It looks like a dietitian's individual plan,
  not a printed list." The three bullets after it are unchanged.
- At a glance bullet 2 (minor 14; 42 words) split: "…medical nutrition therapy (see the
  [*Interprofessional Practice & Referral*](…) chapter). It changes with the stage of disease and with
  **dialysis** (treatment that partly takes over the kidney's clearance of wastes and water), including the
  type of dialysis. A printout is not a prescription [@kdoqi2020nutrition; @aceCKD2023]."
- Protein callout (minor 15; 53 words) split: "…tip into protein-energy wasting. This defined syndrome of
  low body and muscle mass, poor intake and abnormal blood chemistry is common on dialysis (roughly a third to
  a half of patients) and strongly linked to death [@fouque2008pew; @carrero2018pewprev;
  @bonanni2011pewmortality]." Keys unchanged.
- #fig-ckd-levers (minor 16): caption "…risking hyperkalaemia, and driving bone–mineral disease and acidosis."
  → "…risking hyperkalaemia, and driving CKD–mineral and bone disease and acid build-up." (the defined term,
  and the "acid builds up" of the prose and the SVG labels). The optional move is applied: the figure line now
  sits after the four-item consequences list, directly before "The five dietary levers in the figure exist…".
  Nephrons, hyperkalaemia and CKD–mineral and bone disease are therefore defined before the caption uses them,
  and the figure sits beside the paragraph that interprets it. Figure count and id unchanged.
- "reinforce … can safely reinforce" (minor 17): LO6 → "Reinforce sodium reduction, the one lever that is
  safe for a generalist to advise on, and recognise when to refer to a renal dietitian." Altitude callout →
  "Your part is to reinforce sodium reduction (the one lever that is safe for a generalist), avoid the
  do-no-harm traps (a potassium salt substitute or star fruit in the wrong patient), watch for wasting, and
  **refer**." Deviation: parentheses instead of the verifier's commas. Between commas, the appositive reads as
  one more item in the verb series (the problem minor 20 fixes in the case), and HEAD also had "(sodium)" in
  parentheses. Extension (not in the verifier list): case objective 4 had the same repetition, and round 1
  had made LO6 match it, so it now reads "Reinforce the one lever that is safe for a generalist to advise on
  (cutting sodium) and refer the rest, without setting a fluid limit in millilitres or starting a phosphate
  binder."
- LO4 (minor 18): "…becomes hazardous in advanced CKD, and why star fruit is an absolute avoid." → "…and
  explain why star fruit is an absolute avoid."
- Case remedial-potassium (minor 20): "…so both can drive hyperkalaemia,[line break]a high blood potassium that
  can disturb the heart's rhythm, and his ACE inhibitor raises potassium as well." → "…so both can drive
  hyperkalaemia (a high blood potassium that can disturb the heart's rhythm), and his ACE inhibitor raises
  potassium as well." Paragraph reflowed.
- renal-flip.yml caption (minor 21): "For the public, eating more potassium, a potassium salt substitute and
  the DASH pattern are all sound." → "For the public, eating more potassium, using a potassium salt substitute
  and following the DASH pattern are all sound." Parallel, matches the at-a-glance, plain text.
- Line-wrap tidy only (no wording change): Singapore picture para 1, the close paragraph, the Sodium
  paragraph and the salt-vs-potassium Check yourself answer.

### Deferred content concern (added)

9. The blanket "confirmed CKD = dietitian-led" claim remains in: When to refer sentence 1 ("Once CKD is
   confirmed, individualised nutrition is the treatment, and it is dietitian-led."); quiz q1 correct feedback
   ("once CKD is confirmed, individualised nutrition is dietitian-led"); case objective 1 ("recognise that once
   CKD is confirmed, nutrition is individualised, dietitian-led work"), q-classify option a feedback ("recognise
   that once CKD is confirmed, individualised nutrition is the treatment and it is dietitian-led"), end-good
   keyPoint 1 ("once confirmed, nutrition is individualised, dietitian-led work") and end-partial keyPoint 1
   ("confirmed CKD makes nutrition dietitian-led"). It sits uneasily with the chapter's cited trigger list
   ("Refer whenever the advice needed exceeds general healthy eating"), with ACE's "not every patient needs a
   dietitian, but those with complex needs do [@aceCKD2023]" and with the close ("A person with early CKD mostly
   needs … the ordinary heart-healthy plate"). Check what KDOQI 2020 and ACE 2023 each say about who should be
   referred, then set the book's line in all six places. Left verbatim (decision 1). Related to concern 1.

### Gate (round 2)

- Citation key set: IDENTICAL to HEAD (37 keys). Multiset: 65 → 66 instances. The only difference is one
  added `@nkfsEatingRightCKD` (3 → 4) on the Eating out lead-in, as the issue specified. No key moved or was
  dropped.
- Islands 3 → 3. Figures 2 → 2 (`#fig-ckd-levers` moved within the science movement, `#fig-phosphate`
  unchanged). Callouts 4 → 10 and tables 0 → 1, both unchanged from round 1.
- All HEAD `{#fig-…}` ids are present (HEAD had no `{#sec-…}` ids), and every `(#sec-…)` link resolves.
- copy-audit (4 files): 0 flags, 0 em dashes, 6.8 bold/1,000 words, 2 "rather than" (no marker). 5 "you"
  lines, all clinician or instruction: the altitude callout title (×2), "You recognise…", "Your part is…" and
  the Practise instruction.
- YAML: renal-flip.yml, chronic-kidney-disease.quiz.yml and mr-lim-ckd.case.yml all load with js-yaml.
  validate-cases.mjs: exit 0, all 37 cases OK (including mr-lim-ckd.case.yml).
- Structure, checked programmatically against HEAD, is unchanged. Quiz: ids, option counts and `correct`
  flags. Case: node ids, types, `correct`, `goto`, `effects`, `next`, route rule, `objectivesMet`,
  `references`, persona and objective count. Island: ids, contexts, verdict kinds and credit. No two
  consecutive feedbacks share an opening word (quiz q3 now opens Before/Dialysis/Protein/Stopping).
- Glossary: no definition changed this round. The rows above stand, with the round-1 CKD row update.
