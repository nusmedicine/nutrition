<script>
  // TrialCheck — the Brain Health & Dementia teaching island. A "did the trial confirm the claim?"
  // self-test: for each impressive-sounding brain-health claim, predict whether a randomised trial
  // confirmed it or found no benefit, then check. The payoff is the evidence-literacy lesson of the
  // chapter — the vascular lever (BP control) holds up in trials, while the diet pattern and the
  // supplements do not. Data-driven from a YAML manifest; shares the card/chip/colour language of the
  // other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const VERDICTS = {
    confirmed: { label: 'Confirmed by the trial', color: '#08503f' },
    null: { label: 'No benefit (null)', color: '#b0471d' },
  };

  const FALLBACK = {
    id: 'trial-check',
    title: 'Did the trial confirm the claim?',
    claims: [
      { claim: 'Cohort studies linked the MIND diet to about half the risk of Alzheimer’s. Did the prevention trial confirm a benefit?', verdict: 'null', why: 'The 3-year MIND randomised trial found no cognitive benefit over an improved-eating control. The impressive cohort number did not survive the trial.' },
      { claim: 'Intensively lowering blood pressure — did the trial reduce cognitive impairment?', verdict: 'confirmed', why: 'SPRINT MIND: intensive BP control reduced mild cognitive impairment and the mild-impairment-or-dementia measure. The vascular lever is the one that holds up.' },
      { claim: 'Ginkgo biloba “brain tonic” — did the large trial reduce dementia?', verdict: 'null', why: 'The GEM trial found ginkgo did not reduce dementia at all, and it can increase bleeding risk.' },
    ],
  };

  let data = $state(null);
  let error = $state(null);
  let picks = $state({});

  let claims = $derived(data ? data.claims || [] : []);
  let answered = $derived(Object.keys(picks).length);
  let correct = $derived(
    Object.entries(picks).filter(([i, c]) => claims[i] && claims[i].verdict === c).length
  );

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.claims) || !parsed.claims.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('trial-check:' + data.id);
    if (saved && saved.picks && typeof saved.picks === 'object') {
      const clean = {};
      for (const k of Object.keys(saved.picks)) {
        const i = Number(k);
        const v = saved.picks[k];
        if (Number.isInteger(i) && i >= 0 && i < data.claims.length && (v === 'confirmed' || v === 'null')) clean[i] = v;
      }
      picks = clean;
    }
  });

  $effect(() => {
    if (!data) return;
    save('trial-check:' + data.id, { picks });
  });

  function choose(i, choice) {
    picks = { ...picks, [i]: choice };
  }
  function reset() { picks = {}; }
</script>

