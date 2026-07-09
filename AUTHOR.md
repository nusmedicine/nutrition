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
> one-line framing blockquote
## <Topic> at a glance          — orientation + a "how we'll take each one" signpost
## <Movement 1>  ┐ 3–5 named narrative beats (§11h); topics within a movement
## <Movement 2>  ┘ use the five-beat anatomy (§11a) + interactive/figure where earned
##   …            — ### only where a movement splits into 2+ real sub-topics, never a lone child
## The Singapore picture        — population + policy lens (don't repeat the per-topic "Eating out")
## <Chapter-question close>      — e.g. "Is body weight just calories in minus out?"
## Check your understanding      — <div data-island="quiz" …>
## Practise: <case title>        — <div data-island="case" …>
```

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
- **Cross-reference chapters by NAME, not number.** Write "the *Integrative Metabolism* chapter",
  never "Chapter 6" — names survive re-ordering (Part I was resequenced once already). Use the form
  Ch.2/Ch.3 model: **"the *X* chapter"** in title case, keeping `&` in compound titles ("the
  *Digestion & Absorption* chapter"). This applies in **island data** (`diagrams/*.yml`) as well as
  prose. Forward-references to not-yet-written chapters use a generic name ("the diabetes chapter").
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
  resistance** (the *Integrative Metabolism* chapter's mechanism) and **leptin/appetite dysregulation** (the
  *Appetite & Weight Regulation* chapter) → the metabolic-syndrome cluster. Keep it first-year mechanism depth,
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

### 11g. Prose style — avoid the AI-writing tells (2026-07-06)

The book must read like a human-written textbook, not machine prose. Apply everywhere; scrub every new or
edited chapter before review. The reference chapter for this register is `book/chapters/01-why-nutrition-matters.qmd`.

- **Em-dashes, sparingly.** Reserve the em-dash for a genuine parenthetical aside or a bold list-label
  (`**Term** — definition`). In running prose prefer commas, colons or full stops. A page should carry a
  handful of prose em-dashes, not one per sentence.
- **No antithesis tic.** Do not write "it's not X, it's Y", "not because… but because", or "X isn't Y; it
  *is* Z". State the positive claim directly. (A genuine clarifying contrast — "a marker, not a hard
  outcome" — is fine in moderation.)
- **No teacherly meta-commentary.** Cut "this is a teaching moment", "the teaching point", "worth noting",
  "we will practise", "the beauty of", "a habit to unlearn", "the work of this chapter". Teach the thing;
  do not narrate that you are teaching it. Opening blockquotes are **in-world hooks**, not descriptions of
  the chapter's pedagogical role.
- **Professional register, kept warm.** No rhetorical "So —" section headers or chatty filler where a plain
  statement fits. Keep the Singapore flavour and a human voice; lose the chattiness. Do not over-correct
  into dry, robotic prose.
- **First-year audience, no curse of knowledge.** Gloss (one short parenthetical) any term a first-year has
  not met, or soften it. Spiral up; never assume prior knowledge.

Codified after a book-wide pass (2026-07-06) that revised all 26 chapters to this register. See [[authoring-style-rules]].

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
- **Voice (extends §11g).** Cut chapter-about-itself meta ("this one closes it", "the hardest idea in the
  chapter", "the single most important thing this chapter teaches", roadmap sentences like "we build these in
  order"). Keep the warm expository "you"; convert prescriptive "you should/must" to expository **unless**
  recognise-and-refer is the actual teaching point.

**Life-stage chapters (Part II) — the normal→clinical arc.** Mirrors the life-course textbooks (Brown,
*Nutrition Through the Life Cycle*; Bernstein & McMahon, *Nutrition Across Life Stages*), which give every
stage the same recipe and put **normal physiology before clinical problems**:

```
## <Stage> at a glance                       — orientation + through-lines + the island
## What changes at this stage                — the physiology (fold nutrient needs in when inseparable)
## What commonly goes wrong                  — the concerns; SPLIT into 2 movements if rich (e.g. intake vs social)
## Recognising trouble, and when to refer    — red flags + the do-no-harm callout + a refer table (inline)
## The Singapore picture
## <close question>  ·  quiz  ·  case
```
*Worked example — Healthy Ageing:* at a glance (two drivers) → What changes inside (⤷ protein · watch-list) →
Why older adults eat less → Who they eat with: the social plate → Recognising trouble, and when to refer →
Singapore → close. The book's existing furniture already matches the textbooks: **at-a-glance = chapter
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
