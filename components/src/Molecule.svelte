<script>
  // Molecule — a 2D + 3D structure island.
  // Default view is the 2D skeletal formula (clearest for e.g. cis vs trans). The 3D
  // views (ball-and-stick / space-filling / stick) use 3Dmol.js, which is loaded lazily
  // only when a 3D view is first selected. 2D SVG and 3D SDF are generated from the same
  // SMILES (RDKit) so the two representations always agree.
  import { onMount, onDestroy, tick } from 'svelte';
  import yaml from 'js-yaml';
  import { load, save } from './lib/store.js';
  import { resolveAsset } from './lib/base.js';

  let Mol3D = null; // 3Dmol, lazy-loaded

  let { src } = $props();
  let data = $state(null);
  let error = $state(null);
  let selectedId = $state(null);
  let view = $state('2d'); // 2d | ballstick | spacefill | stick
  let spinning = $state(false);
  let glReady = $state(true);
  let svgMarkup = $state('');
  let stageId = $state('mol-viewer');

  let viewer = null;
  let ro = null;
  const sdfCache = new Map();
  const svgCache = new Map();

  let molecules = $derived(data ? data.molecules : []);
  let molecule = $derived(molecules.find((m) => m.id === selectedId) || molecules[0] || null);
  let is3D = $derived(view !== '2d');

  const STYLES = {
    ballstick: { stick: { radius: 0.14 }, sphere: { scale: 0.27 } },
    spacefill: { sphere: {} },
    stick: { stick: { radius: 0.16 } },
  };
  const ALL_VIEWS = ['2d', 'ballstick', 'spacefill', 'stick'];
  const VIEW_LABEL = { '2d': '2D formula', ballstick: 'Ball & stick', spacefill: 'Space-filling', stick: 'Stick' };

  async function fetchText(url, cache) {
    if (cache.has(url)) return cache.get(url);
    const res = await fetch(url);
    if (!res.ok) throw new Error('load failed (' + res.status + ')');
    const t = await res.text();
    cache.set(url, t);
    return t;
  }

  async function loadSvg() {
    if (!molecule || !molecule.svg) { svgMarkup = ''; return; }
    try { svgMarkup = await fetchText(resolveAsset(molecule.svg), svgCache); }
    catch (e) { svgMarkup = ''; }
  }

  function applyStyle() { if (viewer && is3D) { viewer.setStyle({}, STYLES[view]); viewer.render(); } }

  async function showMolecule() {
    if (!viewer || !molecule) return;
    try {
      const sdf = await fetchText(resolveAsset(molecule.sdf), sdfCache);
      viewer.removeAllModels();
      viewer.addModel(sdf, 'sdf');
      applyStyle();
      viewer.zoomTo();
      viewer.render();
    } catch (e) { /* keep prior frame */ }
  }

  function onResize() { if (viewer) { viewer.resize(); viewer.render(); } }

  // Create the 3Dmol viewer on demand (first time a 3D view is chosen).
  async function ensureViewer() {
    if (viewer) return true;
    await tick(); // the stage div is visible (not display:none) now that a 3D view is active
    try {
      const ns = await import('3dmol'); // lazy chunk
      Mol3D = (ns && ns.createViewer) ? ns : (ns.default ?? ns); // CJS/ESM interop
      viewer = Mol3D.createViewer(stageId, { backgroundColor: 'white' });
      if (!viewer) throw new Error('viewer null');
    } catch (e) {
      glReady = false;
      console.warn('[molecule] 3D init failed:', e);
      return false;
    }
    window.addEventListener('resize', onResize);
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => { if (viewer) { viewer.resize(); viewer.render(); } });
      const el = document.getElementById(stageId);
      if (el) ro.observe(el);
    }
    // timeout-guarded rAF: rAF is throttled when the page isn't painting
    await new Promise((r) => {
      let done = false;
      const fin = () => { if (!done) { done = true; r(); } };
      requestAnimationFrame(() => requestAnimationFrame(fin));
      setTimeout(fin, 300);
    });
    viewer.resize();
    await showMolecule();
    return true;
  }

  onMount(async () => {
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error('Could not load molecule data (' + res.status + ')');
      data = yaml.load(await res.text());
      if (!data || !Array.isArray(data.molecules) || !data.molecules.length) throw new Error('empty manifest');
    } catch (e) {
      error = String((e && e.message) || e);
      return;
    }
    selectedId = data.molecules[0].id;
    stageId = 'mol-viewer-' + data.id + '-' + Math.random().toString(36).slice(2, 7);
    const saved = load('mol:' + data.id);
    if (saved) {
      if (saved.selectedId && data.molecules.some((m) => m.id === saved.selectedId)) selectedId = saved.selectedId;
      if (saved.view && (saved.view === '2d' || STYLES[saved.view])) view = saved.view;
    }
    await loadSvg();
    if (is3D) await ensureViewer(); // restored into a 3D view
  });

  onDestroy(() => {
    window.removeEventListener('resize', onResize);
    if (ro) ro.disconnect();
    try { if (viewer) viewer.clear(); } catch (e) { /* noop */ }
  });

  function persist() { if (data) save('mol:' + data.id, { selectedId, view }); }

  async function pickMolecule(e) {
    selectedId = e.target.value; persist();
    await loadSvg();
    if (is3D && viewer) await showMolecule();
  }
  async function setView(v) {
    view = v; persist();
    if (v === '2d') return; // SVG renders reactively
    const ok = await ensureViewer();
    if (ok) { applyStyle(); await tick(); viewer.resize(); viewer.render(); }
  }
  function toggleSpin() { spinning = !spinning; if (viewer) viewer.spin(spinning ? 'y' : false); }
  function resetView() { if (viewer) { viewer.zoomTo(); viewer.render(); } }

  let ariaLabel = $derived(
    molecule
      ? (is3D
          ? `3D structure of ${molecule.name}, ${VIEW_LABEL[view]} view. Drag to rotate.`
          : `2D skeletal structure of ${molecule.name}.`)
      : ''
  );
