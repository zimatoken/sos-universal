// modules/survival/data/en/radio-en.js
// === MODULE: SURVIVAL — COMMUNICATION ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "survival",
    category: "radio",
    version: "1.0.0",
    lang: "en",
    title: "📻 Communication",
    description: "How to signal for help and contact rescuers",
    icon: "📻",
    color: "#16a34a"
  },

  questions: [
    {
      id: "device",
      type: "single",
      text: "What communication device do you have?",
      options: [
        { id: "radio", label: "📻 Radio / Walkie-talkie", tags: ["radio", "channel"] },
        { id: "phone", label: "📱 Phone (with/without network)", tags: ["phone", "emergency"] },
        { id: "satellite", label: "🛰️ Satellite phone", tags: ["satellite", "global"] },
        { id: "nothing", label: "❌ Nothing at all", tags: ["primitive", "signals"] }
      ]
    },
    {
      id: "situation",
      type: "single",
      text: "What's the situation?",
      conditions: { device: ["radio", "phone", "satellite", "nothing"] },
      options: [
        { id: "need_help", label: "🆘 Need help urgently", tags: ["emergency", "distress"] },
        { id: "lost", label: "🗺️ Lost / disoriented", tags: ["lost", "orientation"] },
        { id: "waiting", label: "⏳ Waiting for rescuers", tags: ["wait", "position"] }
      ]
    },
    {
      id: "terrain",
      type: "single",
      text: "Where are you?",
      conditions: { device: ["radio", "phone", "satellite", "nothing"] },
      options: [
        { id: "open", label: "🏔️ Open area / summit", tags: ["open", "visibility"] },
        { id: "forest", label: "🌲 Forest / plain", tags: ["forest", "low_signal"] },
        { id: "valley", label: "🏞️ Valley / ravine", tags: ["valley", "poor_signal"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "Time of day?",
      conditions: { device: ["radio", "phone", "satellite", "nothing"] },
      options: [
        { id: "day", label: "☀️ Day", tags: ["day", "visual"] },
        { id: "night", label: "🌙 Night", tags: ["night", "light", "sound"] },
        { id: "fog", label: "🌫️ Fog", tags: ["fog", "limited", "sound"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. USING A RADIO
    // ============================================================
    {
      id: "radio_use",
      title: "📻 Using a radio",
      description: "Set your radio to channel 16 (international) or 9. Transmit: 'Mayday, Mayday, this is [your name], requesting assistance'. Repeat every 5 minutes. In mountains, find higher ground.",
      conditions: { device: ["radio"], situation: ["need_help", "lost", "waiting"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-2 min",
      yield_estimate: "contact with rescuers",
      tags: ["radio", "emergency", "mayday"],
      steps: [
        "1. Turn on the radio, select channel 16 (international) or 9.",
        "2. Press transmit, say: 'Mayday, Mayday, this is [your name]'.",
        "3. Report your coordinates and terrain description.",
        "4. Release the button, listen for a response.",
        "5. Repeat every 5 minutes.",
        "6. In mountains — find an open area, signal is better."
      ],
      warnings: [
        "Don't use the radio unnecessarily — it clogs the airwaves.",
        "Batteries drain — conserve charge.",
        "In mountains, signal is worse — find higher ground."
      ]
    },
    // ============================================================
    // 2. EMERGENCY CALL
    // ============================================================
    {
      id: "emergency_call",
      title: "📞 Emergency call",
      description: "If you have a phone: 112 (Europe, Russia), 911 (USA), 999 (UK). Even without a SIM card, you can call. Report your location, describe the situation.",
      conditions: { device: ["phone"], situation: ["need_help", "lost"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 min",
      yield_estimate: "help called",
      tags: ["phone", "emergency", "call"],
      steps: [
        "1. Dial 112 (Russia/Europe), 911 (USA), 999 (UK).",
        "2. Say: 'I'm in danger, need help'.",
        "3. Report your location (landmarks, GPS).",
        "4. Don't hang up until told.",
        "5. If signal is weak — send SMS with coordinates.",
        "6. If battery is low — turn off and check every 30 minutes."
      ],
      warnings: [
        "Even without a SIM card, 112 works.",
        "Conserve battery charge.",
        "In mountains, signal is worse — find an open area."
      ]
    },
    // ============================================================
    // 3. MIRROR SIGNAL
    // ============================================================
    {
      id: "signal_mirror",
      title: "🪞 Mirror signal",
      description: "During the day, use a mirror or shiny object. Reflect sunlight toward aircraft. The 'flash' is visible up to 50 km. 3 short flashes = distress signal.",
      conditions: { device: ["nothing"], situation: ["need_help", "waiting"], terrain: ["open", "forest"], time: ["day"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5-10 min",
      yield_estimate: "visible from air",
      tags: ["signal", "mirror", "day"],
      steps: [
        "1. Find a mirror, shiny lid, phone screen.",
        "2. Reflect sunlight toward aircraft.",
        "3. 3 short flashes = distress signal.",
        "4. Don't shine into pilot's eyes — blind them.",
        "5. Repeat every 5-10 minutes.",
        "6. In cloudy weather — useless, use other signals."
      ],
      warnings: [
        "Don't shine into pilot's eyes.",
        "Only works in clear weather.",
        "Mirror can also be used at night (reflecting fire)."
      ]
    },
    // ============================================================
    // 4. SOUND SIGNAL
    // ============================================================
    {
      id: "whistle_sound",
      title: "🔊 Sound signal",
      description: "3 short sounds = international distress signal. Use a whistle, banging stones, or hitting a tree with a stick. Sound carries further than shouting. In forest, sound travels worse — find a clearing.",
      conditions: { device: ["nothing"], situation: ["need_help", "waiting", "lost"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1-2 min",
      yield_estimate: "attention attracted",
      tags: ["sound", "whistle", "signal"],
      steps: [
        "1. Use a whistle — 3 short sounds, pause, repeat.",
        "2. Or bang stones, hit a tree with a stick: 3 strikes, pause, 3 strikes.",
        "3. In forest, sound travels worse — find a clearing.",
        "4. In fog, sound works better than visual signals.",
        "5. Repeat every 5-10 minutes.",
        "6. Voice carries 500 m, whistle carries 1-2 km."
      ],
      warnings: [
        "Sound may not be heard due to wind.",
        "Don't waste all energy shouting — voice gives out.",
        "Whistle carries further than shouting."
      ]
    },
    // ============================================================
    // 5. FIRE SIGNALS
    // ============================================================
    {
      id: "fire_signal",
      title: "🔥 Fire signals",
      description: "At night, fire is visible for 10-15 km. Build 3 fires in a row or triangle (international signal). During the day, add wet branches — thick smoke will be visible from afar.",
      conditions: { device: ["nothing"], situation: ["need_help", "waiting"], terrain: ["open", "forest"], time: ["night", "day"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "15-30 min",
      yield_estimate: "visible at night for 10-15 km",
      tags: ["fire", "smoke", "night", "signal"],
      steps: [
        "1. Build 3 fires in a row or triangle.",
        "2. At night, fire is visible for 10-15 km.",
        "3. During the day, add wet branches — thick smoke.",
        "4. 3 fires = international distress signal.",
        "5. Maintain fire until help arrives.",
        "6. If fuel is limited — one fire with smoke also works."
      ],
      warnings: [
        "Don't start a fire in dry weather in forest — fire hazard.",
        "Smoke may be toxic if burning chemicals.",
        "Wind carries smoke — stand on the leeward side."
      ]
    },
    // ============================================================
    // 6. SATELLITE PHONE
    // ============================================================
    {
      id: "satellite_call",
      title: "🛰️ Satellite phone — global communication",
      description: "A satellite phone works anywhere in the world, even without cellular network. Point the antenna at the southern sky (in northern hemisphere). Wait for satellite connection. Conserve battery.",
      conditions: { device: ["satellite"], situation: ["need_help", "lost", "waiting"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-2 min",
      yield_estimate: "global connection",
      tags: ["satellite", "global", "emergency"],
      steps: [
        "1. Go to an open area (sky must be visible).",
        "2. Point antenna at the southern sky (in northern hemisphere).",
        "3. Wait for satellite connection (10-30 seconds).",
        "4. Dial emergency number (112, 911).",
        "5. Report coordinates, describe the situation.",
        "6. Conserve battery — turn off between calls."
      ],
      warnings: [
        "Satellite phone only works with direct sky view.",
        "In forest/ravine, signal may be weak.",
        "Battery lasts 1-2 hours of talk time — conserve."
      ]
    },
    // ============================================================
    // 7. SMS WITH COORDINATES
    // ============================================================
    {
      id: "sms_coords",
      title: "📱 SMS with coordinates",
      description: "If a call won't go through — send an SMS with coordinates. 112 in Russia accepts SMS. Write: 'SOS [coordinates] [name] [situation]'. Even without internet, SMS works.",
      conditions: { device: ["phone"], situation: ["need_help", "lost", "waiting"], terrain: ["open", "forest", "valley"], time: ["day", "night", "fog"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 min",
      yield_estimate: "coordinates delivered",
      tags: ["sms", "coordinates", "emergency"],
      steps: [
        "1. Open maps app (Google Maps, Apple Maps).",
        "2. Find your coordinates (or use GPS).",
        "3. Write SMS: 'SOS [coordinates] [name] [situation]'.",
        "4. Send to 112 (Russia) or to a contact.",
        "5. If no internet — turn on GPS, coordinates will be determined.",
        "6. Repeat sending every 10-15 minutes."
      ],
      warnings: [
        "SMS works even with weak signal.",
        "Coordinates format: latitude, longitude.",
        "Turn on GPS only for coordinates — saves battery."
      ]
    }
  ]
});