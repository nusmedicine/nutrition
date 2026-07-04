---
chapter: 8
title: "Appetite & Weight Regulation"
status: 🟢 ready to write — adversarially verified 2026-07-05 (all load-bearing claims confirmed; 3 wrong-PMIDs fixed; critic guidance folded into §11)
book_chapter: ../../book/chapters/appetite-weight-regulation.qmd
pillars: [nutrition]
last_updated: 2026-07-05
---

# Appetite & Weight Regulation — research dossier

> Built from an 8-agent web-grounded research fan-out (workflow `ch8-appetite-research`, 2026-07-05) and
> **adversarially verified** (workflow `ch8-dossier-verify`, 2026-07-05): every load-bearing claim confirmed,
> 3 wrong-PMIDs fixed, completeness critic folded into §11 → **🟢**. This is the **Part I capstone** — it
> closes the loop back to Ch.2 (energy balance) and hands the *appetite* home for signals teased in Ch.2 and
> treated metabolically in Ch.6.

## 1. Scope (one paragraph)

This chapter answers the question the whole of Part I builds toward: **why do we eat what we eat, and why
is body weight so hard to change?** It teaches appetite as a **regulated system with two clocks** — a
*long-term* clock (the adiposity signals **leptin** and insulin, which report fat stores to the brain over
days–weeks) and a *short-term* clock (gut peptides — **ghrelin** the hunger signal, and CCK/GLP-1/PYY/amylin
the satiety signals — that rise and fall across a single meal). Both feed a hypothalamic **thermostat** in
the **arcuate nucleus**, built from two opposing neuron populations (orexigenic **NPY/AgRP** vs anorexigenic
**POMC/CART**) that converge on one integrating receptor (**MC4R**) — the accelerator-and-brake model, with
**MC4R deficiency** the human proof that the circuit really controls appetite. On top of this homeostatic
system sits the brain's **reward (hedonic) system** — the wanting/liking distinction, sensory-specific
satiety, food cues, and hyper-palatable ultra-processed foods — which can **override** satiety in a modern
food environment. The chapter then teaches the hardest, most clinically important idea: body weight is
**biologically defended**, and the defence is **asymmetric** (strong against loss, weak against gain), so
after weight loss hunger hormones rise, leptin falls, and energy expenditure drops more than body size
predicts (**adaptive thermogenesis**) — the physiology of weight regain, taught with the honest *Biggest
Loser* reinterpretation so "diets fail" reads as biology, not willpower. Two neglected modifiable pillars —
**sleep and stress** — are shown to bias the same system toward hunger and energy-dense food. The capstone
payoff is the **GLP-1 receptor-agonist** drug class, taught at mechanism level only: they work by amplifying
the very satiety signalling the chapter has taught, and weight regain when they stop proves the defended-weight
point. Throughout, the frame is **non-stigmatising** (obesity as a regulated system gone awry, not a moral
failing) and **food-first**, and the Singapore anchor is the **obesogenic food environment** (hawker culture,
sugary drinks, sleep-deprived society) colliding with defended biology — which is why "just eat less, move
more" is *insufficient*, not wrong.

## 2. Learning objectives (recognition-level)

By the end of the chapter a student can:

- **LO-1** *Distinguish* the two timescales of appetite control — long-term **adiposity signals** (leptin,
  insulin) vs short-term **gut peptides** (ghrelin, CCK, GLP-1, PYY, amylin) — and *state* the direction of
  each (hunger-promoting vs satiety-promoting).
- **LO-2** *Describe* the hypothalamic appetite "thermostat": the arcuate nucleus, the orexigenic
  **NPY/AgRP** vs anorexigenic **POMC/CART** populations, and their convergence on **MC4R**; and *explain*
  what **MC4R deficiency** (the commonest monogenic obesity) proves.
- **LO-3** *Explain* leptin as the brain's fat-mass "fuel gauge," and *account for* **leptin resistance** —
  why obese people have *high* leptin yet keep eating, and why leptin therapy works only for rare
  congenital deficiency, not common obesity.
- **LO-4** *Define* **hunger, satiation and satiety**, *outline* the **satiety cascade**, and *apply* the
  food properties that change fullness for the same calories (protein, energy density, fibre/volume,
  solid-vs-liquid, eating rate).
- **LO-5** *Explain* **hedonic (reward) eating** — the *wanting* (dopamine) vs *liking* (opioid) distinction,
  sensory-specific satiety, food cues, and hyper-palatable foods — as a system that can **override**
  homeostatic satiety in an obesogenic environment.
- **LO-6** *Explain* that body weight is **biologically defended** and the defence is **asymmetric**, and
  *describe* the three arms of post-weight-loss regain (falling leptin, rising hunger hormones, adaptive
  thermogenesis), using the honest *Biggest Loser* reinterpretation.
- **LO-7** *Outline* how **short sleep and chronic stress** bias appetite (ghrelin↑, leptin↓, reward-drive↑,
  cortisol/comfort-food/visceral fat), flagging honestly which evidence is causal vs associational.
- **LO-8** *Explain*, at **mechanism level only**, how **GLP-1 receptor agonists** amplify the body's own
  satiety signalling (and why weight regains when they stop) — and *frame* obesity non-stigmatisingly as a
  regulated system gone awry, recognising the Singapore obesogenic environment (management → Part III).

## 3. Scope boundaries

**In (this chapter OWNS and teaches — at recognition level):**
- The two-timescale model; the hypothalamic thermostat (arcuate NPY/AgRP vs POMC/CART; α-MSH; MC4R); MC4R
  monogenic obesity as human proof.
- **Leptin as the adiposity signal (its substantive home)** + insulin as a parallel signal; **leptin
  resistance** and the failed-leptin-therapy story.
- The **appetite/satiety role** of gut peptides (ghrelin, CCK, GLP-1, PYY, amylin, oxyntomodulin), the
  vagal→NTS→hypothalamus routing, gastric distension, and the **ileal brake** (the *secretory/motility*
  role is Ch.5's).
- **Hunger vs satiation vs satiety**, the **satiety cascade**, and the food-property evidence.
- **Hedonic/reward eating** (wanting vs liking, sensory-specific satiety, cues, hyper-palatable foods,
  passive overconsumption).
- **Defended body weight** (set-point vs settling-point vs dual-intervention-point), the **asymmetric**
  defence, **adaptive thermogenesis**, and the post-weight-loss regain physiology.
- **Sleep and stress** as appetite modulators.
- Clinical framing: **obesity as a dysregulated homeostatic system** (non-stigmatising); **GLP-1 receptor
  agonists at MECHANISM level**; the Singapore obesogenic environment.

**Out (covered elsewhere — name once, cross-reference, do NOT duplicate):**
- **Gut hormones' SECRETORY / motility role** (CCK→bile/enzymes; GLP-1 incretin/insulin; gastric emptying
  as digestion) → **Ch.5**. Here own only their *appetite* role.
