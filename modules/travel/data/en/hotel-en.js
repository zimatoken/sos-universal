// modules/travel/data/en/hotel-en.js
// === MODULE: TRAVEL — HOTEL ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "travel",
    category: "hotel",
    version: "1.0.0",
    lang: "en",
    title: "🏨 Hotel",
    description: "Hotel problems, rental issues, eviction — your rights",
    icon: "🏨",
    color: "#0d9488"
  },

  questions: [
    {
      id: "problem",
      type: "single",
      text: "What is the problem with your accommodation?",
      options: [
        { id: "no_booking", label: "❌ Hotel didn't confirm booking / no room", tags: ["no_booking"] },
        { id: "bad_quality", label: "🧹 Room doesn't match description / dirty / broken", tags: ["bad_quality"] },
        { id: "overcharged", label: "💰 Overcharged / price higher than booked", tags: ["overcharged"] },
        { id: "eviction", label: "🚪 Being evicted early / without explanation", tags: ["eviction"] },
        { id: "scam", label: "🎭 Scam (fake listing, apartment doesn't exist)", tags: ["scam"] },
        { id: "unsafe", label: "⚠️ Unsafe (break-in, theft, fire hazard)", tags: ["unsafe"] }
      ]
    },
    {
      id: "booking_source",
      type: "single",
      text: "Where did you book the accommodation?",
      conditions: { problem: ["no_booking", "scam", "bad_quality", "overcharged", "eviction", "unsafe"] },
      options: [
        { id: "booking_com", label: "🌐 Booking.com / Agoda / Expedia", tags: ["booking_com"] },
        { id: "airbnb", label: "🏠 Airbnb / Vrbo / apartment aggregators", tags: ["airbnb"] },
        { id: "hotel_direct", label: "🏨 Directly at the hotel / hotel website", tags: ["hotel_direct"] },
        { id: "tour_operator", label: "✈️ Via tour operator / agency", tags: ["tour_operator"] },
        { id: "private", label: "📱 Via private ad / Telegram / Avito", tags: ["private"] }
      ]
    },
    {
      id: "payment",
      type: "single",
      text: "Have you already paid?",
      conditions: { problem: ["no_booking", "scam", "bad_quality", "overcharged", "eviction", "unsafe"] },
      options: [
        { id: "prepaid", label: "💳 Yes, fully prepaid", tags: ["prepaid"] },
        { id: "deposit", label: "💵 Deposit / partial payment made", tags: ["deposit"] },
        { id: "not_paid", label: "❌ No, payment upon arrival", tags: ["not_paid"] },
        { id: "charged_wrong", label: "💳 Wrong amount charged to card", tags: ["charged_wrong"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "What time is it now?",
      conditions: { problem: ["no_booking", "scam", "bad_quality", "overcharged", "eviction", "unsafe"] },
      options: [
        { id: "day", label: "☀️ Day / working hours", tags: ["day"] },
        { id: "night", label: "🌙 Night / late evening", tags: ["night"] },
        { id: "holiday", label: "🎉 Holiday / weekend", tags: ["holiday"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. No room when booking via Booking.com
    // ============================================================
    {
      id: "no_room_booking_com",
      title: "❌ No room when booking via Booking.com",
      description: "Booking.com guarantees accommodation with a confirmed booking. There is an action algorithm.",
      conditions: { problem: ["no_booking"], booking_source: ["booking_com"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30-120 min",
      yield_estimate: "Accommodation or compensation",
      tags: ["no_booking", "booking_com", "compensation"],
      steps: [
        "Show your booking confirmation at the reception. Demand a room or an equivalent.",
        "If the hotel refuses — call Booking.com customer support. They must resolve it within 30 minutes.",
        "Booking.com must: find you alternative accommodation of the same or higher class, pay for transfer there, compensate the price difference.",
        "Keep ALL receipts: taxi to the new hotel, food, price difference. Booking.com will reimburse them.",
        "If you have to find accommodation yourself — book within reason and keep receipts.",
        "After the situation is resolved, leave an honest review of the hotel.",
        "If Booking.com doesn't help within an hour — threaten a complaint to the European Consumer Rights Commission."
      ],
      warnings: [
        "Never accept 'compensation' directly from the hotel — they may offer less.",
        "In peak season, alternative accommodation may be more expensive — Booking.com must cover the difference.",
        "Keep communication with the hotel and Booking.com — it's evidence."
      ]
    },
    // ============================================================
    // 2. Rental scam
    // ============================================================
    {
      id: "airbnb_scam",
      title: "🎭 Rental scam (Airbnb / private listing)",
      description: "Fake listing, apartment doesn't exist, or the host disappeared with the money.",
      conditions: { problem: ["scam"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "hours",
      yield_estimate: "Money back",
      tags: ["scam", "airbnb", "fraud"],
      steps: [
        "If booked through Airbnb — immediately call Airbnb support. They must find an alternative or refund.",
        "If you transferred money to a private individual — gather evidence: correspondence, transfer details, listing photo.",
        "File a police report. In most countries, this is online or at the nearest station.",
        "If you paid by card — immediately call your bank and dispute the transaction (chargeback).",
        "Find alternative accommodation through verified services. Don't accept offers from strangers.",
        "Alert the platform about the scammer — they may block the listing.",
        "Warn other travelers about the scammer on social media."
      ],
      warnings: [
        "NEVER transfer prepayment to an individual's card without a contract and verification.",
        "Airbnb protects payments within the platform. If the host asks for a direct transfer — it's 100% a scam.",
        "Check reviews: if there are few or they're all too good — be cautious."
      ]
    },
    // ============================================================
    // 3. Room doesn't match description
    // ============================================================
    {
      id: "bad_quality_hotel",
      title: "🧹 Room doesn't match description",
      description: "Dirt, broken items, noise, missing amenities — you have the right to demand a solution or refund.",
      conditions: { problem: ["bad_quality"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30-60 min",
      yield_estimate: "Room change or discount",
      tags: ["bad_quality", "complaint"],
      steps: [
        "Document the problem: take photos and videos. Record the date and time.",
        "Immediately contact the reception. Show the photos and demand: a) room change, b) fix the problem, c) discount.",
        "If the problem is serious — demand immediate room change or refund.",
        "If booked through an aggregator — call Booking.com / Airbnb / Expedia support.",
        "If the hotel refuses — find alternative accommodation and demand a full refund + compensation.",
        "Leave an objective review with photos. It affects the hotel's rating.",
        "For serious violations — report to local control authorities."
      ],
      warnings: [
        "Don't accept 'apologies' in the form of a bottle of wine for serious problems.",
        "In some countries, a hotel's 'star rating' is determined by local standards.",
        "Check recent reviews (last 3 months) — the hotel may have declined."
      ]
    },
    // ============================================================
    // 4. Overcharged
    // ============================================================
    {
      id: "overcharged_hotel",
      title: "💰 Overcharged / price higher than booked",
      description: "The hotel demands extra payment above the booked price or charged more to your card.",
      conditions: { problem: ["overcharged"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15-60 min",
      yield_estimate: "Refund of overpayment",
      tags: ["overcharged", "payment"],
      steps: [
        "Show the booking confirmation with the stated price. Clarify what the extra charge is for.",
        "If the booking price was 'including all taxes' — refuse to pay extra.",
        "If more was charged to your card — show the statement. Demand an immediate refund of the difference.",
        "If the hotel insists — contact the booking platform.",
        "If refused — dispute the transaction with your bank (chargeback).",
        "Some hotels require a deposit upon check-in — clarify if it's refundable.",
        "If charged for a 'minibar' you didn't use — demand verification."
      ],
      warnings: [
        "'Resort fees' in the USA are often not included in the booking price — it's legal but should be disclosed.",
        "Never agree to pay 'cash in hand' without a receipt."
      ]
    },
    // ============================================================
    // 5. Eviction
    // ============================================================
    {
      id: "eviction",
      title: "🚪 Eviction from hotel / apartment",
      description: "You're being evicted early or without explanation. This is a breach of contract.",
      conditions: { problem: ["eviction"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-3 hours",
      yield_estimate: "Compensation and alternative",
      tags: ["eviction", "complaint"],
      steps: [
        "Demand a written explanation for the eviction. Record the conversation with the administrator on video.",
        "Show the booking confirmation with the dates. Remind them that this is a breach of contract.",
        "If the reason is 'overbooked' — demand a full refund + compensation + alternative accommodation.",
        "If booked through an aggregator — immediately call support.",
        "If you're being evicted by force or threats — call the police.",
        "Find alternative accommodation. Keep receipts for price differences, taxi, food.",
        "File a claim for compensation through the booking platform and/or in court."
      ],
      warnings: [
        "In some countries, the hotel can evict you for rule violations — make sure you haven't violated any.",
        "When renting from private individuals, eviction can be more difficult legally."
      ]
    },
    // ============================================================
    // 6. Unsafe accommodation
    // ============================================================
    {
      id: "unsafe_hotel",
      title: "⚠️ Unsafe hotel / apartment",
      description: "Theft, break-in, fire hazard, suspicious individuals — safety comes first.",
      conditions: { problem: ["unsafe"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Safety",
      tags: ["unsafe", "security", "emergency"],
      steps: [
        "If theft occurs — DON'T touch anything. Call the police and administration.",
        "Check the safe — if items were stolen from the safe, the hotel is responsible.",
        "Demand to view CCTV footage. The hotel must provide it to the police.",
        "If there's a fire hazard — immediately report it to the fire inspectorate and hotel management.",
        "If you feel threatened — change rooms or hotels immediately.",
        "Contact your insurance — property or travel insurance may cover stolen items.",
        "For serious incidents — contact the Russian consulate."
      ],
      warnings: [
        "Always use the in-room safe for valuables.",
        "Check locks on doors and windows upon check-in.",
        "Don't open the door to strangers, even if they claim to be 'hotel staff'."
      ]
    }
  ]
});