// ─────────────────────────────────────────────────────────────────────────────
// NRS Field Game — BSF Story Data ("In Uniform")
// ─────────────────────────────────────────────────────────────────────────────
//
// Source: Fieldwork notes, Ajnala BSF Battalion, Punjab border, August 2025.
// Researchers: Ritika, Chandan, Arpita.
// Topic: Emotional labor and resistance in the Border Security Force.
//
// This game is structurally separate from the entrepreneur game (story-data.js).
// Engine is shared — loaded via bsf.html instead of index.html.
//
// Run  node validate.js story-bsf.js  to check all links.
// ─────────────────────────────────────────────────────────────────────────────

const story = {

  // ── OPENING ──────────────────────────────────────────────────────────────

  start: {
    location: "Day 1 — Ajnala, Punjab Border",
    text: "You have been granted research access to a BSF battalion — something that took months and does not happen often. Your topic is emotional labor in paramilitary forces: how feeling is managed, suppressed, and performed as professional duty. Two women personnel register you at the gate. An escort leads you through. You have been told interviews have been arranged. You have not been told by whom, or with whom. <em>The research has already begun — but not in the way you planned.</em>",
    choices: [
      { text: "You are taken first to the CO's office. Attend to what the room tells you before he speaks.", next: "formal_entry" },
      { text: "DD has offered an informal meeting before the official schedule. Go there first.", next: "dd_informal" },
      { text: "You are directed to the mess to speak with jawans during their meal break.", next: "mess_arrival" },
      { text: "Alone for a moment, you look at your interview guide again. Something about it feels off.", next: "methodology_doubt" }
    ]
  },

  // ── BRANCH: FORMAL ENTRY ─────────────────────────────────────────────────

  formal_entry: {
    location: "Day 1 — CO's Office",
    text: "Organized desk, a few trophies, pale walls, religious music playing softly in the background. He stands, offers a firm handshake. When you say the word <em>interview</em> it produces a brief tightening around his eyes. When you say JNU, you watch him pick up his phone and assure whoever is on the other end that your project is not <em>affiliated</em> with the politics. He is warm. He is watching you very carefully. Both things are true at once.",
    choices: [
      { text: "Ask about a day in his life. Let him narrate the structure himself.", next: "co_interview" },
      { text: "Say little. Watch how the room works — who enters, how they wait, where they stand.", next: "poster_wall" }
    ]
  },

  co_interview: {
    location: "Day 1 — CO's Office",
    text: "He tells you that adapting to BSF life comes naturally once you understand the logic of the structure. His juniors described something different — the shock of training, the loss of their previous selves. He says the mental health of his personnel is generally good: welfare schemes, food, ticketing, medical. <em>'Agar suicide hoti hai toh woh mostly family matters ki wajah se hoti hai.'</em> He does not mention the pension scheme. He does not mention Op Sindoor. He does not mention the jawans who did not receive medals.",
    choices: [
      { text: "Note the gap between what he says and what you have already heard. Say nothing yet.", next: "the_sher_analogy" },
      { text: "He has given you the official version. Record it accurately and move on.", next: "end_sanctioned" }
    ]
  },

  poster_wall: {
    location: "Day 1 — Corridor",
    text: "On the wall near the gate: a printed poster listing phrases forbidden on duty. <em>Hume maaloom nahi h. Pehle toh aisa hi hota tha. Mai chutti pe jaa raha hun.</em> I don't know. It used to be like this. I'm going on leave. Each phrase is a civilian habit that the institution has erased. You stand with it for a moment — this is Goffman's re-socialization made literal. The list of selves they were required to leave at the gate on the first day of training.",
    choices: [
      { text: "Ask someone about the poster. Follow the thread of what it means on the ground.", next: "leave_interviews" },
      { text: "You already understand something without asking. Move on before it closes.", next: "explain_civilian" }
    ]
  },

  the_sher_analogy: {
    location: "Day 1 — After the CO's Office",
    text: "Outside, DD says quietly: <em>'Sher kitna bhi pyaar kare — uske punjon ke nishaan lagte hi hain.'</em> Even a lion's love leaves claw marks. He is not saying the CO is cruel. He is describing the physics of power in a ranked system: a casual question from a superior becomes an interrogation, a suggestion becomes an order, a forgotten promise becomes betrayal. The goal of every junior in the CO's presence, he explains, is not to communicate — it is to survive the interaction without fault.",
    choices: [
      { text: "Ask DD what this means for how truth moves — or doesn't — up the chain.", next: "dd_opening" },
      { text: "It is a structural observation. Useful. File it and proceed.", next: "end_complicit" }
    ]
  },

  leave_interviews: {
    location: "Day 2 — Quarter Office",
    text: "Two rows of personnel in full uniform wait outside — hierarchy ordering the queue, each rank speaking to the one above before reaching the CO. Leave can be denied: medical dues, course dues, prior absences. One personnel emerges from the CO's room visibly upset; his application was rejected. DD looks at him and asks what happened. Then — in the same breath — tells a subordinate: <em>'Koi naa answer de toh mujhe batana.'</em> If anyone doesn't answer the researchers, tell me. The care and the control arrive in the same sentence.",
    choices: [
      { text: "Ask DD what he expected to do if someone refused you.", next: "dd_instructs_answers" },
      { text: "This moment is the data. Let it sit without unpacking it to him.", next: "end_the_gap" }
    ]
  },

  explain_civilian: {
    location: "Day 1 — Corridor",
    text: "You explain your research to one of the younger personnel. Emotional labor — the management of feeling as professional duty. He listens. Then: <em>'Toh aap yahan aa ke hume samjhoge?'</em> So you have come here to understand us. It is not hostile. It is genuinely curious. And somewhere in it is the question you will keep turning over: can you understand something you have not lived? You have frameworks for this question. Standing here, the frameworks feel thin.",
    choices: [
      { text: "Push through. Take the question to DD — he has been thinking about it longer than you.", next: "dd_instructs_answers" },
      { text: "Accept the frame. This inaccessibility is also a finding.", next: "end_complicit" }
    ]
  },

  dd_instructs_answers: {
    location: "Day 2 — DD's Office",
    text: "You ask DD about the instruction he gave — if anyone doesn't answer, tell me. He pauses. <em>'Unhe darr nahi hona chahiye.'</em> They shouldn't be afraid. He means it as protection. But you are sitting in a system where getting leave requires a hierarchy of interviews, where silence reads as insubordination, where a senior officer's question cannot go unanswered. The instruction was meant to open doors for you. You are not sure it didn't also close them for someone else.",
    choices: [
      { text: "Ask what kind of answer you would receive from someone ordered to answer you.", next: "end_moral_dissonance" },
      { text: "Let it be. The irony is the finding. Note it without comment.", next: "end_the_gap" }
    ]
  },

  // ── BRANCH: DD INFORMAL ──────────────────────────────────────────────────

  dd_informal: {
    location: "Day 1 — DD's Office, Morning",
    text: "You arrive early. DD is on the phone with his wife — parent-teacher meeting, their son's math score, a five on a test. He doesn't lower his voice when you enter. Ganpat is already in the room; he is almost always in this room. You notice the office before the man: no trophies, a designation board, two or three files. The actual work. He asks where you are from. You say JNU. He says he always wanted to study there. He took the entrance exam once, knowing he wouldn't get in. <em>This is how he begins to trust you.</em>",
    choices: [
      { text: "He mentioned Op Sindoor on the phone. Ask about it.", next: "op_sindoor_medals" },
      { text: "Ask what he actually wanted to do before the BSF made him what he is.", next: "dd_creativity" }
    ]
  },

  op_sindoor_medals: {
    location: "Day 1 — DD's Office",
    text: "He shows you a photograph: two pillars at the Op Sindoor site, names engraved of those who died. One pillar lists army martyrs with the word <em>shaheed</em>. The other lists BSF personnel with rank and number. No word. Ganpat says quietly: <em>'Modiji aakar photo le gaye. Hame kya mila?'</em> Modi came and took photographs. What did we get? Then: the list on the wall of his colleague's office — 'list dekhi, hamne kaam kiya sir, par kahi naam nahi hai.' We worked. Our names are nowhere.",
    choices: [
      { text: "Stay here. Ask what the absence of the word does to a person over time.", next: "dd_shaheed" },
      { text: "Write it down exactly as it was said. This is what the study is for.", next: "end_shaheed" }
    ]
  },

  // ── BRANCH: MESS ─────────────────────────────────────────────────────────

  mess_arrival: {
    location: "Day 2 — The Mess",
    text: "Pale walls, watery floors. Personnel sit in groups or alone. No women visible — you saw women only at the gate. You sit for the focus group and immediately feel the arranged quality of it: the sense that certain answers have already been decided, that some things will be said and others will not. One man served in Op Sindoor, nineteen years. Another, of different rank, loses interest halfway through and you notice but do not name it. <em>The interview has already been shaped by the room before you asked a question.</em>",
    choices: [
      { text: "After the session, one man from Kerala stays at his table. Go sit with him.", next: "kerala_guy" },
      { text: "Work with what the focus group gave you. Follow the official thread.", next: "focus_group" }
    ]
  },

  kerala_guy: {
    location: "Day 2 — The Mess",
    text: "He was posted at Parliament until 2017. He shows you photographs on his phone — the building, the uniform, the respect. <em>'Wahan par itna respect tha mera — log pair chute the.'</em> People touched his feet. He keeps scrolling. His body is restless, head moving slowly in a no. When you ask how things are here his face changes: <em>'Koi baat karne wala nahi hai.'</em> Nobody to talk to. He gives his banana to your colleague. Suddenly: <em>'Meri beti se baat karoge? Ruko — main karaata hun.'</em>",
    choices: [
      { text: "Stay. Let him show you the pictures. Let him call his daughter.", next: "kerala_daughter" },
      { text: "You cannot be what he needs right now. But note what that need tells you.", next: "end_catharsis_bsf" }
    ]
  },

  kerala_daughter: {
    location: "Day 2 — The Mess",
    text: "She speaks briefly on the phone. He watches your face the whole time, looking for confirmation that she is real to you — that his life outside this canteen exists and matters. The Blue Shirt Guy comes and sits beside your colleague, watching. The Kerala man doesn't stop. He keeps the conversation going past its natural end. The isolation here is not only geographic. It is the isolation of being perceived only as a rank and a posting, never as the father of a daughter who studied in Munirka.",
    choices: [
      { text: "Stay until he is finished. The research can wait.", next: "end_catharsis_bsf" },
      { text: "Ask what made Parliament different — follow the thread of recognition.", next: "end_inversion" }
    ]
  },

  focus_group: {
    location: "Day 2 — The Mess",
    text: "The answers arrive quickly and identically: <em>fauji hai, bulaya hai, toh jaana padega.</em> Soldier, called, must go. Family stress? <em>'Family walon ko sab theek hai bolna padta hai — unhe thodi hi bata sakte hain.'</em> You have to tell the family everything is fine. You can't actually tell them. These are not evasions — they are settled conclusions of people who have thought about this for years and arrived at acceptance. The hard part is that acceptance is also a finding.",
    choices: [
      { text: "Press deeper on the family line. Something lives underneath the acceptance.", next: "family_stress" },
      { text: "Note the answers exactly as given. The official version is part of the data.", next: "mechanized_answers" }
    ]
  },

  family_stress: {
    location: "Day 2 — The Mess",
    text: "One of them says: <em>'Family se zyada BSF hamara ghar hai.'</em> The BSF is more home than home. Another: <em>'Ghar se aane ke do-teen din baad aati hai bachon ki yaad — phir bhool jaate hain.'</em> The memory of children fades after two or three days. You hold the sentence. It is not callousness — it is survival. A man stationed at the border who cannot forget his children cannot do the job. The forgetting is a professional requirement that nobody in the rule book names.",
    choices: [
      { text: "Ask about the buddy system. Is it filling what home cannot?", next: "buddy_surveillance" },
      { text: "Let the sentence end the interview. It has said everything.", next: "end_the_gap" }
    ]
  },

  buddy_surveillance: {
    location: "Day 2 — Corridor",
    text: "The buddy system: every personnel assigned to another, care and accountability built into the pairing. But DD mentioned, matter-of-factly, that a buddy who spots distress reports it upward. You think about this. The system designed to hold someone together is also the system that monitors them. The buddy is a caregiver and a surveillance node simultaneously. Nobody uses either of those words. It is simply understood. <em>The care and control duality is built into the friendship itself.</em>",
    choices: [
      { text: "This is the structure made visible. It is the study's most important single finding.", next: "end_moral_dissonance" },
      { text: "Naming it aloud in the field could close access. Record it. Move on.", next: "end_complicit" }
    ]
  },

  mechanized_answers: {
    location: "Day 2 — Reviewing Notes",
    text: "Transcribing the focus group, the answers read like a report someone else wrote. Identical phrases across different people. The youngest in the group said he goes to sleep immediately after returning from duty — <em>'Sochne ka time hi nahi milta.'</em> No time to think. At first this sounds like a coping mechanism. Then it sounds like the absence of one. You are not sure which reading is more honest. DD mentioned Yoga Day earlier. Something about it is still sitting with you.",
    choices: [
      { text: "Go to DD and ask him to tell the Yoga Day story in full.", next: "yoga_day_inversion" },
      { text: "The data is clean. The methodology worked. Proceed.", next: "end_sanctioned" }
    ]
  },

  yoga_day_inversion: {
    location: "Day 2 — DD's Office",
    text: "DD tells it with a tired laugh: Yoga Day, June 21st. The event designed for mental health. At 2am he and his team were going house to house waking civilians to bring them to the event — because the photographs needed to show civilian participation. <em>'Jo activity stress khatam karne ke liye hoti hai, woh bhi hamare liye stressful ho gayi.'</em> The activity designed to relieve stress had become, for them, a source of it. Performing wellness for an audience that was also, separately, being performed at.",
    choices: [
      { text: "Ask what they were supposed to feel during the yoga. Document the inversion exactly.", next: "end_rupture" },
      { text: "This is where critique and empathy must coexist. Hold both without resolving them.", next: "end_moral_dissonance" }
    ]
  },

  // ── BRANCH: METHODOLOGY DOUBT ────────────────────────────────────────────

  methodology_doubt: {
    location: "Day 1 — Before Entry",
    text: "You look at your interview guide. Structured questions on emotional management, coping strategies, workplace relationships. You wrote them in an office far from here. The institution you are entering has controlled your access, selected your interviewees, and escorted you through a gate where your name was registered by personnel who were not asked if they wanted you here. The sample is curated. The setting is staged. You knew this intellectually. <em>You are only now feeling what it means.</em>",
    choices: [
      { text: "Enter knowing the curated sample is itself data — evidence of how the institution represents itself.", next: "mishra_encounter" },
      { text: "Explain your methodology honestly to the first person you meet. See what happens.", next: "explain_civilian" }
    ]
  },

  mishra_encounter: {
    location: "Day 1 — Corridor",
    text: "He enters and the register shifts immediately: <em>'Kaun hai yeh log. Kya kar rahe hain. Emotions samajhne ke liye wardi pehenni padti hai. Civilians ko kya samajh aayega. Yeh kya faaltu bacho jaisa sawal lekar aaye hain.'</em> Who are these people. Wear the uniform if you want to understand emotions. What would civilians know. Your questions are childish. He leaves within minutes. You are left with the shape of his contempt: precise, fast, and — underneath — possibly the most honest thing said to you today.",
    choices: [
      { text: "Reframe the encounter. This was not a failed interview — it was an interview about something else.", next: "rupture_as_data" },
      { text: "He was right. You cannot fully understand this from outside. That is also a finding.", next: "end_civilian" }
    ]
  },

  rupture_as_data: {
    location: "Day 1 — After the Encounter",
    text: "You sit with what just happened. Mishra's hostility named the very thing your research is about: the belief that civilian understanding is structurally impossible, that knowledge of this life requires living it. His dismissal is evidence of how the institution defends itself from outside inquiry. He policed the boundary between the knowable and the unknowable, between the uniform and the civilian. <em>The rupture is not a failure of methodology. The rupture is the methodology working perfectly on its own subject.</em>",
    choices: [
      { text: "Write it as the first finding. The hostility is the data.", next: "end_rupture" },
      { text: "Ask what it means that you understand this — and could not have said it to his face.", next: "end_moral_dissonance" }
    ]
  },

  // ── SHARED SCENES ────────────────────────────────────────────────────────

  dd_opening: {
    location: "Day 1 — DD's Office",
    text: "DD's office is different from the CO's. No trophies. A designation board. A few files. He talks openly — more than you expected. He talks about managing the battalion, about counselling distressed personnel by inventing stories they can hold onto: <em>'Main unhe aisi baatein bata deta hoon jo maine sooch ke banaayi hain. Fark nahi padta — agar unhe sukoon mile toh.'</em> Fabricated comfort. What matters is they feel less alone. You notice he is also, right now, managing your impression of him.",
    choices: [
      { text: "Follow the thread about recognition — Op Sindoor, the medals, the army comparison.", next: "dd_army_comparison" },
      { text: "Ask what he actually wants. Not for the force. For himself.", next: "dd_creativity" }
    ]
  },

  dd_army_comparison: {
    location: "Day 1 — DD's Office",
    text: "He and Ganpat come alive on this. BSF led the pathways in Op Sindoor — they were there first, they navigated for the army. And when the rewards came — medals, names on pillars, national mourning — BSF was absent. DD says it plainly: <em>'Army wale shaheed hote hain. BSF wale sirf dead hote hain.'</em> Army personnel die as martyrs. BSF personnel just die. No public feeling-rule assigned. No official grief. Their families mourn in private. Ganpat shows you the pillar photograph on his phone. The absence of names.",
    choices: [
      { text: "Stay with this. Ask what it does to a person to be denied that word over a career.", next: "dd_shaheed" },
      { text: "Ask about the pension — how the state broke the other contract as well.", next: "pension_betrayal" }
    ]
  },

  dd_shaheed: {
    location: "Day 1 — DD's Office",
    text: "<em>Shaheed</em> is not only a word, DD says. It is a feeling-rule — when the state uses it, it instructs the public how to grieve, whose death belongs to everyone. BSF deaths are not assigned a feeling-rule. Their sacrifice is privatised and de-legitimised by the very state they served. He says this without shouting. That restraint is its own form of emotional labor — the performance of composure in the face of something that warrants rage. It is the most controlled anger you have heard in three days.",
    choices: [
      { text: "Write it exactly as he said it. This is what the study is for.", next: "end_shaheed" },
      { text: "Ask what keeps someone committed to an institution that has decided not to mourn them.", next: "end_broken_contract" }
    ]
  },

  pension_betrayal: {
    location: "Day 1 — DD's Office",
    text: "Ganpat: <em>'NPS ka zikr na karna aur sirf UPS ke fayde batana — yeh toh hamare jawaanon ke saath dhoka hai.'</em> Don't mention NPS, just list UPS benefits — that is deception of our jawans. The old pension was the social contract: give us your youth, your family life, your safety — we guarantee your dignity afterward. NPS is market-dependent. It shifts the risk onto the people least able to bear it. He says this with the quiet anger of someone who has been deciding whether to say it for years.",
    choices: [
      { text: "Ask who they can actually tell this to — who has the power to change it.", next: "end_broken_contract" },
      { text: "Structural critique is outside your research scope. Note it and move on.", next: "end_complicit" }
    ]
  },

  dd_creativity: {
    location: "Day 2 — End of Last Session",
    text: "Near the end of your final day, Ganpat arrives with annotated books — underlined, dog-eared, with sketches in the margins: a hammer breaking a stone labelled 'talent,' quotes about saying no. DD asks him to show you. Then shows you something from his own notebook: a quote he has written to himself. <em>'I want a job where I can show my creativity.'</em> He laughs when you read it aloud. The laugh is mixed with something that has not been acted on. Yesterday he told you: <em>fauz mein ghode ko liya jaata hai aur gadha banaaya jaata hai.</em> He wrote the opposite in his private pages.",
    choices: [
      { text: "Ask about the books. What does it mean to keep annotating when nobody asks you to?", next: "ganpat_books" },
      { text: "The quote is the finding. Everything else has been context for this moment.", next: "end_inversion" }
    ]
  },

  ganpat_books: {
    location: "Day 2 — DD's Office",
    text: "Ganpat's book has a sketch of a hammer breaking a stone. Quotes about limits. He tells you about the day he was overwhelmed — too much work, alone at the post, a colleague found him and held him as he held on. A hospital visit. He says it matter-of-factly. At the end of your last session, DD says: <em>'Hume aapse milkar bahot achha laga. Finally humne kisi ko bataya ki kya ho raha hai hamare saath.'</em> Finally we told someone what is happening to us. You were not expecting to be that person.",
    choices: [
      { text: "Let this be the ending. You became the space they had no other way to fill.", next: "end_catharsis_bsf" },
      { text: "Ask: who else should be listening to this — and why aren't they?", next: "end_moral_dissonance" }
    ]
  },

  // ── ENDINGS ──────────────────────────────────────────────────────────────

  end_sanctioned: {
    ending: true,
    type: "Ending — The Official Version",
    title: "You produced what the institution wanted.",
    body: "Your access remained intact. The CO approved of the framing. The paper will be received well. At a debrief, someone asks whether the findings surprised you. You say yes, because the protocol requires it. On the train back you think about Yoga Day — the event designed to relieve stress becoming, for the personnel, a source of it. You did not put that in the paper. The sanctioned version is not a lie. It is a selection.",
    note: '"The sanctioned version is not a lie. It is a selection. The question is what was cut, and whose decision that was."'
  },

  end_the_gap: {
    ending: true,
    type: "Ending — Two Minutes Before the Escort",
    title: "What was said between the scheduled moments.",
    body: "There were moments outside the formal interviews — in corridors, at the mess table, on the walk to the quarter office — when something was said that could not have been said inside a room. The two minutes before the escort arrived. Ganpat's comment about NPS as he was leaving. The Kerala man calling his daughter. These are not in your transcript. They are what the transcript was built to approach but could not hold. You will spend a long time deciding what to do with them.",
    note: '"The most important data is always what was said sideways — between the official moments, in the gaps the schedule did not account for."'
  },

  end_complicit: {
    ending: true,
    type: "Ending — Complicity",
    title: "You wrote what was safe to write.",
    body: "You maintained access. The paper is carefully framed, appropriately hedged, likely to be cited. You left out the pension conversation, the pillar photograph, DD's instruction to subordinates to answer you. Too sensitive, too institutional, too likely to close doors for the researcher who comes next. You told yourself that was the ethical calculation. On some days you believe it.",
    note: '"The researcher who protects access at all costs will eventually find they are protecting the institution instead."'
  },

  end_rupture: {
    ending: true,
    type: "Ending — The Rupture",
    title: "The hostile interview was the most honest one.",
    body: "Mishra told you in four sentences what the cooperative interviews took three days to approach: that your presence was an act of interpretation, that the uniform is epistemological, that to study feeling from outside feeling is a structural contradiction. He was not wrong. Your most productive analysis came from sitting with his contempt rather than defending yourself against it. The rupture was not a methodological failure. The rupture was the methodology working correctly on its own subject.",
    note: '"Moments of hostility in the field are not obstacles to be managed. They are the institution speaking without its managed voice."'
  },

  end_catharsis_bsf: {
    ending: true,
    type: "Ending — The Catharsis",
    title: "You became the space they had no other way to fill.",
    body: "At the end of the last session DD said: 'Finally humne kisi ko bataya ki kya ho raha hai hamare saath.' Finally we told someone what is happening to us. You had not expected to be that person. Your research was designed to produce data. What it also produced was a room — a few days — in which people professionally required to manage their emotions could, briefly, not manage them. That is not what you came to give. It may be the most important thing you left behind.",
    note: '"The field site is not a neutral location. The researcher\'s presence creates something that was not there before their arrival."'
  },

  end_inversion: {
    ending: true,
    type: "Ending — The Inversion",
    title: "You came to study their labor. They studied your freedom.",
    body: "DD wanted to study at JNU. He took the entrance exam once, knowing he wouldn't pass. Ganpat's notebook had sketches of hammers breaking stones and quotes about saying no — the private vocabulary of a man who has learned to say yes. The Kerala man showed you Parliament photographs like evidence of a life exchanged for this one. They were researching you in their way — what it looked like to do work that left room for your own thought, your own creativity, your own refusal.",
    note: '"The researcher is also a mirror. What the subject sees in that mirror is data the researcher rarely thinks to collect."'
  },

  end_shaheed: {
    ending: true,
    type: "Ending — The Word",
    title: "You carry a word that was denied to them.",
    body: "Shaheed. The state uses it to nationalize grief — to instruct the public how to feel, whose death belongs to everyone. BSF deaths do not receive this instruction. Families mourn privately. Names appear on different pillars in a different register without the weight of the word. You write it in your paper. You cite it correctly. You explain the feeling-rule framework. And you know, as you write, that the paper will be read in institutions where the distinction between shaheed and dead will seem like a semantic observation. It is not semantic. It is the entire argument.",
    note: '"A word withheld by the state is not an administrative detail. It is a political decision about whose grief counts as national and whose remains private."'
  },

  end_broken_contract: {
    ending: true,
    type: "Ending — The Broken Contract",
    title: "The state broke its promise. Your paper documents a smaller version of the same.",
    body: "The social contract was clear: give us your youth, your family life, your safety — we guarantee your dignity afterward. NPS dismantled that. Op Sindoor's medal ceremony dismantled part of it too. What you were promised — access, honest data, cooperation — was also mediated and curated and managed. You received the version the institution could afford to give you. You documented it as carefully as you could. Both betrayals are smaller than the one Ganpat described. Neither is nothing.",
    note: '"Institutions manage their own representation. The researcher\'s job is not to expose this — it is to notice the management and be honest about what they could and couldn\'t see through it."'
  },

  end_civilian: {
    ending: true,
    type: "Ending — The Limit",
    title: "Mishra was right. You couldn't fully understand. That is also a finding.",
    body: "He said: emotions samajhne ke liye wardi pehenni padti hai. To understand these emotions you need to wear the uniform. You did not wear the uniform. You sat across from people for three days with a recorder and a consent form and academic frameworks built far from the Punjab border. Your paper will be read. It will be useful. And it will contain a gap that no methodology can close — the gap between knowing about and knowing from. Naming that gap honestly is the most rigorous thing you can do with it.",
    note: '"Positionality is not a problem to be solved. It is a condition to be documented — precisely, without self-pity, as part of the method."'
  },

  end_moral_dissonance: {
    ending: true,
    type: "Ending — They Know",
    title: "They know the system is wrong. They stay anyway.",
    body: "Ganpat said: 'Hume aisa feel hota hai hum gadhe hain.' We feel like donkeys. DD wrote in his notebook that he wants a job where he can show his creativity. The samosa-wala SI said the force needed real human connection, not formal interviews — and then submitted to a formal interview. The Khalsa college boy runs a side business because the pension can't be trusted. They know. They are not deceived. They have done the calculation and decided — or had decided for them — that staying is the available option. Your paper will call this structural. They call it Tuesday.",
    note: '"The most difficult finding is the one that cannot be fixed by the analysis that produced it. Document it anyway."'
  }

};
