// modules/drone/data/en/shelter-en.js
// === MODULE: DRONES — SHELTER ===
const shelterDataEn = {
  category: "shelter",
  title: "🛡️ Drone Shelter",
  description: "How and where to take cover from a drone to stay safe",

  questions: [
    {
      id: "location",
      type: "single",
      text: "Where are you currently?",
      options: [
        { id: "building", label: "🏢 In a building / apartment", tags: ["building"] },
        { id: "street", label: "🚶 On the street / in the yard", tags: ["street"] },
        { id: "car", label: "🚗 In a car", tags: ["car"] },
        { id: "field", label: "🌾 In a field / open area", tags: ["field"] },
        { id: "forest", label: "🌲 In a forest / park", tags: ["forest"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "How much time do you have before a possible threat?",
      options: [
        { id: "seconds", label: "⏱️ Seconds (drone is already close)", tags: ["seconds"] },
        { id: "minutes", label: "⏱️ Minutes (drone is approaching)", tags: ["minutes"] },
        { id: "plenty", label: "⏱️ Plenty of time (drone is far away)", tags: ["plenty"] }
      ]
    },
    {
      id: "shelter_type",
      type: "single",
      text: "Is there a basement or bomb shelter nearby?",
      options: [
        { id: "basement", label: "✅ Yes, a basement / cellar", tags: ["basement"] },
        { id: "bomb_shelter", label: "✅ Yes, a bomb shelter", tags: ["bomb_shelter"] },
        { id: "none", label: "❌ No, nothing available", tags: ["no_shelter"] },
        { id: "unknown", label: "❓ I don't know", tags: ["unknown_shelter"] }
      ]
    },
    {
      id: "people",
      type: "single",
      text: "Who is with you?",
      options: [
        { id: "alone", label: "👤 Alone", tags: ["alone"] },
        { id: "family", label: "👨‍👩‍👧‍👦 Family / children", tags: ["family"] },
        { id: "group", label: "👥 A group of people", tags: ["group"] }
      ]
    },
    {
      id: "escape_route",
      type: "single",
      text: "Do you know the route to shelter?",
      options: [
        { id: "know", label: "✅ Yes, I know the route", tags: ["know"] },
        { id: "rough", label: "❓ Approximately", tags: ["rough"] },
        { id: "no_idea", label: "❌ No, I don't know", tags: ["no_idea"] }
      ]
    }
  ],

  solutions: [
    {
      id: "building_shelter",
      title: "🏢 Shelter in a building — safety rules",
      description: "A building is a good shelter, but rules must be followed.",
      conditions: { location: ["building"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 minutes",
      yield_estimate: "Safe shelter",
      tags: ["building", "shelter", "safe"],
      steps: [
        "Enter the nearest building. Close the door behind you.",
        "Move away from windows and glass doors — at least 3-4 meters.",
        "Close curtains or blinds — blackout reduces visibility.",
        "Find an interior room without windows (hallway, bathroom, storage).",
        "If there is a basement — go down.",
        "Crouch or lie on the floor — reduce your silhouette.",
        "Do not use open flames, do not turn on bright lights.",
        "Stay in shelter for at least 10-15 minutes after the last contact."
      ],
      warnings: [
        "Glass facades and panoramic windows are dangerous during blast waves.",
        "Do not stand by the entrance door — it could be damaged.",
        "In high-rise buildings, choose a floor below the third — higher floors mean higher risk."
      ]
    },
    {
      id: "basement_shelter",
      title: "⬇️ Basement or bomb shelter — best protection",
      description: "A basement is the safest place during a drone attack or bombardment.",
      conditions: { shelter_type: ["basement", "bomb_shelter"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Maximum protection",
      tags: ["basement", "bomb_shelter", "safe"],
      steps: [
        "Immediately go down to the basement or bomb shelter.",
        "Close the door behind you (if available).",
        "Turn on a flashlight — the power may go out.",
        "Sit against a wall, away from the entrance.",
        "If there are children — keep them close, calm them down.",
        "Stay in shelter until the all-clear is given.",
        "Do not leave unless necessary — a secondary threat is possible."
      ],
      warnings: [
        "Do not use the elevator — the power may go out.",
        "Do not enter the basement with a gas cylinder — explosive hazard.",
        "If the basement is damp — find a dry spot, use a mat."
      ]
    },
    {
      id: "street_shelter",
      title: "🚶 On the street — how to find shelter",
      description: "If you're on the street, it's important to find a safe place quickly.",
      conditions: { location: ["street"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10-30 seconds",
      yield_estimate: "Quick shelter",
      tags: ["street", "quick_shelter"],
      steps: [
        "Assess the situation: where is the nearest building, underground passage, park, dense vegetation.",
        "Don't stand still — move in a zigzag toward shelter.",
        "Run into a doorway, store, or café — any enclosed space.",
        "If no buildings — lie on the ground, pressed against a curb or terrain depression.",
        "Cover your head with your hands, cover your ears.",
        "If there's a ditch or trench nearby — use it.",
        "After things calm down — wait 5-10 minutes, then move on."
      ],
      warnings: [
        "Do not hide under cars — they don't protect against blast waves.",
        "Do not stand near glass shop windows — shards are dangerous.",
        "Do not run in a straight line — move in a zigzag."
      ]
    },
    {
      id: "car_shelter",
      title: "🚗 In a car — what to do",
      description: "A car is a poor shelter but can provide temporary protection.",
      conditions: { location: ["car"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "immediately",
      yield_estimate: "Temporary protection",
      tags: ["car", "vehicle"],
      steps: [
        "If the drone is close — immediately exit the car and find a building or shelter.",
        "If you can't leave — close the windows, duck below window level.",
        "Turn off the engine — noise may attract attention.",
        "Cover yourself with a light cloth or jacket — camouflage.",
        "In case of explosion — open doors (so they don't jam) and lie on the floor.",
        "As soon as possible — leave the car and run to shelter."
      ],
      warnings: [
        "Cars are a target for drones. Do not stay in them for long.",
        "Metal amplifies shrapnel damage.",
        "Do not start the engine if a drone is nearby — sound attracts attention."
      ]
    },
    {
      id: "forest_shelter",
      title: "🌲 In a forest or park — natural shelter",
      description: "A forest is a good natural shelter, especially in leafy seasons.",
      conditions: { location: ["forest"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-2 minutes",
      yield_estimate: "Natural cover",
      tags: ["forest", "nature", "cover"],
      steps: [
        "Run into dense vegetation — bushes, thickets, tall grass.",
        "Lie on the ground, pressed against a tree trunk or rock.",
        "Cover yourself with branches or leaves — camouflage.",
        "Do not wear bright colors (yellow, red) — they are visible from the air.",
        "Stay quiet, freeze.",
        "If the drone passes by — don't raise your head for 2-3 minutes.",
        "After it passes — move along the shaded side."
      ],
      warnings: [
        "In the forest, don't create smoke or use open flames.",
        "Don't hide under a lone tree — it could be a landmark.",
        "In winter, shelter is worse — use snow depressions."
      ]
    },
    {
      id: "no_shelter_emergency",
      title: "⚠️ No shelter — what to do in an emergency",
      description: "If there is no shelter and a drone is approaching — use any opportunity for protection.",
      conditions: { shelter_type: ["no_shelter", "unknown_shelter"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "immediately",
      yield_estimate: "Temporary protection",
      tags: ["no_shelter", "emergency"],
      steps: [
        "DO NOT stand — lie face down on the ground.",
        "Cover your head with your hands, cover your ears.",
        "Press against a curb, ditch, or terrain depression.",
        "If you have a backpack or bag — put it on your head.",
        "Try to find a hollow or hole.",
        "Don't move until the drone leaves.",
        "After it passes — quickly move toward buildings."
      ],
      warnings: [
        "Open terrain is extremely dangerous — move in a zigzag.",
        "Don't look at the drone — it may spot you by the glint of your eyes.",
        "Breathe steadily, don't make sudden movements."
      ]
    }
  ]
};

window.shelterDataEn = shelterDataEn;
console.log('✅ shelterDataEn loaded');