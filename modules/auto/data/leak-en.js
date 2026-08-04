// === AUTO SECTION - LEAK (ENGLISH) ===

const autoLeakDataEn = {
  category: "leak",
  title: "💧 Fluid leak",
  description: "Technical fluid leaks",
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
      id: "call_help",
      title: "📞 Call tow truck",
      description: "If you can't fix the problem — call for help",
      conditions: {
        location: ["road", "highway"]
      },
      tags: ["emergency", "help", "safe", "universal"],
      priority: "fast",
      reliability: "high",
      time_estimate: "30-60 min",
      steps: [
        "Turn on hazard lights",
        "Place emergency triangle 15 meters behind",
        "Move to safe distance from traffic",
        "Call tow service or insurance",
        "Report exact location and problem",
        "Stay in safe place until help arrives"
      ],
      warnings: [
        "Don't stand on the roadway",
        "Wear reflective vest at night",
        "Be especially careful on highways"
      ]
    }
  ]
};window.autoLeakDataEn = autoLeakDataEn;
