// === MODULE: AUTO — DEAD BATTERY (ENGLISH) ===
const autoBatteryDataEn = {
  category: "battery",
  title: "🔋 Dead battery",
  description: "Battery problems: diagnostics, starting, replacement",

  questions: [
    {
      id: "symptom",
      text: "What are the symptoms? (select all that apply)",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Click when turning the key", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence (nothing happens)", tags: ["battery", "dead", "electrical"] },
        { id: "slow_crank", label: "🐢 Starter turns slowly", tags: ["battery", "weak", "starter"] },
        { id: "lights_dark", label: "💡 Dim headlights / dim dashboard", tags: ["battery", "low_voltage"] },
        { id: "smell", label: "👃 Smell of sulfur / rotten eggs", tags: ["battery", "danger", "replace"] },
        { id: "swollen", label: "📦 Battery swollen (shape changed)", tags: ["battery", "danger", "replace"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
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
        { id: "cables", label: "🔌 Jumper cables", tags: ["jump_cables"] },
        { id: "voltmeter", label: "📟 Multimeter / tester", tags: ["diagnostics"] },
        { id: "charger", label: "🔋 Battery charger (220V)", tags: ["charger"] },
        { id: "nothing", label: "❌ Nothing from the above", tags: ["no_tools"] }
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
        { id: "diesel", label: "🛻 Diesel (hard to start)", tags: ["diesel"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid"] },
        { id: "unknown", label: "❓ I don't know / not sure", tags: ["unknown"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Jump start from another car
    // ========================================
    {
      id: "jump_start",
      title: "🔋 Jump start from another car",
      description: "The fastest way to start your car if there's another car and jumper cables available.",
      conditions: { symptom: ["click", "silence", "slow_crank"], location: ["home", "road", "parking"], has_tools: ["cables"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Engine start",
      tags: ["battery", "jump", "electrical"],
      steps: [
        "Find a car with a working battery (preferably with the same 12V voltage)",
        "Position cars so the hoods are close together (but not touching)",
        "Turn off both cars (ignition, lights, all consumers)",
        "Connect the cables: red (positive) to your battery's positive terminal, then to the donor's positive",
        "Black (negative) — to the donor's negative terminal, the other end to ground (unpainted metal) on your car",
        "Start the donor car and let it idle for 2-3 minutes",
        "Try to start your car (no longer than 10 seconds)",
        "After starting, let it run for 10-15 minutes (charges the battery)",
        "Remove cables in reverse order: negative from ground, negative from donor, positive from donor, positive from your car",
        "Drive for 20-30 minutes for a full charge (without stopping and turning off the engine)"
      ],
      warnings: [
        "DO NOT touch the terminals while the engine is running (risk of short circuit)",
        "Watch the polarity! Incorrect connection can damage electronics (ECU)",
        "If there is smoke, smell, or the battery is swollen — DO NOT jump start (risk of explosion)",
        "For diesel cars, thicker cables are needed (at least 16 mm²)"
      ]
    },
    // ========================================
    // 2. Charging from an external source
    // ========================================
    {
      id: "charger_220v",
      title: "🔌 Charging the battery from a 220V outlet",
      description: "If you have a charger and access to an outlet — this is the best way to restore the battery.",
      conditions: { has_tools: ["charger"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "4-8 hours",
      yield_estimate: "Fully charged battery",
      tags: ["battery", "charger", "220v"],
      steps: [
        "Disconnect the battery from the car (remove the terminals)",
        "Clean the terminals from oxidation (baking soda + water)",
        "Connect the charger to the terminals: red to positive, black to negative",
        "Plug the charger into a 220V outlet",
        "Select the mode: for serviceable batteries — 10-15% of capacity (e.g., 6-7A for 60Ah)",
        "Charging time: 4-8 hours depending on the discharge level",
        "Periodically check the temperature (should not exceed 45°C)",
        "After charging, unplug the charger, then disconnect the terminals",
        "Reinstall the battery, tighten the terminals",
        "Check the electrolyte level (for serviceable batteries)"
      ],
      warnings: [
        "DO NOT leave the charger unattended overnight",
        "DO NOT attempt to charge a deeply discharged battery with high current (>15%) — it may boil",
        "If the battery doesn't hold a charge after a full charge — replacement is needed",
        "Gel batteries require a special charging mode (not more than 14.4V)"
      ]
    },
    // ========================================
    // 3. Diagnostics with a multimeter
    // ========================================
    {
      id: "diagnostics_voltmeter",
      title: "📟 Battery diagnostics with a multimeter",
      description: "If you have a multimeter, you can accurately determine the condition of the battery and alternator.",
      conditions: { has_tools: ["voltmeter"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Accurate diagnosis",
      tags: ["diagnostics", "voltmeter", "testing"],
      steps: [
        "Set the multimeter to DC voltage measurement mode (DCV) up to 20V",
        "Measure the voltage on the battery terminals (engine off, lights off)",
        "Normal: 12.5-12.9V (fully charged), 12.3-12.5V (average), below 12.0V — discharged",
        "Start the engine and measure the voltage on the terminals with the engine running (alternator)",
        "Normal: 13.8-14.4V (alternator is charging). Below 13.5V — alternator is not working",
        "If the voltage drops below 12.0V — the battery doesn't hold a charge (replacement needed)",
        "Measure the parasitic draw: remove the negative terminal, set the multimeter to ammeter mode (10A)",
        "Normal: less than 50 mA (0.05A). If higher — there is a parasitic draw (alarm, radio, electronics)",
        "Load test: with load on (turn on headlights, heater, radio) voltage should not drop below 12.0V"
      ],
      warnings: [
        "DO NOT take measurements with the ignition on and engine running — you risk damaging the multimeter",
        "When measuring parasitic draw — wait 10 minutes (alarm enters sleep mode)",
        "If the alternator voltage is above 15V — voltage regulator is faulty (can kill the battery)",
        "Check the terminals: corrosion causes voltage drop (clean with sandpaper)"
      ]
    },
    // ========================================
    // 4. Emergency start without cables
    // ========================================
    {
      id: "emergency_start_no_tools",
      title: "🚀 Emergency start without cables (push-start, tow)",
      description: "If there are no cables and no one can help — try push-starting or towing.",
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
        "For automatic transmission (AT): this method DOES NOT WORK (tow only)",
        "Tow: secure the rope, the towing vehicle accelerates to 20-30 km/h, turn on ignition and engage gear",
        "After starting — immediately put it in neutral to avoid a collision",
        "Do not turn off the engine for the next 30 minutes (charge the battery)",
        "Drive to a service center or to friends to check the battery"
      ],
      warnings: [
        "This method DOES NOT WORK on AT (automatic transmission)! Only MT",
        "Towing is a dangerous method: the car can crash into the tow vehicle",
        "If the battery is completely dead (0V) — this method won't help (replacement needed)",
        "After starting, DO NOT turn off the engine at traffic lights — the battery may not restart"
      ]
    },
    // ========================================
    // 5. Battery replacement
    // ========================================
    {
      id: "replace_battery",
      title: "🔄 Battery replacement",
      description: "If the battery is old, discharged, or swollen — it needs to be replaced.",
      conditions: { symptom: ["smell", "swollen", "lights_dark"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "New battery",
      tags: ["battery", "replace", "new"],
      steps: [
        "Purchase a new battery with the same specifications: capacity (Ah), cranking amps (A), polarity (right/left)",
        "Disconnect the terminals: first negative (black), then positive (red)",
        "Unscrew the battery mounting (usually 1-2 bolts)",
        "Remove the old battery (careful, it's heavy and may contain acid)",
        "Clean the terminal contacts on the car (sandpaper or brush)",
        "Install the new battery, secure it with the mount",
        "Connect the terminals: first positive (red), then negative (black)",
        "Tighten the terminals, apply grease (lithium grease, vaseline) to protect against oxidation",
        "Turn on the ignition — check the dashboard",
        "Start the engine — check for errors on the dashboard",
        "Take the old battery to a special collection point (it's hazardous to the environment)"
      ],
      warnings: [
        "DO NOT mix up the polarity when connecting! Otherwise — short circuit, fire",
        "DO NOT throw the old battery in the trash — it contains acid and lead",
        "When purchasing, compare the capacity (Ah) and cranking amps (should not be less than the original)",
        "If the car has a Start-Stop system — a special battery (AGM/EFB) is needed"
      ]
    },
    // ========================================
    // 6. Maintenance and charging
    // ========================================
    {
      id: "battery_maintenance",
      title: "🧽 Battery maintenance",
      description: "Extend battery life with simple maintenance: cleaning terminals, checking electrolyte.",
      conditions: { location: ["home", "parking"], time_season: ["warm", "moderate"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-60 min",
      yield_estimate: "Extending battery life by 1-2 years",
      tags: ["battery", "maintenance", "long_term"],
      steps: [
        "Clean the terminals from oxidation (sandpaper or special spray)",
        "Check the electrolyte level (if the battery is serviceable)",
        "If necessary, top up with distilled water (not acid!)",
        "Charge the battery with a charger (see solution 2)",
        "Check the alternator belt tension — if loose, voltage will drop",
        "Check if anything is obstructing the battery (wires, corrosion)",
        "In severe frost — insulate the battery (special cover)",
        "If the car sits for a long time — disconnect the negative terminal or charge it once a month"
      ],
      warnings: [
        "DO NOT pour water above the 'max' mark — during charging the battery may boil and acid may leak",
        "DO NOT use regular water — only distilled water",
        "If the battery is serviceable and the level has dropped — this is normal (evaporates during charging)",
        "Sealed batteries (AGM, gel) cannot be serviced — only replacement"
      ]
    },
    // ========================================
    // 7. Tow truck call
    // ========================================
    {
      id: "tow_truck",
      title: "🚛 Call a tow truck",
      description: "If nothing helps — call a tow truck. It's safer than risking on the road.",
      conditions: { location: ["road", "remote"], has_tools: ["nothing"], car_type: ["diesel", "hybrid", "unknown"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-120 min",
      yield_estimate: "Car at the service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on the hazard lights and place an emergency triangle (on the highway)",
        "Move to a safe distance (behind the barrier)",
        "Call your insurance company — towing is often included in the policy (OSAGO, CASCO)",
        "If no insurance — call a paid towing service (search in Yandex/2GIS)",
        "Inform the operator: your location, car make, problem, phone number",
        "Wait for the tow truck, prepare the car for loading (handbrake, turn front wheels)",
        "Loading: watch to avoid bumper or suspension damage",
        "Go to a service center or home (depending on the situation)"
      ],
      warnings: [
        "DO NOT wait on the road — go behind the barrier (risk of being hit)",
        "If the towing price seems too high — call other companies (prices vary by 2 times)",
        "Towing at night costs more (usually +30-50%)",
        "If you're on the highway — stand with the emergency triangle in hand, car on the shoulder"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoBatteryDataEn = autoBatteryDataEn;