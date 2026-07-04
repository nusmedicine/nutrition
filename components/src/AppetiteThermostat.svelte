<script>
  // AppetiteThermostat — the hypothalamic appetite "thermostat" (Chapter 8, flagship island).
  // A bespoke inline-SVG state-stepper over the arcuate circuit: an accelerator (AgRP/NPY) bar vs a
  // brake (POMC/CART → α-MSH) bar, meeting at MC4R to set a hunger output, with peripheral input
  // signals (leptin, ghrelin, and — in the drug state — a GLP-1 agonist) pressing one side or the
  // other. Stepping fasted → fed → post-weight-loss → on-GLP-1 shows the balance shift and how the
  // drug plugs into the same circuit. Shares the card/stepper/colour language of the Ch.6/Ch.7 islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const COL = { accel: '#c0392b', brake: '#1f6fb2', hunger: '#c0392b', brand: '#08503f', muted: '#7a8791' };

  const FALLBACK = {
    id: 'appetite-thermostat', title: 'The appetite thermostat', viewBox: '0 0 720 380',
    signals: [{ id: 'ghrelin', label: 'Ghrelin', acts: 'accel' }],
    states: [{ id: 'fasted', label: 'Fasted', accel: 80, brake: 25, hunger: 78, inputs: {}, summary: 'Hunger is high.', detail: {} }],
  };

  let data = $state(null);
  let error = $state(null);
  let idx = $state(0);
  let selected = $state(null);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.states) || !parsed.states.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('thermostat:' + data.id);
    if (saved && Number.isFinite(saved.idx)) idx = Math.min(Math.max(0, saved.idx), data.states.length - 1);
  });

  let states = $derived(data ? data.states : []);
  let signals = $derived(data ? data.signals || [] : []);
  let state = $derived(states[idx] || null);
  let viewBox = $derived((data && data.viewBox) || '0 0 720 380');
  // signals shown = those referenced in this state's inputs
  let activeSignals = $derived(state && state.inputs ? signals.filter((s) => state.inputs[s.id]) : []);

  function setIdx(n) {
    idx = Math.min(Math.max(0, n), states.length - 1);
    selected = null;
    if (data) save('thermostat:' + data.id, { idx });
  }

  const BASE = 300, MAXH = 200;
  const barH = (v) => Math.max(0, (v || 0) / 100 * MAXH);
  const barTop = (v) => BASE - barH(v);

  function pick(id) { selected = selected === id ? null : id; }

  // detail text for the selected element
  let detailText = $derived.by(() => {
    if (!state || !selected) return '';
    if (state.detail && state.detail[selected]) return state.detail[selected];
    if (state.inputs && state.inputs[selected]) return state.inputs[selected].note;
    return '';
  });
  let detailLabel = $derived.by(() => {
    if (!selected) return '';
    const map = { accel: 'Accelerator — AgRP/NPY', brake: 'Brake — POMC/CART → α-MSH', mc4r: 'MC4R (the switch)', hunger: 'Hunger output' };
    if (map[selected]) return map[selected];
    const sig = signals.find((s) => s.id === selected);
    return sig ? sig.label : selected;
  });
  // signal chip y positions
  const SIGY = { leptin: 95, ghrelin: 178, glp1: 261 };
</script>

