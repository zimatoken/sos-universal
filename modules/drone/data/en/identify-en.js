// modules/drone/data/en/identify-en.js
// === MODULE: DRONES — IDENTIFICATION ===
const identifyDataEn = {
  category: "identify",
  title: "🔊 Drone Identification",
  description: "How to determine the type, ownership and threat level of a UAV",

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
      options: [
        { id: "towards_city", label: "🏙️ Towards a city / village", tags: ["towards_city"] },
        { id: "away", label: "🌲 Away from populated areas", tags: ["away"] },
        { id: "circling", label: "🔄 Circling over one place", tags: ["circling"] },
        { id: "unknown_dir", label: "❓ I don't know / can't see", tags: ["unknown_dir"] }
      ]
    },
    {
      id: "markings",
      type: "single",
      text: "Are there any identification marks?",
      options: [
        { id: "friendly", label: "✅ Friendly markings (star, flag, inscription)", tags: ["friendly"] },
        { id: "enemy", label: "❌ Enemy markings (Z, V, other)", tags: ["enemy"] },
        { id: "none", label: "❓ No marks / can't see", tags: ["none"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "What time of day do you see it?",
      options: [
        { id: "day", label: "☀️ Day", tags: ["day"] },
        { id: "night", label: "🌙 Night", tags: ["night"] },
        { id: "twilight", label: "🌅 Twilight / dawn", tags: ["twilight"] }
      ]
    }
  ],

  solutions: [
    {
      id: "friendly_identified",
      title: "✅ Identified as a friendly drone",
      description: "If you are sure the drone is friendly (by markings, shape, or military information) — no immediate danger, but stay cautious.",
      conditions: { markings: ["friendly"], weapon: ["no_weapon", "camera"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "not applicable",
      yield_estimate: "Peace of mind",
      tags: ["friendly", "safe"],
      steps: [
        "Confirm that the markings are indeed friendly — compare with known examples.",
        "Do not report the drone to emergency services unless required.",
        "Continue observing but without panic.",
        "If the drone descends — just step aside, it may be landing.",
        "If other drones appear — report via 112."
      ],
      warnings: [
        "Even a friendly drone can be dangerous if malfunctioning — keep a safe distance.",
        "Do not approach a crashed drone — it may be charged or have a damaged battery."
      ]
    },
    {
      id: "enemy_armed",
      title: "🚨 Enemy armed drone — immediate action",
      description: "A drone with missiles or bombs heading toward a city is a serious threat. Act fast.",
      conditions: { weapon: ["missiles"], direction: ["towards_city"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["enemy", "armed", "danger"],
      steps: [
        "IMMEDIATELY move to shelter: basement, bomb shelter, building with thick walls.",
        "Warn everyone: shout 'Drone! Take cover!'",
        "Report to 112: drone type, weapons, direction, altitude.",
        "Do not leave shelter until the all-clear.",
        "If you are in a car — get out and move to shelter (car is a target).",
        "Help children, elderly, and wounded."
      ],
      warnings: [
        "DO NOT try to shoot down the drone — it could explode.",
        "DO NOT stop to take photos or videos.",
        "DO NOT go back for belongings."
      ]
    },
    {
      id: "enemy_unarmed",
      title: "🔍 Enemy reconnaissance drone (unarmed)",
      description: "A drone without visible missiles but with a camera — likely reconnaissance. Danger exists but not immediate.",
      conditions: { markings: ["enemy"], weapon: ["camera", "no_weapon"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Situation assessment",
      tags: ["enemy", "reconnaissance"],
      steps: [
        "Report the drone to 112 or military command.",
        "Note direction, altitude, time of observation.",
        "Warn neighbors and family.",
        "Close windows and doors, stay away from glass.",
        "Do not openly discuss the drone — it may be recording audio.",
        "Monitor the drone's actions — if it descends, take cover."
      ],
      warnings: [
        "Reconnaissance drones can adjust fire — do not stay in open areas.",
        "Do not use radio devices (phone, radio) near the drone — it can detect the signal."
      ]
    },
    {
      id: "unknown_drone",
      title: "❓ Unidentified drone — general protocol",
      description: "If you cannot determine the drone's affiliation — follow the universal plan.",
      conditions: { markings: ["none"], type: ["unknown"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-2 minutes",
      yield_estimate: "Safety",
      tags: ["unknown", "precaution"],
      steps: [
        "Observe the drone: direction, altitude, behavior.",
        "Report the drone to 112 — describe everything you see.",
        "Close windows and doors, stay away from glass.",
        "If the drone approaches — take shelter.",
        "If the drone moves away — stay alert but resume normal activities.",
        "If military or police are nearby — inform them personally."
      ],
      warnings: [
        "Do not trust the drone's 'calm' behavior — it may be reconnaissance.",
        "Do not share information about the drone on social media — it could cause harm."
      ]
    },
    {
      id: "night_drone",
      title: "🌙 Night drone — increased danger",
      description: "Night drones are often used for attacks or reconnaissance. Be extra cautious.",
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
        "Do not use flashlights or look up — it may attract attention.",
        "If the drone starts descending — urgently evacuate to a basement.",
        "Alert neighbors by knocking on walls or via messengers."
      ],
      warnings: [
        "At night, drones are harder to spot but may be armed.",
        "Do not turn on bright lights — it could signal the operator."
      ]
    }
  ]
};

// ===== EXPORT =====
window.identifyDataEn = identifyDataEn;