// === MODULE: ACCIDENT / CRASH (ENGLISH) ===
const dtpDataEn = {
  category: "dtp",
  title: "🚨 Accident / Crash",
  description: "Legal assistance in case of a traffic accident",

  questions: [
    {
      id: "dtp_type",
      text: "What happened in the accident?",
      type: "single",
      options: [
        { id: "minor", label: "Minor accident, slight damage", tags: ["minor", "simple"] },
        { id: "serious", label: "Serious accident, injuries", tags: ["serious", "injuries"] },
        { id: "pedestrian", label: "Hit a pedestrian / cyclist", tags: ["pedestrian", "injuries"] },
        { id: "hit_run", label: "Hit and run — driver fled", tags: ["hit_run", "unknown"] },
        { id: "dispute", label: "Dispute about fault / insurance refuses to pay", tags: ["dispute", "insurance"] },
        { id: "with_osago", label: "At-fault driver has OSAGO, insurance undervalues payout", tags: ["osago", "underpayment"] }
      ]
    },
    {
      id: "has_osago",
      text: "Does the at-fault driver have an OSAGO policy?",
      type: "single",
      options: [
        { id: "osago_yes", label: "Yes, there is a valid policy", tags: ["osago_yes"] },
        { id: "osago_no", label: "No, no policy or expired", tags: ["osago_no"] },
        { id: "osago_unknown", label: "I don't know / the driver fled", tags: ["osago_unknown"] }
      ]
    },
    {
      id: "docs",
      text: "What documents do you have?",
      type: "single",
      options: [
        { id: "full", label: "All: OSAGO, license, vehicle registration, europrotocol/police certificate", tags: ["full", "complete"] },
        { id: "partial", label: "Partial (something is missing)", tags: ["partial", "incomplete"] },
        { id: "none", label: "No documents / the at-fault driver fled", tags: ["none", "missing"] }
      ]
    },
    {
      id: "witnesses",
      text: "Are there any witnesses to the accident?",
      type: "single",
      options: [
        { id: "yes_witness", label: "Yes, there are witnesses (contacts recorded)", tags: ["witness_yes"] },
        { id: "no_witness", label: "No witnesses", tags: ["witness_no"] },
        { id: "video", label: "There is video footage (cameras, dashcam)", tags: ["video"] }
      ]
    },
    {
      id: "injuries",
      text: "Are there any injured people?",
      condition: { dtp_type: ["serious", "pedestrian"] },
      options: [
        { id: "injuries_severe", label: "Yes, severe injuries, hospitalization", tags: ["severe"] },
        { id: "injuries_light", label: "Yes, minor injuries (bruises, scratches)", tags: ["light"] },
        { id: "no_injuries", label: "No injuries", tags: ["no_injuries"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Europrotocol (without police)
    // ========================================
    {
      id: "europrotocol",
      title: "📋 Europrotocol registration (without police)",
      description: "For minor accidents without injuries and without dispute about fault, you can use the europrotocol — it's faster and simpler.",
      conditions: { dtp_type: ["minor"], docs: ["full"], has_osago: ["osago_yes"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "OSAGO payout up to 400,000 RUB",
      tags: ["europrotocol", "osago", "simple"],
      steps: [
        "Turn on hazard lights, place the emergency triangle",
        "Take photos: general view, damage, license plates of both cars, road signs, tire marks",
        "Fill out the europrotocol (paper or via the 'DTP-Europrotocol' app)",
        "Draw a diagram of the accident, describe the circumstances, indicate the at-fault driver (if agreed)",
        "Both drivers sign the protocol, each keeps a copy",
        "Within 5 working days, submit a claim to your insurance company",
        "Attach: europrotocol, photos, accident notification, copies of documents",
        "If the insurer undervalues the payout — demand an independent expert assessment"
      ],
      warnings: [
        "DO NOT leave the scene before completing the protocol — Article 12.27 of the Code of Administrative Offenses",
        "DO NOT sign the europrotocol if you doubt fault — call the police",
        "If the at-fault driver has no OSAGO — the europrotocol is INVALID, call the police",
        "Maximum payout under the europrotocol — 400,000 RUB (since 2024)"
      ]
    },
    // ========================================
    // 2. Call police (GIBDD)
    // ========================================
    {
      id: "gibdd_call",
      title: "👮 Call the traffic police (GIBDD) to the scene",
      description: "For serious accidents, injuries, disputes about fault, or lack of OSAGO — call the police.",
      conditions: { dtp_type: ["serious", "hit_run", "dispute", "pedestrian"], has_osago: ["osago_no", "osago_unknown"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Police certificate + protocol",
      tags: ["gibdd", "police", "serious"],
      steps: [
        "Call an ambulance (103) if there are injuries — FIRST STEP",
        "Call the traffic police: 102 or the emergency number 112",
        "DO NOT move the cars until the inspector arrives (unless they block traffic)",
        "Take photos of everything before the police arrive — marks, damage, position of cars",
        "Ask witnesses to leave their contact information (write down their phone numbers)",
        "The inspector will draw a diagram, interview participants, and issue an accident certificate",
        "Obtain copies of all documents: certificate, diagram, protocol",
        "File a claim with your insurance company within 5 days"
      ],
      warnings: [
        "DO NOT leave the scene of the accident — fine or license suspension (Article 12.27 of the Code of Administrative Offenses)",
        "DO NOT admit fault verbally at the scene — that's for the insurance company or court",
        "DO NOT sign police documents without reading — demand a copy",
        "If the inspector refuses to come (minor accident) — insist if there is a dispute about fault"
      ]
    },
    // ========================================
    // 3. At-fault driver without OSAGO or fled
    // ========================================
    {
      id: "no_osago",
      title: "🏃 At-fault driver without OSAGO or fled",
      description: "If the at-fault driver has no OSAGO policy or fled — your path: direct claim, court, or RSA claim.",
      conditions: { has_osago: ["osago_no", "osago_unknown"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "1-6 months",
      yield_estimate: "Compensation through court or RSA",
      tags: ["no_osago", "court", "unknown"],
      steps: [
        "Record the at-fault driver's license plate (photo, video, witnesses, cameras)",
        "Contact the traffic police — they will identify the driver by the plate",
        "Obtain a police certificate indicating the at-fault driver",
        "Send a formal claim to the at-fault driver demanding compensation (by registered mail with return receipt)",
        "If the driver doesn't respond within 30 days — file a lawsuit",
        "In the lawsuit: repair costs (based on independent expert assessment), towing, rental car",
        "You can also file with your own insurance company under 'direct compensation' (if you have CASCO)",
        "If the at-fault driver is unknown — contact the RSA (Russian Union of Auto Insurers)"
      ],
      warnings: [
        "DO NOT repair the car BEFORE the expert assessment — the court will reject your claim",
        "Independent expert assessment is MANDATORY — insurance assessment undervalues by 2-3 times",
        "Statute of limitations is 3 years from the date of the accident",
        "If the at-fault driver fled — file a report with the traffic police to put them on the wanted list"
      ]
    },
    // ========================================
    // 4. Insurance refuses to pay
    // ========================================
    {
      id: "insurance_refuse",
      title: "❌ Insurance company refuses to pay",
      description: "The insurance company found a reason not to pay — you can challenge it.",
      conditions: { dtp_type: ["dispute", "with_osago"], docs: ["full", "partial"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Payout + 1% penalty for each day of delay",
      tags: ["insurance", "refuse", "court"],
      steps: [
        "Request a written refusal with the reason stated (this is your legal right)",
        "Check the refusal grounds against Article 12 of Federal Law 'On OSAGO' — often the refusal is unlawful",
        "Send a formal claim to the insurance company (registered mail, keep the receipt)",
        "If the refusal is unlawful — file a complaint with the Central Bank of Russia",
        "Simultaneously — file a lawsuit against the insurance company (up to 400,000 RUB — magistrate court)",
        "In the lawsuit, demand: damage compensation + 1% penalty for each day of delay + moral damages",
        "Contact an auto lawyer — initial consultation is often free",
        "If the insurer repeats the refusal — demand an independent expert assessment"
      ],
      warnings: [
        "DO NOT agree to the insurance company's undervalued assessment — demand an independent expert",
        "The statute of limitations for court is 3 years, but the penalty is calculated from the 20th day after filing",
        "DO NOT sign the inspection report if you disagree with the valuation — state your objections in writing",
        "The Central Bank actually fines insurers for unlawful refusals — complaints work"
      ]
    },
    // ========================================
    // 5. Accident with injuries
    // ========================================
    {
      id: "injuries_dtp",
      title: "🚑 Accident with injuries — action plan",
      description: "In an accident with injuries, the main priority is life and health. Documents and insurance come second.",
      conditions: { dtp_type: ["serious", "pedestrian"], injuries: ["injuries_severe", "injuries_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 hours (ambulance + police)",
      yield_estimate: "Health injury compensation + OSAGO payout",
      tags: ["injuries", "ambulance", "police"],
      steps: [
        "FIRST STEP: call an ambulance (103) — even if the injuries seem minor",
        "Call the traffic police (102) — they are required to process accidents with injuries",
        "DO NOT move the injured person (unless there is an immediate threat to life)",
        "Provide first aid: stop bleeding, ensure airway is clear",
        "Record on video/photo the condition of the injured person before the ambulance arrives",
        "Collect contact information from witnesses — they are important for court",
        "Obtain the accident certificate, diagram, protocol, and medical documents (injury report)",
        "File a claim with the insurance company: health injury compensation (up to 500,000 RUB under OSAGO)",
        "For severe injuries — file a lawsuit for moral damages compensation"
      ],
      warnings: [
        "DO NOT give the injured person water/food before the ambulance arrives — it may be harmful",
        "DO NOT move the injured person if spinal injury is suspected",
        "If the injured person is in critical condition — call an ambulance FIRST",
        "Statute of limitations for health injury compensation — 3 years"
      ]
    },
    // ========================================
    // 6. Evidence collection for disputes
    // ========================================
    {
      id: "evidence_collection",
      title: "📸 Evidence collection for fault disputes",
      description: "If you disagree with the accusations, collect evidence before going to court.",
      conditions: { dtp_type: ["dispute"], witnesses: ["yes_witness", "video"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-7 days",
      yield_estimate: "Evidence for court or insurance",
      tags: ["evidence", "dispute", "court"],
      steps: [
        "Take the most detailed photos and videos: general view, damage, tire marks, road signs, traffic lights",
        "Collect contact information from all witnesses — interview them, record their statements",
        "Request video footage from surveillance cameras, dashcams, shops",
        "Keep receipts, contracts, correspondence with participants and the insurance company",
        "If you are confident in your innocence — order an independent expert assessment",
        "Write a written explanation for the police and the insurance company — clear, logical, factual",
        "If the insurance company undervalues the payout — demand an independent expert assessment",
        "If the insurance company refuses — prepare a lawsuit"
      ],
      warnings: [
        "DO NOT destroy evidence (dashcam, photos, receipts)",
        "DO NOT give verbal explanations without recording — demand written documentation",
        "If a witness is against you — record their testimony too, it may help in court",
        "Video from cameras is often stored for a limited time (up to 7 days) — request it immediately"
      ]
    },
    // ========================================
    // 7. Independent expert assessment
    // ========================================
    {
      id: "independent_expertise",
      title: "🔬 Independent expert assessment for accident",
      description: "If the insurance company undervalues the payout or you disagree with the amount — order an independent expert assessment.",
      conditions: { dtp_type: ["dispute", "with_osago"], docs: ["full", "partial"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "7-14 days",
      yield_estimate: "Actual repair cost + penalty",
      tags: ["expertise", "independent", "repair"],
      steps: [
        "Choose an accredited expert organization (not affiliated with the insurance company)",
        "Sign a contract for the independent expert assessment (cost 5,000-15,000 RUB)",
        "The expert will inspect the car and prepare a report with a list of damages",
        "Obtain the expert conclusion with an assessment of the repair cost",
        "Send the conclusion to the insurance company together with a pre-trial claim",
        "If the insurance company does not respond — file a lawsuit with this conclusion",
        "In court, the expert conclusion is the main piece of evidence",
        "If you win, the cost of the expert assessment can be included in the claim"
      ],
      warnings: [
        "The independent expert assessment must be conducted BEFORE the car is repaired",
        "Only use accredited organizations (list on the Ministry of Justice website)",
        "The cost of the expert assessment can be included in the claim if the court rules in your favor",
        "If the insurance company challenges the assessment — the court may order a re-assessment"
      ]
    }
  ]
};

// ===== EXPORT =====
window.dtpDataEn = dtpDataEn;
