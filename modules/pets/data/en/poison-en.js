// modules/pets/data/en/poison-en.js
// === MODULE: PETS — POISONING ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "pets",
    category: "poison",
    version: "1.0.0",
    lang: "en",
    title: "Poisoning",
    description: "Chemicals, poisons, bad food, medications, plants — what to do if your pet is poisoned",
    icon: "☠️",
    color: "#9333ea"
  },

  questions: [
    {
      id: "poison_type",
      type: "single",
      text: "What did the pet eat / drink?",
      options: [
        { id: "food", label: "🍖 Spoiled food / other's food / garbage", tags: ["food"] },
        { id: "chemical", label: "🧪 Household chemicals (cleaner, bleach, antifreeze)", tags: ["chemical"] },
        { id: "medicine", label: "💊 Human medications (pills, drops, ointments)", tags: ["medicine"] },
        { id: "plant", label: "🌿 Plant (lily, azalea, oleander, mushrooms)", tags: ["plant"] },
        { id: "pest", label: "☠️ Rat / cockroach / flea / tick poison", tags: ["pest"] },
        { id: "unknown", label: "❓ Don't know — just lethargic, vomiting, diarrhea", tags: ["unknown"] }
      ]
    },
    {
      id: "pet_type",
      type: "single",
      text: "What kind of pet?",
      conditions: { poison_type: ["food", "chemical", "medicine", "plant", "pest", "unknown"] },
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_small", label: "🐰 Rabbit / hamster / bird", tags: ["small"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "How much time has passed?",
      conditions: { poison_type: ["food", "chemical", "medicine", "plant", "pest", "unknown"] },
      options: [
        { id: "time_just", label: "⏱️ Just now (watching in real time)", tags: ["just"] },
        { id: "time_1h", label: "⏰ Up to 1 hour", tags: ["1h"] },
        { id: "time_hours", label: "⏰ 1–6 hours", tags: ["hours"] },
        { id: "time_day", label: "⏰ More than 6 hours", tags: ["day"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. CHEMICAL POISONING
    // ============================================================
    {
      id: "chemical_poisoning",
      title: "🧪 Household chemical poisoning — immediate actions",
      description: "Antifreeze, cleaners, bleach, alcohol — deadly even in small doses.",
      conditions: { poison_type: ["chemical"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Immediate",
      yield_estimate: "Life saved",
      tags: ["chemical", "poisoning", "emergency"],
      steps: [
        "Immediately remove the poison source. Remember the substance name, take the container — the vet needs to know the composition",
        "DON'T induce vomiting without vet consultation! Some substances (acids, alkalis, gasoline) burn the esophagus even more on the way back up",
        "Antifreeze (ethylene glycol): deadly even in small doses (1 tsp for cats, 2 tbsp for dogs). Symptoms: excessive thirst, lethargy, vomiting, seizures. Emergency vet! Treatment: ethanol or fomepizole",
        "For skin contact: rinse thoroughly with soap and water for 15–20 minutes. Remove collar if wet with chemicals",
        "For eye contact: rinse with running water for 15–20 minutes. Don't use eye drops without vet prescription",
        "If a vet is unavailable — call a pet poison control center. Report: substance, amount, weight, time",
        "Transport to the vet with the poison container. The faster — the better. Some antidotes work only in the first hours",
        "Prevention: store chemicals out of reach. Antifreeze — in a locked cabinet. Don't leave open containers. Cats love to drink from antifreeze puddles (sweet taste)"
      ],
      warnings: [
        "DON'T induce vomiting for acid, alkali, gasoline, or oil poisoning — doubles the esophageal burn. Only by vet instruction",
        "DON'T give milk, water, juice without consultation — some substances absorb faster with liquid",
        "Antifreeze is the most common and deadliest poison for pets. Even a 'small puddle' in a parking lot can kill a cat. Always wash paws after walks",
        "DON'T try to 'neutralize' poison yourself (vinegar after baking soda, etc.). Incorrect neutralization causes chemical reactions and more burns"
      ]
    },
    // ============================================================
    // 2. FOOD POISONING
    // ============================================================
    {
      id: "food_poisoning",
      title: "🍖 Food poisoning from spoiled food / garbage / other's food",
      description: "Ate from the trash, spoiled meat, chocolate, grapes, onions — common poisonings.",
      conditions: { poison_type: ["food"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2–12 hours",
      yield_estimate: "Stopping vomiting / removing toxins",
      tags: ["food", "poisoning", "toxin"],
      steps: [
        "If poisoning occurred less than 2 hours ago and the pet is conscious — induce vomiting with 3% hydrogen peroxide: 1 tsp per 5 kg of weight. Give with a syringe without needle. Vomiting should start within 5–10 minutes. No more than 2 times!",
        "If vomiting didn't start or more than 2 hours have passed — DON'T use peroxide. Toxins have already been absorbed, and peroxide will cause additional stomach burns",
        "Give an adsorbent: activated charcoal (1 tablet per 5 kg), Enterosgel, Polysorb. This binds toxins in the intestines. Don't give adsorbents with intestinal obstruction",
        "Give water frequently, in small amounts. For dogs: Regidron solution. For cats: water or children's broth. Dehydration is more dangerous than the poisoning itself",
        "Diet: 12–24 hours fasting (for dogs), then boiled chicken + rice. For cats — don't fast longer than 12 hours, give small portions of veterinary diet food",
        "Immediate vet for: vomiting with blood, seizures, unconsciousness, temperature > 40°C, bloody diarrhea, lethargy. This could be botulism, salmonellosis, distemper",
        "If ate chocolate: chocolate is toxic to dogs (theobromine). Symptoms: vomiting, diarrhea, seizures, rapid heartbeat. Calculate dose: dark chocolate is more dangerous than milk. See a vet",
        "If ate grapes / raisins: toxic to dogs, causes kidney failure. Even a small amount. Immediate vet",
        "If ate onion / garlic: destroys red blood cells, causes anemia. Symptoms: lethargy, pale gums, dark urine. See a vet"
      ],
      warnings: [
        "DON'T induce vomiting if the pet is unconscious, lethargic, or more than 2 hours have passed. Risk of aspiration (vomit into lungs) = pneumonia",
        "DON'T give milk for poisoning — it increases absorption of some toxins and causes diarrhea",
        "Chocolate, grapes, onions, garlic, avocado, macadamia, xylitol (sweetener) — toxic to dogs. Cats — also onions, garlic, chocolate, grapes, paracetamol, lilies",
        "DON'T give human antiemetics, laxatives, antibiotics without vet prescription — they can worsen the condition"
      ]
    },
    // ============================================================
    // 3. MEDICATION POISONING
    // ============================================================
    {
      id: "medicine_poisoning",
      title: "💊 Human medication poisoning",
      description: "Painkillers, antibiotics, ointments, drops — pets eat everything that falls on the floor.",
      conditions: { poison_type: ["medicine"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Immediate",
      yield_estimate: "Life saved",
      tags: ["medicine", "poisoning", "emergency"],
      steps: [
        "Immediately identify: which pills, how many, when. Take the package, blister, leftovers. Photograph. The vet needs name, dosage, quantity",
        "Paracetamol (Acetaminophen) — LETHAL for cats (even 1 tablet). Dangerous for dogs too. Symptoms: lethargy, shortness of breath, blue gums, paw swelling. Emergency vet! Antidote: acetylcysteine",
        "Ibuprofen, Nurofen — toxic to dogs and cats. Causes stomach ulcers, kidney failure. Symptoms: vomiting with blood, black stool, lethargy",
        "Aspirin — toxic to cats (causes liver failure). For dogs possible in veterinary doses, but human doses are dangerous",
        "Antidepressants, sleeping pills, sedatives — cause seizures, coma, respiratory arrest. Even a small dose is dangerous for small pets",
        "If poisoning occurred less than 2 hours ago — induce vomiting with 3% hydrogen peroxide (1 tsp per 5 kg). No more than 2 times. Then adsorbent (activated charcoal)",
        "Immediately to the vet with the medication package. Some drugs require specific antidote or stomach pumping",
        "Prevention: store ALL medications in a locked cabinet. Don't leave on tables, nightstands. Cats knock everything off shelves, dogs eat everything off the floor"
      ],
      warnings: [
        "Paracetamol is the #1 poison for cats. Even half a tablet can kill an adult cat. Never give human painkillers to cats",
        "DON'T give human antibiotics without vet prescription — dosages for animals differ, some drugs are toxic",
        "DON'T apply human ointments to animal wounds — they lick and swallow them. Only veterinary drugs with an Elizabethan collar",
        "Children's medications (Children's Nurofen, Children's Paracetamol) are also dangerous. A 'children's' dose doesn't mean 'safe for a pet'"
      ]
    },
    // ============================================================
    // 4. PLANT POISONING
    // ============================================================
    {
      id: "plant_poisoning",
      title: "🌿 Plant and mushroom poisoning",
      description: "Lilies, azaleas, oleander, mushrooms, cacti — many house and garden plants are toxic to pets.",
      conditions: { poison_type: ["plant"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–12 hours",
      yield_estimate: "Toxins removed",
      tags: ["plant", "poisoning", "toxin"],
      steps: [
        "Identify the plant. Photograph leaves, flowers, stem. If you don't know — use PlantNet app or Google Lens. The vet needs to know what the pet ate",
        "Lilies (all parts) — LETHAL for cats. Even a small leaf or pollen causes kidney failure. Symptoms: vomiting, lethargy, refusing food. Immediate vet!",
        "Oleander, azalea, rhododendron — toxic to all pets. Symptoms: vomiting, diarrhea, seizures, slow heart rate. Emergency help",
        "Mushrooms — deadly dangerous. Even 'edible' mushrooms for humans can be toxic to pets. Symptoms: vomiting, hallucinations, seizures, liver failure. Immediate vet",
        "If poisoning occurred less than 2 hours ago — induce vomiting with 3% hydrogen peroxide (1 tsp per 5 kg). No more than 2 times. Then activated charcoal",
        "Save a sample of the plant/mushroom in a bag — the vet can send it for analysis. This helps choose the right treatment",
        "Give water frequently, in small amounts. Dehydration increases toxicity. Don't give milk — it increases absorption of some toxins",
        "Immediately to the vet. Plant poisoning requires specific treatment: stomach pumping, IVs, antidotes, liver and kidney support"
      ],
      warnings: [
        "DON'T try to identify mushroom 'edibility' from the internet. Even experienced mycologists make mistakes. Any suspicion = vet",
        "Lilies are the most common poisoning in cats. Even 'different-looking' lilies are toxic. Remove ALL lilies from the house with a cat",
        "DON'T grow in a house with pets: oleander, azalea, ivy, dieffenbachia, aloe, tulips, daffodils, crocuses. Check all plants for toxicity before buying",
        "Dogs often eat mushrooms on walks. Don't let off-leash in the forest during mushroom season. Even 'familiar' mushrooms can be toxic to dogs"
      ]
    },
    // ============================================================
    // 5. RODENT / INSECT POISON
    // ============================================================
    {
      id: "pest_poisoning",
      title: "☠️ Rodent / insect poison poisoning",
      description: "Dog or cat ate rat, mouse, cockroach, flea poison. This is deadly dangerous.",
      conditions: { poison_type: ["pest"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Immediate",
      yield_estimate: "Life saved",
      tags: ["pest", "rat_poison", "emergency"],
      steps: [
        "Immediately identify: what poison? Take the package, remember the name. The vet needs to know the active substance (warfarin, brodifacoum, cypermethrin, fipronil, etc.)",
        "If rodent poison (rodenticides) — these are anticoagulants. Symptoms appear in 1–3 days: nosebleeds, gum bleeding, vomiting blood, black stool. Emergency vet! Treatment: vitamin K1 (phytomenadione) and blood transfusion",
        "If cockroach/ant poison (phosphides) — releases phosphine. Symptoms: vomiting, diarrhea, seizures, pulmonary edema. Deadly. Emergency vet",
        "If flea/tick poison (pesticides) — symptoms: drooling, tremors, seizures, shortness of breath. Wash fur if external contact. Internal — only vet",
        "DON'T induce vomiting if more than 2 hours have passed or if the poison may be foaming (e.g., rodenticides). Call the vet",
        "Give adsorbent: activated charcoal (1 tablet per 5 kg), Enterosgel. Don't give adsorbents with intestinal obstruction or bleeding",
        "Immediately to the vet with the poison package. Antidotes: vitamin K1 — for anticoagulants, atropine — for organophosphates. The sooner — the better",
        "Prevention: DON'T use rodent poison in homes with pets. Use safe traps, ultrasonic repellents. If using poison — only in inaccessible places"
      ],
      warnings: [
        "Rodenticide poisoning is deadly. Antidote exists but is only effective in the first 24–48 hours. Don't wait for symptoms!",
        "Rat poison causes internal bleeding. Symptoms appear in 1–3 days, when it's almost impossible to save. See a vet immediately if suspected",
        "DON'T give vitamin K1 yourself — dosage is critical, overdose dangerous. Only veterinary supervision",
        "If insect poison (fipronil, phosphides) — wash skin and fur with soap. Pets may lick poison from fur — use an Elizabethan collar"
      ]
    },
    // ============================================================
    // 6. UNKNOWN POISONING
    // ============================================================
    {
      id: "unknown_poisoning",
      title: "❓ Unknown poisoning — general algorithm",
      description: "Pet is lethargic, vomiting, diarrhea, but you don't know what was eaten. Follow the universal protocol.",
      conditions: { poison_type: ["unknown"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1–6 hours",
      yield_estimate: "Stabilization and diagnosis",
      tags: ["unknown", "poisoning", "emergency"],
      steps: [
        "Stay calm. Panic hinders. Check the house: what's missing? Open packages, broken containers, trash can, missing medications, plants with chewed leaves",
        "Collect samples: vomit, feces, urine in clean containers. The vet can do toxicology analysis. Photograph anything suspicious",
        "DON'T induce vomiting if you don't know what was eaten. Some substances cause esophageal burns (acids, alkalis) or aspiration into the lungs (oils, gasoline) with vomiting",
        "Give an adsorbent: activated charcoal (1 tablet per 5 kg), Enterosgel (1 tsp per 10 kg), Polysorb. This is safe if there's no intestinal obstruction",
        "Give water frequently, in small amounts. Dehydration increases toxicity. Can give children's Regidron (for dogs), for cats — only water",
        "Immediately to the vet. Unknown poisoning requires comprehensive examination: blood tests, ultrasound, X-ray, toxicology screening",
        "If condition worsens (seizures, unconsciousness, respiratory arrest) — immediately to intensive care. Don't wait for 'morning'",
        "Prevention: remove ALL poisonous substances from accessible places. Store medications, chemicals, plants where the pet cannot reach"
      ],
      warnings: [
        "DON'T give milk, oil, sour cream for unknown poisoning — may increase toxin absorption",
        "DON'T use activated charcoal if there's vomiting with blood or black stool (sign of bleeding) — may hinder diagnosis",
        "DON'T wait for 'it'll pass'. Poisoning in animals progresses faster than in humans. Lethargy, vomiting, diarrhea — already a reason to see a vet",
        "If you find the poison package — don't throw it away. Bring it to the vet. This could save the pet's life"
      ]
    }
  ]
});