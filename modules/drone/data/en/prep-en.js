// modules/drone/data/en/prep-en.js
// === MODULE: DRONES — PREPARATION ===

const dronePrepDataEn = {
  category: "prep",
  title: "📋 Preparation",
  description: "How to prepare for an aerial threat: documents, shelter, communication, action plan",

  questions: [
    {
      id: "documents_ready",
      type: "single",
      text: "Are your documents and valuables prepared for evacuation?",
      options: [
        { id: "docs_ready", label: "✅ Yes, gathered in one place", tags: ["docs_ready"] },
        { id: "docs_partial", label: "⚠️ Partially, but not everything", tags: ["docs_partial"] },
        { id: "docs_no", label: "❌ No, not prepared", tags: ["docs_no"] }
      ]
    },
    {
      id: "shelter_prep",
      type: "single",
      text: "Do you have a ready shelter?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "shelter_ready", label: "✅ Yes, basement / bomb shelter", tags: ["shelter_ready"] },
        { id: "shelter_partial", label: "⚠️ Have one, but needs preparation", tags: ["shelter_partial"] },
        { id: "shelter_no", label: "❌ No, not equipped", tags: ["shelter_no"] }
      ]
    },
    {
      id: "supplies",
      type: "single",
      text: "Do you have a supply of water, food, and medications?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "supplies_ready", label: "✅ Yes, have enough for 3–7 days", tags: ["supplies_ready"] },
        { id: "supplies_partial", label: "⚠️ Partially, but not enough", tags: ["supplies_partial"] },
        { id: "supplies_no", label: "❌ No, nothing", tags: ["supplies_no"] }
      ]
    },
    {
      id: "comms_prep",
      type: "single",
      text: "Do you have a communication plan with loved ones?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "comms_plan", label: "✅ Yes, have a group chat / meeting point", tags: ["comms_plan"] },
        { id: "comms_partial", label: "⚠️ Roughly, but not everything", tags: ["comms_partial"] },
        { id: "comms_no", label: "❌ No, haven't discussed", tags: ["comms_no"] }
      ]
    },
    {
      id: "route_prep",
      type: "single",
      text: "Do you know the evacuation routes and safe locations?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "route_ready", label: "✅ Yes, know several routes", tags: ["route_ready"] },
        { id: "route_partial", label: "⚠️ Roughly, but not sure", tags: ["route_partial"] },
        { id: "route_no", label: "❌ No, don't know", tags: ["route_no"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. PREPARE EMERGENCY BAG =====
    {
      id: "prep_emergency_bag",
      title: "🎒 Emergency bag preparation",
      description: "An emergency bag should be packed in advance and kept in a visible place.",
      conditions: { documents_ready: ["docs_no", "docs_partial"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2–4 hours",
      yield_estimate: "Ready bag",
      tags: ["emergency_bag", "preparation", "checklist"],
      steps: [
        "Documents: passports, IDs, insurance, birth certificates (in waterproof bag).",
        "Money: cash (in small bills) and backup card.",
        "Water: 2–3 liters per person (minimum 72 hours).",
        "Food: canned goods, MREs, energy bars, grains (no-cook).",
        "First aid: bandages, tourniquet, plasters, antiseptic, painkillers, prescription meds.",
        "Communication: charged phone, power bank, charger, radio (if available).",
        "Clothing: change of warm clothes, raincoat, sturdy shoes.",
        "Tools: knife, flashlight, lighter/matches, whistle, compact multi-tool.",
        "Personal: paper, pen, map, spare keys to home/car.",
        "Baby supplies (if applicable): diapers, formula, wet wipes."
      ],
      warnings: [
        "DON'T put extra items in the bag — only essentials.",
        "DON'T forget to check expiration dates of food and medications every 6 months.",
        "DON'T keep the bag in a hard-to-reach place — it should be ready to grab."
      ]
    },

    // ===== 2. PREPARE HOME =====
    {
      id: "prep_home_security",
      title: "🏠 Preparing your home for threats",
      description: "What to do at home to minimize risks.",
      conditions: { shelter_prep: ["shelter_partial", "shelter_no"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Safe home",
      tags: ["home", "security", "preparation"],
      steps: [
        "Tape windows in a cross pattern (reduces glass shattering).",
        "Reinforce doors (check locks, install bolts).",
        "Identify the safest room without windows (bathroom, hallway, closet).",
        "Fill bathtub and containers with water (in case of outages).",
        "Prepare flashlights, candles, batteries, chargers.",
        "Make a list of emergency numbers and place it in a visible spot.",
        "Check smoke and gas detectors.",
        "Remove heavy and loose items from balconies and terraces."
      ],
      warnings: [
        "DON'T leave windows open during a threat — shards can injure.",
        "DON'T keep gas cylinders or flammable substances in the apartment.",
        "DON'T block exits — keep a clear passage."
      ]
    },

    // ===== 3. FAMILY PLAN =====
    {
      id: "prep_family_plan",
      title: "👨‍👩‍👧‍👦 Family action plan",
      description: "Discuss and write down an action plan for the whole family.",
      conditions: { comms_prep: ["comms_no", "comms_partial"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1 hour",
      yield_estimate: "Family plan",
      tags: ["family_plan", "communication", "preparation"],
      steps: [
        "Gather the family and discuss possible scenarios: drone sound, explosion, evacuation.",
        "Identify two meeting points: nearby (at home) and distant (in a safe area).",
        "Assign responsibility for documents, children, elderly relatives.",
        "Establish code words for different situations (e.g., 'Red' — drone, 'Blue' — evacuation).",
        "Save a family group chat on everyone's phones (Telegram, WhatsApp).",
        "Agree on communication protocol if someone gets lost.",
        "Conduct a drill — practice the evacuation route within 30 minutes."
      ],
      warnings: [
        "DON'T postpone discussing the plan — time may not be available.",
        "DON'T forget about pets — they need their own plan.",
        "DON'T think 'it won't happen' — it's better to be prepared."
      ]
    },

    // ===== 4. EVACUATION ROUTE =====
    {
      id: "prep_evacuation_route",
      title: "🗺️ Planning evacuation routes",
      description: "Plan routes and alternative paths in advance.",
      conditions: { route_prep: ["route_no", "route_partial"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Ready route",
      tags: ["evacuation_route", "map", "preparation"],
      steps: [
        "Find the nearest safe location: bomb shelter, basement, underground parking.",
        "Mark 3 routes on the map: primary, secondary, and emergency (walking).",
        "Mark points on the map: water sources, pharmacies, stores, police stations.",
        "Check that routes are not blocked (construction, fences).",
        "If you have a car — fill the tank and check its condition.",
        "Save the map on your phone and keep a paper copy in the emergency bag.",
        "Share the route with all family members."
      ],
      warnings: [
        "DON'T rely on only one route — it may be blocked.",
        "DON'T forget walking routes — you may not always be able to drive.",
        "DON'T rely solely on GPS — a paper map doesn't run out of battery."
      ]
    },

    // ===== 5. SHELTER EQUIPMENT =====
    {
      id: "prep_shelter_equipment",
      title: "🛡️ Equipping your shelter",
      description: "How to prepare a shelter for extended stays.",
      conditions: { shelter_prep: ["shelter_ready"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "2–4 hours",
      yield_estimate: "Equipped shelter",
      tags: ["shelter", "equipment", "preparation"],
      steps: [
        "Check ventilation and lighting in the shelter.",
        "Set up sleeping areas: mattresses, blankets, pillows.",
        "Prepare water supply (3–5 liters per person per day).",
        "Stock food (canned goods, MREs, grains) for 7–14 days.",
        "Set up a bio-toilet or bucket with a lid (for extended stays).",
        "Prepare a battery-powered radio for news updates.",
        "Organize a first aid kit and chronic medication supply.",
        "Plan lighting: flashlights, candles, battery-powered lamps.",
        "Stock hygiene supplies: wet wipes, soap, antiseptic."
      ],
      warnings: [
        "DON'T clutter the shelter — keep space for movement.",
        "DON'T forget safety in the shelter: don't use open flames.",
        "DON'T leave the shelter unattended — assign duty shifts."
      ]
    }
  ]
};

// ===== EXPORT =====
window.dronePrepDataEn = dronePrepDataEn;
