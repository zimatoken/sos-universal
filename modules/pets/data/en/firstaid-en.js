// === MODULE: PETS — FIRST AID (EN) ===
const firstaidDataEn = {
  category: "firstaid",
  title: "🩹 First Aid",
  description: "Wounds, bleeding, burns, fractures, choking — what to do before the vet",

  questions: [
    {
      id: "injury_type",
      text: "What happened?",
      type: "single",
      options: [
        { id: "bleeding", label: "🩸 Bleeding / wound / cut", tags: ["bleeding"] },
        { id: "burn", label: "🔥 Burn (boiling water, fire, chemical)", tags: ["burn"] },
        { id: "fracture", label: "🦴 Fracture / suspected fracture", tags: ["fracture"] },
        { id: "choking", label: "😮 Choking / suffocating", tags: ["choking"] },
        { id: "eye", label: "👁️ Eye injury / foreign body", tags: ["eye"] },
        { id: "bite_wound", label: "🐕 Bite from another animal / human", tags: ["bite_wound"] }
      ]
    },
    {
      id: "pet_type",
      text: "What animal?",
      type: "single",
      options: [
        { id: "dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "small", label: "🐰 Rabbit / hamster / guinea pig / bird", tags: ["small"] },
        { id: "other", label: "🦎 Other (turtle, snake, iguana)", tags: ["other"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is it?",
      type: "single",
      options: [
        { id: "minor", label: "🩹 Small cut / scratch / mild burn", tags: ["minor"] },
        { id: "moderate", label: "🩸 Deep wound / severe burn / swelling", tags: ["moderate"] },
        { id: "severe", label: "🚨 Heavy bleeding / fracture / unconsciousness", tags: ["severe"] }
      ]
    }
  ],

  solutions: [
    {
      id: "pet_bleeding",
      title: "🩸 Bleeding in an animal — stopping it",
      description: "Even minor bleeding in small pets is dangerous. Act quickly and calmly.",
      conditions: { injury_type: ["bleeding"], severity: ["moderate", "severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Stopping the bleeding",
      tags: ["bleeding", "wound", "first_aid"],
      steps: [
        "Stay calm. The animal senses your anxiety and may panic. Speak quietly, move smoothly",
        "Put on gloves (if available). Rinse the wound with saline or clean water. Gently remove visible debris (sand, fur)",
        "For capillary bleeding (drops): treat with hydrogen peroxide or chlorhexidine, apply antibacterial ointment (Levomekol, Fucidin), apply sterile bandage",
        "For venous / arterial bleeding: apply sterile gauze or clean cloth, press for 10–15 minutes. Do not peek under the cloth — you will dislodge the clot",
        "If blood does not stop — apply tourniquet above the wound (3–5 cm). Record the time. Do not keep tourniquet on more than 20–30 minutes for dogs/cats, 10–15 for small animals",
        "For small animals (hamsters, birds): even a drop of blood is critical. Go to the vet immediately. Use a cotton swab with peroxide, press very gently",
        "After stopping blood: treat edges with iodine, apply bandage. Check rabies vaccination status (especially for bites)",
        "Go to the vet immediately for: arterial bleeding, wound > 2 cm, visible organs, shock (pale, cold paws, rapid breathing)"
      ],
      warnings: [
        "DO NOT use alcohol, cologne, brilliant green INSIDE the wound — it causes severe pain and damages tissue. Only on edges",
        "DO NOT remove a stuck object (glass, nail) — it will worsen bleeding. Stabilize with bandage, transport to vet",
        "DO NOT give human painkillers (Nurofen, Paracetamol) without vet consultation — animal dosage differs, some drugs are toxic",
        "Cats hide pain and bleeding. If a cat hides, refuses food, is lethargic — check the entire body for wounds"
      ]
    },
    {
      id: "pet_burn",
      title: "🔥 Burn in an animal — first aid",
      description: "Burns from boiling water, heater, chemicals. Fur masks the severity of damage.",
      conditions: { injury_type: ["burn"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Reducing burn depth",
      tags: ["burn", "first_aid", "emergency"],
      steps: [
        "Remove the source of the burn. If fur is on fire — cover with dense fabric (extinguish by oxygen deprivation), DO NOT beat the fur — it will spread the fire",
        "Cool the burn with running water for 15–20 minutes. Temperature 15–25°C. NO ice, NO snow — this causes frostbite on top of the burn",
        "Carefully trim fur around the burn (not on the burn itself!). Fur sticks to skin — do not tear off. Use blunt-tip scissors",
        "DO NOT puncture blisters. DO NOT apply oil, sour cream, toothpaste, iodine to the burn — it traps heat and prevents the vet from assessing depth",
        "Cover the burn with sterile gauze or clean cloth. You can use plastic wrap — it protects from infection and reduces pain",
        "For chemical burn: rinse with water for 20–30 minutes. If you know the chemical — you can neutralize (acid → soda, alkali → vinegar). Better — only water and vet",
        "Give water (if conscious and can drink). Burns cause dehydration. Do not force — a few sips at a time",
        "Emergency vet care for: burn > 5% of body, burn of face/paws/genitals, chemical/electrical burn, shock"
      ],
      warnings: [
        "DO NOT apply oil, sour cream, toothpaste to a burn — it traps heat, worsens the burn, interferes with diagnosis",
        "DO NOT use ice — it causes tissue frostbite on top of the burn. Only cool running water",
        "Fur masks burn depth. What looks like a 'small paw burn' may be deep through the entire skin thickness",
        "Electrical burns are often internal. Even if externally 'minor' — always see a vet. De-energize before helping"
      ]
    },
    {
      id: "pet_fracture",
      title: "🦴 Fracture in an animal — immobilization",
      description: "The animal limps, won't put weight on the paw, cries when touched. Fracture requires immobilization.",
      conditions: { injury_type: ["fracture"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Immobilization until vet",
      tags: ["fracture", "first_aid", "emergency"],
      steps: [
        "Signs: won't put weight on paw, limps, cries/hisses when touched, swelling, deformity, bone sticking out (open fracture). Do not try to 'check' — it hurts",
        "DO NOT try to set the bone, DO NOT pull the limb. This will worsen nerve and vessel damage. Immobilize in the position you found it",
        "For a dog: place on a hard surface (board, shield, cardboard). Secure with tape or bandage so it doesn't move during transport",
        "For a cat: use a carrier or box with holes. Cats bite and scratch when stressed — do not catch with bare hands. Cover with towel, carefully place in container",
        "Limb immobilization: secure with board, ruler, cardboard, umbrella. Immobilize TWO joints — above and below the fracture. Bandage gently",
        "For open fracture (bone sticking out): cover with sterile gauze, DO NOT reposition, DO NOT rinse. Transport carefully, minimizing shaking",
        "Relieve pain: apply cold (ice pack in cloth) for 10–15 minutes. Not on skin — frostbite. Do not press on fracture",
        "Go to the vet immediately. Fractures require X-ray, pain relief, possibly surgery. Delay = complications"
      ],
      warnings: [
        "DO NOT give human painkillers (Ibuprofen, Paracetamol, Aspirin) — they are toxic to animals. Only as prescribed by vet",
        "DO NOT feed or water before going to the vet — if anesthesia/surgery is needed, stomach must be empty",
        "Cats with fractures may seem 'normal' but hide and won't eat. Any suspicion of fracture = vet",
        "Small animals (hamsters, birds) heal quickly but require precise fixation. Improperly healed fracture = disability"
      ]
    },
    {
      id: "pet_choking",
      title: "😮 Animal choking — removing foreign body",
      description: "Bone, toy, ball, piece of food stuck in throat. Animal breathes with difficulty, coughs, drools.",
      conditions: { injury_type: ["choking"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Removing the object",
      tags: ["choking", "first_aid", "emergency"],
      steps: [
        "If the animal is coughing effectively — encourage coughing. DO NOT hit the back, DO NOT reach into the mouth. Coughing is the best way to expel the object",
        "If coughing is weak, animal cannot breathe, drooling, tongue is blue — immediately begin assistance",
        "Large dog: open mouth, look — is the object visible? If visible — remove with fingers or tweezers. DO NOT poke blindly — you will push it deeper",
        "Small dog / cat: grab by hind legs, hang head down (like a chick). Tap between shoulder blades. Check mouth — did the object fly out?",
        "Modified Heimlich maneuver for dogs: stand behind, wrap around abdomen above navel, fist inward. Sharp thrusts upward-inward 5 times. Check mouth",
        "If animal lost consciousness: place on side, open mouth, pull out tongue, check breathing. If no breathing — begin artificial respiration (nose + mouth) and heart massage",
        "After removal — definitely go to the vet. There may be larynx or esophagus damage. Swelling may develop within hours",
        "Prevention: do not give small bones (chicken, rabbit), toys smaller than the mouth, lollipops, nuts. Remove small objects from the floor"
      ],
      warnings: [
        "DO NOT hit the back of a standing animal — this may push the object deeper into the airway",
        "DO NOT poke blindly with fingers in the mouth — this pushes the object deeper, injures the larynx",
        "DO NOT perform Heimlich if the animal is coughing effectively — coughing is stronger than any maneuver",
        "Balls, socks — common choking hazards for dogs. Cats often choke on toy mice, threads"
      ]
    },
    {
      id: "pet_eye_injury",
      title: "👁️ Eye injury in an animal",
      description: "Eye is red, closed, tearing, animal rubs with paw. Foreign body, scratch, impact.",
      conditions: { injury_type: ["eye"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Preserving vision",
      tags: ["eye", "first_aid", "emergency"],
      steps: [
        "Do not let the animal rub the eye with its paw — this worsens the injury. Put on a protective collar (cardboard if no special one) or bandage the paw",
        "For chemical contact (shampoo, detergent): rinse the eye abundantly with running water or saline for 10–15 minutes. Hold eyelid open. Emergency vet care!",
        "For foreign body (sand, grass, eyelash): try rinsing with saline or clean water. Do not rub! Blinking and tears often wash out the particle",
        "If the particle does not wash out — DO NOT try to remove with a cotton swab or fingers. This scratches the cornea. The vet has special tools",
        "For impact / bruise: apply cold (ice pack in cloth) for 5–10 minutes. Do not press on the eyeball. The animal must be calm",
        "For penetrating wound (stick, nail, claw): DO NOT remove the object! Stabilize with bandage or cup so it doesn't move. Emergency care immediately",
        "Cover the eye with sterile gauze or clean cloth. Do not press. Do not apply eye drops without doctor's prescription — some worsen the injury",
        "After any eye injury — see a veterinary ophthalmologist within 2–4 hours. Animal corneas heal quickly, but infection also develops quickly"
      ],
      warnings: [
        "DO NOT apply human eye drops (Visine, Tobrex) without vet consultation — dosage and composition may be toxic",
        "DO NOT use cotton swabs on the cornea — fibers remain and cause irritation. Only for rinsing eyelids",
        "DO NOT give human painkillers — many are toxic to animals (paracetamol is fatal for cats)",
        "Eye injuries in cats often accompany hidden damage (glaucoma, retinal detachment). Even 'minor' injury requires examination"
      ]
    },
    {
      id: "animal_bite_wound",
      title: "🐕 Bite from another animal / human",
      description: "Dog bit dog, cat scratched, human bite. Risk of infection, rabies, abscess.",
      conditions: { injury_type: ["bite_wound"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Preventing infection",
      tags: ["bite", "infection", "rabies"],
      steps: [
        "Drive the aggressor away from the victim. Be careful — injured animals may bite from pain and fear. Use muzzle, blanket, gloves",
        "Rinse the wound abundantly with water and soap for 10–15 minutes. Soap destroys bacteria. For cat scratches — rinse especially thoroughly (high infection risk)",
        "Treat with hydrogen peroxide or chlorhexidine on wound edges. Not deep inside — only edges. Apply antibiotic (Levomekol)",
        "Cover with sterile gauze, apply bandage. Do not suture a bite wound yourself — this traps infection inside",
        "If bitten by unknown / stray dog / cat — go to the vet immediately for rabies risk assessment. Vaccination: 0, 3, 7, 14, 28, 90 days",
        "If your dog / cat bit another animal / human — isolate the pet for 10 days for observation. Inform the victim's owner about your pet's condition",
        "If a human was bitten — the person needs medical care: rinsing, antibiotics, tetanus shot. Tell the doctor it was a pet bite",
        "Monitor the wound for 3–5 days: redness, swelling, pus, odor — signs of infection. Cat abscess develops 2–5 days after a bite"
      ],
      warnings: [
        "DO NOT suture a bite wound yourself — infection (especially pasteurellosis) multiplies in a closed wound. The wound must remain open",
        "DO NOT apply iodine, brilliant green, alcohol INSIDE the wound — this damages tissue and intensifies pain. Only on edges",
        "Cat scratches and bites become infected in 80% of cases. Even a 'minor' scratch can lead to abscess or sepsis",
        "Rabies is 100% fatal. If there is the slightest suspicion — vaccinate immediately. Do not postpone 'for later'"
      ]
    }
  ]
};

window.firstaidDataEn = firstaidDataEn;
