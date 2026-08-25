// modules/home/data/en/natural-en.js
// === MODULE: HOME — NATURAL DISASTERS ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "home",
    category: "natural",
    version: "1.0.0",
    lang: "en",
    title: "Natural Disasters",
    description: "Earthquake, hurricane, flood, tsunami, tornado, heatwave — protecting your home and family",
    icon: "🌪️",
    color: "#0891b2"
  },

  questions: [
    {
      id: "natural_type",
      type: "single",
      text: "What is happening?",
      options: [
        { id: "earthquake", label: "🌍 Earthquake / tremors", tags: ["earthquake"] },
        { id: "tsunami", label: "🌊 Tsunami (after sea earthquake)", tags: ["tsunami"] },
        { id: "hurricane", label: "🌪️ Hurricane / strong wind / storm", tags: ["hurricane"] },
        { id: "tornado", label: "🌀 Tornado / twister", tags: ["tornado"] },
        { id: "flood", label: "🌊 Flood / inundation", tags: ["flood"] },
        { id: "landslide", label: "⛰️ Landslide / mudslide", tags: ["landslide"] },
        { id: "wildfire", label: "🔥 Wildfire / smoke from fire", tags: ["wildfire"] },
        { id: "hail", label: "🧊 Hail / heavy rain / thunderstorm", tags: ["hail"] },
        { id: "snow", label: "❄️ Heavy snow / blizzard", tags: ["snow"] },
        { id: "heat", label: "☀️ Extreme heat / drought", tags: ["heat"] }
      ]
    },
    {
      id: "severity",
      type: "single",
      text: "How serious is it?",
      conditions: { natural_type: ["earthquake", "tsunami", "hurricane", "tornado", "flood", "landslide", "wildfire", "hail", "snow", "heat"] },
      options: [
        { id: "warning", label: "⚠️ Warning / hasn't started yet", tags: ["warning"] },
        { id: "ongoing", label: "🚨 Happening right now", tags: ["ongoing"] },
        { id: "aftermath", label: "🔧 It's over, there are consequences", tags: ["aftermath"] }
      ]
    },
    {
      id: "location_type",
      type: "single",
      text: "Where are you?",
      conditions: { natural_type: ["earthquake", "tsunami", "hurricane", "tornado", "flood", "landslide", "wildfire", "hail", "snow", "heat"] },
      options: [
        { id: "loc_apartment", label: "🏢 In an apartment (multi-storey)", tags: ["apartment"] },
        { id: "loc_house", label: "🏠 In a private house", tags: ["house"] },
        { id: "loc_street", label: "🚶 Outside / in a car", tags: ["street"] }
      ]
    },
    {
      id: "floor_level",
      type: "single",
      text: "What floor are you on (for earthquake and flood)?",
      conditions: { natural_type: ["earthquake", "tsunami", "flood"], location_type: ["apartment"] },
      options: [
        { id: "floor_low", label: "📉 1–2 floor (low)", tags: ["low_floor"] },
        { id: "floor_mid", label: "📊 3–5 floor (middle)", tags: ["mid_floor"] },
        { id: "floor_high", label: "📈 6+ floor (high)", tags: ["high_floor"] }
      ]
    },
    {
      id: "has_supplies",
      type: "single",
      text: "Do you have supplies (water, food, batteries)?",
      conditions: { natural_type: ["earthquake", "hurricane", "flood", "snow", "heat"] },
      options: [
        { id: "supplies_yes", label: "✅ Yes, 3-day supply", tags: ["supplies_yes"] },
        { id: "supplies_no", label: "❌ No supplies", tags: ["supplies_no"] },
        { id: "supplies_partial", label: "📦 Partially", tags: ["supplies_partial"] }
      ]
    },
    {
      id: "building_type",
      type: "single",
      text: "What type of building (for earthquake)?",
      conditions: { natural_type: ["earthquake"], location_type: ["apartment"] },
      options: [
        { id: "building_panel", label: "🏗️ Panel (reinforced concrete)", tags: ["panel"] },
        { id: "building_brick", label: "🧱 Brick / monolithic", tags: ["brick"] },
        { id: "building_wood", label: "🪵 Wooden (frame)", tags: ["wood"] },
        { id: "building_unknown", label: "❓ Don't know", tags: ["unknown_building"] }
      ]
    },
    {
      id: "health_status",
      type: "single",
      text: "Does anyone in the family have special needs (disability, elderly, pregnancy)?",
      conditions: { natural_type: ["earthquake", "tsunami", "hurricane", "tornado", "flood", "landslide", "wildfire", "snow", "heat"] },
      options: [
        { id: "health_normal", label: "✅ Everyone is healthy and mobile", tags: ["health_normal"] },
        { id: "health_elderly", label: "👴 There are elderly / mobility-impaired", tags: ["health_elderly"] },
        { id: "health_children", label: "🧒 There are small children", tags: ["health_children"] },
        { id: "health_special", label: "👨‍🦽 There are disabled / bedridden", tags: ["health_special"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. EARTHQUAKE — ACTIONS RIGHT NOW
    // ============================================================
    {
      id: "earthquake_now",
      title: "🌍 Earthquake — actions right now",
      description: "An earthquake lasts 10–60 seconds. You have time to save yourself if you act correctly.",
      conditions: { natural_type: ["earthquake"], severity: ["ongoing"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–60 seconds",
      yield_estimate: "Maximum protection",
      tags: ["earthquake", "emergency", "survival"],
      steps: [
        "DON'T run outside during shaking — falling objects are more dangerous. Take cover where you are",
        "Rule: drop to your knees, cover your head and neck with your hands, hold on near an interior wall, under a table, or in a doorway",
        "DON'T stand near windows, balconies, exterior walls. DON'T use elevators",
        "If in bed — stay there, cover your head with a pillow",
        "If outside — move away from buildings, bridges, power lines. Lie on the ground, cover your head",
        "If in a car — stop, stay inside, fasten seatbelt. Not under bridges or power lines",
        "After the main shock: expect aftershocks. Don't return to damaged buildings",
        "Check gas, water, electricity. If gas smell — turn off, leave",
        "Turn on the radio — listen to emergency messages. Don't call unless necessary"
      ],
      warnings: [
        "DON'T use elevators during an earthquake — may get stuck or fall",
        "DON'T stand in doorways of modern buildings — it's a myth. Better under a table",
        "DON'T run outside during shaking — you may fall, debris may hit you",
        "Aftershocks can collapse already damaged buildings",
        "Tsunami — if near the sea, immediately go to higher ground > 30 meters above sea level"
      ]
    },
    // ============================================================
    // 2. TSUNAMI — FLEE TO HIGHER GROUND
    // ============================================================
    {
      id: "tsunami_survival",
      title: "🌊 Tsunami — flee to higher ground",
      description: "A tsunami follows a sea earthquake. The wave reaches 10–30 meters in 5–30 minutes. Run to the hills!",
      conditions: { natural_type: ["tsunami"], severity: ["ongoing", "warning"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–30 minutes",
      yield_estimate: "Life saved",
      tags: ["tsunami", "evacuation", "emergency"],
      steps: [
        "If an earthquake occurs near the sea — DON'T wait for an official warning. The wave will come in 5–30 minutes",
        "DON'T watch the sea — the wave looks small but hits suddenly. Run immediately",
        "Go to higher ground: height > 30 meters above sea level. The higher, the better",
        "If no high ground — climb onto the roof of a strong building (concrete frame, at least 3 floors)",
        "DON'T try to save property — only life. The wave sweeps everything in 5 seconds",
        "DON'T stand on the shore, DON'T photograph the wave — it's deadly",
        "If the wave is visible — run upward, climb trees, roofs, hills",
        "After the first wave: expect the second and third (usually higher). Don't go down until the all-clear"
      ],
      warnings: [
        "Tsunami is deadly. Time to escape — minutes. DON'T waste it on belongings",
        "The tsunami wave carries debris, cars, trees — they kill. Don't try to run from the wave horizontally — it's faster",
        "If you're on a boat at sea — go to open sea where the wave is not felt. In shallow water — the wave breaks",
        "Don't return to the shore after the first wave — the second may be higher"
      ]
    },
    // ============================================================
    // 3. TORNADO / TWISTER
    // ============================================================
    {
      id: "tornado_survival",
      title: "🌀 Tornado / twister — shelter and survival",
      description: "A tornado is the most destructive wind. Take shelter in a basement, bathroom, or other safe place.",
      conditions: { natural_type: ["tornado"], severity: ["ongoing", "warning"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–10 minutes",
      yield_estimate: "Life saved",
      tags: ["tornado", "survival", "emergency"],
      steps: [
        "DON'T stand near windows — they will shatter at great speed. Best place: basement, cellar, shelter",
        "If no basement — go to the bathroom, toilet, closet (interior rooms without windows)",
        "Lie on the floor, cover your head and neck with your hands, pillow, mattress. Cover with something strong",
        "If in a car — DON'T stay. A tornado will lift the car. Get out and lie in a ditch, pit, under a bridge",
        "If outside — lie in a low spot, ditch, ravine, hold onto the ground. Not under trees",
        "After the tornado: check yourself for injuries, leave damaged buildings, call for help"
      ],
      warnings: [
        "A tornado tears off roofs and lifts cars — don't try to ride it out in a car",
        "Mobile home — a death trap. Go to a permanent shelter",
        "If you see a tornado — it may be moving toward you. Move perpendicular to its path"
      ]
    },
    // ============================================================
    // 4. HURRICANE / STORM
    // ============================================================
    {
      id: "hurricane_prep",
      title: "💨 Hurricane / storm — protecting your home",
      description: "Strong wind (>25 m/s) tears off roofs, breaks trees, smashes windows. Prepare and wait it out.",
      conditions: { natural_type: ["hurricane"], severity: ["warning", "ongoing"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Minimal damage",
      tags: ["hurricane", "storm", "preparation"],
      steps: [
        "Close all windows, balcony doors, vents. Close curtains, blinds, shutters",
        "Remove from the balcony anything that could fly away: flowers, furniture, tools",
        "Tape windows in a cross pattern — glass won't shatter into pieces",
        "Charge phones, power banks, flashlights. Stock water and food for 1–2 days",
        "If the roof is weak — reinforce with bars, sandbags",
        "During the hurricane: stay inside, away from windows. Best place — bathroom, corridor",
        "DON'T go outside — falling branches, billboards, wires are deadly",
        "If in a car — stop, stay inside. Not under trees or power lines"
      ],
      warnings: [
        "DON'T open windows 'to equalize pressure' — it's a myth",
        "DON'T stand near windows — broken glass flies at bullet speed",
        "Trees near the house are dangerous. Don't park under them",
        "After the hurricane: downed wires may be live — don't approach"
      ]
    },
    // ============================================================
    // 5. FLOOD
    // ============================================================
    {
      id: "flood_home",
      title: "🌊 Flood — protecting your home and evacuation",
      description: "Water is rising, flooding the basement, street, house. Act early while you have time.",
      conditions: { natural_type: ["flood"], severity: ["warning", "ongoing"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 hours",
      yield_estimate: "Property and life saved",
      tags: ["flood", "evacuation", "emergency"],
      steps: [
        "Monitor the forecast, water level. If evacuation is announced — pack immediately",
        "Move valuables to upper floors, into waterproof bags",
        "Turn off electricity — water + electricity = death",
        "Close the gas valve, shut off water",
        "Barricade entrances with sandbags, shields",
        "If water rises quickly — evacuate to higher ground, upper floors, roof",
        "In a car: DON'T drive on flooded roads. 30 cm of water — the car will be swept away",
        "After the flood: don't drink tap water, check the foundation"
      ],
      warnings: [
        "DON'T walk on flooded streets — holes, manholes, electricity",
        "DON'T try to swim across the current — 15 cm knocks you off your feet",
        "After the flood: buildings may be unstable"
      ]
    },
    // ============================================================
    // 6. LANDSLIDE / MUDSLIDE
    // ============================================================
    {
      id: "landslide_mudslide",
      title: "⛰️ Landslide / mudslide — actions",
      description: "Landslides and mudslides strike suddenly, sweeping away houses and roads. Identify the danger and run sideways.",
      conditions: { natural_type: ["landslide"], severity: ["ongoing", "warning"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Life saved",
      tags: ["landslide", "mudslide", "emergency"],
      steps: [
        "Signs: cracks on the slope, road landslides, roaring sound, trees tilting, water turning muddy",
        "DON'T stand at the foot of a slope, near cliffs, at the edge of a road",
        "Run sideways from the landslide movement (perpendicular to the direction)",
        "Seek higher ground — a hill, rock, strong building",
        "If you're in a building — leave immediately. The landslide will destroy walls",
        "If in a car — DON'T stay. Get out, run sideways"
      ],
      warnings: [
        "Landslides strike suddenly — no time to think",
        "After heavy rains and earthquakes, landslide risk increases 10 times",
        "Don't stand near cliffs — they may collapse"
      ]
    },
    // ============================================================
    // 7. WILDFIRE / SMOKE
    // ============================================================
    {
      id: "wildfire_smoke",
      title: "🔥 Wildfire / smoke — protecting your home and lungs",
      description: "Wildfire brings smoke and heat. Protect your home and health, be ready to evacuate.",
      conditions: { natural_type: ["wildfire"], severity: ["warning", "ongoing"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Health protection + evacuation",
      tags: ["wildfire", "smoke", "evacuation"],
      steps: [
        "Close all windows and doors — smoke enters the house. Seal gaps with wet cloths",
        "Turn on ventilation, air conditioning on recirculation (don't take air from outside)",
        "Wear an N95/FFP2 mask or damp cloth over your face",
        "Be ready to evacuate: documents, medicine, water, phone in a backpack",
        "If evacuation is announced — leave immediately, take only essentials",
        "If fire is close — wet the roof and walls, moisten the ground around the house",
        "After the fire: check the house for hidden embers"
      ],
      warnings: [
        "Wildfire smoke is more dangerous than fire — irritates lungs, causes suffocation",
        "DON'T drive into the forest if there's a fire nearby — the wind may change",
        "If fire blocks the road — stay in the house, wet the roof with water",
        "Flammable items — remove them from the house"
      ]
    },
    // ============================================================
    // 8. HAIL / HEAVY RAIN
    // ============================================================
    {
      id: "hail_protection",
      title: "🧊 Hail / heavy rain — protection",
      description: "Hail the size of a pea breaks windows, roofs, cars. Heavy rain causes flooding, landslides.",
      conditions: { natural_type: ["hail"], severity: ["ongoing", "warning"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Minimal damage",
      tags: ["hail", "storm", "protection"],
      steps: [
        "If hail starts — cover the car: garage, canopy, blanket on the hood and roof",
        "Close windows, vents, balconies. Close curtains, blinds",
        "If outside — seek shelter: entrance, store, garage. Not under trees",
        "If no shelter — cover your head with a bag, hands. Lie on the ground, face down",
        "After hail: check the roof, windows, car. Photograph the damage"
      ],
      warnings: [
        "DON'T go out during hail to protect property — health is more important",
        "Hail + wind = double danger. Windows can break from any side",
        "CASCO insurance covers hail — photograph everything immediately"
      ]
    },
    // ============================================================
    // 9. HEAVY SNOW / BLIZZARD
    // ============================================================
    {
      id: "heavy_snow",
      title: "❄️ Heavy snow / blizzard — survival",
      description: "A blizzard blocks roads, cuts power, threatens roof collapse. Prepare and wait it out.",
      conditions: { natural_type: ["snow"], severity: ["warning", "ongoing"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 hours",
      yield_estimate: "Safe survival",
      tags: ["snow", "blizzard", "survival"],
      steps: [
        "Stock up: water, food, medicine, batteries, candles, power bank for 2–3 days",
        "Clear the roof of snow: fresh snow — 100–150 kg/m², wet — 300+ kg/m²",
        "Clear ventilation pipes, chimneys of snow",
        "If stuck in a car: DON'T leave the car. Run the engine 10 minutes every hour",
        "If walking: dress in layers, cover your face. Walk in the direction of the wind",
        "After the blizzard: be careful of icicles on roofs, ice"
      ],
      warnings: [
        "DON'T climb on the roof alone, without safety, in a blizzard",
        "DON'T leave the car in a blizzard — the car provides shelter from the wind",
        "Wet snow on the roof is 3 times heavier than dry. Old houses — risk of collapse",
        "Icicles are a hidden killer. Walk on the opposite side of the street"
      ]
    },
    // ============================================================
    // 10. EXTREME HEAT
    // ============================================================
    {
      id: "extreme_heat",
      title: "☀️ Extreme heat — protecting health and home",
      description: "Heat >30°C is dangerous for health, causes dehydration, overheating, fires.",
      conditions: { natural_type: ["heat"], severity: ["warning", "ongoing"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Comfort and safety",
      tags: ["heat", "heatwave", "health"],
      steps: [
        "Drink water often — 2–3 liters a day, up to 4 liters in heat",
        "Avoid alcohol, coffee, sugary soda",
        "Wear light-colored clothing, a hat, sunglasses. Don't go out from 12 to 16",
        "At home: close windows and curtains during the day, open at night",
        "Don't leave children, animals, or medicine in the car",
        "Check on elderly neighbors — they tolerate heat worse",
        "For heatstroke: cool place, cold compress, water",
        "Humidify the air — lowers temperature by 2–3°C"
      ],
      warnings: [
        "DON'T leave children and animals in a closed car — temperature rises to 50°C in 10 minutes",
        "DON'T drink alcohol — increases risk of heatstroke",
        "In heat: electricity may be cut. Charge your power bank",
        "Fire hazard: dry grass, trash, cigarette butts — don't start fires"
      ]
    }
  ]
});