const story = {

  start: {
    location: 'Hiran Magri, Udaipur',
    text: 'She is sitting in the hall on the first floor — the one where the self-help group meetings happen, twenty women once a month, five hundred rupees each into a common pool. Today she is alone. On a low table, a length of fabric with kashida embroidery half done. She picks it up as she speaks, not to demonstrate — just to have something in her hands. She has been doing this work since Class 9.',
    choices: [
      { text: 'Ask about the embroidery — when she began.', next: 'scene_class9' },
      { text: 'Ask about the hall — how many groups meet here, how it works.', next: 'scene_groups' }
    ]
  },

  scene_class9: {
    location: 'Memory — Class 9',
    text: 'She learned embroidery in Class 9. Then she married. She was sixteen. After marriage: cook, eat, sleep, wake up, do it again. And then, when the mind became free enough, a question came: <em>kya poori zindagi aise hi jaayegi, ya isme kuch karna hai?</em> Is this whole life going to pass this way, or is there something in it to do? The embroidery hadn\'t gone anywhere. She just had to find it again — and find a way to do it without being seen.',
    choices: [
      { text: 'Ask how she started working — how she managed to begin.', next: 'scene_secret' },
      { text: 'Ask about the husband — what his position was.', next: 'scene_husband_early' }
    ]
  },

  scene_groups: {
    location: 'Hiran Magri, Udaipur',
    text: 'Eight groups. Ten meetings a month. Two hundred and more women. Some groups meet here in this hall; some she goes to. <em>Ek dukh bat jaata hai.</em> When you sit together, shared sorrow is halved. Money matters too — savings from the pool, not from a bank. With a bank, no one cares what condition you are in. With the group, you can miss a month\'s payment. The group holds you. The purpose is not to remove people from the fold — it is to hold their hand and walk alongside them.',
    choices: [
      { text: 'Ask what the meetings actually hold — what problems women bring.', next: 'scene_women_problems' },
      { text: 'Stay here — this, the savings, the hall, the ten meetings.', next: 'end_ek_dukh' }
    ]
  },

  scene_husband_early: {
    location: 'Memory — Hathipole, Udaipur',
    text: 'His position was simple: they should not work. He was earning; that was enough. Fifteen people in the joint family in Hathipole. She put the child to sleep and left. She picked up bajubandh work orders. She came back before anyone noticed. <em>Unko nahi pata tha.</em> They didn\'t know. For years she did the work in other people\'s names — orders coming in through someone else\'s account, money then passed to her — before she registered anything under her own.',
    choices: [
      { text: 'Ask how many times she worked through others before her own name.', next: 'scene_teen_baar' },
      { text: 'Ask what it cost — doing all of it in secret.', next: 'scene_secret' }
    ]
  },

  scene_secret: {
    location: 'Memory — Hathipole, Udaipur',
    text: 'Out of fear of him, she took orders through others. Work would arrive in a friend\'s name; she would do it and hand it over to them. Their account, then her hand. <em>Woh khatron mein kaam karna tha.</em> That was the kind of risk one had to take. She did it this way for years — three different people\'s names before the fourth time, when she registered under her own name and stayed there. When she speaks about those years, there is no self-pity. She states it like a system she devised and operated.',
    choices: [
      { text: 'Ask about the first exhibition — the first time she stepped out under her own work.', next: 'scene_pehli_exhibition' },
      { text: 'Ask what it took to keep going — when no one stood beside her.', next: 'scene_harne_nahi' }
    ]
  },

  scene_teen_baar: {
    location: 'Memory — Hathipole and beyond',
    text: 'Three names before her own. She doesn\'t tell this slowly — she lists it: first time someone else\'s name. Second, another\'s. Third, another\'s. Fourth time, she registered in her own name. She spent five years working through that registration. <em>Teen baar aur logon ke naam se kiya, phir khud ke naam se.</em> Three times through others, then mine. It is the most compressed account of ten years of work she will give. She says it and moves on.',
    choices: [
      { text: 'Stay with this — what it meant to finally use her own name.', next: 'end_khud_ke_naam_pe' },
      { text: 'Ask about the first exhibition — the first time she went out publicly.', next: 'scene_pehli_exhibition' }
    ]
  },

  scene_pehli_exhibition: {
    location: 'Exhibition ground, Udaipur',
    text: 'A madam from a training session said: go — you have artisans, you have stock, set up a stall. She had never done an exhibition. She went anyway, sourced goods from another shop to fill the stall, and sat for seven days. People would come and ask if anything had sold. Very few things had. <em>Par baithi rahee.</em> She sat there anyway. She wanted to learn — whatever anyone said, sit here. After sitting like that again and again, she began finding openings.',
    choices: [
      { text: 'Stay here — seven days, nothing selling.', next: 'end_saat_din' },
      { text: 'Ask what she is building toward — Delhi, Hyderabad, the bigger plan.', next: 'scene_future' }
    ]
  },

  scene_women_problems: {
    location: 'Meeting space, Hiran Magri, Udaipur',
    text: 'Some women are being beaten at home. She knows. They don\'t always say it in the group — they say it separately, when alone. <em>Ek dukh bat jaata hai,</em> but only once trust is built. In the meeting, the face says nothing is wrong. Afterwards the story comes. The group does not remove them. Hardship can come for anyone at any time. These women — if you take a loan from a bank, the bank does not understand your condition. Here, if things are tight, you can pay less. It is not like that elsewhere.',
    choices: [
      { text: 'Ask about the women who will not step outside — what stops them.', next: 'scene_women_fear' },
      { text: 'Ask how she started — how she herself found the way to work despite everything.', next: 'scene_secret' }
    ]
  },

  scene_women_fear: {
    location: 'Hiran Magri, Udaipur',
    text: 'Two days ago she held a meeting. Women with degrees, recently married. She asked if they wanted to do some work. The answer was only: give us work we can do at home. <em>Bahar nahi jaana, bahar nahi jaana.</em> They did not want to step out. She asked herself: why did they study? And when she sits alone with these same women, they say their husbands taunt them — go and earn something, see if you can. They want to work. But they have been told so many times <em>how will you manage</em> that the question has become their own.',
    choices: [
      { text: 'Stay here — where that fear starts, what puts it there.', next: 'end_andar_se_dara' },
      { text: 'Ask about her own beginning — when she fought and nobody stood beside her.', next: 'scene_harne_nahi' }
    ]
  },

  scene_harne_nahi: {
    location: 'Hiran Magri, Udaipur',
    text: '<em>Kisine saath nahi diya.</em> No one stood by me. When things were difficult at home, the family criticised more than they helped. No one came. No one brought food. No one asked about money. She shared her problems once or twice. Then she stopped. <em>Koi fark nahi padta mujhe kisi ki baaton se.</em> It no longer makes any difference to her what anyone says. This is not bitterness. It is a conclusion. She says it clearly, not loudly.',
    choices: [
      { text: 'Stay here — what she built in that silence.', next: 'end_koi_fark_nahi' },
      { text: 'Ask what she is building toward — the next plan.', next: 'scene_future' }
    ]
  },

  scene_future: {
    location: 'Hiran Magri, Udaipur',
    text: 'Delhi, Mumbai, Hyderabad — wherever exhibitions are held. She has artisans. She has stock. She needs capital, and she is working out where it comes from. She is still entangled somewhat in family matters and cannot leave yet. But she has a hall upstairs, she has women who save five hundred rupees a month, she has her elder son who manages the house when she goes. <em>Bacche samajh gaye ab.</em> The children understand now. When she goes, the house runs.',
    choices: [
      { text: 'Stay here.', next: 'end_bacche' }
    ]
  },

  /* ---- ENDINGS ---- */

  end_ek_dukh: {
    ending: true,
    type: 'Ending — The Meeting',
    title: 'Ek Dukh Bat Jaata Hai',
    body: "Eight groups. Ten meetings a month. Two hundred or more women who save five hundred rupees each month into a pool that becomes loans when someone needs one. The hall upstairs is hers. The purpose she gives for all of it is not money — it is that when you sit together, shared sorrow is halved. Someone will say something that matters; something that could not be said at home. The group does not remove difficult people. It holds them. The purpose of the group, she says, is to keep people bound to one another.",
    note: '"Ek dukh bat jaata hai." A shared sorrow is halved. She says it like a principle she has proved by observation.'
  },

  end_khud_ke_naam_pe: {
    ending: true,
    type: 'Ending — The Registration',
    title: 'Khud ke Naam pe',
    body: "Three names before her own. She worked through the orders of three different people — her work, their accounts, then the money to her. She says it fast, the way you list steps in a procedure. The fourth time she registered under her own name and spent five more years building from there. When she finally says it — my own name — there is no flourish. She has said this before. She will say it again. It is a fact she arrived at very slowly and now holds very simply.",
    note: '"Teen baar aur logon ke naam se kiya, phir khud ke naam se." Three times through others. Then mine.'
  },

  end_saat_din: {
    ending: true,
    type: 'Ending — The Exhibition',
    title: 'Saat Din Baith ke Dekh Li',
    body: "Seven days at a stall she'd never set up before, selling goods she'd sourced from another shop because her own stock wasn't enough. People came and asked if anything had sold. Very few things had. She sat there anyway. She wanted to learn — whatever anyone said, she would sit. After doing this again and again at different exhibitions, she started finding openings. She says it without drama: she sat there for seven days and watched. That was a beginning.",
    note: '"Par baithi rahee." But she sat there anyway. She had gone with almost nothing. She stayed for seven days.'
  },

  end_andar_se_dara: {
    ending: true,
    type: 'Ending — The Fear Inside',
    title: 'Andar se Daraa Diya',
    body: "They do not want to step outside, these women with degrees who came to her meeting and asked only for work they could do at home. She has watched this fear closely. It does not come from outside — it comes from inside the house itself. Someone keeps telling them, over and over: how will you manage, how will you manage? And so from within, it becomes: perhaps I won't be able to. They live inside this fear. The question was first installed by someone they live with.",
    note: '"Andar se daraa diya." The fear was installed from within. She says it without judgment — just diagnosis.'
  },

  end_koi_fark_nahi: {
    ending: true,
    type: 'Ending — The Silence She Learned',
    title: 'Koi Fark Nahi Padta',
    body: "No one stood by her. For years she worked in secret, through other people's accounts, in the cracks of a house that did not want her to work. When she had difficulties, no one came. No one brought food. No one asked how she was managing. She shared her situation once or twice — with family, with people around her — and the advice was always the same: if there is conflict because of the work, give up the work. She stopped sharing. Now she says: it no longer makes any difference to me what anyone says. She says it quietly. It is a hard thing that became comfortable.",
    note: '"Kisine saath nahi diya." No one stood by me. She fought for many years. Now she says she no longer needs anyone to say anything. Both things are true.'
  },

  end_bacche: {
    ending: true,
    type: 'Ending — Who Stayed',
    title: 'Bacche Samajh Gaye',
    body: "For a long time no one stood by her. She fought alone — her work in other people's names, her savings in other people's accounts, her plans kept inside herself. Then slowly, over the last year or two, her elder son became her support. Now when she goes to an exhibition, he manages the house. When there is work to do online, the two of them sit and do it together. She says: because of him, I no longer need to say much to anyone else. That is the size of what shifted.",
    note: '"Bacche samajh gaye ab." The children understand now. Her son became her support. She says it like it surprised her, though perhaps it did not.'
  }

};
