// ─────────────────────────────────────────────────────────────────────────────
// NRS Field Game - Story: Known by Her Name
// Field Site 03 - Rural Rajasthan
// ─────────────────────────────────────────────────────────────────────────────

const story = {

  // ── OPENING ──────────────────────────────────────────────────────────────

  start: {
    location: "Day 1 - A Village in Rajasthan",
    text: "You have arrived in a village in rural Rajasthan. Your research is on women's self-help group participation and micro-enterprise. A community organizer meets you at the main road and points toward a lane: above a house door, hand-painted on a board, <em>Maa Shakti Cosmetics.</em> The woman inside, Kamla, has been with the group for three years and agreed to speak with you. There is a meeting this morning - it began twenty minutes ago, in the next lane. Kamla is in the shop.",
    choices: [
      { text: "Go to the shop directly. Find her before the meeting changes anything.", next: "shop_direct" },
      { text: "Ask the organizer about Kamla first. You want context before you enter.", next: "ask_organizer" },
      { text: "Sit in the SHG meeting for an hour. Meet Kamla after - once she has seen you in the room.", next: "shg_first" }
    ]
  },

  // ── BRANCH: DIRECT ───────────────────────────────────────────────────────

  shop_direct: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "The shop is a single room - shelves on three walls, a glass case of bangles and rings, cardboard boxes stacked where a kitchen counter used to be. Kamla is writing in a small notebook. A list, you see: items sold this week, quantities to reorder. She gestures for you to sit without looking up. She finishes the list. Closes the notebook. Then she looks at you steadily, as if she has already decided something about this conversation and is waiting to see if you catch up.",
    choices: [
      { text: "Ask about the notebook. What is she tracking?", next: "the_list" },
      { text: "Tell her what you are studying. Get the formalities done first.", next: "introduce_self" }
    ]
  },

  // ── BRANCH: ORGANIZER ────────────────────────────────────────────────────

  ask_organizer: {
    location: "Day 1 - The Lane",
    text: "The organizer has known Kamla for three years. <em>'Pehle bilkul ghunghat mein rehti thi. Ab dekho.'</em> She used to keep her face covered whenever she stepped out. Now look. She joined the SHG in 2021, took her first loan, opened the shop. Her husband is a truck driver - away fifteen to twenty days at a stretch, back for two or three. Two sons, both in school. The organizer pauses: <em>'Woh sab khud seekha.'</em> She taught herself everything. She says it the way you say something you still find quietly astonishing.",
    choices: [
      { text: "Go to the shop. You have context. That is enough.", next: "shop_direct" },
      { text: "Ask: what specifically did she teach herself? What does 'khud se' look like?", next: "organizer_deep" }
    ]
  },

  organizer_deep: {
    location: "Day 1 - The Lane",
    text: "The organizer counts on her fingers. SHG meetings first - Kamla sat near the door at the start, said almost nothing. Then the installments: she began with ₹6,000, ₹7,000, paid on time every time. Good repayment got her larger loans. Larger loans got her more stock. She learned UPI from watching her own phone. WhatsApp marketing from watching other shopkeepers. She asked no one at home. <em>'Unke husband ke paas smartphone tha - das saal pehle se. Unhone kabhi nahi bataya.'</em> Her husband had a smartphone ten years before she did. He never showed her anything.",
    choices: [
      { text: "Go to the shop. You need to hear this from Kamla herself.", next: "shop_direct" },
      { text: "Ask what the husband made of it - then and now.", next: "husband_from_organizer" }
    ]
  },

  husband_from_organizer: {
    location: "Day 1 - The Lane",
    text: "<em>'Mana kiya tha.'</em> He opposed it. He said: rent the room out instead, ₹3,000 a month, easier for everyone. Kamla told him: ₹3,000 is one day's income if the shop does well. He said: let's see you manage it. So she did. The organizer is quiet a moment. Then: <em>'Ab woh uske WhatsApp pe product status dekhta hai. Like karta hai.'</em> Now he clicks the heart under her product photos. You think about what it takes to turn a man who said <em>let's see</em> into one who follows the shop account.",
    choices: [
      { text: "Go to the shop. That arc deserves to be told by the person who lived it.", next: "shop_direct" },
      { text: "You have the story. You will write it from the organizer's account.", next: "end_controlled" }
    ]
  },

  // ── BRANCH: SHG FIRST ────────────────────────────────────────────────────

  shg_first: {
    location: "Day 1 - SHG Meeting Room",
    text: "Twelve women around a table. Notebooks, a small tin with cash, a ledger passed around. The discussion is about repayment cycles - one woman has a double installment this month and wants to defer. The group negotiates practically, without drama. You are trying to write fast enough. Then you notice: the chair nearest the window is empty. The organizer leans over: <em>'Kamla ki kursi hai. Woh dukaan pe milegi.'</em> That is Kamla's chair. She is at the shop.",
    choices: [
      { text: "Leave now. Go to the shop.", next: "shop_direct" },
      { text: "Stay until the meeting ends. Walk over with the group.", next: "shg_stay" }
    ]
  },

  shg_stay: {
    location: "Day 1 - SHG Meeting, Dispersal",
    text: "The meeting closes with a schedule for the month - who collects when, who owes what. The precision is not bureaucratic; it is the precision of women who have learned what happens when money is informal and undocumented. Walking to the shop, one woman says something half-voiced to another: <em>'Kamla toh ab pehchaani jaati hai - apne naam se.'</em> Kamla is recognized now. By her own name.",
    choices: [
      { text: "Enter the shop. Let her tell you herself.", next: "the_list" },
      { text: "Ask the woman who spoke: what did she mean?", next: "name_early" }
    ]
  },

  name_early: {
    location: "Day 1 - The Lane Outside the Shop",
    text: "She explains: Kamla came to this village when she married, twenty years old. For years she was known as <em>Choudhary ki bahu</em> - the daughter-in-law of the Choudhary household. Then <em>Motilal ji ki bahu.</em> Never by her own name. <em>'Ab gaon ke chhote bachche bhi jaante hain - Kamla Didi ki dukaan.'</em> Now even the smallest children in the lane know: Kamla Didi's shop. The woman looks at you: <em>'Ye chhoti baat nahi hai.'</em> This is not a small thing.",
    choices: [
      { text: "Enter the shop. Let her speak - the business first, the rest after.", next: "the_list" },
      { text: "Enter the shop. You already know the center. Go straight to the name.", next: "identity_shift" }
    ]
  },

  // ── KAMLA: FIRST EXCHANGE ─────────────────────────────────────────────────

  the_list: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "The notebook has four columns: item, quantity sold, cost price, sell price. She has kept it for eight months - since she realized she was running out of the wrong things and overstocking the wrong things. She learned this herself, without making a performance of it. There is also a seasonal column: <em>sardi ke liye socks, inner. Navratri: chunriya, bangles. Baarish: chhate.</em> Winter items. Festival items. Monsoon items. She has a reading of the year encoded in paper.",
    choices: [
      { text: "Ask about the loans that made the stock possible.", next: "loans_system" },
      { text: "Ask how this shop started - from the beginning.", next: "shop_origin" }
    ]
  },

  introduce_self: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "You explain: your institution, your research question, the anonymization. She listens without expression. Then: <em>'Toh aap humari mehnat ka adhyayan kar rahe ho.'</em> So you are studying our work. Yes. <em>'Aur paise nahi doge.'</em> And you will not pay us. It is not hostile. It is the same precision she applies to the notebook. You have a few seconds to say something true before this conversation becomes a performance.",
    choices: [
      { text: "Acknowledge it directly. Ask how she would like to be recognized.", next: "end_reflexive" },
      { text: "Tell her what the research might do - who might read it, what might follow.", next: "shop_origin" }
    ]
  },

  // ── SHOP ORIGIN ──────────────────────────────────────────────────────────

  shop_origin: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She started eight or nine years ago, before this house. They were renting then. She put a few hundred rupees of cosmetics on a shelf in the rented room, went door to door telling women in the lane what she had. Nobody came. <em>'Badi badi dukanen hain - woh wahan jaate hain.'</em> The market has real shops. She closed within three months. She made herself a promise: when they built their own house, she would open the shop in it. <em>Bhagwan ne suna.</em> God heard her.",
    choices: [
      { text: "Ask about the house - how they built it on a truck driver's income.", next: "the_house" },
      { text: "Ask what changed between that first failure and this shop.", next: "shg_entry" }
    ]
  },

  the_house: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "Forty lakhs, over years. His income, her management of it. He drove; she decided what they spent and what they didn't. When the house was finished, he told her: rent the shop room out. ₹3,000 a month. She told him: I will make ₹3,000 in a day - watch. <em>'Dekh ta hoon tu daal,'</em> he said. Go ahead and try. She had heard that particular tone before. She knew exactly what she was going to do with it.",
    choices: [
      { text: "Ask: had he used that tone before? What did it usually mean?", next: "husband_opposition" },
      { text: "Ask: how long until he stopped doubting?", next: "husband_proved" }
    ]
  },

  shg_entry: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She found the SHG through the Anganwadi. She used to go there - not for programs, she says without embarrassment, just to get out of the house. The housework was done and there was nothing left to do. Her husband called it wandering. <em>'Tu kaam kar leti hai, ghar ghar nahi - jane ki aadat.'</em> You finish the work but you wander. She quotes him without looking away from you. The SHG was the first thing she had ever joined for herself. She has not wandered since. She has somewhere to go.",
    choices: [
      { text: "Ask what the SHG gave her that the business alone couldn't.", next: "loans_system" },
      { text: "Ask about the husband - what happened when she joined?", next: "husband_opposition" }
    ]
  },

  // ── HUSBAND ──────────────────────────────────────────────────────────────

  husband_opposition: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "For twelve years she watched women from the lane go to jobs, come home with money, have their own movements. She heard about it second-hand - from him. <em>'Woh dekh naukri kar rahi hai. Dekh paise kamati hai.'</em> Look at that one, working. Look at that one, earning. He used other women's independence as a taunt. She says the word <em>torture</em> - <em>'torture ho gayi thi main'</em> - and moves on, as if it is a fact she has long since filed and no longer needs to carry.",
    choices: [
      { text: "Ask how she absorbed that - for twelve years, without acting.", next: "twelve_years" },
      { text: "Ask: when was the moment it shifted?", next: "husband_proved" }
    ]
  },

  twelve_years: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She is quiet for a moment. Then she adds: there was hitting, in the early years. Over money - he gave it, she asked for it, he asked why. <em>'Har ghar mein paise ki dikkat hoti hai.'</em> Every house has money problems. She contextualizes it as she says it. You notice she is doing two things at once: telling you what happened and managing how it lands. She has made this calculation so many times it has become fluent.",
    choices: [
      { text: "Let the contextualization stand. She has decided how much to give you.", next: "husband_proved" },
      { text: "Ask: does she need to frame it that way - or is she framing it for you?", next: "end_reflexive" },
      { text: "This is beyond your research scope. Return to the business.", next: "end_disciplined" }
    ]
  },

  husband_proved: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "Two years ago she stopped asking him for money. She has not said <em>mujhe paise do</em> in two years. When she asks as a joke - <em>'Daalo na'</em> - he gives without hesitating. Before, he asked what she needed it for. She says: <em>'Self ho gayi hoon main.'</em> I have become self. It is not a phrase, but she makes it one. She handles her own household needs, her own market purchases. The hitting stopped - when the money problem was gone, because she had solved it.",
    choices: [
      { text: "Ask what he says about the shop now - to her, directly.", next: "husband_now" },
      { text: "Ask about the family beyond him - who else had something to say.", next: "family_envy" }
    ]
  },

  husband_now: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "He watches her WhatsApp statuses. She posts the new stock - rings, socks, whatever came in - and he likes the photos. <em>'Woh status dekhte hain mera.'</em> She shows you the phone: a small heart under a photo of winter inners and children's socks. Then, almost to herself: <em>'Unko garv hoga - ki isne mana karne ke baad bhi isne dukaan daali.'</em> He will feel pride that she did it after he said no. She is planning to show him the savings account. She has not yet. She is waiting for the number to be undeniable.",
    choices: [
      { text: "Ask what she is saving toward - or from.", next: "savings_plan" },
      { text: "Ask: why wait? Why not show him now?", next: "end_immersive" }
    ]
  },

  // ── LOANS ────────────────────────────────────────────────────────────────

  loans_system: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She runs two simultaneous SHG loans. One group, installments of ₹1,000 a month. Another group, ₹2,000. Total outstanding, somewhere around ₹60,000–70,000. She knows this without looking at anything. <em>'Lagbhag.'</em> More or less. She knows which season justifies a draw, how much stock ₹15,000 buys at the city market, what margin keeps the lane women from deciding the bigger shops are cheaper. She has built a financial model in her head. It has no spreadsheet. It has never failed her repayment record.",
    choices: [
      { text: "Ask what the loans mean beyond the capital - what the group itself gives her.", next: "shg_meaning" },
      { text: "Ask about the sourcing problem - she mentioned the city market.", next: "sourcing_problem" }
    ]
  },

  shg_meaning: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "<em>'Kisi ke saamne haath failane ki zaroorat nahi padti mujhe.'</em> I do not have to hold my hand out to anyone. She says it without drama. Then: even her husband - she has never taken his money for the business. He offered once or twice. She did not take it. The SHG account is one clean line in her finances: her name, her repayment record, hers alone. <em>'Bhagwan ne mila diya achcha hai - unse jo judi main.'</em> God was good to me - connecting me with the group. She glances at the empty chair the organizer uses at meetings. The loan is practical. The group is something else.",
    choices: [
      { text: "Ask what the group gave her that a bank loan would not have.", next: "end_expansive" },
      { text: "Ask about the future - where this is going.", next: "future_vision" }
    ]
  },

  sourcing_problem: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She buys stock from the city market - some distance away. She goes herself, on the scooty. The bigger shops on the lane buy from further-out wholesalers and sell at ₹10 what cost them ₹7. She buys the same goods at ₹7 or ₹8 and sells at ₹10 or ₹11. But she cannot buy in their volumes, so her cost is never quite as low as theirs. <em>'Zyada nahi dete woh.'</em> They will not give her a bigger discount. She is one step behind on scale. She knows this precisely. She has not yet found the solution.",
    choices: [
      { text: "Ask if she has thought about buying cooperatively with other SHG women.", next: "end_expansive" },
      { text: "Ask how she learned to calculate all of this - she has no formal training.", next: "end_witness" },
      { text: "Ask about the scooty. How getting to the market herself changed things.", next: "scooty_moment" }
    ]
  },

  // ── SCOOTY ───────────────────────────────────────────────────────────────

  scooty_moment: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She taught herself to ride. Her husband was away; she needed to bring stock from the city; a doctor had restricted heavy lifting. She called her husband: come home, take me to the market. He said he was sleeping. She thought about asking neighbors, relatives, anyone. Then: <em>'Girungi toh girungi, seekhna hai.'</em> If I fall, I fall. I need to learn. She practiced in the lane. Then the road. Then the highway into the city.",
    choices: [
      { text: "Ask: did she fall?", next: "scooty_alone" },
      { text: "Ask what the first time felt like - riding into the city alone.", next: "scooty_city" }
    ]
  },

  scooty_alone: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She smiles properly for the first time. Then: <em>'Kabhi kabhi mere khud ko mere upar lagta hai - garv mehsoos hota hai.'</em> Sometimes I feel something about myself. Pride. She says the word carefully, as if unsure she has permission to use it for herself. And then, before you can ask what comes next, she has already moved past the scooty. Outside the office there is a four-wheeler. She wants to learn that next. <em>'Meeting mein aaungi gaadi leke.'</em> I will come to the next meeting in a car.",
    choices: [
      { text: "Ask: what changes when you can go anywhere alone - any meeting, any market, any city?", next: "end_immersive" },
      { text: "Write it down. The scooty is the finding. Do not over-interpret.", next: "end_witness" }
    ]
  },

  scooty_city: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She navigates the city market herself now - the wholesale lanes, which stalls give regulars a better price, the return trip with stock balanced on the back. <em>'Main nazrein mila ke baat kar sakti hoon.'</em> I can look people in the eye and speak. She says this as if reporting a fact about herself that still surprises her. Before the SHG, before the shop, before the scooty: she walked with her face down. She knows the difference between those two versions of herself because she lived inside both.",
    choices: [
      { text: "Ask how you live both versions and then stop living one.", next: "identity_shift" },
      { text: "Write it down exactly as she said it. The eye contact is the data.", next: "end_witness" }
    ]
  },

  // ── IDENTITY ─────────────────────────────────────────────────────────────

  identity_shift: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She came to this village when she married, twenty years old. For twelve years she kept ghunghat in front of elders, did not step out without reason, did not speak first in company. Now she walks into the city market. She negotiates. She is on the WhatsApp groups of every stallholder she buys from. <em>'Mere sasur ji ke naam se nahi jante, mere naam se jante hain.'</em> People no longer know her by her father-in-law's name. They know her by her own. Even the smallest children in the lane say <em>Kamla Didi ki dukaan.</em> She tells you this, and then she is quiet.",
    choices: [
      { text: "Ask what it cost - the twelve years, and the way out of them.", next: "the_father" },
      { text: "Let the quiet sit. She knows this is the center too.", next: "end_immersive" }
    ]
  },

  // ── THE FATHER ───────────────────────────────────────────────────────────

  the_father: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "Her father died a year ago. Before he died, she would visit and leave with ₹500 he pressed into her hand - not because she asked, but because he could read her face. <em>'Nervous ho jaati thi. Mere paas nahi hai, woh chehra hota tha.'</em> She would become nervous. That face - the face of not having. He saw it without her saying anything. Now when she visits her mother, she is the one who buys things. <em>'Mummy lo, chalo aapko ye dila doon.'</em> Let me get you this. She pauses. <em>'Papa ne bhi bola tha - tujhe mere se zyada pehchaante hain log.'</em> Even my father said: more people know you than know me.",
    choices: [
      { text: "Let her stay here. Do not redirect toward the business.", next: "end_immersive" },
      { text: "Ask: what would he have made of the four-wheeler plan?", next: "end_witness" }
    ]
  },

  // ── FAMILY ENVY ──────────────────────────────────────────────────────────

  family_envy: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "When she started, almost no one encouraged her - not family, not neighbors. <em>'Jalan se koi hota hai.'</em> Jealousy does something to people. The shape of it: they don't say stop. They say <em>'kya hai, kya karegi? Faltu paise bigad rahi hai'</em> - what is this, what will you do, you are wasting money. The discouragement is dressed as concern. She learned to recognize the costume. Her sisters were different - they knew what she had been through and they wanted her further. They are the only family she names by feeling rather than role.",
    choices: [
      { text: "Ask what she does with the discouragement now - practically, when it comes.", next: "jalne_wale" },
      { text: "Ask about the sisters. That is a different kind of data.", next: "end_expansive" }
    ]
  },

  jalne_wale: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "<em>'Jalne wale ko aur jalao.'</em> Let the jealous ones burn more. She says it without heat - almost administratively. She means: do more, move faster. The jealousy is information: someone is watching, which means you are moving. She has developed a way of reading opposition as evidence. You think about the research literature on adversarial motivation, on upward comparison. She has reached those conclusions independently, from experience, without the language. Then: <em>'Aur aage badhne ko hota hai - koi toh apne se jal raha hai, chalo.'</em> It makes you want to go further. Someone is watching. Go.",
    choices: [
      { text: "Ask: has the jealousy ever slowed her - even once?", next: "end_witness" },
      { text: "Ask about the future she is accelerating toward.", next: "future_vision" }
    ]
  },

  // ── FUTURE VISION ────────────────────────────────────────────────────────

  future_vision: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She is looking at the wall between the shop and the kitchen. <em>'Jab saaman badhega - kitchen hata dungi.'</em> When the stock grows enough, she will take down that wall. The shop expands. She also wants to find unemployed women in the village - women who know tailoring - and put two or three sewing machines behind the counter. They stitch; she sells; they earn. <em>'Mere jaise bhi guzri hui koi hogi.'</em> Someone else will have gone through what I went through. She will find them.",
    choices: [
      { text: "Ask: is she building this for herself, or for those women?", next: "end_expansive" },
      { text: "Note it and move on. The vision is real. It does not need to be interrogated.", next: "end_infrastructure" }
    ]
  },

  // ── SAVINGS ──────────────────────────────────────────────────────────────

  savings_plan: {
    location: "Day 1 - Maa Shakti Cosmetics",
    text: "She has started setting money aside - not the SHG account, not the household cash she manages, a third thing. She does not touch it. <em>'Apan kamayenge aur kharch hi karenge toh kuch dikhega bhi nahi.'</em> If you earn and spend, earn and spend, nothing shows. She wants something to show. Not for the market, not for her customers: she wants to show it to her husband. She is waiting for the number to be large enough to be undeniable. He does not know the account exists.",
    choices: [
      { text: "Ask: undeniable of what, exactly?", next: "end_immersive" },
      { text: "Document it. The savings account is its own kind of argument.", next: "end_infrastructure" }
    ]
  },

  // ── ENDINGS ──────────────────────────────────────────────────────────────

  end_expansive: {
    ending: true,
    type: "Ending - The Open Hand",
    title: "You let the field reshape you.",
    body: "Your research proposal sits in your bag, amended beyond recognition. The question you came with has become three questions. Two of them you cannot yet name. You will return. You will write something that doesn't quite fit any journal category. That is exactly right.",
    note: '"The researcher who returns unchanged has not yet arrived."'
  },

  end_immersive: {
    ending: true,
    type: "Ending - Presence",
    title: "You stayed long enough to be forgotten.",
    body: "At some point she stopped explaining things to you. You were simply there - in the rhythm of the stock list, the afternoon quiet of the lane, the moment she looked at the kitchen wall and drew a future with her eyes. Your notes are thin. Your understanding is not. When you write this up, you will struggle to cite it. That is the cost and the gift of being present.",
    note: '"The best field notes are the ones written from memory, not in the moment."'
  },

  end_witness: {
    ending: true,
    type: "Ending - The Witness",
    title: "You saw something you cannot fully cite.",
    body: "She didn't give you data. She gave you her morning - the notebook with four columns, the way she said 'self ho gayi hoon main' as if the phrase had not existed before she needed it, the quiet after she spoke about her father. You have pages of notes and know they miss the weight of it. You will write this up. Something will be lost. You will be honest about what.",
    note: '"The most faithful record is the one that admits its own limits."'
  },

  end_controlled: {
    ending: true,
    type: "Ending - Distance as Method",
    title: "You kept your distance. The distance kept you.",
    body: "The paper is publishable. Reviewers praise the consistency of your instrument. You are invited to present at a conference. On the panel, someone asks whether the women in your study would recognize themselves in your findings. You pause longer than you mean to.",
    note: '"Objectivity is not the absence of perspective. It is the refusal to examine it."'
  },

  end_disciplined: {
    ending: true,
    type: "Ending - The Clean Study",
    title: "The data is intact.",
    body: "Your methodology is rigorous. Your findings are defensible. Peer review will be kind. And yet, on the train back, you think about the moment she used the word 'self' as if she had invented it from need. You wonder what word you will use instead in the paper. Maybe next time you will simply ask her what she meant.",
    note: '"Every clean study leaves a residue of everything it chose not to ask."'
  },

  end_infrastructure: {
    ending: true,
    type: "Ending - The Concrete Plan",
    title: "She didn't need your study. She needed the kitchen wall gone.",
    body: "You came to document constraints. She has already identified and priced her own: square footage, sourcing distance, the women in the village who have sewing skills and no outlet for them. Her most important finding fits in one plan - two rooms once she removes the wall between them, and two or three machines at the back. You spend a long time deciding whether that is a finding or a blueprint. It is both.",
    note: '"Sometimes the most rigorous finding is also the most specific. That is not a reason to stop."'
  },

  end_reflexive: {
    ending: true,
    type: "Ending - The Reckoning",
    title: "You put yourself in the data.",
    body: "Your positionality section will be longer than any chapter. You will describe the moment she noted that your research would not pay her - and the second before you answered, when you understood that her precision about what she was giving you was the same precision she applies to the stock list, the loan installments, the city market prices. She tracks everything. Including what she gives away to you. She is not your subject. She is running a more rigorous study of this interaction than you are.",
    note: '"The neutral researcher is a fiction. A useful one, but a fiction nonetheless."'
  }

};
