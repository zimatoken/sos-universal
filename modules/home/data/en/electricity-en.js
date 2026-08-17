// === MODULE: HOME — ELECTRICITY ===
const electricityDataEn = {
  category: "electricity",
  title: "⚡ Electricity",
  description: "Power outage, short circuit, electric shock, sparking — safe actions",

  questions: [
    {
      id: "elec_issue",
      text: "What happened?",
      type: "single",
      options: [
        { id: "no_power", label: "💡 No power / electricity cut off", tags: ["no_power"] },
        { id: "spark", label: "⚡ Sparking / crackling / burning smell from socket / panel", tags: ["spark", "fire_risk"] },
        { id: "shock", label: "⚡ Electric shock / tingling from appliance / faucet", tags: ["shock", "danger"] },
        { id: "breaker", label: "🔌 Circuit breaker / fuse / RCD tripped", tags: ["breaker"] },
        { id: "burned_smell", label: "🔥 Burning smell / smoke without visible fire", tags: ["smell", "fire_risk"] }
      ]
    },
    {
      id: "scope",
      text: "Where exactly is the problem?",
      type: "single",
      conditions: { elec_issue: ["no_power", "spark", "breaker", "burned_smell"] },
      options: [
        { id: "whole_house", label: "🏠 Throughout the entire apartment / house", tags: ["whole"] },
        { id: "one_room", label: "🚪 In one room / on one circuit", tags: ["room"] },
        { id: "one_device", label: "📱 One appliance / socket", tags: ["device"] },
        { id: "dont_know", label: "❓ Not sure", tags: ["unknown"] }
      ]
    },
    {
      id: "can_access_panel",
      text: "Do you have access to the electrical panel?",
      type: "single",
      conditions: { elec_issue: ["spark", "breaker", "burned_smell"] },
      options: [
        { id: "panel_yes", label: "Yes, the panel is accessible", tags: ["panel"] },
        { id: "panel_no", label: "No / panel is locked / in the entrance", tags: ["no_panel"] },
        { id: "panel_scared", label: "I'm afraid to touch it / no experience", tags: ["scared"] }
      ]
    }
  ],

  solutions: [
    {
      id: "elec_fire_immediate",
      title: "🔥 Sparking / burning smell — immediate actions",
      description: "An electrical fire develops in seconds. The main thing is to cut the power and evacuate.",
      conditions: { elec_issue: ["spark", "burned_smell"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Fire prevention",
      tags: ["fire", "electricity", "emergency"],
      steps: [
        "DO NOT touch burning or smoking objects with your hands. DO NOT use water on electrical appliances",
        "Immediately turn off the electricity in the panel: switch off ALL circuit breakers (handles down), including the main breaker",
        "If the panel is inaccessible — unplug the appliance (if safe) or turn it off with the power button",
        "If flames appear — use a fire extinguisher (CO2 or dry powder). NOT foam and NOT water — electric shock hazard",
        "If the fire is in the panel — close the panel door (limits oxygen), call the fire department: 01 (101/112)",
        "Evacuate the apartment if the smoke is thick, the fire is spreading, or you're unsure of your ability to handle it",
        "Call an emergency electrician: 01 (101/112) or the management company emergency service. Don't turn the power back on until inspected",
        "After extinguishing — don't touch burnt wires or appliances until an electrician arrives. They may still be live"
      ],
      warnings: [
        "Water + electricity = deadly. NEVER use water on electrical fires",
        "Fire extinguisher must be CO2 (carbon dioxide) or dry powder. Foam — only after complete disconnection",
        "If there's a burning smell but no visible fire — it could be smoldering in the wall. Turn off the power, call the fire department",
        "DO NOT try to disassemble the panel, socket, or wires without experience — 220V kills"
      ]
    },
    {
      id: "elec_shock",
      title: "⚡ Electric shock — first aid and actions",
      description: "Electric shock can be fatal. Act quickly, but safely for yourself.",
      conditions: { elec_issue: ["shock"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Saving a life",
      tags: ["shock", "first_aid", "emergency"],
      steps: [
        "DO NOT touch the victim with your hands while they are in contact with the power source — you will also get shocked",
        "Immediately disconnect the power: turn off the breaker in the panel, unplug the cord, cut the wire with insulated tools (wooden handle)",
        "If you can't disconnect — drag the victim away by dry clothing, a belt, or rope. NOT by bare skin, hands, or feet",
        "Call an ambulance: 03 (103/112). Report: 'Electric shock, need ambulance and resuscitation'",
        "Check consciousness, breathing, pulse. If no breathing — start CPR (artificial respiration + chest compressions)",
        "If the victim is conscious — lay them down, cover them, don't give water/food. Treat burns with a sterile bandage",
        "Even after a 'minor' shock — see a doctor. Internal burns, heart rhythm disturbances may appear later",
        "Document the scene, appliance, socket — for investigation and prevention of recurrence"
      ],
      warnings: [
        "DO NOT touch the victim while they are live — you will become the second victim",
        "DO NOT use metal objects to pull them away — they conduct electricity",
        "After electric shock, the heart can stop within minutes. Even if the person seems 'fine' — call an ambulance",
        "Electrical burns are deep, even if small on the surface. Don't apply oils or creams — only sterile bandages"
      ]
    },
    {
      id: "breaker_tripped",
      title: "🔌 Circuit breaker tripped — diagnostics and reset",
      description: "The breaker protects against overload and short circuits. Find the cause, fix it, then reset.",
      conditions: { elec_issue: ["breaker"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Power restoration",
      tags: ["breaker", "diagnostics", "safety"],
      steps: [
        "Inspect the panel: which breaker tripped? Note the number (usually labeled: 'kitchen', 'room', 'bathroom sockets')",
        "Turn off ALL appliances on that circuit: unplug everything, turn off switches. Especially high-power ones: kettle, heater, washing machine, microwave",
        "Try to reset the breaker: push the handle up. If it trips immediately again — the problem is in the wiring, DO NOT repeat",
        "If the breaker holds — turn appliances on one by one. Which one makes it trip? That appliance is faulty",
        "If the appliance is fine but the circuit is overloaded (kettle + heater + washing machine on one line) — use them one at a time",
        "If the breaker trips with no appliances on — the problem is in the wiring (short circuit, damaged insulation). Call an electrician",
        "If the RCD (residual current device) tripped — it's protection against current leakage. Causes: moisture, damaged insulation, faulty appliance. Check the bathroom, kitchen",
        "If you don't know what to do — call an electrician. Call-out cost: 1500–3000 rubles. It's cheaper than a fire"
      ],
      warnings: [
        "DO NOT hold the breaker in the ON position manually — it can cause a fire from overheated wiring",
        "If the breaker trips immediately — DO NOT repeat more than 2–3 times. Each reset is a fire risk",
        "If there's a burning smell when turning on — immediately turn it off, call an electrician/fire department",
        "Old fuses (fusible links) — replace with breakers. This is legal and safe"
      ]
    },
    {
      id: "no_power_restore",
      title: "🚱 No power — checking and actions",
      description: "Power outage can be planned, emergency, or only for you. Check, protect your appliances.",
      conditions: { elec_issue: ["no_power"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Restoration or adaptation",
      tags: ["no_power", "supply", "emergency"],
      steps: [
        "Check: is there no power only for you or for neighbors too? Ask neighbors, look out the window — are lights on in neighboring buildings",
        "Check the panel: did the main breaker trip? If so — try to reset it (see the 'Breaker tripped' solution)",
        "Check the meter: is the display on? If not — possibly shut off for debts or a line emergency",
        "If there's no power in the building / area — call the power supply company (number on the bill) or emergency service: 01 (101/112)",
        "Unplug sensitive appliances: computer, TV, refrigerator (especially if old). There may be a power surge when power returns",
        "Keep the refrigerator door closed — during an outage, food will stay good for up to 4 hours. Don't open unnecessarily",
        "Stock up on flashlights, candles (carefully!), power bank for your phone. Charge the power bank in advance",
        "If the outage is prolonged — don't open the freezer. Food in the freezer stays good for 24–48 hours with the door closed",
        "If shut off for debts — check: are they only for your debts? If the management company is at fault — it's illegal, complaint to the prosecutor's office"
      ],
      warnings: [
        "DO NOT leave appliances plugged in during an outage — when power returns, a surge can burn everything out",
        "Candles — fire hazard. Place on non-combustible surfaces, don't leave unattended, keep away from curtains",
        "Generator / inverter — use only outdoors or with good ventilation. Carbon monoxide kills",
        "If the outage is in winter and there's no heating — open faucets slightly to prevent pipes from freezing"
      ]
    }
  ]
};

// ===== EXPORT =====
window.electricityDataEn = electricityDataEn;
