// === MODULE: CHILDREN — MISSING CHILD ===
const lostDataEn = {
  category: "lost",
  title: "🔍 Missing Child",
  description: "Child didn't come home from school, isn't answering calls, went missing — action algorithm",

  questions: [
    {
      id: "lost_type",
      text: "What is the situation?",
      type: "single",
      options: [
        { id: "not_home", label: "🏫 Didn't come home from school / activity / friends", tags: ["not_home"] },
        { id: "no_contact", label: "📵 Not answering calls / messages (24+ hours)", tags: ["no_contact"] },
        { id: "runaway", label: "🏃 Ran away from home after an argument", tags: ["runaway"] },
        { id: "abduction", label: "🚨 Suspect abduction / taken by a stranger", tags: ["abduction"] },
        { id: "online", label: "💻 Went missing after online / social media communication", tags: ["online"] }
      ]
    },
    {
      id: "time_missing",
      text: "How much time has passed?",
      type: "single",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online"] },
      options: [
        { id: "less_1h", label: "⏰ Less than 1 hour", tags: ["recent"] },
        { id: "1_3h", label: "📅 1–3 hours", tags: ["short"] },
        { id: "3_12h", label: "📆 3–12 hours", tags: ["medium"] },
        { id: "more_12h", label: "📈 More than 12 hours", tags: ["long"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      conditions: { lost_type: ["not_home", "no_contact", "runaway", "abduction", "online"] },
      options: [
        { id: "preschool", label: "👶 3–7 years old", tags: ["preschool"] },
        { id: "school", label: "🧑 7–12 years old", tags: ["school_age"] },
        { id: "teen", label: "🧑‍🎓 Teenager 13–17 years old", tags: ["teen"] }
      ]
    }
  ],

  solutions: [
    // ==========================================
    // 1. DIDN'T COME HOME FROM SCHOOL / ACTIVITY
    // ==========================================
    {
      id: "missing_immediate",
      title: "🚨 Child didn't come home — the first 3 hours are critical",
      description: "Statistics: 76% of missing children are found in the first 3 hours. Every minute counts.",
      conditions: { lost_type: ["not_home"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Maximum chances of finding",
      tags: ["missing", "search", "emergency"],
      steps: [
        "DON'T panic. Activate 'search mode': gather all relatives, friends, neighbors. Divide areas",
        "Call the child. If phone is off / unavailable — check last location: Find My iPhone, Google Timeline, Life360, Telegram location",
        "Contact everyone: school, kindergarten, coach, friends' parents, neighbors. Ask: when was the child last seen, what did they say, where were they going, who were they with",
        "If the child has been missing for more than 3 hours (teen) or 1 hour (young child) — call 911. A missing child — don't wait 3 days like for adults. Police must respond immediately",
        "File a missing person report at the nearest police station. Get a receipt (case number). If they refuse — demand a written refusal, contact the precinct officer, the prosecutor's office",
        "Create a post on social media (Facebook, Telegram, Instagram): photo of the child, description, where last seen, contacts. Ask for reposts. Don't share home address — safety",
        "Share photos in parent chats of the school, neighborhood, yard. Ask to forward. The more people know — the higher the chances",
        "Check security cameras: entrance, yard, school, stores, bus stops, subway. Save footage. Give to police",
        "Check the child's bank cards: statements, recent purchases, ATM withdrawals. This will indicate direction",
        "If a teenager — check social media, messages, diary, phone notes. Don't invade personal space unnecessarily, but life is more important"
      ],
      warnings: [
        "DON'T wait 'a little longer' — the first 3 hours are critical. Police must accept a missing child report immediately, without waiting (Article 144 of the Criminal Procedure Code)",
        "DON'T spread false information on social media — it interferes with the search and scares the child (if they just went for a walk)",
        "DON'T blame the child after finding them (even if they ran away). This will close trust forever. Talk calmly, find out the reasons",
        "If the child is found with a stranger — immediately go to the police. Even if 'nothing happened' — it's a crime (Articles 132, 135 of the Criminal Code)"
      ]
    },
    {
      id: "missing_young_child",
      title: "👶 Young child (3–7 years) missing — emergency search",
      description: "Young children can't survive on the street for long. Act immediately, even if only 15 minutes have passed.",
      conditions: { lost_type: ["not_home", "no_contact"], age: ["preschool"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Quick discovery",
      tags: ["preschool", "missing", "emergency"],
      steps: [
        "A young child can't go far. Check: entrance, yard, playgrounds, basements, attics, elevators, trash containers",
        "Young children hide in closets, under beds, in the bathroom. Check EVERY room, even if it seems 'they couldn't be there'",
        "If not found in the house and yard in 15–20 minutes — call 911. Don't wait!",
        "Go outside, call the child's name. Ask neighbors and passersby to help search",
        "Check bodies of water (ponds, fountains) — young children can fall in",
        "Notify the school/kindergarten, even if the child wasn't supposed to be there"
      ],
      warnings: [
        "A young child cannot return on their own from another area. DON'T wait — search immediately",
        "Bodies of water are the main danger for young children. Check them first",
        "DON'T think 'everything will be fine' — it will only be fine if you find them quickly"
      ]
    },
    // ==========================================
    // 2. NOT ANSWERING CALLS (24+ hours)
    // ==========================================
    {
      id: "no_contact_search",
      title: "📵 Not answering calls for 24 hours — what to do?",
      description: "24 hours without contact — a worrying signal. Act systematically.",
      conditions: { lost_type: ["no_contact"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Determining location",
      tags: ["no_contact", "missing", "search"],
      steps: [
        "Check the phone's last location: Find My iPhone, Google Timeline, Life360, Telegram location",
        "Contact the mobile provider — they may provide the last cell towers the phone connected to (only upon police request)",
        "Check bank cards: recent purchases, ATM withdrawals, transit payments — this will indicate the route",
        "Check social media: were they online, did they message anyone, did they like anything",
        "Contact all friends, classmates, their parents. Ask: were they seen, what did they write, where were they going",
        "If the child is a minor — file a police report immediately. Don't wait",
        "Share photos on social media, parent chats, neighborhood groups"
      ],
      warnings: [
        "24 hours without contact for a minor is already an emergency. Don't wait 3 days",
        "DON'T think 'they just don't want to talk' — maybe they can't",
        "If the child is found — don't scold them for not answering. Find out the reason"
      ]
    },
    // ==========================================
    // 3. ABDUCTION
    // ==========================================
    {
      id: "abduction_response",
      title: "🚨 Child abduction — rescue algorithm",
      description: "Abduction is the most dangerous situation. Act clearly and quickly. Every minute could cost a life.",
      conditions: { lost_type: ["abduction"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Maximum chances of rescue",
      tags: ["abduction", "kidnapping", "emergency"],
      steps: [
        "IMMEDIATELY call 911. Report: where and when last seen, description of the abductor, vehicle make/plate number, direction of travel",
        "Remember all details: height, clothing, tattoos, scars, speech characteristics, accent of the abductor. Write it down immediately while memory is fresh",
        "Check security cameras: entrance, yard, stores, bus stops. Save footage. Give to police",
        "Contact the mobile provider — they may provide data on the phone's last signal",
        "Share photos on social media, parent chats, neighborhood groups. Ask for reposts",
        "Contact search and rescue organizations — they work with police",
        "After the child is freed — immediately see a psychologist. Abduction is severe trauma",
        "Don't give interviews to media until coordinating with police — it could interfere with the search"
      ],
      warnings: [
        "Abduction is not 'maybe I imagined it'. If you suspect it — act",
        "DON'T try to search for the abductor yourself — it's dangerous. Give all information to police",
        "DON'T share information with media that could interfere with the search (where police are going, what evidence)",
        "Abduction is a criminal offense (Article 126 of the Criminal Code). Police must respond immediately"
      ]
    },
    // ==========================================
    // 4. TEEN RAN AWAY
    // ==========================================
    {
      id: "runaway_teen",
      title: "🏃 Teenager ran away from home — why and how to find them",
      description: "A runaway teenager is not a criminal. It's a cry for help. Find them, talk, don't punish.",
      conditions: { lost_type: ["runaway"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1–24 hours",
      yield_estimate: "Return and understanding",
      tags: ["runaway", "teen", "psychology"],
      steps: [
        "Don't panic. Teenagers often go to friends, parks, shopping malls, train stations. Most return on their own within 24 hours",
        "Call friends, classmates, their parents. Ask: were they seen, what did they say, where were they going. Don't yell at them — they might hide things",
        "Check social media: Facebook, Telegram, Instagram, TikTok. Teens often post plans, stories. Don't write angry comments — it will push them away",
        "Check bank cards: where they withdrew money, what they bought. This will indicate the area",
        "If more than 6 hours have passed — call 911. A missing teenager is still a missing person. Police must search",
        "If the teenager is in contact (reading messages but not responding) — write calmly: 'We're worried, we love you, come home, let's talk'. No threats, no manipulation",
        "After they return — DO NOT punish, DO NOT scold. This will close trust forever. Talk: what happened, what's bothering them, what can be changed",
        "See a family psychologist. Running away is a symptom: bullying, depression, family problems, school pressure. Treat the cause, not the symptom",
        "If the teenager runs away regularly — consider temporary living with grandparents/relatives, changing schools, working with a psychologist"
      ],
      warnings: [
        "DON'T threaten the teenager with police, psychiatric hospital, taking away their phone — this will only push them away. Talk about love and concern",
        "DON'T blame friends — they may be the only support. Better to befriend the friends' parents, build a network",
        "Running away is not 'bad behavior' but an attempt to cope with an unbearable situation. Punishment will worsen the problem",
        "If the teenager is in contact but refuses to return — don't pressure. Arrange a meeting in a neutral place (cafe, park) with a psychologist or trusted adult"
      ]
    },
    {
      id: "runaway_teen_older",
      title: "🧑‍🎓 Teenager 16–17 ran away — search specifics",
      description: "Older teenagers may leave to another city, stay with friends, rent an apartment. The search is different.",
      conditions: { lost_type: ["runaway"], age: ["teen"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–7 days",
      yield_estimate: "Returning home",
      tags: ["runaway", "teen", "older"],
      steps: [
        "Teenagers 16–17 may go to another city. Check train/bus tickets purchased with their card",
        "Check listings on local classifieds — they might be renting an apartment",
        "Check social media: they may have created a new account, talking to someone in another city",
        "At 16 in many countries they can get a job. Check job listings they viewed",
        "If more than 12 hours have passed — police. They can check stations, hostels",
        "Don't cut off paths to return — make it clear that home is always open"
      ],
      warnings: [
        "At 16–17, the teenager is almost an adult. Force and threats don't work — only conversation and trust",
        "DON'T publicly scold them — it's humiliation and will break the relationship",
        "If they run away regularly — consider changing schools, cities, psychotherapy"
      ]
    },
    // ==========================================
    // 5. WENT MISSING AFTER ONLINE CONTACT
    // ==========================================
    {
      id: "online_predator",
      title: "💻 Went missing after online communication — grooming and danger",
      description: "Online predators use social media, games, messengers. The child may not understand the danger.",
      conditions: { lost_type: ["online"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Rescue from grooming / abduction",
      tags: ["online", "predator", "grooming"],
      steps: [
        "Immediately check messages: Facebook, Telegram, WhatsApp, Instagram, Discord, game chats (Roblox, Minecraft). Look for: arranged meetings, addresses, photos, video calls",
        "Save EVERYTHING: screenshots of messages, photos of the contact, profile links, IP addresses (if you can get them). These are evidence for police",
        "Check browser history, search queries, deleted messages (Telegram 'recently deleted', trash folder)",
        "If the child arranged a meeting or has already left — call 911 immediately. Report: online communication, suspect's profile, meeting location",
        "Block the contact on all of the child's platforms. Change passwords. Enable two-factor authentication",
        "After finding them — DON'T scold the child. Predators manipulate, deceive, blackmail. The child is a victim, not at fault",
        "File a police report for indecent acts / abduction (Articles 132, 135 of the Criminal Code). Provide screenshots and messages",
        "See a child psychologist. Grooming is traumatic: shame, fear, guilt. The child may withdraw, become depressed",
        "Prevention: talk to children about online dangers. Rule: don't meet online friends without parents. Don't send intimate photos/videos. Don't share address, school"
      ],
      warnings: [
        "DON'T blame the child for 'stupidity' — predators professionally manipulate, using emotions, fear, loneliness. Any child can become a victim",
        "DON'T delete messages before going to police — these are key evidence. Take screenshots, save to the cloud",
        "Predators often pose as peers, use fake photos, build trust over months. The child may be in love — don't yell, explain",
        "Sexting (sharing intimate photos) is criminally punishable even between minors. But the child is a victim, not a criminal. Consult a lawyer"
      ]
    }
  ]
};

// ===== EXPORT =====
window.lostDataEn = lostDataEn;