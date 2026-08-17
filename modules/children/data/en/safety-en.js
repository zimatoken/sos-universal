// === MODULE: CHILDREN — SAFETY ===
const safetyDataEn = {
  category: "safety",
  title: "🛡️ Safety",
  description: "Lost child, went with a stranger, left alone, dangerous items — what to do",

  questions: [
    {
      id: "situation",
      text: "What happened? (select all that apply)",
      type: "multi",
      options: [
        { id: "stranger", label: "👤 Child went with a stranger / talked to someone unknown", tags: ["stranger"] },
        { id: "alone_home", label: "🏠 Left home alone", tags: ["alone_home"] },
        { id: "lost", label: "🔍 Got lost in a store / mall / on the street", tags: ["lost"] },
        { id: "dangerous_item", label: "⚠️ Found a dangerous item (knife, pills, weapon)", tags: ["dangerous"] },
        { id: "traffic", label: "🚗 Dangerous situation on the road", tags: ["traffic"] },
        { id: "animal", label: "🐕 Bitten / scratched by an animal", tags: ["animal"] },
        { id: "fire", label: "🔥 Playing with fire / matches / lighter", tags: ["fire"] }
      ]
    },
    {
      id: "child_age",
      text: "How old is the child?",
      type: "single",
      conditions: { situation: ["stranger", "alone_home", "lost", "dangerous_item", "traffic", "animal", "fire"] },
      options: [
        { id: "baby", label: "👶 Under 3 years old", tags: ["baby"] },
        { id: "preschool", label: "🧒 3–7 years old", tags: ["preschool"] },
        { id: "school", label: "🧑 7–12 years old", tags: ["school_age"] },
        { id: "teen", label: "🧑‍🎓 Teenager 13–17 years old", tags: ["teen"] }
      ]
    },
    {
      id: "location",
      text: "Where did this happen?",
      type: "single",
      conditions: { situation: ["stranger", "alone_home", "lost", "dangerous_item", "traffic", "animal", "fire"] },
      options: [
        { id: "home", label: "🏠 At home / apartment", tags: ["home"] },
        { id: "street", label: "🌳 On the street / in the yard / park", tags: ["street"] },
        { id: "public", label: "🏪 In a store / mall / public transport", tags: ["public"] },
        { id: "school_place", label: "🏫 At school / kindergarten", tags: ["school_place"] }
      ]
    }
  ],

  solutions: [
    // ==========================================
    // 1. STRANGER
    // ==========================================
    {
      id: "stranger_danger",
      title: "🚨 Child is talking to a stranger — immediate action",
      description: "If the child has already left with a stranger or is talking to a suspicious person — every second counts.",
      conditions: { situation: ["stranger"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving the child",
      tags: ["stranger", "kidnapping", "emergency"],
      steps: [
        "If you see this happening in real time — immediately approach the child, take their hand, and walk away. Don't hesitate to shout, draw attention",
        "If the child has already left with a stranger — call 911 immediately. Report: child's description, suspect's description, direction, time",
        "Enable location tracking on the child's phone (if available): Find My iPhone, Google Family Link, Life360. Track their movement",
        "Describe EVERYTHING to police: height, weight, clothing, hair, distinguishing marks (scars, birthmarks), last words, child's mood",
        "Share the child's photo in neighborhood chats, school, kindergarten, social media. Ask to forward. The first hours are critical",
        "Check security cameras: entrance, yard, stores, bus stops. Save footage, give to police",
        "Don't panic in front of other children — they are scared. Explain that the police are looking and everything will be okay",
        "After the child is found — see a psychologist. Even brief contact with a stranger is traumatic. Don't scold the child, support them"
      ],
      warnings: [
        "DON'T wait 'just a little longer' — statistics show the first 3 hours after abduction are critical. The faster the police act, the better the chances",
        "DON'T try to chase the car yourself — it's dangerous, you could lose the trail. Remember the plate number, make, color, direction",
        "DON'T spread false information on social media — it interferes with police work. Only confirmed facts",
        "After the incident — be sure to talk to your child about safety rules: don't go with strangers, code word, 'no — run — yell'"
      ]
    },
    {
      id: "stranger_young_child",
      title: "👶 Young child with a stranger — special attention",
      description: "Children under 7 don't recognize danger. A stranger can be a 'nice uncle' with candy.",
      conditions: { situation: ["stranger"], child_age: ["baby", "preschool"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving the child",
      tags: ["stranger", "young", "emergency"],
      steps: [
        "Young children cannot resist. If you see a stranger with a child — approach, ask 'Who are you?', record on video",
        "Don't hesitate to shout, call for help, call the police, even if you're wrong. Better safe than sorry",
        "Teach the child a 'code word' — if a stranger doesn't know the code word, they must not go anywhere",
        "In public places, always hold the child's hand or keep them in a carrier / stroller",
        "If the child gets lost in a crowded place — immediately go to security, administration, the information desk"
      ],
      warnings: [
        "Young children cannot assess danger — they trust all adults. All responsibility is on you",
        "DON'T leave young children unattended in public places — even for a second",
        "Predators often use candy, toys, puppies to attract children — teach your child to say 'no'"
      ]
    },
    // ==========================================
    // 2. LOST
    // ==========================================
    {
      id: "lost_child_action",
      title: "🔍 Child is lost — search algorithm",
      description: "In a store, park, mall — anyone can get lost. Act quickly and systematically.",
      conditions: { situation: ["lost"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Finding the child",
      tags: ["lost", "search", "emergency"],
      steps: [
        "DON'T panic. Stop, look around — the child could be within 20 meters, just behind a shelf / tree",
        "If in a store / mall — contact security, administration, the checkout. They'll make an announcement, close exits",
        "If on the street — ask passersby, vendors, drivers. Show a photo. Children often hide out of fear — check around corners, in bushes, under benches",
        "If not found in 10–15 minutes — call 911. Report: description, clothing, last location, time",
        "Enable location tracking on the child's phone / watch (if available). Children often try to go 'home' from memory — check the route",
        "Share the photo in neighborhood chats, parent groups, social media. Ask to forward",
        "If the child is found — don't scold, don't punish. Hug them, calm them down. Talk about rules later: stay in place, call mom/dad, approach a store employee or police officer",
        "Teach your child in advance: first name, last name, address, parents' phone number. A contact bracelet. Code word 'I'm lost'"
      ],
      warnings: [
        "DON'T run chaotically — you could run right past the child. Act systematically: circle by circle, expanding the radius",
        "DON'T wait '5 more minutes' — if the child is missing for 10 minutes in an unfamiliar place, it's already an emergency. Call the police",
        "Children under 5 often hide out of fear rather than looking for parents. Check hiding places, behind curtains, under tables",
        "After finding them — don't scold. The child is already in shock. Discuss the rules later, in a calm setting"
      ]
    },
    // ==========================================
    // 3. HOME ALONE
    // ==========================================
    {
      id: "alone_home_safety",
      title: "🏠 Child home alone — safety rules",
      description: "If you have to leave your child alone, it's important to teach them basic safety rules.",
      conditions: { situation: ["alone_home"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Child's safety at home",
      tags: ["alone", "home", "safety"],
      steps: [
        "Immediately contact the child by phone/video call. Make sure they are okay",
        "Remind the rules: DO NOT open the door to anyone, even 'police', 'mailman', 'plumber'. If someone calls — don't answer, don't show yourself",
        "DO NOT turn on the gas, DO NOT use sharp objects (knife, scissors), DO NOT take medicine, DO NOT climb on the windowsill",
        "Leave the phone number of neighbors or relatives — someone to contact in an emergency",
        "Agree that the child will call you every 30–60 minutes (or message you) so you know everything is okay",
        "Prepare a simple snack in advance (sandwiches, yogurt, cookies, water) so the child doesn't need to use the gas/stove",
        "If the child is under 7 — don't leave them alone for more than 1–2 hours",
        "Install a video surveillance camera (smart home) — so you can see what's happening at home"
      ],
      warnings: [
        "Children under 7 are not recommended to be left home alone. Under Russian law — children under 7 cannot be left unattended (Article 14, Federal Law No. 124)",
        "DON'T leave matches, lighters, or dangerous items within reach",
        "DON'T tell the child 'don't be afraid of anything' — instead explain what to do in each situation",
        "Install an emergency communication app on the child's phone (direct call to you with one button)"
      ]
    },
    // ==========================================
    // 4. DANGEROUS ITEM
    // ==========================================
    {
      id: "dangerous_item_found",
      title: "⚠️ Child found a dangerous item",
      description: "Pills, knives, weapons, chemicals — children put everything in their mouths and try things. Act immediately.",
      conditions: { situation: ["dangerous_item"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–10 minutes",
      yield_estimate: "Preventing poisoning / injury",
      tags: ["poison", "dangerous", "emergency"],
      steps: [
        "If the child swallowed something — DO NOT induce vomiting without medical consultation! Some substances burn the esophagus on the way back up",
        "Immediately call 911 or poison control center. Report: what was swallowed, how much, when, age, weight",
        "Keep the packaging, remaining substance, pills — the doctor needs to know the composition and dosage. Take a photo",
        "If the child handled a weapon — don't yell, don't scare them. Calmly take it away, hide it, call the police (911)",
        "If the child cut / poked themselves — wash the wound with soap and water, treat with antiseptic, apply a sterile bandage. For severe bleeding — tourniquet above the wound",
        "Check: are there other dangerous items within reach? Remove EVERYTHING: medications, household chemicals, sharp objects, weapons, small parts",
        "After the incident — explain to the child: 'this is dangerous, painful, not allowed'. Don't yell, show with examples (torn paper, bitter taste)",
        "Install locks on cabinets with chemicals and medications. Store weapons in a safe. Small parts — out of reach"
      ],
      warnings: [
        "DON'T induce vomiting in case of poisoning with acid, alkali, gasoline, oil — this will double the esophageal burn. Only as directed by a doctor",
        "DON'T give milk, water, juice in case of poisoning without consultation — some substances increase absorption with liquid",
        "Children under 3 — everything goes in the mouth. Any small item (<3 cm) = choking hazard. Medicine = poisoning. Chemicals = burns",
        "After contact with a weapon — even if it didn't fire — see a psychologist. Children under 7 can't distinguish a toy from a weapon"
      ]
    },
    // ==========================================
    // 5. ROAD / TRAFFIC
    // ==========================================
    {
      id: "road_safety_child",
      title: "🚸 Child on the road — accident or dangerous situation",
      description: "Child ran onto the road, got hit by a car, playing on the roadway. Fast, but safe.",
      conditions: { situation: ["traffic"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Saving a life",
      tags: ["traffic", "accident", "emergency"],
      steps: [
        "If the child is on the roadway — approach from the side, not from the direction of traffic. Cars may not have time to stop",
        "If an accident — don't move the child if you suspect a spinal fracture. Call an ambulance: 911. Describe: age, consciousness, breathing, bleeding",
        "If the child is conscious — calm them down, don't panic. Children copy adult emotions. Speak quietly, confidently",
        "For bleeding — press a sterile cloth/rag on the wound. For a fracture — immobilize with an improvised splint (cardboard, ruler, board)",
        "If the child is unconscious — check breathing, pulse. If no breathing — start CPR (rescue breathing + chest compressions). For children: 30 compressions + 2 breaths (for infants — 2 fingers, for older — palm)",
        "After the accident — document: license plate number, driver's description, witnesses. Photos, video. Don't sign anything without a lawyer",
        "Even with a 'minor' impact — see a doctor. Concussion and internal injuries may show up hours later",
        "After the incident — talk to your child about traffic rules. Play 'traffic light', 'zebra crossing'. Explain with examples"
      ],
      warnings: [
        "DON'T move an injured child if you suspect a spinal or neck fracture — this can lead to paralysis",
        "DON'T give water, food, or medication for a concussion — risk of vomiting and choking. Only after a doctor's examination",
        "Children under 7 have poor judgment of car speed and distance. Don't let them near the road alone. Hold their hand",
        "After an accident — even without visible injuries — see a neurologist. Concussion in children shows up later: vomiting, drowsiness, headache"
      ]
    },
    // ==========================================
    // 6. ANIMAL BITE
    // ==========================================
    {
      id: "animal_bite_child",
      title: "🐕 Animal bite / scratch — first aid",
      description: "Dog, cat, rat, snake — a bite can be dangerous due to rabies, infection, or venom.",
      conditions: { situation: ["animal"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Preventing infection / rabies",
      tags: ["animal", "bite", "first_aid"],
      steps: [
        "Immediately wash the wound thoroughly with soap and water for 10–15 minutes. Soap destroys the rabies virus. Do not suture the wound",
        "If bleeding — press with sterile cloth. Don't bandage tightly — infection multiplies in a closed wound",
        "Treat with hydrogen peroxide, chlorhexidine, iodine (around the edges, not in the wound). Apply antibiotic ointment (Levomekol, Fucidin)",
        "If bitten by a dog/cat (stray, unvaccinated) — immediately go to a trauma center / infectious disease hospital. Rabies vaccine: day 0, 3, 7, 14, 28. Do not miss any!",
        "If bitten by a snake — immediately go to the hospital. Do not suck out venom, do not make incisions. Apply cold, immobilize the limb, keep below heart level",
        "If bitten by a tick — remove the tick with tweezers (by the head, not the body), twisting counterclockwise. Save the tick in a jar for encephalitis / borreliosis testing",
        "Monitor the condition: fever, redness, swelling, pus. If it worsens — see a doctor immediately",
        "After the incident — teach your child: don't touch unfamiliar animals, don't run from dogs (they'll chase), stand still, hands behind back, don't make eye contact"
      ],
      warnings: [
        "DON'T suture a bite wound — this traps infection inside. The wound must remain open and be washed",
        "DON'T suck snake venom with your mouth — venom will enter your blood through micro-cuts. Don't make incisions — risk of infection",
        "Rabies is 100% fatal if not vaccinated in time. First symptoms appear in 1–3 months, then it's too late. Don't delay vaccination",
        "Tick-borne encephalitis is dangerous for children. After a tick bite — get vaccinated (EnceVir) or have the tick tested. Prevention: vaccination before tick season"
      ]
    },
    // ==========================================
    // 7. FIRE
    // ==========================================
    {
      id: "fire_safety",
      title: "🔥 Child played with fire — consequences and prevention",
      description: "Playing with matches, lighters, candles — a common cause of fires and burns in children.",
      conditions: { situation: ["fire"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Preventing fire and burns",
      tags: ["fire", "burn", "emergency"],
      steps: [
        "If the child got burned — rinse the burn with running water for 15–20 minutes. Don't apply oil, sour cream, or toothpaste",
        "If a fire started — immediately evacuate the child from the room, close the door, call 911",
        "If the child lit something — put out the fire with a blanket, water, or fire extinguisher. Don't leave burning items unattended",
        "Check if the child left matches/lighters in their pockets, under their pillow. Hide all dangerous items",
        "Explain the consequences to the child: burns, pain, fire, damage. Show videos/photos of consequences (age-appropriate)",
        "If the child has played with fire repeatedly — see a psychologist. This may be a behavioral sign requiring attention",
        "Prevention: store matches/lighters out of reach. Install fire detectors. Conduct a 'safety lesson'"
      ],
      warnings: [
        "Matches and lighters are not toys. Children under 7 don't understand the consequences",
        "DON'T leave burning candles unattended — children can knock them over",
        "If the child gets burned — DON'T apply oil, sour cream — it traps heat",
        "Regularly conduct 'fire drills' with children — evacuation plan, meeting point"
      ]
    }
  ]
};

// ===== EXPORT =====
window.safetyDataEn = safetyDataEn;