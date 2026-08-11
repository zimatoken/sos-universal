// === MODULE: TRAVEL — MONEY ===
const moneyDataEn = {
  category: "money",
  title: "💳 Money and Cards",
  description: "Stolen wallet, blocked card, lost card, no cash, ATM error, fraud — what to do",

  questions: [
    {
      id: "problem",
      type: "single",
      text: "What happened with your money or cards?",
      options: [
        { id: "stolen_wallet", label: "Wallet/purse with money and cards stolen", tags: ["stolen_wallet"] },
        { id: "blocked_card", label: "Card blocked by bank", tags: ["blocked_card"] },
        { id: "lost_card", label: "Lost the card", tags: ["lost_card"] },
        { id: "no_cash", label: "No cash, card doesn't work", tags: ["no_cash"] },
        { id: "atm_error", label: "ATM swallowed card / didn't dispense money", tags: ["atm_error"] },
        { id: "scam", label: "Scammed / money stolen by fraudsters", tags: ["scam"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      options: [
        { id: "abroad", label: "Abroad", tags: ["abroad"] },
        { id: "russia", label: "In Russia", tags: ["russia"] },
        { id: "transit", label: "At the airport / station", tags: ["transit"] }
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
        { id: "nothing", label: "Nothing at all", tags: ["nothing"] }
      ]
    },
    {
      id: "phone",
      type: "single",
      text: "Is your phone and internet working?",
      options: [
        { id: "yes", label: "Yes, signal and internet available", tags: ["phone_yes"] },
        { id: "no_wifi", label: "Signal available, but no internet", tags: ["phone_no_wifi"] },
        { id: "no_phone", label: "Phone dead / broken", tags: ["phone_dead"] }
      ]
    }
  ],

  solutions: [
    {
      id: "stolen_abroad",
      title: "🦹 Wallet stolen abroad",
      description: "Immediately block all cards, file a police report, and find a way to get money from Russia.",
      conditions: { problem: ["stolen_wallet"], location: ["abroad"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 days",
      yield_estimate: "Money and recovery",
      tags: ["stolen", "wallet", "abroad"],
      steps: [
        "Block ALL cards via mobile banking or by calling the bank.",
        "Call the bank and report the theft. Request urgent reissue or transfer to a friend's account.",
        "File a police report. You'll need it for insurance and the bank.",
        "If you have theft insurance — call the insurer within 24 hours.",
        "Ask relatives to send money via Western Union, Zolotaya Korona, Contact, or Wise.",
        "Find a payout point (banks, post offices, exchange offices).",
        "If you have no money at all — contact the Russian consulate."
      ],
      warnings: [
        "Don't delay blocking cards — fraudsters can withdraw money in minutes.",
        "Western Union works in almost any country but charges up to 10% commission.",
        "Never keep your PIN with your card."
      ]
    },
    {
      id: "blocked_card",
      title: "🔒 Card blocked by bank",
      description: "The bank may have blocked your card due to suspicious activity. Can be unblocked remotely.",
      conditions: { problem: ["blocked_card"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15 min - 3 days",
      yield_estimate: "Unblocked",
      tags: ["blocked", "card", "bank"],
      steps: [
        "Call the bank's hotline (number on back of card or in app).",
        "Explain you're traveling. Ask to unblock or confirm transactions.",
        "If the call is expensive — use free Wi-Fi and call via WhatsApp, Telegram, or Skype.",
        "Many banks (Tinkoff, Sber, VTB) allow unblocking directly in the app.",
        "If permanently blocked — request a reissue.",
        "Temporarily use a second card or Apple Pay / Google Pay."
      ],
      warnings: [
        "Notify the bank about your trip in advance — this prevents blocking.",
        "Have at least 2 cards from different banks.",
        "Don't use cards in suspicious ATMs."
      ]
    },
    {
      id: "lost_card",
      title: "💳 Card lost",
      description: "If the card is simply lost (not stolen) — block it and order a replacement.",
      conditions: { problem: ["lost_card"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-7 days",
      yield_estimate: "New card",
      tags: ["lost", "card", "reissue"],
      steps: [
        "Block the card via mobile app or by phone.",
        "If you find the card within an hour — you can temporarily unblock it via the app.",
        "Request a reissue. Check if the bank can send it abroad.",
        "If you're on vacation — ask to send the card to your hotel.",
        "Temporarily use a second card or e-wallet."
      ],
      warnings: [
        "Don't try to use a blocked card if you find it — it will be confiscated by the ATM.",
        "Reissue cost abroad can be 50–100 USD."
      ]
    },
    {
      id: "no_cash_abroad",
      title: "💸 No cash, card doesn't work abroad",
      description: "Critical situation, but there are several ways to get money urgently.",
      conditions: { problem: ["no_cash"], location: ["abroad"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "hours",
      yield_estimate: "Money",
      tags: ["no_cash", "emergency", "transfer"],
      steps: [
        "Find free Wi-Fi and contact your bank via the app.",
        "Ask relatives to send money via Western Union, Zolotaya Korona, or MoneyGram.",
        "Find a payout point: banks, post offices, exchange offices, supermarkets.",
        "If you have crypto — exchange crypto for cash via P2P platforms.",
        "Contact the Russian consulate — they can arrange an emergency loan.",
        "If you have insurance — call your insurer."
      ],
      warnings: [
        "Don't take money from strangers on the street.",
        "Exchange offices at airports have the worst rates."
      ]
    },
    {
      id: "atm_error",
      title: "🏧 ATM swallowed card / didn't dispense money",
      description: "Don't panic — money is almost always returned. Document the incident.",
      conditions: { problem: ["atm_error"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "3-10 days",
      yield_estimate: "Refund",
      tags: ["atm", "error", "refund"],
      steps: [
        "Don't leave the ATM. Wait 1–2 minutes.",
        "Photograph the ATM screen, ATM number, and receipt.",
        "Call the bank that owns the ATM (number usually on sticker).",
        "Call your bank. Report ATM number, time, amount.",
        "If money was debited but not dispensed — the bank will refund within 3–10 days.",
        "If another bank's ATM swallowed your card — visit that bank's branch."
      ],
      warnings: [
        "Never re-enter PIN if the ATM 'froze'.",
        "If the ATM looks suspicious (extra stickers, strange devices) — skimming possible."
      ]
    },
    {
      id: "scam",
      title: "🎭 Fraud / unauthorized charges",
      description: "Act as quickly as possible — the sooner you contact the bank, the higher the chance of getting money back.",
      conditions: { problem: ["scam"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-45 days",
      yield_estimate: "Refund",
      tags: ["scam", "fraud", "chargeback"],
      steps: [
        "Immediately call the bank and report the fraud.",
        "Block the card in the app.",
        "Gather evidence: screenshots, receipts, emails.",
        "File a police report.",
        "File a chargeback with your bank. Deadline is up to 120 days.",
        "Save all URLs, website screenshots, transfer details.",
        "Change passwords for online banking and email."
      ],
      warnings: [
        "Banks don't always refund money in fraud cases.",
        "Never share SMS codes, CVC codes, or PIN over the phone.",
        "Chargeback can take up to 45 days."
      ]
    }
  ]
};

// ===== EXPORT =====
window.moneyDataEn = moneyDataEn;
