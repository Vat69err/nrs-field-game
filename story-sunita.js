// story-sunita.js
// Participant 03 - Rural Rajasthan
// Pseudonym: Sunita | Son: Vikas | Daughter: Deepa
// All names, locations, and identifying details changed.

const story = {

  start: {
    location: 'A cloth shop, rented near the road - morning',
    text: `You arrive at a shop in a busy lane near the town - cloth on hangers, saaris folded in columns, Rajputi suits, cosmetics along one wall. A woman is with a customer when you arrive. She is wearing a printed saari from her own stock - she will tell you she wears new arrivals herself before posting them. When the customer leaves she turns to you without ceremony. <em>"Aiye, baitiye."</em> Come, sit. She sets her phone on the counter.`,
    choices: [
      { text: 'Ask about the shop - what she sells, how long it has been here.', next: 'about_the_shop' },
      { text: 'Say you were told she built this from nothing, and ask her to tell you how.', next: 'business_ladder' }
    ]
  },

  about_the_shop: {
    location: 'The shop',
    text: `She shows you around with the ease of someone at home in the space. Saaris for daily use and festivals. Rajputi suits. Blouses she stitches on order. Children's clothes. Cosmetics near the entrance. She named the shop herself - a name she chose. She says: <em>"Apna naam diya."</em> She gave it her name. People see her in a new saari on Instagram and ask where to find it. From here.`,
    choices: [
      { text: 'Ask how long the shop has been running.', next: 'how_long' },
      { text: 'Ask how it started - what was the very first step.', next: 'business_ladder' }
    ]
  },

  how_long: {
    location: 'The shop',
    text: `Three years in this rented space. But the business started before this - smaller, at home, different forms. She says: <em>"17-18 saal lag gaye yahan tak aane mein."</em> Seventeen, eighteen years to get here. She says it without complaint - a count, a fact. It is one of the first things she tells you: not that she built something, but that it took this long. The distance is part of the information.`,
    choices: [
      { text: 'Ask what happened in those seventeen, eighteen years.', next: 'sasural_background' },
      { text: 'Ask what the first step was.', next: 'business_ladder' }
    ]
  },

  business_ladder: {
    location: 'The shop',
    text: `She started with Rs 5. Threading - eyebrow work at home, for neighbors. She saved. She bought readymade blouses for Rs 1000 and sold them. She moved to artificial jewelry. Then to cloth. Then this shop. <em>"Seedhi-seedhi chadhi."</em> Rung by rung, she says - without drama. She did each step when the money was there. No one gave her capital. She built the ladder herself.`,
    choices: [
      { text: 'Ask where the first Rs 5 came from - who helped her start.', next: 'mothers_support' },
      { text: 'Ask what was happening at home while she was building this.', next: 'sasural_background' }
    ]
  },

  sasural_background: {
    location: 'The shop',
    text: `You ask what was happening at home. She is quiet for a moment - not reluctant, just arranging. Then: <em>"17-18 saal torture mila hai. Bahut torture mila hai."</em> Seventeen, eighteen years of torture. Her sasural. Her saas and nanad. She says it clearly, the way she has said everything else - as a number, a fact.`,
    choices: [
      { text: 'Ask what the torture looked like - what they did.', next: 'nanad_saas' },
      { text: 'Ask what eventually changed it.', next: 'bhagwaan_ichha' }
    ]
  },

  nanad_saas: {
    location: 'The shop',
    text: `Her saas and nanad were from a city. She was from a village - they called her <em>"gaav waali."</em> It was not just a word. She could not take milk or ghee from the kitchen without asking permission. She could not go freely to her pihar, her natal home. During exams they would take her books away. During pregnancies she was made to do construction labor at a building site - carrying, mixing. <em>"Bahut kuch saha hai."</em> A great deal was endured.`,
    choices: [
      { text: 'Ask about the exams - she was still trying to study then.', next: 'father_memory' },
      { text: 'Ask about the pregnancies and what happened then.', next: 'construction_pregnancies' }
    ]
  },

  father_memory: {
    location: 'The shop',
    text: `Her father had wanted her to become a police officer. He saw something. She left school in the eighth standard - the marriage came and then the sasural, and when exams were due the books were taken. Her father died a year after the marriage. She says: <em>"Andar ki ichha nahi rok sakte."</em> The inner desire - you cannot stop it. He could not see what she became. But she says it as if he is part of the reason.`,
    choices: [
      { text: 'Ask what that inner desire felt like - even when it couldn\'t move.', next: 'inner_desire' },
      { text: 'Ask what happened during the pregnancies.', next: 'construction_pregnancies' }
    ]
  },

  inner_desire: {
    location: 'The shop',
    text: `Even when the books were being taken, she says, she knew she wanted something. She didn't have a name for it yet. <em>"Andar ki ichha nahi rok sakte - chahein duniya rok de."</em> Even if the whole world tries to stop you, you cannot stop the inner desire. She says this as a thing she has verified, not a slogan. It is the reason, she seems to say, that the Rs 5 thread eventually became a shop.`,
    choices: [
      { text: 'Ask about the pregnancies - what was happening to her then.', next: 'construction_pregnancies' },
      { text: 'Ask about how she eventually got her own space.', next: 'five_years_alone' }
    ]
  },

  construction_pregnancies: {
    location: 'The shop',
    text: `During her pregnancies she was ejected from the sasural repeatedly - put out with nowhere to go. And in between: construction labor. The house was being built; she was part of the labor, carrying, mixing. Her mother came each time. <em>"Maa ne bahut sambhala."</em> Her mother held her together. From the pihar village - several hours away - she would come when Sunita was put out.`,
    choices: [
      { text: 'Ask about her mother - what she was and still is.', next: 'mothers_support' },
      { text: 'Ask about the five years in the separate house.', next: 'five_years_alone' }
    ]
  },

  mothers_support: {
    location: 'The shop',
    text: `Her mother still works. Keeps a buffalo. When she visits she brings ghee - from her own buffalo. Sunita says this the way you would name something that keeps you warm. <em>"Pihar valon ne support kiya."</em> The natal family supported her. Her mother was the one who came when the sasural put her out. The mother was the one who helped when there was nothing. She says it once and moves on.`,
    choices: [
      { text: 'Ask about the five years in the separate house.', next: 'five_years_alone' },
      { text: 'Ask about her husband - what he was like in those years.', next: 'husband_then' },
      { text: 'Stay with this - none of what came after may have been possible without it.', next: 'end_mother' }
    ]
  },

  husband_then: {
    location: 'The shop',
    text: `Her husband was at a chai stall then. Present, but not earning much - and not able or willing to stop what his mother and sister were doing. She does not labor over this. She says: <em>"Ab woh theek hai."</em> He is fine now. And then: she herself found him his current job. She sent his application to a solar energy company. He passed the interview. He is an engineer there now. <em>"Main ne bheji thi uski application."</em> I sent his application.`,
    choices: [
      { text: 'Ask about the five years in the separate house.', next: 'five_years_alone' },
      { text: 'Ask about the sasur who blocked the shop.', next: 'sasur_blocked' }
    ]
  },

  five_years_alone: {
    location: 'The shop',
    text: `For five years she lived in a separate rented house - just her and the children, apart from the sasural. She says: <em>"Ab, ab bas, meri zindagi meri hai."</em> Now, now enough - my life is mine. There is a small stutter in the middle, as if she is saying it again for herself. Those five years were when she built the business. Threading to blouses to jewelry to cloth. The space made it possible.`,
    choices: [
      { text: 'Ask what the sasur said when she tried to set up the shop at the sasural home.', next: 'sasur_blocked' },
      { text: 'Ask about Instagram - how she runs the online side now.', next: 'instagram_work' }
    ]
  },

  sasur_blocked: {
    location: 'The shop',
    text: `She had thought about setting up in a room at the sasural house. Her sasur said no. She didn't argue. <em>"Agar unke ghar mein nahi toh bahar toh ho sakta hai."</em> If not in their house, then outside is possible. She found this rented space and built the shop here. Now, she says, they are asking her to come back - they want to build her a room upstairs at the sasural. <em>"Ab bulate hain."</em> Now they call her back.`,
    choices: [
      { text: 'Ask whether she is going to go back.', next: 'sasural_reversal' },
      { text: 'Ask about Instagram and how she runs the shop now.', next: 'instagram_work' }
    ]
  },

  instagram_work: {
    location: 'The shop',
    text: `She wears the new stock herself and posts reels. She pulls out her phone and shows you - a video of herself in a saari she has just received, shot in the shop, cloth visible behind her. Customers see it and message her. <em>"Jo naya maal aata hai usse pehen ke video banate hain."</em> Whatever new stock comes in, we wear it and film. She says "we" - her son helps sometimes.`,
    choices: [
      { text: 'Ask about her son Vikas - how he helps with the digital side.', next: 'son_vikas' },
      { text: 'Ask about the conversation that turned into something about Meesho and online platforms.', next: 'meesho_amazon' }
    ]
  },

  son_vikas: {
    location: 'The shop',
    text: `Her son - thirteen years old - is good with phones. He made a short video for his father's workplace once, a demonstration of a product that impressed his boss. She tells you this with visible, unperformed pride. He helps her sometimes with the reels. She says: <em>"Bacche hoshiyaar hain."</em> The children are sharp. She means something specific by sharp - awake, capable, already doing.`,
    choices: [
      { text: 'Ask about her daughter.', next: 'daughter_deepa' },
      { text: 'Ask what comes next - for the shop, for her.', next: 'future_vision' }
    ]
  },

  daughter_deepa: {
    location: 'The shop',
    text: `Her daughter is also thirteen. <em>"Dono milke chalte hain."</em> Both move together. She watches them and says: study. She does not project much further. She has learned not to project too far. She is in her mid-thirties now. She has known what it costs when a plan arrives before its moment.`,
    choices: [
      { text: 'Ask about the devar - you have heard something about what the village knows.', next: 'devar_consequence' },
      { text: 'Ask what she hopes for herself, not just for them.', next: 'future_vision' }
    ]
  },

  devar_consequence: {
    location: 'The shop',
    text: `Her devar - her husband's younger brother - is a government school teacher. He cannot find a wife. The entire village knows what was done to her in that sasural. <em>"Gaav mein sab kuch maloom ho jaata hai."</em> In a village, everything becomes known. She says this without triumph, without cruelty. The devar's difficulty is simply part of what the village carries now. She moves past it in the same breath.`,
    choices: [
      { text: 'Ask about the sasural family now - what they have become.', next: 'sasural_reversal' },
      { text: 'Ask what it felt like when the change began - when things started to shift.', next: 'bhagwaan_ichha' }
    ]
  },

  sasural_reversal: {
    location: 'The shop',
    text: `<em>"Abhi mera pura sasural ka parivar meri taraf hai."</em> Now the entire sasural family is on her side. The same people who controlled her food, took her books, sent her to build walls while pregnant. She doesn't explain exactly how this happened - time, the business, the village's awareness. She says they want her to come back. She is not rushing to answer them. The shop here is what it is.`,
    choices: [
      { text: 'Ask what changed the structure - how the reversal began.', next: 'bhagwaan_ichha' },
      { text: 'Ask about "kabhi udaas ho ke nahi baithi" - how she never sat in sadness through all of this.', next: 'kabhi_udaas' }
    ]
  },

  bhagwaan_ichha: {
    location: 'The shop',
    text: `She says: <em>"Bhagwaan ne apni ichha se mereko yeh business chalu karwaya hai, ki main kisi ka torture nahi sehun."</em> God, in his own will, got this business started for me - so that I would not have to endure anyone's torture any longer. It is not a passive statement. She understands the business as the mechanism of her freedom. The divine frame is also the description of a structure that changed: income, space, a rented room with a lock.`,
    choices: [
      { text: 'Ask about "garur" - what pride means in the context of her own business.', next: 'garur_meaning' },
      { text: 'Ask about "kabhi udaas ho ke nahi baithi" - that she never sat in sadness.', next: 'kabhi_udaas' }
    ]
  },

  garur_meaning: {
    location: 'The shop',
    text: `<em>"Garur se kaam karte ki apna khud ka dhandha hai."</em> You work with pride because the business is your own. She is not talking about arrogance. She is talking about the feeling of doing something that belongs entirely to you - that no one gave you, that no one can take back by saying no. Her sasur said no. She rented elsewhere. The sasur is now asking her to come back. The garur is not about triumph.`,
    choices: [
      { text: 'Ask what she never sat in sadness about - how she kept going through it all.', next: 'kabhi_udaas' },
      { text: 'Ask what comes next for the business.', next: 'future_vision' },
      { text: 'Leave here - you have what you need. The shop is the argument.', next: 'end_garur' }
    ]
  },

  kabhi_udaas: {
    location: 'The shop',
    text: `<em>"Kabhi udaas ho ke nahi baithi."</em> Even through all of it - seventeen, eighteen years, the books taken, the labor, the pregnancies and ejections - she never sat in sadness. You ask: how? She considers the question as if it genuinely interests her. She says: the inner desire was always there. There was always something to move toward. And: <em>"Aage badh ke hi raho."</em> Just keep moving forward. She says this as observation, not instruction.`,
    choices: [
      { text: 'Ask about Meesho - the moment the interview became something else.', next: 'meesho_amazon' },
      { text: 'Ask the research question you came to ask.', next: 'researcher_question' }
    ]
  },

  meesho_amazon: {
    location: 'The shop',
    text: `At some point the conversation tips. She shows you her phone and asks about Meesho. About an online platform for small women sellers she has heard about. She wants to know how to register, what the margins are, whether it is better for smaller sellers than the open market. You realize: she is conducting an inquiry. This conversation is part of her doing business. She is not only a subject being studied. She is researching you, a little.`,
    choices: [
      { text: 'Try to answer what you know - engage with her as a business owner.', next: 'future_vision' },
      { text: 'Notice the role reversal and ask what she would want you to understand.', next: 'researcher_question' }
    ]
  },

  future_vision: {
    location: 'The shop',
    text: `She wants more platforms. More reach for the reels. She may go back to the sasural, to the upstairs room they are offering. She may not. She wants both children to study. She says: <em>"Roz kuch naya karte hain."</em> Every day something new. She is not restless. She is consistent. There is a difference. She has been doing something every day since the Rs 5.`,
    choices: [
      { text: 'Ask what she wants a researcher to understand about all of this.', next: 'researcher_question' },
      { text: 'Close here - you have what you came for.', next: 'end_business' }
    ]
  },

  researcher_question: {
    location: 'The shop',
    text: `You ask: what should a researcher understand - about what she has done, what it cost, what it means? She thinks. Then: <em>"Aapne pucha isliye maine itni baat ki."</em> You asked, so I spoke this much. It is not a reproach. It is an observation about how telling works - she would have carried all of this without speaking it, if you hadn't asked. The speaking is not the same as the having-done.`,
    choices: [
      { text: 'Leave thinking about what the business itself argues.', next: 'end_business' },
      { text: 'Leave thinking about the inner desire that kept running under everything.', next: 'end_inner_desire' },
      { text: 'Leave thinking about what reversed - the sasural, the village, the family.', next: 'end_reversal' },
      { text: 'Leave thinking about what research is and isn\'t in this room.', next: 'end_researcher' }
    ]
  },

  end_business: {
    ending: true,
    type: 'Ending - The argument in the ladder',
    title: 'Seedhi-seedhi chadhi',
    body: 'You leave with the business ladder in your notes: Rs 5, threading, blouses, jewelry, cloth, a shop. It looks like a story of incremental enterprise. It is also the structure of a life rebuilding itself one affordable step at a time, when no other structure was offered. She did not start the shop to prove a point. She started threading because she had Rs 5 and needed to do something with it. The shop is what happened when she kept doing that. You can write about micro-enterprise. Whether that framing fits what you saw is the question you will carry home.',
    note: '"Seedhi-seedhi chadhi." - Sunita'
  },

  end_inner_desire: {
    ending: true,
    type: 'Ending - Andar ki ichha',
    title: 'Andar ki ichha nahi rok sakte',
    body: 'Her father wanted her to be a police officer. She left school in the eighth standard. Her books were taken during exams. Her father died a year after the marriage. What he saw in her - she has been verifying it ever since, without any audience. "Andar ki ichha nahi rok sakte, chahein duniya rok de." The world can try to stop you. You cannot stop the inner desire. She is in her mid-thirties. She has a shop. She wears the new saaris and films herself. The inner desire found its form. You leave wondering who saw it coming and who did not.',
    note: '"Andar ki ichha nahi rok sakte." - Sunita'
  },

  end_garur: {
    ending: true,
    type: 'Ending - The work of pride',
    title: 'Garur se kaam karte',
    body: 'She used the word "garur" - pride - for the feeling of working in your own business. Not arrogance. Not performance. The feeling of being in something entirely yours - that you built, that no one handed you, that no one can take back by saying no. Her sasur said no. She rented elsewhere. The sasur is now asking her to come back. The garur is not about that reversal. It is the feeling of doing something in the world that belongs to you. She has had it for three years, renting this space. She will have it wherever she goes next.',
    note: '"Garur se kaam karte ki apna khud ka dhandha hai." - Sunita'
  },

  end_reversal: {
    ending: true,
    type: 'Ending - What reversed',
    title: 'Meri taraf hai',
    body: 'The entire sasural family is now on her side. The nanad who called her "gaav waali." The saas who controlled her access to milk. The sasur who said no to the shop. The devar who now cannot find a wife. She did not set out to reverse this. She set out to survive, then to build, then to live in a way that felt like hers. The reversal was a consequence, not the goal. She does not talk about it with triumph. She talks about it the same way she talks about the shop rent and the Instagram reels: as fact.',
    note: '"Abhi mera pura sasural ka parivar meri taraf hai." - Sunita'
  },

  end_mother: {
    ending: true,
    type: 'Ending - The thread from pihar',
    title: 'Pihar valon ne support kiya',
    body: 'When the sasural sent her out during pregnancies, her mother came. Her mother still keeps a buffalo and brings ghee. The natal family supported her - "pihar valon ne support kiya" - and this sentence carries the weight of a specific kind of survival. The academic literature on women in distress often notes the absence of natal family support. Here it was present. The Rs 5 and the threading and the saaris - none of this may have been possible without someone coming when she was put out with nowhere to go. You did not come to study that. But it is in the room.',
    note: '"Maa ne bahut sambhala." - Sunita'
  },

  end_researcher: {
    ending: true,
    type: 'Ending - What research is in this room',
    title: 'Aapne pucha isliye',
    body: 'At some point she stopped being studied and started studying you. She showed you her phone and asked about online platforms, margins, logistics for small sellers. She wanted information useful to her. You were the one with access to it. The transaction was mutual. She answered your questions; you answered hers. "Aapne pucha isliye maine itni baat ki" - you asked, so I spoke this much. The speaking required the asking. And what she did not speak, because you did not think to ask, is a different paper entirely - one that could not be written from this room.',
    note: '"Aapne pucha isliye maine itni baat ki." - Sunita'
  }

};
