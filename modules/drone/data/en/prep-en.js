// modules/drone/data/en/prep-en.js
// === MODULE: DRONES — PREPARATION ===

const dronePrepDataEn = {
  category: "prep",
  icon: "📋",
  title: "📋 Preparation",
  description: "How to prepare for an aerial threat: documents, shelter, communication, action plan",

  questions: [
    {
      id: "documents_ready",
      type: "single",
      text: "Are your documents and valuables prepared for evacuation?",
      options: [
        { id: "docs_ready", label: "✅ Yes, collected in one place", tags: ["docs_ready"] },
        { id: "docs_partial", label: "⚠️ Partially, but not everything", tags: ["docs_partial"] },
        { id: "docs_no", label: "❌ No, not prepared", tags: ["docs_no"] }
      ]
    },
    {
      id: "shelter_prep",
      type: "single",
      text: "Do you have a ready shelter?",
      options: [
        { id: "shelter_ready", label: "✅ Yes, basement / bomb shelter", tags: ["shelter_ready"] },
        { id: "shelter_partial", label: "⚠️ Have one, but needs preparation", tags: ["shelter_partial"] },
        { id: "shelter_no", label: "❌ No, not equipped", tags: ["shelter_no"] }
      ]
    },
    {
      id: "supplies",
      type: "single",
      text: "Do you have a supply of water, food, and medicine?",
      options: [
        { id: "supplies_ready", label: "✅ Yes, enough for 3–7 days", tags: ["supplies_ready"] },
        { id: "supplies_partial", label: "⚠️ Partially, but not enough", tags: ["supplies_partial"] },
        { id: "supplies_no", label: "❌ No, nothing", tags: ["supplies_no"] }
      ]
    },
    {
      id: "comms_prep",
      type: "single",
      text: "Do you have a communication plan with your family?",
      options: [
        { id: "comms_plan", label: "✅ Yes, we have a chat / meeting point", tags: ["comms_plan"] },
        { id: "comms_partial", label: "⚠️ Roughly know, but not everything", tags: ["comms_partial"] },
        { id: "comms_no", label: "❌ No, we haven't discussed it", tags: ["comms_no"] }
      ]
    },
    {
      id: "route_prep",
      type: "single",
      text: "Do you know evacuation routes and safe places?",
      options: [
        { id: "route_ready", label: "✅ Yes, I know several routes", tags: ["route_ready"] },
        { id: "route_partial", label: "⚠️ Roughly, but not sure", tags: ["route_partial"] },
        { id: "route_no", label: "❌ No, I don't know", tags: ["route_no"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. EMERGENCY BAG =====
    {
      id: "prep_emergency_bag",
      title: "🎒 Packing an emergency bag (readiness)",
      description: "The emergency bag should be packed in advance and placed in a visible spot.",
      conditions: { documents_ready: ["docs_no", "docs_partial"] },
      priority: 10,
      reliability: "high",
      time_estimate: "2–4 hours",
      yield_estimate: "Ready bag",
      tags: ["emergency_bag", "preparation", "checklist"],
      steps: [
        "Documents: passports, SNILS, INN, insurance, birth certificates (in a waterproof bag).",
        "Money: cash (in different denominations) and a spare card.",
        "Water: 2–3 liters per person (minimum 72 hours).",
        "Food: canned goods, dry rations, energy bars, cereals (no cooking required).",
        "First aid: bandages, tourniquet, plaster, antiseptic, painkillers, chronic medications.",
        "Communication: charged phone, power bank, charger, walkie-talkie (if available).",
        "Clothing: spare warm clothes, raincoat, sturdy shoes.",
        "Tools: knife, flashlight, lighter/matches, whistle, compact multitool.",
        "Personal: paper, pen, map, spare keys to apartment/car.",
        "Children's items (if applicable): diapers, formula, wet wipes."
      ],
      warnings: [
        "DO NOT put unnecessary items in the bag — only essentials.",
        "DO NOT forget to check expiration dates of food and medicines every 6 months.",
        "DO NOT store the bag in a hard-to-reach place — it should be handy."
      ],
      tips: [
        "Keep the bag by the exit so you can grab it quickly during evacuation.",
        "Check the contents monthly and update (seasonal clothing, expirations).",
        "Include a list of all items in the bag — easier to check."
      ]
    },

    // ===== 2. HOME SECURITY =====
    {
      id: "prep_home_security",
      title: "🏠 Preparing the house for a threat",
      description: "What to do at home to minimize risks.",
      conditions: { shelter_prep: ["shelter_partial", "shelter_no"] },
      priority: 20,
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Safe home",
      tags: ["home", "security", "preparation"],
      steps: [
        "Tape windows crosswise with tape (reduces shrapnel spread).",
        "Reinforce doors (check locks, install deadbolts).",
        "Identify the safest room without windows (bathroom, hallway, pantry).",
        "Fill the bathtub and containers with water (in case of outages).",
        "Prepare flashlights, candles, batteries, chargers.",
        "Make a list of emergency numbers and place them in a visible spot.",
        "Check smoke and gas detectors.",
        "Remove heavy and loose items from balconies and loggias."
      ],
      warnings: [
        "DO NOT leave windows open during a threat — shrapnel can injure.",
        "DO NOT store gas cylinders and flammable substances indoors.",
        "DO NOT block exits — keep a clear passage."
      ],
      tips: [
        "Keep a flashlight and keys to all locks in plain sight.",
        "Check that all windows close and lock properly.",
        "Prepare a bag for documents — they should be within reach."
      ]
    },

    // ===== 3. FAMILY PLAN =====
    {
      id: "prep_family_plan",
      title: "👨‍👩‍👧‍👦 Family action plan",
      description: "Discuss and write down an action plan for the whole family.",
      conditions: { comms_prep: ["comms_no", "comms_partial"] },
      priority: 30,
      reliability: "high",
      time_estimate: "1 hour",
      yield_estimate: "Family plan",
      tags: ["family_plan", "communication", "preparation"],
      steps: [
        "Gather the family and discuss possible scenarios: drone sound, explosion, evacuation.",
        "Define two meeting points: local (near home) and distant (in a safe area).",
        "Assign responsibilities: who collects documents, who watches children, who helps elderly.",
        "Set code words for different situations (e.g., 'Red' — drone, 'Blue' — evacuation).",
        "Create a shared chat (Telegram, WhatsApp) on all family members' phones.",
        "Agree on a communication procedure if someone gets lost.",
        "Conduct a drill — walk the evacuation route within 30 minutes."
      ],
      warnings: [
        "DO NOT postpone the plan discussion — time may not be available.",
        "DO NOT forget about pets — they should have their own plan.",
        "DO NOT assume 'it won't happen' — better to be prepared."
      ],
      tips: [
        "Write the plan on paper and place it in a visible spot.",
        "Discuss the plan with neighbors — they might have a bomb shelter.",
        "Ensure everyone has charged phones."
      ]
    },

    // ===== 4. EVACUATION ROUTE =====
    {
      id: "prep_evacuation_route",
      title: "🗺️ Preparing an evacuation route",
      description: "Plan routes and alternatives in advance.",
      conditions: { route_prep: ["route_no", "route_partial"] },
      priority: 40,
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Ready route",
      tags: ["evacuation_route", "map", "preparation"],
      steps: [
        "Find the nearest safe place: bomb shelter, basement, underground parking.",
        "Mark 3 routes on the map: main, backup, and emergency (walking).",
        "Mark points: water sources, pharmacies, shops, police stations.",
        "Check that paths are not blocked (construction, fences).",
        "If you have a car — fill it up and check technical condition.",
        "Save the map on your phone and keep a paper copy in the emergency bag.",
        "Tell all family members about the route."
      ],
      warnings: [
        "DO NOT use only one route — it may be blocked.",
        "DO NOT forget walking routes — you can't always drive.",
        "DO NOT rely only on GPS — a paper map doesn't run out of battery."
      ],
      tips: [
        "Mark all basements and shelters along the route on the map.",
        "Check if there are dangerous zones (bridges, overpasses) on the route.",
        "Take a photo of the route on your phone and print a copy."
      ]
    },

    // ===== 5. SHELTER EQUIPMENT =====
    {
      id: "prep_shelter_equipment",
      title: "🛡️ Equipping the shelter",
      description: "How to prepare a shelter for long-term stay.",
      conditions: { shelter_prep: ["shelter_ready"] },
      priority: 50,
      reliability: "high",
      time_estimate: "2–4 hours",
      yield_estimate: "Equipped shelter",
      tags: ["shelter", "equipment", "preparation"],
      steps: [
        "Check ventilation and lighting in the shelter.",
        "Arrange sleeping places: mattresses, blankets, pillows.",
        "Stock water (3–5 liters per person per day).",
        "Stock food (canned goods, dry rations, cereals) for 7–14 days.",
        "Install a portable toilet or bucket with a lid (for long stays).",
        "Prepare a radio receiver (with batteries) to get news.",
        "Organize a first aid kit and a supply of chronic medications.",
        "Plan lighting: flashlights, candles, battery lamps.",
        "Stock hygiene supplies: wet wipes, soap, antiseptic."
      ],
      warnings: [
        "DO NOT clutter the shelter — there should be room to move.",
        "DO NOT forget safety in the shelter: no open flames.",
        "DO NOT leave the shelter unattended — assign watchmen."
      ],
      tips: [
        "Check if there's a fire extinguisher in the shelter.",
        "Keep warm blankets and spare clothes in the shelter.",
        "Check supplies and expiration dates monthly."
      ]
    }
  ]
};

// ===== EXPORT =====
window.dronePrepDataEn = dronePrepDataEn;
