<script>
  // MenopauseTimeline — the Menopause & Midlife Health teaching island. A "what changes when"
  // explorer: one shared timeline centred on the final menstrual period (FMP = year 0), with
  // switchable layers that overlay the evidence curves so students SEE the myth-busting
  // distinctions — the scale rises with age while fat redistributes and muscle falls; bone loss
  // accelerates in a narrow transmenopause window; LDL-C steps up at the FMP while blood pressure
  // just drifts with age. Curves are schematic (they teach the SHAPE, not exact values), each layer
  // anchored to its SWAN source. Data-driven from a YAML manifest; shares the card/colour language
  // of the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'menopause-timeline',
    title: 'Menopause on one timeline',
    xAxis: { min: -5, max: 10, fmp: 0, label: 'Years from final menstrual period (FMP)' },
    layers: [
      {
        id: 'composition',
        label: 'Weight & shape',
        caption: 'The scale rises with age — no jump at the FMP. What is menopause-specific is fat moving inward and muscle falling.',
        source: 'Schematic — SWAN body composition',
        curves: [
          { name: 'Body weight', color: '#5b6670', points: [[-5, 100], [0, 103], [5, 106], [10, 108]] },
          { name: 'Fat mass', color: '#b06a1d', points: [[-5, 100], [-2, 103], [0, 108], [2, 114], [5, 119], [10, 122]] },
          { name: 'Lean (muscle) mass', color: '#08503f', points: [[-5, 100], [-2, 100], [0, 97], [2, 93], [5, 92], [10, 91]] },
        ],
      },
      {
        id: 'bone',
        label: 'Bone density',
        caption: 'Bone loss accelerates in a narrow window around the FMP (~2%/year, steeper at the spine), then slows.',
        source: 'Schematic — SWAN bone',
        curves: [
          { name: 'Spine bone density', color: '#b0471d', points: [[-5, 100], [-1, 100], [0, 98], [2, 93], [5, 90], [10, 87]] },
          { name: 'Hip bone density', color: '#c98a2a', points: [[-5, 100], [-1, 100], [0, 99], [2, 95], [5, 92], [10, 89]] },
        ],
      },
      {
        id: 'lipids',
        label: 'Cholesterol & blood pressure',
        caption: 'LDL-cholesterol steps up around the FMP (menopause-linked); blood pressure just drifts up with age.',
        source: 'Schematic — SWAN lipids',
        curves: [
          { name: 'LDL-cholesterol', color: '#b0471d', points: [[-5, 100], [-1, 100.5], [0, 104], [1, 108], [5, 109], [10, 110]] },
          { name: 'Blood pressure', color: '#5b6670', points: [[-5, 100], [0, 102], [5, 104], [10, 106]] },
        ],
      },
    ],
  };

  const DIMS = { w: 680, h: 300, top: 22, right: 16, bottom: 42, left: 46 };
  const PALETTE = ['#5b6670', '#b06a1d', '#08503f', '#b0471d', '#1664c0'];

  let data = $state(null);
  let error = $state(null);
  let idx = $state(0);

  let layers = $derived(data ? data.layers || [] : []);
  let layer = $derived(layers[idx] || null);
  let xAxis = $derived(data ? data.xAxis || FALLBACK.xAxis : FALLBACK.xAxis);
  let view = $derived(layer ? computeView(layer, xAxis) : null);

  function computeView(lyr, ax) {
    const { w, h, top, right, bottom, left } = DIMS;
    const pw = w - left - right;
    const ph = h - top - bottom;
    const xmin = ax.min, xmax = ax.max;
    const curves = lyr.curves || [];

    // Auto y-range from this layer's points, padded and clamped to sensible bounds.
    let lo = Infinity, hi = -Infinity;
    for (const c of curves) for (const [, yv] of c.points) { if (yv < lo) lo = yv; if (yv > hi) hi = yv; }
    if (!isFinite(lo)) { lo = 90; hi = 110; }
    lo = Math.min(lo, 98); hi = Math.max(hi, 102);
    lo = Math.floor((lo - 3) / 5) * 5;
    hi = Math.ceil((hi + 3) / 5) * 5;

    const X = (xv) => left + ((xv - xmin) / (xmax - xmin)) * pw;
    const Y = (yv) => top + ((hi - yv) / (hi - lo)) * ph;

    const paths = curves.map((c, i) => ({
      name: c.name,
      note: c.note || '',
      color: c.color || PALETTE[i % PALETTE.length],
      pts: c.points.map(([xv, yv]) => `${X(xv).toFixed(1)},${Y(yv).toFixed(1)}`).join(' '),
      end: c.points.length ? { x: X(c.points.at(-1)[0]), y: Y(c.points.at(-1)[1]) } : null,
    }));

    const xticks = [];
    for (let t = Math.ceil(xmin / 5) * 5; t <= xmax; t += 5) xticks.push({ x: X(t), label: t === 0 ? '0' : (t > 0 ? '+' + t : '' + t) });
    const yticks = [];
    for (let t = lo; t <= hi; t += 5) yticks.push({ y: Y(t), label: t });

    return {
      pw, ph, left, top, bottom, h, w,
      plotBottom: top + ph,
      paths, xticks, yticks,
      fmpX: X(ax.fmp ?? 0),
      baseY: Y(100),
      hasBaseline: lo <= 100 && hi >= 100,
    };
  }

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.layers) || !parsed.layers.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('menopause-timeline:' + data.id);
    if (saved && Number.isInteger(saved.idx) && saved.idx >= 0 && saved.idx < data.layers.length) idx = saved.idx;
  });

  $effect(() => {
    if (!data) return;
    save('menopause-timeline:' + data.id, { idx });
  });

  function select(i) { idx = Math.min(Math.max(0, i), layers.length - 1); }
