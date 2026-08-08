// === MODULE: PETS — CARE & HYGIENE (EN) ===
const careDataEN = {
  category: "care",
  title: "🛁 Care & Hygiene",
  description: "Fleas, ticks, worms, grooming, claws, ears, teeth — prevention and treatment",

  questions: [
    {
      id: "care_type",
      text: "What is needed?",
      type: "single",
      options: [
        { id: "parasites", label: "Fleas / ticks / worms / fungus", tags: ["parasites"] },
        { id: "grooming", label: "Grooming / mats / haircut / bathing", tags: ["grooming"] },
        { id: "claws", label: "Claws / trim / broken claw", tags: ["claws"] },
        { id: "ears", label: "Ears / dirt / smell / mites", tags: ["ears"] },
        { id: "teeth", label: "Teeth / bad breath / tartar", tags: ["teeth"] },
        { id: "skin", label: "Skin / dandruff / flaking / itching", tags: ["skin"] }
      ]
    },
    {
      id: "pet_type",
      text: "What animal?",
      type: "single",
      options: [
        { id: "dog", label: "Dog", tags: ["dog"] },
        { id: "cat", label: "Cat", tags: ["cat"] },
        { id: "small", label: "Rabbit / hamster / guinea pig", tags: ["small"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is it?",
      type: "single",
      options: [
        { id: "prevention", label: "Prevention / routine care", tags: ["prevention"] },
        { id: "mild", label: "Minor problem (few fleas, light tartar)", tags: ["mild"] },
        { id: "severe", label: "Serious problem (many parasites, pus, strong smell)", tags: ["severe"] }
      ]
    }
  ],

  solutions: [
    {
      id: "fleas_ticks_worms",
      title: "🐜 Fleas, ticks, worms — elimination and prevention",
      description: "Parasites cause discomfort, carry diseases, can be dangerous for humans.",
      conditions: { care_type: ["parasites"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Eliminating parasites",
      tags: ["parasites", "fleas", "ticks", "worms"],
      steps: [
        "Fleas: use spot-on drops (Frontline, Advocate, Stronghold) or tablets (Comfortis, Bravecto). Treat ALL animals in the house simultaneously. Otherwise fleas will jump to the 'untreated' one",
        "Ticks: after walks thoroughly inspect fur, especially in ears, armpits, groin, between toes. Remove tick with tweezers (twisting motion, don't pull), rotating counterclockwise. Save tick in a jar for encephalitis / borreliosis analysis",
        "Worms: deworm every 3 months (Milbemax, Drontal, Prazitel). For puppies/kittens — every 2 weeks until 3 months, then monthly until 6 months. Fecal analysis 1–2 times a year",
        "Treat the premises: vacuum, wash floors, use flea sprays (Raptor, BlohNet). Fleas live in carpets, sofas, cracks. One flea lays 50 eggs a day",
        "For cats: DO NOT use dog flea/tick products (some contain permethrin, toxic to cats). Only 'for cats' products",
        "For small animals (rabbits, hamsters): DO NOT use dog/cat flea drops — they are toxic. Use special products (Beaphar for rodents) or consult a vet",
        "Fungus (ringworm): round bald patches, flaking. Contagious to humans! Wear gloves. Treatment: veterinary antifungal ointments (Clotrimazole, Mycozolon), UV lamp, isolation from other animals",
        "Prevention: regular flea/tick treatment (every 4 weeks drops, every 3 months tablets). Do not walk in tall grass. Check after walks"
      ],
      warnings: [
        "DO NOT use dog products on cats — permethrin, amitraz, some pyrethroids are fatal to cats. Even 'accidental' contact with a dog collar can kill",
        "DO NOT give dewormers to puppies/kittens under 2 weeks without a vet. Some drugs are toxic to babies",
        "Tick-borne encephalitis and borreliosis are transmitted to dogs. Vaccination against tick-borne borreliosis exists for dogs. Encephalitis — no, only prevention (drops, collars)",
        "Fleas carry worms (dipylidiosis), plague, bartonellosis. Even one flea is dangerous. Regular treatment is not a luxury, but a necessity"
      ]
    },
    {
      id: "pet_grooming",
      title: "✂️ Grooming — haircut, bathing, brushing",
      description: "Mats, dandruff, dirty fur — not just aesthetics, but skin health.",
      conditions: { care_type: ["grooming"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "30–120 minutes",
      yield_estimate: "Clean, healthy coat",
      tags: ["grooming", "coat", "hygiene"],
      steps: [
        "Brushing: long-haired — daily, short-haired — 1–2 times a week. Use furminator for shedding, slicker for mats, wide-tooth comb for detangling",
        "Mats: do not rip out! Use mat splitter or rake comb. For severe mats — special spray (Tropiclean, Bio-Groom) that softens. In extreme case — cut with blunt-tip scissors",
        "Bathing: dogs — once every 1–2 months (frequent bathing washes off skin protective layer). Cats — rarely, only when very dirty. Use animal shampoo (pH differs from human)",
        "After bathing: dry thoroughly with a hairdryer (not hot air!) or towel. Wet fur = cold, fungus, skin irritation. Especially important for small breeds and puppies",
        "Trim fur around paws, pads (where dirt, snow, ice accumulate). In winter — don't trim short, fur protects from cold",
        "For cats: if fur is heavily matted and cat won't let you brush — book a groomer. Professional groomer will handle in 1–2 hours. Don't torture the cat for hours",
        "Check skin while brushing: redness, flaking, fleas, ticks, wounds. Early diagnosis = quick treatment",
        "For dogs with undercoat (husky, malamute, spitz): never shave 'to the skin' in summer. Undercoat protects from overheating. Shaving disrupts thermoregulation"
      ],
      warnings: [
        "DO NOT use human shampoo — human skin pH is 5.5, dog is 6.2–7.5, cat is 6.2–7.0. Human shampoo causes irritation, dandruff, itching",
        "DO NOT shave fur 'to zero' without medical indications. Fur protects from sun, overheating, hypothermia. Bare skin = burns, frostbite, injuries",
        "DO NOT bathe a cat if it is stressed, after vaccination (2 weeks), during heat. Stress + water = shock, illness",
        "Mats in cats are painful — they pull skin, cause irritation, ulcers. Do not ignore. Regular brushing or groomer"
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
        "Use animal nail clippers (guillotine or scissor type). Human nail scissors crush the claw causing splitting. Scratching posts help but don't replace trimming",
        "For dogs: trim every 2–4 weeks. Light claws — blood vessel (quick) is visible, trim 2 mm from it. Dark claws — trim little by little, check the cut (quick looks like black dot in center)",
        "For cats: trim only front claws (back claws usually wear down themselves). Trim 1–2 mm from quick. If cat won't let you — wrap in towel, pull out one paw at a time",
        "If you cut the quick (blood): apply styptic powder (stipic, peroxide, corn starch, flour). Press for 2–3 minutes. Blood will stop. Don't panic — it's painful but not fatal",
        "Broken claw: if broken to the quick — painful, infection risk. Treat with peroxide, apply bandage, collar (so it won't lick). Go to vet — may need removal of remainder under anesthesia",
        "For small animals (rabbits, hamsters): claws are trimmed with special clippers. Rabbits — every 2–3 months. Don't overtrim — bleeding and pain",
        "If pet scratches furniture, people — this is not 'anger', it's instinct. Scratching posts (vertical, horizontal, different materials), regular trimming, claw caps (for cats) — solutions",
        "Prevention: regular walks on asphalt wear down dog claws. Cats — scratching posts, trimming every 2–3 weeks"
      ],
      warnings: [
        "DO NOT trim claws if you can't see the quick and are unsure. Better to trim little by little more often, than a lot rarely. Cut quick is painful and bleeds",
        "DO NOT use regular scissors or nail clippers — they crush the claw, cause cracks, splitting. Only special nail clippers",
        "DO NOT declaw cats (onychectomy). This is amputation of the toe bone, banned in many countries, causes chronic pain, gait changes, aggression. Trimming + scratching post = solution",
        "If claw is broken and bleeding > 10 minutes — go to the vet. Possible infection, need pain relief, antibiotics"
      ]
    },
    {
      id: "pet_ears_teeth",
      title: "👂 Ears and teeth — hygiene and diseases",
      description: "Dirty ears, bad breath, tartar — not just 'unpleasant', but signs of disease.",
      conditions: { care_type: ["ears", "teeth"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Clean ears and teeth",
      tags: ["ears", "teeth", "hygiene", "health"],
      steps: [
        "Ears: inspect once a week. Normal — pink, no smell, minimal wax. If brown mass, smell, redness — this is otitis (bacteria, fungus, mites). Go to vet",
        "Ear cleaning: cotton pad (NOT swab!) moistened with veterinary lotion (Otinum, Epi-Otic). Wipe visible part of ear, auricle. DO NOT go deep — eardrum. Floppy-eared breeds (spaniels, dachshunds) get dirty ears more often",
        "Teeth: inspect once a month. Normal — white, no smell. Yellow plaque, tartar, bad breath — stomatitis, periodontosis. Small dog breeds (yorkies, chihuahuas) especially often",
        "Teeth cleaning: special toothbrush and paste for animals (human is minty, foams, animal will swallow). Brush 2–3 times a week. Start gradually — with finger, then brush",
        "Tartar: if already present — only veterinary ultrasonic cleaning under anesthesia. Do not try to scrape yourself — you will damage gums, enamel. Prevention: chew toys, special food (Dental, Royal Canin Dental)",
        "If pet won't let you clean ears/teeth — don't force. Use towel-wrap restraint, ask helper. Or book groomer / vet for professional cleaning",
        "For cats: teeth are cleaned less often but also important. Cats hide tooth pain, continuing to eat. Signs: eats on one side, drops dry food, drooling, smell. Stomatitis in cats — common problem",
        "Prevention: regular ear and teeth cleaning, proper food (not soft food — it sticks to teeth), chew toys, vet checkup 1–2 times a year"
      ],
      warnings: [
        "DO NOT use cotton swabs for ears — you can puncture the eardrum or push wax deeper. Only cotton pads on visible surface",
        "DO NOT use human toothpaste — fluoride is toxic when swallowed, mint irritates. Only special animal pastes (liver, chicken flavor)",
        "DO NOT give bones (chicken, turkey) for teeth cleaning — they break, get stuck in throat, cut gums. Use only special chew bones from pet stores",
        "Bad breath is not 'normal'. This is a sign of bacteria, rot, kidney failure, diabetes. Do not ignore. Veterinary examination is mandatory"
      ]
    }
  ]
};

window.careDataEN = careDataEN;
