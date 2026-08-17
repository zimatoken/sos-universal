// === MODULE: DEBTS AND COLLECTORS (ENGLISH) ===
const debtsDataEn = {
  category: "debts",
  title: "💸 Debts and collectors",
  description: "What to do if you have debt, collectors are calling, or bailiffs are acting",

  questions: [
    {
      id: "debt_type",
      text: "What type of debt do you have?",
      type: "single",
      options: [
        { id: "bank_loan", label: "🏦 Bank loan / microfinance loan", tags: ["bank", "loan"] },
        { id: "collector", label: "📞 Collectors are calling / threatening", tags: ["collector", "harassment"] },
        { id: "bailiff", label: "⚖️ Bailiffs have seized accounts / property", tags: ["bailiff", "seizure"] },
        { id: "bankruptcy", label: "📉 More debts than I can pay", tags: ["bankruptcy", "insolvency"] },
        { id: "court_order", label: "🏛️ Received a court order for collection", tags: ["court", "order"] }
      ]
    },
    {
      id: "loan_source",
      text: "Where did you take the loan?",
      type: "single",
      conditions: { debt_type: ["bank_loan", "bankruptcy"] },
      options: [
        { id: "bank", label: "🏦 Bank (Sberbank, Tinkoff, VTB, etc.)", tags: ["bank"] },
        { id: "mfo", label: "📄 Microfinance organization (MFO)", tags: ["mfo"] },
        { id: "credit_card", label: "💳 Credit card", tags: ["credit_card"] },
        { id: "multiple", label: "📚 Multiple loans from different places", tags: ["multiple"] }
      ]
    },
    {
      id: "overdue",
      text: "Is there a payment overdue?",
      type: "single",
      conditions: { debt_type: ["bank_loan", "collector", "bailiff", "bankruptcy"] },
      options: [
        { id: "no_overdue", label: "✅ No, paying on time", tags: ["no_overdue"] },
        { id: "up_to_3_months", label: "⏰ Overdue up to 3 months", tags: ["short_overdue"] },
        { id: "over_3_months", label: "⚠️ Overdue more than 3 months", tags: ["long_overdue"] }
      ]
    },
    {
      id: "collector_method",
      text: "What exactly are the collectors doing?",
      type: "single",
      conditions: { debt_type: ["collector"] },
      options: [
        { id: "calls", label: "📞 Calling relatives / workplace", tags: ["calls", "harassment"] },
        { id: "threats", label: "⚠️ Threats of physical violence", tags: ["threats", "violence"] },
        { id: "door", label: "🚪 Came home / to neighbors", tags: ["door", "intimidation"] },
        { id: "fake_docs", label: "📄 Presenting fake documents / court decisions", tags: ["fake", "fraud"] }
      ]
    },
    {
      id: "loan_amount",
      text: "What is the total amount of debt?",
      type: "single",
      conditions: { debt_type: ["bank_loan", "bankruptcy", "court_order"] },
      options: [
        { id: "small", label: "💵 Up to 500,000 rubles", tags: ["small"] },
        { id: "medium", label: "💰 500,000 — 1,000,000 rubles", tags: ["medium"] },
        { id: "large", label: "💸 Over 1,000,000 rubles", tags: ["large"] }
      ]
    },
    {
      id: "court_order_status",
      text: "Has the court order already taken effect?",
      type: "single",
      conditions: { debt_type: ["court_order"] },
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
      description: "Collectors DO NOT have the right to threaten, insult, or call relatives. This is a crime.",
      conditions: { debt_type: ["collector"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Protection + compensation",
      tags: ["collector", "illegal", "law"],
      steps: [
        "Record ALL contacts: record calls, save SMS, messenger screenshots",
        "Demand from collectors: license number, organization name, grounds for claims",
        "If they call workplace / relatives — it's a violation (Article 8 of Federal Law 'On Collection Activities')",
        "For threats — file a police report (Article 119 of the Criminal Code — threats of murder or harm)",
        "Complaint to the Central Bank of Russia (if collectors act on behalf of a bank) + Rospotrebnadzor",
        "Complaint to FSSP (if collectors pose as bailiffs)",
        "Lawsuit for protection of honor and dignity + compensation for moral damages"
      ],
      warnings: [
        "Collectors DO NOT have the right to: call after 22:00 and before 8:00, more than once a day, insult, threaten",
        "DO NOT sign anything under pressure — it's fraud",
        "If collectors come home — DO NOT let them in without a court decision and bailiffs",
        "Recording a conversation (if you are a participant) — legal evidence in court"
      ]
    },
    {
      id: "bailiff_help",
      title: "⚡ Bailiff actions",
      description: "Bailiffs have the right to collect debt — but only within the law. Check the legality.",
      conditions: { debt_type: ["bailiff"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-6 months",
      yield_estimate: "Debt reduction or protection",
      tags: ["bailiff", "seizure", "law"],
      steps: [
        "Check the enforcement proceedings on the FSSP website (fssp.gov.ru) — enter your name",
        "Check: is there a court order or writ of execution? If not — bailiffs are acting illegally",
        "If there is enforcement proceedings — check the amount (should not exceed debt + fines)",
        "Account seizure: leave the subsistence minimum (since 2024 — at least the regional subsistence minimum)",
        "If everything is seized — file an application to the bailiff to release the subsistence minimum from seizure",
        "If the debt is on a loan — contact the bank for restructuring (payment reduction, deferment)",
        "If unable to pay — individual bankruptcy (if debt > 500,000 rubles)"
      ],
      warnings: [
        "Bailiffs DO NOT have the right to seize the only housing (except mortgage)",
        "CANNOT seize: food, clothing, child benefits, disability pension",
        "The only car — can be seized, but not always sold (if needed for work)",
        "If bailiffs violate — complaint to the senior bailiff → prosecutor's office → court"
      ]
    },
    {
      id: "bankruptcy_personal",
      title: "📉 Individual bankruptcy",
      description: "If debts exceed 500,000 rubles and you can't pay — bankruptcy writes off debts.",
      conditions: { debt_type: ["bankruptcy"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "6-18 months",
      yield_estimate: "Debt write-off",
      tags: ["bankruptcy", "law", "financial"],
      steps: [
        "Check the amount of debt: must be > 500,000 rubles (including fines, penalties)",
        "Prepare documents: income certificates, account statements, property documents, list of creditors",
        "Contact a financial manager (choose from the FSSP registry)",
        "File an application with the arbitration court at your place of residence",
        "Pay the state fee (6,000 rubles) + contribution for the manager (from 25,000 rubles)",
        "During the procedure (6-12 months): the manager sells property, negotiates with creditors",
        "Upon completion — write-off of all debts (except alimony, compensation for health/life damage)"
      ],
      warnings: [
        "After bankruptcy: 5 years you cannot be a director, individual entrepreneur, open bank accounts — difficult",
        "The only housing — will remain (except for mortgage apartment)",
        "If you hid property or income — criminal liability (Article 197.1 of the Criminal Code)",
        "Bankruptcy is a last resort. First try restructuring and settlement agreement"
      ]
    },
    {
      id: "loan_restructuring",
      title: "🏦 Loan restructuring",
      description: "If you temporarily can't pay — ask the bank to change terms: deferment, payment reduction, term extension.",
      conditions: { debt_type: ["bank_loan"], overdue: ["up_to_3_months", "long_overdue"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 months",
      yield_estimate: "Payment reduction + deferment",
      tags: ["bank", "restructuring", "loan"],
      steps: [
        "Contact the bank with a restructuring application (before overdue appears or in the first days of overdue)",
        "Attach documents: income certificate, confirmation of difficult life situation (job loss, illness, etc.)",
        "Restructuring options: monthly payment reduction, loan term extension, credit holidays (6-month deferment)",
        "If the bank refuses — file a complaint with the Central Bank of Russia",
        "You can also contact the 'Dom.RF' fund — they help with mortgages",
        "If approved — sign an additional agreement to the loan agreement"
      ],
      warnings: [
        "Restructuring is not a debt write-off, but a change in terms. The total payment amount may increase due to interest",
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
      yield_estimate: "Cancellation of the court order",
      tags: ["court", "order", "dispute"],
      steps: [
        "Get a copy of the court order (by mail or at the court office)",
        "Within 10 days from receipt, file objections with the same court (magistrate's court)",
        "In the objections state: disagreement with the debt amount, expiration of the statute of limitations, absence of debt",
        "Objections are submitted in writing (by mail or in person)",
        "If you meet the 10-day deadline — the court CANCELS the order (Article 129 of the Code of Civil Procedure)",
        "After cancellation, the creditor may file a claim in the general order (already not a court order proceeding)",
        "In the claim, you will be able to present evidence and defend yourself"
      ],
      warnings: [
        "The 10-day deadline is strict! If you miss it — restoration is difficult (need a valid reason)",
        "Objections are filed WITHOUT a state fee",
        "If the order has already taken effect — file an application to cancel the default judgment or appeal",
        "If the creditor filed a lawsuit (not an order) — it's regular court proceedings"
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
        "Check the debt amount: by law (No. 353-FZ), the total amount of accrued interest cannot exceed 1.5× the loan amount (for MFOs)",
        "If interest is accrued more — it's illegal (Article 12 of Federal Law 'On Consumer Credit')",
        "Send a request to the MFO demanding that interest be recalculated according to the law",
        "If the MFO refuses — complaint to the Central Bank of Russia (Central Bank regulates MFOs)",
        "If the debt amount exceeds 1.5× — you can file a lawsuit to declare the debt illegal",
        "If the amount > 500,000 — you can consider bankruptcy"
      ],
      warnings: [
        "MFOs often threaten, but their activities are strictly regulated by the Central Bank",
        "If the MFO is not registered in the Central Bank registry — the debt is illegal (such MFOs have no right to collect)",
        "Do not pay more than 1.5× of the loan amount — it's excess"
      ]
    }
  ]
};

// ===== EXPORT =====
window.debtsDataEn = debtsDataEn;
