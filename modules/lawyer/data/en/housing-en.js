// === LAWYER - ДТП / АВАРИЯ (ENGLISH) ===

const dtpDataEn = {
  category: "dtp",
  icon: "🚨",
  title: "🚨 Accident / Crash",
  description: "Actions in case of a traffic accident",
  questions: [
    {
      id: "dtp_type",
      text: "What happened in the accident?",
      type: "single",
      options: [
        { id: "minor", label: "📝 Minor accident, slight damage", tags: ["minor", "paperwork", "police"] },
        { id: "serious", label: "🚨 Serious accident, injuries", tags: ["major", "injury", "emergency"] },
        { id: "hit_run", label: "🏃 Hit and run", tags: ["criminal", "police", "witness"] },
        { id: "dispute", label: "⚖️ Dispute over fault / insurance refuses", tags: ["dispute", "lawyer", "evidence"] }
      ]
    },
    {
      id: "police",
      text: "Did police arrive?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, police present", tags: ["police", "protocol", "report"] },
        { id: "no", label: "❌ No police", tags: ["no_police", "evidence", "photos"] }
      ]
    }
  ],
  solutions: [
    {
      id: "europrotocol",
      title: "📋 Europrotocol Registration",
      description: "For minor accidents without injuries, fill out the europrotocol with the other driver",
      conditions: {
        dtp_type: ["minor"],
        police: ["yes", "no"]
      },
      tags: ["paperwork", "insurance", "fast"],
      priority: "fast",
      reliability: "high",
      time_estimate: "20-40 min",
      steps: [
        "Stop the car and turn on hazard lights",
        "Place emergency triangle 15 meters behind",
        "Take photos of both cars from all angles",
        "Fill out europrotocol with the other driver",
        "Sign in two copies (one for each)",
        "Submit to insurance company within 5 days"
      ],
      warnings: [
        "Don't admit fault in the protocol",
        "Take photos before moving cars",
        "If there are injuries — call police instead"
      ]
    },
    {
      id: "police_report",
      title: "👮 Police Report",
      description: "For serious accidents or hit and run, file a police report",
      conditions: {
        dtp_type: ["serious", "hit_run", "dispute"]
      },
      tags: ["police", "official", "legal"],
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 hours",
      steps: [
        "Call police: 102 or 112",
        "Wait at the scene until police arrive",
        "Provide your version of events",
        "Get the police report number",
        "Submit report to insurance company",
        "Contact a lawyer if fault is disputed"
      ],
      warnings: [
        "Don't leave the scene before police arrive",
        "Don't sign any documents without reading",
        "Record witness contact information"
      ]
    },
    {
      id: "evidence_collection",
      title: "📸 Evidence Collection",
      description: "If police refuse to come or in case of dispute, collect evidence yourself",
      conditions: {
        dtp_type: ["dispute"],
        police: ["no"]
      },
      tags: ["evidence", "legal", "dispute"],
      priority: "medium",
      reliability: "high",
      time_estimate: "30-60 min",
      steps: [
        "Take photos of both cars from all angles",
        "Record video of the scene",
        "Get contact info from witnesses",
        "Write down your version while fresh",
        "Note any surveillance cameras nearby",
        "Save dashcam footage if available"
      ],
      warnings: [
        "Don't discuss fault with other driver",
        "Don't sign any admission of guilt",
        "Preserve all evidence in original quality"
      ]
    }
  ]
};

// ===== EXPORT =====
window.housingDataEn = housingDataEn;
