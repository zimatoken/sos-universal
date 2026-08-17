// === MODULE: PETS — FIRST AID ===
const firstaidDataEn = {
  category: "firstaid",
  title: "🩹 First aid",
  description: "Wounds, bleeding, burns, fractures, choking — what to do before seeing a vet",

  questions: [
    {
      id: "injury_type",
      text: "What happened?",
      type: "single",
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
      text: "What kind of pet?",
      type: "single",
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_small", label: "🐰 Rabbit / hamster / guinea pig / bird", tags: ["small"] },
        { id: "pet_other", label: "🦎 Other (turtle, snake, iguana)", tags: ["other"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is it?",
      type: "single",
      options: [
        { id: "severity_minor", label: "Minor cut / scrape / mild burn", tags: ["minor"] },
        { id: "severity_moderate", label: "Deep wound / severe burn / swelling", tags: ["moderate"] },
        { id: "severity_severe", label: "Heavy bleeding / fracture / unconsciousness", tags: ["severe"] }
      ]
    }
  ],

  solutions: [
    {
      id: "pet_bleeding",
      title: "🩸 Bleeding in a pet — stopping the bleed",
      description: "Even a small bleed in small pets is dangerous. Act quickly and calmly.",
      conditions: { injury_type: ["bleeding"], severity: ["severity_moderate", "severity_severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Bleeding stopped",
      tags: ["bleeding", "wound", "first_aid"],
      steps: [
        "Stay calm. The animal senses your anxiety and may panic. Speak softly, move smoothly",
        "Wear gloves (if available). Rinse the wound with saline or clean water. Gently remove visible debris (sand, fur)",
        "For capillary bleeding (drops): treat with hydrogen peroxide or chlorhexidine, apply antibacterial ointment (Levomekol, Fucidin), apply sterile bandage",
        "For venous / arterial bleeding: apply sterile gauze or clean cloth, press for 10–15 minutes. Don't peek under the cloth — it disrupts clotting",
        "If bleeding doesn't stop — apply a tourniquet above the wound (3–5 cm). Write down the application time. Don't keep the tourniquet on for more than 20–30 minutes for dogs/cats, 10–15 for small animals",
        "For small animals (hamsters, birds): even a drop of blood is critical. Immediate vet care. Use a cotton swab with hydrogen peroxide, press very gently",
        "After bleeding stops: treat the edges with iodine, apply a bandage. Check rabies vaccination status (especially for bites)",
        "Immediate vet care for: arterial bleeding, wound > 2 cm, visible internal organs, shock (pale, cold paws, rapid breathing)"
      ],
      warnings: [
        "DO NOT use alcohol, cologne, or iodine INSIDE the wound — it causes severe pain and tissue damage. Only on the edges",
        "DO NOT remove objects stuck in the wound (glass, nails) — it will increase bleeding. Stabilize with a bandage, take to the vet",
        "DO NOT give human painkillers (Nurofen, Paracetamol) without veterinary advice — dosages for animals differ, some drugs are toxic",
        "Cats hide pain and bleeding. If a cat is hiding, refusing food, lethargic — check the entire body for wounds"
      ]
    },
    {
      id: "pet_burn",
      title: "🔥 Burn in a pet — first aid",
      description: "Burns from boiling water, heaters, chemicals. Fur hides the extent of the damage.",
      conditions: { injury_type: ["burn"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Reduced burn depth",
      tags: ["burn", "first_aid", "emergency"],
      steps: [
        "Remove the burn source. If fur is burning — cover with thick fabric (smother with oxygen), DO NOT beat the fur — it spreads the fire",
        "Cool the burn with running water for 15–20 minutes. Temperature 15–25°C. NOT ice, NOT snow — it causes frostbite on top of the burn",
        "Carefully cut the fur around the burn (not on the burn itself!). If fur is stuck to the skin — don't pull. Use blunt-tipped scissors",
        "DO NOT pop blisters. DO NOT apply oil, sour cream, toothpaste, iodine on the burn — they trap heat and prevent the vet from assessing the depth",
        "Cover the burn with sterile gauze or clean cloth. You can use plastic wrap — it protects from infection and pain",
        "For chemical burns: rinse with water for 20–30 minutes. If you know the chemical — you can neutralize it (acid → baking soda, alkali → vinegar). Better — only water and a vet",
        "Give water (if the animal is conscious and can drink). Burns cause dehydration. Don't force — a few sips at a time",
        "Emergency vet care for: burn > 5% of body, burns on face/paws/genitals, chemical/electrical burns, shock"
      ],
      warnings: [
        "DO NOT apply oil, sour cream, toothpaste to burns — they trap heat, worsen the burn, hinder diagnosis",
        "DO NOT use ice — it causes frostbite on top of the burn. Only cool running water",
        "Fur hides the depth of the burn. What looks like a 'minor paw burn' may be deep through the entire skin thickness",
        "Electrical burns are often internal. Even if the outside looks 'minor' — always see a vet. Disconnect power before helping"
      ]
    },
    {
      id: "pet_fracture",
      title: "🦴 Fracture in a pet — immobilization",
      description: "The animal limps, won't put weight on the paw, cries when touched. A fracture requires immobilization.",
      conditions: { injury_type: ["fracture"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Immobilization until the vet",
      tags: ["fracture", "first_aid", "emergency"],
      steps: [
        "Signs: won't put weight on the paw, limping, cries/hisses when touched, swelling, deformity, bone protruding (open fracture). Don't try to 'check' — it's painful",
        "DO NOT try to straighten the bone, DO NOT pull the limb. This will damage nerves and blood vessels. Immobilize in the position you found it",
        "For dogs: place on a hard surface (board, shield, cardboard). Secure with tape or bandage to prevent movement during transport",
        "For cats: use a carrier or box with holes. Cats in stress bite and scratch — don't catch with bare hands. Cover with a towel, carefully transfer to a container",
        "Limb immobilization: secure with a board, ruler, cardboard, umbrella. Secure TWO joints — above and below the fracture. Wrap gently",
        "For open fracture (bone protruding): cover with sterile gauze, DO NOT try to push it back, DO NOT wash. Transport carefully, minimize shaking",
        "Relieve pain: apply cold (ice pack in cloth) for 10–15 minutes. Not on skin — frostbite. Don't press on the fracture",
        "Immediately see a vet. Fractures require X-rays, pain relief, possibly surgery. Delay = complications"
      ],
      warnings: [
        "DO NOT give human painkillers (Ibuprofen, Paracetamol, Aspirin) — they are toxic to animals. Only by veterinary prescription",
        "DO NOT feed or water before going to the vet — if surgery under anesthesia is needed, the stomach should be empty",
        "Cats with fractures may seem 'normal' but hide and not eat. Any suspicion of a fracture = vet",
        "Small animals (hamsters, birds) heal fractures quickly but require precise immobilization. A poorly healed fracture = disability"
      ]
    },
    {
      id: "pet_choking",
      title: "😮 Pet is choking — removing a foreign object",
      description: "Bone, toy, ball, food stuck in the throat. The animal is struggling to breathe, coughing, drooling.",
      conditions: { injury_type: ["choking"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Object removed",
      tags: ["choking", "first_aid", "emergency"],
      steps: [
        "If the animal is coughing effectively — encourage coughing. DON'T hit the back, DON'T reach into the mouth. Coughing is the best way to expel the object",
        "If coughing is weak, the animal can't breathe, drooling, tongue blue — immediately start helping",
        "Dog (large): open the mouth, look — can you see the object? If visible — remove with fingers or tweezers. DON'T poke blindly — you'll push it deeper",
        "Dog (small) / cat: hold by the back legs, hang head down (like a chicken). Tap the back between the shoulder blades. Check the mouth — did the object come out?",
        "Modified Heimlich maneuver for dogs: stand behind, wrap arms around the abdomen above the navel, fist inward. Sharp upward-inward thrusts 5 times. Check the mouth",
        "If the animal has lost consciousness: lay on its side, open the mouth, pull out the tongue, check breathing. If no breathing — start artificial respiration (nose + mouth) and chest compressions",
        "After removal — обязательно see a vet. There may be damage to the larynx, esophagus. Swelling may develop in a few hours",
        "Prevention: don't give small bones (chicken, rabbit), toys smaller than the mouth, candies, nuts. Keep small objects off the floor"
      ],
      warnings: [
        "DO NOT hit the back of a standing animal — it can push the object deeper into the airway",
        "DO NOT poke blindly with fingers in the mouth — it pushes the object deeper, injures the larynx",
        "DO NOT perform the Heimlich maneuver if the animal is coughing effectively — coughing is stronger than any maneuver",
        "Balls, marbles, socks — common causes of choking in dogs. Cats often choke on toy mice, threads"
      ]
    },
    {
      id: "pet_eye_injury",
      title: "👁️ Eye injury in an animal",
      description: "Eye is red, closed, watery, the animal rubs it with a paw. Foreign body, scratch, impact.",
      conditions: { injury_type: ["eye"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Preserving vision",
      tags: ["eye", "first_aid", "emergency"],
      steps: [
        "Don't let the animal rub the eye with its paw — it worsens the injury. Put on a protective collar (from cardboard if you don't have one) or bandage the paw",
        "If chemicals got in (shampoo, cleaner): rinse the eye thoroughly with running water or saline for 10–15 minutes. Hold the eyelid open. Emergency vet care!",
        "For foreign bodies (sand, grass, eyelash): try rinsing with saline or clean water. Don't rub! Blinking and tears often wash out the particle",
        "If the particle doesn't wash out — DON'T try to remove it with a cotton swab or fingers. It scratches the cornea. The vet has special tools",
        "For impact / bruise: apply cold (ice pack in cloth) for 5–10 minutes. Don't press on the eyeball. The animal should be calm",
        "For penetrating wound (stick, nail, claw): DO NOT remove the object! Stabilize with a bandage or cup to prevent movement. Immediate emergency care",
        "Cover the eye with sterile gauze or clean cloth. Don't press. Don't apply eye drops without a doctor's prescription — some worsen the injury",
        "After any eye injury — see a veterinary ophthalmologist within 2–4 hours. The cornea heals quickly, but infection also develops quickly"
      ],
      warnings: [
        "DO NOT apply human eye drops (Vizin, Tobrex) without veterinary consultation — dosage and composition may be toxic",
        "DO NOT use cotton swabs on the cornea — fibers remain and cause irritation. Only for cleaning the eyelids",
        "DO NOT give human painkillers — many are toxic to animals (acetaminophen is deadly for cats)",
        "Eye injuries in cats are often accompanied by hidden damage (glaucoma, retinal detachment). Even a 'minor' injury requires examination"
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
        "Separate the aggressor from the victim. Be careful — an injured animal may bite from pain and fear. Use a muzzle, blanket, gloves",
        "Rinse the wound thoroughly with soap and water for 10–15 minutes. Soap destroys bacteria. For cat scratches — rinse especially carefully (high risk of infection)",
        "Treat with hydrogen peroxide or chlorhexidine on the edges of the wound. Not inside the deep wound — only on the edges. Apply antibiotic (Levomekol)",
        "Cover with sterile gauze, apply a bandage. Don't stitch the bite wound yourself — it traps infection inside",
        "If bitten by an unknown / stray dog / cat — immediately see a vet to assess the risk of rabies. Vaccination: 0, 3, 7, 14, 28, 90 days",
        "If your dog / cat bit another animal / human — isolate your pet for 10 days for observation. Inform the victim's owner about your pet's condition",
        "If bitten by a human — the human needs medical attention: washing, antibiotics, tetanus shot. Tell the doctor it was a pet bite",
        "Monitor the wound for 3–5 days: redness, swelling, pus, smell — signs of infection. Abscesses in cats develop 2–5 days after a bite"
      ],
      warnings: [
        "DO NOT stitch the bite wound yourself — infection (especially pasteurellosis) grows in a closed wound. The wound should remain open",
        "DO NOT apply iodine, brilliant green, alcohol INSIDE the wound — it damages tissue and increases pain. Only on the edges",
        "Cat scratches and bites become infected in 80% of cases. Even a 'minor' scratch can lead to an abscess or sepsis",
        "Rabies is 100% fatal. If there's even the slightest suspicion — get vaccinated immediately. Don't postpone 'for later'"
      ]
    }
  ]
};

// ===== EXPORT =====
window.firstaidDataEn = firstaidDataEn;