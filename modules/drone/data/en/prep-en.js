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
      text: "Do you have your documents and valuables prepared for evacuation?",
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
        { id: "shelter_partial", label: "⚠️ Yes, but needs preparation", tags: ["shelter_partial"] },
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
        { id: "comms_plan", label: "✅ Yes, common chat / meeting point", tags: ["comms_plan"] },
        { id: "comms_partial", label: "⚠️ Roughly, but not fully", tags: ["comms_partial"] },
        { id: "comms_no", label: "❌ No, haven't discussed", tags: ["comms_no"] }
      ]
    },
    {
      id: "route_prep",
      type: "single",
      text: "Do you know the evacuation routes and safe places?",
      options: [
        { id: "route_ready", label: "✅ Yes, know several routes", tags: ["route_ready"] },
        { id: "route_partial", label: "⚠️ Roughly, but not sure", tags: ["route_partial"] },
        { id: "route_no", label: "❌ No, don't know", tags: ["route_no"] }
      ]
    }
  ],

  solutions: [
    {
      id: "prep_emergency_bag",
      title: "🎒 Emergency bag preparation (readiness)",
      description: "An emergency bag should be prepared in advance and kept in a visible place.",
      conditions: { docs_ready: ["docs_no", "docs_partial"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "2–4 hours",
      yield_estimate: "Ready bag",
      tags: ["emergency_bag", "preparation", "checklist"],
      steps: [
        "Documents: passports, medical insurance, birth certificates (in waterproof bag).",
        "Money: cash (in different denominations) and spare card.",
        "Water: 2–3 liters per person (minimum 72 hours).",
        "Food: canned goods, dry rations, energy bars, cereals (no cooking required).",
        "First aid kit: bandages, tourniquet, plasters, antiseptic, painkillers, chronic medications.",
        "Communication: charged phone, power bank, charger, radio (if available).",
        "Clothing: spare warm clothes, raincoat, sturdy shoes.",
        "Tools: knife, flashlight, lighter/matches, whistle, compact multi-tool.",
        "Personal: paper, pen, map, spare keys for apartment/car.",
        "Children's items (if applicable): diapers, formula, wet wipes."
      ],
      warnings: [
        "DO NOT put unnecessary items in the bag — only essentials.",
        "DO NOT forget to check expiration dates of food and medicine every 6 months.",
        "DO NOT store the bag in a hard-to-reach place — it should be readily available."
      ]
    },
    {
      id: "prep_home_security",
      title: "🏠 Preparing your home for threat",
      description: "What to do at home to minimize risks.",
      conditions: { shelter_prep: ["shelter_partial", "shelter_no"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Safe home",
      tags: ["home", "security", "preparation"],
      steps: [
        "Tape windows crosswise (reduces glass shattering).",
        "Reinforce doors (check locks, install latches).",
        "Identify the safest room without windows (bathroom, hallway, walk-in closet).",
        "Fill bathtub and containers with water (in case of shortages).",
        "Prepare flashlights, candles, batteries, chargers.",
        "Make a list of emergency numbers and place it in a visible spot.",
        "Check the operation of smoke and gas detectors.",
        "Remove heavy and flying objects from balconies and loggias."
      ],
      warnings: [
        "DO NOT leave windows open during a threat — shrapnel can injure.",
        "DO NOT keep gas cylinders and flammable substances in the apartment.",
        "DO NOT block exits — there must be a clear passage."
      ]
    },
    {
      id: "prep_family_plan",
      title: "👨‍👩‍👧‍👦 Family action plan",
      description: "Discuss and write down an action plan for the whole family.",
      conditions: { comms_prep: ["comms_no", "comms_partial"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1 hour",
      yield_estimate: "Family plan",
      tags: ["family_plan", "communication", "preparation"],
      steps: [
        "Gather the family and discuss possible scenarios: drone sound, explosion, evacuation.",
        "Define two meeting points: nearby (near the house) and far (in a safe area).",
        "Assign responsibility for documents, children, and elderly relatives.",
        "Establish code words for different situations (e.g., 'Red' — drone, 'Blue' — evacuation).",
        "Save a common chat (Telegram, WhatsApp) on all family members' phones.",
        "Agree on communication protocol if someone gets lost.",
        "Run a drill — walk the evacuation route within 30 minutes."
      ],
      warnings: [
        "DO NOT delay discussing the plan for 'later' — time may not be available.",
        "DO NOT forget about pets — they need their own plan.",
        "DO NOT assume 'it won't happen' — it's better to be prepared."
      ]
    },
    {
      id: "prep_evacuation_route",
      title: "🗺️ Preparing an evacuation route",
      description: "Plan routes and alternative paths in advance.",
      conditions: { route_prep: ["route_no", "route_partial"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Ready route",
      tags: ["evacuation_route", "map", "preparation"],
      steps: [
        "Find the nearest safe place: bomb shelter, basement, underground parking.",
        "Mark 3 routes on the map: primary, backup, and emergency (on foot).",
        "Mark points on the map: water sources, pharmacies, shops, police stations.",
        "Check if routes are blocked (repairs, construction, fences).",
        "If you have a car — refuel it and check technical condition.",
        "Save the map on your phone and a paper copy in your emergency bag.",
        "Inform all family members about the route."
      ],
      warnings: [
        "DO NOT use only one route — it may be blocked.",
        "DO NOT forget about walking routes — you can't always drive.",
        "DO NOT rely only on GPS — a paper map doesn't run out of battery."
      ]
    },
    {
      id: "prep_shelter_equipment",
      title: "🛡️ Equipping a shelter",
      description: "How to prepare a shelter for long-term stay.",
      conditions: { shelter_prep: ["shelter_ready"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "2–4 hours",
      yield_estimate: "Equipped shelter",
      tags: ["shelter", "equipment", "preparation"],
      steps: [
        "Check ventilation and lighting in the shelter.",
        "Organize sleeping areas: mattresses, blankets, pillows.",
        "Prepare water supply (3–5 liters per person per day).",
        "Stock up on food (canned goods, dry rations, cereals) for 7–14 days.",
        "Set up a portable toilet or bucket with a lid (for long stays).",
        "Prepare a radio receiver (with batteries) for news.",
        "Organize a first aid kit and a supply of chronic medications.",
        "Plan lighting: flashlights, candles, battery-operated lamps.",
        "Stock hygiene supplies: wet wipes, soap, antiseptic."
      ],
      warnings: [
        "DO NOT clutter the shelter with items — there should be room for movement.",
        "DO NOT forget about safety in the shelter — do not use open flames.",
        "DO NOT leave the shelter unattended — assign duty shifts."
      ]
    }
  ]
};

window.dronePrepDataEn = dronePrepDataEn;
console.log('✅ dronePrepDataEn loaded');
