// modules/travel/data/en/money-en.js
// === MODULE: TRAVEL — MONEY AND CARDS ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "travel",
    category: "money",
    version: "1.0.0",
    lang: "en",
    title: "💳 Money and Cards",
    description: "Theft, loss, card blocking, fraud — what to do",
    icon: "💳",
    color: "#0d9488"
  },

  questions: [
    {
      id: "problem",
      type: "single",
      text: "What happened to your money or cards?",
      options: [
        { id: "stolen_wallet", label: "👛 Wallet/purse with money and cards stolen", tags: ["stolen_wallet"] },
        { id: "blocked_card", label: "🔒 Card blocked by bank", tags: ["blocked_card"] },
        { id: "lost_card", label: "🔍 Lost card", tags: ["lost_card"] },
        { id: "no_cash", label: "💸 No cash, and card doesn't work", tags: ["no_cash"] },
        { id: "atm_error", label: "🏧 ATM swallowed card / didn't dispense cash", tags: ["atm_error"] },
        { id: "scam", label: "🎭 Scammed / money stolen by fraudsters", tags: ["scam"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      conditions: { problem: ["stolen_wallet", "blocked_card", "lost_card", "no_cash", "atm_error", "scam"] },
      options: [
        { id: "abroad", label: "🌍 Abroad", tags: ["abroad"] },
        { id: "russia", label: "🇷🇺 In Russia", tags: ["russia"] },
        { id: "transit", label: "✈️ At airport / train station", tags: ["transit"] }
      ]
    },
    {
      id: "backup",
      type: "single",
      text: "Do you have backup funds?",
      conditions: { problem: ["stolen_wallet", "blocked_card", "lost_card", "no_cash", "atm_error", "scam"] },
      options: [
        { id: "second_card", label: "💳 Second card from another bank", tags: ["second_card"] },
        { id: "cash_hidden", label: "💵 Hidden cash", tags: ["cash_hidden"] },
        { id: "friend", label: "👫 Friends / acquaintances nearby", tags: ["friend"] },
        { id: "nothing", label: "❌ Nothing at all", tags: ["nothing"] }
      ]
    },
    {
      id: "phone",
      type: "single",
      text: "Is your phone and internet working?",
      conditions: { problem: ["stolen_wallet", "blocked_card", "lost_card", "no_cash", "atm_error", "scam"] },
      options: [
        { id: "yes", label: "📱 Yes, connection and internet available", tags: ["yes"] },
        { id: "no_wifi", label: "📶 Connection available, but no internet", tags: ["no_wifi"] },
        { id: "no_phone", label: "📵 Phone not working / dead", tags: ["no_phone"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. Wallet stolen abroad
    // ============================================================
    {
      id: "stolen_abroad",
      title: "👛 Wallet stolen abroad",
      description: "Immediately block all cards, contact the police, and find a way to get money.",
      conditions: { problem: ["stolen_wallet"], location: ["abroad"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-3 days",
      yield_estimate: "Cards blocked and money received",
      tags: ["stolen_wallet", "abroad", "emergency"],
      steps: [
        "Block ALL cards via mobile banking app or by phone.",
        "Call your bank and report the theft. Request emergency card reissue or transfer to a friend's account.",
        "Contact local police. File a theft report — you'll need it for insurance and the bank.",
        "If you have theft insurance — call the insurance company within 24 hours.",
        "Ask relatives to send money via Western Union, Zolotaya Korona, Contact, or Wise.",
        "Find the nearest transfer pickup point (usually at banks, post offices, exchange offices).",
        "If you have no money at all — contact the Russian consulate. They can arrange a small loan for return."
      ],
      warnings: [
        "Don't delay card blocking — scammers can withdraw money in minutes.",
        "Western Union works almost everywhere, but fees are high (up to 10%).",
        "Never keep your PIN with your card."
      ]
    },
    // ============================================================
    // 2. Card blocked by bank
    // ============================================================
    {
      id: "blocked_card",
      title: "🔒 Card blocked by bank",
      description: "The bank may have blocked your card due to suspicious transactions abroad. It can be unblocked remotely.",
      conditions: { problem: ["blocked_card"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15 min - 3 days",
      yield_estimate: "Card unblocked",
      tags: ["blocked_card", "bank"],
      steps: [
        "Call the bank's hotline. The number is on the back of the card or in the app.",
        "Explain that you are traveling. Ask to unblock or confirm transactions.",
        "If the call is paid — use free Wi-Fi and call via WhatsApp, Telegram, or Skype.",
        "Many banks allow unblocking directly in the app — check the 'Security' section.",
        "If the card is permanently blocked — request a reissue. They may send it abroad by courier.",
        "Temporarily use a second card or Apple Pay / Google Pay with another card."
      ],
      warnings: [
        "Notify your bank about your trip before leaving — it prevents blocking.",
        "Have at least 2 cards from different banks.",
        "Don't use your card in suspicious ATMs or terminals."
      ]
    },
    // ============================================================
    // 3. Card lost
    // ============================================================
    {
      id: "lost_card",
      title: "🔍 Card lost",
      description: "If the card is simply lost (not stolen), the actions are simpler — block it and order a new one.",
      conditions: { problem: ["lost_card"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1-7 days",
      yield_estimate: "Card reissued",
      tags: ["lost_card", "bank"],
      steps: [
        "Block the card in the banking app or by phone. Specify 'Lost' as the reason.",
        "If you find the card within an hour — you can temporarily unblock it via the app.",
        "Order a reissue. Check if the bank can send it abroad.",
        "If you're on vacation — ask to send the card to your hotel or to friends.",
        "Temporarily use a second card, e-wallet, or transfers from Russia."
      ],
      warnings: [
        "Don't try to use a found card after blocking — it will be confiscated.",
        "Reissue cost abroad can reach 50–100 USD."
      ]
    },
    // ============================================================
    // 4. No cash, card doesn't work abroad
    // ============================================================
    {
      id: "no_cash_abroad",
      title: "💸 No cash, card doesn't work abroad",
      description: "Critical situation, but there are several ways to get money urgently.",
      conditions: { problem: ["no_cash"], location: ["abroad"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "hours",
      yield_estimate: "Money received",
      tags: ["no_cash", "abroad", "emergency"],
      steps: [
        "Find free Wi-Fi and contact your bank via the app.",
        "Ask relatives to send money via Western Union, Zolotaya Korona, Contact, or MoneyGram.",
        "Find a pickup point: banks, post offices, exchange offices, supermarkets.",
        "If you have a crypto wallet — exchange crypto for cash via P2P platforms.",
        "Contact the Russian consulate — they can arrange an emergency loan for return.",
        "If you have insurance — call the insurance company, they may advance expenses."
      ],
      warnings: [
        "Don't take money from strangers on the street — it's 100% a scam.",
        "Exchange offices at airports give the worst rates — find a city exchange office."
      ]
    },
    // ============================================================
    // 5. ATM swallowed card / didn't dispense cash
    // ============================================================
    {
      id: "atm_error",
      title: "🏧 ATM swallowed card / didn't dispense cash",
      description: "Don't panic — money is almost always returned. Just document the incident.",
      conditions: { problem: ["atm_error"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "3-10 days",
      yield_estimate: "Money or card returned",
      tags: ["atm_error", "bank"],
      steps: [
        "Don't leave the ATM. Wait 1–2 minutes — the card may return automatically.",
        "Take a photo of the ATM screen, ATM number, and receipt (if issued).",
        "Call the bank that owns the ATM. Report the problem.",
        "Call your bank. Provide: ATM number, time, amount.",
        "If money was deducted but not dispensed — the bank will return it within 3–10 business days.",
        "If the ATM swallowed your card — go to that bank's branch with your passport."
      ],
      warnings: [
        "Never re-enter your PIN if the ATM appears 'frozen'.",
        "If the ATM looks suspicious (extra stickers, strange devices) — skimming is possible."
      ]
    },
    // ============================================================
    // 6. Scam / unauthorized charge
    // ============================================================
    {
      id: "scam",
      title: "🎭 Scam / unauthorized charge",
      description: "Act as quickly as possible — the sooner you contact the bank, the higher the chance of getting money back.",
      conditions: { problem: ["scam"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-45 days",
      yield_estimate: "Money returned",
      tags: ["scam", "fraud", "chargeback"],
      steps: [
        "Immediately call your bank and report the fraud. Request card blocking and transaction dispute.",
        "Block the card in the app to prevent further charges.",
        "Gather evidence: screenshots of conversations, receipts, emails, device photos.",
        "File a police report. In some cases, the bank requires it for chargeback.",
        "File a chargeback through the bank. The deadline is usually up to 120 days from the transaction.",
        "If fraud occurred online — save all URLs and screenshots.",
        "Change passwords for online banking, email, and all related services."
      ],
      warnings: [
        "The bank may not always return money in fraud cases — depends on the transaction type.",
        "Never share SMS codes, CVC code, or PIN over the phone — even with 'bank employees'.",
        "Chargeback can take up to 45 days."
      ]
    }
  ]
});