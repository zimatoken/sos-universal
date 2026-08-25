// modules/children/data/en/lost-en.js
// === MODULE: CHILDREN — MISSING CHILD ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "children",
    category: "lost",
    version: "1.0.0",
    lang: "en",
    title: "Missing Child",
    description: "Child didn't come home from school, isn't answering calls, went missing — action plan",
    icon: "🔍",
    color: "#db2777"
  },

  questions: [
    {
      id: "lost_type",
      type: "single",
      text: "What is the situation?",
      options: [
        { id: "not_home", label: "🏫 Didn't come home from school / activities", tags: ["not_home"] },
        { id: "no_contact", label: "📵 Not answering calls / messages (24h+)", tags: ["no_contact"] },
        { id: "runaway", label: "🏃 Ran away after a fight", tags: ["runaway"] },
        { id: "abduction", label: "🚨 Suspect abduction / taken by stranger", tags: ["abduction"] },
        { id: "online", label: "💻 Went missing after online communication", tags: ["online"] },
        { id: "lost_mall", label: "🏬 Lost in a mall / in the city", tags: ["lost_mall"] },
        { id: "lost_forest", label: "🌲 Lost in the forest / nature", tags: ["lost_forest"] },
        { id: "lost_transport", label: "🚌 Lost in transport / at a stop", tags: ["lost_transport"] }
      ]
    },
    {
      id: "time_missing",
      type: "single",
      text: "How much time has passed?",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online", "lost_mall", "lost_forest", "lost_transport"] },
      options: [
        { id: "less_1h", label: "⏰ Less than 1 hour", tags: ["recent"] },
        { id: "1_3h", label: "📅 1–3 hours", tags: ["short"] },
        { id: "3_12h", label: "📆 3–12 hours", tags: ["medium"] },
        { id: "more_12h", label: "📈 More than 12 hours", tags: ["long"] }
      ]
    },
    {
      id: "age",
      type: "single",
      text: "How old is the child?",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online", "lost_mall", "lost_forest", "lost_transport"] },
      options: [
        { id: "preschool", label: "👶 3–7 years old", tags: ["preschool"] },
        { id: "school_age", label: "🧑 7–12 years old", tags: ["school_age"] },
        { id: "teen", label: "🧑‍🎓 Teenager 13–17 years old", tags: ["teen"] }
      ]
    },
    {
      id: "has_phone",
      type: "single",
      text: "Does the child have a phone?",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online", "lost_mall", "lost_forest", "lost_transport"] },
      options: [
        { id: "phone_yes", label: "✅ Yes, phone with them", tags: ["phone_yes"] },
        { id: "phone_no", label: "❌ No, without a phone", tags: ["phone_no"] },
        { id: "phone_unknown", label: "❓ Don't know", tags: ["phone_unknown"] }
      ]
    },
    {
      id: "last_location",
      type: "single",
      text: "Where did you last see the child?",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online", "lost_mall", "lost_forest", "lost_transport"] },
      options: [
        { id: "school", label: "🏫 School / daycare / activity", tags: ["school_location"] },
        { id: "home", label: "🏠 Home / entrance / yard", tags: ["home_location"] },
        { id: "mall", label: "🏬 Mall / store", tags: ["mall_location"] },
        { id: "forest", label: "🌲 Forest / park / nature", tags: ["forest_location"] },
        { id: "transport", label: "🚌 Transport / stop", tags: ["transport_location"] },
        { id: "unknown", label: "❓ Don't know / not sure", tags: ["unknown_location"] }
      ]
    },
    {
      id: "last_outfit",
      type: "single",
      text: "What was the child wearing?",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online", "lost_mall", "lost_forest", "lost_transport"] },
      options: [
        { id: "outfit_known", label: "✅ I remember, can describe", tags: ["outfit_known"] },
        { id: "outfit_unknown", label: "❌ I don't remember", tags: ["outfit_unknown"] },
        { id: "outfit_partial", label: "⚠️ Partially remember", tags: ["outfit_partial"] }
      ]
    },
    {
      id: "special_marks",
      type: "single",
      text: "Does the child have any distinguishing marks?",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online", "lost_mall", "lost_forest", "lost_transport"] },
      options: [
        { id: "marks_yes", label: "✅ Yes, there are distinguishing marks", tags: ["marks_yes"] },
        { id: "marks_no", label: "❌ No distinguishing marks", tags: ["marks_no"] },
        { id: "marks_unknown", label: "❓ Don't know", tags: ["marks_unknown"] }
      ]
    },
    {
      id: "needs_medication",
      type: "single",
      text: "Does the child need medication (insulin, inhaler, pills)?",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online", "lost_mall", "lost_forest", "lost_transport"] },
      options: [
        { id: "med_yes", label: "✅ Yes, needs medication", tags: ["med_yes"] },
        { id: "med_no", label: "❌ No, doesn't need medication", tags: ["med_no"] },
        { id: "med_unknown", label: "❓ Don't know", tags: ["med_unknown"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. DIDN'T COME HOME FROM SCHOOL
    // ============================================================
    {
      id: "missing_immediate",
      title: "🚨 Child didn't come home — first 3 hours are critical",
      description: "Statistics: 76% of missing children are found within the first 3 hours. Every minute counts.",
      conditions: { lost_type: ["not_home"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Maximum chances to find",
      tags: ["missing", "search", "emergency"],
      steps: [
        "STEP 1. DON'T panic. Activate 'search mode': gather all relatives, friends, neighbors.",
        "STEP 2. Call the child. If phone is off — check geolocation.",
        "STEP 3. Contact everyone: school, coach, friends' parents.",
        "STEP 4. If child is missing for over 3 hours (teen) or 1 hour (young) — call 911.",
        "STEP 5. File a police report. Get a case number.",
        "STEP 6. Post on social media: photo, description, contacts.",
        "STEP 7. Share photos in parent chats.",
        "STEP 8. Check CCTV footage.",
        "STEP 9. Check bank cards (last purchases)."
      ],
      warnings: [
        "DON'T wait 'a little longer' — the first 3 hours are critical.",
        "DON'T spread false information on social media.",
        "DON'T blame the child after they're found."
      ]
    },

    // ============================================================
    // 2. LOST IN A MALL
    // ============================================================
    {
      id: "lost_in_mall",
      title: "🏬 Child lost in a mall — algorithm",
      description: "Many people, noise, easy to get lost. Both you and the child should have a plan.",
      conditions: { lost_type: ["lost_mall"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–30 minutes",
      yield_estimate: "Quick reunion",
      tags: ["mall", "lost", "search"],
      steps: [
        "STEP 1. Stop. Don't run in panic. Look around.",
        "STEP 2. Go to the last place you saw the child.",
        "STEP 3. Go to the information desk / security. Describe the child.",
        "STEP 4. Malls have PA systems — they'll make an announcement.",
        "STEP 5. Stand in a visible place so the child can find you.",
        "STEP 6. If not found in 15 minutes — go to police (malls have a post).",
        "STEP 7. Teach your child: 'If lost — go to a store employee or security'."
      ],
      warnings: [
        "DON'T yell or panic in front of the child.",
        "DON'T leave the mall without the child."
      ]
    },

    // ============================================================
    // 3. LOST IN THE FOREST
    // ============================================================
    {
      id: "lost_in_forest",
      title: "🌲 Child lost in the forest — survival rules",
      description: "The forest is the most dangerous environment. The child may panic and go further. Act correctly.",
      conditions: { lost_type: ["lost_forest"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Life saved",
      tags: ["forest", "lost", "survival"],
      steps: [
        "STEP 1. Immediately call 112 — forest search requires a quick response.",
        "STEP 2. Stay in place. Don't run in different directions.",
        "STEP 3. Shout the child's name loudly. Pause — listen for a response.",
        "STEP 4. If the child has a phone — call, send geolocation.",
        "STEP 5. Check ravines, streams, bushes.",
        "STEP 6. Leave a bright object as a marker.",
        "STEP 7. Call search teams (Lisa Alert)."
      ],
      warnings: [
        "DON'T send a child into the forest without an adult.",
        "DON'T waste time on self-search in the forest — call professionals."
      ]
    },

    // ============================================================
    // 4. LOST IN TRANSPORT
    // ============================================================
    {
      id: "lost_in_transport",
      title: "🚌 Child lost in transport — what to do",
      description: "In the metro, bus, train — it's easy to get lost. Act quickly.",
      conditions: { lost_type: ["lost_transport"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Reunion",
      tags: ["transport", "lost", "search"],
      steps: [
        "STEP 1. If the child got off without you — call them immediately.",
        "STEP 2. Contact the metro/bus/train dispatcher. Describe the child.",
        "STEP 3. Metro has PA — they'll announce on all stations.",
        "STEP 4. If the child got off at a station — check exits, information desks.",
        "STEP 5. Teach your child: 'If lost in transport — get off at the next stop and wait'.",
        "STEP 6. If not found in 30 minutes — call 911."
      ],
      warnings: [
        "DON'T leave the child alone in the carriage.",
        "DON'T get off the train without the child."
      ]
    },

    // ============================================================
    // 5. NO CONTACT (24h+)
    // ============================================================
    {
      id: "no_contact_search",
      title: "📵 Not answering calls for 24h — what to do?",
      description: "24h without contact is a warning sign. Act systematically.",
      conditions: { lost_type: ["no_contact"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Location established",
      tags: ["no_contact", "missing", "search"],
      steps: [
        "STEP 1. Check the last phone geolocation.",
        "STEP 2. Contact the mobile operator (via police request).",
        "STEP 3. Check bank cards: last purchases, withdrawals.",
        "STEP 4. Check social media: was online, wrote to anyone.",
        "STEP 5. Contact all friends, classmates.",
        "STEP 6. File a police report immediately.",
        "STEP 7. Share photos on social media, parent chats."
      ],
      warnings: [
        "24h without contact for a minor is an emergency.",
        "DON'T think 'they just don't want to talk'."
      ]
    },

    // ============================================================
    // 6. ABDUCTION
    // ============================================================
    {
      id: "abduction_response",
      title: "🚨 Child abduction — rescue algorithm",
      description: "Abduction is the most dangerous situation. Act clearly and quickly. Every minute can cost a life.",
      conditions: { lost_type: ["abduction"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Maximum chances of rescue",
      tags: ["abduction", "kidnapping", "emergency"],
      steps: [
        "STEP 1. IMMEDIATELY call 911. Report: where and when, description of the abductor, car.",
        "STEP 2. Remember all details: height, clothing, tattoos, scars, accent.",
        "STEP 3. Check CCTV footage. Save recordings.",
        "STEP 4. Contact the mobile operator — last phone signal.",
        "STEP 5. Share photos on social media, parent chats.",
        "STEP 6. Contact search teams (Lisa Alert).",
        "STEP 7. After rescue — see a psychologist."
      ],
      warnings: [
        "DON'T try to find the abductor yourself.",
        "DON'T share information with media that could hinder the search."
      ]
    },

    // ============================================================
    // 7. TEENAGER RAN AWAY
    // ============================================================
    {
      id: "runaway_teen",
      title: "🏃 Teenager ran away from home — why and how to find",
      description: "A runaway teenager is not a criminal. It's a cry for help. Find them, talk, don't punish.",
      conditions: { lost_type: ["runaway"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1–24 hours",
      yield_estimate: "Return and understanding",
      tags: ["runaway", "teen", "psychology"],
      steps: [
        "STEP 1. Don't panic. Teens often go to friends, parks, malls.",
        "STEP 2. Call friends, classmates, their parents.",
        "STEP 3. Check social media: VK, Telegram, Instagram, TikTok.",
        "STEP 4. Check bank cards: where they spent money.",
        "STEP 5. If > 6 hours — call 911.",
        "STEP 6. If the teen is in contact — write calmly, without threats.",
        "STEP 7. After return — DON'T punish. Talk.",
        "STEP 8. See a family psychologist."
      ],
      warnings: [
        "DON'T threaten with police or psychiatric hospital.",
        "DON'T blame friends.",
        "Running away is an attempt to cope with a problem, not 'bad behavior'."
      ]
    },

    // ============================================================
    // 8. MISSING AFTER ONLINE COMMUNICATION
    // ============================================================
    {
      id: "online_predator",
      title: "💻 Missing after online communication — grooming and danger",
      description: "Online predators use social media, games, messengers. The child may not understand the danger.",
      conditions: { lost_type: ["online"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Rescue from grooming / abduction",
      tags: ["online", "predator", "grooming"],
      steps: [
        "STEP 1. Immediately check all messages.",
        "STEP 2. Save EVERYTHING: screenshots, photos, links.",
        "STEP 3. Check browser history, search queries.",
        "STEP 4. If the child went to a meeting — call 911 IMMEDIATELY.",
        "STEP 5. Block the person. Change passwords.",
        "STEP 6. After rescue — DON'T blame the child.",
        "STEP 7. File a police report.",
        "STEP 8. See a child psychologist."
      ],
      warnings: [
        "DON'T blame the child.",
        "DON'T delete messages before police.",
        "Groomers are professional manipulators."
      ]
    },

    // ============================================================
    // 9. SEARCH TEAMS
    // ============================================================
    {
      id: "search_teams",
      title: "🔦 Search teams — how and where to contact",
      description: "Search teams are volunteers who help find missing people. Contact them immediately.",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Professional search",
      tags: ["search", "volunteers", "teams"],
      steps: [
        "STEP 1. Lisa Alert — main search team in Russia. Phone: 8-800-700-54-52 (24/7).",
        "STEP 2. Search for missing children — phone: 8-800-700-54-52.",
        "STEP 3. VK: 'Lisa Alert' groups in your region.",
        "STEP 4. Telegram: search team channels.",
        "STEP 5. When contacting: photo, clothing description, special marks, location.",
        "STEP 6. Search teams work for free. Don't agree to paid services.",
        "STEP 7. Cooperate with police — search teams work together."
      ],
      warnings: [
        "Search teams are free volunteers. Don't pay for search.",
        "DON'T delay contacting — every minute matters."
      ]
    },

    // ============================================================
    // 10. CHILD FOUND — WHAT TO DO
    // ============================================================
    {
      id: "found_child",
      title: "✅ Child found — how to proceed",
      description: "The child is found — that's the main thing. But it's important to handle the situation correctly.",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online", "lost_mall", "lost_forest", "lost_transport"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Search completed + support",
      tags: ["found", "reunion", "psychology"],
      steps: [
        "STEP 1. Hug the child. Say: 'You're safe. I'm so glad you're found'.",
        "STEP 2. DON'T scold or punish. Support is what matters now.",
        "STEP 3. Notify everyone who helped: social media, police, search teams.",
        "STEP 4. Check the child's health: injuries, scratches, frostbite — see a doctor.",
        "STEP 5. If the child is withdrawn, scared — don't push. Give time.",
        "STEP 6. Later, when calm, talk: 'What happened? How did you feel?'",
        "STEP 7. If the child ran away — find the reason. They may need a psychologist."
      ],
      warnings: [
        "DON'T scold the child — it destroys trust.",
        "DON'T ignore their feelings — they were as scared as you.",
        "DON'T pretend 'nothing happened' — discuss the situation."
      ]
    }
  ]
});