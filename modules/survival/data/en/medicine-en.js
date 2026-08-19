// modules/survival/data/en/medicine-en.js
// === MODULE: SURVIVAL — MEDICINE ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "survival",
    category: "medicine",
    version: "1.0.0",
    lang: "en",
    title: "🩹 Medicine",
    description: "First aid and treatment in the field — bleeding, fractures, burns, poisoning",
    icon: "🩹",
    color: "#16a34a"
  },

  questions: [
    {
      id: "symptom",
      type: "single",
      text: "What happened? (select the main problem)",
      options: [
        { id: "bleeding", label: "🩸 Bleeding / wound", tags: ["bleeding", "wound", "trauma"] },
        { id: "fracture", label: "🦴 Fracture / dislocation", tags: ["fracture", "bone", "immobilize"] },
        { id: "burn", label: "🔥 Burn", tags: ["burn", "heat", "cool"] },
        { id: "hypothermia", label: "❄️ Hypothermia", tags: ["cold", "hypothermia", "warmth"] },
        { id: "heatstroke", label: "☀️ Heatstroke", tags: ["heat", "dehydration", "cool"] },
        { id: "poison", label: "☠️ Poisoning / snake bite", tags: ["poison", "venom", "toxin"] },
        { id: "bite", label: "🦟 Insect / tick bite", tags: ["bite", "insect", "tick"] },
        { id: "infection", label: "🦠 Infection / inflammation", tags: ["infection", "bacteria", "antiseptic"] },
        { id: "allergy", label: "🤧 Allergy", tags: ["allergy", "rash", "swelling"] },
        { id: "shock", label: "😰 Shock / panic", tags: ["shock", "panic", "psychological"] }
      ]
    },
    {
      id: "severity",
      type: "single",
      text: "How serious is the condition?",
      conditions: { symptom: ["bleeding", "fracture", "burn", "hypothermia", "heatstroke", "poison", "bite", "infection", "allergy", "shock"] },
      options: [
        { id: "mild", label: "🟢 Mild — can move, clear consciousness", tags: ["mild", "self_treat"] },
        { id: "moderate", label: "🟡 Moderate — painful but conscious", tags: ["moderate", "help_needed"] },
        { id: "severe", label: "🔴 Severe — unconscious, severe pain, bleeding", tags: ["severe", "emergency"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "How much time has passed since the injury?",
      conditions: { symptom: ["bleeding", "fracture", "burn", "hypothermia", "heatstroke", "poison", "bite", "infection", "allergy", "shock"] },
      options: [
        { id: "minutes", label: "⏱️ Just now (up to 30 min)", tags: ["fresh", "acute"] },
        { id: "hours", label: "🕐 1-6 hours", tags: ["recent", "treatable"] },
        { id: "day", label: "🌅 More than 6 hours", tags: ["old", "chronic"] },
        { id: "days", label: "📅 More than a day", tags: ["old_wound", "infection_risk"] }
      ]
    },
    {
      id: "inventory",
      type: "multi",
      text: "What medications do you have?",
      conditions: { symptom: ["bleeding", "fracture", "burn", "hypothermia", "heatstroke", "poison", "bite", "infection", "allergy", "shock"] },
      options: [
        { id: "bandage", label: "🧻 Bandage / plaster", tags: ["bandage", "dressing"] },
        { id: "antiseptic", label: "🧴 Antiseptic / alcohol", tags: ["antiseptic", "disinfect"] },
        { id: "painkiller", label: "💊 Painkiller", tags: ["pain", "relief"] },
        { id: "knife", label: "🔪 Knife / multi-tool", tags: ["tool", "cutting"] },
        { id: "fire", label: "🔥 Fire / matches", tags: ["heat", "sterilize"] },
        { id: "herbs", label: "🌿 Medicinal herbs", tags: ["herbs", "natural"] },
        { id: "nothing", label: "❌ Nothing at all", tags: ["primitive", "natural"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. BLEEDING — PRESSURE
    // ============================================================
    {
      id: "bleeding_pressure",
      title: "🩸 Bleeding — direct pressure",
      description: "For any bleeding: press the wound with clean cloth/bandage. Hold for 10-15 minutes. Don't remove soaked cloth — add layers on top. For arterial (pulsing) — tourniquet above the wound.",
      conditions: { symptom: ["bleeding"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours", "day"], inventory: ["bandage", "antiseptic", "nothing", "knife", "fire"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2-10 min",
      yield_estimate: "bleeding stopped",
      tags: ["bleeding", "first_aid", "universal", "critical"],
      steps: [
        "1. PROTECT YOURSELF: wear gloves or use clean cloth.",
        "2. PRESS: the wound with clean cloth/bandage/shirt.",
        "3. HOLD: pressure for 10-15 minutes, without lifting.",
        "4. DON'T REMOVE: soaked cloth — add layers on top.",
        "5. TOURNIQUET: for arterial (pulsing, bright red) — above the wound.",
        "6. MARK: time of tourniquet application."
      ],
      warnings: [
        "🚫 Tourniquet — only life-threatening, mark time.",
        "⏰ Release tourniquet every 20-30 minutes for 5 minutes.",
        "🦠 Don't use dirty cloth — infection.",
        "🩸 For venous bleeding (dark blood) — pressure bandage."
      ]
    },
    // ============================================================
    // 2. SHOCK / PANIC
    // ============================================================
    {
      id: "shock_treatment",
      title: "😰 Shock / panic — psychological help",
      description: "For shock (pale, cold sweat, weak pulse) — lay down, elevate legs. For panic — breathe together, count to 10. Speak calmly, confidently.",
      conditions: { symptom: ["shock"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours"], inventory: ["nothing"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5-15 min",
      yield_estimate: "stabilized condition",
      tags: ["shock", "panic", "psychological", "emergency"],
      steps: [
        "1. LAY DOWN: elevate legs (if no spinal injury).",
        "2. BREATHE TOGETHER: 4 sec inhale, 4 sec pause, 4 sec exhale.",
        "3. SPEAK: calmly, confidently — 'you're safe, I'm here'.",
        "4. COVER: warm if cold.",
        "5. WATER: small sips (if conscious).",
        "6. HELP: call if possible."
      ],
      warnings: [
        "🚫 Don't give alcohol, coffee, unnecessary pills.",
        "🔄 Repeat: 'You're breathing with me. You're safe.'",
        "🧠 Panic is contagious — stay calm yourself.",
        "🏃 For severe shock — don't let them stand or move."
      ]
    },
    // ============================================================
    // 3. BURN — COOLING
    // ============================================================
    {
      id: "burn_cool",
      title: "🔥 Burn — cooling",
      description: "For burns, immediately cool under running water for 10-20 minutes. No ice! No oil! No ointments! Cover with sterile cloth. For extensive burns — prevent hypothermia.",
      conditions: { symptom: ["burn"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours"], inventory: ["bandage", "antiseptic", "nothing", "knife"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10-30 min",
      yield_estimate: "damage reduced",
      tags: ["burn", "cool", "first_aid", "universal"],
      steps: [
        "1. COOL: under running cold water for 10-20 minutes.",
        "2. NO ICE: ice water damages tissue.",
        "3. NO OIL: oil, sour cream, ointments trap heat.",
        "4. COVER: sterile cloth/bandage, don't stick to wound.",
        "5. FOR EXTENSIVE: prevent hypothermia, give water.",
        "6. CHEMICAL: rinse with water for 20-30 minutes."
      ],
      warnings: [
        "🔥 Burns >10% body — shock, need medical help.",
        "😷 Facial burns, airway burns — life-threatening.",
        "🧪 Chemical burns — rinse with water for 20-30 minutes.",
        "💊 Give painkiller for severe pain."
      ]
    },
    // ============================================================
    // 4. HYPOTHERMIA — WARMING
    // ============================================================
    {
      id: "hypothermia_warm",
      title: "❄️ Hypothermia — warming",
      description: "For hypothermia: remove wet clothing, wrap in dry blankets. Warm gradually — not hot water, not near fire. Give warm sweet drinks. Rub extremities, not the body.",
      conditions: { symptom: ["hypothermia"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["blanket", "fire", "nothing", "knife"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30-60 min",
      yield_estimate: "gradual warming",
      tags: ["cold", "hypothermia", "warmth", "winter"],
      steps: [
        "1. REMOVE WET CLOTHING: it draws heat away.",
        "2. WRAP: in dry blankets, cloth, leaves, pine needles.",
        "3. WARM GRADUALLY: NOT hot water, NOT near fire.",
        "4. DRINKS: warm sweet — tea, sugar solution.",
        "5. RUB: extremities (hands, feet), but NOT the body — shock.",
        "6. SEVERE: warm torso with warm compresses."
      ],
      warnings: [
        "🚫 DON'T warm suddenly — blood vessels burst, shock.",
        "🍷 DON'T give alcohol — dilates vessels, increases heat loss.",
        "😴 If unconscious — recovery position, monitor breathing.",
        "❄️ Body temperature <32°C — critical, need help."
      ]
    },
    // ============================================================
    // 5. HEATSTROKE — COOLING
    // ============================================================
    {
      id: "heatstroke_cool",
      title: "☀️ Heatstroke — cooling",
      description: "For heatstroke: move to shade, undress, pour water, ventilate. Give small sips of water. If unconscious — recovery position, call for help.",
      conditions: { symptom: ["heatstroke"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["nothing", "knife", "bandage"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10-30 min",
      yield_estimate: "temperature reduced",
      tags: ["heat", "dehydration", "cool", "summer"],
      steps: [
        "1. MOVE TO SHADE: or cool place.",
        "2. UNDRESS: loosen clothing.",
        "3. POUR WATER: on body, wrap in wet cloth.",
        "4. VENTILATE: fan, leaves, air movement.",
        "5. DRINK: small sips — water with salt/sugar.",
        "6. UNCONSCIOUS: recovery position, monitor breathing."
      ],
      warnings: [
        "🚫 DON'T give too much water at once — vomiting.",
        "🚫 DON'T give alcohol, coffee — dehydration.",
        "🌡️ Temperature >40°C — critical, need ambulance.",
        "🧊 For cramps — massage muscles, give water."
      ]
    },
    // ============================================================
    // 6. SNAKE BITE
    // ============================================================
    {
      id: "snake_bite",
      title: "🐍 Snake bite — what to do",
      description: "For snake bite: don't suck venom, don't apply tourniquet, don't make incisions. Immobilize the limb, keep below heart level. Remember the snake's color. Call for help.",
      conditions: { symptom: ["poison"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["bandage", "antiseptic", "nothing"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5-15 min",
      yield_estimate: "primary care",
      tags: ["snake", "venom", "emergency", "bite"],
      steps: [
        "1. DON'T SUCK: useless, infection.",
        "2. DON'T TOURNIQUET: can lead to amputation.",
        "3. DON'T CUT: infection and bleeding.",
        "4. IMMOBILIZE: limb, keep below heart level.",
        "5. REMEMBER: color and size of snake (for antivenom).",
        "6. HELP: call or go to people (don't run!)."
      ],
      warnings: [
        "⚡ Venom spreads through lymph — move slowly.",
        "⏳ Time is critical — first 30 minutes.",
        "💊 Antihistamines (if available) — may help.",
        "🩸 If swelling — loosen jewelry, clothing."
      ]
    },
    // ============================================================
    // 7. INSECT / TICK BITE
    // ============================================================
    {
      id: "insect_bite",
      title: "🦟 Insect / tick bite",
      description: "For bee/wasp sting: remove stinger (don't squeeze!), apply cold. For tick: remove with tweezers (don't pull, twist), apply antiseptic. For allergy — antihistamine.",
      conditions: { symptom: ["bite"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours", "day"], inventory: ["antiseptic", "bandage", "nothing"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5-15 min",
      yield_estimate: "bite treated",
      tags: ["insect", "tick", "bite", "allergy"],
      steps: [
        "1. BEE/WASP: remove stinger (DON'T squeeze!), apply cold.",
        "2. SPIDER: wash, apply cold, observe.",
        "3. TICK: remove with tweezers (twist counterclockwise), don't pull!",
        "4. ANTISEPTIC: apply to bite site.",
        "5. ALLERGY: if swelling, rash — antihistamine.",
        "6. TIME: mark bite time, monitor redness."
      ],
      warnings: [
        "⚠️ Tick: if head remains — remove with needle/knife.",
        "🦟 For allergic reaction — antihistamine urgently.",
        "🌡️ Facial swelling, throat swelling — life-threatening, hospital.",
        "🧪 Don't crush the tick — infection."
      ]
    },
    // ============================================================
    // 8. FRACTURE — SPLINT
    // ============================================================
    {
      id: "fracture_splint",
      title: "🦴 Fracture — splint / immobilization",
      description: "Don't try to realign the bone. Immobilize the fracture with a splint (stick, branch, umbrella). The splint must cover joints above and below the fracture. For open fracture — cover the wound, don't push the bone in.",
      conditions: { symptom: ["fracture"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["bandage", "rope", "knife", "nothing"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10-20 min",
      yield_estimate: "fracture immobilized",
      tags: ["fracture", "immobilize", "trauma", "bone"],
      steps: [
        "1. DON'T REALIGN: only doctor.",
        "2. FIND SPLINT: straight stick, branch, umbrella, ski pole.",
        "3. LENGTH: longer than joints above and below fracture.",
        "4. TIE: with rope/cloth/paracord — not too tight.",
        "5. OPEN FRACTURE: cover wound with clean cloth.",
        "6. COLD: apply (through cloth) to reduce swelling."
      ],
      warnings: [
        "🔄 Check pulse below splint — don't overtighten.",
        "🦵 For femur fracture — splint from armpit to heel.",
        "🦠 Open fracture — high infection risk, need antiseptic.",
        "💊 Give painkiller for severe pain."
      ]
    },
    // ============================================================
    // 9. WOUND INFECTION
    // ============================================================
    {
      id: "infection_wound",
      title: "🦠 Wound infection — treatment",
      description: "For purulent wound, redness, swelling: wash with water, apply antiseptic. For boil — don't squeeze, warm compresses. For fever — rest, drink, painkiller.",
      conditions: { symptom: ["infection"], severity: ["mild", "moderate"], time: ["hours", "day", "days"], inventory: ["antiseptic", "bandage", "painkiller", "nothing", "herbs"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10-20 min",
      yield_estimate: "preventing complications",
      tags: ["infection", "wound", "antiseptic", "care"],
      steps: [
        "1. WASH: with running water and soap (if available).",
        "2. ANTISEPTIC: iodine, alcohol, peroxide.",
        "3. BANDAGE: sterile, change daily.",
        "4. PURULENT WOUND: warm compresses for maturation.",
        "5. FEVER: rest, drink, painkiller.",
        "6. HERBS: plantain, calendula, chamomile (compresses)."
      ],
      warnings: [
        "🚫 Don't squeeze boil — infection into blood.",
        "🌡️ Fever >38.5°C for 3+ days — need doctor.",
        "🔴 Red line from wound — lymphangitis, urgent doctor.",
        "🦠 Greenish pus with odor — serious infection."
      ]
    },
    // ============================================================
    // 10. ALLERGIC REACTION
    // ============================================================
    {
      id: "allergy_treatment",
      title: "🤧 Allergic reaction",
      description: "For allergy: remove allergen, take antihistamine. For skin reaction — cold compress. For facial/throat swelling — immediate hospital.",
      conditions: { symptom: ["allergy"], severity: ["mild", "moderate", "severe"], time: ["minutes", "hours"], inventory: ["antiseptic", "bandage", "painkiller", "nothing"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10-20 min",
      yield_estimate: "symptoms relieved",
      tags: ["allergy", "rash", "swelling", "medication"],
      steps: [
        "1. REMOVE ALLERGEN: food, pollen, bite, medication.",
        "2. ANTIHISTAMINE: suprastin, loratadine, diphenhydramine (if available).",
        "3. COLD COMPRESS: for skin rash/itching.",
        "4. THROAT SWELLING: give air, sitting position.",
        "5. FACIAL/THROAT SWELLING: immediate hospital.",
        "6. REMEMBER: what you're allergic to — avoid in future."
      ],
      warnings: [
        "🚨 Angioedema — life-threatening, immediate hospital.",
        "💊 Don't give antihistamines unnecessarily.",
        "🧊 Cold — best remedy for local allergy.",
        "📝 Remember what causes allergy — avoid in future."
      ]
    },
    // ============================================================
    // 11. HERBAL TREATMENT (FIELD MEDICINE)
    // ============================================================
    {
      id: "herbal_treatment",
      title: "🌿 Herbal treatment (field medicine)",
      description: "In the field, use plantain (hemostatic, antiseptic), nettle (vitamins, hemostatic), chamomile (antiseptic, calming), calendula (wound healing).",
      conditions: { symptom: ["bleeding", "infection", "burn", "bite"], severity: ["mild", "moderate"], time: ["minutes", "hours", "day", "days"], inventory: ["herbs", "nothing", "knife"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10-30 min",
      yield_estimate: "natural help",
      tags: ["herbs", "natural", "field_medicine", "primitive"],
      steps: [
        "1. PLANTAIN: apply leaf to wound (hemostatic).",
        "2. NETTLE: apply (hemostatic) or brew tea.",
        "3. CHAMOMILE: brew tea (antiseptic, calming).",
        "4. CALENDULA: compresses on wounds (healing).",
        "5. OAK/WILLOW BARK: decoction for washing wounds.",
        "6. CELANDINE: juice on warts/fungus (with caution!)."
      ],
      warnings: [
        "🚫 Celandine is toxic — only topical, don't swallow.",
        "🌿 Not all herbs are safe — learn before using.",
        "💊 Herbs help, but don't replace antibiotics.",
        "🧪 If allergic to plants — don't use."
      ]
    },
    // ============================================================
    // 12. DEEP WOUND CLEANING
    // ============================================================
    {
      id: "wound_cleaning",
      title: "🧼 Deep wound cleaning",
      description: "For deep wounds: wash with water, remove foreign bodies (not deep!). Apply antiseptic. For heavy contamination — rinse with hydrogen peroxide. Apply bandage.",
      conditions: { symptom: ["bleeding", "infection"], severity: ["moderate", "severe"], time: ["minutes", "hours"], inventory: ["antiseptic", "bandage", "knife", "nothing", "herbs"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15-30 min",
      yield_estimate: "wound cleaned",
      tags: ["wound", "cleaning", "first_aid", "deep"],
      steps: [
        "1. WASH: with running water (boiled!).",
        "2. REMOVE: superficial foreign bodies (don't dig deep!).",
        "3. ANTISEPTIC: iodine, alcohol, peroxide.",
        "4. BANDAGE: sterile.",
        "5. CHANGE: daily or when soaked.",
        "6. INFLAMMATION: compresses of chamomile/calendula."
      ],
      warnings: [
        "🦠 Deep wounds — high tetanus risk, need doctor.",
        "🧪 Peroxide — only for washing, don't pour deep.",
        "🧤 Use clean hands, sterilized tools.",
        "🩸 For arterial bleeding — stop first, clean after."
      ]
    },
    // ============================================================
    // 13. ANTIBIOTICS (IF AVAILABLE)
    // ============================================================
    {
      id: "infection_antibiotic",
      title: "💊 Infection — antibiotics (if available)",
      description: "For serious infection (pus, fever, redness): take antibiotics strictly as directed. Amoxicillin, ampicillin, azithromycin — broad spectrum. Don't stop the course.",
      conditions: { symptom: ["infection"], severity: ["moderate", "severe"], time: ["hours", "day", "days"], inventory: ["antiseptic", "bandage", "painkiller", "nothing"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "5-7 days",
      yield_estimate: "recovery",
      tags: ["antibiotics", "infection", "medication", "long_term"],
      steps: [
        "1. STRICTLY AS DIRECTED: dosage and timing.",
        "2. BROAD SPECTRUM: amoxicillin, ampicillin, azithromycin.",
        "3. DON'T STOP: course — bacteria become resistant.",
        "4. REST AND DRINK: additionally.",
        "5. VITAMINS: nettle, rosehip.",
        "6. FEVER >38.5°C: add antipyretic."
      ],
      warnings: [
        "⚠️ Antibiotics only for bacterial infection.",
        "💊 Don't exceed dosage — liver, kidneys.",
        "🔄 If allergic — antibiotics are prohibited.",
        "🍷 NOT with alcohol — hepatotoxic."
      ]
    },
    // ============================================================
    // 14. LONG-TERM WOUND HEALING
    // ============================================================
    {
      id: "wound_healing_long",
      title: "🩹 Long-term wound healing",
      description: "For long-term wound healing: wash regularly, change dressings. Use antiseptics, herbs (plantain, calendula). Monitor nutrition: more protein, vitamins.",
      conditions: { symptom: ["infection", "bleeding"], severity: ["moderate", "severe"], time: ["days"], inventory: ["antiseptic", "bandage", "herbs", "nothing"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "1-4 weeks",
      yield_estimate: "full healing",
      tags: ["wound", "healing", "long_term", "nutrition"],
      steps: [
        "1. WASH REGULARLY: with water and soap.",
        "2. CHANGE DRESSINGS: 1-2 times daily.",
        "3. ANTISEPTICS: iodine, peroxide, alcohol.",
        "4. HERBS: plantain, calendula (healing).",
        "5. NUTRITION: protein (meat, nuts, insects), vitamins.",
        "6. REST, SLEEP: more important than medicine."
      ],
      warnings: [
        "🦠 If worsening (pus, fever, swelling) — need antibiotics.",
        "🌿 Herbs help, but don't replace antiseptics.",
        "🥩 Protein is important for tissue regeneration.",
        "💧 Dehydration slows healing — drink water."
      ]
    }
  ]
});