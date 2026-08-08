// === MODULE: CHILDREN — SAFETY (EN) ===
const safetyData = {
  category: "safety",
  title: "🛡️ Safety",
  description: "Lost child, stranger danger, left alone, dangerous objects — what to do",

  questions: [
    {
      id: "situation",
      text: "What happened?",
      type: "single",
      options: [
        { id: "stranger", label: "Child went with a stranger / talked to an unknown person", tags: ["stranger"] },
        { id: "alone_home", label: "Left alone at home / lost in a store", tags: ["alone", "lost"] },
        { id: "dangerous_item", label: "Found a dangerous object (knife, pills, weapon)", tags: ["dangerous"] },
        { id: "traffic", label: "Dangerous road situation", tags: ["traffic"] },
        { id: "animal", label: "Bitten / scratched by an animal", tags: ["animal"] },
        { id: "fire", label: "Playing with fire / matches / lighter", tags: ["fire"] }
      ]
    },
    {
      id: "child_age",
      text: "How old is the child?",
      type: "single",
      options: [
        { id: "baby", label: "Under 3 years", tags: ["baby"] },
        { id: "preschool", label: "3–7 years", tags: ["preschool"] },
        { id: "school", label: "7–12 years", tags: ["school_age"] },
        { id: "teen", label: "Teenager 13–17 years", tags: ["teen"] }
      ]
    },
    {
      id: "location",
      text: "Where did it happen?",
      type: "single",
      options: [
        { id: "home", label: "At home / apartment", tags: ["home"] },
        { id: "street", label: "On the street / yard / park", tags: ["street"] },
        { id: "public", label: "In a store / mall / transport", tags: ["public"] },
        { id: "school", label: "At school / kindergarten", tags: ["school_place"] }
      ]
    }
  ],

  solutions: [
    {
      id: "stranger_danger",
      title: "🚨 Child is talking to a stranger — immediate actions",
      description: "If the child has already left with a stranger or is talking to a suspicious person — every second counts.",
      conditions: { situation: ["stranger"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving the child",
      tags: ["stranger", "kidnapping", "emergency"],
      steps: [
        "If you see this in real time — immediately approach the child, take their hand, lead them away. Do not hesitate to shout, attract attention",
        "If the child has already left with a stranger — call 112 immediately. Report: child's description, kidnapper's description, direction, time",
        "Turn on geolocation on the child's phone (if available): Find My iPhone, Google Family Link, Life360. Track movement",
        "Describe EVERYTHING to the police: height, weight, clothing, hairstyle, special features (scars, moles), last words, child's mood",
        "Send the child's photo to neighbor chats, school, kindergarten, social media. Ask to forward further. The first hours are critical",
        "Check CCTV cameras: entrance, yard, stores, bus stops. Save recordings, hand over to police",
        "Do not panic in front of other children — they are scared. Explain that the police are looking, everything will be okay",
        "After recovery — see a psychologist. Even brief contact with a stranger is traumatic. Do not scold the child, support them"
      ],
      warnings: [
        "DO NOT wait 'a little more' — statistics show the first 3 hours after abduction are decisive. The faster the police act, the higher the chances",
        "DO NOT try to chase the car yourself — it's dangerous, you may lose the trail. Remember the number, make, color, direction",
        "DO NOT spread false information on social media — it hinders police work. Only confirmed facts",
        "After the incident — be sure to talk to the child about rules: do not go with strangers, code word, 'no — run — shout'"
      ]
    },
    {
      id: "lost_child_action",
      title: "🔍 Lost child — search algorithm",
      description: "In a store, park, mall — anyone can get lost. Act quickly and systematically.",
      conditions: { situation: ["alone_home", "lost"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Finding the child",
      tags: ["lost", "search", "emergency"],
      steps: [
        "DO NOT panic. Stop, look around — the child may be within 20 meters, just behind a shelf or tree",
        "If in a store / mall — contact security, administration, cashier. They will announce over PA, close exits",
        "If outside — ask passersby, vendors, drivers. Show a photo. Children often hide from fear — check corners, bushes, under benches",
        "If not found within 10–15 minutes — call 112. Report: description, clothing, last location, time",
        "Turn on geolocation on the child's phone / watch (if available). Children often walk 'home' from memory — check the route",
        "Send photos to neighbor chats, parent chats, social media. Ask to forward",
        "If the child is found — do not scold, do not punish. Hug, calm down. Talk later about rules: stay in place, call mom/dad, approach a vendor/policeman",
        "Teach the child in advance: name, surname, address, parents' phone. Bracelet with contacts. Code word 'I'm lost'"
      ],
      warnings: [
        "DO NOT run around chaotically — you may run past the child. Act systematically: circle by circle, increasing radius",
        "DO NOT wait 'another 5 minutes' — if the child is missing for 10 minutes in an unfamiliar place, it's already an emergency. Call the police",
        "Children under 5 often hide from fear rather than look for parents. Check hiding spots, behind curtains, under tables",
        "After recovery — do not scold. The child is already in shock. Discuss rules later, in a calm setting"
      ]
    },
    {
      id: "dangerous_item_found",
      title: "⚠️ Child found a dangerous object",
      description: "Pills, knives, weapons, chemicals — children put everything in their mouths. Act immediately.",
      conditions: { situation: ["dangerous_item"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–10 minutes",
      yield_estimate: "Preventing poisoning / injury",
      tags: ["poison", "dangerous", "emergency"],
      steps: [
        "If the child swallowed something — DO NOT induce vomiting without medical advice! Some substances burn the esophagus on the way back up",
        "Immediately call 112 or the poison control center. Report: what was swallowed, how much, when, age, weight",
        "Save the packaging, remaining substance, pills — the doctor needs to know the composition and dosage. Take photos",
        "If the child held a weapon — do not shout, do not scare. Calmly take it away, hide it, call the police (112)",
        "If the child cut / stabbed themselves — rinse the wound with water and soap, treat with antiseptic, apply a sterile bandage. For heavy bleeding — apply a tourniquet above the wound",
        "Check: are there other dangerous objects within reach? Remove EVERYTHING: medications, household chemicals, sharp objects, weapons, small parts",
        "After the incident — explain to the child: 'this is dangerous, it hurts, don't touch'. Do not shout, show by example (torn paper, bitter taste)",
        "Install locks on cabinets with chemicals, medications. Store weapons in a safe. Small parts — out of reach"
      ],
      warnings: [
        "DO NOT induce vomiting for acid, alkali, gasoline, oil poisoning — it doubles the esophageal burn. Only as directed by a doctor",
        "DO NOT give milk, water, juice for poisoning without consultation — some substances absorb faster with liquid",
        "Children under 3 put everything in their mouths. Any small object (<3 cm) = choking. Medication = poisoning. Chemicals = burns",
        "After contact with a weapon — even if it didn't fire — see a psychologist. Children under 7 cannot distinguish toys from weapons"
      ]
    },
    {
      id: "road_safety_child",
      title: "🚸 Child on the road — accident or dangerous situation",
      description: "Child ran onto the road, hit by a car, playing on the roadway. Fast but safe.",
      conditions: { situation: ["traffic"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–5 minutes",
      yield_estimate: "Saving a life",
      tags: ["traffic", "accident", "emergency"],
      steps: [
        "If the child is on the roadway — approach from the side, not from the direction of traffic. Cars may not have time to brake",
        "If an accident — do not move the child if you suspect a spinal fracture. Call emergency: 112. Describe: age, consciousness, breathing, bleeding",
        "If the child is conscious — calm them, do not panic. Children copy adult emotions. Speak quietly, confidently",
        "For bleeding — press a sterile cloth on the wound. For fracture — immobilize with an improvised splint (cardboard, ruler, board)",
        "If the child is unconscious — check breathing, pulse. If no breathing — start CPR (artificial respiration + chest compressions). For children: 30 compressions + 2 breaths (for infants — 2 fingers, for older — palm)",
        "After the accident — record: car number, driver description, witnesses. Photos, video. Do not sign anything without a lawyer",
        "Even after a 'light' hit — see a doctor. Concussion, internal injuries may appear hours later",
        "After the incident — talk to the child about traffic rules. Play 'traffic light', 'crosswalk'. Explain with examples"
      ],
      warnings: [
        "DO NOT move an injured child if you suspect a spinal or neck fracture — it may cause paralysis",
        "DO NOT give water, food, or medication for concussion — vomiting, choking. Only after doctor examination",
        "Children under 7 poorly estimate car speed and distance. Do not let them near roads alone. Hold their hand",
        "After an accident — even without visible injuries — see a neurologist. Concussion in children manifests later: vomiting, drowsiness, headache"
      ]
    },
    {
      id: "animal_bite_child",
      title: "🐕 Animal bite / scratch — first aid",
      description: "Dog, cat, rat, snake — bites can be dangerous due to rabies, infection, venom.",
      conditions: { situation: ["animal"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Preventing infection / rabies",
      tags: ["animal", "bite", "first_aid"],
      steps: [
        "Immediately rinse the wound abundantly with water and soap for 10–15 minutes. Soap destroys the rabies virus. Do not suture the wound",
        "If bleeding — press with sterile cloth. Do not bandage tightly — infection multiplies in a closed wound",
        "Treat with hydrogen peroxide, chlorhexidine, iodine (around the edges, not in the wound). Apply antibiotic ointment",
        "If bitten by a dog / cat (stray, unvaccinated) — immediately go to the emergency room / infectious disease hospital. Rabies vaccine: days 0, 3, 7, 14, 28. Cannot be skipped!",
        "If snake bite — go to the hospital immediately. Do not suck out venom, do not make cuts. Apply cold, immobilize the limb, keep below heart level",
        "If tick bite — remove the tick with tweezers (by the head, not the body), rotating counter-clockwise. Save the tick in a jar for encephalitis / borreliosis testing",
        "Monitor condition: temperature, redness, swelling, pus. If worsening — see a doctor urgently",
        "After the incident — teach the child: do not touch unfamiliar animals, do not run from a dog (it will chase), stand still, hands behind back, do not look in the eyes"
      ],
      warnings: [
        "DO NOT suture a bite wound — it traps infection inside. The wound must remain open, rinsed",
        "DO NOT suck snake venom with your mouth — venom enters through microcracks. Do not make cuts — infection",
        "Rabies is 100% fatal if not vaccinated in time. First symptoms appear in 1–3 months, then it's too late. Do not delay vaccination",
        "Tick-borne encephalitis is dangerous for children. After a tick bite — get EnceVir vaccine or tick analysis. Prevention: vaccination before the season"
      ]
    }
  ]
};

window.safetyData = safetyData;