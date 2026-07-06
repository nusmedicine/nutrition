<script>
  // BoneBank — the Bone Health & Osteoporosis chapter's "build the bank, defend the balance" widget for
  // the "bone is a living bank" section. The learner manipulates a life-course bone-mineral-density curve
  // with three levers — the peak bone mass built by ~age 30 (a modifiable band over a heritable floor),
  // the age-related loss rate, and the menopause age — and the widget shows WHEN the curve crosses the
  // osteoporosis threshold, expressed as YEARS OF DELAY vs an average skeleton. The teaching point (anchored
  // to Hernandez 2003): a higher peak buys the most delay — and the output is explicitly labelled "years of
  // delay, NOT a change in fracture rate", the chapter's key precision point. An illustrative model, not a
  // clinical calculator. Range sliders + a segmented group (all keyboard-operable); an aria-live readout.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'bone-bank',
    title: 'Build the bank, defend the balance',
    intro:
      "Bone is a bank: you build it to a peak by about 30, then draw it down for life — faster around menopause. Move the levers and watch WHEN the account crosses the osteoporosis line. The biggest lever is the peak you build young.",
    lossOptions: [
      { id: 'slow', label: 'Slow', mult: 0.88 },
      { id: 'average', label: 'Average', mult: 1.0 },
      { id: 'fast', label: 'Fast', mult: 1.12 },
    ],
    caption:
      "A higher peak delays osteoporosis by more years than later menopause or slower loss — the youth deposit pays off most. This is YEARS OF DELAY, not a change in fracture rate: never convert it to a percentage of fractures.",
    credit: 'Illustrative life-course model after Hernandez 2003 (a modelled 10% higher peak BMD delays osteoporosis ~13 years). A teaching aid, not a clinical calculator.',
  };

  let data = $state(null);
  let error = $state(null);

  // levers
  let peakDelta = $state(0); // -10..+10 % around the reference peak (the modifiable band)
  let lossId = $state('average');
  let menoAge = $state(51); // 45..58

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('bone-bank:' + data.id);
    if (saved) {
      if (Number.isFinite(saved.peakDelta)) peakDelta = Math.max(-10, Math.min(10, saved.peakDelta));
      if (typeof saved.lossId === 'string') lossId = saved.lossId;
      if (Number.isFinite(saved.menoAge)) menoAge = Math.max(45, Math.min(58, saved.menoAge));
    }
  });

  let lossOptions = $derived(data ? data.lossOptions || FALLBACK.lossOptions : FALLBACK.lossOptions);
  const THRESHOLD = 0.7; // illustrative osteoporosis line (≈ T-score -2.5)
  const PEAK_AGE = 30;
  const END_AGE = 90;

  const lossMult = (id) => (lossOptions.find((o) => o.id === id) || { mult: 1 }).mult;

  // BMD at a given age for the chosen levers (illustrative). The loss-rate lever modulates the slow
  // age-related (chronic) loss ONLY; the menopause spike is fixed and driven by the menopause-age lever —
  // this keeps peak bone mass the dominant lever (Hernandez 2003: peak >> menopause ~ loss).
  function bmdAt(age, pDelta, mult, meno) {
    const peak = 1.0 * (1 + pDelta / 100);
    if (age <= PEAK_AGE) return peak * (0.85 + (0.15 * (age - 20)) / 10);
    const preMeno = Math.max(0, Math.min(age, meno) - PEAK_AGE);
    const menoYrs = Math.max(0, Math.min(age, meno + 7) - meno);
    const postYrs = Math.max(0, age - (meno + 7));
    const chronic = mult * (0.003 * preMeno + 0.008 * postYrs);
    const spike = 0.02 * menoYrs;
    return peak - (chronic + spike);
  }

  function crossingAge(pDelta, mult, meno) {
    for (let a = PEAK_AGE; a <= END_AGE; a++) if (bmdAt(a, pDelta, mult, meno) <= THRESHOLD) return a;
    return null; // never crosses within range
  }

  let cross = $derived(crossingAge(peakDelta, lossMult(lossId), menoAge));
  let baselineCross = $derived(crossingAge(0, 1.0, 51));
  let yearsDelay = $derived(cross != null && baselineCross != null ? cross - baselineCross : null);

  // curve geometry (viewBox 0 0 480 200)
  const X0 = 40, X1 = 460, Y0 = 20, Y1 = 180, BMD_HI = 1.15, BMD_LO = 0.55;
  const xOf = (age) => X0 + ((age - 20) / (END_AGE - 20)) * (X1 - X0);
  const yOf = (bmd) => Y0 + ((BMD_HI - bmd) / (BMD_HI - BMD_LO)) * (Y1 - Y0);
  const yThresh = yOf(THRESHOLD);

  function pathFor(pDelta, mult, meno) {
    let d = '';
    for (let a = 20; a <= END_AGE; a++) {
      const x = xOf(a).toFixed(1), y = yOf(bmdAt(a, pDelta, mult, meno)).toFixed(1);
      d += (a === 20 ? 'M' : 'L') + x + ',' + y + ' ';
    }
    return d.trim();
  }
  let curvePath = $derived(pathFor(peakDelta, lossMult(lossId), menoAge));
  let baselinePath = $derived(pathFor(0, 1.0, 51));

  let delayKind = $derived(yearsDelay == null ? 'neutral' : yearsDelay > 0 ? 'good' : yearsDelay < 0 ? 'warn' : 'neutral');
  let liveText = $derived.by(() => {
    if (cross == null) return `Crosses the osteoporosis line beyond age ${END_AGE} — off the chart.`;
    const d = yearsDelay;
    const rel = d > 0 ? `${d} years later than` : d < 0 ? `${-d} years earlier than` : 'about the same as';
    return `Osteoporosis line reached around age ${cross} — ${rel} an average skeleton.`;
  });

  function persist() {
    if (data) save('bone-bank:' + data.id, { peakDelta, lossId, menoAge });
  }
  function setPeak(v) { peakDelta = +v; persist(); }
  function setMeno(v) { menoAge = +v; persist(); }
  function setLoss(id) { lossId = id; persist(); }
