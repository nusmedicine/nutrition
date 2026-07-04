<script>
  // MetabolicMap — "build the metabolic map" stepper (Chapter 6, Part A).
  // A bespoke inline-SVG network of the five metabolic crossroads. Each step adds one
  // pathway (a set of edges) onto the fixed backbone, so students watch separate pathways
  // converge at shared hubs — the direct antidote to "these are separate topics to memorise".
  // Toggles highlight the one-way valves and filter catabolic vs anabolic traffic. Fully
  // data-driven from a YAML manifest (nodes + edges + steps). Shares its colour key with the
  // Part-B MetabolicSwitch island so Layer B reads as Layer A "coming alive".
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'metabolic-map',
    title: 'Build the metabolic map',
    viewBox: '0 0 760 480',
    nodes: [
      { id: 'g6p', label: 'Glucose-6-P', star: true, x: 110, y: 150 },
      { id: 'pyruvate', label: 'Pyruvate', star: true, x: 110, y: 300 },
      { id: 'acetylcoa', label: 'Acetyl-CoA', star: true, x: 400, y: 300 },
      { id: 'tca', label: 'TCA cycle', star: true, x: 615, y: 300 },
    ],
    edges: [{ id: 'glycolysis', from: 'g6p', to: 'pyruvate', step: 1, kind: 'catabolic' }],
    steps: [{ title: 'Glycolysis', caption: 'Glucose is split to pyruvate.' }],
  };

  let data = $state(null);
  let error = $state(null);
  let step = $state(1);
  let selectedId = $state(null);
  let showValves = $state(false);
  let view = $state('all'); // all | catabolic | anabolic

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
    const saved = load('metabmap:' + data.id);
    if (saved && Number.isFinite(saved.step)) step = Math.min(Math.max(1, saved.step), stepCount);
  });

  let nodes = $derived(data ? data.nodes : []);
  let edges = $derived(data ? data.edges || [] : []);
  let stepDefs = $derived(data ? data.steps || [] : []);
  let stepCount = $derived(stepDefs.length || 1);
  let byId = $derived(new Map(nodes.map((n) => [n.id, n])));
  let viewBox = $derived((data && data.viewBox) || '0 0 760 480');

  let visibleEdges = $derived(edges.filter((e) => (e.step || 1) <= step));
  let activeNodeIds = $derived(new Set(visibleEdges.flatMap((e) => [e.from, e.to])));
  let currentStep = $derived(stepDefs[step - 1] || null);
  let selected = $derived(selectedId ? byId.get(selectedId) : null);

  function setStep(n) {
    step = Math.min(Math.max(1, n), stepCount);
    if (data) save('metabmap:' + data.id, { step });
  }

  // Anti-parallel edge pairs (e.g. glycolysis vs gluconeogenesis) share a node pair; offset each
  // to its own lane so the two arrows and their labels don't collide.
  let dirKeys = $derived(new Set(edges.map((e) => e.from + '>' + e.to)));
  let biPairs = $derived(new Set(edges.filter((e) => dirKeys.has(e.to + '>' + e.from)).map((e) => e.from + '>' + e.to)));

  // Geometry: pull the drawn line back from each node centre so the arrowhead sits outside it.
  function geom(e) {
    const s = byId.get(e.from), t = byId.get(e.to);
    if (!s || !t) return null;
    const dx = t.x - s.x, dy = t.y - s.y;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len;
    const back = 34, front = 30;
    // For a bidirectional pair, shift to the right of travel so the two directions separate into
    // lanes, and pull the label off-centre (toward the source) so the two labels don't stack.
    const bi = biPairs.has(e.from + '>' + e.to);
    const off = bi ? 8 : 0;
    const ox = uy * off, oy = -ux * off;
    const f = bi ? 0.34 : 0.5; // label position along the edge
    return {
      x1: s.x + ux * front + ox, y1: s.y + uy * front + oy,
      x2: t.x - ux * back + ox, y2: t.y - uy * back + oy,
      mx: s.x + dx * f + ox * 1.4, my: s.y + dy * f + oy * 1.4,
    };
  }
  function nodeW(n) {
    const chars = Math.max((n.label || '').length, (n.sub || '').length + 2);
    return Math.max(84, chars * 6.7 + 18);
  }
  function nodeH(n) { return n.sub ? 40 : 30; }

  function edgeState(e) {
    // returns { cls, dim } for styling
    const dim = view !== 'all' && e.kind !== view;
    return { cls: e.kind + (showValves && e.valve ? ' valve' : ''), dim };
  }
  const DETAIL = [
    { key: 'home', label: 'Where' },
    { key: 'inputs', label: 'In' },
    { key: 'outputs', label: 'Out' },
    { key: 'control', label: 'Control step' },
    { key: 'note', label: 'Why it matters' },
  ];
  let detailRows = $derived(selected ? DETAIL.filter((r) => selected[r.key]) : []);
