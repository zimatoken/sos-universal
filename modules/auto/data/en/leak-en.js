<<<<<<< HEAD
<<<<<<< HEAD
// === MODULE: AUTO — FLUID LEAK (ENGLISH) ===
const autoLeakDataEn = {
  category: "leak",
  title: "💧 Fluid Leak",
  description: "Diagnostics and solutions for vehicle fluid leaks",

  questions: [
    {
      id: "symptom",
      text: "What do you notice? (select all that apply)",
      type: "multi",
      options: [
        { id: "puddle", label: "💧 Puddle under the car", tags: ["puddle", "leak"] },
        { id: "low_level", label: "📉 Fluid level dropped (dashboard warning)", tags: ["low_level", "warning"] },
        { id: "warning_light", label: "💡 Warning light came on (oil, coolant, brake)", tags: ["warning", "alert"] },
        { id: "smell", label: "👃 Smell (burnt oil, sweet antifreeze, gasoline)", tags: ["smell", "diagnostic"] },
        { id: "overheat", label: "🌡️ Engine overheating", tags: ["overheat", "coolant"] },
        { id: "smoke", label: "💨 Smoke / steam from under the hood", tags: ["smoke", "overheat"] },
        { id: "poor_brakes", label: "🛑 Brake pedal soft / sinks to the floor", tags: ["brake_fluid", "danger"] }
      ]
    },
    {
      id: "fluid_type",
      text: "What fluid do you think is leaking?",
      options: [
        { id: "oil", label: "🛢️ Engine oil (dark, oily)", tags: ["oil", "engine"] },
        { id: "coolant", label: "🧊 Coolant / antifreeze (red/green/blue)", tags: ["coolant", "antifreeze"] },
        { id: "brake_fluid", label: "🛑 Brake fluid (light, oily, corrosive)", tags: ["brake_fluid", "critical"] },
        { id: "fuel", label: "⛽ Fuel (gasoline/diesel, strong smell)", tags: ["fuel", "danger"] },
        { id: "steering_fluid", label: "🔄 Power steering fluid (red, oily)", tags: ["steering", "power_steering"] },
        { id: "water", label: "💧 Water (condensation, clear)", tags: ["water", "normal"] },
        { id: "unknown", label: "❓ Not sure / don't know", tags: ["unknown", "diagnostic"] }
      ]
    },
    {
      id: "fluid_color",
      text: "What color is the fluid?",
      condition: { symptom: ["puddle"] },
      options: [
        { id: "brown_black", label: "🟫 Brown / black (oil)", tags: ["brown", "oil"] },
        { id: "red_blue", label: "🔴 Red / blue (antifreeze, PS fluid)", tags: ["red", "coolant"] },
        { id: "green_yellow", label: "🟢 Green / yellow (antifreeze, coolant)", tags: ["green", "coolant"] },
        { id: "clear", label: "💧 Clear (water)", tags: ["clear", "water"] },
        { id: "yellow_gold", label: "🟡 Yellow / gold (brake fluid)", tags: ["yellow", "brake_fluid"] }
      ]
    },
    {
=======
// === AUTO SECTION - LEAK (ENGLISH) ===

const autoLeakDataEn = {
  category: "leak",
  title: "💧 Fluid leak",
  description: "Technical fluid leaks",
  questions: [
    {
>>>>>>> 92849c5936c3da4acab85528b91f11224f9f55d1
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
<<<<<<< HEAD
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "danger"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["parking", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "fluid", label: "🧴 Fluid (oil, antifreeze, brake fluid)", tags: ["fluid"] },
        { id: "funnel", label: "🔧 Funnel", tags: ["funnel"] },
        { id: "gloves", label: "🧤 Gloves (protection)", tags: ["gloves"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "engine_temp",
      text: "What is the engine temperature?",
      options: [
        { id: "normal", label: "🌡️ Normal (gauge in the middle)", tags: ["normal_temp"] },
        { id: "hot", label: "🌡️ Hot (gauge near the red zone)", tags: ["hot_temp", "overheat"] },
        { id: "overheated", label: "🌡️ Overheated (red zone)", tags: ["overheated", "emergency"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Identify fluid by color and consistency
    // ========================================
    {
      id: "identify_fluid",
      title: "🔍 Identifying the fluid leak by color",
      description: "The color and consistency will help you understand what exactly is leaking.",
      conditions: { symptom: ["puddle"], fluid_color: ["brown_black", "red_blue", "green_yellow", "clear", "yellow_gold"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2-5 min",
      yield_estimate: "Diagnosis",
      tags: ["identification", "fluid", "diagnostic"],
      steps: [
        "Place a piece of white paper or cardboard under the leak to see the color",
        "Determine the fluid color (see 'color' question)",
        "Engine oil (brown/black, oily) — likely engine leak",
        "Coolant (red/green/blue, sweet smell) — cooling system",
        "Brake fluid (light yellow, oily, pungent) — brake system",
        "Fuel (gasoline/diesel, strong smell) — fuel system",
        "Power steering fluid (red, oily) — power steering system",
        "Water (clear, odorless) — AC condensation (normal)"
      ],
      warnings: [
        "Do not touch fluids without gloves (many are toxic)",
        "Brake fluid damages paint — wash off immediately with water",
        "If you smell gasoline — do not smoke and do not turn on the ignition",
        "If the fluid is brown and thick — it's likely oil"
      ]
    },
    // ========================================
    // 2. Check and top up engine oil
    // ========================================
    {
      id: "oil_check",
      title: "🛢️ Check and top up engine oil",
      description: "If oil is leaking or the level has dropped — check and top up to the correct level.",
      conditions: { symptom: ["low_level", "warning_light"], fluid_type: ["oil"], fluid_color: ["brown_black"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal oil level",
      tags: ["oil", "check", "top_up"],
      steps: [
        "Stop, turn off the engine, wait 5-10 minutes (oil will drain to the pan)",
        "Open the hood, locate the dipstick (usually yellow or orange handle)",
        "Wipe the dipstick clean, insert it all the way, pull it out again",
        "The level should be between MIN and MAX marks",
        "If below MIN — add oil through the fill port (use a funnel)",
        "Add small amounts and recheck the level each time",
        "Only use the recommended oil type (check the manual)",
        "If the leak is severe — do not drive, call a tow truck"
      ],
      warnings: [
        "Do not overfill — it's as bad as a low level",
        "If the oil is black and old — replace it at the earliest opportunity",
        "Do not add oil to a hot engine — you could get burned",
        "If oil is leaking quickly — it's a serious leak, driving is dangerous"
      ]
    },
    // ========================================
    // 3. Check coolant level (antifreeze)
    // ========================================
    {
      id: "coolant_check",
      title: "🧊 Check coolant level",
      description: "If the engine is overheating or there is a leak — check the coolant level.",
      conditions: { symptom: ["overheat", "smoke"], fluid_type: ["coolant"], engine_temp: ["hot", "overheated"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal coolant level",
      tags: ["coolant", "antifreeze", "overheat"],
      steps: [
        "Let the engine cool down for at least 30 minutes! (hot coolant is under pressure)",
        "Open the hood, locate the expansion tank (usually clear, with MIN and MAX marks)",
        "Check the level: between MIN and MAX — normal",
        "If below MIN — add coolant (same color and type)",
        "If no coolant — you can add distilled water (last resort)",
        "Tighten the cap until it clicks",
        "Start the engine, check if the leak reappears",
        "Monitor the temperature — if the gauge goes into the red zone, stop"
      ],
      warnings: [
        "DO NOT open the radiator cap on a hot engine! Risk of burns",
        "DO NOT add cold water to a hot engine — risk of cracking the block",
        "Mixing different colors of antifreeze can cause a reaction and damage the system",
        "If the leak is severe — do not drive, call a tow truck"
      ]
    },
    // ========================================
    // 4. Fuel leak (gasoline/diesel)
    // ========================================
    {
      id: "fuel_leak",
      title: "⛽ Fuel leak — DO NOT IGNORE!",
      description: "A fuel leak is very dangerous! Take immediate action.",
      conditions: { fluid_type: ["fuel"], symptom: ["smell", "puddle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Safety + call for help",
      tags: ["fuel", "danger", "emergency"],
      steps: [
        "DO NOT smoke! DO NOT turn on the ignition!",
        "DO NOT start the engine!",
        "If there is a leak under the car — move to a safe distance (at least 15 meters)",
        "If possible — shut off the fuel supply (valve, if available)",
        "Call a tow truck (do not attempt to drive!)",
        "If the leak is large — call the emergency services (112)",
        "Inform the tow truck driver about the fuel leak (special handling needed)"
      ],
      warnings: [
        "Fuel is highly flammable! One spark — a fire",
        "Do not attempt to start the car — you could damage the system and cause a fire",
        "If fuel gets on hot engine parts — it can ignite",
        "If you smell gasoline in the cabin — DO NOT smoke, ventilate"
      ]
    },
    // ========================================
    // 5. Brake fluid leak — DO NOT DRIVE!
    // ========================================
    {
      id: "brake_fluid_leak",
      title: "🛑 Brake fluid leak — DO NOT DRIVE!",
      description: "Brake fluid is critical for safety. A leak is dangerous.",
      conditions: { fluid_type: ["brake_fluid"], symptom: ["poor_brakes", "warning_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Tow truck call + safety",
      tags: ["brake_fluid", "danger", "critical"],
      steps: [
        "DO NOT attempt to drive the car with a brake fluid leak!",
        "Turn on hazard lights, place the emergency triangle",
        "Check the brake fluid level (reservoir near the driver)",
        "If the level has dropped below MIN — the leak is critical",
        "Never top up brake fluid if there is a leak (it's pointless)",
        "Call a tow truck",
        "When towing, inform them about the brake problem (careful loading needed)"
      ],
      warnings: [
        "If the brake pedal sinks — DO NOT DRIVE",
        "Brake fluid is very corrosive — avoid contact with skin and paint",
        "Only top up with the same grade (DOT 4 / DOT 5)",
        "Do not mix DOT 4 and DOT 5 — they are incompatible"
      ]
    },
    // ========================================
    // 6. Power steering fluid leak
    // ========================================
    {
      id: "power_steering_leak",
      title: "🔄 Power steering fluid leak",
      description: "If the steering wheel becomes stiff or there is a red fluid leak — check the power steering.",
      conditions: { fluid_type: ["steering_fluid"], fluid_color: ["red_blue"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-15 min",
      yield_estimate: "Until the leak is fixed",
      tags: ["steering", "power_steering", "fluid"],
      steps: [
        "Check the power steering fluid level in the reservoir (usually under the hood, near the steering mechanism)",
        "If the level is low — add the recommended fluid (ATF or special fluid)",
        "If the fluid is disappearing quickly — there is a leak in the system",
        "Inspect hoses and connections for drips",
        "If the steering becomes stiff — do not drive long distances",
        "Call a tow truck or drive to a service center at low speed (last resort)"
      ],
      warnings: [
        "With a power steering leak, the steering becomes very stiff, especially at low speeds",
        "Do not drive without power steering fluid — it will damage the rack (expensive repair)",
        "If the steering is stiff — do not make sharp maneuvers",
        "Power steering fluid is often red (do not confuse with antifreeze)"
      ]
    },
    // ========================================
    // 7. AC condensation (normal)
    // ========================================
    {
      id: "ac_condensation",
      title: "💧 AC condensation — this is normal!",
      description: "If there is clear water under the car — it's condensation from the air conditioner.",
      conditions: { fluid_type: ["water"], fluid_color: ["clear"], symptom: ["puddle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1 min",
      yield_estimate: "Peace of mind",
      tags: ["water", "normal", "ac"],
      steps: [
        "Make sure the fluid is clear and odorless (it's water)",
        "Check that the puddle is under the front of the car (where the AC is)",
        "If the water is clean and odorless — it's AC condensation (normal)",
        "If the water has impurities or a smell — it could be another fluid",
        "If unsure — perform the paper test (see solution 1)",
        "You can continue driving — there is no problem"
      ],
      warnings: [
        "If the water is not clear or has a smell — it's not condensation, you have a leak",
        "If the AC hasn't been running for a while — there may be no water (normal)",
        "If there's water under the car after a long parking period — it's most likely condensation"
=======
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
>>>>>>> 92849c5936c3da4acab85528b91f11224f9f55d1
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoLeakDataEn = autoLeakDataEn;
=======
<<<<<<< HEAD
// === MODULE: AUTO — FLUID LEAK (ENGLISH) ===
const autoLeakDataEn = {
  category: "leak",
  title: "💧 Fluid Leak",
  description: "Diagnostics and solutions for vehicle fluid leaks",

  questions: [
    {
      id: "symptom",
      text: "What do you notice? (select all that apply)",
      type: "multi",
      options: [
        { id: "puddle", label: "💧 Puddle under the car", tags: ["puddle", "leak"] },
        { id: "low_level", label: "📉 Fluid level dropped (dashboard warning)", tags: ["low_level", "warning"] },
        { id: "warning_light", label: "💡 Warning light came on (oil, coolant, brake)", tags: ["warning", "alert"] },
        { id: "smell", label: "👃 Smell (burnt oil, sweet antifreeze, gasoline)", tags: ["smell", "diagnostic"] },
        { id: "overheat", label: "🌡️ Engine overheating", tags: ["overheat", "coolant"] },
        { id: "smoke", label: "💨 Smoke / steam from under the hood", tags: ["smoke", "overheat"] },
        { id: "poor_brakes", label: "🛑 Brake pedal soft / sinks to the floor", tags: ["brake_fluid", "danger"] }
      ]
    },
    {
      id: "fluid_type",
      text: "What fluid do you think is leaking?",
      options: [
        { id: "oil", label: "🛢️ Engine oil (dark, oily)", tags: ["oil", "engine"] },
        { id: "coolant", label: "🧊 Coolant / antifreeze (red/green/blue)", tags: ["coolant", "antifreeze"] },
        { id: "brake_fluid", label: "🛑 Brake fluid (light, oily, corrosive)", tags: ["brake_fluid", "critical"] },
        { id: "fuel", label: "⛽ Fuel (gasoline/diesel, strong smell)", tags: ["fuel", "danger"] },
        { id: "steering_fluid", label: "🔄 Power steering fluid (red, oily)", tags: ["steering", "power_steering"] },
        { id: "water", label: "💧 Water (condensation, clear)", tags: ["water", "normal"] },
        { id: "unknown", label: "❓ Not sure / don't know", tags: ["unknown", "diagnostic"] }
      ]
    },
    {
      id: "fluid_color",
      text: "What color is the fluid?",
      condition: { symptom: ["puddle"] },
      options: [
        { id: "brown_black", label: "🟫 Brown / black (oil)", tags: ["brown", "oil"] },
        { id: "red_blue", label: "🔴 Red / blue (antifreeze, PS fluid)", tags: ["red", "coolant"] },
        { id: "green_yellow", label: "🟢 Green / yellow (antifreeze, coolant)", tags: ["green", "coolant"] },
        { id: "clear", label: "💧 Clear (water)", tags: ["clear", "water"] },
        { id: "yellow_gold", label: "🟡 Yellow / gold (brake fluid)", tags: ["yellow", "brake_fluid"] }
      ]
    },
    {
=======
// === AUTO SECTION - LEAK (ENGLISH) ===

const autoLeakDataEn = {
  category: "leak",
  title: "💧 Fluid leak",
  description: "Technical fluid leaks",
  questions: [
    {
>>>>>>> 92849c5936c3da4acab85528b91f11224f9f55d1
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
<<<<<<< HEAD
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "danger"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["parking", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "fluid", label: "🧴 Fluid (oil, antifreeze, brake fluid)", tags: ["fluid"] },
        { id: "funnel", label: "🔧 Funnel", tags: ["funnel"] },
        { id: "gloves", label: "🧤 Gloves (protection)", tags: ["gloves"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "engine_temp",
      text: "What is the engine temperature?",
      options: [
        { id: "normal", label: "🌡️ Normal (gauge in the middle)", tags: ["normal_temp"] },
        { id: "hot", label: "🌡️ Hot (gauge near the red zone)", tags: ["hot_temp", "overheat"] },
        { id: "overheated", label: "🌡️ Overheated (red zone)", tags: ["overheated", "emergency"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Identify fluid by color and consistency
    // ========================================
    {
      id: "identify_fluid",
      title: "🔍 Identifying the fluid leak by color",
      description: "The color and consistency will help you understand what exactly is leaking.",
      conditions: { symptom: ["puddle"], fluid_color: ["brown_black", "red_blue", "green_yellow", "clear", "yellow_gold"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2-5 min",
      yield_estimate: "Diagnosis",
      tags: ["identification", "fluid", "diagnostic"],
      steps: [
        "Place a piece of white paper or cardboard under the leak to see the color",
        "Determine the fluid color (see 'color' question)",
        "Engine oil (brown/black, oily) — likely engine leak",
        "Coolant (red/green/blue, sweet smell) — cooling system",
        "Brake fluid (light yellow, oily, pungent) — brake system",
        "Fuel (gasoline/diesel, strong smell) — fuel system",
        "Power steering fluid (red, oily) — power steering system",
        "Water (clear, odorless) — AC condensation (normal)"
      ],
      warnings: [
        "Do not touch fluids without gloves (many are toxic)",
        "Brake fluid damages paint — wash off immediately with water",
        "If you smell gasoline — do not smoke and do not turn on the ignition",
        "If the fluid is brown and thick — it's likely oil"
      ]
    },
    // ========================================
    // 2. Check and top up engine oil
    // ========================================
    {
      id: "oil_check",
      title: "🛢️ Check and top up engine oil",
      description: "If oil is leaking or the level has dropped — check and top up to the correct level.",
      conditions: { symptom: ["low_level", "warning_light"], fluid_type: ["oil"], fluid_color: ["brown_black"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal oil level",
      tags: ["oil", "check", "top_up"],
      steps: [
        "Stop, turn off the engine, wait 5-10 minutes (oil will drain to the pan)",
        "Open the hood, locate the dipstick (usually yellow or orange handle)",
        "Wipe the dipstick clean, insert it all the way, pull it out again",
        "The level should be between MIN and MAX marks",
        "If below MIN — add oil through the fill port (use a funnel)",
        "Add small amounts and recheck the level each time",
        "Only use the recommended oil type (check the manual)",
        "If the leak is severe — do not drive, call a tow truck"
      ],
      warnings: [
        "Do not overfill — it's as bad as a low level",
        "If the oil is black and old — replace it at the earliest opportunity",
        "Do not add oil to a hot engine — you could get burned",
        "If oil is leaking quickly — it's a serious leak, driving is dangerous"
      ]
    },
    // ========================================
    // 3. Check coolant level (antifreeze)
    // ========================================
    {
      id: "coolant_check",
      title: "🧊 Check coolant level",
      description: "If the engine is overheating or there is a leak — check the coolant level.",
      conditions: { symptom: ["overheat", "smoke"], fluid_type: ["coolant"], engine_temp: ["hot", "overheated"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal coolant level",
      tags: ["coolant", "antifreeze", "overheat"],
      steps: [
        "Let the engine cool down for at least 30 minutes! (hot coolant is under pressure)",
        "Open the hood, locate the expansion tank (usually clear, with MIN and MAX marks)",
        "Check the level: between MIN and MAX — normal",
        "If below MIN — add coolant (same color and type)",
        "If no coolant — you can add distilled water (last resort)",
        "Tighten the cap until it clicks",
        "Start the engine, check if the leak reappears",
        "Monitor the temperature — if the gauge goes into the red zone, stop"
      ],
      warnings: [
        "DO NOT open the radiator cap on a hot engine! Risk of burns",
        "DO NOT add cold water to a hot engine — risk of cracking the block",
        "Mixing different colors of antifreeze can cause a reaction and damage the system",
        "If the leak is severe — do not drive, call a tow truck"
      ]
    },
    // ========================================
    // 4. Fuel leak (gasoline/diesel)
    // ========================================
    {
      id: "fuel_leak",
      title: "⛽ Fuel leak — DO NOT IGNORE!",
      description: "A fuel leak is very dangerous! Take immediate action.",
      conditions: { fluid_type: ["fuel"], symptom: ["smell", "puddle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Safety + call for help",
      tags: ["fuel", "danger", "emergency"],
      steps: [
        "DO NOT smoke! DO NOT turn on the ignition!",
        "DO NOT start the engine!",
        "If there is a leak under the car — move to a safe distance (at least 15 meters)",
        "If possible — shut off the fuel supply (valve, if available)",
        "Call a tow truck (do not attempt to drive!)",
        "If the leak is large — call the emergency services (112)",
        "Inform the tow truck driver about the fuel leak (special handling needed)"
      ],
      warnings: [
        "Fuel is highly flammable! One spark — a fire",
        "Do not attempt to start the car — you could damage the system and cause a fire",
        "If fuel gets on hot engine parts — it can ignite",
        "If you smell gasoline in the cabin — DO NOT smoke, ventilate"
      ]
    },
    // ========================================
    // 5. Brake fluid leak — DO NOT DRIVE!
    // ========================================
    {
      id: "brake_fluid_leak",
      title: "🛑 Brake fluid leak — DO NOT DRIVE!",
      description: "Brake fluid is critical for safety. A leak is dangerous.",
      conditions: { fluid_type: ["brake_fluid"], symptom: ["poor_brakes", "warning_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Tow truck call + safety",
      tags: ["brake_fluid", "danger", "critical"],
      steps: [
        "DO NOT attempt to drive the car with a brake fluid leak!",
        "Turn on hazard lights, place the emergency triangle",
        "Check the brake fluid level (reservoir near the driver)",
        "If the level has dropped below MIN — the leak is critical",
        "Never top up brake fluid if there is a leak (it's pointless)",
        "Call a tow truck",
        "When towing, inform them about the brake problem (careful loading needed)"
      ],
      warnings: [
        "If the brake pedal sinks — DO NOT DRIVE",
        "Brake fluid is very corrosive — avoid contact with skin and paint",
        "Only top up with the same grade (DOT 4 / DOT 5)",
        "Do not mix DOT 4 and DOT 5 — they are incompatible"
      ]
    },
    // ========================================
    // 6. Power steering fluid leak
    // ========================================
    {
      id: "power_steering_leak",
      title: "🔄 Power steering fluid leak",
      description: "If the steering wheel becomes stiff or there is a red fluid leak — check the power steering.",
      conditions: { fluid_type: ["steering_fluid"], fluid_color: ["red_blue"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-15 min",
      yield_estimate: "Until the leak is fixed",
      tags: ["steering", "power_steering", "fluid"],
      steps: [
        "Check the power steering fluid level in the reservoir (usually under the hood, near the steering mechanism)",
        "If the level is low — add the recommended fluid (ATF or special fluid)",
        "If the fluid is disappearing quickly — there is a leak in the system",
        "Inspect hoses and connections for drips",
        "If the steering becomes stiff — do not drive long distances",
        "Call a tow truck or drive to a service center at low speed (last resort)"
      ],
      warnings: [
        "With a power steering leak, the steering becomes very stiff, especially at low speeds",
        "Do not drive without power steering fluid — it will damage the rack (expensive repair)",
        "If the steering is stiff — do not make sharp maneuvers",
        "Power steering fluid is often red (do not confuse with antifreeze)"
      ]
    },
    // ========================================
    // 7. AC condensation (normal)
    // ========================================
    {
      id: "ac_condensation",
      title: "💧 AC condensation — this is normal!",
      description: "If there is clear water under the car — it's condensation from the air conditioner.",
      conditions: { fluid_type: ["water"], fluid_color: ["clear"], symptom: ["puddle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1 min",
      yield_estimate: "Peace of mind",
      tags: ["water", "normal", "ac"],
      steps: [
        "Make sure the fluid is clear and odorless (it's water)",
        "Check that the puddle is under the front of the car (where the AC is)",
        "If the water is clean and odorless — it's AC condensation (normal)",
        "If the water has impurities or a smell — it could be another fluid",
        "If unsure — perform the paper test (see solution 1)",
        "You can continue driving — there is no problem"
      ],
      warnings: [
        "If the water is not clear or has a smell — it's not condensation, you have a leak",
        "If the AC hasn't been running for a while — there may be no water (normal)",
        "If there's water under the car after a long parking period — it's most likely condensation"
=======
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
>>>>>>> 92849c5936c3da4acab85528b91f11224f9f55d1
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoLeakDataEn = autoLeakDataEn;
>>>>>>> 57522793a60f67c90dd6befc66693a2a0762d34e
