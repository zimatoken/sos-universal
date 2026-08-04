// === AUTO SECTION (ENGLISH) ===
// Separate categories for each problem

const autoWontStartDataEn = {
  category: "wont_start",
  title: "🔌 Won't start",
  description: "Engine starting problems",
  questions: [
    {
      id: "symptom",
      text: "What are the symptoms?",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Click when turning key", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence", tags: ["battery", "dead", "electrical"] },
        { id: "crank", label: "⚙️ Cranks but won't start", tags: ["fuel", "spark", "engine"] }
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
    },
    {
      id: "check_fuel",
      title: "⛽ Check fuel level",
      description: "Most common cause — simply ran out of gas",
      conditions: {
        symptom: ["crank"]
      },
      tags: ["fuel", "basic", "check", "fast"],
      priority: "fast",
      reliability: "high",
      time_estimate: "1 min",
      steps: [
        "Look at fuel gauge on dashboard",
        "If reading is unclear — check fuel level sensor",
        "Check reserve fuel tank (if available)",
        "Rock the car — sensor may show actual level"
      ],
      warnings: [
        "Don't run engine without fuel — this can damage fuel pump"
      ]
    }
  ]
};

const overheatingDataEn = {
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

const flat_tireDataEn = {
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

const brakesDataEn = {
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

const batteryDataEn = {
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

const leakDataEn = {
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
};