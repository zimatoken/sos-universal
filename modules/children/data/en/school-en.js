// === MODULE: CHILDREN — SCHOOL ===
const schoolDataEn = {
  category: "school",
  title: "🏫 School",
  description: "Learning problems, conflicts with teachers, bullying, substances, aggression — how to help your child",

  questions: [
    {
      id: "problem",
      text: "What problems have you noticed? (select all that apply)",
      type: "multi",
      options: [
        { id: "grades", label: "📊 Grades / learning difficulties / doesn't understand", tags: ["grades"] },
        { id: "teacher", label: "👨‍🏫 Conflict with teacher / unfair treatment / insults", tags: ["teacher"] },
        { id: "refusal", label: "🚫 Child refuses to go to school / truancy", tags: ["refusal"] },
        { id: "substances", label: "🚬 Drugs / smoking / alcohol at school or with friends", tags: ["substances"] },
        { id: "aggression", label: "😠 Aggression / fights / behavioral issues", tags: ["aggression"] },
        { id: "bullying", label: "💔 Bullying / exclusion / harassment at school", tags: ["bullying"] }
      ]
    },
    {
      id: "age_group",
      text: "What grade / age?",
      type: "single",
      conditions: { problem: ["grades", "teacher", "refusal", "substances", "aggression", "bullying"] },
      options: [
        { id: "primary", label: "📚 Grades 1–4 (ages 6–10)", tags: ["primary"] },
        { id: "middle", label: "📖 Grades 5–9 (ages 10–15)", tags: ["middle"] },
        { id: "high", label: "🎓 Grades 10–11 / college (ages 15–18)", tags: ["high"] }
      ]
    },
    {
      id: "urgency",
      text: "How long has this been going on and how serious is it?",
      type: "single",
      conditions: { problem: ["grades", "teacher", "refusal", "substances", "aggression", "bullying"] },
      options: [
        { id: "acute", label: "⚡ Happened today / yesterday — acute", tags: ["acute"] },
        { id: "accumulated", label: "📅 Building up for weeks / months", tags: ["accumulated"] },
        { id: "chronic", label: "📈 Chronic problem (6+ months)", tags: ["chronic"] }
      ]
    }
  ],

  solutions: [
    // ==========================================
    // 1. SCHOOL REFUSAL
    // ==========================================
    {
      id: "school_refusal",
      title: "🚪 Child refuses to go to school — causes and solutions",
      description: "Crying in the morning, faking illness, running away. This isn't laziness — it's a cry for help.",
      conditions: { problem: ["refusal"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–4 weeks",
      yield_estimate: "Returning the child to school",
      tags: ["refusal", "anxiety", "school"],
      steps: [
        "Don't yell or punish. Say: 'I see that you're struggling. Let's figure this out together.' Talk calmly, without pressure. Find the cause: bullying, conflict with teacher, poor grades, anxiety, family issues?",
        "If the child mentions bullying — see the 'Bullying' module. Act immediately: school, psychologist, possibly transfer",
        "If the cause is poor grades: hire a tutor, talk to the teacher about extra help. Don't yell about bad grades — yelling doesn't improve grades, it kills motivation",
        "If the cause is anxiety or social phobia: see a psychologist. Consider temporary online learning, gradual return (first 1 lesson, then 2). Don't throw them into the 'deep end'",
        "If there's a conflict with a teacher: talk to the homeroom teacher, head teacher, principal. Describe specific facts, not emotions. Request a written response. If no help — contact the education department, prosecutor's office",
        "Create a 'safe path' to school: walk them there, pick them up, arrange for a classmate to walk with them. One 'anchor point' reduces anxiety",
        "Reward effort, not results. 'You went today even though you were scared — well done!' Gradually increase time at school. Don't demand 'like everyone else' immediately",
        "If the child hasn't attended for months — consider homeschooling, online school, or changing schools. But this is a last resort. The priority is not to leave them without education and socialization"
      ],
      warnings: [
        "DON'T drag the child to school by force, don't yell 'everyone goes to school'. This intensifies trauma, anxiety, and hatred of school. It will take longer to recover",
        "DON'T pretend there's no problem, hoping it will 'go away on its own'. Truancy and refusal to go to school are symptoms of a deep problem. Ignoring leads to depression and maladjustment",
        "DON'T compare with other children ('but Vanya goes without any problems'). Every child is unique. Comparison destroys self-esteem and closes trust",
        "If the child threatens self-harm when you try to send them to school — immediately see a psychologist or call 911. This is an emergency"
      ]
    },
    // ==========================================
    // 2. TEACHER CONFLICT
    // ==========================================
    {
      id: "teacher_conflict",
      title: "👨‍🏫 Conflict with teacher — how to protect your child",
      description: "Teacher yells, humiliates, gives unfair grades, ignores. This is not 'strictness' — it's pedagogical abuse.",
      conditions: { problem: ["teacher"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–4 weeks",
      yield_estimate: "Stopping the pressure, restoring fairness",
      tags: ["teacher", "conflict", "school"],
      steps: [
        "Gather evidence: dates, quotes, witnesses, recordings (if legal). Document EVERYTHING. Emotions without facts are weak arguments. Specifics are power",
        "Talk to the teacher privately (without the child). Calmly, respectfully, but firmly: 'My child says [fact]. This concerns me. Let's sort this out.' Sometimes teachers don't realize their own behavior",
        "If the conversation doesn't help — write a formal complaint to the principal, copying the education department. Describe facts, attach evidence, demand a written response and action",
        "If the teacher humiliates, insults, or threatens — this is an administrative offense (Article 5.61 of the Administrative Code — insult), possibly criminal (Article 133 of the Criminal Code — slander). Contact the police, prosecutor's office",
        "Talk to other parents. Your child may not be the only victim. A joint complaint carries more weight than an individual one",
        "Protect your child emotionally: 'This is the teacher's problem, not yours. You are good and smart. We'll sort it out.' Don't let your child absorb humiliation",
        "If the conflict is unsolvable — demand transfer to another class or a different teacher. This is the child's right to quality education without trauma. Don't be afraid to 'make things worse' — trauma is worse than any transfer",
        "If the administration systematically ignores you — contact the prosecutor's office, Rospotrebnadzor, public organizations (Alliance of Teachers, Union of Parents). Publicity forces action"
      ],
      warnings: [
        "DON'T go to 'sort things out' with the teacher aggressively, with yelling or threats. This discredits you and your child. Calmness and facts are your strength",
        "DON'T blame your child for a 'deserved' bad grade if you suspect bias. Review the assignment, compare with others. Ask for the grading criteria",
        "Teachers are not gods. They can make mistakes, be tired, angry, or biased. Don't be afraid to defend your child's rights. Respect for the profession ≠ submission",
        "DON'T publicly insult the teacher in the parent chat — that's slander and you could be held liable. Use facts, documents, official channels"
      ]
    },
    {
      id: "teacher_conflict_primary",
      title: "👶 Teacher conflict in elementary school",
      description: "For younger children, the teacher is an authority figure. Conflict is especially traumatic.",
      conditions: { problem: ["teacher"], age_group: ["primary"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 weeks",
      yield_estimate: "Restoring trust in school",
      tags: ["teacher", "primary", "conflict"],
      steps: [
        "In elementary school, children perceive teacher criticism as a personal catastrophe. Talk to your child: 'The teacher was upset, but that doesn't mean you're bad'",
        "Go to the school, ask the teacher to praise your child in front of the class — this will restore their status",
        "If the teacher systematically humiliates — go to the principal immediately. Young children cannot defend themselves",
        "Explain to your child: 'We talked to the teacher. They'll be more careful. If anything happens — tell me'"
      ],
      warnings: [
        "Young children can't distinguish criticism of an action from criticism of their person",
        "DON'T say 'the teacher is always right' — this breaks your child's trust in you"
      ]
    },
    // ==========================================
    // 3. POOR GRADES
    // ==========================================
    {
      id: "bad_grades",
      title: "📉 Learning difficulties — without yelling or pressure",
      description: "Failing grades, not understanding, 'I don't want to study', skipping class. Causes vary: from attention issues to dyslexia.",
      conditions: { problem: ["grades"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–3 months",
      yield_estimate: "Improved grades and attitude toward learning",
      tags: ["grades", "learning", "motivation"],
      steps: [
        "Don't yell or punish for bad grades. Yelling creates fear, not a desire to learn. The child starts fearing mistakes, not striving for knowledge. Say: 'Let's figure out what you don't understand'",
        "Talk to the teacher: what's the specific problem? Doesn't know the material? Doesn't do homework? Gets distracted? Doesn't understand explanations? Specifics help find solutions",
        "Check vision and hearing. Often 'not understanding' is simply not seeing the board or not hearing the teacher. Get examined by an optometrist and ENT",
        "Get tested for dyslexia, dysgraphia, ADHD. If the child is 'difficult', 'restless', mixes up letters — this is not laziness, but nervous system characteristics. See a neurologist, psychologist, or speech pathologist",
        "Hire a tutor. Not just 'to have one', but for specific subjects. 2–3 sessions per week, one-on-one. Group sessions are less effective if the child is behind",
        "Create a routine: fixed homework time, breaks, rewards. Use the Pomodoro technique: 25 minutes of study, 5 minutes of rest. For ADHD — 15 minutes study, 5 minutes rest",
        "Reward effort, not grades. 'You tried — that's what matters.' If your child got a C but learned more than before — praise the progress. The grade isn't the main thing — growth is",
        "Find a 'entry point': if math isn't working — start with games (Monopoly, chess, Minecraft with redstone). If Russian — with comics, audiobooks. Engage them, don't force them"
      ],
      warnings: [
        "DON'T compare with classmates, siblings. 'But Vanya already gets A's' — this is poison for self-esteem. Every child develops at their own pace",
        "DON'T use grades as the only criterion. A successful person isn't one who got A's, but one who can think, learn, and not give up. Cultivate these qualities",
        "DON'T overload with extra activities. If the child is already tired from school, 5 clubs + a tutor = burnout. Balance is more important",
        "If the child says 'I'm stupid' — this is a red flag. Low self-esteem, learned helplessness. Immediately see a psychologist. It won't 'go away on its own'"
      ]
    },
    {
      id: "bad_grades_high",
      title: "🎓 Academic difficulties in high school — exam preparation",
      description: "In grades 10–11, failing grades aren't just 'not understanding the topic' — they threaten college admission. Stress is enormous.",
      conditions: { problem: ["grades"], age_group: ["high"] },
      priority: "high",
      reliability: "high",
      time_estimate: "2–6 months",
      yield_estimate: "Exam preparation, stress reduction",
      tags: ["grades", "exam", "stress"],
      steps: [
        "High school students face enormous pressure: final exams, college admissions, the future. Failing grades are not a reason to yell, but a signal to revise strategy",
        "Conduct a diagnostic: which subjects are 'failing'? Is the child spending too much time on irrelevant subjects?",
        "Hire tutors for core subjects. In grades 10–11, skimping on tutors = losing exam points",
        "Reduce the load: consider dropping extracurriculars unrelated to college goals. Free up time for studying and sleep",
        "If the child is burned out — take a 1–2 week break, rest. Studying without rest is ineffective",
        "Check psychological state: anxiety, depression, panic attacks before exams — reason to see a psychologist"
      ],
      warnings: [
        "In grades 10–11, parental pressure often worsens the problem. Be a support, not an additional source of stress",
        "DON'T threaten 'I won't pay for college' — this paralyzes will and intensifies fear",
        "Remember: exam results are not a measure of human worth. Health is more important than scores"
      ]
    },
    // ==========================================
    // 4. SUBSTANCES
    // ==========================================
    {
      id: "substances_at_school",
      title: "🚬 Drugs, smoking, alcohol — child is involved",
      description: "Smoking, drinking, trying 'spice', 'salts', vaping. Not 'teenage rebellion' — this is life-threatening.",
      conditions: { problem: ["substances"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 months",
      yield_estimate: "Stopping use, helping the child",
      tags: ["substances", "drugs", "teen"],
      steps: [
        "Don't yell, hit, or 'permanently' punish. This closes trust and worsens the problem. Say: 'I found out. I'm scared for you. Let's talk.' Calmness is key",
        "Determine the scope: what, how much, how often, with whom, where, why started. Don't interrogate like a detective. A conversation, not an interrogation. Reasons: peer pressure, curiosity, stress, bullying, trying to 'fit in'",
        "If it's experimentation (tried 1–2 times, not systematic) — talk, explain consequences, set boundaries. But don't relax: experimentation easily becomes habit",
        "If systematic use — immediately see a narcologist. Anonymous: national helpline (8-800-2000-122). Early help = chance for full recovery",
        "Check the social circle: who they hang out with, where they spend time. You may need to change schools, activities, neighborhoods. But don't isolate — loneliness worsens addiction",
        "Check the family: is there substance use among adults? Children copy. If parents smoke/drink — demands on the child are meaningless. Start with yourself",
        "See a psychologist. Addiction is not 'bad character' but a way of coping with pain: anxiety, loneliness, bullying, family problems. Treat the cause",
        "If the child refuses help, is aggressive, threatens — forced treatment may be necessary (health laws). A difficult step, but life is more important. Consult a lawyer",
        "Prevention: talk openly about drugs, without taboos. Explain: 'spice' and 'salts' are poisons, not 'light' drugs. Vaping is not a safe alternative to cigarettes. Show real consequences: photos, stories, documentaries"
      ],
      warnings: [
        "DON'T ignore 'just tried once' — modern drugs ('salts', 'spice', fentanyl) cause addiction after first use. Fatal cases on first use are not rare",
        "DON'T try to 'treat' on your own: lock them at home, send to the village, 'discipline'. Addiction is a disease requiring professional treatment. Self-treatment is dangerous",
        "DON'T shame, DON'T label ('junkie', 'drunkard'). This worsens shame, alienation, use. The child already blames themselves. Support, not judgment",
        "Teenage vaping = nicotine addiction + lung damage (EVALI). 'Just vapor' is a myth. Nicotine in one pod system = pack of cigarettes. Don't underestimate"
      ]
    },
    // ==========================================
    // 5. AGGRESSION
    // ==========================================
    {
      id: "school_aggression",
      title: "👊 Aggression, fights, behavioral issues",
      description: "Child fights, yells at teachers, breaks things, throws things. This isn't 'bad character' — it's a cry for help.",
      conditions: { problem: ["aggression"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1–6 months",
      yield_estimate: "Reduced aggression, understanding causes",
      tags: ["aggression", "behavior", "psychology"],
      steps: [
        "Don't respond to aggression with aggression. Yelling, hitting, humiliation — only make the problem worse. Stay calm. Say: 'I see that you're hurting. Let's figure this out'",
        "Find the cause: bullying, family issues, divorce, death, moving, ADHD, autism, learning problems, substance use. Aggression is a language when words aren't enough",
        "See a psychologist, psychotherapist, neurologist. Possibly ADHD, ADHD + oppositional defiant disorder, anxiety, depression. Diagnosis is the first step to help",
        "Talk to the homeroom teacher, school psychologist. Ask for: individual plan, behavior contract, seating change, space to calm down. Don't demand punishment — demand help",
        "Set clear boundaries at home: 'Hitting, breaking, yelling — unacceptable. There will be consequences.' But consequences — not beatings, but loss of privileges, work with a psychologist, conversation",
        "Teach alternatives to aggression: 'When I'm angry, I...' (run, punch a pillow, draw, write, breathe deeply). Give tools, not just prohibitions",
        "If aggression is directed at you — see a family psychologist. Your child may be reflecting your aggression, or the family system needs to change. Work as a family",
        "If aggression is severe (weapons, threats to life, systematic violence) — prepare for juvenile justice, police, possibly forced treatment. But the main thing is not punishment, but help. Your child's life and others' safety matter"
      ],
      warnings: [
        "DON'T hit an aggressive child — they'll learn that violence is normal. Violence breeds violence. It's a vicious cycle",
        "DON'T label them 'psychopath', 'incorrigible'. Aggression is a symptom, not a sentence. With proper help, most children change",
        "DON'T transfer to another school without working on the issue. Without change, the problem will repeat. Changing schools is a last step, not the first",
        "Aggression often accompanies anxiety, depression, suicidal thoughts. Don't focus only on behavior — check the emotional state"
      ]
    },
    // ==========================================
    // 6. BULLYING — REFERENCE TO MODULE
    // ==========================================
    {
      id: "bullying_school",
      title: "💔 Bullying at school — refer to 'Bullying' module",
      description: "Bullying, exclusion, harassment at school — this is a serious problem requiring a comprehensive approach. Use the specialized module.",
      conditions: { problem: ["bullying"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–4 weeks",
      yield_estimate: "Stopping bullying",
      tags: ["bullying", "school", "harassment"],
      steps: [
        "Bullying at school is not 'kids being kids' — it's psychological violence. Refer to the 'Bullying' module for the full action plan",
        "Key steps: gather evidence, talk to your child, contact the homeroom teacher and principal",
        "If the school does nothing — contact the police, prosecutor's office, education department",
        "Protect your child: work with a psychologist, consider transferring to another school",
        "Don't leave your child alone with this problem — bullying destroys mental health, self-esteem, and trust in the world"
      ],
      warnings: [
        "Bullying doesn't 'go away on its own'. Without intervention, it worsens and leaves lifelong trauma",
        "DON'T advise your child to 'hit back' — this can worsen the bullying and lead to legal consequences",
        "DON'T turn a blind eye — you are your child's only protection. Act immediately"
      ]
    }
  ]
};

// ===== EXPORT =====
window.schoolDataEn = schoolDataEn;