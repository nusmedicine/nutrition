# Authoring Guide — *Health in Medicine*

How to **write content, add interactive elements, build, and test locally** before
deploying. No JavaScript required for everyday authoring — you write **Markdown** (`.qmd`)
and **YAML** data files.

> Companions: [ARCHITECTURE.md](ARCHITECTURE.md) (design), [CASE-FORMAT.md](CASE-FORMAT.md)
> (the case DSL), [README.md](README.md) (quick start).

---

## 1. The big picture

The book is a **static site** with **interactive "islands."** Two things get built and
combine into the final site:

```
   CONTENT (you author)                         BEHAVIOUR (built once, reused)
   book/**.qmd      ── quarto render ──┐        components/src/*.svelte ── vite ──┐
   book/**/*.yml  (quiz/case data)     │                                          │
                                       ▼                                          ▼
                              book/_book/  ◀────────── includes ──────  book/assets/components.js + .css
                              (static site = the deployable)            (the island runtime)
                                       │
                                       ▼  served by any static host (or locally)
                              a web page where each <div data-island> becomes a live widget
```

- **Quarto** compiles every `.qmd` chapter to HTML and assembles the whole site into
  `book/_book/`.
- **Vite** compiles the Svelte components once into a single `components.js` + `components.css`
  in `book/assets/`. The book loads these on every page.
- On page load, a tiny **loader** finds each `<div data-island="…">`, mounts the matching
  component into it, and the component fetches its `data-src` YAML and renders.

**You author** the `.qmd` text and the `.yml` data. The components are reusable — you add an
interactive element by dropping a `<div>` and writing a YAML file, never by writing JS.

---

## 2. Prerequisites (one-time)

The toolchain is installed portably (no admin) and on your user PATH, so a **new terminal**
finds `node`, `npm`, and `quarto`:
- Node.js → `%LOCALAPPDATA%\node\current`
- Quarto → `%LOCALAPPDATA%\quarto\current\bin`

Install component dependencies once:
```sh
npm --prefix components install
```
> `npm install` needs `node.exe` allowed **outbound through the firewall** (this machine
> blocks it by default). Building and rendering afterwards work fully offline.

---

## 3. Build & test locally — the everyday loop

Two build steps. **Which one you run depends on what you changed:**

| You edited… | Run | Why |
|---|---|---|
| A chapter `.qmd` | `quarto render book` (or use live preview, below) | Re-compile the page |
| A quiz/case `.yml` data file | `quarto render book`, then refresh the page | Re-copy the data into the site |
| A component (`components/src/**`) | `npm --prefix components run build`, then `quarto render book` | Rebuild the island bundle |

**Live preview (recommended while writing):**
```sh
quarto preview book
```
This serves the book and **auto-reloads when you save a `.qmd`**. (Editing a component or a
YAML data file still needs the matching build/render above, then a browser refresh.)

> Tip: keep a second terminal running `npm --prefix components run watch` while you iterate on
> components — it rebuilds the bundle on every save. You still refresh the browser.

> **"Can I just open `book/_book/index.html`?"** Partly — and this catches everyone. Opening the
> built `index.html` directly (a `file://` URL) shows the **prose, math, and TOC/navigation**
> fine, but the **interactive islands stay blank**: they `fetch()` their YAML data, and browsers
> block `fetch()` on `file://` for security (Quarto's search won't work either). To test the
> *whole* page — islands included — you must serve over **HTTP**. That's all `quarto preview book`
> does (or any static server pointed at `book/_book/`, e.g. `python -m http.server` run from
> inside that folder). One command, and everything works.

---

## 4. Authoring didactic content (Quarto Markdown)

A chapter is a `.qmd` file under `book/chapters/`. It's Markdown plus a few Quarto features:

```markdown
# Chapter title            ← H1 = the chapter (one per file)

## A section               ← H2/H3 = sections (auto-numbered, appear in the TOC)

Normal **bold**, *italic*, and `code`.

Inline math $E = mc^2$ and display math:
$$ \text{TEE} = \text{BMR} + \text{TEF} + \text{PA} $$

::: {.callout-note}
## Clinical pearl
Callout boxes: use `callout-note`, `callout-tip`, `callout-warning`, `callout-important`.
:::

A figure with a caption and a referenceable label:
![Glucose curve](../figures/glucose.png){#fig-glucose}

A citation [@who2020diet] pulls from `book/references.bib`.
```

**Add a new chapter:** create `book/chapters/my-chapter.qmd`, then register it in
`book/_quarto.yml` under `book: → chapters:`:
```yaml
book:
  chapters:
    - index.qmd
    - chapters/energy-balance.qmd
    - chapters/my-chapter.qmd      # ← add here, in reading order
```

### How chapters form the table of contents

Two TOCs are generated **automatically** — you never hand-maintain a contents list:

- **Book sidebar (left)** — every entry in `book: → chapters:` becomes a sidebar link, in the
  order listed. Quarto auto-numbers them (1, 2, 3…) and wires **previous/next** links at the
  foot of each page. This *is* the book's table of contents; reorder the list to reorder the book.
- **Page TOC (right, "On this page")** — from `toc: true`; lists the `##`/`###` headings of the
  *current* chapter (e.g. *2.1 Overview*, *2.2 Basal metabolic rate*). Tune with `toc-depth`
  and `toc-title`.

`number-sections: true` produces the chapter/section numbers. To group chapters, use **parts**:

```yaml
book:
  chapters:
    - index.qmd
    - part: "Foundations"
      chapters:
        - chapters/macronutrients.qmd
        - chapters/energy-balance.qmd
    - part: "Clinical skills"
      chapters:
        - chapters/counselling.qmd
```

Math renders via **KaTeX** (set in `_quarto.yml`). Everything here is standard Quarto —
their docs at <https://quarto.org> apply.

---

## 5. Adding interactive elements (the prebuilt islands)

Two prebuilt elements exist today: **`quiz`** and **`case`**. You use one by (a) writing a
YAML data file and (b) dropping a placeholder `<div>` in your chapter.

### The island `<div>`
```html
<div data-island="<type>" data-src="<absolute-path-to-yaml>"></div>
```
- `data-island` — which prebuilt element (`quiz` or `case`).
- `data-src` — a **site-root-absolute** path to the YAML (starts with `/`). These resolve at
  any deployment depth via `resolveAsset()` — see §8.

### Quiz
1. Write `book/quizzes/my-topic.quiz.yml`:
   ```yaml
   id: my-topic-basics            # unique; used as the local-progress key
   title: "Quick check: my topic"
   questions:
     - id: q1
       stem: "Which statement is correct? (supports **markdown**)"
       options:
         - text: "Right answer"
           correct: true
           feedback: "Why it's right."
         - text: "Wrong answer"
           correct: false
           feedback: "Why it's wrong."
   ```
2. Drop it into the chapter where you want it:
   ```html
   <div data-island="quiz" data-src="/quizzes/my-topic.quiz.yml"></div>
   ```
