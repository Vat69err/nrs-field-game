const story = {

  start: {
    location: 'Her home, Udaipur',
    text: 'Eight to ten self-help groups. Around two hundred women. She says the numbers the way you read out a weather report — the fact of it, without emphasis. The hall above is stacked with cloth, thread, sample pieces in cloth bags. Her older son is at the computer behind her. She has not stopped moving since you arrived. <em>Jab thaan liya hai to karna hai.</em> When you have decided something, you do it. She says it the way you report an observation about how your own mind works.',
    choices: [
      { text: 'Ask about the embroidery — how it started.', next: 'scene_kashida' },
      { text: 'Ask about the groups — what those meetings look like.', next: 'scene_samuh' }
    ]
  },

  scene_kashida: {
    location: 'Her workroom',
    text: 'Chain-stitch embroidery — kashida — done on dupatta borders, saree edges, household cloth. She learned by watching, then by training, then by competing. She won a state-level prize. Her name appeared in a list. She shows you this without drama, the way you show a receipt. The long part — fifteen years of going to trainings, entering competitions, building a practice — while her husband said: stop, what is the point, you should be home. She mentions this the way you mention a road that used to be under construction.',
    choices: [
      { text: 'Ask about those fifteen years — what working in secret looked like.', next: 'scene_chhuppe' },
      { text: 'Ask about the name — what it means that it is now registered to her.', next: 'scene_naam' }
    ]
  },

  scene_naam: {
    location: 'Her home, Udaipur',
    text: 'She registered under other women\'s names first. Three times, the certificate went to someone else. The federation needed a member name; it could not be hers — not yet. Then the fourth time it held. It held in her name. She says it simply: <em>chauthi baar mein apni bhi pehchan aage tak jaaye.</em> The fourth time, finally, her own recognition could go forward. She does not say she felt pride. She says the fourth time it held.',
    choices: [
      { text: 'Stay here — the four names, the fourth time.', next: 'end_pehchan' },
      { text: 'Ask about what she wants now — the larger shape of it.', next: 'scene_bahar' }
    ]
  },

  scene_chhuppe: {
    location: 'Memory — early years in the city',
    text: 'She went when her son was asleep. Put him down, slipped out, went to the training, came back. Her husband opposed it for fifteen years. Not violently — but steadily: what is the point, who is this for, you should be home. She kept going. She registered under other women\'s names at first — three times the certificate went to someone else. <em>Teen baar kisi aur ke naam pe gaya.</em> Three times under another\'s name. She kept entering.',
    choices: [
      { text: 'Ask what kept her going — what she said to herself.', next: 'scene_mushkil' },
      { text: 'Ask about what finally changed — when her husband stopped objecting.', next: 'scene_15_saal' }
    ]
  },

  scene_mushkil: {
    location: 'Memory — early years in the city',
    text: '<em>Mushkil isiliye aayi thi mujhe aage nikalne ke liye.</em> The difficulty came so that she could move forward. She says this as an explanation, not a consolation. The obstruction had a purpose: it was the thing she had to push through to understand where she was going. She does not say this was obvious at the time. She says it the way you describe a route you now know well — including the parts that were hard to navigate.',
    choices: [
      { text: 'Stay here — the engine behind fifteen years.', next: 'end_mushkil' },
      { text: 'Ask about what came after — the exhibitions, the public work.', next: 'scene_exhibition' }
    ]
  },

  scene_15_saal: {
    location: 'Her home, Udaipur',
    text: 'He came around when he saw the income. She says it simply, without resentment: the arithmetic became visible. She brought money home. The money made the going-out legible. No ceremony to this — the argument had run for fifteen years; then it didn\'t. Now, when she goes for exhibitions, he manages the house. He makes the tea. She says this with the mild surprise of someone noticing a change in weather that happened without announcement. <em>Ab sab saath hai.</em>',
    choices: [
      { text: 'Stay here — the fifteen years, the end of them.', next: 'end_darr' },
      { text: 'Ask about her older son — the business they are building together.', next: 'scene_ab_saath' }
    ]
  },

  scene_exhibition: {
    location: 'An exhibition hall — in her telling',
    text: 'She takes her work to exhibitions — city-level, district, state. Other women\'s pieces sit nearby. Hers sell. The buyers ask where the work comes from, what it is called. She has a name for the enterprise now. She has the federation membership in her own name. At the first exhibition where she went as herself, she was already the woman who had been doing this for fifteen years. The buyers did not know. They bought the work. <em>Apna kaam bolta hai.</em>',
    choices: [
      { text: 'Stay here — the work speaking for itself.', next: 'end_exhibition' },
      { text: 'Ask about the larger plan — the investment, the scale.', next: 'scene_bahar' }
    ]
  },

  scene_bahar: {
    location: 'Her home, Udaipur',
    text: 'She wants to take a trip. Somewhere. Anywhere. With her children, once the debt from building the house is clear. <em>Main bahar niklungi bas.</em> She will just go out. She spent years going out in secret — to trainings, meetings, competitions. Going out freely, for pleasure, for no practical reason, is something she has not done yet. <em>15-20 hajar mein ek bandigat wali zindagi nahi jeeni hai.</em> She will not live a confined life for fifteen to twenty thousand rupees a month. The house cost fifteen lakh. The embroidery alone will not clear that. But she is working the math.',
    choices: [
      { text: 'Stay here — the confined life she will not live.', next: 'end_bahar' },
      { text: 'Ask about the 10th class exam — the dare she took on herself.', next: 'scene_10th' }
    ]
  },

  scene_10th: {
    location: 'A government school, Udaipur — two years ago',
    text: 'Her relatives said: what\'s the use of studying now? She went and got her transfer certificate from the village records anyway. That took a year — the patwari, the signatures, the trips back, the chasing of paperwork through channels. Then she sat the 10th board exam. On the day of the exam, she got the address wrong. Wandered. Phone dead. Family tension. She reached the center late, sat down, wrote. <em>Umeed hi chhod di thi.</em> She had given up expecting to pass. She got fifty or sixty percent. She is now in 12th.',
    choices: [
      { text: 'Stay here — the day of the exam, the lost road.', next: 'end_10th' },
      { text: 'Ask about her father — what happened to him.', next: 'scene_papa' }
    ]
  },

  scene_papa: {
    location: 'Memory — the village, ten years ago',
    text: 'He died in a road accident. Ten years ago, maybe eleven. She was already in the city — married, working. When she goes back to the village she grew up in, she goes to a place that no longer has him in it. He is one of the reasons she says now that no one should wait: <em>jeevan ka bhi bharosa nahi hai.</em> Life cannot be counted on. She has a will, in effect — she has told her older son everything: the accounts, the system, who owes what, what is invested where. So that if anything happens, at least one person knows.',
    choices: [
      { text: 'Stay here — the knowing, the told.', next: 'end_papa' },
      { text: 'Ask about the relative who taught her to save — the first teacher.', next: 'scene_mama' }
    ]
  },

  scene_mama: {
    location: 'Her home, Udaipur — memory',
    text: 'A relative who had been doing this for years before her. She watched. <em>Kisi-kisi ko dekh ke seekhte hain.</em> Some people you learn from by watching them, not by being taught. The savings systems, the rotating credit circles, the investment logic — she learned it by sitting alongside this woman and observing. They worked together from early morning: the embroidery, the accounts, the meetings. Five-rupee petticoat stitching. Fall work on sarees. Whatever came. One room in the same neighborhood. Later, two rooms. Then separate rooftops.',
    choices: [
      { text: 'Stay here — the five-rupee work, the watching.', next: 'end_mama' },
      { text: 'Ask about the self-help groups — how she came to lead them.', next: 'scene_samuh' }
    ]
  },

  scene_samuh: {
    location: 'Her home, Udaipur',
    text: 'Eight to ten groups at the moment, linked to a larger women\'s federation. Every month: meeting, attendance, small savings, sometimes a loan. She goes to all of them. She calls members who miss two months. She is not official leadership — she is the person everyone calls. <em>Kuch bhi hoga to kuch bhi kahin karna hota hai to jhat se phone lagake puchengi.</em> Anything happens, they call her first. She picks up. And from there she routes them to whoever can actually solve it.',
    choices: [
      { text: 'Ask about what she says to women who are stuck — working in secret.', next: 'scene_ghar_se_bahar' },
      { text: 'Ask about her older son — who helps her run all of this.', next: 'scene_deepak' }
    ]
  },

  scene_ghar_se_bahar: {
    location: 'Her home, Udaipur',
    text: 'Some of the women in the groups work in secret. Their husbands don\'t know. She understands this completely. She did it herself for fifteen years. She does not tell them to stop hiding — she tells them to keep the money somewhere their husband cannot reach. <em>Ek ek rupaye ki saving karo.</em> One rupee at a time. She has watched women whose families controlled everything: when they ate, when they left the house. She says this without anger. She says it the way you name a weather condition that has existed for a long time and is slowly changing.',
    choices: [
      { text: 'Stay here — the one-rupee savings, the hidden money.', next: 'end_ghar_se_bahar' },
      { text: 'Ask about the house she built — the fifteen lakh.', next: 'scene_makaan' }
    ]
  },

  scene_deepak: {
    location: 'Her home, Udaipur',
    text: 'Her older son is seventeen. He has been at the computer beside her for two years now. She tells him everything: the accounts, the rotating credit circles, who paid, who owes, what is invested where. <em>Jeevan ka bhi bharosa nahi hai, kisi na kisi ko pata honi chahiye har cheez.</em> She taught him because life is uncertain. He is now also the one who uploads, sends invoices, manages the digital records. She learned to read a spreadsheet. He learned because she needed him to. Now she says: the business is ours. <em>Maa-bete ka kaam.</em>',
    choices: [
      { text: 'Stay here — the partnership, what she has taught him.', next: 'end_deepak' },
      { text: 'Ask about what they are building toward.', next: 'scene_ab_saath' }
    ]
  },

  scene_ab_saath: {
    location: 'Her home, Udaipur',
    text: 'The plan is embroidery at scale: more pieces, better quality, larger exhibitions. She needs four to five lakh rupees in investment for that — better materials, a proper stock, a real display. She is building toward it: the rotating credit circles, the rental income from the rooms she constructed above, the insurance commissions, the group facilitation fees, the digital selling. Ten things running at once. She tracks all of it. <em>Main khud nahi jaanti main kitne kaam karti hoon.</em> She does not know herself how many kinds of work she is doing simultaneously.',
    choices: [
      { text: 'Stay here — the ten things, the not-knowing-how-many.', next: 'end_ab_saath' },
      { text: 'Ask about the house — what it took to build it.', next: 'scene_makaan' }
    ]
  },

  scene_makaan: {
    location: 'Her home, Udaipur',
    text: 'The budget was three lakh. It became fifteen. She borrowed from wherever the money could come from — family, credit circles, wherever. In the middle of the construction she went through a period of depression: <em>main bahut jyada depression mein ho gayi thi.</em> How would it ever be paid back. Then she started thinking about what the building could do: rooms to rent, income from above. She built two rooms. Rented them. Then built more. She now receives fifteen to sixteen thousand rupees a month from the building alone — rent, food for tenants, the hall used for meetings. The embroidery stock is upstairs.',
    choices: [
      { text: 'Stay here — the fifteen lakh, the depression, the recovery.', next: 'end_makaan' }
    ]
  },

  /* ---- ENDINGS ---- */

  end_pehchan: {
    ending: true,
    type: 'Ending — The Fourth Name',
    title: 'Apni Bhi Pehchan Aage Tak Jaye',
    body: "She registered under other women's names the first three times. The federation needed a member name; it could not be hers. Then the fourth time it held in her name. She says it once: the fourth time, finally, her own recognition could go forward. She does not say she felt proud. She says the certificate was in her name. Chauthi baar mein apni bhi pehchan aage tak jaaye. Let my own identity also go forward from this point. This is what the fifteen years were for. Not the prize. Not the certificate. The forward movement of her own name.",
    note: '"Chauthi baar mein apni bhi pehchan aage tak jaaye." The fourth time. It held in her name.'
  },

  end_mushkil: {
    ending: true,
    type: 'Ending — The Engine',
    title: 'Mushkil Isiliye Aayi Thi',
    body: "She worked in secret for fifteen years. She put her son to sleep and slipped out to training sessions. She registered under other women's names. She entered competitions she was not supposed to enter. She explains why she kept going in one sentence: mushkil isiliye aayi thi mujhe aage nikalne ke liye. The difficulty came so that she could move forward. She does not say this was obvious while it was happening. She says it the way you describe a road you now know well — including the hard parts. The difficulty was the mechanism. She was always going to go forward. The difficulty was just the shape that the path took.",
    note: '"Mushkil isiliye aayi thi mujhe aage nikalne ke liye." The difficulty came to push her forward. Said as an explanation, not a comfort.'
  },

  end_darr: {
    ending: true,
    type: 'Ending — After Fifteen Years',
    title: 'Ab Sab Saath Hai',
    body: "He objected for fifteen years. Not with violence — with steady questions about the point of it, the use of it, why she needed to go out. She kept going. When the income became visible, the questions stopped. She describes this without triumph: the arithmetic became legible, and the argument ended. Now he manages the house when she is at exhibitions. He makes the tea. She notes this with the mild surprise of someone reporting a weather shift that happened without announcement. After fifteen years, there was no ceremony to the ending. It just stopped.",
    note: '"Ab sab saath hai." Now everyone is together. Said as a footnote, already moving to the next thing.'
  },

  end_exhibition: {
    ending: true,
    type: 'Ending — The Work Speaks',
    title: 'Apna Kaam Bolta Hai',
    body: "She takes pieces to exhibitions. At the first one where she went as herself — name on the card, certificate in her own name — she was already the woman who had been doing this for fifteen years. The buyers did not know the fifteen years. They looked at the piece, the price, the stitch. The work was what it was. Apna kaam bolta hai. The work speaks for itself. She says it without boasting. She is describing something she has observed: when the work is good enough, the story behind it does not need to be told. The buyers bought it. The work spoke.",
    note: '"Apna kaam bolta hai." The work speaks for itself. Said as a fact about quality, not a comfort.'
  },

  end_bahar: {
    ending: true,
    type: 'Ending — The Confined Life',
    title: '15-20 Hajar Mein Bandigat Nahi',
    body: "She has not taken a trip yet. Once the debt clears, she says, she will just go somewhere. With her children. Anywhere. She spent years going out in secret — to trainings, competitions, meetings, sales calls. Going out freely, for pleasure, with no practical reason, is something she has not done. She will not live a confined life for fifteen to twenty thousand rupees a month. She says this clearly, as a statement of what she has already decided about herself. The house cost fifteen lakh. She is paying it down, systematically, one credit circle at a time. She will go.",
    note: '"15-20 hajar mein ek bandigat wali zindagi nahi jeeni hai." Not for that amount. Not a confined life.'
  },

  end_10th: {
    ending: true,
    type: 'Ending — The Exam',
    title: 'Umeed Hi Chhod Di Thi',
    body: "Her relatives said: what's the use of studying now? She spent a year getting the transfer certificate from the village — the patwari, the signatures, the trips. Then she sat the board exam. On the day of the exam she got the address wrong. Phone dead, family tension, wandering. She reached the center late and wrote anyway. She had given up expecting to pass. She got fifty or sixty percent. She says this the way she says most things — as a fact from a ledger, not a story she is proud of. She is now in 12th. The subject she chose: the one useful for business.",
    note: '"Umeed hi chhod di thi." She had given up expecting to pass. She passed. She is now in 12th.'
  },

  end_papa: {
    ending: true,
    type: 'Ending — The Account',
    title: 'Jeevan Ka Bhi Bharosa Nahi',
    body: "Her father died in a road accident ten or eleven years ago. She was already in the city. When she goes back to the village she grew up in, she goes to a place that no longer has him in it. This is part of why she has told her older son everything: the accounts, the rotating credit circles, who owes what, what is invested where. Life cannot be counted on. If something happens to her, at least one person will know the system. Her son is seventeen. She has been teaching him for two years. She is not worried about what happens after. She has already made sure someone knows.",
    note: '"Jeevan ka bhi bharosa nahi hai, kisi na kisi ko pata honi chahiye har cheez." Someone must know everything. She has made sure of it.'
  },

  end_mama: {
    ending: true,
    type: 'Ending — The Watching',
    title: 'Dekh Dekh Ke Seekhi',
    body: "She learned savings from a relative who had been doing it for years before her. She watched. Kisi-kisi ko dekh ke seekhte hain: some people you learn from by watching, not by being taught. They sat together from early morning. They built the embroidery practice side by side. Five-rupee petticoat stitching. Fall work on sarees, door to door in the market. Two women, several children between them, one rented room in the same neighborhood. She learned the savings logic, the credit logic, the investment logic by watching it done beside her. She has been doing it herself ever since.",
    note: '"Dekh dekh ke inko seekhi hoon." I learned by watching her. Said with simple directness — not gratitude, just attribution.'
  },

  end_deepak: {
    ending: true,
    type: 'Ending — The Partnership',
    title: 'Maa-Bete Ka Kaam',
    body: "He is seventeen. She started teaching him two years ago — the accounts, the systems, who owes what, what is invested where. She taught him because life is uncertain. He learned. Now he is also the one who uploads, sends invoices, manages the digital side. She learned to read a spreadsheet. He learned because she needed someone who knew. She calls it maa-bete ka kaam: the mother-son business. She says it the way you name something that has already become real. She did not plan for it to happen this way. It happened because she was thorough about what she taught him, and he was thorough about what he learned.",
    note: '"Maa-bete ka kaam." The mother-son business. Said once, as a name for something already built.'
  },

  end_ab_saath: {
    ending: true,
    type: 'Ending — The Ten Things',
    title: 'Main Khud Nahi Jaanti',
    body: "She does not know how many kinds of work she is doing at once. Embroidery. Group facilitation. Insurance commissions. Rotating credit management. Rental income from the rooms she built. Digital selling on wholesale platforms. Food sold to tenants. Loans arranged for group members. She tracks all of it. In the morning she makes calls while cooking. She accounts while talking. She says: main khud nahi jaanti main kitne kaam karti hoon. She is not complaining. She is reporting an observation. The scale of it surprises even her when she says it out loud.",
    note: '"Main khud nahi jaanti main kitne kaam karti hoon." I don\'t know myself how many kinds of work I do. Said as mild surprise, not complaint.'
  },

  end_makaan: {
    ending: true,
    type: 'Ending — The Fifteen Lakh',
    title: 'Teen Lakh Ka Bana Tha',
    body: "The budget was three lakh rupees. It became fifteen. She borrowed from everywhere. In the middle of the construction she went into a depression — sitting with the question of how this would ever be paid back. Then she started to think about what the building could do: rooms to rent, income from above, a place for the embroidery stock. She built two rooms and rented them. Then built more. Now she receives fifteen to sixteen thousand rupees a month from the building — rent, food for tenants, the hall used for group meetings. The debt is being paid down, in calculated installments, one credit circle at a time.",
    note: '"Teen lakh ka budget tha, banne pe pandrah lakh ka ho gaya." Three lakh became fifteen. Said flatly, as a number already accepted and being worked with.'
  },

  end_ghar_se_bahar: {
    ending: true,
    type: 'Ending — The One-Rupee Savings',
    title: 'Ek Ek Rupaye Ki Saving Karo',
    body: "Some of the women in her groups work in secret. Their husbands don't know. She understands this from the inside — she did it herself for fifteen years. She does not tell them to stop hiding. She tells them to keep the money somewhere their husband cannot reach. One rupee at a time. She has watched women whose families controlled everything: the food, the going out, the body during pregnancies. She says it without anger. She says it the way you name a weather condition that has existed for a long time and is slowly changing. And she says: it is changing.",
    note: '"Ek ek rupaye ki saving karo." One rupee at a time. Said as practical instruction, not philosophy.'
  }

};
