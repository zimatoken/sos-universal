const plumbingData = {
  category: "plumbing",
  title: "рџљї Water & Plumbing",
  description: "Leaks, clogs, flooding, water shutoff вЂ” what to do right now",
  questions: [
    { id: "plumbing_issue", text: "What happened?", type: "single",
      options: [
        { id: "leak_pipe", label: "рџ’§ Leaking pipe / faucet / joint", tags: ["leak", "pipe"] },
        { id: "leak_ceiling", label: "рџ’¦ Water from ceiling / flooded from above", tags: ["leak", "ceiling", "flood"] },
        { id: "clog_sink", label: "рџљї Clogged sink / bath / shower", tags: ["clog", "sink"] },
        { id: "clog_toilet", label: "рџљЅ Clogged toilet", tags: ["clog", "toilet"] },
        { id: "no_water", label: "вќЊ No water (cold or hot)", tags: ["no_water"] },
        { id: "burst_pipe", label: "рџ’Ґ Burst pipe / water gushing", tags: ["burst", "emergency"] }
      ]
    },
    { id: "leak_severity", text: "How bad is the leak?", type: "single",
      options: [
        { id: "drop", label: "рџ’§ Dripping / small stream", tags: ["minor"] },
        { id: "stream", label: "рџЊЉ Strong flow / gushing", tags: ["major"] },
        { id: "flood", label: "рџЊЉ Flooding / water on floor", tags: ["flood"] }
      ]
    },
    { id: "water_source", text: "What kind of water?", type: "single",
      options: [
        { id: "cold", label: "вќ„пёЏ Cold water", tags: ["cold"] },
        { id: "hot", label: "рџ”Ґ Hot water", tags: ["hot"] },
        { id: "sewage", label: "рџ’© Sewage / dirty water", tags: ["sewage"] },
        { id: "dont_know", label: "вќ“ Not sure", tags: ["unknown"] }
      ]
    },
    { id: "has_valve", text: "Is the shutoff valve accessible?", type: "single",
      options: [
        { id: "yes", label: "вњ… Yes, valve is accessible", tags: ["valve"] },
        { id: "no", label: "вќЊ No / don't know where it is", tags: ["no_valve"] },
        { id: "stuck", label: "рџ”§ Valve is stuck / won't turn", tags: ["stuck"] }
      ]
    }
  ],
  solutions: [
    {
      id: "burst_pipe_emergency",
      title: "рџљЁ Burst Pipe вЂ” Emergency Actions",
      description: "A burst pipe can flood your home in minutes. Act immediately.",
      conditions: { plumbing_issue: ["burst_pipe"], leak_severity: ["stream", "flood"] },
      priority: "fast", reliability: "high", time_estimate: "5вЂ“15 min", yield_estimate: "Stop the flood",
      tags: ["emergency", "water", "pipe"],
      steps: [
        "Don't panic. Find the shutoff valve: usually in bathroom, kitchen, toilet, hallway hatch, or basement",
        "Turn the valve CLOCKWISE until tight (2вЂ“5 turns). For ball valves вЂ” handle should be perpendicular to pipe",
        "If valve is stuck вЂ” use an adjustable wrench or pliers. Wrap a cloth to protect the finish",
        "If you can't find/close the valve вЂ” call emergency services. Say: 'Burst pipe, need emergency shutoff'",
        "While waiting вЂ” direct water into tub/sink, place containers, lay towels and sheets",
        "If water is hitting electrical appliances вЂ” DON'T touch them! Turn off breaker first, then clean up",
        "Photograph damage for insurance and property management",
        "After water is off вЂ” call a plumber or emergency service. Don't attempt to replace pipes without experience"
      ],
      warnings: [
        "DON'T touch electrical appliances with wet hands вЂ” electrocution risk",
        "If water is hitting outlets/switches вЂ” turn off electricity at breaker BEFORE cleaning",
        "Hot water вЂ” beware of burns! Let pipe cool 10вЂ“15 min before working",
        "Don't try to tape a burst pipe вЂ” temporary only, needs replacement"
      ]
    },
    {
      id: "minor_leak_fix",
      title: "рџ”§ Minor Leak вЂ” Temporary Repair",
      description: "A dripping faucet or pipe can be temporarily patched until the plumber arrives.",
      conditions: { plumbing_issue: ["leak_pipe"], leak_severity: ["drop"] },
      priority: "medium", reliability: "medium", time_estimate: "10вЂ“30 min", yield_estimate: "Temporary stop",
      tags: ["leak", "diy", "temporary"],
      steps: [
        "Shut off the valve for this pipe. If none вЂ” use the main apartment valve",
        "Open a faucet below the leak to drain remaining water",
        "Dry the pipe. Sand the leak area",
        "Temporary fixes: pipe clamp, epoxy putty, rubber gasket + clamp, plumber's tape",
        "For faucet: disassemble, replace washer or cartridge. Buy at any hardware store (~$1вЂ“3)",
        "For threaded joint вЂ” tighten nut with wrench. Don't overtighten вЂ” can strip threads",
        "After repair вЂ” open valve, check for leaks. If still leaking вЂ” call a plumber",
        "Photograph and note sizes вЂ” for buying parts or calling a pro"
      ],
      warnings: [
        "Temporary repair is temporary. Call a plumber within 24вЂ“48 hours",
        "Don't use superglue or foam on pipes вЂ” useless and dangerous",
        "If pipe is plastic (PPR, PEX) вЂ” don't overheat, no open flame",
        "Hot water under pressure вЂ” be careful, risk of burns"
      ]
    },
    {
      id: "ceiling_leak",
      title: "рџЏў Ceiling Leak вЂ” Upstairs Flooded You",
      description: "Water from above is always someone else's fault. Document damage, act legally.",
      conditions: { plumbing_issue: ["leak_ceiling"] },
      priority: "fast", reliability: "high", time_estimate: "30вЂ“60 min", yield_estimate: "Preserve property + evidence",
      tags: ["flood", "neighbor", "law"],
      steps: [
        "Immediately remove valuables, electronics, documents from the flooded area",
        "Place containers, lay towels. Remove wallpaper/tiles if water is pooling behind them",
        "Go upstairs, knock. If no one is home вЂ” call property management / emergency service",
        "Call emergency services. They must come and shut off water to the responsible apartment",
        "Document EVERYTHING: photos, video, time, witness statements. Capture ceiling, walls, furniture, appliance damage",
        "Create a flood damage report: call property management rep, document causes and damage. Both parties sign",
        "If neighbors refuse to sign вЂ” call police for documentation. Or create your own report with 2 witnesses",
        "Contact your home insurance (if you have it) within 3вЂ“5 days",
        "Send a certified claim letter to the responsible party: demand compensation with calculation",
        "If they don't pay вЂ” file in small claims court"
      ],
      warnings: [
        "DON'T repair the ceiling until the report is made and damage assessed вЂ” hard to prove later",
        "DON'T sign a report you disagree with. Add objections, demand independent assessment",
        "Statute of limitations for flood claims вЂ” 3 years. But act immediately while witnesses remember",
        "If responsible party is property management (main pipe burst) вЂ” sue them. If neighbor вЂ” sue neighbor. If unclear вЂ” sue both"
      ]
    },
    {
      id: "clog_sink_diy",
      title: "рџЄ  Clogged Sink / Bath вЂ” DIY Unclogging",
      description: "Most household clogs clear without a plumber in 15вЂ“30 minutes.",
      conditions: { plumbing_issue: ["clog_sink"] },
      priority: "medium", reliability: "high", time_estimate: "15вЂ“30 min", yield_estimate: "Clear in 80% of cases",
      tags: ["clog", "diy", "sink"],
      steps: [
        "Try a plunger: fill sink/bath with water, cover with plunger, push sharply 5вЂ“10 times. For double sinks вЂ” plug the other drain with a rag",
        "If plunger fails вЂ” remove the P-trap under sink: unscrew nuts by hand or wrench, clean trap, reassemble",
        "For grease clogs: pour 1 cup baking soda + 1 cup vinegar, plug for 30 min, then boiling water",
        "For hair clogs: use a drain snake (~$2 at hardware store) or straightened paperclip. Twist in drain, pull out clump",
        "Chemical drain cleaners: pour, wait 15вЂ“30 min, flush with water. Caution: toxic, gloves, ventilate",
        "Plumber's snake (flexible 3вЂ“5m): insert, twist, push through clog. For deep clogs",
        "If nothing works вЂ” call a plumber. Cost: $15вЂ“40 (depending on complexity)"
      ],
      warnings: [
        "DON'T pour boiling water into plastic pipes вЂ” warping, cracks, future leaks",
        "Chemical cleaners вЂ” poisons. Don't mix different brands (chlorine reaction). Gloves, goggles, ventilation",
        "If clog repeats weekly вЂ” problem is in the main line. Needs professional snaking or hydro-jetting",
        "DON'T use electrical wire вЂ” can get stuck and worsen the clog"
      ]
    },
    {
      id: "clog_toilet",
      title: "рџљЅ Clogged Toilet вЂ” How to Clear",
      description: "A clogged toilet is delicate but solvable. Don't panic, don't flush repeatedly.",
      conditions: { plumbing_issue: ["clog_toilet"] },
      priority: "medium", reliability: "high", time_estimate: "15вЂ“30 min", yield_estimate: "Clear in 70% of cases",
      tags: ["clog", "toilet", "diy"],
      steps: [
        "DON'T flush again вЂ” water will overflow. Close the tank valve (small valve on side or bottom), stop tank refilling",
        "Use a toilet plunger (with flange): press firmly, push sharply 10вЂ“15 times. Sink plungers won't work",
        "If plunger fails вЂ” use a toilet auger (flexible 3вЂ“5m): insert, twist, push through clog. Don't scratch porcelain",
        "Chemical toilet cleaners: pour, wait 30 min, try flushing. Don't use boiling water вЂ” can crack porcelain",
        "If clog is from an object (toy, phone, wipes) вЂ” auger with hook end. Carefully retrieve object",
        "If nothing works вЂ” call a plumber. Cost: $20вЂ“50. For severe cases вЂ” hydro-jetting ($60вЂ“100)"
      ],
      warnings: [
        "DON'T flush wet wipes, paper towels, tampons, diapers вЂ” they don't dissolve and cause clogs",
        "DON'T use boiling water вЂ” porcelain can crack from thermal shock",
        "Toilet chemicals are aggressive. Gloves, goggles, ventilation. Don't mix with other products",
        "If water rises in bath/sink when flushing вЂ” clog is in main line, not toilet. Need pro with auger"
      ]
    },
    {
      id: "no_water_action",
      title: "рџљ± No Water вЂ” What to Do",
      description: "Water shutoff вЂ” planned, emergency, or debt-related. Check cause, stock up, protect plumbing.",
      conditions: { plumbing_issue: ["no_water"] },
      priority: "medium", reliability: "high", time_estimate: "10вЂ“30 min", yield_estimate: "Restoration or adaptation",
      tags: ["no_water", "supply", "emergency"],
      steps: [
        "Check: is it just you or neighbors? Ask neighbors, check building notices/chat",
        "Check shutoff valves: accidentally closed during repairs? Valves should be parallel to pipe",
        "Check water meter: if dial doesn't move when faucet is open вЂ” problem is before meter (utility company)",
        "If no water in building вЂ” call utility company or emergency. Ask: planned or emergency, restoration time",
        "Stock up: fill bathtub with 50вЂ“100 liters (for toilet flushing, washing), buy bottled water for drinking/cooking",
        "Close valves on washing machine, dishwasher, water heater вЂ” prevent water hammer when supply returns",
        "If shutoff is debt-related вЂ” check if it's YOUR debt. If management company owes вЂ” illegal, file complaint",
        "After long shutoff вЂ” don't open faucets immediately. First water may be rusty/dirty. Run in tub 5вЂ“10 min"
      ],
      warnings: [
        "DON'T leave faucets open during shutoff вЂ” when water returns, it can flood your home and neighbors'",
        "After restoration вЂ” first water may be rusty. Run in bathtub 5вЂ“10 min before using kitchen",
        "If shutoff without notice вЂ” it's a violation. Planned shutoffs require 3-day notice",
        "Don't attempt to open building main valves вЂ” vandalism, criminal liability, explosion risk"
      ]
    }
  ]
};
window.plumbingDataEn = plumbingData;
