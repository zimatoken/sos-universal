const plumbingDataEn = {
  category: "plumbing",
  title: "🚿 Water & Plumbing",
  description: "Leaks, clogs, flooding, water shutoff — what to do right now",
  questions: [
    { id: "plumbing_issue", text: "What happened?", type: "single",
      options: [
        { id: "leak_pipe", label: "💧 Leaking pipe / faucet / joint", tags: ["leak", "pipe"] },
        { id: "leak_ceiling", label: "💦 Water from ceiling / flooded from above", tags: ["leak", "ceiling", "flood"] },
        { id: "clog_sink", label: "🚿 Clogged sink / bath / shower", tags: ["clog", "sink"] },
        { id: "clog_toilet", label: "🚽 Clogged toilet", tags: ["clog", "toilet"] },
        { id: "no_water", label: "❌ No water (cold or hot)", tags: ["no_water"] },
        { id: "burst_pipe", label: "💥 Burst pipe / water gushing", tags: ["burst", "emergency"] }
      ]
    },
    { id: "leak_severity", text: "How bad is the leak?", type: "single",
      options: [
        { id: "drop", label: "💧 Dripping / small stream", tags: ["minor"] },
        { id: "stream", label: "🌊 Strong flow / gushing", tags: ["major"] },
        { id: "flood", label: "🌊 Flooding / water on floor", tags: ["flood"] }
      ]
    },
    { id: "water_source", text: "What kind of water?", type: "single",
      options: [
        { id: "cold", label: "❄️ Cold water", tags: ["cold"] },
        { id: "hot", label: "🔥 Hot water", tags: ["hot"] },
        { id: "sewage", label: "💩 Sewage / dirty water", tags: ["sewage"] },
        { id: "dont_know", label: "❓ Not sure", tags: ["unknown"] }
      ]
    },
    { id: "has_valve", text: "Is the shutoff valve accessible?", type: "single",
      options: [
        { id: "yes", label: "✅ Yes, valve is accessible", tags: ["valve"] },
        { id: "no", label: "❌ No / don't know where it is", tags: ["no_valve"] },
        { id: "stuck", label: "🔧 Valve is stuck / won't turn", tags: ["stuck"] }
      ]
    }
  ],
  solutions: [
    {
      id: "burst_pipe_emergency",
      title: "🚨 Burst Pipe — Emergency Actions",
      description: "A burst pipe can flood your home in minutes. Act immediately.",
      conditions: { plumbing_issue: ["burst_pipe"], leak_severity: ["stream", "flood"] },
      priority: "fast", reliability: "high", time_estimate: "5–15 min", yield_estimate: "Stop the flood",
      tags: ["emergency", "water", "pipe"],
      steps: [
        "Don't panic. Find the shutoff valve: usually in bathroom, kitchen, toilet, hallway hatch, or basement",
        "Turn the valve CLOCKWISE until tight (2–5 turns). For ball valves — handle should be perpendicular to pipe",
        "If valve is stuck — use an adjustable wrench or pliers. Wrap a cloth to protect the finish",
        "If you can't find/close the valve — call emergency services. Say: 'Burst pipe, need emergency shutoff'",
        "While waiting — direct water into tub/sink, place containers, lay towels and sheets",
        "If water is hitting electrical appliances — DON'T touch them! Turn off breaker first, then clean up",
        "Photograph damage for insurance and property management",
        "After water is off — call a plumber or emergency service. Don't attempt to replace pipes without experience"
      ],
      warnings: [
        "DON'T touch electrical appliances with wet hands — electrocution risk",
        "If water is hitting outlets/switches — turn off electricity at breaker BEFORE cleaning",
        "Hot water — beware of burns! Let pipe cool 10–15 min before working",
        "Don't try to tape a burst pipe — temporary only, needs replacement"
      ]
    },
    {
      id: "minor_leak_fix",
      title: "🔧 Minor Leak — Temporary Repair",
      description: "A dripping faucet or pipe can be temporarily patched until the plumber arrives.",
      conditions: { plumbing_issue: ["leak_pipe"], leak_severity: ["drop"] },
      priority: "medium", reliability: "medium", time_estimate: "10–30 min", yield_estimate: "Temporary stop",
      tags: ["leak", "diy", "temporary"],
      steps: [
        "Shut off the valve for this pipe. If none — use the main apartment valve",
        "Open a faucet below the leak to drain remaining water",
        "Dry the pipe. Sand the leak area",
        "Temporary fixes: pipe clamp, epoxy putty, rubber gasket + clamp, plumber's tape",
        "For faucet: disassemble, replace washer or cartridge. Buy at any hardware store (~$1–3)",
        "For threaded joint — tighten nut with wrench. Don't overtighten — can strip threads",
        "After repair — open valve, check for leaks. If still leaking — call a plumber",
        "Photograph and note sizes — for buying parts or calling a pro"
      ],
      warnings: [
        "Temporary repair is temporary. Call a plumber within 24–48 hours",
        "Don't use superglue or foam on pipes — useless and dangerous",
        "If pipe is plastic (PPR, PEX) — don't overheat, no open flame",
        "Hot water under pressure — be careful, risk of burns"
      ]
    },
    {
      id: "ceiling_leak",
      title: "🏢 Ceiling Leak — Upstairs Flooded You",
      description: "Water from above is always someone else's fault. Document damage, act legally.",
      conditions: { plumbing_issue: ["leak_ceiling"] },
      priority: "fast", reliability: "high", time_estimate: "30–60 min", yield_estimate: "Preserve property + evidence",
      tags: ["flood", "neighbor", "law"],
      steps: [
        "Immediately remove valuables, electronics, documents from the flooded area",
        "Place containers, lay towels. Remove wallpaper/tiles if water is pooling behind them",
        "Go upstairs, knock. If no one is home — call property management / emergency service",
        "Call emergency services. They must come and shut off water to the responsible apartment",
        "Document EVERYTHING: photos, video, time, witness statements. Capture ceiling, walls, furniture, appliance damage",
        "Create a flood damage report: call property management rep, document causes and damage. Both parties sign",
        "If neighbors refuse to sign — call police for documentation. Or create your own report with 2 witnesses",
        "Contact your home insurance (if you have it) within 3–5 days",
        "Send a certified claim letter to the responsible party: demand compensation with calculation",
        "If they don't pay — file in small claims court"
      ],
      warnings: [
        "DON'T repair the ceiling until the report is made and damage assessed — hard to prove later",
        "DON'T sign a report you disagree with. Add objections, demand independent assessment",
        "Statute of limitations for flood claims — 3 years. But act immediately while witnesses remember",
        "If responsible party is property management (main pipe burst) — sue them. If neighbor — sue neighbor. If unclear — sue both"
      ]
    },
    {
      id: "clog_sink_diy",
      title: "🪠 Clogged Sink / Bath — DIY Unclogging",
      description: "Most household clogs clear without a plumber in 15–30 minutes.",
      conditions: { plumbing_issue: ["clog_sink"] },
      priority: "medium", reliability: "high", time_estimate: "15–30 min", yield_estimate: "Clear in 80% of cases",
      tags: ["clog", "diy", "sink"],
      steps: [
        "Try a plunger: fill sink/bath with water, cover with plunger, push sharply 5–10 times. For double sinks — plug the other drain with a rag",
        "If plunger fails — remove the P-trap under sink: unscrew nuts by hand or wrench, clean trap, reassemble",
        "For grease clogs: pour 1 cup baking soda + 1 cup vinegar, plug for 30 min, then boiling water",
        "For hair clogs: use a drain snake (~$2 at hardware store) or straightened paperclip. Twist in drain, pull out clump",
        "Chemical drain cleaners: pour, wait 15–30 min, flush with water. Caution: toxic, gloves, ventilate",
        "Plumber's snake (flexible 3–5m): insert, twist, push through clog. For deep clogs",
        "If nothing works — call a plumber. Cost: $15–40 (depending on complexity)"
      ],
      warnings: [
        "DON'T pour boiling water into plastic pipes — warping, cracks, future leaks",
        "Chemical cleaners — poisons. Don't mix different brands (chlorine reaction). Gloves, goggles, ventilation",
        "If clog repeats weekly — problem is in the main line. Needs professional snaking or hydro-jetting",
        "DON'T use electrical wire — can get stuck and worsen the clog"
      ]
    },
    {
      id: "clog_toilet",
      title: "🚽 Clogged Toilet — How to Clear",
      description: "A clogged toilet is delicate but solvable. Don't panic, don't flush repeatedly.",
      conditions: { plumbing_issue: ["clog_toilet"] },
      priority: "medium", reliability: "high", time_estimate: "15–30 min", yield_estimate: "Clear in 70% of cases",
      tags: ["clog", "toilet", "diy"],
      steps: [
        "DON'T flush again — water will overflow. Close the tank valve (small valve on side or bottom), stop tank refilling",
        "Use a toilet plunger (with flange): press firmly, push sharply 10–15 times. Sink plungers won't work",
        "If plunger fails — use a toilet auger (flexible 3–5m): insert, twist, push through clog. Don't scratch porcelain",
        "Chemical toilet cleaners: pour, wait 30 min, try flushing. Don't use boiling water — can crack porcelain",
        "If clog is from an object (toy, phone, wipes) — auger with hook end. Carefully retrieve object",
        "If nothing works — call a plumber. Cost: $20–50. For severe cases — hydro-jetting ($60–100)"
      ],
      warnings: [
        "DON'T flush wet wipes, paper towels, tampons, diapers — they don't dissolve and cause clogs",
        "DON'T use boiling water — porcelain can crack from thermal shock",
        "Toilet chemicals are aggressive. Gloves, goggles, ventilation. Don't mix with other products",
        "If water rises in bath/sink when flushing — clog is in main line, not toilet. Need pro with auger"
      ]
    },
    {
      id: "no_water_action",
      title: "🚱 No Water — What to Do",
      description: "Water shutoff — planned, emergency, or debt-related. Check cause, stock up, protect plumbing.",
      conditions: { plumbing_issue: ["no_water"] },
      priority: "medium", reliability: "high", time_estimate: "10–30 min", yield_estimate: "Restoration or adaptation",
      tags: ["no_water", "supply", "emergency"],
      steps: [
        "Check: is it just you or neighbors? Ask neighbors, check building notices/chat",
        "Check shutoff valves: accidentally closed during repairs? Valves should be parallel to pipe",
        "Check water meter: if dial doesn't move when faucet is open — problem is before meter (utility company)",
        "If no water in building — call utility company or emergency. Ask: planned or emergency, restoration time",
        "Stock up: fill bathtub with 50–100 liters (for toilet flushing, washing), buy bottled water for drinking/cooking",
        "Close valves on washing machine, dishwasher, water heater — prevent water hammer when supply returns",
        "If shutoff is debt-related — check if it's YOUR debt. If management company owes — illegal, file complaint",
        "After long shutoff — don't open faucets immediately. First water may be rusty/dirty. Run in tub 5–10 min"
      ],
      warnings: [
        "DON'T leave faucets open during shutoff — when water returns, it can flood your home and neighbors'",
        "After restoration — first water may be rusty. Run in bathtub 5–10 min before using kitchen",
        "If shutoff without notice — it's a violation. Planned shutoffs require 3-day notice",
        "Don't attempt to open building main valves — vandalism, criminal liability, explosion risk"
      ]
    }
  ]
};
window.plumbingDataEn = plumbingDataEn;
