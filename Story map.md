# Story Map — A Day in the Field

This document tracks every scene, its choices, and where they lead.
Update it whenever you add new nodes. Run `node validate.js` to verify links.

---

## How to read this map

```
scene_key  →  choice_a → next_scene_a
           →  choice_b → next_scene_b
```

Endings are marked **[END]**.

---

## Entry Point

```
start  →  "Sit with the eldest woman..."          → listen
       →  "Open your notebook..."                  → structured
       →  "Ask if you can simply watch..."         → observe
       →  "Your host mentions another woman..."    → hemlata_intro
```

---

## Branch 1: Listen

```
listen       →  "Follow the thread about the goats"   → goats_deep
             →  "Let the conversation end naturally"   → write_alone

goats_deep   →  "Ask about the market"                → market_morning
             →  "Ask about the hands"                 → the_hands

write_alone  →  "Invite her in"                       → the_thirteen_years
             →  "Go to the market before her"         → the_competitor
```

---

## Branch 2: Structured

```
structured          →  "Close the notebook"            → pivot
                    →  "Continue"                      → by_the_book
                    →  "Explain your methodology"      → explain_methodology

pivot               →  "Say yes. Go with her"          → the_godown
                    →  "Ask what she's seen other..."  → the_fraudsters

by_the_book         →  "Go back tomorrow"              → the_niqab
                    →  "The methodology is sound"      → end_controlled [END]

explain_methodology →  "Acknowledge it directly"       → end_expansive [END]
                    →  "Explain academic research..."  → researcher_mirror
```

---

## Branch 3: Observe

```
observe      →  "Laugh with her. Admit you are lost"   → admit_lost
             →  "Say you are learning"                 → ask_explain

admit_lost   →  "Stay. Ask about the boy"              → the_children
             →  "Answer the door"                      → women_arrive

ask_explain  →  "Ask what she would not explain"       → the_question
             →  "Accept the explanation"               → end_disciplined [END]
```

---

## Branch 4: Hemlata

```
hemlata_intro    →  "Ask about the exam"               → hemlata_naukri
                 →  "Ask about the stationery shop"    → hemlata_shop

hemlata_naukri   →  "Does she still think about it?"  → hemlata_still
                 →  "Has he changed?"                  → hemlata_change

hemlata_still    →  "Let the silence hold"             → end_witness [END]
                 →  "Ask what she'd do over"           → hemlata_over

hemlata_over     →  "This is your study"               → end_expansive [END]
                 →  "What about you — not the kids?"   → hemlata_herself

hemlata_herself  →  "Ask who she needs proof from"     → end_immersive [END]
                 →  "Stop asking questions"            → end_witness [END]

hemlata_change   →  "Does he know the difference?"    → hemlata_knows
                 →  "Let her lead"                     → hemlata_show

hemlata_knows    →  "Answer honestly"                  → hemlata_honest
                 →  "Turn it back to her"              → end_expansive [END]

hemlata_honest   →  "Ask if she knows the ₹350 woman" → end_two_stories [END]
                 →  "Let it be enough"                 → end_expansive [END]

hemlata_show     →  "Ask how long she's been watching" → the_codes
                 →  "She is her own evidence"          → end_witness [END]

hemlata_shop     →  "Ask where she keeps the savings"  → hemlata_savings
                 →  "Ask who knows she's planning"     → hemlata_secret

hemlata_savings  →  "Ask when she'll have enough"      → end_expansive [END]
                 →  "Document it and move on"          → end_disciplined [END]

hemlata_secret   →  "Ask about the nursing job"        → hemlata_naukri
                 →  "Let thirteen years sit"           → end_immersive [END]

the_codes        →  "Return with better questions"     → end_expansive [END]
                 →  "The codes are the method"         → end_annotation [END]
```

---

## Shared Scenes (Days 2–4)

```
market_morning        →  "Hold back"                   → end_witness [END]
                      →  "Step forward"                → market_intervene

market_intervene      →  "Write it honestly"           → end_expansive [END]
                      →  "Record the sale"             → end_disciplined [END]

the_hands             →  "Ask what six months taught"  → the_no_loan
                      →  "Write it down"               → end_witness [END]

the_no_loan           →  "Ask if every woman could..."  → the_rare_thing
                      →  "Sit with it"                 → end_expansive [END]

the_rare_thing        →  "Follow this"                 → end_expansive [END]
                      →  "File it separately"          → end_disciplined [END]

the_competitor        →  "How did she know?"           → end_immersive [END]
                      →  "Could every woman do this?"  → the_network

the_network           →  "Redesign around this"        → end_expansive [END]
                      →  "Document as social capital"  → end_disciplined [END]

women_arrive          →  "Ask to come on training day" → the_training_day
                      →  "Note it. Continue"           → end_expansive [END]

the_training_day      →  "Put the pen down"            → end_solidarity [END]
                      →  "Ask to document this"        → end_expansive [END]

the_fraudsters        →  "Be specific about limits"    → end_expansive [END]
                      →  "Tell her intentions are good"→ end_controlled [END]

the_rajyapal          →  "Sit with that"               → end_testimony [END]
                      →  "Ask what she wants done"     → end_infrastructure [END]

researcher_mirror     →  "Answer honestly"             → end_reflexive [END]
                      →  "Say: that's why I'm here"    → end_expansive [END]

the_thirteen_years    →  "Were you ready?"             → the_thirteen_deep
                      →  "Say nothing"                 → end_immersive [END]

the_thirteen_deep     →  "Write it down"               → end_expansive [END]
                      →  "Ask about Raj Bhavan"        → the_rajyapal

the_godown            →  "Write with precision"        → end_infrastructure [END]
                      →  "Ask about the officials"     → the_godown_officials

the_godown_officials  →  "Tell her honestly"           → end_expansive [END]
                      →  "Tell her you'll try"         → end_infrastructure [END]

the_niqab             →  "Go back"                     → the_niqab_return
                      →  "Note as background"          → end_disciplined [END]

the_niqab_return      →  "Let this be the center"      → end_expansive [END]
                      →  "Ask what it cost her"        → end_witness [END]

the_children          →  "Ask the son"                 → the_son
                      →  "Stay with her"               → end_immersive [END]

the_son               →  "Ask what she wants for him"  → end_expansive [END]
                      →  "Put the notebook away"       → end_immersive [END]

the_question          →  "The story belongs to research"→ end_disciplined [END]
                      →  "It was given, not transferred"→ end_witness [END]
```

---

## Endings (11 total)

| Key | Type | Paths to it |
|-----|------|-------------|
| end_expansive     | The Open Hand        | 22 |
| end_immersive     | Presence             | 7  |
| end_disciplined   | The Clean Study      | 7  |
| end_controlled    | Distance as Method   | 2  |
| end_witness       | The Witness          | 10 |
| end_infrastructure| The Concrete Ask     | 3  |
| end_two_stories   | Two Women, One Study | 2  |
| end_reflexive     | The Reckoning        | 1  |
| end_solidarity    | The Crossing         | 1  |
| end_testimony     | The Traveling Story  | 1  |
| end_annotation    | What the Codes Said  | 2  |

---

## Ideas for future scenes

_Add rough notes here before coding them up._

- [ ] A scene where the researcher's translator/interpreter changes what is said
- [ ] A scene about the sister-in-law who never speaks but never leaves
- [ ] A scene about the season logic — off-season buying, on-season selling
- [ ] A scene with a third interlocutor from the transcripts
- [ ] A scene where an NGO official arrives mid-interview
- [ ] A mechanic: choices made earlier affect what is available later
