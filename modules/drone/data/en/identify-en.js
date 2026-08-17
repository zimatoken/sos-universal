// modules/drone/data/en/identify-en.js
// === MODULE: DRONES — IDENTIFICATION ===

const identifyDataEn = {
  category: "identify",
  title: "🔊 Drone Identification",
  description: "How to determine the type, affiliation, and danger level of a UAV",

  questions: [
    {
      id: "type",
      type: "single",
      text: "What does the drone look like?",
      options: [
        { id: "small", label: "📏 Small (quadcopter, up to 1 m)", tags: ["small"] },
        { id: "medium", label: "📏 Medium (1–3 m, like 'Orlan')", tags: ["medium"] },
        { id: "large", label: "📏 Large (more than 3 m, like 'Bayraktar')", tags: ["large"] },
        { id: "unknown", label: "❓ Can't determine", tags: ["unknown"] }
      ]
    },
    {
      id: "weapon",
      type: "single",
      text: "Do you see any weapons?",
      conditions: { type: ["small", "medium", "large", "unknown"] },
      options: [
        { id: "no_weapon", label: "❌ No, just flying", tags: ["no_weapon"] },
        { id: "suspicious", label: "⚠️ Suspicious pods / containers", tags: ["suspicious"] },
        { id: "missiles", label: "🚀 I see missiles / bombs", tags: ["missiles"] },
        { id: "camera", label: "📷 Only camera / sensors", tags: ["camera"] }
      ]
    },
    {
      id: "direction",
      type: "single",
      text: "Where is the drone heading?",
      conditions: { type: ["small", "medium", "large", "unknown"] },
      options: [
        { id: "towards_city", label: "🏙️ Toward the city / town", tags: ["towards_city"] },
        { id: "away", label: "🌲 Away from populated areas", tags: ["away"] },
        { id: "circling", label: "🔄 Circling over one spot", tags: ["circling"] },
        { id: "unknown_dir", label: "❓ Don't know / can't see", tags: ["unknown_dir"] }
      ]
    },
    {
      id: "markings",
      type: "single",
      text: "Are there any identifying marks?",
      conditions: { type: ["small", "medium", "large", "unknown"] },
      options: [
        { id: "friendly", label: "✅ Friendly markings (star, flag, text)", tags: ["friendly"] },
        { id: "enemy", label: "❌ Enemy markings (Z, V, other)", tags: ["enemy"] },
        { id: "none", label: "❓ No markings / can't see", tags: ["none"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "What time of day do you see it?",
      conditions: { type: ["small", "medium", "large", "unknown"] },
      options: [
        { id: "day", label: "☀️ Day", tags: ["day"] },
        { id: "night", label: "🌙 Night", tags: ["night"] },
        { id: "twilight", label: "🌅 Dusk / dawn", tags: ["twilight"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. FRIENDLY DRONE =====
    {
      id: "friendly_identified",
      title: "✅ Identified as friendly drone",
      description: "If you're sure the drone is friendly (by markings, shape, or military information) — no immediate danger, but follow basic precautions.",
      conditions: { markings: ["friendly"], weapon: ["no_weapon", "camera"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "not applicable",
      yield_estimate: "Peace of mind",
      tags: ["friendly", "safe"],
      steps: [
        "Confirm the markings are indeed friendly — compare with known samples.",
        "Don't report the drone to emergency services unless required.",
        "Continue monitoring, but without panic.",
        "If the drone descends — simply step aside, it may be landing.",
        "If other drones appear — report to 112."
      ],
      warnings: [
        "Even a friendly drone can be dangerous if malfunctioning — keep your distance.",
        "Don't approach a fallen drone — it may be live or have a damaged battery."
      ]
    },

    // ===== 2. ENEMY ARMED DRONE =====
    {
      id: "enemy_armed",
      title: "🚨 Enemy armed drone — immediate action",
      description: "A drone with missiles or bombs heading toward the city — a serious threat. Act quickly.",
      conditions: { weapon: ["missiles"], direction: ["towards_city"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["enemy", "armed", "danger"],
      steps: [
        "IMMEDIATELY take shelter: basement, bomb shelter, building with thick walls.",
        "Warn everyone around: shout 'Drone! Take cover!'",
        "Report to 112: drone type, weapons, direction, altitude.",
        "Don't leave shelter until the official all-clear.",
        "If you're in a car — leave it and go to shelter (the car is a target).",
        "Help children, the elderly, the injured."
      ],
      warnings: [
        "DO NOT try to shoot down the drone — it could cause an explosion.",
        "DO NOT stop to take photos or videos.",
        "DO NOT go back for belongings."
      ]
    },

    // ===== 3. ENEMY RECONNAISSANCE DRONE =====
    {
      id: "enemy_unarmed",
      title: "🔍 Enemy reconnaissance drone (unarmed)",
      description: "A drone without visible missiles but with a camera — likely reconnaissance. Danger exists but is not immediate.",
      conditions: { markings: ["enemy"], weapon: ["camera", "no_weapon"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Situation assessment",
      tags: ["enemy", "reconnaissance"],
      steps: [
        "Report the drone to 112 or the military commandant's office.",
        "Record the direction of flight, altitude, time of observation.",
        "Warn neighbors and loved ones.",
        "Close windows and doors, step away from glass.",
        "Don't have open conversations about the drone — it may be recording audio.",
        "Monitor the drone's actions — if it starts descending, take shelter."
      ],
      warnings: [
        "Reconnaissance drones can adjust artillery fire — don't stay in open areas.",
        "Don't use radio devices (phone, radio) near the drone — it can detect the signal."
      ]
    },

    // ===== 4. UNIDENTIFIED DRONE =====
    {
      id: "unknown_drone",
      title: "❓ Unidentified drone — general protocol",
      description: "If you can't determine the drone's affiliation — follow the universal plan.",
      conditions: { markings: ["none"], type: ["unknown"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-2 minutes",
      yield_estimate: "Safety",
      tags: ["unknown", "precaution"],
      steps: [
        "Observe the drone: determine direction, altitude, behavior.",
        "Report the drone to 112 — describe everything you see.",
        "Close windows and doors, step away from glass.",
        "If the drone approaches — take shelter.",
        "If the drone moves away — stay alert but can continue normal activities.",
        "If military or police are nearby — inform them personally."
      ],
      warnings: [
        "Don't trust the drone's 'calm' behavior — it could be reconnaissance.",
        "Don't share drone information on social media — it could be harmful."
      ]
    },

    // ===== 5. NIGHT DRONE =====
    {
      id: "night_drone",
      title: "🌙 Night drone — increased danger",
      description: "Night drones are often used for attacks or reconnaissance. Be especially cautious.",
      conditions: { time: ["night"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["night", "danger"],
      steps: [
        "If you see lights or hear sound at night — immediately take shelter.",
        "Report the drone to 112 — night drones are often dangerous.",
        "Close all curtains, turn off lights — blackout reduces visibility.",
        "Don't use flashlights and don't look up — this can attract attention.",
        "If the drone starts descending — urgently evacuate to the basement.",
        "Warn neighbors by knocking on walls or through messengers."
      ],
      warnings: [
        "At night, drones are harder to spot but may be armed.",
        "Don't turn on bright lights — it could signal the operator."
      ]
    }
  ]
};

// ===== EXPORT =====
window.identifyDataEn = identifyDataEn;