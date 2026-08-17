// === MODULE: LABOR DISPUTES (ENGLISH) ===
const laborDataEn = {
  category: "labor",
  title: "💼 Labor disputes",
  description: "Employee rights protection: dismissal, salary, discrimination, harassment",

  questions: [
    {
      id: "labor_issue",
      text: "What is your workplace problem?",
      type: "single",
      options: [
        { id: "fired", label: "🚪 Fired / forced to resign", tags: ["fired", "unfair"] },
        { id: "salary", label: "💰 Salary not paid / delayed", tags: ["salary", "delayed"] },
        { id: "boss_pressure", label: "😤 Pressure from management / bullying (mobbing)", tags: ["mobbing", "harassment"] },
        { id: "contract", label: "📄 Not officially employed / no employment contract", tags: ["contract", "illegal"] },
        { id: "overtime", label: "⏰ Forced overtime without pay", tags: ["overtime", "unpaid"] },
        { id: "vacation", label: "🏖️ Vacation denied / vacation pay not given", tags: ["vacation", "denied"] },
        { id: "discrimination", label: "⚖️ Discrimination (gender, age, nationality)", tags: ["discrimination", "unfair"] },
        { id: "injury", label: "🩹 Workplace accident / injury", tags: ["injury", "safety"] }
      ]
    },
    {
      id: "fired_type",
      text: "How exactly were you fired?",
      type: "single",
      conditions: { labor_issue: ["fired"] },
      options: [
        { id: "article", label: "📜 Under article (absenteeism, lateness, violations)", tags: ["article", "disciplinary"] },
        { id: "agreement", label: "🤝 By mutual agreement (signed documents)", tags: ["agreement", "mutual"] },
        { id: "own_will", label: "✍️ Forced to resign voluntarily", tags: ["own_will", "forced"] },
        { id: "layoff", label: "📉 Staff reduction / layoff", tags: ["layoff", "reduction"] }
      ]
    },
    {
      id: "salary_delay",
      text: "How long has the salary not been paid?",
      type: "single",
      conditions: { labor_issue: ["salary"] },
      options: [
        { id: "week", label: "📅 1-2 weeks", tags: ["short"] },
        { id: "month", label: "📆 1-2 months", tags: ["medium"] },
        { id: "long", label: "📈 More than 2 months", tags: ["long"] }
      ]
    },
    {
      id: "is_official",
      text: "Are you officially employed (employment contract, work record)?",
      type: "single",
      options: [
        { id: "official_yes", label: "✅ Yes, officially employed", tags: ["official"] },
        { id: "official_no", label: "❌ No, working unofficially", tags: ["unofficial"] },
        { id: "official_gray", label: "📦 Officially employed, but salary is 'in cash' (off-the-books)", tags: ["gray"] }
      ]
    },
    {
      id: "work_duration",
      text: "How long have you been working for this employer?",
      type: "single",
      options: [
        { id: "less_year", label: "📅 Less than a year", tags: ["short_term"] },
        { id: "one_three", label: "📆 1-3 years", tags: ["medium_term"] },
        { id: "more_three", label: "📈 More than 3 years", tags: ["long_term"] }
      ]
    },
    {
      id: "has_documents",
      text: "Have you received copies of documents (dismissal order, pay slip)?",
      type: "single",
      conditions: { labor_issue: ["fired", "salary"] },
      options: [
        { id: "docs_yes", label: "Yes, all documents are in hand", tags: ["docs_yes"] },
        { id: "docs_no", label: "No, the employer did not provide them", tags: ["docs_no"] },
        { id: "docs_partial", label: "Partially", tags: ["docs_partial"] }
      ]
    },
    {
      id: "discrimination_type",
      text: "What type of discrimination?",
      type: "single",
      conditions: { labor_issue: ["discrimination"] },
      options: [
        { id: "gender", label: "Gender (woman/man)", tags: ["gender"] },
        { id: "age", label: "Age (young/elderly)", tags: ["age"] },
        { id: "nationality", label: "Nationality / citizenship", tags: ["nationality"] },
        { id: "other", label: "Other (religion, appearance, etc.)", tags: ["other"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Forced resignation (Article 80 of the Labor Code)
    // ========================================
    {
      id: "forced_quit",
      title: "📝 Forced resignation 'of own free will'",
      description: "If you were forced to resign voluntarily — it's illegal. You can be reinstated and receive compensation.",
      conditions: { labor_issue: ["fired"], fired_type: ["own_will"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Reinstatement + payment for forced absence + moral damages",
      tags: ["fired", "unfair", "court"],
      steps: [
        "Collect evidence of pressure: correspondence, witnesses, audio recordings (legal if you are a participant)",
        "Check your work record — if the entry says 'voluntary resignation' — that's your advantage",
        "Send a claim to the employer regarding the illegality of dismissal (registered mail)",
        "File a lawsuit within 1 month from the date of dismissal!",
        "In the claim demand: reinstatement, payment for forced absence, compensation for moral damages",
        "If you don't want reinstatement — demand a change of wording to 'by agreement' + severance pay"
      ],
      warnings: [
        "STATUTE OF LIMITATIONS — 1 MONTH from the date of dismissal. Miss it — you lose.",
        "DO NOT sign anything under pressure — write 'disagree' on all documents",
        "If fired 'for absenteeism' — check if there was a violation report (without one — dismissal is illegal)",
        "Court costs (state fee) — the employer reimburses if you win"
      ]
    },
    // ========================================
    // 2. Wage recovery
    // ========================================
    {
      id: "salary_claim",
      title: "💰 Wage recovery for salary arrears",
      description: "Non-payment of wages is a violation of the law (Article 145.1 of the Criminal Code). There are several ways to resolve it.",
      conditions: { labor_issue: ["salary"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-6 months",
      yield_estimate: "Debt + penalty + compensation",
      tags: ["salary", "debt", "court"],
      steps: [
        "Record the debt: pay slips, bank statements, correspondence about salary",
        "Send a written claim to the employer with the debt calculation (registered mail)",
        "Contact the Labor Inspectorate (online via State Services) — they are required to conduct an inspection",
        "File a complaint with the prosecutor's office (if the debt exceeds 2 months — criminal liability)",
        "File a lawsuit simultaneously — demand: wages + penalty of 1/150 of the Central Bank rate for each day of delay + compensation",
        "If the employer is an individual entrepreneur or LLC with one founder — you can collect from the founder personally"
      ],
      warnings: [
        "DO NOT wait — the longer you wait, the harder it is to collect",
        "Statute of limitations — 1 year, but the penalty is calculated from the first day of delay",
        "If the employer is bankrupt — register as a creditor through the bankruptcy trustee",
        "Being fired for demanding wages is ILLEGAL — you can also challenge it in court"
      ]
    },
    // ========================================
    // 3. Work without an employment contract
    // ========================================
    {
      id: "no_contract",
      title: "📄 Work without an employment contract",
      description: "Working 'off the books' is risky, but you are still protected by law. The main thing is to prove the fact of work.",
      conditions: { labor_issue: ["contract"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2-6 months",
      yield_estimate: "Recognition of employment relationship + payments",
      tags: ["contract", "illegal", "court"],
      steps: [
        "Collect proof of work: task correspondence, photos at the workplace, meeting records, witnesses",
        "Request 2-NDFL or bank statement — any traces of payment",
        "Send a claim to the employer regarding the conclusion of an employment contract and payment",
        "Contact the Labor Inspectorate — fines for unregistered employees up to 100,000 rubles",
        "File a lawsuit: recognition of employment relationship + wage recovery + vacation pay + sick leave",
        "If you win — the employer will pay all contributions to the Pension Fund and Social Insurance Fund for the entire period"
      ],
      warnings: [
        "DO NOT leave work immediately — first record evidence",
        "Any correspondence in messengers is evidence (save screenshots)",
        "If paid in cash — look for witnesses or entries in the cash book",
        "The court can recognize an employment relationship even without a contract — based on the fact of work"
      ]
    },
    // ========================================
    // 4. Workplace bullying (mobbing)
    // ========================================
    {
      id: "bullying_work",
      title: "😰 Workplace bullying / mobbing",
      description: "Psychological pressure, insults, humiliation at work — this is mobbing. The law has protected you since 2022.",
      conditions: { labor_issue: ["boss_pressure"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-6 months",
      yield_estimate: "Compensation for moral damage + protection",
      tags: ["mobbing", "harassment", "law"],
      steps: [
        "Record ALL incidents of bullying: dates, times, what was said, witnesses",
        "Save correspondence, audio, video (if you are a participant — recording is legal)",
        "Submit a written complaint to the employer (director, HR, ethics committee)",
        "If the employer is inactive — complaint to the Labor Inspectorate",
        "Consult a psychologist and document the diagnosis (for moral damages compensation)",
        "For severe consequences (depression, PTSD) — lawsuit against the employer and perpetrators",
        "You can demand transfer to another position or dismissal by agreement with compensation"
      ],
      warnings: [
        "DO NOT stay silent — mobbing destroys health, seek professional help",
        "DO NOT sign a voluntary resignation under pressure — that's your protection",
        "Since 2022, the employer is OBLIGATED to stop bullying — inaction = fine",
        "If fired for complaining — it's illegal, challenge it in court"
      ]
    },
    // ========================================
    // 5. Unpaid overtime
    // ========================================
    {
      id: "overtime_pay",
      title: "⏰ Claiming payment for overtime work",
      description: "Overtime work must be paid at an increased rate. If not paid — demand it.",
      conditions: { labor_issue: ["overtime"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Overtime payment + penalty",
      tags: ["overtime", "unpaid", "law"],
      steps: [
        "Record overtime hours: timesheets, correspondence, printouts from work",
        "Check the employment contract — is there a clause on overtime",
        "Send a claim to the employer with calculation and demand for payment",
        "Contact the Labor Inspectorate — they will conduct an inspection",
        "If refused — file a lawsuit: demand overtime payment + penalty",
        "If the employer systematically forces overtime — complain to the prosecutor's office",
        "You can also demand compensation for moral damages"
      ],
      warnings: [
        "Overtime is allowed only with the employee's consent (Article 99 of the Labor Code)",
        "Payment: first 2 hours — at 1.5× rate, subsequent — at 2× (Article 152 of the Labor Code)",
        "If the employer engages overtime without consent — it's a violation",
        "Statute of limitations — 3 months, but it's better to act immediately"
      ]
    },
    // ========================================
    // 6. Vacation denial / unpaid vacation pay
    // ========================================
    {
      id: "vacation_refusal",
      title: "🏖️ Vacation denial or unpaid vacation pay",
      description: "Every employee has the right to annual paid leave. Denial or delay is a violation.",
      conditions: { labor_issue: ["vacation"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Vacation pay + compensation",
      tags: ["vacation", "denied", "law"],
      steps: [
        "Check the vacation schedule — if it exists, you have the right to leave",
        "Submit a vacation request to the employer (keep a copy)",
        "If denied — written claim demanding vacation pay",
        "Contact the Labor Inspectorate — they will obligate the employer to pay",
        "If vacation is denied for more than 2 years — you can demand compensation",
        "If resigning — demand compensation for unused vacation",
        "Lawsuit: recovery of vacation pay + penalty"
      ],
      warnings: [
        "Vacation in the first year of work can be taken after 6 months (Article 122 of the Labor Code)",
        "If the employer does not provide vacation for more than 2 years — it's a violation",
        "Compensation for unused vacation upon dismissal — mandatory",
        "Statute of limitations — 1 year, but it's better not to delay"
      ]
    },
    // ========================================
    // 7. Discrimination at work
    // ========================================
    {
      id: "discrimination_claim",
      title: "⚖️ Discrimination at work",
      description: "Discrimination based on gender, age, nationality, and other characteristics is prohibited by law.",
      conditions: { labor_issue: ["discrimination"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "3-12 months",
      yield_estimate: "Compensation + restoration of rights",
      tags: ["discrimination", "unfair", "court"],
      steps: [
        "Collect evidence: work refusals, orders, correspondence, witness statements",
        "Submit a complaint to the employer (internal company policy)",
        "Contact the Labor Inspectorate — they will conduct an inspection",
        "Submit a complaint to the prosecutor's office if discrimination is widespread",
        "If there is damage (non-payment, denial of position) — file a lawsuit",
        "In the claim demand: reinstatement, payment for forced absence, compensation for moral damages",
        "Contact the ethics committee or ombudsman (if available)"
      ],
      warnings: [
        "Discrimination is prohibited by Article 3 of the Labor Code",
        "Statute of limitations — 3 months, but for discrimination you can file immediately",
        "If you win the lawsuit — the employer may face administrative and criminal liability",
        "DO NOT be afraid to speak up — courts often side with the employee"
      ]
    }
  ]
};

// ===== EXPORT =====
window.laborDataEn = laborDataEn;
