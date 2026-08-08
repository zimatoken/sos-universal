// === MODULE: SCHOOL (ENGLISH) ===
const schoolDataEn = {
  category: "school",
  title: "🏫 School and Studies",
  description: "Academic problems, conflicts with teachers, bullying, school refusal, aggression, substances, career guidance — how to help your child",

  questions: [
    {
      id: "problem",
      text: "What is the main problem?",
      type: "single",
      options: [
        { id: "grades", label: "Poor grades / failing / doesn't understand material", tags: ["grades"] },
        { id: "teacher_conflict", label: "Conflict with teacher / injustice / insults", tags: ["teacher"] },
        { id: "refusal", label: "Child refuses to go to school / truancy / fears", tags: ["refusal"] },
        { id: "bullying", label: "Bullying / harassment / exclusion from class", tags: ["bullying"] },
        { id: "substances", label: "Smoking / alcohol / drugs (using or being offered)", tags: ["substances"] },
        { id: "aggression", label: "Aggression / fights / disciplinary issues", tags: ["aggression"] },
        { id: "friends", label: "Problems with classmates / no friends / loneliness", tags: ["friends"] },
        { id: "future", label: "Doesn't know where to apply / doesn't want to continue education", tags: ["future"] },
        { id: "exams", label: "Fear of exams / GCSE / A-levels / stress", tags: ["exams"] }
      ]
    },
    {
      id: "age_group",
      text: "Age / grade?",
      type: "single",
      options: [
        { id: "primary", label: "Grades 1–4 (6–10 years)", tags: ["primary"] },
        { id: "middle", label: "Grades 5–9 (10–15 years)", tags: ["middle"] },
        { id: "high", label: "Grades 10–12 / college (15–18 years)", tags: ["high"] }
      ]
    },
    {
      id: "urgency",
      text: "How long and how serious?",
      type: "single",
      options: [
        { id: "acute", label: "Happened today / yesterday — acute situation", tags: ["acute"] },
        { id: "accumulated", label: "Built up over weeks / months", tags: ["accumulated"] },
        { id: "chronic", label: "Chronic problem (6+ months)", tags: ["chronic"] }
      ]
    },
    {
      id: "child_reaction",
      text: "How is the child reacting to the problem?",
      type: "single",
      options: [
        { id: "calm", label: "Calm, open to discussion, looking for solutions", tags: ["open"] },
        { id: "shame", label: "Withdrawn, ashamed, afraid of punishment", tags: ["closed"] },
        { id: "aggressive", label: "Aggressive, denies, blames others", tags: ["defensive"] },
        { id: "depressed", label: "Apathetic, talks about hopelessness, sees no point", tags: ["depressed"] }
      ]
    },
    {
      id: "parental_support",
      text: "Does the child have support at home and at school?",
      type: "single",
      options: [
        { id: "full_support", label: "Yes, I support and school helps", tags: ["support_yes"] },
        { id: "home_only", label: "I support, but school ignores / doesn't help", tags: ["school_no"] },
        { id: "school_only", label: "School helps, but no understanding at home", tags: ["home_no"] },
        { id: "no_support", label: "No one supports, child is alone", tags: ["support_no"] }
      ]
    },
    {
      id: "grades_details",
      text: "If grades are the issue — specify",
      condition: { problem: ["grades"] },
      options: [
        { id: "single_subject", label: "Struggling with one subject", tags: ["one_subject"] },
        { id: "multiple", label: "Falling behind in several subjects", tags: ["multiple"] },
        { id: "all", label: "Doesn't understand anything / total failure", tags: ["all_subjects"] },
        { id: "motivation", label: "Doesn't want to study, despite ability", tags: ["motivation"] }
      ]
    },
    {
      id: "bullying_type",
      text: "If bullying — what type?",
      condition: { problem: ["bullying"] },
      options: [
        { id: "physical_bully", label: "Physical violence (pushing, hitting, taking things)", tags: ["physical"] },
        { id: "verbal_bully", label: "Words, insults, threats, name-calling", tags: ["verbal"] },
        { id: "social_bully", label: "Exclusion, boycott, gossip, kicked out of chats", tags: ["social"] },
        { id: "cyber_bully", label: "Cyberbullying (social media, messengers)", tags: ["cyber"] }
      ]
    },
    {
      id: "substance_details",
      text: "If substance use — what exactly?",
      condition: { problem: ["substances"] },
      options: [
        { id: "cigarettes", label: "Smoking cigarettes / vaping (nicotine)", tags: ["smoking"] },
        { id: "alcohol", label: "Drinking alcohol", tags: ["alcohol"] },
        { id: "drugs", label: "Drugs / spice / bath salts / marijuana", tags: ["drugs"] },
        { id: "offered", label: "Being offered, but child refuses / hasn't tried", tags: ["offered"] }
      ]
    },
    {
      id: "exam_type",
      text: "If exams — which ones?",
      condition: { problem: ["exams"] },
      options: [
        { id: "oge", label: "GCSE / middle school final exams (9th grade)", tags: ["oge"] },
        { id: "ege", label: "A-levels / high school final exams (11th grade)", tags: ["ege"] },
        { id: "transfer", label: "Transfer exams / term tests", tags: ["transfer"] },
        { id: "other", label: "Other exams (entrance, international)", tags: ["other_exam"] }
      ]
    },
    {
      id: "aggression_target",
      text: "If aggression — who is it directed at?",
      condition: { problem: ["aggression"] },
      options: [
        { id: "peers", label: "At classmates (other children)", tags: ["peers"] },
        { id: "teachers", label: "At teachers / adults at school", tags: ["teachers"] },
        { id: "self", label: "At themselves (self-harm, risks)", tags: ["self_harm"] },
        { id: "parents", label: "At parents (at home)", tags: ["parents"] }
      ]
    }
  ],

  solutions: [
    // =================================