// modules/drone/data/en/identify-en.js
// === MODULE: DRONE — IDENTIFICATION ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "drone",
    category: "identify",
    version: "2.0.0",
    lang: "en",
    title: "Drone Identification",
    description: "How to identify the type, affiliation, weapons, and threat level of a UAV",
    icon: "🔊",
    color: "#ea580c"
  },

  questions: [
    {
      id: "type",
      type: "single",
      text: "What does the drone look like?",
      options: [
        { id: "small", label: "📏 Small (quadcopter, up to 1 m)", tags: ["small"] },
        { id: "medium", label: "📏 Medium (1–3 m, wingspan)", tags: ["medium"] },
        { id: "large", label: "📏 Large (over 3 m, like Bayraktar)", tags: ["large"] },
        { id: "unknown_size", label: "❓ Can't determine size", tags: ["unknown_size"] }
      ]
    },
    {
      id: "motor_count",
      type: "single",
      text: "How many motors/propellers does the drone have?",
      conditions: { type: ["small", "medium", "large", "unknown_size"] },
      options: [
        { id: "four_motors", label: "🔄 4 motors (quadcopter)", tags: ["quadcopter"] },
        { id: "six_motors", label: "🔄 6 motors (hexacopter)", tags: ["hexacopter"] },
        { id: "fixed_wing", label: "✈️ Fixed-wing (1 motor)", tags: ["fixed_wing"] },
        { id: "unknown_motors", label: "❓ Can't see / don't know", tags: ["unknown_motors"] }
      ]
    },
    {
      id: "drone_altitude",
      type: "single",
      text: "At what altitude is the drone flying?",
      conditions: { type: ["small", "medium", "large", "unknown_size"] },
      options: [
        { id: "low_alt", label: "⬇️ Low (up to 100 m)", tags: ["low_alt"] },
        { id: "medium_alt", label: "⬆️ Medium (100–500 m)", tags: ["medium_alt"] },
        { id: "high_alt", label: "⬆️ High (over 500 m)", tags: ["high_alt"] },
        { id: "unknown_alt", label: "❓ Don't know", tags: ["unknown_alt"] }
      ]
    },
    {
      id: "drone_speed",
      type: "single",
      text: "At what speed is the drone moving?",
      conditions: { type: ["small", "medium", "large", "unknown_size"] },
      options: [
        { id: "slow", label: "🐢 Slow (hovering, circling)", tags: ["slow"] },
        { id: "moderate", label: "🚶 Moderate (like a car)", tags: ["moderate"] },
        { id: "fast", label: "🏎️ Fast (like an airplane)", tags: ["fast"] },
        { id: "unknown_speed", label: "❓ Don't know", tags: ["unknown_speed"] }
      ]
    },
    {
      id: "drone_sound_type",
      type: "single",
      text: "What sound does the drone make?",
      conditions: { type: ["small", "medium", "large", "unknown_size"] },
      options: [
        { id: "buzzing", label: "🔊 Buzzing (high pitch, like a bee)", tags: ["buzzing"] },
        { id: "humming", label: "🔊 Humming (low pitch, like an engine)", tags: ["humming"] },
        { id: "silent", label: "🔇 Silent / very quiet", tags: ["silent"] },
        { id: "unknown_sound", label: "❓ Can't hear / don't know", tags: ["unknown_sound"] }
      ]
    },
    {
      id: "weapon",
      type: "single",
      text: "Do you see weapons or a payload?",
      conditions: { type: ["small", "medium", "large", "unknown_size"] },
      options: [
        { id: "no_weapon", label: "❌ No, just flying", tags: ["no_weapon"] },
        { id: "suspicious", label: "⚠️ Suspicious payloads / containers", tags: ["suspicious"] },
        { id: "missiles", label: "🚀 I see missiles / bombs", tags: ["missiles"] },
        { id: "camera", label: "📷 Only camera / sensors", tags: ["camera"] },
        { id: "unknown_weapon", label: "❓ Can't see / don't know", tags: ["unknown_weapon"] }
      ]
    },
    {
      id: "direction",
      type: "single",
      text: "Where is the drone heading?",
      conditions: { type: ["small", "medium", "large", "unknown_size"] },
      options: [
        { id: "towards_city", label: "🏙️ Towards a city / settlement", tags: ["towards_city"] },
        { id: "away", label: "🌲 Away from populated areas", tags: ["away"] },
        { id: "circling", label: "🔄 Circling over one spot", tags: ["circling"] },
        { id: "unknown_dir", label: "❓ Don't know / can't see", tags: ["unknown_dir"] }
      ]
    },
    {
      id: "markings",
      type: "single",
      text: "Are there any identification markings?",
      conditions: { type: ["small", "medium", "large", "unknown_size"] },
      options: [
        { id: "friendly", label: "✅ Friendly markings (star, flag, text)", tags: ["friendly"] },
        { id: "enemy", label: "❌ Enemy markings", tags: ["enemy"] },
        { id: "none", label: "❓ No markings / can't see", tags: ["none"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "What time of day do you see it?",
      conditions: { type: ["small", "medium", "large", "unknown_size"] },
      options: [
        { id: "day", label: "☀️ Daytime", tags: ["day"] },
        { id: "night", label: "🌙 Night", tags: ["night"] },
        { id: "twilight", label: "🌅 Twilight / dawn", tags: ["twilight"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. LARGE ARMED DRONE (BAYRAKTAR)
    // ============================================================
    {
      id: "large_drone",
      title: "✈️ Large armed drone (Bayraktar) — critical threat",
      description: "A large drone with missiles is a strike UAV. Take shelter immediately.",
      conditions: { type: ["large"], weapon: ["missiles"], direction: ["towards_city", "circling"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Shelter from strike",
      tags: ["large", "armed", "bayraktar"],
      steps: [
        "IMMEDIATELY take shelter in a solid structure: basement, bunker, parking garage.",
        "If no shelter — drop to the ground, cover your head, open your mouth.",
        "Warn everyone nearby: shout 'Large drone! Take shelter!'",
        "Report to 112: type, weapons, direction, altitude.",
        "Don't leave shelter until the all-clear.",
        "If in a car — exit and run to shelter.",
        "Help children, elderly, injured."
      ],
      warnings: [
        "Large drones can carry up to 4 missiles. Take solid shelter.",
        "DON'T try to shoot down the drone — useless and dangerous.",
        "DON'T stop for photos or video."
      ]
    },

    // ============================================================
    // 2. DRONE WITH SUSPICIOUS PAYLOAD
    // ============================================================
    {
      id: "suspicious_payload",
      title: "⚠️ Drone with suspicious payload — assess the threat",
      description: "The payload could be a camera, container, or weapon. Identify the type.",
      conditions: { weapon: ["suspicious"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30–60 seconds",
      yield_estimate: "Threat assessment",
      tags: ["payload", "suspicious", "threat"],
      steps: [
        "Identify the payload type: camera (small lens), container (drop), weapon (missiles, grenades).",
        "If it looks like weapons — take shelter immediately.",
        "If it's a camera — the drone is conducting reconnaissance. Don't reveal yourself.",
        "Report to 112: drone type, payload type, direction.",
        "Remember: color, size, shape of the payload.",
        "If the drone is descending — take shelter.",
        "Don't approach the drone — it may be explosive."
      ],
      warnings: [
        "The payload could be a drop. Don't stand under the drone.",
        "DON'T try to shoot down a drone with a payload — it may explode.",
        "DON'T approach a downed drone — it may be booby-trapped."
      ]
    },

    // ============================================================
    // 3. DRONE CIRCLING OVER A TARGET
    // ============================================================
    {
      id: "circling_target",
      title: "🔄 Drone circling over a target — reconnaissance or preparation",
      description: "A circling drone is gathering information or preparing to attack.",
      conditions: { direction: ["circling"], weapon: ["camera", "missiles", "suspicious"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Timely shelter",
      tags: ["circling", "recon", "threat"],
      steps: [
        "If a drone is circling over your area — it may be adjusting fire or preparing an attack.",
        "Immediately take shelter: basement, bunker.",
        "Close windows and doors, move away from glass.",
        "Report to 112: drone circling, coordinates, altitude.",
        "If the drone has weapons — don't leave shelter until the all-clear.",
        "If the drone has a camera — don't reveal yourself.",
        "Warn neighbors."
      ],
      warnings: [
        "A circling drone is often adjusting artillery. Take shelter.",
        "DON'T go into open areas.",
        "DON'T use your phone — the signal may be intercepted."
      ]
    },

    // ============================================================
    // 4. FRIENDLY DRONE (IDENTIFIED)
    // ============================================================
    {
      id: "friendly_identified",
      title: "✅ Identified as a friendly drone",
      description: "If you're sure it's a friendly drone — there is no direct threat.",
      conditions: { markings: ["friendly"], weapon: ["no_weapon", "camera"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "not applicable",
      yield_estimate: "Calm",
      tags: ["friendly", "safe"],
      steps: [
        "Verify that the markings are indeed friendly — compare with known examples.",
        "Don't report the drone to emergency services unless required.",
        "Continue observation, but without panic.",
        "If the drone descends — step aside, it may be landing.",
        "If other drones appear — report to 112."
      ],
      warnings: [
        "Even a friendly drone can be dangerous if malfunctioning — keep your distance.",
        "Don't approach a downed drone — it may be live or have a damaged battery."
      ]
    },

    // ============================================================
    // 5. ENEMY ARMED DRONE
    // ============================================================
    {
      id: "enemy_armed",
      title: "🚨 Enemy armed drone — immediate actions",
      description: "A drone with missiles or bombs heading toward a city is a serious threat.",
      conditions: { weapon: ["missiles"], markings: ["enemy"], direction: ["towards_city", "circling"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Safety",
      tags: ["enemy", "armed", "danger"],
      steps: [
        "IMMEDIATELY take shelter: basement, bunker, building with thick walls.",
        "Warn everyone nearby: shout 'Drone! Take shelter!'",
        "Report to 112: drone type, weapons, direction, altitude.",
        "Don't leave shelter until the official all-clear.",
        "If in a car — exit and go to shelter (the car is a target).",
        "Help children, elderly, injured."
      ],
      warnings: [
        "DON'T try to shoot down the drone — it may cause an explosion.",
        "DON'T stop for photos or video.",
        "DON'T go back for belongings."
      ]
    },

    // ============================================================
    // 6. ENEMY RECONNAISSANCE DRONE
    // ============================================================
    {
      id: "enemy_unarmed",
      title: "🔍 Enemy reconnaissance drone (unarmed)",
      description: "A drone without visible missiles but with a camera is likely reconnaissance. Threat exists but is not direct.",
      conditions: { markings: ["enemy"], weapon: ["camera", "no_weapon"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Situation assessment",
      tags: ["enemy", "reconnaissance"],
      steps: [
        "Report the drone to 112 or the military commandant's office.",
        "Record the flight direction, altitude, and observation time.",
        "Warn neighbors and loved ones.",
        "Close windows and doors, move away from glass.",
        "Don't have open conversations about the drone — it may record audio.",
        "Monitor further actions — if it starts descending, take shelter."
      ],
      warnings: [
        "Reconnaissance drones can adjust fire — don't stay in open areas.",
        "Don't use radio-electronic devices near the drone — it can detect the signal."
      ]
    },

    // ============================================================
    // 7. UNKNOWN DRONE
    // ============================================================
    {
      id: "unknown_drone",
      title: "❓ Unknown drone — general algorithm",
      description: "If you can't determine the drone's affiliation, follow the universal plan.",
      conditions: { markings: ["none"], type: ["unknown_size"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Safety",
      tags: ["unknown", "precaution"],
      steps: [
        "Observe the drone: determine direction, altitude, behavior.",
        "Report the drone to 112 — describe everything you see.",
        "Close windows and doors, move away from glass.",
        "If the drone approaches — take shelter.",
        "If the drone moves away — stay vigilant, but can continue daily activities.",
        "If military or police are nearby — inform them in person."
      ],
      warnings: [
        "Don't trust a drone's 'calm' behavior — it may be reconnaissance.",
        "Don't share drone information on social media — it may cause harm."
      ]
    },

    // ============================================================
    // 8. NIGHT DRONE
    // ============================================================
    {
      id: "night_drone",
      title: "🌙 Night drone — increased danger",
      description: "Night drones are often used for attacks or reconnaissance. Be extra careful.",
      conditions: { time: ["night"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Safety",
      tags: ["night", "danger"],
      steps: [
        "If you see lights or hear sound at night — immediately take shelter.",
        "Report the drone to 112 — night drones are often dangerous.",
        "Close all curtains, turn off lights — blackout reduces visibility.",
        "Don't use flashlights or look up — it may attract attention.",
        "If the drone starts descending — urgently evacuate to the basement.",
        "Warn neighbors by knocking on walls or via messengers."
      ],
      warnings: [
        "Drones are harder to spot at night, but they may be armed.",
        "Don't turn on bright lights — it may be a signal for the operator."
      ]
    },

    // ============================================================
    // 9. DOWNED DRONE
    // ============================================================
    {
      id: "downed_drone",
      title: "💥 Drone crashed / shot down — safety and actions",
      description: "A downed drone may be explosive. Don't approach!",
      conditions: { weapon: ["missiles", "suspicious", "unknown_weapon"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["downed", "explosive", "danger"],
      steps: [
        "DON'T APPROACH the downed drone! It may be booby-trapped or have a damaged battery.",
        "Move to a safe distance (at least 100 meters).",
        "Report the crash to 112 or the military.",
        "Warn people nearby not to approach.",
        "If the drone is smoking or sparking — move further away, explosion is possible.",
        "Don't try to extract anything from the drone — it's dangerous.",
        "Wait for specialists (bomb disposal, military)."
      ],
      warnings: [
        "A downed drone can explode at any moment.",
        "DON'T touch the drone — it may be booby-trapped.",
        "DON'T photograph the drone up close — it's dangerous."
      ]
    },

    // ============================================================
    // 10. FRIENDLY DRONE SHOT DOWN (MISTAKE)
    // ============================================================
    {
      id: "friendly_down",
      title: "🛡️ Friendly drone shot down by mistake — what to do",
      description: "If you witnessed the crash of your drone — inform the military.",
      conditions: { markings: ["friendly"], weapon: ["no_weapon", "camera"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Military informed",
      tags: ["friendly", "downed", "error"],
      steps: [
        "Inform the military about the crash of the friendly drone (if you know the coordinates).",
        "Don't approach the crash site — the drone may be dangerous.",
        "If the drone was on a mission — report it to the military.",
        "Don't share information about the crash on social media.",
        "Wait for military personnel to recover the drone."
      ],
      warnings: [
        "Even a friendly drone after a crash can be dangerous (battery, fuze).",
        "DON'T touch the drone — wait for the military."
      ]
    },

    // ============================================================
    // 11. FALSE ALARM
    // ============================================================
    {
      id: "false_alarm",
      title: "✅ False alarm — what it could have been",
      description: "Not everything that flies is a drone. Sometimes it's birds, planes, or weather balloons.",
      conditions: { type: ["unknown_size"], weapon: ["no_weapon"], markings: ["none"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Calm",
      tags: ["false", "alarm", "safe"],
      steps: [
        "Check: it could have been a plane, bird, or weather balloon.",
        "If you're not sure — report to 112, but say 'possibly'.",
        "Don't create panic without confirmation.",
        "If nothing is confirmed — all-clear.",
        "Remember: better to be safe than to ignore."
      ],
      warnings: [
        "Don't ignore suspicious objects — better to check.",
        "Don't create panic — it can be harmful."
      ]
    },

    // ============================================================
    // 12. DRONE WITH CAMERA (RECONNAISSANCE)
    // ============================================================
    {
      id: "camera_drone",
      title: "📷 Drone with camera — reconnaissance or civilian",
      description: "A drone with a camera may be reconnaissance or civilian. Identify by behavior.",
      conditions: { weapon: ["camera"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Identification",
      tags: ["camera", "recon", "civilian"],
      steps: [
        "Determine: is the drone flying purposefully or randomly?",
        "If purposefully — likely reconnaissance. Take shelter.",
        "If randomly — possibly a civilian drone (photo/video).",
        "Report to 112: drone type, direction, camera presence.",
        "Don't reveal yourself if there are suspicions."
      ],
      warnings: [
        "Civilian drones often fly during daylight and don't hide.",
        "Reconnaissance drones fly purposefully and at high altitude."
      ]
    }
  ]
});