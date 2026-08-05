// === MODULE: AUTO — ACCIDENT (ENGLISH) ===
const autoDtpDataEn = {
  category: "dtp",
  title: "🚨 Accident / Crash",
  description: "Actions in case of a traffic accident",

  questions: [
    {
      id: "severity",
      text: "What is the severity of the accident?",
      type: "single",
      options: [
        { id: "minor", label: "📝 Minor (bumper damage, no injuries)", tags: ["minor", "paperwork"] },
        { id: "major", label: "🚨 Severe (there are injuries)", tags: ["major", "injury", "emergency"] },
        { id: "blocked", label: "🚧 Road is blocked", tags: ["blocked", "traffic"] },
        { id: "hit_run", label: "🏃 At-fault driver fled", tags: ["hit_run", "unknown"] },
        { id: "dispute", label: "⚖️ Dispute about fault", tags: ["dispute", "lawyer"] }
      ]
    },
    {
      id: "injuries",
      text: "Are there any injured people?",
      condition: { severity: ["major"] },
      options: [
        { id: "injuries_severe", label: "Severe injuries (need ambulance)", tags: ["severe", "ambulance"] },
        { id: "injuries_light", label: "Minor injuries (bruises, scratches)", tags: ["light", "first_aid"] },
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
        { id: "full", label: "All documents: OSAGO, license, vehicle registration", tags: ["full", "complete"] },
        { id: "partial", label: "Partial (something is missing)", tags: ["partial", "incomplete"] },
        { id: "none", label: "The at-fault driver has no documents", tags: ["none", "missing"] }
      ]
    },
    {
      id: "has_witnesses",
      text: "Are there any witnesses to the accident?",
      options: [
        { id: "witness_yes", label: "Yes, witnesses (contacts recorded)", tags: ["witness_yes"] },
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
        { id: "unsafe", label: "Drivable but unsafe", tags: ["unsafe"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Emergency services call (severe accident)
    // ========================================
    {
      id: "emergency_call",
      title: "📞 Calling emergency services for a severe accident",
      description: "In a severe accident with injuries, IMMEDIATELY call an ambulance and the police.",
      conditions: { severity: ["major"], injuries: ["injuries_severe", "injuries_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 min",
      yield_estimate: "Ambulance and police arrive",
      tags: ["emergency", "critical", "fast"],
      steps: [
        "Stop and turn on hazard lights",
        "Call an ambulance: 103 or 112 — FIRST STEP",
        "Call the police: 102 or 112",
        "Tell the dispatcher: exact location, number of injured, their condition",
        "Do not move injured people if there is a risk of spinal injury",
        "Provide first aid if possible (stop bleeding, ensure airway is clear)",
        "Stay at the scene until emergency services arrive, help the injured"
      ],
      warnings: [
        "If there is a risk of explosion or fire — immediately evacuate to a safe distance",
        "Do not touch injured people unnecessarily (may cause harm)",
        "Do not leave the scene of the accident until police arrive (Article 12.27 of the Code of Administrative Offenses)",
        "For severe bleeding, apply a tourniquet above the wound"
      ]
    },
    // ========================================
    // 2. Minor accident (europrotocol)
    // ========================================
    {
      id: "minor_accident",
      title: "📝 Minor accident (europrotocol)",
      description: "For a minor accident without injuries and without a dispute about fault, you can fill out the europrotocol.",
      conditions: { severity: ["minor"], has_documents: ["full"], has_witnesses: ["witness_yes", "video"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Europrotocol + OSAGO payout",
      tags: ["paperwork", "europrotocol", "insurance"],
      steps: [
        "Turn on hazard lights, place the emergency triangle (15 m in the city, 30 m on the highway)",
        "Take photos from different angles: general view, damage, license plates, road signs",
        "Fill out the europrotocol (paper or via the 'DTP-Europrotocol' app)",
        "Draw a diagram of the accident, describe the circumstances, indicate the at-fault driver (if agreed)",
        "Both drivers sign the protocol, each keeps a copy",
        "Within 5 working days, submit a claim to your insurance company",
        "Attach: europrotocol, photos, accident notification, copies of documents"
      ],
      warnings: [
        "Do not leave the scene before completing the protocol — Article 12.27 of the Code of Administrative Offenses",
        "If you have doubts about fault — do not sign the europrotocol, call the police",
        "If the at-fault driver has no OSAGO — the europrotocol is invalid, call the police",
        "Maximum payout under the europrotocol — 400,000 RUB (since 2024)"
      ]
    },
    // ========================================
    // 3. Call the police for a fault dispute
    // ========================================
    {
      id: "gibdd_call",
      title: "👮 Call the police for a fault dispute",
      description: "If there is a dispute about fault or no europrotocol — call the traffic police.",
      conditions: { severity: ["dispute", "minor", "major"], has_documents: ["partial", "none"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Police certificate + protocol",
      tags: ["gibdd", "police", "dispute"],
      steps: [
        "Call the traffic police: 102 or 112 (state that there is a dispute about fault)",
        "Do not move the cars until the inspector arrives (unless they block traffic)",
        "Take photos of everything before the police arrive: tire marks, damage, car positions",
        "Ask witnesses to leave their contact information (write down their phone numbers)",
        "The inspector will draw a diagram, interview participants, and issue an accident certificate",
        "Obtain copies of all documents: certificate, diagram, protocol",
        "File a claim with your insurance company within 5 days"
      ],
      warnings: [
        "Do not leave the scene of the accident — fine or license suspension (Article 12.27 of the Code of Administrative Offenses)",
        "Do not admit fault verbally at the scene — that's for the insurance company or court",
        "Do not sign police documents without reading — demand a copy",
        "If the inspector does not come — insist if there is a dispute about fault"
      ]
    },
    // ========================================
    // 4. Actions on the highway
    // ========================================
    {
      id: "highway_accident",
      title: "🛣️ Actions during an accident on the highway",
      description: "On the highway, safety is the priority. Move behind the barrier, place the triangle further away.",
      conditions: { severity: ["minor", "major", "blocked"], location: ["highway"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-30 min",
      yield_estimate: "Safety + calling for help",
      tags: ["highway", "safety", "emergency"],
      steps: [
        "Turn on hazard lights IMMEDIATELY",
        "Place the emergency triangle 30 meters behind the car",
        "GET OUT of the car and move behind the barrier (or as far away from the road as possible)",
        "Call the traffic police (102) and an ambulance (103) if there are injuries",
        "Do not stand on the roadway or walk near the car",
        "If possible — take photos of the accident scene from a safe distance",
        "Wait for the police to arrive, stay in a safe place"
      ],
      warnings: [
        "On the highway, speeds are above 90 km/h — every second on the road is dangerous",
        "Do not try to repair the car on the roadway",
        "If it's dark on the highway — turn on a flashlight or use your phone's light",
        "If you have passengers — evacuate them behind the barrier"
      ]
    },
    // ========================================
    // 5. Collecting evidence for insurance
    // ========================================
    {
      id: "evidence_collection",
      title: "📸 Collecting evidence for insurance",
      description: "Properly collected evidence is the key to a quick OSAGO payout.",
      conditions: { severity: ["minor", "dispute"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10-20 min",
      yield_estimate: "Complete package of documents",
      tags: ["evidence", "insurance", "photo"],
      steps: [
        "Take photos from four sides: general view, damage, license plates, road signs",
        "Photograph the position of the cars, tire marks, debris",
        "Record video of the circumstances if possible",
        "Record witness contacts (phone number, full name)",
        "If you have a dashcam — save the footage, do not delete it",
        "Keep all receipts and invoices (towing, taxi, repairs)",
        "If possible — draw a diagram of the accident by hand (with signatures of participants)"
      ],
      warnings: [
        "Do not delete photos and videos — they may be needed in court",
        "If the insurance company undervalues the assessment — you will have evidence for an independent expert",
        "Witnesses are your main weapon in a fault dispute",
        "All photos should have metadata (date, time, geolocation)"
      ]
    },
    // ========================================
    // 6. Hit and run
    // ========================================
    {
      id: "hit_and_run",
      title: "🏃 Hit and run — at-fault driver fled",
      description: "If the at-fault driver fled — act quickly to find them.",
      conditions: { severity: ["hit_run"], has_witnesses: ["witness_yes", "video"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1-6 months",
      yield_estimate: "Compensation through court or RSA",
      tags: ["hit_run", "unknown", "police"],
      steps: [
        "IMMEDIATELY memorize and record the at-fault driver's license plate",
        "If you have video with the plate — save it",
        "Call the traffic police (102) — report the plate and car make",
        "Ask witnesses to leave their contact information (they will help in court)",
        "Obtain an accident certificate from the police stating that the at-fault driver fled",
        "File a report with the police to find the at-fault driver",
        "When filing with your insurance company — claim direct compensation for damages",
        "If the driver is not found — contact the RSA (Russian Union of Auto Insurers)"
      ],
      warnings: [
        "If you did not record the plate — chances of finding the driver are minimal",
        "DO NOT try to chase the at-fault driver — it's dangerous, you may cause another accident",
        "If the driver is not found — compensation will be through the RSA (up to 400,000 RUB)",
        "Statute of limitations — 3 years"
      ]
    },
    // ========================================
    // 7. Towing the car
    // ========================================
    {
      id: "tow_truck_dtp",
      title: "🚛 Towing the car after an accident",
      description: "If the car is not drivable or driving is unsafe — call a tow truck.",
      conditions: { car_drivable: ["not_drivable", "unsafe"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center or home",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights and place the emergency triangle",
        "Call your insurance company (is towing included in your OSAGO/CASCO policy?)",
        "If not — call a towing service via 2GIS or Yandex (compare prices)",
        "Tell the operator: car make, damage, address",
        "During loading, watch to ensure the bumper, suspension, and underbody are not damaged",
        "If there is heavy damage — ask for soft straps (not chains)",
        "If on the highway — move behind the barrier until the tow truck arrives"
      ],
      warnings: [
        "Do not attempt to drive a damaged car — it's dangerous and may worsen the damage",
        "If wheels are damaged — use a tow truck with a crane or platform",
        "If there is a fuel/oil leak — inform the tow truck driver",
        "Keep the towing receipt — it can be included in the claim"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoDtpDataEn = autoDtpDataEn;
