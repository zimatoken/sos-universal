// === MODULE: CHILDREN — INJURIES & FIRST AID (EN) ===
const injuryData = {
  category: "injury",
  title: "🩹 Injuries & First Aid",
  description: "Cut, burn, bruise, fracture, head injury, eye injury, choking — what to do before the ambulance arrives",

  questions: [
    {
      id: "injury_type",
      text: "What is the injury?",
      type: "single",
      options: [
        { id: "cut", label: "Cut / wound / bleeding", tags: ["cut"] },
        { id: "burn", label: "Burn (boiling water, fire, chemical, electricity)", tags: ["burn"] },
        { id: "bruise", label: "Bruise / hematoma / sprain", tags: ["bruise"] },
        { id: "fracture", label: "Fracture / suspected fracture", tags: ["fracture"] },
        { id: "head", label: "Head injury / concussion", tags: ["head"] },
        { id: "eye", label: "Eye injury / chemical / foreign body", tags: ["eye"] },
        { id: "choking", label: "Choking / gagging / suffocating", tags: ["choking"] }
      ]
    },
    {
      id: "severity",
      text: "How serious?",
      type: "single",
      options: [
        { id: "minor", label: "Small cut / bruise / abrasion", tags: ["minor"] },
        { id: "moderate", label: "Deep wound / severe burn / swelling", tags: ["moderate"] },
        { id: "severe", label: "Heavy bleeding / fracture / loss of consciousness", tags: ["severe"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      options: [
        { id: "infant", label: "Infant (0–1 year)", tags: ["infant"] },
        { id: "toddler", label: "1–3 years", tags: ["toddler"] },
        { id: "older", label: "3+ years", tags: ["older"] }
      ]
    }
  ],

  solutions: [
    {
      id: "bleeding_control",
      title: "🩸 Bleeding — stopping before the ambulance arrives",
      description: "Even small bleeding in a child can be dangerous due to small blood volume. Act quickly.",
      conditions: { injury_type: ["cut"], severity: ["moderate", "severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–10 minutes",
      yield_estimate: "Stopping bleeding",
      tags: ["bleeding", "first_aid", "emergency"],
      steps: [
        "Do not panic. Children copy your emotions. Speak calmly, confidently",
        "Put on gloves (if available) or use clean cloth / plastic bag. Protect yourself from infection",
        "For capillary bleeding (drops, small stream): rinse with water and soap, treat with peroxide or chlorhexidine, apply a bandage",
        "For venous (dark blood, flows evenly): apply clean cloth, press for 10–15 minutes. Do not peek under the cloth — it dislodges the clot",
        "For arterial (bright red, pulsing): immediately apply a tourniquet above the wound (5–10 cm up). Record the time. Emergency!",
        "If no tourniquet — use a belt, scarf, strip of cloth. Place fabric under the tourniquet to protect skin. Do not use wire, rubber band without padding",
        "For head wound: blood flows heavily but is usually not dangerous. Press with sterile pad, wrap head with bandage. Do not press on a depressed skull",
        "After stopping blood: treat edges with iodine, apply sterile bandage. For deep wound (>1 cm, visible fat, muscle) — emergency, stitches may be needed",
        "Check tetanus status. If last vaccination > 5 years ago — tell the doctor, revaccination may be needed"
      ],
      warnings: [
        "DO NOT remove an object stuck in the wound (glass, nail) — it may increase bleeding. Stabilize with a bandage, call emergency",
        "Tourniquet cannot be kept > 1.5–2 hours (summer) and > 1 hour (winter) — tissues die. Record the time, inform emergency",
        "DO NOT use chlorhexidine or iodine INSIDE a deep wound — only around edges. Inside — saline or boiled water",
        "Children under 1 year have little blood. Even 100–150 ml loss (half a glass) is critical. Do not underestimate"
      ]
    },
    {
      id: "burn_first_aid",
      title: "🔥 Burn — first aid and mistakes",
      description: "Burns in children are deeper than they appear. Correct first aid in the first 10 minutes determines the outcome.",
      conditions: { injury_type: ["burn"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Reducing burn depth",
      tags: ["burn", "first_aid", "emergency"],
      steps: [
        "Immediately remove the source of burn: turn off fire, push away boiling water, unplug. Do not touch burnt clothing stuck to skin",
        "Cool the burn with RUNNING water for 15–20 minutes. Water temperature 15–25°C (cool tap water). NO ice, NO snow, NO ice water — this worsens damage",
        "Remove rings, bracelets, watches from the burnt limb — swelling develops quickly, jewelry will constrict",
        "DO NOT puncture blisters — they are gateways for infection. DO NOT remove stuck clothing — you will tear off skin. Cut around it",
        "Cover the burn with sterile gauze, clean cloth, or plastic wrap (excellent protection from infection and pain). Do not apply oil, sour cream, toothpaste — they retain heat",
        "For chemical burn: rinse with water for 20–30 minutes. Neutralize only if you know the chemical (acid → soda, alkali → vinegar). Better — only water and emergency",
        "For electrical burn: first de-energize (turn off breaker, unplug). Do not touch the child while they are under current. Electrical burns are internal — always emergency",
        "Emergency for: face, hand, genital burns, > 10% body (child's palm = 1% of body), deep burn (white/black skin, painless), electrical/chemical burns"
      ],
      warnings: [
        "DO NOT apply oil, sour cream, toothpaste, iodine, brilliant green to a burn — they retain heat, worsen the burn, prevent the doctor from assessing depth",
        "DO NOT use ice, snow, ice water — this causes frostbite on top of the burn, constricts vessels, worsens blood supply",
        "Burns in children are deeper than in adults at the same temperature / time. Skin is thinner. Even a 'small' burn can be deep",
        "Burns of the mouth / throat (drank boiling water, chemical) — emergency immediately. Swelling may block airways"
      ]
    },
    {
      id: "fracture_suspected",
      title: "🦴 Fracture — immobilization and transport",
      description: "Children's bones are elastic but fractures are common. Proper immobilization reduces pain and prevents complications.",
      conditions: { injury_type: ["fracture"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Immobilization before emergency",
      tags: ["fracture", "first_aid", "emergency"],
      steps: [
        "Signs of fracture: pain on pressure and movement, swelling, deformity, crunch, inability to move, bruising. In children there may be a 'greenstick' fracture — incomplete, fewer symptoms",
        "DO NOT try to set the bone, DO NOT pull the limb. This worsens nerve, vessel damage, causes shock",
        "For open fracture (bone sticking out): cover with sterile gauze, do not set, do not rinse. Emergency immediately — risk of infection and bleeding",
        "Immobilization: fix the broken limb in the position found. Use boards, cardboard, rulers, umbrellas, clothing rolls",
        "Fix TWO joints — above and below the fracture. For example, for forearm fracture — fix elbow and wrist. Bandage softly but securely",
        "For leg fracture: do not allow stepping. You can bandage the healthy leg to the broken one (transport immobilization) for carrying",
        "For collarbone fracture: hang the arm in a sling (scarf, shawl), press to body. Do not move the shoulder",
        "For spinal fracture (fall from height, impact): DO NOT move the child. Call emergency. Place on a board, fix head with rolls. Any movement = paralysis",
        "Ease pain: apply cold (ice pack wrapped in cloth) for 15–20 minutes. Not on bare skin — frostbite"
      ],
      warnings: [
        "DO NOT give food or water for fracture and suspected shock — anesthesia requires an empty stomach. You may moisten lips",
        "DO NOT give painkillers for suspected skull fracture, internal injuries — they mask symptoms and worsen diagnosis",
        "Children's fractures heal quickly (3–6 weeks), but growth plates require precise repositioning. 'Waiting, it will heal on its own' is unacceptable — limb deformity may result",
        "Femur fracture in a child — rare but serious. Always emergency. Possible damage to thigh vessels (Volkmann's syndrome)"
      ]
    },
    {
      id: "head_injury_child",
      title: "🧠 Head injury — concussion and danger signs",
      description: "Children often hit their heads. Most are harmless, but some signs require immediate emergency.",
      conditions: { injury_type: ["head"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Diagnosing severity",
      tags: ["head", "concussion", "emergency"],
      steps: [
        "Calm the child. Examine the head: is there a wound, blood, depressed area? For skull depression — emergency immediately (skull fracture)",
        "Apply cold (ice pack in cloth) for 15 minutes to the bruise. This reduces swelling and pain. Not on bare skin — frostbite",
        "Monitor for 24 hours. Danger signs: vomiting (especially repeated), drowsiness that is hard to overcome, worsening headache, double vision, balance problems, seizures, blood or clear fluid from nose/ears, behavior changes (irritability, sluggishness)",
        "For any danger signs — emergency immediately. This may be intracranial hemorrhage, skull base fracture",
        "If vomiting — turn the child on their side to prevent choking. Do not give food or drink until examined by a doctor",
        "After concussion: rest for 3–5 days. No TV, no phone, no sports. The brain needs to recover. Second injury on top of the first = dangerous",
        "Even after a 'light' hit, if the child is < 1 year — emergency. Infant skull is soft, intracranial pressure rises quickly"
      ],
      warnings: [
        "DO NOT give painkillers for head injury without doctor's prescription — they mask symptoms of intracranial pressure",
        "DO NOT let sleep immediately after a severe head hit. Monitor 2–3 hours of wakefulness. Then — wake every 2 hours at night, check reaction",
        "Blood from the ear or clear fluid from the nose after a head hit = skull base fracture. Emergency immediately",
        "Children under 2: vomiting after a head hit — always a reason for emergency. Concussion in infants manifests differently than in adults"
      ]
    },
    {
      id: "eye_injury",
      title: "👁️ Eye injury — chemical, foreign body, impact",
      description: "Children's eyes are vulnerable. Correct first aid in the first minutes preserves vision.",
      conditions: { injury_type: ["eye"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Preserving vision",
      tags: ["eye", "first_aid", "emergency"],
      steps: [
        "For chemical contact (shampoo, detergent, gel, spray): immediately rinse the eye abundantly with running water for 15–20 minutes. Hold eyelid open, direct stream from nose to temple. Emergency!",
        "For foreign body (sand, eyelash, fly): do not rub the eye. Ask the child to blink — tears may wash out the particle. Rinse with saline or clean water",
        "If the particle does not wash out — try to flip the eyelid (evert with a stick/cotton swab), remove with a cotton swab. Do not rub with hands",
        "For impact / eye bruise: apply cold (ice pack in cloth) for 10 minutes. Do not press on the eyeball. Emergency if severe pain, blurry vision, blood",
        "For penetrating wound (glass, stick, pencil sticking out of the eye): DO NOT remove the object! Stabilize with a bandage/cup so it doesn't move. Emergency immediately",
        "Cover the eye with sterile gauze or clean cloth. Do not press. Do not let the child rub the eye",
        "After any eye injury — see an ophthalmologist within 24 hours. Even a 'minor' corneal abrasion can become infected"
      ],
      warnings: [
        "DO NOT rub the eye when a foreign body enters — this scratches the cornea, drives the particle deeper",
        "DO NOT use cotton swabs on the cornea — fibers remain, causing irritation. Only on the eyelid, for eversion",
        "DO NOT rinse the eye with oils, milk, tea — only clean water or saline. Oil retains chemicals",
        "Penetrating eye injuries — an extreme emergency. Every minute counts. Do not waste time on self-treatment"
      ]
    },
    {
      id: "choking_child",
      title: "😮 Choking — Heimlich maneuver for children",
      description: "Toys, nuts, grapes, balloons — the main killers. Act immediately while the child is conscious.",
      conditions: { injury_type: ["choking"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Removing foreign body",
      tags: ["choking", "heimlich", "emergency"],
      steps: [
        "If the child is coughing strongly — encourage coughing, DO NOT hit the back, DO NOT do Heimlich. Coughing is the best way to expel the object",
        "If coughing is weak, the child cannot speak, breathe, skin is turning blue — immediately begin the Heimlich maneuver",
        "Infant (< 1 year): lay face down on forearm, head lower than body. 5 back blows between shoulder blades with the heel of the hand. Turn over, 2 fingers 5 chest thrusts (below nipples). Repeat until the object comes out",
        "Child 1–8 years: stand behind, wrap arms above the navel, fist inward. Sharp upward-inward thrusts 5 times. Repeat until the object exits or consciousness is lost",
        "If the child loses consciousness: lay on back, begin CPR. 30 chest compressions (1/3 depth), 2 breaths. Check the mouth before breaths — the object may be visible",
        "If you see the object in the mouth — remove with a finger (only if visible, do not probe blindly — you may push it deeper)",
        "After successful removal — mandatory doctor visit. There may be esophageal, laryngeal damage. Even if 'everything is fine'",
        "Prevention: do not give children < 3 years nuts, grapes, candies, jelly, popcorn, small toys, coins, balloons"
      ],
      warnings: [
        "DO NOT hit the back of a standing/sitting child during choking — it may drive the object deeper",
        "DO NOT do Heimlich if the child is coughing effectively — coughing is stronger than any maneuver. Switch to Heimlich only for weak/absent cough",
        "DO NOT probe the mouth blindly with a finger — this pushes the object deeper. Only if you SEE the object",
        "Balloon — the most dangerous object. Sticks to the larynx walls, is not expelled by coughing. Heimlich is often ineffective — emergency immediately"
      ]
    }
  ]
};

window.injuryData = injuryData;