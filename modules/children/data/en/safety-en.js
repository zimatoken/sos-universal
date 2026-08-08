// === MODULE: CHILD SAFETY (ENGLISH) ===
const safetyDataEn = {
  category: "safety",
  title: "🛡️ Child Safety",
  description: "Lost, went with a stranger, left alone, found dangerous items, road accidents, animal bites, playing with fire — action plans",

  questions: [
    {
      id: "situation",
      text: "What happened? (choose the main one)",
      type: "single",
      options: [
        { id: "stranger", label: "Child contacted a stranger / went with them", tags: ["stranger"] },
        { id: "alone_home", label: "Left alone at home / lost in a crowded place", tags: ["alone", "lost"] },
        { id: "dangerous_item", label: "Found a dangerous item (knives, pills, weapons, chemicals)", tags: ["dangerous"] },
        { id: "traffic", label: "Dangerous road situation / accident", tags: ["traffic"] },
        { id: "animal", label: "Bitten / scratched by an animal (dog, cat, snake, tick)", tags: ["animal"] },
        { id: "fire", label: "Playing with fire / matches / lighter / electrical appliances", tags: ["fire"] }
      ]
    },
    {
      id: "child_age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "baby", label: "Under 3 years", tags: ["baby"] },
        { id: "preschool", label: "3–7 years", tags: ["preschool"] },
        { id: "school", label: "7–12 years", tags: ["school_age"] },
        { id: "teen", label: "Teenager 13–17 years", tags: ["teen"] }
      ]
    },
    {
      id: "location",
      text: "Where did it happen?",
      type: "single",
      options: [
        { id: "home", label: "At home / in the apartment", tags: ["home"] },
        { id: "street", label: "On the street / in the yard / in the park", tags: ["street"] },
        { id: "public", label: "In a store / mall / transport", tags: ["public"] },
        { id: "school", label: "At school / kindergarten / club", tags: ["school_place"] }
      ]
    },
    {
      id: "stranger_details",
      text: "If contact with a stranger — what exactly happened?",
      condition: { situation: ["stranger"] },
      options: [
        { id: "stranger_talk", label: "Just talked, offered treats, asked for help", tags: ["talk"] },
        { id: "stranger_tried_take", label: "Tried to take / put in a car, but the child ran away", tags: ["attempt"] },
        { id: "stranger_taken", label: "Child left with a stranger / went by car", tags: ["taken"] }
      ]
    },
    {
      id: "alone_lost_details",
      text: "If lost or home alone — specify",
      condition: { situation: ["alone_home"] },
      options: [
        { id: "home_alone", label: "Child home alone (left unsupervised)", tags: ["alone_at_home"] },
        { id: "lost_mall", label: "Lost in a store / mall / train station", tags: ["lost_public"] },
        { id: "lost_street", label: "Lost on the street / in the park / in the yard", tags: ["lost_street"] }
      ]
    },
    {
      id: "dangerous_item_type",
      text: "What dangerous item did the child find?",
      condition: { situation: ["dangerous_item"] },
      options: [
        { id: "pills", label: "Pills / medications / vitamins", tags: ["pills"] },
        { id: "chemicals", label: "Household chemicals / acids / alkalis", tags: ["chemicals"] },
        { id: "knife", label: "Knife / sharp objects", tags: ["knife"] },
        { id: "weapon", label: "Weapon (knife, gun, crossbow)", tags: ["weapon"] }
      ]
    },
    {
      id: "traffic_details",
      text: "What happened on the road?",
      condition: { situation: ["traffic"] },
      options: [
        { id: "ran_out", label: "Ran onto the road, managed to stop", tags: ["near_miss"] },
        { id: "bike", label: "Riding a bike / scooter and fell / collided", tags: ["bike"] },
        { id: "accident", label: "Hit by a car / road accident involving the child", tags: ["accident"] }
      ]
    },
    {
      id: "animal_details",
      text: "Which animal?",
      condition: { situation: ["animal"] },
      options: [
        { id: "dog", label: "Dog (domestic / stray)", tags: ["dog"] },
        { id: "cat", label: "Cat", tags: ["cat"] },
        { id: "rodent", label: "Rat / mouse", tags: ["rodent"] },
        { id: "snake", label: "Snake", tags: ["snake"] },
        { id: "tick", label: "Tick", tags: ["tick"] },
        { id: "insect", label: "Bee / wasp / spider", tags: ["insect"] }
      ]
    },
    {
      id: "fire_details",
      text: "What exactly with fire/electricity?",
      condition: { situation: ["fire"] },
      options: [
        { id: "matches", label: "Played with matches / lighter", tags: ["matches"] },
        { id: "electric", label: "Touched an outlet / wires / turned on an appliance", tags: ["electric"] },
        { id: "candle", label: "Lit a candle / left unattended", tags: ["candle"] }
      ]
    },
    {
      id: "severity",
      text: "How serious?",
      type: "single",
      options: [
        { id: "mild", label: "Mild situation (brief contact, child not injured)", tags: ["mild"] },
        { id: "moderate", label: "Moderate (minor injuries, severe fright)", tags: ["moderate"] },
        { id: "severe", label: "Severe (loss of consciousness, severe bleeding, abduction)", tags: ["severe"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Stranger — attempt or child left
    // ========================================
    {
      id: "stranger_attempt_taken",
      title: "🚨 Stranger attempted to take or child left — emergency measures",
      description: "If a child was attempted to be abducted or has left with a stranger — every second counts.",
      conditions: { situation: ["stranger"], stranger_details: ["stranger_tried_take", "stranger_taken"], severity: ["moderate", "severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Safety and apprehension of offender",
      tags: ["stranger", "abduction", "police"],
      steps: [
        "Immediately call 911/112. Report: location, time, description of the child, description of the stranger, vehicle, direction of travel.",
        "If the child left voluntarily (teenager) — check social media, messages, geolocation, bank cards.",
        "Enable geolocation on the child's phone (Find My, Google Family Link, Life360). Pass coordinates to police.",
        "Share photos of the child in neighborhood chats, school, parent groups, social media. Ask for reposts.",
        "Check CCTV cameras around the meeting place — save recordings.",
        "Do not attempt to negotiate with the kidnapper yourself — trust the police.",
        "After the child returns — immediately see a psychologist and go to the hospital for examination."
      ],
      warnings: [
        "Do not wait — abductions are solved in the first hours.",
        "Do not delete messages or hide information — they are evidence.",
        "Do not blame the child — they are a victim, even if they went willingly (manipulation, deception)."
      ]
    },
    // ========================================
    // 2. Stranger — just talk, but alarming
    // ========================================
    {
      id: "stranger_talk",
      title: "👤 Child talked to a stranger — preventive conversation",
      description: "A stranger approached, asked for directions, offered candy, asked for help — the child didn't leave, but the situation raised concern.",
      conditions: { situation: ["stranger"], stranger_details: ["stranger_talk"], severity: ["mild"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Teaching safety rules",
      tags: ["stranger", "prevention"],
      steps: [
        "Talk to the child calmly: what exactly did the stranger say, what did they look like, what did they do.",
        "Explain: adults do not ask children for help — that is manipulation. If someone asks for directions, to show a phone, to help — the child should step back and call an adult.",
        "Remind the rules: do not talk to strangers, do not take treats, do not get into cars, do not give directions, do not share address.",
        "Introduce a code word: if someone says 'mom asked me to pick you up', the child asks for the code word. If not — don't go.",
        "Practice the technique 'No — Run — Shout': say 'No!' loudly, run to people, shout 'This is not my dad!'.",
        "If the child is frightened — see a psychologist."
      ],
      warnings: [
        "Do not scare the child into paranoia — explain calmly, with examples.",
        "Do not say 'all strangers are bad' — that's not true, but caution is needed.",
        "Practice rules through games, not lectures — children learn better."
      ]
    },
    // ========================================
    // 3. Left alone at home — rules
    // ========================================
    {
      id: "home_alone",
      title: "🏠 Child home alone — how to ensure safety",
      description: "If a child is left unsupervised, even for a short time, clear rules are needed.",
      conditions: { situation: ["alone_home"], alone_lost_details: ["home_alone"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Safe stay without parents",
      tags: ["home", "alone", "rules"],
      steps: [
        "Make a list of rules: do not open the door to anyone (even 'police', 'doctors' — they don't come without parents).",
        "Teach the child to call you or the police (911/112) at any suspicious event.",
        "Leave visible phone numbers: yours, neighbors, police, ambulance.",
        "Remove dangerous items: medications, chemicals, knives, lighters, matches, small parts.",
        "Lock windows, balcony, explain that you cannot lean out or call passersby.",
        "Leave light food, water, charged phone.",
        "Call the child occasionally to check if everything is fine.",
        "After your return — ask if they were scared, what they did, praise them for following the rules."
      ],
      warnings: [
        "Do not leave children under 7 alone for long (more than 1–2 hours) — risk is high.",
        "Do not forbid approaching the door — better explain how to check who's there (peephole, intercom).",
        "Do not say 'don't be afraid' — it dismisses fear. Better say 'if you're scared, call me'."
      ]
    },
    // ========================================
    // 4. Lost in a crowded place
    // ========================================
    {
      id: "lost_public",
      title: "🛒 Child lost in a mall / store / station",
      description: "Children often get lost in crowds. Stay calm, act systematically.",
      conditions: { situation: ["alone_home"], alone_lost_details: ["lost_mall"], severity: ["mild", "moderate"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Quick discovery",
      tags: ["lost", "mall", "public"],
      steps: [
        "Stop, look around — often the child is nearby, just behind a shelf.",
        "Contact security or administration — they'll make an announcement, lock exits.",
        "If not found in 10 minutes — call 911/112.",
        "Show the child's photo to store staff, security, passersby.",
        "Check fitting rooms, restrooms, elevators, escalators.",
        "After finding — hug, calm, don't scold. Discuss rules: if lost — stay in place, call for mom, approach a cashier/police officer."
      ],
      warnings: [
        "Do not run chaotically — systematic is more effective.",
        "Do not wait — time is against you.",
        "If the child is found with a stranger — don't leave, call police."
      ]
    },
    // ========================================
    // 5. Lost on the street
    // ========================================
    {
      id: "lost_street",
      title: "🗺️ Child lost on the street / in the park / in the yard",
      description: "There are more dangers outside, but also more witnesses.",
      conditions: { situation: ["alone_home"], alone_lost_details: ["lost_street"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "15–30 minutes",
      yield_estimate: "Location",
      tags: ["lost", "street", "search"],
      steps: [
        "Immediately check the yard, neighboring yards, playgrounds, parks.",
        "Ask passersby, kiosk sellers, janitors.",
        "If there are cameras — ask to review footage.",
        "Call police if not found in 15 minutes.",
        "Share photos in neighborhood chats.",
        "If found — don't scold, hug. Find out why they left, where they were."
      ],
      warnings: [
        "Do not underestimate street dangers — cars, strangers, water bodies.",
        "Teach the child to know home address and parents' phone number."
      ]
    },
    // ========================================
    // 6. Dangerous item — medication or chemicals (ingested)
    // ========================================
    {
      id: "poison_ingested",
      title: "💊 Child swallowed pills or chemicals — emergency measures",
      description: "Poisoning in children develops quickly. Call toxicology immediately.",
      conditions: { situation: ["dangerous_item"], dangerous_item_type: ["pills", "chemicals"], severity: ["moderate", "severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Prevent severe poisoning",
      tags: ["poison", "chemicals", "emergency"],
      steps: [
        "DO NOT induce vomiting without consulting a doctor! For acids, alkalis, gasoline — re-passage will burn the esophagus again.",
        "Immediately call ambulance (911/112) or poison control. Report: what was swallowed, how much, when, age, weight.",
        "If you have the packaging — keep it, show to the doctor. Take a photo.",
        "If the child is unconscious — place on side, check breathing. Start CPR if necessary.",
        "Do not give milk, water, juice without doctor's advice — some substances increase absorption.",
        "After hospitalization — tell doctors all details.",
        "After recovery — store all chemicals and medications out of reach, install locks on cabinets."
      ],
      warnings: [
        "Do not induce vomiting for poisoning with acids, alkalis, gasoline, oils — it worsens burns.",
        "Do not give activated charcoal for acid poisoning — it's ineffective.",
        "Household chemicals are a common poisoning in children. Store high, under lock."
      ]
    },
    // ========================================
    // 7. Dangerous item — sharp, weapon (not swallowed, just held)
    // ========================================
    {
      id: "sharp_weapon_found",
      title: "🔪 Child found a knife / weapon — algorithm",
      description: "Child picked up a sharp object but wasn't injured. Need to explain the danger.",
      conditions: { situation: ["dangerous_item"], dangerous_item_type: ["knife", "weapon"], severity: ["mild", "moderate"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Safe handling and prevention",
      tags: ["knife", "weapon", "danger"],
      steps: [
        "Calmly take the item, put it out of reach.",
        "Talk to the child: 'This is dangerous, can hurt badly. Must not touch.'",
        "If the child cut themselves — wash the wound, treat with antiseptic, apply a bandage.",
        "Explain that knives, scissors, tools are for adults only. Show how to use safely (under supervision).",
        "Check for other dangerous items within reach and remove them.",
        "If the child found a weapon (gun, knife) on the street — do not touch, call police (911/112)."
      ],
      warnings: [
        "Do not shout, do not scare — the child may hide the item or get scared.",
        "Children under 7 can't distinguish toys from real weapons. Keep weapons in a safe.",
        "After the incident — see a psychologist if the child is frightened."
      ]
    },
    // ========================================
    // 8. Road accident — hit by a car
    // ========================================
    {
      id: "traffic_accident",
      title: "🚗 Road accident involving a child — first aid and call",
      description: "A child was hit by a car — that's severe trauma. Do not move unless necessary.",
      conditions: { situation: ["traffic"], traffic_details: ["accident"], severity: ["severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Stabilization and hospitalization",
      tags: ["accident", "trauma", "emergency"],
      steps: [
        "DO NOT move the child if spinal or neck injury is suspected — it could cause paralysis.",
        "Call ambulance (911/112) and police (911/112). Report: age, condition, visible injuries.",
        "If there is bleeding — apply a pressure dressing. For severe arterial bleeding — tourniquet above the wound.",
        "If the child is unconscious — place on side, check breathing and pulse. If stopped — start CPR.",
        "For fractures — immobilize the limb with improvised materials (cardboard, board).",
        "Record the car number, driver's details, witnesses. Photograph the scene.",
        "After hospitalization — do not sign any documents without a lawyer."
      ],
      warnings: [
        "Do not give food or drink if abdominal or head injury is suspected.",
        "Do not realign bones or move limbs without immobilization.",
        "Even if the child is conscious, after an accident — hospitalization is mandatory to rule out internal injuries."
      ]
    },
    // ========================================
    // 9. Road dangerous situation (no accident)
    // ========================================
    {
      id: "traffic_near_miss",
      title: "🚸 Child ran onto the road but cars stopped",
      description: "A dangerous situation, but no injuries. Need to discuss road safety.",
      conditions: { situation: ["traffic"], traffic_details: ["ran_out", "bike"], severity: ["mild"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 days",
      yield_estimate: "Teaching road safety",
      tags: ["traffic", "near_miss", "rules"],
      steps: [
        "Talk calmly, without shouting: 'Were you scared? I was too. Let's figure out how to avoid this.'",
        "Explain the rules: cross only on green, at crosswalks, look both ways, don't play near the road.",
        "Show with examples: how to judge distance to cars, what a 'road trap' is (a parked car blocks view).",
        "Take a walk with the child and show safe routes.",
        "If the child rides a bike — only with a helmet, on bike paths, with rules.",
        "For repeated violations — limit unsupervised walks."
      ],
      warnings: [
        "Do not scare them — it creates fear, not learning.",
        "Children under 7 cannot judge speed — always hold hands near the road.",
        "Reflective elements on clothing are mandatory in the dark."
      ]
    },
    // ========================================
    // 10. Animal bite — dog, cat (no rabies concern)
    // ========================================
    {
      id: "animal_bite_dog_cat",
      title: "🐕 Dog or cat bite — wound care and monitoring",
      description: "Bites from domestic animals can get infected. Even with a minor bite, proper care is needed.",
      conditions: { situation: ["animal"], animal_details: ["dog", "cat"], severity: ["mild", "moderate"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Healing and prevention",
      tags: ["bite", "dog", "cat"],
      steps: [
        "Wash the wound with soap and water for 10–15 minutes (soap destroys rabies virus).",
        "Treat with hydrogen peroxide, then chlorhexidine. Apply antibiotic ointment (Levomekol).",
        "Apply a sterile dressing, but not too tight.",
        "If the bite is deep or on the face/hands — go to a trauma center (high infection risk).",
        "Check with the owner if the dog is vaccinated against rabies. If not — vaccination is mandatory.",
        "Monitor the wound for 3 days: redness, swelling, pus — see a doctor.",
        "If the animal is stray — mandatory rabies vaccination (days 0, 3, 7, 14, 28)."
      ],
      warnings: [
        "Do not suture bite wounds — it traps infection.",
        "Do not let the child touch the wound with dirty hands.",
        "Cat bites often suppurate — require antibiotics."
      ]
    },
    // ========================================
    // 11. Snake bite
    // ========================================
    {
      id: "snake_bite",
      title: "🐍 Snake bite — emergency measures",
      description: "Snake venom is dangerous for children. Act quickly but correctly.",
      conditions: { situation: ["animal"], animal_details: ["snake"], severity: ["moderate", "severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Reduce venom effect",
      tags: ["snake", "poison", "emergency"],
      steps: [
        "Immediately call ambulance (911/112). Report: snake bite, age, bite location, time.",
        "Calm the child, lay them down, immobilize the bitten limb (keep it below heart level).",
        "DO NOT suck the venom with your mouth — it's dangerous. Do not make incisions — infection.",
        "Apply cold (ice wrapped in cloth) to the bite site, but not directly on the skin.",
        "Remove jewelry, tight clothing — swelling progresses.",
        "DO NOT give alcohol, caffeine, stimulants — they accelerate venom absorption.",
        "Try to remember the snake's color — it will help doctors with antivenom.",
        "Hospitalization is mandatory in any case."
      ],
      warnings: [
        "Do not apply a tourniquet — it impairs blood flow, causes necrosis.",
        "Do not cauterize the wound — useless and harmful.",
        "In Russia, the most common is the viper — antivenom exists."
      ]
    },
    // ========================================
    // 12. Tick bite
    // ========================================
    {
      id: "tick_bite",
      title: "🕷️ Tick bite — removal and testing",
      description: "Ticks carry encephalitis and borreliosis. Proper removal is crucial.",
      conditions: { situation: ["animal"], animal_details: ["tick"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 days",
      yield_estimate: "Prevention of tick-borne infections",
      tags: ["tick", "encephalitis", "borreliosis"],
      steps: [
        "Remove the tick with tweezers, twisting counterclockwise (grab the head, not the body). Do not pull abruptly.",
        "Treat the bite site with iodine or alcohol.",
        "Save the tick in a jar with a wet cotton swab for analysis (to a lab within 2 days).",
        "If the tick's head remains in the skin — go to a trauma center.",
        "Monitor the bite site: if a red ring (migratory erythema) appears within 2–30 days — that's borreliosis, needs antibiotics.",
        "If the child is not vaccinated against encephalitis — immunoglobulin may be given as indicated.",
        "Prevention: vaccination against encephalitis at least 2 weeks before the season."
      ],
      warnings: [
        "Do not twist abruptly — the head may remain.",
        "Do not apply oil, gasoline — it causes the tick to vomit, increasing infection.",
        "Tick removal requires tweezers or a special tool."
      ]
    },
    // ========================================
    // 13. Playing with fire — matches, lighter
    // ========================================
    {
      id: "fire_matches",
      title: "🔥 Child played with matches / lighter — fire prevention",
      description: "Children often imitate adults. Explain why fire is dangerous.",
      conditions: { situation: ["fire"], fire_details: ["matches", "candle"], severity: ["mild"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Teaching fire safety",
      tags: ["fire", "matches", "prevention"],
      steps: [
        "Talk calmly: 'I see you lit a match. This is dangerous, it can cause a fire. Let's look together at how to use fire safely'.",
        "Show how to properly light candles under supervision. Explain that matches are not toys.",
        "If the child got burned — cool under cold running water for 10 minutes, cover with sterile dressing.",
        "Put matches, lighters out of reach.",
        "Install smoke detectors, check chimneys, electrical wiring.",
        "Teach the child: if there's a fire — call 911/112, don't hide, go outside.",
        "Run a drill: how to leave a room if there's smoke."
      ],
      warnings: [
        "Do not scare — better show real consequences (photos, videos).",
        "Children under 7 should not have access to fire.",
        "If the child repeats — see a psychologist (fire fixation)."
      ]
    },
    // ========================================
    // 14. Electric shock (outlet, wires)
    // ========================================
    {
      id: "electric_shock",
      title: "⚡ Electric shock — de-energize and resuscitate",
      description: "Electric injury in children is dangerous due to cardiac arrest. De-energize immediately.",
      conditions: { situation: ["fire"], fire_details: ["electric"], severity: ["moderate", "severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Life-saving",
      tags: ["electric", "shock", "emergency"],
      steps: [
        "DO NOT touch the child while they are still in contact with the current. Turn off the breaker or unplug.",
        "If you can't de-energize — use a dry wooden stick, plastic to push away.",
        "After freeing, check breathing and pulse. If absent — start CPR.",
        "Call ambulance (911/112).",
        "Treat entry and exit burn sites (electrical burns) with sterile dressing.",
        "Hospitalization is mandatory even if the child appears well — arrhythmias may appear hours later.",
        "Install outlet covers, check wire insulation.",
        "Teach the child not to touch wires, outlets, electrical appliances with wet hands."
      ],
      warnings: [
        "Do not approach barefoot — step voltage is possible.",
        "Do not neglect medical evaluation — fibrillation can occur later.",
        "Electrical injuries often leave invisible internal damage."
      ]
    },
    // ========================================
    // 15. Universal safety — if type is unclear
    // ========================================
    {
      id: "general_safety",
      title: "🛡️ General safety rules for children",
      description: "If you're not sure where to start, use this universal set of rules.",
      conditions: { situation: ["stranger", "alone_home", "dangerous_item", "traffic", "animal", "fire"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–3 days",
      yield_estimate: "Increase safety level",
      tags: ["general", "prevention"],
      steps: [
        "Have a conversation with the child about safety in different situations: strangers, road, home, fire, animals.",
        "Establish clear rules: don't open the door, don't touch dangerous items, don't talk to strangers.",
        "Introduce a code word for emergencies.",
        "Practice skills: how to call 911/112, how to give the address, how to behave in a fire.",
        "Check the house for hazards: window locks, outlet covers, cabinet locks for chemicals.",
        "Get a first aid kit, fire extinguisher, reflectors.",
        "Discuss routes to school, clubs, shops — safe paths.",
        "Repeat rules regularly through games, not lectures."
      ],
      warnings: [
        "Do not create anxiety — talk about safety as a skill, not as danger.",
        "Lead by example — it's the main rule.",
        "Training should be regular, not a one-time event."
      ]
    }
  ]
};

// ===== EXPORT =====
window.safetyDataEn = safetyDataEn;