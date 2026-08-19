// modules/pets/data/en/firstaid-en.js
// === MODULE: PETS — FIRST AID ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "pets",
    category: "firstaid",
    version: "1.0.0",
    lang: "en",
    title: "🩹 First Aid",
    description: "Wounds, bleeding, burns, fractures, choking — what to do before seeing a vet",
    icon: "🩹",
    color: "#9333ea"
  },

  questions: [
    {
      id: "injury_type",
      type: "single",
      text: "What happened?",
      options: [
        { id: "bleeding", label: "🩸 Bleeding / wound / cut", tags: ["bleeding"] },
        { id: "burn", label: "🔥 Burn (boiling water, fire, chemicals)", tags: ["burn"] },
        { id: "fracture", label: "🦴 Fracture / suspected fracture", tags: ["fracture"] },
        { id: "choking", label: "😮 Choking / difficulty breathing", tags: ["choking"] },
        { id: "eye", label: "👁️ Eye injury / foreign body", tags: ["eye"] },
        { id: "bite_wound", label: "🐕 Bite from another animal / human", tags: ["bite_wound"] }
      ]
    },
    {
      id: "pet_type",
      type: "single",
      text: "What kind of pet?",
      conditions: { injury_type: ["bleeding", "burn", "fracture", "choking", "eye", "bite_wound"] },
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_small", label: "🐰 Rabbit / hamster / guinea pig / bird", tags: ["small"] },
        { id: "pet_other", label: "🦎 Other (turtle, snake, iguana)", tags: ["other"] }
      ]
    },
    {
      id: "severity",
      type: "single",
      text: "How serious is it?",
      conditions: { injury_type: ["bleeding", "burn", "fracture", "choking", "eye", "bite_wound"] },
      options: [
        { id: "severity_minor", label: "✅ Small cut / scrape / mild burn", tags: ["minor"] },
        { id: "severity_moderate", label: "⚠️ Deep wound / severe burn / swelling", tags: ["moderate"] },
        { id: "severity_severe", label: "🚨 Heavy bleeding / fracture / unconsciousness", tags: ["severe"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. BLEEDING (moderate/severe)
    // ============================================================
    {
      id: "pet_bleeding_severe",
      title: "🩸 Stopping bleeding in pets",
      description: "Even minor bleeding in small pets is dangerous. Act quickly and calmly.",
      conditions: { injury_type: ["bleeding"], severity: ["severity_moderate", "severity_severe"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Bleeding stopped",
      tags: ["bleeding", "wound", "first_aid"],
      steps: [
        "Stay calm. The pet senses your anxiety and may panic. Speak softly, move smoothly",
        "Put on gloves (if available). Rinse the wound with saline or clean water. Gently remove visible debris (sand, fur)",
        "For capillary bleeding (drops): treat with hydrogen peroxide or chlorhexidine, apply antibacterial ointment (Levomekol, Fucidin), put on sterile bandage",
        "For venous/arterial bleeding: apply sterile gauze or clean cloth, press for 10–15 minutes. Don't lift to check — you'll break the clot",
        "If bleeding doesn't stop — tourniquet above the wound (3–5 cm). Note the time. Don't leave for more than 20–30 min for dogs/cats, 10–15 for small pets",
        "For small animals (hamsters, birds): even a drop of blood is critical. Vet immediately. Use a cotton swab with peroxide, press very gently",
        "After bleeding stops: treat edges with iodine, apply bandage. Check rabies vaccination status (especially for bites)",
        "Immediate vet for: arterial bleeding, wound > 2 cm, visible organs, shock (pale, cold paws, rapid breathing)"
      ],
      warnings: [
        "DON'T put alcohol, cologne, or iodine INSIDE the wound — causes severe pain and tissue damage. Only on the edges",
        "DON'T remove objects stuck in the wound (glass, nail) — increases bleeding. Stabilize with bandage, go to vet",
        "DON'T give human painkillers (Nurofen, Paracetamol) without vet consultation — dosage differs, some are toxic",
        "Cats hide pain and bleeding. If a cat hides, refuses food, lethargic — check the whole body for wounds"
      ]
    },
    // ============================================================
    // 2. BLEEDING (minor)
    // ============================================================
    {
      id: "pet_bleeding_minor",
      title: "🩸 Minor wound / scrape — home care",
      description: "Small cuts, scratches, scrapes — home treatment",
      conditions: { injury_type: ["bleeding"], severity: ["severity_minor"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Healing",
      tags: ["bleeding", "wound", "minor"],
      steps: [
        "Rinse the wound with water and soap or chlorhexidine",
        "Treat with hydrogen peroxide (once, don't overuse)",
        "Apply antibacterial ointment (Levomekol, Bepanten) in a thin layer",
        "If on the paw — protect with a bandage or sock (to prevent licking)",
        "Monitor for 2–3 days — redness, swelling, pus = see a vet"
      ],
      warnings: [
        "DON'T let them lick the wound — saliva contains bacteria",
        "DON'T use alcohol or iodine on open wounds"
      ]
    },
    // ============================================================
    // 3. BURN
    // ============================================================
    {
      id: "pet_burn",
      title: "🔥 Burn in pets — first aid",
      description: "Burns from boiling water, heaters, chemicals. Fur hides the extent of damage.",
      conditions: { injury_type: ["burn"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Reduced burn depth",
      tags: ["burn", "first_aid", "emergency"],
      steps: [
        "Remove the burn source. If fur is burning — cover with thick fabric (smother oxygen), DON'T beat the fur — spreads fire",
        "Cool the burn with running water for 15–20 minutes. Temperature 15–25°C. NOT ice, NOT snow — causes frostbite on top of burn",
        "Carefully trim fur around the burn (not on the burn itself!). Fur stuck to skin — don't pull. Use blunt-tip scissors",
        "DON'T pop blisters. DON'T apply oil, sour cream, toothpaste, iodine to the burn — holds heat and hinders diagnosis",
        "Cover with sterile gauze or clean cloth. Plastic wrap can be used — protects from infection and pain",
        "For chemical burns: rinse with water for 20–30 minutes. If you know the chemical — can neutralize (acid → baking soda, alkali → vinegar). Better — just water and vet",
        "Give water (if conscious and can drink). Burns cause dehydration. Don't force — a few sips at a time",
        "Emergency vet for: burn > 5% body, burn on face/paws/genitals, chemical/electrical burn, shock"
      ],
      warnings: [
        "DON'T apply oil, sour cream, toothpaste to burns — holds heat, worsens burn, hinders diagnosis",
        "DON'T use ice — causes frostbite on top of burn. Only cool running water",
        "Fur hides burn depth. What looks like a 'small paw burn' may be deep through the entire skin thickness",
        "Electrical burns are often internal. Even if external looks 'minor' — always see a vet. De-energize before helping"
      ]
    },
    // ============================================================
    // 4. FRACTURE
    // ============================================================
    {
      id: "pet_fracture",
      title: "🦴 Fracture in pets — immobilization",
      description: "Limping, won't put weight on a limb, cries when touched. Fractures require immobilization.",
      conditions: { injury_type: ["fracture"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Stabilization before vet",
      tags: ["fracture", "first_aid", "emergency"],
      steps: [
        "Signs: won't put weight on limb, limping, cries/hisses when touched, swelling, deformity, bone visible (open fracture). Don't try to 'check' — painful",
        "DON'T try to set the bone, DON'T pull the limb. This damages nerves and vessels. Immobilize in the position found",
        "For dogs: place on a hard surface (board, plank, cardboard). Secure with tape or bandage to prevent movement during transport",
        "For cats: use a carrier or box with holes. Cats in stress bite and scratch — don't handle bare-handed. Cover with towel, carefully transfer to container",
        "Limb immobilization: secure with a board, ruler, cardboard, umbrella. Immobilize TWO joints — above and below the fracture. Bandage gently",
        "For open fractures (bone protruding): cover with sterile gauze, DON'T push back in, DON'T rinse. Transport carefully, minimize jostling",
        "Relieve pain: apply cold (ice pack in cloth) for 10–15 minutes. Don't put on skin — frostbite. Don't press on the fracture",
        "Immediately to the vet. Fractures require X-rays, pain relief, possibly surgery. Delay = complications"
      ],
      warnings: [
        "DON'T give human painkillers (Ibuprofen, Paracetamol, Aspirin) — toxic to pets. Only as prescribed by a vet",
        "DON'T feed or give water before going to the vet — if surgery under anesthesia, stomach must be empty",
        "Cats with fractures may seem 'normal' but hide and not eat. Any suspicion of fracture = vet",
        "Small animals (hamsters, birds) heal quickly but require precise fixation. Improper healing = disability"
      ]
    },
    // ============================================================
    // 5. CHOKING
    // ============================================================
    {
      id: "pet_choking",
      title: "😮 Pet is choking — removing foreign object",
      description: "Bone, toy, ball, food stuck in throat. Heavy breathing, coughing, drooling.",
      conditions: { injury_type: ["choking"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Object removed",
      tags: ["choking", "first_aid", "emergency"],
      steps: [
        "If the pet is coughing effectively — encourage coughing. DON'T hit the back, DON'T reach into the mouth. Coughing is the best way to expel the object",
        "If coughing is weak, pet can't breathe, drooling, blue tongue — start help immediately",
        "Dog (large): open the mouth, check — is the object visible? If yes — remove with fingers or tweezers. DON'T probe blindly — pushes it deeper",
        "Dog (small) / cat: hold by hind legs, hang head down. Tap between shoulder blades. Check mouth — did object come out?",
        "Modified Heimlich maneuver for dogs: stand behind, wrap arms above navel, fist inward. Sharp upward-inward thrusts 5 times. Check mouth",
        "If pet loses consciousness: lay on side, open mouth, pull tongue out, check breathing. If no breathing — start artificial respiration and CPR",
        "After removal — must see a vet. There may be damage to larynx, esophagus. Swelling can develop hours later",
        "Prevention: don't give small bones (chicken, rabbit), toys smaller than the mouth, candies, nuts. Keep small objects off the floor"
      ],
      warnings: [
        "DON'T hit the back of a standing animal — can push object deeper into airways",
        "DON'T blindly probe the mouth with fingers — pushes object deeper, injures larynx",
        "DON'T do Heimlich if pet is coughing effectively — coughing is stronger than any maneuver",
        "Balls, marbles, socks are common choking hazards in dogs. Cats often choke on toy mice, strings"
      ]
    },
    // ============================================================
    // 6. EYE INJURY
    // ============================================================
    {
      id: "pet_eye_injury",
      title: "👁️ Eye injury in pets",
      description: "Eye red, closed, watering, pet rubs with paw. Foreign body, scratch, impact.",
      conditions: { injury_type: ["eye"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Preserving vision",
      tags: ["eye", "first_aid", "emergency"],
      steps: [
        "Don't let the pet rub the eye with a paw — worsens the injury. Use an E-collar (from cardboard if not available) or bandage the paw",
        "For chemical exposure (shampoo, detergent): flush eye with running water or saline for 10–15 minutes. Hold the eyelid open. Emergency vet!",
        "For foreign body (sand, grass, eyelash): try flushing with saline or clean water. Don't rub! Blinking and tears often wash out the particle",
        "If particle doesn't wash out — DON'T try to remove with cotton swab or fingers. This scratches the cornea. Vets have special tools",
        "For impact/bruise: apply cold (ice pack in cloth) for 5–10 minutes. Don't press on the eyeball. Keep the pet calm",
        "For penetrating wound (stick, nail, claw): DON'T remove the object! Stabilize with bandage or cup so it doesn't move. Emergency help immediately",
        "Cover the eye with sterile gauze or clean cloth. Don't press. Don't use eye drops without vet prescription — some worsen the injury",
        "After any eye injury — see a veterinary ophthalmologist within 2–4 hours. Corneas heal fast, but infections develop fast too"
      ],
      warnings: [
        "DON'T use human eye drops (Visine, Tobramycin) without vet consultation — dosage and composition may be toxic",
        "DON'T use cotton swabs on the cornea — fibers remain and cause irritation. Only for eyelid cleaning",
        "DON'T give human painkillers — many are toxic to pets (paracetamol is lethal to cats)",
        "Eye injury in cats often has hidden damage (glaucoma, retinal detachment). Even 'minor' injury needs examination"
      ]
    },
    // ============================================================
    // 7. BITE WOUND
    // ============================================================
    {
      id: "animal_bite_wound",
      title: "🐕 Bite from another animal / human",
      description: "Dog bit dog, cat scratched, human bite. Risk of infection, rabies, abscess.",
      conditions: { injury_type: ["bite_wound"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Infection prevention",
      tags: ["bite", "infection", "rabies"],
      steps: [
        "Separate the aggressor from the victim. Be careful — injured animals may bite from pain and fear. Use muzzle, blanket, gloves",
        "Rinse the wound with water and soap for 10–15 minutes. Soap destroys bacteria. For cat scratches — rinse extra thoroughly (high infection risk)",
        "Treat with hydrogen peroxide or chlorhexidine on wound edges. Not deep inside — only edges. Apply antibiotic (Levomekol)",
        "Cover with sterile gauze, apply bandage. Don't stitch a bite wound yourself — this traps infection inside",
        "If bitten by an unknown/stray dog/cat — immediately see a vet for rabies risk assessment. Vaccination: 0, 3, 7, 14, 28, 90 days",
        "If your dog/cat bit another animal/person — isolate your pet for 10 days for observation. Inform the victim's owner about your pet's status",
        "If a human was bitten — the human needs medical care: flushing, antibiotics, tetanus shot. Inform the doctor that a pet caused the bite",
        "Monitor the wound for 3–5 days: redness, swelling, pus, odor — signs of infection. Cat abscess develops 2–5 days after a bite"
      ],
      warnings: [
        "DON'T stitch a bite wound yourself — infection (especially pasteurellosis) multiplies in closed wounds. The wound must remain open",
        "DON'T put iodine, brilliant green, alcohol INSIDE the wound — damages tissue and increases pain. Only on edges",
        "Cat scratches and bites get infected in 80% of cases. Even a 'minor' scratch can lead to abscess or sepsis",
        "Rabies is 100% fatal. If there's any suspicion — vaccinate immediately. Don't 'wait and see'"
      ]
    }
  ]
});