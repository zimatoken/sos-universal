// === MODULE: CONSUMER PROTECTION (ENGLISH) ===
const consumerDataEn = {
  category: "consumer",
  title: "🛡️ Consumer Protection",
  description: "What to do when buying a defective product or receiving poor-quality services",

  questions: [
    {
      id: "consumer_issue",
      text: "What is your problem?",
      type: "single",
      options: [
        { id: "defective", label: "❌ Bought a defective / non-working product", tags: ["defective", "goods"] },
        { id: "service_bad", label: "🔧 Service was poor / not provided", tags: ["service", "bad"] },
        { id: "food_bad", label: "🍖 Spoiled food / food poisoning", tags: ["food", "poison"] },
        { id: "online_scam", label: "💻 Online purchase fraud / didn't receive item", tags: ["online", "scam"] },
        { id: "refund_refusal", label: "💸 Seller refuses to refund money", tags: ["refund", "dispute"] }
      ]
    },
    {
      id: "purchase_method",
      text: "How did you buy the product?",
      type: "single",
      options: [
        { id: "offline_store", label: "🏪 In a regular store (offline)", tags: ["offline"] },
        { id: "online_store", label: "🛒 In an online store", tags: ["online"] },
        { id: "marketplace", label: "📦 On a marketplace (Ozon, Wildberries, Yandex.Market)", tags: ["marketplace"] },
        { id: "private_person", label: "👤 From an individual / on Avito", tags: ["private"] }
      ]
    },
    {
      id: "has_receipt",
      text: "Do you have a receipt or other proof of purchase?",
      type: "single",
      options: [
        { id: "yes_receipt", label: "🧾 Yes, I have a receipt / electronic receipt", tags: ["receipt"] },
        { id: "yes_other", label: "📄 I have a bank statement / transfer record", tags: ["bank_statement"] },
        { id: "no_document", label: "❌ No receipt or other documents", tags: ["no_receipt"] }
      ]
    },
    {
      id: "product_type",
      text: "What product did you buy?",
      conditions: { consumer_issue: ["defective", "refund_refusal"] },
      options: [
        { id: "electronics", label: "📱 Electronics / appliances", tags: ["electronics"] },
        { id: "clothes", label: "👕 Clothing / footwear", tags: ["clothes"] },
        { id: "car", label: "🚗 Car / spare parts", tags: ["car"] },
        { id: "furniture", label: "🪑 Furniture / home goods", tags: ["furniture"] },
        { id: "other_goods", label: "📦 Other", tags: ["other"] }
      ]
    },
    {
      id: "time_passed",
      text: "How long since purchase?",
      conditions: { consumer_issue: ["defective", "refund_refusal"] },
      options: [
        { id: "14_days", label: "📅 Up to 14 days", tags: ["short"] },
        { id: "2_years", label: "📆 Up to 2 years (within warranty)", tags: ["warranty"] },
        { id: "over_2y", label: "📈 More than 2 years (out of warranty)", tags: ["out_of_warranty"] }
      ]
    },
    {
      id: "return_reason",
      text: "Why do you want to return the product?",
      conditions: { consumer_issue: ["refund_refusal"] },
      options: [
        { id: "not_satisfied", label: "Doesn't fit / wrong size / color", tags: ["change_mind"] },
        { id: "defect_found", label: "Found a defect", tags: ["defective"] },
        { id: "does_not_work", label: "Doesn't work / broken", tags: ["broken"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Return of goods of proper quality (14 days)
    // ========================================
    {
      id: "return_14_days",
      title: "🔄 Return of goods of proper quality within 14 days",
      description: "Within 14 days, you can return ANY product of proper quality (except the exclusion list).",
      conditions: { consumer_issue: ["defective"], time_passed: ["14_days"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-10 days",
      yield_estimate: "Money refund",
      tags: ["return", "14_days", "law"],
      steps: [
        "Check that the product is not on the non-returnable list (food, medicines, underwear, jewelry, etc.)",
        "Keep the receipt, packaging, labels — without a receipt you can return with other proof of purchase",
        "Write a return application (template on the Rospotrebnadzor website)",
        "Demand: refund (within 10 days) or exchange for a similar product",
        "If refused — complain to Rospotrebnadzor + file a claim in magistrate court (up to 100,000 RUB)",
        "Upon return: the seller must refund the money on the day of return (Article 22 of the Consumer Protection Law)"
      ],
      warnings: [
        "Electronics with opened packaging — can also be returned within 14 days if the appearance is not damaged",
        "If the product is of inadequate quality — there is no time limit (within warranty)",
        "DO NOT accept 'exchange only, no refund' — it's illegal",
        "If the seller asks for a reason for return — you are NOT obliged (Article 25 of the Consumer Protection Law)"
      ]
    },
    // ========================================
    // 2. Defective product — return or exchange
    // ========================================
    {
      id: "defective_return",
      title: "🛠️ Return or exchange of defective product",
      description: "If the product is defective or doesn't work — you have the right to a refund, exchange, or repair.",
      conditions: { consumer_issue: ["defective"], time_passed: ["2_years", "over_2y"], return_reason: ["defect_found", "does_not_work"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "7-30 days",
      yield_estimate: "Refund, exchange, or repair",
      tags: ["defective", "return", "exchange"],
      steps: [
        "Document the defect: photos, videos, description of the problem",
        "Contact the seller with a written claim (in 2 copies)",
        "Demand: refund, replacement with a similar product, free repair, or price reduction",
        "Review period — 10 days (Article 22 of the Consumer Protection Law)",
        "If the seller does not respond — file a complaint with Rospotrebnadzor",
        "If the product is expensive (> 100,000 RUB) — order an independent expert examination",
        "If refused — file a lawsuit + 1% penalty for each day of delay (Article 23 of the Consumer Protection Law)"
      ],
      warnings: [
        "If the seller conducts an examination at their expense — you have the right to be present",
        "If the examination shows the defect was your fault — you pay for it",
        "The warranty period for repairs should not exceed 45 days",
        "You can demand a penalty for each day of delay in fulfilling obligations"
      ]
    },
    // ========================================
    // 3. Withdrawal from online purchase (7 days)
    // ========================================
    {
      id: "online_return_7_days",
      title: "📦 Withdrawal from online purchase (7 days)",
      description: "When buying online, you can cancel the order within 7 days without giving a reason.",
      conditions: { consumer_issue: ["defective", "refund_refusal"], purchase_method: ["online_store", "marketplace"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-7 days",
      yield_estimate: "Money refund",
      tags: ["online", "7_days", "refund"],
      steps: [
        "Make sure the product is not on the exclusion list (see Article 26.1 of the Consumer Protection Law)",
        "Send a written refusal to the seller (in any form)",
        "Demand a refund within 10 days of submitting the request",
        "If the seller does not refund — complain to Rospotrebnadzor",
        "If the product has already been received — return it to the seller at your own expense (unless otherwise specified)",
        "If the seller does not respond — file a lawsuit"
      ],
      warnings: [
        "The 7-day period starts from the moment of receiving the product, not from the moment of ordering",
        "If the seller did not provide information on the return procedure — the period increases to 3 months",
        "The product must retain its appearance, packaging, and consumer properties",
        "If the product has been used — the seller may reduce the refund amount"
      ]
    },
    // ========================================
    // 4. Warranty repair
    // ========================================
    {
      id: "warranty_repair",
      title: "🔧 Warranty repair / replacement",
      description: "Product broke during the warranty period? The seller must repair or replace it.",
      conditions: { consumer_issue: ["defective"], time_passed: ["2_years"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10-45 days",
      yield_estimate: "Repair or replacement",
      tags: ["warranty", "repair", "law"],
      steps: [
        "Check the warranty card and warranty period (usually 1-2 years, sometimes more)",
        "Contact the seller (not the manufacturer!) with a demand to fix the defects",
        "Write a claim: demand FREE repair, replacement, refund, or price reduction",
        "Review period — 10 days (Article 22 of the Consumer Protection Law)",
        "If the product is being repaired for more than 45 days — demand replacement or refund",
        "If repair failed twice — demand replacement or refund",
        "If refused — complain to Rospotrebnadzor + file a lawsuit + 1% penalty for each day of delay"
      ],
      warnings: [
        "Keep ALL documents: receipt, warranty card, repair acceptance certificates, work orders",
        "If the seller sends to an 'authorized service' — it's legal, but the deadlines still count",
        "DO NOT pay for diagnosis during the warranty period — it's the seller's obligation",
        "If the product is expensive (> 100,000 RUB) — demand an independent expert examination in case of dispute"
      ]
    },
    // ========================================
    // 5. Poor quality service
    // ========================================
    {
      id: "service_complaint",
      title: "🛎️ Poor quality service — how to get a refund",
      description: "Service was poorly provided or not provided at all — you have the right to a refund and compensation.",
      conditions: { consumer_issue: ["service_bad"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10-30 days",
      yield_estimate: "Refund + compensation",
      tags: ["service", "refund", "law"],
      steps: [
        "Record evidence: photos, videos, acts, correspondence, receipts, contract",
        "Send a claim to the contractor: demand free elimination of defects, recalculation, or refund",
        "Review period — 10 days (Article 31 of the Consumer Protection Law)",
        "If the service was not provided at all — demand a full refund + penalty",
        "If you got food poisoning at a cafe/restaurant: medical certificate + complaint to Rospotrebnadzor + claim for compensation",
        "Travel services: upon flight/tour cancellation — demand full refund + compensation (Article 230-1 of the Civil Code)",
        "If refused — file a lawsuit + 3% penalty for each day of delay (Article 28 of the Consumer Protection Law)"
      ],
      warnings: [
        "The service contract is the main document. Without it, it's harder, but possible (by receipts, correspondence)",
        "If the contractor is a sole proprietor, you can recover personally from them",
        "Travel insurance — check the conditions, often covers cancellations",
        "If food poisoning: get tested, get a diagnosis — it's evidence"
      ]
    },
    // ========================================
    // 6. Online fraud
    // ========================================
    {
      id: "online_fraud",
      title: "💻 Online purchase fraud",
      description: "Didn't receive the item? Received a fake? Seller disappeared? Act fast.",
      conditions: { consumer_issue: ["online_scam"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "7-60 days",
      yield_estimate: "Money refund",
      tags: ["online", "fraud", "chargeback"],
      steps: [
        "Save EVERYTHING: website screenshots, correspondence, payment receipt, order number, seller details",
        "Write to the seller: demand a refund or delivery (email with read receipt)",
        "If the seller is on a marketplace (Ozon, Wildberries, Yandex.Market) — complain to the platform, they are responsible",
        "If paid by card — chargeback: contact your bank within 180 days of payment",
        "Complaint to Rospotrebnadzor (if the seller is from Russia) or the prosecutor's office",
        "Signs of fraud (seller disappeared, fake website) — file a police report (Article 159.3 of the Criminal Code)",
        "Lawsuit: if you know the seller's details, you can recover money + compensation"
      ],
      warnings: [
        "Chargeback: the bank will refund the money, but the seller may dispute it. Keep evidence.",
        "Marketplaces are responsible for sellers — demand a refund from the platform itself",
        "DO NOT transfer money to an individual's card when buying — only through secure services",
        "If the website is fake — check WHOIS, reviews, TIN/OGRN availability"
      ]
    },
    // ========================================
    // 7. Return without receipt
    // ========================================
    {
      id: "return_no_receipt",
      title: "🧾 Return without receipt",
      description: "Missing a receipt does not deprive you of the right to return the product. You can prove purchase by other means.",
      conditions: { consumer_issue: ["defective", "refund_refusal"], has_receipt: ["no_document"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-30 days",
      yield_estimate: "Refund or exchange",
      tags: ["no_receipt", "return", "law"],
      steps: [
        "Gather proof of purchase: bank statement, payment screenshot, witness testimony, warranty card, packaging with markings",
        "Contact the seller with a claim, stating that the receipt was lost but there is other evidence",
        "By law (Article 18 of the Consumer Protection Law), the seller must accept the product and conduct a quality check",
        "If the seller refuses to accept without a receipt — send a written claim demanding acceptance",
        "If refused — complaint to Rospotrebnadzor (they will conduct an inspection)",
        "If the seller continues to evade — file a lawsuit"
      ],
      warnings: [
        "Missing a receipt is not a ground for refusing to return a defective product",
        "The seller may conduct an examination at their own expense, but cannot refuse to accept the product",
        "If the seller demands a receipt — remind them of the right to prove purchase by other documents",
        "Keep all documents related to the purchase, even if you don't have the receipt"
      ]
    }
  ]
};

// ===== EXPORT =====
window.consumerDataEn = consumerDataEn;
