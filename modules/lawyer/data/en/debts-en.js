// === LAWYER - ДОЛГИ И КОЛЛЕКТОРЫ (ENGLISH) ===

const debtsDataEn = {
  category: "debts",
  icon: "💳",
  title: "💳 Debts & Collectors",
  description: "Rights against debt collectors and debt management",
  questions: [
    {
      id: "debt_type",
      text: "What type of debt?",
      type: "single",
      options: [
        { id: "consumer", label: "🛒 Consumer debt (credit cards, loans)", tags: ["consumer", "bank", "interest"] },
        { id: "mortgage", label: "🏠 Mortgage arrears", tags: ["mortgage", "housing", "foreclosure"] },
        { id: "utility", label: "💡 Utility bills not paid", tags: ["utilities", "essential", "shutoff"] },
        { id: "payday", label: "💸 Payday loans / high interest", tags: ["payday", "predatory", "illegal"] }
      ]
    },
    {
      id: "collector",
      text: "Are debt collectors contacting you?",
      type: "single",
      options: [
        { id: "yes_harassment", label: "⚠️ Yes, they are harassing me", tags: ["harassment", "illegal", "protection"] },
        { id: "yes_legal", label: "✅ Yes, they are contacting legally", tags: ["legal", "negotiation", "settlement"] },
        { id: "no", label: "❌ No collectors yet", tags: ["prevention", "negotiation", "planning"] }
      ]
    }
  ],
  solutions: [
    {
      id: "harassment_protection",
      title: "🛡️ Stop Debt Collector Harassment",
      description: "Protect yourself from illegal debt collection practices",
      conditions: {
        collector: ["yes_harassment"]
      },
      tags: ["legal", "protection", "consumer"],
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 weeks",
      steps: [
        "Send written cease communication letter (certified mail)",
        "Cite Fair Debt Collection Practices Act (FDCPA)",
        "Record all calls and messages from collectors",
        "File complaint with CFPB or local consumer protection",
        "Keep logs of harassment evidence",
        "Demand validation of debt in writing"
      ],
      warnings: [
        "Collectors cannot threaten arrest or violence",
        "They cannot call before 8am or after 9pm",
        "They cannot discuss debt with third parties"
      ]
    },
    {
      id: "debt_negotiation",
      title: "🗣️ Negotiate Debt Settlement",
      description: "Negotiate with creditors to reduce debt or lower interest",
      conditions: {
        collector: ["yes_legal", "no"]
      },
      tags: ["negotiation", "financial", "settlement"],
      priority: "medium",
      reliability: "medium",
      time_estimate: "2-6 months",
      steps: [
        "Assess your total debt and income",
        "Contact creditors to explain hardship",
        "Propose reduced payment plan",
        "Request interest rate reduction",
        "Get settlement offer in writing",
        "Make payments according to agreed plan"
      ],
      warnings: [
        "Get settlement terms in writing before paying",
        "Don't pay collectors without written agreement",
        "Some settlements are reported as partial payment"
      ]
    },
    {
      id: "bankruptcy",
      title: "⚖️ Bankruptcy (Last Resort)",
      description: "File for bankruptcy to discharge debts (extreme measure)",
      conditions: {
        debt_type: ["consumer", "payday"],
        collector: ["yes_legal", "no"]
      },
      tags: ["legal", "extreme", "fresh_start"],
      priority: "slow",
      reliability: "high",
      time_estimate: "6-12 months",
      steps: [
        "Consult with bankruptcy attorney",
        "Complete credit counseling course (required)",
        "File bankruptcy petition (Chapter 7 or 13)",
        "Automatic stay stops all collection efforts",
        "Attend meeting of creditors",
        "Receive discharge of qualifying debts",
        "Rebuild credit after discharge"
      ],
      warnings: [
        "Bankruptcy severely impacts credit for 7-10 years",
        "Not all debts can be discharged",
        "Legal fees and credit counseling costs apply"
      ]
    }
  ]
};

// ===== EXPORT =====
window.debtsDataEn = debtsDataEn;
