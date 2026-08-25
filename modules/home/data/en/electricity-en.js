// modules/home/data/en/electricity-en.js
// === MODULE: HOME — ELECTRICITY ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "home",
    category: "electricity",
    version: "1.0.0",
    lang: "en",
    title: "Electricity",
    description: "Blackout, short circuit, electric shock, sparking, burning smell — safe actions",
    icon: "⚡",
    color: "#0891b2"
  },

  questions: [
    {
      id: "elec_issue",
      type: "single",
      text: "What happened?",
      options: [
        { id: "no_power", label: "💡 No power / electricity was turned off", tags: ["no_power"] },
        { id: "spark_smoke", label: "⚡ Sparking / crackling / smoke from outlet or panel", tags: ["spark_smoke"] },
        { id: "burn_smell", label: "🔥 Burning smell / burnt wiring without visible fire", tags: ["burn_smell"] },
        { id: "shock", label: "⚡ Electric shock / tingling from appliance or faucet", tags: ["shock"] },
        { id: "breaker_tripped", label: "🔌 Circuit breaker / fuse / RCD tripped", tags: ["breaker_tripped"] },
        { id: "surge", label: "📈 Voltage surge / lights flickering", tags: ["surge"] },
        { id: "appliance_fault", label: "📱 Appliance not working / smoking / sparking", tags: ["appliance_fault"] }
      ]
    },
    {
      id: "scope",
      type: "single",
      text: "Where exactly is the problem?",
      conditions: { elec_issue: ["no_power", "spark_smoke", "burn_smell", "breaker_tripped", "surge"] },
      options: [
        { id: "whole_house", label: "🏠 In the entire apartment / house", tags: ["whole"] },
        { id: "one_room", label: "🚪 In one room / on one line", tags: ["room"] },
        { id: "one_device", label: "📱 One appliance / outlet", tags: ["device"] },
        { id: "dont_know", label: "❓ Not sure", tags: ["unknown"] }
      ]
    },
    {
      id: "is_planned",
      type: "single",
      text: "Is this a planned or emergency shutdown?",
      conditions: { elec_issue: ["no_power"] },
      options: [
        { id: "planned", label: "📋 Planned (were notified / there is a schedule)", tags: ["planned"] },
        { id: "emergency", label: "🚨 Emergency (sudden, without warning)", tags: ["emergency_shutoff"] },
        { id: "debt", label: "💸 Possibly shut off due to debt", tags: ["debt_shutoff"] }
      ]
    },
    {
      id: "has_debt",
      type: "single",
      text: "Is there any debt for electricity?",
      conditions: { elec_issue: ["no_power"], is_planned: ["debt"] },
      options: [
        { id: "debt_yes", label: "💰 Yes, there is debt", tags: ["debt_yes"] },
        { id: "debt_no", label: "✅ No, I pay on time", tags: ["debt_no"] },
        { id: "debt_unknown", label: "❓ Don't know / possibly", tags: ["debt_unknown"] }
      ]
    },
    {
      id: "can_access_panel",
      type: "single",
      text: "Do you have access to the electrical panel?",
      conditions: { elec_issue: ["spark_smoke", "breaker_tripped", "burn_smell"] },
      options: [
        { id: "panel_yes", label: "✅ Yes, the panel is accessible", tags: ["panel"] },
        { id: "panel_no", label: "❌ No / panel is locked / in the hallway", tags: ["no_panel"] },
        { id: "panel_scared", label: "⚠️ I'm afraid to touch it / no experience", tags: ["scared"] }
      ]
    },
    {
      id: "has_rcd",
      type: "single",
      text: "Is there an RCD (residual current device) in the panel?",
      conditions: { elec_issue: ["spark_smoke", "breaker_tripped", "shock"] },
      options: [
        { id: "rcd_yes", label: "✅ Yes, there is an RCD", tags: ["rcd_yes"] },
        { id: "rcd_no", label: "❌ No, only circuit breakers", tags: ["rcd_no"] },
        { id: "rcd_unknown", label: "❓ Don't know", tags: ["rcd_unknown"] }
      ]
    },
    {
      id: "old_wiring",
      type: "single",
      text: "When was the wiring last replaced?",
      conditions: { elec_issue: ["spark_smoke", "burn_smell", "breaker_tripped", "surge"] },
      options: [
        { id: "wiring_new", label: "✅ Replaced in the last 10-15 years", tags: ["wiring_new"] },
        { id: "wiring_old", label: "⚠️ Wiring is old (over 20 years, aluminum)", tags: ["wiring_old"] },
        { id: "wiring_unknown", label: "❓ Don't know / the building is old", tags: ["wiring_unknown"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. SPARKING / SMOKE FROM OUTLET — SHUT OFF POWER!
    // ============================================================
    {
      id: "elec_fire_immediate",
      title: "🔥 Sparking / smoke — immediate actions",
      description: "An electrical fire develops in seconds. The main thing is to shut off power, don't use water, evacuate.",
      conditions: { elec_issue: ["spark_smoke"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Fire prevented",
      tags: ["fire", "electricity", "emergency"],
      steps: [
        "DON'T touch burning or smoking objects with your hands. DON'T use water on electrical appliances — it's deadly!",
        "Immediately turn off power at the panel: lower ALL circuit breakers (switches down), including the main breaker",
        "If the panel is inaccessible — unplug the appliance (only if safe, no fire nearby)",
        "If flames appear — use a fire extinguisher: carbon dioxide (CO2) or dry powder. NOT foam, NOT water",
        "If the fire is in the panel — close the panel door (limits oxygen), call firefighters: 01 (101/112)",
        "Evacuate if smoke is thick, fire is spreading, or you're unsure of your abilities",
        "Call an emergency electrician or management company. Don't turn power back on until checked by a specialist"
      ],
      warnings: [
        "Water + electricity = deadly. NEVER extinguish electrical appliances with water",
        "Fire extinguisher must be CO2 or powder. Foam — only after complete de-energization",
        "If there's a burning smell but no visible fire — it could be smoldering in the wall. Turn off power, call firefighters",
        "DON'T try to disassemble panel, outlet, or wires without experience — 220V kills"
      ]
    },
    // ============================================================
    // 2. BURNING SMELL WITHOUT FIRE
    // ============================================================
    {
      id: "smell_no_fire",
      title: "🔥 Burning smell without visible fire — action plan",
      description: "Burning smell without fire is smoldering wiring in the wall, outlet, or appliance. Turn off power immediately and check.",
      conditions: { elec_issue: ["burn_smell"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Source identified and eliminated",
      tags: ["smell", "fire_risk", "safety"],
      steps: [
        "DON'T turn power back on until the cause is found. Burning smell is already burning (smoldering) insulation",
        "Turn off ALL circuit breakers in the panel (switches down). If the panel is in the hallway — find yours, turn off",
        "Carefully walk through all rooms, sniffing. The smell is stronger near outlets, switches, the panel, and appliances",
        "Check heated wires and plugs: if plastic is darkened or melted — the cause is there",
        "If the smell is coming from the wall (near an outlet) — call an electrician. Wiring in the wall may be smoldering",
        "If the smell is from an appliance — turn it off, unplug it, don't use until checked by an electrician",
        "If the smell is from the panel — don't open it, call an electrician or fire department",
        "After identifying the cause — don't turn power back on until the fault is fixed"
      ],
      warnings: [
        "Burning smell is already a fire (smoldering). DON'T ignore it",
        "If the smell is coming from the wall — don't try to break the wall open yourself. Call a specialist"
      ]
    },
    // ============================================================
    // 3. ELECTRIC SHOCK — CPR, CALL AMBULANCE
    // ============================================================
    {
      id: "elec_shock",
      title: "⚡ Electric shock — first aid and CPR",
      description: "Electric shock can be fatal. Act quickly but safely. 220V is deadly.",
      conditions: { elec_issue: ["shock"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Life saved",
      tags: ["shock", "first_aid", "emergency"],
      steps: [
        "DON'T touch the victim with bare hands while they are in contact with the power source — you will also be shocked",
        "Immediately de-energize: turn off the breaker, unplug, cut wires with insulated tools",
        "If you can't de-energize — pull the victim by dry clothing, belt, or rope. NOT bare body, hands, or feet",
        "Call an ambulance: 03 (103/112). Report: 'Electric shock, need ambulance and resuscitation'",
        "Check consciousness, breathing, pulse. If no breathing — start CPR: 30 chest compressions, then 2 breaths",
        "Chest compressions: depth 5–6 cm, rate 100–120/min. Rescue breaths: pinch nose, blow into mouth",
        "If conscious — lay down, cover, don't give water/food. Treat burns with sterile bandage",
        "Even with a 'mild' shock — see a doctor. Internal burns and heart rhythm issues may appear later"
      ],
      warnings: [
        "DON'T touch the victim while they're under current — you'll become the second victim",
        "DON'T use metal objects to pull the victim — they conduct electricity",
        "After electric shock, the heart can stop within minutes. Even if the person seems 'fine' — call an ambulance",
        "Electrical burns are deep, though small on the surface. Don't apply oils or creams — only sterile bandage"
      ]
    },
    // ============================================================
    // 4. BREAKER / RCD TRIPPED
    // ============================================================
    {
      id: "breaker_tripped",
      title: "🔌 Breaker or RCD tripped — diagnostics and reset",
      description: "The breaker protects from overload and short circuit. RCD protects from current leakage. Find the cause, fix it, then reset.",
      conditions: { elec_issue: ["breaker_tripped"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Power restored",
      tags: ["breaker", "diagnostics", "safety"],
      steps: [
        "Check the panel: which breaker tripped? Note the number (usually labeled: 'kitchen', 'room', 'outlets')",
        "Turn off ALL appliances on that line: unplug, turn off switches. Especially powerful ones: kettle, heater, washing machine",
        "Try to reset the breaker: push the switch up. If it trips immediately — the problem is in the wiring, DON'T repeat",
        "If the breaker holds — turn appliances on one by one. If it trips when you turn one on — that appliance is faulty",
        "If the appliance is fine but the line is overloaded — use them one at a time",
        "If the breaker trips with no appliances on — the problem is in the wiring (short circuit, damaged insulation). Call an electrician",
        "If an RCD tripped — protection from current leakage. Cause: moisture (bathroom, kitchen), damaged insulation, faulty appliance"
      ],
      warnings: [
        "DON'T hold the breaker in the ON position manually — this can cause a fire from overheated wiring",
        "If the breaker trips immediately — DON'T try more than 2-3 times. Each attempt is a fire risk",
        "If there's a burning smell when turning on — immediately turn off, call an electrician/fire department"
      ]
    },
    // ============================================================
    // 5. NO POWER — CHECK AND RESTORE
    // ============================================================
    {
      id: "no_power_restore",
      title: "🚱 No power — check and restore",
      description: "The shutdown may be planned, emergency, or only in your apartment. Check, protect your appliances, find the cause.",
      conditions: { elec_issue: ["no_power"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Power restored or adapted",
      tags: ["no_power", "supply", "emergency"],
      steps: [
        "Check: is there no power only in your apartment or with neighbors too? Ask neighbors, look out the window",
        "Check the panel: did the main breaker trip? If so — try to reset it",
        "Check the meter: is the display on? If not — possibly shut off for debt or a line failure",
        "If there's no power in the building/area — call the energy supply company or emergency service",
        "Unplug sensitive equipment: computer, TV, refrigerator. There may be a voltage surge when power returns",
        "Keep the refrigerator door closed — food will last up to 4 hours. Don't open unnecessarily",
        "Stock up on flashlights, candles (carefully!), power banks for your phone. Charge power banks in advance",
        "If the outage is long — don't open the freezer. Food stays frozen 24-48 hours with the door closed"
      ],
      warnings: [
        "DON'T leave equipment plugged in during an outage — a voltage surge may damage it",
        "Candles are a fire hazard. Place on a non-flammable surface, don't leave unattended",
        "Generators — use only outdoors or with good ventilation. Carbon monoxide kills",
        "If the outage is in winter and there's no heating — open faucets slightly to prevent pipes from freezing"
      ]
    },
    // ============================================================
    // 6. SHUTOFF FOR DEBT
    // ============================================================
    {
      id: "power_debt_shutoff",
      title: "💸 Power shut off for debt — action plan",
      description: "Shutoff for debt is legal, but only if the procedure is followed. If violated — you can appeal.",
      conditions: { elec_issue: ["no_power"], is_planned: ["debt"], has_debt: ["debt_yes", "debt_unknown"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–7 days",
      yield_estimate: "Power restored",
      tags: ["debt", "shutoff", "law"],
      steps: [
        "Check: was there a notice about the upcoming shutdown? They must warn 20 days in advance",
        "If shut off without warning — it's a violation. File a complaint with the Housing Inspectorate and prosecutor's office",
        "Find out the amount of debt and payment details on the energy company's website or in your personal account",
        "Pay the debt. Keep the receipt, send it to the energy company",
        "If shut off illegally (no notice, debt less than 2 months) — demand reconnection. File an application",
        "If the energy company doesn't reconnect — complaint to Housing Inspectorate and prosecutor's office",
        "If you have social benefits or financial hardship — contact social services for subsidies"
      ],
      warnings: [
        "Shutoff for debt is a last resort. The company must warn 20 days in advance",
        "If there are children, pensioners, or disabled people — shutdown time is limited (no more than 24 hours)",
        "If shut off in winter (electric heating) — it's illegal",
        "With partial payment of debt — demand reconnection, it's your right"
      ]
    },
    // ============================================================
    // 7. VOLTAGE SURGE
    // ============================================================
    {
      id: "voltage_surge",
      title: "📈 Voltage surge — protect appliances and stay safe",
      description: "Flickering lights, voltage fluctuations — can damage appliances. Protect and document.",
      conditions: { elec_issue: ["surge"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Appliances protected + documented for insurance",
      tags: ["surge", "protection", "safety"],
      steps: [
        "During a voltage surge: DON'T touch metal parts of appliances",
        "Turn off and unplug sensitive equipment: computer, TV, refrigerator, washing machine",
        "If you have a voltage stabilizer — check its operation",
        "If lights are flickering throughout the building — report to the emergency service and energy company",
        "Record: time, date, duration of surges, which appliance was damaged (if any)",
        "If appliances are damaged — call an electrician to draw up a report. Needed for insurance",
        "Use: surge protectors, voltage stabilizers, voltage monitoring relays",
        "If surges are frequent — demand the management company check the building's wiring"
      ],
      warnings: [
        "A voltage surge can damage equipment worth more than you think",
        "A surge protector does NOT protect against strong surges — only a stabilizer or voltage relay",
        "If power goes out during a surge — don't panic, follow the plan",
        "If equipment is damaged — you may be able to get compensation from the energy company"
      ]
    },
    // ============================================================
    // 8. FAULTY APPLIANCE
    // ============================================================
    {
      id: "faulty_appliance",
      title: "📱 Appliance not working / smoking / sparking — what to do",
      description: "A faulty appliance is a source of danger. Turn off and don't turn on until checked.",
      conditions: { elec_issue: ["appliance_fault"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2–5 minutes",
      yield_estimate: "Appliance safely disconnected",
      tags: ["appliance", "fault", "safety"],
      steps: [
        "DON'T touch the appliance if it's smoking or sparking. Only disconnect from power — and don't touch",
        "Unplug the appliance (if safe, no fire or smoke)",
        "If the plug is hot or melting — turn off the breaker, don't touch the plug",
        "If the appliance catches fire — use a fire extinguisher (CO2 or powder). NOT water, NOT foam",
        "Leave it unplugged until inspected by an electrician. Don't try to take it apart — 220V kills",
        "If under warranty — contact the service center",
        "If not under warranty — call a technician for diagnostics and repair"
      ],
      warnings: [
        "DON'T turn the appliance back on after sparking — it may catch fire",
        "DON'T disassemble the appliance yourself — there may be dangerous capacitors inside",
        "If the plug is melting — the problem is in the appliance or the outlet. Check the outlet after disconnecting"
      ]
    },
    // ============================================================
    // 9. OLD WIRING — ALUMINUM AND NO GROUNDING
    // ============================================================
    {
      id: "old_wiring_advice",
      title: "⚠️ Old wiring — risks and recommendations",
      description: "Aluminum wiring older than 20 years is a fire risk. Check and replace.",
      conditions: { elec_issue: ["spark_smoke", "burn_smell", "breaker_tripped", "surge"], old_wiring: ["wiring_old"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "1–3 months (for replacement)",
      yield_estimate: "Safe wiring",
      tags: ["wiring", "old", "safety"],
      steps: [
        "Old aluminum wiring (20+ years) is a fire risk. It's brittle, heats up, can't handle modern loads",
        "Warning signs: outlets getting hot, burning smell, breakers tripping, lights flickering",
        "Call an electrician to check the wiring (insulation resistance measurement)",
        "If problems are found — plan to replace the wiring with copper",
        "Cost of replacing wiring in a 1-room apartment: from $300-$500",
        "While waiting for replacement: use appliances one at a time, don't overload old lines",
        "Install an RCD (residual current device) — protects from leaks and short circuits"
      ],
      warnings: [
        "Aluminum wiring is not designed for modern loads. Don't run many powerful appliances at once",
        "Aluminum-to-copper connections oxidize and heat up. Common cause of fire",
        "Wiring replacement is expensive, but cheaper than a fire",
        "If the building is old (Khrushchev-era, Brezhnev-era) — the wiring needs to be completely replaced"
      ]
    }
  ]
});