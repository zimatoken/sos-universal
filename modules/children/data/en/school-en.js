// === MODULE: SCHOOL (ENGLISH) ===
const schoolDataEn = {
  category: "school",
  title: "🏫 School and Studies",
  description: "Academic problems, conflicts with teachers, bullying, school refusal, aggression, substances, career guidance — how to help your child",

  questions: [
    {
      id: "problem",
      text: "What is the main problem?",
      type: "single",
      options: [
        { id: "grades", label: "Poor grades / failing / doesn't understand material", tags: ["grades"] },
        { id: "teacher_conflict", label: "Conflict with teacher / injustice / insults", tags: ["teacher"] },
        { id: "refusal", label: "Child refuses to go to school / truancy / fears", tags: ["refusal"] },
        { id: "bullying", label: "Bullying / harassment / exclusion from class", tags: ["bullying"] },
        { id: "substances", label: "Smoking / alcohol / drugs (using or being offered)", tags: ["substances"] },
        { id: "aggression", label: "Aggression / fights / disciplinary issues", tags: ["aggression"] },
        { id: "friends", label: "Problems with classmates / no friends / loneliness", tags: ["friends"] },
        { id: "future", label: "Doesn't know where to apply / doesn't want to continue education", tags: ["future"] },
        { id: "exams", label: "Fear of exams / GCSE / A-levels / stress", tags: ["exams"] }
      ]
    },
    {
      id: "age_group",
      text: "Age / grade?",
      type: "single",
      options: [
        { id: "primary", label: "Grades 1–4 (6–10 years)", tags: ["primary"] },
        { id: "middle", label: "Grades 5–9 (10–15 years)", tags: ["middle"] },
        { id: "high", label: "Grades 10–12 / college (15–18 years)", tags: ["high"] }
      ]
    },
    {
      id: "urgency",
      text: "How long and how serious?",
      type: "single",
      options: [
        { id: "acute", label: "Happened today / yesterday — acute situation", tags: ["acute"] },
        { id: "accumulated", label: "Built up over weeks / months", tags: ["accumulated"] },
        { id: "chronic", label: "Chronic problem (6+ months)", tags: ["chronic"] }
      ]
    },
    {
      id: "child_reaction",
      text: "How is the child reacting to the problem?",
      type: "single",
      options: [
        { id: "calm", label: "Calm, open to discussion, looking for solutions", tags: ["open"] },
        { id: "shame", label: "Withdrawn, ashamed, afraid of punishment", tags: ["closed"] },
        { id: "aggressive", label: "Aggressive, denies, blames others", tags: ["defensive"] },
        { id: "depressed", label: "Apathetic, talks about hopelessness, sees no point", tags: ["depressed"] }
      ]
    },
    {
      id: "parental_support",
      text: "Does the child have support at home and at school?",
      type: "single",
      options: [
        { id: "full_support", label: "Yes, I support and school helps", tags: ["support_yes"] },
        { id: "home_only", label: "I support, but school ignores / doesn't help", tags: ["school_no"] },
        { id: "school_only", label: "School helps, but no understanding at home", tags: ["home_no"] },
        { id: "no_support", label: "No one supports, child is alone", tags: ["support_no"] }
      ]
    },
    {
      id: "grades_details",
      text: "If grades are the issue — specify",
      condition: { problem: ["grades"] },
      options: [
        { id: "single_subject", label: "Struggling with one subject", tags: ["one_subject"] },
        { id: "multiple", label: "Falling behind in several subjects", tags: ["multiple"] },
        { id: "all", label: "Doesn't understand anything / total failure", tags: ["all_subjects"] },
        { id: "motivation", label: "Doesn't want to study, despite ability", tags: ["motivation"] }
      ]
    },
    {
      id: "bullying_type",
      text: "If bullying — what type?",
      condition: { problem: ["bullying"] },
      options: [
        { id: "physical_bully", label: "Physical violence (pushing, hitting, taking things)", tags: ["physical"] },
        { id: "verbal_bully", label: "Words, insults, threats, name-calling", tags: ["verbal"] },
        { id: "social_bully", label: "Exclusion, boycott, gossip, kicked out of chats", tags: ["social"] },
        { id: "cyber_bully", label: "Cyberbullying (social media, messengers)", tags: ["cyber"] }
      ]
    },
    {
      id: "substance_details",
      text: "If substance use — what exactly?",
      condition: { problem: ["substances"] },
      options: [
        { id: "cigarettes", label: "Smoking cigarettes / vaping (nicotine)", tags: ["smoking"] },
        { id: "alcohol", label: "Drinking alcohol", tags: ["alcohol"] },
        { id: "drugs", label: "Drugs / spice / bath salts / marijuana", tags: ["drugs"] },
        { id: "offered", label: "Being offered, but child refuses / hasn't tried", tags: ["offered"] }
      ]
    },
    {
      id: "exam_type",
      text: "If exams — which ones?",
      condition: { problem: ["exams"] },
      options: [
        { id: "oge", label: "GCSE / middle school final exams (9th grade)", tags: ["oge"] },
        { id: "ege", label: "A-levels / high school final exams (11th grade)", tags: ["ege"] },
        { id: "transfer", label: "Transfer exams / term tests", tags: ["transfer"] },
        { id: "other", label: "Other exams (entrance, international)", tags: ["other_exam"] }
      ]
    },
    {
      id: "aggression_target",
      text: "If aggression — who is it directed at?",
      condition: { problem: ["aggression"] },
      options: [
        { id: "peers", label: "At classmates (other children)", tags: ["peers"] },
        { id: "teachers", label: "At teachers / adults at school", tags: ["teachers"] },
        { id: "self", label: "At themselves (self-harm, risks)", tags: ["self_harm"] },
        { id: "parents", label: "At parents (at home)", tags: ["parents"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. School refusal — anxiety, fear, bullying
    // ========================================
    {
      id: "school_refusal_general",
      title: "🚪 Child refuses to go to school — what to do",
      description: "Cries in the morning, pretends to be sick, runs away. This is not laziness — it's a cry for help.",
      conditions: { problem: ["refusal"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–4 weeks",
      yield_estimate: "Return to school and reduce anxiety",
      tags: ["refusal", "anxiety", "school"],
      steps: [
        "Don't shout, don't punish. Say: 'I see it's hard for you. Let's figure it out together.' Talk calmly, without pressure. Find the reason: bullying, teacher conflict, poor grades, anxiety, family problems.",
        "If the reason is bullying → see 'Bullying' module and the bullying solution in this section. Act immediately.",
        "If the reason is poor grades → hire a tutor, talk to the teacher about extra classes.",
        "If the reason is anxiety/social phobia → see a psychologist. Consider temporary online learning, gradual return (first 1 lesson, then 2).",
        "If conflict with teacher → use the 'Teacher conflict' solution.",
        "Create a 'safe path' to school: walk them, pick them up, arrange to go with a classmate.",
        "Reward attempts: 'Today you went even though you were scared — well done'. Gradually increase time at school.",
        "If the child hasn't attended for months — consider homeschooling, online school, or changing schools. But this is a last resort."
      ],
      warnings: [
        "Do not force the child to go to school, don't shout 'everyone goes'. It increases trauma and anxiety.",
        "Don't pretend there's no problem. Truancy is a symptom of a deeper issue.",
        "Don't compare with other children — it kills self-esteem.",
        "If the child threatens self-harm when asked to go to school — call a psychologist or emergency services immediately."
      ]
    },
    // ========================================
    // 2. Conflict with teacher
    // ========================================
    {
      id: "teacher_conflict_solution",
      title: "👨‍🏫 Conflict with teacher — how to protect your child",
      description: "Teacher shouts, humiliates, gives unfair grades, ignores. This is not 'strictness' — it's pedagogical abuse.",
      conditions: { problem: ["teacher_conflict"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–4 weeks",
      yield_estimate: "Stop pressure, restore fairness",
      tags: ["teacher", "conflict", "school"],
      steps: [
        "Gather facts: dates, quotes, witnesses, recordings (if legal). Document EVERYTHING.",
        "Talk to the teacher in person (without the child). Calmly, respectfully, but firmly: 'My child says that [fact]. I'm concerned. Let's figure it out'.",
        "If the conversation doesn't help — write a formal letter to the principal with a copy to the education department.",
        "If the teacher insults, humiliates, threatens — this is an administrative offense (defamation), possibly criminal. Contact police.",
        "Talk to other parents — your child may not be the only victim.",
        "Emotionally protect the child: 'This is the teacher's problem, not yours. You are good, smart. We'll sort it out'.",
        "If the conflict is unresolvable — request a transfer to another class or a different teacher.",
        "If the administration ignores you — contact the prosecutor's office, education watchdog."
      ],
      warnings: [
        "Do not confront the teacher aggressively — it discredits you.",
        "Do not blame the child for a 'deserved' bad grade without verification.",
        "Do not publicly insult the teacher in parent chats — that's defamation."
      ]
    },
    // ========================================
    // 3. Poor grades — without panic
    // ========================================
    {
      id: "poor_grades_solution",
      title: "📉 Poor grades — without shouting or pressure",
      description: "Failing grades, not understanding, 'I don't want to study'. Causes vary: from inattention to dyslexia.",
      conditions: { problem: ["grades"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–3 months",
      yield_estimate: "Improve grades and attitude toward learning",
      tags: ["grades", "learning", "motivation"],
      steps: [
        "Don't shout, don't punish for bad grades. Shouting creates fear, not motivation to learn.",
        "Talk to the teacher: what exactly is the problem? Doesn't know the topic? Doesn't do homework? Distracted?",
        "Check vision and hearing — often 'not understanding' is due to poor sight or hearing.",
        "Check for dyslexia, dysgraphia, ADHD — see a neurologist, psychologist, or learning specialist.",
        "Hire a tutor for the specific subject, one-on-one.",
        "Establish a routine: fixed study time, breaks, rewards. Use the Pomodoro technique.",
        "Reward effort, not just grades. Praise progress, even small.",
        "Find an 'entry point': if math is hard — start with games (chess, Monopoly). Engage, don't force."
      ],
      warnings: [
        "Do not compare with classmates or siblings.",
        "Do not use grades as the only measure of worth.",
        "Do not overload with extra activities — balance is important.",
        "If the child says 'I'm stupid' — that's a warning sign, need a psychologist."
      ]
    },
    // ========================================
    // 4. Bullying at school
    // ========================================
    {
      id: "school_bullying_solution",
      title: "💔 Bullying at school — protecting your child",
      description: "Harassment, insults, exclusion, physical violence. Bullying destroys mental health and requires immediate action.",
      conditions: { problem: ["bullying"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 weeks",
      yield_estimate: "Stop bullying, restore psychological comfort",
      tags: ["bullying", "school", "protection"],
      steps: [
        "Listen to the child, believe them. Do not dismiss with 'you brought it on yourself'.",
        "Take screenshots, record dates, names, witnesses. Gather evidence.",
        "Contact the class teacher with a written complaint. Demand action and a written response.",
        "If the school does nothing — go to the principal, then the education department and prosecutor.",
        "Teach the child techniques: calmly say 'I don't accept that', walk away, find an adult.",
        "Support the child at home — they are not to blame, bullying is the aggressor's problem.",
        "See a psychologist — bullying damages self-esteem and can cause depression.",
        "If bullying is systematic — consider transferring to another school or class."
      ],
      warnings: [
        "Do not say 'ignore it' — for a child, that doesn't work.",
        "Do not force the child to 'be friends' with the aggressor.",
        "Do not publicly accuse other children in parent chats — it worsens the bullying.",
        "For physical violence — contact the police."
      ]
    },
    // ========================================
    // 5. Substance use — drugs, alcohol, smoking
    // ========================================
    {
      id: "substances_solution",
      title: "🚬 Drugs, alcohol, smoking — help algorithm",
      description: "Child smokes, drinks, or uses drugs. Don't ignore — it's life-threatening.",
      conditions: { problem: ["substances"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 months",
      yield_estimate: "Stop use, help the child",
      tags: ["substances", "drugs", "teen"],
      steps: [
        "Don't shout, don't hit, don't punish. Say: 'I found out, I'm scared for you. Let's talk'.",
        "Find out the scale: what, how much, how often, with whom, why they started.",
        "If it's experimentation (1–2 times) — talk, explain consequences, set boundaries.",
        "For regular use — immediately see a drug addiction specialist (anonymously: helplines).",
        "Check the company — may need to change school or activities.",
        "See a psychologist — addiction is often linked to anxiety, bullying, family issues.",
        "If they refuse help and threaten — consider involuntary treatment (legal consultation needed).",
        "Do prevention: talk openly without bans. Show real consequences."
      ],
      warnings: [
        "Don't ignore 'just tried once' — modern drugs can cause addiction on first use.",
        "Don't try to treat on your own — addiction requires professionals.",
        "Don't shame or label — it worsens the problem.",
        "Vaping is not 'just vapor' — nicotine in one pod equals a pack of cigarettes."
      ]
    },
    // ========================================
    // 6. Aggression — fights, discipline issues
    // ========================================
    {
      id: "aggression_solution",
      title: "👊 Aggression, fights, disciplinary problems",
      description: "Child fights, shouts, breaks things. This is not 'bad character' — it's a cry for help.",
      conditions: { problem: ["aggression"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1–6 months",
      yield_estimate: "Reduce aggression, understand causes",
      tags: ["aggression", "behavior", "psychology"],
      steps: [
        "Don't respond with aggression — it worsens the problem. Stay calm.",
        "Find the cause: bullying, family issues, ADHD, autism, depression, substance use.",
        "See a psychologist, psychotherapist, neurologist. Diagnosis is the first step.",
        "Talk to the class teacher — ask for an individual plan, behavioral contract.",
        "Set clear boundaries at home: 'Hitting, breaking, shouting is not allowed'. But consequences are not physical punishment.",
        "Teach alternatives: 'When I'm angry, I...' (run, punch a pillow, draw, write, breathe deeply).",
        "If aggression is directed at you — see a family psychologist.",
        "For serious aggression (weapons, threats to life) — be prepared for juvenile commission, police, possibly mandatory treatment."
      ],
      warnings: [
        "Do not hit an aggressive child — they learn that violence is normal.",
        "Do not label them 'psychopath', 'hopeless' — aggression is a symptom, not a sentence.",
        "Do not transfer to another school without working on behavior — the problem will repeat.",
        "Aggression often accompanies depression and suicidal thoughts — check emotional state."
      ]
    },
    // ========================================
    // 7. Problems with classmates / loneliness
    // ========================================
    {
      id: "friends_problems",
      title: "👥 Child has no friends — how to help",
      description: "Child feels lonely, not accepted by peer groups. This can lead to depression and withdrawal.",
      conditions: { problem: ["friends"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–3 months",
      yield_estimate: "Make friends, improve social skills",
      tags: ["friends", "loneliness", "social"],
      steps: [
        "Talk to the child: what they feel, why it's hard to make friends, who they like in class.",
        "Find an external activity based on interests (sports, music, robotics) — it's easier to find like-minded friends there.",
        "Teach simple social skills: how to start a conversation, how to keep it going, how to invite someone over.",
        "Organize group activities: invite classmates to a birthday party, cinema, picnic.",
        "If the child is shy — sign up for acting classes, drama club.",
        "Check if the child is a victim of bullying — then address that first.",
        "If loneliness persists — see a psychologist for self-esteem and social skills work.",
        "Explain: one real friend is better than ten acquaintances. Quality over quantity."
      ],
      warnings: [
        "Don't force the child to be friends with someone — it causes resistance.",
        "Don't compare with more outgoing children — it kills self-esteem.",
        "Don't assume 'it will pass' — loneliness in children can lead to depression and anxiety."
      ]
    },
    // ========================================
    // 8. Fear of exams (GCSE, A-levels)
    // ========================================
    {
      id: "exam_stress",
      title: "📚 Fear of exams — reducing stress",
      description: "Exam anxiety is a serious problem. Without help, it can lead to failure and psychological issues.",
      conditions: { problem: ["exams"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–3 months",
      yield_estimate: "Reduce anxiety, pass exams successfully",
      tags: ["exams", "stress", "oge", "ege"],
      steps: [
        "Acknowledge their feelings: 'You're scared? That's normal. We'll prepare together'.",
        "Make a clear study plan: break material into blocks, take breaks, review learned material.",
        "Hire a tutor or enroll in exam prep courses — confidence in knowledge reduces anxiety.",
        "Do mock exams at home — with timer, without help, like the real exam.",
        "Teach stress-relief techniques: breathing (4-7-8), visualization, switching activities.",
        "Check routine: at least 8 hours of sleep, proper nutrition, outdoor walks.",
        "Before the exam — don't cram all night, go to bed early, drink water, do breathing exercises.",
        "After the exam — praise them for the effort, regardless of result. Grades don't define personality."
      ],
      warnings: [
        "Don't intensify pressure: 'This decides your life' — it increases fear.",
        "Don't compare with other children — everyone copes differently.",
        "Don't forbid rest — without rest, the brain doesn't absorb information.",
        "If anxiety is paralyzing — see a psychologist (cognitive-behavioral therapy)."
      ]
    },
    // ========================================
    // 9. Doesn't know where to apply / doesn't want to continue
    // ========================================
    {
      id: "future_profession",
      title: "🎯 Doesn't know where to apply — career guidance",
      description: "Teen is unsure about career choice, sees no point in further education. This is normal, but needs support.",
      conditions: { problem: ["future"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–6 months",
      yield_estimate: "Choose direction, motivate for learning",
      tags: ["future", "career", "motivation"],
      steps: [
        "Talk calmly: what they like, what they're interested in, which subjects come easier.",
        "Take online career tests (e.g., Holland code, Klimov's test).",
        "Visit open days at universities and colleges — immerse in the atmosphere.",
        "Talk to people in different professions — ask friends or acquaintances to talk about their work.",
        "Allow a gap year after school — work, travel, explore themselves. Better than enrolling in a wrong major and dropping out.",
        "Don't impose your dream — the profession must be their choice, or there'll be no motivation.",
        "Consider alternatives: vocational colleges provide quick skills and ability to work.",
        "If they don't want to study at all — discuss trades (electrician, plumber, welder) — they are in demand and pay well."
      ],
      warnings: [
        "Don't pressure: 'You'll be a doctor like me' — leads to unhappiness.",
        "Don't dismiss their interests: 'You can't make money from that' — kills dreams.",
        "Don't rush — the right choice takes time.",
        "If the child flatly refuses to study — maybe need a break, work, then return."
      ]
    }
  ]
};

// ===== EXPORT =====
window.schoolDataEn = schoolDataEn;