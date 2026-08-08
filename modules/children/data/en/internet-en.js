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
    // =================================