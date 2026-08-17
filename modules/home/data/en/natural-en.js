// === MODULE: HOME — NATURAL DISASTERS ===
const naturalDataEn = {
  category: "natural",
  title: "🌪️ Natural disasters",
  description: "Earthquake, hurricane, flood, hail, snowstorm — protecting your home and family",

  questions: [
    {
      id: "natural_type",
      text: "What is happening?",
      type: "single",
      options: [
        { id: "earthquake", label: "🌍 Earthquake / tremors", tags: ["earthquake"] },
        { id: "hurricane", label: "🌪️ Hurricane / strong wind / storm", tags: ["hurricane"] },
        { id: "flood", label: "🌊 Flood / inundation", tags: ["flood"] },
        { id: "hail", label: "🌨️ Hail / heavy rain / thunderstorm", tags: ["hail"] },
        { id: "snow", label: "❄️ Heavy snowfall / blizzard", tags: ["snow"] },
        { id: "heat", label: "☀️ Extreme heat / drought", tags: ["heat"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is it?",
      type: "single",
      options: [
        { id: "warning", label: "⚠️ Warning / hasn't started yet", tags: ["warning"] },
        { id: "ongoing", label: "🚨 Already happening right now", tags: ["ongoing"] },
        { id: "aftermath", label: "🔧 It's over, there are consequences", tags: ["aftermath"] }
      ]
    },
    {
      id: "location_type",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "loc_apartment", label: "In an apartment (multi-story building)", tags: ["apartment"] },
        { id: "loc_house", label: "In a private house", tags: ["house"] },
        { id: "loc_street", label: "On the street / in a car", tags: ["street"] }
      ]
    }
  ],

  solutions: [
    {
      id: "earthquake_now",
      title: "🌍 Earthquake — actions right now",
      description: "An earthquake lasts 10–60 seconds. You have time to save yourself if you act correctly.",
      conditions: { natural_type: ["earthquake"], severity: ["ongoing"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–60 seconds",
      yield_estimate: "Maximum protection",
      tags: ["earthquake", "emergency", "survival"],
      steps: [
        "DO NOT run outside during the shaking — falling objects, debris, glass are more dangerous than inside. Take cover where you are",
        "The 'Drop, Cover, Hold On' rule: drop to your knees, cover your head and neck with your hands, hold on to an interior wall, under a table, or in a doorway",
        "DO NOT stand near windows, balconies, exterior walls, elevators. DO NOT use the elevator — it will get stuck or fall",
        "If in bed — stay there, cover your head with a pillow. Don't get up — falling objects, chandeliers, cabinets",
        "If outside — move away from buildings, bridges, power lines, trees. Lie on the ground, cover your head. Danger: falling debris, glass, wires",
        "If in a car — stop, stay inside, fasten your seatbelt. Don't stop under bridges, power lines, trees. After the shaking — be careful, bridges may be damaged",
        "After the main shock: expect aftershocks (in minutes, hours, days). They can be stronger. Don't return to damaged buildings",
        "Check gas, water, electricity. If you smell gas — turn it off, leave. If there are cracks in the walls — leave the building",
        "Turn on the radio, phone — listen to emergency messages. Don't call unnecessarily — lines are overloaded. Use SMS, messengers"
      ],
      warnings: [
        "DO NOT use the elevator during an earthquake — it can get stuck between floors, lose power, or fall",
        "DO NOT stand in the doorway of modern buildings — it's a myth. Doorways are no safer than other places. Better under a table, by an interior wall",
        "DO NOT run outside during the shaking — you could fall, debris could fall on you. Take cover, wait for it to end, then go out",
        "Aftershocks are a real danger. They can collapse already damaged buildings. Don't enter cracked buildings",
        "Tsunami — follows an offshore earthquake. If you're near the coast — immediately go to higher ground > 30 meters above sea level"
      ]
    },
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
        "Remove everything from the balcony / yard that could fly away: flowers, furniture, umbrellas, children's toys, tools. They become weapons in the wind",
        "Tape windows in a cross pattern — when broken, the glass won't shatter into fragments but will stay on the tape",
        "Charge phones, power banks, flashlights. Prepare a supply of water, food, medicine for 1–2 days. Power outages are possible",
        "If the roof is weak / old — temporarily reinforce it: bars, sandbags, ropes. Or call a specialist in advance",
        "During the hurricane: stay inside, away from windows. The best place — bathroom, hallway, under the stairs (interior rooms without windows)",
        "DO NOT go outside during the hurricane. Falling branches, billboards, roofs, wires — deadly",
        "If in a car — stop, stay inside. Not under trees, power lines, billboards. Better in a parking lot, garage",
        "After the hurricane: go out carefully. Check the roof, windows, gas, electricity. Don't touch downed wires — call 01 (101/112)"
      ],
      warnings: [
        "DO NOT open windows 'to equalize pressure' — it's a myth. Open windows = destruction, flying objects, rain inside",
        "DO NOT stand near windows during a hurricane. Broken glass, frames, shutters — all fly at bullet speed",
        "Trees near the house — a danger. If a tree is leaning, roots exposed — it will fall. Don't park under it",
        "After a hurricane: downed wires may be live. Stay 10+ meters away, call 01 (101/112)"
      ]
    },
    {
      id: "flood_home",
      title: "🌊 Flood — protecting your home and evacuation",
      description: "Water is rising, flooding basements, streets, homes. Act in advance while you still have time.",
      conditions: { natural_type: ["flood"], severity: ["warning", "ongoing"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 hours",
      yield_estimate: "Saving property and lives",
      tags: ["flood", "evacuation", "emergency"],
      steps: [
        "Follow the forecast, water levels, emergency messages. If evacuation is announced — pack immediately. Time is minutes",
        "Move valuable property to upper floors, shelves, tables. Documents, money, electronics, medicine — in waterproof bags, containers",
        "Turn off the electricity in the panel: water + electricity = death. If water is already in the house — DO NOT touch the panel, leave",
        "Close the gas valve. Shut off the water. This will prevent accidents when utilities are damaged",
        "Barricade entrances: sandbags, earthbags, shields, plywood, sealant. Temporary protection from 30 cm of water",
        "If water is rising quickly — DO NOT try to save property. Evacuate to higher ground, upper floors, roof. Call 01 (101/112)",
        "In a car: DO NOT drive on flooded roads. 30 cm of water — the car will be swept away. 60 cm — the car will sink. If water is rising — leave the car, go to higher ground",
        "After the flood: don't drink tap water (contaminated). Don't eat food that came into contact with water. Disinfect everything. Check the foundation, walls for cracks"
      ],
      warnings: [
        "DO NOT walk through flooded basements, streets — holes, manholes, cliffs, electric current in the water from wires. Water hides dangers",
        "DO NOT try to swim across the current. 15 cm of fast-flowing water knocks you off your feet. 60 cm — washes away a car. Walk on gangplanks, ropes, wait for rescuers",
        "After a flood: buildings may be unstable. Foundation washed away, walls cracked. Don't enter without an engineer's inspection",
        "The water is contaminated with sewage, chemicals, petroleum products. Disinfect everything, wash your hands, don't drink tap water for a week"
      ]
    },
    {
      id: "hail_protection",
      title: "🧊 Hail / heavy rain — protection",
      description: "Hail the size of a pea smashes windows, roofs, cars. Heavy rain — flooding, landslides.",
      conditions: { natural_type: ["hail"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Minimal damage",
      tags: ["hail", "storm", "protection"],
      steps: [
        "If hail starts — protect your car: garage, canopy, at least a blanket/carpet on the hood and roof. Glass is the most vulnerable",
        "Close windows, vents, balconies. Close curtains, blinds. Hail smashes glass — fragments are dangerous",
        "If outside — find shelter: entrance, store, garage, bridge. Not under trees — lightning, falling branches. Not in a car without shelter — glass breaks",
        "If no shelter — cover your head with a bag, folder, hands. Lie on the ground, face down. Hail hits the head and back",
        "After the hail: check the roof (holes, cracks), windows, car. Take photos of the damage for insurance",
        "If the roof is punctured — temporarily cover it with a tarp, tarpaulin, plywood. Call a roofer. Water in the roof = rot, mold"
      ],
      warnings: [
        "DO NOT go out during hail to protect property — your head and health are more valuable than the car",
        "Hail + wind = double danger. The wind carries hailstones horizontally. Windows can break from any side",
        "After hail: wet roads, leaves, branches — dangerous for drivers. Slow down, be careful",
        "CASCO insurance covers hail. OSAGO — does not. If no CASCO — repairs at your own expense. Photograph everything immediately"
      ]
    },
    {
      id: "heavy_snow",
      title: "❄️ Heavy snowfall / blizzard — survival",
      description: "A blizzard blocks roads, cuts power, threatens roof collapse. Prepare and wait it out.",
      conditions: { natural_type: ["snow"], severity: ["warning", "ongoing"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–3 hours",
      yield_estimate: "Safe survival",
      tags: ["snow", "blizzard", "survival"],
      steps: [
        "Stock up: water, food, medicine, fuel, batteries, candles, power bank for 2–3 days. Snowfall can block roads, cut power",
        "Charge your phone, power bank, radio. Follow the forecast, emergency messages",
        "Clear the roof of snow: fresh snow — 100–150 kg/m², wet snow — 300+ kg/m². Old roofs collapse. Don't go alone — safety rope, helper, ladder",
        "Clear ventilation pipes, chimneys of snow — otherwise CO will accumulate in the house. Check if the chimney is frozen",
        "If stuck in a car: DO NOT leave the car. Run the engine for 10 minutes every hour (ventilate to avoid CO poisoning). Signal with lights, horn. Phone — save battery",
        "If walking: dress in layers, cover your face, wear goggles. Walk with the wind, hold onto a rope/partner. A blizzard disorients",
        "After the blizzard: be careful — icicles on roofs, icing, debris. Don't walk close to buildings — falling icicles kill"
      ],
      warnings: [
        "DO NOT go on the roof alone, without safety gear, in a blizzard. Falling from the roof, frostbite, bruises — common injuries",
        "DO NOT leave your car in a blizzard. The car is shelter from the wind, visibility for rescuers. Outside — frostbite in 15–30 minutes at -30°C",
        "Wet snow on the roof = 3 times heavier than dry. Older houses (>40 years) — risk of collapse. Remove snow regularly",
        "Icicles — a hidden killer. They fall unexpectedly, pierce the skull. Walk on the opposite side of the street from buildings"
      ]
    },
    {
      id: "extreme_heat",
      title: "☀️ Extreme heat — protecting health and home",
      description: "Heat >30°C is dangerous for health, causes dehydration, overheating, fires. Act preventively.",
      conditions: { natural_type: ["heat"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Comfort and safety",
      tags: ["heat", "heatwave", "health"],
      steps: [
        "Drink water often, even if you don't feel thirsty. Normal: 2–3 liters per day, in heat — up to 4 liters. Don't drink ice-cold — you can catch a cold",
        "Avoid alcohol, coffee, sweet sodas — they dehydrate. Better water, mint tea, compote",
        "Wear light-colored loose clothing, a hat, sunglasses. Don't go out in the sun from 12 to 16 hours",
        "At home: close windows and curtains during the day, open at night (ventilation). Use fans, air conditioners. If not — wet towels on windows, ventilation",
        "Don't leave children, animals, medicine, canned food in the car — deadly even for 10 minutes",
        "Check on elderly neighbors — they tolerate heat worse and may not be able to call for help",
        "Heat stroke: dizziness, nausea, weakness, dry hot skin. Immediately: cool place, cold compress, water. If vomiting, loss of consciousness — ambulance 03 (103/112)",
        "Humidify the air: aquarium, damp cloths, spraying plants. This reduces temperature by 2–3°C",
        "Protect appliances: turn off powerful devices, don't overload the wiring. Fires from overheated wiring are common in heat"
      ],
      warnings: [
        "DO NOT leave children and animals in a closed car even for 5 minutes at 30°C — the temperature inside rises to 50°C in 10 minutes, deadly",
        "DO NOT drink alcohol — it dilates blood vessels, increases the risk of heat stroke, dehydrates",
        "In heat: electricity may be cut off (grid overload). Charge power banks, stock up on water",
        "Fire hazard: dry grass, garbage, cigarette butts — cause of fires. Don't start fires, don't throw cigarette butts"
      ]
    }
  ]
};

// ===== EXPORT =====
window.naturalDataEn = naturalDataEn;