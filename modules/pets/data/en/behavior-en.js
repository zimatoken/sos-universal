// === MODULE: PETS — BEHAVIOR AND AGGRESSION ===
const behaviorDataEn = {
  category: "behavior",
  title: "🐾 Behavior and aggression",
  description: "Biting, barking, scratching, anxiety, destructive behavior — how to understand and help",

  questions: [
    {
      id: "problem",
      text: "What is the behavioral problem?",
      type: "single",
      options: [
        { id: "aggression_people", label: "😠 Aggression toward people (biting, growling, lunging)", tags: ["aggression_people"] },
        { id: "aggression_animals", label: "🐕 Aggression toward other animals", tags: ["aggression_animals"] },
        { id: "anxiety", label: "😰 Anxiety / fear (trembling, hiding, won't come out)", tags: ["anxiety"] },
        { id: "destruction", label: "🪑 Destructive behavior (chewing furniture, digging, marking)", tags: ["destruction"] },
        { id: "barking", label: "🔊 Non-stop barking / howling / meowing", tags: ["barking"] },
        { id: "leash", label: "🐕 Pulling on leash / running away / disobeying", tags: ["leash"] }
      ]
    },
    {
      id: "pet_type",
      text: "What kind of pet?",
      type: "single",
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_other", label: "🦎 Other", tags: ["other"] }
      ]
    },
    {
      id: "duration",
      text: "How long has this been happening?",
      type: "single",
      options: [
        { id: "recent", label: "Recently (after moving, injury, new pet)", tags: ["recent"] },
        { id: "long", label: "Long time (since childhood / adoption)", tags: ["long"] },
        { id: "sudden", label: "Sudden (was normal, now bad)", tags: ["sudden"] }
      ]
    }
  ],

  solutions: [
    {
      id: "dog_aggression_people",
      title: "🐕 Dog aggressive toward people — causes and correction",
      description: "Growling, biting, lunging at passersby, guests, children. This is dangerous, but most often fixable.",
      conditions: { problem: ["aggression_people"], pet_type: ["pet_dog"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1–6 months",
      yield_estimate: "Reduced aggression, safety",
      tags: ["dog", "aggression", "behavior"],
      steps: [
        "Ensure safety of others. Muzzle in public places, leash no longer than 1.5 m, warn guests. An aggressive dog is your responsibility",
        "Don't punish your dog physically (hitting, choking, shaking). This increases aggression and destroys trust. The dog starts defending itself even more",
        "Book a behavioral trainer (not a command-based trainer, but a behavior specialist). Aggression is a complex problem requiring an individual approach",
        "Find the cause: fear (afraid and bites), territorial defense, resource guarding (food, toys), pain (if sudden aggression — check health), lack of socialization",
        "If aggression is sudden — see a vet immediately. Pain (ears, teeth, joints, internal organs) often causes aggression. A dog can't say 'I'm in pain', it growls",
        "For fear-based aggression: desensitization and counter-conditioning. Gradually expose the dog to the trigger (people, children, men), associating it with something pleasant (treats, play)",
        "For resource guarding: teach 'drop it' / 'leave it'. Don't take things by force — it increases guarding. Trade for something better: 'give the bone — get a treat'",
        "Socialization: regular walks in busy places, meetings with friendly dogs, visits to dog parks. But DON'T force it — if the dog is scared, back off",
        "Consider neutering / spaying. Hormones often increase aggression, especially toward other dogs. Consult your vet"
      ],
      warnings: [
        "DO NOT ignore the first signs of aggression (growling, baring teeth). It's a warning. If you punish the warning, the dog will go straight to biting",
        "DO NOT let children approach an aggressive dog to 'make friends'. Children often can't read signals. It's dangerous for the child and worsens the problem",
        "DO NOT use shock collars, choke chains, prong collars as 'treatment' for aggression. They cause pain, fear, and more aggression. Only positive methods",
        "If the dog has already bitten someone — it's an administrative / criminal offense. You are responsible. See a behaviorist immediately"
      ]
    },
    {
      id: "cat_aggression",
      title: "🐈 Cat aggressive / scratching / biting",
      description: "Cat hisses, scratches, bites when you try to pet, pick up, or approach. Causes vary.",
      conditions: { problem: ["aggression_people"], pet_type: ["pet_cat"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2–8 weeks",
      yield_estimate: "Reduced aggression",
      tags: ["cat", "aggression", "behavior"],
      steps: [
        "Don't punish physically (hitting, spraying water, yelling). Cats don't connect punishment with 'bad behavior' — they connect it with you and start fearing / hating you",
        "Check health. Sudden aggression = pain. Most common: urinary tract disease (cystitis), teeth, ears, arthritis, injury. The cat bites because it hurts. Vet is the first step",
        "Identify the trigger: when is the cat aggressive? When being petted? When approaching the food bowl? When another animal appears? When being picked up? At certain sounds? Write it down — it helps the behaviorist / vet",
        "Give the cat space. If it's hiding — don't drag it out. Respect personal space. Let it have a 'safe room' where no one goes",
        "Use pheromones (Feliway, Feliway Friends). They reduce stress and aggression. Diffuser in a socket, spray on the carrier, drops on the collar",
        "Fishing rod toys (wand toys) help release aggression on the toy, not on you. Play 2 times a day for 15 minutes. After playing — treat. The cat will associate you with something pleasant",
        "If aggression is directed at another pet — separate the space: separate food bowls, litter boxes, beds. Feliway Friends for multi-cat households. Slow introduction through a door",
        "If the problem persists — see a veterinary behaviorist (not just a trainer, but a cat specialist). Cats have a unique psychology requiring a specific approach"
      ],
      warnings: [
        "DO NOT drag a cat out of hiding by force. It causes panic and aggression. Let it come out on its own, lure it with treats",
        "DO NOT pet a cat if it's hissing, ears back, tail thrashing. These are clear 'don't touch' signals. Respect them",
        "Cat scratches are not 'just scratches'. Infection (bartonellosis) is dangerous for people with weakened immune systems. Wash wounds thoroughly",
        "If a cat is aggressive after giving birth — it's normal protection of kittens. Don't approach, don't touch kittens in the first 2–3 weeks unless absolutely necessary"
      ]
    },
    {
      id: "pet_anxiety",
      title: "😰 Anxiety, fear, phobias in pets",
      description: "Trembling during thunderstorms, afraid of fireworks, panics when owner leaves, hides from people.",
      conditions: { problem: ["anxiety"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–3 months",
      yield_estimate: "Reduced anxiety",
      tags: ["anxiety", "fear", "behavior"],
      steps: [
        "Don't scold or punish for anxious behavior. Yelling increases stress. The dog/cat isn't 'being naughty' — they're scared and can't cope",
        "Create a 'safe place': dark crate / carrier with a blanket, a quiet corner, a closet. Let your pet hide there during stress. Don't pull them out by force",
        "For fear of thunder / fireworks: close windows with curtains, turn on TV / music (white noise). Pheromones (Adaptil, Feliway). Heating pad / wrap (pressure calms)",
        "For separation anxiety (panic when owner leaves): leave for 1–2 minutes, return, ignore for 5 minutes. Gradually increase the time. Don't say emotional goodbyes",
        "Leave an 'activity' for when you're away: treat-filled toy (Kong, puzzle), chew bone, recording of your voice. The pet should associate your departure with something good",
        "Regular exercise: long walks, running, playing. A tired pet is less anxious. But DON'T overdo it — that's also stress",
        "If anxiety is severe (destroys furniture, defecates/urinates from fear, won't eat) — the vet may prescribe calming medications (Zylkene, Sileo, Gabapentin). Only by prescription",
        "Consider a second pet? Sometimes a cat/dog is calmer with a companion. But sometimes it worsens the problem. Consult a veterinary behaviorist"
      ],
      warnings: [
        "DO NOT use human sedatives (Valerian, Corvalol, Analgin) — they are toxic to animals. Only veterinary drugs by prescription",
        "DO NOT 'comfort' your pet during fear ('baby, don't be scared'). This rewards anxious behavior. Stay calm, act like everything is normal",
        "Anxiety is often hereditary (especially in some breeds: dachshunds, Chihuahuas, Spitz). This is not 'bad training'. It's a trait that needs management",
        "If anxiety appears suddenly — check health. Thyroid, pain, neurological issues can manifest as anxiety"
      ]
    },
    {
      id: "destruction_behavior",
      title: "🪑 Destructive behavior — chewing, digging, marking",
      description: "Chewing furniture, shoes, wallpaper, digging into the sofa, marking corners. This is not 'revenge' — it's boredom, stress, or instinct.",
      conditions: { problem: ["destruction"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2–8 weeks",
      yield_estimate: "Stopping destruction",
      tags: ["destruction", "behavior", "boredom"],
      steps: [
        "Don't punish after the fact. The animal won't connect the punishment with 'can't chew' — it will connect it with your arrival and chew secretly. Catch them 'in the act' and redirect",
        "Check physical exercise. Is the dog chewing out of boredom? Increase walks to 2–3 hours a day, add running, games, training. A tired dog doesn't chew furniture",
        "Give 'approved' alternatives: chew bones (natural, not chicken), Kong toys with frozen food, ropes, rubber rings. Praise when they chew approved items",
        "For cats: scratching posts (vertical, horizontal, different materials). The scratching point should be more attractive than the sofa. Place it near where they scratch. Reward with catnip",
        "Remove temptation: put shoes in closets, hide wires in cable channels, protect furniture corners. While the pet is learning, reduce temptation",
        "For marking (dogs): neutering often reduces marking behavior. But not always. Use deterrent sprays (Anti-Gadin). Thoroughly clean old marks with enzymatic cleaners",
        "For marking (cats): spaying usually solves the problem. If not — check for urinary tract disease (cystitis makes them urinate outside the box). Clean litter box, proper litter, enough boxes (1 per cat + 1)",
        "If destruction only happens when you're away — it's separation anxiety. See the 'Anxiety' section. Treat the cause, not the symptom"
      ],
      warnings: [
        "DO NOT hit your pet for chewed shoes. It causes fear, not understanding. The animal will chew secretly when you're gone",
        "DO NOT use sharp bones (chicken, turkey) — they can get stuck in the throat, tear the stomach. Only special chew bones from pet stores",
        "DO NOT poison your pet with chemical deterrents (vinegar, pepper, ammonia). They are toxic and cause stress. Use safe sprays",
        "A cat that urinates outside the litter box is NOT 'taking revenge'. It's always a signal: illness, stress, dirty box, wrong litter, conflict with another cat"
      ]
    },
    {
      id: "excessive_barking",
      title: "🔊 Non-stop barking / howling — how to stop it",
      description: "Dog barks, howls, or cat meows non-stop. This is not 'just personality' — it's always a signal of a problem.",
      conditions: { problem: ["barking"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2–8 weeks",
      yield_estimate: "Peace and quiet",
      tags: ["barking", "noise", "behavior"],
      steps: [
        "Check health. Pain, itching, ear infections, dementia, hearing/vision loss can cause constant vocalization. Sudden barking = vet visit",
        "Identify the cause: boredom (not enough exercise and activities), fear (thunder, fireworks, people), attention (barking demands your attention), territorial (passersby), anxiety (separation)",
        "If barking from boredom — increase physical exercise: walks 2–3 hours, running, games, training. A tired dog barks less. Add mental exercise: puzzles, treat searches",
        "If barking at passersby — teach 'quiet'. When barking, calmly say 'quiet', when they stop — give a treat. Practice in different places, gradually increasing difficulty",
        "If barking from anxiety (you leaving) — see the 'Anxiety' section. Leave an 'activity' for when you're away",
        "Don't yell at your dog for barking — it reinforces it as 'got attention'. Better to ignore if barking at you. If barking at noise — don't react, show that everything is normal",
        "Remove triggers: close windows if barking at passersby. Turn on white noise / TV. If barking at the doorbell — practice 'place' command when the bell rings",
        "If nothing helps — see a behaviorist. Sometimes barking is stereotypic behavior requiring professional correction. Don't use shock collars"
      ],
      warnings: [
        "DO NOT use shock collars, choke chains, prong collars for barking — they cause pain, fear, aggression, and barking may increase or turn into other destructive behavior",
        "Night barking — often from boredom or anxiety. If a dog barks at night, it's not 'guarding' — it's suffering. Daytime exercise is the best medicine",
        "If a cat constantly meows — check: is it hungry, does it need the litter box, is something painful? Old cats meow from dementia or hearing loss"
      ]
    },
    {
      id: "leash_pulling",
      title: "🐕 Pulling on leash / running away / disobeying",
      description: "Dog pulls on leash, breaks free, runs away, ignores commands. This is not 'stubbornness' — it's lack of skills and motivation.",
      conditions: { problem: ["leash"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2–8 weeks",
      yield_estimate: "Peaceful walks",
      tags: ["leash", "training", "walk"],
      steps: [
        "Use a harness (not a collar) for walks, especially if your dog pulls hard. A harness distributes pressure and doesn't injure the neck (important for health, especially small breeds)",
        "Never pull or jerk the leash — it causes pain and resistance. Stop when the dog pulls. Walk only when the leash is loose. Repeat patiently",
        "Start with short walks (15 minutes) in a quiet place. As soon as the dog walks on a loose leash — reward with treats. Gradually increase time and difficulty",
        "Teach the 'heel' command — in a calm environment, without distractions. Reward for every correct position. Then add distractions (other dogs, passersby). Patience is key",
        "If the dog runs away (off-leash) — practice recall in a safe environment (long line 10–20 m). Call their name, show a treat, celebrate when they come. Never scold when they come — even if you were angry for 5 minutes",
        "If the dog doesn't obey commands — check motivation. Use high-value treats (cheese, sausage, boiled meat). In early training, reward frequently, then less often. Play is also a great reward",
        "Use a long line for freedom with control. Don't let your dog off-leash without a muzzle in crowded places. Don't let them off if you're not confident in recall. Safety is more important",
        "If the problem persists — sign up for group obedience classes (basic obedience) or individual sessions with a trainer. The dog must learn to listen in any situation"
      ],
      warnings: [
        "DO NOT use choke chains, prong collars without experience — they injure the neck, throat, spine. Only with a trainer. A harness is safer and more effective",
        "DO NOT chase your dog if it runs away — it's a game. Better run in the other direction, make funny sounds, show a treat. The dog will come on its own",
        "A dog that pulls on the leash is not 'bad'. It just doesn't know any other way. Your job is to teach, not punish. Patience and consistency are more important than force",
        "If the dog pulls due to aggression toward other dogs — see the 'Aggression toward animals' section. Don't practice 'heel' near triggers until basic calm behavior is established"
      ]
    }
  ]
};

// ===== EXPORT =====
window.behaviorDataEn = behaviorDataEn;