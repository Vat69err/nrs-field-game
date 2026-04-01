# Technical Reference — A Day in the Field
 
**For:** Game developers, engineers, or technical collaborators joining the project.  
**Assumes:** Comfort with JavaScript, DAGs, choice-based narrative structure, and browser fundamentals.
 
---
 
## What this is
 
A branching-narrative game in the tradition of parser-adjacent choice fiction (Twine/Inkle lineage, but hand-rolled). The subject is qualitative fieldwork methodology — the player is a researcher making decisions during an ethnographic interview. Endings are reflective rather than consequential; the game is designed for use in research training contexts.
 
It is a **static site** — no backend, no database, no build step. Two files served from GitHub Pages.
 
---
 
## Repository layout
 
```
index.html      Engine: DOM, styles, render loop. Frozen once stable.
story-data.js   Data: the entire story graph as a plain JS object. Only file that changes.
validate.js     Node.js validator: link integrity, orphan detection, path counts.
STORY-MAP.md    Human-readable graph overview. Maintained manually alongside story-data.js.
README.md       Non-technical setup and workflow guide.
TECHNICAL.md    This file.
```
 
---
 
## Architecture
 
### Data model
 
The story is a **directed acyclic graph** (DAG) of nodes stored as a flat object keyed by string IDs:
 
```javascript
const story = {
  node_key: { ...node },
  ...
}
```
 
Two node types, discriminated by the `ending` boolean:
 
**Scene node**
```typescript
{
  location: string,      // Displayed as a small-caps header above the scene text
  text:     string,      // HTML string — only <em> tags are used for italics/color
  choices:  Array<{
    text: string,        // Button label
    next: string         // Key of the target node (scene or ending)
  }>
}
```
 
**Ending node**
```typescript
{
  ending: true,
  type:   string,        // Short label, e.g. "Ending — The Witness"
  title:  string,        // Displayed as h2
  body:   string,        // Plain text, 2–4 sentences
  note:   string         // Italic closing quote, plain text
}
```
 
No other fields are read by the engine. Additional fields are ignored safely.
 
### Engine (`index.html` — the `<script>` block)
 
Single-function render loop. No framework, no virtual DOM. Pure DOM mutation.
 
**State (module-level)**
```javascript
let history  = [];   // Array<string> — choice button labels in order taken
let step     = 0;    // Integer — incremented each non-ending scene render
const endingsSeen = new Set(...)  // Persisted to sessionStorage
```
 
**`renderScene(key: string)`**  
The entire game loop. Branches on `scene.ending`:
 
- **Ending path:** hides `#scene`, shows `#ending`, populates ending fields, updates `endingsSeen` in sessionStorage, renders log, updates ending counter.
- **Scene path:** increments `step`, updates progress bar, sets `#location` and `#scene-text` innerHTML, clears and rebuilds `#choices` buttons. Each button's `onclick` pushes to `history`, calls `renderLog()`, then calls `renderScene(choice.next)`.
 
**`renderLog()`**  
Rebuilds `#log` from the `history` array on every choice. O(n) full re-render — fine at current scale, would need to change if history grows long.
 
**`restart()`**  
Resets `history` and `step` to initial values, shows `#scene`, hides `#ending`, calls `renderScene('start')`. Does **not** clear `endingsSeen` — endings seen counter persists across restarts within the same browser session.
 
**`buildPips()` (IIFE)**  
Runs once on load. Creates `TOTAL_STEPS` pip divs dynamically rather than hardcoding them in HTML.
 
**`TOTAL_ENDINGS`**  
Derived at runtime: `Object.values(story).filter(s => s.ending).length`. Automatically correct as the story grows — no constant to maintain.
 
**`TOTAL_STEPS`**  
Hardcoded at `6`. This controls how many progress pips display. It is **not** the actual max depth of the graph — it is a visual approximation. The progress bar is aesthetic, not accurate.
 
### Loading order
 
```html
<script src="story-data.js"></script>   <!-- defines global `story` -->
<script> ... engine ... </script>       <!-- consumes global `story` -->
```
 
