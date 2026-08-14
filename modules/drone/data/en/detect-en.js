// modules/drone/data/en/detect-en.js
// === MODULE: DRONES — DETECTION ===

const detectDataEn = {
  category: "detect",
  icon: "🛸",
  title: "🛸 Drone detection",
  description: "What to do if you spot an unmanned aerial vehicle (UAV)",

  questions: [
    {
      id: "sight",
      type: "single",
      text: "What do you see or hear?",
      options: [
        { id: "visible", label: "👁️ I see a drone in the sky", tags: ["visible"] },
        { id: "sound", label: "🔊 I hear engine sound but can't see", tags: ["sound"] },
        { id: "both", label: "👁️🔊 I both see and hear", tags: ["both"] },
        { id: "lights", label: "💡 I see lights / flashing in the sky", tags: ["lights"] }
      ]
    },
    {
      id: "distance",
      type: "single",
      text: "How far away is it?",
      options: [
        { id: "far", label: "📏 Far (more than 1 km)", tags: ["far"] },
        { id: "medium", label: "📏 Medium (500 m – 1 km)", tags: ["medium"] },
        { id: "close", label: "📏 Close (less than 500 m)", tags: ["close"] }
      ]
    },
    {
      id: "altitude",
      type: "single",
      text: "At what altitude?",
      options: [
        { id: "high", label: "⬆️ High (over 200 m)", tags: ["high"] },
        { id: "low", label: "⬇️ Low (under 100 m)", tags: ["low"] },
        { id: "very_low", label: "⬇️⬇️ Very low (above ground)", tags: ["very_low"] }
      ]
    },
    {
      id: "count",
      type: "single",
      text: "How many drones do you see?",
      options: [
        { id: "one", label: "1️⃣ One", tags: ["one"] },
        { id: "few", label: "2️⃣ Several (2–4)", tags: ["few"] },
        { id: "many", label: "3️⃣ Many (5 or more)", tags: ["many"] }
      ]
    },
    {
      id: "behavior",
      type: "single",
      text: "How is the drone behaving?",
      options: [
        { id: "circling", label: "🔄 Circling over one spot", tags: ["circling"] },
        { id: "moving", label: "➡️ Flying in one direction", tags: ["moving"] },
        { id: "hovering", label: "⏸️ Hovering in place", tags: ["hovering"] },
        { id: "descending", label: "⬇️ Descending / preparing to land", tags: ["descending"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. DRONE CLOSE AND CIRCLING =====
    {
      id: "detect_close_circling",
      title: "🚨 Drone close and circling — immediate action",
      description: "If a drone is circling above or near you — this is potentially dangerous. Act immediately.",
      conditions: { distance: ["close"], behavior: ["circling", "hovering"] },
      priority: 5,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["close", "circling", "danger"],
      steps: [
        "IMMEDIATELY find shelter: building, basement, underpass, dense vegetation.",
        "DO NOT look directly at the drone — it may attract attention. Use peripheral vision.",
        "DO NOT use flashlights or shine at the sky — it may be a signal for the operator.",
        "DO NOT run openly in a straight line — move zigzag or from cover to cover.",
        "Warn others: shout 'Take cover!' or 'Drone!' but don't panic.",
        "If possible — go inside and close windows, stay away from glass.",
        "Report the drone to 112 or local emergency services."
      ],
      warnings: [
        "DO NOT try to shoot the drone — could cause explosion or return fire.",
        "DO NOT stop to film the drone on your phone — it's dangerous.",
        "If the drone starts descending toward you — immediately take shelter."
      ],
      tips: [
        "Know the location of shelters in your area in advance.",
        "Carry a whistle — it can attract rescuers' attention.",
        "If with children — hold them close and cover them with your body."
      ]
    },

    // ===== 2. DRONE FAR AWAY =====
    {
      id: "detect_far",
      title: "🛸 Drone far away — observation and preparation",
      description: "If the drone is far away, you have time to assess the situation and prepare.",
      conditions: { distance: ["far"] },
      priority: 2,
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Preparation for action",
      tags: ["far", "observation", "preparation"],
      steps: [
        "Carefully observe the drone's movement. Determine direction and speed.",
        "Note visual landmarks: buildings, trees, terrain — remember them.",
        "Report the drone to 112 or local emergency services.",
        "Warn family and neighbors: tell them you spotted a drone.",
        "Close windows and doors, stay away from glass to stay safe.",
        "Prepare an 'emergency bag' (documents, water, first aid kit) for evacuation.",
        "Stay calm — panic prevents clear thinking."
      ],
      warnings: [
        "DO NOT ignore the drone, even if far away — it may approach.",
        "DO NOT spread panic on social media — it can cause harm.",
        "DO NOT go to open areas if the drone starts approaching."
      ],
      tips: [
        "Record the time and direction of the drone's movement — useful for military.",
        "Use drone tracking apps (e.g., 'Sky Alert').",
        "Agree with neighbors on a warning system."
      ]
    },

    // ===== 3. SOUND ONLY =====
    {
      id: "detect_sound_only",
      title: "🔊 I hear a drone but can't see it — what to do",
      description: "Engine sound without visual contact can be dangerous — determine the direction.",
      conditions: { sight: ["sound"] },
      priority: 3,
      reliability: "medium",
      time_estimate: "1-2 minutes",
      yield_estimate: "Direction detection",
      tags: ["sound", "invisible", "danger"],
      steps: [
        "Stop and listen. Determine the direction of the sound: left, right, above.",
        "Look toward the sound — you might see the drone through clouds or in a gap.",
        "If the sound is approaching — find shelter or prepare to drop.",
        "If the sound is moving away — the danger has likely passed, but stay alert.",
        "Report the drone to 112 or emergency services.",
        "Don't go to open areas until you identify the source of the sound."
      ],
      warnings: [
        "DO NOT ignore the sound — it may be the first sign of danger.",
        "DO NOT run toward the sound — it could be a trap.",
        "DO NOT wear headphones — you may not hear an approaching drone."
      ],
      tips: [
        "In calm weather, drone sound carries for several kilometers.",
        "Determine sound direction by turning your head (like a locator).",
        "Close your eyes — it helps you hear better."
      ]
    },

    // ===== 4. MULTIPLE DRONES =====
    {
      id: "detect_many",
      title: "⚠️ Multiple drones — massive threat",
      description: "Multiple drones in one area is a serious threat. Act quickly.",
      conditions: { count: ["many"] },
      priority: 5,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["many", "massive", "danger"],
      steps: [
        "IMMEDIATELY take shelter: basement, bomb shelter, building with thick walls.",
        "DO NOT stop in open areas — move zigzag from cover to cover.",
        "Warn everyone around: shout 'Multiple drones! Take cover!'",
        "If in a car — immediately leave and go to shelter (car is a target).",
        "Report the mass appearance of drones to 112.",
        "Help children, elderly, and injured — act as a team.",
        "Do not leave shelter until official all-clear is given."
      ],
      warnings: [
        "DO NOT try to film drones on your phone — it's life-threatening.",
        "DO NOT stop to help someone if it endangers your life.",
        "DO NOT go back for belongings — your life is more important."
      ],
      tips: [
        "If in a group — split up and move to different shelters.",
        "Keep your phone handy for quick 112 call.",
        "Know the locations of mass shelters (bomb shelters, underground parking) in advance."
      ]
    },

    // ===== 5. NIGHT DETECTION =====
    {
      id: "detect_night_lights",
      title: "💡 Night detection — lights in the sky",
      description: "At night, drones are visible by their lights. This could be reconnaissance or attack.",
      conditions: { sight: ["lights"] },
      priority: 4,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["night", "lights", "danger"],
      steps: [
        "If you see lights in the night sky — don't look directly at them (may be thermal camera).",
        "Close curtains and turn off lights at home — darkening reduces visibility.",
        "Don't use flashlights or shine at the sky — it attracts attention.",
        "Warn neighbors by knocking on walls or via messengers.",
        "If lights are approaching — immediately take shelter.",
        "Report the night drone to 112.",
        "Night drones are often more dangerous — they may be armed."
      ],
      warnings: [
        "DO NOT turn on bright lights — it may be a signal for the operator.",
        "DO NOT ignore lights in the sky — they may be the first sign of attack.",
        "DO NOT use your phone as a light source — it gives away your position."
      ],
      tips: [
        "Keep a red-light flashlight — it's less visible from above.",
        "At night, drone sound carries further — use hearing for early detection.",
        "Know your route to shelter in the dark."
      ]
    }
  ]
};

// ===== EXPORT =====
window.detectDataEn = detectDataEn;