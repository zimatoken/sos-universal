// === LAWYER - ЗАЩИТА ПРАВ ПОТРЕБИТЕЛЕЙ (ENGLISH) ===

const consumerDataEn = {
  category: "consumer",
  icon: "🛒",
  title: "🛒 Consumer Rights",
  description: "Protection against unfair business practices and defective products",
  questions: [
    {
      id: "issue_type",
      text: "What is the consumer issue?",
      type: "single",
      options: [
        { id: "defective_product", label: "🔧 Defective or dangerous product", tags: ["product", "safety", "liability"] },
        { id: "false_advertising", label: "📢 False advertising or scam", tags: ["advertising", "deception", "refund"] },
        { id: "unfair_contract", label: "📄 Unfair contract terms", tags: ["contract", "terms", "cancellation"] },
        { id: "refund_denied", label: "💸 Refund request denied", tags: ["refund", "warranty", "complaint"] }
      ]
    },
    {
      id: "evidence",
      text: "Do you have evidence (receipts, photos, emails)?",
      type: "single",
      options: [
        { id: "strong_evidence", label: "✅ Yes, strong evidence", tags: ["evidence", "strong", "case"] },
        { id: "some_evidence", label: "📋 Some evidence, limited", tags: ["evidence", "moderate", "case"] },
        { id: "no_evidence", label: "❌ No evidence, verbal only", tags: ["no_evidence", "difficult", "weak"] }
      ]
    }
  ],
  solutions: [
    {
      id: "business_complaint",
      title: "📋 File Consumer Complaint",
      description: "File formal complaint with business and consumer protection agency",
      conditions: {
        evidence: ["strong_evidence", "some_evidence"]
      },
      tags: ["formal", "official", "free"],
      priority: "fast",
      reliability: "high",
      time_estimate: "2-8 weeks",
      steps: [
        "Submit written complaint to business customer service",
        "Include detailed description and evidence",
        "Request specific resolution (refund, replacement, compensation)",
        "Wait for business response (usually 14-30 days)",
        "If unsatisfied, file with consumer protection agency",
        "File with FTC (Federal Trade Commission) for US cases",
        "Include all documentation with formal complaint"
      ],
      warnings: [
        "Business must respond to formal complaints",
        "Keep copies of all correspondence",
        "Statute of limitations varies by type of claim"
      ]
    },
    {
      id: "chargeback",
      title: "💳 Credit Card Chargeback",
      description: "Request chargeback for fraudulent or unsatisfactory charges",
      conditions: {
        issue_type: ["false_advertising", "refund_denied"],
        evidence: ["strong_evidence", "some_evidence"]
      },
      tags: ["financial", "refund", "protection"],
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 months",
      steps: [
        "Contact credit card issuer immediately",
        "File dispute for the charge",
        "Provide evidence of fraud or unsatisfactory service",
        "Describe attempt to resolve with merchant",
        "Await chargeback decision (60-90 days)",
        "If approved, credit is temporary until final decision",
        "Permanent credit if chargeback is approved"
      ],
      warnings: [
        "Must dispute within 60 days of charge",
        "Temporary credit may be available during dispute",
        "Issuer may investigate with merchant"
      ]
    },
    {
      id: "class_action",
      title: "⚖️ Join Class Action Lawsuit",
      description: "Join with others affected by same issue against company",
      conditions: {
        issue_type: ["defective_product", "false_advertising", "unfair_contract"]
      },
      tags: ["legal", "collective", "compensation"],
      priority: "slow",
      reliability: "medium",
      time_estimate: "1-3 years",
      steps: [
        "Research if class action exists for your issue",
        "Register with class action law firm",
        "Provide evidence of your case",
        "Wait for class action to be certified",
        "Participate in litigation process if needed",
        "Receive settlement if case is successful",
        "Opt out if you prefer individual action"
      ],
      warnings: [
        "Class actions take years to resolve",
        "Settlements may be less than individual claims",
        "Cannot join if you opt out after deadline"
      ]
    }
  ]
};

// ===== EXPORT =====
window.consumerDataEn = consumerDataEn;