</script>

<figure class="mol card">
  <figcaption class="head">
    <strong>{data?.title || 'Molecular structure'}</strong>
    <span class="hint">{is3D ? 'Drag to rotate · scroll to zoom' : '2D skeletal formula'}</span>
  </figcaption>

  {#if error && !data}
    <p class="err">⚠ {error}</p>
  {:else if !data}
    <p>Loading…</p>
  {:else}
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="row">
      <label for="mol-pick">Molecule</label>
      <select id="mol-pick" value={selectedId} onchange={pickMolecule}>
        {#each molecules as m}<option value={m.id}>{m.name}</option>{/each}
      </select>
    </div>

    <!-- 2D skeletal (default) -->
    <div class="stage svg2d" class:hidden={is3D} role="img" aria-label={is3D ? '' : ariaLabel}>
      {@html svgMarkup}
    </div>
    <!-- 3D viewer (created lazily on first 3D view) -->
    <div class="stage gl3d" id={stageId} class:hidden={!is3D} role="img" aria-label={is3D ? ariaLabel : ''}></div>

    {#if is3D && !glReady}
      <p class="fallback">3D view needs WebGL, which isn't available here. Use the 2D formula, or see the caption below.</p>
    {/if}

    <div class="controls">
      <div class="views" role="group" aria-label="Representation">
        {#each ALL_VIEWS as v}
          <button type="button" class:active={view === v} aria-pressed={view === v} onclick={() => setView(v)}>{VIEW_LABEL[v]}</button>
        {/each}
      </div>
      {#if is3D}
        <div class="actions">
          <label class="chk"><input type="checkbox" checked={spinning} onchange={toggleSpin} /> Spin</label>
          <button type="button" class="btn secondary" onclick={resetView}>Recentre</button>
        </div>
      {/if}
    </div>

    {#if molecule?.note}<p class="note" aria-live="polite">{molecule.note}</p>{/if}
  {/if}
</figure>

<style>
  .mol {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --focus:#1664c0;
    color:var(--ink);
    font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    margin:1.2rem 0;
  }
  .mol.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:640px; }
  .mol .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .mol .hint { font-size:.78rem; color:var(--muted); }
  .mol .intro { font-size:.94rem; margin:0 0 10px; }
  .mol button, .mol select, .mol input { font:inherit; }

  .mol .row { display:flex; flex-wrap:wrap; gap:8px 10px; align-items:center; margin-bottom:8px; }
  .mol .row label { font-weight:600; }
  .mol select { border:1px solid var(--line); border-radius:8px; padding:8px 10px; min-height:40px; background:#fff; color:var(--ink); }

  .mol .stage { position:relative; width:100%; border:1px solid var(--line); border-radius:9px; overflow:hidden; background:#fff; }
  .mol .stage.hidden { display:none; }
  .mol .gl3d { height:320px; }
  .mol .svg2d { min-height:220px; display:flex; align-items:center; justify-content:center; padding:10px; }
  .mol .svg2d :global(svg) { max-width:100%; height:auto; max-height:260px; }
  .mol .fallback { font-size:.9rem; color:var(--muted); margin:8px 0 0; }

  .mol .controls { display:flex; flex-wrap:wrap; gap:10px 16px; align-items:center; justify-content:space-between; margin-top:10px; }
  .mol .views { display:flex; gap:6px; flex-wrap:wrap; }
  .mol .views button { min-height:40px; padding:8px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); cursor:pointer; font-weight:600; }
  .mol .views button.active { border-color:var(--brand-ink); background:#eef5f2; color:var(--brand-ink); }
  .mol .views button:hover { background:#f3f8f7; }
  .mol .actions { display:flex; gap:12px; align-items:center; }
  .mol .chk { display:inline-flex; align-items:center; gap:6px; font-size:.92rem; min-height:40px; }
  .mol .chk input { width:18px; height:18px; accent-color:var(--brand-ink); }
  .mol .btn.secondary { background:transparent; color:var(--brand-ink); border:1px solid var(--line); border-radius:8px; padding:9px 14px; min-height:40px; font-weight:600; cursor:pointer; }
  .mol .btn.secondary:hover { background:#eef2f1; }

  .mol .note { margin:10px 0 2px; padding:10px 13px; border-radius:9px; border:1px solid var(--line); background:#f7f9fb; font-size:.92rem; }
  .mol .err { color:#9b1c1c; }
  .mol :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
</style>
