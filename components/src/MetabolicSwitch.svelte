<script>
  // MetabolicSwitch — "the metabolic switch" fed → fasted → starved stepper (Chapter 6, Part B).
  // A bespoke inline-SVG inter-organ scene. Step through metabolic states and watch each organ's
  // job change (store / release / make glucose / burn / ketones), the fuel fluxes between organs,
  // and the insulin–glucagon balance and respiratory quotient. Shares its colour language with the
  // Part-A MetabolicMap island. Data-driven from a YAML manifest (organs + states). No external
  // images — the scene is drawn in-component (CC BY-SA 4.0, no third-party licensing).
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'metabolic-switch',
    title: 'The metabolic switch',
    viewBox: '0 0 720 440',
    organs: [
      { id: 'brain', name: 'Brain', x: 360, y: 58, r: 46 },
      { id: 'liver', name: 'Liver', x: 235, y: 200, r: 50 },
    ],
    states: [{ id: 'fed', label: 'Just ate', insulin: 85, glucagon: 15, rq: 0.95, summary: 'Store everything.', organs: {}, fluxes: [] }],
  };

  const TONE = { store: '#1f6fb2', make: '#1f9d6b', release: '#b9691d', ketone: '#8a6fc0', burn: '#7a8791', quiet: '#c7ced4' };
  const CARGO = { glucose: '#1f9d6b', fat: '#b9691d', ketone: '#8a6fc0', carbon: '#7a8791', amino: '#c99a2e' };

  let data = $state(null);
  let error = $state(null);
  let idx = $state(0);
  let selectedOrgan = $state(null);

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
    const saved = load('metabswitch:' + data.id);
    if (saved && Number.isFinite(saved.idx)) idx = Math.min(Math.max(0, saved.idx), data.states.length - 1);
  });

  let organs = $derived(data ? data.organs : []);
  let orgById = $derived(new Map(organs.map((o) => [o.id, o])));
  let states = $derived(data ? data.states : []);
  let state = $derived(states[idx] || null);
  let viewBox = $derived((data && data.viewBox) || '0 0 720 440');
  let fluxes = $derived(state && Array.isArray(state.fluxes) ? state.fluxes : []);
  // organs referenced by this state's fluxes, so we can fade the ones not in play (e.g. the gut).
  let inPlay = $derived(new Set([...(state ? Object.keys(state.organs || {}) : []), ...fluxes.flatMap((f) => [f.from, f.to])]));

  function setIdx(n) {
    idx = Math.min(Math.max(0, n), states.length - 1);
    selectedOrgan = null;
    if (data) save('metabswitch:' + data.id, { idx });
  }

  function orgTone(id) {
    const info = state && state.organs ? state.organs[id] : null;
    return info ? TONE[info.tone] || TONE.quiet : TONE.quiet;
  }
  function orgInfo(id) { return state && state.organs ? state.organs[id] : null; }
  let selectedInfo = $derived(selectedOrgan ? orgInfo(selectedOrgan) : null);
  let selectedOrg = $derived(selectedOrgan ? orgById.get(selectedOrgan) : null);

  function fluxGeom(f) {
    const s = orgById.get(f.from), t = orgById.get(f.to);
    if (!s || !t) return null;
    const dx = t.x - s.x, dy = t.y - s.y;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len;
    return {
      x1: s.x + ux * (s.r + 4), y1: s.y + uy * (s.r + 4),
      x2: t.x - ux * (t.r + 12), y2: t.y - uy * (t.r + 12),
      mx: (s.x + t.x) / 2, my: (s.y + t.y) / 2,
    };
  }
  const width = (mag) => (mag >= 3 ? 6 : mag === 2 ? 4 : 2.5);
  function rqHint(rq) { return rq >= 0.9 ? 'mostly carbohydrate' : rq >= 0.8 ? 'mixed fuel' : 'mostly fat'; }
  let usedCargo = $derived([...new Set(fluxes.map((f) => f.kind))]);
</script>

