// modules/children/data/en/internet-en.js
// === MODULE: CHILDREN — INTERNET SAFETY ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "children",
    category: "internet",
    version: "1.0.0",
    lang: "en",
    title: "📱 Internet Safety",
    description: "Grooming, sexting, addiction, scams, harmful content, cyberbullying — how to protect your child online",
    icon: "📱",
    color: "#db2777"
  },

  questions: [
    {
      id: "threat",
      type: "single",
      text: "What is the main online threat for your child?",
      options: [
        { id: "grooming", label: "👤 Communication with a stranger / suspicious messages", tags: ["grooming"] },
        { id: "cyberbullying_victim", label: "😢 Child is being bullied online", tags: ["cyberbullying_victim"] },
        { id: "cyberbullying_aggressor", label: "😠 Child is bullying others online", tags: ["cyberbullying_aggressor"] },
        { id: "sexting", label: "📷 Child sent/received intimate photos or videos", tags: ["sexting"] },
        { id: "addiction", label: "📱 Gadget / game / social media addiction", tags: ["addiction"] },
        { id: "scam", label: "💸 Scam / extortion / phishing", tags: ["scam"] },
        { id: "content", label: "⚠️ Harmful content (violence, suicide, drugs)", tags: ["content"] },
        { id: "leak", label: "🔓 Data leak / account hacked", tags: ["leak"] },
        { id: "challenges", label: "⚠️ Dangerous challenges (online tasks)", tags: ["challenges"] },
        { id: "fake_news", label: "📰 Fake news / disinformation", tags: ["fake_news"] }
      ]
    },
    {
      id: "age",
      type: "single",
      text: "How old is your child?",
      conditions: { threat: ["grooming", "cyberbullying_victim", "cyberbullying_aggressor", "sexting", "addiction", "scam", "content", "leak", "challenges", "fake_news"] },
      options: [
        { id: "preschool", label: "🧒 3–7 years old", tags: ["preschool"] },
        { id: "school_age", label: "🧑 7–12 years old", tags: ["school_age"] },
        { id: "teen", label: "🧑‍🎓 Teenager 13–17 years old", tags: ["teen"] }
      ]
    },
    {
      id: "screen_time_hours",
      type: "single",
      text: "How much time does your child spend online per day?",
      conditions: { threat: ["grooming", "cyberbullying_victim", "cyberbullying_aggressor", "sexting", "addiction", "scam", "content", "leak", "challenges", "fake_news"] },
      options: [
        { id: "screen_1_2", label: "⏱️ 1–2 hours (normal)", tags: ["screen_1_2"] },
        { id: "screen_3_5", label: "⏱️ 3–5 hours (too much)", tags: ["screen_3_5"] },
        { id: "screen_6_plus", label: "⏱️ More than 6 hours (addiction)", tags: ["screen_6_plus"] }
      ]
    },
    {
      id: "knows_rules",
      type: "single",
      text: "Does your child know online safety rules?",
      conditions: { threat: ["grooming", "cyberbullying_victim", "cyberbullying_aggressor", "sexting", "scam", "content", "leak", "challenges", "fake_news"] },
      options: [
        { id: "rules_yes", label: "✅ Yes, we've discussed the rules", tags: ["rules_yes"] },
        { id: "rules_no", label: "❌ No, we haven't discussed them", tags: ["rules_no"] },
        { id: "rules_unsure", label: "❓ Partially, not sure", tags: ["rules_unsure"] }
      ]
    },
    {
      id: "child_reaction",
      type: "single",
      text: "How is your child reacting to the situation?",
      conditions: { threat: ["grooming", "cyberbullying_victim", "sexting", "content", "challenges"] },
      options: [
        { id: "reaction_scared", label: "😨 Scared, crying, afraid", tags: ["reaction_scared"] },
        { id: "reaction_angry", label: "😠 Angry, aggressive", tags: ["reaction_angry"] },
        { id: "reaction_withdrawn", label: "🔇 Withdrawn, doesn't want to talk", tags: ["reaction_withdrawn"] },
        { id: "reaction_calm", label: "😌 Calm, shared details", tags: ["reaction_calm"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. GROOMING
    // ============================================================
    {
      id: "grooming_response",
      title: "🎭 Grooming — online manipulation by a stranger",
      description: "An adult pretends to be a peer, gains trust, arranges a meeting. This is a crime.",
      conditions: { threat: ["grooming"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Contact stopped, evidence saved",
      tags: ["grooming", "predator", "crime"],
      steps: [
        "STEP 1. Check ALL correspondence. Look for: compliments, secrets, 'only you understand me', requests for photos, meetings.",
        "STEP 2. Take screenshots of EVERYTHING. Save to cloud. DON'T delete messages!",
        "STEP 3. Block the person on all platforms. Change passwords. Enable two-factor authentication.",
        "STEP 4. If a meeting was arranged or child left — call 911 immediately.",
        "STEP 5. DON'T blame the child. Say: 'You were brave to tell me. We'll protect you'.",
        "STEP 6. Contact the police. Provide screenshots.",
        "STEP 7. See a child psychologist. Grooming is traumatic.",
        "STEP 8. Prevention: 'Never meet online friends without parents'. Code word: 'Mom, I'm scared'."
      ],
      warnings: [
        "DON'T blame the child — groomers are professional manipulators.",
        "DON'T delete messages — they are the main evidence.",
        "DON'T try to handle it yourself — that's the police's job."
      ]
    },

    // ============================================================
    // 2. CYBERBULLYING — CHILD IS VICTIM
    // ============================================================
    {
      id: "cyberbullying_victim",
      title: "😢 Child is being bullied online — how to protect",
      description: "Insults, threats, sharing photos, trolling — this is cyberbullying. Just as painful as real life.",
      conditions: { threat: ["cyberbullying_victim"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Bullying stopped + child protected",
      tags: ["cyberbullying", "victim", "harassment"],
      steps: [
        "STEP 1. Take screenshots of ALL insults, threats, photos. Save to cloud. This is evidence.",
        "STEP 2. Block all bullies on all platforms. Make the child's profile private.",
        "STEP 3. Contact platform support. Demand content removal and blocking of bullies.",
        "STEP 4. Talk to your child: 'This is not your fault. You're not alone. We'll get through this'.",
        "STEP 5. If threats to life, extortion — call police.",
        "STEP 6. See a psychologist. Cyberbullying causes depression and anxiety.",
        "STEP 7. Limit screen time (as a break). Replace with offline activities.",
        "STEP 8. Helpline: 8-800-2000-122."
      ],
      warnings: [
        "DON'T say 'don't pay attention' — for children, social media is reality.",
        "DON'T take away the phone 'forever' — the child loses support.",
        "DON'T post retaliatory posts — it makes things worse."
      ]
    },

    // ============================================================
    // 3. CYBERBULLYING — CHILD IS AGGRESSOR
    // ============================================================
    {
      id: "cyberbullying_aggressor",
      title: "😠 Child is bullying others online — what to do",
      description: "It's hard to admit, but important. The child may not realize the consequences of their aggression.",
      conditions: { threat: ["cyberbullying_aggressor"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–6 months",
      yield_estimate: "Aggression stopped + child helped",
      tags: ["cyberbullying", "aggressor", "psychology"],
      steps: [
        "STEP 1. Don't deny or defend the child. Gather facts.",
        "STEP 2. Talk calmly: 'How do you feel when you write this? Why do you do it?'",
        "STEP 3. Explain consequences: online insults can lead to legal liability.",
        "STEP 4. Check: is someone bullying the child in real life? Aggressors are often victims.",
        "STEP 5. See a psychologist. Aggression is a symptom.",
        "STEP 6. Help the child apologize (if ready).",
        "STEP 7. Set rules: 'If I see insults — consequences'."
      ],
      warnings: [
        "DON'T yell or hit — it worsens aggression.",
        "DON'T defend with 'my child wouldn't' — it hides the problem.",
        "DON'T cut off internet access — without working on it, the aggression won't stop."
      ]
    },

    // ============================================================
    // 4. SEXTING
    // ============================================================
    {
      id: "sexting_crisis",
      title: "🔞 Sexting — intimate photos/videos online",
      description: "Child sent or received intimate content. Panic, shame, blackmail. Act quickly and wisely.",
      conditions: { threat: ["sexting"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–24 hours",
      yield_estimate: "Content removed, child protected",
      tags: ["sexting", "blackmail", "crime"],
      steps: [
        "STEP 1. Stay calm. Say: 'Thank you for telling me. We'll figure it out'.",
        "STEP 2. Take screenshots of conversations, profiles, threats. DON'T delete until police.",
        "STEP 3. Contact platform support. Demand removal. State that the child is a minor.",
        "STEP 4. If blackmail — call police.",
        "STEP 5. Consult a lawyer. The child is a victim, not a criminal.",
        "STEP 6. See a psychologist. Sexting causes deep shame.",
        "STEP 7. Prevention: 'Never send intimate photos, even to close people'."
      ],
      warnings: [
        "DON'T yell at the child — they're already in shock.",
        "DON'T try to negotiate with the blackmailer yourself.",
        "DON'T delete messages — they are evidence."
      ]
    },

    // ============================================================
    // 5. GADGET ADDICTION
    // ============================================================
    {
      id: "digital_addiction",
      title: "🎮 Gadget, game, social media addiction",
      description: "Child can't put down the phone, screams when it's taken away, misses meals, sleep, school. This is addiction.",
      conditions: { threat: ["addiction"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–6 months",
      yield_estimate: "Control over time regained",
      tags: ["addiction", "games", "screen_time"],
      steps: [
        "STEP 1. Start with a conversation: 'I've noticed you spend a lot of time on your phone. Let's agree on a balance'.",
        "STEP 2. Together set rules: screen time (1 hour on weekdays, 2 on weekends). Rules for everyone.",
        "STEP 3. Set up parental controls: Google Family Link, Screen Time.",
        "STEP 4. Offer alternatives: sports, creative activities, meeting friends.",
        "STEP 5. If tantrums — see a psychologist. This is severe addiction.",
        "STEP 6. Check if the child is escaping into the virtual world from real problems.",
        "STEP 7. Be a role model — if you're always on your phone, rules are meaningless.",
        "STEP 8. Reduce time gradually, not suddenly."
      ],
      warnings: [
        "DON'T take away the phone 'forever' — a last resort.",
        "DON'T use parental control as spying.",
        "Gaming addiction is a diagnosis (IGD). Requires professional help."
      ]
    },

    // ============================================================
    // 6. DIGITAL DETOX
    // ============================================================
    {
      id: "digital_detox",
      title: "🌿 Digital detox — how to help your child take a break from screens",
      description: "Sometimes you need a break from the internet. Help your child switch focus.",
      conditions: { threat: ["addiction"], screen_time_hours: ["screen_6_plus"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Screen time reduced",
      tags: ["detox", "digital", "health"],
      steps: [
        "STEP 1. Have a gadget-free day — the whole family.",
        "STEP 2. Offer alternatives: walks, board games, sports.",
        "STEP 3. Establish 'phone-free zones' — dinner table, bedroom, bathroom.",
        "STEP 4. Rule: no phones 1 hour before bedtime.",
        "STEP 5. Replace social media time with real meetings with friends.",
        "STEP 6. Lead by example — turn off notifications for a while."
      ],
      warnings: [
        "DON'T make detox a punishment — it should be voluntary.",
        "DON'T cut off internet without warning — it's stressful."
      ]
    },

    // ============================================================
    // 7. SCAM
    // ============================================================
    {
      id: "online_scam",
      title: "💰 Online scam, phishing, extortion",
      description: "Promised free skins, V-bucks, Robux — stole card data, hacked accounts.",
      conditions: { threat: ["scam"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Money recovered, data protected",
      tags: ["scam", "fraud", "games"],
      steps: [
        "STEP 1. Change passwords on ALL accounts. Enable two-factor authentication.",
        "STEP 2. If card data stolen — call the bank, block the card.",
        "STEP 3. Save screenshots of conversations, links — evidence.",
        "STEP 4. If extortion — DON'T PAY. Call police.",
        "STEP 5. Scan the device for viruses (Dr.Web, Kaspersky).",
        "STEP 6. Explain to the child: 'Free skins are always a scam'.",
        "STEP 7. File a dispute with the bank."
      ],
      warnings: [
        "DON'T pay extortionists — they'll come back.",
        "DON'T blame the child — scammers are professional manipulators.",
        "Cryptocurrency is almost impossible to recover — warn the child."
      ]
    },

    // ============================================================
    // 8. HARMFUL CONTENT
    // ============================================================
    {
      id: "harmful_content",
      title: "☠️ Harmful content: violence, suicide, drugs",
      description: "Child encountered or is searching for prohibited content: violence, suicide, drugs.",
      conditions: { threat: ["content"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–7 days",
      yield_estimate: "Content blocked, child helped",
      tags: ["content", "violence", "suicide", "drugs"],
      steps: [
        "STEP 1. Don't panic. Talk calmly: 'I noticed you were watching this. How do you feel?'",
        "STEP 2. If the child is searching for suicide information — call 8-800-2000-122.",
        "STEP 3. Block content: YouTube Restricted Mode, Google SafeSearch.",
        "STEP 4. Report violations to platform support.",
        "STEP 5. If threatening self-harm — ambulance and police.",
        "STEP 6. Explain: the internet shows everything, but not everything is true.",
        "STEP 7. Spend more time together — fill life with meaning."
      ],
      warnings: [
        "DON'T ignore searches for prohibited content.",
        "DON'T block content without a conversation.",
        "Suicide promotion is a criminal offense."
      ]
    },

    // ============================================================
    // 9. DANGEROUS CHALLENGES
    // ============================================================
    {
      id: "dangerous_challenges",
      title: "⚠️ Dangerous challenges — how to protect your child",
      description: "Child is participating in or interested in dangerous challenges. This can be life-threatening.",
      conditions: { threat: ["challenges"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Participation prevented",
      tags: ["challenges", "dangerous", "social_media"],
      steps: [
        "STEP 1. Talk to your child: 'What is this challenge? Why do you want to do it?'",
        "STEP 2. Explain: dangerous challenges are not 'cool', they risk your life.",
        "STEP 3. If already participated — check for injuries. If injured — see a doctor.",
        "STEP 4. Report to the school — they may have a class discussion.",
        "STEP 5. If the challenge is life-threatening — call police.",
        "STEP 6. Set up parental controls and monitor interests.",
        "STEP 7. Offer alternatives: safe challenges (sports, creative)."
      ],
      warnings: [
        "DON'T laugh at the challenge — the child will think you support it.",
        "DON'T ban without explanation — the child will do it secretly.",
        "Dangerous challenges can be fatal. Don't underestimate."
      ]
    },

    // ============================================================
    // 10. DATA LEAK / HACKED ACCOUNT
    // ============================================================
    {
      id: "account_hacked",
      title: "🔓 Hacked account or data leak",
      description: "Child's account was hacked, data stolen, scammers are using their name.",
      conditions: { threat: ["leak"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–24 hours",
      yield_estimate: "Control restored",
      tags: ["leak", "hacking", "security"],
      steps: [
        "STEP 1. Change password. Use 12+ characters.",
        "STEP 2. Enable two-factor authentication.",
        "STEP 3. Check linked devices and remove unknown ones.",
        "STEP 4. Save screenshots of suspicious logins.",
        "STEP 5. If account is used for fraud — contact support.",
        "STEP 6. Scan the device for viruses.",
        "STEP 7. Prevention: don't use the same password everywhere."
      ],
      warnings: [
        "DON'T use simple passwords — they're hacked in seconds.",
        "DON'T save passwords in plain text.",
        "Passport data leak — risk of credit fraud."
      ]
    },

    // ============================================================
    // 11. FAKE NEWS / DISINFORMATION
    // ============================================================
    {
      id: "fake_news",
      title: "📰 Fake news and disinformation",
      description: "Child believes and spreads fake news. It's important to teach them to verify information.",
      conditions: { threat: ["fake_news"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Critical thinking developed",
      tags: ["fake_news", "media_literacy", "critical_thinking"],
      steps: [
        "STEP 1. Talk to your child: 'How do you know this news is true?'",
        "STEP 2. Teach fact-checking: find the source, check the date, check other channels.",
        "STEP 3. Together verify several news stories — show how to spot fakes.",
        "STEP 4. Explain: fakes are created to manipulate.",
        "STEP 5. Use fact-checking sites.",
        "STEP 6. Teach: 'Don't trust loud headlines — verify!'",
        "STEP 7. If the child spread a fake — help them correct it."
      ],
      warnings: [
        "DON'T say 'don't believe anything' — it creates cynicism.",
        "DON'T overwhelm the child — teach gradually.",
        "Fakes can cause panic. Teach them to verify information."
      ]
    },

    // ============================================================
    // 12. SETTING UP A SAFE ACCOUNT
    // ============================================================
    {
      id: "safe_account_setup",
      title: "🔐 How to set up a safe account for your child",
      description: "Configure your child's account to minimize risks.",
      conditions: { threat: ["grooming", "cyberbullying_victim", "scam", "leak"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–2 hours",
      yield_estimate: "Safe account",
      tags: ["security", "account", "setup"],
      steps: [
        "STEP 1. Enable two-factor authentication (2FA) on all platforms.",
        "STEP 2. Set a strong password (12+ characters, letters, numbers, symbols).",
        "STEP 3. Set profile to private mode.",
        "STEP 4. Turn off geolocation in public posts.",
        "STEP 5. Don't put address, school, phone number in the profile.",
        "STEP 6. Set up parental controls: time limits, content filters.",
        "STEP 7. Regularly check settings and activity.",
        "STEP 8. Explain to the child: 'Never give your password to anyone, even friends'."
      ],
      warnings: [
        "DON'T use the same password for all accounts.",
        "DON'T save passwords in the browser (if sharing a computer).",
        "DON'T share personal information publicly."
      ]
    }
  ]
});