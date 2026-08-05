// === MODULE: DIVORCE & ALIMONY (ENGLISH) ===
const divorceDataEn = {
  category: "divorce",
  title: "💔 Divorce and Alimony",
  description: "What to do in case of divorce, child support, and property division",

  questions: [
    {
      id: "divorce_situation",
      text: "What is your situation?",
      type: "single",
      options: [
        { id: "mutual", label: "🤝 Mutual consent divorce", tags: ["mutual", "simple"] },
        { id: "one_side", label: "😤 Spouse disagrees / opposes", tags: ["one_side", "dispute"] },
        { id: "alimony", label: "👶 Need child support", tags: ["alimony", "children"] },
        { id: "property", label: "🏠 Property dispute during divorce", tags: ["property", "division"] },
        { id: "alimony_spouse", label: "🤱 Alimony for ex-spouse", tags: ["alimony_spouse", "ex_spouse"] },
        { id: "marriage_contract", label: "📜 Prenuptial agreement exists", tags: ["contract", "agreement"] }
      ]
    },
    {
      id: "children",
      text: "Do you have any common children?",
      type: "single",
      options: [
        { id: "yes_minor", label: "Yes, minors (under 18)", tags: ["minor", "children"] },
        { id: "yes_adult", label: "Yes, but adults (18+)", tags: ["adult", "children"] },
        { id: "no", label: "No children", tags: ["no_children"] }
      ]
    },
    {
      id: "property_type",
      text: "What property is in dispute?",
      type: "single",
      options: [
        { id: "apartment", label: "🏢 Apartment / house", tags: ["real_estate"] },
        { id: "car_money", label: "🚗 Car / money / deposits", tags: ["movable", "money"] },
        { id: "business", label: "💼 Business / sole proprietorship / company shares", tags: ["business"] },
        { id: "debt", label: "📉 Joint debts / loans", tags: ["debts"] }
      ]
    },
    {
      id: "marriage_contract_exists",
      text: "Is there a prenuptial agreement?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, there is a prenuptial agreement", tags: ["contract_yes"] },
        { id: "no", label: "❌ No prenuptial agreement", tags: ["contract_no"] }
      ]
    },
    {
      id: "alimony_agreement",
      text: "Is there a child support agreement?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, a notarized agreement exists", tags: ["agreement_yes"] },
        { id: "no", label: "❌ No agreement", tags: ["agreement_no"] }
      ]
    }
  ],

  solutions: [
    // ============================
    // MUTUAL DIVORCE
    // ============================
    {
      id: "divorce_mutual",
      title: "🤝 Mutual consent divorce (Registry Office)",
      description: "The simplest and fastest way — through the Civil Registry Office (ZAGS), without court. Suitable if both agree and there are no disputes.",
      conditions: { divorce_situation: ["mutual"], children: ["no", "yes_adult"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1 month",
      yield_estimate: "Divorce certificate",
      tags: ["divorce", "mutual", "zag"],
      steps: [
        "Both spouses submit a joint application to the Registry Office (can be done online via Gosuslugi)",
        "Specify: consent to divorce, who the children stay with, and the amount of child support (if agreed)",
        "Pay the state fee — 650 RUB (shared between spouses)",
        "The Registry Office sets a date 1 month later (reconciliation period)",
        "On the appointed day, appear at the Registry Office and receive the divorce certificate"
      ],
      warnings: [
        "If the wife is pregnant or has given birth within the last year — divorce ONLY through court (Article 17 of the Family Code)",
        "If there are minor children — divorce at the Registry Office is IMPOSSIBLE, only through court (except when one spouse is declared incompetent or imprisoned)",
        "Child support: minimum 25% for 1 child, 33% for 2, 50% for 3+ (Article 81 of the Family Code)",
        "If there is a property dispute — better to go through court immediately, otherwise file a separate claim later"
      ]
    },
    // ============================
    // COURT DIVORCE (ONE SIDE AGAINST)
    // ============================
    {
      id: "divorce_court",
      title: "⚖️ Court divorce (if spouse opposes)",
      description: "If the spouse disagrees or evades — divorce through a magistrate court. If there are children, it is mandatory to go through court.",
      conditions: { divorce_situation: ["one_side"], children: ["yes_minor", "no"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "2-4 months",
      yield_estimate: "Court decision on divorce",
      tags: ["divorce", "court", "one_side"],
      steps: [
        "File a claim with the magistrate court at the defendant's place of residence (or yours)",
        "In the claim, specify: the demand for divorce, custody of children, alimony (if there are children)",
        "Pay the state fee — 600 RUB",
        "If the defendant avoids receiving the summons, the court may hear the case without them",
        "At the hearing: the court will establish the fact of termination of family relations (your testimony is enough)",
        "The court issues a decision on divorce — it takes effect after 1 month",
        "Obtain the divorce certificate from the Registry Office based on the court decision"
      ],
      warnings: [
        "If the defendant opposes, it is NOT grounds for refusing divorce (the Supreme Court has clarified this)",
        "The court may grant up to 3 months for reconciliation — but on a repeated claim, it will grant divorce",
        "If the spouse does not appear, the court may rule in default (after 30 days)",
        "In a court divorce, property and children are decided in the same process or separately"
      ]
    },
    // ============================
    // CHILD SUPPORT
    // ============================
    {
      id: "alimony_claim",
      title: "👶 Child support collection",
      description: "Child support is the child's right. It can be collected even without divorce. File in magistrate court.",
      conditions: { divorce_situation: ["alimony", "mutual", "one_side"], children: ["yes_minor"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 months",
      yield_estimate: "Child support + arrears",
      tags: ["alimony", "children", "court"],
      steps: [
        "Choose the format: percentage of income (25%/33%/50%) or a fixed amount",
        "Percentage — if the payer has stable income. Fixed — if income is hidden or irregular",
        "File an application in the magistrate court: a claim for child support (or a court order — faster)",
        "Documents: birth certificate, income statement, proof of the payer's income",
        "Court order: without a hearing, within 5 days, if there is no dispute (but the payer may object)",
        "Claim proceedings: with a hearing, if there is a dispute about the amount or paternity",
        "Obtain the enforcement document → hand it over to bailiffs or the payer's employer",
        "Bailiffs: seize accounts, wages, may restrict travel abroad"
      ],
      warnings: [
        "Minimum child support: not less than the regional subsistence minimum for a child (if income < minimum wage)",
        "If the payer hides income — demand a fixed amount (the court will set it)",
        "Child support can be collected for the last 3 years (if you prove you tried to obtain it)",
        "Non-payment of child support for > 2 months — criminal liability (Article 157 of the Criminal Code)"
      ]
    },
    // ============================
    // PROPERTY DIVISION
    // ============================
    {
      id: "property_divorce",
      title: "🏠 Property division during divorce",
      description: "Property acquired during marriage is divided equally. But there are nuances. File in court within 3 years after divorce.",
      conditions: { divorce_situation: ["property"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "3-12 months",
      yield_estimate: "Property division or compensation",
      tags: ["property", "division", "court"],
      steps: [
        "Make a list of all property acquired during marriage: real estate, car, deposits, business",
        "Prove that the property was acquired during marriage: purchase contract, extracts, certificates",
        "EXCEPTIONS to joint property: gifts, inheritance, pre-marital property, personal items",
        "Mortgage apartment: the value is divided, but the debt is also divided equally",
        "If there is no agreement — file a claim in court for property division (deadline: 3 years after divorce)",
        "In the claim: demand a specific share or compensation (if the property cannot be physically divided)",
        "Independent appraisal of property — mandatory if there is a dispute over value"
      ],
      warnings: [
        "Property purchased BEFORE marriage but on credit — a complex case. Consult a lawyer.",
        "If the spouse sold/gave away property before divorce — you can challenge the transaction in court",
        "A business opened during marriage — is divided, even if registered in parents' names (prove contribution of family funds)",
        "Debts incurred during marriage — are also divided equally (if proven to be for family needs)"
      ]
    },
    // ============================
    // ALIMONY FOR EX-SPOUSE
    // ============================
    {
      id: "alimony_spouse",
      title: "🤱 Alimony for ex-spouse",
      description: "Alimony for a former wife is collected if she is pregnant, caring for a common child under 3, or is disabled.",
      conditions: { divorce_situation: ["alimony_spouse"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2-4 months",
      yield_estimate: "Alimony for spouse",
      tags: ["alimony_spouse", "ex_spouse", "court"],
      steps: [
        "Check the grounds: pregnancy, caring for a child under 3, disability",
        "File a claim in the magistrate court for alimony for the spouse",
        "Documents: marriage certificate, child's birth certificate, income statement",
        "Amount of alimony: fixed amount (set by the court)",
        "Collection period: until the child reaches 3 years (or indefinitely if the spouse is disabled)",
        "Bailiffs: collect from the payer's income or property"
      ],
      warnings: [
        "Alimony for a spouse is NOT automatically assigned — only by court decision",
        "If the spouse works and has income — alimony may not be granted (except in cases of disability)",
        "If the payer does not pay — bailiffs can seize accounts and property"
      ]
    },
    // ============================
    // PRENUPTIAL AGREEMENT
    // ============================
    {
      id: "marriage_contract",
      title: "📜 Prenuptial agreement — what you need to know",
      description: "A prenuptial agreement regulates property division. It can change the legal regime of common property.",
      conditions: { divorce_situation: ["marriage_contract", "property"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 weeks",
      yield_estimate: "Property division arrangement",
      tags: ["contract", "property", "agreement"],
      steps: [
        "Check: the prenuptial agreement is notarized (mandatory!)",
        "It applies only to the future or from the date of its conclusion",
        "The agreement may specify: separate or shared ownership of property",
        "The agreement CANNOT limit the child's rights or place one spouse in an extremely unfavorable position",
        "If the agreement violates your rights — it can be challenged in court within 1 year of its conclusion",
        "In divorce — the court follows the prenuptial agreement, not the law on property division"
      ],
      warnings: [
        "The agreement CANNOT regulate personal non-property relations (e.g., the obligation to live together)",
        "If the agreement clearly undervalues one spouse's share — it may be declared invalid",
        "The agreement can only be challenged in court if it contradicts the law"
      ]
    }
  ]
};

// ===== EXPORT =====
window.divorceDataEn = divorceDataEn;
