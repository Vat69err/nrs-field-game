// ─────────────────────────────────────────────────────────────────────────────
// NRS Field Game — Link Validator
// Run with:  node validate.js
// ─────────────────────────────────────────────────────────────────────────────

const fs   = require('fs');
const path = require('path');

// Load story-data.js as a module
const raw = fs.readFileSync(path.join(__dirname, 'story-data.js'), 'utf8');
const story = (new Function(raw + '\nreturn story;'))();

const allKeys  = Object.keys(story);
const endings  = allKeys.filter(k => story[k].ending);
const scenes   = allKeys.filter(k => !story[k].ending);
const errors   = [];
const warnings = [];

// ── 1. Check every `next` points to a real node ──
scenes.forEach(key => {
  const s = story[key];
  if (!s.choices || s.choices.length === 0) {
    errors.push(`  ✗  No choices defined in scene: "${key}"`);
    return;
  }
  s.choices.forEach(c => {
    if (!c.next) {
      errors.push(`  ✗  Choice "${c.text}" in "${key}" has no "next" value`);
    } else if (!story[c.next]) {
      errors.push(`  ✗  "${key}" → "${c.next}" — node does not exist`);
    }
  });
});

// ── 2. Check every ending has required fields ──
endings.forEach(key => {
  const e = story[key];
  ['type', 'title', 'body', 'note'].forEach(field => {
    if (!e[field]) errors.push(`  ✗  Ending "${key}" is missing field: "${field}"`);
  });
});

// ── 3. Warn about orphan scenes (reachable from no other node) ──
const reachable = new Set(['start']);
allKeys.forEach(key => {
  const s = story[key];
  if (s.choices) {
    s.choices.forEach(c => { if (c.next) reachable.add(c.next); });
  }
});
allKeys.forEach(key => {
  if (!reachable.has(key)) {
    warnings.push(`  ⚠  "${key}" is never reached from any other scene`);
  }
});

// ── 4. Count paths to each ending ──
function countPaths(from, target, visited = new Set()) {
  if (from === target) return 1;
  if (visited.has(from)) return 0;
  const s = story[from];
  if (!s || !s.choices) return 0;
  visited = new Set(visited); visited.add(from);
  return s.choices.reduce((sum, c) => sum + countPaths(c.next, target, visited), 0);
}

// ── Report ──
console.log('\n─────────────────────────────────────────────');
console.log('  NRS Field Game — Validator');
console.log('─────────────────────────────────────────────');
console.log(`  Total nodes   : ${allKeys.length}`);
console.log(`  Scenes        : ${scenes.length}`);
console.log(`  Endings       : ${endings.length}`);
console.log('');

if (errors.length) {
  console.log(`  ERRORS (${errors.length}) — fix these before publishing:`);
  errors.forEach(e => console.log(e));
  console.log('');
} else {
  console.log('  ✓  No broken links found.');
  console.log('');
}

if (warnings.length) {
  console.log(`  WARNINGS (${warnings.length}):`);
  warnings.forEach(w => console.log(w));
  console.log('');
}

console.log('  Paths to each ending:');
endings.forEach(key => {
  const n = countPaths('start', key);
  const label = story[key].type || key;
  console.log(`    ${n.toString().padStart(2)}  →  ${label}`);
});

console.log('─────────────────────────────────────────────\n');
process.exit(errors.length > 0 ? 1 : 0);
