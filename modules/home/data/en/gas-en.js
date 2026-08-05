// === MODULE: HOME — GAS (ENGLISH) ===
const gasDataEn = {
  category: "gas",
  title: "⛽ Gas",
  description: "Gas leak, smell, shutoff, actions upon detection",

  questions: [
    {
      id: "gas_issue",
      text: "What happened? (select the main problem)",
      type: "single",
      options: [
        { id: "smell", label: "👃 I smell gas", tags: ["smell", "leak"] },
        { id: "no_gas", label: "🚫 No gas (stove won't light, boiler not working)", tags: ["no_gas", "supply"] },
        { id: "yellow_flame", label: "🔥 Flame is yellow / sooty / crackling", tags: ["yellow", "incomplete"] },
        { id: "co_alarm", label: "☠️ Carbon monoxide (CO) alarm went off", tags: ["co", "alarm"] },
        { id: "explosion", label: "💥 Explosion / bang / fire from gas", tags: ["explosion", "fire"] },
        { id: "gas_ignited", label: "🔥 Gas ignited on stove / heater but won't go out", tags: ["ignited", "danger"] },
        { id: "smell_street", label: "👃 Gas smell outside / in the entrance", tags: ["street", "building"] }
      ]
    },
    {
      id: "smell_location",
      text: "Where do you smell gas?",
      condition: { gas_issue: ["smell", "smell_street"] },
      options: [
        { id: "kitchen", label: "🍳 In the kitchen (stove, oven)", tags: ["kitchen"] },
        { id: "bathroom", label: "🚿 In the bathroom (water heater, boiler)", tags: ["bathroom"] },
        { id: "hallway", label: "🚪 In the hallway / entrance", tags: ["hallway"] },
        { id: "everywhere", label: "🚨 Everywhere / strong smell", tags: ["strong"] },
        { id: "outside", label: "🏢 Outside / in the yard", tags: ["outside"] }
      ]
    },
    {
      id: "gas_appliance",
      text: "Which gas appliance is being used?",
      options: [
        { id: "stove", label: "🍳 Gas stove / oven", tags: ["stove"] },
        { id: "water_heater", label: "🚿 Gas water heater / boiler", tags: ["heater"] },
        { id: "boiler", label: "🔥 Gas heating boiler", tags: ["boiler"] },
        { id: "balloon", label: "🛢️ Gas cylinder", tags: ["balloon"] },
        { id: "none", label: "❓ No gas appliances / not sure", tags: ["none"] }
      ]
    },
    {
      id: "has_shutoff_key",
      text: "Do you have a shut-off key (at the meter / pipe)?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, I know where it is and have a key/screwdriver", tags: ["shutoff_yes"] },
        { id: "no", label: "❌ No / don't know where / no key", tags: ["shutoff_no"] },
        { id: "unknown", label: "❓ Not sure", tags: ["shutoff_unknown"] }
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
        { id: "pets", label: "🐕 Pets", tags: ["pets"] }
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
      id: "ventilation_status",
      text: "Is the ventilation working? (check the exhaust fan / window)",
      options: [
        { id: "working", label: "✅ Yes, ventilation is working", tags: ["vent_yes"] },
        { id: "not_working", label: "❌ No, ventilation is not working / blocked", tags: ["vent_no"] },
        { id: "unknown", label: "❓ Don't know / haven't checked", tags: ["vent_unknown"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Gas leak — emergency actions
    // ========================================
    {
      id: "gas_leak_emergency",
      title: "🚨 Gas leak — emergency actions",
      description: "Gas is explosive. One spark = explosion. Act instantly, without panic, without sparks.",
      conditions: { gas_issue: ["smell", "explosion"], smell_location: ["kitchen", "bathroom", "hallway", "everywhere"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Explosion prevention",
      tags: ["gas", "leak", "emergency"],
      steps: [
        "DO NOT panic. DO NOT turn lights or switches on or off — spark = explosion. DO NOT call from inside the apartment on a landline",
        "DO NOT light matches, lighters, candles. DO NOT smoke. DO NOT use the doorbell (electric)",
        "Open windows and doors wide — ventilation will disperse the gas. Do this carefully, without sudden movements",
        "Close the shut-off valve on the gas pipe (usually under the stove or at the meter). Turn the handle ACROSS the pipe (90°)",
        "If the valve is at the meter — use a key or screwdriver (flathead). If you don't know where it is — run, don't waste time",
        "LEAVE the apartment, close the door. DO NOT use the elevator — sparking. Use the stairs",
        "From outside / from a safe distance, call: 04 (or 104/112 from mobile). Report: 'Gas leak, address, floor'",
        "Warn neighbors (knock on doors, shout), but DO NOT use electric doorbells",
        "Do not return to the apartment until the gas service arrives and gives permission. This may take 30–60 minutes"
      ],
      warnings: [
        "DO NOT turn lights on/off — this is the main rule. Any spark = explosion. Even static electricity is dangerous",
        "DO NOT open the refrigerator — the compressor creates a spark when starting",
        "DO NOT use a mobile phone INSIDE the apartment — go outside, then call",
        "The gas smell is artificially added (mercaptan) — gas without smell is also dangerous. If the stove won't light but you don't smell gas — still check",
        "Gas is lighter than air (methane) — accumulates near the ceiling. Propane-butane gas (cylinders) is heavier than air — accumulates near the floor"
      ]
    },
    // ========================================
    // 2. Carbon monoxide (CO) alarm
    // ========================================
    {
      id: "co_alarm_action",
      title: "☠️ Carbon monoxide alarm — actions",
      description: "Carbon monoxide (CO) is colorless, odorless, kills in minutes. Alarm = immediate evacuation.",
      conditions: { gas_issue: ["co_alarm"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 minutes",
      yield_estimate: "Prevention of poisoning",
      tags: ["co", "poisoning", "emergency"],
      steps: [
        "Immediately leave the building: open windows along the way, exit quickly but without panic. DO NOT waste time gathering belongings",
        "If someone feels dizzy, nauseous, weak — get them out / carry them out. CO acts quickly, consciousness is lost suddenly",
        "Outside: take deep breaths of fresh air. Call an ambulance: 03 (103/112). Report: 'Carbon monoxide poisoning, address, number of victims'",
        "DO NOT return to the building until gas workers arrive and ventilate. Even for 1 minute — deadly dangerous",
        "For victims: lay them down, cover, monitor breathing. If breathing stops — CPR (artificial respiration + chest compressions)",
        "Even if feeling improves — see a doctor. CO binds to hemoglobin, effects appear hours later",
        "After gas workers inspect: check the chimney, ventilation, boiler/water heater condition. A faulty appliance = repeat poisoning",
        "Install a CO detector in every room with a gas appliance and in bedrooms. Cost: 500–2000 RUB — this is life"
      ],
      warnings: [
        "CO is colorless, odorless. You won't feel poisoning until you collapse. CO detector is MANDATORY in every home with gas",
        "Poisoning symptoms: dizziness, nausea, weakness, headache, hallucinations. Often confused with the flu",
        "DO NOT try to 'ventilate and go back in' — CO may remain in victims' blood, and in the building it can accumulate again",
        "Improper boiler/water heater installation, blocked chimney, lack of ventilation — the main causes of CO poisoning"
      ]
    },
    // ========================================
    // 3. Yellow flame / soot
    // ========================================
    {
      id: "yellow_flame_fix",
      title: "🔥 Yellow flame / soot — why and what to do",
      description: "Blue flame = complete combustion. Yellow = incomplete, produces CO and soot. This is dangerous.",
      conditions: { gas_issue: ["yellow_flame"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Safe combustion",
      tags: ["gas", "maintenance", "safety"],
      steps: [
        "Turn off the appliance. Let it cool for 10 minutes. Check: are the burner nozzles blocked with grease, dust, food?",
        "Clean the nozzles: with a needle, toothpick, special brush. Do not use metal objects — you may damage them",
        "Check if the burner is wet? Water (from boiling, spilled liquid) causes yellow flame. Wipe dry",
        "Check the air dampers / regulators: there is an air supply regulator on the burner (ring, lever). Increase air supply",
        "If the flame is yellow on all burners — possibly low gas pressure or contaminated gas. Call the gas service: 04 (104)",
        "If the oven is smoking — check the grease on the bottom, heating elements. Clean. Check the door seal",
        "After cleaning, turn on the appliance. The flame should be blue with a small yellow tip (1–2 mm). If it's all yellow — call a gas technician",
        "Yellow flame = CO + soot. Long-term use = poisoning + fire from soot in the chimney"
      ],
      warnings: [
        "Yellow flame = carbon monoxide (CO) emission. Even a small amount of CO accumulates and poisons",
        "DO NOT use an appliance with a yellow flame. This is not 'normal', it's a malfunction",
        "Soot from yellow flame deposits in the chimney and can cause a fire. Check the chimney once a year",
        "If the flame 'jumps' or crackles — possibly water or air has entered the pipe. Turn off, ventilate, call a gas technician"
      ]
    },
    // ========================================
    // 4. Gas ignited — won't go out
    // ========================================
    {
      id: "gas_ignited",
      title: "🔥 Gas ignited on stove / heater but won't go out",
      description: "If gas is burning but won't go out — don't try to extinguish, shut off the gas supply.",
      conditions: { gas_issue: ["gas_ignited"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Gas supply stopped",
      tags: ["gas", "fire", "emergency"],
      steps: [
        "DO NOT try to extinguish the fire with water — it can cause an explosion",
        "If accessible — shut off the valve on the gas pipe (turn across the pipe)",
        "If there is no valve or it's inaccessible — turn the burner knob to the 'off' position (if safe)",
        "If a gas cylinder is burning — DO NOT touch it, DO NOT move it, DO NOT cover with a wet cloth. Call firefighters: 01 (101/112)",
        "Evacuate everyone from the apartment, close the door. Firefighters will put it out faster than you can risk",
        "If the flame is small and you're confident — you can use a powder fire extinguisher, aiming at the base of the flame",
        "After shutting off the gas, the fire will go out on its own within 1–2 minutes (remaining gas in the pipe burns out)"
      ],
      warnings: [
        "DO NOT extinguish gas with water — water doesn't extinguish a gas flame, it creates steam and can spread sparks",
        "If a cylinder is heating up and hissing — evacuate immediately, the cylinder may explode",
        "A burning gas cylinder cannot be touched — it may explode from movement",
        "If the fire is taller than 1 meter — do not try to extinguish it yourself, call firefighters"
      ]
    },
    // ========================================
    // 5. Gas smell in the building / outside
    // ========================================
    {
      id: "gas_smell_building",
      title: "🚪 Gas smell in the entrance / outside",
      description: "Gas smell in a common area — a threat to all residents. Act quickly.",
      conditions: { gas_issue: ["smell_street"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2–5 minutes",
      yield_estimate: "Resident safety",
      tags: ["gas", "building", "emergency"],
      steps: [
        "DO NOT press doorbell buttons, DO NOT turn on lights in the entrance — spark = explosion",
        "Open the entrance doors wide (if possible)",
        "Call the gas service from outside: 04 (104/112). Report the exact address, entrance, floor",
        "Warn residents: knock on doors, shout, but DO NOT use electric doorbells",
        "If the smell is strong and you can smell it in your apartment — evacuate from the entrance",
        "If possible — shut off the gas valve at the entrance (usually in the basement, but don't go without experience)",
        "Do not return to the entrance until gas workers arrive. Wait outside",
        "If the smell is very strong — also call the Ministry of Emergency Situations (01/112) to cordon off the area"
      ],
      warnings: [
        "Gas in the entrance is a shared danger. Don't wait for someone else to call",
        "DO NOT use the elevator — sparking can ignite the gas",
        "If there is a technical floor/basement on the landing — the leak may be there. Inform the gas workers",
        "DO NOT try to find the source of the leak yourself — explosive"
      ]
    },
    // ========================================
    // 6. No gas — check and actions
    // ========================================
    {
      id: "no_gas_supply",
      title: "🚫 No gas — check and actions",
      description: "Gas shutoff — planned, emergency, or for debt. Check the cause, switch to alternatives.",
      conditions: { gas_issue: ["no_gas"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Restored or adapted",
      tags: ["gas", "supply", "emergency"],
      steps: [
        "Check: is it only you or the neighbors too? Ask neighbors, look for announcements in the entrance",
        "Check the gas valve: it may have been accidentally turned off during cleaning. The valve should be PARALLEL to the pipe",
        "Check the gas meter: if the needle doesn't move when the stove is on — the problem is before the meter (gas service)",
        "If there's no gas in the building — call the gas service: 04 (104/112). Ask: planned outage or emergency, restoration timeline",
        "If disconnected for debt — check your bills. The gas service has the right to disconnect for non-payment (Article 30 of the Housing Code), but must give 20 days notice",
        "Switch to an electric stove / multicooker / induction cooktop. Buy an electric kettle. Cook outside (grill, camping stove)",
        "If the gas boiler doesn't work — turn on electric heaters, heated floors, air conditioner (heating mode). Monitor the wiring",
        "If the outage is prolonged (winter) — contact the management company / HOA. They are required to provide alternative heating (Article 15 of the Housing Code)"
      ],
      warnings: [
        "DO NOT use a gas stove for heating — this causes CO poisoning and fire",
        "Portable gas stoves inside the apartment are dangerous. Only on the balcony with open windows or outside",
        "If disconnected for debt — pay the debt, submit a request for reconnection. Timeline: 3 working days after payment",
        "DO NOT try to open the shut-off valves in the entrance — this is vandalism, criminal liability, explosive"
      ]
    },
    // ========================================
    // 7. Gas equipment maintenance and prevention
    // ========================================
    {
      id: "gas_maintenance",
      title: "🔧 Gas equipment maintenance and prevention",
      description: "Regular maintenance is the key to safety. Don't skimp on inspections.",
      conditions: { gas_issue: ["smell", "yellow_flame", "no_gas"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "1–3 days (calling a technician)",
      yield_estimate: "Safe gas operation",
      tags: ["gas", "maintenance", "safety"],
      steps: [
        "Sign a maintenance contract for gas equipment with a licensed organization",
        "Have chimneys and ventilation checked 2 times a year (before and after the heating season)",
        "Clean stove/water heater burners and nozzles at least once every 3 months",
        "Check flexible hoses (connections) for integrity — replace every 5 years",
        "Install a carbon monoxide (CO) detector and a gas leak detector (CH₄ / propane) in every room with gas appliances",
        "DO NOT use gas cylinders inside the apartment — store only outside, in a ventilated area",
        "When replacing a gas stove / water heater / boiler — call only a certified specialist",
        "Check the flame: it should be blue. Yellow flame = call a technician"
      ],
      warnings: [
        "Saving on gas maintenance = risk of explosion and poisoning",
        "DO NOT repair gas appliances yourself — it's dangerous and illegal",
        "Flexible hoses have a service life — do not use old or damaged ones",
        "If you're not sure about the appliance's condition — do not turn it on, call a technician"
      ]
    }
  ]
};

// ===== EXPORT =====
window.gasDataEn = gasDataEn;
