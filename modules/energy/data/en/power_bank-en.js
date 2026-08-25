// modules/energy/data/en/power_bank-en.js
// === MODULE: ENERGY — POWER BANK DIY AND REPAIR ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "energy",
    category: "power_bank",
    version: "1.0.0",
    lang: "en",
    title: "Power Bank DIY and Repair",
    description: "How to repair a power bank, build from 18650, check real capacity, use laptop battery. Complete portable power guide.",
    icon: "🔋",
    color: "#10b981"
  },

  questions: [
    // ============================================================
    // QUESTION 1: Power bank state
    // ============================================================
    {
      id: "pb_state",
      type: "single",
      text: "What's wrong with your power bank?",
      options: [
        { id: "not_charging", label: "🔌 Not charging from outlet (no charge going in)", tags: ["charge_issue"] },
        { id: "not_output", label: "📱 Not outputting charge (won't turn on, no indicator)", tags: ["output_issue"] },
        { id: "swollen", label: "🎈 Swollen / hot while charging / smells like chemicals", tags: ["danger"] },
        { id: "no_pb", label: "❌ No power bank at all", tags: ["none"] },
        { id: "weak", label: "📉 Drains quickly / capacity dropped", tags: ["weak"] },
        { id: "broken_port", label: "🔌 Broken USB port (micro-USB / USB-C / USB-A)", tags: ["port_issue"] }
      ]
    },

    // ============================================================
    // QUESTION 2: Tools
    // ============================================================
    {
      id: "tools",
      type: "multi",
      text: "What tools do you have for repair/assembly?",
      conditions: { pb_state: ["not_charging", "not_output", "swollen", "weak", "broken_port"] },
      options: [
        { id: "screwdriver", label: "🔧 Screwdriver / plastic spudger (for opening)", tags: ["open"] },
        { id: "multimeter", label: "📟 Multimeter / tester (voltage, continuity)", tags: ["test"] },
        { id: "solder", label: "🔥 Soldering iron / solder / flux / rosin", tags: ["solder"] },
        { id: "tape", label: "🩹 Electrical tape / duct tape / heatshrink", tags: ["tape"] },
        { id: "no_tools", label: "❌ None of the above", tags: ["none"] }
      ]
    },

    // ============================================================
    // QUESTION 3: Donor batteries
    // ============================================================
    {
      id: "donor",
      type: "multi",
      text: "What donor batteries do you have for assembly?",
      conditions: { pb_state: ["not_charging", "not_output", "no_pb", "weak", "broken_port"] },
      options: [
        { id: "pb_old", label: "🔋 Old power bank (broken, donor)", tags: ["pb"] },
        { id: "laptop_batt", label: "💻 Laptop battery (old, dead)", tags: ["laptop"] },
        { id: "cells_18650", label: "🔋 18650 cells (flashlight, vape, laptop battery)", tags: ["18650"] },
        { id: "aa_recharge", label: "🔋 Rechargeable AA / AAA (Ni-MH)", tags: ["aa"] },
        { id: "phone_batt", label: "📱 Old phone battery (any)", tags: ["phone_batt"] },
        { id: "power_tool", label: "🔧 Drill / screwdriver battery (12-18V)", tags: ["power_tool"] }
      ]
    },

    // ============================================================
    // QUESTION 4: Control board
    // ============================================================
    {
      id: "board",
      type: "single",
      text: "Do you have a control board (BMS / charge controller)?",
      conditions: { pb_state: ["not_charging", "not_output", "no_pb", "weak", "broken_port"] },
      options: [
        { id: "has_board", label: "✅ Yes, have a board (from old PB / bought)", tags: ["board"] },
        { id: "no_board", label: "❌ No board, only batteries", tags: ["no_board"] },
        { id: "dont_know", label: "❓ Don't know what that is", tags: ["unknown"] }
      ]
    },

    // ============================================================
    // QUESTION 5: Battery type
    // ============================================================
    {
      id: "batt_type",
      type: "single",
      text: "What type of batteries do you plan to use?",
      conditions: { pb_state: ["not_charging", "not_output", "no_pb", "weak", "broken_port"] },
      options: [
        { id: "li_ion", label: "🔋 Lithium-ion (3.7V, 18650, Li-Po)", tags: ["liion"] },
        { id: "nimh", label: "🔋 Ni-MH (1.2V, AA/AAA, rechargeable)", tags: ["nimh"] },
        { id: "lead", label: "🔋 Lead-acid (12V, car, gel)", tags: ["lead"] },
        { id: "unknown_type", label: "❓ Don't know / not sure", tags: ["unknown_batt"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // SOLUTION 1: DIAGNOSTICS AND REPAIR
    // ============================================================
    {
      id: "repair_pb",
      title: "🔧 Diagnostics and repair of power bank",
      description: "80% of failures are oxidized contacts, detached wires, or dead batteries. Open and check.",
      conditions: { pb_state: ["not_charging", "not_output", "weak"], tools: ["screwdriver", "multimeter"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Restored power bank",
      tags: ["repair", "diagnostics", "fast", "pb"],
      steps: [
        "Open the casing: usually clipped (use plastic spudger) or hidden screws under stickers.",
        "Inspect the board: black spots, bulging capacitors, burning smell?",
        "Check batteries with multimeter: each 18650 should be 3.0–4.2V.",
        "If battery is 0V or <2.5V — it's dead. Replace (see replacement solution).",
        "Clean contacts on the board with alcohol or an eraser.",
        "Check the fuse on the board (small component marked F). Continuity test with multimeter.",
        "If the board is intact and battery is dead — replace battery and reassemble.",
        "Check USB ports: loose contacts, broken pins."
      ],
      warnings: [
        "⚠️ If battery is swollen or smells — DO NOT open, it's a fire hazard. Dispose properly.",
        "DO NOT short circuit 18650 contacts — short circuit = fire/explosion.",
        "DO NOT use batteries of different capacities — overcharge/deep discharge.",
        "Work on a non-flammable surface (metal, ceramic)."
      ]
    },

    // ============================================================
    // SOLUTION 2: BUILD FROM 18650
    // ============================================================
    {
      id: "make_from_18650",
      title: "🔋 Build a power bank from 18650",
      description: "1–4 18650 cells + TP4056/TP5600 board = working power bank. The most popular DIY method.",
      conditions: { donor: ["cells_18650"], board: ["has_board", "no_board", "dont_know"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "20–40 minutes",
      yield_estimate: "2000–12000 mAh (depends on cell count and capacity)",
      tags: ["18650", "diy", "powerful", "pb"],
      steps: [
        "Take 1–4 18650 cells (lithium-ion, 3.7V, 2000–3500 mAh).",
        "Check each voltage: 3.0–4.2V = good. <2.5V = trash (don't use).",
        "If you have a board from an old PB — use it (remove and check).",
        "If no board — buy TP4056 with protection (cheap) or use module from old PB.",
        "Connect cells in parallel: all positives together, all negatives together (1S assembly).",
        "Connect to board: B+ to positives, B− to negatives.",
        "USB output = ready power bank. Charge via micro-USB on the board.",
        "Test: connect a phone — should start charging."
      ],
      warnings: [
        "⚠️ DO NOT connect 18650 in series without a BMS board — overcharge = explosion!",
        "Use batteries of IDENTICAL capacity and wear level.",
        "Check temperature during first charge — overheating >45°C = defective.",
        "Polarity is strict: reverse + and − will fry the board."
      ]
    },

    // ============================================================
    // SOLUTION 3: LAPTOP BATTERY AS POWER BANK
    // ============================================================
    {
      id: "laptop_battery_reuse",
      title: "💻 Laptop battery as power bank",
      description: "A laptop battery contains 3–6 18650 cells inside. Open, check, use live cells.",
      conditions: { donor: ["laptop_batt"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15–30 minutes",
      yield_estimate: "2000–4000 mAh from live cells (usually 2–4 of 6)",
      tags: ["laptop", "recycle", "free", "pb"],
      steps: [
        "Find an old laptop battery (even 'dead' ones often have 1–3 live cells out of 6).",
        "Carefully open the casing — usually clipped, no screws (use plastic spudger).",
        "Inside: 3–6 18650 cells connected in series-parallel.",
        "Check each with multimeter: 3.0–4.2V = live, <2.5V = dead.",
        "Desolder live cells (or carefully bend off contacts).",
        "Build a power bank from live cells (see 'Build from 18650' solution).",
        "Dispose of dead cells at a battery recycling point."
      ],
      warnings: [
        "⚠️ DO NOT puncture the battery — lithium ignites on contact with air!",
        "DO NOT short circuit contacts — short circuit = fire.",
        "Work on a non-flammable surface (metal, ceramic).",
        "Old cells may be swollen — discard immediately."
      ]
    },

    // ============================================================
    // SOLUTION 4: CHECK REAL CAPACITY
    // ============================================================
    {
      id: "check_capacity",
      title: "📊 Check real capacity of power bank",
      description: "Chinese power banks often lie 2–3 times. Check capacity with simple methods.",
      conditions: { pb_state: ["weak"], tools: ["multimeter"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 hours",
      yield_estimate: "Real capacity in mAh",
      tags: ["test", "capacity", "honest", "pb"],
      steps: [
        "Method 1 — Fully charge the power bank (to 100% indicator).",
        "Connect to a phone at 0% and time it. Phone 3000 mAh, PB 10000 — should charge 3 times.",
        "Method 2 — Multimeter with capacity measurement function (if available).",
        "Method 3 — Connect a 10 Ohm resistor (5V, current 0.5A). Time discharge to 3.0V.",
        "Formula: Capacity (mAh) = Current (A) × Time (h) × 1000.",
        "Example: 0.5A × 4h = 2000 mAh (real capacity).",
        "If real capacity <50% of stated — replace the power bank."
      ],
      warnings: [
        "Some power banks show battery capacity (3.7V), not output capacity (5V).",
        "Conversion efficiency 3.7→5V = 70–85%. 10000 mAh input = 7000–8500 mAh output.",
        "Old power banks lose 20–30% capacity per year — normal.",
        "10 Ohm resistor gets hot — use a 5W resistor or cool it."
      ]
    },

    // ============================================================
    // SOLUTION 5: EMERGENCY PHONE BATTERY PB
    // ============================================================
    {
      id: "emergency_pb",
      title: "🚨 Emergency power bank from phone battery",
      description: "Old phone battery (3.7–4.2V) + wires = direct power for another phone. Simplest method.",
      conditions: { donor: ["phone_batt"], pb_state: ["no_pb", "not_output"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "1500–4000 mAh (depends on battery)",
      tags: ["phone_batt", "emergency", "direct", "pb"],
      steps: [
        "Find a battery from an old phone (any, even with broken screen).",
        "Check voltage: 3.5–4.2V = usable.",
        "Find contacts: usually + and − marked on the battery.",
        "Connect wires to contacts: paperclips, foil, copper wire.",
        "Other end to USB cable: red = + (to battery positive), black = − (to negative).",
        "3.7V — phone may not show charging icon, but will charge.",
        "Two batteries in series = 7.4V — need a 7805 regulator.",
        "Don't charge phone longer than 30 minutes — battery may overheat."
      ],
      warnings: [
        "DO NOT short circuit battery contacts — fire/explosion.",
        "Swollen battery = trash, don't use.",
        "Direct connection without protection board — risk of deep discharge.",
        "DO NOT leave unattended — battery may overheat."
      ]
    },

    // ============================================================
    // SOLUTION 6: REPAIR BROKEN USB PORT
    // ============================================================
    {
      id: "repair_usb_port",
      title: "🔌 Repair broken USB port on power bank",
      description: "Broken port is a common problem. Replace with donor, solder, or use alternative input.",
      conditions: { pb_state: ["broken_port"], tools: ["solder", "screwdriver"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "20–40 minutes",
      yield_estimate: "Restored port",
      tags: ["port", "repair", "usb", "pb"],
      steps: [
        "Open the power bank, find the broken port (micro-USB, USB-C or USB-A).",
        "If port is torn off — carefully solder it back (4–5 pins).",
        "If no donor port — solder wires directly: +5V (red) and GND (black).",
        "For charging the PB, use direct wires to the battery through a resistor.",
        "Use another port if available — charge via USB-A if it's working.",
        "If all ports are broken — use a TP4056 charging board (cheap and simple).",
        "Test: after repair, the power bank should charge."
      ],
      warnings: [
        "DO NOT overheat the board while soldering — can damage components.",
        "Polarity strict: + to +, − to −. Reverse will fry the board.",
        "Use a 25–30W soldering iron — don't overheat.",
        "DO NOT use acid flux — only rosin or alcohol-based."
      ]
    },

    // ============================================================
    // SOLUTION 7: POWER TOOL BATTERY PB
    // ============================================================
    {
      id: "power_tool_pb",
      title: "🔧 Power bank from drill/screwdriver battery (12–18V)",
      description: "Drill battery (12–18V) + 7805 regulator = powerful power bank for phone and radio.",
      conditions: { donor: ["power_tool"], batt_type: ["lead", "liion"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15–25 minutes",
      yield_estimate: "Large capacity — 2000–5000 mAh at 5V",
      tags: ["power_tool", "powerful", "pb", "diy"],
      steps: [
        "Take a drill/screwdriver battery (12V, 14.4V or 18V).",
        "Check voltage: should be >10V (for 12V) or >15V (for 18V).",
        "Connect a 7805 or LM2596 regulator: input to battery (+ and −).",
        "7805 output (5V) to USB cable (red +, black −).",
        "For 18V battery — use LM2596 (handles up to 40V).",
        "Add a 1N4007 diode at input (reverse polarity protection).",
        "Charge your phone — enough for 2–3 full charges."
      ],
      warnings: [
        "7805 gets hot with voltage difference >10V — use a heatsink.",
        "LM2596 is more efficient — barely heats up.",
        "DO NOT short circuit the output — regulator will burn.",
        "Drill battery is heavy — use as a stationary source."
      ]
    },

    // ============================================================
    // SOLUTION 8: REPLACE POWER BANK BATTERIES
    // ============================================================
    {
      id: "replace_batteries_pb",
      title: "🔄 Replace batteries in power bank",
      description: "If batteries are old, swollen, or dead — replace with new 18650 cells.",
      conditions: { pb_state: ["weak", "not_charging", "not_output"], donor: ["cells_18650"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "20–30 minutes",
      yield_estimate: "Restored power bank with new capacity",
      tags: ["replace", "18650", "battery", "pb"],
      steps: [
        "Open the power bank, access the batteries.",
        "Remember the connection scheme: parallel or series (usually parallel 1S).",
        "Desolder old batteries (or carefully cut contacts).",
        "Take new 18650 cells of the same capacity (or higher).",
        "Connect in parallel: all positives together, all negatives together.",
        "Solder or spot weld (better) to the board.",
        "Check output voltage: should be 3.7–4.2V (for single assembly).",
        "Close the case, test charging and discharging."
      ],
      warnings: [
        "Use batteries of IDENTICAL capacity and wear level.",
        "Spot welding is best — soldering heats the battery and may damage it.",
        "DO NOT short circuit contacts — fire/explosion.",
        "New batteries must be protected from deep discharge (BMS)."
      ]
    }
  ]
});