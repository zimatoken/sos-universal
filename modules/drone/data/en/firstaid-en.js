// modules/drone/data/en/firstaid-en.js
// === MODULE: DRONES — FIRST AID ===

const droneFirstaidDataEn = {
  category: "firstaid",
  title: "🩹 First Aid",
  description: "How to help victims of explosions, wounds, concussions, and bleeding",

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
        { id: "unconscious", label: "😵 Loss of consciousness / stopped breathing", tags: ["unconscious"] }
      ]
    },
    {
      id: "consciousness",
      type: "single",
      text: "Is the victim conscious?",
      conditions: { injury_type: ["bleeding", "fracture", "burn", "concussion", "shrapnel", "unconscious"] },
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
      conditions: { injury_type: ["bleeding", "fracture", "burn", "concussion", "shrapnel", "unconscious"] },
      options: [
        { id: "breathing_yes", label: "✅ Yes, breathing normally", tags: ["breathing_yes"] },
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
        { id: "venous", label: "🩸 Venous (dark blood, steady flow)", tags: ["venous"] },
        { id: "arterial", label: "🩸 Arterial (bright red, pulsing)", tags: ["arterial"] }
      ]
    },
    {
      id: "has_kit",
      type: "single",
      text: "Do you have a first aid kit or improvised supplies?",
      conditions: { injury_type: ["bleeding", "fracture", "burn", "concussion", "shrapnel", "unconscious"] },
      options: [
        { id: "kit_yes", label: "✅ I have a first aid kit", tags: ["kit_yes"] },
        { id: "kit_improvised", label: "🧻 Improvised supplies (cloth, water)", tags: ["kit_improvised"] },
        { id: "kit_no", label: "❌ I have nothing", tags: ["kit_no"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. ARTERIAL BLEEDING =====
    {
      id: "firstaid_arterial_bleeding",
      title: "🩸 Arterial bleeding — tourniquet and stopping",
      description: "Arterial bleeding is life-threatening. Act immediately.",
      conditions: { injury_type: ["bleeding"], bleeding_severity: ["arterial"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Bleeding stopped",
      tags: ["arterial", "tourniquet", "emergency"],
      steps: [
        "IMMEDIATELY apply a tourniquet above the wound (5–10 cm from the edge).",
        "If no tourniquet — use a belt, scarf, or strip of cloth.",
        "Tighten until bleeding stops. Write down the application time.",
        "Tourniquet cannot be left for more than 1–1.5 hours (summer) or 1 hour (winter).",
        "Cover the wound with a sterile dressing or clean cloth.",
        "Call an ambulance (911/112) or inform rescuers about the victim.",
        "Monitor the victim's consciousness and breathing."
      ],
      warnings: [
        "DO NOT remove the tourniquet until doctors arrive — it can cause fatal bleeding.",
        "DO NOT loosen the tourniquet if bleeding hasn't stopped.",
        "DO NOT apply the tourniquet directly on bare skin — place cloth underneath."
      ]
    },

    // ===== 2. VENOUS BLEEDING =====
    {
      id: "firstaid_venous_bleeding",
      title: "🩸 Venous bleeding — pressure dressing",
      description: "Venous bleeding is stopped with a pressure dressing.",
      conditions: { injury_type: ["bleeding"], bleeding_severity: ["venous"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Bleeding stopped",
      tags: ["venous", "dressing", "first_aid"],
      steps: [
        "Apply a pressure dressing using sterile bandage or clean cloth.",
        "Press on the wound for 10–15 minutes without removing the dressing.",
        "If blood soaks through — apply another layer on top.",
        "Elevate the limb above heart level (if possible).",
        "Call an ambulance (911/112) or inform rescuers.",
        "Monitor the victim's condition."
      ],
      warnings: [
        "DO NOT remove the dressing to check the bleeding — it disrupts the clot.",
        "DO NOT use dirty materials — risk of infection.",
        "DO NOT loosen pressure if bleeding continues."
      ]
    },

    // ===== 3. CAPILLARY BLEEDING =====
    {
      id: "firstaid_capillary_bleeding",
      title: "🩸 Capillary bleeding — wound care",
      description: "Capillary bleeding is usually not dangerous but requires treatment.",
      conditions: { injury_type: ["bleeding"], bleeding_severity: ["capillary"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "2-5 minutes",
      yield_estimate: "Wound treated",
      tags: ["capillary", "wound_care", "first_aid"],
      steps: [
        "Rinse the wound with clean water or saline solution.",
        "Treat the wound edges with antiseptic (iodine, hydrogen peroxide).",
        "Apply a sterile bandage or plaster.",
        "If the wound is dirty — remove visible particles with tweezers.",
        "Monitor for signs of infection (redness, swelling, pus)."
      ],
      warnings: [
        "DO NOT use alcohol or iodine inside the wound — only around the edges.",
        "DO NOT leave the wound open — risk of infection.",
        "DO NOT ignore redness and swelling — a doctor may be needed."
      ]
    },

    // ===== 4. LOSS OF CONSCIOUSNESS =====
    {
      id: "firstaid_unconscious",
      title: "😵 Loss of consciousness — check breathing and CPR",
      description: "If the victim is unconscious, check breathing. If stopped — start CPR.",
      conditions: { injury_type: ["unconscious", "concussion"], consciousness: ["unconscious_yes"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Breathing restored",
      tags: ["unconscious", "cpr", "emergency"],
      steps: [
        "Check breathing: lean close to the victim's face, watch the chest, listen.",
        "If breathing is absent — call an ambulance (911/112) and start CPR.",
        "CPR for adults: 30 chest compressions (depth 5–6 cm) + 2 breaths.",
        "CPR for children: 30 compressions (depth 4–5 cm) + 2 breaths.",
        "Continue CPR until ambulance arrives or breathing resumes.",
        "If breathing is present — place the victim on their side (recovery position).",
        "Cover the victim to maintain warmth."
      ],
      warnings: [
        "DO NOT leave the victim unattended.",
        "DO NOT give water or food to an unconscious person — they may choke.",
        "DO NOT stop CPR until the ambulance arrives."
      ]
    },

    // ===== 5. WEAK BREATHING =====
    {
      id: "firstaid_weak_breathing",
      title: "⚠️ Weak / irregular breathing — assistance",
      description: "With weak breathing, it's important to maintain open airways.",
      conditions: { breathing: ["breathing_weak"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Breathing stabilized",
      tags: ["breathing", "weak", "emergency"],
      steps: [
        "Clear the airway: tilt the head back, lift the chin.",
        "Check the mouth — no foreign objects or vomit.",
        "If breathing doesn't improve — start rescue breathing.",
        "If oxygen is available — administer oxygen.",
        "Cover the victim, maintain warmth.",
        "Don't give water or food — may enter the airway.",
        "Call an ambulance (911/112)."
      ],
      warnings: [
        "DO NOT delay calling an ambulance — weak breathing may stop.",
        "DO NOT give water — it may cause vomiting and aspiration.",
        "DO NOT leave the victim alone."
      ]
    },

    // ===== 6. FRACTURE =====
    {
      id: "firstaid_fracture",
      title: "🦴 Fracture — immobilization and splinting",
      description: "If a fracture is suspected, immobilize the limb.",
      conditions: { injury_type: ["fracture"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 minutes",
      yield_estimate: "Immobilized",
      tags: ["fracture", "immobilization", "first_aid"],
      steps: [
        "Don't try to realign the bone — it can damage vessels and nerves.",
        "Immobilize the limb in the position it's in.",
        "Use improvised supplies: boards, sticks, cardboard, rolled clothing.",
        "Immobilize two joints — above and below the fracture.",
        "Apply the splint over clothing, not too tight.",
        "For open fractures — cover with sterile dressing, don't push the bone in.",
        "Call an ambulance (911/112)."
      ],
      warnings: [
        "DO NOT try to realign the bone yourself — it's dangerous.",
        "DO NOT apply the splint too tightly — it restricts circulation.",
        "DO NOT give painkillers before a doctor examines."
      ]
    },

    // ===== 7. BURN =====
    {
      id: "firstaid_burn",
      title: "🔥 Burn — cooling and protection",
      description: "For burns, it's important to cool the affected area quickly.",
      conditions: { injury_type: ["burn"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10-20 minutes",
      yield_estimate: "Burn depth reduced",
      tags: ["burn", "cooling", "first_aid"],
      steps: [
        "Cool the burn with running water (15–25°C) for 15–20 minutes.",
        "Don't use ice or ice water — it can worsen the damage.",
        "Cover the burn with a sterile dressing or clean cloth.",
        "Don't pop blisters — they prevent infection.",
        "Don't remove clothing stuck to the skin — cut around it.",
        "For burns to the face, eyes, hands, genitals — call ambulance immediately.",
        "Give water to the victim (if conscious and not vomiting)."
      ],
      warnings: [
        "DO NOT use oil, sour cream, or toothpaste — they trap heat.",
        "DO NOT pop blisters — risk of infection.",
        "DO NOT apply tight bandages — they can restrict circulation."
      ]
    },

    // ===== 8. CONCUSSION =====
    {
      id: "firstaid_concussion",
      title: "🧠 Concussion / head injury — observation and care",
      description: "After a head impact or explosion, monitor the victim's condition.",
      conditions: { injury_type: ["concussion"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 hours (observation)",
      yield_estimate: "Diagnosis",
      tags: ["concussion", "head_injury", "observation"],
      steps: [
        "Lay the victim on their back with head elevated (if no neck injury).",
        "Apply cold to the impact site (ice, cloth soaked in cold water).",
        "If vomiting — turn head to the side to prevent choking.",
        "Don't give painkillers or sleeping pills — they mask symptoms.",
        "Monitor for 24 hours: drowsiness, headache, double vision, speech issues.",
        "If any dangerous symptoms — immediately see a doctor or call ambulance.",
        "Don't leave the victim alone for the first 6 hours."
      ],
      warnings: [
        "DO NOT give aspirin — it can increase bleeding.",
        "DO NOT let them sleep immediately after injury — wake every 2 hours.",
        "DO NOT ignore vomiting and drowsiness — they are dangerous signs."
      ]
    },

    // ===== 9. SHRAPNEL WOUND =====
    {
      id: "firstaid_shrapnel",
      title: "💥 Shrapnel wound — removing foreign objects",
      description: "For shrapnel wounds, do not attempt to remove the object yourself.",
      conditions: { injury_type: ["shrapnel"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Stabilized",
      tags: ["shrapnel", "foreign_body", "emergency"],
      steps: [
        "DO NOT remove the shrapnel from the wound — it can increase bleeding.",
        "Immobilize the object (with bandage, cloth, plastic bottle).",
        "Apply a dressing around the object without moving it.",
        "Call an ambulance (911/112) immediately.",
        "If the shrapnel is in a limb — immobilize the limb to prevent movement.",
        "Monitor the victim's breathing and consciousness.",
        "For severe bleeding — apply a tourniquet above the wound (if possible)."
      ],
      warnings: [
        "DO NOT try to pull out the object — it can be fatal.",
        "DO NOT apply a tourniquet if the object is in the chest or abdomen.",
        "DO NOT give painkillers before a doctor examines."
      ]
    },

    // ===== 10. NO FIRST AID KIT =====
    {
      id: "firstaid_no_kit",
      title: "❌ No first aid kit — what to use instead",
      description: "If you don't have a first aid kit, use improvised supplies.",
      conditions: { has_kit: ["kit_no"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-5 minutes",
      yield_estimate: "Improvised first aid",
      tags: ["no_kit", "improvised", "first_aid"],
      steps: [
        "To stop bleeding — use clean cloth, clothing, a towel.",
        "For a tourniquet — use a belt, tie, scarf, strip of cloth.",
        "For a splint — use a board, stick, umbrella, rolled magazine.",
        "To wash wounds — use clean water (bottled or boiled).",
        "Instead of gloves — use plastic bags or clean cloth.",
        "Call an ambulance (911/112) and describe the situation — this is most important."
      ],
      warnings: [
        "DO NOT use dirty cloth — risk of infection.",
        "DO NOT use alcohol to wash wounds.",
        "DO NOT leave the victim without help until the ambulance arrives."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneFirstaidDataEn = droneFirstaidDataEn;
