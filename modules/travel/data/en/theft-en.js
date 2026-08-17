const theftDataEn = {
  category: "theft",
  title: "🦹 Theft & Fraud",
  description: "Emergency: Theft & Fraud",
  questions: [
    {
      id: "type",
      type: "single",
      text: "What happened?",
      options: [
        { id: "pickpocket", label: "Pickpocketing (bag, wallet, phone)", tags: ["pickpocket"] },
        { id: "room_theft", label: "Theft from room / apartment", tags: ["room_theft"] },
        { id: "scam", label: "I was scammed (fake taxi, currency switch, 'help')", tags: ["scam"] },
        { id: "robbery", label: "Robbery with threat / force", tags: ["robbery"] },
        { id: "car_break", label: "Car / rental car break-in", tags: ["car_break"] },
        { id: "online", label: "Online fraud (phishing, fake websites)", tags: ["online"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where did it happen?",
      options: [
        { id: "tourist_area", label: "In tourist area (beach, attraction, market)", tags: ["tourist_area"] },
        { id: "transport", label: "In transport (subway, bus, taxi)", tags: ["transport"] },
        { id: "hotel", label: "At hotel / rental accommodation", tags: ["hotel"] },
        { id: "street", label: "On the street / alley", tags: ["street"] },
        { id: "online_place", label: "Online (before or during trip)", tags: ["online_place"] }
      ]
    },
    {
      id: "items",
      type: "single",
      text: "What was stolen / lost?",
      options: [
        { id: "phone", label: "Phone", tags: ["phone"] },
        { id: "wallet", label: "Wallet / money / cards", tags: ["wallet"] },
        { id: "passport", label: "Passport / documents", tags: ["passport"] },
        { id: "tech", label: "Tech (laptop, camera, tablet)", tags: ["tech"] },
        { id: "jewelry", label: "Jewelry / watch", tags: ["jewelry"] },
        { id: "multiple", label: "Multiple items at once", tags: ["multiple"] }
      ]
    },
    {
      id: "insurance",
      type: "single",
      text: "Do you have property or travel insurance?",
      options: [
        { id: "yes", label: "Yes, with property coverage", tags: ["yes"] },
        { id: "no", label: "No", tags: ["no"] },
        { id: "card_insurance", label: "Don't know, but paid with a card", tags: ["card_insurance"] }
      ]
    }
  ],
  solutions: [
    {
      id: "pickpocket",
      title: "Pickpocketing",
      conditions: { "type": ["pickpocket"] },
      tags: ["type", "theft"],
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
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-3 hours",
      yield_estimate: "Solution found"
    },
    {
      id: "robbery",
      title: "Robbery with threat / force",
      conditions: { "type": ["robbery"] },
      tags: ["type", "theft"],
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
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Solution found"
    },
    {
      id: "scam_tourist",
      title: "Tourist scam",
      conditions: { "type": ["scam"] },
      tags: ["type", "theft"],
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
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-2 hours",
      yield_estimate: "Solution found"
    },
    {
      id: "room_theft",
      title: "Theft from room / apartment",
      conditions: { "type": ["room_theft"] },
      tags: ["type", "theft"],
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
      priority: "fast",
      reliability: "high",
      time_estimate: "2-4 hours",
      yield_estimate: "Solution found"
    },
    {
      id: "car_break",
      title: "Rental car break-in",
      conditions: { "type": ["car_break"] },
      tags: ["type", "theft"],
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
      priority: "fast",
      reliability: "high",
      time_estimate: "2-4 hours",
      yield_estimate: "Solution found"
    },
    {
      id: "online_scam",
      title: "Online fraud during travel",
      conditions: { "type": ["online"] },
      tags: ["type", "theft"],
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
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-2 hours",
      yield_estimate: "Solution found"
    }
  ]
}

// ===== EXPORT =====
window.theftDataEn = theftDataEn;
