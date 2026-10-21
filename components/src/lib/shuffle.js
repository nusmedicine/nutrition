// Stable shuffle for MCQ options. Authors write the correct option anywhere (often first);
// readers see an order that is fixed per question (same seed → same order on every load and
// for every reader) but not predictable from the YAML. Returns [{ item, index }] so callers
// keep storing the ORIGINAL index or id, and saved progress stays valid.

function hash(str) {
  // FNV-1a, 32-bit
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function rng(seed) {
  // mulberry32
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function stableShuffle(items, seed) {
  const out = items.map((item, index) => ({ item, index }));
  const rand = rng(hash(String(seed)));
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
