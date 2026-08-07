<<<<<<< HEAD
// === MODULE: INTERNET SAFETY (ENGLISH) ===
const internetDataEn = {
  category: "internet",
  title: "📱 Internet Safety",
  description: "Grooming, sexting, addiction, scams, dangerous content, cyberbullying, data leaks — how to protect your child online",

  questions: [
    {
      id: "threat",
      text: "What threat are you facing?",
      type: "single",
      options: [
        { id: "grooming", label: "Communication with a stranger / suspicious messages (grooming)", tags: ["grooming"] },
        { id: "sexting", label: "Child sent/received intimate photos or videos", tags: ["sexting"] },
        { id: "addiction", label: "Addiction to gadgets / games / social media", tags: ["addiction"] },
        { id: "scam", label: "Fraud / extortion / phishing", tags: ["scam"] },
        { id: "content", label: "Dangerous content (violence, suicide, drugs)", tags: ["content"] },
        { id: "leak", label: "Data leak / account hack", tags: ["leak"] },
        { id: "cyberbullying", label: "Cyberbullying (insults, threats, online harassment)", tags: ["cyberbullying"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "preschool", label: "3–7 years", tags: ["preschool"] },
        { id: "school", label: "7–12 years", tags: ["school_age"] },
        { id: "teen", label: "Teenager 13–17 years", tags: ["teen"] }
      ]
    },
    {
      id: "platform",
      text: "Where did it happen?",
      type: "single",
      options: [
        { id: "social", label: "Social media (VK, Instagram, TikTok)", tags: ["social"] },
        { id: "games", label: "Games (Roblox, Minecraft, CS:GO, Brawl Stars)", tags: ["games"] },
        { id: "messengers", label: "Messengers (Telegram, WhatsApp, Discord)", tags: ["messengers"] },
        { id: "video", label: "Video (YouTube, Twitch, TikTok)", tags: ["video"] }
      ]
    },
    {
      id: "grooming_details",
      text: "If grooming — are there signs of danger?",
      condition: { threat: ["grooming"] },
      options: [
        { id: "no_meeting", label: "Just correspondence so far, no meeting", tags: ["no_meeting"] },
        { id: "meeting_planned", label: "A meeting is scheduled or the child has already gone to a meeting", tags: ["meeting_planned"] },
        { id: "extortion", label: "They are extorting money or intimate photos under threats", tags: ["extortion"] }
      ]
    },
    {
      id: "sexting_details",
      text: "If sexting — what exactly happened?",
      condition: { threat: ["sexting"] },
      options: [
        { id: "sent_voluntarily", label: "Child sent photos/videos themselves upon request", tags: ["sent"] },
        { id: "received", label: "Child received someone else's intimate materials", tags: ["received"] },
        { id: "leaked", label: "Photos/videos are already being circulated or blackmailed", tags: ["leaked"] }
      ]
    },
    {
      id: "addiction_severity",
      text: "If addiction — how does it manifest?",
      condition: { threat: ["addiction"] },
      options: [
        { id: "mild", label: "Spends a lot of time on phone but doesn't interfere with studies and sleep", tags: ["mild"] },
        { id: "moderate", label: "Skips meals, doesn't do homework, fights when trying to limit", tags: ["moderate"] },
        { id: "severe", label: "Aggression, tantrums, threats, secret use at night, abandoned everything", tags: ["severe"] }
      ]
    },
    {
      id: "scam_details",
      text: "If fraud — what was stolen?",
      condition: { threat: ["scam"] },
      options: [
        { id: "account", label: "Account in game or social media hacked", tags: ["account"] },
        { id: "money", label: "Money stolen from card or tricked into transferring", tags: ["money"] },
        { id: "data", label: "Personal data stolen (passport, address, photos)", tags: ["data"] }
      ]
    },
    {
      id: "content_type",
      text: "What dangerous content?",
      condition: { threat: ["content"] },
      options: [
        { id: "violence", label: "Violence, cruelty, gore", tags: ["violence"] },
        { id: "suicide", label: "Suicide promotion, depressive groups, 'Blue Whale'", tags: ["suicide"] },
        { id: "drugs", label: "Drugs, spice, psychoactive substances", tags: ["drugs"] },
        { id: "porn", label: "Pornography, erotica (age-inappropriate)", tags: ["porn"] }
      ]
    },
    {
      id: "child_reaction",
      text: "Child's reaction to the situation?",
      type: "single",
      options: [
        { id: "calm", label: "Calm, told themselves and ready to discuss", tags: ["calm"] },
        { id: "shame", label: "Ashamed, withdrawn, afraid of punishment", tags: ["shame"] },
        { id: "aggressive", label: "Aggressive, denies, refuses contact", tags: ["aggressive"] },
        { id: "suicidal", label: "Talks about death, self-harm, hopelessness", tags: ["suicidal"] }
      ]
    },
    {
      id: "parental_control",
      text: "Do you use parental controls or restrictions?",
      type: "single",
      options: [
        { id: "no_control", label: "No, we don't use", tags: ["no_control"] },
        { id: "basic", label: "Basic restrictions (timer, safe search)", tags: ["basic"] },
        { id: "full", label: "Full control with monitoring and filtering", tags: ["full"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Grooming — correspondence without meeting
    // ========================================
    {
      id: "grooming_no_meeting",
      title: "🎭 Grooming: correspondence with a stranger — action plan",
      description: "An adult poses as a peer, builds trust. If no meeting yet — you can break contact and preserve evidence.",
      conditions: { threat: ["grooming"], grooming_details: ["no_meeting"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Break contact, preserve evidence",
      tags: ["grooming", "predator", "prevention"],
      steps: [
        "Immediately check ALL correspondence: VK, Telegram, WhatsApp, Discord, game chats. Look for: compliments, secrets, 'only you understand me', requests for photos, video calls, meetings.",
        "Screenshot EVERYTHING: profile, messages, photos, links. Save to cloud and computer.",
        "Do not delete the correspondence — it's the main evidence for police.",
        "Block the person on all platforms. Change your child's passwords.",
        "Enable two-factor authentication on all child accounts.",
        "Talk to the child without judgment: 'You're brave for telling me. Such people deceive children, but we will protect you.'",
        "File a police report about grooming (Article 240.1 of the Criminal Code) — even if no meeting occurred, it's a crime.",
        "Book a psychologist for the child — grooming is traumatic even without a meeting."
      ],
      warnings: [
        "Do not blame the child — groomers are professionals, they know how to manipulate.",
        "Do not delete the correspondence — it's evidence.",
        "Do not try to negotiate with the groomer yourself — it will only encourage them."
      ]
    },
    // ========================================
    // 2. Grooming — meeting scheduled or child went
    // ========================================
    {
      id: "grooming_meeting",
      title: "🚨 Grooming: meeting scheduled or child already left — emergency measures",
      description: "If a meeting with a stranger is planned or has already happened — act immediately.",
      conditions: { threat: ["grooming"], grooming_details: ["meeting_planned"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Child safety, offender arrest",
      tags: ["grooming", "meeting", "emergency"],
      steps: [
        "If the meeting hasn't started yet — do NOT let the child go. Explain that it's dangerous, that you're protecting them.",
        "If the child has already gone to the meeting — call the police (911/112) immediately. Report: online communication, profile, description, meeting place, child's appearance.",
        "Try to reach the child by phone — tell them not to engage, wait for police.",
        "If the meeting has already happened — immediately go to police and trauma center (for examination).",
        "Save all screenshots and correspondence — they will help identify the offender.",
        "Contact a psychologist for emergency help (post-traumatic reaction).",
        "File a police report — Articles 132, 135, 240.1 of the Criminal Code."
      ],
      warnings: [
        "Do not try to search for the child yourself — trust the police.",
        "Do not pressure the child with questions immediately — they need support, not interrogation.",
        "Grooming is a criminal offense, do not let it go."
      ]
    },
    // ========================================
    // 3. Grooming with extortion
    // ========================================
    {
      id: "grooming_extortion",
      title: "💀 Grooming with extortion — protection from blackmail",
      description: "A stranger extorts money, intimate photos or threatens to distribute compromising materials.",
      conditions: { threat: ["grooming"], grooming_details: ["extortion"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Stop blackmail, bring to justice",
      tags: ["grooming", "extortion", "blackmail"],
      steps: [
        "DO NOT PAY! It's a bottomless pit. The blackmailer will demand again and again.",
        "Screenshot all threats and correspondence. Save to cloud.",
        "Block the blackmailer on all platforms.",
        "Report to police: extortion (Article 163 of the Criminal Code) and distribution of intimate materials (Article 242.1).",
        "If materials are already distributed — contact platform support to remove them.",
        "Consult a lawyer to protect the child's rights.",
        "See a psychologist — blackmail causes severe stress and shame."
      ],
      warnings: [
        "Never pay blackmailers — it does not guarantee removal of materials.",
        "Do not delete correspondence — it's needed for police.",
        "Distribution of intimate photos of a minor is a criminal offense."
      ]
    },
    // ========================================
    // 4. Sexting — sending photos upon request
    // ========================================
    {
      id: "sexting_sent",
      title: "🔞 Sexting: child sent intimate photos — how to help",
      description: "The child sent photos under pressure, infatuation, or deception. Your job is to remove shame and protect.",
      conditions: { threat: ["sexting"], sexting_details: ["sent"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Remove materials, restore trust",
      tags: ["sexting", "shame", "support"],
      steps: [
        "Stay calm. Do not yell, do not accuse. Say: 'Thank you for telling me. We'll figure it out together.'",
        "Screenshot the correspondence and the recipient's profile.",
        "If photos haven't been shared yet — ask the recipient to delete. If they refuse — file a police report.",
        "If photos are already circulating — demand removal through platform support and police.",
        "Consult a lawyer for advice on rights protection.",
        "See a psychologist — the child feels shame, fear, guilt.",
        "Explain the digital footprint rule: everything sent stays forever. Never send intimate photos, even to close ones."
      ],
      warnings: [
        "Do not punish or take away the phone — it only worsens isolation.",
        "The child is a victim, even if they 'agreed'. Minors cannot give consent to the distribution of intimate materials.",
        "Distribution of such photos is a criminal offense."
      ]
    },
    // ========================================
    // 5. Sexting — receiving or leaked
    // ========================================
    {
      id: "sexting_received_leaked",
      title: "🔞 Child received intimate materials or they are already leaked",
      description: "If the child came across someone else's intimate photos or their own photos are circulating online.",
      conditions: { threat: ["sexting"], sexting_details: ["received", "leaked"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–24 hours",
      yield_estimate: "Remove materials, prosecute offenders",
      tags: ["sexting", "distribution", "emergency"],
      steps: [
        "Upon receiving — do not save, do not forward, delete. Explain to the child it's illegal.",
        "Save only screenshots of the sender's profile for police.",
        "If your child's photos are already circulated — act fast: screenshots, police report, platform support.",
        "Contact the 'Safe Internet League' — they help remove such material.",
        "See a psychologist — this is a serious trauma.",
        "File a police report under Article 242.1 of the Criminal Code."
      ],
      warnings: [
        "Do not forward such material further — it's a criminal offense.",
        "The child is not to blame for receiving or having their photos circulated.",
        "Remember: even 'voluntary' sending of photos is not consent to distribution."
      ]
    },
    // ========================================
    // 6. Mild gadget addiction
    // ========================================
    {
      id: "addiction_mild",
      title: "📱 Mild gadget addiction — adjusting routine",
      description: "Child spends a lot of time on the phone, but studies and sleep are not yet affected. Time for gentle limits.",
      conditions: { threat: ["addiction"], addiction_severity: ["mild"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 weeks",
      yield_estimate: "Establish healthy boundaries",
      tags: ["addiction", "screen_time", "rules"],
      steps: [
        "Introduce family rules: e.g., 1.5–2 hours of screen time on weekdays, 3 hours on weekends.",
        "Create 'phone-free zones': the dining table, bedroom, during meals.",
        "Set up parental controls (Google Family Link, Screen Time) with soft limits.",
        "Explain why: to protect eyesight, sleep, and grades.",
        "Offer alternatives: sports, board games, walks, shared hobbies.",
        "Lead by example — follow the rules yourself."
      ],
      warnings: [
        "Don't impose strict bans without explanation — they will cause rebellion.",
        "Don't use parental control as surveillance — explain its purpose."
      ]
    },
    // ========================================
    // 7. Moderate gadget addiction
    // ========================================
    {
      id: "addiction_moderate",
      title: "📱 Moderate addiction — arguments, skipping lessons",
      description: "Child already fights about the phone, neglects studies, disrupts sleep. Need clear boundaries and conversation.",
      conditions: { threat: ["addiction"], addiction_severity: ["moderate"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–3 months",
      yield_estimate: "Restore balance",
      tags: ["addiction", "conflict", "rules"],
      steps: [
        "Sit down and calmly discuss: 'I see you spend a lot of time on your phone. Let's make rules together so you're happy and we don't argue.'",
        "Set clear timings: e.g., 1 hour after school, 30 minutes before bed. On weekends — 2 hours.",
        "Take the phone away 1 hour before bedtime (keep in another room) — improves sleep quality.",
        "Let the child choose an alternative: club, sports, friends' meetups.",
        "If conflicts continue — see a family psychologist.",
        "Check if there are problems at school (bullying, poor performance) that the child is compensating with gaming."
      ],
      warnings: [
        "Do not punish by taking the phone for a month — it will ruin trust.",
        "Be consistent: if rules are set, follow them yourself."
      ]
    },
    // ========================================
    // 8. Severe addiction (tantrums, threats, aggression)
    // ========================================
    {
      id: "addiction_severe",
      title: "⚠️ Severe gaming/social media addiction — professional help needed",
      description: "Child throws tantrums, makes threats, secretly uses at night. This is a behavioral disorder, professional help is needed.",
      conditions: { threat: ["addiction"], addiction_severity: ["severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 months",
      yield_estimate: "Treat addiction and recover",
      tags: ["addiction", "severe", "therapy"],
      steps: [
        "Do not engage in conflict. If child is having a tantrum — let them cool down, leave the room.",
        "See a child psychologist or psychotherapist specializing in internet addiction.",
        "Consider treatment at a rehabilitation center (e.g., addiction centers).",
        "Check if the child is suffering from depression, anxiety, ADHD — often accompanying addiction.",
        "If the child threatens self-harm — call emergency services (911/112) or a crisis hotline.",
        "Work with a family therapist — addiction is often linked to family issues.",
        "Gradually replace virtual communication with real, but very gently."
      ],
      warnings: [
        "Gaming disorder (IGD) is recognized by WHO — it's not 'laziness', it's a diagnosis.",
        "Do not try to 're-educate' alone — you need a specialist.",
        "If suicide threats occur — call emergency services immediately."
      ]
    },
    // ========================================
    // 9. Fraud — account hack
    // ========================================
    {
      id: "scam_account",
      title: "🔐 Account hacked — recovery and protection",
      description: "Child's account was hacked, scammers send spam or extort money.",
      conditions: { threat: ["scam"], scam_details: ["account"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 days",
      yield_estimate: "Recover account and strengthen security",
      tags: ["scam", "account", "recovery"],
      steps: [
        "Use the 'Forgot password?' function — recover access via email or phone.",
        "Change password to a new, strong one (combination of letters, digits, symbols).",
        "Enable two-factor authentication (via phone or authenticator app).",
        "Check if any unknown devices are linked to the account — remove them.",
        "Inform friends and followers that the account was hacked so they don't click on suspicious links.",
        "If scammers demanded a ransom — do not pay, contact police.",
        "Install antivirus on the device, check for malware."
      ],
      warnings: [
        "Do not use simple passwords (birth date, name).",
        "Two-factor authentication is mandatory.",
        "If the account was used for financial transactions — contact your bank."
      ]
    },
    // ========================================
    // 10. Fraud — money theft
    // ========================================
    {
      id: "scam_money",
      title: "💰 Card or transfer fraud — recovering funds",
      description: "Child was tricked into transferring money or entering card details on a phishing site.",
      conditions: { threat: ["scam"], scam_details: ["money"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Refund, card block",
      tags: ["scam", "money", "bank"],
      steps: [
        "Immediately block the card in the bank's mobile app or call the hotline.",
        "File a fraud report with the bank — they are obliged to investigate and refund (if the transaction is disputed).",
        "Save all screenshots of correspondence, links, pages where money was sent.",
        "File a police report about fraud (Article 159 of the Criminal Code).",
        "Explain to the child: never enter card details on unknown sites, never send money to strangers.",
        "Check for any other unauthorized charges."
      ],
      warnings: [
        "Do not delay blocking the card — scammers can drain all funds.",
        "If transferred via cryptocurrency — chances of refund are extremely low.",
        "The bank is obligated to refund if you report theft within 24 hours."
      ]
    },
    // ========================================
    // 11. Fraud — identity theft
    // ========================================
    {
      id: "scam_data",
      title: "📁 Personal data leak — what to do",
      description: "Scammers obtained passport details, address, photos of the child — could be used for fraud.",
      conditions: { threat: ["scam"], scam_details: ["data"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Minimize risks",
      tags: ["scam", "data", "identity"],
      steps: [
        "If passport data was stolen — file a police report about theft.",
        "Notify banks if cards are linked — change security questions and passwords.",
        "Contact credit bureaus to place a ban on loans without personal presence.",
        "Check the child's accounts for unauthorized logins.",
        "Explain to the child: never share personal data online, even if 'support' asks."
      ],
      warnings: [
        "Stolen personal data can be used for years — stay vigilant.",
        "Regularly check credit history."
      ]
    },
    // ========================================
    // 12. Dangerous content — violence or pornography
    // ========================================
    {
      id: "content_violence_porn",
      title: "🛑 Dangerous content (violence, porn) — what to do",
      description: "Child accidentally or deliberately watches violent or pornographic material.",
      conditions: { threat: ["content"], content_type: ["violence", "porn"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Stop viewing and correct behavior",
      tags: ["content", "violence", "porn", "parenting"],
      steps: [
        "Talk calmly: 'I noticed you watched this. What interested you?' — without judgment.",
        "Explain it's not real: violence doesn't solve problems, porn is acting, not real relationships.",
        "Set up parental controls: YouTube Restricted Mode, Google SafeSearch, router filters.",
        "If child is curious — satisfy curiosity with age-appropriate literature about puberty.",
        "If viewing causes anxiety or aggression — see a psychologist."
      ],
      warnings: [
        "Do not shame the child for watching porn — it's normal curiosity in adolescence.",
        "Do not ignore — explain the difference between real relationships and porn."
      ]
    },
    // ========================================
    // 13. Dangerous content — suicide / depression
    // ========================================
    {
      id: "content_suicide",
      title: "🚨 Seeking suicide information — emergency measures",
      description: "Child is searching for suicide information, in depressive groups, talks about hopelessness.",
      conditions: { threat: ["content"], content_type: ["suicide"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Save life, get professional help",
      tags: ["content", "suicide", "emergency"],
      steps: [
        "DO NOT IGNORE! This is a cry for help.",
        "Talk calmly: 'I see you're looking for this. I need to know what you're feeling. You're not alone, we'll get through it.'",
        "Immediately see a psychologist or psychotherapist specializing in suicidal behavior.",
        "Call a helpline: 8-800-2000-122 (24/7, anonymous — Russia).",
        "If child threatens suicide — call emergency services (911/112) and police.",
        "Remove all dangerous objects (medications, weapons, ropes).",
        "Report destructive groups to police (Article 110.1 of the Criminal Code) and Roskomnadzor for blocking.",
        "Do not leave the child alone until help arrives."
      ],
      warnings: [
        "Do not say 'this is silly' or 'don't make up stories' — it devalues their feelings.",
        "Suicidal thoughts are a symptom, not a character trait. Treatable.",
        "Never leave the child alone with such signals."
      ]
    },
    // ========================================
    // 14. Dangerous content — drugs
    // ========================================
    {
      id: "content_drugs",
      title: "💊 Drug propaganda — what to do",
      description: "Child watches drug-related content, asks about drugs, may have already tried.",
      conditions: { threat: ["content"], content_type: ["drugs"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Prevent substance use",
      tags: ["content", "drugs", "prevention"],
      steps: [
        "Talk honestly, without accusations. Ask: 'What do you know about drugs? What interests you?'",
        "Give facts: health consequences, mental effects, addiction, life destruction.",
        "If there's suspicion that the child has already tried — anonymously consult a narcologist.",
        "Set up search filters (Google SafeSearch, DNS filters).",
        "Report drug-promoting groups to police and Roskomnadzor.",
        "Fill the child's time with useful activities to reduce risk."
      ],
      warnings: [
        "Do not frighten — it will push them away. Provide reliable information instead.",
        "Early contact with a narcologist can prevent addiction."
      ]
    },
    // ========================================
    // 15. Cyberbullying
    // ========================================
    {
      id: "cyberbullying",
      title: "💬 Cyberbullying — insults, threats, online harassment",
      description: "Child receives insults, threats, is excluded from chats, rumors spread.",
      conditions: { threat: ["cyberbullying"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Stop harassment, protect child",
      tags: ["cyberbullying", "harassment", "support"],
      steps: [
        "Screenshot all insults and threats.",
        "Block offenders on all platforms.",
        "Inform the school or class teacher if offenders are classmates.",
        "Contact platform support to remove offensive content.",
        "Talk to the child: it's not their fault, offenders are weak people.",
        "See a psychologist to restore self-esteem.",
        "If threats of physical harm — contact police."
      ],
      warnings: [
        "Do not advise the child to 'ignore it' — it doesn't work with systemic harassment.",
        "Do not respond to offenders — it only encourages them."
      ]
    },
    // ========================================
    // 16. Data leak / hack — general algorithm
    // ========================================
    {
      id: "leak_response",
      title: "🔒 Data leak or account hack — protection",
      description: "The child's personal data fell into the wrong hands or account was hacked.",
      conditions: { threat: ["leak"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Restore security",
      tags: ["leak", "data", "hacking"],
      steps: [
        "Change passwords on all child accounts, using strong passwords.",
        "Enable two-factor authentication.",
        "Check for unauthorized access to financial operations.",
        "Contact platform support to regain control of the account.",
        "Scan the device for viruses and keyloggers.",
        "Explain to the child the importance of security: don't reuse passwords, don't click suspicious links."
      ],
      warnings: [
        "Do not store passwords in plain text.",
        "Regularly check account activity."
      ]
    }
  ]
};

// ===== EXPORT =====
window.internetDataEn = internetDataEn;
=======
// === MODULE: INTERNET SAFETY (ENGLISH) ===
const internetDataEn = {
  category: "internet",
  title: "📱 Internet Safety",
  description: "Grooming, sexting, addiction, scams, dangerous content, cyberbullying, data leaks — how to protect your child online",

  questions: [
    {
      id: "threat",
      text: "What threat are you facing?",
      type: "single",
      options: [
        { id: "grooming", label: "Communication with a stranger / suspicious messages (grooming)", tags: ["grooming"] },
        { id: "sexting", label: "Child sent/received intimate photos or videos", tags: ["sexting"] },
        { id: "addiction", label: "Addiction to gadgets / games / social media", tags: ["addiction"] },
        { id: "scam", label: "Fraud / extortion / phishing", tags: ["scam"] },
        { id: "content", label: "Dangerous content (violence, suicide, drugs)", tags: ["content"] },
        { id: "leak", label: "Data leak / account hack", tags: ["leak"] },
        { id: "cyberbullying", label: "Cyberbullying (insults, threats, online harassment)", tags: ["cyberbullying"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "preschool", label: "3–7 years", tags: ["preschool"] },
        { id: "school", label: "7–12 years", tags: ["school_age"] },
        { id: "teen", label: "Teenager 13–17 years", tags: ["teen"] }
      ]
    },
    {
      id: "platform",
      text: "Where did it happen?",
      type: "single",
      options: [
        { id: "social", label: "Social media (VK, Instagram, TikTok)", tags: ["social"] },
        { id: "games", label: "Games (Roblox, Minecraft, CS:GO, Brawl Stars)", tags: ["games"] },
        { id: "messengers", label: "Messengers (Telegram, WhatsApp, Discord)", tags: ["messengers"] },
        { id: "video", label: "Video (YouTube, Twitch, TikTok)", tags: ["video"] }
      ]
    },
    {
      id: "grooming_details",
      text: "If grooming — are there signs of danger?",
      condition: { threat: ["grooming"] },
      options: [
        { id: "no_meeting", label: "Just correspondence so far, no meeting", tags: ["no_meeting"] },
        { id: "meeting_planned", label: "A meeting is scheduled or the child has already gone to a meeting", tags: ["meeting_planned"] },
        { id: "extortion", label: "They are extorting money or intimate photos under threats", tags: ["extortion"] }
      ]
    },
    {
      id: "sexting_details",
      text: "If sexting — what exactly happened?",
      condition: { threat: ["sexting"] },
      options: [
        { id: "sent_voluntarily", label: "Child sent photos/videos themselves upon request", tags: ["sent"] },
        { id: "received", label: "Child received someone else's intimate materials", tags: ["received"] },
        { id: "leaked", label: "Photos/videos are already being circulated or blackmailed", tags: ["leaked"] }
      ]
    },
    {
      id: "addiction_severity",
      text: "If addiction — how does it manifest?",
      condition: { threat: ["addiction"] },
      options: [
        { id: "mild", label: "Spends a lot of time on phone but doesn't interfere with studies and sleep", tags: ["mild"] },
        { id: "moderate", label: "Skips meals, doesn't do homework, fights when trying to limit", tags: ["moderate"] },
        { id: "severe", label: "Aggression, tantrums, threats, secret use at night, abandoned everything", tags: ["severe"] }
      ]
    },
    {
      id: "scam_details",
      text: "If fraud — what was stolen?",
      condition: { threat: ["scam"] },
      options: [
        { id: "account", label: "Account in game or social media hacked", tags: ["account"] },
        { id: "money", label: "Money stolen from card or tricked into transferring", tags: ["money"] },
        { id: "data", label: "Personal data stolen (passport, address, photos)", tags: ["data"] }
      ]
    },
    {
      id: "content_type",
      text: "What dangerous content?",
      condition: { threat: ["content"] },
      options: [
        { id: "violence", label: "Violence, cruelty, gore", tags: ["violence"] },
        { id: "suicide", label: "Suicide promotion, depressive groups, 'Blue Whale'", tags: ["suicide"] },
        { id: "drugs", label: "Drugs, spice, psychoactive substances", tags: ["drugs"] },
        { id: "porn", label: "Pornography, erotica (age-inappropriate)", tags: ["porn"] }
      ]
    },
    {
      id: "child_reaction",
      text: "Child's reaction to the situation?",
      type: "single",
      options: [
        { id: "calm", label: "Calm, told themselves and ready to discuss", tags: ["calm"] },
        { id: "shame", label: "Ashamed, withdrawn, afraid of punishment", tags: ["shame"] },
        { id: "aggressive", label: "Aggressive, denies, refuses contact", tags: ["aggressive"] },
        { id: "suicidal", label: "Talks about death, self-harm, hopelessness", tags: ["suicidal"] }
      ]
    },
    {
      id: "parental_control",
      text: "Do you use parental controls or restrictions?",
      type: "single",
      options: [
        { id: "no_control", label: "No, we don't use", tags: ["no_control"] },
        { id: "basic", label: "Basic restrictions (timer, safe search)", tags: ["basic"] },
        { id: "full", label: "Full control with monitoring and filtering", tags: ["full"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Grooming — correspondence without meeting
    // ========================================
    {
      id: "grooming_no_meeting",
      title: "🎭 Grooming: correspondence with a stranger — action plan",
      description: "An adult poses as a peer, builds trust. If no meeting yet — you can break contact and preserve evidence.",
      conditions: { threat: ["grooming"], grooming_details: ["no_meeting"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 hours",
      yield_estimate: "Break contact, preserve evidence",
      tags: ["grooming", "predator", "prevention"],
      steps: [
        "Immediately check ALL correspondence: VK, Telegram, WhatsApp, Discord, game chats. Look for: compliments, secrets, 'only you understand me', requests for photos, video calls, meetings.",
        "Screenshot EVERYTHING: profile, messages, photos, links. Save to cloud and computer.",
        "Do not delete the correspondence — it's the main evidence for police.",
        "Block the person on all platforms. Change your child's passwords.",
        "Enable two-factor authentication on all child accounts.",
        "Talk to the child without judgment: 'You're brave for telling me. Such people deceive children, but we will protect you.'",
        "File a police report about grooming (Article 240.1 of the Criminal Code) — even if no meeting occurred, it's a crime.",
        "Book a psychologist for the child — grooming is traumatic even without a meeting."
      ],
      warnings: [
        "Do not blame the child — groomers are professionals, they know how to manipulate.",
        "Do not delete the correspondence — it's evidence.",
        "Do not try to negotiate with the groomer yourself — it will only encourage them."
      ]
    },
    // ========================================
    // 2. Grooming — meeting scheduled or child went
    // ========================================
    {
      id: "grooming_meeting",
      title: "🚨 Grooming: meeting scheduled or child already left — emergency measures",
      description: "If a meeting with a stranger is planned or has already happened — act immediately.",
      conditions: { threat: ["grooming"], grooming_details: ["meeting_planned"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Child safety, offender arrest",
      tags: ["grooming", "meeting", "emergency"],
      steps: [
        "If the meeting hasn't started yet — do NOT let the child go. Explain that it's dangerous, that you're protecting them.",
        "If the child has already gone to the meeting — call the police (911/112) immediately. Report: online communication, profile, description, meeting place, child's appearance.",
        "Try to reach the child by phone — tell them not to engage, wait for police.",
        "If the meeting has already happened — immediately go to police and trauma center (for examination).",
        "Save all screenshots and correspondence — they will help identify the offender.",
        "Contact a psychologist for emergency help (post-traumatic reaction).",
        "File a police report — Articles 132, 135, 240.1 of the Criminal Code."
      ],
      warnings: [
        "Do not try to search for the child yourself — trust the police.",
        "Do not pressure the child with questions immediately — they need support, not interrogation.",
        "Grooming is a criminal offense, do not let it go."
      ]
    },
    // ========================================
    // 3. Grooming with extortion
    // ========================================
    {
      id: "grooming_extortion",
      title: "💀 Grooming with extortion — protection from blackmail",
      description: "A stranger extorts money, intimate photos or threatens to distribute compromising materials.",
      conditions: { threat: ["grooming"], grooming_details: ["extortion"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Stop blackmail, bring to justice",
      tags: ["grooming", "extortion", "blackmail"],
      steps: [
        "DO NOT PAY! It's a bottomless pit. The blackmailer will demand again and again.",
        "Screenshot all threats and correspondence. Save to cloud.",
        "Block the blackmailer on all platforms.",
        "Report to police: extortion (Article 163 of the Criminal Code) and distribution of intimate materials (Article 242.1).",
        "If materials are already distributed — contact platform support to remove them.",
        "Consult a lawyer to protect the child's rights.",
        "See a psychologist — blackmail causes severe stress and shame."
      ],
      warnings: [
        "Never pay blackmailers — it does not guarantee removal of materials.",
        "Do not delete correspondence — it's needed for police.",
        "Distribution of intimate photos of a minor is a criminal offense."
      ]
    },
    // ========================================
    // 4. Sexting — sending photos upon request
    // ========================================
    {
      id: "sexting_sent",
      title: "🔞 Sexting: child sent intimate photos — how to help",
      description: "The child sent photos under pressure, infatuation, or deception. Your job is to remove shame and protect.",
      conditions: { threat: ["sexting"], sexting_details: ["sent"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Remove materials, restore trust",
      tags: ["sexting", "shame", "support"],
      steps: [
        "Stay calm. Do not yell, do not accuse. Say: 'Thank you for telling me. We'll figure it out together.'",
        "Screenshot the correspondence and the recipient's profile.",
        "If photos haven't been shared yet — ask the recipient to delete. If they refuse — file a police report.",
        "If photos are already circulating — demand removal through platform support and police.",
        "Consult a lawyer for advice on rights protection.",
        "See a psychologist — the child feels shame, fear, guilt.",
        "Explain the digital footprint rule: everything sent stays forever. Never send intimate photos, even to close ones."
      ],
      warnings: [
        "Do not punish or take away the phone — it only worsens isolation.",
        "The child is a victim, even if they 'agreed'. Minors cannot give consent to the distribution of intimate materials.",
        "Distribution of such photos is a criminal offense."
      ]
    },
    // ========================================
    // 5. Sexting — receiving or leaked
    // ========================================
    {
      id: "sexting_received_leaked",
      title: "🔞 Child received intimate materials or they are already leaked",
      description: "If the child came across someone else's intimate photos or their own photos are circulating online.",
      conditions: { threat: ["sexting"], sexting_details: ["received", "leaked"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–24 hours",
      yield_estimate: "Remove materials, prosecute offenders",
      tags: ["sexting", "distribution", "emergency"],
      steps: [
        "Upon receiving — do not save, do not forward, delete. Explain to the child it's illegal.",
        "Save only screenshots of the sender's profile for police.",
        "If your child's photos are already circulated — act fast: screenshots, police report, platform support.",
        "Contact the 'Safe Internet League' — they help remove such material.",
        "See a psychologist — this is a serious trauma.",
        "File a police report under Article 242.1 of the Criminal Code."
      ],
      warnings: [
        "Do not forward such material further — it's a criminal offense.",
        "The child is not to blame for receiving or having their photos circulated.",
        "Remember: even 'voluntary' sending of photos is not consent to distribution."
      ]
    },
    // ========================================
    // 6. Mild gadget addiction
    // ========================================
    {
      id: "addiction_mild",
      title: "📱 Mild gadget addiction — adjusting routine",
      description: "Child spends a lot of time on the phone, but studies and sleep are not yet affected. Time for gentle limits.",
      conditions: { threat: ["addiction"], addiction_severity: ["mild"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 weeks",
      yield_estimate: "Establish healthy boundaries",
      tags: ["addiction", "screen_time", "rules"],
      steps: [
        "Introduce family rules: e.g., 1.5–2 hours of screen time on weekdays, 3 hours on weekends.",
        "Create 'phone-free zones': the dining table, bedroom, during meals.",
        "Set up parental controls (Google Family Link, Screen Time) with soft limits.",
        "Explain why: to protect eyesight, sleep, and grades.",
        "Offer alternatives: sports, board games, walks, shared hobbies.",
        "Lead by example — follow the rules yourself."
      ],
      warnings: [
        "Don't impose strict bans without explanation — they will cause rebellion.",
        "Don't use parental control as surveillance — explain its purpose."
      ]
    },
    // ========================================
    // 7. Moderate gadget addiction
    // ========================================
    {
      id: "addiction_moderate",
      title: "📱 Moderate addiction — arguments, skipping lessons",
      description: "Child already fights about the phone, neglects studies, disrupts sleep. Need clear boundaries and conversation.",
      conditions: { threat: ["addiction"], addiction_severity: ["moderate"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–3 months",
      yield_estimate: "Restore balance",
      tags: ["addiction", "conflict", "rules"],
      steps: [
        "Sit down and calmly discuss: 'I see you spend a lot of time on your phone. Let's make rules together so you're happy and we don't argue.'",
        "Set clear timings: e.g., 1 hour after school, 30 minutes before bed. On weekends — 2 hours.",
        "Take the phone away 1 hour before bedtime (keep in another room) — improves sleep quality.",
        "Let the child choose an alternative: club, sports, friends' meetups.",
        "If conflicts continue — see a family psychologist.",
        "Check if there are problems at school (bullying, poor performance) that the child is compensating with gaming."
      ],
      warnings: [
        "Do not punish by taking the phone for a month — it will ruin trust.",
        "Be consistent: if rules are set, follow them yourself."
      ]
    },
    // ========================================
    // 8. Severe addiction (tantrums, threats, aggression)
    // ========================================
    {
      id: "addiction_severe",
      title: "⚠️ Severe gaming/social media addiction — professional help needed",
      description: "Child throws tantrums, makes threats, secretly uses at night. This is a behavioral disorder, professional help is needed.",
      conditions: { threat: ["addiction"], addiction_severity: ["severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 months",
      yield_estimate: "Treat addiction and recover",
      tags: ["addiction", "severe", "therapy"],
      steps: [
        "Do not engage in conflict. If child is having a tantrum — let them cool down, leave the room.",
        "See a child psychologist or psychotherapist specializing in internet addiction.",
        "Consider treatment at a rehabilitation center (e.g., addiction centers).",
        "Check if the child is suffering from depression, anxiety, ADHD — often accompanying addiction.",
        "If the child threatens self-harm — call emergency services (911/112) or a crisis hotline.",
        "Work with a family therapist — addiction is often linked to family issues.",
        "Gradually replace virtual communication with real, but very gently."
      ],
      warnings: [
        "Gaming disorder (IGD) is recognized by WHO — it's not 'laziness', it's a diagnosis.",
        "Do not try to 're-educate' alone — you need a specialist.",
        "If suicide threats occur — call emergency services immediately."
      ]
    },
    // ========================================
    // 9. Fraud — account hack
    // ========================================
    {
      id: "scam_account",
      title: "🔐 Account hacked — recovery and protection",
      description: "Child's account was hacked, scammers send spam or extort money.",
      conditions: { threat: ["scam"], scam_details: ["account"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–2 days",
      yield_estimate: "Recover account and strengthen security",
      tags: ["scam", "account", "recovery"],
      steps: [
        "Use the 'Forgot password?' function — recover access via email or phone.",
        "Change password to a new, strong one (combination of letters, digits, symbols).",
        "Enable two-factor authentication (via phone or authenticator app).",
        "Check if any unknown devices are linked to the account — remove them.",
        "Inform friends and followers that the account was hacked so they don't click on suspicious links.",
        "If scammers demanded a ransom — do not pay, contact police.",
        "Install antivirus on the device, check for malware."
      ],
      warnings: [
        "Do not use simple passwords (birth date, name).",
        "Two-factor authentication is mandatory.",
        "If the account was used for financial transactions — contact your bank."
      ]
    },
    // ========================================
    // 10. Fraud — money theft
    // ========================================
    {
      id: "scam_money",
      title: "💰 Card or transfer fraud — recovering funds",
      description: "Child was tricked into transferring money or entering card details on a phishing site.",
      conditions: { threat: ["scam"], scam_details: ["money"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Refund, card block",
      tags: ["scam", "money", "bank"],
      steps: [
        "Immediately block the card in the bank's mobile app or call the hotline.",
        "File a fraud report with the bank — they are obliged to investigate and refund (if the transaction is disputed).",
        "Save all screenshots of correspondence, links, pages where money was sent.",
        "File a police report about fraud (Article 159 of the Criminal Code).",
        "Explain to the child: never enter card details on unknown sites, never send money to strangers.",
        "Check for any other unauthorized charges."
      ],
      warnings: [
        "Do not delay blocking the card — scammers can drain all funds.",
        "If transferred via cryptocurrency — chances of refund are extremely low.",
        "The bank is obligated to refund if you report theft within 24 hours."
      ]
    },
    // ========================================
    // 11. Fraud — identity theft
    // ========================================
    {
      id: "scam_data",
      title: "📁 Personal data leak — what to do",
      description: "Scammers obtained passport details, address, photos of the child — could be used for fraud.",
      conditions: { threat: ["scam"], scam_details: ["data"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Minimize risks",
      tags: ["scam", "data", "identity"],
      steps: [
        "If passport data was stolen — file a police report about theft.",
        "Notify banks if cards are linked — change security questions and passwords.",
        "Contact credit bureaus to place a ban on loans without personal presence.",
        "Check the child's accounts for unauthorized logins.",
        "Explain to the child: never share personal data online, even if 'support' asks."
      ],
      warnings: [
        "Stolen personal data can be used for years — stay vigilant.",
        "Regularly check credit history."
      ]
    },
    // ========================================
    // 12. Dangerous content — violence or pornography
    // ========================================
    {
      id: "content_violence_porn",
      title: "🛑 Dangerous content (violence, porn) — what to do",
      description: "Child accidentally or deliberately watches violent or pornographic material.",
      conditions: { threat: ["content"], content_type: ["violence", "porn"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Stop viewing and correct behavior",
      tags: ["content", "violence", "porn", "parenting"],
      steps: [
        "Talk calmly: 'I noticed you watched this. What interested you?' — without judgment.",
        "Explain it's not real: violence doesn't solve problems, porn is acting, not real relationships.",
        "Set up parental controls: YouTube Restricted Mode, Google SafeSearch, router filters.",
        "If child is curious — satisfy curiosity with age-appropriate literature about puberty.",
        "If viewing causes anxiety or aggression — see a psychologist."
      ],
      warnings: [
        "Do not shame the child for watching porn — it's normal curiosity in adolescence.",
        "Do not ignore — explain the difference between real relationships and porn."
      ]
    },
    // ========================================
    // 13. Dangerous content — suicide / depression
    // ========================================
    {
      id: "content_suicide",
      title: "🚨 Seeking suicide information — emergency measures",
      description: "Child is searching for suicide information, in depressive groups, talks about hopelessness.",
      conditions: { threat: ["content"], content_type: ["suicide"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Save life, get professional help",
      tags: ["content", "suicide", "emergency"],
      steps: [
        "DO NOT IGNORE! This is a cry for help.",
        "Talk calmly: 'I see you're looking for this. I need to know what you're feeling. You're not alone, we'll get through it.'",
        "Immediately see a psychologist or psychotherapist specializing in suicidal behavior.",
        "Call a helpline: 8-800-2000-122 (24/7, anonymous — Russia).",
        "If child threatens suicide — call emergency services (911/112) and police.",
        "Remove all dangerous objects (medications, weapons, ropes).",
        "Report destructive groups to police (Article 110.1 of the Criminal Code) and Roskomnadzor for blocking.",
        "Do not leave the child alone until help arrives."
      ],
      warnings: [
        "Do not say 'this is silly' or 'don't make up stories' — it devalues their feelings.",
        "Suicidal thoughts are a symptom, not a character trait. Treatable.",
        "Never leave the child alone with such signals."
      ]
    },
    // ========================================
    // 14. Dangerous content — drugs
    // ========================================
    {
      id: "content_drugs",
      title: "💊 Drug propaganda — what to do",
      description: "Child watches drug-related content, asks about drugs, may have already tried.",
      conditions: { threat: ["content"], content_type: ["drugs"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Prevent substance use",
      tags: ["content", "drugs", "prevention"],
      steps: [
        "Talk honestly, without accusations. Ask: 'What do you know about drugs? What interests you?'",
        "Give facts: health consequences, mental effects, addiction, life destruction.",
        "If there's suspicion that the child has already tried — anonymously consult a narcologist.",
        "Set up search filters (Google SafeSearch, DNS filters).",
        "Report drug-promoting groups to police and Roskomnadzor.",
        "Fill the child's time with useful activities to reduce risk."
      ],
      warnings: [
        "Do not frighten — it will push them away. Provide reliable information instead.",
        "Early contact with a narcologist can prevent addiction."
      ]
    },
    // ========================================
    // 15. Cyberbullying
    // ========================================
    {
      id: "cyberbullying",
      title: "💬 Cyberbullying — insults, threats, online harassment",
      description: "Child receives insults, threats, is excluded from chats, rumors spread.",
      conditions: { threat: ["cyberbullying"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Stop harassment, protect child",
      tags: ["cyberbullying", "harassment", "support"],
      steps: [
        "Screenshot all insults and threats.",
        "Block offenders on all platforms.",
        "Inform the school or class teacher if offenders are classmates.",
        "Contact platform support to remove offensive content.",
        "Talk to the child: it's not their fault, offenders are weak people.",
        "See a psychologist to restore self-esteem.",
        "If threats of physical harm — contact police."
      ],
      warnings: [
        "Do not advise the child to 'ignore it' — it doesn't work with systemic harassment.",
        "Do not respond to offenders — it only encourages them."
      ]
    },
    // ========================================
    // 16. Data leak / hack — general algorithm
    // ========================================
    {
      id: "leak_response",
      title: "🔒 Data leak or account hack — protection",
      description: "The child's personal data fell into the wrong hands or account was hacked.",
      conditions: { threat: ["leak"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Restore security",
      tags: ["leak", "data", "hacking"],
      steps: [
        "Change passwords on all child accounts, using strong passwords.",
        "Enable two-factor authentication.",
        "Check for unauthorized access to financial operations.",
        "Contact platform support to regain control of the account.",
        "Scan the device for viruses and keyloggers.",
        "Explain to the child the importance of security: don't reuse passwords, don't click suspicious links."
      ],
      warnings: [
        "Do not store passwords in plain text.",
        "Regularly check account activity."
      ]
    }
  ]
};

// ===== EXPORT =====
window.internetDataEn = internetDataEn;
>>>>>>> 97084fd (fix(engine): исправлен маппинг dtp для юриста, добавлен раздел ети)
