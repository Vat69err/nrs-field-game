const story = {

  start: {
    location: 'Pratap Colony, Udaipur',
    text: 'She is sitting with a notebook, listing names in Marwari. Her son Veer — four years old, fearless — trails a kangaroo stuffed toy across the floor. The dukan that opens from the front of the house is quiet today; she has people coming. <em>On a shelf by the window: small candles in chai glasses, pink and peach and cream, each a slightly different shape.</em>',
    choices: [
      { text: 'You look at the candles on the shelf.', next: 'scene_candles' },
      { text: 'You ask about the notebook and the names.', next: 'scene_members' }
    ]
  },

  scene_candles: {
    location: 'Pratap Colony, Udaipur',
    text: 'She comes over. <em>Ye wax hai — white wax, gas pe garam karo, phir chai ke glasses mein daal do.</em> Colour in drops — fikka for pale, dark for deep. Khushboo also: chocolate, rose, gulab. She explains it the way you explain something you understand completely — no searching for words, no performance. Two months. That is how long she has been making them.',
    choices: [
      { text: 'Ask how she learned.', next: 'scene_bees' },
      { text: 'Ask what the business is called.', next: 'scene_siya_naam' }
    ]
  },

  scene_siya_naam: {
    location: 'Pratap Colony, Udaipur',
    text: 'She pauses. <em>Meri beti ke naam pe rakhte hain.</em> Her daughter Siya — one month old. Siya is Sita: <em>Sita Ram.</em> The business — a Meesho account being set up today, nine candles on a shelf — is already named for a baby who cannot yet hold her own head up. <em>Siya\'s Candles.</em> She says the name the way you say something that was never in question.',
    choices: [
      { text: 'You look over at her son — trailing the kangaroo toy.', next: 'scene_veer' },
      { text: 'Ask how she came to be here — this city, this house, all of it.', next: 'scene_court' }
    ]
  },

  scene_pink: {
    location: 'Pratap Colony, Udaipur',
    text: '<em>Same pinch</em> — she says it with a laugh, pointing to a pale pink candle. The same colour as Veer\'s kangaroo toy. When the interviewer mentions the walls — painted in warm red-brown, no tiles yet, just colour she chose herself — she explains without embarrassment: <em>jo koi aata hai toh achha nahi lagta na, ganda-ganda sa dikhta hai, isliye color kar diya.</em> No apology. She chose what she wanted to see.',
    choices: [
      { text: 'Ask about the house — the decision to build it, how it started.', next: 'scene_ghar_first' },
      { text: 'Stay here — the colours, the name, what she is building.', next: 'end_siya' }
    ]
  },

  scene_bees: {
    location: 'Training room — neighbourhood',
    text: 'Twenty women. Two hours. Ma\'am showed everyone once: melt the wax, drop the colour, pour. The session ended. Eighteen went home and forgot. One forgot slowly. <em>Bees mein se khali main hi bana rahi hoon.</em> She says it without gloating — reading from a ledger. When you ask what happened to the others, she looks mildly surprised at the question. They went home.',
    choices: [
      { text: 'Stay with this — what it means to be the only one who kept going.', next: 'scene_bees_2' },
      { text: 'Ask what she wanted to do before she was doing this.', next: 'scene_police' }
    ]
  },

  scene_bees_2: {
    location: 'Training room — neighbourhood',
    text: '<em>Apan jhat se seekh jaate hai agar apan dhyan se kare.</em> If you pay attention, you learn fast. She is not being modest. She is not showing off either. She is reporting on how things work. The other women had obligations — children, other work, other plans. She had those too. The difference is invisible from the outside. She went home and melted more wax.',
    choices: [
      { text: 'Stay with this — only her, of twenty.', next: 'end_bees_mein_se' },
      { text: 'Ask where she imagines herself in a few years.', next: 'scene_geetanjali' }
    ]
  },

  scene_police: {
    location: 'Memory — Bundi, Rajasthan',
    text: 'Before the candles. Before the loan centers and the SHG lists. She was in class tenth in Bundi. <em>Mera sapna tha ki main police mein bharti hou.</em> She wanted to join the police. Her family had a different plan — a boy she had not chosen, who they said was fine. <em>Sage aise ladke ke saath kar di jo mujhe pasand hi nahi tha bilkul.</em> She was sixteen.',
    choices: [
      { text: 'Ask about the brother at the school gate — what leaving Bundi meant.', next: 'scene_bundi_bhai' },
      { text: 'Ask if she still wants to study — if any of that ambition survived.', next: 'scene_open_school' }
    ]
  },

  scene_open_school: {
    location: 'Pratap Colony, Udaipur',
    text: 'Her jethani keeps suggesting it: <em>open school se de lo aap</em> — take the board exam through open school. She listens. She does not say no. But when you push her — what would she study, does she want this — she pauses. Then: <em>Nahi, main aisi naukri karu.</em> She wants a job more than a degree. She has already spoken to a doctor at a large hospital nearby.',
    choices: [
      { text: 'Ask about the hospital.', next: 'scene_geetanjali' },
      { text: 'Go back to Bundi — what she wanted before all this.', next: 'scene_facebook' }
    ]
  },

  scene_facebook: {
    location: 'Memory — Bundi, Rajasthan',
    text: 'School every morning. Her brother waiting at the gate every afternoon: <em>chutti hote hi bhai lene aa jaata tha.</em> No time with friends. No going out. Facebook. A boy from this city who was not the boy her family had chosen. They talked. She decided. <em>Facebook pe kiya humne. Jis din bhage the, uss din ek dusre ko dekha tha.</em> The day they ran away was the first time they had ever seen each other in person.',
    choices: [
      { text: 'Stay here.', next: 'end_facebook' }
    ]
  },

  scene_members: {
    location: 'Pratap Colony, Udaipur',
    text: 'The list is half in names, half in relationships. Remi. Madhu. Then: <em>Jagdish dada ri laadi</em> — Jagdish dada\'s wife. <em>Roshan dada ri laadi.</em> She calls two rooms over to ask a name; a voice answers. She writes it down. Some women she has known for years. Some she only knows how they are attached to men. <em>Ek bhi cheez miss nahi honi chahiye.</em> Nothing should be missed.',
    choices: [
      { text: 'Stay with the list — nothing should be missed.', next: 'scene_ek_bhi_miss' },
      { text: 'Ask how she got here — this life, this city.', next: 'scene_court' }
    ]
  },

  scene_center: {
    location: 'Pratap Colony, Udaipur',
    text: 'Five or six lending centers, she says. Aarohan, Gramshakti, others. The meetings happen here — women coming, sitting, signing, leaving. She does not take referrals from outside the neighborhood. Only family. Only this neighborhood.<em>Dar lagta hai na — koi kisht leke bhaag jaave toh inhone karwaya tha.</em> Fear is something she learned from a specific event.',
    choices: [
      { text: 'Ask about the woman who ran.', next: 'scene_bhaag' },
      { text: 'Ask what she actually says to the loan officers.', next: 'scene_guarantee' }
    ]
  },

  scene_bhaag: {
    location: 'Pratap Colony, Udaipur',
    text: 'Once. Forty thousand rupees. First installment paid, then gone. <em>Pehli kisht bhari aur bhaag gayi woh.</em> The loan officer came back to the others in the group — women who had done nothing wrong — and they had to trail behind him through the neighborhood, door to door. Her name on the guarantee. Her network that had vouched. <em>Uske baad se.</em> After that, she changed the system.',
    choices: [
      { text: 'Ask how she rebuilt it.', next: 'scene_guarantee' },
      { text: 'Ask how she changed the system after that.', next: 'scene_loan_reset' }
    ]
  },

  scene_guarantee: {
    location: 'Pratap Colony, Udaipur',
    text: '<em>Sir ke saamne bol do — yeh member hai, iska ghar dekho, iske documents dekho. Agar samjho toh do, nahi samjho toh mat do.</em> She says this to the loan officer before every loan. She says the same to the borrower: I have introduced you. Whatever happens between you is between you. <em>Ghoda ghaas se dosti karega toh khayega kya?</em> If a horse befriends the grass, what will it eat?',
    choices: [
      { text: 'Stay here.', next: 'end_ghoda_ghaas' }
    ]
  },

  scene_court: {
    location: 'Memory — Udaipur',
    text: 'Court marriage. Her family stayed in Bundi. His stayed here. <em>Yeh log jaante bhi nahi the ek dusre ko.</em> The two families had never met. The registration happened in a room with paperwork. Then she was here — in this city, in the same neighborhood where she would later work, where she still lives. One room. <em>Shuru karna pada.</em> Start from nothing.',
    choices: [
      { text: 'Ask who helped in those early years.', next: 'scene_kisi_se_nahi' },
      { text: 'Ask about building the house.', next: 'scene_ghar_first' }
    ]
  },

  scene_kisi_se_nahi: {
    location: 'Memory — first years in Udaipur',
    text: '<em>Kisi se nahi mili.</em> No one helped. His family had land, standing, money. They gave nothing. Not once. <em>Bas mere husband hain aur main hoon. Dono ne kiya.</em> Just him and her — a girl from Bundi who had never been to this city, and a man who had grown up here but was starting over beside her. They cooked together. They decided together. They had one room.',
    choices: [
      { text: 'Ask about building the house from that one room.', next: 'scene_ghar_first' },
      { text: 'Ask what they were doing before — before the candles, before all of this.', next: 'scene_riko' }
    ]
  },

  scene_ghar_first: {
    location: 'Pratap Colony, Udaipur',
    text: 'His family kept saying: car first. She said no. <em>Maine nahi. Pehle ghar banayenge, phir car lenge.</em> They had one room — cooking in it, sleeping in it, guests sitting on the same bed. <em>Chaar saal tak humne dukh dekhe hai. Dono ne shauk mauj sab chhod diye.</em> Four years. No pleasures, no indulgences. The tiles are still coming. She painted the walls herself, in the colours she chose. An interviewer sat down and said she had never seen walls so carefully coloured where the plaster was still showing.',
    choices: [
      { text: 'Stay here.', next: 'end_chaar_saal' }
    ]
  },

  scene_geetanjali: {
    location: 'Near a large hospital, Udaipur',
    text: 'She has been there many times — as a visitor, watching. <em>Ladieson ki dekhbhal karna, mujhe achha lagta hai ye.</em> She wants to look after women patients. She spoke to a doctor there who said she would help. The plan: wait a year and a half, two at most, until Siya is bigger. Then go. <em>Mujhe yahi karna hai.</em> She said it once, then moved on to something else.',
    choices: [
      { text: 'Stay here.', next: 'end_geetanjali' }
    ]
  },

  scene_veer: {
    location: 'Pratap Colony, Udaipur',
    text: 'He runs a circuit of the room with the stuffed kangaroo trailing behind him. Four years old. He does not shy from strangers — he looks at the interviewer directly and then goes back to his circuit. She says he knows the capitals and districts of India by heart. She taught him from the phone — state by state, district by district. <em>Apne jaisa hi hai — dhyan de toh jaldi seekh jaata hai.</em> He is like her that way. If he pays attention, he learns fast.',
    choices: [
      { text: 'Look over at the shelf — the nine candles, the name she chose.', next: 'scene_pink' },
      { text: 'Stay here, with this.', next: 'end_veer' }
    ]
  },

  scene_ek_bhi_miss: {
    location: 'Pratap Colony, Udaipur',
    text: 'She goes through the list methodically. A name. Then a relationship to a man — <em>Jagdish dada ri laadi, Roshan dada ri laadi.</em> Some women she has known for years; some she knows only by their attachment to a household. She calls into the next room to confirm a name; a voice answers and she writes it down. When she finishes a section she runs her finger back over it. <em>Ek bhi cheez miss nahi honi chahiye.</em> Nothing should be missed. Said once, quietly, like a rule that does not need repeating.',
    choices: [
      { text: 'Ask about the loan centers she runs from here.', next: 'scene_center' },
      { text: 'Ask how she got here — this city, this life.', next: 'scene_court' }
    ]
  },

  scene_loan_reset: {
    location: 'Pratap Colony, Udaipur',
    text: 'After the forty thousand, she changed the system. Only family now. Only women from this neighborhood, whose houses she has been inside, whose children she can name. Before every new loan she tells the officer directly: <em>Sir ke saamne bol do — yeh member hai, iska ghar dekho, iske documents dekho. Agar samjho toh do, nahi samjho toh mat do.</em> She says it the same way every time. And then she tells the borrower: I have introduced you. Whatever happens between you and the officer is between you. <em>Aage ka main zimmedaar nahi hoon.</em>',
    choices: [
      { text: 'Stay with this — the rule she made for herself.', next: 'end_loan_trust' },
      { text: 'Go back to the moment — the forty thousand, the loan officer coming back.', next: 'scene_guarantee' }
    ]
  },

  scene_bundi_bhai: {
    location: 'Memory — Bundi, Rajasthan',
    text: 'Every afternoon, without exception: her brother at the school gate. Not late, not sometimes — every day, at dismissal. The message was clear even without being said: the world outside school was not for her. No friends, no wandering, no staying back. Home, then school, then home. She understood what was being communicated. Facebook opened a window. A boy from Udaipur. Conversations the brother did not know about. A decision she made before anyone had a chance to make it for her.',
    choices: [
      { text: 'Stay here — the decision, before she had even seen his face.', next: 'end_bundi' },
      { text: 'Go to the day itself — the first time she saw him.', next: 'scene_facebook' }
    ]
  },

  scene_riko: {
    location: 'Memory — industrial area, Udaipur',
    text: 'Before the candles. Before the lending centers and the SHG lists. She and her husband both worked at a pharmaceutical company in the industrial area — packing, processing, shifts. They came home to one room. Two salaries, one room. <em>Dono ne kaam kiya.</em> Both of them working from the start. She stopped when the pregnancy made it difficult — first Veer, then eventually the decision to be home. But it had been two incomes. That is how the house began. Not from his salary alone.',
    choices: [
      { text: 'Ask about building the house from that — from two salaries and one room.', next: 'scene_ghar_first' },
      { text: 'Stay here.', next: 'end_riko' }
    ]
  },

  /* ---- ENDINGS ---- */

  end_siya: {
    ending: true,
    type: 'Ending — The Name',
    title: "Siya's Candles",
    body: "She named her business after a daughter who was one month old. She is 22. Her son knows the capitals and districts of India by heart and does not shy from strangers. Her daughter has not yet opened her eyes all the way. The Meesho account was set up today. Nine candles sit on a shelf. None have sold yet. She said this without worry — the way you state a starting condition, not an ending one.",
    note: '"Siya ka matlab Sita mata hi." She named her daughter and her beginning the same thing.'
  },

  end_bees_mein_se: {
    ending: true,
    type: 'Ending — Of Twenty',
    title: 'Bees mein se Khali Main',
    body: "There were twenty women in the training. It was two hours long. She paid attention. The session ended and everyone went home. She went home and kept making candles. The others had reasons — children, other work, other plans. She had those too. She does not explain the difference. She reports it: of twenty, only me. She does not say she was better. She says she paid attention. Apan jhat se seekh jaate hai agar apan dhyan se kare.",
    note: '"Bees mein se khali main hi bana rahi hoon." Only me. Said like reading from a ledger.'
  },

  end_facebook: {
    ending: true,
    type: 'Ending — The Day',
    title: 'Jis Din Bhage The',
    body: "She was in class tenth. Her brother came to the school gate every afternoon. Her family had chosen a boy — not her choice, not someone she had wanted. She and he talked on Facebook. She decided. The day they ran away from Bundi was the first time they had ever seen each other in person. She does not linger on this detail. She said 'love marriage' and then she said this. She was sixteen. She had made up her mind before she had seen his face.",
    note: '"Jis din bhage the, uss din ek dusre ko dekha tha." That day was the first day.'
  },

  end_ghoda_ghaas: {
    ending: true,
    type: 'Ending — The Rule',
    title: 'Ghoda Ghaas se Dosti Karega Toh Khayega Kya',
    body: "She runs six lending centers from her house. She takes commission from the loan officer and from the borrower both. When a woman once ran away with forty thousand rupees after the first installment, it was her name the officer came back to. She rebuilt the system from nothing. Now she tells the officer upfront: see the house, check the documents, if you're satisfied give the loan, if not don't. I have nothing more to do with it. A horse that befriends the grass has nothing left to eat.",
    note: '"Sabse ek jaisa vyavhaar rakho, bas." Treat everyone the same. That\'s all.'
  },

  end_chaar_saal: {
    ending: true,
    type: 'Ending — The House',
    title: 'Pehle Ghar Banayenge',
    body: "For four years everything extra went into the house. When his family said car first, she said no. They had one room — cooking in it, sleeping in it, receiving guests in the same space as the bed. The house is not finished. The tiles are still coming. The light fittings are still being bought. She painted the walls herself in the colours she chose. An interviewer came and sat down and said she had never seen walls painted so carefully in a home where the plaster was still showing.",
    note: '"Dono ne shauk mauj sab chhod diye." Both of them gave up every pleasure. Four years. Then this.'
  },

  end_geetanjali: {
    ending: true,
    type: 'Ending — What She Wants',
    title: 'Ladieson ki Dekhbhal Karna',
    body: "She wants to work at a large hospital in the city. She has visited many times, watching. She wants to care for women patients — check on them, ask how they are. She has spoken to a doctor there who said she would help get her in. The plan is to wait until Siya is bigger — a year and a half, maybe two. Then go. When you ask why this, she does not say salary or proximity. She says: mujhe achha lagta hai. It feels right to look after someone.",
    note: '"Mujhe yahi karna hai." This is what I want to do. She said it once and moved on.'
  },

  end_veer: {
    ending: true,
    type: 'Ending — Ek Ladka, Ek Ladki',
    title: 'Apne Jaisa Hi Hai',
    body: "Her son is four. He knows the capitals and districts of India from a phone screen — she taught him state by state, and he learned it because he was paying attention. Her daughter is one month old and cannot yet hold her own head up. Between them: a business named for the daughter, an account set up today, nine candles on a shelf that have not sold yet. She teaches her son the way she was taught by no one — you pay attention or you don't. He pays attention. She says he is like her that way.",
    note: '"Apne jaisa hi hai — dhyan de toh jaldi seekh jaata hai." If you pay attention, you learn fast. She said it about her son. She was describing herself.'
  },

  end_loan_trust: {
    ending: true,
    type: 'Ending — The Rule She Made',
    title: 'Pehli Kisht Bhari Aur Bhaag Gayi',
    body: "She paid the first installment and disappeared. Forty thousand rupees. The loan officer came back not to the woman who had run — she was gone — but to the others who had done nothing wrong, the group she had helped form, the women whose names were on the same list as hers. She walked behind the officer door to door through the neighborhood. After that, she changed everything: only family, only this neighborhood, only women whose houses she has been inside. She tells the officer her part and the borrower her part and then she steps back. Whatever happens between them is between them.",
    note: '"Dar lagta hai na — koi kisht leke bhaag jaave toh inhone karwaya tha." Fear is something she learned from a specific event. She rebuilt from it.'
  },

  end_bundi: {
    ending: true,
    type: 'Ending — The Gate',
    title: 'Chutti Hote Hi Bhai Lene Aa Jaata Tha',
    body: "Every afternoon. School dismissal. Her brother at the gate. She went home. The world outside was communicated clearly to her, without being stated: it was not for her. No friends, no wandering, no time that was hers. She was in class tenth. She found a way. Facebook, a boy from this city she had never met, conversations no one knew about. A decision made before anyone could make it for her. She was sixteen when she decided. She had not yet seen the face of the person she was deciding toward.",
    note: '"Chutti hote hi bhai lene aa jaata tha." Every afternoon, without fail. She understood what it meant. She made a different plan.'
  },

  end_riko: {
    ending: true,
    type: 'Ending — Dono Ne Kiya',
    title: 'Dono Ne Kiya',
    body: "Before the candles. Before the lending centers, the SHG lists, the Meesho account with nine candles and no sales yet. She and her husband worked at a pharmaceutical company in the industrial area — packing, processing, two salaries coming into one room. She stopped when pregnancy made it difficult. But the house — the one where the tiles are still being laid, where she painted the walls herself in the colours she chose, where a business is being built from a shelf — began with two incomes, not one. His family gave nothing. They built it themselves. Both of them. From one room.",
    note: '"Bas mere husband hain aur main hoon. Dono ne kiya." Just him and her. Both of them. She says this about the beginning and it is still true now.'
  }

};
