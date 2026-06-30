<script>
  // Molecule — an interactive 3D structure island (3Dmol.js).
  // Loads a YAML manifest of molecules (each pointing at a precomputed 3D SDF),
  // renders one in a WebGL viewer, and lets the student rotate and switch
  // representations (ball-and-stick / space-filling / stick).
  import { onMount, onDestroy, tick } from 'svelte';
  import yaml from 'js-yaml';
  import { load, save } from './lib/store.js';

  // 3Dmol is large (~280 KB gzip); load it lazily so only pages with a molecule
  // island pay for it, not every page in the book.
  let Mol3D = null;

  let { src } = $props();

  let data = $state(null);
  let error = $state(null);
  let selectedId = $state(null);
  let view = $state('ballstick'); // ballstick | spacefill | stick
  let spinning = $state(false);
  let glReady = $state(true);

  let stageId = $state('mol-viewer'); // id of the container the viewer attaches to
  let viewer = null;   // 3Dmol GLViewer
  let ro = null;       // ResizeObserver for the stage
  const sdfCache = new Map();

  let molecules = $derived(data ? data.molecules : []);
  let molecule = $derived(molecules.find((m) => m.id === selectedId) || molecules[0] || null);

  const VIEWS = {
    ballstick: { stick: { radius: 0.14 }, sphere: { scale: 0.27 } },
    spacefill: { sphere: {} },
    stick: { stick: { radius: 0.16 } },
  };
  const VIEW_LABEL = { ballstick: 'Ball-and-stick', spacefill: 'Space-filling', stick: 'Stick' };

  async function fetchSdf(mol) {
    if (!mol) return '';
    if (sdfCache.has(mol.id)) return sdfCache.get(mol.id);
    const res = await fetch(mol.sdf);
    if (!res.ok) throw new Error('Could not load structure (' + res.status + ')');
    const txt = await res.text();
    sdfCache.set(mol.id, txt);
    return txt;
  }

  function applyStyle() {
    if (!viewer) return;
    viewer.setStyle({}, VIEWS[view]);
    viewer.render();
  }

  async function showMolecule() {
    if (!viewer || !molecule) return;
    try {
      const sdf = await fetchSdf(molecule);
      viewer.removeAllModels();
      viewer.addModel(sdf, 'sdf');
      applyStyle();
      viewer.zoomTo();
      viewer.render();
    } catch (e) {
      error = String((e && e.message) || e);
    }
  }

  function onResize() { if (viewer) { viewer.resize(); viewer.render(); } }

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
    const saved = load('mol:' + data.id);
    if (saved) {
      if (saved.selectedId && data.molecules.some((m) => m.id === saved.selectedId)) selectedId = saved.selectedId;
      if (saved.view && VIEWS[saved.view]) view = saved.view;
    }
    // The stage div is conditionally rendered, so wait for it to exist before
    // 3Dmol attaches its WebGL canvas.
    stageId = 'mol-viewer-' + data.id + '-' + Math.random().toString(36).slice(2, 7);
    await tick();
    try {
      const ns = await import('3dmol'); // lazy chunk
      Mol3D = (ns && ns.createViewer) ? ns : (ns.default ?? ns); // CJS/ESM interop
      viewer = Mol3D.createViewer(stageId, { backgroundColor: 'white' });
      if (!viewer) throw new Error('viewer null');
    } catch (e) {
      glReady = false;
      console.warn('[molecule] viewer init failed:', e);
      return;
    }
    window.addEventListener('resize', onResize);
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => { if (viewer) { viewer.resize(); viewer.render(); } });
      const el = document.getElementById(stageId);
      if (el) ro.observe(el);
    }
    // let the browser compute the real container width before 3Dmol sizes the canvas
    // (timeout-guarded: rAF can be throttled when the page isn't painting)
    await new Promise((r) => {
      let done = false;
      const fin = () => { if (!done) { done = true; r(); } };
      requestAnimationFrame(() => requestAnimationFrame(fin));
      setTimeout(fin, 300);
    });
    viewer.resize();
    await showMolecule();
  });

  onDestroy(() => {
    window.removeEventListener('resize', onResize);
    if (ro) ro.disconnect();
    try { if (viewer) viewer.clear(); } catch (e) { /* noop */ }
  });

  function persist() { if (data) save('mol:' + data.id, { selectedId, view }); }

  function pickMolecule(e) { selectedId = e.target.value; persist(); showMolecule(); }
  function setView(v) {
    view = v; persist();
    applyStyle();
  }
  function toggleSpin() {
    spinning = !spinning;
    if (viewer) { viewer.spin(spinning ? 'y' : false); }
  }
  function resetView() {
    if (viewer) { viewer.zoomTo(); viewer.render(); }
  }

  let ariaLabel = $derived(
    molecule ? `3D structure of ${molecule.name}, ${VIEW_LABEL[view]} representation. Drag to rotate.` : ''
  );
</script>

<figure class="mol card">
  <figcaption class="head">
    <strong>{data?.title || 'Molecular structure'}</strong>
    <span class="hint">Drag to rotate · scroll to zoom</span>
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

    <div class="stage" id={stageId} role="img" aria-label={ariaLabel}></div>

    {#if !glReady}
      <p class="fallback">3D view needs WebGL, which isn't available here. The molecule is described in the caption below.</p>
    {/if}

    <div class="controls">
      <div class="views" role="group" aria-label="Representation">
        {#each Object.keys(VIEWS) as v}
          <button type="button" class:active={view === v} aria-pressed={view === v} onclick={() => setView(v)}>{VIEW_LABEL[v]}</button>
        {/each}
      </div>
      <div class="actions">
        <label class="chk"><input type="checkbox" checked={spinning} onchange={toggleSpin} /> Spin</label>
        <button type="button" class="btn secondary" onclick={resetView}>Recentre</button>
      </div>
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

  .mol .stage { position:relative; width:100%; height:320px; border:1px solid var(--line); border-radius:9px; overflow:hidden; background:#fff; }
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
