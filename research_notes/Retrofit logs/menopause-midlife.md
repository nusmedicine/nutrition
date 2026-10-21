# Retrofit log: Menopause & Midlife Health (`menopause-midlife`)

Files changed:

- `book/chapters/menopause-midlife.qmd`
- `book/diagrams/menopause-timeline.yml`
- `book/quizzes/menopause-midlife.quiz.yml`
- `book/cases/menopause-soy.case.yml`

## Summary of changes

- **Front matter.** Italic opener ("genuinely" trimmed); new Learning objectives callout (6 verb phrases);
  chapter map (`.concept-tree`, 3 branches, both split movements with 2 children each).
- **Headings and ids.** All 12 headings carry `{#sec-…}` ids (HEAD had none). Common-belief headings are
  now neutral questions: "Does menopause cause weight gain or slow the metabolism?", "Does soy ease hot
  flushes, and is it safe?". Punchline/imperative headings made topical ("Bone: fast loss around the final
  menstrual period", "The cardiometabolic shift: which changes are menopause-linked", "When nutrition is not
  the answer").
- **At a glance.** "Menopause" bold-defined; FMP, perimenopause and postmenopause pre-taught as a
  definition list. The bold-label "What changes inside/outside" list became the Part II driver table
  (decision 5; overrides the plan's prose version), introduced by one sentence that points to the
  *Reading the Life Stages* chapter. "A useful warning up front." scaffolding deleted.
- **Voice (§11g).** "myth" framing removed throughout (chapter, diagram, quiz, case); "the book returns"
  personification, "remarkably", "quietly", "enjoy", "critical", "The precise, teachable point is that",
  "Here the point is to", "This matters locally:", "It is worth getting right because" removed; both
  movement intros deleted (no-movement-intro rule); bold run-in lead-ins on argument paragraphs replaced
  with topic sentences; "how you counsel" in the Singapore picture made third person. The only "you"
  left in the chapter is the model line spoken to the patient.
- **Five passes / form by relation.** Bone mechanism now opens with a definition list (bone remodelling,
  RANKL; osteoclasts glossed in passing, owned by *Bone & Joint Health*). Long sentences split (LDL step,
  pooled-trial result, equol, survivors, vitamin D, GSM, the two-errors sentence). Citation groups split by
  claim per the bib notes (Taku + Chen / Lethaby; Wu meta / Shu + Nechuta). Bone-bank 🍜🍳 callout's
  five parallel food actions became a bulleted list; the five "limits" bullets keep list form but open with
  plain topic sentences (no inline-header labels). The Singapore picture became a 4-item bulleted list plus
  the referral sentence. The close gained a `.spectrum` (nothing → a little → a lot) before its prose;
  the section-summary sentence restating the opener was deleted.
- **Bold.** 82 bold spans → 10, all at defining uses (bold density 43.5 → 3.4 per 1,000 words). No bold
  in either house callout.
- **Check yourself.** Six collapsed callouts, two at the end of each `##` movement (weight/metabolism;
  bone/heart; soy/limits). Answers carry no citations and rest on the chapter text.
- **Cross-references.** Canonical names from chapter-names.json; chapters never act (all pointers in
  parentheses). Added reminders: *Energy Balance* (visceral fat), *Adulthood & Working Life* (the
  Pontzer lifespan data, which that chapter covers in "The metabolism doesn't crash at 40").
- **Diagram YAML.** `intro:` deleted (axis titles, the baseline line and the component's own "Curves are
  schematic" source line already show it; decision 9); captions rewritten without "Myth:", "you", the
  capitalised "IS", the imperative "Be precise:" and all 7 em dashes; notes carry no dash (the component
  prints one).
- **Quiz YAML.** No "Correct." openers, no em dashes (22 → 0), no bold in stems, "teaching point" and
  "myth" gone, "LDL-C" → "LDL-cholesterol", "transmenopause" → "the window around the final period",
  option lengths evened (correct options trimmed, rationale moved to feedback). No two consecutive
  feedbacks open with the same word.
- **Case YAML.** Em dashes 35 → 0; "Right."/"Correct," openers gone; "myth" ×7 → belief/fear wording;
  "honest" removed; "Let's" (doctor speech) → "We can also talk about…"; one bold warning (crash
  dieting) left in the remedial body; closing praise line "That's midlife literacy at its most useful."
  deleted; "rather than" 5 → 1.

Gate (HEAD → working copy): citation multiset IDENTICAL; islands 3 → 3; callouts 2 → 9 (+1 Learning
objectives, +6 Check yourself); tables 0 → 1 (Part II driver table, decision 5); figures 0 → 0; HEAD had no
`{#sec-…}`/`{#fig-…}` ids, so none can be missing. Audit (`--you`, four files): 92 flags → 0. All three
YAML files parse; `validate-cases.mjs`: `OK menopause-soy.case.yml`.

## Content fixes (decision 1)

| File | Location | Before | After | Category |
|---|---|---|---|---|
| chapter | soy section, appraisal pointer | "turn to the *Evidence vs Hype & Everyday Questions* chapter, where soy is one of the best worked examples" | "(The appraisal toolkit … is in the *Evidence vs Hype* chapter.)" | Cross-reference to a chapter that does not cover the topic: `evidence-vs-hype.qmd` has no soy, isoflavone or menopause material; the false clause is dropped, the toolkit pointer kept |
| chapter | bone, protein paragraph | "sit in the Part I *Macronutrients* and *Healthy Ageing* chapters" | "Protein targets are in the *Macronutrients* chapter, and sarcopenia … in the *Healthy Ageing* chapter" | Label misnames: *Healthy Ageing* is Part II, not Part I |
| chapter | bone, closing pointer | "the calcium and vitamin-D reference intakes to the Part I *Micronutrients* chapter" | "the calcium and vitamin D reference intakes, are in the *Bone & Joint Health* chapter" | Cross-reference retargeted: the *Micronutrients, Hydration & Electrolytes* chapter gives no calcium or vitamin D reference intakes; *Bone & Joint Health* has the HPB calcium requirement table and the HPB vitamin D reference intake |
| chapter | soy, efficacy | "Menopause societies therefore do not recommend" | "The North American Menopause Society therefore does not recommend" | Vague attribution named to the single cited source (`namsNonhormone2023`, NAMS 2023 position statement) |
| quiz / case | q5 a, q5 c feedback; case q-efficacy a feedback; end-good keyPoints[0] | "societies don't recommend it" / "menopause societies don't recommend" / "not endorsed by menopause societies" | "the North American Menopause Society does not recommend …" | Quiz/case aligned to the chapter text |
| chapter | cardiometabolic P1 | "Professional consensus now treats midlife as a critical early-prevention window for women's heart health" | "An American Heart Association scientific statement treats midlife as a window for early prevention of cardiovascular disease in women" | Vague attribution named to the cited source (`elkhoudary2020ahaMenopause` is an AHA scientific statement) |
| chapter | soy, efficacy | "the highest-quality synthesis finds" | "The highest-quality synthesis, a Cochrane review, finds" | Cited source named (`lethaby2013cochranePhyto`, Cochrane Database Syst Rev) |
| case | end-good keyPoints[1] | "ER-positive disease"; "The food-vs-supplement distinction matters." | "oestrogen-receptor-positive disease"; "The reassurance is for soy foods, not high-dose isoflavone supplements." | Terminology aligned to the chapter's defined term and its stated distinction |
| diagram | bone layer caption | "This is the window to have acted in." | "This is the window to act in." | Aligned to the chapter ("recognise the window and act early") |

## Deferred content concerns (need source checking; not changed)

1. **LIFTMOR comparator** (chapter bone P4, `@watson2018liftmor`): "held or even modestly raised bone density
   where supplements alone did not"; the trial's control arm was a home-based low-intensity exercise
   programme (bib note: "vs control"), not supplements alone.
2. **NAMS scope vs "reasonable to try"** (chapter model line; quiz q5; case q-efficacy a "fine to try";
   Check yourself C1): the NAMS 2023 bib note says soy foods, extracts and S-equol are not recommended for
   flushes, which sits uneasily with presenting soy foods as "reasonable to try" for flushes.
3. **Aso 2012 is one trial** (chapter equol sentence): text says "preliminary trials" (plural); bib note:
   "Single small trial".
4. **Fat-redistribution citation** (chapter weight P2, second `@greendale2019swanBodyComp`): the bib note
   covers total fat and lean mass only; the hip-to-abdomen shift may be better supported by
   `@elkhoudary2020ahaMenopause` or `@janssen2008swanMetS`.
5. **Fast-loss window length** (chapter bone P1 and diagram bone caption "two to three years after"; diagram
   bone note "−1 to +2 years"; quiz q3 c "roughly 3-year window"): SWAN defines one year before to two
   years after the FMP; the three files phrase it differently.
6. **Uncited claims:** the Western mean age "51" (Singapore picture); "Singapore now has its own specialist
   menopause guidance" (Singapore picture).
7. **Bib title conflation:** `wu2008sgSoy` title combines two papers; Br J Cancer 99:196–200 is the
   Singapore Chinese Health Study soy paper alone. Fix the bib entry.
8. **"far down the list"** (at a glance): overstates the IWHP result (hot flushes ranked fifth of the top
   five); it fits Chim 2002 (17.6% vs 51.4% for aches).
9. **`hpbNNS2010`** carries a bib note asking to re-verify the female calcium figure; the chapter says only
   "at or below target".
10. **Survivor wording in the case** (q-safety a feedback): "linked to a lower risk of breast cancer, even
    for women who've had it" (original wording kept); the survivor data are on recurrence and mortality.

## Deferred backlog (structure, house blocks, figures)

- **Assessment design (book-wide):** the correct option is first in every quiz question (7/7) and every case
  MCQ (4/4); neither `Quiz.svelte` nor `CasePlayer.svelte` shuffles.
- **Part II "Recognising trouble, and when to refer" movement** (§11h life-stage recipe) with a do-no-harm
  callout and refer table: not added (decision 4). Red flags stay in "When nutrition is not the answer".
  Candidate: promote the weight-inclusive/disordered-eating bullet to a do-no-harm callout.
- **No 🔬 Food science callout** in this chapter (only 🍜/🍳): adding one is deferred (decision 4).
- **No substantive teaching figure** beyond the timeline island (§11f): a bone-remodelling / RANKL
  schematic would teach the oestrogen-brake mechanism.
- **Evidence vs Hype:** the author may want soy added there as a worked appraisal example (the deleted
  clause claimed it was one).
- **Glossary:** the 15 rows below are for `book/glossary.qmd` (not edited by this agent).
- **Downstream:** *Bone & Joint Health* should use bone remodelling and RANKL plain (owned here); this
  chapter now uses osteoclast and osteoporosis plain, so *Bone & Joint Health* must bold-define them.

## Glossary rows owned by this chapter

| Term | Meaning | Introduced in |
|---|---|---|
| Apolipoprotein B (apoB) | The protein carried on each LDL particle; it steps up with LDL-cholesterol around the final menstrual period | Menopause & Midlife Health |
| Bone remodelling | The continual turnover of bone, in which old bone is broken down (resorption) and new bone is laid down (formation) | Menopause & Midlife Health |
| Equol | The more active form of a soy isoflavone, made by gut bacteria that only some people carry | Menopause & Midlife Health |
| Final menstrual period (FMP) | A woman's last menstrual period, the clinical reference point for dating menopause | Menopause & Midlife Health |
| Genitourinary syndrome of menopause | Vaginal dryness and urinary symptoms after menopause; no food or supplement treats it | Menopause & Midlife Health |
| Isoflavones | The chief phytoestrogens of soy | Menopause & Midlife Health |
| Mechanical loading | Exercise that stresses the skeleton through impact or resistance; the strongest lever on bone at menopause | Menopause & Midlife Health |
| Menopausal hormone therapy | Prescribed hormones that replace the oestrogen the ovaries no longer make | Menopause & Midlife Health |
| Menopause | The reproductive transition in which the ovaries wind down and oestrogen falls, dated clinically to the final menstrual period | Menopause & Midlife Health |
| Oestrogen-receptor-positive | Describes a breast cancer whose growth is sensitive to oestrogen | Menopause & Midlife Health |
| Perimenopause | The years of fluctuating ovarian hormones before the final menstrual period | Menopause & Midlife Health |
| Phytoestrogens | Plant compounds, chiefly the soy isoflavones, that weakly mimic oestrogen | Menopause & Midlife Health |
| Postmenopause | The years after the final menstrual period | Menopause & Midlife Health |
| RANKL | A signalling molecule that promotes bone resorption by osteoclasts; it rises when oestrogen falls | Menopause & Midlife Health |
| Tamoxifen | An anti-oestrogen drug used to treat oestrogen-receptor-positive breast cancer | Menopause & Midlife Health |

Plan rows dropped per term-ownership.md: osteoclast and osteoporosis (→ *Bone & Joint Health*),
weight-inclusive (→ *Obesity & Metabolic Syndrome*); all three are used unbolded here (osteoclasts and
osteoporosis with a brief plain gloss).

Terms used plain here, owned elsewhere: sarcopenia (*Healthy Ageing*), metabolic syndrome (*Obesity &
Metabolic Syndrome*), anaemia (*Micronutrients, Hydration & Electrolytes*), central (visceral) fat,
fat-free mass, total energy expenditure (*Energy Balance*), LDL (*Macronutrients*), DASH and Mediterranean
patterns (*Why Nutrition Matters*), resistance exercise (*Adulthood & Working Life*), internal drivers /
external levers (*Reading the Life Stages*), oxalate (*Micronutrients, Hydration & Electrolytes*).

## Owner terms not occurring in this chapter

None: all 15 terms assigned to `menopause-midlife` in term-ownership.md occur and are defined here.

## Fix round 1 (verifier findings)

### Citation scope restored (gate-safe: no key added, so the multiset is unchanged)

The verifier's "repeat the key" option would add occurrences and break the IDENTICAL multiset, so every
split that stranded a claim from its key was rejoined (comma or semicolon) instead:

| Location | Before (round 0) | After |
|---|---|---|
| weight P2 (blocker) | "…lean (muscle) mass falls. Fat also redistributes … [@greendale2019swanBodyComp]" | "…lean (muscle) mass falls, and fat redistributes … [@greendale2019swanBodyComp]" (HEAD's one-sentence scope) |
| soy efficacy (major) | "…around a fifth fewer. That effect is far weaker and slower than the effect of **menopausal hormone therapy** … [@taku…; @chen…]" | "…around a fifth fewer, an effect far weaker and slower than that of **menopausal hormone therapy** … [@taku2012isoflavones; @chen2015phyto]" |
| energy expenditure | "…through menopause. Its slow decline, about 0.7% a year, begins only after 60 [@pontzer2021energy]" | "…through menopause, and begins its slow decline, about 0.7% a year, only after 60 [@pontzer2021energy]" |
| bone window | "…two to three years after. It reaches roughly 2% a year and removes around 7%…" | "…two to three years after, reaching roughly 2% a year and removing around 7%… [@greendale2012swanBone]" (HEAD scope; deferred concern 5 unchanged) |
| vitamin D (bone 🍜🍳) | "…not a lack of sun. Indian and Malay women are at higher risk [@cheong2021vitDsg]" | "…not a lack of sun; Indian and Malay women are at higher risk [@cheong2021vitDsg]" |
| LDL step | "…so that change is menopause-linked. Blood pressure, glucose…" | "…so that change is menopause-linked; blood pressure, glucose… [@matthews2009swanLipids]" |
| soy survivors | "…used to treat it). If anything, survivors…" | "…used to treat it); if anything, survivors… [@shu2009shanghai; @nechuta2012abcpp]" |

### Hedges and quantifiers restored (round-0 trims that strengthened a claim)

| File | Location | Before (round 0) | After |
|---|---|---|---|
| chapter | chapter map, soy node | "a modest effect, and safe as food" | "at most a modest, inconsistent effect; safe as food" |
| chapter | weight P1 | "Many women reach midlife having been told that menopause will make them gain weight and slow their metabolism" | "Almost every woman reaches midlife having been told that menopause will make her gain weight and slow her metabolism" (HEAD quantifier) |
| chapter | weight P2 topic sentence | "Weight gain at midlife follows age…" | "Total weight gain at midlife follows age…" |
| chapter | energy P | "…resistance exercise and enough protein defend." | "…resistance exercise and enough protein can defend." |
| chapter | Check yourself (bone) | "…give no net fracture benefit." | "…give no net fracture benefit in community-dwelling women after menopause." |
| chapter | learning objective 2 | "Explain why energy expenditure, adjusted for fat-free mass, does not fall at menopause, and why…" | "Interpret the evidence that energy expenditure, adjusted for fat-free mass, does not fall at menopause, and explain why…" |
| quiz | q5 a | "Reassure her soy foods are safe, but their effect on flushes is modest" | "Reassure her that soy foods are safe but only a modest, inconsistent help for flushes" (85 chars, inside the 78–87 distractor range; also restores "that") |
| quiz | q2 a | "…any drop is from muscle loss" | "…any drop is mostly from muscle loss" (the chapter's own hedge, "mostly"; the chapter's "real" was removed as a tic this round, so "real" would not match it) |
| case | q-efficacy a | "…helps flushes only a little. We can also talk about options that do work." | "…helps flushes only a little, not like hormone therapy." (answers "Can soy replace hormones?"; 95 chars vs 92/79); the offer of other options moved to the feedback: "…keeps the answer accurate and leaves room to talk about options that do work." |
| case | q-safety a | "…soy foods are safe and linked to lower risk. No need to stop." | "…soy foods are safe. No need to stop." (removes the unhedged "linked to lower risk" and trims length; the lower-risk evidence stays in the feedback) |
| case | q-weight a | "Explore her eating and body image, check she's safe, and steer her to protein and resistance exercise." | "Gently explore her eating, body image and safety, then steer her from restriction to protein and resistance exercise." (117 chars vs 112/79; restores "gently" and the move away from restriction) |
| case | q-lever a | "No single diet fixes all four. Eating well protects your bones and heart; for the dryness, I'll refer you." | "No. Eating well protects bone and heart and eases flushes a little; the dryness needs referral." (all four problems answered; 97 chars, down from 109) |

### Style, cohesion and option-length fixes

- Chapter, NAMS sentence: "The North American Menopause Society therefore does not recommend" → "On the pooled
  evidence, the North American Menopause Society does not recommend" (the paragraph split had left
  "therefore" following the equol trial).
- Chapter, weight P3: "Aggressive dieting works against this" → "Aggressive dieting works against keeping the
  muscle" (vague "this").
- Chapter, "real" tic: "Any real fall in a woman's energy expenditure" → "Any fall…"; Check yourself "so any real fall in
  a" → "so any fall in a"; sleep bullet "has cheap, real levers" → "has cheap lifestyle levers" (not
  "effective", which would strengthen an uncited efficacy claim); "are real in women aged 40–60" → "occur in
  women aged 40–60". Kept: opener "in real, specific ways", LIFTMOR "a real but bounded effect", "visceral
  fat are real" (each a contrast, not an intensifier).
- Chapter, iron bullet: "…not a life-stage need to top up: it points to blood loss…" → "…not a life-stage need to top
  up. It points to blood loss…".
- Chapter, close: deleted "They do only a little for hot flushes and nothing for vaginal dryness, which needs
  referral, not a supplement." (re-narrated the `.spectrum` immediately above it; §11j, §11c).
- Chapter, Singapore picture bullet 2: dropped "despite the climate" ("higher than the sunshine suggests"
  already says it); both keys kept.
- Chapter, soy 🍜 heading: "soy is on every hawker menu, and that's a good thing" → "soy is on every hawker menu".
- Quiz q3 a: "Loss accelerates in a window around the final period; loading exercise is the strongest lever" →
  "Loss speeds up around the final period; loading exercise is the strongest lever" (79 chars vs 79/68).
- Quiz q6 a: "Explain iron needs fall…" → "Explain that iron needs fall…".
- Case q-safety c: "Stop the tofu and soy milk and take a high-dose isoflavone supplement instead: same benefit, more
  control." → "Swap the tofu and soy milk for a high-dose isoflavone supplement instead." (q-safety now 86 / 47 / 75).

### Not applied, or applied differently

- **"Repeat the key" on five split sentences:** would change the citation multiset (the gate requires
  IDENTICAL counts), so these were rejoined instead (table above).
- **Iron requirement sentence split** ("…become unnecessary. The body also has no way to offload excess iron
  [@odsIron]"): not split. The split would leave "Requirements drop to about the level of an adult man's"
  without its key, the same detachment the blocker fixed. Only the anaemia sentence was split.
- **q-efficacy a / q-safety a / q-lever a:** the verifier's hedge-restoring wording and its length-trimming
  wording conflicted; one wording per option was chosen to satisfy both (see the hedge table).
- **Singapore picture repeats the Eating out findings** (bullets 2 and 3 vs the bone and soy callouts):
  deferred under decision 4 (cutting them is a content/structure change); bullet 2 lightly trimmed only.
- **Case q-safety b** ("To be safe, yes: cut out all soy from now on.", 47 chars) is still the shortest option;
  lengthening a distractor would be padding (§11g), so it is left.

### Re-run

Gate (HEAD → working copy): citation multiset IDENTICAL (28 keys, counts unchanged); islands 3 → 3; callouts
2 → 9 (Learning objectives + 6 Check yourself); tables 0 → 1 (Part II driver table); figures 0 → 0; HEAD had
no `{#sec-…}`/`{#fig-…}` ids; every chapter-map anchor resolves. Audit (`--you`, four files): 0 flags; the
only "you" is the model patient line. YAML: all three files parse. `validate-cases.mjs`: `OK
menopause-soy.case.yml`. The diagram YAML was not changed this round.
