// === MODULE: CHILDREN — INTERNET SAFETY ===
const internetDataEn = {
  category: "internet",
  title: "?? Internet Safety",
  description: "Grooming, sexting, addiction, scams, harmful content — how to protect your child online",

  questions: [
    {
      id: "threat",
      text: "What threats have you noticed? (select all that apply)",
      type: "multi",
      options: [
        { id: "grooming", label: "?? Communication with a stranger / suspicious messages", tags: ["grooming"] },
        { id: "sexting", label: "?? Child sent/received intimate photos or videos", tags: ["sexting"] },
        { id: "addiction", label: "?? Addiction to devices / games / social media", tags: ["addiction"] },
        { id: "scam", label: "?? Scam / blackmail / phishing", tags: ["scam"] },
        { id: "content", label: "?? Harmful content (violence, suicide, drugs)", tags: ["content"] },
        { id: "leak", label: "?? Data leak / hacked account", tags: ["leak"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      conditions: { threat: ["grooming", "sexting", "addiction", "scam", "content", "leak"] },
      options: [
        { id: "preschool", label: "?? 3–7 years old", tags: ["preschool"] },
        { id: "school", label: "?? 7–12 years old", tags: ["school_age"] },
        { id: "teen", label: "????? Teenager 13–17 years old", tags: ["teen"] }
      ]
    },
    {
      id: "platform",
      text: "Where did this happen?",
      type: "single",
      conditions: { threat: ["grooming", "sexting", "addiction", "scam", "content", "leak"] },
      options: [
        { id: "social", label: "Social media (Facebook, Instagram, TikTok)", tags: ["social"] },
        { id: "games", label: "Games (Roblox, Minecraft, CS:GO, Brawl Stars)", tags: ["games"] },
        { id: "messengers", label: "Messengers (Telegram, WhatsApp, Discord)", tags: ["messengers"] },
        { id: "video", label: "Video (YouTube, Twitch, TikTok)", tags: ["video"] }
      ]
    }
  ],

  solutions: [
    // ==========================================
    // 1. GROOMING
    // ==========================================
    {
      id: "grooming_response",
      title: "?? Grooming — manipulation by a stranger online",
      description: "An adult poses as a peer, gains trust, arranges a meeting. This is a crime.",
      conditions: { threat: ["grooming"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Breaking contact, preserving evidence",
      tags: ["grooming", "predator", "crime"],
      steps: [
        "Immediately check ALL communication: Facebook, Telegram, WhatsApp, Instagram, Discord, game chats. Look for: compliments, secrets, 'you're the only one who understands me', requests for photos, video calls, meetings",
        "Take screenshots of EVERYTHING: messages, profile, photos, videos, links. Save to the cloud. DO NOT delete messages before going to police — this is key evidence",
        "Block the contact on all of the child's platforms. Change passwords. Enable two-factor authentication. Close the profile to strangers",
        "If a meeting was arranged or the child has already left — call 911 immediately. Report: online communication, profile, meeting location, description",
        "After finding them — DON'T scold the child. Predators professionally manipulate, using emotions, fear, loneliness. The child is a victim, not at fault. Say: 'You were brave to tell us. We'll protect you'",
        "File a police report: Article 132 (sexual acts), Article 135 (indecent acts), Article 240.1 (grooming). Provide screenshots and messages",
        "See a child psychologist. Grooming is traumatic: shame, fear, guilt, trust in the world is broken. Early help prevents PTSD and depression",
        "Prevention: talk to children about grooming. Rule: don't meet online friends without parents. Don't send intimate photos/videos. Don't share address or school. Code word 'mom, I'm scared'"
      ],
      warnings: [
        "DON'T blame the child for 'stupidity' — predators professionally manipulate, using emotions, fear, loneliness. Any child can become a victim",
        "DON'T delete messages before going to police — these are key evidence. Take screenshots, save to the cloud, on computer",
        "Predators often pose as peers, use fake photos, build trust over months. The child may be in love — don't yell, explain",
        "Sexting (sharing intimate photos) is criminally punishable even between minors. But the child is a victim, not a criminal. Consult a lawyer"
      ]
    },
    {
      id: "grooming_young",
      title: "?? Grooming of a young child (3–7 years)",
      description: "Young children don't understand danger. Predators use games, gifts, 'secrets'. Parents must be present online.",
      conditions: { threat: ["grooming"], age: ["preschool"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Protecting the child, blocking contact",
      tags: ["grooming", "preschool", "predator"],
      steps: [
        "At this age, the child CANNOT protect themselves. All internet activity must be with parents or under their full supervision",
        "Check all devices the child could have used: tablet, phone, gaming console",
        "Explain to the child in simple words: 'If someone online asks to see your body or promises gifts — immediately tell mom/dad. You're not at fault'",
        "Install parental controls on all devices. Limit access to chats and messengers",
        "If grooming occurred — immediately go to police. Young children can't give meaningful testimony, but the messages are evidence"
      ],
      warnings: [
        "DON'T leave young children alone on the internet. Predators specifically look for the most vulnerable",
        "Children 3–7 don't recognize danger and can't resist manipulation. All responsibility is on you"
      ]
    },
    // ==========================================
    // 2. SEXTING
    // ==========================================
    {
      id: "sexting_crisis",
      title: "?? Sexting — intimate photos/videos online",
      description: "Child sent or received intimate content. Panic, shame, blackmail. Act quickly and wisely.",
      conditions: { threat: ["sexting"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–24 hours",
      yield_estimate: "Removing content, protecting the child",
      tags: ["sexting", "blackmail", "crime"],
      steps: [
        "Stay calm. The child is already in panic, shame, fear. Your role is to be support, not add judgment. Say: 'Thank you for telling us. We'll figure this out'",
        "Take screenshots of the conversation, the contact's profile, threats. Save to the cloud. These are evidence for police. DO NOT delete before contacting law enforcement",
        "If photos/videos are already being shared — contact platform support (Facebook, Telegram, TikTok, Instagram). Demand removal under community guidelines. State that the child is a minor — platforms must respond quickly",
        "If there's blackmail ('send more or I'll post') — this is extortion. Call 911. Article 163 of the Criminal Code. Provide screenshots, conversation, profile",
        "Consult a lawyer. Sharing intimate photos of a minor is Article 242.1 of the Criminal Code. But the child who sent the photo themselves is NOT a criminal, but a victim. This is important for their mental health and for police",
        "See a psychologist. Sexting causes deep shame, anxiety, depression, suicidal thoughts. The child feels they've 'ruined their life'. Explain: it's a mistake, not a life sentence. Life goes on",
        "Check the child's phone/computer for viruses, trojans, keyloggers. The photos may have been stolen, not sent by the child",
        "Prevention: explain the 'digital footprint rule' — everything sent stays forever. Even in 'secret' chats. Even if it's 'only for you'. Never send intimate photos, even to close people"
      ],
      warnings: [
        "DON'T scold, punish, or take away the phone 'forever'. The child is already in shock. Punishment will close trust forever. Better — support and explanation",
        "DON'T ignore it hoping 'it will go away'. Photos can spread for years, affecting college admission, work, personal life. You need to act",
        "DON'T try to negotiate with the blackmailer yourself — this fuels the extortion. Police, lawyer, platform are the right tools",
        "Even if the child 'agreed' to send the photo — this is not consent in a legal sense. Minors cannot consent to the creation/distribution of intimate content"
      ]
    },
    // ==========================================
    // 3. ADDICTION
    // ==========================================
    {
      id: "digital_addiction",
      title: "?? Device, game, and social media addiction",
      description: "Child can't tear themselves away from the screen, screams when you try to take the phone, skips meals, sleep, homework. This is addiction, not 'laziness'.",
      conditions: { threat: ["addiction"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–6 months",
      yield_estimate: "Regaining control over time and life",
      tags: ["addiction", "games", "screen_time"],
      steps: [
        "Don't start with confiscation — this will cause rebellion, aggression, secret use. Start with a conversation: 'I noticed you spend a lot of time on your phone. Your health matters to me. Let's agree on something'",
        "Together set rules: time on devices (e.g., 1 hour on weekdays, 2 on weekends), 'phone-free zones' (desk, bedroom, homework). Write them down, post them visibly. Rules for everyone, including parents",
        "Install parental controls: Google Family Link (Android), Screen Time (iOS), Kaspersky Safe Kids, Qustodio. But DON'T use as spying — explain why. Control without explanation = mistrust",
        "Replace, don't prohibit. Game/social media addiction is often an attempt to fill a void: boredom, loneliness, insecurity. Offer alternatives: sports, creative activities, meeting friends, hiking",
        "If the child screams, throws tantrums, threatens when you try to limit time — this is severe addiction. See a psychologist, psychotherapist. Possibly treatment at a center",
        "Check if the child is escaping into the virtual world from real problems: bullying, family issues, depression, anxiety. Treat the cause, not the symptom",
        "Set an example. If you're constantly on your phone — demands on the child are meaningless. Family rules only work if everyone follows them",
        "Reduce time gradually, not abruptly. For example: week 1: 3 hours > 2.5, week 2: 2.5 > 2. Sudden withdrawal causes anxiety and relapse"
      ],
      warnings: [
        "DON'T take away the phone 'forever' or for a month — this is an extreme measure that breaks trust. The child will lose connection with friends, their only social life",
        "DON'T use parental controls as spying (reading all messages, tracking every move). This violates personal space and will lead to secret accounts",
        "Gaming addiction is recognized by WHO (IGD — Internet Gaming Disorder). This is not 'laziness' or 'bad parenting'. It's a diagnosis requiring professional help",
        "DON'T compare with 'in my time we played outside' — the world has changed. For modern children, online = social life. The goal is balance, not complete refusal"
      ]
    },
    {
      id: "addiction_teen",
      title: "????? Teen addiction — working with a psychologist",
      description: "Teenagers often escape into the online world from problems. Addiction at this age requires professional help.",
      conditions: { threat: ["addiction"], age: ["teen"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–6 months",
      yield_estimate: "Treating addiction and addressing root causes",
      tags: ["addiction", "teen", "psychology"],
      steps: [
        "A teenager is no longer a child. Bans and control cause rebellion. Start with a dialogue: 'I see you're struggling. Let's figure this out together'",
        "See a teen psychologist. Addiction is often a symptom: depression, anxiety, trauma, family problems",
        "Check social media: the child may be experiencing bullying or grooming. This could be why they escape into games",
        "Discuss the future with your child: 'What do you want to do in 5 years? Can games help or hinder that?'",
        "Don't punish relapses — support. Addiction isn't treated with bans. It's treated with understanding, care, and professionals"
      ],
      warnings: [
        "DON'T secretly read their messages — this will destroy trust forever. If you need to, ask them to show you and explain why",
        "DON'T take away devices as punishment — the teen will find a way to get access (from friends, at school)",
        "Teen addiction requires professional help. Don't hesitate to see a psychotherapist"
      ]
    },
    // ==========================================
    // 4. SCAM
    // ==========================================
    {
      id: "online_scam",
      title: "?? Scams, phishing, and online extortion",
      description: "They promised free skins, V-bucks, Robux, but ended up stealing card details, hacking accounts, extorting money.",
      conditions: { threat: ["scam"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Fund recovery, data protection",
      tags: ["scam", "fraud", "games"],
      steps: [
        "Immediately change passwords on ALL of the child's accounts: games, social media, email. Enable two-factor authentication. Check if any unknown devices are linked",
        "If bank card details were stolen — immediately call the bank, block the card. File a fraud report. The bank must investigate",
        "Save screenshots: messages, links, scammer's profile, the 'free' offer page. This is evidence for police and the bank",
        "If they're demanding money ('pay or I'll hack your account / leak photos') — DON'T pay. It's a bottomless pit. Call 911. Article 163 of the Criminal Code (extortion)",
        "Scan the device for viruses: Dr.Web, Kaspersky, Avast. A keylogger or trojan may be installed, stealing passwords",
        "Explain to the child: 'free' skins, Robux, V-bucks are ALWAYS scams. Real developers don't give things away for free. If they ask for a password, card details, or a code — it's 100% fraud",
        "If the child paid the scammer — contact the bank with a dispute claim. Card payments have a higher chance of recovery than cryptocurrency",
        "Prevention: explain the rules. Don't enter card details without parents. Don't download programs from unofficial sources. Don't click links from chats. Check the website address"
      ],
      warnings: [
        "DON'T pay extortionists — it feeds them and doesn't guarantee safety. They'll come again. Police, blocking, account change is the right path",
        "DON'T scold the child for being 'gullible' — scammers professionally manipulate, using greed, fear, love of games. Anyone can fall for it",
        "Cryptocurrency payments (Bitcoin, USDT) are practically impossible to recover. If a scammer demands crypto — it's 100% fraud. Real companies don't accept crypto from children",
        "Phishing sites look like real ones (Roblox.com vs RobIox.com with a capital I). Teach your child to check the address bar for HTTPS"
      ]
    },
    // ==========================================
    // 5. HARMFUL CONTENT
    // ==========================================
    {
      id: "harmful_content",
      title: "?? Harmful content: violence, suicide, drugs",
      description: "Child encountered or is searching for harmful content: violence videos, suicide propaganda, drugs, pornography.",
      conditions: { threat: ["content"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Blocking content, helping the child",
      tags: ["content", "violence", "suicide", "drugs"],
      steps: [
        "Don't panic or yell. Talk calmly: 'I noticed you were watching [content]. I want to understand how you feel. Let's talk'. Judgment will close trust",
        "If the child is searching for suicide information — this is a red flag. Immediately see a psychologist, psychotherapist. Helpline: 988 (or local). Don't leave the child alone",
        "If the content is drug-related — the child may have tried them or is being pressured. Talk, see a narcologist. Early help prevents addiction",
        "Block the content: YouTube Restricted Mode, Google SafeSearch, parental controls on the router. But remember: blocking is not a replacement for conversation",
        "Report the violation to the platform. Demand removal. If content promotes suicide, violence, drugs — the platform must remove it",
        "If the child is threatening self-harm or others under the content's influence — immediately call 911. This is an emergency",
        "Explain to the child: the internet shows everything, but not everything is true. 'Challenge' videos are often staged. 'Cool' drug addicts in reality are sick, ruined people. Show real consequences",
        "Increase time together: walks, games, conversations. Children often seek forbidden content out of boredom, curiosity, loneliness. Fill life with meaning — the internet will move to the background"
      ],
      warnings: [
        "DON'T ignore searching for harmful content as 'curiosity'. Searching for suicide, drugs, violence information is a red flag. Conversation and professional help are needed",
        "DON'T block content and turn a blind eye at the same time. Blocking without conversation = the child will find a way around (VPN, friends, secret phone). Conversation without blocking = the child will keep watching",
        "Suicide propaganda among minors is a criminal offense. If the child is involved in 'death groups' — immediately contact police",
        "DON'T shame the child for watching pornography — it's normal curiosity. But explain: pornography is not real, it's staged. Real relationships are built on trust, respect, consent"
      ]
    },
    // ==========================================
    // 6. DATA LEAK / HACKED ACCOUNT
    // ==========================================
    {
      id: "account_hacked",
      title: "?? Hacked account or data leak",
      description: "Child's account was hacked, data stolen, scammers are using their identity online.",
      conditions: { threat: ["leak"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–24 hours",
      yield_estimate: "Regaining control over the account",
      tags: ["leak", "hacking", "security"],
      steps: [
        "Immediately change the account password (if still accessible). Use a strong password: 12+ characters, letters, numbers, symbols",
        "Enable two-factor authentication (2FA) on all platforms. This is the best protection against hacking",
        "Check if unknown phone numbers, emails, or devices are linked to the account. Remove anything foreign",
        "Check the account login history: where and when they logged in. Save screenshots of suspicious logins — this is evidence",
        "If the account is being used for fraud (spam sent in the child's name) — write to platform support, explain the situation",
        "If documents (passport, SSN) were stolen — immediately go to police. This could be used to take out loans",
        "Scan the device for viruses — a keylogger may be installed that steals passwords",
        "Prevention: don't use the same password everywhere. Don't click links from strangers. Don't download programs from untrusted sources"
      ],
      warnings: [
        "DON'T use simple passwords — they're hacked in seconds",
        "DON'T save passwords openly on your computer — use password managers",
        "DON'T click links, even if sent by 'friends' — their account may also be hacked",
        "Identity document leaks are a threat of fraud. Check your credit history regularly"
      ]
    }
  ]
};

// ===== EXPORT =====
window.internetDataEn = internetDataEn;
