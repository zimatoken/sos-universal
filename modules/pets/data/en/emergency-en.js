// === MODULE: PETS — EMERGENCIES (EN) ===
const emergencyPetDataEn = {
  category: "emergency",
  title: "🚨 Emergencies",
  description: "Birth, heat stroke, car accident, drowning, electric shock, snake bite — emergency help",

  questions: [
    {
      id: "emergency_type",
      text: "What happened?",
      type: "single",
      options: [
        { id: "birth", label: "👶 Birth / labor / retained fetus", tags: ["birth"] },
        { id: "heatstroke", label: "🌡️ Heat stroke / hypothermia", tags: ["heatstroke"] },
        { id: "drowning", label: "💧 Drowning / choked on water", tags: ["drowning"] },
        { id: "electric", label: "⚡ Electric shock / electrocution", tags: ["electric"] },
        { id: "snake", label: "🐍 Snake / spider / scorpion bite", tags: ["snake"] },
        { id: "accident", label: "🚗 Car accident / fall from height / crushed by door", tags: ["accident"] }
      ]
    },
    {
      id: "pet_type",
      text: "What animal?",
      type: "single",
      options: [
        { id: "dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "small", label: "🐰 Rabbit / hamster / bird", tags: ["small"] }
      ]
    },
    {
      id: "conscious",
      text: "Is the pet conscious?",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, reacts, moves", tags: ["conscious"] },
        { id: "no", label: "❌ No, unconscious or lethargic", tags: ["unconscious"] },
        { id: "shock", label: "😰 In shock (shaking, gasping, pale)", tags: ["shock"] }
      ]
    }
  ],

  solutions: [
    {
      id: "pet_birth",
      title: "🍼 Pet birth — assistance and complications",
      description: "Labor has started but is taking long, or a kitten/puppy is stuck. When to intervene?",
      conditions: { emergency_type: ["birth"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–12 hours",
      yield_estimate: "Safe delivery",
      tags: ["birth", "pregnancy", "emergency"],
      steps: [
        "Prepare a 'maternity ward': box with soft clean towels, warm place (25–28°C), good lighting. Do not use newspapers — ink is toxic",
        "Normal: interval between births 30–60 minutes. If more than 2 hours between puppies/kittens — this is a delay. Go to the vet immediately",
        "If fetus is stuck in the vagina (head or paws visible but not coming out for 10–15 minutes): treat hands with peroxide, put on gloves. Gently pull the fetus in rhythm with mother's contractions. DO NOT jerk sharply — you can tear",
        "If mother is very tired and cannot push — give glucose (honey on gums), warm milk. But if no progress in 30 minutes — vet",
        "After each puppy/kitten is born: wipe nose and mouth with cotton swab, remove amniotic sac. Bring to nipple. If mother doesn't lick — lick yourself with soft cloth (stimulates breathing)",
        "If mother rejects kittens/puppies — feed yourself: special formula (Beaphar, Royal Canin Babycat), every 2–3 hours, with needleless syringe. Massage belly with cotton swab (stimulates defecation)",
        "Watch the mother: temperature > 39.5°C, purulent discharge, lethargy, refusal to eat — postpartum infection (endometritis). Emergency care",
        "Do not give away kittens/puppies before 2 months. Minimum: 8 weeks with mother. This is important for immunity and socialization"
      ],
      warnings: [
        "DO NOT pull the fetus without gloves and disinfection — infection can kill both mother and babies. Care and cleanliness are paramount",
        "DO NOT give human oxytocin or other labor-stimulating drugs without a vet — dosage is critical, overdose ruptures the uterus",
        "Brachycephalic breeds (pugs, bulldogs, Persians) often cannot give birth naturally — cesarean section is required. Plan birth in advance with a vet",
        "If mother gave birth to 1–2 kittens and stopped pushing — there may be more fetuses inside. Ultrasound before birth helps know the count. Don't relax after the first births"
      ]
    },
    {
      id: "pet_heatstroke",
      title: "🌡️ Heat stroke and hypothermia",
      description: "Dog in a car, cat on a balcony, long walk in heat — heat stroke develops quickly and kills.",
      conditions: { emergency_type: ["heatstroke"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Temperature reduction / saving a life",
      tags: ["heatstroke", "temperature", "emergency"],
      steps: [
        "Heat stroke symptoms: heavy breathing with open mouth, excessive drooling, lethargy, disorientation, seizures, loss of consciousness. Brachycephalic breeds (pug, bulldog) are at risk",
        "Immediately remove pet from heat source. To shade, cool room, under air conditioner. DO NOT leave in a car even for 5 minutes! Car temperature rises 10°C in 10 minutes",
        "Cool gradually: douse with cool (not icy!) water, apply wet towels to neck, armpits, groin (where large vessels are). NO ice, NO ice water — vasospasm will worsen",
        "Give cool water to drink in small amounts. Do not force — vomiting. If won't drink — moisten gums with water",
        "Fan helps evaporation and cooling. Point at the pet but not too close",
        "Go to the vet immediately. Heat stroke causes brain, kidney, liver, blood clotting damage. Even if it 'passed' — IV fluids and examination are needed",
        "Hypothermia: symptoms — shaking, pale, cold paws/ears, lethargy, slowed breathing. Wrap in warm blankets, heating pad (not hot!) to belly. Warm milk (if drinks). Go to vet",
        "Prevention: do not walk in heat (> 25°C for pugs, > 30°C for others). Always carry water. Do not leave in car. For cats — do not open balconies without nets in heat"
      ],
      warnings: [
        "DO NOT use ice or ice water — rapid cooling causes vasospasm, chills, even greater internal organ overheating. Only cool water",
        "DO NOT give antipyretics (Paracetamol, Ibuprofen) — they don't work for heat stroke and are toxic. Only physical cooling and vet",
        "Heat stroke in dogs develops faster than in humans. Dogs don't sweat (only through paws), they cool through breathing. Fast breathing in heat is normal, but if heavy with lethargy — alarm",
        "Cats on balconies in heat: even 'shade' can turn into an oven. Balcony temperature can be 15°C higher than outside. Window nets are mandatory but don't save from heat"
      ]
    },
    {
      id: "pet_drowning",
      title: "💧 Drowning / choked on water",
      description: "Fell in bathtub, pool, river, fell through ice. Immediate help is critical.",
      conditions: { emergency_type: ["drowning"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Restoring breathing",
      tags: ["drowning", "emergency", "first_aid"],
      steps: [
        "Immediately pull the pet out of water. If under ice — do not climb yourself, use a board, rope, branch. Call rescuers if you cannot reach",
        "Hang the animal head down (dog — by hind legs, cat — by torso). Tap on the back so water drains from lungs. Do not shake hard — injury",
        "Clear mouth and nose of water, silt, algae. Pull out tongue, check breathing. If no breathing — immediately artificial respiration",
        "Artificial respiration: close mouth with your hand (so air doesn't escape through mouth), blow into nose. For small animals — into mouth and nose together. 20–30 breaths per minute. Chest should rise",
        "If no pulse — heart massage. Dog: palm on chest (behind elbow), 100–120 compressions/min. Cat: 2 fingers on chest, 120–140/min. Alternate 30 compressions + 2 breaths",
        "Even if pet started breathing — definitely go to the vet. Water in lungs causes pneumonia, pulmonary edema, electrolyte imbalance. Oxygen therapy, X-ray, IV needed",
        "Warm the pet: wrap in dry warm towels, heating pad to belly. Hypothermia after drowning is a common complication",
        "Prevention: do not leave pet near open bathtub / pool. Close toilet lid (kittens drown in toilets). On walks near water — leash"
      ],
      warnings: [
        "DO NOT perform 'Heimlich maneuver' for water — it doesn't help. The animal needs to be hung head down so water drains by itself",
        "DO NOT stop resuscitation before 10–15 minutes. Animals sometimes 'come back' after prolonged cardiac arrest. Continue until vet arrives",
        "Even 'light' choking in a bathtub for a kitten / puppy is dangerous. Small lungs fill with water quickly. Monitor breathing for 24 hours",
        "Water in lungs can cause 'secondary drowning' within 24–48 hours. Even if pet seems 'fine' — veterinary examination is mandatory"
      ]
    },
    {
      id: "pet_electric_shock",
      title: "⚡ Electric shock / electrocution",
      description: "Chewing wires, bit electric razor, got under current. Internal burns may be worse than external.",
      conditions: { emergency_type: ["electric"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving a life",
      tags: ["electric", "burn", "emergency"],
      steps: [
        "DO NOT touch the pet while it is under current! Turn off the breaker, unplug, de-energize the area. If you cannot — use dry wooden stick, rubber gloves to move the wire",
        "After de-energizing: check breathing and pulse. Electric shock causes cardiac arrest. If no breathing — artificial respiration + heart massage (see 'Drowning' section)",
        "Check mouth: wires, cables may burn the oral cavity, tongue, gums. If there are burns — rinse with cool water, do not give food or drink (esophagus is also burned)",
        "Check paws: entry and exit points of current. There may be a small burn outside but serious inside. Cool with cool water for 10–15 minutes",
        "Go to the vet immediately. Electrical burns are internal: heart, lungs, liver, kidneys may be damaged. ECG, blood tests, IV needed. Even if 'everything is fine' — hidden damage appears within a day",
        "Monitor for 48 hours: lethargy, cough (indicates pulmonary edema), vomiting, seizures, change in urine color (dark = kidney damage). Any symptom = vet",
        "Prevention: hide ALL wires in cable channels, behind furniture. Do not leave chargers, electric razors, irons on. Kittens and puppies chew everything"
      ],
      warnings: [
        "DO NOT touch the pet with bare hands while in contact with current — you will also get shocked. De-energize first",
        "Electrical burns are often 'invisible'. A small dot on the paw may hide fatal internal damage. Always see a vet after electric shock",
        "DO NOT give painkillers without vet — many are toxic with internal damage. Only veterinary care",
        "Kittens and puppies are especially prone to electric shocks. They chew everything including wires. Protect like children — they don't understand danger"
      ]
    },
    {
      id: "snake_bite_pet",
      title: "🐍 Snake / spider / scorpion bite",
      description: "On a walk, in the forest, at the dacha — venomous snake bite requires immediate help.",
      conditions: { emergency_type: ["snake"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Preventing venom spread",
      tags: ["snake", "bite", "poison", "emergency"],
      steps: [
        "Stay calm. Panic accelerates heartbeat and venom spread. Restrict pet movement — carry in arms, in carrier",
        "DO NOT suck out venom with your mouth — venom enters your blood through microcracks. DO NOT make cuts — infection and blood loss",
        "DO NOT apply tourniquet — it worsens tissue death. Instead — immobilization: fix the bitten limb in a calm position, elevate slightly",
        "Rinse the wound with water and soap. Do not treat with alcohol, iodine inside the wound — only on edges. Apply antibiotic (Levomekol)",
        "If possible — photograph the snake (don't catch!). This helps the vet determine species and choose antivenom. In Russia: viper, grass snake (non-venomous), rarely — other species",
        "Go to the vet immediately. Antivenom is effective in the first 1–2 hours. After that — only supportive therapy. The faster — the better",
        "Monitor: swelling, redness, bleeding from wound, lethargy, vomiting, seizures, blood clotting disorders (nose/gum bleeding). All require emergency care",
        "Prevention: do not walk in tall grass, bushes. Keep on leash in forest. Teach 'heel' command. For cats — window nets, do not let outside in snake regions"
      ],
      warnings: [
        "DO NOT try to catch the snake for a photo — risk of second bite. Photograph from a distance or remember color, size, head shape",
        "DO NOT give alcohol, caffeine, stimulants — this accelerates heartbeat and venom spread. Calm and immobilization are key",
        "Viper bite in a dog may seem 'not scary' — swelling, redness. But within 6–12 hours hemolysis, kidney failure, clotting disorders develop. Do not underestimate",
        "Cats die from viper bites more often than dogs — they are smaller, venom spreads faster. Even a 'light' bite in a cat = immediately to the vet"
      ]
    },
    {
      id: "pet_accident",
      title: "🚗 Car accident / fall from height / crushed by door",
      description: "Dog hit by car, cat fell from balcony, paw crushed by door. Internal injuries may be hidden.",
      conditions: { emergency_type: ["accident"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Diagnosis and help",
      tags: ["accident", "trauma", "emergency"],
      steps: [
        "Ensure safety: stop cars, move away onlookers. Injured animals may bite from pain — use muzzle, blanket, gloves. Do not approach from the front",
        "DO NOT move the pet if you suspect spinal or neck fracture. Place on a board/shield, fix head with rolls. Any movement = paralysis",
        "Check breathing and pulse. If no breathing — artificial respiration + heart massage. If bleeding — press with sterile cloth, tourniquet above wound (record time)",
        "For fall from height (cat from balcony): check mouth for blood (jaw fracture), breathing (pneumothorax), belly (internal bleeding). Cats often 'survive' but with fractures, lung rupture, liver damage",
        "For car accident: record car number, driver description, witnesses. Photo, video. Do not sign anything. In Russia: traffic accident with animal = administrative offense",
        "Even for a 'light' hit — see the vet. Internal injuries (spleen, liver, kidney rupture) appear within hours. X-ray, ultrasound — mandatory",
        "Transportation: on hard surface (board, shield), minimize shaking. For cat — dark carrier. Wrap to prevent freezing (shock causes hypothermia)",
        "After examination: rest 2–4 weeks. Do not overload, do not play actively. Internal injuries heal slowly. Second injury on top of first = dangerous"
      ],
      warnings: [
        "DO NOT move the victim if spinal fracture is suspected. This can lead to paralysis. Fix on a board, transport carefully",
        "DO NOT give food and water if internal injuries are suspected — anesthesia for surgery requires empty stomach. Can moisten gums",
        "Cats 'survive' falls from balconies thanks to righting reflex, but often get serious injuries. 'Cat fell from 10th floor and is fine' is a myth. Always vet after a fall",
        "DO NOT give painkillers without vet — they mask symptoms of internal injuries and may be toxic. Only veterinary care"
      ]
    }
  ]
};

window.emergencyPetDataEn = emergencyPetDataEn;
