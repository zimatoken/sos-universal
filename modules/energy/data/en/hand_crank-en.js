// modules/energy/data/en/hand_crank-en.js
// === MODULE: ENERGY — HAND CRANK GENERATOR ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "energy",
    category: "hand_crank",
    version: "1.0.0",
    lang: "en",
    title: "Hand Crank Generator",
    description: "Generators from motors, bicycle hubs, drills. Spin — get electricity. Unlimited power source made by yourself.",
    icon: "🔧",
    color: "#3b82f6"
  },

  questions: [
    // ============================================================
    // QUESTION 1: Mechanics
    // ============================================================
    {
      id: "mechanics",
      type: "single",
      text: "What mechanical parts do you have for a generator?",
      options: [
        { id: "toy_motor", label: "🚗 Motor from a toy / fan / cooler", tags: ["motor"] },
        { id: "bike_hub", label: "🚲 Bicycle hub with dynamo", tags: ["bike"] },
        { id: "drill", label: "🔌 Drill / screwdriver (without battery)", tags: ["drill"] },
        { id: "fan", label: "🌀 12V computer fan / cooler", tags: ["fan"] },
        { id: "stepper", label: "⚙️ Stepper motor (from printer, scanner)", tags: ["stepper"] },
        { id: "nothing_mech", label: "❌ Nothing suitable", tags: ["none"] }
      ]
    },

    // ============================================================
    // QUESTION 2: Electronics
    // ============================================================
    {
      id: "electronics",
      type: "multi",
      text: "What electronics do you have for rectification and stabilization?",
      conditions: { mechanics: ["toy_motor", "bike_hub", "drill", "fan", "stepper"] },
      options: [
        { id: "diodes", label: "💡 Diodes (1N4007, any silicon)", tags: ["diode"] },
        { id: "capacitor", label: "🔋 Capacitor / electrolytic (470–1000 µF)", tags: ["cap"] },
        { id: "regulator", label: "⚡ 5V regulator (7805, LM2596)", tags: ["reg"] },
        { id: "bridge", label: "🌀 Diode bridge (ready or 4 diodes)", tags: ["bridge"] },
        { id: "no_elec", label: "❌ Nothing", tags: ["none"] }
      ]
    },

    // ============================================================
    // QUESTION 3: Purpose
    // ============================================================
    {
      id: "purpose",
      type: "single",
      text: "What do you need the energy for?",
      conditions: { mechanics: ["toy_motor", "bike_hub", "drill", "fan", "stepper"] },
      options: [
        { id: "charge_phone", label: "📱 Charge phone (USB 5V)", tags: ["phone"] },
        { id: "light_bulb", label: "💡 Light (bulb / LED)", tags: ["light"] },
        { id: "radio_power", label: "📻 Radio / receiver", tags: ["radio"] },
        { id: "signal_beacon", label: "🚨 Signal beacon / emergency light", tags: ["signal"] },
        { id: "battery_charge", label: "🔋 Charge a battery", tags: ["battery"] }
      ]
    },

    // ============================================================
    // QUESTION 4: Physical condition
    // ============================================================
    {
      id: "physical",
      type: "single",
      text: "What is your physical stamina and conditions?",
      conditions: { mechanics: ["toy_motor", "bike_hub", "drill", "fan", "stepper"] },
      options: [
        { id: "strong", label: "💪 Can crank 10+ minutes continuously", tags: ["strong"] },
        { id: "average", label: "😐 Average — 5 minutes, then break", tags: ["avg"] },
        { id: "weak", label: "😰 Weak — arms tire quickly (1–2 minutes)", tags: ["weak"] },
        { id: "wind", label: "💨 There is wind — can use blades", tags: ["wind"] },
        { id: "water", label: "💧 There is running water / current — hydro turbine", tags: ["water"] }
      ]
    },

    // ============================================================
    // QUESTION 5: Gear mechanism
    // ============================================================
    {
      id: "gear",
      type: "single",
      text: "Do you have a way to increase RPM (gears, belt)?",
      conditions: { mechanics: ["toy_motor", "bike_hub", "drill", "fan", "stepper"] },
      options: [
        { id: "gear_yes", label: "⚙️ Yes, gears / belt / toothed drive", tags: ["gear"] },
        { id: "gear_no", label: "❌ No, only direct drive (shaft to shaft)", tags: ["no_gear"] },
        { id: "gear_bike", label: "🚲 Bicycle chain / sprockets available", tags: ["bike_gear"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // SOLUTION 1: MOTOR GENERATOR (SIMPLE)
    // ============================================================
    {
      id: "motor_generator",
      title: "🚗 Motor generator from a toy or cooler",
      description: "Any DC motor is a generator. Spin the shaft — get 3–12V. Suitable for phone via diode bridge.",
      conditions: { mechanics: ["toy_motor", "fan"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–20 minutes assembly",
      yield_estimate: "3–5% per 10 minutes of cranking",
      tags: ["motor", "generator", "simple", "diy"],
      steps: [
        "Find a DC motor from a broken toy, fan, or computer cooler.",
        "Test: spin the shaft with your fingers — voltage should appear on the contacts.",
        "Make a handle: glue a stick, spoke, toothbrush handle, or screwdriver bit.",
        "If voltage is up to 5V — connect directly to USB (red +, black −).",
        "If above 6V — add a diode bridge (4 diodes) or 7805 regulator.",
        "Spin steadily: 2–3 revolutions per second = stable 5V.",
        "You can attach blades from a plastic bottle — wind will spin it automatically.",
        "10 minutes of active cranking = 3–5% phone charge."
      ],
      warnings: [
        "DO NOT spin too fast — >12V will fry your phone.",
        "Cooler motors give 3–5V even at high speeds — safe for direct connection.",
        "Your arms will tire — alternate hands or use a foot pedal.",
        "Check polarity: reversed wires = no charging."
      ]
    },

    // ============================================================
    // SOLUTION 2: BICYCLE HUB DYNAMO
    // ============================================================
    {
      id: "bicycle_dynamo",
      title: "🚲 Bicycle hub with dynamo",
      description: "Hub dynamo gives 3–6V while riding. Lift the rear wheel and pedal — get stable current.",
      conditions: { mechanics: ["bike_hub"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "10–20% charge per 20 minutes of pedaling",
      tags: ["bike", "dynamo", "powerful", "sustainable"],
      steps: [
        "Lift the rear wheel of the bicycle (place on a log, stone, upside-down chair).",
        "Connect the dynamo wires to a USB cable.",
        "Hub dynamos give AC — use a diode bridge from 4 diodes.",
        "Pedal steadily: 10–15 km/h = stable 5V.",
        "You can tie the bike to a tree and pedal with one leg.",
        "20 minutes of pedaling = 10–20% phone charge.",
        "Hub dynamo — the most powerful hand generator from everyday items."
      ],
      warnings: [
        "DO NOT pedal too fast — overvoltage will damage your phone.",
        "Check polarity: reversed wires = no charging.",
        "Old dynamos give pulsing current — add a 470–1000 µF capacitor for smoothing.",
        "Without a load, dynamo can give up to 20V — always connect a load (phone)."
      ]
    },

    // ============================================================
    // SOLUTION 3: DRILL AS GENERATOR (POWERFUL)
    // ============================================================
    {
      id: "drill_generator",
      title: "🔌 Drill as a powerful generator",
      description: "An electric drill in 'free rotation' mode is a powerful generator. 10–30V when spinning fast. Requires stabilization.",
      conditions: { mechanics: ["drill"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–15 minutes",
      yield_estimate: "Up to 10W — can charge multiple devices",
      tags: ["drill", "powerful", "dangerous", "high_power"],
      steps: [
        "Take a drill without a battery (corded or with dead battery).",
        "Chuck a stick, screwdriver bit, or handle for spinning.",
        "Spin fast: 500–1000 RPM = 10–30V.",
        "MUST use a diode bridge + 7805 or LM2596 regulator.",
        "Without a regulator, voltage fluctuates — phone will fry.",
        "Can be attached to a bicycle wheel or wind blades.",
        "The most powerful DIY generator — but requires caution and stabilization."
      ],
      warnings: [
        "⚠️ DANGER: without a 7805 or LM2596 regulator, the phone WILL fry!",
        "DO NOT touch the spinning chuck — injury.",
        "Drill is heavy — secure it firmly before use.",
        "Voltage can exceed 30V — deadly dangerous in a short circuit."
      ]
    },

    // ============================================================
    // SOLUTION 4: BOTTLE WIND TURBINE (PASSIVE)
    // ============================================================
    {
      id: "wind_turbine",
      title: "💨 Wind turbine from a plastic bottle",
      description: "Motor + blades from a plastic bottle = wind generator. 3–5 m/s wind gives 2–5V. Requires no physical effort.",
      conditions: { mechanics: ["toy_motor", "fan"], physical: ["wind"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "20–30 minutes",
      yield_estimate: "1–3% per hour (depends on wind)",
      tags: ["wind", "turbine", "passive", "eco"],
      steps: [
        "Cut a plastic bottle into 4–6 blades (10–15 cm long).",
        "Bend the blades at 30° angle — creates rotational torque.",
        "Attach blades to the motor shaft (glue, tape, paperclips).",
        "Mount the assembly high: roof, pole, tree branch.",
        "Connect to diode bridge and capacitor (for smoothing).",
        "Wind 3 m/s = 2–3V. Wind 5 m/s = 4–5V — enough for USB.",
        "Secure firmly — strong wind can tear the structure down."
      ],
      warnings: [
        "DO NOT install under power lines.",
        "Plastic blades break in strong wind — use a metal frame.",
        "Capacitor is essential — without it, current pulsates and won't charge a phone.",
        "In strong wind (>10 m/s), the generator may fail — protect it."
      ]
    },

    // ============================================================
    // SOLUTION 5: HYDRO TURBINE FROM PLASTIC BOTTLE
    // ============================================================
    {
      id: "water_turbine",
      title: "💧 Hydro turbine from plastic bottle",
      description: "Flowing water — free energy source. A bottle turbine in a stream or river gives 2–5V continuously, without fatigue.",
      conditions: { mechanics: ["toy_motor", "fan"], physical: ["water"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30–60 minutes",
      yield_estimate: "2–5V, depends on flow speed",
      tags: ["water", "turbine", "hydro", "passive"],
      steps: [
        "Cut a plastic bottle into blades (like for a wind turbine).",
        "Attach to the motor shaft (waterproof, tape, glue).",
        "Secure the assembly in a stream, river, or under a downspout.",
        "Water should spin the blades — faster flow = higher voltage.",
        "Connect to diode bridge and capacitor.",
        "Even a slow current gives 1–2V — can be stored on a capacitor.",
        "Do not use in freezing water — ice will destroy the blades."
      ],
      warnings: [
        "DO NOT use in fast rivers — the turbine can be swept away.",
        "Waterproof the motor — water will destroy the contacts.",
        "DO NOT leave unattended — it may clog with debris.",
        "Check wire insulation — water and electricity are dangerous."
      ]
    },

    // ============================================================
    // SOLUTION 6: STEPPER MOTOR AS GENERATOR
    // ============================================================
    {
      id: "stepper_generator",
      title: "⚙️ Stepper motor as a powerful generator",
      description: "A stepper motor from a printer, scanner, or 3D printer gives 5–30V even at slow rotation. Very efficient.",
      conditions: { mechanics: ["stepper"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "15–25 minutes",
      yield_estimate: "5–30V when spinning by hand",
      tags: ["stepper", "powerful", "efficient", "generator"],
      steps: [
        "Find a stepper motor (from old printer, scanner, 3D printer).",
        "Stepper motors have 4, 5, 6, or 8 wires (two coils).",
        "Find wire pairs using a multimeter (resistance between coils).",
        "Connect coils in series or through a diode bridge.",
        "Spin the shaft by hand or via belt — voltage appears on the contacts.",
        "Stepper motors give high voltage even at low RPM.",
        "Use a 7805 regulator to get 5V."
      ],
      warnings: [
        "Some stepper motors give up to 50V — check before connecting.",
        "DO NOT short the stepper motor leads while spinning — it may burn.",
        "Coils have low resistance — use overload protection.",
        "Without a load, voltage can be dangerously high."
      ]
    },

    // ============================================================
    // SOLUTION 7: DYNAMO FLASHLIGHT AS A SOURCE
    // ============================================================
    {
      id: "crank_flashlight",
      title: "🔦 Dynamo flashlight as a ready-made source",
      description: "A hand-crank flashlight gives 3–6V when spinning. Ready-made solution for LED, radio, or USB.",
      conditions: { purpose: ["light_bulb", "radio_power", "signal_beacon"], mechanics: ["toy_motor", "bike_hub", "drill", "fan"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1 minute",
      yield_estimate: "Light / sound while cranking",
      tags: ["flashlight", "immediate", "simple", "ready"],
      steps: [
        "If you have a hand-crank dynamo flashlight — use it directly.",
        "Spin the handle steadily — light will be stable.",
        "You can connect an external LED in parallel to the built-in one.",
        "For radio: connect the flashlight output to the receiver (3–6V).",
        "Some flashlights have a USB output — connect your phone directly.",
        "Don't spin too fast — the coil will overheat and the LED will burn."
      ],
      warnings: [
        "Cheap flashlights give pulsing light — eyes get tired.",
        "The coil can overheat during prolonged cranking (>5 minutes).",
        "DO NOT disassemble the flashlight under voltage — electric shock.",
        "Quality of Chinese flashlights is low — use as an emergency option."
      ]
    },

    // ============================================================
    // SOLUTION 8: FOOT PEDAL FOR DYNAMO
    // ============================================================
    {
      id: "foot_pedal",
      title: "🦶 Foot pedal for dynamo (solves arm fatigue)",
      description: "Your leg is stronger than your arm. Any generator can be turned with your foot — from a bicycle, sewing machine, or simply pressing a pedal.",
      conditions: { mechanics: ["toy_motor", "bike_hub", "drill", "fan"], physical: ["strong", "average"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–20 minutes assembly",
      yield_estimate: "2–3× more energy than by hand",
      tags: ["foot", "pedal", "sustainable", "strong"],
      steps: [
        "Take a bicycle pedal (or make one from a wooden block).",
        "Attach to the generator shaft via belt or direct drive.",
        "Mount on the floor or ground — press with your foot to spin.",
        "Foot drive gives 2–3× more energy than hand drive.",
        "Can be used for continuous phone charging.",
        "Alternate legs — no fatigue."
      ],
      warnings: [
        "Secure the structure firmly — it may fall and injure your foot.",
        "DO NOT use too much force — you can break the generator.",
        "The pedal should have a non-slip surface."
      ]
    }
  ]
});