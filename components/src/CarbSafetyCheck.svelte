<script>
  // CarbSafetyCheck — the Type 2 Diabetes chapter's "Is it safe to endorse a lower-carbohydrate diet?"
  // decision widget. It drills the do-no-harm reflex of the chapter's "Safety first" section: DRUG CLASS
  // FIRST. The learner toggles the glucose-lowering drugs a patient is on, grouped by hypoglycaemia risk.
  // The live verdict follows one rule — if ANY high-risk class (insulin, sulfonylurea, meglitinide) is
  // selected, refer to the diabetes team to review medication BEFORE cutting carbohydrate (a warning
  // verdict); if only low-risk classes (or none) are selected, a sensible lower-carbohydrate change is
  // reasonable — still refer to a dietitian. Data-driven, keyboard-operable, aria-live verdict. Shares the
  // card/chip/colour language of the other islands (brand green = safe, warn orange = refer-first).
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'carb-safety-check',
    title: 'Is it safe to endorse a lower-carbohydrate diet?',
    intro:
      "Cutting or skipping carbohydrate is only safe once you know the patient's medication. Select the glucose-lowering drugs this patient is on. The reflex is drug-class-first: some classes can cause dangerous hypoglycaemia when carbohydrate suddenly drops.",
    drugs: [
      { id: 'insulin', label: 'Insulin', example: 'any insulin', risk: 'high', note: "The dose is set for the patient's usual carbohydrate intake — cut the carbohydrate and the same dose can drive glucose dangerously low. On a fixed dose, counsel carbohydrate consistency, not restriction." },
      { id: 'sulfonylurea', label: 'Sulfonylurea', example: 'gliclazide, glipizide', risk: 'high', note: 'Drives insulin release regardless of glucose, so it can cause hypoglycaemia — especially in older people — when carbohydrate is cut.' },
      { id: 'meglitinide', label: 'Meglitinide', example: 'repaglinide', risk: 'high', note: 'A short-acting insulin secretagogue taken with meals — skipping the carbohydrate but taking the dose risks a hypo.' },
      { id: 'metformin', label: 'Metformin', example: 'first-line', risk: 'low', note: 'Does not cause hypoglycaemia on its own — safe alongside a sensible carbohydrate change.' },
      { id: 'dpp4', label: 'DPP-4 inhibitor', example: 'sitagliptin, linagliptin', risk: 'low', note: 'Glucose-dependent action — no hypoglycaemia used alone.' },
      { id: 'sglt2', label: 'SGLT2 inhibitor', example: 'empagliflozin, dapagliflozin', risk: 'low', note: 'Does not cause hypoglycaemia used alone (mind fluid/ketone advice separately).' },
      { id: 'glp1', label: 'GLP-1 receptor agonist', example: 'semaglutide, liraglutide', risk: 'low', note: 'Glucose-dependent — no hypoglycaemia used alone.' },
    ],
    verdicts: {
      refer: {
        label: 'Refer to the diabetes team first',
        text: 'Refer to the diabetes team to review medication FIRST — cutting carbohydrate here risks hypoglycaemia. Recognise the risk and refer before the diet changes, not after.',
      },
      safe: {
        label: 'Reasonable to endorse a sensible change',
        text: 'Reasonable to endorse a sensible lower-carbohydrate change — still refer to a dietitian for the individualised plan.',
      },
    },
    prompt: 'Select the patient’s glucose-lowering medications to see the verdict.',
    caption:
      'Drug class first, every time. Insulin, sulfonylureas and meglitinides can cause hypoglycaemia when carbohydrate is cut — those patients need a medication review by the diabetes team before any low-carb plan or fast. The rest are reasonable used alone, but still refer to a dietitian for the individualised plan.',
    credit: 'Drug-class hypoglycaemia risk after ADA Standards of Care 2026 and ACE/AACE guidance.',
  };

  let data = $state(null);
  let error = $state(null);
  let selected = $state({}); // id -> true when the drug is toggled on

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.drugs) || !parsed.drugs.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('carb-safety-check:' + data.id);
    if (saved && saved.selected && typeof saved.selected === 'object') {
      const next = {};
      for (const d of data.drugs) if (saved.selected[d.id]) next[d.id] = true;
      selected = next;
    }
  });

  let drugs = $derived(data ? data.drugs : []);
  let highDrugs = $derived(drugs.filter((d) => d.risk === 'high'));
  let lowDrugs = $derived(drugs.filter((d) => d.risk !== 'high'));

  let chosen = $derived(drugs.filter((d) => selected[d.id]));
  let anyChosen = $derived(chosen.length > 0);
  // The rule: ANY selected high-risk drug flips the verdict to refer-first.
  let hasHighRisk = $derived(chosen.some((d) => d.risk === 'high'));

  let verdicts = $derived((data && data.verdicts) || FALLBACK.verdicts);
  let verdict = $derived.by(() => {
    const v = verdicts;
    return hasHighRisk ? { kind: 'refer', ...(v.refer || FALLBACK.verdicts.refer) }
                       : { kind: 'safe', ...(v.safe || FALLBACK.verdicts.safe) };
  });
  // Which selected high-risk classes triggered the warning (named back to the learner).
  let triggers = $derived(chosen.filter((d) => d.risk === 'high').map((d) => d.label));

  function toggle(id) {
    const next = { ...selected };
    if (next[id]) delete next[id]; else next[id] = true;
    selected = next;
    if (data) save('carb-safety-check:' + data.id, { selected });
  }
  const keyToggle = (e, id) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(id); } };
  function reset() {
    selected = {};
    if (data) save('carb-safety-check:' + data.id, { selected });
  }
