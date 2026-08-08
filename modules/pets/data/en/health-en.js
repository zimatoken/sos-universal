// === MODULE: PETS — HEALTH (EN) ===
const healthDataEN = {
  category: "health",
  title: "🤒 Health",
  description: "Fever, vomiting, diarrhea, cough, refusal to eat — when to call the vet",

  questions: [
    {
      id: "symptom",
      text: "What is the main symptom?",
      type: "single",
      options: [
        { id: "fever", label: "High temperature / fever / chills", tags: ["fever"] },
        { id: "vomit", label: "Vomiting / diarrhea / refusal to eat", tags: ["vomit"] },
        { id: "cough", label: "Cough / sneezing / difficulty breathing", tags: ["cough"] },
        { id: "lethargy", label: "Lethargy / drowsiness / won't get up", tags: ["lethargy"] },
        { id: "urine", label: "Urination problems / blood in urine", tags: ["urine"] },
        { id: "skin", label: "Rash / itching / hair loss / dandruff", tags: ["skin"] }
      ]
    },
    {
      id: "pet_type",
      text: "What animal?",
      type: "single",
      options: [
        { id: "dog", label: "Dog", tags: ["dog"] },
        { id: "cat", label: "Cat", tags: ["cat"] },
        { id: "small", label: "Rabbit / hamster / guinea pig", tags: ["small"] }
      ]
    },
    {
      id: "duration",
      text: "How long has it been going on?",
      type: "single",
      options: [
        { id: "hours", label: "Several hours", tags: ["hours"] },
        { id: "day", label: "1 day", tags: ["day"] },
        { id: "days", label: "2–3 days", tags: ["days"] },
        { id: "week", label: "A week or more", tags: ["week"] }
      ]
    }
  ],

  solutions: [
    {
      id: "pet_fever",
      title: "🌡️ High temperature in a pet",
      description: "Normal: dog 37.5–39°C, cat 38–39.2°C. Higher — cause for concern.",
      conditions: { symptom: ["fever"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Temperature reduction / diagnosis",
      tags: ["fever", "health", "emergency"],
      steps: [
        "Measure temperature rectally with an electronic thermometer (lubricated with vaseline). Do not use mercury — dangerous if broken. Record the number and time",
        "Dog > 39.5°C, cat > 39.5°C, rabbit > 40°C — elevated temperature. If > 40.5°C — go to the vet immediately (life-threatening)",
        "Check other symptoms: vomiting, diarrhea, cough, lethargy, refusal to eat, thirst, frequent urination. Write everything down — the vet will ask",
        "Ensure coolness: room 20–22°C, cool floor, fan (don't point directly at the animal). DO NOT rub with ice, DO NOT bathe in cold water — this causes vasospasm",
        "Give water frequently, in small amounts: water, still mineral water, chamomile decoction. Dehydration during fever is more dangerous than the temperature itself",
        "DO NOT give human antipyretics (Paracetamol, Ibuprofen, Aspirin) — they are toxic to animals. Paracetamol is fatal for cats!",
        "If temperature does not decrease within 2–3 hours, or is accompanied by vomiting, seizures, loss of consciousness — emergency vet care",
        "Causes of high temperature: infection, inflammation, poisoning, overheating, autoimmune disease. Only the vet can determine the cause"
      ],
      warnings: [
        "Paracetamol (Acetaminophen) is fatal for cats and dangerous for dogs. Never give human medicines without vet consultation",
        "DO NOT rub with alcohol, vinegar, ice water — this causes vasospasm, chills, worsening condition. Only cool room and cool surfaces",
        "Low temperature (< 36°C in dogs, < 37°C in cats) is also dangerous. This is shock, hypothermia, severe condition. Go to the vet immediately, wrap in warmth",
        "Puppies and kittens under 3 months have unstable temperature. But > 39.5°C in a baby — always a reason for urgent visit to the vet"
      ]
    },
    {
      id: "pet_vomit_diarrhea",
      title: "🤢 Vomiting and diarrhea in a pet — dehydration and infection",
      description: "Rotavirus, poisoning, pancreatitis, foreign food — causes vary. Main thing — don't let dehydration occur.",
      conditions: { symptom: ["vomit"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2–12 hours",
      yield_estimate: "Stopping vomiting / diagnosis",
      tags: ["vomit", "poisoning", "infection"],
      steps: [
        "If vomiting with blood (red or 'coffee grounds') — emergency vet care immediately. This is GI bleeding, ulcer, infection",
        "If diarrhea with blood, black stool, mucus — emergency care. Parvovirus, coronavirus, dysentery, bleeding",
        "For vomiting — do not give food for 6–12 hours. Water — a few sips every 15–20 minutes. Too much water will cause new vomiting",
        "For dogs: rehydration — Regidron solution (for children) or homemade: 1 liter water + 1 tsp salt + 2 tbsp sugar. Give frequently, in small amounts",
        "For cats: cats dehydrate faster than dogs. If vomiting/diarrhea > 2 times — go to the vet. Cats cannot fast longer than 12 hours (risk of hepatic lipidosis)",
        "Diet after vomiting stops: boiled chicken/turkey + rice (dogs), diet food / baby puree without onion (cats). No milk, no fatty, no sweet",
        "If vomiting/diarrhea > 3 times a day, temperature > 39.5°C, lethargy, no urine > 12 hours — emergency care. Dehydration threatens life",
        "Check: did it eat something outside? Was food changed suddenly? Is there access to household chemicals, medicines, poisons? Tell the vet"
      ],
      warnings: [
        "DO NOT give human antiemetics (Cerucal, Metoclopramide) without vet prescription — they mask serious causes and may be toxic",
        "DO NOT give milk for diarrhea — lactose worsens diarrhea. Exception: puppies/kittens on milk formula (but with diarrhea — go to the vet)",
        "Cats often 'just expel hairballs' when vomiting — this is normal 1–2 times a week. But frequent vomiting, vomiting with bile, blood — always pathology",
        "Puppies and kittens dehydrate within 6–12 hours with vomiting/diarrhea. This is critical. Do not wait for 'it will pass on its own'"
      ]
    },
    {
      id: "pet_cough_breath",
      title: "🫁 Cough and difficulty breathing in a pet",
      description: "Cough, wheezing, open mouth, blue tongue — the respiratory system needs immediate help.",
      conditions: { symptom: ["cough"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–24 hours",
      yield_estimate: "Breathing relief / diagnosis",
      tags: ["cough", "breathing", "emergency"],
      steps: [
        "If the pet breathes with open mouth, tongue/gums are blue, wheezes, cannot lie down — this is an emergency. Go to the vet immediately or call emergency",
        "Check: is there a foreign body in the mouth (bone, toy, ball)? If visible — try to remove with fingers or tweezers. DO NOT poke blindly",
        "Ensure fresh air: open window, turn on fan, remove smoke, perfume, air fresheners. Overheating worsens breathing",
        "For dogs: 'goose honk' cough (barking, dry) — sign of tracheitis, infection, foreign body. Wet cough with phlegm — bronchitis, pneumonia",
        "For cats: coughing is rare. If a cat coughs — it's serious: asthma, heart failure, foreign body, tumor. Go to the vet immediately",
        "Brachycephalic breeds (pug, bulldog, shih tzu) are prone to breathing problems. Heat, stress, physical exertion can cause suffocation. Keep cool, don't overexert",
        "DO NOT give human cough syrups (Broncholitin, Ambroxol) — they are toxic or ineffective for animals. Only veterinary drugs",
        "If cough is accompanied by lethargy, refusal to eat, temperature, weight loss — this is infection (distemper, parvovirus), heart, cancer. Do not delay"
      ],
      warnings: [
        "Blue tongue / gums = oxygen deficiency. This is deadly dangerous. Go to the vet immediately. Don't waste time on self-treatment",
        "DO NOT give antibiotics on your own — cough may be viral, allergic, cardiac. Antibiotics are useless for viruses and harmful",
        "Cats with asthma cough and 'arch their back' — looks like hairball vomiting but without hair. This is asthma, requires inhalers and treatment",
        "Brachycephalic dogs (pugs, bulldogs) — palate surgery is often necessary for normal breathing. Consult with veterinary surgeon"
      ]
    },
    {
      id: "pet_lethargy",
      title: "😴 Lethargy, drowsiness, won't get up — alarming signs",
      description: "The pet lies down, doesn't react, won't eat, won't drink, won't get up. This is not 'laziness' — this is serious.",
      conditions: { symptom: ["lethargy"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Diagnosis and help",
      tags: ["lethargy", "emergency", "health"],
      steps: [
        "Check reaction: call by name, offer a treat, clap. If no reaction or weak reaction — this is alarming. Check breathing and pulse",
        "Check breathing: dog 10–30 breaths/min, cat 20–30. Check pulse: dog 60–120 bpm (depends on size), cat 120–140. Record",
        "Check gums: should be pink. If pale, white, yellow, blue — this is anemia, jaundice, cirrhosis, oxygen starvation. Emergency care",
        "Check blood sugar (if you have a glucometer): normal 3.3–6.6 mmol/L. Below — hypoglycemia (especially in small breeds, puppies, cats). Give glucose (honey, sugar on gums)",
        "Check temperature. Low (< 36°C in dogs) — shock, hypothermia. High (> 40°C) — infection, inflammation. Wrap for low temperature, cool for high",
        "If pet hasn't drunk > 12 hours (dog) or > 6 hours (cat / small) — risk of dehydration. Force-feed water with a needleless syringe (a few ml every 15 minutes)",
        "Go to the vet immediately. Lethargy is a symptom of: infection, poisoning, anemia, diabetes, kidney failure, tumor, heart failure. Only the doctor can determine",
        "Transportation: wrap in warm blanket, place on side (to prevent choking on vomit), minimize shaking. For cat — dark carrier so it doesn't panic"
      ],
      warnings: [
        "DO NOT give food and water if pet is unconscious — it may choke. Only if conscious and can swallow",
        "DO NOT wait 'we'll go to the vet tomorrow'. Lethargy is a late symptom of many diseases. In cats especially: they mask illness until the end, and when they 'lie down' — it's already critical",
        "Puppies and kittens become lethargic from hypoglycemia (low sugar) within a few hours. This is fatal. Give honey on gums and go to the vet immediately",
        "DO NOT give human stimulants (caffeine, energy drinks, amphetamines) — this will kill the pet. Only veterinary care"
      ]
    }
  ]
};

window.healthDataEN = healthDataEN;
