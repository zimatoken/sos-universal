// === MODULE: TRAVEL — LOST ===
const travelLostDataEn = {
  category: "travel_lost",
  title: "🗺️ Lost",
  description: "Lost in a city, no connection, language barrier, stranded in a remote place — action plan",

  questions: [
    {
      id: "situation",
      type: "single",
      text: "What happened?",
      options: [
        { id: "lost_city", label: "Lost in an unfamiliar city", tags: ["lost_city"] },
        { id: "no_internet", label: "No internet or signal", tags: ["no_internet"] },
        { id: "language", label: "Language barrier", tags: ["language"] },
        { id: "separated", label: "Separated from travel companions / group", tags: ["separated"] },
        { id: "no_transport", label: "No transport to get back", tags: ["no_transport"] },
        { id: "stranded", label: "Stranded in a remote place", tags: ["stranded"] }
      ]
    },
    {
      id: "resources",
      type: "single",
      text: "What do you have with you?",
      options: [
        { id: "phone_battery", label: "Phone with battery", tags: ["phone_battery"] },
        { id: "phone_dead", label: "Phone dead / broken", tags: ["phone_dead"] },
        { id: "cash", label: "Have cash", tags: ["cash"] },
        { id: "nothing", label: "Nothing — no phone, no money", tags: ["nothing"] },
        { id: "map_paper", label: "Paper map / hotel address on paper", tags: ["map_paper"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "What time is it?",
      options: [
        { id: "day", label: "Daytime", tags: ["day"] },
        { id: "evening", label: "Evening (before midnight)", tags: ["evening"] },
        { id: "night", label: "Night (after midnight)", tags: ["night"] }
      ]
    }
  ],

  solutions: [
    {
      id: "lost_city_phone",
      title: "📱 Lost in the city — phone working",
      description: "With a phone, the problem is solved in minutes. Stay calm.",
      conditions: { situation: ["lost_city"], resources: ["phone_battery"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Navigation",
      tags: ["lost", "city", "phone"],
      steps: [
        "Open Google Maps or Apple Maps. Find your location (blue dot).",
        "Enter the hotel address or nearby landmark.",
        "If no internet — go to a cafe, hotel, or mall and ask for Wi-Fi.",
        "Use offline maps if you downloaded them in advance.",
        "Ask passersby for help. Show the hotel address on your phone or paper.",
        "Call a taxi via app (Uber, Bolt, Grab, Yandex.Taxi).",
        "If apps don't work — ask staff to call a taxi.",
        "Take a screenshot of the route and send it to someone you know."
      ],
      warnings: [
        "Don't walk in unfamiliar areas at night, especially alone.",
        "Don't get into cars of strangers offering a 'ride'.",
        "Always save the hotel address in both Russian and local language."
      ]
    },
    {
      id: "lost_no_phone",
      title: "😰 Lost without phone and money",
      description: "Difficult but solvable. Find help and a way to get in touch.",
      conditions: { situation: ["lost_city"], resources: ["nothing"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1-3 hours",
      yield_estimate: "Help",
      tags: ["lost", "no_phone", "emergency"],
      steps: [
        "Find a busy place: cafe, hotel, mall, police station.",
        "Go to the nearest hotel (even if you're not staying there). Reception usually speaks English.",
        "Ask to call your hotel or a friend/relative.",
        "Ask for internet access (lobby computer) and check email or social media.",
        "Contact the police (tourist police exist in many cities).",
        "If you remember nothing — the Russian consulate can help identify you.",
        "Next time: write down the hotel address and phone numbers on paper."
      ],
      warnings: [
        "Don't go far from busy areas.",
        "Don't accept help from suspicious people.",
        "Always have an 'emergency' bill (20–50 USD) in your sock or waist belt."
      ]
    },
    {
      id: "no_internet",
      title: "📡 No internet and signal",
      description: "Connection problems happen often. Several ways to get back online.",
      conditions: { situation: ["no_internet"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-60 min",
      yield_estimate: "Internet",
      tags: ["internet", "wifi", "connection"],
      steps: [
        "Restart your phone. Check if roaming is enabled.",
        "Try manually selecting a carrier (Settings → Carrier).",
        "Find a nearby cafe, hotel, mall, or McDonald's — they usually have free Wi-Fi.",
        "Buy a local SIM card (at airports and stations).",
        "Use WiFi Map app to find passwords (works offline).",
        "Ask a passerby to share internet via mobile hotspot.",
        "Find a tourist information center (marked with 'i').",
        "As a last resort — go to the police or fire station."
      ],
      warnings: [
        "Public Wi-Fi is not secure — don't enter bank passwords without VPN.",
        "Before traveling, download offline Google Maps and WiFi Map database.",
        "Buy an eSIM before travel (Airalo, Holafly)."
      ]
    },
    {
      id: "language_barrier",
      title: "🗣️ Language barrier",
      description: "Even without knowing the language, you can communicate with tech and gestures.",
      conditions: { situation: ["language"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-15 min",
      yield_estimate: "Communication",
      tags: ["language", "translate", "communication"],
      steps: [
        "Use Google Translate: type a phrase, show translation on screen.",
        "Download offline language pack in advance — translation works offline.",
        "Use visual translation: take a photo of a menu or sign.",
        "Show the hotel address on your phone to the taxi driver.",
        "Use universal gestures: show numbers on fingers, draw on your palm.",
        "Find young people — they usually know basic English.",
        "Go to a hotel or restaurant — staff are usually multilingual.",
        "Write down key phrases in the local language in advance."
      ],
      warnings: [
        "Don't shout — it scares people.",
        "Smile and politeness work in any language.",
        "Avoid gestures that might be offensive in other cultures."
      ]
    },
    {
      id: "separated_group",
      title: "👥 Separated from companions / group",
      description: "Common in large groups or tours. There's a standard action plan.",
      conditions: { situation: ["separated"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-60 min",
      yield_estimate: "Reunion",
      tags: ["group", "separated", "meeting"],
      steps: [
        "Don't panic. Remember if you agreed on a 'meeting point'.",
        "If you have signal — call or message in the group chat.",
        "If no signal — go to a busy place (museum entrance, main square, metro station) and wait.",
        "Agree in advance: wait 30 minutes at the spot, then go to the hotel.",
        "If on a tour — find the guide or tour operator representative.",
        "If children are lost — immediately inform police and staff.",
        "Use apps like Zenly / Find My Friends to track each other."
      ],
      warnings: [
        "Don't run in different directions looking for each other.",
        "Give children a bracelet with hotel address and parents' phone in local language.",
        "In crowds, hold hands or use a bright hat/flag as a marker."
      ]
    },
    {
      id: "no_transport",
      title: "🚌 No transport back",
      description: "Night, strike, breakdown — but you need to get to the hotel or airport.",
      conditions: { situation: ["no_transport"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "30 min - 3 hours",
      yield_estimate: "Transport",
      tags: ["transport", "taxi", "night"],
      steps: [
        "Check alternatives: night buses, trains, taxis, carsharing.",
        "Use apps: Uber, Bolt, Grab, Yandex.Taxi.",
        "If taxi is expensive — find other travelers and split the ride.",
        "If there's a strike — check the local transport authority website.",
        "As a last resort — walk along well-lit streets.",
        "If stranded at the airport — the airline must provide a hotel.",
        "Find a 24-hour cafe and wait until morning."
      ],
      warnings: [
        "Don't take unofficial taxis at night.",
        "When walking at night, keep your phone charged.",
        "In some countries, transport doesn't operate on certain days."
      ]
    },
    {
      id: "stranded_remote",
      title: "🏔️ Stranded in a remote place",
      description: "Mountains, desert, island — a serious situation requiring immediate action.",
      conditions: { situation: ["stranded"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Rescue",
      tags: ["remote", "emergency", "rescue"],
      steps: [
        "STAY IN PLACE if you don't know where to go.",
        "Call emergency services: 112 (universal), local rescue number, or police.",
        "Climb higher ground and try to get a signal.",
        "Use What3Words app for precise location (works offline).",
        "Signal with: whistle (3 short beeps), mirror, flashlight, fire.",
        "Find shelter from the weather. Conserve energy and water.",
        "If in a group — don't split up.",
        "Always tell someone your route and expected return time."
      ],
      warnings: [
        "Hypothermia kills faster than hunger — stay warm and dry.",
        "Don't drink from unknown sources without boiling or tablets.",
        "In the desert, only travel at night, stay in the shade during the day."
      ]
    }
  ]
};

// ===== EXPORT =====
window.travelLostDataEn = travelLostDataEn;
