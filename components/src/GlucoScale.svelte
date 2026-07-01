<script>
  // GlucoScale — an interactive glycaemic index vs glycaemic load island.
  // Peak height of the glucose curve encodes GI (quality); shaded area encodes
  // GL (quantity). GL = GI × available-carbs ÷ 100 is the single source of truth.
  import { onMount } from 'svelte';
  import yaml from 'js-yaml';
  import { load, save } from './lib/store.js';

  let { src } = $props();

  // Minimal inline dataset so the island always renders, even offline / no src.
  const FALLBACK = {
    id: 'glycemic-index-load',
    title: 'Glycaemic index vs glycaemic load',
    foods: [
      { id: 'watermelon', name: 'Watermelon', gi: 76, serving: '120 g (1 slice)', carbs: 6 },
      { id: 'boiled-potato', name: 'Boiled potato', gi: 78, serving: '150 g', carbs: 27 },
      { id: 'white-bread', name: 'White bread', gi: 75, serving: '1 slice (30 g)', carbs: 14 },
      { id: 'apple', name: 'Apple', gi: 36, serving: '120 g (1 medium)', carbs: 15 },
    ],
  };

  let data = $state(null);
  let error = $state(null);
  let selectedId = $state(null);
  let compareOn = $state(false);
  let compareId = $state(null);
  let portion = $state(1);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const res = await fetch(src);
      if (!res.ok) throw new Error('Could not load food data (' + res.status + ')');
      const parsed = yaml.load(await res.text());
      if (!parsed || !Array.isArray(parsed.foods) || !parsed.foods.length) throw new Error('empty dataset');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    selectedId = data.foods[0].id;
    const potato = data.foods.find((f) => f.id === 'boiled-potato');
    compareId = (potato || data.foods[1] || data.foods[0]).id;
    const saved = load('gi:' + data.id);
    if (saved) {
      if (saved.selectedId && data.foods.some((f) => f.id === saved.selectedId)) selectedId = saved.selectedId;
      if (typeof saved.portion === 'number') portion = saved.portion;
      if (typeof saved.compareOn === 'boolean') compareOn = saved.compareOn;
      if (saved.compareId && data.foods.some((f) => f.id === saved.compareId)) compareId = saved.compareId;
    }
  });

  function persist() {
    if (data) save('gi:' + data.id, { selectedId, portion, compareOn, compareId });
  }

  const giCat = (gi) => (gi <= 55 ? 'low' : gi <= 69 ? 'medium' : 'high');
  const glCat = (gl) => (gl <= 10 ? 'low' : gl <= 19 ? 'medium' : 'high');
  const round = (n) => Math.round(n);

  let foods = $derived(data ? data.foods : []);
  let food = $derived(foods.find((f) => f.id === selectedId) || foods[0] || null);
  let carbs = $derived(food ? round(food.carbs * portion) : 0);
  let gl = $derived(food ? round((food.gi * carbs) / 100) : 0);
  let cmp = $derived(compareOn && food ? foods.find((f) => f.id === compareId && f.id !== food.id) || null : null);
  let cmpGl = $derived(cmp ? round((cmp.gi * cmp.carbs) / 100) : 0);

  let insight = $derived.by(() => {
    if (!food) return '';
    const g = giCat(food.gi), l = glCat(gl);
    if (g === 'high' && l === 'low') return 'High-GI food — but this serving keeps the glycaemic load LOW. Portion matters.';
    if (g === 'low' && l === 'high') return 'Low-GI food — yet this serving gives a HIGH glycaemic load. Quantity matters.';
    if (g === 'high' && l === 'high') return 'High GI and a big carbohydrate portion — a high glycaemic load.';
    if (g === 'low' && l === 'low') return 'Low GI and a modest portion — a low glycaemic load.';
    return `${g[0].toUpperCase() + g.slice(1)} GI, and this serving gives a ${l} glycaemic load.`;
  });

  // brief highlight of the GL pill when its value changes (motion-guarded in CSS)
  let glFlash = $state(false);
  $effect(() => {
    gl;
    glFlash = true;
    const t = setTimeout(() => (glFlash = false), 450);
    return () => clearTimeout(t);
  });

  // ---- SVG geometry: peak height ~ GI, return-to-baseline width ~ carbs ----
  const W = 360, H = 200, base = H - 26, x0 = 28, peakX = x0 + 52;
  const peakY = (gi) => base - (34 + (gi / 100) * 118);
  const endXfor = (c) => Math.min(peakX + 18 + c * 4.1, W - 14);
  function curvePath(gi, c) {
    const py = peakY(gi), endX = endXfor(c);
    const riseC1 = x0 + (peakX - x0) * 0.5;
    const fallC1 = peakX + (endX - peakX) * 0.32;
    const fallC2 = peakX + (endX - peakX) * 0.72;
    return `M ${x0} ${base} C ${riseC1} ${base} ${peakX - 16} ${py} ${peakX} ${py} `
      + `C ${fallC1} ${py} ${fallC2} ${base} ${endX} ${base}`;
  }
  let mainStroke = $derived(food ? curvePath(food.gi, carbs) : '');
  let mainFill = $derived(mainStroke ? mainStroke + ' Z' : '');
  let cmpStroke = $derived(cmp ? curvePath(cmp.gi, cmp.carbs) : '');
  let cmpFill = $derived(cmpStroke ? cmpStroke + ' Z' : '');
  let mainPeakY = $derived(food ? peakY(food.gi) : base);
  let cmpPeakY = $derived(cmp ? peakY(cmp.gi) : base);

  // GL band-meter (0–40 scale)
  const meterW = 300, glMax = 40;
  const glToX = (v) => Math.max(0, Math.min(meterW, (v / glMax) * meterW));
  let markerX = $derived(glToX(gl));

  let svgLabel = $derived(
    food
      ? `Blood-glucose response for ${food.name}, ${portion} serving${portion === 1 ? '' : 's'}: `
        + `glycaemic index ${food.gi} (${giCat(food.gi)}), glycaemic load ${gl} (${glCat(gl)})`
        + (cmp ? `; compared with ${cmp.name} at 1 serving, glycaemic load ${cmpGl}.` : '.')
      : ''
  );

  function setPortion(v) { portion = v; persist(); }
  function reset() {
    portion = 1; compareOn = false;
    if (foods.length) selectedId = foods[0].id;
    persist();
  }
