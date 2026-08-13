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
      text: "How far away?",
      options: [
        { id: "far", label: "📏 Far (more than 1 km)", tags: ["far"] },
        { id: "medium", label: "📏 Medium (500 m – 1 km)", tags: ["medium"] },
        { id: "close", label: "📏 Close (less than 500 m)", tags: ["close"] }
      ]
    },
    {
      id: "altitude",
      type: "single",
      text: "How high?",
      options: [
        { id: "high", label: "⬆️ High (over 200 m)", tags: ["high"] },
        { id: "low", label: "⬇️ Low (less than 100 m)", tags: ["low"] },
        { id: "very_low", label: "⬇️⬇️ Very low (near the ground)", tags: ["very_low"] }
      ]
    },
    {
      id: "count",
      type: "single",
      text: "How many drones do you see?",
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
      options: [
        { id: "circling", label: "🔄 Circling over one place", tags: ["circling"] },
        { id: "moving", label: "➡️ Flying in one direction", tags: ["moving"] },
        { id: "hovering", label: "⏸️ Hovering in place", tags: ["hovering"] },
        { id: "descending", label: "⬇️ Descending / preparing to land", tags: ["descending"] }
      ]
    }
  ],

  solutions: [
    {
      id: "detect_close_circling",
      title: "🚨 Drone close and circling — immediate action",
      description: "If a drone is circling near you or overhead — it's potentially dangerous. Act immediately.",
      conditions: { distance: ["close"], behavior: ["circling", "hovering"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["close", "circling", "danger"],
      steps: [
        "IMMEDIATELY find shelter: building, basement, underground passage, dense vegetation.",
        "DON'T look directly at the drone — it may attract attention. Use peripheral vision.",
        "DON'T use flashlights or shine lights at the sky — it could be a signal to the operator.",
        "DON'T run in a straight line — move in a zigzag or from cover to cover.",
        "Warn others: shout 'Take cover!' or 'Drone!' but don't panic.",
        "If possible — go inside and close windows, stay away from glass.",
        "Report the drone by calling 112 or local emergency services."
      ],
      warnings: [
        "DO NOT try to shoot down the drone — it could cause an explosion or attract return fire.",
        "DO NOT stop to film the drone — it's dangerous.",
        "If the drone starts descending toward you — immediately move to shelter."
      ]
    },
    {
      id: "detect_far",
      title: "🛸 Drone far away — observation and preparation",
      description: "If the drone is far away, you have time to assess the situation and prepare.",
      conditions: { distance: ["far"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 minutes",
      yield_estimate: "Preparation",
      tags: ["far", "observation", "preparation"],
      steps: [
        "Watch the drone's movement carefully. Determine direction and speed.",
        "Note visual landmarks: buildings, trees, terrain — remember them.",
        "Report the drone by calling 112 or local emergency services.",
        "Warn family and neighbors: tell them you spotted a drone.",
        "Close windows and doors, move away from glass.",
        "Prepare an emergency bag (documents, water, first aid kit) in case of evacuation.",
        "Stay calm — panic clouds judgment."
      ],
      warnings: [
        "DO NOT ignore the drone, even if it's far away — it could approach.",
        "DO NOT spread panic on social media — it could cause harm.",
        "DO NOT go out into the open if the drone starts approaching."
      ]
    },
    {
      id: "detect_sound_only",
      title: "🔊 I hear a drone but can't see it — what to do",
      description: "Engine noise without visual contact can be dangerous — you need to determine direction.",
      conditions: { sight: ["sound"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-2 minutes",
      yield_estimate: "Direction",
      tags: ["sound", "invisible", "danger"],
      steps: [
        "Stop and listen. Determine the direction: left, right, above.",
        "Look in the direction of the sound — you might spot the drone through clouds or in a gap.",
        "If the sound is approaching — find shelter or prepare for impact.",
        "If the sound is moving away — the danger may have passed, but stay vigilant.",
        "Report the drone by calling 112 or emergency services.",
        "Don't go into open space until you've identified the source."
      ],
      warnings: [
        "DON'T ignore the sound — it could be the first sign of danger.",
        "DON'T run toward the sound — it could be a trap.",
        "DON'T wear headphones — you might not hear the drone approaching."
      ]
    },
    {
      id: "detect_many",
      title: "⚠️ Multiple drones — massive threat",
      description: "Multiple drones in one area is a serious threat. Act quickly.",
      conditions: { count: ["many"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["many", "massive", "danger"],
      steps: [
        "IMMEDIATELY move to shelter: basement, bomb shelter, building with thick walls.",
        "DON'T stay in the open — move in a zigzag from cover to cover.",
        "Warn everyone around: shout 'Multiple drones! Take cover!'",
        "If you're in a car — get out and move to shelter (a car is a target).",
        "Report the mass drone sighting by calling 112.",
        "Help children, the elderly, and the wounded — act as a team.",
        "Don't leave shelter until you receive official confirmation that the danger has passed."
      ],
      warnings: [
        "DO NOT try to film the drones — it's life-threatening.",
        "DO NOT stop to help someone if it puts your life at risk.",
        "DO NOT go back for belongings — life is more important."
      ]
    }
  ]
};

// ===== EXPORT =====
window.detectDataEn = detectDataEn;