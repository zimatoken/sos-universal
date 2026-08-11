// === MODULE: CHILDREN вЂ” SCHOOL (EN) ===
const schoolData = {
  category: "school",
  title: "рџЏ« School",
  description: "Learning problems, teacher conflicts, bullying, drugs, aggression вЂ” how to help your child",

  questions: [
    {
      id: "problem",
      text: "What is the situation?",
      type: "single",
      options: [
        { id: "grades", label: "рџ“Љ Learning problems / bad grades / doesn't understand", tags: ["grades"] },
        { id: "teacher", label: "рџ‘ЁвЂЌрџЏ« Conflict with teacher / unfairness / insults", tags: ["teacher"] },
        { id: "refusal", label: "рџљ« Child refuses to go to school / truancy", tags: ["refusal"] },
        { id: "substances", label: "рџљ« Drugs / smoking / alcohol at school / in the group", tags: ["substances"] },
        { id: "aggression", label: "рџ  Aggression / fights / discipline violations", tags: ["aggression"] },
        { id: "bullying", label: "рџ’” Bullying / ostracism / class harassment", tags: ["bullying"] }
      ]
    },
    {
      id: "age_group",
      text: "What grade / age?",
      type: "single",
      options: [
        { id: "primary", label: "рџ“љ Grades 1вЂ“4 (ages 6вЂ“10)", tags: ["primary"] },
        { id: "middle", label: "рџ“– Grades 5вЂ“9 (ages 10вЂ“15)", tags: ["middle"] },
        { id: "high", label: "рџЋ“ Grades 10вЂ“11 / college (ages 15вЂ“18)", tags: ["high"] }
      ]
    },
    {
      id: "urgency",
      text: "How long and how serious?",
      type: "single",
      options: [
        { id: "acute", label: "Happened today / yesterday вЂ” acute", tags: ["acute"] },
        { id: "accumulated", label: "Accumulated over weeks / months", tags: ["accumulated"] },
        { id: "chronic", label: "Chronic problem (6+ months)", tags: ["chronic"] }
      ]
    }
  ],

  solutions: [
    {
      id: "school_refusal",
      title: "рџљЄ Child refuses to go to school вЂ” causes and solutions",
      description: "Cries in the morning, pretends to be sick, runs away. This is not laziness вЂ” this is a cry for help.",
      conditions: { problem: ["refusal"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“4 weeks",
      yield_estimate: "Returning the child to school",
      tags: ["refusal", "anxiety", "school"],
      steps: [
        "Don't shout, don't punish. Say: 'I see it's hard for you. Let's figure it out together'. Talk calmly, without pressure. Find the cause: bullying, teacher conflict, poor grades, anxiety, family problems?",
        "If the child mentions bullying вЂ” see the Bullying module. Act immediately: school, psychologist, possible transfer",
        "If the cause is poor grades: hire a tutor, talk to the teacher about extra classes. Don't shout about bad grades вЂ” shouting doesn't improve grades, it kills motivation",
        "If the cause is anxiety, social phobia: see a psychologist. Possible temporary distance learning, gradual return (first 1 lesson, then 2). Don't throw them into the 'deep end'",
        "If conflict with teacher: talk to the homeroom teacher, vice-principal, principal. Describe specific facts, not emotions. Demand a written response. If it doesn't help вЂ” contact the education department, prosecutor's office",
        "Create a 'safe path' to school: escort, meet, arrange with a classmate to go together. One 'anchor point' reduces anxiety",
        "Reward attempts, not results. 'You went today even though it was scary вЂ” you're brave'. Gradually increase time at school. Don't demand 'like everyone else' immediately",
        "If the child doesn't attend for months вЂ” consider homeschooling, online school, school transfer. But this is an extreme measure. The main thing is not to leave without education and socialization"
      ],
      warnings: [
        "DO NOT drag the child to school by force, don't shout 'everyone goes'. This will worsen trauma, anxiety, hatred of school. Recovery will take longer",
        "DO NOT pretend there is no problem, hoping 'it will pass on its own'. Truancy, school refusal are symptoms of a deep problem. Ignoring leads to depression, maladjustment",
        "DO NOT compare with other children ('but Vanya goes without problems'). Every child is unique. Comparison kills self-esteem and closes trust",
        "If the child threatens self-harm when trying to send them to school вЂ” immediately psychologist, emergency (8-800-2000-122). This is an emergency"
      ]
    },
    {
      id: "teacher_conflict",
      title: "рџ‘ЁвЂЌрџЏ« Conflict with teacher вЂ” how to protect your child",
      description: "Teacher shouts, humiliates, gives undeserved bad grades, ignores. This is not 'strictness' вЂ” this is educational violence.",
      conditions: { problem: ["teacher"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1вЂ“4 weeks",
      yield_estimate: "Stopping pressure, restoring justice",
      tags: ["teacher", "conflict", "school"],
      steps: [
        "Gather facts: dates, quotes, witnesses, recordings (if legal). Document EVERYTHING. Emotions without facts are a weak argument. Specifics are power",
        "Talk to the teacher personally (without the child). Calmly, respectfully, but firmly: 'My child says [fact]. It concerns me. Let's figure it out'. Sometimes the teacher doesn't realize their manner",
        "If conversation doesn't help вЂ” write a formal complaint to the principal with a copy to the education department. Describe facts, attach evidence, demand a written response and measures",
        "If the teacher humiliates, insults, threatens вЂ” this is an administrative offense (insult), possibly criminal (defamation). Contact police, prosecutor's office",
        "Talk to other parents. Your child may not be the only victim. A joint complaint carries more weight than an individual one",
        "Protect the child emotionally: 'This is the teacher's problem, not yours. You are good, smart. We will handle it'. Don't let the child absorb humiliation",
        "If the conflict is unresolvable вЂ” demand transfer to another class or teacher change. This is the child's right to quality education without trauma. Don't fear 'making it worse' вЂ” trauma is worse than any change",
        "If the administration systematically ignores вЂ” contact the prosecutor's office, consumer protection, public organizations. Publicity forces a reaction"
      ],
      warnings: [
        "DO NOT go 'sort it out' with the teacher aggressively, with shouting, threats. This discredits you and the child. Calmness and facts are your strength",
        "DO NOT blame the child for a 'deserved' bad grade if there is suspicion of bias. Check the work, compare with others' work. Ask for grading criteria explanation",
        "A teacher is not a god. They can make mistakes, be tired, angry, biased. Don't be afraid to defend your child's rights. Respect for the profession в‰  submission",
        "DO NOT publicly insult the teacher in the parent chat вЂ” this is defamation, and you may face liability. Facts, documents, official channels"
      ]
    },
    {
      id: "bad_grades",
      title: "рџ“‰ Learning problems вЂ” without shouting and with motivation",
      description: "Bad grades, doesn't understand, 'don't want to study', skipping lessons. Causes vary: from inattention to dyslexia.",
      conditions: { problem: ["grades"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1вЂ“3 months",
      yield_estimate: "Improving grades and attitude to learning",
      tags: ["grades", "learning", "motivation"],
      steps: [
        "Don't shout, don't punish for bad grades. Shouting causes fear, not desire to learn. The child begins to fear mistakes, not strive for knowledge. Say: 'Let's figure out what is unclear'",
        "Talk to the teacher: what exactly is the problem? Doesn't know the topic? Doesn't do homework? Gets distracted? Doesn't understand the explanation? Specifics will help find a solution",
        "Check vision and hearing. Often 'not understanding' is simply not seeing the board or not hearing the teacher. Get examined by an ophthalmologist and ENT",
        "Check for dyslexia, dysgraphia, ADHD. If the child is 'difficult', 'restless', mixes up letters вЂ” this is not laziness, but nervous system features. See a neurologist, psychologist, special education teacher",
        "Hire a tutor. Not 'just because', but for a specific subject. 2вЂ“3 sessions per week, individually. Group classes are less effective if the child is behind",
        "Create a routine: fixed lesson times, breaks, rewards. Use the 'Pomodoro' technique: 25 minutes study, 5 minutes break. For ADHD вЂ” 15 minutes study, 5 minutes break",
        "Reward effort, not grade. 'You tried вЂ” that's what matters'. If the child got a C but learned more than before вЂ” praise the progress. Grade is not the main thing, growth is",
        "Find an 'entry point': if math doesn't work вЂ” start with games (monopoly, chess, Minecraft with redstone). If language вЂ” with comics, audiobooks. Engage, don't force"
      ],
      warnings: [
        "DO NOT compare with classmates, siblings. 'But Vanya already gets As' вЂ” this is poison for self-esteem. Every child develops at their own pace",
        "DO NOT use grades as the only criterion. A successful person is not one who got As, but one who can think, learn, not give up. Cultivate these qualities",
        "DO NOT overload with extra classes. If the child is already tired from school, 5 clubs + tutor = burnout. Balance is more important",
        "If the child says 'I'm stupid' вЂ” this is an alarm bell. Low self-esteem, learned helplessness. Immediately psychologist. It won't 'pass on its own'"
      ]
    },
    {
      id: "substances_at_school",
      title: "рџљ¬ Drugs, smoking, alcohol вЂ” child is involved",
      description: "Smokes, drinks, tries 'spice', 'salts', vapes. Not 'teenage rebellion' вЂ” this is a danger to life and future.",
      conditions: { problem: ["substances"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“6 months",
      yield_estimate: "Stopping use, helping the child",
      tags: ["substances", "drugs", "teen"],
      steps: [
        "Don't shout, don't hit, don't punish 'forever'. This will close trust and worsen the problem. Say: 'I found out. I'm scared for you. Let's talk'. Calmness is key",
        "Find out the scale: what, how much, how often, with whom, where, why started. Don't interrogate like an investigator. A conversation, not an interrogation. Causes: peer group, curiosity, stress, bullying, trying to 'fit in'",
        "If this is an experiment (tried 1вЂ“2 times, not systematic) вЂ” talk, explain consequences, set boundaries. But don't relax: an experiment easily grows into a habit",
        "If systematic use вЂ” immediately to a narcologist. Anonymous helpline: 8-800-700-54-01, centers 'Reshenie', 'Vybor', 'Narcologicheskaya pomoshch'. Early help = chance for complete recovery",
        "Check the peer group: who they hang out with, where they spend time. A school, club, or neighborhood change may be needed. But don't isolate вЂ” loneliness worsens addiction",
        "Check the family: is there substance use among adults? Children copy. If parents smoke/drink вЂ” demands for the child are meaningless. Start with yourself",
        "See a psychologist. Addiction is not 'bad character' but a way to cope with pain: anxiety, loneliness, bullying, family problems. Treat the cause",
        "If the child refuses help, is aggressive, threatens вЂ” possible compulsory treatment. A difficult step, but life is more important. Consult a lawyer",
        "Prevention: talk about drugs openly, without bans. Explain: 'spice' and 'salts' are poisons, not 'light' drugs. Vape is not a safe alternative to cigarettes. Show real consequences: photos, stories, documentaries"
      ],
      warnings: [
        "DO NOT ignore 'just tried' вЂ” modern drugs ('salts', 'spice', fentanyl) cause addiction from the first use. Fatal cases on first use are not rare",
        "DO NOT try to 'treat' yourself: lock at home, send to the village, 'discipline'. Addiction is a disease requiring professional treatment. Self-treatment is dangerous",
        "DO NOT shame or label ('junkie', 'alcoholic'). This worsens shame, alienation, use. The child already blames themselves. Support, not judgment",
        "Teen vaping = nicotine addiction + lung damage (EVALI). 'Just vapor' is a myth. Nicotine in one pod = a pack of cigarettes. Don't underestimate"
      ]
    },
    {
      id: "school_aggression",
      title: "рџ‘Љ Aggression, fights, discipline violations",
      description: "The child fights, shouts at teachers, breaks things, throws. This is not 'bad character' вЂ” this is a cry for help.",
      conditions: { problem: ["aggression"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1вЂ“6 months",
      yield_estimate: "Reducing aggression, understanding causes",
      tags: ["aggression", "behavior", "psychology"],
      steps: [
        "Don't respond to aggression with aggression. Shouting, beatings, humiliation only worsen the problem. Stay calm. Say: 'I see you feel terrible. Let's figure it out'",
        "Find the cause: bullying, family problems, divorce, death, moving, ADHD, autism, learning problems, substance use. Aggression is a language when words are not enough",
        "See a psychologist, psychotherapist, neurologist. Possible ADHD, ADHD+ODD, anxiety, depression. Diagnosis is the first step to help",
        "Talk to the homeroom teacher, school psychologist. Ask for: individual plan, behavior contract, seating change, chance to take a breather. Don't demand punishment вЂ” demand help",
        "Set clear boundaries at home: 'Hitting, breaking, shouting is unacceptable. There will be consequences'. But consequences are not beatings вЂ” loss of privileges, psychologist work, conversation",
        "Teach alternatives to aggression: 'When I'm angry, I...' (run, hit a pillow, draw, write, breathe deeply). Give tools, not just prohibitions",
        "If aggression is directed at you вЂ” see a family psychologist. The child may be reflecting your aggression, or the family system needs change. Work as a whole family",
        "If aggression is serious (weapons, life threats, systematic violence) вЂ” be prepared for juvenile commission, police, possibly compulsory treatment. But the main thing is not punishment, but help. The child's life and others' lives come first"
      ],
      warnings: [
        "DO NOT hit an aggressive child вЂ” they will learn that violence is the norm. Violence breeds violence. This is a vicious circle",
        "DO NOT label 'psychopath', 'hopeless'. Aggression is a symptom, not a sentence. With proper help, most children change",
        "DO NOT transfer to another school without working on themselves. Without behavior change, the problem will repeat. School change is the last step, not the first",
        "Aggression often accompanies anxiety, depression, suicidal thoughts. Don't focus only on behavior вЂ” check emotional state"
      ]
    }
  ]
};

window.schoolDataEn = schoolData;
