// === MODULE: PETS — BEHAVIOR & AGGRESSION (EN) ===
const behaviorDataEn = {
  category: "behavior",
  title: "🐾 Behavior & Aggression",
  description: "Biting, barking, scratching, anxiety, destructive behavior — how to understand and help",

  questions: [
    {
      id: "problem",
      text: "What is the behavior problem?",
      type: "single",
      options: [
        { id: "aggression_people", label: "😠 Aggression toward people (bites, growls, lunges)", tags: ["aggression_people"] },
        { id: "aggression_animals", label: "🐕 Aggression toward other animals", tags: ["aggression_animals"] },
        { id: "anxiety", label: "😰 Anxiety / fear (shakes, hides, won't go out)", tags: ["anxiety"] },
        { id: "destruction", label: "🪑 Destructive behavior (chews furniture, digs, marks)", tags: ["destruction"] },
        { id: "barking", label: "🔊 Non-stop barking / howling / meowing", tags: ["barking"] },
        { id: "leash", label: "🐕 Pulls leash / runs away / doesn't obey", tags: ["leash"] }
      ]
    },
    {
      id: "pet_type",
      text: "What animal?",
      type: "single",
      options: [
        { id: "dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "other", label: "🦎 Other", tags: ["other"] }
      ]
    },
    {
      id: "duration",
      text: "How long has this been going on?",
      type: "single",
      options: [
        { id: "recent", label: "📅 Recently (after moving, injury, new pet)", tags: ["recent"] },
        { id: "long", label: "📈 For a long time (since childhood / adoption)", tags: ["long"] },
        { id: "sudden", label: "⚡ Suddenly (was fine, became bad)", tags: ["sudden"] }
      ]
    }
  ],

  solutions: [
    {
      id: "dog_aggression_people",
      title: "🐕 Dog aggressive toward people — causes and correction",
      description: "Growls, bites, lunges at passersby, guests, children. This is dangerous but usually fixable.",
      conditions: { problem: ["aggression_people"], pet_type: ["dog"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1–6 months",
      yield_estimate: "Reduced aggression, safety",
      tags: ["dog", "aggression", "behavior"],
      steps: [
        "Ensure safety of others. Muzzle in public places, leash no longer than 1.5 m, warn guests. An aggressive dog is your responsibility",
        "Do not punish the dog physically (hitting, choking, shaking). This intensifies aggression and destroys trust. The dog begins to defend itself even more",
        "Sign up with a behaviorist (not just an obedience trainer, but specifically a behavior specialist). Aggression is a complex problem requiring individual approach",
        "Determine the cause: fear (afraid and bites), territory defense, resource guarding (food, toy), pain (if sudden aggression — check health), lack of socialization",
        "If aggression is sudden — go to the vet immediately. Pain (ears, teeth, joints, internal organs) often causes aggression. The dog cannot say 'it hurts', it growls",
        "For fear aggression: desensitization and counter-conditioning. Gradually accustom the dog to the trigger (people, children, men), associating it with something pleasant (treat, play)",
        "For resource guarding: teach 'give' / 'drop' command. Do not take by force — this intensifies guarding. Exchange for something better: 'give bone — get treat'",
        "Socialization: regular walks in busy places, meetings with friendly dogs, visits to dog training grounds. But DO NOT force: if the dog is afraid — retreat",
        "Consider spaying / neutering. Hormones often intensify aggression, especially toward other dogs. Consult with vet"
      ],
      warnings: [
        "DO NOT ignore first signs of aggression (growling, snarling). This is a warning. If you punish the warning — the dog will skip straight to biting",
        "DO NOT let children approach an aggressive dog to 'make friends'. Children often don't read signals. This is dangerous for the child and worsens the problem",
        "DO NOT use electric collar, choke chain, chain as 'treatment' for aggression. This causes pain, fear, even more aggression. Only positive methods",
        "If the dog has already bitten a person — this is an administrative / criminal offense. You are responsible. Contact a behaviorist immediately"
      ]
    },
    {
      id: "cat_aggression",
      title: "🐈 Cat aggressive / scratches / bites",
      description: "Cat hisses, scratches, bites when trying to pet, pick up, approach. Causes vary.",
      conditions: { problem: ["aggression_people"], pet_type: ["cat"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2–8 weeks",
      yield_estimate: "Reduced aggression",
      tags: ["cat", "aggression", "behavior"],
      steps: [
        "Do not punish physically (hitting, spraying water, shouting). Cats don't connect punishment with 'bad behavior' — they connect it with you and begin to fear / hate",
        "Check health. Sudden aggression = pain. Most often: urinary tract disease (cystitis), teeth, ears, arthritis, injury. The cat bites because it hurts. Vet is the first step",
        "Identify the trigger: when is the cat aggressive? When petting? When approaching the bowl? When another animal appears? When trying to pick up? When hearing sounds? Write it down — this will help the behaviorist / vet",
        "Give the cat space. If it hides — don't drag it out by force. Respect personal space. Let it have a 'safe room' where no one enters",
        "Use pheromones (Feliway, Feliway Friends). They reduce stress and aggression. Diffuser in outlet, spray on carrier, drops on collar",
        "Fishing rod toys help release aggression on the toy, not on you. Play 2 times a day for 15 minutes. After play — treat. The cat will associate you with pleasant things",
        "If aggression is directed at another pet — separate spaces: separate bowls, litter boxes, beds. Feliway Friends for multi-cat households. Slow introduction through a door",
        "If the problem is not solved — animal psychologist (not just a 'dog trainer', but a cat specialist). Cats have special psychology requiring specific approach"
      ],
      warnings: [
        "DO NOT drag the cat out of hiding by force. This causes panic and aggression. Let it come out on its own, lure with treats",
        "DO NOT pet the cat if it hisses, ears back, tail thrashing. These are clear signals 'don't touch'. Respect them",
        "Cat scratch is not 'just a scratch'. Infection (bartonellosis) is dangerous for people with weakened immunity. Wash wounds thoroughly",
        "If cat is aggressive after giving birth — this is normal protection of kittens. Do not approach, do not touch kittens in the first 2–3 weeks without extreme need"
      ]
    },
    {
      id: "pet_anxiety",
      title: "😰 Anxiety, fear, phobias in a pet",
      description: "Shakes from thunder, afraid of fireworks, panics when owner leaves, hides from people.",
      conditions: { problem: ["anxiety"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–3 months",
      yield_estimate: "Reduced anxiety",
      tags: ["anxiety", "fear", "behavior"],
      steps: [
        "Do not scold or punish for anxious behavior. Shouting increases stress. The dog / cat is not 'doing it out of spite' — they are afraid and cannot cope",
        "Create a 'safe place': dark crate / carrier with blanket, secluded corner, closet. Let the pet hide there during stress. Do not pull out by force",
        "For thunder / fireworks fear: close windows with curtains, turn on TV / music (white noise). Pheromones (Adaptil, Feliway). Heating pad / wrap (pressure calms)",
        "For separation anxiety (panic when owner leaves): leave for 1–2 minutes, return, ignore for 5 minutes. Gradually increase time. Do not say emotional goodbyes",
        "Leave an 'activity' for when you're away: treat toy (Kong, puzzle), bone, recording of your voice. The pet should associate your departure with something good",
        "Regular physical exercise: long walks, running, play. A tired pet is less anxious. But DO NOT overdo — this is also stress",
        "If anxiety is severe (destroys furniture, defecates / urinates from fear, won't eat) — vet may prescribe sedatives (Zylkene, Sedalin, Gabapentin). But only as prescribed",
        "Consider a second pet? Sometimes a cat / dog is calmer in pairs. But sometimes this worsens the problem. Consult with an animal psychologist"
      ],
      warnings: [
        "DO NOT use human sedatives (Valerian, Corvalol, Analgin) — they are toxic to animals. Only veterinary drugs as prescribed",
        "DO NOT 'comfort' the pet during fear ('baby, don't be afraid'). This rewards anxious behavior. Behave calmly, as if everything is normal",
        "Anxiety is often hereditary (especially in some breeds: dachshunds, chihuahuas, spitz). This is not 'bad upbringing'. This is a feature requiring management",
        "If anxiety appeared suddenly — check health. Thyroid, pain, neurological problems may manifest as anxiety"
      ]
    },
    {
      id: "destruction_behavior",
      title: "🪑 Destructive behavior — chewing, digging, marking",
      description: "Chews furniture, shoes, wallpaper, digs sofa, marks corners. This is not 'revenge' — it's boredom, stress, or instinct.",
      conditions: { problem: ["destruction"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "2–8 weeks",
      yield_estimate: "Stopping destruction",
      tags: ["destruction", "behavior", "boredom"],
      steps: [
        "Do not punish after the fact. The animal won't connect punishment with 'chewing is bad' — it will connect it with your arrival and will chew secretly. Catch 'in the act' and redirect",
        "Check physical exercise. Does the dog chew from boredom? Increase walks to 2–3 hours a day, add running, play, training. A tired dog doesn't chew furniture",
        "Give an 'allowed' alternative: bones (natural, not chicken), Kong toys with frozen food, ropes, rubber rings. Praise when chewing the allowed item",
        "For cats: scratching posts (vertical, horizontal, different materials). The scratching post should be more convenient than the sofa. Place next to where it scratches. Encourage with catnip",
        "Remove temptation: put shoes in closet, hide wires in cable channels, protect furniture corners. While the pet is learning, reduce temptation",
        "For marking (dogs): neutering often reduces marking behavior. But not always. Use deterrent sprays. Thoroughly wash old marks with bio-enzyme products",
        "For marking (cats): spaying usually solves the problem. If not — check urinary tract disease (cystitis causes urinating outside the box). Clean litter box, proper litter, enough boxes (1 per cat + 1)",
        "If destruction happens only in your absence — this is separation anxiety. See the 'Anxiety' section. Treat the cause, not the symptom"
      ],
      warnings: [
        "DO NOT hit the pet for chewed shoes. This causes fear, not understanding. The animal will chew secretly when you're not there",
        "DO NOT use sharp bones (chicken, turkey) for teeth cleaning — they can get stuck in the throat, tear the stomach. Use only special chew bones from pet stores",
        "DO NOT poison the pet with chemical deterrents (vinegar, pepper, ammonia). This is toxic and causes stress. Use special safe sprays",
        "A cat urinating outside the litter box is NOT 'spiteful'. This is always a signal: illness, stress, dirty litter box, wrong litter, conflict with another cat"
      ]
    }
  ]
};

window.behaviorDataEn = behaviorDataEn;
