<script>
  // ScfaFlow — "fibre → short-chain fatty acids" fermentation flow (Chapter 7, owned centrepiece).
  // A bespoke inline-SVG stepped flow: substrate → anaerobic fermentation → three SCFAs (60:20:20)
  // + gas → three fates (systemic / liver / colonocytes). Each step reveals the next stage; clicking
  // a SCFA or a fate opens a detail panel. Shares the design language (card, stepper, colour key) of
  // the Ch.6 metabolic islands. Data-driven from a YAML manifest; no external images (CC BY-SA 4.0).
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'scfa-flow',
    title: 'Fibre → short-chain fatty acids',
    viewBox: '0 0 770 430',
    cargo: { acetate: '#1f9d6b', propionate: '#b9691d', butyrate: '#8a6fc0', gas: '#7a8791', substrate: '#08503f' },
    nodes: [
      { id: 'substrate', label: 'Fibre', x: 100, y: 215, kind: 'substrate' },
      { id: 'ferment', label: 'Bacteria ferment', x: 265, y: 215, kind: 'ferment' },
      { id: 'butyrate', label: 'Butyrate', x: 455, y: 335, kind: 'scfa', pct: 20 },
    ],
    edges: [{ from: 'substrate', to: 'ferment', step: 1, kind: 'substrate' }],
    steps: [{ title: 'Fibre reaches the colon', caption: 'Fibre escapes digestion and arrives in the colon.' }],
  };

  let data = $state(null);
  let error = $state(null);
  let step = $state(1);
  let selectedId = $state(null);

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.nodes) || !parsed.nodes.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('scfaflow:' + data.id);
    if (saved && Number.isFinite(saved.step)) step = Math.min(Math.max(1, saved.step), stepCount);
  });

  let nodes = $derived(data ? data.nodes : []);
  let edges = $derived(data ? data.edges || [] : []);
  let stepDefs = $derived(data ? data.steps || [] : []);
  let stepCount = $derived(stepDefs.length || 1);
  let cargo = $derived((data && data.cargo) || FALLBACK.cargo);
  let byId = $derived(new Map(nodes.map((n) => [n.id, n])));
  let viewBox = $derived((data && data.viewBox) || '0 0 770 430');
  let cargoKeys = $derived(Object.keys(cargo).filter((k) => k !== 'substrate'));

  let currentStep = $derived(stepDefs[step - 1] || null);
  let visibleEdges = $derived(edges.filter((e) => (e.step || 1) <= step));
  let activeNodeIds = $derived(new Set([nodes.length ? nodes[0].id : null, ...visibleEdges.flatMap((e) => [e.from, e.to])]));
  let selected = $derived(selectedId ? byId.get(selectedId) : null);

  function setStep(n) {
    step = Math.min(Math.max(1, n), stepCount);
    if (data) save('scfaflow:' + data.id, { step });
  }

  function geom(e) {
    const s = byId.get(e.from), t = byId.get(e.to);
    if (!s || !t) return null;
    const dx = t.x - s.x, dy = t.y - s.y;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len;
    return {
      x1: s.x + ux * 54, y1: s.y + uy * 30,
      x2: t.x - ux * 58, y2: t.y - uy * 30,
      mx: (s.x + t.x) / 2, my: (s.y + t.y) / 2,
    };
  }
  const colorOf = (kind) => cargo[kind] || '#7a8791';
  function nodeW(n) {
    const chars = Math.max((n.label || '').length, (n.sub || '').length);
    return Math.max(92, chars * 6.6 + 22);
  }
  const NODE_H = 46;
</script>

