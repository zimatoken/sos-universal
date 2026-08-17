// === MODULE: DIVORCE AND ALIMONY (ENGLISH) ===
const divorceDataEn = {
  category: "divorce",
  title: "💔 Divorce and alimony",
  description: "What to do during divorce, alimony collection, and property division",

  questions: [
    {
      id: "divorce_situation",
      text: "What is your situation?",
      type: "single",
      options: [
        { id: "mutual", label: "🤝 Mutual consent to divorce", tags: ["mutual", "simple"] },
        { id: "one_side", label: "😤 Spouse is against / disagrees", tags: ["one_side", "dispute"] },
        { id: "alimony", label: "👶 Need child support", tags: ["alimony", "children"] },
        { id: "property", label: "🏠 Property dispute during divorce", tags: ["property", "division"] },
        { id: "alimony_spouse", label: "🤱 Alimony for ex-spouse", tags: ["alimony_spouse", "ex_spouse"] },
        { id: "marriage_contract", label: "📜 There is a prenuptial agreement", tags: ["contract", "agreement"] }
      ]
    },
    {
      id: "children",
      text: "Do you have any children together?",
      type: "single",
      options: [
        { id: "yes_minor", label: "Yes, minors (under 18)", tags: ["minor", "children"] },
        { id: "yes_adult", label: "Yes, but already adults (18+)", tags: ["adult", "children"] },
        { id: "no_children", label: "No children", tags: ["no_children"] }
      ]
    },
    {
      id: "property_type",
      text: "What property is in dispute?",
      type: "single",
      conditions: { divorce_situation: ["property"] },
      options: [
        { id: "apartment", label: "🏢 Apartment / house", tags: ["real_estate"] },
        { id: "car_money", label: "🚗 Car / money / bank deposits", tags: ["movable", "money"] },
        { id: "business", label: "💼 Business / individual entrepreneur / company shares", tags: ["business"] },
        { id: "debt", label: "📉 Debts / loans (joint)", tags: ["debts"] }
      ]
    },
    {
      id: "alimony_agreement",
      text: "Do you have a child support agreement?",
      type: "single",
      conditions: { divorce_situation: ["alimony"] },
      options: [
        { id: "agreement_yes", label: "✅ Yes, there is a notarized agreement", tags: ["agreement_yes"] },
        { id: "agreement_no", label: "❌ No agreement", tags: ["agreement_no"] }
      ]
    }
  ],

  solutions: [
    // ============================
    // MUTUAL DIVORCE
    // ============================
    {
      id: "divorce_mutual",
      title: "🤝 Mutual divorce (Registry Office)",
      description: "The simplest and fastest way — through the registry office, without court. Suitable if there are no disputes and both agree.",
      conditions: { divorce_situation: ["mutual"], children: ["no_children", "yes_adult"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1 month",
      yield_estimate: "Divorce certificate",
      tags: ["divorce", "mutual", "registry"],
      steps: [
        "Both spouses submit a joint application to the registry office (online through State Services possible)",
        "Specify: consent to divorce, custody of children (if any), alimony amount (if agreed)",
        "Pay the state fee — 650 rubles (split between spouses)",
        "The registry office sets a date after 1 month (reconciliation period)",
        "On the appointed day, appear at the registry office and receive the divorce certificate"
      ],
      warnings: [
        "If the spouse is pregnant or gave birth less than 1 year ago — divorce ONLY through court (Article 17 of the Family Code)",
        "If there are minor children — divorce in the registry office is IMPOSSIBLE, only through court (except when one spouse is declared incompetent or imprisoned)",
        "Alimony: minimum 25% for 1 child, 33% for 2, 50% for 3+ (Article 81 of the Family Code)",
        "If there is a property dispute — better to go through court immediately, otherwise a separate lawsuit later"
      ]
    },
    // ============================
    // DIVORCE THROUGH COURT (ONE SIDE AGAINST)
    // ============================
    {
      id: "divorce_court",
      title: "⚖️ Divorce through court (if spouse is against)",
      description: "If the spouse disagrees or evades — divorce through a magistrate. With children, it's mandatory to go through court.",
      conditions: { divorce_situation: ["one_side"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "2-4 months",
      yield_estimate: "Court decision on divorce",
      tags: ["divorce", "court", "one_side"],
      steps: [
        "File a claim in the magistrate's court at the defendant's place of residence (or yours)",
        "In the claim specify: request for divorce, custody of children, alimony (if there are children)",
        "Pay the state fee — 600 rubles",
        "If the defendant evades receiving the summons — the court may hear the case without them",
        "At the hearing: the court will establish the fact of cessation of family relations (your testimony is sufficient)",
        "The court issues a decision on divorce — it takes effect after 1 month",
        "Receive the divorce certificate from the registry office based on the court decision"
      ],
      warnings: [
        "If the defendant is against it — this is NOT grounds for refusing a divorce (the Supreme Court has clarified)",
        "The court may grant up to 3 months for reconciliation — but on a second claim, it will grant the divorce",
        "If the spouse does not appear — the court may issue a default judgment (after 30 days)",
        "In court divorce — property and children are decided in the same proceeding or separately"
      ]
    },
    // ============================
    // CHILD SUPPORT
    // ============================
    {
      id: "alimony_claim",
      title: "👶 Child support collection",
      description: "Child support is a child's right. It can be collected even without divorce. Filed in magistrate's court.",
      conditions: { divorce_situation: ["alimony", "mutual", "one_side"], children: ["yes_minor"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 months",
      yield_estimate: "Alimony + arrears",
      tags: ["alimony", "children", "court"],
      steps: [
        "Determine the format: share of income (25%/33%/50%) or a fixed amount",
        "Share — if the payer has stable income. Fixed — if income is hidden or unstable",
        "File a claim in magistrate's court: lawsuit for alimony (or court order — faster)",
        "Documents: birth certificate, proof of your income, proof of the respondent's income",
        "Court order: without a hearing, within 5 days, if there is no dispute (but the respondent may object)",
        "Lawsuit proceedings: with a hearing, if there is a dispute about the amount or paternity",
        "Receive the enforcement document → transfer to bailiffs or the respondent's employer",
        "Bailiffs: will seize accounts, wages, may restrict travel abroad"
      ],
      warnings: [
        "Minimum alimony: not less than the regional child subsistence minimum (if income < minimum wage)",
        "If the respondent hides income — demand a fixed amount (court will set it)",
        "Alimony can be collected for the last 3 years (if you prove you attempted to collect it)",
        "Non-payment of alimony > 2 months — criminal liability (Article 157 of the Criminal Code)"
      ]
    },
    // ============================
    // PROPERTY DIVISION
    // ============================
    {
      id: "property_divorce",
      title: "🏠 Property division during divorce",
      description: "Property acquired during marriage is divided equally. But there are nuances. Filed in court within 3 years after divorce.",
      conditions: { divorce_situation: ["property"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "3-12 months",
      yield_estimate: "Property division or compensation",
      tags: ["property", "division", "court"],
      steps: [
        "Make a list of all property acquired during marriage: real estate, car, deposits, business",
        "Prove that the property was acquired during marriage: purchase contract, statements, certificates",
        "EXCEPTIONS from joint property: gifts, inheritance, pre-marital property, personal items",
        "Mortgage apartment: the value is divided, but the debt is also divided equally",
        "If there is no agreement — file a lawsuit for property division (deadline: 3 years after divorce)",
        "In the lawsuit: demand a specific share or compensation (if the property cannot be physically divided)",
        "Independent property appraisal — mandatory if there is a dispute about value"
      ],
      warnings: [
        "Property purchased BEFORE marriage but on credit — a complex case. Consult a lawyer.",
        "If the spouse sold/donated property before divorce — you can challenge the transaction in court",
        "A business started during marriage — is divided, even if registered to parents (prove family funds contribution)",
        "Debts during marriage — are also divided equally (if proven to be for family needs)"
      ]
    },
    // ============================
    // ALIMONY FOR EX-SPOUSE
    // ============================
    {
      id: "alimony_spouse",
      title: "🤱 Alimony for ex-spouse",
      description: "Alimony for an ex-wife is collected if she is pregnant, caring for a common child under 3 years old, or disabled.",
      conditions: { divorce_situation: ["alimony_spouse"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2-4 months",
      yield_estimate: "Alimony for spouse",
      tags: ["alimony_spouse", "ex_spouse", "court"],
      steps: [
        "Check the grounds: pregnancy, caring for a child under 3 years old, disability",
        "File a lawsuit in magistrate's court for alimony for the spouse",
        "Documents: marriage certificate, child's birth certificate, income certificate",
        "Alimony amount: fixed amount (court sets it)",
        "Collection period: until the child reaches 3 years old (or indefinitely if the spouse is disabled)",
        "Bailiffs: collect from the payer's income or property"
      ],
      warnings: [
        "Alimony for a spouse is NOT assigned automatically — only by court decision",
        "If the spouse works and has income — alimony may not be assigned (except for disability cases)",
        "If the payer does not pay — bailiffs may seize accounts and property"
      ]
    },
    // ============================
    // PRENUPTIAL AGREEMENT
    // ============================
    {
      id: "marriage_contract",
      title: "📜 Prenuptial agreement — what you need to know",
      description: "A prenuptial agreement regulates property division. It can change the legal regime of joint ownership.",
      conditions: { divorce_situation: ["marriage_contract", "property"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 weeks",
      yield_estimate: "Property division procedure",
      tags: ["contract", "property", "agreement"],
      steps: [
        "Check: the prenuptial agreement is notarized (mandatory!)",
        "It applies only to the future or from the date of its conclusion",
        "The agreement may specify: separate or shared ownership of property",
        "The agreement CANNOT limit the child's rights or place one spouse in an extremely disadvantageous position",
        "If the agreement violates your rights — you can challenge it in court within 1 year from the date of conclusion",
        "During divorce — the court is guided by the prenuptial agreement, not by the property division law"
      ],
      warnings: [
        "The agreement CANNOT regulate personal non-property relationships (e.g., obligation to live together)",
        "If the agreement clearly undervalues one spouse's share — it may be declared invalid",
        "You can only challenge the agreement in court if it contradicts the law"
      ]
    }
  ]
};

// ===== EXPORT =====
window.divorceDataEn = divorceDataEn;
