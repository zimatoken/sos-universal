// === MODULE: DEBTS AND COLLECTORS (ENGLISH) ===
const debtsDataEn = {
  category: "debts",
  title: "💸 Debts and Collectors",
  description: "What to do if you have debt, collectors are calling, or bailiffs are acting",

  questions: [
    {
      id: "debt_type",
      text: "What type of debt do you have?",
      type: "single",
      options: [
        { id: "bank_loan", label: "Bank loan / microfinance", tags: ["bank", "loan"] },
        { id: "collector", label: "Collectors are calling / threatening", tags: ["collector", "harassment"] },
        { id: "bailiff", label: "Bailiffs have seized account / property", tags: ["bailiff", "seizure"] },
        { id: "bankruptcy", label: "More debt than I can pay", tags: ["bankruptcy", "insolvency"] },
        { id: "court_order", label: "Received a court order for collection", tags: ["court", "order"] }
      ]
    },
    {
      id: "loan_source",
      text: "Where did you take the loan?",
      condition: { debt_type: ["bank_loan", "bankruptcy"] },
      options: [
        { id: "bank", label: "Bank (Sber, Tinkoff, VTB, etc.)", tags: ["bank"] },
        { id: "mfo", label: "Microfinance organization (MFO)", tags: ["mfo"] },
        { id: "credit_card", label: "Credit card", tags: ["credit_card"] },
        { id: "multiple", label: "Multiple loans from different places", tags: ["multiple"] }
      ]
    },
    {
      id: "overdue",
      text: "Is there a missed payment?",
      options: [
        { id: "no_overdue", label: "No, I pay on time", tags: ["no_overdue"] },
        { id: "up_to_3_months", label: "Up to 3 months overdue", tags: ["short_overdue"] },
        { id: "over_3_months", label: "More than 3 months overdue", tags: ["long_overdue"] }
      ]
    },
    {
      id: "collector_method",
      text: "What exactly are the collectors doing?",
      condition: { debt_type: ["collector"] },
      options: [
        { id: "calls", label: "Calling relatives / workplace", tags: ["calls", "harassment"] },
        { id: "threats", label: "Threats of physical harm", tags: ["threats", "violence"] },
        { id: "door", label: "Came to my home / neighbors", tags: ["door", "intimidation"] },
        { id: "fake_docs", label: "Presenting fake documents / court decisions", tags: ["fake", "fraud"] }
      ]
    },
    {
      id: "loan_amount",
      text: "What is the total debt amount?",
      condition: { debt_type: ["bank_loan", "bankruptcy", "court_order"] },
      options: [
        { id: "small", label: "Up to 500,000 RUB", tags: ["small"] },
        { id: "medium", label: "500,000 – 1,000,000 RUB", tags: ["medium"] },
        { id: "large", label: "More than 1,000,000 RUB", tags: ["large"] }
      ]
    },
    {
      id: "court_order_status",
      text: "Has the court order already taken effect?",
      condition: { debt_type: ["court_order"] },
      options: [
        { id: "not_yet", label: "No, I filed objections within 10 days", tags: ["dispute"] },
        { id: "entered", label: "Yes, it has already taken effect", tags: ["active"] }
      ]
    }
  ],

  solutions: [
    {
      id: "collector_illegal",
      title: "🛑 Illegal actions of collectors",
      description: "Collectors have NO RIGHT to threaten, insult, or call relatives. This is a criminal offense.",
      conditions: { debt_type: ["collector"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Protection + compensation",
      tags: ["collector", "illegal", "law"],
      steps: [
        "Record ALL contacts: record calls, save SMS, screenshots of messengers",
        "Demand from collectors: license number, organization name, basis of claims",
        "If they call your work/relatives — it's a violation (Article 8 of the Federal Law 'On Collection Activities')",
        "If threatened — file a police report (Article 119 of the Criminal Code — threats of murder or harm)",
        "Complaint to the Central Bank of Russia (if collectors act for a bank) + Rospotrebnadzor",
        "Complaint to the FSSP (if collectors impersonate bailiffs)",
        "Lawsuit for protection of honor and dignity + moral damages"
      ],
      warnings: [
        "Collectors have NO RIGHT to: call after 22:00 and before 8:00, more than once a day, insult, threaten",
        "DO NOT sign anything under pressure — it's fraud",
        "If collectors come to your home — DO NOT let them in without a court order and bailiffs",
        "A recording of a conversation (if you are a participant) is legal evidence in court"
      ]
    },
    {
      id: "bailiff_help",
      title: "⚡ Actions of bailiffs",
      description: "Bailiffs have the right to collect debt, but only within the law. Check legality.",
      conditions: { debt_type: ["bailiff"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-6 months",
      yield_estimate: "Debt reduction or protection",
      tags: ["bailiff", "seizure", "law"],
      steps: [
        "Check the enforcement proceeding on the FSSP website (fssp.gov.ru) — enter your name",
        "Check if there is a court order or writ of execution. If not — bailiffs are acting illegally",
        "If there is an enforcement proceeding — check the amount (should not exceed debt + fines)",
        "Account seizure: leave a living wage (since 2024 — at least the regional subsistence minimum)",
        "If everything is seized — file an application with the bailiff to release the subsistence minimum from seizure",
        "If the debt is on a loan — contact the bank for restructuring (payment reduction, deferment)",
        "If unable to pay — individual bankruptcy (if debt > 500,000 RUB)"
      ],
      warnings: [
        "Bailiffs have NO RIGHT to seize the only housing (except mortgage)",
        "Cannot seize: food, clothing, child benefits, disability pension",
        "The only car — can be seized, but not always sold (if needed for work)",
        "If bailiffs violate — complaint to the senior bailiff → prosecutor → court"
      ]
    },
    {
      id: "bankruptcy_personal",
      title: "📉 Individual bankruptcy",
      description: "If debts exceed 500,000 RUB and you cannot pay — bankruptcy writes off debts.",
      conditions: { debt_type: ["bankruptcy"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "6-18 months",
      yield_estimate: "Debt write-off",
      tags: ["bankruptcy", "law", "financial"],
      steps: [
        "Check the debt amount: must be > 500,000 RUB (including fines, penalties)",
        "Prepare documents: income statements, account statements, property documents, creditor list",
        "Contact a financial manager (choose from the register on the FSSP website)",
        "File an application with the arbitration court at your place of residence",
        "Pay the state fee (6,000 RUB) + contribution to the manager (from 25,000 RUB)",
        "During the procedure (6-12 months): the manager sells property, negotiates with creditors",
        "Upon completion — write-off of all debts (except alimony, compensation for harm to health/life)"
      ],
      warnings: [
        "After bankruptcy: 5 years you cannot be a director, sole proprietor, open bank accounts — it's hard",
        "The only housing — will remain (except mortgage apartment)",
        "If you hid property or income — criminal liability (Article 197.1 of the Criminal Code)",
        "Bankruptcy is a last resort. First try restructuring and a settlement agreement"
      ]
    },
    {
      id: "loan_restructuring",
      title: "🏦 Loan restructuring",
      description: "If you temporarily cannot pay — ask the bank to change the terms: deferment, lower payment, extend the term.",
      conditions: { debt_type: ["bank_loan"], overdue: ["up_to_3_months", "long_overdue"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 months",
      yield_estimate: "Payment reduction + deferment",
      tags: ["bank", "restructuring", "loan"],
      steps: [
        "Contact the bank with a restructuring application (before overdue or in the first days of overdue)",
        "Attach documents: income certificate, proof of difficult life situation (job loss, illness, etc.)",
        "Restructuring options: reduce monthly payment, extend loan term, credit holidays (deferment for 6 months)",
        "If the bank refuses — file a complaint with the Central Bank of Russia",
        "You can also contact the Dom.RF fund — they help with mortgages",
        "If approved — sign an additional agreement to the loan contract"
      ],
      warnings: [
        "Restructuring is not a write-off, but a change in terms. Total payments may increase due to interest",
        "The bank may refuse if there is no proof of income or solvency",
        "Credit holidays are given once every 5 years under Law No. 106-FZ",
        "If the bank refuses — file a lawsuit or file for bankruptcy"
      ]
    },
    {
      id: "court_order_contest",
      title: "📜 How to contest a court order",
      description: "If you received a court order — you have 10 days to file objections. This suspends collection.",
      conditions: { debt_type: ["court_order"], court_order_status: ["not_yet"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10-30 days",
      yield_estimate: "Cancellation of court order",
      tags: ["court", "order", "dispute"],
      steps: [
        "Get a copy of the court order (by mail or at the court office)",
        "Within 10 days of receipt, file objections with the same court (magistrate court)",
        "In the objections, state: disagreement with the debt amount, statute of limitations, absence of debt",
        "Objections are submitted in writing (by mail or in person)",
        "If within 10 days — the court CANCELS the order (Article 129 of the Civil Procedure Code)",
        "After cancellation, the creditor may file a claim in general proceedings (not a court order)",
        "In the claim, you can present evidence and defend yourself"
      ],
      warnings: [
        "The 10-day deadline is strict! If you miss it — restoring it is difficult (need a valid reason)",
        "Objections are filed WITHOUT state fee",
        "If the order has already taken effect — file a motion to cancel the default judgment or appeal",
        "If the creditor filed a claim (not a court order) — it's a regular court proceeding"
      ]
    },
    {
      id: "mfo_help",
      title: "📉 What to do with a microfinance loan (MFO)",
      description: "MFOs often inflate interest. There are legal ways to reduce the debt.",
      conditions: { debt_type: ["bank_loan"], loan_source: ["mfo"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2-4 months",
      yield_estimate: "Debt reduction",
      tags: ["mfo", "microfinance", "law"],
      steps: [
        "Check the debt amount: by law (No. 353-FZ), the total accrued interest cannot exceed 1.5× the loan amount (for MFOs)",
        "If interest is inflated beyond that — it is illegal (Article 12 of the Federal Law 'On Consumer Credit')",
        "Send a request to the MFO demanding recalculation of interest according to the law",
        "If the MFO refuses — complaint to the Central Bank of Russia (the Central Bank regulates MFOs)",
        "If the debt exceeds 1.5× — you can file a lawsuit to declare the debt unlawful",
        "If amount > 500,000 — consider bankruptcy"
      ],
      warnings: [
        "MFOs often threaten, but their activities are strictly regulated by the Central Bank",
        "If the MFO is not registered in the Central Bank register — the debt is illegal (such MFOs have no right to collect)",
        "Do not pay more than 1.5× of the loan amount — it's overcharging"
      ]
    }
  ]
};

// ===== EXPORT =====
window.debtsDataEn = debtsDataEn;
