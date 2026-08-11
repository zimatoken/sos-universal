// === MODULE: TRAVEL — DOCUMENTS (EN) ===
const documentsDataEn = {
  category: "documents",
  title: "📄 Documents",
  description: "Lost passport, visa, tickets, insurance — step-by-step action plan",

  questions: [
    {
      id: "doc_type",
      type: "single",
      text: "Which document was lost or stolen?",
      options: [
        { id: "passport", label: "Passport / ID card", tags: ["passport"] },
        { id: "visa", label: "Visa / Schengen", tags: ["visa"] },
        { id: "tickets", label: "Tickets (flight / train / bus)", tags: ["tickets"] },
        { id: "insurance", label: "Insurance policy", tags: ["insurance"] },
        { id: "all", label: "Several documents at once", tags: ["all"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where did the loss occur?",
      options: [
        { id: "abroad", label: "Abroad (in another country)", tags: ["abroad"] },
        { id: "transit", label: "At the airport / station / in transport", tags: ["transit"] },
        { id: "hotel", label: "At the hotel / rental accommodation", tags: ["hotel"] },
        { id: "street", label: "On the street / in a public place", tags: ["street"] },
        { id: "home", label: "At home (before departure)", tags: ["home"] }
      ]
    },
    {
      id: "copies",
      type: "single",
      text: "Do you have copies of your documents (photos on phone, scans)?",
      options: [
        { id: "yes", label: "Yes, I have photos/scans on phone or cloud", tags: ["yes"] },
        { id: "no", label: "No, nothing", tags: ["no"] },
        { id: "partial", label: "Only some (e.g., only passport photo)", tags: ["partial"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "When did you discover the loss?",
      options: [
        { id: "urgent", label: "Right now / just now", tags: ["urgent"] },
        { id: "today", label: "Today, a few hours ago", tags: ["today"] },
        { id: "days", label: "Several days ago", tags: ["days"] }
      ]
    }
  ],

  solutions: [
    {
      id: "passport_abroad",
      title: "🛂 Passport lost abroad",
      description: "You urgently need to obtain a temporary travel document (certificate for return) at the consulate or embassy of Russia.",
      conditions: { doc_type: ["passport"], location: ["abroad"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-5 days",
      yield_estimate: "Certificate for return",
      tags: ["passport", "abroad", "consulate"],
      steps: [
        "Immediately contact the nearest consulate or embassy of Russia. Find the address on mid.ru or through the 'Consul' app.",
        "File a police report about the passport loss. Ask for a police report — you will need it at the consulate.",
        "Prepare: 2-4 photos 3.5×4.5 cm, a copy of the lost passport (if available), a copy of your internal Russian passport, police report, return ticket (if available).",
        "Pay the consular fee (usually 50–100 USD, check locally).",
        "Receive the certificate for return to Russia (СРВП) — processing takes 1 to 5 business days.",
        "Upon arrival in Russia, immediately contact the MFC or the Ministry of Internal Affairs to restore your international passport."
      ],
      warnings: [
        "Do not try to leave without documents — you will not be allowed on the flight.",
        "If stolen — first block your bank cards if they were with your passport.",
        "Stay calm: in 90% of cases, the problem is solved in 2–3 days."
      ]
    },
    {
      id: "passport_transit",
      title: "🛄 Passport lost at the airport / in transit",
      description: "There's a high chance the document was found by security or lost & found.",
      conditions: { doc_type: ["passport"], location: ["transit"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "hours-days",
      yield_estimate: "Passport return",
      tags: ["passport", "transit", "lost_found"],
      steps: [
        "Immediately contact the Lost & Found office of the airport / station.",
        "Contact the airline or carrier — the document may have been handed to their office.",
        "If not found — contact the airport police to get a loss report.",
        "If you are in transit without a passport — contact the Russian consulate in the transit country.",
        "If the passport is found — collect it in person with an ID or power of attorney."
      ],
      warnings: [
        "Do not leave the transit zone without a passport — you may not be allowed back.",
        "Lost & Found usually keeps items for up to 30 days."
      ]
    },
    {
      id: "visa_lost",
      title: "🛂 Visa / Schengen lost",
      description: "A visa can only be restored by reapplying. In some cases, you can get an emergency visa.",
      conditions: { doc_type: ["visa"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "3-10 days",
      yield_estimate: "Emergency visa or denial",
      tags: ["visa", "schengen", "consulate"],
      steps: [
        "Contact the consulate of the country that issued the visa. Explain the situation and request an emergency visa.",
        "Prepare: a new passport (if the old one was lost), photos, proof of travel purpose (tickets, hotel booking), insurance.",
        "If you had a multi-entry visa — check if it can be restored without the full procedure.",
        "If you have a valid Schengen visa in another passport — check with border control if you can enter with it.",
        "As a last resort — contact the Russian consulate to get a certificate for return and go back home."
      ],
      warnings: [
        "A Schengen visa cannot be 'restored' — you must get a new one.",
        "Emergency visas are only issued for proven necessity (death of a relative, medical treatment, etc.)."
      ]
    },
    {
      id: "tickets_lost",
      title: "🎫 Tickets lost",
      description: "E-tickets are easy to restore. Paper tickets are harder but still possible.",
      conditions: { doc_type: ["tickets"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "15-60 min",
      yield_estimate: "Ticket recovery",
      tags: ["tickets", "recovery", "online"],
      steps: [
        "If the ticket is electronic — find it in your email, airline app, or personal account.",
        "Contact the airline or agent by phone. Provide your full name, flight date, and booking number (PNR).",
        "If a paper ticket is lost — contact the carrier's ticket office with your passport. They will issue a duplicate.",
        "If it's a train ticket — restore it through the railway app or ticket office using your passport.",
        "If you can't restore it — buy a new ticket and request a refund for the old one later (if the fare allows)."
      ],
      warnings: [
        "Some low-cost airlines charge a fee for reprinting a boarding pass on-site — up to 50 €.",
        "Always save booking confirmations in the cloud (Google Drive, Telegram Saved Messages)."
      ]
    },
    {
      id: "insurance_lost",
      title: "🏥 Insurance policy lost",
      description: "An insurance policy can always be restored online or by phone.",
      conditions: { doc_type: ["insurance"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-30 min",
      yield_estimate: "Policy duplicate",
      tags: ["insurance", "health", "recovery"],
      steps: [
        "Find the policy in your email — insurance companies always send it to your inbox.",
        "Download the insurance company's app and log in.",
        "Call the insurance company's hotline. Provide your full name, date of birth, and purchase date — they will resend the policy.",
        "If you need the policy for a visa — print it at the nearest copy center.",
        "Save the policy in the cloud and send a copy to relatives just in case."
      ],
      warnings: [
        "Without insurance, you may be denied entry to Schengen — always have a copy on your phone.",
        "When seeing a doctor abroad, the insurance company may accept data by phone without a paper policy."
      ]
    },
    {
      id: "docs_no_copies",
      title: "📵 Documents lost without copies",
      description: "The situation is complicated but solvable. Gather as much information as possible from other sources.",
      conditions: { copies: ["no"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "5-10 days",
      yield_estimate: "Document restoration",
      tags: ["no_copies", "emergency", "consulate"],
      steps: [
        "Ask relatives in Russia to photograph and send your internal passport, SNILS, birth certificate (if available).",
        "Check Telegram, WhatsApp, email — you may have previously sent photos of documents to someone.",
        "Check cloud storage (Google Photos, iCloud, Yandex.Disk) — auto-backup may have saved photos.",
        "At the consulate, you can apply without copies, but the process will take longer (up to 10 days).",
        "As a last resort, the consulate will contact the Russian Ministry of Internal Affairs to verify your identity."
      ],
      warnings: [
        "Always take photos of all documents before traveling and save them in the cloud.",
        "Send copies to a relative or friend — it will save you in a critical situation."
      ]
    }
  ]
};

// ===== EXPORT =====
window.documentsDataEn = documentsDataEn;
