// modules/survival/data/en/fire-en.js
// === MODULE: SURVIVAL — FIRE ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "survival",
    category: "fire",
    version: "1.0.0",
    lang: "en",
    title: "🔥 Fire",
    description: "How to make and maintain fire in any conditions — from forest to desert",
    icon: "🔥",
    color: "#16a34a"
  },

  questions: [
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "forest", label: "🌲 Forest / taiga", tags: ["forest", "wood", "resin"] },
        { id: "desert", label: "🏜️ Desert / steppe", tags: ["desert", "dry", "sand"] },
        { id: "mountain", label: "⛰️ Mountains", tags: ["mountain", "wind", "cold"] },
        { id: "coast", label: "🏖️ Coast / island", tags: ["coast", "wet", "driftwood"] },
        { id: "urban", label: "🏙️ City / industrial area", tags: ["urban", "debris", "chemicals"] },
        { id: "swamp", label: "🌿 Swamp / tundra", tags: ["swamp", "peat", "moss", "damp"] }
      ]
    },
    {
      id: "inventory",
      type: "multi",
      text: "What do you have on hand?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "matches", label: "🪄 Matches / lighter", tags: ["fire_source", "easy"] },
        { id: "magnesium", label: "🪨 Ferro rod / magnesium stick", tags: ["spark", "reliable"] },
        { id: "lens", label: "🔍 Lens / glasses / bottle", tags: ["solar", "lens"] },
        { id: "battery", label: "🔋 Battery + wire / foil", tags: ["electric", "short"] },
        { id: "knife", label: "🔪 Knife / multi-tool", tags: ["tool", "friction"] },
        { id: "rope", label: "🪢 Rope / paracord", tags: ["fiber", "bow_drill"] },
        { id: "plastic", label: "🧊 Plastic / bag", tags: ["lens", "magnifier"] },
        { id: "chemical", label: "🧪 Chemicals (KMNO4, glycerin)", tags: ["chemical", "reliable"] },
        { id: "nothing", label: "❌ Nothing at all", tags: ["primitive", "friction"] }
      ]
    },
    {
      id: "weather",
      type: "single",
      text: "What's the weather like?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "dry", label: "☀️ Dry / warm", tags: ["dry", "easy"] },
        { id: "damp", label: "🌫️ Damp / dew", tags: ["damp", "tinder_needed"] },
        { id: "rain", label: "🌧️ Rain / downpour", tags: ["wet", "shelter_needed"] },
        { id: "wind", label: "💨 Strong wind", tags: ["wind", "windbreak"] },
        { id: "snow", label: "❄️ Snow / freezing", tags: ["cold", "frozen_fuel"] }
      ]
    },
    {
      id: "urgency",
      type: "single",
      text: "How urgently do you need fire?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "now", label: "⚠️ Now! Cold / night", tags: ["critical", "immediate"] },
        { id: "hour", label: "⏱️ 1-2 hours available", tags: ["urgent", "short"] },
        { id: "day", label: "🌅 A full day available", tags: ["planned", "medium"] },
        { id: "days", label: "📅 Need for several days", tags: ["long_term", "strategic"] }
      ]
    },
    {
      id: "fuel",
      type: "single",
      text: "What fuel is available?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "wood", label: "🪵 Firewood / dry branches", tags: ["wood", "dry_fuel"] },
        { id: "wet_wood", label: "🌧️ Wet firewood", tags: ["wet", "needs_drying"] },
        { id: "grass", label: "🌾 Grass / straw", tags: ["grass", "quick_burn"] },
        { id: "peat", label: "🌿 Peat / moss", tags: ["peat", "slow_burn"] },
        { id: "chemicals", label: "🧪 Chemicals / plastic", tags: ["chemical", "toxic"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. MATCHES / LIGHTER
    // ============================================================
    {
      id: "matches_easy",
      title: "🪄 Matches / lighter — quick fire",
      description: "The easiest method. Prepare dry tinder and protect the fire from wind.",
      conditions: { location: ["forest", "mountain", "coast", "urban", "swamp"], inventory: ["matches"], weather: ["dry", "damp"], urgency: ["now", "hour"], fuel: ["wood", "grass", "peat"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2-5 min",
      yield_estimate: "fire on first try",
      tags: ["matches", "easy", "universal"],
      steps: [
        "1. FIND TINDER: in forest — birch bark (peel outer layer like paper), dry moss under spruce trees, dry grass, fireweed fluff. In city — cardboard, paper, cotton.",
        "2. MAKE A NEST: fist-sized, from fine fibers. Create a small depression in the center.",
        "3. IGNITE: bring match/lighter to the center of the nest. Hold vertically so flame doesn't go out.",
        "4. BLOW: when tinder catches, gently blow to create a flame.",
        "5. ADD TWIGS: matchstick thickness → finger thickness → arm thickness.",
        "6. PROTECT FROM WIND: stand with back to wind or build stone/log windbreak."
      ],
      warnings: [
        "💧 Store matches in waterproof container (condom, Ziploc, sealed bag).",
        "💨 In strong wind — build fire in a pit or behind rocks.",
        "🔥 Don't use all matches at once — save 2-3 for backup.",
        "🌧️ In wet weather, carry matches in breast pocket — body heat dries them."
      ]
    },
    // ============================================================
    // 2. FERRO ROD (MAGNESIUM STICK)
    // ============================================================
    {
      id: "magnesium_striker",
      title: "🪨 Ferro rod / magnesium stick",
      description: "Works in any weather, even in rain. 3000°C sparks ignite even damp tinder.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["magnesium"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["wood", "grass", "peat", "wet_wood"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3-7 min",
      yield_estimate: "fire in 1-3 attempts",
      tags: ["magnesium", "reliable", "all_weather"],
      steps: [
        "1. SCRAPE MAGNESIUM: use knife or rod edge to scrape 1-2g of shavings (coin-sized) directly onto tinder.",
        "2. PREPARE TINDER: dry moss, birch bark, or cotton under the shavings. The finer the shavings, the better.",
        "3. STRIKE: hold rod at 45° angle to shavings. Sharply strike the ferrocerium rod with striker — sparks will fly.",
        "4. IGNITE: shavings will flare up for 2-3 seconds — enough to ignite tinder.",
        "5. BLOW: gently blow, add thin twigs."
      ],
      warnings: [
        "⚡ Shavings burn very fast — be ready to add twigs.",
        "🛑 Don't keep rod wet — ferrocerium rusts.",
        "💥 Strike sharply but not too hard — rod is brittle.",
        "🔥 Keep away from gasoline and gases."
      ]
    },
    // ============================================================
    // 3. BATTERY + FOIL
    // ============================================================
    {
      id: "battery_short",
      title: "🔋 Battery + foil / wire",
      description: "Short circuit heats metal to 500-800°C — enough to ignite tinder.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["battery"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["wood", "grass"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1-3 min",
      yield_estimate: "fire in 1-2 attempts",
      tags: ["battery", "electric", "urban", "quick"],
      steps: [
        "1. FIND BATTERY: any — AA, AAA, 9V, phone. Higher voltage = faster heating.",
        "2. MAKE A BRIDGE: foil from chocolate/gum wrapper, steel wool, thin wire. Connect + and -.",
        "3. HEAT: in 1-3 seconds the bridge will glow red. Carefully bring to tinder.",
        "4. BLOW: as soon as tinder smokes — blow, add twigs.",
        "5. FOR 9V BATTERY: just touch steel wool to both terminals — sparks guaranteed."
      ],
      warnings: [
        "💥 Battery can explode with prolonged short circuit — hold 1-3 seconds only.",
        "⛔ Don't use thick wire — won't heat up (needs thin resistance).",
        "🧊 Gum/chocolate wrapper foil is ideal bridge (2-3 mm wide).",
        "🔋 Use only in emergency — battery drains quickly."
      ]
    },
    // ============================================================
    // 4. CHEMICAL IGNITION (KMNO4 + GLYCERIN)
    // ============================================================
    {
      id: "chemical_fire",
      title: "🧪 Chemical ignition (KMNO4 + glycerin)",
      description: "Instant exothermic reaction — ignition in 10-30 seconds. Works in any weather.",
      conditions: { location: ["urban", "forest", "mountain", "coast"], inventory: ["chemical"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["wood", "grass"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-2 min",
      yield_estimate: "fire guaranteed",
      tags: ["chemical", "urban", "first_aid_kit", "reliable"],
      steps: [
        "1. FIND KMNO4: purple crystals in first aid kit (potassium permanganate).",
        "2. FIND GLYCERIN: in first aid kit (emollient), in cosmetics (moisturizer).",
        "3. MIX: pour 1 tsp KMNO4 onto tinder. Add 3-5 drops of glycerin.",
        "4. WAIT: in 10-30 seconds smoke will appear, then flame flare.",
        "5. BLOW: add thin twigs.",
        "6. ALTERNATIVE: KMNO4 + sugar (1:1) — grind until ignition."
      ],
      warnings: [
        "🟣 KMNO4 stains everything purple — avoid eyes and clothing.",
        "⚡ Reaction is uncontrollable — prepare tinder and twigs in advance.",
        "💧 Store KMNO4 in dry place — moisture activates reaction.",
        "🔥 Toxic smoke is released — don't breathe it."
      ]
    },
    // ============================================================
    // 5. FIRE IN RAIN
    // ============================================================
    {
      id: "wet_weather_fire",
      title: "🌧️ Fire in rain / wet weather",
      description: "Find DRY fuel. In the forest it's always available, even in rain.",
      conditions: { location: ["forest", "mountain", "coast", "swamp"], inventory: ["matches", "magnesium", "battery", "nothing", "chemical"], weather: ["rain", "damp", "snow"], urgency: ["now", "hour"], fuel: ["wet_wood"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "10-20 min",
      yield_estimate: "depends on skill",
      tags: ["wet", "rain", "survival", "skill"],
      steps: [
        "1. FIND DRY FUEL UNDER SPRUCE: lower spruce branches protect from rain — dry needles and twigs there.",
        "2. BIRCH BARK: even wet birch bark burns due to resin. Peel outer layer — inside is dry.",
        "3. CONIFER RESIN: on pine/spruce trunks — hardened resin (pitch). Burns like a candle, even wet.",
        "4. UNDER ROOTS: fallen trees — always dry underneath.",
        "5. BUILD UNDER COVER: bark/branch shelter protects from rain.",
        "6. DRY WOOD AT FIRE: place wet logs vertically, ends toward fire — dry in 15-30 minutes."
      ],
      warnings: [
        "🌿 Wet moss doesn't burn — don't waste time.",
        "💨 Don't build fire under the only shelter — smoke will kill you.",
        "🔥 Resin burns bright but fast — stock wood in advance.",
        "🌧️ In rain, collect wood before it gets wet."
      ]
    },
    // ============================================================
    // 6. DRYING WOOD AT FIRE
    // ============================================================
    {
      id: "dry_wood_fire",
      title: "🔥 Drying wood at the fire",
      description: "Wet wood can be dried in 15-30 minutes if properly arranged around the fire.",
      conditions: { location: ["forest", "mountain", "coast", "swamp"], inventory: ["knife", "matches", "magnesium", "nothing"], weather: ["damp", "rain", "snow"], urgency: ["hour", "day"], fuel: ["wet_wood"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "15-30 min",
      yield_estimate: "dry firewood",
      tags: ["dry", "wood", "preparation", "skill"],
      steps: [
        "1. SPLIT: logs into small pieces (2-5 cm thick). Thinner = faster drying.",
        "2. REMOVE BARK: bark holds moisture — remove with knife.",
        "3. ARRANGE AROUND FIRE: vertically, ends toward fire. Distance 20-30 cm — to prevent ignition.",
        "4. ROTATE: every 5 minutes for even drying.",
        "5. CHECK: dry wood rings when struck, bark peels easily, no wet spots.",
        "6. USE: dry wood burns bright and smokeless."
      ],
      warnings: [
        "💨 Don't place wood too close — it will ignite.",
        "🌧️ In rain, dry under shelter.",
        "🪵 Wet wood smokes and burns poorly — spend time drying.",
        "🔥 For fast kindling use resin or birch bark."
      ]
    },
    // ============================================================
    // 7. SOLAR LENS
    // ============================================================
    {
      id: "solar_lens",
      title: "🔍 Solar ignition (lens)",
      description: "Focus sunlight on tinder — in 10-60 seconds smoke appears. Works only in clear weather.",
      conditions: { location: ["forest", "desert", "mountain", "coast"], inventory: ["lens", "plastic", "nothing"], weather: ["dry"], urgency: ["hour", "day"], fuel: ["wood", "grass"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1-5 min",
      yield_estimate: "depends on sun",
      tags: ["solar", "lens", "no_fuel"],
      steps: [
        "1. FIND LENS: glasses (farsighted), magnifying glass, glass bottle bottom with water, ice lens.",
        "2. MAKE ICE LENS: in freezing weather — carve ice, polish into lens shape.",
        "3. FOCUS: aim at sun, concentrate beam to 2-3 mm spot on tinder.",
        "4. WAIT: in 10-60 seconds smoke appears. Don't move the lens.",
        "5. BLOW: when red ember appears — gently blow, place in tinder nest."
      ],
      warnings: [
        "☀️ Works only in bright sun (not cloudy).",
        "😎 Don't look at focal point — retina damage.",
        "🧊 Ice lens melts in 5-15 minutes — work fast.",
        "🌫️ Useless in cloudy weather — use another method."
      ]
    },
    // ============================================================
    // 8. BOW DRILL
    // ============================================================
    {
      id: "bow_drill",
      title: "🪚 Bow drill",
      description: "Classic friction method. Requires practice, but works without any tools except rope and knife.",
      conditions: { location: ["forest", "desert", "swamp"], inventory: ["rope", "knife", "nothing"], weather: ["dry", "damp"], urgency: ["hour", "day"], fuel: ["wood"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15-45 min",
      yield_estimate: "fire in 3-10 attempts",
      tags: ["primitive", "friction", "skill", "forest"],
      steps: [
        "1. FIND MATERIALS: board — dry softwood (poplar, aspen, cedar, willow). Drill — straight dry branch 20-30 cm.",
        "2. MAKE BOW: flexible branch (rowan, hazel) + rope/string/paracord. String like bowstring.",
        "3. MAKE HOLE: in board with knife or stone — small depression for drill.",
        "4. SPIN: wrap drill with bow string. Press into board. Move bow back and forth with force and speed.",
        "5. GET EMBER: in 30-60 seconds glowing dust appears. Collect on leaf/tinder.",
        "6. BLOW: transfer ember to tinder nest, gently blow."
      ],
      warnings: [
        "⏳ Requires practice — don't give up after 3-5 failures.",
        "🌞 Everything must be absolutely dry — moisture kills the method.",
        "💪 Hand pain is normal — it's a hard method.",
        "🌿 Use resin or birch bark for kindling."
      ]
    },
    // ============================================================
    // 9. MAINTAIN FIRE LONG-TERM
    // ============================================================
    {
      id: "fire_maintain",
      title: "🔥 How to keep fire going for a long time",
      description: "Use 'star' or 'tipi' construction with thick logs to keep fire through the night.",
      conditions: { location: ["forest", "mountain", "coast", "swamp"], inventory: ["knife", "matches", "magnesium"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["day", "days"], fuel: ["wood", "peat"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "15-30 min setup",
      yield_estimate: "fire for 6-12 hours",
      tags: ["maintain", "night", "long_term", "skill"],
      steps: [
        "1. 'STAR' CONSTRUCTION: place 4-5 logs with ends in center. Push in as they burn.",
        "2. 'TIPI' CONSTRUCTION: cone of logs — burns long, gives lots of heat.",
        "3. NIGHT MODE: use thick logs (15-20 cm diameter) — burn 6-8 hours.",
        "4. PEAT / MOSS: add dry peat or moss on top — smolders slowly, retains heat.",
        "5. SAVE EMBERS: in morning — rake ashes — embers smolder up to 12 hours. Add dry twigs — fire returns.",
        "6. SHELTER: protect from rain with bark/branch cover."
      ],
      warnings: [
        "💨 Wind can spread fire — block with rocks or logs.",
        "🌧️ Rain will put it out — cover with shelter.",
        "🔥 Never leave unattended — forest fire risk.",
        "🧊 In freezing weather, fire burns less — use more wood."
      ]
    },
    // ============================================================
    // 10. FIRE WITHOUT TINDER (EMERGENCY)
    // ============================================================
    {
      id: "fire_without_tinder",
      title: "🔥 Fire without tinder (emergency)",
      description: "If no tinder — use what's available. In forest and city there's always something to burn.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["nothing", "knife", "matches", "magnesium", "battery"], weather: ["dry", "damp", "rain", "wind", "snow"], urgency: ["now", "hour"], fuel: ["grass"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5-15 min",
      yield_estimate: "fire for kindling",
      tags: ["tinder", "emergency", "survival", "improvised"],
      steps: [
        "1. IN FOREST: dry moss (under spruce), lichen (on rocks), birch bark (outer layer), fireweed fluff (summer).",
        "2. ON COAST: dry seaweed, washed-up rope, dry grass behind dunes.",
        "3. IN DESERT: dry grass (tumbleweed), animal dung (dried), dry plant roots.",
        "4. IN CITY: newspapers, cardboard, small wood chips, cotton, cotton clothing (not synthetic!).",
        "5. GATHER INTO A NEST: fist-sized, loose, with depression in center.",
        "6. IGNITE: use any fire source. Blow."
      ],
      warnings: [
        "🧪 Synthetics melt and release toxic smoke — don't use.",
        "🌧️ Wet tinder won't burn — look for dry (under rocks, roots).",
        "🔥 Tinder must be very dry and fluffy — finer fibers burn better.",
        "💨 For wind protection — use your body, rocks, or clothing."
      ]
    }
  ]
});