</script>

{#if !data}
  <div class="bb card"><p>Loading…</p></div>
{:else}
  <figure class="bb card">
    <figcaption class="head">
      <strong>{data.title || 'Build the bank, defend the balance'}</strong>
      <span class="hint">Move the levers · watch when the account runs low</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="grid">
      <div class="controls">
        <label class="ctl">
          <span class="clab">Peak bone mass built by ~30 <span class="cval">{peakDelta > 0 ? '+' : ''}{peakDelta}%</span></span>
          <input type="range" min="-10" max="10" step="2" value={peakDelta}
                 oninput={(e) => setPeak(e.currentTarget.value)}
                 aria-label="Peak bone mass, percent above or below average" />
          <span class="cnote">the modifiable band over a mostly-inherited floor</span>
        </label>

        <div class="ctl">
          <span class="clab">Age-related loss rate</span>
          <div class="seg" role="group" aria-label="Age-related bone-loss rate">
            {#each lossOptions as o (o.id)}
              <button type="button" class="segb" class:on={lossId === o.id}
                      aria-pressed={lossId === o.id} onclick={() => setLoss(o.id)}>{o.label}</button>
            {/each}
          </div>
        </div>

        <label class="ctl">
          <span class="clab">Menopause age <span class="cval">{menoAge}</span></span>
          <input type="range" min="45" max="58" step="1" value={menoAge}
                 oninput={(e) => setMeno(e.currentTarget.value)}
                 aria-label="Menopause age" />
          <span class="cnote">women lose bone faster for ~7 years afterwards</span>
        </label>
      </div>

      <div class="chartwrap">
        <svg class="chart" viewBox="0 0 480 200" role="img"
             aria-label="Life-course bone-density curve. {liveText}">
          <!-- threshold -->
          <line x1={X0} y1={yThresh} x2={X1} y2={yThresh} class="thresh" />
          <text x={X1} y={yThresh - 5} class="threshlbl" text-anchor="end">osteoporosis line</text>
          <!-- baseline (average) curve, faint -->
          <path d={baselinePath} class="baseline" />
          <!-- current curve -->
          <path d={curvePath} class="curve" />
          <!-- crossing marker -->
          {#if cross != null}
            <circle cx={xOf(cross)} cy={yThresh} r="4.5" class="dot" />
            <text x={xOf(cross)} y={yThresh + 18} class="dotlbl" text-anchor={xOf(cross) > 420 ? 'end' : 'middle'}>age {cross}</text>
          {/if}
          <!-- axis hints -->
          <text x={X0} y="196" class="axlbl">age 20</text>
          <text x={X1} y="196" class="axlbl" text-anchor="end">90</text>
        </svg>
      </div>
    </div>

    <div class="readout readout-{delayKind}" aria-live="polite">
      <div class="rhead">
        <span class="rbig">{yearsDelay == null ? '—' : (yearsDelay > 0 ? '+' : '') + yearsDelay}</span>
        <span class="runit">years of delay<br />vs an average skeleton</span>
      </div>
      <p class="rtext">{liveText}</p>
      <p class="rwarn">This is <strong>years of delay</strong> — <em>not</em> a change in fracture rate. Never convert it to a percentage of fractures.</p>
    </div>

    {#if data.caption}<p class="caption">{data.caption}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .bb {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --warn:#b0471d; --warn-bg:#fdf2ec;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .bb.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .bb .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .bb .hint { font-size:.78rem; color:var(--muted); }
  .bb .intro { font-size:.92rem; margin:0 0 12px; }
  .bb button { font:inherit; cursor:pointer; }

  .bb .grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; align-items:start; }
  @media (max-width:560px) { .bb .grid { grid-template-columns:1fr; } }

  .bb .controls { display:grid; gap:14px; }
  .bb .ctl { display:flex; flex-direction:column; gap:5px; }
  .bb .clab { font-size:.83rem; font-weight:600; display:flex; justify-content:space-between; gap:8px; align-items:baseline; }
  .bb .cval { color:var(--brand-ink); font-weight:800; font-variant-numeric:tabular-nums; }
  .bb .cnote { font-size:.72rem; color:var(--muted); }
  .bb input[type="range"] { width:100%; accent-color:var(--brand-ink); }

  .bb .seg { display:inline-flex; border:1px solid var(--line); border-radius:8px; padding:3px; gap:3px; background:#f4f6f8; }
  .bb .segb { flex:1; border:0; background:transparent; color:var(--muted); border-radius:6px; padding:6px 10px; font-size:.82rem; font-weight:600; }
  .bb .segb:hover { color:var(--ink); }
  .bb .segb.on { background:#fff; color:var(--brand-ink); box-shadow:0 1px 2px rgba(0,0,0,.12); }

  .bb .chartwrap { min-inline-size:0; }
  .bb .chart { width:100%; height:auto; background:#fafbfc; border:1px solid var(--line); border-radius:8px; }
  .bb .thresh { stroke:var(--warn); stroke-width:1.4; stroke-dasharray:5 4; }
  .bb .threshlbl { fill:var(--warn); font-size:10px; font-weight:600; }
  .bb .baseline { fill:none; stroke:#b8c2cc; stroke-width:1.6; stroke-dasharray:4 3; }
  .bb .curve { fill:none; stroke:var(--brand-ink); stroke-width:2.6; }
  .bb .dot { fill:var(--warn); stroke:#fff; stroke-width:1.5; }
  .bb .dotlbl { fill:var(--warn); font-size:10px; font-weight:700; }
  .bb .axlbl { fill:var(--muted); font-size:10px; }

  .bb .readout { margin-top:14px; border:1px solid var(--line); border-left-width:4px; border-radius:8px; padding:12px 14px; transition:border-color .2s, background .2s; }
  .bb .readout-good { border-left-color:var(--brand-ink); background:var(--brand-bg); }
  .bb .readout-warn { border-left-color:var(--warn); background:var(--warn-bg); }
  .bb .readout-neutral { border-left-color:var(--line); background:#fafbfc; }
  .bb .rhead { display:flex; align-items:center; gap:12px; }
  .bb .rbig { font-size:2rem; font-weight:800; line-height:1; font-variant-numeric:tabular-nums; }
  .bb .readout-good .rbig { color:var(--brand-ink); }
  .bb .readout-warn .rbig { color:var(--warn); }
  .bb .runit { font-size:.8rem; color:var(--muted); font-weight:600; }
  .bb .rtext { margin:8px 0 0; font-size:.9rem; }
  .bb .rwarn { margin:6px 0 0; font-size:.8rem; color:var(--warn); }

  .bb .caption { margin:14px 2px 0; font-size:.88rem; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .bb .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }

  .bb :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .bb * { transition:none !important; } }
  @media (max-width:520px) { .bb.card { padding:14px; } }
</style>
