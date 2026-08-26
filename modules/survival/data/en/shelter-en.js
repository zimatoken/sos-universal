// modules/survival/data/en/shelter-en.js
// === MODULE: SURVIVAL — SHELTER ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "survival",
    category: "shelter",
    version: "1.0.0",
    lang: "en",
    title: "Shelter",
    description: "How to build shelter from weather and cold in any conditions",
    icon: "🏠",
    color: "#16a34a"
  },

  questions: [
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "forest", label: "🌲 Forest / taiga", tags: ["forest", "wood", "branches"] },
        { id: "desert", label: "🏜️ Desert / steppe", tags: ["desert", "sand", "heat"] },
        { id: "mountain", label: "⛰️ Mountains", tags: ["mountain", "wind", "cold", "rocks"] },
        { id: "coast", label: "🏖️ Coast / island", tags: ["coast", "driftwood", "wind"] },
        { id: "urban", label: "🏙️ City / industrial area", tags: ["urban", "debris", "buildings"] },
        { id: "swamp", label: "🌿 Swamp / tundra", tags: ["swamp", "moss", "insects", "water"] }
      ]
    },
    {
      id: "inventory",
      type: "multi",
      text: "What do you have on hand?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "tarp", label: "🧊 Tarp / canvas / plastic sheet", tags: ["cover", "waterproof"] },
        { id: "rope", label: "🪢 Rope / paracord", tags: ["cordage", "binding"] },
        { id: "knife", label: "🔪 Knife / multi-tool", tags: ["tool", "cutting"] },
        { id: "fire", label: "🔥 Matches / lighter", tags: ["heat", "warmth"] },
        { id: "blanket", label: "🛏️ Blanket / sleeping bag", tags: ["insulation", "warmth"] },
        { id: "nothing", label: "❌ Nothing at all", tags: ["primitive", "natural"] }
      ]
    },
    {
      id: "weather",
      type: "single",
      text: "What's the weather / threat?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "cold", label: "❄️ Cold / freezing", tags: ["cold", "insulation"] },
        { id: "rain", label: "🌧️ Rain / downpour", tags: ["wet", "waterproof"] },
        { id: "wind", label: "💨 Wind / storm", tags: ["wind", "sturdy"] },
        { id: "heat", label: "☀️ Heat / sun", tags: ["heat", "shade"] },
        { id: "night", label: "🌙 Night / darkness", tags: ["dark", "quick"] },
        { id: "insects", label: "🦟 Insects / mosquitoes", tags: ["insects", "protection"] }
      ]
    },
    {
      id: "urgency",
      type: "single",
      text: "How urgently do you need shelter?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "now", label: "⚠️ Now! Night / storm", tags: ["critical", "immediate"] },
        { id: "hour", label: "⏱️ 1-2 hours available", tags: ["urgent", "short"] },
        { id: "day", label: "🌅 A full day available", tags: ["planned", "medium"] },
        { id: "days", label: "📅 Several days available", tags: ["long_term", "strategic"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. TARP SHELTER
    // ============================================================
    {
      id: "tarp_shelter",
      title: "🧊 Tarp / plastic sheet shelter",
      description: "The fastest way with a tarp. Stretch between trees like a roof or tent. Secure corners with stones or stakes. Can make a hammock with rope.",
      conditions: { location: ["forest", "mountain", "coast", "desert", "urban", "swamp"], inventory: ["tarp", "rope"], weather: ["rain", "wind", "cold", "heat", "night", "insects"], urgency: ["now", "hour"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5-15 min",
      yield_estimate: "instant protection",
      tags: ["tarp", "quick", "universal", "modern"],
      steps: [
        "1. CHOOSE LOCATION: between 2 trees at 1-1.5 m height, or by a rock, or in the open with stakes.",
        "2. STRETCH TARP: secure corners with ropes to trees or stones.",
        "3. FOR A TENT: lean one edge to the ground, stretch the other on a pole.",
        "4. IN RAIN: make a 30° slope for water runoff.",
        "5. IN COLD: place the tarp on the ground as insulation.",
        "6. SECURE: with stones, stakes, heavy branches."
      ],
      warnings: [
        "💨 Tarp tears in wind — secure firmly.",
        "🌲 Don't set up under a dead tree — it may fall.",
        "🏜️ In the desert — tarp gives shade, but doesn't protect from night cold."
      ]
    },
    // ============================================================
    // 2. ROCK SHELTER
    // ============================================================
    {
      id: "rock_shelter",
      title: "🏔️ Shelter in a crevice / under a rock",
      description: "The fastest shelter in mountains. Find a natural crevice, cave, overhanging rock. Check for safety. Insulate the floor with branches and leaves.",
      conditions: { location: ["mountain", "forest", "coast"], inventory: ["nothing", "knife", "tarp"], weather: ["rain", "wind", "cold", "night", "heat"], urgency: ["now", "hour"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5-15 min",
      yield_estimate: "natural protection",
      tags: ["mountain", "natural", "quick", "safe"],
      steps: [
        "1. LOOK FOR: overhanging rocks, crevices, caves, rock shelters.",
        "2. CHECK: stability — no cracks, loose rocks above.",
        "3. CLEAR: remove stones, roots, debris from the floor.",
        "4. INSULATE FLOOR: lay branches, leaves, moss, dry grass.",
        "5. IN COLD: close the entrance with branches or tarp, leaving a passage.",
        "6. CHECK: no water dripping from above, no animal tracks."
      ],
      warnings: [
        "🐍 Check for animals — snakes, birds, bears.",
        "🔥 Don't make fire in an enclosed space — carbon monoxide.",
        "⚠️ Watch for rockfalls — not under overhanging cliffs.",
        "💧 Check for dripping water (wet walls)."
      ]
    },
    // ============================================================
    // 3. LEAN-TO SHELTER
    // ============================================================
    {
      id: "lean_to",
      title: "🌲 Lean-to shelter",
      description: "The simplest shelter. Lean a long pole against a tree or rock. Place branches at an angle to form a wall. Cover with leaves, moss, snow for insulation. Works in forest and mountains.",
      conditions: { location: ["forest", "mountain", "coast"], inventory: ["rope", "knife", "nothing"], weather: ["rain", "wind", "cold", "night"], urgency: ["now", "hour"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "20-40 min",
      yield_estimate: "protection from wind and rain",
      tags: ["forest", "quick", "basic", "wind"],
      steps: [
        "1. FIND A BASE: two trees 2-3 m apart or a large rock.",
        "2. PLACE A POLE: thick branch at 1-1.5 m height between trees.",
        "3. LEAN BRANCHES: at an angle to the pole, tightly like a lean-to.",
        "4. COVER: with leaves, moss, grass, bark — denser = warmer.",
        "5. IN COLD: pile snow on top for insulation.",
        "6. INSIDE: lay dry branches and leaves for sitting/lying."
      ],
      warnings: [
        "⛰️ Don't build at the foot of a slope — snow/rock slide.",
        "🌲 Not under a dead tree — may fall.",
        "💨 Open side — away from wind, not from cold."
      ]
    },
    // ============================================================
    // 4. URBAN SHELTER
    // ============================================================
    {
      id: "urban_shelter",
      title: "🏙️ Shelter in the city / industrial area",
      description: "Use abandoned buildings, basements, garages. Check structural stability. Barricade the entrance. Look for materials: cardboard, plastic, fabric for insulation.",
      conditions: { location: ["urban"], inventory: ["nothing", "knife", "tarp", "blanket"], weather: ["cold", "rain", "wind", "heat", "night", "insects"], urgency: ["now", "hour"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "10-30 min",
      yield_estimate: "protection from elements",
      tags: ["urban", "building", "debris", "quick"],
      steps: [
        "1. CHOOSE BUILDING: brick, concrete, no cracks or tilt.",
        "2. BASEMENT: warmest place (but check for flooding).",
        "3. BARRICADE: entrance with furniture, boards, stones.",
        "4. INSULATE: windows with cardboard, plastic, fabric.",
        "5. COLLECT FUEL: for fire if needed.",
        "6. CHOOSE: 2-3 floor — not basement (flooding) and not top (cold)."
      ],
      warnings: [
        "🏗️ Check building stability — cracks, tilt.",
        "💧 Don't enter basements with flood risk.",
        "🩸 Be careful with debris — sharp edges, nails, glass.",
        "🔊 Choose 2-3 floor — not basement (flooding) and not top (cold)."
      ]
    },
    // ============================================================
    // 5. DESERT SHADE
    // ============================================================
    {
      id: "desert_shade",
      title: "🏜️ Shade in the desert",
      description: "In the desert, the main threat is overheating. Use tarp, branches, clothing to create shade. Dig a pit — the ground below is cooler. Work at night, rest during the day.",
      conditions: { location: ["desert"], inventory: ["tarp", "blanket", "nothing"], weather: ["heat", "night"], urgency: ["now", "hour"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "15-30 min",
      yield_estimate: "temperature drop by 10-15°C",
      tags: ["desert", "heat", "shade", "quick"],
      steps: [
        "1. FIND NATURAL SHADE: rocks, bushes, ravine.",
        "2. OR MAKE SHELTER: from clothing/tarp on branches/rope.",
        "3. DIG A PIT: 30-50 cm — ground is cooler.",
        "4. WORK AT NIGHT: move and work in the cool.",
        "5. REST DURING DAY: in shade, without movement.",
        "6. WET CLOTH: on head and neck for cooling."
      ],
      warnings: [
        "🔥 Don't lie on hot sand — burns.",
        "💧 Drink water slowly, in small sips.",
        "❄️ Cold at night in the desert — save heat."
      ]
    },
    // ============================================================
    // 6. WINDBREAK
    // ============================================================
    {
      id: "windbreak",
      title: "💨 Windbreak wall",
      description: "In open areas (steppe, desert, coast) build a wall from stones, turf, snow, or branches. Height — up to waist. The wall reduces wind speed by 2-3 times and preserves heat.",
      conditions: { location: ["desert", "coast", "mountain"], inventory: ["knife", "nothing", "tarp"], weather: ["wind", "cold", "night"], urgency: ["now", "hour"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "20-40 min",
      yield_estimate: "wind reduction by 50-70%",
      tags: ["wind", "quick", "universal", "open_space"],
      steps: [
        "1. GATHER MATERIALS: stones, turf, snow blocks, branches.",
        "2. BUILD A WALL: waist-high, 2-3 meters long.",
        "3. IN SNOW: cut blocks and build a wall.",
        "4. FROM BRANCHES: weave like a fence.",
        "5. SIT: on the leeward side of the wall.",
        "6. IMPROVE: add tarp or clothing on top for rain protection."
      ],
      warnings: [
        "💨 Don't make the wall too high — wind will topple it.",
        "🪨 Stones must be stable — don't collapse.",
        "❄️ Snow wall melts — renew it."
      ]
    },
    // ============================================================
    // 7. DEBRIS HUT
    // ============================================================
    {
      id: "debris_hut",
      title: "🌿 Debris hut",
      description: "A fully enclosed shelter. Make a frame from flexible branches in a dome shape. Pack leaves, moss, grass tightly — minimum 30 cm layer. Inside — a pit for a small fire or warm bedding.",
      conditions: { location: ["forest", "mountain", "swamp"], inventory: ["knife", "nothing"], weather: ["cold", "rain", "wind", "insects"], urgency: ["hour", "day"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1-3 hours",
      yield_estimate: "warm fully enclosed shelter",
      tags: ["forest", "warm", "insulated", "long"],
      steps: [
        "1. FIND LOCATION: dense grove or sheltered from wind.",
        "2. MAKE FRAME: stick 2 rows of flexible branches into the ground, bending them into a dome.",
        "3. WEAVE: branches, creating a dense frame.",
        "4. LAY INSULATION: leaves, moss, grass — minimum 30 cm, more = warmer.",
        "5. INSIDE: bedding of leaves or pine needles, pit for warm air.",
        "6. ENTRANCE: on the leeward side, cover with branches."
      ],
      warnings: [
        "⏳ Requires a lot of material — 2-3 hours of work.",
        "🐜 Check for anthills and snakes.",
        "📏 Don't make it too large — hard to heat.",
        "🔥 Entrance should be on the leeward side."
      ]
    },
    // ============================================================
    // 8. SNOW CAVE
    // ============================================================
    {
      id: "snow_cave",
      title: "❄️ Snow cave",
      description: "In deep snow, dig a cave or use a snowdrift. Snow is an excellent insulator. The entrance should be below floor level so warm air doesn't escape. Make a ventilation hole.",
      conditions: { location: ["mountain", "forest"], inventory: ["knife", "nothing"], weather: ["cold", "wind"], urgency: ["hour", "day"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1-2 hours",
      yield_estimate: "inside temperature 0°C at -20°C outside",
      tags: ["snow", "winter", "insulated", "mountain"],
      steps: [
        "1. FIND DRIFT: or pile snow into a 2×2 m mound.",
        "2. DIG ENTRANCE: from the side, at ground level.",
        "3. INSIDE: floor higher than entrance (heat rises).",
        "4. MAKE BED: from branches or backpack.",
        "5. VENTILATION: poke a hole in the ceiling with a stick.",
        "6. DON'T MAKE IT TOO LARGE: hard to heat."
      ],
      warnings: [
        "💨 Ventilation is mandatory — carbon monoxide from candle/fire.",
        "📏 Don't make the cave too large — hard to heat.",
        "⚠️ Check snow stability — may collapse.",
        "🏔️ Don't build on a slope — avalanche! Only on flat ground."
      ]
    },
    // ============================================================
    // 9. A-FRAME SHELTER
    // ============================================================
    {
      id: "a_frame",
      title: "🏠 A-frame shelter",
      description: "Classic A-shaped shelter. Two poles tied at the top form a triangle. On the sides — branches, bark, moss. Very stable against wind and snow. Requires more time but more reliable.",
      conditions: { location: ["forest", "mountain", "coast"], inventory: ["rope", "knife", "nothing"], weather: ["cold", "rain", "wind", "snow"], urgency: ["hour", "day"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1-2 hours",
      yield_estimate: "reliable shelter for 1-3 people",
      tags: ["forest", "sturdy", "warm", "classic"],
      steps: [
        "1. FIND: 2 long poles (3-4 m) for the A-frame base.",
        "2. TIE: together at the top with rope, bark, or just lash.",
        "3. SPREAD: bottom ends 2 m apart — A shape.",
        "4. LAY: cross poles every 30-40 cm.",
        "5. COVER: with bark, moss, leaves — from bottom to top like shingles.",
        "6. INSIDE: lay dry branches for sitting/lying."
      ],
      warnings: [
        "⏳ Requires 1-2 hours and a lot of material.",
        "🪢 The top knot must be strong — the base of the whole structure.",
        "🌧️ Lay bark like shingles — water runs off.",
        "🔥 Inside you can make a fire, but with ventilation."
      ]
    },
    // ============================================================
    // 10. SWAMP / TUNDRA SHELTER
    // ============================================================
    {
      id: "swamp_shelter",
      title: "🌿 Swamp / tundra shelter",
      description: "In swamps, build on high ground or make a platform from poles. Use moss — it's water-repellent. Tarp or bark — from rain. Protection from insects — smoke fire.",
      conditions: { location: ["swamp"], inventory: ["tarp", "knife", "rope", "nothing"], weather: ["rain", "cold", "wind", "insects", "night"], urgency: ["hour", "day"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1-2 hours",
      yield_estimate: "protection from water, mud, and insects",
      tags: ["swamp", "moss", "platform", "insects"],
      steps: [
        "1. FIND DRY SPOT: hummock, high ground, tree roots.",
        "2. MAKE PLATFORM: from poles over water/mud.",
        "3. USE MOSS: as insulation and bedding (doesn't absorb water).",
        "4. TOP: tarp, bark, branches from rain.",
        "5. SMOKE FIRE: wet branches at the entrance — repels mosquitoes.",
        "6. CHECK: water won't rise at night."
      ],
      warnings: [
        "🌊 Don't build in lowlands — water will rise at night.",
        "🦟 Midges and mosquitoes — smoke fire is mandatory.",
        "🐍 In swamps — snakes, check the area.",
        "🧊 Moss may be wet — dry it by the fire."
      ]
    },
    // ============================================================
    // 11. INSECT PROTECTION SHELTER
    // ============================================================
    {
      id: "insect_shelter",
      title: "🦟 Shelter from midges and mosquitoes",
      description: "In taiga and tundra, the main threat is biting insects. Make a smoke fire (wet branches, moss, grass) at the entrance. Covering from tulle/net/gauze. A closed shelter with smoke saves from insects.",
      conditions: { location: ["forest", "swamp", "coast"], inventory: ["tarp", "fire", "nothing"], weather: ["insects", "night", "rain"], urgency: ["now", "hour"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30-60 min",
      yield_estimate: "insect protection by 80-90%",
      tags: ["insects", "smoke", "mosquitoes", "taiga"],
      steps: [
        "1. MAKE FIRE: at the entrance to the shelter.",
        "2. ADD: wet branches, moss, grass — thick smoke.",
        "3. COVER: tulle/net/gauze on the entrance (if available).",
        "4. IN CLOSED SHELTER: smoke is the best remedy against mosquitoes.",
        "5. USE: wormwood, tansy, wild rosemary — they repel.",
        "6. SMOKE SHOULD FLOW: into the shelter but not suffocate you."
      ],
      warnings: [
        "💨 Smoke should flow into the shelter but not suffocate you.",
        "🔥 Don't leave fire unattended — fire hazard.",
        "🦟 In calm weather, insects are especially bad.",
        "🌿 Wormwood, tansy, wild rosemary — natural repellents."
      ]
    },
    // ============================================================
    // 12. LOG CABIN (LONG-TERM)
    // ============================================================
    {
      id: "log_cabin",
      title: "🪵 Log cabin (long-term)",
      description: "For long-term survival. Stack logs like a log cabin. Chink gaps with moss. Roof — from bark, turf. Requires 3-5 days but gives warmth for winter.",
      conditions: { location: ["forest", "mountain"], inventory: ["knife", "rope", "nothing"], weather: ["cold", "wind", "snow"], urgency: ["days"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "3-5 days",
      yield_estimate: "warm shelter for winter",
      tags: ["long_term", "winter", "sturdy", "logs"],
      steps: [
        "1. CUT LOGS: same length (2-3 m).",
        "2. STACK: in a square, like a log cabin.",
        "3. CHINK GAPS: with moss, tow, clay.",
        "4. ROOF: pole rafters + bark + turf.",
        "5. INSIDE: stone hearth, clay chimney.",
        "6. FLOOR: pole platform or clay."
      ],
      warnings: [
        "⏳ Requires 3-5 days and a lot of effort.",
        "🪓 Needs an axe or large knife.",
        "🔥 Hearth with chimney — otherwise carbon monoxide.",
        "🌲 Choose dry trees — wet ones don't burn."
      ]
    },
    // ============================================================
    // 13. DUGOUT (SEMI-UNDERGROUND SHELTER)
    // ============================================================
    {
      id: "dugout",
      title: "🏠 Dugout (semi-underground shelter)",
      description: "For harsh conditions. Dig a pit 2×2 m, 1 m deep. Cover with logs, on top — turf/earth. Entrance — from the south side. Inside temperature +5-10°C even in severe frost.",
      conditions: { location: ["forest", "mountain", "taiga"], inventory: ["knife", "nothing"], weather: ["cold", "wind", "snow"], urgency: ["days"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "3-4 days",
      yield_estimate: "warm in winter, cool in summer",
      tags: ["long_term", "winter", "earth", "insulated"],
      steps: [
        "1. DIG A PIT: 2×2 m, 1 m deep (for 2 people).",
        "2. COVER: logs across the pit.",
        "3. TOP: turf, earth, leaves (30-50 cm thick).",
        "4. ENTRANCE: from the south side (warm), hang a tarp.",
        "5. INSIDE: bedding from branches and moss, hearth (with chimney).",
        "6. VENTILATION: air hole."
      ],
      warnings: [
        "⏳ Requires 3-4 days and a lot of effort.",
        "💧 Don't build in lowlands — flooding.",
        "🔥 Chimney is mandatory — carbon monoxide.",
        "🚪 Entrance should be on the leeward side."
      ]
    }
  ]
});