// modules/auto/data/en/flat_tire-en.js
// === MODULE: AUTO — FLAT TIRE ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "auto",
    category: "flat_tire",
    version: "1.0.0",
    lang: "en",
    title: "🛞 Flat Tire",
    description: "Diagnostics and solutions for tire problems — puncture, blowout, bulge, vibration",
    icon: "🛞",
    color: "#2563eb"
  },

  questions: [
    {
      id: "symptom",
      type: "single",
      text: "What happened to the tire?",
      options: [
        { id: "flat", label: "📉 Tire is completely flat", tags: ["flat"] },
        { id: "slow_leak", label: "🐢 Slow leak (needs inflating)", tags: ["slow_leak"] },
        { id: "blowout", label: "💥 Tire blowout while driving", tags: ["blowout"] },
        { id: "sidewall_damage", label: "🔪 Sidewall damage / cut", tags: ["sidewall"] },
        { id: "bulge", label: "🫧 Bulge / bubble on the tire", tags: ["bulge"] },
        { id: "vibration", label: "📳 Vibration while driving", tags: ["vibration"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall", "bulge", "vibration"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road"] },
        { id: "highway", label: "🛣️ On the highway (high speed)", tags: ["highway"] },
        { id: "parking", label: "🅿️ Parking lot / mall", tags: ["parking"] }
      ]
    },
    {
      id: "speed_at_time",
      type: "single",
      text: "What speed were you doing at the time?",
      conditions: { symptom: ["blowout", "vibration"] },
      options: [
        { id: "speed_low", label: "🐢 Up to 60 km/h (city)", tags: ["speed_low"] },
        { id: "speed_medium", label: "🚗 60–100 km/h (highway)", tags: ["speed_medium"] },
        { id: "speed_high", label: "🏎️ Over 100 km/h", tags: ["speed_high"] }
      ]
    },
    {
      id: "has_tools",
      type: "single",
      text: "What do you have with you?",
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall", "bulge", "vibration"] },
      options: [
        { id: "tools_full", label: "🛠️ Jack + spare + repair kit", tags: ["tools_full"] },
        { id: "tools_partial", label: "🔧 Partial (jack only or repair kit only)", tags: ["tools_partial"] },
        { id: "tools_none", label: "❌ None of the above", tags: ["tools_none"] }
      ]
    },
    {
      id: "tire_type",
      type: "single",
      text: "Which tire is damaged?",
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall", "bulge", "vibration"] },
      options: [
        { id: "front_left", label: "Front left", tags: ["front_left"] },
        { id: "front_right", label: "Front right", tags: ["front_right"] },
        { id: "rear_left", label: "Rear left", tags: ["rear"] },
        { id: "rear_right", label: "Rear right", tags: ["rear"] }
      ]
    },
    {
      id: "has_passengers",
      type: "single",
      text: "Do you have passengers?",
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall", "bulge", "vibration"] },
      options: [
        { id: "alone", label: "👤 I'm alone", tags: ["alone"] },
        { id: "with_kids", label: "🧒 With children", tags: ["kids"] },
        { id: "with_elderly", label: "👴 With elderly / disabled", tags: ["elderly"] },
        { id: "with_others", label: "👥 With other passengers", tags: ["others"] }
      ]
    },
    {
      id: "road_condition",
      type: "single",
      text: "What is the road condition?",
      conditions: { symptom: ["flat", "slow_leak", "blowout", "sidewall", "bulge", "vibration"] },
      options: [
        { id: "road_dry", label: "☀️ Dry", tags: ["road_dry"] },
        { id: "road_wet", label: "🌧️ Wet / raining", tags: ["road_wet"] },
        { id: "road_snow", label: "❄️ Snow / ice", tags: ["road_snow"] },
        { id: "road_rough", label: "🪨 Gravel / dirt", tags: ["road_rough"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. TIRE CHANGE
    // ============================================================
    {
      id: "tire_change",
      title: "🛞 Changing to the spare tire",
      description: "The most reliable way — install the spare tire.",
      conditions: { symptom: ["flat", "blowout", "sidewall", "bulge"], tools_partial: ["tools_full"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "15–30 minutes",
      yield_estimate: "Spare tire installed",
      tags: ["tire", "wheel", "basic", "change"],
      steps: [
        "Stop on a level surface, turn on hazard lights.",
        "Engage first gear (manual) or park (auto), apply handbrake.",
        "Place wheel chocks.",
        "Loosen the lug nuts (half a turn).",
        "Jack up the car.",
        "Remove the lug nuts and tire.",
        "Install the spare tire, hand-tighten the nuts.",
        "Lower the car, tighten the nuts in a star pattern.",
        "Check the pressure in the spare tire.",
        "Drive up to 80 km/h to the nearest tire shop."
      ],
      warnings: [
        "DON'T go under the car with only the jack.",
        "Tighten nuts with the correct torque.",
        "Temporary spare — max 80 km/h, max 150 km range.",
        "Check that all nuts are tight."
      ]
    },

    // ============================================================
    // 2. BLOWOUT SURVIVAL
    // ============================================================
    {
      id: "blowout_survival",
      title: "💥 Tire blowout while driving — survival algorithm",
      description: "A blowout at speed is a critical situation. Act correctly.",
      conditions: { symptom: ["blowout"], speed_at_time: ["speed_medium", "speed_high"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Safe stop",
      tags: ["blowout", "emergency", "survival"],
      steps: [
        "DON'T brake sharply — you'll spin.",
        "Hold the steering wheel firmly with both hands.",
        "Ease off the gas pedal (not sharply).",
        "Turn on hazard lights.",
        "If the car pulls to the side — correct smoothly.",
        "Reduce speed to 30–40 km/h, then brake gently.",
        "Stop on the shoulder.",
        "Assess the damage.",
        "Call a tow truck or install the spare."
      ],
      warnings: [
        "DON'T brake sharply — lose control.",
        "DON'T oversteer — the car may roll.",
        "On the highway — don't stop on the roadway."
      ]
    },

    // ============================================================
    // 3. TIRE BULGE
    // ============================================================
    {
      id: "tire_bulge",
      title: "🫧 Tire bulge — danger!",
      description: "A bulge is a broken cord. The tire can explode at any moment.",
      conditions: { symptom: ["bulge"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Safety",
      tags: ["bulge", "danger", "replace"],
      steps: [
        "DON'T drive on a bulging tire — it can explode.",
        "Replace with the spare tire.",
        "If no spare — call a tow truck.",
        "Don't try to repair a bulge — it doesn't work.",
        "If you feel vibration or noise — stop immediately.",
        "A bulging tire must be replaced."
      ],
      warnings: [
        "A bulge is a broken cord. Life-threatening.",
        "DON'T try to 'inflate and drive' — explosion.",
        "If the bulge appeared after hitting a pothole — check the rim."
      ]
    },

    // ============================================================
    // 4. SIDEWALL DAMAGE
    // ============================================================
    {
      id: "sidewall_repair",
      title: "🔪 Sidewall damage — replace only",
      description: "The sidewall cannot be repaired. Only replacement.",
      conditions: { symptom: ["sidewall"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Safety",
      tags: ["sidewall", "replace", "danger"],
      steps: [
        "Sidewall damage — CANNOT be repaired. Only replacement.",
        "If the cut is deep — the tire may explode.",
        "Replace with the spare tire.",
        "If no spare — call a tow truck.",
        "Don't try to patch or sew the sidewall.",
        "After replacement — dispose of the damaged tire."
      ],
      warnings: [
        "The sidewall is the weakest part of the tire.",
        "DON'T drive with sidewall damage — it's dangerous.",
        "Sidewall repair with a plug is NOT ALLOWED."
      ]
    },

    // ============================================================
    // 5. TIRE REPAIR WITH PLUG
    // ============================================================
    {
      id: "tire_repair_kit",
      title: "🧰 Tire repair with a plug (without removing)",
      description: "If the puncture is small (nail, screw) in the tread — you can repair it with a plug.",
      conditions: { symptom: ["flat", "slow_leak"], tools_partial: ["tools_full", "tools_partial"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Leak sealed",
      tags: ["repair", "plug", "emergency"],
      steps: [
        "Find the puncture (inflate and listen for hissing).",
        "Remove the object with pliers.",
        "Widen the hole with the reamer.",
        "Insert the plug into the insertion tool.",
        "Coat the plug with glue from the kit.",
        "Push the plug into the hole.",
        "Remove the tool, leaving the plug in place.",
        "Trim the excess plug (leave 1–2 mm).",
        "Inflate the tire to normal pressure.",
        "Check for leaks with soapy water."
      ],
      warnings: [
        "A plug is a temporary solution — max 100 km to a tire shop.",
        "DON'T use this for sidewall cuts or bulges.",
        "If the hole is larger than 6 mm — repair is ineffective."
      ]
    },

    // ============================================================
    // 6. INFLATING THE TIRE
    // ============================================================
    {
      id: "inflate_tire",
      title: "💨 Inflating the tire (if slowly leaking)",
      description: "If the tire is slowly leaking — inflate and drive to a tire shop.",
      conditions: { symptom: ["slow_leak"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "2–5 minutes",
      yield_estimate: "Ability to drive to the shop",
      tags: ["inflate", "pressure", "emergency"],
      steps: [
        "Connect the compressor to the valve.",
        "Inflate to normal pressure (2.0–2.5 bar).",
        "If no compressor — use a manual pump.",
        "Check for leaks with soapy water.",
        "If it's leaking fast — inflate to max and drive to the shop.",
        "Don't turn off the engine during charging (if the compressor is from the lighter)."
      ],
      warnings: [
        "Don't inflate above the maximum pressure.",
        "If the tire is badly damaged — inflating won't help.",
        "Check the pressure again after 10–15 minutes."
      ]
    },

    // ============================================================
    // 7. TIRE VIBRATION
    // ============================================================
    {
      id: "tire_vibration",
      title: "📳 Vibration while driving — causes and solutions",
      description: "Vibration can be caused by imbalance, a bulge, or a damaged rim.",
      conditions: { symptom: ["vibration"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "30–60 minutes",
      yield_estimate: "Vibration fixed",
      tags: ["vibration", "balance", "diagnostics"],
      steps: [
        "Check tire pressure — uneven pressure causes vibration.",
        "Inspect tires for bulges and damage.",
        "Check wheel bolts — not loose.",
        "If vibration at 80–100 km/h — likely imbalance.",
        "If vibration when braking — see 'Brakes' module.",
        "Visit a tire shop for balancing.",
        "If vibration appeared after hitting a pothole — check the rim."
      ],
      warnings: [
        "Vibration accelerates suspension wear.",
        "DON'T ignore vibration — it can be dangerous.",
        "If vibration gets worse — stop and check the wheels."
      ]
    },

    // ============================================================
    // 8. FRONT WHEEL — SPECIAL CAUTION
    // ============================================================
    {
      id: "front_wheel_safety",
      title: "⚠️ Front wheel — special risks",
      description: "Front wheels affect handling. Special caution is needed.",
      conditions: { symptom: ["flat", "blowout", "sidewall", "bulge"], tire_type: ["front_left", "front_right"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "IMMEDIATE",
      yield_estimate: "Safety",
      tags: ["front", "steering", "safety"],
      steps: [
        "The front wheel affects handling. Be extra careful.",
        "If the front tire is punctured — the car pulls to the side.",
        "DON'T drive on a flat front tire — you'll lose control.",
        "Replace with the spare or call a tow truck.",
        "When replacing — always use jack stands.",
        "After replacement — check pressure and bolts."
      ],
      warnings: [
        "The front wheel is critical for steering.",
        "DON'T risk it — better to call a tow truck.",
        "When replacing — put something under the sill."
      ]
    },

    // ============================================================
    // 9. SPARE TIRE (TEMPORARY) — RESTRICTIONS
    // ============================================================
    {
      id: "spare_temporary_use",
      title: "🛞 Temporary spare tire — restrictions",
      description: "A temporary spare is a short-term solution. Speed and range limits.",
      conditions: { symptom: ["flat", "blowout", "sidewall", "bulge"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Safe temporary spare use",
      tags: ["spare", "temporary", "restrictions"],
      steps: [
        "A temporary spare is a reduced-size spare tire.",
        "Maximum speed — 80 km/h.",
        "Maximum range — 150 km.",
        "Install the spare on the rear axle (if the puncture is front — swap rear tire forward).",
        "Check pressure — should be higher (usually 4.2 bar).",
        "Drive smoothly, no sharp maneuvers.",
        "Visit a tire shop as soon as possible."
      ],
      warnings: [
        "DON'T exceed 80 km/h on a temporary spare.",
        "DON'T drive more than 150 km on a temporary spare.",
        "A temporary spare is not for long-term use.",
        "Installing a spare on the front axle worsens handling."
      ]
    },

    // ============================================================
    // 10. TOW TRUCK
    // ============================================================
    {
      id: "tow_truck_tire",
      title: "🚛 Calling a tow truck (if no spare tire)",
      description: "If you can't replace the tire — call a tow truck.",
      conditions: { tools_partial: ["tools_none"], location: ["road", "highway", "parking"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "30–120 minutes",
      yield_estimate: "Car at tire shop",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights and place a warning triangle.",
        "Call your insurance — towing may be included.",
        "If not — call a tow truck (compare prices).",
        "Tell the operator: car model, address, problem (flat tire).",
        "On the highway — move behind the barrier.",
        "Watch during loading to avoid bumper damage."
      ],
      warnings: [
        "DON'T try to drive on a flat tire.",
        "On the highway — don't wait in the car.",
        "Keep the towing receipt."
      ]
    }
  ]
});