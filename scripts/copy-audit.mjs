// Copy audit: flags patterns that make prose generic or read as machine-written, plus house-style
// slips (American spelling, "myth" framing, feedback that opens with "Right."). See AUTHOR.md §11g.
// Ported from book-microbio/scripts/copy-audit.mjs and adapted to this book's hybrid voice.
//
//   node scripts/copy-audit.mjs                 # every chapter and island data file
//   node scripts/copy-audit.mjs <file> [...]    # just these files
//   node scripts/copy-audit.mjs --summary       # per-file counts only
//   node scripts/copy-audit.mjs --you           # also list every "you" line (hybrid-voice check)
//
// A flag is a prompt to reread the sentence, not a verdict. Exits 0 always; it is a reading aid.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(dirname(fileURLToPath(import.meta.url)));
const book = join(repo, 'book');
const args = process.argv.slice(2);
const summaryOnly = args.includes('--summary');
const listYou = args.includes('--you');
const explicit = args.filter((a) => !a.startsWith('--'));

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (['_book', '.quarto', 'assets', 'figures', 'site_libs'].includes(e.name)) continue;
      walk(p, out);
    } else if (/\.(qmd|ya?ml)$/.test(e.name) && e.name !== '_quarto.yml') out.push(p);
  }
  return out;
}

const files = explicit.length ? explicit.map((f) => join(process.cwd(), f)) : walk(book);

// Front matter may name the audience; chapter prose may not (AUTHOR.md §11d).
const FRONT_MATTER = ['index.qmd', 'colophon.qmd'];

const VOCAB = [
  'delve', 'delves', 'delving', 'crucial', 'crucially', 'pivotal', 'tapestry', 'testament',
  'underscore', 'underscores', 'underscoring', 'intricate', 'intricacies', 'meticulous', 'meticulously',
  'showcase', 'showcases', 'showcasing', 'realm', 'interplay', 'robust', 'enduring', 'foster',
  'fosters', 'fostering', 'garner', 'garners', 'bolster', 'bolstered', 'enhance', 'enhances',
  'enhancing', 'leverage', 'leverages', 'leveraging', 'seamless', 'seamlessly', 'holistic',
  'multifaceted', 'paramount', 'nuanced', 'invaluable', 'game-changer', 'cutting-edge',
  'ever-evolving', 'vibrant', 'groundbreaking', 'profound', 'fascinating', 'remarkable',
  'remarkably', 'unlock', 'unlocks', 'harness', 'harnesses', 'journey', 'landscape',
];

