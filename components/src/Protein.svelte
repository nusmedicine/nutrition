<script>
  // Protein — a 3D cartoon (ribbon) island for macromolecules, rendered from real PDB
  // coordinates via 3Dmol.js (lazy-loaded). Proteins have no meaningful 2D formula, so this
  // is 3D-only: colour by chain (quaternary), by secondary structure, or rainbow (N→C).
  import { onMount, onDestroy, tick } from 'svelte';
  import yaml from 'js-yaml';
  import { load, save } from './lib/store.js';
  import { resolveAsset } from './lib/base.js';

  let Mol3D = null; // 3Dmol, lazy-loaded

  let { src } = $props();
  let data = $state(null);
  let error = $state(null);
  let selectedId = $state(null);
  let colorMode = $state('chain'); // chain | structure | rainbow
  let spinning = $state(false);
  let glReady = $state(true);
  let stageId = $state('protein-viewer');

  let viewer = null;
  let ro = null;
  const pdbCache = new Map();

  let proteins = $derived(data ? data.proteins : []);
  let protein = $derived(proteins.find((p) => p.id === selectedId) || proteins[0] || null);

  // distinct, colour-blind-friendlier hues for subunits
  const CHAIN_COLORS = ['#2f6fd0', '#d9793e', '#3f9b5b', '#9a5cc7', '#c74f7b', '#c9a12e', '#0f9d8f', '#8a93a0'];
  const COLOR_LABEL = { chain: 'By chain', structure: 'By structure', rainbow: 'Rainbow (N→C)' };

  async function fetchText(url, cache) {
    if (cache.has(url)) return cache.get(url);
    const res = await fetch(url);
    if (!res.ok) throw new Error('load failed (' + res.status + ')');
    const t = await res.text();
    cache.set(url, t);
    return t;
  }

  function applyColor() {
    if (!viewer) return;
    viewer.setStyle({}, {});
    if (colorMode === 'chain') {
      const atoms = viewer.getModel().selectedAtoms({ hetflag: false });
      const chains = [...new Set(atoms.map((a) => a.chain))];
      chains.forEach((ch, i) => viewer.setStyle({ chain: ch, hetflag: false }, { cartoon: { color: CHAIN_COLORS[i % CHAIN_COLORS.length] } }));
    } else if (colorMode === 'structure') {
      viewer.setStyle({ hetflag: false }, { cartoon: { colorscheme: 'ssPyMOL' } });
    } else {
      viewer.setStyle({ hetflag: false }, { cartoon: { color: 'spectrum' } });
    }
    // show the heme groups (where oxygen binds) as sticks
    viewer.setStyle({ resn: 'HEM' }, { stick: { radius: 0.15 } });
    viewer.render();
  }

  async function showProtein() {
    if (!viewer || !protein) return;
    try {
      const pdb = await fetchText(resolveAsset(protein.pdb), pdbCache);
      viewer.removeAllModels();
      viewer.addModel(pdb, 'pdb');
      applyColor();
      viewer.zoomTo();
      viewer.render();
    } catch (e) { /* keep prior frame */ }
  }

  function onResize() { if (viewer) { viewer.resize(); viewer.render(); } }

  async function ensureViewer() {
    if (viewer) return true;
    await tick();
    try {
      const ns = await import('3dmol'); // lazy chunk (shared with the molecule island)
      Mol3D = (ns && ns.createViewer) ? ns : (ns.default ?? ns);
      viewer = Mol3D.createViewer(stageId, { backgroundColor: 'white' });
      if (!viewer) throw new Error('viewer null');
    } catch (e) {
      glReady = false;
      console.warn('[protein] 3D init failed:', e);
      return false;
    }
    window.addEventListener('resize', onResize);
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => { if (viewer) { viewer.resize(); viewer.render(); } });
      const el = document.getElementById(stageId);
      if (el) ro.observe(el);
    }
    await new Promise((r) => {
      let done = false;
      const fin = () => { if (!done) { done = true; r(); } };
      requestAnimationFrame(() => requestAnimationFrame(fin));
      setTimeout(fin, 300);
    });
    viewer.resize();
    await showProtein();
    return true;
  }

  onMount(async () => {
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error('Could not load protein data (' + res.status + ')');
      data = yaml.load(await res.text());
      if (!data || !Array.isArray(data.proteins) || !data.proteins.length) throw new Error('empty manifest');
    } catch (e) {
      error = String((e && e.message) || e);
      return;
    }
    selectedId = data.proteins[0].id;
    stageId = 'protein-viewer-' + data.id + '-' + Math.random().toString(36).slice(2, 7);
    const saved = load('protein:' + data.id);
    if (saved) {
      if (saved.selectedId && data.proteins.some((p) => p.id === saved.selectedId)) selectedId = saved.selectedId;
      if (saved.colorMode && COLOR_LABEL[saved.colorMode]) colorMode = saved.colorMode;
    }
    await ensureViewer();
  });

  onDestroy(() => {
    window.removeEventListener('resize', onResize);
    if (ro) ro.disconnect();
    try { if (viewer) viewer.clear(); } catch (e) { /* noop */ }
  });

  function persist() { if (data) save('protein:' + data.id, { selectedId, colorMode }); }

  async function pickProtein(e) {
    selectedId = e.target.value; persist();
    if (viewer) await showProtein();
  }
  function setColor(m) { colorMode = m; persist(); applyColor(); }
  function toggleSpin() { spinning = !spinning; if (viewer) viewer.spin(spinning ? 'y' : false); }
  function resetView() { if (viewer) { viewer.zoomTo(); viewer.render(); } }

  let ariaLabel = $derived(protein ? `3D ribbon (cartoon) structure of ${protein.name}. Drag to rotate.` : '');
