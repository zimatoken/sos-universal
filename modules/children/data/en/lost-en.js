// === MODULE: CHILDREN — MISSING CHILD (EN) ===
const lostData = {
  category: "lost",
  title: "🔍 Missing Child",
  description: "Child didn't come home from school, doesn't answer calls, disappeared — action algorithm",

  questions: [
    {
      id: "lost_type",
      text: "What is the situation?",
      type: "single",
      options: [
        { id: "not_home", label: "Didn't come from school / section / from friends", tags: ["not_home"] },
        { id: "no_contact", label: "Doesn't answer calls / messages (1+ days)", tags: ["no_contact"] },
        { id: "runaway", label: "Ran away from home after an argument", tags: ["runaway"] },
        { id: "abduction", label: "Suspect abduction / stranger took them", tags: ["abduction"] },
        { id: "online", label: "Disappeared after online communication / social media", tags: ["online"] }
      ]
    },
    {
      id: "time_missing",
      text: "How much time has passed?",
      type: "single",
      options: [
        { id: "less_1h", label: "Less than 1 hour", tags: ["recent"] },
        { id: "1_3h", label: "1–3 hours", tags: ["short"] },
        { id: "3_12h", label: "3–12 hours", tags: ["medium"] },
        { id: "more_12h", label: "More than 12 hours", tags: ["long"] }
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
    }
  ],

  solutions: [
    {
      id: "missing_immediate",
      title: "🚨 Missing child — first 3 hours decide everything",
      description: "Statistics: 76% of missing children are found within the first 3 hours. Every minute counts.",
      conditions: { lost_type: ["not_home", "no_contact", "abduction", "online"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Maximum chances to find",
      tags: ["missing", "search", "emergency"],
      steps: [
        "DO NOT panic. Activate 'search mode': gather all relatives, friends, neighbors. Divide zones",
        "Call the child. If phone is off / unavailable — check last geolocation: Find My iPhone, Google Timeline, Life360, Telegram location",
        "Contact everyone: school, kindergarten, coach, friends' parents, neighbors. Clarify: when last seen, what was said, where going, who with",
        "If the child is missing for more than 3 hours (teen) or 1 hour (young child) — call 112. Missing child — do not wait 3 days like for adults. Police must respond immediately",
        "File a missing person report at the nearest police station. Get a receipt (case number). If refused — demand written refusal, contact the local officer, prosecutor's office",
        "Create a post on social media (VK, Telegram, Instagram, Facebook): child's photo, description, last seen location, contacts. Ask to repost. Do not specify home address — safety",
        "Send photos to school parent chats, neighborhood chats, social media. Ask to forward. The more people know — the higher the chances",
        "Check CCTV cameras: entrance, yard, school, stores, bus stops, subway. Save recordings. Hand over to police",
        "Check the child's bank cards: statements, last purchases, cash withdrawals. This indicates direction",
        "If a teenager — check social media, messages, diary, phone notes. Do not violate privacy without extreme need, but life is more important"
      ],
      warnings: [
        "DO NOT wait 'a little more' — the first 3 hours are critical. Police must accept a missing child report immediately, without waiting (Criminal Procedure Code)",
        "DO NOT spread false information on social media — it hinders the search and scares the child (if they just went for a walk)",
        "DO NOT blame the child after recovery (even if they ran away). This will close trust forever. Talk calmly, find out reasons",
        "If the child was found with a stranger — immediately to police. Even if 'nothing happened' — this is a crime"
      ]
    },
    {
      id: "runaway_teen",
      title: "🏃 Teenager ran away from home — why and how to find",
      description: "A runaway teen is not a criminal. This is a cry for help. Find them, talk, do not punish.",
      conditions: { lost_type: ["runaway"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1–24 hours",
      yield_estimate: "Return and understanding",
      tags: ["runaway", "teen", "psychology"],
      steps: [
        "Do not panic. Teens often go to friends, parks, malls, train stations. Most return on their own within 24 hours",
        "Call friends, classmates, friends' parents. Ask: was he/she there, what was said, where planning to go. Do not yell at them — they may hide information",
        "Check social media: VK, Telegram, Instagram, TikTok. Teens often write about plans, post stories. Do not write angry comments — this will push them away",
        "Check bank cards: where money was withdrawn, what was bought. This indicates the area",
        "If > 6 hours passed — call 112. Missing teen is still missing. Police must search",
        "If the teen is in contact (reads messages but doesn't reply) — write calmly: 'We are worried, we love you, come back, let's talk'. No threats, no manipulation",
        "After return — DO NOT punish, DO NOT scold. This will close trust forever. Talk: what happened, what worries them, what can be changed",
        "See a family psychologist. Running away is a symptom: bullying, depression, family problems, school pressure. Treat the cause, not the consequence",
        "If the teen runs away regularly — consider temporary living with grandma/relatives, changing schools, working with a psychologist"
      ],
      warnings: [
        "DO NOT threaten the teen with police, psychiatric hospital, phone confiscation — this will only push them away. Talk about love and worry",
        "DO NOT blame friends — they may be the only support. Better befriend the friends' parents, create a network",
        "Running away is not 'bad behavior' but an attempt to cope with an unbearable situation. Punishment will worsen the problem",
        "If the teen is in contact but refuses to return — don't pressure. Arrange a meeting in a neutral place (cafe, park) with a psychologist or trusted adult"
      ]
    },
    {
      id: "online_predator",
      title: "💻 Disappeared after online communication — grooming and danger",
      description: "Online predators use social media, games, messengers. The child may not understand the danger.",
      conditions: { lost_type: ["online"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving from grooming / abduction",
      tags: ["online", "predator", "grooming"],
      steps: [
        "Immediately check all messages: VK, Telegram, WhatsApp, Instagram, Discord, game chats (Roblox, Minecraft, CS:GO). Look for: scheduled meetings, addresses, photos, video calls",
        "Save EVERYTHING: screenshots of chats, predator's photos, profile links, IP addresses (if you can get them). This is evidence for police",
        "Check browser history, search queries, deleted messages (Telegram 'recently deleted', VK trash)",
        "If the child scheduled a meeting or has already left — call 112 immediately. Report: online communication, predator's profile, meeting place",
        "Block the predator on all the child's platforms. Change passwords. Enable two-factor authentication",
        "After recovery — DO NOT scold the child. Groomers manipulate, deceive, blackmail. The child is a victim, not at fault. Say: 'You are brave for telling us. We will protect you'",
        "Contact police with a report: indecent acts / abduction. Provide screenshots, chats",
        "See a child psychologist. Grooming is traumatic: shame, fear, guilt. Early help prevents PTSD and depression",
        "Prevention: talk to children about online dangers. Rule: do not meet online friends without parents. Do not send intimate photos/videos. Do not give address, school. Code word 'mom, I'm scared'"
      ],
      warnings: [
        "DO NOT blame the child for 'stupidity' — groomers professionally manipulate, use emotions, fear, loneliness. Any child can become a victim",
        "DO NOT delete chats before contacting police — this is the main evidence. Take screenshots, save to cloud",
        "Groomers often pose as peers, use fake photos, build trust for months. The child may be in love — don't yell, explain",
        "Sexting (exchange of intimate photos) is criminally punishable even between minors. But the child who sent a photo of themselves is a victim, not a criminal. Consult a lawyer"
      ]
    }
  ]
};

window.lostData = lostData;