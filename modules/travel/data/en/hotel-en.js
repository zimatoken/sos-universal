const hotelDataEn = {
  category: "hotel",
  title: "🏨 Accommodation",
  description: "Emergency: Accommodation",
  questions: [
    {
      id: "problem",
      type: "single",
      text: "What is the accommodation problem?",
      options: [
        { id: "no_booking", label: "Hotel didn't confirm booking / no room", tags: ["no_booking"] },
        { id: "bad_quality", label: "Room doesn't match description / dirty / broken", tags: ["bad_quality"] },
        { id: "overcharged", label: "Asked for extra payment / price higher than booked", tags: ["overcharged"] },
        { id: "eviction", label: "Evicted before check-out / without explanation", tags: ["eviction"] },
        { id: "scam", label: "Scam (fake listing, apartment doesn't exist)", tags: ["scam"] },
        { id: "unsafe", label: "Unsafe (break-in, theft at hotel, fire hazard)", tags: ["unsafe"] }
      ]
    },
    {
      id: "booking_source",
      type: "single",
      text: "Where did you book accommodation?",
      options: [
        { id: "booking_com", label: "Booking.com / Agoda / Expedia", tags: ["booking_com"] },
        { id: "airbnb", label: "Airbnb / Vrbo / apartment aggregators", tags: ["airbnb"] },
        { id: "hotel_direct", label: "Directly at hotel / hotel website", tags: ["hotel_direct"] },
        { id: "tour_operator", label: "Through tour operator / agency", tags: ["tour_operator"] },
        { id: "private", label: "Through private listing / Telegram / Avito", tags: ["private"] }
      ]
    },
    {
      id: "payment",
      type: "single",
      text: "Has it been paid already?",
      options: [
        { id: "prepaid", label: "Yes, fully paid in advance", tags: ["prepaid"] },
        { id: "deposit", label: "Deposit / prepayment made", tags: ["deposit"] },
        { id: "not_paid", label: "No, pay on arrival", tags: ["not_paid"] },
        { id: "charged_wrong", label: "Wrong amount charged to card", tags: ["charged_wrong"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "What time is it now?",
      options: [
        { id: "day", label: "Day / business hours", tags: ["day"] },
        { id: "night", label: "Night / late evening", tags: ["night"] },
        { id: "holiday", label: "Holiday / weekend", tags: ["holiday"] }
      ]
    }
  ],
  solutions: [
    {
      id: "no_room_booking_com",
      title: "No room with Booking.com reservation",
      conditions: { "problem": ["no_booking"], "booking_source": ["booking_com"] },
      tags: ["problem", "booking_source", "hotel"],
      description: "Booking.com guarantees accommodation with a confirmed reservation. There is an action algorithm.",
      steps: [
        "At the reception desk show your booking confirmation (email or in the app). Demand a room or equivalent.",
        "If the hotel refuses — call Booking.com support (number in app or on website). They must resolve the issue within 30 minutes.",
        "Booking.com is obligated to: find you alternative accommodation of the same or higher class, pay for transfer there, compensate price difference.",
        "Keep ALL receipts: taxi to new hotel, meals, price difference. Booking.com will reimburse them.",
        "If forced to find accommodation yourself — book within reasonable limits and keep receipts.",
        "After the situation is resolved — leave an honest review about the hotel — it helps other travelers.",
        "If Booking.com doesn't help within an hour — threaten a complaint to the European Commission for Consumer Rights."
      ],
      warnings: [
        "Never agree to 'compensation' from the hotel directly — they may offer less than entitled.",
        "In peak season alternative accommodation may be more expensive — Booking.com must still cover the difference.",
        "Keep correspondence with the hotel and Booking.com — these are evidence."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Solution found"
    },
    {
      id: "airbnb_scam",
      title: "Rental scam (Airbnb / private listing)",
      conditions: { "problem": ["scam"] },
      tags: ["problem", "hotel"],
      description: "Fake listing, apartment doesn't exist, or host disappeared with money.",
      steps: [
        "If booked through Airbnb — immediately call Airbnb support (24/7). They are obligated to find an alternative or refund.",
        "If transferred money to a private individual — gather evidence: correspondence, transfer details, listing photos, scammer contacts.",
        "File a police report. In most countries this is online or at the nearest station.",
        "If paid by card — immediately call the bank and dispute the transaction (chargeback). Explain that service was not provided.",
        "Find alternative accommodation through verified services. Don't agree to 'help' from strangers on the street.",
        "Warn the platform (Avito, Cian, Telegram channel) about the scammer — they may block the listing.",
        "On social media warn other travelers about the scammer (forums, VK/Telegram groups)."
      ],
      warnings: [
        "NEVER transfer prepayment to an individual's card without a contract and verification.",
        "Airbnb protects payments within the platform. If the host asks to transfer directly — it's 100% a scammer.",
        "Check reviews: if there are few or all too good — be suspicious."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "hours",
      yield_estimate: "Solution found"
    },
    {
      id: "bad_quality_hotel",
      title: "Room doesn't match the description",
      conditions: { "problem": ["bad_quality"] },
      tags: ["problem", "hotel"],
      description: "Dirt, malfunctions, noise, missing amenities — you have the right to a solution or refund.",
      steps: [
        "Document the problem: take photos and videos. Record date and time.",
        "Immediately contact the reception. Show photos and demand: a) room change, b) problem fix, c) discount.",
        "If the problem is serious (dirt, insects, broken bathroom) — demand immediate room change or full refund.",
        "If booked through an aggregator — call Booking.com / Airbnb / Expedia support. They can force the hotel to resolve the issue.",
        "If hotel refuses — find other accommodation and demand full refund + compensation.",
        "Leave an objective review with photos. It affects the hotel's rating and helps others.",
        "For serious violations (fire safety, sanitation) — report to local regulatory authorities."
      ],
      warnings: [
        "Don't accept 'apologies' in the form of a bottle of wine for serious problems — you paid for quality service.",
        "In some countries hotel 'star rating' is determined by local standards — 4* in one country ≠ 4* in another.",
        "Check recent reviews (last 3 months) — the hotel may have deteriorated."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "30-60 min",
      yield_estimate: "Solution found"
    },
    {
      id: "overcharged_hotel",
      title: "Asked for extra payment / inflated price",
      conditions: { "problem": ["overcharged"] },
      tags: ["problem", "hotel"],
      description: "The hotel demands extra payment beyond the booked price or charged more to your card.",
      steps: [
        "Show your booking confirmation with the stated price. Clarify what the extra charge is for (taxes, resort fee, breakfast?).",
        "If the booking said 'including all taxes' — refuse to pay extra. This is a contract violation.",
        "If more was charged to your card — show the statement. Demand immediate refund of the difference.",
        "If the hotel insists — contact the booking platform (Booking.com, Airbnb). They must resolve the dispute.",
        "If refused — dispute the transaction with your bank (chargeback). Keep correspondence and booking confirmation.",
        "Some hotels require a deposit at check-in — clarify if it's refunded at check-out and within what timeframe.",
        "If charged for 'minibar' you didn't use — demand camera check or proof."
      ],
      warnings: [
        "'Resort fee' in the USA is often not included in the booking price — it's legal but must be stated.",
        "Never agree to cash-in-hand payment without a receipt — it's tax evasion and you have no proof."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "15-60 min",
      yield_estimate: "Solution found"
    },
    {
      id: "eviction",
      title: "Evicted from hotel / apartment",
      conditions: { "problem": ["eviction"] },
      tags: ["problem", "hotel"],
      description: "You're being evicted before the agreed date or without explanation. This is a contract violation.",
      steps: [
        "Demand written explanation for eviction. Record the conversation with the administrator on video (one-party recording is legal in most countries).",
        "Show your booking confirmation with dates. Remind them this is a contract violation.",
        "If reason is 'overbooking' — demand full refund + compensation + alternative accommodation.",
        "If booked through an aggregator — immediately call support. They are obligated to resolve the problem.",
        "If evicted by force or threats — call the police. Even as a tourist you have tenant rights.",
        "Find alternative accommodation. Keep receipts for price difference, taxi, meals.",
        "After the incident — file a compensation claim through the booking platform and/or in court (for large amounts)."
      ],
      warnings: [
        "In some countries hotels can evict for rule violations (smoking, noise, vandalism) — make sure you didn't violate any.",
        "For private apartment rentals eviction may be more legally complex — but still demand documents."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Solution found"
    },
    {
      id: "unsafe_hotel",
      title: "Unsafe at hotel / apartment",
      conditions: { "problem": ["unsafe"] },
      tags: ["problem", "hotel"],
      description: "Theft, break-in, fire hazard, suspicious persons — safety comes first.",
      steps: [
        "For theft in the room — DON'T touch anything. Call police and management. Document the 'crime scene' with photos/video.",
        "Check the safe — if items from the safe were stolen, the hotel bears maximum responsibility (in most countries).",
        "Demand to review CCTV footage (corridors, lobby, entrances).",
        "File a police report. Get a copy — needed for insurance and hotel claim.",
        "Contact your insurance company — travel insurance often covers hotel theft.",
        "Demand written explanation and compensation from the hotel. In most countries hotels are insured for such cases.",
        "If hotel refuses — file a claim through Booking.com / Airbnb or consult a lawyer.",
        "Change room or hotel. Check if apartment keys were copied (for rentals)."
      ],
      warnings: [
        "Always use the in-room safe for valuables. Better yet — the front desk safe.",
        "Check door and window locks upon check-in.",
        "Don't open the door to strangers, even if they claim to be 'hotel staff'."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Solution found"
    }
  ]
}

// ===== EXPORT =====
window.hotelDataEn = hotelDataEn;
