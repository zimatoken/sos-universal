// === MODULE: AUTO — WON'T START (ENGLISH) ===

const autoWontStartDataEn = {
  category: "wont_start",
  title: "🔌 Won't start",
  description: "Diagnostics and solutions for engine starting problems",

  questions: [
    {
      id: "symptom",
      text: "What symptoms do you notice? (select all that apply)",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Clicking sound when turning the key", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence (nothing happens)", tags: ["battery", "dead", "electrical"] },
        { id: "slow_crank", label: "🐢 Starter turns slowly", tags: ["battery", "weak", "starter"] },
        { id: "crank_no_start", label: "⚙️ Cranks normally but won't start", tags: ["fuel", "spark", "engine"] },
        { id: "lights_dark", label: "💡 Dim headlights / dashboard lights", tags: ["battery", "low_voltage"] },
        { id: "smell_fuel", label: "👃 Gasoline smell (flooded spark plugs)", tags: ["fuel", "flooded", "spark"] },
        { id: "starter_noise", label: "🔊 Grinding or whining noise from starter", tags: ["starter", "mechanical", "failure"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (highway/city)", tags: ["road", "traffic", "emergency"] },
        { id: "parking", label: "🅿️ Parking lot / mall", tags: ["public", "help", "possible"] },
        { id: "remote", label: "🌲 Remote area (forest, field)", tags: ["remote", "no_help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "cables", label: "🔌 Jump-start cables", tags: ["jump_cables"] },
        { id: "voltmeter", label: "📟 Multimeter / tester", tags: ["diagnostics"] },
        { id: "fuel_can", label: "⛽ Fuel can", tags: ["fuel_can"] },
        { id: "tools", label: "🔧 Tool set", tags: ["tools"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "time_season",
      text: "What season is it?",
      type: "single",
      options: [
        { id: "summer", label: "☀️ Summer / warm", tags: ["warm"] },
        { id: "winter", label: "❄️ Winter / freezing", tags: ["cold"] },
        { id: "season_other", label: "🌤️ Spring / autumn", tags: ["moderate"] }
      ]
    },
    {
      id: "car_type",
      text: "What type of car do you have?",
      type: "single",
      options: [
        { id: "standard", label: "🚗 Standard car (12V)", tags: ["standard"] },
        { id: "diesel", label: "🛻 Diesel (harder to start)", tags: ["diesel"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid"] },
        { id: "unknown", label: "❓ I don't know / not sure", tags: ["unknown"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Jump-start from another car
    // ========================================
    {
      id: "jump_start",
      title: "🔋 Jump-start from another car",
      description: "The fastest way to start your car if you have another car and cables.",
      conditions: {
        symptom: ["click", "silence", "slow_crank", "lights_dark"],
        has_tools: ["cables"],
        location: ["home", "road", "parking"]
      },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Engine start",
      tags: ["battery", "jump", "electrical"],
      steps: [
        "Find a car with a working battery (12V)",
        "Position cars close enough for cables to reach (but not touching)",
        "Turn off both cars (ignition, lights, all consumers)",
        "Connect cables: red (positive) to positive terminal of your car, then to positive of donor",
        "Black (negative) — to negative terminal of donor, other end to ground (unpainted metal) of your car",
        "Start the donor car and let it run for 2-3 minutes at idle",
        "Try to start your car (no more than 10 seconds)",
        "After starting, let it run for 10-15 minutes (charges the battery)",
        "Remove cables in reverse order: negative from ground, negative from donor, positive from donor, positive from car",
        "Drive for 20-30 minutes for full charge"
      ],
      warnings: [
        "DO NOT touch terminals while engine is running",
        "Check polarity! Wrong connection can damage electronics",
        "If battery smokes, smells, or is swollen — DO NOT jump-start",
        "Diesel cars need thicker cables (at least 16 mm²)"
      ],
      tips: [
        "Always keep jump-start cables in your car",
        "Check battery terminals once a month",
        "If battery is over 5 years old — consider replacing it"
      ]
    },

    // ========================================
    // 2. Check fuel
    // ========================================
    {
      id: "check_fuel",
      title: "⛽ Check fuel level",
      description: "The most common reason — you just ran out of gas or diesel.",
      conditions: {
        symptom: ["crank_no_start"],
        location: ["home", "road", "parking", "remote"]
      },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 min",
      yield_estimate: "Diagnosis",
      tags: ["fuel", "basic", "check", "fast"],
      steps: [
        "Look at the fuel gauge on the dashboard",
        "If unclear — check the fuel level sensor (key in ON position)",
        "Check the reserve fuel tank (if available)",
        "Rock the car — gauge may show the real level",
        "If you have a fuel can — add 3-5 liters",
        "Try to start after 2-3 minutes (fuel should reach the pump)",
        "If fuel is present but won't start — check fuel delivery (listen for pump whine when ignition is on)"
      ],
      warnings: [
        "Do not run the engine without fuel — it can damage the fuel pump",
        "Do not smoke near fuel!",
        "Do not pour fuel into a hot engine"
      ],
      tips: [
        "Fill up early, don't run the tank empty",
        "Keep a spare fuel can in your trunk for emergencies",
        "In winter, diesel fuel can freeze — use anti-gel additive"
      ]
    },

    // ========================================
    // 3. Battery voltage check with multimeter
    // ========================================
    {
      id: "battery_voltage_check",
      title: "📟 Battery voltage check with multimeter",
      description: "Accurate diagnosis of battery and alternator condition.",
      conditions: {
        symptom: ["click", "silence", "slow_crank", "lights_dark"],
        has_tools: ["voltmeter"]
      },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Accurate diagnosis",
      tags: ["diagnostics", "voltmeter", "testing"],
      steps: [
        "Set multimeter to DC voltage mode (DCV) up to 20V",
        "Measure voltage on battery terminals (engine off, lights off)",
        "Normal: 12.5-12.9V (fully charged), 12.3-12.5V (medium), below 12.0V — discharged",
        "Start the engine and measure voltage at terminals while running",
        "Normal: 13.8-14.4V (alternator charging). Below 13.5V — alternator not working",
        "If voltage drops below 12.0V — battery won't hold charge (needs replacement)",
        "Measure parasitic draw: remove negative terminal, set multimeter to ammeter mode (10A)",
        "Normal: less than 50 mA (0.05A). If more — there's a drain"
      ],
      warnings: [
        "DO NOT measure with ignition on and engine running",
        "When measuring parasitic draw — wait 10 minutes (alarm goes to sleep)",
        "If alternator voltage is above 15V — voltage regulator is faulty"
      ],
      tips: [
        "Keep a multimeter in your car for diagnostics",
        "Check terminals monthly — corrosion causes voltage drop",
        "Record readings to track trends"
      ]
    },

    // ========================================
    // 4. Push start (manual transmission only)
    // ========================================
    {
      id: "push_start",
      title: "🚀 Push start (manual transmission only)",
      description: "If you don't have cables and no one can help — try push starting.",
      conditions: {
        symptom: ["click", "silence", "slow_crank"],
        car_type: ["standard"],
        has_tools: ["nothing"],
        location: ["road", "parking"]
      },
      priority: "medium",
      reliability: "low",
      time_estimate: "10-30 min",
      yield_estimate: "Engine start",
      tags: ["emergency", "push_start", "manual"],
      steps: [
        "Turn ignition on (key to ON position)",
        "Engage 2nd gear, press the clutch",
        "Ask 2-3 people to push the car",
        "When car reaches 10-15 km/h, release the clutch smoothly and press the gas",
        "After starting — immediately press the clutch and shift to neutral",
        "Don't turn off the engine for the next 30 minutes",
        "Go to a service center to check the battery"
      ],
      warnings: [
        "This method DOES NOT WORK on automatic transmissions (AT)!",
        "If the battery is completely dead (0V) — this method won't help",
        "After starting, DO NOT turn off the engine at traffic lights",
        "Be careful not to hit the people pushing"
      ],
      tips: [
        "For towing — use a tow rope and another vehicle",
        "During towing, keep distance and don't brake suddenly",
        "If there's a slope — use it for momentum"
      ]
    },

    // ========================================
    // 5. Battery replacement
    // ========================================
    {
      id: "replace_battery",
      title: "🔄 Battery replacement",
      description: "If the battery is old, won't hold charge, or is swollen — it needs replacement.",
      conditions: {
        symptom: ["click", "silence", "slow_crank", "lights_dark"],
        time_season: ["cold"],
        location: ["home", "parking"]
      },
      priority: "medium",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "New battery",
      tags: ["battery", "replace", "new"],
      steps: [
        "Buy a new battery with the same specifications: capacity (Ah), cold cranking amps (CCA), polarity",
        "Disconnect terminals: first negative (black), then positive (red)",
        "Unscrew the battery hold-down clamp (usually 1-2 bolts)",
        "Remove the old battery (careful, it's heavy)",
        "Clean the car's terminal contacts (sandpaper or brush)",
        "Install the new battery, secure with the clamp",
        "Connect terminals: first positive (red), then negative (black)",
        "Tighten terminals, apply grease (lithium, vaseline) to prevent corrosion",
        "Start the engine — check that there are no errors on the dashboard",
        "Dispose of the old battery at a recycling center"
      ],
      warnings: [
        "DO NOT mix up polarity! Wrong connection can cause a short circuit, fire",
        "DO NOT throw the old battery in the trash — it contains acid and lead",
        "When buying, check capacity (Ah) and CCA (must be at least original)",
        "If car has Start-Stop system — you need a special battery (AGM/EFB)"
      ],
      tips: [
        "In winter, choose a battery with higher cold cranking amps",
        "Check the manufacturing date before buying (not older than 6 months)",
        "Install the battery on a clean and dry surface"
      ]
    },

    // ========================================
    // 6. Spark plugs check
    // ========================================
    {
      id: "spark_plugs_check",
      title: "🔥 Spark plugs check",
      description: "If the engine cranks but won't start — the problem may be in the spark plugs.",
      conditions: {
        symptom: ["crank_no_start", "smell_fuel"],
        has_tools: ["tools"],
        location: ["home", "parking"]
      },
      priority: "medium",
      reliability: "medium",
      time_estimate: "20-40 min",
      yield_estimate: "Diagnosis",
      tags: ["spark", "plugs", "ignition"],
      steps: [
        "Remove a spark plug (using a 16/21 socket)",
        "Inspect the plug: black soot — rich mixture, white — lean mixture, oily — oil",
        "Check for spark: connect the plug to the high-voltage wire and ground it to unpainted metal",
        "Have someone crank the starter — there should be a bright spark",
        "If spark is weak or absent — check the ignition coil and wires",
        "Check the gap between electrodes (should be 0.8-1.1 mm)",
        "If needed — replace the plugs (apply copper anti-seize to threads)"
      ],
      warnings: [
        "DO NOT check for spark in a dark environment — you can get an electric shock",
        "DO NOT remove plugs from a hot engine — you can damage the threads",
        "If plugs are new — check the ignition coil and crankshaft position sensor"
      ],
      tips: [
        "Replace spark plugs every 30,000 km",
        "Use manufacturer-recommended plug brands",
        "Record the replacement date for tracking"
      ]
    },

    // ========================================
    // 7. Call a tow truck
    // ========================================
    {
      id: "tow_truck",
      title: "🚛 Call a tow truck",
      description: "If nothing else works — call a tow truck. It's safer than taking risks.",
      conditions: {
        location: ["road", "remote"],
        has_tools: ["nothing"],
        car_type: ["diesel", "hybrid", "unknown"]
      },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and place warning triangle",
        "Move to a safe distance (behind the barrier)",
        "Call your insurance company — towing is often included in the policy",
        "If no insurance — call a paid towing service",
        "Tell the operator: your location, car make, problem, phone number",
        "Wait for the tow truck, prepare the car for loading",
        "Go to a service center or home"
      ],
      warnings: [
        "DO NOT wait on the road — go behind the barrier",
        "If the towing price seems high — call other companies",
        "Night towing costs more (usually +30-50%)",
        "On the highway — stand with the warning sign in your hands"
      ],
      tips: [
        "Save tow truck numbers in your phone",
        "Check your battery once a month",
        "If problems persist — have the alternator and starter checked"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoWontStartDataEn = autoWontStartDataEn;