The quiz shows instant feedback, marks correct/incorrect, tracks a score, and saves progress
locally. (This format is small enough to live here; we can split a `QUIZ-FORMAT.md` later.)

### Case (branching clinical encounter)
1. Write `book/cases/my-case.case.yml` following **[CASE-FORMAT.md](CASE-FORMAT.md)** (nodes,
   MCQs, branches, debrief). A `case` supports two forms: **choice-based (MCQ)** encounters,
   which live in their chapter, and **chat-forward simulated-patient** encounters (a live
   guardrailed AI patient via a `patient-chat` node), which are collected in the *Integrated
   cases* chapter (`book/chapters/cases.qmd`). See **[CASE-AUTHORING.md](CASE-AUTHORING.md)**
   for authoring the simulated-patient brief.
2. Drop it in:
   ```html
   <div data-island="case" data-src="/cases/my-case.case.yml"></div>
   ```

### Where data files live, and the **resources** rule
Data files live under `book/quizzes/` and `book/cases/`. For the site to actually *serve*
them, the folder must be listed under `project: → resources:` in `book/_quarto.yml`:
```yaml
project:
  resources:
    - assets/**      # the built bundle
    - cases/**       # case YAML
    - quizzes/**     # quiz YAML
```
**If you add a new data folder (e.g. `decks/`), add `decks/**` here**, or the islands will
404 at runtime.

---

## 6. How the integration works under the hood

You don't need this to author, but it helps to know *why* it works.

**a) The book loads the bundle on every page.** `book/_quarto.yml` injects the CSS and JS:
```yaml
format:
  html:
    include-in-header:
      text: |
        <link rel="stylesheet" href="/assets/components.css">
    include-after-body:
      text: |
        <script type="module" src="/assets/components.js"></script>
```
Quarto automatically rewrites these root-relative `/assets/…` paths to the correct
page-relative path, so the bundle loads from chapters at any depth.

**b) The loader mounts islands.** `components/src/main.js` scans the page and mounts the
matching component:
```js
const REGISTRY = { case: CasePlayer, quiz: Quiz };   // data-island value → component
document.querySelectorAll('[data-island]').forEach(el => {
  mount(REGISTRY[el.getAttribute('data-island')], {
    target: el,
    props: { src: el.getAttribute('data-src') }
  });
});
```

**c) The component renders the data.** Each component `fetch()`es its `data-src` YAML, parses
it (js-yaml is bundled), and renders — saving progress to the browser's `localStorage`
(local-only, no login; see [ARCHITECTURE.md](ARCHITECTURE.md) §6/§7).

So: **a div names an element and points at data; the loader hydrates it; the component reads
the data.** That's the whole mechanism.

---

## 7. Adding a brand-new element type (developer task, for later)

When we build, say, a flashcard deck or an interactive diagram, the *type* is added once by a
developer; after that you author it like any other island.

1. Create `components/src/Flashcards.svelte` (props include `src`).
2. Register it in `components/src/main.js`:
   ```js
   import Flashcards from './Flashcards.svelte';
   const REGISTRY = { case: CasePlayer, quiz: Quiz, flashcards: Flashcards };
   ```
3. Rebuild: `npm --prefix components run build`.
4. Author uses it: `<div data-island="flashcards" data-src="/decks/glycolysis.deck.yml"></div>`
   (and add the data folder to `resources`).

Keep engine/logic in `components/src/lib/` (framework-agnostic) and the Svelte file thin —
that's how `CasePlayer` is structured.

---

## 8. Build & deploy

