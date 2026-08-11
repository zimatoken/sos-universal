// modules/drone/data/en/comms-en.js
// === MODULE: DRONES — COMMUNICATION ===
const commsDataEn = {
  category: "comms",
  title: "📡 Communication and Alerting",
  description: "How to report a threat, call for help, and coordinate actions",

  questions: [
    {
      id: "signal",
      type: "single",
      text: "Do you have communication?",
      options: [
        { id: "has_phone", label: "📱 Yes, phone working", tags: ["has_phone"] },
        { id: "no_signal", label: "📵 No signal / no internet", tags: ["no_signal"] },
        { id: "dead_battery", label: "🔋 Phone battery dead", tags: ["dead_battery"] },
        { id: "other_device", label: "📻 Have radio / other device", tags: ["other_device"] }
      ]
    },
    {
      id: "information",
      type: "single",
      text: "What do you know about the situation?",
      options: [
        { id: "drone_sighting", label: "🛸 Spotted a drone / heard sound", tags: ["drone_sighting"] },
        { id: "explosion", label: "💥 Explosion occurred / there are casualties", tags: ["explosion"] },
        { id: "warning", label: "⚠️ Received warning from authorities", tags: ["warning"] },
        { id: "nothing", label: "❓ Don't know, just want to find out", tags: ["nothing"] }
      ]
    },
    {
      id: "who",
      type: "single",
      text: "Who do you want to notify?",
      options: [
        { id: "emergency", label: "🚨 Emergency services (112)", tags: ["emergency"] },
        { id: "family", label: "👪 Family / loved ones", tags: ["family"] },
        { id: "neighbors", label: "🏘️ Neighbors / people nearby", tags: ["neighbors"] },
        { id: "authorities", label: "🏛️ Military / authorities", tags: ["authorities"] }
      ]
    },
    {
      id: "urgency",
      type: "single",
      text: "How urgent is it?",
      options: [
        { id: "critical", label: "🔴 Critical (immediate threat)", tags: ["critical"] },
        { id: "important", label: "🟠 Important (report soon)", tags: ["important"] },
        { id: "info", label: "🟢 Information (not urgent)", tags: ["info"] }
      ]
    },
    {
      id: "location_known",
      type: "single",
      text: "Do you know your exact location?",
      options: [
        { id: "gps", label: "📍 Yes, by GPS / map", tags: ["gps"] },
        { id: "landmarks", label: "🗺️ By landmarks (street name, buildings)", tags: ["landmarks"] },
        { id: "unknown", label: "❓ No, I don't know", tags: ["unknown_loc"] }
      ]
    }
  ],

  solutions: [
    {
      id: "call_112",
      title: "📞 Call emergency services (112)",
      description: "If there's a drone threat or explosion — immediately call 112.",
      conditions: { signal: ["has_phone"], who: ["emergency"], urgency: ["critical", "important"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Alert services",
      tags: ["emergency", "112", "call"],
      steps: [
        "Dial 112 — the universal emergency number (police, ambulance, rescuers).",
        "Calmly report: what happened, where, when, how many casualties.",
        "Give your coordinates (if GPS available) or describe the area.",
        "Don't hang up, even if the operator asks you to wait — stay on the line.",
        "If the call drops — call back.",
        "If you can't speak — send an SMS to 112 (available in some regions).",
        "Follow the operator's instructions."
      ],
      warnings: [
        "DO NOT call 112 unnecessarily — it overloads the line.",
        "DO NOT panic — clear information helps faster.",
        "DO NOT hang up until the operator tells you to."
      ]
    },
    {
      id: "warn_family",
      title: "👪 Alerting family and loved ones",
      description: "How to quickly and effectively warn relatives about danger.",
      conditions: { who: ["family"], urgency: ["important", "critical"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 minutes",
      yield_estimate: "Family safe",
      tags: ["family", "warning", "communication"],
      steps: [
        "Call or message in the group chat: 'Danger! Drone! Take cover!'",
        "If no signal — send SMS or message via messenger (Telegram, WhatsApp).",
        "If you can't reach — leave a voice message.",
        "Give your coordinates and action plan.",
        "Agree on a meeting point after the all-clear.",
        "If you are in different places — coordinate actions by phone."
      ],
      warnings: [
        "DO NOT panic in messages — it can scare loved ones.",
        "DO NOT send unverified information — check facts.",
        "DO NOT forget elderly relatives — they may not hear alerts."
      ]
    },
    {
      id: "no_signal",
      title: "📵 No signal — how to get a message through",
      description: "If your phone has no network, there are ways to alert people.",
      conditions: { signal: ["no_signal", "dead_battery"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "5-10 minutes",
      yield_estimate: "Alert sent",
      tags: ["no_signal", "alternative"],
      steps: [
        "Find a place with Wi-Fi (cafe, mall, hotel, stop with public Wi-Fi).",
        "Ask a passerby for a phone — many will let you call in an emergency.",
        "If you have a radio — use a public channel (e.g., channel 7).",
        "Write a message on paper and pass it through a neighbor or acquaintance.",
        "If you're in a building — use the public address system (loudspeakers, intercom).",
        "As a last resort — go to an open area and shout, wave your arms to attract attention."
      ],
      warnings: [
        "DO NOT waste your last battery on calls — save it for emergency calls.",
        "DO NOT ask strangers for phones in dangerous zones — it may be unsafe.",
        "DO NOT use loud sounds near a drone — it may attract attention."
      ]
    },
    {
      id: "authority_report",
      title: "🏛️ Reporting to military or authorities",
      description: "If you've spotted a drone or suspicious activity, report it to authorities.",
      conditions: { who: ["authorities"], information: ["drone_sighting", "explosion"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "2-5 minutes",
      yield_estimate: "Authorities informed",
      tags: ["authorities", "report", "military"],
      steps: [
        "Call military command or local police (not 112, but direct number).",
        "Report: drone type, direction, altitude, presence of weapons.",
        "Give the time of observation and your coordinates.",
        "If you have photos or video — save them for authorities.",
        "Do not share information about the drone on social media until authorities confirm.",
        "Follow instructions from military or police."
      ],
      warnings: [
        "DO NOT share false information — it can cause panic.",
        "DO NOT post military facility coordinates on social media.",
        "DO NOT obstruct emergency services."
      ]
    },
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
        "If you're in a building — knock on walls, call neighbors via intercom.",
        "Go to the stairwell and shout: 'Danger! Drone! Take cover!'",
        "If there's a building/neighborhood group chat — send a warning message.",
        "Ask neighbors to help alert others.",
        "If possible — play loud music or a siren (as a last resort).",
        "After alerting — take cover yourself."
      ],
      warnings: [
        "DO NOT create panic — speak clearly and calmly.",
        "DO NOT run through apartments — it may be unsafe.",
        "DO NOT forget about yourself — after alerting, immediately take cover."
      ]
    }
  ]
};

window.commsDataEn = commsDataEn;
console.log('✅ commsDataEn loaded');