- **Leptin/insulin METABOLIC action** (glucose/lipid handling) → **Ch.6**; **energy balance, BMR, TEE,
  components of expenditure** → **Ch.2** (close the loop, do not re-derive).
- **Gut–brain axis MICROBIAL mechanism** → **Ch.7** (brief link only).
- **Obesity CLASSIFICATION, staging, diagnostic criteria (incl. the Lancet clinical/preclinical criteria and
  Asian BMI cut-offs in detail), GLP-1 indications/eligibility/dosing/side-effects/drug-selection, other
  anti-obesity pharmacotherapy, bariatric surgery, metabolic-syndrome diagnosis** → **Part III / clinical
  years**. Here teach GLP-1 at mechanism level; signpost the rest.
- **Deep neuroanatomy** (NTS/nodose/area-postrema wiring, hedonic-hotspot sub-regions, molecular clock
  genes, HPA-axis endocrinology, leptin-resistance molecular mechanisms) → educator-only asides.

## 4. Key concepts to teach (didactic spine)

*Organised as eight movements, matching the research fan-out. Altitude = "name it and say what it does."*

**Part 1 — The thermostat: the hypothalamic control system.**
1. **Appetite is a regulated thermostat with an accelerator and a brake.** The **arcuate nucleus** (at the
   floor of the 3rd ventricle, next to the leaky **median eminence** so it can read the blood) holds two
   antagonistic populations: **NPY/AgRP** neurons = the *accelerator* (orexigenic; firing them makes a fed
   mouse eat within minutes — Aponte 2011, mouse optogenetics), and **POMC/CART** neurons = the *brake*
   (anorexigenic; POMC → **α-MSH**). They mutually inhibit each other → a see-saw, not two dials. →
   `aponte2011agrp`, `andermann2017wiring`
2. **The melanocortin/MC4R convergence.** α-MSH activates **MC4R** on downstream (paraventricular) neurons =
   "eat less"; **AgRP is an antagonist at the SAME receptor** = "eat more." MC4R is the single summing point.
   → `andermann2017wiring`
3. **MC4R deficiency = the human proof.** MC4R mutations are the **commonest monogenic (single-gene) cause
   of severe obesity** (~5.8% of severe childhood obesity), dose-dependent (more receptor loss → more
   hyperphagia/obesity) — Farooqi 2003. This is the chapter's anchor that the circuit really controls human
   appetite. (Setmelanotide = Part III.) → `farooqi2003mc4r`
4. **Peripheral signals steer the thermostat.** Leptin/insulin (long-term) and ghrelin/PYY/GLP-1 (short-term)
   act *on* these neurons; the arcuate is the **integrator**. Leptin/insulin press the brake; ghrelin presses
   the accelerator. → `cowley2001leptin`, `cowley2003ghrelin`, `schwartz2000cns`