</script>

{#if !data}
  <div class="cs card"><p>Loading…</p></div>
{:else}
  <figure class="cs card">
    <figcaption class="head">
      <strong>{data.title || 'Is it safe to endorse a lower-carbohydrate diet?'}</strong>
      <span class="hint">Pick the patient's drugs · drug class first</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="groups">
      <fieldset class="group high">
        <legend><span class="tag warn">Can cause hypoglycaemia</span> high-risk classes</legend>
        <div class="chips" role="group" aria-label="High-risk (hypoglycaemia) glucose-lowering drugs">
          {#each highDrugs as d}
            <button type="button" class="chip risk-high" class:on={!!selected[d.id]}
                    role="checkbox" aria-checked={!!selected[d.id]}
                    aria-label={`${d.label}${d.example ? ' (' + d.example + ')' : ''} — high hypoglycaemia risk. ${selected[d.id] ? 'Selected' : 'Not selected'}. Activate to toggle.`}
                    onclick={() => toggle(d.id)} onkeydown={(e) => keyToggle(e, d.id)}>
              <span class="box" aria-hidden="true">{selected[d.id] ? '✓' : ''}</span>
              <span class="lbl">{d.label}</span>
              {#if d.example}<span class="ex">{d.example}</span>{/if}
            </button>
          {/each}
        </div>
      </fieldset>

      <fieldset class="group low">
        <legend><span class="tag ok">No hypo used alone</span> low-risk classes</legend>
        <div class="chips" role="group" aria-label="Low-risk glucose-lowering drugs">
          {#each lowDrugs as d}
            <button type="button" class="chip risk-low" class:on={!!selected[d.id]}
                    role="checkbox" aria-checked={!!selected[d.id]}
                    aria-label={`${d.label}${d.example ? ' (' + d.example + ')' : ''} — low hypoglycaemia risk used alone. ${selected[d.id] ? 'Selected' : 'Not selected'}. Activate to toggle.`}
                    onclick={() => toggle(d.id)} onkeydown={(e) => keyToggle(e, d.id)}>
              <span class="box" aria-hidden="true">{selected[d.id] ? '✓' : ''}</span>
              <span class="lbl">{d.label}</span>
              {#if d.example}<span class="ex">{d.example}</span>{/if}
            </button>
          {/each}
        </div>
      </fieldset>
    </div>

    <!-- live verdict -->
    <div class="verdict verdict-{verdict.kind}" aria-live="polite">
      <div class="vhead">
        <span class="vicon" aria-hidden="true">{verdict.kind === 'refer' ? '⚠' : '✓'}</span>
        <span class="vlabel">{verdict.label}</span>
        {#if anyChosen}<button type="button" class="reset" onclick={reset}>Reset</button>{/if}
      </div>
      <p class="vtext">{verdict.text}</p>
      {#if verdict.kind === 'refer' && triggers.length}
        <p class="why">Triggered by: <b>{triggers.join(', ')}</b> — {triggers.length > 1 ? 'these classes' : 'this class'} can cause hypoglycaemia.</p>
      {/if}
    </div>

    <!-- per-drug notes for the chosen drugs -->
    {#if chosen.length}
      <ul class="notes">
        {#each chosen as d}
          <li class:high={d.risk === 'high'}>
            <b>{d.label}</b>{d.example ? ' (' + d.example + ')' : ''}{d.note ? ' — ' + d.note : ''}
          </li>
        {/each}
      </ul>
    {:else}
      <p class="prompt">{data.prompt || 'Select the patient’s glucose-lowering medications to see the verdict.'}</p>
    {/if}

    {#if data.caption}<p class="caption">{data.caption}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .cs {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0; --warn:#b0471d; --warn-bg:#fdf2ec;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .cs.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:720px; }
  .cs .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .cs .hint { font-size:.78rem; color:var(--muted); }
  .cs .intro { font-size:.92rem; margin:0 0 12px; }
  .cs button { font:inherit; cursor:pointer; }

  .cs .groups { display:grid; gap:12px; }
  .cs .group { border:1px solid var(--line); border-radius:8px; padding:8px 12px 12px; margin:0; min-inline-size:0; }
  .cs .group.high { border-color:#e6c3b2; background:#fdfaf8; }
  .cs .group.low { border-color:#c9ddd6; background:#fafcfb; }
  .cs legend { font-size:.8rem; color:var(--muted); padding:0 6px; }
  .cs .tag { display:inline-block; font-size:.68rem; font-weight:700; text-transform:uppercase; letter-spacing:.03em; border-radius:5px; padding:1px 6px; margin-right:6px; }
  .cs .tag.warn { color:var(--warn); background:var(--warn-bg); border:1px solid #e6c3b2; }
  .cs .tag.ok { color:var(--brand-ink); background:var(--brand-bg); border:1px solid #c9ddd6; }

  .cs .chips { display:flex; flex-wrap:wrap; gap:8px; }
  .cs .chip { display:inline-flex; align-items:center; gap:8px; padding:7px 12px; border:1px solid var(--line); border-radius:8px; background:#fff; color:var(--ink); text-align:left; }
  .cs .chip .box { width:16px; height:16px; flex:none; border:2px solid var(--muted); border-radius:4px; display:inline-flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; line-height:1; }
  .cs .chip .lbl { font-size:.86rem; font-weight:600; }
  .cs .chip .ex { font-size:.72rem; color:var(--muted); }
  .cs .chip:hover { border-color:var(--muted); }

  .cs .chip.risk-high:hover { border-color:var(--warn); }
  .cs .chip.risk-high.on { border-color:var(--warn); border-width:2px; padding:6px 11px; background:var(--warn-bg); }
  .cs .chip.risk-high.on .box { background:var(--warn); border-color:var(--warn); color:#fff; }
  .cs .chip.risk-high.on .lbl { color:var(--warn); }

  .cs .chip.risk-low:hover { border-color:var(--brand-ink); }
  .cs .chip.risk-low.on { border-color:var(--brand-ink); border-width:2px; padding:6px 11px; background:var(--brand-bg); }
  .cs .chip.risk-low.on .box { background:var(--brand-ink); border-color:var(--brand-ink); color:#fff; }
  .cs .chip.risk-low.on .lbl { color:var(--brand-ink); }

  .cs .verdict { margin-top:14px; border:1px solid var(--line); border-left-width:4px; border-radius:8px; padding:12px 14px; transition:border-color .2s, background .2s; }
  .cs .verdict-safe { border-left-color:var(--brand-ink); background:var(--brand-bg); }
  .cs .verdict-refer { border-left-color:var(--warn); background:var(--warn-bg); }
  .cs .vhead { display:flex; align-items:center; gap:10px; }
  .cs .vicon { font-size:1.15rem; font-weight:800; line-height:1; }
  .cs .verdict-safe .vicon, .cs .verdict-safe .vlabel { color:var(--brand-ink); }
  .cs .verdict-refer .vicon, .cs .verdict-refer .vlabel { color:var(--warn); }
  .cs .vlabel { font-weight:800; font-size:.98rem; }
  .cs .vtext { margin:6px 0 0; font-size:.9rem; }
  .cs .why { margin:6px 0 0; font-size:.82rem; color:var(--warn); }
  .cs .reset { margin-left:auto; background:none; border:1px solid var(--line); border-radius:6px; padding:3px 10px; font-size:.78rem; color:var(--muted); }
  .cs .reset:hover { border-color:var(--ink); color:var(--ink); }

  .cs .notes { list-style:none; margin:12px 0 0; padding:0; display:grid; gap:6px; }
  .cs .notes li { font-size:.86rem; border-left:3px solid var(--brand-ink); padding:4px 0 4px 10px; }
  .cs .notes li.high { border-left-color:var(--warn); }
  .cs .prompt { margin:12px 2px 0; font-size:.9rem; color:var(--muted); }

  .cs .caption { margin:12px 2px 0; font-size:.88rem; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .cs .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }

  .cs :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:6px; }
  @media (prefers-reduced-motion: reduce) { .cs * { transition:none !important; } }
  @media (max-width:520px) { .cs.card { padding:14px; } }
</style>