{#if !data}
  <div class="tc card"><p>Loading…</p></div>
{:else}
  <figure class="tc card">
    <figcaption class="head">
      <strong>{data.title || 'Did the trial confirm the claim?'}</strong>
      <span class="hint">Predict for each, then check</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="legend" aria-hidden="true">
      {#each Object.entries(VERDICTS) as [k, v]}
        <span class="lchip"><span class="dot" style="background:{v.color}"></span>{v.label}</span>
      {/each}
    </div>

    <ul class="grid" role="list">
      {#each claims as s, i}
        {@const pick = picks[i]}
        {@const done = pick === 'confirmed' || pick === 'null'}
        {@const right = done && pick === s.verdict}
        {@const vinfo = VERDICTS[s.verdict] || VERDICTS.confirmed}
        <li class="clm" class:done>
          <p class="pt" id={`tc-pt-${i}`}>{s.claim}</p>
          <div class="choices" role="group" aria-labelledby={`tc-pt-${i}`}>
            <button type="button" class="ch" class:sel={pick === 'confirmed'}
              class:good={pick === 'confirmed' && s.verdict === 'confirmed'}
              class:bad={pick === 'confirmed' && s.verdict !== 'confirmed'}
              aria-pressed={pick === 'confirmed'} onclick={() => choose(i, 'confirmed')}>Confirmed</button>
            <button type="button" class="ch" class:sel={pick === 'null'}
              class:good={pick === 'null' && s.verdict === 'null'}
              class:bad={pick === 'null' && s.verdict !== 'null'}
              aria-pressed={pick === 'null'} onclick={() => choose(i, 'null')}>Null</button>
          </div>
          {#if done}
            <div class="why" style="--vc:{vinfo.color}" aria-live="polite">
              <span class="badge" style="background:{vinfo.color}">{right ? 'Correct' : 'Actually:'} {vinfo.label}</span>
              <span class="wtext">{s.why}</span>
            </div>
          {/if}
        </li>
      {/each}
    </ul>

    <div class="controls">
      <button type="button" class="txt" onclick={reset} disabled={answered === 0}>Reset</button>
      <span class="pos">{correct} / {claims.length} right{answered < claims.length ? ` (${answered} answered)` : ''}</span>
    </div>
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .tc {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .tc.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .tc .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .tc .hint { font-size:.78rem; color:var(--muted); }
  .tc .intro { font-size:.92rem; margin:0 0 12px; }
  .tc button { font:inherit; cursor:pointer; }

  .tc .legend { display:flex; flex-wrap:wrap; gap:6px 14px; margin-bottom:12px; }
  .tc .lchip { font-size:.74rem; color:var(--muted); display:inline-flex; align-items:center; gap:5px; }
  .tc .dot { width:10px; height:10px; border-radius:50%; flex:none; }

  /* Explicit single column: Quarto/Bootstrap ship a global `.grid` utility
     (grid-template-columns: repeat(12, 1fr)) that otherwise leaks in and lays the
     claims out in one overflowing horizontal row. minmax(0,1fr) also lets the
     column shrink so content never forces horizontal overflow. */
  .tc .grid { list-style:none; margin:0; padding:0; display:grid; grid-template-columns:minmax(0,1fr); gap:10px; }
  .tc .clm { border:1px solid var(--line); border-radius:8px; padding:10px 14px; }
  .tc .clm.done { background:#fbfcfc; }
  .tc .pt { margin:0 0 8px; font-size:.92rem; }
  .tc .choices { display:flex; gap:8px; }
  .tc .ch { padding:5px 16px; border:1px solid var(--line); border-radius:99px; background:#fff; color:var(--ink); font-size:.85rem; font-weight:600; }
  .tc .ch:hover { border-color:var(--brand-ink); }
  .tc .ch.sel { box-shadow:0 0 0 2px var(--focus) inset; }
  .tc .ch.good { background:color-mix(in srgb, #08503f 12%, #fff); border-color:#08503f; color:#08503f; }
  .tc .ch.bad { background:color-mix(in srgb, #b0471d 12%, #fff); border-color:#b0471d; color:#b0471d; }

  .tc .why { margin-top:9px; border-left:4px solid var(--vc); padding:6px 12px; background:color-mix(in srgb, var(--vc) 6%, #fff); border-radius:0 6px 6px 0; }
  .tc .badge { display:inline-block; padding:2px 12px; border-radius:99px; color:#fff; font-weight:700; font-size:.76rem; margin-right:8px; }
  .tc .wtext { font-size:.9rem; }

  .tc .controls { display:flex; align-items:center; gap:12px; margin:14px 0 0; }
  .tc .txt { border:none; background:none; color:var(--brand-ink); font-size:.82rem; text-decoration:underline; padding:2px; }
  .tc .txt:disabled { color:var(--muted); text-decoration:none; cursor:default; }
  .tc .pos { margin-left:auto; font-size:.78rem; color:var(--muted); font-variant-numeric:tabular-nums; }

  .tc .credit { color:var(--muted); font-size:.72rem; margin:10px 0 0; }
  .tc :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .tc * { transition:none !important; } }
</style>
