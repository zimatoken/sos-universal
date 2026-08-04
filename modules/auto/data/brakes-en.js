// === AUTO SECTION - BRAKES (ENGLISH) ===

const autoBrakesDataEn = {
  category: "brakes",
  title: "🛑 Brake problems",
  description: "Critical brake system problems",
  questions: [
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
      id: "brake_fluid",
      title: "🛑 Check brake fluid",
      description: "For brake problems, check fluid level",
      conditions: {},
      tags: ["brakes", "safety", "critical", "urgent"],
      priority: "fast",
      reliability: "high",
      time_estimate: "5 min",
      steps: [
        "Find brake fluid reservoir (usually at driver's side)",
        "Check fluid level — should be between MIN and MAX",
        "If level is low — refill brake fluid",
        "Check for leaks under the car",
        "Test brakes at safe speed"
      ],
      warnings: [
        "Don't continue driving with brake problems",
        "Use only recommended fluid type",
        "If pedal is soft or spongy — stop immediately"
      ]
    }
  ]
};