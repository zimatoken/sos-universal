// === AUTO SECTION - ACCIDENT (ENGLISH) ===

const autoDtpDataEn = {
  category: "dtp",
  title: "🚨 Accident / Crash",
  description: "Actions in case of a traffic accident",
  questions: [
    {
      id: "severity",
      text: "How severe is the accident?",
      type: "single",
      options: [
        { id: "minor", label: "📝 Minor (bumper damage)", tags: ["minor", "paperwork", "police"] },
        { id: "major", label: "🚨 Major (injuries)", tags: ["major", "injury", "emergency"] },
        { id: "blocked", label: "🚧 Road blocked", tags: ["blocked", "traffic", "police"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "city", label: "🏙️ In city", tags: ["city", "police", "ambulance"] },
        { id: "highway", label: "🛣️ On highway", tags: ["highway", "gai", "emergency"] },
        { id: "parking", label: "🅿️ In parking lot", tags: ["parking", "minor", "paperwork"] }
      ]
    }
  ],
  solutions: [
    {
      id: "emergency_call",
      title: "📞 Call emergency services",
      description: "In case of major accident, call help immediately",
      conditions: {
        severity: ["major"]
      },
      tags: ["emergency", "critical", "fast"],
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 min",
      steps: [
        "Stop and turn on hazard lights",
        "Call ambulance: 103 or 112",
        "Call police: 102 or 112",
        "Report exact location and number of injured",
        "Don't move injured if there's risk of spinal injury",
        "Provide first aid if possible"
      ],
      warnings: [
        "If there's risk of explosion or fire — evacuate immediately",
        "Don't touch injured unless necessary",
        "Watch for oncoming traffic"
      ]
    },
    {
      id: "minor_accident",
      title: "📝 Document minor accident",
      description: "For minor accident without injuries, document the incident",
      conditions: {
        severity: ["minor"]
      },
      tags: ["paperwork", "police", "medium"],
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      steps: [
        "Turn on hazard lights",
        "Place emergency triangle 15 meters behind",
        "Take photos of accident scene from different angles",
        "Exchange information with other driver",
        "Record phone numbers of witnesses",
        "Fill out europrotocol (if possible)",
        "Clear the road for traffic"
      ],
      warnings: [
        "Don't leave accident scene before documentation",
        "Stay calm during communication",
        "Take photos of all damage"
      ]
    },
    {
      id: "traffic_clearance",
      title: "🚧 Clear the road",
      description: "If road is blocked — organize detour",
      conditions: {
        severity: ["blocked"]
      },
      tags: ["traffic", "safety", "medium"],
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      steps: [
        "Turn on hazard lights",
        "Place emergency triangles",
        "If cars are drivable — move them to shoulder",
        "Organize manual traffic control",
        "Call traffic police to unblock",
        "Don't create traffic jams"
      ],
      warnings: [
        "Don't stand on the roadway",
        "Use reflective vest",
        "Be especially careful on highways"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoDtpDataEn = autoDtpDataEn;
