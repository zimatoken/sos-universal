// === MODULE: AUTO — ACCIDENT (ENGLISH) ===
const autoDtpDataEn = {
  category: "dtp",
  title: "🚨 Accident / Crash",
  description: "Actions to take in a road traffic accident",

  questions: [
    {
      id: "severity",
      text: "How severe is the accident?",
      type: "single",
      options: [
        { id: "minor", label: "📝 Minor (bumper damage, no injuries)", tags: ["minor", "paperwork"] },
        { id: "major", label: "🚨 Severe (there are injuries)", tags: ["major", "injury", "emergency"] },
        { id: "blocked", label: "🚧 Road blocked", tags: ["blocked", "traffic"] },
        { id: "hit_run", label: "🏃 At-fault driver fled", tags: ["hit_run", "unknown"] },
        { id: "dispute", label: "⚖️ Dispute over fault", tags: ["dispute", "lawyer"] }
      ]
    },
    {
      id: "injuries",
      text: "Are there any injured?",
      conditions: { severity: ["major"] },
      options: [
        { id: "injuries_severe", label: "Severe injuries (need ambulance)", tags: ["severe", "ambulance"] },
        { id: "injuries_light", label: "Minor injuries (bruises, scrapes)", tags: ["light", "first_aid"] },
        { id: "no_injuries", label: "No injuries", tags: ["none"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      conditions: { severity: ["minor", "major", "blocked", "hit_run", "dispute"] },
      options: [
        { id: "city", label: "🏙️ In the city", tags: ["city", "police"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "gai"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking", "minor"] },
        { id: "remote", label: "🌲 Away from the city", tags: ["remote", "help"] }
      ]
    },
    {
      id: "has_documents",
      text: "What documents do you and the other party have?",
      conditions: { severity: ["minor", "major", "blocked", "hit_run", "dispute"] },
      options: [
        { id: "full", label: "All documents: insurance, license, registration", tags: ["full", "complete"] },
        { id: "partial", label: "Partial (something missing)", tags: ["partial", "incomplete"] },
        { id: "none", label: "At-fault driver has no documents", tags: ["none", "missing"] }
      ]
    },
    {
      id: "has_witnesses",
      text: "Are there any witnesses to the accident?",
      conditions: { severity: ["minor", "major", "blocked", "hit_run", "dispute"] },
      options: [
        { id: "witness_yes", label: "Yes, witnesses (contacts recorded)", tags: ["witness_yes"] },
        { id: "witness_no", label: "No witnesses", tags: ["witness_no"] },
        { id: "video", label: "Video footage available (dashcam, CCTV)", tags: ["video"] }
      ]
    },
    {
      id: "car_drivable",
      text: "Is the car drivable?",
      conditions: { severity: ["minor", "major", "blocked", "hit_run", "dispute"] },
      options: [
        { id: "drivable", label: "Yes, can drive", tags: ["drivable"] },
        { id: "not_drivable", label: "No, needs a tow truck", tags: ["not_drivable", "tow"] },
        { id: "unsafe", label: "Can drive but unsafe", tags: ["unsafe"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. Emergency call =====
    {
      id: "emergency_call",
      title: "📞 Call emergency services for serious accident",
      description: "In a serious accident with injuries, IMMEDIATELY call ambulance and police.",
      conditions: { severity: ["major"], injuries: ["injuries_severe", "injuries_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 min",
      yield_estimate: "Ambulance and police arrive",
      tags: ["emergency", "critical", "fast"],
      steps: [
        "Stop and turn on hazard lights",
        "Call ambulance: 911 or 112 — FIRST",
        "Call police: 911 or 112",
        "Tell dispatcher: exact location, number of injured, condition",
        "Don't move injured if spine injury is suspected",
        "Provide first aid if possible (stop bleeding, ensure airflow)",
        "Stay on scene, help victims until services arrive"
      ],
      warnings: [
        "If there's fire or explosion risk — evacuate to safe distance immediately",
        "Don't touch injured unnecessarily (may cause harm)",
        "Don't leave the accident scene until police arrive",
        "For severe bleeding — apply tourniquet above the wound"
      ]
    },
    // ===== 2. Minor accident =====
    {
      id: "minor_accident",
      title: "📝 Minor accident (European accident report)",
      description: "For minor accidents without injuries and no fault dispute — use European accident report.",
      conditions: { severity: ["minor"], has_documents: ["full"], has_witnesses: ["witness_yes", "video"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "European report + insurance payout",
      tags: ["paperwork", "europrotocol", "insurance"],
      steps: [
        "Turn on hazard lights, set warning triangle (15 m in city, 30 m on highway)",
        "Photograph the scene from all angles: overview, damage, license plates, road signs",
        "Fill out the European accident report (paper or app)",
        "Draw accident diagram, describe circumstances, mark at-fault driver (if agreed)",
        "Both drivers sign, each keeps a copy",
        "Within 5 working days, file claim with insurance company",
        "Attach: report, photos, accident notice, copies of documents"
      ],
      warnings: [
        "Don't leave the scene before filing — Article 12.27 of Administrative Code",
        "If fault is disputed — don't sign, call police",
        "If at-fault driver has no insurance — European report invalid, call police",
        "Maximum payout under European report — $5,000"
      ]
    },
    // ===== 3. Call police =====
    {
      id: "gibdd_call",
      title: "👮 Call police when fault is disputed",
      description: "If there's a fault dispute or no European report — call police.",
      conditions: { severity: ["dispute", "minor", "major"], has_documents: ["partial", "none"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Accident report + police protocol",
      tags: ["gibdd", "police", "dispute"],
      steps: [
        "Call police: 911 (report that fault is disputed)",
        "Don't move cars until officer arrives (unless blocking traffic)",
        "Photograph everything before police arrive: skid marks, damage, car positions",
        "Ask witnesses for contacts (record phone numbers)",
        "Officer will draw diagram, interview participants, issue accident certificate",
        "Get copies of all documents: certificate, diagram, protocol",
        "File insurance claim within 5 days with all documents"
      ],
      warnings: [
        "Don't leave the scene — fine or license suspension",
        "Don't admit fault verbally — insurance or court decides",
        "Don't sign police documents without reading — demand copies",
        "If officer doesn't come — insist when fault is disputed"
      ]
    },
    // ===== 4. Highway accident =====
    {
      id: "highway_accident",
      title: "🛣️ Actions for accident on highway",
      description: "On the highway, safety is key. Move behind barrier, set warning sign further away.",
      conditions: { severity: ["minor", "major", "blocked"], location: ["highway"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-30 min",
      yield_estimate: "Safety + help called",
      tags: ["highway", "safety", "emergency"],
      steps: [
        "Turn on hazard lights IMMEDIATELY",
        "Set warning triangle 30 meters behind the car",
        "EXIT the car and move behind the barrier (or as far from the road as possible)",
        "Call police (911) and ambulance (911) if injured",
        "Don't stand on the roadway or walk near the car",
        "If possible — photograph the scene from a safe distance",
        "Wait for police from a safe position"
      ],
      warnings: [
        "On highway, speed exceeds 60 mph — every second on the road is dangerous",
        "Don't try to repair the car on the roadway",
        "If dark — use flashlight or phone light",
        "If passengers — evacuate them behind the barrier"
      ]
    },
    // ===== 5. Collect evidence =====
    {
      id: "evidence_collection",
      title: "📸 Collecting evidence for insurance",
      description: "Properly collected evidence is key to fast insurance payout.",
      conditions: { severity: ["minor", "dispute"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10-20 min",
      yield_estimate: "Complete document package",
      tags: ["evidence", "insurance", "photo"],
      steps: [
        "Take photos from four sides: overview, damage, license plates, road signs",
        "Photograph car positions, skid marks, debris",
        "Record circumstances on video if possible",
        "Record witness contacts (phone number, full name)",
        "If dashcam — save footage, don't delete",
        "Keep all receipts (tow truck, taxi, repairs)",
        "If possible — draw accident diagram by hand (with participants' signatures)"
      ],
      warnings: [
        "Don't delete photos and videos — may be needed in court",
        "If insurance undervalues — you'll have evidence for independent appraisal",
        "Witnesses are your main weapon in fault disputes",
        "All photos should have metadata (date, time, location)"
      ]
    },
    // ===== 6. Hit and run =====
    {
      id: "hit_and_run",
      title: "🏃 At-fault driver fled the scene",
      description: "If the at-fault driver fled — act quickly to find them.",
      conditions: { severity: ["hit_run"], has_witnesses: ["witness_yes", "video"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1-6 months",
      yield_estimate: "Compensation through court or insurance fund",
      tags: ["hit_run", "unknown", "police"],
      steps: [
        "IMMEDIATELY remember and record the at-fault car's license plate",
        "If video with plate exists — save it",
        "Call police (911) — report plate number and car make",
        "Ask witnesses for contacts (they'll help in court)",
        "Get police accident certificate stating driver fled",
        "File police report for driver search",
        "When filing insurance — claim for direct compensation",
        "If driver not found — contact national insurance fund"
      ],
      warnings: [
        "If you didn't record the plate — chances of finding the driver are minimal",
        "DON'T try to chase the at-fault driver — dangerous, you may cause another accident",
        "If driver not found — payout through insurance fund",
        "Statute of limitations — 3 years"
      ]
    },
    // ===== 7. Tow truck =====
    {
      id: "tow_truck_dtp",
      title: "🚛 Towing the car after accident",
      description: "If the car isn't drivable or unsafe to drive — call a tow truck.",
      conditions: { car_drivable: ["not_drivable", "unsafe"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service or home",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights and set warning triangle",
        "Call insurance (is towing included in policy)",
        "If not — call paid towing service (compare prices)",
        "Tell operator: car make, damage, address",
        "During loading — watch to avoid bumper, suspension, underbody damage",
        "If severe damage — request soft straps (not chains)",
        "If on highway — move behind barrier until tow truck arrives"
      ],
      warnings: [
        "Don't try to drive a damaged car — dangerous and may worsen damage",
        "If wheels damaged — tow truck with crane or flatbed",
        "If fuel/oil leak — inform tow truck driver",
        "Keep towing receipt — can be included in claim"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoDtpDataEn = autoDtpDataEn;
