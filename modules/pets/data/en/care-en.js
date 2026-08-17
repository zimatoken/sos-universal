// === MODULE: PETS — CARE AND HYGIENE ===
const careDataEn = {
  category: "care",
  title: "🛁 Care and hygiene",
  description: "Fleas, ticks, worms, grooming, claws, ears, teeth — prevention and treatment",

  questions: [
    {
      id: "care_type",
      text: "What do you need?",
      type: "single",
      options: [
        { id: "parasites", label: "🦟 Fleas / ticks / worms / fungus", tags: ["parasites"] },
        { id: "grooming", label: "✂️ Grooming / mats / trimming / bathing", tags: ["grooming"] },
        { id: "claws", label: "🐾 Claws / trimming / broken claw", tags: ["claws"] },
        { id: "ears", label: "👂 Ears / dirt / smell / itch", tags: ["ears"] },
        { id: "teeth", label: "🦷 Teeth / bad breath / tartar", tags: ["teeth"] },
        { id: "skin", label: "🩹 Skin / dandruff / flaking / itching", tags: ["skin"] }
      ]
    },
    {
      id: "pet_type",
      text: "What kind of pet?",
      type: "single",
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_small", label: "🐰 Rabbit / hamster / guinea pig", tags: ["small"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is it?",
      type: "single",
      options: [
        { id: "prevention", label: "✅ Prevention / routine care", tags: ["prevention"] },
        { id: "mild", label: "⚠️ Minor problem (a few fleas, mild tartar)", tags: ["mild"] },
        { id: "severe", label: "🚨 Serious problem (many parasites, pus, strong odor)", tags: ["severe"] }
      ]
    }
  ],

  solutions: [
    {
      id: "fleas_ticks_worms",
      title: "🐜 Fleas, ticks, worms — elimination and prevention",
      description: "Parasites cause discomfort, carry diseases, and can be dangerous to humans.",
      conditions: { care_type: ["parasites"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Elimination of parasites",
      tags: ["parasites", "fleas", "ticks", "worms"],
      steps: [
        "Fleas: use spot-on treatments (Frontline, Advocate, Stronghold) or tablets (Comfortis, Bravecto). Treat ALL pets in the house at the same time. Otherwise, fleas will jump to the 'untreated' one",
        "Ticks: after walks, thoroughly check the fur, especially in ears, armpits, groin, between toes. Remove ticks with tweezers (twisting motion, don't pull), rotating counterclockwise. Save the tick in a jar for encephalitis / borreliosis testing",
        "Worms: give dewormers every 3 months (Milbemax, Drontal, Prazitel). For puppies/kittens — every 2 weeks until 3 months, then monthly until 6 months. Fecal tests 1–2 times a year",
        "Treat the premises: vacuum, wash floors, treat with flea sprays (Raptor, BlokhNet). Fleas live in carpets, sofas, cracks. One flea lays 50 eggs per day",
        "For cats: DO NOT use dog flea/tick products (some contain permethrin, toxic to cats). Only 'for cats'",
        "For small animals (rabbits, hamsters): DO NOT use dog/cat flea drops — they are toxic. Use special products (Beaphar for rodents) or consult a vet",
        "Fungus (ringworm): round bald patches, flaking. Contagious to humans! Wear gloves. Treatment: veterinary antifungal ointments (Clotrimazole, Mikozolon), UV lamp, isolation from other animals",
        "Prevention: regular flea/tick treatment (spot-on every 4 weeks, tablets every 3 months). Don't walk in tall grass. Check after walks"
      ],
      warnings: [
        "DO NOT use dog products on cats — permethrin, amitraz, some pyrethroids are deadly for cats. Even 'accidental' contact with a dog collar can be fatal",
        "DO NOT give dewormers to puppies/kittens under 2 weeks without a vet. Some drugs are toxic for babies",
        "Tick-borne encephalitis and borreliosis are transmitted to dogs. A vaccine for tick-borne borreliosis exists for dogs. Encephalitis — no, only prevention (drops, collars)",
        "Fleas carry worms (dipylidiasis), distemper, bartonellosis. Even one flea is dangerous. Regular treatment is not a luxury, it's a necessity"
      ]
    },
    {
      id: "pet_grooming",
      title: "✂️ Grooming — trimming, bathing, brushing",
      description: "Mats, dandruff, dirty coat — not just aesthetics, but skin health.",
      conditions: { care_type: ["grooming"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "30–120 minutes",
      yield_estimate: "Clean, healthy coat",
      tags: ["grooming", "coat", "hygiene"],
      steps: [
        "Brushing: long-haired — daily, short-haired — 1–2 times a week. Use a furminator for shedding, slicker for mats, wide-tooth comb for detangling",
        "Mats: don't pull! Use a mat splitter or dematting rake. For severe mats — special spray (Tropiclean, Bio-Groom) that softens them. As a last resort — cut with blunt-tipped scissors",
        "Bathing: dogs — once every 1–2 months (frequent washing removes the skin's protective layer). Cats — rarely, only if very dirty. Use pet shampoo (pH differs from human)",
        "After bathing: thoroughly dry with a hairdryer (not hot air!) or towels. Damp fur = colds, fungus, skin irritation. Especially important for small breeds and puppies",
        "Trim the fur around the paws, paw pads (where dirt, snow, ice accumulate). In winter — don't trim too short, fur protects from cold",
        "For cats: if the fur is badly matted and the cat won't let you brush — book a groomer. A professional groomer will handle it in 1–2 hours. Don't torture your cat for hours",
        "Check the skin when brushing: redness, flaking, fleas, ticks, wounds. Early diagnosis = quick treatment",
        "For dogs with undercoat (huskies, malamutes, spitz): NEVER shave 'to the skin' in summer. The undercoat protects from overheating. Shaving disrupts thermoregulation"
      ],
      warnings: [
        "DO NOT use human shampoo — human skin pH is 5.5, dogs 6.2–7.5, cats 6.2–7.0. Human shampoo causes irritation, dandruff, itching",
        "DO NOT shave fur 'to the skin' without medical reasons. Fur protects from sun, overheating, hypothermia. Bare skin = burns, frostbite, injuries",
        "DO NOT bathe a cat if it's stressed, after vaccination (2 weeks), or during heat. Stress + water = shock, illness",
        "Mats in cats are painful — they pull the skin, cause irritation, ulcers. Don't ignore them. Regular brushing or a groomer"
      ]
    },
    {
      id: "pet_claws",
      title: "🐾 Claws — trimming and injuries",
      description: "Claws grow, scratch, break. Proper trimming prevents problems.",
      conditions: { care_type: ["claws"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Short, safe claws",
      tags: ["claws", "nails", "care"],
      steps: [
        "Use pet nail clippers (guillotine or pliers style). Human nail clippers crush the claw, causing splitting. Scratching posts help but don't replace trimming",
        "For dogs: trim claws every 2–4 weeks. Light claws — the blood vessel (quick) is visible, trim 2 mm from it. Dark claws — trim a little at a time, check the cut (the quick looks like a black dot in the center)",
        "For cats: trim only front claws (back claws usually wear down naturally). Trim 1–2 mm from the quick. If the cat won't let you — wrap in a towel, take out one paw at a time",
        "If you cut the quick (blood): apply styptic powder, hydrogen peroxide, cornstarch, or flour. Press for 2–3 minutes. The bleeding will stop. Don't panic — it's painful but not fatal",
        "Broken claw: if broken to the quick — painful, risk of infection. Treat with hydrogen peroxide, apply a bandage, use an Elizabethan collar (to prevent licking). See a vet — possible removal of the remnant under anesthesia",
        "For small animals (rabbits, hamsters): claws trimmed with special nail clippers. Rabbits — every 2–3 months. Don't over-trim — bleeding and pain",
        "If your pet scratches furniture or people — it's not 'spite', it's instinct. Scratching posts (vertical, horizontal, different materials), regular trimming, nail caps (for cats) — solutions",
        "Prevention: regular walks on asphalt wear down dogs' claws. Cats — scratching posts, trimming every 2–3 weeks"
      ],
      warnings: [
        "DO NOT trim claws if you can't see the quick and aren't sure. Better to trim a little more often than a lot rarely. Cut quick is painful and bleeds",
        "DO NOT use regular scissors or nail clippers — they crush the claw, cause cracks, splitting. Only special nail clippers",
        "DO NOT declaw cats (onychectomy). It's amputation of the phalanx, banned in many countries, causes chronic pain, gait changes, aggression. Trimming + scratching posts = solution",
        "If a claw is broken and bleeding for > 10 minutes — see a vet. Possible infection, need for pain relief, antibiotics"
      ]
    },
    {
      id: "pet_ears",
      title: "👂 Ears — hygiene and diseases",
      description: "Dirty ears, smell, redness, brown discharge — signs of otitis, fungus, or ear mites.",
      conditions: { care_type: ["ears"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Clean ears",
      tags: ["ears", "hygiene", "health"],
      steps: [
        "Check ears once a week. Normal — pink, odorless, minimal wax. If brown discharge, smell, redness — otitis (bacteria, fungus, mites). See a vet",
        "Ear cleaning: cotton pad (NOT a swab!) moistened with veterinary lotion (Otinum, Epi-Otic). Wipe the visible part of the ear, the pinna. DON'T go deep — eardrum",
        "Floppy-eared breeds (spaniels, dachshunds) get dirtier ears — check them more often. After walks — check, wipe",
        "If the ears smell yeasty, rotten — fungus. Treatment: antifungal drops (at a veterinary pharmacy). Only by prescription",
        "Ear mites (otodectosis): dark crumbs, like ground coffee, severe itching. Treatment: anti-mite drops (Bars, Advocate). The vet prescribes the regimen",
        "Allergy: redness, itching in ears. Often related to food. Diet change, elimination of allergens — solution. Consult a vet",
        "If your pet won't let you clean ears — wrap in a towel, ask for help. Or book a groomer / vet for professional cleaning"
      ],
      warnings: [
        "DO NOT use cotton swabs for ears — you can puncture the eardrum or push wax deeper. Only cotton pads on visible surfaces",
        "DO NOT pour hydrogen peroxide, alcohol, vinegar into ears — they irritate, burn, worsen inflammation. Only special veterinary lotions",
        "If the ear is very red, hot, painful — don't touch it. Take to the vet. Otitis can become chronic"
      ]
    },
    {
      id: "pet_teeth",
      title: "🦷 Teeth — hygiene and diseases",
      description: "Tartar, bad breath, plaque, stomatitis — problems requiring attention.",
      conditions: { care_type: ["teeth"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Clean teeth and fresh breath",
      tags: ["teeth", "hygiene", "health"],
      steps: [
        "Check teeth once a month. Normal — white, odorless. Yellow plaque, tartar, bad breath — stomatitis, periodontitis. Small breed dogs (Yorkies, Chihuahuas) — especially common",
        "Teeth brushing: special toothbrush and toothpaste for animals (human toothpaste — minty, foaming, the animal will swallow it). Brush 2–3 times a week. Start gradually — with finger, then brush",
        "Tartar: if already present — only veterinary ultrasonic cleaning under anesthesia. Don't try to scrape it off yourself — you'll damage gums and enamel",
        "Prevention: dental chews, special dental diets (Dental, Royal Canin Dental), chew bones from pet stores. DON'T give chicken bones — they splinter",
        "For cats: teeth are brushed less often, but it's still important. Cats hide dental pain, continuing to eat. Signs: eating on one side, dropping dry food, drooling, smell. Stomatitis in cats is common",
        "Bad breath is not 'normal'. It's a sign of bacteria, decay, kidney failure, diabetes. If the smell persists after brushing — see a vet",
        "Professional cleaning at the vet: recommended once a year for small breeds, once every 2 years for large breeds. Cost: 3000–8000 rubles",
        "After cleaning: don't feed for 2 hours, give soft food for 24 hours. Then maintain with regular brushing"
      ],
      warnings: [
        "DO NOT use human toothpaste — fluoride is toxic if swallowed, mint irritates. Only special pet toothpaste (liver, chicken flavor)",
        "DO NOT give bones (chicken, turkey) for teeth cleaning — they splinter, get stuck in the throat, cut gums. Use special chew bones from pet stores",
        "DO NOT try to scrape tartar yourself — you'll damage enamel, gums, introduce infection. Only veterinary cleaning",
        "Bad breath is not 'just smell'. If it doesn't go away after brushing — get tests done (kidneys, liver, blood sugar). Internal diseases are possible"
      ]
    },
    {
      id: "pet_skin",
      title: "🩹 Skin — dandruff, flaking, itching",
      description: "Dandruff, flaking, itching, redness — signs of allergies, fungus, parasites, or improper care.",
      conditions: { care_type: ["skin"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–4 weeks",
      yield_estimate: "Healthy skin",
      tags: ["skin", "allergy", "dermatitis"],
      steps: [
        "Check for parasites: fleas, ticks, lice. If present — treat (see 'Parasites' section). Often itching and flaking = fleas",
        "Change food. Allergy to chicken, beef, grains — common cause of skin problems. Try food with a new protein source (salmon, lamb, turkey) or hypoallergenic (Royal Canin Anallergenic, Purina HA)",
        "Check indoor humidity (normal 40–60%). Dry air in winter causes dandruff. Humidifier + fish oil in food (Omega-3) improve skin",
        "Bathing: no more than once a month with mild shampoo (with aloe, oats). Frequent washing removes the protective layer, dries skin. After bathing — skin conditioner",
        "Food supplements: fish oil (Omega-3), flaxseed oil, biotin. They improve skin and coat. Consult a vet for dosage",
        "If patches are red, weeping — dermatitis. Treatment: antihistamines (Suprastin, Zodak), topical ointments (with corticosteroids). Only by prescription",
        "If dandruff + itching + baldness — possibly demodicosis (skin mites). Treated with special drugs (Bravecto, Advocate). Diagnosis made by a vet",
        "For stress shedding (after moving, new cat) — calm your pet, add pheromones (Feliway, Adaptil), more play and attention"
      ],
      warnings: [
        "DO NOT use human shampoos, soap on skin — they dry, irritate. Only special veterinary shampoos",
        "DO NOT pop pimples, don't scratch crusts — you'll introduce infection. Treat with antiseptic (Chlorhexidine) and show to a doctor",
        "If itching worsens — don't give antihistamines without a vet. Some drugs are toxic to animals",
        "Skin diseases are often chronic. Be patient — treatment can take 1–3 months"
      ]
    }
  ]
};

// ===== EXPORT =====
window.careDataEn = careDataEn;