</script>

{#if !data}
  <div class="mt card"><p>Loading…</p></div>
{:else}
  <figure class="mt card">
    <figcaption class="head">
      <strong>{data.title || 'Menopause on one timeline'}</strong>
      <span class="hint">Switch the layer to see what really changes</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="tabs" role="tablist" aria-label="Timeline layers">
      {#each layers as l, i}
        <button type="button" role="tab" id={'mt-tab-' + data.id + '-' + i} class="tab" class:on={i === idx} aria-selected={i === idx} aria-controls={'mt-panel-' + data.id} onclick={() => select(i)}>{l.label}</button>
      {/each}
    </div>

    {#if layer && view}
      <div class="panel" role="tabpanel" tabindex="0" id={'mt-panel-' + data.id} aria-labelledby={'mt-tab-' + data.id + '-' + idx}>
      <p class="caption" aria-live="polite"><b>{layer.label}.</b> {layer.caption}</p>

      <svg class="chart" viewBox="0 0 {view.w} {view.h}" role="img" aria-label={layer.label + '. ' + layer.caption}>
        <!-- y gridlines + labels (% of pre-menopause baseline) -->
        {#each view.yticks as t}
          <line class="grid" x1={view.left} y1={t.y} x2={view.w - DIMS.right} y2={t.y} />
          <text class="ylab" x={view.left - 8} y={t.y + 3.5} text-anchor="end">{t.label}</text>
        {/each}
        <!-- pre-menopause baseline (100%) -->
        {#if view.hasBaseline}
          <line class="baseline" x1={view.left} y1={view.baseY} x2={view.w - DIMS.right} y2={view.baseY} />
        {/if}
        <!-- x axis ticks -->
        {#each view.xticks as t}
          <text class="xlab" x={t.x} y={view.plotBottom + 16} text-anchor="middle">{t.label}</text>
        {/each}
        <!-- FMP marker -->
        <line class="fmp" x1={view.fmpX} y1={view.top} x2={view.fmpX} y2={view.plotBottom} />
        <text class="fmplab" x={view.fmpX} y={view.top - 6} text-anchor="middle">FMP</text>
        <!-- curves -->
        {#each view.paths as c}
          <polyline class="curve" points={c.pts} style="stroke:{c.color}" />
          {#if c.end}<circle cx={c.end.x} cy={c.end.y} r="3.5" style="fill:{c.color}" />{/if}
        {/each}
        <!-- axis titles -->
        <text class="axtitle" x={view.left + view.pw / 2} y={view.h - 4} text-anchor="middle">{xAxis.label || 'Years from FMP'}</text>
        <text class="axtitle yaxtitle" x={13} y={view.top + view.ph / 2} text-anchor="middle" transform="rotate(-90 13 {view.top + view.ph / 2})">% of pre-menopause baseline</text>
      </svg>

      <ul class="legend">
        {#each view.paths as c}
          <li><span class="swatch" style="background:{c.color}"></span><b>{c.name}</b>{#if c.note} — {c.note}{/if}</li>
        {/each}
      </ul>

      {#if layer.source}<p class="source">Shape after: {layer.source}. Curves are schematic — they show the pattern, not exact values.</p>{/if}
      </div>
    {/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .mt {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .mt.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .mt .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .mt .hint { font-size:.78rem; color:var(--muted); }
  .mt .intro { font-size:.92rem; margin:0 0 14px; }
  .mt button { font:inherit; cursor:pointer; }

  .mt .tabs { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px; }
  .mt .tab { padding:5px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.82rem; }
  .mt .tab:hover { border-color:var(--brand-ink); }
  .mt .tab.on { border-color:var(--brand-ink); border-width:2px; padding:4px 11px; background:var(--brand-bg); color:var(--brand-ink); font-weight:600; }

  .mt .caption { font-size:.9rem; margin:0 0 10px; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .mt .caption b { color:var(--brand-ink); }

  .mt .chart { display:block; width:100%; height:auto; border:1px solid var(--line); border-radius:8px; background:#fbfdfc; }
  .mt .grid { stroke:#eceff2; stroke-width:1; }
  .mt .baseline { stroke:#9aa4ad; stroke-width:1; stroke-dasharray:2 3; }
  .mt .ylab, .mt .xlab { fill:var(--muted); font-size:11px; font-variant-numeric:tabular-nums; }
  .mt .axtitle { fill:var(--muted); font-size:11px; }
  .mt .fmp { stroke:var(--brand-ink); stroke-width:1.5; stroke-dasharray:4 3; }
  .mt .fmplab { fill:var(--brand-ink); font-size:11px; font-weight:700; }
  .mt .curve { fill:none; stroke-width:2.5; stroke-linejoin:round; stroke-linecap:round; }

  .mt .legend { list-style:none; margin:10px 0 0; padding:0; display:flex; flex-direction:column; gap:5px; }
  .mt .legend li { font-size:.86rem; display:flex; align-items:baseline; gap:8px; }
  .mt .legend b { color:var(--ink); }
  .mt .swatch { flex:none; width:14px; height:4px; border-radius:2px; position:relative; top:-3px; }

  .mt .source { color:var(--muted); font-size:.76rem; margin:10px 0 0; }
  .mt .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }
  .mt :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .mt * { transition:none !important; } }
  @media (max-width:520px) { .mt .tab { font-size:.78rem; } }
</style>
