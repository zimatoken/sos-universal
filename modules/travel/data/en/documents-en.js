// modules/travel/data/en/documents-en.js
// === MODULE: TRAVEL — DOCUMENTS ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "travel",
    category: "documents",
    version: "1.0.0",
    lang: "en",
    title: "📄 Documents",
    description: "Lost or stolen documents abroad",
    icon: "📄",
    color: "#0d9488"
  },

  questions: [
    {
      id: "doc_type",
      type: "single",
      text: "Which document was lost or stolen?",
      options: [
        { id: "passport", label: "🛂 Passport / ID", tags: ["passport"] },
        { id: "visa", label: "🛂 Visa / Schengen", tags: ["visa"] },
        { id: "tickets", label: "🎫 Tickets (flight / train / bus)", tags: ["tickets"] },
        { id: "insurance", label: "🩺 Insurance policy", tags: ["insurance"] },
        { id: "all", label: "📋 Multiple documents at once", tags: ["all"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where did the loss happen?",
      conditions: { doc_type: ["passport", "visa", "tickets", "insurance", "all"] },
      options: [
        { id: "abroad", label: "🌍 Abroad (in another country)", tags: ["abroad"] },
        { id: "transit", label: "✈️ At airport / station / on transport", tags: ["transit"] },
        { id: "hotel", label: "🏨 At hotel / rented accommodation", tags: ["hotel"] },
        { id: "street", label: "🚶 On the street / in a public place", tags: ["street"] },
        { id: "home", label: "🏠 At home (before departure)", tags: ["home"] }
      ]
    },
    {
      id: "copies",
      type: "single",
      text: "Do you have copies of the documents (photos on phone, scans)?",
      conditions: { doc_type: ["passport", "visa", "tickets", "insurance", "all"] },
      options: [
        { id: "yes", label: "✅ Yes, photos/scans on phone or cloud", tags: ["yes"] },
        { id: "no", label: "❌ No, nothing", tags: ["no"] },
        { id: "partial", label: "⚠️ Only part (e.g., only passport photo)", tags: ["partial"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "When did you discover the loss?",
      conditions: { doc_type: ["passport", "visa", "tickets", "insurance", "all"] },
      options: [
        { id: "urgent", label: "🔴 Right now / just now", tags: ["urgent"] },
        { id: "today", label: "🟡 Today, a few hours ago", tags: ["today"] },
        { id: "days", label: "🟢 Several days ago", tags: ["days"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. Passport lost abroad
    // ============================================================
    {
      id: "passport_abroad",
      title: "🛂 Passport lost abroad",
      description: "You need to obtain a temporary travel document (certificate for return) at the consulate or embassy.",
      conditions: { doc_type: ["passport"], location: ["abroad"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1-5 days",
      yield_estimate: "Certificate for return",
      tags: ["passport", "abroad", "documents"],
      steps: [
        "Immediately contact the nearest Russian consulate or embassy. Find the address on mid.ru or via the 'Consul' app.",
        "File a police report about the lost passport. Request a police report — it will be needed at the consulate.",
        "Prepare: 2-4 photos 3.5×4.5 cm, a copy of the lost passport (if available), a copy of your Russian internal passport, police report, return ticket (if available).",
        "Pay the consular fee (usually 50–100 USD, check locally).",
        "Receive the Certificate for Return to the Russian Federation — processing takes 1 to 5 business days.",
        "Upon arrival in Russia, immediately contact the MFC or Ministry of Internal Affairs to restore your international passport."
      ],
      warnings: [
        "Don't try to leave without documents — you won't be allowed on the flight.",
        "If stolen — first block your bank cards if they were with your passport.",
        "Stay calm: in 90% of cases, the problem is solved in 2–3 days."
      ]
    },
    // ============================================================
    // 2. Passport lost at airport / transport
    // ============================================================
    {
      id: "passport_transit",
      title: "🛂 Passport lost at airport / on transport",
      description: "High chance that the document was found by security or Lost & Found.",
      conditions: { doc_type: ["passport"], location: ["transit"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "hours-days",
      yield_estimate: "Document found",
      tags: ["passport", "transit", "documents"],
      steps: [
        "Immediately contact the Lost & Found of the airport/station. Usually at the terminal or on the website.",
        "Contact the airline or carrier — the document may be handed over to their office.",
        "If not found — contact the airport police to get a loss report.",
        "If you are in transit without a passport — contact the Russian consulate in the transit country.",
        "If found — collect it in person with ID or power of attorney."
      ],
      warnings: [
        "Don't leave the transit zone without your passport — you may not be able to return.",
        "Lost & Found usually keeps items for up to 30 days."
      ]
    },
    // ============================================================
    // 3. Visa / Schengen lost
    // ============================================================
    {
      id: "visa_lost",
      title: "🛂 Lost visa / Schengen",
      description: "A visa can only be restored by reapplying. In some cases, an emergency visa can be obtained.",
      conditions: { doc_type: ["visa"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3-10 days",
      yield_estimate: "New visa or Certificate for Return",
      tags: ["visa", "documents"],
      steps: [
        "Contact the consulate of the country that issued the visa. Explain the situation and request an emergency visa.",
        "Prepare: new passport (if it was lost too), photo, proof of travel purpose (tickets, hotel booking), insurance.",
        "If the visa was a multi-entry visa — check if it can be restored without a full procedure.",
        "If you have a valid Schengen visa in another passport — check with border officials if you can enter with it.",
        "As a last resort — contact the Russian consulate for a Certificate for Return and return home."
      ],
      warnings: [
        "A Schengen visa cannot be 'restored' — only a new one can be obtained.",
        "An emergency visa is only issued in cases of proven necessity (death of a relative, medical treatment, etc.)."
      ]
    },
    // ============================================================
    // 4. Tickets lost
    // ============================================================
    {
      id: "tickets_lost",
      title: "🎫 Lost tickets",
      description: "Electronic tickets are easy to restore. Paper tickets are harder, but still possible.",
      conditions: { doc_type: ["tickets"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "15-60 min",
      yield_estimate: "Tickets restored",
      tags: ["tickets", "documents"],
      steps: [
        "If the ticket is electronic — find it in email, airline app, or personal account. Print or save QR code to your phone.",
        "Contact the airline or agent by phone. Provide your full name, flight date, and booking number (PNR).",
        "If a paper ticket is lost — contact the carrier's ticket office with your passport. A duplicate will be issued.",
        "If a train ticket — restore via the Russian Railways app or ticket office with your passport.",
        "If you can't restore — buy a new ticket and refund the old one later (if the fare allows)."
      ],
      warnings: [
        "Some low-cost airlines charge a fee for re-issuing a boarding pass on site — up to 50 €.",
        "Always keep booking confirmations in the cloud (Google Drive, Telegram Saved Messages)."
      ]
    },
    // ============================================================
    // 5. Insurance policy lost
    // ============================================================
    {
      id: "insurance_lost",
      title: "🩺 Lost insurance policy",
      description: "An insurance policy can always be restored online or by phone.",
      conditions: { doc_type: ["insurance"] },
      scoring: { priority: "slow", reliability: "low" },
      time_estimate: "5-30 min",
      yield_estimate: "Policy restored",
      tags: ["insurance", "documents"],
      steps: [
        "Find the policy in your email — insurance companies always send it by email.",
        "Download the insurance company's app and log in.",
        "Call the insurance hotline. Provide your full name, date of birth, and purchase date — they will resend the policy.",
        "If you need the policy for a visa — print it at the nearest copy center.",
        "Save the policy in the cloud and send a copy to family just in case."
      ],
      warnings: [
        "Without a policy, you may not be allowed into Schengen — always have a copy on your phone.",
        "When seeing a doctor abroad, the insurance company may accept data by phone without a paper policy."
      ]
    },
    // ============================================================
    // 6. Lost documents without copies
    // ============================================================
    {
      id: "docs_no_copies",
      title: "📋 Lost documents without copies",
      description: "The situation is complicated but solvable. Gather as much information as possible from other sources.",
      conditions: { copies: ["no"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5-10 days",
      yield_estimate: "Documents restored",
      tags: ["copies", "documents"],
      steps: [
        "Ask relatives in Russia to take photos and send your internal passport, SNILS, birth certificate (if available).",
        "Check Telegram, WhatsApp, email — you may have sent document photos to someone before.",
        "Check cloud storage (Google Photos, iCloud, Yandex.Disk) — auto-backup may have saved the photos.",
        "At the consulate, you can apply without copies, but the process will take longer (up to 10 days).",
        "As a last resort, the consulate will contact the Russian Ministry of Internal Affairs to verify your identity."
      ],
      warnings: [
        "Always take photos of all documents before traveling and save them in the cloud.",
        "Send copies to a relative or friend — it will save you in a critical situation."
      ]
    }
  ]
});