**Part 2 — The long clock: adiposity signals (leptin's home).**
5. **Leptin = the fat-mass fuel gauge.** Positionally cloned from the *ob/ob* mouse (Zhang/Friedman 1994);
   secreted by white fat **in proportion to fat mass**; a *long-term* signal (contrast the meal-by-meal gut
   peptides). More fat → more leptin → (normally) less hunger. → `zhang1994leptin`
6. **Congenital leptin deficiency — and its rescue.** Rare humans with no leptin have extreme early-onset
   obesity + relentless hunger (Montague 1997); **leptin injections rescue it** (Farooqi 1999). Proof leptin
   is *necessary* for human appetite control. → `montague1997congenital`, `farooqi1999leptintherapy`
7. **★ Leptin resistance — the hype-puncturing centrepiece.** Common obesity has **HIGH** leptin, yet
   appetite persists: the brain no longer responds. Recombinant leptin gave only modest, variable weight
   loss in common obesity (Heymsfield 1999) — it works for rare *deficiency*, not common obesity. The modern
   reframe: leptin is better read as a **starvation/threshold alarm** — a *fall* drives hunger hard; a *rise*
   gives diminishing returns (asymmetry). Sets up defended weight. → `heymsfield1999recombinant`,
   `flier2024leptin30`
8. **Insulin as a parallel adiposity signal** (light touch; its home is Ch.6). → `schwartz2000cns`

**Part 3 — The short clock: gut peptides and the satiety machinery.**
9. **Ghrelin = the one hormone that says "eat."** Made by the stomach; **rises before meals, falls after**
   (Cummings 2001). Partly *learned/anticipatory* (entrained to meal times) — a meal-*initiation* signal.
   Protein suppresses it most durably. **Rises after weight loss** → a push to regain (hand-off to Part 6). →
   `kojima1999ghrelin`, `cummings2001preprandial`, `cummings2002weightloss`
10. **The satiety peptides, released as food arrives.** **CCK** (duodenal I-cells; fat/protein; the first
    satiety peptide shown — Gibbs 1973; short-acting, meal-terminating); **GLP-1 + PYY** (ileal L-cells; PYY3-36
    cuts intake ~⅓ at physiological doses — Batterham 2002); **amylin** (with insulin); **oxyntomodulin**
    (name only). → `gibbs1973cck`, `batterham2002pyy`
11. **How signals reach the brain.** Vagal afferents → **NTS** (hindbrain) → hypothalamus (the fast wire);
    humoral route via leaky area postrema/arcuate; and **gastric distension** (stretch → vagal fullness,
    *volume*-dependent not calorie-dependent — why soup/salad fill you up). → `schwartz2000cns`
12. **The ileal brake + the GLP-1-drug bridge.** Nutrients reaching the ileum trigger GLP-1/PYY that **slow
    gastric emptying** *and* signal satiety — a feedback loop. Native GLP-1 dies in ~1–2 min (DPP-4); GLP-1
    **receptor agonists** resist DPP-4 and hold the satiety switch on (mechanism only; Part 8). → `lim2019satiety`,
    `holst2024reflections`

**Part 4 — Satiation vs satiety, and the food-first toolkit.**
13. **Three words students confuse:** **hunger** starts a meal; **satiation** ends *this* meal (controls meal
    size); **satiety** delays the *next* meal (controls frequency). → `benelam2009satiation`, `blundell2010appetite`
14. **The satiety cascade** (Blundell): sensory → cognitive → post-ingestive → post-absorptive signals unfold
    over time; satiation is early-phase, satiety is the sum. A lens, not a literal circuit. → `blundell2010appetite`
15. **Food properties that change fullness for equal calories** (the payoff): **protein** most satiating
    (Weigle 2005 — +protein → spontaneous −441 kcal/day, −4.9 kg/12 wk); **energy density** (eat a constant
    *volume*; water bound *in* food works, water drunk alongside doesn't); **viscous fibre** prolongs
    satiety; **solid > liquid** ("you don't drink your fullness" — DiMeglio 2000); **eating rate** (slow down
    — Robinson 2014 meta-analysis). Mention the **protein-leverage hypothesis** honestly (Gosby 2011 —
    partial support). → `weigle2005highprotein`, `holt1995satietyindex`, `dimeglio2000liquidsolid`,
    `robinson2014eatingrate`, `gosby2011proteinleverage`, `stribitcaia2020energydensity`

**Part 5 — The reward system: hedonic eating.**
16. **Wanting ≠ liking** (the #1 correction): **wanting** = incentive salience, driven by **mesolimbic
    dopamine** (the pull); **liking** = pleasure, driven by **opioid hotspots** (not dopamine). They can come
    apart — you can crave what you no longer enjoy. → `berridge2009dissecting`, `berridge2007dopamine`
17. **Hedonic hunger** — eating for pleasure without energy need (Lowe 2007; Power-of-Food Scale). →
    `lowe2007hedonic`, `espelhuynh2018pfs`
18. **Sensory-specific satiety** = "always room for dessert": pleasantness falls for the food you're eating
    but not for novel foods (Rolls 1981) — why variety/buffets increase intake. → `rolls1981sensory`
19. **The obesogenic environment + hyper-palatable foods.** Food *cues* trigger wanting even when fed
    (Volkow 2017); **hyper-palatable** sugar-fat-salt foods (Fazzino 2019) drive **passive overconsumption**
    — the Hall 2019 inpatient RCT (matched calories/macros, yet +500 kcal/day on ultra-processed; reuse from
    Ch.5, own the reward interpretation). Non-stigmatising: normal reward system, abnormal environment. →
    `volkow2017dopamine`, `fazzino2019hyperpalatable`, `hall2019ultraprocessed`, `berthoud2017blaming`

**Part 6 — Defended body weight and adaptive thermogenesis.**
20. **Weight is defended, not free-floating** — and the defence is **ASYMMETRIC** (strong against loss, weak
    against gain). Teach the debate: **set-point** (thermostat, never physically located) vs **settling-point**
    (environment-driven) vs the modern **dual-intervention-point** synthesis (unregulated middle, strong lower
    brake, leaky upper brake — Speakman). → `speakman2018lipostatic`, `leibel1995energyexpenditure`
21. **Post-loss regain = three coordinated arms:** leptin falls (relative "starvation" signal — restoring
    leptin reverses much of the slowing); ghrelin↑ / satiety peptides↓ (Sumithran 2011 — **persists ≥1 year**);
    **adaptive thermogenesis** (RMR drops *more* than body size predicts). → `sumithran2011hormonal`, `maclean2011biologyresponse`
22. **★ The Biggest Loser, honestly.** Fothergill 2016: ~500 kcal/day unexplained RMR drop persisting 6 y →
    the viral "metabolism permanently damaged" story. **Hall 2022 reinterpretation** (teach this): the
    persistence tracks *sustained high physical activity* (energy compensation), not permanent damage; regain
    wasn't correlated with adaptation. Bottom line: adaptation is real but modest/variable in ordinary
    dieters, largely reversible, and the Biggest Loser is an outlier. **Reconciles with Ch.6** (which called
    it modest/reversible). → `fothergill2016biggestloser`, `hall2022biggestloserreinterpreted`

**Part 7 — Sleep and stress: the neglected pillars.**
23. **Short sleep tilts appetite toward hunger.** Spiegel 2004 (n=12 crossover): leptin −18%, ghrelin +28%,
    hunger +24% (esp. calorie-dense foods); Taheri 2004 (n=1,024, associational) — U-shaped sleep–BMI. Al
    Khatib 2017 meta-analysis: partial sleep loss ≈ **+385 kcal/day** with no change in expenditure. Greer
    2013 (fMRI): weaker cortical brake, louder amygdala. → `spiegel2004sleep`, `taheri2004shortsleep`,
    `alkhatib2017partialsleep`, `greer2013sleepdeprivation`
24. **Chronic stress → "comfort food" → visceral fat** (Dallman 2003 — a *hypothesis*, largely rodent;
    Jackson 2017 hair-cortisol association). Teach as plausible/partly-supported, not proven. → `dallman2003comfortfood`,
    `jackson2017haircortisol`
25. **Meal timing / circadian** — late eating raises hunger and lowers expenditure at equal calories
    (Vujović 2022); circadian misalignment (shift work) is a metabolic stressor (Scheer 2009). →
    `vujovic2022lateeating`, `scheer2009circadianmisalignment`

**Part 8 — The capstone: obesity as a dysregulated system, and the GLP-1 payoff.**
26. **Obesity = a defended system defending an elevated weight** (not willpower). The monogenic cases and the
    persistent post-diet hormone shifts prove hunger is biological. The 2025 Lancet Commission's
    clinical/preclinical *concept* (obesity can be a disease of a dysregulated system) at concept level only.
    → `sumithran2011hormonal`, `rubino2025clinicalobesity`
27. **★ GLP-1 receptor agonists = the physiology made into medicine (MECHANISM ONLY).** They amplify the
    chapter's satiety signalling: **centrally** tip the arcuate balance toward POMC/satiety, **peripherally**
    slow gastric emptying. Efficacy proves appetite is a dial you can turn: semaglutide ~15% (STEP-1, Wilding
    2021), tirzepatide ~21% (SURMOUNT-1, Jastreboff 2022). **Stop the drug → weight returns** (STEP-4;
    STEP-1 extension ~⅔ regained) — the cleanest proof of defended weight. Indications/dosing/side-effects =
    Part III. → `wilding2021step1`, `jastreboff2022surmount1`, `rubino2021step4`, `wilding2022step1extension`
28. **"Eat less, move more" is insufficient, not wrong** — it treats defended, environmentally-cued dials as
    freely chosen. Land the non-stigmatising thesis. → `goff2023weightbiassg`

## 5. Evidence base

*(Web-checked by the research agents; ✅ = agent-verified PMID/DOI, ⚠ = flagged to confirm at lock, see §11.)*

| Teaching point | Source | Level | BibTeX key |
|---|---|---|---|
| AgRP neurons *sufficient* to drive feeding (accelerator) | Aponte et al. 2011, *Nat Neurosci* (PMID 21209617) ✅ | Mouse optogenetics (causal) | `aponte2011agrp` |
| Arcuate wiring / integrator synthesis | Andermann & Lowell 2017, *Neuron* (PMID 28817798) ✅ | Authoritative review | `andermann2017wiring` |
| MC4R = commonest monogenic obesity; dose-dependent | Farooqi et al. 2003, *NEJM* (PMID 12646665) ✅ | Landmark human cohort | `farooqi2003mc4r` |
| Leptin activates POMC / inhibits AgRP | Cowley et al. 2001, *Nature* (PMID 11373681) ✅ | Mouse electrophysiology | `cowley2001leptin` |
| Ghrelin CNS circuit (accelerator) | Cowley et al. 2003, *Neuron* (PMID 12597862) ✅ | Rodent CNS mapping | `cowley2003ghrelin` |
| Adiposity-signal → arcuate framework | Schwartz et al. 2000, *Nature* (PMID 10766253) ✅ | Landmark review | `schwartz2000cns` |
| Leptin (*ob* gene) positional cloning | Zhang et al. 1994, *Nature* (PMID 7984236) ✅ | Landmark primary (mouse) | `zhang1994leptin` |
| Congenital human leptin deficiency | Montague et al. 1997, *Nature* (PMID 9202122) ✅ | Landmark primary (human) | `montague1997congenital` |
| Leptin therapy rescues deficiency | Farooqi et al. 1999, *NEJM* (PMID 10486419 ✅) | Human case | `farooqi1999leptintherapy` |
| Leptin therapy modest/variable in COMMON obesity | Heymsfield et al. 1999, *JAMA* (PMID 10546697) ✅ | RCT | `heymsfield1999recombinant` |
| Leptin as starvation/threshold signal (30-yr synthesis) | Flier & Ahima 2024, *JCI* 134(1):e174595 (PMID 38165042 ✅ — corrected from 39352393) | Review | `flier2024leptin30` |
| Ghrelin discovery (stomach) | Kojima et al. 1999, *Nature* (PMID 10604470) ✅ | Landmark primary | `kojima1999ghrelin` |
| Ghrelin rises pre-meal / meal initiation | Cummings et al. 2001, *Diabetes* (PMID 11473029) ✅ | Human primary | `cummings2001preprandial` |
| Ghrelin rises after diet-induced weight loss | Cummings et al. 2002, *NEJM* (PMID 12023994) ✅ | Human primary | `cummings2002weightloss` |
| CCK reduces meal size (first satiety peptide) | Gibbs, Young & Smith 1973 (PMID 4745816) ✅ | Rat primary (foundational) | `gibbs1973cck` |
| PYY3-36 cuts intake ~⅓ at physiological dose | Batterham et al. 2002, *Nature* (PMID 12167864) ✅ | Human + rodent | `batterham2002pyy` |
| GLP-1 satiety physiology (discoverer reflections) | Holst 2024, *Eur J Clin Nutr* (PMID 38890501) ✅ | Review | `holst2024reflections` |
| "Satiety peptides": pharmacology vs physiology (honesty) | Lim & Poppitt 2019, *Nutrients* (PMID 31277416) ✅ | Review | `lim2019satiety` |
| Satiation/satiety/cascade definitions | Blundell et al. 2010, *Obes Rev* (PMID 20122136); Benelam 2009, *Nutr Bull* (DOI 10.1111/j.1467-3010.2009.01753.x) ✅ | Consensus / teaching review | `blundell2010appetite`, `benelam2009satiation` |
| Protein most satiating (spontaneous −441 kcal/day) | Weigle et al. 2005, *AJCN* (PMID 16002798) ✅ | Human controlled feeding | `weigle2005highprotein` |
| Satiety index of common foods | Holt et al. 1995, *EJCN* (PMID 7498104) ✅ | Classic small human study | `holt1995satietyindex` |
| Solid > liquid calories (no compensation for soda) | DiMeglio & Mattes 2000, *Int J Obes* (PMID 10878689) ✅ | Small crossover | `dimeglio2000liquidsolid` |
| Slower eating → lower intake | Robinson et al. 2014, *AJCN* (PMID 24847856) ✅ | Systematic review/MA | `robinson2014eatingrate` |
| Protein leverage (partial support) | Gosby et al. 2011, *PLoS One* (PMID 22022472) ✅ | Small RCT crossover | `gosby2011proteinleverage` |
| Energy density / texture and satiety | Stribiţcaia et al. 2020, *Sci Rep* (DOI 10.1038/s41598-020-69504-y ✅) | Systematic review/MA | `stribitcaia2020energydensity` |
| Wanting vs liking (reward components) | Berridge, Robinson & Aldridge 2009 (PMID 19162544); Berridge 2007 (PMID 17072591) ✅ | Authoritative reviews | `berridge2009dissecting`, `berridge2007dopamine` |
| Hedonic hunger + Power-of-Food Scale | Lowe & Butryn 2007 (PMID 17531274); Espel-Huynh et al. 2018 (PMID 29951214) ✅ | Conceptual/narrative review | `lowe2007hedonic`, `espelhuynh2018pfs` |
| Sensory-specific satiety | Rolls et al. 1981, *Physiol Behav* (PMID 7267792) ✅ | Landmark human experiment | `rolls1981sensory` |
| Food cues / dopamine motive system | Volkow, Wise & Baler 2017, *Nat Rev Neurosci* (PMID 29142296) ✅ | Authoritative review | `volkow2017dopamine` |
| Hyper-palatable foods definition | Fazzino et al. 2019, *Obesity* (PMID 31689013) ✅ | Methods/definition | `fazzino2019hyperpalatable` |
| Hedonic + homeostatic integration | Berthoud et al. 2017, *Gastroenterology* (PMID 28192106) ✅ | Integrative review | `berthoud2017blaming` |
| Ultra-processed diets → +500 kcal/day (matched macros) | Hall et al. 2019, *Cell Metab* (PMID 31105044) ✅ *(shared w/ Ch.5)* | Inpatient RCT (n=20) | `hall2019ultraprocessed` |
| Set-point unlikely to evolve; dual-intervention-point | Speakman 2018, *Mol Metab* (PMID 29129612) ✅ | Theory/modelling | `speakman2018lipostatic` |
| Energy expenditure changes with altered weight | Leibel, Rosenbaum & Hirsch 1995, *NEJM* (PMID 7632212) ✅ | Human perturbation | `leibel1995energyexpenditure` |
| Hormonal adaptations to weight loss persist ≥1 y | Sumithran et al. 2011, *NEJM* (PMID 22029981) ✅ | Human primary | `sumithran2011hormonal` |
| Biology's response to dieting (regain) | MacLean et al. 2011, *AJP-Regu* (PMID 21677272) ✅ | Integrative review | `maclean2011biologyresponse` |
| Biggest Loser persistent metabolic adaptation | Fothergill et al. 2016, *Obesity* (PMID 27136388) ✅ | Human longitudinal (n=14) | `fothergill2016biggestloser` |
| Biggest Loser reinterpreted (energy compensation) | Hall 2022, *Obesity* (PMID 34816627) ✅ *(shared w/ Ch.6)* | Commentary/reanalysis | `hall2022biggestloserreinterpreted` |
| Sleep curtailment: leptin↓ ghrelin↑ hunger↑ | Spiegel et al. 2004, *Ann Intern Med* (PMID 15583226) ✅ | Human crossover (n=12) | `spiegel2004sleep` |
| Short sleep ↔ leptin↓ ghrelin↑ BMI↑ (population) | Taheri et al. 2004, *PLoS Med* (PMID 15602591) ✅ | Cross-sectional (n=1,024) | `taheri2004shortsleep` |
| Sleep loss → +385 kcal/day (no ΔEE) | Al Khatib et al. 2017, *EJCN* (PMID 27804960) ✅ | Meta-analysis | `alkhatib2017partialsleep` |
| Sleep loss → weaker cortical brake (fMRI) | Greer et al. 2013, *Nat Commun* (PMID 23922121) ✅ | Small fMRI crossover | `greer2013sleepdeprivation` |
| Stress/cortisol → comfort food → visceral fat (hypothesis) | Dallman et al. 2003, *PNAS* (PMID 12975524) ✅ | Rodent-derived review | `dallman2003comfortfood` |
| Hair cortisol ↔ adiposity (association) | Jackson et al. 2017, *Obesity* (PMID 28229550) ✅ | Cross-sectional (n=2,527) | `jackson2017haircortisol` |
| Late eating ↑hunger ↓EE at equal calories | Vujović et al. 2022, *Cell Metab* (PMID 36198293) ✅ | Controlled crossover | `vujovic2022lateeating` |
| Circadian misalignment → leptin↓, metabolic harm | Scheer et al. 2009, *PNAS* (PMID 19255424) ✅ | Lab protocol | `scheer2009circadianmisalignment` |
| Clinical vs preclinical obesity (concept) | Rubino et al. 2025, *Lancet Diab Endo* (DOI 10.1016/S2213-8587(24)00316-4) ✅ | Consensus commission | `rubino2025clinicalobesity` |
| Semaglutide ~15% weight loss | Wilding et al. 2021 (STEP-1), *NEJM* (PMID 33567185) ✅ | Phase-3 RCT | `wilding2021step1` |
| Tirzepatide ~21% weight loss | Jastreboff et al. 2022 (SURMOUNT-1), *NEJM* (PMID 35658024) ✅ | Phase-3 RCT | `jastreboff2022surmount1` |
| Weight regain on stopping (continued vs placebo) | Rubino et al. 2021 (STEP-4), *JAMA* (PMID 33755728) ✅ | RCT withdrawal | `rubino2021step4` |
| Weight regain ~⅔ one year after stopping | Wilding et al. 2022 (STEP-1 extension), *DOM* (PMID 35441470) ✅ | RCT extension | `wilding2022step1extension` |
| **SG:** faster eating → higher intake/adiposity (GUSTO) | Fogel et al. 2017, *Br J Nutr* (PMID 28462734) ✅ | SG prospective cohort | `fogel2017gusto` |
| **SG:** hawker/eating-out central to daily life | Tan & Arcaya 2020, *IJBNPA* (PMID 33081793) ✅ | SG cross-sectional survey | `tan2020whereweeat` |
| **SG:** weight bias in healthcare (non-stigmatising) | Goff, Lee & Tham 2023, *Singapore Med J* (PMID 36876621) ✅ | SG narrative review | `goff2023weightbiassg` |
| **SG:** sleep ↔ adiposity in multi-ethnic cohort | Low et al. 2025 (HELIOS), *Int J Obes* (PMID 39562689) ✅ | SG cross-sectional | `helios2024sleepadiposity` |
| **SG:** obesity prevalence trend; Nutri-Grade; War on Diabetes | MOH/HPB National Population Health Survey 2024; Nutri-Grade policy 2022–23 | National survey/policy | `mohnphs2024`, `mohnutrigrade2022`, `mohWarOnDiabetes` *(LIB)* |
| **SG:** energy content of common local meals | Yeo et al. 2021, *Foods* 10(7):1659 (PMID 34359529 ✅ — corrected from `tan2021sgmeals`/34371853) | SG dietary survey | `yeo2021sgmeals` |

## 6. Singapore context

*(All socio-cultural / behavioural / policy — per the editor citation principle; no local basic-metabolism.)*

- **The obesogenic environment is the flagship anchor.** Hawker centres, food courts, coffee shops and
  24-hour options make palatable, energy-dense food cheap, abundant and always cue-visible; ~6 in 10 residents
  usually eat out (Tan & Arcaya 2020). This is the lived version of the chapter's hedonic/food-cue section. →
  `tan2020whereweeat`
- **Eating rate — a genuine SG cohort.** The **GUSTO** birth cohort links faster eating to higher intake and
  adiposity in Singaporean children (Fogel 2017) — a locally grounded anchor for "slow down," legitimate
  under the citation rule (population/behavioural). → `fogel2017gusto`
- **Sugary drinks + Nutri-Grade as an *environmental* lever.** SSBs are Singapore's largest dietary-sugar
  source; the **Nutri-Grade** grading + grade-D advertising ban (from 30 Dec 2022; extended to fresh drinks
  30 Dec 2023) is a concrete example of *changing defaults, not blaming individuals*, with measurable
  reformulation (median pre-packed sugar 7.1% → 4.6%). → `mohnutrigrade2022`
- **A sleep-deprived, high-stress society.** Short average sleep, exam-pressure culture (JC/university
  all-nighters), and a large shift-work economy make the sleep/stress-appetite link (Spiegel/Taheri) locally
  resonant; the **HELIOS** multi-ethnic cohort links shorter/poorer sleep to greater adiposity in Singaporeans.
  → `helios2024sleepadiposity`, `spiegel2004sleep`
- **Rising, "sticky" prevalence + non-stigmatising practice.** Adult obesity rose (NPHS 2024) despite
  sustained effort — illustrating defended population weight; and **weight bias among SG healthcare
  professionals** (Goff 2023) makes the non-stigmatising, environment×biology framing clinically important,
  not just theoretical. → `mohnphs2024`, `goff2023weightbiassg`
- **"War on Diabetes"** (MOH, 2016– ) ties obesity to downstream cardiometabolic disease — the national hook
  for "a regulated system with real consequences." → `mohWarOnDiabetes`
- **The unifying SG message:** "just eat less, move more" is **insufficient, not wrong** — it treats
  biologically defended, environmentally cued appetite as a freely chosen dial.

## 7. Pillar intersections

- **nutrition × the whole Part I arc:** the capstone — converts Ch.2's energy balance into a *regulated,
  defended* system, gives leptin/insulin (Ch.2/Ch.6) and the gut hormones (Ch.5) their *appetite* home, and
  reuses Ch.5's UPF trial and Ch.6's adaptive-thermogenesis reconciliation.
- **nutrition × sleep:** the clearest, most actionable sleep–diet mechanism in the book (Spiegel/Al Khatib).
- **nutrition × stress / mental health:** cortisol/comfort-food, hedonic eating and the non-stigmatising frame.
- **nutrition × physical activity:** the constrained-energy model (Biggest Loser reinterpretation) links
  activity to defended weight.
- **nutrition × evidence literacy:** leptin hype, "food addiction," Biggest Loser headline vs data, and
  GLP-1 "easy way out" are repeated hype-vs-evidence exercises (→ evidence-literacy chapter).
- **nutrition × clinical medicine / behaviour change:** obesity as a chronic regulated disease; GLP-1
  mechanism; when-to-refer (management → Part III).

## 8. Clinical application & case ideas (branching, recognition altitude)

- **Case A — "The rebound / why did it come back?"** (defended weight): a Singaporean who loses ~12 kg then
  regains despite "doing everything right"; branches attribute regain to willpower (corrected) vs coordinated
  biology (leptin↓, ghrelin↑, adaptive thermogenesis), and "is my metabolism permanently damaged?" (honest
  Biggest-Loser answer). The chapter's flagship non-stigmatising case.
- **Case B — "The new injection"** (GLP-1 mechanism payoff): a patient on a weekly GLP-1 agonist feels full
  faster; branches explain *which* physiology is amplified (arcuate satiety + slowed emptying) and "what if
  they stop?" (STEP-4). Guardrail: no dose/side-effect/eligibility questions (Part III).
- **Case C — "Just eat less, lah?"** (SG capstone): a shift-worker with short sleep, late 24-h hawker suppers
  and daily sugary drinks; learner explains why ELMM alone is insufficient (sleep→ghrelin/leptin; hedonic
  environment; defended biology) + one environmental lever (Nutri-Grade).
- **Case D — "Two lunches, same calories"** (satiety cascade): chicken rice + bubble tea eaten fast vs
  fish/veg/brown-rice eaten slowly with water — predict earlier hunger and name the cascade phases/food
  properties.
- **Case E — "Full but still eating"** (hedonic): finishing a full plate then buying dessert — name hedonic
  hunger, sensory-specific satiety, and wanting-vs-liking.
- **Case F — "The leptin headline"** (evidence literacy): a wellness-blog claim that obese people "just need
  leptin"; distinguish rare deficiency (leptin works) from common resistance (leptin fails). *(Log candidates
  in `../cases/case-bank.md`.)*

## 9. Common misconceptions & pitfalls

1. **"Leptin/ghrelin swapped."** Leptin (from fat) = satiety/long-term; **ghrelin** (from empty stomach) =
   hunger. The single commonest slip.
2. **"Obese people need leptin."** They have *high* leptin and are *resistant*; leptin helps only rare
   deficiency (Heymsfield). The key correction of the adiposity section.
3. **"Appetite is willpower."** MC4R deficiency and persistent post-diet hormone shifts show hunger is
   biologically generated.
4. **"Dopamine is the pleasure chemical."** Dopamine = *wanting* (motivation), not *liking* (pleasure).
5. **"There's a fixed set-point you can't change."** No set-point has been located; the modern view is a
   defended *range* with a strong lower and leaky upper brake.
6. **"Metabolic adaptation permanently wrecks your metabolism."** Overstated — modest/variable and largely
   reversible; the ~500 kcal figure is the Biggest-Loser outlier (Hall 2022 reinterpretation).
7. **"The body defends against gaining as hard as losing."** No — the defence is **asymmetric**.
8. **"Regain is a willpower failure."** It's the predicted output of a defended system.
9. **"You can drink your fullness."** Liquid calories give weak satiety (DiMeglio).
10. **"Always room for dessert = the stomach makes space."** No — sensory-specific satiety (a brain/sensory
    phenomenon), not gastric volume.
11. **"Sugar is addictive like cocaine."** Real circuit overlap, but "food addiction" is an unresolved
    construct — present cautiously.
12. **"Hyper-palatable foods overeat you only via calories."** Hall matched calories/macros — palatability/
    processing drove +500 kcal/day.
13. **"Stress→belly fat is proven."** Largely rodent/associational (Dallman/Jackson) — plausible, not proven.
14. **"GLP-1 drugs are cosmetic / the easy way out."** They amplify the body's own satiety signalling;
    weight returns when stopped — a chronic-disease treatment, not a cheat.
15. **"Nutri-Grade is nanny-state moralising."** It's an *environmental* default lever, the opposite of
    individual blame.

## 10. Proposed interactive elements

**Flagship island — the "appetite thermostat" arcuate stepper** (data-driven inline-SVG, shared design
language with the Ch.6/Ch.7 islands). Reuse the same node/edge/stepper pattern (`MetabolicMap`/`ScfaFlow`):
the arcuate NPY/AgRP↔POMC/CART↔MC4R circuit as a stepper over **states** — *fasted*, *fed*, *post-weight-loss
(defended)*, *+GLP-1 agonist* — each re-weighting the accelerator/brake and showing the net hunger/satiety
output (and a small gastric-emptying icon for the +GLP-1 step). This one island carries Parts 1, 6 and 8 and
literally shows the GLP-1 drug plugging into the same diagram. Manifest: `{state, npyDrive, pomcDrive,
gastricEmptying, hungerOutput}`.

**Secondary islands** (build 1–2, keep the rest as static figures/Mermaid): (a) **"One meal, four signals"**
ghrelin/CCK/GLP-1/PYY + distension time-course stepper across a day (the short-clock); (b) **"The satiety
cascade timeline"** (sensory→cognitive→post-ingestive→post-absorptive bands with satiation/satiety zones);
(c) **"Wanting vs liking"** two-meter reward stepper (dopamine pull vs opioid pleasure, with sensory-specific
satiety on the 10th bite); (d) **"Defended weight"** post-loss stepper (leptin↓, ghrelin↑, RMR extra-drop =
red adaptive-thermogenesis slice) using Sumithran/Fothergill numbers; (e) **Nutri-Grade sorter** (drag SG
drinks into A–D bins) — SG mini-interactive.

**Molecule gallery (RDKit, effort S):** the small signalling molecules are peptides (not 2D-drawable
usefully), so **skip a peptide gallery**; optionally show **dopamine** (`NCCc1ccc(O)c(O)c1`) and **serotonin**
for the reward aside, or omit. (Prefer schematic node diagrams over molecule structures for this chapter.)

**Mermaid diagrams:** the comfort-food loop (stress→cortisol→comfort food→visceral fat, arrows coloured by
evidence strength); the ileal brake; the two-clock overview.

**Quiz topics:** leptin vs ghrelin direction; what MC4R deficiency proves; why leptin therapy fails in common
obesity; hunger vs satiation vs satiety; which food property sustains fullness; wanting vs liking; why
"always room for dessert"; the three arms of regain; is metabolism "permanently damaged"? (honest); how
GLP-1 drugs work + what happens when you stop; sleep→appetite direction; why ELMM is insufficient.

## 11. Evidence gaps / open questions / to-research (verify-before-lock)

> **✅ ADVERSARIAL VERIFICATION DONE (2026-07-05, workflow `ch8-dossier-verify`).** All load-bearing
> quantitative claims were refute-tested and **confirmed** (MC4R ~5.8%; leptin-therapy modest; sleep
> +385 kcal/day; Spiegel −18/+28/+24%; Weigle −441 kcal/−4.9 kg; STEP-1 14.9% / SURMOUNT-1 20.9–22.5%;
> Fothergill −499 kcal/n=14 + Hall reinterpretation; Sumithran persists ≥1 y; PYY3-36 −33%; Nutri-Grade
> 7.1%→4.6%). **Citation fixes applied:** Farooqi 1999 = **PMID 10486419** (10490427 was an unrelated paper);
> `flier2024leptin30` **39352393 → 38165042** (JCI 134(1):e174595); `tan2021sgmeals` was wrong → **`yeo2021sgmeals`,
> Yeo et al. 2021 *Foods* 10(7):1659, PMID 34359529**; `stribitcaia2020energydensity` confirmed;
> `melson2025glp1mechanism` **DROPPED** (misattributed to "Melson"; real authors Moiz et al.; unneeded — GLP-1
> is taught from Holst 2024 + the primary trials). The critic rated the dossier "strong, well-scoped."
> **Draft-time fixes it flagged (do these when writing the chapter):**

- **Trim GLP-1 to MECHANISM-only (map discipline).** Keep ONE headline efficacy number per drug + the
  stop→regain proof (to make "appetite is a dial" and "weight is defended"); **bracket STEP-1/SURMOUNT-1/
  STEP-4/extension as Part III**, don't teach them at full trial weight. Give the Rubino 2025 Lancet
  clinical/preclinical *criteria* the same one-line-signpost treatment (teach the *concept*, not the criteria).
- **Standardise numbers across §1/§4/cases/quiz:** semaglutide **14.9%**; tirzepatide **20.9–22.5%
  (dose-dependent)**; Fothergill **~500 kcal/day, n=14**; Spiegel **−18/+28/+24%** — one figure each.
- **Build the two headline INTEGRATION promises, don't just assert them:** (a) add an explicit **Ch.2
  loop-closure** in Part 6 mapping adaptive thermogenesis onto Ch.2's energy-balance / TEE terms (defended
  weight = the expenditure side pushing back); (b) add a one-line **Ch.7 microbiome→satiety receiving link**
  (SCFA→GLP-1/PYY forwarded from Ch.7) so the hand-off lands.
- **Meal-timing/circadian (Vujović/Scheer) is NOT in the map's Ch.8 spine** — fold it briefly *under* the
  sleep/stress pillar as an extension, or cut; don't give it a standalone movement.
- **Amylin:** the map lists it under Ch.8 but NOT under Ch.5's owned gut hormones — **define amylin here**
  (co-secreted with insulin, meal-triggered satiety), don't cross-ref Ch.5 for it.
- **Stress pillar needs a hook** parallel to sleep's HELIOS/SG anchor (billing is currently asymmetric —
  sleep is strong, stress honestly-caveated but thinner).
