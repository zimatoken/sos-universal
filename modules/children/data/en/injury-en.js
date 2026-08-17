// === MODULE: CHILDREN — INJURIES AND FIRST AID ===
const injuryDataEn = {
  category: "injury",
  title: "?? Injuries and First Aid",
  description: "Cuts, burns, bruises, fractures, eye injuries — what to do before the ambulance arrives",

  questions: [
    {
      id: "injury_type",
      text: "What type of injury?",
      type: "single",
      options: [
        { id: "cut", label: "?? Cut / wound / bleeding", tags: ["cut"] },
        { id: "burn", label: "?? Burn (boiling water, fire, chemicals, electricity)", tags: ["burn"] },
        { id: "bruise", label: "?? Bruise / contusion / sprain", tags: ["bruise"] },
        { id: "fracture", label: "?? Fracture / suspected fracture", tags: ["fracture"] },
        { id: "head", label: "?? Head injury / concussion", tags: ["head"] },
        { id: "eye", label: "??? Eye injury / chemical / foreign body", tags: ["eye"] },
        { id: "choking", label: "?? Choking / gagging / struggling to breathe", tags: ["choking"] }
      ]
    },
    {
      id: "severity",
      text: "How serious is it?",
      type: "single",
      conditions: { injury_type: ["cut", "burn", "bruise", "fracture", "head", "eye", "choking"] },
      options: [
        { id: "minor", label: "?? Minor cut / bruise / scrape", tags: ["minor"] },
        { id: "moderate", label: "?? Deep wound / severe burn / swelling", tags: ["moderate"] },
        { id: "severe", label: "?? Severe bleeding / fracture / loss of consciousness", tags: ["severe"] }
      ]
    },
    {
      id: "age",
      text: "Child's age?",
      type: "single",
      conditions: { injury_type: ["cut", "burn", "bruise", "fracture", "head", "eye", "choking"] },
      options: [
        { id: "infant", label: "?? Infant (0–1 year)", tags: ["infant"] },
        { id: "toddler", label: "?? 1–3 years", tags: ["toddler"] },
        { id: "older", label: "?? 3+ years", tags: ["older"] }
      ]
    }
  ],

  solutions: [
    // ==========================================
    // 1. SEVERE BLEEDING
    // ==========================================
    {
      id: "bleeding_control",
      title: "?? Bleeding — stopping it before the ambulance arrives",
      description: "Even a small bleed in a child can be dangerous due to their small blood volume. Act quickly.",
      conditions: { injury_type: ["cut"], severity: ["moderate", "severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–10 minutes",
      yield_estimate: "Stopping the bleeding",
      tags: ["bleeding", "first_aid", "emergency"],
      steps: [
        "Don't panic. Children copy your emotions. Speak calmly, confidently",
        "Put on gloves (if available) or use clean cloth/plastic. Protect yourself from infection",
        "For capillary bleeding (drops, small trickle): wash with soap and water, treat with hydrogen peroxide or chlorhexidine, apply bandage/plaster",
        "For venous bleeding (dark blood, steady flow): apply clean cloth, press for 10–15 minutes. Don't peek under the cloth — it disrupts the clot",
        "For arterial bleeding (bright red, pulsing): immediately apply a tourniquet above the wound (5–10 cm). Write down the time of application. Call ambulance!",
        "If no tourniquet — use a belt, scarf, strip of fabric. Place fabric under the tourniquet to protect the skin. Don't use wire or rubber bands without padding",
        "For head wounds: blood flows heavily but is usually not dangerous. Press with sterile gauze, wrap the head with a bandage. Don't press on a depressed skull",
        "After stopping the bleeding: treat edges with iodine, apply sterile bandage. For deep wounds (>1 cm, visible fat/muscle) — call ambulance, may need stitches",
        "Check tetanus status. If last vaccine was >5 years ago — tell the doctor, may need booster"
      ],
      warnings: [
        "DON'T remove an object stuck in the wound (glass, nail) — this can increase bleeding. Stabilize with bandage, call ambulance",
        "Tourniquet cannot be left on >1.5–2 hours (summer) and >1 hour (winter) — tissue dies. Record the time, tell ambulance crew",
        "DON'T use chlorhexidine or iodine INSIDE a deep wound — only around the edges. Inside — use saline or boiled water",
        "Children under 1 have little blood. Even 100–150 ml loss (half a cup) is critical. Don't underestimate"
      ]
    },
    // ==========================================
    // 2. MINOR CUT / SCRAPE
    // ==========================================
    {
      id: "minor_cut",
      title: "?? Minor cut or scrape — treatment",
      description: "Most minor cuts and scrapes can be treated at home. The key is preventing infection.",
      conditions: { injury_type: ["cut"], severity: ["minor"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5–10 minutes",
      yield_estimate: "Treated wound",
      tags: ["cut", "minor", "first_aid"],
      steps: [
        "Wash your hands. Put on gloves (if available)",
        "Rinse the wound with running water for 2–3 minutes. Soap — around the edges, not inside",
        "Remove small particles (sand, dirt) with sterile tweezers or moist gauze",
        "Treat with hydrogen peroxide or chlorhexidine. Apply once, not repeatedly",
        "Apply a bandage or sterile dressing. Change twice a day",
        "Monitor for 2–3 days. If redness, swelling, increasing pain, or pus — see a doctor",
        "If the scrape is on the face — apply healing ointment (Bepanthen, Depanthenol) — fewer scars"
      ],
      warnings: [
        "DON'T treat the wound with alcohol, iodine, or brilliant green inside — it kills living cells and slows healing",
        "DON'T keep a bandage on for 3+ days — the wound needs to breathe",
        "If the wound is from a rusty nail or animal bite — tetanus shot is needed. See a doctor immediately"
      ]
    },
    // ==========================================
    // 3. BURNS
    // ==========================================
    {
      id: "burn_first_aid",
      title: "?? Burn — first aid and common mistakes",
      description: "Burns in children are deeper than they appear. Proper first aid in the first 10 minutes determines the outcome.",
      conditions: { injury_type: ["burn"], severity: ["minor", "moderate"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Reducing burn depth",
      tags: ["burn", "first_aid", "emergency"],
      steps: [
        "Immediately remove the burn source: turn off the fire, move away from boiling water, unplug the cord. Don't touch burned clothing stuck to the skin",
        "Cool the burn with RUNNING water for 15–20 minutes. Water temperature 15–25°C (cool tap water). NOT ice, NOT snow, NOT ice water — this worsens the damage",
        "Remove rings, bracelets, watches from the burned limb — swelling develops quickly and jewelry will constrict",
        "DON'T pop blisters — they are entry points for infection. DON'T remove stuck clothing — you'll tear skin. Cut around it",
        "Cover the burn with sterile gauze, clean cloth, or plastic wrap (excellent for protecting from infection and pain). Don't apply oils, sour cream, or toothpaste — they trap heat",
        "For chemical burns: rinse with water for 20–30 minutes. Only neutralize if you know the chemical (acid > baking soda, alkali > vinegar). Better — just water and call ambulance",
        "For electrical burns: first disconnect power (turn off circuit breaker, unplug). Don't touch the child while they're still connected. Electrical burns are internal — always call ambulance",
        "Call ambulance for: burns to the face, hands, genitals, >10% of body (child's palm = 1% of body), deep burn (white/black skin, painless), electrical/chemical burns"
      ],
      warnings: [
        "DON'T apply oil, sour cream, toothpaste, iodine, or brilliant green to burns — they trap heat, worsen the burn, and prevent doctors from assessing depth",
        "DON'T use ice, snow, or ice water — they cause frostbite on top of the burn, constrict blood vessels, and worsen blood supply",
        "Burns in children are deeper than in adults at the same temperature/time. Skin is thinner. Even a 'small' burn can be deep",
        "Burn to the mouth/throat (drank boiling water or chemicals) — call ambulance immediately. Swelling can block the airway"
      ]
    },
    {
      id: "burn_severe",
      title: "?? Severe burn — immediate help",
      description: "Extensive burns, burns to the face, hands, genitals — require immediate hospitalization.",
      conditions: { injury_type: ["burn"], severity: ["severe"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Emergency care",
      tags: ["burn", "severe", "emergency"],
      steps: [
        "Call an ambulance IMMEDIATELY. Extensive burns in children are life-threatening (dehydration, infection, shock)",
        "Cool the burn with running water for 15–20 minutes — this reduces the depth of damage",
        "Don't remove stuck clothing — cut around it. Don't pop blisters",
        "Cover the burn with sterile gauze or clean cloth. Don't apply anything!",
        "If burn is >10% of body — the child may be in shock. Lay them down, wrap them, elevate legs",
        "If the airway is burned (smoke inhalation, facial burn) — immediately go to the hospital"
      ],
      warnings: [
        "Extensive burns in children are life-threatening. Don't waste time on self-treatment",
        "DON'T give fluids for burns to the mouth/throat — swelling can block breathing",
        "DON'T apply any ointments before the ambulance arrives — they trap heat"
      ]
    },
    // ==========================================
    // 4. BRUISE / SPRAIN
    // ==========================================
    {
      id: "bruise_first_aid",
      title: "?? Bruise, contusion, sprain — home treatment",
      description: "Bruises and sprains are the most common injuries in children. Proper first aid speeds healing.",
      conditions: { injury_type: ["bruise"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Pain and swelling relief",
      tags: ["bruise", "first_aid"],
      steps: [
        "Apply cold (ice pack, frozen vegetables, cold compress) wrapped in cloth. 15–20 minutes, 20-minute break. Not on bare skin — frostbite risk",
        "Elevate the bruised limb — this reduces swelling",
        "For sprains (ligaments): don't put weight on it, rest for 1–3 days. Elastic bandage (not too tight!)",
        "For severe pain — paracetamol or ibuprofen (age-appropriate dose)",
        "After 2 days — start gentle movement (the joint needs to be exercised)",
        "Heat after 48–72 hours — speeds up hematoma resolution",
        "If swelling increases, pain worsens, limb won't move — possible fracture. See a doctor"
      ],
      warnings: [
        "DON'T apply ice directly to bare skin — frostbite. Always use cloth",
        "DON'T apply heat in the first 48 hours — it increases swelling and bleeding",
        "DON'T give painkillers if you suspect a fracture — they mask symptoms",
        "If they can't put weight on their leg after 24 hours — possible fracture. Get an X-ray"
      ]
    },
    // ==========================================
    // 5. FRACTURE
    // ==========================================
    {
      id: "fracture_suspected",
      title: "?? Fracture — immobilization and transport",
      description: "Children's bones are flexible, but fractures are common. Proper immobilization reduces pain and prevents complications.",
      conditions: { injury_type: ["fracture"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–20 minutes",
      yield_estimate: "Immobilization until ambulance arrives",
      tags: ["fracture", "first_aid", "emergency"],
      steps: [
        "Fracture signs: pain on pressure and movement, swelling, deformity, crunching, inability to move, bruising. Children may have 'greenstick' fractures — incomplete, fewer symptoms",
        "DON'T try to realign the bone, DON'T pull the limb. This damages nerves and blood vessels, causes shock",
        "For open fracture (bone protruding): cover with sterile gauze, don't realign, don't wash. Call ambulance immediately — risk of infection and bleeding",
        "Immobilization: stabilize the broken limb in the position found. Use boards, cardboard, rulers, umbrella, rolled clothing",
        "Immobilize TWO joints — above and below the fracture. For forearm fractures — fix the elbow and wrist. Bandage gently but securely",
        "For leg fractures: don't let them put weight on it. You can strap the healthy leg to the broken one (transport immobilization) for carrying",
        "For collarbone fractures: hang the arm in a sling (scarf, cloth), press to the body. Don't move the shoulder",
        "For spinal fractures (fall from height, impact): DON'T move the child. Call ambulance. Place on a board, immobilize the head with rolled towels. Any movement = paralysis",
        "Relieve pain: apply cold (ice pack wrapped in cloth) for 15–20 minutes. Not on bare skin — frostbite"
      ],
      warnings: [
        "DON'T give food or water for fractures and suspected shock — surgery requires an empty stomach. You can moisten lips",
        "DON'T give painkillers for suspected skull fracture or internal injuries — they mask symptoms and worsen diagnosis",
        "Children's fractures heal quickly (3–6 weeks), but growth plates require precise realignment. 'Let's wait and see' is unacceptable — limb deformity may result",
        "Femur fracture in a child is rare but serious. Always call ambulance. May involve femoral artery damage (Volkmann's syndrome)"
      ]
    },
    {
      id: "fracture_infant",
      title: "?? Fracture in an infant — special care",
      description: "Fractures in children under 1 year are rare, but if they occur — require special attention.",
      conditions: { injury_type: ["fracture"], age: ["infant"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "Immediately",
      yield_estimate: "Emergency diagnosis",
      tags: ["fracture", "infant", "emergency"],
      steps: [
        "Fracture in an infant — always call ambulance. Bones are fragile, growth plates not yet formed",
        "Don't try to immobilize yourself — incorrect splinting can cause harm",
        "Position the child comfortably, don't move the injured limb",
        "For collarbone fracture (often during birth) — support the arm, don't bandage too tightly",
        "At the hospital they'll do X-rays, cast or special splint for infants"
      ],
      warnings: [
        "Fracture in an infant always raises suspicion of neglect or osteoporosis. Doctors are required to report to child protective services",
        "DON'T give painkillers without a doctor's prescription",
        "Infant fractures heal very quickly (2–3 weeks), but require orthopedic follow-up"
      ]
    },
    // ==========================================
    // 6. HEAD INJURY
    // ==========================================
    {
      id: "head_injury_child",
      title: "?? Head injury — concussion and danger signs",
      description: "Children often hit their heads. Most are harmless, but some signs require immediate medical attention.",
      conditions: { injury_type: ["head"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Assessing severity",
      tags: ["head", "concussion", "emergency"],
      steps: [
        "Calm the child. Examine the head: any wound, blood, depression? If skull depression — call ambulance immediately (skull fracture)",
        "Apply cold (ice pack in cloth) for 15 minutes to the bruise. This reduces swelling and pain. Not on bare skin — frostbite",
        "Monitor for 24 hours. Danger signs: vomiting (especially repeated), excessive drowsiness, worsening headache, double vision, balance problems, seizures, blood or clear fluid from nose/ears, behavioral changes (irritability, lethargy)",
        "If any danger signs — call ambulance immediately. This could be intracranial bleeding, skull base fracture",
        "If vomiting — turn child on their side to prevent choking. Don't give food or drink until doctor examines",
        "After concussion: rest for 3–5 days. No TV, no phone games, no sports. The brain needs to recover. A second injury while recovering is dangerous",
        "Even with a 'mild' impact, if the child is <1 year — call ambulance. In infants, the skull is soft and intracranial pressure rises quickly"
      ],
      warnings: [
        "DON'T give painkillers for head injury without a doctor — they mask symptoms of intracranial pressure",
        "DON'T put them to sleep immediately after a severe head impact. Keep them awake for 2–3 hours. Then — wake them every 2 hours at night, check responsiveness",
        "Blood from the ear or clear fluid from the nose after head injury = skull base fracture. Call ambulance immediately",
        "Children under 2: vomiting after head injury is always reason to call ambulance. Concussion in infants presents differently than in adults"
      ]
    },
    // ==========================================
    // 7. EYE INJURY
    // ==========================================
    {
      id: "eye_injury",
      title: "??? Eye injury — chemicals, foreign body, impact",
      description: "Children's eyes are vulnerable. Proper first aid in the first minutes preserves vision.",
      conditions: { injury_type: ["eye"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Preserving vision",
      tags: ["eye", "first_aid", "emergency"],
      steps: [
        "For chemical exposure (shampoo, cleaner, gel, spray): immediately rinse the eye thoroughly with running water for 15–20 minutes. Hold eyelid open, direct flow from nose to temple. Call ambulance!",
        "For foreign body (sand, eyelash, gnat): don't rub the eye. Ask the child to blink — tears may wash out the particle. Rinse with saline or clean water",
        "If the particle won't wash out — try to flip the eyelid (evert it with a cotton swab), remove with a cotton swab. Don't rub with hands",
        "For impact / bruise to the eye: apply cold (ice pack in cloth) for 10 minutes. Don't press on the eyeball. Call ambulance if severe pain, blurred vision, blood",
        "For penetrating wound (glass, stick, pencil sticking out of the eye): DON'T remove the object! Stabilize with bandage/cup to prevent movement. Call ambulance immediately",
        "Cover the eye with sterile gauze or clean cloth. Don't press. Don't let the child rub their eye",
        "After any eye injury — see an ophthalmologist within 24 hours. Even a 'minor' corneal abrasion can become infected"
      ],
      warnings: [
        "DON'T rub the eye when foreign body enters — it scratches the cornea and drives particles deeper",
        "DON'T use cotton swabs on the cornea — fibers remain, causing irritation. Only on the eyelid, for flipping",
        "DON'T rinse the eye with oils, milk, tea — only clean water or saline. Oil traps chemicals",
        "Penetrating eye wounds are emergencies. Every minute counts. Don't waste time on self-treatment"
      ]
    },
    // ==========================================
    // 8. CHOKING
    // ==========================================
    {
      id: "choking_child",
      title: "?? Choking — Heimlich maneuver for children",
      description: "Toys, nuts, grapes, balloons — the main killers. Act immediately while the child is conscious.",
      conditions: { injury_type: ["choking"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Removing the foreign object",
      tags: ["choking", "heimlich", "emergency"],
      steps: [
        "If the child is coughing forcefully — encourage coughing, DON'T hit their back, DON'T do the Heimlich. Coughing is the best way to expel the object",
        "If coughing is weak, child can't speak or breathe, skin turns blue — immediately start the Heimlich maneuver",
        "Infant (<1 year): lay face down on your forearm, head lower than body. 5 back blows between shoulder blades with the heel of your hand. Turn over, 2 fingers 5 chest compressions (below the nipple line). Repeat until object comes out",
        "Child 1–8 years: stand behind, wrap arms above the navel, fist inward. Sharp upward-inward thrusts 5 times. Repeat until object comes out or child loses consciousness",
        "If child loses consciousness: lay on back, start CPR. 30 chest compressions (1/3 depth), 2 breaths. Check mouth before breaths — object may be visible",
        "If you see the object in the mouth — remove it with your finger (only if visible, don't blind sweep — you'll push it deeper)",
        "After successful removal — definitely see a doctor. There may be damage to the esophagus or larynx. Even if 'everything seems fine'",
        "Prevention: don't give children under 3 nuts, grapes, hard candies, gummies, popcorn, small toys, coins, balloons"
      ],
      warnings: [
        "DON'T hit the back of a standing/sitting child who is choking — this can push the object deeper",
        "DON'T do the Heimlich if the child is coughing effectively — coughing is more powerful than any maneuver. Only switch to Heimlich when coughing is weak or absent",
        "DON'T blind sweep the mouth with your finger — it pushes the object deeper. Only if you CAN SEE the object",
        "Balloons are the most dangerous object. They stick to the larynx walls and can't be expelled by coughing. The Heimlich is often ineffective — call ambulance immediately"
      ]
    },
    {
      id: "choking_infant",
      title: "?? Infant choking — special technique",
      description: "For infants, the Heimlich maneuver is DIFFERENT. A mistake can be fatal.",
      conditions: { injury_type: ["choking"], age: ["infant"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–3 minutes",
      yield_estimate: "Removing the object",
      tags: ["choking", "infant", "emergency"],
      steps: [
        "Place the infant face down on your forearm, head lower than body. The head should be supported but not pressed",
        "5 back blows between shoulder blades with the heel of your hand. Blows should be firm but not too strong (bones are fragile)",
        "Turn the infant onto their back, place on your thigh. 5 chest compressions (2 fingers, center of breastbone, below the nipple line). Depth — 1/3 of the chest",
        "Repeat the cycle (5 blows + 5 compressions) until the object comes out or the child loses consciousness",
        "If the object comes out — check breathing. If breathing — place on their side, call an ambulance",
        "If they lose consciousness — start infant CPR: 30 compressions (2 fingers), 2 breaths (mouth over nose and mouth)"
      ],
      warnings: [
        "DON'T do classic Heimlich on an infant — you can damage internal organs",
        "DON'T hit the infant's back if they are coughing effectively — coughing is better",
        "DON'T poke your finger into the infant's mouth — you'll push the object deeper",
        "Infants choke silently. If not breathing, turning blue — act immediately"
      ]
    }
  ]
};

// ===== EXPORT =====
window.injuryDataEn = injuryDataEn;
