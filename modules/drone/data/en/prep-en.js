// modules/drone/data/en/prep-en.js
// === MODULE: DRONE — PREPARATION ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "drone",
    category: "prep",
    version: "2.0.0",
    lang: "en",
    title: "Preparation",
    description: "How to prepare for an air threat: documents, shelter, communication, action plan, mental readiness",
    icon: "📋",
    color: "#ea580c"
  },

  questions: [
    {
      id: "documents_ready",
      type: "single",
      text: "Are your documents and valuables prepared for evacuation?",
      options: [
        { id: "docs_ready", label: "✅ Yes, gathered in one place", tags: ["docs_ready"] },
        { id: "docs_partial", label: "⚠️ Partially, not everything", tags: ["docs_partial"] },
        { id: "docs_no", label: "❌ No, not prepared", tags: ["docs_no"] }
      ]
    },
    {
      id: "shelter_prep",
      type: "single",
      text: "Do you have a prepared shelter?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "shelter_ready", label: "✅ Yes, basement / bomb shelter", tags: ["shelter_ready"] },
        { id: "shelter_partial", label: "⚠️ Exists but needs preparation", tags: ["shelter_partial"] },
        { id: "shelter_no", label: "❌ No, not equipped", tags: ["shelter_no"] }
      ]
    },
    {
      id: "supplies",
      type: "single",
      text: "Do you have a supply of water, food, and medicine?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "supplies_ready", label: "✅ Yes, 3–7 days supply", tags: ["supplies_ready"] },
        { id: "supplies_partial", label: "⚠️ Partially, not enough", tags: ["supplies_partial"] },
        { id: "supplies_no", label: "❌ No, nothing", tags: ["supplies_no"] }
      ]
    },
    {
      id: "has_medical_kit",
      type: "single",
      text: "Do you have a first aid kit with chronic medications?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "med_yes", label: "✅ Yes, first aid kit is ready", tags: ["med_yes"] },
        { id: "med_partial", label: "⚠️ Partially, not all medications", tags: ["med_partial"] },
        { id: "med_no", label: "❌ No, no first aid kit", tags: ["med_no"] }
      ]
    },
    {
      id: "comms_prep",
      type: "single",
      text: "Do you have a communication plan with loved ones?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "comms_plan", label: "✅ Yes, shared chat / meeting point", tags: ["comms_plan"] },
        { id: "comms_partial", label: "⚠️ Roughly know, but not everything", tags: ["comms_partial"] },
        { id: "comms_no", label: "❌ No, haven't discussed", tags: ["comms_no"] }
      ]
    },
    {
      id: "route_prep",
      type: "single",
      text: "Do you know evacuation routes and safe places?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "route_ready", label: "✅ Yes, I know several routes", tags: ["route_ready"] },
        { id: "route_partial", label: "⚠️ Roughly know, not sure", tags: ["route_partial"] },
        { id: "route_no", label: "❌ No, I don't know", tags: ["route_no"] }
      ]
    },
    {
      id: "has_car",
      type: "single",
      text: "Do you have a car for evacuation?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "car_yes", label: "✅ Yes, I have a car", tags: ["car_yes"] },
        { id: "car_no", label: "❌ No, only on foot", tags: ["car_no"] },
        { id: "car_unknown", label: "❓ Don't know / no access", tags: ["car_unknown"] }
      ]
    },
    {
      id: "mental_ready",
      type: "single",
      text: "Are you mentally prepared for an emergency?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "mental_yes", label: "✅ Yes, I'm calm and ready", tags: ["mental_yes"] },
        { id: "mental_anxious", label: "⚠️ Anxious but trying to prepare", tags: ["mental_anxious"] },
        { id: "mental_no", label: "❌ No, panicking / not ready", tags: ["mental_no"] }
      ]
    },
    {
      id: "children_prep",
      type: "single",
      text: "Do you have children, and are they prepared for evacuation?",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      options: [
        { id: "children_no", label: "👤 No children", tags: ["children_no"] },
        { id: "children_ready", label: "🧒 Have children, they are ready", tags: ["children_ready"] },
        { id: "children_not_ready", label: "🧒 Have children, not ready", tags: ["children_not_ready"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. EMERGENCY BAG PREPARATION
    // ============================================================
    {
      id: "prep_emergency_bag",
      title: "🎒 Emergency bag preparation",
      description: "The emergency bag should be packed in advance and placed in a visible location.",
      conditions: { documents_ready: ["docs_no", "docs_partial"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2–4 hours",
      yield_estimate: "Ready bag",
      tags: ["emergency_bag", "preparation", "checklist"],
      steps: [
        "Documents: passports, ID numbers, insurance, birth certificates (in waterproof bag).",
        "Money: cash (different denominations) and spare card.",
        "Water: 2–3 liters per person (minimum 72 hours).",
        "Food: canned goods, MREs, energy bars, cereals (no cooking required).",
        "First aid kit: bandages, tourniquet, plasters, antiseptic, painkillers, chronic medications.",
        "Communication: charged phone, power bank, charger, radio (if available).",
        "Clothing: spare warm clothes, raincoat, sturdy shoes.",
        "Tools: knife, flashlight, lighter/matches, whistle, compact multi-tool.",
        "Personal: paper, pen, map, spare keys for apartment/car.",
        "Children's items (if applicable): diapers, formula, wet wipes."
      ],
      warnings: [
        "DON'T pack unnecessary items — only essentials.",
        "DON'T forget to check expiration dates of food and medicine every 6 months.",
        "DON'T store the bag in a hard-to-reach place — it should be within reach."
      ]
    },

    // ============================================================
    // 2. CHILDREN PREPARATION
    // ============================================================
    {
      id: "prep_children",
      title: "🧒 Preparing children for a threat",
      description: "Children need special preparation. Explain safety rules to them.",
      conditions: { children_prep: ["children_not_ready"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Children ready",
      tags: ["children", "preparation", "safety"],
      steps: [
        "Explain to children what a drone is and why it can be dangerous (without scaring them).",
        "Teach children to recognize the sound of a drone and hide in shelter.",
        "Explain: if they hear a loud sound — drop to the ground and cover their head.",
        "Agree on a code word that means 'danger'.",
        "Teach children where the shelter is and how to get there quickly.",
        "Run a drill: evacuate the house in 2 minutes.",
        "Prepare a backpack for children with water, food, a toy, and spare clothes.",
        "Explain what to do if they get lost: stay in place, wait for adults."
      ],
      warnings: [
        "DON'T scare children — explain calmly and clearly.",
        "DON'T leave children unattended in a danger zone.",
        "DON'T forget about psychological support — children mirror your behavior."
      ]
    },

    // ============================================================
    // 3. MENTAL PREPARATION
    // ============================================================
    {
      id: "prep_mental",
      title: "🧠 Mental preparation for an emergency",
      description: "Your calmness and readiness help you make the right decisions.",
      conditions: { mental_ready: ["mental_anxious", "mental_no"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Mental readiness",
      tags: ["mental", "preparation", "calm"],
      steps: [
        "Conduct a mental rehearsal: imagine hearing a drone sound — what do you do?",
        "Discuss the plan with your family — this reduces anxiety.",
        "Learn a quick calming technique: inhale for 4 seconds, exhale for 4 seconds.",
        "If you panic — don't make decisions. Pause, take a deep breath.",
        "Repeat to yourself: 'I am calm, I know what to do, I can do this'.",
        "Follow the news, but don't overload yourself with information.",
        "Talk to loved ones — support reduces anxiety."
      ],
      warnings: [
        "DON'T ignore your anxiety — acknowledge it, but don't let it control you.",
        "DON'T make decisions in a panic — this leads to mistakes.",
        "DON'T shut yourself off from information — but filter it."
      ]
    },

    // ============================================================
    // 4. HOME PREPARATION
    // ============================================================
    {
      id: "prep_home_security",
      title: "🏠 Home preparation for a threat",
      description: "What to do at home to minimize risks.",
      conditions: { shelter_prep: ["shelter_partial", "shelter_no"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 hours",
      yield_estimate: "Safe home",
      tags: ["home", "security", "preparation"],
      steps: [
        "Tape windows crosswise (reduces glass fragmentation).",
        "Reinforce doors (check locks, install deadbolts).",
        "Identify the safest room without windows (bathroom, hallway, closet).",
        "Fill the bathtub and containers with water (in case of interruptions).",
        "Prepare flashlights, candles, batteries, chargers.",
        "Make a list of emergency numbers and place it in a visible spot.",
        "Check smoke and gas detectors.",
        "Remove heavy and flying objects from balconies and loggias."
      ],
      warnings: [
        "DON'T leave windows open during a threat — shards can injure.",
        "DON'T keep gas cylinders and flammable substances in the apartment.",
        "DON'T block exits — there should be a clear passage."
      ]
    },

    // ============================================================
    // 5. VEHICLE PREPARATION
    // ============================================================
    {
      id: "prep_vehicle",
      title: "🚗 Vehicle preparation for evacuation",
      description: "The car can be your salvation. Prepare it in advance.",
      conditions: { has_car: ["car_yes"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 hours",
      yield_estimate: "Ready vehicle",
      tags: ["vehicle", "preparation", "evacuation"],
      steps: [
        "Check fuel level — fill the tank full.",
        "Check tire pressure and spare tire availability.",
        "Put in the car: water, food, first aid kit, blanket, flashlight, tools.",
        "Charge your phone and power bank from the cigarette lighter.",
        "Check wipers, headlights, brake lights.",
        "Prepare a navigator or map of routes.",
        "Put copies of documents (passport, insurance, license) in the glove box.",
        "If you have children — install a child seat.",
        "Check that the trunk is not overloaded — space is needed for items."
      ],
      warnings: [
        "DON'T leave without a plan — know where you're going.",
        "DON'T overload the car — it reduces maneuverability.",
        "DON'T forget about a spare canister of water and fuel."
      ]
    },

    // ============================================================
    // 6. OFFLINE COMMUNICATION PREPARATION
    // ============================================================
    {
      id: "prep_offline_communication",
      title: "📡 Preparation for communication loss",
      description: "If communication is lost, you need alternative ways to communicate.",
      conditions: { comms_prep: ["comms_partial", "comms_no"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–2 hours",
      yield_estimate: "Offline communication",
      tags: ["offline", "communication", "preparation"],
      steps: [
        "Save contacts of loved ones on paper in advance (in the emergency bag).",
        "Agree on a meeting point in case communication is lost.",
        "If you have a radio — check its operation and battery charge.",
        "Write a message with instructions in advance and save it on your phone.",
        "If communication is lost — don't panic, follow the plan.",
        "Use messengers with offline mode (messages will be delivered later).",
        "If possible — use a satellite phone or satellite tracker."
      ],
      warnings: [
        "DON'T rely only on mobile communication — it may not work.",
        "DON'T waste phone battery on calls — save for emergencies.",
        "DON'T forget about paper copies of documents and maps."
      ]
    },

    // ============================================================
    // 7. NEIGHBORS PREPARATION
    // ============================================================
    {
      id: "prep_neighbors",
      title: "🏘️ Neighbors preparation — shared safety",
      description: "Neighbors are your first line of defense in an emergency.",
      conditions: { shelter_prep: ["shelter_partial", "shelter_no"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Coordinated neighbors",
      tags: ["neighbors", "community", "preparation"],
      steps: [
        "Talk to neighbors about the possible threat and action plan.",
        "Create a shared chat for emergency messages.",
        "Identify who has a basement or bomb shelter — and agree on access.",
        "Make a list of neighbors who need help (elderly, disabled).",
        "Discuss who and how will alert others to danger.",
        "Agree on mutual assistance: who can share water, food, medicine.",
        "Conduct a drill — check how quickly neighbors gather."
      ],
      warnings: [
        "DON'T ignore neighbors — they may become your saviors.",
        "DON'T create panic — discuss calmly and constructively.",
        "DON'T forget about neighbors' pets — they also need help."
      ]
    },

    // ============================================================
    // 8. INFORMATION PREPARATION
    // ============================================================
    {
      id: "prep_information",
      title: "📰 Information preparation — sources and filtering",
      description: "In an emergency, it's important to get verified information.",
      conditions: { documents_ready: ["docs_ready", "docs_partial", "docs_no"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Access to verified information",
      tags: ["information", "sources", "preparation"],
      steps: [
        "Save official channels in your phone: EMERCOM, local administration, police.",
        "Subscribe to emergency alerts (SMS notifications, EMERCOM app).",
        "Check if there are working radios in your building.",
        "Agree with neighbors on quick notification.",
        "Don't trust unverified sources — check through official channels.",
        "Remember the number 112 — it works even with no money on your account.",
        "When receiving information — act, but without panic."
      ],
      warnings: [
        "DON'T believe fakes — verify information through official sources.",
        "DON'T spread unverified information — it creates panic.",
        "DON'T ignore official warnings — they are based on intelligence."
      ]
    },

    // ============================================================
    // 9. FAMILY PLAN
    // ============================================================
    {
      id: "prep_family_plan",
      title: "👨‍👩‍👧‍👦 Family action plan",
      description: "Discuss and write down an action plan for the whole family.",
      conditions: { comms_prep: ["comms_no", "comms_partial"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 hour",
      yield_estimate: "Family plan",
      tags: ["family_plan", "communication", "preparation"],
      steps: [
        "Gather the whole family and discuss possible scenarios.",
        "Define two meeting points: near and far.",
        "Assign responsibility for documents, children, elderly.",
        "Establish code words for different situations.",
        "Save a shared chat on everyone's phones.",
        "Agree on communication procedure if someone gets lost.",
        "Run a drill — go through the evacuation route."
      ],
      warnings: [
        "DON'T postpone discussing the plan 'for later'.",
        "DON'T forget about pets.",
        "DON'T think 'it won't happen' — better to be prepared."
      ]
    },

    // ============================================================
    // 10. EVACUATION ROUTE
    // ============================================================
    {
      id: "prep_evacuation_route",
      title: "🗺️ Evacuation route preparation",
      description: "Think through routes and alternatives in advance.",
      conditions: { route_prep: ["route_no", "route_partial"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 hours",
      yield_estimate: "Route ready",
      tags: ["evacuation_route", "map", "preparation"],
      steps: [
        "Find the nearest safe place: bomb shelter, basement, underground parking.",
        "Mark 3 routes on the map: main, backup, and emergency (walking).",
        "Mark points on the map: water sources, pharmacies, stores, police stations.",
        "Check if routes are blocked (construction, fences, renovations).",
        "If you have a car — fill it up and check its technical condition.",
        "Save the map on your phone and a paper copy in the emergency bag.",
        "Tell all family members about the route."
      ],
      warnings: [
        "DON'T use only one route — it may be blocked.",
        "DON'T forget about walking routes — you can't always drive.",
        "DON'T rely only on GPS — paper maps don't run out of battery."
      ]
    },

    // ============================================================
    // 11. SHELTER EQUIPMENT
    // ============================================================
    {
      id: "prep_shelter_equipment",
      title: "🛡️ Shelter equipment",
      description: "How to prepare a shelter for long-term stay.",
      conditions: { shelter_prep: ["shelter_ready"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–4 hours",
      yield_estimate: "Equipped shelter",
      tags: ["shelter", "equipment", "preparation"],
      steps: [
        "Check ventilation and lighting in the shelter.",
        "Arrange sleeping areas: mattresses, blankets, pillows.",
        "Prepare water supply (3–5 liters per person per day).",
        "Stock food (canned goods, MREs, cereals) for 7–14 days.",
        "Install a chemical toilet or bucket with a lid.",
        "Prepare a radio receiver (with batteries) for news.",
        "Organize a first aid kit and a supply of chronic medications.",
        "Plan lighting: flashlights, candles, battery-powered lamps.",
        "Stock hygiene supplies: wet wipes, soap, antiseptic."
      ],
      warnings: [
        "DON'T clutter the shelter — there should be room to move.",
        "DON'T forget about safety in the shelter: do not use open flames.",
        "DON'T leave the shelter unattended — assign duty personnel."
      ]
    }
  ]
});