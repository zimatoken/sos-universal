// modules/pets/data/en/emergency-en.js
// === MODULE: PETS — EMERGENCY SITUATIONS ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "pets",
    category: "emergency",
    version: "1.0.0",
    lang: "en",
    title: "🚨 Emergency Situations",
    description: "Birth, heatstroke, car accident, drowning, electric shock, snake bite — emergency first aid",
    icon: "🚨",
    color: "#9333ea"
  },

  questions: [
    {
      id: "emergency_type",
      type: "single",
      text: "What happened?",
      options: [
        { id: "birth", label: "👶 Birth / labor / stuck fetus", tags: ["birth"] },
        { id: "heatstroke", label: "🌡️ Heatstroke / hypothermia", tags: ["heatstroke"] },
        { id: "drowning", label: "💧 Drowning / inhaled water", tags: ["drowning"] },
        { id: "electric", label: "⚡ Electric shock", tags: ["electric"] },
        { id: "snake", label: "🐍 Snake / spider / scorpion bite", tags: ["snake"] },
        { id: "accident", label: "🚗 Car accident / fall from height / crushed by door", tags: ["accident"] }
      ]
    },
    {
      id: "pet_type",
      type: "single",
      text: "What kind of pet?",
      conditions: { emergency_type: ["birth", "heatstroke", "drowning", "electric", "snake", "accident"] },
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_small", label: "🐰 Rabbit / hamster / bird", tags: ["small"] }
      ]
    },
    {
      id: "conscious",
      type: "single",
      text: "Is the pet conscious?",
      conditions: { emergency_type: ["birth", "heatstroke", "drowning", "electric", "snake", "accident"] },
      options: [
        { id: "conscious_yes", label: "✅ Yes, responds, moves", tags: ["conscious"] },
        { id: "conscious_no", label: "❌ No, unconscious or lethargic", tags: ["unconscious"] },
        { id: "conscious_shock", label: "😰 In shock (shaking, gasping, pale)", tags: ["shock"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. BIRTH
    // ============================================================
    {
      id: "pet_birth",
      title: "🍼 Birth in pets — assistance and complications",
      description: "Labor has started but is taking too long, or a kitten/puppy is stuck. When to intervene?",
      conditions: { emergency_type: ["birth"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–12 hours",
      yield_estimate: "Safe delivery",
      tags: ["birth", "pregnancy", "emergency"],
      steps: [
        "Prepare a 'birthing box': soft clean towels, warm place (25–28°C), good lighting. Don't use newspaper — ink is toxic",
        "Normal: interval between births 30–60 minutes. If more than 2 hours pass between puppies/kittens — this is a delay. Vet immediately",
        "If a fetus is stuck in the birth canal (head or paws visible but not coming out for 10–15 minutes): wash hands with peroxide, wear gloves. Gently pull the fetus in rhythm with the mother's contractions. DON'T jerk — can tear",
        "If the mother is exhausted and can't push — give glucose (honey on gums), warm milk. But if no progress in 30 minutes — vet",
        "After each puppy/kitten: wipe nose and mouth with cotton, remove membranes. Bring to nipple. If mother doesn't lick — wipe with soft cloth yourself (stimulates breathing)",
        "If mother rejects the kittens/puppies — hand-feed: special formula (Beaphar, Royal Canin Babycat), every 2–3 hours with a syringe without needle. Massage belly with cotton swab (stimulates defecation)",
        "Monitor the mother: temperature > 39.5°C, purulent discharge, lethargy, refusal to eat — postpartum infection (endometritis). Emergency care",
        "Don't give kittens/puppies away before 2 months. Minimum: 8 weeks with mother. Important for immunity and socialization"
      ],
      warnings: [
        "DON'T pull the fetus without gloves and disinfection — infection can kill both mother and babies. Cleanliness and care are key",
        "DON'T give human oxytocin or other labor stimulants without a vet — dosage is critical, overdose can rupture the uterus",
        "Brachycephalic breeds (pugs, bulldogs, Persians) often cannot give birth naturally — require C-section. Plan births in advance with your vet",
        "If the mother gave birth to 1–2 kittens and stopped pushing — there may be more inside. Ultrasound before birth helps know the count. Don't relax after the first births"
      ]
    },
    // ============================================================
    // 2. HEATSTROKE
    // ============================================================
    {
      id: "pet_heatstroke",
      title: "🌡️ Heatstroke and hypothermia",
      description: "Dog in a car, cat on a balcony, long walk in the heat — heatstroke develops quickly and can be fatal.",
      conditions: { emergency_type: ["heatstroke"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Temperature reduction / life saving",
      tags: ["heatstroke", "temperature", "emergency"],
      steps: [
        "Heatstroke symptoms: heavy open-mouth breathing, excessive drooling, lethargy, disorientation, seizures, loss of consciousness. Brachycephalic breeds (pugs, bulldogs) are at high risk",
        "Immediately move the pet away from the heat source. Into shade, cool room, under AC. DON'T leave in a car even for 5 minutes! Car temperature rises 10°C in 10 minutes",
        "Cool gradually: pour cool (not ice cold!) water over, apply wet towels to neck, armpits, groin (where major vessels are). NOT ice, NOT ice water — vasospasm worsens the condition",
        "Give cool water to drink little by little. Don't force — may vomit. If not drinking — moisten gums with water",
        "A fan helps evaporation and cooling. Point at pet, but not too close",
        "Go to the vet immediately. Heatstroke causes brain, kidney, liver damage, and blood clotting issues. Even if it 'passed' — IV and examination needed",
        "Hypothermia: symptoms — trembling, pale, cold paws/ears, lethargy, slow breathing. Wrap in warm blankets, heating pad (not hot!) to belly. Warm milk (if drinking). To the vet",
        "Prevention: don't walk in heat (> 25°C for pugs, > 30°C for others). Always carry water. Don't leave in car. For cats — don't open balconies without screens in heat"
      ],
      warnings: [
        "DON'T use ice or ice water — rapid cooling causes vasospasm, chills, and even more overheating of internal organs. Only cool water",
        "DON'T give antipyretics (Paracetamol, Ibuprofen) — they don't work for heatstroke and are toxic. Only physical cooling and veterinary care",
        "Heatstroke develops faster in dogs than in humans. Dogs don't sweat (only through paws), they cool through breathing. In heat, they breathe fast — normal, but if heavy breathing with lethargy — alarm",
        "Cats on balconies in heat: even 'shade' can become an oven. Balcony temperature can be 15°C higher than outside. Window screens are a must, but don't save from heat"
      ]
    },
    // ============================================================
    // 3. DROWNING
    // ============================================================
    {
      id: "pet_drowning",
      title: "💧 Drowning / inhaled water",
      description: "Fell into a bathtub, pool, river, fell through ice. Immediate help is critical.",
      conditions: { emergency_type: ["drowning"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Restoring breathing",
      tags: ["drowning", "emergency", "first_aid"],
      steps: [
        "Immediately pull the pet out of water. If under ice — don't go in yourself, use a board, rope, branch. Call rescuers if you can't reach",
        "Hang the animal head down (dog — by hind legs, cat — by body). Tap on the back to drain water from lungs. Don't shake hard — trauma",
        "Clear mouth and nose of water, mud, algae. Pull tongue out, check breathing. If not breathing — immediate artificial respiration",
        "Artificial respiration: close the mouth with your hand, blow into the nose. For small animals — into mouth and nose together. 20–30 breaths per minute. Chest should rise",
        "If no pulse — CPR. Dog: palm on chest (behind elbow joint), 100–120 compressions/min. Cat: 2 fingers on chest, 120–140/min. Alternate 30 compressions + 2 breaths",
        "Even if the pet started breathing — must see a vet. Water in lungs causes pneumonia, pulmonary edema, electrolyte imbalance. Needs oxygen therapy, X-ray, IV",
        "Warm the pet: wrap in dry warm towels, heating pad to belly. Hypothermia after drowning is a common complication",
        "Prevention: don't leave pet near open bathtub/pool. Close toilet lid (kittens drown in toilets). On walks near water — leash"
      ],
      warnings: [
        "DON'T do 'Heimlich maneuver' for water — it doesn't help. Hang the animal head down to let water drain naturally",
        "DON'T stop resuscitation before 10–15 minutes. Animals sometimes 'come back' after prolonged cardiac arrest. Continue until the vet arrives",
        "Even 'mild' water inhalation in a bathtub for a kitten/puppy is dangerous. Small lungs fill quickly. Monitor breathing for 24 hours",
        "Water in lungs can cause 'secondary drowning' within 24–48 hours. Even if the pet seems 'fine' — veterinary examination is mandatory"
      ]
    },
    // ============================================================
    // 4. ELECTRIC SHOCK
    // ============================================================
    {
      id: "pet_electric_shock",
      title: "⚡ Electric shock",
      description: "Chewed wires, bit an electric cord, came into contact with a live source. Internal burns can be worse than external.",
      conditions: { emergency_type: ["electric"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Immediate",
      yield_estimate: "Life saving",
      tags: ["electric", "burn", "emergency"],
      steps: [
        "DON'T touch the pet while they're in contact with electricity! Turn off the breaker, unplug, de-energize the area. If you can't — use a dry wooden stick, rubber gloves to move the wire",
        "After de-energizing: check breathing and pulse. Electric shock causes cardiac arrest. If no breathing — artificial respiration + CPR",
        "Check the mouth: wires, cables may burn the mouth, tongue, gums. If there are burns — rinse with cool water, don't give food or drink (esophagus may also be burned)",
        "Check the paws: entry and exit points. There may be a small external burn but serious internal damage. Cool with cool water for 10–15 minutes",
        "Immediately to the vet. Internal electrical burns: heart, lungs, liver, kidneys may be damaged. Needs ECG, blood tests, IV. Even if 'everything is fine' — hidden damage shows within 24 hours",
        "Monitor for 48 hours: lethargy, cough (means pulmonary edema), vomiting, seizures, change in urine color (dark = kidney damage). Any symptom = vet",
        "Prevention: hide ALL wires in cable channels, behind furniture. Don't leave chargers, electric razors, irons plugged in. Kittens and puppies chew everything"
      ],
      warnings: [
        "DON'T touch the pet with bare hands while they're in contact with electricity — you'll get shocked too. De-energize first",
        "Electrical burns are often 'invisible'. A small dot on the paw can hide fatal internal damage. Always see a vet after electric shock",
        "DON'T give painkillers without a vet — many are toxic with internal damage. Only veterinary care",
        "Kittens and puppies are especially susceptible to electric shock. They chew everything, including wires. Protect them like children"
      ]
    },
    // ============================================================
    // 5. SNAKE BITE
    // ============================================================
    {
      id: "snake_bite_pet",
      title: "🐍 Snake / spider / scorpion bite",
      description: "On a walk, in the forest, at the dacha — a venomous snake bite requires immediate help.",
      conditions: { emergency_type: ["snake"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Immediate",
      yield_estimate: "Preventing venom spread",
      tags: ["snake", "bite", "poison", "emergency"],
      steps: [
        "Stay calm. Panic increases heart rate and venom spread. Limit movement — carry in arms, in a carrier",
        "DON'T suck venom with your mouth — venom enters your blood through micro-cuts. DON'T make incisions — infection and blood loss",
        "DON'T apply a tourniquet — it worsens tissue death. Instead — immobilize: fix the bitten limb in a resting position, elevate slightly",
        "Wash the wound with soap and water. Don't put alcohol, iodine inside the wound — only around edges. Apply antibiotic (Levomekol)",
        "If possible — photograph the snake (don't catch it!). This helps the vet identify the species and choose antivenom. In Russia: viper, grass snake (non-venomous), rarely — gyurza, epha, cottonmouth",
        "Immediately to the vet. Antivenom is effective within the first 1–2 hours. After that — only supportive therapy. The faster — the better",
        "Monitor: swelling, redness, bleeding from wound, lethargy, vomiting, seizures, blood clotting disorders (nosebleed, gum bleeding). All require emergency care",
        "Prevention: don't walk in tall grass, bushes. Keep on leash in the forest. Teach 'heel'. For cats — window screens, don't let outside in snake regions"
      ],
      warnings: [
        "DON'T try to catch the snake for a photo — risk of a second bite. Photograph from a distance or remember color, size, head shape",
        "DON'T give alcohol, caffeine, stimulants — they increase heart rate and venom spread. Calm and immobilization are key",
        "A viper bite to a dog may seem 'not scary' — swelling, redness. But within 6–12 hours, hemolysis, kidney failure, and blood clotting disorders develop. Don't underestimate",
        "Cats die from viper bites more often than dogs — they're smaller, venom spreads faster. Even a 'mild' bite to a cat = immediate vet"
      ]
    },
    // ============================================================
    // 6. ACCIDENT / TRAUMA
    // ============================================================
    {
      id: "pet_accident",
      title: "🚗 Car accident / fall from height / crushed by door",
      description: "Dog hit by a car, cat fell from a balcony, paw trapped in a door. Internal injuries may be hidden.",
      conditions: { emergency_type: ["accident"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Immediate",
      yield_estimate: "Diagnosis and help",
      tags: ["accident", "trauma", "emergency"],
      steps: [
        "Ensure safety: stop traffic, push back onlookers. Injured animals may bite from pain — use a muzzle, blanket, gloves. Don't approach from the front",
        "DON'T move the pet if you suspect spinal or neck fracture. Place on a board/plank, immobilize head with rolls. Any movement = paralysis",
        "Check breathing and pulse. If no breathing — artificial respiration + CPR. If bleeding — apply pressure with sterile cloth, tourniquet above the wound (note the time)",
        "For falls from height (cat from balcony): check mouth for blood (jaw fracture), breathing (pneumothorax), abdomen (internal bleeding). Cats often 'survive' but with fractures, lung rupture, liver damage",
        "For car accidents: note the license plate, driver description, witnesses. Photo, video. Don't sign anything. In Russia: accident with an animal = administrative violation",
        "Even with a 'minor' impact — see a vet. Internal injuries (spleen, liver, kidney rupture) show up hours later. X-ray, ultrasound — mandatory",
        "Transport: on a hard surface (board, plank), minimize shaking. For cats — dark carrier. Wrap to prevent hypothermia (shock causes cooling)",
        "After examination: rest for 2–4 weeks. Don't over-exercise, don't play actively. Internal injuries heal slowly. A second injury on top of the first is dangerous"
      ],
      warnings: [
        "DON'T move the injured if spinal fracture is suspected. This can cause paralysis. Immobilize on a board, transport carefully",
        "DON'T give food and water if internal trauma is suspected — anesthesia requires empty stomach. Moisten gums if needed",
        "Cats 'survive' falls from balconies due to righting reflex, but often suffer serious injuries. 'Cat fell from 10 floors and is fine' is a myth. Always vet after a fall",
        "DON'T give painkillers without a vet — they mask internal injury symptoms and can be toxic. Only veterinary care"
      ]
    }
  ]
});