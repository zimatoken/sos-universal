<<<<<<< HEAD
// === MODULE: AUTO — DEAD BATTERY (ENGLISH) ===
const autoBatteryDataEn = {
  category: "battery",
  title: "🔋 Dead Battery",
  description: "Battery problems: diagnostics, jump-start, replacement",

  questions: [
    {
      id: "symptom",
      text: "What symptoms are you experiencing? (select all that apply)",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Clicking sound when turning the key", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence (nothing happens)", tags: ["battery", "dead", "electrical"] },
        { id: "slow_crank", label: "🐢 Starter cranks slowly", tags: ["battery", "weak", "starter"] },
        { id: "lights_dark", label: "💡 Dim headlights / dashboard lights", tags: ["battery", "low_voltage"] },
        { id: "smell", label: "👃 Smell of sulfur / rotten eggs", tags: ["battery", "danger", "replace"] },
        { id: "swollen", label: "📦 Battery is swollen (deformed)", tags: ["battery", "danger", "replace"] }
=======
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
>>>>>>> 92849c5936c3da4acab85528b91f11224f9f55d1
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
<<<<<<< HEAD
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (highway)", tags: ["road", "traffic", "emergency"] },
        { id: "parking", label: "🅿️ Parking lot / mall", tags: ["public", "help", "possible"] },
        { id: "remote", label: "🌲 Far from the city (forest, field)", tags: ["remote", "no_help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "cables", label: "🔌 Jump-start cables", tags: ["jump_cables"] },
        { id: "voltmeter", label: "📟 Multimeter / tester", tags: ["diagnostics"] },
        { id: "charger", label: "🔋 Battery charger (220V)", tags: ["charger"] },
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
        { id: "standard", label: "🚗 Standard passenger car (12V)", tags: ["standard"] },
        { id: "diesel", label: "🛻 Diesel (heavy start)", tags: ["diesel"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid"] },
        { id: "unknown", label: "❓ Not sure / don't know", tags: ["unknown"] }
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
      description: "The fastest way to start the car if there is another car and cables available.",
      conditions: { symptom: ["click", "silence", "slow_crank"], location: ["home", "road", "parking"], has_tools: ["cables"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Engine start",
      tags: ["battery", "jump", "electrical"],
      steps: [
        "Find a car with a working battery (preferably with the same voltage 12V)",
        "Position the cars so the hoods are close but not touching",
        "Turn off both cars (ignition, lights, all consumers)",
        "Connect the cables: red (positive) to the positive terminal of your car, then to the positive of the donor",
        "Black (negative) — to the negative terminal of the donor, other end to ground (unpainted metal) of your car",
        "Start the donor car and let it run for 2-3 minutes at idle",
        "Try to start your car (no longer than 10 seconds)",
        "After starting, let it run for 10-15 minutes (charges the battery)",
        "Disconnect cables in reverse order: negative from ground, negative from donor, positive from donor, positive from your car",
        "Drive for 20-30 minutes for a full charge (without stopping with the engine off)"
      ],
      warnings: [
        "DO NOT touch the terminals while the engine is running (risk of short circuit)",
        "Watch the polarity! Incorrect connection can damage electronics (ECU)",
        "If the battery is smoking, has a smell, or is swollen — DO NOT jump-start (risk of explosion)",
        "For diesel cars, thicker cables are needed (at least 16 mm²)"
      ]
    },
    // ========================================
    // 2. Charging from wall outlet
    // ========================================
    {
      id: "charger_220v",
      title: "🔌 Charging the battery from 220V outlet",
      description: "If you have a charger and access to an outlet — the best way to restore the battery.",
      conditions: { has_tools: ["charger"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "4-8 hours",
      yield_estimate: "Fully charged battery",
      tags: ["battery", "charger", "220v"],
      steps: [
        "Disconnect the battery from the car (remove the terminals)",
        "Clean the terminals from oxides (baking soda + water)",
        "Connect the charger to the terminals: red to positive, black to negative",
        "Plug the charger into the 220V outlet",
        "Select the mode: for maintainable batteries — 10-15% of capacity (e.g., 6-7A for 60Ah)",
        "Charging time: 4-8 hours depending on the degree of discharge",
        "Periodically check the temperature (should not exceed 45°C)",
        "After charging, unplug the charger, then disconnect the terminals",
        "Install the battery back, tighten the terminals",
        "Check the electrolyte level (for serviceable batteries)"
      ],
      warnings: [
        "DO NOT leave the charger unattended overnight",
        "DO NOT try to charge a deeply discharged battery with a high current (>15%) — it may boil",
        "If the battery doesn't hold a charge after a full charge — it needs to be replaced",
        "Gel batteries require a special charging mode (no more than 14.4V)"
      ]
    },
    // ========================================
    // 3. Diagnostics with a multimeter
    // ========================================
    {
      id: "diagnostics_voltmeter",
      title: "📟 Battery diagnostics with a multimeter",
      description: "If you have a multimeter — you can accurately determine the condition of the battery and alternator.",
      conditions: { has_tools: ["voltmeter"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Accurate diagnosis",
      tags: ["diagnostics", "voltmeter", "testing"],
      steps: [
        "Set the multimeter to DC voltage measurement mode (DCV) up to 20V",
        "Measure the voltage on the battery terminals (engine off, lights off)",
        "Normal: 12.5-12.9V (fully charged), 12.3-12.5V (medium), below 12.0V — discharged",
        "Start the engine and measure the voltage on the terminals with the engine running (alternator)",
        "Normal: 13.8-14.4V (alternator is charging). Below 13.5V — alternator is not working",
        "If the voltage drops below 12.0V — the battery doesn't hold a charge (needs replacement)",
        "Measure current leakage: remove the negative terminal, set multimeter to ammeter mode (10A)",
        "Normal: less than 50 mA (0.05A). If higher — there is a leak (alarm, stereo, electronics)",
        "Perform a load test: when turning on lights, heater, radio — voltage should not drop below 12.0V"
      ],
      warnings: [
        "DO NOT take measurements with the ignition on and engine running — risk to the multimeter",
        "When measuring leakage current — wait 10 minutes (alarm goes to sleep mode)",
        "If the alternator voltage is above 15V — the voltage regulator is faulty (can kill the battery)",
        "Check the terminals: oxides cause voltage drop (clean with sandpaper)"
      ]
    },
    // ========================================
    // 4. Emergency start without cables
    // ========================================
    {
      id: "emergency_start_no_tools",
      title: "🚀 Emergency start without cables (push-start, tow)",
      description: "If there are no cables and no one can help — try starting with a push or tow.",
      conditions: { location: ["road", "parking"], has_tools: ["nothing"], car_type: ["standard"] },
      priority: "medium",
      reliability: "low",
      time_estimate: "10-30 min",
      yield_estimate: "Engine start",
      tags: ["emergency", "push_start", "tow"],
      steps: [
        "For manual transmission (MT): engage 2nd gear, press the clutch",
        "Ask 2-3 people to push the car (or a tow vehicle with a rope)",
        "When the car reaches 10-15 km/h, smoothly release the clutch and press the gas",
        "For automatic transmission (AT): this method DOES NOT WORK (only tow)",
        "Tow: attach the rope, the towing vehicle accelerates to 20-30 km/h, turn on the ignition and gear",
        "After starting — immediately engage neutral to avoid collision",
        "Do not turn off the engine for the next 30 minutes (charge the battery)",
        "Go to a service station or friends immediately for battery inspection"
      ],
      warnings: [
        "This method DOES NOT WORK on AT (automatic transmission)! Only MT",
        "Tow — a dangerous method: the car may collide with the towing vehicle",
        "If the battery is completely dead (0V) — this method won't help (needs replacement)",
        "After starting DO NOT turn off the engine at traffic lights — the battery may not start again"
      ]
    },
    // ========================================
    // 5. Battery replacement
    // ========================================
    {
      id: "replace_battery",
      title: "🔄 Battery replacement",
      description: "If the battery is old, keeps discharging, or is swollen — it needs to be replaced.",
      conditions: { symptom: ["smell", "swollen", "lights_dark"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "New battery",
      tags: ["battery", "replace", "new"],
      steps: [
        "Buy a new battery with the same specifications: capacity (Ah), cold cranking amps (CCA), polarity (right/left)",
        "Disconnect the terminals: first negative (black), then positive (red)",
        "Unscrew the battery hold-down (usually 1-2 bolts)",
        "Remove the old battery (careful, it's heavy and may contain acid)",
        "Clean the terminal contacts on the car (sandpaper or a brush)",
        "Install the new battery, secure with the hold-down",
        "Connect the terminals: first positive (red), then negative (black)",
        "Tighten the terminals, apply grease (lithium, petroleum jelly) to protect from oxidation",
        "Turn on the ignition — check the dashboard",
        "Start the engine — check for any error codes on the dashboard",
        "Dispose of the old battery at a special collection point (dangerous for the environment)"
      ],
      warnings: [
        "DO NOT mix up the polarity when connecting! Otherwise — short circuit, fire",
        "DO NOT throw the old battery in the trash — it contains acid and lead",
        "When buying, match the capacity (Ah) and cold cranking amps (should be at least the original)",
        "If the car has a Start-Stop system — a special battery is needed (AGM/EFB)"
      ]
    },
    // ========================================
    // 6. Battery maintenance
    // ========================================
    {
      id: "battery_maintenance",
      title: "🧽 Battery maintenance",
      description: "Extend the life of the battery with simple maintenance: cleaning terminals, checking electrolyte.",
      conditions: { location: ["home", "parking"], time_season: ["warm", "moderate"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-60 min",
      yield_estimate: "Extend battery life by 1-2 years",
      tags: ["battery", "maintenance", "long_term"],
      steps: [
        "Clean the terminals from oxides (sandpaper or special spray)",
        "Check the electrolyte level (if the battery is serviceable)",
        "If necessary, add distilled water (not acid!)",
        "Charge the battery with a charger (see solution 2)",
        "Check the alternator belt tension — if loose, voltage drops",
        "Check if anything is interfering with the battery (wires, corrosion)",
        "During severe frost — insulate the battery (special cover)",
        "If the car sits for a long time — disconnect the negative terminal or charge once a month"
      ],
      warnings: [
        "DO NOT fill water above the 'max' mark — during charging the battery may boil and leak acid",
        "DO NOT use regular water — only distilled",
        "If the battery is serviceable and the level has dropped — it's normal (evaporates during charging)",
        "Sealed batteries (AGM, gel) cannot be maintained — only replacement"
      ]
    },
    // ========================================
    // 7. Calling a tow truck
    // ========================================
    {
      id: "tow_truck",
      title: "🚛 Calling a tow truck",
      description: "If nothing helps — call a tow truck. It's safer than risking it on the road.",
      conditions: { location: ["road", "remote"], has_tools: ["nothing"], car_type: ["diesel", "hybrid", "unknown"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and place the emergency triangle (on the highway)",
        "Move to a safe distance (behind the barrier)",
        "Call your insurance company — tow truck is often included in the policy (OSAGO, CASCO)",
        "If no insurance — call a paid towing service (search in 2GIS/Yandex)",
        "Tell the operator: your location, car make, problem, phone number",
        "Wait for the tow truck, prepare the car for loading (handbrake, turn front wheels)",
        "Loading: watch to ensure the bumper or suspension is not damaged",
        "Go to the service center or home (depending on the situation)"
      ],
      warnings: [
        "DO NOT wait on the road — move behind the barrier (risk of collision)",
        "If the towing price seems high — call other companies (prices vary by 2x)",
        "Towing at night is more expensive (usually +30-50%)",
        "If you're on the highway — stand with the emergency sign in hand, car on the shoulder"
=======
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
>>>>>>> 92849c5936c3da4acab85528b91f11224f9f55d1
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoBatteryDataEn = autoBatteryDataEn;
