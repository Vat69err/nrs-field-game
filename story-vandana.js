// story-vandana.js
// Participant 07 — Udaipur
// Pseudonym: Vandana
// All names, locations, and identifying details changed.

const story = {

  start: {
    location: 'Hiranmagri, Udaipur',
    text: 'She has just come back inside from the fields — or so it feels: she carries that quality of someone who does not stop moving. She says it herself, easily: <em>shuru se mahila sangathan mein kaam kiya aur ek rupiya nahi milta tha, sirf mahilao ki help ki maine.</em> Years of free work. But she does not say this as complaint. She says it as context, before the next thing: <em>lekin mera itna acha circle ban gaya Udaipur ke har gali har mohalle, har lady se itna ghar jaisa apne real sister jaisa sambandh ho gaya.</em> She built something from it that no one paid for.',
    choices: [
      { text: 'Ask about the circle — how it was built.', next: 'scene_network' },
      { text: 'Ask about the home — what those early years looked like.', next: 'scene_ghar' }
    ]
  },

  scene_sangathan: {
    location: 'Hiranmagri, Udaipur',
    text: 'A women\'s NGO with an office in the neighborhood. She joined them and worked — going house to house, explaining schemes, connecting women to resources, running things that needed running. Payment: two rupees per day for travel. <em>Ek rupiya nahi milta tha aur aane-jaane ka kiraya milta tha — bas itna.</em> The women who benefited from that work still call her. They call her the way you call a sister — to ask, to tell, to check in. That is what the two rupees built.',
    choices: [
      { text: 'Stay with this — the free years and what they built.', next: 'end_ek_rupiya' },
      { text: 'Ask what came after — the paid work she found next.', next: 'scene_sahara' }
    ]
  },

  scene_sahara: {
    location: 'Udaipur — early 2000s onward',
    text: 'A classified ad in a newspaper: a national insurance company, looking for women for field work. Her friend cut it out and brought it. There was no phone at home. They went to a PCO and called for two rupees. She got the job. From there: she was collecting money, building a team, depositing in FDs. Then a direct-marketing company — a thousand rupees joining fee, four hundred commission per member. She did fifty joinings in a day at her peak. <em>Kyunki chota-chota kaam karne se kya hota, knowledge ho gaya.</em> After that: a network sales company. Twenty to thirty thousand rupees a week. She was learning with every step.',
    choices: [
      { text: 'Stay here — what the knowledge looked like, what it built.', next: 'end_sahara' },
      { text: 'Ask about her children — what she was building all this for.', next: 'scene_bacchon' }
    ]
  },

  scene_network: {
    location: 'Hiranmagri, Udaipur',
    text: 'Every lane. Every mohalla. She went to them all — not for a salary, for the habit of going. When you go like that, without an agenda, without a project closing date, something different happens: they become yours, and you become theirs. Women who barely knew each other\'s names would call her when something went wrong. A new wife in trouble. A scheme nobody had told them about. A form that needed filling. She became the person you called. She still is. <em>Har lady se itna ghar jaisa apne real sister jaisa sambandh ho gaya.</em> Like a real sister. Not like an NGO worker.',
    choices: [
      { text: 'Stay here.', next: 'end_network' },
      { text: 'Ask how the free years began — the sangathan work.', next: 'scene_sangathan' }
    ]
  },

  scene_ghar: {
    location: 'Memory — joint family, early years of marriage',
    text: 'She married young. The sasural was a large joint family. The work was hers alone: cooking for everyone, carrying water so the nands and saas-ji could bathe, picking up dishes from wherever people left them. <em>Jahan khaya wahin rakh lete, toh utha leti main.</em> She ate at eleven in the morning — after everyone else was fed. Then from noon she studied, by chimney light, till two in the morning. She had been preparing for the ANM exam — <em>usme form bhara tha, selection bhi ho gayi thi</em> — but the paperwork went through her husband and father and then back, and by the time it circled back, the time was gone.',
    choices: [
      { text: 'Ask about the ANM — the selection that slipped away.', next: 'scene_ANM' },
      { text: 'Ask about the silai — how she earned for the children.', next: 'scene_silai' }
    ]
  },

  scene_silai: {
    location: 'Memory — Hiranmagri, Udaipur',
    text: 'Her husband\'s salary went to friends and to his own pocket. His father had not saved a rupee from years of service. She found out the way you find out: when something was needed and nothing was there. So she did silai. Stitching. <em>Bacche ki fees pehle bharti baad mein aur light bill connection nahi katne deti andhere mein kaise soyenge.</em> The fees first, then the electricity. Food: <em>chatni roti kha lenge koi baat nahi.</em> Chutney and roti, no problem. She kept the light on. She kept the children in school.',
    choices: [
      { text: 'Stay here — the needle, the school fees, what it cost.', next: 'end_silai' },
      { text: 'Ask about her children — what they became.', next: 'scene_bacchon' }
    ]
  },

  scene_ANM: {
    location: 'Memory — a distant tehsil',
    text: 'In the early 1980s, while she was posted in a distant tehsil, she filled the ANM form. The selection came. But the process for going anywhere went through her husband, who went to her father-in-law, who asked someone else — by the time permission moved through all those hands, the window had closed. She is matter-of-fact about it now. She does not linger. But she says it: <em>mujhe dukh nahi hoga ma\'am?</em> How would she not feel it? Her class 9 friends — Sudha became a lecturer at a government college. Farida became a doctor at the district hospital. They were in the same class. The same class.',
    choices: [
      { text: 'Stay here — what she feels about what she missed.', next: 'end_ANM' },
      { text: 'Ask about her children — the ones she kept in school.', next: 'scene_bacchon' }
    ]
  },

  scene_bacchon: {
    location: 'Hiranmagri, Udaipur',
    text: 'Four children. Her elder daughter is a sarkari teacher. Her younger daughter is a District Officer at a private insurance company — her son-in-law is in the same company, one grade above her. <em>Couple mein bohot achha kaam hota hai.</em> They travel together, work together, go to the in-laws far away at one-thirty at night. Her son is at a private bank. She says all of this quickly, not slowly — as if listing the contents of a room she has already put in order. She did the stitching. She kept the lights on. They studied.',
    choices: [
      { text: 'Stay here.', next: 'end_bacchon' },
      { text: 'Ask about the friends she went to school with — who they became.', next: 'scene_saheliyan' }
    ]
  },

  scene_saheliyan: {
    location: 'Memory — Class 9, Udaipur',
    text: 'They were in the same class in ninth. Sudha and Farida. One became a lecturer at a government college. One became a doctor at the district hospital. <em>Aaj doctor aur engineer aur professor — professor hai toh mujhe dukh nahi hoga ma\'am?</em> She asks it not bitterly but honestly. She is doing private field work now — twenty thousand a month, a supervisor who calls at three in the afternoon to ask how many receipts she has cut. The receipts question. After everything she has done — the ANM that slipped, the free years, the stitching, the fifty joinings a day, the city-wide network — someone is calling to ask about receipts.',
    choices: [
      { text: 'Stay here.', next: 'end_saheliyan' }
    ]
  },

  /* ---- ENDINGS ---- */

  end_network: {
    ending: true,
    type: 'Ending — The Circle',
    title: 'Har Gali Har Mohalle',
    body: "She went to every lane. Every mohalla in Udaipur. Not for a salary — two rupees for travel, nothing more. She went because she had made going into a habit. And what you build when you go without an agenda, without a project deadline, is different from what organisations build. You become theirs. Women who needed something called her. Women who knew something told her. Women who were in trouble came. Years of this built something that has no name and no register — only phones, only memory, only the fact that she answered. She is still the person they call.",
    note: '"Mera itna acha circle ban gaya Udaipur ke har gali har mohalle, har lady se itna ghar jaisa apne real sister jaisa sambandh ho gaya." She says "real sister." Not a figure of speech.'
  },

  end_ek_rupiya: {
    ending: true,
    type: 'Ending — The Free Years',
    title: 'Ek Rupiya Nahi Milta Tha',
    body: "For years she worked for nothing — two rupees for the bus, nothing more. She went house to house. She connected women to schemes, to each other, to resources they hadn't known existed. The NGO took what she brought them and called it their project. She did not call it anything. She just went. From that time: a city-wide network of women who call her when something happens, who refer each other to her, who have stayed in contact through every job she has had since. She gave them nothing that cost money. She gave them her time and she showed up.",
    note: '"Shuru se mahila sangathan mein kaam kiya aur ek rupiya nahi milta tha, sirf mahilao ki help ki maine." Years of free work. She says it to explain the circle that came after.'
  },

  end_sahara: {
    ending: true,
    type: 'Ending — The Knowledge',
    title: 'Chota-Chota Kaam Karne Se Knowledge Ho Gaya',
    body: "A newspaper ad. Two rupees at a PCO. Insurance field work. Then network marketing — fifty joinings in a day at her peak. Then direct sales — twenty to thirty thousand rupees a week from the team she had built. She moved through these not randomly but systematically: each one taught her something the last one hadn't. How to build a team. How to collect. How to close. How to read which women would follow through and which would take the first instalment and disappear. She says simply: from small work, knowledge comes. She has a lot of knowledge now.",
    note: '"Kyunki chota-chota kaam karne se kya hota, knowledge ho gaya." Small work, large knowledge. She moved through insurance, network marketing, direct sales — each teaching her the next thing.'
  },

  end_silai: {
    ending: true,
    type: 'Ending — The Needle',
    title: 'Chatni Roti Kha Lenge',
    body: "She did the stitching while her husband's salary went elsewhere. She paid the school fees first — the school fees, then the electricity bill, because without light how do children study? Food she was not worried about. Chutney and roti, no problem. She had learned from her own mother how to run a house on very little and still give children everything they needed. Two daughters and two sons went to school and stayed in school and did not drop out. One became a teacher. One became a district officer. One went to a bank. She kept the needle moving. They kept going.",
    note: '"Bacche ki fees pehle bharti baad mein aur light bill connection nahi katne deti. Chatni roti kha lenge koi baat nahi." Fees first. Light bill second. Food she would manage.'
  },

  end_ANM: {
    ending: true,
    type: 'Ending — The Form',
    title: 'Form Bhara Tha, Selection Bhi Ho Gayi Thi',
    body: "She had filled the ANM form. The selection came. But going anywhere required permission — from her husband, who asked his father, who asked someone else — and by the time it circled back, the time was gone. She had been studying by chimney light from midnight to two in the morning. She had been eating at eleven after serving everyone else. She had been carrying water for baths. She had been filling the form in the hours that were left. The form went nowhere. She does not dwell on it. She says: how would she not feel it? And then she moves on to the next thing, which is what she always does.",
    note: '"Form bhara tha, selection bhi ho gayi thi." The selection came. The permission didn\'t. She says this and moves on quickly, the way you move past something you have already made your peace with.'
  },

  end_bacchon: {
    ending: true,
    type: 'Ending — What Stayed',
    title: 'Bacche Samajh Gaye',
    body: "Elder daughter: government teacher. Younger daughter: District Officer at a private insurance company, her husband one grade above her in the same company — they travel together, work together, go to the village to see his parents at one-thirty in the morning and think nothing of it. One son at a private bank. She lists them quickly, not slowly. She kept the lights on. She paid the school fees first and the electricity bill second and ate last at eleven in the morning after the whole joint family had been fed. She did the stitching. She went to every lane. She was always the one still standing.",
    note: '"Badi wali beti sarkari teacher hai. Usse choti wali... District Officer pad pe hai. Couple mein bohot achha kaam hota hai." She lists their lives the way you read out something you built carefully and are quietly glad about.'
  },

  end_saheliyan: {
    ending: true,
    type: 'Ending — The Same Class',
    title: 'Ek Hi Class Mein Thi',
    body: "She and Sudha sat in the same class in ninth standard. Sudha is now a lecturer at a government college. Farida — also same class — is a doctor at the district hospital. She says this directly: how would she not feel it? She does not ask for sympathy. She states a fact. She is doing private field work now, twenty thousand a month. A supervisor calls at three in the afternoon and asks how many receipts she has cut. This, after the ANM that slipped away, after the free years in the sangathan, after the fifty joinings in a day, after the city-wide network, after all four children. The receipts question. She answers it.",
    note: '"Aaj doctor aur engineer aur professor — professor hai toh mujhe dukh nahi hoga ma\'am?" The same class. She says this and keeps going.'
  }

};
