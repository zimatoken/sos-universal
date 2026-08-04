// === AUTO SECTION - BATTERY (ENGLISH) ===

const autoBatteryDataEn = {
  category: "battery",
  title: "🔋 Dead battery",
  description: "Battery problems",
  questions: [
    {
      id: "symptom",
      text: "What are the symptoms?",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Click when turning key", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence", tags: ["battery", "dead", "electrical"] }
      ]
    },
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
      id: "jump_start",
      title: "🔋 Jump start from another car",
      description: "If the battery is dead — jump starting from a running car will help",
      conditions: {
        symptom: ["click", "silence"]
      },
      tags: ["battery", "jump", "electrical", "common"],
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      steps: [
        "Find a car with a working battery",
        "Position cars so bumpers are close together",
        "Turn off both cars (ignition, lights)",
        "Connect terminals: positive to positive, negative to negative",
        "Start the donor car and let it run for 2-3 minutes",
        "Try to start your car",
        "After starting, let it run for 10-15 minutes",
        "Remove cables in reverse order: negative, then positive"
      ],
      warnings: [
        "Don't touch terminals while engine is running",
        "Watch polarity — wrong connection can damage electronics",
        "If there's smoke or smell from battery — don't jump start"
      ]
    }
  ]
};