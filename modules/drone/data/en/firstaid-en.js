// modules/drone/data/en/firstaid-en.js
// === MODULE: DRONE — FIRST AID ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "drone",
    category: "firstaid",
    version: "2.0.0",
    lang: "en",
    title: "First Aid",
    description: "How to help victims of explosions, wounds, concussion, bleeding, cardiac arrest",
    icon: "🩹",
    color: "#ea580c"
  },

  questions: [
    {
      id: "injury_type",
      type: "single",
      text: "What type of injury does the victim have?",
      options: [
        { id: "bleeding", label: "🩸 Bleeding (arterial/venous)", tags: ["bleeding"] },
        { id: "massive_bleeding", label: "🩸🩸 Massive bleeding (gushing)", tags: ["massive_bleeding"] },
        { id: "fracture", label: "🦴 Fracture / limb injury", tags: ["fracture"] },
        { id: "open_fracture", label: "🦴 Open fracture (bone protruding)", tags: ["open_fracture"] },
        { id: "burn", label: "🔥 Burn / thermal injury", tags: ["burn"] },
        { id: "airway_burn", label: "🔥 Airway burn (smoke, hot air)", tags: ["airway_burn"] },
        { id: "concussion", label: "🧠 Concussion / head injury", tags: ["concussion"] },
        { id: "shrapnel", label: "💥 Shrapnel wound", tags: ["shrapnel"] },
        { id: "chest_wound", label: "🫁 Chest wound / pneumothorax", tags: ["chest_wound"] },
        { id: "spine_injury", label: "🦴 Neck / spine injury", tags: ["spine_injury"] },
        { id: "eye_injury", label: "👁️ Eye injury", tags: ["eye_injury"] },
        { id: "unconscious", label: "😵 Unconscious", tags: ["unconscious"] },
        { id: "no_breathing", label: "🫁 Cardiac arrest / no breathing", tags: ["no_breathing"] }
      ]
    },
    {
      id: "consciousness",
      type: "single",
      text: "Is the victim conscious?",
      conditions: { injury_type: ["bleeding", "massive_bleeding", "fracture", "open_fracture", "burn", "airway_burn", "concussion", "shrapnel", "chest_wound", "spine_injury", "eye_injury", "unconscious", "no_breathing"] },
      options: [
        { id: "conscious", label: "✅ Yes, conscious", tags: ["conscious"] },
        { id: "unconscious_yes", label: "❌ No, unconscious", tags: ["unconscious_yes"] },
        { id: "confused", label: "⚠️ Confused / disoriented", tags: ["confused"] }
      ]
    },
    {
      id: "breathing",
      type: "single",
      text: "Is the victim breathing?",
      conditions: { injury_type: ["bleeding", "massive_bleeding", "fracture", "open_fracture", "burn", "airway_burn", "concussion", "shrapnel", "chest_wound", "spine_injury", "eye_injury", "unconscious", "no_breathing"] },
      options: [
        { id: "breathing_yes", label: "✅ Yes, breathing", tags: ["breathing_yes"] },
        { id: "breathing_no", label: "❌ No, not breathing", tags: ["breathing_no"] },
        { id: "breathing_weak", label: "⚠️ Weak / irregular breathing", tags: ["breathing_weak"] }
      ]
    },
    {
      id: "injury_location",
      type: "single",
      text: "Where is the wound/injury?",
      conditions: { injury_type: ["bleeding", "massive_bleeding", "fracture", "open_fracture", "shrapnel"] },
      options: [
        { id: "arm", label: "💪 Arm", tags: ["arm"] },
        { id: "leg", label: "🦵 Leg", tags: ["leg"] },
        { id: "torso", label: "🫀 Torso (chest, abdomen)", tags: ["torso"] },
        { id: "head_neck", label: "🧠 Head / neck", tags: ["head_neck"] }
      ]
    },
    {
      id: "massive_bleeding",
      type: "single",
      text: "Is the bleeding severe (gushing, pulsating)?",
      conditions: { injury_type: ["bleeding", "massive_bleeding"] },
      options: [
        { id: "massive_yes", label: "✅ Yes, bright blood, pulsating", tags: ["massive_yes"] },
        { id: "massive_no", label: "❌ No, dark blood, oozing", tags: ["massive_no"] },
        { id: "massive_unknown", label: "❓ Don't know / can't see", tags: ["massive_unknown"] }
      ]
    },
    {
      id: "chest_wound",
      type: "single",
      text: "Is there an open chest wound or whistling sound when breathing?",
      conditions: { injury_type: ["chest_wound"] },
      options: [
        { id: "chest_open", label: "🫁 Open chest wound", tags: ["chest_open"] },
        { id: "chest_whistle", label: "🫁 Whistling sound when breathing", tags: ["chest_whistle"] },
        { id: "chest_both", label: "🫁 Both", tags: ["chest_both"] }
      ]
    },
    {
      id: "spine_injury",
      type: "single",
      text: "Is there a suspected neck or spine injury?",
      conditions: { injury_type: ["spine_injury"] },
      options: [
        { id: "spine_yes", label: "🦴 Yes, suspected fracture", tags: ["spine_yes"] },
        { id: "spine_no", label: "🦴 No, neck is mobile", tags: ["spine_no"] },
        { id: "spine_unknown", label: "❓ Don't know", tags: ["spine_unknown"] }
      ]
    },
    {
      id: "has_kit",
      type: "single",
      text: "Do you have a first aid kit or improvised supplies?",
      conditions: { injury_type: ["bleeding", "massive_bleeding", "fracture", "open_fracture", "burn", "airway_burn", "concussion", "shrapnel", "chest_wound", "spine_injury", "eye_injury", "unconscious", "no_breathing"] },
      options: [
        { id: "kit_yes", label: "✅ Yes, I have a first aid kit", tags: ["kit_yes"] },
        { id: "kit_improvised", label: "🧻 Improvised (cloth, bandage, water)", tags: ["kit_improvised"] },
        { id: "kit_no", label: "❌ Nothing available", tags: ["kit_no"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. MASSIVE BLEEDING — TOURNIQUET
    // ============================================================
    {
      id: "firstaid_massive_bleeding",
      title: "🩸🩸 Massive bleeding — tourniquet and stop",
      description: "Massive bleeding is life-threatening. Act immediately.",
      conditions: { injury_type: ["massive_bleeding", "bleeding"], massive_bleeding: ["massive_yes"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30–60 seconds",
      yield_estimate: "Bleeding stopped",
      tags: ["massive", "tourniquet", "emergency"],
      steps: [
        "IMMEDIATELY apply a tourniquet above the wound (5–10 cm from the edge).",
        "If no tourniquet — use a belt, scarf, strip of cloth, wire (twisted).",
        "Tighten until bleeding stops. Write down the time applied (critical!).",
        "Tourniquet cannot stay on more than 1–1.5 hours (summer) and 1 hour (winter).",
        "Cover the wound with a sterile bandage or clean cloth.",
        "If bleeding doesn't stop — apply a second tourniquet below the first.",
        "Call an ambulance (103/112) or report the victim to rescuers.",
        "Monitor consciousness and breathing. If breathing stops — start CPR."
      ],
      warnings: [
        "DON'T remove the tourniquet before medical arrival — may cause fatal bleeding.",
        "DON'T loosen the tourniquet if bleeding hasn't stopped.",
        "DON'T apply a tourniquet on bare skin — place cloth underneath.",
        "MUST record the tourniquet application time! This saves lives."
      ]
    },

    // ============================================================
    // 2. VENOUS BLEEDING — PRESSURE DRESSING
    // ============================================================
    {
      id: "firstaid_venous_bleeding",
      title: "🩸 Venous bleeding — pressure dressing",
      description: "Venous bleeding (dark blood, flows steadily) is stopped with a pressure dressing.",
      conditions: { injury_type: ["bleeding"], massive_bleeding: ["massive_no"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Bleeding stopped",
      tags: ["venous", "dressing", "first_aid"],
      steps: [
        "Apply a pressure dressing using sterile bandage or clean cloth.",
        "Press on the wound for 10–15 minutes without removing the dressing.",
        "If blood soaks through — add another layer on top, don't remove the first.",
        "Elevate the limb above heart level (if possible).",
        "Apply cold to the wound (ice in cloth, cold water).",
        "Call an ambulance (103/112) or inform rescuers.",
        "Monitor the victim's condition."
      ],
      warnings: [
        "DON'T remove the dressing to check bleeding — it disrupts the clot.",
        "DON'T use dirty materials — risk of infection.",
        "DON'T loosen pressure if bleeding continues."
      ]
    },

    // ============================================================
    // 3. CARDIAC ARREST — CPR
    // ============================================================
    {
      id: "firstaid_no_breathing",
      title: "🫁 Cardiac arrest / no breathing — CPR",
      description: "In cardiac arrest, every second counts. Start CPR immediately.",
      conditions: { injury_type: ["no_breathing"], breathing: ["breathing_no"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Breathing restored",
      tags: ["cpr", "cardiac_arrest", "emergency"],
      steps: [
        "Check pulse on the carotid artery (6–10 seconds). If no pulse — start CPR.",
        "CPR for adults: 30 chest compressions (depth 5–6 cm, rate 100–120/min) + 2 breaths.",
        "CPR for children: 30 compressions (depth 4–5 cm) + 2 breaths.",
        "For infants: 2 fingers on chest, depth 4 cm, 100–120/min, 30 compressions + 2 breaths.",
        "Continue CPR until ambulance arrives or breathing returns.",
        "If an AED is available — use it, follow the instructions.",
        "If breathing returns — place the victim on their side (recovery position).",
        "Don't stop CPR until ambulance arrives — there's always a chance."
      ],
      warnings: [
        "DON'T stop CPR until ambulance arrives. There is always a chance of survival.",
        "DON'T perform CPR on a soft surface — needs a firm base.",
        "DON'T spend more than 10 seconds checking for pulse.",
        "CPR may break ribs — this is acceptable if it saves a life."
      ]
    },

    // ============================================================
    // 4. CHEST WOUND — PNEUMOTHORAX
    // ============================================================
    {
      id: "firstaid_chest_injury",
      title: "🫁 Chest wound / pneumothorax — occlusive dressing",
      description: "An open chest wound or whistling sound when breathing is a pneumothorax. Seal the wound.",
      conditions: { injury_type: ["chest_wound"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Condition stabilized",
      tags: ["chest", "pneumothorax", "emergency"],
      steps: [
        "DON'T remove any object protruding from the chest wound!",
        "Apply an occlusive dressing: clean plastic, bag, or foil over the wound, secure with tape or bandage on three sides (one side open for air to escape).",
        "If there is a whistling sound when breathing — seal the wound tightly.",
        "Place the victim in a semi-sitting position (45° angle), tilted toward the injured side.",
        "Don't give water or food — surgery may be needed.",
        "Call an ambulance (103/112) immediately. This is an emergency.",
        "Monitor breathing and consciousness."
      ],
      warnings: [
        "DON'T remove an object from a chest wound — may cause massive bleeding.",
        "DON'T apply a tight dressing — it can compress the lung.",
        "DON'T lay the victim flat — semi-sitting position.",
        "With pneumothorax, do not give water — emergency surgery may be needed."
      ]
    },

    // ============================================================
    // 5. SPINE INJURY — IMMOBILIZATION
    // ============================================================
    {
      id: "firstaid_spine_injury",
      title: "🦴 Neck / spine injury — immobilization",
      description: "If a spine injury is suspected — DON'T move the victim unless absolutely necessary.",
      conditions: { injury_type: ["spine_injury"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Immobilization until medical arrival",
      tags: ["spine", "immobilization", "emergency"],
      steps: [
        "DON'T move the victim if a spinal fracture is suspected!",
        "If the victim is in danger — transport on rigid stretchers (board, door, panel).",
        "Immobilize the head: place rolls of clothing, towels on both sides of the head.",
        "DON'T turn the victim's head, don't lift it.",
        "If conscious — ask them not to move or turn their head.",
        "Call an ambulance (103/112) immediately.",
        "If you must turn the victim — do it as a group, synchronously."
      ],
      warnings: [
        "DON'T turn the victim's head — may cause paralysis.",
        "DON'T try to realign vertebrae — dangerous.",
        "DON'T move the victim unless absolutely necessary.",
        "If the victim complains of numbness — sign of spinal injury."
      ]
    },

    // ============================================================
    // 6. OPEN FRACTURE
    // ============================================================
    {
      id: "firstaid_open_fracture",
      title: "🦴 Open fracture — do not realign the bone!",
      description: "In an open fracture, the bone is protruding. DO NOT try to realign it.",
      conditions: { injury_type: ["open_fracture"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3–5 minutes",
      yield_estimate: "Immobilization + wound protection",
      tags: ["open_fracture", "bone", "emergency"],
      steps: [
        "DON'T realign the bone! Leave it in its current position.",
        "Cover the wound with sterile bandage or clean cloth (don't press on the bone).",
        "Apply a splint: immobilize two joints above and below the fracture.",
        "If bleeding — apply a tourniquet above the wound.",
        "Cover the victim, keep them warm.",
        "Don't give water or food — surgery may be needed.",
        "Call an ambulance (103/112) immediately."
      ],
      warnings: [
        "DON'T realign the bone — may damage vessels and nerves.",
        "DON'T apply a bandage over the exposed bone — only around it.",
        "DON'T give painkillers before medical examination."
      ]
    },

    // ============================================================
    // 7. AIRWAY BURN
    // ============================================================
    {
      id: "firstaid_airway_burn",
      title: "🔥 Airway burn — immediate help",
      description: "Airway burns from smoke or hot air can cause swelling and suffocation.",
      conditions: { injury_type: ["airway_burn"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Breathing stabilized",
      tags: ["airway", "burn", "emergency"],
      steps: [
        "IMMEDIATELY move the victim to fresh air (if safe).",
        "Place the victim in a semi-sitting position (45° angle). This eases breathing.",
        "If breathing — administer humidified oxygen (if available).",
        "If breathing is difficult — maintain airway patency.",
        "If breathing stops — start CPR.",
        "Call an ambulance (103/112) immediately. Airway burns are life-threatening.",
        "Don't give water or food — intubation may be needed."
      ],
      warnings: [
        "Airway burns can cause laryngeal edema — life-threatening.",
        "DON'T give water — may enter the airway.",
        "DON'T leave the victim unattended — condition can deteriorate suddenly."
      ]
    },

    // ============================================================
    // 8. EYE INJURY
    // ============================================================
    {
      id: "firstaid_eye_injury",
      title: "👁️ Eye injury — do not rub!",
      description: "Do not rub an injured eye. Cover with a clean bandage and call a doctor.",
      conditions: { injury_type: ["eye_injury"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2–3 minutes",
      yield_estimate: "Vision preserved",
      tags: ["eye", "injury", "emergency"],
      steps: [
        "DON'T rub the eye — may worsen the injury.",
        "Cover the eye with clean cloth or sterile bandage.",
        "If a foreign body is present — don't try to remove it yourself.",
        "For chemical burns — rinse the eye with water for 15–20 minutes.",
        "Lay the victim down, cover the healthy eye — this reduces movement of the injured one.",
        "Call an ambulance (103/112) or take the victim to an ophthalmology center.",
        "Don't give painkillers before medical examination."
      ],
      warnings: [
        "DON'T rub the eye — may damage the cornea.",
        "DON'T try to remove a foreign body yourself.",
        "DON'T apply a pressure dressing — only protective."
      ]
    },

    // ============================================================
    // 9. FRACTURE — IMMOBILIZATION
    // ============================================================
    {
      id: "firstaid_fracture",
      title: "🦴 Fracture — immobilization and splinting",
      description: "If a fracture is suspected, immobilize the limb.",
      conditions: { injury_type: ["fracture"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Immobilization",
      tags: ["fracture", "immobilization", "first_aid"],
      steps: [
        "Don't try to realign the bone — may damage vessels and nerves.",
        "Immobilize the limb in its current position.",
        "Use improvised materials: boards, sticks, cardboard, rolled clothing.",
        "Immobilize two joints — above and below the fracture.",
        "Apply the splint over clothing, not too tightly.",
        "Apply cold to the fracture site (ice in cloth) for 15–20 minutes.",
        "Call an ambulance (103/112)."
      ],
      warnings: [
        "DON'T try to realign the bone yourself — dangerous.",
        "DON'T apply a splint too tightly — may impair circulation.",
        "DON'T give painkillers before medical examination."
      ]
    },

    // ============================================================
    // 10. BURN — COOLING AND PROTECTION
    // ============================================================
    {
      id: "firstaid_burn",
      title: "🔥 Burn — cooling and protection",
      description: "Cool the burned area quickly.",
      conditions: { injury_type: ["burn"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Burn depth reduced",
      tags: ["burn", "cooling", "first_aid"],
      steps: [
        "Cool the burn with running water (15–25°C) for 15–20 minutes.",
        "Don't use ice or ice water — may worsen the injury.",
        "Cover the burn with sterile bandage or clean cloth.",
        "Don't pop blisters — they are entry points for infection.",
        "Don't remove clothing stuck to the skin — cut around it.",
        "For burns on face, eyes, hands, genitals — call an ambulance immediately.",
        "Give the victim water (if conscious and not vomiting)."
      ],
      warnings: [
        "DON'T use oil, sour cream, toothpaste — they trap heat.",
        "DON'T pop blisters — increases infection risk.",
        "DON'T apply tight bandages — may impair circulation."
      ]
    },

    // ============================================================
    // 11. CONCUSSION / HEAD INJURY
    // ============================================================
    {
      id: "firstaid_concussion",
      title: "🧠 Concussion / head injury — observation and care",
      description: "After head injury, monitor the victim's condition.",
      conditions: { injury_type: ["concussion"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 hours (observation)",
      yield_estimate: "Diagnosis",
      tags: ["concussion", "head_injury", "observation"],
      steps: [
        "Lay the victim on their back with head elevated (if no neck injury).",
        "Apply cold to the impact site (ice, cloth with cold water).",
        "If vomiting — turn head to the side to prevent choking.",
        "Don't give painkillers or sleeping pills — they mask symptoms.",
        "Monitor for 24 hours: drowsiness, headache, double vision, speech impairment.",
        "If any dangerous symptoms — immediately to doctor or ambulance.",
        "Don't leave the victim alone for the first 6 hours."
      ],
      warnings: [
        "DON'T give aspirin — may increase bleeding.",
        "DON'T let them sleep immediately after injury — wake every 2 hours.",
        "DON'T ignore vomiting and drowsiness — dangerous signs."
      ]
    },

    // ============================================================
    // 12. SHRAPNEL WOUND
    // ============================================================
    {
      id: "firstaid_shrapnel",
      title: "💥 Shrapnel wound — foreign body removal",
      description: "Do not attempt to remove a shrapnel object yourself.",
      conditions: { injury_type: ["shrapnel"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Stabilization",
      tags: ["shrapnel", "foreign_body", "emergency"],
      steps: [
        "DON'T remove the shrapnel from the wound — may increase bleeding.",
        "Immobilize the object (bandage, cloth, plastic bottle).",
        "Apply a bandage around the object, without moving it.",
        "Call an ambulance (103/112) immediately.",
        "If the shrapnel is in a limb — immobilize the limb so it doesn't move.",
        "Monitor the victim's breathing and consciousness.",
        "If severe bleeding — apply a tourniquet above the wound (if possible)."
      ],
      warnings: [
        "DON'T try to remove the object — may be fatal.",
        "DON'T apply a tourniquet if the object is in the chest or abdomen.",
        "DON'T give painkillers before medical examination."
      ]
    },

    // ============================================================
    // 13. NO FIRST AID KIT — IMPROVISED SUPPLIES
    // ============================================================
    {
      id: "firstaid_no_kit",
      title: "❌ No first aid kit — what to use instead",
      description: "If you don't have a first aid kit, use improvised supplies.",
      conditions: { has_kit: ["kit_no"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Improvised help",
      tags: ["no_kit", "improvised", "first_aid"],
      steps: [
        "For bleeding — use clean cloth, clothing, towel.",
        "For tourniquet — use belt, tie, scarf, strip of cloth, wire (twisted).",
        "For splint — use board, stick, umbrella, rolled magazine.",
        "For wound cleaning — use clean water (bottled or boiled).",
        "Instead of gloves — use plastic bags or clean cloth.",
        "Call an ambulance (103/112) — this is the most important thing."
      ],
      warnings: [
        "DON'T use dirty materials — risk of infection.",
        "DON'T use alcohol to clean wounds.",
        "DON'T leave the victim without help until ambulance arrives."
      ]
    },

    // ============================================================
    // 14. UNCONSCIOUS (BUT BREATHING)
    // ============================================================
    {
      id: "firstaid_unconscious",
      title: "😵 Unconscious with breathing — recovery position",
      description: "If the victim is unconscious but breathing — place them in recovery position.",
      conditions: { injury_type: ["unconscious"], breathing: ["breathing_yes", "breathing_weak"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Airway patency",
      tags: ["unconscious", "recovery_position", "emergency"],
      steps: [
        "Place the victim on their side (recovery position).",
        "Tilt the head back to clear the airway.",
        "Bend the upper leg at the knee to stabilize the position.",
        "Check breathing every 2–3 minutes.",
        "Call an ambulance (103/112).",
        "Cover the victim to keep warm.",
        "Don't give water or food — may choke."
      ],
      warnings: [
        "DON'T leave the victim unattended.",
        "DON'T give water or food.",
        "DON'T put a pillow under the head — may block the airway."
      ]
    },

    // ============================================================
    // 15. WEAK BREATHING
    // ============================================================
    {
      id: "firstaid_weak_breathing",
      title: "⚠️ Weak / irregular breathing — help",
      description: "With weak breathing, maintain airway patency.",
      conditions: { breathing: ["breathing_weak"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Breathing stabilized",
      tags: ["breathing", "weak", "emergency"],
      steps: [
        "Clear the airway: tilt head back, lift chin.",
        "Check the mouth — any foreign objects, vomit.",
        "If breathing doesn't recover — start rescue breathing.",
        "If oxygen is available — administer oxygen.",
        "Cover the victim, keep them warm.",
        "Don't give water or food — may enter the airway.",
        "Call an ambulance (103/112)."
      ],
      warnings: [
        "DON'T delay calling an ambulance — weak breathing may stop.",
        "DON'T give water — may cause vomiting and aspiration.",
        "DON'T leave the victim alone."
      ]
    }
  ]
});