# Retrofit decisions (authoritative; override anything in an individual plan that conflicts)

Decided by the author on 2026-10-21, after reading the 30 plans:

1. **Content issues: fix internal consistency, defer source-checking.** In your own files, fix:
   - cross-references that point to a chapter that does not cover the topic (retarget to the chapter that does,
     or drop the pointer; never add content to another chapter);
   - contradictions inside the book between a chapter and its own quiz/case/island (resolve toward the cited
     chapter text, e.g. a case saying 6–12 weeks where the chapter's cited text says 4–12);
   - contradictions with another chapter's explicit, cited figure (e.g. "BMI 27 = obese" vs the book's ≥27.5
     Asian cut-off), resolved toward the cited text;
   - a heading or label that misnames what the content shows (e.g. stroke counted as a "heart-disease event").
   Do NOT change any claim that would need checking against a source (citation may not support claim, a number
   may be wrong, a trial result may be misdescribed). Log those as deferred content concerns, with location and
   reason. Every content fix you make must be logged with before → after and the reason category.
2. **Glosses: allowed.** One-line standard textbook definitions and abbreviation expansions (RCT, DXA, cytosol,
   anion gap, pre-eclampsia, AgRP/POMC expansions, …) may be added even where the chapter text does not contain
   them. No new claims, numbers or citations. Keep each gloss short and uncontroversial.
3. **Term ownership: the owner chapter defines.** See term-ownership.md. The chapter that teaches a term properly
   bolds and defines it and owns its glossary row; earlier or later passing mentions stay unbolded, with a brief
   plain gloss only if the sentence needs it.
4. **Structure: small moves only.** Allowed: merging or moving whole sections, or folding a one-paragraph section
   into a neighbour, without rewriting the prose, where needed to give a ≤4-branch chapter map or the §11c order
   (movements → The Singapore picture → close). Every {#sec-…} id is kept. Deferred (log, do not do): splitting
   oversized movements (e.g. Integrative Metabolism's nine-subsection middle movement), adding missing Part II
   "Recognising trouble, and when to refer" movements, adding missing 🔬🍜🍳 house blocks, adding new teaching
   figures (§11f).

Orchestrator decisions (apply identically everywhere):

5. **Part II "two drivers" block** (the bold-label "What's changing inside / outside" list in the at-a-glance of
   all six life-stage chapters) becomes the same two-row table in every Part II chapter, introduced by one
   sentence:

   ```markdown
   | Driver | What changes at this stage |
   |---|---|
   | Internal drivers (inside the body) | … |
   | External levers (life and environment) | … |
   ```
   Fill the right column from the chapter's existing text (no new content). The "internal drivers / external
   levers" terms are owned by the Part II intro (Reading the Life Stages); do not bold them in the chapters.
6. **Canonical chapter names** for every cross-reference ("the *Name* chapter" in prose, quiz and case YAML;
   plain "the Name chapter" in diagram and structure YAML, which render plain text) and for the glossary
   "Introduced in" column: see chapter-names.json. Note: "the *Gut Microbiome* chapter" (no "The").
7. **Preface (index.qmd):** keep "you" only in the reader-instruction and scope sentences; name the five parts by
   their titles. **Colophon:** "Anthropic's Claude models" (no model family named).
8. **Sim cases (book/cases/sim-*.case.yml):** never touch `brief:`. In the student-facing `objectives` list and a
   patient-chat `objective`, which are also the AI evaluator's rubric, make only em-dash and "myth" swaps.
   Case-section headings in the two capstone chapters become topical subtitles, applied the same way in both.
9. **A table or list that repeats an island:** keep the cited static version in the chapter; cut the island
   text that merely repeats the prose beside it (intros, notes, footers).
10. **"you" in Check yourself titles** is fine where the question addresses the reader as clinician
    ("What do you tell them?").

Working rules for every agent:
- Edit ONLY the files you own (your chapter and its listed data files). Never edit book/glossary.qmd,
  _quarto.yml, AUTHOR.md, scripts, components or another chapter.
- Never run git checkout/restore/stash/reset/commit, and never run scripts/render.mjs or quarto (other agents
  are working in the same checkout). Read-only git (show, diff, grep, log) is fine.
- Validate every YAML file you touch with:
  node -e "require('<repo>/components/node_modules/js-yaml').load(require('fs').readFileSync('<file>','utf8'))"
