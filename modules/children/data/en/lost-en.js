// === MODULE: LOST CHILD (ENGLISH) ===
const lostDataEn = {
  category: "lost",
  title: "🔍 Lost Child",
  description: "Child didn't come home from school, not answering calls, missing — action plan for every situation",

  questions: [
    {
      id: "lost_type",
      text: "What is the situation?",
      type: "single",
      options: [
        { id: "not_home", label: "Didn't come home from school / club / friends", tags: ["not_home"] },
        { id: "no_contact", label: "Not answering calls / messages (24+ hours)", tags: ["no_contact"] },
        { id: "runaway", label: "Ran away from home after an argument", tags: ["runaway"] },
        { id: "abduction", label: "I suspect abduction / taken by a stranger", tags: ["abduction"] },
        { id: "online", label: "Missing after online communication / social media", tags: ["online"] },
        { id: "lost_nature", label: "Lost in the forest / nature / on a hike", tags: ["nature"] },
        { id: "shopping", label: "Lost in a mall / train station / crowded place", tags: ["shopping"] }
      ]
    },
    {
      id: "time_missing",
      text: "How long has it been since you realized the child was missing?",
      type: "single",
      options: [
        { id: "less_30min", label: "Less than 30 minutes", tags: ["very_recent"] },
        { id: "less_1h", label: "30 minutes – 1 hour", tags: ["recent"] },
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
        { id: "infant", label: "0–2 years (can't walk / doesn't speak well)", tags: ["infant"] },
        { id: "preschool", label: "3–7 years", tags: ["preschool"] },
        { id: "school", label: "7–12 years", tags: ["school_age"] },
        { id: "teen", label: "Teenager 13–17 years", tags: ["teen"] }
      ]
    },
    {
      id: "health_issues",
      text: "Does the child have any health issues that could complicate the search?",
      type: "single",
      options: [
        { id: "no_health", label: "No, healthy", tags: ["healthy"] },
        { id: "allergy", label: "Allergy (needs medication)", tags: ["allergy"] },
        { id: "chronic", label: "Chronic illness (diabetes, asthma, epilepsy)", tags: ["chronic"] },
        { id: "autism", label: "Autism / ASD / mental disabilities", tags: ["autism"] },
        { id: "medication", label: "Takes medication that needs to be given on time", tags: ["medication"] }
      ]
    },
    {
      id: "last_location",
      text: "Where was the child last seen?",
      type: "single",
      options: [
        { id: "home", label: "At home / in the yard", tags: ["home"] },
        { id: "school", label: "School / kindergarten / club", tags: ["school"] },
        { id: "friends", label: "At friends' / relatives' place", tags: ["friends"] },
        { id: "street", label: "On the street / in the park / at a bus stop", tags: ["street"] },
        { id: "mall", label: "At a mall / store", tags: ["mall"] },
        { id: "nature", label: "In the forest / at the dacha / on a hike", tags: ["nature_place"] }
      ]
    },
    {
      id: "communication",
      text: "Does the child have a phone and is it working?",
      type: "single",
      options: [
        { id: "has_works", label: "Phone is available, working, but not answering", tags: ["phone_works"] },
        { id: "has_off", label: "Phone is available but turned off / dead battery", tags: ["phone_off"] },
        { id: "no_phone", label: "No phone", tags: ["no_phone"] },
        { id: "share_location", label: "I can see location (Find My, Google, Life360)", tags: ["location_available"] }
      ]
    },
    {
      id: "last_actions",
      text: "What was the child doing shortly before disappearing? (choose the main one)",
      type: "single",
      options: [
        { id: "normal", label: "Everything was normal, no signs of distress", tags: ["normal"] },
        { id: "upset", label: "Was upset / crying / had a conflict", tags: ["upset"] },
        { id: "secretive", label: "Was secretive, spent a lot of time on phone", tags: ["secretive"] },
        { id: "talk_meeting", label: "Talked about meeting someone from the internet", tags: ["talk_meeting"] },
        { id: "packed", label: "Was packing things / took money / left abruptly", tags: ["packed"] }
      ]
    },
    {
      id: "clothing_description",
      text: "Can you accurately describe what the child was wearing?",
      type: "single",
      options: [
        { id: "yes_known", label: "Yes, I know exactly what they were wearing", tags: ["clothes_known"] },
        { id: "partial", label: "Approximately, but I can describe", tags: ["clothes_partial"] },
        { id: "no", label: "I don't remember / not sure", tags: ["clothes_unknown"] }
      ]
    },
    {
      id: "social_media",
      text: "Have you checked the child's social media accounts and messages?",
      type: "single",
      options: [
        { id: "checked", label: "Yes, checked — nothing suspicious", tags: ["checked"] },
        { id: "suspicious", label: "There are suspicious contacts or messages", tags: ["suspicious"] },
        { id: "not_checked", label: "No, haven't checked yet", tags: ["not_checked"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Lost in crowded place (mall, station) — recently
    // ========================================
    {
      id: "lost_in_mall",
      title: "🛒 Child lost in a mall / train station / crowded place",
      description: "Young children often get lost in crowds. Stay calm, follow the plan.",
      conditions: { lost_type: ["shopping"], time_missing: ["less_30min", "recent", "short"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Quick discovery",
      tags: ["shopping", "mall", "immediate"],
      steps: [
        "Stop and look around. Often the child is standing nearby but you can't see them due to panic.",
        "Call the child's name loudly. Ask people nearby to help check the immediate area.",
        "Immediately go to security or mall administration. Describe the child: height, clothing, special features. Ask for an announcement over the PA system.",
        "If there are cameras — ask to check footage to determine direction.",
        "Ask security to lock down exits. This is standard procedure in large malls.",
        "If the child isn't found within 15–20 minutes — call the police (911/112).",
        "After finding the child — explain that they should stay in place or approach uniformed staff."
      ],
      warnings: [
        "Don't run in different directions — it wastes time. Start with security and PA announcements.",
        "Don't ignore the threat of abduction — if the child doesn't appear within 30 minutes, call the police.",
        "Pre-arrange a meeting point with your child in case of separation."
      ]
    },
    // ========================================
    // 2. Lost in nature / forest
    // ========================================
    {
      id: "lost_in_nature",
      title: "🌲 Child lost in the forest / nature — action plan",
      description: "In the forest, every minute counts. Stay calm and organize the search properly.",
      conditions: { lost_type: ["lost_nature"], time_missing: ["recent", "short", "medium"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Quick detection in the forest",
      tags: ["nature", "forest", "emergency"],
      steps: [
        "Stop, don't run in different directions. Listen — the child may be calling or crying.",
        "Call the child's phone if there's signal. Ask them to stay in place, not go further.",
        "Report the disappearance to Emergency Services (112) and call the police. The forest is a high-risk zone.",
        "Leave a bright object at the place where you separated, so the child can find their way back.",
        "If you have a compass or GPS — remember the coordinates and direction the child went.",
        "Don't go too far from the meeting point — children often move in circles and may return.",
        "Try to find higher ground to survey the area. Children often hide under trees or in bushes.",
        "If you're in a group — split into search pairs, but keep each other in sight.",
        "When found — don't shout abruptly, it might scare them. Approach calmly and hug them."
      ],
      warnings: [
        "Don't run blindly through the forest — you could get lost yourself and complicate the search.",
        "Don't send a child into the forest without a whistle, bright clothing, charged phone, and water.",
        "If the child has a phone — keep the speaker on to hear surrounding sounds."
      ]
    },
    // ========================================
    // 3. Lost child under 7 — "first hour" algorithm
    // ========================================
    {
      id: "lost_child_under_7",
      title: "🚼 Child under 7 missing — what to do in the first hour",
      description: "Young children can't go far but can get into dangerous situations. Every minute matters.",
      conditions: { lost_type: ["not_home", "no_contact"], age: ["infant", "preschool"], time_missing: ["less_30min", "recent", "short"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Quick discovery",
      tags: ["young_child", "first_hour", "emergency"],
      steps: [
        "DON'T WAIT! For children under 7, the search starts from the first minute.",
        "Check all rooms at home, under beds, in closets, on the balcony, in the garage — children often hide.",
        "Search the yard, entrances, neighboring entrances, attic, basement, construction sites, abandoned buildings.",
        "Quickly inform all neighbors, ask them to check their security cameras.",
        "If more than 15 minutes have passed — call the police (911/112). Don't hesitate!",
        "Have a recent photo of the child, clothing description, and special features ready.",
        "Check all possible places: stores, playgrounds, parks, ponds, rivers.",
        "Organize the search: one person stays by the phone, others divide zones.",
        "When found — definitely see a psychologist to relieve stress."
      ],
      warnings: [
        "Don't wait for 'they'll come back on their own' — young children can't navigate and can get into trouble.",
        "Check water bodies — this is one of the main dangers for young children.",
        "If the child is found with a stranger — don't leave, call the police."
      ]
    },
    // ========================================
    // 4. Lost teenager (extended time, no contact)
    // ========================================
    {
      id: "lost_teenager",
      title: "🧑‍🦰 Teenager missing — more than 3 hours, not answering",
      description: "Teenagers often hide intentionally, but that doesn't mean you should delay the search.",
      conditions: { lost_type: ["not_home", "no_contact", "runaway"], age: ["teen"], time_missing: ["medium", "long"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Find and bring back",
      tags: ["teen", "long_absent", "police"],
      steps: [
        "Call the police immediately (911/112). Don't wait 3 days for a missing teenager.",
        "Check all social media, messages, stories on VK, Telegram, Instagram, TikTok.",
        "Call all friends, classmates, their parents. Ask where the child might be.",
        "Check bank cards — recent transactions will indicate direction.",
        "Check places where the teenager hangs out: park, mall, station, abandoned buildings, friends' houses.",
        "Prepare a recent photo, clothing description, phone number for the police.",
        "If you have location data — give it to the police and head there.",
        "Upon return — don't yell, talk calmly. Find out the reasons."
      ],
      warnings: [
        "Don't let the police refuse — they are required to accept the report immediately.",
        "Don't threaten or blame after returning — it will destroy trust.",
        "If the teen runs away repeatedly — need a psychologist and family therapy."
      ]
    },
    // ========================================
    // 5. Suspected abduction — emergency measures
    // ========================================
    {
      id: "abduction_suspicion",
      title: "🚨 Suspected abduction or taken by a stranger",
      description: "If there is reason to believe the child was taken by force — act instantly.",
      conditions: { lost_type: ["abduction"], time_missing: ["recent", "short", "medium"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Rescue and arrest of perpetrator",
      tags: ["abduction", "kidnapping", "emergency"],
      steps: [
        "Immediately call 911/112. Report: child abduction, description of kidnapper, vehicle, direction, location.",
        "If you have video footage — save it and give to police.",
        "Save all records, suspicious messages, calls.",
        "Don't try to negotiate with the kidnapper yourself — trust the police.",
        "Inform all close ones to also report any information.",
        "Prepare a photo of the child, clothing description, special features for the search.",
        "When found — immediately see a psychologist and go to the hospital for examination."
      ],
      warnings: [
        "Don't delay — abductions are solved most often in the first hours.",
        "Don't share details on social media that could interfere with police work.",
        "Child abduction is a serious crime, don't try to solve it alone."
      ]
    },
    // ========================================
    // 6. Missing after online communication — grooming
    // ========================================
    {
      id: "online_meeting",
      title: "💻 Missing after online meeting — grooming and danger",
      description: "Child went to meet an online acquaintance — could be a groomer or kidnapper.",
      conditions: { lost_type: ["online"], time_missing: ["short", "medium", "long"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Rescue from grooming / abduction",
      tags: ["online", "grooming", "emergency"],
      steps: [
        "Check all messages: VK, Telegram, WhatsApp, Instagram, Discord, game chats. Look for addresses, photos, meeting plans.",
        "Save ALL screenshots of messages, profiles, photos, links.",
        "Call the police (911/112), report the meeting with a stranger.",
        "Notify the school, volunteers (search organizations).",
        "Check bank cards — were there withdrawals, purchases, trips.",
        "If the child is in contact — write calmly, ask them to come back, don't threaten.",
        "Upon return — immediately see a psychologist, even if 'nothing happened'."
      ],
      warnings: [
        "Don't blame the child — they are a victim of deception, not at fault.",
        "Don't delete the conversation — it's evidence for the police.",
        "Grooming is a criminal offense — file a police report."
      ]
    },
    // ========================================
    // 7. Ran away after an argument (teen) — gentle search
    // ========================================
    {
      id: "runaway_after_conflict",
      title: "🏃 Teenager ran away after an argument — how to rebuild trust",
      description: "Emotional runaway is most often a desire to be heard, not to be punished.",
      conditions: { lost_type: ["runaway"], time_missing: ["short", "medium"], age: ["teen"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2–12 hours",
      yield_estimate: "Return and relationship repair",
      tags: ["runaway", "teen", "conflict"],
      steps: [
        "Call friends, classmates, their parents — ask where the teenager might be.",
        "Check social media — they often post stories or write in chats.",
        "Don't yell or threaten in messages — it will push them away.",
        "If no contact for 6 hours — call the police (don't wait).",
        "Upon return — hug them, thank them for coming back, then calmly ask about the reasons.",
        "See a family psychologist to work through the conflict.",
        "If runaways are repeated — consider a temporary change of environment (grandparents, trip)."
      ],
      warnings: [
        "Don't punish for running away — it will destroy the remaining trust.",
        "Running away is a cry for help, not a whim. Find the cause.",
        "Don't dismiss the teen's feelings — they are real to them."
      ]
    },
    // ========================================
    // 8. Universal algorithm for missing child
    // ========================================
    {
      id: "general_missing",
      title: "🔍 Universal algorithm for a missing child",
      description: "If you don't know where to start — use this checklist. It works for any situation.",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–6 hours",
      yield_estimate: "Organized search",
      tags: ["general", "search", "police"],
      steps: [
        "Stay calm. Panic clouds judgment.",
        "Call the child, send a message asking them to call back.",
        "Check the last known location: school, kindergarten, club, friend's house.",
        "Interview everyone who might have seen the child: teachers, neighbors, store clerks, security guards.",
        "If more than 3 hours have passed (or 1 hour for children under 7) — call the police.",
        "Prepare a recent photo, clothing description, special features (birthmarks, scars).",
        "Notify volunteers: search and rescue organizations.",
        "Create a social media post with photo, contact info, don't share home address.",
        "Check hospitals, morgues (it's hard, but necessary).",
        "Don't stop searching until the child is found."
      ],
      warnings: [
        "Don't wait 3 days — the waiting period doesn't apply to children.",
        "Don't let the police refuse to accept your report — it's illegal.",
        "Don't delete messages or hide information — it could help."
      ]
    }
  ]
};

// ===== EXPORT =====
window.lostDataEn = lostDataEn;
