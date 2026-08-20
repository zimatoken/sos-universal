// modules/auto/data/en/overheating-en.js
// === MODULE: AUTO — ENGINE OVERHEATING ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "auto",
    category: "overheating",
    version: "1.0.0",
    lang: "en",
    title: "🌡️ Engine Overheating",
    description: "Diagnostics and solutions for cooling system problems — overheating, leaks, fan, thermostat",
    icon: "🌡️",
    color: "#2563eb"
  },

  questions: [
    {
      id: "symptom",
      type: "single",
      text: "What is the main overheating symptom?",
      options: [
        { id: "temp_high", label: "🌡️ Temperature gauge in the red zone", tags: ["temp_high"] },
        { id: "smoke", label: "💨 Steam / smoke from under the hood", tags: ["smoke"] },
        { id: "smell", label: "👃 Sweet smell (antifreeze) / burnt oil", tags: ["smell"] },
        { id: "warning", label: "⚠️ Overheat warning light came on", tags: ["warning"] },
        { id: "steam", label: "🌫️ Steam from radiator or expansion tank", tags: ["steam"] },
        { id: "loss_power", label: "🐢 Power loss, engine misfiring", tags: ["loss_power"] },
        { id: "leak", label: "💧 Puddle under the car (green/red fluid)", tags: ["leak"] },
        { id: "stalled", label: "⛔ Engine stalled / shut off", tags: ["stalled"] }
      ]
    },
    {
      id: "location",
      type: "single",
      text: "Where are you?",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning", "steam", "loss_power", "leak", "stalled"] },
      options: [
        { id: "home", label: "🏠 At home / garage", tags: ["safe"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking"] }
      ]
    },
    {
      id: "has_tools",
      type: "single",
      text: "What do you have with you?",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning", "steam", "loss_power", "leak", "stalled"] },
      options: [
        { id: "coolant", label: "🧊 Coolant (antifreeze)", tags: ["coolant"] },
        { id: "water", label: "💧 Water (distilled or drinking)", tags: ["water"] },
        { id: "gloves", label: "🧤 Gloves", tags: ["gloves"] },
        { id: "tools_none", label: "❌ None of the above", tags: ["tools_none"] }
      ]
    },
    {
      id: "engine_state",
      type: "single",
      text: "Is the engine running?",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning", "steam", "loss_power", "leak", "stalled"] },
      options: [
        { id: "running", label: "🟢 Yes, running", tags: ["running"] },
        { id: "stopped", label: "🔴 No, turned off", tags: ["stopped"] },
        { id: "stalled", label: "⛔ Stalled / shut off itself", tags: ["stalled"] }
      ]
    },
    {
      id: "fan_working",
      type: "single",
      text: "Is the cooling fan working?",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning", "steam", "loss_power", "leak", "stalled"] },
      options: [
        { id: "fan_yes", label: "✅ Yes, it's working", tags: ["fan_yes"] },
        { id: "fan_no", label: "❌ No, not working", tags: ["fan_no"] },
        { id: "fan_unknown", label: "❓ Don't know", tags: ["fan_unknown"] }
      ]
    },
    {
      id: "coolant_level_visible",
      type: "single",
      text: "Is the coolant level visible in the expansion tank?",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning", "steam", "loss_power", "leak", "stalled"] },
      options: [
        { id: "level_ok", label: "✅ Normal (between MIN and MAX)", tags: ["level_ok"] },
        { id: "level_low", label: "📉 Below MIN", tags: ["level_low"] },
        { id: "level_empty", label: "🫗 Almost empty", tags: ["level_empty"] },
        { id: "level_unknown", label: "❓ Can't see", tags: ["level_unknown"] }
      ]
    },
    {
      id: "driving_style",
      type: "single",
      text: "How were you driving before the overheating?",
      conditions: { symptom: ["temp_high", "smoke", "smell", "warning", "steam", "loss_power", "leak", "stalled"] },
      options: [
        { id: "city_traffic", label: "🚦 City traffic (stop and go)", tags: ["city_traffic"] },
        { id: "highway_speed", label: "🏎️ Highway (high speed)", tags: ["highway_speed"] },
        { id: "uphill", label: "⛰️ Uphill / mountain road", tags: ["uphill"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. STOP AND COOL
    // ============================================================
    {
      id: "stop_and_cool",
      title: "🛑 Stop and cool the engine",
      description: "In case of overheating, IMMEDIATELY stop and let the engine cool.",
      conditions: { symptom: ["temp_high", "smoke", "warning"], engine_state: ["running", "stopped", "stalled"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "15–30 minutes",
      yield_estimate: "Engine cooled down",
      tags: ["emergency", "cool_down", "safety"],
      steps: [
        "IMMEDIATELY pull over to the shoulder (if safe).",
        "Turn off the engine (if it hasn't stalled).",
        "Turn on hazard lights.",
        "DON'T open the hood for 15–20 minutes — let it cool.",
        "DON'T open the radiator cap — steam under pressure can burn.",
        "If possible — turn the heater on full blast.",
        "After cooling, open the hood and check the coolant level."
      ],
      warnings: [
        "NEVER open the hood immediately — steam burns.",
        "DON'T pour cold water into a hot engine — may crack the block.",
        "If the engine stalled — don't try to restart immediately."
      ]
    },

    // ============================================================
    // 2. TRAFFIC OVERHEATING
    // ============================================================
    {
      id: "traffic_overheat",
      title: "🚦 Overheating in traffic — fan issue",
      description: "In traffic, the engine overheats due to lack of airflow. Check the fan.",
      conditions: { symptom: ["temp_high"], driving_style: ["city_traffic"], fan_working: ["fan_no"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Fan diagnosed",
      tags: ["traffic", "fan", "overheat"],
      steps: [
        "Turn the heater on full blast (removes heat).",
        "If possible — turn off the AC (loads the engine).",
        "Check if the cooling fan is working.",
        "If the fan isn't working — check the fuse.",
        "If possible — open the hood (while parked) for better cooling.",
        "If the fan isn't working — drive to a service center, avoid traffic."
      ],
      warnings: [
        "If the fan isn't working — don't sit in traffic.",
        "Don't touch fan blades with the engine running.",
        "Check fuses with the ignition off."
      ]
    },

    // ============================================================
    // 3. HIGHWAY OVERHEATING
    // ============================================================
    {
      id: "highway_overheat",
      title: "🏎️ Highway overheating — thermostat or radiator",
      description: "On the highway, overheating can be caused by a stuck thermostat or clogged radiator.",
      conditions: { symptom: ["temp_high"], driving_style: ["highway_speed", "uphill"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Cause diagnosed",
      tags: ["highway", "thermostat", "radiator"],
      steps: [
        "Reduce speed (60–80 km/h) to reduce engine load.",
        "Turn the heater on full blast.",
        "If possible — stop and let it cool.",
        "Check hoses: if one is hot and the other cold — thermostat is stuck.",
        "Inspect the radiator: not clogged with dirt, fluff, insects.",
        "If the radiator is dirty — wash it with water (after cooling)."
      ],
      warnings: [
        "If the thermostat is stuck closed — the engine will overheat.",
        "Don't try to drive with an overheated engine — expensive repair.",
        "After cooling, check the coolant level."
      ]
    },

    // ============================================================
    // 4. ENGINE STALLED
    // ============================================================
    {
      id: "engine_stalled",
      title: "⛔ Engine stalled from overheating — what to do",
      description: "The engine stalled itself — protection from destruction. Don't try to restart immediately.",
      conditions: { symptom: ["stalled"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "20–40 minutes",
      yield_estimate: "Safe cooling",
      tags: ["stalled", "overheat", "emergency"],
      steps: [
        "DON'T try to restart immediately — may destroy the engine.",
        "Turn on hazard lights and place a warning triangle.",
        "Let the engine cool for 30–40 minutes.",
        "Check the coolant level (after cooling).",
        "If low — top up.",
        "If normal — possibly thermostat or fan issue.",
        "If it starts after cooling — drive to a service center immediately.",
        "If it doesn't start — call a tow truck."
      ],
      warnings: [
        "DON'T try to start an overheated engine — may destroy it.",
        "If the engine stalled on the highway — move behind the barrier.",
        "If there's a coolant leak — don't top up until cooled."
      ]
    },

    // ============================================================
    // 5. POWER LOSS
    // ============================================================
    {
      id: "power_loss_overheat",
      title: "🐢 Power loss during overheating",
      description: "Power loss is a sign that the engine is in limp mode.",
      conditions: { symptom: ["loss_power"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Diagnosis",
      tags: ["power_loss", "engine", "overheat"],
      steps: [
        "Power loss during overheating — engine in limp mode.",
        "DON'T continue driving — stop and turn off the engine.",
        "Let it cool for 15–20 minutes.",
        "Check the coolant level.",
        "If normal — possibly sensor or ECU issue.",
        "If misfiring — possible head gasket damage.",
        "In any case — go to a service center on a tow truck."
      ],
      warnings: [
        "Power loss + overheating = serious problem.",
        "Don't try to drive further — may destroy the engine.",
        "If misfiring — possible head gasket damage."
      ]
    },

    // ============================================================
    // 6. COOLANT TOP UP
    // ============================================================
    {
      id: "coolant_add",
      title: "🧊 Check and top up coolant",
      description: "If the coolant level is low — top up after the engine has cooled.",
      conditions: { symptom: ["temp_high", "leak"], coolant_level_visible: ["level_low", "level_empty"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–15 minutes",
      yield_estimate: "Normal coolant level",
      tags: ["coolant", "top_up", "antifreeze"],
      steps: [
        "Make sure the engine is cool.",
        "Open the hood, find the expansion tank (with MIN/MAX).",
        "Top up antifreeze to between MIN and MAX.",
        "If no antifreeze — top up with distilled water (last resort).",
        "DON'T open the radiator cap while the engine is hot!",
        "Check for leaks under the car.",
        "Start the engine and let it run for 2–3 minutes."
      ],
      warnings: [
        "DON'T open the radiator on a hot engine — burns.",
        "Only mix the same type of antifreeze.",
        "If there's a large leak — it won't help, call a tow truck."
      ]
    },

    // ============================================================
    // 7. AIR LOCK
    // ============================================================
    {
      id: "coolant_air_lock",
      title: "💨 Air lock in the cooling system",
      description: "Air in the system prevents coolant circulation. Check and bleed.",
      conditions: { symptom: ["temp_high"], coolant_level_visible: ["level_ok"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "15–20 minutes",
      yield_estimate: "Air removed from system",
      tags: ["air_lock", "coolant", "system"],
      steps: [
        "Signs of air lock: heater blows cold air, engine overheats.",
        "Open the expansion tank cap (cold engine).",
        "Start the engine and let it warm up to operating temperature.",
        "Open the radiator cap (if accessible) to release air.",
        "Monitor the fluid level — top up as it drops.",
        "When air is out — the level will stabilize.",
        "Close caps and check temperature."
      ],
      warnings: [
        "Don't open the radiator cap on a hot engine!",
        "If the problem persists — possible leak in the system."
      ]
    },

    // ============================================================
    // 8. CHECK FAN
    // ============================================================
    {
      id: "check_fan",
      title: "💨 Check cooling fan operation",
      description: "If the fan isn't working, the engine overheats at idle.",
      conditions: { symptom: ["temp_high"], fan_working: ["fan_no", "fan_unknown"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Fan diagnosed",
      tags: ["fan", "diagnostics", "cooling"],
      steps: [
        "Start the engine and turn on the AC — the fan should start.",
        "If not — check the fuse.",
        "Check the fan relay (swap with a similar one).",
        "If the fan runs but weak — possibly a resistor.",
        "If not working — can drive, avoid traffic and long idling."
      ],
      warnings: [
        "Don't touch fan blades with the engine running.",
        "Check fuses with the ignition off."
      ]
    },

    // ============================================================
    // 9. HEATER FOR EMERGENCY COOLING
    // ============================================================
    {
      id: "heater_cooling",
      title: "🔥 Using the heater for emergency cooling",
      description: "If the engine overheats — turn the heater on full blast.",
      conditions: { symptom: ["temp_high"], engine_state: ["running"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1 minute",
      yield_estimate: "Temperature reduced by 5–10°C",
      tags: ["emergency", "heater", "cooling"],
      steps: [
        "IMMEDIATELY turn the heater on full blast.",
        "Open the windows (to remove heat).",
        "Turn the fan to maximum.",
        "Direct airflow to the windshield.",
        "Monitor the temperature gauge — should drop."
      ],
      warnings: [
        "It may get very hot in the cabin — this is normal.",
        "If the heater doesn't heat — likely low coolant."
      ]
    },

    // ============================================================
    // 10. TOW TRUCK
    // ============================================================
    {
      id: "tow_truck_overheat",
      title: "🚛 Calling a tow truck (critical situation)",
      description: "For severe overheating, leaks, or a stalled engine — call a tow truck.",
      conditions: { symptom: ["smoke", "smell", "leak", "stalled"], location: ["highway", "road"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "30–120 minutes",
      yield_estimate: "Safe delivery to service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and place a warning triangle.",
        "If the engine stalled — don't try to restart.",
        "Call a tow truck (through insurance or paid).",
        "Tell the operator: car model, problem (overheating), location.",
        "On the highway — move behind the barrier.",
        "During loading — ask for caution."
      ],
      warnings: [
        "Don't try to drive with an overheated engine.",
        "If there's a leak — don't top up until cooled.",
        "During towing — remember that the brake booster may not work."
      ]
    }
  ]
});