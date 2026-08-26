// modules/drone/data/en/evac-en.js
// === MODULE: DRONE — EVACUATION ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "drone",
    category: "evac",
    version: "2.0.0",
    lang: "en",
    title: "Evacuation",
    description: "How to safely leave a danger zone during an air threat — with children, injured, at night",
    icon: "🏃",
    color: "#ea580c"
  },

  questions: [
    {
      id: "threat_level",
      type: "single",
      text: "What is the threat level?",
      options: [
        { id: "immediate", label: "🔴 Immediate (drone directly above / dropping)", tags: ["immediate"] },
        { id: "approaching", label: "🟠 Approaching (drone moving towards you)", tags: ["approaching"] },
        { id: "far", label: "🟡 Far away (threat not immediate, time available)", tags: ["far"] }
      ]
    },
    {
      id: "location_evac",
      type: "single",
      text: "Where are you?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "building", label: "🏢 In a building (multi-storey, office)", tags: ["building"] },
        { id: "basement", label: "🏚️ In a basement / shelter", tags: ["basement"] },
        { id: "street_evac", label: "🚶 Outside", tags: ["street_evac"] },
        { id: "vehicle", label: "🚗 In a vehicle / car", tags: ["vehicle"] }
      ]
    },
    {
      id: "time_day_night",
      type: "single",
      text: "What time of day is it?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "day", label: "☀️ Daytime (good visibility)", tags: ["day"] },
        { id: "night", label: "🌙 Nighttime (limited visibility)", tags: ["night"] }
      ]
    },
    {
      id: "shelter_distance",
      type: "single",
      text: "How far is the nearest shelter?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "near", label: "📏 Nearby (under 50 m)", tags: ["shelter_near"] },
        { id: "medium_dist", label: "📏 Medium (50–200 m)", tags: ["shelter_medium"] },
        { id: "far_dist", label: "📏 Far (over 200 m)", tags: ["shelter_far"] }
      ]
    },
    {
      id: "evac_route",
      type: "single",
      text: "Do you know the route to safety?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "known", label: "✅ Yes, I know the route", tags: ["route_known"] },
        { id: "partial", label: "❓ Approximately, not exactly", tags: ["route_partial"] },
        { id: "unknown", label: "❌ No, I don't know", tags: ["route_unknown"] }
      ]
    },
    {
      id: "people_evac",
      type: "single",
      text: "Is there anyone with you who needs help?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "alone_evac", label: "👤 I'm alone", tags: ["alone_evac"] },
        { id: "family_evac", label: "👨‍👩‍👧‍👦 With family (children, elderly)", tags: ["family_evac"] },
        { id: "children_only", label: "🧒 Only with children", tags: ["children_only"] },
        { id: "disabled", label: "♿ With disabled persons", tags: ["disabled"] },
        { id: "injured", label: "🩹 With injured persons", tags: ["injured"] },
        { id: "large_group", label: "👥 Large group (5+ people)", tags: ["large_group"] }
      ]
    },
    {
      id: "has_injured",
      type: "single",
      text: "Are there injured persons who cannot move independently?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "injured_yes", label: "✅ Yes, there are injured", tags: ["injured_yes"] },
        { id: "injured_no", label: "❌ No, everyone is healthy", tags: ["injured_no"] },
        { id: "injured_unknown", label: "❓ Don't know / not sure", tags: ["injured_unknown"] }
      ]
    },
    {
      id: "has_vehicle",
      type: "single",
      text: "Do you have access to a vehicle?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "vehicle_yes", label: "✅ Yes, I have a car / transport", tags: ["vehicle_yes"] },
        { id: "vehicle_no", label: "❌ No, only on foot", tags: ["vehicle_no"] },
        { id: "vehicle_unknown", label: "❓ Don't know", tags: ["vehicle_unknown"] }
      ]
    },
    {
      id: "group_size",
      type: "single",
      text: "How many people are in your group?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "alone", label: "1️⃣ One person", tags: ["alone_size"] },
        { id: "small_group", label: "2️⃣ 2–4 people", tags: ["small_group"] },
        { id: "large_group", label: "3️⃣ 5 or more", tags: ["large_group_size"] }
      ]
    },
    {
      id: "bag",
      type: "single",
      text: "What are you ready to take with you?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "essentials", label: "📄 Documents, phone, water", tags: ["essentials"] },
        { id: "bag_ready", label: "🎒 Go bag (prepared in advance)", tags: ["bag_ready"] },
        { id: "nothing_evac", label: "❌ Nothing, just myself", tags: ["nothing_evac"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. IMMEDIATE EVACUATION
    // ============================================================
    {
      id: "evac_immediate",
      title: "🔴 Immediate evacuation under direct threat",
      description: "If the drone is directly above you or about to attack — leave the area immediately.",
      conditions: { threat_level: ["immediate"], location_evac: ["street_evac", "building", "vehicle"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Safety",
      tags: ["immediate", "evacuation", "emergency"],
      steps: [
        "IMMEDIATELY determine the direction of the threat and move perpendicular or toward shelter.",
        "Don't run in a straight line — use zigzag, cover, drop when approached.",
        "If in a building — leave through an emergency exit, into the basement or shelter.",
        "If outside — look for the nearest building, ditch, concrete blocks.",
        "If in a vehicle — leave it immediately and run to shelter (the car is a target).",
        "Help children, elderly, injured, but don't risk your life unnecessarily.",
        "After taking cover — notify your loved ones of your location.",
        "Follow emergency services instructions."
      ],
      warnings: [
        "DON'T stop for photos or video — it's dangerous.",
        "DON'T go back for belongings — life is more important.",
        "DON'T run toward the drone — only toward shelter."
      ]
    },

    // ============================================================
    // 2. EVACUATION WITH CHILDREN
    // ============================================================
    {
      id: "evac_with_children",
      title: "🧒 Evacuation with children — safety and specifics",
      description: "Children need special protection and attention. Act calmly and decisively.",
      conditions: { threat_level: ["immediate", "approaching", "far"], people_evac: ["children_only", "family_evac"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Varies",
      yield_estimate: "Children's safety",
      tags: ["children", "evacuation", "family"],
      steps: [
        "Speak calmly to children, don't panic. Children copy your behavior.",
        "Hold small children in your arms or by the hand. Don't let them go.",
        "Explain that you're going to a safe place, not 'hiding'.",
        "If time allows — dress children in bright colors (to be visible).",
        "Move quickly but don't run — children may fall.",
        "If the drone is close — cover children with your body, drop to the ground together.",
        "After shelter — count the children, make sure everyone is present."
      ],
      warnings: [
        "DON'T leave children unattended for a second.",
        "DON'T run with children across open terrain — find shelter.",
        "DON'T panic in front of children — it scares them."
      ]
    },

    // ============================================================
    // 3. EVACUATION FROM BASEMENT
    // ============================================================
    {
      id: "evac_from_basement",
      title: "🏚️ Evacuation from basement / shelter",
      description: "If you took cover in a basement and the threat has passed — exit correctly and safely.",
      conditions: { threat_level: ["far"], location_evac: ["basement"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–5 minutes",
      yield_estimate: "Safe exit",
      tags: ["basement", "shelter", "exit"],
      steps: [
        "Wait for the official all-clear. Don't exit by sound — there may be aftershocks.",
        "Check the exit: no damage, debris, or smoke.",
        "Exit in an organized manner, without panic. Help elderly and children.",
        "If the exit is blocked — use an alternate exit if available.",
        "If there is only one exit — exit one by one, without crowding.",
        "After exiting — move away from the building to avoid collapse.",
        "Report to rescuers if anyone is still in the basement."
      ],
      warnings: [
        "DON'T exit before the all-clear — it's dangerous.",
        "DON'T create panic when exiting — it can cause a stampede.",
        "DON'T return to the basement for forgotten items."
      ]
    },

    // ============================================================
    // 4. EVACUATION AT NIGHT
    // ============================================================
    {
      id: "evac_night",
      title: "🌙 Night evacuation — specifics and safety",
      description: "Night evacuation is more difficult. Use minimal lighting and move carefully.",
      conditions: { threat_level: ["immediate", "approaching", "far"], time_day_night: ["night"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Varies",
      yield_estimate: "Safe night evacuation",
      tags: ["night", "evacuation", "darkness"],
      steps: [
        "DON'T use bright flashlights — it gives you away. Use red light (invisible from the air).",
        "Move along the shadow side of the street, along buildings, under canopies.",
        "At night, drones see with thermal imaging. Shelter behind concrete walls, rocks.",
        "If in a vehicle — turn off headlights and move at minimum speed.",
        "If on foot — use night landmarks: illuminated signs, windows.",
        "Notify loved ones that you're moving at night and your route.",
        "Be careful: visibility is limited at night, you may trip or hit obstacles."
      ],
      warnings: [
        "DON'T use white light — it's visible from the air.",
        "DON'T walk in open areas — you'll be visible.",
        "DON'T turn off all light sources — you may injure yourself."
      ]
    },

    // ============================================================
    // 5. EVACUATION WITH INJURED
    // ============================================================
    {
      id: "evac_with_injured",
      title: "🩹 Evacuation with injured — first aid and carrying",
      description: "The injured cannot move independently. Act quickly and safely.",
      conditions: { threat_level: ["immediate", "approaching", "far"], has_injured: ["injured_yes"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Varies",
      yield_estimate: "Injured person saved",
      tags: ["injured", "first_aid", "evacuation"],
      steps: [
        "Stop bleeding: apply a tourniquet above the wound, tighten. Note the time applied.",
        "If the injured is conscious — calm them, explain you'll move them.",
        "Use improvised means for carrying: blanket, sheet, stick with cloth.",
        "If the injured cannot walk — carry them in your arms, on your back, or on improvised stretchers.",
        "Move to shelter in short dashes, stopping to rest.",
        "On drop — cover the injured with your body, drop to the ground.",
        "In shelter — examine the wound, treat with antiseptic, apply a clean bandage."
      ],
      warnings: [
        "DON'T move the injured with spinal injury — only on rigid stretchers.",
        "DON'T remove the tourniquet until medics arrive (even if bleeding).",
        "DON'T abandon the injured — it's your responsibility."
      ]
    },

    // ============================================================
    // 6. EVACUATION OF LARGE GROUP
    // ============================================================
    {
      id: "evac_large_group",
      title: "👥 Large group evacuation — organization and safety",
      description: "A large group requires coordination. Appoint a leader, assign roles.",
      conditions: { threat_level: ["immediate", "approaching", "far"], people_evac: ["large_group"], group_size: ["large_group_size"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Varies",
      yield_estimate: "Organized group evacuation",
      tags: ["group", "large", "organization"],
      steps: [
        "Appoint a leader — they make decisions and coordinate actions.",
        "Assign roles: one leads the group, one closes the group, one helps children/elderly.",
        "Determine the evacuation route and inform all participants.",
        "Move compactly, don't stretch out — this helps evade drones.",
        "On drop — all drop to the ground simultaneously (command: 'Down!').",
        "In shelter — count everyone, check for injured.",
        "Notify loved ones of the group's location."
      ],
      warnings: [
        "DON'T create panic in the group — it disorganizes.",
        "DON'T split up unnecessarily — you'll lose each other.",
        "DON'T all run together across open terrain — you're a target."
      ]
    },

    // ============================================================
    // 7. EVACUATION IN OPEN FIELD
    // ============================================================
    {
      id: "evac_open_field",
      title: "🚶 Open field evacuation — how to survive",
      description: "Open terrain is the most dangerous place. Move fast and use cover.",
      conditions: { threat_level: ["immediate", "approaching", "far"], location_evac: ["street_evac"], shelter_distance: ["shelter_far"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Varies",
      yield_estimate: "Open field crossed",
      tags: ["open_field", "survival", "evacuation"],
      steps: [
        "If no cover — move zigzag, changing direction every 5–10 seconds.",
        "Use any terrain: ditches, ravines, bushes, rocks — they provide shadow.",
        "If the drone approaches — drop to the ground, freeze, cover with light fabric.",
        "Move in short dashes (30–50 meters), stopping to observe.",
        "If possible — get into a ditch or ravine — they hide from thermal imaging.",
        "Don't run in a straight line — the drone tracks movement.",
        "After crossing the open area — immediately enter cover."
      ],
      warnings: [
        "DON'T run in a straight line — you're predictable.",
        "DON'T stop in open areas — you're a target.",
        "DON'T use a phone in open terrain — it gives you away."
      ]
    },

    // ============================================================
    // 8. VEHICLE EVACUATION
    // ============================================================
    {
      id: "evac_vehicle",
      title: "🚗 Vehicle / car evacuation",
      description: "A car is a drone target. Leave it immediately when threatened.",
      conditions: { threat_level: ["immediate", "approaching"], location_evac: ["vehicle"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Safety",
      tags: ["vehicle", "car", "evacuation"],
      steps: [
        "DON'T stay in the vehicle — it's a drone target.",
        "Exit the car, move 30–50 meters to the side toward cover.",
        "Don't start the engine — sound attracts attention.",
        "If stuck in traffic — leave the car and move on foot.",
        "Take your phone and documents (if accessible).",
        "Head to the nearest building, ditch, or other cover.",
        "Don't return to the vehicle until the all-clear."
      ],
      warnings: [
        "DON'T hide under the car — it may catch fire or explode.",
        "DON'T take heavy items — they slow you down.",
        "DON'T stop to get items from the trunk."
      ]
    },

    // ============================================================
    // 9. BUILDING EVACUATION
    // ============================================================
    {
      id: "evac_building",
      title: "🏢 Building evacuation",
      description: "If you're in a building, know the rules for safe exit.",
      conditions: { threat_level: ["immediate", "approaching"], location_evac: ["building"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–5 minutes",
      yield_estimate: "Safe exit",
      tags: ["building", "evacuation", "escape"],
      steps: [
        "Exit through the emergency exit, not the main one (it may be blocked).",
        "If the drone is already close — go down to the basement or shelter.",
        "Don't use elevators — use stairs.",
        "Close doors behind you to slow the spread of danger.",
        "If on upper floors — descend the stairs, holding the railing.",
        "Help children, elderly, and disabled persons."
      ],
      warnings: [
        "DON'T run down the stairs recklessly — you may fall.",
        "DON'T stand near windows during evacuation.",
        "DON'T return for forgotten items."
      ]
    },

    // ============================================================
    // 10. ROUTE UNKNOWN
    // ============================================================
    {
      id: "evac_route_unknown",
      title: "❌ Don't know the route to safety — what to do",
      description: "If you don't know where to go, follow these rules.",
      conditions: { threat_level: ["immediate", "approaching", "far"], evac_route: ["route_unknown"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Direction to safety",
      tags: ["unknown_route", "guidance"],
      steps: [
        "Stop and look around. Identify the nearest buildings, underground passages, dense vegetation.",
        "If you see a drone — move in the opposite direction.",
        "Use maps on your phone (even without internet — Google Maps caches).",
        "Ask passersby where the nearest shelter is.",
        "If nothing helps — move toward denser buildings (buildings = cover).",
        "Mark landmarks along the way so you don't get lost.",
        "Notify loved ones of your direction."
      ],
      warnings: [
        "DON'T panic — panic clouds thinking.",
        "DON'T walk toward the drone or engine sound.",
        "DON'T stop in open areas."
      ]
    },

    // ============================================================
    // 11. NOTHING TAKEN
    // ============================================================
    {
      id: "evac_nothing",
      title: "❌ Took nothing with you — what's important to remember",
      description: "If you have no belongings, that's not a problem. Your life is what matters.",
      conditions: { bag: ["nothing_evac"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "immediately",
      yield_estimate: "Life saved",
      tags: ["nothing", "survival"],
      steps: [
        "The main thing is you and your life. Things can be replaced, life cannot.",
        "If you have time — take at least a phone and documents.",
        "In shelter: water, food, communication are available at evacuation points.",
        "Notify loved ones that you're safe and where you are.",
        "After evacuation — go to a help point for assistance."
      ],
      warnings: [
        "DON'T return for belongings if it's dangerous.",
        "DON'T panic about lost items — it's fixable.",
        "DON'T think you're left with nothing — help will come."
      ]
    },

    // ============================================================
    // 12. EVACUATION OF DISABLED PERSONS
    // ============================================================
    {
      id: "evac_disabled",
      title: "♿ Evacuation of disabled persons",
      description: "Special rules for assisting mobility-impaired people.",
      conditions: { threat_level: ["immediate", "approaching", "far"], people_evac: ["disabled"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Varies",
      yield_estimate: "Safety",
      tags: ["disabled", "assistance", "evacuation"],
      steps: [
        "If the person is in a wheelchair — push it toward the exit.",
        "If the person cannot walk — carry them, use a blanket or chair for carrying.",
        "Inform rescuers about disabled persons needing help.",
        "If the elevator works — use it for mobility-impaired (only if safe).",
        "Don't leave the person alone — they may not cope alone.",
        "In shelter — help them find a safe place."
      ],
      warnings: [
        "DON'T leave disabled persons unattended.",
        "DON'T use elevators unnecessarily — they may shut down.",
        "DON'T overburden yourself — call others for help."
      ]
    },

    // ============================================================
    // 13. THREAT APPROACHING — PLANNED EVACUATION
    // ============================================================
    {
      id: "evac_approaching",
      title: "🟠 Threat approaching — planned evacuation",
      description: "You have 1–3 minutes to leave the danger zone.",
      conditions: { threat_level: ["approaching"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Safety",
      tags: ["approaching", "planned", "evacuation"],
      steps: [
        "Assess the direction of the threat and choose an evacuation route (away from the drone).",
        "Take documents, phone, water, first aid kit (if you have a go bag).",
        "Close windows and doors, turn off gas and electricity (if time allows).",
        "Warn neighbors and loved ones about the need to evacuate.",
        "Move calmly, without panic, helping those in need.",
        "If possible — use underground passages, parking garages.",
        "Contact loved ones and report your route."
      ],
      warnings: [
        "DON'T use elevators — electricity may be cut.",
        "DON'T linger on stairwells.",
        "DON'T forget about elderly relatives."
      ]
    },

    // ============================================================
    // 14. THREAT FAR — EVACUATION PREPARATION
    // ============================================================
    {
      id: "evac_far",
      title: "🟡 Threat far — preparing for evacuation",
      description: "You have time (5+ minutes) for preparation and planned evacuation.",
      conditions: { threat_level: ["far"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Preparedness and evacuation",
      tags: ["far", "preparation", "evacuation"],
      steps: [
        "Gather documents, money, medicine, chargers, water.",
        "Close windows, doors, turn off gas and electricity.",
        "Check the evacuation route: nearest basement, shelter.",
        "Warn neighbors and loved ones of evacuation plans.",
        "If you have a car — prepare it, but don't leave without necessity.",
        "Monitor official messages from authorities.",
        "When receiving an evacuation order — act quickly, but without panic."
      ],
      warnings: [
        "DON'T delay preparations until the last moment.",
        "DON'T drive in unknown directions — use verified routes.",
        "DON'T take extra items — only essentials."
      ]
    }
  ]
});