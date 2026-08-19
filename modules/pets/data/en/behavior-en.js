// modules/pets/data/en/behavior-en.js
// === MODULE: PETS — BEHAVIOR AND AGGRESSION ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "pets",
    category: "behavior",
    version: "1.0.0",
    lang: "en",
    title: "🐾 Behavior and Aggression",
    description: "Biting, barking, scratching, anxiety, destructive behavior — how to understand and help",
    icon: "🐾",
    color: "#9333ea"
  },

  questions: [
    {
      id: "problem",
      type: "single",
      text: "What behavior problem is occurring?",
      options: [
        { id: "aggression_people", label: "😠 Aggression toward people (biting, growling, lunging)", tags: ["aggression_people"] },
        { id: "aggression_animals", label: "🐕 Aggression toward other animals", tags: ["aggression_animals"] },
        { id: "anxiety", label: "😰 Anxiety / fear (trembling, hiding, won't come out)", tags: ["anxiety"] },
        { id: "destruction", label: "🪑 Destructive behavior (chewing furniture, digging, marking)", tags: ["destruction"] },
        { id: "barking", label: "🔊 Excessive barking / howling / meowing", tags: ["barking"] },
        { id: "leash", label: "🐕 Pulls leash / runs away / doesn't obey", tags: ["leash"] }
      ]
    },
    {
      id: "pet_type",
      type: "single",
      text: "What kind of pet?",
      conditions: { problem: ["aggression_people", "aggression_animals", "anxiety", "destruction", "barking", "leash"] },
      options: [
        { id: "pet_dog", label: "🐕 Dog", tags: ["dog"] },
        { id: "pet_cat", label: "🐱 Cat", tags: ["cat"] },
        { id: "pet_rabbit", label: "🐰 Rabbit", tags: ["rabbit"] },
        { id: "pet_parrot", label: "🦜 Parrot", tags: ["parrot"] }
      ]
    },
    {
      id: "duration",
      type: "single",
      text: "How long has this been happening?",
      conditions: { problem: ["aggression_people", "aggression_animals", "anxiety", "destruction", "barking", "leash"] },
      options: [
        { id: "recent", label: "Recently (after moving, injury, new pet)", tags: ["recent"] },
        { id: "long", label: "Long time (since childhood / adoption)", tags: ["long"] },
        { id: "sudden", label: "Suddenly (was fine, now not)", tags: ["sudden"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. DOG AGGRESSION TOWARD PEOPLE
    // ============================================================
    {
      id: "dog_aggression_people",
      title: "🐕 Dog aggressive toward people — causes and correction",
      description: "Growling, biting, lunging at passersby, guests, children. This is dangerous but usually fixable.",
      conditions: { problem: ["aggression_people"], pet_type: ["pet_dog"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1–6 months",
      yield_estimate: "Reduced aggression, safety",
      tags: ["dog", "aggression", "behavior"],
      steps: [
        "Ensure safety of others. Muzzle in public, leash no longer than 1.5 m, warn guests.",
        "Don't physically punish — it increases aggression.",
        "See a canine behaviorist (not just a trainer).",
        "Identify the cause: fear, territorial defense, resource guarding, pain.",
        "If sudden aggression — see a vet immediately.",
        "Desensitization and counterconditioning.",
        "Teach 'drop it' / 'leave it'.",
        "Socialization: regular walks in busy areas.",
        "Consider neutering/spaying."
      ],
      warnings: [
        "DON'T ignore early aggression signs.",
        "DON'T let children approach an aggressive dog.",
        "DON'T use shock collars or choke chains.",
        "If the dog has bitten — see a behaviorist immediately."
      ]
    },
    // ============================================================
    // 2. CAT AGGRESSION
    // ============================================================
    {
      id: "cat_aggression",
      title: "🐈 Cat aggressive / scratching / biting",
      description: "Cat hisses, scratches, bites when petted, picked up, or approached.",
      conditions: { problem: ["aggression_people"], pet_type: ["pet_cat"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2–8 weeks",
      yield_estimate: "Reduced aggression",
      tags: ["cat", "aggression", "behavior"],
      steps: [
        "Don't physically punish.",
        "Check health — sudden aggression = pain.",
        "Identify the trigger.",
        "Give the cat space.",
        "Use pheromones (Feliway).",
        "Wand toys for energy release.",
        "If aggression toward other pets — separate spaces.",
        "If problem persists — see a veterinary behaviorist."
      ],
      warnings: [
        "DON'T force a cat out of hiding.",
        "DON'T pet if cat hisses, ears back.",
        "Cat scratches can cause infection.",
        "After birth — don't touch kittens unnecessarily."
      ]
    },
    // ============================================================
    // 3. RABBIT AGGRESSION
    // ============================================================
    {
      id: "rabbit_aggression",
      title: "🐰 Rabbit aggressive — biting, scratching, thumping",
      description: "Rabbits bite not from malice — it's territory defense, fear, or pain. Females are aggressive during heat.",
      conditions: { problem: ["aggression_people"], pet_type: ["pet_rabbit"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2–4 weeks",
      yield_estimate: "Reduced aggression",
      tags: ["rabbit", "aggression", "behavior"],
      steps: [
        "Don't punish — rabbits don't understand.",
        "Check health: teeth (malocclusion), ears, nails, bladder stones.",
        "Neutering/spaying reduces hormonal aggression.",
        "Give space — the cage is their territory.",
        "Approach at eye level, not from above.",
        "Hand-train with treats.",
        "Avoid sudden movements and loud noises.",
        "If they bite when picked up — don't pick up unless necessary."
      ],
      warnings: [
        "Rabbits are fragile — falling is fatal.",
        "Don't pick up by ears or scruff — painful, injury.",
        "Rabbit bites hurt — use gloves if needed.",
        "Pregnant females are especially aggressive."
      ]
    },
    // ============================================================
    // 4. PARROT AGGRESSION
    // ============================================================
    {
      id: "parrot_aggression",
      title: "🦜 Parrot aggressive — biting, screaming, hissing",
      description: "Parrots bite from fear, territory defense, or hormonal spikes. It's not 'meanness' — it's body language.",
      conditions: { problem: ["aggression_people"], pet_type: ["pet_parrot"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2–4 weeks",
      yield_estimate: "Reduced aggression",
      tags: ["parrot", "aggression", "behavior"],
      steps: [
        "Don't punish — parrots don't connect punishment to behavior.",
        "Check health: vitamins, parasites, hormones.",
        "Learn body language: pinned eyes, fluffed feathers, hissing — 'stay away'.",
        "Don't reach into the cage if aggressive — it's their territory.",
        "Hand-train through cage bars with treats, then open door.",
        "Hormonal spikes (spring): reduce daylight to 10 hours, remove mirrors.",
        "Provide toys and activities — boredom makes parrots aggressive.",
        "Don't yell — parrot sees it as approval."
      ],
      warnings: [
        "Parrot beak is very strong — can remove a finger.",
        "Don't use aerosols near parrots — toxic.",
        "Parrots remember grudges — don't punish, lose trust.",
        "If aggressive to everyone — possible hormonal imbalance."
      ]
    },
    // ============================================================
    // 5. ANXIETY
    // ============================================================
    {
      id: "pet_anxiety",
      title: "😰 Anxiety, fear, phobias in pets",
      description: "Trembling from thunder, afraid of fireworks, panics when owner leaves, hides from people.",
      conditions: { problem: ["anxiety"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 months",
      yield_estimate: "Reduced anxiety",
      tags: ["anxiety", "fear", "behavior"],
      steps: [
        "Don't scold or punish.",
        "Create a 'safe place'.",
        "For thunder/fireworks fear: close curtains, play music.",
        "For separation anxiety: leave for 1-2 minutes, gradually increase.",
        "Leave an 'activity' when gone.",
        "Regular exercise.",
        "If severe — vet may prescribe calming medication.",
        "Consider a second pet (with caution)."
      ],
      warnings: [
        "DON'T use human calming medications — toxic.",
        "DON'T 'comfort' during fear — reinforces it.",
        "Anxiety is often genetic.",
        "If sudden — check health."
      ]
    },
    // ============================================================
    // 6. DESTRUCTIVE BEHAVIOR
    // ============================================================
    {
      id: "destruction_behavior",
      title: "🪑 Destructive behavior — chewing, digging, marking",
      description: "Chews furniture, shoes, wallpaper, digs couch, marks corners. This isn't 'revenge' — it's boredom, stress, or instinct.",
      conditions: { problem: ["destruction"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2–8 weeks",
      yield_estimate: "Stopping destruction",
      tags: ["destruction", "behavior", "boredom"],
      steps: [
        "Don't punish after the fact.",
        "Check physical exercise.",
        "Provide 'approved' alternatives.",
        "For cats: scratching posts.",
        "Remove temptation.",
        "For marking — neutering/spaying.",
        "If destruction only when you're gone — separation anxiety."
      ],
      warnings: [
        "DON'T hit pet for chewed shoes.",
        "DON'T use sharp bones — choking hazard.",
        "DON'T poison with chemical deterrents.",
        "Cat urinating outside litter box is always a signal."
      ]
    },
    // ============================================================
    // 7. EXCESSIVE BARKING / HOWLING
    // ============================================================
    {
      id: "excessive_barking",
      title: "🔊 Excessive barking / howling — how to stop",
      description: "Dog barks, howls, or cat meows nonstop. It's always a signal of a problem.",
      conditions: { problem: ["barking"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2–8 weeks",
      yield_estimate: "Peace and quiet",
      tags: ["barking", "noise", "behavior"],
      steps: [
        "Check health.",
        "Identify cause: boredom, fear, attention, territorial.",
        "If boredom — increase exercise.",
        "Teach 'quiet' command.",
        "Don't yell at dog for barking.",
        "Remove triggers.",
        "If nothing helps — see a behaviorist."
      ],
      warnings: [
        "DON'T use shock collars.",
        "Night barking — often boredom or anxiety.",
        "Cat meowing — check hunger, litter box, health."
      ]
    },
    // ============================================================
    // 8. LEASH PULLING
    // ============================================================
    {
      id: "leash_pulling",
      title: "🐕 Pulls leash / runs away / doesn't obey",
      description: "Dog pulls leash, breaks free, runs away, ignores commands.",
      conditions: { problem: ["leash"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2–8 weeks",
      yield_estimate: "Calm walks",
      tags: ["leash", "training", "walk"],
      steps: [
        "Use a harness.",
        "Never pull or jerk the leash.",
        "Start with short walks.",
        "Teach 'heel'.",
        "Practice recall on a long line.",
        "Use high-value treats.",
        "If problem persists — see a trainer."
      ],
      warnings: [
        "DON'T use choke chains without experience.",
        "DON'T chase if dog runs away.",
        "Dog isn't 'bad' — just doesn't know better."
      ]
    }
  ]
});