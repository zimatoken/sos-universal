// === MODULE: PETS — LOST PET (EN) ===
const lostDataEN = {
  category: "lost",
  title: "🔍 Lost Pet",
  description: "Dog ran away, cat didn't return, parrot flew out — search algorithm",

  questions: [
    {
      id: "pet_type",
      text: "What animal is lost?",
      type: "single",
      options: [
        { id: "dog", label: "Dog", tags: ["dog"] },
        { id: "cat", label: "Cat", tags: ["cat"] },
        { id: "small", label: "Rabbit / hamster / guinea pig", tags: ["small"] },
        { id: "bird", label: "Bird (parrot, canary)", tags: ["bird"] },
        { id: "other", label: "Other (turtle, snake, iguana)", tags: ["other"] }
      ]
    },
    {
      id: "circumstance",
      text: "Under what circumstances?",
      type: "single",
      options: [
        { id: "door_open", label: "Escaped through open door / window", tags: ["door_open"] },
        { id: "walk", label: "Ran away during walk / in the yard", tags: ["walk"] },
        { id: "frightened", label: "Frightened by fireworks / thunder / car and ran", tags: ["frightened"] },
        { id: "stolen", label: "Suspect theft / caught by catchers", tags: ["stolen"] }
      ]
    },
    {
      id: "time",
      text: "How much time has passed?",
      type: "single",
      options: [
        { id: "less_1h", label: "Less than 1 hour", tags: ["recent"] },
        { id: "1_6h", label: "1–6 hours", tags: ["short"] },
        { id: "6_24h", label: "6–24 hours", tags: ["medium"] },
        { id: "more_24h", label: "More than a day", tags: ["long"] }
      ]
    }
  ],

  solutions: [
    {
      id: "lost_dog_search",
      title: "🐕 Lost dog — search and return",
      description: "Dogs usually don't go far from home in the first hours. Quick search is the key to success.",
      conditions: { pet_type: ["dog"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–48 hours",
      yield_estimate: "Finding the dog",
      tags: ["dog", "lost", "search"],
      steps: [
        "DO NOT panic. The dog senses your scent and may return on its own. Leave the door / window open where it escaped. Put its favorite toy, water bowl, your scented item",
        "Immediately walk a 500 m radius from home: yard, entrances, basements, attics, garages, construction sites, parks. Dogs often hide in quiet places",
        "Call by name loudly but calmly. Do not shout aggressively — a frightened dog may run further. Use favorite command, whistle, sound of food bowl",
        "Send photos to neighbor chats, yard chats, district chats, volunteer groups (VK, Telegram, Instagram). Specify: breed, color, name, distinctive features, chip number, your phone",
        "Post flyers in entrances, at bus stops, in shops, vet clinics, pet stores. Large photo, contacts, reward",
        "Contact shelters, vet clinics, catching services, police. File reports on websites: pet911, poiskzoo, petalert. Register on international databases (petmicrochiplookup)",
        "If dog is chipped — report to chip database about the loss. If not — this is a reason to chip after finding",
        "If dog was frightened by fireworks / thunder — search in shelters: basements, garages, bushes, under cars. Frightened dogs run straight without looking back and hide",
        "Do not stop searching after 2–3 days. Dogs are found after weeks and months. Continue posting, updating flyers"
      ],
      warnings: [
        "DO NOT run after the dog shouting — a frightened dog will run further. Call calmly, crouch down, offer a treat",
        "DO NOT wait 'a little more' — first 3–6 hours are critical. The faster you start searching, the higher the chances",
        "Be careful with 'good Samaritans' — scammers demand money 'for return' before showing the dog. Demand photo/video of the live pet",
        "If the dog is an aggressive breed (pitbull, Caucasian shepherd, rottweiler) — warn neighbors that it is lost. People may panic and harm the dog"
      ]
    },
    {
      id: "lost_cat_search",
      title: "🐈 Lost cat — search and capture",
      description: "Cats don't 'run away' — they hide. 90% of cats are found within 200 m of home.",
      conditions: { pet_type: ["cat"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–72 hours",
      yield_estimate: "Finding the cat",
      tags: ["cat", "lost", "search"],
      steps: [
        "DO NOT panic. Cats rarely go far. They usually hide within 50–200 m: basements, attics, garages, bushes, construction sites, ventilation shafts",
        "Walk around the house in a 200 m radius during quiet time (night, early morning). Call softly, quietly. Cats respond to owner's voice but are afraid of loud sounds",
        "Check ALL basements, attics, garages in the building. Ask neighbors to open their basements. Cats climb into ventilation, behind pipes, into storage cabinets",
        "Put a litter box, food and water bowl at the entrance / window where it escaped. Put your worn item (t-shirt, sock) — the scent will attract the cat",
        "Go out at night with a flashlight and call. Cats often come out at night when it's quiet. Listen — it may meow in response",
        "Send photos to neighbor chats, volunteer groups, vet clinics. Specify: color, name, distinctive features, chip number, phone, reward",
        "If the cat is indoor and doesn't go outside — it is scared and hiding. Don't expect it to 'come back on its own'. Search actively, look in every corner",
        "Use a live trap (cage) with aromatic food (fish, canned food) in places where you saw the cat. Check every 2–3 hours so the cat doesn't freeze / overheat",
        "If cat is not found in 3 days — expand radius to 1 km, contact shelters, catching services, post on social media, search websites"
      ],
      warnings: [
        "DO NOT wait 'it will come back on its own' — cats, especially indoor ones, in stress can hide for days without food and water. Active search is needed from the first hours",
        "DO NOT feed stray cats at the entrance hoping to 'attract yours' — this will attract other cats who will drive your cat away",
        "If cat is chipped — report to database. If not — after finding, definitely chip and use a collar with address tag",
        "Cats after stress (thunder, fireworks, renovation) may 'forget' the way home. Even if it used to go outside — after fright it may get lost"
      ]
    },
    {
      id: "lost_small_pet",
      title: "🐹 Lost hamster / rabbit / bird — search in apartment and house",
      description: "Small animals hide in cracks, behind furniture, in ventilation. Quick search is important — they dehydrate quickly.",
      conditions: { pet_type: ["small", "bird"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1–12 hours",
      yield_estimate: "Finding the pet",
      tags: ["small", "bird", "lost", "search"],
      steps: [
        "Close all doors, windows, ventilation openings in the room where you last saw it. Small animals quickly hide in cracks",
        "Remove cat / dog to another room. Even a friendly pet may accidentally injure a small one (play, crush)",
        "Check: behind refrigerator, under cabinets, behind radiators, in ventilation, under bed, in clothing closets, in desk drawers, behind curtains, in boxes",
        "Put food and water bowl in the center of the room. Turn on quiet music or TV — the animal will get used to the sound and come out at night",
        "For a bird: leave the cage open with food and water. Hang in a visible place. Birds often return to the cage when hungry",
        "At night turn off the lights and sit quietly. Small animals are active at night. Listen — may rustle, squeak, gnaw",
        "For a rabbit: check all cozy places with soft surfaces (beds, sofas, armchairs). Rabbits love hiding under soft things",
        "If animal is not found within a day — check neighbors (may have run through ventilation), post flyers in the building. For birds — check trees in the yard"
      ],
      warnings: [
        "DO NOT use glue traps — the animal may panic, tear its paw, suffocate. Use live trap or box with bait",
        "Hamsters and mice can squeeze through 1 cm gaps. Check ALL cracks, ventilation, gaps under doors",
        "Birds outside survive 1–3 days (domestic parrots). Search in trees, on roofs, balconies. Call, offer favorite treat",
        "Small animals dehydrate within 12–24 hours. If not found within a day — it's critical. Continue search, expand zone"
      ]
    },
    {
      id: "pet_stolen",
      title: "🚨 Suspected theft / catching of pet",
      description: "Pedigree dog, rare cat breed, pet disappeared under strange circumstances — possible theft.",
      conditions: { circumstance: ["stolen"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1–7 days",
      yield_estimate: "Returning the pet",
      tags: ["stolen", "crime", "search"],
      steps: [
        "Immediately write a police report about animal theft. An animal is property, theft is punishable (Art. 158 of the Criminal Code). Demand a notification receipt",
        "Gather evidence: CCTV footage (entrance, yard, shops), witness testimonies, dashcam recordings from neighbors",
        "Check animal sale ads on Avito, Yula, VK, Instagram. Scammers often sell stolen pets. Search by breed, color, distinctive features",
        "Contact vet clinics, groomers, pet stores in the area. Stolen animals are often brought for checkup, grooming, food purchase",
        "Post on social media with hashtags: #lostdog #stolendog #petsearch. Ask volunteers and animal help groups to share",
        "If animal is chipped — report to chip database about theft. If found and scanned — you will be notified",
        "Be careful with 'good Samaritans' who demand money for return before showing the animal. This is extortion. Call emergency services",
        "Consider a private detective or volunteer investigators (groups 'Dozor', 'Search for lost animals'). They have experience and connections"
      ],
      warnings: [
        "DO NOT transfer money 'for return' before personal meeting and confirmation that it is your pet. Scammers exploit owners' emotions",
        "DO NOT publish your home address publicly — safety. Provide only phone and district",
        "Pedigree dogs and cats are targets for theft. Chipping, collar with address tag, GPS tracker reduce risk and increase return chances",
        "Stray animal catchers may mistakenly take your pet. Contact catching services in the first hours"
      ]
    }
  ]
};

window.lostDataEN = lostDataEN;
