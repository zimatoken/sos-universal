// modules/drone/data/en/shelter-en.js
// === MODULE: DRONE — SHELTER ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "drone",
    category: "shelter",
    version: "2.0.0",
    lang: "en",
    title: "🛡️ Drone Shelter",
    description: "How and where to take shelter from a drone — in buildings, basements, outdoors, in cars",
    icon: "🛡️",
    color: "#ea580c"
  },

  questions: [
    {
      id: "location",
      type: "single",
      text: "Where are you right now?",
      options: [
        { id: "apartment", label: "🏢 In a building / apartment", tags: ["building"] },
        { id: "entrance", label: "🚪 In an entrance / stairwell", tags: ["entrance"] },
        { id: "basement_location", label: "🏚️ In a basement / bomb shelter", tags: ["basement_loc"] },
        { id: "underground", label: "🚇 In an underground passage", tags: ["underground"] },
        { id: "parking", label: "🅿️ In a parking garage", tags: ["parking"] },
        { id: "street", label: "🚶 On the street / in the yard", tags: ["street"] },
        { id: "car", label: "🚗 In a car", tags: ["car"] },
        { id: "field", label: "🌾 In a field / open area", tags: ["field"] },
        { id: "forest", label: "🌲 In a forest / park", tags: ["forest"] }
      ]
    },
    {
      id: "building_type",
      type: "single",
      text: "What type of building?",
      conditions: { location: ["building", "entrance"] },
      options: [
        { id: "concrete", label: "🏗️ Concrete / monolithic (strongest)", tags: ["concrete"] },
        { id: "brick", label: "🧱 Brick (medium protection)", tags: ["brick"] },
        { id: "wooden", label: "🪵 Wooden / frame (weak)", tags: ["wooden"] },
        { id: "unknown_building", label: "❓ Don't know", tags: ["unknown_building"] }
      ]
    },
    {
      id: "has_windows",
      type: "single",
      text: "Are there windows where you are?",
      conditions: { location: ["building", "entrance", "basement_loc", "parking"] },
      options: [
        { id: "windows_yes", label: "✅ Yes, there are windows", tags: ["windows_yes"] },
        { id: "windows_no", label: "❌ No windows", tags: ["windows_no"] },
        { id: "windows_small", label: "🪟 Small / narrow windows", tags: ["windows_small"] }
      ]
    },
    {
      id: "shelter_type",
      type: "single",
      text: "Is there a basement or bomb shelter nearby?",
      conditions: { location: ["building", "street", "car", "field", "forest", "entrance"] },
      options: [
        { id: "basement", label: "✅ Yes, a basement / cellar", tags: ["basement"] },
        { id: "bomb_shelter", label: "✅ Yes, a bomb shelter", tags: ["bomb_shelter"] },
        { id: "none", label: "❌ No, nothing", tags: ["no_shelter"] },
        { id: "unknown_shelter", label: "❓ Don't know", tags: ["unknown_shelter"] }
      ]
    },
    {
      id: "shelter_condition",
      type: "single",
      text: "What condition is the shelter in?",
      conditions: { location: ["basement_loc", "underground", "parking"] },
      options: [
        { id: "good", label: "✅ Good, clean, with light", tags: ["shelter_good"] },
        { id: "poor", label: "⚠️ Dirty, damp, no light", tags: ["shelter_poor"] },
        { id: "blocked", label: "🚫 Blocked / collapsed", tags: ["shelter_blocked"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "How much time do you have?",
      conditions: { location: ["building", "entrance", "basement_loc", "underground", "parking", "street", "car", "field", "forest"] },
      options: [
        { id: "seconds", label: "⏱️ Seconds (drone is close)", tags: ["seconds"] },
        { id: "minutes", label: "⏱️ Minutes (drone approaching)", tags: ["minutes"] },
        { id: "plenty", label: "⏱️ Plenty of time (drone is far)", tags: ["plenty"] }
      ]
    },
    {
      id: "people",
      type: "single",
      text: "Who is with you?",
      conditions: { location: ["building", "entrance", "basement_loc", "underground", "parking", "street", "car", "field", "forest"] },
      options: [
        { id: "alone", label: "👤 Alone", tags: ["alone"] },
        { id: "family", label: "👨‍👩‍👧‍👦 Family / children", tags: ["family"] },
        { id: "group", label: "👥 Group of people", tags: ["group"] }
      ]
    },
    {
      id: "escape_route",
      type: "single",
      text: "Do you know the route to shelter?",
      conditions: { location: ["building", "entrance", "basement_loc", "underground", "parking", "street", "car", "field", "forest"] },
      options: [
        { id: "know", label: "✅ Yes, I know the route", tags: ["know"] },
        { id: "rough", label: "❓ Roughly", tags: ["rough"] },
        { id: "no_idea", label: "❌ No, I don't know", tags: ["no_idea"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. SHELTER IN BOMB SHELTER / BASEMENT
    // ============================================================
    {
      id: "shelter_bomb_shelter",
      title: "🏚️ Shelter in bomb shelter / basement — maximum protection",
      description: "Bomb shelters and basements are the best shelters from UAV strikes. Use them correctly.",
      conditions: { location: ["basement_loc", "underground"], shelter_condition: ["shelter_good"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Maximum protection",
      tags: ["bomb_shelter", "basement", "safe"],
      steps: [
        "Immediately enter the bomb shelter / basement.",
        "Close the door behind you, but don't lock it (so rescuers can enter).",
        "Move away from the entrance and walls that touch the ground above.",
        "Sit or lie against an interior wall, away from doors and ventilation.",
        "If you have children — keep them close, calm them down, explain they are safe.",
        "Check ventilation: there should be fresh air flow.",
        "Prepare a flashlight and water.",
        "Stay in shelter until the official all-clear.",
        "Don't leave unless necessary — a second attack is possible."
      ],
      warnings: [
        "DON'T lock the door — you could trap yourself.",
        "DON'T smoke in the shelter — oxygen may run out.",
        "DON'T stand near ventilation — shrapnel can fly through it.",
        "DON'T ignore the smell of gas — immediately report to rescuers."
      ]
    },

    // ============================================================
    // 2. SHELTER IN UNDERGROUND PASSAGE
    // ============================================================
    {
      id: "shelter_underground_passage",
      title: "🚇 Shelter in underground passage",
      description: "An underground passage is a good shelter, but there are nuances. Concrete walls and ceilings protect from shrapnel.",
      conditions: { location: ["underground"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Good protection",
      tags: ["underground", "passage", "safe"],
      steps: [
        "Enter the underground passage. Move away from entrances and stairs.",
        "If there are columns — stand behind them (they will shield from shrapnel).",
        "Sit or lie against the wall, away from entrances.",
        "If you have children — keep them close, calm them down.",
        "Don't go to the surface until the all-clear.",
        "If the passage is deep (>5 m) — protection is almost like a bomb shelter.",
        "In case of a surface explosion — open your mouth to equalize pressure."
      ],
      warnings: [
        "DON'T stand near entrances — highest risk from blast waves.",
        "DON'T use an underground passage if there is a risk of flooding or smoke.",
        "DON'T run through the passage — you may fall and injure yourself."
      ]
    },

    // ============================================================
    // 3. SHELTER IN PARKING GARAGE
    // ============================================================
    {
      id: "shelter_parking_garage",
      title: "🅿️ Shelter in parking garage / garage",
      description: "A concrete parking garage is a good shelter. But there is a risk of cars catching fire and smoke accumulation.",
      conditions: { location: ["parking"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Good protection",
      tags: ["parking", "garage", "safe"],
      steps: [
        "Immediately enter the parking garage. Move away from the entrance.",
        "Stand behind a concrete column or solid wall.",
        "If there is an underground floor — go lower (better protection).",
        "Sit on the floor, away from cars (they may catch fire).",
        "If there are others — don't cluster, spread out behind different columns.",
        "Stay in shelter until the all-clear.",
        "If you smell smoke or gas — leave through the emergency exit."
      ],
      warnings: [
        "DON'T stand near cars — they may explode.",
        "DON'T use the elevator in the parking garage — power may be cut.",
        "DON'T stay on the top floor of an open parking garage — it doesn't protect.",
        "DON'T block exits — you may trap yourself."
      ]
    },

    // ============================================================
    // 4. SHELTER IN APARTMENT WITH BASEMENT
    // ============================================================
    {
      id: "shelter_apartment_basement",
      title: "🏢 Shelter in apartment + basement",
      description: "If you have time — go down to the basement. It's the best shelter.",
      conditions: { location: ["building"], shelter_type: ["basement", "bomb_shelter"], time: ["minutes", "plenty"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Maximum protection",
      tags: ["building", "basement", "safe"],
      steps: [
        "Immediately go down to the basement / bomb shelter.",
        "Take with you: phone, documents, first aid kit, water, warm clothes.",
        "DON'T use the elevator — use the stairs.",
        "Close the basement door behind you, but don't lock it.",
        "Move to the back of the basement, away from the entrance and windows.",
        "Sit against a wall, away from the entrance.",
        "If you have children — keep them close, calm them down.",
        "Stay in shelter until the official all-clear.",
        "Don't leave unless necessary — a second attack is possible."
      ],
      warnings: [
        "Don't use the elevator — power may be cut.",
        "Don't enter the basement with a gas cylinder — explosive.",
        "Don't stand near basement windows — shrapnel can fly through ventilation."
      ]
    },

    // ============================================================
    // 5. SHELTER IN APARTMENT WITHOUT BASEMENT
    // ============================================================
    {
      id: "shelter_apartment_no_basement",
      title: "🏠 Shelter in apartment without basement",
      description: "Without a basement, find a place with minimal windows and load-bearing walls. The bathroom is the best option.",
      conditions: { location: ["building"], shelter_type: ["none", "unknown_shelter"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "immediately",
      yield_estimate: "Good protection",
      tags: ["building", "no_basement", "safe"],
      steps: [
        "Immediately leave rooms with large windows (living room, bedroom).",
        "Go to the bathroom — thick walls, pipes, small window.",
        "Alternative — interior corridor, storage room, closet.",
        "Lie on the floor along a load-bearing wall, face to the wall.",
        "Cover yourself with a mattress, blanket, pillows — protection from shrapnel.",
        "Move away from doors — they can be blown in by the blast wave.",
        "DON'T look out the window — glass shards are dangerous.",
        "Tape windows crosswise — shards will hold together."
      ],
      warnings: [
        "Balconies and loggias are the most dangerous places — glass shards.",
        "The kitchen is dangerous due to gas and broken dishes.",
        "One aerated concrete wall does NOT protect — shrapnel penetrates it."
      ]
    },

    // ============================================================
    // 6. SHELTER IN ENTRANCE / STAIRWELL
    // ============================================================
    {
      id: "shelter_entrance",
      title: "🚪 Shelter in entrance / stairwell",
      description: "An entrance is better than an open street, but worse than a basement. Find protection.",
      conditions: { location: ["entrance"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "immediately",
      yield_estimate: "Medium protection",
      tags: ["entrance", "stairwell", "safe"],
      steps: [
        "Enter the entrance. If there is a basement — go down.",
        "If no basement — go up to the 2nd–3rd floor, stand in a corner of the stairwell.",
        "Lie on the floor, cover yourself with clothing or a bag.",
        "DON'T stand near windows on the stairs — shrapnel.",
        "If there is an interior wall without windows — stand against it.",
        "Don't block the passage — others may also be seeking shelter.",
        "Stay in the entrance until the all-clear."
      ],
      warnings: [
        "DON'T stay on the first floor near the entrance — least protection.",
        "DON'T stand near windows on the stairs — shrapnel.",
        "DON'T run down the stairs in panic — you may fall."
      ]
    },

    // ============================================================
    // 7. SHELTER ON THE STREET
    // ============================================================
    {
      id: "shelter_street",
      title: "🚶 Outside — how to find shelter",
      description: "Outside you are most vulnerable. Don't run — find shelter and lie down.",
      conditions: { location: ["street"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "10–30 seconds",
      yield_estimate: "Quick shelter",
      tags: ["street", "quick_shelter"],
      steps: [
        "Assess the situation: where is the nearest building, underground passage, park.",
        "DON'T run in a straight line — move zigzag to shelter.",
        "Run into an entrance, store, or cafe — any enclosed space.",
        "If no buildings — lie on the ground, pressed against a curb or terrain.",
        "Cover your head with your hands, cover your ears.",
        "If there is a pit or ditch nearby — use it.",
        "After it goes quiet — wait 5–10 minutes, then move on.",
        "Don't cluster — spread out 10–15 meters apart."
      ],
      warnings: [
        "Don't hide under cars — they don't protect from blast waves.",
        "Don't stand near glass display windows — shards are dangerous.",
        "Glass storefronts are dangerous during explosions. Stay away.",
        "Power lines — shrapnel can cut wires."
      ]
    },

    // ============================================================
    // 8. SHELTER IN A CAR
    // ============================================================
    {
      id: "shelter_car",
      title: "🚗 In a car — what to do",
      description: "A car is NOT a shelter. Shrapnel pierces the body, the fuel tank ignites. Leave it.",
      conditions: { location: ["car"] },
      scoring: { priority: "fast", reliability: "low" },
      time_estimate: "immediately",
      yield_estimate: "Temporary protection",
      tags: ["car", "vehicle"],
      steps: [
        "Immediately stop, NOT on the shoulder under power lines.",
        "GET OUT of the car — staying inside is deadly.",
        "Run 30–50 meters from the car — risk of fire and explosion.",
        "Find shelter: ditch, curb, wall, pit.",
        "Lie on the ground, face down, hands behind your head.",
        "DON'T return to the car until the threat is over.",
        "After a strike, the car may catch fire — stay away.",
        "If in traffic — leave the car, don't take the keys out."
      ],
      warnings: [
        "The fuel tank explodes from shrapnel or sparks — keep your distance.",
        "Don't hide UNDER the car — it may catch fire.",
        "A car is a drone target. Don't stay in it for long.",
        "Metal increases shrapnel damage."
      ]
    },

    // ============================================================
    // 9. SHELTER IN THE FOREST
    // ============================================================
    {
      id: "shelter_forest",
      title: "🌲 In forest / park — natural shelter",
      description: "Forest is good natural shelter, especially in leafy seasons.",
      conditions: { location: ["forest"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Natural shelter",
      tags: ["forest", "nature", "cover"],
      steps: [
        "Run into dense vegetation — bushes, thickets, tall grass.",
        "Lie on the ground, press against a tree trunk or rock.",
        "Cover yourself with branches or leaves — camouflage.",
        "Don't wear bright colors (yellow, red) — visible from the air.",
        "Try to be quiet, freeze.",
        "If the drone flies past — don't raise your head for 2–3 minutes.",
        "After it passes — move along the shaded side.",
        "DON'T hide under a lone tree — it may be a landmark."
      ],
      warnings: [
        "In the forest, don't create smoke or use open flames.",
        "Dry grass and forest easily ignite from explosions — fire risk.",
        "In winter, shelter is worse — use snow depressions."
      ]
    },

    // ============================================================
    // 10. SHELTER WITH CHILDREN
    // ============================================================
    {
      id: "shelter_with_children",
      title: "🧒 Shelter with children — specifics",
      description: "Children need special protection. Calm them down and keep them close.",
      conditions: { location: ["building", "entrance", "basement_loc", "underground", "parking", "street"], people: ["family"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Children's safety",
      tags: ["children", "family", "safety"],
      steps: [
        "Speak calmly to children, don't panic. Children copy your behavior.",
        "Hold small children in your arms or by the hand. Don't let go.",
        "Explain that you're going to a safe place.",
        "When moving — keep children between you and the wall (protection).",
        "In shelter — sit children in the center, cover them with your belongings.",
        "If you have time — give children water and calm them down.",
        "Don't leave children unattended for a second."
      ],
      warnings: [
        "DON'T leave children unattended for a second.",
        "DON'T run with children across open terrain — find shelter.",
        "DON'T panic in front of children — it scares them."
      ]
    },

    // ============================================================
    // 11. SHELTER DURING AN EXPLOSION
    // ============================================================
    {
      id: "shelter_during_explosion",
      title: "💥 If an explosion has already occurred — actions",
      description: "The explosion has already happened. Your actions after are critical.",
      conditions: { time: ["seconds"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Survival after blast",
      tags: ["explosion", "survival", "post_blast"],
      steps: [
        "If an explosion occurs nearby — drop face down, open your mouth (equalize pressure).",
        "Cover your head with your hands, cover your ears.",
        "After explosion: don't stand up immediately — wait 10–15 seconds for possible secondary blasts.",
        "Check yourself for injuries. Stop bleeding.",
        "Look around: is there a risk of collapse, fire.",
        "If the building is damaged — leave through the emergency exit.",
        "If you're in shelter — stay until you're sure it's safe.",
        "Help the injured if possible."
      ],
      warnings: [
        "DON'T stand up immediately after an explosion — there may be secondary blasts.",
        "DON'T run toward the explosion site — dangerous.",
        "DON'T ignore pain — check yourself for injuries."
      ]
    },

    // ============================================================
    // 12. EXIT FROM SHELTER
    // ============================================================
    {
      id: "shelter_exit",
      title: "🚪 Exit from shelter — when and how",
      description: "You need to leave shelter correctly to avoid being hit by a secondary attack.",
      conditions: { location: ["building", "entrance", "basement_loc", "underground", "parking"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "varies",
      yield_estimate: "Safe exit",
      tags: ["exit", "shelter", "evacuation"],
      steps: [
        "Wait for the official all-clear (radio, SMS, rescuers).",
        "Don't leave if you hear explosions or sirens.",
        "Before leaving: listen, look through the peephole.",
        "Leave quickly but without panic. Help children and elderly.",
        "Don't use the elevator — only stairs.",
        "Outside: move away from the building 50+ meters.",
        "If the building is damaged — don't return until cleared by rescuers.",
        "Inform rescuers if anyone remains in the shelter."
      ],
      warnings: [
        "DON'T leave before the all-clear — dangerous.",
        "DON'T use the elevator — power may be cut.",
        "DON'T return to the shelter for belongings.",
        "DON'T run toward the explosion site — dangerous."
      ]
    },

    // ============================================================
    // 13. UNIVERSAL SHELTER RULES
    // ============================================================
    {
      id: "shelter_universal",
      title: "📋 Universal shelter rules",
      description: "The main rule of sheltering is maximum obstacles between you and the threat source.",
      conditions: { location: ["field"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "always",
      yield_estimate: "Knowledge",
      tags: ["universal", "rules"],
      steps: [
        "Rule of three walls: concrete wall + earth embankment + another wall = good protection.",
        "Seek shelter BEHIND terrain, not IN FRONT of it — blast wave travels in a straight line.",
        "Lie down, don't stand — shrapnel flies at 0.5–2 m height.",
        "Cover your ears with your hands — concussion from blast is dangerous to hearing.",
        "Open your mouth during an explosion — equalizes pressure in the ears.",
        "DON'T look at the explosion — flash can damage your vision.",
        "DON'T use the elevator — power may be cut.",
        "Stay in shelter until the official all-clear."
      ],
      warnings: [
        "One aerated concrete wall does NOT protect — shrapnel penetrates it.",
        "Wooden houses burn and don't protect from shrapnel.",
        "Don't leave unnecessarily — a secondary threat is possible."
      ]
    }
  ]
});