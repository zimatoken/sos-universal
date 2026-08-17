// === MODULE: CHILDREN — HEALTH ===
const healthDataEn = {
  category: "health",
  title: "🤒 Health",
  description: "Fever, vomiting, allergies, seizures, breathing difficulties, pain — when to call a doctor",

  questions: [
    {
      id: "symptom",
      text: "What symptoms does the child have? (select all that apply)",
      type: "multi",
      options: [
        { id: "fever", label: "🌡️ High fever", tags: ["fever"] },
        { id: "vomit", label: "🤢 Vomiting / diarrhea", tags: ["vomit"] },
        { id: "allergy", label: "🤧 Rash / swelling / hives", tags: ["allergy"] },
        { id: "seizure", label: "⚡ Seizures / loss of consciousness", tags: ["seizure"] },
        { id: "breath", label: "🫁 Difficulty breathing / coughing", tags: ["breath"] },
        { id: "pain", label: "🤕 Severe pain (abdomen, head, ear)", tags: ["pain"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      conditions: { symptom: ["fever", "vomit", "allergy", "seizure", "breath", "pain"] },
      options: [
        { id: "infant", label: "👶 Infant (0–1 year)", tags: ["infant"] },
        { id: "toddler", label: "🧒 1–3 years", tags: ["toddler"] },
        { id: "preschool", label: "🧒 3–7 years", tags: ["preschool"] },
        { id: "school", label: "🧑 7+ years", tags: ["school"] }
      ]
    },
    {
      id: "duration",
      text: "How long have the symptoms been present?",
      type: "single",
      conditions: { symptom: ["fever", "vomit", "allergy", "seizure", "breath", "pain"] },
      options: [
        { id: "less_1h", label: "Less than 1 hour", tags: ["acute"] },
        { id: "hours", label: "Several hours", tags: ["hours"] },
        { id: "days", label: "1–3 days", tags: ["days"] },
        { id: "week", label: "More than 3 days", tags: ["week"] }
      ]
    }
  ],

  solutions: [
    // ==========================================
    // 1. HIGH FEVER
    // ==========================================
    {
      id: "high_fever_action",
      title: "🌡️ High fever — when to sound the alarm",
      description: "Fever is a protective response. But in infants and at high temperatures — it's dangerous.",
      conditions: { symptom: ["fever"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Reducing fever / diagnosis",
      tags: ["fever", "health", "emergency"],
      steps: [
        "Measure temperature with a digital thermometer (oral, armpit, ear, rectal). Record the exact number and time",
        "Under 3 months: temperature > 38°C — immediate doctor / ambulance. Immunity is weak, infection develops rapidly",
        "3–36 months: > 39°C or temperature > 38.5°C for over 24 hours — doctor. If seizures — ambulance",
        "Over 3 years: > 39.5°C or > 39°C for over 3 days — doctor. If febrile seizures — ambulance",
        "Reduce fever if > 38.5°C and the child feels unwell. Paracetamol (10–15 mg/kg) or Ibuprofen (5–10 mg/kg). NOT aspirin — Reye's syndrome!",
        "Sponging: warm water (not cold, not vinegar!), room 20–22°C, light clothing. Cold sponging causes chills and raises temperature",
        "Hydrate frequently, in small amounts: water, compote, tea. For vomiting — 1 teaspoon every 5 minutes. Dehydration is more dangerous than fever",
        "If temperature doesn't drop within 1 hour of antipyretic — ambulance. This could be meningitis, sepsis, pneumonia"
      ],
      warnings: [
        "DON'T give aspirin to children — Reye's syndrome (liver and brain damage, fatal)",
        "DON'T sponge with vinegar, alcohol, ice water — this causes vasospasm, chills, and temperature increase",
        "DON'T wrap the child up 'to sweat' — overheating, heatstroke, dehydration. Light clothing, cool room",
        "Febrile seizures (arms and legs twitching, eyes rolling back) — call ambulance immediately. Lay on side, don't put anything in the mouth"
      ]
    },
    {
      id: "fever_infant",
      title: "👶 Fever in an infant — emergency situation",
      description: "Children under 1 year have immature immunity. Even a mild fever can indicate a dangerous infection.",
      conditions: { symptom: ["fever"], age: ["infant"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Emergency diagnosis",
      tags: ["fever", "infant", "emergency"],
      steps: [
        "If an infant (0–12 months) has temperature > 38°C — IMMEDIATELY call an ambulance or go to the hospital",
        "In infants, there is no 'just a fever'. It could be: meningitis, sepsis, pneumonia, urinary tract infection",
        "Don't wait for the fever to 'go away on its own'. In infants, condition worsens in hours, not days",
        "Before the ambulance arrives: undress the child to a diaper, ventilate the room, give water (if not vomiting)",
        "Paracetamol or ibuprofen — only as prescribed by a doctor. Dosage strictly by weight!",
        "If seizures, lethargy, refusal to eat, crying without tears — tell the doctor immediately"
      ],
      warnings: [
        "Fever in an infant is ALWAYS an emergency. Don't try to treat at home without a doctor",
        "DON'T give medication without consulting a doctor — incorrect dosage can be fatal",
        "DON'T wrap the infant — this causes overheating and heatstroke. Light clothing, cool room (20–22°C)",
        "DON'T bathe the child in warm water to sweat — this is dangerous for infants"
      ]
    },
    // ==========================================
    // 2. VOMITING AND DIARRHEA
    // ==========================================
    {
      id: "vomit_diarrhea",
      title: "🤢 Vomiting and diarrhea — dehydration and infection",
      description: "Rotavirus, poisoning, appendicitis — causes vary. The main goal is to prevent dehydration.",
      conditions: { symptom: ["vomit"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Stopping vomiting / diagnosis",
      tags: ["vomit", "poisoning", "infection"],
      steps: [
        "If vomit is green (bile) or contains blood — call ambulance immediately. This indicates intestinal obstruction or bleeding",
        "If diarrhea contains blood or is black — call ambulance. Intestinal infection, dysentery, bleeding",
        "During vomiting — don't give food or drink for 30–60 minutes. Then — 1 teaspoon of water / rehydration solution every 5 minutes. Too much fluid will cause more vomiting",
        "Rehydration solution (Regidron or similar: Hydrovit, Electrolyte): 1 packet per 1 liter of water. Give frequently, in small amounts. This prevents dehydration",
        "If no rehydration solution — homemade: 1 liter boiled water + 1 tsp salt + 8 tsp sugar. Or rice water, dried fruit compote",
        "Diet: 4–6 hours after vomiting stops — water-based porridge (rice, buckwheat), crackers, banana, apple puree. No milk, no fatty foods, no sweets",
        "If vomiting / diarrhea > 6 times per hour, temperature > 38.5°C, drowsiness, no urine for > 6 hours — call ambulance. Dehydration is dangerous",
        "If appendicitis is suspected (right side pain, nausea, fever) — DON'T give painkillers, DON'T give enemas, DON'T feed. Call ambulance"
      ],
      warnings: [
        "DON'T give anti-emetics without a doctor's prescription — they mask serious causes (appendicitis, obstruction)",
        "DON'T give absorbents (activated charcoal, Smecta) for intestinal obstruction — it will worsen the condition",
        "DON'T give antibiotics on your own — most intestinal infections are viral, antibiotics are useless and harmful",
        "Dehydration in children develops quickly: dry lips, no tears, sunken fontanel (in infants), dark urine or no urine for 6+ hours"
      ]
    },
    {
      id: "vomit_prolonged",
      title: "⏳ Prolonged vomiting — dehydration risk and hospitalization",
      description: "If vomiting lasts more than 24 hours — dehydration risk is very high. Medical help is required.",
      conditions: { symptom: ["vomit"], duration: ["days", "week"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Restoring fluid balance / hospitalization",
      tags: ["vomit", "dehydration", "urgent"],
      steps: [
        "If vomiting > 24 hours — call a doctor to the home or go to the hospital. Children dehydrate faster than adults",
        "Continue giving rehydration solution 1 tsp every 5–10 minutes. If vomiting continues — try frozen rehydration cubes (to lick)",
        "Monitor weight: loss of 5–10% of body weight is critical dehydration, requiring IV fluids",
        "If diarrhea > 3 days — get a stool test for infections (salmonella, dysentery, rotavirus)",
        "If the child refuses to drink, hasn't urinated for 8+ hours, becomes drowsy — call ambulance. Hospitalization required",
        "At the hospital: IV drips with Ringer's solution, monitoring, blood and urine tests"
      ],
      warnings: [
        "Prolonged vomiting > 24 hours is a medical situation. Don't try to treat at home",
        "Dehydration in children with vomiting and diarrhea develops in 6–12 hours. Don't wait for it to 'pass'",
        "DON'T give milk, juices, or soda during vomiting — they worsen diarrhea and vomiting"
      ]
    },
    // ==========================================
    // 3. ALLERGY
    // ==========================================
    {
      id: "allergy_emergency",
      title: "🤧 Allergy and anaphylaxis — emergency care",
      description: "Hives — tolerable. Angioedema and anaphylaxis — fatal. Learn the difference.",
      conditions: { symptom: ["allergy"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–10 minutes",
      yield_estimate: "Stopping the allergic reaction",
      tags: ["allergy", "anaphylaxis", "emergency"],
      steps: [
        "Mild allergy (hives, sneezing, runny nose, itching): give antihistamine (Zyrtec, Fenistil, Suprastin — age-appropriate). Monitor for 30 minutes",
        "Angioedema (swollen lips, tongue, eyelids, difficulty swallowing) — call ambulance immediately. Give antihistamine, apply cold. Don't give fluids — they may choke",
        "Anaphylaxis (difficulty breathing, wheezing, pallor, weak pulse, loss of consciousness) — call 911 immediately. This is fatal",
        "If an epinephrine auto-injector (EpiPen) is available — inject into the thigh through clothing. Hold for 10 seconds. Can repeat after 5–15 minutes",
        "Lay the child on their back, legs elevated (for shock). If vomiting — on their side. Don't give fluids, food, or oral medications during swelling",
        "After anaphylaxis — mandatory 24-hour observation in hospital. Recurrence can occur in 4–12 hours (biphasic anaphylaxis)",
        "Find the cause: what they ate, what they applied, where they were, insect bite, medication. Save the packaging, photo. Tell the doctor",
        "After discharge — get a referral to an allergist. Get tested (IgE, skin prick tests). Always carry the auto-injector and antihistamine"
      ],
      warnings: [
        "Anaphylaxis kills in 5–30 minutes. Don't wait for it to 'pass'. Epinephrine is the only cure. Antihistamines DO NOT replace epinephrine",
        "Angioedema can progress to anaphylaxis in minutes. Monitor breathing, pulse, consciousness. If worsens — call ambulance",
        "DON'T give food, water, or oral medication during tongue/throat swelling — the child may choke",
        "EpiPen auto-injector: shelf life 12–18 months. Check the date. Store in a cool dark place, not in the car (overheating)"
      ]
    },
    // ==========================================
    // 4. SEIZURES
    // ==========================================
    {
      id: "seizure_first_aid",
      title: "⚡ Seizures / loss of consciousness — first aid",
      description: "Febrile seizures in children are scary, but usually harmless. Epilepsy requires monitoring.",
      conditions: { symptom: ["seizure"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Safe end of the seizure",
      tags: ["seizure", "epilepsy", "emergency"],
      steps: [
        "Don't panic. Most seizures last 1–3 minutes and stop on their own. Your job is to prevent injury and choking",
        "Place the child on their side (recovery position) — this prevents the tongue from blocking the airway and vomit from entering the lungs",
        "Remove dangerous objects: furniture corners, sharp objects, hot items. Place something soft under the head (blanket, pillow, clothing)",
        "DON'T put anything in the mouth: spoons, fingers, cloth. This can break teeth, cause vomiting, choking. The tongue CANNOT be swallowed during seizures — this is a myth",
        "DON'T restrain the child, DON'T try to stop the movements. This can cause fractures, dislocations, injuries",
        "Time the seizure. If it lasts > 5 minutes — call ambulance immediately. This is status epilepticus, requires diazepam administration",
        "After the seizure, the child will be drowsy, confused, may not recognize you. This is normal (post-ictal state). Put them to sleep, monitor breathing",
        "First seizure ever — always call ambulance and get evaluation: EEG, MRI, tests. Even if it 'passed on its own' — it's serious"
      ],
      warnings: [
        "DON'T put anything in the mouth during seizures — it's more dangerous than the seizure itself. Teeth will break, vomit will enter the lungs",
        "DON'T give water, medication, or food during and immediately after a seizure — the child may choke. Wait for full consciousness (15–30 minutes)",
        "If seizure > 5 minutes — this is an emergency. Ambulance, anticonvulsant administration. Brain damage is possible",
        "Febrile seizures (with fever) — most common in children 6 months – 5 years. Usually harmless, but the first one always requires ambulance to rule out meningitis"
      ]
    },
    // ==========================================
    // 5. BREATHING DIFFICULTIES
    // ==========================================
    {
      id: "breathing_emergency",
      title: "🫁 Breathing difficulties — emergency situation",
      description: "Difficulty breathing, wheezing, shortness of breath — require immediate medical evaluation.",
      conditions: { symptom: ["breath"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Breathing assessment and emergency care",
      tags: ["breath", "emergency", "asthma"],
      steps: [
        "Difficulty breathing is ALWAYS an emergency. Don't wait for it to 'pass'. Call ambulance or go to the hospital",
        "Sit the child up (don't lay on their back!). Comfortable position: sitting, leaning slightly forward, hands on knees — this eases breathing",
        "If the child has asthma — use the inhaler (bronchodilator) immediately. If no improvement in 10–15 minutes — call ambulance",
        "Wheezing, crackling, retraction of intercostal spaces — signs of respiratory failure. Call ambulance",
        "If breathing stops — start CPR: 30 chest compressions, 2 breaths. Continue until ambulance arrives",
        "If the child is blue (cyanosis of lips, nails) — oxygen deprivation. Immediately call ambulance",
        "If foreign body is lodged in the airway: Heimlich maneuver (for children 1+ years). For infants — 5 back blows, 5 chest thrusts",
        "If angioedema (allergy) is suspected — epinephrine (if available) + ambulance"
      ],
      warnings: [
        "Difficulty breathing is an emergency. Don't try to treat at home without a doctor",
        "DON'T give water, food, or oral medication during severe shortness of breath — the child may choke",
        "DON'T lay the child on their back during breathing difficulties — this worsens the condition",
        "If the child turns blue or loses consciousness — immediately start CPR"
      ]
    },
    // ==========================================
    // 6. SEVERE PAIN
    // ==========================================
    {
      id: "severe_pain",
      title: "🤕 Severe pain — when to call an ambulance",
      description: "Severe pain in the abdomen, head, ear, or bones — may be a sign of a serious condition.",
      conditions: { symptom: ["pain"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "15–60 minutes",
      yield_estimate: "Assessment and pain relief",
      tags: ["pain", "emergency", "diagnosis"],
      steps: [
        "Severe pain that the child cannot tolerate — is an emergency. Pain is the body's signal of damage",
        "Abdominal pain with vomiting, fever, muscle tension (board-like) — possible appendicitis. DON'T give painkillers, DON'T apply heat. Call ambulance",
        "Headache with vomiting, photophobia, neck stiffness — possible meningitis. Call ambulance immediately",
        "Ear pain with fever — otitis media. See an ENT doctor. DON'T apply heat — it can cause abscess",
        "Bone or joint pain with fever — possible osteomyelitis or arthritis. See a doctor, get tests, X-ray",
        "For pain relief: paracetamol (10–15 mg/kg) or ibuprofen (5–10 mg/kg). DON'T give aspirin!",
        "Cold for injuries (ice, frozen vegetables wrapped in a towel) — 15–20 minutes, 20-minute break",
        "If severe pain doesn't subside 30–60 minutes after painkillers — call ambulance"
      ],
      warnings: [
        "Severe pain with vomiting, fever, muscle tension — possible appendicitis, meningitis, peritonitis. Call ambulance",
        "DON'T give painkillers for acute abdominal pain — it masks appendicitis symptoms",
        "DON'T apply heat to a painful abdomen or ear — it can cause abscess or peritonitis",
        "DON'T give aspirin for headache in children — Reye's syndrome"
      ]
    }
  ]
};

// ===== EXPORT =====
window.healthDataEn = healthDataEn;