{#if !data}
  <div class="th card"><p>Loading…</p></div>
{:else}
  <figure class="th card">
    <figcaption class="head">
      <strong>{data.title || 'The appetite thermostat'}</strong>
      <span class="hint">Step through the states, then click a part</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="steps" role="tablist" aria-label="Appetite state">
      <button type="button" class="nav" onclick={() => setIdx(idx - 1)} disabled={idx <= 0} aria-label="Previous state">‹</button>
      <div class="dots">
        {#each states as s, i}
          <button type="button" class="dot" class:on={i === idx} role="tab" aria-selected={i === idx} onclick={() => setIdx(i)}>
            <span class="dnum">{i + 1}</span><span class="dlab">{s.label}</span>
          </button>
        {/each}
      </div>
      <button type="button" class="nav" onclick={() => setIdx(idx + 1)} disabled={idx >= states.length - 1} aria-label="Next state">›</button>
    </div>

    {#if state}
      <h3 class="statehead">{state.label} <span class="when">{state.when || ''}</span></h3>

      <div class="stage">
        <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Appetite thermostat for the {state.label} state">
          <defs>
            <marker id="th-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7a8791"/></marker>
          </defs>

          <!-- input signal chips (left) -->
          {#each activeSignals as sg}
            {@const y = SIGY[sg.id] ?? 178}
            {@const info = state.inputs[sg.id]}
            <g class="chip" class:selected={selected === sg.id} role="button" tabindex="0"
               onclick={() => pick(sg.id)} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(sg.id); } }}>
              <rect x="14" y={y - 17} width="150" height="34" rx="8" />
              <text class="chiplab" x="26" y={y - 2}>{sg.label}</text>
              <text class="chipdir" x="26" y={y + 12} style="fill:{info.dir === 'up' ? COL.accel : COL.muted}">{info.dir === 'up' ? '▲ high' : '▼ low'}</text>
              <!-- connector to the side it presses -->
              <line x1="164" y1={y} x2="266" y2={sg.acts === 'accel' ? 200 : 200} stroke="#c7ced4" stroke-width="1.5" stroke-dasharray="3 3" marker-end="url(#th-arrow)" />
            </g>
          {/each}

          <!-- arcuate frame with the two bars -->
          <rect class="arcframe" x="262" y="70" width="168" height="250" rx="12" />
          <text class="arclabel" x="346" y="90" text-anchor="middle">Arcuate nucleus</text>

          <!-- accelerator bar -->
          <g class="bar" class:selected={selected === 'accel'} role="button" tabindex="0"
             onclick={() => pick('accel')} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick('accel'); } }}>
            <rect x="288" y={barTop(state.accel)} width="46" height={barH(state.accel)} rx="4" style="fill:{COL.accel}" />
            <text class="barnum" x="311" y={barTop(state.accel) - 5} text-anchor="middle">{state.accel}</text>
            <text class="barlab" x="311" y="314" text-anchor="middle">Accelerator</text>
            <text class="barsub" x="311" y="325" text-anchor="middle">AgRP/NPY</text>
          </g>
          <!-- brake bar -->
          <g class="bar" class:selected={selected === 'brake'} role="button" tabindex="0"
             onclick={() => pick('brake')} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick('brake'); } }}>
            <rect x="358" y={barTop(state.brake)} width="46" height={barH(state.brake)} rx="4" style="fill:{COL.brake}" />
            <text class="barnum" x="381" y={barTop(state.brake) - 5} text-anchor="middle">{state.brake}</text>
            <text class="barlab" x="381" y="314" text-anchor="middle">Brake</text>
            <text class="barsub" x="381" y="325" text-anchor="middle">POMC/CART</text>
          </g>

          <!-- MC4R node -->
          <line x1="430" y1="195" x2="486" y2="195" stroke="#7a8791" stroke-width="2" marker-end="url(#th-arrow)" />
          <g class="mc4r" class:selected={selected === 'mc4r'} role="button" tabindex="0"
             onclick={() => pick('mc4r')} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick('mc4r'); } }}>
            <circle cx="524" cy="195" r="36" />
            <text class="mc4rlab" x="524" y="199" text-anchor="middle">MC4R</text>
          </g>

          <!-- hunger output meter -->
          <line x1="560" y1="195" x2="620" y2="195" stroke="#7a8791" stroke-width="2" marker-end="url(#th-arrow)" />
          <g class="bar" class:selected={selected === 'hunger'} role="button" tabindex="0"
             onclick={() => pick('hunger')} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick('hunger'); } }}>
            <rect class="meterbg" x="644" y={BASE - MAXH} width="46" height={MAXH} rx="4" />
            <rect x="644" y={barTop(state.hunger)} width="46" height={barH(state.hunger)} rx="4" style="fill:{COL.hunger}" />
            <text class="barnum" x="667" y={barTop(state.hunger) - 5} text-anchor="middle">{state.hunger}</text>
            <text class="barlab" x="667" y="314" text-anchor="middle">HUNGER</text>
          </g>

          {#if state.gastric}<text class="gastric" x="524" y="250" text-anchor="middle">+ slows stomach</text>{/if}
        </svg>
      </div>

      <p class="summary">{state.summary}</p>

      {#if selected && detailText}
        <div class="panel" aria-live="polite">
          <h4>{detailLabel}</h4>
          <p>{detailText}</p>
        </div>
      {:else}
        <p class="prompt">Click the accelerator, the brake, MC4R, the hunger meter, or an input signal for detail.</p>
      {/if}

      <p class="legend">
        <span class="key" style="color:{COL.accel}">■ accelerator / hunger (AgRP-NPY)</span>
        <span class="key" style="color:{COL.brake}">■ brake / satiety (POMC → α-MSH)</span>
      </p>
    {/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .th {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .th.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:720px; }
  .th .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .th .hint { font-size:.78rem; color:var(--muted); }
  .th .intro { font-size:.92rem; margin:0 0 12px; }
  .th button { font:inherit; cursor:pointer; }

  .th .steps { display:flex; align-items:stretch; gap:8px; }
  .th .nav { width:34px; border:1px solid var(--line); border-radius:8px; background:#fff; font-size:1.2rem; color:var(--brand-ink); }
  .th .nav:hover:not(:disabled) { background:var(--brand-bg); border-color:var(--brand-ink); }
  .th .nav:disabled { opacity:.4; cursor:default; }
  .th .dots { display:flex; flex:1; gap:6px; }
  .th .dot { flex:1; display:flex; flex-direction:column; align-items:center; gap:2px; padding:6px 4px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--muted); }
  .th .dot .dnum { display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; border-radius:50%; background:#eef1f4; font-size:.78rem; font-weight:700; }
  .th .dot .dlab { font-size:.72rem; font-weight:600; text-align:center; line-height:1.15; }
  .th .dot.on { border-color:var(--brand-ink); background:var(--brand-bg); color:var(--brand-ink); }
  .th .dot.on .dnum { background:var(--brand-ink); color:#fff; }

  .th .statehead { margin:12px 0 8px; font-size:1.1rem; color:var(--brand-ink); }
  .th .statehead .when { font-size:.8rem; font-weight:400; color:var(--muted); }

  .th .stage { width:100%; }
  .th svg { display:block; width:100%; height:auto; background:linear-gradient(#fcfdfd,#f6f9f8); border:1px solid #eef1f4; border-radius:8px; }
  .th .arcframe { fill:#fbfdfc; stroke:var(--brand-ink); stroke-width:1.6; stroke-dasharray:5 4; }
  .th .arclabel { font-size:11px; font-weight:700; fill:var(--brand-ink); }
  .th .bar { cursor:pointer; }
  .th .bar rect { transition:y .35s ease, height .35s ease; }
  .th .meterbg { fill:#e7ebee; }
  .th .barnum { font-size:11px; font-weight:700; fill:var(--ink); }
  .th .barlab { font-size:9.5px; font-weight:700; fill:var(--muted); }
  .th .barsub { font-size:8px; fill:var(--muted); }
  .th .bar.selected rect { stroke:var(--focus); stroke-width:2.4; }
  .th .mc4r { cursor:pointer; }
  .th .mc4r circle { fill:var(--brand-bg); stroke:var(--brand-ink); stroke-width:2; }
  .th .mc4r.selected circle { stroke:var(--focus); stroke-width:3; }
  .th .mc4rlab { font-size:11px; font-weight:700; fill:var(--brand-ink); }
  .th .chip { cursor:pointer; }
  .th .chip rect { fill:#fff; stroke:var(--line); stroke-width:1.4; }
  .th .chip.selected rect { stroke:var(--focus); stroke-width:2.2; }
  .th .chiplab { font-size:10px; font-weight:700; fill:var(--ink); }
  .th .chipdir { font-size:9px; font-weight:700; }
  .th .gastric { font-size:9px; fill:var(--muted); font-style:italic; }

  .th .summary { font-size:.94rem; margin:10px 2px 0; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .th .panel { margin-top:10px; border:1px solid var(--line); border-radius:8px; padding:10px 14px; background:#fbfdfc; }
  .th .panel h4 { margin:0 0 6px; font-size:1rem; color:var(--brand-ink); }
  .th .panel p { margin:0; font-size:.92rem; }
  .th .prompt { margin:10px 2px 0; font-size:.86rem; color:var(--muted); }
  .th .legend { display:flex; flex-wrap:wrap; gap:12px; margin:12px 2px 0; font-size:.76rem; }
  .th .legend .key { font-weight:600; }
  .th .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }
  .th :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .th * { transition:none !important; } }
  @media (max-width:520px) { .th.card { padding:14px; } .th .dot .dlab { display:none; } }
</style>
