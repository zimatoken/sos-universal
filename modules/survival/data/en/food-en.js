// modules/survival/data/en/food-en.js
// === MODULE: SURVIVAL — FOOD ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "survival",
    category: "food",
    version: "1.0.0",
    lang: "en",
    title: "Food",
    description: "How to find food in the wild — insects, fish, hunting, plants",
    icon: "🍖",
    color: "#16a34a"
  },

  questions: [
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "forest", label: "🌲 Forest / taiga", tags: ["forest", "plants", "animals"] },
        { id: "desert", label: "🏜️ Desert / steppe", tags: ["desert", "reptiles", "insects"] },
        { id: "mountain", label: "⛰️ Mountains", tags: ["mountain", "goats", "plants"] },
        { id: "coast", label: "🏖️ Coast / island", tags: ["coast", "fish", "shells", "seaweed"] },
        { id: "urban", label: "🏙️ City / industrial area", tags: ["urban", "trash", "pigeons", "plants"] },
        { id: "taiga", label: "🌲 Taiga / swamp", tags: ["taiga", "berries", "mushrooms", "wild"] }
      ]
    },
    {
      id: "inventory",
      type: "multi",
      text: "What do you have on hand?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "taiga"] },
      options: [
        { id: "knife", label: "🔪 Knife / multi-tool", tags: ["tool", "hunting", "processing"] },
        { id: "rope", label: "🪢 Rope / paracord", tags: ["traps", "snares", "fishing"] },
        { id: "fire", label: "🔥 Matches / lighter", tags: ["cooking", "warmth"] },
        { id: "container", label: "🥫 Container / bottle", tags: ["cooking", "water", "storage"] },
        { id: "hook", label: "🎣 Hook / fishing line", tags: ["fishing", "precision"] },
        { id: "nothing", label: "❌ Nothing at all", tags: ["primitive", "gathering"] }
      ]
    },
    {
      id: "season",
      type: "single",
      text: "What season is it?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "taiga"] },
      options: [
        { id: "spring", label: "🌸 Spring", tags: ["plants", "eggs", "young"] },
        { id: "summer", label: "☀️ Summer", tags: ["berries", "fish", "insects"] },
        { id: "autumn", label: "🍂 Autumn", tags: ["nuts", "mushrooms", "fat"] },
        { id: "winter", label: "❄️ Winter", tags: ["tracks", "hibernation", "roots", "ice"] }
      ]
    },
    {
      id: "urgency",
      type: "single",
      text: "How urgently do you need food?",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "taiga"] },
      options: [
        { id: "now", label: "⚠️ Now! Severe hunger", tags: ["critical", "immediate"] },
        { id: "hour", label: "⏱️ 1-3 hours available", tags: ["urgent", "short"] },
        { id: "day", label: "🌅 A full day available", tags: ["planned", "medium"] },
        { id: "days", label: "📅 Several days available", tags: ["long_term", "strategic"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. EDIBLE INSECTS AND LARVAE
    // ============================================================
    {
      id: "insects",
      title: "🐛 Edible insects and larvae",
      description: "Insects are the most accessible and fastest source of protein. Edible: caterpillars, crickets, grasshoppers, ants, termites, beetle larvae. Always roast until crispy.",
      conditions: { location: ["forest", "desert", "mountain", "coast", "urban", "taiga"], inventory: ["nothing", "knife", "fire", "container"], season: ["spring", "summer", "autumn", "winter"], urgency: ["now", "hour", "day"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10-30 min",
      yield_estimate: "100-200 g protein per hour",
      tags: ["insects", "protein", "universal", "quick"],
      steps: [
        "1. WHERE TO FIND: under stones, bark, in rotten wood, in anthills.",
        "2. WHAT YOU CAN EAT: caterpillars (green, not hairy), crickets, grasshoppers, ants, termites, beetle larvae.",
        "3. WHAT NOT TO EAT: bright colored, hairy, bad smelling, red/orange (poisonous).",
        "4. COLLECT: in a container or in a burdock leaf.",
        "5. COOK: roast over fire or hot stone until crispy — kills parasites.",
        "6. START SMALL: test for allergies."
      ],
      warnings: [
        "⚠️ DO NOT eat raw — parasites and toxins.",
        "☠️ Spiders, scorpions, centipedes — poisonous.",
        "🤧 Allergies possible — start with a small amount.",
        "❌ Ants with red heads — poisonous."
      ]
    },
    // ============================================================
    // 2. BERRIES AND EDIBLE PLANTS
    // ============================================================
    {
      id: "berries_plants",
      title: "🍓 Berries and edible plants",
      description: "Fast source of carbohydrates and vitamins. In forest: blueberries, lingonberries, raspberries, cranberries. Edible plants: nettle, dandelion, plantain, goosefoot.",
      conditions: { location: ["forest", "mountain", "urban", "taiga"], inventory: ["nothing", "knife", "container"], season: ["spring", "summer", "autumn"], urgency: ["now", "hour"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "15-30 min",
      yield_estimate: "200-500 g per hour",
      tags: ["plants", "berries", "forest", "vitamins"],
      steps: [
        "1. BERRIES: blueberries, lingonberries, raspberries, cranberries — only ones you know.",
        "2. LEAVES: nettle (cook), dandelion, plantain, goosefoot, ground elder.",
        "3. ROOTS: dandelion, burdock, cattail — boil or fry.",
        "4. RULE: if in doubt — DON'T eat!",
        "5. AVOID: bright unknown berries, white berries, plants with milky sap."
      ],
      warnings: [
        "⚪ White berries — 90% poisonous.",
        "🥛 Milky sap — toxic in most plants.",
        "🍄 Some mushrooms are deadly poisonous — don't pick without 100% knowledge.",
        "🌿 Wolfberry — red, but poisonous!"
      ]
    },
    // ============================================================
    // 3. FOOD ON THE COAST
    // ============================================================
    {
      id: "coast_food",
      title: "🦀 Coast food gathering",
      description: "The sea is full of food: shellfish, crabs, sea urchins, seaweed, small fish. At low tide you can collect enough for a whole day.",
      conditions: { location: ["coast"], inventory: ["nothing", "knife", "container", "fire"], season: ["spring", "summer", "autumn", "winter"], urgency: ["now", "hour", "day"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "20-40 min",
      yield_estimate: "500 g - 2 kg per hour",
      tags: ["coast", "seafood", "protein", "quick"],
      steps: [
        "1. SHELLFISH: collect on the shore — open ones are alive, closed are dead.",
        "2. CRABS: under rocks in shallow water, catch from behind with your hands.",
        "3. SEA URCHINS: careful — spiny. Cut the top, eat the roe.",
        "4. SEAWEED: boil 10-15 min, some are toxic raw.",
        "5. FISH: in shallow water — catch by hand or with a spear.",
        "6. COOK EVERYTHING: at least 5 minutes before eating."
      ],
      warnings: [
        "🔴 Red tide — shellfish are toxic, check.",
        "☠️ Fugu, lionfish, some sea urchins — deadly poisonous.",
        "🔥 All seafood — boil at least 5 minutes.",
        "🦪 Oysters — only open live ones, discard closed ones."
      ]
    },
    // ============================================================
    // 4. FINDING FOOD IN THE CITY
    // ============================================================
    {
      id: "urban_food",
      title: "🏙️ Finding food in the city",
      description: "In the city, food is everywhere: gardens, trash bins near stores, abandoned warehouses. Even in winter, you can find canned food, bread, vegetables.",
      conditions: { location: ["urban"], inventory: ["nothing", "knife", "container"], season: ["spring", "summer", "autumn", "winter"], urgency: ["now", "hour"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "15-30 min",
      yield_estimate: "varies, up to 2 kg",
      tags: ["urban", "scavenging", "quick", "risky"],
      steps: [
        "1. GARDENS: carrots, potatoes, apples, berries — even under snow in winter.",
        "2. TRASH BINS: near stores — canned food, bread, vegetables, fruit.",
        "3. CHECK CANS: no bulging, rust, or bad smell.",
        "4. WILD PLANTS: dandelions, nettle, plantain, goosefoot.",
        "5. BIRDS: pigeons, sparrows — traps from rope and box."
      ],
      warnings: [
        "💀 Bulging cans — botulism, deadly.",
        "🤢 Don't eat rotten food — severe poisoning.",
        "❓ Careful with unlabeled cans — unknown contents.",
        "🐀 In trash — rats, diseases, wash and check food."
      ]
    },
    // ============================================================
    // 5. HAND FISHING / SPEAR
    // ============================================================
    {
      id: "fishing_hand",
      title: "🎣 Hand fishing / spear",
      description: "In shallow water, fish are easily caught by hand or spear. Look in thickets, under snags, in backwaters.",
      conditions: { location: ["forest", "coast", "mountain", "taiga"], inventory: ["knife", "nothing"], season: ["spring", "summer", "autumn"], urgency: ["now", "hour", "day"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "20-60 min",
      yield_estimate: "1-3 fish per hour",
      tags: ["water", "fish", "quick", "protein"],
      steps: [
        "1. FIND: shallow backwater, thickets, under snags.",
        "2. MOVE SLOWLY: fish get scared by sudden movements.",
        "3. CATCH FROM BELOW: fish can't see you.",
        "4. MAKE A SPEAR: sharpen a long branch, attach 3-4 prongs.",
        "5. IN WARM WATER: fish are slower — fish during the day.",
        "6. IN COLD WATER: more active — fish morning/evening."
      ],
      warnings: [
        "☣️ Don't fish in polluted water — toxin accumulation.",
        "☠️ Some fish are poisonous: fugu, rays, lionfish, snakehead.",
        "🔥 Always cook fish thoroughly — parasites.",
        "🪝 Large fish can cut your hands or escape."
      ]
    },
    // ============================================================
    // 6. FISH TRAP
    // ============================================================
    {
      id: "fishing_trap",
      title: "🪤 Fish trap",
      description: "An effective passive fishing method. Make a funnel from branches or stones in shallow water. Or use a plastic bottle. Overnight — 2-5 fish guaranteed.",
      conditions: { location: ["forest", "coast", "mountain", "taiga"], inventory: ["container", "knife", "rope", "nothing"], season: ["spring", "summer", "autumn"], urgency: ["hour", "day", "days"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30-60 min setup",
      yield_estimate: "2-5 fish overnight",
      tags: ["water", "fish", "passive", "trap"],
      steps: [
        "1. FIND SHALLOW WATER: with current.",
        "2. MAKE A FUNNEL: from stones or branches — wide entrance, narrow exit.",
        "3. FROM A BOTTLE: cut off the neck, insert back as a cone.",
        "4. ADD BAIT: worms, insects, fish pieces, bread.",
        "5. LEAVE OVERNIGHT: check morning and evening.",
        "6. SET SEVERAL: better chances."
      ],
      warnings: [
        "⏰ Check trap every 6-8 hours — fish die.",
        "💨 Don't set in fast current — fish won't stay.",
        "🔥 Always cook — parasites.",
        "👃 Dead fish smells like ammonia — don't eat."
      ]
    },
    // ============================================================
    // 7. SNARE TRAP FOR RABBIT / SQUIRREL
    // ============================================================
    {
      id: "snare_trap",
      title: "🪤 Snare trap for rabbit / squirrel",
      description: "The most effective passive hunting method. A rope snare on an animal trail. Check in the morning — often successful.",
      conditions: { location: ["forest", "mountain", "taiga"], inventory: ["rope", "knife", "nothing"], season: ["spring", "summer", "autumn", "winter"], urgency: ["hour", "day", "days"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30-60 min setup + waiting",
      yield_estimate: "1 animal in 1-3 days",
      tags: ["forest", "hunting", "passive", "meat"],
      steps: [
        "1. FIND A TRAIL: tracks, droppings, rubbed branches, bruises on trees.",
        "2. MAKE A SNARE: rope/paracord/cord (sliding knot).",
        "3. SECURE: on a tree or stake at the animal's head height.",
        "4. FOR RABBIT: height 15-20 cm, diameter 20-25 cm.",
        "5. FOR SQUIRREL: height 5-8 cm, diameter 10-15 cm.",
        "6. CHECK: morning and evening, set several."
      ],
      warnings: [
        "🐻 Don't set on bear, moose, boar trails — life-threatening.",
        "📜 Check local laws — prohibited in many places.",
        "🦨 Don't eat sick animals — rabies, plague, trichinosis.",
        "🩸 Large animal can escape with the snare — don't chase."
      ]
    },
    // ============================================================
    // 8. BIRD TRAP (SNARES/BOX)
    // ============================================================
    {
      id: "bird_trap",
      title: "🐦 Bird trap (snares/box)",
      description: "Birds are an excellent source of meat. Pigeons, partridges, sparrows — the most accessible. Works anywhere.",
      conditions: { location: ["forest", "mountain", "urban", "coast", "taiga"], inventory: ["rope", "knife", "nothing"], season: ["spring", "summer", "autumn", "winter"], urgency: ["hour", "day", "days"] },
      scoring: { priority: "medium", reliability: "low" },
      time_estimate: "20-40 min",
      yield_estimate: "1-3 birds per day",
      tags: ["birds", "trap", "protein", "urban", "forest"],
      steps: [
        "1. BOX ON STICK: bait inside, stick holds the box.",
        "2. SNARES: rope with a loop on a branch where birds perch.",
        "3. BAIT: bread, berries, seeds, grain.",
        "4. CAMOUFLAGE: with branches and grass.",
        "5. CHECK: every 2-3 hours — birds spoil quickly.",
        "6. SET SEVERAL: better chances."
      ],
      warnings: [
        "🦅 Birds of prey — don't catch, dangerous and protected.",
        "🧊 In winter, birds are hungry — easier to catch, but meat is lean.",
        "🔥 Always cook thoroughly — salmonella.",
        "📏 Snare should not be too large — bird will escape."
      ]
    },
    // ============================================================
    // 9. WINTER SURVIVAL — ROOTS AND HUNTING
    // ============================================================
    {
      id: "winter_survival",
      title: "❄️ Winter survival — roots and hunting",
      description: "In winter, fats and energy are key. Look for dried berries, roots, hunt by tracks.",
      conditions: { location: ["forest", "mountain", "taiga"], inventory: ["knife", "fire", "nothing"], season: ["winter"], urgency: ["now", "hour", "day", "days"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "1-3 hours",
      yield_estimate: "depends on skill, up to 1 kg per day",
      tags: ["winter", "survival", "roots", "tracking"],
      steps: [
        "1. TRACKS IN SNOW: hares, squirrels, partridges, foxes — follow them (but DON'T eat fox!).",
        "2. ROOTS: cattail, reed, burdock — boil 20-30 min in 2 waters.",
        "3. DRIED BERRIES: rowan, rosehip — on bushes.",
        "4. NUTS: pine, forest — under snow near squirrel nests.",
        "5. FISHING: cut ice (not closer than 2 m from shore).",
        "6. ENERGY: eat fats and carbohydrates — calories burn faster."
      ],
      warnings: [
        "🍒 Don't eat frozen red berries from unknown bushes — may be poisonous.",
        "🧊 Ice on the river — check with a stick, don't go on thin ice.",
        "🔥 In winter, you burn calories faster — eat fats and carbohydrates.",
        "❌ Fox, wolf, bear — DON'T EAT (trichinosis, diseases)."
      ]
    },
    // ============================================================
    // 10. EDIBLE MUSHROOMS (ONLY TESTED!)
    // ============================================================
    {
      id: "mushrooms_safe",
      title: "🍄 Edible mushrooms (only tested!)",
      description: "Mushrooms are a good source of carbohydrates and protein. Only 100% tested: porcini, aspen, birch, chanterelles.",
      conditions: { location: ["forest", "taiga"], inventory: ["knife", "container", "fire"], season: ["spring", "summer", "autumn"], urgency: ["hour", "day", "days"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "1-3 hours",
      yield_estimate: "1-5 kg per day",
      tags: ["mushrooms", "forest", "risky", "food"],
      steps: [
        "1. ONLY TESTED: porcini, aspen, birch, chanterelles.",
        "2. DON'T PICK: death cap, fly agaric, false honey fungus.",
        "3. CHECK: smell, color, growing place.",
        "4. BOIL: minimum 30 min, discard water (it's poisonous).",
        "5. DRY: for storage.",
        "6. RULE: if in doubt — DON'T pick!"
      ],
      warnings: [
        "💀 Death cap — deadly poisonous, 99% fatality.",
        "🍄 False honey fungus — identify by smell (garlic), ring under the cap.",
        "🌡️ Some mushrooms need 2-3 boils (milk caps, volnushki).",
        "☠️ Red fly agaric — poisonous, panther — deadly."
      ]
    },
    // ============================================================
    // 11. HUNTING WITH BOW / SLINGSHOT
    // ============================================================
    {
      id: "hunting_bow",
      title: "🏹 Hunting with bow / slingshot",
      description: "If you have time and skill — make a bow from a flexible branch and rope. Requires practice but yields results.",
      conditions: { location: ["forest", "mountain", "taiga"], inventory: ["knife", "rope", "nothing"], season: ["spring", "summer", "autumn", "winter"], urgency: ["day", "days"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "2-6 hours (making + hunting)",
      yield_estimate: "depends on skill",
      tags: ["hunting", "primitive", "bow", "skill"],
      steps: [
        "1. MAKE A BOW: flexible branch of juniper, maple, ash (length 1.5 m).",
        "2. BOWSTRING: rope, paracord, sinew, nylon.",
        "3. ARROWS: straight sticks 70-80 cm, tip from stone/bone/metal.",
        "4. PRACTICE: on targets for 1-2 days.",
        "5. HUNT: from 20-30 meters, aim for chest/neck.",
        "6. BE PATIENT: without practice, you won't hit."
      ],
      warnings: [
        "📈 Requires long practice — without training you won't hit.",
        "🦌 On large game (boar, moose) — useless, only wound.",
        "⚖️ Check the sharpness of the tip — blunt won't penetrate.",
        "🩸 Blood on snow — not always a kill, don't waste time."
      ]
    },
    // ============================================================
    // 12. ICE FISHING IN WINTER
    // ============================================================
    {
      id: "fishing_ice",
      title: "🎣 Ice fishing in winter",
      description: "In winter, ice fishing is the main source of protein. Cut the ice, use a hook or spear.",
      conditions: { location: ["forest", "mountain", "taiga", "coast"], inventory: ["knife", "hook", "rope", "fire"], season: ["winter"], urgency: ["hour", "day", "days"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "1-3 hours",
      yield_estimate: "2-5 fish per day",
      tags: ["winter", "ice", "fish", "protein"],
      steps: [
        "1. CHECK ICE: thickness 10+ cm, not closer than 2 m from shore.",
        "2. CUT ICE: diameter 20-30 cm.",
        "3. MAKE HOOK: from a pin/wire or spear.",
        "4. BAIT: worms (in the ground in winter), insects, meat pieces.",
        "5. WAIT: fish are slow, 20-40 min.",
        "6. MAKE FIRE: on the ice — fish warm up and bite more actively."
      ],
      warnings: [
        "🧊 Check ice with a stick — don't go on thin ice (<7 cm).",
        "🌡️ In cold weather, fish hibernate — look at depth 2-4 m.",
        "🔥 Don't make fire on thin ice — it will crack.",
        "📏 Don't make the hole wider than 30 cm — you can fall through."
      ]
    }
  ]
});