const RULES = [
  { id: 'vocab', why: 'AI-associated vocabulary', re: new RegExp(`\\b(${VOCAB.join('|')})\\b`, 'gi') },
  { id: 'vital', why: '"vital" as importance padding', re: /\bvital\b(?!\s+signs?)/gi },
  { id: 'key-role', why: 'importance padding ("key role", "is key")', re: /\b(key|important|significant|central|critical) (role|part|factor|player)s?\b|\bis key\b|\bplays? an? (key|vital|crucial|important|central|major) role\b/gi },
  { id: 'highlight', why: '"highlight" as a verb of importance', re: /\bhighlight(s|ed|ing)? (the|how|that|its|their|why)\b/gi },
  { id: 'opener', why: 'stock sentence opener', re: /(^|[.!?:]\s+|^\s*[-*>]\s+)(Additionally|Furthermore|Moreover|Notably|Importantly|Crucially|Interestingly|Ultimately|Overall|In summary|In conclusion|In short|To summarise|To summarize)\b/g },
  { id: 'worth-noting', why: 'didactic filler', re: /\b(it is|it's) (important|worth|crucial|essential) (to note|noting|to remember|to understand)\b|\bworth noting\b|\bkeep in mind that\b/gi },
  { id: 'honest', why: 'the "honest" tic (AUTHOR.md §11g)', re: /\bhonest(ly)?\b/gi },
  { id: 'neg-parallel', why: 'negative parallelism ("not X but Y", "not just X")', re: /\bnot (just|only|merely|simply)\b|\bnot because\b[^.]{1,80}\bbut because\b|\b(it|this|that)('s| is| was) not [^.;]{1,60}[,;:—]\s*(it|this|that)('s| is| was)\b|\b(is|are|was|were) not [^.;]{1,50}, but\b/gi },
  { id: 'neg-parallel-2', why: 'negative parallelism across sentences ("…is not X. It is Y.")', re: /\b(is|are) not [^.]{1,70}\.\s+(It|They|This|That) (is|are)\b/g },
  { id: 'trailing-ing', why: 'trailing -ing "analysis" clause', re: /,\s+(highlighting|underscoring|emphasi[sz]ing|showcasing|reflecting|ensuring|fostering|enhancing|demonstrating|illustrating|signalling|signaling|cementing|solidifying|marking)\b/gi },
  { id: 'copula', why: 'avoided copula ("serves as", "stands as")', re: /\b(serves?|served|stands?|stood|functions?) as (a|an|the)\b/gi },
  { id: 'vague-attrib', why: 'vague attribution', re: /\b(experts|studies|research|researchers|scientists|many people|some people) (say|says|show|shows|suggest|suggests|agree|agrees|believe|believes|argue|argues)\b|\bit is (widely|generally|commonly) (believed|accepted|known|thought)\b/gi },
  { id: 'scaffold', why: 'rhetorical scaffolding', re: /\b(Here's|Here is the (thing|catch)|Let's|Let us|This is where|So what does|Think about it|Picture this|Imagine (a|that|you))\b|^#+\s+So\b/g },
  { id: 'meta', why: 'metacommentary about the text or the teaching', re: /\bteaching (moment|point)\b|\bthe beauty of\b|\b(the )?work of this chapter\b|\bwe will practi[sc]e\b|\bwe (turn|move) (next )?to\b|\bthis chapter\b|\bthe next chapter\b|\ba habit to unlearn\b/gi },
  { id: 'first-year', qmdOnly: true, why: '"first-year" in chapter prose (name the audience only in front matter)', re: /\bfirst[- ]year\b(?! of life)/gi },
  { id: 'chapter-num', why: 'chapter cross-referenced by number, not name', re: /\b(Chapter|Ch\.)\s?\d+\b/g },
  { id: 'myth', why: '"myth" framing (head a common belief with a neutral question)', re: /\bmyths?\b|\bbust(s|ed|ing)?\b(?!\w)/gi },
  { id: 'em-dash', why: 'em dash (limit: one or two per chapter)', re: /—|(?<=\w) -- (?=\w)/g },
  { id: 'inline-header', why: 'inline-header list item (bold label + colon or dash)', re: /^\s*([-*+]|\d+\.)\s+\*\*[^*]{1,60}(:\*\*|\*\*:|\*\*\s+—)/g },
  { id: 'arrow', qmdOnly: true, why: 'decorative arrow or box character in prose', re: /[→⇒➜➔─│┌└]/g },
  { id: 'emoji', why: 'emoji outside the 🔬🍜🍳 house-block headings', re: /(?![↔↕])\p{Extended_Pictographic}/gu },
  { id: 'us-spelling', why: 'American spelling or non-house form', re: /\b(colou?r(?<!colour)(?!\s*:)|hemoly\w*|hemato\w*|hemo(globin|rrhag)\w*|heme|non-heme|fecal|feces|fetal|fetus(es)?|esophag\w*|pediatric\w*|anemia|edema|behavior\w*|tumor\w*|fiber|(?<!")center|aging|liter|labeled|labeling|modeled|modeling|dietician|program(?!me)|whole[- ]grains?|Calories?|kJ)\b/g },
  { id: 'ize', why: '-ize spelling (house style is -ise)', re: /\b(?!(?:size|sizes|sized|sizing|prize|prizes|seize|seized|capsize|resize)\b)[a-z]{3,}(?:iz|yz)(?:e|es|ed|ing|ation|ations|er|ers)\b/gi },
  { id: 'personify', why: 'book, chapter or section as the subject of an action verb', re: /\b(this|the|next|each) (book|chapter|part|section) (asks|returns|takes|turns|uses|gives|describes|explains|shows|covers|opens|works|follows|introduces|looks|teaches|builds)\b|\*[^*]{3,60}\* chapter (asks|returns|takes|turns|uses|gives|describes|explains|shows|covers|opens|works|introduces|looks|teaches|builds)\b/gi },
  { id: 'feedback-right', why: 'feedback opening with "Right."/"Correct" (the component already says so)', re: /\b(feedback|why):\s*["']?(Right|Correct|Yes|Exactly|Great)\b[.!,]/g },
  { id: 'option-bold', why: 'bold in an MCQ option text (telegraphs the answer)', yamlOnly: true, re: /^\s*-?\s*text:\s*.*\*\*/g },
  { id: 'you', qmdOnly: true, optIn: true, why: 'second person: keep only where the reader is the clinician in practice', re: /\b(you|your|yours|yourself)\b/gi },
];

// YAML keys whose values are identifiers or enums, not prose.
const CODE_KEY = /^\s*-?\s*(id|start|next|goto|kind|type|correct|outcome|emotion|difficulty|estimatedMinutes|tags|variables|effects|options|objectivesMet|sex|age|sprite|tier|credit|x|y|if|else|key|slot|mode|src|file|image|color|colour):/;

const totals = {};
let grand = 0;

for (const f of files) {
  let text;
  try { if (!statSync(f).isFile()) continue; text = readFileSync(f, 'utf8'); } catch { continue; }
  const rel = relative(repo, f).replace(/\\/g, '/');
  const isQmd = f.endsWith('.qmd');
  const frontMatter = FRONT_MATTER.includes(basename(f));
  const lines = text.split(/\r?\n/);
  const hits = [];
  let inCode = false, inFrontYaml = false, briefIndent = -1, you = 0;
  lines.forEach((line, i) => {
    // A sim case's `brief:` block is the AI patient's prompt, not reader-facing prose.
    if (briefIndent >= 0) {
      if (!line.trim() || line.search(/\S/) > briefIndent) return;
      briefIndent = -1;
    }
    if (!isQmd && /^\s*brief:\s*[|>]/.test(line)) { briefIndent = line.search(/\S/); return; }
    if (isQmd && i === 0 && line === '---') { inFrontYaml = true; return; }
    if (inFrontYaml) { if (line === '---') inFrontYaml = false; return; }
    if (/^\s*```/.test(line)) { inCode = !inCode; return; }
    if (inCode) return;
    if (!isQmd && (CODE_KEY.test(line) || /^\s*#/.test(line))) return;
    if (/data-island=/.test(line)) return;
    for (const r of RULES) {
      if (r.qmdOnly && !isQmd) continue;
      if (r.yamlOnly && isQmd) continue;
      if (r.id === 'first-year' && frontMatter) continue;
      const text = r.id === 'you' ? line.replace(/Check your(self| understanding)\b/g, '') : line; // fixed headings (AUTHOR.md §11j)
      if (r.id === 'emoji' && /^#+\s*(🔬|🍜|🍳)/.test(line)) continue;
      if (r.id === 'arrow' && /^\s*\|/.test(line)) continue; // arrows are fine inside tables
      r.re.lastIndex = 0;
      let m;
      while ((m = r.re.exec(text))) {
        if (r.id === 'you') { you++; if (!listYou) continue; }
        hits.push({ line: i + 1, rule: r.id, why: r.why, text: m[0], ctx: line.trim().slice(0, 140) });
        if (!r.re.global) break;
      }
    }
  });
  // Density metrics for prose files.
  const prose = text.replace(/```[\s\S]*?```/g, '').replace(/<div[^>]*><\/div>/g, '');
  const words = (prose.match(/[A-Za-z][A-Za-z'-]*/g) || []).length;
  const bold = (prose.match(/\*\*[^*]+\*\*/g) || []).length;
  const rather = (prose.match(/\brather than\b/gi) || []).length;
  const dashes = (prose.match(/—/g) || []).length;
  const curly = (prose.match(/[“”‘’]/g) || []).length;
  const flags = hits.filter((h) => h.rule !== 'you').length;
  totals[rel] = { words, flags, dashes, boldPer1k: words ? +(bold * 1000 / words).toFixed(1) : 0, ratherThan: rather, you, curly };
  grand += flags;
  if (!summaryOnly && hits.length) {
    console.log(`\n${rel}`);
    for (const h of hits) console.log(`  ${String(h.line).padStart(4)}  ${h.rule.padEnd(15)} "${h.text}"  — ${h.ctx}`);
  }
}

console.log('\nSummary (flags · em dashes · bold per 1,000 words · "rather than" · "you" · curly quotes)');
for (const [f, t] of Object.entries(totals)) {
  if (!t.flags && !t.dashes && t.boldPer1k < 20 && t.ratherThan < 3 && !t.you && !t.curly) continue;
  const warn = [t.boldPer1k >= 20 ? 'bold-heavy' : '', t.dashes > 2 ? 'dash-heavy' : '', t.ratherThan >= 3 ? 'rather-than' : '', t.curly ? 'curly-quotes' : ''].filter(Boolean).join(', ');
  console.log(`  ${f.padEnd(58)} ${String(t.flags).padStart(3)} · ${String(t.dashes).padStart(2)} · ${String(t.boldPer1k).padStart(5)} · ${t.ratherThan} · ${String(t.you).padStart(3)} · ${String(t.curly).padStart(3)}${warn ? '   ← ' + warn : ''}`);
}
console.log(`\n${grand} flag(s) across ${Object.keys(totals).length} file(s)` + (listYou ? '.' : ' ("you" counted, not listed; add --you to list).'));
