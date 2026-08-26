// modules/energy/data/en/cable_pinout-en.js
// === MODULE: ENERGY — CABLE PINOUT AND REPAIR ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "energy",
    category: "cable_pinout",
    version: "1.0.0",
    lang: "en",
    title: "Cable Pinout and Repair",
    description: "How to find +5V and GND, fix a break, make a cable from wire. USB, Lightning, Type-C wire colors. Complete cable guide.",
    icon: "🔌",
    color: "#a855f7"
  },

  questions: [
    // ============================================================
    // QUESTION 1: Cable type
    // ============================================================
    {
      id: "cable_type",
      type: "single",
      text: "What cable are you working with?",
      options: [
        { id: "usb_a", label: "🔌 USB-A (standard computer, thick)", tags: ["usb"] },
        { id: "micro_usb", label: "📱 Micro-USB (old Android, 5 pins)", tags: ["micro"] },
        { id: "usb_c", label: "🔌 USB-C (modern, symmetrical, 24 pins)", tags: ["typec"] },
        { id: "lightning", label: "🍎 Lightning (iPhone, 8 pins)", tags: ["lightning"] },
        { id: "unknown", label: "❓ Don't know / can't see the connector", tags: ["unknown"] }
      ]
    },

    // ============================================================
    // QUESTION 2: Cable problem
    // ============================================================
    {
      id: "problem",
      type: "single",
      text: "What's wrong with the cable?",
      conditions: { cable_type: ["usb_a", "micro_usb", "usb_c", "lightning", "unknown"] },
      options: [
        { id: "broken_wire", label: "✂️ Wire is broken / torn (visible break)", tags: ["break"] },
        { id: "no_connector", label: "🔌 No connector / connector broken", tags: ["no_conn"] },
        { id: "extend", label: "📏 Need to extend the cable (join two)", tags: ["extend"] },
        { id: "find_voltage", label: "⚡ Need to find +5V and GND (polarity)", tags: ["find_v"] },
        { id: "intermittent", label: "🔄 Charging is intermittent (works sometimes)", tags: ["bad"] },
        { id: "slow_charge", label: "🐢 Slow charging (very slow)", tags: ["slow"] }
      ]
    },

    // ============================================================
    // QUESTION 3: Tools
    // ============================================================
    {
      id: "tools_avail",
      type: "multi",
      text: "What tools do you have for the job?",
      conditions: { cable_type: ["usb_a", "micro_usb", "usb_c", "lightning", "unknown"] },
      options: [
        { id: "multimeter", label: "📟 Multimeter / tester (continuity, voltage)", tags: ["meter"] },
        { id: "led", label: "💡 LED + resistor (indicator)", tags: ["led"] },
        { id: "solder", label: "🔥 Soldering iron / solder / flux / rosin", tags: ["solder"] },
        { id: "knife", label: "🔪 Knife / cutters / wire stripper", tags: ["cut"] },
        { id: "tape", label: "🩹 Electrical tape / duct tape / heatshrink", tags: ["tape"] },
        { id: "no_tools", label: "❌ None of the above", tags: ["none"] }
      ]
    },

    // ============================================================
    // QUESTION 4: Wire materials
    // ============================================================
    {
      id: "wire_materials",
      type: "multi",
      text: "What wires / metals do you have for repairs?",
      conditions: { cable_type: ["usb_a", "micro_usb", "usb_c", "lightning", "unknown"] },
      options: [
        { id: "copper_wire", label: "🧵 Copper wire / paperclips / coins", tags: ["copper"] },
        { id: "aluminum", label: "🥫 Aluminum foil / can", tags: ["alum"] },
        { id: "old_cable", label: "🔌 Old donor cable (can be stripped)", tags: ["donor"] },
        { id: "paperclip", label: "📎 Paperclips / pins / pushpins", tags: ["clip"] },
        { id: "wire_phone", label: "📱 Old headset / headphones (thin wires)", tags: ["phone_wire"] }
      ]
    },

    // ============================================================
    // QUESTION 5: Pinout knowledge
    // ============================================================
    {
      id: "pinout_knowledge",
      type: "single",
      text: "Do you know the pinout of your cable?",
      conditions: { cable_type: ["usb_a", "micro_usb", "usb_c", "lightning", "unknown"] },
      options: [
        { id: "know", label: "✅ Yes, I know the colors and functions", tags: ["know"] },
        { id: "partial", label: "⚠️ Know roughly, but not sure", tags: ["partial"] },
        { id: "no_know", label: "❌ No, I don't know", tags: ["no_know"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // SOLUTION 1: USB WIRE COLOR PINOUT
    // ============================================================
    {
      id: "usb_pinout_colors",
      title: "🎨 USB wire color pinout",
      description: "Standard USB colors: red = +5V, black = GND, white/green = data. For charging, only red and black are needed.",
      conditions: { cable_type: ["usb_a", "micro_usb", "usb_c"], problem: ["find_voltage", "broken_wire", "no_connector", "extend"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 minutes",
      yield_estimate: "Color knowledge = fast repair",
      tags: ["colors", "usb", "pinout", "reference"],
      steps: [
        "USB-A: red = +5V (VCC), black = GND, white = D−, green = D+.",
        "Micro-USB: red = VCC (+5V), black = GND, green = D+, white = D−. ID (pin 5) is for OTG.",
        "USB-C: 24 pins. For charging: VBUS (A4, A9, B4, B9) = +5V, GND (A1, A12, B1, B12) = ground.",
        "Lightning: 8 pins. Pin 1 = GND, Pin 5 = PWR (+5V). Rest are data and authentication.",
        "For charging, only +5V and GND are needed. Data wires (white/green) are optional.",
        "If colors are non-standard — use a multimeter or LED to determine polarity.",
        "Remember: red is always positive (+5V), black is always ground (GND) in 99% of cables."
      ],
      warnings: [
        "Non-standard cables may have different colors — always check with a multimeter.",
        "USB-C requires power negotiation — simple wire connection only gives 5V 0.5A.",
        "Lightning has an authentication chip — cheap cables without it may not work.",
        "DO NOT reverse +5V and GND — short circuit will fry the port."
      ]
    },

    // ============================================================
    // SOLUTION 2: BREAK REPAIR
    // ============================================================
    {
      id: "repair_break",
      title: "🔧 Break repair in 5 minutes",
      description: "A broken cable can be fixed with twisting, paperclips, or soldering. Key: don't mix up +5V and GND.",
      conditions: { problem: ["broken_wire", "intermittent"], wire_materials: ["copper_wire", "old_cable", "paperclip"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Restored cable",
      tags: ["repair", "break", "quick", "diy"],
      steps: [
        "Find the break point — bend the cable to locate it (usually near the connector).",
        "Cut the cable at the break — 2 cm back on each side to access the wires.",
        "Strip insulation with a knife or lighter (carefully, don't damage the strands).",
        "Find red (+5V) and black (GND) wires. White/green are data.",
        "Connect: red to red, black to black. Twist, use a paperclip, or solder.",
        "Insulate EACH wire SEPARATELY: electrical tape, duct tape, heatshrink.",
        "Test: connect to your phone. If charging starts — success!",
        "If the cable is broken in multiple places — better to replace it entirely."
      ],
      warnings: [
        "DO NOT connect red to black — short circuit, cable will burn.",
        "Insulate each wire SEPARATELY — otherwise they'll short.",
        "If the break is at the connector — cut it off and solder a new one (if available).",
        "DO NOT use wet insulation — current will leak."
      ]
    },

    // ============================================================
    // SOLUTION 3: WIRE AND PAPERCLIP CABLE
    // ============================================================
    {
      id: "make_from_wire",
      title: "🧵 Cable from wire and paperclips (emergency)",
      description: "No cable? Make one from copper wire, paperclips, or foil. 2 wires = charging (no data).",
      conditions: { problem: ["no_connector", "extend"], wire_materials: ["copper_wire", "paperclip", "aluminum"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10–15 minutes",
      yield_estimate: "Working charging cable",
      tags: ["wire", "diy", "emergency", "no_connector"],
      steps: [
        "Take 2 pieces of wire 20–30 cm long (paperclips, copper wire, aluminum foil twisted).",
        "Clean the ends of insulation or oxidation (sandpaper, knife, lighter).",
        "On one side, bend the wires to fit the USB connector (or insert into phone port).",
        "On the other side, connect to a 5V source (batteries, power bank, generator).",
        "Red/copper = +5V, black/steel = GND. Observe polarity.",
        "Insulate the wires from each other: electrical tape, paper, plastic, duct tape.",
        "Test on an old phone — if it works, use it for the main one.",
        "For USB-C, carefully insert the wires into the contacts (use a toothpick)."
      ],
      warnings: [
        "Aluminum foil breaks — make a bundle of 3–4 layers.",
        "Paperclips rust — use galvanized or copper ones.",
        "DO NOT use wet insulation — current will leak through moisture.",
        "Carefully insert wires into the phone port — don't short the contacts."
      ]
    },

    // ============================================================
    // SOLUTION 4: FIND +5V WITHOUT METER
    // ============================================================
    {
      id: "find_voltage_no_meter",
      title: "⚡ Find +5V without a multimeter (folk methods)",
      description: "No multimeter? Use an LED, salt water, or even your tongue (carefully!).",
      conditions: { problem: ["find_voltage"], tools_avail: ["led", "knife"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "3–5 minutes",
      yield_estimate: "Polarity determination",
      tags: ["no_tools", "polarity", "trick", "hack"],
      steps: [
        "Method 1 — LED: long leg = anode (+), short = cathode (−). Connect with 100–1000 Ohm resistor.",
        "Method 2 — Salt water: dip 2 wires in salt solution. Bubbles form at the positive side (hydrogen).",
        "Method 3 — Tongue (⚠️ ONLY at low voltage <12V!): touch wire ends with tongue. Tingling? Current flows.",
        "Method 4 — Phone as indicator: connect wires to USB cable. If charging starts — you guessed right.",
        "Method 5 — Wet paper: touch wires to wet paper. Green deposit (copper) or rust (iron) appears at positive.",
        "Method 6 — Potato: insert wires into a potato. A green spot appears around the positive wire.",
        "Remember: if in doubt — better not risk it and find a multimeter."
      ],
      warnings: [
        "⚠️ Tongue — absolute last resort! ONLY at <12V with dry hands.",
        "LED without resistor at 5V will burn in a second — but it will flash, showing polarity.",
        "DO NOT use the tongue method on 220V — DEADLY!",
        "The potato method works slowly — give it 5–10 minutes."
      ]
    },

    // ============================================================
    // SOLUTION 5: INTERMITTENT CHARGING
    // ============================================================
    {
      id: "fix_intermittent",
      title: "🔄 Fixing intermittent charging",
      description: "Cable works sometimes? Problem is a break inside insulation, oxidized contacts, or the connector.",
      conditions: { problem: ["intermittent"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Stable charging",
      tags: ["intermittent", "fix", "stable", "cable"],
      steps: [
        "Check the connector — breaks often happen there. Bend the cable near the connector — if charging appears, break is there.",
        "Cut off the connector and strip the wires. Make a new contact from a paperclip or foil.",
        "Check the phone's port contacts: dust, lint, oxidation. Clean with a toothpick or alcohol.",
        "If the problem is the phone port — use wireless charging (if available).",
        "Check the cable with a multimeter in continuity mode: should read 0 Ohm on red and black.",
        "If resistance >1 Ohm — poor contact inside the cable or oxidation.",
        "Replace the cable — if repair doesn't help."
      ],
      warnings: [
        "DO NOT insert metal objects into the phone port — you'll short the contacts.",
        "Contact oxidation can be cleaned with alcohol or an eraser (carefully!).",
        "If the cable heats up — disconnect immediately, fire hazard.",
        "DO NOT use WD-40 in the phone port — it can short."
      ]
    },

    // ============================================================
    // SOLUTION 6: SLOW CHARGING
    // ============================================================
    {
      id: "fix_slow_charge",
      title: "🐢 Slow charging — how to speed it up",
      description: "Phone charges but very slowly? Causes: poor contact, long cable, weak power supply.",
      conditions: { problem: ["slow_charge"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Fast charging",
      tags: ["slow", "charge", "speed", "fix"],
      steps: [
        "Check the power supply: should deliver 1–2A for fast charging.",
        "Use a short cable (no longer than 1m) — long cables drop voltage.",
        "Check contacts in the phone port — dust and oxidation reduce current.",
        "Try a different cable — data wires may be damaged.",
        "Use a quality cable with thick wire gauge (24 AWG or thicker).",
        "If the phone supports fast charging — use the original power supply.",
        "Turn off all background apps while charging."
      ],
      warnings: [
        "Cheap cables have thin wires (28–32 AWG) — they can't deliver full current.",
        "DO NOT use extenders between the power supply and phone — voltage drop.",
        "If the phone gets hot while charging — use a lower current (0.5A)."
      ]
    },

    // ============================================================
    // SOLUTION 7: LIGHTNING PINOUT (IPHONE)
    // ============================================================
    {
      id: "lightning_pinout",
      title: "🍎 Lightning pinout (iPhone)",
      description: "Lightning has 8 pins. PWR and GND are needed for charging. Has an authentication chip.",
      conditions: { cable_type: ["lightning"], problem: ["find_voltage", "broken_wire", "no_connector"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "2 minutes",
      yield_estimate: "Understanding the pinout",
      tags: ["lightning", "iphone", "pinout", "apple"],
      steps: [
        "Lightning has 8 pins on the connector.",
        "Pin 1 (far left) = GND. Pin 5 = PWR (+5V).",
        "Pins 2,3,4,7,8 are for data and authentication (communicate with the chip).",
        "For charging, only Pin 1 (GND) and Pin 5 (PWR) are needed.",
        "Without the authentication chip, iPhone won't charge (cheap Chinese cables without the chip won't work).",
        "If the chip is broken — the cable can only be used as a USB drive (no charging)."
      ],
      warnings: [
        "Lightning has an authentication chip — without it iPhone won't charge.",
        "DO NOT short the pins — can damage the phone port.",
        "Some Chinese cables have reduced pinouts — they don't work."
      ]
    },

    // ============================================================
    // SOLUTION 8: USB-C PINOUT (UNIVERSAL)
    // ============================================================
    {
      id: "usbc_pinout",
      title: "🔌 USB-C pinout (universal)",
      description: "USB-C has 24 pins (12 on each side). For charging, VBUS and GND are needed. More complex than USB-A.",
      conditions: { cable_type: ["usb_c"], problem: ["find_voltage", "broken_wire", "no_connector"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "3 minutes",
      yield_estimate: "Understanding USB-C pinout",
      tags: ["usbc", "pinout", "universal", "reference"],
      steps: [
        "USB-C has 24 pins (12 top, 12 bottom).",
        "VBUS (power): A4, A9, B4, B9 — +5V pins (up to 20V with PD).",
        "GND: A1, A12, B1, B12 — ground pins.",
        "CC1 (A5) and CC2 (B5) — pins for detecting connection and power.",
        "D+ (A6, B6) and D− (A7, B7) — USB 2.0 data.",
        "For charging, need VBUS (any of A4/A9/B4/B9) and GND (any of A1/A12/B1/B12).",
        "USB-C requires power negotiation through resistors on CC pins."
      ],
      warnings: [
        "USB-C has many pins — don't try to solder them all!",
        "Without negotiation on CC pins, the power supply only gives 5V 0.5A.",
        "DO NOT mix up VBUS and GND — short circuit.",
        "USB-C cables without e-marker chips don't work at full power."
      ]
    }
  ]
});