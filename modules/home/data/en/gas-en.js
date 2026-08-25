// modules/home/data/en/gas-en.js
// === MODULE: HOME — GAS ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "home",
    category: "gas",
    version: "1.0.0",
    lang: "en",
    title: "Gas",
    description: "Gas leak, smell, shutoff, CO alarm, explosion — actions when detected",
    icon: "⛽",
    color: "#0891b2"
  },

  questions: [
    {
      id: "gas_issue",
      type: "single",
      text: "What happened?",
      options: [
        { id: "smell", label: "😷 I smell gas", tags: ["smell"] },
        { id: "no_gas", label: "❌ No gas (stove won't light, boiler not working)", tags: ["no_gas"] },
        { id: "yellow_flame", label: "🔥 Yellow flame / sooting / crackling", tags: ["yellow"] },
        { id: "co_alarm", label: "🚨 Carbon monoxide (CO) alarm triggered", tags: ["co_alarm"] },
        { id: "explosion", label: "💥 Explosion / bang / fire from gas", tags: ["explosion"] },
        { id: "smell_hallway", label: "🚪 Gas smell in hallway / from neighbors", tags: ["smell_hallway"] },
        { id: "cylinder", label: "🛢️ Problem with gas cylinder", tags: ["cylinder"] }
      ]
    },
    {
      id: "smell_location",
      type: "single",
      text: "Where do you smell gas?",
      conditions: { gas_issue: ["smell", "smell_hallway"] },
      options: [
        { id: "smell_kitchen", label: "🍳 In the kitchen (stove, oven)", tags: ["kitchen"] },
        { id: "smell_bathroom", label: "🚿 In the bathroom (water heater, boiler)", tags: ["bathroom"] },
        { id: "smell_hallway", label: "🚪 In the hallway / stairwell", tags: ["hallway"] },
        { id: "smell_everywhere", label: "🏠 Everywhere / strong smell", tags: ["strong"] }
      ]
    },
    {
      id: "gas_appliance",
      type: "single",
      text: "Which gas appliance is used?",
      conditions: { gas_issue: ["smell", "yellow", "no_gas", "co_alarm"] },
      options: [
        { id: "appliance_stove", label: "🍳 Gas stove / oven", tags: ["stove"] },
        { id: "appliance_heater", label: "🔥 Gas water heater / boiler", tags: ["heater"] },
        { id: "appliance_boiler", label: "❄️ Gas heating boiler", tags: ["boiler"] },
        { id: "appliance_none", label: "❓ No gas appliances / not sure", tags: ["none"] }
      ]
    },
    {
      id: "gas_type",
      type: "single",
      text: "What type of gas do you use?",
      conditions: { gas_issue: ["smell", "no_gas", "yellow", "cylinder"] },
      options: [
        { id: "gas_main", label: "🏙️ Mains gas (centralized supply)", tags: ["main"] },
        { id: "gas_cylinder", label: "🛢️ Cylinder gas (propane-butane)", tags: ["cylinder_gas"] },
        { id: "gas_unknown", label: "❓ Don't know", tags: ["unknown_gas"] }
      ]
    },
    {
      id: "has_gas_meter",
      type: "single",
      text: "Do you have a gas meter?",
      conditions: { gas_issue: ["no_gas", "smell", "yellow"] },
      options: [
        { id: "meter_yes", label: "✅ Yes, there is a meter", tags: ["meter_yes"] },
        { id: "meter_no", label: "❌ No meter", tags: ["meter_no"] },
        { id: "meter_unknown", label: "❓ Don't know", tags: ["meter_unknown"] }
      ]
    },
    {
      id: "has_draft",
      type: "single",
      text: "Have you checked the draft in the chimney / ventilation?",
      conditions: { gas_issue: ["yellow", "co_alarm", "smell"] },
      options: [
        { id: "draft_yes", label: "✅ Yes, there is draft", tags: ["draft_yes"] },
        { id: "draft_no", label: "❌ No draft / poor draft", tags: ["draft_no"] },
        { id: "draft_unknown", label: "❓ Don't know / haven't checked", tags: ["draft_unknown"] }
      ]
    },
    {
      id: "has_debt_gas",
      type: "single",
      text: "Is there any debt for gas?",
      conditions: { gas_issue: ["no_gas"] },
      options: [
        { id: "debt_gas_yes", label: "💰 Yes, there is debt", tags: ["debt_yes"] },
        { id: "debt_gas_no", label: "✅ No, I pay on time", tags: ["debt_no"] },
        { id: "debt_gas_unknown", label: "❓ Don't know / possibly", tags: ["debt_unknown"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. GAS LEAK — EMERGENCY ACTIONS
    // ============================================================
    {
      id: "gas_leak_emergency",
      title: "🚨 Gas leak — emergency actions",
      description: "Gas is explosive. One spark = explosion. Act instantly, without panic, without sparks.",
      conditions: { gas_issue: ["smell"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Explosion prevented",
      tags: ["gas", "leak", "emergency"],
      steps: [
        "DON'T panic. DON'T turn on or off lights, outlets, switches — spark = explosion. DON'T call from inside the apartment on a landline",
        "DON'T light matches, lighters, candles. DON'T smoke. DON'T use the doorbell (electric)",
        "Open windows and doors wide — ventilation will disperse the gas. Do this carefully, without sudden movements",
        "Close the shutoff valve on the gas pipe (usually under the stove or near the meter). Turn the handle ACROSS the pipe (90°)",
        "If the valve is at the meter — turn with a wrench or screwdriver. If you don't know where — run, don't waste time",
        "LEAVE the apartment, close the door. Don't use the elevator — sparks. Go down the stairs",
        "From the street / safe distance call: 04 (104 or 112 from mobile). Report: 'Gas leak, address, floor'",
        "Warn neighbors (knock on doors, shout), but DON'T ring electric doorbells",
        "Don't return to the apartment until the gas service arrives and gives permission"
      ],
      warnings: [
        "DON'T turn on/off lights — this is the main rule. Any spark = explosion",
        "DON'T open the refrigerator — the compressor sparks when starting",
        "DON'T use a mobile phone INSIDE the apartment — go outside, then call"
      ]
    },
    // ============================================================
    // 2. GAS SMELL IN HALLWAY
    // ============================================================
    {
      id: "gas_smell_hallway",
      title: "🚪 Gas smell in the hallway — action plan",
      description: "Gas smell in the hallway is dangerous for the whole building. Immediately report and leave.",
      conditions: { gas_issue: ["smell_hallway"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Explosion in the whole building prevented",
      tags: ["gas", "hallway", "emergency"],
      steps: [
        "DON'T use the elevator — sparks. Go down the stairs (carefully, don't rush)",
        "DON'T turn on lights in the hallway — don't press switches",
        "DON'T ring neighbors' doorbells (electric)",
        "Go outside, move to a safe distance (50 meters)",
        "Call the gas service: 04 (104 or 112 from mobile). Report: 'Gas smell in hallway, address'",
        "If you know which apartment the smell is from — report it. If not — say there's a smell in the hallway",
        "Warn people entering the building not to enter",
        "Wait for the gas service to arrive. Don't enter the building until they allow"
      ],
      warnings: [
        "Gas smell in the hallway can cause the whole building to explode",
        "DON'T open windows in the hallway — this can create a draft and sparks",
        "DON'T smoke or use lighters near the entrance"
      ]
    },
    // ============================================================
    // 3. GAS EXPLOSION / BANG
    // ============================================================
    {
      id: "gas_explosion",
      title: "💥 Gas explosion / bang — actions after",
      description: "A gas explosion is a disaster. If you're alive — immediately leave the building and call services.",
      conditions: { gas_issue: ["explosion"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Lives saved",
      tags: ["explosion", "gas", "emergency"],
      steps: [
        "DON'T panic. If you're not injured — leave immediately. Don't look for things, documents — life is more important",
        "If there are injured — call an ambulance: 03 (103/112). Provide first aid: stop bleeding, carry outside",
        "If there's fire — don't try to extinguish it yourself. A gas fire is dangerous due to repeated explosion. Call firefighters: 01 (101/112)",
        "Turn off the gas at the apartment inlet (if safe and the valve is accessible)",
        "Turn off the electricity at the panel (if safe and not in the damaged area)",
        "Go outside, move 50 meters away. Don't stand under balconies, walls — structures may fall",
        "Report to the gas service: 04 (104/112). Report the explosion, address, possible injured",
        "Don't return to the building until services allow — possible repeated explosion or collapse"
      ],
      warnings: [
        "Gas explosion can cause structural collapse — don't stand under damaged walls",
        "DON'T smoke or use open flame near the explosion site",
        "If you smell gas after the explosion — don't turn on electricity, don't enter"
      ]
    },
    // ============================================================
    // 4. CARBON MONOXIDE (CO) ALARM
    // ============================================================
    {
      id: "co_alarm_action",
      title: "☠️ Carbon monoxide (CO) alarm — immediate evacuation",
      description: "CO is colorless, odorless, kills in minutes. Alarm = immediate evacuation.",
      conditions: { gas_issue: ["co_alarm"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Survival from poisoning",
      tags: ["co", "poisoning", "emergency"],
      steps: [
        "Immediately leave the room: open windows on the way, leave quickly but without panic. DON'T waste time on belongings",
        "If someone is dizzy, nauseous, weak — carry them out. CO acts quickly, consciousness is lost suddenly",
        "Outside: breathe deeply fresh air. Call an ambulance: 03 (103/112). Report: 'Carbon monoxide poisoning, address, number of victims'",
        "DON'T return to the room until gas workers arrive and ventilate. Even 1 minute is deadly",
        "For victims: lay down, cover, monitor breathing. If breathing stops — CPR",
        "Even if feeling better — see a doctor. CO binds to hemoglobin, effects appear hours later",
        "After gas workers check: check chimney, ventilation, boiler/water heater condition"
      ],
      warnings: [
        "CO is colorless, odorless. You won't feel poisoning until you collapse",
        "Symptoms: dizziness, nausea, weakness, headache. Often confused with flu",
        "DON'T try to 'ventilate and go back in' — CO can remain in the blood"
      ]
    },
    // ============================================================
    // 5. YELLOW FLAME / SOOT
    // ============================================================
    {
      id: "yellow_flame_fix",
      title: "🔥 Yellow flame / soot — causes and solution",
      description: "Blue flame = complete combustion. Yellow = incomplete, produces CO and soot. Dangerous.",
      conditions: { gas_issue: ["yellow"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Safe combustion",
      tags: ["gas", "maintenance", "safety"],
      steps: [
        "Turn off the appliance. Let it cool for 10 minutes. Check: are the burners clogged with grease, dust, food?",
        "Clean the burners: with a needle, toothpick, special brush. Don't use metal objects",
        "Check if the burner is wet? Water causes yellow flame. Wipe dry",
        "Check air dampers / regulators: increase air supply",
        "If the flame is yellow on all burners — possibly low gas pressure. Call the gas service: 04 (104)",
        "If the oven is sooting — check grease at the bottom, heating elements. Clean",
        "After cleaning turn on the appliance. Flame should be blue with a slight yellow tip (1–2 mm)",
        "If still yellow — call a gas technician"
      ],
      warnings: [
        "Yellow flame = CO emission. This is not 'normal', it's a malfunction",
        "Soot settles in the chimney and can cause a fire. Check the chimney once a year"
      ]
    },
    // ============================================================
    // 6. DRAFT CHECK IN CHIMNEY
    // ============================================================
    {
      id: "draft_check",
      title: "🌪️ Chimney draft check — safety",
      description: "No draft = CO poisoning and flame going out. Check regularly.",
      conditions: { gas_issue: ["yellow", "co_alarm", "smell"], has_draft: ["draft_no"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Draft ensured",
      tags: ["draft", "chimney", "safety"],
      steps: [
        "How to check draft: open a window, hold a lit match to the ventilation grille. The flame should deflect toward the grille",
        "If the flame stays straight or deflects into the room — no draft. This is dangerous!",
        "If there's no draft — DON'T use the gas appliance. Turn it off, close the valve",
        "Ventilate the room, open windows for 10–15 minutes",
        "Check: is the ventilation grille blocked? Clogged with dust?",
        "Check the chimney: possibly clogged with soot, bird nests, debris",
        "Call a specialist for chimney inspection and cleaning (once a year — mandatory)"
      ],
      warnings: [
        "No draft = CO poisoning. DON'T use gas without draft",
        "Check draft before every gas boiler/water heater use",
        "The chimney must be cleaned once a year"
      ]
    },
    // ============================================================
    // 7. NO GAS
    // ============================================================
    {
      id: "no_gas_supply",
      title: "🚫 No gas — check and actions",
      description: "Gas shutoff — planned, emergency, or due to debt. Check the cause, switch to alternatives.",
      conditions: { gas_issue: ["no_gas"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Supply restored or adapted",
      tags: ["gas", "supply", "emergency"],
      steps: [
        "Check: no gas only in your apartment or with neighbors too? Ask neighbors, check notices in the entrance",
        "Check the gas valve: it may have been accidentally closed. Valve should be PARALLEL to the pipe",
        "Check the gas meter: if the needle doesn't move with the stove on — problem is before the meter",
        "If there's no gas in the building — call the gas service: 04 (104/112)",
        "If shut off for debt — check receipts. Must be warned 20 days in advance",
        "Switch to an electric stove, multicooker, electric kettle",
        "If the gas boiler isn't working — turn on electric heaters",
        "If the shutoff is long-term in winter — contact the management company"
      ],
      warnings: [
        "DON'T use the gas stove for heating — CO poisoning",
        "Portable gas stoves inside the apartment are dangerous. Only on the balcony with open windows",
        "If shut off for debt — pay it, apply for reconnection"
      ]
    },
    // ============================================================
    // 8. GAS CYLINDER SAFETY
    // ============================================================
    {
      id: "gas_cylinder_safety",
      title: "🛢️ Gas cylinder — safety rules",
      description: "Cylinder gas (propane-butane) is heavier than air and explosive. Store and use correctly.",
      conditions: { gas_issue: ["cylinder"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Safe cylinder use",
      tags: ["cylinder", "gas", "safety"],
      steps: [
        "Cylinder must stand VERTICALLY, in a ventilated room, NOT in the basement (gas is heavier than air)",
        "Distance from cylinder to stove/boiler — at least 1 meter",
        "Don't allow the cylinder to heat up (sun, heater) — may explode",
        "If you smell gas from the cylinder: DON'T turn on lights, DON'T smoke. Open windows, close the valve, take the cylinder outside",
        "Check the cylinder's expiration date (on the body). Expired — dangerous",
        "Replace the cylinder only at licensed filling points",
        "Store the cylinder vertically, away from heat and fire sources"
      ],
      warnings: [
        "Cylinder gas is heavier than air — accumulates near the floor. Ventilate from the bottom",
        "DON'T store cylinders in basements, garages, apartments without ventilation",
        "DON'T turn the cylinder over when using — liquid can escape"
      ]
    },
    // ============================================================
    // 9. GAS EQUIPMENT MAINTENANCE
    // ============================================================
    {
      id: "gas_maintenance",
      title: "🔧 Gas equipment maintenance — legal requirement and safety",
      description: "Gas equipment requires annual maintenance. It's the law and it's safety.",
      conditions: { gas_issue: ["smell", "yellow", "no_gas", "co_alarm"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Safe gas equipment",
      tags: ["gas", "maintenance", "law"],
      steps: [
        "Gas equipment (stove, water heater, boiler) must be serviced annually",
        "Call a specialist from the gas service or a licensed organization",
        "Inspection includes: tightness of connections, draft, automation operation, burner condition",
        "Don't allow non-professionals near the equipment — dangerous and illegal",
        "Sign a maintenance contract with the gas service (supplier)",
        "Keep work completion certificates — proof for inspections",
        "If faults are found — DON'T use the appliance. Call a master",
        "Fine for lack of maintenance — from $20 to $200"
      ],
      warnings: [
        "Annual maintenance is not a whim, it's safety. Don't save on your life",
        "Faulty gas equipment is the cause of 90% of explosions and poisonings",
        "Check the master's documents — license is mandatory"
      ]
    }
  ]
});