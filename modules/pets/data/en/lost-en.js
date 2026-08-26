// modules/pets/data/en/lost-en.js
// === MODULE: PETS — LOST PET ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "pets",
    category: "lost",
    version: "1.0.0",
    lang: "en",
    title: "Lost Pet",
    description: "Dog ran away, cat didn't return, parrot flew out — search algorithm",
    icon: "🔍",
    color: "#9333ea"
  },

  questions: [
    {
      id: "pet_type",
      type: "single",
      text: "What kind of pet is lost?",
      options: [
        { id: "dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "small", label: "🐰 Rabbit / hamster / guinea pig", tags: ["small"] },
        { id: "bird", label: "🦜 Bird (parrot, canary)", tags: ["bird"] },
        { id: "other", label: "🦎 Other (turtle, snake, iguana)", tags: ["other"] }
      ]
    },
    {
      id: "circumstance",
      type: "single",
      text: "What were the circumstances?",
      conditions: { pet_type: ["dog", "cat", "small", "bird", "other"] },
      options: [
        { id: "door_open", label: "🚪 Ran out through an open door / window", tags: ["door_open"] },
        { id: "walk", label: "🚶 Pulled off leash / ran away in the yard", tags: ["walk"] },
        { id: "frightened", label: "⚡ Frightened (fireworks, thunder, car) and ran away", tags: ["frightened"] },
        { id: "stolen", label: "🚨 Suspect theft / animal control caught", tags: ["stolen"] }
      ]
    },
    {
      id: "time",
      type: "single",
      text: "How much time has passed?",
      conditions: { pet_type: ["dog", "cat", "small", "bird", "other"] },
      options: [
        { id: "less_1h", label: "⏰ Less than 1 hour", tags: ["recent"] },
        { id: "1_6h", label: "📅 1–6 hours", tags: ["short"] },
        { id: "6_24h", label: "📆 6–24 hours", tags: ["medium"] },
        { id: "more_24h", label: "📈 More than 24 hours", tags: ["long"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. LOST DOG
    // ============================================================
    {
      id: "lost_dog_search",
      title: "🐕 Lost dog — search and recovery",
      description: "Dogs usually don't stray far from home in the first hours. Quick search is key to success.",
      conditions: { pet_type: ["dog"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–48 hours",
      yield_estimate: "Dog found",
      tags: ["dog", "lost", "search"],
      steps: [
        "DON'T panic. The dog can smell you and may return on its own. Leave the door/window open where it ran out. Put its favorite toy, water bowl, and a worn item of yours with your scent",
        "Immediately search a 500m radius: yard, porches, basements, attics, garages, construction sites, parks. Dogs often hide in quiet places",
        "Call its name loudly but calmly. DON'T yell aggressively — a scared dog may run further. Use a favorite command, whistle, or the sound of a food bowl",
        "Share photos in neighborhood chats, volunteer groups (VK, Telegram, Instagram). Include: breed, color, name, special marks, chip number, your phone",
        "Post flyers on entrances, bus stops, stores, vet clinics, pet stores. Large photo, contacts, reward",
        "Contact shelters, vet clinics, animal control, police. Submit reports on sites: pet911, poiskzoo, petalert. Register in international databases (petmicrochiplookup)",
        "If the dog is microchipped — report the loss to the chip database. If not — it's a reason to chip after finding",
        "If the dog was frightened by fireworks/thunder — search in hiding places: basements, garages, bushes, under cars. Frightened dogs run straight ahead and hide",
        "Don't stop searching after 2–3 days. Dogs are found weeks and months later. Keep posting, update flyers"
      ],
      warnings: [
        "DON'T run after a dog screaming — a scared dog will run further. Call calmly, crouch down, offer a treat",
        "DON'T wait 'a little longer' — the first 3–6 hours are critical. The sooner you start, the higher the chances",
        "Be careful with 'helpers' — scammers demand money 'for return' before showing the dog. Demand photo/video of a live pet",
        "If the dog is a dangerous breed (Pitbull, Caucasian Shepherd, Rottweiler) — warn neighbors that it's lost. People may panic and harm the dog"
      ]
    },
    // ============================================================
    // 2. LOST CAT
    // ============================================================
    {
      id: "lost_cat_search",
      title: "🐈 Lost cat — search and capture",
      description: "A cat doesn't 'run away' — it hides. 90% of cats are found within 200 meters of home.",
      conditions: { pet_type: ["cat"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–72 hours",
      yield_estimate: "Cat found",
      tags: ["cat", "lost", "search"],
      steps: [
        "DON'T panic. Cats rarely go far. Most often hide within 50–200 meters: basements, attics, garages, bushes, construction sites, ventilation shafts",
        "Search within 200m during quiet times (night, early morning). Call quietly, calmly. Cats respond to their owner's voice but fear loud sounds",
        "Check ALL basements, attics, garages in the building. Ask neighbors to open basements. Cats climb into ventilation, behind pipes, into storage rooms",
        "Place the litter box, food and water bowls near the door/window where they escaped. Put a worn item of yours (t-shirt, sock) — scent will attract the cat",
        "Go out at night with a flashlight and call. Cats often come out at night when it's quiet. Listen — they may meow in response",
        "Share photos in neighbor chats, volunteer groups, vet clinics. Include: color, name, special marks, chip number, phone, reward",
        "If the cat is indoor-only and doesn't go outside — it's scared and hiding. Don't wait for it to 'come back on its own'. Search actively, check every corner",
        "Use a live trap (cage) with aromatic food (fish, canned food) where the cat was seen. Check every 2–3 hours so the cat doesn't freeze/overheat",
        "If the cat isn't found in 3 days — expand the radius to 1 km, contact shelters, animal control, post on social media, search sites"
      ],
      warnings: [
        "DON'T wait for it to 'come back on its own' — cats, especially indoor ones, can hide for days without food and water. Active search needed from the first hours",
        "DON'T feed stray cats near the entrance hoping to 'attract yours' — this will attract other cats that will chase yours away",
        "If the cat is microchipped — report to the database. If not — chip it after finding and use a collar with an ID tag",
        "Cats after stress (loud noise, fireworks, renovation) may 'forget' the way home. Even if it used to go outside — after fright it can get lost"
      ]
    },
    // ============================================================
    // 3. LOST SMALL PET
    // ============================================================
    {
      id: "lost_small_pet",
      title: "🐹 Lost hamster / rabbit / bird — search inside the house",
      description: "Small animals hide in cracks, behind furniture, in ventilation. Quick search is important — they dehydrate fast.",
      conditions: { pet_type: ["small", "bird"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1–12 hours",
      yield_estimate: "Pet found",
      tags: ["small", "bird", "lost", "search"],
      steps: [
        "Close all doors, windows, ventilation openings in the room where it was last seen. Small animals quickly hide in cracks",
        "Move cats/dogs to another room. Even a friendly pet can accidentally injure a small one (playing, stepping on)",
        "Check: behind the fridge, under cabinets, behind radiators, in ventilation, under the bed, in closets with clothes, in desk drawers, behind curtains, in boxes",
        "Place food and water bowls in the center of the room. Turn on quiet music or TV — the animal will get used to the sound and come out at night",
        "For birds: leave the cage open with food and water. Place it in a visible spot. Birds often return to the cage when hungry",
        "At night turn off the light and sit quietly. Small animals are active at night. Listen — may rustle, squeak, gnaw",
        "For rabbits: check all cozy places with soft surfaces (beds, sofas, armchairs). Rabbits love to hide under soft things",
        "If not found in 24 hours — check with neighbors (may have gone through ventilation), post flyers in the building. For birds — check trees in the yard"
      ],
      warnings: [
        "DON'T use glue traps — the animal may panic, tear off a paw, suffocate. Use a live trap or box with bait",
        "Hamsters and mice fit through 1 cm gaps. Check ALL gaps, ventilation, door gaps",
        "Birds outside survive 1–3 days (pet parrots). Search in trees, roofs, balconies. Call, offer favorite treats",
        "Small animals dehydrate within 12–24 hours. If not found in a day — critical. Continue searching, expand the area"
      ]
    },
    // ============================================================
    // 4. PET THEFT
    // ============================================================
    {
      id: "pet_stolen",
      title: "🚨 Suspected theft / animal control seizure",
      description: "Purebred dog, rare cat breed, pet disappeared under suspicious circumstances — possible theft.",
      conditions: { circumstance: ["stolen"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1–7 days",
      yield_estimate: "Pet recovered",
      tags: ["stolen", "crime", "search"],
      steps: [
        "File a police report immediately. A pet is property — theft is punishable. Demand a notification slip",
        "Gather evidence: camera footage (entrance, yard, stores), witness statements, dashcam footage from neighbors",
        "Check pet sale ads on Avito, Yula, VK, Instagram. Scammers often post stolen animals. Search by breed, color, special marks",
        "Contact vet clinics, groomers, pet stores in the area. Stolen pets are often brought for exams, grooming, food",
        "Post on social media with hashtags: #lostdog #stolendog #petsearch. Ask volunteers and animal help groups to repost",
        "If the pet is microchipped — report the theft to the chip database. If found and scanned, you'll be notified",
        "Be careful with 'helpers' who demand money for return before showing the animal. This is extortion. Call the police",
        "Consider hiring a private investigator or volunteer search groups. They have experience and connections"
      ],
      warnings: [
        "DON'T transfer money 'for return' before a personal meeting and confirmation it's your pet. Scammers prey on owners' emotions",
        "DON'T publish your home address publicly — safety. Only provide phone and district",
        "Purebred dogs and cats are targets for theft. Microchipping, ID tags, GPS trackers reduce risks and increase recovery chances",
        "Animal control may mistakenly pick up your pet. Contact animal control services in the first hours"
      ]
    }
  ]
});