// modules/survival/data/en/water-en.js
// === MODULE: SURVIVAL — WATER ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "survival",
    category: "water",
    version: "1.0.0",
    lang: "en",
    title: "💧 Water",
    description: "How to find, collect, and purify water in any conditions — from forest to desert",
    icon: "💧",
    color: "#16a34a"
  },

  questions: [
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "forest", label: "🌲 Forest / taiga", tags: ["forest", "vegetation", "streams"] },
        { id: "desert", label: "🏜️ Desert / steppe", tags: ["desert", "heat", "no_water"] },
        { id: "mountain", label: "⛰️ Mountains", tags: ["mountain", "snow", "altitude"] },
        { id: "coast", label: "🏖️ Coast / island", tags: ["coast", "saltwater", "humidity"] },
        { id: "urban", label: "🏙️ City / industrial area", tags: ["urban", "pipes", "rain_collectors"] },
        { id: "swamp", label: "🌿 Swamp / tundra", tags: ["swamp", "peat", "insects"] }
      ]
    },
    {
      id: "inventory",
      type: "multi",
      text: "What do you have on hand?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "bottle", label: "🧴 Plastic bottle / container", tags: ["container", "plastic"] },
        { id: "knife", label: "🔪 Knife / multi-tool", tags: ["cutting", "tool"] },
        { id: "fire", label: "🔥 Matches / lighter", tags: ["heat_source", "fire"] },
        { id: "rope", label: "🪢 Rope / paracord", tags: ["cordage", "binding"] },
        { id: "plastic", label: "🧊 Plastic sheet / bag", tags: ["sheet", "condensation"] },
        { id: "cloth", label: "👕 Fabric / clothing", tags: ["filter", "absorbent"] },
        { id: "metal", label: "🥫 Metal container", tags: ["boil", "durable"] },
        { id: "chemical", label: "🧪 Chemicals (iodine, chlorine, potassium permanganate)", tags: ["chemical", "purification"] },
        { id: "nothing", label: "❌ Nothing at all", tags: ["bare_hands", "primitive"] }
      ]
    },
    {
      id: "urgency",
      type: "single",
      text: "How urgently do you need water?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "now", label: "⚠️ Now! Thirst, dehydration", tags: ["critical", "immediate"] },
        { id: "hour", label: "⏱️ 1-2 hours available", tags: ["urgent", "short"] },
        { id: "day", label: "🌅 A full day available", tags: ["planned", "medium"] },
        { id: "days", label: "📅 Several days available", tags: ["long_term", "strategic"] }
      ]
    },
    {
      id: "weather",
      type: "single",
      text: "What's the weather like?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"] },
      options: [
        { id: "sunny", label: "☀️ Sunny / hot", tags: ["solar", "evaporation"] },
        { id: "cloudy", label: "☁️ Cloudy", tags: ["no_sun", "cool"] },
        { id: "rain", label: "🌧️ Raining", tags: ["precipitation", "collect"] },
        { id: "cold", label: "❄️ Cold / snow", tags: ["freeze", "snow_melt"] },
        { id: "fog", label: "🌫️ Fog", tags: ["fog", "condensation", "humidity"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. FIND SPRING / GROUNDWATER
    // ============================================================
    {
      id: "find_spring",
      title: "🔍 Finding a spring / groundwater",
      description: "The fastest way to find clean water. Look for damp ground, green vegetation in dry areas, animal tracks. Springs at the foot of slopes, in rock crevices.",
      conditions: { location: ["forest", "mountain", "desert", "swamp"], inventory: ["nothing", "knife", "bottle", "cloth", "metal", "fire", "rope", "plastic"], urgency: ["now", "hour", "day", "days"], weather: ["sunny", "cloudy", "rain", "cold", "fog"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "15-60 min",
      yield_estimate: "unlimited",
      tags: ["universal", "natural", "search", "groundwater"],
      steps: [
        "1. LOOK FOR DAMP GROUND: in forest — under tree roots, in lowlands, at the foot of hills.",
        "2. GREEN VEGETATION: in desert or steppe — dense grass, bushes indicate water.",
        "3. ANIMAL TRACKS: animal trails lead to water. Birds circle over water sources.",
        "4. SPRINGS: at the foot of rocks, in crevices, on the slopes of ravines.",
        "5. IN DESERT: dig at the roots of dry trees (tamarisk, saxaul) — water at 1-3 m depth.",
        "6. IN FOREST: dry stream beds — dig in the lowest point."
      ],
      warnings: [
        "🔥 Always boil or filter water from unknown sources.",
        "⚠️ Water from swamps or stagnant puddles is dangerous — look for flowing water.",
        "🧂 Salty springs — don't drink, find others (salt water increases thirst)."
      ]
    },
    // ============================================================
    // 2. BOIL STREAM WATER
    // ============================================================
    {
      id: "boil_stream",
      title: "🔥 Boiling stream water",
      description: "A reliable and fast way to disinfect. Find a fast-flowing stream (not stagnant water). Filter through cloth. Boil in a metal container for 1 minute (3 min at altitude >2000 m).",
      conditions: { location: ["forest", "mountain", "swamp"], inventory: ["metal", "fire"], urgency: ["now", "hour"], weather: ["sunny", "cloudy", "cold", "rain", "fog"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "20-30 min",
      yield_estimate: "depends on container size",
      tags: ["metal", "fire", "forest", "mountain", "safe"],
      steps: [
        "1. FIND STREAM: fast-flowing water is cleaner than stagnant. Look on slopes, in ravines.",
        "2. FILTER: through cloth, gauze, t-shirt — remove sand and sediment.",
        "3. POUR: into a metal container (pot, mug, tin can).",
        "4. BOIL: over fire for 1 minute (3 minutes above 2000 m — water boils at lower temperature).",
        "5. COOL: pour into a clean container, let cool.",
        "6. CHECK: cloudy water — filter 2-3 times through cloth."
      ],
      warnings: [
        "☣️ Boiling does NOT remove chemical contaminants (heavy metals, salts).",
        "🏔️ Above 2000 m boil for 3 minutes — boiling point is lower.",
        "💨 Cloudy water — filter 2-3 times before boiling."
      ]
    },
    // ============================================================
    // 3. SEAWATER DISTILLATION (WITH FIRE)
    // ============================================================
    {
      id: "seawater_distill",
      title: "💧 Seawater distillation (with fire)",
      description: "Boil seawater in a metal container. Steam condenses on a cold surface. Collect the drops. Do NOT drink seawater — it accelerates dehydration.",
      conditions: { location: ["coast"], inventory: ["metal", "fire"], urgency: ["now", "hour"], weather: ["sunny", "cloudy", "cold", "fog"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30-45 min",
      yield_estimate: "0.2-0.5 L per cycle",
      tags: ["metal", "fire", "coast", "saltwater", "distill"],
      steps: [
        "1. POUR: seawater into metal container — fill 1/3 (don't overfill).",
        "2. COVER: with lid upside down or plastic sheet so steam condenses and drips into separate container.",
        "3. BOIL: place on fire — steam rises and condenses.",
        "4. COLLECT: condensation drops into a clean separate container.",
        "5. REPEAT: discard the remaining salt water and add fresh.",
        "6. ALTERNATIVE: without fire — use solar still (see solution 4)."
      ],
      warnings: [
        "🚫 DO NOT DRINK SEAWATER — it increases dehydration by 2-3 times.",
        "🧼 Condensation must drip into a CLEAN container.",
        "🌡️ Repeat the cycle for more volume — the process is slow."
      ]
    },
    // ============================================================
    // 4. SOLAR STILL (NO FIRE)
    // ============================================================
    {
      id: "solar_still_coast",
      title: "☀️ Solar still (no fire)",
      description: "For coast without fire: dig a pit near the shore, place a container, cover with plastic. Evaporation from the sun gives fresh water. Slow but safe.",
      conditions: { location: ["coast", "desert"], inventory: ["plastic"], urgency: ["day", "days"], weather: ["sunny"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "4-8 hours",
      yield_estimate: "0.3-0.8 L/day",
      tags: ["solar", "coast", "desert", "no_fire", "saltwater"],
      steps: [
        "1. DIG A PIT: 50×50 cm, 30 cm deep, 10-15 m from water (not in the tidal zone).",
        "2. PLACE CONTAINER: clean cup/bottle in the center of the pit.",
        "3. COVER WITH PLASTIC: press edges with stones/sand.",
        "4. PLACE A STONE: in the center over the container to create a dip.",
        "5. WAIT: 4-8 hours in the sun. Water evaporates, condenses, and drips into the container.",
        "6. COLLECT: carefully remove the plastic and collect the water."
      ],
      warnings: [
        "🌊 Don't dig too close to the water — the tide will flood it.",
        "☀️ Works only in bright sun.",
        "⏳ Takes time — plan for a full day."
      ]
    },
    // ============================================================
    // 5. SNOW / ICE MELT
    // ============================================================
    {
      id: "snow_melt",
      title: "❄️ Snow / ice melting",
      description: "The fastest way in cold weather. Don't eat snow — it wastes energy on heating. Melt in a container on your body or over fire. Snow gives ~10% water by volume.",
      conditions: { location: ["mountain", "forest"], inventory: ["metal", "fire", "nothing"], urgency: ["now", "hour"], weather: ["cold"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "20-40 min",
      yield_estimate: "10% of snow volume",
      tags: ["metal", "fire", "mountain", "cold", "snow"],
      steps: [
        "1. COLLECT SNOW: clean, white, not yellow (not touched by animals).",
        "2. MELT ON BODY: place snow in a sealed bag/bottle and put under clothing.",
        "3. MELT OVER FIRE: in a metal container over fire. Add a little water — speeds melting.",
        "4. DON'T EAT SNOW: it wastes body energy and cools the body.",
        "5. FILTER: if snow is dirty, filter through cloth."
      ],
      warnings: [
        "🚫 DO NOT EAT SNOW — wastes energy, cools the body. Only melt!",
        "🧹 Dirty snow — filter or boil.",
        "⚠️ Yellow snow — animal traces, dangerous (bacteria, parasites)."
      ]
    },
    // ============================================================
    // 6. CACTUS / SUCCULENT WATER
    // ============================================================
    {
      id: "cactus",
      title: "🌵 Water from cactus / succulents",
      description: "In the desert find a barrel cactus or aloe. Cut off the top. The pulp contains water. Not all cacti are safe — avoid milky sap.",
      conditions: { location: ["desert"], inventory: ["knife", "nothing"], urgency: ["now", "hour"], weather: ["sunny", "cloudy"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "10-15 min",
      yield_estimate: "0.1-0.5 L",
      tags: ["knife", "desert", "vegetation", "immediate"],
      steps: [
        "1. FIND CACTUS: barrel cactus (Ferocactus) — safest, water in the center.",
        "2. CUT THE TOP: with a knife or sharp stone, cut off the top part.",
        "3. SCOOP THE PULP: the inner pulp is up to 80% water.",
        "4. SQUEEZE: through cloth or just eat the pulp, chew like watermelon.",
        "5. ALOE: cut the leaf lengthwise — the pulp contains water gel."
      ],
      warnings: [
        "🚫 Avoid cacti with MILKY SAP — they are poisonous!",
        "💩 Don't eat too much pulp — laxative effect.",
        "☠️ Agave requires boiling — raw causes vomiting."
      ]
    },
    // ============================================================
    // 7. EMERGENCY CLOTH FILTRATION
    // ============================================================
    {
      id: "emergency_cloth",
      title: "🧻 Emergency filtration through clothing",
      description: "Fold several layers of fabric. Pass dirty water through. This does NOT make water safe, but removes large particles. Still boil or find another source.",
      conditions: { location: ["forest", "desert", "urban", "coast", "mountain", "swamp"], inventory: ["cloth"], urgency: ["now"], weather: ["sunny", "cloudy", "rain", "cold", "fog"] },
      scoring: { priority: "fast", reliability: "low" },
      time_estimate: "5 min",
      yield_estimate: "depends on source",
      tags: ["cloth", "emergency", "universal", "temporary"],
      steps: [
        "1. FOLD CLOTH: 4-8 layers of t-shirt, shirt.",
        "2. PASS WATER: through the cloth, collecting in a container.",
        "3. REPEAT: if water is cloudy — pass 2-3 times.",
        "4. BOIL: MUST boil water after filtration."
      ],
      warnings: [
        "🦠 Cloth does NOT kill bacteria and parasites!",
        "⏳ This is temporary — find a way to boil.",
        "🔄 Cloudy water — filter several times."
      ]
    },
    // ============================================================
    // 8. BIRCH SAP (SPRING ONLY!)
    // ============================================================
    {
      id: "birch_sap",
      title: "🌳 Birch sap (spring only!)",
      description: "Make a V-shaped cut on a birch trunk (diameter >15 cm). Insert a tube — sap will flow. Collect in any container. ONLY in spring — up to 2 liters per day.",
      conditions: { location: ["forest"], inventory: ["knife", "nothing"], urgency: ["hour", "day", "days"], weather: ["sunny", "cloudy", "cold"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "15-30 min",
      yield_estimate: "0.5-2 L/day",
      tags: ["forest", "knife", "spring", "natural"],
      steps: [
        "1. TIME: only spring (March-May), when sap flow begins.",
        "2. FIND BIRCH: trunk diameter >15 cm, on the sunny side.",
        "3. MAKE CUT: V-shaped or diagonal cut with a knife, 2-3 cm deep.",
        "4. INSERT TUBE: from willow, birch bark, or just a bent branch.",
        "5. PLACE CONTAINER: collect sap — 0.5-2 liters per day.",
        "6. CLOSE THE WOUND: after collection, seal with clay or resin to protect the tree."
      ],
      warnings: [
        "🛑 No deeper than 2-3 cm — don't kill the tree.",
        "⏰ Sap ferments within 24 hours — drink fresh.",
        "❄️ No sap in winter and summer — only spring (March-May)."
      ]
    },
    // ============================================================
    // 9. SAND FILTER + BOILING
    // ============================================================
    {
      id: "sand_filter",
      title: "🪣 Sand filter + boiling",
      description: "Make a column from a plastic bottle: layers of activated charcoal, sand, gravel. Pass water through the filter. Then MUST boil or use chemicals.",
      conditions: { location: ["forest", "urban", "coast", "swamp"], inventory: ["bottle", "cloth", "fire"], urgency: ["hour", "day"], weather: ["sunny", "cloudy", "rain", "cold", "fog"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30-60 min",
      yield_estimate: "depends on speed",
      tags: ["bottle", "cloth", "filter", "urban", "forest"],
      steps: [
        "1. MAKE COLUMN: cut bottom off plastic bottle, turn upside down.",
        "2. ACTIVATE CHARCOAL: heat wood charcoal on fire until red hot.",
        "3. LAYER (bottom to top): cloth → gravel (5 cm) → sand (10 cm) → activated charcoal (5 cm) → sand (5 cm) → cloth.",
        "4. PASS WATER: slowly, let water filter through all layers.",
        "5. BOIL: MUST boil water after filtration."
      ],
      warnings: [
        "🦠 Filter removes particles but NOT all bacteria and viruses.",
        "🔥 Charcoal MUST be activated (heated) before use.",
        "🔄 Change sand every 20-30 liters."
      ]
    },
    // ============================================================
    // 10. CHEMICAL PURIFICATION
    // ============================================================
    {
      id: "chemical_purify",
      title: "🧪 Chemical water purification",
      description: "Use: iodine (5 drops per 1 L, wait 30 min), chlorine (2 drops per 1 L, wait 30 min), potassium permanganate (to light pink, wait 1 hour). Kills 99% of bacteria and viruses.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "swamp"], inventory: ["chemical", "bottle", "cloth"], urgency: ["now", "hour"], weather: ["sunny", "cloudy", "rain", "cold", "fog"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5-10 min + waiting",
      yield_estimate: "depends on volume",
      tags: ["chemical", "purification", "universal", "fast"],
      steps: [
        "1. FILTER: water through cloth (remove sediment).",
        "2. CHOOSE REAGENT:",
        "   • IODINE: 5 drops of 5% solution per 1 liter, wait 30 minutes.",
        "   • CHLORINE: 2 drops per 1 liter, wait 30 minutes.",
        "   • POTASSIUM PERMANGANATE: to light pink color, wait 1 hour.",
        "3. REMOVE ODOR: pass through activated charcoal or aerate.",
        "4. CHECK: water should be clear and odorless."
      ],
      warnings: [
        "⚠️ Don't exceed dosage — poisoning.",
        "🤰 Pregnant women and children — iodine is contraindicated.",
        "🧊 Chlorine + organics = dangerous compounds, use only for clear water.",
        "🔄 Potassium permanganate leaves a taste — add activated charcoal."
      ]
    },
    // ============================================================
    // 11. TRANSPIRATION BAG
    // ============================================================
    {
      id: "transpiration_bag",
      title: "🌿 Transpiration bag",
      description: "Put a clear bag over a leafy branch. Tie tightly. In 4-6 hours collect condensation. Don't use poisonous plants.",
      conditions: { location: ["forest", "mountain", "swamp"], inventory: ["plastic"], urgency: ["hour", "day", "days"], weather: ["sunny", "cloudy", "fog"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "4-6 hours",
      yield_estimate: "0.1-0.3 L per branch",
      tags: ["plastic", "forest", "vegetation", "passive"],
      steps: [
        "1. CHOOSE BRANCH: with dense leaves, on the sunny side.",
        "2. COVER WITH BAG: completely covering all leaves.",
        "3. TIE TIGHTLY: at the base of the branch, no air escape.",
        "4. WAIT: 4-6 hours in warm weather.",
        "5. COLLECT: water from the bottom corner of the bag.",
        "6. USE: multiple bags on different branches = more water."
      ],
      warnings: [
        "☠️ Don't use poisonous plants: oak, boxwood, ivy, oleander.",
        "🧊 Bag must be CLEAR — otherwise won't work.",
        "🌡️ Works best in hot weather and sun."
      ]
    },
    // ============================================================
    // 12. DIG WELL IN SAND / GRAVEL
    // ============================================================
    {
      id: "dig_well",
      title: "⛏️ Well in sand / gravel",
      description: "Dig a pit on the coast or in a dry riverbed until water appears. Wait for water to settle. Filter through cloth and boil.",
      conditions: { location: ["coast", "desert", "forest"], inventory: ["knife", "nothing"], urgency: ["hour", "day"], weather: ["sunny", "cloudy", "rain", "fog"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1-2 hours",
      yield_estimate: "0.5-2 L",
      tags: ["knife", "coast", "desert", "groundwater", "dig"],
      steps: [
        "1. FIND SPOT: dry riverbed, beach, lowland, near tree roots.",
        "2. DIG A PIT: 30-50 cm deep, 30 cm wide.",
        "3. WAIT: 10-30 minutes — water will fill the pit.",
        "4. LET SETTLE: 15 minutes for sand to settle.",
        "5. FILTER: through cloth and boil."
      ],
      warnings: [
        "🧂 Water may be salty near the coast — dig further from the sea.",
        "🔥 Always boil or filter.",
        "🌵 In the desert, dig in lowlands, near tree roots."
      ]
    },
    // ============================================================
    // 13. FOG COLLECTION
    // ============================================================
    {
      id: "fog_collect",
      title: "🌫️ Fog water collection",
      description: "On the coast or in mountains, fog provides water. Stretch plastic/cloth vertically. Water condenses on the surface. Collect droplets. Up to 1-2 liters on a foggy day.",
      conditions: { location: ["coast", "mountain"], inventory: ["plastic", "cloth", "bottle"], urgency: ["hour", "day", "days"], weather: ["fog"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1-3 hours",
      yield_estimate: "0.5-2 L/day",
      tags: ["fog", "coast", "mountain", "condensation", "passive"],
      steps: [
        "1. STRETCH PLASTIC: vertically between trees/stakes, area 1-2 m².",
        "2. WATER CONDENSES: on the plastic surface from the fog.",
        "3. COLLECT DROPLETS: place a container at the bottom to catch water.",
        "4. LARGER AREA: more water.",
        "5. COLLECT IN MORNING: fog is thicker early morning."
      ],
      warnings: [
        "🌫️ Works only in fog and high humidity.",
        "🧊 Cloth must be clean — otherwise water has impurities.",
        "🌡️ More water in cold fog."
      ]
    },
    // ============================================================
    // 14. SOLAR STILL
    // ============================================================
    {
      id: "solar_still",
      title: "☀️ Solar still (all locations)",
      description: "Dig a pit 50×50 cm. Place a container in the center. Cover with plastic, weighing down the edges. Place a stone over the container — condensation will drip. Up to 0.5 L per day in sunny weather.",
      conditions: { location: ["forest", "desert", "coast"], inventory: ["plastic"], urgency: ["day", "days"], weather: ["sunny"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "4-8 hours",
      yield_estimate: "0.3-0.8 L/day",
      tags: ["plastic", "solar", "desert", "coast", "forest"],
      steps: [
        "1. DIG A PIT: 50×50 cm, 30-40 cm deep.",
        "2. PLACE CONTAINER: clean cup or bottle in the center of the pit.",
        "3. COVER WITH PLASTIC: press edges with stones/earth.",
        "4. PLACE A STONE: in the center over the container — plastic will dip.",
        "5. WAIT: 4-8 hours. Water evaporates from soil, condenses on plastic, and drips.",
        "6. TO INCREASE: add green leaves or urine to the pit — more evaporation."
      ],
      warnings: [
        "☀️ Works only in sun.",
        "🌿 Add green leaves/urine to increase evaporation.",
        "🚫 Don't touch the plastic — you'll break the process."
      ]
    },
    // ============================================================
    // 15. DEW COLLECTION
    // ============================================================
    {
      id: "dew_collect",
      title: "💧 Dew collection",
      description: "Early morning, wipe cloth across grass. Wring out into a container. Or stretch plastic over a pit. Up to 1 liter in 2-3 hours over 100 m².",
      conditions: { location: ["forest", "desert", "coast"], inventory: ["cloth", "plastic"], urgency: ["day", "days"], weather: ["sunny", "cloudy", "fog"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "2-3 hours (morning)",
      yield_estimate: "0.3-1 L per morning",
      tags: ["cloth", "plastic", "passive", "morning", "forest"],
      steps: [
        "1. EARLY MORNING: before sunrise, when dew is heaviest.",
        "2. WIPE CLOTH: across grass, absorbing dew.",
        "3. WRING: into a container.",
        "4. OR STRETCH PLASTIC: over a pit — dew drips to the center.",
        "5. REPEAT: every morning."
      ],
      warnings: [
        "🌅 Works only early morning.",
        "🏜️ In the desert, dew is scarce — expect minimum.",
        "☠️ Don't collect from poisonous plants."
      ]
    },
    // ============================================================
    // 16. RAINWATER COLLECTION IN CITY
    // ============================================================
    {
      id: "urban_rain",
      title: "🌧️ Rainwater collection in the city",
      description: "Use a clean surface (plastic, tarp). First 10 minutes — discard (washes dust). Collect in bottles. Avoid water from roofs with bitumen.",
      conditions: { location: ["urban"], inventory: ["bottle", "plastic"], urgency: ["day", "days"], weather: ["rain"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "Wait for rain",
      yield_estimate: "depends on rain",
      tags: ["bottle", "plastic", "urban", "rain", "passive"],
      steps: [
        "1. STRETCH PLASTIC: at an angle, so water flows into a container.",
        "2. FIRST 10 MINUTES: discard — washes dust off roofs and surfaces.",
        "3. COLLECT: into clean bottles or containers.",
        "4. BOIL: or use chlorine tablets."
      ],
      warnings: [
        "☠️ Water from bitumen roofs — toxic!",
        "🏭 Industrial areas — filter mandatory.",
        "☔ First rain after drought — dirty, discard."
      ]
    },
    // ============================================================
    // 17. RAINWATER COLLECTION IN NATURE
    // ============================================================
    {
      id: "rain_collect_nature",
      title: "🌧️ Rainwater collection in nature",
      description: "In forest and mountains — use burdock leaves, bark rolled into a cone, or simply place containers in the open. Rainwater is the cleanest.",
      conditions: { location: ["forest", "mountain", "swamp"], inventory: ["bottle", "plastic", "knife", "nothing"], urgency: ["day", "days"], weather: ["rain"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "During rain",
      yield_estimate: "depends on rain",
      tags: ["forest", "mountain", "rain", "passive", "natural"],
      steps: [
        "1. SPREAD LEAVES: large burdock leaves as funnels, directing water into a container.",
        "2. PLACE CONTAINERS: all bottles, cups in the open.",
        "3. STRETCH PLASTIC: to collect water from a large area.",
        "4. DISCARD FIRST 10 MINUTES: rain washes dust.",
        "5. COLLECT AND BOIL: for safety."
      ],
      warnings: [
        "☁️ Don't collect during thunderstorms — lightning.",
        "🌳 Don't place under large trees — water may be toxic.",
        "🧊 Don't use leaves from poisonous trees (oak, oleander)."
      ]
    }
  ]
});