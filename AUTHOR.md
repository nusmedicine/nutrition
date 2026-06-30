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
- `data-src` — a **site-root-absolute** path to the YAML (starts with `/`). See §8 for the
  deployment caveat about this path.

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
   MCQs, branches, debrief, optional patient-chat).
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
database (the only future server piece is the optional LLM patient endpoint).

> **Subpath caveat (important for GitHub Pages *project* sites).** Island `data-src` paths are
> site-root-absolute (`/cases/…`). These resolve correctly when the site is served at a domain
> root (local preview, Netlify, a *user/org* Pages site, or a custom domain). If you deploy to
> `username.github.io/book-health/` (a subpath), `/cases/…` would resolve to the wrong place.
> Fixes we can apply at deploy time: serve at a domain root, set Quarto's `site-url`/base and
> have the loader prepend it, or switch `data-src` to a path computed from the page. Flag this
> when we set up deployment and we'll wire the chosen option once.

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
