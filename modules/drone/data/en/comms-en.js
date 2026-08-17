// modules/drone/data/en/comms-en.js
// === MODULE: DRONES — COMMUNICATION AND ALERT ===

const droneCommsDataEn = {
  category: "comms",
  title: "📡 Communication and Alert",
  description: "How to report a threat, call for help, and coordinate actions",

  questions: [
    {
      id: "signal",
      type: "single",
      text: "Do you have communication available?",
      options: [
        { id: "has_phone", label: "📱 Yes, phone is working", tags: ["has_phone"] },
        { id: "no_signal", label: "📵 No network / no internet", tags: ["no_signal"] },
        { id: "dead_battery", label: "🔋 Phone battery is dead", tags: ["dead_battery"] },
        { id: "other_device", label: "📻 I have a radio / other communication device", tags: ["other_device"] }
      ]
    },
    {
      id: "information",
      type: "single",
      text: "What do you know about the situation?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "drone_sighting", label: "🛸 Saw a drone / heard a sound", tags: ["drone_sighting"] },
        { id: "explosion", label: "💥 There was an explosion / there are casualties", tags: ["explosion"] },
        { id: "warning", label: "⚠️ Received a warning from authorities", tags: ["warning"] },
        { id: "nothing", label: "❓ I don't know anything, just want to learn", tags: ["nothing"] }
      ]
    },
    {
      id: "who",
      type: "single",
      text: "Who do you want to notify?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "emergency", label: "🚨 Emergency services (911 / 112)", tags: ["emergency"] },
        { id: "family", label: "👪 Family / loved ones", tags: ["family"] },
        { id: "neighbors", label: "🏘️ Neighbors / people around", tags: ["neighbors"] },
        { id: "authorities", label: "🏛️ Military / authorities", tags: ["authorities"] }
      ]
    },
    {
      id: "urgency",
      type: "single",
      text: "How urgent is it?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "critical", label: "🔴 Critical (immediate threat)", tags: ["critical"] },
        { id: "important", label: "🟠 Important (notify as soon as possible)", tags: ["important"] },
        { id: "info", label: "🟢 Informational (not urgent)", tags: ["info"] }
      ]
    },
    {
      id: "location_known",
      type: "single",
      text: "Do you know your exact location?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
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
      title: "📞 Call emergency services (112)",
      description: "In case of a drone threat or explosion — immediately call 112.",
      conditions: { signal: ["has_phone"], who: ["emergency"], urgency: ["critical", "important"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Alerting services",
      tags: ["emergency", "112", "call"],
      steps: [
        "Dial 112 — this is the universal emergency number (police, ambulance, emergency services).",
        "Clearly and calmly state: what happened, where, when, how many casualties.",
        "Provide your coordinates (if GPS is available) or describe the area.",
        "Don't hang up, even if the operator asks you to wait — stay on the line.",
        "If the call drops — call back.",
        "If you cannot speak — send an SMS to 112 (available in some regions).",
        "After the call, follow the operator's instructions."
      ],
      warnings: [
        "DO NOT call 112 unnecessarily — it overloads the line.",
        "DO NOT panic — clear information helps faster response.",
        "DO NOT hang up until the operator tells you to."
      ]
    },

    // ===== 2. WARN FAMILY =====
    {
      id: "warn_family",
      title: "👪 Alerting family and loved ones",
      description: "How to quickly and effectively warn relatives about danger.",
      conditions: { who: ["family"], urgency: ["important", "critical"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 minutes",
      yield_estimate: "Family is safe",
      tags: ["family", "warning", "communication"],
      steps: [
        "Call or message the family group chat: 'Danger! Drone! Take cover!'",
        "If there's no connection — send an SMS or message via messenger (Telegram, WhatsApp).",
        "If you can't reach them — leave a voicemail.",
        "Share your coordinates and action plan.",
        "Agree on a meeting point after the all-clear.",
        "If you're in different locations — coordinate actions over the phone."
      ],
      warnings: [
        "DO NOT panic in your messages — it might scare your loved ones.",
        "DO NOT share unverified information — verify facts.",
        "DO NOT forget about elderly relatives — they may not hear the alerts."
      ]
    },

    // ===== 3. NO SIGNAL =====
    {
      id: "no_signal",
      title: "📵 No signal — how to send a message",
      description: "If your phone has no network, there are several ways to alert people.",
      conditions: { signal: ["no_signal", "dead_battery"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "5-10 minutes",
      yield_estimate: "Alert sent",
      tags: ["no_signal", "alternative"],
      steps: [
        "Find the nearest place with Wi-Fi (cafe, mall, hotel, bus stop with public Wi-Fi).",
        "Ask a passerby for their phone — many will let you call in an emergency.",
        "If you have a radio — use a public channel (e.g., channel 7).",
        "Write a message on paper and pass it through an acquaintance or neighbor.",
        "If you're in a building — use the alert system (loudspeakers, intercom).",
        "As a last resort — go to an open area and shout, wave your arms to get attention."
      ],
      warnings: [
        "DO NOT waste your last phone battery on casual calls — save it for emergencies.",
        "DO NOT ask strangers for phones in a danger zone — it could be unsafe.",
        "DO NOT make loud noises near a drone — it may attract attention."
      ]
    },

    // ===== 4. REPORT TO AUTHORITIES =====
    {
      id: "authority_report",
      title: "🏛️ Reporting to military or authorities",
      description: "If you spot a drone or suspicious activity, report it to authorities.",
      conditions: { who: ["authorities"], information: ["drone_sighting", "explosion"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2-5 minutes",
      yield_estimate: "Authorities alerted",
      tags: ["authorities", "report", "military"],
      steps: [
        "Call the military commandant's office or local police station (not 112, use direct number).",
        "Report: drone type, direction, altitude, presence of weapons.",
        "State the time of observation and your coordinates.",
        "If you have photos or video — save them for authorities.",
        "Do not share drone information on social media until confirmed by authorities.",
        "Follow instructions from military or police."
      ],
      warnings: [
        "DO NOT provide false information — it can cause panic.",
        "DO NOT post military coordinates on social media.",
        "DO NOT interfere with emergency services."
      ]
    },

    // ===== 5. NEIGHBORHOOD ALERT =====
    {
      id: "neighborhood_warning",
      title: "🏘️ Alerting neighbors and people nearby",
      description: "How to quickly warn people nearby about danger.",
      conditions: { who: ["neighbors"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-3 minutes",
      yield_estimate: "Neighbors alerted",
      tags: ["neighbors", "warning", "community"],
      steps: [
        "If you're in a building — knock on walls, call neighboring apartments via intercom.",
        "Step into the hallway and shout loudly: 'Danger! Drone! Take cover!'",
        "If there's a building/neighborhood group chat — send a warning message.",
        "Ask neighbors to help alert others.",
        "If possible — turn on loud music or a siren (as a last resort).",
        "After alerting others — go to shelter yourself."
      ],
      warnings: [
        "DO NOT create panic — speak clearly and calmly.",
        "DO NOT run through apartments — it may not be safe.",
        "DO NOT forget about yourself — after alerting, go to shelter immediately."
      ]
    },

    // ===== 6. WARNING FROM AUTHORITIES =====
    {
      id: "warning_received",
      title: "⚠️ Received a warning from authorities — your actions",
      description: "If you received an official warning — follow the authorities' instructions.",
      conditions: { information: ["warning"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["warning", "authorities", "safety"],
      steps: [
        "Carefully read/listen to the entire message from authorities.",
        "Follow instructions: shelter, evacuation, turning off lights, etc.",
        "Don't panic — authorities provide verified information.",
        "Alert neighbors and loved ones about the warning.",
        "Turn off electricity and gas if recommended.",
        "Take documents, water, phone and proceed to shelter.",
        "Do not leave the shelter until the all-clear is given."
      ],
      warnings: [
        "DO NOT ignore authorities' warnings — they are based on intelligence.",
        "DO NOT spread false information — trust official sources.",
        "DO NOT return to the danger zone until the all-clear."
      ]
    },

    // ===== 7. NOT URGENT INFORMATION =====
    {
      id: "info_only",
      title: "🟢 Information not urgent — how to act",
      description: "If there is no immediate threat, but you have time to prepare.",
      conditions: { urgency: ["info"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "5-30 minutes",
      yield_estimate: "Preparation for possible threat",
      tags: ["info", "preparation"],
      steps: [
        "Gather information: check news, official channels, local chats.",
        "Prepare a 'go-bag': documents, water, medications, power bank.",
        "Charge your phone and power bank to 100%.",
        "Plan a route to shelter.",
        "Alert loved ones about the potential threat.",
        "Don't spread panic — act calmly and rationally."
      ],
      warnings: [
        "DO NOT ignore information — it's better to prepare in advance.",
        "DO NOT create panic — it hinders decision-making.",
        "DO NOT delay preparation — time may not wait."
      ]
    }
  ]
};

// ===== EXPORT =====
window.droneCommsDataEn = droneCommsDataEn;
