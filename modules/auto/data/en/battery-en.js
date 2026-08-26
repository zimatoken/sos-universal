// modules/auto/data/en/battery-en.js
// === MODULE: AUTO — DEAD BATTERY ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "auto",
    category: "battery",
    version: "1.0.0",
    lang: "en",
    title: "Dead Battery",
    description: "Battery problems: diagnostics, jump start, replacement, maintenance",
    icon: "🔋",
    color: "#2563eb"
  },

  questions: [
    {
      id: "symptom",
      type: "single",
      text: "What is the main symptom?",
      options: [
        { id: "click", label: "🔊 Clicking when turning the key (starter not engaging)", tags: ["click"] },
        { id: "silence", label: "🔇 Complete silence (nothing happens)", tags: ["silence"] },
        { id: "slow_crank", label: "🐢 Starter turns slowly", tags: ["slow_crank"] },
        { id: "dim_lights", label: "💡 Dim headlights / dim dashboard", tags: ["dim_lights"] },
        { id: "sulfur_smell", label: "👃 Sulfur / rotten egg smell", tags: ["sulfur_smell"] },
        { id: "swollen", label: "📦 Battery swollen (changed shape)", tags: ["swollen"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      conditions: { symptom: ["click", "silence", "slow_crank", "dim_lights", "sulfur_smell", "swollen"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe"] },
        { id: "road", label: "🛣️ On the road (highway)", tags: ["road"] },
        { id: "parking", label: "🅿️ Parking lot / mall", tags: ["public"] },
        { id: "remote", label: "🌲 Remote area (forest, field)", tags: ["remote"] }
      ]
    },
    {
      id: "has_tools",
      type: "single",
      text: "What do you have with you?",
      conditions: { symptom: ["click", "silence", "slow_crank", "dim_lights", "sulfur_smell", "swollen"] },
      options: [
        { id: "cables", label: "🔌 Jumper cables", tags: ["cables"] },
        { id: "voltmeter", label: "📟 Multimeter / tester", tags: ["voltmeter"] },
        { id: "charger", label: "🔋 Battery charger (220V)", tags: ["charger"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "battery_age",
      type: "single",
      text: "How old is the battery?",
      conditions: { symptom: ["click", "silence", "slow_crank", "dim_lights", "sulfur_smell", "swollen"] },
      options: [
        { id: "age_0_2", label: "📅 0–2 years (new)", tags: ["age_new"] },
        { id: "age_3_5", label: "📅 3–5 years (medium)", tags: ["age_medium"] },
        { id: "age_5_plus", label: "📅 More than 5 years (old)", tags: ["age_old"] },
        { id: "age_unknown", label: "❓ Don't know", tags: ["age_unknown"] }
      ]
    },
    {
      id: "battery_type",
      type: "single",
      text: "What type of battery?",
      conditions: { symptom: ["click", "silence", "slow_crank", "dim_lights", "sulfur_smell", "swollen"] },
      options: [
        { id: "type_wet", label: "💧 Wet (flooded)", tags: ["wet"] },
        { id: "type_agm", label: "🔋 AGM (Absorbent Glass Mat)", tags: ["agm"] },
        { id: "type_gel", label: "🧪 Gel", tags: ["gel"] },
        { id: "type_unknown", label: "❓ Don't know", tags: ["type_unknown"] }
      ]
    },
    {
      id: "time_season",
      type: "single",
      text: "What season is it?",
      conditions: { symptom: ["click", "silence", "slow_crank", "dim_lights", "sulfur_smell", "swollen"] },
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
      conditions: { symptom: ["click", "silence", "slow_crank", "dim_lights", "sulfur_smell", "swollen"] },
      options: [
        { id: "standard", label: "🚗 Standard car (12V)", tags: ["standard"] },
        { id: "diesel", label: "🛻 Diesel (hard starting)", tags: ["diesel"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid"] },
        { id: "unknown", label: "❓ Don't know / not sure", tags: ["unknown_car"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. JUMP START FROM ANOTHER CAR
    // ============================================================
    {
      id: "jump_start",
      title: "🔋 Jump starting from another car",
      description: "The fastest way to start your car if you have another vehicle and cables.",
      // ✅ CORRECT: all values are IDs from options
      conditions: { symptom: ["click", "slow_crank", "silence"], has_tools: ["cables"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Engine started",
      tags: ["battery", "jump", "electrical"],
      steps: [
        "Find a car with a working battery (12V). Park hood to hood.",
        "Turn off both vehicles (ignition, headlights, all consumers).",
        "Connect: red (positive) to your positive, then to donor positive.",
        "Black (negative) — to donor negative, other end to ground (unpainted metal) on your car.",
        "Start the donor, let it run for 2–3 minutes at idle.",
        "Try to start your car (no longer than 10 seconds).",
        "After starting, let it run for 10–15 minutes (charges the battery).",
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
    // 2. COMPLETE SILENCE — DEAD BATTERY
    // ============================================================
    {
      id: "complete_silence",
      title: "🔇 Complete silence — battery is dead",
      description: "Nothing happens when turning the key. The battery is fully discharged or the circuit is broken.",
      conditions: { symptom: ["silence"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Diagnostics and start",
      tags: ["silence", "dead", "battery"],
      steps: [
        "Check terminals: are they loose or corroded? Tighten, clean.",
        "Check voltage with a multimeter. If 0V — broken circuit.",
        "If voltage below 10V — deeply discharged. Needs charging or replacement.",
        "Try jump starting (see `jump_start` solution).",
        "If jump start doesn't work — check fuses (main, starter).",
        "If all is fine — possibly a faulty starter or ignition switch.",
        "Go to a service center or call a tow truck."
      ],
      warnings: [
        "If voltage is 0V — check wire integrity and terminals.",
        "DON'T try to charge a battery below 10V with a regular charger — it may boil.",
        "Deep discharge shortens battery life. After starting — check charging."
      ]
    },

    // ============================================================
    // 3. DIM LIGHTS — LOW VOLTAGE
    // ============================================================
    {
      id: "dim_lights",
      title: "💡 Dim lights — low voltage",
      description: "Headlights and dashboard are dim — battery is discharged or poor contact.",
      conditions: { symptom: ["dim_lights"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Diagnostics and fix",
      tags: ["dim_lights", "voltage", "diagnostics"],
      steps: [
        "Check terminals: corrosion causes voltage drop. Clean with sandpaper.",
        "Check voltage with a multimeter: should be 12.5–12.9V (engine off).",
        "If voltage below 12.0V — battery is discharged. Charge it.",
        "Check alternator belt: if loose, the alternator won't charge.",
        "Start the engine and check voltage at terminals: 13.8–14.4V is normal.",
        "If voltage doesn't rise — alternator is faulty.",
        "If all is normal — possibly wiring or consumer issues."
      ],
      warnings: [
        "Dim headlights can indicate poor ground (corrosion). Check body ground.",
        "If the alternator isn't charging — don't drive, the battery will die."
      ]
    },

    // ============================================================
    // 4. SULFUR SMELL — DANGER
    // ============================================================
    {
      id: "sulfur_smell",
      title: "👃 Sulfur smell — danger!",
      description: "Rotten egg smell — sign of overcharging or internal short circuit. This is dangerous.",
      conditions: { symptom: ["sulfur_smell"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Safety",
      tags: ["sulfur", "danger", "explosion"],
      steps: [
        "IMMEDIATELY turn off the ignition and open the hood.",
        "DON'T smoke, DON'T use open flames nearby.",
        "Ventilate the engine bay.",
        "Don't try to start or charge the battery — explosion risk.",
        "Call a tow truck or specialist for battery replacement.",
        "Dispose of the old battery at a designated collection point."
      ],
      warnings: [
        "Sulfur smell indicates internal short circuit or overcharging. DANGEROUS.",
        "DON'T try to charge such a battery — it may explode.",
        "DON'T touch terminals with bare hands — acid burn risk."
      ]
    },

    // ============================================================
    // 5. SWOLLEN BATTERY — DANGER
    // ============================================================
    {
      id: "swollen_battery",
      title: "📦 Swollen battery — danger!",
      description: "The battery has changed shape — sign of internal damage. Life-threatening.",
      conditions: { symptom: ["swollen"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Safety",
      tags: ["swollen", "danger", "replace"],
      steps: [
        "DON'T touch the swollen battery — it may explode.",
        "DON'T try to charge or jump start — dangerous.",
        "Open the hood, ventilate.",
        "Call a tow truck or specialist for replacement.",
        "Dispose of the old battery at a designated collection point."
      ],
      warnings: [
        "A swollen battery is 100% replacement. Don't save on safety.",
        "DON'T try to disassemble or compress the battery — explosion.",
        "When transporting — insulate terminals with tape."
      ]
    },

    // ============================================================
    // 6. CHARGING FROM 220V
    // ============================================================
    {
      id: "charger_220v",
      title: "🔌 Charging the battery from 220V",
      description: "If you have a charger and access to a socket — the best way to restore the battery.",
      conditions: { has_tools: ["charger"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "4–8 hours",
      yield_estimate: "Fully charged battery",
      tags: ["battery", "charger", "220v"],
      steps: [
        "Disconnect the battery from the car (remove terminals: negative first).",
        "Clean terminals from corrosion.",
        "Connect the charger: red to positive, black to negative.",
        "Plug the charger into 220V.",
        "Select mode: 10–15% of capacity (e.g., 6–7A for 60Ah).",
        "Charging time: 4–8 hours depending on discharge.",
        "Check temperature periodically (not above 45°C).",
        "After charging — unplug, then disconnect terminals.",
        "Install the battery back, tighten terminals."
      ],
      warnings: [
        "DON'T leave the charger unattended overnight.",
        "DON'T charge a deeply discharged battery with high current (>15%).",
        "Gel batteries require a special mode (no more than 14.4V).",
        "If the battery doesn't hold a charge after charging — replacement needed."
      ]
    },

    // ============================================================
    // 7. ALTERNATOR CHECK
    // ============================================================
    {
      id: "alternator_check",
      title: "🔧 Checking the alternator with a multimeter",
      description: "If the alternator doesn't charge, even a new battery will die.",
      conditions: { has_tools: ["voltmeter"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Alternator diagnosis",
      tags: ["alternator", "diagnostics", "charging"],
      steps: [
        "Start the engine and let it idle for 2–3 minutes.",
        "Measure voltage at the battery terminals: should be 13.8–14.4V.",
        "If below 13.5V — alternator isn't charging.",
        "If above 15V — voltage regulator is faulty.",
        "Turn on headlights, heater, radio — voltage should stay above 13.5V.",
        "If voltage drops — alternator is weak.",
        "Check the alternator belt: tension, wear.",
        "If the belt is fine — likely a faulty diode bridge or regulator."
      ],
      warnings: [
        "DON'T measure with ignition on but engine off — drains battery.",
        "If the alternator isn't charging — don't drive, battery will die.",
        "Alternator replacement is complex — trust a specialist."
      ]
    },

    // ============================================================
    // 8. BATTERY REPLACEMENT
    // ============================================================
    {
      id: "replace_battery",
      title: "🔄 Battery replacement",
      description: "If the battery is old, keeps dying, or swollen — replacement needed.",
      conditions: { symptom: ["sulfur_smell", "swollen", "dim_lights"], battery_age: ["age_old"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "20–40 minutes",
      yield_estimate: "New battery",
      tags: ["battery", "replace", "new"],
      steps: [
        "Buy a new battery: capacity (Ah), cold cranking amps (CCA), polarity (right/left).",
        "Disconnect terminals: negative first, then positive.",
        "Remove the battery clamp.",
        "Take out the old battery (heavy, acid).",
        "Clean the terminal contacts on the car.",
        "Install the new battery, secure with clamp.",
        "Connect terminals: positive first, then negative.",
        "Tighten terminals, apply grease to prevent corrosion.",
        "Turn on ignition — check dash lights.",
        "Start the engine — check for errors."
      ],
      warnings: [
        "DON'T reverse polarity! Short circuit, fire.",
        "DON'T throw the old battery in the trash — contains acid and lead.",
        "For Start-Stop cars — AGM/EFB battery required."
      ]
    },

    // ============================================================
    // 9. EMERGENCY START (PUSH START)
    // ============================================================
    {
      id: "emergency_start_no_tools",
      title: "🚀 Emergency start without cables (push start, tow)",
      description: "If you have no cables — try push starting or towing.",
      conditions: { has_tools: ["nothing"], car_type: ["standard"] },
      scoring: { priority: "medium", reliability: "low" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Engine started",
      tags: ["emergency", "push_start", "tow"],
      steps: [
        "For manual transmission: put in 2nd gear, press clutch.",
        "Get 2–3 people to push (or a tow vehicle).",
        "When speed reaches 10–15 km/h — release clutch smoothly and press gas.",
        "For automatic transmission — this DOES NOT WORK.",
        "Tow: attach rope, tow vehicle accelerates to 20–30 km/h, turn on ignition and gear.",
        "After starting — immediately put in neutral.",
        "Don't stall for 30 minutes.",
        "Immediately go to a service center."
      ],
      warnings: [
        "DOES NOT WORK on automatic transmission!",
        "Towing is dangerous — the car may crash into the tow vehicle.",
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
      conditions: { location: ["road", "remote"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "30–120 minutes",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and place a warning triangle.",
        "Move to a safe distance (behind the barrier).",
        "Call your insurance — towing is often included.",
        "If no insurance — call a paid towing service.",
        "Tell the operator: location, car model, problem.",
        "Wait for the tow truck, prepare the car for loading.",
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
