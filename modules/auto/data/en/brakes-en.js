// === MODULE: AUTO — BRAKES (ENGLISH) ===
const autoBrakesDataEn = {
  category: "brakes",
  title: "🛑 Brake Problems",
  description: "Diagnostics and solutions for critical brake system issues",

  questions: [
    {
      id: "symptom",
      text: "What symptoms do you notice? (select all that apply)",
      type: "multi",
      options: [
        { id: "soft_pedal", label: "🦶 Brake pedal is soft / sinks to the floor", tags: ["soft_pedal", "air", "fluid"] },
        { id: "squeal", label: "🔊 Squealing or screeching when braking", tags: ["squeal", "pads", "wear"] },
        { id: "vibration", label: "📳 Vibration in pedal or steering wheel when braking", tags: ["vibration", "discs", "warp"] },
        { id: "pulls", label: "🚗 Car pulls to one side when braking", tags: ["pulls", "caliper", "uneven"] },
        { id: "burning_smell", label: "👃 Burning smell (plastic / rubber)", tags: ["burning", "overheat", "caliper"] },
        { id: "warning_light", label: "💡 Brake warning light on dashboard", tags: ["warning", "abs", "fluid"] },
        { id: "long_stop", label: "📏 Increased stopping distance", tags: ["long_stop", "pads", "fluid"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic", "low_speed"] },
        { id: "highway", label: "🛣️ Highway (high speed)", tags: ["highway", "speed", "danger"] },
        { id: "parking", label: "🅿️ Parking lot / mall", tags: ["parking", "help", "possible"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "jack", label: "🛠️ Jack", tags: ["jack"] },
        { id: "tools", label: "🔧 Wrench / socket set", tags: ["tools"] },
        { id: "brake_fluid", label: "🧴 Brake fluid", tags: ["fluid"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "car_type",
      text: "What type of car do you have?",
      type: "single",
      options: [
        { id: "standard", label: "🚗 Standard passenger car", tags: ["standard"] },
        { id: "suv", label: "🚙 SUV / off-road", tags: ["suv", "heavy"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid", "electric"] }
      ]
    },
    {
      id: "brake_light",
      text: "Is the brake system warning light on?",
      type: "single",
      options: [
        { id: "yes_red", label: "🔴 Yes, red (urgent)", tags: ["red_light", "emergency"] },
        { id: "yes_yellow", label: "🟡 Yes, yellow (ABS / problem)", tags: ["yellow_light", "abs"] },
        { id: "no", label: "🚫 No, not on", tags: ["no_light"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Brake fluid check and top-up
    // ========================================
    {
      id: "brake_fluid_check",
      title: "🧴 Brake fluid check and top-up",
      description: "Low fluid level is a common cause of a soft pedal and increased stopping distance.",
      conditions: { symptom: ["soft_pedal", "long_stop", "warning_light"], brake_light: ["red_light", "yellow_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Brake function restored",
      tags: ["fluid", "check", "top_up"],
      steps: [
        "Open the hood and locate the brake fluid reservoir (usually near the driver, clear plastic)",
        "Check the level: it should be between MIN and MAX marks",
        "If below MIN — top up with recommended fluid (DOT 4 / DOT 5.1)",
        "Inspect the reservoir and hoses for leaks (wet spots, drips)",
        "Check the fluid color: if dark/cloudy — needs replacement (every 2 years)",
        "Close the cap, sit in the car and press the pedal several times — it should become firm",
        "If the pedal is still soft — air may be in the system (needs bleeding)"
      ],
      warnings: [
        "DO NOT use fluid from an open bottle (it absorbs moisture)",
        "DO NOT mix DOT 4 and DOT 5 (they are incompatible)",
        "If the level dropped suddenly — there is a leak, do not drive",
        "After topping up, test brakes at a safe speed"
      ]
    },
    // ========================================
    // 2. Brake pad replacement
    // ========================================
    {
      id: "brake_pads_replace",
      title: "🔧 Brake pad replacement",
      description: "Squealing and increased stopping distance are signs of worn pads.",
      conditions: { symptom: ["squeal", "long_stop"], location: ["home", "parking"], has_tools: ["jack", "tools"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 hours",
      yield_estimate: "New pads, confident braking",
      tags: ["pads", "replace", "brakes"],
      steps: [
        "Jack up the car and secure it with stands",
        "Remove the wheel (17/19 mm wrench)",
        "Unscrew the caliper guide pins (usually 2 bolts)",
        "Remove the old pads (note their position)",
        "Check the brake disc condition — if there are deep grooves, it needs machining or replacement",
        "Install new pads (make sure they match in size)",
        "Lubricate the caliper guide pins with special grease (not brake fluid!)",
        "Reassemble the caliper and tighten it",
        "Pump the brakes (press the pedal several times until firm)",
        "Reinstall the wheel, lower the car, check fluid level",
        "Break in the pads: 50-100 km without hard braking"
      ],
      warnings: [
        "DO NOT use greasy or oily hands — oil reduces friction",
        "DO NOT brake hard for the first 50-100 km — pads need to bed in",
        "If pads are worn unevenly — check the caliper (may be sticking)",
        "Replace pads on both wheels of the same axle"
      ]
    },
    // ========================================
    // 3. Brake bleeding (removing air)
    // ========================================
    {
      id: "bleed_brakes",
      title: "🩸 Brake bleeding (removing air)",
      description: "Air in the system causes a soft pedal and spongy feel. Bleeding removes the air.",
      conditions: { symptom: ["soft_pedal"], location: ["home", "parking"], has_tools: ["tools"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "30-60 min",
      yield_estimate: "Firm pedal",
      tags: ["bleed", "air", "fluid"],
      steps: [
        "Check fluid level (should be at MAX)",
        "One person sits in the driver's seat, another works at the wheel",
        "Start with the right rear wheel (farthest from the master cylinder)",
        "Attach a bleed hose to the bleeder screw, put the other end in a container with fluid",
        "The driver pumps the pedal 3-4 times and holds it down",
        "Open the bleeder screw half a turn — fluid with bubbles comes out, pedal goes down",
        "Close the bleeder screw, then the driver releases the pedal",
        "Repeat until clean fluid without bubbles comes out",
        "Repeat for each wheel (order: rear right → rear left → front right → front left)",
        "During the process, keep topping up fluid (never let it drop below MIN)",
        "After bleeding, check fluid level and tighten all bleed screws"
      ],
      warnings: [
        "DO NOT let the fluid drop below MIN — air will be drawn in",
        "DO NOT bleed if there are leaks — fix them first",
        "If air entered the system after repair — bleeding is mandatory",
        "DOT 4/5.1 fluid is hygroscopic — do not use old fluid"
      ]
    },
    // ========================================
    // 4. Engine braking (emergency)
    // ========================================
    {
      id: "engine_brake",
      title: "⚙️ Engine braking (emergency)",
      description: "If brakes fail on the highway, use engine compression and handbrake to stop.",
      conditions: { symptom: ["soft_pedal", "long_stop"], location: ["highway"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "0 min (immediate)",
      yield_estimate: "Vehicle stopped",
      tags: ["emergency", "engine_brake", "survival"],
      steps: [
        "DO NOT turn off the ignition — power brake booster will be lost",
        "Downshift (MT — 4th → 3rd → 2nd; AT — switch to manual mode and downshift)",
        "Smoothly release the clutch (MT) — the engine will brake",
        "Simultaneously use the parking brake (handbrake) — gently, in pulses to avoid locking wheels",
        "If possible, steer the car uphill or into a field (speed will drop)",
        "Turn on hazard lights and honk (sound attracts attention)",
        "When speed drops to 20-30 km/h, you can use the main brake (if it works)",
        "Once stopped — turn off the engine, engage the parking brake"
      ],
      warnings: [
        "DO NOT turn off the ignition — steering will lock, brake booster will stop",
        "DO NOT yank the handbrake abruptly — the car may spin",
        "On AT, downshifting is only possible in manual mode",
        "If this does not help — use friction against the curb, bushes, snow bank"
      ]
    },
    // ========================================
    // 5. ABS diagnostics
    // ========================================
    {
      id: "abs_diagnostics",
      title: "💡 ABS diagnostics (yellow light)",
      description: "A yellow ABS warning light indicates a problem with the anti-lock braking system.",
      conditions: { symptom: ["warning_light"], brake_light: ["yellow_light"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-30 min",
      yield_estimate: "Fault identification",
      tags: ["abs", "diagnostics", "electronics"],
      steps: [
        "Check the ABS fuses in the fuse box (diagram on the cover)",
        "Inspect wheel speed sensors — they may be dirty or damaged",
        "Check sensor wiring for damage or corrosion",
        "If you have access to an OBD2 scanner — read fault codes",
        "If no scanner — visit a service center for diagnostics",
        "If the light appeared after pad replacement — the wear sensor may be faulty",
        "If ABS engages too often or not at all — this is dangerous on slippery roads"
      ],
      warnings: [
        "Do not ignore the yellow light — ABS works with limitations",
        "If ABS fails, the system works as conventional brakes (no anti-lock)",
        "Replacing an ABS sensor is usually affordable (from 2000 RUB)",
        "If the RED brake light is on — DO NOT drive, it is dangerous"
      ]
    },
    // ========================================
    // 6. Visual inspection of discs and calipers
    // ========================================
    {
      id: "visual_inspection",
      title: "🔍 Visual inspection of brakes",
      description: "Check discs, calipers, and hoses for damage.",
      conditions: { symptom: ["vibration", "pulls", "burning_smell"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "Fault identified",
      tags: ["inspection", "discs", "calipers"],
      steps: [
        "Jack up the car and remove the wheel",
        "Inspect the brake disc: deep scratches, cracks, blue tint (overheating)",
        "Check the caliper: is it sticking? (try to move it by hand)",
        "Inspect the brake hoses: cracks, bulges, signs of fluid leakage",
        "Check caliper piston dust boots — if torn, dirt may jam the caliper",
        "Assess pad wear — if worn to metal, replace (see solution 2)",
        "Record all defects for later repair (take photos)"
      ],
      warnings: [
        "Do not touch hot discs (burn risk)",
        "If discs have deep grooves — they need machining or replacement",
        "If a caliper is seized — do not drive, it may catch fire",
        "Brake fluid is corrosive — avoid contact with paint"
      ]
    },
    // ========================================
    // 7. Calling a tow truck / towing
    // ========================================
    {
      id: "tow_truck_brakes",
      title: "🚛 Calling a tow truck (safe option)",
      description: "If brakes are critically faulty, driving is risky. Tow truck is the best solution.",
      conditions: { symptom: ["soft_pedal", "burning_smell", "warning_light"], brake_light: ["red_light"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and place the emergency triangle",
        "Call your insurance company (OSAGO/CASCO) — they often include towing",
        "If not — call a towing service via 2GIS or Yandex",
        "Tell the operator: location, make, problem (brake failure)",
        "Wait for the tow truck, prepare the car (handbrake, neutral)",
        "During loading, ask them to be careful (brakes don't work)",
        "Go to the service center or home (on the tow truck)",
        "If towing (no tow truck) — only with a rigid tow bar, at low speed"
      ],
      warnings: [
        "Do not attempt to drive with critical brake failure",
        "Towing with a rope with faulty brakes is DANGEROUS — use a rigid tow bar",
        "If the tow truck is expensive — call a friend with a tow rope (but be careful!)",
        "When towing, keep distance, avoid hard braking"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoBrakesDataEn = autoBrakesDataEn;
