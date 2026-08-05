// === MODULE: INHERITANCE (ENGLISH) ===
const inheritanceDataEn = {
  category: "inheritance",
  title: "📜 Inheritance",
  description: "What to do when inheriting property, contesting a will, or missing deadlines",

  questions: [
    {
      id: "inheritance_situation",
      text: "What is your inheritance situation?",
      type: "single",
      options: [
        { id: "no_will", label: "A relative died, no will", tags: ["no_will", "law"] },
        { id: "will_exists", label: "There is a will, but there is a dispute", tags: ["will", "dispute"] },
        { id: "missed", label: "Missed the inheritance deadline (more than 6 months)", tags: ["missed", "deadline"] },
        { id: "foreign", label: "Inheritance abroad / from a foreigner", tags: ["foreign", "international"] },
        { id: "debts", label: "Inheritance with debts (loans, taxes)", tags: ["debts", "liabilities"] },
        { id: "property_only", label: "Only real estate / car", tags: ["property", "real_estate"] }
      ]
    },
    {
      id: "relation",
      text: "What is your relationship to the deceased?",
      condition: { inheritance_situation: ["no_will", "missed"] },
      options: [
        { id: "spouse", label: "Spouse", tags: ["spouse", "first"] },
        { id: "child", label: "Child (including out-of-wedlock)", tags: ["child", "first"] },
        { id: "parent", label: "Parent", tags: ["parent", "first"] },
        { id: "sibling", label: "Brother / sister", tags: ["sibling", "second"] },
        { id: "other", label: "Other relative (nephew, grandfather, grandmother)", tags: ["other", "third"] }
      ]
    },
    {
      id: "will_dispute_type",
      text: "What is the nature of the will dispute?",
      condition: { inheritance_situation: ["will_exists"] },
      options: [
        { id: "invalid", label: "I doubt the validity of the will", tags: ["invalid", "law"] },
        { id: "forced", label: "The will was made under pressure / testator was incapacitated", tags: ["forced", "invalid"] },
        { id: "dependents", label: "There are disabled dependents who were left out", tags: ["dependents", "forced"] },
        { id: "forgery", label: "I suspect the signature was forged", tags: ["forgery", "expertise"] }
      ]
    },
    {
      id: "has_debts",
      text: "Did the deceased have debts?",
      condition: { inheritance_situation: ["debts", "no_will", "will_exists"] },
      options: [
        { id: "debts_yes", label: "Yes, there are loans / taxes / utility debts", tags: ["debts_yes"] },
        { id: "debts_no", label: "No, there are no debts", tags: ["debts_no"] },
        { id: "debts_unknown", label: "I don't know, but I suspect so", tags: ["debts_unknown"] }
      ]
    },
    {
      id: "property_type",
      text: "What is included in the inheritance?",
      condition: { inheritance_situation: ["property_only", "no_will", "will_exists"] },
      options: [
        { id: "apartment", label: "Apartment / house", tags: ["apartment"] },
        { id: "car", label: "Car", tags: ["car"] },
        { id: "land", label: "Land plot / summer cottage", tags: ["land"] },
        { id: "money", label: "Money / bank deposits", tags: ["money"] },
        { id: "business", label: "Business / share in an LLC", tags: ["business"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Inheritance by law (no will)
    // ========================================
    {
      id: "inheritance_no_will",
      title: "⚖️ Inheritance by law (no will)",
      description: "If there is no will, the property is divided among heirs by law. The key is not to miss the deadline.",
      conditions: { inheritance_situation: ["no_will"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "6 months + processing",
      yield_estimate: "Certificate of inheritance",
      tags: ["law", "no_will", "deadline"],
      steps: [
        "Obtain a death certificate from the Vital Statistics Office (or consulate if death occurred abroad)",
        "Determine the place of inheritance opening — the deceased's last place of residence",
        "File an application with a notary to accept the inheritance (within 6 months!)",
        "Gather documents: death certificate, property documents, proof of relationship",
        "Pay the state fee: 0.3% for close relatives (max. 100,000 RUB), 0.6% for others (max. 1,000,000 RUB)",
        "Receive the certificate of inheritance (after 6 months from the date of death)",
        "Register ownership rights with Rosreestr (real estate) or re-register the car with the traffic police"
      ],
      warnings: [
        "DEADLINE: 6 months from the date of death. If you miss it — you'll need to restore it through court (difficult, but possible)",
        "The spouse automatically receives 50% of jointly acquired property (Article 256 of the Civil Code)",
        "Out-of-wedlock children inherit equally with legitimate children — paternity must be proven",
        "If there are many heirs, shares are determined by order (Articles 1142-1145 of the Civil Code)"
      ]
    },
    // ========================================
    // 2. Contesting a will
    // ========================================
    {
      id: "will_invalid",
      title: "📝 Contesting a will",
      description: "A will can be contested if it was made with violations or under pressure.",
      conditions: { inheritance_situation: ["will_exists"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "6-18 months",
      yield_estimate: "Declaration of will as invalid",
      tags: ["will", "dispute", "court"],
      steps: [
        "Check the form of the will: notarized, certified by a consul, or 'will under extraordinary circumstances'",
        "A notarized will is harder to contest — serious grounds are needed",
        "Grounds for contesting: incapacity of the testator, coercion, fraud, signature under influence",
        "Gather evidence: medical records, witness statements, correspondence",
        "File a lawsuit in court to declare the will invalid (within 3 years of the inheritance opening)",
        "Simultaneously — demand for inclusion of the compulsory share (for disabled dependents)",
        "Apply to the notary to suspend the issuance of the certificate until the court decision"
      ],
      warnings: [
        "Handwriting examination is expensive (from 15,000 RUB), but often decides the case",
        "Disabled dependents receive at least 50% of the legal share, even if the will excludes them",
        "If the testator was ill — request a medical report from a psychiatric or general hospital",
        "Statute of limitations is 3 years, but it's better to act immediately"
      ]
    },
    // ========================================
    // 3. Restoring a missed deadline
    // ========================================
    {
      id: "missed_deadline",
      title: "⏰ Restoring the deadline for inheritance",
      description: "Missed the 6-month deadline? There is a chance to restore it — but you need valid reasons.",
      conditions: { inheritance_situation: ["missed"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "3-12 months",
      yield_estimate: "Deadline restoration + certificate",
      tags: ["missed", "deadline", "court"],
      steps: [
        "Determine when you learned of the death (the deadline is counted from when you became aware)",
        "Gather evidence of valid reasons: business trip, illness, being a minor, living abroad",
        "File an application with the notary to restore the deadline — with supporting evidence",
        "If the notary refuses — file a lawsuit in court to restore the deadline",
        "In court, prove: valid reasons + you didn't know about the death + actual actions taken (paid taxes, maintained the property)",
        "If the court restores the deadline — obtain the certificate of inheritance",
        "If the inheritance has already been divided — demand your share or compensation"
      ],
      warnings: [
        "'Didn't know about the death' works if you had no contact with the family and live far away",
        "'Was on a business trip' — requires a work certificate with exact dates",
        "If the deadline was missed by more than 3 years — chances are minimal, but possible under special circumstances",
        "Inheritance accepted by other heirs is difficult to recover — but possible through court"
      ]
    },
    // ========================================
    // 4. Inheritance with debts
    // ========================================
    {
      id: "inheritance_with_debts",
      title: "💳 Inheritance with debts — what to do",
      description: "Inheritance can come with debts. But you are not obliged to pay more than you receive.",
      conditions: { inheritance_situation: ["debts"], has_debts: ["debts_yes"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "3-6 months",
      yield_estimate: "Inheritance without debts (or reduced)",
      tags: ["debts", "liabilities", "law"],
      steps: [
        "Request the deceased's credit history through the notary or the Credit Bureau",
        "Check what debts exist — loans, taxes, utility payments",
        "By law (Article 1175 of the Civil Code), you are liable for debts within the value of the inheritance",
        "If the debt exceeds the inheritance value — you are not obliged to pay (renounce the inheritance)",
        "If the debt is less than the inheritance value — pay it and receive the remaining property",
        "If you renounce the inheritance — debts do not pass to you",
        "In court, you can dispute some debts (expired, unreasonable)"
      ],
      warnings: [
        "DO NOT accept the inheritance without checking the debts — you could end up with other people's loans",
        "If you have already accepted the inheritance — debts automatically transfer to you",
        "The deadline for renouncing the inheritance is 6 months (Article 1157 of the Civil Code)",
        "If you renounce the inheritance, you cannot partially accept it — only fully"
      ]
    },
    // ========================================
    // 5. International inheritance
    // ========================================
    {
      id: "foreign_inheritance",
      title: "🌍 Inheritance abroad / from a foreigner",
      description: "Inheriting property abroad is more complex, but possible. It's important to know the country's rules.",
      conditions: { inheritance_situation: ["foreign"] },
      priority: "slow",
      reliability: "low",
      time_estimate: "6-24 months",
      yield_estimate: "Inheritance registration abroad",
      tags: ["foreign", "international", "law"],
      steps: [
        "Determine whether the law of the deceased's last place of residence (lex domicilii) or the law of the property's location (lex rei sitae) applies",
        "Contact the Russian consul in that country — they will help with document forwarding",
        "Hire a local lawyer in the country — it's difficult without one",
        "Translate all documents into English / the local language (notarized translation)",
        "File an application with a notary in the country of inheritance opening (according to local rules)",
        "If the property is in Russia — file with a Russian notary, then legalize documents abroad",
        "Be prepared for a lengthy process — from 6 months to 2 years"
      ],
      warnings: [
        "Each country has its own rules — study local laws (e.g., in France, children have a compulsory share)",
        "The consul does not resolve inheritance issues — only helps with documents",
        "If there is property in multiple countries — inheritance is processed separately in each",
        "An apostille on documents is mandatory for countries party to the Hague Convention"
      ]
    },
    // ========================================
    // 6. Renunciation of inheritance
    // ========================================
    {
      id: "inheritance_refusal",
      title: "🙅 Renunciation of inheritance",
      description: "If the inheritance comes with debts or you don't want to accept it — you can renounce it.",
      conditions: { inheritance_situation: ["debts", "no_will", "will_exists"], has_debts: ["debts_yes"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1 month",
      yield_estimate: "Renunciation + release from obligations",
      tags: ["refusal", "debts", "law"],
      steps: [
        "Decide: renounce fully or only part (full renunciation — Article 1157 of the Civil Code)",
        "File an application with the notary to renounce the inheritance within 6 months",
        "If the deadline is missed — renunciation is possible only for valid reasons (through court)",
        "Renunciation can be done in person, through a representative, or by mail (notarized application)",
        "If the inheritance has already been accepted — renunciation is possible within 6 months (Article 1158 of the Civil Code)",
        "If you renounce, debts pass to other heirs",
        "If all heirs renounce — the property becomes state property (escheat)"
      ],
      warnings: [
        "Renunciation of inheritance is final. It cannot be reversed (Article 1157 of the Civil Code)",
        "You cannot renounce in favor of another person — only fully",
        "If you have already accepted the inheritance and paid debts — renunciation is impossible",
        "Renunciation must be made before 6 months from the date of inheritance opening"
      ]
    },
    // ========================================
    // 7. Inheritance of real estate / car
    // ========================================
    {
      id: "property_inheritance",
      title: "🏠 Inheritance of real estate / car",
      description: "Specifics of registering apartments, houses, land, and vehicles.",
      conditions: { inheritance_situation: ["property_only"], property_type: ["apartment", "car", "land"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "6-12 months",
      yield_estimate: "Re-registration of ownership",
      tags: ["property", "real_estate", "car"],
      steps: [
        "File an application with the notary to accept the inheritance (within 6 months)",
        "Order a valuation report for the real estate / car for the notary (for the state fee)",
        "Receive the certificate of inheritance after 6 months",
        "Register ownership rights with Rosreestr (real estate) — state fee 2,000 RUB",
        "For a car — contact the traffic police for re-registration within 10 days",
        "If there are multiple heirs — determine each share (by agreement or through court)",
        "If the apartment is mortgaged — you must pay off the balance or sell the apartment"
      ],
      warnings: [
        "If the apartment is mortgaged — you must pay off the balance or sell the apartment",
        "When selling inherited property — tax is 13% (if less than 3 years have passed)",
        "Utility debts transfer to the heirs",
        "If you don't register ownership with Rosreestr — you cannot sell or gift the property"
      ]
    }
  ]
};

// ===== EXPORT =====
window.inheritanceDataEn = inheritanceDataEn;
