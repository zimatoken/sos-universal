<<<<<<< HEAD
// === MODULE: HOME — FIRE (ENGLISH) ===
const fireDataEn = {
  category: "fire",
  title: "🔥 Fire",
  description: "Fire in apartment, house, entrance — evacuation, extinguishing, rescue",

  questions: [
    {
      id: "fire_location",
      text: "Where did the fire start?",
      type: "single",
      options: [
        { id: "kitchen", label: "🍳 Kitchen (stove, oven, microwave, oil)", tags: ["kitchen", "grease"] },
        { id: "electrical", label: "⚡ Outlet / panel / wiring / appliance", tags: ["electrical", "wire"] },
        { id: "heater", label: "🔥 Heater / fireplace / stove", tags: ["heater", "heat"] },
        { id: "furniture", label: "🛋️ Furniture / curtains / carpet / mattress", tags: ["furniture", "fabric"] },
        { id: "outside", label: "🚪 Outside (entrance, neighbors, street)", tags: ["outside", "building"] },
        { id: "smell_only", label: "👃 Only burning smell / smoke, no visible fire", tags: ["smell", "hidden"] },
        { id: "garbage", label: "🗑️ Trash can / balcony / storage room", tags: ["garbage", "storage"] }
      ]
    },
    {
      id: "fire_size",
      text: "How strong is the fire?",
      type: "single",
      options: [
        { id: "small", label: "🔥 Small source (pot, rag, outlet, trash)", tags: ["small", "contained"] },
        { id: "medium", label: "🔥 Furniture / curtains / part of a room is burning", tags: ["medium", "spreading"] },
        { id: "large", label: "🔥 Entire room / apartment / smoke everywhere", tags: ["large", "critical"] },
        { id: "blocked", label: "🚫 Escape route is blocked by fire / smoke", tags: ["blocked", "trapped"] }
      ]
    },
    {
      id: "people_present",
      text: "Who is in the building? (select all that apply)",
      type: "multi",
      options: [
        { id: "alone", label: "👤 Only me", tags: ["alone"] },
        { id: "family", label: "👨‍👩‍👧‍👦 Family / adults", tags: ["family"] },
        { id: "children", label: "👶 Children / infants", tags: ["children", "vulnerable"] },
        { id: "elderly", label: "👴 Elderly / mobility-impaired", tags: ["elderly", "vulnerable"] },
        { id: "pets", label: "🐕 Pets", tags: ["pets"] },
        { id: "neighbors", label: "🚪 Neighbors (may not know about the fire)", tags: ["neighbors"] }
      ]
    },
    {
      id: "time_of_day",
      text: "What time of day is it?",
      type: "single",
      options: [
        { id: "day", label: "☀️ Day (light, visible)", tags: ["day"] },
        { id: "night", label: "🌙 Night (dark, people asleep)", tags: ["night", "sleep"] },
        { id: "evening", label: "🌅 Evening / dusk", tags: ["evening"] }
      ]
    },
    {
      id: "has_smoke_detector",
      text: "Is there a smoke detector in the apartment?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, there is and it works", tags: ["detector_yes"] },
        { id: "no", label: "❌ No, not installed", tags: ["detector_no"] },
        { id: "unknown", label: "❓ Don't know / not sure", tags: ["detector_unknown"] }
      ]
    },
    {
      id: "has_extinguisher",
      text: "Do you have a fire extinguisher on hand?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, I have a fire extinguisher", tags: ["extinguisher_yes"] },
        { id: "no", label: "❌ No fire extinguisher", tags: ["extinguisher_no"] }
      ]
    },
    {
      id: "escape_route",
      text: "Is the escape route clear?",
      type: "single",
      options: [
        { id: "clear", label: "✅ Yes, the route is clear", tags: ["route_clear"] },
        { id: "blocked", label: "🚫 No, the route is blocked by fire or smoke", tags: ["route_blocked"] },
        { id: "unknown", label: "❓ Don't know / haven't checked", tags: ["route_unknown"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Critical evacuation — life comes first
    // ========================================
    {
      id: "fire_evacuation",
      title: "🚨 Critical evacuation — life comes first",
      description: "For a large fire, don't try to extinguish it. Save people, call firefighters, leave the building.",
      conditions: { fire_size: ["medium", "large", "blocked"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Lives saved",
      tags: ["fire", "evacuation", "emergency"],
      steps: [
        "IMMEDIATELY call 01 (or 101/112 from a mobile). Report: address, floor, apartment, what's burning, if there are people",
        "If the fire is in an apartment — close the door to the burning room (it will hold back fire and smoke for 10–15 minutes)",
        "Leave the apartment: crouch or crawl — smoke rises, clean air is near the floor. Close the front door behind you",
        "DO NOT use the elevator during a fire — use the stairs. If the stairwell is smoky — find another way (balcony, window, neighbors)",
        "If the route is blocked — go to the bathroom, close the door, turn on the shower, wet towels, seal gaps. Signal from the window",
        "If on the balcony — close the balcony door, signal, shout. Don't jump from above the 2nd floor",
        "If you need to escape through a window: use sheets, ropes, cords. Tie to a radiator, lower yourself carefully",
        "Help neighbors, children, the elderly — but DO NOT risk your own life. Firefighters will arrive in 5–15 minutes",
        "Outside: move away from the building, meet the firefighters, tell them where people may be, if there are gas cylinders"
      ],
      warnings: [
        "DO NOT go back into a burning building for belongings, documents, or animals — you may not come back out",
        "Smoke kills faster than fire. 2–3 breaths of hot smoke = unconsciousness. Crawl, breathe through a wet cloth",
        "DO NOT open windows in the burning room — oxygen will feed the fire",
        "Metal doors can heat up to 200°C — don't touch with bare hands, use cloth",
        "If your clothes catch fire — DON'T stand still. Drop to the ground, roll, smother the flames. Don't remove burning clothing while standing"
      ]
    },
    // ========================================
    // 2. Kitchen fire — extinguishing the source
    // ========================================
    {
      id: "kitchen_fire",
      title: "🍳 Kitchen fire — extinguishing the source",
      description: "Burning oil, food, appliances — extinguish correctly, don't make it worse.",
      conditions: { fire_location: ["kitchen"], fire_size: ["small"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Extinguished without spreading",
      tags: ["kitchen", "fire", "extinguishing"],
      steps: [
        "DO NOT extinguish burning oil with water! The oil will flare up, splash, and the fire will grow 10 times. Life-threatening",
        "Turn off the stove (if safe). Cover the pan with a lid — cut off the oxygen. The fire will go out in 1–2 minutes",
        "Cover the pan with a damp (but not dripping) towel or blanket. Lower from the side, not from above, to avoid fanning the flames",
        "Pour baking soda, salt, or flour on the fire — they smother it by removing oxygen. Don't use sugar — it burns",
        "Use a fire extinguisher (powder OP-2, OP-4) — aim at the BASE of the flames, not the tongues. Keep 1–1.5 meters away",
        "If the fire is in the oven — DO NOT open the door. Turn off the oven, close the door. The fire will go out from lack of oxygen",
        "If the microwave is burning inside — unplug it, DO NOT open the door. The fire will go out. Then dispose of the appliance",
        "If you can't handle it in 30 seconds — evacuate, call 01 (101/112). Better to lose the kitchen than your life"
      ],
      warnings: [
        "Water + burning oil = explosive flare-up. NEVER extinguish oil with water",
        "Sugar, starch, aerosols — burn and explode. Don't use them for extinguishing",
        "A kitchen fire extinguisher should be powder (OP) or CO2 (OU). Foam — only after power is disconnected",
        "If you're exhausted, panicked, or choking — RUN. Firefighters will arrive in 5 minutes"
      ]
    },
    // ========================================
    // 3. Electrical fire — disconnect power
    // ========================================
    {
      id: "electrical_fire",
      title: "⚡ Electrical fire — disconnect and extinguish",
      description: "Electrical fires require a special approach. First disconnect power, then extinguish.",
      conditions: { fire_location: ["electrical"], fire_size: ["small"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Extinguished safely",
      tags: ["electrical", "fire", "safety"],
      steps: [
        "IMMEDIATELY disconnect the power: turn off the breaker in the panel (switch down). This is the main rule",
        "If the breaker is inaccessible — unplug the burning appliance (only if there's no open flame or sparks)",
        "Use a CO2 (carbon dioxide) or powder fire extinguisher. WATER IS NOT ALLOWED — you can be electrocuted!",
        "If no extinguisher — cover the burning appliance with a thick blanket or wet cloth (ONLY after disconnecting!)",
        "If the panel is burning — DO NOT approach, touch, or pour water on it. Call 01 (101/112)",
        "If an outlet is sparking and smoking — turn off the breaker, call an electrician. Don't try to repair it yourself",
        "After extinguishing — do not turn power back on until inspected by a specialist. The appliance and wiring must be checked",
        "If there's a burning smell from the panel — it could be smoldering inside. Call the emergency service at 01 (101/112)"
      ],
      warnings: [
        "Water on electricity = deadly! Only CO2 or powder fire extinguisher",
        "DO NOT try to extinguish a live appliance — risk of electric shock",
        "If the panel is sparking and smoking — evacuate immediately, call firefighters",
        "Wires inside walls can burn hidden. If you smell burning but don't see fire — turn off the power"
      ]
    },
    // ========================================
    // 4. Burning smell — hidden fire
    // ========================================
    {
      id: "smell_fire",
      title: "👃 Burning smell / smoke without visible fire",
      description: "A burning smell can mean smoldering wiring or a fire at the neighbors'. Don't ignore it.",
      conditions: { fire_location: ["smell_only"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2–5 minutes",
      yield_estimate: "Source found",
      tags: ["smell", "hidden", "safety"],
      steps: [
        "DO NOT turn on lights or light matches — there could be gas or a leak",
        "Immediately disconnect the power at the panel (turn off all breakers)",
        "Check all rooms: is there any smoke, sparking, hot outlets, or appliances",
        "Check the panel, meter, main breaker — they should not be hot or smoking",
        "Check with neighbors: knock on their door, ask if they smell anything",
        "If the smell intensifies or smoke appears — call 01 (101/112), go outside",
        "If the cause is not found — call an electrician to check the wiring (insulation tester)",
        "Don't ignore this symptom — smoldering in the wall can ignite hours later"
      ],
      warnings: [
        "DO NOT turn power back on until you find the cause of the smell",
        "If it smells like gas (mercaptan smell — rotten eggs) — don't turn on lights, ventilate, call 04 (104/112)",
        "Hidden smoldering in the wall is dangerous because it's invisible. It can burn for hours and then flare up",
        "If the smell comes from the panel or meter — call the emergency service immediately"
      ]
    },
    // ========================================
    // 5. Using a fire extinguisher
    // ========================================
    {
      id: "fire_extinguisher_use",
      title: "🧯 How to use a fire extinguisher",
      description: "Proper use of a fire extinguisher is the key to extinguishing a small fire.",
      conditions: { fire_size: ["small"], has_extinguisher: ["yes"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Small fire extinguished",
      tags: ["extinguisher", "fire", "safety"],
      steps: [
        "Check the type of extinguisher: OP (powder, yellow) — universal; OU (CO2, red) — for electrical; OV (water, red) — NOT for electricity or oil",
        "Remove from the bracket, pull the pin, remove the safety clip",
        "Aim the nozzle at the BASE of the flame, not the flames themselves. Keep 1.5–2 meters away",
        "Squeeze the handle, sweep from side to side at the base of the fire. Don't stop until the fire is completely out",
        "For CO2 (OU): hold the nozzle by the insulated handle (otherwise frostbite), DO NOT touch the metal part",
        "After extinguishing: check for smoldering. Powder extinguishes well but doesn't cool. Oil may reignite",
        "If the fire doesn't go out in 10–15 seconds — drop the extinguisher, evacuate, call 01 (101/112)"
      ],
      warnings: [
        "Water extinguisher (OV) — NOT for electricity, oil, chemicals. Only for paper, wood, fabric",
        "CO2 extinguisher (OU) — not suitable for open spaces (CO2 displaces oxygen). Use in kitchen, panel",
        "Powder extinguisher damages appliances and furniture but saves lives. Don't spare your belongings",
        "Check the expiry date (printed on the body). An expired one may not work"
      ]
    },
    // ========================================
    // 6. Rescuing people and animals
    // ========================================
    {
      id: "rescue_people",
      title: "🆘 Rescuing people and animals during a fire",
      description: "In a fire, the priority is to save people and animals. Belongings come later.",
      conditions: { fire_size: ["medium", "large", "blocked"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Lives saved",
      tags: ["rescue", "people", "animals"],
      steps: [
        "DO NOT try to fight the fire if there's a threat to life. First, get people out",
        "Carry children or evacuate them in a stroller — they may be scared and hide",
        "Help the elderly to stand, support them while going down the stairs",
        "Animals: dogs on a leash, cats in a carrier (or in your arms, but they may scratch)",
        "If people are in the neighboring apartment — knock, shout, warn them about the fire",
        "Don't look for documents, money, valuables — they're not worth your life",
        "If someone is still inside — tell firefighters the exact location",
        "Don't re-enter a burning room for belongings — you may not come back out"
      ],
      warnings: [
        "DON'T risk your life for belongings — material things can be replaced, life cannot",
        "If a child is hiding (under the bed, in a closet) — call their name, listen for them",
        "Pets may hide in fear — look in hiding places",
        "If you can't find a pet — don't stay in the room for more than 20 seconds"
      ]
    },
    // ========================================
    // 7. Fire prevention and preparedness
    // ========================================
    {
      id: "fire_prevention",
      title: "🔥 Fire prevention and preparedness",
      description: "Preventing a fire is easier than extinguishing it. Install detectors and check equipment.",
      conditions: { fire_size: ["small"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "1–2 hours (setup)",
      yield_estimate: "Emergency preparedness",
      tags: ["prevention", "safety", "preparedness"],
      steps: [
        "Install smoke detectors in every room and hallway — they save lives",
        "Check the condition of wiring, outlets, breakers — hire an electrician every 2–3 years",
        "Keep a fire extinguisher in a visible place (kitchen, hallway, garage). Check the expiry date",
        "Don't leave appliances unattended: irons, kettles, heaters",
        "Don't overload outlets — no more than 2–3 kW total per outlet",
        "Don't smoke in bed, don't throw cigarette butts off the balcony — a common cause of fires",
        "Carry a flashlight, power bank — during a fire it may be dark",
        "Evacuation plan: practice routes, discuss with family where to meet after exiting"
      ],
      warnings: [
        "Smoke detectors should be tested once a month — press the test button",
        "Fire extinguisher in the kitchen and hallway — the minimum set",
        "Wires behind baseboards, in walls, extension cords — the main sources of fire",
        "Don't leave chargers plugged in without a phone — they can overheat"
      ]
    }
  ]
};

// ===== EXPORT =====
window.fireDataEn = fireDataEn;
=======
// === MODULE: HOME — FIRE (ENGLISH) ===
const fireDataEn = {
  category: "fire",
  title: "🔥 Fire",
  description: "Fire in apartment, house, entrance — evacuation, extinguishing, rescue",

  questions: [
    {
      id: "fire_location",
      text: "Where did the fire start?",
      type: "single",
      options: [
        { id: "kitchen", label: "🍳 Kitchen (stove, oven, microwave, oil)", tags: ["kitchen", "grease"] },
        { id: "electrical", label: "⚡ Outlet / panel / wiring / appliance", tags: ["electrical", "wire"] },
        { id: "heater", label: "🔥 Heater / fireplace / stove", tags: ["heater", "heat"] },
        { id: "furniture", label: "🛋️ Furniture / curtains / carpet / mattress", tags: ["furniture", "fabric"] },
        { id: "outside", label: "🚪 Outside (entrance, neighbors, street)", tags: ["outside", "building"] },
        { id: "smell_only", label: "👃 Only burning smell / smoke, no visible fire", tags: ["smell", "hidden"] },
        { id: "garbage", label: "🗑️ Trash can / balcony / storage room", tags: ["garbage", "storage"] }
      ]
    },
    {
      id: "fire_size",
      text: "How strong is the fire?",
      type: "single",
      options: [
        { id: "small", label: "🔥 Small source (pot, rag, outlet, trash)", tags: ["small", "contained"] },
        { id: "medium", label: "🔥 Furniture / curtains / part of a room is burning", tags: ["medium", "spreading"] },
        { id: "large", label: "🔥 Entire room / apartment / smoke everywhere", tags: ["large", "critical"] },
        { id: "blocked", label: "🚫 Escape route is blocked by fire / smoke", tags: ["blocked", "trapped"] }
      ]
    },
    {
      id: "people_present",
      text: "Who is in the building? (select all that apply)",
      type: "multi",
      options: [
        { id: "alone", label: "👤 Only me", tags: ["alone"] },
        { id: "family", label: "👨‍👩‍👧‍👦 Family / adults", tags: ["family"] },
        { id: "children", label: "👶 Children / infants", tags: ["children", "vulnerable"] },
        { id: "elderly", label: "👴 Elderly / mobility-impaired", tags: ["elderly", "vulnerable"] },
        { id: "pets", label: "🐕 Pets", tags: ["pets"] },
        { id: "neighbors", label: "🚪 Neighbors (may not know about the fire)", tags: ["neighbors"] }
      ]
    },
    {
      id: "time_of_day",
      text: "What time of day is it?",
      type: "single",
      options: [
        { id: "day", label: "☀️ Day (light, visible)", tags: ["day"] },
        { id: "night", label: "🌙 Night (dark, people asleep)", tags: ["night", "sleep"] },
        { id: "evening", label: "🌅 Evening / dusk", tags: ["evening"] }
      ]
    },
    {
      id: "has_smoke_detector",
      text: "Is there a smoke detector in the apartment?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, there is and it works", tags: ["detector_yes"] },
        { id: "no", label: "❌ No, not installed", tags: ["detector_no"] },
        { id: "unknown", label: "❓ Don't know / not sure", tags: ["detector_unknown"] }
      ]
    },
    {
      id: "has_extinguisher",
      text: "Do you have a fire extinguisher on hand?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, I have a fire extinguisher", tags: ["extinguisher_yes"] },
        { id: "no", label: "❌ No fire extinguisher", tags: ["extinguisher_no"] }
      ]
    },
    {
      id: "escape_route",
      text: "Is the escape route clear?",
      type: "single",
      options: [
        { id: "clear", label: "✅ Yes, the route is clear", tags: ["route_clear"] },
        { id: "blocked", label: "🚫 No, the route is blocked by fire or smoke", tags: ["route_blocked"] },
        { id: "unknown", label: "❓ Don't know / haven't checked", tags: ["route_unknown"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Critical evacuation — life comes first
    // ========================================
    {
      id: "fire_evacuation",
      title: "🚨 Critical evacuation — life comes first",
      description: "For a large fire, don't try to extinguish it. Save people, call firefighters, leave the building.",
      conditions: { fire_size: ["medium", "large", "blocked"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Lives saved",
      tags: ["fire", "evacuation", "emergency"],
      steps: [
        "IMMEDIATELY call 01 (or 101/112 from a mobile). Report: address, floor, apartment, what's burning, if there are people",
        "If the fire is in an apartment — close the door to the burning room (it will hold back fire and smoke for 10–15 minutes)",
        "Leave the apartment: crouch or crawl — smoke rises, clean air is near the floor. Close the front door behind you",
        "DO NOT use the elevator during a fire — use the stairs. If the stairwell is smoky — find another way (balcony, window, neighbors)",
        "If the route is blocked — go to the bathroom, close the door, turn on the shower, wet towels, seal gaps. Signal from the window",
        "If on the balcony — close the balcony door, signal, shout. Don't jump from above the 2nd floor",
        "If you need to escape through a window: use sheets, ropes, cords. Tie to a radiator, lower yourself carefully",
        "Help neighbors, children, the elderly — but DO NOT risk your own life. Firefighters will arrive in 5–15 minutes",
        "Outside: move away from the building, meet the firefighters, tell them where people may be, if there are gas cylinders"
      ],
      warnings: [
        "DO NOT go back into a burning building for belongings, documents, or animals — you may not come back out",
        "Smoke kills faster than fire. 2–3 breaths of hot smoke = unconsciousness. Crawl, breathe through a wet cloth",
        "DO NOT open windows in the burning room — oxygen will feed the fire",
        "Metal doors can heat up to 200°C — don't touch with bare hands, use cloth",
        "If your clothes catch fire — DON'T stand still. Drop to the ground, roll, smother the flames. Don't remove burning clothing while standing"
      ]
    },
    // ========================================
    // 2. Kitchen fire — extinguishing the source
    // ========================================
    {
      id: "kitchen_fire",
      title: "🍳 Kitchen fire — extinguishing the source",
      description: "Burning oil, food, appliances — extinguish correctly, don't make it worse.",
      conditions: { fire_location: ["kitchen"], fire_size: ["small"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Extinguished without spreading",
      tags: ["kitchen", "fire", "extinguishing"],
      steps: [
        "DO NOT extinguish burning oil with water! The oil will flare up, splash, and the fire will grow 10 times. Life-threatening",
        "Turn off the stove (if safe). Cover the pan with a lid — cut off the oxygen. The fire will go out in 1–2 minutes",
        "Cover the pan with a damp (but not dripping) towel or blanket. Lower from the side, not from above, to avoid fanning the flames",
        "Pour baking soda, salt, or flour on the fire — they smother it by removing oxygen. Don't use sugar — it burns",
        "Use a fire extinguisher (powder OP-2, OP-4) — aim at the BASE of the flames, not the tongues. Keep 1–1.5 meters away",
        "If the fire is in the oven — DO NOT open the door. Turn off the oven, close the door. The fire will go out from lack of oxygen",
        "If the microwave is burning inside — unplug it, DO NOT open the door. The fire will go out. Then dispose of the appliance",
        "If you can't handle it in 30 seconds — evacuate, call 01 (101/112). Better to lose the kitchen than your life"
      ],
      warnings: [
        "Water + burning oil = explosive flare-up. NEVER extinguish oil with water",
        "Sugar, starch, aerosols — burn and explode. Don't use them for extinguishing",
        "A kitchen fire extinguisher should be powder (OP) or CO2 (OU). Foam — only after power is disconnected",
        "If you're exhausted, panicked, or choking — RUN. Firefighters will arrive in 5 minutes"
      ]
    },
    // ========================================
    // 3. Electrical fire — disconnect power
    // ========================================
    {
      id: "electrical_fire",
      title: "⚡ Electrical fire — disconnect and extinguish",
      description: "Electrical fires require a special approach. First disconnect power, then extinguish.",
      conditions: { fire_location: ["electrical"], fire_size: ["small"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Extinguished safely",
      tags: ["electrical", "fire", "safety"],
      steps: [
        "IMMEDIATELY disconnect the power: turn off the breaker in the panel (switch down). This is the main rule",
        "If the breaker is inaccessible — unplug the burning appliance (only if there's no open flame or sparks)",
        "Use a CO2 (carbon dioxide) or powder fire extinguisher. WATER IS NOT ALLOWED — you can be electrocuted!",
        "If no extinguisher — cover the burning appliance with a thick blanket or wet cloth (ONLY after disconnecting!)",
        "If the panel is burning — DO NOT approach, touch, or pour water on it. Call 01 (101/112)",
        "If an outlet is sparking and smoking — turn off the breaker, call an electrician. Don't try to repair it yourself",
        "After extinguishing — do not turn power back on until inspected by a specialist. The appliance and wiring must be checked",
        "If there's a burning smell from the panel — it could be smoldering inside. Call the emergency service at 01 (101/112)"
      ],
      warnings: [
        "Water on electricity = deadly! Only CO2 or powder fire extinguisher",
        "DO NOT try to extinguish a live appliance — risk of electric shock",
        "If the panel is sparking and smoking — evacuate immediately, call firefighters",
        "Wires inside walls can burn hidden. If you smell burning but don't see fire — turn off the power"
      ]
    },
    // ========================================
    // 4. Burning smell — hidden fire
    // ========================================
    {
      id: "smell_fire",
      title: "👃 Burning smell / smoke without visible fire",
      description: "A burning smell can mean smoldering wiring or a fire at the neighbors'. Don't ignore it.",
      conditions: { fire_location: ["smell_only"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2–5 minutes",
      yield_estimate: "Source found",
      tags: ["smell", "hidden", "safety"],
      steps: [
        "DO NOT turn on lights or light matches — there could be gas or a leak",
        "Immediately disconnect the power at the panel (turn off all breakers)",
        "Check all rooms: is there any smoke, sparking, hot outlets, or appliances",
        "Check the panel, meter, main breaker — they should not be hot or smoking",
        "Check with neighbors: knock on their door, ask if they smell anything",
        "If the smell intensifies or smoke appears — call 01 (101/112), go outside",
        "If the cause is not found — call an electrician to check the wiring (insulation tester)",
        "Don't ignore this symptom — smoldering in the wall can ignite hours later"
      ],
      warnings: [
        "DO NOT turn power back on until you find the cause of the smell",
        "If it smells like gas (mercaptan smell — rotten eggs) — don't turn on lights, ventilate, call 04 (104/112)",
        "Hidden smoldering in the wall is dangerous because it's invisible. It can burn for hours and then flare up",
        "If the smell comes from the panel or meter — call the emergency service immediately"
      ]
    },
    // ========================================
    // 5. Using a fire extinguisher
    // ========================================
    {
      id: "fire_extinguisher_use",
      title: "🧯 How to use a fire extinguisher",
      description: "Proper use of a fire extinguisher is the key to extinguishing a small fire.",
      conditions: { fire_size: ["small"], has_extinguisher: ["yes"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Small fire extinguished",
      tags: ["extinguisher", "fire", "safety"],
      steps: [
        "Check the type of extinguisher: OP (powder, yellow) — universal; OU (CO2, red) — for electrical; OV (water, red) — NOT for electricity or oil",
        "Remove from the bracket, pull the pin, remove the safety clip",
        "Aim the nozzle at the BASE of the flame, not the flames themselves. Keep 1.5–2 meters away",
        "Squeeze the handle, sweep from side to side at the base of the fire. Don't stop until the fire is completely out",
        "For CO2 (OU): hold the nozzle by the insulated handle (otherwise frostbite), DO NOT touch the metal part",
        "After extinguishing: check for smoldering. Powder extinguishes well but doesn't cool. Oil may reignite",
        "If the fire doesn't go out in 10–15 seconds — drop the extinguisher, evacuate, call 01 (101/112)"
      ],
      warnings: [
        "Water extinguisher (OV) — NOT for electricity, oil, chemicals. Only for paper, wood, fabric",
        "CO2 extinguisher (OU) — not suitable for open spaces (CO2 displaces oxygen). Use in kitchen, panel",
        "Powder extinguisher damages appliances and furniture but saves lives. Don't spare your belongings",
        "Check the expiry date (printed on the body). An expired one may not work"
      ]
    },
    // ========================================
    // 6. Rescuing people and animals
    // ========================================
    {
      id: "rescue_people",
      title: "🆘 Rescuing people and animals during a fire",
      description: "In a fire, the priority is to save people and animals. Belongings come later.",
      conditions: { fire_size: ["medium", "large", "blocked"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Lives saved",
      tags: ["rescue", "people", "animals"],
      steps: [
        "DO NOT try to fight the fire if there's a threat to life. First, get people out",
        "Carry children or evacuate them in a stroller — they may be scared and hide",
        "Help the elderly to stand, support them while going down the stairs",
        "Animals: dogs on a leash, cats in a carrier (or in your arms, but they may scratch)",
        "If people are in the neighboring apartment — knock, shout, warn them about the fire",
        "Don't look for documents, money, valuables — they're not worth your life",
        "If someone is still inside — tell firefighters the exact location",
        "Don't re-enter a burning room for belongings — you may not come back out"
      ],
      warnings: [
        "DON'T risk your life for belongings — material things can be replaced, life cannot",
        "If a child is hiding (under the bed, in a closet) — call their name, listen for them",
        "Pets may hide in fear — look in hiding places",
        "If you can't find a pet — don't stay in the room for more than 20 seconds"
      ]
    },
    // ========================================
    // 7. Fire prevention and preparedness
    // ========================================
    {
      id: "fire_prevention",
      title: "🔥 Fire prevention and preparedness",
      description: "Preventing a fire is easier than extinguishing it. Install detectors and check equipment.",
      conditions: { fire_size: ["small"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "1–2 hours (setup)",
      yield_estimate: "Emergency preparedness",
      tags: ["prevention", "safety", "preparedness"],
      steps: [
        "Install smoke detectors in every room and hallway — they save lives",
        "Check the condition of wiring, outlets, breakers — hire an electrician every 2–3 years",
        "Keep a fire extinguisher in a visible place (kitchen, hallway, garage). Check the expiry date",
        "Don't leave appliances unattended: irons, kettles, heaters",
        "Don't overload outlets — no more than 2–3 kW total per outlet",
        "Don't smoke in bed, don't throw cigarette butts off the balcony — a common cause of fires",
        "Carry a flashlight, power bank — during a fire it may be dark",
        "Evacuation plan: practice routes, discuss with family where to meet after exiting"
      ],
      warnings: [
        "Smoke detectors should be tested once a month — press the test button",
        "Fire extinguisher in the kitchen and hallway — the minimum set",
        "Wires behind baseboards, in walls, extension cords — the main sources of fire",
        "Don't leave chargers plugged in without a phone — they can overheat"
      ]
    }
  ]
};

// ===== EXPORT =====
window.fireDataEn = fireDataEn;
>>>>>>> 57522793a60f67c90dd6befc66693a2a0762d34e
