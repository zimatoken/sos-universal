// === MODULE: AUTO — FLAT TIRE (ENGLISH) ===
const autoFlatTireDataEn = {
  category: "flat_tire",
  title: "🛞 Flat tire",
  description: "Diagnostics and solutions for wheel problems",

  questions: [
    {
      id: "symptom",
      text: "What happened to the tire? (select all that apply)",
      type: "multi",
      options: [
        { id: "flat", label: "📉 Tire completely flat", tags: ["flat", "urgent"] },
        { id: "slow_leak", label: "🐢 Slow leak (needs air regularly)", tags: ["slow_leak", "monitor"] },
        { id: "blowout", label: "💥 Tire blowout while driving", tags: ["blowout", "danger"] },
        { id: "sidewall_damage", label: "🔪 Cut / sidewall damage", tags: ["sidewall", "replace"] },
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
        { id: "spare_temporary", label: "🛞 Temporary spare (donut)", tags: ["spare_temp"] },
        { id: "repair_kit", label: "🧰 Repair kit (plug, glue)", tags: ["repair_kit"] },
        { id: "compressor", label: "💨 Compressor / pump", tags: ["compressor"] },
        { id: "nothing", label: "❌ Nothing from the above", tags: ["no_tools"] }
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
        { id: "evening", label: "🌅 Evening / twilight", tags: ["evening"] }
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
      title: "🛞 Changing to the spare tire",
      description: "The most reliable method — install the spare tire, especially for serious damage.",
      conditions: { symptom: ["flat", "blowout", "sidewall_damage", "bulge"], has_tools: ["jack", "spare_full", "spare_temp"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Working tire (spare)",
      tags: ["tire", "wheel", "basic", "change"],
      steps: [
        "Stop on a level hard surface, turn on hazard lights",
        "Engage first gear (MT) or park (AT), engage handbrake",
        "Place wheel chocks under the wheels",
        "Loosen the lug nuts on the damaged wheel (1/2 turn) — DO NOT remove them completely",
        "Place the jack under the jacking point, lift the car",
        "Fully remove the lug nuts and take off the wheel",
        "Install the spare tire: align the holes, hand-tighten the lug nuts",
        "Lower the car, tighten the lug nuts in a cross pattern with proper torque",
        "Check the pressure in the spare tire (should be 2-2.5 bar)",
        "Put the damaged tire, jack, and tools in the trunk",
        "Drive at speeds up to 80 km/h to the nearest tire shop"
      ],
      warnings: [
        "DO NOT crawl under the car on a jack — use jack stands",
        "Tighten the lug nuts with proper torque — over-tightening is dangerous (can strip the threads)",
        "Temporary spare (donut) — max speed 80 km/h, max 150 km range",
        "Before driving, check that all lug nuts are tight"
      ]
    },
    // ========================================
    // 2. Tire repair without removal (plug)
    // ========================================
    {
      id: "tire_repair_kit",
      title: "🧰 Tire repair with a plug (without removal)",
      description: "If the damage is small (nail, screw) — repair with a plug on the spot.",
      conditions: { symptom: ["flat", "slow_leak"], has_tools: ["repair_kit", "compressor"], tire_type: ["front_left", "front_right", "rear_left", "rear_right"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10-20 min",
      yield_estimate: "Restored seal",
      tags: ["repair", "plug", "emergency"],
      steps: [
        "Find the puncture point (inflate the tire and listen for hissing)",
        "Remove the foreign object (nail, screw) with pliers",
        "Ream the hole with the special reamer (included in the kit)",
        "Insert the plug into the needle (like threading a needle)",
        "Apply special glue to the plug (from the kit)",
        "Insert the needle with the plug into the hole and push it in",
        "Remove the needle, leaving the plug in the hole",
        "Trim the excess plug (leave 1-2 mm above the surface)",
        "Inflate the tire to normal pressure",
        "Check for leaks: apply soapy water to the repair area"
      ],
      warnings: [
        "A plug is a temporary solution — no more than 100 km before visiting a tire shop",
        "DO NOT repair sidewall cuts or bulges this way",
        "If the hole is larger than 6 mm — the repair won't work",
        "After repair, check the pressure within 24 hours"
      ]
    },
    // ========================================
    // 3. Inflating the tire (slow leak)
    // ========================================
    {
      id: "inflate_tire",
      title: "💨 Inflating the tire (if it's slowly leaking)",
      description: "If the tire is slowly leaking — inflate it and drive to a tire shop.",
      conditions: { symptom: ["slow_leak"], has_tools: ["compressor"], location: ["home", "parking", "road"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "2-5 min",
      yield_estimate: "Ability to reach the shop",
      tags: ["inflate", "pressure", "emergency"],
      steps: [
        "Turn on the compressor (from the cigarette lighter or battery-powered)",
        "Connect the hose to the tire valve",
        "Inflate to the pressure specified in the manual (usually 2.0-2.5 bar)",
        "If you don't have a compressor — use a manual or bicycle pump",
        "If you have soapy water — check for leaks",
        "If the tire is leaking quickly — inflate to maximum pressure and drive to a tire shop immediately",
        "Don't turn off the engine during inflation to avoid draining the battery (if using a cigarette lighter compressor)"
      ],
      warnings: [
        "Do not inflate above the maximum pressure (marked on the tire sidewall)",
        "If the tire is badly damaged — inflation won't help",
        "If the compressor is heating up — let it cool down",
        "After inflation, check the pressure again after 10-15 minutes"
      ]
    },
    // ========================================
    // 4. Emergency help on the road (no spare)
    // ========================================
    {
      id: "emergency_tire_help",
      title: "🆘 Emergency help on the road (no spare)",
      description: "If you have no spare tire or repair kit — call for help or use temporary measures.",
      conditions: { has_tools: ["nothing"], location: ["road", "highway"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "5-30 min (until help arrives)",
      yield_estimate: "Temporary solution + call for help",
      tags: ["emergency", "help", "call"],
      steps: [
        "Turn on hazard lights and place an emergency triangle",
        "Call your insurance company (is roadside assistance included in the policy?)",
        "If assistance is not available — call a tow truck (see solution 6)",
        "Call friends who can bring a spare tire or repair kit",
        "If there's a tire shop nearby — call mobile tire service",
        "If the tire is not completely flat — inflate it with a compressor (even a small one)",
        "If you're on the highway — move behind the barrier"
      ],
      warnings: [
        "Do not drive on a flat tire — you'll damage the rim and suspension",
        "If the car has electric power — conserve battery charge",
        "Do not stand on the roadway — it's dangerous",
        "If there are passengers — evacuate them to a safe place"
      ]
    },
    // ========================================
    // 5. Tire maintenance and inspection
    // ========================================
    {
      id: "tire_maintenance",
      title: "🔍 Tire inspection and maintenance",
      description: "Regular pressure checks and tire condition monitoring prevent punctures.",
      conditions: { symptom: ["slow_leak", "vibration"], location: ["home", "parking"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "10-20 min",
      yield_estimate: "Problem prevention",
      tags: ["maintenance", "pressure", "check"],
      steps: [
        "Check the pressure in all tires (cold tires, before driving)",
        "Inspect tires for cuts, bulges, uneven wear",
        "Check the tread depth (should be at least 1.6 mm)",
        "Clean tires of stones and debris",
        "Check the valve condition — are they leaking?",
        "If there is uneven wear — check wheel alignment",
        "Rotate tires periodically (every 10,000 km)",
        "In winter, check pressure more often (cold weather reduces pressure)"
      ],
      warnings: [
        "Underinflated tires increase fuel consumption and accelerate wear",
        "Overinflated tires reduce grip and increase the risk of blowout",
        "Tread depth below 1.6 mm is dangerous (especially on wet roads)",
        "If there's a bulge — the tire needs to be replaced, it can burst at speed"
      ]
    },
    // ========================================
    // 6. Tow truck call
    // ========================================
    {
      id: "tow_truck_tire",
      title: "🚛 Call a tow truck (when there's no spare)",
      description: "If you can't replace the tire — call a tow truck.",
      conditions: { has_tools: ["nothing"], location: ["road", "highway", "parking"], symptom: ["flat", "blowout", "sidewall_damage"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at tire shop",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights and place an emergency triangle",
        "Call your insurance company (is towing included in your policy?)",
        "If not — call a tow truck via 2GIS or Yandex (compare prices)",
        "Inform the operator: car make, damage, address, problem (flat tire)",
        "If on the highway — move behind the barrier until arrival",
        "During loading, watch to avoid bumper damage",
        "Go to a tire shop or home"
      ],
      warnings: [
        "Do not drive on a flat tire — it will damage the rim and suspension",
        "If you're on the highway — do not wait in the car, move behind the barrier",
        "If you have a temporary spare — do not exceed 80 km/h",
        "Keep the towing receipt — it may be useful for insurance"
      ]
    },
    // ========================================
    // 7. Using tire sealant (temporary solution)
    // ========================================
    {
      id: "tire_sealant",
      title: "🧴 Using tire sealant (temporary)",
      description: "For small punctures — you can inject sealant through the valve. Fast but temporary.",
      conditions: { symptom: ["flat", "slow_leak"], has_tools: ["compressor"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "5-10 min",
      yield_estimate: "Temporary puncture repair",
      tags: ["sealant", "temporary", "emergency"],
      steps: [
        "Purchase a can of tire sealant (available at auto parts stores)",
        "Remove the foreign object from the tire (if visible)",
        "Shake the can, connect the hose to the valve",
        "Inject the sealant into the tire (according to the instructions)",
        "Inflate the tire to normal pressure",
        "Drive 500-1000 meters to distribute the sealant",
        "Check the pressure, top up with air if necessary",
        "Drive to the nearest tire shop (max 100 km)"
      ],
      warnings: [
        "Sealant only works for punctures in the tread area (not the sidewall)",
        "After using sealant, the tire will need to be cleaned or replaced (it interferes with vulcanization)",
        "Do not store the can at high temperatures (may explode)",
        "Sealant doesn't work for cuts or large holes (> 6 mm)"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoFlatTireDataEn = autoFlatTireDataEn;
