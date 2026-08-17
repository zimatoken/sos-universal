// === MODULE: HOME — LOCKS AND DOORS ===
const lockDataEn = {
  category: "lock",
  title: "🔐 Locks and doors",
  description: "Lock stuck, lost keys, break-in, protection against intrusion",

  questions: [
    {
      id: "lock_issue",
      text: "What happened?",
      type: "single",
      options: [
        { id: "lost_keys", label: "🔑 Lost keys / left them inside", tags: ["lost"] },
        { id: "jammed", label: "🔒 Lock is jammed / key won't turn", tags: ["jammed"] },
        { id: "broken_key", label: "🔑 Key broke in the lock", tags: ["broken"] },
        { id: "forced_entry", label: "🚨 Attempted break-in / door was forced", tags: ["forced"] },
        { id: "suspicious", label: "👤 Suspicious persons at the door / tried to enter", tags: ["suspicious"] },
        { id: "cant_lock", label: "🚪 Door won't close / won't lock", tags: ["cant_lock"] }
      ]
    },
    {
      id: "door_type",
      text: "What type of door?",
      type: "single",
      conditions: { lock_issue: ["jammed", "broken_key", "cant_lock"] },
      options: [
        { id: "metal_door", label: "🔒 Metal / armored", tags: ["metal"] },
        { id: "wooden_door", label: "🚪 Wooden / interior", tags: ["wooden"] },
        { id: "plastic_door", label: "🪟 Plastic / balcony", tags: ["plastic"] }
      ]
    },
    {
      id: "time_of_day",
      text: "What time of day is it?",
      type: "single",
      conditions: { lock_issue: ["lost_keys", "jammed", "broken_key"] },
      options: [
        { id: "day_time", label: "Day (light, services are available)", tags: ["day"] },
        { id: "night_time", label: "Night (dark, services may not be available)", tags: ["night"] }
      ]
    }
  ],

  solutions: [
    {
      id: "lost_keys_entry",
      title: "🗝️ Lost keys — how to get into the apartment",
      description: "Locked out. There are several ways to get inside without breaking the door.",
      conditions: { lock_issue: ["lost_keys"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "15–60 minutes",
      yield_estimate: "Entry to apartment",
      tags: ["lost", "keys", "entry"],
      steps: [
        "Check all pockets, bags, car, office, friends — keys might be nearby. Call those you were with",
        "If you have a spare key — with neighbors, relatives, at work, in a safe — call and ask them to bring it",
        "If you left keys inside and the door is on a latch (not a deadbolt) — try opening it with a plastic card: insert between the door and frame, find the latch tongue, press",
        "If the door is metal with two locks — try entering through the balcony, window (if accessible). But be careful: height, glazing",
        "Call a locksmith: search through Avito, 2GIS, Yandex. Cost: 1000–3000 rubles (day), 2000–5000 rubles (night)",
        "Check the locksmith's documents: license, contract, receipt. Take a photo of them. Don't pay without documents",
        "After opening: replace the lock or cylinder. Cost: 500–2000 rubles. The old key will no longer work",
        "Make 2–3 spare keys and leave them: with neighbors, at work, with relatives. Or install a code lock / smart lock"
      ],
      warnings: [
        "DO NOT try to break the door yourself with a crowbar, screwdriver, drill — you'll damage the door, lock, frame. Repairs will cost more than a locksmith",
        "DO NOT call 'random' locksmiths from the street — fraud, poor-quality repairs, key copying",
        "If you lost your keys with your address (keychain with address) — change the lock immediately. The finder could enter",
        "A smart lock (with code, fingerprint, card) — solves the problem of losing keys. But requires batteries and internet"
      ]
    },
    {
      id: "jammed_lock_fix",
      title: "🔧 Lock is jammed — how to open it",
      description: "The lock won't turn, the key is stuck, the door won't open. Causes: rust, dirt, frost, wear.",
      conditions: { lock_issue: ["jammed", "broken_key"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10–30 minutes",
      yield_estimate: "Lock opening",
      tags: ["jammed", "lock", "repair"],
      steps: [
        "Don't use force. Strong pressure will break the key inside. Move the key smoothly, back and forth, gently rocking",
        "If the lock is rusty / dirty — drip WD-40, graphite lubricant, machine oil into the keyhole. Wait 5 minutes, try again",
        "If it's frosty — the lock is frozen. Heat the key with a lighter (not red-hot!), insert it, turn. Or use de-icer (lock defroster)",
        "If the key broke inside: use tweezers, thin pliers, a key extractor (~200 rubles at a hardware store). Don't push it deeper",
        "If the extractor doesn't help — disassemble the handle / lock trim (screws on the outside), remove the key fragment. Take photos before disassembly",
        "If the lock won't budge at all — call a locksmith. Cost: 1000–3000 rubles. Cylinder replacement may be needed",
        "After opening: lubricate the lock with graphite powder (not oil — it collects dust). Preventive maintenance every six months",
        "If the lock is old (>10 years) — replace the cylinder. Modern cylinders are more reliable and smoother"
      ],
      warnings: [
        "DO NOT use superglue, expanding foam, or glue in the lock — it will irreversibly ruin the mechanism",
        "DO NOT drill the lock yourself — you can damage the door, frame, or trigger the armor protection. A locksmith uses special drills",
        "If the key broke — DO NOT push the fragment deeper. The deeper it goes, the harder it is to remove",
        "Oil in the lock is a temporary measure. In a month, it will collect dust and the lock will jam again. Use graphite lubricant"
      ]
    },
    {
      id: "forced_entry_defense",
      title: "🛡️ Break-in / attempted break-in — protection and actions",
      description: "The door was broken into or someone tried to break in. Document, protect yourself, call the police.",
      conditions: { lock_issue: ["forced_entry", "suspicious"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "30–60 minutes",
      yield_estimate: "Protection + evidence",
      tags: ["security", "break_in", "law"],
      steps: [
        "DO NOT enter the apartment if you see signs of a break-in (crowbar marks, broken lock, open door). The thief may be inside. Step back, call 02 (102/112)",
        "If you're inside — leave immediately if it's safe. Don't try to detain the thief yourself — it's dangerous",
        "Call the police: 02 (102/112). Report: 'Apartment broken into, address, floor, apartment, unknown if anyone is inside'",
        "Document EVERYTHING: photos, videos of break-in traces (tool marks, damaged locks, scratches). Don't touch anything with your hands — fingerprints",
        "Wait for the police. File a theft / break-in report. Get a notification receipt (case number for tracking)",
        "Check for missing items: documents, money, electronics, jewelry. Make a list with approximate value",
        "Call a locksmith: replace the lock, reinforce the door (armor plate, additional lock, door peephole with camera)",
        "Contact insurance (if you have apartment theft insurance). Provide: police report, photos, list of stolen items, receipts",
        "Install an alarm, video intercom, smart lock with notifications. This deters 80% of burglars"
      ],
      warnings: [
        "DO NOT detain the thief yourself — they may be armed, aggressive, under the influence. Your life is more valuable than belongings",
        "DO NOT touch break-in traces with your hands — the police can take fingerprints, DNA, shoe prints. These are evidence",
        "If the break-in occurred while you were home — it's robbery (Article 162 of the Criminal Code), not theft. Contact the police immediately",
        "Apartment insurance covers theft, but with a deductible. Read the contract. Without receipts, the insurance may not pay",
        "The most reliable lock is useless with a weak door. Reinforce comprehensively: door + lock + frame + peephole + alarm"
      ]
    },
    {
      id: "door_wont_lock",
      title: "🚪 Door won't close / won't lock — repair",
      description: "Door doesn't fit into the frame, latch won't catch, gap is large. Causes: misalignment, wear, shrinkage.",
      conditions: { lock_issue: ["cant_lock"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Working door",
      tags: ["door", "repair", "diy"],
      steps: [
        "Inspect the door: where is it rubbing? Top, bottom, side? Check the hinges: are they loose? Tighten the hinge screws with a screwdriver or drill",
        "If the door has sagged (plastic) — adjust the hinges: loosen the top hinge, lift the door, tighten. Or adjust the eccentric",
        "If the latch doesn't catch the strike plate — mark with chalk where the latch touches. Move the strike plate 2–3 mm with a drill/chisel",
        "If the wooden door has swollen from moisture — treat the seal with silicone lubricant, trim the door with a plane (2–3 mm)",
        "If the lock won't latch — lubricate with graphite, check the strike plate, tighten the lock screws",
        "If the metal door is misaligned — call a specialist. The frame may need replacement or new hinges may need to be installed",
        "Temporary solution: door wedge, door stop, additional bolt. But this is not a replacement for repair"
      ],
      warnings: [
        "DO NOT use force when closing — it will warp the frame, break the lock, damage the door",
        "If the door is plastic — don't drill or cut without experience. PVC breaks and deforms. Call a specialist",
        "Adjusting plastic door hinges is delicate work. Incorrect adjustment = poor sealing, freezing, drafts",
        "If the door won't close in winter — it may be frost freezing. Don't pour boiling water — cracks. Use a hair dryer or warm cloth"
      ]
    }
  ]
};

// ===== EXPORT =====
window.lockDataEn = lockDataEn;