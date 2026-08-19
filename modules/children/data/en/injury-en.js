// modules/children/data/en/injury-en.js
// === MODULE: CHILDREN — INJURIES AND FIRST AID ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "children",
    category: "injury",
    version: "1.0.0",
    lang: "en",
    title: "🩹 Injuries and First Aid",
    description: "Cuts, burns, bruises, fractures, eye injuries, choking — what to do before the ambulance arrives",
    icon: "🩹",
    color: "#db2777"
  },

  questions: [
    {
      id: "injury_type",
      type: "single",
      text: "What type of injury?",
      options: [
        { id: "cut", label: "🩸 Cut / wound / bleeding", tags: ["cut"] },
        { id: "glass_cut", label: "🩸 Glass cut / sharp object", tags: ["glass_cut"] },
        { id: "burn", label: "🔥 Burn (boiling water, fire, chemicals)", tags: ["burn"] },
        { id: "electrical_burn", label: "⚡ Electrical burn (shock, outlet, wire)", tags: ["electrical_burn"] },
        { id: "bruise", label: "🤕 Bruise / sprain", tags: ["bruise"] },
        { id: "bump_head", label: "🤕 Head bump / lump", tags: ["bump_head"] },
        { id: "fracture", label: "🦴 Fracture / suspected fracture", tags: ["fracture"] },
        { id: "dislocation", label: "🦴 Dislocation / suspected dislocation", tags: ["dislocation"] },
        { id: "head", label: "🤕 Head injury / concussion", tags: ["head"] },
        { id: "eye", label: "👁️ Eye injury / chemical / foreign body", tags: ["eye"] },
        { id: "choking", label: "😮 Choking / gagging / suffocating", tags: ["choking"] },
        { id: "animal_bite", label: "🐕 Animal bite (dog, cat, rodent)", tags: ["animal_bite"] }
      ]
    },
    {
      id: "severity",
      type: "single",
      text: "How serious is it?",
      conditions: { injury_type: ["cut", "glass_cut", "burn", "electrical_burn", "bruise", "bump_head", "fracture", "dislocation", "head", "eye", "choking", "animal_bite"] },
      options: [
        { id: "minor", label: "🩹 Small cut / bruise / scratch", tags: ["minor"] },
        { id: "moderate", label: "🩸 Deep wound / severe burn / swelling", tags: ["moderate"] },
        { id: "severe", label: "🚨 Heavy bleeding / fracture / unconsciousness", tags: ["severe"] }
      ]
    },
    {
      id: "age",
      type: "single",
      text: "How old is the child?",
      conditions: { injury_type: ["cut", "glass_cut", "burn", "electrical_burn", "bruise", "bump_head", "fracture", "dislocation", "head", "eye", "choking", "animal_bite"] },
      options: [
        { id: "infant", label: "👶 Infant (0–1 year)", tags: ["infant"] },
        { id: "toddler", label: "🧒 1–3 years", tags: ["toddler"] },
        { id: "older", label: "🧑 3+ years", tags: ["older"] }
      ]
    },
    {
      id: "bleeding_type",
      type: "single",
      text: "What type of bleeding?",
      conditions: { injury_type: ["cut", "glass_cut"] },
      options: [
        { id: "capillary", label: "🩸 Capillary (oozing drops)", tags: ["capillary"] },
        { id: "venous", label: "🩸 Venous (dark blood, steady flow)", tags: ["venous"] },
        { id: "arterial", label: "🩸 Arterial (bright red, pulsating)", tags: ["arterial"] }
      ]
    },
    {
      id: "consciousness_injury",
      type: "single",
      text: "Is the child conscious?",
      conditions: { injury_type: ["cut", "glass_cut", "burn", "electrical_burn", "bruise", "bump_head", "fracture", "dislocation", "head", "eye", "choking", "animal_bite"] },
      options: [
        { id: "conscious_yes", label: "✅ Yes, conscious and responsive", tags: ["conscious_yes"] },
        { id: "conscious_confused", label: "⚠️ Drowsy / lethargic", tags: ["conscious_confused"] },
        { id: "conscious_no", label: "❌ Unconscious", tags: ["conscious_no"] }
      ]
    },
    {
      id: "tetanus_vaccine",
      type: "single",
      text: "When was the last tetanus shot?",
      conditions: { injury_type: ["cut", "glass_cut", "animal_bite"] },
      options: [
        { id: "tetanus_yes", label: "✅ Within the last 5 years", tags: ["tetanus_yes"] },
        { id: "tetanus_old", label: "⚠️ More than 5 years ago", tags: ["tetanus_old"] },
        { id: "tetanus_no", label: "❌ Not vaccinated", tags: ["tetanus_no"] },
        { id: "tetanus_unknown", label: "❓ Don't know", tags: ["tetanus_unknown"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. SEVERE BLEEDING
    // ============================================================
    {
      id: "bleeding_control",
      title: "🩸 Bleeding — stopping until ambulance arrives",
      description: "Even a small cut in a child can be dangerous due to low blood volume. Act quickly.",
      conditions: { injury_type: ["cut", "glass_cut"], severity: ["moderate", "severe"], bleeding_type: ["venous", "arterial"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–10 minutes",
      yield_estimate: "Bleeding stopped",
      tags: ["bleeding", "first_aid", "emergency"],
      steps: [
        "Don't panic. Children copy your emotions. Speak calmly and confidently.",
        "Wear gloves (if available) or use a clean cloth/bag.",
        "For venous bleeding: apply clean cloth, press for 10–15 minutes.",
        "For arterial bleeding: IMMEDIATE tourniquet above the wound (5–10 cm). Write down the time!",
        "If no tourniquet — use a belt, scarf, strip of cloth. Put cloth under the tourniquet.",
        "For head wounds: press with sterile gauze, wrap with a bandage.",
        "After stopping: treat edges with iodine, apply sterile bandage.",
        "Check tetanus vaccination. If > 5 years — tell the doctor."
      ],
      warnings: [
        "DON'T remove an object stuck in the wound — it will increase bleeding.",
        "Tourniquet cannot stay on > 1.5–2 hours (summer) and > 1 hour (winter).",
        "DON'T put chlorhexidine, iodine INSIDE a deep wound — only on edges.",
        "Children under 1 year have little blood. Even 100–150 ml loss is critical."
      ]
    },

    // ============================================================
    // 2. MINOR CUT / SCRATCH
    // ============================================================
    {
      id: "minor_cut",
      title: "🩹 Minor cut or scratch — treatment",
      description: "Most minor cuts and scratches can be treated at home. Main goal: prevent infection.",
      conditions: { injury_type: ["cut"], severity: ["minor"], bleeding_type: ["capillary"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Wound treated",
      tags: ["cut", "minor", "first_aid"],
      steps: [
        "Wash your hands. Put on gloves (if available).",
        "Rinse the wound with running water for 2–3 minutes.",
        "Remove small particles with sterile tweezers or wet gauze.",
        "Treat with hydrogen peroxide or chlorhexidine (once).",
        "Apply a band-aid or sterile bandage. Change 2 times a day.",
        "Monitor for 2–3 days. If redness, swelling, pus — see a doctor.",
        "If on the face — apply healing ointment (Bepanthen)."
      ],
      warnings: [
        "DON'T treat the wound with alcohol, iodine, or brilliant green inside.",
        "DON'T keep a band-aid on for 3+ days — the wound needs air.",
        "If the wound is from a rusty nail or animal bite — tetanus shot needed."
      ]
    },

    // ============================================================
    // 3. GLASS CUT
    // ============================================================
    {
      id: "glass_cut",
      title: "🩸 Glass cut — special risks",
      description: "Glass leaves small fragments in the wound. They need to be removed to avoid infection.",
      conditions: { injury_type: ["glass_cut"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Fragments removed + wound treated",
      tags: ["glass", "cut", "first_aid"],
      steps: [
        "DON'T try to remove fragments with your fingers — you can cut yourself.",
        "Use sterile tweezers or a needle (disinfect first).",
        "Rinse the wound with running water to wash out small particles.",
        "Treat with hydrogen peroxide or chlorhexidine.",
        "Apply a sterile bandage. If fragments are deep — don't dig, call a doctor.",
        "Check tetanus vaccination.",
        "If the wound is deep (> 1 cm) — ambulance, may need stitches."
      ],
      warnings: [
        "DON'T try to remove deep fragments yourself — may damage nerves.",
        "DON'T touch the wound with dirty hands — risk of infection.",
        "If glass broke — collect fragments with a wet cloth to avoid cuts."
      ]
    },

    // ============================================================
    // 4. BURN (MILD / MODERATE)
    // ============================================================
    {
      id: "burn_first_aid",
      title: "🔥 Burn — first aid and mistakes",
      description: "Burns in children are deeper than they appear. Proper first aid in the first 10 minutes determines the outcome.",
      conditions: { injury_type: ["burn"], severity: ["minor", "moderate"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Burn depth reduced",
      tags: ["burn", "first_aid", "emergency"],
      steps: [
        "Immediately remove the heat source. Don't touch burnt clothing stuck to the skin.",
        "Cool the burn with RUNNING water for 15–20 minutes. Temperature 15–25°C.",
        "Remove rings, bracelets, watches from the burned limb.",
        "DON'T pop blisters. DON'T remove stuck clothing.",
        "Cover with sterile gauze or plastic wrap.",
        "For chemical burns: rinse with water for 20–30 minutes.",
        "Call ambulance for: face, hands, genital burns, > 10% body, deep burns."
      ],
      warnings: [
        "DON'T apply oil, sour cream, toothpaste — they trap heat.",
        "DON'T use ice, snow, ice water — causes frostbite.",
        "Burns in children are deeper than in adults. Even a 'small' burn can be deep."
      ]
    },

    // ============================================================
    // 5. BURN IN INFANT
    // ============================================================
    {
      id: "burn_infant",
      title: "👶 Burn in an infant — emergency",
      description: "Infant skin is thin, burns penetrate deeply. Always call an ambulance.",
      conditions: { injury_type: ["burn"], age: ["infant"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Emergency help",
      tags: ["burn", "infant", "emergency"],
      steps: [
        "A burn in an infant is ALWAYS an ambulance. Even a 'small' burn can be deep.",
        "Cool the burn with running water for 10–15 minutes.",
        "DON'T remove stuck clothing.",
        "Cover with sterile gauze or clean cloth.",
        "Don't give food or drink — surgery may be needed.",
        "If face/airway burn — immediately to hospital."
      ],
      warnings: [
        "Infant skin is 5 times thinner than adult skin. Burns penetrate very deeply.",
        "DON'T apply any ointments before the ambulance arrives.",
        "DON'T use ice — frostbite."
      ]
    },

    // ============================================================
    // 6. ELECTRICAL BURN
    // ============================================================
    {
      id: "electrical_burn",
      title: "⚡ Electrical burn — turn off power and call ambulance",
      description: "Electrical burns can be invisible on the outside but destroy tissue inside. Always need a doctor.",
      conditions: { injury_type: ["electrical_burn"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Complications prevented",
      tags: ["electrical", "burn", "emergency"],
      steps: [
        "DON'T touch the child while they are in contact with electricity! Turn off the breaker, unplug.",
        "After de-energizing: check breathing and pulse. If none — CPR.",
        "Cool the burn with running water for 10–15 minutes.",
        "Cover with sterile gauze.",
        "AMBULANCE IMMEDIATELY. Electrical burns are internal — heart, lungs may be damaged.",
        "Monitor for 48 hours: lethargy, cough, vomiting, seizures — any symptom = doctor."
      ],
      warnings: [
        "DON'T touch the child while they are under current — you'll get shocked.",
        "Electrical burns are often 'invisible'. A small spot on the skin can hide fatal internal damage.",
        "DON'T give painkillers without a doctor."
      ]
    },

    // ============================================================
    // 7. BRUISE / SPRAIN
    // ============================================================
    {
      id: "bruise_first_aid",
      title: "🤕 Bruise, sprain — home treatment",
      description: "Bruises and sprains are the most common injuries. Proper first aid speeds healing.",
      conditions: { injury_type: ["bruise"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Pain and swelling reduced",
      tags: ["bruise", "first_aid"],
      steps: [
        "Apply cold (ice pack wrapped in cloth) for 15–20 minutes.",
        "Elevate the injured limb — reduces swelling.",
        "For sprains: rest for 1–3 days. Elastic bandage (not tight!).",
        "For severe pain — paracetamol or ibuprofen (by age).",
        "After 2 days — start gentle movement.",
        "Heat after 48–72 hours — speeds up hematoma resolution.",
        "If swelling increases, pain worsens — fracture. See a doctor."
      ],
      warnings: [
        "DON'T apply ice directly to bare skin — frostbite.",
        "DON'T apply heat in the first 48 hours — increases swelling.",
        "DON'T give painkillers if a fracture is suspected."
      ]
    },

    // ============================================================
    // 8. HEAD BUMP / LUMP
    // ============================================================
    {
      id: "bump_on_head",
      title: "🤕 Head bump / lump — what to do",
      description: "A bump from a hit is soft tissue swelling. Usually safe, but monitor.",
      conditions: { injury_type: ["bump_head"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Swelling reduced + observation",
      tags: ["bump", "head", "first_aid"],
      steps: [
        "Apply cold (ice pack in cloth) for 15–20 minutes.",
        "Monitor the child for 24 hours. Dangerous signs: vomiting, drowsiness, headache.",
        "If child < 1 year — ambulance even for a 'mild' hit.",
        "If vomiting — turn on side to prevent choking.",
        "If any dangerous signs — ambulance immediately.",
        "After the hit: rest 3–5 days. No TV, no phone games."
      ],
      warnings: [
        "DON'T give painkillers without a doctor's prescription.",
        "DON'T let the child sleep immediately after a hit. Wake every 2 hours.",
        "If the bump grows, is painful — possible hematoma. See a doctor."
      ]
    },

    // ============================================================
    // 9. FRACTURE
    // ============================================================
    {
      id: "fracture_suspected",
      title: "🦴 Fracture — immobilization and transport",
      description: "Children's bones are elastic, but fractures are common. Proper immobilization reduces pain.",
      conditions: { injury_type: ["fracture"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Immobilized until ambulance",
      tags: ["fracture", "first_aid", "emergency"],
      steps: [
        "Signs: pain, swelling, deformity, cracking sound, inability to move.",
        "DON'T try to realign the bone.",
        "For open fracture: cover with sterile gauze, don't realign.",
        "Immobilize: fix the limb in the position you found it.",
        "Fix TWO joints — above and below the fracture.",
        "For spinal fracture: DON'T move the child. Call an ambulance.",
        "Apply cold for 15–20 minutes."
      ],
      warnings: [
        "DON'T give food or drink with a fracture.",
        "DON'T give painkillers if a skull fracture is suspected.",
        "Children's fractures require precise reduction. Not 'it'll heal on its own'."
      ]
    },

    // ============================================================
    // 10. DISLOCATION
    // ============================================================
    {
      id: "dislocation",
      title: "🦴 Dislocation — do not try to reset!",
      description: "A dislocation is a joint displacement. DO NOT try to reset it yourself.",
      conditions: { injury_type: ["dislocation"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Immobilized until doctor",
      tags: ["dislocation", "first_aid", "emergency"],
      steps: [
        "Signs: unnatural limb position, pain, swelling, inability to move.",
        "DON'T try to reset the dislocation — may damage nerves and vessels.",
        "Immobilize the limb in the position you found it.",
        "Apply cold (ice pack in cloth) for 15–20 minutes.",
        "Give painkiller (paracetamol or ibuprofen — by age).",
        "Go to the doctor (trauma center). Only a doctor can reset it.",
        "After reduction: rest for 2–3 weeks, physiotherapy."
      ],
      warnings: [
        "DON'T try to reset the dislocation yourself — may damage blood vessels.",
        "DON'T apply heat — increases swelling.",
        "In children, dislocations are often accompanied by fractures — X-ray needed."
      ]
    },

    // ============================================================
    // 11. HEAD INJURY / CONCUSSION
    // ============================================================
    {
      id: "head_injury_child",
      title: "🧠 Head injury — concussion and dangerous signs",
      description: "Children often hit their heads. Most are safe, but some signs require an ambulance.",
      conditions: { injury_type: ["head"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Seriousness assessed",
      tags: ["head", "concussion", "emergency"],
      steps: [
        "Calm the child. Examine the head: is there a wound, blood, depression?",
        "Apply cold for 15 minutes.",
        "Monitor for 24 hours. Dangerous signs: vomiting, drowsiness, headache, double vision.",
        "If any dangerous signs — ambulance immediately.",
        "If vomiting — turn the child on their side.",
        "After concussion: rest for 3–5 days. No TV, no phone games.",
        "If child < 1 year — ambulance even for a 'mild' hit."
      ],
      warnings: [
        "DON'T give painkillers without a doctor's prescription.",
        "DON'T let them sleep immediately. Wake every 2 hours.",
        "Blood from the ear or clear fluid from the nose after a head injury = skull fracture. Ambulance."
      ]
    },

    // ============================================================
    // 12. EYE INJURY
    // ============================================================
    {
      id: "eye_injury",
      title: "👁️ Eye injury — chemicals, foreign body, impact",
      description: "Children's eyes are vulnerable. Proper first aid in the first minutes saves vision.",
      conditions: { injury_type: ["eye"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Vision preserved",
      tags: ["eye", "first_aid", "emergency"],
      steps: [
        "For chemicals: rinse the eye with water for 15–20 minutes. Ambulance!",
        "For foreign body: don't rub the eye. Rinse with saline.",
        "If the particle doesn't wash out — turn the eyelid over, remove with a cotton swab.",
        "For impact: apply cold for 10 minutes.",
        "For penetrating wound: DON'T remove the object! Stabilize with a bandage.",
        "Cover the eye with sterile gauze.",
        "After any eye injury — ophthalmologist within 24 hours."
      ],
      warnings: [
        "DON'T rub the eye — scratches the cornea.",
        "DON'T use cotton swabs on the cornea.",
        "DON'T rinse the eye with oils, milk, tea — only water."
      ]
    },

    // ============================================================
    // 13. CHOKING
    // ============================================================
    {
      id: "choking_child",
      title: "😮 Choking — Heimlich maneuver for children",
      description: "Toys, nuts, grapes, balloons — the main killers. Act immediately while child is conscious.",
      conditions: { injury_type: ["choking"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Object removed",
      tags: ["choking", "heimlich", "emergency"],
      steps: [
        "If child is coughing strongly — encourage coughing.",
        "If cough is weak, child can't speak, turning blue — Heimlich maneuver.",
        "Infant (< 1 year): 5 back blows + 5 chest thrusts.",
        "Child 1–8 years: stand behind, wrap arms above navel, sharp upward thrusts.",
        "If unconscious: start CPR.",
        "After successful removal — see a doctor.",
        "Prevention: don't give children < 3 years nuts, grapes, candy, small toys."
      ],
      warnings: [
        "DON'T hit the back of a standing child — pushes object deeper.",
        "DON'T perform Heimlich if coughing effectively.",
        "DON'T blindly finger-sweep.",
        "Balloons are the most dangerous. Ambulance immediately."
      ]
    },

    // ============================================================
    // 14. INFANT CHOKING
    // ============================================================
    {
      id: "choking_infant",
      title: "👶 Infant choking — special technique",
      description: "For infants, the Heimlich maneuver is DIFFERENT. A mistake can be fatal.",
      conditions: { injury_type: ["choking"], age: ["infant"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Object removed",
      tags: ["choking", "infant", "emergency"],
      steps: [
        "Place the infant face down on your forearm, head lower than body.",
        "5 back blows between the shoulder blades with the heel of your hand.",
        "Turn over. 5 chest thrusts (2 fingers, center of chest).",
        "Repeat the cycle until the object comes out.",
        "If unconscious — start infant CPR."
      ],
      warnings: [
        "DON'T perform classic Heimlich on an infant.",
        "DON'T hit the back if coughing effectively.",
        "Infants choke silently. If not breathing, turning blue — act immediately."
      ]
    },

    // ============================================================
    // 15. ANIMAL BITE
    // ============================================================
    {
      id: "animal_bite",
      title: "🐕 Animal bite — risk of rabies and infection",
      description: "Dog, cat, rodent bites — risk of infection and rabies. Act correctly.",
      conditions: { injury_type: ["animal_bite"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Wound treated + prevention",
      tags: ["bite", "rabies", "first_aid"],
      steps: [
        "Rinse the wound with water and soap for 10–15 minutes.",
        "Treat with hydrogen peroxide or chlorhexidine on edges.",
        "Apply sterile bandage. Do not stitch the wound yourself.",
        "If bitten by an unknown/stray dog/cat — immediate doctor! Risk of rabies.",
        "Check tetanus vaccination. If > 5 years — booster needed.",
        "Monitor the wound for 3–5 days: redness, swelling, pus — infection.",
        "If bitten by a pet dog/cat — isolate for 10 days (rabies observation)."
      ],
      warnings: [
        "Rabies is 100% fatal. If suspected — vaccination immediately!",
        "DON'T stitch a bite wound — infection in a closed wound.",
        "Cat scratches get infected in 80% of cases. Treat thoroughly."
      ]
    }
  ]
});