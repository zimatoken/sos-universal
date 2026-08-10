// === MODULE: TRAVEL — HEALTH (EN) ===
const travelHealthDataEn = {
  category: "travel_health",
  title: "🏥 Health",
  description: "Injuries, illnesses, chronic conditions, allergies, panic attacks — what to do abroad",

  questions: [
    {
      id: "issue",
      type: "single",
      text: "What happened to your health?",
      options: [
        { id: "injury", label: "Injury (fracture, bruise, cut, burn)", tags: ["injury"] },
        { id: "illness", label: "Illness (fever, poisoning, infection)", tags: ["illness"] },
        { id: "chronic", label: "Chronic disease flare-up", tags: ["chronic"] },
        { id: "dental", label: "Toothache / dental problems", tags: ["dental"] },
        { id: "allergy", label: "Severe allergic reaction", tags: ["allergy"] },
        { id: "mental", label: "Panic attack / mental health issues", tags: ["mental"] }
      ]
    },
    {
      id: "severity",
      type: "single",
      text: "How serious is the condition?",
      options: [
        { id: "critical", label: "Critical — need emergency help immediately", tags: ["critical"] },
        { id: "serious", label: "Serious — need a doctor today", tags: ["serious"] },
        { id: "moderate", label: "Moderate — can wait until tomorrow", tags: ["moderate"] },
        { id: "mild", label: "Mild — can manage on your own", tags: ["mild"] }
      ]
    },
    {
      id: "insurance",
      type: "single",
      text: "Do you have travel insurance?",
      options: [
        { id: "yes", label: "Yes, I have insurance with medical coverage", tags: ["insured"] },
        { id: "no", label: "No insurance", tags: ["uninsured"] },
        { id: "unknown", label: "I don't know / don't remember", tags: ["unknown"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "city", label: "In a city / resort area", tags: ["city"] },
        { id: "remote", label: "In a remote area (mountains, jungle, desert)", tags: ["remote"] },
        { id: "cruise", label: "On a cruise ship", tags: ["cruise"] },
        { id: "transit", label: "At the airport / train / bus", tags: ["transit"] }
      ]
    }
  ],

  solutions: [
    {
      id: "critical_insurance",
      title: "🚨 Critical condition — call emergency",
      description: "Every minute counts. Call emergency services immediately.",
      conditions: { severity: ["critical"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Emergency help",
      tags: ["critical", "emergency", "ambulance"],
      steps: [
        "Dial emergency number: 112 — in the EU, 911 — in the US/Canada, 999 — in the UK.",
        "If you don't know the local emergency number — dial 112, it's universal in most countries.",
        "Clearly explain: what happened, where you are (address, landmarks), how many people are injured.",
        "Do not move the injured person with spinal or head injuries unless necessary for safety.",
        "If you have insurance — call the insurance company after stabilization.",
        "If hospitalized — ask medical staff or a translator to contact your insurance.",
        "Keep ALL documents: discharge summaries, receipts, prescriptions, referrals."
      ],
      warnings: [
        "Never refuse emergency help out of fear of costs — life is more important.",
        "In the US, ambulance can cost thousands of dollars — but insurance will cover most of it.",
        "If you're in a remote area — call search & rescue."
      ]
    },
    {
      id: "injury_abroad",
      title: "🩹 Injury abroad — seeing a doctor",
      description: "You need to get medical help and document everything for insurance.",
      conditions: { issue: ["injury"], location: ["city"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "today",
      yield_estimate: "Medical care",
      tags: ["injury", "hospital", "insurance"],
      steps: [
        "For severe bleeding — apply pressure, elevate the limb. For fractures — immobilize with a splint.",
        "Find the nearest clinic or emergency room. Ask at the hotel, use Google Maps or your insurance app.",
        "If you have insurance — call the insurance company BEFORE visiting a doctor (except emergencies).",
        "Bring your passport, insurance policy, translator (app or person).",
        "Get from the doctor: diagnosis in English/local language, medical report, receipts, prescriptions.",
        "If you paid out of pocket — keep all receipts and original documents for reimbursement.",
        "For serious injuries (fracture, concussion) — discuss early return home with your doctor."
      ],
      warnings: [
        "Don't visit 'traditional healers' — it's dangerous and insurance won't cover complications.",
        "In some countries (Thailand, Turkey) clinics inflate prices for tourists — call your insurance."
      ]
    },
    {
      id: "illness_no_insurance",
      title: "🤒 Illness without insurance",
      description: "Without insurance, treatment abroad is expensive, but there are ways to get help.",
      conditions: { issue: ["illness"], insurance: ["no"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "today",
      yield_estimate: "Medical care",
      tags: ["illness", "no_insurance", "pharmacy"],
      steps: [
        "If condition allows — start at the pharmacy. Show the pharmacist symptoms (via translator or pictures).",
        "In the EU, Russian citizens can get emergency care for free or at a reduced price.",
        "Find a public hospital — it's cheaper than private clinics.",
        "Ask at the hotel for a recommendation for an affordable clinic or house call doctor.",
        "For poisoning — drink plenty of water, take activated charcoal or smecta.",
        "If temperature >39°C or severe diarrhea for more than 2 days — see a doctor even if expensive.",
        "Contact relatives — they may be able to send money or buy insurance remotely."
      ],
      warnings: [
        "Never buy 'medications' from street vendors or unverified places.",
        "In hot countries, dehydration develops very quickly — drink rehydration solutions (ORS)."
      ]
    },
    {
      id: "chronic_travel",
      title: "💊 Chronic disease flare-up",
      description: "The main thing — don't stop taking your medications and find replacements if supplies run out.",
      conditions: { issue: ["chronic"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "today",
      yield_estimate: "Medication",
      tags: ["chronic", "medication", "pharmacy"],
      steps: [
        "Take your usual medication (if any left). Don't exceed the dosage.",
        "Find the nearest pharmacy. Show the drug name in English or the packaging.",
        "If the drug isn't available under the same name — ask for a generic. Show the active ingredient.",
        "Use medication search apps: Drugs.com, 1mg, or local equivalents.",
        "If condition worsens — see a doctor. Bring your medical history (if available).",
        "For severe flare-ups (asthma, diabetes, heart) — call emergency immediately.",
        "Next time bring a double supply of medications and prescriptions in English."
      ],
      warnings: [
        "Never abruptly stop taking life-saving medications.",
        "Insulin and some medications require refrigeration — check with the hotel."
      ]
    },
    {
      id: "dental_abroad",
      title: "🦷 Toothache abroad",
      description: "Tooth pain can ruin your vacation. Find a dentist as soon as possible.",
      conditions: { issue: ["dental"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "today",
      yield_estimate: "Dental care",
      tags: ["dental", "pain", "dentist"],
      steps: [
        "Temporarily relieve pain: take ibuprofen or paracetamol, rinse with warm salt water, apply cold to the cheek.",
        "Find a dentist via: Google Maps, your insurance app, hotel recommendation, Dental Departures website.",
        "If you have insurance — call the insurance company BEFORE visiting. Check if dentistry is covered.",
        "Ask for a treatment estimate before starting work.",
        "For extraction or root canal — discuss a temporary solution until you return home.",
        "Keep all receipts, X-rays, and reports for your insurance or your dentist in Russia."
      ],
      warnings: [
        "Don't try to treat the tooth yourself — infection risk is high.",
        "Cheap 'beach' dentists often use low-quality materials."
      ]
    },
    {
      id: "allergy_severe",
      title: "🌡️ Severe allergic reaction",
      description: "Anaphylaxis can be fatal. Act immediately.",
      conditions: { issue: ["allergy"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Emergency help",
      tags: ["allergy", "anaphylaxis", "emergency"],
      steps: [
        "If throat swelling, difficulty breathing, full-body rash — immediately dial 112.",
        "If you have an adrenaline auto-injector (EpiPen) — use it immediately in the thigh through clothing.",
        "Lay the person down, elevate legs (for shock). Don't give fluids if there are swallowing problems.",
        "Even if symptoms subside after adrenaline — you must go to the hospital.",
        "For mild allergies (hives without swelling) — take antihistamines (Suprastin, Cetrin, Zyrtec, Benadryl).",
        "Try to identify the allergen: new food, insect bite, medication, cosmetics — tell the doctor."
      ],
      warnings: [
        "Anaphylaxis can kill in 15 minutes — don't wait, call emergency.",
        "Always carry antihistamines and adrenaline auto-injector if you have known allergies."
      ]
    },
    {
      id: "mental_crisis",
      title: "🧠 Panic attack / psychological crisis",
      description: "Panic attacks are very scary but not life-threatening. There are techniques for quick relief.",
      conditions: { issue: ["mental"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "15-30 min",
      yield_estimate: "Relief",
      tags: ["mental", "panic", "anxiety"],
      steps: [
        "Remind yourself: 'This is a panic attack, it will pass. I'm safe.' Panic attacks rarely last more than 20–30 minutes.",
        "Breathe slowly: inhale 4 seconds — pause 4 seconds — exhale 6 seconds. Repeat for 2–3 minutes.",
        "Apply a cold object to your face or dip your face in cold water.",
        "Look around and name 5 things you see, 4 sounds you hear, 3 things you can touch.",
        "Move away from crowds, find a quiet place. Ask someone nearby to help or just sit with you.",
        "If attacks recur — see a doctor. You can get an online consultation.",
        "If you have self-harm thoughts — immediately call a psychological crisis hotline."
      ],
      warnings: [
        "Don't drink alcohol to 'calm down' — it will worsen anxiety the next day.",
        "If you're taking antidepressants — don't skip doses, even when changing time zones."
      ]
    }
  ]
};

// ===== EXPORT =====
window.travelHealthDataEn = travelHealthDataEn;
console.log('✅ travelHealthDataEn loaded');