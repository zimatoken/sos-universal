// modules/drone/data/en/shelter-en.js
// === MODULE: DRONES — SHELTER ===

const droneShelterDataEn = {
  category: "shelter",
  title: "🛡️ Shelter from Drones",
  description: "How and where to take shelter from a UAV to stay safe",

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
      conditions: { location: ["apartment", "street", "car", "field", "forest"] },
      options: [
        { id: "basement", label: "✅ Yes, a basement / cellar", tags: ["basement"] },
        { id: "bomb_shelter", label: "✅ Yes, a bomb shelter", tags: ["bomb_shelter"] },
        { id: "none", label: "❌ No, nothing", tags: ["no_shelter"] },
        { id: "unknown", label: "❓ I don't know", tags: ["unknown_shelter"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "How much time do you have until the potential threat?",
      conditions: { location: ["apartment", "street", "car", "field", "forest"] },
      options: [
        { id: "seconds", label: "⏱️ Seconds (drone is already close)", tags: ["seconds"] },
        { id: "minutes", label: "⏱️ Minutes (drone is approaching)", tags: ["minutes"] },
        { id: "plenty", label: "⏱️ Plenty of time (drone is far)", tags: ["plenty"] }
      ]
    },
    {
      id: "people",
      type: "single",
      text: "Who is with you?",
      conditions: { location: ["apartment", "street", "car", "field", "forest"] },
      options: [
        { id: "alone", label: "👤 Alone", tags: ["alone"] },
        { id: "family", label: "👨‍👩‍👧‍👦 With family / children", tags: ["family"] },
        { id: "group", label: "👥 Group of people", tags: ["group"] }
      ]
    },
    {
      id: "escape_route",
      type: "single",
      text: "Do you know the way to shelter?",
      conditions: { location: ["apartment", "street", "car", "field", "forest"] },
      options: [
        { id: "know", label: "✅ Yes, I know the route", tags: ["know"] },
        { id: "rough", label: "❓ Roughly", tags: ["rough"] },
        { id: "no_idea", label: "❌ No, I don't know", tags: ["no_idea"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. SHELTER IN APARTMENT WITH BASEMENT =====
    {
      id: "shelter_apartment_basement",
      title: "🏢 Shelter in an apartment with a basement",
      description: "A basement or bomb shelter is optimal protection from UAV strikes.",
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
        "Move deeper into the basement, away from the entrance and windows.",
        "Sit against the wall, away from the entrance.",
        "If there are children — keep them close, calm them down.",
        "Stay in shelter until the official all-clear.",
        "Don't leave unnecessarily — a secondary threat is possible."
      ],
      warnings: [
        "Do not use the elevator — power may go out.",
        "Do not enter the basement with a gas cylinder — explosion risk.",
        "Do not stand near basement windows — shrapnel can come through ventilation."
      ]
    },

    // ===== 2. SHELTER IN APARTMENT WITHOUT BASEMENT =====
    {
      id: "shelter_apartment_no_basement",
      title: "🏠 Shelter in an apartment without a basement",
      description: "Without a basement, find a place with minimal windows and load-bearing walls. The bathroom is the best option.",
      conditions: { location: ["apartment"], shelter_type: ["none", "unknown"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "immediately",
      yield_estimate: "Good protection",
      tags: ["building", "no_basement", "safe"],
      steps: [
        "Immediately leave rooms with large windows (living room, bedroom).",
        "Go to the bathroom — thick walls, pipes, small window.",
        "Alternative — interior hallway, closet, pantry.",
        "Lie on the floor along a load-bearing wall, facing the wall.",
        "Cover yourself with a mattress, blanket, pillows — protection from shrapnel.",
        "Move away from doors — they can be blown in by the blast wave.",
        "DO NOT look out the window — glass shards are dangerous.",
        "Tape windows in a cross pattern — shards will hold together."
      ],
      warnings: [
        "Balconies and loggias are the most dangerous places — shrapnel flies through glass.",
        "The kitchen is dangerous due to gas and broken glass/ceramics.",
        "A single aerated concrete wall does NOT protect — shrapnel penetrates it."
      ]
    },

    // ===== 3. SHELTER ON THE STREET =====
    {
      id: "shelter_street",
      title: "🚶 On the street — how to find shelter",
      description: "On the street you are most vulnerable. The main thing is not to run blindly, but find cover and lie down.",
      conditions: { location: ["street"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10-30 seconds",
      yield_estimate: "Quick shelter",
      tags: ["street", "quick_shelter"],
      steps: [
        "Assess the situation: where is the nearest building, underground passage, park.",
        "DO NOT run in a straight line — move in zigzags toward cover.",
        "Run into an entrance, store, or cafe — any enclosed space.",
        "If no buildings — lie on the ground, pressed against a curb or terrain irregularity.",
        "Cover your head with your hands, protect your ears.",
        "If there is a ditch or trench nearby — use it.",
        "After things quiet down — wait 5-10 minutes, then move on.",
        "Don't cluster together — spread out 10–15 m apart."
      ],
      warnings: [
        "Do not hide under cars — they don't protect against blast waves.",
        "Do not stand near glass storefronts — shards are dangerous.",
        "Glass storefronts are dangerous during explosions. Stay away.",
        "Power lines — shrapnel can cut wires."
      ]
    },

    // ===== 4. SHELTER IN A CAR =====
    {
      id: "shelter_car",
      title: "🚗 In a car — what to do",
      description: "A car is NOT shelter. Shrapnel penetrates the body, the fuel tank can ignite. Leave it.",
      conditions: { location: ["car"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "immediately",
      yield_estimate: "Temporary protection",
      tags: ["car", "vehicle"],
      steps: [
        "Immediately stop, NOT on the shoulder under power lines.",
        "EXIT the car — staying inside is deadly.",
        "Run 30–50 meters away from the car — risk of fire and fuel tank explosion.",
        "Find shelter: ditch, curb, wall, hole.",
        "Lie on the ground, face down, hands over your head.",
        "DO NOT return to the car until the threat is over.",
        "After an impact, the car may catch fire — stay away.",
        "If in traffic — leave the car, don't remove the keys (don't block the road for ambulances)."
      ],
      warnings: [
        "The fuel tank can explode from shrapnel or sparks — keep your distance.",
        "Do not hide UNDER the car — it can catch fire or crush you in an explosion.",
        "A car is a target for drones. Don't stay in it long.",
        "Metal amplifies shrapnel damage."
      ]
    },

    // ===== 5. SHELTER IN THE FOREST =====
    {
      id: "shelter_forest",
      title: "🌲 In a forest or park — natural shelter",
      description: "Forest is good natural cover, especially during the leafy season.",
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
        "Don't wear bright colors (yellow, red) — they're visible from above.",
        "Stay quiet, freeze.",
        "If a drone passes by — don't raise your head for 2-3 minutes.",
        "After it passes — move along the shaded side.",
        "DO NOT hide under a lone standing tree — it can be a landmark."
      ],
      warnings: [
        "In the forest, don't create smoke or use open flames.",
        "Dry grass and forest catch fire easily from explosions — fire risk.",
        "In winter, cover is worse — use snow hollows."
      ]
    },

    // ===== 6. EMERGENCY — NO SHELTER =====
    {
      id: "shelter_no_shelter_emergency",
      title: "⚠️ No shelter — emergency actions",
      description: "If there is no shelter and a drone is approaching — use any opportunity for protection.",
      conditions: { location: ["field"], shelter_type: ["none", "unknown"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "immediately",
      yield_estimate: "Temporary protection",
      tags: ["no_shelter", "emergency"],
      steps: [
        "DON'T stand — lie on the ground face down.",
        "Cover your head with your hands, protect your ears.",
        "Press against a curb, ditch, or terrain irregularity.",
        "If you have a backpack or bag — put it on your head.",
        "Try to find a depression or hole.",
        "Don't move until the drone leaves.",
        "After it passes — quickly move toward buildings.",
        "Breathe evenly, don't make sudden movements."
      ],
      warnings: [
        "Open areas are extremely dangerous — move in zigzags.",
        "Don't look at the drone — it may spot you by the reflection in your eyes.",
        "Don't run in a straight line — it makes you an easy target."
      ]
    },

    // ===== 7. UNIVERSAL RULES (FALLBACK) =====
    {
      id: "shelter_universal",
      title: "📋 Universal shelter rules",
      description: "The main rule of shelter — maximum barriers between you and the threat source.",
      conditions: { location: ["nonexistent"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "always",
      yield_estimate: "Knowledge",
      tags: ["universal", "rules"],
      steps: [
        "The rule of three walls: concrete wall + earth embankment + another wall = good protection.",
        "Look for shelter BEHIND terrain, not IN FRONT of it — blast waves travel in straight lines.",
        "Lie down, don't stand — shrapnel flies at 0.5–2 m height.",
        "Cover your ears with your hands — blast concussion is dangerous for hearing.",
        "Open your mouth during an explosion — equalizes pressure in the ears.",
        "DON'T look at the explosion — the flash can damage your eyesight.",
        "DON'T use the elevator — power may go out.",
        "Stay in shelter until the official all-clear."
      ],
      warnings: [
        "A single aerated concrete wall does NOT protect — shrapnel penetrates it.",
        "Wooden houses burn and don't protect from shrapnel.",
        "Don't leave unnecessarily — a secondary threat is possible."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneShelterDataEn = droneShelterDataEn;
