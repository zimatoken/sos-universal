// === LAWYER - РАЗВОД И АЛИМЕНТЫ (ENGLISH) ===

const divorceDataEn = {
  category: "divorce",
  icon: "💔",
  title: "💔 Divorce & Alimony",
  description: "Legal procedures for divorce and alimony arrangements",
  questions: [
    {
      id: "marriage_status",
      text: "What is the current marriage status?",
      type: "single",
      options: [
        { id: "together", label: "❓ Still married, considering divorce", tags: ["contemplation", "counseling", "preparation"] },
        { id: "separated", label: "👋 Separated, living apart", tags: ["separated", "negotiation", "process"] },
        { id: "filing", label: "📝 Ready to file for divorce", tags: ["filing", "legal", "formal"] }
      ]
    },
    {
      id: "children",
      text: "Are there children from the marriage?",
      type: "single",
      options: [
        { id: "yes_kids", label: "👶 Yes, children involved", tags: ["children", "custody", "support"] },
        { id: "no_kids", label: "❌ No children", tags: ["no_children", "property", "simple"] }
      ]
    }
  ],
  solutions: [
    {
      id: "mediation",
      title: "🤝 Divorce Mediation",
      description: "Resolve divorce issues through mediation to avoid court",
      conditions: {
        marriage_status: ["together", "separated"]
      },
      tags: ["mediation", "amicable", "faster"],
      priority: "fast",
      reliability: "medium",
      time_estimate: "3-6 months",
      steps: [
        "Both parties agree to mediation",
        "Choose qualified family mediator",
        "Discuss division of assets and debts",
        "If children, arrange custody and visitation",
        "Determine alimony/child support amounts",
        "Create mediated settlement agreement",
        "File uncontested divorce with agreement"
      ],
      warnings: [
        "Mediation requires cooperation from both parties",
        "Agreement must be fair to be approved by court",
        "Can still go to court if mediation fails"
      ]
    },
    {
      id: "custody_arrangement",
      title: "👶 Child Custody & Support",
      description: "Arrangements for children during divorce",
      conditions: {
        children: ["yes_kids"]
      },
      tags: ["children", "custody", "support"],
      priority: "medium",
      reliability: "high",
      time_estimate: "3-6 months",
      steps: [
        "Determine best interests of the child",
        "Arrange physical custody (sole, joint, shared)",
        "Establish visitation schedule",
        "Calculate child support based on income",
        "Arrange health insurance coverage",
        "Create parenting plan for communication",
        "Make provisions for holiday/vacation schedules"
      ],
      warnings: [
        "Court prioritizes child's best interests",
        "Child support is mandatory, not optional",
        "Custody can be modified if circumstances change"
      ]
    },
    {
      id: "contested_divorce",
      title: "⚖️ Contested Divorce",
      description: "Full court process when parties cannot agree",
      conditions: {
        marriage_status: ["filing"]
      },
      tags: ["legal", "court", "expensive"],
      priority: "slow",
      reliability: "high",
      time_estimate: "12-24 months",
      steps: [
        "File divorce petition with court",
        "Serve papers on spouse",
        "Spouse files response (within 30 days)",
        "Discovery phase (exchange of financial documents)",
        "Attempt settlement conference",
        "Court trial if no settlement",
        "Judge issues final divorce decree"
      ],
      warnings: [
        "This is expensive and time-consuming",
        "Emotionally draining for all involved",
        "Attorney fees can be substantial"
      ]
    }
  ]
};

window.divorceDataEn = divorceDataEn;
