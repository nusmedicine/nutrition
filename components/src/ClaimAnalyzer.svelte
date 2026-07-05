<script>
  // ClaimAnalyzer — the Chapter 12 (Evidence vs Hype) teaching island. An interactive "appraisal
  // funnel": pick a real nutrition claim, then step it down the same four questions — find the study,
  // judge the design, read the outcome, check who it applies to — and reach a proportionate verdict
  // (proven / plausible / weak / disproven / retracted / harmful). Teaches genuine appraisal-to-a-
  // verdict, not red-flag spotting, and shows how differently claims fall out. Data-driven from a YAML
  // manifest; shares the card/stepper/colour language of the other islands.
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'claim-analyzer',
    title: 'Run the appraisal funnel',
    steps: [
      { id: 'study', label: 'Find the study', q: 'What evidence sits behind the headline?' },
      { id: 'design', label: 'Judge the design', q: 'Where on the hierarchy?' },
      { id: 'outcome', label: 'Read the outcome', q: 'What did it measure?' },
      { id: 'apply', label: 'Check it applies', q: 'Who was studied?' },
    ],
    verdicts: { weak: { label: 'Weak', color: '#e0a13a' } },
    claims: [{ id: 'x', label: 'A claim', study: '', design: '', outcome: '', apply: '', verdict: 'weak', verdictText: '' }],
  };

  let data = $state(null);
  let error = $state(null);
  let claimId = $state(null);
  let step = $state(1);

  let steps = $derived(data ? data.steps || [] : []);
  let claims = $derived(data ? data.claims || [] : []);
  let verdicts = $derived(data ? data.verdicts || {} : {});
  let claim = $derived(claims.find((c) => c.id === claimId) || null);
  let stepCount = $derived(steps.length + 1); // +1 = verdict
  let verdictShown = $derived(step > steps.length);
  let visibleSteps = $derived(steps.slice(0, Math.min(step, steps.length)));
  let verdictInfo = $derived(claim && verdicts[claim.verdict] ? verdicts[claim.verdict] : { label: '—', color: '#7a8791' });

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
    const saved = load('claim-analyzer:' + data.id);
    if (saved && saved.claimId && data.claims.some((c) => c.id === saved.claimId)) {
      claimId = saved.claimId;
      if (Number.isFinite(saved.step)) step = Math.min(Math.max(1, saved.step), data.steps.length + 1);
    } else {
      claimId = data.claims[0].id;
    }
  });

  $effect(() => {
    if (!data || !claimId) return;
    save('claim-analyzer:' + data.id, { claimId, step });
  });

  function pickClaim(id) {
    claimId = id;
    step = 1;
  }
  function setStep(n) { step = Math.min(Math.max(1, n), stepCount); }
</script>

{#if !data || !claimId}
  <div class="ca card"><p>Loading…</p></div>
{:else}
  <figure class="ca card">
    <figcaption class="head">
      <strong>{data.title || 'Run the appraisal funnel'}</strong>
      <span class="hint">Pick a claim, then step it down the funnel</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="claims" role="group" aria-label="Claims">
      {#each claims as c}
        <button type="button" class="chip" class:on={c.id === claimId} onclick={() => pickClaim(c.id)} aria-pressed={c.id === claimId}>{c.label}</button>
      {/each}
    </div>

    <div class="controls">
      <button type="button" onclick={() => setStep(step - 1)} disabled={step <= 1} aria-label="Back a step">‹</button>
      <span class="stepno">{verdictShown ? 'Verdict' : `Step ${step} of ${steps.length}`}</span>
      <button type="button" onclick={() => setStep(step + 1)} disabled={step >= stepCount} aria-label="Next step">›</button>
    </div>

    {#if claim}
      <ol class="funnel">
        {#each visibleSteps as s, i}
          <li class="frow" style="--w:{100 - i * 7}%">
            <div class="flabel"><span class="fnum">{i + 1}</span>{s.label}</div>
            <p class="fq">{s.q}</p>
            <p class="fa">{claim[s.id]}</p>
          </li>
        {/each}
      </ol>

      {#if verdictShown}
        <div class="verdict" style="--c:{verdictInfo.color}" aria-live="polite">
          <span class="badge" style="background:{verdictInfo.color}">{verdictInfo.label}</span>
          <p class="vtext">{claim.verdictText}</p>
        </div>
      {:else}
        <p class="prompt">Keep going to reach a verdict — then try another claim and watch where it lands.</p>
      {/if}
    {/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .ca {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .ca.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:760px; }
  .ca .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:12px; }
  .ca .hint { font-size:.78rem; color:var(--muted); }
  .ca .intro { font-size:.92rem; margin:0 0 14px; }
  .ca button { font:inherit; cursor:pointer; }

  .ca .claims { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px; }
  .ca .chip { padding:5px 11px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); font-size:.8rem; }
  .ca .chip:hover { border-color:var(--brand-ink); }
  .ca .chip.on { border-color:var(--brand-ink); border-width:2px; padding:4px 10px; background:var(--brand-bg); color:var(--brand-ink); font-weight:600; }

  .ca .controls { display:flex; align-items:center; gap:10px; margin-bottom:10px; }
  .ca .controls button { width:32px; height:32px; border:1px solid var(--line); border-radius:8px; background:#fff; font-size:1.2rem; line-height:1; color:var(--brand-ink); }
  .ca .controls button:hover:not(:disabled) { background:var(--brand-bg); border-color:var(--brand-ink); }
  .ca .controls button:disabled { opacity:.4; cursor:default; }
  .ca .stepno { font-size:.9rem; font-weight:600; color:var(--brand-ink); }

  .ca .funnel { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; align-items:center; gap:8px; }
  .ca .frow { width:var(--w); min-width:280px; border:1px solid var(--line); border-radius:8px; padding:9px 14px; background:#fbfdfc; }
  .ca .flabel { font-size:.86rem; font-weight:700; color:var(--brand-ink); display:flex; align-items:center; gap:8px; }
  .ca .fnum { display:inline-flex; align-items:center; justify-content:center; width:19px; height:19px; border-radius:50%; background:var(--brand-ink); color:#fff; font-size:.72rem; font-weight:700; }
  .ca .fq { margin:3px 0 4px; font-size:.78rem; color:var(--muted); font-style:italic; }
  .ca .fa { margin:0; font-size:.9rem; }

  .ca .verdict { margin-top:12px; border:1px solid var(--c); border-left-width:5px; border-radius:8px; padding:11px 15px; background:color-mix(in srgb, var(--c) 7%, #fff); }
  .ca .badge { display:inline-block; padding:2px 12px; border-radius:99px; color:#fff; font-weight:700; font-size:.82rem; margin-bottom:6px; }
  .ca .vtext { margin:0; font-size:.92rem; }
  .ca .prompt { margin:10px 2px 0; font-size:.84rem; color:var(--muted); }

  .ca .credit { color:var(--muted); font-size:.72rem; margin:12px 0 0; }
  .ca :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .ca * { transition:none !important; } }
  @media (max-width:520px) { .ca .frow { width:100% !important; min-width:0; } }
</style>
