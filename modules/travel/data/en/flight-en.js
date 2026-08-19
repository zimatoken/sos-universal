// modules/travel/data/en/flight-en.js
// === MODULE: TRAVEL — FLIGHT PROBLEMS ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "travel",
    category: "flight",
    version: "1.0.0",
    lang: "en",
    title: "✈️ Flight Problems",
    description: "Delays, cancellations, overbooking, lost baggage — your rights",
    icon: "✈️",
    color: "#0d9488"
  },

  questions: [
    {
      id: "problem",
      type: "single",
      text: "What is the flight problem?",
      options: [
        { id: "delayed", label: "⏰ Flight is delayed", tags: ["delayed"] },
        { id: "cancelled", label: "❌ Flight is cancelled", tags: ["cancelled"] },
        { id: "missed", label: "🏃 Missed the flight", tags: ["missed"] },
        { id: "overbooked", label: "🔄 No seat — overbooked", tags: ["overbooked"] },
        { id: "connection", label: "🔗 Missed connecting flight", tags: ["connection"] },
        { id: "baggage", label: "🧳 Baggage issues (lost, damaged, delayed)", tags: ["baggage"] }
      ]
    },
    {
      id: "airline",
      type: "single",
      text: "Which airline?",
      conditions: { problem: ["delayed", "cancelled", "overbooked", "connection"] },
      options: [
        { id: "eu", label: "🇪🇺 European (departure from EU)", tags: ["eu"] },
        { id: "russian", label: "🇷🇺 Russian (Aeroflot, S7, Pobeda, Ural and others)", tags: ["russian"] },
        { id: "intl", label: "🌍 International (Emirates, Qatar, Turkish and others)", tags: ["intl"] },
        { id: "lowcost", label: "💸 Low-cost (Ryanair, EasyJet, Wizz Air, Pobeda and others)", tags: ["lowcost"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "How much time until departure / how long have you been waiting?",
      conditions: { problem: ["delayed", "cancelled", "overbooked", "connection"] },
      options: [
        { id: "hours", label: "⏱️ A few hours", tags: ["hours"] },
        { id: "day", label: "📅 More than a day", tags: ["day"] },
        { id: "already", label: "✈️ Flight has already left / I'm already at the airport", tags: ["already"] }
      ]
    },
    {
      id: "insurance",
      type: "single",
      text: "Do you have travel insurance covering flight delays?",
      conditions: { problem: ["delayed", "cancelled", "overbooked", "connection", "baggage"] },
      options: [
        { id: "yes", label: "✅ Yes, insurance covers delays", tags: ["yes"] },
        { id: "no", label: "❌ No", tags: ["no"] },
        { id: "card", label: "💳 Not sure, but paid with card", tags: ["card"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. Delayed flight — EU passenger rights
    // ============================================================
    {
      id: "delayed_eu",
      title: "⏰ Delayed flight — passenger rights in the EU",
      description: "Regulation EC 261/2004 protects passengers during delays.",
      conditions: { problem: ["delayed"], airline: ["eu"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "hours",
      yield_estimate: "Compensation up to 600 €",
      tags: ["delayed", "eu", "compensation"],
      steps: [
        "Ask the airline representative for the reason for the delay. Record or photograph the official announcement.",
        "For delays over 2 hours (up to 1500 km), 3 hours (1500–3500 km), or 4 hours (over 3500 km), you are entitled to: free meals, drinks, 2 calls/emails.",
        "For delays over 5 hours — right to refuse the flight and receive a full refund.",
        "For overnight delays — right to free hotel accommodation and transfer.",
        "If the delay is the airline's fault — you can claim compensation: 250 € (up to 1500 km), 400 € (1500–3500 km), 600 € (over 3500 km).",
        "Submit a claim on the airline's website. Attach: ticket, delay confirmation, expense receipts.",
        "If the airline refuses — file a complaint with the national passenger rights authority."
      ],
      warnings: [
        "Compensation is NOT available for 'extraordinary circumstances' (weather, strikes, terrorism, pandemic).",
        "Don't sign waivers for 'bonuses' or vouchers — it forfeits your right to cash.",
        "Claim deadline — 3–6 years (varies by country)."
      ]
    },
    // ============================================================
    // 2. Flight cancelled
    // ============================================================
    {
      id: "cancelled_any",
      title: "❌ Flight cancelled — what to do",
      description: "The airline must offer an alternative or refund.",
      conditions: { problem: ["cancelled"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "hours",
      yield_estimate: "Rebooking or refund",
      tags: ["cancelled", "compensation"],
      steps: [
        "Immediately contact the airline: check-in desk, hotline, app, online chat.",
        "Request: a) rebooking on the next available flight FREE, b) full refund, c) rebooking on another date.",
        "If departing from the EU — you can also claim compensation under EC 261 (250–600 €).",
        "If cancellation is due to 'extraordinary circumstances' — no compensation, but rebooking and meals are mandatory.",
        "If the airline doesn't offer a hotel for overnight delay — book yourself (up to 100–150 €/night) and keep receipts.",
        "If you have insurance — call them. They may cover hotel, meals, new tickets.",
        "If you missed a connection due to the first flight delay — the airline must rebook you for free."
      ],
      warnings: [
        "Don't accept vouchers if you need cash — vouchers often have restrictions.",
        "If you bought through an aggregator — contact the airline directly, not the aggregator."
      ]
    },
    // ============================================================
    // 3. Missed the flight
    // ============================================================
    {
      id: "missed_flight",
      title: "🏃 Missed the flight",
      description: "It depends on the reason for the delay and your fare rules.",
      conditions: { problem: ["missed"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Rebooking or new ticket",
      tags: ["missed", "rebooking"],
      steps: [
        "Immediately go to the airline desk. Even if check-in is closed — sometimes you can still make it.",
        "If you missed it due to your own fault — 'Basic' fare is usually non-changeable. Buy a new ticket.",
        "If 'Standard' or 'Business' — free or paid rebooking is possible.",
        "If you missed due to another flight delay by the same airline — demand free rebooking.",
        "If you missed due to traffic / accident — it's your responsibility. But try to explain the situation.",
        "Check your insurance — some policies cover missed flights due to accidents or vehicle breakdown.",
        "If the ticket is non-refundable — still ask for airport taxes — they can be refunded."
      ],
      warnings: [
        "Low-cost airlines almost never rebook for free if you miss your flight.",
        "A new ticket on the day of departure is often 2–3 times more expensive."
      ]
    },
    // ============================================================
    // 4. Overbooking
    // ============================================================
    {
      id: "overbooked",
      title: "🔄 Overbooking — no seat on the plane",
      description: "The airline sold more tickets than seats. You have rights and can get compensation.",
      conditions: { problem: ["overbooked"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "hours",
      yield_estimate: "Compensation up to 600 €",
      tags: ["overbooked", "compensation"],
      steps: [
        "The airline must first look for volunteers willing to give up their seat for compensation. Don't accept the first offer — negotiate.",
        "If no volunteers — the airline can deny boarding involuntarily. In this case, you are entitled to: immediate rebooking or refund.",
        "If departing from the EU — additional compensation: 250 € (up to 1500 km), 400 € (1500–3500 km), 600 € (over 3500 km).",
        "Also entitled to: meals, drinks, 2 calls/emails, hotel for overnight delay.",
        "Request written confirmation of denied boarding — you need it for compensation.",
        "If the airline offers a voucher instead of cash — you have the right to demand cash.",
        "Submit a compensation claim through the airline's website or a specialized service."
      ],
      warnings: [
        "Don't accept a voucher if you're not sure you'll fly this airline again.",
        "Overbooking is the airline's FAULT — compensation is ALWAYS available (in the EU)."
      ]
    },
    // ============================================================
    // 5. Missed connection
    // ============================================================
    {
      id: "connection_missed",
      title: "🔗 Missed connection",
      description: "If both flights are on one booking — the airline must help. If different bookings — you're on your own.",
      conditions: { problem: ["connection"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "immediately",
      yield_estimate: "Rebooking",
      tags: ["connection", "rebooking"],
      steps: [
        "Check if your flights are on one booking (one PNR). If yes — the airline MUST rebook you for free.",
        "Go to the transfer desk or your airline's desk.",
        "If the next flight is only tomorrow — demand free hotel and meals.",
        "If flights are on DIFFERENT bookings — the first airline is not responsible. Buy a new ticket.",
        "Check your insurance — some policies cover missed connections.",
        "If the first flight was delayed — keep the delay confirmation for insurance and compensation.",
        "When rebooked — check your baggage — it may not be transferred in time."
      ],
      warnings: [
        "When buying tickets on different sites, always leave at least 2–3 hours for connection.",
        "When rebooked on another flight — check your baggage."
      ]
    },
    // ============================================================
    // 6. Baggage issues
    // ============================================================
    {
      id: "baggage_issue",
      title: "🧳 Baggage issues",
      description: "Delayed, lost, or damaged baggage — a solvable problem with a clear algorithm.",
      conditions: { problem: ["baggage"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "hours-days",
      yield_estimate: "Compensation",
      tags: ["baggage", "compensation"],
      steps: [
        "For delayed baggage: go to lost baggage service. Fill out a Property Irregularity Report (PIR).",
        "Get the PIR number and contact information. Ask when to expect your baggage and if it will be delivered to the hotel.",
        "Buy necessary items (underwear, hygiene, clothes) within reasonable limits. Keep receipts — the airline will reimburse (usually up to 50–100 €/day).",
        "If baggage is not found within 21 days — it is considered lost. File a claim for the value of the contents.",
        "For damaged baggage: photograph/video the damage BEFORE leaving the airport. Contact the airline service.",
        "The airline must compensate for damage according to the Montreal Convention (up to ~1700 €).",
        "If baggage was lost during a connection — the last airline on the route is responsible."
      ],
      warnings: [
        "Never leave the baggage claim area without checking your suitcase — it will be hard to prove damage later.",
        "Valuables, medications, documents — ALWAYS in carry-on luggage.",
        "Take photos of your suitcase contents before departure — it will help with claims."
      ]
    }
  ]
});