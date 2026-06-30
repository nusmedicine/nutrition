# Research — evidence base & curriculum workspace

Grounds *Health in Medicine* in evidence-based medicine. Holds the literature, guidelines,
curriculum logic, and case ideas behind the textbook, and **maps each to a chapter** so that
writing a chapter becomes "assemble the dossier," not "start from a blank page."

- **Scope:** nutrition-led, capturing intersections with the other lifestyle-medicine pillars
  (physical activity, sleep, stress, risky substances, social connection) where they bear on
  metabolic health.
- **Guidelines:** Singapore-first (HPB / MOH), complemented by international (WHO, ACLM, ADA, AHA).
- **Curriculum:** a proposed, evidence-derived chapter map (see `00-overview/curriculum-map.md`).

## Structure

```
research/
├── README.md
├── 00-overview/
│   ├── curriculum-map.md      🔴 the chapter-by-chapter spine (derived by research)
│   ├── learning-outcomes.md   🔴 programme + chapter outcomes
│   └── frameworks.md          🔴 competency frameworks we anchor to
├── chapters/
│   └── _template.md           dossier template — one dossier per chapter
├── topics/                    cross-cutting deep-dives (inform several chapters)
├── evidence/
│   ├── references.bib         master bibliography
│   ├── key-studies.md         🔴 annotated landmark studies
│   ├── guidelines.md          🔴 guideline register (SG + international)
│   └── grading.md             evidence-grading convention
├── cases/case-bank.md         case ideas → chapters
└── ideas/backlog.md           parking lot
```
*(🔴 = to be populated by the research phase.)*

## How to use
- **Spine:** `00-overview/curriculum-map.md` — the chapter-by-chapter plan.
- **Per chapter:** a dossier `chapters/NN-title.md` (from `_template.md`). A completed dossier
  maps almost 1:1 onto a textbook chapter (didactic → quiz → case).
- **Evidence:** `evidence/` — graded studies, the guideline register, and the bibliography.

## Conventions
- Filenames `NN-kebab-title.md`, numbered to match the book's chapter order.
- Every substantive claim cites a source (BibTeX key in `evidence/references.bib`, or an inline
  link). Evidence tagging: see `evidence/grading.md`.
- **Status legend:** 🔴 not started · 🟡 researching · 🟢 ready to write · ✅ drafted in book.

## Link to the book
`chapters/NN-x.md` ↔ `../book/chapters/x.qmd`; curated references flow from
`evidence/references.bib` into `../book/references.bib`.
