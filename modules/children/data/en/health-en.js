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
    // =================================