// === AUTO SECTION - FLAT TIRE (ENGLISH) ===

const autoFlatTireDataEn = {
  category: "flat_tire",
  title: "🛞 Flat tire",
  description: "Wheel problems",
  questions: [
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home/Garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["public", "tools", "help"] }
      ]
    }
  ],
  solutions: [
    {
      id: "tire_change",
      title: "🛞 Change tire",
      description: "For flat tire, replace with spare",
      conditions: {},
      tags: ["tire", "wheel", "basic", "medium"],
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      steps: [
        "Stop on level hard surface",
        "Put in first gear and engage parking brake",
        "Place wheel chocks",
        "Loosen lug nuts on damaged wheel (1/2 turn)",
        "Lift car with jack",
        "Fully remove nuts and take off wheel",
        "Install spare wheel and tighten nuts by hand",
        "Lower car and tighten nuts in cross pattern with proper torque",
        "Check pressure in spare tire"
      ],
      warnings: [
        "Never crawl under car on jack",
        "Tighten nuts with proper torque — over-tightening is dangerous",
        "Check pressure in new tire before driving"
      ]
    }
  ]
};