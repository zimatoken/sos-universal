// modules/drone/data/en/comms-en.js
// === MODULE: DRONE — COMMUNICATION AND ALERTING ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "drone",
    category: "comms",
    version: "2.0.0",
    lang: "en",
    title: "📡 Communication & Alerting",
    description: "Drone detection, threat response, communication loss, evacuation — survival algorithms",
    icon: "📡",
    color: "#ea580c"
  },

  questions: [
    {
      id: "signal",
      type: "single",
      text: "Do you have communication?",
      options: [
        { id: "has_phone", label: "📱 Yes, phone works, network available", tags: ["has_phone"] },
        { id: "no_signal", label: "📵 No signal / internet", tags: ["no_signal"] },
        { id: "dead_battery", label: "🔋 Phone battery dead", tags: ["dead_battery"] },
        { id: "other_device", label: "📻 Have radio / other communication means", tags: ["other_device"] }
      ]
    },
    {
      id: "time_of_day",
      type: "single",
      text: "What time of day is it?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "daylight", label: "☀️ Daytime", tags: ["daylight"] },
        { id: "night", label: "🌙 Night / darkness", tags: ["night"] }
      ]
    },
    {
      id: "drone_action",
      type: "single",
      text: "What is the drone doing?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "flying_over", label: "🛸 Flying overhead", tags: ["flying_over"] },
        { id: "hovering", label: "🔄 Hovering / circling", tags: ["hovering"] },
        { id: "dropping", label: "💥 Dropping something / explosion", tags: ["dropping"] },
        { id: "recon", label: "🔍 Reconnaissance (slow, scanning)", tags: ["recon"] },
        { id: "disappeared", label: "❓ Flew away / disappeared", tags: ["disappeared"] }
      ]
    },
    {
      id: "drone_type",
      type: "single",
      text: "What type of drone do you see?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "small_quad", label: "🪰 Small quadcopter (up to 1 m)", tags: ["small_drone"] },
        { id: "large_fixed", label: "✈️ Large fixed-wing (3+ m)", tags: ["large_drone"] },
        { id: "unknown_type", label: "❓ Don't know / can't see", tags: ["unknown_type"] }
      ]
    },
    {
      id: "drone_count",
      type: "single",
      text: "How many drones do you see?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "single", label: "1️⃣ One", tags: ["single_drone"] },
        { id: "multiple", label: "👥 Several (2–5)", tags: ["multiple_drones"] },
        { id: "swarm", label: "🔄 Swarm (6 or more)", tags: ["drone_swarm"] },
        { id: "unknown_count", label: "❓ Don't know", tags: ["unknown_count"] }
      ]
    },
    {
      id: "drone_sound",
      type: "single",
      text: "Can you hear the drone?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "loud", label: "🔊 Loud (close)", tags: ["loud_sound"] },
        { id: "quiet", label: "🔉 Quiet / barely audible", tags: ["quiet_sound"] },
        { id: "no_sound", label: "🔇 Can't hear / silent", tags: ["no_sound"] }
      ]
    },
    {
      id: "information",
      type: "single",
      text: "What do you know about the situation?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "drone_sighting", label: "🛸 Saw a drone / heard sound", tags: ["drone_sighting"] },
        { id: "explosion", label: "💥 Explosion / there are casualties", tags: ["explosion"] },
        { id: "warning", label: "⚠️ Received official warning", tags: ["warning"] },
        { id: "nothing", label: "❓ Nothing, just want to know", tags: ["nothing"] }
      ]
    },
    {
      id: "who",
      type: "single",
      text: "Who do you want to notify?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
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
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "critical", label: "🔴 Critical (direct threat, drop, explosion)", tags: ["critical"] },
        { id: "important", label: "🟠 Important (drone nearby, need to act)", tags: ["important"] },
        { id: "info", label: "🟢 Information (not urgent, preparation)", tags: ["info"] }
      ]
    },
    {
      id: "location_known",
      type: "single",
      text: "Do you know your exact location?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "gps", label: "📍 Yes, GPS / map", tags: ["gps"] },
        { id: "landmarks", label: "🗺️ Landmarks (street, building)", tags: ["landmarks"] },
        { id: "unknown", label: "❓ No, I don't know", tags: ["unknown_loc"] }
      ]
    },
    {
      id: "vulnerable_persons",
      type: "single",
      text: "Are there children, elderly, or mobility-impaired nearby?",
      conditions: { signal: ["has_phone", "no_signal", "dead_battery", "other_device"] },
      options: [
        { id: "vuln_none", label: "✅ Only adults, all mobile", tags: ["vuln_none"] },
        { id: "vuln_children", label: "🧒 There are children", tags: ["vuln_children"] },
        { id: "vuln_elderly", label: "👴 There are elderly / mobility-impaired", tags: ["vuln_elderly"] },
        { id: "vuln_both", label: "👨‍👩‍👧‍👦 Both children and elderly", tags: ["vuln_both"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. CRITICAL THREAT — HAS COMMUNICATION (112)
    // ============================================================
    {
      id: "call_112",
      title: "📞 Call emergency services (112)",
      description: "In case of drone threat, drop, or explosion — immediately call 112.",
      conditions: {
        signal: ["has_phone"],
        urgency: ["critical", "important"],
        who: ["emergency"],
        drone_action: ["flying_over", "hovering", "dropping"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Emergency services alerted + coordination",
      tags: ["emergency", "112", "call"],
      steps: [
        "Dial 112 — the unified emergency number (police, ambulance, EMERCOM).",
        "Clearly and calmly report: what is happening (drone, drop, explosion), address or coordinates, number of casualties.",
        "Describe the drone: type (small/large), color, direction, altitude, weapon presence.",
        "If you have GPS — give coordinates. If not — describe landmarks.",
        "Don't hang up, even if operator asks you to wait — stay on the line.",
        "If the call drops — call again, report the disconnection.",
        "If you can't speak (danger, injury) — send SMS to 112 (available in some regions).",
        "After the call, follow operator instructions. Don't leave shelter until ordered."
      ],
      warnings: [
        "DON'T call 112 unnecessarily — it overloads the line.",
        "DON'T panic — clear information helps faster.",
        "DON'T hang up until operator allows — they may need details.",
        "If a drone is dropping munitions — report that first!"
      ]
    },

    // ============================================================
    // 2. CRITICAL THREAT — NO COMMUNICATION
    // ============================================================
    {
      id: "critical_no_signal",
      title: "📵 Critical threat without communication — survival algorithm",
      description: "No signal, drone dropping munitions or hovering overhead. Act immediately.",
      conditions: {
        signal: ["no_signal", "dead_battery"],
        urgency: ["critical"],
        drone_action: ["dropping", "hovering", "flying_over"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–30 seconds",
      yield_estimate: "Life saved",
      tags: ["critical", "no_signal", "survival"],
      steps: [
        "IMMEDIATELY leave open space. Run to nearest shelter: basement, parking garage, entrance, dense tree canopy.",
        "If a drop has started — drop to the ground face down, cover head with hands, open mouth (protects eardrums).",
        "If a drone is hovering — don't look at it, don't run straight away. Move zigzag, use obstacles.",
        "Find people, warn them with gestures, shouting. Organize evacuation without panic.",
        "If you have a radio — use public channel (e.g., channel 7) for emergency call.",
        "After shelter — check yourself and others for injuries. Stop bleeding with improvised means.",
        "If possible — reach a location with signal and call for help."
      ],
      warnings: [
        "DON'T stay in place — the drone may be targeting you.",
        "DON'T use phone in the open field — it may attract attention.",
        "DON'T group with others in the open — drone may attack clusters.",
        "DON'T go back for belongings — life matters more."
      ]
    },

    // ============================================================
    // 3. DRONE DETECTION AT NIGHT
    // ============================================================
    {
      id: "drone_night_detection",
      title: "🌙 Drone detection at night — algorithm",
      description: "Night drones are dangerous — harder to spot. Identify type and act.",
      conditions: {
        signal: ["has_phone", "no_signal", "dead_battery", "other_device"],
        time_of_day: ["night"],
        drone_action: ["flying_over", "hovering", "recon"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Timely shelter",
      tags: ["night", "drone", "detection"],
      steps: [
        "At night, drones are visible by LEDs (red/green lights), engine sound, or IR illumination.",
        "If you see blinking lights — it's almost certainly a drone. Don't turn on flashlights — they give you away.",
        "Go into shadow, under a canopy, into a building. Don't stand under the open sky.",
        "If the drone uses thermal imaging — shelter behind thick walls, concrete structures, basements.",
        "If you're in a car — turn off engine, headlights, darken the cabin. At night, drones see thermal signatures.",
        "Don't try to shoot down a drone in the dark — it may attract attention and be dangerous.",
        "Remember the direction and type of drone (by sound). Report to authorities when possible."
      ],
      warnings: [
        "DON'T turn on lights, don't use flashlights — the drone may have a camera.",
        "DON'T stand near windows with lights on — heat signature is visible.",
        "DON'T try to shoot down a drone with improvised means — dangerous and may provoke return fire.",
        "At night, drone sound travels farther than sight. Listen carefully!"
      ]
    },

    // ============================================================
    // 4. RECONNAISSANCE DRONE
    // ============================================================
    {
      id: "recon_drone",
      title: "🔍 Reconnaissance drone detected — action plan",
      description: "Recon drones collect intelligence. Don't let yourself be detected and recorded.",
      conditions: {
        signal: ["has_phone", "no_signal", "dead_battery", "other_device"],
        drone_action: ["recon"],
        drone_type: ["small_drone", "unknown_type"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Stealth preserved",
      tags: ["recon", "drone", "stealth"],
      steps: [
        "Immediately stop, go into cover (under canopy, entrance, under tree). Don't run — movement attracts attention.",
        "If you're in a building — move away from windows, close yourself in a room without windows.",
        "Don't look into the drone's camera — it may capture your face.",
        "If you're in a car — duck, cover yourself with clothing, turn off engine (vibration gives away).",
        "Remember: drone type, color, direction, presence of payloads (camera, containers).",
        "Wait until the drone flies away. Don't leave cover for 5–10 minutes after it disappears.",
        "Report the reconnaissance drone to authorities: coordinates, type, direction."
      ],
      warnings: [
        "DON'T run from a reconnaissance drone — it attracts attention.",
        "DON'T use a mobile phone near a drone — signal may be intercepted.",
        "DON'T leave cover immediately after the drone leaves — it may return.",
        "DON'T photograph the drone with your phone — flash gives you away."
      ]
    },

    // ============================================================
    // 5. DRONE DROPPING MUNITIONS
    // ============================================================
    {
      id: "drone_drop",
      title: "💥 Drone dropping munitions — actions",
      description: "A drop is a critical threat. Reaction time — seconds.",
      conditions: {
        signal: ["has_phone", "no_signal", "dead_battery", "other_device"],
        drone_action: ["dropping"],
        urgency: ["critical"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3–10 seconds",
      yield_estimate: "Life saved",
      tags: ["drop", "explosion", "survival"],
      steps: [
        "On drop: drop to the ground face down, cover head with hands, open mouth (protects eardrums).",
        "If in a building — move away from windows, go to lower floors, basement.",
        "If in a car — exit the car and move 50+ meters away. The car is a target.",
        "After the explosion: check yourself for injuries. Stop bleeding.",
        "Help the injured, but don't cluster — possible secondary drop.",
        "Report to authorities: drop coordinates, munition type (if seen), number of casualties.",
        "Leave the affected area — possible secondary attack."
      ],
      warnings: [
        "DON'T stay in place — the drop may be accurate.",
        "DON'T cluster — the drone may target groups.",
        "DON'T go back for belongings in the affected area.",
        "DON'T use phone immediately after explosion — network may be overloaded."
      ]
    },

    // ============================================================
    // 6. DRONE SWARM (MASS ATTACK)
    // ============================================================
    {
      id: "drone_swarm",
      title: "🔄 Drone swarm — mass attack survival",
      description: "A swarm is a coordinated attack. Take shelter immediately.",
      conditions: {
        signal: ["has_phone", "no_signal", "dead_battery", "other_device"],
        drone_count: ["drone_swarm"],
        urgency: ["critical", "important"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–30 seconds",
      yield_estimate: "Life saved",
      tags: ["swarm", "drone", "mass_attack"],
      steps: [
        "A swarm is a coordinated attack. Act immediately.",
        "Take shelter in a solid building (basement, parking garage, bunker). Wood and light structures won't protect.",
        "If outside — drop to the ground, use any cover: ditches, pits, concrete blocks.",
        "DON'T try to shoot down drones — it's useless and dangerous.",
        "If in a car — leave immediately and find shelter. The car is a target.",
        "After the attack: check yourself and others for injuries. Stop bleeding.",
        "Report to authorities: coordinates, number of drones, direction, casualties."
      ],
      warnings: [
        "A swarm is not a single target. Don't try to shoot them all down.",
        "DON'T stand in open areas — a swarm may attack the area.",
        "DON'T use a phone near a swarm — signal may be intercepted.",
        "If possible — run in the opposite direction of the swarm's movement."
      ]
    },

    // ============================================================
    // 7. EVACUATION UNDER FIRE
    // ============================================================
    {
      id: "evacuation_under_fire",
      title: "🏃 Evacuation under drone fire — algorithm",
      description: "Evacuation under threat of attack is the most dangerous phase. Follow the plan.",
      conditions: {
        signal: ["has_phone", "no_signal", "dead_battery", "other_device"],
        urgency: ["critical", "important"],
        vulnerable_persons: ["vuln_children", "vuln_elderly", "vuln_both"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–5 minutes",
      yield_estimate: "Safe evacuation",
      tags: ["evacuation", "fire", "survival"],
      steps: [
        "Assign someone responsible for children, elderly, and mobility-impaired. Don't split up.",
        "Move along the shortest route to shelter. Use natural cover (walls, ditches, bushes).",
        "Don't run at full height — crouch, move zigzag.",
        "If you have a car — use it as cover, but don't stand near it — it may be targeted.",
        "Don't stop in open areas. Move continuously.",
        "If someone is injured — drag to cover, then provide aid.",
        "After evacuation — count everyone, check for injuries."
      ],
      warnings: [
        "DON'T run without a plan — panic kills.",
        "DON'T split up with children and elderly.",
        "DON'T stop in open areas — you may become a target.",
        "DON'T go back for belongings — evacuation is more important."
      ]
    },

    // ============================================================
    // 8. NOTIFY FAMILY
    // ============================================================
    {
      id: "warn_family",
      title: "👪 Notify family and loved ones",
      description: "How to quickly and effectively warn family about danger.",
      conditions: {
        signal: ["has_phone", "other_device"],
        who: ["family"],
        urgency: ["important", "critical"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 minutes",
      yield_estimate: "Family safe",
      tags: ["family", "warning", "communication"],
      steps: [
        "Call or message in the group chat: 'Danger! Drone! Go to shelter! Coordinates: ...'",
        "If no signal — send SMS or message via messenger (Telegram, WhatsApp).",
        "If you can't reach — leave a voice message with instructions.",
        "Give your coordinates and action plan (where you're evacuating).",
        "Agree on a meeting point after the all-clear.",
        "If you're in different places — coordinate actions by phone.",
        "Check that everyone received the message."
      ],
      warnings: [
        "DON'T panic in messages — it may scare loved ones.",
        "DON'T send unverified information — verify facts.",
        "DON'T forget about elderly relatives — they may not hear warnings."
      ]
    },

    // ============================================================
    // 9. NO SIGNAL — ALTERNATIVE METHODS
    // ============================================================
    {
      id: "no_signal",
      title: "📵 No signal — how to send a message",
      description: "If your phone has no signal, there are several ways to alert people.",
      conditions: {
        signal: ["no_signal", "dead_battery"],
        urgency: ["important", "info"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Alert sent",
      tags: ["no_signal", "alternative"],
      steps: [
        "Find the nearest place with Wi-Fi (cafe, mall, hotel, bus stop).",
        "Ask a passerby for a phone — many will let you call in an emergency.",
        "If you have a radio — use a public channel (e.g., channel 7, 9).",
        "Write a message on paper and pass it through an acquaintance or neighbor.",
        "If in a building — use the building alert system (loudspeakers, intercom).",
        "As a last resort — go to an open place and shout, wave your arms."
      ],
      warnings: [
        "DON'T waste last battery charge on conversations — save for emergency calls.",
        "DON'T ask strangers for a phone in a danger zone.",
        "DON'T use loud sounds near a drone — it may attract attention."
      ]
    },

    // ============================================================
    // 10. REPORT TO MILITARY / AUTHORITIES
    // ============================================================
    {
      id: "authority_report",
      title: "🏛️ Report to military or authorities",
      description: "If you spot a drone or suspicious activity, report to authorities.",
      conditions: {
        signal: ["has_phone", "other_device"],
        who: ["authorities"],
        information: ["drone_sighting", "explosion"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2–5 minutes",
      yield_estimate: "Authorities alerted",
      tags: ["authorities", "report", "military"],
      steps: [
        "Call the military commandant's office or local police station (not 112, direct number).",
        "Report: drone type, direction, altitude, weapon presence, time of observation.",
        "Give your coordinates (GPS or landmarks).",
        "If you have photos or video — save for authorities.",
        "Don't share drone information on social media until authorities confirm.",
        "Follow military or police instructions."
      ],
      warnings: [
        "DON'T provide false information — it may cause panic.",
        "DON'T post military object coordinates on social media.",
        "DON'T obstruct emergency services."
      ]
    },

    // ============================================================
    // 11. NOTIFY NEIGHBORS
    // ============================================================
    {
      id: "neighborhood_warning",
      title: "🏘️ Notify neighbors and people nearby",
      description: "How to quickly warn people nearby about danger.",
      conditions: {
        signal: ["has_phone", "no_signal", "dead_battery", "other_device"],
        who: ["neighbors"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Neighbors alerted",
      tags: ["neighbors", "warning", "community"],
      steps: [
        "If in a building — knock on walls, call neighboring apartments via intercom.",
        "Go to the stairwell and shout loudly: 'Danger! Drone! Go to shelter!'",
        "If there's a building/neighborhood chat — send a warning message.",
        "Ask neighbors to help alert others.",
        "If possible — turn on loud music or a siren (as a last resort).",
        "After alerting — go to shelter yourself."
      ],
      warnings: [
        "DON'T create panic — speak clearly and calmly.",
        "DON'T run through apartments — it may be unsafe.",
        "DON'T forget about yourself — after alerting, go to shelter immediately."
      ]
    },

    // ============================================================
    // 12. AUTHORITY WARNING RECEIVED
    // ============================================================
    {
      id: "warning_received",
      title: "⚠️ Authority warning received — your actions",
      description: "If you received an official warning — follow authorities' instructions.",
      conditions: {
        signal: ["has_phone", "other_device"],
        information: ["warning"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 minutes",
      yield_estimate: "Safety",
      tags: ["warning", "authorities", "safety"],
      steps: [
        "Carefully read/listen to the entire message from authorities.",
        "Follow instructions: shelter, evacuation, power shutoff, etc.",
        "Don't panic — authorities give verified information.",
        "Warn neighbors and loved ones about the warning.",
        "Turn off electricity and gas if recommended.",
        "Take documents, water, phone and go to shelter.",
        "Don't leave shelter until the all-clear."
      ],
      warnings: [
        "DON'T ignore authority warnings — they're based on intelligence.",
        "DON'T spread false information — trust official sources.",
        "DON'T return to the danger zone until the all-clear."
      ]
    },

    // ============================================================
    // 13. NOT URGENT — PREPARATION
    // ============================================================
    {
      id: "info_only",
      title: "🟢 Not urgent information — preparation",
      description: "If there's no direct threat, but time to prepare.",
      conditions: {
        signal: ["has_phone", "no_signal", "dead_battery", "other_device"],
        urgency: ["info"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "5–30 minutes",
      yield_estimate: "Preparedness",
      tags: ["info", "preparation"],
      steps: [
        "Gather information: watch news, official channels, chats.",
        "Prepare a 'go bag': documents, water, medicine, power bank.",
        "Charge phone and power bank to 100%.",
        "Plan a route to shelter.",
        "Warn loved ones about possible threat.",
        "Don't spread panic — act calmly and rationally."
      ],
      warnings: [
        "DON'T ignore information — it's better to prepare in advance.",
        "DON'T create panic — it hinders decision-making.",
        "DON'T put off preparation 'for later' — time may not wait."
      ]
    },

    // ============================================================
    // 14. DRONE SHELTER
    // ============================================================
    {
      id: "drone_shelter",
      title: "🛡️ Drone shelter — where to find protection",
      description: "Drones see thermal and visual signatures. Know where to shelter.",
      conditions: {
        signal: ["has_phone", "no_signal", "dead_battery", "other_device"],
        drone_action: ["flying_over", "hovering", "recon", "dropping"],
        urgency: ["critical", "important"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–30 seconds",
      yield_estimate: "Protection from detection and attack",
      tags: ["shelter", "drone", "protection"],
      steps: [
        "Best shelter: basement, bunker, parking garage, solid building (concrete, brick).",
        "In a building: move away from windows, into rooms without windows (bathroom, storage, corridor).",
        "Outside: ditches, ravines, dense tree canopies, under bridges.",
        "If the drone has thermal imaging — shelter behind concrete walls, rocks, in water (if available).",
        "DON'T shelter under light structures (canopies, tents, cars without roofs).",
        "If in a car — shelter in concrete parking garage or under a bridge.",
        "On drop — drop to the ground, cover head with hands."
      ],
      warnings: [
        "DON'T hide under trees during a drop — shrapnel can injure.",
        "DON'T shelter in a car — it won't protect from a drop.",
        "DON'T stand near windows — glass may shatter.",
        "Thermal imaging sees through thin walls. Shelter behind massive structures."
      ]
    }
  ]
});