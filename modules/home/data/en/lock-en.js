<<<<<<< HEAD
// === MODULE: HOME — LOCKS AND DOORS (ENGLISH) ===
const lockDataEn = {
  category: "lock",
  title: "🔐 Locks and Doors",
  description: "Lock jammed, lost keys, break-in, protection against intrusion",

  questions: [
    {
      id: "lock_issue",
      text: "What happened? (select the main problem)",
      type: "single",
      options: [
        { id: "lost_keys", label: "🗝️ Lost keys / left inside", tags: ["lost", "outdoor"] },
        { id: "jammed", label: "🔧 Lock jammed / key won't turn", tags: ["jammed", "mechanical"] },
        { id: "broken_key", label: "💔 Key broke in the lock", tags: ["broken", "inside"] },
        { id: "forced_entry", label: "🔓 Attempted break-in / door forced", tags: ["forced", "security"] },
        { id: "suspicious", label: "👀 Suspicious persons at the door / attempted entry", tags: ["suspicious", "danger"] },
        { id: "cant_lock", label: "🚪 Door won't close / won't lock", tags: ["cant_lock", "alignment"] },
        { id: "locked_in", label: "🚫 Locked inside / can't get out", tags: ["locked_in", "emergency"] },
        { id: "frozen_lock", label: "❄️ Lock frozen / won't open", tags: ["frozen", "winter"] },
        { id: "child_locked", label: "👶 Child locked in a room / bathroom", tags: ["child", "emergency"] }
      ]
    },
    {
      id: "door_type",
      text: "What type of door?",
      type: "single",
      options: [
        { id: "metal", label: "🛡️ Metal / armored (entrance)", tags: ["metal", "secure"] },
        { id: "wooden", label: "🚪 Wooden / interior", tags: ["wooden", "interior"] },
        { id: "plastic", label: "🧊 Plastic / balcony", tags: ["plastic", "balcony"] },
        { id: "car", label: "🚗 Car", tags: ["car", "vehicle"] },
        { id: "garage", label: "🏠 Garage / roller shutter", tags: ["garage", "heavy"] }
      ]
    },
    {
      id: "time_of_day",
      text: "What time of day is it?",
      type: "single",
      options: [
        { id: "day", label: "☀️ Day (light, services available)", tags: ["day", "available"] },
        { id: "night", label: "🌙 Night (dark, services may be limited)", tags: ["night", "emergency"] },
        { id: "weekend", label: "📅 Weekend / holiday (fewer technicians available)", tags: ["weekend", "hard"] }
      ]
    },
    {
      id: "has_spare_key",
      text: "Do you have a spare key with neighbors / relatives?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, there is a spare key", tags: ["spare_yes"] },
        { id: "no", label: "❌ No spare key", tags: ["spare_no"] },
        { id: "unknown", label: "❓ Not sure / don't know", tags: ["spare_unknown"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have on hand?",
      type: "multi",
      options: [
        { id: "wd40", label: "🧴 WD-40 / lubricant / oil", tags: ["lubricant"] },
        { id: "pliers", label: "🔧 Pliers / tweezers", tags: ["tools"] },
        { id: "screwdriver", label: "🪛 Screwdriver", tags: ["tools"] },
        { id: "hair_dryer", label: "💨 Hair dryer (for frozen lock)", tags: ["heat"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "people_in_danger",
      text: "Is there anyone who needs urgent access? (children, elderly, sick)",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, there are people who need access", tags: ["vulnerable"] },
        { id: "no", label: "❌ No, only me / everyone is safe", tags: ["safe"] }
      ]
    },
    {
      id: "security_level",
      text: "What is your level of urgency?",
      type: "single",
      options: [
        { id: "low", label: "🟢 Low (just inconvenient)", tags: ["low_urgency"] },
        { id: "medium", label: "🟡 Medium (need it today)", tags: ["medium_urgency"] },
        { id: "high", label: "🔴 High (urgent, dangerous)", tags: ["high_urgency"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Lost keys — getting inside
    // ========================================
    {
      id: "lost_keys_entry",
      title: "🗝️ Lost keys — how to get into the apartment",
      description: "Locked outside. There are several ways to get inside without breaking the door.",
      conditions: { lock_issue: ["lost_keys"], has_spare_key: ["no", "unknown"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "15–60 minutes",
      yield_estimate: "Entry to the apartment",
      tags: ["lost", "keys", "entry"],
      steps: [
        "Check all pockets, bags, car, office, friends — keys may be nearby. Call those you were with",
        "If you have a spare key — with neighbors, relatives, at work, in a safe — call and ask them to bring it",
        "If keys are left inside and the door is on a latch (not locked) — try opening with a plastic card: insert between the door and frame, find the latch tongue, push",
        "If the door is metal with two locks — try entering through the balcony, window (if accessible). But be careful: height, glazing",
        "Call a lockout specialist: search on Avito, 2GIS, Yandex. Cost: 1000–3000 RUB (day), 2000–5000 RUB (night)",
        "Check the technician's documents: license, contract, receipt. Take a photo. Don't pay without documentation",
        "After opening: replace the lock or cylinder. Cost: 500–2000 RUB. The old key will no longer work",
        "Make 2–3 spare keys and leave them: with neighbors, at work, with relatives. Or install a combination lock / smart lock"
      ],
      warnings: [
        "DO NOT try to open the door yourself with a crowbar, screwdriver, drill — you'll damage the door, lock, frame. Repairs will cost more than a technician",
        "DO NOT call 'random' technicians from the street — scams, poor repairs, key duplication",
        "If you lost your keys with your address (keychain with address) — replace the lock immediately. The finder could enter",
        "A smart lock (with code, fingerprint, card) solves the problem of lost keys. But requires batteries and internet"
      ]
    },
    // ========================================
    // 2. Lock jammed — how to open
    // ========================================
    {
      id: "jammed_lock_fix",
      title: "🔧 Lock jammed — how to open",
      description: "Lock won't turn, key stuck, door won't open. Causes: rust, dirt, frost, wear.",
      conditions: { lock_issue: ["jammed", "broken_key"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10–30 minutes",
      yield_estimate: "Lock opened",
      tags: ["jammed", "lock", "repair"],
      steps: [
        "Don't use force. Strong pressure will break the key inside. Move the key gently, back and forth, slightly rocking",
        "If the lock is rusty / dirty — drip WD-40, graphite lubricant, machine oil into the keyhole. Wait 5 minutes, try again",
        "If frozen — warm the key with a lighter (not red hot!), insert, turn. Or use a de-icer (lock defroster)",
        "If the key broke inside: use tweezers, thin pliers, a key extractor (~200 RUB at hardware stores). Don't push deeper",
        "If the extractor doesn't help — disassemble the handle / lock plate (screws on the outside), remove the key fragment. Take a photo before disassembly",
        "If the lock is completely stuck — call a technician. Cost: 1000–3000 RUB. Cylinder replacement may be needed",
        "After opening: lubricate the lock with graphite powder (not oil — it collects dust). Prevention every six months",
        "If the lock is old (>10 years) — replace the cylinder. Modern cylinders (ABUS, Mul-T-Lock, Cisa) are more reliable and smoother"
      ],
      warnings: [
        "DO NOT use superglue, expanding foam, glue in the lock — it will permanently damage the mechanism",
        "DO NOT drill the lock yourself — you may damage the door, frame, and anti-drill protection. Technicians use special drills",
        "If the key broke — DO NOT push the fragment deeper. The deeper it goes, the harder it is to remove",
        "Oil in the lock is a temporary measure. In a month, it will collect dust and the lock will jam again. Use graphite lubricant"
      ]
    },
    // ========================================
    // 3. Break-in / attempted break-in
    // ========================================
    {
      id: "forced_entry_defense",
      title: "🛡️ Break-in / attempted break-in — protection and actions",
      description: "Door forced or attempted. Document, protect yourself, call the police.",
      conditions: { lock_issue: ["forced_entry", "suspicious"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "30–60 minutes",
      yield_estimate: "Protection + evidence",
      tags: ["security", "break_in", "law"],
      steps: [
        "DO NOT enter the apartment if you see signs of forced entry (crowbar marks, broken lock, open door). The burglar may be inside. Step back, call 02 (102/112)",
        "If you're inside — leave immediately if safe. Do not try to stop the intruder yourself — it's dangerous",
        "Call the police: 02 (102/112). Report: 'Apartment broken into, address, floor, apartment, unknown if anyone is inside'",
        "Document EVERYTHING: photos, video of the forced entry (tool marks, damaged locks, scratches). Don't touch anything with your hands — fingerprints",
        "Wait for the police. File a report on the theft / break-in. Get a notification slip (case number for tracking)",
        "Check for missing items: documents, money, electronics, jewelry. Make a list with estimated value",
        "Call a technician: replace the lock, reinforce the door (armored plate, additional lock, door peephole with camera)",
        "Contact your insurance company (if you have apartment insurance against theft). Provide: police report, photos, list of stolen items, receipts",
        "Install an alarm system, video intercom, smart lock with notifications. This deters 80% of burglars"
      ],
      warnings: [
        "DO NOT try to detain a burglar yourself — they may be armed, aggressive, under the influence. Your life is more important than belongings",
        "DO NOT touch signs of forced entry with your hands — police can take fingerprints, DNA, shoe prints. They are evidence",
        "If the break-in occurred while you were home — this is robbery (Article 162 of the Criminal Code), not theft. Call police immediately",
        "Apartment insurance covers theft but with a deductible. Read the contract. Without receipts, the insurance company may not pay",
        "The most reliable lock is useless with a weak door. Strengthen comprehensively: door + lock + frame + peephole + alarm"
      ]
    },
    // ========================================
    // 4. Child locked in — emergency opening
    // ========================================
    {
      id: "child_locked_room",
      title: "👶 Child locked in a room / bathroom — what to do",
      description: "A child locked themselves inside and can't open it. The main thing is to stay calm and act quickly.",
      conditions: { lock_issue: ["child_locked", "locked_in"], people_in_danger: ["yes"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–20 minutes",
      yield_estimate: "Child freed",
      tags: ["child", "emergency", "door"],
      steps: [
        "DON'T panic, DON'T yell at the child. Speak calmly, confidently, by voice: 'I'm here, everything's fine, we'll open it'",
        "Ask the child (if they understand) to turn the handle, click the latch, press the button (depending on the lock)",
        "If the lock has a round handle — use a thin plastic card, coin, chisel to turn the latch",
        "If the door is wooden / thin — you can pry the door with a chisel, crowbar, spatula (carefully, to avoid damage)",
        "If the lock is latched but not key-locked — use a thin screwdriver to pry the mechanism through the keyhole",
        "If it doesn't work — call the Ministry of Emergency Situations (01/112) or firefighters. They will open the door without damage",
        "If the door is plastic — adjust the handle, or call a technician. Don't force it yourself — you'll damage the seal, hinges",
        "After opening: give the child water, calm them down, explain that they shouldn't lock doors. Install a lock block or remove the locks"
      ],
      warnings: [
        "DON'T leave the child alone if they're locked in. Talk to them constantly so they don't panic",
        "DON'T pour water into the lock, DON'T use force — the child may get scared and hide",
        "If the child is small — don't give them keys, sharp objects that could hurt them",
        "After the incident: install lock protection (blocker, removable handle) or replace the locks"
      ]
    },
    // ========================================
    // 5. Frozen lock — thawing
    // ========================================
    {
      id: "frozen_lock_thaw",
      title: "❄️ Lock frozen — how to thaw it",
      description: "In frost, water in the lock freezes, the key won't turn. Thaw properly, don't break the mechanism.",
      conditions: { lock_issue: ["frozen_lock"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "5–15 minutes",
      yield_estimate: "Lock opened",
      tags: ["frozen", "winter", "lock"],
      steps: [
        "DON'T use force — you'll break the key. If the key is already inserted — don't try to pull it out. It may break",
        "Warm the key with a match, lighter (not red hot!), insert into the lock, wait 10–15 seconds",
        "Use a de-icer (lock defroster) — available at auto parts stores. Spray into the keyhole, wait 1–2 minutes",
        "If no de-icer — use alcohol, vodka, cologne (liquid that doesn't freeze). Apply 2–3 drops, turn the key",
        "Use a hair dryer (heat gun) to warm the lock from the outside (don't overdo it, plastic can melt)",
        "Hot water — last resort, only if the lock is metal, plastic may crack",
        "If the lock has thawed — lubricate with graphite grease or WD-40 (so it won't freeze again)",
        "For the future: lubricate the lock for winter with silicone grease. Or install locks with frost-resistant mechanisms"
      ],
      warnings: [
        "DO NOT pour boiling water on a frozen lock — sudden temperature change, cracks, corrosion",
        "DO NOT use open flame (torch, blowtorch) on plastic elements",
        "If the key is frozen in the lock — don't try to pull it out with force, it will break",
        "After thawing, check if ice has formed inside — dry the lock with a hair dryer"
      ]
    },
    // ========================================
    // 6. Door won't close — repair
    // ========================================
    {
      id: "door_wont_lock",
      title: "🚪 Door won't close / won't lock — repair",
      description: "Door doesn't align with the frame, latch doesn't catch, gap is large. Causes: misalignment, wear, shrinkage.",
      conditions: { lock_issue: ["cant_lock"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Door works",
      tags: ["door", "repair", "diy"],
      steps: [
        "Inspect the door: where does it rub? Top, bottom, side? Check the hinges: are they loose? Tighten the hinge screws with a screwdriver or screwdriver",
        "If the door has sagged (plastic) — adjust the hinges: loosen the top hinge, lift the door, tighten. Or adjust the eccentric",
        "If the latch doesn't fit the strike plate — mark with chalk where the latch touches. Move the plate 2–3 mm with a drill/chisel",
        "If the wooden door has swollen from moisture — treat the seal with silicone grease, trim the door with a plane (2–3 mm)",
        "If the lock doesn't catch — lubricate with graphite, check the strike plate, tighten the lock screws",
        "If the metal door is misaligned — call a technician. Frame replacement or new hinges may be needed",
        "Temporary solution: door wedge, door stop, additional bolt. But this is not a replacement for repair"
      ],
      warnings: [
        "DO NOT use force when closing — it will misalign the frame, break the lock, damage the door",
        "If the door is plastic — don't drill, cut without experience. PVC breaks, deforms. Call a technician",
        "Adjusting plastic door hinges is delicate work. Incorrect adjustment = poor sealing, freezing, drafts",
        "If the door won't close in winter — possible frost freezing. Don't pour boiling water — cracks. Use a hair dryer or warm cloth"
      ]
    },
    // ========================================
    // 7. Choosing and installing a reliable lock
    // ========================================
    {
      id: "lock_selection_install",
      title: "🔐 Choosing and installing a reliable lock",
      description: "The right lock is the basis of security. Choose by security class, install correctly.",
      conditions: { lock_issue: ["forced_entry", "jammed", "cant_lock"], security_level: ["high", "medium"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "2–4 hours (selection + installation)",
      yield_estimate: "Reliable protection",
      tags: ["security", "lock", "installation"],
      steps: [
        "Choose a lock by security class: Class 1 (low) — not reliable, Class 2 (medium) — for interior doors, Class 3 (high) — for entrance doors, Class 4 (increased) — for armored doors",
        "Mechanism: cylinder (most common, easy to replace), lever (more reliable, but harder to repair), disc (protection against picking)",
        "Material: brass / steel — reliable, silumin / plastic — not suitable for entrance doors",
        "Additional options: armor plate (protection against drilling), anti-manipulation protection (against turning), master key system",
        "Installation should only be trusted to professionals (technician 2000–5000 RUB). Improper installation = weak point",
        "Modern solutions: smart lock (code, fingerprint, phone). Auto-locking, notification, opening by call",
        "After installation: test closing, key turning, smooth operation. If it jams — demand a redo",
        "Register the lock if there is a warranty. Keep keys, invoice, instructions",
        "Periodically (every six months) lubricate the lock with graphite powder. Do not use oil — it collects dust"
      ],
      warnings: [
        "DO NOT buy the cheapest locks — they break quickly and are easy to pick",
        "DO NOT install locks yourself without experience — you may damage the door, poor sealing, improper operation",
        "A smart lock requires internet and batteries — without them, the door may not open. Keep a spare key",
        "The door is a complex: lock + hinges + frame + peephole. One reliable lock with a weak door won't protect you"
      ]
    }
  ]
};

// ===== EXPORT =====
window.lockDataEn = lockDataEn;
=======
// === MODULE: HOME — LOCKS AND DOORS (ENGLISH) ===
const lockDataEn = {
  category: "lock",
  title: "🔐 Locks and Doors",
  description: "Lock jammed, lost keys, break-in, protection against intrusion",

  questions: [
    {
      id: "lock_issue",
      text: "What happened? (select the main problem)",
      type: "single",
      options: [
        { id: "lost_keys", label: "🗝️ Lost keys / left inside", tags: ["lost", "outdoor"] },
        { id: "jammed", label: "🔧 Lock jammed / key won't turn", tags: ["jammed", "mechanical"] },
        { id: "broken_key", label: "💔 Key broke in the lock", tags: ["broken", "inside"] },
        { id: "forced_entry", label: "🔓 Attempted break-in / door forced", tags: ["forced", "security"] },
        { id: "suspicious", label: "👀 Suspicious persons at the door / attempted entry", tags: ["suspicious", "danger"] },
        { id: "cant_lock", label: "🚪 Door won't close / won't lock", tags: ["cant_lock", "alignment"] },
        { id: "locked_in", label: "🚫 Locked inside / can't get out", tags: ["locked_in", "emergency"] },
        { id: "frozen_lock", label: "❄️ Lock frozen / won't open", tags: ["frozen", "winter"] },
        { id: "child_locked", label: "👶 Child locked in a room / bathroom", tags: ["child", "emergency"] }
      ]
    },
    {
      id: "door_type",
      text: "What type of door?",
      type: "single",
      options: [
        { id: "metal", label: "🛡️ Metal / armored (entrance)", tags: ["metal", "secure"] },
        { id: "wooden", label: "🚪 Wooden / interior", tags: ["wooden", "interior"] },
        { id: "plastic", label: "🧊 Plastic / balcony", tags: ["plastic", "balcony"] },
        { id: "car", label: "🚗 Car", tags: ["car", "vehicle"] },
        { id: "garage", label: "🏠 Garage / roller shutter", tags: ["garage", "heavy"] }
      ]
    },
    {
      id: "time_of_day",
      text: "What time of day is it?",
      type: "single",
      options: [
        { id: "day", label: "☀️ Day (light, services available)", tags: ["day", "available"] },
        { id: "night", label: "🌙 Night (dark, services may be limited)", tags: ["night", "emergency"] },
        { id: "weekend", label: "📅 Weekend / holiday (fewer technicians available)", tags: ["weekend", "hard"] }
      ]
    },
    {
      id: "has_spare_key",
      text: "Do you have a spare key with neighbors / relatives?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, there is a spare key", tags: ["spare_yes"] },
        { id: "no", label: "❌ No spare key", tags: ["spare_no"] },
        { id: "unknown", label: "❓ Not sure / don't know", tags: ["spare_unknown"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have on hand?",
      type: "multi",
      options: [
        { id: "wd40", label: "🧴 WD-40 / lubricant / oil", tags: ["lubricant"] },
        { id: "pliers", label: "🔧 Pliers / tweezers", tags: ["tools"] },
        { id: "screwdriver", label: "🪛 Screwdriver", tags: ["tools"] },
        { id: "hair_dryer", label: "💨 Hair dryer (for frozen lock)", tags: ["heat"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "people_in_danger",
      text: "Is there anyone who needs urgent access? (children, elderly, sick)",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, there are people who need access", tags: ["vulnerable"] },
        { id: "no", label: "❌ No, only me / everyone is safe", tags: ["safe"] }
      ]
    },
    {
      id: "security_level",
      text: "What is your level of urgency?",
      type: "single",
      options: [
        { id: "low", label: "🟢 Low (just inconvenient)", tags: ["low_urgency"] },
        { id: "medium", label: "🟡 Medium (need it today)", tags: ["medium_urgency"] },
        { id: "high", label: "🔴 High (urgent, dangerous)", tags: ["high_urgency"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Lost keys — getting inside
    // ========================================
    {
      id: "lost_keys_entry",
      title: "🗝️ Lost keys — how to get into the apartment",
      description: "Locked outside. There are several ways to get inside without breaking the door.",
      conditions: { lock_issue: ["lost_keys"], has_spare_key: ["no", "unknown"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "15–60 minutes",
      yield_estimate: "Entry to the apartment",
      tags: ["lost", "keys", "entry"],
      steps: [
        "Check all pockets, bags, car, office, friends — keys may be nearby. Call those you were with",
        "If you have a spare key — with neighbors, relatives, at work, in a safe — call and ask them to bring it",
        "If keys are left inside and the door is on a latch (not locked) — try opening with a plastic card: insert between the door and frame, find the latch tongue, push",
        "If the door is metal with two locks — try entering through the balcony, window (if accessible). But be careful: height, glazing",
        "Call a lockout specialist: search on Avito, 2GIS, Yandex. Cost: 1000–3000 RUB (day), 2000–5000 RUB (night)",
        "Check the technician's documents: license, contract, receipt. Take a photo. Don't pay without documentation",
        "After opening: replace the lock or cylinder. Cost: 500–2000 RUB. The old key will no longer work",
        "Make 2–3 spare keys and leave them: with neighbors, at work, with relatives. Or install a combination lock / smart lock"
      ],
      warnings: [
        "DO NOT try to open the door yourself with a crowbar, screwdriver, drill — you'll damage the door, lock, frame. Repairs will cost more than a technician",
        "DO NOT call 'random' technicians from the street — scams, poor repairs, key duplication",
        "If you lost your keys with your address (keychain with address) — replace the lock immediately. The finder could enter",
        "A smart lock (with code, fingerprint, card) solves the problem of lost keys. But requires batteries and internet"
      ]
    },
    // ========================================
    // 2. Lock jammed — how to open
    // ========================================
    {
      id: "jammed_lock_fix",
      title: "🔧 Lock jammed — how to open",
      description: "Lock won't turn, key stuck, door won't open. Causes: rust, dirt, frost, wear.",
      conditions: { lock_issue: ["jammed", "broken_key"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10–30 minutes",
      yield_estimate: "Lock opened",
      tags: ["jammed", "lock", "repair"],
      steps: [
        "Don't use force. Strong pressure will break the key inside. Move the key gently, back and forth, slightly rocking",
        "If the lock is rusty / dirty — drip WD-40, graphite lubricant, machine oil into the keyhole. Wait 5 minutes, try again",
        "If frozen — warm the key with a lighter (not red hot!), insert, turn. Or use a de-icer (lock defroster)",
        "If the key broke inside: use tweezers, thin pliers, a key extractor (~200 RUB at hardware stores). Don't push deeper",
        "If the extractor doesn't help — disassemble the handle / lock plate (screws on the outside), remove the key fragment. Take a photo before disassembly",
        "If the lock is completely stuck — call a technician. Cost: 1000–3000 RUB. Cylinder replacement may be needed",
        "After opening: lubricate the lock with graphite powder (not oil — it collects dust). Prevention every six months",
        "If the lock is old (>10 years) — replace the cylinder. Modern cylinders (ABUS, Mul-T-Lock, Cisa) are more reliable and smoother"
      ],
      warnings: [
        "DO NOT use superglue, expanding foam, glue in the lock — it will permanently damage the mechanism",
        "DO NOT drill the lock yourself — you may damage the door, frame, and anti-drill protection. Technicians use special drills",
        "If the key broke — DO NOT push the fragment deeper. The deeper it goes, the harder it is to remove",
        "Oil in the lock is a temporary measure. In a month, it will collect dust and the lock will jam again. Use graphite lubricant"
      ]
    },
    // ========================================
    // 3. Break-in / attempted break-in
    // ========================================
    {
      id: "forced_entry_defense",
      title: "🛡️ Break-in / attempted break-in — protection and actions",
      description: "Door forced or attempted. Document, protect yourself, call the police.",
      conditions: { lock_issue: ["forced_entry", "suspicious"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "30–60 minutes",
      yield_estimate: "Protection + evidence",
      tags: ["security", "break_in", "law"],
      steps: [
        "DO NOT enter the apartment if you see signs of forced entry (crowbar marks, broken lock, open door). The burglar may be inside. Step back, call 02 (102/112)",
        "If you're inside — leave immediately if safe. Do not try to stop the intruder yourself — it's dangerous",
        "Call the police: 02 (102/112). Report: 'Apartment broken into, address, floor, apartment, unknown if anyone is inside'",
        "Document EVERYTHING: photos, video of the forced entry (tool marks, damaged locks, scratches). Don't touch anything with your hands — fingerprints",
        "Wait for the police. File a report on the theft / break-in. Get a notification slip (case number for tracking)",
        "Check for missing items: documents, money, electronics, jewelry. Make a list with estimated value",
        "Call a technician: replace the lock, reinforce the door (armored plate, additional lock, door peephole with camera)",
        "Contact your insurance company (if you have apartment insurance against theft). Provide: police report, photos, list of stolen items, receipts",
        "Install an alarm system, video intercom, smart lock with notifications. This deters 80% of burglars"
      ],
      warnings: [
        "DO NOT try to detain a burglar yourself — they may be armed, aggressive, under the influence. Your life is more important than belongings",
        "DO NOT touch signs of forced entry with your hands — police can take fingerprints, DNA, shoe prints. They are evidence",
        "If the break-in occurred while you were home — this is robbery (Article 162 of the Criminal Code), not theft. Call police immediately",
        "Apartment insurance covers theft but with a deductible. Read the contract. Without receipts, the insurance company may not pay",
        "The most reliable lock is useless with a weak door. Strengthen comprehensively: door + lock + frame + peephole + alarm"
      ]
    },
    // ========================================
    // 4. Child locked in — emergency opening
    // ========================================
    {
      id: "child_locked_room",
      title: "👶 Child locked in a room / bathroom — what to do",
      description: "A child locked themselves inside and can't open it. The main thing is to stay calm and act quickly.",
      conditions: { lock_issue: ["child_locked", "locked_in"], people_in_danger: ["yes"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–20 minutes",
      yield_estimate: "Child freed",
      tags: ["child", "emergency", "door"],
      steps: [
        "DON'T panic, DON'T yell at the child. Speak calmly, confidently, by voice: 'I'm here, everything's fine, we'll open it'",
        "Ask the child (if they understand) to turn the handle, click the latch, press the button (depending on the lock)",
        "If the lock has a round handle — use a thin plastic card, coin, chisel to turn the latch",
        "If the door is wooden / thin — you can pry the door with a chisel, crowbar, spatula (carefully, to avoid damage)",
        "If the lock is latched but not key-locked — use a thin screwdriver to pry the mechanism through the keyhole",
        "If it doesn't work — call the Ministry of Emergency Situations (01/112) or firefighters. They will open the door without damage",
        "If the door is plastic — adjust the handle, or call a technician. Don't force it yourself — you'll damage the seal, hinges",
        "After opening: give the child water, calm them down, explain that they shouldn't lock doors. Install a lock block or remove the locks"
      ],
      warnings: [
        "DON'T leave the child alone if they're locked in. Talk to them constantly so they don't panic",
        "DON'T pour water into the lock, DON'T use force — the child may get scared and hide",
        "If the child is small — don't give them keys, sharp objects that could hurt them",
        "After the incident: install lock protection (blocker, removable handle) or replace the locks"
      ]
    },
    // ========================================
    // 5. Frozen lock — thawing
    // ========================================
    {
      id: "frozen_lock_thaw",
      title: "❄️ Lock frozen — how to thaw it",
      description: "In frost, water in the lock freezes, the key won't turn. Thaw properly, don't break the mechanism.",
      conditions: { lock_issue: ["frozen_lock"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "5–15 minutes",
      yield_estimate: "Lock opened",
      tags: ["frozen", "winter", "lock"],
      steps: [
        "DON'T use force — you'll break the key. If the key is already inserted — don't try to pull it out. It may break",
        "Warm the key with a match, lighter (not red hot!), insert into the lock, wait 10–15 seconds",
        "Use a de-icer (lock defroster) — available at auto parts stores. Spray into the keyhole, wait 1–2 minutes",
        "If no de-icer — use alcohol, vodka, cologne (liquid that doesn't freeze). Apply 2–3 drops, turn the key",
        "Use a hair dryer (heat gun) to warm the lock from the outside (don't overdo it, plastic can melt)",
        "Hot water — last resort, only if the lock is metal, plastic may crack",
        "If the lock has thawed — lubricate with graphite grease or WD-40 (so it won't freeze again)",
        "For the future: lubricate the lock for winter with silicone grease. Or install locks with frost-resistant mechanisms"
      ],
      warnings: [
        "DO NOT pour boiling water on a frozen lock — sudden temperature change, cracks, corrosion",
        "DO NOT use open flame (torch, blowtorch) on plastic elements",
        "If the key is frozen in the lock — don't try to pull it out with force, it will break",
        "After thawing, check if ice has formed inside — dry the lock with a hair dryer"
      ]
    },
    // ========================================
    // 6. Door won't close — repair
    // ========================================
    {
      id: "door_wont_lock",
      title: "🚪 Door won't close / won't lock — repair",
      description: "Door doesn't align with the frame, latch doesn't catch, gap is large. Causes: misalignment, wear, shrinkage.",
      conditions: { lock_issue: ["cant_lock"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Door works",
      tags: ["door", "repair", "diy"],
      steps: [
        "Inspect the door: where does it rub? Top, bottom, side? Check the hinges: are they loose? Tighten the hinge screws with a screwdriver or screwdriver",
        "If the door has sagged (plastic) — adjust the hinges: loosen the top hinge, lift the door, tighten. Or adjust the eccentric",
        "If the latch doesn't fit the strike plate — mark with chalk where the latch touches. Move the plate 2–3 mm with a drill/chisel",
        "If the wooden door has swollen from moisture — treat the seal with silicone grease, trim the door with a plane (2–3 mm)",
        "If the lock doesn't catch — lubricate with graphite, check the strike plate, tighten the lock screws",
        "If the metal door is misaligned — call a technician. Frame replacement or new hinges may be needed",
        "Temporary solution: door wedge, door stop, additional bolt. But this is not a replacement for repair"
      ],
      warnings: [
        "DO NOT use force when closing — it will misalign the frame, break the lock, damage the door",
        "If the door is plastic — don't drill, cut without experience. PVC breaks, deforms. Call a technician",
        "Adjusting plastic door hinges is delicate work. Incorrect adjustment = poor sealing, freezing, drafts",
        "If the door won't close in winter — possible frost freezing. Don't pour boiling water — cracks. Use a hair dryer or warm cloth"
      ]
    },
    // ========================================
    // 7. Choosing and installing a reliable lock
    // ========================================
    {
      id: "lock_selection_install",
      title: "🔐 Choosing and installing a reliable lock",
      description: "The right lock is the basis of security. Choose by security class, install correctly.",
      conditions: { lock_issue: ["forced_entry", "jammed", "cant_lock"], security_level: ["high", "medium"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "2–4 hours (selection + installation)",
      yield_estimate: "Reliable protection",
      tags: ["security", "lock", "installation"],
      steps: [
        "Choose a lock by security class: Class 1 (low) — not reliable, Class 2 (medium) — for interior doors, Class 3 (high) — for entrance doors, Class 4 (increased) — for armored doors",
        "Mechanism: cylinder (most common, easy to replace), lever (more reliable, but harder to repair), disc (protection against picking)",
        "Material: brass / steel — reliable, silumin / plastic — not suitable for entrance doors",
        "Additional options: armor plate (protection against drilling), anti-manipulation protection (against turning), master key system",
        "Installation should only be trusted to professionals (technician 2000–5000 RUB). Improper installation = weak point",
        "Modern solutions: smart lock (code, fingerprint, phone). Auto-locking, notification, opening by call",
        "After installation: test closing, key turning, smooth operation. If it jams — demand a redo",
        "Register the lock if there is a warranty. Keep keys, invoice, instructions",
        "Periodically (every six months) lubricate the lock with graphite powder. Do not use oil — it collects dust"
      ],
      warnings: [
        "DO NOT buy the cheapest locks — they break quickly and are easy to pick",
        "DO NOT install locks yourself without experience — you may damage the door, poor sealing, improper operation",
        "A smart lock requires internet and batteries — without them, the door may not open. Keep a spare key",
        "The door is a complex: lock + hinges + frame + peephole. One reliable lock with a weak door won't protect you"
      ]
    }
  ]
};

// ===== EXPORT =====
window.lockDataEn = lockDataEn;
>>>>>>> 57522793a60f67c90dd6befc66693a2a0762d34e
