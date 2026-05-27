// story-rekha.js
// Participant 04 - Rural Rajasthan / Jaipur
// Pseudonym: Rekha | Elder daughter: Lenu (used in transcript - pseudonym kept) | Younger daughter: Chinu
// Husband: PDI incharge, referred to by role only
// All names, locations, and identifying details changed.

const story = {

  start: {
    location: 'A two-room home, Jaipur — late morning',
    text: `You are directed here by a community organizer: she is the one who ran the daycare for five years. You find the house by the scooty parked outside and the Christmas decoration still hanging from the ceiling in March — a garland of silver foil stars that the elder daughter put up and hasn't had time to take down. Plants crowd a ledge by the window. A woman in her late forties in a floral housecoat comes downstairs, key in hand. She has been in the field since 7am — cutting receipts, placing orders. She is about to go out again. But she pauses when she sees you. <em>"Baitho baitho."</em> Sit, sit.`,
    choices: [
      { text: 'Ask what she means by "field" — what is the work she does.', next: 'about_work' },
      { text: 'You have heard she ran a daycare here for five years. Ask about that.', next: 'palna_ghar' }
    ]
  },

  about_work: {
    location: 'The home, front room',
    text: `She does two things now. She supplies ration — rice, lentils, sugar — to an NGO hospital and to a self-help network. And she goes house to house cutting receipts for the municipal garbage collection: an auto comes every morning, each household pays Rs 240, she is the one who records it and collects. <em>"Ek ek ghar se."</em> House by house. She leaves at seven. Works until nine, comes back, goes out again at noon. The neighbors notice and count the trips. There is something in her voice when she says this — not resentment. More like a reckoning.`,
    choices: [
      { text: 'Ask what the neighbors say about her — whether people talk about a woman working like this.', next: 'mohalla_nazar' },
      { text: 'Ask how this work started — it wasn\'t always ration and receipts.', next: 'palna_ghar' }
    ]
  },

  mohalla_nazar: {
    location: 'The home, front room',
    text: `She laughs — without bitterness, more like a tired report. <em>"Din bhar ghar aati rehti hai, daudti rehti hai."</em> Running in and out all day. The neighbors see the scooty and count how many times. When she ran the daycare she was Madam to everyone. Then the cancer diagnosis. And after the diagnosis: distance. <em>"Jaise meri bimari nazar lag gayi ho."</em> As if her illness might be catching. She was boycotted — people stopped visiting, stopped speaking. She does not make them wrong for it. She says: main meri gaadi start karti hoon aur seedhi nikal jaati hoon. I start my scooter and I go.`,
    choices: [
      { text: 'Ask about the illness — cancer, she mentioned.', next: 'cancer_field' },
      { text: 'Ask about the daycare — who she was before all this.', next: 'palna_ghar' }
    ]
  },

  palna_ghar: {
    location: 'The home',
    text: `From 2013 to 2017 she ran a daycare for the children of construction labourers. Through a development NGO operating in the area.Twenty-five children. The youngest she received were three months old — their mothers dropped them at nine and collected them at four. She fed them, weighed their medicine in grams, played games, taught them. For Rs 100, Rs 200 a month — whatever the family could give. The NGO provided the ration and the equipment. She carried her own infant daughter to work in the early months. <em>"Apne bachche ko neeche utaar ke dusron ke bachchon ko god mein lena."</em> Setting your own child down to hold someone else's. She says it plainly, as a fact about what the work required.`,
    choices: [
      { text: 'Ask what twenty-five children in a single room looked like — how she managed.', next: 'children_25' },
      { text: 'Ask where this started — what made her want to do this kind of work.', next: 'how_started' }
    ]
  },

  how_started: {
    location: 'The home',
    text: `It was not a calling so much as an opening. She was a housewife. Her husband had just been hired — Rs 2100 a month, barely enough for petrol. Joint family. Daily friction about dal and sabzi and who would buy vegetables. Her jethani was connected to the NGO and they needed someone in the area. She said yes. The salary was Rs 7000. Her younger daughter was still an infant — she took her along every day. <em>"Roti rehti thi toh usko god mein le leti thi."</em> When stirring food she'd hold one child in the crook of her arm while the others played. Then the training came.`,
    choices: [
      { text: 'Ask about the training — she went across the city for a week, in the monsoon.', next: 'training_rain' },
      { text: 'Ask what twenty-five children in one room looked like.', next: 'children_25' }
    ]
  },

  training_rain: {
    location: 'The home',
    text: `A training center across the city, a week long. She went with her infant daughter — bag on one shoulder, baby on the other, umbrella in hand. Two autos to get there each way, in the monsoon. The center taught her gram weights: per child, per meal, everything measured precisely. She had always been weak at arithmetic. In meetings, when she couldn't get the calculations right, she wept. The supervisor said: how can such a small thing make you cry? She said it with kindness. <em>"Kyun nahi aa raha tumhe?"</em> Why can't you get it?`,
    choices: [
      { text: 'Ask what happened — whether she got the gram calculations eventually.', next: 'gram_calculations' },
      { text: 'Ask what the daycare itself looked like — the twenty-five children.', next: 'children_25' }
    ]
  },

  children_25: {
    location: 'The home',
    text: `Mazdoor families. Construction site workers. Some of the children could not yet speak. She held the youngest while the others played. The NGO ran four daycare centers across the area — hers always had the best record. <em>"Chaaron center se best mera record jata tha."</em> From all four, hers. Not a meal wasted. Not a gram off. And then: the parents started calling from home. Could you make a little extra khichdi? The children were talking about the lentil rice she made. They wanted more from home.`,
    choices: [
      { text: 'Ask what the record was — what she actually got right, after the tears.', next: 'gram_calculations' },
      { text: 'Ask when the daycare ended and what came after.', next: 'shg_200' }
    ]
  },

  gram_calculations: {
    location: 'The home',
    text: `Fifty grams per child per meal, and not one bowl could wander — not one katori over or under, or someone went hungry or something was wasted. <em>"Per bacche ka gram ke hisab se kabhi ek katori idhar se udhar nahi aati thi meri."</em> Not one bowl ever wandered at her center. She mastered it in two months. And then parents began calling: can you make extra khichdi? They liked what she cooked. She laughs: <em>"Main khud hi nahi soch pati thi ki main kaisa banati hoon."</em> She still doesn't know what she did to it. She just — paid attention.`,
    choices: [
      { text: 'Let this moment hold.', next: 'end_extra_khichdi' },
      { text: 'Ask how the daycare ended — the last day, the children going home.', next: 'scene_daycare_close' }
    ]
  },

  end_extra_khichdi: {
    ending: true,
    type: 'Encounter / Participant 04',
    title: '"Ek katori bhi idhar se udhar nahi gayi"',
    body: `She ran a daycare for five years. Twenty-five children of construction labourers. She cried in meetings over gram calculations, and then she mastered them. Best record among four centers. Parents called from home asking for extra khichdi — the children were talking about her lentil rice at home. She doesn't know what she did to make it taste like that. She thinks she just paid attention. At the time she did not know she was learning how to run things precisely under pressure. She would find out later.`,
    note: `"Main khud hi nahi soch pati thi ki main kaisa banati hoon." — Rekha`
  },

  shg_200: {
    location: 'The home',
    text: `After the daycare: she ran a self-help group. Two hundred members — women from the neighborhood and the nearby settlement. She linked them to a local savings organization, run by a man in the area. For two, three years money moved — deposits, fixed deposits, interest. She put in four FDs herself, one lakh each. Her own money. <em>"Meri khud ki personal."</em> Four lakhs. The man worked beside them for nearly three years. January 2021. And then he was gone.`,
    choices: [
      { text: 'Ask about those years before — the meetings, the two hundred women, what it was.', next: 'scene_shg_early' },
      { text: 'Ask what she did when the money did not come back.', next: 'fraud_day' }
    ]
  },

  sarvodaya_man: {
    location: 'The home',
    text: `He had told her to wait two more days — her FDs had matured, he'd pay her. He said he was at a wedding. Two days he stalled. On the third day she went to his house: padlock on the door. She called his son. The son said his father was at the wedding, he didn't know where. Then she saw it — a letter pasted to the wall: <em>"Main paisa dene mein asamarth hoon isliye main yahan se ja raha hoon."</em> I am unable to repay. I am leaving. The son was there. His wife was there. And in the wife's eyes — she says this carefully — not one tear.`,
    choices: [
      { text: 'Ask about the letter — what happened when it was read aloud.', next: 'fraud_day' },
      { text: 'Ask about the women who were waiting in the lane.', next: 'angry_crowd' }
    ]
  },

  fraud_day: {
    location: 'The home',
    text: `Thirty, forty people in the lane. Members who had deposited. The son read the letter aloud. <em>"Jaise hi wo letter padh raha tha, main toh jaise baithe baithe behosh ho gayi."</em> While it was being read she felt herself go. She was sitting in a chair. Her friend shook her. Nothing. Someone tilted the chair and she slid. Her jaw locked shut. They pried it open with a spoon. Still nothing. Three men carried her inside and laid her on a cot. She lay without consciousness for a long time. They put her in an auto and brought her home.`,
    choices: [
      { text: 'Ask what the women in the lane were saying to her — before she fainted.', next: 'angry_crowd' },
      { text: 'Ask what the next year was like.', next: 'depression_year' }
    ]
  },

  angry_crowd: {
    location: 'The home',
    text: `Fifty women. The ones from the neighboring settlement, where the loss was larger. They said things she will not repeat in full. <em>"Mere kaan ke keede jhad gaye."</em> The insects fell from her ears. She had been the one who brought them into this — she ran the group, she trusted the man. Among two hundred, she says, five maybe understood. The rest blamed her. She had been handling her group's money, and this was the result. Ten days after the fraud she went back — to the settlement — alone. They asked why. <em>"Maar denge toh koi baat nahi."</em> If they kill me, no matter.`,
    choices: [
      { text: 'Let this hold here.', next: 'end_maar_denge' },
      { text: 'Ask what the year after looked like — the year she did not leave the house.', next: 'depression_year' }
    ]
  },

  end_maar_denge: {
    ending: true,
    type: 'Encounter / Participant 04',
    title: '"Maar denge toh koi baat nahi"',
    body: `Ten days after the fraud collapsed. Four lakhs of her own money gone. Two hundred women's deposits gone. Thirty people in a lane, a letter on a wall, and then a chair and then the floor. Her jaw pried open with a spoon. Brought home by strangers. And ten days later she went back to face the settlement alone. She said: if they kill me, no matter. She was not performing courage. She had lost more than she could grieve. She was not afraid of anything left on the other side of it.`,
    note: `"Maar denge toh koi baat nahi." — Rekha`
  },

  depression_year: {
    location: 'The home',
    text: `She did not leave the house for one year. Not one step outside. Her children came home from school — she saw their faces and began to cry. Her husband came home — the tears. Any face, any person who appeared in front of her, and without a word, without explanation, she would begin to weep. <em>"Ghar se nikalne mein itni tension hoti thi ki ghar se nikalungi toh koi mujhe maar dega."</em> She believed that if she stepped outside, someone would hurt her. She sat inside. She did not explain to the children. She just — sat.`,
    choices: [
      { text: 'Ask where her husband was in all of this — what he did.', next: 'husband_support' },
      { text: 'Ask how she finally came out of it.', next: 'recovery_prayer' }
    ]
  },

  husband_support: {
    location: 'The home',
    text: `He was there. He is always there — quietly. When she first came to the sasural she burned rotis — a new bride, still learning. He said: <em>"Jitni bhi rotiyan jali hain sab mujhe de do main kha lunga."</em> Give me every one. Every burnt one. He ate them himself so no one could point to them. He still does this — kabhi kabhi. Even now, through the illness and the depression, he said only: go where you need to go. Two hours, three hours. Just go. She says this as though it requires no particular admiration. As a feature of the house, like the plants.`,
    choices: [
      { text: 'Let this rest here.', next: 'end_jali_roti' },
      { text: 'Ask how she came out of the depression — what finally moved.', next: 'recovery_prayer' }
    ]
  },

  end_jali_roti: {
    ending: true,
    type: 'Encounter / Participant 04',
    title: '"Jitni bhi rotiyan jali hain sab mujhe de do"',
    body: `A man who ate every burnt roti himself so no one could say anything. He did it when she was a new bride who didn't yet know the kitchen. He does not know now that she carries 70-80 kg of ration on the scooty. If he found out, he would stop her — she knows this. So she doesn't tell him. She carries the weight herself and comes home and makes him tea. There are things a marriage holds without either person naming them. This is one of them.`,
    note: `"Jitni bhi rotiyan jali hain sab mujhe de do main kha lunga." — her husband, as she tells it`
  },

  recovery_prayer: {
    location: 'The home',
    text: `A young man from the neighborhood — troubled himself, prone to his own depressions — came one day with his mother to visit. He sat with her. He asked: aunty, how are you? She began to cry. He prayed for her. She says: <em>"Mujhe aisa laga ki meri sab tension door ho gayi."</em> As if it left. She does not say this as miracle. She says it as a fact about weight lifting. Then a woman named Sandhya — a Christian, a ration supplier — came and said: come with me, we'll do it together. I'll find you an order. The first orders out of the house. The first steps.`,
    choices: [
      { text: 'Ask about her mother — she was an ANM nurse, decades of it.', next: 'scene_mummy_anm' },
      { text: 'Ask about the ration contract — how the real work started again.', next: 'arth_ngo' }
    ]
  },

  arth_ngo: {
    location: 'The home',
    text: `Sandhya knew a doctor — a gynecologist running a small NGO hospital, based out of state. He heard the story. He gave her a one-year contract: supply ration for the hospital. Rs 10,000 a month. <em>"Dheere-dheere dheere-dheere fir ek saal unke sang nikla."</em> Slowly, slowly, a year passed. Then his transfer came. She stayed — now attached to the parent NGO, still supplying. She began going directly to the mandi for stock. She built contacts. She says: ab main khud koshish karti hoon. Now I try myself.`,
    choices: [
      { text: 'Ask about her mother — her retirement savings went into this too.', next: 'mummy_paisa' },
      { text: 'Ask about going to the mandi directly — building contacts, buying at source.', next: 'scene_ration_mandi' }
    ]
  },

  mummy_paisa: {
    location: 'The home',
    text: `Her mother had retired from nursing — ANM, decades of work. Her retirement: sadhe teen lakh. Three and a half lakh rupees. She gave them to her daughter to deposit. Rekha put them in the savings organization FDs. When the man ran, this went too. For a year she did not visit her mother. Did not tell her. Her husband finally insisted. She went — stood in the doorway — and wept. She said: I lost your money. Her mother said: <em>"Tu khud ne jaan bujh ke toh kiya nahi."</em> You didn't do it on purpose. And then: repay what you can. Whenever. No hurry.`,
    choices: [
      { text: 'Ask about the Rs 5000 her mother gave her on that visit — after losing everything.', next: 'end_sadhe_teen_lakh' },
      { text: 'Ask about the debt she still carries — the conscience that will not let her go.', next: 'atma_gawahi' }
    ]
  },

  end_sadhe_teen_lakh: {
    ending: true,
    type: 'Encounter / Participant 04',
    title: '"Aaj bhi paisa de rahi mujhe"',
    body: `Her mother lost three and a half lakh rupees — her entire retirement savings — through her daughter's misplaced trust. She was not told for a year. When she was finally told she took Rs 5000 and pressed it into her daughter's hand. She said: you didn't do it on purpose. She said: repay them when you can. If you can't, don't worry about me. Rekha said she didn't want the money. Her mother insisted. Rekha cried for the second time that day — the first time had been on the doorstep. The second time was because of what a mother could do after losing everything.`,
    note: `"Itna nuksan karne ke baad bhi maa ka dil kaisa hai." — Rekha`
  },

  atma_gawahi: {
    location: 'The home',
    text: `People tell her: fold your hands, say sorry, you have cancer, what can you do. Her jeth said this. An Ahmedabad cousin said this. She says: <em>"Meri atma gawahi nahi deti."</em> My soul does not testify for me. She cannot look at the loss and call it someone else's doing. She made the error — trusting, unwitting. But hers. She has given what she could to four or five members already: a fridge here, a cooler there, two or three thousand rupees. She says: when income is steady, every rupee above what the house needs goes back. She said this to the women who called her cancer-ridden and demanded payment. She says she told them: aaj nahi toh kal. Not today, then tomorrow.`,
    choices: [
      { text: 'Ask about the illness — how she keeps going out at seven in the morning.', next: 'cancer_field' },
      { text: 'Ask about her daughters — who is with her in this house.', next: 'betiyan' }
    ]
  },

  cancer_field: {
    location: 'The home, and then the lane outside',
    text: `BP. Sugar. Cancer — treated, still present. The treatment has damaged her teeth. Her jaw aches. Her ear aches. Her head aches. She wakes at four some mornings and lies there with the lights off until it is time to leave. She leaves at seven. <em>"Rest kahan achha lagta hai, sab cheez paise pe aake atak jati hai."</em> Rest is not peaceful when every problem comes back to money. She climbs the stairs to scold the drunk neighbors even though her breath gives out halfway. She carries 70-80 kg of ration on the scooty. Her husband does not know this. If he found out, he would not let her go.`,
    choices: [
      { text: 'Ask about the scooty — how she learned to ride.', next: 'scooty_bhains' },
      { text: 'Ask about her daughters.', next: 'betiyan' }
    ]
  },

  scooty_bhains: {
    location: 'The home',
    text: `Her brother called her <em>"moti bhains"</em> — fat buffalo — and said she'd never learn to ride. She told him: I'll come next summer vacation and drive yours. She did. She learned alone, falling. <em>"Gir gir ke hi seekhte hain."</em> She had moved her daycare to an industrial area across the city because that was where working parents could afford it — she rode there every day, afraid of the highway, afraid of trucks, falling and going back. When she finally rode to her brother's and drove his scooter in front of him she says nothing dramatic. Just: <em>"Dekh teri gaadi de main chala ke dikhati hoon."</em> Give me your bike. Let me show you.`,
    choices: [
      { text: 'Ask about her daughters — who they are, who is here.', next: 'betiyan' },
      { text: 'Ask about God — faith has come up several times; she mentions prayer.', next: 'ishwar' }
    ]
  },

  betiyan: {
    location: 'The home',
    text: `Two daughters. The elder is twenty-one, working at a private bank in back office — computers. When money is short she hands her mother half her salary without being asked. Half — of maybe Rs 8000, Rs 9000. She says: don't stop working, Mummy, here is money. The younger is in the eighth class. She cooks sometimes when her mother is in the field. Both have said separately: when I earn properly, I'll help repay what you couldn't. Rekha says: <em>"Mujhe beta ki kami mehsoos nahi hoti."</em> She does not feel the absence of a son. Her daughters carry what they're given.`,
    choices: [
      { text: 'Let this hold here.', next: 'end_beta_kami' },
      { text: 'Ask about how she thinks about God — prayer and faith have come up more than once.', next: 'ishwar' }
    ]
  },

  end_beta_kami: {
    ending: true,
    type: 'Encounter / Participant 04',
    title: '"Mujhe beta ki kami mehsoos nahi hoti"',
    body: `One daughter halves her salary without being asked. The younger one says she'll stay even after she marries — she'll find someone with no family, she says, so he'll just live here. Rekha tells this and laughs. She says she does not feel the absence of a son. She says it without defensiveness, without performance. She means it as simply as she says everything else: as a fact she has checked and found to be true. The daughters know what the house costs. They have always known.`,
    note: `"Beti toh bahut sahara hai mujhe. Bahut." — Rekha`
  },

  ishwar: {
    location: 'The home',
    text: `She was Christian from birth — her father Hindu, converted after marrying her mother. She grew up in a Hindu neighborhood, known to everyone by a different name in that mohalla, welcomed at midnight into anyone's house. She says: <em>"Apna vyavhar bolta hai insaan ka."</em> A person's conduct speaks for them. And then, carefully, as if she has worked this out over years: <em>"Ishwar logo ke mano mein baste hain. Apni antar aatma jo bolti hai na, wo ishwar ki aawaz hoti hai."</em> God lives in people's hearts. What your inner voice tells you — that is the voice of God.`,
    choices: [
      { text: 'Let this be where you end.', next: 'end_antar_aatma' },
      { text: 'Ask what she is planning next — there was something about YouTube and a kit from Ahmedabad.', next: 'liquid_dream' }
    ]
  },

  end_antar_aatma: {
    ending: true,
    type: 'Encounter / Participant 04',
    title: '"Apni antar aatma jo bolti hai wo ishwar ki aawaz hoti hai"',
    body: `She has cancer and goes to field at seven. She carries 80 kg on a scooty and doesn't tell her husband. She owes repayment to two hundred members and is giving back what she can, one cooler at a time. She prays before sleeping. She doesn't ask God to fix what is broken. She believes God is already there — in the neighbor's son who sat with her during the lost year, in the woman who gave her a grocery order when she first stepped back outside, in the mother who pressed Rs 5000 into her hand after losing everything. She says: what your inner voice tells you — that is it. That is where God is.`,
    note: `"Ishwar logo ke mano mein baste hain." — Rekha`
  },

  liquid_dream: {
    location: 'The home, and then she is standing at the door',
    text: `She is going to Ahmedabad on the seventeenth — on the ration NGO's bus, so no ticket cost. While there, she will stop at a shop: they sell a kit for Rs 7000 with the formulas and raw materials to make toilet cleaner, tiles cleaner, dishwash liquid at home. She has watched YouTube videos. She knows the ratios — it is not unlike the gram calculations at the daycare. A boutique owner nearby has already asked for a sample bottle of toilet cleaner. <em>"Kya pata ishwar ne kis kaam ko apne liye bheja hai, kis kaam se uthpan ho jaye."</em> Who knows which work God sent for you. Which work you'll rise from.`,
    choices: [
      { text: 'Ask what she holds onto — when none of it comes through, when orders cancel, when the body won\'t go.', next: 'end_aaj_nahi_kal' }
    ]
  },

  end_aaj_nahi_kal: {
    ending: true,
    type: 'Encounter / Participant 04',
    title: '"Aaj nahi milega toh kal milega"',
    body: `Her husband asked her once what the point was — all the running, the carrying, the orders that cancel. She told him: aaj nahi milega toh kal milega. Today it won't come; tomorrow it will. She was not young when she said this. She had just spent a year inside without stepping out. Before that, five years feeding construction workers' children gram by gram, measuring every meal to the bowl. Before that, a fraud that took four lakhs of her own money and her mother's retirement and a year of her life. She said it from somewhere those things had not reached. Whatever is there — it is still there.`,
    note: `"Aaj mehnat karungi toh uska fal kal milega." — Rekha`
  },

  scene_daycare_close: {
    location: 'The home — memory of the last day',
    text: `The NGO's funding cycle ended. They told her a month before. The last day — parents came to collect at four o'clock as usual, the way they always did after the construction site shift. She gave each child back. She does not describe it dramatically. She says: the children went home and the room was quiet. What she took from five years: the gram calculations, the seven o'clock start, the habit of precision, the understanding that you can manage twenty-five things at once if you pay attention to each one in order. She did not know yet what any of that was for. She found out later.`,
    choices: [
      { text: 'Stay here — this ending, this beginning.', next: 'end_extra_khichdi' },
      { text: 'Ask what came after — the self-help group, the savings, the two hundred women.', next: 'shg_200' }
    ]
  },

  scene_shg_early: {
    location: 'Memory — the neighborhood, several years before January 2021',
    text: `Two hundred women. She ran the meeting side — who had deposited, whose fixed deposit was due, which new member was joining, who needed a reminder. She was meticulous from the daycare years: you do not wander with other people's money the way you do not wander with a child's gram weight. The man handled the accounting at his office. She handled the women in the neighborhood. They told her things they did not tell banks — when money was short, when a husband was difficult, when the deposit would be late because of a family wedding. She was there for those things. The trust was real. That is what made everything that followed possible.`,
    choices: [
      { text: 'Ask about the man — when she first noticed something was wrong.', next: 'sarvodaya_man' },
      { text: 'Ask about the day it collapsed — the letter, the lane, the chair.', next: 'fraud_day' }
    ]
  },

  scene_mummy_anm: {
    location: 'Memory — her mother\'s career',
    text: `Her mother was a community health worker — ANM — for decades. House visits, injections, deliveries. Weighing infants. Measuring medicine. She retired after a full career with three and a half lakh rupees in savings. When Rekha was learning gram calculations in training — fifty grams per child, not one bowl wandering — something clicked. Her mother had lived her whole career in precise measurement. <em>"Mummy ka toh poora career hi tha — ghar ghar jaana, bachche dekhna."</em> Going house to house. Looking after children. And then her daughter did the same thing for five years. Without knowing it was the same thing.`,
    choices: [
      { text: 'Ask about what those savings became — the fraud, the loss.', next: 'mummy_paisa' },
      { text: 'Stay here — this, the thing that was already in her.', next: 'end_mummy_anm' }
    ]
  },

  scene_ration_mandi: {
    location: 'A wholesale market, Jaipur',
    text: `She started going directly — to the wholesale market where rice and lentils and oil come in from trucks. She did not know it at first. She stood and watched who the honest sellers were. She learned which days prices shifted. She learned who to call when she needed a hundred kilos at short notice. She bargained. She was not good at it at first; she got better. Now she has contacts — merchants who call when something she stocks comes in at a good price. The mandi is not comfortable. The sacks are heavy. She goes early. The work is physical in a way that does not match the cancer. She does not mention the cancer there. She just buys what she needs and comes back.`,
    choices: [
      { text: 'Ask about the conscience — the debt she still carries to the two hundred members.', next: 'atma_gawahi' },
      { text: 'Ask about the liquid cleaner dream — the Ahmedabad kit.', next: 'liquid_dream' }
    ]
  },

  end_mummy_anm: {
    ending: true,
    type: 'Encounter / Participant 04',
    title: '"Mummy ka toh poora career hi tha"',
    body: `Her mother was an ANM nurse for decades — house visits, precise measurements, children weighed and medicine measured. She retired with three and a half lakh rupees saved. Those savings went into the fraud when her daughter trusted the wrong man. Rekha made the connection only later: when she was crying in that training room over gram calculations, some part of the precision had always been there. Her mother had lived the whole career in exact measurement. She gave her savings to her daughter and her daughter trusted them to someone who left. When she was finally told, she pressed Rs 5000 into Rekha's hand. That is also something a nurse knows how to do — where to put care when the damage is done.`,
    note: `"Mummy ka toh poora career hi tha — ghar ghar jaana, bachche dekhna." Her mother's whole career was going house to house. Then her daughter did it too, without knowing.'`
  }

};
