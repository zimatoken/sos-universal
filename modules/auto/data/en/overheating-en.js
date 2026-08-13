// === MODULE: AUTO — ENGINE OVERHEATING (ENGLISH) ===
const autoOverheatingDataEn = {
  category: "overheating",
  title: "🌡️ Engine overheating",
  description: "Diagnostics and solutions for cooling system problems",

  questions: [
    {
      id: "symptom",
      text: "What symptoms have you noticed? (select all that apply)",
      type: "multi",
      options: [
        { id: "temp_high", label: "🌡️ Temperature gauge in the red zone", tags: ["temp_high", "alert"] },
        { id: "smoke", label: "💨 Steam / smoke from under the hood", tags: ["smoke", "steam", "danger"] },
        { id: "smell", label: "👃 Sweet smell (coolant) / burnt oil", tags: ["smell", "coolant"] },
        { id: "warning_light", label: "⚠️ Overheating warning light on dashboard", tags: ["warning", "check"] },
        { id: "steam_radiator", label: "🌫️ Steam from radiator or expansion tank", tags: ["steam", "pressure"] },
        { id: "loss_power", label: "🐢 Power loss, engine 'misfiring'", tags: ["power_loss", "engine"] },
        { id: "coolant_leak", label: "💧 Puddle under the car (green/red liquid)", tags: ["leak", "coolant"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "danger"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "coolant", label: "🧊 Coolant / antifreeze", tags: ["coolant"] },
        { id: "water", label: "💧 Water (distilled or drinking)", tags: ["water"] },
        { id: "gloves", label: "🧤 Gloves", tags: ["gloves"] },
        { id: "nothing", label: "❌ Nothing from the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "engine_state",
      text: "Is the engine currently running?",
      type: "single",
      options: [
        { id: "running", label: "🟢 Yes, it's running", tags: ["running"] },
        { id: "stopped", label: "🔴 No, I turned it off", tags: ["stopped"] },
        { id: "stalled", label: "⛔ It stalled on its own", tags: ["stalled"] }
      ]
    },
    {
      id: "fan_working",
      text: "Is the cooling fan working? (can you hear or see it)",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, it's working", tags: ["fan_on"] },
        { id: "no", label: "❌ No, it's not working", tags: ["fan_off"] },
        { id: "unknown", label: "❓ I don't know / can't see", tags: ["fan_unknown"] }
      ]
    },
    {
      id: "coolant_level_visible",
      text: "Can you see the fluid level in the expansion tank?",
      type: "single",
      options: [
        { id: "normal", label: "✅ Normal (between MIN and MAX)", tags: ["level_ok"] },
        { id: "low", label: "📉 Below MIN (low)", tags: ["level_low"] },
        { id: "empty", label: "🫗 Almost empty", tags: ["level_empty"] },
        { id: "not_visible", label: "❌ Can't see / can't check", tags: ["level_unknown"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Stop and cool the engine
    // ========================================
    {
      id: "stop_and_cool",
      title: "🛑 Stop and cool the engine",
      description: "If overheating occurs, IMMEDIATELY stop and let the engine cool.",
      conditions: { symptom: ["temp_high", "smoke", "warning_light"], engine_state: ["running", "stopped", "stalled"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Cooled down engine",
      tags: ["emergency", "cool_down", "safety"],
      steps: [
        "IMMEDIATELY pull over to the side of the road (if safe)",
        "Turn off the engine (if it hasn't stalled)",
        "Turn on the hazard lights",
        "DO NOT open the hood for 15-20 minutes — let the engine cool",
        "DO NOT open the radiator cap — steam under pressure can cause burns",
        "If possible — turn the heater on full power (it draws heat from the engine)",
        "After cooling, open the hood and check the coolant level",
        "Do not attempt to drive until the engine has completely cooled"
      ],
      warnings: [
        "NEVER open the hood immediately — steam can burn you",
        "DO NOT pour cold water into a hot engine — it can crack the block",
        "If the engine stalled — do not try to restart it immediately",
        "If there's a coolant leak — do not top up until the engine has cooled"
      ]
    },
    // ========================================
    // 2. Coolant level check and top-up
    // ========================================
    {
      id: "coolant_add",
      title: "🧊 Coolant level check and top-up",
      description: "If the coolant level is low — top up to the correct level after the engine cools.",
      conditions: { symptom: ["temp_high", "coolant_leak"], engine_state: ["stopped"], coolant_level_visible: ["low", "empty"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10-15 min",
      yield_estimate: "Normal coolant level",
      tags: ["coolant", "top_up", "antifreeze"],
      steps: [
        "Make sure the engine has cooled (the hood is not hot)",
        "Open the hood, find the expansion tank (usually transparent, with MIN/MAX marks)",
        "If available — top up coolant to the level between MIN and MAX",
        "If no coolant — top up with distilled water (as a last resort)",
        "DO NOT open the radiator cap while the engine is hot!",
        "Check for leaks under the car after topping up",
        "Start the engine and let it idle for 2-3 minutes",
        "Check if overheating occurs again"
      ],
      warnings: [
        "DO NOT open the radiator on a hot engine — burns",
        "Only mix the same type of coolant (green with green, red with red)",
        "If the leak is large — it won't help, call a tow truck",
        "After topping up, check the level again after some time"
      ]
    },
    // ========================================
    // 3. Cooling fan check
    // ========================================
    {
      id: "check_fan",
      title: "💨 Cooling fan check",
      description: "If the fan doesn't work, the engine overheats at idle and in traffic jams.",
      conditions: { symptom: ["temp_high"], fan_working: ["no", "unknown"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "5-10 min",
      yield_estimate: "Fan diagnostics",
      tags: ["fan", "diagnostics", "cooling"],
      steps: [
        "Start the engine and turn on the air conditioner (if available) — the fan should turn on",
        "If the fan doesn't start — check the fuse (located in the fuse box)",
        "Check the fan relay (can be swapped with a similar one nearby)",
        "If the fan turns on but not at full speed — possibly a resistor issue",
        "If the fan doesn't work — you can drive, but avoid traffic jams and prolonged idling",
        "With a non-working fan — keep moving (airflow while driving helps)"
      ],
      warnings: [
        "If the fan doesn't work — don't sit in traffic jams, the engine will overheat",
        "Check fuses with the ignition off",
        "Do not touch the fan blades while the engine is running",
        "If the relay is fine but the fan still doesn't work — the fan motor may be faulty"
      ]
    },
    // ========================================
    // 4. Thermostat check
    // ========================================
    {
      id: "thermostat_check",
      title: "🌡️ Thermostat check / replacement",
      description: "If the engine overheats while driving on the highway — the thermostat may be stuck.",
      conditions: { symptom: ["temp_high"], engine_state: ["running"], location: ["road", "highway"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-60 min (at a service center)",
      yield_estimate: "Fix the cause of overheating",
      tags: ["thermostat", "cooling", "repair"],
      steps: [
        "Check the temperature: if it rises quickly on the highway — the thermostat may be closed",
        "Check the hoses: if one is hot and the other cold — the thermostat is not opening",
        "In this case — visit a service center to replace the thermostat",
        "If you can't reach a service center — try removing the thermostat (temporary solution)",
        "After removing the thermostat — the engine will warm up slower but won't overheat",
        "Be sure to replace the thermostat with a new one at the first opportunity"
      ],
      warnings: [
        "Replacing the thermostat requires draining coolant — only do it after the engine cools",
        "If the thermostat is stuck closed — the engine will overheat",
        "If stuck open — the engine will be cold (warm up slowly)",
        "Don't drive without a thermostat in winter — the engine will be cold and the heater won't work"
      ]
    },
    // ========================================
    // 5. Radiator inspection
    // ========================================
    {
      id: "radiator_check",
      title: "🧽 Radiator inspection (clogging, dirt, damage)",
      description: "A clogged radiator can't dissipate heat effectively — a cause of overheating.",
      conditions: { symptom: ["temp_high"], location: ["home", "parking"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "20-30 min",
      yield_estimate: "Clean radiator",
      tags: ["radiator", "cleaning", "maintenance"],
      steps: [
        "Inspect the radiator fins — they should not be clogged with fluff, dirt, or insects",
        "Rinse the radiator with water from a hose (carefully, don't damage the fins)",
        "Check if the radiator is damaged (leaks, dents)",
        "If the radiator is damaged — it will need to be replaced or repaired",
        "Check that air circulates freely through the radiator (no obstructions)",
        "If the radiator is clogged, flush it from the outside and inside"
      ],
      warnings: [
        "Don't use high water pressure — it can damage the fins",
        "When flushing the radiator, make sure water doesn't get on electronics",
        "If the radiator is leaking — don't try to drive, call a tow truck",
        "Radiator clogging is often caused by using low-quality coolant"
      ]
    },
    // ========================================
    // 6. Heater on (emergency cooling)
    // ========================================
    {
      id: "heater_cooling",
      title: "🔥 Turning on the heater for emergency cooling",
      description: "If the engine overheats — turn the heater on full power to draw heat from the cabin.",
      conditions: { symptom: ["temp_high"], engine_state: ["running"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1 min",
      yield_estimate: "5-10°C temperature reduction",
      tags: ["emergency", "heater", "cooling"],
      steps: [
        "IMMEDIATELY turn the heater on full power",
        "Open the windows (to remove heat from the cabin)",
        "Turn the fan to maximum speed",
        "Direct the airflow to the windshield (so it doesn't blow on you)",
        "This will draw some heat away from the engine and lower the temperature",
        "Watch the temperature gauge — it should drop",
        "If it doesn't help — stop and let the engine cool"
      ],
      warnings: [
        "It may get very hot in the cabin — this is normal",
        "If the heater doesn't blow warm air — there may be low coolant or air in the system",
        "This is a temporary measure, it doesn't fix the problem"
      ]
    },
    // ========================================
    // 7. Call a tow truck
    // ========================================
    {
      id: "tow_truck_overheat",
      title: "🚛 Call a tow truck (critical situation)",
      description: "If overheating is severe, there's a leak, the engine stalled, or you're on the highway — call a tow truck.",
      conditions: { symptom: ["smoke", "smell", "coolant_leak", "stalled"], location: ["highway", "road"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Safe transport to service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights, place a warning triangle",
        "If the engine stalled — don't try to restart it",
        "Call a tow truck (through insurance or paid service)",
        "Tell the operator: the make of the car, the problem (overheating), your exact location",
        "If on the highway — move behind the barrier",
        "During loading, watch to avoid damaging the car",
        "Go to a service center or home"
      ],
      warnings: [
        "Do not drive with an overheated engine — it will lead to expensive repairs",
        "If there's a coolant leak — don't top up until the engine has cooled",
        "When towing with a rope — remember that the brake booster may not work",
        "If there's smoke — don't open the hood until it cools"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoOverheatingDataEn = autoOverheatingDataEn;