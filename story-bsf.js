// ─────────────────────────────────────────────────────────────────────────────
// NRS Field Game — BSF Story Data
// "At the Border"
// ─────────────────────────────────────────────────────────────────────────────
//
// Source material: fieldwork notes from BSF cantonment research, August 2025.
// All participant names are pseudonyms. Institutional details are real.
//
// Validate with: node validate.js story-bsf.js
// ─────────────────────────────────────────────────────────────────────────────

const story = {

  // ── OPENING ──────────────────────────────────────────────────────────────

  start: {
    location: "Day 1 — The Cantonment",
    text: "You have been granted access to a BSF cantonment to study emotional labour among border security personnel. Your access came through an institutional chain you did not initiate. An officer is waiting. Before the first interview begins, you must decide how to enter the room — and who, exactly, you are going to be in it.",
    choices: [
      { text: "He stands when you enter and offers a firm handshake. Sit with the formality.", next: "amar_formal" },
      { text: "Before anything, look at the poster on the wall — phrases civilians use freely that the personnel cannot.", next: "the_poster" },
      { text: "Your access was granted by a hierarchy that decided who you would meet. Ask who made that decision.", next: "curated_access" },
      { text: "Before the first interview begins, decide whether to tell them where you are from.", next: "jnu_question" }
    ]
  },

  // ── BRANCH A: ARJUN SIR (COMMANDER) ─────────────────────────────────────

  amar_formal: {
    location: "Day 1 — Commander's Office",
    text: "The office is minimal — plain walls, few trophies, a thread of religious music in the background. He stands and offers a firm handshake, says 'sir' even though you are younger and unranked. When you mention the research topic — emotional labour — he immediately picks up the phone and tells someone. He wants to be seen as welcoming this. <em>The first thing he does is broadcast your presence.</em>",
    choices: [
      { text: "Follow his openness. Ask about a day in his life.", next: "amar_day_in_life" },
      { text: "Ask why he told his colleagues immediately.", next: "amar_broadcast" }
    ]
  },

  amar_day_in_life: {
    location: "Day 1 — Commander's Office",
    text: "He describes his day: signing leaves, ration demands, taking personnel interviews, phone reports. He mentions apiculture — bee tanks the personnel must carry wherever they go. <em>'It becomes problematic,'</em> he says, composedly. <em>'We already have primary tasks.'</em> He uses the word <em>overcommitment</em> — not overburden. You note this. Overcommitment has a positive connotation. Overburden sounds like a complaint. <em>The word choice is doing work.</em>",
    choices: [
      { text: "Ask about the word itself — why 'overcommitment' and not 'overburden'?", next: "the_word" },
      { text: "Ask what he understands to be the BSF's actual mandate now.", next: "mandate_question" }
    ]
  },

  amar_broadcast: {
    location: "Day 1 — Commander's Office",
    text: "He seems surprised by the question, then laughs. <em>'Main transparent hoon.'</em> I am transparent. He frames whistleblowing as a good thing — a chance for the system to improve. He describes the reports system. He says he would want his son in the BSF, though his son has ADHD — he says this without sadness, as a logistical assessment. You notice: he has left no room in the conversation for the things he hasn't mentioned.",
    choices: [
      { text: "Ask what the reports system doesn't capture. Push gently.", next: "dd_office" },
      { text: "Accept the framing. His optimism is also data.", next: "end_controlled_bsf" }
    ]
  },

  the_word: {
    location: "Day 1 — Commander's Office",
    text: "He pauses. <em>'Overburden sounds like we are complaining.'</em> He says this with a small smile — a calibrated admission. He talks about the BSF being asked to plant trees, run Yoga Days, conduct election duty. <em>'Hum fauji hain — hume seema par rehne do.'</em> We are soldiers, let us stay at the border. The frustration is real but controlled. He expresses it as a structural argument, not a personal grievance. <em>You realize: he knows exactly how to be critical without being critical.</em>",
    choices: [
      { text: "Ask about the Yoga Day specifically.", next: "yoga_day" },
      { text: "Ask about the pension scheme — what is actually being promised and to whom.", next: "the_pension" }
    ]
  },

  mandate_question: {
    location: "Day 1 — Commander's Office",
    text: "<em>'That is the question, isn't it.'</em> He talks about the ambiguity — are they border guards, police, social workers, election officials? The word Suresh Sir will use later: <em>policization.</em> The original mandate was first-line defence. The actual mandate is everything the state needs done near a border. He frames this as adaptability. You hear it as something else. <em>What does it do to a person when the job keeps expanding but the identity doesn't?</em>",
    choices: [
      { text: "Let this become the centre of your inquiry.", next: "end_expansive_bsf" },
      { text: "Ask whether his subordinates feel about this the same way he does.", next: "hierarchy_of_feeling" }
    ]
  },

  hierarchy_of_feeling: {
    location: "Day 1 — Evening",
    text: "<em>'Unka perspective alag hoga.'</em> Their perspective will be different. He does not say more. That evening, in Devraj Sir's office, you hear Devraj Sir say: <em>'Hum fauji hain, NGO nahi — hume toh agar mauka mile toh 15 August ko sona pasand karenge seema se aakar.'</em> We are soldiers, not an NGO — if given the chance, we'd prefer to sleep on Independence Day after coming back from the border. The distance between <em>their perspective will be different</em> and what that difference actually sounds like is where your study lives.",
    choices: [
      { text: "Go to Devraj Sir's office. Hear the unfiltered version.", next: "dd_office" },
      { text: "Write it down as it is. The gap between ranks is the finding.", next: "end_expansive_bsf" }
    ]
  },

  // ── BRANCH B: THE POSTER ─────────────────────────────────────────────────

  the_poster: {
    location: "Day 1 — Entrance",
    text: "On the wall as you enter: a list of phrases the personnel are not allowed to say. <em>'Hume maaloom nahi hai.'</em> We don't know. <em>'Pehle toh aisa hi hota tha.'</em> It was always done this way. <em>'Main chutti par jaa raha hoon.'</em> I'm going on leave. Phrases so ordinary that civilians say them without thinking. Here they are marked as failures of responsibility. You stand reading it for longer than feels polite. An officer notices you noticing.",
    choices: [
      { text: "When the interview begins, ask about the poster directly.", next: "poster_direct" },
      { text: "Don't mention it. Carry it in your notebook instead.", next: "poster_silent" }
    ]
  },

  poster_direct: {
    location: "Day 1 — Commander's Office",
    text: "He looks at the poster, then at you, with something you can't read. <em>'Yeh toh unhe sikhata hai ki zimmedaar kaise bante hain.'</em> It teaches them responsibility. He explains each phrase in terms of discipline and initiative. You write it down. Then you write, in your notebook, separately: he explained the poster exactly the way the poster instructs — with initiative, without admitting uncertainty. <em>You have been inside the institution for eleven minutes.</em>",
    choices: [
      { text: "Ask: does he ever wish he could say 'I don't know'?", next: "end_immersive_bsf" },
      { text: "Ask about one phrase specifically — 'Main chutti par jaa raha hoon.'", next: "chutti_phrase" }
    ]
  },

  poster_silent: {
    location: "Days 1–3 — Your Notebook",
    text: "You carry the poster in your notebook. Three days later, near the end of fieldwork, Suresh Sir mentions that the most universal coping mechanism is <em>chutti kaatna</em> — cutting leave. Fantasizing about going home. The poster prohibits even saying you are going on leave until it is approved. The phrase they are not allowed to say casually is also their deepest relief. <em>You hadn't planned to connect these things. The field connected them for you.</em>",
    choices: [
      { text: "This is a finding no structured interview could have produced.", next: "end_witness_bsf" },
      { text: "Return to the poster. Ask Suresh Sir about it directly.", next: "end_expansive_bsf" }
    ]
  },

  chutti_phrase: {
    location: "Day 1 — Commander's Office",
    text: "He is quiet for a moment. Then: <em>'Jab woh chutti par jaate hain, unka sapna pura hota hai.'</em> When they go on leave, their dream is complete. He says it simply, without irony. You think about the rows of personnel outside the CO's office tomorrow — waiting in uniform for two minutes each, to have their leave request assessed, ranked, approved or deferred. The most hopeful phrase is also the most surveilled.",
    choices: [
      { text: "Ask to observe the leave interviews the next morning.", next: "leave_interviews" },
      { text: "Ask: what happens to someone whose leave is denied repeatedly?", next: "end_expansive_bsf" }
    ]
  },

  leave_interviews: {
    location: "Day 3 — The Courtyard",
    text: "Two straight rows of personnel in uniform, red turbans, standing outside the CO's office. They will each get two minutes. Leave approved or deferred — medical backlog, courses outstanding, previous leave taken. One comes out of the CO's office and goes directly to Devraj Sir, visibly upset. Devraj Sir looks at the application and says something quiet that changes the man's posture. <em>The formal structure says CO. The actual decision happens in Devraj Sir's office, in the informal space, after.</em>",
    choices: [
      { text: "Ask Devraj Sir later what he said to the man.", next: "end_expansive_bsf" },
      { text: "Later that day, ask to speak with two of the men who were waiting — the older ones near retirement.", next: "older_si_ranks" }
    ]
  },

  // ── BRANCH C: CURATED ACCESS ─────────────────────────────────────────────

  curated_access: {
    location: "Day 1 — Before the First Interview",
    text: "Your access came through a chain of command. You asked to speak with certain kinds of people. The hierarchy decided which people that meant. Before the interview begins, you ask — carefully — who made that decision. The officer smiles. <em>'Humne socha ki yeh log sabse zyada samajhdar hain.'</em> We thought these people were the most articulate. <em>The institution has already decided what face to show you.</em>",
    choices: [
      { text: "Accept it. Even a curated sample reveals what the institution wants to be.", next: "curated_as_data" },
      { text: "Push back — ask if you can also speak to someone they wouldn't have chosen.", next: "curated_resist" }
    ]
  },

  curated_as_data: {
    location: "Day 1 — Your Notes",
    text: "You write: <em>the sample is not representative — it is representative of something else.</em> Who is deemed speakable for the institution. Who embodies the idealized narrative. You are thinking through this when Rao enters the room uninvited, scowling. He was not on the list. <em>Your theory is immediately tested.</em>",
    choices: [
      { text: "Stay with the theory. Rao is data too.", next: "mishra_encounter" },
      { text: "Later, ask for a voice from outside the official list entirely.", next: "khalsa_jawan" }
    ]
  },

  curated_resist: {
    location: "Day 1 — Negotiation",
    text: "He looks at you for a long moment. Then calls someone. Twenty minutes later you are taken to the mess, where no interviews were arranged. You find a man eating alone at a corner table, looking at pictures on his phone. He hasn't been briefed. He doesn't know who you are. He notices you are from JNU and begins talking — about Munirka, about parliament, about how no one here talks to him. <em>This is the conversation no one scheduled.</em>",
    choices: [
      { text: "Stay. This is the most important conversation of your fieldwork.", next: "kerala_man" },
      { text: "Take notes, but feel the full weight of an unscheduled confession.", next: "end_witness_bsf" }
    ]
  },

  // ── BRANCH D: THE JNU QUESTION ───────────────────────────────────────────

  jnu_question: {
    location: "Day 1 — Before the First Interview",
    text: "Your institution is JNU. You know what this means inside a cantonment — Suresh Sir will cite a video about a student leader as fact, then say they don't trust the media. Arjun Sir will reassure someone on the phone that your project is not affiliated with JNU politics. Pandey will give a full interview and then reassess everything he said the moment he learns where you are from. Before the first interview begins, you decide.",
    choices: [
      { text: "Don't mention JNU unless directly asked.", next: "jnu_silent" },
      { text: "Bring it up yourself. Let them react to the real thing rather than the rumour.", next: "jnu_direct" }
    ]
  },

  jnu_silent: {
    location: "Days 1–3",
    text: "For two days you don't mention JNU. The interviews proceed smoothly. On the third day, during the final conversation, Pandey — one of the most open people you have spoken to — learns where you are from and visibly recalibrates. You watch him scan the conversation backward, reassessing what he said. <em>'Maine jo bola...'</em> What I said... He trails off. He doesn't finish. <em>Neither do you. You wonder what your silence cost him.</em>",
    choices: [
      { text: "Ask: does knowing change what he told you?", next: "end_expansive_bsf" },
      { text: "Let the sentence stay unfinished. Write it exactly as it was.", next: "end_annotation_bsf" }
    ]
  },

  jnu_direct: {
    location: "Day 1 — First Meeting",
    text: "You say it early: JNU. Suresh Sir's eyebrows move. Devraj Sir looks at you carefully. Then: a long conversation about politics, about both wings, about algorithms and ideology. They perform their own neutrality — <em>'dono taraf ko samajhna chahiye'</em> — while testing whether you will perform yours. By being direct about where you came from, you gave them something to push against. The interviews that follow are more contentious. They are also more honest. <em>You traded smoothness for friction and got more.</em>",
    choices: [
      { text: "The friction is the finding. Trust it.", next: "end_expansive_bsf" },
      { text: "Ask whether they would have agreed to this research if they had known from the start.", next: "end_reflexive_bsf" }
    ]
  },

  // ── SHARED: RAO ──────────────────────────────────────────────────────────

  mishra_encounter: {
    location: "Day 2 — A Different Office",
    text: "He enters and his tone is immediate: <em>'Kon hai yeh log. Kya kar rahe hain. Emotions samajhne ke liye wardi pehanni padti hai.'</em> Who are these people. What are they doing. You have to wear the uniform to understand emotions. He dismisses your questions as children's questions. He speaks from the door, not entering fully, as if reserving the right to leave. Three days of fieldwork notes suddenly feel very thin. <em>The question is what to do with a conversation that refuses to be a conversation.</em>",
    choices: [
      { text: "Write it down exactly as it happened. This is data on institutional boundary-policing.", next: "mishra_as_data" },
      { text: "Stay in the room. Ask: what would be a worthy question?", next: "mishra_worthy" }
    ]
  },

  mishra_as_data: {
    location: "Day 2 — Your Notes",
    text: "You write: he used the uniform as an epistemological boundary. The question <em>'emotions samajhne ke liye wardi pehanni padti hai'</em> is not hostility — it is a claim about who gets to know what about whom. The illegitimacy of civilian inquiry into institutional interiority. About the 'culture of suspicion' Borrelli describes in Swedish border police — adapted here, hardened, made visible through a single sentence. <em>You came to study emotional labour. You have just witnessed it in its most defensive form.</em>",
    choices: [
      { text: "Let this reframe the entire study.", next: "end_expansive_bsf" },
      { text: "Ask yourself: at what level can you be critical without losing access?", next: "end_critical_limit" }
    ]
  },

  mishra_worthy: {
    location: "Day 2 — A Different Office",
    text: "He pauses. The question surprises him. Then: <em>'Pooch — agar aankhon mein dekhke sun sakti ho toh.'</em> Ask — if you can look me in the eye and really listen. He sits down. He talks for forty minutes. About loneliness, about how mobile phones are his only friend here, about the frustration of having the same rank as the doctor but different standing, about how making genuine friends in this environment is genuinely hard. <em>What you almost missed because of his first sentence is everything.</em>",
    choices: [
      { text: "Ask what it would mean for a civilian to actually understand.", next: "end_immersive_bsf" },
      { text: "Ask: does he think anyone inside the force understands either?", next: "end_witness_bsf" }
    ]
  },

  // ── SHARED: DEVRAJ SIR'S OFFICE ──────────────────────────────────────────

  dd_office: {
    location: "Day 2 — Devraj Sir's Office",
    text: "Devraj Sir's office is different from Arjun Sir's — no trophies, just a designation board, a penstand, two files. But: Suresh Sir is already here. He is almost always here when you visit. They are not assigned to the same space. Suresh Sir simply gravitates to it. Devraj Sir is on the phone with his wife when you arrive. His son got a 5 on a math test. His wife is embarrassed. He sets the phone down with a weariness that has nothing to do with the score. <em>This is the first unguarded thing you have seen.</em>",
    choices: [
      { text: "Ask about the phone call. He brought it into the room.", next: "dd_son" },
      { text: "Wait. Ask to see what he reads. There are books on the desk.", next: "dd_ganpat_bond" }
    ]
  },

  dd_son: {
    location: "Day 2 — Devraj Sir's Office",
    text: "He sets the phone down and says: <em>'Yeh generation ko samajh nahi aata.'</em> This generation doesn't understand. Suresh Sir disagrees gently: <em>'Number ko izzat se kyun jodna.'</em> Why attach your worth to marks. Devraj Sir laughs. Two men who have spent years inside a system that runs entirely on ranks and numbers, quietly telling each other that marks don't matter. <em>The institution is still in the room. But for a moment it is not in charge.</em>",
    choices: [
      { text: "Ask Devraj Sir about the quote in his annotated book.", next: "dd_creativity" },
      { text: "Ask about the shaheed photograph on his phone.", next: "shaheed_moment" }
    ]
  },

  dd_creativity: {
    location: "Day 2 — Devraj Sir's Office",
    text: "He goes out and comes back with an annotated book — underlines, sketches, a quote in the margin: <em>'I want a job where I can show my creativity.'</em> He shows you with a laugh that is not only a laugh. His own training used this phrase: <em>'ghode ko liya jaata hai aur gadha banaya jaata hai'</em> — you bring in a horse and make it a donkey, because you don't need thinking, only obedience. The quote sits between you like a small act of confession. <em>You write it down exactly as it was.</em>",
    choices: [
      { text: "Ask when he wrote it — what moment made him write that.", next: "end_immersive_bsf" },
      { text: "Ask what creativity would look like in this job if it were allowed.", next: "end_expansive_bsf" }
    ]
  },

  shaheed_moment: {
    location: "Day 2 — Devraj Sir's Office",
    text: "He shows you a picture on his phone — a pillar with two columns of names. Army personnel killed in Operation Sindoor: <em>Shaheed.</em> BSF personnel killed in the same operation: no word beside those names. <em>'Jab army wala marta hai, shaheed hota hai. Jab BSF wala marta hai, woh bas marta hai.'</em> When an army soldier dies, he is a martyr. When a BSF soldier dies, he just dies. He says it without rage. <em>The absence of rage is what stays with you.</em>",
    choices: [
      { text: "Ask what he wants — the word, the compensation, or something else.", next: "end_testimony_bsf" },
      { text: "Ask about his grandmother. He mentioned her once, briefly, at the start.", next: "nani_during_op" }
    ]
  },

  dd_ganpat_bond: {
    location: "Day 2 — Devraj Sir's Office",
    text: "You ask about Suresh Sir — he is here every time. Devraj Sir laughs. The explanation is practical: batchmates, same rank. But then the sher analogy: <em>'Sher kitna bhi pyaar karle, uska pyaar bhi panje ke ghao ki tarah chubhta hai.'</em> Even the lion's love leaves claw marks. He says it about the CO. But then you notice: Suresh Sir doesn't leave until Devraj Sir signals. When the CO himself gives Suresh Sir a direct order to go, Suresh Sir waits for Devraj Sir's look. <em>You are watching hierarchy from all three levels simultaneously.</em>",
    choices: [
      { text: "Ask about the CO — what is it like to be afraid of someone who means well?", next: "sher_question" },
      { text: "Ask about the time Suresh Sir nearly broke. He has hinted at it.", next: "suresh_breakdown" }
    ]
  },

  sher_question: {
    location: "Day 2 — Devraj Sir's Office",
    text: "Devraj Sir considers this for a long time. <em>'Aap sahi bol rahe ho.'</em> You are right. He acknowledges the fear without calling it fear — he calls it caution, respect, awareness of rank. But then: <em>'Agar hum apne superior se itna darte hain, toh hum apne juniors ko kehte kaise hain ki darr mat?'</em> If we are this afraid of our superior, how do we tell our juniors not to be afraid? He has asked himself this before. He doesn't have an answer. <em>Neither do you.</em>",
    choices: [
      { text: "This is the structural heart of it. Follow it all the way.", next: "end_expansive_bsf" },
      { text: "Ask: has he ever chosen differently — acted against that fear, even once?", next: "end_moral_choice" }
    ]
  },

  // ── NEW: SURESH SIR'S BREAKDOWN ──────────────────────────────────────────

  suresh_breakdown: {
    location: "Day 3 — Devraj Sir's Office",
    text: "Suresh Sir tells you about the time he nearly broke. Work had been piling — more than he could carry — and one day a constable found him standing and looking wrong. He hugged him so tightly that the constable called for help and they took him to the hospital. He tells you this matter-of-factly, the way you report something that happened to someone else. Later that same week, a senior officer was going to visit with relatives. Suresh Sir was stretched. He prepared for the visit. The senior cancelled at the last minute. <em>'Main kya karta? Baith gaya.'</em> What could I do? I sat down. <em>He says this as if sitting down was the only rational response. You think: maybe it was.</em>",
    choices: [
      { text: "Ask: how does he keep going after moments like that?", next: "end_immersive_bsf" },
      { text: "Ask about the constable who found him — what the buddy system is when it actually works.", next: "buddy_system" }
    ]
  },

  buddy_system: {
    location: "Day 3 — Morning",
    text: "The buddy system assigns one person to each jawan — a peer, theoretically there for emotional support. The administration calls it welfare. The jawans call it: someone who always knows where you are. The buddy can report you for mood changes that suggest instability. He can also be the only person who notices you haven't eaten in two days. <em>'Care aur control — ek hi cheez hai yahan.'</em> Care and control are the same thing here. He says this without bitterness, as a structural observation. <em>You think about it for the rest of the day.</em>",
    choices: [
      { text: "Ask: does having a buddy actually help?", next: "end_expansive_bsf" },
      { text: "Ask: what happens when the buddy files a report on you?", next: "end_critical_limit" }
    ]
  },

  // ── NEW: THE PENSION ─────────────────────────────────────────────────────

  the_pension: {
    location: "Day 2 — Devraj Sir's Office",
    text: "Suresh Sir leans forward. <em>'NPS ka zikr mat karna — sirf UPS ke fayde batana... yeh toh hamare jawaano ke saath dhokha hai.'</em> Don't mention the new scheme to them — only tell them about the old pension's benefits... this is a betrayal of our jawans. The contract is simple: offer your youth, your safety, perhaps your life. In return, the state guarantees dignity in old age. The Old Pension Scheme was that guarantee. The National Pension Scheme — market-dependent, uncertain — is the state rewriting the contract after the work has been done. <em>He is not raising his voice. He has carried this specific grievance for a long time and has learned to hold it precisely.</em>",
    choices: [
      { text: "Ask: do the younger jawans understand what they actually signed up for?", next: "end_expansive_bsf" },
      { text: "Ask: has anyone taken this further — to court, to parliament?", next: "end_testimony_bsf" }
    ]
  },

  // ── NEW: OLDER SI RANKS ──────────────────────────────────────────────────

  older_si_ranks: {
    location: "Day 3 — Interview Room",
    text: "Two Sub-Inspector ranks, both within two years of retirement. Before you ask about their children joining the force, one of them says it: <em>'Bilkul nahi.'</em> Absolutely not. No elaboration. The other agrees without pause. They joined in 1987 and 1989 — harder training, longer duty hours, no shelter at some border posts, personnel standing through entire shifts in rain. They say the younger generation lacks patience. But when you ask directly — would you want your child to live what you lived — the answer comes without hesitation. <em>The question reveals more than any answer to it.</em>",
    choices: [
      { text: "Ask what they would have done differently if they'd known.", next: "end_immersive_bsf" },
      { text: "Ask what keeps them here, after all of it.", next: "end_expansive_bsf" }
    ]
  },

  // ── NEW: NANI DURING SINDOOR ─────────────────────────────────────────────

  nani_during_op: {
    location: "Day 3 — Evening",
    text: "At the end of the day, sitting longer than the interview required, Devraj Sir mentions his grandmother. She died during Operation Sindoor. He did not go. The duty held him at the border and he chose the duty — or the duty chose for him, the line between these two being what you have been trying to understand for three days. He tells you this not as a confession but as a data point in the argument he has been building: about what the word <em>shaheed</em> costs the people it is not applied to. <em>'Woh gaye toh army ne khoya. Main nahi gaya toh BSF ne... kya khoya?'</em> When army personnel fall, they are named as a loss. When I didn't go — what did the BSF name?",
    choices: [
      { text: "Say nothing. This question has no answer your framework can hold.", next: "end_witness_bsf" },
      { text: "Ask: does he regret it?", next: "end_immersive_bsf" }
    ]
  },

  // ── NEW: OUTSPOKEN YOUNG JAWAN ───────────────────────────────────────────

  khalsa_jawan: {
    location: "Day 3 — Afternoon",
    text: "He is the youngest jawan you speak to and the most outspoken. He describes officers taking phone calls while personnel wait at the door. The English-speaking jawan cut off in the debate competition. Posting in a northeastern state for a year — nothing familiar in the food, nothing from home for months, a cultural dislocation nobody asked about. He runs a side business while in service. He is not alone in this. <em>'NPS se agar recruit hua hai toh sochega hi — bhavishy secure karna padega na.'</em> If you were recruited under the new pension scheme, of course you'll think about securing your future. The scheme doesn't, so they do. <em>You think: this is not corruption. This is adaptation.</em>",
    choices: [
      { text: "Ask whether he wants his children in the BSF.", next: "end_expansive_bsf" },
      { text: "Ask about the side business — what it means to innovate inside a system that runs on obedience.", next: "end_moral_choice" }
    ]
  },

  // ── YOGA DAY ─────────────────────────────────────────────────────────────

  yoga_day: {
    location: "Day 3 — Morning",
    text: "He tells you: on Yoga Day — an activity designed for stress relief — the personnel were woken at 2am to bring civilians for photographs. The image of the unit being wellness-compliant required the personnel to perform wellness while being actively stressed. <em>'Stress release karne wali activity bhi hamare liye stressful ho gayi.'</em> The inversion is exact. You write it down. Then you notice: he said this without audible anger. <em>The calibration of that absence is its own kind of data.</em>",
    choices: [
      { text: "Ask: where does the anger go?", next: "end_immersive_bsf" },
      { text: "Ask about the cricket team — the instruction to lose deliberately.", next: "deliberate_loss" }
    ]
  },

  deliberate_loss: {
    location: "Day 3 — Devraj Sir's Office",
    text: "Devraj Sir explains how he tells the cricket team to lose in the second round — deliberately — so that the selected players don't get transferred to a wider competition. If they win, they leave the battalion. Thinning of personnel at the border is critical. An instruction to lose a game in order to keep soldiers where the border needs them. <em>It is the most pragmatic thing you have heard in three days. It is also one of the saddest.</em> You don't know yet which it is more of.",
    choices: [
      { text: "Ask if the players know why they are being told to lose.", next: "end_expansive_bsf" },
      { text: "Write it down without comment. The act is its own analysis.", next: "end_witness_bsf" }
    ]
  },

  // ── THE KERALA MAN ───────────────────────────────────────────────────────

  kerala_man: {
    location: "Day 2 — The Mess",
    text: "He shows you pictures on his phone: the parliament building where he worked until 2017. <em>'Wahan par itna izzat tha mera. Log pair chute the.'</em> People touched my feet. His body is restless. He is shaking his head in a continuous slow no while talking about being here. There is no one to talk to. Then: <em>'Meri beti se baat karoge? Ruko, main karaata hoon.'</em> Will you talk to my daughter? He has been sitting with you for twenty minutes and is already offering you his most valued connection. <em>You understand: you are the first person who has asked him how he is in a very long time.</em>",
    choices: [
      { text: "Say yes. Talk to his daughter. Be fully present for this.", next: "end_solidarity_bsf" },
      { text: "Stay with him. Ask what the parliament posting gave him that this doesn't.", next: "kerala_before" }
    ]
  },

  kerala_before: {
    location: "Day 2 — The Mess",
    text: "Visibility, he says — though not in that word. He says: people knew him. He was part of something the whole country watched. Here he is part of something the whole country confuses with the army. <em>'Log Instagram pe BSF ki photo lagate hain aur likha hota hai — Army.'</em> People post BSF photos and write: Army. He says this without irony. It is simply true. The mess has emptied. You notice the blue-shirt officer has come to sit near your colleague and is watching. <em>A private conversation has become a surveilled one.</em>",
    choices: [
      { text: "Continue anyway. Being observed is also data.", next: "end_witness_bsf" },
      { text: "Ask him to walk you somewhere else. Give him more space than this room offers.", next: "end_expansive_bsf" }
    ]
  },

  // ── ENDINGS ──────────────────────────────────────────────────────────────

  end_expansive_bsf: {
    ending: true,
    type: "Ending — The Open Field",
    title: "You let the cantonment reshape your questions.",
    body: "Your interview guide is in your bag, annotated beyond recognition. You came to study emotional labour as a defined concept. You found: a man who writes 'I want a job where I can show my creativity' in the margin of a book he keeps in his quarter. A poster that prohibits saying 'I don't know.' A photograph of names — two columns, two different words for the same death. Your paper will be wider and more uncomfortable than your proposal. That is exactly right.",
    note: '"The institution is most visible in what it prohibits."'
  },

  end_immersive_bsf: {
    ending: true,
    type: "Ending — Deep Hanging Out",
    title: "You stayed long enough to stop being a visitor.",
    body: "By the fourth day, Devraj Sir was asking you to look at Ranjit's eyes — 'soya nahi hai yeh' — as embodied evidence. Suresh Sir was showing you his annotated books. The man from Kerala called his daughter from the mess table and held the phone toward you. You were inside something that does not usually let civilians inside. Your notes are full of what you observed. Your findings are full of what you were told. The gap between those two things is your paper.",
    note: '"Access is not neutrality. But it is the beginning of something."'
  },

  end_witness_bsf: {
    ending: true,
    type: "Ending — What You Cannot Cite",
    title: "The most important data came from conversations no one scheduled.",
    body: "The leave interview courtyard. The man from Kerala in the mess. The annotated book. The laugh that wasn't only a laugh. The conversation with Rao that almost didn't happen. None of these were in your interview guide. All of them are in your field notes, attributed to no one, recorded in a register that qualitative methods has a name for but peer review has limited patience with. You will find the language. Some of it will survive the editing process.",
    note: '"Deep hanging out produces data that structured interviews cannot. It also produces responsibilities that structured interviews do not."'
  },

  end_critical_limit: {
    ending: true,
    type: "Ending — At What Level Can You Be Critical",
    title: "You found the invisible boundary and stopped just before it.",
    body: "Your supervisor will ask: how critical were you? You will say: critical enough. What you will not say: there was a moment in every interview when you felt the boundary of institutional tolerance — when a follow-up question would have terminated access and perhaps something more. You chose access over critique, or critique over access, depending on the interview. You kept notes on both choices. Your methodology section will be the most honest part of the paper.",
    note: '"What might still remain unsaid haunts me more than what was said."'
  },

  end_controlled_bsf: {
    ending: true,
    type: "Ending — The Institutional Self-Portrait",
    title: "They showed you exactly what they wanted you to see.",
    body: "Your interviews are complete, transcribed, coded. The data is defensible. You have three strong findings. You also have a list — written in your own hand on the last night — of everything the curated sample was not designed to reveal: the pension scheme they were told to be grateful for, the suicide briefly mentioned and immediately explained away, the promotions tied to vacancies not years. The list is not in the paper. It is the paper's shadow.",
    note: '"Every curated sample is also a self-portrait of the institution. Study both."'
  },

  end_testimony_bsf: {
    ending: true,
    type: "Ending — The Word They Were Not Given",
    title: "They told you what the institution never said to them.",
    body: "Devraj Sir showed you the photograph without preamble: two columns of names, two different vocabularies for the same death. He did not perform anger. He performed something more controlled and more durable — the long fluency of a grievance carried for years. Shaheed is not just a word: when the state uses it, it issues a feeling rule, instructing the public to mourn collectively. When the state withholds it, the death stays private. The emotion is privatized. You are writing the record of what privatization costs.",
    note: '"Documentation is not justice. But it is the beginning of a record."'
  },

  end_solidarity_bsf: {
    ending: true,
    type: "Ending — The Unscheduled Interview",
    title: "You talked to his daughter.",
    body: "She was on the phone for four minutes. She thanked you for visiting her father. She said he talks about the parliament posting often — the years when he mattered to a place, when the place knew his name. You said: he told us about it too. He was sitting across the table from you watching you speak to her, and his face was doing something private and complicated. You did not write this down during the call. You wrote it afterward, from memory. It is the truest thing in your field notes.",
    note: '"Sometimes the research happens in the four minutes the methodology didn\'t plan for."'
  },

  end_reflexive_bsf: {
    ending: true,
    type: "Ending — What Your Presence Cost",
    title: "You were a variable in every interview you conducted.",
    body: "Your gender. Your university. Your civilian status. Your youth. The fact that you could leave. In every room, these facts preceded your questions and followed your silences. Pandey reassessed everything he said when he learned where you were from. The curated sample was partly about you — who they thought was safe to show you. Your reflexivity section will be the longest in the paper. It will also be the most read.",
    note: '"The researcher who does not appear in their own data has not looked carefully enough."'
  },

  end_annotation_bsf: {
    ending: true,
    type: "Ending — What Your Silence Cost Them",
    title: "You managed your identity the way they managed their emotions.",
    body: "Strategically, in service of an outcome. You wanted data. They wanted to control the image. Both of you succeeded, partly. What remains: Pandey's trailing sentence, the conversation he walked back in his head on learning where you were from, three days of interviews that now carry a small asterisk. Your methodology section will address this. Your findings will be careful. Something will still be off, and you will know it.",
    note: '"A silence is also a decision about what matters. Make that decision visible."'
  },

  end_moral_choice: {
    ending: true,
    type: "Ending — The Space Between the Rules",
    title: "He found ways to act that the institution had not prohibited.",
    body: "He counsels his jawans using invented stories — fake anecdotes of how he overcame the same problem they are facing. He lets a man caught sleeping on duty go with a warning instead of seven years. He tells the cricket team to lose. These are not rule-breaking. They are movements in the small space between what is written and what is survivable. Your finding: the force does not only produce compliance. It produces people who know exactly where the rules have enough give to breathe.",
    note: '"Moral agency is not always visible as resistance. Sometimes it looks like discretion."'
  }

};
