const documentsDataEn = {
  category: "documents",
  title: "📄 Documents",
  description: "Emergency: Documents",
  questions: [
    {
      id: "doc_type",
      type: "single",
      text: "Which document is lost or stolen?",
      options: [
        { id: "passport", label: "Passport", tags: ["passport"] },
        { id: "visa", label: "Visa / Schengen", tags: ["visa"] },
        { id: "tickets", label: "Tickets (flight / train / bus)", tags: ["tickets"] },
        { id: "insurance", label: "Insurance policy", tags: ["insurance"] },
        { id: "all", label: "Multiple documents at once", tags: ["all"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where did the loss occur?",
      options: [
        { id: "abroad", label: "Abroad (in another country)", tags: ["abroad"] },
        { id: "transit", label: "At airport / station / in transport", tags: ["transit"] },
        { id: "hotel", label: "At hotel / rental accommodation", tags: ["hotel"] },
        { id: "street", label: "On the street / public place", tags: ["street"] },
        { id: "home", label: "At home (before departure)", tags: ["home"] }
      ]
    },
    {
      id: "copies",
      type: "single",
      text: "Do you have copies of documents (photos on phone, scans)?",
      options: [
        { id: "yes", label: "Yes, photos/scans on phone or cloud", tags: ["yes"] },
        { id: "no", label: "No, nothing", tags: ["no"] },
        { id: "partial", label: "Only partial (e.g. only passport photo)", tags: ["partial"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "When did you discover the loss?",
      options: [
        { id: "urgent", label: "Right now / just now", tags: ["urgent"] },
        { id: "today", label: "Today, a few hours ago", tags: ["today"] },
        { id: "days", label: "A few days ago", tags: ["days"] }
      ]
    }
  ],
  solutions: [
    {
      id: "passport_abroad",
      title: "Passport lost abroad",
      conditions: { "doc_type": ["passport"], "location": ["abroad"] },
      tags: ["doc_type", "location", "documents"],
      description: "You need to obtain an emergency travel document (Certificate of Return) at the Russian consulate or embassy urgently.",
      steps: [
        "Contact the nearest Russian consulate or embassy immediately. Find the address on mid.ru or via the 'Konsul' app.",
        "File a loss report at the local police station. Request a police report — you'll need it at the consulate.",
        "Prepare: 2-4 photos 3.5×4.5 cm, copy of lost passport (if available), copy of internal Russian passport, police report, return ticket (if any).",
        "Pay the consular fee (usually 50–100 USD, confirm on site).",
        "Obtain a Certificate for Return to the Russian Federation — processing takes 1 to 5 business days.",
        "Upon arrival in Russia, immediately apply for a new passport at the MFC or Ministry of Internal Affairs."
      ],
      warnings: [
        "Do not attempt to leave without documents — you won't be allowed on the flight.",
        "If stolen — block your bank cards first if they were with the passport.",
        "Stay calm: in 90% of cases the issue is resolved within 2–3 days."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "1-5 days",
      yield_estimate: "Solution found"
    },
    {
      id: "passport_transit",
      title: "Passport lost at airport / in transit",
      conditions: { "doc_type": ["passport"], "location": ["transit"] },
      tags: ["doc_type", "location", "documents"],
      description: "High probability the document was found by security or lost & found.",
      steps: [
        "Immediately contact the airport / station Lost & Found service. Usually located in the terminal or on the website.",
        "Contact the airline or carrier — they may have transferred the document to their office.",
        "If not found — contact the airport police for a loss certificate.",
        "If you're in transit without a passport — contact the Russian consulate in the transit country.",
        "If the passport is found — collect it in person with ID or by power of attorney."
      ],
      warnings: [
        "Do not leave the transit zone without a passport — you may not be allowed back in.",
        "Lost & Found usually keeps items for up to 30 days."
      ],
      priority: "medium",
      reliability: "medium",
      time_estimate: "hours-days",
      yield_estimate: "Solution found"
    },
    {
      id: "visa_lost",
      title: "Lost visa / Schengen",
      conditions: { "doc_type": ["visa"] },
      tags: ["doc_type", "documents"],
      description: "A visa can only be restored through re-application. In some cases an emergency visa is possible.",
      steps: [
        "Contact the consulate of the country that issued the visa. Explain the situation and request an emergency visa.",
        "Prepare: new passport (if also lost), photo, proof of travel purpose (tickets, hotel booking), insurance.",
        "If it was a multiple-entry visa — check if it can be reissued without full procedure.",
        "If you have a valid Schengen in another passport — check with border guards if entry is possible.",
        "In extreme cases — contact the Russian consulate for a Certificate of Return to go home."
      ],
      warnings: [
        "A Schengen visa cannot be 'restored' — only a new one can be issued.",
        "Emergency visas are only granted for proven necessity (death of relative, medical treatment, etc.)."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "3-10 days",
      yield_estimate: "Solution found"
    },
    {
      id: "tickets_lost",
      title: "Lost tickets",
      conditions: { "doc_type": ["tickets"] },
      tags: ["doc_type", "documents"],
      description: "Electronic tickets are easily restored. Paper tickets are harder but also possible.",
      steps: [
        "If electronic — find it in email, airline app, or personal account. Print or save the QR code on your phone.",
        "Contact the airline or agent by phone. Provide full name, flight date, and booking reference (PNR).",
        "If paper ticket lost — contact the carrier's ticket office with your passport. They will issue a duplicate.",
        "If Russian Railways ticket — restore via the RZD app or ticket office using your passport.",
        "If unable to restore — buy a new ticket and refund the old one later (if fare allows)."
      ],
      warnings: [
        "Some low-cost carriers charge for reissuing boarding passes at the airport — up to 50 €.",
        "Always save booking confirmations in the cloud (Google Drive, Telegram Saved Messages)."
      ],
      priority: "slow",
      reliability: "low",
      time_estimate: "15-60 min",
      yield_estimate: "Solution found"
    },
    {
      id: "insurance_lost",
      title: "Lost insurance policy",
      conditions: { "doc_type": ["insurance"] },
      tags: ["doc_type", "documents"],
      description: "An insurance policy can always be restored online or by phone.",
      steps: [
        "Find the policy in email — insurance companies always send it there.",
        "Download the insurance company's app and log in.",
        "Call the insurance hotline. Provide full name, date of birth, and purchase date — they will resend the policy.",
        "If the policy is needed for a visa — print it at the nearest copy center.",
        "Save the policy in the cloud and send a copy to relatives just in case."
      ],
      warnings: [
        "Without a policy you may not be allowed into the Schengen area — always have a copy on your phone.",
        "When seeing a doctor abroad, the insurance company may accept data by phone without a paper policy."
      ],
      priority: "slow",
      reliability: "low",
      time_estimate: "5-30 min",
      yield_estimate: "Solution found"
    },
    {
      id: "docs_no_copies",
      title: "Document loss without copies",
      conditions: { "copies": ["no"] },
      tags: ["copies", "documents"],
      description: "The situation is complicated but solvable. Gather as much information as possible from other sources.",
      steps: [
        "Ask relatives in Russia to photograph and send your internal passport, SNILS, birth certificate (if available).",
        "Check Telegram, WhatsApp, email — you may have sent someone photos of documents earlier.",
        "Check cloud storage (Google Photos, iCloud, Yandex.Disk) — auto-backup may have saved photos.",
        "At the consulate you can apply without copies, but the process will take longer (up to 10 days).",
        "In extreme cases the consulate will contact the Russian Ministry of Internal Affairs to confirm your identity."
      ],
      warnings: [
        "Always take photos of all documents before traveling and save them in the cloud.",
        "Send copies to a relative or friend — this will save you in a critical situation."
      ],
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 days",
      yield_estimate: "Solution found"
    }
  ]
}

// ===== EXPORT =====
window.documentsDataEn = documentsDataEn;
