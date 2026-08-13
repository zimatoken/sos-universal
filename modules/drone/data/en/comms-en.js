// modules/drone/data/en/comms-en.js
// === MODULE: DRONES — COMMUNICATION AND NOTIFICATION ===

const droneCommsDataEn = {
  category: "comms",
  icon: "📡",
  title: "📡 Communication and notification",
  description: "How to report a threat, call for help, and coordinate actions",

  questions: [
    {
      id: "signal",
      type: "single",
      text: "Do you have communication?",
      options: [
        { id: "has_phone", label: "📱 Yes, phone is working", tags: ["has_phone"] },
        { id: "no_signal", label: "📵 No network / no internet", tags: ["no_signal"] },
        { id: "dead_battery", label: "🔋 Phone battery is dead", tags: ["dead_battery"] },
        { id: "other_device", label: "📻 Have a radio / other communication device", tags: ["other_device"] }
      ]
    },
    {
      id: "information",
      type: "single",
      text: "What do you know about the situation?",
      options: [
        { id: "drone_sighting", label: "🛸 Saw a drone / heard a sound", tags: ["drone_sighting"] },
        { id: "explosion", label: "💥 Explosion occurred / there are casualties", tags: ["explosion"] },
        { id: "warning", label: "⚠️ Received a warning from authorities", tags: ["warning"] },
        { id: "nothing", label: "❓ I don't know, just want to find out", tags: ["nothing"] }
      ]
    },
    {
      id: "who",
      type: "single",
      text: "Who do you want to notify?",
      options: [
        { id: "emergency", label: "🚨 Emergency services (112)", tags: ["emergency"] },
        { id: "family", label: "👪 Family / close ones", tags: ["family"] },
        { id: "neighbors", label: "🏘️ Neighbors / people around", tags: ["neighbors"] },
        { id: "authorities", label: "🏛️ Military / authorities", tags: ["authorities"] }
      ]
    },
    {
      id: "urgency",
      type: "single",
      text: "How urgent is it?",
      options: [
        { id: "critical", label: "🔴 Critical (immediate threat)", tags: ["critical"] },
        { id: "important", label: "🟠 Important (notify as soon as possible)", tags: ["important"] },
        { id: "info", label: "🟢 Information (not urgent)", tags: ["info"] }
      ]
    },
    {
      id: "location_known",
      type: "single",
      text: "Do you know your exact location?",
      options: [
        { id: "gps", label: "📍 Yes, by GPS / map", tags: ["gps"] },
        { id: "landmarks", label: "🗺️ By landmarks (street name, building)", tags: ["landmarks"] },
        { id: "unknown", label: "❓ No, I don't know", tags: ["unknown_loc"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. CALL 112 =====
    {
      id: "call_112",
      title: "📞 Calling emergency services (112)",
      description: "In case of a drone threat or explosion — call 112 immediately.",
      conditions: { signal: ["has_phone"], who: ["emergency"], urgency: ["critical", "important"] },
      priority: 5,
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Services notified",
      tags: ["emergency", "112", "call"],
      steps: [
        "Dial 112 — it's the unified emergency number (police, ambulance, rescue).",
        "Calmly and clearly report: what happened, where, when, how many casualties.",
        "Give your coordinates (if GPS available) or describe the area.",
        "Don't hang up, even if the operator asks you to wait — stay on the line.",
        "If the call drops — call back.",
        "If you can't speak — send an SMS to 112 (available in some regions).",
        "Follow the operator's instructions after the call."
      ],
      warnings: [
        "DO NOT call 112 unnecessarily — it overloads the line.",
        "DO NOT panic — clear information helps faster response.",
        "DO NOT hang up until the operator allows."
      ],
      tips: [
        "Save 112 as a speed dial on your phone.",
        "If abroad — find out the local emergency number.",
        "If you can't speak — use SMS or messenger."
      ]
    },

    // ===== 2. WARN FAMILY =====
    {
      id: "warn_family",
      title: "👪 Notifying family and loved ones",
      description: "How to quickly and effectively warn family about danger.",
      conditions: { who: ["family"], urgency: ["important", "critical"] },
      priority: 4,
      reliability: "high",
      time_estimate: "1-2 minutes",
      yield_estimate: "Family is safe",
      tags: ["family", "warning", "communication"],
      steps: [
        "Call or message the group chat: 'Danger! Drone! Take cover!'",
        "If no connection — send an SMS or message via messenger (Telegram, WhatsApp).",
        "If you can't reach them — leave a voice message.",
        "Share your coordinates and action plan.",
        "Agree on a meeting point after the all-clear.",
        "If you're in different places — coordinate actions by phone."
      ],
      warnings: [
        "DO NOT panic in messages — it may frighten loved ones.",
        "DO NOT send unverified information — check facts.",
        "DO NOT forget about elderly relatives — they may not hear alerts."
      ],
      tips: [
        "Create a family group chat for emergencies.",
        "Assign a family member responsible for notifications.",
        "Decide on a meeting point and code word in advance."
      ]
    },

    // ===== 3. NO SIGNAL =====
    {
      id: "no_signal",
      title: "📵 No signal — how to send a message",
      description: "If your phone has no signal, there are several ways to alert people.",
      conditions: { signal: ["no_signal", "dead_battery"] },
      priority: 3,
      reliability: "medium",
      time_estimate: "5-10 minutes",
      yield_estimate: "Notification sent",
      tags: ["no_signal", "alternative"],
      steps: [
        "Find the nearest place with Wi-Fi (cafe, mall, hotel, bus stop with public Wi-Fi).",
        "Ask a passerby for a phone — many will let you call in an emergency.",
        "If you have a radio — use a public channel (e.g., channel 7).",
        "Write a message on paper and pass it through an acquaintance or neighbor.",
        "If you're in a building — use the notification system (loudspeakers, intercom).",
        "As a last resort — go to an open area, shout, wave your arms to attract attention."
      ],
      warnings: [
        "DO NOT waste the last charge on calls — save it for emergency calls.",
        "DO NOT ask strangers for a phone in a danger zone — it may be risky.",
        "DO NOT use loud sounds near a drone — it may attract attention."
      ],
      tips: [
        "Carry a power bank — it can save your life.",
        "Know where free Wi-Fi is available in your area.",
        "Save emergency numbers in your phone and on paper."
      ]
    },

    // ===== 4. REPORT TO AUTHORITIES =====
    {
      id: "authority_report",
      title: "🏛️ Reporting to military or authorities",
      description: "If you spot a drone or suspicious activity, report it to authorities.",
      conditions: { who: ["authorities"], information: ["drone_sighting", "explosion"] },
      priority: 4,
      reliability: "high",
      time_estimate: "2-5 minutes",
      yield_estimate: "Authorities notified",
      tags: ["authorities", "report", "military"],
      steps: [
        "Call the military command or local police department (not 112, but a direct number).",
        "Report: drone type, direction, altitude, presence of weapons.",
        "Indicate the time of observation and your coordinates.",
        "If you have photos or videos — save them for authorities.",
        "Don't share drone information on social media until confirmed by authorities.",
        "Follow instructions from military or police."
      ],
      warnings: [
        "DO NOT provide false information — it can cause panic.",
        "DO NOT share coordinates of military facilities on social media.",
        "DO NOT obstruct emergency services."
      ],
      tips: [
        "Save the numbers of military command and local police department.",
        "If possible — take photos or videos of the drone (without endangering yourself).",
        "Record the time and location of observation — it helps authorities."
      ]
    },

    // ===== 5. NEIGHBORHOOD WARNING =====
    {
      id: "neighborhood_warning",
      title: "🏘️ Notifying neighbors and people around",
      description: "How to quickly warn people nearby about danger.",
      conditions: { who: ["neighbors"] },
      priority: 3,
      reliability: "medium",
      time_estimate: "1-3 minutes",
      yield_estimate: "Neighbors notified",
      tags: ["neighbors", "warning", "community"],
      steps: [
        "If in a building — knock on walls, call neighboring apartments via intercom.",
        "Go to the stairwell and shout loudly: 'Danger! Drone! Take cover!'",
        "If there's a building/neighborhood group chat — send a warning message.",
        "Ask neighbors to help notify others.",
        "If possible — turn on loud music or a siren (as a last resort).",
        "After notifying — go to shelter yourself."
      ],
      warnings: [
        "DO NOT create panic — speak clearly and calmly.",
        "DO NOT run through apartments — it may be unsafe.",
        "DO NOT forget about yourself — after notifying, immediately go to shelter."
      ],
      tips: [
        "Create a building/neighborhood group chat for emergencies.",
        "Agree with neighbors on a notification system (knocking on walls, intercom calls).",
        "Help elderly neighbors — they may not hear alerts."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneCommsDataEn = droneCommsDataEn;