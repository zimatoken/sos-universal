// === MODULE: CHILDREN вЂ” SAFETY (EN) ===
const safetyData = {
  category: "safety",
  title: "рџ›ЎпёЏ Safety",
  description: "Lost child, stranger danger, left alone, dangerous objects вЂ” what to do",

  questions: [
    {
      id: "situation",
      text: "What happened?",
      type: "single",
      options: [
        { id: "stranger", label: "рџ‘¤ Child went with a stranger / talked to an unknown person", tags: ["stranger"] },
        { id: "alone_home", label: "рџЏ  Left alone at home / lost in a store", tags: ["alone", "lost"] },
        { id: "dangerous_item", label: "вљ пёЏ Found a dangerous object (knife, pills, weapon)", tags: ["dangerous"] },
        { id: "traffic", label: "рџљ— Dangerous road situation", tags: ["traffic"] },
        { id: "animal", label: "рџђ• Bitten / scratched by an animal", tags: ["animal"] },
        { id: "fire", label: "рџ”Ґ Playing with fire / matches / lighter", tags: ["fire"] }
      ]
    },
    {
      id: "child_age",
      text: "How old is the child?",
      type: "single",
      options: [
        { id: "baby", label: "рџ‘¶ Under 3 years", tags: ["baby"] },
        { id: "preschool", label: "рџ§’ 3вЂ“7 years", tags: ["preschool"] },
        { id: "school", label: "рџ§‘ 7вЂ“12 years", tags: ["school_age"] },
        { id: "teen", label: "рџ§‘вЂЌрџЋ“ Teenager 13вЂ“17 years", tags: ["teen"] }
      ]
    },
    {
      id: "location",
      text: "Where did it happen?",
      type: "single",
      options: [
        { id: "home", label: "рџЏ  At home / apartment", tags: ["home"] },
        { id: "street", label: "рџЊі On the street / yard / park", tags: ["street"] },
        { id: "public", label: "рџЏЄ In a store / mall / transport", tags: ["public"] },
        { id: "school", label: "рџЏ« At school / kindergarten", tags: ["school_place"] }
      ]
    }
  ],

  solutions: [
    {
      id: "stranger_danger",
      title: "рџљЁ Child is talking to a stranger вЂ” immediate actions",
      description: "If the child has already left with a stranger or is talking to a suspicious person вЂ” every second counts.",
      conditions: { situation: ["stranger"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Saving the child",
      tags: ["stranger", "kidnapping", "emergency"],
      steps: [
        "If you see this in real time вЂ” immediately approach the child, take their hand, lead them away. Do not hesitate to shout, attract attention",
        "If the child has already left with a stranger вЂ” call 112 immediately. Report: child's description, kidnapper's description, direction, time",
        "Turn on geolocation on the child's phone (if available): Find My iPhone, Google Family Link, Life360. Track movement",
        "Describe EVERYTHING to the police: height, weight, clothing, hairstyle, special features (scars, moles), last words, child's mood",
        "Send the child's photo to neighbor chats, school, kindergarten, social media. Ask to forward further. The first hours are critical",
        "Check CCTV cameras: entrance, yard, stores, bus stops. Save recordings, hand over to police",
        "Do not panic in front of other children вЂ” they are scared. Explain that the police are looking, everything will be okay",
        "After recovery вЂ” see a psychologist. Even brief contact with a stranger is traumatic. Do not scold the child, support them"
      ],
      warnings: [
        "DO NOT wait 'a little more' вЂ” statistics show the first 3 hours after abduction are decisive. The faster the police act, the higher the chances",
        "DO NOT try to chase the car yourself вЂ” it's dangerous, you may lose the trail. Remember the number, make, color, direction",
        "DO NOT spread false information on social media вЂ” it hinders police work. Only confirmed facts",
        "After the incident вЂ” be sure to talk to the child about rules: do not go with strangers, code word, 'no вЂ” run вЂ” shout'"
      ]
    },
    {
      id: "lost_child_action",
      title: "рџ”Ќ Lost child вЂ” search algorithm",
      description: "In a store, park, mall вЂ” anyone can get lost. Act quickly and systematically.",
      conditions: { situation: ["alone_home", "lost"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10вЂ“30 minutes",
      yield_estimate: "Finding the child",
      tags: ["lost", "search", "emergency"],
      steps: [
        "DO NOT panic. Stop, look around вЂ” the child may be within 20 meters, just behind a shelf or tree",
        "If in a store / mall вЂ” contact security, administration, cashier. They will announce over PA, close exits",
        "If outside вЂ” ask passersby, vendors, drivers. Show a photo. Children often hide from fear вЂ” check corners, bushes, under benches",
        "If not found within 10вЂ“15 minutes вЂ” call 112. Report: description, clothing, last location, time",
        "Turn on geolocation on the child's phone / watch (if available). Children often walk 'home' from memory вЂ” check the route",
        "Send photos to neighbor chats, parent chats, social media. Ask to forward",
        "If the child is found вЂ” do not scold, do not punish. Hug, calm down. Talk later about rules: stay in place, call mom/dad, approach a vendor/policeman",
        "Teach the child in advance: name, surname, address, parents' phone. Bracelet with contacts. Code word 'I'm lost'"
      ],
      warnings: [
        "DO NOT run around chaotically вЂ” you may run past the child. Act systematically: circle by circle, increasing radius",
        "DO NOT wait 'another 5 minutes' вЂ” if the child is missing for 10 minutes in an unfamiliar place, it's already an emergency. Call the police",
        "Children under 5 often hide from fear rather than look for parents. Check hiding spots, behind curtains, under tables",
        "After recovery вЂ” do not scold. The child is already in shock. Discuss rules later, in a calm setting"
      ]
    },
    {
      id: "dangerous_item_found",
      title: "вљ пёЏ Child found a dangerous object",
      description: "Pills, knives, weapons, chemicals вЂ” children put everything in their mouths. Act immediately.",
      conditions: { situation: ["dangerous_item"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“10 minutes",
      yield_estimate: "Preventing poisoning / injury",
      tags: ["poison", "dangerous", "emergency"],
      steps: [
        "If the child swallowed something вЂ” DO NOT induce vomiting without medical advice! Some substances burn the esophagus on the way back up",
        "Immediately call 112 or the poison control center. Report: what was swallowed, how much, when, age, weight",
        "Save the packaging, remaining substance, pills вЂ” the doctor needs to know the composition and dosage. Take photos",
        "If the child held a weapon вЂ” do not shout, do not scare. Calmly take it away, hide it, call the police (112)",
        "If the child cut / stabbed themselves вЂ” rinse the wound with water and soap, treat with antiseptic, apply a sterile bandage. For heavy bleeding вЂ” apply a tourniquet above the wound",
        "Check: are there other dangerous objects within reach? Remove EVERYTHING: medications, household chemicals, sharp objects, weapons, small parts",
        "After the incident вЂ” explain to the child: 'this is dangerous, it hurts, don't touch'. Do not shout, show by example (torn paper, bitter taste)",
        "Install locks on cabinets with chemicals, medications. Store weapons in a safe. Small parts вЂ” out of reach"
      ],
      warnings: [
        "DO NOT induce vomiting for acid, alkali, gasoline, oil poisoning вЂ” it doubles the esophageal burn. Only as directed by a doctor",
        "DO NOT give milk, water, juice for poisoning without consultation вЂ” some substances absorb faster with liquid",
        "Children under 3 put everything in their mouths. Any small object (<3 cm) = choking. Medication = poisoning. Chemicals = burns",
        "After contact with a weapon вЂ” even if it didn't fire вЂ” see a psychologist. Children under 7 cannot distinguish toys from weapons"
      ]
    },
    {
      id: "road_safety_child",
      title: "рџљё Child on the road вЂ” accident or dangerous situation",
      description: "Child ran onto the road, hit by a car, playing on the roadway. Fast but safe.",
      conditions: { situation: ["traffic"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1вЂ“5 minutes",
      yield_estimate: "Saving a life",
      tags: ["traffic", "accident", "emergency"],
      steps: [
        "If the child is on the roadway вЂ” approach from the side, not from the direction of traffic. Cars may not have time to brake",
        "If an accident вЂ” do not move the child if you suspect a spinal fracture. Call emergency: 112. Describe: age, consciousness, breathing, bleeding",
        "If the child is conscious вЂ” calm them, do not panic. Children copy adult emotions. Speak quietly, confidently",
        "For bleeding вЂ” press a sterile cloth on the wound. For fracture вЂ” immobilize with an improvised splint (cardboard, ruler, board)",
        "If the child is unconscious вЂ” check breathing, pulse. If no breathing вЂ” start CPR (artificial respiration + chest compressions). For children: 30 compressions + 2 breaths (for infants вЂ” 2 fingers, for older вЂ” palm)",
        "After the accident вЂ” record: car number, driver description, witnesses. Photos, video. Do not sign anything without a lawyer",
        "Even after a 'light' hit вЂ” see a doctor. Concussion, internal injuries may appear hours later",
        "After the incident вЂ” talk to the child about traffic rules. Play 'traffic light', 'crosswalk'. Explain with examples"
      ],
      warnings: [
        "DO NOT move an injured child if you suspect a spinal or neck fracture вЂ” it may cause paralysis",
        "DO NOT give water, food, or medication for concussion вЂ” vomiting, choking. Only after doctor examination",
        "Children under 7 poorly estimate car speed and distance. Do not let them near roads alone. Hold their hand",
        "After an accident вЂ” even without visible injuries вЂ” see a neurologist. Concussion in children manifests later: vomiting, drowsiness, headache"
      ]
    },
    {
      id: "animal_bite_child",
      title: "рџђ• Animal bite / scratch вЂ” first aid",
      description: "Dog, cat, rat, snake вЂ” bites can be dangerous due to rabies, infection, venom.",
      conditions: { situation: ["animal"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10вЂ“30 minutes",
      yield_estimate: "Preventing infection / rabies",
      tags: ["animal", "bite", "first_aid"],
      steps: [
        "Immediately rinse the wound abundantly with water and soap for 10вЂ“15 minutes. Soap destroys the rabies virus. Do not suture the wound",
        "If bleeding вЂ” press with sterile cloth. Do not bandage tightly вЂ” infection multiplies in a closed wound",
        "Treat with hydrogen peroxide, chlorhexidine, iodine (around the edges, not in the wound). Apply antibiotic ointment",
        "If bitten by a dog / cat (stray, unvaccinated) вЂ” immediately go to the emergency room / infectious disease hospital. Rabies vaccine: days 0, 3, 7, 14, 28. Cannot be skipped!",
        "If snake bite вЂ” go to the hospital immediately. Do not suck out venom, do not make cuts. Apply cold, immobilize the limb, keep below heart level",
        "If tick bite вЂ” remove the tick with tweezers (by the head, not the body), rotating counter-clockwise. Save the tick in a jar for encephalitis / borreliosis testing",
        "Monitor condition: temperature, redness, swelling, pus. If worsening вЂ” see a doctor urgently",
        "After the incident вЂ” teach the child: do not touch unfamiliar animals, do not run from a dog (it will chase), stand still, hands behind back, do not look in the eyes"
      ],
      warnings: [
        "DO NOT suture a bite wound вЂ” it traps infection inside. The wound must remain open, rinsed",
        "DO NOT suck snake venom with your mouth вЂ” venom enters through microcracks. Do not make cuts вЂ” infection",
        "Rabies is 100% fatal if not vaccinated in time. First symptoms appear in 1вЂ“3 months, then it's too late. Do not delay vaccination",
        "Tick-borne encephalitis is dangerous for children. After a tick bite вЂ” get EnceVir vaccine or tick analysis. Prevention: vaccination before the season"
      ]
    }
  ]
};

window.safetyDataEn = safetyData;
