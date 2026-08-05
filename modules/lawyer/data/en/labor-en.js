<<<<<<< HEAD
// === MODULE: LABOR DISPUTES (ENGLISH) ===
const laborDataEn = {
  category: "labor",
  title: "💼 Labor Disputes",
  description: "Employee rights protection: dismissal, salary, discrimination, harassment",

  questions: [
    {
      id: "labor_issue",
      text: "What is your problem at work?",
      type: "single",
      options: [
        { id: "fired", label: "Fired / forced to resign", tags: ["fired", "unfair"] },
        { id: "salary", label: "Salary not paid / delayed", tags: ["salary", "delayed"] },
        { id: "boss_pressure", label: "Pressure from management / harassment (mobbing)", tags: ["mobbing", "harassment"] },
        { id: "contract", label: "Not officially employed / no employment contract", tags: ["contract", "illegal"] },
        { id: "overtime", label: "Forced to work overtime without pay", tags: ["overtime", "unpaid"] },
        { id: "vacation", label: "Vacation denied / vacation pay not given", tags: ["vacation", "denied"] },
        { id: "discrimination", label: "Discrimination (gender, age, nationality)", tags: ["discrimination", "unfair"] },
        { id: "injury", label: "Workplace accident / injury", tags: ["injury", "safety"] }
      ]
    },
    {
      id: "fired_type",
      text: "How exactly were you fired?",
      condition: { labor_issue: ["fired"] },
      options: [
        { id: "article", label: "Under a disciplinary article (truancy, lateness, violations)", tags: ["article", "disciplinary"] },
        { id: "agreement", label: "By mutual agreement (signed papers)", tags: ["agreement", "mutual"] },
        { id: "own_will", label: "Forced to resign voluntarily", tags: ["own_will", "forced"] },
        { id: "layoff", label: "Redundancy / layoff", tags: ["layoff", "reduction"] }
      ]
    },
    {
      id: "salary_delay",
      text: "How long have you not been paid?",
      condition: { labor_issue: ["salary"] },
      options: [
        { id: "week", label: "1-2 weeks", tags: ["short"] },
        { id: "month", label: "1-2 months", tags: ["medium"] },
        { id: "long", label: "More than 2 months", tags: ["long"] }
      ]
    },
    {
      id: "is_official",
      text: "Are you officially employed (employment contract, work record)?",
      options: [
        { id: "official_yes", label: "Yes, officially employed", tags: ["official"] },
        { id: "official_no", label: "No, working unofficially", tags: ["unofficial"] },
        { id: "official_gray", label: "Officially employed but salary 'in envelope'", tags: ["gray"] }
      ]
    },
    {
      id: "work_duration",
      text: "How long have you worked for this employer?",
      options: [
        { id: "less_year", label: "Less than a year", tags: ["short_term"] },
        { id: "one_three", label: "1-3 years", tags: ["medium_term"] },
        { id: "more_three", label: "More than 3 years", tags: ["long_term"] }
      ]
    },
    {
      id: "has_documents",
      text: "Did you receive copies of documents (termination order, pay slip)?",
      condition: { labor_issue: ["fired", "salary"] },
      options: [
        { id: "docs_yes", label: "Yes, all documents in hand", tags: ["docs_yes"] },
        { id: "docs_no", label: "No, the employer did not provide them", tags: ["docs_no"] },
        { id: "docs_partial", label: "Partially", tags: ["docs_partial"] }
      ]
    },
    {
      id: "discrimination_type",
      text: "What type of discrimination?",
      condition: { labor_issue: ["discrimination"] },
      options: [
        { id: "gender", label: "Gender-based (female/male)", tags: ["gender"] },
        { id: "age", label: "Age-based (young/elderly)", tags: ["age"] },
        { id: "nationality", label: "Nationality / citizenship-based", tags: ["nationality"] },
        { id: "other", label: "Other (religion, appearance, etc.)", tags: ["other"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Forced resignation
    // ========================================
    {
      id: "forced_quit",
      title: "📝 Forced resignation (Article 80 of the Labor Code)",
      description: "If you were forced to resign voluntarily — it is illegal. You can be reinstated and receive compensation.",
      conditions: { labor_issue: ["fired"], fired_type: ["own_will"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Reinstatement + pay for forced leave + moral damages",
      tags: ["fired", "unfair", "court"],
      steps: [
        "Gather evidence of pressure: correspondence, witnesses, audio recordings (legal if you are a participant)",
        "Check your work record — if it says 'voluntarily' — this is your advantage",
        "Send a claim to the employer demanding recognition of the dismissal as illegal (registered mail)",
        "File a lawsuit within 1 month of the dismissal!",
        "In the lawsuit, demand: reinstatement, payment for forced leave, moral damages",
        "If you don't want reinstatement — demand changing the entry to 'by agreement' + severance pay"
      ],
      warnings: [
        "LIMITATION PERIOD — 1 MONTH from the date of dismissal. If you miss it, you lose.",
        "DO NOT sign anything under pressure — write 'I disagree' on all documents",
        "If fired 'for absenteeism' — check if a violation report was made (without a report, dismissal is illegal)",
        "Court costs (state fee) — the employer reimburses if you win"
      ]
    },
    // ========================================
    // 2. Salary arrears claim
    // ========================================
    {
      id: "salary_claim",
      title: "💰 Salary arrears claim",
      description: "Non-payment of salary is a violation of the law (Article 145.1 of the Criminal Code). There are several ways to resolve it.",
      conditions: { labor_issue: ["salary"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-6 months",
      yield_estimate: "Debt + penalty + compensation",
      tags: ["salary", "debt", "court"],
      steps: [
        "Record the arrears: pay slips, bank statements, correspondence about salary",
        "Send a written claim to the employer with a calculation of the debt (registered mail)",
        "Contact the Labor Inspectorate (online via Gosuslugi) — they are required to investigate",
        "File a complaint with the prosecutor's office (if the debt is more than 2 months — criminal liability)",
        "File a lawsuit simultaneously: demand the debt + 1/150 of the Central Bank rate for each day of delay + compensation",
        "If the employer is a sole proprietor or LLC with one founder — you can recover from the founder personally"
      ],
      warnings: [
        "DO NOT wait 'a little longer' — the longer you wait, the harder it is to recover",
        "Limitation period — 1 year, but the penalty is calculated from the first day of delay",
        "If the employer is bankrupt — register as a creditor through the arbitration manager",
        "Being fired for demanding salary is ILLEGAL — it can also be challenged in court"
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
      yield_estimate: "Recognition of employment + payments",
      tags: ["contract", "illegal", "court"],
      steps: [
        "Gather evidence of work: correspondence about tasks, photos at the workplace, meeting records, witnesses",
        "Request 2-NDFL or bank statements — any traces of payment",
        "Send a claim to the employer demanding an employment contract and payment",
        "Contact the Labor Inspectorate — a fine for an unregistered employee is up to 100,000 RUB",
        "File a lawsuit: recognition of employment + salary + vacation pay + sick leave",
        "If you win — the employer will pay all contributions to the Pension Fund and Social Insurance Fund for the entire period"
      ],
      warnings: [
        "DO NOT leave work immediately — first document the evidence",
        "Any correspondence in messengers is evidence (save screenshots)",
        "If paid in cash — look for witnesses or cash book records",
        "The court can recognize employment even without a contract — based on the fact of work"
      ]
    },
    // ========================================
    // 4. Harassment at work (mobbing)
    // ========================================
    {
      id: "bullying_work",
      title: "😰 Harassment at work / mobbing",
      description: "Psychological pressure, insults, humiliation at work — this is mobbing. The law since 2022 protects you.",
      conditions: { labor_issue: ["boss_pressure"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1-6 months",
      yield_estimate: "Moral damages + protection",
      tags: ["mobbing", "harassment", "law"],
      steps: [
        "Record ALL incidents of harassment: dates, times, what was said, witnesses",
        "Save correspondence, audio, video (if you are a participant — the recording is legal)",
        "Send a written complaint to the employer (director, HR, ethics committee)",
        "If the employer does nothing — complaint to the Labor Inspectorate",
        "Consult a psychologist and document the diagnosis (for moral damages)",
        "For severe consequences (depression, PTSD) — lawsuit against the employer and the perpetrators",
        "You can request a transfer to another position or termination by agreement with compensation"
      ],
      warnings: [
        "DO NOT remain silent — mobbing destroys health, seek professional help",
        "DO NOT sign a voluntary resignation under pressure — it's your protection",
        "Since 2022, the employer is OBLIGATED to stop harassment — inaction = fine",
        "If fired for complaining — it's illegal, challenge it in court"
      ]
    },
    // ========================================
    // 5. Overtime without pay
    // ========================================
    {
      id: "overtime_pay",
      title: "⏰ Overtime pay claim",
      description: "Overtime must be paid at an increased rate. If not paid — demand it.",
      conditions: { labor_issue: ["overtime"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Overtime pay + penalty",
      tags: ["overtime", "unpaid", "law"],
      steps: [
        "Record overtime hours: timesheets, correspondence, work logs",
        "Check the employment contract — is there a clause on overtime",
        "Send a claim to the employer with a calculation and demand for payment",
        "Contact the Labor Inspectorate — they will conduct an inspection",
        "If refused — file a lawsuit: demand overtime pay + penalty",
        "If the employer forces overtime systematically — complain to the prosecutor's office",
        "You can also demand moral damages"
      ],
      warnings: [
        "Overtime is allowed only with the employee's consent (Article 99 of the Labor Code)",
        "Payment: first 2 hours — time-and-a-half, subsequent — double (Article 152 of the Labor Code)",
        "If the employer requires overtime without consent — it's a violation",
        "Limitation period — 3 months, but better to act immediately"
      ]
    },
    // ========================================
    // 6. Vacation denial / unpaid vacation
    // ========================================
    {
      id: "vacation_refusal",
      title: "🏖️ Vacation denial or unpaid vacation",
      description: "Every employee has the right to annual paid vacation. Denial or delay is a violation.",
      conditions: { labor_issue: ["vacation"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 months",
      yield_estimate: "Vacation pay + compensation",
      tags: ["vacation", "denied", "law"],
      steps: [
        "Check the vacation schedule — if there is one, you have the right to vacation",
        "Submit a vacation application to the employer (keep a copy)",
        "If refused — written complaint demanding vacation pay",
        "Contact the Labor Inspectorate — they will compel the employer to pay",
        "If vacation is denied for more than 2 years — you can demand compensation",
        "If resigning — demand compensation for unused vacation",
        "File a lawsuit: recover vacation pay + penalty"
      ],
      warnings: [
        "Vacation for the first year of work can be taken after 6 months (Article 122 of the Labor Code)",
        "If the employer does not give vacation for more than 2 years — it's a violation",
        "Compensation for unused vacation upon dismissal is mandatory",
        "Limitation period — 1 year, but better not to delay"
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
        "Gather evidence: job rejections, orders, correspondence, witness testimony",
        "File a complaint with the employer (internal company policy)",
        "Contact the Labor Inspectorate — they will conduct an inspection",
        "File a complaint with the prosecutor's office if discrimination is widespread",
        "If there is damage (non-payment, denial of promotion) — file a lawsuit",
        "In the lawsuit, demand: reinstatement, payment for forced leave, moral damages",
        "Contact the ethics committee or ombudsman (if available)"
      ],
      warnings: [
        "Discrimination is prohibited by Article 3 of the Labor Code",
        "Limitation period — 3 months, but for discrimination, you can file immediately",
        "If you win the case — the employer may face administrative and criminal liability",
        "DO NOT be afraid to speak up — courts often side with the employee"
      ]
    }
  ]
};

// ===== EXPORT =====
window.laborDataEn = laborDataEn;
=======
// === LAWYER - ТРУДОВЫЕ СПОРЫ (ENGLISH) ===

const laborDataEn = {
  category: "labor",
  icon: "💼",
  title: "💼 Labor Disputes",
  description: "Rights in labor disputes with employer",
  questions: [
    {
      id: "issue_type",
      text: "What is the dispute about?",
      type: "single",
      options: [
        { id: "unpaid_wages", label: "💰 Unpaid wages or salary", tags: ["wages", "money", "labor"] },
        { id: "illegal_firing", label: "🚫 Illegal firing / wrongful termination", tags: ["firing", "wrongful", "illegal"] },
        { id: "overtime", label: "⏰ Unpaid overtime", tags: ["overtime", "hours", "compensation"] },
        { id: "harassment", label: "😡 Workplace harassment", tags: ["harassment", "safety", "abuse"] }
      ]
    },
    {
      id: "contract",
      text: "Do you have a written employment contract?",
      type: "single",
      options: [
        { id: "yes_formal", label: "✅ Yes, formal written contract", tags: ["contract", "formal", "evidence"] },
        { id: "no", label: "❌ No contract or verbal only", tags: ["no_contract", "verbal", "difficult"] }
      ]
    }
  ],
  solutions: [
    {
      id: "labor_inspection",
      title: "🏢 Labor Inspection Complaint",
      description: "File a complaint with the Labor Inspectorate (GIT)",
      conditions: {
        issue_type: ["unpaid_wages", "illegal_firing", "overtime"]
      },
      tags: ["official", "fast", "free"],
      priority: "fast",
      reliability: "high",
      time_estimate: "2-4 weeks",
      steps: [
        "Gather evidence: payslips, timesheets, employment contract",
        "File complaint online at the Labor Inspectorate website",
        "Attach all documents proving your case",
        "Wait for inspector to investigate",
        "Participate in inspection if required",
        "Receive official resolution order"
      ],
      warnings: [
        "Keep copies of all documents",
        "Don't quit your job until resolution",
        "Consult a lawyer for complex cases"
      ]
    },
    {
      id: "negotiation",
      title: "🗣️ Direct Negotiation with Employer",
      description: "Try to resolve the dispute through direct communication first",
      conditions: {
        issue_type: ["unpaid_wages", "overtime"]
      },
      tags: ["negotiation", "communication", "informal"],
      priority: "fast",
      reliability: "medium",
      time_estimate: "1-3 days",
      steps: [
        "Schedule a formal meeting with HR or manager",
        "Present your calculation of unpaid amounts",
        "Refer to labor law and employment contract",
        "Request payment within specific timeframe",
        "Follow up in writing if no response",
        "Escalate to higher management if needed"
      ],
      warnings: [
        "Document all communication in writing",
        "Be professional but firm",
        "Set clear deadlines for response"
      ]
    },
    {
      id: "court_action",
      title: "⚖️ Labor Court Lawsuit",
      description: "File a lawsuit in labor court for wage claims",
      conditions: {
        issue_type: ["illegal_firing", "harassment"],
        contract: ["yes_formal"]
      },
      tags: ["legal", "court", "formal"],
      priority: "slow",
      reliability: "high",
      time_estimate: "3-6 months",
      steps: [
        "Prepare all evidence and documentation",
        "File a pre-trial claim in labor court",
        "Wait for employer's response (30 days)",
        "If no response or denial, file formal lawsuit",
        "Attend court hearings",
        "Enforce court decision if employer refuses"
      ],
      warnings: [
        "This is a lengthy process",
        "Legal costs may apply",
        "Statute of limitations is 3 months for wages"
      ]
    }
  ]
};

// ===== EXPORT =====
window.laborDataEn = laborDataEn;
>>>>>>> 92849c5936c3da4acab85528b91f11224f9f55d1
