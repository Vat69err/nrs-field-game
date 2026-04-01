# nrs-field-game
# A Day in the Field — NRS

An interactive narrative fieldwork game built for [NRS Sociality](https://nrsociality.org/).

---

## Files in this repository

| File | What it is | When you edit it |
|------|-----------|------------------|
| `index.html` | The game engine — layout, styles, logic | Almost never |
| `story-data.js` | Every scene, choice, and ending | Every time you add content |
| `validate.js` | Checks all story links are valid | Run after editing |
| `STORY-MAP.md` | Human-readable map of all scenes | Update alongside story-data.js |
| `README.md` | This file | When the workflow changes |

---

## Setting up on GitHub (complete beginner guide)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up if you haven't already.

### Step 2 — Create a new repository
1. Click the **+** button (top right) → **New repository**
2. Name it something like `nrs-field-game`
3. Set it to **Public**
4. Leave everything else as default
5. Click **Create repository**

### Step 3 — Upload the files
1. On your new repository page, click **Add file** → **Upload files**
2. Drag all 5 files into the upload area:
   - `index.html`
   - `story-data.js`
   - `validate.js`
   - `STORY-MAP.md`
   - `README.md`
3. At the bottom, click **Commit changes**

### Step 4 — Enable GitHub Pages (makes the game playable at a URL)
1. Click **Settings** (in your repository, not your account)
2. Click **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select **main** and leave the folder as **/ (root)**
5. Click **Save**
6. Wait about 60 seconds, then refresh the page
7. You'll see a green box with your game's URL:
   `https://your-username.github.io/nrs-field-game/`

That URL is your live game. Share it with anyone.

---

## How to add new content

### The fast way (editing on GitHub.com directly)
1. Go to your repository on github.com
2. Click on **`story-data.js`**
3. Click the **pencil icon** (Edit this file)
4. Add your new scene inside the `story = { ... }` object
5. Click **Commit changes** at the bottom
6. The game updates live within about 30 seconds

### The better way (for bigger edits — ask Claude for help)
Tell Claude:
> "Add a new scene called `scene_name` that comes after `existing_scene`.
> The scene should be about [describe it]. Two choices: [choice A] leads to
> [scene X], [choice B] leads to [scene Y]."

Claude will give you a `str_replace` edit — a small surgical change to
`story-data.js` rather than rewriting the whole file.

---

## Adding a new scene — template

Open `story-data.js` and add this anywhere inside the `story = { ... }` object
(before the final closing `};`):

```javascript
  my_new_scene: {
    location: "Day 2 — Somewhere",
    text: "What happens. Use <em>text like this</em> for italics in purple.",
    choices: [
      { text: "What the player chooses to do.", next: "some_existing_scene" },
      { text: "Another option.",                next: "another_existing_scene" }
    ]
  },
```

**Rules:**
- The key (`my_new_scene`) must be unique — no spaces, use underscores
- Every `next` value must point to a key that exists somewhere in the story
- Always add a comma after the closing `}` if it's not the last item

---

## Adding a new ending — template

```javascript
  end_my_ending: {
    ending: true,
    type:  "Ending — Short Label",
    title: "One vivid line.",
    body:  "Two or three sentences. What this path means for the researcher.",
    note:  '"A closing quote in quotation marks."'
  },
```

Ending keys should start with `end_` by convention.
The game automatically counts endings — no number to update.

---

## Checking your links

After any edit, run the validator to make sure nothing is broken:

```bash
node validate.js
```

This will:
- List every broken link (a `next` value that points to a missing scene)
- Warn about orphan scenes (scenes no path can reach)
- Show how many paths lead to each ending

You need [Node.js](https://nodejs.org) installed to run this locally.
If you don't have it, just check the game in the browser — broken links will
show a blank screen and a console error.

---

## Workflow for expansion sessions with Claude

Each session works like this:

1. **You describe** what you want to add in plain language
2. **Claude gives you** one or more `str_replace` edits for `story-data.js`
3. **You apply them** (paste into GitHub editor or use a local editor)
4. **Run `node validate.js`** to confirm no broken links
5. **Commit** — the live game updates automatically

You never need the full file rewritten. Only the new nodes are added.

---

## Local development (optional, more comfortable for bigger edits)

Install [VS Code](https://code.visualstudio.com) and the
[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
extension. Then:

1. Open the `nrs-field-game` folder in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Edit `story-data.js` and the browser refreshes automatically

To sync changes back to GitHub, install
[GitHub Desktop](https://desktop.github.com) — a visual interface that
lets you commit and push without using the command line.

---

## Game stats (as of last update)

- **56 nodes** total (45 scenes + 11 endings)
- **22 paths** to the most-reached ending (The Open Hand)
- **1 path** to the rarest endings (The Reckoning, The Crossing, The Traveling Story)

Run `node validate.js` for current counts.
