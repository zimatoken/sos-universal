// === MODULE: LAWYER — TRAFFIC ACCIDENT (ENGLISH) ===
const dtpDataEn = {
  category: "dtp",
  title: "🚨 Traffic accident / Crash",
  description: "Legal assistance for road traffic accidents",

  questions: [
    {
      id: "dtp_type",
      text: "What happened in the accident?",
      type: "single",
      options: [
        { id: "minor", label: "🚗 Minor accident, minor damage", tags: ["minor", "simple"] },
        { id: "serious", label: "🚨 Serious accident, there are injured", tags: ["serious", "injuries"] },
        { id: "pedestrian", label: "🚶 Hit a pedestrian / cyclist", tags: ["pedestrian", "injuries"] },
        { id: "hit_run", label: "🏃 The culprit fled the scene", tags: ["hit_run", "unknown"] },
        { id: "dispute", label: "⚖️ Dispute about fault / insurance refuses to pay", tags: ["dispute", "insurance"] },
        { id: "with_osago", label: "📄 The culprit has OSAGO, insurance is underpaying", tags: ["osago", "underpayment"] }
      ]
    },
    {
      id: "has_osago",
      text: "Does the culprit have an OSAGO policy?",
      type: "single",
      options: [
        { id: "osago_yes", label: "✅ Yes, there is a valid policy", tags: ["osago_yes"] },
        { id: "osago_no", label: "❌ No, no policy or expired", tags: ["osago_no"] },
        { id: "osago_unknown", label: "❓ I don't know / the culprit fled", tags: ["osago_unknown"] }
      ]
    },
    {
      id: "docs",
      text: "What documents do you have?",
      type: "single",
      options: [
        { id: "full", label: "📄 All: OSAGO, license, vehicle registration, Euro protocol / traffic police certificate", tags: ["full", "complete"] },
        { id: "partial", label: "📋 Partially (something is missing)", tags: ["partial", "incomplete"] },
        { id: "none", label: "❌ No documents / the culprit fled", tags: ["none", "missing"] }
      ]
    },
    {
      id: "witnesses",
      text: "Are there any witnesses to the accident?",
      type: "single",
      options: [
        { id: "yes_witness", label: "👥 Yes, there are witnesses (contacts recorded)", tags: ["witness_yes"] },
        { id: "no_witness", label: "❌ No witnesses", tags: ["witness_no"] },
        { id: "video", label: "📹 There is a video recording (cameras, dashcam)", tags: ["video"] }
      ]
    },
    {
      id: "injuries",
      text: "Are there any injured?",
      type: "single",
      conditions: { dtp_type: ["serious", "pedestrian"] },
      options: [
        { id: "injuries_severe", label: "Yes, severe injuries, hospitalization", tags: ["severe"] },
        { id: "injuries_light", label: "Yes, minor injuries (bruises, scratches)", tags: ["light"] },
        { id: "no_injuries", label: "No injured", tags: ["no_injuries"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Euro protocol (without traffic police)
    // ========================================
    {
      id: "europrotocol",
      title: "📋 Euro protocol (without traffic police)",
      description: "For minor accidents without injuries and without dispute about fault, you can use the Euro protocol — it's faster and simpler.",
      conditions: { dtp_type: ["minor"], docs: ["full"], has_osago: ["osago_yes"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "OSAGO payout up to 400,000 rubles",
      tags: ["europrotocol", "osago", "simple"],
      steps: [
        "Turn on hazard lights, set up a warning triangle",
        "Take photos: general view, damage, license plates of both cars, road signs, skid marks",
        "Fill out the Euro protocol (paper or through the 'Accident-Europrotocol' app)",
        "Draw the accident diagram, describe the circumstances, mark who is at fault (if agreed)",
        "Both drivers sign the protocol, each keeps their copy",
        "Within 5 business days, file a claim with your insurance company",
        "Attach: Euro protocol, photos, accident notification, copies of documents",
        "If the at-fault driver's insurance underpays — demand an independent assessment"
      ],
      warnings: [
        "DO NOT leave the accident scene before documentation — Article 12.27 of the Code of Administrative Offenses",
        "DO NOT sign the Euro protocol if you have doubts about fault — call the traffic police",
        "If the at-fault driver has no OSAGO — the Euro protocol is INVALID, call the traffic police",
        "Maximum payout under the Euro protocol — 400,000 rubles (since 2024)"
      ]
    },
    // ========================================
    // 2. Calling traffic police (GIBDD)
    // ========================================
    {
      id: "gibdd_call",
      title: "👮 Calling traffic police to the accident scene",
      description: "For serious accidents, injuries, disputes about fault, or lack of OSAGO — call the traffic police.",
      conditions: { dtp_type: ["serious", "hit_run", "dispute", "pedestrian"], has_osago: ["osago_no", "osago_unknown"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Traffic police certificate + protocol",
      tags: ["gibdd", "police", "serious"],
      steps: [
        "Call an ambulance (103) if there are injured — FIRST THING",
        "Call the traffic police: 102 or the unified number 112",
        "DO NOT move the cars until the inspector arrives (unless it obstructs traffic)",
        "Photograph everything before the traffic police arrive — tracks, damage, position of cars",
        "Ask witnesses to leave their contacts (write down phone numbers)",
        "The inspector will draw a diagram, interview participants, and issue a traffic police certificate",
        "Obtain copies of all documents: certificate, diagram, protocol",
        "Contact your insurance within 5 days with the package of documents"
      ],
      warnings: [
        "DO NOT leave the accident scene — fine or license suspension (Article 12.27 of the Code of Administrative Offenses)",
        "DO NOT admit fault verbally on the spot — it's decided by insurance or the court",
        "DO NOT sign traffic police documents without reading — demand a copy",
        "If the inspector refuses to come (minor accident) — insist if there's a dispute about fault"
      ]
    },
    // ========================================
    // 3. Perpetrator without OSAGO or fled
    // ========================================
    {
      id: "no_osago",
      title: "🏃 Perpetrator without OSAGO or fled",
      description: "If the perpetrator has no OSAGO or fled — your path: direct claim, court, or appeal to the RSA.",
      conditions: { has_osago: ["osago_no", "osago_unknown"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "1-6 months",
      yield_estimate: "Compensation through court or RSA",
      tags: ["no_osago", "court", "unknown"],
      steps: [
        "Record the perpetrator's license plate (photo, video, witnesses, cameras)",
        "Contact the traffic police — they will identify the perpetrator by the license plate",
        "Obtain a traffic police certificate indicating the at-fault driver",
        "Send a claim to the perpetrator demanding compensation (registered mail with acknowledgment)",
        "If the perpetrator does not respond within 30 days — file a lawsuit",
        "In the lawsuit: repair cost (based on independent assessment), towing, rental of a replacement car",
        "You can contact your insurance for 'direct compensation for losses' (if you have CASCO)",
        "If the perpetrator is unknown — contact the RSA (Russian Union of Auto Insurers)"
      ],
      warnings: [
        "DO NOT repair the car BEFORE the assessment — otherwise the court will refuse compensation",
        "Independent assessment is MANDATORY — insurance estimates are 2-3 times lower",
        "Statute of limitations — 3 years from the date of the accident",
        "If the perpetrator fled — file a wanted report through the traffic police"
      ]
    },
    // ========================================
    // 4. Insurance refuses to pay
    // ========================================
    {
      id: "insurance_refuse",
      title: "❌ Insurance refuses to pay",
      description: "The insurance company found a reason not to pay — this can be challenged.",
      conditions: { dtp_type: ["dispute", "with_osago"], docs: ["full", "partial"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Payout + 1% penalty for each day",
      tags: ["insurance", "refuse", "court"],
      steps: [
        "Demand a written refusal stating the reason (your legal right)",
        "Check the grounds for refusal under Article 12 of the Federal Law 'On OSAGO' — often the refusal is illegal",
        "Send a claim to the insurance company (registered mail, keep the receipt)",
        "If the refusal is illegal — complaint to the Central Bank of Russia (cbr.ru → complaints)",
        "Simultaneously — file a lawsuit against the insurance company (amount up to 400,000 rubles — magistrate's court)",
        "In the lawsuit demand: damage payment + 1% penalty for each day of delay + compensation for moral damages",
        "Contact an auto lawyer — initial consultation is often free",
        "If refused again — demand an independent assessment"
      ],
      warnings: [
        "DO NOT agree to a reduced assessment by the insurance — demand an independent assessment",
        "Statute of limitations — 3 years, but the penalty is calculated from the 20th day after filing the claim",
        "DO NOT sign the inspection report if you disagree with the assessment — write objections",
        "The Central Bank actually fines insurance companies for illegal refusals — complaints work"
      ]
    },
    // ========================================
    // 5. Accident with injuries
    // ========================================
    {
      id: "injuries_dtp",
      title: "🚑 Accident with injuries — action plan",
      description: "In an accident with injuries, the main thing is life and health. Documents and insurance are secondary.",
      conditions: { dtp_type: ["serious", "pedestrian"], injuries: ["injuries_severe", "injuries_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 hours (ambulance + traffic police)",
      yield_estimate: "Compensation for health damage + OSAGO payout",
      tags: ["injuries", "ambulance", "police"],
      steps: [
        "FIRST THING: call an ambulance (103) — even if injuries seem minor",
        "Call the traffic police (102) — they are required to document accidents with injuries",
        "DO NOT move the injured person (except in cases of direct threat to life)",
        "Provide first aid: stop bleeding, ensure air access",
        "Record the condition of the injured person on video/photo before the ambulance arrives",
        "Collect witnesses' contacts — they are important for court",
        "Obtain the traffic police certificate, diagram, protocol, medical documents (injury report)",
        "Contact the insurance: compensation for health damage (up to 500,000 rubles under OSAGO)",
        "For severe injuries — file a lawsuit for compensation of moral damages"
      ],
      warnings: [
        "DO NOT give the injured person water/food until the ambulance arrives — it may cause harm",
        "DO NOT move the injured person if a spinal injury is suspected",
        "If the injured person is in critical condition — ambulance is called FIRST THING",
        "Statute of limitations for health damage compensation — 3 years"
      ]
    },
    // ========================================
    // 6. Gathering evidence in a dispute
    // ========================================
    {
      id: "evidence_collection",
      title: "📸 Gathering evidence in a fault dispute",
      description: "If you disagree with the accusations, gather evidence before court.",
      conditions: { dtp_type: ["dispute"], witnesses: ["yes_witness", "video"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-7 days",
      yield_estimate: "Evidence for court or insurance",
      tags: ["evidence", "dispute", "court"],
      steps: [
        "Take the most detailed photos and videos: general view, damage, skid marks, road signs, traffic lights",
        "Collect contacts of all witnesses — interview them, record their statements",
        "Request video recordings from surveillance cameras, dashcams, stores",
        "Keep receipts, contracts, correspondence with participants and insurance",
        "If you are confident in your innocence — order an independent assessment",
        "Write a written explanation for the traffic police and insurance — clearly, logically, based on facts",
        "If the insurance underpays — demand an independent assessment",
        "If the insurance refuses — prepare a lawsuit"
      ],
      warnings: [
        "DO NOT destroy evidence (dashcam, photos, receipts)",
        "DO NOT give verbal explanations without recording — demand written documentation",
        "If a witness is against you — also record their testimony, it may help in court",
        "Video from cameras is often stored for a limited time (up to 7 days) — request immediately"
      ]
    },
    // ========================================
    // 7. Independent assessment
    // ========================================
    {
      id: "independent_expertise",
      title: "🔬 Independent assessment after an accident",
      description: "If the insurance underpays or you disagree with the amount — order an independent assessment.",
      conditions: { dtp_type: ["dispute", "with_osago"], docs: ["full", "partial"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "7-14 days",
      yield_estimate: "Real repair cost + penalty",
      tags: ["expertise", "independent", "repair"],
      steps: [
        "Choose an accredited expert organization (not affiliated with insurance)",
        "Sign a contract for an independent assessment (cost 5,000-15,000 rubles)",
        "The expert will inspect the car and draw up an act with a list of damages",
        "Obtain the expert's conclusion with an estimate of repair costs",
        "Send the conclusion to the insurance together with a pre-trial claim",
        "If the insurance does not respond — file a lawsuit with this conclusion",
        "In court, the expert's conclusion is the main evidence",
        "If you win, the cost of the assessment can be included in the claim"
      ],
      warnings: [
        "Independent assessment must be conducted BEFORE repairing the car",
        "Only contact accredited organizations (list on the Ministry of Justice website)",
        "The cost of the assessment can be included in the claim if the court sides with you",
        "If the insurance disputes the assessment — the court may order a repeat assessment"
      ]
    }
  ]
};

// ===== EXPORT =====
window.dtpDataEn = dtpDataEn;
