// === MODULE: TRAVEL — FLIGHTS (EN) ===
const flightDataEn = {
  category: "flight",
  title: "✈️ Flights",
  description: "Delay, cancellation, missed flight, overbooking, lost baggage — what to do",

  questions: [
    {
      id: "problem",
      type: "single",
      text: "What is the problem with your flight?",
      options: [
        { id: "delayed", label: "Flight is delayed", tags: ["delayed"] },
        { id: "cancelled", label: "Flight is cancelled", tags: ["cancelled"] },
        { id: "missed", label: "I missed the flight", tags: ["missed"] },
        { id: "overbooked", label: "No seat — overbooked", tags: ["overbooked"] },
        { id: "connection", label: "Missed a connecting flight", tags: ["connection"] },
        { id: "baggage", label: "Baggage problems (lost, damaged, delayed)", tags: ["baggage"] }
      ]
    },
    {
      id: "airline",
      type: "single",
      text: "Which airline?",
      options: [
        { id: "eu", label: "European (departure from EU)", tags: ["eu"] },
        { id: "russian", label: "Russian (Aeroflot, S7, Pobeda, Ural, etc.)", tags: ["russian"] },
        { id: "intl", label: "International (Emirates, Qatar, Turkish, etc.)", tags: ["intl"] },
        { id: "lowcost", label: "Low-cost (Ryanair, EasyJet, Wizz Air, Pobeda, etc.)", tags: ["lowcost"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "How much time until departure / how long have you been waiting?",
      options: [
        { id: "hours", label: "Several hours", tags: ["hours"] },
        { id: "day", label: "More than 24 hours", tags: ["day"] },
        { id: "already", label: "The flight already left / I'm already at the airport", tags: ["already"] }
      ]
    },
    {
      id: "insurance",
      type: "single",
      text: "Do you have travel insurance covering flight delays?",
      options: [
        { id: "yes", label: "Yes, I have insurance with delay coverage", tags: ["insured"] },
        { id: "no", label: "No", tags: ["uninsured"] },
        { id: "card", label: "Not sure, but I paid with my card", tags: ["card"] }
      ]
    }
  ],

  solutions: [
    {
      id: "delayed_eu",
      title: "⏰ Flight delay — passenger rights in the EU",
      description: "The EU has regulation EC 261/2004 that protects passengers during delays.",
      conditions: { problem: ["delayed"], airline: ["eu"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "hours",
      yield_estimate: "Compensation up to 600 €",
      tags: ["delayed", "eu", "compensation"],
      steps: [
        "Check the delay reason with airline staff. Write down or photograph the official announcement.",
        "For delays over 2 hours (up to 1500 km), 3 hours (1500–3500 km), or 4 hours (over 3500 km) you are entitled to: free meals, drinks, 2 calls/emails.",
        "For delays over 5 hours — right to cancel the flight and full refund.",
        "For overnight delays — right to free hotel accommodation and transfer.",
        "If the delay is the airline's fault (technical issues, overbooking) — you can claim compensation: 250 € (up to 1500 km), 400 € (1500–3500 km), 600 € (over 3500 km).",
        "File a claim on the airline's website. Attach: ticket, delay confirmation, expense receipts.",
        "If the airline refuses — file a complaint with the national passenger rights authority (in the departure or arrival country)."
      ],
      warnings: [
        "Compensation is NOT available for 'extraordinary circumstances' (weather, strikes, terrorism, pandemic).",
        "Do not sign documents waiving claims for 'bonuses' or vouchers — it forfeits your right to money.",
        "Claim deadline — up to 3–6 years (depends on the country)."
      ]
    },
    {
      id: "cancelled_any",
      title: "❌ Flight cancelled — what to do",
      description: "When a flight is cancelled, the airline must offer an alternative or refund.",
      conditions: { problem: ["cancelled"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "hours",
      yield_estimate: "Rebooking or refund",
      tags: ["cancelled", "refund", "rebooking"],
      steps: [
        "Immediately contact the airline: check-in desk, hotline, app, online chat.",
        "Demand: a) rebooking on the next available flight FREE of charge, b) full refund, c) rebooking to another date.",
        "If departing from the EU — in addition to rebooking, you can claim compensation under EC 261 (250–600 €) if cancellation is the airline's fault.",
        "If cancellation is 'extraordinary' (weather, force majeure) — no compensation, but rebooking and meals are mandatory.",
        "If the airline doesn't offer a hotel for overnight delays — book yourself within reasonable limits (up to 100–150 €/night) and keep receipts for reimbursement.",
        "If you have cancellation insurance — call the insurance company. They may cover hotel, meals, and new tickets.",
        "If you missed a connection due to the first flight delay — the airline must rebook you on the next flight for free."
      ],
      warnings: [
        "Don't accept vouchers if you need cash — vouchers often have restrictions on validity and routes.",
        "If you bought tickets through an aggregator (Aviasales, Skyscanner) — contact the airline directly, not the aggregator."
      ]
    },
    {
      id: "missed_flight",
      title: "🏃 Missed the flight",
      description: "It all depends on the reason for being late and your fare rules.",
      conditions: { problem: ["missed"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "immediately",
      yield_estimate: "Depends on fare",
      tags: ["missed", "late", "rebooking"],
      steps: [
        "Immediately go to the airline check-in desk. Even if check-in is closed — sometimes you can still make it (if the plane is still at the gate).",
        "If you missed due to your own fault — 'Basic' fare usually cannot be changed. Buy a new ticket.",
        "If you have a 'Standard' or 'Business' fare — you may be able to rebook for free or for a fee to the next flight.",
        "If you missed due to another flight delay by the same airline — demand free rebooking.",
        "If you were late due to traffic / accident / taxi breakdown — that's your responsibility. But try to explain the situation — sometimes they accommodate.",
        "Check your insurance — some policies cover missed flights due to accidents or vehicle breakdown.",
        "If the ticket is non-refundable — still ask for airport taxes — they can be refunded even on non-refundable fares."
      ],
      warnings: [
        "Low-cost airlines (Ryanair, Pobeda) almost never rebook for free when you miss a flight.",
        "A new ticket on the day of departure often costs 2–3 times more — consider flying the next day."
      ]
    },
    {
      id: "overbooked",
      title: "🪑 Overbooking — no seat on the plane",
      description: "The airline sold more tickets than seats. You have rights and can get compensation.",
      conditions: { problem: ["overbooked"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "hours",
      yield_estimate: "Compensation up to 600 €",
      tags: ["overbooked", "denied_boarding", "compensation"],
      steps: [
        "The airline must first look for volunteers willing to give up their seat for compensation. Don't accept the first offer — negotiate.",
        "If no volunteers — the airline can deny boarding involuntarily. In this case you are entitled to: immediate rebooking or refund.",
        "If departing from the EU — additional compensation: 250 € (up to 1500 km), 400 € (1500–3500 km), 600 € (over 3500 km).",
        "Also entitled to: meals, drinks, 2 calls/emails, hotel for overnight delays.",
        "Request written confirmation of denied boarding — you need it for compensation.",
        "If the airline offers a voucher instead of cash — you have the right to demand cash.",
        "File a compensation claim through the airline's website or specialized service (AirHelp, Compensair)."
      ],
      warnings: [
        "Don't accept vouchers if you're not sure you'll fly this airline again.",
        "Overbooking is the airline's FAULT — compensation is ALWAYS due (in the EU)."
      ]
    },
    {
      id: "connection_missed",
      title: "🔀 Missed connection",
      description: "If both flights are on one booking — the airline must help. If separate bookings — you are responsible.",
      conditions: { problem: ["connection"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "immediately",
      yield_estimate: "Free rebooking",
      tags: ["connection", "transfer", "rebooking"],
      steps: [
        "Check if your flights are on one booking (one PNR). If yes — the airline MUST rebook you for free.",
        "Go to the transfer desk or your airline's counter.",
        "If the next flight is only tomorrow — demand free hotel and meals (for delays > several hours).",
        "If flights are on DIFFERENT bookings — the first airline is not responsible. Buy a new ticket.",
        "Check your insurance — some policies cover missed connections.",
        "If the first flight was delayed and you missed the connection — save the delay confirmation for insurance and compensation.",
        "If you were rebooked on a later flight — check if you need a new visa or transit zone."
      ],
      warnings: [
        "When booking tickets on different sites — always leave at least 2–3 hours for connections (3–4 hours at major hubs).",
        "When rebooked on another flight — check your baggage — it may not be transferred in time."
      ]
    },
    {
      id: "baggage_issue",
      title: "🧳 Baggage problems",
      description: "Delayed, lost, or damaged baggage — solved by a clear algorithm.",
      conditions: { problem: ["baggage"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "hours-days",
      yield_estimate: "Compensation up to 1300 SDR (~1700 €)",
      tags: ["baggage", "lost", "damaged"],
      steps: [
        "For delayed baggage: immediately go to the lost baggage office (usually near the carousel). Fill out a Property Irregularity Report (PIR).",
        "Get the PIR number and contact information. Ask when to expect the baggage and if it will be delivered to your hotel.",
        "Buy necessary items (underwear, toiletries, clothes) within reasonable limits. Keep receipts — the airline will reimburse (usually up to 50–100 €/day).",
        "If baggage is not found within 21 days — it is considered lost. File a claim for compensation of contents.",
        "For damaged baggage: document damage with photos/videos BEFORE leaving the airport. Contact the airline's service desk.",
        "The airline must compensate the damage according to the Montreal Convention (up to ~1300 SDR, ~1700 €).",
        "If baggage was lost during a connection — the last airline on the route is responsible."
      ],
      warnings: [
        "Never leave the baggage claim area without checking your suitcase — it will be harder to prove damage later.",
        "Valuables, medicines, documents — ALWAYS in hand luggage.",
        "Photograph the contents of your suitcase before departure — it will help with your claim."
      ]
    }
  ]
};

// ===== EXPORT =====
window.flightDataEn = flightDataEn;
console.log('✅ flightDataEn loaded');