// === MODULE: HOUSING ISSUES (ENGLISH) ===
const housingDataEn = {
  category: "housing",
  title: "🏠 Housing Issues",
  description: "Resolving problems with neighbors, utilities, rent, and flooding",

  questions: [
    {
      id: "housing_issue",
      text: "What is your housing problem?",
      type: "single",
      options: [
        { id: "neighbors", label: "🏠 Problems with neighbors (noise, flooding, smell)", tags: ["neighbors", "noise", "flood"] },
        { id: "uk", label: "🏢 Utilities not working / poor services", tags: ["uk", "housing_services"] },
        { id: "rent", label: "🔑 Rental problems / eviction", tags: ["rent", "eviction"] },
        { id: "flood", label: "💧 Apartment was flooded", tags: ["flood", "damage"] },
        { id: "neighbors_illegal", label: "🚫 Neighbors renting illegally / making noise", tags: ["neighbors_illegal", "rental"] },
        { id: "overpay", label: "💰 Overcharged utility bills", tags: ["overpay", "utilities"] }
      ]
    },
    {
      id: "neighbor_type",
      text: "What exactly are the neighbors doing?",
      condition: { housing_issue: ["neighbors", "neighbors_illegal"] },
      options: [
        { id: "noise", label: "🔊 Constant noise (renovation, music, shouting)", tags: ["noise", "law"] },
        { id: "flood_neighbor", label: "💧 Flooded from upstairs", tags: ["flood", "damage"] },
        { id: "smell", label: "😷 Unpleasant smell / trash in the entrance", tags: ["smell", "sanitary"] },
        { id: "illegal_rental", label: "🚫 Renting to noisy tenants / illegally", tags: ["illegal_rental", "police"] }
      ]
    },
    {
      id: "uk_problem",
      text: "What is wrong with the utility services?",
      condition: { housing_issue: ["uk", "overpay"] },
      options: [
        { id: "cold", label: "❄️ No heating / cold radiators", tags: ["cold", "heating"] },
        { id: "water_off", label: "💡 Water / electricity cut without notice", tags: ["water", "electricity"] },
        { id: "garbage", label: "🗑️ Trash / snow not cleaned", tags: ["garbage", "cleanliness"] },
        { id: "overpay_uk", label: "💰 Inflated bills / extra services", tags: ["overpay", "utilities"] },
        { id: "emergency", label: "⚠️ Emergency condition of the building / roof", tags: ["emergency", "safety"] }
      ]
    },
    {
      id: "have_contract",
      text: "Do you have a rental contract?",
      condition: { housing_issue: ["rent"] },
      options: [
        { id: "contract_yes", label: "📄 Yes, there is a written contract", tags: ["contract_yes"] },
        { id: "contract_no", label: "🗣️ No contract (verbal agreement)", tags: ["contract_no"] }
      ]
    },
    {
      id: "damage_amount",
      text: "What is the amount of damage?",
      condition: { housing_issue: ["flood", "neighbors"], neighbor_type: ["flood_neighbor"] },
      options: [
        { id: "damage_small", label: "💵 Up to 50,000 RUB", tags: ["small"] },
        { id: "damage_medium", label: "💰 50,000 – 200,000 RUB", tags: ["medium"] },
        { id: "damage_large", label: "💸 More than 200,000 RUB", tags: ["large"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Noisy neighbors
    // ========================================
    {
      id: "noise_neighbors",
      title: "🔊 Dealing with noisy neighbors",
      description: "Constant noise is a violation of your rights. There are legal ways to resolve it.",
      conditions: { housing_issue: ["neighbors", "neighbors_illegal"], neighbor_type: ["noise"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Peace + compensation",
      tags: ["noise", "neighbors", "law"],
      steps: [
        "Record the noise: audio/video with time and date stamps",
        "Talk to the neighbors in writing (a note asking to keep quiet after 23:00)",
        "Contact the HOA / management company — they are required to respond",
        "Call the police (102) if noise is at night (23:00-07:00)",
        "File a complaint with Rospotrebnadzor — noise exceeding limits (55 dB day, 45 dB night)",
        "For systematic violations — file a lawsuit for moral damages",
        "Extreme case: court order to stop noise violations + fines"
      ],
      warnings: [
        "DO NOT get into physical conflict — it's your responsibility",
        "Quiet hours: 23:00-07:00 on weekdays, 22:00-10:00 on weekends",
        "Renovation allowed: weekdays 9:00-19:00, weekends 10:00-20:00 (regional laws)",
        "If neighbors are aggressive — call the police, don't risk"
      ]
    },
    // ========================================
    // 2. Flooded apartment
    // ========================================
    {
      id: "flood_action",
      title: "💧 Flooded apartment — what to do",
      description: "Flooding is stressful, but you need to act quickly and correctly to claim damages.",
      conditions: { housing_issue: ["flood", "neighbors"], neighbor_type: ["flood_neighbor"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-6 months",
      yield_estimate: "Damage compensation + compensation",
      tags: ["flood", "damage", "court"],
      steps: [
        "IMMEDIATELY document the damage: photos, videos of ALL damage with date and time",
        "Call the emergency service of the management company — they must draw up a report (demand a copy!)",
        "If the management company doesn't come — call an independent expert (keep the receipt)",
        "Identify the culprit: upstairs neighbors, roof leak, pipe burst in the entrance",
        "Send a claim to the culprit with a calculation of damages (independent expert assessment)",
        "If they refuse — file a lawsuit: damages + moral damages + expert costs",
        "For serious damage — contact your property insurance (if you have insurance)"
      ],
      warnings: [
        "DO NOT repair BEFORE the expert assessment — otherwise you can't prove the amount of damage",
        "The flood report is the KEY document. Without it, the court will reject your claim.",
        "Statute of limitations — 3 years, but collect evidence immediately",
        "If the culprit is a neighbor who won't pay — court + bailiffs + seizure of property"
      ]
    },
    // ========================================
    // 3. Utilities not performing duties
    // ========================================
    {
      id: "uk_bad_service",
      title: "🏢 Utilities not performing duties",
      description: "The management company is obligated to maintain the building. If they don't, you can penalize them and claim damages.",
      conditions: { housing_issue: ["uk"], uk_problem: ["cold", "water_off", "garbage", "emergency"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Elimination of violations + penalty",
      tags: ["uk", "utilities", "law"],
      steps: [
        "Document violations: photos, videos, meter readings, correspondence with the management company",
        "Send a written complaint to the management company demanding correction (registered mail, keep the receipt)",
        "If the management company doesn't respond — complain to the Housing Inspectorate (Goszhilnadzor)",
        "Simultaneously — complaint to the prosecutor's office (if violations are widespread)",
        "For lack of heating/water — complain to Rospotrebnadzor",
        "Claim a penalty: for each day of poor service — 3% of the payment (Article 157 of the Housing Code)",
        "A collective complaint from residents is more effective than an individual one"
      ],
      warnings: [
        "DO NOT stop paying for utilities completely — penalties will accrue. Pay, but with a written claim.",
        "If the management company refuses to work — hold a general meeting and change the management company",
        "Check the management company's license — if expired, a complaint to the prosecutor's office results in a fine",
        "For emergency building conditions — demand relocation through the mayor's office"
      ]
    },
    // ========================================
    // 4. Overcharged utility bills
    // ========================================
    {
      id: "overpay_utilities",
      title: "📊 Overcharged utility bills",
      description: "If extra services or inflated amounts appear on your bills, you can dispute them.",
      conditions: { housing_issue: ["overpay"], uk_problem: ["overpay_uk"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 months",
      yield_estimate: "Recalculation + refund",
      tags: ["utilities", "overpay", "law"],
      steps: [
        "Compare bills for the last 6 months — identify extra services",
        "Check tariffs on the management company's website or the Housing Inspectorate",
        "Send a request to the management company demanding recalculation and removal of extra services",
        "If the management company doesn't respond — complain to the Housing Inspectorate",
        "Simultaneously — complain to Rospotrebnadzor (consumer protection)",
        "If the management company refuses — file a lawsuit, demand a refund of the overpayment",
        "If you win — the management company must refund the money with interest"
      ],
      warnings: [
        "Statute of limitations — 3 years, you can claim overpayment for this period",
        "Keep all bills and payment documents",
        "If a service was not provided — you are not obliged to pay for it",
        "Collective complaints have a stronger effect"
      ]
    },
    // ========================================
    // 5. Rental problems
    // ========================================
    {
      id: "rent_problems",
      title: "🔑 Rental problems / eviction",
      description: "Renting is risky. But both tenants and landlords have rights.",
      conditions: { housing_issue: ["rent"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-6 months",
      yield_estimate: "Protection of rights + deposit refund",
      tags: ["rent", "eviction", "contract"],
      steps: [
        "Check the rental contract — what it says about termination, terms, deposit",
        "If you are being evicted illegally — demand a written notice (verbal is illegal)",
        "Eviction period: at least 3 months under contract, 6 months if rent is overdue",
        "For illegal eviction — contact the police (trespassing)",
        "If the landlord does not return the deposit — file a claim in magistrate court (up to 100,000 RUB)",
        "If the tenant doesn't pay — landlord: claim → court → eviction through bailiffs",
        "When moving out: draw up a handover report, photograph the condition of the apartment"
      ],
      warnings: [
        "DO NOT rent/rent out without a contract — it leads to problems",
        "The deposit must be specified in the contract with conditions for its return",
        "If the landlord demands a deposit 'for the last month' — it's illegal (it's a security deposit)",
        "During court-ordered eviction — bailiffs have the right to open the door if you don't open"
      ]
    },
    // ========================================
    // 6. Neighbors renting illegally
    // ========================================
    {
      id: "illegal_rental_neighbors",
      title: "🚪 Neighbors renting illegally / noisy tenants",
      description: "If neighbors are constantly renting to changing tenants who disturb the peace or do so illegally — you can take action.",
      conditions: { housing_issue: ["neighbors_illegal"], neighbor_type: ["illegal_rental"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-3 months",
      yield_estimate: "Holding neighbors accountable",
      tags: ["illegal_rental", "neighbors", "police"],
      steps: [
        "Record tenant turnover: photos, videos, a log of complaints",
        "File a complaint with the police — night noise, violation of registration rules",
        "Contact the management company / HOA — they must monitor compliance with living regulations",
        "If the apartment is rented illegally — complain to the Federal Tax Service — neighbors are not paying taxes",
        "If tenants make noise during the day — call the police",
        "For systematic violations — file a lawsuit to enforce compliance with neighbor rights"
      ],
      warnings: [
        "DO NOT get into conflict with tenants — call the police",
        "Check if neighbors have permission to rent (often prohibited in apartment buildings)",
        "If the apartment is illegally used as a hostel — it's a direct violation"
      ]
    },
    // ========================================
    // 7. Court claim for damages
    // ========================================
    {
      id: "court_damage_claim",
      title: "⚖️ Court claim for damage from flooding",
      description: "If the culprit refuses to pay, go to court. It's realistic and effective.",
      conditions: { housing_issue: ["flood"], damage_amount: ["damage_medium", "damage_large"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "3-12 months",
      yield_estimate: "Damage compensation + moral damages + legal costs",
      tags: ["court", "damage", "compensation"],
      steps: [
        "Gather all documents: flood report from the management company, expert assessment, repair receipts, photos and videos",
        "Send a pre-trial claim to the culprit (registered mail with return receipt)",
        "If the culprit does not respond — file a lawsuit in magistrate court (up to 100,000 RUB) or district court (over 100,000)",
        "In the lawsuit, specify: the amount of damages, moral damages, costs of expert assessment and lawyer",
        "Attach all documents, calculations, and evidence",
        "During the hearing: the court will order an expert examination (if disputed) or accept your expert assessment",
        "If you win — receive a writ of execution and hand it over to bailiffs",
        "Bailiffs: seize the culprit's accounts, wages, and property for collection"
      ],
      warnings: [
        "Statute of limitations — 3 years, but act immediately",
        "An independent expert assessment is your main weapon in court",
        "If the culprit doesn't pay — bailiffs can seize their property",
        "Moral damages are assessed by the court, demand at least 30,000-50,000 RUB"
      ]
    }
  ]
};

// ===== EXPORT =====
window.housingDataEn = housingDataEn;
