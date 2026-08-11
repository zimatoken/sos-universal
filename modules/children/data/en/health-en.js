// === MODULE: CHILDREN вЂ” HEALTH (EN) ===
const healthData = {
  category: "health",
  title: "рџ¤’ Health",
  description: "Fever, vomiting, allergy, seizures, refusal to eat вЂ” when to call a doctor",

  questions: [
    {
      id: "symptom",
      text: "What is the main symptom?",
      type: "single",
      options: [
        { id: "fever", label: "рџЊЎпёЏ High temperature", tags: ["fever"] },
        { id: "vomit", label: "рџ¤ў Vomiting / diarrhea", tags: ["vomit"] },
        { id: "allergy", label: "рџ¤§ Rash / swelling / hives", tags: ["allergy"] },
        { id: "seizure", label: "вљЎ Seizures / loss of consciousness", tags: ["seizure"] },
        { id: "breath", label: "рџ«Ѓ Difficulty breathing / cough", tags: ["breath"] },
        { id: "pain", label: "рџ¤• Severe pain (stomach, head, ear)", tags: ["pain"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "infant", label: "рџ‘¶ Infant (0вЂ“1 year)", tags: ["infant"] },
        { id: "toddler", label: "рџ§’ 1вЂ“3 years", tags: ["toddler"] },
        { id: "preschool", label: "рџ§’ 3вЂ“7 years", tags: ["preschool"] },
        { id: "school", label: "рџ§‘ 7+ years", tags: ["school"] }
      ]
    },
    {
      id: "duration",
      text: "How long has it lasted?",
      type: "single",
      options: [
        { id: "less_1h", label: "Less than 1 hour", tags: ["acute"] },
        { id: "hours", label: "Several hours", tags: ["hours"] },
        { id: "days", label: "1вЂ“3 days", tags: ["days"] },
        { id: "week", label: "More than 3 days", tags: ["week"] }
      ]
    }
  ],

  solutions: [
    {
      id: "high_fever_action",
      title: "рџЊЎпёЏ High temperature вЂ” when to sound the alarm",
      description: "Temperature is a protective reaction. But in infants and at high numbers вЂ” it's dangerous.",
      conditions: { symptom: ["fever"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10вЂ“30 minutes",
      yield_estimate: "Reducing temperature / diagnosis",
      tags: ["fever", "health", "emergency"],
      steps: [
        "Measure temperature with an electronic thermometer (oral, armpit, ear, rectal). Record the exact number and time",
        "Under 3 months: temperature > 38В°C вЂ” immediately see a doctor / emergency. Immunity is weak, infection develops lightning fast",
        "3вЂ“36 months: > 39В°C or temperature > 38.5В°C for more than 24 hours вЂ” see a doctor. For seizures вЂ” emergency",
        "Over 3 years: > 39.5В°C or > 39В°C for more than 3 days вЂ” see a doctor. For febrile seizures вЂ” emergency",
        "Reduce temperature if > 38.5В°C and the child feels unwell. Paracetamol (10вЂ“15 mg/kg) or Ibuprofen (5вЂ“10 mg/kg). No aspirin вЂ” Reye's syndrome!",
        "Sponging: warm water (not cold, not vinegar!), room 20вЂ“22В°C, light clothing. Cold sponging causes shivering and raises temperature",
        "Give fluids frequently, in small amounts: water, compote, tea. For vomiting вЂ” 1 teaspoon every 5 minutes. Dehydration is more dangerous than fever",
        "If temperature does not drop within 1 hour after antipyretic вЂ” emergency. This may be meningitis, sepsis, pneumonia"
      ],
      warnings: [
        "DO NOT give aspirin to children вЂ” Reye's syndrome (liver and brain damage, fatal)",
        "DO NOT sponge with vinegar, alcohol, ice water вЂ” this causes vasospasm, shivering, temperature rise",
        "DO NOT wrap the child up 'to sweat' вЂ” overheating, heat stroke, dehydration. Light clothing, cool room",
        "Febrile seizures (arms, legs twitching, eyes rolling back) вЂ” emergency immediately. Lay on the side, do not put anything in the mouth"
      ]
    },
    {
      id: "vomit_diarrhea",
      title: "рџ¤ў Vomiting and diarrhea вЂ” dehydration and infection",
      description: "Rotavirus, poisoning, appendicitis вЂ” causes vary. The main thing is to prevent dehydration.",
      conditions: { symptom: ["vomit"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“6 hours",
      yield_estimate: "Stopping vomiting / diagnosis",
      tags: ["vomit", "poisoning", "infection"],
      steps: [
        "If vomiting is green (bile) or with blood вЂ” emergency immediately. This is a sign of intestinal obstruction or bleeding",
        "If diarrhea with blood, black stool вЂ” emergency. Intestinal infection, dysentery, bleeding",
        "For vomiting вЂ” do not give food or drink for 30вЂ“60 minutes. Then вЂ” 1 teaspoon of water / rehydration solution every 5 minutes. Too much liquid will trigger new vomiting",
        "Rehydron (or equivalents: Hydrovit, Electrolyte): 1 packet per 1 liter of water. Give frequently, in small amounts. This prevents dehydration",
        "If no rehydration solution вЂ” homemade: 1 liter boiled water + 1 tsp salt + 8 tsp sugar. Or rice broth, dried fruit compote",
        "Diet: 4вЂ“6 hours after vomiting stops вЂ” water-based cereals (rice, buckwheat), crackers, banana, applesauce. No milk, fatty, or sweet foods",
        "If vomiting / diarrhea > 6 times per hour, temperature > 38.5В°C, drowsiness, no urine for > 6 hours вЂ” emergency. Dehydration is dangerous",
        "If suspected appendicitis (pain in right side, nausea, fever) вЂ” DO NOT give painkillers, DO NOT give enema, DO NOT feed. Emergency"
      ],
      warnings: [
        "DO NOT give antiemetics without a doctor's prescription вЂ” they mask serious causes (appendicitis, obstruction)",
        "DO NOT give sorbents (activated charcoal, Smecta) for intestinal obstruction вЂ” it will worsen",
        "DO NOT give antibiotics on your own вЂ” most intestinal infections are viral, antibiotics are useless and harmful",
        "Dehydration in children develops quickly: dry lips, no tears, sunken fontanelle (in infants), dark urine or no urine for 6+ hours"
      ]
    },
    {
      id: "allergy_emergency",
      title: "рџ¤§ Allergy and anaphylaxis вЂ” emergency help",
      description: "Hives вЂ” tolerable. Quincke's edema and anaphylaxis вЂ” deadly. Know the difference.",
      conditions: { symptom: ["allergy"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“10 minutes",
      yield_estimate: "Stopping the allergic reaction",
      tags: ["allergy", "anaphylaxis", "emergency"],
      steps: [
        "Mild allergy (hives, sneezing, runny nose, itching): give antihistamine (Zyrtec, Fenistil, Suprastin вЂ” age-appropriate). Monitor for 30 minutes",
        "Quincke's edema (swollen lips, tongue, eyelids, difficulty swallowing) вЂ” emergency immediately. Give antihistamine, apply cold. Do not give drinks вЂ” choking risk",
        "Anaphylaxis (difficulty breathing, wheezing, pallor, weak pulse, loss of consciousness) вЂ” call 112 immediately. This is fatal",
        "If you have an epinephrine auto-injector (EpiPen) вЂ” inject into the thigh through clothing. Hold for 10 seconds. Can repeat in 5вЂ“15 minutes",
        "Lay the child on their back, legs above head (for shock). If vomiting вЂ” on the side. Do not give drinks, food, or oral medication during swelling",
        "After anaphylaxis вЂ” mandatory hospitalization for 24 hours of observation. Recurrence possible in 4вЂ“12 hours (biphasic anaphylaxis)",
        "Find the cause: what was eaten, applied, where they were, insect bite, medication. Save packaging, photos. Tell the doctor",
        "After discharge вЂ” get a referral to an allergist. Get tests (IgE, skin prick tests). Always carry an auto-injector and antihistamine"
      ],
      warnings: [
        "Anaphylaxis kills in 5вЂ“30 minutes. Do not wait for it to 'pass on its own'. Epinephrine is the only salvation. Antihistamines DO NOT replace epinephrine",
        "Quincke's edema can turn into anaphylaxis within minutes. Monitor breathing, pulse, consciousness. If worsening вЂ” emergency",
        "DO NOT give food, water, or oral medication during tongue / throat swelling вЂ” the child may choke",
        "EpiPen auto-injector: shelf life 12вЂ“18 months. Check the date. Store in a dark cool place, not in a car (overheating)"
      ]
    },
    {
      id: "seizure_first_aid",
      title: "вљЎ Seizures / loss of consciousness вЂ” first aid",
      description: "Febrile seizures in children вЂ” scary but usually safe. Epilepsy вЂ” requires monitoring.",
      conditions: { symptom: ["seizure"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5вЂ“15 minutes",
      yield_estimate: "Safe ending of the seizure",
      tags: ["seizure", "epilepsy", "emergency"],
      steps: [
        "Do not panic. Most seizures last 1вЂ“3 minutes and stop on their own. Your task is to prevent injury and choking",
        "Lay the child on their side (recovery position) вЂ” this prevents tongue swallowing and vomit entering the airways",
        "Remove dangerous objects: furniture corners, sharp objects, hot items. Place something soft under the head (blanket, pillow, clothing)",
        "DO NOT put anything in the mouth: spoons, fingers, cloth. This breaks teeth, causes vomiting, choking. The tongue is NOT swallowed during seizures вЂ” this is a myth",
        "DO NOT hold the child by force, DO NOT try to stop movements. This causes fractures, dislocations, injuries",
        "Time the seizure. If > 5 minutes вЂ” emergency immediately. This is status epilepticus, requires diazepam administration",
        "After the seizure the child will be sleepy, confused, may not recognize you. This is normal (postictal state). Put to sleep, monitor breathing",
        "First seizure in life вЂ” mandatory emergency and examination: EEG, MRI, blood tests. Even if it 'passed on its own' вЂ” this is serious"
      ],
      warnings: [
        "DO NOT put anything in the mouth during seizures вЂ” it's more dangerous than the seizure itself. Teeth break, vomit goes into the lungs",
        "DO NOT give water, medication, or food during and immediately after a seizure вЂ” the child may choke. Wait for full consciousness (15вЂ“30 minutes)",
        "If seizure > 5 minutes вЂ” this is an emergency. Emergency, anticonvulsant administration. Brain damage possible",
        "Febrile seizures (with fever) вЂ” more common in children 6 months вЂ“ 5 years. Usually safe, but the first time вЂ” always emergency to rule out meningitis"
      ]
    }
  ]
};

window.healthDataEn = healthData;
