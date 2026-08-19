// modules/children/data/en/bullying-en.js
// === MODULE: CHILDREN — BULLYING ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "children",
    category: "bullying",
    version: "1.0.0",
    lang: "en",
    title: "💔 Bullying",
    description: "Physical violence, verbal abuse, cyberbullying, harassment — how to protect your child",
    icon: "💔",
    color: "#db2777"
  },

  questions: [
    {
      id: "bully_type",
      type: "single",
      text: "What type of bullying is it?",
      options: [
        { id: "physical", label: "👊 Physical violence (hitting, pushing, theft)", tags: ["physical"] },
        { id: "verbal", label: "🗣️ Words, insults, threats, blackmail", tags: ["verbal"] },
        { id: "cyber", label: "💻 Cyberbullying (social media, messaging, games)", tags: ["cyber"] },
        { id: "social", label: "👥 Social bullying (exclusion, gossip, boycott)", tags: ["social"] },
        { id: "sexual", label: "⚠️ Sexual harassment / inappropriate comments", tags: ["sexual"] },
        { id: "unknown", label: "❓ I don't know what's happening, but my child has changed", tags: ["unknown"] }
      ]
    },
    {
      id: "warning_signs",
      type: "single",
      text: "What signs have you noticed in your child?",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual", "unknown"] },
      options: [
        { id: "fear", label: "😨 Afraid to go to school, fakes illness", tags: ["fear"] },
        { id: "sadness", label: "😢 Sad, cries for no reason, withdrawn", tags: ["sadness"] },
        { id: "aggression", label: "😠 Aggressive, irritable, snaps", tags: ["aggression"] },
        { id: "sleep", label: "😴 Poor sleep, nightmares, wakes at night", tags: ["sleep"] },
        { id: "marks", label: "🩹 Bruises, scratches, torn clothes", tags: ["marks"] },
        { id: "grades", label: "📉 Poor grades, lost interest in school", tags: ["grades"] },
        { id: "withdrawal", label: "🚫 Stopped seeing friends, stays home", tags: ["withdrawal"] }
      ]
    },
    {
      id: "child_age",
      type: "single",
      text: "How old is your child?",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual", "unknown"] },
      options: [
        { id: "age_3_7", label: "👶 3–7 years (kindergarten / elementary school)", tags: ["age_3_7"] },
        { id: "age_8_12", label: "🧒 8–12 years (middle school)", tags: ["age_8_12"] },
        { id: "age_13_17", label: "🧑 13–17 years (teenager)", tags: ["age_13_17"] }
      ]
    },
    {
      id: "talked_to_child",
      type: "single",
      text: "Have you talked to your child about what's happening?",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual", "unknown"] },
      options: [
        { id: "talked_yes", label: "✅ Yes, they told me in detail", tags: ["talked_yes"] },
        { id: "talked_partial", label: "⚠️ Talked, but they avoid the topic", tags: ["talked_partial"] },
        { id: "talked_no", label: "❌ No, they're silent / don't want to talk", tags: ["talked_no"] }
      ]
    },
    {
      id: "school_response",
      type: "single",
      text: "How is the school responding?",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual", "unknown"] },
      options: [
        { id: "school_help", label: "✅ They're helping, having conversations", tags: ["school_help"] },
        { id: "school_ignore", label: "😤 Ignoring / saying 'handle it yourselves'", tags: ["school_ignore"] },
        { id: "school_not_yet", label: "❓ Haven't contacted them yet", tags: ["school_not_yet"] }
      ]
    },
    {
      id: "role",
      type: "single",
      text: "What is your child's role?",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual", "unknown"] },
      options: [
        { id: "victim", label: "😢 My child is the victim", tags: ["victim"] },
        { id: "witness", label: "👁️ I heard about it as a witness / from another child", tags: ["witness"] },
        { id: "aggressor", label: "😠 My child is the aggressor / bullying others", tags: ["aggressor"] },
        { id: "unsure", label: "❓ I don't know / not sure", tags: ["unsure"] }
      ]
    },
    {
      id: "duration",
      type: "single",
      text: "How long has this been going on?",
      conditions: { role: ["victim", "witness", "aggressor", "unsure"] },
      options: [
        { id: "once", label: "Once / first time", tags: ["once"] },
        { id: "weeks", label: "Several weeks", tags: ["weeks"] },
        { id: "months", label: "Several months or more", tags: ["months"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. PHYSICAL BULLYING — IMMEDIATE ACTIONS
    // ============================================================
    {
      id: "physical_bullying",
      title: "🥊 Physical violence — protection and action",
      description: "Pushing, hitting, theft of belongings, money, phone. This is a crime, not 'kids being kids'. Act immediately.",
      conditions: { bully_type: ["physical"], role: ["victim"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–7 days",
      yield_estimate: "Violence stopped and child protected",
      tags: ["physical", "violence", "school"],
      steps: [
        "STEP 1. Talk to your child calmly, without yelling. Ask: what, where, when, who, how many times. Write everything down.",
        "STEP 2. Examine your child: bruises, scratches, torn clothes. Take photos. This is evidence.",
        "STEP 3. If there are injuries — see a doctor, get a certificate. For serious injuries — ambulance and police.",
        "STEP 4. Speak with the class teacher, principal, social worker. Demand a written response and action plan.",
        "STEP 5. If the school ignores — file a police report. Include photos, certificates, records.",
        "STEP 6. Contact the Commission on Minors' Affairs. They can intervene with the aggressor's family.",
        "STEP 7. Consider transferring to another class or school. Your child's safety is paramount.",
        "STEP 8. Enroll your child in martial arts (for confidence) and see a psychologist."
      ],
      warnings: [
        "DON'T tell your child 'handle it yourself' — they've already tried. This worsens the trauma.",
        "DON'T go to confront the aggressor or their parents yourself — could lead to a fight.",
        "DON'T dismiss it as 'just kids'. Repeated physical violence is a crime.",
        "If your child is afraid to go to school, cries in the morning — immediate action needed."
      ]
    },

    // ============================================================
    // 2. SEXUAL HARASSMENT
    // ============================================================
    {
      id: "sexual_harassment",
      title: "⚠️ Sexual harassment — emergency protection",
      description: "Sexual harassment, inappropriate comments, touching — this is a crime. Act immediately.",
      conditions: { bully_type: ["sexual"], role: ["victim"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Child protected + perpetrators held accountable",
      tags: ["sexual", "harassment", "crime"],
      steps: [
        "STEP 1. IMMEDIATELY talk to your child. Ask: who, what, when, where, were there witnesses. Write everything down.",
        "STEP 2. DON'T blame your child. Say: 'This is not your fault, I believe you, I will protect you'.",
        "STEP 3. Take screenshots (if online), save messages. Don't delete anything.",
        "STEP 4. See a doctor (gynecologist, pediatrician) to document physical injuries.",
        "STEP 5. File a police report.",
        "STEP 6. If it happened at school — demand the aggressor be removed from classes.",
        "STEP 7. Immediately schedule a psychologist — the trauma can be deep.",
        "STEP 8. Helplines: 8-800-2000-122 (Russia), 112 (emergency)."
      ],
      warnings: [
        "DON'T tell your child 'you're to blame' — this destroys their psyche.",
        "DON'T try to solve it yourself — contact the police.",
        "DON'T delete messages or destroy evidence.",
        "If your child talks about suicide — call 112 immediately."
      ]
    },

    // ============================================================
    // 3. CYBERBULLYING
    // ============================================================
    {
      id: "cyberbullying",
      title: "📲 Cyberbullying — online harassment",
      description: "Insults in chats, public pages, game lobbies, threats, sharing photos/videos. Just as painful as physical violence.",
      conditions: { bully_type: ["cyber"], role: ["victim"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Content removed, aggressors blocked",
      tags: ["cyber", "internet", "harassment"],
      steps: [
        "STEP 1. Take screenshots of EVERYTHING: insults, threats, photos, videos, profiles. Save to cloud and computer.",
        "STEP 2. Don't delete messages before contacting police/school. They are evidence.",
        "STEP 3. Block aggressors on all platforms. Enable 'friends only' mode.",
        "STEP 4. Contact platform support. Demand removal. State that your child is a minor.",
        "STEP 5. If threats, extortion, sharing intimate photos — immediately contact police.",
        "STEP 6. Talk to your child: it's not their fault, they're not alone.",
        "STEP 7. Temporarily limit internet access (as a break). Replace with offline activities.",
        "STEP 8. See a psychologist. Helpline: 8-800-2000-122."
      ],
      warnings: [
        "DON'T take away the phone 'forever' — the child loses connection with friends.",
        "DON'T say 'just turn off your phone' — social media is social life for teens.",
        "Sharing intimate photos of a minor is a criminal offense.",
        "DON'T publicly post conversations — this may worsen the situation."
      ]
    },

    // ============================================================
    // 4. VERBAL AND SOCIAL BULLYING
    // ============================================================
    {
      id: "verbal_social_bullying",
      title: "💬 Verbal and social bullying",
      description: "Insults, name-calling, gossip, exclusion from groups, boycotts. Invisible scars that go deeper than physical ones.",
      conditions: { bully_type: ["verbal", "social"], role: ["victim"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Social connections and self-esteem restored",
      tags: ["verbal", "social", "psychology"],
      steps: [
        "STEP 1. Talk to your child without judgment. Ask: 'What are you feeling? How long?' Write down names and dates.",
        "STEP 2. Explain: insults say more about the aggressor's problems than about your child.",
        "STEP 3. Help find a 'safe haven': another club, sports team, online community.",
        "STEP 4. Talk to the class teacher. Request: seating change, tolerance class.",
        "STEP 5. If bullying is systemic — demand intervention from the principal and school psychologist.",
        "STEP 6. Enroll with a psychologist. Verbal bullying causes anxiety and depression.",
        "STEP 7. Teach techniques: 'I don't accept this', walking away, finding an adult.",
        "STEP 8. If insults turn into threats — document and contact a lawyer."
      ],
      warnings: [
        "DON'T say 'don't pay attention' — for children, classmates are their whole world.",
        "DON'T force your child to 'be friends' with the aggressor — it's their right to choose.",
        "DON'T publicly accuse other children — it will worsen the bullying.",
        "Social bullying often comes with cyberbullying. Check your child's phone."
      ]
    },

    // ============================================================
    // 5. CHILD IS THE AGGRESSOR
    // ============================================================
    {
      id: "my_child_aggressor",
      title: "⚠️ My child is the aggressor — what to do",
      description: "It's hard to admit, but important. The aggressor is also a suffering child. Punishment won't help — they need help.",
      conditions: { role: ["aggressor"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–6 months",
      yield_estimate: "Aggression stopped and child helped",
      tags: ["aggressor", "psychology", "family"],
      steps: [
        "STEP 1. Don't deny or blindly defend your child. Listen, gather facts.",
        "STEP 2. Talk calmly, without yelling. Ask: 'How do you feel when you do that?'",
        "STEP 3. See a child psychologist. Aggression is a symptom.",
        "STEP 4. Set clear boundaries: 'Bullying others is unacceptable'.",
        "STEP 5. Show consequences: have them apologize, read stories of victims.",
        "STEP 6. Check the family: is there violence at home? Children copy behavior.",
        "STEP 7. Work with the teacher and school psychologist. Don't hide the problem.",
        "STEP 8. If physical aggression is serious — prepare for consequences. But help is the priority."
      ],
      warnings: [
        "DON'T defend your child with 'my child wouldn't' — it worsens the behavior.",
        "DON'T hit your child for aggression — violence breeds violence.",
        "DON'T transfer schools 'so they forget' — without working on it, nothing changes.",
        "Aggressors are often victims themselves. Your child needs help, not a label."
      ]
    },

    // ============================================================
    // 6. CHILD IS A WITNESS
    // ============================================================
    {
      id: "witness_bullying",
      title: "👁️ Child witnessed bullying — what to do",
      description: "Your child saw someone being bullied. This is also traumatic. Talk about their feelings.",
      conditions: { role: ["witness"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Emotional support for witness",
      tags: ["witness", "psychology", "support"],
      steps: [
        "STEP 1. Talk to your child: 'What did you see? How did you feel?' Say they did the right thing by telling you.",
        "STEP 2. Explain: staying silent when someone is bullied is also wrong. If scared — they can tell an adult anonymously.",
        "STEP 3. Ask: 'What could you do to help the victim?' Suggest options: supportive words, calling an adult.",
        "STEP 4. If your child feels fear and guilt — see a psychologist.",
        "STEP 5. Say: 'You're not to blame for what's happening. But you can make the world better'."
      ],
      warnings: [
        "DON'T say 'mind your own business' — it teaches indifference.",
        "DON'T force your child to intervene if scared — find a safe way to help."
      ]
    },

    // ============================================================
    // 7. CHILD IS SILENT — HOW TO OPEN UP
    // ============================================================
    {
      id: "child_silent",
      title: "🔇 Child is silent about bullying — how to get them to talk",
      description: "The child is afraid, ashamed, doesn't trust. Creating a safe environment is key.",
      conditions: { bully_type: ["unknown"], talked_to_child: ["talked_no", "talked_partial"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–7 days",
      yield_estimate: "Trust and information",
      tags: ["silent", "trust", "conversation"],
      steps: [
        "STEP 1. Choose a calm time and place: without distractions, alone.",
        "STEP 2. Start with feelings, not questions: 'I've noticed you've been sad lately. What's going on?'",
        "STEP 3. Say: 'I'm here to listen, not judge. Whatever you say, I'll support you'.",
        "STEP 4. Use indirect questions: 'How are things at school? Who are you friends with?'",
        "STEP 5. If silent — give time. Say: 'I'm ready to listen when you're ready'.",
        "STEP 6. Show you're on their side: 'I believe you. You're not to blame'.",
        "STEP 7. If it doesn't work — contact the school psychologist or family therapist."
      ],
      warnings: [
        "DON'T pressure or interrogate — it causes resistance.",
        "DON'T ask 'what happened?' directly — it closes the dialogue.",
        "DON'T dismiss feelings: 'don't make things up' — it destroys trust."
      ]
    },

    // ============================================================
    // 8. SUICIDAL THOUGHTS — CRISIS
    // ============================================================
    {
      id: "suicide_risk",
      title: "🚨 Child talks about suicide — emergency actions",
      description: "If your child says they don't want to live — this is a crisis. Act immediately.",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual", "unknown"], duration: ["weeks", "months"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Life saved",
      tags: ["suicide", "crisis", "emergency"],
      steps: [
        "STEP 1. DON'T leave the child alone. Remove accessible means (medications, sharp objects, ropes).",
        "STEP 2. Listen without judgment. Say: 'I hear you. You're not alone. I'm here'.",
        "STEP 3. DON'T argue or dismiss: 'you're wrong, everything will be fine'. Ask: 'What makes you think that?'",
        "STEP 4. IMMEDIATELY call: 112 (ambulance), 8-800-2000-122 (helpline, 24/7).",
        "STEP 5. Go to the nearest psychiatric hospital or call a psychiatric team.",
        "STEP 6. If in danger — don't wait, take them to the hospital yourself.",
        "STEP 7. After the crisis — mandatory work with a psychologist and psychiatrist."
      ],
      warnings: [
        "DON'T say 'that's silly' — it dismisses their pain.",
        "DON'T leave the child alone, even if they say they've calmed down.",
        "DON'T wait 'until tomorrow' — today may be too late.",
        "HELPLINE: 8-800-2000-122 (24/7, anonymous, free)."
      ]
    },

    // ============================================================
    // 9. HELPLINES — CONTACT LIST
    // ============================================================
    {
      id: "helplines",
      title: "📞 Who to call about bullying — contact list",
      description: "In an emergency, it's important to know who to call. Save this list in your phone.",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual", "unknown"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 minute",
      yield_estimate: "Quick help",
      tags: ["helplines", "contacts", "emergency"],
      steps: [
        "STEP 1. Emergency services (24/7): 112 — unified rescue service.",
        "STEP 2. Police: 102 — for physical violence, threats, theft, harassment.",
        "STEP 3. Ambulance: 103 — for injuries, wounds, suicide attempts.",
        "STEP 4. Child helpline: 8-800-2000-122 (24/7, anonymous, free).",
        "STEP 5. Department of Education (your region) — for school inaction.",
        "STEP 6. Commission on Minors' Affairs — for systemic bullying.",
        "STEP 7. EMERCOM psychological service: 8-499-216-01-85 (psychological help)."
      ],
      warnings: [
        "DON'T wait for the situation to resolve itself — call immediately.",
        "DON'T be afraid to contact the police — it's protection, not 'betrayal'.",
        "The helpline is anonymous. You don't have to give your name."
      ]
    },

    // ============================================================
    // 10. RECOVERY AFTER BULLYING
    // ============================================================
    {
      id: "recovery_after_bullying",
      title: "🌸 Recovery after bullying",
      description: "Bullying leaves scars. Help your child restore self-esteem and trust in people.",
      conditions: { role: ["victim"], duration: ["weeks", "months"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3–12 months",
      yield_estimate: "Mental health and social connections restored",
      tags: ["recovery", "psychology", "healing"],
      steps: [
        "STEP 1. Regular psychologist consultations (at least once a week).",
        "STEP 2. Create a home atmosphere of safety and unconditional love.",
        "STEP 3. Help your child find a new hobby / club / sport — new friends outside school.",
        "STEP 4. Don't rush your child to 'forget and move on'. Give time to heal.",
        "STEP 5. Strengthen self-esteem: praise successes, support failures.",
        "STEP 6. Model healthy relationships: respect, boundaries, kindness.",
        "STEP 7. If your child withdraws — gently involve them in family and social activities.",
        "STEP 8. Watch for signs of relapse: mood changes, fears, withdrawal."
      ],
      warnings: [
        "DON'T say 'it's over, forget it' — trauma doesn't disappear on command.",
        "DON'T compare to others: 'look at Petya, he's not afraid' — it dismisses.",
        "DON'T isolate your child from society — it increases fear.",
        "If no improvement in 6 months — change the psychologist or approach."
      ]
    },

    // ============================================================
    // 11. BULLYING FIRST TIME — QUICK RESPONSE
    // ============================================================
    {
      id: "bullying_first_time",
      title: "🆘 First-time bullying — quick response",
      description: "If it's the first time, react correctly to prevent repetition.",
      conditions: { duration: ["once"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Bullying stopped early",
      tags: ["first_time", "prevention"],
      steps: [
        "STEP 1. Talk to your child, listen without judgment. Make it clear it's not their fault.",
        "STEP 2. Take screenshots/photos of evidence (if any).",
        "STEP 3. Talk to the class teacher — calmly, ask them to monitor the situation.",
        "STEP 4. Tell your child they can come to you anytime if it happens again.",
        "STEP 5. Observe: has the child's behavior changed? Are they afraid to go to school?"
      ],
      warnings: [
        "DON'T dismiss it — if not stopped the first time, bullying will continue.",
        "DON'T blame the child — they're the victim, not the cause."
      ]
    },

    // ============================================================
    // 12. CHRONIC BULLYING — SYSTEMIC SOLUTION
    // ============================================================
    {
      id: "bullying_chronic",
      title: "📆 Chronic bullying — systemic solution",
      description: "If bullying lasts weeks and months — systemic measures needed: changing schools, psychology, legal protection.",
      conditions: { duration: ["weeks", "months"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Full stop of bullying and child's recovery",
      tags: ["chronic", "systemic", "urgent"],
      steps: [
        "STEP 1. Gather a full dossier: all screenshots, photos, records, evidence, dates.",
        "STEP 2. Write an official letter to the principal demanding action.",
        "STEP 3. Contact the Department of Education about school inaction.",
        "STEP 4. File a police report (if there were hits, threats, theft).",
        "STEP 5. Enroll your child with a psychologist (MANDATORY!).",
        "STEP 6. Consider transferring to another school — if bullying is systemic.",
        "STEP 7. If necessary — change city or country.",
        "STEP 8. Legal consultation: possible compensation for moral damages."
      ],
      warnings: [
        "Chronic bullying = psychological trauma. Don't delay psychological help!",
        "If your child talks about suicide — call 112.",
        "Schools often cover up bullying. Be persistent.",
        "Changing schools is a last resort, but sometimes the only one."
      ]
    }
  ]
});