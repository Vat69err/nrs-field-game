const story = {

  start: {
    location: 'A colony in Udaipur',
    text: 'Her phone rings mid-sentence. She glances at the screen, sets it face down. <em>Sikar se hoga.</em> Sikar, probably. She says it the way you mention something that happens often. On the wall: a framed photograph of Khatu Shyam ji. You notice it. She sees you notice. <em>Main toh Shyam ji ka shukriya ada karti hun. Mujhe aaj din tak kabhi itni takleef nahi di hai. Kabhi bhi.</em> She has been thanking God for a long time. She has also been waiting for one thing.',
    choices: [
      { text: 'Ask about Shyam ji — what she has been waiting for.', next: 'scene_shyam' },
      { text: 'Ask about the work — what she has done in the field.', next: 'scene_kaam' }
    ]
  },

  scene_shyam: {
    location: 'A colony in Udaipur',
    text: '<em>Toh bas yahi hai ek meri wo jo main prarthna hai, wo sweekar kar lo bas.</em> One prayer. She says it and then laughs at herself. <em>Wohi shaadi ki hi maang ke aayi thi main toh.</em> Marriage. That was what she went to the temple for — that is what she carries when she goes. She has had her parents, her degree, her five years in the field, her Nagar Nigam job, her three thousand women. She has one thing left to ask for. <em>Dhang ka mil gaya ladka toh kar lenge, nahi toh Jai Ram Ji ki.</em> If a decent man comes, she will marry. If not — God\'s will.',
    choices: [
      { text: 'Ask about the prayer in more detail — what "decent" means to her.', next: 'scene_prarthna' },
      { text: 'Ask about Khatu Shyam ji — the two months she has not gone.', next: 'scene_khushi' }
    ]
  },

  scene_prarthna: {
    location: 'A colony in Udaipur',
    text: '<em>Main apni ladaai khud ladna chahti hun. Mujhe kisi ke sahare ki zaroorat nahi hai.</em> A marriage on her own terms — not a rescue, not a compromise. If things go wrong there will be no one to go to. Her parents are gone. A sister has her own life. <em>Mere maa-baap bhi nahi hain. Toh maine kaha, main mere hisaab se ladka dekhungi. Chahe other caste ho.</em> Any caste. She is not particular about that. She is particular about everything else: she will not step into something she cannot walk out of again.',
    choices: [
      { text: 'Stay here — the shape of the life she is building toward.', next: 'end_prarthna' },
      { text: 'Ask about what came after the divorce — how the world looked at her.', next: 'scene_vidhwa' }
    ]
  },

  scene_bachpan: {
    location: 'Memory — Chittorgarh',
    text: '<em>Main bachha buddhi thi. Shaadi kya hoti hai, kuch nahi samjhti thi.</em> She played with children. Her family took her to the sasural — she was fourteen or fifteen. She ran home. They took her again. She ran home again. <em>Maine toh us ladke ko bhi thappad maar diya.</em> He reached for her hand; she slapped him. She told her in-laws directly, to their faces: <em>mujhe aapka beta pasand nahi hai, main toh nahi rahungi.</em> I don\'t like your son, I won\'t stay. The divorce came in six months. Others take six years.',
    choices: [
      { text: 'Ask about what came after — the studying, the first job.', next: 'scene_padhai' },
      { text: 'Ask about growing up in Chittorgarh — the life before any of this.', next: 'scene_chittor' }
    ]
  },

  scene_padhai: {
    location: 'Memory — Udaipur',
    text: 'With the court case behind her: she studied. School completed, then college on a private basis, then ITI in electronics — regular, alongside everything else. She took the B.Ed exam almost as a joke: <em>tukke mein exam diya.</em> A stab in the dark. She had been watching others prepare and thinking idly about it. First division. Then a job at an ITI nearby, meter parts — thirty-five rupees a day. She walked from her house across the city and back. Saved ten or twenty rupees. MA after that. <em>Isliye mere ko unn ladkiyon ka bahut saath deti hun — unka dard kya hota hai, main jaanti hun.</em>',
    choices: [
      { text: 'Stay here — the walking, the thirty-five rupees, what that taught her.', next: 'end_35_rupaye' },
      { text: 'Stay with the B.Ed — the exam she took on a whim.', next: 'end_tukke' }
    ]
  },

  scene_kaam: {
    location: 'Girwa block field office — Memory',
    text: 'Before Nagar Nigam: Jaipur, speech therapy for children with disabilities. Eight days to learn the work, six months in the classroom. Before Jaipur: six months in microfinance — loans for women in the neighborhood. Before that: an NGO doing field work in Girwa block — five years. And before all of it: a factory in Udaipur, thirty-five rupees a day. She had never seen a village before in her life. <em>Gaon, khet, paath — mere papa ki job thi, Chittor mein rehte the, school se ghar, ghar se school. Kabhi bahar nikalne hi nahi diya.</em> That field work gave her all of it at once.',
    choices: [
      { text: 'Ask about the years before the NGO — the factory, the speech therapy in Jaipur.', next: 'scene_jaipur' },
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
    location: 'The NGO office, Udaipur',
    text: '<em>Mujhe jhooth se sakht nafrat hai. Jo hai munh pe bolti hun, chahe bura lage, chahe achha lage.</em> She said what she saw. They built a file against her: she doesn\'t work. Five years, and the file said she doesn\'t work. <em>Aaj koi kaam nahi karta, ek mahina bhi nahi tikta hai. Maine toh paanch saal kaam kiya.</em> No one else lasted a month. She lasted five years. They showed her the door without a letter, a certificate, or the one and a half lakh rupees they owed. Everyone told her to file a case.',
    choices: [
      { text: 'Stay here — the decision not to fight them, the clean break she made.', next: 'scene_blocked' },
      { text: 'Ask about the women who are still calling.', next: 'scene_mahilayein' }
    ]
  },

  scene_mahilayein: {
    location: 'Neighborhoods across Udaipur, Sikar',
    text: 'When she left, the women stopped. Not stopped going to meetings — stopped altogether. <em>Wo bole haan, aapne madam chhoda, hume in-in se koi matlab nahi. Wo meeting tak nahi karti.</em> The replacement placed by the organisation holds no sessions. Women still call — from Udaipur, from Sikar — <em>madam haan bolo, yeh kaam.</em> She did not give them the organisation. She gave them herself. <em>Aaj main jaake khadi ho jau, das sekand mein ekatthi ho jayegi. Aaj humaare contact mein 3000 se 4000 mahilayein hain.</em>',
    choices: [
      { text: 'Stay with this — the call still coming, the ten seconds.', next: 'scene_das_sekand' },
      { text: 'Ask about the business — what she is building now.', next: 'scene_gulami' }
    ]
  },

  scene_gulami: {
    location: 'Ahmedabad — upcoming, in her telling',
    text: 'On the seventeenth she goes to Ahmedabad. RUDI — ration distribution, small goods. She and a colleague are planning it together. <em>Wo bole aap idea lagao, kaam main karungi.</em> She brings the thinking; her colleague brings the operations. The network is already there — three to four thousand women, Udaipur to Sikar, years of field contact, nothing on any spreadsheet. <em>Humara khud ka business khole na, toh bhi koi nahi puche. Bas paise ki kami hai. Baaki khud khol sakte hain.</em> She has already answered the larger question: <em>Khud ka business khole. Kyun dusron ki gulaami kare?</em>',
    choices: [
      { text: 'Stay here.', next: 'end_gulami' },
      { text: 'Ask about the Nagar Nigam job — how that started, the exam she took on a whim.', next: 'scene_nagar_nigam' }
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
    title: 'Paidal Karti Thi',
    body: "Thirty-five rupees a day. She walked from her house across the city and back, saved ten or twenty rupees. This was after the divorce, after the ITI in electronics, after the B.Ed she took almost as a joke and passed with first division. She says now: that is why she has so much time for women who are struggling. She has walked the distance. She made the math of it — if you earn and spend everything there is nothing to show. The earning began early and has not stopped: factory work, speech therapy, microfinance, five years of field work, Nagar Nigam, and now a plan for Ahmedabad. Thirty-five rupees is where it started.",
    note: '"Isliye mere ko unn ladkiyon ka bahut saath deti hun — unka dard kya hota hai, main jaanti hun." She walked across the city every day for 35 rupees. She has not forgotten the amount.'
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
    body: "Three to four thousand women in her contact — from the NGO years, from microfinance, from Nagar Nigam, from years of field work across Udaipur and Sikar. None of it on paper. It lives in phones, in relationships, in the fact that she answered the last time. When she left the NGO the women stopped attending altogether — they told the replacement worker they had no use for the organisation now. Women still call from Sikar for jobs. She says: if she stood in one spot today, they would gather in ten seconds. She says it without boasting. She is describing something she has observed about herself and finds simply true.",
    note: '"Aaj main jaake khadi ho jau, das sekand mein ekatthi ho jayegi." Ten seconds. She has seen this happen and is reporting it accurately.'
  },

  end_gulami: {
    ending: true,
    type: 'Ending — The Plan',
    title: 'Khud ka Business Khole',
    body: "On the seventeenth she goes to Ahmedabad for a RUDI meeting. The business is not open yet. The network is already there — three to four thousand women across Udaipur and Sikar who are not on any organisation's register but who call because she picks up. Her colleague will handle the operations. She will handle the strategy. She has been doing this work for years for other people's salaries, other people's photo counts, other people's project closings. The question she has already answered for herself: why serve someone else's project when the women are already yours, when the idea is already yours, when the only missing thing is capital?",
    note: '"Khud ka business khole. Kyun dusron ki gulaami kare?" Why be someone else\'s servant? The seventeenth is soon. The business is not yet open.'
  },

  scene_jaipur: {
    location: 'Jaipur — memory',
    text: 'Before the NGO, between things, after: she kept working. Jaipur — speech therapy for children with disabilities. Eight days to learn the method. Six months in the classroom. Before Jaipur: microfinance loans in the neighborhood, women borrowing and repaying, she managing the paperwork. Before that: five years of NGO field work in Girwa block. Before all of it: a factory in an industrial neighborhood of this city — thirty-five rupees a day, meter parts, the walk across the city and back every morning. She saved ten or twenty rupees each day. She says this sequence without regret or drama. Each thing taught her the next.',
    choices: [
      { text: 'Ask about the NGO — the five years, the women, what she found there.', next: 'scene_hih' },
      { text: 'Ask about Chittorgarh — where she came from, the life before any of this.', next: 'scene_chittor' }
    ]
  },

  scene_chittor: {
    location: 'Memory — Chittorgarh',
    text: 'Her father had a government job. School, home. Home, school. She was not allowed out — not to wander, not to linger with friends, not beyond the gate. Village, fields, the world of uneven roads and women\'s homes: none of it. She had never been to a village in her life. Then Girwa block — field work. Five years of walking into lives she had no language for until she stood inside them. <em>Gaon, khet, paath — kabhi bahar nikalne hi nahi diya.</em> The field gave her everything at once. She does not say the Chittorgarh life was wrong. She says it was before.',
    choices: [
      { text: 'Stay here — what it means to walk into something you have never seen.', next: 'end_chittor' },
      { text: 'Ask about the studying, the walking — what she built from there.', next: 'scene_padhai' }
    ]
  },

  scene_vidhwa: {
    location: 'Memory — Udaipur',
    text: 'Divorcee. That was the category she moved through this city in — after the court case, after coming back with her parents. The divorce had taken six months. Others take six years. People noticed. They had opinions. She did not explain herself to them. She started studying. Factory work at thirty-five rupees a day. She walked across the city and back, saved ten or twenty rupees. She took exams. She did not become smaller because of what people saw when they looked at her. <em>Mujhe pata hai main kaisi hun.</em> She knew what she was. She kept moving.',
    choices: [
      { text: 'Ask about the first marriage — why it ended so fast.', next: 'scene_bachpan' },
      { text: 'Ask about the studying that came after — the exams, the degrees.', next: 'scene_padhai' }
    ]
  },

  scene_khushi: {
    location: 'A colony in Udaipur',
    text: 'She goes to Khatu Shyam ji on the eleventh of every month. She has not gone in two months. She is testing God. <em>Aaj tak kabhi itni takleef nahi di hai. Kabhi bhi.</em> Not once has she been made to struggle beyond what she could carry. But she has been waiting for one thing — the same prayer, every month — and it has not yet come. Two months now and she has not gone. She wants to see if the prayer gets through without the journey. She says this without anger — the way a person describes an experiment they are conducting on something they still believe in.',
    choices: [
      { text: 'Stay with this — the prayer, the test, the waiting.', next: 'end_khushi' },
      { text: 'Ask about what she is praying for — what a marriage on her own terms would look like.', next: 'scene_prarthna' }
    ]
  },

  scene_blocked: {
    location: 'Memory — Udaipur',
    text: 'She did not file a case. One afternoon, after leaving: she blocked all their numbers. Her supervisors. The colleagues who had built a file saying she didn\'t work. The organisation\'s phone. Everyone had said go to court — you would win. The one and a half lakh rupees was real. She would have won. But she did not want to spend time she could spend going forward on going back. <em>Kyun apan kisi ke pet pe laat maare.</em> Why kick someone in the stomach. She blocked the numbers. That was the end of it. She has not looked back.',
    choices: [
      { text: 'Stay here — why she chose not to fight them.', next: 'end_kisi_ke_pet' },
      { text: 'Ask about what stayed — the women who are still calling.', next: 'scene_mahilayein' }
    ]
  },

  scene_das_sekand: {
    location: 'Neighborhoods across Udaipur and Sikar',
    text: '<em>Aaj main jaake khadi ho jau, das sekand mein ekatthi ho jayegi.</em> Ten seconds. She says this without boasting — she is reporting something she has observed. The women from Girwa block, from the microfinance work, from Nagar Nigam, from years of field contact across this city and into other districts: three to four thousand in her phone and in her presence. None of it on any organisation\'s register. It lives in phones, in the fact that she picked up. When the NGO replaced her, the women stopped coming altogether. They told the replacement worker they had no use for the organisation now. Women call from other cities still. She is not the organisation. She is herself.',
    choices: [
      { text: 'Stay here — the network that is not on any register.', next: 'end_mahilayein' },
      { text: 'Ask about the business she is building from this.', next: 'scene_gulami' }
    ]
  },

  scene_nagar_nigam: {
    location: 'Nagar Nigam office, Udaipur',
    text: 'She took the B.Ed exam almost as a joke — <em>tukke mein exam diya</em> — had been watching others prepare, thought she might try. First division. That score opened the door to a government post. After the NGO that gave no letter, no certificate, no salary. After the speech therapy work in Jaipur. After microfinance. After the factory. A government job now — steady, in the city, with a salary that arrives. She does not say this with relief. She says it with the tone of someone reporting a sequence that made sense in retrospect, whether or not it was legible at the time.',
    choices: [
      { text: 'Stay here — the stability, after everything.', next: 'end_nagar_nigam' },
      { text: 'Ask about the network of women — what her presence means to them.', next: 'scene_das_sekand' }
    ]
  },

  end_chittor: {
    ending: true,
    type: 'Ending — What She Came From',
    title: 'Kabhi Bahar Nikalne Hi Nahi Diya',
    body: "Her father had a government job. She grew up in Chittorgarh — school, home, nothing in between. She was not allowed outside the gate. She had never been to a village. Then she took a field job in Girwa block and spent five years walking into lives she had no language for until she stood inside them. Women in their homes, in fields, in communities she had never had access to. She says the field gave her all of it at once. She does not say it saved her. She says it gave her what nothing in Chittorgarh had. She walked into the unknown and learned everything on the road.",
    note: '"Gaon, khet, paath — kabhi bahar nikalne hi nahi diya." School to home and home to school. Then the field. Then everything.'
  },

  end_khushi: {
    ending: true,
    type: 'Ending — The Eleventh',
    title: 'Ab Aapki Pariksha',
    body: "She goes on the eleventh of every month. She has always gone. The pilgrimage money came two days before she needed it — once, and again. The B.Ed score arrived when she wasn't seriously trying. She says this is how Shyam ji has always been: present, exact, dependable. She has one prayer. It is the same prayer every month. For two months now she has not gone. She wants to see if the prayer reaches without the journey. She is watching. She says this the way you describe an experiment on something you still believe in — not abandonment, but a test of a different kind.",
    note: '"Ab aapki pariksha." Now it is God\'s turn to be tested. She said it almost lightly.'
  },

  end_nagar_nigam: {
    ending: true,
    type: 'Ending — The Exam She Took on a Whim',
    title: 'Tukke Mein Bhi Pehli Division',
    body: "She took the B.Ed exam almost without meaning to — she had been watching others prepare and thought she might as well try. First division. It opened the door to a government job. This after the NGO that dismissed her without a letter, a certificate, or the salary they owed. After the speech therapy in Jaipur. After the factory at thirty-five rupees a day. She has stability now. She does not describe it as arrival. She describes it as what happened next in a sequence that has not stopped. The network of three to four thousand women is still there. The business plan is still forming. She has a government job and she is still moving.",
    note: '"Tukke mein exam diya." A stab in the dark. First division. It was always like this, she says — things arriving when she was barely trying.'
  }

};
