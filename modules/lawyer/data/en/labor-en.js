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
