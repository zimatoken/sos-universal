// modules/drone/data/en/evac-en.js
// === MODULE: DRONES — EVACUATION ===

const droneEvacDataEn = {
  category: "evac",
  icon: "🏃",
  title: "🏃 Evacuation",
  description: "How to safely leave a danger zone during an aerial threat",

  questions: [
    {
      id: "threat_level",
      type: "single",
      text: "What is the threat level?",
      options: [
        { id: "immediate", label: "🔴 Immediate (drone directly above you)", tags: ["immediate"] },
        { id: "approaching", label: "🟠 Approaching (drone moving toward you)", tags: ["approaching"] },
        { id: "far", label: "🟡 Far (threat not immediate)", tags: ["far"] }
      ]
    },
    {
      id: "location_evac",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "building", label: "🏢 In a building", tags: ["building"] },
        { id: "street_evac", label: "🚶 On the street", tags: ["street_evac"] },
        { id: "vehicle", label: "🚗 In a vehicle / car", tags: ["vehicle"] }
      ]
    },
    {
      id: "evac_route",
      type: "single",
      text: "Do you know the way to safety?",
      options: [
        { id: "known", label: "✅ Yes, I know the route", tags: ["known"] },
        { id: "partial", label: "❓ Roughly, but not sure", tags: ["partial"] },
        { id: "unknown", label: "❌ No, I don't know", tags: ["unknown"] }
      ]
    },
    {
      id: "people_evac",
      type: "single",
      text: "Is there anyone with you who needs help?",
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
      options: [
        { id: "essentials", label: "📄 Documents, phone, water", tags: ["essentials"] },
        { id: "bag_ready", label: "🎒 Emergency bag (pre-packed)", tags: ["bag_ready"] },
        { id: "nothing_evac", label: "❌ Nothing, just myself", tags: ["nothing_evac"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. IMMEDIATE EVACUATION =====
    {
      id: "evac_immediate",
      title: "🔴 Immediate evacuation under direct threat",
      description: "If a drone is above you or about to strike — leave the area immediately.",
      conditions: { threat_level: ["immediate"], location_evac: ["street_evac", "building", "vehicle"] },
      priority: 5,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["immediate", "evacuation", "emergency"],
      steps: [
        "IMMEDIATELY assess the threat direction and move perpendicular or toward shelter.",
        "Don't run in a straight line — use zigzag movement and cover.",
        "If in a building — leave through a fire exit, go to basement or bomb shelter.",
        "If on the street — find the nearest building, ditch, concrete blocks.",
        "If in a car — leave it immediately and run to shelter (car is a target).",
        "Help children, elderly, injured, but don't put yourself in danger.",
        "After reaching safety — inform family of your location.",
        "Follow emergency services instructions."
      ],
      warnings: [
        "DO NOT stop for photos or videos — it's dangerous.",
        "DO NOT go back for belongings — life is more important.",
        "DO NOT run toward the drone — only to shelter."
      ],
      tips: [
        "Know the route to the nearest shelter in advance.",
        "Carry a whistle — it can attract rescuers' attention.",
        "Keep your phone handy for quick 112 call."
      ]
    },

    // ===== 2. THREAT APPROACHING =====
    {
      id: "evac_approaching",
      title: "🟠 Threat approaching — planned evacuation",
      description: "You have 1-3 minutes to leave the danger zone.",
      conditions: { threat_level: ["approaching"] },
      priority: 4,
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Safety",
      tags: ["approaching", "planned", "evacuation"],
      steps: [
        "Assess threat direction and choose evacuation route (away from drone).",
        "Take documents, phone, water, first aid kit (if you have an emergency bag).",
        "Close windows and doors, turn off gas and electricity (if time permits).",
        "Warn neighbors and family about the need to evacuate.",
        "Move calmly, without panic, helping those in need.",
        "If possible — use underground passages, parking lots, shelters.",
        "Contact family and report your route."
      ],
      warnings: [
        "DO NOT use elevators — power may go out.",
        "DO NOT linger on stairwells — they can be dangerous.",
        "DO NOT forget about elderly relatives — help them."
      ],
      tips: [
        "Keep a spare phone or power bank with you.",
        "Download an offline map of the area — useful if there's no signal.",
        "Agree with family on a meeting point outside the danger zone."
      ]
    },

    // ===== 3. THREAT FAR AWAY =====
    {
      id: "evac_far",
      title: "🟡 Threat far away — preparing for evacuation",
      description: "You have time (5+ minutes) to prepare and evacuate.",
      conditions: { threat_level: ["far"] },
      priority: 3,
      reliability: "high",
      time_estimate: "5-15 minutes",
      yield_estimate: "Preparation and evacuation",
      tags: ["far", "preparation", "evacuation"],
      steps: [
        "Gather documents, money, medicine, chargers, water.",
        "Close windows, doors, turn off gas and electricity.",
        "Check evacuation route: nearest basement, bomb shelter, safe place.",
        "Warn neighbors and family about evacuation plans.",
        "If you have a car — prepare it, but don't drive without necessity.",
        "Follow official announcements from authorities.",
        "When evacuation command is given — act quickly but without panic."
      ],
      warnings: [
        "DO NOT delay packing until the last moment — increases risk.",
        "DO NOT drive in unknown directions — use verified routes.",
        "DO NOT take unnecessary items — only essentials."
      ],
      tips: [
        "Keep your emergency bag packed and by the exit.",
        "Make a checklist of important items in advance — don't forget anything.",
        "Check your car's fuel level and phone battery."
      ]
    },

    // ===== 4. EVACUATION FROM BUILDING =====
    {
      id: "evac_building",
      title: "🏢 Evacuation from a building",
      description: "If you're in a building, know the rules for safe exit.",
      conditions: { location_evac: ["building"] },
      priority: 3,
      reliability: "high",
      time_estimate: "2-5 minutes",
      yield_estimate: "Safe exit",
      tags: ["building", "evacuation", "escape"],
      steps: [
        "Exit through a fire exit, not the main entrance (may be blocked).",
        "If the drone is nearby — go down to the basement or bomb shelter.",
        "Don't use elevators — use stairs.",
        "Close doors behind you to slow down danger spread.",
        "If on upper floors — go down stairs, holding the railing.",
        "Help children, elderly, and people with disabilities."
      ],
      warnings: [
        "DO NOT run down stairs recklessly — you may fall and get injured.",
        "DO NOT stand near windows during evacuation.",
        "DO NOT go back for forgotten items."
      ],
      tips: [
        "Study the building layout in advance — know all exits.",
        "Keep a flashlight in case of power outage.",
        "If in a high-rise — don't use elevators, only stairs."
      ]
    },

    // ===== 5. EVACUATION ON THE STREET =====
    {
      id: "evac_street",
      title: "🚶 Evacuation on the street",
      description: "If you're on the street, move safely and quickly.",
      conditions: { location_evac: ["street_evac"] },
      priority: 4,
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Safe movement",
      tags: ["street", "evacuation", "movement"],
      steps: [
        "Assess threat direction and move perpendicular or toward shelter.",
        "If there is shelter (building, ditch, concrete blocks) — use it.",
        "Don't run in a straight line if no cover — move zigzag.",
        "If the drone starts descending — drop to the ground and cover your head.",
        "After an explosion — wait for debris to fall, then continue moving.",
        "If possible — contact family and report your route."
      ],
      warnings: [
        "DO NOT run toward the drone — only to shelter.",
        "DO NOT stand in open areas — increases risk.",
        "DO NOT use your phone while moving — it's distracting."
      ],
      tips: [
        "Study the area map — mark all possible shelters.",
        "Wear shoes you can run in.",
        "If with children — hold their hand or carry them."
      ]
    },

    // ===== 6. EVACUATION FROM VEHICLE =====
    {
      id: "evac_vehicle",
      title: "🚗 Evacuation from a vehicle / car",
      description: "A car is a target for drones. Leave it immediately when threatened.",
      conditions: { location_evac: ["vehicle"] },
      priority: 4,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["vehicle", "car", "evacuation"],
      steps: [
        "DO NOT stay in the car — it's a target for drones.",
        "Exit the car, move 30–50 meters toward shelter.",
        "Don't start the engine — sound attracts attention.",
        "If stuck in traffic — leave the car and move on foot.",
        "Take your phone and documents (if within reach).",
        "Head to the nearest building, ditch, or other shelter.",
        "Don't return to the car until the all-clear."
      ],
      warnings: [
        "DO NOT hide under the car — it may catch fire or explode.",
        "DO NOT take heavy items — they slow you down.",
        "DO NOT stop to get items from the trunk."
      ],
      tips: [
        "Keep documents and phone in an easily accessible place in the car.",
        "Know where shelters are on your route in advance.",
        "If on public transport — ask the driver to open the doors."
      ]
    },

    // ===== 7. EVACUATION OF PEOPLE WITH DISABILITIES =====
    {
      id: "evac_disabled",
      title: "♿ Evacuation of people with disabilities",
      description: "Special rules for helping people with limited mobility.",
      conditions: { people_evac: ["disabled"] },
      priority: 5,
      reliability: "high",
      time_estimate: "as needed",
      yield_estimate: "Safety",
      tags: ["disabled", "assistance", "evacuation"],
      steps: [
        "If the person is in a wheelchair — push them to the exit, don't leave them.",
        "If the person can't walk — carry them, use a blanket or chair for transport.",
        "Inform rescuers about people with disabilities who need help.",
        "If the elevator works — use it for people with limited mobility (only if safe).",
        "Don't leave the person alone — they may not manage on their own.",
        "In shelter — help them find a safe spot."
      ],
      warnings: [
        "DO NOT leave people with disabilities unattended.",
        "DO NOT use elevators unnecessarily — they may fail.",
        "DO NOT overburden yourself — call others for help."
      ],
      tips: [
        "If time permits — secure the wheelchair so it doesn't roll.",
        "Take the person's medication and documents.",
        "Inform neighbors of the need for help — together is faster."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneEvacDataEn = droneEvacDataEn;