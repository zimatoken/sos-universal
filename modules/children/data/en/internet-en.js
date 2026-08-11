// === MODULE: CHILDREN вЂ” INTERNET SAFETY (EN) ===
const internetData = {
  category: "internet",
  title: "рџ“± Internet Safety",
  description: "Grooming, sexting, addiction, scams, dangerous content вЂ” how to protect your child online",

  questions: [
    {
      id: "threat",
      text: "What is the threat?",
      type: "single",
      options: [
        { id: "grooming", label: "рџ‘¤ Talking to a stranger / suspicious messages", tags: ["grooming"] },
        { id: "sexting", label: "рџ“· Child sent/received intimate photos or videos", tags: ["sexting"] },
        { id: "addiction", label: "рџ“± Gadget / game / social media addiction", tags: ["addiction"] },
        { id: "scam", label: "рџ’ё Scam / blackmail / phishing", tags: ["scam"] },
        { id: "content", label: "вљ пёЏ Dangerous content (violence, suicide, drugs)", tags: ["content"] },
        { id: "leak", label: "рџ”“ Personal data leak / account hacked", tags: ["leak"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "preschool", label: "рџ§’ 3вЂ“7 years", tags: ["preschool"] },
        { id: "school", label: "рџ§‘ 7вЂ“12 years", tags: ["school_age"] },
        { id: "teen", label: "рџ§‘вЂЌрџЋ“ Teenager 13вЂ“17 years", tags: ["teen"] }
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
    }
  ],

  solutions: [
    {
      id: "grooming_response",
      title: "рџЋ­ Grooming вЂ” stranger manipulation online",
      description: "An adult poses as a peer, gains trust, schedules a meeting. This is a crime.",
      conditions: { threat: ["grooming"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Breaking contact, preserving evidence",
      tags: ["grooming", "predator", "crime"],
      steps: [
        "Immediately check ALL messages: VK, Telegram, WhatsApp, Instagram, Discord, game chats. Look for: compliments, secrets, 'only you understand me', requests for photos, video calls, meetings",
        "Take screenshots of EVERYTHING: messages, profile, photos, videos, links. Save to cloud. DO NOT delete chats before contacting police вЂ” this is the main evidence",
        "Block the predator on all the child's platforms. Change passwords. Enable two-factor authentication. Close profile to strangers",
        "If a meeting was scheduled or the child has already left вЂ” call 112 immediately. Report: online communication, profile, meeting place, description",
        "After recovery вЂ” DO NOT scold the child. Groomers professionally manipulate, use emotions, fear, loneliness. The child is a victim, not at fault. Say: 'You are brave for telling us. We will protect you'",
        "Contact police with a report: sexual acts, indecent acts, grooming. Provide screenshots, chats",
        "See a child psychologist. Grooming is traumatic: shame, fear, guilt, destroyed trust in the world. Early help prevents PTSD and depression",
        "Prevention: talk to children about grooming. Rule: do not meet online friends without parents. Do not send intimate photos/videos. Do not give address, school. Code word 'mom, I\'m scared'"
      ],
      warnings: [
        "DO NOT blame the child for 'stupidity' вЂ” groomers professionally manipulate, use emotions, fear, loneliness. Any child can become a victim",
        "DO NOT delete chats before contacting police вЂ” this is the main evidence. Take screenshots, save to cloud and computer",
        "Groomers often pose as peers, use fake photos, build trust for months. The child may be in love вЂ” don't yell, explain",
        "Sexting (exchange of intimate photos) is criminally punishable even between minors. But the child who sent a photo of themselves is a victim, not a criminal. Consult a lawyer"
      ]
    },
    {
      id: "sexting_crisis",
      title: "рџ”ћ Sexting вЂ” intimate photos/videos online",
      description: "The child sent or received intimate materials. Panic, shame, blackmail. Act quickly and wisely.",
      conditions: { threat: ["sexting"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“24 hours",
      yield_estimate: "Removing materials, protecting the child",
      tags: ["sexting", "blackmail", "crime"],
      steps: [
        "Stay calm. The child is already panicking, ashamed, scared. Your task is to be support, not add judgment. Say: 'Thank you for telling us. We will handle it'",
        "Take screenshots of the chat, predator's profile, threats. Save to cloud. This is evidence for police. DO NOT delete before contacting authorities",
        "If photos/videos are being spread вЂ” contact platform support (VK, Telegram, TikTok, Instagram). Demand removal per community guidelines. State the child is a minor вЂ” platforms must react quickly",
        "If blackmail ('send more or I will post') вЂ” this is extortion. Call 112. Provide screenshots, chats, profiles",
        "Consult a lawyer. Spreading intimate photos of a minor is a criminal offense. But the child who sent a photo of themselves is NOT a criminal, but a victim. This is important for their psyche and for police",
        "See a psychologist. Sexting causes deep shame, anxiety, depression, suicidal thoughts. The child feels they 'ruined their life'. Explain: it's a mistake, not a sentence. Life goes on",
        "Check the child's phone/computer for viruses, trojans, keyloggers. The photos may have been stolen, not sent by the child",
        "Prevention: explain the 'digital footprint' rule вЂ” everything sent stays forever. Even in 'secret' chats. Even if 'only for you'. Never send intimate photos, even to close people"
      ],
      warnings: [
        "DO NOT scold, punish, or take away the phone 'forever'. The child is already in shock. Punishment will close trust forever. Better вЂ” support and explanation",
        "DO NOT ignore, hoping 'it will pass on its own'. Photos can spread for years, interfere with college, work, personal life. Action is needed",
        "DO NOT try to negotiate with the blackmailer yourself вЂ” this feeds extortion. Police, lawyer, platform вЂ” the right tools",
        "Even if the child 'agreed' to send a photo вЂ” this is not consent in the legal sense. A minor cannot consent to creation/distribution of intimate materials"
      ]
    },
    {
      id: "digital_addiction",
      title: "рџЋ® Gadget, game, social media addiction",
      description: "The child won't leave the screen, screams when you try to take the phone, skips meals, sleep, school. This is addiction, not 'laziness'.",
      conditions: { threat: ["addiction"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1вЂ“6 months",
      yield_estimate: "Regaining control over time and life",
      tags: ["addiction", "games", "screen_time"],
      steps: [
        "Don't start with confiscation вЂ” this causes rebellion, aggression, secret use. Start with a conversation: 'I noticed you spend a lot of time on your phone. I care about your health. Let's agree on rules'",
        "Create rules together: gadget time (e.g., 1 hour on weekdays, 2 on weekends), 'no-phone zones' (dinner table, bedroom, homework). Write them down, post in a visible place. Rules for everyone, including parents",
        "Set up parental control: Google Family Link (Android), Screen Time (iOS), Kaspersky Safe Kids, Qustodio. But DON'T use as spying вЂ” explain why. Control without explanation = distrust",
        "Replace, don't just prohibit. Addiction to games/social media often tries to fill emptiness: boredom, loneliness, insecurity. Offer alternatives: sports, creativity, meetings with friends, hiking",
        "If the child screams, has tantrums, threatens when you try to limit time вЂ” this is severe addiction. See a psychologist, psychotherapist. Treatment at a center may be needed",
        "Check if the child escapes into the virtual world from real problems: bullying, family issues, depression, anxiety. Treat the cause, not the symptom",
        "Be an example. If you are constantly on your phone вЂ” demands for the child are meaningless. Family rules work only if everyone follows them",
        "Gradually reduce time, don't cut abruptly. For example, week 1: 3 hours в†’ 2.5, week 2: 2.5 в†’ 2. Abrupt deprivation causes anxiety and relapse"
      ],
      warnings: [
        "DO NOT take away the phone 'forever' or for a month вЂ” this is an extreme measure that breaks trust. The child will lose connection with friends, their only social life",
        "DO NOT use parental control as spying (reading all messages, tracking every step). This violates privacy and leads to secret accounts",
        "Gaming addiction is recognized by WHO (IGD вЂ” Internet Gaming Disorder). This is not 'laziness' or 'bad parenting'. This is a diagnosis requiring professional help",
        "DO NOT compare with 'in my time we played outside' вЂ” the world has changed. For modern children, online = social life. The goal is balance, not complete refusal"
      ]
    },
    {
      id: "online_scam",
      title: "рџ’° Scam, phishing, blackmail online",
      description: "Promised free skins, V-bucks, robux, but ended up stealing card data, hacking the account, demanding money.",
      conditions: { threat: ["scam"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“3 days",
      yield_estimate: "Recovering funds, protecting data",
      tags: ["scam", "fraud", "games"],
      steps: [
        "Immediately change passwords on ALL the child's accounts: games, social media, email. Enable two-factor authentication. Check if unknown devices are linked",
        "If bank card data was stolen вЂ” immediately call the bank, block the card. File a fraud report. The bank is obligated to investigate",
        "Save screenshots: chat, links, scammer's profile, 'free offer' page. This is evidence for police and bank",
        "If being blackmailed ('pay or I will hack the account / post photos') вЂ” DO NOT pay. This is a bottomless pit. Call 112. This is extortion",
        "Check the device for viruses: Dr.Web, Kaspersky, Avast. A keylogger or trojan may be stealing passwords",
        "Explain to the child: 'free' skins, robux, V-bucks are always scams. Real developers don't give away free. If they ask for password, card data, code вЂ” it's 100% fraud",
        "If the child paid the scammer вЂ” contact the bank with a disputed transaction claim. Card payments have higher refund chances than cryptocurrency",
        "Prevention: explain rules. Don't enter card data without parents. Don't download programs from unofficial sources. Don't click links from chats. Check the website address"
      ],
      warnings: [
        "DO NOT pay blackmailers вЂ” this feeds them and guarantees nothing. They will come back. Police, blocking, account change вЂ” the right path",
        "DO NOT scold the child for 'gullibility' вЂ” scammers professionally manipulate, use greed, fear, love of the game. Anyone can fall for it",
        "Cryptocurrency payments (Bitcoin, USDT) are almost impossible to reverse. If a scammer demands crypto вЂ” it's 100% fraud. Real companies don't accept crypto from children",
        "Phishing sites look real (Roblox.com vs RobIox.com with Latin I). Teach the child to check the address bar, look for HTTPS lock"
      ]
    },
    {
      id: "harmful_content",
      title: "в пёЏ Dangerous content: violence, suicide, drugs",
      description: "The child encountered or searches for prohibited content: violence videos, suicide propaganda, drugs, pornography.",
      conditions: { threat: ["content"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“7 days",
      yield_estimate: "Blocking content, helping the child",
      tags: ["content", "violence", "suicide", "drugs"],
      steps: [
        "Don't panic or shout. Talk calmly: 'I noticed you watched [content]. It's important for me to understand how you feel. Let's talk'. Judgment will close trust",
        "If the child searches for suicide information вЂ” this is an alarm bell. Immediately see a psychologist, psychotherapist. Helpline: 8-800-2000-122. Do not leave the child alone",
        "If content is related to drugs вЂ” the child may have already tried or is being persuaded. Talk, see a narcologist. Early help prevents addiction",
        "Block content: YouTube safety settings (Restricted Mode), Google SafeSearch, parental control on router (Yandex.DNS, AdGuard Family). But remember: blocking is not a substitute for conversation",
        "Report to platform support for violation. Demand removal. If content promotes suicide, violence, drugs вЂ” the platform is obligated to remove it",
        "If the child threatens themselves or others under content influence вЂ” immediately emergency (112). This is an emergency",
        "Explain to the child: the internet shows everything, but not everything is true. 'Challenge' videos are often staged. 'Cool' drug users in reality are sick, ruined people. Show real consequences: photos, stories, documentaries",
        "Increase time together: walks, games, conversations. Children often search for the forbidden out of boredom, curiosity, loneliness. Fill life with meaning вЂ” the internet will fade into the background"
      ],
      warnings: [
        "DO NOT ignore searching for prohibited content as 'curiosity'. Searching for suicide, drugs, violence information is an alarm signal. Conversation and professional needed",
        "DO NOT block content and turn a blind eye simultaneously. Blocking without conversation = the child will find a way around (VPN, friends, secret phone). Conversation without blocking = the child will continue watching",
        "Propaganda of suicide among minors is a criminal offense. If the child is involved in 'death groups' вЂ” immediately police",
        "DO NOT shame the child for watching pornography вЂ” this is normal curiosity. But explain: pornography is not reality, it's staging. Real relationships are trust, respect, consent"
      ]
    }
  ]
};

window.internetDataEn = internetData;
