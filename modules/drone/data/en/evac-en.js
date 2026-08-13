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
        { id: "vehicle", label: "🚗 In a vehicle", tags: ["vehicle"] }
      ]
    },
    {
      id: "evac_route",
      type: "single",
      text: "Do you know the route to safety?",
      options: [
        { id: "known", label: "✅ Yes, I know the route", tags: ["known"] },
        { id: "partial", label: "❓ Approximately, but not sure", tags: ["partial"] },
        { id: "unknown", label: "❌ No, I don't know", tags: ["unknown"] }
      ]
    },
    {
      id: "people_evac",
      type: "single",
      text: "Are you with anyone who needs help?",
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
    {
      id: "evac_immediate",
      title: "🔴 Immediate evacuation during direct threat",
      description: "If the drone is overhead or about to strike — leave the area immediately.",
      conditions: { threat_level: ["immediate"], location_evac: ["street_evac", "building"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["immediate", "evacuation", "emergency"],
      steps: [
        "IMMEDIATELY determine the direction of the threat and move perpendicular or toward shelter.",
        "Don't run in a straight line — use zigzag, cover, drop when approaching.",
        "If in a building — leave through emergency exit, basement, or bomb shelter.",
        "If on the street — find the nearest building, ditch, concrete blocks.",
        "Help children, elderly, wounded, but don't put yourself in danger.",
        "After reaching safety — report your location to loved ones.",
        "Follow instructions from emergency services."
      ],
      warnings: [
        "DO NOT stop to take photos or videos — it's dangerous.",
        "DO NOT go back for belongings — life is more important.",
        "DO NOT run toward the drone — only to shelter."
      ]
    },
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
        "Assess the direction of the threat and choose an evacuation route (away from the drone).",
        "Take documents, phone, water, first aid kit (if you have an emergency bag).",
        "Close windows and doors, turn off gas and electricity (if time allows).",
        "Warn neighbors and loved ones about the need to evacuate.",
        "Move calmly, without panic, helping those in need.",
        "If possible — use underground passages, parking lots, shelters.",
        "Contact loved ones and inform them of your route."
      ],
      warnings: [
        "DO NOT use elevators — power may go out.",
        "DO NOT linger on stairwells — they may be dangerous.",
        "DO NOT forget about elderly relatives — help them."
      ]
    },
    {
      id: "evac_far",
      title: "🟡 Threat far away — preparation for evacuation",
      description: "You have time (5+ minutes) to prepare and evacuate in an organized manner.",
      conditions: { threat_level: ["far"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-15 minutes",
      yield_estimate: "Preparation and evacuation",
      tags: ["far", "preparation", "evacuation"],
      steps: [
        "Gather documents, money, medications, chargers, water.",
        "Close windows, doors, turn off gas and electricity.",
        "Check the evacuation route: nearest basement, bomb shelter, safe place.",
        "Warn neighbors and loved ones about your evacuation plans.",
        "If you have a car — prepare it, but don't drive unless necessary.",
        "Follow official announcements from authorities.",
        "When evacuation is ordered — act quickly but without panic."
      ],
      warnings: [
        "DO NOT delay preparations until the last moment — it increases risk.",
        "DO NOT drive in unknown directions — use verified routes.",
        "DO NOT take unnecessary items — only essentials."
      ]
    },
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
        "Exit through the emergency exit, not the main one (it may be blocked).",
        "If the drone is close — go down to the basement or bomb shelter.",
        "Don't use elevators — use stairs.",
        "Close doors behind you to slow the spread of danger.",
        "If you're on upper floors — go down the stairs, holding the railing.",
        "Help children, elderly, and people with disabilities."
      ],
      warnings: [
        "DO NOT run down stairs headlong — you could fall and get injured.",
        "DO NOT stand at windows during evacuation.",
        "DO NOT go back for forgotten items."
      ]
    },
    {
      id: "evac_street",
      title: "🚶 Evacuation on the street",
      description: "If you're outside, move safely and quickly.",
      conditions: { location_evac: ["street_evac"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Safe movement",
      tags: ["street", "evacuation", "movement"],
      steps: [
        "Determine the direction of the threat and move perpendicular or toward shelter.",
        "If there's cover (building, ditch, concrete blocks) — use it.",
        "Don't run in a straight line if there's no cover — move in a zigzag.",
        "If the drone starts descending — drop to the ground and cover your head.",
        "After the blast — wait for debris to fall, then continue moving.",
        "If possible — contact loved ones and inform them of your route."
      ],
      warnings: [
        "DO NOT run toward the drone — only to shelter.",
        "DO NOT stay in open areas — it increases risk.",
        "DO NOT use your phone while moving — it distracts."
      ]
    },
    {
      id: "evac_disabled",
      title: "♿ Evacuation of people with disabilities",
      description: "Special rules for helping people with limited mobility.",
      conditions: { people_evac: ["disabled"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "as needed",
      yield_estimate: "Safety",
      tags: ["disabled", "assistance", "evacuation"],
      steps: [
        "If in a wheelchair — push to the exit, don't leave them alone.",
        "If they can't walk — carry them in your arms, use a blanket or chair for transport.",
        "Report to rescuers about people with disabilities who need help.",
        "If the elevator works — use it for evacuation of those with limited mobility (only if safe).",
        "Don't leave the person alone — they may not manage on their own.",
        "In shelter — help them settle in a safe place."
      ],
      warnings: [
        "DO NOT leave people with disabilities unattended.",
        "DO NOT use elevators unnecessarily — they may shut down.",
        "DO NOT overexert yourself — it's better to call for help from others."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneEvacDataEn = droneEvacDataEn;
