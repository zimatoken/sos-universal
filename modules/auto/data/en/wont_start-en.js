// === SECTION: AUTO ===
// Separate categories for each problem (ENGLISH VERSION)

const autoWontStartDataEn = {
  category: "wont_start",
  title: "🔌 Won't start",
  description: "Engine starting problems",
  questions: [
    {
      id: "symptom",
      text: "What symptoms do you notice?",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Clicking sound when turning the key", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence", tags: ["battery", "dead", "electrical"] },
        { id: "crank", label: "⚙️ Cranks but won't start", tags: ["fuel", "spark", "engine"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["public", "tools", "help"] }
      ]
    }
  ],
  solutions: [
    {
      id: "jump_start",
      title: "🔋 Jump-start from another car",
      description: "If the battery is dead — jump-start from a working car",
      conditions: {
        symptom: ["click", "silence"]
      },
      tags: ["battery", "jump", "electrical", "common"],
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      steps: [
        "Find a car with a working battery",
        "Position cars close enough for cables to reach",
        "Turn off both cars (ignition, lights)",
        "Connect cables: positive to positive, negative to negative",
        "Start the donor car and let it run for 2-3 minutes",
        "Try to start your car",
        "After starting, let it run for 10-15 minutes",
        "Remove cables in reverse order: negative first, then positive"
      ],
      warnings: [
        "Do not touch terminals while engine is running",
        "Check polarity — wrong connection can damage electronics",
        "If battery smokes or smells — do not jump-start"
      ],
      tips: [
        "Always keep jump-start cables in your car",
        "Check battery terminals once a month",
        "If battery is over 5 years old — consider replacing it"
      ]
    },
    {
      id: "check_fuel",
      title: "⛽ Check fuel level",
      description: "The most common reason — you just ran out of gas",
      conditions: {
        symptom: ["crank"]
      },
      tags: ["fuel", "basic", "check", "fast"],
      priority: "fast",
      reliability: "high",
      time_estimate: "1 min",
      steps: [
        "Look at the fuel gauge on the dashboard",
        "If unclear — check the fuel level sensor",
        "Check the reserve fuel tank (if available)",
        "Rock the car — gauge may show the real level"
      ],
      warnings: [
        "Do not run the engine without fuel — it can damage the fuel pump"
      ],
      tips: [
        "Fill up early, don't run the tank empty",
        "Keep a spare gas can in your trunk for emergencies"
      ]
    }
  ]
};

// ===== OVERHEATING DATA (EN) =====
const autoOverheatingDataEn = {
  category: "overheating",
  title: "🌡️ Overheating",
  description: "Cooling system problems",
  questions: [
    {
      id: "symptom",
      text: "What symptoms do you notice?",
      type: "multi",
      options: [
        { id: "smoke", label: "💨 Smoke from under the hood", tags: ["overheating", "leak", "engine"] },
        { id: "smell", label: "👃 Gasoline smell", tags: ["fuel", "leak", "danger"] },
        { id: "warning_light", label: "⚠️ Warning light on dashboard", tags: ["sensor", "diagnostic", "check"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "highway", label: "🛣️ Highway", tags: ["highway", "speed", "danger"] }
      ]
    }
  ],
  solutions: [
    {
      id: "coolant_check",
      title: "🌡️ Check and top up coolant",
      description: "If overheating — check the coolant level in the radiator",
      conditions: {
        symptom: ["smoke"]
      },
      tags: ["cooling", "radiator", "urgent", "critical"],
      priority: "fast",
      reliability: "high",
      time_estimate: "10-15 min",
      steps: [
        "Stop and turn off the engine",
        "Let the engine cool down for 15-20 minutes",
        "Do NOT open the radiator on a hot engine!",
        "Check the coolant level in the reservoir tank",
        "If low — top up to the correct level",
        "Check for leaks under the car"
      ],
      warnings: [
        "NEVER open the radiator cap on a hot engine — steam can cause severe burns",
        "Use only the recommended type of coolant",
        "If fluid disappears quickly — there's a leak, needs repair"
      ],
      tips: [
        "Keep 1-2 liters of coolant in your car",
        "Check coolant levels once a month",
        "If overheating persists — have the cooling system checked"
      ]
    }
  ]
};

// ===== FLAT TIRE DATA (EN) =====
const autoFlatTireDataEn = {
  category: "flat_tire",
  title: "🛞 Flat tire",
  description: "Wheel and tire problems",
  questions: [
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["public", "tools", "help"] }
      ]
    }
  ],
  solutions: [
    {
      id: "tire_change",
      title: "🛞 Changing a tire",
      description: "If you have a flat — replace it with the spare tire",
      conditions: {},
      tags: ["tire", "wheel", "basic", "medium"],
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      steps: [
        "Stop on a flat, solid surface",
        "Engage first gear and handbrake",
        "Place wheel chocks behind the wheels",
        "Loosen the wheel nuts (half turn) on the flat tire",
        "Jack up the car",
        "Remove the wheel nuts fully and take off the wheel",
        "Mount the spare tire and hand-tighten the nuts",
        "Lower the car and tighten the nuts in a star pattern with proper torque",
        "Check the spare tire pressure"
      ],
      warnings: [
        "Never get under a car supported only by a jack",
        "Tighten bolts with proper torque — over-tightening is dangerous",
        "Check the spare tire pressure before driving"
      ],
      tips: [
        "Regularly check tire pressure",
        "Keep a pump and pressure gauge in your car",
        "The spare tire must be functional and properly inflated"
      ]
    }
  ]
};

