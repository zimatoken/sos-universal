// modules/drone/data/en/firstaid-en.js
// === MODULE: DRONES — FIRST AID ===

const droneFirstaidDataEn = {
  category: "firstaid",
  icon: "🩹",
  title: "🩹 First aid",
  description: "How to help victims of explosions, wounds, concussions and bleeding",

  questions: [
    {
      id: "injury_type",
      type: "single",
      text: "What type of injury does the victim have?",
      options: [
        { id: "bleeding", label: "🩸 Bleeding (arterial/venous)", tags: ["bleeding"] },
        { id: "fracture", label: "🦴 Fracture / limb injury", tags: ["fracture"] },
        { id: "burn", label: "🔥 Burn / thermal injury", tags: ["burn"] },
        { id: "concussion", label: "🧠 Concussion / head injury", tags: ["concussion"] },
        { id: "shrapnel", label: "💥 Shrapnel wound", tags: ["shrapnel"] },
        { id: "unconscious", label: "😵 Unconscious / no breathing", tags: ["unconscious"] }
      ]
    },
    {
      id: "consciousness",
      type: "single",
      text: "Is the victim conscious?",
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
      options: [
        { id: "breathing_yes", label: "✅ Yes, breathing", tags: ["breathing_yes"] },
        { id: "breathing_no", label: "❌ No, not breathing", tags: ["breathing_no"] },
        { id: "breathing_weak", label: "⚠️ Weak / irregular breathing", tags: ["breathing_weak"] }
      ]
    },
    {
      id: "bleeding_severity",
      type: "single",
      text: "If bleeding — how severe is it?",
      conditions: { injury_type: ["bleeding"] },
      options: [
        { id: "capillary", label: "🩸 Capillary (oozing)", tags: ["capillary"] },
        { id: "venous", label: "🩸 Venous (dark blood, flowing)", tags: ["venous"] },
        { id: "arterial", label: "🩸 Arterial (bright, pulsating)", tags: ["arterial"] }
      ]
    },
    {
      id: "has_kit",
      type: "single",
      text: "Do you have a first aid kit or improvised supplies?",
      options: [
        { id: "kit_yes", label: "✅ Yes, first aid kit", tags: ["kit_yes"] },
        { id: "kit_improvised", label: "🧻 Improvised (cloth, bandage, water)", tags: ["kit_improvised"] },
        { id: "kit_no", label: "❌ Nothing available", tags: ["kit_no"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. ARTERIAL BLEEDING =====
    {
      id: "firstaid_arterial_bleeding",
      title: "🩸 Arterial bleeding — tourniquet and stop",
      description: "Arterial bleeding is life-threatening. Act immediately.",
      conditions: { injury_type: ["bleeding"], bleeding_severity: ["arterial"] },
      priority: 5,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Stop bleeding",
      tags: ["arterial", "tourniquet", "emergency"],
      steps: [
        "IMMEDIATELY apply tourniquet above the wound (5–10 cm from edge).",
        "If no tourniquet — use a belt, scarf, strip of cloth.",
        "Tighten until bleeding stops. Write down the application time.",
        "Tourniquet cannot be applied for more than 1–1.5 hours (summer) and 1 hour (winter).",
        "Cover the wound with a sterile bandage or clean cloth.",
        "Call an ambulance (103/112) or report to rescuers.",
        "Monitor the victim's consciousness and breathing."
      ],
      warnings: [
        "DO NOT remove the tourniquet until doctors arrive — could cause fatal bleeding.",
        "DO NOT loosen the tourniquet if bleeding hasn't stopped.",
        "DO NOT apply tourniquet to bare skin — place fabric underneath."
      ],
      tips: [
        "Keep a tourniquet in your first aid kit — always within reach.",
        "If no tourniquet — use belt or scarf, twist with a stick.",
        "Carry tourniquet in a visible place (pocket, belt)."
      ]
    },

    // ===== 2. VENOUS BLEEDING =====
    {
      id: "firstaid_venous_bleeding",
      title: "🩸 Venous bleeding — pressure dressing",
      description: "Venous bleeding is stopped with a pressure dressing.",
      conditions: { injury_type: ["bleeding"], bleeding_severity: ["venous"] },
      priority: 4,
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Stop bleeding",
      tags: ["venous", "dressing", "first_aid"],
      steps: [
        "Apply a pressure dressing from sterile bandage or clean cloth.",
        "Press on the wound for 10–15 minutes without removing the dressing.",
        "If blood soaks through — apply another one on top.",
        "Raise the limb above heart level (if possible).",
        "Call an ambulance (103/112) or report to rescuers.",
        "Monitor the victim's condition."
      ],
      warnings: [
        "DO NOT remove the dressing to check bleeding — it disrupts clot formation.",
        "DO NOT use dirty materials — risk of infection.",
        "DO NOT loosen pressure if bleeding continues."
      ],
      tips: [
        "Use sterile bandage or clean cotton cloth.",
        "If dressing is soaked — don't remove, add new layer on top.",
        "Raise the limb — this reduces blood flow."
      ]
    },

    // ===== 3. UNCONSCIOUSNESS =====
    {
      id: "firstaid_unconscious",
      title: "😵 Unconscious — check breathing and CPR",
      description: "If unconscious, check breathing. If stopped — start CPR.",
      conditions: { injury_type: ["unconscious", "concussion"], consciousness: ["unconscious_yes"] },
      priority: 5,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Restore breathing",
      tags: ["unconscious", "cpr", "emergency"],
      steps: [
        "Check breathing: lean close to face, watch chest, listen.",
        "If no breathing — call ambulance (103/112) and start CPR.",
        "CPR for adults: 30 chest compressions (depth 5–6 cm) + 2 breaths.",
        "CPR for children: 30 compressions (depth 4–5 cm) + 2 breaths.",
        "Continue CPR until ambulance arrives or breathing resumes.",
        "If breathing — place victim on side (recovery position).",
        "Cover victim to maintain warmth."
      ],
      warnings: [
        "DO NOT leave victim unattended.",
        "DO NOT give water or food if unconscious — may choke.",
        "DO NOT stop CPR until ambulance arrives."
      ],
      tips: [
        "Remember CPR rhythm: 'Stayin' Alive' — 100 compressions per minute.",
        "If unsure about breathing — start CPR, it's safer.",
        "Use straight arms, press with chest, not elbows."
      ]
    },

    // ===== 4. FRACTURE =====
    {
      id: "firstaid_fracture",
      title: "🦴 Fracture — fixation and immobilization",
      description: "If a fracture is suspected, immobilize the limb.",
      conditions: { injury_type: ["fracture"] },
      priority: 3,
      reliability: "high",
      time_estimate: "5-10 minutes",
      yield_estimate: "Immobilization",
      tags: ["fracture", "immobilization", "first_aid"],
      steps: [
        "Do not try to straighten the bone — may damage vessels and nerves.",
        "Immobilize the limb in its current position.",
        "Use improvised materials: boards, sticks, cardboard, rolled clothing.",
        "Fix two joints — above and below the fracture.",
        "Apply splint over clothing, not too tight.",
        "For open fracture — cover wound with sterile bandage, do not reduce bone.",
        "Call ambulance (103/112)."
      ],
      warnings: [
        "DO NOT try to straighten the bone yourself — it's dangerous.",
        "DO NOT apply splint too tight — will cut off circulation.",
        "DO NOT give painkillers before doctor examination."
      ],
      tips: [
        "Good splint materials: board, stick, umbrella, rolled magazine.",
        "Secure splint with bandage or tape, without compressing limb.",
        "Check pulse below splint every 15 minutes."
      ]
    },

    // ===== 5. BURN =====
    {
      id: "firstaid_burn",
      title: "🔥 Burn — cooling and protection",
      description: "It's important to cool the affected area quickly.",
      conditions: { injury_type: ["burn"] },
      priority: 3,
      reliability: "high",
      time_estimate: "10-20 minutes",
      yield_estimate: "Reduce burn depth",
      tags: ["burn", "cooling", "first_aid"],
      steps: [
        "Cool the burn with running water (15–25°C) for 15–20 minutes.",
        "Do not use ice or ice water — may worsen damage.",
        "Cover the burn with sterile bandage or clean cloth.",
        "Do not pop blisters — they are infection entry points.",
        "Do not remove clothing stuck to skin — cut around it.",
        "For face, eyes, hands, or genital burns — call ambulance immediately.",
        "Give water (if conscious and no vomiting)."
      ],
      warnings: [
        "DO NOT use oil, sour cream, toothpaste — they trap heat.",
        "DO NOT pop blisters — increases infection risk.",
        "DO NOT apply tight bandages — may restrict circulation."
      ],
      tips: [
        "Cool under running water, not in a basin — water should flow away.",
        "For extensive burns — cool no more than 20 minutes to avoid hypothermia.",
        "Cover burn with sterile dressing to protect from infection."
      ]
    },

    // ===== 6. CONCUSSION =====
    {
      id: "firstaid_concussion",
      title: "🧠 Concussion / head injury — observation and care",
      description: "After head impact or blast, monitor the victim's condition.",
      conditions: { injury_type: ["concussion"] },
      priority: 4,
      reliability: "high",
      time_estimate: "1-2 hours (observation)",
      yield_estimate: "Diagnosis",
      tags: ["concussion", "head_injury", "observation"],
      steps: [
        "Lay victim on back with head elevated (if no neck injury suspected).",
        "Apply cold to impact area (ice, cloth soaked in cold water).",
        "If vomiting — turn head to side to prevent choking.",
        "Do not give painkillers or sleeping pills — they mask symptoms.",
        "Observe for 24 hours: drowsiness, headache, double vision, speech problems.",
        "If any dangerous symptoms — immediately see doctor or call ambulance.",
        "Do not leave victim alone in first 6 hours."
      ],
      warnings: [
        "DO NOT give aspirin — may increase bleeding.",
        "DO NOT let them sleep immediately after injury — wake every 2 hours.",
        "DO NOT ignore vomiting and drowsiness — they are dangerous signs."
      ],
      tips: [
        "Wake victim every 2 hours, ask simple questions.",
        "Remember the time of injury — important for doctors.",
        "If double vision appears — call ambulance immediately."
      ]
    },

    // ===== 7. SHRAPNEL WOUND =====
    {
      id: "firstaid_shrapnel",
      title: "💥 Shrapnel wound — foreign body removal",
      description: "Do not attempt to remove the object yourself.",
      conditions: { injury_type: ["shrapnel"] },
      priority: 5,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Stabilization",
      tags: ["shrapnel", "foreign_body", "emergency"],
      steps: [
        "DO NOT remove shrapnel from wound — may increase bleeding.",
        "Secure the object (with bandage, cloth, plastic bottle).",
        "Apply bandage around object without moving it.",
        "Call ambulance (103/112) immediately.",
        "If shrapnel is in a limb — immobilize limb to prevent movement.",
        "Monitor victim's breathing and consciousness.",
        "For severe bleeding — apply tourniquet above wound (if possible)."
      ],
      warnings: [
        "DO NOT try to pull the object out — could be fatal.",
        "DO NOT apply tourniquet if object is in chest or abdomen.",
        "DO NOT give painkillers before doctor examination."
      ],
      tips: [
        "Secure object with bandage or plastic bottle.",
        "If in the eye — don't apply pressure, cover lightly with cloth.",
        "Try to calm the victim — panic increases bleeding."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneFirstaidDataEn = droneFirstaidDataEn;