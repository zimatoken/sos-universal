// === MODULE: CHILDREN вЂ” BULLYING (EN) ===
const bullyingData = {
  category: "bullying",
  title: "рџ’” Bullying",
  description: "Physical violence, insults, cyberbullying, ostracism вЂ” how to protect your child",

  questions: [
    {
      id: "bully_type",
      text: "What type of bullying?",
      type: "single",
      options: [
        { id: "physical", label: "рџ‘Љ Physical violence (pushing, hitting, taking things)", tags: ["physical"] },
        { id: "verbal", label: "рџ—ЈпёЏ Words, insults, threats, blackmail", tags: ["verbal"] },
        { id: "cyber", label: "рџ’» Cyberbullying (social media, messengers, games)", tags: ["cyber"] },
        { id: "social", label: "рџ‘Ґ Social ostracism (exclusion, gossip, boycott)", tags: ["social"] },
        { id: "sexual", label: "вљ пёЏ Sexual harassment / inappropriate comments", tags: ["sexual"] }
      ]
    },
    {
      id: "role",
      text: "What is your child's role?",
      type: "single",
      options: [
        { id: "victim", label: "рџў My child is the victim", tags: ["victim"] },
        { id: "witness", label: "рџ‘ЃпёЏ I learned as a witness / from another child", tags: ["witness"] },
        { id: "aggressor", label: "рџ  My child is the aggressor / bullies others", tags: ["aggressor"] }
      ]
    },
    {
      id: "duration",
      text: "How long has it been going on?",
      type: "single",
      options: [
        { id: "once", label: "Once / first incident", tags: ["once"] },
        { id: "weeks", label: "Several weeks", tags: ["weeks"] },
        { id: "months", label: "Several months or more", tags: ["months"] }
      ]
    }
  ],

  solutions: [
    {
      id: "physical_bullying",
      title: "рџҐЉ Physical violence вЂ” protection and actions",
      description: "Pushing, hitting, taking things, money, phone. This is already a crime, not 'childish mischief'.",
      conditions: { bully_type: ["physical"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“7 days",
      yield_estimate: "Stopping violence and protecting the child",
      tags: ["physical", "violence", "school"],
      steps: [
        "Talk to the child calmly, without shouting. Ask: what, where, when, who, how many times. Write everything down: dates, names, witnesses. This is evidence",
        "Examine the child: bruises, abrasions, torn clothing. Take photos. This is the evidence base",
        "If there are injuries вЂ” see a doctor, get a certificate. For serious injuries вЂ” emergency and police",
        "Immediately talk to the homeroom teacher, principal, school psychologist. Demand a written response and action plan. The school is obligated to respond",
        "If the school ignores вЂ” file a police report (assault, bodily harm). Attach photos, certificates, records",
        "Contact the juvenile affairs commission. They can intervene regarding the aggressor's family",
        "Consider transferring to another class or school. Sometimes this is the only way to stop bullying. Do not consider it 'running away' вЂ” your child's safety comes first",
        "Enroll the child in martial arts (not for revenge, but for confidence). Psychologist, group therapy for bullying victims вЂ” restoring self-esteem",
        "Teach the child: shout 'Don't touch me!', run to a crowded place, call you immediately. Not 'be a man' вЂ” that's dangerous"
      ],
      warnings: [
        "DO NOT tell the child 'just deal with it yourself' вЂ” they already tried, it didn't work. This will worsen the trauma and close trust",
        "DO NOT go 'sort it out' with the aggressor or their parents yourself вЂ” it may end in a fight and criminal charges against you",
        "DO NOT ignore it as 'just kids'. Repeated physical violence is a crime. Document every incident",
        "If the child is afraid to go to school, cries in the morning, pretends to be sick вЂ” these are alarm signals. Act immediately"
      ]
    },
    {
      id: "cyberbullying",
      title: "рџ“І Cyberbullying вЂ” online harassment",
      description: "Insults in chats, public posts, game lobbies, threats, spreading photos/videos. No less painful than physical violence.",
      conditions: { bully_type: ["cyber"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“3 days",
      yield_estimate: "Removing content, blocking aggressors",
      tags: ["cyber", "internet", "harassment"],
      steps: [
        "Take screenshots of EVERYTHING: insults, threats, photos, videos, aggressor profiles. Save to cloud and computer. Do not delete chats before contacting police вЂ” this is the main evidence",
        "Block aggressors on all platforms. Enable 'friends only' mode on VK, Instagram, TikTok. Close comments",
        "If content is being spread (photos, videos, fakes) вЂ” contact platform support: VK, Telegram, TikTok, YouTube. Demand removal per community guidelines. State that the child is a minor",
        "If there are threats, blackmail, spreading intimate photos вЂ” immediately to police. Provide screenshots, chats, profiles",
        "Talk to the child: it's not their fault, they are not alone. Cyberbullying traumatizes deeply because 'everyone sees'. Explain: aggressors are cowards hiding behind screens",
        "Temporarily limit internet access (not as punishment, but as a break). Replace with offline activities: walks, sports, meetings with friends",
        "See a psychologist. Cyberbullying causes depression, suicidal thoughts. Do not underestimate. In Russia: helpline 8-800-2000-122 (free, anonymous)",
        "Prevention: do not publish personal data, address, school. Do not add strangers. Change passwords regularly. Parental control: Google Family Link, Kaspersky Safe Kids"
      ],
      warnings: [
        "DO NOT take away the phone 'forever' as punishment вЂ” the child will lose connection with friends and their only support. Limit temporarily, explain why",
        "DO NOT say 'just turn off the phone' вЂ” for a teen, social media = social life. Ignoring doesn't solve the problem",
        "Spreading intimate photos of a minor is a criminal offense. Even if the child took the photo themselves вЂ” they are the victim, the aggressor is responsible",
        "DO NOT publish chats publicly on social media вЂ” it may escalate the situation and become a defamation charge against you"
      ]
    },
    {
      id: "verbal_social_bullying",
      title: "рџ’¬ Verbal and social ostracism",
      description: "Insults, nicknames, gossip, exclusion from the group, boycott. Invisible scars that run deeper than physical ones.",
      conditions: { bully_type: ["verbal", "social"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1вЂ“4 weeks",
      yield_estimate: "Restoring social connections and self-esteem",
      tags: ["verbal", "social", "psychology"],
      steps: [
        "Talk to the child without judgment. Ask: 'How do you feel? How long? Who is around when this happens?' Write down names, dates, context",
        "Explain to the child: insults speak about the aggressor's problems, not about them. Bullying is a way for a weak person to feel strong. It's not true",
        "Help find a 'safe harbor': another club, sports section, online interest community. One true friendship compensates for class bullying",
        "Talk to the homeroom teacher. Ask for: seating change, group assignments (to break cliques), tolerance class. Do not name names publicly вЂ” it will escalate",
        "If bullying is systematic (entire class) вЂ” demand principal and school psychologist intervention. In extreme cases вЂ” transfer to another school. The child's psyche comes first",
        "See a psychologist. Verbal bullying causes anxiety, depression, low self-esteem, social phobia. Early help prevents chronic problems",
        "Teach the child techniques: 'I don't accept this' (calmly, without shouting), leaving the situation, finding an adult. Not 'fight back' вЂ” that's escalation",
        "If insults turn into threats, defamation, public humiliation вЂ” document and consult a lawyer"
      ],
      warnings: [
        "DO NOT say 'just ignore it' вЂ” for a child, classmates = the whole world. Ignoring doesn't work with systematic bullying",
        "DO NOT force the child to 'befriend' the aggressor or forgive. It's their right to choose who to communicate with. Forced 'friendship' is traumatic",
        "DO NOT publicly accuse other children in the parent chat вЂ” their parents will defend them, and your child will face retaliation",
        "Social bullying often accompanies cyberbullying. Check the child's phone вЂ” the bullying may continue online"
      ]
    },
    {
      id: "my_child_aggressor",
      title: "вљ пёЏ My child is the aggressor. What to do?",
      description: "Hard to admit, but important. The aggressor is also a suffering child. Punishment won't help, support will.",
      conditions: { role: ["aggressor"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1вЂ“6 months",
      yield_estimate: "Stopping aggression and helping the child",
      tags: ["aggressor", "psychology", "family"],
      steps: [
        "Do not deny or blindly defend the child. Listen, gather facts. Talk to teachers, other parents, witnesses. Objectivity is key",
        "Talk to the child calmly, without shouting. Ask: 'How do you feel when you do this? What do you get from it?' Aggression is a mask for fear, insecurity, trauma",
        "See a child psychologist. Aggression is a symptom: bullying at home, divorce, death, moving, pressure. Find the cause, not fight the symptom",
        "Set clear boundaries: 'Bullying others is unacceptable. It causes pain. There will be consequences'. But consequences are not beatings вЂ” loss of privileges, psychologist work",
        "Show the child consequences: let them apologize (if ready), let them read victim stories. Develop empathy: 'How would you feel in their place?'",
        "Check the family: is there violence at home? Is an adult bullying someone? Children copy behavior models. If there are screams, hits at home вЂ” the child transfers this to school",
        "Work with the teacher, school psychologist. Ask for: monitoring, seating change, individual plan. Don't hide the problem вЂ” it will escalate",
        "If aggression is physical and serious вЂ” be prepared for responsibility. School, juvenile commission, police. But the main thing is not punishment, but behavior change through help"
      ],
      warnings: [
        "DO NOT defend the child with 'my child wouldn't' вЂ” this closes the problem and worsens behavior. Acknowledgment is the first step to help",
        "DO NOT hit the child for aggression вЂ” they will learn that force solves problems. Violence breeds violence",
        "DO NOT transfer to another school 'so they forget'. Without working on themselves, the child will continue bullying in a new place. School change is the last step, not the first",
        "Aggressors were often victims themselves. Don't divide the world into 'good' and 'bad'. Your child needs help, not a label"
      ]
    }
  ]
};

window.bullyingDataEn = bullyingData;
