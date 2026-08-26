// modules/drone/data/en/detect-en.js
// === MODULE: DRONE — DETECTION ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "drone",
    category: "detect",
    version: "2.0.0",
    lang: "en",
    title: "Drone Detection",
    description: "What to do if you notice an unmanned aerial vehicle (UAV)",
    icon: "🛸",
    color: "#ea580c"
  },

  questions: [
    {
      id: "sight",
      type: "single",
      text: "What do you see or hear?",
      options: [
        { id: "visible", label: "👁️ I see a drone in the sky", tags: ["visible"] },
        { id: "sound", label: "🔊 I hear engine sound, but can't see", tags: ["sound"] },
        { id: "both", label: "👁️🔊 I both see and hear", tags: ["both"] },
        { id: "lights", label: "💡 I see lights / blinking in the sky", tags: ["lights"] },
        { id: "ir_lights", label: "🌙 I see IR illumination / invisible lights", tags: ["ir_lights"] }
      ]
    },
    {
      id: "distance",
      type: "single",
      text: "At what distance?",
      conditions: { sight: ["visible", "both", "lights", "ir_lights"] },
      options: [
        { id: "far", label: "📏 Far (over 1 km)", tags: ["far"] },
        { id: "medium", label: "📏 Medium (500 m – 1 km)", tags: ["medium_dist"] },
        { id: "close", label: "📏 Close (100–500 m)", tags: ["close"] },
        { id: "very_close", label: "📏 Very close (under 100 m)", tags: ["very_close"] }
      ]
    },
    {
      id: "altitude",
      type: "single",
      text: "At what altitude?",
      conditions: { sight: ["visible", "both", "lights", "ir_lights"] },
      options: [
        { id: "high", label: "⬆️ High (over 200 m)", tags: ["high_alt"] },
        { id: "medium_alt", label: "⬆️ Medium (100–200 m)", tags: ["medium_alt"] },
        { id: "low", label: "⬇️ Low (50–100 m)", tags: ["low_alt"] },
        { id: "very_low", label: "⬇️⬇️ Very low (under 50 m, above ground)", tags: ["very_low_alt"] }
      ]
    },
    {
      id: "drone_direction",
      type: "single",
      text: "In which direction is the drone moving?",
      conditions: { sight: ["visible", "both", "lights", "ir_lights"] },
      options: [
        { id: "towards_you", label: "➡️ Flying towards you", tags: ["towards_you"] },
        { id: "away_you", label: "⬅️ Flying away from you", tags: ["away_you"] },
        { id: "sideways", label: "↔️ Flying parallel / to the side", tags: ["sideways"] },
        { id: "circling", label: "🔄 Circling in one place", tags: ["circling"] },
        { id: "hovering", label: "⏸️ Hovering in place", tags: ["hovering"] },
        { id: "descending", label: "⬇️ Descending", tags: ["descending"] }
      ]
    },
    {
      id: "drone_color",
      type: "single",
      text: "What color is the drone?",
      conditions: { sight: ["visible", "both"] },
      options: [
        { id: "dark", label: "⬛ Dark (black, dark grey, green)", tags: ["dark_color"] },
        { id: "light", label: "⬜ Light (white, light grey)", tags: ["light_color"] },
        { id: "camouflage", label: "🟩 Camouflage / stealth", tags: ["camouflage_color"] },
        { id: "unknown_color", label: "❓ Can't determine", tags: ["unknown_color"] }
      ]
    },
    {
      id: "has_payload",
      type: "single",
      text: "Do you see any payload (camera, container, weapon)?",
      conditions: { sight: ["visible", "both"] },
      options: [
        { id: "payload_yes", label: "✅ Yes, there is a payload", tags: ["payload_yes"] },
        { id: "payload_no", label: "❌ No, clean", tags: ["payload_no"] },
        { id: "payload_unknown", label: "❓ Can't see / don't know", tags: ["payload_unknown"] }
      ]
    },
    {
      id: "count",
      type: "single",
      text: "How many drones do you see?",
      conditions: { sight: ["visible", "both", "lights", "ir_lights"] },
      options: [
        { id: "one", label: "1️⃣ One", tags: ["one"] },
        { id: "few", label: "2️⃣ Several (2–4)", tags: ["few"] },
        { id: "many", label: "3️⃣ Many (5 or more)", tags: ["many"] }
      ]
    },
    {
      id: "weather_conditions",
      type: "single",
      text: "What is the weather like?",
      conditions: { sight: ["visible", "both", "lights", "ir_lights", "sound"] },
      options: [
        { id: "clear", label: "☀️ Clear / cloudy", tags: ["clear"] },
        { id: "foggy", label: "🌫️ Fog / rain / snow", tags: ["foggy"] },
        { id: "windy", label: "💨 Strong wind", tags: ["windy"] }
      ]
    },
    {
      id: "camouflage",
      type: "single",
      text: "Do you have any cover available?",
      conditions: { sight: ["visible", "both", "lights", "ir_lights"] },
      options: [
        { id: "cover_yes", label: "✅ Yes (building, forest, ditch)", tags: ["cover_yes"] },
        { id: "cover_no", label: "❌ No (open field)", tags: ["cover_no"] },
        { id: "cover_partial", label: "📦 Partial (bushes, car)", tags: ["cover_partial"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. DRONE VERY LOW (OVER GROUND)
    // ============================================================
    {
      id: "drone_very_low",
      title: "⬇️⬇️ Drone very low over ground — immediate actions",
      description: "A drone at low altitude is a direct threat. It may be conducting reconnaissance, attacking, or dropping cargo.",
      conditions: { sight: ["visible", "both"], altitude: ["very_low_alt"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 seconds",
      yield_estimate: "Cover from drone",
      tags: ["very_low", "drone", "emergency"],
      steps: [
        "IMMEDIATELY drop to the ground or take cover (under canopy, entrance, under tree).",
        "DON'T look directly at the drone — it may have facial recognition.",
        "If the drone is descending towards you — run zigzag, use obstacles.",
        "If in a building — move away from windows, go to a room without windows.",
        "On drop — drop face down, cover head, open mouth.",
        "If possible — use smoke, fog, dense vegetation for camouflage.",
        "Report the drone via 112 or military if you have connection."
      ],
      warnings: [
        "DON'T stand still — the drone may be targeting you.",
        "DON'T try to shoot down the drone — may cause explosion.",
        "DON'T use phone in open field — gives you away.",
        "DON'T cluster with others — drone may target groups."
      ]
    },

    // ============================================================
    // 2. DRONE WITH PAYLOAD (WEAPON / CAMERA)
    // ============================================================
    {
      id: "drone_with_payload",
      title: "🎯 Drone with payload — signs and actions",
      description: "A payload means the drone is on a combat or reconnaissance mission. This is a critical threat.",
      conditions: { sight: ["visible", "both"], has_payload: ["payload_yes"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Timely shelter",
      tags: ["payload", "drone", "threat"],
      steps: [
        "Identify the payload type: camera (small lens), container (drop), weapon (missiles, grenades).",
        "IMMEDIATELY take shelter: solid building, basement, bunker.",
        "If the drone has weapons — don't stay in open areas, don't cluster.",
        "If the drone has a camera — avoid direct contact, don't look into the camera.",
        "Remember: color, size, payload type — for reporting to authorities.",
        "Report the drone with payload via 112 or military.",
        "After shelter — observe until the drone flies away."
      ],
      warnings: [
        "A drone with payload is not a civilian drone. It is dangerous.",
        "DON'T try to approach the drone — it may be explosive.",
        "DON'T photograph the drone with payload — gives you away."
      ]
    },

    // ============================================================
    // 3. DRONE FLYING TOWARDS YOU
    // ============================================================
    {
      id: "drone_towards_you",
      title: "➡️ Drone flying towards you — evasion algorithm",
      description: "The drone is approaching — act immediately. You have 10–30 seconds.",
      conditions: { sight: ["visible", "both"], drone_direction: ["towards_you"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Drone evasion",
      tags: ["towards", "drone", "evasion"],
      steps: [
        "DON'T run straight away — it sees movement and can adjust course.",
        "Move zigzag, use obstacles (trees, buildings, cars).",
        "Find cover — enter the nearest building, under canopy, underground passage.",
        "If no cover — lie on the ground, cover yourself with clothing, light fabric.",
        "If in a car — don't exit, but duck down and cover yourself.",
        "If the drone has thermal imaging — shelter behind concrete walls, in water.",
        "Report via 112 after you take cover."
      ],
      warnings: [
        "DON'T run in a straight line — the drone is faster.",
        "DON'T use phone while moving — it distracts.",
        "DON'T stop in open areas — you are a target."
      ]
    },

    // ============================================================
    // 4. DRONE DESCENDING (PREPARING TO LAND)
    // ============================================================
    {
      id: "drone_descending",
      title: "⬇️ Drone descending — possible landing or drop",
      description: "Descending may mean landing (reconnaissance) or preparing to drop. Be ready.",
      conditions: { sight: ["visible", "both"], drone_direction: ["descending"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Action readiness",
      tags: ["descending", "drone", "preparation"],
      steps: [
        "Determine: is the drone descending slowly (landing) or fast (drop/attack).",
        "If drop — drop to the ground, cover head, open mouth.",
        "If landing — the drone may be conducting ground reconnaissance. Don't approach, don't reveal yourself.",
        "If possible — move to the side of the expected landing site.",
        "Remember the landing coordinates — may be needed by authorities.",
        "Report the descending drone via 112 or military.",
        "Don't leave cover until the drone has fully stopped."
      ],
      warnings: [
        "DON'T approach the drone during landing — it may be explosive.",
        "DON'T try to capture the drone — it may be dangerous.",
        "DON'T use phone near drone — signal may be intercepted."
      ]
    },

    // ============================================================
    // 5. DRONE AT NIGHT WITH IR ILLUMINATION
    // ============================================================
    {
      id: "drone_ir_night",
      title: "🌙 Drone at night with IR illumination — invisible threat",
      description: "IR illumination is invisible to the naked eye, but the drone sees you in thermal. Take cover.",
      conditions: { sight: ["ir_lights", "lights"], distance: ["close", "very_close"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 seconds",
      yield_estimate: "Protection from thermal imaging",
      tags: ["ir", "night", "drone"],
      steps: [
        "If you see IR illumination — the drone has thermal imaging. It sees you in the dark.",
        "DON'T turn on lights, DON'T use flashlights — it only helps the drone.",
        "Take cover behind concrete walls, rocks, in water (shields thermal signature).",
        "If in a building — go to a room without windows, go to the basement.",
        "If outside — lie in a ditch, behind a concrete block, under a bridge.",
        "DON'T stand near windows with lights on — thermal signature is visible outside.",
        "After cover — don't leave for 10–15 minutes until the drone flies away."
      ],
      warnings: [
        "IR illumination is invisible to the eye, but the drone sees you. Don't think you're safe.",
        "DON'T try to shoot down the drone in the dark — useless and dangerous.",
        "DON'T use phone — it creates a thermal signature."
      ]
    },

    // ============================================================
    // 6. DRONE FLYING IN ONE DIRECTION
    // ============================================================
    {
      id: "drone_moving",
      title: "➡️ Drone flying in one direction — observation",
      description: "The drone is following a route. Determine the direction and assess the threat.",
      conditions: { sight: ["visible", "both"], drone_direction: ["sideways", "away_you"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Threat assessment",
      tags: ["moving", "drone", "observation"],
      steps: [
        "Observe the drone: is it flying straight or changing course?",
        "Determine the direction of movement: towards the city, military facility, border.",
        "Remember: color, size, speed, altitude, payload presence.",
        "If the drone is moving away — the threat may have passed. But stay vigilant.",
        "Report the drone via 112 or military if it's of interest.",
        "Don't go out into open areas if the drone may return."
      ],
      warnings: [
        "DON'T assume the drone is 'just passing' — it may return.",
        "DON'T ignore the drone's movement — remember the direction."
      ]
    },

    // ============================================================
    // 7. DRONE CIRCLING — RECONNAISSANCE
    // ============================================================
    {
      id: "detect_close_circling",
      title: "🔄 Drone circling overhead — reconnaissance",
      description: "A circling drone is gathering information. Don't let yourself be detected.",
      conditions: { sight: ["visible", "both"], drone_direction: ["circling", "hovering"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Stealth preserved",
      tags: ["circling", "drone", "recon"],
      steps: [
        "IMMEDIATELY take cover (under canopy, in building, under tree). Don't run — movement attracts attention.",
        "If in a building — move away from windows, close yourself in a room without windows.",
        "Don't look into the drone's camera — it may capture your face.",
        "If in a car — duck, turn off engine, cover yourself with clothing.",
        "Remember: drone type, color, altitude, payload presence.",
        "Wait until the drone flies away. Don't leave for 5–10 minutes.",
        "Report the reconnaissance drone to authorities: coordinates, type, direction."
      ],
      warnings: [
        "DON'T run from a circling drone — it attracts attention.",
        "DON'T use phone near a drone — signal may be intercepted.",
        "DON'T leave cover immediately — the drone may return."
      ]
    },

    // ============================================================
    // 8. CAMOUFLAGE FROM DRONE
    // ============================================================
    {
      id: "drone_camouflage",
      title: "🎭 Camouflage from drone — how to stay undetected",
      description: "Drones see movement, heat, and color. Know how to camouflage yourself.",
      conditions: { sight: ["visible", "both", "lights", "ir_lights"], camouflage: ["cover_no", "cover_partial"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Stealth",
      tags: ["camouflage", "stealth", "drone"],
      steps: [
        "Drones see movement. If you stand still — you're harder to spot.",
        "Use natural cover: bushes, trees, rocks, building shadows.",
        "If no cover — lie on the ground, cover yourself with light fabric (blends with the sky).",
        "Avoid bright colors (red, yellow, white). Dark clothing camouflages better.",
        "If the drone has thermal imaging — take cover behind concrete, rocks, in water.",
        "Don't use flashlights, don't turn on your phone in open field.",
        "If in a car — turn off engine, darken the cabin."
      ],
      warnings: [
        "Drones see heat. Don't stand in the sun — you'll be visible.",
        "DON'T move suddenly — drones detect movement.",
        "DON'T use mirrors or shiny objects — they give you away."
      ]
    },

    // ============================================================
    // 9. MANY DRONES — MASSIVE THREAT
    // ============================================================
    {
      id: "detect_many",
      title: "⚠️ Many drones — massive threat",
      description: "Multiple drones in one area is a serious threat. Act quickly.",
      conditions: { sight: ["visible", "both"], count: ["many"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Safety",
      tags: ["many", "massive", "danger"],
      steps: [
        "IMMEDIATELY take shelter: basement, bunker, building with thick walls.",
        "DON'T stop in open areas — move zigzag from cover to cover.",
        "Warn everyone around: shout 'Many drones! Take cover!'",
        "If in a car — immediately exit and go to shelter.",
        "Report the massive drone appearance via 112.",
        "Help children, elderly, and injured — act as a team.",
        "Don't leave shelter until the official all-clear."
      ],
      warnings: [
        "DON'T try to film drones on your phone — it's dangerous.",
        "DON'T stop to help if it threatens your life.",
        "DON'T go back for belongings — life is more important."
      ]
    },

    // ============================================================
    // 10. SOUND ONLY — DIRECTION DETERMINATION
    // ============================================================
    {
      id: "detect_sound_only",
      title: "🔊 I hear a drone but can't see — what to do",
      description: "Engine sound without visual contact may be dangerous — determine the direction.",
      conditions: { sight: ["sound"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Direction determined",
      tags: ["sound", "invisible", "danger"],
      steps: [
        "Stop and listen. Determine the direction of the sound: left, right, above.",
        "Look in the direction of the sound — you may see the drone through clouds.",
        "If the sound is approaching — find cover or prepare to drop.",
        "If the sound is moving away — danger may have passed, but stay alert.",
        "Report the drone via 112 or emergency services.",
        "Don't go into open space until you identify the source."
      ],
      warnings: [
        "DON'T ignore the sound — it may be the first sign of danger.",
        "DON'T run toward the sound — it may be a trap.",
        "DON'T use headphones — you may not hear the drone approaching."
      ]
    },

    // ============================================================
    // 11. DRONE FAR — OBSERVATION AND PREPARATION
    // ============================================================
    {
      id: "detect_far",
      title: "🛸 Drone far — observation and preparation",
      description: "If the drone is far away, you have time to assess the situation and prepare.",
      conditions: { sight: ["visible", "both", "lights"], distance: ["far"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Preparedness",
      tags: ["far", "observation", "preparation"],
      steps: [
        "Carefully observe the drone's movement. Determine direction and speed.",
        "Mark visual landmarks: buildings, trees, terrain.",
        "Report the drone via 112 or local emergency services.",
        "Warn family and neighbors — tell them you spotted a drone.",
        "Close windows and doors, move away from glass.",
        "Prepare a 'go bag' in case of evacuation.",
        "Stay calm — panic hinders decision-making."
      ],
      warnings: [
        "DON'T ignore the drone, even if it's far — it may approach.",
        "DON'T spread panic on social media — it may cause harm.",
        "DON'T go out into open areas if the drone starts approaching."
      ]
    }
  ]
});