{#if !data}
  <div class="sf card"><p>Loading…</p></div>
{:else}
  <figure class="sf card">
    <figcaption class="head">
      <strong>{data.title || 'Fibre → short-chain fatty acids'}</strong>
      <span class="hint">Step through it, then click a product or its fate</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="controls">
      <button type="button" onclick={() => setStep(step - 1)} disabled={step <= 1} aria-label="Previous step">‹</button>
      <span class="stepno">Step {step} / {stepCount}{#if currentStep}: <b>{currentStep.title}</b>{/if}</span>
      <button type="button" onclick={() => setStep(step + 1)} disabled={step >= stepCount} aria-label="Next step">›</button>
    </div>

    <div class="stage">
      <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Fibre to short-chain fatty acid fermentation flow">
        <defs>
          {#each Object.keys(cargo) as k}
            <marker id="sf-arrow-{k}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill={cargo[k]}/></marker>
          {/each}
        </defs>

        {#each visibleEdges as e (e.from + e.to)}
          {@const g = geom(e)}
          {#if g}
            <g class="edge">
              <line x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2} stroke={colorOf(e.kind)} stroke-width="2.6" stroke-linecap="round" marker-end="url(#sf-arrow-{e.kind})" />
              {#if e.label}<text class="elabel" x={g.mx} y={g.my} text-anchor="middle" dy="-4">{e.label}</text>{/if}
            </g>
          {/if}
        {/each}

        {#each nodes as n (n.id)}
          {@const w = nodeW(n)}
          {@const active = activeNodeIds.has(n.id)}
          {@const accent = n.kind === 'scfa' ? colorOf(n.id) : n.kind === 'gas' ? cargo.gas : n.kind === 'fate' ? colorOf(fateCargo(n.id)) : cargo.substrate}
          <g class="node {n.kind}" class:inactive={!active} class:selected={selectedId === n.id}
             transform="translate({n.x},{n.y})" role="button" tabindex="0"
             onclick={() => (selectedId = selectedId === n.id ? null : n.id)}
             onkeydown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); selectedId = selectedId === n.id ? null : n.id; } }}>
            <rect x={-w / 2} y={-NODE_H / 2} width={w} height={NODE_H} rx="9" style="--accent:{accent}" />
            <text class="nlabel" text-anchor="middle" dy="-6">{n.label}</text>
            {#if n.sub}<text class="nsub" text-anchor="middle" dy="7">{n.sub}</text>{/if}
            {#if n.kind === 'scfa' && n.pct != null}
              <rect class="pctbg" x={-w / 2 + 10} y={12} width={w - 20} height="5" rx="2.5" />
              <rect class="pctfg" x={-w / 2 + 10} y={12} width={(w - 20) * n.pct / 100} height="5" rx="2.5" style="fill:{accent}" />
            {/if}
          </g>
        {/each}
      </svg>
    </div>

    {#if currentStep}<p class="caption">{currentStep.caption}</p>{/if}

    {#if selected}
      <div class="panel" aria-live="polite">
        <h3><span class="dot" style="background:{selected.kind === 'scfa' ? colorOf(selected.id) : selected.kind === 'fate' ? colorOf(fateCargo(selected.id)) : selected.kind === 'gas' ? cargo.gas : cargo.substrate}"></span>{selected.label}{#if selected.sub} <span class="sub">— {selected.sub}</span>{/if}</h3>
        {#if selected.detail}<p>{selected.detail}</p>{/if}
      </div>
    {:else}
      <p class="prompt">Click a short-chain fatty acid (acetate, propionate, butyrate) or its destination to see where it goes and why it matters.</p>
    {/if}

    <p class="legend">
      {#each cargoKeys as k}<span class="key" style="color:{cargo[k]}">■ {k}</span>{/each}
    </p>
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<script module>
  // Map a fate node id to the SCFA whose colour it should carry.
  const FATE_CARGO = { systemic: 'acetate', liver: 'propionate', colonocytes: 'butyrate' };
  export function fateCargo(id) { return FATE_CARGO[id] || 'gas'; }
</script>

<style>
  .sf {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .sf.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:770px; }
  .sf .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .sf .hint { font-size:.78rem; color:var(--muted); }
  .sf .intro { font-size:.92rem; margin:0 0 12px; }
  .sf button { font:inherit; cursor:pointer; }

  .sf .controls { display:flex; align-items:center; gap:10px; margin-bottom:8px; }
  .sf .controls button { width:34px; height:34px; border:1px solid var(--line); border-radius:8px; background:#fff; font-size:1.2rem; line-height:1; color:var(--brand-ink); }
  .sf .controls button:hover:not(:disabled) { background:var(--brand-bg); border-color:var(--brand-ink); }
  .sf .controls button:disabled { opacity:.4; cursor:default; }
  .sf .stepno { font-size:.9rem; }

  .sf .stage { width:100%; }
  .sf svg { display:block; width:100%; height:auto; background:linear-gradient(#fcfdfd,#f6f9f8); border:1px solid #eef1f4; border-radius:8px; }
  .sf .edge line { transition:opacity .2s ease; }
  .sf .elabel { font-size:9.5px; fill:#3a4650; paint-order:stroke; stroke:#f7faf9; stroke-width:3px; stroke-linejoin:round; }

  .sf .node { cursor:pointer; }
  .sf .node rect { fill:#fff; stroke:var(--accent); stroke-width:2; transition:opacity .2s ease; }
  .sf .node.substrate rect, .sf .node.ferment rect { fill:var(--brand-bg); }
  .sf .node.scfa rect { fill:#fff; }
  .sf .node.gas rect { fill:#f2f4f6; }
  .sf .node.fate rect { fill:#fbfdfc; stroke-width:2.4; }
  .sf .node.inactive { opacity:.28; }
  .sf .node.selected rect { stroke:var(--focus); stroke-width:3; }
  .sf .nlabel { font-size:12px; font-weight:700; fill:var(--ink); }
  .sf .nsub { font-size:8.5px; fill:var(--muted); }
  .sf .pctbg { fill:#e7ebee; }

  .sf .caption { font-size:.92rem; margin:10px 2px 0; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }

  .sf .panel { margin-top:12px; border:1px solid var(--line); border-radius:8px; padding:10px 14px; background:#fbfdfc; }
  .sf .panel h3 { margin:0 0 6px; font-size:1.02rem; color:var(--brand-ink); display:flex; align-items:center; gap:8px; }
  .sf .panel .dot { width:12px; height:12px; border-radius:50%; display:inline-block; }
  .sf .panel .sub { font-weight:400; color:var(--muted); font-size:.86rem; }
  .sf .panel p { margin:0; font-size:.92rem; }
  .sf .prompt { margin:10px 2px 0; font-size:.86rem; color:var(--muted); }

  .sf .legend { display:flex; flex-wrap:wrap; gap:12px; margin:12px 2px 0; font-size:.76rem; }
  .sf .legend .key { font-weight:600; text-transform:capitalize; }
  .sf .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }
  .sf :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .sf * { transition:none !important; } }
  @media (max-width:520px) { .sf.card { padding:14px; } }
</style>
