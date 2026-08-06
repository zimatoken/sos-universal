// === MODULE: HEALTH (ENGLISH) ===
const healthDataEn = {
  category: "health",
  title: "🤒 Health and First Aid",
  description: "Fever, vomiting, allergies, seizures, pain, cough, rash — when and how to act",

  questions: [
    {
      id: "symptom",
      text: "What is the main symptom in your child?",
      type: "single",
      options: [
        { id: "fever", label: "High fever", tags: ["fever"] },
        { id: "vomit", label: "Vomiting / diarrhea", tags: ["vomit", "diarrhea"] },
        { id: "allergy", label: "Rash / swelling / hives", tags: ["allergy", "rash"] },
        { id: "seizure", label: "Seizures / loss of consciousness", tags: ["seizure"] },
        { id: "pain", label: "Severe pain (abdomen, head, ear)", tags: ["pain"] },
        { id: "breath", label: "Breathing difficulty / cough", tags: ["breath", "cough"] },
        { id: "rash_infect", label: "Rash with fever (infectious)", tags: ["rash", "fever"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "infant", label: "Newborn (0–3 months)", tags: ["infant_0_3"] },
        { id: "baby", label: "Infant (3–12 months)", tags: ["baby"] },
        { id: "toddler", label: "1–3 years", tags: ["toddler"] },
        { id: "preschool", label: "3–7 years", tags: ["preschool"] },
        { id: "school", label: "7+ years", tags: ["school"] }
      ]
    },
    {
      id: "duration",
      text: "How long has the symptom lasted?",
      type: "single",
      options: [
        { id: "less_1h", label: "Less than 1 hour (acute)", tags: ["acute"] },
        { id: "hours", label: "Several hours", tags: ["hours"] },
        { id: "days", label: "1–3 days", tags: ["days"] },
        { id: "week", label: "More than 3 days", tags: ["week"] }
      ]
    },
    {
      id: "temp_value",
      text: "What is the temperature (if present)?",
      condition: { symptom: ["fever"] },
      options: [
        { id: "temp_low", label: "37.5 – 38.5°C (99.5 – 101.3°F)", tags: ["temp_low"] },
        { id: "temp_high", label: "38.6 – 39.5°C (101.5 – 103.1°F)", tags: ["temp_high"] },
        { id: "temp_very_high", label: "Above 39.5°C (103.1°F)", tags: ["temp_very_high"] }
      ]
    },
    {
      id: "chronic",
      text: "Are there any chronic conditions, allergies, or medications?",
      type: "single",
      options: [
        { id: "no_chronic", label: "No", tags: ["healthy"] },
        { id: "allergy_known", label: "Known allergy (medication, food, pollen)", tags: ["allergy_known"] },
        { id: "asthma", label: "Asthma / allergic bronchitis", tags: ["asthma"] },
        { id: "epilepsy", label: "Epilepsy / history of seizures", tags: ["epilepsy"] },
        { id: "medication", label: "Taking medication (specify)", tags: ["medication"] }
      ]
    },
    {
      id: "contact",
      text: "Has there been contact with sick individuals or travel?",
      type: "single",
      options: [
        { id: "no_contact", label: "No", tags: ["no_contact"] },
        { id: "sick_family", label: "Family / classmates are sick", tags: ["contact"] },
        { id: "travel", label: "Recent travel (other region / country)", tags: ["travel"] }
      ]
    },
    {
      id: "appetite",
      text: "How is your child eating and drinking?",
      type: "single",
      options: [
        { id: "normal", label: "Normal", tags: ["appetite_normal"] },
        { id: "reduced", label: "Eating / drinking less than usual", tags: ["appetite_reduced"] },
        { id: "refusal", label: "Refusing food and water", tags: ["appetite_refusal"] }
      ]
    },
    {
      id: "additional",
      text: "Are there any additional concerning signs?",
      type: "single",
      options: [
        { id: "no_extra", label: "No, just the main symptom", tags: ["no_extra"] },
        { id: "lethargy", label: "Severe drowsiness, lethargy, difficult to wake", tags: ["lethargy"] },
        { id: "stiff_neck", label: "Neck stiffness (cannot touch chin to chest)", tags: ["stiff_neck"] },
        { id: "rash_purple", label: "Rash that doesn't fade when pressed (purple)", tags: ["rash_purple"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Fever in newborns (0–3 months)
    // ========================================
    {
      id: "fever_infant",
      title: "🚨 Fever in a newborn (0–3 months) — seek medical help immediately",
      description: "In infants under 3 months, the immune system is immature, and any temperature >38°C (100.4°F) is an emergency.",
      conditions: { symptom: ["fever"], age: ["infant_0_3"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Diagnosis and treatment",
      tags: ["fever", "infant", "emergency"],
      steps: [
        "Measure temperature rectally (this is the most accurate method for infants).",
        "If temperature > 38°C (100.4°F) — call 911/112 IMMEDIATELY or go to the children's hospital emergency room. Do not wait.",
        "Do not give fever-reducing medication before medical evaluation — it can mask dangerous symptoms (meningitis, sepsis).",
        "Undress the baby down to the diaper, ventilate the room (20–22°C / 68–72°F). Do not bundle up.",
        "Breastfeed / formula feed more frequently, in small amounts, to prevent dehydration.",
        "If seizures occur — place on side, clear airways, call emergency services."
      ],
      warnings: [
        "Any fever in an infant under 3 months is a reason for emergency hospitalization, even if the baby appears active.",
        "Do not use aspirin and analgin — they are contraindicated in children.",
        "Do not use physical cooling methods (cold bath, vinegar) — they are dangerous.",
        "If you cannot reach emergency services immediately — call a taxi and go to the pediatric ICU."
      ]
    },
    // ========================================
    // 2. Fever in children 3 months – 3 years
    // ========================================
    {
      id: "fever_toddler",
      title: "🌡️ Fever in children 3 months – 3 years — when and how to reduce",
      description: "Fever is a protective reaction, but high and prolonged fever requires intervention.",
      conditions: { symptom: ["fever"], age: ["baby", "toddler"], temp_value: ["temp_low", "temp_high", "temp_very_high"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "30 min – 2 hours",
      yield_estimate: "Temperature reduction and monitoring",
      tags: ["fever", "toddler", "algorithm"],
      steps: [
        "If temperature < 38.5°C (101.3°F) and the child is active — do not reduce. Give fluids (water, compote, tea) every 10–15 minutes.",
        "At 38.5–39°C (101.3–102.2°F) and discomfort: paracetamol (10–15 mg/kg) or ibuprofen (5–10 mg/kg). Minimum interval between doses is 4–6 hours.",
        "Do not use aspirin, analgin, nimesulide — they are dangerous for children (Reye's syndrome, agranulocytosis).",
        "At 39.5°C (103.1°F) and above — reduce fever, even if the child appears calm. Hyperthermic syndrome is dangerous.",
        "If temperature does not decrease within 1 hour after antipyretic — call a doctor or ambulance.",
        "Physical cooling: warm water (28–32°C / 82–90°F), sponging, light clothing. Do not use cold compresses — they cause chills.",
        "For febrile seizures — place on side, loosen clothing, call emergency services. Seizures usually last <5 minutes and resolve on their own.",
        "If the child refuses fluids, urinates less than 3 times a day, has dry lips — these are signs of dehydration, hospitalization needed."
      ],
      warnings: [
        "Do not give antipyretics more than 4 times a day without medical supervision — risk of liver and kidney damage.",
        "Do not combine paracetamol and ibuprofen without medical advice — it increases side effects.",
        "If a rash appears with fever — it may be an infectious disease (measles, scarlet fever, meningococcemia). Call a doctor.",
        "If the child is lethargic, drowsy, cannot be woken — call emergency services immediately."
      ]
    },
    // ========================================
    // 3. Fever in children over 3 years
    // ========================================
    {
      id: "fever_school",
      title: "🌡️ Fever in school-age children — management",
      description: "Older children tolerate fever more easily, but it still requires monitoring.",
      conditions: { symptom: ["fever"], age: ["preschool", "school"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Temperature reduction and identifying the cause",
      tags: ["fever", "school", "home"],
      steps: [
        "At 38–38.5°C (100.4–101.3°F) and feeling well — do not reduce, this helps immunity. Ensure rest and plenty of fluids.",
        "At 38.5°C (101.3°F) and above — paracetamol or ibuprofen. Dose by weight (see instructions).",
        "At 39.5°C (103.1°F) and above — reduce fever. Alternate paracetamol and ibuprofen (no more than 3 times daily each).",
        "If fever persists more than 3 days, or cough, ear pain, rash appear — consult a pediatrician.",
        "For abdominal pain, nausea, vomiting — rule out appendicitis (do not give painkillers before surgical examination).",
        "Monitor urine output: child should urinate every 4–6 hours. Dark urine, acetone smell — sign of dehydration or ketonemia.",
        "For ketonemia (acetone) — sweet drinks (tea with sugar, compote) to reduce intoxication.",
        "If temperature decreases but general condition does not improve — call a doctor at home."
      ],
      warnings: [
        "Do not give aspirin to children and adolescents with viral infections — risk of Reye's syndrome.",
        "Do not force eating if there is no appetite — fluids are more important.",
        "If a rash resembling 'star-shaped' spots or one that doesn't fade when pressed appears — go to the hospital immediately (possible meningococcus).",
        "If there is headache and neck stiffness — rule out meningitis, call emergency services."
      ]
    },
    // ========================================
    // 4. Vomiting and diarrhea — dehydration
    // ========================================
    {
      id: "vomit_diarrhea",
      title: "🤢 Vomiting and diarrhea — preventing dehydration",
      description: "Fluid loss from vomiting and diarrhea can be dangerous for children, especially young ones.",
      conditions: { symptom: ["vomit"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Fluid replacement and stabilization",
      tags: ["vomit", "diarrhea", "dehydration"],
      steps: [
        "For vomiting — do not give fluids or food for 30–60 minutes. Allow the stomach to settle.",
        "Then start drinking small amounts (1 teaspoon) every 5–10 minutes. Use oral rehydration solutions (Regidron, Hydravit).",
        "If no rehydration solution — homemade recipe: 1 liter boiled water + 1 tsp salt + 8 tsp sugar.",
        "For diarrhea — continue breastfeeding/formula (if infant), for older children — rice porridge, banana, crackers, chicken broth.",
        "Do not give milk, sweets, fatty foods — they worsen diarrhea.",
        "Assess dehydration level: dry lips, sunken eyes, no tears, lethargy, infrequent urination (<3 times/day) — reason for hospitalization.",
        "If vomiting is green (bile) or bloody, diarrhea with blood, severe abdominal pain — see a doctor immediately / call emergency.",
        "After vomiting stops (4–6 hours) — can give light food (water-based cereals, baked apple)."
      ],
      warnings: [
        "Do not use antiemetics and antidiarrheals without a doctor — they can mask intestinal obstruction.",
        "Do not give activated charcoal if appendicitis is suspected — it worsens the condition.",
        "In children under 1 year, dehydration develops within hours — monitor condition every 2–3 hours.",
        "If the child does not drink at all — go to the hospital immediately, intravenous rehydration will be needed."
      ]
    },
    // ========================================
    // 5. Allergy — mild to moderate
    // ========================================
    {
      id: "allergy_mild",
      title: "🤧 Allergic reaction (hives, itching, sneezing)",
      description: "Mild allergic reactions usually resolve on their own with antihistamines.",
      conditions: { symptom: ["allergy"], chronic: ["no_chronic", "allergy_known"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "30 min – 2 hours",
      yield_estimate: "Symptom relief",
      tags: ["allergy", "urticaria", "antihistamine"],
      steps: [
        "Give an antihistamine (Zyrtec, Fenistil, Erius, Suprastin) in the age-appropriate dosage.",
        "Eliminate contact with the allergen: if food — stop giving it, if insect bite — remove stinger, apply cold.",
        "For skin itching — cool shower, topical antihistamine creams (Fenistil-gel).",
        "Monitor breathing, tongue, throat. If swelling of lips, tongue, difficulty swallowing appears — this is angioedema, call emergency services.",
        "If reaction to vaccine or medication — inform the doctor, record the drug in the allergy passport.",
        "For hives without other symptoms — can observe at home, but if persists more than 6 hours or new symptoms appear — see a doctor."
      ],
      warnings: [
        "Allergies can progress to anaphylaxis. Watch for breathing, pulse, consciousness.",
        "Do not combine antihistamines with sedatives (cough drops) without a doctor.",
        "If allergies recur — make an appointment with an allergist for testing and baseline therapy."
      ]
    },
    // ========================================
    // 6. Anaphylaxis / angioedema (severe allergy)
    // ========================================
    {
      id: "anaphylaxis",
      title: "🚨 Anaphylactic shock — emergency care",
      description: "Facial swelling, throat swelling, breathing difficulty, drop in blood pressure — life-threatening.",
      conditions: { symptom: ["allergy"], chronic: ["allergy_known", "asthma"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Life-saving",
      tags: ["anaphylaxis", "emergency", "adrenaline"],
      steps: [
        "Call emergency services immediately (911/112). Report that the child has anaphylaxis.",
        "If EpiPen (adrenaline auto-injector) is available — inject into the thigh through clothing, hold for 10 seconds. Can repeat after 5–15 minutes.",
        "Lay the child on their back, elevate legs above head (for shock). If vomiting — place on side.",
        "Loosen tight clothing, ensure fresh air.",
        "Do not give fluids or food if throat swelling is present — may choke.",
        "If breathing/heartbeat stops — start CPR (chest compressions and rescue breathing) until emergency arrives.",
        "After paramedics arrive — mandatory hospitalization for observation (secondary phase may occur 4–12 hours later)."
      ],
      warnings: [
        "Anaphylaxis is a condition where minutes count. Do not wait for it to 'pass'. Adrenaline is the only salvation.",
        "Antihistamines and steroids do not replace adrenaline — they work too slowly.",
        "Always carry an EpiPen if the child has severe allergies. Check expiration date.",
        "If the child loses consciousness — monitor pulse and breathing until emergency arrives."
      ]
    },
    // ========================================
    // 7. Seizures — febrile and non-febrile
    // ========================================
    {
      id: "seizure",
      title: "⚡ Seizures — first aid and actions",
      description: "Seizures can be caused by fever, epilepsy, or other reasons. Safety is paramount.",
      conditions: { symptom: ["seizure"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Stopping the seizure and preventing injuries",
      tags: ["seizure", "epilepsy", "first_aid"],
      steps: [
        "Place the child on their side (recovery position) so they don't choke on vomit or saliva.",
        "Remove dangerous objects (sharp corners, toys) and place something soft under the head.",
        "Note the time the seizure started. If it lasts more than 5 minutes — call emergency services.",
        "DO NOT PUT ANYTHING IN THE MOUTH — fingers, spoons, cotton swabs. This is dangerous: can break teeth or cause vomiting.",
        "Do not try to hold the child down forcibly — this will cause injuries.",
        "After the seizure the child may be drowsy and confused — this is normal. Place on side, monitor breathing.",
        "If this is the first seizure in life — call emergency services, even if it was short. They will do an evaluation (EEG, MRI).",
        "For febrile seizures (with fever) — after the seizure reduce the temperature and see a pediatrician."
      ],
      warnings: [
        "Never try to force the jaw open and insert an object — it won't help and will only cause harm.",
        "If the seizure lasts more than 5 minutes — this is a dangerous condition (status epilepticus), requires medication.",
        "After a seizure the child may not remember what happened — don't alarm them with questions.",
        "If seizures recur — see a neurologist for diagnosis."
      ]
    },
    // ========================================
    // 8. Abdominal pain — appendicitis, colic, intestinal infection
    // ========================================
    {
      id: "abdominal_pain",
      title: "🤰 Abdominal pain — when is it dangerous?",
      description: "Pain can be simple colic, but sometimes it's appendicitis, intussusception, or intestinal infection.",
      conditions: { symptom: ["pain"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Diagnosis and relief",
      tags: ["pain", "abdomen", "surgery"],
      steps: [
        "If pain is acute, worsening, localized in the right lower quadrant (for appendicitis) or diffuse — call a doctor.",
        "Do not give painkillers (analgin, ibuprofen) before surgical examination — they mask the clinical picture.",
        "If vomiting and no bowel movement — possible intestinal obstruction (especially in infants). See a surgeon urgently.",
        "For diarrhea with pain — likely intestinal infection, give rehydration solution, monitor stool.",
        "If the child adopts a 'fetal' position and doesn't let you touch the abdomen — this is a warning sign.",
        "In infants, episodes of crying, pulling legs up — colic. Massage, warm diaper, dill water helps.",
        "If pain is accompanied by fever and rash — possible meningococcemia (rash doesn't fade when pressed). Go to hospital urgently."
      ],
      warnings: [
        "If appendicitis is suspected — do not give anything by mouth, even water.",
        "Do not give enemas, do not apply heat to the abdomen with acute pain — it may speed up appendix rupture.",
        "If the child is pale, covered in cold sweat, weak — call emergency services immediately."
      ]
    },
    // ========================================
    // 9. Breathing difficulty / cough — croup, asthma, pneumonia
    // ========================================
    {
      id: "breathing_difficulty",
      title: "🫁 Breathing difficulty, barking cough — emergency care",
      description: "Laryngeal stenosis (croup), bronchial asthma, pneumonia require quick action.",
      conditions: { symptom: ["breath"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Breathing relief and hospitalization",
      tags: ["breath", "croup", "asthma", "pneumonia"],
      steps: [
        "For barking cough and noisy inhalation (laryngeal stenosis) — provide cool moist air (open window, turn on humidifier or steam in the bathroom).",
        "If you have a nebulizer — inhalation with berodual or pulmicort (as prescribed by a doctor).",
        "For asthma — give bronchodilator (salbutamol) through inhaler or nebulizer.",
        "For high fever, cough with phlegm — suspicion of pneumonia, call a doctor.",
        "If the child has turned blue, cannot speak, wheezing or breathing has stopped — start CPR and call emergency services.",
        "Place the child in a semi-sitting position (this makes breathing easier), loosen the collar.",
        "Do not give expectorants if croup is suspected — they may worsen the condition.",
        "For any breathing difficulty in children under 1 year — call emergency services, do not wait."
      ],
      warnings: [
        "Never force a child to breathe over hot steam — it can cause burns and worsen swelling.",
        "In croup, don't panic, but call emergency services — the condition can progress rapidly.",
        "Aspirin and codeine are contraindicated for children with cough.",
        "If the child uses an inhaler more often than every 4 hours — this is a sign of uncontrolled asthma, therapy adjustment needed."
      ]
    }
  ]
};

// ===== EXPORT =====
window.healthDataEn = healthDataEn;