</script>

{#if !data}
  <div class="mm card"><p>Loading…</p></div>
{:else}
  <figure class="mm card">
    <figcaption class="head">
      <strong>{data.title || 'Build the metabolic map'}</strong>
      <span class="hint">Step through it, then click a crossroad (★)</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <!-- Controls -->
    <div class="controls">
      <div class="stepper">
        <button type="button" onclick={() => setStep(step - 1)} disabled={step <= 1} aria-label="Previous step">‹</button>
        <span class="stepno">Step {step} / {stepCount}{#if currentStep}: <b>{currentStep.title}</b>{/if}</span>
        <button type="button" onclick={() => setStep(step + 1)} disabled={step >= stepCount} aria-label="Next step">›</button>
      </div>
      <div class="toggles">
        <button type="button" class:on={showValves} aria-pressed={showValves} onclick={() => (showValves = !showValves)}>One-way streets</button>
        <span class="seg" role="group" aria-label="Filter traffic">
          <button type="button" class:on={view === 'all'} onclick={() => (view = 'all')}>All</button>
          <button type="button" class:on={view === 'catabolic'} onclick={() => (view = 'catabolic')}>Breaking down</button>
          <button type="button" class:on={view === 'anabolic'} onclick={() => (view = 'anabolic')}>Building up</button>
        </span>
      </div>
    </div>

    <div class="stage">
      <svg viewBox={viewBox} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Metabolic map network diagram">
        <defs>
          <marker id="mm-cat" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#b9691d"/></marker>
          <marker id="mm-ana" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1f6fb2"/></marker>
          <marker id="mm-valve" markerWidth="10" markerHeight="10" refX="7" refY="3.2" orient="auto"><path d="M0,0 L7,3.2 L0,6.4 Z" fill="#b3282d"/></marker>
        </defs>

        <!-- edges -->
        {#each visibleEdges as e (e.id)}
          {@const g = geom(e)}
          {@const st = edgeState(e)}
          {#if g}
            <g class="edge {st.cls}" class:dim={st.dim}>
              <line x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2}
                marker-end="url(#mm-{showValves && e.valve ? 'valve' : e.kind === 'anabolic' ? 'ana' : 'cat'})" />
              {#if e.label}
                <g transform="translate({g.mx},{g.my})">
                  <text class="elabel" text-anchor="middle" dy="-2">{e.label}</text>
                </g>
              {/if}
            </g>
          {/if}
        {/each}

        <!-- nodes -->
        {#each nodes as n (n.id)}
          {@const w = nodeW(n)}
          {@const h = nodeH(n)}
          {@const active = activeNodeIds.has(n.id)}
          <g class="node" class:star={n.star} class:inactive={!active} class:selected={selectedId === n.id}
             transform="translate({n.x},{n.y})"
             role="button" tabindex="0"
             onclick={() => (selectedId = selectedId === n.id ? null : n.id)}
             onkeydown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); selectedId = selectedId === n.id ? null : n.id; } }}>
            <rect x={-w / 2} y={-h / 2} width={w} height={h} rx="8" />
            <text class="nlabel" text-anchor="middle" dy={n.sub ? '-2' : '4'}>{n.star ? '★ ' : ''}{n.label}</text>
            {#if n.sub}<text class="nsub" text-anchor="middle" dy="12">{n.sub}</text>{/if}
          </g>
        {/each}
      </svg>
    </div>

    {#if currentStep}<p class="caption">{currentStep.caption}</p>{/if}

    <!-- Detail panel -->
    {#if selected}
      <div class="panel" aria-live="polite">
        <h3>{selected.star ? '★ ' : ''}{selected.label}{#if selected.sub} <span class="sub">— {selected.sub}</span>{/if}</h3>
        {#if detailRows.length}
          <dl>
            {#each detailRows as r}
              <div class="row {r.key}"><dt>{r.label}</dt><dd>{selected[r.key]}</dd></div>
            {/each}
          </dl>
        {:else}
          <p class="thin">A molecule that links the crossroads on the map.</p>
        {/if}
      </div>
    {/if}

    <p class="legend">
      <span class="key cat">■ breaking down (catabolic)</span>
      <span class="key ana">■ building up (anabolic)</span>
      <span class="key val">✗ one-way street</span>
    </p>
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .mm {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    --cat:#b9691d; --ana:#1f6fb2; --valve:#b3282d;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .mm.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .mm .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .mm .hint { font-size:.78rem; color:var(--muted); }
  .mm .intro { font-size:.92rem; margin:0 0 12px; }
  .mm button { font:inherit; cursor:pointer; }

  .mm .controls { display:flex; flex-wrap:wrap; gap:10px 16px; align-items:center; justify-content:space-between; margin-bottom:8px; }
  .mm .stepper { display:flex; align-items:center; gap:8px; }
  .mm .stepper button { width:34px; height:34px; border:1px solid var(--line); border-radius:8px; background:#fff; font-size:1.2rem; line-height:1; color:var(--brand-ink); }
  .mm .stepper button:hover:not(:disabled) { background:var(--brand-bg); border-color:var(--brand-ink); }
  .mm .stepper button:disabled { opacity:.4; cursor:default; }
  .mm .stepno { font-size:.9rem; }
  .mm .toggles { display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
  .mm .toggles button { min-height:32px; padding:5px 10px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.82rem; font-weight:600; }
  .mm .toggles button.on { border-color:var(--brand-ink); background:var(--brand-bg); color:var(--brand-ink); }
  .mm .seg { display:inline-flex; border:1px solid var(--line); border-radius:8px; overflow:hidden; }
  .mm .seg button { border:none; border-radius:0; border-left:1px solid var(--line); }
  .mm .seg button:first-child { border-left:none; }

  .mm .stage { width:100%; }
  .mm svg { display:block; width:100%; height:auto; background:linear-gradient(#fcfdfd,#f6f9f8); border:1px solid #eef1f4; border-radius:8px; }

  .mm .edge line { stroke-width:2.4; fill:none; }
  .mm .edge.catabolic line { stroke:var(--cat); }
  .mm .edge.anabolic line { stroke:var(--ana); stroke-dasharray:1 0; }
  .mm .edge.valve line { stroke:var(--valve); stroke-width:3.4; stroke-dasharray:7 4; }
  .mm .edge.dim { opacity:.1; }
  .mm .elabel { font-size:9px; fill:#3a4650; paint-order:stroke; stroke:#f7faf9; stroke-width:3px; stroke-linejoin:round; }

  .mm .node rect { fill:#fff; stroke:var(--muted); stroke-width:1.4; transition:opacity .2s ease; }
  .mm .node.star rect { fill:var(--brand-bg); stroke:var(--brand-ink); stroke-width:2; }
  .mm .node.inactive rect { opacity:.28; }
  .mm .node.inactive .nlabel, .mm .node.inactive .nsub { opacity:.4; }
  .mm .node.selected rect { stroke:var(--focus); stroke-width:2.6; }
  .mm .node { cursor:pointer; }
  .mm .nlabel { font-size:11.5px; font-weight:700; fill:var(--ink); }
  .mm .node.star .nlabel { fill:var(--brand-ink); }
  .mm .nsub { font-size:8.5px; fill:var(--muted); }

  .mm .caption { font-size:.92rem; margin:10px 2px 0; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }

  .mm .panel { margin-top:12px; border:1px solid var(--line); border-radius:8px; padding:10px 14px; background:#fbfdfc; }
  .mm .panel h3 { margin:0 0 8px; font-size:1.02rem; color:var(--brand-ink); }
  .mm .panel .sub { font-weight:400; color:var(--muted); font-size:.86rem; }
  .mm .panel dl { margin:0; display:flex; flex-direction:column; gap:6px; }
  .mm .panel .row { display:grid; grid-template-columns:96px 1fr; gap:10px; align-items:baseline; border-left:3px solid var(--line); padding-left:10px; }
  .mm .panel .row.note { border-left-color:var(--brand-ink); }
  .mm .panel dt { font-size:.7rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; color:var(--muted); }
  .mm .panel dd { margin:0; font-size:.9rem; }
  .mm .panel .thin { margin:0; font-size:.9rem; color:var(--muted); }

  .mm .legend { display:flex; flex-wrap:wrap; gap:12px; margin:12px 2px 0; font-size:.76rem; color:var(--muted); }
  .mm .key.cat { color:var(--cat); }
  .mm .key.ana { color:var(--ana); }
  .mm .key.val { color:var(--valve); }
  .mm .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }
  .mm :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .mm * { transition:none !important; } }
  @media (max-width:520px) {
    .mm.card { padding:14px; }
    .mm .controls { flex-direction:column; align-items:flex-start; }
  }
</style>