// ===== BRAKES DATA (EN) =====
const autoBrakesDataEn = {
  category: "brakes",
  title: "🛑 Brake problems",
  description: "Critical brake system issues",
  questions: [
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "highway", label: "🛣️ Highway", tags: ["highway", "speed", "danger"] }
      ]
    }
  ],
  solutions: [
    {
      id: "brake_fluid",
      title: "🛑 Check brake fluid",
      description: "If you have brake problems — check the fluid level",
      conditions: {},
      tags: ["brakes", "safety", "critical", "urgent"],
      priority: "fast",
      reliability: "high",
      time_estimate: "5 min",
      steps: [
        "Locate the brake fluid reservoir (usually on the driver's side)",
        "Check the level — should be between MIN and MAX marks",
        "If low — top up with brake fluid",
        "Check for leaks under the car",
        "Test brakes at a safe speed"
      ],
      warnings: [
        "Do not drive with brake problems",
        "Use only the recommended type of fluid",
        "If pedal feels soft or goes to the floor — stop immediately"
      ],
      tips: [
        "Replace brake fluid every 2 years",
        "When replacing pads, check fluid level",
        "If brake pedal feels soft — visit a mechanic"
      ]
    }
  ]
};

// ===== BATTERY DATA (EN) =====
const autoBatteryDataEn = {
  category: "battery",
  title: "🔋 Dead battery",
  description: "Battery and electrical problems",
  questions: [
    {
      id: "symptom",
      text: "What symptoms do you notice?",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Clicking when turning the key", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence", tags: ["battery", "dead", "electrical"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["public", "tools", "help"] }
      ]
    }
  ],
  solutions: [
    {
      id: "jump_start",
      title: "🔋 Jump-start from another car",
      description: "If the battery is dead — jump-start from a working car",
      conditions: {
        symptom: ["click", "silence"]
      },
      tags: ["battery", "jump", "electrical", "common"],
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      steps: [
        "Find a car with a working battery",
        "Position cars close enough for cables to reach",
        "Turn off both cars (ignition, lights)",
        "Connect cables: positive to positive, negative to negative",
        "Start the donor car and let it run for 2-3 minutes",
        "Try to start your car",
        "After starting, let it run for 10-15 minutes",
        "Remove cables in reverse order: negative first, then positive"
      ],
      warnings: [
        "Do not touch terminals while engine is running",
        "Check polarity — wrong connection can damage electronics",
        "If battery smokes or smells — do not jump-start"
      ],
      tips: [
        "Always keep jump-start cables in your car",
        "Check battery terminals once a month",
        "If battery is over 5 years old — consider replacing it"
      ]
    }
  ]
};

// ===== LEAK DATA (EN) =====
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
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "highway", label: "🛣️ Highway", tags: ["highway", "speed", "danger"] }
      ]
    }
  ],
  solutions: [
    {
      id: "call_help",
      title: "📞 Call a tow truck",
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
        "Place warning triangle 15 meters behind the car",
        "Move to a safe distance from the road",
        "Call a tow service or your insurance",
        "Provide your exact location and problem description",
        "Stay in a safe place until help arrives"
      ],
      warnings: [
        "Do not stand on the roadway",
        "At night — wear a reflective vest",
        "Be especially careful on highways"
      ],
      tips: [
        "Always have a tow service number in your phone",
        "Check fluid levels once a month",
        "If you see puddles under the car — visit a mechanic"
      ]
    }
  ]
};

// ===== DTP DATA (EN) =====
const autoDtpDataEn = {
  category: "dtp",
  title: "🚨 Accident / Crash",
  description: "Actions after a traffic accident",
  questions: [
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "highway", label: "🛣️ Highway", tags: ["highway", "speed", "danger"] }
      ]
    }
  ],
  solutions: [
    {
      id: "dtp_action",
      title: "🚨 What to do after an accident",
      description: "Immediate steps after a crash",
      conditions: {},
      tags: ["dtp", "accident", "emergency", "critical"],
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      steps: [
        "Turn on hazard lights",
        "Place warning triangle",
        "Check for injuries — call ambulance if needed",
        "Call the police (102/112)",
        "Do not move the car until police arrive",
        "Take photos of the scene and damage",
        "Get witness contact information",
        "Fill out the accident report form"
      ],
      warnings: [
        "Do not leave the accident scene",
        "Do not settle 'on the spot' without police",
        "Do not admit fault before the accident is officially recorded"
      ],
      tips: [
        "Keep a warning triangle and reflective vest in your car",
        "Save emergency numbers in your phone",
        "Euro protocol applies only if no injuries and no disagreements"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoWontStartDataEn = autoWontStartDataEn;