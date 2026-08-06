// === MODULE: INJURIES AND FIRST AID (ENGLISH) ===
const injuryDataEn = {
  category: "injury",
  title: "🩹 Injuries and First Aid",
  description: "Cuts, burns, bruises, fractures, head injuries, eye injuries, choking, animal bites — action algorithms",

  questions: [
    {
      id: "injury_type",
      text: "What type of injury?",
      type: "single",
      options: [
        { id: "cut", label: "Cut / wound / bleeding", tags: ["cut", "bleeding"] },
        { id: "burn", label: "Burn (boiling water, fire, chemicals, electricity)", tags: ["burn"] },
        { id: "bruise", label: "Bruise / contusion / sprain", tags: ["bruise", "sprain"] },
        { id: "fracture", label: "Fracture / suspected fracture", tags: ["fracture"] },
        { id: "head", label: "Head injury / concussion", tags: ["head", "concussion"] },
        { id: "eye", label: "Eye injury (chemicals, foreign body, blow)", tags: ["eye"] },
        { id: "choking", label: "Choking / suffocation", tags: ["choking"] },
        { id: "bite", label: "Animal / insect bite", tags: ["bite"] },
        { id: "tooth", label: "Knocked out / broken tooth", tags: ["tooth"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is the injury?",
      type: "single",
      options: [
        { id: "minor", label: "Minor scratch, bruise, abrasion (superficial)", tags: ["minor"] },
        { id: "moderate", label: "Deep wound, severe burn, severe swelling", tags: ["moderate"] },
        { id: "severe", label: "Severe bleeding, fracture, loss of consciousness, seizures", tags: ["severe"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "infant", label: "Infant (0–1 year)", tags: ["infant"] },
        { id: "toddler", label: "1–3 years", tags: ["toddler"] },
        { id: "child", label: "3–7 years", tags: ["child"] },
        { id: "school", label: "7+ years", tags: ["school"] }
      ]
    },
    {
      id: "bleeding_type",
      text: "If bleeding — what type?",
      condition: { injury_type: ["cut"] },
      options: [
        { id: "capillary", label: "Capillary (small drops, oozing)", tags: ["capillary"] },
        { id: "venous", label: "Venous (dark blood, flows steadily)", tags: ["venous"] },
        { id: "arterial", label: "Arterial (bright red, spurting like a fountain)", tags: ["arterial"] }
      ]
    },
    {
      id: "burn_cause",
      text: "What caused the burn?",
      condition: { injury_type: ["burn"] },
      options: [
        { id: "hot_water", label: "Boiling water / hot steam", tags: ["thermal"] },
        { id: "flame", label: "Fire / hot object", tags: ["thermal"] },
        { id: "chemical", label: "Chemical substance (acid, alkali)", tags: ["chemical"] },
        { id: "electric", label: "Electric current (outlet, wire)", tags: ["electric"] }
      ]
    },
    {
      id: "burn_area",
      text: "Where is the burn? (choose the main area)",
      condition: { injury_type: ["burn"] },
      options: [
        { id: "face", label: "Face / neck", tags: ["face"] },
        { id: "hands", label: "Hands / wrists", tags: ["hands"] },
        { id: "feet", label: "Legs / feet", tags: ["feet"] },
        { id: "torso", label: "Torso / back", tags: ["torso"] },
        { id: "genitals", label: "Groin / genitals", tags: ["genitals"] }
      ]
    },
    {
      id: "fracture_location",
      text: "Where is the suspected fracture?",
      condition: { injury_type: ["fracture"] },
      options: [
        { id: "arm", label: "Arm (shoulder, forearm, wrist)", tags: ["arm"] },
        { id: "leg", label: "Leg (thigh, shin, foot)", tags: ["leg"] },
        { id: "collarbone", label: "Collarbone", tags: ["collarbone"] },
        { id: "ribs", label: "Ribs", tags: ["ribs"] },
        { id: "spine", label: "Spine", tags: ["spine"] },
        { id: "skull", label: "Skull", tags: ["skull"] }
      ]
    },
    {
      id: "head_consciousness",
      text: "Was there any loss of consciousness after the head injury?",
      condition: { injury_type: ["head"] },
      options: [
        { id: "no_loss", label: "No, didn't lose consciousness", tags: ["conscious"] },
        { id: "brief_loss", label: "Yes, for a few seconds", tags: ["brief_loss"] },
        { id: "prolonged_loss", label: "Yes, for more than 1 minute", tags: ["prolonged_loss"] }
      ]
    },
    {
      id: "bite_animal",
      text: "What bit the child?",
      condition: { injury_type: ["bite"] },
      options: [
        { id: "dog", label: "Dog (domestic or stray)", tags: ["dog"] },
        { id: "cat", label: "Cat", tags: ["cat"] },
        { id: "wild", label: "Wild animal (fox, squirrel, raccoon)", tags: ["wild"] },
        { id: "insect", label: "Insect (bee, wasp, tick)", tags: ["insect"] }
      ]
    },
    {
      id: "tetanus",
      text: "When was the last tetanus vaccination (DPT / Tdap)?",
      type: "single",
      options: [
        { id: "within_5y", label: "Less than 5 years ago", tags: ["protected"] },
        { id: "over_5y", label: "More than 5 years ago", tags: ["need_booster"] },
        { id: "unknown", label: "I don't know / not vaccinated", tags: ["unknown"] }
      ]
    },
    {
      id: "bleeding_control_done",
      text: "Were you able to stop the bleeding on your own?",
      condition: { injury_type: ["cut"], severity: ["moderate", "severe"] },
      options: [
        { id: "stopped", label: "Yes, the bleeding stopped", tags: ["stopped"] },
        { id: "not_stopped", label: "No, bleeding continues", tags: ["not_stopped"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Capillary bleeding (minor)
    // ========================================
    {
      id: "capillary_bleeding",
      title: "🩹 Capillary bleeding — treating scratches and abrasions",
      description: "Superficial wounds usually stop bleeding on their own with proper care.",
      conditions: { injury_type: ["cut"], severity: ["minor"], bleeding_type: ["capillary"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Stop bleeding and prevent infection",
      tags: ["capillary", "first_aid", "wound"],
      steps: [
        "Wash the wound with running water and soap (baby soap is fine). Rinse away dirt and bacteria.",
        "Treat with hydrogen peroxide or chlorhexidine (not iodine inside the wound!).",
        "Pat dry with a sterile pad, apply antibiotic ointment (e.g., bacitracin) if needed.",
        "Apply a band-aid or sterile dressing.",
        "If needed, get a tetanus booster if it's been >5 years (see vaccination question).",
        "Monitor for signs of infection for 2–3 days: redness, pain, pus, fever."
      ],
      warnings: [
        "Do not use alcohol, iodine, or brilliant green for deep wounds — they irritate and slow healing.",
        "Do not pick at the scab — it protects against infection.",
        "If the wound is contaminated with soil or rust — there is a tetanus risk, see a doctor."
      ]
    },
    // ========================================
    // 2. Venous or arterial bleeding
    // ========================================
    {
      id: "venous_arterial_bleeding",
      title: "🩸 Venous / arterial bleeding — emergency stop",
      description: "Heavy bleeding requires immediate control before emergency services arrive.",
      conditions: { injury_type: ["cut"], severity: ["moderate", "severe"], bleeding_type: ["venous", "arterial"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Stop bleeding and save life",
      tags: ["bleeding", "emergency", "tourniquet"],
      steps: [
        "Put on gloves or use a clean cloth/bag to protect yourself from infection.",
        "For venous bleeding: apply a pressure dressing (clean cloth, bandage) and press firmly for 10–15 minutes. Do not lift the dressing to check — this disrupts the clot.",
        "For arterial bleeding: immediately apply a tourniquet above the wound (5–10 cm from the edge). Write down the time of application.",
        "If no tourniquet — use a belt, scarf, or strip of cloth. Place padding underneath to protect the skin.",
        "Do not leave the tourniquet on for more than 1.5–2 hours in summer, 1 hour in winter — risk of necrosis.",
        "If tourniquet is ineffective — press the artery with a finger above the bleeding site (pressure points: brachial, femoral).",
        "Call emergency services (911/112) — report severe bleeding and tourniquet application time.",
        "If the wound is on the torso (where a tourniquet can't be applied) — pack the wound with sterile gauze, press firmly until help arrives."
      ],
      warnings: [
        "Never remove a tourniquet yourself — it can cause sudden massive bleeding and death. Leave it to medical professionals.",
        "Do not reposition protruding organs in penetrating abdominal wounds — cover with sterile cloth.",
        "For nosebleed (unrelated to injury) — lean head forward, pinch the nostrils for 5–10 minutes. Do not tilt head back — blood flows down the throat."
      ]
    },
    // ========================================
    // 3. Thermal burn (boiling water, steam, flame) — no chemicals
    // ========================================
    {
      id: "thermal_burn",
      title: "🔥 Thermal burn — first aid algorithm",
      description: "Burns from boiling water, fire, hot objects. Quick cooling is key.",
      conditions: { injury_type: ["burn"], burn_cause: ["hot_water", "flame"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "15–30 minutes",
      yield_estimate: "Reduce burn depth and relieve pain",
      tags: ["burn", "thermal", "first_aid"],
      steps: [
        "Stop the burning immediately: remove the source, extinguish flames, remove clothing soaked in hot water (only if not stuck to the skin).",
        "Cool the burn with running water (15–25°C / 59–77°F) for 15–20 minutes. Do not use ice, snow, or ice water — this worsens tissue damage.",
        "Remove rings, bracelets, watches from the burned limb before swelling develops.",
        "DO NOT pop blisters, DO NOT remove stuck clothing — cut around it.",
        "Cover the burn with a sterile pad or clean cloth, or plastic wrap (protects against infection).",
        "For burns to the face, eyes, hands, genitals, or if the area > 10% of body (child's palm = 1%) — call emergency services immediately.",
        "For pain relief — give paracetamol or ibuprofen in the age-appropriate dose.",
        "Visit a trauma center or burn unit to assess burn depth."
      ],
      warnings: [
        "Never apply oil, sour cream, or toothpaste to a burn — they trap heat and worsen the injury.",
        "Do not use ice — it causes frostbite and vasoconstriction.",
        "For burns to the airway (inhaling smoke, steam) — call emergency services immediately (possible laryngeal edema)."
      ]
    },
    // ========================================
    // 4. Chemical burn
    // ========================================
    {
      id: "chemical_burn",
      title: "🧪 Chemical burn — neutralization and rinsing",
      description: "Burns from acid, alkali, household chemicals. Abundant water rinsing is key.",
      conditions: { injury_type: ["burn"], burn_cause: ["chemical"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "20–30 minutes",
      yield_estimate: "Remove chemical and minimize damage",
      tags: ["burn", "chemical", "emergency"],
      steps: [
        "Immediately remove clothing soaked with the chemical (cut it off, don't pull over the head).",
        "Rinse the affected area with running water for at least 20 minutes (30–40 minutes for alkalis).",
        "Water should be at room temperature, not hot. Stream should be gentle to avoid splashing.",
        "For acid burns — can rinse with soapy water (alkaline solution) for neutralization, but water alone is sufficient.",
        "For alkali burns — can rinse with 2% acetic acid or citric acid solution, but only after abundant water rinsing.",
        "If chemical gets in the eyes — rinse for 15–20 minutes, keeping eyelids open, from nose to temple. See an ophthalmologist immediately.",
        "Do not use neutralizers if you're not sure of the substance — the reaction may cause additional thermal damage.",
        "After rinsing, cover with clean cloth and call emergency services or go to the trauma center."
      ],
      warnings: [
        "Never use acid to neutralize alkali and vice versa — the reaction is dangerous.",
        "For dry chemicals (e.g., quicklime) — first brush off the dry substance, then rinse with water. Water reaction releases heat.",
        "For chemical burns to the mouth/esophagus (swallowed chemical) — do not induce vomiting, do not give fluids before examination. Go to hospital immediately."
      ]
    },
    // ========================================
    // 5. Electrical burn
    // ========================================
    {
      id: "electrical_burn",
      title: "⚡ Electrical injury — de-energize and resuscitate",
      description: "Electric shock from outlets, wires, during storms. External burn may be small, internal damage is serious.",
      conditions: { injury_type: ["burn"], burn_cause: ["electric"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Safe removal from current and resuscitation",
      tags: ["burn", "electrical", "emergency"],
      steps: [
        "DO NOT touch the child while they are still in contact with the current. Turn off the circuit breaker, unplug the device, or switch off the main power.",
        "If you can't cut the power — use a dry wooden stick, plastic pipe to push them away from the source. Do not use metal!",
        "Stand on a dry surface (rubber mat, dry wood, stack of newspapers).",
        "After freeing the child, assess: breathing, pulse, consciousness.",
        "If no pulse or breathing — start CPR (30 compressions, 2 breaths). Call emergency services.",
        "Treat entry and exit burn sites (electrical burns). Apply sterile dressings.",
        "ALWAYS hospitalize — even if the child appears well. There may be heart rhythm disturbances, internal injuries.",
        "Monitor urination — muscle damage may cause myoglobinuria (dark urine)."
      ],
      warnings: [
        "Do not approach the victim barefoot — current can travel through the ground (step voltage).",
        "Do not neglect medical evaluation — electrical injury can cause ventricular fibrillation hours later."
      ]
    },
    // ========================================
    // 6. Bruise / sprain (without fracture)
    // ========================================
    {
      id: "bruise_sprain",
      title: "🦵 Bruise, sprain, contusion — home treatment",
      description: "Falls, bumps into furniture — the most common childhood injuries. In most cases, cold and rest are enough.",
      conditions: { injury_type: ["bruise"], severity: ["minor", "moderate"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Reduce pain and swelling",
      tags: ["bruise", "sprain", "home_treatment"],
      steps: [
        "Apply cold (ice in a bag wrapped in a towel) for 15–20 minutes. Repeat every 2–3 hours on the first day.",
        "Elevate the injured limb (above heart level) to reduce swelling.",
        "For severe pain — give ibuprofen or paracetamol in the age-appropriate dose.",
        "On day two — warming ointments, compresses (warming improves blood flow), but only if there is no significant swelling.",
        "For sprains (ankle, knee) — apply an elastic bandage (not too tight to restrict circulation).",
        "Monitor: if pain doesn't improve within 24 hours, severe swelling appears, or hematoma grows — see a doctor (possible fracture).",
        "Rest for 1–2 days, then gradual activity."
      ],
      warnings: [
        "Do not apply heat to a fresh injury (first 48 hours) — it increases swelling.",
        "Do not use iodine mesh on open wounds.",
        "If the child cannot bear weight on the leg after a few hours — rule out fracture."
      ]
    },
    // ========================================
    // 7. Fracture — immobilization and emergency call
    // ========================================
    {
      id: "fracture_first_aid",
      title: "🦴 Fracture — immobilization until emergency services arrive",
      description: "Fracture requires careful immobilization and immediate medical attention.",
      conditions: { injury_type: ["fracture"], severity: ["moderate", "severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Immobilization and minimizing displacement",
      tags: ["fracture", "immobilization", "emergency"],
      steps: [
        "Signs of fracture: severe pain on movement/pressure, swelling, deformity, crepitus, inability to bear weight.",
        "Do not try to realign the bone and do not pull the limb — this can damage blood vessels and nerves.",
        "For open fracture (bone protruding) — cover with sterile cloth, do not push back, do not rinse.",
        "Immobilize the limb in the position you found it. Use improvised materials: boards, cardboard, rulers, umbrellas.",
        "Immobilize two joints — above and below the fracture.",
        "For spinal fracture — do not move the victim. Call emergency services. If necessary — place on a rigid board, secure the head with rolled towels.",
        "Apply cold (ice in cloth) for 15–20 minutes to reduce swelling.",
        "Do not give food or water before medical examination (in case of surgery under anesthesia)."
      ],
      warnings: [
        "Never give painkillers before surgical examination, especially if skull fracture or internal injuries are suspected.",
        "For femoral fractures — there is high blood loss, call emergency services urgently.",
        "In children, 'greenstick' fractures (incomplete) also require immobilization."
      ]
    },
    // ========================================
    // 8. Head injury — without loss of consciousness
    // ========================================
    {
      id: "head_injury_no_loss",
      title: "🧠 Head injury without loss of consciousness — home observation",
      description: "Most childhood head injuries resolve without consequences. But observation is important.",
      conditions: { injury_type: ["head"], head_consciousness: ["no_loss"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "24 hours",
      yield_estimate: "Rule out concussion and intracranial complications",
      tags: ["head", "concussion", "observation"],
      steps: [
        "Calm the child, apply cold (ice wrapped in cloth) to the bruise for 15 minutes.",
        "Observe for 24 hours: appetite, drowsiness, behavior, vomiting.",
        "If vomiting, headache, double vision, coordination problems, irritability, or drowsiness appear — see a doctor immediately.",
        "Do not give painkillers or sleeping pills without prescription.",
        "Wake the child every 2–3 hours at night and check their response (can they answer questions, open eyes?).",
        "If there is a wound — treat with antiseptic, for heavy bleeding — apply pressure dressing.",
        "If the child is well for 24 hours — return to normal activity in 2–3 days."
      ],
      warnings: [
        "If there was even a brief loss of consciousness — see a doctor.",
        "Blood or clear fluid from ear/nose after a head injury — call emergency services immediately (skull base fracture).",
        "In children under 2 years, vomiting after head injury always requires evaluation."
      ]
    },
    // ========================================
    // 9. Head injury — with loss of consciousness
    // ========================================
    {
      id: "head_injury_loss",
      title: "🚨 Head injury with loss of consciousness — emergency hospitalization",
      description: "Even brief loss of consciousness is an indication for urgent evaluation.",
      conditions: { injury_type: ["head"], head_consciousness: ["brief_loss", "prolonged_loss"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Diagnosis and prevention of intracranial hemorrhage",
      tags: ["head", "concussion", "emergency"],
      steps: [
        "Call emergency services (911/112). Report the injury and loss of consciousness.",
        "Place the child on their side (recovery position) to prevent choking on vomit.",
        "Do not give food or water before medical examination.",
        "For seizures — place on side, do not put anything in the mouth.",
        "For open head wound — cover with sterile cloth, do not press if there is indentation.",
        "Do not give painkillers before examination.",
        "Hospitalization is mandatory for CT/MRI and neurosurgical observation."
      ],
      warnings: [
        "Even brief loss of consciousness can be a sign of concussion or brain contusion.",
        "Intracranial hemorrhage can manifest hours later — hospital observation is essential."
      ]
    },
    // ========================================
    // 10. Eye injury (foreign body, chemicals, blow)
    // ========================================
    {
      id: "eye_injury",
      title: "👁️ Eye injury — action algorithm",
      description: "The eye is very vulnerable, incorrect actions can lead to vision loss.",
      conditions: { injury_type: ["eye"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Vision preservation",
      tags: ["eye", "emergency", "vision"],
      steps: [
        "For chemical exposure: rinse the eye with water for 15–20 minutes, holding the eyelid open. Stream — from nose to temple.",
        "For foreign body (sand, dust): do not rub the eye, ask to blink. Rinse with saline or clean water.",
        "If the particle doesn't wash out — carefully try to remove it with a moist cotton swab after everting the eyelid (only if you can see the particle).",
        "For a blow to the eye — apply cold for 10–15 minutes. Do not press on the eyeball.",
        "For penetrating injury (object protruding) — do not remove, cover with a cup/glass, stabilize, call emergency services.",
        "Under no circumstances let the child rub the eye.",
        "After any eye injury — mandatory ophthalmologist examination on the same day."
      ],
      warnings: [
        "Do not rub the eye — this scratches the cornea.",
        "Do not use oils, tea, milk for rinsing — only water or saline.",
        "Penetrating injuries are emergencies, do not try to remove the object yourself."
      ]
    },
    // ========================================
    // 11. Choking — Heimlich maneuver
    // ========================================
    {
      id: "choking_heimlich",
      title: "😮 Choking — Heimlich maneuver for children",
      description: "Nuts, small toys, grapes are common causes of choking in children.",
      conditions: { injury_type: ["choking"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Remove foreign body",
      tags: ["choking", "heimlich", "emergency"],
      steps: [
        "If the child is coughing strongly — encourage coughing, do NOT hit the back, do NOT do the Heimlich. Coughing is the best way to expel the object.",
        "If coughing is weak, the child cannot speak, breathe, skin turns blue — start the Heimlich maneuver immediately.",
        "Infant (<1 year): place face down on your forearm, head lower than body. 5 back blows between the shoulder blades with the heel of your hand. Turn over — 5 chest thrusts with two fingers (below the nipples). Repeat until object is expelled.",
        "Child 1–8 years: stand behind, wrap arms around above the navel, fist inward. 5 sharp upward-inward thrusts. Repeat until object is expelled or loss of consciousness.",
        "If the child loses consciousness — place on back, start CPR. 30 chest compressions (1/3 depth), 2 rescue breaths. Check the mouth before breaths — object may be visible.",
        "If you see the object in the mouth — remove with a finger (only if visible, do not blindly sweep — it pushes it deeper).",
        "After successful removal — mandatory medical evaluation. There may be injuries to the esophagus or larynx.",
        "Prevention: do not give children under 3 years nuts, grapes, candies, popcorn, small toys, coins, balloons."
      ],
      warnings: [
        "Do NOT hit the back of a standing/sitting child during choking — it can lodge the object deeper.",
        "Do NOT perform the Heimlich if the child is coughing effectively — coughing is more powerful than any maneuver. Move to Heimlich only with weak/absent cough.",
        "Do NOT blindly sweep the mouth with a finger — it pushes the object deeper. Only if you SEE the object.",
        "Balloons are the most dangerous — they stick to the throat walls and cannot be expelled by coughing. The Heimlich is often ineffective — call emergency services immediately."
      ]
    },
    // ========================================
    // 12. Animal / insect bite
    // ========================================
    {
      id: "bite_wound",
      title: "🐕 Animal bite — wound care and rabies prevention",
      description: "Dog, cat, wild animal bites require immediate care and monitoring.",
      conditions: { injury_type: ["bite"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Prevent infection and rabies",
      tags: ["bite", "rabies", "infection"],
      steps: [
        "Wash the wound with soap and water for 5–10 minutes (this reduces rabies risk).",
        "Treat the wound with antiseptic (hydrogen peroxide, chlorhexidine).",
        "For dog/cat bites — apply a sterile dressing. Do not suture the wound (high infection risk).",
        "Go to the trauma center to discuss tetanus and rabies vaccination.",
        "For wild animal bites (fox, squirrel, bat) — rabies risk is high, emergency vaccination.",
        "For bee/wasp stings — remove the stinger (with a fingernail, not tweezers — to avoid squeezing venom), apply cold, give antihistamine.",
        "For tick bite — remove with tweezers, treat the wound, send the tick to a lab for analysis (within 2–3 days).",
        "Monitor the wound: redness, swelling, pus — sign of infection, see a doctor."
      ],
      warnings: [
        "Cat bites are often infected with pasteurella — require antibiotics.",
        "Rabies is 100% fatal — do not delay vaccination!",
        "For bites to the face or hand — risk is higher, seek immediate care."
      ]
    },
    // ========================================
    // 13. Knocked out / broken tooth
    // ========================================
    {
      id: "tooth_injury",
      title: "🦷 Dental trauma — what to do",
      description: "Falls often lead to knocked out or broken teeth. Save the tooth if possible.",
      conditions: { injury_type: ["tooth"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "5–15 minutes",
      yield_estimate: "Tooth preservation",
      tags: ["tooth", "dental", "emergency"],
      steps: [
        "For a knocked out permanent tooth: pick it up by the crown (not the root!), rinse with water or milk, do not rub.",
        "Insert the tooth back into the socket (if possible) or place in milk/saliva (in the mouth between the cheek). Do not store in water.",
        "See a dentist immediately (within 30–60 minutes) — there is a chance of reimplantation.",
        "For baby teeth — do not try to reinsert, see a dentist for monitoring.",
        "For broken tooth — save the fragment, apply cold to the lip to reduce swelling.",
        "For bleeding — press a clean cloth to the socket for 10 minutes.",
        "Do not give hard food, do not touch with the tongue, do not rinse the mouth if there is a wound."
      ],
      warnings: [
        "Do not store the tooth in water — it destroys periodontal cells.",
        "If the tooth is inserted incorrectly — there is a risk of damage to adjacent teeth.",
        "Baby teeth do not reimplant — do not try to save them."
      ]
    }
  ]
};

// ===== EXPORT =====
window.injuryDataEn = injuryDataEn;
