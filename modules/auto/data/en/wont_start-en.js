// modules/auto/data/en/wont_start-en.js
// === MODULE: AUTO — WON'T START ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "auto",
    category: "wont_start",
    version: "1.0.0",
    lang: "en",
    title: "🔌 Won't Start",
    description: "Diagnostics and solutions for engine starting problems — battery, starter, fuel, spark plugs",
    icon: "🔌",
    color: "#2563eb"
  },

  questions: [
    {
      id: "symptom",
      type: "single",
      text: "What is the main symptom when trying to start?",
      options: [
        { id: "click", label: "🔊 Clicking when turning the key", tags: ["click"] },
        { id: "silence", label: "🔇 Complete silence (nothing happens)", tags: ["silence"] },
        { id: "slow_crank", label: "🐢 Starter turns slowly", tags: ["slow_crank"] },
        { id: "crank_no_start", label: "⚙️ Cranks normally but won't start", tags: ["crank_no_start"] },
        { id: "lights_dark", label: "💡 Headlights/dashboard are dim", tags: ["lights_dark"] },
        { id: "smell_fuel", label: "👃 Gasoline smell (flooded plugs)", tags: ["smell_fuel"] },
        { id: "starter_noise", label: "🔊 Starter noise (grinding/whining)", tags: ["starter_noise"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      conditions: { symptom: ["click", "silence", "slow_crank", "crank_no_start", "lights_dark", "smell_fuel", "starter_noise"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road"] },
        { id: "parking", label: "🅿️ In a parking lot / mall", tags: ["parking"] },
        { id: "remote", label: "🌲 Remote area (forest, field)", tags: ["remote"] }
      ]
    },
    {
      id: "has_tools",
      type: "single",
      text: "What do you have with you?",
      conditions: { symptom: ["click", "silence", "slow_crank", "crank_no_start", "lights_dark", "smell_fuel", "starter_noise"] },
      options: [
        { id: "cables", label: "🔌 Jumper cables", tags: ["cables"] },
        { id: "voltmeter", label: "📟 Multimeter / tester", tags: ["voltmeter"] },
        { id: "fuel_can", label: "⛽ Gas can with fuel", tags: ["fuel_can"] },
        { id: "tools", label: "🔧 Tool set", tags: ["tools"] },
        { id: "tools_none", label: "❌ None of the above", tags: ["tools_none"] }
      ]
    },
    {
      id: "time_season",
      type: "single",
      text: "What season is it?",
      conditions: { symptom: ["click", "silence", "slow_crank", "crank_no_start", "lights_dark", "smell_fuel", "starter_noise"] },
      options: [
        { id: "summer", label: "☀️ Summer / warm", tags: ["warm"] },
        { id: "winter", label: "❄️ Winter / freezing", tags: ["cold"] },
        { id: "season_other", label: "🌤️ Spring / autumn", tags: ["moderate"] }
      ]
    },
    {
      id: "car_type",
      type: "single",
      text: "What type of car?",
      conditions: { symptom: ["click", "silence", "slow_crank", "crank_no_start", "lights_dark", "smell_fuel", "starter_noise"] },
      options: [
        { id: "standard", label: "🚗 Standard car (12V)", tags: ["standard"] },
        { id: "diesel", label: "🛻 Diesel (hard starting)", tags: ["diesel"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid"] },
        { id: "unknown", label: "❓ Don't know / not sure", tags: ["unknown_car"] }
      ]
    },
    {
      id: "start_attempts",
      type: "single",
      text: "How many times have you tried to start?",
      conditions: { symptom: ["click", "silence", "slow_crank", "crank_no_start", "lights_dark", "smell_fuel", "starter_noise"] },
      options: [
        { id: "once", label: "1️⃣ Once", tags: ["once"] },
        { id: "few", label: "2️⃣ A few times (2–3)", tags: ["few"] },
        { id: "many", label: "3️⃣ Many times (over 5)", tags: ["many"] }
      ]
    },
    {
      id: "dashboard_lights",
      type: "single",
      text: "Are the dashboard lights on when you turn on the ignition?",
      conditions: { symptom: ["click", "silence", "slow_crank", "crank_no_start", "lights_dark", "smell_fuel", "starter_noise"] },
      options: [
        { id: "dash_bright", label: "✅ Brightly lit", tags: ["dash_bright"] },
        { id: "dash_dim", label: "⚠️ Dimly lit", tags: ["dash_dim"] },
        { id: "dash_off", label: "❌ Not lit", tags: ["dash_off"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. JUMP START
    // ============================================================
    {
      id: "jump_start",
      title: "🔋 Jump starting from another car",
      description: "The fastest way to start your car if you have another vehicle and cables.",
      conditions: { symptom: ["click", "slow_crank", "lights_dark"], has_tools: ["cables"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Engine started",
      tags: ["battery", "jump", "electrical"],
      steps: [
        "Find a car with a working battery (12V).",
        "Park hood to hood.",
        "Turn off both vehicles.",
        "Connect: red to your positive, then to donor positive.",
        "Black to donor negative, other end to ground on your car.",
        "Start the donor, let it run for 2–3 minutes.",
        "Try to start your car (no longer than 10 seconds).",
        "After starting, let it run for 10–15 minutes.",
        "Remove cables in reverse order.",
        "Drive for 20–30 minutes to fully charge."
      ],
      warnings: [
        "DON'T touch terminals while the engine is running.",
        "Check polarity! Incorrect connection can damage electronics.",
        "If the battery is smoking, smelling, or swollen — DON'T jump start.",
        "For diesel cars, use thicker cables (at least 16 mm²)."
      ]
    },

    // ============================================================
    // 2. COMPLETE SILENCE
    // ============================================================
    {
      id: "complete_silence",
      title: "🔇 Complete silence — battery or immobilizer",
      description: "Nothing happens when turning the key. Causes: dead battery, bad contact, or immobilizer.",
      conditions: { symptom: ["silence"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Diagnosis",
      tags: ["silence", "dead", "battery"],
      steps: [
        "Check dashboard lights. If off — battery is dead.",
        "Check battery terminals: loose or corroded. Tighten, clean.",
        "If lights are on but starter doesn't turn — possibly immobilizer.",
        "Try shifting gears (auto — park, manual — neutral).",
        "If it doesn't help — check fuses.",
        "If you have a multimeter — check voltage at terminals.",
        "If voltage is 0V — broken circuit or dead battery."
      ],
      warnings: [
        "If lights are off — battery is completely dead.",
        "DON'T try to start if there's a burning smell — possible fire."
      ]
    },

    // ============================================================
    // 3. CHECK FUEL
    // ============================================================
    {
      id: "check_fuel",
      title: "⛽ Check fuel level",
      description: "The most common reason — out of gas.",
      conditions: { symptom: ["crank_no_start"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Diagnosis",
      tags: ["fuel", "basic", "check"],
      steps: [
        "Check the fuel gauge on the dashboard.",
        "If not sure — turn the key to ON and check.",
        "If you have a gas can — add 3–5 liters.",
        "Try to start after 2–3 minutes.",
        "If there's fuel but no start — check fuel delivery."
      ],
      warnings: [
        "DON'T try to start without fuel — can damage the fuel pump.",
        "DON'T smoke near fuel!"
      ]
    },

    // ============================================================
    // 4. BATTERY VOLTAGE CHECK
    // ============================================================
    {
      id: "battery_voltage_check",
      title: "📟 Check battery voltage with a multimeter",
      description: "Accurate diagnosis of the battery and alternator.",
      conditions: { symptom: ["click", "silence", "slow_crank", "lights_dark"], has_tools: ["voltmeter"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Accurate diagnosis",
      tags: ["diagnostics", "voltmeter", "testing"],
      steps: [
        "Set multimeter to DCV up to 20V.",
        "Measure voltage at battery terminals (engine off).",
        "Normal: 12.5–12.9V (fully charged), below 12.0V — discharged.",
        "Start the engine and measure: 13.8–14.4V — normal.",
        "If below 12.0V — battery won't hold charge.",
        "Measure current draw: remove negative terminal, set multimeter to ammeter.",
        "Normal: less than 50 mA."
      ],
      warnings: [
        "DON'T measure with ignition on and engine running.",
        "If alternator voltage is above 15V — voltage regulator is faulty."
      ]
    },

    // ============================================================
    // 5. IMMOBILIZER
    // ============================================================
    {
      id: "immobilizer_issue",
      title: "🔑 Immobilizer — key not recognized",
      description: "If lights are on, starter doesn't turn, and a key icon flashes — immobilizer issue.",
      conditions: { symptom: ["silence", "click"], dashboard_lights: ["dash_bright"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Engine started",
      tags: ["immobilizer", "key", "security"],
      steps: [
        "Key icon flashing on dashboard — immobilizer not recognizing the key.",
        "Try turning the key several times (sometimes contact is restored).",
        "Check the key battery (if applicable).",
        "If you have a spare key — try it.",
        "If it doesn't help — call a tow truck for diagnostics.",
        "In some cars, you can reset by disconnecting the battery for 10 minutes."
      ],
      warnings: [
        "Don't try to bypass the immobilizer yourself.",
        "If the key is not chipped — the car won't start."
      ]
    },

    // ============================================================
    // 6. FLOODED PLUGS
    // ============================================================
    {
      id: "flooded_plugs",
      title: "🔥 Flooded spark plugs",
      description: "If you smell gasoline and the engine won't start — the plugs are flooded.",
      conditions: { symptom: ["smell_fuel"], start_attempts: ["few", "many"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "20–40 minutes",
      yield_estimate: "Engine started",
      tags: ["flooded", "plugs", "fuel"],
      steps: [
        "Remove the spark plugs.",
        "Inspect: if wet and smell like gasoline — flooded.",
        "Dry the plugs: wipe with a cloth, heat with a gas torch (carefully!).",
        "If you have spare plugs — install new ones.",
        "Check the gap (0.8–1.1 mm).",
        "Install with correct torque (~20–30 Nm).",
        "Try to start without pressing the gas pedal."
      ],
      warnings: [
        "DON'T remove plugs from a hot engine — can damage the threads.",
        "DON'T dry plugs over an open flame in the cabin — fire risk."
      ]
    },

    // ============================================================
    // 7. STARTER NOISE
    // ============================================================
    {
      id: "starter_noise",
      title: "🔊 Starter noise (grinding/whining)",
      description: "Starter noise is a sign of mechanical failure (worn bendix or flywheel ring gear).",
      conditions: { symptom: ["starter_noise"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Diagnosis",
      tags: ["starter", "mechanical", "failure"],
      steps: [
        "Starter noise — bendix not engaging the flywheel.",
        "DON'T try to start again — can damage the flywheel ring gear.",
        "If you have a tool — tap the starter with a hammer (sometimes helps).",
        "If not — call a tow truck.",
        "In the service center: replace the bendix or starter assembly."
      ],
      warnings: [
        "DON'T try to start again — can damage the flywheel.",
        "Starter replacement is complex — trust a specialist."
      ]
    },

    // ============================================================
    // 8. CHECK FUSES
    // ============================================================
    {
      id: "fuse_check",
      title: "🔌 Check fuses",
      description: "A blown fuse can prevent the car from starting.",
      conditions: { symptom: ["silence", "click", "lights_dark"], dashboard_lights: ["dash_off", "dash_dim"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10–15 minutes",
      yield_estimate: "Diagnosis",
      tags: ["fuse", "electrical", "check"],
      steps: [
        "Find the fuse box (under the hood or in the cabin).",
        "Check fuses: main (100–150A), starter, ECU.",
        "Visually: if the filament is broken — fuse is blown.",
        "Check continuity with a multimeter.",
        "Replace only with the same rating.",
        "If the fuse blows immediately — there's a short circuit."
      ],
      warnings: [
        "DON'T use higher-rated fuses — may cause a fire.",
        "If a fuse is blown — find the cause, don't just replace."
      ]
    },

    // ============================================================
    // 9. PUSH START (MANUAL ONLY)
    // ============================================================
    {
      id: "push_start",
      title: "🚀 Push start (manual transmission only)",
      description: "If you have no cables and no help — try push starting.",
      conditions: { symptom: ["click", "silence", "slow_crank"], car_type: ["standard"] },
      scoring: { priority: "medium", reliability: "low" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Engine started",
      tags: ["emergency", "push_start", "manual"],
      steps: [
        "Turn the ignition on (key to ON).",
        "Put it in 2nd gear, press the clutch.",
        "Get 2–3 people to push the car.",
        "When speed reaches 10–15 km/h — release the clutch smoothly and press gas.",
        "After starting — press the clutch and put it in neutral.",
        "Don't stall for 30 minutes.",
        "Go to a service center to check the battery."
      ],
      warnings: [
        "DOES NOT WORK on automatic transmissions!",
        "If the battery is completely dead (0V) — this method won't help."
      ]
    },

    // ============================================================
    // 10. TOW TRUCK
    // ============================================================
    {
      id: "tow_truck",
      title: "🚛 Calling a tow truck",
      description: "If nothing helps — call a tow truck.",
      conditions: { location: ["road", "remote"], has_tools: ["tools_none"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "30–120 minutes",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and place a warning triangle.",
        "Move to a safe distance.",
        "Call your insurance — towing is often included.",
        "If not — call a paid towing service.",
        "Tell the operator: location, car model, problem.",
        "Wait for the tow truck, prepare the car.",
        "Go to a service center or home."
      ],
      warnings: [
        "DON'T wait on the road — move behind the barrier.",
        "Towing prices vary by 2x — call multiple companies.",
        "Night towing is more expensive (+30–50%)."
      ]
    }
  ]
});