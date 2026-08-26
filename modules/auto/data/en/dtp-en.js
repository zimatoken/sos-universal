// modules/auto/data/en/dtp-en.js
// === MODULE: AUTO — ACCIDENT ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "auto",
    category: "dtp",
    version: "1.0.0",
    lang: "en",
    title: "Accident / DTP",
    description: "Actions in a road traffic accident — calling for help, documentation, insurance",
    icon: "🚨",
    color: "#2563eb"
  },

  questions: [
    {
      id: "severity",
      type: "single",
      text: "How severe is the accident?",
      options: [
        { id: "minor", label: "📝 Minor (bumper damage, no injuries)", tags: ["minor"] },
        { id: "major", label: "🚨 Major (there are injuries)", tags: ["major"] },
        { id: "pedestrian", label: "🚶 Accident with a pedestrian", tags: ["pedestrian"] },
        { id: "blocked", label: "🚧 Road blocked", tags: ["blocked"] },
        { id: "hit_run", label: "🏃 At-fault driver fled", tags: ["hit_run"] },
        { id: "dispute", label: "⚖️ Fault dispute", tags: ["dispute"] },
        { id: "parking", label: "🅿️ Parking lot accident", tags: ["parking"] }
      ]
    },
    {
      id: "injuries",
      type: "single",
      text: "Are there any injured people?",
      conditions: { severity: ["major", "pedestrian"] },
      options: [
        { id: "injuries_severe", label: "Severe injuries (need ambulance)", tags: ["severe"] },
        { id: "injuries_light", label: "Minor injuries (bruises, scratches)", tags: ["light"] },
        { id: "no_injuries", label: "No injuries", tags: ["none"] }
      ]
    },
    {
      id: "injuries_status",
      type: "single",
      text: "Are the injured conscious?",
      conditions: { severity: ["major", "pedestrian"], injuries: ["injuries_severe", "injuries_light"] },
      options: [
        { id: "conscious", label: "✅ Yes, conscious", tags: ["conscious"] },
        { id: "unconscious", label: "❌ Unconscious", tags: ["unconscious"] },
        { id: "confused", label: "⚠️ Confused", tags: ["confused"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      conditions: { severity: ["minor", "major", "pedestrian", "blocked", "hit_run", "dispute", "parking"] },
      options: [
        { id: "city", label: "🏙️ In the city", tags: ["city"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking_loc"] },
        { id: "remote", label: "🌲 Remote area", tags: ["remote"] }
      ]
    },
    {
      id: "has_documents",
      type: "single",
      text: "What documents do you and the other driver have?",
      conditions: { severity: ["minor", "major", "pedestrian", "blocked", "hit_run", "dispute", "parking"] },
      options: [
        { id: "full", label: "All documents: OSAGO, license, registration", tags: ["full"] },
        { id: "partial", label: "Partial (something missing)", tags: ["partial"] },
        { id: "none", label: "No documents from the at-fault driver", tags: ["none"] }
      ]
    },
    {
      id: "has_insurance",
      type: "single",
      text: "Do you have CASCO insurance?",
      conditions: { severity: ["minor", "major", "pedestrian", "blocked", "hit_run", "dispute", "parking"] },
      options: [
        { id: "casco_yes", label: "✅ Yes, I have CASCO", tags: ["casco_yes"] },
        { id: "casco_no", label: "❌ No CASCO", tags: ["casco_no"] },
        { id: "casco_unknown", label: "❓ Don't know", tags: ["casco_unknown"] }
      ]
    },
    {
      id: "has_witnesses",
      type: "single",
      text: "Are there witnesses or video footage?",
      conditions: { severity: ["minor", "major", "pedestrian", "blocked", "hit_run", "dispute", "parking"] },
      options: [
        { id: "witness_yes", label: "👥 Yes, witnesses (contacts recorded)", tags: ["witness_yes"] },
        { id: "witness_no", label: "❌ No witnesses", tags: ["witness_no"] },
        { id: "video", label: "📹 Yes, video footage (dashcam, cameras)", tags: ["video"] }
      ]
    },
    {
      id: "damage_type",
      type: "single",
      text: "What is the damage to the car?",
      conditions: { severity: ["minor", "major", "pedestrian", "blocked", "hit_run", "dispute", "parking"] },
      options: [
        { id: "minor_damage", label: "🩹 Minor (scratches, dents)", tags: ["minor_damage"] },
        { id: "moderate_damage", label: "🔧 Moderate (bumper, headlights, fender)", tags: ["moderate_damage"] },
        { id: "severe_damage", label: "💥 Severe (engine, frame, airbags)", tags: ["severe_damage"] }
      ]
    },
    {
      id: "car_drivable",
      type: "single",
      text: "Is the car drivable?",
      conditions: { severity: ["minor", "major", "pedestrian", "blocked", "hit_run", "dispute", "parking"] },
      options: [
        { id: "drivable", label: "✅ Yes, can drive", tags: ["drivable"] },
        { id: "not_drivable", label: "❌ No, needs a tow truck", tags: ["not_drivable"] },
        { id: "unsafe", label: "⚠️ Drivable but unsafe", tags: ["unsafe"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. EMERGENCY SERVICES CALL
    // ============================================================
    {
      id: "emergency_call",
      title: "📞 Calling emergency services for a serious accident",
      description: "In a serious accident with injuries, IMMEDIATELY call an ambulance and police.",
      conditions: { severity: ["major", "pedestrian"], injuries: ["injuries_severe", "injuries_light"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Ambulance and police arrive",
      tags: ["emergency", "critical", "fast"],
      steps: [
        "Stop and turn on hazard lights.",
        "Call an ambulance: 911 or 112 — FIRST.",
        "Call the police: 911 or 112.",
        "Report: exact location, number of injured, condition.",
        "Don't move the injured if spinal injury is suspected.",
        "Provide first aid: stop bleeding, ensure airway.",
        "Stay on site and help the injured until help arrives."
      ],
      warnings: [
        "If there is a risk of fire or explosion — evacuate to a safe distance.",
        "Don't touch the injured unnecessarily.",
        "Don't leave the accident scene until police arrive."
      ]
    },

    // ============================================================
    // 2. PEDESTRIAN ACCIDENT
    // ============================================================
    {
      id: "pedestrian_accident",
      title: "🚶 Pedestrian accident — action plan",
      description: "A pedestrian accident is one of the most serious. Act according to the law.",
      conditions: { severity: ["pedestrian"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Help for the victim + documentation",
      tags: ["pedestrian", "injury", "law"],
      steps: [
        "IMMEDIATELY call an ambulance (911) and police (911).",
        "Don't move the pedestrian if spinal injury is suspected.",
        "Provide first aid: stop bleeding, cover from cold.",
        "Record video/photo: pedestrian position, car, skid marks.",
        "Get witness contacts — important for court.",
        "Get a police report and medical documents about the pedestrian's injuries.",
        "If the pedestrian was crossing illegally — this may reduce your fault.",
        "Consult a lawyer — criminal liability is possible."
      ],
      warnings: [
        "Pedestrian accidents can lead to criminal liability.",
        "DON'T give the victim water/food before the ambulance arrives.",
        "DON'T move the victim if spinal injury is suspected."
      ]
    },

    // ============================================================
    // 3. MINOR ACCIDENT (EUROPROTOCOL)
    // ============================================================
    {
      id: "minor_accident",
      title: "📝 Minor accident documentation (europrotocol)",
      description: "For minor accidents without injuries and without a fault dispute — use the europrotocol.",
      conditions: { severity: ["minor"], has_documents: ["full"], has_witnesses: ["witness_yes", "video"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "15–30 minutes",
      yield_estimate: "Europrotocol + OSAGO payout",
      tags: ["paperwork", "europrotocol", "insurance"],
      steps: [
        "Turn on hazard lights, place a warning triangle.",
        "Take photos from different angles: general view, damage, license plates.",
        "Fill out the europrotocol (paper or via the 'DTP-Europrotocol' app).",
        "Draw the accident diagram, describe circumstances, mark the at-fault driver.",
        "Both drivers sign, each takes a copy.",
        "File a claim with your insurance company within 5 working days.",
        "Attach: europrotocol, photos, notification, copies of documents."
      ],
      warnings: [
        "Don't leave the accident scene before documentation.",
        "If you doubt fault — don't sign the europrotocol.",
        "If the at-fault driver has no OSAGO — the europrotocol is invalid.",
        "Maximum europrotocol payout — 400,000 rubles."
      ]
    },

    // ============================================================
    // 4. PARKING LOT ACCIDENT
    // ============================================================
    {
      id: "parking_accident",
      title: "🅿️ Parking lot accident — action plan",
      description: "Parking lot accidents are documented the same way. Often the at-fault driver leaves a note or flees.",
      conditions: { severity: ["parking"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "20–40 minutes",
      yield_estimate: "Damage compensation",
      tags: ["parking", "damage", "police"],
      steps: [
        "If the at-fault driver is present — use the europrotocol or call GIBDD.",
        "If they left a note with a phone number — contact them.",
        "If they fled without a note — call GIBDD, record the damage.",
        "Check CCTV footage — it may have captured the at-fault driver.",
        "Insurance claim deadline: 5 working days.",
        "If the driver isn't found — CASCO will pay (if you have it), under OSAGO — only through court or RSA."
      ],
      warnings: [
        "Leaving the scene in a parking lot is the same violation as on the road.",
        "CCTV footage is stored for 7–30 days — request it immediately."
      ]
    },

    // ============================================================
    // 5. CALLING GIBDD
    // ============================================================
    {
      id: "gibdd_call",
      title: "👮 Calling GIBDD for a fault dispute",
      description: "If there's a fault dispute or no europrotocol — call GIBDD.",
      conditions: { severity: ["dispute", "minor", "major", "pedestrian"], has_documents: ["partial", "none"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 hours",
      yield_estimate: "Police report + protocol",
      tags: ["gibdd", "police", "dispute"],
      steps: [
        "Call GIBDD: 911. Report that there's a fault dispute.",
        "Don't move the cars until the inspector arrives.",
        "Take photos of everything before they arrive.",
        "Get witness contacts.",
        "The inspector will draw a diagram, interview participants, issue a report.",
        "Get copies of all documents: report, diagram, protocol.",
        "File with your insurance within 5 working days."
      ],
      warnings: [
        "Don't leave the accident scene — fine or license suspension.",
        "Don't admit fault verbally — insurance or court decides.",
        "Don't sign GIBDD documents without reading them."
      ]
    },

    // ============================================================
    // 6. FAULT DISPUTE
    // ============================================================
    {
      id: "fault_dispute",
      title: "⚖️ Fault dispute — how to protect yourself",
      description: "If you disagree with the charges — gather evidence, insist on an objective investigation.",
      conditions: { severity: ["dispute"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Fault reduced or dropped",
      tags: ["fault", "dispute", "evidence"],
      steps: [
        "Gather ALL evidence: photos, video, dashcam, witness statements.",
        "Write a written explanation for GIBDD and insurance.",
        "If there's CCTV footage — request it immediately.",
        "If GIBDD ruled you at fault — appeal in court within 10 days.",
        "In court — challenge fault, get an auto-technical expert assessment.",
        "With mutual fault — the court may split liability (50/50, 70/30)."
      ],
      warnings: [
        "DON'T admit fault verbally — it can be used against you.",
        "DON'T sign the accident diagram if you disagree.",
        "Appeal deadline for GIBDD ruling — 10 days."
      ]
    },

    // ============================================================
    // 7. INSURANCE UNDERPAYMENT
    // ============================================================
    {
      id: "insurance_underpayment_dtp",
      title: "📄 Insurance underpaid — action plan",
      description: "Insurance companies often underpay. You can and should challenge this.",
      conditions: { severity: ["minor", "dispute"], damage_type: ["moderate_damage", "severe_damage"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Additional payment + 1% penalty",
      tags: ["insurance", "underpayment", "court"],
      steps: [
        "Demand a written refusal or inspection report.",
        "Order an independent expert assessment (before repairs!).",
        "Send a pre-trial claim to the insurance company — 10-day deadline.",
        "If no response — file a lawsuit.",
        "In the lawsuit: additional payment + 1% penalty per day + moral damages + 50% fine.",
        "File a complaint with the Central Bank."
      ],
      warnings: [
        "DON'T accept the insurance company's low estimate.",
        "DON'T sign the inspection report if you disagree.",
        "Independent expert assessment BEFORE repairs is key evidence."
      ]
    },

    // ============================================================
    // 8. HIGHWAY ACCIDENT
    // ============================================================
    {
      id: "highway_accident",
      title: "🛣️ Actions in a highway accident",
      description: "On the highway, safety is key. Move behind the barrier.",
      conditions: { severity: ["minor", "major", "pedestrian", "blocked"], location: ["highway"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–30 minutes",
      yield_estimate: "Safety + help called",
      tags: ["highway", "safety", "emergency"],
      steps: [
        "Turn on hazard lights IMMEDIATELY.",
        "Place a warning triangle 30 meters away.",
        "GET OUT of the car and move behind the barrier.",
        "Call GIBDD (911) and an ambulance (911) if there are injuries.",
        "Don't stand on the roadway.",
        "Take photos of the scene from a safe distance.",
        "Wait for GIBDD to arrive, don't leave the safe area."
      ],
      warnings: [
        "Highway speeds are over 90 km/h — every second on the road is dangerous.",
        "Don't try to repair the car on the roadway.",
        "If you have passengers — evacuate them behind the barrier."
      ]
    },

    // ============================================================
    // 9. REMOTE ACCIDENT
    // ============================================================
    {
      id: "remote_accident",
      title: "🌲 Remote area accident — survival algorithm",
      description: "Far from the city, help won't arrive quickly. Act independently.",
      conditions: { severity: ["minor", "major", "pedestrian", "blocked"], location: ["remote"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1–3 hours",
      yield_estimate: "Help called + safety",
      tags: ["remote", "survival", "emergency"],
      steps: [
        "Turn on hazard lights, place a warning sign.",
        "Assess your situation: if you have signal — call for help.",
        "If no signal — find higher ground for a signal.",
        "Don't go far from the car — it's visible to rescuers.",
        "If cold — stay in the car (run engine for 10 minutes every hour).",
        "Signal: use lights, horn, mirrors.",
        "If there are injured — provide first aid, don't move them."
      ],
      warnings: [
        "DON'T leave the car unless absolutely necessary — you may lose your bearings.",
        "DON'T run the engine constantly — exhaust fumes are dangerous.",
        "DON'T go in an unknown direction — follow tracks."
      ]
    },

    // ============================================================
    // 10. HIT-AND-RUN
    // ============================================================
    {
      id: "hit_and_run",
      title: "🏃 At-fault driver fled the scene",
      description: "If the at-fault driver fled — act quickly to find them.",
      conditions: { severity: ["hit_run"], has_witnesses: ["witness_yes", "video"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1–6 months",
      yield_estimate: "Compensation through court or RSA",
      tags: ["hit_run", "unknown", "police"],
      steps: [
        "IMMEDIATELY remember and write down the at-fault driver's license plate.",
        "If you have video with the license plate — save it.",
        "Call GIBDD (911) — report the license plate and car model.",
        "Ask witnesses to leave their contacts.",
        "Get a police report with 'at-fault driver fled' noted.",
        "File a police report to find the at-fault driver.",
        "If the driver isn't found — contact RSA for compensation."
      ],
      warnings: [
        "If you didn't get the license plate — chances of finding the driver are minimal.",
        "DON'T try to chase the at-fault driver — it's dangerous.",
        "Statute of limitations — 3 years."
      ]
    },

    // ============================================================
    // 11. TOW TRUCK
    // ============================================================
    {
      id: "tow_truck_dtp",
      title: "🚛 Towing the car after an accident",
      description: "If the car isn't drivable or it's unsafe to drive — call a tow truck.",
      conditions: { car_drivable: ["not_drivable", "unsafe"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "30–120 minutes",
      yield_estimate: "Car at service center or home",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights and place a warning triangle.",
        "Call your insurance — see if towing is included.",
        "If not — call a tow truck (compare prices).",
        "Report: car model, damage, address.",
        "Watch during loading to avoid bumper damage.",
        "For severe damage — request soft straps."
      ],
      warnings: [
        "Don't try to drive a damaged car.",
        "If wheels are damaged — need a crane or platform tow truck.",
        "Keep the towing receipt — you can include it in the claim."
      ]
    }
  ]
});