// modules/home/data/en/fire-en.js
// === MODULE: HOME — FIRE ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "home",
    category: "fire",
    version: "1.0.0",
    lang: "en",
    title: "Fire",
    description: "Fire in apartment, house, hallway — evacuation, extinguishing, rescue of people and pets",
    icon: "🔥",
    color: "#0891b2"
  },

  questions: [
    {
      id: "fire_location",
      type: "single",
      text: "Where did the fire start?",
      options: [
        { id: "kitchen", label: "🍳 Kitchen (stove, oven, oil, microwave)", tags: ["kitchen"] },
        { id: "electrical", label: "🔌 Outlet / panel / wiring / electrical appliance", tags: ["electrical"] },
        { id: "heater", label: "🔥 Heater / fireplace / stove / radiator", tags: ["heater"] },
        { id: "room_furniture", label: "🪑 Room / furniture / curtains / carpet", tags: ["room"] },
        { id: "outside_building", label: "🏢 Outside the apartment (hallway, neighbors, street)", tags: ["outside"] },
        { id: "smell_smoke", label: "😷 Burning smell / smoke, no visible fire", tags: ["smell"] }
      ]
    },
    {
      id: "fire_size",
      type: "single",
      text: "How strong is the fire?",
      conditions: { fire_location: ["kitchen", "electrical", "heater", "room_furniture", "outside_building", "smell_smoke"] },
      options: [
        { id: "small", label: "🔥 Small fire (pan, rag, outlet)", tags: ["small"] },
        { id: "medium", label: "🔥🔥 Furniture / curtains / part of room on fire", tags: ["medium"] },
        { id: "large", label: "🔥🔥🔥 Whole room / apartment on fire / smoke everywhere", tags: ["large"] },
        { id: "blocked", label: "🚫 Escape route blocked by fire / smoke", tags: ["blocked"] }
      ]
    },
    {
      id: "people_present",
      type: "single",
      text: "Who is in the room?",
      conditions: { fire_location: ["kitchen", "electrical", "heater", "room_furniture", "outside_building"] },
      options: [
        { id: "alone", label: "👤 Only me", tags: ["alone"] },
        { id: "family", label: "👨‍👩‍👧‍👦 Family / adults", tags: ["family"] },
        { id: "children", label: "🧒 Children / infants", tags: ["children"] },
        { id: "elderly", label: "👴 Elderly / mobility-impaired", tags: ["elderly"] },
        { id: "pets", label: "🐕 Pets", tags: ["pets"] }
      ]
    },
    {
      id: "has_extinguisher",
      type: "single",
      text: "Do you have a fire extinguisher in your apartment?",
      conditions: { fire_location: ["kitchen", "electrical", "heater", "room_furniture"], fire_size: ["small"] },
      options: [
        { id: "ext_yes", label: "✅ Yes, I have a fire extinguisher", tags: ["ext_yes"] },
        { id: "ext_no", label: "❌ No fire extinguisher", tags: ["ext_no"] },
        { id: "ext_unknown", label: "❓ Don't know / can't see", tags: ["ext_unknown"] }
      ]
    },
    {
      id: "know_evacuation_plan",
      type: "single",
      text: "Do you know the evacuation plan from your building?",
      conditions: { fire_location: ["kitchen", "electrical", "heater", "room_furniture", "outside_building"], fire_size: ["medium", "large", "blocked"] },
      options: [
        { id: "plan_yes", label: "✅ Yes, I know the way out", tags: ["plan_yes"] },
        { id: "plan_no", label: "❌ No, I don't know", tags: ["plan_no"] },
        { id: "plan_unknown", label: "❓ Not sure", tags: ["plan_unknown"] }
      ]
    },
    {
      id: "has_gas",
      type: "single",
      text: "Is there gas in the apartment (stove, water heater, cylinder)?",
      conditions: { fire_location: ["kitchen", "heater", "room_furniture"] },
      options: [
        { id: "gas_yes", label: "✅ Yes, there is gas equipment", tags: ["gas_yes"] },
        { id: "gas_no", label: "❌ No, everything is electric", tags: ["gas_no"] },
        { id: "gas_unknown", label: "❓ Don't know", tags: ["gas_unknown"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. EVACUATION — LIFE IS THE PRIORITY
    // ============================================================
    {
      id: "fire_evacuation",
      title: "🚨 Evacuation during a fire — life is the priority",
      description: "In a large fire, don't try to extinguish. Save people, call firefighters, leave the building.",
      conditions: { fire_size: ["medium", "large", "blocked"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Lives saved",
      tags: ["fire", "evacuation", "emergency"],
      steps: [
        "Immediately call 01 (101 or 112 from mobile). Report: address, floor, apartment, what's burning, if there are people",
        "If the fire is in the apartment — close the door to the burning room (holds back fire and smoke for 10–15 minutes)",
        "Leave the apartment: crouch or crawl — smoke rises, clean air is near the floor. Close the front door behind you",
        "DON'T use elevators during a fire — use stairs. If stairs are smoky — find another way",
        "If the path is blocked — go to the bathroom, close the door, turn on the shower, wet towels, seal gaps. Signal from the window",
        "If on the balcony — close the balcony door, signal, shout. Don't jump from above the 2nd floor",
        "If you need to exit through a window: use sheets, ropes, cords. Tie to the radiator",
        "Help neighbors, children, elderly — but DON'T risk your own life",
        "Outside: move away from the building, meet the firefighters, tell them where people may be"
      ],
      warnings: [
        "DON'T return to a burning building for belongings, documents, animals — you may not get out",
        "Smoke kills faster than fire. 2–3 breaths of hot smoke = unconsciousness. Crawl, breathe through wet cloth",
        "DON'T open windows in a burning room — oxygen feeds the fire",
        "Metal doors heat up to 200°C — don't touch with bare hands",
        "If your clothes catch fire — drop to the ground, roll, smother the flames"
      ]
    },
    // ============================================================
    // 2. KITCHEN FIRE — EXTINGUISHING THE SOURCE
    // ============================================================
    {
      id: "kitchen_fire",
      title: "🍳 Kitchen fire — extinguishing the source",
      description: "Burning oil, food, appliances — extinguish correctly, don't make it worse.",
      conditions: { fire_location: ["kitchen"], fire_size: ["small"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Fire extinguished without spreading",
      tags: ["kitchen", "fire", "extinguishing"],
      steps: [
        "DON'T extinguish burning oil with water! Oil will flare up, splatter, fire will increase 10 times",
        "Turn off the stove (if safe). Cover the pan with a lid — cut off oxygen",
        "Throw a damp (but not dripping) towel or blanket over the pan",
        "Pour baking soda, salt, or flour on the fire — they smother flames",
        "Use a fire extinguisher (powder) — aim at the BASE of the flames from bottom to top",
        "If the fire is in the oven — DON'T open the door. Turn off the oven, close the door",
        "If microwave is burning inside — unplug, DON'T open the door",
        "If you can't handle it in 30 seconds — evacuate, call 01 (101/112)"
      ],
      warnings: [
        "Water + burning oil = explosive flare-up. NEVER extinguish oil with water",
        "Sugar, starch, aerosols — burn and explode. Don't use for extinguishing",
        "Kitchen extinguisher should be powder (OP) or CO2 (OU)",
        "If you're exhausted, panicked — RUN. Firefighters will arrive in 5 minutes"
      ]
    },
    // ============================================================
    // 3. ELECTRICAL FIRE — SHUT OFF POWER!
    // ============================================================
    {
      id: "electrical_fire",
      title: "🔌 Electrical fire — shut off power!",
      description: "Electrical fires are dangerous due to shock and rapid spread. DON'T use water!",
      conditions: { fire_location: ["electrical"], fire_size: ["small"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Fire contained",
      tags: ["electrical", "fire", "safety"],
      steps: [
        "IMMEDIATELY turn off power at the panel (lower ALL breakers). If the panel is smoky — don't approach",
        "DON'T use water to extinguish — electric shock!",
        "Use a fire extinguisher: powder (OP) or CO2 (OU). NOT foam",
        "If no extinguisher — pour baking soda, sand, or soil from a flower pot",
        "If an outlet is burning — turn off the breaker, then carefully remove the plug (only in gloves)",
        "If an appliance is burning — unplug it (if safe), cover with a blanket",
        "If you can't handle it — evacuate, call 01 (101/112)"
      ],
      warnings: [
        "Water + electricity = deadly. NEVER extinguish electrical appliances with water",
        "If you're not sure it's de-energized — DON'T approach. Call firefighters",
        "CO2 extinguisher — for electrical panels and appliances up to 1000V",
        "If the panel is smoky — don't approach, it may explode"
      ]
    },
    // ============================================================
    // 4. HEATER FIRE
    // ============================================================
    {
      id: "heater_fire",
      title: "🔥 Heater fire — action plan",
      description: "Heaters are a common cause of fires. Dry things correctly, don't overload the circuit.",
      conditions: { fire_location: ["heater"], fire_size: ["small"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Fire extinguished",
      tags: ["heater", "fire", "safety"],
      steps: [
        "IMMEDIATELY unplug the heater (if safe). If it's on fire — DON'T touch",
        "DON'T use water on oil heaters — can explode from oil overheating",
        "Use a fire extinguisher (powder) or smother with sand/soil",
        "If clothing on the heater is burning — cover with a damp blanket (DON'T pour water!)",
        "If you can't handle it — evacuate, call 01 (101/112)"
      ],
      warnings: [
        "Don't dry clothes on heaters — common cause of fires",
        "Oil heaters cannot be extinguished with water — explosion",
        "Heaters must be 1 meter away from curtains and furniture"
      ]
    },
    // ============================================================
    // 5. HOW TO USE A FIRE EXTINGUISHER
    // ============================================================
    {
      id: "fire_extinguisher_use",
      title: "🧯 How to use a fire extinguisher — guide",
      description: "Correct use of a fire extinguisher is key to extinguishing an incipient fire.",
      conditions: { fire_size: ["small"], has_extinguisher: ["ext_yes"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Incipient fire extinguished",
      tags: ["extinguisher", "fire", "safety"],
      steps: [
        "Check the type: OP (powder) — universal; OU (CO2) — for electrical equipment; OV (water) — NOT for electricity and oil",
        "Remove from mount, break the seal, pull out the pin",
        "Aim the nozzle at the BASE of the flames, not the tongues. Distance: 1.5–2 meters",
        "Squeeze the handle, move the stream from bottom to top, sweeping. Don't stop until the fire is out",
        "For CO2: hold the nozzle by the insulated handle (otherwise frostbite)",
        "After extinguishing: check for smoldering. Oil can re-ignite",
        "If not out in 10–15 seconds — drop the extinguisher, evacuate, call 01"
      ],
      warnings: [
        "OV (water) — CANNOT be used on electricity, oil, chemicals",
        "Powder extinguishers damage equipment but save lives",
        "Check the expiration date. Expired may not work"
      ]
    },
    // ============================================================
    // 6. BURNING SMELL / SMOKE WITHOUT FIRE
    // ============================================================
    {
      id: "smoke_smell_no_fire",
      title: "😷 Burning smell / smoke without visible fire — what to do",
      description: "Burning smell without fire is smoldering in the wall, wiring, or ventilation. Act carefully.",
      conditions: { fire_location: ["smell_smoke"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Source found and eliminated",
      tags: ["smell", "smoke", "fire_risk"],
      steps: [
        "Turn off electricity at the panel (lower ALL breakers) — smoldering may be in the wiring",
        "Check all rooms, sniffing. The smell is stronger near outlets, switches, ventilation, panel",
        "Check ventilation grilles: smoke may be coming from neighbors",
        "If smell is from the wall — call firefighters (01/101/112) — wall smoldering is dangerous",
        "If smell is from an appliance — turn it off, unplug, call an electrician",
        "If smell is from ventilation — check with neighbors, notify the management company",
        "If you can't find the cause — don't turn power back on until a specialist arrives"
      ],
      warnings: [
        "Burning smell is already fire (smoldering). DON'T ignore it",
        "If smell is from the wall — don't try to break the wall yourself",
        "If smell is strong — call firefighters, even if there's no fire"
      ]
    },
    // ============================================================
    // 7. FIRE OUTSIDE (HALLWAY / NEIGHBORS)
    // ============================================================
    {
      id: "fire_outside_building",
      title: "🏢 Fire in hallway / neighbors — actions",
      description: "Fire outside the apartment requires quick evacuation. Main thing — don't go into a smoky hallway.",
      conditions: { fire_location: ["outside_building"], fire_size: ["medium", "large"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Safe evacuation",
      tags: ["outside", "fire", "evacuation"],
      steps: [
        "Call firefighters: 01 (101/112). Report address, floor, where it's burning",
        "Close all windows and doors — to prevent smoke from entering",
        "Check: is there smoke in the hallway? If yes — DON'T go out!",
        "If it's safe to leave — leave the apartment, close the door, go down the stairs (NOT elevator!)",
        "If smoke is in the hallway — stay in the apartment. Seal doors with wet towels",
        "Go to the balcony, close the door, signal, shout. Don't jump from above the 2nd floor",
        "If there's a second staircase — use it",
        "If neighbors have a fire — knock on their door, warn them, help them leave"
      ],
      warnings: [
        "DON'T go into a smoky hallway — you can suffocate",
        "DON'T use elevators — power may be cut",
        "If smoke enters the apartment — go to the bathroom, turn on the shower, breathe through a wet cloth"
      ]
    },
    // ============================================================
    // 8. STAIRWELL SMOKE — SURVIVAL ALGORITHM
    // ============================================================
    {
      id: "stairwell_smoke",
      title: "🌫️ Stairwell smoke — survival algorithm",
      description: "Smoke in the hallway is more dangerous than fire. Act carefully, don't panic.",
      conditions: { fire_location: ["outside_building"], fire_size: ["blocked"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Safe waiting for rescue",
      tags: ["smoke", "stairwell", "survival"],
      steps: [
        "DON'T go into a smoky hallway — it's deadly",
        "Close the front door and seal all gaps with wet towels, rags, sheets",
        "Cover ventilation grilles with wet cloth",
        "Go to the balcony (if available), close the door, signal",
        "Turn on water in the bathroom (shower) — reduces smoke concentration",
        "Breathe through a wet cloth (towel, shirt, scarf)",
        "Crouch or lie down — there's less smoke near the floor",
        "Signal through the window: shine a flashlight, wave bright cloth, shout",
        "Wait for firefighters — they'll arrive in 5–15 minutes"
      ],
      warnings: [
        "DON'T go into smoke — 2–3 breaths can kill",
        "DON'T open windows wide — creates draft and pulls in smoke",
        "If smoke enters the apartment — go to the bathroom, close the door",
        "Don't jump from above the 2nd floor — almost always fatal"
      ]
    },
    // ============================================================
    // 9. RESCUE PETS
    // ============================================================
    {
      id: "rescue_pets",
      title: "🐕 Rescuing pets during a fire",
      description: "Pets panic and hide during fires. Act quickly but don't risk your life.",
      conditions: { people_present: ["pets"], fire_size: ["small", "medium"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Pet rescued",
      tags: ["pets", "rescue", "emergency"],
      steps: [
        "Pets hide during fires — check under beds, in closets, behind furniture",
        "Call the dog by name — it may come",
        "For cats or small animals — look in hiding places, take a carrier or bag",
        "Wrap the pet in a wet blanket or towel (protects from smoke)",
        "If the pet resists — don't waste time, leave yourself. Smoke kills faster",
        "If the pet is in a burning room — DON'T risk your life, call firefighters",
        "Outside: tell firefighters there's a pet in the apartment"
      ],
      warnings: [
        "DON'T risk your life for animals — you may not get out",
        "Pets often hide in hard-to-reach places",
        "If the pet is rescued — check for smoke inhalation",
        "After the fire — take the pet to a vet"
      ]
    },
    // ============================================================
    // 10. FIRE IN A MULTI-STOREY BUILDING
    // ============================================================
    {
      id: "multi_storey_fire",
      title: "🏢 Fire in a multi-storey building — general algorithm",
      description: "Fire in a multi-storey building requires special caution. Follow the plan.",
      conditions: { fire_location: ["outside_building", "room_furniture"], fire_size: ["large", "blocked"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Safe evacuation",
      tags: ["building", "fire", "evacuation"],
      steps: [
        "Call firefighters: 01 (101/112). Clearly state address, floor, apartment number",
        "Alert neighbors: knock on doors, shout 'Fire!'",
        "If you leave — close the apartment door, but DON'T lock it (firefighters need access)",
        "Go down the stairs (NOT elevator!), keeping near the wall, bent over",
        "If there's smoke on the stairs — stay in the apartment, follow the survival algorithm",
        "If you're outside — move away from the building, meet firefighters",
        "Tell firefighters: if there are people inside, animals, gas cylinders"
      ],
      warnings: [
        "DON'T use elevators — power may be cut",
        "DON'T open windows wide — creates draft and feeds the fire",
        "If smoke is on the stairs — don't go out. Stay in the apartment",
        "A closed apartment door is your protection from fire and smoke"
      ]
    }
  ]
});