// modules/home/data/en/plumbing-en.js
// === MODULE: HOME — WATER AND SEWERAGE ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "home",
    category: "plumbing",
    version: "1.0.0",
    lang: "en",
    title: "Water and Sewerage",
    description: "Leaks, clogs, flooding, water shutoff, low pressure — what to do right now",
    icon: "🚿",
    color: "#0891b2"
  },

  questions: [
    {
      id: "plumbing_issue",
      type: "single",
      text: "What happened?",
      options: [
        { id: "leak_pipe", label: "💧 Pipe / faucet / connection is leaking", tags: ["leak"] },
        { id: "leak_ceiling", label: "💦 Water leaking from ceiling (flooded from above)", tags: ["flood_above"] },
        { id: "leak_downstairs", label: "💦 Neighbors downstairs complain I flooded them", tags: ["flood_downstairs"] },
        { id: "clog_sink", label: "🚿 Sink / bath / shower is clogged", tags: ["clog_sink"] },
        { id: "clog_toilet", label: "🚽 Toilet is clogged", tags: ["clog_toilet"] },
        { id: "clog_main", label: "💩 Main sewer pipe is clogged (water drains slowly)", tags: ["clog_main"] },
        { id: "no_water", label: "❌ No water (cold or hot)", tags: ["no_water"] },
        { id: "low_pressure", label: "💧 Low water pressure", tags: ["low_pressure"] },
        { id: "burst_pipe", label: "💥 Pipe burst / water fountain", tags: ["burst"] },
        { id: "water_smell", label: "🤢 Water smells / has unpleasant taste", tags: ["water_smell"] }
      ]
    },
    {
      id: "leak_severity",
      type: "single",
      text: "How severe is the leak?",
      conditions: { plumbing_issue: ["leak_pipe", "leak_ceiling", "burst", "leak_downstairs"] },
      options: [
        { id: "severity_drop", label: "💧 Dripping / small stream", tags: ["minor"] },
        { id: "severity_stream", label: "🌊 Flowing heavily / pouring", tags: ["major"] },
        { id: "severity_flood", label: "🌊 Flooding / water on the floor", tags: ["flood"] }
      ]
    },
    {
      id: "water_source",
      type: "single",
      text: "Where is the water from?",
      conditions: { plumbing_issue: ["leak_pipe", "leak_ceiling", "burst"] },
      options: [
        { id: "source_cold", label: "❄️ Cold water", tags: ["cold"] },
        { id: "source_hot", label: "🔥 Hot water", tags: ["hot"] },
        { id: "source_sewage", label: "💩 Sewage / dirty water", tags: ["sewage"] },
        { id: "source_unknown", label: "❓ Not sure", tags: ["unknown_source"] }
      ]
    },
    {
      id: "has_valve",
      type: "single",
      text: "Do you have access to the shutoff valve?",
      conditions: { plumbing_issue: ["leak_pipe", "burst", "leak_downstairs"] },
      options: [
        { id: "valve_yes", label: "✅ Yes, valve is accessible", tags: ["valve"] },
        { id: "valve_no", label: "❌ No / don't know where it is", tags: ["no_valve"] },
        { id: "valve_stuck", label: "⚠️ Valve is stuck / won't turn", tags: ["stuck"] }
      ]
    },
    {
      id: "pipe_type",
      type: "single",
      text: "What type of pipes do you have?",
      conditions: { plumbing_issue: ["leak_pipe", "burst"] },
      options: [
        { id: "pipe_metal", label: "🔩 Metal (steel, cast iron)", tags: ["metal"] },
        { id: "pipe_plastic", label: "🧪 Plastic (PP-R, metal-plastic)", tags: ["plastic"] },
        { id: "pipe_unknown", label: "❓ Don't know", tags: ["unknown_pipe"] }
      ]
    },
    {
      id: "is_planned_water",
      type: "single",
      text: "Is this a planned or emergency water shutoff?",
      conditions: { plumbing_issue: ["no_water"] },
      options: [
        { id: "planned_water", label: "📋 Planned (were notified / there is a schedule)", tags: ["planned"] },
        { id: "emergency_water", label: "🚨 Emergency (sudden, without warning)", tags: ["emergency_water"] },
        { id: "debt_water", label: "💸 Possibly shut off due to debt", tags: ["debt_water"] }
      ]
    },
    {
      id: "has_debt_water",
      type: "single",
      text: "Is there any debt for water?",
      conditions: { plumbing_issue: ["no_water"], is_planned_water: ["debt_water"] },
      options: [
        { id: "debt_water_yes", label: "💰 Yes, there is debt", tags: ["debt_yes"] },
        { id: "debt_water_no", label: "✅ No, I pay on time", tags: ["debt_no"] },
        { id: "debt_water_unknown", label: "❓ Don't know / possibly", tags: ["debt_unknown"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. BURST PIPE — EMERGENCY ACTION
    // ============================================================
    {
      id: "burst_pipe_emergency",
      title: "🚨 Burst pipe — emergency actions",
      description: "A water fountain can flood your apartment in minutes. Act immediately.",
      conditions: { plumbing_issue: ["burst"], leak_severity: ["major", "flood"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Flood stopped",
      tags: ["emergency", "water", "pipe"],
      steps: [
        "DON'T panic. Find the shutoff valve: usually in the bathroom, kitchen, toilet, hallway behind a panel, or basement",
        "Turn the valve CLOCKWISE until it stops (usually 2–5 turns). For a ball valve, the handle should be perpendicular to the pipe",
        "If the valve is stuck — use a wrench or pliers. Wrap a cloth to avoid damaging the coating",
        "If you can't find/close the valve — call emergency services: 01 (101 or 112). Report: 'Pipe burst, need emergency shutoff'",
        "While waiting — direct the stream into the bath/sink, place containers, spread rags, towels, blankets",
        "If water is flowing onto electrical appliances — DON'T touch them! Turn off the breaker at the panel, then clean up",
        "Take photos of the damage for insurance and the management company",
        "After shutting off the water — call a plumber or the management company's emergency service"
      ],
      warnings: [
        "DON'T touch electrical appliances with wet hands — electric shock",
        "If water is flowing onto outlets/switches — turn off the electricity BEFORE cleaning",
        "Hot water — beware of burns! Let the pipe cool for 10–15 minutes before working",
        "Don't try to patch a burst pipe with tape or a clamp — temporary measure, needs replacement"
      ]
    },
    // ============================================================
    // 2. MINOR LEAK — TEMPORARY REPAIR
    // ============================================================
    {
      id: "minor_leak_fix",
      title: "🔧 Minor leak — temporary repair",
      description: "A dripping faucet or pipe can be temporarily patched until the plumber arrives.",
      conditions: { plumbing_issue: ["leak_pipe"], leak_severity: ["minor"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Leak temporarily stopped",
      tags: ["leak", "diy", "temporary"],
      steps: [
        "Close the shutoff valve on this pipe (if there is a separate one). If not — the main valve in the apartment",
        "Open the tap below the leak to drain remaining water from the pipe",
        "Wipe the pipe dry. Sand the leak area with sandpaper",
        "Temporary repair options: plumbing clamp (compression band), epoxy putty, rubber gasket + clamp, plumbing tape",
        "For a faucet: disassemble, replace the gasket or cartridge. Buy at any hardware store (~$1-5)",
        "For a 'American' connection: tighten the nut with a wrench. Don't overtighten — can strip the threads",
        "After repair — open the valve, check for leaks. If still leaking — call a plumber",
        "Take photos, note sizes — for buying parts or calling a master"
      ],
      warnings: [
        "Temporary repair is temporary. Call a plumber within 24–48 hours",
        "Don't use superglue or spray foam on pipes — useless and dangerous",
        "If the pipe is plastic (PP-R, metal-plastic) — don't overheat, don't use open flame",
        "Hot water under pressure — be careful, you can get burned"
      ]
    },
    // ============================================================
    // 3. FLOOD FROM ABOVE
    // ============================================================
    {
      id: "flood_from_above",
      title: "🏢 Flooded from above — action plan",
      description: "Water from the ceiling is always someone else's fault. Document the damage, follow the law.",
      conditions: { plumbing_issue: ["leak_ceiling"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Property saved + evidence collected",
      tags: ["flood", "neighbor", "law"],
      steps: [
        "Immediately remove valuables, electronics, documents from the flood zone",
        "Place containers, lay out rags, towels. Remove wallpaper/tiles if water is accumulating behind them",
        "Go upstairs to the neighbors, knock. If no one is there — call the management company / emergency service",
        "Call emergency services: 01 (101/112). They must come and turn off the water in the at-fault apartment",
        "Record EVERYTHING: photos, video, time, witness statements. Document ceiling, wall, furniture, appliance damage",
        "Draw up a flood report: call a management company representative, record the cause and damage. Signatures of both parties",
        "If neighbors refuse to sign — call the police (102) to record the fact. Or make a report yourself with 2 witnesses",
        "Contact your insurance company (if you have apartment insurance) within 3–5 days",
        "Send a claim to the at-fault party by certified mail: demand for damages with calculation",
        "If the at-fault party doesn't pay — file a claim in court"
      ],
      warnings: [
        "DON'T repair the ceiling until the report is drawn up and damage assessed — difficult to prove later",
        "DON'T sign the report if you disagree with its content. Write objections, demand an independent expert assessment",
        "Statute of limitations for flooding — 3 years. But act immediately",
        "If the at-fault party is the management company — claim against the management company"
      ]
    },
    // ============================================================
    // 4. I FLOODED THE NEIGHBORS DOWNSTAIRS
    // ============================================================
    {
      id: "flood_downstairs",
      title: "💦 I flooded the neighbors downstairs — what to do",
      description: "You are at fault for the flooding. Act responsibly: stop the water, document the damage, settle with neighbors.",
      conditions: { plumbing_issue: ["leak_downstairs"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Conflict resolved + damage minimized",
      tags: ["flood", "neighbor", "liability"],
      steps: [
        "IMMEDIATELY turn off the water in your apartment (shutoff valves on pipes)",
        "Go down to the neighbors, apologize, offer help with cleanup",
        "Call a management company representative to draw up a flood report",
        "Document the damage: photos, video of the neighbors' damage",
        "If you have apartment insurance — notify your insurance company within 3–5 days",
        "Offer the neighbors a settlement: payment for repairs based on an independent estimate",
        "If neighbors agree — sign a written agreement for compensation",
        "If there is a dispute — insurance or court. In court, you may face compensation + moral damages"
      ],
      warnings: [
        "DON'T offer cash without a receipt — only by bank transfer with a report",
        "DON'T admit fault verbally — only in writing in the report and agreement",
        "If the flood was caused by a burst riser — responsibility is on the management company, not you",
        "If you rent out the apartment — responsibility is on the tenant"
      ]
    },
    // ============================================================
    // 5. CLOGGED SINK / BATH
    // ============================================================
    {
      id: "clog_sink_diy",
      title: "🪠 Clogged sink / bath — unclogging yourself",
      description: "Most household clogs can be cleared without a plumber in 15–30 minutes.",
      conditions: { plumbing_issue: ["clog_sink"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "15–30 minutes",
      yield_estimate: "Cleared in 80% of cases",
      tags: ["clog", "diy", "sink"],
      steps: [
        "Try a plunger: add water to the sink/bath, cover the drain with the plunger, push sharply 5–10 times",
        "If the plunger doesn't help — remove the siphon under the sink: unscrew the nuts, wash the siphon, reassemble",
        "For grease clogs: pour 1 cup of baking soda + 1 cup of vinegar, cover for 30 minutes, then boiling water",
        "For hair clogs: use a special hook or a straightened paperclip. Twist in the drain, pull out the clump",
        "Chemical products: pour in, wait 15–30 minutes, rinse with water. Caution: poisons, gloves",
        "Plumbing snake: insert into the drain, twist, push through the clog",
        "If nothing helps — call a plumber. Cost: $20-60"
      ],
      warnings: [
        "DON'T pour boiling water into plastic pipes — deformation, cracks",
        "Chemical products are poisons. Don't mix different products. Gloves, goggles, ventilation",
        "If the clog happens every week — problem with the pipes"
      ]
    },
    // ============================================================
    // 6. CLOGGED TOILET
    // ============================================================
    {
      id: "clog_toilet",
      title: "🚽 Clogged toilet — how to clear",
      description: "A clogged toilet is a delicate but solvable problem. Main thing — don't panic and don't flush more water.",
      conditions: { plumbing_issue: ["clog_toilet"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "15–30 minutes",
      yield_estimate: "Cleared in 70% of cases",
      tags: ["clog", "toilet", "diy"],
      steps: [
        "DON'T flush again — water will overflow. Close the valve under the tank",
        "Use a toilet plunger (with a flange): press firmly, push sharply 10–15 times",
        "If the plunger doesn't help — use a plumbing snake: insert, twist, push through the clog",
        "Chemical products for toilets: pour in, wait 30 minutes, try to flush",
        "If the clog is from an object — a snake with a hook on the end. Carefully pull out the object",
        "If nothing helps — call a plumber. Cost: $30-80"
      ],
      warnings: [
        "DON'T flush wet wipes, paper towels, tampons, diapers — they don't break down and cause clogs",
        "DON'T use boiling water — porcelain can crack from temperature shock",
        "If water rises in the bath/sink when flushing — clog in the main pipe"
      ]
    },
    // ============================================================
    // 7. MAIN PIPE CLOG — RESPONSIBILITY OF MANAGEMENT COMPANY
    // ============================================================
    {
      id: "clog_main_pipe",
      title: "💩 Main sewer pipe clog — management company responsibility",
      description: "If the clog is in the riser (common building pipe) — it's the management company's responsibility, not yours.",
      conditions: { plumbing_issue: ["clog_main"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–24 hours",
      yield_estimate: "Riser cleared by management company",
      tags: ["clog", "main_pipe", "uk"],
      steps: [
        "If water drains slowly in all fixtures — it's a riser clog",
        "DON'T try to clear the riser yourself — it's the management company's responsibility",
        "Immediately call the management company's emergency service and report the riser clog",
        "The management company must send a plumber to clear the riser within 24 hours",
        "If the management company doesn't respond — complaint to the Housing Inspectorate and prosecutor's office",
        "If the clog was caused by you (you flushed something large) — responsibility is yours",
        "If flooding occurs from the clog — document the damage, demand compensation"
      ],
      warnings: [
        "The riser is common property. It is maintained by the management company",
        "DON'T try to clear the riser yourself — you can damage the pipe",
        "If the management company doesn't fix it — you have the right to a recalculation of fees"
      ]
    },
    // ============================================================
    // 8. NO WATER
    // ============================================================
    {
      id: "no_water_action",
      title: "🚱 No water — what to do",
      description: "Water shutoff — planned or emergency. Check the cause, stock up on water, protect your plumbing.",
      conditions: { plumbing_issue: ["no_water"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Water restored or adapted",
      tags: ["no_water", "supply", "emergency"],
      steps: [
        "Check: is there no water only in your apartment or with neighbors too? Ask neighbors, check notices in the entrance",
        "Check the shutoff valves: they may have been accidentally closed. Valves should be parallel to the pipe",
        "Check the water meters: if they don't turn with the tap open — problem is before the meters (management company) or after",
        "If there's no water in the building — call the management company / emergency service",
        "Stock up on water: fill the bath with 50–100 liters, buy bottled water",
        "Close the valves on the washing machine, dishwasher, water heater",
        "If the shutoff is long-term — don't leave taps open. There may be dirty water when supply returns",
        "If water was shut off for debt — check the amount, pay it, demand reconnection"
      ],
      warnings: [
        "DON'T leave taps open during a shutoff — when water returns, you'll flood the apartment",
        "When water first returns after a shutoff — it may be rusty, dirty",
        "Planned shutoffs must be announced 3 days in advance",
        "Don't try to open the building's shutoff valves — vandalism"
      ]
    },
    // ============================================================
    // 9. LOW WATER PRESSURE
    // ============================================================
    {
      id: "low_pressure",
      title: "💧 Low water pressure — causes and solutions",
      description: "Low pressure can be due to a clogged aerator, pipe problem, or low pressure in the riser.",
      conditions: { plumbing_issue: ["low_pressure"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Pressure restored",
      tags: ["pressure", "water", "supply"],
      steps: [
        "Check: low pressure in all taps or just one?",
        "If only one — remove the aerator (faucet tip), clean it from scale and sand",
        "If in all — check the coarse filter at the apartment entrance (mesh filter)",
        "If the filter is clean — call the management company: pressure may be low in the riser",
        "If low hot water pressure — the heat exchanger in the boiler may be clogged. Call a technician",
        "If low cold water pressure — check the meter: the meter filter may be clogged"
      ],
      warnings: [
        "Low pressure may be due to a hidden pipe leak — check the meters",
        "Don't try to disassemble water meters yourself — illegal (seals)",
        "If pressure drops suddenly — possible pipe burst in the basement. Call the management company"
      ]
    },
    // ============================================================
    // 10. WATER SMELL / TASTE
    // ============================================================
    {
      id: "water_smell",
      title: "🤢 Water smells / has unpleasant taste — action plan",
      description: "Water smell is a sign of problems with the water supply. Follow the plan.",
      conditions: { plumbing_issue: ["water_smell"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 days",
      yield_estimate: "Cause identified and eliminated",
      tags: ["water", "smell", "quality"],
      steps: [
        "Check: is the smell/taste in cold or hot water? If hot — problem with the boiler",
        "If cold — check with neighbors: do they have the same smell?",
        "If neighbors also have it — problem with the water utility. Call the management company or water utility",
        "If only you — problem with pipes inside the apartment (stagnation, rust)",
        "Sulfur smell (rotten eggs) — sign of organic decomposition in pipes",
        "Chlorine smell — normal (chlorination), but if strong — complain",
        "Musty/earthy smell — signs of biofouling in pipes",
        "Call a plumber for inspection. For serious violations — complaint to sanitary authorities"
      ],
      warnings: [
        "DON'T drink water with a smell/taste until you find the cause",
        "Sulfur smell is dangerous to health. Contact the management company and water utility",
        "If the smell is after a long shutoff — normal, just run the water"
      ]
    }
  ]
});