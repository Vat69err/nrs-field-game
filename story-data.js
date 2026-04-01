// ─────────────────────────────────────────────────────────────────────────────
// NRS Field Game — Story Data
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW TO ADD A NEW SCENE:
//
//   my_new_scene: {
//     location: "Day 2 — Somewhere",
//     text: "What happens. Use <em>text</em> for italics.",
//     choices: [
//       { text: "What the player chooses.", next: "some_existing_scene" },
//       { text: "Another choice.",          next: "another_scene" }
//     ]
//   },
//
// HOW TO ADD A NEW ENDING:
//
//   end_my_ending: {
//     ending: true,
//     type:  "Ending — Short Label",
//     title: "One-line title.",
//     body:  "Two or three sentences. What this path means.",
//     note:  '"A closing quote."'
//   },
//
// AFTER EDITING: run  node validate.js  to check all links.
// ─────────────────────────────────────────────────────────────────────────────

const story = {

  // ── OPENING ──────────────────────────────────────────────────────────────

  start: {
    location: "Day 1 — The Village",
    text: "You have arrived in a village in rural Uttar Pradesh to begin fieldwork. Your research is on women's unpaid labor in micro-enterprises. Your host introduces you to the women willing to speak with you. You have one afternoon — and the knowledge, already, that you do not know enough.",
    choices: [
      { text: "Sit with the eldest woman. Let her speak first, without questions.", next: "listen" },
      { text: "Open your notebook and begin a structured interview.", next: "structured" },
      { text: "Ask if you can simply watch them work for a while.", next: "observe" },
      { text: "Your host mentions another woman waiting in the next room, unscheduled. Ask to meet her.", next: "hemlata_intro" }
    ]
  },

  // ── BRANCH: LISTEN ───────────────────────────────────────────────────────

  listen: {
    location: "Day 1 — Afternoon",
    text: "She speaks for forty minutes without interruption. Her story moves between her daughter's wedding, a failed goat-rearing venture, and the price of dal. You are not sure what is data and what is not. <em>Maybe that is the point.</em>",
    choices: [
      { text: "Follow the thread about the goats — press deeper.", next: "goats_deep" },
      { text: "Let the conversation end naturally. Write your notes alone.", next: "write_alone" }
    ]
  },

  goats_deep: {
    location: "Day 2 — Early Morning",
    text: "You return and ask about the goats. She pauses. Then tells you about the microfinance group — the Tuesday meetings, the shame when payments were missed, the way the other women looked at her. This is not in your research proposal. She holds out her hands, almost reflexively. You see the calluses before she says anything about them.",
    choices: [
      { text: "Ask about the market — she mentioned she is going tomorrow.", next: "market_morning" },
      { text: "Ask about the hands. That is the story she was about to tell.", next: "the_hands" }
    ]
  },

  write_alone: {
    location: "Day 1 — Night",
    text: "You fill six pages. Her voice is still in your head. You are not sure what to do with a story about a wedding and dal prices. Then: a knock. She has brought tea, uninvited. Outside, the market is dark. Tomorrow she will be there before the vendors set up.",
    choices: [
      { text: "Invite her in. There is something more she wants to say.", next: "the_thirteen_years" },
      { text: "Go to the market before her tomorrow. See it first.", next: "the_competitor" }
    ]
  },

  // ── BRANCH: STRUCTURED ───────────────────────────────────────────────────

  structured: {
    location: "Day 1 — Afternoon",
    text: "You move through your questions. The answers are short, polite. Correct. You feel a growing distance — like speaking through glass. The youngest woman glances at your notebook and falls silent.",
    choices: [
      { text: "Close the notebook. Ask: 'What would you want me to understand?'", next: "pivot" },
      { text: "Continue — the data will speak for itself.", next: "by_the_book" },
      { text: "Set down the notebook and explain what your research is actually for.", next: "explain_methodology" }
    ]
  },

  pivot: {
    location: "Day 1 — Afternoon",
    text: "She looks at you for a long time. Then tells you about a government scheme she applied for — the officer who asked for a bribe she couldn't pay, how she told no one. <em>You had not thought to ask about the state.</em> Then: <em>'Aap aate hain, dekhte hain, jaate hain.'</em> You come, you look, you leave. She says it without malice. Then she asks if you want to see where she actually works.",
    choices: [
      { text: "Say yes. Go with her.", next: "the_godown" },
      { text: "Ask what she has seen other researchers do with what they found here.", next: "the_fraudsters" }
    ]
  },

  by_the_book: {
    location: "Day 1 — Evening",
    text: "You have clean data. Codeable answers. You return to your notes and they read like a report someone else wrote, about people you never quite met. The youngest woman's silence fills the margins. That night, reviewing your transcript, your host says something in passing you half-caught — something about the early months, a choice she made, a refusal.",
    choices: [
      { text: "Go back tomorrow. Find out what you missed.", next: "the_niqab" },
      { text: "The methodology is sound. Proceed.", next: "end_controlled" }
    ]
  },

  explain_methodology: {
    location: "Day 1 — Afternoon",
    text: "You explain informed consent, your institution, your research question. She listens carefully. Then: <em>'Aap mahilaon ke bina mazuri ke kaam ka adhyayan kar rahe hain?'</em> You are studying women's unpaid labor? Yes. <em>'Aur aap humein paisa nahi denge.'</em> And you won't pay us. It is not hostile. It is accurate. The youngest woman watches you closely. You have thirty seconds to say something true.",
    choices: [
      { text: "Acknowledge it directly. Ask how she would like to be compensated.", next: "end_expansive" },
      { text: "Explain that academic research works differently. Offer an acknowledgement in the paper.", next: "researcher_mirror" }
    ]
  },

  // ── BRANCH: OBSERVE ──────────────────────────────────────────────────────

  observe: {
    location: "Day 1 — The Courtyard",
    text: "You sit in the corner. They work — sorting, stitching, feeding a child, arguing over thread. Nobody explains anything. After an hour, one woman looks at you and laughs. <em>'You look lost,'</em> she says.",
    choices: [
      { text: "Laugh with her. Admit you are lost.", next: "admit_lost" },
      { text: "Say you are learning. Ask if she'll explain what they're making.", next: "ask_explain" }
    ]
  },

  admit_lost: {
    location: "Day 1 — Courtyard",
    text: "<em>'Pehle sab aise hi hote hain.'</em> Everyone is, at first. She makes space beside her and shows you how to sort the threads by feel, not color. You work beside them for the rest of the afternoon, learning nothing you expected. At dusk, someone knocks at the gate — three women, forty kilometres away, who have heard something about this place.",
    choices: [
      { text: "Stay. Ask about the boy doing homework in the corner.", next: "the_children" },
      { text: "Answer the door. Find out who has come this far and why.", next: "women_arrive" }
    ]
  },

  ask_explain: {
    location: "Day 1 — Courtyard",
    text: "She explains — but the explanation is for you, shaped by what she thinks you want to hear. You notice the performance of it. You wonder: <em>does every interview do this?</em> You can't stop thinking about the question.",
    choices: [
      { text: "Ask her: 'What would you not explain to a researcher?'", next: "the_question" },
      { text: "Accept the explanation. It is still data.", next: "end_disciplined" }
    ]
  },

  // ── BRANCH: HEMLATA ───────────────────────────────────────────────────────

  hemlata_intro: {
    location: "Day 1 — A Second Room",
    text: "She is thirty-five. She married in 2012, the same year she failed her 10th class exam — her fiancé had told her to stop studying. She has three children: twelve, seven, five. She teaches them their homework herself after school. She wants to open a stationery shop opposite the school gates. She knows the school timetable. She has priced the inventory. She has been watching the gap for months. <em>She is not asking for anything. She is thinking aloud, and you happened to arrive.</em>",
    choices: [
      { text: "Ask about the exam she failed. That is not where she started.", next: "hemlata_naukri" },
      { text: "Ask about the stationery shop. That is where she wants to go.", next: "hemlata_shop" }
    ]
  },

  hemlata_naukri: {
    location: "Day 1 — Afternoon",
    text: "The doctor at the hospital offered her a path: finish your 12th, he said, I will file your ANM form. A government nursing post. She travelled from Kheda to register for school. Her husband turned her back at the door. <em>'Naukri karke kya karna hai'</em> — what's the point of working. She says <em>'naukri lag jati meri'</em> in a tone that contains thirteen years of having said that sentence to herself. The tense is past. Something in her voice has not resolved.",
    choices: [
      { text: "Ask: does she still think about it?", next: "hemlata_still" },
      { text: "Ask: has he changed since then?", next: "hemlata_change" }
    ]
  },

  hemlata_still: {
    location: "Day 1 — Afternoon",
    text: "<em>'Sochne se kya hoga.'</em> Thinking about it won't change it. She sat for the 10th exam in 2012, the same year she married. She failed. She says this flatly. You do not know if she would have passed had she been allowed to study. You don't know if that is even the right question. What you know: there is a woman here who was assessed for a government post at twenty-two, who has spent thirteen years cooking, cleaning, teaching her children their homework, and who has already identified and priced an untapped market two hundred metres from her front door.",
    choices: [
      { text: "Let the silence hold. Write it down later.", next: "end_witness" },
      { text: "Ask what she would do if she could start over.", next: "hemlata_over" }
    ]
  },

  hemlata_over: {
    location: "Day 1 — Afternoon",
    text: "<em>'Padhai karti,'</em> she says. I would study. Then: <em>'lekin mere bacchon ko ye problem nahi hogi.'</em> She lists them — Yuvraj, twelve; Bhanupriya, seven; Naina, five — and says she teaches each of them for an hour after school herself. <em>'Jo mujhe nahi mila — woh unko doongi.'</em> What I wasn't given, I'll give to them. She is not angry. She has converted thirteen years of something into a plan for her children, and she is holding it without dropping it.",
    choices: [
      { text: "This is your study. Ask if you can come back tomorrow.", next: "end_expansive" },
      { text: "Ask: what about you — not the children — what do you want?", next: "hemlata_herself" }
    ]
  },

  hemlata_herself: {
    location: "Day 1 — Late Afternoon",
    text: "The question surprises her. She answers sideways: the stationery shop would be for her. She would sit in it herself, after the housework. She could earn — and it would be visible, it would have a counter, it would face the school. <em>A shop is proof,</em> you think. Proof she was here. Proof she worked. Proof that cannot be retracted by a refusal that happened thirteen years ago.",
    choices: [
      { text: "Ask who she needs that proof from.", next: "end_immersive" },
      { text: "This is the center. Stop asking questions.", next: "end_witness" }
    ]
  },

  hemlata_change: {
    location: "Day 1 — Afternoon",
    text: "After the children, she says. He changed after the children. He no longer blocks — he says yes, you can do it, he gives her money to run the house, he trusts her with it. But: he asks his friends for business advice. He does not ask her. Someone in the room makes a sound that is not quite a laugh. <em>You note: she is describing a man who has become supportive without becoming equal. And she knows the difference.</em>",
    choices: [
      { text: "Ask: does she think he knows the difference too?", next: "hemlata_knows" },
      { text: "Let her lead. Ask what she wants to show you.", next: "hemlata_show" }
    ]
  },

  hemlata_knows: {
    location: "Day 1 — Afternoon",
    text: "She smiles. <em>'Woh sabse salah leta hai — unse nahi jinhone socha hai.'</em> He asks everyone except the person who has done the thinking. There is a phrase in your field notes already: symbolic support. You have just watched it speak. Then she turns it: <em>'Aap bataiye — dukaan chalegi?'</em> She wants a view from outside, one that won't be filtered through a voice that already decided.",
    choices: [
      { text: "Answer honestly. Tell her what you see.", next: "hemlata_honest" },
      { text: "Turn it back: what do you think? And mean it.", next: "end_expansive" }
    ]
  },

  hemlata_honest: {
    location: "Day 1 — Afternoon",
    text: "You tell her: there is no reason you can see why it won't work. The school is large. She has identified the gap. She has a plan for capital without a loan. The obstacle is not logistical. She looks at you for a moment. <em>'Haan.'</em> Just that. Yes. You realize: she already knew all of this. She needed someone to say it back so she could hear it spoken aloud in a room, by a person who was not his.",
    choices: [
      { text: "Ask if she knows the woman you came to study today — the one who started from ₹350.", next: "end_two_stories" },
      { text: "This is what your study is for. Let it be enough.", next: "end_expansive" }
    ]
  },

  hemlata_show: {
    location: "Day 1 — Afternoon",
    text: "She takes you to the window. Two hundred metres away: the school gate. The afternoon bell rings while you watch. Children pour out. Vendors appear, mothers wait, a stationery seller does three transactions in ninety seconds. She says: <em>'Teen sau bacche, roz. Kab nahi chahiye stationery?'</em> Three hundred children, every day. She is not making a proposal. She has already built this business in her mind. You are looking at the plans.",
    choices: [
      { text: "Ask how long she has been watching this gate.", next: "the_codes" },
      { text: "Nothing more to ask. She is her own evidence.", next: "end_witness" }
    ]
  },

  hemlata_shop: {
    location: "Day 1 — Afternoon",
    text: "She knows the school timetable. She has priced the stationery. She knows which items move and which don't — she has been watching the existing shops for months. She has saved some money from the household budget, carefully, slowly, without making it visible. <em>'Thoda thoda thoda thoda,'</em> she says — a little, a little, a little, a little. You realize: she has been doing research too. For months. On her own business. In her own house.",
    choices: [
      { text: "Ask where she keeps the savings.", next: "hemlata_savings" },
      { text: "Ask who knows she has been planning this.", next: "hemlata_secret" }
    ]
  },

  hemlata_savings: {
    location: "Day 1 — Afternoon",
    text: "From what her husband gives her to run the house, she sets aside what she can. No loan — she doesn't want one. <em>'Jaisa hoga waisa thoda thoda laake daalungi'</em> — however it comes, she'll do it a little at a time. There is a word in the development literature for what she is describing. You realize the word doesn't capture it. What she is describing is a form of patience quieter than ambition, steadier than hope.",
    choices: [
      { text: "Ask when she thinks she'll have enough to begin.", next: "end_expansive" },
      { text: "Document it and move on. You have a schedule.", next: "end_disciplined" }
    ]
  },

  hemlata_secret: {
    location: "Day 1 — Late Afternoon",
    text: "She looks at the door before answering. <em>'Pehle kisi ko nahi bataya tha.'</em> She had not told anyone — not her husband, not her in-laws. She has been deciding quietly for a long time. And then, without being asked, she tells you something else: there was a government nursing job once, offered by a doctor at the hospital. Her husband said no. She is not connecting the two stories for you. But she has told you both. <em>The stationery shop is not a small plan. It is a thirteen-year answer.</em>",
    choices: [
      { text: "Ask about the nursing job.", next: "hemlata_naukri" },
      { text: "Let thirteen years sit in the room between you.", next: "end_immersive" }
    ]
  },

  the_codes: {
    location: "Day 1 — Evening",
    text: "Back at your notes, transcribing what she said, you write almost automatically: <em>symbolic support. Double burden. Ensuring gender norms are met.</em> You look at the phrases. Accurate. And also: translations that lose something. She never said 'double burden.' She said: <em>'khana banana, bacchon ko padhana, phir dukaan mein baith jaana.'</em> Cook, teach the children, then sit in the shop. You turned that sentence into a finding. She turned it into a plan for Tuesday.",
    choices: [
      { text: "Add a note: this coding is incomplete. Return tomorrow with better questions.", next: "end_expansive" },
      { text: "The codes are the method. The method is the study.", next: "end_annotation" }
    ]
  },

  // ── UP WOMAN: DAY 2–4 ────────────────────────────────────────────────────

  market_morning: {
    location: "Day 2 — Before Dawn",
    text: "She loads boxes of incense sticks into a borrowed vehicle in the dark. She started this from ₹350 — a training fee, paid in full. At the first shop, the owner turns his back when he sees her approach. She does not slow. She sets the sticks on the counter without permission and says: <em>'Ek baar haath mein lo. Sirf khushbu lo.'</em> Hold it once. Just smell it once. You stand behind her. You cannot write and watch at the same time.",
    choices: [
      { text: "Hold back. This is her negotiation. Do not make yourself part of it.", next: "end_witness" },
      { text: "Step forward. Introduce yourself as a researcher. Your presence may help.", next: "market_intervene" }
    ]
  },

  market_intervene: {
    location: "Day 2 — The Market Counter",
    text: "The shopkeeper turns polite with you present. He places a small order. On the walk back she is quiet for a long time. Then: <em>'Jab aap jaayenge, woh wahi ho jaayenge jo the.'</em> When you leave, they will return to what they were. You had wanted to help. You did help. You must now decide what to write about a sale that happened because of your presence — in a study that was supposed to document hers.",
    choices: [
      { text: "Write it honestly — your role as a variable, the compromised scene.", next: "end_expansive" },
      { text: "Record the sale. She needed that order.", next: "end_disciplined" }
    ]
  },

  the_hands: {
    location: "Day 2 — Her Workspace",
    text: "She holds out her hands. The knuckles thickened, the skin hardened at the base of each finger. For six months, before the economics worked, she cut cardboard boxes by hand through the night for someone else — ₹25 per hundred boxes, learning the market from inside someone else's supply chain. <em>'Ye haath yaad rakhte hain woh waqt jab main apne liye nahi kamaati thi.'</em> These hands remember when I did not earn for myself. She is not complaining. She is giving you evidence.",
    choices: [
      { text: "Ask what those six months taught her that nothing else could.", next: "the_no_loan" },
      { text: "Write it down. The hands are the finding.", next: "end_witness" }
    ]
  },

  the_no_loan: {
    location: "Day 2 — Her Workspace",
    text: "She explains: ₹350 to ₹500. ₹500 to ₹5,000. ₹5,000 to ₹15,000. ₹15,000 to ₹30,000. Each time, reinvested everything. No loan. Officials came from the block, from the district, with schemes, subsidies, repayment windows. She sent them all away. <em>'Hafte mein business gir jaye aur tarikh na gire'</em> — if your business dips for a week and the repayment date doesn't, the debt doesn't care. Three years to reach ₹1.5 lakh. Your literature review says women micro-entrepreneurs lack access to capital. She has never lacked discipline.",
    choices: [
      { text: "Ask: could every woman do this — or does her path require something rare?", next: "the_rare_thing" },
      { text: "This complicates your framework. Sit with it.", next: "end_expansive" }
    ]
  },

  the_rare_thing: {
    location: "Day 2 — Her Workspace",
    text: "She thinks for a long time. <em>'Main aise ghar se aai hoon jahan kaafi tha. Mujhe pata tha kaafi kaisa lagta hai. Shayad isliye ruk sakti thi.'</em> I came from a house where there was enough. I knew what enough felt like. Maybe that is why I could wait. A woman who has never known enough doesn't know what she is waiting for — she only knows the emergency of the present. This is a harder sentence than anything in your proposal. It implicates something your methodology cannot hold.",
    choices: [
      { text: "Follow this wherever it leads. Your proposal can wait.", next: "end_expansive" },
      { text: "Your study is on enterprise barriers. This is psychology. File it separately.", next: "end_disciplined" }
    ]
  },

  the_competitor: {
    location: "Day 3 — The Market",
    text: "She tells you about the man with the pickup truck — came during Diwali, dumped identical goods at half her price, told her customers to switch. Most did, temporarily. She did not lower her price. She waited two months, nearly stopping. When his supply ran out, she was there. <em>'Uske paas ek sezon ka nuksan tha. Mere paas ek sezon ka grahak kho dene ki taakat thi.'</em> It was a question of whose season was longer. You ask who won. She looks at you as if the answer were obvious: <em>'Woh yahan nahi hai.'</em>",
    choices: [
      { text: "Ask how she knew she could outlast him.", next: "end_immersive" },
      { text: "Ask if every woman in her network could make that calculation.", next: "the_network" }
    ]
  },

  the_network: {
    location: "Day 3 — Her Doorstep",
    text: "She explains: a customer doesn't come from an advertisement. A customer comes from another customer who trusts you. You build the second from the first, the third from the second. She has customers who knock at midnight. She answers — not because she has to, but because that customer represents six others they haven't sent yet. <em>'Network mere phone mein nahi hai. Unke bharose mein hai.'</em> The network is in their trust. Your study was designed to measure outputs. It has no instrument for this.",
    choices: [
      { text: "Redesign around this. It is the whole structure.", next: "end_expansive" },
      { text: "Document it as social capital. The literature has a word for it.", next: "end_disciplined" }
    ]
  },

  women_arrive: {
    location: "Day 2 — Mid-afternoon",
    text: "Three women arrive while you are talking — from Chauri Chaura, forty kilometres. They heard about her through someone who heard through someone. She handles it without pausing your conversation: she asks what they can do, what they want to learn, gives them a specific day. They leave with a plan. You have just watched her run an intake process from her doorstep. <em>You realize: she was never only your subject.</em>",
    choices: [
      { text: "Ask if you can come back on the training day.", next: "the_training_day" },
      { text: "Note what you saw. Continue your interview.", next: "end_expansive" }
    ]
  },

  the_training_day: {
    location: "Day 4 — Neighbour Village",
    text: "You return on the day she named. She has set up in someone's courtyard. She teaches incense-stick rolling, packaging, pricing — and then something your methodology has no category for: she tells the women what it felt like the first time a shopkeeper refused her. <em>'Likh lo. Apne liye. Taaki pata rahe kitna laga.'</em> Write it down. Not for anyone else — so you know what it costs. She is building researchers. You are the one taking notes. At some point you realize you have not written anything for twenty minutes.",
    choices: [
      { text: "Put the pen down. This is her classroom, not your field site.", next: "end_solidarity" },
      { text: "Ask if you can document this for your study.", next: "end_expansive" }
    ]
  },

  the_fraudsters: {
    location: "Day 2 — Afternoon",
    text: "She warns you: after the lockdown, people came to villages with promises — training, schemes, a future for ₹2,000, ₹5,000. They took the fees and disappeared. Women who had saved for months lost it. <em>'Bharose mein aake diya tha.'</em> They gave it because they wanted to believe someone was helping. She tells you this directly — as context, or caution, or both. You understand she is also watching what kind of person you are becoming in this room.",
    choices: [
      { text: "Tell her precisely what your institution can and cannot promise.", next: "end_expansive" },
      { text: "Tell her your intentions are good. Hope it lands.", next: "end_controlled" }
    ]
  },

  the_rajyapal: {
    location: "Day 3 — Morning",
    text: "You ask about Raj Bhavan — the governor's office, 8th March, Lucknow. She got a call from a number she didn't recognize. She went. She describes the ceremony: <em>'VIP kursi unke liye thi jinhe bulaya gaya — jo sahab bahar khade the woh andar nahi ja sake.'</em> The seat was for the awarded; the officials stood outside. She laughs briefly. She doesn't know how her story reached the governor's desk. She keeps telling it to anyone who might do something with it. She looks at you steadily.",
    choices: [
      { text: "You are another person she is telling it to. Sit with that.", next: "end_testimony" },
      { text: "Ask what she wants done with it.", next: "end_infrastructure" }
    ]
  },

  researcher_mirror: {
    location: "Day 2 — End of Interview",
    text: "At the end, unprompted, she asks you a question. <em>'Aap kahan se aaye hain?'</em> You tell her. <em>'Ghar mein sab theek hai? Comfortable?'</em> Yes. <em>'To aap aisi cheez ka adhyayan kar rahe hain jo aapne kabhi nahi jeyi.'</em> So you are studying something you have not lived. It is not an accusation. It is curiosity, and an invitation to account for yourself the way she accounts for everything — precisely, without self-pity. Your field notes have no column for your own position.",
    choices: [
      { text: "Answer honestly. Add yourself to the data.", next: "end_reflexive" },
      { text: "Say: that is exactly why I need to learn from you. It is true, but it sidesteps.", next: "end_expansive" }
    ]
  },

  the_thirteen_years: {
    location: "Day 1 — Late Night",
    text: "She sits with her tea. She tells you: she married into this village in 2007, came from Bihar where her father managed a factory, where there were servants and plenty. She arrived to a home without rice. <em>'Thirteen years,'</em> she says. <em>'I was not doing nothing. I was watching. Deciding. Waiting for my children to be old enough. Waiting for a reason no one could argue with.'</em>",
    choices: [
      { text: "Ask: when the lockdown came — were you ready?", next: "the_thirteen_deep" },
      { text: "Say nothing. Let thirteen years sit in the room between you.", next: "end_immersive" }
    ]
  },

  the_thirteen_deep: {
    location: "Day 1 — Night",
    text: "<em>'Ready thi,'</em> she says. The lockdown took her husband's income overnight — sixty kilometres by electric rickshaw, every day, gone. It also gave her the permission she had never quite been offered. <em>'Buri baat hai,'</em> she says, almost to herself. <em>'Ek tabahi ke liye shukriya karna.'</em> It is a terrible thing, to be grateful for a disaster. Your pen has been still for twenty minutes.",
    choices: [
      { text: "Write it down. This is the study.", next: "end_expansive" },
      { text: "Ask about the Raj Bhavan invitation — how far has this story traveled?", next: "the_rajyapal" }
    ]
  },

  the_godown: {
    location: "Day 2 — Her Workspace",
    text: "Boxes floor to ceiling. A narrow path between stacks of incense, havan samagri, brooms. Last Diwali — unexpected rain. Three hundred boxes lost. Her children climbed on top of the merchandise to protect it. She says this without drama, as a logistical problem she has precisely identified. <em>'Mujhe kisi ke vishwas ki zaroorat nahi hai,'</em> she says. <em>'Mujhe godaam chahiye.'</em> I don't need someone to believe in me. I need somewhere to put my goods.",
    choices: [
      { text: "This is your most important finding. Write it with precision.", next: "end_infrastructure" },
      { text: "Ask: has she told this to the officials who keep coming to photograph her?", next: "the_godown_officials" }
    ]
  },

  the_godown_officials: {
    location: "Day 2 — Her Workspace",
    text: "She laughs — brief, tired. <em>'Aate hain. Photo lete hain. Kehte hain: bahut achha, bahut achha. Phir chale jaate hain.'</em> They come. They photograph. They say very good and leave. She is not bitter. She has moved past bitterness into efficiency: she tells anyone who asks, and hopes it reaches someone who can act. She looks at you steadily. You are the latest person she is hoping it will reach.",
    choices: [
      { text: "Tell her honestly what your research can and cannot do.", next: "end_expansive" },
      { text: "Tell her you will try. Mean it.", next: "end_infrastructure" }
    ]
  },

  the_niqab: {
    location: "Day 2 — Reviewing Your Notes",
    text: "Copying your transcript, your host mentions something you missed entirely: in the early months, a well-meaning woman told her to remove her niqab when visiting shops — it would help, she said. She refused. She kept her religious dress and kept walking into shops, week after week, until the shopkeepers stopped seeing the cloth and started seeing the product. <em>You had been writing and missed it.</em>",
    choices: [
      { text: "Go back. Ask her about this directly.", next: "the_niqab_return" },
      { text: "Note it as background. Your framework has no category for it.", next: "end_disciplined" }
    ]
  },

  the_niqab_return: {
    location: "Day 3 — Her Doorstep",
    text: "She listens to your question. Then: <em>'Apne aap ko mitaa ke kyun bechun?'</em> Why would I erase myself to sell myself? Two years in, the shopkeeper who had refused her on religious grounds walked back. She asked why now. He said: because you never stopped coming. <em>She had outlasted his certainty about who she was.</em> You think about the academic language you will use to write this. The words feel too small.",
    choices: [
      { text: "Let this become the center of your findings.", next: "end_expansive" },
      { text: "Ask what it cost her. The victory without the grief is not the whole story.", next: "end_witness" }
    ]
  },

  the_children: {
    location: "Day 2 — After Work",
    text: "Her son is at the table — class 12, board exam year, a computer course already completed. She says she entered business so her children would not know the particular shame of poverty she discovered when she married into it. <em>'Mere baap ke paas sab kuch tha. Main yahan aayi aur kuch nahi tha. Ye ehsaas main unhe nahi dena chahti thi.'</em> Her son looks up briefly from his book, then back down.",
    choices: [
      { text: "Ask the son what he understands of all this.", next: "the_son" },
      { text: "Stay with her. Ask what she hopes he will know someday.", next: "end_immersive" }
    ]
  },

  the_son: {
    location: "Day 2 — Evening",
    text: "He is fifteen. He says: <em>'Mujhe mummy ke saath business karna hai.'</em> I want to do the business with her. She tells him: first study, go wherever you need to go, become what you want. He says: <em>'Lekin main wahi karna chahta hoon jo aap karte ho.'</em> But I want to do what you do. She doesn't correct him. She glances at you — one flicker — and you realize you have caught a moment she is still inside. You don't know what category this belongs to.",
    choices: [
      { text: "Ask her what she wants for him, underneath everything.", next: "end_expansive" },
      { text: "Put the notebook away. You are not a researcher right now.", next: "end_immersive" }
    ]
  },

  the_question: {
    location: "Day 2 — Early Morning",
    text: "You have turned her question over all night. In the morning you ask — researcher to subject, or by now simply person to person — what she would not tell a researcher. She is quiet for a long time. Then she tells you something she has told no one. You write it down. Then you stop. You close the notebook. You will spend months deciding what to do with it.",
    choices: [
      { text: "The story belongs to the research. It must be told.", next: "end_disciplined" },
      { text: "It was given to you, not transferred. You will not write it.", next: "end_witness" }
    ]
  },

  // ── ENDINGS ──────────────────────────────────────────────────────────────
  // To add a new ending, copy this pattern and give it a unique key
  // starting with "end_"

  end_expansive: {
    ending: true,
    type: "Ending — The Open Hand",
    title: "You let the field reshape you.",
    body: "Your research proposal sits in your bag, amended beyond recognition. The question you came with has become three questions. Two of them you cannot yet name. You will return. You will write something that doesn't quite fit any journal category. That is exactly right.",
    note: '"The researcher who returns unchanged has not yet arrived."'
  },

  end_immersive: {
    ending: true,
    type: "Ending — Presence",
    title: "You stayed long enough to be forgotten.",
    body: "At some point they stopped explaining things to you. You were simply there — in the rhythm of the work, the argument, the afternoon heat. Your notes are thin. Your understanding is not. When you write this up, you will struggle to cite it. That is the cost and the gift of being present.",
    note: '"The best field notes are the ones written from memory, not in the moment."'
  },

  end_disciplined: {
    ending: true,
    type: "Ending — The Clean Study",
    title: "The data is intact.",
    body: "Your methodology is rigorous. Your findings are defensible. Peer review will be kind. And yet, on the train back, you think about the woman who went quiet when you opened your notebook. You wonder what was in the silence. Maybe next time you will find out.",
    note: '"Every clean study leaves a residue of everything it chose not to ask."'
  },

  end_controlled: {
    ending: true,
    type: "Ending — Distance as Method",
    title: "You kept your distance. The distance kept you.",
    body: "The paper is publishable. Reviewers praise the consistency of your instrument. You are invited to present at a conference. On the panel, someone asks whether you think the women in your study would recognize themselves in your findings. You pause longer than you mean to.",
    note: '"Objectivity is not the absence of perspective. It is the refusal to examine it."'
  },

  end_witness: {
    ending: true,
    type: "Ending — The Witness",
    title: "You saw something you cannot fully cite.",
    body: "She didn't give you data. She gave you her morning, her market, the way she didn't slow down when a shopkeeper turned his back. You have pages of notes and know they miss the weight of it. You will write this up. Something will be lost. You will be honest about what.",
    note: '"The most faithful record is the one that admits its own limits."'
  },

  end_infrastructure: {
    ending: true,
    type: "Ending — The Concrete Ask",
    title: "She didn't need your study. She needed a warehouse.",
    body: "You came to document barriers. She told you what she needs: storage space. Not as metaphor, not as symptom — literally, a place to put goods when rain comes. Her children slept on top of the merchandise to keep it dry. Your most important finding fits in one sentence. You spend a long time deciding whether that is a failure or a breakthrough.",
    note: '"Sometimes the most rigorous finding is also the most specific. That is not a reason to stop."'
  },

  end_two_stories: {
    ending: true,
    type: "Ending — Two Women, One Study",
    title: "You heard two stories that will not fit one paper.",
    body: "One woman built a business from ₹350, bought a vehicle with cash, and was invited to the governor's palace. Another has been planning a stationery shop in silence for years — refined in her mind every time she watches the school gate open. You went in with one research question. You came out with two women who cannot be averaged. Your paper will be divided. Your methodology will need a section you were not taught to write. That is not a problem. That is the field.",
    note: '"The most honest comparison is the one that refuses to resolve its subjects into a single argument."'
  },

  end_reflexive: {
    ending: true,
    type: "Ending — The Reckoning",
    title: "You put yourself in the data.",
    body: "Your positionality section will be longer than any chapter. You will describe the moment she asked where you came from, and the second before you answered, when you understood that your comfort had always been available to you in ways that shaped what you could study and who you could find. This will not be easy to publish. You will submit it anyway.",
    note: '"The neutral researcher is a fiction. A useful one, but a fiction nonetheless."'
  },

  end_solidarity: {
    ending: true,
    type: "Ending — The Crossing",
    title: "You stopped taking notes.",
    body: "At some point in that courtyard you put the pen down and listened — not to record, but because she was teaching something you needed to know. Your field notes end mid-sentence. You will not reconstruct the afternoon. What you have instead: a number she gave you before you left, a standing invitation to return, and a question she asked the women that you keep turning over — what does it cost you to be here?",
    note: '"Sometimes the most important thing fieldwork teaches you is what you came with."'
  },

  end_testimony: {
    ending: true,
    type: "Ending — The Traveling Story",
    title: "She was already telling it. You are one of many who heard.",
    body: "She has told her story to district officials, to Raj Bhavan, to the woman at Chauri Chaura who came forty kilometres on word of mouth, and now to you. Each time she tells it, something sticks somewhere and travels further. Your paper will join that chain. It will not be the most important link. You did not discover her. You joined her audience.",
    note: '"To document someone\'s story faithfully is not to own it. It is to carry it a little further."'
  },

  end_annotation: {
    ending: true,
    type: "Ending — What the Codes Said",
    title: "Your annotations said more about you than about them.",
    body: "You go through your field codes: symbolic support. Double burden. Ensuring gender norms. These are your categories, not theirs. She never said double burden — she said: cook, teach the children, then sit in the shop. You turned that sentence into a finding. She turned it into a plan for Tuesday. The gap between those two things is where the research lives, if you are honest enough to name it.",
    note: '"A code is a decision about what matters. Make that decision visible."'
  }

};
