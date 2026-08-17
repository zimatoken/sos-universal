// === MODULE: CHILDREN — BULLYING ===
const bullyingDataEn = {
  category: "bullying",
  title: "💔 Bullying",
  description: "Physical violence, verbal abuse, cyberbullying, harassment — how to protect your child",

  questions: [
    {
      id: "bully_type",
      text: "What type of bullying?",
      type: "single",
      options: [
        { id: "physical", label: "👊 Physical violence (pushing, hitting, taking belongings)", tags: ["physical"] },
        { id: "verbal", label: "🗣️ Verbal abuse, insults, threats, blackmail", tags: ["verbal"] },
        { id: "cyber", label: "💻 Cyberbullying (social media, messengers, games)", tags: ["cyber"] },
        { id: "social", label: "👥 Social bullying (exclusion, gossip, boycott)", tags: ["social"] },
        { id: "sexual", label: "⚠️ Sexual harassment / inappropriate comments", tags: ["sexual"] }
      ]
    },
    {
      id: "role",
      text: "What is your child's role?",
      type: "single",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual"] },
      options: [
        { id: "victim", label: "😢 My child is a victim", tags: ["victim"] },
        { id: "witness", label: "👁️ I found out as a witness / from another child", tags: ["witness"] },
        { id: "aggressor", label: "😠 My child is the aggressor / bullies others", tags: ["aggressor"] }
      ]
    },
    {
      id: "duration",
      text: "How long has it been going on?",
      type: "single",
      conditions: { role: ["victim", "witness", "aggressor"] },
      options: [
        { id: "once", label: "Once / first case", tags: ["once"] },
        { id: "weeks", label: "Several weeks", tags: ["weeks"] },
        { id: "months", label: "Several months or more", tags: ["months"] }
      ]
    }
  ],

  solutions: [
    {
      id: "physical_bullying",
      title: "🥊 Physical violence — protection and action",
      description: "Pushing, hitting, taking belongings, money, phone. This is already a crime, not 'kids being kids'.",
      conditions: { bully_type: ["physical"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Stopping violence and protecting the child",
      tags: ["physical", "violence", "school"],
      steps: [
        "Talk to your child calmly, without yelling. Ask: what, where, when, who, how many times. Write everything down: dates, names, witnesses. This is evidence",
        "Examine the child: bruises, scrapes, torn clothing. Take photos. This is evidence",
        "If there are injuries — see a doctor, get a medical certificate. For serious injuries — ambulance and police",
        "Immediately talk to the homeroom teacher, principal, school social worker. Demand a written response and action plan. The school is obligated to respond",
        "If the school ignores it — file a police report (Article 116 — battery, Article 115 — bodily harm). Attach photos, medical certificates, records",
        "Contact the juvenile affairs commission. They can intervene regarding the aggressor's family",
        "Consider transferring to another class or school. Sometimes this is the only way to stop bullying. Don't see it as 'running away' — your child's safety is more important",
        "Enroll your child in martial arts (not for revenge, but for confidence). Psychologist, group therapy for bullying victims — rebuilding self-esteem",
        "Teach your child: shout 'Don't touch me!', run to a crowded place, call you immediately. Don't 'be a man about it' — this is dangerous"
      ],
      warnings: [
        "DON'T tell your child 'handle it yourself' — they already tried and couldn't. This worsens the trauma and closes trust",
        "DON'T go to 'confront' the aggressor or their parents yourself — this could end in a fight and criminal charges against you",
        "DON'T ignore it as 'just kids'. Repeated physical violence is a crime. Document every case",
        "If the child is afraid to go to school, cries in the morning, fakes illness — these are warning signs. Act immediately"
      ]
    },
    {
      id: "cyberbullying",
      title: "📲 Cyberbullying — online harassment",
      description: "Insults in chats, public pages, game lobbies, threats, sharing of photos/videos. No less painful than physical violence.",
      conditions: { bully_type: ["cyber"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Removing content, blocking aggressors",
      tags: ["cyber", "internet", "harassment"],
      steps: [
        "Take screenshots of EVERYTHING: insults, threats, photos, videos, aggressors' profiles. Save to cloud and computer. Screenshots are key evidence",
        "Don't delete messages until contacting police/school. Even if it hurts to read — these are evidence",
        "Block aggressors on all platforms. Enable 'friends only' mode on social media. Close comments",
        "If content is being shared (photos, videos, fakes) — contact platform support (Facebook, Telegram, TikTok, YouTube). Demand removal under community guidelines. State that the child is a minor",
        "If threats, extortion, sharing of intimate photos — immediately go to police. Articles: 137 (privacy violation), 119 (threats), 133 (defamation)",
        "Talk to the child: it's not their fault, they're not alone. Cyberbullying is deeply traumatic because 'everyone sees it'. Explain: aggressors are cowards hiding behind screens",
        "Temporarily limit internet access (not as punishment, but as a break). Replace with offline activities: walks, sports, meeting friends",
        "See a psychologist. Cyberbullying causes depression, suicidal thoughts. Don't underestimate it. National helpline: 8-800-2000-122 (free, anonymous)",
        "Prevention: don't share personal data, address, school. Don't add strangers. Change passwords regularly. Parental controls: Google Family Link, Kaspersky Safe Kids"
      ],
      warnings: [
        "DON'T take away the phone 'forever' as punishment — the child will lose connection with friends and their only support. Limit temporarily, explain why",
        "DON'T say 'just turn off your phone' — for a teenager, social media = social life. Ignoring doesn't solve the problem",
        "Sharing intimate photos of a minor is a criminal offense (Article 242.1). Even if they took the photo themselves — they are a victim, the aggressor bears responsibility",
        "DON'T publicly post messages on social media — this can worsen the situation and become a defamation charge against you"
      ]
    },
    {
      id: "verbal_social_bullying",
      title: "💬 Verbal and social bullying",
      description: "Insults, name-calling, gossip, exclusion from groups, boycott. Invisible scars that run deeper than physical ones.",
      conditions: { bully_type: ["verbal", "social"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–4 weeks",
      yield_estimate: "Restoring social connections and self-esteem",
      tags: ["verbal", "social", "psychology"],
      steps: [
        "Talk to your child without judgment. Ask: 'How do you feel? How long has this been going on? Who is around when it happens?' Write down names, dates, context",
        "Explain to your child: insults say more about the aggressor's problems than about them. Bullying is a weak person's way of feeling strong. It's not the truth",
        "Help find a 'safe haven': another club, activity, online community by interest. One true friendship can compensate for classroom bullying",
        "Talk to the homeroom teacher. Ask for: seating change, group assignments (to break up cliques), a class on tolerance. Don't name names publicly — it will make things worse",
        "If bullying is systemic (whole class) — demand intervention from the principal, school psychologist. As a last resort — transfer to another school. Your child's mental health is more important",
        "Schedule a visit with a psychologist. Verbal bullying causes anxiety, depression, low self-esteem, social phobia. Early help prevents chronic problems",
        "Teach your child techniques: 'I don't accept this' (calmly, without yelling), walking away, finding an adult. Don't 'give it back' — it escalates",
        "If insults escalate to threats, defamation, public humiliation — document and consult a lawyer. Articles: 133 (defamation), 119 (threats)"
      ],
      warnings: [
        "DON'T say 'don't pay attention' — for a child, classmates are their whole world. Ignoring doesn't work with systemic bullying",
        "DON'T force your child to 'be friends' with the aggressor or forgive them. It's their right to choose who they associate with. Forced 'friendship' is traumatic",
        "DON'T publicly accuse other children in parent chats — the aggressors' parents will become defensive, and your child will face retaliation",
        "Social bullying often accompanies cyberbullying. Check your child's phone — bullying may be continuing online"
      ]
    },
    {
      id: "my_child_aggressor",
      title: "⚠️ My child is the aggressor. What to do?",
      description: "Hard to admit, but important. The aggressor is also a suffering child. Punishment won't help — they need help.",
      conditions: { role: ["aggressor"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–6 months",
      yield_estimate: "Stopping aggression and helping the child",
      tags: ["aggressor", "psychology", "family"],
      steps: [
        "Don't deny or blindly defend your child. Listen, gather facts. Talk to teachers, other parents, witnesses. Objectivity is key",
        "Talk to your child calmly, without yelling. Ask: 'What do you feel when you do this? What do you get from it?' Aggression is a mask for fear, insecurity, trauma",
        "See a child psychologist. Aggression is a symptom: bullying at home, divorce, death, moving, pressure. Find the cause, don't fight the symptom",
        "Set clear boundaries: 'Bullying others is unacceptable. It causes pain. There will be consequences.' But consequences — not beatings, but loss of privileges, working with a psychologist",
        "Show your child the consequences: let them apologize (if ready), let them read stories of bullying victims. Develop empathy: 'How would you feel in their place?'",
        "Check the family: is there violence at home? Is any adult bullying? Children copy behavior models. If there's yelling and hitting at home — the child brings it to school",
        "Work with teachers and the school psychologist. Ask for: monitoring, seating change, individual plan. Don't hide the problem — it makes it worse",
        "If aggression is physical and serious — prepare for consequences. School, juvenile commission, police. But the main goal is not punishment, but behavior change through help"
      ],
      warnings: [
        "DON'T defend your child with 'my child couldn't do that' — this closes off the problem and worsens behavior. Acknowledgment is the first step to help",
        "DON'T hit your child for aggression — they'll learn that force solves problems. Violence breeds violence",
        "DON'T transfer to another school 'to make them forget'. Without working on themselves, the child will continue bullying in a new place. Changing schools is a last step, not the first",
        "Aggressors are often victims themselves. Don't divide the world into 'good' and 'bad'. Your child needs help, not a label"
      ]
    },
    // ==========================================
    // ADDITIONAL SOLUTIONS WITH DURATION
    // ==========================================
    {
      id: "bullying_first_time",
      title: "🆘 Bullying for the first time — quick response",
      description: "If bullying has happened for the first time, it's important to respond correctly to prevent recurrence.",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual"], duration: ["once"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Stopping bullying at an early stage",
      tags: ["first_time", "prevention"],
      steps: [
        "Talk to your child, listen without judgment. Make sure they understand it's not their fault",
        "Take screenshots/photos of evidence (if any)",
        "Talk to the homeroom teacher — calmly, without accusations, ask them to monitor the situation",
        "Explain to your child that they can come to you at any time if bullying repeats",
        "Observe: has your child's behavior changed, are they afraid to go to school"
      ],
      warnings: [
        "DON'T brush it off — if you don't stop it the first time, bullying will continue",
        "DON'T blame the child — they are the victim, not the cause"
      ]
    },
    {
      id: "bullying_chronic",
      title: "📆 Chronic bullying — systemic solution",
      description: "If bullying has been going on for weeks or months — systemic measures are needed: changing schools, working with a psychologist, legal protection.",
      conditions: { bully_type: ["physical", "verbal", "cyber", "social", "sexual"], duration: ["weeks", "months"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–4 weeks",
      yield_estimate: "Complete stop of bullying and recovery of the child",
      tags: ["chronic", "systemic", "urgent"],
      steps: [
        "Gather a complete dossier: all screenshots, photos, records, testimony, dates. Create a folder on your computer and a paper copy",
        "Write an official statement to the principal demanding action. Keep a copy with a receipt stamp",
        "Contact the Department of Education with a complaint about the school's inaction",
        "File a police report (if there were blows, threats, theft, intimate photos)",
        "Enroll your child with a psychologist (mandatory!). Chronic bullying leaves lifelong trauma",
        "Consider transferring to another school — if bullying is systemic, this is not escape, but rescue",
        "If necessary — change cities or countries. Sometimes this is the only way",
        "Legal consultation: possible compensation for moral damages from the school and the aggressor's parents"
      ],
      warnings: [
        "Chronic bullying = psychological trauma. Don't delay getting psychological help!",
        "If the child talks about suicide — immediately call 911 or the national helpline 8-800-2000-122",
        "Schools often cover up bullying. Be persistent, demand written responses",
        "Changing schools is an extreme measure, but sometimes the only one. Your child's mental health is more important"
      ]
    }
  ]
};

// ===== EXPORT =====
window.bullyingDataEn = bullyingDataEn;