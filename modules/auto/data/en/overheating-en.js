// === MODULE: AUTO — ENGINE OVERHEATING (ENGLISH) ===
const autoOverheatingDataEn = {
  category: "overheating",
  title: "🌡️ Engine Overheating",
  description: "Diagnosis and solutions for cooling system problems",

  questions: [
    {
      id: "symptom",
      text: "What symptoms did you notice?",
      type: "multi",
      options: [
        { id: "temp_high", label: "🌡️ Temperature gauge in red zone", tags: ["temp_high", "alert"] },
        { id: "smoke", label: "💨 Steam / smoke from under hood", tags: ["smoke", "steam", "danger"] },
        { id: "smell", label: "👃 Sweet smell (antifreeze) / burnt oil", tags: ["smell", "coolant"] },
        { id: "warning_light", label: "⚠️ Overheat warning light on dashboard", tags: ["warning", "check"] },
        { id: "steam_radiator", label: "🌫️ Steam from radiator or expansion tank", tags: ["steam", "pressure"] },
        { id: "loss_power", label: "🐢 Loss of power, engine misfiring", tags: ["power_loss", "engine"] },
        { id: "coolant_leak", label: "💧 Puddle under car (green/red fluid)", tags: ["leak", "coolant"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning_light", "steam_radiator", "loss_power", "coolant_leak"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "danger"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning_light", "steam_radiator", "loss_power", "coolant_leak"] },
      options: [
        { id: "coolant", label: "🧊 Coolant (antifreeze)", tags: ["coolant"] },
        { id: "water", label: "💧 Water (distilled or drinking)", tags: ["water"] },
        { id: "gloves", label: "🧤 Gloves", tags: ["gloves"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "engine_state",
      text: "Is the engine currently running?",
      type: "single",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning_light", "steam_radiator", "loss_power", "coolant_leak"] },
      options: [
        { id: "running", label: "🟢 Yes, running", tags: ["running"] },
        { id: "stopped", label: "🔴 No, turned off", tags: ["stopped"] },
        { id: "stalled", label: "⛔ Stalled (shut off itself)", tags: ["stalled"] }
      ]
    },
    {
      id: "fan_working",
      text: "Is the cooling fan working? (can hear or see)",
      type: "single",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning_light", "steam_radiator", "loss_power", "coolant_leak"] },
      options: [
        { id: "yes", label: "✅ Yes, working", tags: ["fan_on"] },
        { id: "no", label: "❌ No, not working", tags: ["fan_off"] },
        { id: "unknown", label: "❓ Don't know / can't see", tags: ["fan_unknown"] }
      ]
    },
    {
      id: "coolant_level_visible",
      text: "Can you see the coolant level in the expansion tank?",
      type: "single",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning_light", "steam_radiator", "loss_power", "coolant_leak"] },
      options: [
        { id: "normal", label: "✅ Normal (between MIN and MAX)", tags: ["level_ok"] },
        { id: "low", label: "📉 Below MIN (low)", tags: ["level_low"] },
        { id: "empty", label: "🫗 Almost empty", tags: ["level_empty"] },
        { id: "not_visible", label: "❌ Can't see / can't check", tags: ["level_unknown"] }
      ]
    }
  ],

  solutions: [
    // ===== 1. Stop and cool =====
    {
      id: "stop_and_cool",
      title: "🛑 Stop and cool the engine",
      description: "If overheating, IMMEDIATELY stop and let the engine cool.",
      conditions: { symptom: ["temp_high", "smoke", "warning_light"], engine_state: ["running", "stopped", "stalled"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Cooled engine",
      tags: ["emergency", "cool_down", "safety"],
      steps: [
        "IMMEDIATELY pull over to the side (if safe)",
        "Turn off the engine (if it didn't stall)",
        "Turn on hazard lights",
        "DO NOT open the hood for 15-20 minutes — let the engine cool",
        "DO NOT open radiator cap — pressurized steam can burn",
        "If possible — turn heater to max (it pulls heat from engine)",
        "After cooling, open hood and check coolant level",
        "Don't try to drive until engine is fully cooled"
      ],
      warnings: [
        "NEVER open hood immediately — steam burns",
        "DO NOT pour cold water into hot engine — risk of cracking the block",
        "If engine stalled — don't try to restart immediately",
        "If there's coolant leak — don't top up until engine cools"
      ]
    },
    // ===== 2. Check and top up coolant =====
    {
      id: "coolant_add",
      title: "🧊 Check and top up coolant",
      description: "If coolant level is low — top up to normal after engine cools.",
      conditions: { symptom: ["temp_high", "coolant_leak"], engine_state: ["stopped"], coolant_level_visible: ["low", "empty"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10-15 min",
      yield_estimate: "Normal coolant level",
      tags: ["coolant", "top_up", "antifreeze"],
      steps: [
        "Make sure engine is cool (hood not hot)",
        "Open hood, find expansion tank (usually transparent, with MIN/MAX marks)",
        "If available — top up antifreeze to between MIN and MAX",
        "If no antifreeze — add distilled water (last resort)",
        "DO NOT open radiator cap while engine is hot!",
        "Check for leaks under the car after topping up",
        "Start engine and let idle for 2-3 minutes",
        "Check if overheating returns"
      ],
      warnings: [
        "DO NOT open radiator on hot engine — burn risk",
        "Only mix same type of antifreeze (green with green, red with red)",
        "If leak is large — won't help, call tow truck",
        "Check level again after some time"
      ]
    },
    // ===== 3. Check fan =====
    {
      id: "check_fan",
      title: "💨 Check cooling fan operation",
      description: "If fan doesn't work — engine overheats at idle and in traffic.",
      conditions: { symptom: ["temp_high"], fan_working: ["no", "unknown"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "5-10 min",
      yield_estimate: "Fan diagnosis",
      tags: ["fan", "diagnostics", "cooling"],
      steps: [
        "Start engine and turn on AC (if available) — fan should turn on",
        "If fan doesn't start — check fuse (in fuse box)",
        "Check fan relay (can swap with similar one)",
        "If fan turns on but not at full speed — resistor issue",
        "If fan doesn't work — you can drive, but avoid traffic and long idling",
        "With fan not working — keep moving (airflow while driving helps)"
      ],
      warnings: [
        "If fan doesn't work — don't sit in traffic, engine will overheat",
        "Check fuses with ignition off",
        "Don't touch fan blades with engine running",
        "If relay is good but fan doesn't work — fan motor may be bad"
      ]
    },
    // ===== 4. Thermostat =====
    {
      id: "thermostat_check",
      title: "🌡️ Check / replace thermostat",
      description: "If engine overheats while driving on highway — thermostat may be stuck.",
      conditions: { symptom: ["temp_high"], engine_state: ["running"], location: ["road", "highway"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-60 min (at service)",
      yield_estimate: "Overheating cause fixed",
      tags: ["thermostat", "cooling", "repair"],
      steps: [
        "Check temperature: if it rises quickly on highway — thermostat may be stuck closed",
        "Check hoses: if one is hot and the other cold — thermostat not opening",
        "In this case — go to service for thermostat replacement",
        "If can't reach service — try removing thermostat (temporary fix)",
        "After removing thermostat — engine will warm up slower but won't overheat",
        "Replace with new thermostat at first opportunity"
      ],
      warnings: [
        "Thermostat replacement requires draining coolant — only after engine cools",
        "If thermostat stuck closed — engine will overheat",
        "If stuck open — engine will run cold (slow warm-up)",
        "Don't drive without thermostat in winter — engine will stay cold, heater won't work"
      ]
    },
    // ===== 5. Radiator =====
    {
      id: "radiator_check",
      title: "🧽 Check radiator (blockage, dirt, damage)",
      description: "Clogged radiator doesn't dissipate heat well — causes overheating.",
      conditions: { symptom: ["temp_high"], location: ["home", "parking"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "20-30 min",
      yield_estimate: "Clean radiator",
      tags: ["radiator", "cleaning", "maintenance"],
      steps: [
        "Inspect radiator fins — should not be clogged with fluff, dirt, insects",
        "Rinse radiator with water hose (carefully, don't damage fins)",
        "Check if radiator is damaged (leaks, dents)",
        "If radiator damaged — needs replacement or repair",
        "Check if air flows freely through radiator (no obstructions)",
        "If clogged — clean from outside and inside (flush system)"
      ],
      warnings: [
        "Don't use high pressure water — can damage fins",
        "When cleaning radiator — avoid getting water on electronics",
        "If radiator is leaking — don't try to drive, call tow truck",
        "Radiator blockage often happens from using poor quality antifreeze"
      ]
    },
    // ===== 6. Heater for cooling =====
    {
      id: "heater_cooling",
      title: "🔥 Turn on heater for emergency cooling",
      description: "If engine overheated — turn heater to max to pull heat away.",
      conditions: { symptom: ["temp_high"], engine_state: ["running"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1 min",
      yield_estimate: "Engine temp drops 5-10°C",
      tags: ["emergency", "heater", "cooling"],
      steps: [
        "IMMEDIATELY turn heater to max",
        "Open windows (to remove heat from cabin)",
        "Turn fan to max speed",
        "Direct airflow to windshield (so it doesn't blow on you)",
        "This will pull heat from engine and lower temperature",
        "Watch temperature gauge — it should drop",
        "If not helping — stop and let engine cool"
      ],
      warnings: [
        "Cabin may get very hot — this is normal",
        "If heater doesn't blow hot — possibly low coolant or air in system",
        "This is temporary, doesn't fix the problem"
      ]
    },
    // ===== 7. Tow truck =====
    {
      id: "tow_truck_overheat",
      title: "🚛 Call tow truck (critical situation)",
      description: "If severe overheating, leak, stalled engine, or on highway — call tow truck.",
      conditions: { symptom: ["smoke", "smell", "coolant_leak", "stalled"], location: ["highway", "road"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Safe delivery to service",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights, set warning triangle",
        "If engine stalled — don't try to restart",
        "Call tow truck (through insurance or paid)",
        "Tell operator: car make, problem (overheating), exact location",
        "If on highway — move behind barrier",
        "During loading — watch for damage",
        "Go to service or home"
      ],
      warnings: [
        "Don't try to drive with overheating engine — leads to expensive repairs",
        "If coolant leak — don't top up until engine cools",
        "When towing with rope — remember brake booster may not work",
        "If there's smoke — don't open hood until cooled"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoOverheatingDataEn = autoOverheatingDataEn;
