# Content pass: proposed fixes for review

> **Outcome (2026-10-22):** Sections B (137) and C (82) applied after an independent fidelity review of the
> applied diff (no problems). Section A walked through with the author item by item: 100 of 101 applied
> (several with verifier-corrected wording and companion edits in quizzes, cases and island text); 1 declined
> (childhood-adolescence/C1, the peak-bone-mass parenthesis). Item 04-micronutrients-hydration/C12 was
> superseded by bone-health-osteoporosis/C15a/c/d. Case YAML no longer carries inline [@key] citations
> (they render literally); sources go in each case's debrief `references:` list.


Each deferred concern was checked against its cited source by one agent and re-checked independently by a second (new citations confirmed on PubMed/Crossref/publisher pages). **Proposals as reviewed** (see outcome below).

- 379 items checked (320 with a proposed fix; 59 need no change).
- **Section A — 101 claim-changing fixes that need a closer look** (verifier disagreed and corrected, or confidence below high).
- **Section B — 137 claim-changing fixes, high confidence, verifier agreed.**
- **Section C — 82 fixes that do not change a claim** (citation moves/swaps for the same claim, wording).
- Section D — 59 items needing no change.

Refs are `chapter/item`. Approve by section or list refs to reject or amend.

## A. Claim-changing fixes that need a closer look

### Why Nutrition Matters

#### 01-why-nutrition-matters/S3 · partly-supported · add-hedge · confidence medium
*book/diagrams/pillars-hub.yml sleep pillar link (uncited diagram text, follows from C2)* — The diagram states as fact that late, heavy meals worsen sleep and that the two form a loop. The only evidence found for this is correlational.

**Source:** Insulin sensitivity, appetite and intake effects come from trials. The effect of late eating on sleep comes from one small cross-sectional study (n=52) whose authors call for more research.  
_Read: PubMed abstracts as for C2_

Current:
```
link: "Short sleep lowers insulin sensitivity and raises appetite and intake of energy-dense food, while late, heavy meals worsen sleep, so the two form a self-reinforcing loop."
```
Proposed:
```
link: "Short sleep lowers insulin sensitivity and raises appetite, especially for energy-dense food, and energy intake; late eating is in turn linked to poorer sleep, so the two can reinforce each other."
```

#### 01-why-nutrition-matters/C6 · internal-contradiction · reword · confidence medium · **verifier corrected**
*book/chapters/01-why-nutrition-matters.qmd scope callout 'The scope at this stage'* — 'come later, as does deciding when to refer' may read as 'not in this book', yet the book teaches referral.

**Source:** The book has an 'Interprofessional practice, referral and looking after yourself' chapter in Part III and recognise-and-refer content in Part IV. The preface says students will learn when to refer. The chapter says referral comes 'later'. The author should confirm the intended meaning.  
_Read: book/_quarto.yml chapter list; heading of chapters/interprofessional-referral.qmd; book/index.qmd preface ('you will learn when to refer')_

**Verifier:** The direction is reasonable, but two details need fixing. (1) 'Deciding when to refer is taught here' is ambiguous: 'here' could mean this chapter, which does not teach referral. (2) The link text breaks the book's cross-reference convention. Other chapters (brain-health-dementia, chronic-kidney-disease) use '[*Interprofessional Practice & Referral*](interprofessional-referral.qmd) chapter'. The original 'come later, as does deciding when to refer' is also defensible, since referral does come la …

Current:
```
Detailed medical nutrition therapy (a dietitian's individualised nutrition plan for a medical
condition), drug choices and disease management come later, as does deciding when to refer.
```
Proposed:
```
Detailed medical nutrition therapy (a dietitian's individualised nutrition plan for a medical
condition), drug choices and disease management come later in training. Deciding when to refer is
taught later in this book, in the [*Interprofessional Practice & Referral*](interprofessional-referral.qmd)
chapter and the disease chapters.
```

### Energy Balance

#### energy-balance/S1 · cannot-verify · remove-claim · confidence medium
*energy-balance.qmd, sec-singapore, paragraph 1 (line 223), portion sizes (second half of C7)* — 'Portions have grown' has no citation, and no Singapore source on portion-size trends was found in references.bib or confirmed in this session.

**Source:** No source checked reports Singapore portion sizes rising over time. Naidoo 2017 names cheap, varied, appealing food, not portion growth, as the driver of eating out.  
_Read: Searched references.bib for portion and hawker keys (hdpHawker2017, healthhubHawkerSwaps, tan2020whereweeat, naidoo2017eatingout); none reports a rise in portion size over time. No outside source was  …_

Current:
```
Portions have grown, and a largely sedentary,
```
Proposed:
```
A largely sedentary,
```

### Macronutrients

#### macronutrients/S2 · partly-supported · reword · confidence high · **verifier corrected**
*macronutrients.qmd, 🔬 Food science: the food matrix, why whole beats juiced (part of C4)* — The food-matrix claim is uncited, and the claim that juice raises glucose faster does not match the classic study.

**Source:** Ten subjects ate 60 g carbohydrate as whole apples, purée or juice. Juice was eaten about 11 times faster and was the least satiating. Plasma glucose rose to SIMILAR peaks after all three meals, but juice gave higher insulin and a rebound fall in glucose. So the study supports the food-matrix point but not 'raises glucose faster'. Note: the PMID in the bib entry is wrong; see S1.  
_Read: Europe PMC record and abstract found by DOI 10.1016/s0140-6736(77)90494-9 (Haber et al., Lancet 1977;2(8040):679-82)_

**Verifier:** The verdict and the source reading are right. Europe PMC (PMID 71495, DOI 10.1016/s0140-6736(77)90494-9) shows similar glucose peaks after all three meals, a higher insulin response after juice, a rebound fall in glucose, faster eating and less satiety. But the proposed sentence is garbled: '...draws a larger insulin response, followed by a rebound dip in glucose, than when eaten whole' attaches the comparative 'than' to the dip clause. The corrected wording below mirrors the existing D&A phrasi …

Current:
```
tears open the plant cell walls that enclosed the sugars, so the same fruit raises glucose faster as
juice than eaten whole.
```
Proposed:
```
tears open the plant cell walls that enclosed the sugars. In a classic study, apple juice was drunk far
faster than the same carbohydrate as whole apples, satisfied less, and drew a larger insulin response
followed by a rebound fall in glucose [@haber1977apple].
```

#### macronutrients/S3 · partly-supported · reword · confidence medium · **verifier corrected**
*macronutrients.qmd, 🔬 Food science: geometry and oxidation (part of C4)* — The oil-oxidation claim (polar compounds, aldehydes, polyunsaturated oils degrading faster) is uncited.

**Source:** SFA: repeated, prolonged heating breaks oil down and lowers its smoke point; harmful compounds formed include aldehydes, linked to cancer and cardiovascular risk; polyunsaturated oils are unstable and degrade under intense heat. The page does not mention polar compounds.  
_Read: https://www.sfa.gov.sg/food-safety-tips/food-risk-concerns/risk-at-a-glance/reusing-cooking-oils (full page)_

**Verifier:** Two problems. First, the SFA page says polyunsaturated oils 'are unstable and degrade under intense heat'. The proposed 'least stable' is a superlative the source does not make. Second, the rewrite drops 'polar compounds' and softens 'the more polyunsaturated, the faster', so the claim's scope changes and changesClaim should be true. A minor point: SFA names PAHs as well as aldehydes, so 'such as aldehydes' is still accurate.

Current:
```
Overheating oil past its smoke point, or reusing frying oil repeatedly, oxidises it into polar
compounds and aldehydes; the more polyunsaturated the oil, the faster this happens.
```
Proposed:
```
Overheating oil past its smoke point, or reusing frying oil repeatedly, oxidises and breaks it down
into harmful compounds such as aldehydes; polyunsaturated oils are especially unstable under intense
heat [@sfaReusingOils].
```

#### macronutrients/C9 · partly-supported · fix-number · confidence medium
*book/diagrams/glycemic-index-load.yml foods* — Several GI values and the jasmine label do not match the international GI table means.

**Source:** 2008 Table 1 means: white rice, boiled 73; brown rice, boiled 68; banana, raw 51; soft drink/soda 59. These match the YAML: watermelon 76, potato 78, white bread 75, rice noodles 53, sweet potato 63, apple 36, lentils 32. The table's 73 is generic boiled white rice, not jasmine. Soft drink 63 was not in the logged concern but is also off the table mean (59).  
_Read: Atkinson, Foster-Powell, Brand-Miller 2008, Diabetes Care, PMC2584181: full text, Table 1 'GI of common foods'. The 2021 AJCN paper (PMID 34258626): abstract only via Europe PMC; its food-level tables …_

Current:
```
- id: white-rice
    name: "White rice (jasmine)"
    gi: 73
    serving: "1 bowl, 150 g cooked"
    carbs: 36
  - id: brown-rice
    name: "Brown rice"
    gi: 65
    serving: "1 bowl, 150 g cooked"
    carbs: 33
  - id: white-bread
    name: "White bread"
    gi: 75
    serving: "1 slice, 30 g"
    carbs: 14
  - id: bee-hoon
    name: "Rice vermicelli (bee hoon)"
    gi: 53
    serving: "1 plate, 180 g cooked"
    carbs: 39
  - id: sweet-potato
    name: "Sweet potato (boiled)"
    gi: 63
    serving: "1 piece, 150 g"
    carbs: 25
  - id: banana
    name: "Banana"
    gi: 47
    serving: "1 medium, 120 g"
    carbs: 24
  - id: apple
    name: "Apple"
    gi: 36
    serving: "1 medium, 120 g"
    carbs: 15
  - id: lentils
    name: "Lentils / dhal (boiled)"
    gi: 32
    serving: "150 g cooked"
    carbs: 18
  - id: soft-drink
    name: "Sweetened soft drink (cola)"
    gi: 63
    ser …
```
Proposed:
```
- id: white-rice
    name: "White rice (boiled)"
    gi: 73
    serving: "1 bowl, 150 g cooked"
    carbs: 36
  - id: brown-rice
    name: "Brown rice"
    gi: 68
    serving: "1 bowl, 150 g cooked"
    carbs: 33
  - id: white-bread
    name: "White bread"
    gi: 75
    serving: "1 slice, 30 g"
    carbs: 14
  - id: bee-hoon
    name: "Rice vermicelli (bee hoon)"
    gi: 53
    serving: "1 plate, 180 g cooked"
    carbs: 39
  - id: sweet-potato
    name: "Sweet potato (boiled)"
    gi: 63
    serving: "1 piece, 150 g"
    carbs: 25
  - id: banana
    name: "Banana"
    gi: 51
    serving: "1 medium, 120 g"
    carbs: 24
  - id: apple
    name: "Apple"
    gi: 36
    serving: "1 medium, 120 g"
    carbs: 15
  - id: lentils
    name: "Lentils / dhal (boiled)"
    gi: 32
    serving: "150 g cooked"
    carbs: 18
  - id: soft-drink
    name: "Sweetened soft drink (cola)"
    gi: 59
    serv …
```

### Micronutrients, Hydration & Electrolytes

#### 04-micronutrients-hydration/C4 · partly-supported · reword · confidence high · **verifier corrected**
*chapter 04, callout 'Does everyone need a calcium supplement?'* — 'some analyses have raised cardiovascular questions' is cited to @uspstfCalcium2018; check that USPSTF discusses cardiovascular harm.

**Source:** USPSTF found no benefit of low-dose vitamin D plus calcium for fracture prevention in postmenopausal women and insufficient evidence otherwise. The documented harm is a small rise in kidney stones with combined supplementation; cardiovascular evidence showed no increase but was limited, and it calls for research on calcium and cardiovascular outcomes.  
_Read: PubMed efetch abstract PMID 29677309 (JAMA 2018;319:1592-1599) and the USPSTF recommendation web page (uspreventiveservicestaskforce.org, full statement)_

**Verifier:** The direction is right, but the wording is off in two ways. (1) USPSTF does more than call cardiovascular safety 'still being studied'. It found no increase in cardiovascular disease in the trials (WHI combined vitamin D plus calcium: no significant rise in MI, CHD or stroke; calcium alone: no rise suggested). Its research-needs section asks specifically for 'studies on calcium and potential adverse cardiovascular outcomes'. 'Their cardiovascular safety' also widens that to vitamin D. (2) The pr …

Current:
```
supplements, with or without vitamin D, have limited fracture-prevention benefit, and some analyses
have raised cardiovascular questions [@uspstfCalcium2018].
```
Proposed:
```
supplements, with or without vitamin D, have limited fracture-prevention benefit. Combined calcium and
vitamin D slightly raises the risk of kidney stones; trials have not shown a rise in cardiovascular
disease, but calcium's cardiovascular safety is still being studied [@uspstfCalcium2018].
```

#### 04-micronutrients-hydration/C5 · unsupported · reword · confidence medium
*chapter 04, The Singapore picture, P1 (lines 384-387)* — 'iodised salt may be losing ground as non-iodised gourmet salts spread' is stated as a local trend without a source, while the iodine section says no national iodine-status survey exists.

**Source:** Codling 2017 lists Singapore's salt iodisation as voluntary (Food Regulations 1998; standard applies only to salt sold as iodised) and links voluntary legislation to lower household use of adequately iodised salt. No source documents a Singapore trend towards gourmet salt.  
_Read: PubMed efetch abstract PMID 28879830 and PMC5647668 full text (Codling et al., Public Health Nutr 2017;20:3008-3018)_

Current:
```
many older adults fall short on calcium, and iodised salt may be losing ground as non-iodised
"gourmet" salts spread.
```
Proposed:
```
many older adults fall short on calcium, and, with salt iodisation voluntary, the food supply does not
guarantee enough iodine [@codling2017iodine].
```

#### 04-micronutrients-hydration/C6b · unsupported · reword · confidence medium · **verifier corrected**
*chapter 04, When does a patient need a supplement? (close), P1* — 'whole-diet patterns beat isolated pills for almost every vitamin and mineral here' is uncited and stronger than trial evidence shows.

**Source:** USPSTF 2022 (community-dwelling non-pregnant adults): beta-carotene harms outweigh benefits; vitamin E has no net benefit; evidence is insufficient for multivitamins and other single or paired nutrients to prevent cardiovascular disease or cancer. It does not compare these with whole-diet patterns.  
_Read: PubMed efetch abstract PMID 35727271 (USPSTF, JAMA 2022;327(23):2326-2333, doi 10.1001/jama.2022.8970); abstract only_

**Verifier:** The citation checks out: PMID 35727271, JAMA 2022;327(23):2326-2333, doi 10.1001/jama.2022.8970, USPSTF with Mangione, Barry and Nicholson. Three wording problems. (1) 'Well-nourished adults' is not the source's scope. The statement covers community-dwelling, non-pregnant adults and excludes people who are chronically ill, hospitalised, or have a known nutritional deficiency. (2) 'Beta-carotene pills cause harm' is stronger than the source. USPSTF says harms outweigh benefits, with small harms ( …

Current:
```
whole-diet patterns beat isolated pills for almost every vitamin and mineral here.
```
Proposed:
```
in adults without a known deficiency, vitamin and mineral pills have not been shown to prevent heart
disease or cancer, and β-carotene pills do more harm than good [@uspstf2022vitamins].
```
New citation:
```bibtex
@article{uspstf2022vitamins,
  author  = {{US Preventive Services Task Force} and Mangione, Carol M. and Barry, Michael J. and Nicholson, Wanda K. and others},
  title   = {Vitamin, Mineral, and Multivitamin Supplementation to Prevent Cardiovascular Disease and Cancer: {US} Preventive Services Task Force Recommendation Statement},
  journal = {JAMA},
  year    = {2022},
  volume  = {327},
  number  = {23},
  pages   = {2326--2333},
  pmid    = {35727271},
  doi     = {10.1001/jama.2022.8970}
}
```

#### 04-micronutrients-hydration/C9 · partly-supported · add-citation (and delete the unused duplicate whoAnaemia entry, references.bib lines 155-161) · confidence high · **verifier corrected**
*case iron-deficiency-aisha, node reveal-group* — 'nearly one in three women aged 15-49 are anaemic' is uncited in the case and not stated in the chapter.

**Source:** Stevens 2022: in 2019 anaemia affected 30% of non-pregnant and 36% of pregnant women aged 15-49. WHO: iron deficiency is the most common nutritional deficiency causing anaemia, not the leading cause overall; heavy menstrual losses commonly lead to anaemia.  
_Read: PubMed efetch abstract PMID 35427520 (Stevens et al., Lancet Glob Health 2022); WHO anaemia fact sheet (who.int, 10 Feb 2025, full page)_

**Verifier:** The citation and the hedge are correct. Stevens 2022 (PMID 35427520, Lancet Glob Health 10(5):e627-e639, doi 10.1016/S2214-109X(22)00084-5, all 11 authors match) reports 30% of non-pregnant and 36% of pregnant women aged 15-49 anaemic in 2019. The WHO fact sheet calls iron deficiency 'the most common nutritional deficiency' leading to anaemia. The gap is bib hygiene. The existing whoAnaemia entry is the same paper: its URL is PMC9023869, it is mislabelled as a WHO techreport, and the main book n …

Current:
```
nearly **one in three** women aged 15–49 are anaemic, with iron deficiency the
      leading cause, and heavy menstrual bleeding is a major driver.
```
Proposed:
```
nearly **one in three** women aged 15–49 are anaemic [@stevens2022anaemia], with iron
      deficiency the most common nutritional cause, and heavy menstrual bleeding is a major driver.
```
New citation:
```bibtex
@article{stevens2022anaemia,
  author  = {Stevens, Gretchen A. and Paciorek, Christopher J. and Flores-Urrutia, Monica C. and Borghi, Elaine and Namaste, Sorrel and Wirth, James P. and Suchdev, Parminder S. and Ezzati, Majid and Rohner, Fabian and Flaxman, Seth R. and Rogers, Lisa M.},
  title   = {National, regional, and global estimates of anaemia by severity in women and children for 2000--19: a pooled analysis of population-representative data},
  journal = {The Lancet Global Health},
  year    = {2022},
  volume  = {10},
  number  = {5},
  pages   = {e627--e639},
  pmid    = {35427520},
  doi     = {10.1016/S2214-109X(22)00084-5}
}
```

#### 04-micronutrients-hydration/C10 · supported · reword · confidence medium
*quiz q7* — Repeats the case presentation almost verbatim (24-year-old woman, fatigue, pallor, heavy periods).

**Source:** The quiz item's facts are accurate but duplicate the case. A vegetarian with koilonychia and pica tests the same deficiency using signs and a risk group the chapter teaches, without repeating the case.  
_Read: Chapter 04 iron paragraph (koilonychia and pica as signs; non-haem iron and vegetarians) and case file; pedagogical concern, no external source_

Current:
```
stem: "A 24-year-old woman is tired, pale, and breathless climbing stairs, with heavy periods. Which deficiency fits best?"
    options:
      - text: "Iron-deficiency anaemia"
        correct: true
        feedback: "Fatigue, pallor and breathlessness in a woman with heavy periods is the classic pattern; heavy menstrual bleeding is a leading cause of iron deficiency."
      - text: "Vitamin D deficiency"
        correct: false
        feedback: "Vitamin D deficiency affects bone and does not classically cause pallor and breathlessness."
      - text: "B12 deficiency from long-term metformin"
        correct: false
        feedback: "B12 deficiency can cause anaemia, but she is not described as taking metformin, and the heavy periods point to iron loss first."
```
Proposed:
```
stem: "A 20-year-old vegetarian student is tired and pale, has spoon-shaped nails and has started craving ice. Which deficiency fits best?"
    options:
      - text: "Iron-deficiency anaemia"
        correct: true
        feedback: "Koilonychia (spoon-shaped nails) and pica (craving ice) are signs of iron deficiency, and a vegetarian diet supplies only the less well-absorbed non-haem iron."
      - text: "Vitamin D deficiency"
        correct: false
        feedback: "Vitamin D deficiency affects bone and does not classically cause pallor, spoon-shaped nails or pica."
      - text: "Vitamin B12 deficiency"
        correct: false
        feedback: "B12 deficiency can cause anaemia and is a risk on plant-based diets, but spoon-shaped nails and craving ice point to iron."
```

#### 04-micronutrients-hydration/C13 · supported · reword (q-action as proposed, plus companion edits) · confidence medium · **verifier corrected**
*case iron-deficiency-aisha, node q-action* — §11e: a Part I case grades a referral decision; author may prefer re-aiming at 'address the cause (heavy periods)'.

**Source:** q-action's correct option 'Give food-first advice, then arrange testing and refer' grades a referral decision, which §11e rules out. Re-aiming at the cause of the iron loss keeps the teaching point. end-good already carries the light referral cue and forward reference. Objective 3 needs a matching edit (C13b).  
_Read: AUTHOR.md §11e (local file): 'In a Part I case, keep referral a light, in-character cue in the resolution and forward-reference those chapters, never a graded decision'_

**Verifier:** The q-action rewrite meets §11e (Part I: referral stays a light cue and is never graded), and its content is accurate. But it leaves three nodes that still frame referral as the graded target, or that refer to options which no longer exist. (1) remedial: 'the sequence is: recognise the pattern, name the at-risk group, give food-first advice and refer. A full work-up, over-escalation and under-management are all off target' (those were the old IV-iron and multivitamin options). (2) end-partial: ' …

Current:
```
stem: "What is the most appropriate action here?"
    options:
      - id: a
        text: "Give food-first advice, then arrange testing and refer."
        correct: true
        feedback: "Recognise the pattern, name the at-risk group, give food-first advice (iron-rich foods with vitamin C), and refer for confirmatory testing and assessment of the heavy periods."
        effects: { quality: +1 }
        goto: route
      - id: b
        text: "Start her on high-dose intravenous iron yourself."
        correct: false
        feedback: "Choosing and dosing iron treatment is beyond the scope at this stage (it belongs to the clinical years); the step here is to refer."
        goto: route
      - id: c
        text: "Tell her to take any multivitamin and come back in a year."
        correct: false
        feedback: "A multivitamin and a year's wait is under-management: it misses the menstr …
```
Proposed:
```
Apply the proposed q-action newText unchanged, plus these edits in book/cases/iron-deficiency-aisha.case.yml. (a) remedial body: old '      For a recognisable deficiency, the sequence is: **recognise the pattern, name the\n      at-risk group, give food-first advice and refer**. A full work-up, over-escalation\n      and under-management are all off target at this stage.' becomes '      For a recognisable deficiency, the sequence is: **recognise the pattern, name the\n      at-risk group, give food-first advice and look at the cause of the iron loss**. Here\n      that cause is her heavy periods, which better food alone cannot fix.' (b) end-partial body: old '      You engaged with the case, but the action was not quite right for this stage.\n      Replay and aim for the sequence: recognise the pattern, name the at-risk group,\n      give food-first advice and refer.' becomes '      You  …
```

#### 04-micronutrients-hydration/C13b · supported · reword · confidence medium
*case iron-deficiency-aisha, objectives (companion to C13)* — Objective 3 frames the graded action as recognise-and-refer; it must follow if C13 is applied.

**Source:** With q-action re-aimed at the cause of iron loss, objective 3 should name that skill; referral stays as a light cue in end-good, which forward-references the Interprofessional Practice & Referral chapter.  
_Read: AUTHOR.md §11e (local file)_

Current:
```
- "Choose an appropriate action: food-first advice plus recognise-and-refer."
```
Proposed:
```
- "Give food-first advice and explain why the cause of the iron loss matters."
```

### Digestion & Absorption

#### digestion-absorption/C7 · wrong-source · replace-citation · confidence medium
*digestion-absorption.qmd, Oral rehydration and SGLT1* — @ourworldindataORT is a secondary source for the 1978 Lancet editorial quotation; consider citing the primary.

**Source:** OWID does not contain the book's quotation. It paraphrases the Lancet as calling ORT 'the most important medical advance of the 20th century', so the bib note saying OWID quotes it verbatim is inaccurate. Hamilton 2013 gives the exact wording and cites the unsigned editorial 'Water with sugar and salt', Lancet 1978;2(8084):300-1. OWID does support about 70 million lives saved by ORT since the late …  
_Read: OWID page https://ourworldindata.org/oral-rehydration-therapy (full text via curl). PubMed record PMID 79090 (E-utilities efetch and esummary). Crossref record for DOI 10.1016/S0140-6736(78)91698-7. H …_

Current:
```
*Lancet* editorial, "potentially the most important medical advance this century"
[@ourworldindataORT].
```
Proposed:
```
*Lancet* editorial, "potentially the most important medical advance this century"
[@lancet1978water], and oral rehydration has since saved tens of millions of lives [@ourworldindataORT].
```
New citation:
```bibtex
@article{lancet1978water,
  author  = {{The Lancet}},
  title   = {Water with sugar and salt},
  journal = {The Lancet},
  year    = {1978},
  volume  = {312},
  number  = {8084},
  pages   = {300--301},
  pmid    = {79090},
  doi     = {10.1016/S0140-6736(78)91698-7},
  note    = {Unsigned editorial (vol. 2 in original numbering). Quotation wording confirmed via Hamilton 2013, Front Physiol, PMC3605518}
}
```

#### digestion-absorption/C8 · partly-supported · reword · confidence medium · **verifier corrected**
*book/cases/ort-drip-free-rescue.case.yml end-good.body* — 'This simple physiology has saved millions of children's lives.' is uncited and not stated in the chapter.

**Source:** OWID estimates ORT has saved around 70 million lives since its introduction in the late 1970s, and says child deaths from diarrhoeal disease have fallen by two-thirds since 1990. The figure is given for all lives, not children specifically. Other case files use inline @keys in their bodies.  
_Read: OWID page https://ourworldindata.org/oral-rehydration-therapy (full text via curl)._

**Verifier:** The add-citation fix would render the raw text '[@ourworldindataORT]' to students. Case YAML is copied as a raw Quarto resource (_quarto.yml 'resources: cases/**'), and CasePlayer renders the body through components/src/lib/md.js, which only does escaping, bold, italic, code and paragraphs, with no citeproc. The single 'precedent' (early-t2d-remission.case.yml, [@lean2018direct]) has the same latent display bug, not a working convention; 'other case files use inline @keys' overstates it (only on …

Current:
```
This simple physiology has saved millions of children's lives.
```
Proposed:
```
Oral rehydration built on this physiology is estimated to have saved tens of millions of lives.
```

### Integrative Metabolism

#### integrative-metabolism/C1 · unsupported · reword · confidence high · **verifier corrected**
*integrative-metabolism.qmd #sec-broken, 'Recognising hypoglycaemia' paragraph (case q-first needs no change)* — Sweating and hunger are mainly sympathetic cholinergic, not adrenaline-driven; the chapter attributes the whole autonomic group to adrenaline.

**Source:** Towler 1993 used adrenergic and pan-autonomic blockade during clamped hypoglycaemia: shaky, heart pounding and anxious were adrenergic; sweaty, hungry and tingling were cholinergic (muscarinic). The case text only says 'autonomic warning signs', which is correct, so no case edit.  
_Read: PubMed abstract PMID 8243825 (Towler et al., Diabetes 1993) via NCBI E-utilities efetch_

**Verifier:** The verdict, the new citation and the adrenergic/cholinergic split are all right. I confirmed PMID 8243825 on PubMed: Towler DA, Havlin CE, Craft S, Cryer P, Diabetes 1993;42(12):1791-8, doi 10.2337/diab.42.12.1791. The abstract classes shaky, heart pounding and nervous as adrenergic, and sweaty, hungry and tingling as cholinergic (muscarinic). The problem is that newText says all of these come 'from the sympathetic nervous system'. Towler calls them neurogenic (autonomic) and says only that the …

Current:
```
Autonomic (adrenergic) warning symptoms come first: tremor, sweating,
palpitations and hunger. They are driven by adrenaline and appear at a higher glucose level, as an
early alarm.
```
Proposed:
```
Autonomic (neurogenic) warning symptoms come first: tremor, sweating,
palpitations and hunger. They come from the autonomic nervous system, partly through adrenaline and
noradrenaline (tremor, palpitations) and partly through acetylcholine-releasing (cholinergic) nerves
(sweating, hunger), and appear at a higher glucose level, as an early alarm [@towler1993awareness].
```
New citation:
```bibtex
@article{towler1993awareness,
  author  = {Towler, D. A. and Havlin, C. E. and Craft, S. and Cryer, P.},
  title   = {Mechanism of awareness of hypoglycemia: perception of neurogenic (predominantly cholinergic) rather than neuroglycopenic symptoms},
  journal = {Diabetes},
  year    = {1993},
  volume  = {42},
  number  = {12},
  pages   = {1791--1798},
  pmid    = {8243825},
  doi     = {10.2337/diab.42.12.1791}
}
```

#### integrative-metabolism/C5 · wrong-source · replace-citation · confidence high · **verifier corrected**
*integrative-metabolism.qmd #sec-singapore, 'Diabetes as a national priority'* — 'Roughly one resident in twelve lives with diabetes' needs checking against the 2016 MOH page.

**Source:** The cited page confirms the War on Diabetes began in April 2016. It gives no rate, only 'over 400,000 Singaporeans', and no breakdown by community. The 2023 MOH release gives diabetes prevalence of 8.5% (about 1 in 12) in residents aged 18-74, 2021-2022. It also has no ethnic breakdown, so 'more in some communities' is uncited.  
_Read: moh.gov.sg/newsroom/diabetes-the-war-continues/ (full page, 22 Aug 2017 release); moh.gov.sg/newsroom/national-health-surveys-highlight-need-to-focus-on-healthy-diets-and-lifestyles/ (full page, 27 Se …_

**Verifier:** The verdict and the split citation are right. On the cited page, 'Diabetes: The War Continues' (22 Aug 2017), I found 'In April 2016, MOH declared War on Diabetes', 'over 400,000', a one-in-three lifetime risk, and no rate or community breakdown. The 27 Sep 2023 MOH release gives 8.5% in 2021-2022 for residents aged 18-74. That figure comes from the National Population Health Survey 2022, not the National Nutrition Survey, which is the title of bib key mohNNS2022 (the release covers both surveys …

Current:
```
Singapore declared its War on Diabetes in 2016; roughly one
resident in twelve lives with diabetes, and more in some communities [@mohWarOnDiabetes].
```
Proposed:
```
Singapore declared its War on Diabetes in 2016 [@mohWarOnDiabetes]; in
the 2021–2022 National Population Health Survey, roughly one resident in twelve aged 18 to 74 had
diabetes [@mohNNS2022].
```

#### integrative-metabolism/C6 · partly-supported · reword · confidence medium · **verifier corrected**
*metabolic-switch.yml, prolonged state, kidney detail* — 'up to roughly 40-50% of glucose production in a prolonged fast' is uncited and not in the chapter prose.

**Source:** Owen 1969 studied 11 obese subjects (sites of gluconeogenesis measured in 5). After 5-6 weeks of starvation, glucose production fell to about 86 g/day, with the liver giving about half and the kidney the rest. So 'about half' is supported, but only at 5-6 weeks, not as a general 'prolonged fast' upper bound. Diagram YAML holds no citations; the entry is offered for the chapter's gluconeogenesis li …  
_Read: PubMed abstract PMID 5773093 (Owen et al., J Clin Invest 1969) via E-utilities_

**Verifier:** The source is correct. PMID 5773093: Owen, Felig, Morgan, Wahren, Cahill Jr, J Clin Invest 1969;48(3):574-83, doi 10.1172/JCI106016. At 5-6 weeks, glucose production was about 86 g/24 h, with the liver about one-half and the kidney the remainder. But newText says 'in classic studies' when only this single study was read and confirmed. Make it singular. Also, the new bib entry would be unused unless it is cited somewhere: YAML holds no citations. Either cite it in the chapter's gluconeogenesis li …

Current:
```
Now a second gluconeogenic organ, supplying up to roughly 40–50% of glucose production in a prolonged fast.
```
Proposed:
```
Now a second gluconeogenic organ: in a classic study after five to six weeks of fasting, it supplied about half of the body's glucose production.
```
New citation:
```bibtex
@article{owen1969liverkidney,
  author  = {Owen, O. E. and Felig, P. and Morgan, A. P. and Wahren, J. and Cahill Jr., G. F.},
  title   = {Liver and kidney metabolism during prolonged starvation},
  journal = {Journal of Clinical Investigation},
  year    = {1969},
  volume  = {48},
  number  = {3},
  pages   = {574--583},
  pmid    = {5773093},
  doi     = {10.1172/JCI106016}
}
```

### Appetite & Weight Regulation

#### appetite-weight-regulation/C3 · unsupported · reword · confidence high · **verifier corrected**
*chapter #sec-hedonic, food-cues paragraph* — @fazzino2019hyperpalatable defines hyperpalatable foods and estimates how common they are; it does not show ultra-processed foods are 'engineered ... at maximally rewarding levels'

**Source:** Develops a numeric definition of hyper-palatable foods from three nutrient-pairing clusters (fat+sodium, fat+simple sugars, carbohydrate+sodium above thresholds) and finds 62% of foods in the US FNDDS met it. Nothing on engineering intent, ultra-processing or 'maximally rewarding' levels.  
_Read: PubMed abstract PMID 31689013 via E-utilities efetch_

**Verifier:** The verdict is right: Fazzino 2019 (PMID 31689013, abstract read) gives a numeric definition of hyper-palatable foods with three clusters and finds 62% (4,795/7,757) of FNDDS foods met it. It says nothing about engineering or ultra-processing. The proposed newText still says 'Many are hyper-palatable', where the subject is ultra-processed foods. Fazzino does not classify foods by processing, and the 62% is of all foods in the database (it includes reduced-fat items and vegetables cooked in sauce …

Current:
```
Modern ones are engineered to combine sugar, fat and salt at maximally rewarding levels
[@fazzino2019hyperpalatable].
```
Proposed:
```
One way to measure this is **hyper-palatability**: pairing fat with sugar or salt, or carbohydrate
with salt, above set thresholds. By one such definition, 62% of foods in a US food database qualified
[@fazzino2019hyperpalatable].
```

#### appetite-weight-regulation/C4 · partly-supported · add-hedge · confidence high · **verifier corrected**
*chapter #sec-hedonic, Hall trial* — Trial limits that Digestion & Absorption gives (n = 20, two weeks per diet, metabolic ward) are not echoed (§11d); 'the clearest evidence' superlative to check

**Source:** 20 weight-stable adults, NIH Clinical Center inpatients, 2 weeks on each diet (crossover); diets matched for presented calories, energy density, macronutrients, sugar, sodium, fibre; intake 508 kcal/day higher on ultra-processed diet; +0.9 kg vs -0.9 kg. Small, short trial; the superlative is unhedged.  
_Read: PubMed abstract PMID 31105044 via E-utilities efetch; cross-checked against book/chapters/digestion-absorption.qmd callout_

**Verifier:** The verdict and the hedging are right. The facts check out: 20 weight-stable adults at the NIH Clinical Center Metabolic Clinical Research Unit, 2 weeks on each diet, diets matched for presented calories, energy density, macronutrients, sugar, sodium and fibre, and intake 508 kcal/day higher on the ultra-processed diet. The proposed closing clause 'why the diets differed is still debated' is inaccurate: the diets differed by design (degree of processing). What is unresolved is why people ate mor …

Current:
```
The clearest evidence that ultra-processed foods drive overeating comes from a tightly controlled
trial (see the *Digestion & Absorption* chapter). An ultra-processed diet and an unprocessed one were
matched for the calories presented, macronutrients, sugar, fat, salt and fibre, yet people still ate
about 500 kcal/day more on the ultra-processed diet [@hall2019upf].
```
Proposed:
```
The strongest controlled evidence that ultra-processed foods drive overeating comes from a small
inpatient trial (see the *Digestion & Absorption* chapter). Twenty adults on a metabolic ward ate an
ultra-processed diet and an unprocessed one for two weeks each. The diets were matched for the calories
presented, energy density, macronutrients, sugar, salt and fibre, yet people still ate about
500 kcal/day more on the ultra-processed diet [@hall2019upf]. The trial was small and short, and why
people ate more on the ultra-processed diet is still unclear.
```

#### appetite-weight-regulation/C10 · partly-supported · reword · confidence medium · **verifier corrected**
*chapter #sec-satiety, satiety-lever table* — 'Why it works' mechanisms (protein raises GLP-1/PYY; viscous fibre feeds the ileal brake; fast eating outruns fullness signals) are uncited

**Source:** High protein gave the greatest PYY release and most satiety (Batterham); ghrelin suppression acute (Foster-Schubert), yet chronic high-protein diet raised ghrelin AUC (Weigle). No GLP-1 data found. Gel fibre raised fullness with similar gastric emptying (Hoad); alginate slowed a gastric-emptying marker (Georg Jensen). Slower eating lowers intake (Robinson); mechanism not tested. Ileal-brake claim  …  
_Read: PubMed abstracts via E-utilities: PMID 16950139 (Batterham 2006), 18198223 (Foster-Schubert 2008), 15333719 (Hoad 2004), 21779093 (Georg Jensen 2012), 24847856 (Robinson 2014), 16002798 (Weigle 2005)_

**Verifier:** This is a hard disagree on one new bib entry. Three author first names in hoad2004gelation are fabricated: it gives 'Rayment, Paul', 'Alonso, Bernardo de Celis' and 'Traynor, Carole', where PubMed and Crossref both give Phillippa Rayment, Benito de Celis Alonso and Catherine Traynor. Second, the viscous-fibre row cites Hoad 2004 for 'can slow stomach emptying', but Hoad found 'gastric emptying was similar for all 4 meals'; its finding is greater fullness at the same gastric volume. Only Georg Je …

Current:
```
| Protein | Most satiating macronutrient; suppresses ghrelin, raises GLP-1/PYY | Build meals around a protein source |
| Energy density | People eat a fairly constant volume; water and fibre in the food lower calories per bite | Bulk meals with vegetables |
| Viscous fibre | Gels, slows stomach emptying, feeds the ileal brake | Oats, legumes, wholegrains |
| Solid over liquid | Liquid calories give weak fullness and little compensation | Eat fruit, don't drink it |
| Eating rate | Fullness signals lag; fast eating "outruns" them | Slow down |
```
Proposed:
```
| Protein | Most satiating macronutrient; strongly raises PYY and acutely suppresses ghrelin [@batterham2006pyyprotein; @fosterschubert2008ghrelin] | Build meals around a protein source |
| Energy density | People eat a fairly constant volume; water and fibre in the food lower calories per bite | Bulk meals with vegetables |
| Viscous fibre | Thickens or gels in the stomach, so the same volume feels fuller [@hoad2004gelation]; may slow stomach emptying [@georgjensen2012alginate] | Oats, legumes, wholegrains |
| Solid over liquid | Liquid calories give weak fullness and little compensation | Eat fruit, don't drink it |
| Eating rate | Slower eating lowers intake, probably because fullness signals lag behind the meal [@robinson2014eatingrate] | Slow down |
```
New citation:
```bibtex
@article{hoad2004gelation,
  author  = {Hoad, Caroline L. and Rayment, Phillippa and Spiller, Robin C. and Marciani, Luca and Alonso, Benito de Celis and Traynor, Catherine and Mela, David J. and Peters, Harry P. F. and Gowland, Penny A.},
  title   = {In vivo imaging of intragastric gelation and its effect on satiety in humans},
  journal = {Journal of Nutrition},
  year    = {2004},
  volume  = {134},
  number  = {9},
  pages   = {2293--2300},
  pmid    = {15333719},
  doi     = {10.1093/jn/134.9.2293}
}
(batterham2006pyyprotein and georgjensen2012alginate as proposed; fosterschubert2008ghrelin as under C7)
```

#### appetite-weight-regulation/C11 · partly-supported · reword · confidence medium · **verifier corrected**
*chapter #sec-leptin, congenital deficiency paragraph* — 'leptin injections rescue them completely' may overstate @farooqi1999leptintherapy case reports

**Source:** 1999 NEJM is a single-child report. Montague 1997 describes two deficient children, no treatment. Farooqi 2002: three children given daily leptin for up to 4 years; test-meal intake fell 45-84%; over 98% of weight lost was fat; benefits sustained; relapses needed dose increases. Supports a transformative, not 'complete', rescue.  
_Read: PubMed records via E-utilities: PMID 10486419 (Farooqi 1999, no abstract available; NEJM full text paywalled, 403), PMID 9202122 (Montague 1997 abstract), PMID 12393845 (Farooqi 2002 abstract) plus JC …_

**Verifier:** The verdict and wording are right. JCI full text: three children, test-meal intake down 45-84%, more than 98% of weight lost was fat, sustained up to 4 years, refractory periods overcome by dose increases. Farooqi 2002 metadata matches PubMed (JCI 110(8):1093-103, doi 10.1172/JCI15693, PMID 12393845). The edit itself is broken, though. oldText starts at 'and leptin injections', so the preceding text 'relentless hunger,' stays, and the result reads 'relentless hunger,\n[@montague1997congenital].  …

Current:
```
and leptin injections rescue them completely, melting away the appetite and the fat
[@montague1997congenital; @farooqi1999leptintherapy].
```
Proposed:
```
OLD (exact, lines 109-111): "with relentless hunger,\nand leptin injections rescue them completely, melting away the appetite and the fat\n[@montague1997congenital; @farooqi1999leptintherapy]."  NEW: "with relentless hunger\n[@montague1997congenital]. In the first children treated, daily leptin injections transformed this:\nappetite fell sharply and they lost weight that was almost entirely fat, with the benefit sustained for\nyears [@farooqi1999leptintherapy; @farooqi2002leptin]."
```
New citation:
```bibtex
@article{farooqi2002leptin,
  author  = {Farooqi, I. Sadaf and Matarese, Giuseppe and Lord, Graham M. and Keogh, Julia M. and Lawrence, Elizabeth and Agwu, Chizo and Sanna, Veronica and Jebb, Susan A. and Perna, Francesco and Fontana, Silvia and Lechler, Robert I. and DePaoli, Alex M. and O'Rahilly, Stephen},
  title   = {Beneficial effects of leptin on obesity, T cell hyporesponsiveness, and neuroendocrine/metabolic dysfunction of human congenital leptin deficiency},
  journal = {Journal of Clinical Investigation},
  year    = {2002},
  volume  = {110},
  number  = {8},
  pages   = {1093--1103},
  pmid    = {12393845},
  doi     = {10.1172/JCI15693}
}
```

### Infancy & Early Childhood

#### infancy-early-childhood/C4b · partly-supported · add-hedge · confidence medium
*book/quizzes/infancy-early-childhood.quiz.yml, q6 option 1 feedback* — 'immature gut lacks the protective flora that stops the spores colonising' is stated as fact and is uncited in the chapter.

**Source:** The review infers that the microbiome protects against colonisation, mainly from germ-free and antibiotic-treated mouse studies, and notes the infant microbiome has low diversity. The mechanism is described as incompletely understood, so 'lacks the microbes that stop them' is too definite.  
_Read: PMC11322261 full text (Harris & Dabritz 2024)_

Current:
```
can colonise the immature infant gut, which lacks the protective gut microbes that stop them, and produce toxin (infant botulism).
```
Proposed:
```
can colonise the immature infant gut, whose still-developing microbiome is thought to offer little protection against them, and produce toxin (infant botulism).
```

#### infancy-early-childhood/C4c · partly-supported · add-hedge · confidence medium
*book/cases/infancy-feeding.case.yml, q-honey option a feedback* — Same unhedged gut-microbe mechanism claim.

**Source:** The protective role of the microbiome is inferred, mainly from animal studies; the infant microbiome has low diversity; the mechanism is incompletely understood.  
_Read: PMC11322261 full text (Harris & Dabritz 2024)_

Current:
```
the immature gut lacks the protective gut microbes that would stop them colonising and making toxin.
```
Proposed:
```
the immature gut, with its still-developing microbiome, is thought to offer little protection against them colonising and making toxin.
```

### Childhood & Adolescence

#### childhood-adolescence/C1 · supported · reword · confidence medium
*Chapter close (#sec-close); also bone-window.yml note and quiz q8 feedback* — Peak-bone-mass timing differs across chapters: 'window closes by the early twenties' here vs 'set by the late twenties' (Bone & Joint) vs 'around age 30' (Micronutrients).

**Source:** Baxter-Jones: total-body BMC plateaus 6 y after PHV (about 18 in girls, 20 in boys); peak reached end of second or early third decade by site. Weaver: fusion by end of second decade; hip peak 16-19 y, spine 33-40 y; cortical density keeps rising into third decade.  
_Read: Europe PMC abstract of PMID 21520276 (Baxter-Jones 2011); PMC4791473 full text of Weaver 2016 (first 100k chars)_

Current:
```
and bone accrual needs enough weight-bearing activity and calcium before its window largely closes by
the early twenties.
```
Proposed:
```
and bone accrual needs enough weight-bearing activity and calcium before its window largely closes by
the early twenties (some sites keep adding a little bone into the third decade, which is why other
chapters date the peak itself later).
```

#### childhood-adolescence/C2 · partly-supported · reword · confidence high · **verifier corrected**
*Growth spurt, energy/protein paragraph* — The explanation 'because the body grows faster than its per-kilogram demand' is muddled.

**Source:** Table 4.2 (boys): 345 kJ/kg/d at 1-2 y falling to 210 at 17-18 y. BMR per kg falls too (calculated from the table, about 238 to 115 kJ/kg/d). Ch.3: growth's share falls to 1-2% until mid-adolescence. The report gives no explicit cause. Bib URL points to Ch.4; the 1-2% figure is on Ch.3 page.  
_Read: https://www.fao.org/4/y5686e/y5686e06.htm (Ch.4 text + Table 4.2) and y5686e05.htm (Ch.3), full text_

**Verifier:** The current causal clause is muddled, and a reword is right. The proposed second reason is wrong for the span the sentence covers. FAO Ch.3 §3.3 says growth's share drops steeply in infancy (35% to 3% by 12 months), falls below 2% in year two, then stays between 1 and 2% until mid-adolescence. So across childhood growth does not take 'an ever smaller share', and at 1-2% it cannot account for the roughly 40% per-kg fall (345 to 210 kJ/kg/d, Table 4.2 boys). The added clause also blurs the very ne …

Current:
```
energy needs fall through childhood, because the body grows faster than its per-kilogram demand
[@faowhounu_2004_energy_children].
```
Proposed:
```
energy needs fall through childhood, mainly because a bigger body burns less energy per kilogram at rest
[@faowhounu_2004_energy_children].
```

#### childhood-adolescence/C9 · partly-supported · reword · confidence medium · **verifier corrected**
*components/src/BoneWindow.svelte lines 136-139 (age-based why lines); FALLBACK object lines 19-45* — Hard-coded lines use 'you' and em dashes; FALLBACK keeps the deleted intro 'Most of the bone you carry as an adult is banked in the few years around the pubertal growth spurt'.

**Source:** About 39% of total-body bone comes in the circumpubertal years, not 'most', so the FALLBACK intro is wrong (it shows only if the YAML fails to load). 'What you banked... is what you carry' overstates: sites keep changing into the third decade and bone is lost later. FALLBACK should be synced to bone-window.yml or the intro dropped (separate edit).  
_Read: Europe PMC abstract PMID 21520276; PMC4791473 full text (partial)_

**Verifier:** The why-line rewrite is accurate, drops the em dashes, and removes the misplaced 'you' (AUTHOR §11g: 'you' is reserved for the clinician). It is incomplete, though. The concern also names the FALLBACK intro (line 23), and the proposal defers that. The intro is factually wrong: about 39% of total-body bone comes in the circumpubertal years, not 'most'. bone-window.yml has no intro, so this text renders only if the YAML fails to load, but it is still shipped content, and fixing it is a one-line ed …

Current:
```
if (age >= 20) return 'The window has essentially closed — the bank is now defended, not filled. What you banked by the early twenties is what you carry.';
    if (age >= (data.windowFrom || 11) && age <= (data.windowTo || 16)) return 'You are inside the window: accrual is at its steepest. This is where activity and calcium buy the most bone.';
    if (activeLever) return activeLever.why;
    return 'Before puberty the bank fills slowly. The steep climb — and the biggest opportunity — is still ahead.';
```
Proposed:
```
Edit 1 (lines 136-139): as proposed, but with the first line reading: if (age >= 20) return 'The window has essentially closed: from here bone is mostly defended, not built, and the bone banked by the early twenties is the starting point for later loss.'; Edit 2 (FALLBACK intro, line 23): replace 'Most of the bone you carry as an adult is banked in the few years around the pubertal growth spurt. Scrub the age, then toggle the levers — watch the bank fill, then plateau for life.' with 'Roughly two-fifths of adult bone mineral is laid down in the few years around the pubertal growth spurt. Scrub the age, then toggle the levers: watch the bank fill, then plateau.'
```

### Adulthood & Working Life

#### adulthood-working-life/C2 · partly-supported · reword · confidence medium
*book/cases/rahmat-shift-runner.case.yml, node q-fuel, option a text and feedback* — 'A ~1-hour recreational run' vs persona running 10-15 km (about 1-1.5 h); Thomas 2016 gives during-exercise carbohydrate for 1-2.5 h endurance exercise, so 'sports drinks are for much longer events' is overstated.

**Source:** Table: carbohydrate loading (36-48 h of 10-12 g/kg/24 h) is for events over 90 min; during 45-75 min sustained high-intensity exercise, small amounts or mouth rinse; during endurance exercise of 1-2.5 h, 30-60 g/h. So a 1-1.5 h run falls inside the during-exercise carbohydrate band, not well below it.  
_Read: PubMed abstract PMID 26920240 (efetch) plus full text of the Dietitians of Canada copy of the position paper (dietitians.ca noap-position-paper.pdf), carbohydrate guidelines table p.15_

Current:
```
text: "\"Normal meals and water cover that distance; carb-loading and sports drinks are for much longer events.\""
        correct: true
        feedback: "A ~1-hour recreational run is covered by ordinary food and water; the athlete guidance is calibrated for hours of endurance training."
```
Proposed:
```
text: "\"Normal meals and water cover that distance; carb-loading and sports drinks are for longer, harder events.\""
        correct: true
        feedback: "A 1- to 1.5-hour recreational run is covered by ordinary food and water; carb-loading is athlete guidance for events over about 90 minutes, and carbohydrate during exercise is a performance strategy for training or racing athletes."
```

### Pregnancy & Lactation

#### pregnancy-lactation/C2 · internal-contradiction · reword · confidence high · **verifier corrected**
*pregnancy-lactation.qmd, lactation definition list vs the vegan-mother paragraph* — Vitamin D is listed as diet-dependent in milk, but the next paragraph says milk is low in vitamin D 'whatever the mother eats'. The dangling Infancy pointer to a 'mother's high-dose alternative' was also flagged.

**Source:** Hollis: maternal 6400 IU/day vitamin D3 alone gave breastfed infants 25(OH)D equal to direct 400 IU infant drops. Milk vitamin D therefore depends on maternal intake, but stays low at usual intakes. The Infancy chapter no longer has the 'high-dose alternative' pointer, so that part is resolved.  
_Read: Hollis et al. 2015 Pediatrics RCT abstract via Europe PMC REST (PMID 26416936; title/authors/DOI also confirmed on PubMed search page). Grep of infancy-early-childhood.qmd. Did not reach the DGAC 2020 …_

**Verifier:** The verdict and the citation are right. Hollis 2015 is confirmed in Europe PMC (PMID 26416936): authors, Pediatrics 136(4):625-634 and DOI 10.1542/peds.2015-1669 all match. The trial found that maternal 6400 IU/day alone gave infant 25(OH)D no different from direct 400 IU drops, and the 2400 IU arm was stopped for infant deficiency. The problem is the wording. The passage being edited already sits inside a parenthesis that opens '(Milk is' and closes after 'chapter.)', so the proposed '(around 6 …

Current:
```
naturally low in vitamin D whatever the mother eats, which is why the infant is supplemented; the
```
Proposed:
```
low in vitamin D at usual maternal intakes, since only a very high maternal dose, around 6,400 IU a day, raises it enough [@hollis2015vitD]; this is why the infant is supplemented directly, and the
```
New citation:
```bibtex
@article{hollis2015vitD,
  author  = {Hollis, B. W. and Wagner, C. L. and Howard, C. R. and Ebeling, M. and Shary, J. R. and Smith, P. G. and Taylor, S. N. and Morella, K. and Lawrence, R. A. and Hulsey, T. C.},
  title   = {Maternal versus infant vitamin {D} supplementation during lactation: a randomized controlled trial},
  journal = {Pediatrics},
  year    = {2015}, volume = {136}, number = {4}, pages = {625--634},
  doi     = {10.1542/peds.2015-1669},
  pmid    = {26416936},
  note    = {Maternal 6400 IU/day alone matched infant 400 IU/day for infant 25(OH)D; milk vitamin D is maternal-intake dependent but low at usual intakes.}
}
```

#### pregnancy-lactation/C3 · partly-supported · reword · confidence high · **verifier corrected**
*pregnancy-lactation.qmd, micronutrient list (calcium bullet)* — Bone & Joint Health cites HPB for a raised calcium need in pregnancy and lactation, while this chapter says the requirement barely rises (Kovacs). Both are cited.

**Source:** Kovacs: adaptations meet foetal and neonatal demand without the mother eating more. Absorption doubles in pregnancy, while in lactation the maternal skeleton is resorbed. HealthHub: calcium 800 mg for adults 19-50, 1,000 mg for pregnant or breastfeeding women. Both are true: the physiology barely changes, but the SG allowance rises.  
_Read: Kovacs 2016 Physiol Rev abstract via Europe PMC (PMID 26887676). HealthHub RDA page (healthhub.sg/live-healthy/recommended_dietary_allowances), calcium table._

**Verifier:** The facts are right. Kovacs 2016 says absorption doubles in pregnancy and the skeleton is resorbed in lactation. HealthHub lists 800 mg for adults 19-50 and 1,000 mg for 'Breastfeeding / pregnant'. Two parts of the proposed wording go beyond the sources. (1) The closing 'not a special supplement' is a new claim that neither cited source makes. It is also contestable, since some guidance does recommend calcium supplements in pregnancy for populations with low intake. Drop it. (2) 'from 800 to 1,0 …

Current:
```
- Calcium needs barely rise, because intestinal calcium absorption roughly doubles in pregnancy
  [@kovacs2016mineral]. An adequate baseline intake is enough.
```
Proposed:
```
- Calcium needs barely rise, because intestinal calcium absorption roughly doubles in pregnancy,
  meeting the foetal demand without the mother having to eat much more [@kovacs2016mineral].
  Singapore's allowance still rises modestly, from 800 to 1,000 mg/day for adult women who are
  pregnant or breastfeeding [@hpbRDACalcium], so the target is simply an adequate intake.
```

#### pregnancy-lactation/S4 · partly-supported · reword · confidence high · **verifier corrected**
*requirement-dial.yml, Calcium 'why' (follows C3)* — The dial says there is 'no special allowance', which contradicts the SG RDA rise. It also credits lactation to absorption, but in lactation the calcium comes from the skeleton.

**Source:** Kovacs: absorption doubles in pregnancy, and the maternal skeleton is resorbed to supply milk in lactation. HealthHub: 1,000 mg pregnant or breastfeeding vs 800 mg for adults 19-50.  
_Read: Kovacs 2016 abstract (Europe PMC). HealthHub RDA page._

**Verifier:** The fix is incomplete. The Calcium dial entry is 'kind: flat' with values [100, 100, 100, 100, 100], so a 'why' saying the allowance rises from 800 to 1,000 mg (+25%) contradicts the bar the reader sees. Either change the values, which would undo the chapter's teaching point that calcium is the nutrient that does not rise, or say plainly that the dial shows the physiological need and the allowance is a separate number. The corrected text does the second. The lactation mechanism (skeletal resorpt …

Current:
```
why: "The requirement barely rises, because intestinal calcium absorption roughly doubles. A good baseline intake is enough, with no special allowance."
```
Proposed:
```
why: "Physiologically the need barely rises: in pregnancy intestinal calcium absorption roughly doubles, and in lactation the mother's skeleton releases calcium for the milk, so the dial stays flat. Singapore's allowance still rises modestly, from 800 to 1,000 mg a day for adult women."
```

#### pregnancy-lactation/S5 · partly-supported · reword · confidence medium · **verifier corrected**
*pregnancy-lactation.quiz.yml, q4 correct-option feedback (follows C3)* — The feedback says 'the recommended intake barely changes', but the SG allowance rises from 800 to 1,000 mg.

**Source:** The physiology meets demand without much extra intake, but the HealthHub RDA is 1,000 vs 800 mg/day.  
_Read: Kovacs 2016 abstract (Europe PMC). HealthHub RDA page._

**Verifier:** The fix for the correct option's feedback is accurate, but it is incomplete. The third option's feedback (quiz line 54) ends 'which is why the intake recommendation barely changes.', which is the same statement S5 is correcting. Replace it with 'which is why the mother needs little extra intake.' The stem ('Why does the calcium requirement barely rise...') can stay if 'requirement' is read as physiological need.

Current:
```
feedback: "Intestinal calcium absorption roughly doubles in pregnancy, so the recommended intake barely changes and an adequate baseline is enough."
```
Proposed:
```
feedback: "Intestinal calcium absorption roughly doubles in pregnancy, so the mother meets the foetal demand without eating much more; Singapore's allowance rises only modestly, from 800 to 1,000 mg a day."  [Companion edit, line 54: old 'which is why the intake recommendation barely changes.' -> new 'which is why the mother needs little extra intake.']
```

#### pregnancy-lactation/C4 · partly-supported · reword · confidence high · **verifier corrected**
*pregnancy-lactation.qmd, chapter close (Does a pregnant woman eat for two?)* — The net lactation need (450-500 kcal/day) is about the same as the third-trimester increment (+450). The close and the energy section imply lactation is the stage that asks for real extra energy, which holds only for the gross cost.

**Source:** FAO: milk production costs 2.8 MJ (675 kcal)/day, minus 170 kcal from fat stores = net 2.1 MJ (505 kcal)/day for well-nourished women. Pregnancy: about 475 kcal/day extra in the third trimester. The net lactation need is only slightly above late pregnancy.  
_Read: FAO/WHO/UNU 2004 Human Energy Requirements, full-text chapters on fao.org (y5686e0a pregnancy, y5686e0b lactation)._

**Verifier:** The figures are right. FAO 2004 gives 2.8 MJ (675 kcal) gross for milk production, 0.72 MJ (170 kcal) from fat stores, and 2.1 MJ (505 kcal) net for well-nourished women. FAO's third-trimester figure is 475 kcal (the chapter's IOM figure is 450). The fix is incomplete: quiz q1's correct-option feedback (pregnancy-lactation.quiz.yml line 9) repeats the claim being softened: "'Eating for two' only nearly fits breastfeeding, which needs roughly 450–500 kcal/day net extra and draws partly on pregnan …

Current:
```
matters is the quality of her diet, not its quantity. Lactation comes nearest: making milk costs
about 670 kcal a day, though fat laid down in pregnancy covers part of it.
```
Proposed:
```
matters is the quality of her diet, not its quantity. Lactation asks only a little more: making milk
costs about 675 kcal a day, but fat laid down in pregnancy covers about 170 kcal of it, leaving a net
extra of about 500 kcal, close to the third-trimester figure.
```

#### pregnancy-lactation/C5 · unsupported · add-citation · confidence medium · **verifier corrected**
*pregnancy-lactation.qmd, eating-out/healthy-kitchen callout (caffeine cap; alcohol in pregnancy)* — The caffeine 'daily cap' is neither stated nor cited, and alcohol in pregnancy is not addressed. The lactation caffeine and alcohol bullets are handled in S9/S10.

**Source:** EFSA: caffeine up to 200 mg/day from all sources raises no safety concern for the foetus. Chen: each +100 mg/day linked to 7% higher pregnancy-loss risk, inconclusive. CDC: no known safe amount of alcohol in pregnancy.  
_Read: EFSA caffeine topic page (efsa.europa.eu/en/topics/topic/caffeine), which states the 200 mg limit and links the 2015 opinion. Crossref metadata for DOI 10.2903/j.efsa.2015.4102 (title, NDA Panel, EFSA …_

**Verifier:** The citations check out. EFSA 2015 is confirmed via Crossref: 'Scientific Opinion on the safety of caffeine', EFSA NDA Panel, EFSA Journal 13(5), 2015, DOI 10.2903/j.efsa.2015.4102. The EFSA topic page states 200 mg/day for pregnant women 'do[es] not raise safety concerns for the foetus'. The CDC page says 'There is no known safe amount of alcohol use during pregnancy' (last reviewed 14 Aug 2026). Chen 2016 (PMID 26329421) gives +7% risk per 100 mg/day and calls the evidence inconclusive. The ne …

Current:
```
the everyday drinks in view for caffeine: kopi, teh, Milo and bubble tea all count toward the daily
cap.
```
Proposed:
```
the everyday drinks in view for caffeine: kopi, teh, Milo and bubble tea all count toward a daily
cap of about 200 mg [@efsa2015caffeine], a pragmatic line, since pregnancy-loss risk appears to rise
steadily with intake [@chen2016caffeine]. Alcohol is best avoided altogether, because no safe amount
in pregnancy is known [@cdcAlcoholPregnancy].
```
New citation:
```bibtex
@article{efsa2015caffeine,
  author  = {{EFSA Panel on Dietetic Products, Nutrition and Allergies (NDA)}},
  title   = {Scientific Opinion on the safety of caffeine},
  journal = {EFSA Journal},
  year    = {2015}, volume = {13}, number = {5}, pages = {4102},
  doi     = {10.2903/j.efsa.2015.4102},
  note    = {Caffeine up to 200 mg/day from all sources in pregnancy raises no safety concern for the foetus.}
}
@misc{cdcAlcoholPregnancy,
  author       = {{Centers for Disease Control and Prevention}},
  title        = {About Alcohol Use During Pregnancy},
  year         = {2026},
  url          = {https://www.cdc.gov/alcohol-pregnancy/about/index.html},
  note         = {There is no known safe amount of alcohol use during pregnancy. Accessed 2026-10-22.}
}
```

#### pregnancy-lactation/S10 · partly-supported · add-citation · confidence medium · **verifier corrected**
*pregnancy-lactation.qmd, lactation practical points, alcohol bullet (follows C5)* — The lactation alcohol advice is uncited.

**Source:** LactMed: milk alcohol closely parallels blood alcohol, and after casual drinking mothers should wait 2-2.5 h per drink before nursing. Nursing or pumping before drinking may slightly reduce milk alcohol. The 'pump and dump' wording is implied, not stated outright in the summary.  
_Read: LactMed 'Alcohol' summary via Europe PMC REST (PMID 30000529), summary text._

**Verifier:** LactMed says to wait '2 to 2.5 hours per drink before nursing'. 'About 2 hours' rounds to the low end of that range, so state the source's range. The rest is supported: milk alcohol parallels blood alcohol, and nursing or pumping before drinking may slightly reduce milk alcohol. The citation record (PMID 30000529, LactMed 'Alcohol') is confirmed.

Current:
```
remove alcohol; the advice is to feed before a drink, or to wait.
```
Proposed:
```
remove alcohol; the advice is to feed before a drink, or to wait 2 to 2.5 hours per drink
  [@lactmedAlcohol].
```
New citation:
```bibtex
@misc{lactmedAlcohol,
  author       = {{National Institute of Child Health and Human Development}},
  title        = {Alcohol},
  howpublished = {Drugs and Lactation Database (LactMed), Bethesda (MD)},
  year         = {2006},
  note         = {Updated continuously. PMID: 30000529. Milk alcohol parallels blood alcohol; wait 2--2.5 h per drink before nursing.}
}
```

#### pregnancy-lactation/S14 · partly-supported · add-hedge · confidence medium
*requirement-dial.yml, Choline 'why' (follows S13)* — The dial states the choline brain benefit as settled.

**Source:** The benefit rests on a small RCT, and the shortfall comes from US NHANES data. The lactation rise was not checked in this pass and is left unchanged.  
_Read: Caudill 2018 and Wallace 2017 abstracts via Europe PMC._

Current:
```
why: "Most pregnant women fall short of it. It supports foetal brain development, and the need rises further in lactation."
```
Proposed:
```
why: "Most pregnant women in surveys fall short of it. Small trials suggest it supports foetal brain development, and the need rises further in lactation."
```

#### pregnancy-lactation/C7 · partly-supported · reword · confidence high · **verifier corrected**
*pregnancy-lactation.qmd, GDM first-line management paragraph* — The GUSTO 'seafood-and-noodle' pattern is a cross-sectional prevention association, but it is used to support dietary management of diagnosed GDM.

**Source:** GUSTO: cross-sectional; the seafood-noodle pattern was linked to lower odds of GDM (OR 0.74); it is not a treatment study. ACE: GDM raises pre-eclampsia, macrosomia and shoulder dystocia. Lifestyle comes first, drugs if it fails, and management cuts complications by up to 60%.  
_Read: de Seymour 2016 Nutrients abstract via Europe PMC (PMID 27657116). ACE GDM guide (Aug 2022), full-text PDF._

**Verifier:** The chapter wording is accurate. GUSTO (PMID 27657116) is cross-sectional, with OR 0.74 for the seafood-noodle pattern. ACE lists pre-eclampsia, macrosomia and shoulder dystocia as complications, says management 'with diet, exercise, or insulin therapy can lower the risk of maternal and neonatal complications by up to 60%', and says to 'Consider pharmacotherapy if lifestyle intervention does not consistently achieve glycaemic control'. The fix is incomplete: the case repeats the causal-sounding  …

Current:
```
First-line management of GDM is dietary, and it works best within a woman's usual food. A local
"seafood-and-noodle" pattern was protective [@gustoDietGDM], which supports familiar swaps over an
unfamiliar regimen:
```
Proposed:
```
First-line management of GDM is lifestyle, with diet at its centre, and medication is added only when
that does not control glucose; managed this way, GDM carries fewer complications such as
pre-eclampsia, macrosomia and shoulder dystocia [@aceGDM2018]. Diet works best within a woman's usual
food: in the local GUSTO cohort, women eating a "seafood-and-noodle" pattern were less likely to have
GDM [@gustoDietGDM], a sign that a healthy pattern can be built from familiar dishes. That supports
familiar swaps over an unfamiliar regimen:  [Companion edit, pregnancy-gdm.case.yml line 89: old 'A local seafood-and-noodle pattern was protective.' -> new 'In a local cohort, women eating a seafood-and-noodle pattern were less likely to have GDM.']
```

### Menopause & Midlife Health

#### menopause-midlife/C2b · partly-supported · reword · confidence medium
*case menopause-soy, q-efficacy option a text (part of C2)* — 'fine to try' implies soy is a reasonable flush treatment, which NAMS does not recommend.

**Source:** NAMS 2023 lists soy foods, soy extracts and equol as not recommended (Level II) for vasomotor symptoms.  
_Read: Europe PMC record for PMID 37252752 (abstract)_

Current:
```
text: "\"Soy is healthy and fine to try, but it helps flushes only a little, not like hormone therapy.\""
```
Proposed:
```
text: "\"Soy is healthy to eat, but it helps flushes only a little, not like hormone therapy.\""
```

#### menopause-midlife/C2c · partly-supported · reword · confidence medium
*case menopause-soy, q-efficacy option a feedback (part of C2)* — 'a safe food to try' frames soy as a flush trial, in tension with NAMS.

**Source:** NAMS does not recommend soy foods or extracts for vasomotor symptoms. The same feedback already says so, so the 'to try' framing contradicts the feedback's own sentence.  
_Read: Europe PMC record for PMID 37252752 (abstract)_

Current:
```
Offering soy as a safe food to try, not a guaranteed cure, keeps the answer accurate
```
Proposed:
```
Offering soy as a safe, healthy food, not a flush treatment, keeps the answer accurate
```

### Healthy Ageing

#### healthy-ageing/C1 · partly-supported · add-citation · confidence high · **verifier corrected**
*book/chapters/healthy-ageing.qmd, The Singapore picture, 'Micronutrient shortfalls' paragraph (lines ~285-286); quiz q3 option b feedback* — 'B12 deficiency is uncommon in well older adults locally, so testing is reserved for the at-risk' has no citation; the quiz repeats it.

**Source:** In 400 community-dwelling Singaporeans aged 65+ with normal nutritional status, more than 90% had normal B12 and 2% had low B12 (<132 pmol/L). Diabetes was excluded, and the authors say true local prevalence may be higher because metformin is linked to deficiency.  
_Read: PMC7693785 full text via NCBI BioC API (Cheong et al. 2020 Nutrients 12:3329, SHIELD); also a WebSearch that found no other Singapore B12 prevalence figure_

**Verifier:** The verdict and figure are right. SHIELD (Cheong 2020, PMC7693785) reports 7/400 (2%) with B12 <132 pmol/L in community-dwelling adults aged 65+ who were screened MUST 0. Type 1 and type 2 diabetes and dementia were excluded, and the authors say true local prevalence is likely higher. The oldText matches lines 285-286 exactly. The problem is where the citation sits. Placed at the end of the sentence, [@cheong2020shield] appears to support 'so testing is reserved for the at-risk', and SHIELD says …

Current:
```
B12 deficiency, by contrast, is uncommon in well older adults locally, so
testing is reserved for the at-risk.
```
Proposed:
```
B12 deficiency, by contrast, is uncommon in well older adults locally (about 2% had low B12 in a
community sample that excluded diabetes) [@cheong2020shield], so testing is reserved for the at-risk.
```

#### healthy-ageing/C5 · partly-supported · reword · confidence medium · **verifier corrected**
*book/chapters/healthy-ageing.qmd, watch-list B12 para (lines ~85-88); also Check-yourself answer line ~119 ('With age the stomach often makes less acid')* — 'often' was added for internal consistency; confirm how the source frames the frequency of hypochlorhydria and atrophic gastritis with age.

**Source:** Andres: about 15% of people over 60 are B12-deficient, mainly through food-cobalamin malabsorption. The abstract gives no figure for atrophic gastritis. Porter: in 3299 community-dwelling adults aged 60+, 15% had atrophic gastritis, and gastric acid suppression impairs absorption of food B12. 'Often' overstates 15%, and 'not a lack in the diet' is stronger than 'mainly'.  
_Read: PubMed abstracts PMID 16194648 (Andres 2005) and PMID 34134144 (Porter 2021) via NCBI E-utilities efetch_

**Verifier:** The reword of lines 85-86 is accurate and the oldText matches. Andres 2005 (PMID 16194648) says about 15% of people over 60 are B12-deficient, 'mainly' through food-cobalamin malabsorption, which supports adding 'mainly'. Porter 2021 (PMID 34134144) found atrophic gastritis in 15% of community-dwelling adults aged 60+, which supports 'some' over 'often'. However, the proposal is incomplete. The location it names includes the Check-yourself answer, which still says 'With age the stomach often mak …

Current:
```
Vitamin B12 deficiency in older adults comes from malabsorption, not a lack of B12 in the diet: with age
the stomach often makes less acid because of **atrophic gastritis**, a long-standing inflammation that
```
Proposed:
```
Vitamin B12 deficiency in older adults comes mainly from malabsorption, not a lack of B12 in the diet:
in some older adults the stomach makes less acid because of **atrophic gastritis**, a long-standing inflammation that
```

### What a Healthy Diet Looks Like

#### dietary-guidelines-patterns/S2 · partly-supported · reword · confidence medium
*chapter, Is there one best diet? (close), first sentence* — 'Shared core on which nearly every national guideline converges' includes wholegrains and unsaturated fats, which Herforth found are not universal across national FBDGs.

**Source:** Whole grains and healthy fats are WHO messages not universally echoed by national FBDGs; the major guidelines (WHO, AHA, DGA, MHP) do include them.  
_Read: PubMed efetch abstract PMID 31041447_

Current:
```
No single diet is best. A healthy diet is a pattern that keeps the shared core on which nearly every
national guideline converges:
```
Proposed:
```
No single diet is best. A healthy diet is a pattern that keeps the shared core on which the major
guidelines converge:
```

#### dietary-guidelines-patterns/C8 · partly-supported · add-hedge · confidence medium
*book/diagrams/healthy-plate.yml, Chinese veg 'A little garnish' note* — 'the section most often missing from a real local dinner' is an uncited observation.

**Source:** HPB 2014 cites NNS 2010: up to 85% of adults fall short of recommended fruit and vegetable intake. No source ranks vegetables as the 'most often missing' plate section, and no NNS 2022 figure was retrievable.  
_Read: HPB 11 Jul 2014 press release (full); MOH NNS 2022 release (no fruit/veg data); NNS 2022 full report PDF could not be retrieved (404)_

Current:
```
Barely any vegetable: the half-plate is the section most often missing from a real local dinner.
```
Proposed:
```
Barely any vegetable: most adults here eat less fruit and vegetables than recommended, so the half-plate is often the section that falls short.
```

#### dietary-guidelines-patterns/S4 · partly-supported · add-hedge · confidence medium
*book/quizzes/dietary-guidelines-patterns.quiz.yml, q1 correct-option feedback* — Same uncited 'most often missing' observation as C8.

**Source:** NNS 2010 (via HPB 2014): up to 85% of adults fall short on fruit and vegetables. No ranking of plate sections found.  
_Read: HPB 11 Jul 2014 press release (full)_

Current:
```
The vegetable half is the largest section, and the one most often missing from a real local dinner.
```
Proposed:
```
The vegetable half is the largest section, and most adults here eat less fruit and vegetables than recommended.
```

### Evidence vs Hype

#### evidence-vs-hype/C3 · unsupported · reword · confidence high · **verifier corrected**
*evidence-vs-hype.qmd, Everyday questions table, ACV row (line 178)* — A body-composition meta-analysis is cited for 'the real glycaemic effects are tiny'.

**Source:** Arjmandfard (7 trials, n=463, 4-12 wk, mostly Iran): fasting glucose fell 21.9 mg/dL (GRADE moderate) and HbA1c fell 1.53% (GRADE low, high heterogeneity). That is not 'tiny'. Castagna covers weight, BMI and waist only (weight SMD -0.39), with no glycaemic outcomes, so it is the wrong source for the glycaemic claim.  
_Read: PubMed abstracts via E-utilities: PMID 39949546 (Arjmandfard 2025 Front Nutr) and PMID 41010525 (Castagna 2025 Nutrients). Also the PMC11821484 full text of Arjmandfard, for the GRADE ratings and limi …_

**Verifier:** The diagnosis is right: Arjmandfard reports FBS -21.9 mg/dL (GRADE moderate) and HbA1c -1.53 (GRADE low, I2 ~83-89%), which is not 'tiny'. The fix is unsafe, though. The PMC12472926 full text of Castagna 2025 (acvBodyComp) lists Abou-Khalil 2024, the very trial the row says was retracted (ref 44, flagged [Retracted]), among its 10 included RCTs. It rates that trial low risk of bias, so the sensitivity analysis keeps it, and no analysis excluding it is reported. Citing acvBodyComp for 'a modest f …

Current:
```
the real glycaemic effects are tiny beside ordinary care [@acvGlycaemia; @acvBodyComp]
```
Proposed:
```
what remains is a few small, short trials in type 2 diabetes suggesting some fall in fasting glucose, of limited certainty [@acvGlycaemia], and a weight meta-analysis that still pooled the retracted trial [@acvBodyComp]; neither is a substitute for ordinary care
```

#### evidence-vs-hype/S1 · unsupported · reword · confidence medium · **verifier corrected**
*claim-analyzer.yml, acv.apply (companion to C3)* — The diagram repeats the 'tiny glycaemic effect' claim that the cited meta-analysis contradicts.

**Source:** Pooled fasting glucose fell about 22 mg/dL (moderate certainty), HbA1c fell 1.5% (low certainty), and weight showed a modest fall. These are short, small trials, but the effect is not tiny.  
_Read: Same as C3: PubMed abstracts for PMID 39949546 and 41010525, plus the PMC11821484 full text._

**Verifier:** This is the same problem as C3. 'A modest effect on ... weight' rests on Castagna 2025, which pooled the retracted Abou-Khalil 2024 trial, so the diagram would present the withdrawn study's result as surviving evidence. The glucose effect also applies only to type 2 diabetes.

Current:
```
With the headline study withdrawn, there's little solid human evidence left; any real glycaemic effect is tiny beside ordinary diet and activity.
```
Proposed:
```
With the headline study withdrawn, what's left is a few small, short trials: a possible fall in fasting glucose in type 2 diabetes, of limited certainty, and weight data that still include the retracted trial. Neither replaces ordinary diet and activity.
```

#### evidence-vs-hype/C6 · unsupported · replace-citation · confidence high · **verifier corrected**
*evidence-vs-hype.qmd, Singapore picture (lines 263-265)* — HSA 'notifies' supplements: check the regulatory term. Health supplements are not pre-market approved. The key is a generic HealthHub URL.

**Source:** HSA says health supplements are not subject to HSA approval or licensing, and companies may voluntarily notify. HealthHub/HSA say they are not evaluated before sale and HSA gives no assessment or approval. MOH: post-market testing of over 900 products in 5 years removed 8 that contained western drugs or toxic heavy metals.  
_Read: Full pages: hsa.gov.sg/health-supplements/overview; healthhub.sg/live-healthy/understandinghealthsupplements_hsa (contributed by HSA); moh.gov.sg/newsroom/vitamins-and-health-supplements (MOH oral rep …_

**Verifier:** The substance is correct and the newText is accurate. Two corrections. (1) The new bib entry uses year = {n.d.}, but the HealthHub page says 'Article last reviewed 24 July 2025'; use year = {2025} and note the review date. The page calls 'Detoxify your body' a misleading claim, not an 'exaggerated' one. (2) newText cites @mohSupplements2018, whose bib entry is defined only in C7, so C6 must be applied together with C7. Once C6 and C7 are applied, hpbHealthSupplements (bib line 2435, generic http …

Current:
```
the Health Sciences Authority notifies supplements rather than approving them for
efficacy, and regularly finds illegally adulterated products containing undeclared or banned drugs
[@hpbHealthSupplements].
```
Proposed:
```
health supplements need no approval from the Health Sciences Authority before sale and are not
evaluated for efficacy, and its post-market testing has removed products containing undeclared western
drugs or toxic heavy metals [@hsaUnderstandingSupplements; @mohSupplements2018].
```
New citation:
```bibtex
@misc{hsaUnderstandingSupplements,
  author       = {{Health Sciences Authority}},
  title        = {Understanding Health Supplements},
  year         = {2025},
  note         = {HealthHub, last reviewed 24 July 2025. Supplements do not require approval and are not evaluated by HSA before sale; 'Detoxify your body' listed as a misleading claim with no scientific evidence; undeclared potent medicinal ingredients found in some products. Accessed 22 October 2026},
  howpublished = {\url{https://www.healthhub.sg/live-healthy/understandinghealthsupplements_hsa}}
}
```

#### evidence-vs-hype/C8 · unsupported · reword · confidence high · **verifier corrected**
*evidence-vs-hype.qmd, overview (line 39)* — The source supports graduates feeling unprepared for nutrition care generally. 'This is where they feel least equipped' (appraising claims) may overreach.

**Source:** A systematic review of 24 studies of medical students and recent graduates: nutrition is insufficiently taught, and the deficits affect students' knowledge, skills and confidence to give nutrition care. It does not rank appraising claims as the area where they feel least equipped.  
_Read: PubMed abstract via E-utilities: PMID 31538623 (Crowley, Ball, Hiddink, Lancet Planet Health 2019). Abstract only._

**Verifier:** The verdict is right, but 'unprepared to give nutrition care at all' overreaches in the other direction. Crowley says nutrition is insufficiently taught and that the deficits affect students' knowledge, skills and confidence to implement nutrition care. It does not say they are wholly unprepared. The review also covers current students as well as graduates of up to 4 years.

Current:
```
Graduates say this is where they feel least equipped [@crowley2019].
```
Proposed:
```
Medical students and recent graduates often lack the knowledge, skills and confidence to give nutrition care [@crowley2019].
```

### Assessing Diet & Talking to Patients

#### 06-dietary-assessment/C1 · unsupported · reword · confidence high · **verifier corrected**
*06-dietary-assessment.qmd #sec-first-moves, 'Two rules' paragraph* — 'Brief, respectful counselling in this style measurably improves what people actually eat [@frost2018mi]': does the MI review report a dietary-intake effect and support 'brief'?

**Source:** Review of 104 reviews. Most evidence was low or very low quality. Moderate-quality small, short-term benefits appeared in only 11 of 155 comparisons: alcohol, substance use and physical activity. Diet was not among them; diet benefits came only from lower-quality reviews. 'Brief' is not established.  
_Read: Europe PMC abstract for PMID 30335780 plus PMC6193639 full-text XML (searched for diet/dietary findings)_

**Verifier:** The verdict 'unsupported' is right. In Frost 2018, moderate-quality evidence showed small, mainly short-term (<6 months) benefits in only 11 of 155 comparisons, and those were for alcohol, substance use and physical activity. Diet appears only in lower-quality (low or very low, or unclear) reviews. The proposed newText still overstates: 'produces small, mostly short-term improvements in health behaviour' reads as a general effect on behaviour, but the review found it only for some behaviours and …

Current:
```
Brief, respectful counselling in this style measurably improves what people actually eat
[@frost2018mi]; hectoring does not.
```
Proposed:
```
Counselling in this respectful, motivational-interviewing style can produce small, mostly short-term
improvements in some health behaviours, such as drinking and physical activity; for diet specifically
the evidence is of low quality [@frost2018mi].
```

#### 06-dietary-assessment/S1 · unsupported · reword · confidence high · **verifier corrected**
*06-dietary-assessment.qmd, Check yourself 'why open with "Would it be alright..."' (companion to C1)* — The Check-yourself answer repeats the C1 claim without a citation: 'Brief, respectful counselling in this style improves what people eat'.

**Source:** As C1. The review finds no moderate-quality evidence that MI changes diet. Its few moderate-quality small effects are for alcohol, substance use and physical activity.  
_Read: Same as C1: Europe PMC abstract PMID 30335780 + PMC6193639 full text_

**Verifier:** The verdict is right, but the proposed newText adds a new claim with no support: that permission-first counselling 'gives advice its best chance of being acted on'. 'Modest' also understates the problem: the diet evidence is low quality, not just small. The answer should match the corrected C1 text. The oldText exists exactly (lines 301-303 region).

Current:
```
where the second is a broad instruction. Brief, respectful counselling in this style improves what people eat, and
hectoring does not.
```
Proposed:
```
where the second is a broad instruction. Respectful, permission-first counselling can bring small, short-term
changes in some health behaviours, though the evidence that it changes diet is of low quality.
```

#### 06-dietary-assessment/C3 · partly-supported · reword · confidence high · **verifier corrected**
*06-dietary-assessment.qmd #sec-nutri-grade, scope of freshly-prepared drinks* — 'Since 30 December 2023 the mark has also covered freshly-prepared drinks, the kopi, teh and bubble tea bought at the stall' may overstate scope: the requirement may apply only to some F&B outlets.

**Source:** Dates confirmed: pre-packaged drinks from 30 Dec 2022, freshly prepared drinks from 30 Dec 2023. A concession exempts smaller businesses (revenue of S$1 million or less in the latest financial year and fewer than 10 premises) from the freshly-prepared requirements, so many independent kopi or teh stalls are not covered.  
_Read: HPB 'Measures for Nutri-Grade' page, https://www.hpb.gov.sg/healthy-living/food-beverage/nutri-grade (full page). The bib URL points to HealthHub instead._

**Verifier:** The dates and the concession are right: the exemption applies to sellers with revenue of S$1 million or less in the latest financial year who sell at fewer than 10 food premises. The proposed newText goes beyond the source in two places. 'So many hawker drinks stalls show no grade' is an unsourced inference, and it is also misleading because grade A and B labelling is optional even for businesses that are covered. 'Larger chains' implies size alone decides coverage, but a single-outlet business  …

Current:
```
Since 30 December
2023 the mark has also covered freshly-prepared drinks, the *kopi*, *teh* and bubble tea bought at the stall;
pre-packaged drinks have carried it since 30 December 2022 [@hpbNutriGrade].
```
Proposed:
```
Since 30 December
2023 the mark has also covered freshly-prepared drinks such as *kopi*, *teh* and bubble tea, although small
sellers (revenue of S$1 million or less and fewer than 10 outlets) are exempt, so many hawker stalls are
not covered; pre-packaged drinks have carried it since 30 December 2022 [@hpbNutriGrade].
```

#### 06-dietary-assessment/C5 · partly-supported · reword · confidence medium
*06-dietary-assessment.qmd #sec-do-no-harm, first paragraph* — Does [@jebeile2023edrisk] cover adults, or only children and adolescents, for 'does not raise eating-disorder symptoms for most people'?

**Source:** Covers adults only: 49 behavioural weight-management trials, n=6337, mean age 22-60, 81% female. Global ED scores fell (g -0.27) and binge eating fell (g -0.66). Four studies found new symptoms in 0-6.5% of participants. Conclusion: no increase for most adults.  
_Read: Europe PMC abstract PMID 36919475 (PMC10909435)_

Current:
```
Structured
weight-management advice does not raise eating-disorder symptoms for most people (on average they
ease slightly), but a small minority develop new symptoms, so vigilance still matters
[@jebeile2023edrisk].
```
Proposed:
```
Behavioural
weight-management programmes do not raise eating-disorder symptoms for most adults (on average they
ease slightly), but a small minority develop new symptoms, so vigilance still matters
[@jebeile2023edrisk].
```

#### 06-dietary-assessment/C8 · partly-supported · reword · confidence high · **verifier corrected**
*06-dietary-assessment.qmd #sec-diet-history, drinks paragraph* — 'Sugary drinks are the biggest hidden source of energy and free sugars in many Singaporean diets' has no citation; consider NNS.

**Source:** NNS 2022: sugar-sweetened beverages 'remain the single biggest source of dietary sugar', supplying 52% of sugar intake. Total sugar fell from 60 g/day (2018) to 56 g. There is no statement about energy. A search snippet mentions an NNS 2025 release (Oct 2026), which I did not read.  
_Read: MOH press release 27 Sep 2023, https://www.moh.gov.sg/newsroom/national-health-surveys-highlight-need-to-focus-on-healthy-diets-and-lifestyles/ (full page; this is the mohNNS2022 bib URL)_

**Verifier:** The newText is accurate to the cited source: the NNS 2022 press release says SSBs 'remain the single biggest source of dietary sugar, contributing 52% of sugar intake' and says nothing about energy. However, MOH released NNS 2025 results on 3 October 2026. Total sugar fell from 60 g in 2018 to 48 g in 2025, 'particularly from sugar-sweetened drinks', and the release gives no beverage share of sugar. The 52% figure may therefore be out of date, and stating it in the present tense ('are... about h …

Current:
```
Sugary drinks (*kopi* and *teh* with condensed
milk, *bandung*, bubble tea, canned soft drinks) are the biggest hidden source of energy and free
sugars in many Singaporean diets, and they are the question most often skipped.
```
Proposed:
```
Sugary drinks (*kopi* and *teh* with condensed
milk, *bandung*, bubble tea, canned soft drinks) were the single biggest source of sugar in the 2022
National Nutrition Survey, about half of all sugar eaten [@mohNNS2022], and they are the question most often skipped.
```

#### 06-dietary-assessment/S4 · partly-supported · reword · confidence high · **verifier corrected**
*book/diagrams/diet-history.yml, drinks node note (companion to C8)* — The diagram note repeats the uncited 'biggest hidden source of energy and free sugars' claim.

**Source:** SSBs are the single biggest source of dietary sugar (52% of intake). The source says nothing about energy.  
_Read: MOH press release 27 Sep 2023 (full page), as for C8_

**Verifier:** Same issue as C8. The 52% share is from NNS 2022, and NNS 2025 (released 3 Oct 2026) reports lower sugar intake driven by drinks, with no updated share. The diagram note should be tied to the 2022 survey. Plain text, so it fits the diagram YAML style. The oldText exists exactly inside the note string on line 34.

Current:
```
Sugary drinks are the single biggest hidden source of energy and free sugars in many Singaporean diets.
```
Proposed:
```
In the 2022 national nutrition survey, sugary drinks were the single biggest source of sugar, about half of all sugar eaten.
```

### Behaviour-Change Counselling

#### behaviour-change-counselling/C1 · unsupported · reword · confidence high · **verifier corrected**
*chapter, The Singapore picture, para 1 (lines 260-261)* — Do @hpbMohCPG and @sgObesityBMI say the HPB-MOH guidelines build brief lifestyle counselling on the 5 A's and MI-style engagement?

**Source:** Neither SMJ extract mentions the 5 A's. Tobacco CPG: MI or CBT 'may be used to help tobacco users quit' (Grade B); its CME quiz names an 'ABC' approach, not the 5 A's. Obesity CPG: programmes should combine behavioural strategies such as self-monitoring and goal-setting (Grade B); patient motivation is a prerequisite; no MI or 5 A's.  
_Read: PubMed efetch abstracts for PMID 23900473 and 27353244 (both match bib); full text of the tobacco CPG SMJ extract (smj.org.sg 5407cpg1.pdf, 6 pp, grepped); PMC4971447 full text of the obesity CPG SMJ  …_

**Verifier:** The verdict (unsupported) is right: neither SMJ extract mentions the 5 A's. The obesity half of the newText is accurate. Its source sentence is 'Interventions need to combine behavioural strategies, such as self-monitoring and goal-setting, with dietary modification...' (Grade B, pg 60). The tobacco half is slightly stronger than the source. The source says MI or CBT 'may be used to help tobacco users quit' (Grade B, Level 2++), not that they help. The extract's own framework is 'Do you smoke? / …

Current:
```
The HPB–MOH clinical practice guidelines already build brief lifestyle counselling on the 5 A's and
MI-style engagement [@hpbMohCPG; @sgObesityBMI], so the approach is endorsed local practice.
```
Proposed:
```
Local clinical practice guidelines already point the same way. The HPB–MOH obesity guidelines ask
for weight-loss interventions that combine behavioural strategies such as self-monitoring and
goal-setting [@sgObesityBMI], and the tobacco guidelines name motivational interviewing as a
behavioural intervention that may be used to help people quit [@hpbMohCPG]. The approach therefore
fits endorsed local practice.
```

#### behaviour-change-counselling/S2 · partly-supported · reword · confidence medium · **verifier corrected**
*quiz q6, second option feedback (follow-on to C2)* — Feedback asserts 'the model is not a proven predictor of who will succeed', which the cited Cochrane evidence does not address.

**Source:** Review covers effectiveness of stage-based interventions for sustained weight loss (low-quality, inconclusive), not stage as a predictor of individual success.  
_Read: PubMed efetch abstract, PMID 24500864_

**Verifier:** The newText still carries the conflation the concern is about. It says the weak evidence for stage-based programmes means 'the model gives no proven basis for picking who will succeed'. The Cochrane review tested whether TTM-based programmes work. It did not test whether a patient's stage predicts success, so the second clause does not follow from the first. Better to state plainly what the review did and did not test.

Current:
```
feedback: "This overstates it: the Cochrane evidence that the model produces sustained weight loss is low-certainty, and the model is not a proven predictor of who will succeed. It tailors the style of the conversation, nothing more."
```
Proposed:
```
feedback: "This overstates it: the Cochrane review found only low-certainty evidence that stage-based programmes produce sustained weight loss, and it did not test a patient's stage as a forecast of who will succeed. It tailors the style of the conversation, nothing more."
```

#### behaviour-change-counselling/C3 · partly-supported · reword · confidence high · **verifier corrected**
*chapter, 5 A's dose caveat (lines 81-83)* — Check 'often a dozen or more sessions' attributed to @usptfBehavioural against the USPSTF recommendation.

**Source:** Interventions involved a median of 12 contacts (range 5-27), about 6 h contact over 6-18 months; most were medium or high intensity; MI commonly used. So the number is roughly right. But the statement never mentions the 5 A's, so 'the bodies that endorse them' is not supported by this source.  
_Read: PubMed efetch abstract PMID 33231670 (matches bib); full recommendation text on uspreventiveservicestaskforce.org (healthy-diet-and-physical-activity-counseling-adults-with-high-risk-of-cvd), incl. Pr …_

**Verifier:** The main fix is right. The USPSTF page gives a median of 12 contacts (range 5-27), about 6 h of contact over 6-18 months, and never mentions the 5 A's. But the fix is incomplete. The same unsupported claim also appears in the chapter's Check-yourself callout heading at line 143: 'the effectiveness evidence for the 5 A's comes from intensive, multi-contact programmes, often a dozen or more sessions'. That heading would then contradict the corrected paragraph, so it needs the same edit. Optional:  …

Current:
```
The 5 A's carry one caveat, about dose. The bodies that endorse them base their effectiveness evidence
on intensive, multi-contact programmes (often a dozen or more sessions), not a single clinic visit
[@usptfBehavioural].
```
Proposed:
```
Edit 1 (lines 81-83), as proposed: "The 5 A's carry one caveat, about dose. The evidence that diet and activity counselling works comes
from intensive, multi-contact programmes (a median of 12 contacts over 6 to 18 months), not a single
clinic visit [@usptfBehavioural]." Edit 2 (line 143), oldText "## Check yourself: the effectiveness evidence for the 5 A's comes from intensive, multi-contact programmes, often a dozen or more sessions. What follows for a single brief consult?" -> newText "## Check yourself: the evidence that diet and activity counselling works comes from intensive, multi-contact programmes, with a median of 12 contacts. What follows for a single brief consult?"
```

### Interprofessional Practice & Referral

#### interprofessional-referral/C3 · partly-supported · replace-citation · confidence high · **verifier corrected**
*interprofessional-referral.qmd #sec-clinician-health, lines 185-186 (last sentence)* — @lianov2010 (lifestyle-medicine physician competencies) may not support the burnout / patient-safety claim.

**Source:** Lianov's leadership competency: 'Seek to practice healthy behaviors'. Nothing on burnout, wellbeing or patient safety. Hall 2016 systematic review (46 studies): poor wellbeing and moderate-to-high burnout were associated with poorer patient safety (e.g. medical errors). Few prospective studies, so causality is unclear.  
_Read: Lianov & Johnson, JAMA 2010;304(2):202-3, full text PDF (commed.vcu.edu reprint); PubMed efetch PMID 20628134 (bibliographic record, no abstract). New source: PubMed efetch PMID 27391946 abstract and  …_

**Verifier:** The verdict and the replacement citation are right. I confirmed Hall LH, Johnson J, Watt I, Tsipa A, O'Connor DB, PLoS ONE 2016;11(7):e0159015, DOI 10.1371/journal.pone.0159015, PMID 27391946 on both PubMed and Crossref. The abstract concludes that poor wellbeing and moderate-to-high burnout are associated with poor patient safety, such as medical errors, in most studies, and that the lack of prospective studies limits causal inference. I also confirmed from the full text that Lianov 2010 has th …

Current:
```
Practitioner wellbeing is a professional and patient-safety issue, not an indulgence, and guarding
against burnout is a longitudinal skill to keep working at [@lianov2010].
```
Proposed:
```
Practitioner wellbeing is a professional and patient-safety issue, not an indulgence: in healthcare
staff, poor wellbeing and burnout are associated with poorer patient safety, such as more medical
errors, although few studies are prospective [@hall2016wellbeing]. Lifestyle-medicine competencies
also ask clinicians to seek to practise healthy behaviours themselves [@lianov2010], and guarding
against burnout is a skill to keep working at across a career.
```
New citation:
```bibtex
@article{hall2016wellbeing,
  author  = {Hall, Louise H. and Johnson, Judith and Watt, Ian and Tsipa, Anastasia and O'Connor, Daryl B.},
  title   = {Healthcare Staff Wellbeing, Burnout, and Patient Safety: A Systematic Review},
  journal = {PLoS ONE},
  year    = {2016},
  volume  = {11},
  number  = {7},
  pages   = {e0159015},
  doi     = {10.1371/journal.pone.0159015},
  pmid    = {27391946}
}
```

#### interprofessional-referral/C7 · partly-supported · reword · confidence medium · **verifier corrected**
*refer-or-advise.case.yml q-interim option a text and feedback (lines 84-86)* — 'Healthier SG follow-up is subsidised' overclaims: Chronic Tier subsidies are means-tested for CHAS/PG/MG cardholders, Mdm Tan's card status is not given, and there is no dedicated dietitian subsidy line.

**Source:** MOH: Chronic Tier gives 'CHAS/PG/MG cardholders' means-tested subsidies of up to 87.5%. The page does not say what non-cardholders get and does not mention dietitian services. Unqualified 'subsidised' assumes card status the case never gives.  
_Read: https://www.moh.gov.sg/newsroom/healthier-sg-chronic-tier-subsidy-framework-to-start-from-1-february-2024/ (full page text); web search snippets from ask.gov.sg / chas.sg_

**Verifier:** The reword is right to stop asserting an unqualified subsidy, but the new feedback names the wrong cards. Mdm Tan is 58, so she was born well after 1959. Pioneer Generation requires birth on or before 31 Dec 1949, and Merdeka Generation covers births 1950-1959 (or pre-1950 citizens without PG). She cannot hold a PG or MG card, so listing them implies an eligibility she cannot have. The only route to Chronic Tier subsidies that applies to her is a CHAS card. The MOH page confirms that Chronic Tie …

Current:
```
text: "Give safe general advice, and note that Healthier SG follow-up is subsidised."
        correct: true
        feedback: "Safe universal advice (less rice, more vegetables, water over sweet drinks) plus pointing her to the subsidised Healthier SG pathway keeps you in scope, without overstepping or leaving her unsupported."
```
Proposed:
```
text: "Give safe general advice, and keep her under Healthier SG follow-up."
        correct: true
        feedback: "Safe universal advice (less rice, more vegetables, water over sweet drinks) plus keeping her under her Healthier SG family doctor (with Chronic Tier subsidies if she holds a CHAS card) keeps you in scope, without overstepping or leaving her unsupported."
```

#### interprofessional-referral/S3 · partly-supported · reword · confidence medium
*refer-or-advise.case.yml end-good body (lines 127-129), companion to C7* — Same unqualified 'subsidised Healthier SG follow-up' wording repeats in the success ending.

**Source:** Subsidies depend on CHAS/PG/MG card status, which the case does not state.  
_Read: Same MOH Chronic Tier newsroom page as C7 (full page text)_

Current:
```
start, not a shrug. While she waits, you stayed in scope with safe general advice and pointed her
      to subsidised Healthier SG follow-up, without improvising therapeutic targets or leaving her
```
Proposed:
```
start, not a shrug. While she waits, you stayed in scope with safe general advice and kept her
      under Healthier SG follow-up, without improvising therapeutic targets or leaving her
```

#### interprofessional-referral/S2 · wrong-source · reword · confidence medium · **verifier corrected**
*interprofessional-referral.qmd #sec-clinician-health, line 178 (role-modelling evidence sentence)* — Found while checking C3: @lianov2010 is cited for 'the evidence is associational ... but consistent', but it is a competency list with no evidence on role modelling.

**Source:** Lianov 2010 only lists 'Seek to practice healthy behaviors' as a leadership competency, with no data on counselling frequency or credibility. Lobelo is the systematic review that carries the associational evidence (bib note: OR 1.4 to 5.7, observational).  
_Read: Lianov & Johnson JAMA 2010 full text PDF; lobelo2015rolemodel bib note plus PubMed record PMID 26213523 (abstract not read in full)_

**Verifier:** Removing @lianov2010 is right. Its full text has only the competency 'Seek to practice healthy behaviors' and no evidence on counselling frequency or credibility. But the fix is incomplete: Lobelo & Garcia de Quevedo 2016 reviews only physicians' own PHYSICAL ACTIVITY habits and PA counselling (19 of 24 analytic studies positive, OR 1.4-5.7, consistent). The book says 'look after their own diet and activity', so once Lianov goes, the diet half of the claim has no supporting citation. The smalles …

Current:
```
associational, not proof of cause, but it is consistent [@lobelo2015rolemodel; @lianov2010].
```
Proposed:
```
associational, not proof of cause, and mostly on physical activity, but it is consistent [@lobelo2015rolemodel].
```

### Obesity & Metabolic Syndrome

#### obesity-metabolic-syndrome/C5 · partly-supported · reword · confidence medium
*quiz q2 stem* — 'takes a statin for low HDL': statins are LDL-lowering; the harmonised criteria count drug treatment for reduced HDL (usually fibrates or nicotinic acid).

**Source:** The abstract confirms 3 of 5 and no obligatory component. Reproductions of Table 1 list 'drug treatment for reduced HDL-C' as an alternate indicator, and the footnote names fibrates and nicotinic acid, not statins. I did not read the original footnote, so the fix names no drug class.  
_Read: Europe PMC abstract of PMID 19805654; Circulation full text blocked (403); criteria table and drug footnote seen only in secondary reproductions (metabolicum.com summary page; search snippets of trial …_

Current:
```
blood pressure 132/88 mmHg, and takes a statin for low HDL.
```
Proposed:
```
blood pressure 132/88 mmHg, and is on drug treatment for low HDL.
```

#### obesity-metabolic-syndrome/C6-c · partly-supported · add-hedge · confidence medium · **verifier corrected**
*chapter, Check yourself: why can shaming a patient about weight make the weight harder to lose? (CY6)* — Stigma-cortisol-comfort-eating loop stated as established.

**Source:** COBWEBS is a review that builds a model: stigma begets weight gain through more eating and more cortisol, mechanisms 'theorized to ultimately result in weight gain', in a 'nascent' field. It is a proposed model, not an established cycle. The same wording also appears in the chapter stigma bullet (line ~324) and quiz q7 option c.  
_Read: Europe PMC abstract of PMID 24997407 (Tomiyama 2014, Appetite)_

**Verifier:** The edit is correct for its own passage (oldText exists exactly at chapter lines 358-359). Tomiyama 2014 calls the mechanisms 'theorized to ultimately result in weight gain' in a 'nascent' field. But the fix is incomplete: two other places state the same loop and are not covered. (1) Chapter stigma bullet, lines 324-325. oldText: '- by raising cortisol and comfort-eating, it can paradoxically promote weight gain, the loop captured\n  by the Cyclic Obesity/Weight-Based Stigma (COBWEBS) model.' Su …

Current:
```
less of the care that helps. Stigma also raises cortisol and comfort-eating, which can promote weight
gain (the cycle described by the COBWEBS model).
```
Proposed:
```
less of the care that helps. Stigma is also thought to raise cortisol and comfort-eating, which can
promote weight gain (the cycle proposed by the COBWEBS model).
```

#### obesity-metabolic-syndrome/C7 · partly-supported · reword · confidence high · **verifier corrected**
*chapter, 🔬 Food science callout (CY4 already hedges with 'which of these features matters most is still debated', so no change is needed there)* — Eating rate presented as 'the finding' of the Hall inpatient trial, when the mechanism is still debated.

**Source:** Eating rate was significantly faster on the UPF diet (+17 kcal/min) and moderately correlated with excess intake (r=0.45). The authors only speculate ('Perhaps the oro-sensory properties...'). They also say the ~85% higher non-beverage energy density likely contributed. Diets were matched per 1,000 kcal, not gram for gram.  
_Read: Europe PMC abstract of PMID 31105044 plus full-text PDF of Hall et al. 2019 Cell Metab (author copy hosted at foodpolitics.com), Results and Discussion_

**Verifier:** The direction is right, but 'one likely explanation' overstates the eating-rate point. In Hall et al., 'likely contributed' is said of the ~85% higher non-beverage energy density. Eating rate was faster (+17 kcal/min) and moderately correlated with excess intake (r=0.45, p=0.047), but the mechanism is put only as 'Perhaps the oro-sensory properties...'. So eating rate should be 'a possible explanation'. Small grammar fix: 'its solid foods' should be 'their solid foods' (the referent is 'the ultr …

Current:
```
signals take effect, so intake exceeds need even when a diet is matched gram for gram on sugar, fat and
fibre. That is the finding of the inpatient feeding trial, and it makes processing, as well as
composition, a modifiable factor worth naming [@hall2019upf].
```
Proposed:
```
signals take effect, so intake can exceed need even when a diet is matched on sugar, fat and fibre.
In the inpatient feeding trial people ate the ultra-processed meals faster, a possible explanation
alongside the higher energy density of their solid foods; which feature matters most is still debated.
Either way, processing, as well as composition, is a modifiable factor worth naming [@hall2019upf].
```

### Type 2 Diabetes

#### type-2-diabetes/C2 · wrong-source · reword · confidence high · **verifier corrected**
*chapter, Carbohydrate quality: fibre paragraph (type-2-diabetes.qmd ~l.128-131)* — 25-29 g/day optimum is from Reynolds 2019 (general population) but sits in a sentence about established diabetes citing both 2019 and 2020; Reynolds 2020 suggested +15 g/day or 35 g/day.

**Source:** Reynolds 2019 excluded people with chronic disease; risk reduction (incl. T2D incidence) greatest at 25-29 g/day; findings limited to population at large. Reynolds 2020 (diabetes) found fibre lowered HbA1c (-2 mmol/mol) and suggested increasing intake by 15 g or to 35 g/day as a reasonable target.  
_Read: Europe PMC REST abstracts for PMID 30638909 (Lancet 2019) and PMID 32142510 (PLoS Med 2020); abstracts only_

**Verifier:** The split of the citations is right, but 'with the greatest benefit at around 25-29 g ... in the general population' misreads Reynolds 2019 for diabetes. The abstract says risk reduction across a range of critical outcomes was greatest at 25-29 g/day, and also that dose-response curves suggested higher intakes 'could confer even greater benefit' against type 2 diabetes. So 25-29 g is not the optimum for diabetes risk. The 2020 sentence is accurate: HbA1c down 2 mmol/mol, and a target of +15 g or …

Current:
```
Fibre and wholegrains carry the strongest, most consistent evidence. Higher intake lowers the risk of
developing diabetes and, in established disease, lowers HbA1c, with an optimum around 25–29 g of fibre
a day [@reynolds2019carbquality; @reynolds2020fibrediabetes].
```
Proposed:
```
Fibre and wholegrains carry the strongest, most consistent evidence. Higher intake lowers the risk of
developing diabetes; across a range of outcomes in the general population, the risk reduction was
greatest at around 25–29 g of fibre a day [@reynolds2019carbquality]. In established disease it lowers
HbA1c, and raising intake by about 15 g a day, or to about 35 g, is a reasonable target
[@reynolds2020fibrediabetes].
```

#### type-2-diabetes/C3 · partly-supported · reword · confidence high · **verifier corrected**
*chapter, Fasting for Ramadan with diabetes P1 (type-2-diabetes.qmd ~l.299-300)* — EPIDIAR's several-fold rise in severe hypoglycaemia was Ramadan vs other months overall, not specifically for insulin or sulfonylurea users.

**Source:** 12,243 patients, 13 countries; 78.7% of T2D and 42.8% of T1D fasted >=15 days. Severe hypoglycaemia more frequent in Ramadan than other months for all patients (T1D 0.14 vs 0.03; T2D 0.03 vs 0.004 episodes/month); more frequent in those who changed OAD/insulin dose. Not reported by drug class in the abstract.  
_Read: Europe PMC REST abstract for PMID 15451892 (Diabetes Care 2004); abstract only (diabetesjournals full text returned 403)_

**Verifier:** The verdict is right: EPIDIAR reports the several-fold rise for Ramadan against other months in all patients (T1D 0.14 vs 0.03, T2D 0.03 vs 0.004 episodes a month), not by drug class. But the new closing sentence ('the classes that can cause hypoglycaemia') implies insulin and sulfonylureas are the only such classes. The chapter's own drug-class table, which comes just above this section, also lists meglitinides. The wording should not narrow the list. That sentence also has no citation, so it i …

Current:
```
*Integrative Metabolism* chapter). Most Muslim patients with diabetes fast, and doing so on insulin or
a sulfonylurea raises the risk of severe hypoglycaemia several-fold [@salti2004epidiar].
```
Proposed:
```
*Integrative Metabolism* chapter). Most Muslim patients with diabetes fast, and in a 13-country survey
severe hypoglycaemia was several times more frequent during Ramadan than in other months
[@salti2004epidiar]. The danger is greatest for patients on insulin or a sulfonylurea, two of the
high-risk classes in the table above.
```

#### type-2-diabetes/S2 · partly-supported · reword · confidence high · **verifier corrected**
*quiz q8 option b feedback (book/quizzes/type-2-diabetes.quiz.yml); repeat of C3* — Same EPIDIAR attribution as C3, repeated in quiz feedback.

**Source:** Several-fold rise was Ramadan vs other months for all patients with diabetes; drug-class link is the chapter's own (ADA-cited) hypoglycaemia table, not EPIDIAR.  
_Read: Europe PMC REST abstract for PMID 15451892; abstract only_

**Verifier:** 'insulin and sulfonylureas are the drugs that can cause it' implies they are the only ones. Quiz q4 and the chapter table also list meglitinides. Otherwise the reword matches EPIDIAR. oldText found at quiz line 124.

Current:
```
Fasting on insulin or a sulfonylurea raises the risk of severe hypoglycaemia several-fold, so it is not preparation-free.
```
Proposed:
```
Severe hypoglycaemia is several times more frequent during Ramadan, and insulin and sulfonylureas are among the drugs that can cause it, so fasting on insulin is not preparation-free.
```

#### type-2-diabetes/S3 · partly-supported · fix-number · confidence medium · **verifier corrected**
*chapter, Preventing diabetes P1 (type-2-diabetes.qmd ~l.232); same phrase in quiz q1 option a feedback* — Found while checking C5: the DPP programme's weight-loss goal is given as ~5-7%, but the trial goal was at least 7%.

**Source:** Lifestyle programme goals were at least 7% weight loss and at least 150 minutes of physical activity a week. ~5-7% may echo guideline wording, but the sentence describes the DPP programme itself.  
_Read: Europe PMC REST abstract for PMID 11832527; abstract only_

**Verifier:** The number fix is right: the DPP lifestyle goal was at least 7% weight loss. But the fix is incomplete. The same '5–7%' wording for the DPP programme appears in two more places that would then disagree with the corrected sentence: the Check-yourself callout at qmd line 255 ('aiming at about 5–7% weight loss and at least 150 minutes') and quiz q1 option a feedback at quiz line 9 ('aiming at ~5–7% weight loss and ≥150 min/week of activity'). All three need the same edit.

Current:
```
structure: a multi-session curriculum with follow-up, aiming at ~5–7% weight loss and ≥150 minutes of
activity a week.
```
Proposed:
```
Three edits. (1) qmd line 232: 'aiming at ~5–7% weight loss and ≥150 minutes of' -> 'aiming at ≥7% weight loss and ≥150 minutes of'. (2) qmd line 255: 'with follow-up, aiming at about 5–7% weight loss and at least 150 minutes of activity a week.' -> 'with follow-up, aiming at at least 7% weight loss and at least 150 minutes of activity a week.' (or 'a weight loss of at least 7%'). (3) quiz line 9: 'aiming at ~5–7% weight loss and ≥150 min/week of activity' -> 'aiming at ≥7% weight loss and ≥150 min/week of activity'.
```

### Cardiovascular Disease & Hypertension

#### cardiovascular-disease-hypertension/C7b · partly-supported · reword · confidence medium
*fat-swap.yml verdicts.neutral text (shown for the refined-carb choice)* — Linked to C7: neutral verdict says 'LDL and events barely move', which is inaccurate for the refined-carb swap.

**Source:** SFA to carbohydrate lowers LDL modestly but lowers HDL and raises TG; the total:HDL ratio is unchanged, and events are not reduced (Sacks 2017).  
_Read: PubMed abstract PMID 12716665; DGAC 2015 Appendix E-2.43 full text._

Current:
```
Because the replacement is not unsaturated fat, LDL and events barely move.
```
Proposed:
```
Because the replacement is not unsaturated fat, the blood-lipid profile and events barely improve.
```

### Chronic Kidney Disease

#### chronic-kidney-disease/C1 · wrong-source · replace-citation · confidence high · **verifier corrected**
*chapter, Medical nutrition therapy in CKD (five levers intro), lines 120-121* — 'International guidelines specify that it should be delivered by a renal dietitian' cites ACE 2023 alongside KDOQI; ACE may not say this.

**Source:** ACE: 'Not all patients with CKD will need dietitian involvement'; referral 'could be useful' for complex needs, resources permitting. ACE is Singaporean, not international, and covers G1-3a only. KDOQI (via ISRNM commentary and Healio) recommends MNT by a registered dietitian or international equivalent working closely with the physician.  
_Read: ACE Clinical Guidance 'CKD: delaying progression and reducing cardiovascular complications' (Oct 2023), full PDF from isomer-user-content.by.gov.sg (lifestyle section, Table 3). KDOQI 2020: Europe PMC …_

**Verifier:** The verdict and the decision to drop ACE are right. ACE 2023 says 'Not all patients with CKD will need dietitian involvement' and a referral 'could be useful' for complex needs, and its scope is early-stage CKD (G1-3a). KDOQI's recommendation is confirmed only at summary level: the Healio summary says MNT is delivered 'by a registered dietitian nutritionist (RDN) in close collaboration with the physician', and the ISRNM commentary (PMC8045140) agrees. The AJKD full text was blocked (403/Cloudfla …

Current:
```
International guidelines specify that it
should be delivered by a renal dietitian [@kdoqi2020nutrition; @aceCKD2023].
```
Proposed:
```
The KDOQI nutrition guideline recommends that it
be delivered by a registered dietitian working closely with the doctor [@kdoqi2020nutrition].
```

#### chronic-kidney-disease/C2 · unsupported · reword · confidence medium
*chapter, Fluid: when restriction is needed, line 241* — 'Fluid restriction is the measure generalists most often over-apply' has no citation.

**Source:** No source found ranking fluid as the most over-applied renal measure. It is a comparative empirical claim with no data behind it. The teaching point (do not prescribe fluid limits early) stands without the comparison.  
_Read: Searched for evidence comparing generalist over-application of renal diet components; none found. KDOQI 2020 abstract (Europe PMC) only; ISRNM commentary full text (no fluid content)._

Current:
```
Fluid restriction is the measure generalists most often over-apply.
```
Proposed:
```
Fluid restriction is an easy measure to over-apply.
```

#### chronic-kidney-disease/C4 · supported · reword · confidence medium · **verifier corrected**
*case mr-lim-ckd, persona.presentation (star-fruit juice) vs end-good debrief keyPoints* — Uncle Lim drinks 'the occasional star-fruit juice', an absolute avoid at eGFR 38, but no node or debrief addresses it. Author decision needed.

**Source:** Patients with impaired renal function are at higher risk of star-fruit intoxication. Mortality was 36% in chronic renal insufficiency and 27% on dialysis, against none with normal function. The hazard is real and relevant at G3b, so leaving it unaddressed is a do-no-harm gap in the case. Proposed: one keyPoint in end-good. The same line can go after the last keyPoint of end-partial. The alternativ …  
_Read: Europe PMC abstract PMID 28443386 (Chua 2017)._

**Verifier:** The keyPoint's content is supported. Chua 2017: impaired renal function carries a higher risk; mortality was 36% in chronic renal insufficiency and 27% on dialysis, with none in normal renal function. The chapter already makes star fruit an absolute avoid. oldText is unique (it occurs once, line 194). The proposal is incomplete, though: the new keyPoint makes a claim whose source is missing from the end-good debrief's references list (line 195). Add @chua2017starfruit there. This is still an aut …

Current:
```
- "Cutting sodium is the one dietary change a generalist can safely reinforce; fluid limits, binders and potassium and phosphate targets are specialist, so refer."
```
Proposed:
```
- "Cutting sodium is the one dietary change a generalist can safely reinforce; fluid limits, binders and potassium and phosphate targets are specialist, so refer."
        - "His occasional star-fruit juice is not a portion question: star fruit and belimbing carry a neurotoxin his kidneys can no longer clear, so in CKD they are an absolute avoid."
      references: ["@who2012potassium", "@neal2021ssass", "@kdoqi2020nutrition", "@nkfsEatingRightCKD", "@chua2017starfruit"]   (oldText must then extend to include the line '      references: ["@who2012potassium", "@neal2021ssass", "@kdoqi2020nutrition", "@nkfsEatingRightCKD"]')
```

#### chronic-kidney-disease/C7 · cannot-verify · reword · confidence medium
*case mr-lim-ckd, q-lever option b feedback (line 162)* — 'Early-to-moderate CKD usually needs no fixed fluid limit' goes further than the chapter's 'Early CKD usually needs no fluid restriction'.

**Source:** ACE supports no restriction (adequate hydration) only for early-stage CKD, defined as G1-3a. Uncle Lim is G3b, outside that scope. I could not confirm a KDOQI 2020 fluid statement for moderate CKD. Aligning the feedback with the chapter wording removes the unsupported 'moderate' scope.  
_Read: ACE 2023 full PDF (patient-education box: 'adequate oral hydration'; scope G1-3a). KDOQI 2020 abstract only, since full text was blocked; no fluid statement found in the abstract, the ISRNM commentary …_

Current:
```
Early-to-moderate CKD usually needs no fixed fluid limit (any restriction is individualised and set by the renal team), and binders
```
Proposed:
```
Fluid limits matter mainly in advanced disease and on dialysis, where any restriction is individualised and set by the renal team; binders
```

#### chronic-kidney-disease/S6 · partly-supported · reword · confidence medium · **verifier corrected**
*chapter, When to refer, line 268* — Supplementary: the five referral triggers (including 'G3b or worse') are cited to ACE, which covers only G1-3a and lists no triggers.

**Source:** ACE has no list of dietitian-referral triggers, only the 'could be useful for complex requirements' sentence, and its scope excludes G3b. Whether KDOQI lists these five could not be confirmed. Drop ACE here; the author should check the list against KDOQI or present it as a teaching synthesis.  
_Read: ACE 2023 full PDF (scope note and lifestyle section); KDOQI 2020 abstract only (full text blocked)._

**Verifier:** The checker's evidence misreports ACE. ACE does not list dietitian-referral triggers, but Recommendation 7 lists indications for shared or multidisciplinary specialist care. These include 'later stages of CKD (e.g. CKD G3b-5)', rapidly progressive CKD, persistent hyperkalaemia, and bone disease or abnormal calcium metabolism. So ACE partly corresponds to the 'G3b or worse', 'eGFR falling' and 'abnormal potassium/phosphate' items. 'Its scope excludes G3b' is also inaccurate for this section: the  …

Current:
```
referral [@kdoqi2020nutrition; @aceCKD2023]:
```
Proposed:
```
oldText: "in practice, five findings trigger a
referral [@kdoqi2020nutrition; @aceCKD2023]:"  newText: "in practice, five findings are useful triggers for a
referral, several of which Singapore's ACE guidance also lists as reasons for shared specialist care [@kdoqi2020nutrition; @aceCKD2023]:"
```

### Undernutrition & Malnutrition

#### undernutrition-malnutrition/S1 · unsupported · reword · confidence high · **verifier corrected**
*book/figures/mechanisms/malnutrition-mechanism.svg, inflammation-gradient segment labels (lines 61-63); companion to C1* — The figure labels the acute/injury segment 'severe (the cachexia end)', which contradicts ESPEN 2017 (cachexia = chronic DRM with inflammation) and would contradict the C1 prose fix.

**Source:** ESPEN 2017 lists 'Chronic DRM with inflammation; Synonym: Cachexia' as its own category and 'Acute disease- or injury-related malnutrition' as a separate one (Fig. 1 and section 3.2.1.1).  
_Read: ESPEN official PDF (full text), as for C1_

**Verifier:** The fix is substantively right, but the proposed middle label 'mild–moderate (cachexia)' drops the word 'inflammation'. The left segment still says 'no inflammation' and the new right one says 'severe inflammation', so the middle would be the odd one out. Measured in Segoe UI at 10.5px, 'mild–moderate inflammation (cachexia)' is about 192px wide and fits the 243px segment, so the word can stay. oldText matches SVG lines 61-63 exactly.

Current:
```
<text class="segsub" x="389" y="290" text-anchor="middle">mild–moderate inflammation</text>
  <text class="seglbl" x="633" y="270" text-anchor="middle">Acute disease / injury</text>
  <text class="segsub" x="633" y="290" text-anchor="middle">severe (the cachexia end)</text>
```
Proposed:
```
<text class="segsub" x="389" y="290" text-anchor="middle">mild–moderate inflammation (cachexia)</text>
  <text class="seglbl" x="633" y="270" text-anchor="middle">Acute disease / injury</text>
  <text class="segsub" x="633" y="290" text-anchor="middle">severe inflammation</text>
```

### Bone & Joint Health

#### bone-health-osteoporosis/C3 · supported · reword · confidence high · **verifier corrected**
*chapter: calcium requirements lead-in and table* — The lead-in mentions a raised need in pregnancy and lactation, but the table has no such row.

**Source:** HPB calcium RDA: adolescents 10-18 get 1,000 mg; adults 19-50 get 800 mg; adults 51+ get 1,000 mg; 'Breastfeeding / pregnant' get 1,000 mg as a single entry. The raised need is real, so the table just lacks the row.  
_Read: HealthHub RDA page https://www.healthhub.sg/live-healthy/recommended_dietary_allowances (full page)_

**Verifier:** The fix itself is accurate and oldText exists once (l.152). But adding a row writes a new specific number (1,000 mg/day in pregnancy and breastfeeding) into the table. The lead-in only said 'a raised need', so changesClaim should be true.

Current:
```
| Adults 51 and over | 1,000 |
```
Proposed:
```
| Adults 51 and over | 1,000 |
| Pregnancy and breastfeeding | 1,000 |
```

#### bone-health-osteoporosis/C5 · wrong-source · move-citation · confidence high · **verifier corrected**
*chapter OA paragraph, ESCEO sentence* — 'An industry-linked minority position that independent panels reviewed and did not accept' is cited only to ESCEO's own paper.

**Source:** The ESCEO paper argues that only patented crystalline glucosamine sulfate works; its authors disclose industry grants and fees. The ACR guideline notes that pharmaceutical-grade glucosamine has been studied and that industry-sponsored trials report more benefit than publicly funded ones, yet still strongly recommends against glucosamine.  
_Read: PubMed abstract and COI statement PMID 29177637 (E-utilities); ACR 2019 OA guideline full text PMC11488261_

**Verifier:** The newText states a direction ('industry-sponsored trials reported more benefit than publicly funded ones') that the ACR guideline does not state. It notes only 'discrepancies in efficacy reported in studies that were industry sponsored as opposed to publicly funded', which raised concerns about publication bias. It also says pharmaceutical-grade preparations 'have been studied in multiple trials', not that the ACR panel itself reviewed them. Moving the 'minority position / did not accept' clai …

Current:
```
European ESCEO group (a musculoskeletal-disease society), makes a case for a specific patented formulation,
an industry-linked minority position that independent panels reviewed and did not accept [@bruyere2018esceo].
```
Proposed:
```
European ESCEO group (a musculoskeletal-disease society), makes a case for a specific patented formulation
[@bruyere2018esceo]. It remains a minority position: the ACR panel noted that pharmaceutical-grade
preparations have been studied, flagged discrepancies between industry-sponsored and publicly funded trials,
and still advised strongly against glucosamine [@kolasinski2020acr].
```

#### bone-health-osteoporosis/C6a · internal-contradiction · reword · confidence medium · **verifier corrected**
*chapter at-a-glance bullet 1 (age at peak bone mass)* — Book-wide inconsistency: 'late twenties' here vs '~30' (BoneBank, Micronutrients) vs 'early twenties' (Childhood & Adolescence).

**Source:** NOF: peak timing varies by site. In CaMos women the hip peaks at 16-19 and the spine at 33-40, and accrual continues into the third decade. Hereford: peak reached by the end of the second decade. 'Around 30, varies by site' fits the widget and Micronutrients. The Childhood 'window closes by early twenties' refers to accrual and is compatible.  
_Read: NOF 2016 position statement full text (Europe PMC PMC4791473 XML, 'Timing of peak bone mass'); Hereford 2024 abstract PMID 40433296_

**Verifier:** 'Around 30' is not supported by either source. NOF gives a site-dependent range (CaMos women: total hip 16-19, lumbar spine 33-40); Hereford says the peak comes by the end of the second decade. 'Around 30' as a headline age also sits awkwardly beside the C6b newText ('from the late teens at the hip to the thirties at the spine'). Use the site range so the at-a-glance bullet and the remodelling section agree. The Micronutrients 'peaks around age 30' (l.248) is outside this file's scope but has th …

Current:
```
- Peak bone mass is essentially set by the late twenties, and only about 20–40% of it is modifiable by
```
Proposed:
```
- Peak bone mass is reached in young adulthood (from the late teens to the thirties, depending on the skeletal site), and only about 20–40% of it is modifiable by
```

#### bone-health-osteoporosis/C6b · partly-supported · reword · confidence medium
*chapter Pathophysiology: bone remodelling, peak-bone-mass sentence* — 'Reached by the late twenties' is cited to Hereford, which says the peak is reached by the end of the second decade; the age also varies by site.

**Source:** Hereford: 40-60% of adult bone mass is accrued in puberty, with the peak by the end of the second decade. NOF: about 95% of adult bone mass is in place by roughly 4 years after peak accretion (about age 12.5 in girls); the hip peaks at 16-19 and the spine at 33-40. 'About 90% by end of adolescence' is consistent; 'late twenties' as a single age is not.  
_Read: Hereford 2024 abstract (E-utilities PMID 40433296); NOF 2016 full text PMC4791473_

Current:
```
outpaces resorption, so bone mass rises to its peak. Peak bone mass is mostly inherited and is reached by the
late twenties, with about 90% of it laid down by the end of adolescence. After the peak, resorption gradually
exceeds formation, and bone mass falls for the rest of life
[@hereford2024peakBoneMass; @bailey1999saskatchewanAccrual].
```
Proposed:
```
outpaces resorption, so bone mass rises to its peak. Peak bone mass is mostly inherited; about 90% of it is
laid down by the end of adolescence, and the peak itself is reached in young adulthood, from the late teens
at the hip to the thirties at the spine. After the peak, resorption gradually exceeds formation, and bone
mass falls for the rest of life [@hereford2024peakBoneMass; @bailey1999saskatchewanAccrual;
@nof_weaver_2016_pbm_position].
```

#### bone-health-osteoporosis/C6c · internal-contradiction · reword · confidence medium
*chapter Check yourself: higher peak in youth* — Repeats 'after the late twenties' as the onset of net loss.

**Source:** Peak timing varies by site (hip 16-19, spine 33-40). Tying the callout to 'the peak in young adulthood' keeps it consistent with C6a/C6b.  
_Read: NOF 2016 full text PMC4791473_

Current:
```
After the late twenties, resorption gradually outpaces formation, so everyone's bone mass falls for the
```
Proposed:
```
After the peak in young adulthood, resorption gradually outpaces formation, so everyone's bone mass falls for the
```

#### bone-health-osteoporosis/C7 · partly-supported · add-hedge · confidence high · **verifier corrected**
*chapter Vitamin D cause list* — 'Age more than halves the skin's capacity to make vitamin D' is stated flatly; newer work questions the size of the effect.

**Source:** In UV-exposed surgical skin samples, skin from 77- and 82-year-olds made more than twofold less previtamin D3 than skin from 8- and 18-year-olds. The finding is real but comes from a small ex vivo laboratory comparison, so the hedge should name that scope.  
_Read: PubMed abstract PMID 2997282 (E-utilities), J Clin Invest 1985;76:1536-8_

**Verifier:** The concern says newer work questions the size of the age effect, and the proposal ignores that. The repo already holds the newer study, borecka2024skin7dhc (verified on PubMed this session: PMID 38674838, Borecka O et al., Nutrients 2024;16(8):1147, doi 10.3390/nu16081147, matching the bib). It found no age difference in skin 7-DHC and a similar serum D3 response to UVR in older (65-89) vs younger adults. The healthy-ageing chapter (l.95-97) already hedges with it. The proposed text keeps MacLa …

Current:
```
- age, which more than halves the skin's capacity to make vitamin D.
```
Proposed:
```
- age (in classic laboratory work, skin from people in their late seventies made less than half as much
  vitamin D as young skin, though newer work questions how large that effect is [@borecka2024skin7dhc]).
```

#### bone-health-osteoporosis/C8 · partly-supported · reword · confidence medium · **verifier corrected**
*components/src/BoneBank.svelte menopause-age control note* — Hard-codes 'women lose bone faster for ~7 years afterwards'; SWAN puts accelerated loss from about 1 year before to 2 years after the final menstrual period.

**Source:** SWAN: BMD loss began 1 year before the FMP and slowed, without stopping, 2 years after. Rates were greatest across this transmenopause (spine 7.38%, FN 5.8%) and lower 2-5 years after. Note: the model's spike (0.02 per year for 7 years) also exceeds SWAN (see S2).  
_Read: PubMed abstract PMID 21976317 (E-utilities), J Bone Miner Res 2012;27:111-118_

**Verifier:** First, the verdict 'unsupported' is too strong. SWAN shows loss starting a year before the FMP, fastest through 2 years after, then decelerating 'but did not cease': rates 2-5 years after the FMP stay above premenopausal ones to the end of observation. So 'faster for ~7 years' is partly supported, about 5 years observed. Second, the proposed label ('fastest from about a year before to two years after') describes a curve the widget does not draw. bmdAt() applies a uniform 0.02 per year spike for  …

Current:
```
<span class="cnote">women lose bone faster for ~7 years afterwards</span>
```
Proposed:
```
<span class="cnote">women lose bone faster around menopause and for several years after</span>
```

#### bone-health-osteoporosis/C9a · partly-supported · reword · confidence medium
*quiz q2 option c feedback* — 'Cooking doesn't release oxalate-bound calcium' is not in the chapter and is contestable (boiling leaches some oxalate).

**Source:** Boiling cut soluble oxalate by 30-87%; losses of insoluble oxalate ranged from 0 to 74%. No study tested whether cooking improves spinach calcium absorption. Heaney found spinach oxalate in slight stoichiometric excess, so essentially all calcium was bound, with 5.1% absorbed. The flat claim overstates the evidence; the poor-source conclusion holds.  
_Read: PubMed abstracts via E-utilities: Chai W, Liebman M, J Agric Food Chem 2005;53:3027-30; Heaney RP et al., Am J Clin Nutr 1988;47:707-9_

Current:
```
Cooking doesn't release oxalate-bound calcium. Spinach stays a poor calcium source; pick low-oxalate greens or calcium-set tofu instead.
```
Proposed:
```
Boiling leaches some oxalate into the water, but nothing shows it turns spinach into a well-absorbed calcium source; pick low-oxalate greens or calcium-set tofu instead.
```

#### bone-health-osteoporosis/C9b · partly-supported · reword · confidence medium
*Madam Lim case, q-spinach option c feedback* — Same contestable claim that cooking doesn't free oxalate-bound calcium.

**Source:** Boiling removes 30-87% of soluble oxalate into the cooking water, and losses of insoluble oxalate vary. There is no evidence that this makes spinach calcium well absorbed, so the right correction keeps the conclusion and drops the flat mechanistic claim.  
_Read: PubMed abstract via E-utilities, J Agric Food Chem 2005;53:3027-30_

Current:
```
Cooking doesn't free oxalate-bound calcium; spinach stays poorly absorbed (~5%). Steer her to low-oxalate greens and calcium-set tofu instead.
```
Proposed:
```
Boiling leaches some oxalate into the water, but nothing shows it makes spinach a well-absorbed calcium source. Steer her to low-oxalate greens and calcium-set tofu instead.
```

#### bone-health-osteoporosis/C10a · partly-supported · reword · confidence medium
*quiz q2 option a feedback* — 'About half' absorbed from kai-lan/bok choy; chapter prose and figure say only 'better still'.

**Source:** Reproduced Weaver 1999 values: bok choy 53.8%, kale 49.3%, broccoli 61.3%, Chinese mustard greens 40.2%, milk 32.1%, spinach 5.1%. Kai-lan (Chinese broccoli) is not listed. 'About half' holds for bok choy, but kai-lan's figure is unmeasured.  
_Read: PubMed abstract PMID 10479229 (no figures). The primary table was paywalled (AJCN 403), so I read the Weaver 1999 values as reproduced in the Kansas State/Lumen 'Calcium Bioavailability' table (CC BY)_

Current:
```
and about half from low-oxalate greens like kai-lan and bok choy.
```
Proposed:
```
and about half from low-oxalate greens such as bok choy.
```

#### bone-health-osteoporosis/C10b · partly-supported · reword · confidence medium
*Madam Lim case, q-spinach option a feedback* — Same 'about half' claim for kai-lan and bok choy.

**Source:** Bok choy is about 54% absorbed per Weaver 1999 data. Kai-lan is not among the measured foods, so it should not carry the 'about half' figure.  
_Read: PubMed abstract PMID 10479229; Weaver 1999 table values as reproduced in the Kansas State/Lumen calcium bioavailability table_

Current:
```
and about half from low-oxalate greens like kai-lan and bok choy.
```
Proposed:
```
and about half from low-oxalate greens such as bok choy.
```

#### bone-health-osteoporosis/C14a · partly-supported · reword · confidence high · **verifier corrected**
*chapter Vitamin D testing paragraph* — The 2024 Endocrine Society guideline suggests empiric supplementation for some groups; check the 'advises against empiric supplementation in otherwise healthy adults' framing.

**Source:** The guideline defines empiric as intake above the DRI without testing. It suggests against this in healthy adults under 75, suggests empiric vitamin D for ages 1-18, 75 and over, pregnancy and high-risk prediabetes, and suggests against routine 25(OH)D testing. Its recommendations are conditional ('suggests').  
_Read: PubMed abstract PMID 38828931 (E-utilities), J Clin Endocrinol Metab 2024;109:1907-1947_

**Verifier:** The substance is right, but 'empiric doses above the recommended intake' is ambiguous here. The next sentence cites HPB's own vitamin D reference intake of 2.5 ug (100 IU), while the guideline's threshold is the US Dietary Reference Intake (600-800 IU). A reader would take 'above the recommended intake' to mean above 100 IU. Name the DRI. (A related tension, out of scope: the paragraph's closing line, 'find and correct genuine shortfall in higher-risk people... are older or are pregnant', implie …

Current:
```
and the Endocrine Society guideline now advises against routine testing and
empiric supplementation in otherwise healthy adults [@demay2024endoSocVitD].
```
Proposed:
```
and the Endocrine Society guideline now suggests against routine testing, and
against empiric doses above the US Dietary Reference Intake in healthy adults under 75, while suggesting
empiric vitamin D for some groups, such as people aged 75 and over and pregnant women [@demay2024endoSocVitD].
```

#### bone-health-osteoporosis/C14b · partly-supported · reword · confidence high · **verifier corrected**
*quiz q4 option a feedback* — Same over-broad framing: 'advises against routine testing and empiric dosing in healthy adults'.

**Source:** The guideline is against empiric vitamin D above the DRI only for healthy adults under 75. It suggests empiric vitamin D for people 75 and over and in pregnancy, and is against routine testing in all populations considered.  
_Read: PubMed abstract PMID 38828931_

**Verifier:** 'Empiric high-dose vitamin D' misstates the guideline's threshold. It suggests against empiric vitamin D above the DRI (600-800 IU), which is not the same as high-dose. Match the source and C14a.

Current:
```
The Endocrine Society guideline also advises against routine testing and empiric dosing in healthy adults;
```
Proposed:
```
The Endocrine Society guideline also suggests against routine testing, and against empiric vitamin D above the recommended intake (the DRI) in healthy adults under 75;
```

### Brain Health & Dementia

#### brain-health-dementia/C1 · partly-supported · reword · confidence high · **verifier corrected**
*brain-health-dementia.qmd, Vascular risk factors, para 3* — Lancet Commission 2024 ranks hearing loss and high LDL cholesterol joint largest (about 7% each); LDL omitted, and diet is not one of the 14 modelled factors.

**Source:** Weighted PAFs: hearing loss 7%, high LDL cholesterol 7%, less education 5%, social isolation 5%; others 1 to 3%. Unhealthy diet is listed among factors judged to lack enough consistent evidence for inclusion in the model.  
_Read: Full text PDF of the 2024 Lancet Commission report (copy at talkbank.org/dementia/GR/0docs/Livingston.pdf, DOI 10.1016/S0140-6736(24)01296-0 confirmed on the PDF), PAF table and 'Potential risk factor …_

**Verifier:** The PAF figures are right (Lancet 2024 Figure/table: hearing loss 7%, high LDL cholesterol 7%, less education 5%, social isolation 5%), and so is the diet exclusion. The Commission's section 'Potential risk factors considered with insufficient evidence to include in the model' lists unhealthy diet among the factors where 'not enough consistent evidence exists to meet our high bar'. The problem is that newText says 'the 14 factors', and the chapter never says there are 14 (the earlier paragraph o …

Current:
```
The largest single contributors are hearing loss, and education and
social factors, not diet.
```
Proposed:
```
The largest single contributors in the model are hearing loss and high LDL cholesterol (about 7%
each), followed by less education and social isolation (about 5% each). Diet is not among the modelled
factors, because the Commission judged its evidence not consistent enough to include.
```

#### brain-health-dementia/C3 · partly-supported · add-citation · confidence high · **verifier corrected**
*brain-health-dementia.qmd, supplement table, Vitamin E row* — Efficacy claim (no benefit for prevention) rests only on miller2005vitamine, which supports only the mortality signal.

**Source:** Miller: high-dose (>=400 IU/d) vitamin E raised all-cause mortality (39 per 10,000). Farina: no evidence vitamin E prevents MCI progressing to dementia or improves cognition. PREADViSE: in 7540 older men, vitamin E did not prevent dementia (HR 0.88, 0.64 to 1.20).  
_Read: PubMed abstracts: Miller 2005 (PMID 15537682), Farina 2017 Cochrane (PMID 28418065), PREADViSE (PMID 28319243); PREADViSE DOI confirmed on Crossref._

**Verifier:** The citations and wording check out. PREADViSE (PMID 28319243, JAMA Neurol 2017;74(5):567-573, DOI 10.1001/jamaneurol.2016.5778, metadata matches) found vitamin E HR 0.88 (0.64-1.20) for dementia in men aged 60 and over. Farina 2017 Cochrane found no evidence that vitamin E affected progression from MCI to dementia (RR 1.03, one trial). Miller 2005 supports the mortality signal. However, changesClaim should be true, not false. The book currently says flatly 'No benefit' for prevention; the new t …

Current:
```
| Vitamin E | Antioxidant for prevention | No benefit, and at high doses linked to a small increase in death [@miller2005vitamine]; this one can harm |
```
Proposed:
```
| Vitamin E | Antioxidant for prevention | Trials found it did not prevent dementia in older men [@kryscio2017preadvise] or stop mild impairment progressing to dementia [@farina2017vitaminecochrane]; at high doses it has been linked to a small increase in death [@miller2005vitamine], so this one can harm |
```
New citation:
```bibtex
@article{kryscio2017preadvise,
  author  = {Kryscio, Richard J and Abner, Erin L and Caban-Holt, Allison and Lovell, Mark and Goodman, Phyllis and Darke, Amy K and Yee, Monica and Crowley, John and Schmitt, Frederick A},
  title   = {Association of Antioxidant Supplement Use and Dementia in the Prevention of {Alzheimer's} Disease by Vitamin {E} and Selenium Trial ({PREADViSE})},
  journal = {JAMA Neurology},
  year    = {2017},
  volume  = {74},
  number  = {5},
  pages   = {567--573},
  doi     = {10.1001/jamaneurol.2016.5778},
  pmid    = {28319243}
}
```

#### brain-health-dementia/C4-ginkgo · partly-supported · add-citation · confidence high · **verifier corrected**
*brain-health-dementia.qmd, supplement table, Ginkgo row* — Ginkgo bleeding and blood-thinner interaction uncited.

**Source:** NCCIH: ginkgo may increase bleeding risk in people taking anticoagulants such as warfarin, and may interact with other drugs. Stated as a possibility, not an established effect.  
_Read: NCCIH page 'Ginkgo: Usefulness and Safety', https://www.nccih.nih.gov/health/ginkgo (full page, last updated February 2025)._

**Verifier:** NCCIH says only: 'Ginkgo may increase the risk of bleeding in people who are taking anticoagulant drugs, such as warfarin' and 'may also interact with other drugs'. The page does not support a general bleeding risk. The proposed 'may raise bleeding risk, especially with blood thinners' implies a general risk that is merely greater with anticoagulants, which goes beyond the source. Moving from 'can increase bleeding' to 'may... in people taking blood thinners' is also a change of strength and sco …

Current:
```
can increase bleeding and interact with blood thinners |
```
Proposed:
```
may raise bleeding risk in people taking blood thinners such as warfarin [@nccih2025ginkgo] |
```
New citation:
```bibtex
@misc{nccih2025ginkgo,
  author       = {{National Center for Complementary and Integrative Health}},
  title        = {Ginkgo: Usefulness and Safety},
  year         = {2025},
  howpublished = {NCCIH, US National Institutes of Health},
  url          = {https://www.nccih.nih.gov/health/ginkgo},
  note         = {Last updated February 2025}
}
```

#### brain-health-dementia/C4-coconut · partly-supported · fix-number · confidence medium
*brain-health-dementia.qmd, supplement table, Coconut oil row* — 'Coconut oil is about 90% saturated fat' uncited.

**Source:** Per 100 g: total fat 99.1 g, saturated 82.5 g, monounsaturated 6.3 g, polyunsaturated 1.7 g. About 83% saturated by weight of fat, about 90% of identified fatty acids; 'more than 80%' is true on either reading.  
_Read: USDA FoodData Central API record FDC 171412 'Oil, coconut' (SR Legacy) and 330458 (Foundation), nutrient values read directly._

Current:
```
coconut oil is about 90% saturated fat
```
Proposed:
```
coconut oil is more than 80% saturated fat [@usdaFdcCoconutOil]
```
New citation:
```bibtex
@misc{usdaFdcCoconutOil,
  author       = {{US Department of Agriculture, Agricultural Research Service}},
  title        = {Oil, coconut (FDC ID 171412), FoodData Central, SR Legacy},
  year         = {2019},
  howpublished = {USDA FoodData Central},
  url          = {https://fdc.nal.usda.gov/food-details/171412/nutrients},
  note         = {Saturated fatty acids 82.5 g per 100 g; total lipid 99.1 g}
}
```

#### brain-health-dementia/C6 · supported · add-citation · confidence high · **verifier corrected**
*brain-health-dementia.qmd, When to refer, dysphagia bullet* — 'Evidence for routine thickening is weak' uncited; check agreement with Healthy Ageing (thickened fluids make swallowing safer) and Undernutrition (speech therapist sets IDDSI level).

**Source:** Only two linked trials of fluid thickening in dementia; low-quality evidence. Thickening can reduce aspiration immediately on videofluoroscopy, but honey-thick fluids had more pneumonia over three months; long-term effects uncertain. Consistent with 'safer swallow' in Healthy Ageing and therapist-led texture choice in Undernutrition.  
_Read: PubMed abstract of Flynn 2018 Cochrane review (PMID 30251253); DOI confirmed on Crossref. Read the relevant passages of the two other chapters in the repo._

**Verifier:** The citation is correct. Flynn 2018 Cochrane (PMID 30251253, CD011077.pub2, DOI 10.1002/14651858.CD011077.pub2, metadata matches) reports low-quality evidence: thickening may help the swallow immediately, honey-thick fluids had more pneumonia over 3 months, and long-term effects are uncertain. Two problems remain. (1) 'refer to speech therapy, who set the texture level' is ungrammatical, since speech therapy is not a 'who'; it should be a speech therapist who sets the level, which also matches t …

Current:
```
The evidence for routine thickening is weak, so recognise the practice and refer to
  speech therapy instead of assuming it is needed.
```
Proposed:
```
The evidence for routine thickening in dementia is weak: it can reduce aspiration
  in the moment, but its longer-term effects are uncertain [@flynn2018cochranethickening]. Recognise
  the practice and refer to a speech therapist, who sets the texture level, instead of assuming it is needed.
```
New citation:
```bibtex
@article{flynn2018cochranethickening,
  author  = {Flynn, Eadaoin and Smith, Christina H and Walsh, Cathal D and Walshe, Margaret},
  title   = {Modifying the consistency of food and fluids for swallowing difficulties in dementia},
  journal = {Cochrane Database of Systematic Reviews},
  year    = {2018},
  volume  = {9},
  number  = {9},
  pages   = {CD011077},
  doi     = {10.1002/14651858.CD011077.pub2},
  pmid    = {30251253}
}
```

#### brain-health-dementia/C9 · partly-supported · add-hedge · confidence high · **verifier corrected**
*brain-health-dementia.qmd, Eating difficulties in advanced dementia, para 2* — Cochrane review concluded low or very low certainty; 'does not prolong survival...' and 'unusually clear' are firmer than that review.

**Source:** Cochrane: no RCTs; 14 observational studies at high risk of bias; no evidence of survival benefit (low to very low certainty); PEG raised pressure-ulcer risk (moderate certainty); pneumonia risk tended higher. Teno: PEG linked to more new ulcers and less healing. AGS states the firmer position.  
_Read: PubMed abstracts: Davies 2021 Cochrane (PMID 34387363), Teno 2012 (PMID 22782196), AGS 2014 (PMID 25039796)._

**Verifier:** 'The observational evidence points consistently one way' is not accurate to Davies 2021. Three of the four studies of mixed or unspecified tube-feeding methods found tube feeding associated with LONGER survival (very-low certainty), and the harm outcomes were 'inconsistent'. What the review actually concludes is low or very-low certainty with no evidence of benefit, plus moderate-certainty evidence of more pressure ulcers with PEG. 'It can cause harm' also asserts causation from observational da …

Current:
```
The evidence on tube feeding here is unusually clear. In advanced dementia, tube feeding does not
prolong survival, prevent aspiration pneumonia, heal or prevent pressure ulcers, or improve comfort,
and it can cause harm, including *more* pressure ulcers [@davies2021cochranetubefeeding;
@teno2012pressureulcers].
```
Proposed:
```
There are no randomised trials, and the observational evidence is of low certainty, but it shows no
sign of benefit. In advanced dementia, studies have found no evidence that tube feeding prolongs
survival, prevents aspiration pneumonia, heals or prevents pressure ulcers, or improves comfort, and it
is linked to harm, including *more* pressure ulcers [@davies2021cochranetubefeeding;
@teno2012pressureulcers].
```

### Everyday & Preventive Counselling

#### cases-counselling/C2 · internal-contradiction · reword · confidence medium
*sim-common-questions-mr-lim.case.yml end-good title (line 62)* — 'Quality over quantity' cuts against the case's own 'quality and portion, not bans' message.

**Source:** The sim case's objective and debrief say 'food quality and portion' and 'quality-and-portion message'; portion is quantity, so the 'quality over quantity' title contradicts it. The MCQ case also says 'portion and type still matter' though its title uses quality over quantity.  
_Read: Repository files: sim-common-questions-mr-lim.case.yml (objectives line 6, patient-chat objective line 37, keyPoints lines 71, 84); common-questions.case.yml lines 4, 48, 55, 99, 148-151; macronutrien …_

Current:
```
title: Quality over quantity, and knowing when to refer
```
Proposed:
```
title: Quality and portion, and knowing when to refer
```

#### cases-counselling/S1 · internal-contradiction · reword · confidence medium · **verifier corrected**
*macronutrients.qmd line 570 (Mr Lim practise blurb); companion to C2* — Same 'quality-over-quantity' framing as C2; concern says both should be decided together. (common-questions.case.yml lines 4, 148, 151 use the same phrase and would need the same decision.)

**Source:** The MCQ case feedback itself says 'portion and type still matter' and 'keep the portion sensible', which a quality-over-quantity frame understates; only the fat item ('type matters more than total') fits quality over quantity.  
_Read: Repository file book/chapters/macronutrients.qmd line 570; book/cases/common-questions.case.yml._

**Verifier:** The fix is correct but incomplete. The macronutrients.qmd blurb introduces common-questions.case.yml, and that case still says 'quality-over-quantity terms' (objective, line 4), has the end-good title 'Quality over quantity, and where referral begins' (line 148) and says 'quality-not-quantity terms' (line 151). Changing only the blurb would leave the blurb and the case it introduces disagreeing. The chapter's own epigraph (lines 3-5: quality matters 'as much as quantity does') confirms the refra …

Current:
```
protein powder. Answer each on quality-over-quantity terms, respond to what he has heard with the
```
Proposed:
```
macronutrients.qmd line 570: 'quality-over-quantity terms' -> 'quality-and-portion terms' (as proposed). Companion edits in book/cases/common-questions.case.yml: line 4 'on quality-over-quantity terms.' -> 'on quality-and-portion terms.'; line 148 'title: "Quality over quantity, and where referral begins"' -> 'title: "Quality and portion, and where referral begins"'; line 151 'quality-not-quantity terms' -> 'quality-and-portion terms'.
```

### Preface

#### index/C1 · partly-supported · reword · confidence medium
*Why a whole book on nutrition, paragraph 2 (NUS Medicine sentence), lines 28-30* — 'NUS Medicine is expanding graduate training in nutrition and preventive health from 2026' has no citation, and 2026 is now the current year.

**Source:** Brochure: NUS Medicine 'has launched' a first-of-its-kind MSc in Nutrition and Lifestyle Medicine addressing an ageing population and rising NCDs in Asia; upcoming intake August 2026. Nothing confirms that 2026 is the first intake (a 2025 study plan exists), so 'from 2026' is not supported.  
_Read: NUS Medicine MSc NLM programme brochure AY2026/27 (medicine.nus.edu.sg/graduatestudies/wp-content/uploads/sites/16/2025/12/Digital-DGS-Programme-Brochure_MSc-NLM_AY2627.pdf), full text extracted. Prog …_

Current:
```
In Singapore, by contrast, NUS Medicine is expanding graduate
training in nutrition and preventive health from 2026, with a focus on Asia's ageing population and
rising chronic disease.
```
Proposed:
```
In Singapore, by contrast, NUS Medicine has launched a Master of Science in Nutrition and
Lifestyle Medicine, aimed at the challenges of Asia's ageing population and rising chronic disease
[@nusMScNLM].
```
New citation:
```bibtex
@misc{nusMScNLM,
  author       = {{NUS Yong Loo Lin School of Medicine}},
  title        = {Master of Science in Nutrition and Lifestyle Medicine ({MSc NLM}): programme brochure, {AY2026/2027}},
  year         = {2025},
  howpublished = {NUS Medicine Division of Graduate Studies},
  url          = {https://medicine.nus.edu.sg/graduatestudies/wp-content/uploads/sites/16/2025/12/Digital-DGS-Programme-Brochure_MSc-NLM_AY2627.pdf},
  note         = {Read 2026-10-22. Describes programme as launched; ageing population and rising NCDs in Asia; upcoming intake August 2026}
}
```

#### index/C3 · wrong-source · replace-citation · confidence high · **verifier corrected**
*Why a whole book on nutrition, paragraph 1, lines 17-18* — 'three-quarters of all deaths worldwide' is cited to the WHO healthy-diet fact sheet; the figure comes from the WHO NCD fact sheet. The same pairing is in 01-why-nutrition-matters.qmd line 37, which needs the same fix.

**Source:** The healthy-diet fact sheet gives no NCD death share. The NCD fact sheet says NCDs killed at least 43 million people in 2021, 75% of non-pandemic-related deaths, and names the same four main groups. The share is of non-pandemic deaths, not all deaths.  
_Read: WHO healthy-diet fact sheet https://www.who.int/news-room/fact-sheets/detail/healthy-diet (full page, dated 26 Jan 2026); WHO NCD fact sheet https://www.who.int/news-room/fact-sheets/detail/noncommuni …_

**Verifier:** The index.qmd fix is correct. The WHO NCD fact sheet (dated 25 Sep 2025; I read the raw page) says 'Noncommunicable diseases (NCDs) killed at least 43 million people in 2021, equivalent to 75% of non-pandemic-related deaths globally'. The healthy-diet fact sheet (dated 26 Jan 2026) gives no NCD death share. But the proposal is incomplete: the concern itself names book/chapters/01-why-nutrition-matters.qmd line 37, which carries the same wrong citation and the same 'all deaths' overstatement, and …

Current:
```
Non-communicable diseases (cardiovascular disease, diabetes, cancers, chronic respiratory disease)
now cause around three-quarters of all deaths worldwide [@who2020diet].
```
Proposed:
```
Keep the proposed index.qmd edit unchanged. ADD a second edit, file book/chapters/01-why-nutrition-matters.qmd. oldText: "cause around three-quarters of all deaths worldwide [@who2020diet]." newText: "cause around three-quarters of all deaths worldwide outside the COVID-19 pandemic: at least 43
million deaths in 2021 [@whoNCD2025]."
```

#### index/C5 · partly-supported · reword · confidence high · **verifier corrected**
*What this book is, line 51* — 'All progress is saved locally in your browser': the AI-patient sim cases send typed messages to an NUS-hosted endpoint, so a reader may infer that nothing leaves the browser.

**Source:** The patient-chat endpoint is enabled in production config, so text typed in sim cases goes to the university-hosted proxy and model. Progress storage is local, but the sentence leaves out this data flow.  
_Read: book/_quarto.yml lines 77-81 (patient-llm meta: endpoint https://patient-api.phm.nusmed.space, enabled:true); patient-proxy/README.md (browser to proxy to NUS-hosted model; logs status, latency and ha …_

**Verifier:** The data-flow concern is valid. _quarto.yml line 81 sets the production endpoint https://patient-api.phm.nusmed.space with enabled:true, and patient-proxy/README.md describes browser to proxy to an internal llama.cpp model. But the proposed purpose clause is incomplete. components/src/lib/patient.js callEvaluator also posts the conversation to /api/evaluate to generate feedback, so typed text is sent for feedback as well as for the patient's reply. The README also states that the proxy logs no m …

Current:
```
All progress is saved locally in your browser; there is no account and no login.
```
Proposed:
```
All progress is saved locally in your browser; there is no account and no login. In the AI-patient
cases of the two capstone chapters, what you type is sent to a university-hosted model so that the
patient can reply and your consultation can be given feedback; the messages themselves are not logged.
```

### Sign-off items

#### signoff/S3 · partly-supported · reword · confidence medium
*book/quizzes/healthy-ageing.quiz.yml, q3 option a (correct) feedback* — Uncited prevalence claim 'all common in this population' also covers atrophic gastritis, poor intake and vegetarian diet, especially vegetarian diet among older Singaporeans.

**Source:** Porter 2021 confirms that atrophic gastritis and PPI use are linked to poorer B12 status in older adults. The chapter only claims that metformin and PPIs are widely used in Singapore's older population, where diabetes is common. No source in the book gives local prevalence for vegetarian diet, poor intake or atrophic gastritis.  
_Read: PubMed abstract PMID 34134144 (Porter 2021) via E-utilities; repo chapter text healthy-ageing.qmd lines 84-92 and 283-286. Mouchaileh 2023 publisher page returned 403, not read._

Current:
```
and long-term metformin and PPIs add to the risk (as do atrophic gastritis, poor intake or a vegetarian diet), all common in this population.
```
Proposed:
```
and long-term metformin and PPIs, both widely used in this population, add to the risk (as do atrophic gastritis, poor intake or a vegetarian diet).
```

#### signoff/S4 · partly-supported · reword · confidence medium
*book/cases/early-t2d-remission.case.yml, option feedback line 103* — The feedback says 'a very-low-calorie shake diet is a supervised total diet replacement', but the chapter says 'low-calorie formula phase'. DiRECT used about 825-853 kcal/day. Which term is correct?

**Source:** DiRECT's intervention was a total diet replacement with an 825-853 kcal/day formula diet for 3-5 months, then stepped food reintroduction. A VLCD is conventionally 800 kcal/day or less, so DiRECT sits just above that line. 'Low-calorie' (the chapter's term) is the accurate label. Mr Raj's own words 'very-low-calorie' in lines 19 and 180 can stay as his framing.  
_Read: PubMed abstract PMID 29221645 (DiRECT, Lancet 2018) via E-utilities; WebSearch for the VLCD definition (NIDDK dictionary: VLCD is about 800 kcal/day or less; NICE CG189 evidence appendix)_

Current:
```
Self-starting is unsafe: a very-low-calorie shake diet is a supervised total diet replacement, not something to begin from an online order,
```
Proposed:
```
Self-starting is unsafe: a low-calorie shake diet like this is a supervised total diet replacement, not something to begin from an online order,
```

## B. Claim-changing fixes, high confidence, verifier agreed

### Why Nutrition Matters

#### 01-why-nutrition-matters/C1 · wrong-source · replace-citation · confidence high
*book/chapters/01-why-nutrition-matters.qmd #sec-burden para 1* — who2020diet (WHO healthy-diet fact sheet) is cited for the NCD share of deaths; check it says so or swap the key.

**Source:** Healthy-diet fact sheet gives no share of deaths from NCDs; it says only that healthy diets protect against NCDs. NCD fact sheet: NCDs caused at least 43 million deaths in 2021, equal to 75% of non-pandemic-related deaths worldwide.  
_Read: https://www.who.int/news-room/fact-sheets/detail/healthy-diet (full page, dated 26 Jan 2026); https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases (full page, dated 25 Sep 2025)_

Current:
```
cause around three-quarters of all deaths worldwide [@who2020diet]. The main ones are
```
Proposed:
```
cause around three-quarters of deaths worldwide, setting aside deaths from the COVID-19 pandemic
[@whoNCD2025]. The main ones are
```
New citation:
```bibtex
@misc{whoNCD2025,
  title = {Noncommunicable diseases (fact sheet)},
  author = {{World Health Organization}},
  year = {2025},
  note = {Fact sheet dated 25 September 2025; 2021 data: 43 million NCD deaths, 75\% of non-pandemic-related deaths},
  howpublished = {\url{https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases}}
}
```

#### 01-why-nutrition-matters/S1 · partly-supported · fix-number · confidence high
*book/quizzes/why-nutrition-matters.quiz.yml q1 correct-option feedback (follows from C1)* — Quiz states 74%; the current WHO NCD fact sheet gives 75% of non-pandemic deaths (2021).

**Source:** WHO NCD fact sheet (25 Sep 2025): at least 43 million NCD deaths in 2021, equal to 75% of non-pandemic-related deaths. The 74% figure came from an earlier version of the fact sheet.  
_Read: https://www.who.int/news-room/fact-sheets/detail/noncommunicable-diseases (full page)_

Current:
```
NCDs cause roughly 74% of deaths worldwide, and most are driven by modifiable behaviours.
```
Proposed:
```
NCDs caused about 75% of deaths worldwide in 2021, setting aside deaths from the COVID-19 pandemic, and most are driven by modifiable behaviours.
```

#### 01-why-nutrition-matters/S2 · wrong-source · replace-citation · confidence high
*book/index.qmd preface, 'Why a whole book on nutrition' para 1 (same claim as C1)* — The preface cites the same wrong source for the NCD share.

**Source:** The healthy-diet fact sheet has no NCD share. The NCD fact sheet gives 75% of non-pandemic-related deaths in 2021.  
_Read: Same two WHO fact sheets as C1 (full pages)_

Current:
```
now cause around three-quarters of all deaths worldwide [@who2020diet]. They are, in large part,
```
Proposed:
```
now cause around three-quarters of deaths worldwide, setting aside deaths from the COVID-19 pandemic
[@whoNCD2025]. They are, in large part,
```

#### 01-why-nutrition-matters/C2 · partly-supported · add-citation · confidence high
*book/chapters/01-why-nutrition-matters.qmd #sec-hub sleep bullet* — Spiegel 2004 supports 'raises appetite' only, not lowered insulin sensitivity or 'late, heavy meals worsen sleep'.

**Source:** Spiegel (n=12, crossover, intake controlled): sleep restriction raised hunger and appetite, especially for calorie-dense, high-carbohydrate food, with no data on insulin or actual intake. Buxton 2010 (n=20): 5 h/night for 1 week cut insulin sensitivity by 11-20%. Al Khatib meta-analysis: partial sleep deprivation raised intake by 385 kcal/day. Crispim (n=52, correlational): eating at night linked  …  
_Read: PubMed abstracts via NCBI efetch for PMIDs 15583226, 20585000, 27804960 and 22171206_

Current:
```
- Short sleep lowers **insulin sensitivity** (how well the body clears glucose in response to insulin)
  and raises appetite and the intake of energy-dense food. Late, heavy meals in turn worsen sleep, so
  the two form a self-reinforcing loop [@sleepRestriction].
```
Proposed:
```
- Short sleep lowers **insulin sensitivity** (how well the body clears glucose in response to insulin)
  [@buxton2010sleep] and raises hunger and appetite, especially for energy-dense food
  [@sleepRestriction], and overall energy intake [@alkhatib2017partialsleep]. Eating late at night is
  in turn linked to poorer sleep, so the two can form a self-reinforcing loop [@crispim2011foodsleep].
```
New citation:
```bibtex
@article{buxton2010sleep,
  author  = {Buxton, Orfeu M. and Pavlova, Milena and Reid, Emily W. and Wang, Wei and Simonson, Donald C. and Adler, Gail K.},
  title   = {Sleep restriction for 1 week reduces insulin sensitivity in healthy men},
  journal = {Diabetes},
  year    = {2010},
  volume  = {59},
  number  = {9},
  pages   = {2126--2133},
  doi     = {10.2337/db09-0699},
  pmid    = {20585000}
}
@article{crispim2011foodsleep,
  author  = {Crispim, Cibele A. and Zimberg, Ioná Z. and dos Reis, Bruno G. and Diniz, Rafael M. and Tufik, Sergio and de Mello, Marco T.},
  title   = {Relationship between food intake and sleep pattern in healthy individuals},
  journal = {Journal of Clinical Sleep Medicine},
  year    = {2011},
  volume  = {7},
  number  = {6},
  pages   = {659--664},
  doi     = {10.5664/jcsm.1476},
  pmid    = {22171206},
  note    = {Cross-sectional, n=52; correlational}
 …
```

#### 01-why-nutrition-matters/C3 · unsupported · reword · confidence high
*book/chapters/01-why-nutrition-matters.qmd #sec-patterns caveat callout 'most of them strokes'* — Were strokes the majority of composite events, or only the main driver of the reduction?

**Source:** Table 3 component events (EVOO/nuts/control): stroke 49/32/58 (139), MI 37/31/38 (106), CV death 26/31/30 (87). Strokes were the largest share (about 42%), not a majority. Only stroke fell significantly (combined HR 0.58); MI HR 0.80, non-significant. Authors note low power for components.  
_Read: PubMed abstract (efetch PMID 29897866) and full text PDF of the 2018 NEJM article from the University of Barcelona repository (hdl.handle.net/2445/157477), Table 3 and Discussion_

Current:
```
Its main result combined several
cardiovascular events, most of them strokes.
```
Proposed:
```
Its main result combined several
cardiovascular events; strokes were the largest share and showed the clearest reduction.
```

#### 01-why-nutrition-matters/S4 · partly-supported · reword · confidence high
*book/quizzes/why-nutrition-matters.quiz.yml q4 option 1 feedback (follows from C3)* — 'dominated by strokes' overstates the stroke share of the composite.

**Source:** Strokes were 139 of 332 component events, the largest share but not a majority. The significant reduction was in stroke (HR 0.58); MI did not differ significantly.  
_Read: Full text PDF, Table 3 (as for C3)_

Current:
```
PREDIMED's result comes from a 2018 re-analysis, and its combined outcome was dominated by strokes rather than heart attacks.
```
Proposed:
```
PREDIMED's result comes from a 2018 re-analysis, and its benefit on the combined outcome came mainly from fewer strokes rather than fewer heart attacks.
```

#### 01-why-nutrition-matters/S5 · unsupported · reword · confidence high
*book/quizzes/why-nutrition-matters.quiz.yml q4 correct-option feedback (follows from C3)* — 'most of them strokes' is not supported by Table 3.

**Source:** Strokes were the plurality (about 42%) of component events, not most. Stroke was the only component with a significant reduction.  
_Read: Full text PDF, Table 3 (as for C3)_

Current:
```
The trial found a ~30% relative reduction in a combined measure of cardiovascular events, most of them strokes.
```
Proposed:
```
The trial found a ~30% relative reduction in a combined measure of cardiovascular events, with the clearest reduction in strokes.
```

#### 01-why-nutrition-matters/C4 · partly-supported · reword · confidence high
*book/chapters/01-why-nutrition-matters.qmd #sec-patterns Mediterranean bullet 'about a 30% lower risk'* — The 30% is not labelled as relative (house rule §11d), and 'was associated with' is odd wording for a randomised result.

**Source:** ITT hazard ratios 0.69 (EVOO) and 0.72 (nuts) against the control diet, so about a 30% relative reduction. 5-year absolute risk was 3.6% and 4.0% against 5.7% for control. The number is right but it is a relative reduction from a trial estimate.  
_Read: PubMed abstract (PMID 29897866) and full text PDF, Table 3_

Current:
```
- The **Mediterranean pattern** (olive oil, nuts, legumes, fish, vegetables) was associated with
  about a 30% lower risk on a combined measure of cardiovascular events in the PREDIMED trial
  [@estruch2018predimed].
```
Proposed:
```
- The **Mediterranean pattern** (olive oil, nuts, legumes, fish, vegetables) lowered the risk of a
  combined measure of cardiovascular events by about 30% in relative terms in the PREDIMED trial
  [@estruch2018predimed].
```

#### 01-why-nutrition-matters/C5 · unsupported · fix-number · confidence high
*book/cases/pillar-mapping-mr-tan.case.yml caveat-slide body* — 'roughly half the mortality risk of the least healthy' has no source.

**Source:** Loef & Walach 2012 meta-analysis (15 cohorts, 531,804 people, mean follow-up 13 years): four or more healthy lifestyle factors (from smoking, alcohol, diet, activity, obesity) linked to 66% lower all-cause mortality (95% CI 58-73%) than the fewest. That is about a third of the risk, not half.  
_Read: PubMed abstract via NCBI efetch, PMID 22735042_

Current:
```
The claim that the pillars reinforce each other rests largely on observational
      data on combined lifestyles (people with the healthiest profiles have roughly
      half the mortality risk of the least healthy), plus small mechanistic studies.
```
Proposed:
```
The claim that the pillars reinforce each other rests largely on observational
      data on combined lifestyles (in one meta-analysis of cohort studies, people with
      four or more healthy lifestyle factors had about a third of the all-cause
      mortality risk of those with the fewest), plus small mechanistic studies.
```
New citation:
```bibtex
@article{loef2012lifestyle,
  author  = {Loef, Martin and Walach, Harald},
  title   = {The combined effects of healthy lifestyle behaviors on all cause mortality: a systematic review and meta-analysis},
  journal = {Preventive Medicine},
  year    = {2012},
  volume  = {55},
  number  = {3},
  pages   = {163--170},
  doi     = {10.1016/j.ypmed.2012.06.017},
  pmid    = {22735042},
  note    = {Observational cohorts; at least four healthy factors: 66\% lower all-cause mortality}
}
```

### Energy Balance

#### energy-balance/C1 · wrong-source · replace-citation · confidence high
*energy-balance.qmd, sec-defended, adaptive-thermogenesis paragraph (line 187)* — 'single biggest reason "just eat less" so often fails' is cited to Hall 2022, a reinterpretation of the Biggest Loser data that does not rank causes of diet failure. The follow-up study it reinterprets found that adaptation did not predict regain.

**Source:** Hall 2022 argues that large, sustained rises in activity may drive compensatory falls in RMR; it never says adaptation is the main reason diets fail. Fothergill: regain not correlated with adaptation (r=-0.1). Leibel 1995: compensatory changes in expenditure oppose a reduced weight and 'may account for' poor long-term results of obesity treatment. Sumithran: appetite mediators that encourage regai …  
_Read: PubMed abstracts via NCBI E-utilities: PMID 34816627 (Hall 2022), 27136388 (Fothergill 2016), 7632212 (Leibel 1995), 22029981 (Sumithran 2011)_

Current:
```
compensation is the single biggest reason "just eat less" so often fails [@hall2022biggestloser].
```
Proposed:
```
compensation helps explain why "just eat less" so often fails in the long term [@leibel1995energy; @sumithran2011hormonal].
```
New citation:
```bibtex
@article{leibel1995energy,
  author  = {Leibel, Rudolph L. and Rosenbaum, Michael and Hirsch, Jules},
  title   = {Changes in energy expenditure resulting from altered body weight},
  journal = {New England Journal of Medicine},
  year    = {1995},
  volume  = {332},
  number  = {10},
  pages   = {621--628},
  pmid    = {7632212},
  doi     = {10.1056/NEJM199503093321001}
}
```

#### energy-balance/C2 · unsupported · add-citation · confidence high
*energy-balance.qmd, sec-defended (line 186)* — 'oppose loss far more strongly than gain' has no citation of its own.

**Source:** Schwartz et al. (Endocrine Society statement): weight loss from calorie restriction is strongly resisted by falls in expenditure, while overfeeding-induced rises 'tend to be more modest and short-lived'; the coupling 'may be stronger' when weight is reduced than when it is increased. That is hedged, so 'far more' overstates it.  
_Read: PubMed abstract PMID 28898979 (E-utilities) plus PMC full text PMC5546881 (pmc.ncbi.nlm.nih.gov), section on determinants of energy expenditure_

Current:
```
and they oppose loss far more strongly than gain.
```
Proposed:
```
and they appear to oppose loss more strongly than gain [@schwartz2017obesity].
```
New citation:
```bibtex
@article{schwartz2017obesity,
  author  = {Schwartz, Michael W. and Seeley, Randy J. and Zeltser, Lori M. and Drewnowski, Adam and Ravussin, Eric and Redman, Leanne M. and Leibel, Rudolph L.},
  title   = {Obesity pathogenesis: an {Endocrine Society} scientific statement},
  journal = {Endocrine Reviews},
  year    = {2017},
  volume  = {38},
  number  = {4},
  pages   = {267--296},
  pmid    = {28898979},
  doi     = {10.1210/er.2017-00111}
}
```

#### energy-balance/C4 · partly-supported · add-citation · confidence high
*energy-balance.qmd, sec-expenditure, TEF paragraph (lines 70-71)* — 'about 10% of TEE' and 'protein costs the most to process' have no citation.

**Source:** On a mixed diet at energy balance, diet-induced thermogenesis is 5 to 15% of daily expenditure, so 'about 10%' holds. The order of thermic cost is alcohol, protein, carbohydrate, fat: alcohol, not protein, is highest. The source also says protein-induced thermogenesis has an important effect on satiety.  
_Read: PubMed abstract PMID 15507147 (E-utilities), Westerterp 2004 Nutr Metab; PMC5486561 full text of westerterp2017dlw (no TEF percentage, no RQ values)_

Current:
```
meal, about 10% of TEE. Protein costs the most to process, which is one reason protein-rich meals
```
Proposed:
```
meal, about 10% of TEE [@westerterp2004dit]. Protein costs more to process than carbohydrate or fat, which is one reason protein-rich meals
```
New citation:
```bibtex
@article{westerterp2004dit,
  author  = {Westerterp, Klaas R.},
  title   = {Diet induced thermogenesis},
  journal = {Nutrition \& Metabolism},
  year    = {2004},
  volume  = {1},
  number  = {1},
  pages   = {5},
  pmid    = {15507147},
  doi     = {10.1186/1743-7075-1-5}
}
```

#### energy-balance/C7 · partly-supported · reword · confidence high
*energy-balance.qmd, sec-singapore, paragraph 1 (line 220), eating-out frequency* — 'most residents do it most days' has no citation. (The second half, 'Portions have grown', is handled in S1.)

**Source:** 77.3% of Singaporean adults usually ate breakfast, lunch or dinner at eateries; 61.1% usually ate at least one of three daily meals at a hawker centre. That supports 'most adults usually eat at least one meal out', not a measured 'most days' frequency.  
_Read: PubMed abstract PMID 28545458 (E-utilities), Naidoo et al. IJBNPA 2017 (NNS 2010 data, 1,647 adults)_

Current:
```
out is the norm: most residents do it most days.
```
Proposed:
```
out is the norm: about three in four adults usually eat at least one of their daily meals out [@naidoo2017eatingout].
```

#### energy-balance/C8 · unsupported · fix-number · confidence high
*bmr-estimation.case.yml, q-advice option a (text and feedback)* — '~300–500 kcal/day deficit' and '~0.25–0.5 kg/week' have no citation and are never stated in the chapter, so the case tests a number the chapter does not teach.

**Source:** The Singapore CPG recommends diets giving a deficit of at least 500 kcal below estimated daily needs (Grade A), says weight loss should preferably not exceed 0.5–1 kg a week (Grade A), and gives a 5–10% loss over six months as the initial goal. 300–500 kcal and 0.25–0.5 kg/week are not in it.  
_Read: PMC full text PMC4971447 (HPB-MOH Obesity CPG executive summary, Singapore Med J 2016); PubMed abstract PMID 27353244_

Current:
```
text: "A modest deficit of ~300–500 kcal/day"
        correct: true
        feedback: "A modest deficit supports gradual loss (~0.25–0.5 kg/week) through swaps she can keep up, and is far easier to sustain. Drastic cuts provoke stronger hunger and a fall in expenditure (metabolic adaptation)."
```
Proposed:
```
text: "A modest deficit of about 500 kcal/day"
        correct: true
        feedback: "About 500 kcal/day below her needs, the Singapore guideline's starting point, supports gradual loss through swaps she can keep up, and is far easier to sustain. Drastic cuts provoke stronger hunger and a fall in expenditure (metabolic adaptation)."
```

#### energy-balance/S2 · supported · add-citation · confidence high
*energy-balance.qmd, sec-bmr, after 'The equations are population estimates' (line 113); teaches the C8 number in the chapter* — Part of C8: the chapter never states the weight-loss deficit the case tests.

**Source:** CPG: a deficit of at least 500 kcal below estimated daily needs (Grade A); weight loss preferably no more than 0.5–1 kg a week (Grade A). Local clinical-practice guidance, so it fits the AUTHOR §11d citation rule.  
_Read: PMC full text PMC4971447 (HPB-MOH Obesity CPG executive summary)_

Current:
```
not measure that person's needs.
```
Proposed:
```
not measure that person's needs. For weight loss, Singapore's obesity guideline starts from a deficit of at least 500 kcal/day below these estimated needs, with loss preferably no faster than 0.5–1 kg a week [@hpbmoh2016obesityCPG].
```

#### energy-balance/S3 · unsupported · fix-number · confidence high
*bmr-estimation.case.yml, counselling node body; follows from C8* — Part of C8: the counselling node repeats the unsupported 300–500 kcal/day range.

**Source:** The CPG recommends a deficit of at least 500 kcal/day; it does not give 300–500.  
_Read: PMC full text PMC4971447_

Current:
```
With needs of about 1,740 kcal/day, a modest 300–500 kcal/day deficit supports
```
Proposed:
```
With needs of about 1,740 kcal/day, a modest deficit of about 500 kcal/day supports
```

#### energy-balance/S4 · unsupported · fix-number · confidence high
*bmr-estimation.case.yml, end-good debrief keyPoints; follows from C8* — Part of C8: the debrief key point repeats the unsupported 300–500 kcal/day range.

**Source:** The CPG recommends a deficit of at least 500 kcal/day below estimated needs.  
_Read: PMC full text PMC4971447_

Current:
```
- "A 300–500 kcal/day deficit supports gradual, sustainable loss."
```
Proposed:
```
- "A deficit of about 500 kcal/day supports gradual, sustainable loss."
```

#### energy-balance/C9 · supported · add-citation · confidence high
*quiz q6 correct feedback; case q-advice feedback; fix goes in energy-balance.qmd sec-defended (line 185)* — The quiz and case assert that hunger rises after weight loss, but this chapter implies it only through leptin as an appetite regulator.

**Source:** Sumithran: after a 13.5 kg diet-induced loss, subjective appetite rose significantly and hunger was still raised at 62 weeks, about a year later. Schwartz: calorie-restriction weight loss produces 'an increased drive to eat'. The quiz and case claims are true; the chapter only needs to state them.  
_Read: PubMed abstract PMID 22029981 (E-utilities); PMC5546881 full text (Schwartz 2017)_

Current:
```
regain. Together with the leptin signal below, these compensatory responses actively oppose weight
```
Proposed:
```
regain. Hunger also rises after weight loss and is still raised a year later [@sumithran2011hormonal]. Together with the leptin signal below, these compensatory responses actively oppose weight
```

### Macronutrients

#### macronutrients/C6 · partly-supported · reword · confidence high
*macronutrients.qmd, From nutrients to patterns* — @ada2026standards supports 'no single ideal macronutrient split' only for people with diabetes, but the book uses it for everyone.

**Source:** ADA: 'There is no ideal percentage of calories from carbohydrate, protein, or fat for people with diabetes'; the split should be individualised. Recommendation 5.10 says to refer people with prediabetes or diabetes to a registered dietitian nutritionist. The close's referral sentence (line 548) is similarly diabetes-scoped; it is left as is.  
_Read: PMC full text PMC12690188 (ADA Standards of Care 2026, Section 5), 'Meal Planning' paragraph and Table 5.1 recommendation 5.10_

Current:
```
guidelines
deliberately avoid prescribing one, and advise individualising and referring to a dietitian where
needed [@ada2026standards].
```
Proposed:
```
guidelines
deliberately avoid prescribing one. Diabetes standards, for example, find no ideal percentage of
energy from carbohydrate, protein or fat, and advise individualising the split and referring to a
dietitian [@ada2026standards].
```

#### macronutrients/C7 · partly-supported · reword · confidence high
*macronutrients.qmd, 🔬 Food science: heat, browning and protein* — Charred meat said to form other mutagens through Maillard browning, but PAHs come from fat pyrolysis and smoke.

**Source:** NCI: HCAs form when amino acids, sugars and creatine react at high temperature. PAHs form when fat and juices drip onto a flame or hot surface and the smoke deposits them on the meat. Both are mutagenic in laboratory tests. Population studies have not established a definitive link to cancer.  
_Read: https://www.cancer.gov/about-cancer/causes-prevention/risk/diet/cooked-meats-fact-sheet (full page)_

Current:
```
in charred
meat it forms other mutagens, though the human cancer evidence is inconclusive [@nciCookedMeats].
```
Proposed:
```
in meat
cooked at high heat, related reactions of amino acids, sugars and creatine form heterocyclic amines,
and fat dripping onto a flame adds smoke-borne polycyclic aromatic hydrocarbons; both are mutagens in
the laboratory, though the human cancer evidence is inconclusive [@nciCookedMeats].
```

#### macronutrients/C8 · partly-supported · reword · confidence high
*macronutrients.qmd, Carbohydrate spectrum, free sugars bullet (quiz and glossary in S4 and S5)* — The free sugars definition leaves out honey, which WHO includes.

**Source:** WHO: free sugars include monosaccharides and disaccharides added to foods and drinks, plus sugars naturally present in honey, syrups, fruit juices and fruit juice concentrates. The limit is <10% of energy, with further benefit at 5% or less.  
_Read: https://www.who.int/news-room/fact-sheets/detail/healthy-diet (full page)_

Current:
```
- **Free sugars**, added sugars plus those in syrups and fruit juices, are the carbohydrate to
```
Proposed:
```
- **Free sugars**, added sugars plus those in honey, syrups and fruit juices, are the carbohydrate to
```

#### macronutrients/S4 · partly-supported · reword · confidence high
*book/quizzes/macronutrients.quiz.yml q2, correct-option feedback (part of C8)* — The quiz definition of free sugars omits honey.

**Source:** WHO includes sugars naturally present in honey within free sugars. The option text 'Added sugar, plus the sugar in fruit juice' stays correct as is; only the feedback definition is incomplete.  
_Read: https://www.who.int/news-room/fact-sheets/detail/healthy-diet (full page)_

Current:
```
feedback: "Free sugars are added sugars plus those in syrups and fruit juices; WHO caps them at <10% of energy."
```
Proposed:
```
feedback: "Free sugars are added sugars plus those in honey, syrups and fruit juices; WHO caps them at <10% of energy."
```

#### macronutrients/S5 · partly-supported · reword · confidence high
*book/glossary.qmd, Free sugars row (part of C8)* — The glossary definition of free sugars omits honey.

**Source:** WHO includes sugars naturally present in honey within free sugars.  
_Read: https://www.who.int/news-room/fact-sheets/detail/healthy-diet (full page)_

Current:
```
| Free sugars | Added sugars plus the sugars in syrups and fruit juices, but not the sugar inside whole fruit; WHO advises less than 10% of energy | *Macronutrients* |
```
Proposed:
```
| Free sugars | Added sugars plus the sugars in honey, syrups and fruit juices, but not the sugar inside whole fruit; WHO advises less than 10% of energy | *Macronutrients* |
```

### Micronutrients, Hydration & Electrolytes

#### 04-micronutrients-hydration/C1 · unsupported · reword · confidence high
*chapter 04, Calcium and bone, P1 (lines 249-251)* — 'hip-fracture rates in Singapore are among the highest in Asia' is uncited and may conflate with the Bone & Joint chapter's 'among the highest in Asia' (which there refers to calcium intake); the local study shows age-adjusted rates falling.

**Source:** Yong 2019 makes no comparison with other Asian countries. It reports that hip-fracture admissions in residents aged 50 and over rose from 1,487 to 2,729 a year (2000-2017), while age-adjusted rates fell; Chinese women had the highest rates.  
_Read: PubMed efetch abstract PMID 30671610 (Yong et al., Osteoporos Int 2019;30:879-886, doi 10.1007/s00198-019-04839-5); abstract only_

Current:
```
reserve that protects against fractures decades later, and hip-fracture rates in Singapore are among
the highest in Asia.
```
Proposed:
```
reserve that protects against fractures decades later. Hip fractures are a growing burden in Singapore:
as the population ages, hip-fracture admissions nearly doubled between 2000 and 2017, even though
age-adjusted rates fell [@yong2019hipfracSG].
```

#### 04-micronutrients-hydration/C3 · partly-supported · reword · confidence high
*chapter 04, Vitamin A paragraph (lines 92-94)* — Isotretinoin is itself a retinoid, so 'which is why acne drugs such as isotretinoin demand strict pregnancy prevention' links dietary vitamin A teratogenicity to the drug loosely.

**Source:** MedlinePlus: isotretinoin is in the class of medications called retinoids; high risk of pregnancy loss and birth defects; iPLEDGE requires two forms of contraception and monthly pregnancy tests. The drug's own retinoid structure, not dietary vitamin A, is the reason.  
_Read: MedlinePlus drug information, isotretinoin (medlineplus.gov/druginfo/meds/a681043.html), full page_

Current:
```
preformed vitamin A is **teratogenic** (it can cause birth defects), which is why acne drugs such as
isotretinoin demand strict pregnancy prevention.
```
Proposed:
```
preformed vitamin A is **teratogenic** (it can cause birth defects). Isotretinoin, an acne drug, is
itself a retinoid (a vitamin A derivative) and carries the same risk, which is why it demands strict
pregnancy prevention.
```

### Digestion & Absorption

#### digestion-absorption/C1 · internal-contradiction · reword · confidence high
*book/structures/bile.mol.yml molecules[0].name* — Cholic acid is labelled 'a bile salt', but cholic acid is a bile acid; bile salts are its glycine/taurine conjugates in ionised (sodium salt) form. The note already says 'main bile acid'.

**Source:** Cholic acid is a primary bile acid made from cholesterol. Conjugation with glycine or taurine produces glycocholate/taurocholate, which exist as sodium salts in bile and are what is usually called bile salts. The entry's own note calls it the 'main bile acid'.  
_Read: Web search summaries of the MeSH 'Bile Acids and Salts' definition and the PMC figure legend PMC4537926 F1 (Am J Physiol GI 2015): cholic and chenodeoxycholic acid are the primary bile acids, conjugat …_

Current:
```
name: "Cholic acid (a bile salt)"
```
Proposed:
```
name: "Cholic acid (a bile acid)"
```

#### digestion-absorption/C3 · wrong-source · reword · confidence high
*digestion-absorption.qmd, The Singapore picture item 1* — 'most tolerate the lactose in about a cup of milk [@yap1989]': the cup-of-milk figure comes from the NIH consensus; Yap 1989 reports prevalence and the symptom rate.

**Source:** 95% (73/77) of Singapore-born Chinese adults were lactase-deficient on breath hydrogen testing. Only 32% had GI symptoms from milk in their daily diet, where estimated mean intake was 157 ml/day. The paper gives no cup-of-milk tolerance threshold. The suggested wording matches the chapter's own line 149.  
_Read: PubMed abstract PMID 2743848 via NCBI E-utilities (Yap et al. 1989, Dig Dis Sci 34:1085-8)._

Current:
```
yet most tolerate the lactose in about a cup of milk [@yap1989]
```
Proposed:
```
yet only about a third report symptoms from the milk in their usual diet [@yap1989]
```

#### digestion-absorption/C4 · partly-supported · reword · confidence high
*digestion-absorption.qmd, Order and company (Meal order and accompanying foods)* — 45% peak and ~40% iAUC, plus the caveat 'small, short-term studies in prediabetes or type 2 diabetes', all rest on @shukla2019order, which is a single prediabetes study.

**Source:** In 15 adults with prediabetes, one meal per order over 180 min: the incremental glucose peak was 45.8% lower with protein and vegetables first and the iAUC 38.8% lower, so the numbers are correct. The type 2 diabetes evidence appears only as the authors' description of earlier work, e.g. their crossover study in 16 people with T2D. The cited paper is one prediabetes study, not several studies.  
_Read: PubMed abstract PMID 30101510 via E-utilities, plus PMC full text PMC7398578 (Shukla et al. 2019, Diabetes Obes Metab 21:377-81)._

Current:
```
These figures come from small, short-term studies in
prediabetes or type 2 diabetes, and data on long-term control are weaker [@shukla2019order].
```
Proposed:
```
These figures come from a single small, short-term study (15 adults with prediabetes, one meal in each
order), in line with earlier findings in type 2 diabetes, and data on long-term control are weaker [@shukla2019order].
```

#### digestion-absorption/S1 · partly-supported · reword · confidence high
*digestion-absorption.qmd, Check yourself (mixed-rice plate, meal order)* — Follow-on from C4: the plural 'small, short-term studies in people with prediabetes' overstates the evidence, because the 45% figure comes from one study (Shukla 2019).

**Source:** The 45.8% peak reduction comes from one 15-participant prediabetes crossover study. No other prediabetes study is cited for this figure.  
_Read: PMC full text PMC7398578 (same as C4)._

Current:
```
In small, short-term studies in people with prediabetes, this order lowered the glucose peak by
roughly 45%; data on long-term control are weaker.
```
Proposed:
```
In a small, short-term study in people with prediabetes, this order lowered the glucose peak by
roughly 45%; data on long-term control are weaker.
```

#### digestion-absorption/C5 · partly-supported · reword · confidence high
*digestion-absorption.qmd, Food–drug interactions callout* — Saying CYP3A4 'breaks many drugs down before they are absorbed' is imprecise. The enzyme carries out gut-wall first-pass metabolism during absorption, before the drug reaches the systemic circulation.

**Source:** CYP3A4 sits in enterocytes of the small intestine and colon, and in the liver. Oral drugs can be metabolised twice before reaching the systemic circulation, which lowers oral bioavailability. Grapefruit furanocoumarins irreversibly inactivate intestinal CYP3A4. More than 85 drugs are known or predicted to interact; 43 of these interactions can be serious.  
_Read: PMC full text PMC3589309 (Bailey, Dresser & Arnold 2013, CMAJ 185:309-16); PubMed record PMID 23184849 confirmed._

Current:
```
the enzyme that normally breaks many drugs down before they are absorbed
```
Proposed:
```
the gut-wall enzyme that normally breaks down part of each dose of many drugs as they are absorbed, before they reach the bloodstream
```

### Integrative Metabolism

#### integrative-metabolism/C2 · unsupported · reword · confidence high
*integrative-metabolism.qmd #sec-exercise, callout 'Is there a fat-burning zone?'* — 'Harder exercise burns more total energy, and more total fat, per minute' is uncited and overgeneral; fat oxidation peaks at moderate intensity.

**Source:** Achten 2002: fat oxidation peaked at about 64% VO2max (zone 55-72%), dropped markedly above that, and was negligible above about 89% VO2max. Brooks: beyond the crossover point, more power means relatively more carbohydrate and less lipid oxidation. So more fat per minute holds only up to moderate intensity.  
_Read: PubMed abstracts PMID 7928844 (Brooks & Mercier 1994) and PMID 11782653 (Achten et al. 2002) via E-utilities_

Current:
```
It also burns less energy in total. Harder exercise burns more total
energy, and more total fat, per minute.
```
Proposed:
```
It also burns less energy in total. Moving from gentle to moderate
exercise burns more total energy, and more total fat, per minute; total fat burning peaks at a
moderate intensity and falls away in very hard efforts, which run mainly on carbohydrate
[@achten2002fatmax].
```
New citation:
```bibtex
@article{achten2002fatmax,
  author  = {Achten, Juul and Gleeson, Michael and Jeukendrup, Asker E.},
  title   = {Determination of the exercise intensity that elicits maximal fat oxidation},
  journal = {Medicine and Science in Sports and Exercise},
  year    = {2002},
  volume  = {34},
  number  = {1},
  pages   = {92--97},
  pmid    = {11782653},
  doi     = {10.1097/00005768-200201000-00015}
}
```

#### integrative-metabolism/C4 · partly-supported · reword · confidence high
*integrative-metabolism.qmd 🍜 callout 'How do intermittent fasting and the ketogenic diet work?'* — The trial compared TRE plus calorie restriction with calorie restriction alone; 'not superior to plain daily calorie restriction' slightly misstates the comparison.

**Source:** 139 adults with obesity, all on the same calorie-restricted diet, randomised to an 8am-4pm eating window or no window for 12 months. Weight change -8.0 vs -6.3 kg, net -1.8 kg (95% CI -4.0 to 0.4), not significant. So the time window added nothing significant on top of equal calorie restriction.  
_Read: PubMed abstract PMID 35443107 (Liu et al., NEJM 2022) via E-utilities_

Current:
```
and in a careful trial was not superior to plain daily calorie
restriction [@liu2022tre; @decabo2019fasting].
```
Proposed:
```
and in a careful 12-month trial, adding an eating window to calorie
restriction gave no significantly greater weight loss than the same calorie restriction alone
[@liu2022tre; @decabo2019fasting].
```

#### integrative-metabolism/C9 · partly-supported · reword · confidence high
*integrative-metabolism.qmd #sec-singapore, festivals paragraph* — A US Thanksgiving-to-New-Year study applied to Singapore's festival calendar without saying so.

**Source:** 195 US adults weighed from autumn to spring. Mean gain over the mid-November to January holidays was 0.37 kg, with a net 0.48 kg over autumn-winter that was not reversed by the next autumn. The authors say it 'probably contributes' to adult weight gain. The book's 'so it accumulates' is stronger than that, and the study is not local.  
_Read: PubMed abstract PMID 10727591 (Yanovski et al., NEJM 2000) via E-utilities_

Current:
```
But holiday weight gain is
real, modest per season and not fully reversed afterwards, so it accumulates across the years
[@yanovski2000holiday].
```
Proposed:
```
But holiday weight gain is
real: in a US study of the Thanksgiving-to-New-Year season it was modest (under half a kilogram on
average) and was not reversed in the following months, so it probably adds up across the years
[@yanovski2000holiday]. The study was American, but the same physiology applies to Singapore's
festival calendar.
```

#### integrative-metabolism/C10d · partly-supported · fix-number · confidence high
*integrative-metabolism.qmd #sec-exercise, 'hitting the wall' near 30 km* — Uncited number to check: 'near 30 km' wall.

**Source:** Rapoport cites Buman: the chance of hitting the wall peaks around mile 21 (km 33-34). His model puts glycogen failure at about mile 21 for typical runners at 80-95% VO2max, and says few hit it before mile 11. So the wall falls beyond 30 km, typically about 33-34 km.  
_Read: PubMed abstract PMID 20975938 and Europe PMC full text PMC2958805 (Rapoport, PLoS Comput Biol 2010)_

Current:
```
felt by a
marathoner near 30 km, when the glycogen is spent and only slower fat oxidation is left.
```
Proposed:
```
felt by a
marathoner most often around 33–34 km, when the glycogen is spent and only slower fat oxidation is
left [@rapoport2010marathon].
```
New citation:
```bibtex
@article{rapoport2010marathon,
  author  = {Rapoport, Benjamin I.},
  title   = {Metabolic factors limiting performance in marathon runners},
  journal = {PLoS Computational Biology},
  year    = {2010},
  volume  = {6},
  number  = {10},
  pages   = {e1000960},
  pmid    = {20975938},
  doi     = {10.1371/journal.pcbi.1000960}
}
```

#### integrative-metabolism/C12 · partly-supported · reword · confidence high
*cross-chapter: #sec-singapore Ramadan-and-diabetes paragraph vs type-2-diabetes.qmd #sec-t2d-ramadan* — Repeats the Type 2 Diabetes chapter's Ramadan section with the same three citations (salti2004epidiar, zainudin2017knowledge, lum2020fast).

**Source:** The overlap is real. Note T2D defers FAST detail to this chapter, so the FAST sentence should stay here. EPIDIAR (several-fold severe hypoglycaemia) and Lum (RCT, n=97) are stated correctly. Zainudin is misdescribed: 92 SGH patients with diabetes (89% T2), 47% hypoglycaemia last Ramadan, 37% did not monitor, 10.8% of those with hypoglycaemia kept fasting. Pruning the duplicate is an editorial call …  
_Read: PubMed abstracts PMID 15451892 (EPIDIAR), 27121922 (Zainudin 2017), 32152018 (Lum 2020) via E-utilities; type-2-diabetes.qmd lines 295-310_

Current:
```
Singapore study found nearly half of Muslim patients with type 2 diabetes had a hypoglycaemic episode
around Ramadan, many continuing to fast without self-monitoring [@zainudin2017knowledge].
```
Proposed:
```
Singapore hospital survey found that nearly half of Muslim patients with diabetes had a hypoglycaemic
episode during the previous Ramadan, over a third had not monitored their glucose, and some fasted on
through the episode [@zainudin2017knowledge].
```

### Appetite & Weight Regulation

#### appetite-weight-regulation/C1 · partly-supported · reword · confidence high
*chapter #sec-obesity, para 1* — 'Obesity is increasingly understood as a disease of a dysregulated system, not a lifestyle choice' may overstate the Lancet commission, which distinguishes clinical from preclinical obesity

**Source:** Commission defines obesity as excess adiposity with multifactorial, incompletely understood causes. Only clinical obesity (excess adiposity impairing organ/tissue/whole-person function) is a chronic systemic illness; preclinical obesity is excess adiposity with preserved function and raised risk. It explicitly separates the two (health vs illness).  
_Read: PubMed abstract PMID 39824205 via E-utilities efetch (doi 10.1016/S2213-8587(24)00316-4)_

Current:
```
Obesity is increasingly understood as a disease of a dysregulated system,
not a lifestyle choice [@rubino2025clinicalobesity].
```
Proposed:
```
Obesity is increasingly understood as a condition of a dysregulated system,
not a lifestyle choice. A 2025 commission draws a line within it: *clinical* obesity, in which excess fat
already impairs how organs or the whole person function, is a chronic disease, whereas *preclinical*
obesity, with function preserved, is a state of raised risk [@rubino2025clinicalobesity].
```

#### appetite-weight-regulation/C2 · wrong-source · replace-citation · confidence high
*chapter #sec-singapore, Nutri-Grade paragraph* — 7.1% -> 4.6% median-sugar figure and its attribution to the scheme need checking against @hpbNutriGrade

**Source:** The cited HealthHub page has no median-sugar figures. MOH rollout release: median sugar of prepacked Nutri-Grade beverages fell from 7.1% (FY2017) to 4.6% (FY2021), after manufacturers reformulated ahead of implementation following the 2019 announcement. Rollout was 30 Dec 2022, so the fall preceded the labels taking effect.  
_Read: HealthHub Nutri-Grade page (the hpbNutriGrade URL, full page); MOH newsroom 'Rollout of Nutri-Grade Mark on 30 December 2022' (full page); MOH parliamentary reply 'Effectiveness of Nutri-Grade measure …_

Current:
```
worst) is a concrete environmental lever on them, and it has worked: as manufacturers reformulated,
the median sugar content of pre-packed graded drinks fell from 7.1% to 4.6% [@hpbNutriGrade].
```
Proposed:
```
worst) is a concrete environmental lever on them, and industry responded even before it took effect: as
manufacturers reformulated ahead of the rules, the median sugar content of pre-packed graded drinks fell
from 7.1% in 2017 to 4.6% in 2021 [@mohNutriGradeRollout2022].
```
New citation:
```bibtex
@misc{mohNutriGradeRollout2022,
  author       = {{Ministry of Health, Singapore}},
  title        = {Rollout of Nutri-Grade Mark on 30 December 2022},
  year         = {2022},
  howpublished = {MOH newsroom release},
  note         = {Median sugar level of prepacked Nutri-Grade beverages 7.1\% (FY2017) to 4.6\% (FY2021); manufacturers reformulated ahead of implementation},
  url          = {https://www.moh.gov.sg/newsroom/rollout-of-nutri-grade-mark-on-30-december-2022/}
}
```

#### appetite-weight-regulation/C6 · partly-supported · add-citation · confidence high
*chapter #sec-singapore, opening paragraph* — 'Adult obesity has kept rising despite sustained public-health effort' is uncited

**Source:** Obese residents (BMI >=30) rose significantly from 10.5% in 2019-2020 to 12.7% in 2023-2024; MOH calls the trend a concern and says efforts must be sustained. Rise is documented for recent years only, so 'kept rising' should be scoped and cited. Existing mohNPHS2024 entry has a generic newsroom URL; could be updated to this release.  
_Read: MOH newsroom release 17 Oct 2025, 'National Population Health Survey 2024 shows Singaporeans are adopting healthier lifestyles - but rising obesity is a concern' (full page)_

Current:
```
insufficient. Adult obesity has kept rising despite sustained public-health effort, as a regulated,
environment-driven system predicts.
```
Proposed:
```
insufficient. Adult obesity has risen in recent years, from 10.5% in 2019–2020 to 12.7% in 2023–2024
[@mohNPHS2024], despite sustained public-health effort, as a regulated, environment-driven system
predicts.
```

#### appetite-weight-regulation/C7 · unsupported · replace-citation · confidence high
*chapter #sec-gut-peptides, ghrelin paragraph* — Learned (entrained) pre-meal ghrelin rise and 'protein suppresses ghrelin most durably' are not obviously supported by @kojima1999ghrelin / @cummings2001preprandial

**Source:** Cummings 2001 shows only a pre-meal rise in 10 people on fixed meal times. Learned rise shown in rats on a fixed meal schedule (Drazen 2006). Foster-Schubert (n=16): protein suppressed ghrelin most overall; carbohydrate suppressed more early, then rebounded. Weigle 2005: long-term high-protein diet raised ghrelin AUC.  
_Read: PubMed abstracts via E-utilities: PMID 11473029 (Cummings 2001), PMID 16179409 (Drazen 2006), PMID 18198223 (Foster-Schubert 2008); also Weigle 2005 PMID 16002798_

Current:
```
@cummings2001preprandial]. Much of the pre-meal rise is learned, entrained to a person's habitual
meal times, so hunger partly follows the clock (and the smell of the hawker centre) as well as an
empty stomach. Protein suppresses ghrelin most durably, which is part of why protein is so filling.
```
Proposed:
```
@cummings2001preprandial]. Part of the pre-meal rise appears to be learned: in rats fed on a fixed
schedule, ghrelin climbs in anticipation of the usual meal time [@drazen2006fixedmeal], so hunger may
partly follow the clock (and the smell of the hawker centre) as well as an empty stomach. In a small
human study, protein suppressed ghrelin the most overall, while after carbohydrate it rebounded above
its pre-meal level [@fosterschubert2008ghrelin], which may be part of why protein is so filling.
```
New citation:
```bibtex
@article{drazen2006fixedmeal,
  author  = {Drazen, Deborah L. and Vahl, Torsten P. and D'Alessio, David A. and Seeley, Randy J. and Woods, Stephen C.},
  title   = {Effects of a fixed meal pattern on ghrelin secretion: evidence for a learned response independent of nutrient status},
  journal = {Endocrinology},
  year    = {2006},
  volume  = {147},
  number  = {1},
  pages   = {23--30},
  pmid    = {16179409},
  doi     = {10.1210/en.2005-0973}
}
@article{fosterschubert2008ghrelin,
  author  = {Foster-Schubert, Karen E. and Overduin, Joost and Prudom, Catherine E. and Liu, Jianhua and Callahan, Holly S. and Gaylinn, Bruce D. and Thorner, Michael O. and Cummings, David E.},
  title   = {Acyl and total ghrelin are suppressed strongly by ingested proteins, weakly by lipids, and biphasically by carbohydrates},
  journal = {Journal of Clinical Endocrinology and Metabolism},
  year    = {2008 …
```

#### appetite-weight-regulation/C8 · partly-supported · reword · confidence high
*chapter #sec-singapore, food-environment paragraph* — 'most residents eat out most days' needs checking against @tan2020whereweeat

**Source:** The study surveyed 529 diners' travel to food venues. Its background says about 60% of Singaporeans eat out at least four times a week (citing National Nutrition Survey 2010) and 83% eat at or buy from hawker centres at least weekly (NEA 2019). No 'most residents eat out most days'.  
_Read: PubMed abstract PMID 33081793 via E-utilities; PMC full text PMC7574174_

Current:
```
such food within reach day and night, and most residents eat out most days [@tan2020whereweeat].
```
Proposed:
```
such food within reach day and night, and eating out is routine: in the 2010 National Nutrition Survey,
about 60% of Singaporeans ate out at least four times a week [@tan2020whereweeat].
```

### Infancy & Early Childhood

#### infancy-early-childhood/C1 · wrong-source · replace-citation · confidence high
*book/chapters/infancy-early-childhood.qmd, Breastfeeding section, PROBIT paragraph* — @kramer2008cognition is the 6.5-year PROBIT follow-up and cannot support 'had largely faded by adolescence'.

**Source:** Kramer 2008 reports only 6.5-year outcomes: verbal IQ +7.5 (CI excludes zero), performance and full-scale IQ CIs cross zero. Nothing on adolescence. Yang 2018 (16-year PROBIT follow-up): no global neurocognitive benefit; verbal benefit +1.4 after adjustment, described as substantially smaller than at 6.5 years. Note: the source is PLoS Medicine, not JAMA Pediatrics as the concern stated.  
_Read: Europe PMC record + abstract for PMID 18458209 (Kramer 2008 Arch Gen Psychiatry); PMC5909901 full text (Yang 2018 PLoS Med) and its Europe PMC record for PMID 29677187_

Current:
```
[@kramer2001probit]. Its cognitive benefit was modest, mostly verbal, and had largely faded by
adolescence [@kramer2008cognition].
```
Proposed:
```
[@kramer2001probit]. Its cognitive benefit at 6.5 years was modest and mostly verbal
[@kramer2008cognition], and by 16 years only a much smaller verbal effect remained [@yang2018probit].
```
New citation:
```bibtex
@article{yang2018probit,
  author  = {Yang, Seungmi and Martin, Richard M. and Oken, Emily and others},
  title   = {Breastfeeding during infancy and neurocognitive function in adolescence: 16-year follow-up of the {PROBIT} cluster-randomized trial},
  journal = {PLoS Medicine},
  year    = {2018}, volume = {15}, number = {4}, pages = {e1002554},
  doi     = {10.1371/journal.pmed.1002554},
  pmid    = {29677187},
  note    = {PROBIT 16-y follow-up: no global neurocognitive benefit; verbal function +1.4 (adjusted), substantially smaller than at 6.5 y.}
}
```

#### infancy-early-childhood/C3 · partly-supported · reword · confidence high
*book/chapters/infancy-early-childhood.qmd, Responsive feeding, baby-led weaning paragraph* — 'about a third of all infants gag or choke a little' misstates fangupo2016choking: about 35% choked at least once at 6 to 8 months, and gagging was measured separately.

**Source:** RCT, n=206: 35% of infants choked at least once between 6 and 8 months, with no significant difference in choking events between BLISS and controls. Gagging was reported separately as group RRs at 6 and 8 months, with no overall proportion.  
_Read: Europe PMC record + abstract for PMID 27647715 (Fangupo 2016 Pediatrics)_

Current:
```
about a third of all infants gag or choke a little while learning, whichever way they are fed
[@fangupo2016choking].
```
Proposed:
```
about a third of infants choke at least once between 6 and 8 months, at a similar rate whichever
way they are fed [@fangupo2016choking].
```

#### infancy-early-childhood/C3b · partly-supported · reword · confidence high
*book/quizzes/infancy-early-childhood.quiz.yml, q8 option 1 feedback (companion to C3)* — Same misstatement of fangupo2016choking ('gag or choke a little').

**Source:** 35% choked at least once at 6 to 8 months; choking events did not differ by method; gagging measured separately.  
_Read: Europe PMC record + abstract for PMID 27647715_

Current:
```
About a third of all infants gag or choke a little while learning, whichever method is used, so the fix is the shape
```
Proposed:
```
About a third of infants choke at least once between 6 and 8 months, whichever method is used, so the fix is the shape
```

### Childhood & Adolescence

#### childhood-adolescence/C3 · unsupported · reword · confidence high
*Singapore picture, 'Activity and eating disorders locally'* — 'prompting the whole-of-government Grow Well SG strategy' asserts a causal link to the teen activity figure.

**Source:** Grow Well SG (MOH/MOE/MSF, 21 Jan 2025) names insufficient activity among several targeted risks, but gives no activity data, cites no report card, and starts with children up to 12. Tay 2023: 23.7% of 13-17-year-olds meet 60 min/day MVPA (SHS 2015).  
_Read: MOH press release https://www.moh.gov.sg/newsroom/grow-well-sg-to-support-families--in-building-healthy-habits-in-children-/ (full); PMC9634474 full text (Tay 2023)_

Current:
```
target [@tay2023sgreportcard], prompting the whole-of-government Grow Well SG strategy [@moh_growwellsg].
```
Proposed:
```
target [@tay2023sgreportcard]. Too little physical activity is one of the habits targeted by Grow Well SG,
a whole-of-government strategy launched in 2025 that starts with children up to 12 [@moh_growwellsg].
```

### Adulthood & Working Life

#### adulthood-working-life/C1 · wrong-source · replace-citation · confidence high
*book/chapters/adulthood-working-life.qmd, Maintaining muscle mass, resistance-exercise paragraph (lines 88-91)* — 'As little as two sessions a week meaningfully preserves muscle' is cited to schoenfeld2017rtvolume, a weekly-volume vs hypertrophy meta-analysis, not a frequency or maintenance study.

**Source:** Schoenfeld 2017 (15 studies) finds a graded dose-response between weekly sets and muscle growth; it says nothing about two sessions or maintenance. WHO 2020 recommends muscle-strengthening on 2 or more days a week. Momma 2022 supports the mortality/NCD clause. (Bickel 2011 shows reduced-dose maintenance preserved hypertrophy in young but not older adults.)  
_Read: PubMed abstracts via NCBI efetch: PMID 27433992 (Schoenfeld 2017), PMID 35228201 (Momma 2022), PMID 33239350 (Bull 2020); WHO 2020 full text PMC7719906 Table 4; also checked Bickel 2011 abstract PMID  …_

Current:
```
(muscle-strengthening exercise against a load) is the necessary stimulus: as little as two sessions a
week meaningfully preserves muscle, and regular muscle-strengthening is linked to lower risk of death
and major chronic disease [@schoenfeld2017rtvolume; @momma2022strengthmortality].
```
Proposed:
```
(muscle-strengthening exercise against a load) is the necessary stimulus: guidelines ask for it on two
or more days a week [@bull2020whopa], muscle gain rises with weekly training volume
[@schoenfeld2017rtvolume], and regular muscle-strengthening is linked to lower risk of death and major
chronic disease [@momma2022strengthmortality].
```

#### adulthood-working-life/C3 · unsupported · fix-number · confidence high
*book/cases/rahmat-shift-runner.case.yml, node q-fuel, option b text* — Distractor's '8-10 g/kg' carb-loading figure is not in the chapter; source believed to give 10-12 g/kg/day.

**Source:** Carbohydrate loading: preparation for events over 90 min of sustained or intermittent exercise, 36-48 h of 10-12 g/kg body weight per 24 h. 8-10 g/kg is not the loading figure (8-12 g/kg/d is the 'very high' daily training band).  
_Read: Full text of the Dietitians of Canada copy of the position paper (dietitians.ca noap-position-paper.pdf), carbohydrate guidelines table p.15_

Current:
```
text: "\"Yes, carb-load with 8–10 g/kg the day before and take a sports drink every session to be safe.\""
```
Proposed:
```
text: "\"Yes, carb-load with 10–12 g/kg the day before and take a sports drink every session to be safe.\""
```

#### adulthood-working-life/C4 · partly-supported · reword · confidence high
*book/chapters/adulthood-working-life.qmd, The Singapore picture, activity paragraph (line 293)* — '150-300 minutes a week' omits 'moderate-intensity (aerobic)', which both SPAG 2022 and WHO 2020 specify.

**Source:** SPAG: at least 150-300 minutes of moderate-intensity aerobic activity per week, plus muscle-strengthening at least two days a week. WHO: 150-300 min moderate-intensity or 75-150 min vigorous aerobic activity, plus muscle-strengthening on 2 or more days.  
_Read: HPB newsroom page on SPAG 2022 (hpb.gov.sg, full page); WHO 2020 abstract PMID 33239350 and full text PMC7719906 Table 4_

Current:
```
international target of 150–300 minutes a week plus muscle-strengthening on two or more days
```
Proposed:
```
international target of 150–300 minutes of moderate-intensity aerobic activity a week plus muscle-strengthening on two or more days
```

### Pregnancy & Lactation

#### pregnancy-lactation/C1 · unsupported · fix-number · confidence high
*pregnancy-lactation.qmd, GDM foetal hyperinsulinaemia callout* — The 4-12 week postpartum test timing sits in a sentence cited to @bellamy2009, a risk meta-analysis. Check it against the ACE GDM guideline.

**Source:** ACE recommends a 2-point 75 g OGTT 6 to 12 weeks after delivery, then diabetes screening every 1 to 3 years (ideally annually). It never gives 4 to 12 weeks. Bellamy gives only the risk (RR 7.43), not the timing.  
_Read: ACE Appropriate Care Guide 'GDM: an update on screening, diagnosis, and follow-up' (Aug 2022), full-text PDF from isomer-user-content.by.gov.sg (text extracted). Bellamy 2009 abstract via Europe PMC ( …_

Current:
```
roughly seven-fold future risk of type 2 diabetes [@bellamy2009], so she needs a **postpartum glucose
test at 4–12 weeks** and lifelong vigilance.
```
Proposed:
```
roughly seven-fold future risk of type 2 diabetes [@bellamy2009], so she needs a **postpartum glucose
test at 6–12 weeks**, then a diabetes check every 1–3 years for life [@aceGDM2018].
```

#### pregnancy-lactation/S1 · unsupported · fix-number · confidence high
*pregnancy-lactation.qmd, referral table, GDM row (follows C1)* — The same 4-12 week timing appears in the referral table.

**Source:** ACE: test at 6 to 12 weeks after delivery, then every 1 to 3 years.  
_Read: ACE GDM guide (Aug 2022), full-text PDF, as for C1._

Current:
```
| Gestational diabetes in this pregnancy | Arrange a postpartum glucose test at 4–12 weeks, then lifelong vigilance |
```
Proposed:
```
| Gestational diabetes in this pregnancy | Arrange a postpartum glucose test at 6–12 weeks, then a check every 1–3 years |
```

#### pregnancy-lactation/S2 · unsupported · fix-number · confidence high
*pregnancy-gdm.case.yml, q-postpartum option a text (follows C1)* — The case repeats the 4-12 week timing in the correct option.

**Source:** ACE: 6 to 12 weeks after delivery.  
_Read: ACE GDM guide (Aug 2022), full-text PDF, as for C1._

Current:
```
a test at 4 to 12 weeks, then regular checks.
```
Proposed:
```
a test at 6 to 12 weeks, then regular checks.
```

#### pregnancy-lactation/S3 · unsupported · fix-number · confidence high
*pregnancy-gdm.case.yml, q-postpartum option a feedback (follows C1)* — The case feedback repeats the 4-12 week timing.

**Source:** ACE: 6 to 12 weeks after delivery, then every 1 to 3 years.  
_Read: ACE GDM guide (Aug 2022), full-text PDF, as for C1._

Current:
```
so postpartum testing at 4 to 12 weeks and ongoing screening matter.
```
Proposed:
```
so postpartum testing at 6 to 12 weeks and screening every 1 to 3 years matter.
```

#### pregnancy-lactation/S7 · partly-supported · reword · confidence high
*pregnancy-lactation.qmd, energy section, lactation paragraph (follows C4)* — 'Lactation is the one stage where the phrase nearly fits' overstates the contrast. The source also gives 675 gross and 505 net.

**Source:** FAO: 675 kcal gross, 170 kcal from fat, 505 kcal/day net for the first 6 months. Undernourished women need the full 675.  
_Read: FAO 2004 lactation chapter (fao.org/4/y5686e/y5686e0b.htm), full text._

Current:
```
Lactation is the one stage where the phrase nearly fits. Making milk costs about 670 kcal a day;
about 170 kcal of that comes from the fat a woman laid down in pregnancy, leaving a *net* extra
requirement of roughly 450–500 kcal/day, with more fluid too [@faoEnergy2004].
```
Proposed:
```
Lactation asks only a little more. Making milk costs about 675 kcal a day;
about 170 kcal of that comes from the fat a woman laid down in pregnancy, leaving a *net* extra
requirement of roughly 500 kcal/day, little more than in the third trimester, with more fluid too
[@faoEnergy2004].
```

#### pregnancy-lactation/S8 · partly-supported · reword · confidence high
*requirement-dial.yml, Energy 'why' (follows C4)* — The dial repeats that 'eating for two' only nearly fits lactation.

**Source:** Net lactation need is about 505 kcal/day vs about 450-475 kcal/day in the third trimester.  
_Read: FAO 2004 lactation and pregnancy chapters, full text._

Current:
```
why: "Modest in pregnancy and concentrated in the second and third trimesters, and highest in lactation, for milk production. 'Eating for two' only nearly fits lactation."
```
Proposed:
```
why: "Modest in pregnancy and concentrated in the second and third trimesters. Lactation is highest, for milk production, but fat laid down in pregnancy covers part of the cost, so the net need is only a little above the third trimester's."
```

#### pregnancy-lactation/S9 · supported · add-citation · confidence high
*pregnancy-lactation.qmd, lactation practical points, caffeine bullet (follows C5)* — The lactation caffeine figure of 200-300 mg/day is uncited.

**Source:** LactMed: 300-500 mg/day might be safe for most mothers, while European authorities set 200 mg. Preterm and young newborns clear caffeine slowly, so mothers of these infants should take less.  
_Read: LactMed 'Caffeine' summary via Europe PMC REST (PMID 30000527, NICHD Drugs and Lactation Database), abstract/summary text._

Current:
```
- Caffeine up to about 200–300 mg a day is compatible with breastfeeding.
```
Proposed:
```
- Caffeine up to about 200–300 mg a day is compatible with breastfeeding, with less for a preterm or
  newborn baby, who clears it slowly [@lactmedCaffeine].
```
New citation:
```bibtex
@misc{lactmedCaffeine,
  author       = {{National Institute of Child Health and Human Development}},
  title        = {Caffeine},
  howpublished = {Drugs and Lactation Database (LactMed), Bethesda (MD)},
  year         = {2006},
  note         = {Updated continuously. PMID: 30000527. 300--500 mg/day may be safe for most mothers; European authorities 200 mg; lower for preterm/newborn infants.}
}
```

#### pregnancy-lactation/C6 · wrong-source · replace-citation · confidence high
*pregnancy-lactation.qmd, haemodilution and iron deficiency section (WHO dose, Cochrane outcome)* — The WHO 30-60 mg dose is cited to Cochrane (@penarosas2015iron), not the WHO guideline. The 'early third trimester' timing was also checked. The '28 days' and choline items are in S11-S14.

**Source:** WHO: 30-60 mg elemental iron plus 400 µg folic acid daily. Cochrane: iron cut maternal anaemia (RR 0.30) and iron deficiency, but low birthweight (RR 0.84, 0.69-1.03) was not significant. Loy: 'nearly three-quarters...iron deficient in the early third trimester' at 26-28 wk, so that wording stands.  
_Read: Peña-Rosas 2015 Cochrane abstract via Europe PMC (PMID 26198451). WHO ELENA 'Daily iron and folic acid supplementation during pregnancy' page, which names the ANC positive-pregnancy-experience guideli …_

Current:
```
Daily oral iron
(WHO: 30–60 mg with folic acid) reduces maternal anaemia and low birth weight [@penarosas2015iron].
```
Proposed:
```
Daily oral iron
(WHO: 30–60 mg elemental iron with folic acid [@whoAntenatal2016]) reduces maternal anaemia and iron
deficiency, though its effect on low birth weight is less certain [@penarosas2015iron].
```

#### pregnancy-lactation/S13 · partly-supported · add-hedge · confidence high
*pregnancy-lactation.qmd, micronutrient list, choline/DHA bullet (follows C6)* — The choline claims rest on a small trial (@caudill2018choline, n=26), which also does not show that most women fall short. The citations are pooled at the end of the sentence.

**Source:** Caudill: RCT with 13 per arm, 930 vs 480 mg/day choline in the third trimester; faster infant processing speed. Wallace: NHANES, only 8.5% of US pregnant women meet the choline AI.  
_Read: Caudill 2018 abstract via Europe PMC (PMID 29217669). Wallace & Fulgoni 2017 abstract via Europe PMC (PMID 28783055, DOI 10.3390/nu9080839)._

Current:
```
- **Choline** supports foetal brain development, and most pregnant women fall short of it;
  **docosahexaenoic acid (DHA)**, a marine omega-3 fatty acid, modestly reduces preterm birth
  [@middleton2018omega3; @caudill2018choline].
```
Proposed:
```
- **Choline** may support foetal brain development, though the human evidence so far comes from small
  trials [@caudill2018choline], and most pregnant women in US surveys fall short of it
  [@wallace2017choline]; **docosahexaenoic acid (DHA)**, a marine omega-3 fatty acid, modestly reduces
  preterm birth [@middleton2018omega3].
```
New citation:
```bibtex
@article{wallace2017choline,
  author  = {Wallace, Taylor C. and Fulgoni, Victor L.},
  title   = {Usual choline intakes are associated with egg and protein food consumption in the {United States}},
  journal = {Nutrients},
  year    = {2017}, volume = {9}, number = {8}, pages = {839},
  doi     = {10.3390/nu9080839},
  pmid    = {28783055},
  note    = {NHANES: only ~8.5\% of US pregnant women meet the choline AI.}
}
```

### Menopause & Midlife Health

#### menopause-midlife/C1 · unsupported · reword · confidence high
*chapter, Bone section, mechanical-loading paragraph (@watson2018liftmor)* — "where supplements alone did not": the LIFTMOR control arm did home-based low-intensity exercise, not supplements alone.

**Source:** RCT, n=101 women with low bone mass: 8 months of supervised HiRIT vs a home-based, low-intensity exercise programme (CON). LS BMD +2.9% vs -1.2%, FN +0.3% vs -1.9%. The abstract mentions no supplement arm.  
_Read: Europe PMC record for PMID 28975661 (abstract), DOI 10.1002/jbmr.3284_

Current:
```
and impact training held or even modestly raised bone density where supplements alone did not
```
Proposed:
```
and impact training held or even modestly raised bone density where a home-based, low-intensity exercise programme did not
```

#### menopause-midlife/C2a · partly-supported · reword · confidence high
*chapter, Soy and hot flushes, NAMS sentence and model patient line* — NAMS 2023 does not recommend soy foods, extracts or S-equol for flushes, which sits uneasily with 'reasonable to try'. The chapter also narrows NAMS to 'soy or isoflavone supplements'.

**Source:** Not recommended (Level II): soy foods and soy extracts, and the soy metabolite equol, along with other options. Hormone therapy remains the most effective treatment. Saying 'not hormone therapy, don't count on it' is consistent; 'reasonable to try' as a flush measure is not.  
_Read: Europe PMC record for PMID 37252752 (abstract), DOI 10.1097/gme.0000000000002200_

Current:
```
North American Menopause Society does not recommend soy or isoflavone supplements as a treatment for
flushes [@namsNonhormone2023]. The line to give a patient: *soy foods are a fine, healthy part of your diet and
reasonable to try, but they are not hormone therapy and I would not count on them to fix the flushes.*
```
Proposed:
```
North American Menopause Society does not recommend soy foods, soy extracts or equol as a treatment for
flushes [@namsNonhormone2023]. The line to give a patient: *soy foods are a fine, healthy part of your diet,
but they are not hormone therapy and I would not count on them to fix the flushes.*
```

#### menopause-midlife/C3 · partly-supported · reword · confidence high
*chapter, Soy and hot flushes, equol sentence (@aso2012sequol)* — Text says 'preliminary trials' (plural); the source is a single RCT.

**Source:** One multicentre double-blind RCT: 160 equol non-producing postmenopausal Japanese women, 10 mg/day S-equol vs placebo for 12 weeks. Hot-flush frequency fell 58.7% vs 34.5% (p=0.009). The authors call it the first such trial.  
_Read: Europe PMC record for PMID 21992596 (abstract), DOI 10.1089/jwh.2011.2753_

Current:
```
non-producers helps in preliminary trials [@aso2012sequol]
```
Proposed:
```
non-producers helped in one small placebo-controlled trial, a preliminary finding [@aso2012sequol]
```

#### menopause-midlife/C4 · wrong-source · replace-citation · confidence high
*chapter, weight section P2, second @greendale2019swanBodyComp* — Greendale 2019 covers total fat and lean mass only, so the hip-to-abdomen redistribution needs another source.

**Source:** Greendale 2019 used DXA total fat and lean mass and states it was 'unable to consider' regional body composition or visceral fat. Lovejoy 2008 (CT, 4 years): all women gained subcutaneous abdominal fat with age, but only those becoming postmenopausal gained visceral fat. No source checked measured the hips.  
_Read: Greendale 2019: Europe PMC abstract plus PMC6483504 full text (limitations paragraph). El Khoudary 2020: Europe PMC abstract only (AHA full text returned 403). Lovejoy 2008: Europe PMC record for PMID …_

Current:
```
lean (muscle) mass falls, and fat redistributes from the hips to the abdomen, the visceral, metabolically
active depot (see the *Energy Balance* chapter) [@greendale2019swanBodyComp].
```
Proposed:
```
lean (muscle) mass falls [@greendale2019swanBodyComp], and fat shifts towards the abdomen, the visceral,
metabolically active depot (see the *Energy Balance* chapter) [@lovejoy2008visceral].
```
New citation:
```bibtex
@article{lovejoy2008visceral,
  author  = {Lovejoy, J. C. and Champagne, C. M. and de Jonge, L. and Xie, H. and Smith, S. R.},
  title   = {Increased visceral fat and decreased energy expenditure during the menopausal transition},
  journal = {International Journal of Obesity},
  year    = {2008}, volume = {32}, number = {6}, pages = {949--958},
  doi     = {10.1038/ijo.2008.25},
  pmid    = {18332882},
  note    = {4-y longitudinal CT/DXA (n=156): all women gained subcutaneous abdominal fat with age; only those becoming postmenopausal gained visceral fat; sleeping EE and fat oxidation fell more at menopause.}
}
```

#### menopause-midlife/C5a · partly-supported · fix-number · confidence high
*chapter, Bone section P1 (@greendale2012swanBone)* — The fast-loss window is given as -1 to +2-3 years; SWAN defines it as 1 year before to 2 years after the FMP.

**Source:** Loss began 1 year before the FMP and slowed (but did not stop) 2 years after. Rates were greatest from 1 year before through 2 years after the FMP (the 'transmenopause'). 7.38% of LS BMD was lost in the transmenopause. Chinese and Japanese ancestry had faster loss.  
_Read: Europe PMC record for PMID 21976317 (abstract), DOI 10.1002/jbmr.534_

Current:
```
two to three years after, reaching roughly 2% a year
```
Proposed:
```
about two years after, reaching roughly 2% a year
```

#### menopause-midlife/C5b · partly-supported · fix-number · confidence high
*diagram menopause-timeline, bone layer caption (part of C5)* — The caption says 'two or three years after'; SWAN says 2 years. The diagram note (-1 to +2) and quiz q3 c ('roughly 3-year window', which equals -1 to +2) are already consistent with SWAN and need no change.

**Source:** SWAN transmenopause = 1 year before through 2 years after the FMP.  
_Read: Europe PMC record for PMID 21976317 (abstract)_

Current:
```
year before the FMP to two or three years after, reaching roughly 2% a year and steeper at the
```
Proposed:
```
year before the FMP to about two years after, reaching roughly 2% a year and steeper at the
```

#### menopause-midlife/C8 · partly-supported · reword · confidence high
*chapter, at-a-glance local symptom paragraph (@chim2002sgSymptoms; @logan2023iwhp)* — 'far down the list' overstates IWHP, where hot flushes ranked fifth of the top five; it fits Chim 2002 only.

**Source:** Chim 2002 (n=495): aching joints and muscles 51.4% vs hot flushes 17.6%; classical symptoms less common than somatic ones. IWHP (n=1054): top five were joint/muscle discomfort, sleep problems, vaginal dryness, exhaustion, then hot flushes.  
_Read: Europe PMC records for PMID 12034514 and PMID 37806008 (abstracts)_

Current:
```
the commonest complaints are aching joints and muscles and poor sleep, with hot flushes far down the list
```
Proposed:
```
the commonest complaints are aching joints and muscles and poor sleep, with hot flushes reported less often
```

#### menopause-midlife/C10 · partly-supported · reword · confidence high
*case menopause-soy, q-safety option a feedback* — 'linked to a lower risk of breast cancer, even for women who've had it': the survivor data are on recurrence and mortality.

**Source:** Shu 2009 (n=5033 survivors): highest vs lowest soy-protein quartile, mortality HR 0.71 and recurrence HR 0.68, in both ER+ and ER- disease and with or without tamoxifen. Nechuta 2012 (pooled n=9514): recurrence HR 0.75 (significant); mortality reductions not significant.  
_Read: Europe PMC records for PMID 19996398 and PMID 22648714 (abstracts)_

Current:
```
show soy *foods* are safe and linked to a lower risk of breast cancer, even for women who've had it.
```
Proposed:
```
show soy *foods* are safe, linked to a lower risk of breast cancer and, in women who've had it, to lower recurrence.
```

### Healthy Ageing

#### healthy-ageing/C2 · partly-supported · reword · confidence high
*book/chapters/healthy-ageing.qmd, Recognising trouble para 1 (lines ~217-218)* — Frailty is listed as weight loss, weakness, slow walking and exhaustion, but Fried's phenotype has five criteria (the fifth is low physical activity), so the list is incomplete.

**Source:** Frailty is defined as three or more of: unintentional weight loss (10 lb in the past year), self-reported exhaustion, weakness (grip strength), slow walking speed and low physical activity. One or two criteria count as intermediate (pre-frail). The same four-item list also appears in undernutrition-malnutrition.qmd line ~129 and in glossary.qmd line 183.  
_Read: PubMed abstract PMID 11253156 via NCBI E-utilities efetch_

Current:
```
Unintentional weight loss is also the first listed feature of **frailty**, a clinical picture in older
age whose other features include weakness, slow walking and exhaustion [@fried2001frailty].
```
Proposed:
```
Unintentional weight loss is also the first listed feature of **frailty**, a clinical picture in older
age defined by three or more of five features: weight loss, exhaustion, weakness, slow walking and low
physical activity [@fried2001frailty].
```

#### healthy-ageing/C3 · partly-supported · reword · confidence high
*book/chapters/healthy-ageing.qmd, watch-list calcium para (lines ~99-102) and Singapore picture paras 3-4 (lines ~284-290)* — One DaHA cohort key carries three claims: the calcium absorption mechanism, the calcium shortfall, and older adults eating alone in family households. Check that the paper supports the mechanism and the eating-alone finding.

**Source:** The Discussion states that calcium absorption is impaired in later decades, so the mechanism is supported. About half had calcium intake below 70% of the RDA (median about 690-745 mg against 1000 mg), so the shortfall is supported. 93.4% lived with family, 6.7% lived alone, and 24.1% ate alone most of the time. Nothing is said about adult children working.  
_Read: PMC full text (PMID 37571385) via NCBI BioC API, all sections, Ye et al. 2023 Nutrients 15:3446_

Current:
```
many older adults eat alone even though they live with family: adult children are out at work, and the
older person eats by themselves [@ye2023daha].
```
Proposed:
```
many older adults eat alone even though they live with family: in one local cohort more than nine in ten
lived with family, yet about a quarter ate alone most of the time [@ye2023daha].
```

#### healthy-ageing/C4 · unsupported · reword · confidence high
*book/chapters/healthy-ageing.qmd, Protein para 1 (lines ~64-65)* — 'protein works only when paired with the stimulus of exercise' uses a strong 'only'; check it against the ESPEN statement.

**Source:** ESPEN says adequate protein and energy can on their own help limit and treat age-related muscle decline, and that protein combined with exercise is considered optimal. It recommends daily resistance and aerobic exercise for all older people. It does not say protein works only with exercise.  
_Read: PubMed abstract PMID 24814383 via NCBI E-utilities efetch_

Current:
```
As in adulthood, protein works only when paired with the stimulus of
exercise, especially resistance work (see the *Adulthood & Working Life* chapter) [@deutz2014espen].
```
Proposed:
```
As in adulthood, protein works best when paired with the stimulus of
exercise, especially resistance work (see the *Adulthood & Working Life* chapter) [@deutz2014espen].
```

### What a Healthy Diet Looks Like

#### dietary-guidelines-patterns/C1 · partly-supported · reword · confidence high
*chapter, Where the guidelines converge: intro sentence + convergence table (UPF row; salt x My Healthy Plate)* — US DGA 2020-2025 does not name UPF; WHO lists no explicit UPF limit; all ticks sourced only to Herforth 2019, which grades national FBDGs not WHO/AHA/DGA; salt not among plate's companion messages.

**Source:** Herforth: nearly universal = variety, some foods in higher proportion, fruit/veg, legumes, animal-source foods, limit sugar/fat/salt; wholegrains and healthy fats NOT universally echoed. DGA 2020-2025 never uses 'ultra-processed' or 'highly processed' (only processed meats). WHO: minimally processed foods are the foundation. AHA: 'choose minimally processed foods instead of ultra-processed'. Healt …  
_Read: PubMed efetch abstracts PMID 31041447 (Herforth) and 34724806 (AHA 2021); DGA 2020-2025 full PDF from dietaryguidelines.gov (text-searched); WHO healthy-diet fact sheet (full page, dated 26 Jan 2026); …_

Current:
```
Side by side, the guidelines disagree on very little. A global review of 90 national food-based dietary
guidelines found nearly universal messages [@herforth2019fbdg]:

| Shared message | My Healthy Plate | WHO | AHA 2021 | US DGA |
|---|:---:|:---:|:---:|:---:|
| Eat a variety of foods | ✓ | ✓ | ✓ | ✓ |
| Plenty of fruit & vegetables | ✓ (½) | ✓ | ✓ | ✓ |
| Prefer wholegrains | ✓ (¼) | ✓ | ✓ | ✓ |
| Include legumes / plant proteins | ✓ | ✓ | ✓ | ✓ |
| Limit free/added sugar | ✓ | ✓ | ✓ | ✓ |
| Limit salt | ✓ | ✓ | ✓ | ✓ |
| Prefer unsaturated over saturated/*trans* fat | ✓ | ✓ | ✓ | ✓ |
| Limit ultra-processed foods | not stated | ✓ | ✓ | ✓ |
```
Proposed:
```
Side by side, the guidelines disagree on very little. A global review of 90 national food-based dietary
guidelines found some messages nearly universal: eat a variety of foods, eat fruit, vegetables and
legumes, and limit sugar, fat and salt [@herforth2019fbdg]. The four guidelines compared here share a
slightly longer list, read from each one's own text [@hpbHealthyPlate; @who2020diet; @aha2021diet; @dga2020]:

| Shared message | My Healthy Plate | WHO | AHA 2021 | US DGA |
|---|:---:|:---:|:---:|:---:|
| Eat a variety of foods | ✓ | ✓ | ✓ | ✓ |
| Plenty of fruit & vegetables | ✓ (½) | ✓ | ✓ | ✓ |
| Prefer wholegrains | ✓ (¼) | ✓ | ✓ | ✓ |
| Include legumes / plant proteins | ✓ | ✓ | ✓ | ✓ |
| Limit free/added sugar | ✓ | ✓ | ✓ | ✓ |
| Limit salt | ✓ | ✓ | ✓ | ✓ |
| Prefer unsaturated over saturated/*trans* fat | ✓ | ✓ | ✓ | ✓ |
| Limit ultra-processed foods | not stated | ✓ | ✓ | not s …
```

#### dietary-guidelines-patterns/S1 · partly-supported · reword · confidence high
*chapter, Check yourself callout after convergence table ('WHO, the AHA and the US guidelines all say different things')* — Attributes the full shared core, including wholegrains and unsaturated fat, to the 90-country Herforth review; Herforth says wholegrain and healthy-fat messages are not universally echoed.

**Source:** Nearly universal: variety, fruits and vegetables, legumes, animal-source foods, limit sugar, fat and salt. WHO encourages nuts, whole grains and healthy fats, but these are not universally echoed across countries.  
_Read: PubMed efetch abstract PMID 31041447_

Current:
```
The guidelines differ in wording and pictures, but their substance is the same short list: a review of
90 national food-based guidelines found nearly universal messages. Advice can therefore rest on that
shared core (variety, plenty of fruit and vegetables, wholegrains, legumes, limits on free sugar and
salt, and unsaturated fat in place of saturated and *trans* fat), whichever guideline the patient has
read.
```
Proposed:
```
The guidelines differ in wording and pictures, but their substance is the same short list: a review of
90 national food-based guidelines found variety, fruit and vegetables, legumes and limits on sugar,
fat and salt nearly universal, and the major guidelines add wholegrains and unsaturated fat in place
of saturated and *trans* fat. Advice can therefore rest on that shared core, whichever guideline the
patient has read.
```

#### dietary-guidelines-patterns/C3 · partly-supported · reword · confidence high
*chapter, The Singapore picture P1* — 'Two biggest levers' are brown rice and water-over-sugary-drink, but cited NNS 2022 figures are wholegrain and sodium; no local sugar datum for the drink lever.

**Source:** NNS 2022: 4% of staples wholegrain; 9 in 10 exceed sodium; sugar-sweetened beverages are the single biggest source of dietary sugar, 52% of intake; 67% within the 10% energy sugar limit.  
_Read: MOH newsroom release 27 Sep 2023 'National health surveys highlight need to focus on healthy diets and lifestyles' (full page)_

Current:
```
exceed the recommended sodium intake [@mohNNS2022].
```
Proposed:
```
exceed the recommended sodium intake; sugar-sweetened drinks are the single biggest source of dietary sugar, supplying about half of it [@mohNNS2022].
```

#### dietary-guidelines-patterns/C7 · partly-supported · add-citation · confidence high
*chapter, My Healthy Plate paragraph* — 'dates from 2014 (page refreshed in 2024)' uncited.

**Source:** HPB introduced My Healthy Plate on 11 July 2014 (half fruit/veg, quarter wholegrains, quarter protein; healthier oils, water, stay active). The HealthHub page now shows last reviewed 27 June 2025, not 2024. The hpbHealthyPlate bib note 'page refreshed 2024' should also be updated.  
_Read: HPB newsroom press release dated 11 July 2014 (full page); HealthHub QQH page (full: 'last reviewed 27 June 2025', no 2014 date)_

Current:
```
My Healthy Plate dates from 2014 (the page was refreshed in 2024); it remains current
national guidance.
```
Proposed:
```
My Healthy Plate dates from 2014 [@hpb2014plate] (the HealthHub page was last reviewed in 2025); it remains current
national guidance.
```
New citation:
```bibtex
@misc{hpb2014plate,
  author       = {{Health Promotion Board Singapore}},
  title        = {Health Promotion Board Introduces My Healthy Plate to Inculcate Healthy Eating Habits Amongst Singaporeans},
  year         = {2014},
  note         = {Press release, 11 July 2014; half fruit and vegetables, quarter wholegrains, quarter protein, plus healthier oils, water and staying active},
  howpublished = {\url{https://www.hpb.gov.sg/newsroom/health-promotion-board-introduces-my-healthy-plate-to-inculcate-healthy-eating-habits-amongst-singaporeans/}}
}
```

### Evidence vs Hype

#### evidence-vs-hype/C1 · partly-supported · add-citation · confidence high
*evidence-vs-hype.qmd, Everyday questions table, sugar row (line 176); claim-analyzer.yml sugar.outcome* — The NEJM trial showed no behavioural effect of sucrose. The 'parental expectancy' part rests on a separate expectancy study (Hoover & Milich 1994), so the citation does not support it.

**Source:** Wolraich: in a double-blind trial, neither sucrose nor aspartame affected children's behaviour or cognition. It does not mention expectancy. Hoover & Milich: all children got placebo, yet mothers told their child had sugar rated him more hyperactive and behaved differently. That is direct support for expectancy.  
_Read: PubMed abstracts via NCBI E-utilities efetch: PMID 8277950 (Wolraich 1994 NEJM) and PMID 7963081 (Hoover & Milich 1994, J Abnorm Child Psychol). Abstracts only._

Current:
```
Directly tested in blinded trials, and disproven: the "sugar high" is parental expectancy [@wolraich1994sugar]
```
Proposed:
```
Directly tested in blinded trials, and disproven [@wolraich1994sugar]: the "sugar high" is largely parental expectancy [@hoover1994sugar]
```
New citation:
```bibtex
@article{hoover1994sugar,
  author  = {Hoover, D. W. and Milich, R.},
  title   = {Effects of sugar ingestion expectancies on mother-child interactions},
  journal = {Journal of Abnormal Child Psychology},
  year    = {1994}, volume = {22}, number = {4}, pages = {501--515},
  pmid    = {7963081}, doi = {10.1007/BF02168088}
}
```

#### evidence-vs-hype/C2 · partly-supported · move-citation · confidence high
*evidence-vs-hype.qmd, traps list, bullet 4 (lines 133-135)* — TREAT compared 16:8 TRE with three structured meals, not with calorie restriction. Only lin2023tre supports 'no better than ordinary calorie restriction'.

**Source:** TREAT: the control arm ate 3 structured meals a day. The between-group difference was -0.26 kg (NS), and TRE was 'not more effective' than eating throughout the day. Lin: TRE beat control, but TRE vs 25% calorie restriction differed by 0.81 kg (P=0.68), so not more effective than CR.  
_Read: PubMed abstracts via E-utilities: PMID 32986097 (TREAT, JAMA Intern Med 2020) and PMID 37364268 (Lin, Ann Intern Med 2023). Abstracts only._

Current:
```
trials show its weight effect is no better than ordinary calorie restriction
  [@lowe2020treat; @lin2023tre].
```
Proposed:
```
trials show its weight effect is no better than three regular meals a day [@lowe2020treat] or than
  ordinary calorie restriction [@lin2023tre].
```

#### evidence-vs-hype/C4 · partly-supported · add-citation · confidence high
*evidence-vs-hype.qmd, supplements table, Not indicated row (line 215)* — The key is the vitamin D paper. The null fish-oil result is in a companion paper, yet the row says 'vitamin D and fish oil'.

**Source:** Vitamin D: no reduction in invasive cancer (HR 0.96) or major CV events (HR 0.97). n-3: no reduction in major CV events (HR 0.92) or cancer (HR 1.03). But total MI, a secondary endpoint, was lower (HR 0.72), so 'major cardiovascular events' is the accurate scope.  
_Read: PubMed abstracts via E-utilities: PMID 30415629 (VITAL vitamin D, NEJM 2019;380:33-44) and PMID 30415637 (VITAL marine n-3, NEJM 2019;380:23-32). Abstracts only._

Current:
```
In the large VITAL trial, vitamin D and fish oil did not reduce cancer or cardiovascular events [@vital2019]
```
Proposed:
```
In the large VITAL trial, vitamin D and fish oil did not reduce cancer or major cardiovascular events [@vital2019; @manson2019vital]
```

#### evidence-vs-hype/C7 · wrong-source · replace-citation · confidence high
*evidence-vs-hype.qmd, Singapore picture, quotation (lines 261-263)* — The chapter quotes 'cannot and should not replace a balanced diet', but the bib note paraphrases 'cannot replace'. Verify the exact wording.

**Source:** The exact sentence 'Health supplements cannot and should not replace a balanced diet' is in the MOH oral reply. The HSA HealthHub page does not mention a balanced diet. It does call 'Detoxify your body' claims without scientific evidence.  
_Read: Full pages: moh.gov.sg/newsroom/vitamins-and-health-supplements (MOH Parliamentary QA, oral reply, 20 Feb 2018) and healthhub.sg/live-healthy/understandinghealthsupplements_hsa. Two web searches found …_

Current:
```
HealthHub states plainly that
supplements "cannot and should not replace a balanced diet" and that detox claims are
unevidenced;
```
Proposed:
```
The Ministry of Health states plainly that
health supplements "cannot and should not replace a balanced diet" [@mohSupplements2018], and HealthHub
calls detox claims unevidenced;
```
New citation:
```bibtex
@misc{mohSupplements2018,
  author       = {{Ministry of Health Singapore}},
  title        = {Vitamins and Health Supplements (oral reply to Parliamentary Question)},
  year         = {2018},
  note         = {20 February 2018. "Health supplements cannot and should not replace a balanced diet"; HSA post-market testing of over 900 supplements in five years removed eight},
  howpublished = {\url{https://www.moh.gov.sg/newsroom/vitamins-and-health-supplements}}
}
```

#### evidence-vs-hype/S2 · partly-supported · add-hedge · confidence high
*evidence-vs-hype.qmd, Everyday questions table, gluten-free row (line 177)* — Found while checking C9: 'there is no evidence of benefit' overstates the cited review.

**Source:** Without a gluten-related disease, high-quality evidence for benefit is 'neither robust nor convincing'. The IBS/NCGS data are conflicting and not definitive, with some positive trials. The review supports the cost claim (GF products about 242% dearer) and lower fibre, folate and iron.  
_Read: PMC5866307 full text (first 100k chars) and the PubMed abstract for PMID 29606920._

Current:
```
Without coeliac disease, there is no evidence of benefit, and it can worsen diet quality and raise cost [@glutenFreeNonCeliac]
```
Proposed:
```
Without coeliac disease, there is no convincing evidence of benefit, and it can worsen diet quality and raise cost [@glutenFreeNonCeliac]
```

### Assessing Diet & Talking to Patients

#### 06-dietary-assessment/S2 · partly-supported · reword · confidence high
*06-dietary-assessment.qmd #sec-singapore, first sentence (companion to C3)* — The Singapore picture repeats the over-broad scope: Nutri-Grade 'reaches the freshly-prepared drinks people actually buy, the bubble tea and the kopi'.

**Source:** Freshly prepared drinks are covered from 30 Dec 2023, but businesses with revenue of S$1 million or less and fewer than 10 premises are exempt from these measures.  
_Read: HPB 'Measures for Nutri-Grade' page (full page), as for C3_

Current:
```
Nutri-Grade is useful in practice because it now reaches the freshly-prepared drinks people actually
buy, the bubble tea and the *kopi*, so "grade your drink" is a real exercise and not a supermarket
abstraction [@hpbNutriGrade].
```
Proposed:
```
Nutri-Grade is useful in practice because it now reaches many of the freshly-prepared drinks people
actually buy, such as bubble tea and coffee from the larger chains, so "grade your drink" is a real
exercise and not a supermarket abstraction [@hpbNutriGrade].
```

#### 06-dietary-assessment/C7 · partly-supported · reword · confidence high
*06-dietary-assessment.qmd #sec-overview, second paragraph* — Do both sources support 'least prepared' in this applied territory [@crowley2019; @aclm2022comp]?

**Source:** Crowley: nutrition is under-taught in every setting. The gaps affect students' and recent graduates' knowledge, skills and confidence to give nutrition care and counselling. It makes no 'least prepared' comparison. ACLM 2022 is a competency statement with no data on preparedness.  
_Read: Europe PMC abstract PMID 31538623 (Crowley 2019, Lancet Planet Health); PMC9644148 full text (Lianov et al. 2022, Am J Lifestyle Med, PMID 36389051) via pmc.ncbi.nlm.nih.gov_

Current:
```
Graduates consistently report feeling least prepared in exactly this applied territory of talking to
patients about food [@crowley2019; @aclm2022comp].
```
Proposed:
```
Medical students and recent graduates report gaps in the knowledge, skills and confidence to give
nutrition care, including talking to patients about food [@crowley2019].
```

### Behaviour-Change Counselling

#### behaviour-change-counselling/C2 · partly-supported · reword · confidence high
*chapter, stages-of-change warning callout (lines 177-183)* — @mastellos2014ttm tests whether TTM-based interventions produce sustained weight loss, but the callout presents it as evidence about prediction ('not a proven predictor').

**Source:** The review's objective is the effectiveness of TTM stages-of-change-based interventions for sustained (1 year or more) weight loss. 3 RCTs gave inconclusive, low-quality evidence; very low-quality evidence of better diet and activity habits. It does not test whether a patient's stage predicts success.  
_Read: PubMed efetch abstract, PMID 24500864 (matches bib: Mastellos et al., Cochrane 2014, CD008066.pub3)_

Current:
```
## Does a patient's stage predict who will succeed?
It is tempting to read a patient's stage as a forecast. Stages-of-change is a **heuristic, not a
proven predictor**. The Cochrane evidence for it producing sustained weight loss is low-certainty
[@mastellos2014ttm]. It helps you meet a patient where they are; it does not tell you whether they'll
succeed, so don't present it as fact.
```
Proposed:
```
## Is stages-of-change a proven tool?
It is tempting to treat a patient's stage as a forecast, or stage-matched counselling as a proven
method. Stages-of-change is a **heuristic, not a proven method**: a Cochrane review of programmes
built on it found only inconclusive, low-certainty evidence that they produce sustained weight loss
[@mastellos2014ttm]. Use it to meet a patient where they are, not as a forecast of whether they'll
succeed, and don't present it as fact.
```

#### behaviour-change-counselling/S1 · partly-supported · reword · confidence high
*quiz q6, correct option text (follow-on to C2)* — Correct option says the model 'doesn't reliably predict sustained weight loss', conflating prediction with intervention effectiveness, which is what Mastellos 2014 tested.

**Source:** Cochrane review assessed whether TTM-based interventions produce sustained weight loss (inconclusive, low-quality evidence); it did not assess stage as a predictor. New option is 58 characters, close to the distractors (62 and 57) per the same-length rule.  
_Read: PubMed efetch abstract, PMID 24500864_

Current:
```
- text: "It is a useful heuristic but doesn't reliably predict sustained weight loss"
```
Proposed:
```
- text: "It is a useful heuristic, not a proven route to weight loss"
```

#### behaviour-change-counselling/C4 · unsupported · remove-claim · confidence high
*response-chooser.yml t1, open option feedback (line 33)* — 'a respectful opener that almost always gets a yes' is an unsourced empirical claim in island data.

**Source:** No source is attached, and no evidence was found on how often permission requests are accepted. The rest of the feedback (permission keeps clinician and patient partners) matches the chapter's MI content.  
_Read: No source cited; none needed if the frequency claim is dropped._

Current:
```
feedback: "Asking permission keeps you partners rather than adversaries, and it is a safe, respectful opener that almost always gets a yes."
```
Proposed:
```
feedback: "Asking permission keeps you partners rather than adversaries, and it is a safe, respectful way to raise the topic."
```

### Interprofessional Practice & Referral

#### interprofessional-referral/C4 · wrong-source · replace-citation · confidence high
*interprofessional-referral.qmd #sec-care-team, lines 146-147 (team-based care sentence)* — 'Team-based care is associated with better chronic-disease outcomes' is cited to two curriculum/competency documents, not outcome studies.

**Source:** ACLM 2022 is an expert-opinion consensus. It only lists learning objectives (e.g. 'Analyze the evidence for collaborative and chronic care models') and states no outcome finding. Proia 2014 Community Guide review (80 studies): team-based care raised BP control by a median 12 percentage points and lowered SBP by 5.4 mmHg, with the largest benefit when pharmacists and nurses were on the team.  
_Read: https://pmc.ncbi.nlm.nih.gov/articles/PMC9644148/ (ACLM 2022 competencies, full text); PubMed efetch PMID 24933494 abstract (Proia 2014). AfN curriculum PDF not read: it is a curriculum and cannot be  …_

Current:
```
Team-based care is associated with better chronic-disease outcomes, since the whole is more than any
one professional's slice [@aclm2022comp; @afn2021curriculum].
```
Proposed:
```
Team-based care is associated with better chronic-disease outcomes: in hypertension, for example,
teams that include nurses and pharmacists improve blood-pressure control [@proia2014teamcare]. The
whole is more than any one professional's slice.
```
New citation:
```bibtex
@article{proia2014teamcare,
  author  = {Proia, K. K. and Thota, A. B. and Njie, G. J. and Finnie, R. K. C. and Hopkins, D. P. and Mukhtar, Q. and Pronk, N. P. and Zeigler, D. and Kottke, T. E. and Rask, K. J. and Lackland, D. T. and Brooks, J. F. and Braun, L. T. and Cooksey, T. and {Community Preventive Services Task Force}},
  title   = {Team-based care and improved blood pressure control: a community guide systematic review},
  journal = {American Journal of Preventive Medicine},
  year    = {2014},
  volume  = {47},
  number  = {1},
  pages   = {86--99},
  doi     = {10.1016/j.amepre.2014.03.004},
  pmid    = {24933494}
}
```

#### interprofessional-referral/C9 · internal-contradiction · fix-number · confidence high
*advise-refer.yml scenario 2 (line 8) vs refer-or-advise.case.yml (HbA1c 9.1%)* — Island scenario says HbA1c 9%, case says 9.1%.

**Source:** The same patient (newly diagnosed T2D, eGFR 52, three medicines) is given HbA1c 9% in the diagram and 9.1% in the case persona and intro. This is trivial, but aligning the two costs one character.  
_Read: book/diagrams/advise-refer.yml line 8; book/cases/refer-or-advise.case.yml lines 18 and 27_

Current:
```
on three medicines, HbA1c 9%."
```
Proposed:
```
on three medicines, HbA1c 9.1%."
```

### Obesity & Metabolic Syndrome

#### obesity-metabolic-syndrome/C1 · unsupported · reword · confidence high
*chapter, Sleep lever paragraph (line 286)* — 'leptin-down, ghrelin-up account is echoed observationally' cites @spiegel2004, which is a controlled experiment, not an observational study.

**Source:** Abstract: randomised, 2-period, 2-condition crossover clinical study; 12 healthy young men; 2 days sleep restriction vs 2 days extension under controlled intake. Leptin -18%, ghrelin +28%, hunger +24%. Experimental, not observational; authors flag small sample.  
_Read: Europe PMC record of PMID 15583226 (abstract, structured): https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:15583226_

Current:
```
which leptin falls and ghrelin rises, is echoed observationally, but a 2025 meta-analysis of trials
```
Proposed:
```
which leptin falls and ghrelin rises, rests on a small early sleep-restriction experiment, but a 2025 meta-analysis of trials
```

#### obesity-metabolic-syndrome/C1-b · unsupported · reword · confidence high
*quiz q4, option a feedback* — Same mis-description of @spiegel2004 as observational, repeated in the quiz feedback.

**Source:** Spiegel 2004 is a randomised crossover sleep-restriction experiment in 12 men, not observational data.  
_Read: Europe PMC record of PMID 15583226 (abstract)_

Current:
```
The classic leptin-down, ghrelin-up story is echoed observationally, but a 2025 meta-analysis of trials found no reliable hormone shift
```
Proposed:
```
The classic leptin-down, ghrelin-up story comes from a small early sleep-restriction experiment, but a 2025 meta-analysis of trials found no reliable hormone shift
```

#### obesity-metabolic-syndrome/C2 · partly-supported · reword · confidence high
*chapter, The Singapore picture, para 1* — 'the ≥27.5 high-risk band has held steady at roughly 1 in 5 adults': 'stable' and the proportion need checking.

**Source:** MOH: obesity (BMI ≥30) rose significantly 10.5% to 12.7%; the BMI ≥27.5 proportion 'remained stable' at 20.7% (2019–20) vs 22.8% (2023–24). 'Stable' is MOH's own word; 22.8% is just over, not roughly, 1 in 5.  
_Read: MOH newsroom release 'National Population Health Survey 2024 shows Singaporeans are adopting healthier lifestyles, but rising obesity is a concern' (full release text): https://www.moh.gov.sg/newsroom …_

Current:
```
has held steady at roughly 1 in 5 adults [@mohNPHS2024].
```
Proposed:
```
has stayed broadly stable at just over 1 in 5 adults (20.7% to 22.8%) [@mohNPHS2024].
```

#### obesity-metabolic-syndrome/C3 · partly-supported · reword · confidence high
*chapter, 🍜 Eating out callout (caption has no 'whole day' wording and is fine)* — '38 g of fat, close to a whole day's fat in one dish' may overstate.

**Source:** HealthHub: char kway teow 744 Calories with 38 g fat, 'almost all' of a 55–60 g daily fat allowance. The book repeats the source, but 38 g is about two-thirds of 55–60 g, so 'close to a whole day' overstates. The four swaps are confirmed.  
_Read: HealthHub 'Say Yes To Lower-Calorie Hawker Foods', live at https://www.healthhub.sg/live-healthy/lower-calorie-hawker-foods (full page). The bib URL /live-healthy/say-yes-to-lower-calorie-hawker-foods …_

Current:
```
kway teow runs to roughly 744 kcal with about 38 g of fat, close to a whole day's fat in one dish
```
Proposed:
```
kway teow runs to roughly 744 kcal with about 38 g of fat, around two-thirds of a day's recommended fat (55–60 g) in one dish
```

#### obesity-metabolic-syndrome/C4 · unsupported · reword · confidence high
*quiz q6, option c (the chapter drinks line no longer says kopi-C; the case's 'kopi-C twice a day' is correct usage)* — 'Condensed-milk kopi-C' is wrong: in Singapore kopi-C is evaporated milk with sugar; plain kopi is the condensed-milk drink.

**Source:** Kopi is coffee with sugar and condensed milk; kopi-C is coffee with sugar and evaporated milk; kopi-O is black with sugar; kopi-O kosong has no sugar and no milk.  
_Read: Wikipedia 'Kopi (drink)' (full page, first 100k chars): https://en.wikipedia.org/wiki/Kopi_(drink); Makansutra 'What does C in Teh-C mean?' via search snippet only_

Current:
```
- text: "Condensed-milk kopi-C, since milk makes it more nutritious overall"
```
Proposed:
```
- text: "Kopi with condensed milk, since milk makes it more nutritious overall"
```

#### obesity-metabolic-syndrome/C6 · unsupported · add-hedge · confidence high
*chapter, Stress lever paragraph* — Stress/cortisol comfort-eating and abdominal-fat loop stated as established [@dallman2003]; Appetite & Weight Regulation calls it plausible but not proven.

**Source:** Dallman is a hypothesis paper built on rat work: 'We propose that people eat comfort food...' and 'These mechanisms, determined in rats, may explain some of the epidemic'. In humans, chronic stress raises intake in some people and lowers it in others. Not established.  
_Read: Europe PMC abstract of PMID 12975524 (PNAS 2003, PMC208820)_

Current:
```
**Stress.** Chronic stress and cortisol bias eating toward energy-dense comfort food and channel fat
to the abdomen, a self-reinforcing cycle that worsens central fat and insulin resistance
[@dallman2003].
```
Proposed:
```
**Stress.** Chronic stress and cortisol are thought to bias eating toward energy-dense comfort food
and channel fat to the abdomen, a self-reinforcing cycle that would worsen central fat and insulin
resistance [@dallman2003]. The evidence is largely animal work and human associations, so the loop
is plausible but not proven.
```

#### obesity-metabolic-syndrome/C6-b · unsupported · add-hedge · confidence high
*diagrams/mets-cluster.yml, levers > stress note* — Diagram note states the stress-cortisol loop as fact.

**Source:** The mechanism is proposed from rat studies; the human evidence is mixed.  
_Read: Europe PMC abstract of PMID 12975524_

Current:
```
note: "Chronic stress raises cortisol, which biases eating toward energy-dense comfort food and channels fat to the abdomen."
```
Proposed:
```
note: "Chronic stress and cortisol are thought to bias eating toward energy-dense comfort food and favour abdominal fat: plausible, not proven."
```

#### obesity-metabolic-syndrome/C6-d · unsupported · add-hedge · confidence high
*quiz q4, option c feedback* — Quiz feedback states stress biases eating and channels fat to the abdomen as fact.

**Source:** The mechanism is a rat-derived hypothesis; human responses to chronic stress vary (some eat more, some eat less).  
_Read: Europe PMC abstract of PMID 12975524_

Current:
```
Poor sleep measurably raises energy intake, and stress biases eating toward energy-dense comfort food and channels fat to the abdomen.
```
Proposed:
```
Poor sleep measurably raises energy intake, and chronic stress is thought to bias eating toward energy-dense comfort food and favour abdominal fat.
```

### Type 2 Diabetes

#### type-2-diabetes/C1 · supported · reword · confidence high
*quiz q7 option c (book/quizzes/type-2-diabetes.quiz.yml)* — 'Condensed-milk kopi-c' mislabels the drink: kopi-c is coffee with evaporated milk and sugar; plain kopi is the condensed-milk order.

**Source:** Guides agree: plain 'kopi' comes with sweetened condensed milk and sugar; the 'C' swaps condensed milk for evaporated milk (kopi-c = evaporated milk and sugar). So the concern is valid; the option names the wrong drink. The feedback ('Condensed-milk drinks...') needs no change.  
_Read: Web search of Singapore kopitiam ordering guides (Wikipedia 'Kopi (drink)', Honeycombers, HoneyKids Asia, Naumi Hotels) via search-result summaries_

Current:
```
- text: "Condensed-milk kopi-c, because the milk makes it more nutritious"
```
Proposed:
```
- text: "Kopi with condensed milk, because the milk makes it more nutritious"
```

#### type-2-diabetes/S1 · partly-supported · reword · confidence high
*chapter, Check yourself (Ramadan insulin patient) (type-2-diabetes.qmd ~l.323-324); repeat of C3* — Same EPIDIAR attribution as C3: the several-fold rise is attributed specifically to fasting on insulin.

**Source:** Several-fold rise in severe hypoglycaemia was for Ramadan vs other months across all patients (T1D ~4.7x, T2D ~7.5x), not stratified by insulin use in the abstract.  
_Read: Europe PMC REST abstract for PMID 15451892; abstract only_

Current:
```
Fasting on insulin raises the risk of severe hypoglycaemia several-fold, and her belief removes the
monitoring that would catch it.
```
Proposed:
```
Severe hypoglycaemia is several times more frequent during Ramadan, insulin is one of the drugs that can
cause it, and her belief removes the monitoring that would catch it.
```

#### type-2-diabetes/C5 · supported · reword · confidence high
*chapter, Preventing diabetes P1 (type-2-diabetes.qmd ~l.229-230); quiz q1* — DPP 58% and 31% are relative reductions with no absolute figure; §11d asks for relative vs absolute for a landmark trial.

**Source:** Incidence 11.0, 7.8 and 4.8 cases per 100 person-years (placebo, metformin, lifestyle); reductions 58% and 31% vs placebo; NNT over 3 years 6.9 (lifestyle) and 13.9 (metformin). Relative figures are correct; absolute figures can be added from the same source.  
_Read: Europe PMC REST abstract for PMID 11832527 (NEJM 2002); abstract only_

Current:
```
prediabetes to diabetes by 58%, outperforming metformin (31%) [@dpp2002].
```
Proposed:
```
prediabetes to diabetes by 58% relative to placebo (from about 11 to about 5 new cases per 100 people a
year), outperforming metformin (31%, about 8 per 100) [@dpp2002].
```

#### type-2-diabetes/C6 · supported · reword · confidence high
*island carb-safety-check sglt2 note (book/diagrams/carb-safety-check.yml)* — SGLT2 inhibitors classed low risk, making a lower-carbohydrate change 'reasonable'; guidance cautions about ketoacidosis with very-low-carbohydrate/ketogenic diets on an SGLT2 inhibitor.

**Source:** ADA 2026 s.5: very-low-carbohydrate eating plans should be avoided in those taking SGLT2 inhibitors because of potential ketoacidosis risk; case reports of DKA with SGLT2i plus very-low-carbohydrate or ketogenic patterns; Rec 5.26 discourages ketogenic eating in those at DKA risk on SGLT inhibition.  
_Read: PMC12690188 full text (ADA Standards of Care 2026, Section 5), read via WebFetch, first 100k characters (carbohydrate section and Rec 5.26)_

Current:
```
note: "Does not cause hypoglycaemia used alone (mind fluid/ketone advice separately)."
```
Proposed:
```
note: "Does not cause hypoglycaemia used alone, but avoid a very-low-carbohydrate or ketogenic diet on it, because the combination can cause ketoacidosis."
```

#### type-2-diabetes/S4 · supported · add-citation · confidence high
*chapter, after drug-class table (type-2-diabetes.qmd ~l.273-274); companion to C6* — Drug-class table puts SGLT2 inhibitors in the 'reasonable' row with no ketoacidosis caveat for strict low-carbohydrate diets.

**Source:** ADA 2026 s.5 says very-low-carbohydrate eating plans should be avoided with SGLT2 inhibitors because of ketoacidosis risk. Smallest fix: one sentence after the table rather than changing the table row.  
_Read: PMC12690188 full text (ADA Standards of Care 2026, Section 5), first 100k characters_

Current:
```
Older people on sulfonylureas or insulin are especially vulnerable to hypoglycaemia
[@ling2021elderlyhypo].
```
Proposed:
```
Older people on sulfonylureas or insulin are especially vulnerable to hypoglycaemia
[@ling2021elderlyhypo]. One caveat sits outside hypoglycaemia: on an SGLT2 inhibitor, a very-low-carbohydrate
or ketogenic diet should be avoided, because the combination can trigger diabetic ketoacidosis
[@ada2026standards].
```

#### type-2-diabetes/S5 · supported · reword · confidence high
*quiz q4 option c feedback (book/quizzes/type-2-diabetes.quiz.yml); companion to C6* — Quiz feedback presents SGLT2 inhibitors as low risk with no ketoacidosis caveat for very-low-carbohydrate diets.

**Source:** ADA 2026 s.5: avoid very-low-carbohydrate eating plans with SGLT2 inhibitors because of potential ketoacidosis.  
_Read: PMC12690188 full text (ADA Standards of Care 2026, Section 5), first 100k characters_

Current:
```
SGLT2 inhibitors carry low hypoglycaemia risk used alone. The classes that can cause hypoglycaemia are insulin, sulfonylureas and meglitinides, and that is the list to screen for before endorsing carbohydrate restriction.
```
Proposed:
```
SGLT2 inhibitors carry low hypoglycaemia risk used alone, though a very-low-carbohydrate or ketogenic diet is still best avoided on one because of a ketoacidosis risk. The classes that can cause hypoglycaemia are insulin, sulfonylureas and meglitinides, and that is the list to screen for before endorsing carbohydrate restriction.
```

### Cardiovascular Disease & Hypertension

#### cardiovascular-disease-hypertension/C1a · partly-supported · reword · confidence high
*chapter warning callout 'Check the kidneys before a potassium salt substitute'* — SSaSS said to exclude people on ACE inhibitors/ARBs; trial may only have excluded serious kidney disease, potassium-sparing diuretics and potassium supplements.

**Source:** Registry exclusions: participant or family member using a potassium-sparing diuretic or potassium supplement, serious renal impairment, other reason for concern, eats most meals out, life expectancy under 6 months. ACE inhibitors and ARBs are not listed; the trial summary notes ACE/ARB use did not count as an exclusion.  
_Read: ClinicalTrials.gov NCT02092090 eligibility module (registry record, full exclusion list); Georgetown '52 in 52' SSaSS summary (secondary). NEJM full text returned 403._

Current:
```
**excluded people with serious kidney disease and those on potassium-raising drugs**
(angiotensin-converting enzyme or ACE inhibitors, angiotensin receptor blockers or ARBs, and
potassium-sparing diuretics) [@neal2021ssass]. In these
people, extra potassium
```
Proposed:
```
**excluded people with serious kidney disease and those taking potassium-sparing diuretics or
potassium supplements** [@neal2021ssass]. Two other common blood-pressure drugs also raise blood
potassium: angiotensin-converting enzyme (ACE) inhibitors and angiotensin receptor blockers (ARBs). In
all of these people, extra potassium
```

#### cardiovascular-disease-hypertension/C1b · partly-supported · reword · confidence high
*quiz q8 correct-option feedback* — Same SSaSS exclusion misstatement (ACE inhibitors/ARBs).

**Source:** Trial excluded serious renal impairment, potassium-sparing diuretics and potassium supplements; ACE inhibitors and ARBs were not exclusion criteria. The safety caution about ACE/ARB is still clinically sound.  
_Read: ClinicalTrials.gov NCT02092090 eligibility module (registry record)._

Current:
```
excluded people with serious kidney disease and those on potassium-raising drugs (ACE inhibitors, ARBs, potassium-sparing diuretics), in whom extra potassium can cause dangerous hyperkalaemia.
```
Proposed:
```
excluded people with serious kidney disease and those taking potassium-sparing diuretics or potassium supplements, and ACE inhibitors and ARBs also raise potassium. In all of these people, extra potassium can cause dangerous hyperkalaemia.
```

#### cardiovascular-disease-hypertension/C1c · partly-supported · reword · confidence high
*case mr-chua-cvd q-salt-substitute option a feedback* — Same SSaSS exclusion misstatement (ACE inhibitors/ARBs).

**Source:** Exclusions were serious renal impairment, potassium-sparing diuretics and potassium supplements; not ACE inhibitors or ARBs.  
_Read: ClinicalTrials.gov NCT02092090 eligibility module (registry record)._

Current:
```
**excluded people with serious kidney disease and those on potassium-raising drugs** (ACE inhibitors, ARBs, potassium-sparing diuretics). In those people extra potassium
```
Proposed:
```
**excluded people with serious kidney disease and those taking potassium-sparing diuretics or potassium supplements**, and ACE inhibitors and ARBs also raise potassium. In all of these people extra potassium
```

#### cardiovascular-disease-hypertension/C1d · partly-supported · reword · confidence high
*case mr-chua-cvd q-salt-substitute option b feedback* — States the trial 'deliberately excluded exactly those people' after listing ACE inhibitor/ARB users.

**Source:** ACE inhibitor and ARB users were not excluded; only serious renal impairment, potassium-sparing diuretics and potassium supplements.  
_Read: ClinicalTrials.gov NCT02092090 eligibility module (registry record)._

Current:
```
and the trial that proved these substitutes work deliberately excluded exactly those people.
```
Proposed:
```
and the trial that proved these substitutes work excluded people with serious kidney disease or on potassium-sparing diuretics.
```

#### cardiovascular-disease-hypertension/C1e · partly-supported · reword · confidence high
*case mr-chua-cvd remedial-salt-substitute body* — Same SSaSS exclusion misstatement (ACE inhibitors/ARBs).

**Source:** Exclusions were serious renal impairment, potassium-sparing diuretics and potassium supplements.  
_Read: ClinicalTrials.gov NCT02092090 eligibility module (registry record)._

Current:
```
excluded people with serious kidney disease and those on
      potassium-raising drugs (ACE inhibitors, ARBs, potassium-sparing diuretics). In those people, extra
```
Proposed:
```
excluded people with serious kidney disease and those taking
      potassium-sparing diuretics or potassium supplements, and ACE inhibitors and ARBs also raise
      potassium. In all of these people, extra
```

#### cardiovascular-disease-hypertension/C1f · partly-supported · reword · confidence high
*case mr-chua-cvd end-partial body* — States the trial 'excluded exactly those people' after listing ACE inhibitor/ARB users.

**Source:** ACE inhibitor and ARB users were not excluded; only serious renal impairment, potassium-sparing diuretics and potassium supplements.  
_Read: ClinicalTrials.gov NCT02092090 eligibility module (registry record)._

Current:
```
and the trial behind these substitutes excluded exactly those people, so a strong
```
Proposed:
```
and the trial behind these substitutes excluded people with serious kidney disease or on potassium-sparing diuretics, so a strong
```

#### cardiovascular-disease-hypertension/S1 · partly-supported · reword · confidence high
*chronic-kidney-disease chapter, 'The potassium salt substitute' paragraph (spillover of C1, outside the listed files)* — Same SSaSS exclusion misstatement repeated in the CKD chapter.

**Source:** Exclusions were serious renal impairment, potassium-sparing diuretics and potassium supplements; ACE inhibitors and ARBs were not exclusion criteria. The CKD point (safety data do not cover CKD) still holds.  
_Read: ClinicalTrials.gov NCT02092090 eligibility module (registry record)._

Current:
```
That trial deliberately excluded people with serious kidney disease and those on
potassium-raising drugs (ACE inhibitors, angiotensin receptor blockers or potassium-sparing diuretics),
so its safety data do not cover CKD,
```
Proposed:
```
That trial excluded people with serious kidney disease and those taking potassium-sparing
diuretics or potassium supplements, so its safety data do not cover CKD,
```

#### cardiovascular-disease-hypertension/C2 · wrong-source · replace-citation · confidence high
*chapter alcohol section, 'and it lowers triglycerides [@roerecke2017bp]'* — roerecke2017bp is a BP-only meta-analysis; TG claim needs its own source.

**Source:** Roerecke: 36 trials, BP outcomes only; no triglyceride data; BP fall significant only above ~2 drinks/day. Klop review: J-shaped alcohol-TG relation, heavy intake raises TG; advises reducing or stopping alcohol in hypertriglyceridaemia.  
_Read: PubMed abstracts via NCBI efetch for PMID 29253389 (Roerecke 2017) and PMID 23511381 (Klop 2013)._

Current:
```
Cutting down does lower blood pressure, dose-dependently and most in heavy drinkers, and it lowers
triglycerides [@roerecke2017bp].
```
Proposed:
```
Cutting down does lower blood pressure, dose-dependently and most in heavy drinkers
[@roerecke2017bp], and because heavy drinking raises triglycerides, cutting down or stopping is the
standard advice when they are high [@klop2013alcoholtg].
```
New citation:
```bibtex
@article{klop2013alcoholtg,
  author  = {Klop, Boudewijn and do Rego, Ana Torres and Cabezas, Manuel Castro},
  title   = {Alcohol and plasma triglycerides},
  journal = {Current Opinion in Lipidology},
  year    = {2013},
  volume  = {24},
  number  = {4},
  pages   = {321--326},
  pmid    = {23511381},
  doi     = {10.1097/MOL.0b013e3283606845}
}
```

#### cardiovascular-disease-hypertension/C5 · partly-supported · fix-number · confidence high
*chapter at a glance, 'about a third of all deaths'* — Harmonise with Singapore picture 'about 30% of deaths'.

**Source:** Page now reports CVD as 31.1% of deaths in 2025 (8,243 deaths, ~23/day; ICA births and deaths report); 2024 version gave 30.5%. 'About 30%' fits both; 'a third' slightly overstates. Bib url/note could be refreshed.  
_Read: Singapore Heart Foundation statistics page (myheart.org.sg/?p=828; bib URL now 404s), full page; earlier 2024 figures via search snippet of same page._

Current:
```
Cardiovascular disease causes about a third of all deaths in Singapore, and
```
Proposed:
```
Cardiovascular disease causes about 30% of all deaths in Singapore, and
```

#### cardiovascular-disease-hypertension/C6 · unsupported · reword · confidence high
*case mr-chua-cvd reveal-first-move body* — kopi-C is evaporated milk and sugar; condensed milk is plain kopi.

**Source:** Kopi = coffee with sugar and condensed milk; kopi-C = coffee with sugar and evaporated milk. Condensed milk is not part of kopi-C.  
_Read: Wikipedia 'Kopi (drink)' terminology table (full page, first 100k chars); kopitiam ordering guides via search results._

Current:
```
(with condensed/evaporated milk
```
Proposed:
```
(with evaporated milk
```

#### cardiovascular-disease-hypertension/C7a · unsupported · reword · confidence high
*fat-swap.yml refined-carb option note* — 'LDL is roughly unchanged' may be wrong; pooled feeding data show LDL falls, HDL falls, TG rises.

**Source:** Replacing 1% energy SFA with carbohydrate lowers LDL-C ~1.2 mg/dL (similar to MUFA 1.3), lowers HDL-C 0.4 mg/dL, raises TG; total:HDL ratio did not change (Mensink 2003 abstract).  
_Read: PubMed abstract (NCBI efetch, PMID 12716665); 2015 DGAC Scientific Report Appendix E-2.43 PDF (odphp.health.gov), full text, which reports the Mensink & Katan coefficients._

Current:
```
Trade saturated fat for refined starch and sugar and the benefit disappears: LDL is roughly
      unchanged, and triglycerides can worsen.
```
Proposed:
```
Trade saturated fat for refined starch and sugar and the benefit disappears: LDL falls a
      little, but HDL falls too and triglycerides rise, so the cholesterol ratio does not improve.
```

#### cardiovascular-disease-hypertension/C9 · partly-supported · reword · confidence high
*chapter DASH paragraph 2, 'In Singapore, DASH *is* My Healthy Plate'* — Overstates an equivalence; Singapore picture's 'ready-made local form' is more accurate.

**Source:** Page gives half fruit and vegetables, quarter wholegrains, quarter protein (incl. low-fat dairy); does not mention DASH. The DASH link is an interpretation, not an identity.  
_Read: HealthHub My Healthy Plate page (healthhub.sg/live-healthy/balanced-diet-qqh-concept), full page._

Current:
```
In Singapore, DASH *is* My Healthy Plate: half the
plate fruit and vegetables, a quarter wholegrains, a quarter lean protein.
```
Proposed:
```
In Singapore, My Healthy Plate carries the core of
DASH into everyday meals: half the plate fruit and vegetables, a quarter wholegrains, a quarter lean
protein [@hpbHealthyPlate].
```

### Chronic Kidney Disease

#### chronic-kidney-disease/C3 · supported · reword · confidence high
*quiz q7 option a feedback (and chapter star-fruit callout, line 197)* — Quiz lists hiccups as a symptom of star-fruit intoxication; the chapter does not mention hiccups.

**Source:** Chua 2017 review of 126 patients: hiccups were the most common symptom (65%); confusion and seizures were linked to mortality. Caetano 2017: a dialysis patient had intractable hiccups, myoclonus and seizures after eating bilimbi. The quiz feedback is correct; the chapter can add hiccups so the two match.  
_Read: Europe PMC abstracts, PMID 28443386 (Chua 2017, Clin Toxicol) and PMID 28203564 (Caetano 2017, Case Rep Nephrol Dial); DOIs matched via Crossref._

Current:
```
In CKD it causes confusion, seizures and death, with
```
Proposed:
```
In CKD it causes hiccups (the commonest symptom), confusion, seizures and death, with
```

#### chronic-kidney-disease/S2 · partly-supported · fix-number · confidence high
*chapter, star-fruit callout, line 198* — Supplementary: 'mortality reported in a third of intoxicated patients with kidney failure' does not match the source figures.

**Source:** Mortality was 36% in chronic renal insufficiency and 27% in end-stage disease on dialysis; there were no deaths with normal renal function. 'Kidney failure' usually means end-stage disease, where the figure is about a quarter, not a third.  
_Read: Europe PMC abstract PMID 28443386._

Current:
```
mortality reported in a third of intoxicated patients with kidney failure [@chua2017starfruit;
```
Proposed:
```
mortality reported in about a quarter to a third of intoxicated patients with impaired kidney function [@chua2017starfruit;
```

#### chronic-kidney-disease/S5 · partly-supported · reword · confidence high
*chapter, The Singapore picture, line 64* — Supplementary: 'not every patient needs a dietitian, but those with complex needs do' is stronger than ACE.

**Source:** ACE: not all CKD patients need a dietitian. Depending on resources, referral 'could be useful' for patients with more complex dietary requirements or who need help adopting changes. That is permissive, not a requirement.  
_Read: ACE 2023 full PDF, lifestyle section before Table 3._

Current:
```
not every patient needs a dietitian, but those with complex needs do [@aceCKD2023].
```
Proposed:
```
not every patient needs a dietitian, but referral can help those with more complex dietary needs [@aceCKD2023].
```

### Undernutrition & Malnutrition

#### undernutrition-malnutrition/C1 · unsupported · reword · confidence high
*book/chapters/undernutrition-malnutrition.qmd, aetiology definition list (lines 71-76)* — Cachexia is placed on the acute disease/injury-related type ('the cachexia end'), but ESPEN 2017 makes cachexia a synonym of chronic disease-related malnutrition with inflammation.

**Source:** Section 3.2.1.1.1 says chronic DRM with inflammation has the synonym cachexia; the two are exchangeable, and cachexia is 'often incorrectly perceived as end-stage malnutrition'. The examples are cancer, COPD, IBD, heart failure and CKD, with milder inflammation (CRP seldom >40 mg/L). Acute disease- or injury-related malnutrition (ICU, trauma, burns, major surgery) is a separate category with no ca …  
_Read: ESPEN official PDF https://www.espen.org/files/ESPEN-guidelines-on-definitions-and-terminology-of-clinical-nutrition.pdf (full text, sections 3.2.1.1.1-3.2.1.1.2 and Fig. 1); Europe PMC abstract PMID  …_

Current:
```
Chronic disease-related malnutrition
: Malnutrition with mild-to-moderate inflammation, as in heart failure, cancer or kidney disease.

Acute disease- or injury-related malnutrition
: Malnutrition with severe inflammation, as in acute illness or injury; the cachexia end of the range
  (cachexia is illness-driven wasting of muscle, often with loss of fat).
```
Proposed:
```
Chronic disease-related malnutrition
: Malnutrition with mild-to-moderate inflammation, as in heart failure, cancer or kidney disease; also
  called cachexia (illness-driven wasting of muscle, often with loss of fat).

Acute disease- or injury-related malnutrition
: Malnutrition with severe inflammation, as in acute illness or injury.
```

#### undernutrition-malnutrition/S2 · unsupported · reword · confidence high
*book/figures/mechanisms/malnutrition-mechanism.svg, <desc> accessibility text (line 3); companion to C1* — The alt-text description also puts the acute/injury type 'at the cachexia end'.

**Source:** ESPEN 2017 makes cachexia a synonym of chronic DRM with inflammation, not of the acute/injury type.  
_Read: ESPEN official PDF (full text), as for C1_

Current:
```
chronic disease-related with mild to moderate inflammation, and acute disease or injury with severe inflammation at the cachexia end.
```
Proposed:
```
chronic disease-related with mild to moderate inflammation (cachexia), and acute disease or injury with severe inflammation.
```

#### undernutrition-malnutrition/S3 · unsupported · reword · confidence high
*book/glossary.qmd line 18, 'Acute disease- or injury-related malnutrition' row; companion to C1* — The glossary repeats the misplaced cachexia gloss on the acute/injury type.

**Source:** ESPEN 2017 says cachexia and chronic DRM with inflammation are exchangeable terms, and that the acute/injury type is a separate category.  
_Read: ESPEN official PDF (full text), as for C1_

Current:
```
| Acute disease- or injury-related malnutrition | Malnutrition with severe inflammation, as in acute illness or injury; the cachexia end (cachexia is illness-driven wasting of muscle, often with loss of fat) | *Undernutrition & Malnutrition* |
```
Proposed:
```
| Acute disease- or injury-related malnutrition | Malnutrition with severe inflammation, as in acute illness or injury | *Undernutrition & Malnutrition* |
```

#### undernutrition-malnutrition/S4 · supported · reword · confidence high
*book/glossary.qmd line 89, 'Chronic disease-related malnutrition' row; companion to C1* — The cachexia gloss removed from the acute row (S3) belongs on the chronic row.

**Source:** ESPEN 2017 section 3.2.1.1.1 reads 'Chronic DRM with inflammation. Synonym: cachexia', with loss of muscle mass with or without loss of fat mass.  
_Read: ESPEN official PDF (full text), as for C1_

Current:
```
| Chronic disease-related malnutrition | Malnutrition with mild-to-moderate inflammation, as in heart failure, cancer or kidney disease | *Undernutrition & Malnutrition* |
```
Proposed:
```
| Chronic disease-related malnutrition | Malnutrition with mild-to-moderate inflammation, as in heart failure, cancer or kidney disease; also called cachexia (illness-driven wasting of muscle, often with loss of fat) | *Undernutrition & Malnutrition* |
```

#### undernutrition-malnutrition/C2 · internal-contradiction · reword · confidence high
*book/figures/mechanisms/malnutrition-mechanism.svg line 42, note under 'fat AND muscle mass'* — The label '(muscle = the body's protein store)' contradicts the chapter prose (line 57-58: muscle is 'working tissue, not a designed store') and the Integrative Metabolism table (protein is 'not a designed store at all').

**Source:** Chapter prose says muscle is working tissue, not a designed store. Integrative Metabolism line 381 says protein is functional tissue whose spending dismantles working tissue. The SVG note says the opposite.  
_Read: Internal check only: undernutrition-malnutrition.qmd lines 57-60 and integrative-metabolism.qmd line 381_

Current:
```
<text class="note" x="394" y="115" text-anchor="middle">(muscle = the body's protein store)</text>
```
Proposed:
```
<text class="note" x="394" y="115" text-anchor="middle">(muscle is working tissue, not a store)</text>
```

#### undernutrition-malnutrition/C3 · partly-supported · fix-number · confidence high
*book/chapters/undernutrition-malnutrition.qmd, The Singapore picture, lines 314-316* — 'raised mortality several-fold' rests on crude rates (0.54 vs 3.04 per 100 person-years); the adjusted HR is 1.72.

**Source:** Mortality per 100 person-years: robust and well-nourished 0.54; prefrail/frail with poor nutrition 3.04 (adjusted HR 1.72, 95% CI 1.01-2.92). Robust with poor nutrition: 0.86 (HR 0.81, 0.39-1.70, not significant). Models were adjusted for demographics, comorbidities, cognition, depression and other factors. 'Several-fold' holds only for the crude rates; for poor nutrition alone there was no excess …  
_Read: JAMA Netw Open full text https://jamanetwork.com/journals/jamanetworkopen/fullarticle/10.1001/jamanetworkopen.2018.0650 (mortality table); Europe PMC abstract PMID 30646023_

Current:
```
The harm concentrates where they co-occur: poor nutrition combined with frailty raised
mortality several-fold in the local cohort, whereas poor nutrition alone was a weaker signal
[@wei2018slasOutcomes].
```
Proposed:
```
The harm concentrates where they co-occur: in the local cohort, poor nutrition combined with
pre-frailty or frailty carried the highest death rate and about 1.7 times the mortality risk after
adjustment, whereas poor nutrition alone showed no clear excess [@wei2018slasOutcomes].
```

#### undernutrition-malnutrition/C4 · partly-supported · reword · confidence high
*book/chapters/undernutrition-malnutrition.qmd, The Singapore picture, line 317* — The '1 in 4 below minimum energy, about half below protein' figures are for adults aged 50-69, but the chapter says 'older adults'.

**Source:** The MOH reply cites the National Nutrition Survey 2019 and 2022. It says about 1 in 4 older adults aged 50-69 did not meet minimum caloric requirements and about 1 in 2 did not meet recommended protein intake. The age band is 50-69, not seniors aged 65 and over.  
_Read: MOH parliamentary reply https://www.moh.gov.sg/newsroom/tracking-of-annual-malnutrition-rates-among-seniors-for-past-five-years/ (full page)_

Current:
```
Nationally, about 1 in 4 older adults fall below minimum energy needs and about half below protein needs,
```
Proposed:
```
Nationally, about 1 in 4 adults aged 50 to 69 fall below minimum energy needs and about half below protein needs,
```

#### undernutrition-malnutrition/C6 · unsupported · fix-number · confidence high
*book/diagrams/must-screen.yml, medium-risk band action (line 39)* — 'document food intake for 2-3 days'; BAPEN MUST says 3 days.

**Source:** MUST Step 5, Medium Risk: 'Observe: Document dietary intake for 3 days'. If adequate, repeat screening (hospital weekly, care home at least monthly, community every 2-3 months). If inadequate, follow local policy, set goals and monitor. The '2-3' figure is the community re-screening interval, not the intake-record length.  
_Read: BAPEN 'MUST' flowchart PDF (NHS Scotland Right Decisions copy, https://rightdecisions.scot.nhs.uk/media/1624/must-full.pdf, text extracted, Step 5 management guidelines). The bib URL page (bapen.org.u …_

Current:
```
action: "Observe: document food intake for 2–3 days, then repeat screening and act if intake stays poor."
```
Proposed:
```
action: "Observe: document food intake for 3 days, then repeat screening and act if intake stays poor."
```

#### undernutrition-malnutrition/C7 · partly-supported · reword · confidence high
*book/chapters/undernutrition-malnutrition.qmd, screening-tools list, line 156* — 'vitality question' (singular) vs the bib note's two-question case-finder.

**Source:** The ICOPE vitality screen asks two questions: has the person unintentionally lost 3 kg over the last three months, and have they experienced loss of appetite? A yes to either leads to a full assessment with the MNA. It is two questions, not one.  
_Read: WHO ICOPE training programme Module 10 Vitality PDF https://cdn.who.int/media/docs/default-source/mca-documents/ageing/icope-training-programme/module-10/who-icope_m10_-vitality.pdf (text extracted, s …_

Current:
```
- the WHO ICOPE (Integrated Care for Older People) vitality question, in the community [@whoIcope];
```
Proposed:
```
- the WHO ICOPE (Integrated Care for Older People) vitality screen (two questions, on unintended weight
  loss and loss of appetite), in the community [@whoIcope];
```

### Bone & Joint Health

#### bone-health-osteoporosis/C2 · partly-supported · add-hedge · confidence high
*chapter: Mechanical loading callout* — LIFTMOR is named without its limits (small, supervised, low-intensity home-exercise comparator).

**Source:** RCT of 101 women aged about 65 with T-score below -1, run for 8 months. Supervised HiRIT beat a home-based low-intensity programme: spine BMD +2.9% vs -1.2%, femoral neck +0.3% vs -1.9%. There was one minor adverse event, and the authors frame safety as 'under highly supervised conditions'.  
_Read: PubMed abstract PMID 28975661 via NCBI E-utilities (J Bone Miner Res 2018;33:211-220, doi 10.1002/jbmr.3284)_

Current:
```
chapter. In a trial, supervised high-intensity resistance and impact training raised bone density in
postmenopausal women with low bone mass, safely [@watson2018liftmor].
```
Proposed:
```
chapter. In one small trial (101 women over 8 months), supervised high-intensity resistance and impact
training improved bone density more than a low-intensity home programme in postmenopausal women with low
bone mass, with only one minor adverse event [@watson2018liftmor].
```

#### bone-health-osteoporosis/C4a · wrong-source · reword · confidence high
*chapter: Supplements paragraph (sec-bone-supplements)* — The ~15% total / ~30% hip fracture reduction is attributed to 'genuinely deficient or institutionalised' people, but the meta-analysis pooled community-dwelling and institutionalised adults.

**Source:** The 15%/30% figures are pooled across 8 RCTs (n=30,970) of community-dwelling and institutionalised adults. Subgroups: community total RR 0.95 (NS), hip 0.65 (borderline); institutionalised (2 trials) total 0.67, hip 0.71. The paper did no analysis by baseline vitamin D or deficiency.  
_Read: PubMed abstract PMID 26510847 (E-utilities) and PMC4715837 full text (subgroup results)_

Current:
```
Calcium and vitamin D supplements cut fractures in people who are genuinely deficient or institutionalised,
by roughly 15% for all fractures and 30% for hip fractures in that group [@weaver2016cavitd]. In
```
Proposed:
```
Calcium and vitamin D supplements together can cut fractures: one meta-analysis pooling trials in
community-dwelling and institutionalised adults found roughly 15% fewer fractures overall and 30% fewer hip
fractures, with the clearest effect in the two trials in institutional care [@weaver2016cavitd]. In
```

#### bone-health-osteoporosis/C4b · wrong-source · reword · confidence high
*quiz q7 option a feedback* — The same 15%/30% figures are attached to 'genuinely deficient or institutionalised' people.

**Source:** The pooled 15%/30% reductions come from a mixed population, not a deficient or institutionalised subgroup. Dropping the parenthetical removes the misattributed numbers and keeps the qualitative teaching point. The Madam Lim case carries no such figures, so it needs no change.  
_Read: PubMed abstract PMID 26510847 and PMC4715837 full text_

Current:
```
Supplements cut fractures in people who are genuinely deficient or institutionalised (~15% total, ~30% hip), but in
```
Proposed:
```
Supplements cut fractures in people who are genuinely deficient or institutionalised, but in
```

#### bone-health-osteoporosis/C13 · unsupported · reword · confidence high
*chapter Gout section, final parenthesis* — 'Obesity and insulin resistance, the metabolic drivers of gout' is uncited, and the linked chapter never connects them to urate.

**Source:** ACR: obesity is associated with higher risk of incident gout, and weight loss is conditionally recommended for overweight or obese patients with gout (very low certainty). Insulin resistance is not linked to gout in the cited sources.  
_Read: ACR 2020 gout guideline full text PMC10563586_

Current:
```
(Obesity and insulin resistance, the metabolic drivers of gout, are covered in the
[*Obesity & Metabolic Syndrome*](obesity-metabolic-syndrome.qmd) chapter.)
```
Proposed:
```
(Obesity is linked to a higher risk of gout, and the ACR guideline conditionally recommends weight loss for
patients with gout who are overweight [@fitzgerald2020goutacr]; obesity itself is covered in the
[*Obesity & Metabolic Syndrome*](obesity-metabolic-syndrome.qmd) chapter.)
```

### Brain Health & Dementia

#### brain-health-dementia/C1-quiz · partly-supported · reword · confidence high
*quizzes/brain-health-dementia.quiz.yml, q5 correct-option feedback* — Feedback says hearing loss is 'larger than diet', but diet is not one of the Commission's modelled factors; LDL is joint largest.

**Source:** Hearing loss and high LDL cholesterol each have a weighted PAF of 7%, the joint largest; diet was not modelled.  
_Read: Same Lancet Commission full-text PDF as C1 (PAF table)._

Current:
```
Uncorrected hearing loss is among the largest single modifiable contributors in the population estimate, larger than diet, so 'get your hearing and eyes checked' is concrete, high-value advice.
```
Proposed:
```
Uncorrected hearing loss is, with high LDL cholesterol, the largest single modifiable contributor in the population estimate (about 7% each), so 'get your hearing and eyes checked' is concrete, high-value advice.
```

#### brain-health-dementia/C2 · unsupported · replace-citation · confidence high
*brain-health-dementia.qmd, Pathophysiology, mixed-pathology paragraph* — 'Most brains examined at post-mortem show it' is uncited.

**Source:** Custodio: mixed Alzheimer-vascular pathology in about 22% of elderly brains. Schneider: among people with dementia, over 50% had multiple pathologies (AD plus infarcts commonest, 38%); most without dementia had one or none. Kapasi: additional pathologies lower the threshold for clinical AD.  
_Read: PubMed abstracts: custodio2017mixed (PMID 29354216), Schneider 2007 Neurology (PMID 17568013), Kapasi 2017 Acta Neuropathol (PMID 28488154); DOIs confirmed on Crossref._

Current:
```
In older people, **mixed pathology**, more than one disease
process in the same brain, is the rule: most brains examined at post-mortem show it. The safest
reading is that the two kinds of damage add up: vascular injury lowers the threshold at which
neurodegeneration shows as dementia.
```
Proposed:
```
In older people with dementia, **mixed pathology**, more than one disease
process in the same brain, is the rule: in a community autopsy study, more than half of those who had
dementia had more than one pathology, most often Alzheimer changes plus infarcts
[@schneider2007mixed]. The safest reading is that the two kinds of damage add up: vascular injury
lowers the threshold at which neurodegeneration shows as dementia [@kapasi2017threshold].
```
New citation:
```bibtex
@article{schneider2007mixed,
  author  = {Schneider, Julie A and Arvanitakis, Zoe and Bang, Woojeong and Bennett, David A},
  title   = {Mixed brain pathologies account for most dementia cases in community-dwelling older persons},
  journal = {Neurology},
  year    = {2007},
  volume  = {69},
  number  = {24},
  pages   = {2197--2204},
  doi     = {10.1212/01.wnl.0000271090.28148.24},
  pmid    = {17568013}
}

@article{kapasi2017threshold,
  author  = {Kapasi, Alifiya and DeCarli, Charles and Schneider, Julie A},
  title   = {Impact of multiple pathologies on the threshold for clinically overt dementia},
  journal = {Acta Neuropathologica},
  year    = {2017},
  volume  = {134},
  number  = {2},
  pages   = {171--186},
  doi     = {10.1007/s00401-017-1717-7},
  pmid    = {28488154}
}
```

#### brain-health-dementia/C2-nun · partly-supported · add-citation · confidence high
*brain-health-dementia.qmd, Nun Study example box* — Nun Study example uncited; check wording against the study.

**Source:** Among 61 nuns meeting neuropathological AD criteria, those with brain infarcts had poorer cognition and more dementia (lacunar OR 20.7, CI 1.5 to 288); fewer AD lesions appeared to produce dementia when lacunar infarcts were present. Not matched on 'the same amount' of pathology.  
_Read: PubMed abstract PMID 9052711; DOI 10.1001/jama.1997.03540340047031 confirmed on Crossref._

Current:
```
Among people with the *same* amount of Alzheimer
pathology, those who also had small strokes were far more likely to have had dementia in life.
```
Proposed:
```
Among nuns whose brains met the post-mortem criteria
for Alzheimer's disease, those who also had small strokes were more likely to have had dementia in
life, and fewer plaques and tangles seemed to be enough to produce it [@snowdon1997nunstudy].
```

#### brain-health-dementia/C4-education · partly-supported · reword · confidence high
*brain-health-dementia.qmd, Non-dietary modifiable risk factors, final para* — 'Rising education levels are lowering dementia rates across generations' uncited.

**Source:** Age-specific dementia incidence has decreased in some high-income countries; greater cognitive and physical reserve across the life course and less vascular damage are likely contributors. Data from LMICs are sparse. Education is not singled out as the cause.  
_Read: Lancet Commission 2024 full-text PDF, Executive summary and 'Compression of morbidity' section._

Current:
```
and social reserve early also helps; it is part of why rising education levels are lowering dementia
rates across generations.
```
Proposed:
```
and social reserve early also helps: greater reserve, together with less vascular damage, is thought
to be part of why age-specific dementia incidence has fallen in some high-income countries
[@livingston2024lancet].
```

#### brain-health-dementia/C7 · partly-supported · reword · confidence high
*brain-health-dementia.qmd, Singapore picture para 1* — Ethnic gradient (Indian > Chinese) and causal 'mirroring' of diabetes/vascular burden need checking against subramaniam2025wisedecade.

**Source:** Indian vs Chinese ethnicity OR 1.7 (1.1 to 2.9, p=0.046), supported. But doctor-diagnosed hypertension, heart trouble and diabetes were not associated with dementia; Indian participants had more stroke and depression; authors cite UK South Asian cardiovascular-risk data only as a possible explanation.  
_Read: PubMed abstract (PMID 39868432) and PMC full text PMC11848337 (results, Table 4, discussion)._

Current:
```
Locally, too,
dementia risk tracks vascular risk: dementia is commoner in Indian than Chinese residents,
mirroring the higher burden of diabetes and vascular disease. "Brain health is vascular health" is therefore a
message that fits national diabetes and hypertension efforts.
```
Proposed:
```
Locally,
dementia is commoner in Indian than Chinese residents. Indian residents in the survey also reported
more stroke, and the authors suggest the heavier cardiovascular risk seen in South Asian populations as
one explanation, although diagnosed diabetes and hypertension were not themselves linked to dementia
in that survey [@subramaniam2025wisedecade]. "Brain health is vascular health", which rests on the
wider evidence, is a message that fits national diabetes and hypertension efforts.
```

#### brain-health-dementia/C8 · partly-supported · reword · confidence high
*brain-health-dementia.qmd, Can a diet prevent dementia? para 2* — MIND RCT control arm also received caloric-restriction counselling; 'comparison group also nudged toward better eating' is loose.

**Source:** MIND diet with mild caloric restriction vs a control diet with mild caloric restriction; all participants received adherence counselling and weight-loss support. Global cognition improved in both groups; difference 0.035 SD (P=0.23).  
_Read: PubMed abstract PMID 37466280._

Current:
```
over a comparison group also nudged toward better eating
```
Proposed:
```
over a control diet with the same mild calorie restriction and counselling
```

#### brain-health-dementia/C8-yml · partly-supported · reword · confidence high
*diagrams/trial-check.yml, MIND claim 'why'* — Same loose wording of the MIND trial control arm.

**Source:** Control arm followed a control diet with mild caloric restriction plus the same counselling and weight-loss support.  
_Read: PubMed abstract PMID 37466280._

Current:
```
over a control group also nudged toward better eating
```
Proposed:
```
over a control diet with the same mild calorie restriction
```

### Everyday & Preventive Counselling

#### cases-counselling/C3 · internal-contradiction · reword · confidence high
*sim-dementia-prevention-mdm-goh.case.yml objectives (line 9)* — Rubric fields say 'raised blood pressure and borderline sugar' while chapter and debrief say 'slightly raised blood pressure and borderline glucose'.

**Source:** Chapter blurb: 'dismisses her slightly raised blood pressure and borderline glucose'; end-good keyPoint line 88 uses the same. Objective line 9 says 'raised blood pressure and borderline sugar'. Patient-voice lines (51, 59, 64) say 'sugar' appropriately as lay speech and should stay. Rubric field: needs author sign-off under decision 8.  
_Read: Repository files: sim-dementia-prevention-mdm-goh.case.yml lines 9, 40, 88; cases-counselling.qmd line 47-48._

Current:
```
using her own raised blood pressure and borderline sugar."
```
Proposed:
```
using her own slightly raised blood pressure and borderline glucose."
```

#### cases-counselling/S2 · internal-contradiction · reword · confidence high
*sim-dementia-prevention-mdm-goh.case.yml patient-chat objective (line 40); companion to C3* — Patient-chat objective (shown as 'Your goal:') says 'borderline sugar'.

**Source:** Same mismatch as C3; adding 'slightly raised' matches the chapter and debrief. Rubric field gated by decision 8.  
_Read: Repository file book/cases/sim-dementia-prevention-mdm-goh.case.yml line 40._

Current:
```
(her blood pressure and borderline sugar: what is good for the heart is good for the brain)
```
Proposed:
```
(her slightly raised blood pressure and borderline glucose: what is good for the heart is good for the brain)
```

### Recognising Risk & Knowing When to Refer

#### cases-referral/C1 · partly-supported · add-hedge · confidence high
*sim-bone-fracture-mdm-devi.case.yml, patient-chat node `objective` (line 42); other C1 style items (Aisha AND/PLUS/slashes, Rahman 'Correct'/'dangerous high potassium', Mr Chua 'rather than' x4) are s …* — The Devi patient-chat objective says supplements 'raise kidney-stone risk'. Objective 1, keyPoint 1, Bone & Joint Health (sec-bone-supplements) and Menopause all say 'slightly' or 'a small increase'. The rest of C1 is house-style residue in rubric fields that the author has kept for themselves.

**Source:** USPSTF found adequate evidence that combined vitamin D plus calcium increases kidney stones, and rated the harm as small. Pooled RR 1.18; absolute difference 0.33%. In the WHI, 1 extra stone per 273 women. Calcium alone showed no increase. 'Raise' is true but stated more strongly than the sibling fields.  
_Read: Europe PMC record for DOI 10.1001/jama.2018.3185 (PMID 29677309), abstract; JAMA full-text page jamanetwork.com/journals/jama/fullarticle/2678104; USPSTF recommendation page uspreventiveservicestaskfo …_

Current:
```
extra supplements give no benefit when replete and raise kidney-stone risk
```
Proposed:
```
extra supplements give no benefit when replete and slightly raise kidney-stone risk
```

### Colophon

#### colophon/C2 · unsupported · reword · confidence high
*## The technical build, bullet 3 (GitHub Actions)* — "always the latest reviewed one": publish.yml deploys on every push to main, so 'reviewed' is a process claim the pipeline does not enforce.

**Source:** The workflow runs on every push to main (and on manual dispatch) with no review or approval gate; the only automated check is an asset-path verification. Nothing in the pipeline guarantees the deployed version was reviewed.  
_Read: .github/workflows/publish.yml (full file): triggers on push to main and workflow_dispatch; build islands, quarto render, check-assets, upload, deploy-pages_

Current:
```
- A GitHub Actions pipeline rebuilds and deploys the site automatically on every change, so the
  published version is always the latest reviewed one.
```
Proposed:
```
- A GitHub Actions pipeline rebuilds and deploys the site automatically on every change, so the
  published version always matches the latest source.
```

### Sign-off items

#### signoff/S2 · partly-supported · reword · confidence high
*book/chapters/appetite-weight-regulation.qmd, satiety section after the levers table (line ~220)* — Check the 440 kcal/day, 4.9 kg and 12-week figures against Weigle 2005, and whether 'strongest single demonstration' can be defended.

**Source:** 19 subjects were studied in sequence: 2 wk on 15% protein/35% fat/50% carb, then 2 wk isocaloric on 30% protein/20% fat/50% carb, then 12 wk ad libitum on the same high-protein diet. Intake fell by 441 kcal/d, weight by 4.9 kg and fat mass by 3.7 kg. The numbers match. The study was small and uncontrolled, and fat also fell, so 'strongest' overstates it.  
_Read: PubMed abstract PMID 16002798 via NCBI E-utilities efetch (abstract only)_

Current:
```
Two studies put numbers on these levers. The strongest single demonstration came from protein: when volunteers' protein intake was raised from
15% to 30% of energy, they spontaneously ate about 440 kcal/day less and lost about 4.9 kg over
12 weeks, with no instruction to eat less [@weigle2005highprotein].
```
Proposed:
```
Two studies put numbers on these levers. A striking demonstration came from protein: when 19 volunteers' protein intake was raised from
15% to 30% of energy (carbohydrate held constant), they spontaneously ate about 440 kcal/day less and lost about 4.9 kg over
12 weeks, with no instruction to eat less [@weigle2005highprotein].
```

## C. Fixes that do not change a claim

| Ref | Fix | Verdict | Proposed text (start) |
|---|---|---|---|
| 01-why-nutrition-matters/S6 | reword | partly-supported | PREDIMED did find a benefit, about 30% lower relative risk on a combined measure of cardiovascular events; |
| 01-why-nutrition-matters/S7 | add-citation | unsupported | - "Multi-pillar plans are associated with larger benefit; state it as an association, not proven synergy."       references: ["@loef2012life … |
| energy-balance/C3 | add-citation | partly-supported | rises at a lower BMI in Asian populations [@whoExpert2004AsianBMI] (see the |
| energy-balance/C5 | add-citation | cannot-verify | with a mixed diet around 0.85 [@rqValuesStd]. RQ shifts as |
| energy-balance/C6 | add-citation | unsupported | in rough proportion to the amount of fat carried [@considine1996leptin]. The brain |
| macronutrients/C4 | add-citation | supported | **Quality: adequacy and completeness.** A useful population reference is about 0.8 g/kg/day, adequate for most healthy adults [@who2007prote … |
| macronutrients/S1 | fix-number | wrong-source | pmid    = {71495}, |
| macronutrients/C5 | reword | wrong-source | Prescribing grams is not the task at this stage. |
| macronutrients/C10 | reword | internal-contradiction | misconceptions. If Mr Lim still wants his friend's strict low-carb plan on top of       borderline glucose and cholesterol, that is beyond e … |
| 04-micronutrients-hydration/C6 | add-citation | supported | greens, wholegrains, nuts and legumes. Low levels are associated with heavy alcohol use, poorly controlled diabetes and some medicines taken … |
| 04-micronutrients-hydration/C7 | add-citation | supported | vegans need roughly 1.8 times as much iron [@odsIron], and their intake deserves a closer look. |
| 04-micronutrients-hydration/C8 | add-citation | supported | It is in sauces, broths and food eaten out of home [@mohNNS2022], which makes sodium a |
| 04-micronutrients-hydration/C11 | reword | supported | substitute and cut the relative rate of stroke (about 14%), major cardiovascular events (about 13%) and death (about 12%) over about 5 years … |
| 04-micronutrients-hydration/C12 | replace-citation (both usages) | supported | chapters/04-micronutrients-hydration.qmd line 248: 'is laid down by about age 18–20, and bone mass peaks around age 30 [@nof_weaver_2016_pbm … |
| integrative-metabolism/C8 | reword | internal-contradiction | two are never both fully on. The three one-way-street arrows stand for all four irreversible       steps: one is PDH, and the other two are  … |
| integrative-metabolism/C10b | add-citation | supported | yet turns over close to its own weight in ATP each day [@tornroth2008gate], |
| integrative-metabolism/S1 | replace-citation | wrong-source | @article{lum2020fast,   author  = {Lum, Zheng Kang and Khoo, Zi Rui and Toh, Wei Yann See and Kamaldeen, Shaikh Abdul Kader and Shakoor, Abd … |
| integrative-metabolism/S2 | replace-citation | wrong-source | author  = {Zainudin, Sueziani Binte and Ang, Dun Yong and Soh, Abel Wah Ek},   title   = {Knowledge of diabetes mellitus and safe practices  … |
| integrative-metabolism/S3 | replace-citation | wrong-source | title = {Diabetes: The War Continues},   author = {{Ministry of Health Singapore}},   year = {2017}, |
| appetite-weight-regulation/C5 | reword | partly-supported | tirzepatide, a dual GIP/GLP-1 receptor agonist) are engineered, long-acting drugs that activate the receptor for GLP-1, the gut satiety horm … |
| appetite-weight-regulation/C5b | reword | partly-supported | The medicines are effective. In the main trials, alongside lifestyle support, mean weight loss was around 15% with semaglutide over 68 weeks … |
| appetite-weight-regulation/C9 | add-citation | supported | / Amylin / Pancreas, released with insulin at each meal / Reduces meal size and slows the stomach [@lutz2010amylin; @mietlickibaase2016amyli … |
| infancy-early-childhood/C1b | reword | wrong-source | note    = {PROBIT 6.5-y follow-up: verbal IQ +7.5 in the intervention arm; performance and full-scale IQ CIs crossed zero. Adolescent outcom … |
| infancy-early-childhood/C2 | reword | supported | - vegetables as the first complementary food, to build acceptance of vegetables (offered alongside the iron-rich first foods of [Starting so … |
| infancy-early-childhood/C4 | replace-citation | wrong-source | and make toxin, causing **infant botulism** [@harris2024botulism]. |
| childhood-adolescence/C5 | reword | supported | - text: "Yes; his huge appetite is a sign that his body is short of protein"         correct: false         feedback: "A big appetite is a n … |
| childhood-adolescence/C6 | reword | supported | Relative energy deficiency in sport (REDs) : The broader form of the female-athlete triad, arising from low energy availability. |
| adulthood-working-life/C5 | reword | supported | notably that about 9 in 10 adults exceed the recommended limit of 2,000 mg of sodium a day, are built |
| pregnancy-lactation/S6 | reword | supported | / Adults 51 and over / 1,000 / / Pregnancy and lactation / 1,000 / |
| pregnancy-lactation/S11 | reword | partly-supported | The most important nutrition window opens before conception. The neural tube closes by about 28 days after conception, |
| pregnancy-lactation/S12 | reword | partly-supported | The neural tube closes by about 28 days after conception, often before a woman knows she is pregnant, so folic acid |
| pregnancy-lactation/C8 | reword | supported | untreated, it raises the risk of a large baby and of a difficult delivery (shoulder dystocia). |
| menopause-midlife/C2d | reword | partly-supported | Soy is a safe, healthy food, not an equal to hormone therapy. |
| menopause-midlife/S1 | add-citation | wrong-source | source: "SWAN body composition (Greendale 2019); visceral fat (Lovejoy 2008)" |
| menopause-midlife/C6a | add-citation | supported | - Menopause arrives a little earlier than the Western figure of about 51 [@gold2001swanAge] (mean about 49 years here), and its symptoms dif … |
| menopause-midlife/C6b | add-citation | supported | Singapore now has its own menopause management guidelines [@kkh2026menopauseGuidelines] to refer to when symptoms outrun what nutrition and |
| menopause-midlife/C7 | replace-citation | supported | title   = {Soy intake and breast cancer risk in {Singapore} {Chinese} {Health} {Study}}, |
| dietary-guidelines-patterns/C2 | add-citation | supported | A new 2025–2030 edition of the US guidelines was released in January 2026 [@dga2025] and drew immediate expert criticism |
| dietary-guidelines-patterns/C4 | add-citation | supported | head-to-head trials show it is no better than ordinary calorie restriction [@liu2022tre; @lin2023tre]; |
| dietary-guidelines-patterns/C5 | replace-citation | wrong-source | of the clinical skill [@afn2021curriculum]. |
| dietary-guidelines-patterns/S3 | replace-citation | wrong-source | When a plan has to become therapeutic or restrictive, it passes to a dietitian [@afn2021curriculum]. |
| evidence-vs-hype/C5 | add-citation | partly-supported | Beta-carotene supplements increased lung cancer in smokers [@atbc1994; @caret1996] |
| evidence-vs-hype/C9 | replace-citation | supported | it before gluten is removed, or the test misleads [@glutenFreeNonCeliac]. |
| evidence-vs-hype/C12 | reword | internal-contradiction | question, a trap known as single-nutrient reductionism (see the *Why Nutrition Matters* chapter). |
| 06-dietary-assessment/C4 | move-citation | wrong-source | SCOFF was first validated in young women with anorexia or bulimia [@scoffMorgan1999]; pooled across 25 validation studies, its sensitivity i … |
| 06-dietary-assessment/S3 | reword | supported | url          = {https://www.measurement-toolkit.org/diet/introduction/diet-variation-quantification-misreporting} |
| 06-dietary-assessment/C9 | add-citation | supported | A waist circumference of ≥90 cm in men or ≥80 cm in women flags excess central (visceral) fat [@sgObesityBMI]. BMI is |
| 06-dietary-assessment/C10 | add-hedge | cannot-verify | Tap a drink to see where it lands and the swap that moves it to a better grade. Sugar values are   illustrative approximations: the real gra … |
| 06-dietary-assessment/S5 | reword | partly-supported | label: "Full-sugar soft drink",   sugar: 10.6, |
| behaviour-change-counselling/S3 | replace-citation | wrong-source | Patients* chapter), structure the consult [@fiveAsNutrition]: |
| behaviour-change-counselling/C6 | reword | partly-supported | feedback: "Vague reassurance capped with a yes/no 'okay?' lets the moment slip. |
| interprofessional-referral/C2 | add-citation | supported | (referrals to community programmes such as Health Promotion Board activities, Active Ageing Centres and SportSG) [@mohHealthierSG], and a ** … |
| interprofessional-referral/C5 | replace-citation | supported | calorie-dense foods [@sleepRestriction]. |
| interprofessional-referral/S1 | add-citation | partly-supported | raising ghrelin, blunting satiety and pushing intake up [@sleepRestriction; @alkhatib2017partialsleep]. |
| obesity-metabolic-syndrome/C8 | reword | partly-supported | The local Yishun Study made the gap concrete. Matched for BMI, age and sex, Singaporeans had higher percentage body fat than white adults in … |
| type-2-diabetes/C4 | move-citation | supported | Singapore declared a War on Diabetes in 2016. About one in three Singaporeans will develop diabetes in their lifetime [@mohWarOnDiabetes], a … |
| cardiovascular-disease-hypertension/C3 | reword | supported | a target to cut intake by 15% by 2026, subsidies for reduced-sodium |
| cardiovascular-disease-hypertension/C4a | reword | supported | affects about 34% of adults, but just over half of them are undiagnosed |
| cardiovascular-disease-hypertension/C4b | reword | supported | (persistently raised blood pressure), just over half of them undiagnosed |
| cardiovascular-disease-hypertension/C8 | move-citation | wrong-source | the fat was replaced with [@siritarino2010], and when the replacement is refined carbohydrate and sugar, there is no benefit [@sacks2017]. |
| cardiovascular-disease-hypertension/C10 | reword | supported | failed to prevent cardiovascular events in large trials. |
| chronic-kidney-disease/C8 | reword | supported | So five dietary levers (sodium, potassium, phosphate, fluid and protein) must now |
| chronic-kidney-disease/S1 | add-citation | partly-supported | Early CKD usually needs no fluid restriction [@aceCKD2023]; |
| chronic-kidney-disease/S3 | replace-citation | wrong-source | author  = {Chua, Choon-Bing and Sun, Cheuk-Kwan and Tsui, Huan-Wen and Yang, Po-Jen and Lee, Kuo-Hsin and Hsu, Chih-Wei and Tsai, I-Ting},   … |
| chronic-kidney-disease/S4 | replace-citation | wrong-source | author  = {Caetano, Camille Pereira and de S{\'a}, Cinara Barros and Faleiros, Bruno Ant{\^o}nio Paix{\~a}o and Gomes, Marcelo Fonseca Couti … |
| undernutrition-malnutrition/C5 | reword | supported | more than 1 in 4 community-dwelling older adults (27.6%) were at malnutrition risk |
| bone-health-osteoporosis/C12 | move-citation | partly-supported | too [@leung2018sgkoa; @lee2023sggout], and supplements are heavily marketed for both. |
| bone-health-osteoporosis/C15a | replace-citation | supported |  |
| bone-health-osteoporosis/C15b | replace-citation | supported | adults fell short of the calcium recommendation [@ye2023daha]. |
| bone-health-osteoporosis/C15c | replace-citation | supported | is laid down by about age 18–20, and bone mass peaks around age 30 [@nof_weaver_2016_pbm_position]. |
| bone-health-osteoporosis/C15d | replace-citation | supported | the rest of life [@nof_weaver_2016_pbm_position]. |
| bone-health-osteoporosis/S1 | replace-citation | wrong-source | @article{hereford2024peakBoneMass,   author  = {Hereford, Timothy and Kellish, Alec and Samora, Julie Balch and Reid Nichols, Louise},   tit … |
| brain-health-dementia/C4-singer | add-citation | supported | Local programmes such as the SINGER study are adapting the multidomain approach to Singaporean food and life [@chew2021singerpilot]. |
| brain-health-dementia/C5 | add-citation | supported | is preferred [@ags2014feedingtubes; @agscw2013fivethings]. |
| brain-health-dementia/C10 | reword | partly-supported | Trials found that vitamin E did not prevent dementia or stop mild impairment progressing to dementia |
| index/C2 | add-citation | partly-supported | Healthier SG, launched on 5 July 2023 [@mohHSGEnrolment2023] after its 2022 White Paper to Parliament |
| cases-counselling/C4 | reword | supported | objective: Engage Mr Tan (a resistant, asymptomatic but at-risk patient) without lecturing; explore his life beyond diet (sleep, stress, act … |
| cases-counselling/C5 | reword | supported | objective: Take a brief diet history, then answer Mr Lim's questions one at a time on food quality and portion, not bans, gently correcting  … |
| cases-counselling/C7 | reword | internal-contradiction | # Chat-forward "LLM version" of the prediabetes scenario for the Everyday and # preventive counselling chapter. The choice-based version liv … |
| cases-counselling/S3 | reword | internal-contradiction | # Chat-forward simulated-patient case for the Everyday and preventive counselling chapter. # Grounded in *Brain health and dementia*: the do … |
| cases-referral/S1 | reword | internal-contradiction | (risk of dangerous hyperkalaemia, especially on his blood-pressure pill) |
| colophon/C1 | reword | partly-supported | - Figures are either original diagrams made for this book or openly licensed images, each credited   to its source. |

## D. No change needed

| Ref | Verdict | Why |
|---|---|---|
| 01-why-nutrition-matters/C7 | supported | The overlap is real but editorial, not a sourcing error. The one factual problem it shares, the NCD-share citation, is fixed in S2. The preface scope paragraph  … |
| macronutrients/C1 | concern-invalid | Current text already separates the two: most adults make less lactase after childhood, this is the norm, and only some get symptoms (lactose intolerance), with  … |
| macronutrients/C2 | concern-invalid | Current text says lipase frees fatty acids and monoglycerides 'which micelles carry to the gut lining for absorption'. That matches D&A (micelles carry fat to t … |
| macronutrients/C3 | concern-invalid | The caption now reads 'Three are fatty acids or built from them ... Cholesterol, by contrast, is a rigid four-ring sterol.' The error has already been corrected … |
| macronutrients/C11 | supported | Morton: protein supplementation beyond 1.62 g/kg/day total protein gave no further resistance-training gains in fat-free mass. USDA: coconut oil has 82.5 g satu … |
| macronutrients/C12 | concern-invalid | The credit sentence no longer exists. The passage now points to Integrative Metabolism (fasted and starved states) and to body composition in the *Energy Balanc … |
| 04-micronutrients-hydration/C2 | concern-invalid | The scurvy and limeys box no longer exists in the current text; no Lind or limey claim remains in any of the four files. |
| digestion-absorption/C2 | supported | From a review of intubation and radiological (in vivo) studies, the mouth-to-anus length is about 5 m, two-thirds of it small intestine (about 3.3 m), with cons … |
| digestion-absorption/C6 | supported | The mean total mucosal surface is about 32 m² (about 2 m² of it colon). The authors conclude it is not the size of a tennis court but rather half a badminton co … |
| digestion-absorption/C9 | supported | Yap 1989 is a population survey: lactase deficiency in 95% of Singapore-born Chinese adults and the symptom rate on their usual milk intake. That is population  … |
| digestion-absorption/C10 | cannot-verify | The secondary sources found give saliva of about 0.5-1.5 L/day, pancreatic juice of 1-2 L/day and gastric luminal pH of 1.5-3.5. All three book figures fall wit … |
| digestion-absorption/C11 | concern-invalid | The current text now carries a plain gloss on first use: 'Ultra-processed foods (industrial formulations made largely from refined ingredients and additives)'.  … |
| integrative-metabolism/C3 | concern-invalid | The phrase 'cross into the brain freely' is no longer in the chapter or its diagrams. The current text says ketones 'are water-soluble and readily burned by the … |
| integrative-metabolism/C7 | concern-invalid | The YAML now reads 'A few amino acids, such as leucine and lysine, are purely ketogenic', and the step caption says 'ketogenic ones (such as leucine and lysine) … |
| integrative-metabolism/C10a | cannot-verify | No source read in this session states 30-32 ATP per glucose. The figure matches standard current textbooks (about 30 in Berg/Stryer), and the 15-fold gap is sim … |
| integrative-metabolism/C10c | partly-supported | Gershuni calls 0.5-3 the hallmark of nutritional ketosis, but prints the unit as mg/dL (an erratum was issued in 2025), so it is a poor citation. Kolb gives βOH … |
| integrative-metabolism/C10e | supported | MUIS-sourced Singapore timetables give Imsak about 05:45-05:47 and Maghrib about 19:19-19:21, a fast of about 13.3-13.6 hours. Singapore's near-equatorial posit … |
| integrative-metabolism/C11 | concern-invalid | The phrase 'mobilisable protein store' is no longer in the book. Undernutrition now says a deficit 'draws its protein from muscle, which is working tissue, not  … |
| infancy-early-childhood/C4d | supported | LEAP ITT at 60 months: peanut allergy 13.7% with avoidance vs 1.9% with consumption (SPT-negative), and 35.3% vs 10.6% (SPT-positive). Delay (avoidance) carried … |
| infancy-early-childhood/C5 | supported | 2021/22 national survey: about 97% attempted breastfeeding, 3.3% exclusively breastfed at 6 months, 85% any breastfeeding at 6 months. Both statements are accur … |
| childhood-adolescence/C4 | supported | Requirements and advertising ban for freshly prepared beverages in effect from 30 December 2023. HPB lists bubble tea explicitly. Toppings such as pearls must d … |
| childhood-adolescence/C7 | supported | NIMH: AN = restriction, intense fear of weight gain, low body weight. BN = recurrent binges followed by vomiting, laxatives, fasting or excessive exercise. BED  … |
| childhood-adolescence/C8 | supported | Total-body BMC plateaus about 18 (girls) and 20 (boys), so nearly all adult bone is laid down between infancy and adulthood. 39% falls in the 4 circumpubertal y … |
| adulthood-working-life/C6 | supported | Hill 2009, from CARDIA and NHANES data over about 8 years: most people gain weight gradually, the average American adult gaining 0.5-1 kg/year, explained by a s … |
| adulthood-working-life/C7 | concern-invalid | This is a question of which chapter owns a concept, not a factual claim to check against a source. The gloss here is standard. One small mismatch: the adulthood … |
| menopause-midlife/C9 | cannot-verify | I could not open the primary report. A secondary source repeats a ~794 mg/day mean adult intake, below the 1000 mg reference. The chapter quotes no female numbe … |
| healthy-ageing/C6 | concern-invalid | The current undernutrition-malnutrition.qmd bolds none of sarcopenia, dysphagia, frailty or texture-modified food. Sarcopenia (line 88) and frailty (line 128) a … |
| dietary-guidelines-patterns/C6 | concern-invalid | Current text already reads 'Two therapeutic uses in type 2 diabetes are real but specific, and distinct from each other: a low-carbohydrate pattern, and the low … |
| dietary-guidelines-patterns/C9 | concern-invalid | Ch.1 now says 'a combined measure of cardiovascular events', and its caveat callout notes the composite was stroke-heavy. Side note: Ch.1's 'most of them stroke … |
| evidence-vs-hype/C10 | concern-invalid | The definition already reads 'a growth-sensing protein complex at the hub of a signalling pathway inside cells', which is the wording the concern asked for. No  … |
| evidence-vs-hype/C11 | supported | The AAD 2024 guideline makes strong recommendations for benzoyl peroxide, topical retinoids, topical antibiotics and oral doxycycline, plus isotretinoin for sev … |
| evidence-vs-hype/C13 | concern-invalid | The passage now reads 'Don't promise those outcomes from advice alone. The trial patients were selected, so check whether a result applies to the patient in fro … |
| 06-dietary-assessment/C2 | supported | Crossover RCT (n=138) in an online grocery store. Sugar from beverages purchased fell by 1.51 g per serving (95% CI -2.68 to -0.34). Overall diet quality of the … |
| 06-dietary-assessment/C6 | supported | Toolkit: BMI 'seems to be the most consistent determinant of energy misreporting' with FFQ and 24-hour recall. Adults with overweight or obesity under-report mo … |
| behaviour-change-counselling/C5 | supported | Sustain talk (statements for the status quo) is standard MI terminology, paired with change talk in Miller & Rollnick. q2b glosses it inline ('arguments for sta … |
| interprofessional-referral/C1 | supported | White Paper describes a 'national enrolment programme for residents to commit to seeing one family doctor and adopt a health plan'; once enrolled, residents dev … |
| interprofessional-referral/C6 | supported | PubMed: Am J Lifestyle Med 2016 Jan;10(1):36-52, Epub 2014 Jan 21, DOI 10.1177/1559827613520120. The bib year 2016 and its note ('Epub 2014; print 2016') are co … |
| interprofessional-referral/C8 | concern-invalid | The diagram, quiz and case now say 'three medicines' and never use the word polypharmacy, so nothing depends on the definition. Healthy Ageing (line 136) and th … |
| obesity-metabolic-syndrome/C9 | concern-invalid | The live glossary row already matches the chapter definition and has no puberty clause. The puberty point is taught in Childhood & Adolescence (line 346). Only  … |
| cardiovascular-disease-hypertension/C11 | concern-invalid | The q8 correct option now reads 'Someone with kidney disease or on a potassium-raising blood-pressure drug'; 'K-sparer' no longer appears anywhere in the book. |
| chronic-kidney-disease/C5 | concern-invalid | The pointers complement each other. Bone (lines 130-131) says CKD-MBD is 'recognised and referred' and points here. This chapter gives the mechanism (phosphate  … |
| chronic-kidney-disease/C6 | concern-invalid | The pointer no longer exists. The only link from Bone to the CKD chapter is the CKD-MBD pointer at lines 130-131. Lines 265-266 now discuss vitamin D and kidney … |
| undernutrition-malnutrition/C8 | concern-invalid | No current pointer to the Undernutrition & Malnutrition chapter remains in these files. Infancy points faltering growth to Childhood & Adolescence (line 270-271 … |
| undernutrition-malnutrition/C9 | concern-invalid | The 'opens with one tail and closes with the other' phrasing no longer appears anywhere. Obesity line 39-40 now just says over- and under-nutrition are the two  … |
| bone-health-osteoporosis/C1 | concern-invalid | The section now sits at line 400, after 'Bones and joints: what actually helps?' (the closing movement). Its OSTA/FRAX/T-score/fragility-fracture definitions st … |
| bone-health-osteoporosis/C11a | supported | OSTA's final tool was 'based on only age and body weight', and the chapter already defines OSTA as an age-and-weight screen. Pointing the feedback at OSTA keeps … |
| bone-health-osteoporosis/C11b | supported | OSTA uses only age and body weight to flag women likely to have osteoporosis. Using OSTA here matches the chapter's definition list. |
| bone-health-osteoporosis/S2 | internal-contradiction | SWAN: fastest loss from 1 year before to 2 years after the FMP (spine 7.38%, FN 5.8% over the transmenopause), with slower loss afterwards. Shortening the windo … |
| brain-health-dementia/C10-gem | supported | GEM: 3069 adults aged 75 or older, median follow-up 6.1 years; HR for all-cause dementia 1.12 (0.94 to 1.33). Ginkgo is already cited to dekosky2008gem in the c … |
| index/C4 | supported | Of the 24 eligible studies: USA 11, Europe 4, Middle East 1, Africa 1, Australasia 7, which makes five regions. The quoted conclusion matches the abstract. |
| index/C6 | cannot-verify | Rhetorical framing, not an empirical claim tied to a source. The second claim is broadly consistent with GBD 2019 diet findings cited nearby. No change is neede … |
| part2-intro/C1 | concern-invalid | The list names the chapters that teach the two skills just mentioned (diet history, trial appraisal) and does not claim to cover all of Part III. The next sente … |
| cases-counselling/C1 | internal-contradiction | Concern confirmed. engine.js: 'No-LLM (or disabled) build: patient-chat degrades straight to fallbackGoto'. end-partial bodies say 'You reached the end of the c … |
| cases-counselling/C6 | supported | Concern confirmed but no factual error: blurbs already distinguish presentation (prediabetes vs fear of dementia). Changing an occupation would touch persona, s … |
| cases-referral/C2 | internal-contradiction | Confirmed: fallbackGoto is used both when the LLM is disabled and when the objective is not met. So end-partial's 'You engaged...' body and objectivesMet [1] ar … |
| cases-referral/C3 | concern-invalid | The current exitWhen reads 'recognised that a fragility fracture needs an osteoporosis assessment and specialist referral'. 'Bone-health assessment' no longer a … |
| colophon/C3 | concern-invalid | The word 'capstone' no longer appears in any reader-facing .qmd or .yml file in book/; Part V is titled 'V · Integrative Cases' in _quarto.yml. The rename has a … |
| colophon/C4 | concern-invalid | AUTHOR.md requires headings in sentence case and chapter cross-references in title case with '&' ('the *X* chapter'). Every chapter H1 is sentence case, so the  … |
| signoff/S1 | concern-invalid | Standard teaching is that mixed micelles carry monoglycerides and fatty acids across the unstirred water layer to the brush border. The lipids diffuse into the  … |
