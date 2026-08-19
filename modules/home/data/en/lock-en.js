// modules/home/data/en/lock-en.js
// === MODULE: HOME — LOCKS AND DOORS ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "home",
    category: "lock",
    version: "1.0.0",
    lang: "en",
    title: "🔐 Locks and Doors",
    description: "Lock jammed, lost keys, break-in, security, lock replacement",
    icon: "🔐",
    color: "#0891b2"
  },

  questions: [
    {
      id: "lock_issue",
      type: "single",
      text: "What happened?",
      options: [
        { id: "lost_keys", label: "🔑 Lost keys / left inside", tags: ["lost"] },
        { id: "jammed", label: "🔒 Lock jammed / key won't turn", tags: ["jammed"] },
        { id: "broken_key", label: "🔑 Key broken inside the lock", tags: ["broken_key"] },
        { id: "forced_entry", label: "🚨 Door broken into / attempted break-in", tags: ["forced"] },
        { id: "suspicious", label: "👤 Suspicious people at the door / tried to enter", tags: ["suspicious"] },
        { id: "cant_lock", label: "🚪 Door won't close / won't lock", tags: ["cant_lock"] },
        { id: "cylinder_broken", label: "🔧 Lock cylinder (core) broken", tags: ["cylinder"] }
      ]
    },
    {
      id: "door_type",
      type: "single",
      text: "What type of door?",
      conditions: { lock_issue: ["jammed", "broken_key", "cant_lock", "cylinder"] },
      options: [
        { id: "metal_door", label: "🔒 Metal / reinforced door", tags: ["metal"] },
        { id: "wooden_door", label: "🚪 Wooden / interior door", tags: ["wooden"] },
        { id: "plastic_door", label: "🪟 Plastic / balcony door", tags: ["plastic"] }
      ]
    },
    {
      id: "lock_type",
      type: "single",
      text: "What type of lock?",
      conditions: { lock_issue: ["jammed", "broken_key", "cylinder"] },
      options: [
        { id: "lock_cylinder", label: "🔑 Cylinder lock (standard, with core)", tags: ["cylinder_lock"] },
        { id: "lock_lever", label: "🔑 Lever lock (with plates, old type)", tags: ["lever_lock"] },
        { id: "lock_magnetic", label: "🧲 Magnetic / electronic lock", tags: ["magnetic_lock"] },
        { id: "lock_unknown", label: "❓ Don't know", tags: ["unknown_lock"] }
      ]
    },
    {
      id: "time_of_day",
      type: "single",
      text: "What time of day is it?",
      conditions: { lock_issue: ["lost_keys", "jammed", "broken_key"] },
      options: [
        { id: "day_time", label: "☀️ Daytime (services are available)", tags: ["day"] },
        { id: "night_time", label: "🌙 Nighttime (services with extra charge)", tags: ["night"] }
      ]
    },
    {
      id: "has_alarm",
      type: "single",
      text: "Do you have an alarm / CCTV?",
      conditions: { lock_issue: ["forced", "suspicious"] },
      options: [
        { id: "alarm_yes", label: "✅ Yes, I have an alarm", tags: ["alarm_yes"] },
        { id: "cameras_yes", label: "📹 Yes, I have cameras", tags: ["cameras_yes"] },
        { id: "alarm_no", label: "❌ No alarm or cameras", tags: ["alarm_no"] }
      ]
    },
    {
      id: "has_insurance",
      type: "single",
      text: "Is your apartment insured against theft?",
      conditions: { lock_issue: ["forced"] },
      options: [
        { id: "insurance_yes", label: "✅ Yes, I have insurance", tags: ["insurance_yes"] },
        { id: "insurance_no", label: "❌ No insurance", tags: ["insurance_no"] },
        { id: "insurance_unknown", label: "❓ Don't know", tags: ["insurance_unknown"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. LOST KEYS — HOW TO GET IN
    // ============================================================
    {
      id: "lost_keys_entry",
      title: "🗝️ Lost keys — how to get into the apartment",
      description: "Locked out. There are several ways to get in without breaking the door.",
      conditions: { lock_issue: ["lost_keys"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "15–60 minutes",
      yield_estimate: "Apartment entered",
      tags: ["lost", "keys", "entry"],
      steps: [
        "Check all pockets, bags, car, office — keys might be nearby",
        "If you have a spare key — with neighbors, relatives — call and ask to bring it",
        "If keys are inside and the door is on latch — try opening with a plastic card",
        "If it's a metal door — try through the balcony, window (if accessible). Be careful: height!",
        "Call a locksmith: through Avito, 2GIS, Yandex. Cost: $15–40 (day), $30–70 (night)",
        "Check the locksmith's documents: license, contract. Take a photo",
        "After opening: replace the lock or cylinder. Cost: $7–30",
        "Make 2–3 spare keys and leave with neighbors, at work"
      ],
      warnings: [
        "DON'T try to open the door yourself with a crowbar — damage the door, repair costs more",
        "DON'T call random locksmiths from the street — fraud",
        "If keys were lost with the address — replace the lock immediately",
        "Smart lock (with code, fingerprint) — solves the problem of lost keys"
      ]
    },
    // ============================================================
    // 2. CYLINDER REPLACEMENT
    // ============================================================
    {
      id: "cylinder_replacement",
      title: "🔧 Lock cylinder replacement — step-by-step",
      description: "The cylinder (core) is the main mechanism. Replacement takes 5–15 minutes.",
      conditions: { lock_issue: ["cylinder"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "New lock cylinder",
      tags: ["cylinder", "replacement", "diy"],
      steps: [
        "Unscrew the screw in the door edge (at lock level). Usually one screw under a Phillips screwdriver",
        "Insert the key into the cylinder, turn 10–15° (to the position where the cylinder comes out)",
        "Pull the cylinder out of the lock. Remember its position",
        "Measure the cylinder length (A + B) and buy a new one of the same length. Standards: 30/30, 35/35, 40/40 mm",
        "Insert the new cylinder into the lock, turn with the key until aligned with the screw",
        "Tighten the screw (don't overtighten). Check the lock operation",
        "Make several copies of the keys from the new cylinder"
      ],
      warnings: [
        "If the cylinder doesn't come out — try turning the key to another position",
        "Don't damage the lock mechanism — don't hit with a hammer",
        "If unsure — call a locksmith ($5–10)",
        "There are cylinders with anti-break protection (armored plate) — choose them"
      ]
    },
    // ============================================================
    // 3. JAMMED LOCK / BROKEN KEY
    // ============================================================
    {
      id: "jammed_lock_fix",
      title: "🔧 Jammed lock / broken key — how to open",
      description: "Lock won't turn, key stuck or broken. Causes: rust, dirt, frost, wear.",
      conditions: { lock_issue: ["jammed", "broken_key"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Lock opened",
      tags: ["jammed", "lock", "repair"],
      steps: [
        "Don't use force. Move the key gently, back and forth, slightly rocking",
        "If the lock is rusty — drip WD-40, graphite lubricant into the hole. Wait 5 minutes",
        "If frozen — heat the key with a lighter (not red hot!), insert, turn",
        "If key is broken inside — use tweezers, thin pliers, a key extractor",
        "If extractor doesn't help — disassemble the handle/plate, remove the key fragment",
        "If the lock won't budge — call a locksmith. Cost: $15–40",
        "After opening: lubricate with graphite powder (not oil!). Maintenance every 6 months"
      ],
      warnings: [
        "DON'T use superglue, spray foam in the lock — ruin the mechanism",
        "DON'T drill the lock yourself — damage the door",
        "If the key is broken — DON'T push the fragment deeper"
      ]
    },
    // ============================================================
    // 4. BREAK-IN / ATTEMPTED BREAK-IN
    // ============================================================
    {
      id: "forced_entry_defense",
      title: "🛡️ Break-in / attempted break-in — protection and actions",
      description: "Door broken into or attempted. Document, protect, call police.",
      conditions: { lock_issue: ["forced"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Protection + evidence",
      tags: ["security", "break_in", "law"],
      steps: [
        "DON'T enter if you see signs of break-in. The thief may be inside. Step back, call 911",
        "If inside — leave immediately if safe",
        "Call police: 911. Report: 'Apartment broken into, address'",
        "Document EVERYTHING: photos, video of break-in traces. Don't touch anything",
        "Wait for police. File a report. Get a case number",
        "Check for missing items. Make a list with approximate value",
        "Call a locksmith: replace the lock, reinforce the door",
        "Contact insurance (if you have it). Provide: police report, photos, list of items",
        "Install an alarm, video intercom, smart lock"
      ],
      warnings: [
        "DON'T confront the thief yourself — they may be armed",
        "DON'T touch break-in traces — police can take fingerprints",
        "If a break-in happened while you were home — it's robbery, not theft"
      ]
    },
    // ============================================================
    // 5. BUMP PROTECTION
    // ============================================================
    {
      id: "bump_protection",
      title: "🛡️ Bump protection — how to secure your lock",
      description: "Bumping is a common break-in method. Protect your lock with special cylinders.",
      conditions: { lock_issue: ["forced", "suspicious"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Bump protection installed",
      tags: ["security", "bump", "protection"],
      steps: [
        "Bumping is a method where the key is 'knocked' with impacts",
        "Protection: install an anti-bump cylinder with impact protection",
        "Cylinders with 'paradox' systems are even more reliable",
        "Install an armored plate on the lock — protects against drilling",
        "An additional lock makes break-in 2 times harder",
        "Use cylinders with 'anti-bump', 'anti-pick', 'anti-drill' systems",
        "Cost of a quality cylinder: $30–70 — cheaper than losing valuables"
      ],
      warnings: [
        "Cheap cylinders (under $15) — have no bump protection",
        "A lock without an armored plate can be drilled in 3 minutes",
        "If the lock is old (>10 years) — replace with a modern one with protection"
      ]
    },
    // ============================================================
    // 6. SUSPICIOUS PERSONS
    // ============================================================
    {
      id: "suspicious_persons",
      title: "👤 Suspicious persons at the door — action plan",
      description: "Unknown people trying to enter, ringing, checking something. Follow the plan.",
      conditions: { lock_issue: ["suspicious"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Safety + documentation",
      tags: ["suspicious", "security", "police"],
      steps: [
        "DON'T open the door to strangers. Even if they say they heard a sound or work for the management company",
        "If they're at the door — don't show you're home. Or answer through the door: 'Who's there?' without opening",
        "Record: floor number, people's descriptions (height, clothing, voice), license plate (if any)",
        "If they try to open the door or do something with the lock — call police 911",
        "If you have a video intercom — record the video from the screen on your phone",
        "If they leave — remember the direction, time. Tell neighbors",
        "Report to police with a description of suspicious persons"
      ],
      warnings: [
        "DON'T open the door, even if they claim to be utility workers. Check documents through the door",
        "DON'T engage in conversation — it could be reconnaissance for a break-in",
        "Install a door viewer with a wide-angle lens"
      ]
    },
    // ============================================================
    // 7. LOCK REPLACEMENT AFTER BREAK-IN
    // ============================================================
    {
      id: "lock_replacement_after_break",
      title: "🔐 Lock replacement after break-in or forced entry",
      description: "After a break-in or locksmith opening — the lock must be replaced. Safety is paramount.",
      conditions: { lock_issue: ["forced", "lost_keys"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–2 hours",
      yield_estimate: "New secure lock",
      tags: ["replacement", "security", "law"],
      steps: [
        "After any forced entry or locksmith opening — the lock CANNOT be reused. The mechanism is compromised",
        "Choose a new lock: cylinder with anti-break protection or lever lock",
        "Installation: call a locksmith ($15–30) or install yourself",
        "Check that the lock fits into the strike plate, the door closes without effort",
        "Install an armored plate — protects against drilling",
        "Make new keys (2–3 copies), leave a spare with neighbors",
        "Register the new lock in a database (if available) or photograph the keys"
      ],
      warnings: [
        "The old lock after forced entry is not secure. It can be opened the same way",
        "DON'T save on the lock — a cheap lock won't protect you",
        "If the lock was opened by a locksmith — they may have made a key impression",
        "Install an additional lock — it doubles protection"
      ]
    },
    // ============================================================
    // 8. SMART LOCK
    // ============================================================
    {
      id: "smart_lock_installation",
      title: "🔐 Smart lock — installation and setup",
      description: "A smart lock opens with a code, fingerprint, or phone. Solves the problem of lost keys.",
      conditions: { lock_issue: ["lost_keys", "jammed"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "2–4 hours",
      yield_estimate: "Smart lock installed",
      tags: ["smart", "lock", "modern"],
      steps: [
        "Smart locks: Xiaomi, Samsung, Yale, Aqara, Lockin. Price: $70–350",
        "Choose the type: with code, fingerprint, card, phone (Bluetooth/NFC), face recognition",
        "Installation: usually replaces the cylinder, some require full lock replacement",
        "Installation: call a locksmith or install yourself (by instructions)",
        "Connect to the app (Wi-Fi/Bluetooth), set up access for family",
        "Set up notifications: who and when opened the door",
        "Keep a backup option: key-token, hidden key with neighbors, code access"
      ],
      warnings: [
        "Smart locks require power (batteries). Check battery level once a month",
        "If batteries die — the lock may not open. Use emergency power (9V battery)",
        "Choose a lock with a mechanical key in case of battery drain",
        "Keep a backup key in a safe place"
      ]
    },
    // ============================================================
    // 9. DOOR WON'T CLOSE
    // ============================================================
    {
      id: "door_wont_lock",
      title: "🚪 Door won't close / won't lock — repair",
      description: "Door doesn't fit the frame, latch won't catch, gap is large. Causes: misalignment, wear, shrinkage.",
      conditions: { lock_issue: ["cant_lock"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Door working",
      tags: ["door", "repair", "diy"],
      steps: [
        "Inspect the door: where is it catching? Top, bottom, side? Check hinges, tighten screws",
        "If the door is sagging — adjust hinges (loosen, lift, tighten)",
        "If the latch doesn't align with the plate — mark with chalk, move the plate 2–3 mm",
        "If wooden door is swollen — treat the seal, trim with a plane",
        "If the lock won't catch — graphite lubricant, check the plate",
        "If metal door is misaligned — call a locksmith",
        "Temporary solution: door wedge, doorstop, additional bolt"
      ],
      warnings: [
        "DON'T use force — it will warp the frame",
        "If plastic door — don't drill or cut without experience",
        "If door won't close in winter — use a hairdryer or warm cloth"
      ]
    }
  ]
});