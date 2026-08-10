const healthDataEn = {
  category: "health",
  title: "🏥 Health",
  description: "Emergency: Health",
  questions: [
    {
      id: "issue",
      type: "single",
      text: "What happened to your health?",
      options: [
        { id: "injury", label: "Injury (fracture, bruise, cut, burn)", tags: ["injury"] },
        { id: "illness", label: "Illness (fever, poisoning, infection)", tags: ["illness"] },
        { id: "chronic", label: "Chronic condition flare-up", tags: ["chronic"] },
        { id: "dental", label: "Toothache / dental problems", tags: ["dental"] },
        { id: "allergy", label: "Severe allergic reaction", tags: ["allergy"] },
        { id: "mental", label: "Panic attack / mental health issue", tags: ["mental"] }
      ]
    },
    {
      id: "severity",
      type: "single",
      text: "How serious is the condition?",
      options: [
        { id: "critical", label: "Critical — need emergency ambulance now", tags: ["critical"] },
        { id: "serious", label: "Serious — need a doctor today", tags: ["serious"] },
        { id: "moderate", label: "Moderate — can wait until tomorrow", tags: ["moderate"] },
        { id: "mild", label: "Mild — can manage on my own", tags: ["mild"] }
      ]
    },
    {
      id: "insurance",
      type: "single",
      text: "Do you have travel insurance?",
      options: [
        { id: "yes", label: "Yes, with medical coverage", tags: ["yes"] },
        { id: "no", label: "No insurance", tags: ["no"] },
        { id: "unknown", label: "Don't know / don't remember", tags: ["unknown"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "city", label: "In city / resort area", tags: ["city"] },
        { id: "remote", label: "In remote area (mountains, jungle, desert)", tags: ["remote"] },
        { id: "cruise", label: "On a cruise ship", tags: ["cruise"] },
        { id: "transit", label: "At airport / train / bus", tags: ["transit"] }
      ]
    }
  ],
  solutions: [
    {
      id: "critical_insurance",
      title: "Critical condition — call emergency",
      conditions: { "severity": ["critical"] },
      tags: ["severity", "health"],
      description: "Every minute counts. Call emergency services immediately.",
      steps: [
        "Dial emergency number: 112 — EU, 911 — USA/Canada, 999 — UK, 101 — fire, 102 — police, 103 — ambulance (CIS countries).",
        "If you don't know the local emergency number — dial 112, it's universal in most countries.",
        "Clearly explain: what happened, where you are (address, landmarks), how many people are injured.",
        "Don't move the injured person if spinal or head injury, unless necessary for safety.",
        "If you have insurance — call the insurance company after stabilization. Number is on the policy or in the app.",
        "If hospitalized — ask medical staff or a translator to contact the insurance company.",
        "Keep ALL documents: discharge papers, receipts, prescriptions, referrals — needed for reimbursement."
      ],
      warnings: [
        "Never refuse emergency care due to cost fears — life comes first.",
        "In the USA ambulance can cost thousands of dollars — but insurance covers most of it.",
        "If in a remote area — call search & rescue."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Solution found"
    },
    {
      id: "injury_abroad",
      title: "Injury abroad — see a doctor",
      conditions: { "issue": ["injury"], "location": ["city"] },
      tags: ["issue", "location", "health"],
      description: "You need medical care and proper documentation for insurance.",
      steps: [
        "For severe bleeding — apply pressure bandage, elevate limb. For fracture — immobilize with improvised splint.",
        "Find the nearest clinic or trauma center. Ask at the hotel, use Google Maps, or your insurance app.",
        "If insured — call the insurance company BEFORE seeing a doctor (except emergencies). They will direct you to the right clinic.",
        "Bring passport, insurance policy, and a translator (app or person).",
        "Get from the doctor: diagnosis in English/local language, medical report, payment receipts, prescriptions.",
        "If you paid yourself — keep all receipts and original documents for reimbursement.",
        "For serious injuries (fracture, concussion) — discuss early return home with the doctor."
      ],
      warnings: [
        "Don't go to 'folk healers' — it's dangerous and insurance won't cover complications.",
        "In some countries (Thailand, Turkey) clinics overcharge tourists — call your insurance company."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "today",
      yield_estimate: "Solution found"
    },
    {
      id: "illness_no_insurance",
      title: "Illness without insurance",
      conditions: { "issue": ["illness"], "insurance": ["no"] },
      tags: ["issue", "insurance", "health"],
      description: "Without insurance treatment abroad is expensive, but there are ways to get help.",
      steps: [
        "If condition allows — start with a pharmacy. Show symptoms to the pharmacist (via translator or pictures).",
        "In the EU Russian citizens can receive emergency medical care for free or at reduced cost (but planned treatment is out-of-pocket).",
        "Find a public hospital — cheaper than private clinics.",
        "Ask at the hotel for a recommendation for an affordable clinic or house call doctor.",
        "If food poisoning — drink plenty of water, take activated charcoal or smecta (if in your first aid kit).",
        "For high fever (>39°C) or severe diarrhea for more than 2 days — see a doctor even if expensive.",
        "Contact relatives — they may be able to transfer money or buy insurance remotely (in some countries)."
      ],
      warnings: [
        "Never buy 'medicines' from street vendors or unverified places.",
        "In hot countries dehydration develops very quickly — drink rehydration solutions (ORS)."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "today",
      yield_estimate: "Solution found"
    },
    {
      id: "chronic_travel",
      title: "Chronic condition flare-up",
      conditions: { "issue": ["chronic"] },
      tags: ["issue", "health"],
      description: "The main thing is not to interrupt medication and find a substitute if supplies run out.",
      steps: [
        "Take your usual medication (if remaining). Do not exceed dosage.",
        "Find the nearest pharmacy. Show the medication name in English or the package.",
        "If medication not available under the same name — ask for a generic. Show the active ingredient.",
        "Use apps to find medications: Drugs.com, 1mg, or local equivalents.",
        "If condition worsens — see a doctor. Bring your medical history discharge summary (if available).",
        "For serious flare-ups (asthma, diabetes, heart) — call emergency immediately.",
        "Next time bring a double supply of medications and prescriptions in English."
      ],
      warnings: [
        "Never stop taking life-sustaining medications abruptly.",
        "Insulin and some medications require refrigeration — check with the hotel."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "today",
      yield_estimate: "Solution found"
    },
    {
      id: "dental_abroad",
      title: "Toothache abroad",
      conditions: { "issue": ["dental"] },
      tags: ["issue", "health"],
      description: "Toothache can ruin an entire vacation. Find a dentist as soon as possible.",
      steps: [
        "Temporarily relieve pain: take ibuprofen or paracetamol, rinse with warm salt water, apply cold to cheek.",
        "Find a dentist via: Google Maps, insurance app, hotel recommendation, or Dental Departures website.",
        "If insured — call insurance BEFORE the visit. Check if dentistry is covered (usually only emergency).",
        "Ask for a cost estimate before treatment begins. In some countries (Hungary, Thailand, Turkey) dentistry is cheaper than in Russia.",
        "If extraction or root canal needed — discuss temporary measures until you return home.",
        "Keep all receipts, X-rays, and conclusions for insurance or your dentist back home."
      ],
      warnings: [
        "Don't try to treat the tooth yourself — risk of infection is high.",
        "Cheap 'beach dentists' often use low-quality materials."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "today",
      yield_estimate: "Solution found"
    },
    {
      id: "allergy_severe",
      title: "Severe allergic reaction",
      conditions: { "issue": ["allergy"] },
      tags: ["issue", "health"],
      description: "Anaphylaxis can be fatal. Act immediately.",
      steps: [
        "For throat swelling, breathing difficulty, full-body rash — IMMEDIATELY dial 112 (or local emergency number).",
        "If you have an adrenaline auto-injector (EpiPen) — use it immediately in the thigh through clothing.",
        "Lay the person down, elevate legs (for shock). Don't give water if swallowing is difficult.",
        "Even if symptoms pass after adrenaline — you MUST go to the hospital. Secondary attack (biphasic anaphylaxis) is possible.",
        "For mild allergy (hives without swelling) — take antihistamine (Suprastin, Cetrin, Zyrtec, Benadryl).",
        "Try to identify the allergen: new food, insect bite, medication, cosmetics — tell the doctor."
      ],
      warnings: [
        "Anaphylaxis can kill within 15 minutes — don't wait, call emergency.",
        "Always carry antihistamines and an adrenaline auto-injector if you have known allergies."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Solution found"
    },
    {
      id: "mental_crisis",
      title: "Panic attack / psychological crisis",
      conditions: { "issue": ["mental"] },
      tags: ["issue", "health"],
      description: "Panic attacks are terrifying but not life-threatening. There are techniques for quick relief.",
      steps: [
        "Remind yourself: 'This is a panic attack, it will pass. I am safe.' Panic attacks rarely last longer than 20–30 minutes.",
        "Breathe slowly: inhale 4 seconds — hold 4 seconds — exhale 6 seconds. Repeat for 2–3 minutes.",
        "Apply a cold object to your face or immerse your face in cold water — this activates the dive reflex and calms the nervous system.",
        "Look around and name 5 objects you see, 4 sounds you hear, 3 things you can touch.",
        "Step away from crowds, find a quiet place. Ask someone nearby to help or just sit with you.",
        "If attacks recur — see a doctor. In some countries you can get online consultation (Teladoc, BetterHelp, Russian-speaking psychologists on YouTalk).",
        "If having thoughts of self-harm — immediately call emergency psychological helpline."
      ],
      warnings: [
        "Don't drink alcohol to 'calm down' — it worsens anxiety the next day.",
        "If taking antidepressants — don't skip doses, even with time zone changes."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "15-30 min",
      yield_estimate: "Solution found"
    }
  ]
}

// ===== EXPORT =====
window.healthDataEn = healthDataEn;
console.log('✅ healthDataEn loaded');
