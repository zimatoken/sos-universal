// === MODULE: AUTO — BATTERY (ENGLISH) ===
const autoBatteryDataEn = {
  category: "battery",
  title: "🔋 Dead Battery",
  description: "Battery problems: diagnostics, jump-start, replacement",

  questions: [
    {
      id: "symptom",
      text: "What are the symptoms?",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Clicking when turning the key", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence (nothing happens)", tags: ["battery", "dead", "electrical"] },
        { id: "slow_crank", label: "🐢 Starter turns slowly", tags: ["battery", "weak", "starter"] },
        { id: "lights_dark", label: "💡 Dim headlights / dim dashboard", tags: ["battery", "low_voltage"] },
        { id: "smell", label: "👃 Sulfur / rotten egg smell", tags: ["battery", "danger", "replace"] },
        { id: "swollen", label: "📦 Battery is swollen (deformed)", tags: ["battery", "danger", "replace"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      conditions: { symptom: ["click", "silence", "slow_crank", "lights_dark", "smell", "swollen"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (highway)", tags: ["road", "traffic", "emergency"] },
        { id: "parking", label: "🅿️ Parking lot / mall", tags: ["public", "help", "possible"] },
        { id: "remote", label: "🌲 Away from city (forest, field)", tags: ["remote", "no_help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      conditions: { symptom: ["click", "silence", "slow_crank", "lights_dark", "smell", "swollen"] },
      options: [
        { id: "cables", label: "🔌 Jumper cables", tags: ["jump_cables"] },
        { id: "voltmeter", label: "📟 Multimeter / tester", tags: ["diagnostics"] },
        { id: "charger", label: "🔋 Battery charger (220V)", tags: ["charger"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "time_season",
      text: "What season is it?",
      type: "single",
      conditions: { symptom: ["click", "silence", "slow_crank", "lights_dark", "smell", "swollen"] },
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
      conditions: { symptom: ["click", "silence", "slow_crank", "lights_dark", "smell", "swollen"] },
      options: [
        { id: "standard", label: "🚗 Standard passenger car (12V)", tags: ["standard"] },
        { id: "diesel", label: "🛻 Diesel (hard start)", tags: ["diesel"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid"] },
        { id: "unknown", label: "❓ Don't know / not sure", tags: ["unknown"] }
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
      description: "The fastest way to start the car if you have another car and cables.",
      conditions: { symptom: ["click", "silence", "slow_crank"], location: ["home", "road", "parking"], has_tools: ["cables"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Engine starts",
      tags: ["battery", "jump", "electrical"],
      steps: [
        "Find a car with a working battery (preferably 12V)",
        "Position cars close but not touching",
        "Turn off both cars (ignition, lights, all consumers)",
        "Connect clamps: red (positive) to your positive terminal, then to donor positive",
        "Black (negative) — to donor negative, other end to ground (unpainted metal) of your car",
        "Start the donor car and let it run for 2-3 minutes at idle",
        "Try to start your car (no longer than 10 seconds)",
        "After starting, let it run for 10-15 minutes (charges battery)",
        "Remove clamps in reverse order: negative from ground, negative from donor, positive from donor, positive from car",
        "Drive 20-30 minutes for full charge (no stops with engine off)"
      ],
      warnings: [
        "DO NOT touch clamps with engine running (short circuit risk)",
        "Watch polarity! Wrong connection can damage electronics (ECU)",
        "If battery smokes, smells, or is swollen — DO NOT jump-start (explosion risk)",
        "Diesel cars need thicker cables (at least 16 mm²)"
      ]
    },
    // ========================================
    // 2. Charging from 220V outlet
    // ========================================
    {
      id: "charger_220v",
      title: "🔌 Charging battery from 220V outlet",
      description: "If you have a charger and access to an outlet — best way to recover the battery.",
      conditions: { has_tools: ["charger"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "4-8 hours",
      yield_estimate: "Fully charged battery",
      tags: ["battery", "charger", "220v"],
      steps: [
        "Disconnect battery from car (remove terminals)",
        "Clean terminals from corrosion (baking soda + water)",
        "Connect charger to terminals: red to positive, black to negative",
        "Plug charger into 220V outlet",
        "Select mode: 10-15% of capacity (e.g., 6-7A for 60Ah)",
        "Charging time: 4-8 hours depending on discharge level",
        "Periodically check temperature (should not exceed 45°C)",
        "After charging, unplug from outlet, then disconnect clamps",
        "Reinstall battery, tighten terminals",
        "Check electrolyte level (for serviceable batteries)"
      ],
      warnings: [
        "DO NOT leave charger unattended overnight",
        "DO NOT try to charge deeply discharged battery with high current (>15%) — it may boil",
        "If battery doesn't hold charge after full charge — needs replacement",
        "Gel batteries require special mode (not more than 14.4V)"
      ]
    },
    // ========================================
    // 3. Diagnostics with multimeter
    // ========================================
    {
      id: "diagnostics_voltmeter",
      title: "📟 Battery diagnostics with multimeter",
      description: "If you have a multimeter — you can accurately diagnose battery and alternator condition.",
      conditions: { has_tools: ["voltmeter"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Accurate diagnosis",
      tags: ["diagnostics", "voltmeter", "testing"],
      steps: [
        "Set multimeter to DC voltage mode (DCV) up to 20V",
        "Measure voltage at battery terminals (engine off, lights off)",
        "Normal: 12.5-12.9V (fully charged), 12.3-12.5V (medium), below 12.0V — discharged",
        "Start engine and measure voltage at terminals while running (alternator)",
        "Normal: 13.8-14.4V (alternator charging). Below 13.5V — alternator not working",
        "If voltage drops below 12.0V — battery won't hold charge (needs replacement)",
        "Measure leakage current: remove negative terminal, set multimeter to ammeter mode (10A)",
        "Normal: less than 50 mA (0.05A). If higher — there's a leak",
        "Load test: turn on headlights, heater, radio — voltage should not drop below 12.0V"
      ],
      warnings: [
        "DO NOT measure with ignition on and engine running — risk to multimeter",
        "When measuring leakage current — wait 10 minutes (alarm goes to sleep mode)",
        "If alternator voltage is above 15V — voltage regulator faulty",
        "Check terminals: corrosion causes voltage drop (clean with sandpaper)"
      ]
    },
    // ========================================
    // 4. Emergency start without cables
    // ========================================
    {
      id: "emergency_start_no_tools",
      title: "🚀 Emergency start without cables (push/tow)",
      description: "If you have no cables and no one can help — try push-start or tow-start.",
      conditions: { location: ["road", "parking"], has_tools: ["nothing"], car_type: ["standard"] },
      priority: "medium",
      reliability: "low",
      time_estimate: "10-30 min",
      yield_estimate: "Engine starts",
      tags: ["emergency", "push_start", "tow"],
      steps: [
        "For manual transmission (MT): engage 2nd gear, press clutch",
        "Ask 2-3 people to push the car (or tow vehicle with rope)",
        "When car reaches 10-15 km/h, release clutch and press gas",
        "For automatic transmission (AT): this method DOES NOT WORK (only tow)",
        "Tow: attach rope, tow vehicle accelerates to 20-30 km/h, turn ignition and engage gear",
        "After starting — immediately shift to neutral to avoid collision",
        "Don't turn off engine for next 30 minutes (charge battery)",
        "Go to service or to friends for battery check"
      ],
      warnings: [
        "Method DOES NOT WORK on AT (automatic transmission)! Only MT",
        "Tow is dangerous: car may collide with tow vehicle",
        "If battery is completely dead (0V) — this won't help (needs replacement)",
        "After starting DON'T turn off engine at traffic lights"
      ]
    },
    // ========================================
    // 5. Battery replacement
    // ========================================
    {
      id: "replace_battery",
      title: "🔄 Battery replacement",
      description: "If battery is old, discharges, or swollen — need replacement.",
      conditions: { symptom: ["smell", "swollen", "lights_dark"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "New battery",
      tags: ["battery", "replace", "new"],
      steps: [
        "Buy new battery with same specs: capacity (Ah), CCA (A), polarity (right/left)",
        "Disconnect terminals: first negative (black), then positive (red)",
        "Unscrew battery hold-down (usually 1-2 bolts)",
        "Remove old battery (careful — heavy, may contain acid)",
        "Clean car terminal contacts (sandpaper or brush)",
        "Install new battery, secure with hold-down",
        "Connect terminals: first positive (red), then negative (black)",
        "Tighten terminals, apply grease (lithium, vaseline) to prevent corrosion",
        "Turn ignition on — check instruments",
        "Start engine — check for warning lights",
        "Dispose of old battery at recycling point (hazardous waste)"
      ],
      warnings: [
        "DO NOT reverse polarity when connecting! Otherwise — short circuit, fire",
        "DO NOT throw old battery in trash — contains acid and lead",
        "When buying, verify capacity (Ah) and CCA (should not be less than original)",
        "If car has Start-Stop system — need special battery (AGM/EFB)"
      ]
    },
    // ========================================
    // 6. Maintenance and charging
    // ========================================
    {
      id: "battery_maintenance",
      title: "🧽 Battery maintenance",
      description: "Extend battery life with simple maintenance: clean terminals, check electrolyte.",
      conditions: { location: ["home", "parking"], time_season: ["summer", "season_other"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-60 min",
      yield_estimate: "Extend battery life by 1-2 years",
      tags: ["battery", "maintenance", "long_term"],
      steps: [
        "Clean terminals from corrosion (sandpaper or special spray)",
        "Check electrolyte level (if serviceable battery)",
        "If needed — add distilled water (NOT acid!)",
        "Charge battery with charger (see solution 2)",
        "Check alternator belt tension — if loose, voltage drops",
        "Check for anything blocking battery (wires, corrosion)",
        "In severe cold — insulate battery (special cover)",
        "If car sits long — disconnect negative terminal or charge once a month"
      ],
      warnings: [
        "DO NOT fill above 'max' mark — battery may boil and leak acid",
        "DO NOT use tap water — only distilled",
        "If battery is serviceable and level dropped — normal (evaporates during charging)",
        "Sealed batteries (AGM, gel) cannot be maintained — only replacement"
      ]
    },
    // ========================================
    // 7. Tow truck
    // ========================================
    {
      id: "tow_truck",
      title: "🚛 Call a tow truck",
      description: "If nothing helps — call a tow truck. Safer than risking on the road.",
      conditions: { location: ["road", "remote"], has_tools: ["nothing"], car_type: ["diesel", "hybrid", "unknown"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and set warning triangle (on highway)",
        "Move to safe distance (behind barrier)",
        "Call insurance company — towing is often included in policy (OSAGO, CASCO)",
        "If no insurance — call paid towing service (search via Maps)",
        "Tell operator: location, car make, problem, phone number",
        "Wait for tow truck, prepare car for loading (handbrake, align front wheels)",
        "Loading: watch to avoid bumper or suspension damage",
        "Go to service center or home (depending on situation)"
      ],
      warnings: [
        "DO NOT wait on the road — move behind barrier (danger of collision)",
        "If towing price seems high — call other companies (prices vary 2x)",
        "Night towing costs more (usually +30-50%)",
        "If on highway — stand with warning triangle in hand"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoBatteryDataEn = autoBatteryDataEn;
