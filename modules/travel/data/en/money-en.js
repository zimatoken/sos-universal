const moneyDataEn = {
  category: "money",
  title: "💳 Money & Cards",
  description: "Emergency: Money & Cards",
  questions: [
    {
      id: "problem",
      type: "single",
      text: "What happened to your money or cards?",
      options: [
        { id: "stolen_wallet", label: "Wallet / bag with money and cards stolen", tags: ["stolen_wallet"] },
        { id: "blocked_card", label: "Card blocked by bank", tags: ["blocked_card"] },
        { id: "lost_card", label: "Lost card", tags: ["lost_card"] },
        { id: "no_cash", label: "No cash, card not working", tags: ["no_cash"] },
        { id: "atm_error", label: "ATM swallowed card / didn't dispense cash", tags: ["atm_error"] },
        { id: "scam", label: "I was scammed / fraudsters withdrew money", tags: ["scam"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "abroad", label: "Abroad", tags: ["abroad"] },
        { id: "russia", label: "In Russia", tags: ["russia"] },
        { id: "transit", label: "At airport / station", tags: ["transit"] }
      ]
    },
    {
      id: "backup",
      type: "single",
      text: "Do you have backup funds?",
      options: [
        { id: "second_card", label: "Have a second card from another bank", tags: ["second_card"] },
        { id: "cash_hidden", label: "Have hidden cash", tags: ["cash_hidden"] },
        { id: "friend", label: "Friends / acquaintances nearby", tags: ["friend"] },
        { id: "nothing", label: "Nothing at all, completely broke", tags: ["nothing"] }
      ]
    },
    {
      id: "phone",
      type: "single",
      text: "Does your phone and internet work?",
      options: [
        { id: "yes", label: "Yes, connection and internet available", tags: ["yes"] },
        { id: "no_wifi", label: "Connection works but no internet", tags: ["no_wifi"] },
        { id: "no_phone", label: "Phone not working / dead battery", tags: ["no_phone"] }
      ]
    }
  ],
  solutions: [
    {
      id: "stolen_abroad",
      title: "Wallet stolen abroad",
      conditions: { "problem": ["stolen_wallet"], "location": ["abroad"] },
      tags: ["problem", "location", "money"],
      description: "Block all cards immediately, contact police, and find a way to receive money from home.",
      steps: [
        "Block ALL cards via your bank's mobile app or by phone (numbers on back of card or bank website).",
        "Call the bank and report the theft. Request urgent card reissue or transfer to a friend's account.",
        "Contact local police. File a theft report — needed for insurance and the bank.",
        "If you have theft insurance — call the insurance company within 24 hours.",
        "Ask relatives to transfer money via Western Union, Golden Crown, Contact, or Wise (TransferWise).",
        "Find the nearest payout point: banks, post offices, exchange offices.",
        "If completely broke — contact the Russian consulate. They can arrange a micro-loan for return home."
      ],
      warnings: [
        "Don't delay blocking cards — fraudsters can withdraw money within minutes.",
        "Western Union works in almost any country, but fees are high (up to 10%).",
        "Never store PIN with the card."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 days",
      yield_estimate: "Solution found"
    },
    {
      id: "blocked_card",
      title: "Card blocked by bank",
      conditions: { "problem": ["blocked_card"] },
      tags: ["problem", "money"],
      description: "The bank may have blocked the card due to suspicious transactions abroad. Can be unblocked remotely.",
      steps: [
        "Call the bank's hotline. The number is on the back of the card or in the app (free from abroad).",
        "Explain that you're traveling. Request unblock or confirm transactions.",
        "If the call is paid — use free Wi-Fi and call via WhatsApp, Telegram, or Skype (if supported by bank).",
        "Many banks (Tinkoff, Sber, VTB) allow unblocking directly in the app — check the 'Security' section.",
        "If permanently blocked (data leak) — order reissue. New card may be couriered abroad (check with bank).",
        "Temporarily use a second card or Apple Pay / Google Pay with another linked card."
      ],
      warnings: [
        "Notify your bank about travel before departure — this prevents blocking.",
        "Have at least 2 cards from different banks.",
        "Don't use cards in suspicious ATMs and terminals."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "15 min - 3 days",
      yield_estimate: "Solution found"
    },
    {
      id: "lost_card",
      title: "Lost card",
      conditions: { "problem": ["lost_card"] },
      tags: ["problem", "money"],
      description: "If the card is simply lost (not stolen), the process is simpler — block and order a new one.",
      steps: [
        "Block the card in the bank app or by phone. Indicate reason 'Lost'.",
        "If found within an hour — you can temporarily unblock via the app.",
        "Order card reissue. Check if the bank can send it abroad or to a pickup point in your city.",
        "If on vacation — ask to send the card to your hotel or to friends in a city you'll visit later.",
        "Temporarily use a second card, e-wallet (YooMoney, WebMoney), or transfers from Russia."
      ],
      warnings: [
        "Don't try to use a found card after blocking — it will be confiscated by the ATM.",
        "Reissue cost abroad can reach 50–100 USD."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-7 days",
      yield_estimate: "Solution found"
    },
    {
      id: "no_cash_abroad",
      title: "No cash, card not working abroad",
      conditions: { "problem": ["no_cash"], "location": ["abroad"] },
      tags: ["problem", "location", "money"],
      description: "Critical situation, but there are several ways to get money urgently.",
      steps: [
        "Find free Wi-Fi (hotel, cafe, airport, mall) and contact your bank via the app.",
        "Ask relatives to transfer money via Western Union, Golden Crown, Contact, or MoneyGram.",
        "Find a payout point: banks, post offices, exchange offices, supermarkets (depending on country).",
        "If you have a crypto wallet — exchange cryptocurrency for cash via P2P platforms or exchanges.",
        "Contact the Russian consulate — they can arrange an urgent loan for return (repayable within 30 days).",
        "If you have accident insurance — call the insurance company, they may advance expenses."
      ],
      warnings: [
        "Never take money from strangers on the street — it's 100% fraud.",
        "Airport exchange offices offer the worst rates — find a city exchange office."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "hours",
      yield_estimate: "Solution found"
    },
    {
      id: "atm_error",
      title: "ATM swallowed card / didn't dispense cash",
      conditions: { "problem": ["atm_error"] },
      tags: ["problem", "money"],
      description: "Don't panic — money is almost always returned. The main thing is to document the incident.",
      steps: [
        "Don't leave the ATM. Wait 1–2 minutes — the card may return automatically.",
        "Photograph the ATM screen (if error message displayed), ATM number, and receipt (if printed).",
        "Call the bank that owns the ATM (number usually on a sticker). Report the problem.",
        "Call your bank. Report: ATM number, time, amount. They will block the transaction.",
        "If money was debited but not dispensed — the bank will return it within 3–10 business days after investigation.",
        "If another bank's ATM swallowed the card — visit that bank's branch during business hours with your passport."
      ],
      warnings: [
        "Never re-enter PIN if the ATM 'freezes'.",
        "If the ATM looks suspicious (extra stickers, strange devices) — possible skimming."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "3-10 days",
      yield_estimate: "Solution found"
    },
    {
      id: "scam",
      title: "Fraud / unauthorized withdrawal",
      conditions: { "problem": ["scam"] },
      tags: ["problem", "money"],
      description: "Act as quickly as possible — the sooner you contact the bank, the higher the chance of recovering money.",
      steps: [
        "Immediately call the bank and report fraud. Request card block and dispute transactions (chargeback).",
        "Block the card in the app to prevent new withdrawals.",
        "Gather evidence: chat screenshots, receipts, emails, device photos (if skimming).",
        "File a police report. Sometimes required by the bank for chargeback.",
        "File a chargeback (payment reversal) through your bank. Filing deadline — usually up to 120 days from transaction date.",
        "If fraud occurred online — save all URLs, website screenshots, transfer details.",
        "Change passwords for online banking, email, and all related services."
      ],
      warnings: [
        "The bank doesn't always refund money for fraud — depends on transaction type and your vigilance.",
        "Never share SMS codes, CVC codes, or PIN by phone — even with 'bank employees'.",
        "Chargeback can take up to 45 days."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "1-45 days",
      yield_estimate: "Solution found"
    }
  ]
}

// ===== EXPORT =====
window.moneyDataEn = moneyDataEn;
