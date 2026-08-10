// === MODULE: TRAVEL — HOTELS (EN) ===
const hotelDataEn = {
  category: "hotel",
  title: "🏨 Hotels",
  description: "Booking issues, quality problems, overcharging, eviction, safety — action plan",

  questions: [
    {
      id: "problem",
      type: "single",
      text: "What's the problem with your accommodation?",
      options: [
        { id: "no_booking", label: "Hotel didn't confirm booking / no room", tags: ["no_booking"] },
        { id: "bad_quality", label: "Room doesn't match description / dirty / broken", tags: ["bad_quality"] },
        { id: "overcharged", label: "Demanding extra payment / price higher than booked", tags: ["overcharged"] },
        { id: "eviction", label: "Evicted early / without explanation", tags: ["eviction"] },
        { id: "scam", label: "Fraud (fake listing, apartment doesn't exist)", tags: ["scam"] },
        { id: "unsafe", label: "Unsafe (break-in, theft, fire hazard)", tags: ["unsafe"] }
      ]
    },
    {
      id: "booking_source",
      type: "single",
      text: "Where did you book?",
      options: [
        { id: "booking_com", label: "Booking.com / Agoda / Expedia", tags: ["booking_com"] },
        { id: "airbnb", label: "Airbnb / Vrbo / apartment aggregators", tags: ["airbnb"] },
        { id: "hotel_direct", label: "Directly with the hotel / hotel website", tags: ["hotel_direct"] },
        { id: "tour_operator", label: "Through a tour operator / agency", tags: ["tour_operator"] },
        { id: "private", label: "Private listing / Telegram / Avito", tags: ["private"] }
      ]
    },
    {
      id: "payment",
      type: "single",
      text: "Have you already paid?",
      options: [
        { id: "prepaid", label: "Yes, fully prepaid", tags: ["prepaid"] },
        { id: "deposit", label: "Paid a deposit", tags: ["deposit"] },
        { id: "not_paid", label: "No, payment upon arrival", tags: ["not_paid"] },
        { id: "charged_wrong", label: "Wrong amount charged to card", tags: ["charged_wrong"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "What time is it?",
      options: [
        { id: "day", label: "Daytime / business hours", tags: ["day"] },
        { id: "night", label: "Night / late evening", tags: ["night"] },
        { id: "holiday", label: "Holiday / weekend", tags: ["holiday"] }
      ]
    }
  ],

  solutions: [
    {
      id: "no_room_booking_com",
      title: "🚫 No room despite Booking.com confirmation",
      description: "Booking.com guarantees accommodation for confirmed bookings. There's a clear procedure.",
      conditions: { problem: ["no_booking"], booking_source: ["booking_com"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Alternative accommodation",
      tags: ["booking", "no_room", "guarantee"],
      steps: [
        "Show the booking confirmation at reception. Demand a room or equivalent alternative.",
        "If the hotel refuses — call Booking.com support (number in app or on website).",
        "Booking.com must: find you alternative accommodation of same or higher class, pay for transfer, compensate price difference.",
        "Keep ALL receipts: taxi to new hotel, meals, price difference.",
        "If you have to find accommodation yourself — book within reasonable limits and keep receipts.",
        "After resolution, leave an honest review of the hotel.",
        "If Booking.com doesn't help within an hour — threaten complaint to the European Consumer Commission."
      ],
      warnings: [
        "Never accept 'compensation' directly from the hotel — they may offer less than required.",
        "In peak season, alternative accommodation may be more expensive — Booking.com must cover the difference.",
        "Keep all correspondence with the hotel and Booking.com."
      ]
    },
    {
      id: "airbnb_scam",
      title: "🎭 Rental fraud (Airbnb / private listing)",
      description: "Fake listing, apartment doesn't exist, or host disappeared with the money.",
      conditions: { problem: ["scam"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "hours",
      yield_estimate: "Money back",
      tags: ["scam", "airbnb", "fraud"],
      steps: [
        "If booked through Airbnb — immediately call Airbnb support. They must find an alternative or refund.",
        "If you transferred money to a private individual — gather evidence: correspondence, transfer details, ad photos.",
        "File a police report. In most countries it's online or at the nearest station.",
        "If paid by card — immediately call your bank and dispute the transaction (chargeback).",
        "Find alternative accommodation through verified services.",
        "Warn the platform (Avito, Cian) about the scammer.",
        "Warn other travelers on social media."
      ],
      warnings: [
        "NEVER transfer prepayment to an individual's card without a contract and verification.",
        "Airbnb protects payments within the platform. If the host asks to transfer directly — it's 100% a scam.",
        "Check reviews: if there are few or all are too good — be cautious."
      ]
    },
    {
      id: "bad_quality_hotel",
      title: "🪳 Room doesn't match description",
      description: "Dirt, broken items, noise, missing amenities — you have the right to a solution.",
      conditions: { problem: ["bad_quality"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "30-60 min",
      yield_estimate: "Room change or refund",
      tags: ["quality", "complaint", "refund"],
      steps: [
        "Document the issue: take photos and videos. Record the date and time.",
        "Immediately go to reception. Show photos and demand a room change or discount.",
        "If the problem is serious — demand immediate room change or refund.",
        "If booked through an aggregator — call support.",
        "If the hotel refuses — find other accommodation and demand full refund.",
        "Leave an objective review with photos.",
        "For serious violations — report to local control authorities."
      ],
      warnings: [
        "Don't accept 'apologies' like a bottle of wine for serious problems.",
        "Hotel 'star ratings' are determined by local standards — 4* in one country ≠ 4* in another.",
        "Check recent reviews (last 3 months) — the hotel may have deteriorated."
      ]
    },
    {
      id: "overcharged_hotel",
      title: "💰 Demanding extra payment / overcharged",
      description: "Hotel demands extra payment beyond the booked price or charged more to your card.",
      conditions: { problem: ["overcharged"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-60 min",
      yield_estimate: "Refund of overpayment",
      tags: ["overcharge", "refund", "dispute"],
      steps: [
        "Show the booking confirmation with the stated price. Clarify what the extra charge is for.",
        "If the booking stated 'including all taxes' — refuse to pay extra.",
        "If more was charged to your card — show the statement. Demand immediate refund of the difference.",
        "If the hotel insists — contact the booking platform.",
        "If refused — dispute the transaction with your bank (chargeback).",
        "Clarify if the deposit is refundable upon checkout.",
        "If charged for minibar you didn't use — request verification or evidence."
      ],
      warnings: [
        "Resort fees in the US are often not included in the booking price — legal but must be stated.",
        "Never agree to pay 'cash in hand' without a receipt."
      ]
    },
    {
      id: "eviction",
      title: "👋 Eviction from hotel / apartment",
      description: "You're being evicted early or without explanation. This violates the agreement.",
      conditions: { problem: ["eviction"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Compensation and alternative",
      tags: ["eviction", "rights", "compensation"],
      steps: [
        "Demand written explanation of the eviction. Record the conversation on video.",
        "Show the booking confirmation with dates. Remind them this violates the agreement.",
        "If the reason is 'overbooked' — demand full refund + compensation + alternative accommodation.",
        "If booked through an aggregator — immediately call support.",
        "If evicted by force or threats — call the police.",
        "Find alternative accommodation. Keep receipts.",
        "File a claim for reimbursement through the platform."
      ],
      warnings: [
        "Hotels may evict for rule violations (smoking, noise, vandalism) — make sure you haven't violated any rules.",
        "With private rentals, eviction may be more complicated legally — still demand documents."
      ]
    },
    {
      id: "unsafe_hotel",
      title: "⚠️ Unsafe hotel / apartment",
      description: "Theft, break-in, fire hazard — safety comes first.",
      conditions: { problem: ["unsafe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["safety", "theft", "emergency"],
      steps: [
        "In case of theft — DON'T touch anything. Call police and management. Photograph the scene.",
        "If items were stolen from the safe — the hotel is liable.",
        "Demand CCTV footage review. The hotel must provide it to police.",
        "For fire hazards (no detectors, blocked exits) — immediately report to fire inspection and management.",
        "If you feel threatened by staff or guests — change rooms or hotels immediately.",
        "Contact your insurance — property or travel insurance may cover stolen items.",
        "For serious incidents — contact the Russian consulate."
      ],
      warnings: [
        "Always use the room safe for valuables. Better yet — the hotel reception safe.",
        "Check locks on doors and windows upon check-in.",
        "Don't open the door to strangers, even if they claim to be 'hotel staff'."
      ]
    }
  ]
};

// ===== EXPORT =====
window.hotelDataEn = hotelDataEn;
console.log('✅ hotelDataEn loaded');