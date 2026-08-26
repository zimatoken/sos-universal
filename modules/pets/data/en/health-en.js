// modules/pets/data/en/health-en.js
// === MODULE: PETS — HEALTH ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "pets",
    category: "health",
    version: "1.0.0",
    lang: "en",
    title: "Health",
    description: "Fever, vomiting, diarrhea, coughing, refusing food — when to call the vet",
    icon: "🤒",
    color: "#9333ea"
  },

  questions: [
    {
      id: "symptom",
      type: "single",
      text: "What is the main symptom?",
      options: [
        { id: "fever", label: "🌡️ High fever / chills", tags: ["fever"] },
        { id: "vomit", label: "🤢 Vomiting / diarrhea / refusing food", tags: ["vomit"] },
        { id: "cough", label: "🫁 Coughing / sneezing / difficulty breathing", tags: ["cough"] },
        { id: "lethargy", label: "😴 Lethargy / drowsiness / won't get up", tags: ["lethargy"] },
        { id: "urine", label: "💧 Urination problems / blood in urine", tags: ["urine"] },
        { id: "skin", label: "🩹 Rash / itching / hair loss / dandruff", tags: ["skin"] }
      ]
    },
    {
      id: "pet_type",
      type: "single",
      text: "What kind of pet?",
      conditions: { symptom: ["fever", "vomit", "cough", "lethargy", "urine", "skin"] },
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_small", label: "🐰 Rabbit / hamster / guinea pig", tags: ["small"] }
      ]
    },
    {
      id: "duration",
      type: "single",
      text: "How long has this been going on?",
      conditions: { symptom: ["fever", "vomit", "cough", "lethargy", "urine", "skin"] },
      options: [
        { id: "duration_hours", label: "⏱️ A few hours", tags: ["hours"] },
        { id: "duration_day", label: "📅 1 day", tags: ["day"] },
        { id: "duration_days", label: "📅 2–3 days", tags: ["days"] },
        { id: "duration_week", label: "📅 A week or more", tags: ["week"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. FEVER
    // ============================================================
    {
      id: "pet_fever",
      title: "🌡️ High fever in pets",
      description: "Normal: dogs 37.5–39°C, cats 38–39.2°C. Above that — cause for concern.",
      conditions: { symptom: ["fever"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–6 hours",
      yield_estimate: "Temperature reduction / diagnosis",
      tags: ["fever", "health", "emergency"],
      steps: [
        "Take temperature rectally with a digital thermometer (lubricate with Vaseline). Don't use mercury — dangerous if broken. Note the reading and time",
        "Dog > 39.5°C, cat > 39.5°C, rabbit > 40°C — elevated. If > 40.5°C — emergency vet (life-threatening)",
        "Check for other symptoms: vomiting, diarrhea, coughing, lethargy, refusal to eat, excessive thirst, frequent urination. Write everything down — the vet will ask",
        "Provide a cool environment: room 20–22°C, cool floor, fan (don't blow directly on the pet). DON'T wipe with ice, DON'T bathe in cold water — causes vasospasm",
        "Offer water frequently in small amounts: water, still mineral water, chamomile tea. Dehydration with fever is more dangerous than the fever itself",
        "DON'T give human antipyretics (Paracetamol, Ibuprofen, Aspirin) — toxic to pets. Paracetamol is lethal to cats!",
        "If temperature doesn't drop within 2–3 hours, or is accompanied by vomiting, seizures, loss of consciousness — emergency vet",
        "Causes of high fever: infection, inflammation, poisoning, overheating, autoimmune disease. Only a vet can determine the cause"
      ],
      warnings: [
        "Paracetamol (Acetaminophen) is lethal to cats and dangerous to dogs. NEVER give human medications without vet consultation",
        "DON'T wipe with alcohol, vinegar, ice water — causes vasospasm, chills, worsens condition. Only a cool room and cool surfaces",
        "Low temperature (< 36°C for dogs, < 37°C for cats) is also dangerous. Shock, hypothermia, serious condition. Emergency vet, wrap in warm blankets",
        "In puppies and kittens under 3 months, temperature is unstable. But > 39.5°C in a baby — always a reason for an urgent vet visit"
      ]
    },
    // ============================================================
    // 2. VOMITING AND DIARRHEA
    // ============================================================
    {
      id: "pet_vomit_diarrhea",
      title: "🤢 Vomiting and diarrhea in pets — dehydration and infection",
      description: "Rotavirus, poisoning, pancreatitis, inedible food — causes vary. The main thing is to prevent dehydration.",
      conditions: { symptom: ["vomit"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2–12 hours",
      yield_estimate: "Stopping vomiting / diagnosis",
      tags: ["vomit", "poisoning", "infection"],
      steps: [
        "If vomiting blood (red or 'coffee grounds') — emergency vet. GI bleeding, ulcer, infection",
        "If diarrhea with blood, black stool, mucus — emergency. Parvovirus, coronavirus, dysentery, bleeding",
        "With vomiting — don't feed for 6–12 hours. Water — a few sips every 15–20 minutes. Too much water causes more vomiting",
        "For dogs: rehydration — Regidron solution or homemade: 1 liter water + 1 tsp salt + 2 tbsp sugar. Give frequently, in small amounts",
        "For cats: cats dehydrate faster than dogs. If vomiting/diarrhea > 2 times — see a vet. Cats cannot fast longer than 12 hours (risk of hepatic lipidosis)",
        "Diet after vomiting stops: boiled chicken/turkey + rice (dogs), wet food / baby food without onion (cats). Not milk, not fatty, not sweet",
        "If vomiting/diarrhea > 3 times a day, temperature > 39.5°C, drowsiness, no urine > 12 hours — emergency. Dehydration is life-threatening",
        "Check: did they eat something outside? Did you change food suddenly? Is there access to household chemicals, medications, poisons? Tell the vet"
      ],
      warnings: [
        "DON'T give human antiemetics (Cerucal, Metoclopramide) without consultation — they mask serious causes and can be toxic",
        "DON'T give milk for diarrhea — lactose worsens diarrhea. Exception: puppies/kittens on milk formula (but with diarrhea — see a vet)",
        "Cats often 'just regurgitate hair' — normal 1–2 times a week. But frequent vomiting, vomiting with bile, blood — always pathology",
        "Puppies and kittens dehydrate within 6–12 hours of vomiting/diarrhea. Critical. Don't wait for 'it'll pass'"
      ]
    },
    // ============================================================
    // 3. COUGH AND DIFFICULT BREATHING
    // ============================================================
    {
      id: "pet_cough_breath",
      title: "🫁 Coughing and difficulty breathing in pets",
      description: "Coughing, wheezing, open mouth, blue tongue — the respiratory system needs urgent help.",
      conditions: { symptom: ["cough"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–24 hours",
      yield_estimate: "Relief of breathing / diagnosis",
      tags: ["cough", "breathing", "emergency"],
      steps: [
        "If the pet is breathing with an open mouth, tongue/lips are blue, wheezing, can't lie down — emergency. Vet or clinic immediately",
        "Check: is there a foreign object in the mouth (bone, toy, ball)? If visible — try to remove with fingers or tweezers. DON'T probe blindly",
        "Provide fresh air: open a window, turn on a fan, remove smoke, perfumes, air fresheners. Overheating worsens breathing",
        "For dogs: 'goose' cough (barking, dry) — sign of tracheitis, infection, foreign body. Wet cough with phlegm — bronchitis, pneumonia",
        "For cats: coughing is rare. If a cat coughs — it's serious: asthma, heart failure, foreign body, tumor. Emergency vet",
        "Brachycephalic breeds (pugs, bulldogs, shih tzu) are prone to breathing problems. Heat, stress, exercise can cause suffocation. Keep cool, don't overexert",
        "DON'T give human cough syrups (Bronholitin, Ambroxol) — toxic or ineffective for pets. Only veterinary drugs",
        "If cough is accompanied by lethargy, refusal to eat, fever, weight loss — infection (distemper, parvovirus), heart disease, tumor. Don't delay"
      ],
      warnings: [
        "Blue tongue/lips = oxygen deficiency. Life-threatening. Emergency vet. Don't waste time on self-treatment",
        "DON'T give antibiotics on your own — cough can be viral, allergic, or cardiac. Antibiotics for viruses are useless and harmful",
        "Cats with asthma cough and 'arch their backs' — looks like hairball regurgitation, but without hair. This is asthma, requires inhalers and treatment",
        "Brachycephalics (pugs, bulldogs) often require palate surgery for normal breathing. Consult a veterinary surgeon"
      ]
    },
    // ============================================================
    // 4. LETHARGY
    // ============================================================
    {
      id: "pet_lethargy",
      title: "😴 Lethargy, drowsiness, won't get up — warning signs",
      description: "The pet lies down, doesn't respond, won't eat or drink, won't get up. This is not 'laziness' — it's serious.",
      conditions: { symptom: ["lethargy"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–6 hours",
      yield_estimate: "Diagnosis and help",
      tags: ["lethargy", "emergency", "health"],
      steps: [
        "Check response: call by name, offer a treat, clap your hands. If no response or weak — concerning. Check breathing and pulse",
        "Check breathing: dog 10–30 breaths/min, cat 20–30. Pulse: dog 60–120 bpm (depends on size), cat 120–140. Note",
        "Check gums: should be pink. If pale, white, yellow, blue — anemia, jaundice, cirrhosis, oxygen deprivation. Emergency vet",
        "Check sugar (if you have a glucometer): normal 3.3–6.6 mmol/L. Lower — hypoglycemia (especially in small breeds, puppies, cats). Give glucose (honey, sugar on gums)",
        "Check temperature. Low (< 36°C for dogs) — shock, hypothermia. High (> 40°C) — infection, inflammation. For low — wrap, for high — cool",
        "If the pet hasn't drunk > 12 hours (dog) or > 6 hours (cat/small) — risk of dehydration. Give water from a syringe without needle (a few ml every 15 minutes)",
        "Emergency vet. Lethargy is a symptom of: infection, poisoning, anemia, diabetes, kidney failure, tumor, heart failure. Only a vet can determine",
        "Transport: wrap in warm blanket, lay on side (to avoid choking on vomit), minimize shaking. For cats — dark carrier to reduce panic"
      ],
      warnings: [
        "DON'T give food and water if unconscious — may choke. Only if conscious and able to swallow",
        "DON'T wait 'until tomorrow'. Lethargy is a late symptom of many diseases. Cats especially: they hide illness until the end, and when they're 'lying down' — it's critical",
        "Puppies and kittens become lethargic from hypoglycemia (low sugar) within hours. This is fatal. Give honey on gums and emergency vet",
        "DON'T give human stimulants (caffeine, energy drinks, amphetamines) — they'll kill the pet. Only veterinary help"
      ]
    },
    // ============================================================
    // 5. URINATION PROBLEMS
    // ============================================================
    {
      id: "pet_urine_problems",
      title: "💧 Urination problems in pets",
      description: "Blood in urine, frequent/difficult urination, cat can't urinate — this is a urological emergency.",
      conditions: { symptom: ["urine"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–6 hours",
      yield_estimate: "Relief of acute condition",
      tags: ["urine", "urology", "emergency"],
      steps: [
        "If a cat (especially neutered) tries to urinate but can't, cries painfully, blood in urine — this is acute urinary retention. Life-threatening! Emergency vet",
        "For dogs: blood in urine, frequent urination, whining while urinating — cystitis, urolithiasis. Need urine analysis and ultrasound. Don't delay",
        "Check: any changes in behavior? Urinating on the floor, in inappropriate places? More than usual or almost not going? Note frequency and volume",
        "Don't give diuretics (Furosemide) without prescription — with urinary blockage, it can be fatal",
        "For cats: struvites and oxalates — common cause of urethral blockage. Diet: special food (Royal Canin Urinary, Hill's c/d). Only as prescribed by a vet",
        "Monitor general condition: lethargy, refusal to eat, vomiting — signs of kidney failure, blood urea. Emergency vet",
        "If a cat has urinary retention (can't urinate > 12 hours) — 100% emergency. Needs catheterization, bladder irrigation. Hours matter",
        "Prevention: clean water (filtered), wet food, regular urine analysis (every 6 months). Don't feed cheap dry food — it causes stones"
      ],
      warnings: [
        "Cat can't urinate > 12 hours = life-threatening. If you see the cat trying but can't — emergency vet. This won't 'wait until morning'",
        "DON'T give human medications — they mask symptoms and are dangerous for the kidneys",
        "DON'T switch a cat to dry food if there have been urinary problems. Only special urological diets",
        "If there's a lot of blood in the urine (clots visible) — this could be a tumor, trauma, severe infection. Emergency vet"
      ]
    },
    // ============================================================
    // 6. SKIN PROBLEMS
    // ============================================================
    {
      id: "pet_skin_problems",
      title: "🩹 Rash, itching, hair loss, dandruff",
      description: "Skin problems in pets are often related to allergies, parasites, or hormonal imbalance.",
      conditions: { symptom: ["skin"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Improved skin condition",
      tags: ["skin", "allergy", "dermatology"],
      steps: [
        "Check for parasites: fleas, mites, lice. If present — treat (see 'Parasites' section). Often itching and hair loss = fleas",
        "Check nutrition: allergy to chicken, beef, grains — common cause of skin issues. Switch to food with a novel protein source (salmon, lamb, turkey). Diet change — 2–4 weeks for improvement",
        "Check humidity (40–60%). Dry air causes dandruff, itching. Humidifier + fish oil (Omega-3) improve skin",
        "For dogs with demodicosis — characteristic bald patches, redness, crusts. Treatment: special drugs. Only as prescribed by a vet",
        "For cats with ringworm — circular bald patches, flaking. Contagious to humans! Work in gloves, isolate from other animals. Treatment: antifungal creams (Clotrimazole), UV lamp",
        "If itching is severe, pet scratches to blood — put on an E-collar to prevent trauma. Treat wounds with antiseptic (Chlorhexidine), apply anti-inflammatory ointment (Levomekol)",
        "Don't bathe frequently (max once a month). Frequent washing removes the skin's protective layer, dries it, worsens problems. Use mild hypoallergenic shampoos",
        "If no improvement in 2–4 weeks — see a veterinary dermatologist. May need allergy testing, hormone tests, biopsy. Skin diseases are chronic but treatable"
      ],
      warnings: [
        "DON'T use human hormonal ointments without prescription — applied thinly, the pet may lick it off. Only veterinary drugs",
        "DON'T pop pimples or pick scabs — introduces infection. Treat with antiseptic (Chlorhexidine) and show to a vet",
        "DON'T feed from the table with skin problems — allergens are often in food",
        "If hair loss is symmetrical — this may be a hormonal disorder (hypothyroidism, hypercortisolism). Requires blood hormone tests"
      ]
    }
  ]
});