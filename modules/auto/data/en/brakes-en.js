// === MODULE: AUTO — BRAKES (ENGLISH) ===
const autoBrakesDataEn = {
  category: "brakes",
  title: "🛑 Brake Problems",
  description: "Diagnosis and solutions for critical brake system issues",

  questions: [
    {
      id: "symptom",
      text: "What symptoms did you notice?",
      type: "multi",
      options: [
        { id: "soft_pedal", label: "🦶 Brake pedal is soft / goes to the floor", tags: ["soft_pedal", "air", "fluid"] },
        { id: "squeal", label: "🔊 Squeaking or screeching when braking", tags: ["squeal", "pads", "wear"] },
        { id: "vibration", label: "📳 Vibration in pedal or steering wheel when braking", tags: ["vibration", "discs", "warp"] },
        { id: "pulls", label: "🚗 Pulls to one side when braking", tags: ["pulls", "caliper", "uneven"] },
        { id: "burning_smell", label: "👃 Burning smell / plastic smell", tags: ["burning", "overheat", "caliper"] },
        { id: "warning_light", label: "💡 Brake warning light on dashboard", tags: ["warning", "abs", "fluid"] },
        { id: "long_stop", label: "📏 Longer stopping distance", tags: ["long_stop", "pads", "fluid"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      conditions: { symptom: ["soft_pedal", "squeal", "vibration", "pulls", "burning_smell", "warning_light", "long_stop"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic", "low_speed"] },
        { id: "highway", label: "🛣️ Highway (high speed)", tags: ["highway", "speed", "danger"] },
        { id: "parking", label: "🅿️ Parking lot / near store", tags: ["parking", "help", "possible"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      conditions: { symptom: ["soft_pedal", "squeal", "vibration", "pulls", "burning_smell", "warning_light", "long_stop"] },
      options: [
        { id: "jack", label: "🛠️ Jack", tags: ["jack"] },
        { id: "tools", label: "🔧 Wrench set / sockets", tags: ["tools"] },
        { id: "brake_fluid", label: "🧴 Brake fluid", tags: ["fluid"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "car_type",
      text: "What type of car do you have?",
      type: "single",
      conditions: { symptom: ["soft_pedal", "squeal", "vibration", "pulls", "burning_smell", "warning_light", "long_stop"] },
      options: [
        { id: "standard", label: "🚗 Standard passenger car", tags: ["standard"] },
        { id: "suv", label: "🚙 SUV / off-road", tags: ["suv", "heavy"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid", "electric"] }
      ]
    },
    {
      id: "brake_light",
      text: "Is the brake system warning light on (red/yellow)?",
      type: "single",
      conditions: { symptom: ["soft_pedal", "squeal", "vibration", "pulls", "burning_smell", "warning_light", "long_stop"] },
      options: [
        { id: "yes_red", label: "🔴 Yes, red (urgent)", tags: ["red_light", "emergency"] },
        { id: "yes_yellow", label: "🟡 Yes, yellow (ABS / issue)", tags: ["yellow_light", "abs"] },
        { id: "no", label: "🚫 No, not on", tags: ["no_light"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Check and top up brake fluid
    // ========================================
    {
      id: "brake_fluid_check",
      title: "🧴 Check brake fluid",
      description: "Low fluid level is a common cause of soft pedal and increased stopping distance.",
      conditions: { symptom: ["soft_pedal", "long_stop", "warning_light"], brake_light: ["red_light", "yellow_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Brakes restored",
      tags: ["fluid", "check", "top_up"],
      steps: [
        "Open the hood and find the brake fluid reservoir (usually near the driver, transparent)",
        "Check level: should be between MIN and MAX marks",
        "If below MIN — top up with recommended fluid (DOT 4 / DOT 5.1 only)",
        "Inspect reservoir and hoses for leaks (wet spots, drips)",
        "Check fluid color: if dark/cloudy — needs replacement (every 2 years)",
        "Close cap, get in car and press pedal several times — it should become firm",
        "If pedal remains soft — air in system (needs bleeding)"
      ],
      warnings: [
        "DO NOT use fluid from an open bottle (absorbs moisture)",
        "DO NOT mix DOT 4 and DOT 5 (incompatible)",
        "If level dropped suddenly — there's a leak, don't drive without repair",
        "After topping up, test brakes at safe speed"
      ]
    },
    // ========================================
    // 2. Replace brake pads
    // ========================================
    {
      id: "brake_pads_replace",
      title: "🔧 Replace brake pads",
      description: "Squealing/screeching and longer stopping distance are signs of worn pads.",
      conditions: { symptom: ["squeal", "long_stop"], location: ["home", "parking"], has_tools: ["jack", "tools"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 hours",
      yield_estimate: "New pads, confident braking",
      tags: ["pads", "replace", "brakes"],
      steps: [
        "Jack up the car and secure with jack stands",
        "Remove the wheel (17/19 mm wrench)",
        "Unscrew caliper guide pins (usually 2 bolts)",
        "Remove old pads (note their position)",
        "Check brake disc condition — if deep grooves, need resurfacing or replacement",
        "Install new pads (verify they match in size)",
        "Lubricate caliper guide pins with special grease (NOT brake fluid!)",
        "Reassemble caliper, bolt it on",
        "Pump brakes (press pedal several times until firm)",
        "Reinstall wheel, lower car, check fluid level",
        "Bed in pads: 50-100 km without hard braking"
      ],
      warnings: [
        "DO NOT use dirty or oily hands — oil reduces friction",
        "DO NOT brake hard for first 50-100 km — pads need to bed in",
        "If pads are worn unevenly — check caliper (may be sticking)",
        "Replace pads on both wheels of the same axle"
      ]
    },
    // ========================================
    // 3. Bleed brakes
    // ========================================
    {
      id: "bleed_brakes",
      title: "🩸 Bleed brake system",
      description: "Air in the system causes soft pedal and brake fade. Remove air by bleeding.",
      conditions: { symptom: ["soft_pedal"], location: ["home", "parking"], has_tools: ["tools"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "30-60 min",
      yield_estimate: "Firm pedal",
      tags: ["bleed", "air", "fluid"],
      steps: [
        "Check brake fluid level (should be at MAX)",
        "One person sits in driver seat, another works at the wheel",
        "Start with rear right wheel (farthest from master cylinder)",
        "Attach hose to bleeder valve, place end in container with fluid",
        "Driver presses brake pedal 3-4 times and holds down",
        "Open bleeder valve half turn — fluid with bubbles comes out, pedal drops",
        "Tighten valve, then driver releases pedal",
        "Repeat until clean fluid without bubbles comes out",
        "Repeat for each wheel (order: rear right → rear left → front right → front left)",
        "Keep topping up fluid in reservoir (don't let drop below MIN)",
        "After bleeding, check fluid level and tighten all valves"
      ],
      warnings: [
        "DO NOT let fluid drop below MIN — new air will enter",
        "DO NOT bleed if there are leaks — fix them first",
        "If air entered after repairs — bleeding is mandatory",
        "DOT 4/5.1 fluid is hygroscopic — don't use old fluid"
      ]
    },
    // ========================================
    // 4. Engine braking (emergency)
    // ========================================
    {
      id: "engine_brake",
      title: "⚙️ Engine braking (emergency)",
      description: "If brakes fail on highway, use engine and handbrake to stop.",
      conditions: { symptom: ["soft_pedal", "long_stop"], location: ["highway"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "0 min (immediately)",
      yield_estimate: "Car stopped",
      tags: ["emergency", "engine_brake", "survival"],
      steps: [
        "DO NOT turn off ignition — brake booster will disengage",
        "Shift to lower gear (MT: 4→3→2; AT: switch to manual mode and downshift)",
        "Slowly release clutch (MT) — engine will start braking",
        "Simultaneously use parking brake (handbrake) — gently, in pulses to avoid locking wheels",
        "If road allows — steer uphill or into a field (reduces speed)",
        "Turn on hazard lights, honk (to attract attention)",
        "When speed drops to 20-30 km/h — you can use main brake (if working)",
        "When fully stopped — turn off engine, engage parking brake"
      ],
      warnings: [
        "DO NOT turn off ignition — steering locks, brake booster disengages",
        "DO NOT use handbrake abruptly — car will skid",
        "On AT, downshifting only possible in manual mode",
        "If this doesn't help — use friction against curb, bushes, snow bank"
      ]
    },
    // ========================================
    // 5. ABS diagnostics
    // ========================================
    {
      id: "abs_diagnostics",
      title: "💡 ABS system diagnostics (yellow light)",
      description: "Yellow ABS light indicates a problem with the anti-lock braking system.",
      conditions: { symptom: ["warning_light"], brake_light: ["yellow_light"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-30 min",
      yield_estimate: "Fault identified",
      tags: ["abs", "diagnostics", "electronics"],
      steps: [
        "Check ABS fuses in fuse box (diagram on cover)",
        "Inspect ABS sensors on wheels — may be dirty or damaged",
        "Check wiring to sensors (integrity, corrosion)",
        "If OBD2 scanner available — read fault codes",
        "If no scanner — take to service for diagnostics",
        "If fault appeared after pad replacement — pad wear sensor may be faulty",
        "If ABS triggers too often or not at all — dangerous on slippery roads"
      ],
      warnings: [
        "Don't ignore yellow light — ABS works with limitations",
        "If ABS fails, system works as regular brakes (without anti-lock)",
        "ABS sensor replacement is usually inexpensive (from $25)",
        "If red brake light is on — DO NOT drive, it's dangerous"
      ]
    },
    // ========================================
    // 6. Visual inspection
    // ========================================
    {
      id: "visual_inspection",
      title: "🔍 Visual brake inspection",
      description: "Check discs, calipers, and hoses for damage.",
      conditions: { symptom: ["vibration", "pulls", "burning_smell"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "Fault identified",
      tags: ["inspection", "discs", "calipers"],
      steps: [
        "Jack up car and remove wheel",
        "Inspect brake disc: deep scratches, cracks, bluish tint (overheating)",
        "Check caliper: not sticking (try moving it by hand)",
        "Inspect brake hoses: no cracks, bulges, fluid leaks",
        "Check caliper piston dust boots — if torn, dirt can jam caliper",
        "Assess pad condition — if worn to metal, replace (see solution 2)",
        "Note all defects for repair (take photos)"
      ],
      warnings: [
        "Don't touch hot discs (burn risk)",
        "If disc has deep grooves — needs resurfacing or replacement",
        "If caliper is stuck — don't try to drive, it may catch fire",
        "Brake fluid is corrosive — avoid contact with paint"
      ]
    },
    // ========================================
    // 7. Tow truck
    // ========================================
    {
      id: "tow_truck_brakes",
      title: "🚛 Call a tow truck (safe option)",
      description: "With serious brake failure, driving is risky. Towing is the best solution.",
      conditions: { symptom: ["soft_pedal", "burning_smell", "warning_light"], brake_light: ["red_light"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and set warning triangle",
        "Call insurance (OSAGO/CASCO) — often includes towing",
        "If not — call paid towing service via maps",
        "Tell operator: location, car make, problem (brake failure)",
        "Wait for tow truck, prepare car (handbrake, neutral)",
        "During loading — ask for caution (brakes not working)",
        "Go to service or home (on tow truck)",
        "If towing (no tow truck) — only on rigid tow bar, at low speed"
      ],
      warnings: [
        "Don't try to drive with critical brake failure",
        "Towing with rope with failed brakes is DANGEROUS — use rigid tow bar",
        "If tow truck is expensive — call friends with tow rope (but be careful!)",
        "When towing, keep distance, don't brake suddenly"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoBrakesDataEn = autoBrakesDataEn;
