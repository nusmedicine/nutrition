# Retrofit log: book/chapters/part2-intro.qmd (Reading the Life Stages)

Light page (Part II landing page, `{.unnumbered}`, two paragraphs). Only file touched:
`book/chapters/part2-intro.qmd`. No YAML, no case, so no YAML validation or validate-cases run was needed.

## Gate (HEAD vs working copy)

| Check | Before | After |
|---|---|---|
| Citation multiset | none | none (identical) |
| data-island | 0 | 0 |
| Callouts | 0 | 0 |
| Tables | 0 | 0 |
| Figures | 0 | 0 |
| {#sec-}/{#fig-} ids | none | none |
| H1 | `# Reading the life stages {.unnumbered}` | unchanged |

Copy audit (`node scripts/copy-audit.mjs --you book/chapters/part2-intro.qmd`): before 0 flags, 2 "you", bold 11/1,000;
after 0 flags, 0 "you", 0 em dashes, 0 curly quotes, bold ~15/1,000 (3 defining uses). No non-ASCII characters remain
(the decorative arrow is gone).

## Summary of changes (style; plan followed, Uncertainty 1 default A)

- Deleted the dramatic opener "Nutrition is not static." (stacked with the next sentence, which says it).
- "The six chapters ahead follow that course, each built on the same **internal ↔ external** template" (book acting,
  decorative arrow, frame label that the six chapters never use) → state-verb sentence plus two defining sentences
  that use the life-stage chapters' own terms: **internal drivers** (growth, hormones and physiology) and
  **external levers** (the food environment, activity, and who a person eats with). Split the 45-word sentence.
- Removed six emphasis italics (*inside*, *outside*, *anticipate*, *recognise*, *advise simply*, *do*); only the
  Part title *Assessing and Advising Patients* stays italic.
- "**recognise and refer.**" → "**recognise and refer**." (full stop out of the bold); posture defined once, in one
  wording ("anticipate the stage-defining need, recognise the red flag, advise what is simple and safe, and refer"),
  merging the in-paragraph triad with the closing restatement.
- Chatty colon construction ("…: those come later") → plain sentence.
- Both "you" (student as learner) converted to passive ("taught in Part III").
- "So when a chapter here says a skill belongs to a later chapter, that is a genuine handoff. Recognise the need,
  advise what is simple and safe, and refer." (book acting, "So" opener, sincerity framing, restatement) →
  "When a life-stage topic needs one of those skills, the skill is left to its Part III chapter."

## Content fixes (decision 1)

1. Category: contradiction with another chapter's explicit, cited text (decision 1, third bullet).
   - Before: "Taking a full diet history, appraising a trial, designing a therapeutic plan: those come later. They are
     real skills, and you will learn to *do* them in Part III, *Assessing and Advising Patients*…"
   - After: "Taking a full diet history and appraising a trial come later. They are real skills, taught in Part III,
     *Assessing and Advising Patients*, … Designing a therapeutic plan is left to the dietitian (see the
     *Interprofessional Practice & Referral* chapter)."
   - Reason: the page said designing a therapeutic plan is a skill taught in Part III, but Part III says the opposite
     in cited text: *What a Healthy Diet Looks Like* l.53 ("Writing therapeutic meal plans … is a dietitian's work",
     @crowley2019), *Assessing Diet & Talking to Patients* l.50 ("a therapeutic plan lie[s] beyond first contact",
     @crowley2019 @aclm2022comp) and *Interprofessional Practice & Referral* l.69–70 and l.105 (an individualised
     therapeutic plan is medical nutrition therapy, delivered by a registered dietitian, @ada2026standards). The
     pointer is retargeted to the chapter that covers it; no citation added to this page.

## Deferred content concerns

- Part III skill list (plan Uncertainty 1): "in the chapters on reading a healthy pattern, weighing the evidence,
  assessing a diet and counselling for change" names four of Part III's five chapters; it predates folding
  *Interprofessional Practice & Referral* into Part III (decision K). Kept the four (default A). The new last sentence
  now names the referral chapter for therapeutic plans, which partly closes the gap; the author may still prefer
  option B ("…counselling for change and referring within the wider team").

## Deferred backlog

- None for this page. No learning objectives, chapter map, Check yourself, house blocks or figures on a light page; a
  six-stage `.flow` was considered by the planner and rejected (sidebar already lists the chapters; Pregnancy &
  Lactation is not a strict step after adulthood).
- Cross-chapter note for the orchestrator (from the plan, consistent with decision 5): the six life-stage chapters
  should use "internal drivers" / "external levers" unbolded (owned here), and "recognise and refer" should not be
  re-bolded as a definition elsewhere (e.g. `book/cases/rachel-athlete.case.yml` bolds it).

## Glossary rows owned (for book/glossary.qmd; not edited here)

| Term | Meaning | Introduced in |
|---|---|---|
| External levers | What changes outside the body at a life stage: the food environment, activity, and who a person eats with | Reading the Life Stages |
| Internal drivers | What changes inside the body at a life stage: growth, hormones and physiology | Reading the Life Stages |
| Recognise and refer | The posture of the life-stage chapters: anticipate the stage-defining need, recognise the red flag, advise what is simple and safe, and refer | Reading the Life Stages |

## Owner terms (term-ownership.md) absent from the page

None. All three terms owned by part2-intro are bold-defined here.
