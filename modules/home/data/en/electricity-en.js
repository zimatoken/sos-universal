<<<<<<< HEAD
// === MODULE: HOME — ELECTRICITY (ENGLISH) ===
const electricityDataEn = {
  category: "electricity",
  title: "⚡ Electricity",
  description: "Power outage, short circuit, electric shock, sparking — safe actions",

  questions: [
    {
      id: "elec_issue",
      text: "What happened? (select the main problem)",
      type: "single",
      options: [
        { id: "no_power", label: "🚫 No power / electricity was cut off", tags: ["no_power", "supply"] },
        { id: "spark", label: "⚡ Sparking / crackling / burning smell from outlet / panel", tags: ["spark", "fire_risk"] },
        { id: "shock", label: "⚡ Electric shock / tingling from appliance / faucet", tags: ["shock", "danger"] },
        { id: "breaker", label: "🔌 Breaker / fuse / RCD tripped", tags: ["breaker", "tripped"] },
        { id: "burned_smell", label: "🔥 Burning smell / smoke without visible fire", tags: ["smell", "fire_risk"] },
        { id: "lights_flicker", label: "💡 Lights flicker / dim when appliance turns on", tags: ["flicker", "overload"] },
        { id: "outlet_broken", label: "🔌 Outlet not working / sparking / plug falls out", tags: ["outlet", "broken"] },
        { id: "wire_visible", label: "🔌 Exposed wire / damaged insulation", tags: ["wire", "danger"] }
      ]
    },
    {
      id: "scope",
      text: "Where exactly is the problem?",
      type: "single",
      options: [
        { id: "whole_house", label: "🏠 Throughout the entire apartment / house", tags: ["whole", "supply"] },
        { id: "one_room", label: "🚪 In one room / on one circuit", tags: ["room", "circuit"] },
        { id: "one_device", label: "🔌 One appliance / one outlet", tags: ["device", "outlet"] },
        { id: "dont_know", label: "❓ Not sure", tags: ["unknown"] }
      ]
    },
    {
      id: "can_access_panel",
      text: "Do you have access to the electrical panel?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, the panel is accessible", tags: ["panel"] },
        { id: "no", label: "❌ No / panel is locked / in the hallway", tags: ["no_panel"] },
        { id: "scared", label: "⚠️ Afraid to touch / no experience", tags: ["scared"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have on hand?",
      type: "multi",
      options: [
        { id: "multimeter", label: "📟 Multimeter / voltage tester", tags: ["multimeter"] },
        { id: "flashlight", label: "🔦 Flashlight", tags: ["flashlight"] },
        { id: "fire_extinguisher", label: "🧯 Fire extinguisher (CO2 / powder)", tags: ["extinguisher"] },
        { id: "gloves", label: "🧤 Gloves (insulated)", tags: ["gloves"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "has_children",
      text: "Are there children or elderly people in the apartment?",
      type: "single",
      options: [
        { id: "kids_elderly", label: "👶 Yes, there are children or elderly people", tags: ["vulnerable"] },
        { id: "no", label: "👤 No", tags: ["adults_only"] }
      ]
    },
    {
      id: "weather_season",
      text: "What season is it?",
      type: "single",
      options: [
        { id: "winter", label: "❄️ Winter (cold, risk of frozen pipes)", tags: ["winter", "heating"] },
        { id: "summer", label: "☀️ Summer / warm", tags: ["summer"] },
        { id: "season_other", label: "🌤️ Spring / autumn", tags: ["moderate"] }
      ]
    },
    {
      id: "outlet_type",
      text: "What type of outlet is it?",
      condition: { elec_issue: ["outlet_broken"] },
      options: [
        { id: "old_soviet", label: "📟 Old Soviet (round holes)", tags: ["old"] },
        { id: "euro", label: "🔌 Euro (with grounding)", tags: ["euro"] },
        { id: "unknown", label: "❓ Don't know / can't see", tags: ["unknown"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Sparking / burning smell — fire hazard
    // ========================================
    {
      id: "elec_fire_immediate",
      title: "🔥 Sparking / burning smell — immediate actions",
      description: "An electrical fire develops in seconds. The main thing is to disconnect power and evacuate.",
      conditions: { elec_issue: ["spark", "burned_smell"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Fire prevention",
      tags: ["fire", "electricity", "emergency"],
      steps: [
        "DO NOT touch burning or smoking items with bare hands. DO NOT use water on electrical appliances",
        "Immediately turn off the electricity at the panel: switch ALL breakers down, including the main incoming breaker",
        "If the panel is inaccessible — unplug the appliance (if safe) or turn it off with the button",
        "If flames appear — use a fire extinguisher (CO2 or powder). NOT foam and NOT water — risk of electric shock",
        "If the fire is in the panel — close the panel door (limits oxygen), call the fire department: 01 (101/112)",
        "Evacuate the apartment if smoke is thick, fire is spreading, or you're not confident in your abilities",
        "Call an emergency electrician: 01 (101/112) or the building management's emergency service. Do not turn power back on until inspected",
        "After extinguishing — do not touch burnt wires or appliances until the electrician arrives. They may still be live"
      ],
      warnings: [
        "Water + electricity = deadly. NEVER extinguish electrical appliances with water",
        "Fire extinguisher must be CO2 (carbon dioxide) or powder. Foam — only after full disconnection",
        "If there's a burning smell but no visible fire — it could be smoldering inside the wall. Turn off power, call firefighters",
        "DO NOT try to disassemble panels, outlets, or wires without experience — 220V kills"
      ]
    },
    // ========================================
    // 2. Electric shock — first aid
    // ========================================
    {
      id: "elec_shock",
      title: "⚡ Electric shock — first aid and actions",
      description: "Electric shock can be fatal. Act quickly, but safely for yourself.",
      conditions: { elec_issue: ["shock"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Life-saving",
      tags: ["shock", "first_aid", "emergency"],
      steps: [
        "DO NOT touch the victim with bare hands while they are in contact with the power source — you will also be shocked",
        "Immediately disconnect power: turn off the breaker, unplug, cut the wire with insulated tools (wooden handle)",
        "If you can't disconnect — pull the victim away by dry clothing, belt, or rope. NOT by bare body, hands, or feet",
        "Call an ambulance: 03 (103/112). Report: 'Electric shock, need ambulance and resuscitation'",
        "Check consciousness, breathing, pulse. If no breathing — start CPR (artificial respiration + chest compressions)",
        "If the victim is conscious — lay them down, cover, do not give water/food. Treat burns with a sterile dressing",
        "Even with a 'mild' shock — see a doctor. Internal burns and heart rhythm disturbances may appear later",
        "Document the scene, appliance, outlet — for investigation and prevention"
      ],
      warnings: [
        "DO NOT touch the victim while they are live — you will become the second victim",
        "DO NOT use metal objects to pull them away — they conduct electricity",
        "After a shock, the heart can stop within minutes. Even if the person seems 'fine' — call an ambulance",
        "Electrical burns are deep, although small on the surface. Do not apply oils, creams — only sterile dressing"
      ]
    },
    // ========================================
    // 3. Tripped breaker — diagnostics
    // ========================================
    {
      id: "breaker_tripped",
      title: "🔌 Tripped breaker — diagnostics and resetting",
      description: "The breaker protects against overload and short circuits. Find the cause, fix it, then reset.",
      conditions: { elec_issue: ["breaker"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Power restored",
      tags: ["breaker", "diagnostics", "safety"],
      steps: [
        "Inspect the panel: which breaker tripped? Note the number (usually labeled: 'kitchen', 'room', 'bathroom outlets')",
        "Turn OFF ALL appliances on that circuit: unplug, turn off switches. Especially high-power ones: kettle, heater, washing machine, microwave",
        "Try to reset the breaker: push the handle up. If it trips immediately again — there's a wiring problem, DO NOT repeat",
        "If the breaker holds — turn appliances on one by one. When one trips the breaker — that appliance is faulty",
        "If the appliance is fine but the circuit is overloaded (kettle + heater + washing machine on one circuit) — use them one at a time",
        "If the breaker trips with no appliances on — there's a wiring problem (short circuit, damaged insulation). Call an electrician",
        "If an RCD (residual current device) tripped — it protects against current leakage. Cause: moisture, damaged insulation, faulty appliance. Check bathroom, kitchen",
        "If you don't know what to do — call an electrician. Cost: 1500–3000 RUB. It's cheaper than a fire"
      ],
      warnings: [
        "DO NOT hold the breaker manually in the on position — it can cause a fire from overheating wiring",
        "If the breaker trips immediately — DO NOT repeat more than 2–3 times. Each attempt = fire risk",
        "If there's a burning smell when resetting — turn off immediately, call electrician/firefighters",
        "Old fuses (fuse wire) — replace with breakers. It's legal and safe"
      ]
    },
    // ========================================
    // 4. No power — check and actions
    // ========================================
    {
      id: "no_power_check",
      title: "🚫 No power — check and actions",
      description: "The outage could be scheduled, emergency, or only at your place. Check, protect appliances.",
      conditions: { elec_issue: ["no_power"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Power restored or adapted",
      tags: ["no_power", "supply", "emergency"],
      steps: [
        "Check: is it only you or the neighbors too? Ask neighbors, look out the window — are lights on in nearby buildings?",
        "Check the panel: did the main breaker trip? If so — try resetting (see 'Tripped breaker' solution)",
        "Check the meter: is the display on? If not — possible disconnection for debt or line fault",
        "If there's no power in the building/area — call the utility company (number on the bill) or emergency: 01 (101/112)",
        "Unplug sensitive electronics: computer, TV, refrigerator (especially old ones). Power surges can occur when power returns",
        "Keep the refrigerator door closed — food will stay good for up to 4 hours. Don't open unnecessarily",
        "Prepare flashlights, candles (careful!), power banks for the phone. Charge power banks in advance",
        "If the outage is prolonged — don't open the freezer. Frozen food lasts 24–48 hours with the door closed",
        "If disconnected for debt — check: is it only yours? If the management company is at fault — it's illegal, complain to the prosecutor's office"
      ],
      warnings: [
        "DO NOT leave appliances plugged in during an outage — a power surge can fry everything when power returns",
        "Candles — fire hazard. Place on a non-combustible surface, never leave unattended, keep away from curtains",
        "Generator / inverter — use only outdoors or with good ventilation. Carbon monoxide kills",
        "If the outage is in winter and there's no heating — open faucets slightly to prevent pipes from freezing"
      ]
    },
    // ========================================
    // 5. Lights flicker / overload
    // ========================================
    {
      id: "lights_flicker",
      title: "💡 Lights flicker / dim when appliance turns on",
      description: "Flickering indicates network overload or poor contact.",
      conditions: { elec_issue: ["lights_flicker"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Flickering resolved",
      tags: ["flicker", "overload", "contact"],
      steps: [
        "Check: does the light flicker throughout the apartment or in one room? If throughout — problem at the supply (panel, meter, weak contact)",
        "If in one room — check which appliances are on. Possible overload (kettle + heater + washing machine)",
        "Try turning off some appliances — if the flickering stops, it's overload. Use appliances one at a time",
        "If appliances are off and lights still flicker — poor contact in a junction box or outlet. Call an electrician",
        "Check the bulbs: LED bulbs can flicker due to poor quality drivers. Replace with different ones",
        "Check the switches: if there's a dimmer — it can cause flickering. Try turning it off",
        "If none of the above helps — call an electrician. Wiring problem (weak twist, oxidation)"
      ],
      warnings: [
        "DO NOT ignore flickering — it can be a sign of a poor contact that heats up and can cause a fire",
        "DO NOT overload one outlet (kettle + heater + microwave) — it's dangerous",
        "If flickering is accompanied by a burning smell — immediately turn off power (see solution 1)",
        "Cheap LED bulbs often flicker — replace with better quality ones"
      ]
    },
    // ========================================
    // 6. Outlet not working
    // ========================================
    {
      id: "outlet_broken",
      title: "🔌 Outlet not working / sparking / plug falls out",
      description: "Outlets are a weak point in electrical wiring. Problems require attention.",
      conditions: { elec_issue: ["outlet_broken"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Outlet restored",
      tags: ["outlet", "repair", "safety"],
      steps: [
        "Check if the breaker for that outlet tripped (see 'Tripped breaker' solution)",
        "If the breaker is fine — check other outlets in the room. If all are dead — problem on the circuit",
        "If the outlet sparks — DO NOT use it, DO NOT insert plugs. It's dangerous! Turn off the breaker",
        "Check: does the plug fall out? Possibly loose contacts. Turn off the breaker and replace the outlet (call an electrician)",
        "If it's an old Soviet outlet — replace with a Euro (with grounding). It's safer and more modern",
        "If the outlet doesn't work but there is voltage (check with tester) — the problem is inside. Call an electrician",
        "If you're not confident — call an electrician. Outlet replacement costs 500–1500 RUB",
        "Do not attempt to repair an outlet without disconnecting power — 220V kills"
      ],
      warnings: [
        "DO NOT plug anything into a sparking outlet — it can cause a fire",
        "DO NOT repair an outlet without turning off the breaker — risk of electric shock",
        "If the outlet is warm to the touch — turn off the breaker, it's a sign of overheating",
        "For children — install child safety covers on outlets"
      ]
    },
    // ========================================
    // 7. Wiring inspection and replacement
    // ========================================
    {
      id: "wire_inspection",
      title: "🔌 Wiring inspection and replacement",
      description: "If the wiring is old, damaged, or problems are starting — it's time to inspect and replace.",
      conditions: { elec_issue: ["wire_visible", "outlet_broken", "lights_flicker", "breaker", "spark"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "1–3 days (for replacement)",
      yield_estimate: "Safe wiring",
      tags: ["wire", "inspection", "replacement"],
      steps: [
        "Inspect visible wires: insulation should not be damaged, exposed, or bent",
        "If a wire is exposed — DO NOT touch it, turn off power, call an electrician",
        "Check junction boxes — they should not be hot, sparking, or smelling",
        "If breakers trip regularly — it's a sign of faulty wiring",
        "If the building is old (Soviet wiring, aluminum) — replace with copper. Aluminum is brittle and often breaks",
        "Call an electrician to check insulation resistance and grounding (requires special equipment)",
        "When replacing wiring — use copper wires: 2.5 mm² for outlets, 1.5 mm² for lighting",
        "After replacement — be sure to check breakers and RCDs (residual current devices)",
        "Install RCDs in the bathroom, kitchen, and children's rooms — it prevents current leakage"
      ],
      warnings: [
        "Aluminum wiring is brittle and often breaks — replace with copper",
        "Old insulation is a fire hazard — don't postpone replacement",
        "Wire twists are unreliable — use terminal blocks (Wago, Legrand)",
        "If you're not an electrician — don't touch the wiring, call a specialist. 220V is deadly"
      ]
    }
  ]
};

// ===== EXPORT =====
window.electricityDataEn = electricityDataEn;
=======
// === MODULE: HOME — ELECTRICITY (ENGLISH) ===
const electricityDataEn = {
  category: "electricity",
  title: "⚡ Electricity",
  description: "Power outage, short circuit, electric shock, sparking — safe actions",

  questions: [
    {
      id: "elec_issue",
      text: "What happened? (select the main problem)",
      type: "single",
      options: [
        { id: "no_power", label: "🚫 No power / electricity was cut off", tags: ["no_power", "supply"] },
        { id: "spark", label: "⚡ Sparking / crackling / burning smell from outlet / panel", tags: ["spark", "fire_risk"] },
        { id: "shock", label: "⚡ Electric shock / tingling from appliance / faucet", tags: ["shock", "danger"] },
        { id: "breaker", label: "🔌 Breaker / fuse / RCD tripped", tags: ["breaker", "tripped"] },
        { id: "burned_smell", label: "🔥 Burning smell / smoke without visible fire", tags: ["smell", "fire_risk"] },
        { id: "lights_flicker", label: "💡 Lights flicker / dim when appliance turns on", tags: ["flicker", "overload"] },
        { id: "outlet_broken", label: "🔌 Outlet not working / sparking / plug falls out", tags: ["outlet", "broken"] },
        { id: "wire_visible", label: "🔌 Exposed wire / damaged insulation", tags: ["wire", "danger"] }
      ]
    },
    {
      id: "scope",
      text: "Where exactly is the problem?",
      type: "single",
      options: [
        { id: "whole_house", label: "🏠 Throughout the entire apartment / house", tags: ["whole", "supply"] },
        { id: "one_room", label: "🚪 In one room / on one circuit", tags: ["room", "circuit"] },
        { id: "one_device", label: "🔌 One appliance / one outlet", tags: ["device", "outlet"] },
        { id: "dont_know", label: "❓ Not sure", tags: ["unknown"] }
      ]
    },
    {
      id: "can_access_panel",
      text: "Do you have access to the electrical panel?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, the panel is accessible", tags: ["panel"] },
        { id: "no", label: "❌ No / panel is locked / in the hallway", tags: ["no_panel"] },
        { id: "scared", label: "⚠️ Afraid to touch / no experience", tags: ["scared"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have on hand?",
      type: "multi",
      options: [
        { id: "multimeter", label: "📟 Multimeter / voltage tester", tags: ["multimeter"] },
        { id: "flashlight", label: "🔦 Flashlight", tags: ["flashlight"] },
        { id: "fire_extinguisher", label: "🧯 Fire extinguisher (CO2 / powder)", tags: ["extinguisher"] },
        { id: "gloves", label: "🧤 Gloves (insulated)", tags: ["gloves"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "has_children",
      text: "Are there children or elderly people in the apartment?",
      type: "single",
      options: [
        { id: "kids_elderly", label: "👶 Yes, there are children or elderly people", tags: ["vulnerable"] },
        { id: "no", label: "👤 No", tags: ["adults_only"] }
      ]
    },
    {
      id: "weather_season",
      text: "What season is it?",
      type: "single",
      options: [
        { id: "winter", label: "❄️ Winter (cold, risk of frozen pipes)", tags: ["winter", "heating"] },
        { id: "summer", label: "☀️ Summer / warm", tags: ["summer"] },
        { id: "season_other", label: "🌤️ Spring / autumn", tags: ["moderate"] }
      ]
    },
    {
      id: "outlet_type",
      text: "What type of outlet is it?",
      condition: { elec_issue: ["outlet_broken"] },
      options: [
        { id: "old_soviet", label: "📟 Old Soviet (round holes)", tags: ["old"] },
        { id: "euro", label: "🔌 Euro (with grounding)", tags: ["euro"] },
        { id: "unknown", label: "❓ Don't know / can't see", tags: ["unknown"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Sparking / burning smell — fire hazard
    // ========================================
    {
      id: "elec_fire_immediate",
      title: "🔥 Sparking / burning smell — immediate actions",
      description: "An electrical fire develops in seconds. The main thing is to disconnect power and evacuate.",
      conditions: { elec_issue: ["spark", "burned_smell"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Fire prevention",
      tags: ["fire", "electricity", "emergency"],
      steps: [
        "DO NOT touch burning or smoking items with bare hands. DO NOT use water on electrical appliances",
        "Immediately turn off the electricity at the panel: switch ALL breakers down, including the main incoming breaker",
        "If the panel is inaccessible — unplug the appliance (if safe) or turn it off with the button",
        "If flames appear — use a fire extinguisher (CO2 or powder). NOT foam and NOT water — risk of electric shock",
        "If the fire is in the panel — close the panel door (limits oxygen), call the fire department: 01 (101/112)",
        "Evacuate the apartment if smoke is thick, fire is spreading, or you're not confident in your abilities",
        "Call an emergency electrician: 01 (101/112) or the building management's emergency service. Do not turn power back on until inspected",
        "After extinguishing — do not touch burnt wires or appliances until the electrician arrives. They may still be live"
      ],
      warnings: [
        "Water + electricity = deadly. NEVER extinguish electrical appliances with water",
        "Fire extinguisher must be CO2 (carbon dioxide) or powder. Foam — only after full disconnection",
        "If there's a burning smell but no visible fire — it could be smoldering inside the wall. Turn off power, call firefighters",
        "DO NOT try to disassemble panels, outlets, or wires without experience — 220V kills"
      ]
    },
    // ========================================
    // 2. Electric shock — first aid
    // ========================================
    {
      id: "elec_shock",
      title: "⚡ Electric shock — first aid and actions",
      description: "Electric shock can be fatal. Act quickly, but safely for yourself.",
      conditions: { elec_issue: ["shock"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Life-saving",
      tags: ["shock", "first_aid", "emergency"],
      steps: [
        "DO NOT touch the victim with bare hands while they are in contact with the power source — you will also be shocked",
        "Immediately disconnect power: turn off the breaker, unplug, cut the wire with insulated tools (wooden handle)",
        "If you can't disconnect — pull the victim away by dry clothing, belt, or rope. NOT by bare body, hands, or feet",
        "Call an ambulance: 03 (103/112). Report: 'Electric shock, need ambulance and resuscitation'",
        "Check consciousness, breathing, pulse. If no breathing — start CPR (artificial respiration + chest compressions)",
        "If the victim is conscious — lay them down, cover, do not give water/food. Treat burns with a sterile dressing",
        "Even with a 'mild' shock — see a doctor. Internal burns and heart rhythm disturbances may appear later",
        "Document the scene, appliance, outlet — for investigation and prevention"
      ],
      warnings: [
        "DO NOT touch the victim while they are live — you will become the second victim",
        "DO NOT use metal objects to pull them away — they conduct electricity",
        "After a shock, the heart can stop within minutes. Even if the person seems 'fine' — call an ambulance",
        "Electrical burns are deep, although small on the surface. Do not apply oils, creams — only sterile dressing"
      ]
    },
    // ========================================
    // 3. Tripped breaker — diagnostics
    // ========================================
    {
      id: "breaker_tripped",
      title: "🔌 Tripped breaker — diagnostics and resetting",
      description: "The breaker protects against overload and short circuits. Find the cause, fix it, then reset.",
      conditions: { elec_issue: ["breaker"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Power restored",
      tags: ["breaker", "diagnostics", "safety"],
      steps: [
        "Inspect the panel: which breaker tripped? Note the number (usually labeled: 'kitchen', 'room', 'bathroom outlets')",
        "Turn OFF ALL appliances on that circuit: unplug, turn off switches. Especially high-power ones: kettle, heater, washing machine, microwave",
        "Try to reset the breaker: push the handle up. If it trips immediately again — there's a wiring problem, DO NOT repeat",
        "If the breaker holds — turn appliances on one by one. When one trips the breaker — that appliance is faulty",
        "If the appliance is fine but the circuit is overloaded (kettle + heater + washing machine on one circuit) — use them one at a time",
        "If the breaker trips with no appliances on — there's a wiring problem (short circuit, damaged insulation). Call an electrician",
        "If an RCD (residual current device) tripped — it protects against current leakage. Cause: moisture, damaged insulation, faulty appliance. Check bathroom, kitchen",
        "If you don't know what to do — call an electrician. Cost: 1500–3000 RUB. It's cheaper than a fire"
      ],
      warnings: [
        "DO NOT hold the breaker manually in the on position — it can cause a fire from overheating wiring",
        "If the breaker trips immediately — DO NOT repeat more than 2–3 times. Each attempt = fire risk",
        "If there's a burning smell when resetting — turn off immediately, call electrician/firefighters",
        "Old fuses (fuse wire) — replace with breakers. It's legal and safe"
      ]
    },
    // ========================================
    // 4. No power — check and actions
    // ========================================
    {
      id: "no_power_check",
      title: "🚫 No power — check and actions",
      description: "The outage could be scheduled, emergency, or only at your place. Check, protect appliances.",
      conditions: { elec_issue: ["no_power"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Power restored or adapted",
      tags: ["no_power", "supply", "emergency"],
      steps: [
        "Check: is it only you or the neighbors too? Ask neighbors, look out the window — are lights on in nearby buildings?",
        "Check the panel: did the main breaker trip? If so — try resetting (see 'Tripped breaker' solution)",
        "Check the meter: is the display on? If not — possible disconnection for debt or line fault",
        "If there's no power in the building/area — call the utility company (number on the bill) or emergency: 01 (101/112)",
        "Unplug sensitive electronics: computer, TV, refrigerator (especially old ones). Power surges can occur when power returns",
        "Keep the refrigerator door closed — food will stay good for up to 4 hours. Don't open unnecessarily",
        "Prepare flashlights, candles (careful!), power banks for the phone. Charge power banks in advance",
        "If the outage is prolonged — don't open the freezer. Frozen food lasts 24–48 hours with the door closed",
        "If disconnected for debt — check: is it only yours? If the management company is at fault — it's illegal, complain to the prosecutor's office"
      ],
      warnings: [
        "DO NOT leave appliances plugged in during an outage — a power surge can fry everything when power returns",
        "Candles — fire hazard. Place on a non-combustible surface, never leave unattended, keep away from curtains",
        "Generator / inverter — use only outdoors or with good ventilation. Carbon monoxide kills",
        "If the outage is in winter and there's no heating — open faucets slightly to prevent pipes from freezing"
      ]
    },
    // ========================================
    // 5. Lights flicker / overload
    // ========================================
    {
      id: "lights_flicker",
      title: "💡 Lights flicker / dim when appliance turns on",
      description: "Flickering indicates network overload or poor contact.",
      conditions: { elec_issue: ["lights_flicker"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Flickering resolved",
      tags: ["flicker", "overload", "contact"],
      steps: [
        "Check: does the light flicker throughout the apartment or in one room? If throughout — problem at the supply (panel, meter, weak contact)",
        "If in one room — check which appliances are on. Possible overload (kettle + heater + washing machine)",
        "Try turning off some appliances — if the flickering stops, it's overload. Use appliances one at a time",
        "If appliances are off and lights still flicker — poor contact in a junction box or outlet. Call an electrician",
        "Check the bulbs: LED bulbs can flicker due to poor quality drivers. Replace with different ones",
        "Check the switches: if there's a dimmer — it can cause flickering. Try turning it off",
        "If none of the above helps — call an electrician. Wiring problem (weak twist, oxidation)"
      ],
      warnings: [
        "DO NOT ignore flickering — it can be a sign of a poor contact that heats up and can cause a fire",
        "DO NOT overload one outlet (kettle + heater + microwave) — it's dangerous",
        "If flickering is accompanied by a burning smell — immediately turn off power (see solution 1)",
        "Cheap LED bulbs often flicker — replace with better quality ones"
      ]
    },
    // ========================================
    // 6. Outlet not working
    // ========================================
    {
      id: "outlet_broken",
      title: "🔌 Outlet not working / sparking / plug falls out",
      description: "Outlets are a weak point in electrical wiring. Problems require attention.",
      conditions: { elec_issue: ["outlet_broken"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Outlet restored",
      tags: ["outlet", "repair", "safety"],
      steps: [
        "Check if the breaker for that outlet tripped (see 'Tripped breaker' solution)",
        "If the breaker is fine — check other outlets in the room. If all are dead — problem on the circuit",
        "If the outlet sparks — DO NOT use it, DO NOT insert plugs. It's dangerous! Turn off the breaker",
        "Check: does the plug fall out? Possibly loose contacts. Turn off the breaker and replace the outlet (call an electrician)",
        "If it's an old Soviet outlet — replace with a Euro (with grounding). It's safer and more modern",
        "If the outlet doesn't work but there is voltage (check with tester) — the problem is inside. Call an electrician",
        "If you're not confident — call an electrician. Outlet replacement costs 500–1500 RUB",
        "Do not attempt to repair an outlet without disconnecting power — 220V kills"
      ],
      warnings: [
        "DO NOT plug anything into a sparking outlet — it can cause a fire",
        "DO NOT repair an outlet without turning off the breaker — risk of electric shock",
        "If the outlet is warm to the touch — turn off the breaker, it's a sign of overheating",
        "For children — install child safety covers on outlets"
      ]
    },
    // ========================================
    // 7. Wiring inspection and replacement
    // ========================================
    {
      id: "wire_inspection",
      title: "🔌 Wiring inspection and replacement",
      description: "If the wiring is old, damaged, or problems are starting — it's time to inspect and replace.",
      conditions: { elec_issue: ["wire_visible", "outlet_broken", "lights_flicker", "breaker", "spark"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "1–3 days (for replacement)",
      yield_estimate: "Safe wiring",
      tags: ["wire", "inspection", "replacement"],
      steps: [
        "Inspect visible wires: insulation should not be damaged, exposed, or bent",
        "If a wire is exposed — DO NOT touch it, turn off power, call an electrician",
        "Check junction boxes — they should not be hot, sparking, or smelling",
        "If breakers trip regularly — it's a sign of faulty wiring",
        "If the building is old (Soviet wiring, aluminum) — replace with copper. Aluminum is brittle and often breaks",
        "Call an electrician to check insulation resistance and grounding (requires special equipment)",
        "When replacing wiring — use copper wires: 2.5 mm² for outlets, 1.5 mm² for lighting",
        "After replacement — be sure to check breakers and RCDs (residual current devices)",
        "Install RCDs in the bathroom, kitchen, and children's rooms — it prevents current leakage"
      ],
      warnings: [
        "Aluminum wiring is brittle and often breaks — replace with copper",
        "Old insulation is a fire hazard — don't postpone replacement",
        "Wire twists are unreliable — use terminal blocks (Wago, Legrand)",
        "If you're not an electrician — don't touch the wiring, call a specialist. 220V is deadly"
      ]
    }
  ]
};

// ===== EXPORT =====
window.electricityDataEn = electricityDataEn;
>>>>>>> 57522793a60f67c90dd6befc66693a2a0762d34e
