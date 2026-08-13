// modules/drone/data/en/shelter-en.js
// === MODULE: DRONES — SHELTER ===

const droneShelterDataEn = {
  category: "shelter",
  title: "🛡️ Shelter from drone",
  description: "How and where to take cover from a drone to stay safe",

  questions: [
    {
      id: "location",
      type: "single",
      text: "Where are you right now?",
      options: [
        { id: "apartment", label: "🏢 In a building / apartment", tags: ["building"] },
        { id: "street", label: "🚶 On the street / in the yard", tags: ["street"] },
        { id: "car", label: "🚗 In a car", tags: ["car"] },
        { id: "field", label: "🌾 In a field / open area", tags: ["field"] },
        { id: "forest", label: "🌲 In a forest / park", tags: ["forest"] }
      ]
    },
    {
      id: "shelter_type",
      type: "single",
      text: "Is there a basement or bomb shelter nearby?",
      options: [
        { id: "basement", label: "✅ Yes, there is a basement/cellar", tags: ["basement"] },
        { id: "bomb_shelter", label: "✅ Yes, there is a bomb shelter", tags: ["bomb_shelter"] },
        { id: "none", label: "❌ No, nothing", tags: ["no_shelter"] },
        { id: "unknown", label: "❓ I don't know", tags: ["unknown_shelter"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "How much time do you have before the threat?",
      options: [
        { id: "seconds", label: "⏱️ Seconds (drone is nearby)", tags: ["seconds"] },
        { id: "minutes", label: "⏱️ Minutes (drone is approaching)", tags: ["minutes"] },
        { id: "plenty", label: "⏱️ Plenty of time (drone is far)", tags: ["plenty"] }
      ]
    },
    {
      id: "people",
      type: "single",
      text: "Who is with you?",
      options: [
        { id: "alone", label: "👤 Alone", tags: ["alone"] },
        { id: "family", label: "👨‍👩‍👧‍👦 Family / children", tags: ["family"] },
        { id: "group", label: "👥 Group of people", tags: ["group"] }
      ]
    },
    {
      id: "escape_route",
      type: "single",
      text: "Do you know the way to the shelter?",
      options: [
        { id: "know", label: "✅ Yes, I know the route", tags: ["know"] },
        { id: "rough", label: "❓ Approximately", tags: ["rough"] },
        { id: "no_idea", label: "❌ No, I don't know", tags: ["no_idea"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. SHELTER IN APARTMENT WITH BASEMENT =====
    {
      id: "shelter_apartment_basement",
      title: "🏢 Shelter in apartment with basement",
      description: "Basement or bomb shelter is the best protection against drone strikes.",
      conditions: { location: ["apartment"], shelter_type: ["basement", "bomb_shelter"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Maximum protection",
      tags: ["building", "basement", "safe"],
      steps: [
        "Immediately go down to the basement / bomb shelter.",
        "Take with you: phone, documents, first aid kit, water, warm clothes.",
        "DO NOT use the elevator — use the stairs.",
        "Close the basement door behind you, but don't lock it.",
        "Go deeper into the basement, away from the entrance and windows.",
        "Sit against the wall, away from the entrance.",
        "If you have children — keep them close, calm them down.",
        "Stay in the shelter until the all-clear signal.",
        "Do not leave unless necessary — a second attack is possible."
      ],
      warnings: [
        "Do not use the elevator — electricity may shut off.",
        "Do not enter the basement with a gas cylinder — explosive risk.",
        "Do not stand near basement windows — shrapnel can come through ventilation."
      ],
      tips: [
        "Know in advance where the basement is and how to get there.",
        "Keep water, a flashlight, and a radio in the basement.",
        "If the basement is flooded — find an interior room without windows on the ground floor."
      ]
    },

    // ===== 2. SHELTER IN APARTMENT WITHOUT BASEMENT =====
    {
      id: "shelter_apartment_no_basement",
      title: "🏠 Shelter in apartment without basement",
      description: "Without a basement, find a place with few windows and load-bearing walls. The bathroom is the best option.",
      conditions: { location: ["apartment"], shelter_type: ["none", "unknown"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "immediately",
      yield_estimate: "Good protection",
      tags: ["building", "no_basement", "safe"],
      steps: [
        "Immediately leave rooms with large windows (living room, bedroom).",
        "Go to the bathroom — thick walls, pipes, small window.",
        "Alternative — interior hallway, pantry, storage room.",
        "Lie on the floor along a load-bearing wall, face to the wall.",
        "Cover yourself with a mattress, blanket, pillows — protection from shrapnel.",
        "Stay away from doors — they can be blown off by the blast wave.",
        "DO NOT look out the window — glass shards are dangerous.",
        "Tape windows crosswise with tape — shards will hold together."
      ],
      warnings: [
        "Balconies and loggias are the most dangerous places — shrapnel flies through glass.",
        "The kitchen is dangerous due to gas and broken dishes.",
        "One aerated concrete wall DOES NOT protect — shrapnel penetrates it."
      ],
      tips: [
        "Remove heavy items from shelves in advance — they will fall during an explosion.",
        "Keep a first aid kit, water, flashlight, and radio in the shelter.",
        "The rule of three walls: the more walls between you and the blast, the better."
      ]
    },

    // ===== 3. SHELTER ON THE STREET =====
    {
      id: "shelter_street",
      title: "🚶 On the street — how to find shelter",
      description: "On the street you are most vulnerable. The main thing is don't run — find shelter and lie down.",
      conditions: { location: ["street"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10-30 seconds",
      yield_estimate: "Quick shelter",
      tags: ["street", "quick_shelter"],
      steps: [
        "Assess the situation: where is the nearest building, underground passage, park.",
        "DO NOT run in a straight line — move in zigzags toward shelter.",
        "Run into an entrance, store, or cafe — any enclosed space.",
        "If there are no buildings — lie on the ground, pressed against a curb or terrain irregularity.",
        "Cover your head with your hands, cover your ears.",
        "If there's a pit or trench nearby — use it.",
        "After things quiet down — wait 5-10 minutes, then move on.",
        "Don't cluster together — spread out 10-15 m apart."
      ],
      warnings: [
        "Do not hide under cars — they don't protect against blast waves.",
        "Do not stand near glass storefronts — shrapnel is dangerous.",
        "Glass storefronts are dangerous during explosions — stay away.",
        "Power lines — shrapnel can cut wires."
      ],
      tips: [
        "Remember the location of basements and bomb shelters on your route.",
        "Wear lace-up shoes — run in shoes that won't come off.",
        "If with a child — hold them close and cover them with your body."
      ]
    },

    // ===== 4. SHELTER IN A CAR =====
    {
      id: "shelter_car",
      title: "🚗 What to do in a car",
      description: "A car is NOT a shelter. Shrapnel pierces the body, the fuel tank ignites. Leave it.",
      conditions: { location: ["car"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "immediately",
      yield_estimate: "Temporary protection",
      tags: ["car", "vehicle"],
      steps: [
        "Stop immediately, NOT on the shoulder under power lines.",
        "GET OUT of the car — staying inside is deadly dangerous.",
        "Run 30-50 meters away from the car — risk of fire and tank explosion.",
        "Find shelter: ditch, curb, wall, pit.",
        "Lie on the ground, face down, hands over head.",
        "DO NOT return to the car until the threat is over.",
        "After an impact, the car may catch fire — stay away.",
        "If in traffic — leave the car, don't remove the keys (don't block the road for emergency vehicles)."
      ],
      warnings: [
        "The fuel tank explodes from shrapnel or sparks — keep your distance.",
        "Don't hide UNDER the car — it may catch fire or crush you in an explosion.",
        "A car is a target for drones. Don't stay in it for long.",
        "Metal amplifies shrapnel damage."
      ],
      tips: [
        "Take your phone and documents — the rest doesn't matter.",
        "If there's a bridge or overpass nearby — hiding under them is dangerous due to collapse.",
        "Don't start the engine if a drone is nearby — sound attracts attention."
      ]
    },

    // ===== 5. SHELTER IN THE FOREST =====
    {
      id: "shelter_forest",
      title: "🌲 In the forest or park — natural shelter",
      description: "The forest is good natural cover, especially in leafy seasons.",
      conditions: { location: ["forest"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-2 minutes",
      yield_estimate: "Natural cover",
      tags: ["forest", "nature", "cover"],
      steps: [
        "Run into dense vegetation — bushes, thickets, tall grass.",
        "Lie on the ground, press against a tree trunk or rock.",
        "Cover yourself with branches or leaves — camouflage.",
        "Don't wear bright colors (yellow, red) — they are visible from above.",
        "Try to stay quiet, freeze.",
        "If a drone flies past — don't raise your head for 2-3 minutes.",
        "After it passes — move along the shaded side.",
        "DO NOT hide under a lone tree — it can be a landmark."
      ],
      warnings: [
        "In the forest, it's important not to create smoke or use open fire.",
        "Dry grass and forest easily ignite from an explosion — fire risk.",
        "In winter, cover is worse — use snow depressions."
      ],
      tips: [
        "Study the route in advance — mark shelters on the map.",
        "Carry a whistle — it will attract rescuers' attention.",
        "Power bank and phone — the main things to report coordinates."
      ]
    },

    // ===== 6. EMERGENCY — NO SHELTER =====
    {
      id: "shelter_no_shelter_emergency",
      title: "⚠️ No shelter — emergency actions",
      description: "If there's no shelter and a drone is approaching — use any opportunity for protection.",
      conditions: { location: ["field"], shelter_type: ["none", "unknown"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "immediately",
      yield_estimate: "Temporary protection",
      tags: ["no_shelter", "emergency"],
      steps: [
        "DO NOT stand — lie face down on the ground.",
        "Cover your head with your hands, cover your ears.",
        "Press against a curb, ditch, or terrain irregularity.",
        "If you have a backpack or bag — put it on your head.",
        "Try to find a depression or pit.",
        "Don't move until the drone is gone.",
        "After it passes — quickly move toward buildings.",
        "Breathe evenly, don't make sudden movements."
      ],
      warnings: [
        "Open terrain is extremely dangerous — move in zigzags.",
        "Don't look at the drone — it may spot you by the glint of your eyes.",
        "Don't run in a straight line — it makes you an easy target."
      ],
      tips: [
        "Carry a whistle or flashlight — they will help attract rescuers' attention.",
        "Study the area in advance — know where you can take shelter.",
        "Stay calm — panic interferes with decision-making."
      ]
    },

    // ===== 7. UNIVERSAL RULES =====
    {
      id: "shelter_universal",
      title: "📋 Universal shelter rules",
      description: "The main rule of shelter — maximum obstacles between you and the source of the threat.",
      conditions: {},
      priority: 999,
      reliability: "high",
      time_estimate: "always",
      yield_estimate: "Knowledge",
      tags: ["universal", "rules"],
      steps: [
        "Rule of three walls: concrete wall + earth embankment + another wall = good protection.",
        "Look for shelter BEHIND terrain, not IN FRONT of it — the blast wave travels in a straight line.",
        "Lie down, don't stand — shrapnel flies at a height of 0.5–2 m.",
        "Cover your ears with your hands — concussion from the blast is dangerous for hearing.",
        "Open your mouth during the blast — equalizes pressure in your ears.",
        "DO NOT look at the blast — the light flash can damage your vision.",
        "DO NOT use the elevator — electricity may shut off.",
        "Stay in the shelter until the official all-clear."
      ],
      warnings: [
        "One aerated concrete wall DOES NOT protect — shrapnel penetrates it.",
        "Wooden houses burn and don't protect from shrapnel.",
        "Don't leave unless necessary — a second attack is possible."
      ],
      tips: [
        "Designate a 'gathering point' at home in advance — bathroom or hallway.",
        "Practice shelter drills with family — everyone should know the route.",
        "Keep in the shelter: water, first aid kit, flashlight, radio, documents.",
        "Tape windows crosswise with tape — shrapnel will hold together."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneShelterDataEn = droneShelterDataEn;