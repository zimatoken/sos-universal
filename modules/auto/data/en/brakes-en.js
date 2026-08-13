// === MODULE: AUTO — BRAKES (ENGLISH) ===
const autoBrakesDataEn = {
  category: "brakes",
  title: "🛑 Brake problems",
  description: "Diagnostics and solutions for critical brake system issues",

  questions: [
    {
      id: "symptom",
      text: "What symptoms have you noticed? (select all that apply)",
      type: "multi",
      options: [
        { id: "soft_pedal", label: "🦶 Brake pedal is soft / sinks to the floor", tags: ["soft_pedal", "air", "fluid"] },
        { id: "squeal", label: "🔊 Squealing or screeching when braking", tags: ["squeal", "pads", "wear"] },
        { id: "vibration", label: "📳 Vibration in pedal or steering wheel when braking", tags: ["vibration", "discs", "warp"] },
        { id: "pulls", label: "🚗 Pulls to one side when braking", tags: ["pulls", "caliper", "uneven"] },
        { id: "burning_smell", label: "👃 Smell of burning / plastic", tags: ["burning", "overheat", "caliper"] },
        { id: "warning_light", label: "💡 Brake warning light on dashboard", tags: ["warning", "abs", "fluid"] },
        { id: "long_stop", label: "📏 Stopping distance has increased", tags: ["long_stop", "pads", "fluid"] }
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
        { id: "parking", label: "🅿️ Parking lot / store", tags: ["parking", "help", "possible"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "jack", label: "🛠️ Jack", tags: ["jack"] },
        { id: "tools", label: "🔧 Socket / wrench set", tags: ["tools"] },
        { id: "brake_fluid", label: "🧴 Brake fluid", tags: ["fluid"] },
        { id: "nothing", label: "❌ Nothing from the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "car_type",
      text: "What type of car do you have?",
      type: "single",
      options: [
        { id: "standard", label: "🚗 Standard passenger car", tags: ["standard"] },
        { id: "suv", label: "🚙 SUV / 4x4", tags: ["suv", "heavy"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid", "electric"] }
      ]
    },
    {
      id: "brake_light",
      text: "Is the brake system warning light on the dashboard (red/yellow)?",
      type: "single",
      options: [
        { id: "yes_red", label: "🔴 Yes, red (urgent)", tags: ["red_light", "emergency"] },
        { id: "yes_yellow", label: "🟡 Yes, yellow (ABS / issue)", tags: ["yellow_light", "abs"] },
        { id: "no", label: "🚫 No, not illuminated", tags: ["no_light"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Brake fluid check and top-up
    // ========================================
    {
      id: "brake_fluid_check",
      title: "🧴 Brake fluid check",
      description: "Low fluid level is a common cause of a soft pedal and increased stopping distance.",
      conditions: { symptom: ["soft_pedal", "long_stop", "warning_light"], brake_light: ["red_light", "yellow_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Restored brakes",
      tags: ["fluid", "check", "top_up"],
      steps: [
        "Open the hood and find the brake fluid reservoir (usually on the driver's side, transparent)",
        "Check the level: should be between MIN and MAX marks",
        "If below MIN — top up with fluid (use only recommended type DOT 4 / DOT 5.1)",
        "Inspect the reservoir and hoses for leaks (wet spots, drips)",
        "Check the fluid color: if dark/cloudy — replacement needed (every 2 years)",
        "Close the cap, get in the car and press the pedal several times — it should become firm",
        "If the pedal is still soft — there may be air in the system (needs bleeding)"
      ],
      warnings: [
        "DO NOT use fluid from an opened bottle (it absorbs moisture)",
        "DO NOT mix DOT 4 and DOT 5 (they are incompatible)",
        "If the level dropped sharply — there is a leak, do not drive without repair",
        "After topping up, test the brakes at a safe speed"
      ]
    },
    // ========================================
    // 2. Brake pad replacement
    // ========================================
    {
      id: "brake_pads_replace",
      title: "🔧 Brake pad replacement",
      description: "Squealing / screeching and increased stopping distance are signs of worn pads.",
      conditions: { symptom: ["squeal", "long_stop"], location: ["home", "parking"], has_tools: ["jack", "tools"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 hours",
      yield_estimate: "New pads, confident braking",
      tags: ["pads", "replace", "brakes"],
      steps: [
        "Jack up the car and secure it with jack stands",
        "Remove the wheel (17/19 mm wrench)",
        "Unscrew the caliper guide pins (usually 2 bolts)",
        "Remove the old pads (remember their position)",
        "Check the brake disc condition — if there are deep grooves, resurface or replace",
        "Install new pads (make sure they match in size)",
        "Lubricate the caliper guide pins with special grease (not brake fluid!)",
        "Reassemble the caliper and bolt it back on",
        "Bleed the brakes (press the pedal several times to the floor)",
        "Put the wheel back on, lower the car, check the fluid level",
        "Bed in the pads: 50-100 km without hard braking"
      ],
      warnings: [
        "DO NOT use dirty or oily hands — oil reduces friction",
        "DO NOT brake hard for the first 50-100 km — pads need to bed in",
        "If pads are worn unevenly — check the caliper (may be sticking)",
        "Always replace pads on both wheels of the same axle"
      ]
    },
    // ========================================
    // 3. Brake bleeding (removing air)
    // ========================================
    {
      id: "bleed_brakes",
      title: "🩸 Brake bleeding (air removal)",
      description: "Air in the system causes a soft pedal. Bleed the brakes to remove air.",
      conditions: { symptom: ["soft_pedal"], location: ["home", "parking"], has_tools: ["tools"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "30-60 min",
      yield_estimate: "Firm pedal",
      tags: ["bleed", "air", "fluid"],
      steps: [
        "Check the brake fluid level (must be at maximum)",
        "One person sits in the driver's seat, the other works at the wheel",
        "Start with the right rear wheel (farthest from the master cylinder)",
        "Attach a hose to the bleeder valve, place the end in a container with fluid",
        "Driver presses the brake pedal 3-4 times and holds it down",
        "Open the bleeder valve half a turn — fluid with bubbles will come out, pedal will drop",
        "Tighten the valve, then the driver releases the pedal",
        "Repeat until clean fluid without bubbles comes out",
        "Repeat for each wheel (order: right rear → left rear → right front → left front)",
        "During the process, constantly top up fluid in the reservoir (don't let it drop below MIN)",
        "After bleeding, check the fluid level and tighten all bleeder valves"
      ],
      warnings: [
        "DO NOT let the fluid level drop below MIN — air will enter again",
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
      description: "If brakes fail on the highway, use the engine and handbrake to stop.",
      conditions: { symptom: ["soft_pedal", "long_stop"], location: ["highway"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "0 min (immediately)",
      yield_estimate: "Vehicle stop",
      tags: ["emergency", "engine_brake", "survival"],
      steps: [
        "DO NOT turn off the ignition — the brake booster will shut off",
        "Shift down to a lower gear (MT — 4→3→2; AT — switch to manual mode and downshift)",
        "Smoothly release the clutch (MT) — the engine will start braking",
        "Simultaneously use the parking brake (handbrake) — gently, in pulses, to avoid wheel lock",
        "If the road allows — steer toward an incline or a field (reduces speed)",
        "Turn on hazard lights, honk (sound attracts attention)",
        "When speed drops to 20-30 km/h — you can use the main brake (if it works)",
        "When fully stopped — turn off the engine, apply the parking brake"
      ],
      warnings: [
        "DO NOT turn off the ignition — steering will lock, brake booster will shut off",
        "DO NOT use the handbrake abruptly — the car will skid",
        "On AT, downshifting is only possible in manual mode",
        "If this doesn't help — use friction against curbs, bushes, snow banks"
      ]
    },
    // ========================================
    // 5. ABS diagnostics
    // ========================================
    {
      id: "abs_diagnostics",
      title: "💡 ABS diagnostics (yellow light)",
      description: "A yellow ABS light indicates a problem with the anti-lock braking system.",
      conditions: { symptom: ["warning_light"], brake_light: ["yellow_light"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-30 min",
      yield_estimate: "Fault identification",
      tags: ["abs", "diagnostics", "electronics"],
      steps: [
        "Check the ABS fuses in the fuse box (diagram on the cover)",
        "Inspect the ABS sensors on the wheels — they may be dirty or damaged",
        "Check the wiring to the sensors (integrity, corrosion)",
        "If you have an OBD2 scanner — read the error codes",
        "If no scanner — visit a service center for diagnostics",
        "If the error appeared after pad replacement — the pad wear sensor may be faulty",
        "If ABS engages too often or not at all — it's dangerous on slippery roads"
      ],
      warnings: [
        "Don't ignore the yellow light — ABS operates with limitations",
        "If ABS fails, the system works as regular brakes (without anti-lock)",
        "ABS sensor replacement is usually inexpensive (from $20)",
        "If the red brake light is on — DO NOT drive, it's dangerous"
      ]
    },
    // ========================================
    // 6. Visual inspection of discs and calipers
    // ========================================
    {
      id: "visual_inspection",
      title: "🔍 Visual brake inspection",
      description: "Check discs, calipers, and hoses for damage.",
      conditions: { symptom: ["vibration", "pulls", "burning_smell"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "Fault identification",
      tags: ["inspection", "discs", "calipers"],
      steps: [
        "Jack up the car and remove the wheel",
        "Inspect the brake disc: any deep grooves, cracks, bluish tint (overheating)",
        "Check the caliper: is it sticking? (try moving it by hand)",
        "Inspect the brake hoses: any cracks, bulges, fluid leaks",
        "Check the caliper piston boots — if torn, dirt can jam the caliper",
        "Assess pad condition — if worn to metal, replace (see solution 2)",
        "Record all defects for further repair (take photos)"
      ],
      warnings: [
        "Don't touch hot discs (burns)",
        "If the disc has deep grooves — resurface or replace",
        "If the caliper is stuck — don't try to drive, it can catch fire",
        "Brake fluid is corrosive — avoid contact with paintwork"
      ]
    },
    // ========================================
    // 7. Tow truck / towing
    // ========================================
    {
      id: "tow_truck_brakes",
      title: "🚛 Call a tow truck (safe option)",
      description: "With serious brake problems, driving is risky. Towing is the best solution.",
      conditions: { symptom: ["soft_pedal", "burning_smell", "warning_light"], brake_light: ["red_light"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and place an emergency triangle",
        "Call your insurance company (OSAGO/CASCO) — towing is often included",
        "If not — call a tow truck via 2GIS or Yandex",
        "Inform the operator: location, car make, problem (brake failure)",
        "Wait for the tow truck, prepare the car (handbrake, neutral)",
        "During loading, ask them to be careful (brakes don't work)",
        "Go to a service center or home (on the tow truck)",
        "If towing (no tow truck) — only with a rigid tow bar, at low speed"
      ],
      warnings: [
        "Do not attempt to drive yourself with a critical brake failure",
        "Towing with a rope with faulty brakes is DANGEROUS — use a rigid tow bar",
        "If the tow truck is expensive — call friends with a tow rope (but be careful!)",
        "When towing, keep distance, don't brake suddenly"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoBrakesDataEn = autoBrakesDataEn;