<script>
  // RenalFlip — the Chronic Kidney Disease chapter's "advice that flips in CKD" widget for the
  // "Potassium: when 'eat more' reverses" section. It teaches the chapter's signature insight: several
  // pieces of standard healthy-eating advice are good for the general public but REVERSE once the kidney
  // can no longer clear a potassium load. The learner toggles the "patient" between a healthy adult and
  // someone with advanced CKD / on dialysis, and every card's verdict flips — good (green ✓) → caution
  // (amber ⚠) or absolute-avoid (red ⛔) — with a one-line why. One card ("cut back on added salt") is a
  // deliberate control that does NOT flip, so the lesson isn't "everything reverses." A two-button toggle
  // (aria-pressed), an aria-live context line, and per-card verdicts. Shares the card/chip/colour language
  // of the other islands (brand green = fine, warn amber = caution, danger red = avoid).
  import { onMount } from 'svelte';
  import { load, save } from './lib/store.js';
  import { loadManifest } from './lib/manifest.js';

  let { src } = $props();

  const FALLBACK = {
    id: 'renal-flip',
    title: 'The advice that flips in CKD',
    intro:
      "Standard healthy-eating advice can reverse once the kidney can no longer clear a potassium load. Switch the patient and watch each verdict flip — except the one lever that doesn't.",
    contexts: [
      { id: 'healthy', label: 'A healthy adult', short: 'a healthy adult' },
      { id: 'ckd', label: 'Advanced CKD / on dialysis', short: 'someone with advanced CKD' },
    ],
    items: [
      {
        id: 'potassium',
        advice: 'Eat more potassium-rich fruit & veg',
        example: 'bananas, oranges, leafy greens',
        verdicts: {
          healthy: { kind: 'good', badge: 'Protective', why: 'More potassium helps lower blood pressure — the WHO advises the public to eat more of it.' },
          ckd: { kind: 'caution', badge: 'Hazard', why: 'The failing kidney can’t clear a potassium load, risking hyperkalaemia. Individualised to blood levels by a dietitian, not eaten freely — and the WHO advice explicitly excludes CKD.' },
        },
      },
      {
        id: 'salt-substitute',
        advice: "Switch to a low-sodium 'potassium salt' substitute",
        example: 'potassium-chloride salt swaps',
        verdicts: {
          healthy: { kind: 'good', badge: 'Reasonable', why: 'A genuine way to cut sodium — in a large trial it cut strokes and deaths.' },
          ckd: { kind: 'avoid', badge: 'Dangerous', why: 'That trial excluded serious kidney disease and potassium-raising drugs; the potassium-chloride swap can precipitate life-threatening hyperkalaemia. Check first — if unsure, don’t.' },
        },
      },
      {
        id: 'dash',
        advice: 'Follow the DASH pattern',
        example: 'lots of fruit, veg, low-fat dairy',
        verdicts: {
          healthy: { kind: 'good', badge: 'First-line', why: 'A pattern designed to lower blood pressure — endorsed for the general public.' },
          ckd: { kind: 'caution', badge: 'Adapt', why: 'DASH is deliberately loaded with potassium, which can be unsafe in advanced CKD. A renal dietitian tailors it.' },
        },
      },
      {
        id: 'star-fruit',
        advice: 'Enjoy star fruit or belimbing (bilimbi)',
        example: 'as fruit or a cooling juice',
        verdicts: {
          healthy: { kind: 'good', badge: 'Fine', why: 'Just another fruit for most people.' },
          ckd: { kind: 'avoid', badge: 'Absolute avoid', why: 'They carry a neurotoxin the failing kidney can’t clear — causing seizures and death, not merely a high potassium load. An absolute avoid, not a portion-controlled food.' },
        },
      },
      {
        id: 'sodium',
        advice: 'Cut back on added salt / sodium',
        example: 'less soup, sauce and processed food',
        verdicts: {
          healthy: { kind: 'good', badge: 'Good advice', why: 'Lowers blood pressure — good for everyone.' },
          ckd: { kind: 'good', badge: "Still good — doesn't flip", why: 'Sodium is the one lever that does NOT reverse in CKD: it lowers blood pressure, reduces protein leak and helps kidney-protective drugs work. The lever a generalist can safely reinforce.' },
        },
      },
    ],
    prompt: 'Toggle the patient to see which advice flips — and which one holds.',
    caption:
      'For the public, "eat more potassium," a potassium salt substitute and DASH are all sound. In advanced CKD they can turn hazardous — while cutting sodium stays good throughout. Recognising the flip is the skill; the quantities are a renal dietitian’s.',
    credit: 'After WHO 2012 (potassium), Neal 2021 (SSaSS), KDOQI 2020 and NKF Singapore.',
  };

  let data = $state(null);
  let error = $state(null);
  let ctxId = $state('healthy'); // active context id

  onMount(async () => {
    try {
      if (!src) throw new Error('no src');
      const parsed = await loadManifest(src);
      if (!parsed || !Array.isArray(parsed.items) || !parsed.items.length) throw new Error('empty');
      data = parsed;
    } catch (e) {
      error = String((e && e.message) || e);
      data = FALLBACK;
    }
    const saved = load('renal-flip:' + data.id);
    if (saved && saved.ctxId && (data.contexts || FALLBACK.contexts).some((c) => c.id === saved.ctxId)) {
      ctxId = saved.ctxId;
    }
  });

  let contexts = $derived(data ? data.contexts || FALLBACK.contexts : FALLBACK.contexts);
  let items = $derived(data ? data.items : []);
  let activeCtx = $derived(contexts.find((c) => c.id === ctxId) || contexts[0]);

  // Concise screen-reader summary so the flipped verdicts (not just the context label) are
  // announced on toggle — the changing per-card badges live outside the visible cards' DOM read.
  let liveSummary = $derived.by(() => {
    if (!activeCtx || !items.length) return '';
    const parts = items.map((it) => {
      const v = (it.verdicts && it.verdicts[ctxId]) || {};
      return `${it.advice}: ${v.badge || ''}`;
    });
    return `Advice for ${activeCtx.short || activeCtx.label}. ${parts.join('. ')}.`;
  });

  // kind -> theme + icon. good = brand green; caution = amber warn; avoid = red danger.
  const kindIcon = (kind) => (kind === 'good' ? '✓' : kind === 'avoid' ? '⛔' : '⚠');

  function pick(id) {
    ctxId = id;
    if (data) save('renal-flip:' + data.id, { ctxId });
  }