- **Dedupe near-duplicate keys** before writing the bib: `zhang1994positional`=`zhang1994leptin` (7984236);
  `sumithran2011hormonal`=`sumithran2011persistence` (22029981); `spiegel2004sleepcurtailment`=`spiegel2004sleep`
  (15583226); `taheri2004` ×2 (15602591); `fothergill2016biggestloser` ×2; `montague1997congenital` ×2;
  `nns2010singapore` is actually **`tan2020whereweeat`** (both PMID 33081793) — drop the `nns2010singapore`
  mislabel.
- **Numbers to confirm at write-time:** Spiegel deltas (leptin −18%, ghrelin +28%, hunger +24%); Al Khatib
  **+385 kcal/day**; Weigle −441 kcal/day / −4.9 kg; PYY3-36 "~⅓"; STEP-1 ~14.9%, SURMOUNT-1 ~20.9–22.5%;
  Fothergill ~499–500 kcal/day / n=14; Nutri-Grade 7.1%→4.6%; NPHS obesity 10.5%→12.7%. State small/short/
  outlier caveats in-text.
- **Honesty flags to preserve in the chapter:** AgRP optogenetics + Cowley electrophysiology are **mouse**;
  leptin-resistance *mechanisms* are unsettled/mouse; Dallman comfort-food is **rodent/hypothesis**;
  Biggest Loser is an **outlier** and its persistence is contested (Hall reinterpretation); protein-leverage
  is **partial**; "food addiction" is an **unresolved construct**.
