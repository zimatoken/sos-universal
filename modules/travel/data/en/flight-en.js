const TRAVEL_DATA = TRAVEL_DATA || {};
TRAVEL_DATA.flight = {
  category: "flight",
  icon: "✈️",
  questions: [
    {
      id: "problem",
      question: "What is the flight problem?",
      options: [
        { value: "delayed", label: "Flight delayed" },
        { value: "cancelled", label: "Flight cancelled" },
        { value: "missed", label: "Missed flight" },
        { value: "overbooked", label: "No seat — overbooking" },
        { value: "connection", label: "Missed connecting flight" },
        { value: "baggage", label: "Baggage issue (lost, damaged, delayed)" }
      ]
    },
    {
      id: "airline",
      question: "Which airline?",
      options: [
        { value: "eu", label: "European (departing from EU)" },
        { value: "russian", label: "Russian (Aeroflot, S7, Pobeda, Ural, etc.)" },
        { value: "intl", label: "International (Emirates, Qatar, Turkish, etc.)" },
        { value: "lowcost", label: "Low-cost (Ryanair, EasyJet, Wizz Air, Pobeda, etc.)" }
      ]
    },
    {
      id: "time",
      question: "How much time until departure / how long have you been waiting?",
      options: [
        { value: "hours", label: "A few hours" },
        { value: "day", label: "More than 24 hours" },
        { value: "already", label: "Flight already left / I'm already at the airport" }
      ]
    },
    {
      id: "insurance",
      question: "Do you have flight delay insurance?",
      options: [
        { value: "yes", label: "Yes, with delay coverage" },
        { value: "no", label: "No" },
        { value: "card", label: "Don't know, but paid with a card" }
      ]
    }
  ],
  results: [
    {
      id: "delayed_eu",
      title: "Flight delay — passenger rights in the EU",
      icon: "⏰",
      match: { problem: "delayed", airline: "eu" },
      description: "EU regulation EC 261/2004 protects passengers during delays.",
      steps: [
        "Clarify the reason for delay with the airline representative. Record or photograph the official announcement.",
        "For delays over 2 hours (up to 1500 km), 3 hours (1500–3500 km), or 4 hours (over 3500 km) you are entitled to: free meals, drinks, 2 phone calls/emails.",
        "For delays over 5 hours — right to refuse the flight and full refund.",
        "For overnight delay — right to free hotel accommodation and transfer.",
        "If delay is airline's fault (technical failure, overbooking) — you can claim compensation: 250 € (up to 1500 km), 400 € (1500–3500 km), 600 € (over 3500 km).",
        "Submit a claim on the airline's website. Attach: ticket, delay confirmation, expense receipts.",
        "If airline refuses — file a complaint with the national passenger rights authority (in departure or arrival country)."
      ],
      warnings: [
        "Compensation is NOT due for 'extraordinary circumstances' (weather, strikes, terrorism, pandemic).",
        "Don't sign documents waiving claims for 'bonuses' or vouchers — this forfeits your right to cash.",
        "Claim deadline — up to 3–6 years (depending on country)."
      ],
      meta: { severity: "medium", time: "hours" }
    },
    {
      id: "cancelled_any",
      title: "Flight cancelled — what to do",
      icon: "❌",
      match: { problem: "cancelled" },
      description: "When a flight is cancelled, the airline must offer an alternative or refund.",
      steps: [
        "Immediately contact the airline: check-in counter, hotline, app, online chat.",
        "Demand: a) rebooking on the nearest flight FREE, b) full refund, c) rebooking for another date.",
        "If departing from the EU — in addition to rebooking you can claim compensation under EC 261 (250–600 €) for airline-fault cancellations.",
        "If cancellation is 'extraordinary' (weather, force majeure) — no compensation, but rebooking and meals are mandatory.",
        "If airline doesn't offer hotel for overnight delay — book yourself within reasonable limits (up to 100–150 €/night) and keep receipts for reimbursement.",
        "If you bought flight cancellation insurance — call the insurance company. They may cover hotel, meals, new tickets.",
        "If you missed a connection due to first flight delay — the airline must rebook you on the next flight free of charge."
      ],
      warnings: [
        "Don't agree to a voucher if you need cash — vouchers often have time and route restrictions.",
        "If you bought through an aggregator (Aviasales, Skyscanner) — contact the airline directly, not the aggregator."
      ],
      meta: { severity: "high", time: "hours" }
    },
    {
      id: "missed_flight",
      title: "Missed flight",
      icon: "🏃",
      match: { problem: "missed" },
      description: "Everything depends on the reason for being late and your fare rules.",
      steps: [
        "Immediately go to the airline counter. Even if check-in is closed — sometimes you can still make it (if plane is still at the gate).",
        "If late due to your own fault — 'Basic' fare usually CANNOT be changed. Buy a new ticket.",
        "If 'Standard' or 'Business' fare — free or paid rebooking to the next flight may be possible.",
        "If late due to another flight delay with the same airline — demand free rebooking.",
        "If late due to traffic / accident / taxi breakdown — it's your responsibility. But try explaining the situation — sometimes they accommodate.",
        "Check your insurance — some policies cover missed flights due to accidents or transport breakdown.",
        "Even for non-refundable tickets — ask for airport taxes back — they can be refunded even on non-refundable fares."
      ],
      warnings: [
        "Low-cost carriers (Ryanair, Pobeda) almost never rebook for free if you're late.",
        "New tickets on the day of departure often cost 2–3 times more — consider flying the next day."
      ],
      meta: { severity: "high", time: "immediately" }
    },
    {
      id: "overbooked",
      title: "Overbooking — no seat on the plane",
      icon: "🪑",
      match: { problem: "overbooked" },
      description: "The airline sold more tickets than seats. You have rights and can get compensation.",
      steps: [
        "The airline must first seek volunteers willing to give up their seat for compensation. Don't accept the first offer — negotiate.",
        "If no volunteers — the airline can involuntarily deny boarding. In this case you're entitled to: immediate rebooking or refund.",
        "If departing from the EU — additionally entitled to compensation: 250 € (up to 1500 km), 400 € (1500–3500 km), 600 € (over 3500 km).",
        "Also entitled to: meals, drinks, 2 phone calls/emails, hotel for overnight delay.",
        "Demand written confirmation of denied boarding — needed for compensation.",
        "If airline offers a voucher instead of cash — you have the right to demand cash.",
        "Submit a compensation claim through the airline's website or specialized service (AirHelp, Compensair)."
      ],
      warnings: [
        "Don't agree to a voucher if you're not sure you'll fly with that airline again.",
        "Overbooking is the AIRLINE'S fault, so compensation is ALWAYS due (in the EU)."
      ],
      meta: { severity: "medium", time: "hours" }
    },
    {
      id: "connection_missed",
      title: "Missed connecting flight",
      icon: "🔀",
      match: { problem: "connection" },
      description: "If both flights are on one booking — the airline must help. If separate bookings — you're on your own.",
      steps: [
        "Check if your flights are on one booking (one PNR). If yes — the airline MUST rebook you free of charge.",
        "Go to the transfer desk or your airline's counter.",
        "If next flight is only tomorrow — demand free hotel and meals (for delays of several hours).",
        "If flights are on SEPARATE bookings — the first flight's airline bears no responsibility. Buy a new ticket.",
        "Check your insurance — some policies cover missed connections.",
        "If first flight delay caused missed connection — keep delay confirmation for insurance and compensation.",
        "If rebooked to a later flight — check if you need a new visa or transit zone."
      ],
      warnings: [
        "When buying tickets on different sites always leave at least 2–3 hours for connection (3–4 hours at major hubs).",
        "When rebooked to another flight check your baggage — it may not be transferred in time."
      ],
      meta: { severity: "high", time: "immediately" }
    },
    {
      id: "baggage_issue",
      title: "Baggage issues",
      icon: "🧳",
      match: { problem: "baggage" },
      description: "Delayed, lost, or damaged baggage — a common problem with a clear algorithm.",
      steps: [
        "For delayed baggage: immediately contact the lost baggage service (usually near the carousel). Fill out a Property Irregularity Report (PIR).",
        "Get the PIR number and service contact. Ask when to expect the baggage and if it will be delivered to your hotel.",
        "Buy necessary items (underwear, hygiene, clothes) within reasonable limits. Keep receipts — the airline will reimburse (usually up to 50–100 €/day).",
        "If baggage not found within 21 days — it's considered lost. File a claim for reimbursement of contents' value.",
        "For damaged baggage: document damage with photos/video BEFORE leaving the airport. Contact the airline service.",
        "The airline must compensate damage according to the Montreal Convention (up to ~1300 SDR, approximately 1700 €).",
        "If baggage lost during connection — the last airline in your route is responsible."
      ],
      warnings: [
        "Never leave the baggage claim area without checking your suitcase — it's hard to prove damage later.",
        "Valuables, medications, documents — ALWAYS in carry-on.",
        "Photograph suitcase contents before departure — helps with claims."
      ],
      meta: { severity: "medium", time: "hours-days" }
    }
  ]
};
