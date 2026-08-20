// modules/children/data/en/school-en.js
// === MODULE: CHILDREN — SCHOOL ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "children",
    category: "school",
    version: "1.0.0",
    lang: "en",
    title: "🏫 School",
    description: "Academic problems, teacher conflicts, bullying, drugs, aggression, school refusal — how to help your child",
    icon: "🏫",
    color: "#db2777"
  },

  questions: [
    {
      id: "problem",
      type: "single",
      text: "What is the main school problem?",
      options: [
        { id: "refusal", label: "🚫 Child doesn't want to go to school / truancy", tags: ["refusal"] },
        { id: "grades", label: "📊 Academic problems / poor grades", tags: ["grades"] },
        { id: "teacher", label: "👨‍🏫 Conflict with teacher / unfair treatment", tags: ["teacher"] },
        { id: "bullying", label: "💔 Bullying / exclusion in class", tags: ["bullying"] },
        { id: "substances", label: "🚬 Drugs / smoking / alcohol", tags: ["substances"] },
        { id: "aggression", label: "😠 Aggression / fights / discipline violations", tags: ["aggression"] },
        { id: "discipline", label: "📋 Discipline problems / behavior issues", tags: ["discipline"] },
        { id: "exam", label: "📝 Fear of exams / university entrance", tags: ["exam"] },
        { id: "career", label: "🤔 Doesn't know what career to choose", tags: ["career"] }
      ]
    },
    {
      id: "age_group",
      type: "single",
      text: "What grade / age?",
      conditions: { problem: ["refusal", "grades", "teacher", "bullying", "substances", "aggression", "discipline", "exam", "career"] },
      options: [
        { id: "primary", label: "📚 Grades 1–4 (6–10 years)", tags: ["primary"] },
        { id: "middle", label: "📖 Grades 5–9 (10–15 years)", tags: ["middle"] },
        { id: "high", label: "🎓 Grades 10–11 / college (15–18 years)", tags: ["high"] }
      ]
    },
    {
      id: "urgency",
      type: "single",
      text: "How long and how serious is it?",
      conditions: { problem: ["refusal", "grades", "teacher", "bullying", "substances", "aggression", "discipline", "exam", "career"] },
      options: [
        { id: "acute", label: "⚡ Happened today / yesterday — acute", tags: ["acute"] },
        { id: "accumulated", label: "📅 Been building up for weeks/months", tags: ["accumulated"] },
        { id: "chronic", label: "📈 Chronic problem (6+ months)", tags: ["chronic"] }
      ]
    },
    {
      id: "emotional_state",
      type: "single",
      text: "What is the child's emotional state?",
      conditions: { problem: ["refusal", "grades", "teacher", "bullying", "substances", "aggression", "discipline", "exam", "career"] },
      options: [
        { id: "sad", label: "😢 Sad, depressed", tags: ["sad"] },
        { id: "angry", label: "😠 Angry, irritable", tags: ["angry"] },
        { id: "anxious", label: "😰 Anxious, scared", tags: ["anxious"] },
        { id: "withdrawn", label: "🔇 Withdrawn, silent", tags: ["withdrawn"] },
        { id: "normal", label: "😌 Calm, open", tags: ["normal"] }
      ]
    },
    {
      id: "home_support",
      type: "single",
      text: "Does the child have support at home?",
      conditions: { problem: ["refusal", "grades", "teacher", "bullying", "substances", "aggression", "discipline", "exam", "career"] },
      options: [
        { id: "support_yes", label: "✅ Yes, I support them", tags: ["support_yes"] },
        { id: "support_no", label: "❌ No, I don't have the strength", tags: ["support_no"] },
        { id: "support_partial", label: "⚠️ I try, but it doesn't always work", tags: ["support_partial"] }
      ]
    },
    {
      id: "school_reaction",
      type: "single",
      text: "How is the school reacting to the problem?",
      conditions: { problem: ["refusal", "grades", "teacher", "bullying", "substances", "aggression", "discipline", "exam", "career"] },
      options: [
        { id: "school_help", label: "✅ They're helping, cooperative", tags: ["school_help"] },
        { id: "school_ignore", label: "😤 Ignoring / saying 'handle it yourselves'", tags: ["school_ignore"] },
        { id: "school_not_yet", label: "❓ Haven't contacted them yet", tags: ["school_not_yet"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. SCHOOL REFUSAL
    // ============================================================
    {
      id: "school_refusal",
      title: "🚪 Child doesn't want to go to school — causes and solutions",
      description: "Crying in the morning, pretending to be sick, running away. This is not laziness — it's a cry for help.",
      conditions: { problem: ["refusal"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Child returns to school",
      tags: ["refusal", "anxiety", "school"],
      steps: [
        "DON'T yell or punish. Say: 'I see you're struggling. Let's figure this out together'.",
        "Find the cause: bullying, teacher conflict, poor grades, anxiety.",
        "If bullying — see the 'Bullying' module. Act immediately.",
        "If poor grades — get a tutor, talk to the teacher.",
        "If anxiety — see a psychologist, gradual return to school.",
        "If teacher conflict — talk to the class teacher.",
        "Create a 'safe route': walk them, meet them, find a friend to walk with.",
        "Reward effort, not results.",
        "If they haven't gone for months — consider homeschooling or changing schools."
      ],
      warnings: [
        "DON'T force the child to school — it worsens the trauma.",
        "DON'T pretend there's no problem — truancy is a symptom.",
        "DON'T compare to other children — destroys self-esteem.",
        "If the child threatens self-harm — psychologist, helpline (8-800-2000-122)."
      ]
    },

    // ============================================================
    // 2. TEACHER CONFLICT
    // ============================================================
    {
      id: "teacher_conflict",
      title: "👨‍🏫 Teacher conflict — how to protect your child",
      description: "Teacher yells, humiliates, gives unfair grades. This is not 'strictness' — it's pedagogical violence.",
      conditions: { problem: ["teacher"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Pressure stopped, justice restored",
      tags: ["teacher", "conflict", "school"],
      steps: [
        "Gather facts: dates, quotes, witnesses. Document EVERYTHING.",
        "Talk to the teacher privately (without the child). Calmly, respectfully.",
        "If it doesn't help — write to the principal with a copy to the education department.",
        "If the teacher insults — contact the police.",
        "Talk to other parents — you may not be alone.",
        "Protect your child: 'This is the teacher's problem, not yours'.",
        "Demand transfer to another class or a different teacher.",
        "If ignored — prosecutor's office, consumer protection."
      ],
      warnings: [
        "DON'T confront the teacher aggressively — it discredits you.",
        "DON'T blame your child for a 'deserved' bad grade.",
        "DON'T publicly insult the teacher in the parent chat."
      ]
    },

    // ============================================================
    // 3. BULLYING (REFER TO MODULE)
    // ============================================================
    {
      id: "bullying_school",
      title: "💔 Bullying at school — refer to 'Bullying' module",
      description: "Bullying, exclusion, harassment in class — a serious problem. Use the specialized module.",
      conditions: { problem: ["bullying"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Bullying stopped",
      tags: ["bullying", "school", "harassment"],
      steps: [
        "Bullying at school is psychological violence. Refer to the 'Bullying' module.",
        "Main steps: gather evidence, talk to your child, contact the principal.",
        "If the school is inactive — police, prosecutor's office, education department.",
        "Protect your child: work with a psychologist, possibly transfer to another school.",
        "Don't leave your child alone with the problem."
      ],
      warnings: [
        "Bullying doesn't 'go away on its own'. Without intervention, it leaves lifelong trauma.",
        "DON'T tell your child to 'fight back' — it may worsen the bullying.",
        "DON'T ignore it — you are your child's only protection."
      ]
    },

    // ============================================================
    // 4. POOR GRADES
    // ============================================================
    {
      id: "bad_grades",
      title: "📉 Academic problems — without yelling and pressure",
      description: "Poor grades, not understanding, 'I don't want to study'. Causes vary: from inattention to dyslexia.",
      conditions: { problem: ["grades"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Grades improved, attitude to learning improved",
      tags: ["grades", "learning", "motivation"],
      steps: [
        "DON'T yell or punish for bad grades. Fear doesn't create motivation.",
        "Talk to the teacher: what exactly is the problem?",
        "Check vision and hearing. Often 'not understanding' is just not seeing the board.",
        "Check for dyslexia, dysgraphia, ADHD. See a neurologist.",
        "Get a tutor for the specific subject.",
        "Create a routine: fixed homework time, breaks.",
        "Reward effort, not the grade.",
        "Find the 'entry point': games, comics, audiobooks."
      ],
      warnings: [
        "DON'T compare to classmates — it poisons self-esteem.",
        "DON'T use grades as the only measure.",
        "DON'T overload with extracurriculars — balance is important.",
        "If your child says 'I'm stupid' — see a psychologist immediately."
      ]
    },

    // ============================================================
    // 5. SUBSTANCES
    // ============================================================
    {
      id: "substances_at_school",
      title: "🚬 Drugs, smoking, alcohol — child involved",
      description: "Smoking, drinking, trying 'spice', 'salts', vaping. This is life-threatening.",
      conditions: { problem: ["substances"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Use stopped, child helped",
      tags: ["substances", "drugs", "teen"],
      steps: [
        "DON'T yell or hit. Say: 'I'm scared for you. Let's talk'.",
        "Find out the scope: what, how much, how often, with whom, why.",
        "If it's an experiment — talk, explain consequences, set boundaries.",
        "If systematic — immediately see a narcologist.",
        "Check the friend group — you may need to change schools.",
        "Check the family — children copy adults.",
        "See a psychologist. Addiction is a way to cope with pain.",
        "If they refuse help — possibly forced treatment.",
        "Prevention: talk about drugs openly, without taboos."
      ],
      warnings: [
        "DON'T ignore 'just tried' — addiction can start from the first try.",
        "DON'T try to 'treat' yourself — addiction is a disease.",
        "DON'T shame — it worsens alienation.",
        "Vaping = nicotine addiction + lung damage."
      ]
    },

    // ============================================================
    // 6. AGGRESSION
    // ============================================================
    {
      id: "school_aggression",
      title: "👊 Aggression, fights, discipline violations",
      description: "Child fights, yells at teachers, breaks things. This is a cry for help.",
      conditions: { problem: ["aggression"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1–6 months",
      yield_estimate: "Aggression reduced, causes understood",
      tags: ["aggression", "behavior", "psychology"],
      steps: [
        "DON'T respond with aggression. Stay calm.",
        "Find the cause: bullying, family problems, ADHD, autism.",
        "See a psychologist, psychotherapist, neurologist.",
        "Talk to the class teacher and school psychologist.",
        "Set clear boundaries at home.",
        "Teach alternatives to aggression.",
        "If aggression is directed at you — family psychologist.",
        "If serious — juvenile commission, police, possible forced treatment."
      ],
      warnings: [
        "DON'T hit an aggressive child — violence breeds violence.",
        "DON'T label them 'psychopath' — aggression is a symptom.",
        "DON'T transfer to another school without working on the problem."
      ]
    },

    // ============================================================
    // 7. DISCIPLINE PROBLEMS
    // ============================================================
    {
      id: "discipline_problems",
      title: "📋 Discipline and behavior problems at school",
      description: "Child breaks rules, doesn't listen, disrupts classes. Could be ADHD, anxiety, or family issues.",
      conditions: { problem: ["discipline"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–6 months",
      yield_estimate: "Behavior improved",
      tags: ["discipline", "behavior", "school"],
      steps: [
        "Find the cause: ADHD, anxiety, family problems.",
        "See a neurologist and psychologist for diagnosis.",
        "Talk to the teacher: ask for an individual approach.",
        "Set clear rules at home and school.",
        "Use a reward system for good behavior.",
        "If problems are serious — work with the school psychologist."
      ],
      warnings: [
        "DON'T punish without explanation.",
        "DON'T ignore problems — they won't go away on their own."
      ]
    },

    // ============================================================
    // 8. EXAM FEAR / UNIVERSITY ENTRANCE
    // ============================================================
    {
      id: "exam_preparation",
      title: "📝 Fear of exams / university entrance — how to help",
      description: "Exam fear is normal. But if it paralyzes — help is needed.",
      conditions: { problem: ["exam"], age_group: ["high"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–6 months",
      yield_estimate: "Stress reduced, exam preparation",
      tags: ["exam", "stress", "high_school"],
      steps: [
        "Talk to your child: 'You're scared? That's normal. We'll get through this'.",
        "Make a preparation plan: schedule, tutors, mock exams.",
        "Teach breathing and relaxation techniques.",
        "Ensure 8–9 hours of sleep, proper nutrition, walks.",
        "Don't pressure — support is more important than control.",
        "If fear paralyzes — see a psychologist.",
        "Remind: exam results are not a measure of human worth."
      ],
      warnings: [
        "DON'T threaten 'I won't pay for university' — it worsens fear.",
        "DON'T compare to others — destroys self-esteem.",
        "DON'T overload — rest is important for effective studying."
      ]
    },

    // ============================================================
    // 9. CAREER CHOICE
    // ============================================================
    {
      id: "career_choice",
      title: "🤔 Child doesn't know what career to choose — how to help",
      description: "Choosing a career is a difficult decision. Help your child understand themselves and the world of work.",
      conditions: { problem: ["career"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–6 months",
      yield_estimate: "Direction for career choice",
      tags: ["career", "choice", "future"],
      steps: [
        "Talk about their interests: what do they like doing? What are they good at?",
        "Take career tests.",
        "Visit university and college open days.",
        "Talk to people in different professions.",
        "Suggest trying different fields (volunteering, internships).",
        "Don't pressure — the choice should be theirs.",
        "Explain: it's okay to make mistakes and change careers."
      ],
      warnings: [
        "DON'T impose your profession — it's their life.",
        "DON'T dismiss their choices — support them."
      ]
    },

    // ============================================================
    // 10. SCHOOL EMERGENCY
    // ============================================================
    {
      id: "school_emergency",
      title: "🚨 Emergency situation at school — what to do",
      description: "Conflict involving weapons, threats, violence — emergency situation.",
      conditions: { problem: ["aggression", "bullying"], urgency: ["acute"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Child safe",
      tags: ["emergency", "violence", "school"],
      steps: [
        "IMMEDIATELY call 911 — police.",
        "DON'T try to resolve the situation yourself.",
        "Inform the school principal.",
        "Pick up your child from school until police arrive.",
        "Talk to your child: 'You're not to blame. We'll protect you'.",
        "See a psychologist — the situation is traumatic.",
        "Document everything: photos, video, witness statements."
      ],
      warnings: [
        "DON'T ignore threats — they could be real.",
        "DON'T try to handle it yourself — it's dangerous.",
        "DON'T leave your child without support."
      ]
    }
  ]
});