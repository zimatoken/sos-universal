const travelLostDataEn = {
  category: "lost",
  title: "🗺️ Lost / No Signal",
  description: "Emergency: Lost / No Signal",
  questions: [
    {
      id: "situation",
      type: "single",
      text: "What happened?",
      options: [
        { id: "lost_city", label: "Lost in an unfamiliar city", tags: ["lost_city"] },
        { id: "no_internet", label: "No internet or connection", tags: ["no_internet"] },
        { id: "language", label: "Can't communicate — language barrier", tags: ["language"] },
        { id: "separated", label: "Lost companions / group", tags: ["separated"] },
        { id: "no_transport", label: "No transport back (night, strike, breakdown)", tags: ["no_transport"] },
        { id: "stranded", label: "Stranded in a remote location", tags: ["stranded"] }
      ]
    },
    {
      id: "location_type",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "city_center", label: "In city center / tourist area", tags: ["city_center"] },
        { id: "suburbs", label: "On outskirts / residential area", tags: ["suburbs"] },
        { id: "nature", label: "In natural area (mountains, forest, beach)", tags: ["nature"] },
        { id: "transit", label: "At airport / station", tags: ["transit"] }
      ]
    },
    {
      id: "resources",
      type: "single",
      text: "What do you have with you?",
      options: [
        { id: "phone_battery", label: "Phone with battery", tags: ["phone_battery"] },
        { id: "phone_dead", label: "Phone dead / broken", tags: ["phone_dead"] },
        { id: "cash", label: "Have cash money", tags: ["cash"] },
        { id: "nothing", label: "Nothing — no phone, no money", tags: ["nothing"] },
        { id: "map_paper", label: "Have paper map / hotel address on paper", tags: ["map_paper"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "What time of day is it?",
      options: [
        { id: "day", label: "Day", tags: ["day"] },
        { id: "evening", label: "Evening (before midnight)", tags: ["evening"] },
        { id: "night", label: "Night (after midnight)", tags: ["night"] }
      ]
    }
  ],
  solutions: [
    {
      id: "lost_city_phone",
      title: "Lost in city — phone works",
      conditions: { "situation": ["lost_city"], "resources": ["phone_battery"] },
      tags: ["situation", "resources", "lost"],
      description: "With a phone the problem is solved in minutes. The main thing is not to panic.",
      steps: [
        "Open Google Maps or Apple Maps. Find your location (blue dot).",
        "Enter your hotel address or name of a nearby landmark you know.",
        "If no internet — go to the nearest cafe, hotel, or mall. Ask for Wi-Fi (usually free).",
        "Use offline maps if you downloaded them in advance (Google Maps allows downloading city maps).",
        "Ask passersby for help. Show your hotel address on phone or paper. Gestures and a smile work everywhere.",
        "Call a taxi via app (Uber, Bolt, Grab, Yandex.Taxi) to your hotel. This is the fastest way.",
        "If local apps don't work — ask cafe/hotel staff to call a taxi for you.",
        "Screenshot the route and send it to someone you know — just in case."
      ],
      warnings: [
        "Don't walk in unfamiliar areas at night, especially if alone.",
        "Don't get in cars of strangers offering a ride.",
        "Always save your hotel address in local language before going out."
      ],
      priority: "slow",
      reliability: "low",
      time_estimate: "15-30 min",
      yield_estimate: "Solution found"
    },
    {
      id: "lost_no_phone",
      title: "Lost without phone and money",
      conditions: { "situation": ["lost_city"], "resources": ["nothing"] },
      tags: ["situation", "resources", "lost"],
      description: "Difficult situation, but solvable. Need to find help and a way to contact someone.",
      steps: [
        "Find a busy place: cafe, hotel, mall, police station. It's safer and there are people who can help.",
        "Approach the nearest hotel (even if you don't stay there). Reception usually speaks English and helps tourists.",
        "Ask to call your hotel or a friend/relative's number. Most hotels allow using the phone for local calls.",
        "If you don't remember the number — ask for internet access (lobby computer) and check email or social media.",
        "Contact the police (tourist police exists in many cities). They can help contact your hotel or consulate.",
        "If you remember nothing at all — the Russian consulate can help establish identity and contact relatives.",
        "Next time: write down hotel address and phone numbers on paper, carry a small amount of cash separate from main money."
      ],
      warnings: [
        "Don't wander far from busy places — this increases the risk of becoming a crime victim.",
        "Don't accept help from people who seem suspicious or pushy.",
        "Always have an 'emergency' bill (20–50 USD) in your sock or money belt."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Solution found"
    },
    {
      id: "no_internet",
      title: "No internet or connection",
      conditions: { "situation": ["no_internet"] },
      tags: ["situation", "lost"],
      description: "Connection problems happen often. There are several ways to restore it.",
      steps: [
        "Restart your phone. Check if roaming is enabled (Settings → Mobile Data → Roaming).",
        "Try manually selecting a carrier (Settings → Carrier → choose available operator).",
        "Find the nearest cafe, hotel, mall, or McDonald's — they usually have free Wi-Fi without a password.",
        "Buy a local SIM card. At airports and stations tourist SIMs with internet are sold (usually 10–30 €).",
        "Use the WiFi Map app — it shows passwords for nearby Wi-Fi (works offline if you downloaded the database).",
        "Ask a passerby to share internet via mobile hotspot for a few minutes.",
        "If nothing helps — find the tourist information center (usually in the city center, marked with 'i').",
        "In extreme cases — go to the police or fire station. They are obligated to help a tourist."
      ],
      warnings: [
        "Public Wi-Fi is not secure — don't enter bank passwords without VPN.",
        "Before traveling download offline Google Maps and WiFi Map database.",
        "Buy an eSIM before travel (Airalo, Holafly) — works immediately upon arrival."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "15-60 min",
      yield_estimate: "Solution found"
    },
    {
      id: "language_barrier",
      title: "Language barrier — can't communicate",
      conditions: { "situation": ["language"] },
      tags: ["situation", "lost"],
      description: "Even without knowing the language you can explain almost everything using technology and gestures.",
      steps: [
        "Use Google Translate: type a phrase, show the translation on screen. Enable conversation mode for dialogue.",
        "Download an offline language pack in Google Translate in advance — then translation works without internet.",
        "Use visual translator: photograph a menu, sign, or document — Google Translate will translate text in the photo.",
        "Show your hotel address or place name to the taxi driver on your phone. Better — in the local language (save in notes in advance).",
        "Use universal gestures: show numbers with fingers, draw on your palm, point at a map.",
        "Find young people — in most countries young people know basic English.",
        "Go to a hotel or restaurant — staff is usually multilingual or will find a translator.",
        "In advance write down key phrases in the local language: 'Where is the toilet?', 'How much?', 'Help', 'Call police', 'I am lost'."
      ],
      warnings: [
        "Don't shout thinking people will understand better — it only scares the listener.",
        "A smile and politeness are understood in any language.",
        "Avoid gestures that may be offensive in other cultures (thumbs up in some countries)."
      ],
      priority: "slow",
      reliability: "low",
      time_estimate: "5-15 min",
      yield_estimate: "Solution found"
    },
    {
      id: "separated_group",
      title: "Lost companions / group",
      conditions: { "situation": ["separated"] },
      tags: ["situation", "lost"],
      description: "Common situation in large groups or on tours. There is a standard action plan.",
      steps: [
        "DON'T panic. Remember if you agreed on a 'meeting point' in case of separation.",
        "If you have connection — call or write in the group chat (WhatsApp, Telegram). Tell them where you are and what you see around.",
        "If no connection — go to the nearest busy place (museum entrance, main square, metro station) and wait there.",
        "In advance agree: if lost — wait 30 minutes on the spot, then go to the hotel / park entrance / information desk.",
        "If it's a tour — find the guide or tour operator representative. They have lists and phone numbers of all participants.",
        "If children are lost — immediately notify police and staff. Large venues (Disneyland, museums) have child search services.",
        "For group trips use walkie-talkies or apps like Zenly / Find My Friends to track each other."
      ],
      warnings: [
        "Never run in different directions looking for each other — this increases the distance.",
        "Give children a bracelet with the hotel address and parents' phone number in the local language.",
        "In crowds hold hands or use a bright hat/flag as a landmark."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "15-60 min",
      yield_estimate: "Solution found"
    },
    {
      id: "no_transport",
      title: "No transport back",
      conditions: { "situation": ["no_transport"] },
      tags: ["situation", "lost"],
      description: "Night, strike, breakdown — but you need to get to the hotel or airport.",
      steps: [
        "Check alternatives: night buses, trains, taxis, carsharing, bicycles.",
        "Use apps: Uber, Bolt, Grab, Yandex.Taxi work 24/7 in most cities.",
        "If taxi is expensive — find other tourists and split the ride (Splitwise, or just agree on the spot).",
        "If public transport isn't working (strike) — check the local transport authority website. Sometimes they organize replacement.",
        "In extreme cases — walk. Use Google Maps with walking directions. At night stick to lit streets.",
        "If stuck at the airport due to cancelled flight — the airline is obligated to provide a hotel and transfer.",
        "If there are absolutely no options — find a 24-hour cafe or McDonald's and wait until morning. It's safe and has Wi-Fi."
      ],
      warnings: [
        "Don't get in unofficial taxis at night — risk of robbery or inflated fare.",
        "When walking at night keep your phone charged and tell someone your route.",
        "In some countries public transport doesn't run on certain days (e.g. Sunday in Europe)."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "30 min - 3 hours",
      yield_estimate: "Solution found"
    },
    {
      id: "stranded_remote",
      title: "Stranded in a remote location",
      conditions: { "situation": ["stranded"] },
      tags: ["situation", "lost"],
      description: "Mountains, desert, island — a serious situation requiring immediate action.",
      steps: [
        "STAY WHERE YOU ARE if you have no clear idea where to go. Wandering increases risk and complicates search.",
        "Call emergency services: 112 (universal), local rescue number, or police.",
        "If no signal — climb higher (hill, elevation) and try to catch a signal.",
        "Use the What3Words app — it transmits exact location with three words (works offline if downloaded).",
        "Send signals: use a whistle (3 short blasts — international distress signal), mirror, flashlight, or fire (if safe).",
        "Seek shelter from weather. Conserve energy and water. Don't waste supplies.",
        "If in a group — don't split up. Leave someone at the location while others seek help (only if sure of direction).",
        "Before traveling to remote areas ALWAYS inform someone of your route and return time."
      ],
      warnings: [
        "Hypothermia kills faster than hunger — stay warm and dry.",
        "Don't drink water from unknown sources without boiling or tablets.",
        "In the desert move only at night, stay in shade during the day."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Solution found"
    }
  ]
}

// ===== EXPORT =====
window.travelLostDataEn = travelLostDataEn;
