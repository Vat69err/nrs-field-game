// story-laxmi.js
// Participant 02 - Rural Rajasthan
// Pseudonym: Laxmi | Daughter: Kavita | Son: Raju
// All names, locations, and identifying details changed.
// Source transcript: 47_Laxmi Lohar (anonymised)

const story = {

  start: {
    location: 'A rented room, Rajasthan - morning',
    text: `Neelima di, the community organizer who set up this meeting, leads you into a narrow lane. The door is open onto a room the size of a large cupboard - kitchen, one room, a bathroom. A woman sits on the floor, back straight. She looks up without surprise. <em>"Nikaalni hai zindagi,"</em> she says, before you have even sat down. <em>Badhiya hai. Nikal gaye hain.</em> Life has to be pulled out. It's fine. We have managed. Neelima di says her name is Laxmi.`,
    choices: [
      { text: 'Sit down and ask her to tell you about herself.', next: 'her_opening' },
      { text: 'Ask Neelima di to give you some context first.', next: 'neelima_context' }
    ]
  },

  neelima_context: {
    location: 'Outside, in the lane',
    text: `Neelima di speaks quickly and quietly. She met Laxmi around eight years ago. The husband had been gone for some time. The children were small. There had been a crisis - a child burned by hot tea, no money for a hospital. "Maine le gayi thi," she says - I took her. She explains the center: clothes for women who came in torn ones, slippers, medical referrals. She says: <em>"Pehle toh maarne ke liye taiyaar baithī thi."</em> Ready to die. She says it like a fact from a report. Then: "Ab toh Jhansi ki Rani hai." Now she is our Jhansi ki Rani. You go inside.`,
    choices: [
      { text: 'Begin by asking Laxmi how she is managing now.', next: 'her_opening' },
      { text: 'Ask Laxmi to start from wherever she wants.', next: 'early_life' }
    ]
  },

  her_opening: {
    location: 'Rented room',
    text: `You ask Laxmi to tell you about herself. She doesn't take long to decide where to start. <em>"Iske papa chhod ke gaye the,"</em> she says. These children's father left. That is the beginning. She says it plainly, as if reading the first line of a document. It happened. The children were small. She was alone. Neelima di, across the room, says quietly: <em>"Aaj bhi nasha, uske saath koi aurat tik nahi paati."</em> He still drinks. No woman stays with him. Laxmi says nothing more on this for now.`,
    choices: [
      { text: 'Ask about the marriage - how it started.', next: 'marriage_early' },
      { text: 'Ask what she did those first months alone.', next: 'first_months' },
      { text: 'Ask about the children - how old were they?', next: 'children_ages' }
    ]
  },

  early_life: {
    location: 'Rented room',
    text: `She was the youngest of six siblings. She was married at four or five years old - she and her older sister married off at the same time. She waves a hand when the interviewer asks about schooling: there were six of them at home, nobody studied much. When the interviewer says she doesn't look like someone with little education, Neelima di laughs. <em>"Ab toh dekh liya"</em> - now you see her. Before, Neelima di says, all the women in that situation were ready to die.`,
    choices: [
      { text: 'Ask about the marriage - how it went.', next: 'marriage_early' },
      { text: 'Ask what changed.', next: 'her_opening' }
    ]
  },

  marriage_early: {
    location: 'Rented room',
    text: `She was married at four or five years old - alongside her elder sister, both at once. <em>"Ek ke saath ek free,"</em> says Neelima di, laughing. One free with one. Laxmi says: not free exactly, but they gave the younger one along with the older. She was sent to her sasural at around fifteen. The first two or three years were fine. Then it changed. He drank. He got involved with other women. He stopped giving money for the house. Then he stopped coming home altogether.`,
    choices: [
      { text: 'Ask what happened when she first found out.', next: 'marriage_trouble' },
      { text: 'Ask when it became permanent - when she knew he wasn\'t coming back.', next: 'return_years' }
    ]
  },

  marriage_trouble: {
    location: 'Rented room',
    text: `He had studied through twelfth class. He knew people from before the marriage. After the first child came, he became someone else. When she was pregnant he beat her badly. Her family took her back. She stayed a year and a half. He said: <em>mujhe nahi chahiye</em> - I don't want her. She had a daughter now. She asked: where do I go? Her family sent her back. He promised to change. He didn't change. He came and went, came and went. Then for eight years - nothing.`,
    choices: [
      { text: 'Ask about those middle years when he was still coming occasionally.', next: 'return_years' },
      { text: 'Ask what she did when he finally stopped coming.', next: 'first_months' }
    ]
  },

  return_years: {
    location: 'Rented room',
    text: `He would come once or twice a year, stay two or three days, then disappear again. He gave nothing to the house. Her family from peehar helped a little. She worked where she could. She had three children - the eldest is now with the father's side, has been for two years. <em>"Ye do the,"</em> she says, indicating Kavita and Raju. These two. The last time he came was eight years ago. <em>"Aath saal ho gaye bilkul nahi aaya."</em> Eight years. Completely gone. She says it without visible grief - a number, a count, a fact.`,
    choices: [
      { text: 'Ask what she did in those first weeks alone with two children.', next: 'first_months' },
      { text: 'Ask whether she ever considered remarrying.', next: 'remarriage' }
    ]
  },

  children_ages: {
    location: 'Rented room',
    text: `Kavita was small - she is now in twelfth class. Raju, the son, is in eighth. There was also an older daughter, Laxmi says briefly - she is with the father's people now, has been for two years. <em>"Ye do the,"</em> she says. These two. She does not explain further. The room has school books on the floor and a photograph on the wall. The two children are here, somewhere nearby. This rented room holds everything.`,
    choices: [
      { text: 'Ask what happened - how the family ended up in this situation.', next: 'marriage_trouble' },
      { text: 'Ask how she manages with two children alone.', next: 'first_months' }
    ]
  },

  first_months: {
    location: 'Rented room',
    text: `She was sick from tension. Her mind wasn't working, she says - she didn't know what to do. She was making tea one day, Kavita small beside her. She had a dizzy spell - chakkar - and the pot of hot tea fell directly onto the child. Burns across her body. There was no money to get to a hospital. She didn't even know how serious it was. She took Kavita to Neelima di. <em>"Meri baat toh baad mein suni Kavita ko dekhte hi"</em> - Neelima di looked at the child first, before even hearing Laxmi's story, and took her straight to hospital.`,
    choices: [
      { text: 'Ask how she found Neelima di.', next: 'finding_neelima' },
      { text: 'Ask what happened after Kavita recovered.', next: 'after_burning' }
    ]
  },

  finding_neelima: {
    location: 'Rented room',
    text: `She had heard about the center from another woman. She went not knowing what to expect. When she arrived with Kavita burned and no money, Neelima di did not stop to hear the story first. She took the child. <em>"Madam ne sahi karwayi hospital le jaake."</em> The center kept clothes for women who came in torn ones. Slippers. Medical referrals. No shame attached to any of it. She says: <em>"Ab toh madam ne hoshiyaar kar diya hai."</em> The organizer made me sharp.`,
    choices: [
      { text: 'Ask what "hoshiyaar" means - what changed.', next: 'hoshiyaar_meaning' },
      { text: 'Ask what she did after Kavita recovered - how she started working.', next: 'after_burning' },
      { text: 'Stay with this - the interview could not have happened without this relationship.', next: 'end_neelima' }
    ]
  },

  hoshiyaar_meaning: {
    location: 'Rented room',
    text: `She thinks for a moment. What does it mean to become sharp? <em>"Jab main hoshiyaar nahi hui tab ab nahi maarte mere ko - 7-8 saal ho gaye jab nahi haath lagaya."</em> When I was not aware, they hit me. For seven, eight years now - no one touches me. Neelima di says: <em>"Arrey ab toh hamari Jhansi ki Rani hai."</em> Now she is our Jhansi ki Rani. Laxmi doesn't disagree. She just says: theek hi hai.`,
    choices: [
      { text: 'Ask about the moment she fought back.', next: 'saas_fight' },
      { text: 'Ask about the work she built after that.', next: 'after_burning' }
    ]
  },

  saas_fight: {
    location: 'Rented room',
    text: `She was making rotis at the sasural. Something had happened on the phone - some word between her saas and her son. The saas came straight at her and hit her. Two or three slaps. Laxmi pauses. Then: <em>"Phir main uth ke thodi der toh nahi maara, phir sasura ji sab chale gaye toh maine bhi 4-5 chanta phir ache se lagaya."</em> Then I also gave four or five, properly. Everyone in the room laughs, including Neelima di. <em>"Uske baad usne haath nahi lagaya."</em> She never raised her hand again.`,
    choices: [
      { text: 'Ask how she felt after.', next: 'after_fight' },
      { text: 'Ask what her relationship with the sasural is now.', next: 'sasural_now' }
    ]
  },

  after_fight: {
    location: 'Rented room',
    text: `She says she was not afraid. <em>"Mukka dekhte hi maara tha usko."</em> She punched her in response. And that was it. <em>"Ab toh himmat hi nahi hogi."</em> Now she wouldn't have the nerve. Neelima di says: if he showed up today, all of them together would wash him out. Laxmi laughs: <em>"Yahi dho de main kya."</em> What would I even wash. It is not the laugh of someone who feels powerful. It is the laugh of someone who has filed the matter away and moved on.`,
    choices: [
      { text: 'Ask about the sasural now.', next: 'sasural_now' },
      { text: 'Ask about the work she does.', next: 'work_intro' }
    ]
  },

  after_burning: {
    location: 'Rented room',
    text: `After Kavita recovered she started cleaning work. Jhadu, poche - sweeping, mopping. Three or four years. <em>"Kuch aata nahi tha itna"</em> - she didn't know much then. Then she started cooking. She has been doing cooking work for four or five years now. Fixed place, fixed hours - eight in the morning until eight-thirty or nine at night. Twelve hours. She leaves the children. They manage. Her son learned to cook for himself. <em>"Chhuta kaam khaane ka seekh liya."</em> He learned the small cooking from it.`,
    choices: [
      { text: 'Ask about the stitching work she does alongside cooking.', next: 'silai_work' },
      { text: 'Ask about the children while she is away all day.', next: 'children_alone' }
    ]
  },

  work_intro: {
    location: 'Rented room',
    text: `She lists the work: cooking at a fixed place, eight in the morning to nine at night, twelve hours. Stitching at home - blouses, one or two hours in the middle of the day during her break. She trained for stitching - at home first, picking it up slowly, then three or four months at a training center outside. "Khali blouse hi sikha" - just blouses. Neelima di mentions a boutique training program, government-funded, free, at a center in the city. Laxmi says: <em>"Chali toh jaayegi."</em> I can go.`,
    choices: [
      { text: 'Ask about her son - you heard he also works after school.', next: 'raju_work' },
      { text: 'Ask about Kavita\'s plans for after twelfth class.', next: 'kavita_plans' }
    ]
  },

  silai_work: {
    location: 'Rented room',
    text: `She learned stitching by herself at home first - slowly, by doing. Then she went for formal training for three or four months. Just blouses. She stitches during her midday break from the cooking job. Savita, who is also in the room, holds up her blouse: <em>"Mere bhi sil dena ab aap."</em> Stitch mine too. Laxmi waves her off with a slight smile. She says: if she learns the full boutique work - kurtas, suits - she could take more work home. Neelima di nods.`,
    choices: [
      { text: 'Ask about her son who works after school.', next: 'raju_work' },
      { text: 'Ask about what she is planning next.', next: 'future_vision' }
    ]
  },

  children_alone: {
    location: 'Rented room',
    text: `The son, Raju, goes to school and then at five in the evening goes to a kirana shop near the house. He comes back at ten at night. <em>"Ye toh kahin nahi dauda hai."</em> He doesn't run around. School, then shop, then home. He earns a little. Kavita is in twelfth class, Arts. She is here, listening quietly. The interviewer asks what she wants to do after. She says she hasn't thought yet. Neelima di mentions a government computer course, boutique training, a certificate. Laxmi says: padhai vadhao. Keep studying.`,
    choices: [
      { text: 'Ask Laxmi what she hopes for Kavita.', next: 'kavita_hopes' },
      { text: 'Ask about Raju\'s work at the shop.', next: 'raju_work' }
    ]
  },

  raju_work: {
    location: 'Rented room',
    text: `Raju is in eighth class. He comes from school and at five goes to a kirana shop nearby - stays until ten at night. He earns something. Laxmi says it simply: <em>"Kamata hai thoda."</em> He earns a little. Neelima di, to the boy: "Gutka khata ho?" Tobacco? He says no. She studies his teeth with mock severity. He laughs. He doesn't go anywhere, Laxmi says. School, shop, home. <em>"Seedha hai."</em> Straight. She says this with approval and something that is not quite pride and is not quite relief.`,
    choices: [
      { text: 'Ask about Kavita\'s plans.', next: 'kavita_plans' },
      { text: 'Ask about what Laxmi wants for herself.', next: 'future_vision' }
    ]
  },

  kavita_plans: {
    location: 'Rented room',
    text: `Kavita - burned by hot tea years ago, now in twelfth class - sits quietly through much of this. When the interviewer asks her directly what she wants to do, she says she hasn't thought yet. Arts. The interviewer mentions her own sister does interior design, offers guidance. Kavita is polite, says little. Neelima di suggests: computer course, boutique training, a certificate from the government scheme. <em>"Apna khud ka dookaan."</em> Her own shop. Laxmi says: <em>"Padhai vadhao beta, padhai ke liye."</em> Study more. First study.`,
    choices: [
      { text: 'Ask Laxmi about her own plans and what she is working toward.', next: 'future_vision' },
      { text: 'Ask about the sasural - does she still go?', next: 'sasural_now' }
    ]
  },

  kavita_hopes: {
    location: 'Rented room',
    text: `Laxmi doesn't answer with ambition first. She says: she is studying, she is in twelfth. What more is there for now? Then she adds: computer, training, something of her own. Neelima di says: if both of them train and open a boutique together, they could employ other women from the village. Laxmi listens. <em>"Samajh gaye,"</em> she says. Understood. Whether this is agreement or just acknowledgment is hard to read. She looks at Kavita, who is looking at the floor.`,
    choices: [
      { text: 'Ask about the sasural - she still goes there sometimes?', next: 'sasural_now' },
      { text: 'Ask what Laxmi wants for herself, not just the children.', next: 'future_vision' }
    ]
  },

  sasural_now: {
    location: 'Rented room',
    text: `She still goes to the sasural occasionally. Not for long. She goes for her share. <em>"Wahin pe toh khet vagarah sab le rakha hai maine - apna hissa."</em> She has claimed her portion of land and property. She goes when she wants, leaves when she wants. <em>"Seva ke liye nahi, seva nahi karni."</em> Not to serve. Not service. The saas and sasur are old now. He - the husband somewhere in the city - tells her to go tend to his parents. She says: <em>"Main kyu jaun."</em> Why should I go.`,
    choices: [
      { text: 'Ask whether she ever considered remarrying.', next: 'remarriage' },
      { text: 'Ask what she holds onto - what keeps her stable.', next: 'what_holds' }
    ]
  },

  remarriage: {
    location: 'Rented room',
    text: `Her family suggested it once. You have a daughter now, they said - who would take the daughter? Someone might take you, not the child. She said: where do I go without my daughter? That closed it. She does not seem to grieve this decision. <em>"Bacchon ke liye jaana padta tha."</em> For the children - that was her calculation. The children are her reason. Everything else she has set down.`,
    choices: [
      { text: 'Ask what she holds onto - what keeps her steady.', next: 'what_holds' },
      { text: 'Ask how she sees the years ahead.', next: 'future_vision' }
    ]
  },

  what_holds: {
    location: 'Rented room',
    text: `She doesn't give one answer. She says: the children. She says: the work. She says: <em>"Ab toh nahi aati hoon main dhokhe dhakhe."</em> I don't get deceived any more. She says Neelima di. She says: <em>"Seedha rehna chahiye - jab hoshiyaar ho jaate hain toh seedha rehna chahiye."</em> When you become sharp you have to stay straight. She is not saying this to you. She is saying it for herself or perhaps for Kavita, who is sitting close.`,
    choices: [
      { text: 'Ask about the future - what she is working toward.', next: 'future_vision' },
      { text: 'Ask what she wants you to understand about her life as a researcher.', next: 'researcher_question' }
    ]
  },

  future_vision: {
    location: 'Rented room',
    text: `She would like to learn full boutique work - not just blouses. She has heard there is a free government course; she can go. She wants Kavita to do the computer training. She wants Raju to keep studying. <em>"Seedhe hain dono."</em> Both are straight. There is no dramatic future she describes. She comes back, as she came in, to the same words: <em>"Nikaalni hai zindagi."</em> Life has to be pulled out. Then: <em>"Nikal gaye hain."</em> We have managed.`,
    choices: [
      { text: 'Ask what she would want you to understand - as a researcher.', next: 'researcher_question' },
      { text: 'Ask whether she feels content with where things are.', next: 'contentment' }
    ]
  },

  contentment: {
    location: 'Rented room',
    text: `She thinks about the word. She does not say yes. She says: <em>"Theek hai."</em> It is fine. She says: eight years ago she wanted to die. <em>"Ki bas theek us time toh bahut hi mar jana achha hai madam aisi halat."</em> That is true. She says it in the same tone she uses for everything else. And now? She goes to work. She comes home. The children are in school. <em>"Badhiya hai."</em> Fine. She says it again.`,
    choices: [
      { text: 'Ask one last thing - what she would want changed.', next: 'researcher_question' },
      { text: 'Close the interview here. You have what you came for.', next: 'end_practical' }
    ]
  },

  researcher_question: {
    location: 'Rented room',
    text: `You ask: is there anything you want a researcher to understand - about what you have done, what it has cost, what it means? She looks at you for a moment. Neelima di speaks first: <em>"Mahilaon ke upar padhai kar rahi hain unki jaankari lekar - toh uspe jo kanoon bante hain ya kuch hota hai toh tab ye apni baat rakh sakte hain."</em> They are studying what happens to women. So that when laws are made, women can put their case. Laxmi listens. She says: <em>"Haan."</em> Yes.`,
    choices: [
      { text: 'Leave reflecting on what research cannot actually hold.', next: 'end_reflexive' },
      { text: 'Leave thinking about what she has built.', next: 'end_witness' },
      { text: 'Leave thinking about the children and what comes after.', next: 'end_children' },
      { text: 'Leave thinking about the conditions underneath all of this.', next: 'end_structure' }
    ]
  },

  end_practical: {
    ending: true,
    type: 'Ending - The work of staying',
    title: 'Nikal gaye hain',
    body: 'You close your notebook and thank her. She nods. She has a meal to prepare and a morning shift starting early. The interview is over. What you have are facts: twelve hours a day, two jobs, two children, eight years alone, one rented room. They are accurate facts. They do not explain how she stays, or what it costs to stay. She sees you out with the same matter-of-fact courtesy with which she received you. "Nikaalni hai zindagi, badhiya hai." She said it at the beginning. She does not need to say it again.',
    note: '"Nikaalni hai zindagi, badhiya hai. Nikal gaye hain." - Laxmi'
  },

  end_witness: {
    ending: true,
    type: 'Ending - What has been built',
    title: 'Badhiya hai',
    body: 'You leave knowing something you cannot fully account for. Eight years ago she was ready to die - by her own account, by Neelima di\'s account. Today she runs two sources of income, keeps both children in school, travels to sasural on her own terms to collect her share, and laughs - genuinely laughs - retelling the story of the four or five slaps she gave her saas. She does not call this strength. She calls it: theek hai. Fine. You have watched someone name what they have built in the most minimal language possible. You are not sure whether writing it down gets closer to it or further away.',
    note: '"Ab toh madam ne hoshiyaar kar diya hai." - Laxmi'
  },

  end_reflexive: {
    ending: true,
    type: 'Ending - What research cannot hold',
    title: 'Jaankari',
    body: 'Neelima di\'s explanation of what your work is for - laws, policies, women\'s testimony - was directed at you as much as at Laxmi. Laxmi said "haan." She did not push back or ask what had come of it so far. But what you transcribe, and what it becomes in a paper, and what eventually reaches a policy room, and what that policy then does for women like her: these are four different things, each at a distance from the one before it. You are at step one. You leave with that weight, and with her opening sentence: nikaalni hai zindagi. Life has to be pulled out. Not given.',
    note: '"Mahilaon ke upar padhai kar rahi hain... toh uspe jo kanoon bante hain..." - Neelima di'
  },

  end_structure: {
    ending: true,
    type: 'Ending - The conditions underneath',
    title: 'Aisi halat',
    body: 'You leave noting everything she navigated that she did not make: a marriage contracted when she was four years old, a husband whose trajectory of drinking and abandonment she neither caused nor could stop, a daughter burned by hot tea in a moment of exhaustion-induced dizziness, a legal system that could not locate him to serve papers to. She built what she built on ground that was not level. What she calls theek hai covers an enormous amount of uneven terrain. Your research can document the terrain. What moves the ground is a different question.',
    note: '"Ki bas theek us time toh bahut hi mar jana achha hai madam aesi halat." - Laxmi'
  },

  end_children: {
    ending: true,
    type: 'Ending - The ones coming after',
    title: 'Seedhe hain dono',
    body: 'Kavita is in twelfth class. She has not decided what comes after. Raju works at the kirana shop from five to ten and says he doesn\'t eat tobacco. Laxmi has arranged this: school for both, herself working twelve hours a day plus stitching at home, one rented room that holds everything. What happens to the children - whether they hold the ground she has cleared - is not something today\'s conversation can tell you. She knows this. Padhai vadhao. Keep studying. It is an instruction and a hope and a calculation, spoken as one.',
    note: '"Seedhe hain dono." - Laxmi'
  },

  end_neelima: {
    ending: true,
    type: 'Ending - The organizer in the room',
    title: 'Madam ne hoshiyaar kar diya',
    body: 'For this entire interview, Neelima di was present. She filled in what Laxmi left out - the severity of Kavita\'s burns, the legal pressure on the husband, the center\'s services. She gave context, humor, and a kind of protective narration. The story you have heard is partly the story of that eight-year relationship: what it made possible when there was no money and a child was burned, and what it still makes possible now. You did not come to study community organizing. But it is in this room, and it is why this interview happened at all, and it is why she is still here.',
    note: '"Madam ne sahi karwayi hospital le jaake." - Laxmi'
  }

};
