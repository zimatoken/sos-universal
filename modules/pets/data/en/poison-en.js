// === MODULE: PETS — POISONING (EN) ===
const poisonDataEN = {
  category: "poison",
  title: "☠️ Poisoning",
  description: "Chemicals, poisons, bad food, medicines, plants — what to do when a pet is poisoned",

  questions: [
    {
      id: "poison_type",
      text: "What did the pet eat / drink?",
      type: "single",
      options: [
        { id: "food", label: "Spoiled food / foreign food / garbage", tags: ["food"] },
        { id: "chemical", label: "Household chemical (detergent, bleach, antifreeze)", tags: ["chemical"] },
        { id: "medicine", label: "Human medicine (pills, drops, ointments)", tags: ["medicine"] },
        { id: "plant", label: "Plant (lily, azalea, oleander, mushrooms)", tags: ["plant"] },
        { id: "pest", label: "Rat / cockroach / flea / tick poison", tags: ["pest"] },
        { id: "unknown", label: "Don't know — just lethargic, vomiting, diarrhea", tags: ["unknown"] }
      ]
    },
    {
      id: "pet_type",
      text: "What animal?",
      type: "single",
      options: [
        { id: "dog", label: "Dog", tags: ["dog"] },
        { id: "cat", label: "Cat", tags: ["cat"] },
        { id: "small", label: "Rabbit / hamster / bird", tags: ["small"] }
      ]
    },
    {
      id: "time",
      text: "How much time has passed?",
      type: "single",
      options: [
        { id: "just", label: "Just now (I see it in real time)", tags: ["just"] },
        { id: "1h", label: "Up to 1 hour", tags: ["1h"] },
        { id: "hours", label: "1–6 hours", tags: ["hours"] },
        { id: "day", label: "More than 6 hours", tags: ["day"] }
      ]
    }
  ],

  solutions: [
    {
      id: "chemical_poisoning",
      title: "🧪 Household chemical poisoning — immediate actions",
      description: "Antifreeze, detergent, bleach, alcohol — deadly dangerous even in small amounts.",
      conditions: { poison_type: ["chemical"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving a life",
      tags: ["chemical", "poisoning", "emergency"],
      steps: [
        "Immediately remove the source of poisoning. Remember the substance name, take the packaging — the vet needs to know the composition",
        "DO NOT induce vomiting without vet consultation! Some substances (acids, alkalis, gasoline) burn the esophagus even more on the way back up",
        "Antifreeze (ethylene glycol): fatal even in small amounts (1 tsp for a cat, 2 tbsp for a dog). Symptoms: drinks a lot, lethargy, vomiting, seizures. Go to the vet immediately! Treatment: ethanol or fomepizole",
        "For skin contact: rinse abundantly with water and soap for 15–20 minutes. Remove collar if soaked with chemical",
        "For eye contact: rinse with running water for 15–20 minutes. Do not apply anything without vet prescription",
        "If vet is unavailable — call animal toxicology center. In Russia: veterinary clinic phones, often 24/7. Report: substance, amount, weight, time",
        "Transport to the vet with poison packaging. The faster — the better. Some antidotes work only in the first hours",
        "Prevention: store chemicals in an inaccessible place. Antifreeze — in a locked cabinet. Do not leave open containers. Cats like to drink antifreeze puddles (sweet taste)"
      ],
      warnings: [
        "DO NOT induce vomiting for acid, alkali, gasoline, oil poisoning — this doubles the esophageal burn. Only as directed by vet",
        "DO NOT give milk, water, juice for poisoning without consultation — some substances are absorbed more with liquids",
        "Antifreeze is the most common and deadly poison for animals. Even a 'small puddle' in a parking lot can kill a cat. Always wash paws after walks",
        "DO NOT try to 'neutralize' poison yourself (vinegar after soda, etc.). Wrong neutralization causes a chemical reaction and even greater burn"
      ]
    },
    {
      id: "food_poisoning",
      title: "🍖 Food poisoning / garbage / foreign food",
      description: "Ate from trash, spoiled meat, foreign food, chocolate, grapes, onion — common poisonings.",
      conditions: { poison_type: ["food"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2–12 hours",
      yield_estimate: "Stopping vomiting / toxin removal",
      tags: ["food", "poisoning", "toxin"],
      steps: [
        "If poisoning occurred less than 2 hours ago and pet is conscious — you can induce vomiting with 3% hydrogen peroxide: 1 tsp per 5 kg weight. Give with a needleless syringe in the mouth. Vomiting should start in 5–10 minutes. No more than 2 times!",
        "If vomiting does not start or more than 2 hours have passed — DO NOT give more peroxide. Toxins are already absorbed, and peroxide will cause additional stomach burn",
        "Give adsorbent: activated charcoal (1 tablet per 5 kg), Enterosgel (1 tsp per 10 kg), Polysorb. This binds toxins in the intestines. Do not give with intestinal obstruction",
        "Give water frequently, in small amounts. For dogs: Regidron solution. For cats: water or children's broth. Dehydration is more dangerous than the poisoning itself",
        "Diet: 12–24 hours fasting (for dogs), then boiled chicken + rice. For cats — do not fast longer than 12 hours, give diet food in small portions",
        "Go to the vet immediately for: vomiting with blood, seizures, loss of consciousness, temperature > 40°C, diarrhea with blood, lethargy. This may be botulism, salmonellosis, distemper",
        "If ate chocolate: chocolate is toxic to dogs (theobromine). Symptoms: vomiting, diarrhea, seizures, rapid heartbeat. Calculate dose: dark chocolate is more dangerous than milk. Go to the vet",
        "If ate grapes / raisins: toxic to dogs, causes kidney failure. Even a small amount. Go to the vet immediately",
        "If ate onion / garlic: destroys red blood cells, causes anemia. Symptoms: lethargy, pale gums, dark urine. Go to the vet"
      ],
      warnings: [
        "DO NOT induce vomiting if pet is unconscious, lethargic, or more than 2 hours have passed. Risk of aspiration (vomit into lungs) = pneumonia",
        "DO NOT give milk for poisoning — it enhances absorption of some toxins and causes diarrhea",
        "Chocolate, grapes, onion, garlic, avocado, macadamia, xylitol (sugar substitute) — toxic to dogs. Cats — also onion, garlic, chocolate, grapes, paracetamol, lilies",
        "DO NOT give human antiemetics, laxatives, antibiotics without vet prescription — they may worsen the condition"
      ]
    },
    {
      id: "medicine_poisoning",
      title: "💊 Poisoning with human medicines",
      description: "Headache pills, antibiotics, ointments, drops — animals eat everything that falls on the floor.",
      conditions: { poison_type: ["medicine"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving a life",
      tags: ["medicine", "poisoning", "emergency"],
      steps: [
        "Immediately determine: which pills, how many, when. Take the packaging, blister, remains. Photograph. The vet needs to know name, dosage, amount",
        "Paracetamol (Acetaminophen) — FATAL for cats (even 1 tablet). Dangerous for dogs too. Symptoms: lethargy, shortness of breath, blue gums, swollen paws. Go to the vet immediately! Antidote: acetylcysteine",
        "Ibuprofen, Nurofen — toxic to dogs and cats. Causes stomach ulcers, kidney failure. Symptoms: vomiting with blood, black stool, lethargy",
        "Aspirin — toxic to cats (causes liver failure). Possible for dogs in veterinary doses, but human doses are dangerous",
        "Antidepressants, sleeping pills, sedatives — cause seizures, coma, respiratory arrest. Even a small dose is dangerous for small animals",
        "If poisoning is less than 2 hours ago — you can induce vomiting with 3% peroxide (1 tsp per 5 kg). No more than 2 times. Then adsorbent (activated charcoal)",
        "Go to the vet immediately with medicine packaging. Some drugs require specific antidote or stomach pumping",
        "Prevention: store ALL medicines in a locked cabinet. Do not leave on tables, nightstands. Cats knock everything off shelves, dogs eat everything from the floor"
      ],
      warnings: [
        "Paracetamol is the #1 poison for cats. Even half a tablet can kill an adult cat. Never give human painkillers to cats",
        "DO NOT give human antibiotics (Amoxicillin, Ciprofloxacin) without vet prescription — animal dosage differs, some drugs are toxic",
        "DO NOT apply human ointments (Ichthyol, Vishnevsky, Fucidin) on animal wounds — they will lick and swallow. Only veterinary drugs with protective collar",
        "Children's medicines (Children's Nurofen, Children's Paracetamol) are also dangerous. 'Children's' dose does not mean 'safe for animals'"
      ]
    },
    {
      id: "plant_poisoning",
      title: "🌿 Plant and mushroom poisoning",
      description: "Lilies, azaleas, oleander, mushrooms, cactus — many house and garden plants are toxic to animals.",
      conditions: { poison_type: ["plant"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–12 hours",
      yield_estimate: "Toxin removal",
      tags: ["plant", "poisoning", "toxin"],
      steps: [
        "Identify the plant. Photograph leaves, flowers, stem. If you don't know — use PlantNet app or Google Lens. The vet needs to know what the pet ate",
        "Lilies (all parts) — FATAL for cats. Even a small leaf or pollen causes kidney failure. Symptoms: vomiting, lethargy, refusal to eat. Go to the vet immediately!",
        "Oleander, azalea, rhododendron — toxic to all animals. Symptoms: vomiting, diarrhea, seizures, slowed heart. Emergency care",
        "Mushrooms — deadly dangerous. Even 'edible' mushrooms for humans can be toxic to animals. Symptoms: vomiting, hallucinations, seizures, liver failure. Go to the vet immediately",
        "If poisoning is less than 2 hours — induce vomiting with 3% peroxide (1 tsp per 5 kg). No more than 2 times. Then activated charcoal",
        "Save a sample of the plant / mushroom in a bag — the vet will send for analysis. This helps choose the right treatment",
        "Give water frequently, in small amounts. Dehydration increases toxicity. Do not give milk — it enhances absorption of some toxins",
        "Go to the vet immediately. Plant poisoning requires specific treatment: stomach pumping, IV fluids, antidotes, liver and kidney support"
      ],
      warnings: [
        "DO NOT try to determine mushroom 'edibility' from the internet. Even experienced mycologists make mistakes. Any suspicion = vet",
        "Lilies are the most common cat poisoning. Even 'unusual' lilies (like dendrobium) are toxic. Remove ALL lilies from a house with a cat",
        "DO NOT grow in a house with animals: oleander, azalea, ivy, dieffenbachia, aloe, tulips, daffodils, crocuses. Check all plants for toxicity before buying",
        "Dogs often eat mushrooms on walks. Do not let off leash in the forest during mushroom season. Even 'familiar' mushrooms may be poisonous to dogs"
      ]
    }
  ]
};

window.poisonDataEN = poisonDataEN;
