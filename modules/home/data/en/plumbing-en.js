// === MODULE: HOME — WATER AND SEWERAGE ===
const plumbingDataEn = {
  category: "plumbing",
  title: "?? Water and sewerage",
  description: "Leaks, clogs, flooding, water outage — what to do right now",

  questions: [
    {
      id: "plumbing_issue",
      text: "What happened?",
      type: "single",
      options: [
        { id: "leak_pipe", label: "?? Pipe / faucet / joint is leaking", tags: ["leak", "pipe"] },
        { id: "leak_ceiling", label: "?? Leaking from ceiling / flooded from above", tags: ["leak", "ceiling", "flood"] },
        { id: "clog_sink", label: "?? Sink / bathtub / shower is clogged", tags: ["clog", "sink"] },
        { id: "clog_toilet", label: "?? Toilet is clogged", tags: ["clog", "toilet"] },
        { id: "no_water", label: "? No water (cold or hot)", tags: ["no_water"] },
        { id: "burst_pipe", label: "?? Pipe burst / water fountain", tags: ["burst", "emergency"] }
      ]
    },
    {
      id: "leak_severity",
      text: "How severe is the leak?",
      type: "single",
      conditions: { plumbing_issue: ["leak_pipe", "leak_ceiling", "burst_pipe"] },
      options: [
        { id: "severity_drop", label: "?? Dripping / small trickle", tags: ["minor"] },
        { id: "severity_stream", label: "?? Heavy flow / pouring", tags: ["major"] },
        { id: "severity_flood", label: "?? Flooding / water on the floor", tags: ["flood"] }
      ]
    },
    {
      id: "water_source",
      text: "Where is the water from?",
      type: "single",
      conditions: { plumbing_issue: ["leak_pipe", "leak_ceiling", "burst_pipe"] },
      options: [
        { id: "source_cold", label: "Cold water", tags: ["cold"] },
        { id: "source_hot", label: "Hot water", tags: ["hot"] },
        { id: "source_sewage", label: "Sewage / dirty water", tags: ["sewage"] },
        { id: "source_unknown", label: "Not sure", tags: ["unknown"] }
      ]
    },
    {
      id: "has_valve",
      text: "Do you have access to the shut-off valve?",
      type: "single",
      conditions: { plumbing_issue: ["leak_pipe", "burst_pipe"] },
      options: [
        { id: "valve_yes", label: "Yes, the valve is accessible", tags: ["valve"] },
        { id: "valve_no", label: "No / I don't know where it is", tags: ["no_valve"] },
        { id: "valve_stuck", label: "The valve is stuck / won't turn", tags: ["stuck"] }
      ]
    }
  ],

  solutions: [
    {
      id: "burst_pipe_emergency",
      title: "?? Burst pipe — emergency actions",
      description: "A water fountain can flood your apartment in minutes. Act immediately.",
      conditions: { plumbing_issue: ["burst_pipe"], leak_severity: ["severity_stream", "severity_flood"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Stop the flood",
      tags: ["emergency", "water", "pipe"],
      steps: [
        "DON'T panic. Find the shut-off valve: usually in the bathroom, kitchen, toilet, hallway behind a panel, or in the basement",
        "Turn the valve CLOCKWISE until it stops (usually 2–5 turns). If it's a ball valve — the handle should be perpendicular to the pipe",
        "If the valve is stuck — use a wrench or pliers. Put a cloth on it to avoid damaging the surface",
        "If you can't find/close the valve — call the emergency service: 01 (from mobile 101 or 112). Report: 'Pipe burst, need emergency shut-off'",
        "While waiting — direct the stream into the bathtub/sink, place containers, lay out rags, towels, blankets",
        "If water is leaking onto electrical appliances — DO NOT touch them with wet hands! Turn off the circuit breaker in the panel, then clean up",
        "Take photos of the damage for insurance and the management company",
        "After shutting off the water — call a plumber or the emergency service of the management company. Don't try to replace the pipe yourself if you lack experience"
      ],
      warnings: [
        "DO NOT touch electrical appliances with wet hands — risk of electric shock",
        "If water is leaking onto sockets/switches — turn off the electricity in the panel BEFORE cleaning up the water",
        "Hot water — be careful, burns! Let the pipe cool down for 10–15 minutes before working",
        "Don't try to fix a burst pipe with tape or a clamp — it's temporary, the section needs replacement"
      ]
    },
    {
      id: "minor_leak_fix",
      title: "?? Minor leak — temporary fix",
      description: "A dripping faucet or pipe can be temporarily patched until the plumber arrives.",
      conditions: { plumbing_issue: ["leak_pipe"], leak_severity: ["severity_drop"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10–30 minutes",
      yield_estimate: "Temporary stop of the leak",
      tags: ["leak", "diy", "temporary"],
      steps: [
        "Close the shut-off valve on this pipe (if there is a separate one). If not — the main valve in the apartment",
        "Open the faucet below the leak to drain the remaining water from the pipe",
        "Wipe the pipe dry. Sand the leak area with sandpaper",
        "Temporary repair options: plumbing clamp (compression tape), epoxy putty, rubber gasket + clamp, plumbing tape (PTFE)",
        "For a faucet: disassemble the faucet, replace the gasket or cartridge. Buy it at any hardware store (~50–200 rubles)",
        "For a 'American' fitting: tighten the nut with a wrench. Don't overtighten — you can strip the threads",
        "After the repair — open the faucet, check if it's leaking. If it's still leaking — call a plumber",
        "Take photos, write down the measurements — for buying spare parts or calling a master"
      ],
      warnings: [
        "Temporary repair is temporary. Call a plumber within 24–48 hours",
        "Don't use superglue or expanding foam for pipes — it's useless and dangerous",
        "If the pipe is plastic (PP-R, metal-plastic) — don't overheat it, don't use open flame",
        "Hot water under pressure — be careful, you can get burned"
      ]
    },
    {
      id: "flood_from_above",
      title: "?? Flooded from above — action plan",
      description: "Water from the ceiling is always someone else's fault. Document the damage, act according to the law.",
      conditions: { plumbing_issue: ["leak_ceiling"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "30–60 minutes",
      yield_estimate: "Property preservation + evidence",
      tags: ["flood", "neighbor", "law"],
      steps: [
        "Immediately move valuables, electronics, documents out of the flood zone",
        "Place containers, lay out rags, towels. Remove wallpaper/tiles if water is accumulating behind them",
        "Go upstairs to your neighbors and knock. If no one is home — call the management company / emergency service",
        "Call the emergency service: 01 (101/112). They are required to come and shut off the water in the guilty apartment",
        "Document EVERYTHING: photos, videos, time, witness statements. Take pictures of damage to ceilings, walls, furniture, appliances",
        "Draw up a flood report: call a representative from the management company, record the causes and damages. Signatures from both parties",
        "If neighbors refuse to sign the report — call the police (102) to document the fact. Or draw up the report yourself with 2 witnesses",
        "Contact your insurance company (if you have apartment insurance) within 3–5 days",
        "Send a claim to the perpetrator by registered mail with acknowledgment: demand for compensation with calculation",
        "If the perpetrator doesn't pay — file a lawsuit in magistrate's court. Maximum amount without state fee — 100,000 rubles (Article 23 of the Code of Civil Procedure). Above — district court"
      ],
      warnings: [
        "DO NOT repair the ceiling until a report is made and the damage is assessed — otherwise it's hard to prove",
        "DO NOT sign the report if you disagree with its content. Write objections, demand an independent assessment",
        "Statute of limitations for flooding — 3 years. But act immediately, while witnesses remember",
        "If the culprit is the management company (riser burst) — claim against the management company. If neighbor — claim against neighbor. If unclear — against both",
        "Apartment insurance covers flood damage, but not always — read the contract"
      ]
    },
    {
      id: "clog_sink_diy",
      title: "?? Clogged sink / bathtub — DIY unclogging",
      description: "Most household clogs can be cleared without a plumber in 15–30 minutes.",
      conditions: { plumbing_issue: ["clog_sink"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15–30 minutes",
      yield_estimate: "Unclogged in 80% of cases",
      tags: ["clog", "diy", "sink"],
      steps: [
        "Try a plunger: pour water into the sink/bathtub, cover the drain with the plunger, pump sharply 5–10 times. For double sinks — cover the other drain with a cloth",
        "If the plunger doesn't work — remove the siphon under the sink: unscrew the nuts by hand or with a wrench, clean the siphon, reassemble",
        "For grease clogs: pour 1 cup of baking soda + 1 cup of vinegar, cover with a stopper for 30 minutes, then pour boiling water",
        "For hair clogs: use a special hook (~100 rubles at a hardware store) or a straightened paperclip. Twist it in the drain, pull out the clump",
        "Chemical agents (Domeestos, Mole, Tiret): pour in, wait 15–30 minutes, rinse with water. Caution: poisons, wear gloves, ventilate",
        "Plumbing snake (flexible): insert into the drain, twist, push through the clog. For deep clogs — 3–5 meter snake",
        "If nothing helps — call a plumber. Cost of unclogging: 1000–3000 rubles (depends on complexity)"
      ],
      warnings: [
        "DO NOT pour boiling water into plastic pipes — deformation, cracks, subsequent leaks",
        "Chemical agents are poisons. Don't mix different agents (there may be a reaction with chlorine). Gloves, goggles, ventilation",
        "If the clog repeats every week — the problem is in the pipes. Professional cleaning with a snake or hydro-dynamic cleaning is needed",
        "DO NOT use electrical wire — it can get stuck in the pipe and worsen the clog"
      ]
    },
    {
      id: "clog_toilet",
      title: "?? Clogged toilet — how to unclog",
      description: "A clogged toilet is a delicate but solvable problem. The main thing is not to panic and not to add more water.",
      conditions: { plumbing_issue: ["clog_toilet"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15–30 minutes",
      yield_estimate: "Unclogged in 70% of cases",
      tags: ["clog", "toilet", "diy"],
      steps: [
        "DO NOT flush again — water will overflow. Close the valve under the tank (small tap on the side or below) so the tank doesn't refill",
        "Use a toilet plunger (with a flange): press firmly, pump sharply 10–15 times. A sink plunger is NOT suitable",
        "If the plunger doesn't work — use a plumbing snake (flexible 3–5 m): insert, twist, push through the clog. Don't scratch the porcelain",
        "Chemical agents for toilets (Tiret, Domeestos): pour in, wait 30 minutes, try to flush. Don't use boiling water — cracks in the porcelain",
        "If the clog is from an object (toy, phone, wipes) — a snake with a hook at the end. Carefully pull out the object",
        "If nothing helps — call a plumber. Cost: 1500–4000 rubles. For complex cases — high-pressure cleaning (5000–8000 rubles)"
      ],
      warnings: [
        "DO NOT flush wet wipes, paper towels, tampons, diapers — they don't dissolve and create clogs",
        "DO NOT use boiling water — porcelain can crack from temperature shock",
        "Toilet chemicals are aggressive. Gloves, goggles, ventilation. Don't mix with other products",
        "If water rises in the bathtub/sink when flushing — the clog is in the common pipe, not in the toilet. Need a plumber with a snake"
      ]
    },
    {
      id: "no_water_action",
      title: "?? No water — what to do",
      description: "Water outage — planned or emergency. Check the cause, stock up on water, protect your plumbing.",
      conditions: { plumbing_issue: ["no_water"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Restoration of supply or adaptation",
      tags: ["no_water", "supply", "emergency"],
      steps: [
        "Check: is there no water only for you or for the neighbors too? Ask neighbors, check announcements in the entrance / building chat",
        "Check the shut-off valves: they might have been accidentally closed during repairs. Valves should be parallel to the pipe",
        "Check the water meters: if they don't spin when the faucet is open — the problem is before the meters (management company) or after (your apartment)",
        "If there's no water in the building — call the management company / emergency service. Ask: planned outage or emergency, restoration time",
        "Stock up on water: fill the bathtub with 50–100 liters (for flushing the toilet, washing), buy bottled water for drinking and cooking",
        "Close the valves on the washing machine, dishwasher, water heater — to avoid water hammer when the supply returns",
        "If the outage is prolonged (more than a day) — don't leave faucets open. When the supply returns, there may be dirty water — let it flow into the bathtub first",
        "If the water was cut off for debts — check: are they only for your debts? If the management company owes for water — it's illegal, complaint to GZHI and the prosecutor's office"
      ],
      warnings: [
        "DO NOT leave faucets open during an outage — when the supply returns, it will flood your apartment and neighbors",
        "On first supply after an outage — the water may be rusty or dirty. Let it run into the bathtub for 5–10 minutes, then open the kitchen faucet",
        "If the water was cut off without warning — it's a violation. Planned outages must be announced 3 days in advance (Decree No. 354)",
        "Don't try to open the shut-off valves in the entrance — it's vandalism and criminal liability"
      ]
    }
  ]
};

// ===== EXPORT =====
window.plumbingDataEn = plumbingDataEn;