`story` is a bare global. This is intentional for simplicity — no module system, no bundler. If this moves to a build pipeline, `story-data.js` should export and the engine should import.
 
---
 
## Graph analysis (current build)
 
| Metric | Value |
|--------|-------|
| Total nodes | 56 |
| Scene nodes | 45 |
| Ending nodes | 11 |
| Max choices per scene | 4 (start only) |
| Avg choices per scene | 2.07 |
| Scenes with 3+ choices | 1 (`structured`) |
| Max path depth from start | 8 |
| All nodes reachable | Yes |
 
**Paths to each ending:**
 
| Ending key | Paths | Notes |
|------------|-------|-------|
| `end_expansive` | 22 | Dominant. 18 direct parents. De facto default ending. |
| `end_witness` | 10 | Second most reached. 7 direct parents. |
| `end_disciplined` | 7 | — |
| `end_immersive` | 7 | — |
| `end_infrastructure` | 3 | — |
| `end_controlled` | 2 | — |
| `end_two_stories` | 2 | Hemlata branch only |
| `end_annotation` | 2 | Hemlata branch only |
| `end_reflexive` | 1 | Single path. Only reachable via `explain_methodology → researcher_mirror` |
| `end_solidarity` | 1 | Single path. Only reachable via `admit_lost → women_arrive → the_training_day` |
| `end_testimony` | 1 | Single path. Only reachable via `write_alone → the_thirteen_years → the_thirteen_deep → the_rajyapal` |
 
**Convergence nodes** (reached from 3+ distinct parent scenes):  
`end_expansive`, `end_immersive`, `end_disciplined`, `end_witness`, `end_infrastructure`
 
These five are structural gravity wells. Any new scene that doesn't have a clear unique ending will likely funnel into `end_expansive`. If ending diversity is a design goal, new scenes should route to the single-path endings or introduce new ones.
 
---
 
## Known limitations and design debt
 
### No within-run state
The engine does not track which nodes have been visited in the current run. There is no mechanism for choices made at scene A to alter what is available or displayed at scene B later in the same run. All branching is purely structural (the graph itself), not conditional.
 
**Impact:** Some scenes that logically follow from earlier choices are instead placed behind structural gates (i.e. you can only reach them if you took the right path). There's no way to say "if the player already met Hemlata, show this additional line."
 
**Fix:** Add a `visited: Set<string>` to engine state. Pass it to a modified `renderScene` that can filter or modify choices based on visited nodes. Story data would need a `requires` or `if_visited` field on choices.
 
### Progress bar is not semantically meaningful
`step` increments on every scene render, and `TOTAL_STEPS = 6` is an editorial guess at typical path length. Paths range from 2 to 8 scenes deep. The bar fills at different rates on different paths — it communicates "you are progressing" not "you are N% done."
 
**Fix:** If accurate progress is wanted, calculate actual path depth at render time, or abandon the metaphor and use a step counter instead (`3 / 5 scenes`).
 
### `endingsSeen` is session-scoped
Resets when the browser tab closes. Players cannot build up an endings collection across multiple sessions.
 
**Fix:** Replace `sessionStorage` with `localStorage`. One-line change.
 
### `history` stores button label strings, not node keys
The log displays what the player chose, not where they went. This makes the log human-readable but means you can't reconstruct the exact path taken from `history` alone (two choices in different scenes may have the same label text).
 
**Fix:** Store `{ label: string, from: string, to: string }` objects in history instead of bare strings.
 
### `innerHTML` used for scene text
`scene.text` is injected via `textEl.innerHTML` to support `<em>` tags. This is an XSS vector if story data ever comes from user input or an untrusted source. Not a concern for the current static data model.
 
**Fix:** If dynamic content is introduced, sanitize with DOMPurify or switch to a Markdown parser with a controlled allowed-tag list.
 
### No keyboard navigation
Choices are only accessible via mouse/touch. Not keyboard-navigable, not screen-reader friendly.
 
**Fix:** Add `tabindex`, `role="button"`, and keydown handlers to `.choice-btn`. The structure is trivially accessible with minor additions.
 
---
 
## Extension points
 