</script>

<figure class="prot card">
  <figcaption class="head">
    <strong>{data?.title || 'Protein structure'}</strong>
    <span class="hint">Drag to rotate · scroll to zoom</span>
  </figcaption>

  {#if error && !data}
    <p class="err">⚠ {error}</p>
  {:else if !data}
    <p>Loading…</p>
  {:else}
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="row">
      <label for="prot-pick">Protein</label>
      <select id="prot-pick" value={selectedId} onchange={pickProtein}>
        {#each proteins as p}<option value={p.id}>{p.name}</option>{/each}
      </select>
    </div>

    <div class="stage gl3d" id={stageId} role="img" aria-label={ariaLabel}></div>

    {#if !glReady}
      <p class="fallback">3D view needs WebGL, which isn't available here — see the description below.</p>
    {/if}

    <div class="controls">
      <div class="views" role="group" aria-label="Colour by">
        {#each Object.keys(COLOR_LABEL) as m}
          <button type="button" class:active={colorMode === m} aria-pressed={colorMode === m} onclick={() => setColor(m)}>{COLOR_LABEL[m]}</button>
        {/each}
      </div>
      <div class="actions">
        <label class="chk"><input type="checkbox" checked={spinning} onchange={toggleSpin} /> Spin</label>
        <button type="button" class="btn secondary" onclick={resetView}>Recentre</button>
      </div>
    </div>

    {#if protein?.note}<p class="note" aria-live="polite">{protein.note}</p>{/if}
  {/if}
</figure>

<style>
  .prot {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --focus:#1664c0;
    color:var(--ink);
    font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    margin:1.2rem 0;
  }
  .prot.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:640px; }
  .prot .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .prot .hint { font-size:.78rem; color:var(--muted); }
  .prot .intro { font-size:.94rem; margin:0 0 10px; }
  .prot button, .prot select, .prot input { font:inherit; }

  .prot .row { display:flex; flex-wrap:wrap; gap:8px 10px; align-items:center; margin-bottom:8px; }
  .prot .row label { font-weight:600; }
  .prot select { border:1px solid var(--line); border-radius:8px; padding:8px 10px; min-height:40px; background:#fff; color:var(--ink); }

  .prot .stage { position:relative; width:100%; border:1px solid var(--line); border-radius:9px; overflow:hidden; background:#fff; }
  .prot .gl3d { height:340px; }
  .prot .fallback { font-size:.9rem; color:var(--muted); margin:8px 0 0; }

  .prot .controls { display:flex; flex-wrap:wrap; gap:10px 16px; align-items:center; justify-content:space-between; margin-top:10px; }
  .prot .views { display:flex; gap:6px; flex-wrap:wrap; }
  .prot .views button { min-height:40px; padding:8px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); cursor:pointer; font-weight:600; }
  .prot .views button.active { border-color:var(--brand-ink); background:#eef5f2; color:var(--brand-ink); }
  .prot .views button:hover { background:#f3f8f7; }
  .prot .actions { display:flex; gap:12px; align-items:center; }
  .prot .chk { display:inline-flex; align-items:center; gap:6px; font-size:.92rem; min-height:40px; }
  .prot .chk input { width:18px; height:18px; accent-color:var(--brand-ink); }
  .prot .btn.secondary { background:transparent; color:var(--brand-ink); border:1px solid var(--line); border-radius:8px; padding:9px 14px; min-height:40px; font-weight:600; cursor:pointer; }
  .prot .btn.secondary:hover { background:#eef2f1; }

  .prot .note { margin:10px 0 2px; padding:10px 13px; border-radius:9px; border:1px solid var(--line); background:#f7f9fb; font-size:.92rem; }
  .prot .err { color:#9b1c1c; }
  .prot :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
</style>
