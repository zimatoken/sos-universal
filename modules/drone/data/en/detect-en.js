// modules/drone/data/en/detect-en.js
// === MODULE: DRONES — DETECTION ===

const detectDataEn = {
  category: "detect",
  title: "🛸 Drone Detection",
  description: "What to do if you spot an unmanned aerial vehicle (UAV)",

  questions: [
    {
      id: "sight",
      type: "single",
      text: "What do you see or hear?",
      options: [
        { id: "visible", label: "👁️ I see a drone in the sky", tags: ["visible"] },
        { id: "sound", label: "🔊 I hear engine noise but can't see it", tags: ["sound"] },
        { id: "both", label: "👁️🔊 I both see and hear it", tags: ["both"] },
        { id: "lights", label: "💡 I see lights / blinking in the sky", tags: ["lights"] }
      ]
    },
    {
      id: "distance",
      type: "single",
      text: "How far away is it?",
      conditions: { sight: ["visible", "both", "lights"] },
      options: [
        { id: "far", label: "📏 Far (more than 1 km)", tags: ["far"] },
        { id: "medium", label: "📏 Medium (500 m – 1 km)", tags: ["medium_dist"] },
        { id: "close", label: "📏 Close (less than 500 m)", tags: ["close"] }
      ]
    },
    {
      id: "altitude",
      type: "single",
      text: "At what altitude?",
      conditions: { sight: ["visible", "both", "lights"] },
      options: [
        { id: "high", label: "⬆️ High (above 200 m)", tags: ["high"] },
        { id: "low", label: "⬇️ Low (below 100 m)", tags: ["low"] },
        { id: "very_low", label: "⬇️⬇️ Very low (near ground)", tags: ["very_low"] }
      ]
    },
    {
      id: "count",
      type: "single",
      text: "How many drones do you see?",
      conditions: { sight: ["visible", "both", "lights"] },
      options: [
        { id: "one", label: "1️⃣ One", tags: ["one"] },
        { id: "few", label: "2️⃣ A few (2–4)", tags: ["few"] },
        { id: "many", label: "3️⃣ Many (5 or more)", tags: ["many"] }
      ]
    },
    {
      id: "behavior",
      type: "single",
      text: "What is the drone doing?",
      conditions: { sight: ["visible", "both", "lights"] },
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
      title: "🚨 Drone is close and circling — immediate action",
      description: "If a drone is circling over or near you — it is potentially dangerous. Act immediately.",
      conditions: { distance: ["close"], behavior: ["circling", "hovering"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["close", "circling", "danger"],
      steps: [
        "IMMEDIATELY seek shelter: building, basement, underground passage, dense vegetation.",
        "DON'T look directly at the drone — it may attract attention. Use peripheral vision.",
        "DON'T use flashlights or shine lights into the sky — it could signal the operator.",
        "DON'T run in a straight line in the open — move in zigzags or from cover to cover.",
        "Warn others: shout 'Take cover!' or 'Drone!', but don't panic.",
        "If possible — go inside and close windows, step away from glass.",
        "Report the drone by calling 112 or local emergency services."
      ],
      warnings: [
        "DO NOT try to shoot down the drone — it could cause an explosion or draw return fire.",
        "DO NOT stop to film the drone on your phone — it's dangerous.",
        "If the drone starts descending toward you — immediately take cover."
      ]
    },

    // ===== 2. DRONE FAR AWAY =====
    {
      id: "detect_far",
      title: "🛸 Drone is far — observe and prepare",
      description: "If the drone is far away, you have time to assess the situation and prepare.",
      conditions: { distance: ["far"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Preparedness",
      tags: ["far", "observation", "preparation"],
      steps: [
        "Carefully observe the drone's movement. Determine direction and speed.",
        "Note visual landmarks: buildings, trees, terrain — remember them.",
        "Report the drone by calling 112 or local emergency services.",
        "Warn family and neighbors: tell them you spotted a drone.",
        "Close windows and doors, step away from glass for safety.",
        "Prepare a 'go-bag' (documents, water, first aid kit) in case of evacuation.",
        "Stay calm — panic prevents sound decision-making."
      ],
      warnings: [
        "DO NOT ignore the drone, even if it's far — it could approach.",
        "DO NOT spread panic on social media — it can cause harm.",
        "DO NOT go to open areas if the drone starts approaching."
      ]
    },

    // ===== 3. SOUND ONLY =====
    {
      id: "detect_sound_only",
      title: "🔊 I hear a drone but can't see it — what to do",
      description: "Engine noise without visual contact can be dangerous — you need to determine direction.",
      conditions: { sight: ["sound"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-2 minutes",
      yield_estimate: "Direction determined",
      tags: ["sound", "invisible", "danger"],
      steps: [
        "Stop and listen. Determine the direction of the sound: left, right, above.",
        "Look toward the sound — you might see the drone through clouds or in a gap.",
        "If the sound is approaching — seek shelter or prepare to take cover.",
        "If the sound is moving away — the danger may have passed, but stay alert.",
        "Report the drone by calling 112 or emergency services.",
        "Don't go into open space until you identify the source of the sound."
      ],
      warnings: [
        "DO NOT ignore the sound — it could be the first sign of danger.",
        "DO NOT run toward the sound — it could be a trap.",
        "DO NOT wear headphones — you might not hear the drone approaching."
      ]
    },

    // ===== 4. MANY DRONES =====
    {
      id: "detect_many",
      title: "⚠️ Many drones — massive threat",
      description: "Multiple drones in one area is a serious threat. Act quickly.",
      conditions: { count: ["many"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["many", "massive", "danger"],
      steps: [
        "IMMEDIATELY take shelter: basement, bomb shelter, building with thick walls.",
        "DO NOT stop in the open — move in zigzags from cover to cover.",
        "Warn everyone around: shout 'Many drones! Take cover!'",
        "If you're in a car — immediately exit and go to shelter (the car is a target).",
        "Report the mass drone sighting by calling 112.",
        "Help children, the elderly, and the injured — act as a team.",
        "Do not leave shelter until official all-clear is given."
      ],
      warnings: [
        "DO NOT try to film the drones on your phone — it's life-threatening.",
        "DO NOT stop to help someone if it puts your own life at risk.",
        "DO NOT go back for belongings — life is more important."
      ]
    },

    // ===== 5. NIGHT DETECTION =====
    {
      id: "detect_night_lights",
      title: "💡 Night detection — lights in the sky",
      description: "At night, drones are visible by their lights. This could be reconnaissance or an attack.",
      conditions: { sight: ["lights"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["night", "lights", "danger"],
      steps: [
        "If you see lights in the sky at night — don't look directly at them (could be thermal imaging).",
        "Close curtains and turn off lights at home — blackout reduces visibility.",
        "Don't use flashlights or shine lights into the sky — it attracts attention.",
        "Warn neighbors by knocking on walls or through messengers.",
        "If the lights are approaching — immediately take shelter.",
        "Report the night drone by calling 112.",
        "Night drones are often more dangerous — they may be armed."
      ],
      warnings: [
        "DO NOT turn on bright lights — it could signal the operator.",
        "DO NOT ignore lights in the sky — they could be the first sign of an attack.",
        "DO NOT use your phone for illumination — it gives away your position."
      ]
    }
  ]
};

// ===== EXPORT =====
window.detectDataEn = detectDataEn;