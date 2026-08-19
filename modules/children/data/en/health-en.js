// modules/children/data/en/health-en.js
// === MODULE: CHILDREN — HEALTH ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "children",
    category: "health",
    version: "1.0.0",
    lang: "en",
    title: "🤒 Health",
    description: "Fever, vomiting, allergy, seizures, breathing, pain — when to call the doctor",
    icon: "🤒",
    color: "#db2777"
  },

  questions: [
    {
      id: "symptom",
      type: "single",
      text: "What is the main symptom in your child?",
      options: [
        { id: "fever", label: "🌡️ High fever", tags: ["fever"] },
        { id: "vomit", label: "🤢 Vomiting / diarrhea", tags: ["vomit"] },
        { id: "allergy", label: "🤧 Rash / swelling / hives", tags: ["allergy"] },
        { id: "seizure", label: "⚡ Seizures / unconsciousness", tags: ["seizure"] },
        { id: "breath", label: "🫁 Difficulty breathing / cough", tags: ["breath"] },
        { id: "pain", label: "🤕 Severe pain (abdomen, head, ear)", tags: ["pain"] },
        { id: "rash_fever", label: "🩹 Rash with fever", tags: ["rash_fever"] },
        { id: "cough_fever", label: "🫁 Cough with fever", tags: ["cough_fever"] }
      ]
    },
    {
      id: "age",
      type: "single",
      text: "How old is your child?",
      conditions: { symptom: ["fever", "vomit", "allergy", "seizure", "breath", "pain", "rash_fever", "cough_fever"] },
      options: [
        { id: "infant", label: "👶 Infant (0–1 year)", tags: ["infant"] },
        { id: "toddler", label: "🧒 1–3 years", tags: ["toddler"] },
        { id: "preschool", label: "🧒 3–7 years", tags: ["preschool"] },
        { id: "school", label: "🧑 7–12 years", tags: ["school"] },
        { id: "teen", label: "🧑 12+ years", tags: ["teen"] }
      ]
    },
    {
      id: "temp_exact",
      type: "single",
      text: "What is the exact temperature?",
      conditions: { symptom: ["fever", "rash_fever", "cough_fever"] },
      options: [
        { id: "temp_37_38", label: "🌡️ 37.0–38.0°C (low-grade)", tags: ["temp_37_38"] },
        { id: "temp_38_39", label: "🌡️ 38.0–39.0°C (fever)", tags: ["temp_38_39"] },
        { id: "temp_39_plus", label: "🌡️ Over 39.0°C (high)", tags: ["temp_39_plus"] },
        { id: "temp_unknown", label: "❓ Haven't measured", tags: ["temp_unknown"] }
      ]
    },
    {
      id: "consciousness",
      type: "single",
      text: "Is the child conscious?",
      conditions: { symptom: ["fever", "vomit", "allergy", "seizure", "breath", "pain", "rash_fever", "cough_fever"] },
      options: [
        { id: "conscious_yes", label: "✅ Yes, responsive", tags: ["conscious_yes"] },
        { id: "conscious_confused", label: "⚠️ Drowsy / lethargic / not responding", tags: ["conscious_confused"] },
        { id: "conscious_no", label: "❌ Unconscious", tags: ["conscious_no"] }
      ]
    },
    {
      id: "has_drunk",
      type: "single",
      text: "Has the child drunk water in the last 6 hours?",
      conditions: { symptom: ["fever", "vomit", "seizure", "breath", "pain", "rash_fever", "cough_fever"] },
      options: [
        { id: "drunk_yes", label: "✅ Yes, normally", tags: ["drunk_yes"] },
        { id: "drunk_less", label: "⚠️ Yes, but little", tags: ["drunk_less"] },
        { id: "drunk_no", label: "❌ No, refusing to drink", tags: ["drunk_no"] }
      ]
    },
    {
      id: "duration",
      type: "single",
      text: "How long have the symptoms lasted?",
      conditions: { symptom: ["fever", "vomit", "allergy", "seizure", "breath", "pain", "rash_fever", "cough_fever"] },
      options: [
        { id: "less_1h", label: "Less than 1 hour", tags: ["acute"] },
        { id: "hours", label: "Several hours", tags: ["hours"] },
        { id: "days", label: "1–3 days", tags: ["days"] },
        { id: "week", label: "More than 3 days", tags: ["week"] }
      ]
    },
    {
      id: "vaccinations",
      type: "single",
      text: "Is the child vaccinated according to schedule?",
      conditions: { symptom: ["fever", "rash_fever", "cough_fever"] },
      options: [
        { id: "vax_yes", label: "✅ Yes, all vaccinations done", tags: ["vax_yes"] },
        { id: "vax_no", label: "❌ No, missed or not done", tags: ["vax_no"] },
        { id: "vax_unknown", label: "❓ Don't know", tags: ["vax_unknown"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. HIGH FEVER
    // ============================================================
    {
      id: "high_fever_action",
      title: "🌡️ High fever — when to worry",
      description: "Fever is a protective response. But in infants and at high temperatures — it's dangerous.",
      conditions: { symptom: ["fever"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Temperature reduced / diagnosis",
      tags: ["fever", "health", "emergency"],
      steps: [
        "Measure temperature with a digital thermometer. Record the exact number and time.",
        "Under 3 months: temperature > 38°C — IMMEDIATE doctor/ambulance.",
        "3–36 months: > 39°C or > 38.5°C for over 24 hours — doctor. If seizures — ambulance.",
        "Over 3 years: > 39.5°C or > 39°C for over 3 days — doctor.",
        "Reduce fever if > 38.5°C and child feels unwell. Paracetamol (10–15 mg/kg) or Ibuprofen (5–10 mg/kg). NO aspirin!",
        "Wipe with warm water (not cold, not vinegar), room 20–22°C, light clothing.",
        "Give fluids frequently, in small amounts: water, compote, tea.",
        "If temperature doesn't drop within 1 hour after antipyretic — ambulance."
      ],
      warnings: [
        "DON'T give aspirin to children — Reye's syndrome.",
        "DON'T wipe with vinegar, alcohol, ice water — causes vasospasm.",
        "DON'T wrap the child to 'sweat' — overheating.",
        "Febrile seizures — ambulance immediately. Lay on side, don't put anything in the mouth."
      ]
    },

    // ============================================================
    // 2. FEVER IN INFANT
    // ============================================================
    {
      id: "fever_infant",
      title: "👶 Fever in an infant — emergency",
      description: "In children under 1 year, immunity is immature. Even a small fever can be dangerous.",
      conditions: { symptom: ["fever"], age: ["infant"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Emergency diagnosis",
      tags: ["fever", "infant", "emergency"],
      steps: [
        "If an infant (0–12 months) has temperature > 38°C — IMMEDIATELY call an ambulance.",
        "Infants don't have 'just a fever'. It could be meningitis, sepsis, pneumonia, UTI.",
        "Don't wait for it to 'pass' — condition worsens in hours.",
        "Before ambulance arrives: undress to diaper, ventilate the room, give water (if not vomiting).",
        "Paracetamol or ibuprofen — only as prescribed by a doctor. Dosage strictly by weight!",
        "If seizures, lethargy, refusal to eat, crying without tears — tell the doctor immediately."
      ],
      warnings: [
        "Fever in an infant is ALWAYS an emergency.",
        "DON'T give medication without a doctor's consultation.",
        "DON'T wrap the infant — light clothing, cool room (20–22°C).",
        "DON'T bathe the child in warm water — dangerous for infants."
      ]
    },

    // ============================================================
    // 3. VOMITING AND DIARRHEA
    // ============================================================
    {
      id: "vomit_diarrhea",
      title: "🤢 Vomiting and diarrhea — dehydration and infection",
      description: "Rotavirus, poisoning, appendicitis — causes vary. Main thing: prevent dehydration.",
      conditions: { symptom: ["vomit"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–6 hours",
      yield_estimate: "Vomiting stopped / diagnosis",
      tags: ["vomit", "poisoning", "infection"],
      steps: [
        "If vomiting is green (bile) or with blood — AMBULANCE IMMEDIATELY.",
        "If diarrhea with blood, black stool — AMBULANCE.",
        "During vomiting — no food or drink for 30–60 minutes. Then — 1 teaspoon of water/Regidron every 5 minutes.",
        "Regidron: 1 sachet per 1 liter of water. Give frequently, in small amounts.",
        "If no Regidron — homemade solution: 1 liter water + 1 tsp salt + 8 tsp sugar.",
        "Diet: 4–6 hours after vomiting stops — water-based cereals, crackers, banana, applesauce.",
        "If vomiting/diarrhea > 6 times per hour, fever > 38.5°C, drowsiness, no urine > 6 hours — AMBULANCE."
      ],
      warnings: [
        "DON'T give antiemetics without a doctor — mask serious causes.",
        "DON'T give adsorbents with intestinal obstruction — worsen it.",
        "DON'T give antibiotics yourself — most infections are viral.",
        "Dehydration develops quickly: dry lips, no tears, sunken fontanelle, no urine 6+ hours."
      ]
    },

    // ============================================================
    // 4. DEHYDRATION IN INFANT
    // ============================================================
    {
      id: "dehydration_infant",
      title: "💧 Dehydration in infants — signs and actions",
      description: "Infants lose water faster than adults. Dehydration can occur in 6–12 hours.",
      conditions: { symptom: ["vomit"], age: ["infant"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 hours",
      yield_estimate: "Fluid balance restored",
      tags: ["dehydration", "infant", "emergency"],
      steps: [
        "Signs of dehydration: dry lips, no tears, sunken fontanelle, dark urine or no urine 6+ hours.",
        "If no urine 6+ hours — IMMEDIATELY see a doctor. Critical dehydration.",
        "If child refuses to drink — give from a syringe without needle, 1–2 ml every 5 minutes.",
        "Use Regidron or special oral rehydration solutions.",
        "If vomiting prevents drinking — call an ambulance. IV fluids may be needed.",
        "If 5–10% weight loss — critical dehydration, requires hospitalization."
      ],
      warnings: [
        "Dehydration in infants is life-threatening. Don't wait for it to 'pass'.",
        "DON'T give juice, tea, compote — they may worsen diarrhea.",
        "DON'T force-feed fluids — child may choke."
      ]
    },

    // ============================================================
    // 5. ALLERGY AND ANAPHYLAXIS
    // ============================================================
    {
      id: "allergy_emergency",
      title: "🤧 Allergy and anaphylaxis — emergency help",
      description: "Hives are manageable. Angioedema and anaphylaxis are deadly.",
      conditions: { symptom: ["allergy"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–10 minutes",
      yield_estimate: "Allergic reaction stopped",
      tags: ["allergy", "anaphylaxis", "emergency"],
      steps: [
        "Mild allergy (hives, sneezing): give antihistamine (Zyrtec, Fenistil, Suprastin — by age).",
        "Angioedema (swollen lips, tongue, eyelids) — AMBULANCE IMMEDIATELY. Give antihistamine, apply cold.",
        "Anaphylaxis (difficulty breathing, wheezing, pallor, unconsciousness) — AMBULANCE. Deadly.",
        "If you have an epinephrine auto-injector (EpiPen) — inject into the thigh through clothing.",
        "Lay the child on their back, legs elevated (for shock). If vomiting — on side.",
        "After anaphylaxis — 24-hour hospitalization (biphasic anaphylaxis).",
        "Find the cause: what they ate, used, insect bite. Keep packaging, take photos."
      ],
      warnings: [
        "Anaphylaxis kills in 5–30 minutes. Epinephrine is the only cure.",
        "DON'T give food, water, oral medication with tongue swelling — may choke.",
        "EpiPen: expiration 12–18 months. Check the date."
      ]
    },

    // ============================================================
    // 6. SEIZURES
    // ============================================================
    {
      id: "seizure_first_aid",
      title: "⚡ Seizures / unconsciousness — first aid",
      description: "Seizures are scary but usually safe. The main thing is correct actions.",
      conditions: { symptom: ["seizure"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Safe seizure ending",
      tags: ["seizure", "epilepsy", "emergency"],
      steps: [
        "Don't panic. Most seizures last 1–3 minutes and resolve on their own.",
        "Lay the child on their side — prevents tongue blockage and choking.",
        "Remove dangerous objects: sharp corners, sharp items. Place something soft under the head.",
        "DON'T put anything in the mouth — will break teeth, cause vomiting, choking.",
        "DON'T restrain the child — will cause fractures, dislocations.",
        "Time it. If seizure > 5 minutes — AMBULANCE IMMEDIATELY.",
        "After seizure — child will be sleepy, confused. Lay to sleep, monitor breathing.",
        "First seizure in life — ambulance and tests: EEG, MRI, blood tests."
      ],
      warnings: [
        "DON'T put anything in the mouth during seizures — more dangerous than the seizure itself.",
        "DON'T give water, medicine, food during or immediately after seizure.",
        "If seizure > 5 minutes — emergency. Ambulance.",
        "Febrile seizures (with fever) — first time always ambulance."
      ]
    },

    // ============================================================
    // 7. DIFFICULT BREATHING
    // ============================================================
    {
      id: "breathing_emergency",
      title: "🫁 Difficulty breathing — emergency",
      description: "Difficulty breathing, wheezing, shortness of breath — require immediate evaluation.",
      conditions: { symptom: ["breath"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Breathing assessment and emergency help",
      tags: ["breath", "emergency", "asthma"],
      steps: [
        "Difficulty breathing is ALWAYS an emergency. Call an ambulance.",
        "Sit the child up (don't lay on back!). Comfortable position: sitting, leaning forward slightly.",
        "If child has asthma — use inhaler (bronchodilator) IMMEDIATELY.",
        "Wheezing, intercostal retractions — signs of respiratory failure.",
        "If breathing stops — start CPR: 30 chest compressions, 2 breaths.",
        "If child is blue (lips, nails) — oxygen deprivation. Immediately call ambulance.",
        "If foreign body in airway — Heimlich maneuver (for children 1+ years)."
      ],
      warnings: [
        "Difficulty breathing is an emergency. Don't try to treat at home.",
        "DON'T give water, food, oral medication with severe shortness of breath.",
        "DON'T lay the child on their back — worsens condition.",
        "If child turns blue, loses consciousness — immediately start CPR."
      ]
    },

    // ============================================================
    // 8. RASH WITH FEVER
    // ============================================================
    {
      id: "rash_with_fever",
      title: "🩹 Rash with fever — possible causes",
      description: "Rash with fever can be a sign of infection. Don't miss meningococcemia.",
      conditions: { symptom: ["rash_fever"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 hours",
      yield_estimate: "Cause diagnosed",
      tags: ["rash", "fever", "infection"],
      steps: [
        "If rash is dark red, doesn't fade with pressure (glass test) — IMMEDIATE AMBULANCE. Meningococcemia — deadly.",
        "If rash is pink, fades with pressure — likely viral infection.",
        "If rash is itchy — possibly allergy. Give antihistamine.",
        "If rash has blisters, weeping — possible herpes infection.",
        "Any rash with fever in an infant — urgent doctor.",
        "Record: when rash appeared, where it started, is there itching, temperature.",
        "Take a photo of the rash before seeing a doctor."
      ],
      warnings: [
        "Meningococcemia is deadly. If rash doesn't fade — AMBULANCE IMMEDIATELY.",
        "DON'T apply anything to the rash before seeing a doctor.",
        "DON'T give antibiotics without a prescription."
      ]
    },

    // ============================================================
    // 9. COUGH WITH FEVER
    // ============================================================
    {
      id: "cough_with_fever",
      title: "🫁 Cough with fever — when to see a doctor",
      description: "Cough with fever can be bronchitis, pneumonia, whooping cough.",
      conditions: { symptom: ["cough_fever"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Diagnosis and treatment",
      tags: ["cough", "fever", "infection"],
      steps: [
        "If cough is dry, barking, 'whooping' — possible whooping cough or croup. Urgent doctor.",
        "If cough is wet, with phlegm, fever > 38°C for > 3 days — possible pneumonia. Urgent doctor, X-ray.",
        "If cough with wheezing — possible asthma or bronchitis. Inhaler and doctor needed.",
        "If cough with blood — IMMEDIATE AMBULANCE.",
        "Whooping cough: coughing to vomiting, 'whooping' sound on inhale — urgent hospitalization.",
        "Plenty of warm fluids, humidified air (20–22°C, 40–60% humidity) — help condition.",
        "DON'T give cough suppressants for wet cough — they prevent phlegm clearance."
      ],
      warnings: [
        "Cough with fever > 3 days — requires doctor and X-ray.",
        "DON'T give antibiotics without prescription — tests needed.",
        "DON'T give cough suppressants for wet cough — dangerous.",
        "Whooping cough is dangerous for infants — requires hospitalization."
      ]
    },

    // ============================================================
    // 10. SEVERE PAIN
    // ============================================================
    {
      id: "severe_pain",
      title: "🤕 Severe pain — when to call ambulance",
      description: "Severe abdominal, head, ear, bone pain — may be a sign of serious illness.",
      conditions: { symptom: ["pain"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "15–60 minutes",
      yield_estimate: "Pain assessment and relief",
      tags: ["pain", "emergency", "diagnosis"],
      steps: [
        "Severe pain that the child can't bear — emergency.",
        "Abdominal pain with vomiting, fever, muscle tension — possible appendicitis. DON'T give painkillers, DON'T heat. Ambulance.",
        "Headache with vomiting, photophobia, neck stiffness — possible meningitis. Ambulance.",
        "Ear pain with fever — otitis media. ENT doctor. DON'T heat.",
        "Bone/joint pain with fever — possible osteomyelitis or arthritis. Doctor.",
        "For pain relief: paracetamol (10–15 mg/kg) or ibuprofen (5–10 mg/kg). NO aspirin!",
        "Cold for trauma — 15–20 minutes, 20-minute break.",
        "If pain doesn't improve within 30–60 minutes after painkillers — ambulance."
      ],
      warnings: [
        "Severe pain with vomiting, fever, muscle tension — AMBULANCE.",
        "DON'T give painkillers for acute abdominal pain — will mask the picture.",
        "DON'T heat the abdomen or ear — may cause abscess.",
        "DON'T give aspirin for headache in children — Reye's syndrome."
      ]
    },

    // ============================================================
    // 11. WHEN TO CALL AN AMBULANCE — CHEAT SHEET
    // ============================================================
    {
      id: "when_call_ambulance",
      title: "🚑 When to call an ambulance — cheat sheet for parents",
      description: "Save this guide. When in doubt — call an ambulance.",
      conditions: { symptom: ["fever", "vomit", "allergy", "seizure", "breath", "pain", "rash_fever", "cough_fever"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 minute",
      yield_estimate: "Quick decision",
      tags: ["ambulance", "emergency", "checklist"],
      steps: [
        "CALL AMBULANCE IMMEDIATELY (03/103/112) IF:",
        "1. Temperature in an infant > 38°C.",
        "2. Seizures > 5 minutes.",
        "3. Difficulty breathing, bluish lips.",
        "4. Unconsciousness or severe drowsiness.",
        "5. Green or bloody vomiting.",
        "6. Rash that doesn't fade with pressure.",
        "7. Severe pain that the child can't bear.",
        "8. Swelling of face, lips, tongue (angioedema).",
        "9. Poisoning (child ate something dangerous).",
        "10. Head injury with unconsciousness."
      ],
      warnings: [
        "DON'T wait 'until morning' if any of these signs are present.",
        "DON'T be afraid to call an ambulance 'unnecessarily' — better safe than sorry.",
        "DON'T try to treat emergencies at home — time is against you."
      ]
    },

    // ============================================================
    // 12. POISONING
    // ============================================================
    {
      id: "poisoning_emergency",
      title: "☠️ Poisoning — what to do",
      description: "Child ate medication, household chemicals, berries — immediate actions.",
      conditions: { symptom: ["vomit"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Life saved",
      tags: ["poisoning", "emergency", "first_aid"],
      steps: [
        "If child ate something dangerous — DON'T induce vomiting without doctor's instruction.",
        "Keep the package, remains of the substance — show to the doctor.",
        "If child is unconscious — check breathing. If none — CPR.",
        "Call ambulance (03/103/112). Report: age, weight, what they ate, how much, when.",
        "If conscious — give water or milk to drink (if not acid/alkali).",
        "Don't give adsorbents if you don't know what was eaten.",
        "If chemicals on skin — rinse with water for 15–20 minutes.",
        "If chemicals in eyes — rinse with water for 15–20 minutes, don't put anything in."
      ],
      warnings: [
        "DON'T induce vomiting for acid, alkali, gasoline poisoning — doubles the burn.",
        "DON'T give milk for poisoning — it increases absorption.",
        "DON'T try to 'neutralize' poison yourself.",
        "DON'T leave the child alone — they may lose consciousness."
      ]
    }
  ]
});