# Retrofit log: colophon ("How this book was made")

File changed: `book/chapters/colophon.qmd` (light page; no data files).

## Summary of changes

- Bold removed throughout (25 per 1,000 words -> 0): the credit line, Quarto, KaTeX, Svelte, Vite, the
  language model, Qwen, Anthropic's Claude, Claude Code, and the four bold run-in labels of the numbered
  list (an inline-header list, §11g Formatting). Each label's meaning is folded into a plain topic sentence.
- Both lists now have a full introducing sentence ("It has four parts:", "The process had four stages:").
  Item counts and order unchanged (4 bullets, 4 numbered steps).
- Hybrid voice: "the linked, searchable site you are reading" -> "this linked, searchable website"; "so
  what you read is always the latest reviewed version" -> "so the published version is always the latest
  reviewed one". Kept the islands-progress notice and "Your messages pass to…" (the reader's own use of
  the islands). 3 "you" lines remain, all island usage notices.
- Long sentences split (Quarto item; the simulated-patient paragraph; research step); the simulated-patient
  paragraph split into how-it-works and what-it-is; "It is a simulation…" -> "The simulated patient is a
  practice tool…" (repeat the noun).
- Comma-bounded appositive lists put in parentheses (interactive parts; review dimensions).
- Plain words: "diffable and reviewable" -> "every change between versions can be compared and reviewed";
  "linted the cases" -> "checked the case files for errors"; "the key" -> "the access key"; "critiqued" ->
  "reviewed … adversarially".
- Passive closes made active ("Medical educators then reviewed and edited the resulting draft.";
  "A GitHub Actions pipeline rebuilds and deploys…"). "This is an educational resource" -> "This book is…".
- Logical punctuation: `"islands."` -> `"islands".`; comma added after "NUS Medicine".
- Headings unchanged (5); no ids existed; citations 0, islands 0, callouts 0, tables 0, figures 0 before
  and after. 2 internal links added (the two Integrative Cases chapters), named per chapter-names.json
  (which overrides the plan's sentence-case titles).

## Content fixes (before -> after, category)

1. Authoring process: "drafted with **Anthropic's Claude** (the Opus 4 family)" -> "drafted with
   Anthropic's Claude models" (decision 7, colophon model attribution; the named family no longer matched
   the models actually used).
2. Simulated patient: "The live patient conversations in the capstone cases" -> "The live patient
   conversations in the [*Everyday & Preventive Counselling*](cases-counselling.qmd) and [*Recognising
   Risk & Knowing When to Refer*](cases-referral.qmd) chapters" (cross-reference by canonical name,
   decision 6 / §11d; "capstone" is internal vocabulary, the Part is titled "Integrative Cases").

## Deferred content concerns

- "Figures are either original diagrams drawn for this book or openly licensed images": the preface
  callout says AI tools helped generate the figures; "drawn" may read as hand-drawn. Consider "made for this
  book". Needs the author's call on the process description.
- "rebuilds and deploys the site automatically on every change, so the published version is always the
  latest reviewed one": `.github/workflows/publish.yml` deploys on every push to `main`; "reviewed" is true
  only if every push to main is reviewed (a process claim, not checkable from the pipeline).
- Book-wide: "capstone cases" also appears reader-facing in *Behaviour-Change Counselling* and
  *Interprofessional Practice & Referral*; those owners may want the same rename.
- The H1s of `cases-counselling.qmd` ("Everyday and preventive counselling") and `cases-referral.qmd`
  ("Recognising risk and knowing when to refer") differ from chapter-names.json ("Everyday & Preventive
  Counselling", "Recognising Risk & Knowing When to Refer"). The colophon uses the canonical names; the
  capstone owners/orchestrator should confirm the H1s match.

## Deferred backlog

None (light page: no house blocks, figures or restructure apply).

## Glossary rows owned

None.

## Owner terms not in this chapter

None: term-ownership.md assigns no terms to colophon.

## Fix round 1

Verifier issues applied to `book/chapters/colophon.qmd` (6 issues, 4 edits; two pairs of issues asked for
the same change in different words, so one wording was chosen for each pair):

1. Majors 1 + 2 (list lead-in read as "the book has four parts", against the five Parts; "parts" collided
   with "The interactive parts"): "It has four parts:" -> "The build has four elements:". Repeats the
   section's key noun (build) instead of "It"; does not use "parts" and does not make the book the
   subject. Issue 2's alternative ("The website has four components:") was not used: Quarto and the
   pipeline are tools that build the site, not components of it.
2. Minors 3 + 5 (leftover label "Verification was mechanical:" overstated the scope of verification and
   broke the parallel form of the numbered list): "4. Verification was mechanical: before anything was
   committed, deterministic checks rendered the whole book, ..." -> "4. Before anything was committed,
   deterministic checks rendered the whole book, ..." (rest of the item unchanged; issue 5's wording,
   which also resolves issue 3; "deterministic checks" keeps the "mechanical" sense).
3. Minor 4 (model-family name used as a countable noun): "The model, an open-weights Qwen, is served on
   NUS infrastructure through an OpenAI-compatible interface." -> "The model, an open-weights model from
   the Qwen family, is served on NUS infrastructure through an OpenAI-compatible interface."
4. Minor 6 ("the case says so and continues" had no antecedent after the capstone rename): "The live
   patient conversations in the [*Everyday & Preventive Counselling*](cases-counselling.qmd) and ..." ->
   "The live patient conversations in the cases of the [*Everyday & Preventive Counselling*](cases-counselling.qmd)
   and ..." (verifier's first option; the "If the model is unavailable, the case says so and continues"
   sentence is unchanged, so the behaviour claim is untouched).

Lines reflowed after the edits (no wording change). No further content fixes this round.

Checks after the round:
- Preservation gate (HEAD vs working copy): citations 0 / 0, islands 0 / 0, callouts 0 / 0, tables 0 / 0,
  figures 0 / 0; no {#sec-}/{#fig-} ids before or after. Pass.
- `node scripts/copy-audit.mjs --you book/chapters/colophon.qmd`: 0 flags; 0 em dashes; bold 0 per 1,000
  words; 1 "rather than" (pre-existing "Rather than one-shot generation"); 3 "you" lines, all island usage
  notices (progress saved in the browser; "Your messages pass to…").
- No YAML or case files touched (validate-cases not needed).
