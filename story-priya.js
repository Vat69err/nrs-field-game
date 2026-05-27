const story = {

  start: {
    location: 'Aamba Colony, Udaipur',
    text: 'Her room is meticulous — floor swept, bed pressed flat. Above the door hangs a framed photograph of Khatu Shyam ji in blue and gold. She sits with her feet bare. When you notice, she waves it off. <em>Prarthna hai. Jab kaam hoga tab pehnungi.</em> A prayer. When the work is done, she will wear them again.',
    choices: [
      { text: 'Ask about the prayer — what work she is waiting for.', next: 'scene_khatu' },
      { text: 'Ask about the work she does — where she has been.', next: 'scene_hih_intro' }
    ]
  },

  scene_khatu: {
    location: 'Aamba Colony, Udaipur',
    text: 'Every eleventh of the month, for years. She would go by train, by bus, by whatever she had. Once she had no money at all — she had told Shyam ji to arrange it if he wanted her there. Fifteen thousand rupees appeared two days before departure. She went. She has always gone. <em>Bhagwan se jhagda karke aayi hun.</em> Two months ago she came back from a fight with God.',
    choices: [
      { text: 'Ask about the fight.', next: 'scene_pariksha' },
      { text: 'Ask who she found at the temple — what the prayer is for.', next: 'scene_beloved' }
    ]
  },

  scene_pariksha: {
    location: 'Aamba Colony, Udaipur',
    text: '<em>Ab aapki pariksha main le rahi hun.</em> She has passed every test, she told him. Now she is testing God. She has asked for one thing, and until he delivers, she will not come to the temple. Her sandals sit where she left them. She prays each day. She does not go. <em>Bhale hi mann maar ke baithi hun. Iccha toh bahut hoti hai.</em> She is sitting with her heart forced still. The longing is very real.',
    choices: [
      { text: 'Stay here — the vow, the bare feet, what she is waiting for.', next: 'end_barefoot' },
      { text: 'Ask who she met at the temple — what the prayer is for.', next: 'scene_beloved' }
    ]
  },

  scene_beloved: {
    location: 'Aamba Colony, Udaipur',
    text: 'They met at Khatu Shyam ji. She says it plainly: <em>milaaya bhi Shyam ji ne hi hai hum dono ko.</em> The obstacle is caste. He is higher; she is lower. His family is in a village where the old customs still hold. She says she would accept anything — a road, one meal a day. <em>Woh road pe bhi rakhega na toh bhi rehne ke liye taiyaar hun. Par apna ghar toh apna hi hota hai.</em> She told God: you brought us together, now make the road.',
    choices: [
      { text: 'Ask about her first marriage — the one that ended long before this.', next: 'scene_divorce' },
      { text: 'Ask about the work — HIH, what happened there.', next: 'scene_hih_intro' }
    ]
  },

  scene_hih_intro: {
    location: 'HIH field office, Girwa block, Udaipur',
    text: 'Five years. She taught women: threading, stitching, small skills that could stack into something. While she was teaching, others on staff were photographing those same women and sending the photos to headquarters as proof of training. <em>Aapko toh sirf aage photo bhejna hai, mera payment aa jaayega, meri salary ban jaayegi. Yeh kaam hai aapka toh.</em> She said this directly to her supervisor. She always said things directly.',
    choices: [
      { text: 'Ask what happened when she said it — how it ended.', next: 'scene_hih_exit' },
      { text: 'Ask about the women — what happened to them when she left.', next: 'scene_mahilayen' }
    ]
  },

  scene_mahilayen: {
    location: 'Neighborhoods across Udaipur',
    text: 'She didn\'t tell them she was leaving. They found out. <em>Aapne madam chhoda, humein in-in se koi matlab nahi.</em> You left, we have nothing to do with any of these people. They stopped attending meetings. The new worker placed after her holds no sessions. Women still call her — even from Sikar — <em>madam haan bolo, yeh kaam.</em> She never gave them the organisation. She gave them herself.',
    choices: [
      { text: 'Stay here.', next: 'end_mahilayen' },
      { text: 'Ask what happened at HIH — how it actually ended.', next: 'scene_hih_exit' }
    ]
  },

  scene_hih_exit: {
    location: 'HIH office, Udaipur',
    text: 'They built a file against her: she doesn\'t work. Five years, and they said she doesn\'t work. She said it back: if I don\'t work, how did I last five years? <em>Koi ek mahine bhi nahi tikta hai.</em> No one lasts a month. She lasted five years. They did not give her a letter. Not a certificate. Not the one and a half lakh rupees they owed. She could have taken them to court. Everyone said so. <em>Kyun apan kisi ke pet pe laat maare.</em>',
    choices: [
      { text: 'Stay here — why she did not fight.', next: 'end_pet_pe_laat' },
      { text: 'Ask about the work that came after — where she went next.', next: 'scene_jobs' }
    ]
  },

  scene_jobs: {
    location: 'Multiple locations — Udaipur and Jaipur',
    text: 'After HIH: a finance company, six months. Then Jaipur — speech therapy for children with disabilities. Eight days to learn the work, six months in the classroom. Her sister\'s wedding. Three months of nothing. Then Nagar Nigam — levy collection, the garbage trucks. Field work, again. She grew up in Chittorgarh; she had never seen a village or an open field until HIH took her to Girwa block. <em>Woh knowledge bhi badh gaya. Vyavhaar bhi ho gaya.</em>',
    choices: [
      { text: 'Ask about what she is building now — the own business she mentioned.', next: 'scene_business' },
      { text: 'Ask about the child marriage — before all this work, before Udaipur.', next: 'scene_divorce' }
    ]
  },

  scene_divorce: {
    location: 'Memory — Chittorgarh',
    text: 'Fourteen, or fifteen. She did not understand what marriage was. Children played; she played with children. Her family took her to a sasural. She ran home. They took her back. She ran home again. <em>Maine us ladke ko bhi thappad maar diya.</em> He reached for her hand; she slapped him. The divorce came in six months. Others take six years. She prayed his next life would be good. It was. <em>Uski shaadi ho gayi, aaj uske do bachhe. Main khush hun.</em>',
    choices: [
      { text: 'Stay with this — what this marriage taught her about herself.', next: 'end_divorce' },
      { text: 'Ask about what came after — the studying, the B.Ed.', next: 'scene_padhai' }
    ]
  },

  scene_padhai: {
    location: 'Memory — Udaipur',
    text: 'Three years were lost in the middle — the court, the back and forth, the return. Then she told her parents: <em>main padhna chahti hun.</em> She had saved her own money from odd jobs. First year, second year, college. She was thinking idly — others do B.Ed, become teachers — and she took the exam as a stab in the dark. <em>Tukke mein exam diya.</em> First division. <em>Mera Bhagwan saath deta hai, sach mein deta hai.</em>',
    choices: [
      { text: 'Stay here — the studying and what she believes.', next: 'end_tukke' },
      { text: 'Ask about the business she is planning now.', next: 'scene_business' }
    ]
  },

  scene_business: {
    location: 'Ahmedabad — upcoming, in her telling',
    text: 'On the seventeenth she goes to Ahmedabad. A meeting about RUDI — ration distribution, small goods. She and a colleague are planning it together: <em>wo bole aap idea lagao, main kaam karungi.</em> She brings the strategy; her colleague brings the operations. Three to four thousand women across her network — Udaipur, Sikar, years of field contact. <em>Khud ka business khole. Kyun dusron ki gulami kare?</em> She says it like a conclusion she reached long ago.',
    choices: [
      { text: 'Stay here.', next: 'end_gulami' }
    ]
  },

  /* ---- ENDINGS ---- */

  end_barefoot: {
    ending: true,
    type: 'Ending — The Vow',
    title: 'Jab Kaam Hoga Tab Pehnungi',
    body: "She has not worn shoes in two months. Not a punishment — a promise. When the work is done, she said, I will wear them again. The work is this: the marriage she wants, to a man she met at Khatu Shyam ji, of a higher caste, with a family in a village that follows the old ways. She told God: you brought us together, now you make the road. She prays every day. She does not go to the temple. Her feet are, she says, cleaner than those of people who wear sandals.",
    note: '"Prarthna hai. Jab kaam hoga tab pehnungi." A prayer. When the work is done, I will wear them again. She has been barefoot for two months.'
  },

  end_mahilayen: {
    ending: true,
    type: 'Ending — The Network',
    title: 'Aap Jaisa Vyavhaar Koi Nahi',
    body: "She left and they stopped. Not just stopped going to meetings — they stopped altogether. The new worker placed in her position holds no sessions. Women call her still from Udaipur, from Sikar — not for the organisation but for her. She told them nothing when she left. They found out and drew their own conclusions. You left, so we have nothing to do with any of these people. They did not give their loyalty to the institution. They never had.",
    note: '"Woh bolte hain aap jaisa vyavhaar koi nahi, kisi ka nahi hai." No one has a manner like yours. Said of her. Said to her. She continues working.'
  },

  end_pet_pe_laat: {
    ending: true,
    type: 'Ending — The Rule',
    title: 'Kyun Apan Kisi ke Pet pe Laat Maare',
    body: "They did not give her a letter on leaving. They did not give her a certificate. They did not pay the one and a half lakh she was owed. Everyone told her: file a case. She would have won the salary, won the compensation, sat at home and collected. She didn't. She said: why would I kick someone in the stomach? Not for their sake — she was clear about who was right. But she does not make her arguments through other people's livelihood. She blocked all their numbers after.",
    note: '"Kyun apan kisi ke pet pe laat maare." Why would one kick someone in the stomach? She could have sued. She chose not to.'
  },

  end_tukke: {
    ending: true,
    type: 'Ending — The Exam',
    title: 'Tukke mein Exam Diya',
    body: "She took the B.Ed exam on a whim — tukke mein, a stab in the dark. She had been watching other people prepare and thinking idly about it. She passed. First division. God has always arranged things at the last possible moment: fifteen thousand rupees two days before a departure she had promised to make. PF money when there was nothing. A B.Ed when she was only watching others. She says this not as boasting but as testimony — witness to what she has seen happen to herself.",
    note: '"Mera Bhagwan saath deta hai, sach mein deta hai." My God stands with me. Truly. She says it the way you state a fact you have seen confirmed many times.'
  },

  end_gulami: {
    ending: true,
    type: 'Ending — The Plan',
    title: 'Khud ka Business',
    body: "Three to four thousand women in her network — from her time at HIH, from Nidhi, from Belstar, from years of field work across Udaipur and Sikar. None of it is on paper anywhere. It lives in phones of women who call because she answered the last time. On the seventeenth she goes to Ahmedabad to make a plan. Her colleague brings the operations; she brings the idea. The question she has already answered for herself: why do someone else's work when you can do your own?",
    note: '"Khud ka business khole. Kyun dusron ki gulami kare?" Why be someone else\'s servant? The business is not yet open. The seventeenth is soon.'
  },

  end_divorce: {
    ending: true,
    type: 'Ending — What She Understood',
    title: 'Shaadi ka Sukh Toh Dekha Hi Nahi',
    body: "She was fourteen or fifteen. She didn't understand what marriage was. She slapped the boy when he reached for her hand. She ran home from his house twice. When the divorce came, it came in six months — others take six years. She prayed his next life would be good. It was. She knows. She says: I never saw the happiness of marriage. So for me, what does the word mean? She asks it the way you question the translation of a word that was never explained to you.",
    note: '"Shaadi ka sukh toh dekha hi nahi." The happiness of marriage — I never saw it. She says it without self-pity, the way you state a gap in your education.'
  }

};
