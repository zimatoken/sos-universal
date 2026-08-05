// === LAWYER - ДТП / АВАРИЯ (ENGLISH) ===

const dtpDataEn = {
  category: "dtp",
  title: "🚨 Accident / Crash",
  description: "Actions in case of a traffic accident",

  questions: [
    {
      id: "dtp_type",
      text: "What happened in the accident?",
      type: "single",
      options: [
        { id: "minor", label: "📝 Minor accident, slight damage", tags: ["minor", "simple"] },
        { id: "serious", label: "🚨 Serious accident, injuries", tags: ["serious", "injuries"] },
        { id: "hit_run", label: "🏃 Hit and run", tags: ["hit_run", "unknown"] },
        { id: "dispute", label: "⚖️ Dispute over fault / insurance refuses", tags: ["dispute", "insurance"] }
      ]
    },
    {
      id: "docs",
      text: "What documents do you have?",
      type: "single",
      options: [
        { id: "full", label: "✅ All: OSAGO, license, vehicle registration, europrotocol", tags: ["full", "complete"] },
        { id: "partial", label: "⚠️ Partial (something is missing)", tags: ["partial", "incomplete"] },
        { id: "none", label: "❌ No documents from the at-fault driver / they fled", tags: ["none", "missing"] }
      ]
    }
  ],

  solutions: [
    {
      id: "europrotocol",
      title: "📋 Europrotocol Registration",
      description: "For minor accidents without disputes, use the europrotocol — faster than waiting for police.",
      conditions: { dtp_type: ["minor"], docs: ["full"] },
      priority: "fast", reliability: "high",
      time_estimate: "20-40 min", yield_estimate: "OSAGO payout",
      tags: ["europrotocol", "osago", "simple"],
      steps: [
        "Turn on hazard lights, place emergency triangle",
        "Take photos: general view, damage, license plates, road signs, tire tracks",
        "Fill out the europrotocol (paper or via the DTP-Europrotocol app)",
        "Draw a diagram of the accident, describe the circumstances",
        "Both drivers sign the protocol, each keeps a copy",
        "Within 5 working days, submit your claim to your insurance company",
        "If the at-fault driver's insurance refuses — contact the RSA"
      ],
      warnings: [
        "DO NOT leave the scene before the protocol — Article 12.27 of the Code of Administrative Offenses",
        "DO NOT sign the europrotocol if you doubt fault — call the police",
        "If the at-fault driver has no OSAGO — you MUST call the police"
      ]
    },
    {
      id: "gibdd_call",
      title: "👮 Call Police to the Accident Scene",
      description: "For serious accidents, injuries, or disputes about fault — call the traffic police.",
      conditions: { dtp_type: ["serious", "hit_run", "dispute"] },
      priority: "fast", reliability: "high",
      time_estimate: "1-3 hours", yield_estimate: "Police report",
      tags: ["gibdd", "police", "serious"],
      steps: [
        "Call an ambulance (103) if there are injuries — FIRST STEP",
        "Call the traffic police: 102 or the emergency number 112",
        "DO NOT move the cars until the inspector arrives (unless they block traffic)",
        "Take photos of everything before the police arrive",
        "Ask witnesses to leave their contact information",
        "The inspector will draw a diagram, interview participants, and issue a certificate",
        "Obtain copies of all documents: certificate, diagram, protocol",
        "File a claim with your insurance company within 5 days"
      ],
      warnings: [
        "DO NOT leave the scene of the accident — fine or license suspension",
        "DO NOT admit fault verbally at the scene — that's for the insurance company or court",
        "DO NOT sign police documents without reading them first"
      ]
    },
    {
      id: "no_osago",
      title: "🏃 At-Fault Driver Without OSAGO or Fled",
      description: "If the at-fault driver has no OSAGO policy or fled — your path is a direct claim or court.",
      conditions: { docs: ["none"] },
      priority: "slow", reliability: "medium",
      time_estimate: "1-6 months", yield_estimate: "Court compensation",
      tags: ["no_osago", "court", "unknown"],
      steps: [
        "Record the at-fault driver's license plate (photo, video, witnesses, cameras)",
        "Contact the traffic police — they will identify the driver by the plate",
        "Obtain a police certificate indicating the at-fault driver",
        "Send a formal claim to the at-fault driver demanding compensation (by registered mail)",
        "If the driver doesn't respond within 30 days — file a lawsuit",
        "In the lawsuit: repair costs (based on independent expert assessment), towing, rental car",
        "You can also file with your own insurance company under 'direct compensation'"
      ],
      warnings: [
        "DO NOT repair the car BEFORE the expert assessment — the court will reject your claim",
        "Independent expert assessment is MANDATORY — insurance assessment undervalues by 2-3 times",
        "Statute of limitations is 3 years from the date of the accident"
      ]
    },
    {
      id: "insurance_refuse",
      title: "❌ Insurance Company Refuses to Pay",
      description: "The insurance company found a reason not to pay — you can challenge it.",
      conditions: { dtp_type: ["dispute"] },
      priority: "medium", reliability: "high",
      time_estimate: "1-3 months", yield_estimate: "Payout + penalty",
      tags: ["insurance", "refuse", "court"],
      steps: [
        "Request a written refusal with the reason stated (this is your right)",
        "Check the refusal grounds against Article 12 of Federal Law 'On OSAGO'",
        "Send a formal claim to the insurance company (registered mail, keep the receipt)",
        "If the refusal is unlawful — file a complaint with the Central Bank of Russia",
        "Simultaneously — file a lawsuit against the insurance company",
        "In the lawsuit, demand: damage compensation + 1% penalty for each day of delay",
        "Contact an auto lawyer — initial consultation is often free"
      ],
      warnings: [
        "DO NOT agree to the insurance company's undervalued assessment — demand an independent expert",
        "The statute of limitations for court is 3 years",
        "DO NOT sign the inspection report if you disagree with the valuation — state your objections in writing"
      ]
    }
  ]
};

// ===== EXPORT =====
window.dtpDataEn = dtpDataEn;
