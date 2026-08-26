// modules/auto/data/en/leak-en.js
// === MODULE: AUTO — FLUID LEAK ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "auto",
    category: "leak",
    version: "1.0.0",
    lang: "en",
    title: "Fluid Leak",
    description: "Diagnostics and solutions for fluid leaks — oil, coolant, brake fluid, fuel",
    icon: "💧",
    color: "#2563eb"
  },

  questions: [
    {
      id: "symptom",
      type: "single",
      text: "What did you notice?",
      options: [
        { id: "puddle", label: "💧 Puddle under the car", tags: ["puddle"] },
        { id: "low_level", label: "📉 Fluid level dropped (on dashboard)", tags: ["low_level"] },
        { id: "warning_light", label: "💡 Warning light came on", tags: ["warning_light"] },
        { id: "smell", label: "👃 Smell (burnt oil, sweet antifreeze, gasoline)", tags: ["smell"] },
        { id: "overheat", label: "🌡️ Engine overheating", tags: ["overheat"] },
        { id: "smoke_hood", label: "💨 Smoke / steam from under the hood", tags: ["smoke_hood"] },
        { id: "poor_brakes", label: "🛑 Brake pedal is soft / goes to the floor", tags: ["poor_brakes"] }
      ]
    },
    {
      id: "fluid_type",
      type: "single",
      text: "What fluid is leaking?",
      conditions: { symptom: ["puddle", "low_level", "smell", "smoke_hood", "warning_light", "overheat"] },
      options: [
        { id: "oil", label: "🛢️ Motor oil (dark, oily)", tags: ["oil"] },
        { id: "coolant", label: "🧊 Coolant (antifreeze)", tags: ["coolant"] },
        { id: "brake_fluid", label: "🛑 Brake fluid (light, oily)", tags: ["brake_fluid"] },
        { id: "fuel", label: "⛽ Fuel (gasoline, diesel, strong smell)", tags: ["fuel"] },
        { id: "steering_fluid", label: "🔄 Power steering fluid (red, oily)", tags: ["steering_fluid"] },
        { id: "water", label: "💧 Water (condensation, clear)", tags: ["water"] },
        { id: "unknown", label: "❓ Don't know / not sure", tags: ["unknown"] }
      ]
    },
    {
      id: "fluid_color_single",
      type: "single",
      text: "What color is the fluid?",
      conditions: { symptom: ["puddle"] },
      options: [
        { id: "color_brown", label: "🟫 Brown / black (oil)", tags: ["color_brown"] },
        { id: "color_red", label: "🔴 Red (antifreeze, power steering)", tags: ["color_red"] },
        { id: "color_green", label: "🟢 Green / yellow (antifreeze)", tags: ["color_green"] },
        { id: "color_clear", label: "💧 Clear (water)", tags: ["color_clear"] },
        { id: "color_yellow", label: "🟡 Light yellow (brake fluid)", tags: ["color_yellow"] },
        { id: "color_unknown", label: "❓ Don't know", tags: ["color_unknown"] }
      ]
    },
    {
      id: "fluid_smell",
      type: "single",
      text: "What does the fluid smell like?",
      conditions: { symptom: ["puddle", "smell"] },
      options: [
        { id: "smell_oil", label: "🛢️ Oil smell (burnt)", tags: ["smell_oil"] },
        { id: "smell_sweet", label: "🍬 Sweet smell (antifreeze)", tags: ["smell_sweet"] },
        { id: "smell_fuel", label: "⛽ Strong smell (gasoline)", tags: ["smell_fuel"] },
        { id: "smell_chemical", label: "🧪 Chemical smell (brake fluid)", tags: ["smell_chemical"] },
        { id: "smell_none", label: "❌ No smell (water)", tags: ["smell_none"] },
        { id: "smell_unknown", label: "❓ Don't know", tags: ["smell_unknown"] }
      ]
    },
    {
      id: "leak_location",
      type: "single",
      text: "Where is the puddle under the car?",
      conditions: { symptom: ["puddle"] },
      options: [
        { id: "front_engine", label: "🔧 Under the engine (front)", tags: ["front_engine"] },
        { id: "front_coolant", label: "🧊 Under the radiator (front)", tags: ["front_coolant"] },
        { id: "middle", label: "📐 Under the middle of the car", tags: ["middle"] },
        { id: "rear", label: "🔙 Under the rear", tags: ["rear"] },
        { id: "wheel", label: "🛞 Under a wheel", tags: ["wheel"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      conditions: { symptom: ["puddle", "low_level", "warning_light", "smell", "overheat", "smoke_hood", "poor_brakes"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking"] }
      ]
    },
    {
      id: "has_tools",
      type: "single",
      text: "What do you have with you?",
      conditions: { symptom: ["puddle", "low_level", "warning_light", "smell", "overheat", "smoke_hood", "poor_brakes"] },
      options: [
        { id: "fluid", label: "🧴 Fluid (oil, antifreeze, brake fluid)", tags: ["fluid"] },
        { id: "funnel", label: "🔧 Funnel", tags: ["funnel"] },
        { id: "tools_partial", label: "🧤 Gloves", tags: ["tools_partial"] },
        { id: "tools_none", label: "❌ None of the above", tags: ["tools_none"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. IDENTIFY FLUID BY COLOR
    // ============================================================
    {
      id: "identify_fluid",
      title: "🔍 Identifying a fluid leak by color",
      description: "Color and consistency help identify what's leaking.",
      conditions: { symptom: ["puddle"], fluid_color_single: ["color_brown", "color_red", "color_green", "color_clear", "color_yellow"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2–5 minutes",
      yield_estimate: "Diagnosis",
      tags: ["identification", "fluid", "diagnostic"],
      steps: [
        "Place white paper or cardboard under the leak.",
        "Identify the fluid color.",
        "Motor oil (brown/black, oily) — engine leak.",
        "Coolant (red/green/blue) — cooling system.",
        "Brake fluid (light yellow, oily) — brake system.",
        "Fuel (gasoline/diesel, strong smell) — fuel system.",
        "Power steering fluid (red, oily) — power steering.",
        "Water (clear, odorless) — AC condensation (normal)."
      ],
      warnings: [
        "Don't touch fluids without gloves — many are toxic.",
        "Brake fluid damages paint — wash off immediately.",
        "If it smells like gasoline — don't smoke and don't turn on the ignition."
      ]
    },

    // ============================================================
    // 2. ENGINE OIL LEAK
    // ============================================================
    {
      id: "engine_oil_leak",
      title: "🛢️ Engine oil leak — diagnostics",
      description: "An oil puddle under the car is a sign of a leak. Check the level and find the source.",
      conditions: { symptom: ["puddle"], fluid_type: ["oil"], fluid_color_single: ["color_brown"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Leak severity assessed",
      tags: ["oil", "leak", "engine"],
      steps: [
        "Check the oil level with the dipstick (engine off, level ground).",
        "If level below MIN — top up.",
        "Inspect the engine from below: where exactly is it leaking?",
        "Common leak points: valve cover gasket, crankshaft seal, oil pan.",
        "If dripping — can drive to a service center (check level every 100 km).",
        "If heavy leak — call a tow truck.",
        "If oil gets on the exhaust manifold — smoke and burning smell."
      ],
      warnings: [
        "Low oil level is a threat to the engine.",
        "If oil leaks on hot parts — fire risk.",
        "Don't mix different types of oil."
      ]
    },

    // ============================================================
    // 3. COOLANT LEAK
    // ============================================================
    {
      id: "coolant_leak",
      title: "🧊 Coolant leak — overheating risk",
      description: "Antifreeze is leaking — the engine may overheat. Check the level and system.",
      conditions: { symptom: ["puddle", "overheat"], fluid_type: ["coolant"], fluid_color_single: ["color_red", "color_green"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Leak assessed + topped up",
      tags: ["coolant", "antifreeze", "overheat"],
      steps: [
        "Wait 30 minutes for the engine to cool before opening the expansion tank.",
        "Check the coolant level in the expansion tank (between MIN and MAX).",
        "If below MIN — top up with antifreeze (same color).",
        "If no antifreeze — top up with distilled water (last resort).",
        "Inspect hoses and the radiator for leaks.",
        "If minor leak — can drive to a service center, monitor temperature.",
        "If severe leak or overheating — call a tow truck.",
        "Start the engine and check for new leaks."
      ],
      warnings: [
        "DON'T open the radiator cap on a hot engine — burns!",
        "DON'T add cold water to a hot engine — may crack the block.",
        "Mixing different colored antifreeze can cause a reaction.",
        "If severe leak — don't drive."
      ]
    },

    // ============================================================
    // 4. BRAKE FLUID LEAK
    // ============================================================
    {
      id: "brake_fluid_leak",
      title: "🛑 Brake fluid leak — DO NOT DRIVE!",
      description: "Brake fluid is critical for safety. A leak is dangerous.",
      conditions: { symptom: ["poor_brakes", "warning_light"], fluid_type: ["brake_fluid"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Tow truck called + safety",
      tags: ["brake_fluid", "danger", "critical"],
      steps: [
        "DO NOT try to drive with a brake fluid leak!",
        "Turn on hazard lights, place a warning triangle.",
        "Check the brake fluid level (reservoir near the driver).",
        "If level is below MIN — critical leak.",
        "Never top up brake fluid with a leak (pointless).",
        "Call a tow truck.",
        "When towing — inform about brake failure."
      ],
      warnings: [
        "If the brake pedal goes to the floor — DO NOT DRIVE.",
        "Brake fluid is very corrosive — avoid skin contact.",
        "Don't mix DOT 4 and DOT 5 — incompatible."
      ]
    },

    // ============================================================
    // 5. FUEL LEAK
    // ============================================================
    {
      id: "fuel_leak",
      title: "⛽ Fuel leak — DO NOT IGNORE!",
      description: "A fuel leak is very dangerous! Take immediate action.",
      conditions: { fluid_type: ["fuel"], symptom: ["smell", "puddle"], fluid_smell: ["smell_fuel"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Safety + help called",
      tags: ["fuel", "danger", "emergency"],
      steps: [
        "DON'T smoke! DON'T turn on the ignition!",
        "DON'T start the engine!",
        "If leaking under the car — move to a safe distance (minimum 15 meters).",
        "Call a tow truck (don't try to drive).",
        "If the leak is large — call emergency services (911).",
        "Inform the tow truck driver about the fuel leak."
      ],
      warnings: [
        "Fuel is flammable! One spark — fire.",
        "Don't try to start the car — may cause a fire.",
        "If fuel gets on hot parts — it may ignite.",
        "If you smell fuel inside the cabin — ventilate, don't smoke."
      ]
    },

    // ============================================================
    // 6. POWER STEERING FLUID
    // ============================================================
    {
      id: "power_steering_leak",
      title: "🔄 Power steering fluid leak",
      description: "If the steering becomes heavy or there's a red fluid leak — check the power steering.",
      conditions: { fluid_type: ["steering_fluid"], fluid_color_single: ["color_red"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10–15 minutes",
      yield_estimate: "Leak diagnosed",
      tags: ["steering", "power_steering", "fluid"],
      steps: [
        "Check the power steering fluid level (under the hood).",
        "If low — top up with recommended fluid (ATF or specialized).",
        "If fluid drops quickly — leak in the system.",
        "Inspect hoses and connections for drips.",
        "If steering is heavy — don't drive long distances.",
        "Call a tow truck or drive slowly to a service center."
      ],
      warnings: [
        "Power steering leaks make steering very heavy.",
        "Don't drive without power steering fluid — rack damage.",
        "Power steering fluid is often red."
      ]
    },

    // ============================================================
    // 7. AC CONDENSATION
    // ============================================================
    {
      id: "ac_condensation",
      title: "💧 AC condensation — this is normal!",
      description: "If there's clean, clear water under the car — it's condensation.",
      conditions: { fluid_type: ["water"], fluid_color_single: ["color_clear"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 minute",
      yield_estimate: "Peace of mind",
      tags: ["water", "normal", "ac"],
      steps: [
        "Check that the fluid is clear and odorless (water).",
        "The puddle should be under the front of the car.",
        "If clean and odorless — AC condensation (normal).",
        "If discolored or has a smell — it's another fluid.",
        "If unsure — do the paper test.",
        "You can continue driving — no problem."
      ],
      warnings: [
        "If the water is not clean or has a smell — it's not condensation.",
        "If the AC hasn't been used for a while — there may be no water."
      ]
    },

    // ============================================================
    // 8. SMOKE FROM UNDER THE HOOD
    // ============================================================
    {
      id: "smoke_from_hood",
      title: "💨 Smoke / steam from under the hood — what to do",
      description: "Smoke or steam from under the hood is a sign of overheating or fluid on hot parts.",
      conditions: { symptom: ["smoke_hood"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Safety + diagnostics",
      tags: ["smoke", "overheat", "emergency"],
      steps: [
        "DON'T open the hood immediately! Let it cool for 10–15 minutes.",
        "If white smoke from under the hood — overheating or coolant leak.",
        "If black/blue smoke — oil on hot parts.",
        "If there's a burning smell — possible fire.",
        "Open the hood carefully using a cloth (hot parts).",
        "Check the coolant and oil levels.",
        "If there's a visible leak — call a tow truck.",
        "If smoke has stopped and levels are normal — can drive carefully."
      ],
      warnings: [
        "DON'T open the hood on a hot engine — burns.",
        "If smoke comes from under the hood while driving — stop and turn off the engine.",
        "If there's a burning smell — don't try to drive."
      ]
    },

    // ============================================================
    // 9. FLUID MIXING — PROHIBITED
    // ============================================================
    {
      id: "fluid_mixing_prevention",
      title: "🚫 Fluid mixing — important rules",
      description: "Mixing different fluids can damage your car.",
      conditions: { symptom: ["low_level", "warning_light"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Correct fluid selection",
      tags: ["fluids", "mixing", "prevention"],
      steps: [
        "Don't mix different types of oil (synthetic, semi-synthetic, mineral).",
        "Don't mix different colored antifreeze (may thicken).",
        "Don't mix DOT 4 and DOT 5 brake fluid (incompatible).",
        "Use only manufacturer-recommended fluids.",
        "If you don't know what's in there — don't top up randomly.",
        "Go to a service center for professional replacement."
      ],
      warnings: [
        "Mixing incompatible fluids can lead to expensive repairs.",
        "Don't add water to antifreeze in winter — it will freeze.",
        "Don't add oil if you don't know its type."
      ]
    },

    // ============================================================
    // 10. TOW TRUCK
    // ============================================================
    {
      id: "tow_truck_leak",
      title: "🚛 Calling a tow truck for a leak",
      description: "For severe leaks or critical fluids — call a tow truck.",
      conditions: { symptom: ["puddle", "low_level", "warning_light", "poor_brakes"], location: ["road", "highway"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "30–120 minutes",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights and place a warning triangle.",
        "Call your insurance — towing may be included.",
        "If not — call a tow truck.",
        "Tell the operator: car model, address, problem (fluid leak).",
        "If the fluid is dangerous (fuel, brake fluid) — inform them.",
        "On the highway — move behind the barrier.",
        "During loading — ask for caution."
      ],
      warnings: [
        "Don't try to drive with a severe leak.",
        "If fuel is leaking — don't start the car.",
        "Keep the towing receipt."
      ]
    }
  ]
});