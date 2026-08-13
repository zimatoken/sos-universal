// modules/drone/data/en/firstaid-en.js
// === MODULE: DRONES — FIRST AID ===
const droneFirstaidDataEn = {
  category: "firstaid",
  title: "🩹 First Aid",
  description: "How to help victims of explosions, wounds, concussion, and bleeding",

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
      text: "If bleeding — how severe?",
      condition: { injury_type: ["bleeding"] },
      options: [
        { id: "capillary", label: "🩸 Capillary (oozing)", tags: ["capillary"] },
        { id: "venous", label: "🩸 Venous (dark blood, flowing)", tags: ["venous"] },
        { id: "arterial", label: "🩸 Arterial (bright red, pulsating)", tags: ["arterial"] }
      ]
    },
    {
      id: "has_kit",
      type: "single",
      text: "Do you have a first aid kit or improvised materials?",
      options: [
        { id: "kit_yes", label: "✅ Have a first aid kit", tags: ["kit_yes"] },
        { id: "kit_improvised", label: "🧻 Improvised materials (cloth, bandage, water)", tags: ["kit_improvised"] },
        { id: "kit_no", label: "❌ Nothing", tags: ["kit_no"] }
      ]
    }
  ],

  solutions: [
    {
      id: "firstaid_arterial_bleeding",
      title: "🩸 Arterial bleeding — tourniquet and stop",
      description: "Arterial bleeding is life-threatening. Act immediately.",
      conditions: { injury_type: ["bleeding"], bleeding_severity: ["arterial"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Stop bleeding",
      tags: ["arterial", "tourniquet", "emergency"],
      steps: [
        "IMMEDIATELY apply a tourniquet above the wound (5–10 cm from the edge).",
        "If no tourniquet — use a belt, scarf, strip of cloth.",
        "Tighten until bleeding stops. Record the time of application.",
        "Tourniquet cannot be kept for more than 1–1.5 hours (summer) and 1 hour (winter).",
        "Cover the wound with a sterile dressing or clean cloth.",
        "Call an ambulance (911/112) or inform rescuers about the victim.",
        "Monitor the victim's consciousness and breathing."
      ],
      warnings: [
        "DO NOT remove the tourniquet until doctors arrive — it can cause fatal bleeding.",
        "DO NOT loosen the tourniquet if bleeding has not stopped.",
        "DO NOT apply the tourniquet on bare skin — place cloth underneath."
      ]
    },
    {
      id: "firstaid_venous_bleeding",
      title: "🩸 Venous bleeding — pressure dressing",
      description: "Venous bleeding is stopped with a pressure dressing.",
      conditions: { injury_type: ["bleeding"], bleeding_severity: ["venous"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Stop bleeding",
      tags: ["venous", "dressing", "first_aid"],
      steps: [
        "Apply a pressure dressing from sterile bandage or clean cloth.",
        "Press on the wound for 10–15 minutes without removing the dressing.",
        "If blood soaks through — apply another layer on top.",
        "Elevate the limb above heart level (if possible).",
        "Call an ambulance (911/112) or inform rescuers.",
        "Monitor the victim's condition."
      ],
      warnings: [
        "DO NOT remove the dressing to check the bleeding — it disrupts the clot.",
        "DO NOT use dirty materials — risk of infection.",
        "DO NOT loosen pressure if blood continues to flow."
      ]
    },
    {
      id: "firstaid_unconscious",
      title: "😵 Unconscious — check breathing and CPR",
      description: "If the victim is unconscious, check breathing. If stopped — start CPR.",
      conditions: { injury_type: ["unconscious", "concussion"], consciousness: ["unconscious_yes"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Restore breathing",
      tags: ["unconscious", "cpr", "emergency"],
      steps: [
        "Check breathing: lean close to the victim's face, watch the chest, listen.",
        "If no breathing — call an ambulance (911/112) and start CPR.",
        "CPR for adults: 30 chest compressions (depth 5–6 cm) + 2 breaths.",
        "CPR for children: 30 compressions (depth 4–5 cm) + 2 breaths.",
        "Continue CPR until ambulance arrives or breathing resumes.",
        "If breathing is present — place the victim on their side (recovery position).",
        "Cover the victim to keep them warm."
      ],
      warnings: [
        "DO NOT leave the victim unattended.",
        "DO NOT give water or food if unconscious — may choke.",
        "DO NOT stop CPR until ambulance arrives."
      ]
    },
    {
      id: "firstaid_fracture",
      title: "🦴 Fracture — immobilization and splinting",
      description: "If a fracture is suspected, immobilize the limb.",
      conditions: { injury_type: ["fracture"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 minutes",
      yield_estimate: "Immobilization",
      tags: ["fracture", "immobilization", "first_aid"],
      steps: [
        "Do not try to realign the bone — it can damage vessels and nerves.",
        "Immobilize the limb in the position you found it.",
        "Use improvised materials: boards, sticks, cardboard, rolled clothing.",
        "Immobilize two joints — above and below the fracture.",
        "Apply the splint over clothing, not too tight.",
        "For open fracture — cover the wound with a sterile dressing, do not push the bone back.",
        "Call an ambulance (911/112)."
      ],
      warnings: [
        "DO NOT try to realign the bone yourself — it's dangerous.",
        "DO NOT apply the splint too tight — it will disrupt circulation.",
        "DO NOT give painkillers before medical examination."
      ]
    },
    {
      id: "firstaid_burn",
      title: "🔥 Burn — cooling and protection",
      description: "For burns, it's important to cool the affected area quickly.",
      conditions: { injury_type: ["burn"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10-20 minutes",
      yield_estimate: "Reduce burn depth",
      tags: ["burn", "cooling", "first_aid"],
      steps: [
        "Cool the burn with running water (15–25°C) for 15–20 minutes.",
        "Do not use ice or ice water — it can worsen the damage.",
        "Cover the burn with a sterile dressing or clean cloth.",
        "Do not pop blisters — they are a gateway for infection.",
        "Do not remove clothing stuck to the skin — cut around it.",
        "For burns to the face, eyes, hands, genitals — call an ambulance immediately.",
        "Give the victim water (if conscious and not vomiting)."
      ],
      warnings: [
        "DO NOT use oil, sour cream, toothpaste — they trap heat.",
        "DO NOT pop blisters — increases infection risk.",
        "DO NOT apply tight bandages — they can restrict circulation."
      ]
    },
    {
      id: "firstaid_concussion",
      title: "🧠 Concussion / head injury — monitoring and care",
      description: "After a blow to the head or explosion, monitor the victim's condition.",
      conditions: { injury_type: ["concussion"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 hours (observation)",
      yield_estimate: "Diagnosis",
      tags: ["concussion", "head_injury", "observation"],
      steps: [
        "Lay the victim on their back with head elevated (if no neck injury suspected).",
        "Apply cold to the impact site (ice, cloth soaked in cold water).",
        "If vomiting — turn head to side to prevent choking.",
        "Do not give painkillers or sleeping pills — they mask symptoms.",
        "Monitor for 24 hours: drowsiness, headache, double vision, speech problems.",
        "If any dangerous symptoms appear — immediately see a doctor or call ambulance.",
        "Do not leave the victim alone for the first 6 hours."
      ],
      warnings: [
        "DO NOT give aspirin — it may increase bleeding.",
        "DO NOT let them sleep immediately after injury — wake every 2 hours.",
        "DO NOT ignore vomiting and drowsiness — they are dangerous signs."
      ]
    },
    {
      id: "firstaid_shrapnel",
      title: "💥 Shrapnel wound — foreign body removal",
      description: "Do not attempt to remove the foreign object yourself.",
      conditions: { injury_type: ["shrapnel"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Stabilization",
      tags: ["shrapnel", "foreign_body", "emergency"],
      steps: [
        "DO NOT remove the shrapnel from the wound — it may increase bleeding.",
        "Secure the object (with bandage, cloth, plastic bottle).",
        "Apply dressing around the object without moving it.",
        "Call an ambulance (911/112) immediately.",
        "If the shrapnel is in a limb — immobilize the limb to prevent movement.",
        "Monitor the victim's breathing and consciousness.",
        "If severe bleeding — apply a tourniquet above the wound (if possible)."
      ],
      warnings: [
        "DO NOT try to pull out the object — it can be fatal.",
        "DO NOT apply a tourniquet if the object is in the chest or abdomen.",
        "DO NOT give painkillers before medical examination."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneFirstaidDataEn = droneFirstaidDataEn;