{#if !data}
  <div class="ms card"><p>Loading…</p></div>
{:else}
  <figure class="ms card">
    <figcaption class="head">
      <strong>{data.title || 'The metabolic switch'}</strong>
      <span class="hint">Step through the states, then click an organ</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <!-- State stepper -->
    <div class="steps" role="tablist" aria-label="Metabolic state">
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
      <div class="statehead">
        <h3>{state.label} <span class="when">{state.when || ''}</span></h3>
      </div>

      <!-- Gauges: insulin / glucagon balance + RQ -->
      <div class="gauges">
        <div class="gauge">
          <span class="glab">Insulin</span>
          <div class="bar"><div class="fill ins" style="width:{state.insulin}%"></div></div>
        </div>
        <div class="gauge">
          <span class="glab">Glucagon</span>
          <div class="bar"><div class="fill glu" style="width:{state.glucagon}%"></div></div>
        </div>
        <div class="rq" title="Respiratory quotient: which fuel is burning">
          <span class="rqv">RQ ≈ {state.rq}</span><span class="rqh">{rqHint(state.rq)}</span>
        </div>
      </div>

      <p class="summary">{state.summary}</p>

      <!-- The inter-organ scene -->
      <div class="stage">
        <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Inter-organ fuel flow for the {state.label} state">
          <defs>
            {#each Object.keys(CARGO) as k}
              <marker id="ms-arrow-{k}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill={CARGO[k]}/></marker>
            {/each}
          </defs>

          <!-- flux arrows (under organs) -->
          {#each fluxes as f, i (f.from + f.to + i)}
            {@const g = fluxGeom(f)}
            {#if g}
              <g class="flux">
                <line x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2}
                  stroke={CARGO[f.kind] || '#7a8791'} stroke-width={width(f.mag)} stroke-linecap="round"
                  marker-end="url(#ms-arrow-{f.kind})" />
                {#if f.label}
                  <text class="flabel" x={g.mx} y={g.my} text-anchor="middle" dy="-3">{f.label}</text>
                {/if}
              </g>
            {/if}
          {/each}

          <!-- organs (over) -->
          {#each organs as o (o.id)}
            {@const info = orgInfo(o.id)}
            {@const faded = !inPlay.has(o.id)}
            <g class="organ" class:faded class:selected={selectedOrgan === o.id}
               transform="translate({o.x},{o.y})" role="button" tabindex="0"
               onclick={() => (selectedOrgan = selectedOrgan === o.id ? null : o.id)}
               onkeydown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); selectedOrgan = selectedOrgan === o.id ? null : o.id; } }}>
              <circle r={o.r} fill="#fff" stroke={orgTone(o.id)} stroke-width="4" />
              <text class="oname" text-anchor="middle" dy={info && info.role ? '-2' : '4'}>{o.name}</text>
              {#if info && info.role}<text class="orole" text-anchor="middle" dy="13" fill={orgTone(o.id)}>{info.role}</text>{/if}
            </g>
          {/each}
        </svg>
      </div>

      <!-- legend for the fuels actually flowing in this state -->
      {#if usedCargo.length}
        <p class="legend">
          {#each usedCargo as k}
            <span class="key" style="color:{CARGO[k]}">■ {(data.cargo && data.cargo[k]) || k}</span>
          {/each}
        </p>
      {/if}

      <!-- organ detail -->
      {#if selectedOrg && selectedInfo}
        <div class="panel" aria-live="polite">
          <h4><span class="swatch" style="background:{orgTone(selectedOrgan)}"></span>{selectedOrg.name} — <span class="prole">{selectedInfo.role}</span></h4>
          <p>{selectedInfo.detail}</p>
        </div>
      {:else}
        <p class="prompt">Click an organ above to see exactly what it is doing in this state.</p>
      {/if}
    {/if}

    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .ms {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --amber:#c98a2e;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .ms.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .ms .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .ms .hint { font-size:.78rem; color:var(--muted); }
  .ms .intro { font-size:.92rem; margin:0 0 12px; }
  .ms button { font:inherit; cursor:pointer; }

  .ms .steps { display:flex; align-items:stretch; gap:8px; }
  .ms .nav { width:34px; border:1px solid var(--line); border-radius:8px; background:#fff; font-size:1.2rem; color:var(--brand-ink); }
  .ms .nav:hover:not(:disabled) { background:var(--brand-bg); border-color:var(--brand-ink); }
  .ms .nav:disabled { opacity:.4; cursor:default; }
  .ms .dots { display:flex; flex:1; gap:6px; }
  .ms .dot { flex:1; display:flex; flex-direction:column; align-items:center; gap:2px; padding:6px 4px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--muted); }
  .ms .dot .dnum { display:inline-flex; align-items:center; justify-content:center; width:20px; height:20px; border-radius:50%; background:#eef1f4; font-size:.78rem; font-weight:700; }
  .ms .dot .dlab { font-size:.72rem; font-weight:600; text-align:center; line-height:1.15; }
  .ms .dot.on { border-color:var(--brand-ink); background:var(--brand-bg); color:var(--brand-ink); }
  .ms .dot.on .dnum { background:var(--brand-ink); color:#fff; }

  .ms .statehead h3 { margin:12px 0 8px; font-size:1.1rem; color:var(--brand-ink); }
  .ms .statehead .when { font-size:.8rem; font-weight:400; color:var(--muted); }

  .ms .gauges { display:flex; flex-wrap:wrap; gap:10px 20px; align-items:center; margin-bottom:8px; }
  .ms .gauge { display:flex; align-items:center; gap:8px; flex:1 1 220px; }
  .ms .glab { font-size:.74rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--muted); flex:0 0 62px; }
  .ms .bar { flex:1; height:12px; background:#eef1f4; border-radius:6px; overflow:hidden; }
  .ms .fill { height:100%; border-radius:6px; transition:width .35s ease; }
  .ms .fill.ins { background:var(--brand-ink); }
  .ms .fill.glu { background:var(--amber); }
  .ms .rq { display:flex; flex-direction:column; align-items:flex-end; flex:0 0 auto; }
  .ms .rqv { font-size:.9rem; font-weight:700; color:var(--ink); }
  .ms .rqh { font-size:.72rem; color:var(--muted); }

  .ms .summary { font-size:.94rem; margin:8px 2px 12px; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }

  .ms .stage { width:100%; }
  .ms svg { display:block; width:100%; height:auto; background:linear-gradient(#fcfdfd,#f6f9f8); border:1px solid #eef1f4; border-radius:8px; }
  .ms .flux line { transition:stroke-width .3s ease; }
  .ms .flabel { font-size:9.5px; fill:#3a4650; paint-order:stroke; stroke:#f7faf9; stroke-width:3px; stroke-linejoin:round; }
  .ms .organ { cursor:pointer; }
  .ms .organ circle { transition:opacity .25s ease, stroke .25s ease; }
  .ms .organ.faded { opacity:.32; }
  .ms .organ.selected circle { stroke-dasharray:4 3; }
  .ms .oname { font-size:12.5px; font-weight:700; fill:var(--ink); }
  .ms .orole { font-size:9px; font-weight:600; }

  .ms .legend { display:flex; flex-wrap:wrap; gap:12px; margin:10px 2px 0; font-size:.76rem; }
  .ms .legend .key { font-weight:600; }

  .ms .panel { margin-top:10px; border:1px solid var(--line); border-radius:8px; padding:10px 14px; background:#fbfdfc; }
  .ms .panel h4 { margin:0 0 6px; font-size:1rem; color:var(--brand-ink); display:flex; align-items:center; gap:8px; }
  .ms .panel .swatch { width:12px; height:12px; border-radius:3px; display:inline-block; }
  .ms .panel .prole { font-weight:600; color:var(--ink); }
  .ms .panel p { margin:0; font-size:.92rem; }
  .ms .prompt { margin:10px 2px 0; font-size:.86rem; color:var(--muted); }
  .ms .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }
  .ms :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .ms * { transition:none !important; } }
  @media (max-width:520px) {
    .ms.card { padding:14px; }
    .ms .dot .dlab { display:none; }
    .ms .rq { align-items:flex-start; }
  }
</style>
