// === MODULE: AUTO — FLUID LEAK (ENGLISH) ===
const autoLeakDataEn = {
  category: "leak",
  title: "💧 Fluid leak",
  description: "Diagnostics and solutions for technical fluid leaks",

  questions: [
    {
      id: "symptom",
      text: "What did you notice? (select all that apply)",
      type: "multi",
      options: [
        { id: "puddle", label: "💧 Puddle under the car", tags: ["puddle", "leak"] },
        { id: "low_level", label: "📉 Fluid level dropped (on dashboard)", tags: ["low_level", "warning"] },
        { id: "warning_light", label: "💡 Warning light came on (oil, coolant, brake)", tags: ["warning", "alert"] },
        { id: "smell", label: "👃 Smell (burnt oil, sweet antifreeze, gasoline)", tags: ["smell", "diagnostic"] },
        { id: "overheat", label: "🌡️ Engine overheating", tags: ["overheat", "coolant"] },
        { id: "smoke", label: "💨 Smoke / steam from under the hood", tags: ["smoke", "overheat"] },
        { id: "poor_brakes", label: "🛑 Brake pedal soft / sinking", tags: ["brake_fluid", "danger"] }
      ]
    },
    {
      id: "fluid_type",
      text: "What fluid do you think is leaking?",
      options: [
        { id: "oil", label: "🛢️ Engine oil (dark, oily)", tags: ["oil", "engine"] },
        { id: "coolant", label: "🧊 Coolant / antifreeze (red/green)", tags: ["coolant", "antifreeze"] },
        { id: "brake_fluid", label: "🛑 Brake fluid (light, oily, pungent)", tags: ["brake_fluid", "critical"] },
        { id: "fuel", label: "⛽ Fuel (gasoline, diesel, strong smell)", tags: ["fuel", "danger"] },
        { id: "steering_fluid", label: "🔄 Power steering fluid (red, oily)", tags: ["steering", "power_steering"] },
        { id: "water", label: "💧 Water (condensation, clear)", tags: ["water", "normal"] },
        { id: "unknown", label: "❓ I don't know / not sure", tags: ["unknown", "diagnostic"] }
      ]
    },
    {
      id: "fluid_color",
      text: "What color is the fluid?",
      condition: { symptom: ["puddle"] },
      options: [
        { id: "brown_black", label: "🟫 Brown / black (oil)", tags: ["brown", "oil"] },
        { id: "red_blue", label: "🔴 Red / blue (coolant, power steering)", tags: ["red", "coolant"] },
        { id: "green_yellow", label: "🟢 Green / yellow (coolant)", tags: ["green", "coolant"] },
        { id: "clear", label: "💧 Clear (water)", tags: ["clear", "water"] },
        { id: "yellow_gold", label: "🟡 Yellow / gold (brake fluid)", tags: ["yellow", "brake_fluid"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "danger"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "fluid", label: "🧴 Fluid (oil, antifreeze, brake)", tags: ["fluid"] },
        { id: "funnel", label: "🔧 Funnel", tags: ["funnel"] },
        { id: "gloves", label: "🧤 Gloves (protection)", tags: ["gloves"] },
        { id: "nothing", label: "❌ Nothing from the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "engine_temp",
      text: "What is the engine temperature?",
      options: [
        { id: "normal", label: "🌡️ Normal (needle in the middle)", tags: ["normal_temp"] },
        { id: "hot", label: "🌡️ Hot (needle near red zone)", tags: ["hot_temp", "overheat"] },
        { id: "overheated", label: "🌡️ Overheated (red zone)", tags: ["overheated", "emergency"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Fluid identification by color
    // ========================================
    {
      id: "identify_fluid",
      title: "🔍 Identifying the leak by color",
      description: "Color and consistency will help determine what is leaking.",
      conditions: { symptom: ["puddle"], fluid_color: ["brown_black", "red_blue", "green_yellow", "clear", "yellow_gold"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2-5 min",
      yield_estimate: "Diagnosis",
      tags: ["identification", "fluid", "diagnostic"],
      steps: [
        "Place a piece of white paper or cardboard under the leak (to see the color)",
        "Determine the color of the fluid (see the 'color' question)",
        "Engine oil (brown/black, oily) — likely an engine leak",
        "Coolant (red/green/blue, sweet smell) — cooling system",
        "Brake fluid (light yellow, oily, pungent) — brake system",
        "Fuel (gasoline/diesel, strong smell) — fuel system",
        "Power steering fluid (red, oily) — power steering system",
        "Water (clear, odorless) — air conditioner condensation (normal)"
      ],
      warnings: [
        "Do not touch fluids with bare hands (many are toxic)",
        "Brake fluid destroys paint — wash off immediately with water",
        "If you smell gasoline — do not smoke and do not turn on the ignition",
        "If the fluid is brown and thick — it's most likely oil"
      ]
    },
    // ========================================
    // 2. Engine oil check and top-up
    // ========================================
    {
      id: "oil_check",
      title: "🛢️ Engine oil check and top-up",
      description: "If oil is leaking or the level has dropped — check and top up.",
      conditions: { symptom: ["low_level", "warning_light"], fluid_type: ["oil"], fluid_color: ["brown_black"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal oil level",
      tags: ["oil", "check", "top_up"],
      steps: [
        "Stop, turn off the engine, wait 5-10 minutes (oil will drain to the pan)",
        "Open the hood, find the dipstick (usually a yellow or orange handle)",
        "Wipe the dipstick with a clean cloth, insert it fully, pull it out again",
        "The level should be between the MIN and MAX marks",
        "If below MIN — add oil through the filler neck (use a funnel)",
        "Add in small amounts and check the level after each addition",
        "Use only the recommended type of oil (see the manual)",
        "If the leak is severe — do not drive, call a tow truck"
      ],
      warnings: [
        "Do not overfill the oil — it's just as bad as a low level",
        "If the oil is black and old — replace it at the first opportunity",
        "Do not add oil to a hot engine — you can get burned",
        "If oil is leaking quickly — it's a serious leak, driving is dangerous"
      ]
    },
    // ========================================
    // 3. Coolant level check
    // ========================================
    {
      id: "coolant_check",
      title: "🧊 Coolant level check",
      description: "If the engine is overheating or there's a leak — check the coolant level.",
      conditions: { symptom: ["overheat", "smoke"], fluid_type: ["coolant"], engine_temp: ["hot", "overheated"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal coolant level",
      tags: ["coolant", "antifreeze", "overheat"],
      steps: [
        "Let the engine cool for at least 30 minutes! (hot coolant is under pressure)",
        "Open the hood, find the expansion tank (usually transparent, with MIN and MAX marks)",
        "Check the level: between MIN and MAX — normal",
        "If below MIN — add coolant (only the same color and type)",
        "If no coolant — you can add distilled water (as a last resort)",
        "Tighten the cap until it clicks",
        "Start the engine, check if any leak appears",
        "Monitor the temperature — if the needle goes into the red zone, stop"
      ],
      warnings: [
        "DO NOT open the radiator cap on a hot engine! Risk of burns",
        "DO NOT pour cold water into a hot engine — the block can crack",
        "Mixing different colors of coolant can cause a reaction and damage the system",
        "If the leak is severe — do not drive, call a tow truck"
      ]
    },
    // ========================================
    // 4. Fuel leak
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
        "If there's a leak under the car — move to a safe distance (at least 15 meters)",
        "If possible — shut off the fuel supply (if there's a shut-off valve)",
        "Call a tow truck (do not attempt to drive!)",
        "If the leak is large — call emergency services (112)",
        "Inform the tow truck driver that there's a fuel leak (special towing required)"
      ],
      warnings: [
        "Fuel is flammable! One spark — fire",
        "Do not try to start the car — you can damage the system and cause a fire",
        "If fuel gets on hot engine parts — it can ignite",
        "If you smell gasoline in the cabin — DO NOT smoke, ventilate"
      ]
    },
    // ========================================
    // 5. Brake fluid leak
    // ========================================
    {
      id: "brake_fluid_leak",
      title: "🛑 Brake fluid leak — DO NOT DRIVE!",
      description: "Brake fluid is critical for safety. A leak is dangerous.",
      conditions: { fluid_type: ["brake_fluid"], symptom: ["poor_brakes", "warning_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Tow truck + safety",
      tags: ["brake_fluid", "danger", "critical"],
      steps: [
        "DO NOT attempt to drive with a brake fluid leak!",
        "Turn on hazard lights, place a warning triangle",
        "Check the brake fluid level (reservoir near the driver)",
        "If the level has dropped below MIN — the leak is critical",
        "Never top up brake fluid if there's a leak (useless)",
        "Call a tow truck",
        "Inform the tow truck driver about the brake problem (requires careful loading)"
      ],
      warnings: [
        "If the brake pedal sinks — DO NOT DRIVE",
        "Brake fluid is very corrosive — avoid contact with skin and paint",
        "Only top up with the same class of fluid (DOT 4 / DOT 5)",
        "Do not mix DOT 4 and DOT 5 — they are incompatible"
      ]
    },
    // ========================================
    // 6. Power steering fluid leak
    // ========================================
    {
      id: "power_steering_leak",
      title: "🔄 Power steering fluid leak",
      description: "If the steering wheel becomes stiff or there's a leak of red fluid — check the power steering.",
      conditions: { fluid_type: ["steering_fluid"], fluid_color: ["red_blue"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-15 min",
      yield_estimate: "Until the leak is fixed",
      tags: ["steering", "power_steering", "fluid"],
      steps: [
        "Check the power steering fluid level (usually under the hood, near the steering mechanism)",
        "If the level is low — top up with recommended fluid (ATF or special)",
        "If the fluid is disappearing quickly — there's a leak in the system",
        "Inspect hoses and connections for drips",
        "If the steering wheel is stiff — don't try to drive long distances",
        "Call a tow truck or drive to a service center at low speed (last resort)"
      ],
      warnings: [
        "When power steering fluid leaks, the steering wheel becomes very stiff, especially at low speeds",
        "Do not drive without power steering fluid — it will damage the rack (expensive repair)",
        "If the steering wheel is stiff — do not make sharp maneuvers",
        "Power steering fluid is often red (don't confuse with coolant)"
      ]
    },
    // ========================================
    // 7. Air conditioner condensation (normal)
    // ========================================
    {
      id: "ac_condensation",
      title: "💧 Air conditioner condensation — this is normal!",
      description: "If there's clear water under the car — it's condensation from the air conditioner.",
      conditions: { fluid_type: ["water"], fluid_color: ["clear"], symptom: ["puddle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1 min",
      yield_estimate: "Peace of mind",
      tags: ["water", "normal", "ac"],
      steps: [
        "Make sure the fluid is clear and odorless (it's water)",
        "Check that the puddle is under the front of the car (where the AC is)",
        "If the water is clear and odorless — it's condensation from the AC (normal)",
        "If the water has impurities or smells — it could be another fluid",
        "If you're unsure — do the paper test (see solution 1)",
        "You can continue driving — there is no problem"
      ],
      warnings: [
        "If the water is not clean or has a smell — it's not condensation, you have a leak",
        "If the AC hasn't been used for a long time — there may be no water (this is normal)",
        "If there's water under the car after a long period of parking — it's most likely condensation"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoLeakDataEn = autoLeakDataEn;