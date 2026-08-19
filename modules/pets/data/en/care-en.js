// modules/pets/data/en/care-en.js
// === MODULE: PETS — CARE AND HYGIENE ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "pets",
    category: "care",
    version: "1.0.0",
    lang: "en",
    title: "🛁 Care and Hygiene",
    description: "Fleas, ticks, worms, grooming, claws, ears, teeth — prevention and treatment",
    icon: "🛁",
    color: "#9333ea"
  },

  questions: [
    {
      id: "care_type",
      type: "single",
      text: "What do you need?",
      options: [
        { id: "parasites", label: "🦟 Fleas / ticks / worms / fungus", tags: ["parasites"] },
        { id: "grooming", label: "✂️ Grooming / mats / haircut / bathing", tags: ["grooming"] },
        { id: "claws", label: "🐾 Claws / trimming / broken claw", tags: ["claws"] },
        { id: "ears", label: "👂 Ears / dirt / smell / ear mites", tags: ["ears"] },
        { id: "teeth", label: "🦷 Teeth / bad breath / tartar", tags: ["teeth"] },
        { id: "skin", label: "🩹 Skin / dandruff / flaking / itching", tags: ["skin"] }
      ]
    },
    {
      id: "pet_type",
      type: "single",
      text: "What kind of pet?",
      conditions: { care_type: ["parasites", "grooming", "claws", "ears", "teeth", "skin"] },
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_rabbit", label: "🐰 Rabbit", tags: ["rabbit"] },
        { id: "pet_rodent", label: "🐹 Hamster / guinea pig", tags: ["rodent"] }
      ]
    },
    {
      id: "severity",
      type: "single",
      text: "How serious is it?",
      conditions: { care_type: ["parasites", "grooming", "claws", "ears", "teeth", "skin"] },
      options: [
        { id: "prevention", label: "✅ Prevention / routine care", tags: ["prevention"] },
        { id: "mild", label: "⚠️ Minor issue (a few fleas, light tartar)", tags: ["mild"] },
        { id: "severe", label: "🚨 Serious problem (many parasites, pus, strong odor)", tags: ["severe"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. FLEAS, TICKS, WORMS
    // ============================================================
    {
      id: "fleas_ticks_worms",
      title: "🐜 Fleas, ticks, worms — elimination and prevention",
      description: "Parasites cause discomfort, carry diseases, and can be dangerous to humans.",
      conditions: { care_type: ["parasites"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–7 days",
      yield_estimate: "Parasites eliminated",
      tags: ["parasites", "fleas", "ticks", "worms"],
      steps: [
        "1. Fleas: use spot-on drops or tablets.",
        "2. Treat ALL pets in the household simultaneously.",
        "3. Ticks: check fur after walks, especially ears, armpits, groin.",
        "4. Remove ticks with tweezers (twist counterclockwise). Save for testing.",
        "5. Worms: deworm every 3 months.",
        "6. Treat the environment: vacuum, wash floors.",
        "7. For cats: DO NOT use dog products (permethrin is toxic to cats).",
        "8. For rabbits/rodents: only specialized products.",
        "9. Fungus (ringworm): antifungal creams, UV lamp, isolation."
      ],
      warnings: [
        "DON'T use dog products on cats — permethrin is lethal to cats.",
        "DON'T deworm puppies/kittens under 2 weeks without a vet.",
        "Tick-borne encephalitis and borreliosis are dangerous for dogs.",
        "Fleas carry worms and diseases."
      ]
    },
    // ============================================================
    // 2. RABBIT PARASITES
    // ============================================================
    {
      id: "rabbit_parasites",
      title: "🐰 Parasites in rabbits — ear mites, fleas, coccidiosis",
      description: "Rabbits suffer from ear mites, fleas, and coccidiosis. Treatment is specific.",
      conditions: { care_type: ["parasites"], pet_type: ["pet_rabbit"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–2 weeks",
      yield_estimate: "Parasites eliminated",
      tags: ["rabbit", "parasites", "ear_mites"],
      steps: [
        "1. Ear mites: dark crusts in ears, itching, head shaking. Treatment: ear drops.",
        "2. Fleas: only specialized rabbit drops.",
        "3. Coccidiosis: diarrhea, bloating, weight loss. Requires antibiotics.",
        "4. Lice: treat with ivermectin (as prescribed).",
        "5. Prevention: regular cage cleaning, quarantine new animals.",
        "6. Test stool for coccidiosis once a year."
      ],
      warnings: [
        "DON'T use dog/cat drops on rabbits — lethal.",
        "Ear mites require veterinary treatment.",
        "Coccidiosis in rabbits is often fatal without treatment."
      ]
    },
    // ============================================================
    // 3. GROOMING
    // ============================================================
    {
      id: "pet_grooming",
      title: "✂️ Grooming — haircut, bathing, brushing",
      description: "Mats, dandruff, dirty fur — not just aesthetic, but skin health.",
      conditions: { care_type: ["grooming"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "30–120 minutes",
      yield_estimate: "Clean, healthy coat",
      tags: ["grooming", "coat", "hygiene"],
      steps: [
        "1. Brushing: long-haired — daily, short-haired — 1–2 times a week.",
        "2. Mats: use a mat rake or de-matting tool. Don't pull!",
        "3. Bathing: dogs — 1 time per 1-2 months. Cats — rarely.",
        "4. Use animal shampoo (different pH from human).",
        "5. Dry thoroughly with a dryer or towel.",
        "6. Trim fur around paws, pads.",
        "7. For cats with mats — see a groomer.",
        "8. For dogs with undercoat (huskies, spitz) — don't shave in summer."
      ],
      warnings: [
        "DON'T use human shampoo — causes irritation.",
        "DON'T shave 'bald' without medical indication.",
        "DON'T bathe cats when stressed, after vaccination, during heat.",
        "Mats in cats are painful — don't ignore."
      ]
    },
    // ============================================================
    // 4. CLAWS
    // ============================================================
    {
      id: "pet_claws",
      title: "🐾 Claws — trimming and injuries",
      description: "Claws grow, scratch, break. Proper trimming prevents problems.",
      conditions: { care_type: ["claws"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Short, safe claws",
      tags: ["claws", "nails", "care"],
      steps: [
        "1. Use animal nail clippers.",
        "2. Dogs: trim every 2–4 weeks.",
        "3. Cats: trim only front claws.",
        "4. If you cut the quick: apply styptic powder.",
        "5. Broken claw: clean with peroxide, bandage.",
        "6. Small animals: use specialized clippers.",
        "7. Prevention: walks on asphalt, scratching posts."
      ],
      warnings: [
        "DON'T trim if you can't see the quick — better to trim less but more often.",
        "DON'T use regular scissors — they split the claw.",
        "DON'T declaw cats (onychectomy) — prohibited.",
        "If claw is broken and bleeding >10 minutes — see a vet."
      ]
    },
    // ============================================================
    // 5. EARS
    // ============================================================
    {
      id: "pet_ears",
      title: "👂 Ears — hygiene and diseases",
      description: "Dirty ears, smell, redness, brown discharge — signs of otitis, fungus, or ear mites.",
      conditions: { care_type: ["ears"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Clean ears",
      tags: ["ears", "hygiene", "health"],
      steps: [
        "1. Check ears weekly. Normal: pink, odorless.",
        "2. Cleaning: cotton pad with ear cleaner (NOT cotton swabs!).",
        "3. Floppy-eared breeds — check more often.",
        "4. Yeast smell — fungus. Treatment as prescribed.",
        "5. Ear mites: dark debris, itching. Drops as prescribed.",
        "6. Allergy: redness, itching. Change food.",
        "7. If pet resists — wrap in a towel."
      ],
      warnings: [
        "DON'T use cotton swabs — risk of eardrum damage.",
        "DON'T pour peroxide, alcohol — irritates.",
        "If ear is red, hot — see a vet."
      ]
    },
    // ============================================================
    // 6. TEETH
    // ============================================================
    {
      id: "pet_teeth",
      title: "🦷 Teeth — hygiene and diseases",
      description: "Tartar, bad breath, plaque, stomatitis — problems needing attention.",
      conditions: { care_type: ["teeth"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Clean teeth and fresh breath",
      tags: ["teeth", "hygiene", "health"],
      steps: [
        "1. Check teeth monthly.",
        "2. Brushing: special toothbrush and pet toothpaste.",
        "3. Tartar: only veterinary ultrasonic cleaning.",
        "4. Prevention: dental chews, special food.",
        "5. Cats: teeth brushed less often, but still important.",
        "6. Bad breath — sign of bacteria, kidney disease, diabetes.",
        "7. Professional cleaning: once a year for small breeds."
      ],
      warnings: [
        "DON'T use human toothpaste — fluoride is toxic.",
        "DON'T give chicken bones — dangerous.",
        "DON'T try to scrape tartar yourself.",
        "Bad breath is not 'normal' — check health."
      ]
    },
    // ============================================================
    // 7. SKIN
    // ============================================================
    {
      id: "pet_skin",
      title: "🩹 Skin — dandruff, flaking, itching",
      description: "Dandruff, flaking, itching, redness — signs of allergy, fungus, parasites, or improper care.",
      conditions: { care_type: ["skin"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Healthy skin",
      tags: ["skin", "allergy", "dermatitis"],
      steps: [
        "1. Check for parasites: fleas, mites.",
        "2. Change food to hypoallergenic (salmon, lamb, turkey).",
        "3. Check humidity (40–60%).",
        "4. Bathe no more than once a month with mild shampoo.",
        "5. Supplements: fish oil (Omega-3), biotin.",
        "6. If wet spots — dermatitis. Treatment as prescribed.",
        "7. If dandruff + itching + hair loss — demodicosis. Special treatment."
      ],
      warnings: [
        "DON'T use human shampoo — dries skin.",
        "DON'T pop pimples or scratch scabs.",
        "If itching worsens — don't give antihistamines without a vet.",
        "Skin diseases are often chronic — be patient."
      ]
    }
  ]
});