</script>

{#if !data}
  <div class="rf card"><p>Loading…</p></div>
{:else}
  <figure class="rf card">
    <figcaption class="head">
      <strong>{data.title || 'The advice that flips in CKD'}</strong>
      <span class="hint">Toggle the patient · watch each verdict flip</span>
    </figcaption>
    {#if data.intro}<p class="intro">{data.intro}</p>{/if}

    <div class="toggle" role="group" aria-label="Choose the patient">
      {#each contexts as c (c.id)}
        <button type="button" class="tg" class:on={ctxId === c.id}
                aria-pressed={ctxId === c.id}
                onclick={() => pick(c.id)}>{c.label}</button>
      {/each}
    </div>

    <p class="ctxline">Advice for <strong>{activeCtx.short || activeCtx.label}</strong>:</p>
    <p class="sr-only" aria-live="polite">{liveSummary}</p>

    <ul class="cards">
      {#each items as it (it.id)}
        {@const v = (it.verdicts && it.verdicts[ctxId]) || {}}
        <li class="row kind-{v.kind || 'neutral'}">
          <span class="rbody">
            <span class="advice">{it.advice}</span>
            {#if it.example}<span class="ex">{it.example}</span>{/if}
            {#if v.why}<span class="why">{v.why}</span>{/if}
          </span>
          <span class="verdict">
            <span class="vic" aria-hidden="true">{kindIcon(v.kind)}</span>
            <span class="vbadge">{v.badge || ''}</span>
          </span>
        </li>
      {/each}
    </ul>

    {#if data.caption}<p class="caption">{data.caption}</p>{/if}
    {#if data.credit}<p class="credit">{data.credit}</p>{/if}
  </figure>
{/if}

<style>
  .rf {
    --surface:#fff; --ink:#1a2027; --muted:#5b6670; --line:#d8dee5;
    --brand-ink:#08503f; --brand-bg:#eef5f2; --focus:#1664c0;
    --warn:#b0471d; --warn-bg:#fdf2ec; --danger:#a01212; --danger-bg:#fbeaea;
    color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; margin:1.2rem 0;
  }
  .rf.card { background:var(--surface); border:1px solid var(--line); border-radius:10px; padding:16px 20px; max-width:720px; }
  .rf .head { display:flex; flex-wrap:wrap; gap:6px 12px; align-items:baseline; justify-content:space-between; border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:10px; }
  .rf .hint { font-size:.78rem; color:var(--muted); }
  .rf .intro { font-size:.92rem; margin:0 0 12px; }
  .rf button { font:inherit; cursor:pointer; }

  /* segmented context toggle */
  .rf .toggle { display:inline-flex; border:1px solid var(--line); border-radius:9px; padding:3px; gap:3px; background:#f4f6f8; max-width:100%; flex-wrap:wrap; }
  .rf .tg { flex:1 1 auto; border:0; background:transparent; color:var(--muted); border-radius:7px; padding:8px 14px; font-size:.88rem; font-weight:600; white-space:nowrap; }
  .rf .tg:hover { color:var(--ink); }
  .rf .tg.on { background:#fff; color:var(--brand-ink); box-shadow:0 1px 2px rgba(0,0,0,.12); }

  .rf .ctxline { font-size:.86rem; color:var(--muted); margin:12px 2px 8px; }
  .rf .ctxline strong { color:var(--ink); }
  .rf .sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap; border:0; }

  .rf .cards { list-style:none; margin:0; padding:0; display:grid; gap:8px; }
  .rf .row { display:flex; align-items:flex-start; gap:12px; padding:10px 14px; border:1px solid var(--line); border-left-width:4px; border-radius:8px; background:#fafbfc; transition:border-color .2s, background .2s; }
  .rf .rbody { display:flex; flex-direction:column; gap:2px; min-inline-size:0; flex:1; }
  .rf .advice { font-size:.9rem; font-weight:600; }
  .rf .ex { font-size:.74rem; color:var(--muted); }
  .rf .why { font-size:.82rem; color:var(--muted); margin-top:3px; }
  .rf .verdict { display:flex; flex-direction:column; align-items:center; gap:2px; flex:none; width:104px; text-align:center; }
  .rf .vic { font-size:1.15rem; line-height:1.1; }
  .rf .vbadge { font-size:.72rem; font-weight:800; text-transform:uppercase; letter-spacing:.02em; line-height:1.15; }

  /* per-kind accents */
  .rf .kind-good { border-left-color:var(--brand-ink); background:var(--brand-bg); }
  .rf .kind-good .vic, .rf .kind-good .vbadge { color:var(--brand-ink); }
  .rf .kind-caution { border-left-color:var(--warn); background:var(--warn-bg); }
  .rf .kind-caution .vic, .rf .kind-caution .vbadge { color:var(--warn); }
  .rf .kind-avoid { border-left-color:var(--danger); background:var(--danger-bg); }
  .rf .kind-avoid .vic, .rf .kind-avoid .vbadge { color:var(--danger); }

  .rf .caption { margin:14px 2px 0; font-size:.88rem; padding:8px 12px; background:var(--brand-bg); border-left:3px solid var(--brand-ink); border-radius:0 6px 6px 0; }
  .rf .credit { color:var(--muted); font-size:.72rem; margin:8px 0 0; }

  .rf :focus-visible { outline:3px solid var(--focus); outline-offset:2px; border-radius:7px; }
  @media (prefers-reduced-motion: reduce) { .rf * { transition:none !important; } }
  @media (max-width:520px) {
    .rf.card { padding:14px; }
    .rf .row { flex-direction:column; gap:6px; }
    .rf .verdict { flex-direction:row; width:auto; align-self:flex-start; gap:6px; }
  }
</style>
