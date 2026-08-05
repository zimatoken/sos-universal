// === MODULE: AUTO — FLAT TIRE (ENGLISH) ===
const autoFlatTireDataEn = {
  category: "flat_tire",
  title: "🛞 Flat Tire",
  description: "Diagnostics and solutions for tire problems",

  questions: [
    {
      id: "symptom",
      text: "What happened to the tire? (select all that apply)",
      type: "multi",
      options: [
        { id: "flat", label: "📉 Tire is completely flat", tags: ["flat", "urgent"] },
        { id: "slow_leak", label: "🐢 Slow leak (needs frequent inflation)", tags: ["slow_leak", "monitor"] },
        { id: "blowout", label: "💥 Tire blowout while driving", tags: ["blowout", "danger"] },
        { id: "sidewall_damage", label: "🔪 Sidewall cut / damage", tags: ["sidewall", "replace"] },
        { id: "bulge", label: "🫧 Bulge / bubble on the tire", tags: ["bulge", "replace"] },
        { id: "vibration", label: "📳 Vibration while driving", tags: ["vibration", "balance"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic", "low_speed"] },
        { id: "highway", label: "🛣️ On the highway (high speed)", tags: ["highway", "speed", "danger"] },
        { id: "parking", label: "🅿️ Parking lot / mall", tags: ["public", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "jack", label: "🛠️ Jack", tags: ["jack"] },
        { id: "spare", label: "🛞 Spare tire (full size)", tags: ["spare_full"] },
        { id: "spare_temporary", label: "🛞 Spare tire (donut / temporary)", tags: ["spare_temp"] },
        { id: "repair_kit", label: "🧰 Tire repair kit (plugs, glue)", tags: ["repair_kit"] },
        { id: "compressor", label: "💨 Compressor / pump", tags: ["compressor"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "tire_type",
      text: "Which tire is damaged?",
      type: "single",
      options: [
        { id: "front_left", label: "Front left", tags: ["front", "steering"] },
        { id: "front_right", label: "Front right", tags: ["front", "steering"] },
        { id: "rear_left", label: "Rear left", tags: ["rear"] },
        { id: "rear_right", label: "Rear right", tags: ["rear"] }
      ]
    },
    {
      id: "time_of_day",
      text: "What time of day is it?",
      type: "single",
      options: [
        { id: "day", label: "☀️ Day (light)", tags: ["day"] },
        { id: "night", label: "🌙 Night (dark)", tags: ["night", "low_vis"] },
        { id: "evening", label: "🌅 Evening / dusk", tags: ["evening"] }
      ]
    },
    {
      id: "has_passengers",
      text: "Are there passengers in the car who need help?",
      type: "single",
      options: [
        { id: "alone", label: "I'm alone", tags: ["alone"] },
        { id: "with_kids", label: "With children", tags: ["kids"] },
        { id: "with_elderly", label: "With elderly / disabled", tags: ["elderly"] },
        { id: "with_others", label: "With other passengers", tags: ["others"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Tire change
    // ========================================
    {
      id: "tire_change",
      title: "🛞 Tire change (spare tire)",
      description: "The most reliable solution — install the spare tire. Especially if the damage is serious.",
      conditions: { symptom: ["flat", "blowout", "sidewall_damage", "bulge"], has_tools: ["jack", "spare_full", "spare_temp"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Working spare tire installed",
      tags: ["tire", "wheel", "basic", "change"],
      steps: [
        "Stop on a flat, solid surface, turn on hazard lights",
        "Engage first gear (MT) or Park (AT), apply the handbrake",
        "Place wheel chocks behind the wheels",
        "Loosen the lug nuts on the damaged wheel (1/2 turn) — DO NOT remove them completely",
        "Place the jack under the designated jacking point, lift the car",
        "Fully remove the lug nuts and take off the wheel",
        "Install the spare tire: align the holes, hand-tighten the lug nuts",
        "Lower the car, tighten the lug nuts in a star pattern with the correct torque",
        "Check the pressure in the spare tire (should be 2.0-2.5 bar)",
        "Store the damaged tire, jack, and tools in the trunk",
        "Drive at a maximum speed of 80 km/h to the nearest tire shop"
      ],
      warnings: [
        "NEVER go under a car supported only by a jack — use jack stands",
        "Tighten lug nuts with the correct torque — over-tightening is dangerous",
        "Temporary spare (donut) — max speed 80 km/h, max distance 150 km",
        "Before driving, double-check that all lug nuts are tight"
      ]
    },
    // ========================================
    // 2. Tire repair with a plug (without removing the tire)
    // ========================================
    {
      id: "tire_repair_kit",
      title: "🧰 Tire plug repair (without removing the tire)",
      description: "If the damage is minor (nail, screw) — you can repair it with a plug on the spot.",
      conditions: { symptom: ["flat", "slow_leak"], has_tools: ["repair_kit", "compressor"], tire_type: ["front_left", "front_right", "rear_left", "rear_right"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10-20 min",
      yield_estimate: "Tire sealed temporarily",
      tags: ["repair", "plug", "emergency"],
      steps: [
        "Find the puncture (inflate the tire and listen for hissing)",
        "Remove the foreign object (nail, screw) with pliers",
        "Widen the hole with the special reamer tool (included in the kit)",
        "Insert the plug into the needle (like threading a needle)",
        "Apply the special glue to the plug (from the repair kit)",
        "Insert the needle with the plug into the hole and push it in",
        "Pull out the needle, leaving the plug inside",
        "Trim the excess plug (leave 1-2 mm above the surface)",
        "Inflate the tire to normal pressure",
        "Check for leaks: apply soapy water to the repair area"
      ],
      warnings: [
        "Plug repair is a temporary solution — drive no more than 100 km to a tire shop",
        "DO NOT use this method for sidewall cuts or bulges",
        "If the hole is larger than 6 mm — the repair won't hold",
        "After repair, recheck tire pressure within 24 hours"
      ]
    },
    // ========================================
    // 3. Inflating the tire (if slow leak)
    // ========================================
    {
      id: "inflate_tire",
      title: "💨 Tire inflation (if slow leak)",
      description: "If the tire is slowly deflating — inflate it and drive to a tire shop.",
      conditions: { symptom: ["slow_leak"], has_tools: ["compressor"], location: ["home", "parking", "road"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "2-5 min",
      yield_estimate: "Ability to drive to a service center",
      tags: ["inflate", "pressure", "emergency"],
      steps: [
        "Turn on the compressor (from the cigarette lighter or battery-powered)",
        "Connect the hose to the tire valve",
        "Inflate to the pressure specified in the manual (usually 2.0-2.5 bar)",
        "If no compressor — use a manual or bicycle pump",
        "If you have soapy water — check for leaks",
        "If the tire deflates quickly — inflate to maximum pressure and drive immediately to a tire shop",
        "Keep the engine running while using the compressor to avoid draining the battery"
      ],
      warnings: [
        "Do not overinflate beyond the maximum pressure (stated on the tire sidewall)",
        "If the tire is severely damaged — inflation won't help",
        "If the compressor overheats — let it cool down",
        "After inflation, recheck the pressure after 10-15 minutes"
      ]
    },
    // ========================================
    // 4. Emergency roadside help (no spare)
    // ========================================
    {
      id: "emergency_tire_help",
      title: "🆘 Emergency roadside help (no spare tire)",
      description: "If you don't have a spare tire or repair kit — call for help or use temporary measures.",
      conditions: { has_tools: ["nothing"], location: ["road", "highway"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "5-30 min (until help arrives)",
      yield_estimate: "Temporary solution + help called",
      tags: ["emergency", "help", "call"],
      steps: [
        "Turn on hazard lights and place the emergency triangle",
        "Call your insurance company (is roadside assistance included in your policy?)",
        "If not available — call a tow truck (see solution 6)",
        "Call friends who can bring a spare tire or repair kit",
        "If there's a tire shop nearby — call a mobile tire service",
        "If the tire is not fully flat — inflate it (even with a small compressor)",
        "If on the highway — move behind the barrier"
      ],
      warnings: [
        "Do not drive on a flat tire — it will damage the wheel and suspension",
        "If you have an electric vehicle — conserve battery power",
        "Do not stand on the roadway — it's dangerous",
        "If you have passengers — evacuate them to a safe place"
      ]
    },
    // ========================================
    // 5. Tire maintenance and inspection
    // ========================================
    {
      id: "tire_maintenance",
      title: "🔍 Tire maintenance and inspection",
      description: "Regular pressure checks and tire inspections prevent flats.",
      conditions: { symptom: ["slow_leak", "vibration"], location: ["home", "parking"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "10-20 min",
      yield_estimate: "Prevention of future problems",
      tags: ["maintenance", "pressure", "check"],
      steps: [
        "Check the pressure in all tires (cold tires, before driving)",
        "Inspect tires for cuts, bulges, uneven wear",
        "Check tread depth (should be at least 1.6 mm)",
        "Clean tires of stones and debris",
        "Check the condition of the valves (nipples) — are they leaking?",
        "If there is uneven wear — check the wheel alignment",
        "Rotate tires periodically (every 10,000 km)",
        "In winter, check pressure more often (cold weather lowers pressure)"
      ],
      warnings: [
        "Underinflated tires increase fuel consumption and accelerate wear",
        "Overinflated tires reduce traction and increase the risk of blowout",
        "Tread depth less than 1.6 mm is dangerous (especially on wet roads)",
        "If there's a bulge — the tire must be replaced, it can blow out at speed"
      ]
    },
    // ========================================
    // 6. Calling a tow truck
    // ========================================
    {
      id: "tow_truck_tire",
      title: "🚛 Calling a tow truck (no spare tire)",
      description: "If you can't change the tire — call a tow truck.",
      conditions: { has_tools: ["nothing"], location: ["road", "highway", "parking"], symptom: ["flat", "blowout", "sidewall_damage"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at tire shop",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights and place the emergency triangle",
        "Call your insurance company (is towing included in your OSAGO/CASCO?)",
        "If not — call a towing service via 2GIS or Yandex (compare prices)",
        "Tell the operator: make, damage, address, problem (flat tire)",
        "If on the highway — move behind the barrier until help arrives",
        "During loading, watch to ensure the bumper is not damaged",
        "Go to a tire shop or home"
      ],
      warnings: [
        "Do not drive on a flat tire — it will damage the wheel and suspension",
        "If you're on the highway — do not wait in the car, move behind the barrier",
        "If you have a temporary spare (donut) — do not exceed 80 km/h",
        "Keep the towing receipt — you may need it for insurance"
      ]
    },
    // ========================================
    // 7. Using tire sealant (temporary)
    // ========================================
    {
      id: "tire_sealant",
      title: "🧴 Using tire sealant (temporary)",
      description: "If the puncture is small — pour sealant through the valve. It's fast but temporary.",
      conditions: { symptom: ["flat", "slow_leak"], has_tools: ["compressor"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "5-10 min",
      yield_estimate: "Temporary seal of the puncture",
      tags: ["sealant", "temporary", "emergency"],
      steps: [
        "Buy a tire sealant spray can (available at auto parts stores)",
        "Remove the foreign object from the tire (if visible)",
        "Shake the can, connect the hose to the valve",
        "Inject the sealant into the tire (follow the instructions on the can)",
        "Inflate the tire to normal pressure",
        "Drive 500-1000 meters to distribute the sealant",
        "Check the pressure, top up air if needed",
        "Drive to the nearest tire shop (max 100 km)"
      ],
      warnings: [
        "Sealant only works for tread punctures (not sidewall damage)",
        "After using sealant, the tire will need to be cleaned or replaced (it interferes with vulcanization)",
        "Do not store the can in high temperatures (risk of explosion)",
        "Sealant doesn't work for cuts or holes larger than 6 mm"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoFlatTireDataEn = autoFlatTireDataEn;
