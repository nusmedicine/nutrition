# Screen-reading behaviour and plain-language / web-content guidance for organising dense expository text

Scope: how people read expository text on screens, and what usability and plain-language guidance says about organising it. Written for an online Quarto web book (nutrition/medicine, medical-student readers) that a colleague calls "dense, hard to read".

Evidence labels used below:
- **[EMPIRICAL]**: a peer-reviewed study or meta-analysis, or an NN/g eyetracking or log study with stated methods.
- **[PRACTITIONER]**: style-guide or usability guidance. It may be research-informed, but no study is cited for the specific rule.
- **[DOI ✔]**: I confirmed the DOI against a Crossref record or the publisher's or repository's own listing during this session.
- **[DOI ?]**: the DOI came only from a search snippet or secondary source. Verify it before citing.

---

## 1. NN/g scanning patterns, the F-pattern (and its 2017 update), "How users read on the web", and Morkes & Nielsen (1997)

### Takeaway
Web readers mostly scan. When text is an unformatted wall, they fall into an F-pattern, fixating on the first lines and on the first words of each line. Good headings change the scan into the far more efficient "layer-cake" pattern. NN/g reserves full "commitment" reading for highly motivated readers, and it names studying for a test as an example. Medical students reading a textbook are therefore in the commitment-prone group. Even so, NN/g's advice is to design for scanning, because the same structure helps the committed reader and the reader who is only looking something up. The Morkes & Nielsen gains are real but come from a small 1997 lab study on a travel site, so cite them as an indication, not a precise effect size.

