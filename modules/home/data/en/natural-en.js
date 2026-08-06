<<<<<<< HEAD
// === MODULE: HOME — NATURAL DISASTERS (ENGLISH) ===
const naturalDataEn = {
  category: "natural",
  title: "🌪️ Natural Disasters",
  description: "Earthquake, hurricane, flood, hail, snowstorm — protecting home and family",

  questions: [
    {
      id: "natural_type",
      text: "What is happening? (select the main threat)",
      type: "single",
      options: [
        { id: "earthquake", label: "🌍 Earthquake / tremors", tags: ["earthquake", "seismic"] },
        { id: "hurricane", label: "💨 Hurricane / strong wind / storm", tags: ["hurricane", "wind"] },
        { id: "flood", label: "🌊 Flood / inundation / high water", tags: ["flood", "water"] },
        { id: "hail", label: "🧊 Hail / downpour / thunderstorm", tags: ["hail", "storm"] },
        { id: "snow", label: "❄️ Heavy snowfall / blizzard", tags: ["snow", "blizzard"] },
        { id: "heat", label: "☀️ Extreme heat / drought / wildfire", tags: ["heat", "drought"] },
        { id: "landslide", label: "🏔️ Landslide / mudflow / rockfall", tags: ["landslide", "mudflow"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is the situation?",
      type: "single",
      options: [
        { id: "warning", label: "📢 Warning / expected, time to prepare", tags: ["warning", "prepare"] },
        { id: "ongoing", label: "⚠️ Happening right now", tags: ["ongoing", "emergency"] },
        { id: "aftermath", label: "🔄 Over, consequences remain", tags: ["aftermath", "recovery"] },
        { id: "evacuation", label: "🚨 Evacuation ordered", tags: ["evacuation", "critical"] }
      ]
    },
    {
      id: "location_type",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "apartment", label: "🏢 In an apartment (high-rise)", tags: ["apartment", "high_rise"] },
        { id: "house", label: "🏠 In a private house", tags: ["house", "low_rise"] },
        { id: "street", label: "🚶 Outside / in a vehicle", tags: ["street", "vehicle"] },
        { id: "basement", label: "📦 In a basement / cellar", tags: ["basement", "underground"] }
      ]
    },
    {
      id: "has_emergency_kit",
      text: "Do you have an emergency kit (water, food, flashlight, medicine)?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, everything is ready", tags: ["kit_yes"] },
        { id: "partial", label: "⚠️ Partially (something is missing)", tags: ["kit_partial"] },
        { id: "no", label: "❌ No, nothing prepared", tags: ["kit_no"] }
      ]
    },
    {
      id: "people_count",
      text: "How many people are with you?",
      type: "single",
      options: [
        { id: "alone", label: "👤 I'm alone", tags: ["alone"] },
        { id: "family", label: "👨‍👩‍👧‍👦 Family (2-4 people)", tags: ["family"] },
        { id: "large", label: "👨‍👩‍👧‍👦👨‍👩‍👧‍👦 Large group (5+)", tags: ["large_group"] }
      ]
    },
    {
      id: "has_transport",
      text: "Do you have transportation?",
      type: "single",
      options: [
        { id: "car", label: "🚗 I have a car", tags: ["car"] },
        { id: "no_car", label: "🚶 No car", tags: ["no_car"] }
      ]
    },
    {
      id: "mobile_charge",
      text: "Is your phone / power bank charged?",
      type: "single",
      options: [
        { id: "charged", label: "✅ Yes, charged", tags: ["charged"] },
        { id: "low", label: "🔋 Low charge (less than 30%)", tags: ["low_charge"] },
        { id: "no", label: "❌ No, dead / no power bank", tags: ["no_charge"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Earthquake — actions during and after
    // ========================================
    {
      id: "earthquake_now",
      title: "🌍 Earthquake — actions right now",
      description: "Earthquakes last 10–60 seconds. You have time to save yourself if you act correctly.",
      conditions: { natural_type: ["earthquake"], severity: ["ongoing", "warning"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–60 seconds",
      yield_estimate: "Maximum protection",
      tags: ["earthquake", "emergency", "survival"],
      steps: [
        "DO NOT run outside during shaking — falling objects, debris, glass are more dangerous than inside. Take cover where you are",
        "The 'Drop, Cover, Hold On' rule: drop to your knees, cover your head and neck, hold on under a sturdy table, against an interior wall, or in a doorway",
        "DO NOT stand near windows, balconies, exterior walls, or elevators. DO NOT use elevators — they may get stuck or fall",
        "If in bed — stay there, cover your head with a pillow. Don't get up — falling objects, chandeliers, cabinets",
        "If outside — move away from buildings, bridges, power lines, trees. Lie on the ground, cover your head. Danger: falling debris, glass, wires",
        "If in a car — stop, stay inside, buckle up. Don't stop under bridges, power lines, trees. After shaking — proceed with caution, bridges may be damaged",
        "After the main shock: expect aftershocks (minutes, hours, days later). They can be stronger. Don't re-enter damaged buildings",
        "Check gas, water, electricity. If you smell gas — turn it off, leave. If there are cracks in the walls — leave the building",
        "Turn on radio, phone — listen for emergency broadcasts. Don't call unnecessarily — lines are overloaded. Use SMS, messengers"
      ],
      warnings: [
        "DO NOT use elevators during an earthquake — they can get stuck between floors, lose power, fall",
        "DO NOT stand in doorways of modern buildings — this is a myth. Doorways are not safer than other spots. Better under a table, against an interior wall",
        "DO NOT run outside during shaking — you may fall, get hit by debris, glass. Take cover, wait for it to stop, then exit",
        "Aftershocks are a real danger. They can collapse already damaged buildings. Do not enter cracked buildings",
        "Tsunami — follows an undersea earthquake. If you are near the coast — immediately move to high ground >30 meters above sea level"
      ]
    },
    // ========================================
    // 2. Hurricane — preparation and protection
    // ========================================
    {
      id: "hurricane_prep",
      title: "💨 Hurricane / storm — protecting your home",
      description: "Strong wind (>25 m/s) tears off roofs, breaks trees, shatters windows. Prepare and wait it out.",
      conditions: { natural_type: ["hurricane"], severity: ["warning", "ongoing"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "30–60 minutes",
      yield_estimate: "Minimal damage",
      tags: ["hurricane", "storm", "preparation"],
      steps: [
        "Close all windows, balcony doors, vents. Close curtains, blinds, shutters — protection from flying glass",
        "Remove from balconies / yards everything that can fly away: plants, furniture, umbrellas, children's toys, tools. They become weapons in the wind",
        "Tape windows crosswise with tape — if broken, glass won't shatter into pieces but stay on the tape",
        "Charge phones, power banks, flashlights. Prepare a supply of water, food, medicine for 1–2 days. Power outages possible",
        "If the roof is weak / old — temporarily reinforce: bars, sandbags, ropes. Or call a repairman in advance",
        "During the hurricane: stay inside, away from windows. Best places — bathroom, hallway, under stairs (interior rooms without windows)",
        "DO NOT go outside during the hurricane. Falling branches, billboards, roofs, wires — deadly",
        "If in a car — stop, stay inside. Not under trees, power lines, billboards. Better in a parking lot, garage",
        "After the hurricane: carefully go outside. Check the roof, windows, gas, electricity. Don't touch fallen wires — call 01 (101/112)"
      ],
      warnings: [
        "DO NOT open windows 'to equalize pressure' — it's a myth. Open windows = destruction, flying objects, rain inside",
        "DO NOT stand near windows during a hurricane. Broken glass, frames, shutters — all fly at bullet speed",
        "Trees near the house — danger. If a tree is leaning, roots exposed — it will fall. Don't park under it",
        "After a hurricane: fallen wires may be live. Stay 10+ meters away, call 01 (101/112)"
      ]
    },
    // ========================================
    // 3. Flood — protection and evacuation
    // ========================================
    {
      id: "flood_home",
      title: "🌊 Flood — protecting your home and evacuation",
      description: "Water rises, floods basements, streets, houses. Act in advance while there's time.",
      conditions: { natural_type: ["flood"], severity: ["warning", "ongoing", "evacuation"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 hours",
      yield_estimate: "Saving life and property",
      tags: ["flood", "evacuation", "emergency"],
      steps: [
        "Monitor forecasts, water levels, Ministry of Emergency Situations messages. If evacuation is ordered — pack immediately. Time is minutes",
        "Move valuables to upper floors, shelves, tables. Documents, money, electronics, medicine — in waterproof bags, containers",
        "Turn off electricity at the panel: water + electricity = death. If water is already in the house — DO NOT touch the panel, leave",
        "Close the gas valve. Shut off the water. This prevents accidents when utilities are damaged",
        "Barricade entrances: sandbags, earthbags, shields, plywood, sealant. Temporary protection from 30 cm of water",
        "If water rises quickly — DO NOT try to save belongings. Evacuate to higher ground, upper floors, roof. Call 01 (101/112)",
        "In a car: DO NOT drive through flooded roads. 30 cm of water will wash the car away. 60 cm — the car will sink. If water rises — leave the car, go to high ground",
        "After the flood: don't drink tap water (contaminated). Don't eat food that has been in contact with water. Disinfect everything. Check foundations, walls for cracks"
      ],
      warnings: [
        "DO NOT walk through flooded basements, streets — holes, manholes, drop-offs, electric current in water from wires. Water hides dangers",
        "DO NOT try to swim through a current. 15 cm of fast-moving water knocks you off your feet. 60 cm — carries away a car. Walk on footbridges, ropes, wait for rescuers",
        "After a flood: buildings may be unstable. Foundations washed out, walls cracked. Don't enter without an engineer's inspection",
        "Water is contaminated with sewage, chemicals, oil products. Disinfect everything, wash hands, don't drink tap water for a week"
      ]
    },
    // ========================================
    // 4. Hail / downpour — protection
    // ========================================
    {
      id: "hail_storm",
      title: "🧊 Hail / severe downpour — protection",
      description: "Hail the size of a pea shatters windows, roofs, cars. Downpours cause flooding, mudslides.",
      conditions: { natural_type: ["hail"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Minimal damage",
      tags: ["hail", "storm", "protection"],
      steps: [
        "If hail starts — shelter your car: garage, carport, even a blanket/carpet on the hood and roof. Glass is the most vulnerable",
        "Close windows, vents, balconies. Close curtains, blinds. Hail breaks glass — shards are dangerous",
        "If outside — find shelter: entrance, store, garage, bridge. Not under trees — lightning, falling branches. Not in a car without cover — glass breaks",
        "If no shelter — cover your head with a bag, folder, hands. Lie on the ground, face down. Hail hits the head and back",
        "After hail: check the roof (holes, cracks), windows, car. Take photos for insurance",
        "If the roof is punctured — temporarily cover with a tarp, tarpaulin, plywood. Call a roofer. Water in the roof = rot, mold"
      ],
      warnings: [
        "DO NOT go out during hail to protect property — your head and health are more valuable than a car",
        "Hail + wind = double danger. Wind carries hail horizontally. Windows can break from any side",
        "After hail: wet roads, leaves, branches are dangerous for drivers. Slow down, be careful",
        "CASCO insurance covers hail. OSAGO — does not. If no CASCO — repairs at your own expense. Take photos immediately"
      ]
    },
    // ========================================
    // 5. Heavy snowfall / blizzard
    // ========================================
    {
      id: "heavy_snow",
      title: "❄️ Heavy snowfall / blizzard — survival",
      description: "A blizzard blocks roads, cuts power, threatens roof collapse. Prepare and wait it out.",
      conditions: { natural_type: ["snow"], severity: ["warning", "ongoing"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–3 hours",
      yield_estimate: "Safe passage",
      tags: ["snow", "blizzard", "survival"],
      steps: [
        "Stock up: water, food, medicine, fuel, batteries, candles, power bank for 2–3 days. Snow can block roads, cut power",
        "Charge your phone, power bank, radio. Follow the forecast, Ministry of Emergency Situations messages",
        "Clear snow from the roof: fresh snow — 100–150 kg/m², wet — 300+ kg/m². Old roofs collapse. Don't go alone — harness, helper, ladder",
        "Clear ventilation pipes, chimneys from snow — otherwise CO will accumulate in the house. Check if the chimney is frozen",
        "If stuck in a car: DO NOT leave the car. Run the engine 10 minutes every hour (ventilate to avoid CO poisoning). Signal with lights, horn. Phone — save battery",
        "If walking: dress in layers, cover face, wear goggles. Walk with the wind, hold onto a rope/partner. A blizzard disorients",
        "After the blizzard: be careful — icicles on roofs, ice, snowdrifts. Don't walk close to buildings — falling icicles kill"
      ],
      warnings: [
        "DO NOT go on the roof alone, without harness, during a blizzard. Falls from roof, frostbite, bruises — common injuries",
        "DO NOT leave your car in a blizzard. The car is shelter from wind, visible to rescuers. Outside — frostbite in 15–30 minutes at -30°C",
        "Wet snow on the roof = 3 times heavier than dry. Old buildings (>40 years) — risk of collapse. Clear snow regularly",
        "Icicles — hidden killers. They fall unexpectedly, can crush your skull. Walk on the opposite side of the street from buildings"
      ]
    },
    // ========================================
    // 6. Extreme heat / drought
    // ========================================
    {
      id: "heat_wave",
      title: "☀️ Extreme heat / drought — protection from overheating",
      description: "Heat above 35°C is dangerous for health, especially for children and the elderly. Prevent heatstroke.",
      conditions: { natural_type: ["heat"], severity: ["warning", "ongoing"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Protection from overheating",
      tags: ["heat", "drought", "health"],
      steps: [
        "Drink water more often, even if you don't feel thirsty. Normal: 2–3 liters per day in heat. No alcohol, no coffee — they dehydrate",
        "Close windows, curtains, blinds during sunny hours. Open them in the evening, night — ventilate. Heat protection is the first step",
        "Turn on fan / air conditioner. If not — wet towels on windows, on yourself. Fan with wet cloth — homemade cooler",
        "Limit activity during the hottest hours (12:00–17:00). Move activities to morning, evening",
        "Wear light, loose clothing made of natural fabrics (cotton, linen). Headwear is a must",
        "The elderly, children, sick — especially vulnerable. Check on them, give them water, don't leave them alone in the heat",
        "If you don't have air conditioning — visit a shopping mall, cinema, library — they have cooling",
        "Signs of heatstroke (dizziness, nausea, loss of consciousness): immediately move to shade, cold compress on head, call an ambulance: 03 (103/112)"
      ],
      warnings: [
        "DO NOT leave children or animals in a closed car — in 15 minutes the temperature rises to 60°C, this is deadly",
        "DO NOT drink ice-cold water — vasoconstriction, heart attack. Drink room-temperature water",
        "DO NOT go out in the sun without a hat and SPF 30+ cream — skin burns",
        "DO NOT exercise, do physical work in the heat — overheating, heatstroke"
      ]
    },
    // ========================================
    // 7. Assembling an emergency kit
    // ========================================
    {
      id: "emergency_kit_prep",
      title: "🎒 Emergency kit — what should be at home",
      description: "In any disaster, it's important to have a ready kit for 3 days. Prepare now to avoid panicking later.",
      conditions: { severity: ["warning"], has_emergency_kit: ["no", "partial"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "1–2 hours (assembly)",
      yield_estimate: "Ready for any situation",
      tags: ["emergency_kit", "preparation", "survival"],
      steps: [
        "💧 Water — 3 liters per person per day (minimum 9 liters for 3 days). Store in bottles, change every 6 months",
        "🍖 Food — non-perishable: canned goods, grains, crackers, chocolate, powdered milk, baby food. For 3 days",
        "💊 First aid kit — bandages, tourniquet, antiseptic, painkiller, antihistamine, antipyretic, plasters",
        "🔦 Flashlight + spare batteries (or dynamo flashlight). Candles, matches, lighter",
        "📱 Power bank 20,000 mAh + USB cables. Radio receiver (batteries)",
        "🧤 Warm clothes, raincoat, blanket, spare shoes, socks",
        "📄 Documents: passports, insurance policies, copies of apartment/car documents, money (small bills)",
        "🧹 Hygiene items: soap, toothpaste, wet wipes, toilet paper, feminine hygiene",
        "🔧 Multi-tool: knife, pliers, screwdriver, saw. Rope, duct tape, wire",
        "📒 Notepad, pen, pencil — important information",
        "🧸 For children: toys, books, coloring books, spare clothes, diapers, baby food",
        "🐕 For pets: food, water, carrier, leash, medicines, documents"
      ],
      warnings: [
        "Check expiration dates of food, medicine, water every six months. Update the kit",
        "Store the kit in an accessible place, but not in plain sight (fire, thieves)",
        "If you live in a seismic area — add gloves, a helmet, a warm blanket to the kit",
        "Don't store the kit in the basement — it will be inaccessible during a flood. Keep it on upper floors"
      ]
    }
  ]
};

// ===== EXPORT =====
window.naturalDataEn = naturalDataEn;
=======
// === MODULE: HOME — NATURAL DISASTERS (ENGLISH) ===
const naturalDataEn = {
  category: "natural",
  title: "🌪️ Natural Disasters",
  description: "Earthquake, hurricane, flood, hail, snowstorm — protecting home and family",

  questions: [
    {
      id: "natural_type",
      text: "What is happening? (select the main threat)",
      type: "single",
      options: [
        { id: "earthquake", label: "🌍 Earthquake / tremors", tags: ["earthquake", "seismic"] },
        { id: "hurricane", label: "💨 Hurricane / strong wind / storm", tags: ["hurricane", "wind"] },
        { id: "flood", label: "🌊 Flood / inundation / high water", tags: ["flood", "water"] },
        { id: "hail", label: "🧊 Hail / downpour / thunderstorm", tags: ["hail", "storm"] },
        { id: "snow", label: "❄️ Heavy snowfall / blizzard", tags: ["snow", "blizzard"] },
        { id: "heat", label: "☀️ Extreme heat / drought / wildfire", tags: ["heat", "drought"] },
        { id: "landslide", label: "🏔️ Landslide / mudflow / rockfall", tags: ["landslide", "mudflow"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is the situation?",
      type: "single",
      options: [
        { id: "warning", label: "📢 Warning / expected, time to prepare", tags: ["warning", "prepare"] },
        { id: "ongoing", label: "⚠️ Happening right now", tags: ["ongoing", "emergency"] },
        { id: "aftermath", label: "🔄 Over, consequences remain", tags: ["aftermath", "recovery"] },
        { id: "evacuation", label: "🚨 Evacuation ordered", tags: ["evacuation", "critical"] }
      ]
    },
    {
      id: "location_type",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "apartment", label: "🏢 In an apartment (high-rise)", tags: ["apartment", "high_rise"] },
        { id: "house", label: "🏠 In a private house", tags: ["house", "low_rise"] },
        { id: "street", label: "🚶 Outside / in a vehicle", tags: ["street", "vehicle"] },
        { id: "basement", label: "📦 In a basement / cellar", tags: ["basement", "underground"] }
      ]
    },
    {
      id: "has_emergency_kit",
      text: "Do you have an emergency kit (water, food, flashlight, medicine)?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, everything is ready", tags: ["kit_yes"] },
        { id: "partial", label: "⚠️ Partially (something is missing)", tags: ["kit_partial"] },
        { id: "no", label: "❌ No, nothing prepared", tags: ["kit_no"] }
      ]
    },
    {
      id: "people_count",
      text: "How many people are with you?",
      type: "single",
      options: [
        { id: "alone", label: "👤 I'm alone", tags: ["alone"] },
        { id: "family", label: "👨‍👩‍👧‍👦 Family (2-4 people)", tags: ["family"] },
        { id: "large", label: "👨‍👩‍👧‍👦👨‍👩‍👧‍👦 Large group (5+)", tags: ["large_group"] }
      ]
    },
    {
      id: "has_transport",
      text: "Do you have transportation?",
      type: "single",
      options: [
        { id: "car", label: "🚗 I have a car", tags: ["car"] },
        { id: "no_car", label: "🚶 No car", tags: ["no_car"] }
      ]
    },
    {
      id: "mobile_charge",
      text: "Is your phone / power bank charged?",
      type: "single",
      options: [
        { id: "charged", label: "✅ Yes, charged", tags: ["charged"] },
        { id: "low", label: "🔋 Low charge (less than 30%)", tags: ["low_charge"] },
        { id: "no", label: "❌ No, dead / no power bank", tags: ["no_charge"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Earthquake — actions during and after
    // ========================================
    {
      id: "earthquake_now",
      title: "🌍 Earthquake — actions right now",
      description: "Earthquakes last 10–60 seconds. You have time to save yourself if you act correctly.",
      conditions: { natural_type: ["earthquake"], severity: ["ongoing", "warning"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–60 seconds",
      yield_estimate: "Maximum protection",
      tags: ["earthquake", "emergency", "survival"],
      steps: [
        "DO NOT run outside during shaking — falling objects, debris, glass are more dangerous than inside. Take cover where you are",
        "The 'Drop, Cover, Hold On' rule: drop to your knees, cover your head and neck, hold on under a sturdy table, against an interior wall, or in a doorway",
        "DO NOT stand near windows, balconies, exterior walls, or elevators. DO NOT use elevators — they may get stuck or fall",
        "If in bed — stay there, cover your head with a pillow. Don't get up — falling objects, chandeliers, cabinets",
        "If outside — move away from buildings, bridges, power lines, trees. Lie on the ground, cover your head. Danger: falling debris, glass, wires",
        "If in a car — stop, stay inside, buckle up. Don't stop under bridges, power lines, trees. After shaking — proceed with caution, bridges may be damaged",
        "After the main shock: expect aftershocks (minutes, hours, days later). They can be stronger. Don't re-enter damaged buildings",
        "Check gas, water, electricity. If you smell gas — turn it off, leave. If there are cracks in the walls — leave the building",
        "Turn on radio, phone — listen for emergency broadcasts. Don't call unnecessarily — lines are overloaded. Use SMS, messengers"
      ],
      warnings: [
        "DO NOT use elevators during an earthquake — they can get stuck between floors, lose power, fall",
        "DO NOT stand in doorways of modern buildings — this is a myth. Doorways are not safer than other spots. Better under a table, against an interior wall",
        "DO NOT run outside during shaking — you may fall, get hit by debris, glass. Take cover, wait for it to stop, then exit",
        "Aftershocks are a real danger. They can collapse already damaged buildings. Do not enter cracked buildings",
        "Tsunami — follows an undersea earthquake. If you are near the coast — immediately move to high ground >30 meters above sea level"
      ]
    },
    // ========================================
    // 2. Hurricane — preparation and protection
    // ========================================
    {
      id: "hurricane_prep",
      title: "💨 Hurricane / storm — protecting your home",
      description: "Strong wind (>25 m/s) tears off roofs, breaks trees, shatters windows. Prepare and wait it out.",
      conditions: { natural_type: ["hurricane"], severity: ["warning", "ongoing"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "30–60 minutes",
      yield_estimate: "Minimal damage",
      tags: ["hurricane", "storm", "preparation"],
      steps: [
        "Close all windows, balcony doors, vents. Close curtains, blinds, shutters — protection from flying glass",
        "Remove from balconies / yards everything that can fly away: plants, furniture, umbrellas, children's toys, tools. They become weapons in the wind",
        "Tape windows crosswise with tape — if broken, glass won't shatter into pieces but stay on the tape",
        "Charge phones, power banks, flashlights. Prepare a supply of water, food, medicine for 1–2 days. Power outages possible",
        "If the roof is weak / old — temporarily reinforce: bars, sandbags, ropes. Or call a repairman in advance",
        "During the hurricane: stay inside, away from windows. Best places — bathroom, hallway, under stairs (interior rooms without windows)",
        "DO NOT go outside during the hurricane. Falling branches, billboards, roofs, wires — deadly",
        "If in a car — stop, stay inside. Not under trees, power lines, billboards. Better in a parking lot, garage",
        "After the hurricane: carefully go outside. Check the roof, windows, gas, electricity. Don't touch fallen wires — call 01 (101/112)"
      ],
      warnings: [
        "DO NOT open windows 'to equalize pressure' — it's a myth. Open windows = destruction, flying objects, rain inside",
        "DO NOT stand near windows during a hurricane. Broken glass, frames, shutters — all fly at bullet speed",
        "Trees near the house — danger. If a tree is leaning, roots exposed — it will fall. Don't park under it",
        "After a hurricane: fallen wires may be live. Stay 10+ meters away, call 01 (101/112)"
      ]
    },
    // ========================================
    // 3. Flood — protection and evacuation
    // ========================================
    {
      id: "flood_home",
      title: "🌊 Flood — protecting your home and evacuation",
      description: "Water rises, floods basements, streets, houses. Act in advance while there's time.",
      conditions: { natural_type: ["flood"], severity: ["warning", "ongoing", "evacuation"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 hours",
      yield_estimate: "Saving life and property",
      tags: ["flood", "evacuation", "emergency"],
      steps: [
        "Monitor forecasts, water levels, Ministry of Emergency Situations messages. If evacuation is ordered — pack immediately. Time is minutes",
        "Move valuables to upper floors, shelves, tables. Documents, money, electronics, medicine — in waterproof bags, containers",
        "Turn off electricity at the panel: water + electricity = death. If water is already in the house — DO NOT touch the panel, leave",
        "Close the gas valve. Shut off the water. This prevents accidents when utilities are damaged",
        "Barricade entrances: sandbags, earthbags, shields, plywood, sealant. Temporary protection from 30 cm of water",
        "If water rises quickly — DO NOT try to save belongings. Evacuate to higher ground, upper floors, roof. Call 01 (101/112)",
        "In a car: DO NOT drive through flooded roads. 30 cm of water will wash the car away. 60 cm — the car will sink. If water rises — leave the car, go to high ground",
        "After the flood: don't drink tap water (contaminated). Don't eat food that has been in contact with water. Disinfect everything. Check foundations, walls for cracks"
      ],
      warnings: [
        "DO NOT walk through flooded basements, streets — holes, manholes, drop-offs, electric current in water from wires. Water hides dangers",
        "DO NOT try to swim through a current. 15 cm of fast-moving water knocks you off your feet. 60 cm — carries away a car. Walk on footbridges, ropes, wait for rescuers",
        "After a flood: buildings may be unstable. Foundations washed out, walls cracked. Don't enter without an engineer's inspection",
        "Water is contaminated with sewage, chemicals, oil products. Disinfect everything, wash hands, don't drink tap water for a week"
      ]
    },
    // ========================================
    // 4. Hail / downpour — protection
    // ========================================
    {
      id: "hail_storm",
      title: "🧊 Hail / severe downpour — protection",
      description: "Hail the size of a pea shatters windows, roofs, cars. Downpours cause flooding, mudslides.",
      conditions: { natural_type: ["hail"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Minimal damage",
      tags: ["hail", "storm", "protection"],
      steps: [
        "If hail starts — shelter your car: garage, carport, even a blanket/carpet on the hood and roof. Glass is the most vulnerable",
        "Close windows, vents, balconies. Close curtains, blinds. Hail breaks glass — shards are dangerous",
        "If outside — find shelter: entrance, store, garage, bridge. Not under trees — lightning, falling branches. Not in a car without cover — glass breaks",
        "If no shelter — cover your head with a bag, folder, hands. Lie on the ground, face down. Hail hits the head and back",
        "After hail: check the roof (holes, cracks), windows, car. Take photos for insurance",
        "If the roof is punctured — temporarily cover with a tarp, tarpaulin, plywood. Call a roofer. Water in the roof = rot, mold"
      ],
      warnings: [
        "DO NOT go out during hail to protect property — your head and health are more valuable than a car",
        "Hail + wind = double danger. Wind carries hail horizontally. Windows can break from any side",
        "After hail: wet roads, leaves, branches are dangerous for drivers. Slow down, be careful",
        "CASCO insurance covers hail. OSAGO — does not. If no CASCO — repairs at your own expense. Take photos immediately"
      ]
    },
    // ========================================
    // 5. Heavy snowfall / blizzard
    // ========================================
    {
      id: "heavy_snow",
      title: "❄️ Heavy snowfall / blizzard — survival",
      description: "A blizzard blocks roads, cuts power, threatens roof collapse. Prepare and wait it out.",
      conditions: { natural_type: ["snow"], severity: ["warning", "ongoing"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–3 hours",
      yield_estimate: "Safe passage",
      tags: ["snow", "blizzard", "survival"],
      steps: [
        "Stock up: water, food, medicine, fuel, batteries, candles, power bank for 2–3 days. Snow can block roads, cut power",
        "Charge your phone, power bank, radio. Follow the forecast, Ministry of Emergency Situations messages",
        "Clear snow from the roof: fresh snow — 100–150 kg/m², wet — 300+ kg/m². Old roofs collapse. Don't go alone — harness, helper, ladder",
        "Clear ventilation pipes, chimneys from snow — otherwise CO will accumulate in the house. Check if the chimney is frozen",
        "If stuck in a car: DO NOT leave the car. Run the engine 10 minutes every hour (ventilate to avoid CO poisoning). Signal with lights, horn. Phone — save battery",
        "If walking: dress in layers, cover face, wear goggles. Walk with the wind, hold onto a rope/partner. A blizzard disorients",
        "After the blizzard: be careful — icicles on roofs, ice, snowdrifts. Don't walk close to buildings — falling icicles kill"
      ],
      warnings: [
        "DO NOT go on the roof alone, without harness, during a blizzard. Falls from roof, frostbite, bruises — common injuries",
        "DO NOT leave your car in a blizzard. The car is shelter from wind, visible to rescuers. Outside — frostbite in 15–30 minutes at -30°C",
        "Wet snow on the roof = 3 times heavier than dry. Old buildings (>40 years) — risk of collapse. Clear snow regularly",
        "Icicles — hidden killers. They fall unexpectedly, can crush your skull. Walk on the opposite side of the street from buildings"
      ]
    },
    // ========================================
    // 6. Extreme heat / drought
    // ========================================
    {
      id: "heat_wave",
      title: "☀️ Extreme heat / drought — protection from overheating",
      description: "Heat above 35°C is dangerous for health, especially for children and the elderly. Prevent heatstroke.",
      conditions: { natural_type: ["heat"], severity: ["warning", "ongoing"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Protection from overheating",
      tags: ["heat", "drought", "health"],
      steps: [
        "Drink water more often, even if you don't feel thirsty. Normal: 2–3 liters per day in heat. No alcohol, no coffee — they dehydrate",
        "Close windows, curtains, blinds during sunny hours. Open them in the evening, night — ventilate. Heat protection is the first step",
        "Turn on fan / air conditioner. If not — wet towels on windows, on yourself. Fan with wet cloth — homemade cooler",
        "Limit activity during the hottest hours (12:00–17:00). Move activities to morning, evening",
        "Wear light, loose clothing made of natural fabrics (cotton, linen). Headwear is a must",
        "The elderly, children, sick — especially vulnerable. Check on them, give them water, don't leave them alone in the heat",
        "If you don't have air conditioning — visit a shopping mall, cinema, library — they have cooling",
        "Signs of heatstroke (dizziness, nausea, loss of consciousness): immediately move to shade, cold compress on head, call an ambulance: 03 (103/112)"
      ],
      warnings: [
        "DO NOT leave children or animals in a closed car — in 15 minutes the temperature rises to 60°C, this is deadly",
        "DO NOT drink ice-cold water — vasoconstriction, heart attack. Drink room-temperature water",
        "DO NOT go out in the sun without a hat and SPF 30+ cream — skin burns",
        "DO NOT exercise, do physical work in the heat — overheating, heatstroke"
      ]
    },
    // ========================================
    // 7. Assembling an emergency kit
    // ========================================
    {
      id: "emergency_kit_prep",
      title: "🎒 Emergency kit — what should be at home",
      description: "In any disaster, it's important to have a ready kit for 3 days. Prepare now to avoid panicking later.",
      conditions: { severity: ["warning"], has_emergency_kit: ["no", "partial"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "1–2 hours (assembly)",
      yield_estimate: "Ready for any situation",
      tags: ["emergency_kit", "preparation", "survival"],
      steps: [
        "💧 Water — 3 liters per person per day (minimum 9 liters for 3 days). Store in bottles, change every 6 months",
        "🍖 Food — non-perishable: canned goods, grains, crackers, chocolate, powdered milk, baby food. For 3 days",
        "💊 First aid kit — bandages, tourniquet, antiseptic, painkiller, antihistamine, antipyretic, plasters",
        "🔦 Flashlight + spare batteries (or dynamo flashlight). Candles, matches, lighter",
        "📱 Power bank 20,000 mAh + USB cables. Radio receiver (batteries)",
        "🧤 Warm clothes, raincoat, blanket, spare shoes, socks",
        "📄 Documents: passports, insurance policies, copies of apartment/car documents, money (small bills)",
        "🧹 Hygiene items: soap, toothpaste, wet wipes, toilet paper, feminine hygiene",
        "🔧 Multi-tool: knife, pliers, screwdriver, saw. Rope, duct tape, wire",
        "📒 Notepad, pen, pencil — important information",
        "🧸 For children: toys, books, coloring books, spare clothes, diapers, baby food",
        "🐕 For pets: food, water, carrier, leash, medicines, documents"
      ],
      warnings: [
        "Check expiration dates of food, medicine, water every six months. Update the kit",
        "Store the kit in an accessible place, but not in plain sight (fire, thieves)",
        "If you live in a seismic area — add gloves, a helmet, a warm blanket to the kit",
        "Don't store the kit in the basement — it will be inaccessible during a flood. Keep it on upper floors"
      ]
    }
  ]
};

// ===== EXPORT =====
window.naturalDataEn = naturalDataEn;
>>>>>>> 57522793a60f67c90dd6befc66693a2a0762d34e
