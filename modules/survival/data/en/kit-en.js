// modules/survival/data/en/kit-en.js
// === MODULE: SURVIVAL — KIT (PREPARATION) ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "survival",
    category: "kit",
    version: "1.0.0",
    lang: "en",
    title: "Kit",
    description: "What to pack for hiking, travel, or emergency situations",
    icon: "🎒",
    color: "#16a34a"
  },

  questions: [
    {
      id: "urgency",
      type: "single",
      text: "When do you need to pack?",
      options: [
        { id: "now", label: "⚡ Urgent! Right now", tags: ["urgent", "quick"] },
        { id: "week", label: "📅 A week to prepare", tags: ["planned", "detailed"] },
        { id: "future", label: "🌍 For the future — want to be prepared", tags: ["future", "complete"] }
      ]
    },
    {
      id: "terrain",
      type: "single",
      text: "Where are you going?",
      conditions: { urgency: ["now", "week", "future"] },
      options: [
        { id: "forest", label: "🌲 Forest / mountains / taiga", tags: ["forest", "wild"] },
        { id: "desert", label: "🏜️ Desert / steppe", tags: ["desert", "dry"] },
        { id: "coast", label: "🏖️ Coast / river", tags: ["coast", "water"] },
        { id: "urban", label: "🏙️ City / travel", tags: ["urban", "travel"] }
      ]
    },
    {
      id: "duration",
      type: "single",
      text: "How long for?",
      conditions: { urgency: ["now", "week", "future"] },
      options: [
        { id: "short", label: "⏱️ 1-2 days", tags: ["short", "light"] },
        { id: "medium", label: "📆 3-7 days", tags: ["medium", "balanced"] },
        { id: "long", label: "📅 2+ weeks / long-term", tags: ["long", "complete"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. FOREST — 1-2 DAYS (BASIC KIT)
    // ============================================================
    {
      id: "forest_short",
      title: "🌲 Forest 1-2 days (basic kit)",
      description: "Minimal kit for a short forest trip. Everything fits in a small backpack. The essentials: water, food, fire, and warmth.",
      conditions: { urgency: ["now", "week"], terrain: ["forest"], duration: ["short"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Pack in 20 min",
      yield_estimate: "weight ~3-5 kg",
      tags: ["checklist", "forest", "short", "basic"],
      steps: [
        "☐ 💧 Water — 2 liters (min 1 L per day)",
        "☐ 🍖 Food — MRE, nuts, chocolate, sandwiches",
        "☐ 🔪 Knife / multi-tool",
        "☐ 🔥 Matches in waterproof container + lighter",
        "☐ 🔦 Flashlight + spare batteries",
        "☐ 🩹 First aid: band-aid, iodine, bandage, painkiller",
        "☐ 🧥 Warm clothes (even in summer — cold at night)",
        "☐ 📱 Phone + powerbank",
        "☐ 🪢 Rope 5 m",
        "☐ 🧭 Compass or map app",
        "☐ 📢 Whistle (3 short = SOS)"
      ],
      warnings: [
        "Charge your phone in advance!",
        "Tell someone your route",
        "It's easy to get lost in forest — keep compass handy",
        "Don't go alone if possible"
      ]
    },
    // ============================================================
    // 2. FOREST — 3-7 DAYS (FULL KIT)
    // ============================================================
    {
      id: "forest_medium",
      title: "🌲 Forest 3-7 days (full kit)",
      description: "For multi-day forest trips. More food, fuel, and gear. Add tent, sleeping bag, and pot.",
      conditions: { urgency: ["week", "future"], terrain: ["forest"], duration: ["medium"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "Pack in 1-2 hours",
      yield_estimate: "weight ~10-15 kg",
      tags: ["checklist", "forest", "medium", "camping"],
      steps: [
        "☐ 💧 Water — 5-10 liters (or filter + tablets)",
        "☐ 🍖 Food — MRE for all days + grains + canned meat",
        "☐ 🔪 Knife / multi-tool + hatchet or saw",
        "☐ 🔥 Matches + lighter + ferro rod (backup)",
        "☐ 🔦 Flashlight + headlamp + batteries",
        "☐ 🩹 Full first aid: bandages, tourniquet, painkillers, antihistamine",
        "☐ 🏕️ Tent + sleeping bag + sleeping pad",
        "☐ 🍲 Pot + mug + spoon",
        "☐ 🧥 Clothing: thermal underwear, fleece, raincoat, spare socks",
        "☐ 📱 Phone + powerbank (2x)",
        "☐ 🪢 Rope 15-20 m",
        "☐ 🧭 Compass + map",
        "☐ 📢 Whistle + signal mirror",
        "☐ 🧴 Insect repellent + sunscreen"
      ],
      warnings: [
        "Check gear before the trip",
        "Download offline maps",
        "Bring spare batteries",
        "Be prepared for rain and cold"
      ]
    },
    // ============================================================
    // 3. CITY / TRAVEL — 1-2 DAYS
    // ============================================================
    {
      id: "urban_short",
      title: "🏙️ City / travel 1-2 days",
      description: "Kit for a short city trip or business travel. Minimal items, but everything needed for comfort and safety.",
      conditions: { urgency: ["now", "week"], terrain: ["urban"], duration: ["short"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Pack in 10 min",
      yield_estimate: "weight ~2-3 kg",
      tags: ["checklist", "urban", "short", "travel"],
      steps: [
        "☐ 💧 Water — 0.5 L bottle",
        "☐ 🍖 Food — snacks (bars, nuts, fruit)",
        "☐ 💳 Documents + cash + bank card",
        "☐ 📱 Phone + charger + powerbank",
        "☐ 🩹 Mini first aid: band-aid, painkiller",
        "☐ 🧥 Weather-appropriate clothing + umbrella",
        "☐ 🔦 Flashlight (phone or separate)",
        "☐ 🗺️ City map (offline) or app"
      ],
      warnings: [
        "Let someone know where you are",
        "Don't leave belongings unattended",
        "Check phone battery"
      ]
    },
    // ============================================================
    // 4. DESERT / STEPPE — 1-2 DAYS
    // ============================================================
    {
      id: "desert_short",
      title: "🏜️ Desert / steppe 1-2 days",
      description: "In the desert, the main priorities are water and sun protection. Bring at least 3-4 liters of water per day. Protect your head, eyes, and skin.",
      conditions: { urgency: ["now", "week"], terrain: ["desert"], duration: ["short"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Pack in 20 min",
      yield_estimate: "weight ~5-7 kg",
      tags: ["checklist", "desert", "short", "survival"],
      steps: [
        "☐ 💧 Water — minimum 4 liters per day",
        "☐ 🍖 Food — MRE, nuts, chocolate (doesn't melt!)",
        "☐ 👕 Clothing: light-colored, covering, breathable",
        "☐ 🧢 Head cover + sunglasses",
        "☐ 🧴 Sunscreen SPF 50+",
        "☐ 🔪 Knife / multi-tool",
        "☐ 🔥 Matches + lighter",
        "☐ 📱 Phone + powerbank",
        "☐ 🧭 Compass + map"
      ],
      warnings: [
        "Easily dehydrate in desert — drink often",
        "Travel morning and evening, rest in shade at noon",
        "Sand burns — wear shoes",
        "Can get cold at night"
      ]
    },
    // ============================================================
    // 5. COAST / RIVER — 1-2 DAYS
    // ============================================================
    {
      id: "coast_short",
      title: "🏖️ Coast / river 1-2 days",
      description: "Kit for water-side recreation. Besides regular items — swimwear, sun protection, insect repellent.",
      conditions: { urgency: ["now", "week"], terrain: ["coast"], duration: ["short"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Pack in 15 min",
      yield_estimate: "weight ~3-5 kg",
      tags: ["checklist", "coast", "short", "beach"],
      steps: [
        "☐ 💧 Water — 1.5-2 liters",
        "☐ 🍖 Food — snacks, fruit, sandwiches",
        "☐ 🩱 Swimsuit + towel",
        "☐ 🧴 Sunscreen SPF 30+",
        "☐ 🧢 Hat + sunglasses",
        "☐ 🩹 Mini first aid",
        "☐ 📱 Phone + powerbank",
        "☐ 🧴 Insect repellent"
      ],
      warnings: [
        "Don't swim far without preparation",
        "Watch children near water",
        "Drink water regularly — dehydration in the sun"
      ]
    },
    // ============================================================
    // 6. COMPLETE SURVIVAL KIT (FOR THE FUTURE)
    // ============================================================
    {
      id: "complete_kit",
      title: "🎒 Complete survival kit (for the future)",
      description: "Basic kit for any trip. Suitable for long-term hikes, expeditions, or just keeping at home for emergencies.",
      conditions: { urgency: ["future"], terrain: ["forest", "desert", "coast", "urban"], duration: ["long"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "Pack in 1 day",
      yield_estimate: "weight ~15-20 kg",
      tags: ["checklist", "complete", "survival", "long_term"],
      steps: [
        "☐ 💧 Water — 5-10 liters or filter + tablets",
        "☐ 🍖 Food — MRE + grains + canned meat + crackers",
        "☐ 🔪 Knife + multi-tool + sharpener",
        "☐ 🔥 Matches + lighter + ferro rod + fuel tablets",
        "☐ 🔦 Flashlight + headlamp + batteries + candles",
        "☐ 🩹 Full first aid: bandages, tourniquet, antiseptics, meds",
        "☐ 🏕️ Tent + sleeping bag + sleeping pad + tarp",
        "☐ 🍲 Pot + mug + water bottle",
        "☐ 🧥 All-season clothing: thermal, fleece, raincoat",
        "☐ 📱 Phone + powerbank 20000 mAh + solar panel",
        "☐ 🪢 Rope 20-30 m + paracord 10 m",
        "☐ 🧭 Compass + map + GPS navigator",
        "☐ 📢 Whistle + mirror + signal flares",
        "☐ 🧴 Repellent + sunscreen + hygiene items",
        "☐ 🔧 Repair kit: wire, electrical tape, duct tape",
        "☐ 📖 Manual: how to use everything"
      ],
      warnings: [
        "Regularly check expiration dates of food and meds",
        "Update kit by season",
        "Store in a dry, accessible place",
        "Know how to use all gear"
      ]
    }
  ]
});