### Cited Findings
- **[EMPIRICAL, dated]** 79% of test users scanned any new page, and only 16% read word by word (Jakob Nielsen, 30 Sep 1997). Recommendations: highlight keywords, use meaningful (not "clever") subheadings, use bullets, keep one idea per paragraph, use the inverted pyramid (conclusion first), and use half the word count of conventional writing — [NN/g, How Users Read on the Web](https://www.nngroup.com/articles/how-users-read-on-the-web/)
- **[EMPIRICAL, log study]** In a naturalistic browser-logging dataset (25 users, 45,237 page views, collected 2005, from Weinreich et al. 2008), users spent about 4.4 s more per extra 100 words, which is time to read about 18% of added text. On an average 593-word page, users could read at most 28% of the words, and about 20% is more realistic. Caveats: this is an upper-bound estimate, not eyetracking. The sample was above average in intelligence and included university staff. Pages over about 1,250 words were excluded. Nielsen notes that committed niche readerships read more — [NN/g, How Little Do Users Read? (Nielsen, 5 May 2008)](https://www.nngroup.com/articles/how-little-do-users-read/)
- **[EMPIRICAL, eyetracking] F-pattern, 2017 update:** Kara Pernice (12 Nov 2017) restates the 2006 F-pattern: a horizontal sweep across the top, a shorter second sweep, then a vertical scan down the left edge. The F-pattern is "misunderstood": it is not a design goal. It is the default "when there are no strong cues to attract the eyes towards meaningful information". It occurs when (1) the text has little or no web formatting, (2) the user wants to be efficient, and (3) the user isn't committed enough to read every word. It persists on mobile, and right-to-left readers show a mirrored F. Example heatmaps aggregate 45+ and 47 participants — [NN/g, F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant (Even on Mobile)](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
- **[EMPIRICAL, eyetracking] Other patterns (2017 article):**
  - layer-cake: eyes hit headings and skip the body text
  - spotted: skipping chunks to hunt for a link, number or word
  - marking: eyes stay fixed while the page scrolls, more common on mobile
  - bypassing: skipping repeated first words of list items
  - commitment: fixating on nearly everything, only when highly motivated

  The article says to assume most users will scan — [NN/g, F-Shaped Pattern (Pernice 2017)](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
- **[EMPIRICAL, eyetracking]** Pernice (25 Aug 2019) ranks four patterns from worst to best: F-pattern, spotted, layer-cake, commitment. Layer-cake is "by far the most effective way in which users can scan pages". Commitment reading gives the best comprehension but takes the most time. Commitment is driven by high motivation, for example "studying for a test" or following instructions, and by trust in the source or confidence of being in the right place. The pattern a reader uses depends on task, past experience with the site, layout and content type — [NN/g, Text Scanning Patterns: Eyetracking Evidence](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/)
- **[PRACTITIONER] NN/g fixes for F-pattern scanning:**
  - put the most important points in the first two paragraphs
  - make headings and subheadings stand out, and start them with the most informative words
  - group small amounts of related content visually
  - bold key words
  - use bullets and numbered lists
  - write descriptive link text
  - cut unnecessary content

  Source: [NN/g, F-Shaped Pattern (Pernice 2017)](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/)
- **[PRACTITIONER] Inverted pyramid (Amy Schade, 11 Feb 2018):** put the conclusion first and narrow to details. Benefits: readers can "stop reading at any point" and still have the main point, an early mental model aids comprehension of later detail, and it encourages scrolling. Front-load at every level: descriptive headings, the main point in each paragraph's first sentence, and informative first words in sentences. Add a summary or key-points list. The article contrasts this with academic writing, where conclusions come last, and says "The structure only helps readers if the content is strong" — [NN/g, Inverted Pyramid: Writing for Comprehension](https://www.nngroup.com/articles/inverted-pyramid/)
- **[EMPIRICAL, small lab study] Morkes & Nielsen 1997 design:**
  - Study 3 had 51 experienced web users in a between-subjects design with 5 conditions, about 10 per condition.
  - The material was a seven-page "Travel Nebraska" site.
  - Conditions: promotional control; concise (about half the words); scannable (bullets, bold keywords, shorter sections, more headings, captions); objective (no marketese); and combined.
  - Measures: task time, errors, memory (recognition and recall), sitemap time and accuracy, and satisfaction, combined into an Overall Usability geometric-mean score with control = 100.

  Source: [NN/g, Concise, SCANNABLE, and Objective: How to Write for the Web (Morkes & Nielsen 1997)](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/)
- **Morkes & Nielsen results:** concise +58%, scannable +47%, objective +27%, combined +124% better usability than control. **Caveats:**
  - Groups were small, and several differences were only p < .10.
  - Most "objective" differences were not significant.
  - The headline numbers come from a composite score, and the combined version's error-rate value drives much of its score.
  - The scope was narrow: one simple travel site and directed fact-finding tasks.
  - The study was run at Sun's labs.
  - The NN/g page date shows "1 Jan 1997", which may be a placeholder; the study ran in summer 1997.

  Source: [NN/g, Concise, SCANNABLE, and Objective](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/)
- **[PRACTITIONER, qualitative usability study]** NN/g reports that domain experts in science, technology and medicine also want concise, scannable text. One example is a nurse practitioner with a doctorate in nursing who preferred a revision with plainer language, larger headings and bullets because she could "see quickly what the issues are". Recommendations:
  - sentences of 15–20 words
  - one idea per paragraph
  - a reading level of roughly grade 6–8 for general audiences and grade 10–12 for experts
  - jargon only when the audience shares it
  - informative headings, bullets, tables, white space, summaries, and key information first

  No sample size is reported — [NN/g, Plain Language Is for Everyone, Even Experts (Hoa Loranger, 8 Oct 2017)](https://www.nngroup.com/articles/plain-language-experts/)

### Inferences
- Medical students studying for exams match NN/g's commitment profile: motivated, studying for a test, trusting the source. They will read more than casual web users. But they will also return to the book to look things up and revise, which is scanning behaviour. Headings that support the layer-cake pattern help both modes, so headings carry the most leverage.
- "Dense, hard to read" is consistent with F-pattern conditions: long paragraphs with weak cues. The fix is structural cues (informative, front-loaded headings and topic-first paragraphs), not necessarily less content.
- The inverted pyramid conflicts with the narrative "build-up" style of textbooks. A workable compromise is a 1–2 sentence "bottom line" at the top of each `##` section, followed by the explanatory build-up.
- "Half the word count" (1997) was derived from promotional or travel copy. Applying it literally to a textbook would cut teaching content. The transferable principle is to cut filler, hedging and redundancy, not explanation.

### Gaps
- I found no NN/g eyetracking data specific to long-form educational or textbook reading by students. The "studying for a test" commitment example is a stated driver, not a measured textbook study.
- NN/g's original 2006 F-pattern study details (participant numbers) were not re-fetched. The 2017 article only reports aggregate heatmap sizes (45+, 47).

---

## 2. Progressive disclosure and collapsible/accordion content

### Takeaway
NN/g supports hiding secondary material only when most readers need only some of it and the labels are descriptive. Content behind an accordion is often missed, costs a click, prints badly and breaks the reading flow. NN/g says accordions are wrong for content meant to be read continuously or content users need most of. For a textbook, core teaching text should stay visible. Collapsing suits genuinely optional depth, such as derivations, extra examples or "for the curious" material, plus look-up material and self-test answers. Expect most readers not to open it.

### Cited Findings
- **[PRACTITIONER] Progressive disclosure (Jakob Nielsen, 3 Dec 2006):** defer advanced or rarely used features to a secondary screen, which makes systems "easier to learn and less error-prone".
  - Get the split right: frequent items go up front, and "anything shown first is implicitly important".
  - Make the path to secondary material obvious and well labelled.
  - Designs beyond 2 levels "typically have low usability because users often get lost".
  - Staged (sequential) disclosure is problematic when users must move back and forth between interdependent steps.
  - The article cites research that people understand a system better when features are prioritised. The topic is software features, not prose.

  Source: [NN/g, Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
- **[PRACTITIONER] Accordions on desktop (Huei-Hsin Wang, 30 Jul 2023).** They help when:
  - users need only a few pieces of information
  - sections are independent, as in FAQs
  - content is long and the screen is small
  - readers want an overview of topics

  They hurt when:
  - users need most or all of the content
  - content is deeply nested
  - content is hard to summarise under accurate headings
  - "Users are meant to read continuously, as with news articles or narratives"

  Costs: interaction cost; "Valuable content that is hidden under an accordion may be missed altogether"; poor printing unless an expand-all or print handling exists; labels determine findability. Fragmented panels also make it hard to connect related information — [NN/g, Accordions on Desktop: When and How to Use](https://www.nngroup.com/articles/accordions-on-desktop/)
- **[PRACTITIONER] Accordions for complex content (Hoa Loranger, 18 May 2014):** when users need most of the page, "Forcing people to click on headings one at a time to display full content can be cumbersome". Readers "treat clicks like currency". Hidden content gets ignored unless headings are descriptive and compelling. Accordions print poorly and need accessibility work. "Relevance trumps page length": people scroll when content is valuable and formatted for scanning, and "reluctance to scroll is a behavior of the past". Users spend about 80% of attention above the fold and about 20% below — [NN/g, Accordions Are Not Always the Answer for Complex Content on Desktops](https://www.nngroup.com/articles/accordions-complex-content/)
- **[PRACTITIONER] Analogous rule from GOV.UK:** "Don't use footnotes." If the information matters, put it in the body; otherwise remove it — [GOV.UK, Create a clear structure for your content](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/)
- **[EMPIRICAL, related] Expertise reversal:** techniques that help novices can lose their effect or harm more experienced learners. For example, integrated explanatory text helped novice trainees, while experienced trainees did better with a diagram-only format. Citation: Kalyuga, Ayres, Chandler & Sweller (2003), *Educational Psychologist* 38(1), 23–31. I saw this only as repository metadata and secondary summaries, not the full text, and author order differs between listings. No DOI is given here — [UOW Research Online record](https://ro.uow.edu.au/edupapers/136); [Wikipedia summary, secondary](https://en.wikipedia.org/wiki/Expertise_reversal_effect)

### Inferences
- In a Quarto book, `callout-*` blocks with `collapse="true"` behave like accordions: expect low open-rates. Use them only for material that is truly optional for the chapter's learning objectives, and give them informative titles, not "More detail".
- Expertise reversal gives a learning-science reason for optional depth. Stronger or returning students can open the detail, and novices are spared it. This is an inference: I found no study directly testing collapsible optional detail in textbooks.
- NN/g's 2-level limit implies no nested collapsibles. "Anything shown first is implicitly important" implies that whatever stays visible signals what is examinable.
- Print and PDF export: collapsed callouts need print CSS or an expanded-by-default PDF render. This matches NN/g's printing caveat.

### Gaps
- I found no controlled study showing whether hiding optional detail behind expanders improves learning outcomes in expository or instructional text. NN/g guidance is about task usability, not learning. This is an evidence gap to flag in the report.
- I found no NN/g quantitative data on accordion open-rates. "Missed" is reported qualitatively.

---

## 3. Callouts, sidebars and sidenotes or margin notes (Tufte style): help or distraction?

### Takeaway
I found no empirical studies of sidenotes or callout boxes as such. Inferences rest on two well-established multimedia-learning effects. First, interesting but irrelevant asides harm learning (the seductive details effect, about g ≈ −0.33). Second, keeping related information physically together and signalling structure help learning (the contiguity/split-attention and signalling effects). Boxed asides are therefore safe when they hold relevant, integrative material placed next to its referent. They are risky when they hold "fun facts" or tangents.

### Cited Findings
- **[EMPIRICAL, meta-analysis] Seductive details (Sundararajan & Adesope 2020).** "Keep it Coherent: A Meta-Analysis of the Seductive Details Effect", *Educational Psychology Review* 32(3), 707–734, DOI 10.1007/s10648-020-09522-4 **[DOI ✔ Crossref]** — [Crossref record via doi.org](https://doi.org/10.1007/s10648-020-09522-4)
  - The WSU press release reports 58 studies and more than 7,500 students. Learners given seductive details "tend to perform worse".
  - The harm was worse when the detail sat next to relevant diagrams, when it was static or constant, and in paper rather than digital formats. It was more prominent in social studies and natural sciences.
  - Most included studies used 6–12-minute sessions.
  - Implication drawn: the coherence principle (place relevant information together and leave out unnecessary material). "This does not mean that learning shouldn't be fun".

  Source: [WSU press release, 19 Mar 2020](https://news.wsu.edu/press-release/2020/03/19/seductive-details-inhibit-learning)
- **Effect size:** g = −0.33 (small to moderate), reported by secondary summaries, not checked against the paper — [ACU Inspire summary](https://inspire.acu.edu.au/articles/seductive-details)
- **[EMPIRICAL, meta-analysis] Rey (2012).** "A review of research and a meta-analysis of the seductive detail effect", *Educational Research Review* 7(3), 216–237. The DOI 10.1016/j.edurev.2012.05.003 is **[DOI ?]** (search snippet only). Secondary summaries report medium negative effects on retention and transfer, and a stronger effect under limited study time. I did not verify the effect sizes against the paper — [ACU Inspire summary](https://inspire.acu.edu.au/articles/seductive-details)
- **[EMPIRICAL, meta-analysis] Signalling (Schneider, Beege, Nebel & Rey 2018).** "A meta-analysis of how signaling affects learning with media", *Educational Research Review* 23, 1–24, DOI 10.1016/j.edurev.2017.11.001 **[DOI ✔ Crossref]** — [doi.org link](https://doi.org/10.1016/j.edurev.2017.11.001)
  - The abstract opens with the claim that learners profit from cues that highlight the organisation of relevant information.
  - Secondary summaries report 103 studies with N = 12,201 and a strong effect on retention and a moderate effect on transfer. Signal type mostly did not matter, and signalled learners reported less mental effort.
  - I did not verify the exact g values.

  Sources: [TUM Clearinghouse summary (German)](https://www.clearinghouse.edu.tum.de/wp-content/uploads/2018/12/CHU_KR-22_-Schneider_2017_Lernmaterial_Hervorhebungen.pdf); [QIC-WD umbrella summary](https://www.qic-wd.org/sites/default/files/Umbrella%20Summary%20-%20Signaling%20in%20Training%20111021.pdf)
- **[EMPIRICAL, meta-analysis] Split attention and contiguity (Ginns 2006).** "Integrating information: A meta-analysis of the spatial contiguity and temporal contiguity effects", *Learning and Instruction* 16(6), 511–525. I have no DOI and saw only secondary sources. Reported effects: d ≈ 0.85–0.89 overall; d = 0.78 for high-complexity material; d = 0.28 (n.s.) for low-complexity material — [ACU Inspire, Contiguity](https://inspire.acu.edu.au/articles/contiguity-present-words-and-pictures-in-the-same-place-and-at-the-same-time); [Frontiers in Education 2019 paper citing Ginns](https://doi.org/10.3389/feduc.2019.00086)
- **[PRACTITIONER] Tufte CSS on sidenotes:** sidenotes put asides and citations "as close as possible" to the text that references them, so they "don't force the reader to jump their eye to the bottom of the page". Secondary material should stay out of the main flow. Margin notes without numbers reduce distraction but make it harder to match a note to its referent. On narrow viewports, notes are hidden behind a toggle (the reference number or ⊕) — [Tufte CSS](https://edwardtufte.github.io/tufte-css/)
- **[PRACTITIONER, opinion]** Gwern.net argues that sidenotes improve on footnotes and endnotes, while noting trade-offs such as long notes. The comment threads I found are anecdotal — [gwern.net, Sidenotes](https://gwern.net/sidenotes)
- **[PRACTITIONER]** GOV.UK bans footnotes: move important content into the body or delete it — [GOV.UK, clear structure](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/). NHS formatting guidance says to use bold sparingly and not for emphasis, because "too much bold makes it hard for readers to tell which content matters most" — [NHS service manual, Formatting](https://service-manual.nhs.uk/content/formatting)

### Inferences
- **Rule of thumb for callouts:** a box earns its place if its content is needed for, or directly applies, the adjacent learning objective. Examples: a clinical-relevance box, a "key point", a worked example, a just-in-time definition. Interesting tangents, historical anecdotes or "did you know" facts are candidate seductive details. Either cut them, or move them out of the main flow, for example to a collapsed callout or the end of a section.
- Sidenotes plausibly reduce split attention compared with footnotes or endnotes, because the gloss sits next to its referent. That supports Quarto margin notes for short definitions and citations. But the Ginns moderator suggests the benefit is largest for complex material. Sidenotes also collapse into toggles or inline text on mobile, so the benefit is desktop-only.
- **Signalling evidence:** consistent callout types (for example, always "Clinical link" or "Key point") act as organisational cues. Overuse dilutes them, as NHS says about bold.
- The seductive-details meta-analysis found larger harm on paper than digital and in static adjacent placements. A permanently visible decorative box beside a key diagram is the worst case.

### Gaps
- I found no empirical study, eyetracking or comprehension-based, comparing sidenotes or margin notes with footnotes or inline text for learning. Claims for Tufte-style sidenotes are design argument only.
- I found no direct study of textbook "boxes" or "sidebars" and comprehension. The inference rests on seductive-details and signalling research.
- Exact effect sizes and moderators for Rey 2012 and Schneider 2018 were not verified against the full texts.

---

## 4. Screen vs paper comprehension: meta-analyses and the "shallowing" hypothesis

### Takeaway
Three 2018–2019 meta-analyses agree on a small but consistent paper advantage for comprehension of expository or informational text (g ≈ −0.21 to −0.32), with no reliable difference in reading time. Delgado et al. found that the screen disadvantage grows under time pressure, is absent for narrative-only texts, and has increased over the years rather than shrinking. Clinton found that screen readers are worse calibrated, meaning more overconfident. The "shallowing" account holds that people default to shallow processing on screens, especially when the task seems to permit it. Prompts for deeper processing removed the gap in the primary studies.

### Cited Findings
- **[EMPIRICAL, meta-analysis] Delgado, Vargas, Ackerman & Salmerón (2018).** "Don't throw away your printed books: A meta-analysis on the effects of reading media on reading comprehension", *Educational Research Review* 25, 23–38. The DOI 10.1016/j.edurev.2018.09.003 is **[DOI ?]**: it appeared in the Haifa CRIS search snippet, but the Crossref lookup was rate-limited.
  - Studies 2000–2017: 38 between-participant and 16 within-participant studies, 171,055 participants.
  - Paper advantage g = −0.21 in both designs.
  - Moderators: (1) the advantage increased under time-constrained vs self-paced reading; (2) it was consistent for informational or mixed texts but absent for narrative-only texts; (3) "the advantage of paper-based reading increased over the years".

  Source: [author PDF (Univ. Valencia), abstract](https://www.uv.es/lasalgon/papers/Delgado%202018%20dont%20throw%20away%20your%20printed%20books.pdf); [Haifa CRIS record](https://cris.haifa.ac.il/en/publications/dont-throw-away-your-printed-books-a-meta-analysis-on-the-effects/)
- **Delgado et al. on shallowing:**
  - The authors say their results "provide evidence that people adopt a shallower processing style in digital environments".
  - They describe the Shallowing Hypothesis (Annisette & Lafreniere 2017): habitual quick, reward-driven digital interactions make sustained-attention tasks like comprehension harder on devices.
  - Time pressure, or framing a task as preliminary, "justify shallow processing", which has a stronger effect on screens.
  - Overconfidence is greater on screen.
  - There were no differences between age groups, so screen inferiority won't simply disappear with "digital native" experience.
  - "Simple methodologies (e.g., writing keywords summarizing the text, framing the task as central)" eliminated screen inferiority in performance and overconfidence, even under time limits (Lauterman & Ackerman 2014; Sidi et al. 2017).
  - Scrolling was a possible but non-significant obstacle in older studies. Text length was not a moderator.

  Source: [Delgado et al. author PDF, Discussion](https://www.uv.es/lasalgon/papers/Delgado%202018%20dont%20throw%20away%20your%20printed%20books.pdf)
- **[EMPIRICAL, meta-analysis] Clinton (2019).** "Reading from paper compared to screens: A systematic review and meta-analysis", *Journal of Research in Reading* 42(2), 288–325, DOI 10.1111/1467-9817.12269 **[DOI ✔ Crossref]**
  - Screen reading had a negative effect: g = −0.25 (33 studies, N = 2,799).
  - Expository texts g = −0.32; narrative texts g = −0.04 (no effect).
  - Literal comprehension g = −0.33; inferential g = −0.26.
  - Reading time showed no reliable difference (g = 0.08; 14 studies).
  - Calibration (judging one's own performance) was better on paper, g = 0.20 (11 studies).

  Source: [doi.org link](https://doi.org/10.1111/1467-9817.12269); [Reading Rockets summary](https://www.readingrockets.org/resources/resource-library/reading-paper-compared-screens-systematic-review-and-meta-analysis)
- **[EMPIRICAL, meta-analysis] Kong, Seo & Zhai (2018).** "Comparison of reading performance on screen and on paper: A meta-analysis", *Computers & Education* 123, 138–149, DOI 10.1016/j.compedu.2018.05.005 **[DOI ✔ Crossref and Buffalo repository]**
  - 17 studies using robust variance estimation.
  - Paper was better for comprehension (Delgado et al. report the effect size as −0.21). There was no significant difference in reading speed. No moderator was significant at .05.
  - The comprehension gap "followed a diminishing trajectory" from before to after 2013, but this was not significant. This conflicts with Delgado's finding that the gap is growing.

  Source: [Univ. at Buffalo record](https://researchconnect.buffalo.edu/en/publications/comparison-of-reading-performance-on-screen-and-on-paper-a-meta-a/)

### Inferences
- **For an online textbook:** the medium itself is a modest handicap for exactly this genre (expository) and for exam-pressured readers (time pressure). Screen readers also overestimate their understanding. This is a design argument for:
  - built-in retrieval and metacognitive checks, such as end-of-section questions or "check your understanding", which counter overconfidence;
  - framing reading as central, not preliminary;
  - prompts to summarise or produce keywords, the intervention that removed the gap.
- Reading time does not differ by medium, but comprehension does. So the problem is depth of processing, not speed. Formatting that only speeds scanning will not fix it by itself, and needs to be paired with depth prompts.
- The conflict about the trend over time (Delgado: growing; Kong: shrinking, n.s.) should be reported as unresolved.
- A downloadable or printable PDF version of chapters is a cheap mitigation that the evidence supports.

### Gaps
- The meta-analyses mostly use short texts and lab tasks. I found no evidence specific to long-form, self-paced study of a web textbook with headings, callouts and interactive quizzes over days, or to medical students specifically.
- I did not obtain the device-type and scrolling moderator effect sizes from Delgado's tables.

---

## 5. Plain-language guidance: plainlanguage.gov (now digital.gov), GOV.UK, NHS, Center for Plain Language / IPLF, ISO 24495-1:2023

### Takeaway
Plain-language guides converge on a small set of rules:
- the most important information first, at page, section, paragraph and sentence level
- descriptive, front-loaded headings
- one topic per paragraph, opening with a topic sentence
- sentences of about 20–25 words maximum
- short paragraphs
- active voice and familiar words
- explaining technical terms at first use
- short parallel lists, with numbered lists for steps

These guides are written for public audiences (NHS targets a reading age of 9–11). GOV.UK and NHS both cite evidence that specialists prefer plain English even more strongly. For medical students, the structural rules transfer directly. The vocabulary rules need adapting: students must learn the technical terms, so gloss and teach them rather than avoid them.

### Cited Findings
- **[PRACTITIONER] GOV.UK, clear language:**
  - "Try to split up sentences that are over 25 words long."
  - Paragraphs of no more than 5 sentences.
  - Plain English is mandatory.
  - Use the active voice ("passive sentences tend to be longer and harder to read"), with exceptions.
  - Specialist terms are acceptable where needed but must be explained the first time they appear.
  - Use short common words, and avoid "-ion/-ment" nominalisations.

  On specialists: research on legal documents found that 80% of people preferred sentences in clear English, and the preference grew with the complexity of the issue. "The more educated and specialist a reader is, the more they prefer plain English", because it lets them understand quickly. The study is not named on the page — [GOV.UK, Use clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)
- **[PRACTITIONER] GOV.UK, clear structure:**
  - "Put the most important information first" (inverted pyramid).
  - Headings are descriptive (not "Introduction"), front-loaded, active (often starting with a verb), "removable" (content still makes sense without them), not questions, and contain no unexplained technical terms.
  - Use H2–H4.
  - Write a top-of-page summary and don't repeat it in the first paragraph.
  - No footnotes.
  - Users skim, reading "only 20 to 28%" of a page (this is the Nielsen 2008 estimate), and read in an F-pattern. They may be stressed or distracted.

  Note: GOV.UK's guidance moved from gov.uk/guidance/content-design to guidance.publishing.service.gov.uk ("Writing to GOV.UK standards") — [GOV.UK, Create a clear structure for your content](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/)
- **[PRACTITIONER] NHS digital service manual, "How we write":**
  - Reading age 9–11, or understandable by an 11–14-year-old if the medical content makes that hard.
  - Sentences of about 20 words and paragraphs of about 3 sentences.
  - Use medical terms only where they aid understanding and search, and explain them. Plain term first, then the medical term, as in "piles (haemorrhoids)".
  - Be precise: specific symptoms and exact amounts. "We do not use metaphors."
  - Subheadings and bullets so users can find things.
  - Most people prefer plain English, and the more specialist the reader, the stronger the preference.
  - Health professionals get the same clear style.

  Source: [NHS service manual, How we write](https://service-manual.nhs.uk/content/how-we-write)
- **[PRACTITIONER] NHS formatting:**
  - Sentence-case headings that start with keywords. No question headings except on question pages. One H1, ideally 65 characters or fewer. H2–H4, no H5, and don't skip levels.
  - Front-load sentences instead of using bold.
  - Bullets: "short and snappy", ideally no more than 6 items, of similar length. A colon lead-in so the bullets read as one sentence; lowercase starts; no end punctuation; at most one sentence per bullet; don't end a bullet with "and" or "or".
  - Numbered lists for processes.
  - Bold sparingly and not for emphasis. No italics (screen readers don't announce them). No underlining except links.
  - No justified text (it causes problems for some readers with cognitive differences and for screen-magnifier users).
  - Link text must make sense out of context.
  - The formatting page does not cover tables or expanders.

  Source: [NHS service manual, Formatting](https://service-manual.nhs.uk/content/formatting)
- **[PRACTITIONER] US Federal plain-language guidance:** plainlanguage.gov/guidelines now redirects to digital.gov/guides/plain-language, described as "adapted from PlainLanguage.gov" with originals archived on GSA GitHub. Its sections are Principles, Writing for understanding, Design for understanding, and Test for understanding — [digital.gov, Plain language guide](https://digital.gov/guides/plain-language)
  - "Clear and short": "Express only one idea in each sentence". Paragraphs of "no more than 150 words in three to eight sentences", never over 250 words. Vary paragraph length, since a one-sentence paragraph is occasionally fine. One topic per paragraph, opening with a topic sentence. Short sections, and headings so readers can skim. No studies are cited — [digital.gov, Clear and short](https://digital.gov/guides/plain-language/writing/clear-short)
  - Writing: active voice; present tense; avoid "hidden verbs" (nominalisations, e.g. "conduct an analysis of" becomes "analyze") — [digital.gov, Writing for understanding](https://digital.gov/guides/plain-language/writing)
- **[STANDARD] ISO 24495-1:2023, "Plain language — Part 1: Governing principles and guidelines".**
  - ISO/TC 37, published 2023-06-20, 14 pp.
  - Scope: anyone who creates documents. Its widest use is public-facing documents, but it "also applies to technical writing, legislative drafting, and controlled languages".
  - It covers text-based print and digital information, not accessibility.

  Source: [ISO committee page](https://committee.iso.org/standard/78907.html)
  - Four principles: relevant, findable, understandable, usable. The first two are labelled "Readers get what they need (relevant)" and "Readers can easily find what they need (findable)". I confirmed the full wording of principles 3–4 only as single-word labels — [IPLF and secondary listings via search; PLAIN page](https://plainlanguage.com/what-is-plain-language/iso-plain-language-standard/)
  - Definition, adopted from the International Plain Language Federation (formed by PLAIN, Clarity and the Center for Plain Language): communication whose "wording, structure and design are so clear that intended readers can easily find what they need, understand what they find, and use that information" — [PLAIN, What is the ISO Plain Language Standard?](https://plainlanguage.com/what-is-plain-language/iso-plain-language-standard/)
  - The key phrase is "intended readers". The standard is audience-relative, not a fixed reading level.

### Inferences
- **Audience mapping:**
  - GOV.UK and NHS write for the general public under stress, which explains the reading-age targets and avoidance of jargon.
  - ISO 24495-1 is explicitly audience-relative ("intended readers") and covers technical writing. It is the right frame for a medical textbook.
  - NN/g's expert study suggests a grade 10–12 target and jargon "only when the audience shares it".
- **Adaptations for medical students:**
  - Keep all the structural rules: front-loading, topic sentences, descriptive headings, short parallel lists, 20–25-word sentence ceilings, active voice, no nominalisations.
  - Do not avoid technical terms. Instead, apply GOV.UK's "explain on first use" and NHS's dual-term pattern in reverse: the technical term plus a one-line gloss, e.g. "haem iron (the iron in meat)". Students are learning the vocabulary, so the term is content, not noise.
  - Use the 150-word / 3–8-sentence paragraph cap (digital.gov) or the 5-sentence cap (GOV.UK) as a lint threshold rather than the NHS 3-sentence target, which is tuned to the public.
  - GOV.UK's "headings should not use technical terms unless already explained" maps onto textbook headings: avoid headings that only make sense after reading the section.
- GOV.UK's "no question headings" may conflict with pedagogical question-framed headings ("Why does X happen?"). That rule is aimed at public transactional content and is arguably less applicable to learning text. This is my judgement, not a sourced rule.

### Gaps
- I could not access the full ISO 24495-1 text (it is paywalled, and ISO bars AI use of its content), so the guidelines under each principle are not detailed here.
- The Center for Plain Language's own guidance pages were not fetched, beyond its role in IPLF.
- The research behind GOV.UK's "80% preferred clear English / specialists prefer plain English" claim is not named on the page. It is commonly attributed to Christopher Trudeau's legal-document study, but I did not verify that. Flag it as unverified.
- I found no evidence-based paragraph-length target. All numeric caps (3, 5, or 3–8 sentences; 150 or 250 words) are practitioner conventions.

---

## 6. Line length, typography and whitespace on screen (brief)

### Takeaway
On screen, longer lines can be read faster without loss of comprehension, but readers prefer and rate as easiest moderate lines of about 55 characters, and their preferences don't match their performance. For a study text where comprehension and comfort matter more than raw speed, a moderate measure of about 50–75 characters is a defensible default. Quarto's default body column is already in this range.

### Cited Findings
- **[EMPIRICAL] Dyson & Kipping (1998), *Visible Language* 32(2):** long lines (100 characters per line) were read faster than very short lines (25 cpl), and comprehension was about constant. Participants rated long lines least easy and 55 cpl easiest. Ease judgements "did not correlate with their performance". Scrolling produced varied reading patterns. Print legibility findings did not predict screen results — [Visible Language, Dyson & Kipping 1998](https://journals.uc.edu/index.php/vl/article/view/5671)
- **[EMPIRICAL, secondary only] Dyson & Haselgrove (2001):** "The influence of reading speed and line length on the effectiveness of reading from screen", *International Journal of Human-Computer Studies* 54, 585–612. Secondary summaries report that 55 cpl supported effective speed and comprehension, and that reading about twice as fast gives a less complete account of a document. Not verified against the paper, no DOI — [summary via humanfactors.com newsletter](https://humanfactors.com/newsletters/optimal_line_length.html); [blog summary](https://www.blog.theteamw.com/2009/10/26/100-things-you-should-know-about-people-2-line-length/)
- **[PRACTITIONER]** NHS: no justified text; left-aligned for screen-magnifier users; avoid large areas of bold or italics — [NHS Formatting](https://service-manual.nhs.uk/content/formatting). digital.gov: long, dense sections without white space are "visually unappealing and harder to understand" — [digital.gov, Clear and short](https://digital.gov/guides/plain-language/writing/clear-short)

### Inferences
- Don't widen the text column to "fit more", and don't shrink it to very narrow columns. About 55–75 cpl balances preference and speed. Readers' sense of what is "easy" doesn't track performance, so a colleague's "hard to read" complaint may partly reflect perceived density (paragraph length, lack of white space) rather than measured comprehension. It still matters for motivation.

### Gaps
- I did not fetch Dyson's 2004 review (*Behaviour & Information Technology*) or recent typography and line-spacing studies on modern high-DPI screens.

---

## 7. Attention-span claims: the goldfish statistic, and sustained reading in students

### Takeaway
The claim that "human attention span is 8 seconds, less than a goldfish" is unsupported. It traces to a 2015 Microsoft Canada marketing report citing "Statistic Brain", and a BBC *More or Less* investigation (2017) found no research behind it. Psychologists note that "average attention span" isn't a meaningful single metric because attention is task-dependent. What is measured is frequent screen switching (Gloria Mark: about 47 s average per screen), a behavioural pattern, not a biological limit. In lectures, the "10–15 minute attention limit" is also weakly supported (Bradbury 2016). The real, evidence-based concern for online reading is shallow processing and overconfidence on screens (Section 4), not a collapsed attention capacity.

### Cited Findings
- **[FACT-CHECK, secondary coverage of BBC]** The 8-second figure comes from a 2015 Microsoft Canada consumer-insights report (2,000 Canadians surveyed, 112 EEG participants), which credited "Statistic Brain". BBC *More or Less* (Simon Maybin, 2017) followed the trail, found the sources "infuriatingly vague", and found no research supporting the claim. Fish researchers noted that goldfish are a model system for studying learning and memory. Psychologists told the BBC that attention span is task-dependent. I did not retrieve the original BBC page, and these details come via secondary sources — [ScienceBlog summary](https://scienceblog.com/t-humans-eight-second-attention-span-goldfish-myth/); [TopClass LMS blog](https://blog.topclasslms.com/attention-spans)
- **[EXPERT OPINION, secondary]** Psychologist Gemma Briggs: "average attention span is not a metric that psychologists would try to measure and quantify". A University of Wisconsin myth-busting handout quotes a psychologist saying there is "no real evidence that it's changed since it was first reported in the late 1800s" — [UW–Madison Goldfish MythBusting PDF](https://internet.psych.wisc.edu/wp-content/uploads/532-Master/532-UnitPages/Unit-09/Goldfish_MythBusting.pdf); [TopClass LMS blog](https://blog.topclasslms.com/attention-spans)
- **[EMPIRICAL, field studies] Gloria Mark (UC Irvine):** average time on one screen before switching was about 2.5 min (2003–04), about 75 s (2012), and about 47 s in recent years, with a median of 40 s. It was measured by computer logging in everyday settings and is reportedly replicated at 44 and 50 s by others. She calls it "kinetic attention". Reading an article requires effortful "focused attention". These are switching behaviours, not proof of a biological limit. The early sample was small (14 information workers) — [UCI News podcast, 5 May 2023](https://news.uci.edu/2023/05/05/uci-podcast-if-you-cant-pay-attention-youre-not-alone); [Steelcase interview transcript](https://www.steelcase.com/research/articles/our-47-second-attention-span-with-gloria-mark-s5-ep3-transcript/)
- **[REVIEW / personal view] Bradbury (2016):** "Attention span during lectures: 8 seconds, 10 minutes, or more?", *Advances in Physiology Education* 40(4), 509–513. The DOI 10.1152/advan.00109.2016 is **[DOI ?]**, seen on the PubMed listing via search and not opened.
  - The literature has "many discussions referring to prior studies but scant few primary investigations".
  - The most-cited source for attention decline barely discusses attention.
  - Primary data "do not support" a 10–15-minute limit.
  - The biggest variation in attention comes from differences between teachers, not format.

  Source: [PubMed 28145268](https://pubmed.ncbi.nlm.nih.gov/28145268/)
- **[EMPIRICAL]** Delgado et al. found no age-group differences in screen inferiority, and the screen disadvantage grew over 2000–2017. They link this, speculatively, to "poorer quality of attention" and shallowing. The digital-media-use vs comprehension evidence they cite is correlational (adolescents) — [Delgado et al. 2018 author PDF](https://www.uv.es/lasalgon/papers/Delgado%202018%20dont%20throw%20away%20your%20printed%20books.pdf)

### Inferences
- Don't justify restructuring with "students have goldfish attention spans". That claim is a myth and would undermine the argument with a sceptical colleague. The defensible rationale is:
  - web readers scan unless the text gives cues (NN/g);
  - screen reading of expository text yields slightly worse and more overconfident comprehension, especially under time pressure (meta-analyses);
  - frequent switching is common, so text should let readers re-enter easily: front-loaded headings and section summaries are "re-entry points".
- Chunking into well-headed sections with a bottom line at the top supports interrupted, switch-heavy reading without dumbing down content.

### Gaps
- I did not retrieve the original BBC article or episode page, so the BBC findings are cited via secondary sources and need a primary link.
- I found no strong empirical data on how long medical or university students sustain reading of a digital textbook in one sitting. The Microsoft report itself was not retrieved.
