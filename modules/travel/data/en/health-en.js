// modules/travel/data/en/health-en.js
// === MODULE: TRAVEL — HEALTH ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "travel",
    category: "health",
    version: "1.0.0",
    lang: "en",
    title: "🏥 Health Abroad",
    description: "Injury, illness, allergy, panic attack — how to get help",
    icon: "🏥",
    color: "#0d9488"
  },

  questions: [
    {
      id: "issue",
      type: "single",
      text: "What happened to your health?",
      options: [
        { id: "injury", label: "🩸 Injury (fracture, bruise, cut, burn)", tags: ["injury"] },
        { id: "illness", label: "🤒 Illness (fever, poisoning, infection)", tags: ["illness"] },
        { id: "chronic", label: "💊 Chronic condition flare-up", tags: ["chronic"] },
        { id: "dental", label: "🦷 Toothache / dental problems", tags: ["dental"] },
        { id: "allergy", label: "🤧 Severe allergic reaction", tags: ["allergy"] },
        { id: "mental", label: "🧠 Panic attack / mental health crisis", tags: ["mental"] }
      ]
    },
    {
      id: "severity",
      type: "single",
      text: "How serious is the condition?",
      conditions: { issue: ["injury", "illness", "chronic", "dental", "allergy", "mental"] },
      options: [
        { id: "critical", label: "🔴 Critical — need ambulance now", tags: ["critical"] },
        { id: "serious", label: "🟠 Serious — need a doctor today", tags: ["serious"] },
        { id: "moderate", label: "🟡 Moderate — can wait until tomorrow", tags: ["moderate"] },
        { id: "mild", label: "🟢 Mild — can handle on your own", tags: ["mild"] }
      ]
    },
    {
      id: "insurance",
      type: "single",
      text: "Do you have travel insurance?",
      conditions: { issue: ["injury", "illness", "chronic", "dental", "allergy", "mental"] },
      options: [
        { id: "yes", label: "✅ Yes, with medical coverage", tags: ["yes"] },
        { id: "no", label: "❌ No insurance", tags: ["no"] },
        { id: "unknown", label: "❓ Not sure / don't remember", tags: ["unknown"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      conditions: { issue: ["injury", "illness", "chronic", "dental", "allergy", "mental"] },
      options: [
        { id: "city", label: "🏙️ In a city / resort area", tags: ["city"] },
        { id: "remote", label: "🏔️ Remote area (mountains, jungle, desert)", tags: ["remote"] },
        { id: "cruise", label: "🚢 On a cruise ship", tags: ["cruise"] },
        { id: "transit", label: "✈️ At airport / train / bus", tags: ["transit"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. Critical condition — call ambulance
    // ============================================================
    {
      id: "critical_insurance",
      title: "🔴 Critical condition — call ambulance",
      description: "Every minute counts. Call emergency services immediately.",
      conditions: { severity: ["critical"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Emergency care",
      tags: ["critical", "emergency", "ambulance"],
      steps: [
        "Dial emergency number: 112 — EU, 911 — USA/Canada, 999 — UK, 103 — ambulance (CIS countries).",
        "If you don't know the local ambulance number — dial 112, it's universal in most countries.",
        "Clearly explain: what happened, where you are (address, landmarks), how many people are injured.",
        "Don't move the victim if spinal or head injury is suspected, unless necessary for safety.",
        "If you have insurance — call the insurance company after stabilization. Number is on the policy or app.",
        "If hospitalized — ask medical staff or an interpreter to contact the insurance company.",
        "Keep ALL documents: discharge summaries, receipts, prescriptions, referrals — needed for reimbursement."
      ],
      warnings: [
        "Never refuse an ambulance due to fear of costs — life is more important.",
        "In the USA, an ambulance can cost thousands of dollars — but insurance will cover most of it.",
        "If you're in a remote area — call search & rescue."
      ]
    },
    // ============================================================
    // 2. Injury abroad
    // ============================================================
    {
      id: "injury_abroad",
      title: "🩸 Injury abroad — seeing a doctor",
      description: "Get medical help and documents for insurance.",
      conditions: { issue: ["injury"], location: ["city"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "today",
      yield_estimate: "Medical care",
      tags: ["injury", "doctor", "insurance"],
      steps: [
        "For severe bleeding — apply a pressure bandage, elevate the limb. For fractures — immobilize with an improvised splint.",
        "Find the nearest clinic or emergency room. Ask at the hotel, use Google Maps or the insurance app.",
        "If you have insurance — call the insurance company BEFORE seeing a doctor (except emergencies). They will tell you which clinic to go to.",
        "Take your passport, insurance policy, and a translator (app or person).",
        "Get from the doctor: diagnosis in English/local language, medical report, receipts, prescriptions.",
        "If you paid yourself — keep all receipts and original documents for reimbursement.",
        "For serious injuries (fracture, concussion) — discuss early return home with the doctor."
      ],
      warnings: [
        "Don't go to 'traditional healers' — it's dangerous and insurance won't cover complications.",
        "In some countries (Thailand, Turkey) clinics overcharge tourists — call your insurance company."
      ]
    },
    // ============================================================
    // 3. Illness without insurance
    // ============================================================
    {
      id: "illness_no_insurance",
      title: "🤒 Illness without insurance",
      description: "Without insurance, treatment abroad is expensive, but there are ways to get help.",
      conditions: { issue: ["illness"], insurance: ["no"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "today",
      yield_estimate: "Affordable care",
      tags: ["illness", "no_insurance", "low_cost"],
      steps: [
        "If your condition allows — start at a pharmacy. Show the pharmacist your symptoms (via translator or pictures).",
        "In the EU, Russian citizens can get emergency care for free or at a reduced price (but planned treatment is at your own expense).",
        "Find a public hospital — it's cheaper than private clinics.",
        "Ask at the hotel for a recommendation for an affordable clinic or a house call doctor.",
        "If it's poisoning — drink plenty of water, take activated charcoal or Smecta (if in your first aid kit).",
        "If high fever (>39°C) or severe diarrhea for more than 2 days — see a doctor, even if it's expensive.",
        "Contact relatives — they may be able to transfer money or buy insurance remotely."
      ],
      warnings: [
        "Never buy 'medicines' from hand or in unverified places.",
        "In hot countries, dehydration develops very quickly — drink rehydration solutions (ORS)."
      ]
    },
    // ============================================================
    // 4. Chronic condition flare-up
    // ============================================================
    {
      id: "chronic_travel",
      title: "💊 Chronic condition flare-up",
      description: "Maintain your medication and find a replacement if supplies run out.",
      conditions: { issue: ["chronic"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "today",
      yield_estimate: "Medication and help",
      tags: ["chronic", "medication", "refill"],
      steps: [
        "Take your usual medication (if any left). Don't exceed the dosage.",
        "Find the nearest pharmacy. Show the medication name in English or the packaging.",
        "If the medication is not available under the same name — ask for a generic. Show the active ingredient.",
        "Use medication search apps: Drugs.com, 1mg, or local equivalents.",
        "If your condition worsens — see a doctor. Take your medical history (if available).",
        "For severe flare-ups (asthma, diabetes, heart) — call an ambulance immediately.",
        "Next time, bring double supplies and prescriptions in English."
      ],
      warnings: [
        "Never stop taking life-saving medications abruptly.",
        "Insulin and some medications require refrigeration — check with the hotel."
      ]
    },
    // ============================================================
    // 5. Toothache abroad
    // ============================================================
    {
      id: "dental_abroad",
      title: "🦷 Toothache abroad",
      description: "Toothache can ruin your vacation. Find a dentist as soon as possible.",
      conditions: { issue: ["dental"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "today",
      yield_estimate: "Dental care",
      tags: ["dental", "toothache", "dentist"],
      steps: [
        "Temporarily relieve pain: take ibuprofen or paracetamol, rinse with warm salt water, apply cold to the cheek.",
        "Find a dentist via: Google Maps, insurance app, hotel recommendation, Dental Departures website.",
        "If you have insurance — call the insurance company BEFORE the visit. Check if it covers dentistry (usually only emergency).",
        "Ask for a treatment estimate before starting. In some countries (Hungary, Thailand, Turkey) dentistry is cheaper than in Russia.",
        "If extraction or root canal is needed — discuss a temporary measure until you return home.",
        "Keep all receipts, X-rays, and reports for insurance or your dentist in Russia."
      ],
      warnings: [
        "Don't try to treat the tooth yourself — risk of infection is high.",
        "Cheap 'beach' dentists often use low-quality materials."
      ]
    },
    // ============================================================
    // 6. Severe allergic reaction
    // ============================================================
    {
      id: "allergy_severe",
      title: "🤧 Severe allergic reaction",
      description: "Anaphylaxis can be fatal. Act immediately.",
      conditions: { issue: ["allergy"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Emergency care",
      tags: ["allergy", "anaphylaxis", "emergency"],
      steps: [
        "If throat swelling, difficulty breathing, rash all over the body — IMMEDIATELY dial 112 (or local emergency number).",
        "If you have an epinephrine auto-injector (EpiPen) — use it immediately in the thigh through clothing.",
        "Lay the person down, elevate legs (for shock). Don't give anything to drink if swallowing is difficult.",
        "Even if symptoms subside after epinephrine — still go to the hospital. Secondary attack (biphasic anaphylaxis) is possible.",
        "For mild allergy (hives without swelling) — take an antihistamine (Suprastin, Cetrin, Zyrtec, Benadryl).",
        "Try to identify the allergen: new food, insect bite, medication, cosmetics — tell the doctor."
      ],
      warnings: [
        "Anaphylaxis can kill in 15 minutes — don't wait, call an ambulance.",
        "Always carry antihistamines and an epinephrine auto-injector if you have a known allergy."
      ]
    },
    // ============================================================
    // 7. Panic attack / psychological crisis
    // ============================================================
    {
      id: "mental_crisis",
      title: "🧠 Panic attack / psychological crisis",
      description: "Panic attacks are scary but not life-threatening. There are techniques for quick relief.",
      conditions: { issue: ["mental"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15-30 min",
      yield_estimate: "Relief",
      tags: ["mental", "panic_attack", "anxiety"],
      steps: [
        "Remind yourself: 'This is a panic attack, it will pass. I am safe.' Panic attacks rarely last more than 20–30 minutes.",
        "Breathe slowly: inhale 4 seconds — pause 4 seconds — exhale 6 seconds. Repeat for 2–3 minutes.",
        "Apply something cold to your face or dip your face in cold water — this activates the dive reflex and calms the nervous system.",
        "Look around and name 5 things you see, 4 sounds you hear, 3 things you can touch.",
        "Step away from crowds, find a quiet place. Ask someone nearby to help or just sit with you.",
        "If attacks repeat — see a doctor. In some countries, online consultations are available (Teladoc, BetterHelp, Russian-speaking psychologists on YouTalk).",
        "If you have thoughts of self-harm — immediately call a psychological crisis line."
      ],
      warnings: [
        "Don't drink alcohol to 'calm down' — it will worsen anxiety the next day.",
        "If you take antidepressants — don't skip doses, even with time zone changes."
      ]
    }
  ]
});