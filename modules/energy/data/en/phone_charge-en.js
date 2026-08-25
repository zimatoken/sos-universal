// modules/energy/data/en/phone_charge-en.js
// === MODULE: ENERGY — PHONE CHARGING WITHOUT OUTLET ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "energy",
    category: "phone_charge",
    version: "1.0.0",
    lang: "en",
    title: "Phone Charging Without Outlet",
    description: "How to charge your phone when there's no electricity: batteries, fruits, sun, dynamo, car — complete survival guide",
    icon: "📱",
    color: "#fbbf24"
  },

  questions: [
    // ============================================================
    // QUESTION 1: Cable condition
    // ============================================================
    {
      id: "cable_state",
      type: "single",
      text: "What is the condition of your charging cable?",
      options: [
        { id: "cable_ok", label: "🔌 Cable is intact, working", tags: ["cable_ok"] },
        { id: "cable_broken", label: "✂️ Cable is damaged / broken", tags: ["cable_broken"] },
        { id: "no_cable", label: "❌ No cable at all", tags: ["no_cable"] },
        { id: "wire_only", label: "🧵 Only wire / paperclips available", tags: ["wire_only"] }
      ]
    },

    // ============================================================
    // QUESTION 2: Available materials
    // ============================================================
    {
      id: "materials",
      type: "multi",
      text: "What materials do you have on hand? (select all that apply)",
      conditions: { cable_state: ["cable_ok", "cable_broken", "no_cable", "wire_only"] },
      options: [
        { id: "batteries_aa", label: "🔋 AA / AAA batteries", tags: ["batteries"] },
        { id: "batteries_9v", label: "🔋 9V battery (alkaline)", tags: ["batteries_9v"] },
        { id: "lemon_potato", label: "🍋 Lemon / potato / salt / vinegar", tags: ["fruit_battery"] },
        { id: "motor", label: "⚙️ Small motor / fan / cooler", tags: ["motor"] },
        { id: "solar_panel", label: "☀️ Solar panel (calculator, garden light)", tags: ["solar"] },
        { id: "car", label: "🚗 Car nearby", tags: ["car"] },
        { id: "laptop", label: "💻 Laptop with charge", tags: ["laptop"] },
        { id: "powerbank", label: "🔋 Power Bank (even if discharged)", tags: ["powerbank"] }
      ]
    },

    // ============================================================
    // QUESTION 3: Phone type
    // ============================================================
    {
      id: "phone_type",
      type: "single",
      text: "What type of phone do you have?",
      conditions: { cable_state: ["cable_ok", "cable_broken", "wire_only"] },
      options: [
        { id: "android_micro", label: "🤖 Android (Micro-USB)", tags: ["android_micro"] },
        { id: "android_usbc", label: "🤖 Android (USB-C)", tags: ["android_usbc"] },
        { id: "iphone", label: "🍎 iPhone (Lightning)", tags: ["iphone"] },
        { id: "old_phone", label: "📟 Old phone (proprietary connector)", tags: ["old_phone"] }
      ]
    },

    // ============================================================
    // QUESTION 4: Urgency
    // ============================================================
    {
      id: "urgency",
      type: "single",
      text: "How urgently do you need a charge?",
      conditions: { cable_state: ["cable_ok", "cable_broken", "no_cable", "wire_only"] },
      options: [
        { id: "critical", label: "🔴 Critical — need emergency call (911)", tags: ["critical"] },
        { id: "important", label: "🟠 Important — contact family, work", tags: ["important"] },
        { id: "info", label: "🟢 Not urgent — just want to stay connected", tags: ["info"] }
      ]
    },

    // ============================================================
    // QUESTION 5: Available tools
    // ============================================================
    {
      id: "tools",
      type: "multi",
      text: "What tools do you have on hand?",
      conditions: { cable_state: ["cable_ok", "cable_broken", "no_cable", "wire_only"] },
      options: [
        { id: "multimeter", label: "📟 Multimeter / tester", tags: ["meter"] },
        { id: "solder", label: "🔥 Soldering iron / solder", tags: ["solder"] },
        { id: "knife", label: "🔪 Knife / cutters / wire stripper", tags: ["cut"] },
        { id: "tape", label: "🩹 Electrical tape / duct tape / heatshrink", tags: ["tape"] },
        { id: "no_tools", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },

    // ============================================================
    // QUESTION 6: Battery level
    // ============================================================
    {
      id: "battery_level",
      type: "single",
      text: "How much battery percentage is left on your phone?",
      conditions: { cable_state: ["cable_ok", "cable_broken", "no_cable", "wire_only"] },
      options: [
        { id: "level_0_5", label: "🔴 0–5% — about to shut down", tags: ["level_critical"] },
        { id: "level_5_15", label: "🟠 5–15% — last few percent", tags: ["level_low"] },
        { id: "level_15_30", label: "🟡 15–30% — some charge left", tags: ["level_medium"] },
        { id: "level_30_plus", label: "🟢 30%+ — time is on your side", tags: ["level_ok"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // SOLUTION 1: CHARGING FROM AA/AAA BATTERIES
    // ============================================================
    {
      id: "usb_from_batteries",
      title: "🔋 Charging from AA/AAA batteries",
      description: "4 AA batteries give 6V. With a 1N4007 diode or resistor — stable 5V for USB. The most reliable DIY method.",
      conditions: { materials: ["batteries_aa"], cable_state: ["cable_ok", "wire_only"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "10–20% charge (5–10 minute call)",
      tags: ["batteries", "usb", "diy", "fast"],
      steps: [
        "Take 4 AA batteries (alkaline or lithium — lithium give more energy).",
        "Connect in series: positive of one to negative of the next. Total 6V.",
        "Find the red (+5V) and black (GND) wires in the USB cable.",
        "Connect battery positive to red wire, battery negative to black wire.",
        "If you have a 1N4007 diode — put it in series on the positive line (drops 6→5.3V).",
        "A 10–22 Ohm resistor also works to reduce voltage.",
        "Connect to your phone. If the screen lights up — charging has started.",
        "Check after 10–15 minutes: are the batteries getting hot? If so — disconnect.",
        "Only use in emergencies — batteries drain quickly."
      ],
      warnings: [
        "DO NOT use a 9V battery — it will fry your phone's port (overvoltage).",
        "DO NOT use carbon-zinc batteries — they provide almost no current.",
        "DO NOT leave unattended — batteries can overheat.",
        "If your phone gets hot — disconnect immediately, it's dangerous."
      ]
    },

    // ============================================================
    // SOLUTION 2: FRUIT BATTERY (LEMON / POTATO / VINEGAR)
    // ============================================================
    {
      id: "fruit_battery",
      title: "🍋 Fruit battery — lemon, potato, vinegar",
      description: "A galvanic cell from fruit/electrolyte and two different metals gives 0.8–1.2V. 5–6 cells in series = 5V.",
      conditions: { materials: ["lemon_potato"], cable_state: ["cable_ok", "wire_only"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "20–40 minutes",
      yield_estimate: "5–10% charge (SMS or short call)",
      tags: ["fruit", "lemon", "potato", "chemical"],
      steps: [
        "Take 6–8 lemons (or large potatoes, or a glass of vinegar/salt water).",
        "Insert into each: a copper coin (or copper wire) and a steel nail/screw.",
        "Important: copper and steel must NOT touch each other inside the fruit.",
        "Connect in series: copper of one → nail of the next.",
        "Check with a multimeter: should be 4.5–6V. If less — add more cells.",
        "Connect to USB cable: positive (copper) to red, negative (nails) to black.",
        "Let it sit for 10–15 minutes — fruits need to 'activate' (initial current is low).",
        "Charging is slow but works. Use for emergency calls only."
      ],
      warnings: [
        "Current is very weak — your phone may not show charging, but the battery will accumulate.",
        "DO NOT use aluminum instead of copper — it oxidizes quickly.",
        "Juice corrodes contacts — work fast, rinse afterward.",
        "Lemon (acid) and fresh potato work best."
      ]
    },

    // ============================================================
    // SOLUTION 3: HAND CRANK GENERATOR (MOTOR + HANDLE)
    // ============================================================
    {
      id: "hand_crank_generator",
      title: "🔧 Hand crank generator from a motor",
      description: "Any DC motor works as a generator. Spin the shaft — get 3–12V. Unlimited energy source.",
      conditions: { materials: ["motor"], cable_state: ["cable_ok", "wire_only"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "15–30 minutes assembly",
      yield_estimate: "3–5% charge per 10 minutes of active cranking",
      tags: ["motor", "generator", "physical", "unlimited"],
      steps: [
        "Find a DC motor: from a broken toy, fan, or computer cooler.",
        "Test it: spin the shaft with your fingers — voltage should appear on the contacts.",
        "Make a handle: glue a stick, spoke, or toothbrush handle to the shaft.",
        "If voltage while spinning is up to 5V — connect directly to USB (red +, black −).",
        "If above 6V — add a diode bridge (4 diodes) or 7805 voltage regulator.",
        "Spin steadily: 2–3 revolutions per second = stable 5V.",
        "You can attach blades from a plastic bottle — wind will spin it automatically.",
        "10 minutes of active cranking = 3–5% phone charge."
      ],
      warnings: [
        "DO NOT spin too fast — >12V can fry your phone.",
        "If no diode bridge — spin slowly to keep voltage under 5V.",
        "Cooler motors are safe — give 3–5V even at high speeds.",
        "Your arms will tire — alternate hands or use a foot pedal."
      ]
    },

    // ============================================================
    // SOLUTION 4: SOLAR PANEL (CALCULATOR, GARDEN LIGHT)
    // ============================================================
    {
      id: "solar_panel_charge",
      title: "☀️ Charging from a solar panel",
      description: "Calculators, garden lights, keychains — all contain solar cells. Even on cloudy days they give 3–5V.",
      conditions: { materials: ["solar_panel"], cable_state: ["cable_ok", "wire_only"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "10–20 minutes",
      yield_estimate: "1–3% per minute in bright sunlight",
      tags: ["solar", "sun", "eco", "free"],
      steps: [
        "Find a solar panel: calculator, garden light, or car charger with a panel.",
        "Carefully disassemble the casing — the panel is fragile, don't bend it.",
        "Determine polarity: usually red wire = +, black wire = −.",
        "If panel voltage is 2–3V — connect 2 panels in series (positive to negative).",
        "Connect to USB cable: + to red, − to black.",
        "Add a diode in series (to prevent the phone from draining the panel at night).",
        "Point the panel perpendicular to the sun. On cloudy days — 3–5 times slower.",
        "One hour of bright sun can give 20–40% charge (depends on panel size)."
      ],
      warnings: [
        "DO NOT look at the sun through the panel — it can damage your eyes.",
        "Calculator panels are very weak — you need 3–4 for normal charging.",
        "DO NOT leave your phone in direct sunlight — it will overheat and shut down.",
        "Panels are sensitive to moisture — don't use in rain."
      ]
    },

    // ============================================================
    // SOLUTION 5: CAR CHARGER (CIGARETTE LIGHTER)
    // ============================================================
    {
      id: "car_12v_charge",
      title: "🚗 Car charging (cigarette lighter)",
      description: "The cigarette lighter gives 12V. USB adapter or direct connection — full charging, just like from a wall outlet.",
      conditions: { materials: ["car"], cable_state: ["cable_ok"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Full charging speed (1–2% per minute)",
      tags: ["car", "12v", "fast", "reliable"],
      steps: [
        "Plug a USB adapter into the cigarette lighter (12V socket).",
        "Connect the cable to your phone.",
        "Start the engine — otherwise the car battery will drain quickly.",
        "If no adapter — you can use wires directly from the battery (+12V and GND).",
        "Through a USB adapter, charging is full speed — up to 2A.",
        "Charge for 15–30 minutes — enough for an emergency call.",
        "Don't leave your phone in the car in direct sunlight — it will overheat."
      ],
      warnings: [
        "DO NOT charge with the engine off for more than 10 minutes — it will drain the car battery.",
        "DO NOT use faulty adapters — they can fry your phone.",
        "Check if the cigarette lighter works (plug in another device).",
        "If the car won't start — start the engine first, then charge."
      ]
    },

    // ============================================================
    // SOLUTION 6: CHARGING FROM LAPTOP OR POWER BANK
    // ============================================================
    {
      id: "laptop_powerbank_charge",
      title: "💻 Charging from a laptop or Power Bank",
      description: "A laptop or Power Bank is a ready-made 5V USB source. The easiest method if you have one handy.",
      conditions: { materials: ["laptop", "powerbank"], cable_state: ["cable_ok"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 minute",
      yield_estimate: "Normal charging speed",
      tags: ["laptop", "powerbank", "usb", "fast"],
      steps: [
        "Find a USB port on your laptop or Power Bank.",
        "Connect the cable to your phone.",
        "If the laptop is in sleep mode — press any key to wake up the ports.",
        "Power Bank gives 1–2A — fast charging.",
        "Laptop via USB 2.0 gives 0.5A — slower, but stable.",
        "Don't charge too long from a laptop — it will drain too.",
        "Use this method for emergency communication."
      ],
      warnings: [
        "USB 2.0 on a laptop only gives 0.5A — charging is slow.",
        "DO NOT use the laptop as your main power source — save charge for yourself.",
        "The Power Bank may be discharged — check the indicator.",
        "DO NOT leave your phone on the laptop — overheating."
      ]
    },

    // ============================================================
    // SOLUTION 7: USB CABLE REPAIR (BREAK / TEAR)
    // ============================================================
    {
      id: "repair_usb_cable",
      title: "🔧 USB cable repair in 5 minutes",
      description: "A broken or torn cable can be fixed with twisting, paperclips, or soldering. The key is not to mix up +5V and GND.",
      conditions: { cable_state: ["cable_broken", "wire_only"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Restored cable",
      tags: ["repair", "cable", "usb", "diy"],
      steps: [
        "Find the break point — bend the cable to locate the tear.",
        "Cut the cable at the break — 2 cm back on each side.",
        "Strip the insulation: knife, lighter (carefully, don't damage the wires).",
        "Identify the wires: red = +5V, black = GND, white/green = data.",
        "For charging you only need red and black. Isolate white and green separately.",
        "Connect: red to red (twist, solder, paperclip). Black to black.",
        "Insulate EACH wire SEPARATELY (electrical tape, duct tape, heatshrink).",
        "Test: connect to your phone. If charging appears — the cable works."
      ],
      warnings: [
        "DO NOT connect red to black — short circuit, cable will burn.",
        "DO NOT leave bare wires exposed — they will short, damage your phone.",
        "If the break is at the plug — it's easier to replace the plug than to repair.",
        "DO NOT use wet insulation — current will leak."
      ]
    },

    // ============================================================
    // SOLUTION 8: EMERGENCY CHARGING FROM 9V BATTERY
    // ============================================================
    {
      id: "battery_9v_emergency",
      title: "⚠️ Emergency charging from a 9V battery (CRITICAL ONLY)",
      description: "A 9V battery can give 5V through a 7805 regulator. Without a regulator — dangerous for your phone. Only use as a last resort.",
      conditions: { materials: ["batteries_9v"], cable_state: ["cable_ok", "wire_only"], urgency: ["critical"] },
      scoring: { priority: "fast", reliability: "low" },
      time_estimate: "5–10 minutes",
      yield_estimate: "1–2% charge (one emergency call)",
      tags: ["9v", "emergency", "dangerous"],
      steps: [
        "Take a 9V battery (alkaline).",
        "MUST use a 7805 voltage regulator or diode bridge with resistor.",
        "Circuit: +9V → 7805 (input) → output 5V → red USB wire.",
        "Battery GND → 7805 GND → black USB wire.",
        "If no regulator — you can use 2 diodes 1N4007 in series (drop 9→7.5V) + resistor.",
        "Connect to your phone for a SHORT TIME (1–2 minutes).",
        "This will be enough for one emergency call."
      ],
      warnings: [
        "⚠️ DANGER: 9V without a regulator WILL FRY your phone's port!",
        "DO NOT charge for more than 2 minutes — battery heats up, may explode.",
        "ONLY use in critical emergency (911 call).",
        "If your phone gets hot — disconnect immediately."
      ]
    },

    // ============================================================
    // SOLUTION 9: DIRECT POWER FROM 3.7V BATTERY
    // ============================================================
    {
      id: "direct_battery_charge",
      title: "📱 Direct power from a 3.7V battery",
      description: "Any 3.7V lithium battery (from phone, flashlight, vape) can directly power your phone via USB.",
      conditions: { materials: ["batteries_aa", "lemon_potato", "motor", "solar_panel", "car", "laptop", "powerbank"], 
                    cable_state: ["cable_ok", "wire_only"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Depends on battery capacity",
      tags: ["battery", "direct", "li-ion", "diy"],
      steps: [
        "Find any 3.7V lithium battery: from an old phone, flashlight, or vape.",
        "Check voltage with a multimeter: should be 3.0–4.2V.",
        "Find the + and − contacts (usually marked on the casing).",
        "Connect wires to USB cable: + battery to red, − to black.",
        "3.7V — your phone may not show the charging icon, but the battery will charge.",
        "Charge for 15–30 minutes — enough for an emergency call.",
        "If you have 2 batteries — connect in series (7.4V) and use a 7805 regulator."
      ],
      warnings: [
        "DO NOT short circuit the battery contacts — fire/explosion.",
        "DO NOT use a swollen battery — it's dangerous.",
        "Direct connection without a protection board can deep-discharge the battery.",
        "Monitor temperature — overheating is dangerous."
      ]
    },

    // ============================================================
    // SOLUTION 10: BATTERY SAVING MODE (EXTEND BATTERY LIFE)
    // ============================================================
    {
      id: "battery_saving",
      title: "🔋 Battery saving mode — extend your phone's life",
      description: "When only 5–15% charge remains, every action matters. The right mode can extend battery life by 2–3 hours.",
      conditions: { battery_level: ["level_critical", "level_low"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 minute",
      yield_estimate: "2–3 hours extended battery life",
      tags: ["saving", "battery", "emergency", "mode"],
      steps: [
        "Enable power saving mode (in phone settings).",
        "Turn off Wi-Fi, Bluetooth, mobile data (keep only voice calls).",
        "Set screen brightness to minimum (20–30%).",
        "Close all background apps (unused apps consume battery).",
        "Enable dark mode (for AMOLED screens — up to 30% savings).",
        "Disable vibration and keyboard sounds.",
        "Use airplane mode in areas with no signal — your phone won't search for network.",
        "Don't watch videos or play games — only calls and SMS."
      ],
      warnings: [
        "DO NOT leave the screen on unnecessarily — it's the biggest power drain.",
        "DO NOT use the flashlight unless absolutely necessary.",
        "DO NOT charge your phone from weak sources in cold weather — battery drains faster.",
        "In an emergency: calls are most important. Save charge for that."
      ]
    }
  ]
});