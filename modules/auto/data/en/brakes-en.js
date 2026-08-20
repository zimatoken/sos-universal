// modules/auto/data/en/brakes-en.js
// === MODULE: AUTO — BRAKES ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "auto",
    category: "brakes",
    version: "1.0.0",
    lang: "en",
    title: "🛑 Brake Problems",
    description: "Diagnostics and solutions for critical brake system issues",
    icon: "🛑",
    color: "#2563eb"
  },

  questions: [
    {
      id: "symptom",
      type: "single",
      text: "What is the main symptom?",
      options: [
        { id: "soft_pedal", label: "🦶 Brake pedal is soft / goes to the floor", tags: ["soft_pedal"] },
        { id: "squeal", label: "🔊 Squealing or screeching when braking", tags: ["squeal"] },
        { id: "vibration", label: "📳 Vibration in pedal or steering wheel when braking", tags: ["vibration"] },
        { id: "pulls", label: "🚗 Pulls to one side when braking", tags: ["pulls"] },
        { id: "burning_smell", label: "👃 Burning / plastic smell", tags: ["burning_smell"] },
        { id: "warning_light", label: "💡 Brake warning light on dashboard", tags: ["warning_light"] },
        { id: "long_stop", label: "📏 Stopping distance increased", tags: ["long_stop"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      conditions: { symptom: ["soft_pedal", "squeal", "vibration", "pulls", "burning_smell", "warning_light", "long_stop"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road"] },
        { id: "highway", label: "🛣️ Highway (high speed)", tags: ["highway"] },
        { id: "parking", label: "🅿️ Parking lot / store", tags: ["parking"] }
      ]
    },
    {
      id: "has_tools",
      type: "single",
      text: "What do you have with you?",
      conditions: { symptom: ["soft_pedal", "squeal", "vibration", "pulls", "burning_smell", "warning_light", "long_stop"] },
      options: [
        { id: "jack", label: "🛠️ Jack", tags: ["jack"] },
        { id: "tools", label: "🔧 Socket set / wrenches", tags: ["tools"] },
        { id: "brake_fluid", label: "🧴 Brake fluid", tags: ["brake_fluid"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "pad_mileage",
      type: "single",
      text: "What is the mileage on the brake pads?",
      conditions: { symptom: ["squeal", "long_stop"] },
      options: [
        { id: "pad_new", label: "📅 Less than 5,000 km (new)", tags: ["pad_new"] },
        { id: "pad_medium", label: "📅 5,000–20,000 km", tags: ["pad_medium"] },
        { id: "pad_old", label: "📅 Over 20,000 km (old)", tags: ["pad_old"] },
        { id: "pad_unknown", label: "❓ Don't know", tags: ["pad_unknown"] }
      ]
    },
    {
      id: "last_service",
      type: "single",
      text: "When were the brakes last serviced?",
      conditions: { symptom: ["soft_pedal", "squeal", "vibration", "pulls", "burning_smell", "warning_light", "long_stop"] },
      options: [
        { id: "service_recent", label: "✅ Less than a year ago", tags: ["service_recent"] },
        { id: "service_old", label: "⚠️ More than a year ago", tags: ["service_old"] },
        { id: "service_never", label: "❌ Never serviced", tags: ["service_never"] },
        { id: "service_unknown", label: "❓ Don't know", tags: ["service_unknown"] }
      ]
    },
    {
      id: "car_type",
      type: "single",
      text: "What type of car?",
      conditions: { symptom: ["soft_pedal", "squeal", "vibration", "pulls", "burning_smell", "warning_light", "long_stop"] },
      options: [
        { id: "standard", label: "🚗 Standard car", tags: ["standard"] },
        { id: "suv", label: "🚙 SUV / off-road", tags: ["suv"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid"] }
      ]
    },
    {
      id: "brake_light",
      type: "single",
      text: "Is the brake warning light on?",
      conditions: { symptom: ["soft_pedal", "squeal", "vibration", "pulls", "burning_smell", "warning_light", "long_stop"] },
      options: [
        { id: "light_red", label: "🔴 Red (urgent)", tags: ["light_red"] },
        { id: "light_yellow", label: "🟡 Yellow (ABS / issue)", tags: ["light_yellow"] },
        { id: "light_off", label: "🚫 Off", tags: ["light_off"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. SOFT PEDAL — CHECK FLUID
    // ============================================================
    {
      id: "brake_fluid_check",
      title: "🧴 Checking brake fluid",
      description: "Low fluid level is a common cause of a soft pedal and increased stopping distance.",
      conditions: { symptom: ["soft_pedal", "long_stop", "warning_light"], brake_light: ["light_red", "light_yellow"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Brakes restored",
      tags: ["fluid", "check", "top_up"],
      steps: [
        "Open the hood, find the brake fluid reservoir (transparent, near the driver).",
        "Check the level: between MIN and MAX.",
        "If below MIN — top up with fluid (DOT 4 / DOT 5.1 only).",
        "Inspect the reservoir and hoses for leaks.",
        "Check fluid color: if dark/cloudy — needs replacement.",
        "Close the cap, press the pedal several times — it should become firm.",
        "If still soft — air in the system (needs bleeding)."
      ],
      warnings: [
        "DON'T use fluid from an open bottle (absorbs moisture).",
        "DON'T mix DOT 4 and DOT 5 (incompatible).",
        "If the level dropped sharply — leak, don't drive without repair."
      ]
    },

    // ============================================================
    // 2. RED BRAKE LIGHT — DON'T DRIVE
    // ============================================================
    {
      id: "red_brake_light",
      title: "🔴 Red brake light — DON'T DRIVE!",
      description: "Red light — critical failure. Driving is dangerous.",
      conditions: { symptom: ["warning_light"], brake_light: ["light_red"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Safety",
      tags: ["light_red", "danger", "emergency"],
      steps: [
        "IMMEDIATELY stop if you're moving.",
        "Check the brake fluid level — it's probably low.",
        "Check for leaks: wet spots under the car, drips on hoses.",
        "If there's a leak — DON'T start the car. Call a tow truck.",
        "If no leak — possibly worn pads (fluid dropped naturally).",
        "Top up fluid and check the pedal — if firm, drive slowly to a service center.",
        "If still soft — call a tow truck."
      ],
      warnings: [
        "Red light = DANGER. DON'T risk your life.",
        "DON'T drive with the red light on — brakes may fail.",
        "If there's a leak — DON'T try to top up and drive."
      ]
    },

    // ============================================================
    // 3. YELLOW LIGHT (ABS)
    // ============================================================
    {
      id: "abs_light",
      title: "🟡 Yellow ABS light — diagnostics",
      description: "Yellow ABS light — issue with the anti-lock braking system.",
      conditions: { symptom: ["warning_light"], brake_light: ["light_yellow"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10–30 minutes",
      yield_estimate: "ABS diagnosed",
      tags: ["abs", "diagnostics", "electronics"],
      steps: [
        "Check ABS fuses (diagram on the fuse box cover).",
        "Inspect wheel speed sensors — dirty or damaged.",
        "Check wiring to sensors (integrity, corrosion).",
        "Read error codes with an OBD2 scanner (if available).",
        "If the error appeared after pad replacement — check the wear sensor.",
        "Go to a service center for professional diagnostics."
      ],
      warnings: [
        "DON'T ignore the yellow light — ABS works with limitations.",
        "If ABS fails, the system works as regular brakes.",
        "On slippery roads, ABS may not work — be careful."
      ]
    },

    // ============================================================
    // 4. SQUEALING PADS — REPLACEMENT
    // ============================================================
    {
      id: "brake_pads_replace",
      title: "🔧 Replacing brake pads",
      description: "Squealing and longer stopping distance are signs of worn pads.",
      conditions: { symptom: ["squeal", "long_stop"], pad_mileage: ["pad_old", "pad_medium"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–2 hours",
      yield_estimate: "New pads, confident braking",
      tags: ["pads", "replace", "brakes"],
      steps: [
        "Jack up the car and secure with stands.",
        "Remove the wheel.",
        "Remove the caliper guide pins (2 bolts).",
        "Remove the old pads (note their position).",
        "Check the disc: if deeply grooved — resurface or replace.",
        "Install new pads (match size).",
        "Lubricate caliper guide pins with special grease.",
        "Reassemble the caliper, tighten.",
        "Bleed the brakes (press pedal firmly several times).",
        "Install the wheel, lower the car, check fluid level.",
        "Bedding-in: 50–100 km without hard braking."
      ],
      warnings: [
        "DON'T use greasy or oily hands — oil reduces friction.",
        "DON'T brake hard for the first 50–100 km.",
        "Replace pads on both wheels of the same axle.",
        "If pads are unevenly worn — check the caliper."
      ]
    },

    // ============================================================
    // 5. PULLS TO ONE SIDE
    // ============================================================
    {
      id: "brake_pull",
      title: "🚗 Pulls to one side when braking",
      description: "Car pulls to one side — caliper issue or uneven wear.",
      conditions: { symptom: ["pulls"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Pull eliminated",
      tags: ["pulls", "caliper", "uneven"],
      steps: [
        "Check tire pressure — different pressure causes pull.",
        "Inspect pads: if unevenly worn — caliper is sticking.",
        "Check the caliper: move it by hand — should move freely.",
        "If sticking — disassemble, lubricate guide pins.",
        "Check the brake hose: not bulging (internal failure).",
        "Check the disc: if overheated (blue tint) — replace.",
        "If the problem persists — go to a service center."
      ],
      warnings: [
        "Pulling to one side is dangerous at speed. Don't ignore.",
        "A sticking caliper can catch fire from overheating.",
        "DON'T try to drive if the pull is severe — call a tow truck."
      ]
    },

    // ============================================================
    // 6. BRAKE VIBRATION
    // ============================================================
    {
      id: "brake_vibration",
      title: "📳 Brake vibration — warped discs",
      description: "Vibration in pedal or steering wheel — sign of warped brake discs.",
      conditions: { symptom: ["vibration"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 hours",
      yield_estimate: "Vibration eliminated",
      tags: ["vibration", "discs", "warp"],
      steps: [
        "Cause: overheating discs — warping.",
        "Inspect discs: if blue tint — overheated.",
        "Option 1: resurface discs on a lathe (if thickness allows).",
        "Option 2: replace discs (recommended if worn).",
        "Check wheel bolt torque — uneven torque causes runout.",
        "After replacement/resurfacing — bed-in 50–100 km.",
        "If problem persists — check hubs and bearings."
      ],
      warnings: [
        "Vibration reduces grip and stopping distance.",
        "Disc thickness below minimum — replacement required.",
        "DON'T delay repair — vibration accelerates wear."
      ]
    },

    // ============================================================
    // 7. BURNING SMELL
    // ============================================================
    {
      id: "burning_smell_brakes",
      title: "👃 Burning smell — overheating or sticking",
      description: "Burning plastic smell — sign of overheated brakes or stuck caliper.",
      conditions: { symptom: ["burning_smell"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Fire prevented",
      tags: ["burning", "overheat", "caliper"],
      steps: [
        "IMMEDIATELY stop if the smell is strong.",
        "Let the brakes cool for 15–20 minutes (don't use water — disc may crack).",
        "Check the caliper: not stuck (one disc hotter than the other).",
        "If stuck — call a tow truck. Don't drive.",
        "If overheated from a downhill — cool, drive in lower gears.",
        "After cooling: check pedal firm, discs not blue."
      ],
      warnings: [
        "Burning smell is a danger signal. DON'T ignore.",
        "A stuck caliper can catch fire.",
        "DON'T pour water on hot discs — they'll crack."
      ]
    },

    // ============================================================
    // 8. BLEEDING BRAKES
    // ============================================================
    {
      id: "bleed_brakes",
      title: "🩸 Bleeding the brake system",
      description: "Air in the system causes a soft pedal and loss of braking.",
      conditions: { symptom: ["soft_pedal"], has_tools: ["tools"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Firm pedal restored",
      tags: ["bleed", "air", "fluid"],
      steps: [
        "Check fluid level (should be at MAX).",
        "One person in the car, another at the wheel.",
        "Start with the rear right wheel (farthest from master cylinder).",
        "Attach hose to the bleeder, end in a container with fluid.",
        "Driver presses the pedal 3–4 times and holds.",
        "Open the bleeder half a turn — fluid with bubbles comes out.",
        "Close the bleeder, driver releases the pedal.",
        "Repeat until clean fluid flows.",
        "Repeat for each wheel (RR → LR → RF → LF).",
        "Top up fluid during the process."
      ],
      warnings: [
        "DON'T let fluid drop below MIN.",
        "DON'T bleed if there are leaks — fix them first."
      ]
    },

    // ============================================================
    // 9. ENGINE BRAKING (EMERGENCY)
    // ============================================================
    {
      id: "engine_brake",
      title: "⚙️ Engine braking (emergency)",
      description: "If brakes fail on the highway, use the engine and handbrake to stop.",
      conditions: { symptom: ["soft_pedal", "long_stop"], location: ["highway"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Car stopped",
      tags: ["emergency", "engine_brake", "survival"],
      steps: [
        "DON'T turn off the ignition — brake booster will shut off.",
        "Downshift (manual: 4→3→2; auto: manual mode).",
        "Slowly release the clutch — engine braking.",
        "Simultaneously use the handbrake — gently, in pulses.",
        "Steer toward an incline or field.",
        "Turn on hazard lights, honk.",
        "When speed drops to 20–30 km/h — use the main brake."
      ],
      warnings: [
        "DON'T turn off the ignition — steering wheel will lock.",
        "DON'T use the handbrake abruptly — spin-out.",
        "On automatics, downshift only in manual mode."
      ]
    },

    // ============================================================
    // 10. TOW TRUCK
    // ============================================================
    {
      id: "tow_truck_brakes",
      title: "🚛 Calling a tow truck (safe option)",
      description: "With serious brake issues, driving is dangerous. Towing is the best solution.",
      conditions: { symptom: ["soft_pedal", "burning_smell", "warning_light"], brake_light: ["light_red"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "30–120 minutes",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and place a warning triangle.",
        "Call your insurance — towing is often included.",
        "If not — call a towing service.",
        "Tell the operator: location, car model, problem (brake failure).",
        "Wait for the tow truck, prepare the car.",
        "During loading — ask for caution (brakes don't work).",
        "Go to a service center."
      ],
      warnings: [
        "DON'T try to drive yourself with a critical brake failure.",
        "Towing with a rope with faulty brakes is DANGEROUS.",
        "Use only rigid tow bar for towing."
      ]
    }
  ]
});