`quarto render book` produces **`book/_book/`** — a self-contained static site (HTML, your
bundle, the YAML data, Quarto's libs). **That folder is the entire deployment.** Push/copy it
to any static host: GitHub Pages, Netlify, Quarto Pub, or an NUS web server. No server, no
database for the book itself. The simulated-patient feature adds one small server piece — a
zero-dep proxy (`patient-proxy/`) that holds the API key and forwards to the hosted model; the
book degrades gracefully to a placeholder when no patient endpoint is configured. A GitHub
Pages CI workflow (`.github/workflows/publish.yml`) builds the islands, renders Quarto, and
deploys `book/_book/` on push.

> **Subpath deploys (GitHub Pages *project* sites) just work.** Island `data-src` paths are
> site-root-absolute (`/cases/…`), and `components/src/lib/base.js` (`resolveAsset()`) rewrites
> them at runtime: it derives the site root from the bundle's own URL, so islands load correctly
> whether the site is served at a domain root (local preview, Netlify, a *user/org* Pages site,
> or a custom domain) **or** at a project subpath like `username.github.io/book-health/`. This
> is verified live at a simulated subpath — no per-deploy configuration needed.

---

## 9. Quick reference

**Commands**
```sh
npm --prefix components install        # once
npm --prefix components run build      # after editing components/src
npm --prefix components run watch      # auto-rebuild components while iterating
quarto render book                     # build the site → book/_book/
quarto preview book                    # live preview (auto-reload on .qmd save)
```

**Insert an element**
```html
<div data-island="quiz" data-src="/quizzes/energy-balance.quiz.yml"></div>
<div data-island="case" data-src="/cases/bmr-estimation.case.yml"></div>
```

**Key files**
```
book/_quarto.yml              site config: chapters, theme, bundle includes, resources
book/chapters/*.qmd           chapter content
book/quizzes/*.quiz.yml       quiz data
book/cases/*.case.yml         case data        (format: CASE-FORMAT.md)
book/assets/components.*       built island bundle (generated — do not edit)
components/src/                island components + engine (developer territory)
```

---

## 10. Troubleshooting

| Symptom | Likely cause / fix |
|---|---|
| Island shows nothing (empty area) | Bundle not built or not loaded → `npm --prefix components run build` then re-render. |
| Island area stays blank, console 404 for the YAML | Data folder not in `resources:` (add `yourfolder/**`), or wrong `data-src` path. |
| New element type `data-island="foo"` does nothing | `foo` not registered in `main.js` REGISTRY (developer step), or bundle not rebuilt. |
| Edited a quiz/case YAML but nothing changed | Re-render (`quarto render book`) and **hard-refresh** the page (data is fetched at runtime). |
| Math not rendering | Use `$…$` / `$$…$$`; confirm `html-math-method: katex` in `_quarto.yml`. |
| Quarto build error mentioning a `.bib` key | The `@key` citation isn't in `book/references.bib`. |
| Changes not appearing in preview | Component/YAML changes need a rebuild/render + browser refresh (preview auto-reloads `.qmd` only). |

---

## 11. Chapter template & house style

To keep chapters consistent (and reviewable), we follow one shape. **`book/chapters/macronutrients.qmd`
is the worked reference** — copy its structure. Two ideas drive it: give every *topic* the
same **anatomy**, and end each with the same **science → plate** lens.

### 11a. The five-beat anatomy (per nutrient / condition / topic)

Tell each main topic in the same order, using **bold lead-ins** (not headings, to keep the
page TOC clean) — promote a beat to a `###` heading only when it is large or carries an
island (e.g. *Glycaemic index and load*):

1. **What it is** — forms / classification + the quality spectrum.
2. **What it does** — core physiological role(s), briefly.
3. **From plate to cell** — digestion → absorption → metabolism **in outline**. Keep this to
   *one short paragraph* and **forward-reference the owner chapter** — the mechanisms live in
   *Digestion & Absorption* (Ch.5), *Integrative Metabolism* (Ch.6) and *The Gut Microbiome*
   (Ch.7). Do **not** duplicate them here (see the overlap-ownership table in
   [`research/00-overview/curriculum-map.md`](research/00-overview/curriculum-map.md)).
4. **Quality & thresholds** — which forms are better, the evidence (with its honest caveat),
   and the guideline numbers.
5. **From science to plate** — the three house blocks below.

**Not every topic is a peer.** A sub-topic that isn't a true peer of the others — e.g.
**fibre**, which is really a *non-digestible carbohydrate* — lives as a `###` **under its
parent topic**, not as a top-level `##`, and is **template-light**: give it *What it is* and
*What it does*, plus a **lean 🔬🍜🍳 triad only where it has genuinely distinct practical
content** (fibre's food-matrix / whole-fruit-vs-juice), never a forced full five-beat that
would just echo the parent.

### 11b. The "science → plate" house blocks (recurring callouts)

Three standard callouts, **always in this order**, one per topic — the book's signature
translation of science into practice:

```markdown
::: {.callout-note}
## 🔬 Food science: <hook>
The chemistry/biology of what happens to the food or nutrient. 2–4 sentences, with a citation.
:::

::: {.callout-tip}
## 🍜 Eating out
The best real-world choices in Singapore's food environment (hawker picks, Nutri-Grade,
My-Healthy-Plate portions). 2–4 sentences.
:::

::: {.callout-tip}
## 🍳 Healthy kitchen
How to prepare it well at home (the cooking science, made practical). 2–4 sentences.
:::
```

**Skills-chapter exemption (Part II onward).** The full 🔬🍜🍳 triad is for chapters built around
*nutrients/foods* (Part I), which have a per-topic food-science/kitchen anatomy to hang it on. A
**skills chapter** (assessing diet, counselling, evidence appraisal — Ch.11–13) has no per-nutrient
anatomy, so it carries the triad **only where a topic genuinely has food-science or kitchen
content** — often just a single 🍜 *Eating out* callout (e.g. the "one swap that lands" in
*Assessing Diet & Talking to Patients*). Do **not** force a 🔬/🍳 pair where it would be artificial.

### 11c. Standard chapter skeleton

```
# Chapter title
> opener: one italic blockquote, two plain sentences — (1) what the topic is and why it matters to a
  doctor; (2) "We cover…/We look at…" the chapter's movements, in section order. No anecdote, staged
  patient question, aphorism or "The clinician's task is…" formula; "we" is allowed, "This chapter…"
  is not. Example: "Before most nutrients can enter the body, digestion has to break food into molecules
  small enough to cross the gut wall. We follow a meal through the gut: …" (2026-10-22). Capstone case
  chapters take no opener; their intro paragraph does the job.
::: {.callout-note}             — "## Learning objectives": 4–6 verb phrases a student should be able
                                  to do ("Explain…", "Distinguish…", "Recognise… and refer")
::: {.concept-tree}             — chapter map: ≤4 branches (the movements), each linked to its section
## <Chapter title> at a glance  — EVERY chapter; the H1 title before any colon, verbatim ("Macronutrients
                                  at a glance"; Part II adds ": internal and external factors"). Orientation; an overview
                                  figure/table shows the structure (no narrated roadmap, §11g)
## <Movement 1>  ┐ 3–5 named narrative beats (§11h); topics within a movement
## <Movement 2>  ┘ use the five-beat anatomy (§11a) + interactive/figure where earned;
                   each movement ends with a collapsed "Check yourself" (§11j)
##   …            — ### only where a movement splits into 2+ real sub-topics, never a lone child
## <Chapter-question close>      — e.g. "Is body weight just calories in minus out?"
## The Singapore context        — population + policy lens (don't repeat the per-topic "Eating out");
                                  always the LAST content section (author decision 2026-10-22)
## Check your understanding      — <div data-island="quiz" …>
## Practise: <case title>        — <div data-island="case" …>
```

**Chapter ending.** The close-question section answers the chapter's question with content; it does not
restate the chapter as a summary or announce the next chapter (the page footer links to it). The Singapore
picture follows it as the last content section, then quiz, case, references.

**Overview and hierarchy diagrams** (ported from *book-microbio* `STYLE.md` §4; styles in
`book/styles.css`). Prose that lists several related groups, stages or levels of evidence is hard to parse
without a frame to hang it on. Give the frame as a diagram written in Markdown, placed **before** the prose
that fills it in, and pick the form by the shape of the content:

| Content | Form | Markdown |
|---|---|---|
| The chapter's own structure | **Chapter map** after the learning objectives: at most four branches (the movements), each linked to its section; section headings follow the map | `::: {.concept-tree}` + `[Chapter map]{.tree-title}` + nested list of `[Heading](#sec-id)` |
| A classification with real subdivisions | **Tree**, no more than three levels | `::: {.concept-tree}` + nested bulleted list |
| Categories that are ends of a continuous range (strength of evidence, rate of fermentation, glycaemic response) | **Spectrum**, so the diagram does not teach a false either/or | `::: {.spectrum}` + bulleted list + `[Left]{.spectrum-end} [Right]{.spectrum-end}` |
| Categories compared on the same attributes | **Table** | Markdown table |
| A sequence of four to seven steps or stages | **Flow** | `::: {.flow}` + numbered list |

```markdown
::: {.concept-tree}
[Chapter map]{.tree-title}

- [Who lives in the gut](#sec-gut-who)
  - [Who lives there, and how many](#sec-composition)
  - [How the microbiome develops](#sec-development)
- [What gut microbes do for the host](#sec-gut-function)
:::
```

Rules: each node is a short phrase, not a sentence of new content (the prose and its citations carry the
facts); a diagram never introduces a claim the chapter does not make and cite; do not redraw something an
interactive island or figure already shows (the island owns it); a `##` movement needs an `{#sec-…}` id for
the chapter map to link to.

### 11d. House rules (apply everywhere)

- **Depth:** first-year level. Blocks stay **2–4 sentences**; the "plate to cell" beat is one
  paragraph + a forward-ref. Structure is for *scanning*, not length. **Don't *say* "first-year" in
  the prose** — the whole book is pitched there, so labelling goals/tasks/scope as "first-year" is
  redundant. Write the level implicitly ("the goal is recognition", "the task here", "at this stage",
  "recognise, don't manage"). The only place to name the audience is the front-matter (subtitle/preface).
- **Evidence honesty:** state the benefit *and* its caveat; name a landmark trial only *with*
  its limits (relative vs absolute, surrogate endpoint, certainty grade).
- **Singapore-first:** anchor to HPB/MOH tools and hawker/home realities before generalising. The
  Singapore context is about **practical issues and the social/cultural side of eating** (food culture,
  festivals, religious fasting, the local food environment, national policy), *not* local research for
  its own sake.
- **Local-research citations — the postcode is not a reason.** Cite a Singapore/local study only when it
  (a) examines the **socio-cultural** side of diet (dietary patterns, eating behaviour, cultural food
  practice, food environment, population nutrition status, national policy/surveys) **or** (b) supports
  **evidence-based clinical practice** (a local trial/clinical study guiding risk, prevention or
  management). Do **not** cite local **basic/mechanistic** research (biochemistry, physiology,
  cell/animal metabolism) merely because it is Singaporean — use the best international source instead.
  *(Example: the Ramadan/diabetes FAST RCT and the SGH hypoglycaemia survey belong; an A\*STAR
  insulin/glucagon physiology review cited "for local relevance" does not.)*
- **Cite everything** with a `@key` that exists in `book/references.bib`; log any figure/photo
  in `book/figures/CREDITS.csv` (CC0/PD/CC-BY/CC-BY-SA only — never NC/ND).
- **Cross-reference chapters by NAME, not number.** Write "the *Integrative metabolism* chapter",
  never "Chapter 6" — names survive re-ordering (Part I was resequenced once already). Use the form
  Ch.2/Ch.3 model: **"the *X* chapter"**, where *X* is the chapter's name **exactly as its at-a-glance
  heading gives it**: the H1 before any colon, in the H1's own sentence case and with its own `&` or
  "and" ("the *Digestion and absorption* chapter", "the *Bone & joint health* chapter", "the
  *Integrative metabolism* chapter", "the *Adulthood* chapter", "the *Evidence vs hype* chapter"). Two
  exceptions: *What a healthy diet looks like* (full H1) and *The gut microbiome*, which drops the
  preceding "the" ("see [*The gut microbiome*](gut-microbiome.qmd) chapter"). The glossary's
  "Introduced in" column uses the same names. If a chapter's H1 changes, re-run the rename across
  book/, diagrams and islands. This applies in **island data** (`diagrams/*.yml`, plain text, no
  italics) as well as prose. Forward-references to not-yet-written chapters use a generic name ("the diabetes chapter").
  The chapter is never the subject of an action verb (§11g): put the reference in parentheses after the
  fact it supports, or in a sentence whose subject is *we* or the topic. Where useful, make the title a
  link with a section anchor (`the [*Integrative metabolism*](integrative-metabolism.qmd#sec-…) chapter`);
  island data cannot hold links, so it uses the italic title alone.
- **Interactives earn their place** — a diagram/molecule island where it teaches something a
  paragraph can't; otherwise a static figure. Every chapter gets a **quiz** and a **case**.
- **Asset paths — write root-absolute, they're auto-handled.** Use `/figures/…`, `/structures/…`,
  `/diagrams/…` everywhere. Markdown figures (`![](/figures/x.png)`), the CSS/JS bundle, and island
  `data-src` are all made deploy-safe automatically: Quarto rewrites tracked resources to relative,
  and `main.js` + `resolveAsset` fix island paths for the GitHub Pages `/<repo>/` subpath. **A new
  island that reads asset paths from *its manifest* must load it via `loadManifest()`** (`lib/manifest.js`),
  which auto-resolves them — see `GutJourney.svelte`/`Molecule.svelte`; then use the paths as-is, no
  `resolveAsset` calls. CI runs `scripts/check-assets.mjs` (also runnable locally against `book/_book`)
  and **fails the build if any referenced asset is missing** — so path/filename mistakes never deploy.

### 11e. Per-chapter cases (shape & altitude)

The embedded case is **question-driven**, not a lecture: *intro → choice → (thin bridge only
if needed) → choice → …*, covering several decisions germane to the chapter. Turn teaching
points into **choices**, not passive `info` "reveal" dumps between questions; let connective
facts ride in an option's **feedback** or a one-line bridge. Keep to ~4–5 MCQs for an *intro*
case (the Macronutrients "Mr Lim" case is the worked example).

- **In-chapter cases are MCQ/choice-only — NO live AI `patient-chat` node.** The guardrailed AI
  patient belongs **only** in the Integrated cases chapter (the `sim-*.case.yml` files). A per-chapter
  case ends after its MCQs (route → an `info`/`end` node). This keeps the **two-versions model** clean:
  deterministic choice-drills in the chapters, conversational AI in the Integrated cases.
  `scripts/validate-cases.mjs` enforces it (build/lint fails if a non-`sim-` case contains a
  `patient-chat` node) — run it after touching any case.

- **Stay at the chapter's altitude — don't test a skill the curriculum hasn't taught yet.**
  *When to advise vs refer*, diet history and counselling are **Part II/IV** skills (Ch.11
  *Assessing Diet & Talking to Patients*, Ch.12 *Behaviour-Change Counselling*, Ch.20
  *Interprofessional Practice & Referral*). In a Part I case, keep referral a **light,
  in-character cue** in the resolution and **forward-reference** those chapters — never a
  graded decision.
- **Plain language in patient dialogue.** A doctor speaking to a patient says "cholesterol",
  not "LDL", and never codes like "IARC Group 1". Reserve named lipoprotein classes and the
  like for the chapter prose (glossed on first use), not the case.

### 11f. Teach the science basis, and show it (2026-07-06)

Three cross-cutting depth rules, so students get the *medical-science basis* — not just the practical advice:

- **Part IV (conditions) chapters carry a basic *pathophysiology* beat.** Explain the **disease mechanism**
  so the student understands *why* the nutrition matters — pitched at recognition level and **building on the
  Part I owner chapters BY NAME**, never re-deriving them. Give the causal chain from disordered biology to the
  clinical picture; do not merely assert the risk. *Worked example (Obesity & Metabolic Syndrome):* chronic
  energy surplus → adipocyte hypertrophy and **visceral / ectopic fat** → dysfunctional adipose tissue with
  **low-grade inflammation** and an **adipokine shift** (↑ pro-inflammatory signals, ↓ adiponectin) → **insulin
  resistance** (the *Integrative metabolism* chapter's mechanism) and **leptin/appetite dysregulation** (the
  *Appetite and weight regulation* chapter) → the metabolic-syndrome cluster. Keep it first-year mechanism depth,
  **cite the mechanism** (verify any new citation), and forward deep pathway detail to Part I / later years.
- **Part III (advising the healthy) chapters carry the relevant *physiology / biochemistry* background.**
  Where a topic needs a physiological or biochemical basis to make sense, give a **short, relevant** grounding
  (again anchored to the Part I owner chapters by name) rather than assuming the reader carries it — e.g. the
  food–acne worked example → sebum / androgens / IGF-1 and glycaemic load; "detox" myths → hepatic & renal
  clearance; satiety & behaviour → reward pathways. Enough to make the nutrition material land, no more.
- **Use figures/photos where they teach.** Prefer a figure wherever it does something a paragraph can't — a
  **labelled mechanism schematic**, a My-Healthy-Plate / portion visual, a representative hawker dish, an
  anatomy/histology image. Syntax is in §4 (`![Caption](/figures/name.png){#fig-id}`); rules are in §11d
  (root-absolute paths, log every image in `book/figures/CREDITS.csv`, **CC0 / PD / CC-BY / CC-BY-SA only**;
  `check-assets.mjs` fails the build on a missing image). Aim for **at least one substantive teaching figure per
  chapter** beyond the interactive island and the case persona. Source food/clinical photos from Wikimedia
  Commons / Pexels / Unsplash (see the memory on image rendering).

### 11g. Prose style, voice & the copy audit (2026-07-06; merged with *book-microbio* `STYLE.md` 2026-10-21)

The book must read like a human-written textbook, not machine prose. Apply everywhere; scrub every new or
edited chapter before review. This section merges the 2026-07-06 rules with the house style of the sister
book *Microbes in Medicine* (`../book-microbio/STYLE.md`), adapted to a nutrition book with a practice
side. Run the automatic part with:

```sh
node scripts/copy-audit.mjs                                   # all chapters + island data
node scripts/copy-audit.mjs book/chapters/type-2-diabetes.qmd # just these files
node scripts/copy-audit.mjs --summary                         # per-file counts only
node scripts/copy-audit.mjs --you                             # also list every "you" (hybrid-voice check)
```

The checker flags patterns; it does not decide. A flag is a prompt to reread the sentence, and some flags
will be fine where they stand. It always exits 0.

#### Voice and level — the hybrid voice

- **Exposition is in academic voice.** The science, mechanisms, evidence, guideline numbers and the
  Singapore context state facts in the third person. Use the first-person plural *we* for a shared line of
  reasoning, as in a review article ("we can predict…", "we return to insulin resistance in…"), sparingly,
  where it carries reasoning, not to open every paragraph.
- **"You" is for the clinician in practice.** Keep *you* only where the reader is addressed as the doctor
  doing the job: what to ask in a diet history, what to say to a patient, when to refer, the do-no-harm
  callouts. "When you take a diet history, ask about drinks" is fine; "You can think of glycogen as a
  store" becomes "Glycogen is a store". Convert prescriptive "you should/must" to expository unless
  recognise-and-refer is the actual teaching point (§11h).
- **Islands and instructions** (quizzes, cases, the one sentence telling the reader how to use an island)
  may use the imperative or *you*. So may the practical advice in the 🍜🍳 house blocks ("Increase fibre
  gradually"), which is the advice a patient would be given; drop "your gut"-style possessives there.
- **Quoted claims keep their wording.** A marketing claim or patient belief in quotation marks ("A test
  kit tells you how healthy your gut is") is not the book's voice; leave its *you*.
- **No movement intros.** A `##` movement that opens straight into `###` sub-topics needs no lead-in
  sentence ("Start with the two questions…", "The microbiome earns its keep in two ways…"); the headings
  carry the structure.
- **The book never acts.** A book, part, chapter or section is never the subject of an action verb: not
  "This chapter explains…", "the *Integrative metabolism* chapter returns to…", "The next chapter takes
  up…". Write "We return to…", or give the reference in parentheses after the fact it supports: "(see the
  *Integrative metabolism* chapter)". Parentheses are preferred.
- **Plain, direct sentences.** Prefer *is*, *has*, *does* over *serves as*, *stands as*, *functions as*,
  *represents*, *boasts*, *features*. One idea per sentence where possible; vary sentence length and do
  not stack short dramatic sentences.
- **State a fact and its consequence.** Do not tell the reader that something is important; show what it
  explains.
- **No promotional or emotional colour** (*fascinating*, *remarkable*, *vibrant*, *rich*, *profound*), no
  false enthusiasm or reassurance ("Don't worry", "Great question"), and no "honest/honestly" framing
  (state the benefit and its caveat without the word).
- **Professional register, kept warm.** No rhetorical "So —" section headers or chatty filler. Keep the
  Singapore flavour and a human voice; do not over-correct into dry, robotic prose.
- **No curse of knowledge.** Spiral up; never assume a term the reading order has not taught (see
  *Terminology* below for the gloss pattern).

#### Terminology and definitions

- **Use the correct medical or nutrition term** in prose where clinicians would use it: *hypoglycaemia* not
  "low blood sugar", *sarcopenia* not "muscle loss with age", *dysphagia* not "trouble swallowing",
  *hypertension* not "high blood pressure", *oedema* not "swelling". Patient dialogue in cases stays plain
  (§11e).
- **Define every term the first time it appears in a chapter** unless an earlier chapter in reading order
  taught it. Pattern: the term in bold, then the definition in plain words, e.g. "**Sarcopenia**
  (age-related loss of muscle mass and strength)…" or "…**dysphagia**, difficulty swallowing." This is
  the one-line just-in-time gloss; the full treatment stays in the owner chapter. Later uses in the same
  chapter are plain text. In a definition table the terms are not bolded: the table marks them.
- **Glossary.** Every defined term also goes in `book/glossary.qmd`, alphabetically, with the same
  definition, plus the chapter where it is introduced; it is a three-column table (term, meaning,
  introduced in) with the terms unbolded. If a definition changes, change it in both places. *(The
  glossary is Appendix A; it is filled chapter by chapter as each is retrofitted. Pilot: *The Gut
  Microbiome*.)*
- **Never cycle synonyms for a technical term** to avoid repetition ("dietary fibre", "roughage";
  "energy", "calories", "kilocalories" for the same thing in one paragraph). Pick the term and keep it.
- **Spelling: British, plus house forms.** *ageing, fibre, behaviour, colour, litre, paediatric, oedema,
  anaemia, haem/haemoglobin, oesophagus, foetal/foetus, dietitian, programme*, and **-ise** endings.
  *wholegrain(s)* is one word; energy is *kcal* (never "Calorie" or kJ); *type 2 diabetes* is lower case.
- **Units and numbers.** SI with a space (2 g, 1.5 mmol/L, 37 °C, 2,000 kcal); digits for measurements and
  statistics.

#### Examples

Students tend to memorise every named food, trial and disease in case it is examined, and detail they
cannot yet place pulls attention from the principle (the seductive-details effect). Examples therefore
follow four rules.

- **Anchor examples.** Prefer an example the reader has already met: a hawker dish or home food the book
  already uses, or the chapter's own case persona. A new example needs a reason (a local study, a landmark
  trial, the only common food that shows the trait).
- **One example per idea**, plus at most one contrasting example when the idea is a distinction.
- **One sentence of clinical detail**: only the fact that shows the principle. No full workup or management.
- **Marked as an example.** Put it in an example box, so the principle and its illustration are visibly
  different (styled in `book/styles.css`):
  ```markdown
  ::: {.example}
  A plate of chicken rice and a bowl of yong tau foo can carry similar kcal…
  :::
  ```
  The example box is for an illustration inside the prose; it does not replace the 🔬🍜🍳 house blocks
  (§11b), which have their own fixed role.

#### Copy-audit checklist

Based on the Wikipedia guide *Signs of AI writing* (WikiProject AI Cleanup) and Pangram's corpus comparison
of AI and human text. These patterns are not proof of anything; they make prose generic and are cheap to
fix. The underlying fix is always the same: say the specific thing.

**Vocabulary to avoid or justify:** *delve, crucial, pivotal, vital, key* (as an adjective of importance),
*tapestry, testament, underscore, highlight* (as a verb of importance), *intricate, intricacies, meticulous,
showcase, landscape* (figurative), *realm, interplay, robust, enduring, foster, garner, bolster, enhance,
leverage, navigate* (figurative), *journey, unlock, harness, seamless, holistic, multifaceted, paramount,
nuanced, invaluable, game-changer, cutting-edge, ever-evolving, dynamic, honest/honestly*.

**Business and journalism words, banned in prose (2026-10-22 sweep, 380 fixes).** Use the medical or plain
term: *lever(s)* → factor, modifiable factor, measure, change (island controls: "controls"); *driver(s)*
meaning cause → cause, risk factor, factor; *high-yield / highest-yield / outyields* → most useful, most
informative; *headline* for a study result → main result (a literal news headline is fine); *anchor(s)* →
based on, reference point; *toolkit, playbook, payoff, pays off, buys (years)*; *move* for a clinical step →
step, approach, response; *the fix* → treatment, correction; *lands / lands differently* → applies, is
received; *the real X* → drop "real"; *story* for an explanation → explanation, evidence. Standard terms
stay: ATP as "energy currency", the microbiome as an "ecosystem", "silent" osteoporosis or hypertension,
"hidden" sugar or salt, "reframe" in counselling, "energy budget", "clinically actionable".

**Hyperbole and private metaphor.** No unsourced superlative (*no single X matters more, the single biggest,
the strongest, more than any, the most important*): state the claim at its real strength ("one of the main
modifiable factors") or cite the source that ranks it. No private metaphors or literary turns (*quieter,
the arithmetic quietly turns against them, the hormone story, the youth deposit pays off, where the harm
lives, a slow-motion emergency, lands a verdict*), and no slogan closers (*X beats Y*, *a head start, not a
shrug*). If a sentence would sound odd said aloud by a consultant to a student, rewrite it literally.

**Anthropomorphism (2026-10-22 sweep, ~135 fixes).** Do not give a mental act, intention, emotion or moral
quality to something that cannot have one: an idea, slogan, advice, diet, food, nutrient, drug, test, index,
cut-off, label, guideline, figure, the body or an organ. Not *"just try harder" misreads the biology*, *the
label says nothing*, *lactation asks only a little more*, *the cut-offs assume*, *the test misleads*, *the
gut pours out fluid while SGLT1 keeps working*, *fat that refuses to budge*. Make a person the subject
("telling a patient to 'try harder' ignores…"), or state the mechanism or property ("the label gives no
information on…", "lactation needs only a little more energy", "the cut-offs were set on Western
populations"). Standard scientific usage stays: *the study found, data show, guidelines recommend, the AHA
advises*, receptor and signalling verbs (*binds, signals, senses* for a sensor cell), *insulin resistance*,
*the reward system*, *drug or immune tolerance*, and the defined term **defended range**. Glosses: hydrophilic
= "water-attracting", hydrophobic = "water-repelling" (not "water-loving/-hating"); butyrate is the
colonocytes' "main fuel".

**Unidiomatic phrasing (2026-10-25 sweep, ~1,430 fixes).** The test for every sentence: would a standard medical
textbook (Kumar & Clark, Davidson's, a WHO or NICE document) phrase it this way? Not *a bedside read of central fat*
(→ "a simple bedside measure"), *the value sits at* (→ "is"), *tracks with* (→ "is associated with"), *runs high*
(→ "remains high"), *the first move / the opener* (→ "the first step"), *an absolute avoid* (→ "must be avoided
completely"), *the picture* for a situation or the evidence (→ "the findings", "the context"; *clinical picture*
is fine), *signal* for evidence outside physiology or statistics (→ "association", "evidence"), *low-regret*
(→ "low-risk"), *nudges* a value (→ "has a modest effect on"), *the through-line* (→ "in summary"), *fed up* for
refeeding (→ "refed"). Also: coined labels where a standard term exists; a figure of speech where a literal term
exists; compressed or slogan-like sentences that need a second reading; and vague intensifiers (*a great deal*,
*does the work*) where the text should say what it means. The section heading is **The Singapore context** (renamed from "The Singapore picture", 2026-10-25)
and the defined term **defended range**.

**Plain statement (2026-10-26).** Three habits made the prose hard to read; avoid all three.
(1) *Teaser openers*: a paragraph or bold entry must not open with a short abstract sentence that only makes sense
after the next one (*The weight-loss target is modest.* *Sleep is a modifiable factor in weight.* *Two rules matter
most.* *Timing matters too.*). The first sentence states the claim in full; under a bold run-in label, start with the
content and do not restate the label. (2) *Point last*: order every paragraph general → specific (claim, then
evidence or mechanism, then implication); no closing sentence that restates the paragraph as a summary.
(3) *Contrastive parallelism*: state what is true, positively. No reflexive ", not Y" tails (*added to it, not
substituted for it*; *food substitutions, not a branded diet*), "rather than Y", "instead of Y", "not X but Y" or
balanced "X; Y" antitheses (*The effect is consistent; the explanation is unproven*). Keep a negation only for a
safety point or to correct a misconception the passage is explicitly addressing, as its own plain clause, at most one
per paragraph. `copy-audit` reports contrasts per 1,000 words (warn ≥ 1.5) and a `label-echo` flag.

**Sentence openers to avoid:** *Additionally, Furthermore, Moreover, Notably, Importantly, Crucially,
Interestingly, Ultimately, Overall, In summary, In conclusion, It is important to note, It is worth noting*.

| Pattern | Example | Fix |
|---|---|---|
| Negative parallelism (antithesis tic) | "It's not X, it's Y"; "not because… but because"; "not just X but also Y" | State Y directly. Keep a contrast only when the misconception X is real and named ("a marker, not a hard outcome" is fine in moderation) |
| Significance padding | "plays a key role in", "serves as a reminder", "highlighting the importance of" | Say what it does |
| Trailing -ing analysis | "…, highlighting how the gut adapts." | Make it a sentence with a subject, or delete |
| Reflexive triads | three adjectives or three short clauses, every time | Use the number of items the content has |
| Vague attribution | "experts agree", "studies show", "it is widely believed" | Name the source and cite it |
| Section summaries | a closing paragraph that restates the section | Delete, or replace with the next question |
| Rhetorical scaffolding | "So what does this mean?", "Here's the thing", "This is where X comes in" | Delete; start with the content |
| Metacommentary | "this is a teaching moment", "the teaching point", "the work of this chapter", "we will practise", "the beauty of", "We turn next to…", "The table answers…", "first-year" in prose (§11d) | Delete, or replace with a sentence about the subject. Structure is shown by headings and overview figures, not narrated |
| Hedging filler | "may potentially", "can often sometimes" | One hedge, where the evidence needs it |
| False ranges | "from infancy to old age" when no scale is meant | List the items, or say "every life stage" |

#### Formatting

- **Bold** for a term at its defining use, for the five-beat lead-ins (§11a), and sparingly for one warning
  per callout. Do not bold phrases for emphasis.
- **No inline-header lists** (each bullet starting with a bold label and a colon or dash) unless the items
  are genuinely labelled fields. Prefer a table or prose.
- **Lists for parallel points.** When a paragraph sets out three or more parallel points (causes, steps,
  examples, consequences), give them as a bulleted list introduced by a full sentence, or a numbered list
  when the order matters. Each item is a complete sentence or a phrase parallel to the others. Reasoning
  that links one point to the next stays in prose: a chain of "because… so…" is a paragraph, not a list.
- **Headings in sentence case.** Emoji only in the three house-block callout headings (🔬🍜🍳, §11b); none
  in prose or other headings. No decorative arrows or box characters in prose (a causal chain is a
  sentence or a figure; arrows are fine inside tables and figures).
- **Em dashes:** at most one or two per chapter in running prose, never as a substitute for a comma, colon
  or full stop. Use a comma, colon, parentheses or a new sentence first.
- **Straight quotes** in source files (`"` and `'`).

#### Island data (quizzes, cases, diagrams)

- **MCQ options** carry no bold and are about the same length; trim the correct option to a short parallel
  statement and move the rationale into its feedback (never pad distractors). Option order in the YAML does
  not matter: `Quiz` and `CasePlayer` show options in a stable shuffled order per question
  (`components/src/lib/shuffle.js`, seeded by quiz/case id + question id), so never write "all of the above"
  or refer to an option by position.
- **Feedback starts with the explanation**, not with "Right." or "Correct!". The component already shows
  whether the answer was correct.
- **Wrong-answer feedback names the misconception and gives the mechanism**, without scolding.
- **No two consecutive feedback strings with the same opening word.**
- **Summary and principle fields in diagram data are plain sentences:** no bolded one-line takeaway.

#### Common beliefs

A callout or section that addresses a widely held belief ("eating for two", the fat-burning zone, detox) is
headed with a neutral question ("Does pregnancy double energy needs?", "Is there a fat-burning zone?"),
states the belief and where it comes from, then gives the evidence. Avoid "myth", "busting", "corrected",
"wrong" and other words that judge the reader. *(Several existing headings still say "myth"; retitle them
in the retrofit pass.)*

Codified after a book-wide pass (2026-07-06) that revised all 26 chapters to the original register; the
microbio merge (2026-10-21) adds the hybrid voice, terminology/glossary, examples, common-beliefs and
copy-audit rules, which the existing chapters do not yet follow. See [[authoring-style-rules]].

### 11h. Chapter structure — narrative movements, nesting & the restructure recipe (2026-07-09)

Chapters must read as a **structured narrative**, not a flat run of topics. Codified after restructuring
*Appetite & Weight Regulation* and *Healthy Ageing* as pilots.

- **Movements.** Group the body into **3–5 named `##` "movements"**, each a beat of the chapter's argument.
- **Nesting rule.** Use `###` **only** where a movement genuinely splits into **2+ parallel sub-topics**.
  **Never a single child** — a lone `###` under a `##` is an anti-pattern; drop the sub-heading and let the
  prose or a table flow inline. (Callout titles stay `##` inside the `:::` fence; Quarto keeps them out of the
  TOC and numbering, so they never count as sections.)
- **Headings are topical and scannable** — the TOC should read like a syllabus. No second-person imperative
  headings ("You look the targets up…") and no bare punchline headings; name the topic (a short subtitle after
  a colon is fine).
- **Standard terminology, no private language (2026-10-22).** Name things by the term a textbook or guideline
  uses (*metabolic adaptation*, *anabolic resistance*, *hypothalamic control of appetite*, *the fed
  (absorptive) state*, *pathophysiology*, *bone remodelling*), never by a house coinage. A metaphor may
  illustrate a mechanism once in prose, next to the real term, but never names a heading or replaces the term.
  Do not personify organs or the body ("the body defends its weight", "the kidney rewrites the diet", "muscle
  answers protein"): state the mechanism. Island component names (bone bank, renal flip, fuel dial) may stay
  as titles of the interactive, but prose around them uses the standard terms.
- **Voice (extends §11g).** Cut chapter-about-itself meta ("this one closes it", "the hardest idea in the
  chapter", "the single most important thing this chapter teaches", roadmap sentences like "we build these in
  order"). Follow the §11g hybrid voice: academic third person + *we* for exposition, *you* only for the
  clinician in practice; convert prescriptive "you should/must" to expository **unless** recognise-and-refer
  is the actual teaching point.

**Life-stage chapters (Part II) — the normal→clinical arc.** Mirrors the life-course textbooks (Brown,
*Nutrition Through the Life Cycle*; Bernstein & McMahon, *Nutrition Across Life Stages*), which give every
stage the same recipe and put **normal physiology before clinical problems**:

```
## <Stage> at a glance: internal and external factors — orientation + the two-row factor table + the island
## What changes inside: <subtitle>          — the internal factors: physiology and needs (row 1 of the table)
## What changes outside: <subtitle>         — the external factors: food environment, social, culture (row 2)
## [one stage-specific movement, optional]  — only where the content needs it (e.g. Lactation)
## Recognising trouble, and when to refer    — red flags + the do-no-harm callout + a refer table (inline)
## <close question>
## The Singapore context  ·  quiz  ·  case
```
The two middle movement names are fixed (author decision 2026-10-22) so every life stage shows the same
internal/external frame as its factor table; the subtitle carries the stage's own content.
*Worked example — Healthy Ageing:* at a glance: internal and external factors → What changes inside (⤷ protein · micronutrients
and hydration · why older adults eat less) → What changes outside (eating alone and isolation) →
Recognising trouble, and when to refer → close → Singapore.

**Disease chapters (Part IV) — the fixed scaffold** (author decision 2026-10-22):

```
## <Condition> at a glance                    — orientation; disambiguation of look-alike conditions goes here
## Pathophysiology: <subtitle>               — always the first movement; definitions it needs are pre-taught
                                               as its first sub-topic (§11j pass 2)
## Dietary management: <subtitle>            — one or two movements, always named "Dietary management";
                                               drug-diet safety (e.g. hypoglycaemia by drug class) belongs here
## [one condition-specific movement, optional] — e.g. Remission and prevention; The joints; Advanced dementia;
                                               Recognising and screening (may precede Dietary management
                                               when the logic requires)
## When to refer                              — every Part IV chapter: referral triggers, who to refer to
## <close question>
## The Singapore context  ·  quiz  ·  case
```
The Singapore context never takes a subtitle in any chapter; its opening sentence carries the local hook. The book's existing furniture already matches the textbooks: **at-a-glance = chapter
outline, quiz = self-test, case = case study.**

**Verification — the preservation gate (REQUIRED after any restructure/rewrite).** A reorganisation must not
silently drop content. Capture a baseline before, and it must match after:

```
f=book/chapters/<chapter>.qmd
grep -oE '@[A-Za-z0-9_]+' "$f" | sort | uniq -c   # citation multiset — key set must be IDENTICAL
grep -c 'data-island' "$f"                        # islands unchanged
grep -cE ':::+ \{\.callout' "$f"                  # callouts unchanged
grep -cE '^\|[-: |]+\|$' "$f"                     # tables unchanged
grep -c '!\[' "$f"                                # figures unchanged
```

Then **render** (`node scripts/render.mjs`, exit 0), extract the rendered TOC from
`_book/chapters/<chapter>.html`, and confirm a clean movement→sub-topic hierarchy with **no single-child
headings and no stranded sections**. Re-run `validate-cases.mjs` if a case was touched. See
[[chapter-structure-recipe]].

### 11i. Before review (checklist)

1. `node scripts/copy-audit.mjs <chapter + its quiz/case YAML>` and reread every flagged line (§11g).
2. `node scripts/copy-audit.mjs --you <chapter>`: every remaining *you* addresses the clinician in practice.
3. Grep the chapter's bold-defined terms against `book/glossary.qmd`.
4. Check every number (guideline thresholds, nutrient amounts, trial results) against its cited source.
5. `node scripts/validate-cases.mjs` if a case was touched.
6. Render (`node scripts/render.mjs`), then `node scripts/check-assets.mjs`, and check that internal links
   and anchors resolve.
7. After any restructure or rewrite, the preservation gate (§11h).
8. The chapter's island YAML (`diagrams/`, `structures/`) is prose too: run it through the same rules and
   cut any intro text that repeats the chapter paragraph beside it (§11j).

### 11j. Organising dense content (2026-10-21)

A colleague's complaint that the book is "dense, hard to read" prompted a literature review
([reports/Organising dense textbook prose.md](reports/Organising%20dense%20textbook%20prose.md); notes in
`research_notes/`). Its finding: "dense" usually means **too many new terms per paragraph, links between
sentences left implicit, and weak cues to structure**. It rarely means too much content, and the "short
attention span" explanation is a myth. Revision is therefore mostly *additive* for structure and
*subtractive* only for material that fails the section's objective or repeats a figure. Worked example: the
*The Gut Microbiome* pilot.

Each rule carries a label: **[E]** evidence (meta-analyses or medical-education trials), **[E–]** limited
evidence, **[C]** convention from style guides (GOV.UK, NHS, Microsoft, Google; no experiment behind the
number), **[H]** house heuristic.

#### The five passes, in order

1. **Objective test [E].** Every sentence, box and image serves the section's objective; cut or move what
   does not. Interesting-but-irrelevant detail lowers learning (seductive details, g ≈ −0.33), most for
   novices and under time pressure. Singapore context that carries the practical point is not a seductive
   detail; trivia and historical asides are.
2. **Pre-teach the players [E–].** Define the key terms *before* the paragraph that runs the mechanism, as a
   short definition list or a sentence of glosses, not scattered inside it. More than about three new bold
   terms in one paragraph [H] is a density alarm: move some definitions earlier.
3. **Cohesion rewrite [E].** Low-knowledge readers (first-years) understand more from explicit text. Open
   with a topic sentence that states the claim; start each sentence from what the reader already has and
   end on the new idea; make the links explicit (*because*, *so*, *however*, *only when*); repeat the key
   noun instead of "this" or "it". This pass alone often fixes a dense paragraph.
4. **Choose the form by the relation between the ideas** (table below). Keep the *why* in prose beside any
   list, table or diagram, with one sentence stating what the device shows.
5. **Signal and check [E].** A descriptive heading at each real shift; bold only at definitions; figures
   beside the paragraph that interprets them [E] (prose interprets the figure, it does not re-narrate
   every arrow); end each movement with a *Check yourself* question.

#### Form by relation

| The ideas are… | Use | Rule | Label |
|---|---|---|---|
| A causal chain, argument or caveat | Prose | Never bullet a chain: bullets help recall of parallel items but cost the surrounding reasoning, and mechanism beats feature lists for lasting diagnostic knowledge. Add a flow *beside* it if it has 4+ steps | [E–]; 4 steps [H] |
| 2–3 short parallel items | In-sentence list | "SCFAs protect the wall in two ways: A, and B" | [H] |
| 3–7 parallel items, each a sentence or phrase | Bulleted list | Introduced by a full sentence; items grammatically parallel; never one item | [C] |
| A sequence whose steps need detail | Numbered list | Use `.flow` instead when the steps are 1–3-word labels; never both for the same sequence | [C] |
| Several items compared on 2+ attributes | Table | Rows in a meaningful order (mechanism, severity), alphabetical only for look-up | [E] |
| Terms the next paragraph depends on | Definition list | Before the mechanism; terms unbolded (the list marks them) | [E–] |
| A classification / a continuum | Tree / spectrum | As in §11c | [H] |
| Genuinely optional depth or history | Collapsed callout | `{.callout-note collapse="true"}` titled "Optional: …"; never core content (hidden content goes unread) | [C] |
| Retrieval | *Check yourself* | See below | [E] |

```markdown
Fermentation turns the fibre that human enzymes cannot digest into fuel for the colon. Three terms describe
the process:

Fermentation
: The anaerobic metabolism, by colonic bacteria, of food the host's enzymes could not digest.

Short-chain fatty acids (SCFAs)
: The main products of fermentation: acetate, propionate and butyrate.
```

#### *Check yourself* after each movement [E]

Retrieval practice with explanatory feedback is the best-evidenced intervention in the review (in medical
trainees, 39% vs 26% retained at six months) and also corrects the overconfidence of screen reading. End
each `##` movement (not the Singapore context or the close) with one, at most two, collapsed questions:

```markdown
::: {.callout-tip collapse="true"}
## Check yourself: two healthy adults carry very different gut species. Why can both still ferment fibre normally?
Fibre fermentation is carried out by many different microbes, so different species can perform the same
function (functional redundancy). ...
:::
```

The question asks *why* or *what follows*, never a bare recall fact. The answer explains the mechanism in
2–4 sentences; it *is* the movement's summary, so the chapter needs no summary box. The end-of-chapter quiz
and case stay.

#### Signals, kept scarce [E]

Cues work only while they are scarce: heavy bold cancels its own benefit. Bold the defining use of a term
and at most one warning per callout. **Bold run-in lead-ins** belong only where paragraphs are genuinely
parallel entries (the five-beat anatomy, §11a); on every paragraph of an argument they turn prose into a
disguised list, so open such paragraphs with a plain topic sentence instead. Keep callout types consistent
and few per screen [H].

#### Thresholds (lint, not law) [C]

Split sentences over ~25 words, especially those stacking several new terms. Restructure paragraphs over
~150 words or ~5 sentences (one idea per paragraph). Lists of 2–7 items. Reading level stays at an expert
audience's (terms are taught, not avoided). These numbers come from style guides; the evidence-backed rules
above (scarce cues, chains in prose, figures beside text, test instead of summarise) matter more and cannot
be counted.
