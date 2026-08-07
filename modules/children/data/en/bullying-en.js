<<<<<<< HEAD
// === MODULE: BULLYING (ENGLISH) ===
const bullyingDataEn = {
  category: "bullying",
  title: "💔 Bullying and Harassment",
  description: "Physical violence, insults, cyberbullying, social exclusion — how to protect your child",

  questions: [
    {
      id: "bully_type",
      text: "What type of bullying are you dealing with? Choose the main one.",
      type: "single",
      options: [
        { id: "physical", label: "Physical violence (pushing, hitting, taking belongings)", tags: ["physical", "violence"] },
        { id: "verbal", label: "Words, insults, threats, blackmail", tags: ["verbal", "threats"] },
        { id: "cyber", label: "Cyberbullying (social media, messengers, games)", tags: ["cyber", "online"] },
        { id: "social", label: "Social bullying (exclusion, gossip, boycott)", tags: ["social", "exclusion"] },
        { id: "sexual", label: "Sexual harassment / inappropriate comments", tags: ["sexual", "abuse"] }
      ]
    },
    {
      id: "role",
      text: "What is your child's role in this situation?",
      type: "single",
      options: [
        { id: "victim", label: "My child is the victim", tags: ["victim"] },
        { id: "witness", label: "My child is a witness (saw or heard about the bullying)", tags: ["witness"] },
        { id: "aggressor", label: "My child is the aggressor / bullies others", tags: ["aggressor"] }
      ]
    },
    {
      id: "duration",
      text: "How long has this been going on?",
      type: "single",
      options: [
        { id: "once", label: "One time / first case", tags: ["short"] },
        { id: "weeks", label: "Several weeks", tags: ["medium"] },
        { id: "months", label: "Several months or more", tags: ["long"] }
      ]
    },
    {
      id: "location",
      text: "Where does the bullying take place?",
      type: "single",
      options: [
        { id: "school", label: "At school / during lessons", tags: ["school"] },
        { id: "street", label: "On the street / in the yard", tags: ["street"] },
        { id: "online", label: "Online (social media, games)", tags: ["online"] },
        { id: "club", label: "At a club / hobby group / camp", tags: ["club"] }
      ]
    },
    {
      id: "known_aggressor",
      text: "Are the aggressors known (who exactly is bullying)?",
      type: "single",
      options: [
        { id: "known", label: "Yes, I know names / faces", tags: ["known"] },
        { id: "partial", label: "Partially known", tags: ["partial"] },
        { id: "unknown", label: "No, anonymous / unknown", tags: ["unknown"] }
      ]
    },
    {
      id: "cyber_platform",
      text: "If cyberbullying — on which platform?",
      condition: { bully_type: ["cyber"] },
      options: [
        { id: "social_network", label: "Social networks (VK, Instagram, TikTok)", tags: ["social_network"] },
        { id: "messenger", label: "Messengers (Telegram, WhatsApp)", tags: ["messenger"] },
        { id: "games", label: "Gaming platforms (Discord, Roblox, Minecraft)", tags: ["games"] }
      ]
    },
    {
      id: "threats",
      text: "Are there threats to life, health, or distribution of intimate photos?",
      type: "single",
      options: [
        { id: "no_threats", label: "No, just insults / exclusion", tags: ["low_risk"] },
        { id: "threats", label: "Threats of physical harm", tags: ["high_risk"] },
        { id: "intimate_photos", label: "Distribution of intimate photos / videos", tags: ["intimate"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Physical violence — one-time or short-term
    // ========================================
    {
      id: "physical_once",
      title: "🥊 Physical violence — quick reaction (first case)",
      description: "If your child was hit, pushed, or had belongings taken for the first time — act immediately to prevent recurrence.",
      conditions: { bully_type: ["physical"], duration: ["once"], role: ["victim"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Stop violence and alert the school",
      tags: ["physical", "first_time", "school"],
      steps: [
        "Talk to your child calmly, note all details: date, time, place, who did what, witnesses.",
        "Photograph injuries (bruises, scratches, torn clothing). Save photos.",
        "Contact the class teacher: write a formal request to take action. Ask for a written response.",
        "Request a meeting with the aggressor's parents (with the school psychologist present).",
        "Teach your child: shout 'Don't touch me!', run to a crowded place, call you immediately.",
        "If the school does not respond — file a police report (Article 116 of the Criminal Code — battery)."
      ],
      warnings: [
        "Do not tell your child 'handle it yourself' — he already couldn't, and it will worsen the trauma.",
        "Do not go to the aggressor alone — it could escalate into a conflict with legal consequences for you.",
        "Do not ignore even 'minor' pushes — repetition turns into systemic bullying."
      ]
    },
    // ========================================
    // 2. Physical violence — chronic (long-term)
    // ========================================
    {
      id: "physical_long",
      title: "🥊 Systematic physical violence — urgent measures",
      description: "If bullying lasts weeks or months, it is already a criminal offense. Act decisively.",
      conditions: { bully_type: ["physical"], duration: ["weeks", "months"], role: ["victim"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Police involvement and transfer to another school",
      tags: ["physical", "chronic", "police"],
      steps: [
        "Gather all evidence: photos of injuries, screenshots of threatening messages, witness statements (ask classmates to write them down).",
        "See a doctor for a medical certificate of injuries (even if no visible marks — describe pain).",
        "File a written police report (Articles 115, 116 of the Criminal Code). Attach all evidence.",
        "Simultaneously file a complaint with the prosecutor's office about the school's inaction (if the school ignored the situation).",
        "Demand immediate transfer of the aggressor to another class or school (schools are required to separate conflicting students).",
        "Consider transferring your child to another school or homeschooling — if the school fails, safety comes first.",
        "Enroll your child in a psychologist and a martial arts class (for confidence and self-control).",
        "File a lawsuit for moral damages (Article 151 of the Civil Code) — this will force the aggressor and their parents to take responsibility."
      ],
      warnings: [
        "Do not delay contacting the police — each new incident worsens the psychological impact on your child.",
        "Do not agree to 'reconciliation' meetings without an official record — they are often used to stall.",
        "If the school refuses to provide written responses — file a complaint with the Department of Education.",
        "Systematic physical violence is not 'kids being kids' — it is a crime."
      ]
    },
    // ========================================
    // 3. Cyberbullying — without threats (insults, mockery)
    // ========================================
    {
      id: "cyber_no_threats",
      title: "📲 Cyberbullying — insults and mockery online",
      description: "Public insults, fake accounts, harassment in comments. Painful, but without threats to life.",
      conditions: { bully_type: ["cyber"], role: ["victim"], threats: ["no_threats"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Remove content and block aggressors",
      tags: ["cyber", "harassment", "online"],
      steps: [
        "Take screenshots of all abusive messages, comments, and posts. Save to cloud and computer.",
        "Block aggressors on all platforms. Set social media to 'friends only' mode.",
        "Report to platform support (VK, Instagram, TikTok, YouTube) — demand content removal, noting that the child is a minor.",
        "If aggressors are from school — inform the class teacher and psychologist, they can hold a discussion.",
        "Talk to your child: it's not their fault, aggressors hide behind screens. Offer a temporary break from social media, replaced by hobbies.",
        "See a psychologist if your child becomes withdrawn or anxious.",
        "If insults are systematic — file a police report (Article 128.1 of the Criminal Code — slander)."
      ],
      warnings: [
        "Do not take away the phone permanently — it isolates the child from friends and support.",
        "Do not respond to aggressors in the same manner — it fuels the conflict.",
        "If aggressors create fake profiles in your child's name — demand blocking through support."
      ]
    },
    // ========================================
    // 4. Cyberbullying with threats or intimate photos
    // ========================================
    {
      id: "cyber_threats_intimate",
      title: "🚨 Cyberbullying with threats or intimate photos — contact police immediately",
      description: "Threats of physical harm or distribution of intimate material is a criminal offense.",
      conditions: { bully_type: ["cyber"], role: ["victim"], threats: ["threats", "intimate_photos"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Criminal prosecution and content removal",
      tags: ["cyber", "threats", "intimate", "police"],
      steps: [
        "Screenshot all threats and intimate material — save in multiple locations (cloud, computer).",
        "Contact the police with a report under Article 119 (threats) or Article 242.1 (distribution of pornographic material involving minors).",
        "Simultaneously submit a complaint to the prosecutor's office and Roskomnadzor for content blocking.",
        "Inform the school (if the aggressor is a classmate) — the school must intervene and carry out preventive work.",
        "Book a psychologist for your child — such situations can cause PTSD and suicidal thoughts.",
        "Do not delete the correspondence — it is crucial evidence.",
        "If intimate photos have already been published — contact the 'Safe Internet League' (they help remove such material)."
      ],
      warnings: [
        "Never delete the correspondence — it is the main evidence.",
        "Do not try to resolve it yourself (buying back photos, threatening in return) — it worsens criminal liability.",
        "If your child mentions suicide — call 8-800-2000-122 (Russian helpline, free, anonymous)."
      ]
    },
    // ========================================
    // 5. Verbal bullying (insults, name-calling)
    // ========================================
    {
      id: "verbal_bullying",
      title: "💬 Insults, name-calling, verbal bullying",
      description: "Words hurt more than blows. Verbal bullying undermines self-esteem and leads to depression.",
      conditions: { bully_type: ["verbal"], role: ["victim"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–4 weeks",
      yield_estimate: "Stop bullying and restore self-esteem",
      tags: ["verbal", "insults", "psychology"],
      steps: [
        "Talk to your child: what is said, how often, who says it. Note names and phrases.",
        "Explain to your child: insults are the aggressor's problem, not theirs. The aggressor is trying to feel powerful.",
        "Ask the class teacher to hold a class on tolerance (without naming names).",
        "Teach your child techniques: calmly say 'I don't accept that,' turn and walk away.",
        "If insults continue — demand individual counselling sessions with the psychologist for the aggressors.",
        "Enroll your child in an interest group — a new social environment boosts confidence.",
        "See a psychologist if your child becomes withdrawn, tearful, or loses interest in school."
      ],
      warnings: [
        "Do not say 'just ignore it' — for a child, classmates' words carry enormous weight.",
        "Do not force your child to 'be friends' with the bullies — that is their personal choice.",
        "If the school does nothing — file a complaint with the Department of Education."
      ]
    },
    // ========================================
    // 6. Social bullying (exclusion, boycott, gossip)
    // ========================================
    {
      id: "social_exclusion",
      title: "👥 Social bullying — exclusion and boycott",
      description: "Your child is not invited to birthdays, not spoken to, gossip is spread. One of the most painful forms.",
      conditions: { bully_type: ["social"], role: ["victim"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 months",
      yield_estimate: "Rebuild social connections",
      tags: ["social", "exclusion", "psychology"],
      steps: [
        "Find out the reasons: bullying often starts because of appearance, behaviour, or interests. Help your child accept their uniqueness.",
        "Talk to the class teacher about changing seating, group work to break cliques.",
        "Organise extracurricular activities with classmates (hike, tea party) in a neutral setting.",
        "Find an external environment for your child (sports, music, IT club) — there they will find real friends.",
        "Consult the school psychologist for class cohesion work.",
        "If the situation does not improve — transfer your child to another school (a change of environment often changes the dynamics drastically).",
        "Work on your child's self-esteem: sign them up for communication training, drama club."
      ],
      warnings: [
        "Do not isolate your child from society — it worsens the problem.",
        "Do not discuss the situation in front of your child with other parents — it may increase feelings of shame.",
        "If your child says they 'hate school' and ask to transfer — listen, it's a cry for help."
      ]
    },
    // ========================================
    // 7. Sexual harassment
    // ========================================
    {
      id: "sexual_harassment",
      title: "⚠️ Sexual harassment — protection and action plan",
      description: "Inappropriate advances, comments, touching, exposure of intimate body parts. This is a criminal offense.",
      conditions: { bully_type: ["sexual"], role: ["victim"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Criminal prosecution and child protection",
      tags: ["sexual", "abuse", "police"],
      steps: [
        "Talk to your child as delicately as possible: ask what exactly happened, who, when, where. Write it down verbatim.",
        "Explain to your child: it is not their fault, only the perpetrator is to blame. They did the right thing by telling you.",
        "Gather evidence: if there is correspondence — screenshots, if physical contact — there may be traces.",
        "File a police report under Article 132 of the Criminal Code (sexual assault).",
        "If the harassment occurred at school — inform the principal, demand the suspension of the teacher or student from classes.",
        "Book a psychologist specialising in trauma for your child — this is critical for recovery.",
        "If the aggressor is a teacher — additionally contact the prosecutor's office and the Department of Education.",
        "Consider transferring your child to another school to remove triggers."
      ],
      warnings: [
        "Never blame the child for 'provoking' it — this deepens trauma and destroys trust.",
        "Do not delay contacting the police — it is important to document the facts as soon as possible.",
        "If your child is afraid to speak — use art therapy, play to obtain information.",
        "Child helpline (Russia): 8-800-2000-122 (24/7, anonymous)."
      ]
    },
    // ========================================
    // 8. Child is the aggressor (bullies others)
    // ========================================
    {
      id: "child_aggressor",
      title: "⚠️ My child bullies others — what to do",
      description: "Aggression is always a symptom. Help your child, do not just punish.",
      conditions: { role: ["aggressor"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–6 months",
      yield_estimate: "Stop aggressive behaviour and help the child",
      tags: ["aggressor", "psychology", "family"],
      steps: [
        "Acknowledge the problem: do not deny or blindly defend your child. Gather facts from teachers and other parents.",
        "Talk to your child calmly, without shouting. Ask: 'What do you feel when you bully?' Aggression often masks fear, insecurity, or domestic violence.",
        "Consult a child psychologist or family therapist — the root cause must be found.",
        "Set clear boundaries: 'Bullying others is unacceptable. There will be consequences: loss of gadgets, pocket money.'",
        "Check the family atmosphere: is there violence, screaming, humiliation at home? Children copy behavioural models.",
        "Ask your child to apologise to the victim (if they are ready), but do not force it — a public apology may be humiliating.",
        "Work with teachers: have them monitor the child, reinforce positive behaviour.",
        "If aggression is physical and serious — prepare for a conversation with the KDN (commission for minors).",
        "Involve your child in sports with discipline and respect for opponents (wrestling, boxing, team sports)."
      ],
      warnings: [
        "Do not hit your child for aggression — violence breeds violence.",
        "Do not deny the problem with phrases like 'my child wouldn't' — it only worsens the behaviour.",
        "Do not transfer to another school without addressing the behaviour — aggression will continue in the new place.",
        "If aggression has become normalised — psychiatric help may be needed (do not be afraid of that)."
      ]
    },
    // ========================================
    // 9. Child is a witness to bullying
    // ========================================
    {
      id: "witness_bullying",
      title: "👀 My child witnessed bullying — how to help",
      description: "Witnesses often experience fear and guilt. Support them and teach them how to respond.",
      conditions: { role: ["witness"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–2 weeks",
      yield_estimate: "Emotional support and active stance",
      tags: ["witness", "psychology", "support"],
      steps: [
        "Talk to your child: what did they see, how did they feel, are they afraid of becoming a victim themselves?",
        "Explain that they are not to blame for what happened, but they can help.",
        "Teach your child to react: call an adult, say 'Stop!' to the aggressor, support the victim with kind words.",
        "If your child is scared — suggest reporting anonymously to the teacher (write a note).",
        "Talk to the class teacher about the need for a preventive class discussion.",
        "Support your child: tell them they did the right thing by telling you.",
        "If the witness is traumatised — consult a psychologist."
      ],
      warnings: [
        "Do not force your child to 'physically intervene' — it may be dangerous.",
        "Do not dismiss their feelings: 'it's not your business' — this discourages helping others.",
        "Explain that staying silent about bullying means being complicit."
      ]
    }
  ]
};

// ===== EXPORT =====
window.bullyingDataEn = bullyingDataEn;
=======
// === MODULE: BULLYING (ENGLISH) ===
const bullyingDataEn = {
  category: "bullying",
  title: "💔 Bullying and Harassment",
  description: "Physical violence, insults, cyberbullying, social exclusion — how to protect your child",

  questions: [
    {
      id: "bully_type",
      text: "What type of bullying are you dealing with? Choose the main one.",
      type: "single",
      options: [
        { id: "physical", label: "Physical violence (pushing, hitting, taking belongings)", tags: ["physical", "violence"] },
        { id: "verbal", label: "Words, insults, threats, blackmail", tags: ["verbal", "threats"] },
        { id: "cyber", label: "Cyberbullying (social media, messengers, games)", tags: ["cyber", "online"] },
        { id: "social", label: "Social bullying (exclusion, gossip, boycott)", tags: ["social", "exclusion"] },
        { id: "sexual", label: "Sexual harassment / inappropriate comments", tags: ["sexual", "abuse"] }
      ]
    },
    {
      id: "role",
      text: "What is your child's role in this situation?",
      type: "single",
      options: [
        { id: "victim", label: "My child is the victim", tags: ["victim"] },
        { id: "witness", label: "My child is a witness (saw or heard about the bullying)", tags: ["witness"] },
        { id: "aggressor", label: "My child is the aggressor / bullies others", tags: ["aggressor"] }
      ]
    },
    {
      id: "duration",
      text: "How long has this been going on?",
      type: "single",
      options: [
        { id: "once", label: "One time / first case", tags: ["short"] },
        { id: "weeks", label: "Several weeks", tags: ["medium"] },
        { id: "months", label: "Several months or more", tags: ["long"] }
      ]
    },
    {
      id: "location",
      text: "Where does the bullying take place?",
      type: "single",
      options: [
        { id: "school", label: "At school / during lessons", tags: ["school"] },
        { id: "street", label: "On the street / in the yard", tags: ["street"] },
        { id: "online", label: "Online (social media, games)", tags: ["online"] },
        { id: "club", label: "At a club / hobby group / camp", tags: ["club"] }
      ]
    },
    {
      id: "known_aggressor",
      text: "Are the aggressors known (who exactly is bullying)?",
      type: "single",
      options: [
        { id: "known", label: "Yes, I know names / faces", tags: ["known"] },
        { id: "partial", label: "Partially known", tags: ["partial"] },
        { id: "unknown", label: "No, anonymous / unknown", tags: ["unknown"] }
      ]
    },
    {
      id: "cyber_platform",
      text: "If cyberbullying — on which platform?",
      condition: { bully_type: ["cyber"] },
      options: [
        { id: "social_network", label: "Social networks (VK, Instagram, TikTok)", tags: ["social_network"] },
        { id: "messenger", label: "Messengers (Telegram, WhatsApp)", tags: ["messenger"] },
        { id: "games", label: "Gaming platforms (Discord, Roblox, Minecraft)", tags: ["games"] }
      ]
    },
    {
      id: "threats",
      text: "Are there threats to life, health, or distribution of intimate photos?",
      type: "single",
      options: [
        { id: "no_threats", label: "No, just insults / exclusion", tags: ["low_risk"] },
        { id: "threats", label: "Threats of physical harm", tags: ["high_risk"] },
        { id: "intimate_photos", label: "Distribution of intimate photos / videos", tags: ["intimate"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Physical violence — one-time or short-term
    // ========================================
    {
      id: "physical_once",
      title: "🥊 Physical violence — quick reaction (first case)",
      description: "If your child was hit, pushed, or had belongings taken for the first time — act immediately to prevent recurrence.",
      conditions: { bully_type: ["physical"], duration: ["once"], role: ["victim"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Stop violence and alert the school",
      tags: ["physical", "first_time", "school"],
      steps: [
        "Talk to your child calmly, note all details: date, time, place, who did what, witnesses.",
        "Photograph injuries (bruises, scratches, torn clothing). Save photos.",
        "Contact the class teacher: write a formal request to take action. Ask for a written response.",
        "Request a meeting with the aggressor's parents (with the school psychologist present).",
        "Teach your child: shout 'Don't touch me!', run to a crowded place, call you immediately.",
        "If the school does not respond — file a police report (Article 116 of the Criminal Code — battery)."
      ],
      warnings: [
        "Do not tell your child 'handle it yourself' — he already couldn't, and it will worsen the trauma.",
        "Do not go to the aggressor alone — it could escalate into a conflict with legal consequences for you.",
        "Do not ignore even 'minor' pushes — repetition turns into systemic bullying."
      ]
    },
    // ========================================
    // 2. Physical violence — chronic (long-term)
    // ========================================
    {
      id: "physical_long",
      title: "🥊 Systematic physical violence — urgent measures",
      description: "If bullying lasts weeks or months, it is already a criminal offense. Act decisively.",
      conditions: { bully_type: ["physical"], duration: ["weeks", "months"], role: ["victim"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Police involvement and transfer to another school",
      tags: ["physical", "chronic", "police"],
      steps: [
        "Gather all evidence: photos of injuries, screenshots of threatening messages, witness statements (ask classmates to write them down).",
        "See a doctor for a medical certificate of injuries (even if no visible marks — describe pain).",
        "File a written police report (Articles 115, 116 of the Criminal Code). Attach all evidence.",
        "Simultaneously file a complaint with the prosecutor's office about the school's inaction (if the school ignored the situation).",
        "Demand immediate transfer of the aggressor to another class or school (schools are required to separate conflicting students).",
        "Consider transferring your child to another school or homeschooling — if the school fails, safety comes first.",
        "Enroll your child in a psychologist and a martial arts class (for confidence and self-control).",
        "File a lawsuit for moral damages (Article 151 of the Civil Code) — this will force the aggressor and their parents to take responsibility."
      ],
      warnings: [
        "Do not delay contacting the police — each new incident worsens the psychological impact on your child.",
        "Do not agree to 'reconciliation' meetings without an official record — they are often used to stall.",
        "If the school refuses to provide written responses — file a complaint with the Department of Education.",
        "Systematic physical violence is not 'kids being kids' — it is a crime."
      ]
    },
    // ========================================
    // 3. Cyberbullying — without threats (insults, mockery)
    // ========================================
    {
      id: "cyber_no_threats",
      title: "📲 Cyberbullying — insults and mockery online",
      description: "Public insults, fake accounts, harassment in comments. Painful, but without threats to life.",
      conditions: { bully_type: ["cyber"], role: ["victim"], threats: ["no_threats"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Remove content and block aggressors",
      tags: ["cyber", "harassment", "online"],
      steps: [
        "Take screenshots of all abusive messages, comments, and posts. Save to cloud and computer.",
        "Block aggressors on all platforms. Set social media to 'friends only' mode.",
        "Report to platform support (VK, Instagram, TikTok, YouTube) — demand content removal, noting that the child is a minor.",
        "If aggressors are from school — inform the class teacher and psychologist, they can hold a discussion.",
        "Talk to your child: it's not their fault, aggressors hide behind screens. Offer a temporary break from social media, replaced by hobbies.",
        "See a psychologist if your child becomes withdrawn or anxious.",
        "If insults are systematic — file a police report (Article 128.1 of the Criminal Code — slander)."
      ],
      warnings: [
        "Do not take away the phone permanently — it isolates the child from friends and support.",
        "Do not respond to aggressors in the same manner — it fuels the conflict.",
        "If aggressors create fake profiles in your child's name — demand blocking through support."
      ]
    },
    // ========================================
    // 4. Cyberbullying with threats or intimate photos
    // ========================================
    {
      id: "cyber_threats_intimate",
      title: "🚨 Cyberbullying with threats or intimate photos — contact police immediately",
      description: "Threats of physical harm or distribution of intimate material is a criminal offense.",
      conditions: { bully_type: ["cyber"], role: ["victim"], threats: ["threats", "intimate_photos"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Criminal prosecution and content removal",
      tags: ["cyber", "threats", "intimate", "police"],
      steps: [
        "Screenshot all threats and intimate material — save in multiple locations (cloud, computer).",
        "Contact the police with a report under Article 119 (threats) or Article 242.1 (distribution of pornographic material involving minors).",
        "Simultaneously submit a complaint to the prosecutor's office and Roskomnadzor for content blocking.",
        "Inform the school (if the aggressor is a classmate) — the school must intervene and carry out preventive work.",
        "Book a psychologist for your child — such situations can cause PTSD and suicidal thoughts.",
        "Do not delete the correspondence — it is crucial evidence.",
        "If intimate photos have already been published — contact the 'Safe Internet League' (they help remove such material)."
      ],
      warnings: [
        "Never delete the correspondence — it is the main evidence.",
        "Do not try to resolve it yourself (buying back photos, threatening in return) — it worsens criminal liability.",
        "If your child mentions suicide — call 8-800-2000-122 (Russian helpline, free, anonymous)."
      ]
    },
    // ========================================
    // 5. Verbal bullying (insults, name-calling)
    // ========================================
    {
      id: "verbal_bullying",
      title: "💬 Insults, name-calling, verbal bullying",
      description: "Words hurt more than blows. Verbal bullying undermines self-esteem and leads to depression.",
      conditions: { bully_type: ["verbal"], role: ["victim"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–4 weeks",
      yield_estimate: "Stop bullying and restore self-esteem",
      tags: ["verbal", "insults", "psychology"],
      steps: [
        "Talk to your child: what is said, how often, who says it. Note names and phrases.",
        "Explain to your child: insults are the aggressor's problem, not theirs. The aggressor is trying to feel powerful.",
        "Ask the class teacher to hold a class on tolerance (without naming names).",
        "Teach your child techniques: calmly say 'I don't accept that,' turn and walk away.",
        "If insults continue — demand individual counselling sessions with the psychologist for the aggressors.",
        "Enroll your child in an interest group — a new social environment boosts confidence.",
        "See a psychologist if your child becomes withdrawn, tearful, or loses interest in school."
      ],
      warnings: [
        "Do not say 'just ignore it' — for a child, classmates' words carry enormous weight.",
        "Do not force your child to 'be friends' with the bullies — that is their personal choice.",
        "If the school does nothing — file a complaint with the Department of Education."
      ]
    },
    // ========================================
    // 6. Social bullying (exclusion, boycott, gossip)
    // ========================================
    {
      id: "social_exclusion",
      title: "👥 Social bullying — exclusion and boycott",
      description: "Your child is not invited to birthdays, not spoken to, gossip is spread. One of the most painful forms.",
      conditions: { bully_type: ["social"], role: ["victim"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–2 months",
      yield_estimate: "Rebuild social connections",
      tags: ["social", "exclusion", "psychology"],
      steps: [
        "Find out the reasons: bullying often starts because of appearance, behaviour, or interests. Help your child accept their uniqueness.",
        "Talk to the class teacher about changing seating, group work to break cliques.",
        "Organise extracurricular activities with classmates (hike, tea party) in a neutral setting.",
        "Find an external environment for your child (sports, music, IT club) — there they will find real friends.",
        "Consult the school psychologist for class cohesion work.",
        "If the situation does not improve — transfer your child to another school (a change of environment often changes the dynamics drastically).",
        "Work on your child's self-esteem: sign them up for communication training, drama club."
      ],
      warnings: [
        "Do not isolate your child from society — it worsens the problem.",
        "Do not discuss the situation in front of your child with other parents — it may increase feelings of shame.",
        "If your child says they 'hate school' and ask to transfer — listen, it's a cry for help."
      ]
    },
    // ========================================
    // 7. Sexual harassment
    // ========================================
    {
      id: "sexual_harassment",
      title: "⚠️ Sexual harassment — protection and action plan",
      description: "Inappropriate advances, comments, touching, exposure of intimate body parts. This is a criminal offense.",
      conditions: { bully_type: ["sexual"], role: ["victim"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Criminal prosecution and child protection",
      tags: ["sexual", "abuse", "police"],
      steps: [
        "Talk to your child as delicately as possible: ask what exactly happened, who, when, where. Write it down verbatim.",
        "Explain to your child: it is not their fault, only the perpetrator is to blame. They did the right thing by telling you.",
        "Gather evidence: if there is correspondence — screenshots, if physical contact — there may be traces.",
        "File a police report under Article 132 of the Criminal Code (sexual assault).",
        "If the harassment occurred at school — inform the principal, demand the suspension of the teacher or student from classes.",
        "Book a psychologist specialising in trauma for your child — this is critical for recovery.",
        "If the aggressor is a teacher — additionally contact the prosecutor's office and the Department of Education.",
        "Consider transferring your child to another school to remove triggers."
      ],
      warnings: [
        "Never blame the child for 'provoking' it — this deepens trauma and destroys trust.",
        "Do not delay contacting the police — it is important to document the facts as soon as possible.",
        "If your child is afraid to speak — use art therapy, play to obtain information.",
        "Child helpline (Russia): 8-800-2000-122 (24/7, anonymous)."
      ]
    },
    // ========================================
    // 8. Child is the aggressor (bullies others)
    // ========================================
    {
      id: "child_aggressor",
      title: "⚠️ My child bullies others — what to do",
      description: "Aggression is always a symptom. Help your child, do not just punish.",
      conditions: { role: ["aggressor"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–6 months",
      yield_estimate: "Stop aggressive behaviour and help the child",
      tags: ["aggressor", "psychology", "family"],
      steps: [
        "Acknowledge the problem: do not deny or blindly defend your child. Gather facts from teachers and other parents.",
        "Talk to your child calmly, without shouting. Ask: 'What do you feel when you bully?' Aggression often masks fear, insecurity, or domestic violence.",
        "Consult a child psychologist or family therapist — the root cause must be found.",
        "Set clear boundaries: 'Bullying others is unacceptable. There will be consequences: loss of gadgets, pocket money.'",
        "Check the family atmosphere: is there violence, screaming, humiliation at home? Children copy behavioural models.",
        "Ask your child to apologise to the victim (if they are ready), but do not force it — a public apology may be humiliating.",
        "Work with teachers: have them monitor the child, reinforce positive behaviour.",
        "If aggression is physical and serious — prepare for a conversation with the KDN (commission for minors).",
        "Involve your child in sports with discipline and respect for opponents (wrestling, boxing, team sports)."
      ],
      warnings: [
        "Do not hit your child for aggression — violence breeds violence.",
        "Do not deny the problem with phrases like 'my child wouldn't' — it only worsens the behaviour.",
        "Do not transfer to another school without addressing the behaviour — aggression will continue in the new place.",
        "If aggression has become normalised — psychiatric help may be needed (do not be afraid of that)."
      ]
    },
    // ========================================
    // 9. Child is a witness to bullying
    // ========================================
    {
      id: "witness_bullying",
      title: "👀 My child witnessed bullying — how to help",
      description: "Witnesses often experience fear and guilt. Support them and teach them how to respond.",
      conditions: { role: ["witness"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–2 weeks",
      yield_estimate: "Emotional support and active stance",
      tags: ["witness", "psychology", "support"],
      steps: [
        "Talk to your child: what did they see, how did they feel, are they afraid of becoming a victim themselves?",
        "Explain that they are not to blame for what happened, but they can help.",
        "Teach your child to react: call an adult, say 'Stop!' to the aggressor, support the victim with kind words.",
        "If your child is scared — suggest reporting anonymously to the teacher (write a note).",
        "Talk to the class teacher about the need for a preventive class discussion.",
        "Support your child: tell them they did the right thing by telling you.",
        "If the witness is traumatised — consult a psychologist."
      ],
      warnings: [
        "Do not force your child to 'physically intervene' — it may be dangerous.",
        "Do not dismiss their feelings: 'it's not your business' — this discourages helping others.",
        "Explain that staying silent about bullying means being complicit."
      ]
    }
  ]
};

// ===== EXPORT =====
window.bullyingDataEn = bullyingDataEn;
>>>>>>> 97084fd (fix(engine): исправлен маппинг dtp для юриста, добавлен раздел ети)
