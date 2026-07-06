<script>
  // AdviseRefer — the Interprofessional Practice & Referral teaching island. A "the line" self-test: for
  // each patient, decide whether it is universal advice you can give (in scope) or individualised therapy
  // for a condition that belongs to a registered dietitian (refer). Pick Advise or Refer, then see whether
  // your call was right and why. The payoff is the advise-vs-MNT boundary made concrete across cases that
  // look superficially similar. Data-driven from a YAML manifest; shares the card/chip/colour language of
  // the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const VERDICTS = {
    advise: { label: 'Advise — in scope', color: '#08503f' },
    refer: { label: 'Refer to a dietitian', color: '#b0471d' },
  };

  const FALLBACK = {
    id: 'advise-refer',
    title: 'The line: advise or refer?',
    scenarios: [
      { patient: 'A well 34-year-old asks how to eat more healthily in general.', verdict: 'advise', why: 'Universal guidance — My Healthy Plate, more vegetables, fewer sugary drinks — is safe for almost anyone and is your job.' },
      { patient: 'Newly diagnosed type 2 diabetes with early kidney impairment, on three medicines, HbA1c 9%.', verdict: 'refer', why: 'Complexity (diabetes + early CKD + polypharmacy) needs an individualised carbohydrate/renal plan — that is medical nutrition therapy, a dietitian’s work.' },
      { patient: 'Someone asks whether they should cut down on sugary drinks.', verdict: 'advise', why: 'A universal message you can and should give; point them to Nutri-Grade A/B choices.' },
      { patient: 'A patient losing weight without trying and eating very little.', verdict: 'refer', why: 'Unintended weight loss / malnutrition risk is a referral trigger — screen, then hand to the dietitian.' },
    ],
  };

  let data = $state(null);
  let error = $state(null);
  let picks = $state({});

  let scenarios = $derived(data ? data.scenarios || [] : []);
  let answered = $derived(Object.keys(picks).length);
  let correct = $derived(
    Object.entries(picks).filter(([i, c]) => scenarios[i] && scenarios[i].verdict === c).length
  );

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.scenarios) || !parsed.scenarios.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('advise-refer:' + data.id);
    if (saved && saved.picks && typeof saved.picks === 'object') {
      const clean = {};
      for (const k of Object.keys(saved.picks)) {
        const i = Number(k);
        const v = saved.picks[k];
        if (Number.isInteger(i) && i >= 0 && i < data.scenarios.length && (v === 'advise' || v === 'refer')) clean[i] = v;
      }
      picks = clean;
    }
  });

  $effect(() => {
    if (!data) return;
    save('advise-refer:' + data.id, { picks });
  });

  function choose(i, choice) {
    picks = { ...picks, [i]: choice };
  }
  function reset() { picks = {}; }
</script>

{#if !data}
  <div class="ar card"><p>Loading…</p></div>
{:else}
  <figure class="ar card">
    <figcaption class="head">
      <strong>{data.title || 'The line: advise or refer?'}</strong>
      <span class="hint">Decide for each patient, then check your call</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="legend" aria-hidden="true">
      {#each Object.entries(VERDICTS) as [k, v]}
        <span class="lchip"><span class="dot" style="background:{v.color}"></span>{v.label}</span>
      {/each}
    </div>

    <ul class="grid" role="list">
      {#each scenarios as s, i}
        {@const pick = picks[i]}
        {@const done = pick === 'advise' || pick === 'refer'}
        {@const right = done && pick === s.verdict}
        {@const vinfo = VERDICTS[s.verdict] || VERDICTS.advise}
        <li class="scn" class:done>
          <p class="pt" id={`ar-pt-${i}`}>{s.patient}</p>
          <div class="choices" role="group" aria-labelledby={`ar-pt-${i}`}>
            <button type="button" class="ch" class:sel={pick === 'advise'}
              class:good={pick === 'advise' && s.verdict === 'advise'}
              class:bad={pick === 'advise' && s.verdict !== 'advise'}
              aria-pressed={pick === 'advise'} onclick={() => choose(i, 'advise')}>Advise</button>
            <button type="button" class="ch" class:sel={pick === 'refer'}
              class:good={pick === 'refer' && s.verdict === 'refer'}
              class:bad={pick === 'refer' && s.verdict !== 'refer'}
              aria-pressed={pick === 'refer'} onclick={() => choose(i, 'refer')}>Refer</button>
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
      <span class="pos">{correct} / {scenarios.length} right{answered < scenarios.length ? ` (${answered} answered)` : ''}</span>
    </div>
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .ar {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .ar.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .ar .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .ar .hint { font-size:.78rem; color:var(--muted); }
  .ar .intro { font-size:.92rem; margin:0 0 12px; }
  .ar button { font:inherit; cursor:pointer; }

  .ar .legend { display:flex; flex-wrap:wrap; gap:6px 14px; margin-bottom:12px; }
  .ar .lchip { font-size:.74rem; color:var(--muted); display:inline-flex; align-items:center; gap:5px; }
  .ar .dot { width:10px; height:10px; border-radius:50%; flex:none; }

  .ar .grid { list-style:none; margin:0; padding:0; display:grid; gap:10px; }
  .ar .scn { border:1px solid var(--line); border-radius:8px; padding:10px 14px; }
  .ar .scn.done { background:#fbfcfc; }
  .ar .pt { margin:0 0 8px; font-size:.92rem; }
  .ar .choices { display:flex; gap:8px; }
  .ar .ch { padding:5px 16px; border:1px solid var(--line); border-radius:99px; background:#fff; color:var(--ink); font-size:.85rem; font-weight:600; }
  .ar .ch:hover { border-color:var(--brand-ink); }
  .ar .ch.sel { box-shadow:0 0 0 2px var(--focus) inset; }
  .ar .ch.good { background:color-mix(in srgb, #08503f 12%, #fff); border-color:#08503f; color:#08503f; }
  .ar .ch.bad { background:color-mix(in srgb, #b0471d 12%, #fff); border-color:#b0471d; color:#b0471d; }

  .ar .why { margin-top:9px; border-left:4px solid var(--vc); padding:6px 12px; background:color-mix(in srgb, var(--vc) 6%, #fff); border-radius:0 6px 6px 0; }
  .ar .badge { display:inline-block; padding:2px 12px; border-radius:99px; color:#fff; font-weight:700; font-size:.76rem; margin-right:8px; }
  .ar .wtext { font-size:.9rem; }

  .ar .controls { display:flex; align-items:center; gap:12px; margin:14px 0 0; }
  .ar .txt { border:none; background:none; color:var(--brand-ink); font-size:.82rem; text-decoration:underline; padding:2px; }
  .ar .txt:disabled { color:var(--muted); text-decoration:none; cursor:default; }
  .ar .pos { margin-left:auto; font-size:.78rem; color:var(--muted); font-variant-numeric:tabular-nums; }

  .ar .credit { color:var(--muted); font-size:.72rem; margin:10px 0 0; }
  .ar :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .ar * { transition:none !important; } }
</style>
