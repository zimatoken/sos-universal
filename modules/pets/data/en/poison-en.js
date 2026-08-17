// === MODULE: PETS — POISONING ===
const poisonDataEn = {
  category: "poison",
  title: "☠️ Poisoning",
  description: "Chemicals, poisons, bad food, medicines, plants — what to do when your pet is poisoned",

  questions: [
    {
      id: "poison_type",
      text: "What did your pet eat or drink?",
      type: "single",
      options: [
        { id: "food", label: "🍖 Spoiled food / other pet's food / garbage", tags: ["food"] },
        { id: "chemical", label: "🧪 Household chemicals (cleaner, bleach, antifreeze)", tags: ["chemical"] },
        { id: "medicine", label: "💊 Human medications (pills, drops, ointments)", tags: ["medicine"] },
        { id: "plant", label: "🌿 Plant (lily, azalea, oleander, mushrooms)", tags: ["plant"] },
        { id: "pest", label: "☠️ Rodent / insect / flea / tick poison", tags: ["pest"] },
        { id: "unknown", label: "❓ I don't know — just lethargic, vomiting, diarrhea", tags: ["unknown"] }
      ]
    },
    {
      id: "pet_type",
      text: "What kind of pet?",
      type: "single",
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_small", label: "🐰 Rabbit / hamster / bird", tags: ["small"] }
      ]
    },
    {
      id: "time",
      text: "How long ago did it happen?",
      type: "single",
      options: [
        { id: "time_just", label: "Just now (I'm watching it happen)", tags: ["just"] },
        { id: "time_1h", label: "Up to 1 hour ago", tags: ["1h"] },
        { id: "time_hours", label: "1–6 hours ago", tags: ["hours"] },
        { id: "time_day", label: "More than 6 hours ago", tags: ["day"] }
      ]
    }
  ],

  solutions: [
    {
      id: "chemical_poisoning",
      title: "🧪 Household chemical poisoning — immediate action",
      description: "Antifreeze, cleaners, bleach, alcohol — deadly even in small doses.",
      conditions: { poison_type: ["chemical"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving a life",
      tags: ["chemical", "poisoning", "emergency"],
      steps: [
        "Immediately remove the poison source. Remember the substance name, take the packaging — the vet needs to know the ingredients",
        "DO NOT induce vomiting without veterinary advice! Some substances (acids, alkalis, gasoline) cause even more damage to the esophagus when coming back up",
        "Antifreeze (ethylene glycol): deadly even in small doses (1 tsp for a cat, 2 tbsp for a dog). Symptoms: excessive thirst, lethargy, vomiting, seizures. IMMEDIATE VETERINARY CARE! Treatment: ethanol or fomepizole",
        "If on skin: rinse thoroughly with soap and water for 15–20 minutes. Remove collar if soaked in chemicals",
        "If in eyes: rinse with running water for 15–20 minutes. Don't apply anything without veterinary advice",
        "If a vet is unavailable — call a pet poison control center. Report: substance, amount, weight, time",
        "Transport to the vet with the poison packaging. The sooner — the better. Some antidotes only work within the first few hours",
        "Prevention: store chemicals in inaccessible places. Antifreeze — in a locked cabinet. Don't leave open containers. Cats love to drink from antifreeze puddles (sweet taste)"
      ],
      warnings: [
        "DO NOT induce vomiting for acid, alkali, gasoline, or oil poisoning — it doubles the esophageal burn. Only follow veterinary advice",
        "DO NOT give milk, water, or juice without consultation — some substances are absorbed faster with liquids",
        "Antifreeze is the most common and deadliest poison for pets. Even a 'small puddle' in a parking lot can kill a cat. Always wash paws after walks",
        "DO NOT try to 'neutralize' the poison yourself (vinegar after baking soda, etc.). Incorrect neutralization causes a chemical reaction and even more severe burns"
      ]
    },
    {
      id: "food_poisoning",
      title: "🍖 Food poisoning from spoiled food / garbage / other food",
      description: "Ate from the trash, spoiled meat, other pet's food, chocolate, grapes, onions — common poisonings.",
      conditions: { poison_type: ["food"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2–12 hours",
      yield_estimate: "Stopping vomiting / removing toxins",
      tags: ["food", "poisoning", "toxin"],
      steps: [
        "If poisoning occurred less than 2 hours ago and the pet is conscious — you can induce vomiting with 3% hydrogen peroxide: 1 tsp per 5 kg of weight. Give with a syringe (no needle) into the mouth. Vomiting should start within 5–10 minutes. No more than 2 times!",
        "If vomiting doesn't start or more than 2 hours have passed — DO NOT use peroxide. Toxins have already been absorbed, and peroxide will cause additional stomach burns",
        "Give an adsorbent: activated charcoal (1 tablet per 5 kg), Enterosgel (1 tsp per 10 kg), Polysorb. This binds toxins in the intestines. Do not give adsorbents if there's an intestinal obstruction",
        "Give water frequently, in small amounts. For dogs: Rehydration solution. For cats: water or diluted broth. Dehydration is more dangerous than the poisoning itself",
        "Diet: 12–24 hours of fasting (for dogs), then boiled chicken + rice. For cats — don't fast longer than 12 hours, give small portions of wet food",
        "Immediately see a vet if: vomiting with blood, seizures, loss of consciousness, temperature > 40°C, bloody diarrhea, lethargy. This could be botulism, salmonella, or distemper",
        "If chocolate was eaten: chocolate is toxic to dogs (theobromine). Symptoms: vomiting, diarrhea, seizures, rapid heart rate. Calculate the dose: dark chocolate is more dangerous than milk chocolate. See a vet",
        "If grapes / raisins were eaten: toxic to dogs, causes kidney failure. Even a small amount. Immediate veterinary care",
        "If onions / garlic were eaten: destroys red blood cells, causes anemia. Symptoms: lethargy, pale gums, dark urine. See a vet"
      ],
      warnings: [
        "DO NOT induce vomiting if the pet is unconscious, lethargic, or more than 2 hours have passed. Risk of aspiration (vomiting into the lungs) = pneumonia",
        "DO NOT give milk during poisoning — it increases absorption of some toxins and causes diarrhea",
        "Chocolate, grapes, onions, garlic, avocado, macadamia nuts, xylitol (sweetener) — toxic to dogs. Cats — also onions, garlic, chocolate, grapes, acetaminophen, lilies",
        "DO NOT give human anti-emetics, laxatives, antibiotics without veterinary advice — they can worsen the condition"
      ]
    },
    {
      id: "medicine_poisoning",
      title: "💊 Human medication poisoning",
      description: "Painkillers, antibiotics, ointments, drops — pets eat anything that falls on the floor.",
      conditions: { poison_type: ["medicine"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving a life",
      tags: ["medicine", "poisoning", "emergency"],
      steps: [
        "Immediately identify: which pills, how many, when. Take the packaging, blister, leftovers. Take a photo. The vet needs to know the name, dosage, quantity",
        "Acetaminophen (Paracetamol) — DEADLY for cats (even 1 tablet). Toxic for dogs too. Symptoms: lethargy, difficulty breathing, blue gums, swollen paws. Immediate vet care! Antidote: acetylcysteine",
        "Ibuprofen, Nurofen — toxic to dogs and cats. Causes stomach ulcers, kidney failure. Symptoms: vomiting with blood, black stool, lethargy",
        "Aspirin — toxic to cats (causes liver failure). For dogs, possible in veterinary doses, but human doses are dangerous",
        "Antidepressants, sleeping pills, sedatives — cause seizures, coma, respiratory arrest. Even a small dose is dangerous for small animals",
        "If poisoning occurred less than 2 hours ago — you can induce vomiting with 3% hydrogen peroxide (1 tsp per 5 kg). No more than 2 times. Then give an adsorbent (activated charcoal)",
        "Immediately go to the vet with the medication packaging. Some drugs require specific antidotes or stomach pumping",
        "Prevention: store ALL medications in a locked cabinet. Don't leave them on tables, nightstands. Cats knock things off shelves, dogs eat anything off the floor"
      ],
      warnings: [
        "Acetaminophen is the #1 poison for cats. Even half a tablet can kill an adult cat. NEVER give human painkillers to cats",
        "DO NOT give human antibiotics (Amoxicillin, Ciprofloxacin) without veterinary advice — dosages for animals differ, some drugs are toxic",
        "DO NOT apply human ointments (Ichthyol, Vishnevsky, Fucidin) to animal wounds — they lick and swallow them. Only veterinary drugs with an Elizabethan collar",
        "Children's medications (children's Nurofen, children's Acetaminophen) — also dangerous. 'Children's' dose does not mean 'safe for animals'"
      ]
    },
    {
      id: "plant_poisoning",
      title: "🌿 Plant and mushroom poisoning",
      description: "Lilies, azaleas, oleander, mushrooms, cactus — many house and garden plants are toxic to pets.",
      conditions: { poison_type: ["plant"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–12 hours",
      yield_estimate: "Removing toxins",
      tags: ["plant", "poisoning", "toxin"],
      steps: [
        "Identify the plant. Take photos of leaves, flowers, stems. If you don't know — use PlantNet or Google Lens. The vet needs to know what the pet ate",
        "Lilies (all parts) — DEADLY for cats. Even a small leaf or pollen causes kidney failure. Symptoms: vomiting, lethargy, refusal to eat. Immediate vet care!",
        "Oleander, azalea, rhododendron — toxic to all animals. Symptoms: vomiting, diarrhea, seizures, slowed heart rate. Emergency care",
        "Mushrooms — deadly dangerous. Even 'edible' mushrooms for humans can be toxic to animals. Symptoms: vomiting, hallucinations, seizures, liver failure. Immediate vet care",
        "If poisoning occurred less than 2 hours ago — induce vomiting with 3% hydrogen peroxide (1 tsp per 5 kg). No more than 2 times. Then activated charcoal",
        "Save a sample of the plant / mushroom in a bag — the vet will send it for analysis. This helps choose the right treatment",
        "Give water frequently, in small amounts. Dehydration increases toxicity. Don't give milk — it increases absorption of some toxins",
        "Immediately see a vet. Plant poisoning requires specific treatment: stomach pumping, IV fluids, antidotes, liver and kidney support"
      ],
      warnings: [
        "DO NOT try to identify mushroom 'edibility' online. Even experienced mycologists make mistakes. Any suspicion = vet",
        "Lilies are the most common poisoning in cats. Even 'non-lily' lilies (like 'Dendrobium') are toxic. Remove ALL lilies from homes with cats",
        "DO NOT grow in homes with pets: oleander, azalea, ivy, dieffenbachia, aloe, tulips, daffodils, crocuses. Check all plants for toxicity before buying",
        "Dogs often eat mushrooms on walks. Don't let them off-leash in forests during mushroom season. Even 'familiar' mushrooms can be toxic to dogs"
      ]
    },
    {
      id: "pest_poisoning",
      title: "☠️ Rodent / insect poison poisoning",
      description: "Dog or cat ate rat poison, mouse poison, cockroach poison, flea/tick poison. This is deadly dangerous.",
      conditions: { poison_type: ["pest"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving a life",
      tags: ["pest", "rat_poison", "emergency"],
      steps: [
        "Immediately identify: which poison? Take the packaging, remember the name. The vet needs to know the active ingredient (warfarin, brodifacoum, cypermethrin, fipronil, etc.)",
        "If rodent poison (rodenticides) — these are anticoagulants. Symptoms appear in 1–3 days: bleeding from nose, gums, bloody vomiting, black stool. Immediate vet care! Treatment: Vitamin K1 (phytonadione) and blood transfusion",
        "If cockroach / ant poison (phosphides) — release phosphine gas. Symptoms: vomiting, diarrhea, seizures, pulmonary edema. Deadly dangerous. Immediate vet care",
        "If flea / tick poison (pesticides) — symptoms: drooling, tremors, seizures, difficulty breathing. Wash the fur if it's external contact. Internal — only vet care",
        "DO NOT induce vomiting if more than 2 hours have passed or if the poison may be foaming (e.g., rodenticides). Call a vet",
        "Give an adsorbent: activated charcoal (1 tablet per 5 kg), Enterosgel. Don't give adsorbents for intestinal obstruction or bleeding",
        "Immediately go to the vet with the poison packaging. Antidotes: Vitamin K1 — for anticoagulants, atropine — for organophosphates. The sooner — the better the chances",
        "Prevention: DO NOT use rodent poisons in homes with pets. Use safe traps, ultrasonic repellents. If you use poison — only in inaccessible places (behind cabinets, in locked drawers)"
      ],
      warnings: [
        "Rodenticide poisoning is deadly dangerous. An antidote exists, but it's only effective in the first 24–48 hours. Don't wait for symptoms!",
        "Rat poison (zoocoumarin) causes internal bleeding. Symptoms appear in 1–3 days, when saving is almost impossible. Seek veterinary care immediately if you suspect exposure",
        "DO NOT give Vitamin K1 yourself — dosage is critical, overdose is dangerous. Only veterinary supervision",
        "If insect poison (fipronil, phosphides) — wash skin and fur with soap. Dogs/cats may lick poison from their fur — put on an Elizabethan collar"
      ]
    },
    {
      id: "unknown_poisoning",
      title: "❓ Unknown poisoning — general protocol",
      description: "Pet is lethargic, vomiting, diarrhea, but you don't know what they ate. Follow the universal protocol.",
      conditions: { poison_type: ["unknown"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1–6 hours",
      yield_estimate: "Stabilization and diagnosis",
      tags: ["unknown", "poisoning", "emergency"],
      steps: [
        "Stay calm. Panic clouds judgment. Check the house: what's missing? Open packages, broken containers, garbage can, missing medications, plants with chewed leaves",
        "Collect samples: vomit, feces, urine in clean containers. The vet can run toxicology tests. Photograph anything that looks suspicious",
        "DO NOT induce vomiting if you don't know what was eaten. Some substances cause esophageal burns (acids, alkalis) or aspiration into the lungs (oils, gasoline) when vomiting",
        "Give an adsorbent: activated charcoal (1 tablet per 5 kg), Enterosgel (1 tsp per 10 kg), Polysorb. This is safe if there's no intestinal obstruction",
        "Give water frequently, in small amounts. Dehydration increases toxicity. Can give child's Rehydration solution (for dogs), for cats — only water",
        "Immediately see a vet. Unknown poisonings require comprehensive examination: blood tests, ultrasound, X-ray, toxicology screening",
        "If condition worsens (seizures, loss of consciousness, respiratory arrest) — immediately to the emergency room. Don't wait for 'morning'",
        "Prevention: store ALL poisonous substances in inaccessible places. Keep medications, chemicals, plants out of your pet's reach. Check that everything is safe"
      ],
      warnings: [
        "DO NOT give milk, oil, sour cream for unknown poisoning — it may accelerate toxin absorption",
        "DO NOT use activated charcoal if there's bloody vomiting or black stool (signs of bleeding) — it may complicate diagnosis",
        "DO NOT wait for 'it will pass'. Poisoning progresses faster in animals than in humans. Lethargy, vomiting, diarrhea — already a reason to see a vet",
        "If you find poison packaging — don't throw it away. Take it to the vet. It could save your pet's life"
      ]
    }
  ]
};

// ===== EXPORT =====
window.poisonDataEn = poisonDataEn;