### Conditional choices (history-aware branching)
Smallest possible change to support "show this choice only if the player visited scene X":
 
In `story-data.js`, add optional field to a choice:
```javascript
{ text: "Ask about the nursing job.", next: "hemlata_naukri", requires: "hemlata_shop" }
```
 
In the engine, modify the choice render loop:
```javascript
scene.choices
  .filter(c => !c.requires || visited.has(c.requires))
  .forEach(choice => { ... })
```
 
### A second variable type (flags)
If you want choices to set flags that affect later scenes without requiring structural paths:
 
```javascript
// In a choice:
{ text: "...", next: "...", sets: "researcher_intervened" }
 
// In a later scene's text or choices:
{ text: "...", next: "...", requires_flag: "researcher_intervened" }
```
 
Engine maintains a `flags: Set<string>`. Two extra fields, no schema change to existing nodes.
 
### Multiple characters / switching POV
Current structure has no concept of "who is speaking." Adding a `speaker` field to scene nodes would allow the engine to render speaker attribution and potentially different visual treatments per character. Hemlata and the UP entrepreneur are already structurally separated; they just aren't visually distinguished.
 
### Replacing the static file approach
If this outgrows a flat JS object — say, you want a CMS, collaborative editing, or the story to exceed a few thousand nodes — the cleanest path is:
 
1. Convert `story-data.js` to a JSON file served from a CDN or API endpoint
2. Change engine to `fetch('story-data.json').then(...)` — ~3 line change
3. Story authoring moves to a structured editor (Twine export → JSON, or a custom tool)
 
The engine's `renderScene(key)` is format-agnostic — it only cares that `story[key]` exists and has the right shape.
 
---
 
## Validator (`validate.js`)
 
Node.js script. Reads `story-data.js`, evaluates it via `new Function()`, runs three checks:
 
1. **Link integrity** — every `next` value in every choice resolves to a key in `story`
2. **Ending completeness** — every ending node has `type`, `title`, `body`, `note`
3. **Orphan detection** — warns on any node not reachable from `start` via BFS
 
Also outputs path counts per ending via recursive DFS with visited-set cycle protection.
 
Exit code `1` if errors, `0` if clean. Safe to use as a CI pre-commit hook.
 
```bash
node validate.js          # run manually
echo $?                   # check exit code
```
 
To add to a GitHub Actions pre-deploy check, create `.github/workflows/validate.yml`:
 
```yaml
name: Validate story
on: [push]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: node validate.js
```
 
---
 
## Content pipeline (current)
 
```
Transcripts / notes
       ↓
Described to Claude in plain language
       ↓
Claude produces str_replace edits targeting story-data.js
       ↓
Applied via GitHub editor or local editor
       ↓
node validate.js
       ↓
Commit → GitHub Pages auto-deploys (~60s)
```
 
Full file rewrites are avoided. Each expansion session produces only the new nodes — surgical inserts. The validator catches broken links before they go live.
 
---
 
## Design decisions worth knowing
 
**Flat object over nested tree.** The graph could be expressed as a tree with inline children, but flat keyed objects make arbitrary cross-references (convergence nodes, shared endings) trivial and avoid duplication. The tradeoff is that the structure is not immediately legible from the data — hence `STORY-MAP.md`.
 
**No framework.** React/Vue would add a build step, a dependency graph, and tooling overhead for a project maintained by a non-technical content author. The engine is ~80 lines of vanilla JS. The DOM operations are simple and fast at this node count.
 
**`innerHTML` for scene text.** A deliberate tradeoff — avoids a Markdown parser dependency while still allowing emphasis markup. The surface area of allowed tags is documented (`<em>` only, by convention). If the authoring team expands, a stricter approach is warranted.
 
**`sessionStorage` over `localStorage` for endings.** A conservative choice — the endings counter resets per tab, which was considered acceptable for the current use case (research training, not a long-running personal game). Easy to upgrade.
 
**Progress bar as aesthetic, not semantic.** Variable path depth makes an accurate bar difficult without pre-computing depth on every render. The bar was kept as a felt sense of movement rather than a precise indicator. A step counter (`2 of 5`) would be more honest but less atmospheric.
 
