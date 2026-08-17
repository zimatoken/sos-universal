// === MODULE: HOME — GAS ===
const gasDataEn = {
  category: "gas",
  title: "⛽ Gas",
  description: "Gas leak, smell, outage, actions when detected",

  questions: [
    {
      id: "gas_issue",
      text: "What happened?",
      type: "single",
      options: [
        { id: "smell", label: "😷 I smell gas", tags: ["smell", "leak"] },
        { id: "no_gas", label: "❌ No gas (stove won't light, boiler not working)", tags: ["no_gas"] },
        { id: "yellow_flame", label: "🔥 Yellow flame / sooty / crackling", tags: ["yellow", "incomplete"] },
        { id: "co_alarm", label: "🚨 Carbon monoxide (CO) alarm went off", tags: ["co", "alarm"] },
        { id: "explosion", label: "💥 Explosion / bang / fire from gas", tags: ["explosion", "fire"] }
      ]
    },
    {
      id: "smell_location",
      text: "Where do you smell gas?",
      type: "single",
      conditions: { gas_issue: ["smell"] },
      options: [
        { id: "smell_kitchen", label: "🍳 In the kitchen (stove, oven)", tags: ["kitchen"] },
        { id: "smell_bathroom", label: "🚿 In the bathroom (water heater, boiler)", tags: ["bathroom"] },
        { id: "smell_hallway", label: "🚪 In the hallway / entrance", tags: ["hallway"] },
        { id: "smell_everywhere", label: "🏠 Everywhere / strong smell", tags: ["strong"] }
      ]
    },
    {
      id: "gas_appliance",
      text: "Which gas appliance is used?",
      type: "single",
      conditions: { gas_issue: ["smell", "yellow_flame"] },
      options: [
        { id: "appliance_stove", label: "Gas stove / oven", tags: ["stove"] },
        { id: "appliance_heater", label: "Gas water heater / boiler", tags: ["heater"] },
        { id: "appliance_boiler", label: "Gas heating boiler", tags: ["boiler"] },
        { id: "appliance_none", label: "No gas appliances / not sure", tags: ["none"] }
      ]
    }
  ],

  solutions: [
    {
      id: "gas_leak_emergency",
      title: "🚨 Gas leak — emergency actions",
      description: "Gas is explosive. One spark = explosion. Act instantly, without panic, without sparks.",
      conditions: { gas_issue: ["smell", "explosion"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Preventing explosion",
      tags: ["gas", "leak", "emergency"],
      steps: [
        "DON'T panic. DO NOT turn lights, sockets, switches on or off — spark = explosion. DON'T call from inside the apartment on a landline",
        "DON'T light matches, lighters, candles. DON'T smoke. DON'T use the doorbell (electric)",
        "Open windows and doors wide — ventilation will disperse the gas. Do this carefully, without sudden movements",
        "Close the shut-off valve on the gas pipe (usually under the stove or at the meter). Turn the handle ACROSS the pipe (90°)",
        "If the valve is at the meter — turn it with a wrench or screwdriver (flathead). If you don't know where it is — run, don't waste time",
        "LEAVE the apartment, close the door. Don't use the elevator — sparks. Use the stairs",
        "From the street / from a safe distance call: 04 (from mobile 104 or 112). Report: 'Gas leak, address, floor'",
        "Warn neighbors (knock on doors, shout), but DON'T use the electric doorbell",
        "Don't return to the apartment until the gas service arrives and gives permission. This may take 30–60 minutes"
      ],
      warnings: [
        "DO NOT turn lights on/off — this is the main rule. Any spark = explosion. Even static electricity is dangerous",
        "DO NOT open the refrigerator — the compressor sparks when starting",
        "DO NOT use a mobile phone INSIDE the apartment — go outside, then call",
        "The smell of gas is artificially added (mercaptan) — odorless gas is also dangerous. If the stove doesn't light but you don't smell anything — still check",
        "Gas is lighter than air (methane) — collects at the ceiling. Propane-butane gas (cylinders) — heavier than air, collects at the floor"
      ]
    },
    {
      id: "co_alarm_action",
      title: "☠️ Carbon monoxide alarm — actions",
      description: "Carbon monoxide (CO) — colorless, odorless, kills in minutes. Alarm = immediate evacuation.",
      conditions: { gas_issue: ["co_alarm"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 minutes",
      yield_estimate: "Saving from poisoning",
      tags: ["co", "poisoning", "emergency"],
      steps: [
        "Immediately leave the premises: open windows on the way out, leave quickly but without panic. DON'T waste time packing",
        "If someone feels dizzy, nauseous, weak — get them out. CO acts quickly, consciousness is lost suddenly",
        "Outside: breathe deeply fresh air. Call an ambulance: 03 (103/112). Report: 'Carbon monoxide poisoning, address, number of victims'",
        "DO NOT re-enter the premises until the gas workers arrive and ventilate. Even for 1 minute — deadly",
        "For victims: lay down, cover, monitor breathing. If breathing stops — CPR (artificial respiration + chest compressions)",
        "Even with improvement — see a doctor. CO binds to hemoglobin, effects appear hours later",
        "After gas workers check: inspect the chimney, ventilation, boiler/water heater condition. A faulty appliance = repeat poisoning",
        "Install a CO detector in every room with a gas appliance and in bedrooms. Cost: 500–2000 rubles — it's a life saver"
      ],
      warnings: [
        "CO — colorless, odorless. You won't feel poisoning until you collapse. A CO detector is MANDATORY in every home with gas",
        "Symptoms of poisoning: dizziness, nausea, weakness, headache, hallucinations. Often confused with the flu",
        "DO NOT try to 'ventilate and go back in' — CO can remain in victims' blood, and in the room it can accumulate again",
        "Improper installation of boiler/water heater, blocked chimney, lack of ventilation — main causes of CO poisoning"
      ]
    },
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
        "Turn off the appliance. Let it cool for 10 minutes. Check: are the nozzles (burner holes) clogged with grease, dust, food?",
        "Clean the nozzles: with a needle, toothpick, special brush. Don't use metal objects — you can damage them",
        "Check if the burner is wet? Water (from boiling, spilled liquid) causes yellow flame. Wipe dry",
        "Check the air dampers / regulators: there is an air supply regulator on the burner (ring, lever). Increase the air supply",
        "If the flame is yellow on all burners — possible low gas pressure or contaminated gas. Call the gas service: 04 (104)",
        "If the oven is sooty — check the grease at the bottom, heating elements. Clean. Check the door seal",
        "After cleaning, turn on the appliance. The flame should be blue with a small yellow tip (1–2 mm). If it's all yellow — call a gas technician",
        "Yellow flame = CO + soot. Prolonged use = poisoning + chimney fire from soot"
      ],
      warnings: [
        "Yellow flame = carbon monoxide (CO) emission. Even a small amount of CO accumulates and poisons",
        "DO NOT use an appliance with a yellow flame. This is not 'normal', it's a malfunction",
        "Soot from yellow flame accumulates in the chimney and can cause a fire. Check the chimney once a year",
        "If the flame 'jumps' or crackles — water or air may have entered the pipe. Turn it off, ventilate, call a gas technician"
      ]
    },
    {
      id: "no_gas_supply",
      title: "🚫 No gas — checking and actions",
      description: "Gas outage — planned, emergency, or for debts. Check the cause, switch to alternatives.",
      conditions: { gas_issue: ["no_gas"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Restoration or adaptation",
      tags: ["gas", "supply", "emergency"],
      steps: [
        "Check: is there no gas only for you or for neighbors too? Ask neighbors, check notices in the entrance",
        "Check the gas valve: it may have been accidentally closed during cleaning. The valve should be PARALLEL to the pipe",
        "Check the gas meter: if the needle doesn't move when the stove is on — the problem is before the meter (gas service)",
        "If there's no gas in the building — call the gas service: 04 (104/112). Ask: planned outage or emergency, restoration time",
        "If shut off for debts — check receipts. The gas service has the right to shut off for non-payment (Article 30 of the Housing Code), but must warn 20 days in advance",
        "Switch to an electric stove / multicooker / induction cooktop. Buy an electric kettle. Cook outside (grill, camping stove)",
        "If the gas heating boiler doesn't work — turn on electric heaters, heated floors, air conditioner (heating mode). Watch the wiring",
        "If the outage is prolonged (winter) — contact the management company / HOA. They are required to provide alternative heating (Article 15 of the Housing Code)"
      ],
      warnings: [
        "DO NOT use the gas stove for heating the room — it causes CO poisoning and fire",
        "Camping gas stoves inside the apartment are dangerous. Only on the balcony with open windows or outside",
        "If shut off for debts — pay the debt, submit an application for reconnection. Time: 3 working days after payment",
        "DO NOT try to open the shut-off valves in the entrance — it's vandalism, criminal liability, explosive"
      ]
    }
  ]
};

// ===== EXPORT =====
window.gasDataEn = gasDataEn;