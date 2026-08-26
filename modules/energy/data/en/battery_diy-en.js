// modules/energy/data/en/battery_diy-en.js
// === MODULE: ENERGY — DIY BATTERIES FROM EVERYDAY ITEMS ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "energy",
    category: "battery_diy",
    version: "1.0.0",
    lang: "en",
    title: "DIY Batteries from Everyday Items",
    description: "Galvanic cells from lemon, potato, salt, vinegar and metals. Emergency power for flashlight, radio or phone.",
    icon: "🥔",
    color: "#84cc16"
  },

  questions: [
    // ============================================================
    // QUESTION 1: Products and liquids
    // ============================================================
    {
      id: "products",
      type: "multi",
      text: "What products / liquids do you have on hand?",
      options: [
        { id: "lemon", label: "🍋 Lemon / lime / orange (acid)", tags: ["acid"] },
        { id: "potato", label: "🥔 Potato / beet (starch)", tags: ["starch"] },
        { id: "vinegar", label: "🍶 Vinegar (white, apple, wine)", tags: ["acid"] },
        { id: "salt", label: "🧂 Salt (table, sea)", tags: ["electrolyte"] },
        { id: "soda", label: "🥤 Baking soda / lye (alkaline)", tags: ["base"] },
        { id: "water", label: "💧 Water (clean, tap)", tags: ["water"] }
      ]
    },

    // ============================================================
    // QUESTION 2: Metals
    // ============================================================
    {
      id: "metals",
      type: "multi",
      text: "What metals are available?",
      options: [
        { id: "copper", label: "🪙 Copper coins / wire / pipe", tags: ["copper"] },
        { id: "zinc", label: "🔩 Galvanized nails / screws", tags: ["zinc"] },
        { id: "aluminum", label: "🥫 Aluminum foil / can / wire", tags: ["aluminum"] },
        { id: "iron", label: "⚙️ Iron items (nails, paperclips, wire)", tags: ["iron"] },
        { id: "steel", label: "🔧 Stainless steel / cutlery", tags: ["steel"] }
      ]
    },

    // ============================================================
    // QUESTION 3: Purpose
    // ============================================================
    {
      id: "purpose",
      type: "single",
      text: "What do you need power for?",
      conditions: { products: ["lemon", "potato", "vinegar", "salt", "soda", "water"], 
                    metals: ["copper", "zinc", "aluminum", "iron", "steel"] },
      options: [
        { id: "flashlight", label: "🔦 Power a flashlight / LED", tags: ["low"] },
        { id: "radio", label: "📻 Power a radio / receiver", tags: ["low"] },
        { id: "call", label: "📱 One call / SMS", tags: ["medium"] },
        { id: "charge_phone", label: "🔋 Charge phone 10–20%", tags: ["high"] },
        { id: "signal", label: "🚨 Signal beacon / emergency light", tags: ["signal"] }
      ]
    },

    // ============================================================
    // QUESTION 4: Containers
    // ============================================================
    {
      id: "containers",
      type: "multi",
      text: "What containers do you have for assembly?",
      conditions: { products: ["lemon", "potato", "vinegar", "salt", "soda", "water"] },
      options: [
        { id: "glass", label: "🥛 Glass / jar / glass bottle", tags: ["glass"] },
        { id: "plastic", label: "🧴 Plastic bottle / container", tags: ["plastic"] },
        { id: "foil", label: "🥫 Foil (for electrode shaping)", tags: ["foil"] },
        { id: "paper", label: "📄 Paper / cardboard (for separators)", tags: ["paper"] }
      ]
    },

    // ============================================================
    // QUESTION 5: Quantity
    // ============================================================
    {
      id: "quantity",
      type: "single",
      text: "How many cells (lemons, potatoes, glasses) are you willing to use?",
      conditions: { products: ["lemon", "potato", "vinegar", "salt", "soda", "water"] },
      options: [
        { id: "few", label: "1–3 pieces (for low-power devices)", tags: ["few"] },
        { id: "medium", label: "4–7 pieces (for USB 5V)", tags: ["medium_q"] },
        { id: "many", label: "8+ pieces (for phone and radio)", tags: ["many_q"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // SOLUTION 1: LEMON BATTERY
    // ============================================================
    {
      id: "lemon_battery",
      title: "🍋 Lemon battery — the classic",
      description: "Classic galvanic cell: lemon + copper + zinc = ~0.9V. 6 in series = 5.4V for USB.",
      conditions: { products: ["lemon"], metals: ["copper", "zinc"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "15–20 minutes",
      yield_estimate: "0.8–0.9V per cell, 6 cells = 4.8–5.4V",
      tags: ["lemon", "copper", "zinc", "classic"],
      steps: [
        "Take 6 lemons (limes or oranges work too — acid produces current).",
        "Cut each in half or make a deep slit (increases contact area).",
        "Insert a copper coin (or copper wire) into one side of the cut.",
        "Insert a galvanized nail/screw into the other side of the cut.",
        "Important: copper and zinc must NOT touch each other inside the lemon.",
        "Connect in series: copper of one lemon → nail of the next lemon.",
        "Check with a multimeter: each cell should give 0.7–0.9V.",
        "Total voltage 5–6V — connect to USB cable.",
        "Fresh lemons work best. Juice corrodes contacts — work fast."
      ],
      warnings: [
        "DO NOT use aluminum instead of copper — it oxidizes quickly and gives low voltage.",
        "Current is weak: 1–5 mA. For charging a phone you need 6+ cells.",
        "DO NOT leave contacts in lemon for long — acid will corrode the metal.",
        "Lemons can be reused 2–3 times (fresh cut renews contact)."
      ]
    },

    // ============================================================
    // SOLUTION 2: POTATO BATTERY
    // ============================================================
    {
      id: "potato_battery",
      title: "🥔 Potato battery",
      description: "Potato contains phosphoric acid. With copper and zinc gives ~0.5V. Need 10–12 pieces for USB.",
      conditions: { products: ["potato"], metals: ["copper", "zinc"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "20–30 minutes",
      yield_estimate: "0.4–0.6V per cell, 10–12 cells = 4.8–6V",
      tags: ["potato", "copper", "zinc", "slow"],
      steps: [
        "Take 10–12 large potatoes (old potatoes work less effectively).",
        "Insert a copper coin (or wire) into one side of each potato.",
        "Insert a galvanized nail/screw into the other side.",
        "Distance between electrodes should be 2–3 cm (closer = higher current).",
        "Connect in series: copper → nail → copper → nail.",
        "Potato is weaker than lemon — need more cells for 5V.",
        "Check voltage: should be 5–6V.",
        "Connect to USB. Charging will work, but very slowly.",
        "Beetroot can be used instead of potato — works similarly."
      ],
      warnings: [
        "Potato juice is less acidic — current is 2× weaker than lemon.",
        "Nails rust — use galvanized or stainless steel.",
        "DO NOT use small potatoes — contact area is too small.",
        "Fresh potatoes give more current than old ones (more moisture)."
      ]
    },

    // ============================================================
    // SOLUTION 3: SALT WATER BATTERY
    // ============================================================
    {
      id: "salt_water_battery",
      title: "🧂 Salt water battery",
      description: "Salt + water + two different metals = simplest galvanic cell. 0.6–1.0V per cell.",
      conditions: { products: ["salt", "water"], metals: ["copper", "zinc", "aluminum", "iron"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10–15 minutes",
      yield_estimate: "0.6–1.0V per cell",
      tags: ["salt", "water", "simple", "cheap"],
      steps: [
        "Dissolve 2–3 tablespoons of salt in a glass of water (warm water dissolves faster).",
        "Take two different metals: copper and zinc (or aluminum and iron).",
        "Place the metals in the solution without touching each other.",
        "Connect wires: copper = positive, zinc = negative.",
        "For USB you need 7–8 such cells connected in series.",
        "You can use plastic cups or bottles as containers.",
        "Add baking soda — alkaline solution gives slightly higher voltage.",
        "Use metal plates rather than small pieces for better contact."
      ],
      warnings: [
        "DO NOT use identical metals — voltage will be zero.",
        "Salty solution — do not drink, avoid contact with eyes.",
        "Aluminum quickly develops an oxide film — clean with sandpaper.",
        "Copper and zinc give the highest voltage (up to 1.0V)."
      ]
    },

    // ============================================================
    // SOLUTION 4: VINEGAR BATTERY
    // ============================================================
    {
      id: "vinegar_battery",
      title: "🍶 Vinegar battery — the most powerful option",
      description: "Vinegar is an excellent electrolyte. With copper and zinc gives ~1.0V per cell. Stronger than lemon and potato.",
      conditions: { products: ["vinegar"], metals: ["copper", "zinc"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–15 minutes",
      yield_estimate: "1.0–1.2V per cell, 5 cells = 5–6V",
      tags: ["vinegar", "acid", "strong", "fast"],
      steps: [
        "Take a glass and pour vinegar (white 5%, apple, wine — any).",
        "Insert a copper plate (coin, wire) and a galvanized nail/screw.",
        "Metals must NOT touch each other inside the glass.",
        "Connect a voltmeter: should read 1.0–1.2V.",
        "For USB you need 5 cells (5V). Connect in series.",
        "Vinegar is stronger than lemon — current is higher, charging is faster.",
        "After use, rinse contacts with water and dry.",
        "You can use multiple glasses of vinegar to increase current."
      ],
      warnings: [
        "Vinegar smells — work in a ventilated area.",
        "DO NOT use vinegar essence (70%) — too aggressive for contacts.",
        "Copper develops a green patina — clean before reuse.",
        "Vinegar irritates skin — rinse with water if contact occurs."
      ]
    },

    // ============================================================
    // SOLUTION 5: COIN BATTERY (STACK)
    // ============================================================
    {
      id: "coin_battery",
      title: "🪙 Coin battery from coins and foil",
      description: "Stack: coin (copper) → salt-soaked cardboard → foil (aluminum) → coin... Gives 1.5–3V in compact form.",
      conditions: { metals: ["copper", "aluminum"], products: ["salt"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "1.5–3V from 10 coins",
      tags: ["coin", "aluminum", "compact", "fast"],
      steps: [
        "Take 10 copper coins (5 RUB, 10 RUB, Euro cents, old Soviet coins).",
        "Cut cardboard or paper into circles the size of a coin.",
        "Soak the cardboard in salt solution (salt + water, can add vinegar).",
        "Assemble the stack: coin → wet cardboard → foil → coin → cardboard → foil...",
        "Top and bottom contacts are positive and negative.",
        "10 layers = 1.5–2V. For USB you need 3–4 such stacks in series.",
        "Clamp the stack with tape or a rubber band — contact must be tight.",
        "More coins = higher voltage and current."
      ],
      warnings: [
        "DO NOT use rusty coins — resistance is high.",
        "Cardboard should be wet but not dripping (to avoid shorting).",
        "Foil tears easily — use 2–3 layers.",
        "Battery works 1–2 hours, then salt dries — re-wet to reuse."
      ]
    },

    // ============================================================
    // SOLUTION 6: EARTH BATTERY
    // ============================================================
    {
      id: "earth_battery",
      title: "🌍 Earth battery (soil)",
      description: "Moist soil contains minerals and works as an electrolyte. Copper and zinc stuck in the ground give 0.5–1.0V.",
      conditions: { metals: ["copper", "zinc", "iron"], products: ["water"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "10–15 minutes",
      yield_estimate: "0.5–1.0V per electrode pair",
      tags: ["earth", "soil", "simple", "outdoor"],
      steps: [
        "Find moist soil (after rain, near a stream, in a low area).",
        "Stick a copper rod (coin, wire) into the ground.",
        "At a distance of 20–30 cm, stick a zinc or iron rod.",
        "Connect wires: copper = positive, zinc/iron = negative.",
        "Check with a multimeter: should be 0.5–1.0V.",
        "For USB you need 6–8 such pairs connected in series.",
        "Water the soil with salt water — voltage will increase.",
        "Works better in rain — soil is wetter."
      ],
      warnings: [
        "Soil must be moist — dry soil does not conduct current.",
        "Electrode insertion depth — 10–15 cm (deeper = higher current).",
        "Copper and iron oxidize quickly — clean periodically.",
        "Clay soil gives higher current than sandy soil."
      ]
    },

    // ============================================================
    // SOLUTION 7: DRIP BATTERY (SALT PAPER)
    // ============================================================
    {
      id: "drip_battery",
      title: "💧 Drip battery from paper and salt",
      description: "Paper soaked in salt water between copper and zinc — compact galvanic cell.",
      conditions: { products: ["salt", "water"], metals: ["copper", "zinc"], containers: ["paper"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10–15 minutes",
      yield_estimate: "0.5–1.0V per cell",
      tags: ["paper", "salt", "drip", "compact"],
      steps: [
        "Cut paper or cardboard into 3×5 cm strips.",
        "Soak the paper in salt solution (1 teaspoon salt per glass of water).",
        "Stack: copper foil → wet paper → zinc foil.",
        "Alternate: copper → paper → zinc → paper → copper...",
        "Each layer is a cell. 5–6 layers = 3–5V.",
        "Clamp the stack with paperclips or wrap with tape.",
        "Re-wet the paper when dry — the battery works again.",
        "You can use coins instead of foil — also works."
      ],
      warnings: [
        "Paper must be wet but not leaking (short circuit).",
        "Foil must be clean — oxides reduce voltage.",
        "Battery works 1–2 hours, then needs water added.",
        "Store in a sealed bag to prevent drying."
      ]
    },

    // ============================================================
    // SOLUTION 8: FRUIT JUICE BATTERY
    // ============================================================
    {
      id: "juice_battery",
      title: "🍊 Fruit juice battery",
      description: "Any acidic juice (lemon, orange, apple) is an excellent electrolyte. With copper and zinc gives 0.8–1.0V.",
      conditions: { products: ["lemon"], metals: ["copper", "zinc"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "0.8–1.0V per cell",
      tags: ["juice", "acid", "fast", "simple"],
      steps: [
        "Squeeze juice from lemons, oranges or apples into a glass.",
        "Place a copper plate (wire, coin) into the glass.",
        "Place a zinc plate (nail, screw) into the glass.",
        "Metals must NOT touch each other inside the glass.",
        "Connect wires: copper = positive, zinc = negative.",
        "Check with a multimeter: should be 0.8–1.0V.",
        "For USB you need 6 glasses of juice connected in series.",
        "Juice can be diluted with water — voltage drops, but current remains."
      ],
      warnings: [
        "Juice spoils quickly — use fresh squeezed.",
        "DO NOT use juice with pulp — can short the contacts.",
        "Copper oxidizes — clean after each use.",
        "Compote or brine also works instead of juice."
      ]
    }
  ]
});