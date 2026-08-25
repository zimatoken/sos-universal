// modules/children/data/en/safety-en.js
// === MODULE: CHILDREN — SAFETY ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "children",
    category: "safety",
    version: "1.0.0",
    lang: "en",
    title: "Safety",
    description: "Lost child, stranger danger, home alone, dangerous items, water, elevator, gas — what to do",
    icon: "🛡️",
    color: "#db2777"
  },

  questions: [
    {
      id: "situation",
      type: "single",
      text: "What happened?",
      options: [
        { id: "stranger", label: "👤 Child went with a stranger / talked to a stranger", tags: ["stranger"] },
        { id: "alone_home", label: "🏠 Child is home alone", tags: ["alone_home"] },
        { id: "lost", label: "🔍 Lost in a store / mall / on the street", tags: ["lost"] },
        { id: "dangerous_item", label: "⚠️ Found a dangerous item (knife, pills, weapon)", tags: ["dangerous"] },
        { id: "traffic", label: "🚗 Dangerous situation on the road", tags: ["traffic"] },
        { id: "animal", label: "🐕 Animal bite / scratch", tags: ["animal"] },
        { id: "fire", label: "🔥 Playing with fire / matches / lighter", tags: ["fire"] },
        { id: "water", label: "🌊 Dangerous situation near water (drowning, fell in)", tags: ["water"] },
        { id: "elevator", label: "🚪 Stuck in elevator / with a stranger in elevator", tags: ["elevator"] },
        { id: "gas", label: "💨 Gas smell / turned on gas stove", tags: ["gas"] }
      ]
    },
    {
      id: "child_age",
      type: "single",
      text: "How old is the child?",
      conditions: { situation: ["stranger", "alone_home", "lost", "dangerous_item", "traffic", "animal", "fire", "water", "elevator", "gas"] },
      options: [
        { id: "baby", label: "👶 Under 3 years old", tags: ["baby"] },
        { id: "preschool", label: "🧒 3–7 years old", tags: ["preschool"] },
        { id: "school_age", label: "🧑 7–12 years old", tags: ["school_age"] },
        { id: "teen", label: "🧑‍🎓 Teenager 13–17 years old", tags: ["teen"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where did this happen?",
      conditions: { situation: ["stranger", "alone_home", "lost", "dangerous_item", "traffic", "animal", "fire", "water", "elevator", "gas"] },
      options: [
        { id: "home", label: "🏠 At home / apartment", tags: ["home"] },
        { id: "street", label: "🌳 On the street / in the yard / park", tags: ["street"] },
        { id: "public", label: "🏪 In a store / mall / transport", tags: ["public"] },
        { id: "school_place", label: "🏫 At school / daycare", tags: ["school_place"] }
      ]
    },
    {
      id: "has_first_aid",
      type: "single",
      text: "Do you have a first aid kit at home?",
      conditions: { situation: ["dangerous_item", "animal", "fire", "water", "gas"] },
      options: [
        { id: "first_aid_yes", label: "✅ Yes, I have one", tags: ["first_aid_yes"] },
        { id: "first_aid_no", label: "❌ No", tags: ["first_aid_no"] },
        { id: "first_aid_unknown", label: "❓ Don't know", tags: ["first_aid_unknown"] }
      ]
    },
    {
      id: "knows_phones",
      type: "single",
      text: "Does the child know emergency numbers?",
      conditions: { situation: ["stranger", "alone_home", "lost", "dangerous_item", "traffic", "animal", "fire", "water", "elevator", "gas"] },
      options: [
        { id: "phones_yes", label: "✅ Yes, they know", tags: ["phones_yes"] },
        { id: "phones_no", label: "❌ No, they don't know", tags: ["phones_no"] },
        { id: "phones_partial", label: "⚠️ They know some", tags: ["phones_partial"] }
      ]
    },
    {
      id: "has_evacuation_plan",
      type: "single",
      text: "Is there a fire evacuation plan at home?",
      conditions: { situation: ["fire", "gas"] },
      options: [
        { id: "evac_yes", label: "✅ Yes, there is one", tags: ["evac_yes"] },
        { id: "evac_no", label: "❌ No", tags: ["evac_no"] },
        { id: "evac_unknown", label: "❓ Don't know", tags: ["evac_unknown"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. STRANGER DANGER
    // ============================================================
    {
      id: "stranger_danger",
      title: "🚨 Child talking to a stranger — immediate actions",
      description: "If the child has already left with a stranger or is talking to a suspicious person — every second counts.",
      conditions: { situation: ["stranger"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Child rescued",
      tags: ["stranger", "kidnapping", "emergency"],
      steps: [
        "If you see this in real time — immediately approach the child, take their hand, walk away.",
        "If the child has already left with a stranger — call 911 IMMEDIATELY.",
        "Enable geolocation on the child's phone.",
        "Describe to police EVERYTHING: height, weight, clothing, special marks.",
        "Share the child's photo in neighborhood chats, school, social media.",
        "Check CCTV footage.",
        "After the child is found — see a psychologist. DON'T blame the child."
      ],
      warnings: [
        "DON'T wait 'a little longer' — the first 3 hours are critical.",
        "DON'T try to chase the car yourself — dangerous.",
        "DON'T spread false information on social media."
      ]
    },

    // ============================================================
    // 2. LOST CHILD
    // ============================================================
    {
      id: "lost_child_action",
      title: "🔍 Child is lost — search algorithm",
      description: "In a store, park, mall — anyone can get lost. Act quickly and systematically.",
      conditions: { situation: ["lost"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Child found",
      tags: ["lost", "search", "emergency"],
      steps: [
        "DON'T panic. Stop, look around — the child may be nearby.",
        "In a store/mall — go to security, administration. They'll make an announcement.",
        "Outside — ask passersby, vendors. Show a photo.",
        "If not found in 10–15 minutes — call 911.",
        "Enable geolocation on the child's phone/watch.",
        "Share the photo in neighborhood chats, parent groups.",
        "If the child is found — don't scold. Hug them, calm them down.",
        "Teach the child: name, last name, address, parents' phone."
      ],
      warnings: [
        "DON'T run chaotically — act systematically.",
        "DON'T wait '5 more minutes' — call the police.",
        "Children under 5 often hide out of fear."
      ]
    },

    // ============================================================
    // 3. HOME ALONE
    // ============================================================
    {
      id: "alone_home_safety",
      title: "🏠 Child home alone — safety rules",
      description: "If you have to leave the child alone, teach them basic safety rules.",
      conditions: { situation: ["alone_home"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Child safe at home",
      tags: ["alone", "home", "safety"],
      steps: [
        "Contact the child by phone/video call.",
        "Remind the rules: DON'T open the door to anyone.",
        "DON'T turn on the gas, DON'T use sharp objects.",
        "Leave the phone number of neighbors and relatives.",
        "Agree that the child calls you every 30–60 minutes.",
        "Prepare a simple snack in advance.",
        "If the child is under 7 — don't leave them alone for more than 1–2 hours.",
        "Install a video camera (smart home)."
      ],
      warnings: [
        "Children under 7 should not be left alone.",
        "DON'T leave matches, lighters, dangerous objects within reach.",
        "Install an emergency contact app on the child's phone."
      ]
    },

    // ============================================================
    // 4. DANGEROUS ITEM
    // ============================================================
    {
      id: "dangerous_item_found",
      title: "⚠️ Child found a dangerous item",
      description: "Pills, knife, weapon, chemicals — children put everything in their mouths. Act immediately.",
      conditions: { situation: ["dangerous_item"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–10 minutes",
      yield_estimate: "Poisoning / injury prevented",
      tags: ["poison", "dangerous", "emergency"],
      steps: [
        "If the child swallowed something — DON'T induce vomiting without a doctor's consultation.",
        "Call 911 or the poison control center.",
        "Keep the package and remnants — the doctor needs to know the composition.",
        "If the child held a weapon — calmly take it away, call the police.",
        "If cut — rinse the wound with water, treat with antiseptic.",
        "Remove ALL: medicines, chemicals, sharp objects, weapons.",
        "Install locks on cabinets with chemicals and medicines."
      ],
      warnings: [
        "DON'T induce vomiting for acid, alkali, gasoline poisoning.",
        "DON'T give milk, water, juice for poisoning without consultation.",
        "Children under 3 put everything in their mouths. Any small item (<3 cm) = choking."
      ]
    },

    // ============================================================
    // 5. ROAD SAFETY
    // ============================================================
    {
      id: "road_safety_child",
      title: "🚸 Child on the road — accident or dangerous situation",
      description: "Child ran onto the road, was hit by a car, playing on the roadway. Act quickly but safely.",
      conditions: { situation: ["traffic"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Life saved",
      tags: ["traffic", "accident", "emergency"],
      steps: [
        "If the child is on the roadway — approach from the side, not from the direction of traffic.",
        "If an accident — don't move the child if a spinal fracture is suspected.",
        "Call an ambulance: 911. Describe: age, consciousness, breathing.",
        "If bleeding — press with sterile cloth on the wound.",
        "If unconscious — check breathing, pulse. If none — CPR.",
        "After the accident — record the license plate, witnesses.",
        "Even with a 'minor' hit — see a doctor."
      ],
      warnings: [
        "DON'T move the victim if a spinal fracture is suspected.",
        "DON'T give water, food, or medication for concussion.",
        "Children under 7 poorly judge the speed of cars."
      ]
    },

    // ============================================================
    // 6. ANIMAL BITE
    // ============================================================
    {
      id: "animal_bite_child",
      title: "🐕 Animal bite / scratch — first aid",
      description: "Dog, cat, rat, snake — a bite can be dangerous due to rabies, infection, poison.",
      conditions: { situation: ["animal"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Infection / rabies prevented",
      tags: ["animal", "bite", "first_aid"],
      steps: [
        "Rinse the wound with water and soap for 10–15 minutes.",
        "If bleeding — press with sterile cloth.",
        "Treat with hydrogen peroxide or chlorhexidine on the edges.",
        "If bitten by a stray dog/cat — go to the ER. Rabies vaccine.",
        "If snake bite — go to the hospital. Don't suck out the venom, don't make incisions.",
        "If tick bite — remove with tweezers, save for analysis.",
        "Monitor the condition: fever, redness, swelling."
      ],
      warnings: [
        "DON'T stitch a bite wound.",
        "DON'T suck out snake venom with your mouth.",
        "Rabies is 100% fatal. Don't delay vaccination."
      ]
    },

    // ============================================================
    // 7. FIRE
    // ============================================================
    {
      id: "fire_safety",
      title: "🔥 Child played with fire — consequences and prevention",
      description: "Playing with matches, lighters, candles — a common cause of fires and burns in children.",
      conditions: { situation: ["fire"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Fire and burns prevented",
      tags: ["fire", "burn", "emergency"],
      steps: [
        "If the child was burned — rinse with running water for 15–20 minutes.",
        "If a fire started — take the child out, close the door, call 911.",
        "Put out the fire with a blanket, water, fire extinguisher.",
        "Hide matches, lighters, candles.",
        "Explain the consequences: burns, pain, fire.",
        "Conduct a 'fire drill' with an evacuation plan."
      ],
      warnings: [
        "Matches and lighters are not toys.",
        "DON'T leave burning candles unattended.",
        "DON'T apply oil or sour cream to burns."
      ]
    },

    // ============================================================
    // 8. WATER SAFETY
    // ============================================================
    {
      id: "water_safety",
      title: "🌊 Danger near water — drowning rescue",
      description: "Water is dangerous for children. Even 2 cm of water is enough for a child to drown.",
      conditions: { situation: ["water"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Life saved",
      tags: ["water", "drowning", "emergency"],
      steps: [
        "If the child is drowning — pull them out of the water. If under ice — call rescuers.",
        "Clear the mouth and nose of water. Check breathing.",
        "If no breathing — start CPR: 30 compressions + 2 breaths.",
        "If breathing — lay on side, wrap up, call an ambulance.",
        "Even if the child has recovered — go to the doctor (secondary drowning).",
        "Prevention: don't leave children near water without supervision."
      ],
      warnings: [
        "DON'T waste time removing water from the lungs — start CPR.",
        "DON'T stop resuscitation until the ambulance arrives.",
        "Secondary drowning can occur within 24–48 hours."
      ]
    },

    // ============================================================
    // 9. GAS SMELL
    // ============================================================
    {
      id: "gas_poisoning",
      title: "💨 Gas smell — immediate actions",
      description: "Gas smell is explosive. One spark can kill.",
      conditions: { situation: ["gas"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Explosion prevented",
      tags: ["gas", "poisoning", "emergency"],
      steps: [
        "DON'T turn on or off lights, DON'T use the phone.",
        "DON'T light matches, lighters, candles.",
        "Open windows and doors wide — ventilate.",
        "Close the shutoff valve on the gas pipe.",
        "LEAVE the apartment, close the door.",
        "From the outside, call 911. Report: 'Gas leak, address'.",
        "Don't return until the gas service arrives."
      ],
      warnings: [
        "DON'T turn on/off lights — any spark = explosion.",
        "DON'T use the phone INSIDE the apartment.",
        "Gas is lighter than air (methane) — near the ceiling, propane-butane — near the floor."
      ]
    },

    // ============================================================
    // 10. ELEVATOR SAFETY
    // ============================================================
    {
      id: "elevator_safety",
      title: "🚪 Child in an elevator — safety rules",
      description: "The elevator is not a toy. Teach your child the rules.",
      conditions: { situation: ["elevator"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Safe in elevator",
      tags: ["elevator", "safety", "rules"],
      steps: [
        "Teach the child: DON'T get in an elevator with strangers.",
        "If there's a stranger in the elevator — don't get in, wait for the next one.",
        "DON'T play in the elevator, don't jump, don't press buttons unnecessarily.",
        "If the elevator is stuck — press the 'Call dispatcher' button, shout for help.",
        "DON'T try to open the doors yourself.",
        "If the elevator is falling — crouch, brace, hold onto handrails.",
        "Always call parents if something is wrong."
      ],
      warnings: [
        "DON'T allow children to ride elevators without adults until 10–12 years old.",
        "DON'T play in the elevator — it's dangerous.",
        "If a stranger gets in the elevator — get out at the nearest floor."
      ]
    },

    // ============================================================
    // 11. SAFETY TRAINING
    // ============================================================
    {
      id: "safety_training",
      title: "📚 How to teach children safety — step-by-step plan",
      description: "Children are not born with an understanding of danger. They need to be taught.",
      conditions: { situation: ["stranger", "alone_home", "lost", "dangerous_item", "traffic", "animal", "fire", "water", "elevator", "gas"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Child's safety skills",
      tags: ["training", "safety", "parents"],
      steps: [
        "STEP 1. Show and explain: 'This is dangerous, this is safe'.",
        "STEP 2. Teach emergency numbers: 112 (universal), 911 (police), 911 (ambulance).",
        "STEP 3. Teach the child: name, last name, address, parents' phone.",
        "STEP 4. Run a drill: 'What to do if you get lost?' (stay in place, call mom).",
        "STEP 5. Teach a code word — if someone says they're from mom but doesn't know the code — don't go.",
        "STEP 6. Run a fire drill — evacuation plan, meeting place.",
        "STEP 7. Repeat the rules regularly, in a playful way."
      ],
      warnings: [
        "DON'T scare the child — explain calmly.",
        "DON'T do a 'one-time lesson' — training should be regular.",
        "Children under 7 don't remember rules the first time — repeat them."
      ]
    }
  ]
});