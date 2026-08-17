// === MODULE: PETS — EMERGENCY SITUATIONS ===
const emergencyPetDataEn = {
  category: "emergency",
  title: "🚨 Emergency situations",
  description: "Birth, heatstroke, accident, drowning, electric shock, snake bite — emergency help",

  questions: [
    {
      id: "emergency_type",
      text: "What happened?",
      type: "single",
      options: [
        { id: "birth", label: "👶 Birth / labor / retained fetus", tags: ["birth"] },
        { id: "heatstroke", label: "🌡️ Heatstroke / hypothermia", tags: ["heatstroke"] },
        { id: "drowning", label: "💧 Drowning / inhaled water", tags: ["drowning"] },
        { id: "electric", label: "⚡ Electric shock", tags: ["electric"] },
        { id: "snake", label: "🐍 Snake / spider / scorpion bite", tags: ["snake"] },
        { id: "accident", label: "🚗 Car accident / fall from height / crushed by door", tags: ["accident"] }
      ]
    },
    {
      id: "pet_type",
      text: "What kind of pet?",
      type: "single",
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_small", label: "🐰 Rabbit / hamster / bird", tags: ["small"] }
      ]
    },
    {
      id: "conscious",
      text: "Is your pet conscious?",
      type: "single",
      options: [
        { id: "conscious_yes", label: "✅ Yes, responding, moving", tags: ["conscious"] },
        { id: "conscious_no", label: "❌ No, unconscious or lethargic", tags: ["unconscious"] },
        { id: "conscious_shock", label: "😰 In shock (shaking, gasping, pale)", tags: ["shock"] }
      ]
    }
  ],

  solutions: [
    {
      id: "pet_birth",
      title: "🍼 Birth in a pet — help and complications",
      description: "Labor has started but is taking too long, or a kitten/puppy is stuck. When to intervene?",
      conditions: { emergency_type: ["birth"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–12 hours",
      yield_estimate: "Safe delivery",
      tags: ["birth", "pregnancy", "emergency"],
      steps: [
        "Prepare a 'birthing box': a box with soft clean towels, warm place (25–28°C), good lighting. Don't use newspapers — ink is toxic",
        "Normal: intervals between births 30–60 minutes. If more than 2 hours pass between puppies/kittens — it's a delay. Immediate vet care",
        "If a fetus is stuck in the birth canal (head or paws visible but not emerging for 10–15 minutes): disinfect your hands with peroxide, wear gloves. Gently pull the fetus in rhythm with the mother's contractions. DON'T pull sharply — you can tear",
        "If the mother is exhausted and can't push — give glucose (honey on gums), warm milk. But if no progress in 30 minutes — vet",
        "After each puppy/kitten is born: wipe the nose and mouth with a cotton swab, remove the fetal membranes. Bring to the nipple. If the mother doesn't lick — you can stimulate breathing by gently rubbing with a soft cloth",
        "If the mother rejects the kittens/puppies — hand-feed: special formula (Beaphar, Royal Canin Babycat), every 2–3 hours, with a syringe without a needle. Massage the belly with a cotton swab (stimulates defecation)",
        "Monitor the mother: temperature > 39.5°C, purulent discharge, lethargy, refusal to eat — postpartum infection (endometritis). Emergency care",
        "Don't give kittens/puppies away before 2 months. Minimum: 8 weeks with mom. This is important for immunity and socialization"
      ],
      warnings: [
        "DO NOT pull the fetus without gloves and disinfection — infection can kill both mother and babies. Cleanliness is key",
        "DO NOT give human oxytocin or other labor stimulants without a vet — dosage is critical, overdose can rupture the uterus",
        "Brachycephalic breeds (pugs, bulldogs, Persians) often can't give birth naturally — C-section is required. Plan birth with your vet in advance",
        "If the mother gave birth to 1–2 kittens and stopped pushing — there may be more fetuses inside. Ultrasound before birth helps determine the number. Don't relax after the first birth"
      ]
    },
    {
      id: "pet_heatstroke",
      title: "🌡️ Heatstroke and hypothermia",
      description: "Dog in a car, cat on a balcony, long walk in the heat — heatstroke develops quickly and kills.",
      conditions: { emergency_type: ["heatstroke"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Temperature reduction / saving a life",
      tags: ["heatstroke", "temperature", "emergency"],
      steps: [
        "Symptoms of heatstroke: heavy breathing with open mouth, excessive drooling, lethargy, disorientation, seizures, loss of consciousness. Brachycephalic breeds (pugs, bulldogs) — high risk group",
        "Immediately move your pet away from the heat source. Into the shade, a cool room, under air conditioning. DO NOT leave in a car even for 5 minutes! Car temperature rises by 10°C in 10 minutes",
        "Cool gradually: pour cool (NOT ice cold!) water over them, apply wet towels to the neck, armpits, groin (where large vessels are). NOT ice, NOT ice water — vasospasm worsens the condition",
        "Give cool water in small amounts. Don't force — vomiting. If not drinking — moisten the gums with water",
        "A fan helps evaporation and cooling. Direct it at your pet, but not too close",
        "Immediately see a vet. Heatstroke causes brain, kidney, liver damage, and blood clotting disorders. Even if it 'passed' — IV fluids and examination are needed",
        "Hypothermia: symptoms — shaking, pale, cold paws/ears, lethargy, slow breathing. Wrap in warm blankets, a heating pad (NOT hot!) to the belly. Warm milk (if drinking). See a vet",
        "Prevention: don't walk in heat (> 25°C for pugs, > 30°C for others). Always carry water. Don't leave in a car. For cats — don't open balconies without screens in hot weather"
      ],
      warnings: [
        "DO NOT use ice or ice water — rapid cooling causes vasospasm, chills, and even more internal organ overheating. Only cool water",
        "DO NOT give antipyretics (Paracetamol, Ibuprofen) — they don't work for heatstroke and are toxic. Only physical cooling and a vet",
        "Heatstroke develops faster in dogs than in humans. Dogs don't sweat (only through paws), they cool through breathing. Breathing fast in heat is normal, but if heavy breathing with lethargy — alarm",
        "Cats on balconies in heat: even 'shade' can become an oven. Balcony temperature can be 15°C higher than outside. Window screens are essential but don't protect from heat"
      ]
    },
    {
      id: "pet_drowning",
      title: "💧 Drowning / inhaled water",
      description: "Fell into a bathtub, pool, river, broke through ice. Immediate help is critical.",
      conditions: { emergency_type: ["drowning"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Restoring breathing",
      tags: ["drowning", "emergency", "first_aid"],
      steps: [
        "Immediately pull your pet out of the water. If under ice — don't go in yourself, use a board, rope, branch. Call rescuers if you can't reach them",
        "Hang the animal head down (dog — by back legs, cat — by the body). Tap the back to drain water from the lungs. Don't shake hard — injury",
        "Clean the mouth and nose of water, mud, algae. Pull out the tongue, check breathing. If no breathing — immediately start artificial respiration",
        "Artificial respiration: close the mouth with your hand (so air doesn't escape through the mouth), blow into the nose. For small animals — into mouth and nose together. 20–30 breaths per minute. The chest should rise",
        "If no pulse — chest compressions. Dog: palm on the chest (behind the elbow joint), 100–120 compressions/min. Cat: 2 fingers on the chest, 120–140/min. Alternate 30 compressions + 2 breaths",
        "Even if your pet starts breathing — обязательно see a vet. Water in the lungs causes pneumonia, pulmonary edema, electrolyte imbalance. Oxygen therapy, X-ray, IV fluids are needed",
        "Warm your pet: wrap in dry warm towels, a heating pad to the belly. Hypothermia after drowning is a common complication",
        "Prevention: don't leave your pet near an open bathtub/pool. Close the toilet lid (kittens drown in toilets). On walks near water — keep on a leash"
      ],
      warnings: [
        "DO NOT perform the 'Heimlich maneuver' for water — it doesn't help. Hang the animal head down to let water drain out",
        "DO NOT stop resuscitation before 10–15 minutes. Animals sometimes 'come back' after prolonged cardiac arrest. Continue until the vet arrives",
        "Even 'mild' choking in a bathtub for a kitten/puppy is dangerous. Small lungs fill with water quickly. Monitor breathing for 24 hours",
        "Water in the lungs can cause 'secondary drowning' in 24–48 hours. Even if your pet seems 'fine' — a vet examination is mandatory"
      ]
    },
    {
      id: "pet_electric_shock",
      title: "⚡ Electric shock",
      description: "Chewed wires, bit an electric razor, came into contact with electricity. Internal burns may be worse than external ones.",
      conditions: { emergency_type: ["electric"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving a life",
      tags: ["electric", "burn", "emergency"],
      steps: [
        "DO NOT touch your pet while they are in contact with electricity! Turn off the breaker, unplug the cord, de-energize the area. If you can't — use a dry wooden stick, rubber gloves to move the wire",
        "After de-energizing: check breathing and pulse. Electric shock causes cardiac arrest. If no breathing — artificial respiration + chest compressions (see 'Drowning' section)",
        "Check the mouth: wires and cables can burn the oral cavity, tongue, gums. If there are burns — rinse with cool water, don't give food or water (the esophagus may also be burned)",
        "Check the paws: entry and exit points of the shock. There may be a small external burn but serious internal damage. Cool with cool water for 10–15 minutes",
        "Immediately see a vet. Internal electrical burns: heart, lungs, liver, kidneys may be damaged. EKG, blood tests, IV fluids are needed. Even if 'everything is fine' — hidden damage may appear in 24 hours",
        "Monitor for 48 hours: lethargy, coughing (indicates pulmonary edema), vomiting, seizures, changes in urine color (dark = kidney damage). Any symptom = see a doctor",
        "Prevention: hide ALL wires in cable channels, behind furniture. Don't leave chargers, electric razors, irons plugged in. Kittens and puppies chew everything"
      ],
      warnings: [
        "DO NOT touch your pet with bare hands while they are in contact with electricity — you will also get shocked. De-energize first",
        "Electrical burns are often 'invisible'. A small spot on the paw may hide deadly internal damage. Always see a vet after an electric shock",
        "DO NOT give painkillers without a doctor — many are toxic with internal injuries. Only veterinary care",
        "Kittens and puppies are especially prone to electric shocks. They chew everything, including wires. Protect them like children — they don't understand the danger"
      ]
    },
    {
      id: "snake_bite_pet",
      title: "🐍 Snake / spider / scorpion bite",
      description: "On a walk, in the forest, at the dacha — a venomous snake bite requires immediate help.",
      conditions: { emergency_type: ["snake"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Preventing venom spread",
      tags: ["snake", "bite", "poison", "emergency"],
      steps: [
        "Stay calm. Panic increases heart rate and venom spread. Limit your pet's movement — carry them in your arms, in a carrier",
        "DO NOT suck out venom with your mouth — it will enter your bloodstream through micro-cracks. DO NOT make incisions — infection and blood loss",
        "DO NOT apply a tourniquet — it worsens tissue death. Instead of a tourniquet — immobilization: fix the bitten limb in a resting position, elevate it slightly",
        "Rinse the wound with soap and water. Don't treat with alcohol or iodine inside the wound — only on the edges. Apply antibiotic (Levomekol)",
        "If possible — take a photo of the snake (don't catch it!). This will help the vet identify the species and choose an antivenom. In Russia: viper, grass snake (non-venomous), rarely — gurza, efa, viper",
        "Immediately see a vet. Antivenom is effective in the first 1–2 hours. After that — only supportive therapy. The faster — the better",
        "Monitor: swelling, redness, bleeding from the wound, lethargy, vomiting, seizures, blood clotting disorders (blood from nose, gums). All require emergency care",
        "Prevention: don't walk in tall grass, bushes. Keep on a leash in the forest. Teach the 'heel' command. For cats — window screens, don't let them out in snake regions"
      ],
      warnings: [
        "DO NOT try to catch the snake for a photo — risk of a second bite. Take photos from a distance or remember the color, size, head shape",
        "DO NOT give alcohol, caffeine, stimulants — they increase heart rate and venom spread. Calmness and immobilization are key",
        "A viper bite in a dog may seem 'not scary' — swelling, redness. But in 6–12 hours, hemolysis, kidney failure, and blood clotting disorders develop. Don't underestimate it",
        "Cats die from viper bites more often than dogs — they are smaller, venom spreads faster. Even a 'mild' bite in a cat = immediately see a vet"
      ]
    },
    {
      id: "pet_accident",
      title: "🚗 Car accident / fall from height / crushed by door",
      description: "Dog hit by a car, cat fell from a balcony, paw crushed by a door. Internal injuries may be hidden.",
      conditions: { emergency_type: ["accident"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Diagnosis and help",
      tags: ["accident", "trauma", "emergency"],
      steps: [
        "Ensure safety: stop traffic, move onlookers away. An injured animal may bite from pain — use a muzzle, blanket, gloves. Don't approach from the front",
        "DO NOT move your pet if you suspect a spinal or neck fracture. Place on a shield/board, secure the head with supports. Any movement = paralysis",
        "Check breathing and pulse. If no breathing — artificial respiration + chest compressions. If bleeding — press with sterile cloth, apply a tourniquet above the wound (write down the time)",
        "For a fall from height (cat from balcony): check the mouth for blood (jaw fracture), breathing (pneumothorax), abdomen (internal bleeding). Cats often 'survive' but with fractures, lung tears, liver damage",
        "For a car accident: record the license plate, driver's description, witnesses. Photos, videos. Don't sign anything. In Russia: accident with an animal = administrative offense",
        "Even with a 'minor' impact — see a vet. Internal injuries (spleen, liver, kidney rupture) appear hours later. X-ray, ultrasound — mandatory",
        "Transport: on a hard surface (board, shield), minimize shaking. For cats — a dark carrier. Wrap to prevent hypothermia (shock causes cooling)",
        "After examination: rest for 2–4 weeks. Don't overexert, don't play actively. Internal injuries heal slowly. A second injury on top of the first is dangerous"
      ],
      warnings: [
        "DO NOT move the victim if you suspect a spinal fracture. This can cause paralysis. Secure on a board, transport carefully",
        "DO NOT give food and water if internal injuries are suspected — before surgery, anesthesia requires an empty stomach. You can moisten the gums",
        "Cats 'survive' falls from balconies due to the righting reflex, but often get serious injuries. 'A cat fell from 10 floors and nothing' — a myth. Always see a vet after a fall",
        "DO NOT give painkillers without a doctor — they mask symptoms of internal injuries and may be toxic. Only veterinary care"
      ]
    }
  ]
};

// ===== EXPORT =====
window.emergencyPetDataEn = emergencyPetDataEn;
