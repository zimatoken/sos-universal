// === MODULE: PETS — HEALTH ===
const petHealthDataEn = {
  category: "health",
  title: "🤒 Health",
  description: "Temperature, vomiting, diarrhea, coughing, refusing food — when to call the vet",

  questions: [
    {
      id: "symptom",
      text: "What is the main symptom?",
      type: "single",
      options: [
        { id: "fever", label: "🌡️ High temperature / fever / chills", tags: ["fever"] },
        { id: "vomit", label: "🤢 Vomiting / diarrhea / refusing food", tags: ["vomit"] },
        { id: "cough", label: "🫁 Coughing / sneezing / difficulty breathing", tags: ["cough"] },
        { id: "lethargy", label: "😴 Lethargy / sleepiness / can't get up", tags: ["lethargy"] },
        { id: "urine", label: "💧 Urination problems / blood in urine", tags: ["urine"] },
        { id: "skin", label: "🩹 Rash / itching / hair loss / dandruff", tags: ["skin"] }
      ]
    },
    {
      id: "pet_type",
      text: "What kind of pet?",
      type: "single",
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_small", label: "🐰 Rabbit / hamster / guinea pig", tags: ["small"] }
      ]
    },
    {
      id: "duration",
      text: "How long has this been going on?",
      type: "single",
      options: [
        { id: "duration_hours", label: "A few hours", tags: ["hours"] },
        { id: "duration_day", label: "1 day", tags: ["day"] },
        { id: "duration_days", label: "2–3 days", tags: ["days"] },
        { id: "duration_week", label: "A week or more", tags: ["week"] }
      ]
    }
  ],

  solutions: [
    {
      id: "pet_fever",
      title: "🌡️ High fever in your pet",
      description: "Normal: dog 37.5–39°C, cat 38–39.2°C. Above that — reason for concern.",
      conditions: { symptom: ["fever"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Temperature reduction / diagnosis",
      tags: ["fever", "health", "emergency"],
      steps: [
        "Take temperature rectally with a digital thermometer (lubricated with Vaseline). Don't use mercury — dangerous if broken. Write down the number and time",
        "Dog > 39.5°C, cat > 39.5°C, rabbit > 40°C — elevated temperature. If > 40.5°C — immediate vet care (life-threatening)",
        "Check for other symptoms: vomiting, diarrhea, coughing, lethargy, refusal to eat, excessive thirst, frequent urination. Write everything down — the vet will ask",
        "Provide a cool environment: room 20–22°C, cool floor, fan (don't blow directly on the animal). DO NOT wipe with ice, DO NOT bathe in cold water — this causes vasospasm",
        "Give water frequently, in small amounts: water, still mineral water, chamomile tea. Dehydration during fever is more dangerous than the fever itself",
        "DO NOT give human fever reducers (Acetaminophen, Ibuprofen, Aspirin) — they are toxic to animals. Acetaminophen is lethal to cats!",
        "If temperature doesn't drop within 2–3 hours, or is accompanied by vomiting, seizures, loss of consciousness — emergency vet care",
        "Causes of high fever: infection, inflammation, poisoning, overheating, autoimmune disease. Only a vet can determine the cause"
      ],
      warnings: [
        "Acetaminophen (Paracetamol) is lethal to cats and dangerous to dogs. NEVER give human medications without veterinary consultation",
        "DO NOT wipe with alcohol, vinegar, ice water — this causes vasospasm, chills, worsens the condition. Only a cool room and cool surfaces",
        "Low temperature (< 36°C for dogs, < 37°C for cats) is also dangerous. This is shock, hypothermia, serious condition. Immediate vet care, wrap in warm blankets",
        "Puppies and kittens under 3 months have unstable temperature. But > 39.5°C in a baby — always a reason for an urgent vet visit"
      ]
    },
    {
      id: "pet_vomit_diarrhea",
      title: "🤢 Vomiting and diarrhea in your pet — dehydration and infection",
      description: "Rotavirus, poisoning, pancreatitis, foreign food — causes vary. The main thing is to prevent dehydration.",
      conditions: { symptom: ["vomit"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2–12 hours",
      yield_estimate: "Stopping vomiting / diagnosis",
      tags: ["vomit", "poisoning", "infection"],
      steps: [
        "If vomiting with blood (red or 'coffee grounds') — emergency vet care immediately. This is GI bleeding, ulcer, infection",
        "If diarrhea with blood, black stool, mucus — emergency care. Parvovirus, coronavirus, dysentery, bleeding",
        "For vomiting — don't give food for 6–12 hours. Water — a few sips every 15–20 minutes. Too much water will cause more vomiting",
        "For dogs: rehydration — Rehydration solution (for children) or homemade: 1 liter water + 1 tsp salt + 2 tbsp sugar. Give frequently, in small amounts",
        "For cats: cats dehydrate faster than dogs. If vomiting/diarrhea > 2 times — see a vet. Cats can't fast longer than 12 hours (risk of hepatic lipidosis)",
        "Diet after vomiting stops: boiled chicken/turkey + rice (dogs), wet food / baby food without onions (cats). No milk, no fat, no sweets",
        "If vomiting/diarrhea > 3 times a day, temperature > 39.5°C, drowsiness, no urine > 12 hours — emergency care. Dehydration is life-threatening",
        "Check: did they eat something outside? Did you change food suddenly? Is there access to household chemicals, medications, poisons? Tell the vet"
      ],
      warnings: [
        "DO NOT give human antiemetics (Cerucal, Metoclopramide) without veterinary advice — they mask serious causes and may be toxic",
        "DO NOT give milk for diarrhea — lactose worsens diarrhea. Exception: puppies/kittens on milk formula (but with diarrhea — see a vet)",
        "Cats often 'just throw up hair' — this is normal 1–2 times a week. But frequent vomiting, vomiting with bile, blood — always pathology",
        "Puppies and kittens dehydrate in 6–12 hours with vomiting/diarrhea. This is critical. Don't wait for 'it will pass'"
      ]
    },
    {
      id: "pet_cough_breath",
      title: "🫁 Coughing and difficulty breathing in your pet",
      description: "Coughing, wheezing, open mouth, blue tongue — the respiratory system needs immediate help.",
      conditions: { symptom: ["cough"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–24 hours",
      yield_estimate: "Breathing relief / diagnosis",
      tags: ["cough", "breathing", "emergency"],
      steps: [
        "If your pet is breathing with an open mouth, tongue/lips blue, wheezing, can't lie down — this is an emergency. Immediate vet care or emergency services",
        "Check: is there a foreign object in the mouth (bone, toy, ball)? If you see it — try to remove with fingers or tweezers. DO NOT poke blindly",
        "Provide fresh air: open a window, turn on a fan, remove smoke, perfume, air fresheners. Overheating worsens breathing",
        "For dogs: 'goose honk' cough (barking, dry) — sign of tracheitis, infection, foreign object. Wet cough with phlegm — bronchitis, pneumonia",
        "For cats: coughing is rare. If a cat is coughing — it's serious: asthma, heart failure, foreign object, tumor. Immediate vet care",
        "Brachycephalic breeds (pugs, bulldogs, shih-tzus) are prone to breathing problems. Heat, stress, exercise can cause asphyxiation. Keep in cool, don't overexert",
        "DO NOT give human cough syrups (Broncholitin, Ambroxol) — they are toxic or ineffective for animals. Only veterinary drugs",
        "If coughing is accompanied by lethargy, refusal to eat, fever, weight loss — it's infection (distemper, parvovirus), heart disease, cancer. Don't delay"
      ],
      warnings: [
        "Blue tongue / lips = lack of oxygen. This is deadly dangerous. Immediate vet care. Don't waste time on self-treatment",
        "DO NOT give antibiotics yourself — coughing may be viral, allergic, or cardiac. Antibiotics are useless for viruses and harmful",
        "Cats with asthma cough and 'arch their back' — resembles hairball vomiting, but without hair. This is asthma, requires inhalers and treatment",
        "Brachycephalic dogs (pugs, bulldogs) — palate surgery is often necessary for normal breathing. Consult a veterinary surgeon"
      ]
    },
    {
      id: "pet_lethargy",
      title: "😴 Lethargy, sleepiness, can't get up — warning signs",
      description: "Your pet is lying down, not responding, not eating, not drinking, not getting up. This is not 'laziness' — it's serious.",
      conditions: { symptom: ["lethargy"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Diagnosis and help",
      tags: ["lethargy", "emergency", "health"],
      steps: [
        "Check response: call their name, offer a treat, clap your hands. If no response or weak response — concerning. Check breathing and pulse",
        "Check breathing: dog 10–30 breaths/min, cat 20–30. Check pulse: dog 60–120 bpm (depends on size), cat 120–140. Write it down",
        "Check gums: should be pink. If pale, white, yellow, blue — anemia, jaundice, cirrhosis, oxygen deprivation. Emergency care",
        "Check blood sugar (if you have a glucose meter): normal 3.3–6.6 mmol/L. Below — hypoglycemia (especially in small breeds, puppies, cats). Give glucose (honey, sugar on gums)",
        "Check temperature. Low (< 36°C for dogs) — shock, hypothermia. High (> 40°C) — infection, inflammation. Wrap for low, cool for high",
        "If pet hasn't drunk > 12 hours (dog) or > 6 hours (cat/small) — risk of dehydration. Force-feed water with a syringe without needle (a few ml every 15 minutes)",
        "Immediately see a vet. Lethargy is a symptom of: infection, poisoning, anemia, diabetes, kidney failure, tumor, heart failure. Only a doctor can determine",
        "Transport: wrap in a warm blanket, lay on their side (to avoid choking on vomit), minimize shaking. For cats — a dark carrier to avoid panic"
      ],
      warnings: [
        "DO NOT give food and water if the pet is unconscious — they may choke. Only if conscious and able to swallow",
        "DO NOT wait for 'tomorrow we'll go to the vet'. Lethargy is a late symptom of many diseases. Cats especially: they mask illness until the end, and when they're 'lying down' — it's already critical",
        "Puppies and kittens become lethargic from hypoglycemia (low blood sugar) within hours. This is deadly. Give honey on gums and immediately see a vet",
        "DO NOT give human stimulants (caffeine, energy drinks, amphetamines) — they will kill your pet. Only veterinary care"
      ]
    },
    {
      id: "pet_urine_problems",
      title: "💧 Urination problems in your pet",
      description: "Blood in urine, frequent/difficult urination, cat can't pee — this is a urological emergency.",
      conditions: { symptom: ["urine"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Relief of acute condition",
      tags: ["urine", "urology", "emergency"],
      steps: [
        "If a cat (especially neutered) tries to pee but can't, cries pitifully, urine with blood — this is acute urinary retention. Life-threatening! Immediate vet care",
        "For dogs: blood in urine, frequent urination, whining while urinating — cystitis, urolithiasis. Need urine analysis and ultrasound. Don't wait",
        "Check: are there any behavioral changes? Peeing on the floor, in inappropriate places? Could be more than usual or almost not going? Record frequency and volume",
        "Do not give diuretics (Furosemide) without prescription — it can be deadly for urinary tract obstruction",
        "For cats: struvites and oxalates — common cause of urethral blockage. Diet: special food (Royal Canin Urinary, Hill's c/d). Only by veterinary prescription",
        "Monitor general conditions: lethargy, refusal to eat, vomiting — signs of kidney failure, urea in the blood. Immediate vet care",
        "If a cat has urinary retention (can't pee > 12 hours) — this is 100% emergency. Needs catheterization, bladder flushing. Every hour counts",
        "Prevention: clean water (filtered), wet food, regular urine analysis (every 6 months). Don't feed cheap dry food — it causes stones"
      ],
      warnings: [
        "Cat can't pee > 12 hours = deadly dangerous. If you see a cat trying but can't — rush to the vet. This won't 'wait until morning'",
        "DO NOT give human drugs (Canephron, Furosemide) — they mask symptoms and are dangerous for kidneys",
        "DO NOT switch a cat to dry food if they've already had urinary problems. Only special urinary diets",
        "If there's a lot of blood in urine (clots visible) — it could be a tumor, trauma, severe infection. Immediate vet care"
      ]
    },
    {
      id: "pet_skin_problems",
      title: "🩹 Rash, itching, hair loss, dandruff",
      description: "Skin problems in animals are often related to allergies, parasites, or hormonal imbalance.",
      conditions: { symptom: ["skin"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–4 weeks",
      yield_estimate: "Skin improvement",
      tags: ["skin", "allergy", "dermatology"],
      steps: [
        "Check for parasites: fleas, ticks, lice. If present — treat (see 'Parasites' section). Often itching and hair loss = fleas",
        "Check the food: allergy to chicken, beef, grains — common cause of skin problems. Switch to food with a new protein source (salmon, lamb, turkey). Diet change — 2–4 weeks for improvement",
        "Check humidity (40–60%). Dry air causes dandruff, itching. Humidifier + fish oil (Omega-3) improve skin",
        "For dogs with demodicosis (skin mites) — characteristic bald patches, redness, crusts. Treatment: special drugs (Bravecto, Simparica). Only by veterinary prescription",
        "For cats with ringworm — circular bald patches, scaling. Contagious to humans! Wear gloves, isolate from other animals. Treatment: antifungal ointments (Clotrimazole), UV lamp",
        "If itching is severe, pet scratches until bleeding — put on a collar to prevent skin trauma. Treat wounds with antiseptic (Chlorhexidine), apply anti-inflammatory ointment (Levomekol)",
        "Don't bathe frequently (once a month maximum). Frequent washing removes the skin's protective layer, dries, worsens problems. Use mild hypoallergenic shampoos (with aloe, oats)",
        "If it doesn't improve in 2–4 weeks — see a veterinary dermatologist. Allergy testing, hormone testing, biopsy may be needed. Skin diseases are chronic but treatable"
      ],
      warnings: [
        "DO NOT use human hormone ointments (Hydrocortisone) without prescription — they are applied thinly, and the animal may lick it off. Only veterinary drugs",
        "DO NOT pop pimples, don't scratch crusts — you'll introduce infection. Treat with antiseptic (Chlorhexidine) and show to a doctor",
        "DO NOT feed your dog/cat 'from the table' for skin problems — often allergens are in food",
        "If hair loss is symmetrical (e.g., on the sides) — it may be a hormonal disorder (hypothyroidism, hyperadrenocorticism). Requires blood hormone test"
      ]
    }
  ]
};

// ===== EXPORT =====
window.petHealthDataEn = petHealthDataEn;
