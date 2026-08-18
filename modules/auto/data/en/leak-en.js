// === MODULE: AUTO — FLUID LEAK (ENGLISH) ===
const autoLeakDataEn = {
  category: "leak",
  title: "💧 Fluid Leak",
  description: "Diagnosis and solutions for vehicle fluid leaks",

  questions: [
    {
      id: "symptom",
      text: "What did you notice?",
      type: "multi",
      options: [
        { id: "puddle", label: "💧 Puddle under the car", tags: ["puddle", "leak"] },
        { id: "low_level", label: "📉 Fluid level dropped (on dashboard)", tags: ["low_level", "warning"] },
        { id: "warning_light", label: "💡 Warning light came on (oil, coolant, brake)", tags: ["warning", "alert"] },
        { id: "smell", label: "👃 Smell (burnt oil, sweet antifreeze, gasoline)", tags: ["smell", "diagnostic"] },
        { id: "overheat", label: "🌡️ Engine overheating", tags: ["overheat", "coolant"] },
        { id: "smoke", label: "💨 Smoke / steam from under hood", tags: ["smoke", "overheat"] },
        { id: "poor_brakes", label: "🛑 Brake pedal soft / goes to floor", tags: ["brake_fluid", "danger"] }
      ]
    },
    {
      id: "fluid_type",
      text: "What fluid do you think is leaking?",
      type: "single",
      conditions: { symptom: ["puddle", "low_level", "smell", "smoke", "warning_light"] },
      options: [
        { id: "oil", label: "🛢️ Engine oil (dark, oily)", tags: ["oil", "engine"] },
        { id: "coolant", label: "🧊 Coolant (antifreeze, red/green)", tags: ["coolant", "antifreeze"] },
        { id: "brake_fluid", label: "🛑 Brake fluid (clear, oily, pungent)", tags: ["brake_fluid", "critical"] },
        { id: "fuel", label: "⛽ Fuel (gasoline/diesel, strong smell)", tags: ["fuel", "danger"] },
        { id: "steering_fluid", label: "🔄 Power steering fluid (red, oily)", tags: ["steering", "power_steering"] },
        { id: "water", label: "💧 Water (condensation, clear)", tags: ["water", "normal"] },
        { id: "unknown", label: "❓ Don't know / not sure", tags: ["unknown", "diagnostic"] }
      ]
    },
    {
      id: "fluid_color",
      text: "What color is the fluid?",
      type: "single",
      conditions: { symptom: ["puddle"] },
      options: [
        { id: "brown_black", label: "🟫 Brown / black (oil)", tags: ["brown", "oil"] },
        { id: "red_blue", label: "🔴 Red / blue (antifreeze, power steering)", tags: ["red", "coolant"] },
        { id: "green_yellow", label: "🟢 Green / yellow (antifreeze, coolant)", tags: ["green", "coolant"] },
        { id: "clear", label: "💧 Clear (water)", tags: ["clear", "water"] },
        { id: "yellow_gold", label: "🟡 Yellow / gold (brake fluid)", tags: ["yellow", "brake_fluid"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      conditions: { symptom: ["puddle", "low_level", "warning_light", "smell", "overheat", "smoke", "poor_brakes"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe", "tools"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "danger"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      conditions: { symptom: ["puddle", "low_level", "warning_light", "smell", "overheat", "smoke", "poor_brakes"] },
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
      type: "single",
      conditions: { symptom: ["puddle", "low_level", "warning_light", "smell", "overheat", "smoke", "poor_brakes"] },
      options: [
        { id: "normal", label: "🌡️ Normal (needle in middle)", tags: ["normal_temp"] },
        { id: "hot", label: "🌡️ Hot (needle near red zone)", tags: ["hot_temp", "overheat"] },
        { id: "overheated", label: "🌡️ Overheated (red zone)", tags: ["overheated", "emergency"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. Identify fluid by color =====
    {
      id: "identify_fluid",
      title: "🔍 Identify fluid leak by color",
      description: "Color and consistency will help determine what is leaking.",
      conditions: { symptom: ["puddle"], fluid_color: ["brown_black", "red_blue", "green_yellow", "clear", "yellow_gold"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2-5 min",
      yield_estimate: "Diagnosis",
      tags: ["identification", "fluid", "diagnostic"],
      steps: [
        "Place white paper or cardboard under the leak to see the color",
        "Determine fluid color (see 'color' question)",
        "Engine oil (brown/black, oily) — likely engine leak",
        "Coolant (red/green/blue, sweet smell) — cooling system",
        "Brake fluid (light yellow, oily, pungent) — brake system",
        "Fuel (gasoline/diesel, strong smell) — fuel system",
        "Power steering fluid (red, oily) — power steering system",
        "Water (clear, odorless) — AC condensation (normal)"
      ],
      warnings: [
        "Don't touch fluids without gloves (many are toxic)",
        "Brake fluid destroys paint — wash off immediately with water",
        "If it smells like gasoline — don't smoke or turn on ignition",
        "If fluid is brown and thick — most likely oil"
      ]
    },
    // ===== 2. Check and top up oil =====
    {
      id: "oil_check",
      title: "🛢️ Check and top up engine oil",
      description: "If oil is leaking or level dropped — check and top up to normal.",
      conditions: { symptom: ["low_level", "warning_light"], fluid_type: ["oil"], fluid_color: ["brown_black"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal oil level",
      tags: ["oil", "check", "top_up"],
      steps: [
        "Stop, turn off engine, wait 5-10 minutes (oil will drain to pan)",
        "Open hood, find dipstick (usually yellow or orange handle)",
        "Wipe dipstick clean, insert all the way, remove again",
        "Level should be between MIN and MAX marks",
        "If below MIN — add oil through filler cap (use funnel)",
        "Add small amounts and check level after each addition",
        "Use only recommended oil type (see manual)",
        "If leak is severe — don't drive, call tow truck"
      ],
      warnings: [
        "Don't overfill oil — it's as bad as low level",
        "If oil is black and old — replace at first opportunity",
        "Don't add oil to hot engine — you can get burned",
        "If oil is leaking quickly — serious leak, driving is dangerous"
      ]
    },
    // ===== 3. Check coolant level =====
    {
      id: "coolant_check",
      title: "🧊 Check coolant level",
      description: "If engine is overheating or there's a leak — check antifreeze level.",
      conditions: { symptom: ["overheat", "smoke"], fluid_type: ["coolant"], engine_temp: ["hot", "overheated"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal coolant level",
      tags: ["coolant", "antifreeze", "overheat"],
      steps: [
        "Let engine cool for at least 30 minutes! (hot antifreeze is pressurized)",
        "Open hood, find expansion tank (usually transparent, with MIN and MAX marks)",
        "Check level: between MIN and MAX — normal",
        "If below MIN — add antifreeze (same color and type)",
        "If no antifreeze — add distilled water (last resort)",
        "Tighten tank cap until it clicks",
        "Start engine, check if new leaks appear",
        "Watch temperature — if needle goes to red zone, stop"
      ],
      warnings: [
        "DO NOT open radiator cap on hot engine! Risk of burns",
        "DO NOT add cold water to hot engine — risk of cracking the block",
        "Mixing different color antifreeze can cause reaction and damage system",
        "If leak is severe — don't drive, call tow truck"
      ]
    },
    // ===== 4. Fuel leak =====
    {
      id: "fuel_leak",
      title: "⛽ Fuel leak — DO NOT IGNORE!",
      description: "Fuel leak is very dangerous! Take immediate action.",
      conditions: { fluid_type: ["fuel"], symptom: ["smell", "puddle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Safety + help called",
      tags: ["fuel", "danger", "emergency"],
      steps: [
        "DO NOT smoke! DO NOT turn on ignition!",
        "DO NOT start the engine!",
        "If leak is under the car — move to safe distance (at least 50 feet)",
        "If possible — shut off fuel supply (valve if available)",
        "Call a tow truck (don't try to drive!)",
        "If large leak — call emergency services",
        "Inform tow truck driver about fuel leak (special towing needed)"
      ],
      warnings: [
        "Fuel is flammable! One spark — fire",
        "Don't try to start the car — can damage system and cause fire",
        "If fuel gets on hot engine parts — can ignite",
        "If you smell gasoline in cabin — DON'T smoke, ventilate"
      ]
    },
    // ===== 5. Brake fluid leak =====
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
        "DO NOT drive with brake fluid leak!",
        "Turn on hazard lights, set warning triangle",
        "Check brake fluid level (reservoir near driver)",
        "If level dropped below MIN — critical leak",
        "Never add brake fluid if there's a leak (useless)",
        "Call a tow truck",
        "Inform about brake problem (careful loading needed)"
      ],
      warnings: [
        "If brake pedal goes to floor — DO NOT DRIVE",
        "Brake fluid is very corrosive — avoid skin and paint contact",
        "Only add same class brake fluid (DOT 4 / DOT 5)",
        "Don't mix DOT 4 and DOT 5 — incompatible"
      ]
    },
    // ===== 6. Power steering fluid leak =====
    {
      id: "power_steering_leak",
      title: "🔄 Power steering fluid leak",
      description: "If steering became stiff or red fluid is leaking — check power steering.",
      conditions: { fluid_type: ["steering_fluid"], fluid_color: ["red_blue"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-15 min",
      yield_estimate: "Until leak fixed",
      tags: ["steering", "power_steering", "fluid"],
      steps: [
        "Check power steering fluid level in reservoir (under hood, near steering rack)",
        "If low — top up with recommended fluid (ATF or special)",
        "If fluid drains quickly — there's a leak in the system",
        "Inspect hoses and connections for drips",
        "If steering became stiff — don't drive long distances",
        "Call tow truck or drive slowly to service (last resort)"
      ],
      warnings: [
        "With power steering leak, steering becomes very stiff, especially at low speeds",
        "Don't drive without PS fluid — it will damage the rack (expensive repair)",
        "If steering is stiff — don't make sudden maneuvers",
        "Power steering fluid is often red (don't confuse with antifreeze)"
      ]
    },
    // ===== 7. AC condensation =====
    {
      id: "ac_condensation",
      title: "💧 AC condensation — this is normal!",
      description: "If clear water is under the car — it's condensation from the AC.",
      conditions: { fluid_type: ["water"], fluid_color: ["clear"], symptom: ["puddle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1 min",
      yield_estimate: "Peace of mind",
      tags: ["water", "normal", "ac"],
      steps: [
        "Check that fluid is clear and odorless (it's water)",
        "Check that puddle is under front of car (where AC is)",
        "If water is clear and odorless — it's AC condensation (normal)",
        "If water has impurities or smell — it may be other fluid",
        "If unsure — do paper test (see solution 1)",
        "Safe to continue driving — no problem"
      ],
      warnings: [
        "If water is not clear or has smell — it's not condensation, you have a leak",
        "If AC hasn't been used for a while — no water is normal",
        "If water under car after long parking — most likely condensation"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoLeakDataEn = autoLeakDataEn;
