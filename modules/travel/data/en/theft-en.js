// modules/travel/data/en/theft-en.js
// === MODULE: TRAVEL — THEFT AND FRAUD ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "travel",
    category: "theft",
    version: "1.0.0",
    lang: "en",
    title: "🦹 Theft and Fraud",
    description: "Pickpocketing, robbery, scams, car break-ins — what to do",
    icon: "🦹",
    color: "#0d9488"
  },

  questions: [
    {
      id: "type",
      type: "single",
      text: "What happened?",
      options: [
        { id: "pickpocket", label: "👛 Pickpocketing (bag, wallet, phone stolen)", tags: ["pickpocket"] },
        { id: "room_theft", label: "🚪 Theft from hotel room / apartment", tags: ["room_theft"] },
        { id: "scam", label: "🎭 I was scammed (fake taxis, money exchange, 'help')", tags: ["scam"] },
        { id: "robbery", label: "🔫 Robbery with threats / force", tags: ["robbery"] },
        { id: "car_break", label: "🚗 Car break-in / rental car broken into", tags: ["car_break"] },
        { id: "online", label: "💻 Online fraud (phishing, fake websites)", tags: ["online"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where did it happen?",
      conditions: { type: ["pickpocket", "room_theft", "scam", "robbery", "car_break", "online"] },
      options: [
        { id: "tourist_area", label: "🏖️ Tourist area (beach, landmark, market)", tags: ["tourist_area"] },
        { id: "transport", label: "🚇 On transport (metro, bus, taxi)", tags: ["transport"] },
        { id: "hotel", label: "🏨 At hotel / rental accommodation", tags: ["hotel"] },
        { id: "street", label: "🚶 On the street / alley", tags: ["street"] },
        { id: "online_place", label: "💻 Online (before or during the trip)", tags: ["online_place"] }
      ]
    },
    {
      id: "items",
      type: "single",
      text: "What was stolen / lost?",
      conditions: { type: ["pickpocket", "room_theft", "scam", "robbery", "car_break", "online"] },
      options: [
        { id: "phone", label: "📱 Phone", tags: ["phone"] },
        { id: "wallet", label: "👛 Wallet / money / cards", tags: ["wallet"] },
        { id: "passport", label: "🛂 Passport / documents", tags: ["passport"] },
        { id: "tech", label: "💻 Tech (laptop, camera, tablet)", tags: ["tech"] },
        { id: "jewelry", label: "💎 Jewelry / watch", tags: ["jewelry"] },
        { id: "multiple", label: "📦 Multiple items", tags: ["multiple"] }
      ]
    },
    {
      id: "insurance",
      type: "single",
      text: "Do you have property or travel insurance?",
      conditions: { type: ["pickpocket", "room_theft", "scam", "robbery", "car_break", "online"] },
      options: [
        { id: "yes", label: "✅ Yes, with property coverage", tags: ["yes"] },
        { id: "no", label: "❌ No", tags: ["no"] },
        { id: "card_insurance", label: "💳 Not sure, but paid with card", tags: ["card_insurance"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. Pickpocketing
    // ============================================================
    {
      id: "pickpocket",
      title: "👛 Pickpocketing",
      description: "The most common type of theft against tourists. Quick response can minimize the damage.",
      conditions: { type: ["pickpocket"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1-3 hours",
      yield_estimate: "Damage minimized",
      tags: ["pickpocket", "theft"],
      steps: [
        "Immediately check what was stolen. If it's a phone — try tracking it via Find My iPhone / Google Find My Device.",
        "If cards were stolen — block them via the banking app or by phone IMMEDIATELY.",
        "Go to the nearest police station. File a theft report. Get a copy — needed for insurance and the bank.",
        "If the phone was stolen — remotely lock it and erase data. Change passwords for all accounts.",
        "Contact your mobile operator — block the SIM card.",
        "If your passport was stolen — see the 'Lost Documents' section.",
        "Check your insurance — travel insurance often covers theft up to a certain amount."
      ],
      warnings: [
        "Pickpockets operate in tourist crowds: metro, markets, landmarks, beaches.",
        "Never keep your wallet in your back pocket. Use inner pockets or a waist pouch.",
        "Don't be distracted by 'helpers' pointing at dirt on your clothes — a classic distraction technique."
      ]
    },
    // ============================================================
    // 2. Robbery with threat / force
    // ============================================================
    {
      id: "robbery",
      title: "🔫 Robbery with threats / force",
      description: "Your life is more important than property. Act calmly and cooperate.",
      conditions: { type: ["robbery"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["robbery", "emergency"],
      steps: [
        "DO NOT resist. Give them everything they ask for. Your life is worth more than a phone and cash.",
        "Remember as many details as possible: height, build, clothing, mask, accent, direction of escape.",
        "Once the robbers leave — immediately call the police (112 or local number).",
        "DO NOT chase the robbers yourself. It's dangerous.",
        "Find a safe place (hotel, restaurant, police station).",
        "File a police report. Get a copy for insurance and the consulate.",
        "Contact the Russian consulate — they will provide support.",
        "See a doctor, even if you feel uninjured — shock can hide injuries."
      ],
      warnings: [
        "In some countries, tourist robberies are more common — research dangerous areas in advance.",
        "Don't wear expensive jewelry and watches in 'dangerous' areas.",
        "Have a 'robber's bill' (20–50 USD) in an easily accessible place — give it first."
      ]
    },
    // ============================================================
    // 3. Tourist scam
    // ============================================================
    {
      id: "scam_tourist",
      title: "🎭 Tourist scam",
      description: "Tourist scammers use dozens of schemes. Don't panic and document everything.",
      conditions: { type: ["scam"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1-2 hours",
      yield_estimate: "Damage minimized",
      tags: ["scam", "fraud"],
      steps: [
        "Identify the type of scam: fake taxi, counterfeit bills, 'help' with baggage, fake tickets.",
        "If money was lost — block cards and file a police report.",
        "If you were scammed on tickets — contact the platform (GetYourGuide, Viator, Klook).",
        "If a 'taxi driver' overcharged — note the car number. File a complaint with the taxi service or police.",
        "If a service or product was forced on you — DO NOT pay.",
        "Warn other tourists: leave a review on TripAdvisor, Google Maps.",
        "For significant amounts — contact the consulate."
      ],
      warnings: [
        "Never exchange money with 'private' changers on the street — bills are often counterfeit.",
        "'Free' bracelets, roses, straw figurines — classic scheme: given 'free', then demand payment.",
        "Fake taxis often wait at airport exits — use only official stands or apps (Uber, Bolt, Grab)."
      ]
    },
    // ============================================================
    // 4. Theft from hotel room / apartment
    // ============================================================
    {
      id: "room_theft",
      title: "🚪 Theft from hotel room / apartment",
      description: "Theft from a hotel room or rental apartment. Hotels often bear responsibility.",
      conditions: { type: ["room_theft"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2-4 hours",
      yield_estimate: "Compensation",
      tags: ["room_theft", "hotel"],
      steps: [
        "DON'T touch anything in the room. Call hotel management and the police.",
        "Check the safe — if items were stolen from the safe, the hotel's liability is maximum.",
        "Request CCTV footage (hallways, lobby, entrances).",
        "File a police report. Get a copy for insurance.",
        "Contact your insurance company. Travel insurance often covers theft from rooms.",
        "Demand a written explanation and compensation from the hotel.",
        "If the hotel refuses — file a claim via Booking.com / Airbnb.",
        "Change rooms or hotels."
      ],
      warnings: [
        "Always use the in-room safe. Valuables, documents, money — keep them there.",
        "When renting an apartment, change the code lock or check how many keys exist.",
        "Don't leave money and tech in plain sight."
      ]
    },
    // ============================================================
    // 5. Rental car break-in
    // ============================================================
    {
      id: "car_break",
      title: "🚗 Rental car break-in",
      description: "Car break-in is stressful, but with proper actions, the damage is minimal.",
      conditions: { type: ["car_break"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2-4 hours",
      yield_estimate: "Damage minimized",
      tags: ["car_break", "rental"],
      steps: [
        "DON'T touch the car. Don't enter — it may destroy evidence.",
        "Take photos of the damage from all angles. Document the surroundings.",
        "Call the police. File a break-in report. Get a copy.",
        "Contact the rental company. Report the incident.",
        "Check rental insurance: CDW usually covers damage.",
        "If personal items were stolen — contact your insurance company.",
        "If documents were stolen — see the 'Lost Documents' section.",
        "When returning the car — video-record its condition in the presence of a rental employee."
      ],
      warnings: [
        "Never leave valuables in the car, even in the trunk.",
        "Park in guarded lots, even if they're more expensive.",
        "Full Coverage rental insurance usually covers EVERYTHING."
      ]
    },
    // ============================================================
    // 6. Online fraud
    // ============================================================
    {
      id: "online_scam",
      title: "💻 Online fraud during travel",
      description: "Phishing, fake booking sites, account hacking — increasingly common for tourists.",
      conditions: { type: ["online"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1-2 hours",
      yield_estimate: "Accounts secured",
      tags: ["online", "scam", "fraud"],
      steps: [
        "Immediately change passwords for all accounts: email, bank, bookings, social media.",
        "Enable two-factor authentication (2FA) wherever possible.",
        "If money was taken from your card — call the bank, block the card, dispute transactions.",
        "If you booked on a fake site — check if funds were deducted. Dispute the transaction.",
        "Verify site authenticity: correct URL, HTTPS, reviews.",
        "Don't use public Wi-Fi for banking or email without VPN.",
        "If an account was hacked — warn friends and relatives not to send money.",
        "Scan your device for viruses — a keylogger or trojan may be installed."
      ],
      warnings: [
        "Never click links in SMS or emails 'from the bank' — always go to the site manually.",
        "Free Wi-Fi in cafes and airports is an easy target for hackers. Use VPN.",
        "'Too good' prices for accommodation — 90% scam."
      ]
    }
  ]
});