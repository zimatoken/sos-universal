const TRAVEL_DATA = TRAVEL_DATA || {};
TRAVEL_DATA.theft = {
  category: "theft",
  icon: "🦹",
  questions: [
    {
      id: "type",
      question: "What happened?",
      options: [
        { value: "pickpocket", label: "Pickpocketing (bag, wallet, phone)" },
        { value: "room_theft", label: "Theft from room / apartment" },
        { value: "scam", label: "I was scammed (fake taxi, currency switch, 'help')" },
        { value: "robbery", label: "Robbery with threat / force" },
        { value: "car_break", label: "Car / rental car break-in" },
        { value: "online", label: "Online fraud (phishing, fake websites)" }
      ]
    },
    {
      id: "location",
      question: "Where did it happen?",
      options: [
        { value: "tourist_area", label: "In tourist area (beach, attraction, market)" },
        { value: "transport", label: "In transport (subway, bus, taxi)" },
        { value: "hotel", label: "At hotel / rental accommodation" },
        { value: "street", label: "On the street / alley" },
        { value: "online_place", label: "Online (before or during trip)" }
      ]
    },
    {
      id: "items",
      question: "What was stolen / lost?",
      options: [
        { value: "phone", label: "Phone" },
        { value: "wallet", label: "Wallet / money / cards" },
        { value: "passport", label: "Passport / documents" },
        { value: "tech", label: "Tech (laptop, camera, tablet)" },
        { value: "jewelry", label: "Jewelry / watch" },
        { value: "multiple", label: "Multiple items at once" }
      ]
    },
    {
      id: "insurance",
      question: "Do you have property or travel insurance?",
      options: [
        { value: "yes", label: "Yes, with property coverage" },
        { value: "no", label: "No" },
        { value: "card_insurance", label: "Don't know, but paid with a card" }
      ]
    }
  ],
  results: [
    {
      id: "pickpocket",
      title: "Pickpocketing",
      icon: "👝",
      match: { type: "pickpocket" },
      description: "The most common type of theft against tourists. Quick response can help minimize damage.",
      steps: [
        "Immediately check what exactly was stolen. If phone — try tracking it via Find My iPhone / Google Find My Device from another device.",
        "If cards stolen — block them via bank app or by phone IMMEDIATELY.",
        "Contact the nearest police station. File a theft report. Request a copy — needed for insurance and bank.",
        "If phone stolen — remotely lock and erase data (via Find My Device). Change passwords for all accounts.",
        "Contact your mobile operator — block the SIM card so fraudulent calls can't be made.",
        "If passport stolen — see the 'Lost Documents' section. Apply for a temporary document at the consulate.",
        "Check your insurance — travel insurance often covers property theft up to a certain amount."
      ],
      warnings: [
        "Pickpockets operate where tourists gather: subways, markets, attractions, beaches.",
        "Never keep your wallet in your back pocket. Use inner pockets or a money belt under clothing.",
        "Don't get distracted by 'helpers' pointing at dirt on your clothes — classic diversion tactic."
      ],
      meta: { severity: "medium", time: "1-3 hours" }
    },
    {
      id: "robbery",
      title: "Robbery with threat / force",
      icon: "🔫",
      match: { type: "robbery" },
      description: "Your life is more important than property. Stay calm and cooperate.",
      steps: [
        "DO NOT resist. Give everything they demand. Your life is worth more than a phone and money.",
        "Remember as many details as possible: height, weight, clothing, mask, accent, direction of departure, vehicle.",
        "As soon as robbers leave — immediately call police (112 or local number).",
        "DO NOT chase robbers yourself. It's dangerous and can escalate the situation.",
        "Find a safe place (hotel, restaurant, police station). Ask staff for help.",
        "File a police report. Request a copy for insurance and consulate.",
        "Contact the Russian consulate — they provide support, especially if physically injured or documents stolen.",
        "See a doctor even if you think you're uninjured — shock can mask trauma."
      ],
      warnings: [
        "In some countries (South Africa, Brazil, Mexico, parts of USA) tourist robberies are more common — research dangerous areas in advance.",
        "Don't wear expensive jewelry and watches in 'dangerous' areas.",
        "Keep a 'mugger's bill' (20–50 USD) in an easily accessible place — hand it over first."
      ],
      meta: { severity: "critical", time: "immediately" }
    },
    {
      id: "scam_tourist",
      title: "Tourist scam",
      icon: "🎭",
      match: { type: "scam" },
      description: "Tourist scammers use dozens of schemes. The main thing is not to panic and document everything.",
      steps: [
        "Identify the scam type: fake taxi, currency switch, 'help' with luggage, fake tickets, 'free' bracelets, fake guides.",
        "If money lost — block cards (if in wallet) and file a police report.",
        "If scammed with tickets / tours — contact the purchase platform (GetYourGuide, Viator, Klook). They often refund for fraud.",
        "If 'taxi' overcharged — record the license plate, take photo of driver's license (if safe). File complaint with taxi service or police.",
        "If forced to buy goods or services — DON'T pay. In the EU the right to refuse imposed services is protected by law.",
        "Warn other travelers: leave a review on TripAdvisor, Google Maps, Telegram groups.",
        "For large amounts contact the consulate — they can provide local lawyer contacts."
      ],
      warnings: [
        "Never exchange money with 'private' street changers — bills are often counterfeit.",
        "'Free' bracelets, roses, straw figures — classic scheme: given 'for free' then money demanded.",
        "Fake taxis often stand near airport exits without queue — use only official counters or apps (Uber, Bolt, Grab)."
      ],
      meta: { severity: "medium", time: "1-2 hours" }
    },
    {
      id: "room_theft",
      title: "Theft from room / apartment",
      icon: "🏠",
      match: { type: "room_theft" },
      description: "Theft from a hotel room or rental apartment. The hotel often bears responsibility.",
      steps: [
        "DON'T touch anything in the room. Call hotel management and police. Document the 'scene' with photos/video.",
        "Check the safe — if items from the safe were stolen, hotel responsibility is maximum.",
        "Demand to review CCTV footage (corridors, lobby, entrances).",
        "File a police report. Get a copy — needed for insurance and hotel claim.",
        "Contact your insurance company. Travel insurance often covers room theft.",
        "Demand written explanation and compensation from the hotel. In most countries hotels are insured for such cases.",
        "If hotel refuses — file a claim through Booking.com / Airbnb or consult a lawyer.",
        "Change room or hotel. Check if apartment keys were copied (for rentals)."
      ],
      warnings: [
        "Always use the in-room safe. Valuables, documents, money — there.",
        "For apartment rentals change the code lock (if possible) or check how many keys exist.",
        "Don't leave money and tech in plain sight, even if 'nothing will happen'."
      ],
      meta: { severity: "high", time: "2-4 hours" }
    },
    {
      id: "car_break",
      title: "Rental car break-in",
      icon: "🚗",
      match: { type: "car_break" },
      description: "Car break-in is stressful, but with proper actions damage is minimal.",
      steps: [
        "DON'T touch the car. Don't enter — it may spoil evidence for police.",
        "Photograph damage from all sides. Document the surroundings (where parked, any cameras).",
        "Call police. File a break-in report. Get a copy.",
        "Contact the rental company. Report the incident. Clarify what the rental insurance covers.",
        "Check rental insurance: CDW (Collision Damage Waiver) usually covers damage but not personal items inside.",
        "If personal items stolen — contact your insurance company (travel insurance may cover).",
        "If documents stolen from the car — see the 'Lost Documents' section.",
        "When returning the car — document its condition on video in the presence of rental staff."
      ],
      warnings: [
        "Never leave valuables in the car, even in the trunk. Thieves know how to open a trunk in 30 seconds.",
        "Park in guarded lots even if more expensive.",
        "Full coverage from the rental company usually covers EVERYTHING but is expensive."
      ],
      meta: { severity: "high", time: "2-4 hours" }
    },
    {
      id: "online_scam",
      title: "Online fraud during travel",
      icon: "💻",
      match: { type: "online" },
      description: "Phishing, fake booking sites, account hacks — increasingly common among travelers.",
      steps: [
        "Immediately change passwords for all accounts: email, bank, bookings, social media. Use strong unique passwords.",
        "Enable two-factor authentication (2FA) everywhere possible.",
        "If money withdrawn from card — call the bank, block the card, dispute transactions.",
        "If booked on a fake site — check if money was debited. Dispute the transaction with your bank.",
        "Check website authenticity: correct URL (booking.com not booking-com.net), HTTPS, reviews.",
        "Don't use public Wi-Fi for banking or email without VPN. Public networks are often unsecured.",
        "If account hacked — warn friends and relatives not to transfer money to scammers.",
        "Check your device for viruses — a keylogger or trojan may be installed."
      ],
      warnings: [
        "Never click links in SMS and email 'from bank' or 'from Booking' — always visit the site manually.",
        "Free Wi-Fi in cafes and airports is an easy target for hackers. Use VPN.",
        "'Too good to be true' accommodation prices — 90% scam."
      ],
      meta: { severity: "medium", time: "1-2 hours" }
    }
  ]
};

// ===== ЭКСПОРТ =====
window.theftData = theftData;