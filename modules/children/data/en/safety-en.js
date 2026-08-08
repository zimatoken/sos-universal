// === MODULE: CHILD SAFETY (ENGLISH) ===
const safetyDataEn = {
  category: "safety",
  title: "🛡️ Child Safety",
  description: "Lost, went with a stranger, left alone, found dangerous items, road accidents, animal bites, playing with fire — action plans",

  questions: [
    {
      id: "situation",
      text: "What happened? (choose the main one)",
      type: "single",
      options: [
        { id: "stranger", label: "Child contacted a stranger / went with them", tags: ["stranger"] },
        { id: "alone_home", label: "Left alone at home / lost in a crowded place", tags: ["alone", "lost"] },
        { id: "dangerous_item", label: "Found a dangerous item (knives, pills, weapons, chemicals)", tags: ["dangerous"] },
        { id: "traffic", label: "Dangerous road situation / accident", tags: ["traffic"] },
        { id: "animal", label: "Bitten / scratched by an animal (dog, cat, snake, tick)", tags: ["animal"] },
        { id: "fire", label: "Playing with fire / matches / lighter / electrical appliances", tags: ["fire"] }
      ]
    },
    {
      id: "child_age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "baby", label: "Under 3 years", tags: ["baby"] },
        { id: "preschool", label: "3–7 years", tags: ["preschool"] },
        { id: "school", label: "7–12 years", tags: ["school_age"] },
        { id: "teen", label: "Teenager 13–17 years", tags: ["teen"] }
      ]
    },
    {
      id: "location",
      text: "Where did it happen?",
      type: "single",
      options: [
        { id: "home", label: "At home / in the apartment", tags: ["home"] },
        { id: "street", label: "On the street / in the yard / in the park", tags: ["street"] },
        { id: "public", label: "In a store / mall / transport", tags: ["public"] },
        { id: "school", label: "At school / kindergarten / club", tags: ["school_place"] }
      ]
    },
    {
      id: "stranger_details",
      text: "If contact with a stranger — what exactly happened?",
      condition: { situation: ["stranger"] },
      options: [
        { id: "stranger_talk", label: "Just talked, offered treats, asked for help", tags: ["talk"] },
        { id: "stranger_tried_take", label: "Tried to take / put in a car, but the child ran away", tags: ["attempt"] },
        { id: "stranger_taken", label: "Child left with a stranger / went by car", tags: ["taken"] }
      ]
    },
    {
      id: "alone_lost_details",
      text: "If lost or home alone — specify",
      condition: { situation: ["alone_home"] },
      options: [
        { id: "home_alone", label: "Child home alone (left unsupervised)", tags: ["alone_at_home"] },
        { id: "lost_mall", label: "Lost in a store / mall / train station", tags: ["lost_public"] },
        { id: "lost_street", label: "Lost on the street / in the park / in the yard", tags: ["lost_street"] }
      ]
    },
    {
      id: "dangerous_item_type",
      text: "What dangerous item did the child find?",
      condition: { situation: ["dangerous_item"] },
      options: [
        { id: "pills", label: "Pills / medications / vitamins", tags: ["pills"] },
        { id: "chemicals", label: "Household chemicals / acids / alkalis", tags: ["chemicals"] },
        { id: "knife", label: "Knife / sharp objects", tags: ["knife"] },
        { id: "weapon", label: "Weapon (knife, gun, crossbow)", tags: ["weapon"] }
      ]
    },
    {
      id: "traffic_details",
      text: "What happened on the road?",
      condition: { situation: ["traffic"] },
      options: [
        { id: "ran_out", label: "Ran onto the road, managed to stop", tags: ["near_miss"] },
        { id: "bike", label: "Riding a bike / scooter and fell / collided", tags: ["bike"] },
        { id: "accident", label: "Hit by a car / road accident involving the child", tags: ["accident"] }
      ]
    },
    {
      id: "animal_details",
      text: "Which animal?",
      condition: { situation: ["animal"] },
      options: [
        { id: "dog", label: "Dog (domestic / stray)", tags: ["dog"] },
        { id: "cat", label: "Cat", tags: ["cat"] },
        { id: "rodent", label: "Rat / mouse", tags: ["rodent"] },
        { id: "snake", label: "Snake", tags: ["snake"] },
        { id: "tick", label: "Tick", tags: ["tick"] },
        { id: "insect", label: "Bee / wasp / spider", tags: ["insect"] }
      ]
    },
    {
      id: "fire_details",
      text: "What exactly with fire/electricity?",
      condition: { situation: ["fire"] },
      options: [
        { id: "matches", label: "Played with matches / lighter", tags: ["matches"] },
        { id: "electric", label: "Touched an outlet / wires / turned on an appliance", tags: ["electric"] },
        { id: "candle", label: "Lit a candle / left unattended", tags: ["candle"] }
      ]
    },
    {
      id: "severity",
      text: "How serious?",
      type: "single",
      options: [
        { id: "mild", label: "Mild situation (brief contact, child not injured)", tags: ["mild"] },
        { id: "moderate", label: "Moderate (minor injuries, severe fright)", tags: ["moderate"] },
        { id: "severe", label: "Severe (loss of consciousness, severe bleeding, abduction)", tags: ["severe"] }
      ]
    }
  ],

  solutions: [
    // =================================