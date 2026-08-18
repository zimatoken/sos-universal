// === MODULE: AUTO — FLAT TIRE (ENGLISH) ===
const autoFlatTireDataEn = {
  category: "flat_tire",
  title: "🛞 Flat Tire",
  description: "Diagnosis and solutions for tire problems",

  questions: [
    {
      id: "symptom",
      text: "What happened to the tire?",
      type: "multi",
      options: [
        { id: "flat", label: "📉 Tire is completely flat", tags: ["flat", "urgent"] },
        { id: "slow_leak", label: "🐢 Slow leak (needs inflating)", tags: ["slow_leak", "monitor"] },
        { id: "blowout", label: "💥 Tire blowout while driving", tags: ["blowout", "danger"] },
        { id: "sidewall_damage", label: "🔪 Cut / sidewall damage", tags: ["sidewall", "replace"] },
        { id: "bulge", label: "🫧 Bulge / bubble on tire", tags: ["bulge", "replace"] },
        { id: "vibration", label: "📳 Vibration while driving", tags: ["vibration", "balance"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall_damage", "bulge", "vibration"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic", "low_speed"] },
        { id: "highway", label: "🛣️ On the highway (high speed)", tags: ["highway", "speed", "danger"] },
        { id: "parking", label: "🅿️ Parking lot / mall", tags: ["public", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall_damage", "bulge", "vibration"] },
      options: [
        { id: "jack", label: "🛠️ Jack", tags: ["jack"] },
        { id: "spare", label: "🛞 Spare tire (full-size)", tags: ["spare_full"] },
        { id: "spare_temporary", label: "🛞 Spare tire (temporary/donut)", tags: ["spare_temp"] },
        { id: "repair_kit", label: "🧰 Tire repair kit (plug, glue)", tags: ["repair_kit"] },
        { id: "compressor", label: "💨 Compressor / air pump", tags: ["compressor"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "tire_type",
      text: "Which tire is damaged?",
      type: "single",
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall_damage", "bulge", "vibration"] },
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
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall_damage", "bulge", "vibration"] },
      options: [
        { id: "day", label: "☀️ Day (light)", tags: ["day"] },
        { id: "night", label: "🌙 Night (dark)", tags: ["night", "low_vis"] },
        { id: "evening", label: "🌅 Evening / twilight", tags: ["evening"] }
      ]
    },
    {
      id: "has_passengers",
      text: "Are there passengers who need help?",
      type: "single",
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall_damage", "bulge", "vibration"] },
      options: [
        { id: "alone", label: "I'm alone", tags: ["alone"] },
        { id: "with_kids", label: "With children", tags: ["kids"] },
        { id: "with_elderly", label: "With elderly / disabled", tags: ["elderly"] },
        { id: "with_others", label: "With other passengers", tags: ["others"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. Tire change =====
    {
      id: "tire_change",
      title: "🛞 Change tire to spare",
      description: "Most reliable method — install spare tire, especially with serious damage.",
      conditions: { symptom: ["flat", "blowout", "sidewall_damage", "bulge"], has_tools: ["jack", "spare_full", "spare_temp"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Working tire (spare)",
      tags: ["tire", "wheel", "basic", "change"],
      steps: [
        "Stop on level solid surface, turn on hazard lights",
        "Engage first gear (MT) or park (AT), set handbrake",
        "Place wheel chocks under wheels",
        "Loosen lug nuts on damaged wheel (1/2 turn) — DO NOT remove completely",
        "Place jack under jack point, raise the car",
        "Fully remove lug nuts and remove the wheel",
        "Install spare wheel: align holes, hand-tighten lug nuts",
        "Lower the car, tighten lug nuts cross-pattern with proper torque",
        "Check spare tire pressure (should be 30-35 PSI)",
        "Store damaged wheel, jack and tools in trunk",
        "Drive at max 50 mph to nearest tire shop"
      ],
      warnings: [
        "DO NOT go under the car on jack alone — use jack stands",
        "Tighten lug nuts with proper torque — overtightening is dangerous",
        "Temporary spare (donut) — max speed 50 mph, max 90 miles range",
        "Before driving, check all lug nuts are tightened"
      ]
    },
    // ===== 2. Tire plug repair =====
    {
      id: "tire_repair_kit",
      title: "🧰 Tire plug repair (without removing wheel)",
      description: "For small punctures (nail, screw) — can be repaired with a plug on the spot.",
      conditions: { symptom: ["flat", "slow_leak"], has_tools: ["repair_kit", "compressor"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10-20 min",
      yield_estimate: "Leak sealed",
      tags: ["repair", "plug", "emergency"],
      steps: [
        "Find the puncture (inflate tire and listen for hissing)",
        "Remove foreign object (nail, screw) with pliers",
        "Widen the hole with the rasp tool (included in kit)",
        "Insert plug into the needle (like threading a needle)",
        "Apply rubber cement to the plug (from kit)",
        "Push needle with plug into the hole and push through",
        "Remove needle, leaving plug in the hole",
        "Trim excess plug (leave 1-2 mm above surface)",
        "Inflate tire to normal pressure",
        "Check for leaks with soapy water"
      ],
      warnings: [
        "Plug is temporary — max 60 miles to tire shop",
        "DO NOT repair sidewall cuts or bulges with plugs",
        "If hole is larger than 1/4 inch — repair won't work",
        "After repair, check pressure within 24 hours"
      ]
    },
    // ===== 3. Inflate tire =====
    {
      id: "inflate_tire",
      title: "💨 Inflate tire (if slow leak)",
      description: "If tire has slow leak — inflate and drive to tire shop.",
      conditions: { symptom: ["slow_leak"], has_tools: ["compressor"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "2-5 min",
      yield_estimate: "Ability to reach service",
      tags: ["inflate", "pressure", "emergency"],
      steps: [
        "Connect compressor (cigarette lighter or battery powered)",
        "Connect hose to tire valve",
        "Inflate to recommended pressure (usually 30-35 PSI)",
        "If no compressor — use manual or bicycle pump",
        "If soapy water available — check for leaks",
        "If tire deflates quickly — inflate to max and drive immediately to tire shop",
        "Keep engine running while using cigarette lighter compressor to avoid battery drain"
      ],
      warnings: [
        "Do not exceed max pressure (marked on tire sidewall)",
        "If tire is severely damaged — inflation won't help",
        "If compressor overheats — let it cool down",
        "Check pressure again after 10-15 minutes"
      ]
    },
    // ===== 4. Emergency help =====
    {
      id: "emergency_tire_help",
      title: "🆘 Emergency help on the road (no spare)",
      description: "If no spare or repair kit — call for help or use temporary measures.",
      conditions: { has_tools: ["nothing"], location: ["road", "highway"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "5-30 min (until help arrives)",
      yield_estimate: "Temporary solution + help called",
      tags: ["emergency", "help", "call"],
      steps: [
        "Turn on hazard lights, set warning triangle",
        "Call insurance (roadside assistance included in policy?)",
        "If unavailable — call a tow truck (see solution 6)",
        "Call friends who can bring a spare or repair kit",
        "If tire shop nearby — call mobile tire service",
        "If tire isn't completely flat — inflate with compressor (even small one)",
        "If on highway — move behind barrier"
      ],
      warnings: [
        "Don't drive on flat tire — you'll damage the rim and suspension",
        "If electric vehicle — conserve battery charge",
        "Don't stand on roadway — dangerous",
        "If passengers — evacuate them to safe location"
      ]
    },
    // ===== 5. Tire maintenance =====
    {
      id: "tire_maintenance",
      title: "🔍 Tire inspection and maintenance",
      description: "Regular pressure and condition checks prevent punctures.",
      conditions: { symptom: ["slow_leak", "vibration"], location: ["home", "parking"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "10-20 min",
      yield_estimate: "Preventing problems",
      tags: ["maintenance", "pressure", "check"],
      steps: [
        "Check pressure in all tires (cold tires, before driving)",
        "Inspect tires for cuts, bulges, uneven wear",
        "Check tread depth (should be at least 2/32 inch)",
        "Clean tires of stones and debris",
        "Check valve condition (not leaking)",
        "If uneven wear — check wheel alignment",
        "Rotate tires regularly (every 6,000 miles)",
        "In winter, check pressure more often (cold reduces pressure)"
      ],
      warnings: [
        "Underinflated tires increase fuel consumption and wear",
        "Overinflated tires reduce traction and increase blowout risk",
        "Tread depth below 2/32 inch is dangerous (especially on wet roads)",
        "If there's a bulge — tire must be replaced, it can blow out at speed"
      ]
    },
    // ===== 6. Tow truck =====
    {
      id: "tow_truck_tire",
      title: "🚛 Call tow truck (if no spare)",
      description: "If no way to change tire — call a tow truck.",
      conditions: { has_tools: ["nothing"], location: ["road", "highway", "parking"], symptom: ["flat", "blowout", "sidewall_damage"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at tire shop",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights, set warning triangle",
        "Call insurance (is towing included in policy?)",
        "If not — call paid towing service (compare prices)",
        "Tell operator: car make, damage, location, problem (flat tire)",
        "If on highway — move behind barrier until arrival",
        "During loading — watch to avoid bumper damage",
        "Go to tire shop or home"
      ],
      warnings: [
        "Don't drive on flat tire — it damages rim and suspension",
        "If on highway — don't wait in car, move behind barrier",
        "If using temporary spare — don't exceed 50 mph",
        "Keep towing receipt — may be needed for insurance"
      ]
    },
    // ===== 7. Tire sealant =====
    {
      id: "tire_sealant",
      title: "🧴 Using tire sealant (temporary)",
      description: "For small punctures — inject sealant through valve. Fast but temporary.",
      conditions: { symptom: ["flat", "slow_leak"], has_tools: ["compressor"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "5-10 min",
      yield_estimate: "Temporary puncture seal",
      tags: ["sealant", "temporary", "emergency"],
      steps: [
        "Buy tire sealant can (available at auto parts stores)",
        "Remove foreign object from tire (if visible)",
        "Shake the can, connect hose to valve",
        "Inject sealant into tire (follow can instructions)",
        "Inflate tire to normal pressure",
        "Drive 0.5-1 mile to distribute sealant",
        "Check pressure, add air if needed",
        "Drive to nearest tire shop (max 60 miles)"
      ],
      warnings: [
        "Sealant works only for tread punctures (not sidewall)",
        "After using sealant, tire needs cleaning or replacement (it interferes with vulcanization)",
        "Don't store can at high temperatures (explosion risk)",
        "Sealant doesn't work for cuts or large holes (> 1/4 inch)"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoFlatTireDataEn = autoFlatTireDataEn;
