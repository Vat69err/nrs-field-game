const story = {

  start: {
    location: 'Aamba Colony, Udaipur',
    text: 'Her phone rings mid-sentence. She glances at the screen, sets it face down. <em>Sikar se hoga.</em> Sikar, probably. She says it the way you mention something that happens often. On the wall: a framed photograph of Khatu Shyam ji. You notice it. She sees you notice. <em>Main toh Shyam ji ka shukriya ada karti hun. Mujhe aaj din tak kabhi itni takleef nahi di hai. Kabhi bhi.</em> She has been thanking God for a long time. She has also been waiting for one thing.',
    choices: [
      { text: 'Ask about Shyam ji — what she has been waiting for.', next: 'scene_shyam' },
      { text: 'Ask about the work — what she has done in the field.', next: 'scene_kaam' }
    ]
  },

  scene_shyam: {
    location: 'Aamba Colony, Udaipur',
    text: '<em>Toh bas yahi hai ek meri wo jo main prarthna hai, wo sweekar kar lo bas.</em> One prayer. She says it and then laughs at herself. <em>Wohi shaadi ki hi maang ke aayi thi main toh.</em> Marriage. That was what she went to the temple for — that is what she carries when she goes. She has had her parents, her degree, her five years in the field, her Nagar Nigam job, her three thousand women. She has one thing left to ask for. <em>Dhang ka mil gaya ladka toh kar lenge, nahi toh Jai Ram Ji ki.</em> If a decent man comes, she will marry. If not — God\'s will.',
    choices: [
      { text: 'Ask about the prayer in more detail — what "decent" means to her.', next: 'scene_prarthna' },
      { text: 'Ask about the first marriage — what happened at fourteen.', next: 'scene_bachpan' }
    ]
  },

  scene_prarthna: {
    location: 'Aamba Colony, Udaipur',
    text: '<em>Main apni ladaai khud ladna chahti hun. Mujhe kisi ke sahare ki zaroorat nahi hai.</em> A marriage on her own terms — not a rescue, not a compromise. If things go wrong there will be no one to go to. Her parents are gone. A sister has her own life. <em>Mere maa-baap bhi nahi hain. Toh maine kaha, main mere hisaab se ladka dekhungi. Chahe other caste ho.</em> Any caste. She is not particular about that. She is particular about everything else: she will not step into something she cannot walk out of again.',
    choices: [
      { text: 'Stay here — the shape of the life she is building toward.', next: 'end_prarthna' },
      { text: 'Ask about the first marriage — why she knows what she is asking for.', next: 'scene_bachpan' }
    ]
  },

  scene_bachpan: {
    location: 'Memory — Chittorgarh',
    text: '<em>Main bachha buddhi thi. Shaadi kya hoti hai, kuch nahi samjhti thi.</em> She played with children. Her family took her to the sasural — she was fourteen or fifteen. She ran home. They took her again. She ran home again. <em>Maine toh us ladke ko bhi thappad maar diya.</em> He reached for her hand; she slapped him. She told her in-laws directly, to their faces: <em>mujhe aapka beta pasand nahi hai, main toh nahi rahungi.</em> I don\'t like your son, I won\'t stay. The divorce came in six months. Others take six years.',
    choices: [
      { text: 'Ask about what came after — the studying, the first job.', next: 'scene_padhai' },
      { text: 'Ask about the work — HIH, the field, what she found there.', next: 'scene_hih' }
    ]
  },

  scene_padhai: {
    location: 'Memory — Udaipur',
    text: 'With the court case behind her: she studied. School completed, then college on a private basis, then ITI in electronics — regular, alongside everything else. She took the B.Ed exam almost as a joke: <em>tukke mein exam diya.</em> A stab in the dark. She had been watching others prepare and thinking idly about it. First division. Then a job at Jatin ITI, meter parts — thirty-five rupees a day. She walked from her house to Pratap Nagar and back. Saved ten or twenty rupees. MA after that. <em>Isliye mere ko unn ladkiyon ka bahut saath deti hun — unka dard kya hota hai, main jaanti hun.</em>',
    choices: [
      { text: 'Stay here — the walking, the thirty-five rupees, what that taught her.', next: 'end_35_rupaye' },
      { text: 'Stay with the B.Ed — the exam she took on a whim.', next: 'end_tukke' }
    ]
  },

  scene_kaam: {
    location: 'HIH field office, Girwa block — Memory',
    text: 'Before Nagar Nigam: Jaipur, speech therapy for children with disabilities. Eight days to learn the work, six months in the classroom. Before Jaipur: six months in microfinance — Nidhi group, loans for women. Before that: Hand in Hand, HIH, Girwa block, five years. And before all of it: a factory in Udaipur, thirty-five rupees a day. She had never seen a village before in her life. <em>Gaon, khet, paath — mere papa ki job thi, Chittor mein rehte the, school se ghar, ghar se school. Kabhi bahar nikalne hi nahi diya.</em> HIH gave her all of it at once.',
    choices: [
      { text: 'Ask about HIH — the five years, the women.', next: 'scene_hih' },
      { text: 'Ask about what she found wrong there — what she could not stay quiet about.', next: 'scene_photos' }
    ]
  },

  scene_hih: {
    location: 'Girwa block, Udaipur district',
    text: 'Five years. She taught women threading, stitching, small skills that could become something. The women came because of her. <em>Wo bole hum aapki taraf dekh ke meeting karte hain, baaki aapke sir wagaira se humse koi lena dena nahi.</em> Her supervisors were taking photographs of the same women and sending them to headquarters as proof of training that wasn\'t happening. She said it directly: <em>Aapko toh sirf aage photo bhejna hai, mera payment aa jayega, meri salary ban jayegi. Yeh kaam hai aapka toh.</em> She always said things directly.',
    choices: [
      { text: 'Ask about what happened when she said it — how it ended.', next: 'scene_photos' },
      { text: 'Ask about the women — what happened when she left.', next: 'scene_mahilayein' }
    ]
  },

  scene_photos: {
    location: 'HIH office, Udaipur',
    text: '<em>Mujhe jhooth se sakht nafrat hai. Jo hai munh pe bolti hun, chahe bura lage, chahe achha lage.</em> She said what she saw. They built a file against her: she doesn\'t work. Five years, and the file said she doesn\'t work. <em>Aaj koi kaam nahi karta, ek mahina bhi nahi tikta hai. Maine toh paanch saal kaam kiya.</em> No one else lasted a month. She lasted five years. They showed her the door without a letter, a certificate, or the one and a half lakh rupees they owed. Everyone told her to file a case.',
    choices: [
      { text: 'Stay here — why she didn\'t.', next: 'end_kisi_ke_pet' },
      { text: 'Ask about the women who are still calling.', next: 'scene_mahilayein' }
    ]
  },

  scene_mahilayein: {
    location: 'Neighborhoods across Udaipur, Sikar',
    text: 'When she left, the women stopped. Not stopped going to meetings — stopped altogether. <em>Wo bole haan, aapne madam chhoda, hume in-in se koi matlab nahi. Wo meeting tak nahi karti.</em> The replacement placed by HIH holds no sessions. Women still call — from Udaipur, from Sikar — <em>madam haan bolo, yeh kaam.</em> She did not give them the organisation. She gave them herself. <em>Aaj main jaake khadi ho jau, das sekand mein ekatthi ho jayegi. Aaj humaare contact mein 3000 se 4000 mahilayein hain.</em>',
    choices: [
      { text: 'Stay here.', next: 'end_mahilayein' },
      { text: 'Ask about the business — what she is building now.', next: 'scene_gulami' }
    ]
  },

  scene_gulami: {
    location: 'Ahmedabad — upcoming, in her telling',
    text: 'On the seventeenth she goes to Ahmedabad. RUDI — ration distribution, small goods. She and a colleague are planning it together. <em>Wo bole aap idea lagao, kaam main karungi.</em> She brings the thinking; her colleague brings the operations. The network is already there — three to four thousand women, Udaipur to Sikar, years of field contact, nothing on any spreadsheet. <em>Humara khud ka business khole na, toh bhi koi nahi puche. Bas paise ki kami hai. Baaki khud khol sakte hain.</em> She has already answered the larger question: <em>Khud ka business khole. Kyun dusron ki gulaami kare?</em>',
    choices: [
      { text: 'Stay here.', next: 'end_gulami' }
    ]
  },

  /* ---- ENDINGS ---- */

  end_prarthna: {
    ending: true,
    type: 'Ending — The One Prayer',
    title: 'Wo Sweekar Kar Lo Bas',
    body: "She has asked Shyam ji for one thing. She laughs when she says what it is — marriage, that's all. She frames it carefully: not any marriage, a marriage she chooses. Her parents are gone. She will not go to a sister's door if things go wrong. If it goes badly there will be no one to run to, and she knows this because she has already run — at fourteen, from a sasural she didn't want, twice. She ran home. She got the divorce in six months. Now she knows exactly what she is asking for and she has been asking clearly. She continues to wait. In the meantime she works.",
    note: '"Toh bas yahi hai ek meri wo jo main prarthna hai, wo sweekar kar lo bas. Wohi shaadi ki hi maang ke aayi thi main toh." One prayer. She said it and laughed.'
  },

  end_35_rupaye: {
    ending: true,
    type: 'Ending — Thirty-Five Rupees',
    title: 'Pratap Nagar tak Paidal',
    body: "Thirty-five rupees a day. She walked from her house to Pratap Nagar and back, saved ten or twenty rupees. This was after the divorce, after the ITI in electronics, after the B.Ed she took almost as a joke and passed with first division. She says now: that is why she has so much time for women who are struggling. She has walked the distance. She made the math of it — if you earn and spend everything there is nothing to show. The earning began early and has not stopped: factory work, speech therapy, microfinance, five years of field work, Nagar Nigam, and now a plan for Ahmedabad. Thirty-five rupees is where it started.",
    note: '"Isliye mere ko unn ladkiyon ka bahut saath deti hun — unka dard kya hota hai, main jaanti hun." She walked to Pratap Nagar every day for 35 rupees. She has not forgotten the amount.'
  },

  end_tukke: {
    ending: true,
    type: 'Ending — The Exam',
    title: 'Tukke Mein Exam Diya',
    body: "She took the B.Ed exam on a whim. She had been watching others prepare and thinking idly that perhaps she could do it. She had not seriously studied for it. She got first division. She says Shyam ji has always been like this — the money for a pilgrimage appeared two days before she needed it; the B.Ed score appeared when she wasn't trying. She does not say this to explain her own luck. She says it as someone reporting facts about a presence she has long depended on. The exam was a stab in the dark. The light was already there.",
    note: '"Tukke mein exam diya." A stab in the dark — she took the B.Ed almost without trying. First division. She says this as testimony, not boasting.'
  },

  end_kisi_ke_pet: {
    ending: true,
    type: 'Ending — The Rule',
    title: 'Kyun Apan Kisi ke Pet pe Laat Maare',
    body: "They did not give her a letter, a certificate, or the one and a half lakh rupees they owed her. Everyone said: file a case. She would have won. She could have sat at home and collected. She didn't. She says it simply: why would she kick someone in the stomach? Not out of softness toward them — she was clear about who was right and who had wronged whom. But she does not make her arguments through other people's livelihood. She blocked all their numbers after she left. That was the end of it. She has not looked back.",
    note: '"Kyun apan kisi ke pet pe laat maare." Why kick someone in the stomach? She chose not to sue for the salary owed. She blocked their numbers and moved on.'
  },

  end_mahilayein: {
    ending: true,
    type: 'Ending — The Network',
    title: 'Das Sekand Mein Ekatthi Ho Jayegi',
    body: "Three to four thousand women in her contact — from HIH, from microfinance, from Nagar Nigam, from years of field work across Udaipur and Sikar. None of it on paper. It lives in phones, in relationships, in the fact that she answered the last time. When she left HIH the women stopped attending altogether — they told the replacement worker they had no use for the organisation now. Women still call from Sikar for jobs. She says: if she stood in one spot today, they would gather in ten seconds. She says it without boasting. She is describing something she has observed about herself and finds simply true.",
    note: '"Aaj main jaake khadi ho jau, das sekand mein ekatthi ho jayegi." Ten seconds. She has seen this happen and is reporting it accurately.'
  },

  end_gulami: {
    ending: true,
    type: 'Ending — The Plan',
    title: 'Khud ka Business Khole',
    body: "On the seventeenth she goes to Ahmedabad for a RUDI meeting. The business is not open yet. The network is already there — three to four thousand women across Udaipur and Sikar who are not on any organisation's register but who call because she picks up. Her colleague will handle the operations. She will handle the strategy. She has been doing this work for years for other people's salaries, other people's photo counts, other people's project closings. The question she has already answered for herself: why serve someone else's project when the women are already yours, when the idea is already yours, when the only missing thing is capital?",
    note: '"Khud ka business khole. Kyun dusron ki gulaami kare?" Why be someone else\'s servant? The seventeenth is soon. The business is not yet open.'
  }

};
