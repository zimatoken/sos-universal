// modules/energy/data/en/solar-en.js
// === MODULE: ENERGY — SOLAR ENERGY ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "energy",
    category: "solar",
    version: "1.0.0",
    lang: "en",
    title: "☀️ Solar Energy",
    description: "How to harvest electricity from sunlight using everyday items: calculators, garden lights, photodiodes, concentrators.",
    icon: "☀️",
    color: "#f59e0b"
  },

  questions: [
    // ============================================================
    // QUESTION 1: Solar sources
    // ============================================================
    {
      id: "solar_source",
      type: "multi",
      text: "What solar elements or light sources do you have?",
      options: [
        { id: "calculator", label: "🧮 Solar-powered calculator", tags: ["panel"] },
        { id: "garden_light", label: "🌻 Garden light / solar lantern", tags: ["panel"] },
        { id: "solar_charger", label: "🔋 Solar charger / keychain / power bank", tags: ["panel"] },
        { id: "diodes", label: "💡 Photodiodes / LEDs from old devices", tags: ["diode"] },
        { id: "mirror", label: "🪞 Mirror / foil / CD (for concentration)", tags: ["mirror"] },
        { id: "nothing_solar", label: "❌ No solar items at all", tags: ["none"] }
      ]
    },

    // ============================================================
    // QUESTION 2: Weather
    // ============================================================
    {
      id: "weather",
      type: "single",
      text: "What is the current weather like?",
      conditions: { solar_source: ["calculator", "garden_light", "solar_charger", "diodes", "mirror"] },
      options: [
        { id: "sunny", label: "☀️ Bright sun, clear sky", tags: ["sunny"] },
        { id: "cloudy", label: "☁️ Overcast / cloudy", tags: ["cloudy"] },
        { id: "evening", label: "🌅 Evening / dawn (low sun)", tags: ["low_sun"] },
        { id: "indoor", label: "🏠 Indoors near a window", tags: ["indoor"] }
      ]
    },

    // ============================================================
    // QUESTION 3: Purpose
    // ============================================================
    {
      id: "purpose",
      type: "single",
      text: "What do you need the energy for?",
      conditions: { solar_source: ["calculator", "garden_light", "solar_charger", "diodes", "mirror"] },
      options: [
        { id: "phone", label: "📱 Charge a phone", tags: ["phone"] },
        { id: "light", label: "💡 Light up a room / tent", tags: ["light"] },
        { id: "radio", label: "📻 Power a radio / receiver", tags: ["radio"] },
        { id: "signal", label: "🚨 Signal beacon / emergency light", tags: ["signal"] },
        { id: "battery_charge", label: "🔋 Charge batteries (Ni-MH, Li-Ion)", tags: ["battery_charge"] }
      ]
    },

    // ============================================================
    // QUESTION 4: Tools
    // ============================================================
    {
      id: "tools",
      type: "multi",
      text: "What tools do you have for working with panels?",
      conditions: { solar_source: ["calculator", "garden_light", "solar_charger", "diodes", "mirror"] },
      options: [
        { id: "multimeter", label: "📟 Multimeter / tester", tags: ["test"] },
        { id: "solder", label: "🔥 Soldering iron / solder / flux", tags: ["solder"] },
        { id: "tape", label: "🩹 Electrical tape / duct tape / heatshrink", tags: ["tape"] },
        { id: "knife", label: "🔪 Knife / screwdriver / cutters", tags: ["open"] },
        { id: "glue", label: "🧴 Glue / superglue / sealant", tags: ["glue"] }
      ]
    },

    // ============================================================
    // QUESTION 5: Panel count
    // ============================================================
    {
      id: "panel_count",
      type: "single",
      text: "How many solar panels do you have?",
      conditions: { solar_source: ["calculator", "garden_light", "solar_charger"] },
      options: [
        { id: "one", label: "1 panel (small, from a calculator)", tags: ["one"] },
        { id: "few_panels", label: "2–3 panels (can be connected)", tags: ["few_panels"] },
        { id: "many_panels", label: "4+ panels (powerful assembly)", tags: ["many_panels"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // SOLUTION 1: CALCULATOR PANEL
    // ============================================================
    {
      id: "calculator_panel",
      title: "🧮 Calculator panel — the basics",
      description: "A calculator contains an amorphous silicon panel ~1.5V, 40–80mA. 3–4 in series = 5–6V for USB.",
      conditions: { solar_source: ["calculator"], panel_count: ["one", "few_panels", "many_panels"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15–20 minutes",
      yield_estimate: "1–2% per minute (depends on sunlight brightness)",
      tags: ["calculator", "panel", "usb", "solar"],
      steps: [
        "Find 3–4 old calculators with solar panels (any type — cheap or scientific).",
        "Carefully disassemble the casing — the panel is fragile, don't bend or scratch.",
        "Determine polarity: usually red wire = positive, black = negative.",
        "Connect panels in series: positive of one to negative of the next.",
        "Check output voltage: should be 4.5–6V (in bright sunlight).",
        "Connect to USB cable through a 1N4007 diode (prevents phone draining the panel at night).",
        "Point panels perpendicular to the sun. One hour — 5–15% phone charge.",
        "Works on cloudy days, but 3–5 times slower."
      ],
      warnings: [
        "Calculator panels are very weak — 3–4 minimum for charging.",
        "DO NOT bend the panel — cracks kill efficiency.",
        "DO NOT leave your phone in direct sunlight — it will overheat.",
        "Check panel temperature: if hot — reduce exposure (overheating reduces efficiency)."
      ]
    },

    // ============================================================
    // SOLUTION 2: GARDEN LIGHT HACK
    // ============================================================
    {
      id: "garden_light_hack",
      title: "🌻 Garden light as a charger",
      description: "Garden lights contain Ni-MH batteries (600–1200 mAh) and a 2–4V solar panel. Use the batteries directly.",
      conditions: { solar_source: ["garden_light"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–15 minutes",
      yield_estimate: "600–1200 mAh battery = 10–30% phone charge",
      tags: ["garden", "battery", "fast", "solar"],
      steps: [
        "Disassemble the garden light — usually clipped or screwed together.",
        "Find the AA or AAA batteries (1.2V Ni-MH). Often 2–3 pieces.",
        "Take 4 such batteries = 4.8V — almost USB.",
        "Connect to USB cable: positive to red, negative to black.",
        "If voltage is 4.5–5.5V — your phone will start charging.",
        "The solar panel charges the batteries during the day — passive storage.",
        "Leave the lights in the sun — by evening the batteries will be full.",
        "Use batteries from multiple lights for more capacity."
      ],
      warnings: [
        "Ni-MH batteries give 1.2V, not 1.5V — need 4, not 3.",
        "DO NOT short circuit the battery — it will heat up and may explode.",
        "Old batteries lose capacity — check voltage (should be >1.0V).",
        "DO NOT leave batteries in direct sun without load — they may overheat."
      ]
    },

    // ============================================================
    // SOLUTION 3: READY-MADE SOLAR CHARGER
    // ============================================================
    {
      id: "solar_charger_use",
      title: "🔋 Ready-made solar charger (Power Bank with panel)",
      description: "If you have a solar power bank or keychain charger — just point it at the sun and connect your phone.",
      conditions: { solar_source: ["solar_charger"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 minute",
      yield_estimate: "Depends on power bank capacity and sunlight",
      tags: ["ready", "powerbank", "fast", "solar"],
      steps: [
        "Find your solar charger (power bank with panel or keychain charger).",
        "Make sure it's charged or place it in the sun.",
        "Connect the cable to your phone.",
        "If the power bank is discharged — leave it in the sun for 2–4 hours to charge.",
        "Small keychain panels charge very slowly — use as a supplement.",
        "Don't cover the panel with your hands — shade reduces efficiency by 80%.",
        "Use a reflector (foil, mirror) next to the panel to speed up charging."
      ],
      warnings: [
        "Power bank with a small panel takes 20–40 hours to charge from the sun.",
        "DO NOT leave on asphalt — overheating reduces lifespan.",
        "Check capacity: cheap Chinese ones often lie by 2–3 times.",
        "Lithium-ion batteries don't like overheating — don't leave in direct sun for long."
      ]
    },

    // ============================================================
    // SOLUTION 4: PHOTODIODES AS MINI-PANELS
    // ============================================================
    {
      id: "diode_solar_panel",
      title: "💡 Photodiodes and LEDs as solar cells",
      description: "LEDs work in reverse: under light they generate current. 20–30 pieces = 3–5V for low-power devices.",
      conditions: { solar_source: ["diodes"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Microamps — only for LED or tester (not for phone)",
      tags: ["diode", "led", "experimental", "solar"],
      steps: [
        "Find 20–30 LEDs from old string lights, flashlights, boards, remotes.",
        "Connect in parallel: all anodes (long legs) together, all cathodes (short) together.",
        "Anode = long leg, cathode = short leg (or flat side of the housing).",
        "Connect to a multimeter: in bright light should read 2–4V.",
        "For USB you need 2–3 such blocks in series.",
        "Can be used to power a small radio or LED flashlight.",
        "Experimental — don't expect fast phone charging."
      ],
      warnings: [
        "LEDs give very little current — microamps, milliamps at best.",
        "DO NOT reverse polarity — the diode doesn't conduct backwards.",
        "Requires many diodes — 50+ for any noticeable effect.",
        "Doesn't work in the dark — needs bright light."
      ]
    },

    // ============================================================
    // SOLUTION 5: SOLAR CONCENTRATION (MIRROR)
    // ============================================================
    {
      id: "sun_mirror_concentrator",
      title: "🪞 Solar concentration — increasing power",
      description: "A mirror, foil or lens can increase panel power by 2–3 times. Simple way to boost efficiency.",
      conditions: { solar_source: ["mirror", "calculator", "garden_light", "solar_charger"], weather: ["sunny"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "2–3× power increase",
      tags: ["mirror", "concentrate", "boost", "solar"],
      steps: [
        "Find a mirror, foil, CD, or smooth metal surface.",
        "Direct reflected light onto the solar panel (onto the panel, not the phone).",
        "Mirror gives the best effect — can double or triple the power.",
        "Foil on cardboard — simple reflector. Make a 'screen' behind the panel.",
        "CD gives diffused light — can illuminate a larger area of the panel.",
        "A lens focuses light to a point — careful, it can melt the panel plastic.",
        "Monitor panel temperature — overheating reduces efficiency."
      ],
      warnings: [
        "DO NOT focus a lens on skin — burns in seconds.",
        "Overheated panel loses efficiency and gets damaged.",
        "Only works in bright sun — useless on cloudy days.",
        "DO NOT direct reflected light at yourself or others — retinal damage."
      ]
    },

    // ============================================================
    // SOLUTION 6: CHARGING BATTERIES FROM THE SUN
    // ============================================================
    {
      id: "solar_charge_batteries",
      title: "🔋 Charging batteries from the sun (Ni-MH, Li-Ion)",
      description: "A solar panel can charge any batteries through a diode and resistor. Nickel-metal hydride are the best option.",
      conditions: { solar_source: ["calculator", "garden_light", "solar_charger"], purpose: ["battery_charge"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "4–8 hours (depends on sunlight)",
      yield_estimate: "50–100% battery charge in a day",
      tags: ["battery", "charge", "solar", "storage"],
      steps: [
        "Take a solar panel (from calculator, light, charger).",
        "Connect a 1N4007 diode in series (protects from discharge in darkness).",
        "Add a 10–100 Ohm resistor for current limiting (protects the battery).",
        "Connect to battery: Ni-MH AA/AAA (1.2V) or Li-Ion 18650 (3.7V).",
        "For Ni-MH you need 2 panels in series (2.5–3V).",
        "Leave in the sun for 4–8 hours. Monitor temperature — if hot, disconnect.",
        "Use charged batteries for flashlight, radio, phone (via USB)."
      ],
      warnings: [
        "DO NOT charge lithium-ion batteries without a controller — explosion/fire.",
        "Ni-MH batteries can be charged directly (they tolerate overcharge).",
        "DO NOT leave batteries in the sun unattended — overheating.",
        "Old batteries may swell — discard, don't charge."
      ]
    },

    // ============================================================
    // SOLUTION 7: IMPROVISED PANEL FROM DIODES (POWERFUL)
    // ============================================================
    {
      id: "diode_array_panel",
      title: "💡 Powerful panel from many diodes",
      description: "A large number of photodiodes (50–100) can give 5–10V in bright light. More powerful than a calculator panel.",
      conditions: { solar_source: ["diodes"], panel_count: ["many_panels"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "1–2 hours assembly",
      yield_estimate: "5–10V, 10–50mA — for flashlight or radio",
      tags: ["diode", "array", "powerful", "solar"],
      steps: [
        "Collect 50–100 LEDs (from string lights, boards, remotes).",
        "Connect all anodes (long legs) together — this is positive.",
        "Connect all cathodes (short legs) together — this is negative.",
        "To increase voltage: divide into groups of 10–20 diodes.",
        "Connect groups in series (positive of group to negative of next).",
        "Connect to multimeter: in bright sun should read 5–10V.",
        "For USB you need 5–6V — use a 7805 regulator.",
        "Can be used for phone charging (but very slowly)."
      ],
      warnings: [
        "Assembly takes time — 50 diodes is ~10 minutes of soldering.",
        "Diodes must be IDENTICAL (same color and power rating).",
        "Polarity is strict — a reversed diode doesn't work.",
        "Efficiency depends on light brightness — almost zero on cloudy days."
      ]
    }
  ]
});