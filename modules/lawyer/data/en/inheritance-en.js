// === LAWYER - НАСЛЕДСТВО (ENGLISH) ===

const inheritanceDataEn = {
  category: "inheritance",
  icon: "📜",
  title: "📜 Inheritance",
  description: "Legal procedures for inheritance and wills",
  questions: [
    {
      id: "will_exists",
      text: "Is there a valid will?",
      type: "single",
      options: [
        { id: "yes_will", label: "✅ Yes, there is a will", tags: ["will", "testament", "executor"] },
        { id: "no_will", label: "❌ No will or will is invalid", tags: ["intestate", "probate", "heirs"] },
        { id: "unknown", label: "❓ Not sure / need to find out", tags: ["search", "notary", "investigation"] }
      ]
    },
    {
      id: "dispute",
      text: "Is there a dispute over inheritance?",
      type: "single",
      options: [
        { id: "no_dispute", label: "✅ No dispute, all agree", tags: ["agreement", "simple", "probate"] },
        { id: "heirs_dispute", label: "⚔️ Heirs disagree on distribution", tags: ["dispute", "mediation", "court"] },
        { id: "will_contested", label: "📝 Will is being contested", tags: ["contest", "invalidation", "court"] }
      ]
    }
  ],
  solutions: [
    {
      id: "probate_will",
      title: "📋 Probate the Will",
      description: "Official validation of will through probate court",
      conditions: {
        will_exists: ["yes_will"],
        dispute: ["no_dispute"]
      },
      tags: ["formal", "legal", "court"],
      priority: "medium",
      reliability: "high",
      time_estimate: "6-12 months",
      steps: [
        "Submit will to probate court within 6 months of death",
        "Appoint executor (named in will or court-appointed)",
        "Notify all beneficiaries",
        "Inventory and appraise estate assets",
        "Pay debts and taxes from estate",
        "Distribute remaining assets according to will"
      ],
      warnings: [
        "Cannot distribute assets before probate",
        "Executor has fiduciary duties to heirs",
        "Probate can be lengthy and costly"
      ]
    },
    {
      id: "intestate_heirs",
      title: "⚖️ Intestate Succession (No Will)",
      description: "Inheritance according to law when there is no will",
      conditions: {
        will_exists: ["no_will"],
        dispute: ["no_dispute"]
      },
      tags: ["legal", "formal", "probate"],
      priority: "medium",
      reliability: "high",
      time_estimate: "6-12 months",
      steps: [
        "Apply to court for intestate succession",
        "Court determines legal heirs according to law",
        "Heirs inherit in statutory shares",
        "Court appoints administrator for estate",
        "Pay debts and taxes",
        "Distribute remaining assets to heirs"
      ],
      warnings: [
        "Spouse and children have priority over other relatives",
        "Debts must be paid before distribution",
        "Process is similar to probate but with court supervision"
      ]
    },
    {
      id: "mediation",
      title: "🤝 Family Mediation",
      description: "Resolve inheritance disputes through mediation before court",
      conditions: {
        dispute: ["heirs_dispute", "will_contested"]
      },
      tags: ["mediation", "amicable", "faster"],
      priority: "fast",
      reliability: "medium",
      time_estimate: "2-6 months",
      steps: [
        "Propose family mediation to all parties",
        "Choose neutral mediator (family friend or professional)",
        "Each party presents their case",
        "Mediator facilitates compromise",
        "Reach agreement on distribution",
        "Formalize agreement legally if possible"
      ],
      warnings: [
        "Mediation is voluntary and non-binding",
        "Agreement may not hold if someone rejects it",
        "Consider legal advice before finalizing agreement"
      ]
    }
  ]
};

// ===== EXPORT =====
window.inheritanceDataEn = inheritanceDataEn;