- **Overlap discipline (check at draft):** do not re-teach gut-hormone secretion (Ch.5), leptin/insulin
  metabolism (Ch.6), energy-balance derivation (Ch.2), or the microbial gut-brain axis (Ch.7); GLP-1 stays
  **mechanism-only** (dosing/indications/side-effects/bariatric = Part III).
- **BibTeX:** all keys are **net-new** except `mohWarOnDiabetes`, `mohNutriGrade`/`hpbNutriGrade`,
  `mohNNS2022`, `hall2019ultraprocessed` (Ch.5), `hall2022biggestloserreinterpreted` (=Ch.6's
  `hall2022biggestloser` — **reuse that key, don't duplicate**), `dallman2003`/`spiegel2004`/`taheri2004`
  (may exist from the old `09-overnutrition` dossier — reuse). Confirm before adding.
- **Sleep/stress reuse:** the old `09-overnutrition.md` dossier already holds `sleepRestriction`
  (=Spiegel) and `dallman2003` — reconcile keys.

## 12. References

*(Grouped by movement; identifiers as web-checked by the research agents — verify per §11 before lock.
New unless marked [LIB].)*

**The thermostat (hypothalamus).** `aponte2011agrp` (Aponte 2011, *Nat Neurosci*, PMID 21209617);
`andermann2017wiring` (Andermann & Lowell 2017, *Neuron*, PMID 28817798); `farooqi2003mc4r` (Farooqi 2003,
*NEJM*, PMID 12646665); `cowley2001leptin` (Cowley 2001, *Nature*, PMID 11373681); `cowley2003ghrelin`
(Cowley 2003, *Neuron*, PMID 12597862); `schwartz2000cns` (Schwartz 2000, *Nature*, PMID 10766253).

**Adiposity signals (leptin).** `zhang1994leptin` (Zhang 1994, *Nature*, PMID 7984236); `montague1997congenital`
(Montague 1997, *Nature*, PMID 9202122); `farooqi1999leptintherapy` (Farooqi 1999, *NEJM* 341(12):879-884, PMID 10486419);
`heymsfield1999recombinant` (Heymsfield 1999, *JAMA*, PMID 10546697); `flier2024leptin30` (Flier & Ahima 2024,
*JCI* 134(1):e174595, PMID 38165042).

**Gut peptides.** `kojima1999ghrelin` (Kojima 1999, *Nature*, PMID 10604470); `cummings2001preprandial`
(Cummings 2001, *Diabetes*, PMID 11473029); `cummings2002weightloss` (Cummings 2002, *NEJM*, PMID 12023994);
`gibbs1973cck` (Gibbs 1973, PMID 4745816); `batterham2002pyy` (Batterham 2002, *Nature*, PMID 12167864);
`holst2024reflections` (Holst 2024, *EJCN*, PMID 38890501); `lim2019satiety` (Lim & Poppitt 2019, *Nutrients*,
PMID 31277416).

**Satiation/satiety + food properties.** `blundell2010appetite` (Blundell 2010, *Obes Rev*, PMID 20122136);
`benelam2009satiation` (Benelam 2009, *Nutr Bull*, DOI 10.1111/j.1467-3010.2009.01753.x); `weigle2005highprotein`
(Weigle 2005, *AJCN*, PMID 16002798); `holt1995satietyindex` (Holt 1995, *EJCN*, PMID 7498104);
`dimeglio2000liquidsolid` (DiMeglio & Mattes 2000, PMID 10878689); `robinson2014eatingrate` (Robinson 2014,
*AJCN*, PMID 24847856); `gosby2011proteinleverage` (Gosby 2011, *PLoS One*, PMID 22022472);
`stribitcaia2020energydensity` (Stribiţcaia 2020, *Sci Rep*, DOI 10.1038/s41598-020-69504-y).

**Hedonic / reward.** `berridge2009dissecting` (PMID 19162544); `berridge2007dopamine` (PMID 17072591);
`lowe2007hedonic` (PMID 17531274); `espelhuynh2018pfs` (PMID 29951214); `rolls1981sensory` (PMID 7267792);
`volkow2017dopamine` (PMID 29142296); `fazzino2019hyperpalatable` (PMID 31689013); `berthoud2017blaming`
(PMID 28192106); `hall2019ultraprocessed` (Hall 2019, *Cell Metab*, PMID 31105044) **[LIB, Ch.5]**.

**Defended weight.** `speakman2018lipostatic` (PMID 29129612); `leibel1995energyexpenditure` (PMID 7632212);
`sumithran2011hormonal` (Sumithran 2011, *NEJM*, PMID 22029981); `maclean2011biologyresponse` (PMID 21677272);
`fothergill2016biggestloser` (PMID 27136388); `hall2022biggestloserreinterpreted` = **reuse Ch.6's**
`hall2022biggestloser` (PMID 34816627).

**Sleep & stress.** `spiegel2004sleep` (PMID 15583226); `taheri2004shortsleep` (PMID 15602591);
`alkhatib2017partialsleep` (PMID 27804960); `greer2013sleepdeprivation` (PMID 23922121); `dallman2003comfortfood`
(PMID 12975524); `jackson2017haircortisol` (PMID 28229550); `vujovic2022lateeating` (PMID 36198293);
`scheer2009circadianmisalignment` (PMID 19255424).

**Clinical / GLP-1 / SG.** `rubino2025clinicalobesity` (Rubino 2025, *Lancet D&E*, DOI 10.1016/S2213-8587(24)00316-4);
`wilding2021step1` (PMID 33567185); `jastreboff2022surmount1` (PMID 35658024); `rubino2021step4` (PMID 33755728);
`wilding2022step1extension` (PMID 35441470); `fogel2017gusto` (GUSTO, PMID 28462734); `tan2020whereweeat`
(PMID 33081793); `goff2023weightbiassg` (PMID 36876621); `helios2024sleepadiposity` (HELIOS, PMID 39562689);
`yeo2021sgmeals` (Yeo et al. 2021, *Foods* 10(7):1659, PMID 34359529); `mohnphs2024`, `mohnutrigrade2022`;
`mohWarOnDiabetes` **[LIB]**.
