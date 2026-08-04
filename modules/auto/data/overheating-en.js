// === AUTO SECTION - OVERHEATING (ENGLISH) ===

const autoOverheatingDataEn = {
  category: "overheating",
  title: "🌡️ Overheating",
  description: "Cooling system problems",
  questions: [
    {
      id: "symptom",
      text: "What are the symptoms?",
      type: "multi",
      options: [
        { id: "smoke", label: "💨 Smoke from hood", tags: ["overheating", "leak", "engine"] },
        { id: "smell", label: "👃 Gas smell", tags: ["fuel", "leak", "danger"] },
        { id: "warning_light", label: "⚠️ Warning light on dashboard", tags: ["sensor", "diagnostic", "check"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home/Garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "highway", label: "🛣️ Highway", tags: ["highway", "speed", "danger"] }
      ]
    }
  ],
  solutions: [
    {
      id: "coolant_check",
      title: "🌡️ Check and refill coolant",
      description: "When overheating, check coolant level in radiator",
      conditions: {
        symptom: ["smoke"]
      },
      tags: ["cooling", "radiator", "urgent", "critical"],
      priority: "fast",
      reliability: "high",
      time_estimate: "10-15 min",
      steps: [
        "Stop and turn off engine",
        "Let engine cool for 15-20 minutes",
        "Don't open radiator on hot engine!",
        "Check coolant level in expansion tank",
        "If level is low — refill to normal level",
        "Check for leaks under the car"
      ],
      warnings: [
        "NEVER open radiator cap on hot engine — steam can burn you",
        "Use only recommended coolant type",
        "If fluid disappears quickly — there's a leak, repair needed"
      ]
    }
  ]
};