</script>

{#if !data}
  <div class="gl card"><p>Loading…</p></div>
{:else if !food}
  <div class="gl card"><p class="err">⚠ No food data available.</p></div>
{:else}
  <figure class="gl card">
    <figcaption class="head">
      <strong>{data.title || 'Glycaemic index vs glycaemic load'}</strong>
      <span class="legend">Peak = GI (quality) · Shaded area = GL (quantity)</span>
    </figcaption>

    <div class="row selector">
      <label for="gl-food">Food</label>
      <select id="gl-food" bind:value={selectedId} onchange={persist}>
        {#each foods as f}
          <option value={f.id}>{f.name} (GI {f.gi})</option>
        {/each}
      </select>
      <span class="meta">
        {food.serving} · GI {food.gi}
        <span class="badge {giCat(food.gi)}">{giCat(food.gi)} GI</span>
      </span>
    </div>

    <svg class="curve" viewBox="0 0 {W} {H}" role="img" aria-label={svgLabel}>
      <defs>
        <pattern id="h-low" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="7" height="7" fill="#e7f5ee" /><line x1="0" y1="0" x2="0" y2="7" stroke="#1f9d6b" stroke-width="1.4" />
        </pattern>
        <pattern id="h-medium" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
          <rect width="7" height="7" fill="#fdf1e3" /><line x1="0" y1="0" x2="0" y2="7" stroke="#d08a2c" stroke-width="1.4" />
        </pattern>
        <pattern id="h-high" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <rect width="7" height="7" fill="#fdeaea" /><line x1="0" y1="0" x2="0" y2="7" stroke="#c0392b" stroke-width="1.4" />
        </pattern>
        <pattern id="h-cmp" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(90)">
          <rect width="7" height="7" fill="#eef1f4" /><line x1="0" y1="0" x2="0" y2="7" stroke="#8a93a0" stroke-width="1.2" />
        </pattern>
      </defs>

      <!-- axes (decorative) -->
      <g aria-hidden="true" class="axes">
        <line x1={x0} y1={base} x2={W - 8} y2={base} />
        <line x1={x0} y1="14" x2={x0} y2={base} />
        {#each [30, 60, 90] as t, i}
          <line x1={x0 + 52 + i * 70} y1={base} x2={x0 + 52 + i * 70} y2={base + 4} />
        {/each}
        <text x={x0} y={H - 6} class="axlab">time after meal →</text>
        <text x="4" y="20" class="axlab" transform="rotate(0)">glucose</text>
      </g>

      <!-- fills first (comparison beneath; main above but alpha'd when comparing, so the
           comparison area stays visible through the overlap), then both outlines/peaks on
           top so each curve reads crisply regardless of overlap -->
      {#if cmp}
        <path d={cmpFill} fill="url(#h-cmp)" opacity="0.75" />
      {/if}
      <path d={mainFill} fill="url(#h-{giCat(food.gi)})" opacity={cmp ? 0.6 : 1} />

      {#if cmp}
        <path d={cmpStroke} class="cmp-line" />
        <circle cx={peakX} cy={cmpPeakY} r="3" class="peak cmp" />
      {/if}
      <path d={mainStroke} class="main-line {giCat(food.gi)}" />
      <circle cx={peakX} cy={mainPeakY} r="3.2" class="peak {giCat(food.gi)}" />
    </svg>

    <div class="legendrow">
      <span class="key {giCat(food.gi)}"><i class="sw"></i>{food.name} — GI {food.gi}, GL {gl}</span>
      {#if cmp}<span class="key cmp"><i class="sw"></i>{cmp.name} — GI {cmp.gi}, GL {cmpGl} (1 serving)</span>{/if}
    </div>

    <!-- live equation -->
    <p class="equation" aria-hidden="true">
      <span class="tok">GL</span> =
      <span class="tok gi">GI {food.gi}</span> ×
      <span class="tok carb">carbs {carbs}&nbsp;g</span> ÷ 100 =
      <span class="tok gl {glCat(gl)}" class:flash={glFlash}>GL {gl} · {glCat(gl)}</span>
    </p>

    <!-- GL band meter -->
    <svg class="meter" viewBox="0 0 {meterW} 46" role="img"
         aria-label={`Glycaemic load ${gl}: ${glCat(gl)} band (low 10 or under, medium 11 to 19, high 20 plus).`}>
      <rect x="0" y="6" width={glToX(10)} height="16" fill="url(#h-low)" />
      <rect x={glToX(10)} y="6" width={glToX(19) - glToX(10)} height="16" fill="url(#h-medium)" />
      <rect x={glToX(19)} y="6" width={meterW - glToX(19)} height="16" fill="url(#h-high)" />
      <text x={glToX(5)} y="38" class="zlab" text-anchor="middle">Low</text>
      <text x={(glToX(10) + glToX(19)) / 2} y="38" class="zlab" text-anchor="middle">Medium</text>
      <text x={(glToX(19) + meterW) / 2} y="38" class="zlab" text-anchor="middle">High</text>
      <polygon points={`${markerX},2 ${markerX - 6},-7 ${markerX + 6},-7`} transform="translate(0,9)" class="marker" />
      <text x={markerX} y="20" class="markerlab" text-anchor="middle">{gl}</text>
    </svg>

    <!-- controls -->
    <div class="controls">
      <div class="slider">
        <label for="gl-portion">Portion: <strong>{portion}×</strong> <span class="cap">({carbs} g carbs)</span></label>
        <input id="gl-portion" type="range" min="0.5" max="4" step="0.5" bind:value={portion}
               oninput={persist}
               aria-valuetext={`${portion} servings, ${carbs} grams carbohydrate`} />
      </div>
      <div class="presets" role="group" aria-label="Portion presets">
        <button type="button" class:active={portion === 0.5} onclick={() => setPortion(0.5)}>½×</button>
        <button type="button" class:active={portion === 1} onclick={() => setPortion(1)}>1×</button>
        <button type="button" class:active={portion === 2} onclick={() => setPortion(2)}>2×</button>
      </div>
    </div>

    <div class="controls compare-row">
      <label class="chk"><input type="checkbox" bind:checked={compareOn} onchange={persist} /> Compare with</label>
      <select aria-label="Comparison food" bind:value={compareId} onchange={persist} disabled={!compareOn}>
        {#each foods.filter((f) => f.id !== selectedId) as f}
          <option value={f.id}>{f.name} (GI {f.gi})</option>
        {/each}
      </select>
      <span class="cap" aria-hidden="true">{#if cmp}shown at 1 serving · GL {cmpGl}{/if}</span>
      <button type="button" class="btn secondary" onclick={reset}>Reset</button>
    </div>

    <p class="insight" aria-live="polite">{insight}</p>

    <details class="data">
      <summary>Show all foods (the numbers)</summary>
      <div class="tablewrap">
        <table>
          <thead>
            <tr><th scope="col">Food</th><th scope="col">GI</th><th scope="col">GI band</th>
              <th scope="col">Serving</th><th scope="col">Carbs (g)</th><th scope="col">GL</th><th scope="col">GL band</th></tr>
          </thead>
          <tbody>
            {#each foods as f}
              {@const fgl = round((f.gi * f.carbs) / 100)}
              <tr>
                <td>{f.name}</td><td>{f.gi}</td><td>{giCat(f.gi)}</td>
                <td>{f.serving}</td><td>{f.carbs}</td><td>{fgl}</td><td>{glCat(fgl)}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      {#if data.ref_serving_note}<p class="note">{data.ref_serving_note}</p>{/if}
    </details>
  </figure>
{/if}

<style>
  .gl {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --focus:#1664c0;
    --good-bg:#e7f5ee; --good-line:#1f9d6b; --good-ink:#0d5e3f;
    --warn-bg:#fdf1e3; --warn-line:#d08a2c; --warn-ink:#8a5a12;
    --bad-bg:#fdeaea;  --bad-line:#c0392b;  --bad-ink:#9b1c1c;
    color:var(--ink);
    font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    margin:1.2rem 0;
  }
  .gl.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:660px; }
  .gl .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .gl .legend { font-size:.78rem; color:var(--muted); }
  .gl button, .gl select, .gl input { font:inherit; }

  .gl .row { display:flex; flex-wrap:wrap; gap:8px 10px; align-items:center; }
  .gl .selector label { font-weight:600; }
  .gl select { border:1px solid var(--line); border-radius:8px; padding:8px 10px; min-height:40px; background:#fff; color:var(--ink); }
  .gl select:disabled { color:var(--muted); background:#f4f6f8; }
  .gl .meta { font-size:.86rem; color:var(--muted); display:inline-flex; gap:8px; align-items:center; }
  .gl .badge { font-size:.7rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; padding:2px 8px; border-radius:99px; border:1px solid; }
  .gl .badge.low { color:var(--good-ink); background:var(--good-bg); border-color:var(--good-line); }
  .gl .badge.medium { color:var(--warn-ink); background:var(--warn-bg); border-color:var(--warn-line); }
  .gl .badge.high { color:var(--bad-ink); background:var(--bad-bg); border-color:var(--bad-line); }

  .gl .curve { display:block; width:100%; height:auto; margin:6px 0 4px; }
  .gl .axes line { stroke:var(--line); stroke-width:1; }
  .gl .axlab { fill:var(--muted); font-size:9px; }
  .gl .main-line { fill:none; stroke-width:2.4; }
  .gl .main-line.low { stroke:var(--good-line); }
  .gl .main-line.medium { stroke:var(--warn-line); }
  .gl .main-line.high { stroke:var(--bad-line); }
  .gl .cmp-line { fill:none; stroke:#6b7480; stroke-width:2; stroke-dasharray:5 4; }
  .gl .peak { stroke:#fff; stroke-width:1.5; }
  .gl .peak.low { fill:var(--good-line); }
  .gl .peak.medium { fill:var(--warn-line); }
  .gl .peak.high { fill:var(--bad-line); }
  .gl .peak.cmp { fill:#6b7480; }
  .gl .legendrow { display:flex; flex-wrap:wrap; gap:6px 18px; font-size:.84rem; margin:2px 0 8px; }
  .gl .key { display:inline-flex; align-items:center; gap:8px; color:var(--ink); }
  .gl .key .sw { width:22px; border-top:3px solid var(--line); display:inline-block; }
  .gl .key.low .sw { border-color:var(--good-line); }
  .gl .key.medium .sw { border-color:var(--warn-line); }
  .gl .key.high .sw { border-color:var(--bad-line); }
  .gl .key.cmp { color:var(--muted); }
  .gl .key.cmp .sw { border-color:#6b7480; border-top-style:dashed; }

  .gl .equation { display:flex; flex-wrap:wrap; gap:6px; align-items:center; font-size:.95rem; margin:8px 0; }
  .gl .tok { display:inline-block; padding:3px 9px; border-radius:7px; border:1px solid var(--line); background:#f7f9fb; font-weight:600; }
  .gl .tok.gi { border-color:#b9c6d6; }
  .gl .tok.carb { border-color:#b9c6d6; }
  .gl .tok.gl.low { color:var(--good-ink); background:var(--good-bg); border-color:var(--good-line); }
  .gl .tok.gl.medium { color:var(--warn-ink); background:var(--warn-bg); border-color:var(--warn-line); }
  .gl .tok.gl.high { color:var(--bad-ink); background:var(--bad-bg); border-color:var(--bad-line); }
  .gl .tok.flash { transition:none; box-shadow:0 0 0 3px rgba(22,100,192,.28); }
  .gl .tok.gl { transition:box-shadow .45s ease; }

  .gl .meter { display:block; width:100%; max-width:320px; height:auto; margin:2px 0 10px; overflow:visible; }
  .gl .zlab { fill:var(--muted); font-size:10px; }
  .gl .marker { fill:var(--ink); }
  .gl .markerlab { fill:#fff; font-size:10px; font-weight:700; }

  .gl .controls { display:flex; flex-wrap:wrap; gap:10px 16px; align-items:center; margin:4px 0; }
  .gl .slider { flex:1 1 240px; }
  .gl .slider label { display:block; font-size:.9rem; margin-bottom:2px; }
  .gl .slider .cap, .gl .cap { color:var(--muted); font-weight:400; font-size:.85rem; }
  .gl input[type=range] { width:100%; min-height:28px; accent-color:var(--brand-ink); }
  .gl .presets { display:flex; gap:6px; }
  .gl .presets button { min-width:44px; min-height:40px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); cursor:pointer; font-weight:600; }
  .gl .presets button.active { border-color:var(--brand-ink); background:#eef5f2; color:var(--brand-ink); }
  .gl .presets button:hover { background:#f3f8f7; }
  .gl .compare-row { border-top:1px solid #eef1f4; padding-top:10px; }
  .gl .chk { display:inline-flex; align-items:center; gap:6px; font-size:.92rem; min-height:40px; }
  .gl .chk input { width:18px; height:18px; accent-color:var(--brand-ink); }
  .gl .btn.secondary { margin-left:auto; background:transparent; color:var(--brand-ink); border:1px solid var(--line); border-radius:8px; padding:9px 14px; min-height:40px; font-weight:600; cursor:pointer; }
  .gl .btn.secondary:hover { background:#eef2f1; }

  .gl .insight { margin:8px 0 2px; padding:10px 13px; border-radius:9px; border:1px solid var(--line); background:#f7f9fb; font-size:.94rem; font-weight:500; }
  .gl details.data { margin-top:10px; font-size:.88rem; }
  .gl details.data summary { cursor:pointer; color:var(--brand-ink); font-weight:600; min-height:36px; }
  .gl .tablewrap { overflow-x:auto; }
  .gl table { border-collapse:collapse; width:100%; margin-top:8px; font-size:.84rem; }
  .gl th, .gl td { border:1px solid var(--line); padding:5px 8px; text-align:left; }
  .gl th { background:#f4f6f8; }
  .gl .note { color:var(--muted); font-size:.8rem; margin-top:8px; }
  .gl .err { color:var(--bad-ink); }

  .gl :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .gl * { transition:none !important; } }
  @media (max-width:430px) {
    .gl.card { padding:14px; }
    .gl .btn.secondary { margin-left:0; }
  }
</style>
