// === MODULE: AUTO — ACCIDENT / CRASH (ENGLISH) ===
const autoDtpDataEn = {
  category: "dtp",
  title: "🚨 Accident / Crash",
  description: "Actions in the event of a road traffic accident",

  questions: [
    {
      id: "severity",
      text: "What is the severity of the accident?",
      type: "single",
      options: [
        { id: "minor", label: "📝 Minor (bumper damage, no injuries)", tags: ["minor", "paperwork"] },
        { id: "major", label: "🚨 Serious (there are injuries)", tags: ["major", "injury", "emergency"] },
        { id: "blocked", label: "🚧 Road is blocked", tags: ["blocked", "traffic"] },
        { id: "hit_run", label: "🏃 The driver fled the scene", tags: ["hit_run", "unknown"] },
        { id: "dispute", label: "⚖️ Dispute about fault", tags: ["dispute", "lawyer"] }
      ]
    },
    {
      id: "injuries",
      text: "Are there any injuries?",
      conditions: { severity: ["major"] },
      options: [
        { id: "injuries_severe", label: "Serious injuries (needs ambulance)", tags: ["severe", "ambulance"] },
        { id: "injuries_light", label: "Minor injuries (bruises, scrapes)", tags: ["light", "first_aid"] },
        { id: "no_injuries", label: "No injuries", tags: ["none"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "city", label: "🏙️ In the city", tags: ["city", "police"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "gai"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking", "minor"] },
        { id: "remote", label: "🌲 Far from the city", tags: ["remote", "help"] }
      ]
    },
    {
      id: "has_documents",
      text: "What documents do you and the other driver have?",
      options: [
        { id: "full", label: "All documents: insurance, license, registration", tags: ["full", "complete"] },
        { id: "partial", label: "Partial (something is missing)", tags: ["partial", "incomplete"] },
        { id: "none", label: "The at-fault driver has no documents", tags: ["none", "missing"] }
      ]
    },
    {
      id: "has_witnesses",
      text: "Are there witnesses to the accident?",
      options: [
        { id: "witness_yes", label: "Yes, there are witnesses (contacts recorded)", tags: ["witness_yes"] },
        { id: "witness_no", label: "No witnesses", tags: ["witness_no"] },
        { id: "video", label: "There is video footage (dashcam, cameras)", tags: ["video"] }
      ]
    },
    {
      id: "car_drivable",
      text: "Is the car drivable?",
      options: [
        { id: "drivable", label: "Yes, can drive", tags: ["drivable"] },
        { id: "not_drivable", label: "No, needs a tow truck", tags: ["not_drivable", "tow"] },
        { id: "unsafe", label: "Drivable, but unsafe", tags: ["unsafe"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Emergency services call (serious accident)
    // ========================================
    {
      id: "emergency_call",
      title: "📞 Call emergency services for a serious accident",
      description: "In a serious accident with injuries, IMMEDIATELY call an ambulance and the police.",
      conditions: { severity: ["major"], injuries: ["injuries_severe", "injuries_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 min",
      yield_estimate: "Ambulance and police arrival",
      tags: ["emergency", "critical", "fast"],
      steps: [
        "Stop and turn on your hazard lights",
        "Call an ambulance: 911 or 112 — FIRST THING",
        "Call the police: 911 or 112",
        "Tell the dispatcher: exact location, number of injured, condition",
        "Do not move the injured if there is a risk of spinal injury",
        "Provide first aid if possible (stop bleeding, ensure airway)",
        "Stay at the scene and help the injured until help arrives"
      ],
      warnings: [
        "If there is a risk of fire or explosion — evacuate to a safe distance immediately",
        "Do not touch the injured unnecessarily (can cause harm)",
        "Do not leave the scene of the accident before police arrive",
        "If there is severe bleeding, apply a tourniquet above the wound"
      ]
    },
    // ========================================
    // 2. Minor accident (Europrotocol)
    // ========================================
    {
      id: "minor_accident",
      title: "📝 Minor accident registration (Europrotocol)",
      description: "For minor accidents without injuries and without dispute about fault, you can use the Europrotocol.",
      conditions: { severity: ["minor"], has_documents: ["full"], has_witnesses: ["witness_yes", "video"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Europrotocol + insurance payout",
      tags: ["paperwork", "europrotocol", "insurance"],
      steps: [
        "Turn on hazard lights, place an emergency triangle (15 m in city, 30 m on highway)",
        "Take photos of the accident scene from different angles: overview, damage, license plates, road signs",
        "Fill out the Europrotocol form (paper or via the 'DTP-Europrotocol' app)",
        "Draw a diagram of the accident, describe the circumstances, mark the at-fault driver (if agreed)",
        "Both drivers sign the protocol, each keeps a copy",
        "Within 5 business days, submit a claim to the insurance company",
        "Attach: Europrotocol, photos, accident notice, copies of documents"
      ],
      warnings: [
        "Do not leave the scene before completing the paperwork",
        "If there are doubts about fault — do not sign the Europrotocol, call the traffic police",
        "If the at-fault driver has no insurance — the Europrotocol is invalid, call the traffic police",
        "Maximum payout under Europrotocol is 400,000 RUB"
      ]
    },
    // ========================================
    // 3. Call traffic police (dispute)
    // ========================================
    {
      id: "gibdd_call",
      title: "👮 Call the traffic police in case of a dispute",
      description: "If there is a dispute about fault or no Europrotocol — call the traffic police.",
      conditions: { severity: ["dispute", "minor", "major"], has_documents: ["partial", "none"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Accident certificate + protocol",
      tags: ["gibdd", "police", "dispute"],
      steps: [
        "Call the traffic police: 911 or the unified number 112 (report that there is a dispute)",
        "Do not move the cars until the inspector arrives (if it doesn't obstruct traffic)",
        "Take photos of everything before the inspector arrives: brake marks, damage, position of cars",
        "Ask witnesses to leave their contact details (record phone numbers)",
        "The inspector will draw a diagram, interview participants, issue an accident certificate",
        "Get copies of all documents: certificate, diagram, protocol",
        "Contact the insurance company within 5 days with the full package of documents"
      ],
      warnings: [
        "Do not leave the scene of the accident — fine or license suspension",
        "Do not admit fault verbally on the spot — this is decided by the insurance company or court",
        "Do not sign police documents without reading them — ask for a copy",
        "If the inspector doesn't come — insist if there is a dispute"
      ]
    },
    // ========================================
    // 4. Actions on the highway
    // ========================================
    {
      id: "highway_accident",
      title: "🛣️ Actions in case of an accident on the highway",
      description: "On the highway, safety comes first. Move behind the barrier, place the sign further away.",
      conditions: { severity: ["minor", "major", "blocked"], location: ["highway"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-30 min",
      yield_estimate: "Safety + call for help",
      tags: ["highway", "safety", "emergency"],
      steps: [
        "Turn on hazard lights IMMEDIATELY",
        "Place an emergency triangle 30 meters behind the car",
        "GET OUT of the car and move behind the barrier (or as far from the road as possible)",
        "Call the traffic police (911) and ambulance (911) if there are injuries",
        "Do not stand on the roadway or walk near the car",
        "If possible — take photos of the scene from a safe distance",
        "Wait for the traffic police to arrive, staying in a safe place"
      ],
      warnings: [
        "On the highway, speeds are over 90 km/h — every second on the road is dangerous",
        "Do not try to repair the car on the roadway",
        "If it's dark on the highway — use a flashlight or your phone's light",
        "If there are passengers — evacuate them behind the barrier"
      ]
    },
    // ========================================
    // 5. Evidence collection for insurance
    // ========================================
    {
      id: "evidence_collection",
      title: "📸 Collecting evidence for insurance",
      description: "Properly collected evidence is the key to a quick insurance payout.",
      conditions: { severity: ["minor", "dispute"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10-20 min",
      yield_estimate: "Complete document package",
      tags: ["evidence", "insurance", "photo"],
      steps: [
        "Take photos from four sides: overview, damage, license plates, road signs",
        "Photograph the position of cars, brake marks, debris",
        "Record the circumstances on video if possible",
        "Record witness contact details (phone number, full name)",
        "If you have a dashcam — save the footage, don't delete it",
        "Keep all receipts and invoices (tow truck, taxi, repairs)",
        "If possible — draw a diagram of the accident by hand (with participants' signatures)"
      ],
      warnings: [
        "Do not delete photos and videos — they may be needed in court",
        "If the insurance company undervalues the damage — you will have evidence for an independent expert",
        "Witnesses are your main weapon in a fault dispute",
        "All photos should have metadata (date, time, geolocation)"
      ]
    },
    // ========================================
    // 6. Hit and run
    // ========================================
    {
      id: "hit_and_run",
      title: "🏃 The at-fault driver fled the scene",
      description: "If the driver fled — act quickly to find them.",
      conditions: { severity: ["hit_run"], has_witnesses: ["witness_yes", "video"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1-6 months",
      yield_estimate: "Compensation through court or RSA",
      tags: ["hit_run", "unknown", "police"],
      steps: [
        "IMMEDIATELY remember and record the license plate number of the fleeing car",
        "If you have video with the license plate — save it",
        "Call the traffic police (911) — report the license plate and car make",
        "Ask witnesses to leave their contact details (they will help in court)",
        "Get an accident certificate from the traffic police stating that the driver fled",
        "File a report with the police to search for the at-fault driver",
        "When contacting the insurance company — file a claim for direct compensation",
        "If the driver is not found — contact the RSA"
      ],
      warnings: [
        "If you didn't record the license plate — chances of finding the driver are minimal",
        "DO NOT try to chase the driver — it's dangerous and you may cause another accident",
        "If the driver is not found — payment will be through the RSA (no more than 400,000 RUB)",
        "Statute of limitations is 3 years"
      ]
    },
    // ========================================
    // 7. Car evacuation
    // ========================================
    {
      id: "tow_truck_dtp",
      title: "🚛 Car evacuation after an accident",
      description: "If the car is not drivable or unsafe — call a tow truck.",
      conditions: { car_drivable: ["not_drivable", "unsafe"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center or home",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights and place an emergency triangle",
        "Call your insurance company (is towing included in your policy)",
        "If not — call a tow truck via 2GIS or Yandex (compare prices)",
        "Inform the operator: car make, damage, address",
        "During loading, watch to avoid bumper, suspension, and underbody damage",
        "For severe damage, ask to use soft straps (not chains)",
        "If on the highway — move behind the barrier until the tow truck arrives"
      ],
      warnings: [
        "Do not try to drive a damaged car — it's dangerous and can worsen the damage",
        "If wheels are damaged — use a tow truck with a crane or platform",
        "If there is a fuel/oil leak — inform the tow truck driver",
        "Keep the towing receipt — it can be included in the claim"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoDtpDataEn = autoDtpDataEn;
