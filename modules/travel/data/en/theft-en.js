// === MODULE: TRAVEL — THEFT ===
const theftDataEn = {
  category: "theft",
  title: "🦹 Theft and Fraud",
  description: "Pickpocketing, robbery, scams, car break-in, room theft, online fraud — what to do",

  questions: [
    {
      id: "type",
      type: "single",
      text: "What happened?",
      options: [
        { id: "pickpocket", label: "Pickpocketing (bag, wallet, phone)", tags: ["pickpocket"] },
        { id: "room_theft", label: "Theft from room / apartment", tags: ["room_theft"] },
        { id: "scam", label: "Scammed (fake taxis, money exchange, 'help')", tags: ["scam"] },
        { id: "robbery", label: "Robbery with threat / force", tags: ["robbery"] },
        { id: "car_break", label: "Car break-in / rental car", tags: ["car_break"] },
        { id: "online", label: "Online fraud (phishing, fake websites)", tags: ["online"] }
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
        { id: "yes", label: "Yes, I have insurance with property coverage", tags: ["insured"] },
        { id: "no", label: "No", tags: ["uninsured"] },
        { id: "card_insurance", label: "Not sure, but I paid with card", tags: ["card_insurance"] }
      ]
    }
  ],

  solutions: [
    {
      id: "pickpocket",
      title: "👝 Pickpocketing",
      description: "The most common type of theft against tourists. Quick response helps minimize damage.",
      conditions: { type: ["pickpocket"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Minimize damage",
      tags: ["pickpocket", "theft", "tourist"],
      steps: [
        "Immediately check what was stolen. If phone — try to track it via Find My iPhone / Google Find My Device.",
        "If cards were stolen — block them via banking app or call the bank IMMEDIATELY.",
        "File a police report (theft report). Get a copy for insurance.",
        "If phone was stolen — remotely lock and wipe data. Change all passwords.",
        "Contact your mobile operator — block the SIM card.",
        "If passport was stolen — see 'Lost Documents' section.",
        "Check your insurance — travel insurance often covers theft."
      ],
      warnings: [
        "Pickpockets work in tourist crowds: metro, markets, landmarks, beaches.",
        "Never keep wallet in back pocket. Use inner pockets or a money belt.",
        "Don't get distracted by 'helpers' — classic distraction trick."
      ]
    },
    {
      id: "robbery",
      title: "🔫 Robbery with threat / force",
      description: "Your life is more important than property. Stay calm and cooperate.",
      conditions: { type: ["robbery"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["robbery", "violence", "emergency"],
      steps: [
        "DO NOT resist. Give them what they want. Your life is more valuable.",
        "Note details: height, weight, clothing, accent, direction, vehicle.",
        "Once robbers leave — immediately call police (112 or local number).",
        "DO NOT chase the robbers yourself.",
        "Find a safe place (hotel, restaurant, police station).",
        "File a police report. Get a copy for insurance.",
        "Contact the Russian consulate.",
        "See a doctor — shock can hide injuries."
      ],
      warnings: [
        "In some countries, tourist robberies are more common — research dangerous areas.",
        "Don't wear expensive jewelry in 'dangerous' areas.",
        "Have a 'robber' bill (20–50 USD) in an accessible place."
      ]
    },
    {
      id: "scam_tourist",
      title: "🎭 Tourist scam",
      description: "Tourist scammers use dozens of schemes. Stay calm and document everything.",
      conditions: { type: ["scam"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 hours",
      yield_estimate: "Protection",
      tags: ["scam", "fraud", "tourist"],
      steps: [
        "Identify the scam type: fake taxi, money exchange, 'help', fake tickets.",
        "If money was lost — block cards and file a police report.",
        "If scammed with tickets — contact the booking platform.",
        "If taxi overcharged — note license plate, file a complaint.",
        "If pushed into a service — DO NOT pay.",
        "Warn other tourists: leave a review on TripAdvisor, Google Maps.",
        "For serious amounts — contact the consulate."
      ],
      warnings: [
        "Never exchange money with street changers.",
        "'Free' bracelets are a classic scheme.",
        "Fake taxis — use only official stands or apps (Uber, Bolt, Grab)."
      ]
    },
    {
      id: "room_theft",
      title: "🏠 Theft from room / apartment",
      description: "Hotels are often liable for theft from rooms.",
      conditions: { type: ["room_theft"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2-4 hours",
      yield_estimate: "Compensation",
      tags: ["room", "theft", "hotel"],
      steps: [
        "DON'T touch anything. Call management and police.",
        "Check the safe — if items were stolen from safe, hotel liability is highest.",
        "Request CCTV footage review.",
        "File a police report. Get a copy.",
        "Contact your insurance company.",
        "Demand written explanation and compensation from the hotel.",
        "If hotel refuses — file a claim via Booking.com / Airbnb.",
        "Change rooms or hotels."
      ],
      warnings: [
        "Always use the room safe for valuables.",
        "When renting an apartment — check how many keys exist.",
        "Don't leave money and tech in plain sight."
      ]
    },
    {
      id: "car_break",
      title: "🚗 Rental car break-in",
      description: "Car break-in is stressful, but proper actions minimize damage.",
      conditions: { type: ["car_break"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2-4 hours",
      yield_estimate: "Compensation",
      tags: ["car", "break-in", "rental"],
      steps: [
        "DON'T touch the car. Photograph damage.",
        "Call police. File a break-in report.",
        "Contact the rental company. Report the incident.",
        "Check rental insurance coverage.",
        "If personal items stolen — contact your travel insurance.",
        "If documents stolen — see 'Lost Documents' section.",
        "When returning the car — video the condition."
      ],
      warnings: [
        "Never leave valuables in the car.",
        "Park in guarded parking lots.",
        "Full Coverage rental insurance covers everything."
      ]
    },
    {
      id: "online_scam",
      title: "💻 Online fraud during travel",
      description: "Phishing, fake booking sites, account hacking — common for travelers.",
      conditions: { type: ["online"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 hours",
      yield_estimate: "Protection",
      tags: ["online", "phishing", "fraud"],
      steps: [
        "Change all passwords: email, bank, booking, social media.",
        "Enable two-factor authentication (2FA) everywhere.",
        "If money was taken from card — call bank, block card, dispute transactions.",
        "If booked on a fake site — dispute the transaction with your bank.",
        "Check site authenticity: correct URL, HTTPS, reviews.",
        "Don't use public Wi-Fi for banking or email without VPN.",
        "If account was hacked — warn friends and family."
      ],
      warnings: [
        "Never click links from SMS or emails 'from the bank'.",
        "Free Wi-Fi is an easy target for hackers. Use VPN.",
        "'Too good' prices on accommodation — 90% scam."
      ]
    }
  ]
};

// ===== EXPORT =====
window.theftDataEn = theftDataEn;
