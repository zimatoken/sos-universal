// modules/drone/data/en/evac-en.js
// === MODULE: DRONES — EVACUATION ===

const droneEvacDataEn = {
  category: "evac",
  title: "🏃 Evacuation",
  description: "How to safely leave a danger zone during an aerial threat",

  questions: [
    {
      id: "threat_level",
      type: "single",
      text: "What is the threat level?",
      options: [
        { id: "immediate", label: "🔴 Immediate (drone directly overhead)", tags: ["immediate"] },
        { id: "approaching", label: "🟠 Approaching (drone moving toward you)", tags: ["approaching"] },
        { id: "far", label: "🟡 Far (no immediate threat)", tags: ["far"] }
      ]
    },
    {
      id: "location_evac",
      type: "single",
      text: "Where are you?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "building", label: "🏢 In a building", tags: ["building"] },
        { id: "street_evac", label: "🚶 On the street", tags: ["street_evac"] },
        { id: "vehicle", label: "🚗 In a vehicle / car", tags: ["vehicle"] }
      ]
    },
    {
      id: "evac_route",
      type: "single",
      text: "Do you know the route to safety?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "known", label: "✅ Yes, I know the route", tags: ["known"] },
        { id: "partial", label: "❓ Roughly, but not exactly", tags: ["partial"] },
        { id: "unknown", label: "❌ No, I don't know", tags: ["unknown"] }
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
        { id: "disabled", label: "♿ With people with disabilities", tags: ["disabled"] }
      ]
    },
    {
      id: "bag",
      type: "single",
      text: "What are you ready to take with you?",
      conditions: { threat_level: ["immediate", "approaching", "far"] },
      options: [
        { id: "essentials", label: "📄 Documents, phone, water", tags: ["essentials"] },
        { id: "bag_ready", label: "🎒 Go-bag (pre-packed)", tags: ["bag_ready"] },
        { id: "nothing_evac", label: "❌ Nothing, just myself", tags: ["nothing_evac"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. IMMEDIATE EVACUATION =====
    {
      id: "evac_immediate",
      title: "🔴 Immediate evacuation under direct threat",
      description: "If the drone is directly overhead or about to strike — evacuate immediately.",
      conditions: { threat_level: ["immediate"], location_evac: ["street_evac", "building", "vehicle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["immediate", "evacuation", "emergency"],
      steps: [
        "IMMEDIATELY determine the threat direction and move perpendicular to it or toward shelter.",
        "Don't run in a straight line — use zigzag movements, cover, drop down as needed.",
        "If you're in a building — leave via an emergency exit, go to the basement or bomb shelter.",
        "If you're on the street — look for the nearest building, ditch, or concrete barriers.",
        "If you're in a car — immediately exit and run to shelter (the car is a target).",
        "Help children, the elderly, and the injured, but don't put yourself at risk.",
        "Once at a safe distance — inform loved ones of your location.",
        "Follow emergency services instructions."
      ],
      warnings: [
        "DO NOT stop to take photos or videos — it's dangerous.",
        "DO NOT go back for belongings — life is more important.",
        "DO NOT run toward the drone — only seek shelter."
      ]
    },

    // ===== 2. THREAT APPROACHING =====
    {
      id: "evac_approaching",
      title: "🟠 Threat approaching — planned evacuation",
      description: "You have 1-3 minutes to leave the danger zone.",
      conditions: { threat_level: ["approaching"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Safety",
      tags: ["approaching", "planned", "evacuation"],
      steps: [
        "Assess the threat direction and choose an evacuation route (away from the drone).",
        "Take documents, phone, water, first aid kit (if you have a go-bag).",
        "Close windows and doors, turn off gas and electricity (if time allows).",
        "Warn neighbors and loved ones about the evacuation.",
        "Move calmly, without panic, helping those in need.",
        "If possible — use underground passages, parking garages, shelters.",
        "Contact loved ones and share your route."
      ],
      warnings: [
        "DO NOT use elevators — power may be cut.",
        "DO NOT linger on stairwells — they can be dangerous.",
        "DO NOT forget about elderly relatives — help them."
      ]
    },

    // ===== 3. THREAT FAR AWAY =====
    {
      id: "evac_far",
      title: "🟡 Threat far away — prepare for evacuation",
      description: "You have time (5+ minutes) to prepare for a planned evacuation.",
      conditions: { threat_level: ["far"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-15 minutes",
      yield_estimate: "Preparation and evacuation",
      tags: ["far", "preparation", "evacuation"],
      steps: [
        "Gather documents, money, medications, chargers, water.",
        "Close windows, doors, turn off gas and electricity.",
        "Check your evacuation route: nearest basement, bomb shelter, safe location.",
        "Warn neighbors and loved ones about evacuation plans.",
        "If you have a car — prepare it, but don't leave unnecessarily.",
        "Monitor official announcements from authorities.",
        "When evacuation is ordered — act quickly but without panic."
      ],
      warnings: [
        "DO NOT delay packing — it increases risk.",
        "DO NOT drive in unknown directions — use verified routes.",
        "DO NOT take extra items — only essentials."
      ]
    },

    // ===== 4. ROUTE UNKNOWN =====
    {
      id: "evac_route_unknown",
      title: "❌ I don't know the route to safety — what to do",
      description: "If you don't know where to go, follow these rules.",
      conditions: { evac_route: ["unknown"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-3 minutes",
      yield_estimate: "Direction to safety",
      tags: ["unknown_route", "guidance"],
      steps: [
        "Stop and look around. Identify nearby buildings, underground passages, dense vegetation.",
        "If you see the drone — move in the opposite direction.",
        "Use maps on your phone (even offline — Google Maps caches data).",
        "Ask passersby where the nearest shelter or bomb shelter is.",
        "If nothing helps — move toward denser urban areas (buildings provide cover).",
        "Mark landmarks along the way to avoid getting lost.",
        "Inform loved ones of your direction."
      ],
      warnings: [
        "DO NOT panic — panic clouds judgment.",
        "DO NOT move toward the drone or engine sound.",
        "DO NOT stop in open areas."
      ]
    },

    // ===== 5. NOTHING TAKEN =====
    {
      id: "evac_nothing",
      title: "❌ I took nothing — what to remember",
      description: "If you have no belongings, don't worry. Your life is what matters.",
      conditions: { bag: ["nothing_evac"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "immediately",
      yield_estimate: "Staying alive",
      tags: ["nothing", "survival"],
      steps: [
        "You and your life are what matters. Belongings can be replaced — life cannot.",
        "If you have time — at least take your phone and documents (ID, money).",
        "At the shelter, you'll receive help: water, food, communication.",
        "Inform loved ones that you're safe and where you are.",
        "After evacuation — go to a help center for assistance."
      ],
      warnings: [
        "DO NOT go back for belongings if it's dangerous.",
        "DO NOT panic about lost items — it's fixable.",
        "DO NOT think you have nothing — help is available."
      ]
    },

    // ===== 6. EVACUATION FROM BUILDING =====
    {
      id: "evac_building",
      title: "🏢 Evacuation from a building",
      description: "If you're in a building, know the rules for safe exit.",
      conditions: { location_evac: ["building"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "2-5 minutes",
      yield_estimate: "Safe exit",
      tags: ["building", "evacuation", "escape"],
      steps: [
        "Exit through the emergency exit, not the main entrance (it may be blocked).",
        "If the drone is close — go to the basement or bomb shelter.",
        "Don't use elevators — use stairs.",
        "Close doors behind you to slow the spread of danger.",
        "If you're on upper floors — go down the stairs, holding the railing.",
        "Help children, the elderly, and people with disabilities."
      ],
      warnings: [
        "DO NOT run down the stairs recklessly — you could fall and get injured.",
        "DO NOT stand near windows during evacuation.",
        "DO NOT go back for forgotten items."
      ]
    },

    // ===== 7. EVACUATION ON THE STREET =====
    {
      id: "evac_street",
      title: "🚶 Evacuation on the street",
      description: "If you're on the street, move safely and quickly.",
      conditions: { location_evac: ["street_evac"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Safe movement",
      tags: ["street", "evacuation", "movement"],
      steps: [
        "Determine the threat direction and move perpendicular or toward shelter.",
        "If there's cover (building, ditch, concrete blocks) — use it.",
        "Don't run in a straight line if there's no cover — move in zigzags.",
        "If the drone starts descending — drop to the ground and cover your head.",
        "After an explosion — wait for debris to fall, then continue moving.",
        "If possible — contact loved ones and share your route."
      ],
      warnings: [
        "DO NOT run toward the drone — only seek shelter.",
        "DO NOT stand in open areas — it increases risk.",
        "DO NOT use your phone while moving — it's distracting."
      ]
    },

    // ===== 8. EVACUATION FROM VEHICLE =====
    {
      id: "evac_vehicle",
      title: "🚗 Evacuation from a vehicle / transport",
      description: "The car is a target for drones. Leave it immediately under threat.",
      conditions: { location_evac: ["vehicle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["vehicle", "car", "evacuation"],
      steps: [
        "DO NOT stay in the car — it's a target for drones.",
        "Exit the car, move 30–50 meters toward cover.",
        "Don't start the engine — noise attracts attention.",
        "If you're stuck in traffic — leave the car and move on foot.",
        "Take your phone and documents (if they're within reach).",
        "Head to the nearest building, ditch, or other cover.",
        "Don't return to the car until the all-clear."
      ],
      warnings: [
        "DO NOT hide under the car — it could catch fire or explode.",
        "DO NOT take heavy items — they slow you down.",
        "DO NOT stop to get things from the trunk."
      ]
    },

    // ===== 9. EVACUATION OF PEOPLE WITH DISABILITIES =====
    {
      id: "evac_disabled",
      title: "♿ Evacuation of people with disabilities",
      description: "Special rules for assisting people with limited mobility.",
      conditions: { people_evac: ["disabled"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "varies",
      yield_estimate: "Safety",
      tags: ["disabled", "assistance", "evacuation"],
      steps: [
        "If the person is in a wheelchair — push them to the exit, don't leave them.",
        "If they can't walk — carry them, use a blanket or chair for transport.",
        "Inform rescuers about people with disabilities who need help.",
        "If the elevator is working — use it for those with mobility issues (only if safe).",
        "Don't leave the person alone — they may not manage on their own.",
        "At the shelter, help them find a safe spot."
      ],
      warnings: [
        "DO NOT leave people with disabilities unattended.",
        "DO NOT use elevators unnecessarily — they may fail.",
        "DO NOT overburden yourself — ask others for help."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneEvacDataEn = droneEvacDataEn;
