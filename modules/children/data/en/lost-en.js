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
    // =================================