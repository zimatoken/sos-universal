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
    // =================================