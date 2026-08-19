// modules/travel/data/en/lost-en.js
// === MODULE: TRAVEL — LOST / NO CONNECTION ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "travel",
    category: "lost",
    version: "1.0.0",
    lang: "en",
    title: "🗺️ Lost / No Connection",
    description: "What to do if you get lost in an unfamiliar city or country",
    icon: "🗺️",
    color: "#0d9488"
  },

  questions: [
    {
      id: "situation",
      type: "single",
      text: "What happened?",
      options: [
        { id: "lost_city", label: "🌆 Lost in an unfamiliar city", tags: ["lost_city"] },
        { id: "no_internet", label: "📶 No internet or connection", tags: ["no_internet"] },
        { id: "language", label: "🗣️ Language barrier — can't communicate", tags: ["language"] },
        { id: "separated", label: "👥 Separated from travel companions / group", tags: ["separated"] },
        { id: "no_transport", label: "🚌 No transport back", tags: ["no_transport"] },
        { id: "stranded", label: "🏔️ Stranded in a remote area", tags: ["stranded"] }
      ]
    },
    {
      id: "location_type",
      type: "single",
      text: "Where are you?",
      conditions: { situation: ["lost_city", "no_internet", "language", "separated", "no_transport", "stranded"] },
      options: [
        { id: "city_center", label: "🏙️ City center / tourist area", tags: ["city_center"] },
        { id: "suburbs", label: "🏘️ Suburbs / residential area", tags: ["suburbs"] },
        { id: "nature", label: "🌲 Nature area (mountains, forest, beach)", tags: ["nature"] },
        { id: "transit", label: "✈️ Airport / train station", tags: ["transit"] }
      ]
    },
    {
      id: "resources",
      type: "single",
      text: "What do you have with you?",
      conditions: { situation: ["lost_city", "no_internet", "language", "separated", "no_transport", "stranded"] },
      options: [
        { id: "phone_battery", label: "📱 Phone with battery", tags: ["phone_battery"] },
        { id: "phone_dead", label: "🔋 Phone dead / broken", tags: ["phone_dead"] },
        { id: "cash", label: "💵 Cash", tags: ["cash"] },
        { id: "nothing", label: "❌ Nothing — no phone, no money", tags: ["nothing"] },
        { id: "map_paper", label: "🗺️ Paper map / hotel address written down", tags: ["map_paper"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "What time of day is it?",
      conditions: { situation: ["lost_city", "no_internet", "language", "separated", "no_transport", "stranded"] },
      options: [
        { id: "day", label: "☀️ Day", tags: ["day"] },
        { id: "evening", label: "🌅 Evening (before midnight)", tags: ["evening"] },
        { id: "night", label: "🌙 Night (after midnight)", tags: ["night"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. Lost in city — phone working
    // ============================================================
    {
      id: "lost_city_phone",
      title: "🌆 Lost in city — phone working",
      description: "With a phone, the problem is solved in minutes. Don't panic.",
      conditions: { situation: ["lost_city"], resources: ["phone_battery"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "15-30 min",
      yield_estimate: "Return to hotel",
      tags: ["lost_city", "phone", "maps"],
      steps: [
        "Open Google Maps or Apple Maps. Find your location (blue dot).",
        "Enter your hotel address or a nearby landmark you know.",
        "If no internet — go to a nearby cafe, hotel, or mall. Ask for Wi-Fi.",
        "Use offline maps if you downloaded them in advance.",
        "Ask passersby for help. Show the hotel address on your phone or paper.",
        "Call a taxi via app (Uber, Bolt, Grab) to the hotel.",
        "If apps don't work — ask cafe/hotel staff to call a taxi for you.",
        "Take a screenshot of the route and send it to someone you know."
      ],
      warnings: [
        "Don't walk in unfamiliar areas at night, especially alone.",
        "Don't get into cars of strangers offering a 'ride'.",
        "Always save your hotel address in both Russian and local language before going out."
      ]
    },
    // ============================================================
    // 2. Lost without phone and money
    // ============================================================
    {
      id: "lost_no_phone",
      title: "❌ Lost without phone and money",
      description: "Difficult but solvable. Find help and a way to contact someone.",
      conditions: { situation: ["lost_city"], resources: ["nothing"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-3 hours",
      yield_estimate: "Contact and help",
      tags: ["lost_city", "no_phone", "emergency"],
      steps: [
        "Find a busy place: cafe, hotel, mall, police station.",
        "Go to the nearest hotel. Reception usually speaks English and helps tourists.",
        "Ask to call your hotel or a friend/relative's number.",
        "If you don't remember the number — ask for internet access (lobby computer) and check email or social media.",
        "Contact the police (tourist police exist in many cities).",
        "If you remember nothing — the Russian consulate can help identify you.",
        "Next time: write down your hotel address and phone numbers on paper, carry some cash separately."
      ],
      warnings: [
        "Don't go far from busy places — it increases risk.",
        "Don't accept help from suspicious or pushy people.",
        "Always have an 'emergency' bill (20–50 USD) in a waist pouch."
      ]
    },
    // ============================================================
    // 3. No internet and connection
    // ============================================================
    {
      id: "no_internet",
      title: "📶 No internet and connection",
      description: "Connectivity issues happen often. Several ways to restore it.",
      conditions: { situation: ["no_internet"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15-60 min",
      yield_estimate: "Connection restored",
      tags: ["no_internet", "connectivity"],
      steps: [
        "Restart your phone. Check if roaming is enabled.",
        "Try manually selecting a carrier in settings.",
        "Find a nearby cafe, hotel, mall, or McDonald's — usually free Wi-Fi.",
        "Buy a local SIM card. Tourist SIMs with internet are sold at airports.",
        "Use WiFi Map app — it shows passwords for nearby Wi-Fi.",
        "Ask a passerby to share internet via mobile hotspot.",
        "Find a tourist information center (usually marked with 'i' in the city center).",
        "As a last resort — go to the police or fire station."
      ],
      warnings: [
        "Public Wi-Fi is unsafe — don't enter bank passwords without VPN.",
        "Before your trip, download offline Google Maps and WiFi Map database.",
        "Buy an eSIM before travel (Airalo, Holafly) — works immediately upon arrival."
      ]
    },
    // ============================================================
    // 4. Language barrier
    // ============================================================
    {
      id: "language_barrier",
      title: "🗣️ Language barrier — can't communicate",
      description: "Even without knowing the language, you can communicate using technology and gestures.",
      conditions: { situation: ["language"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "5-15 min",
      yield_estimate: "Communication",
      tags: ["language", "translation"],
      steps: [
        "Use Google Translate: type a phrase, show the translation on screen.",
        "Download offline language pack in Google Translate in advance.",
        "Use visual translator: take a photo of a menu, sign, or document.",
        "Show the hotel address on your phone to the taxi driver — preferably in the local language.",
        "Use universal gestures: show numbers on fingers, draw on your palm, point to a map.",
        "Find young people — in most countries, young people know basic English.",
        "Go to a hotel or restaurant — staff are usually multilingual.",
        "Write down key phrases in the local language in advance."
      ],
      warnings: [
        "Don't shout — it only frightens the other person.",
        "A smile and politeness are understood in any language.",
        "Avoid gestures that may be offensive in other cultures."
      ]
    },
    // ============================================================
    // 5. Separated from group
    // ============================================================
    {
      id: "separated_group",
      title: "👥 Separated from travel companions / group",
      description: "A common situation in large groups or on tours. Standard action plan.",
      conditions: { situation: ["separated"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15-60 min",
      yield_estimate: "Reunited with group",
      tags: ["separated", "group"],
      steps: [
        "DON'T panic. Remember if you agreed on a 'meeting point'.",
        "If you have connection — call or message the group chat. Share your location.",
        "If no connection — go to a busy place (museum entrance, main square, metro station) and wait there.",
        "Agree in advance: if separated — wait 30 minutes at the spot, then go to the hotel.",
        "If on a tour — find the guide or tour operator representative.",
        "If children are lost — immediately report to police and staff.",
        "Use apps like Zenly / Find My Friends for tracking."
      ],
      warnings: [
        "Never run in different directions looking for each other — it increases the distance.",
        "Give children a bracelet with the hotel address and parents' phone number in the local language.",
        "In crowds, hold hands or use a bright hat/flag as a marker."
      ]
    },
    // ============================================================
    // 6. No transport back
    // ============================================================
    {
      id: "no_transport",
      title: "🚌 No transport back",
      description: "Night, strike, breakdown — you need to get to your hotel or airport.",
      conditions: { situation: ["no_transport"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30 min - 3 hours",
      yield_estimate: "Getting home",
      tags: ["no_transport", "transport"],
      steps: [
        "Check alternatives: night buses, trains, taxis, car-sharing.",
        "Use apps: Uber, Bolt, Grab work 24/7 in most cities.",
        "If taxi is expensive — find other travelers and split the ride.",
        "If public transport isn't working — check the local transport authority's website.",
        "As a last resort — walk. Use Google Maps with walking route.",
        "If stuck at the airport due to cancellation — the airline must provide a hotel.",
        "Find a 24-hour cafe and wait until morning."
      ],
      warnings: [
        "Don't take unofficial taxis at night — risk of robbery.",
        "When walking at night, keep your phone charged and share your route with someone.",
        "In some countries, public transport doesn't run on certain days."
      ]
    },
    // ============================================================
    // 7. Stranded in remote area
    // ============================================================
    {
      id: "stranded_remote",
      title: "🏔️ Stranded in a remote area",
      description: "Mountains, desert, island — a serious situation requiring immediate action.",
      conditions: { situation: ["stranded"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Survival and rescue",
      tags: ["stranded", "survival", "emergency"],
      steps: [
        "STAY IN PLACE if you don't know exactly where to go.",
        "Call emergency services: 112 or local rescue number.",
        "If no signal — go to higher ground and try to catch a signal.",
        "Use What3Words app for exact location.",
        "Send signals: whistle (3 short — international distress signal), mirror, flashlight, fire (if safe).",
        "Find shelter from bad weather. Conserve energy and water.",
        "If in a group — don't split up.",
        "Before traveling to remote areas, ALWAYS tell someone your route and expected return time."
      ],
      warnings: [
        "Hypothermia kills faster than hunger — stay warm and dry.",
        "Don't drink water from unknown sources without boiling or tablets.",
        "In the desert, move only at night, stay in shade during the day."
      ]
    }
  ]
});