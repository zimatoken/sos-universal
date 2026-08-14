// modules/drone/data/en/identify-en.js
// === MODULE: DRONES — IDENTIFICATION ===

const identifyDataEn = {
  category: "identify",
  icon: "🔊",
  title: "🔊 Drone identification",
  description: "How to determine the type, affiliation and danger level of a drone",

  questions: [
    {
      id: "type",
      type: "single",
      text: "What does the drone look like?",
      options: [
        { id: "small", label: "📏 Small (quadcopter, up to 1 m)", tags: ["small"] },
        { id: "medium", label: "📏 Medium (1–3 m, like 'Orlan')", tags: ["medium"] },
        { id: "large", label: "📏 Large (over 3 m, like 'Bayraktar')", tags: ["large"] },
        { id: "unknown", label: "❓ Can't determine", tags: ["unknown"] }
      ]
    },
    {
      id: "weapon",
      type: "single",
      text: "Do you see any weapons?",
      options: [
        { id: "no_weapon", label: "❌ No, just flying", tags: ["no_weapon"] },
        { id: "suspicious", label: "⚠️ Suspicious attachments / containers", tags: ["suspicious"] },
        { id: "missiles", label: "🚀 I see missiles / bombs", tags: ["missiles"] },
        { id: "camera", label: "📷 Only camera / sensors", tags: ["camera"] }
      ]
    },
    {
      id: "direction",
      type: "single",
      text: "Where is the drone heading?",
      options: [
        { id: "towards_city", label: "🏙️ Towards a city / town", tags: ["towards_city"] },
        { id: "away", label: "🌲 Away from populated areas", tags: ["away"] },
        { id: "circling", label: "🔄 Circling over one spot", tags: ["circling"] },
        { id: "unknown_dir", label: "❓ I don't know / can't see", tags: ["unknown_dir"] }
      ]
    },
    {
      id: "markings",
      type: "single",
      text: "Are there any identification markings?",
      options: [
        { id: "friendly", label: "✅ Friendly markings (star, flag, text)", tags: ["friendly"] },
        { id: "enemy", label: "❌ Enemy markings (Z, V, etc.)", tags: ["enemy"] },
        { id: "none", label: "❓ No markings / not visible", tags: ["none"] }
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
    // ===== 1. FRIENDLY DRONE =====
    {
      id: "friendly_identified",
      title: "✅ Identified as friendly drone",
      description: "If you're sure it's friendly (markings, shape, military info) — no immediate danger, but take basic precautions.",
      conditions: { markings: ["friendly"], weapon: ["no_weapon", "camera"] },
      priority: 1,
      reliability: "high",
      time_estimate: "N/A",
      yield_estimate: "Peace of mind",
      tags: ["friendly", "safe"],
      steps: [
        "Confirm the markings match known friendly patterns.",
        "Don't report to emergency services unless required.",
        "Keep observing without panic.",
        "If it descends, step aside — it may be landing.",
        "If other drones appear, call 112."
      ],
      warnings: [
        "Even a friendly drone can be dangerous if malfunctioning — stay clear.",
        "Don't approach a crashed drone — it may be live or have a damaged battery."
      ],
      tips: [
        "Learn the signature features of friendly drones (sound, silhouette, lights).",
        "When in doubt, err on the side of caution and take shelter."
      ]
    },

    // ===== 2. ENEMY ARMED DRONE =====
    {
      id: "enemy_armed",
      title: "🚨 Enemy armed drone — immediate action",
      description: "A drone with missiles or bombs heading toward a city is a serious threat. Act fast.",
      conditions: { weapon: ["missiles"], direction: ["towards_city"] },
      priority: 5,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["enemy", "armed", "danger"],
      steps: [
        "IMMEDIATELY take shelter: basement, bomb shelter, building with thick walls.",
        "Warn everyone nearby: shout 'Drone! Take cover!'",
        "Call 112: describe type, weapons, direction, altitude.",
        "Don't leave shelter until official all-clear.",
        "If in a car — leave it and go to shelter (car is a target).",
        "Help children, elderly, injured."
      ],
      warnings: [
        "DO NOT try to shoot the drone — could cause explosion.",
        "DO NOT stop to take photos or videos.",
        "DO NOT go back for belongings."
      ],
      tips: [
        "Know the nearest shelters along your route in advance.",
        "Carry a whistle — it can attract rescuers' attention.",
        "Keep your phone handy for quick 112 call."
      ]
    },

    // ===== 3. ENEMY RECONNAISSANCE DRONE =====
    {
      id: "enemy_unarmed",
      title: "🔍 Enemy reconnaissance drone (unarmed)",
      description: "Drone without visible missiles but with cameras — likely reconnaissance. Danger exists but not immediate.",
      conditions: { markings: ["enemy"], weapon: ["camera", "no_weapon"] },
      priority: 3,
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Situational awareness",
      tags: ["enemy", "reconnaissance"],
      steps: [
        "Report the drone to 112 or military command.",
        "Record flight direction, altitude, observation time.",
        "Warn neighbors and family.",
        "Close windows and doors, stay away from glass.",
        "Don't talk openly about the drone — it may record audio.",
        "Monitor its actions — if it starts descending, take shelter."
      ],
      warnings: [
        "Recon drones can adjust fire — avoid open spaces.",
        "Don't use radio devices (phone, radio) near the drone — it may detect your signal."
      ],
      tips: [
        "Use drone detection apps (e.g., 'Sky Alert').",
        "Keep a log of observations — useful for military.",
        "Don't relax if it flies away — it may return."
      ]
    },

    // ===== 4. UNKNOWN DRONE =====
    {
      id: "unknown_drone",
      title: "❓ Unknown drone — general procedure",
      description: "If you can't determine affiliation, follow the universal plan.",
      conditions: { markings: ["none"], type: ["unknown"] },
      priority: 2,
      reliability: "medium",
      time_estimate: "1-2 minutes",
      yield_estimate: "Safety",
      tags: ["unknown", "precaution"],
      steps: [
        "Observe: direction, altitude, behavior.",
        "Report to 112 — describe everything you see.",
        "Close windows and doors, stay away from glass.",
        "If it approaches — take shelter.",
        "If it moves away — stay alert but resume normal activities.",
        "If military/police nearby — inform them directly."
      ],
      warnings: [
        "Don't trust 'calm' behavior — it may be reconnaissance.",
        "Don't share drone info on social media — could be harmful."
      ],
      tips: [
        "Take a photo (if safe) — helps identification.",
        "Remember approximate time and location.",
        "Stay away from crowds if it circles — it may be targeting."
      ]
    },

    // ===== 5. NIGHT DRONE =====
    {
      id: "night_drone",
      title: "🌙 Night drone — elevated danger",
      description: "Night drones are often used for attacks or reconnaissance. Be extra cautious.",
      conditions: { time: ["night"] },
      priority: 4,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["night", "danger"],
      steps: [
        "If you see lights or hear sound at night — immediately take shelter.",
        "Report to 112 — night drones are often dangerous.",
        "Close all curtains, turn off lights — darkening reduces visibility.",
        "Don't use flashlights or look up — may attract attention.",
        "If it starts descending — urgently evacuate to basement.",
        "Alert neighbors by knocking on walls or via messengers."
      ],
      warnings: [
        "Night drones are harder to spot but may be armed.",
        "Don't turn on bright lights — could be a signal for the operator."
      ],
      tips: [
        "Keep a red-light flashlight (less visible from above).",
        "Know your route to shelter in the dark.",
        "Night drone sound carries further — use hearing for early detection."
      ]
    }
  ]
};

// ===== EXPORT =====
window.identifyDataEn = identifyDataEn;