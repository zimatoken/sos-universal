// === MODULE: INJURIES AND FIRST AID (ENGLISH) ===
const injuryDataEn = {
  category: "injury",
  title: "🩹 Injuries and First Aid",
  description: "Cuts, burns, bruises, fractures, head injuries, eye injuries, choking, animal bites — action algorithms",

  questions: [
    {
      id: "injury_type",
      text: "What type of injury?",
      type: "single",
      options: [
        { id: "cut", label: "Cut / wound / bleeding", tags: ["cut", "bleeding"] },
        { id: "burn", label: "Burn (boiling water, fire, chemicals, electricity)", tags: ["burn"] },
        { id: "bruise", label: "Bruise / contusion / sprain", tags: ["bruise", "sprain"] },
        { id: "fracture", label: "Fracture / suspected fracture", tags: ["fracture"] },
        { id: "head", label: "Head injury / concussion", tags: ["head", "concussion"] },
        { id: "eye", label: "Eye injury (chemicals, foreign body, blow)", tags: ["eye"] },
        { id: "choking", label: "Choking / suffocation", tags: ["choking"] },
        { id: "bite", label: "Animal / insect bite", tags: ["bite"] },
        { id: "tooth", label: "Knocked out / broken tooth", tags: ["tooth"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is the injury?",
      type: "single",
      options: [
        { id: "minor", label: "Minor scratch, bruise, abrasion (superficial)", tags: ["minor"] },
        { id: "moderate", label: "Deep wound, severe burn, severe swelling", tags: ["moderate"] },
        { id: "severe", label: "Severe bleeding, fracture, loss of consciousness, seizures", tags: ["severe"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "infant", label: "Infant (0–1 year)", tags: ["infant"] },
        { id: "toddler", label: "1–3 years", tags: ["toddler"] },
        { id: "child", label: "3–7 years", tags: ["child"] },
        { id: "school", label: "7+ years", tags: ["school"] }
      ]
    },
    {
      id: "bleeding_type",
      text: "If bleeding — what type?",
      condition: { injury_type: ["cut"] },
      options: [
        { id: "capillary", label: "Capillary (small drops, oozing)", tags: ["capillary"] },
        { id: "venous", label: "Venous (dark blood, flows steadily)", tags: ["venous"] },
        { id: "arterial", label: "Arterial (bright red, spurting like a fountain)", tags: ["arterial"] }
      ]
    },
    {
      id: "burn_cause",
      text: "What caused the burn?",
      condition: { injury_type: ["burn"] },
      options: [
        { id: "hot_water", label: "Boiling water / hot steam", tags: ["thermal"] },
        { id: "flame", label: "Fire / hot object", tags: ["thermal"] },
        { id: "chemical", label: "Chemical substance (acid, alkali)", tags: ["chemical"] },
        { id: "electric", label: "Electric current (outlet, wire)", tags: ["electric"] }
      ]
    },
    {
      id: "burn_area",
      text: "Where is the burn? (choose the main area)",
      condition: { injury_type: ["burn"] },
      options: [
        { id: "face", label: "Face / neck", tags: ["face"] },
        { id: "hands", label: "Hands / wrists", tags: ["hands"] },
        { id: "feet", label: "Legs / feet", tags: ["feet"] },
        { id: "torso", label: "Torso / back", tags: ["torso"] },
        { id: "genitals", label: "Groin / genitals", tags: ["genitals"] }
      ]
    },
    {
      id: "fracture_location",
      text: "Where is the suspected fracture?",
      condition: { injury_type: ["fracture"] },
      options: [
        { id: "arm", label: "Arm (shoulder, forearm, wrist)", tags: ["arm"] },
        { id: "leg", label: "Leg (thigh, shin, foot)", tags: ["leg"] },
        { id: "collarbone", label: "Collarbone", tags: ["collarbone"] },
        { id: "ribs", label: "Ribs", tags: ["ribs"] },
        { id: "spine", label: "Spine", tags: ["spine"] },
        { id: "skull", label: "Skull", tags: ["skull"] }
      ]
    },
    {
      id: "head_consciousness",
      text: "Was there any loss of consciousness after the head injury?",
      condition: { injury_type: ["head"] },
      options: [
        { id: "no_loss", label: "No, didn't lose consciousness", tags: ["conscious"] },
        { id: "brief_loss", label: "Yes, for a few seconds", tags: ["brief_loss"] },
        { id: "prolonged_loss", label: "Yes, for more than 1 minute", tags: ["prolonged_loss"] }
      ]
    },
    {
      id: "bite_animal",
      text: "What bit the child?",
      condition: { injury_type: ["bite"] },
      options: [
        { id: "dog", label: "Dog (domestic or stray)", tags: ["dog"] },
        { id: "cat", label: "Cat", tags: ["cat"] },
        { id: "wild", label: "Wild animal (fox, squirrel, raccoon)", tags: ["wild"] },
        { id: "insect", label: "Insect (bee, wasp, tick)", tags: ["insect"] }
      ]
    },
    {
      id: "tetanus",
      text: "When was the last tetanus vaccination (DPT / Tdap)?",
      type: "single",
      options: [
        { id: "within_5y", label: "Less than 5 years ago", tags: ["protected"] },
        { id: "over_5y", label: "More than 5 years ago", tags: ["need_booster"] },
        { id: "unknown", label: "I don't know / not vaccinated", tags: ["unknown"] }
      ]
    },
    {
      id: "bleeding_control_done",
      text: "Were you able to stop the bleeding on your own?",
      condition: { injury_type: ["cut"], severity: ["moderate", "severe"] },
      options: [
        { id: "stopped", label: "Yes, the bleeding stopped", tags: ["stopped"] },
        { id: "not_stopped", label: "No, bleeding continues", tags: ["not_stopped"] }
      ]
    }
  ],

  solutions: [
    // =================================