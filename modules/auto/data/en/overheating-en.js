<<<<<<< HEAD
// === MODULE: AUTO — ENGINE OVERHEATING (ENGLISH) ===
const autoOverheatingDataEn = {
  category: "overheating",
  title: "🌡️ Engine Overheating",
  description: "Diagnostics and solutions for cooling system problems",

  questions: [
    {
      id: "symptom",
      text: "What symptoms do you notice? (select all that apply)",
      type: "multi",
      options: [
        { id: "temp_high", label: "🌡️ Temperature gauge is in the red zone", tags: ["temp_high", "alert"] },
        { id: "smoke", label: "💨 Steam / smoke from under the hood", tags: ["smoke", "steam", "danger"] },
        { id: "smell", label: "👃 Sweet smell (antifreeze) / burnt oil", tags: ["smell", "coolant"] },
        { id: "warning_light", label: "⚠️ Overheat warning light came on", tags: ["warning", "check"] },
        { id: "steam_radiator", label: "🌫️ Steam from radiator or expansion tank", tags: ["steam", "pressure"] },
        { id: "loss_power", label: "🐢 Loss of power, engine misfiring", tags: ["power_loss", "engine"] },
        { id: "coolant_leak", label: "💧 Puddle under the car (green/red fluid)", tags: ["leak", "coolant"] }
=======
// === AUTO SECTION - OVERHEATING (ENGLISH) ===

const autoOverheatingDataEn = {
  category: "overheating",
  title: "🌡️ Overheating",
  description: "Cooling system problems",
  questions: [
    {
      id: "symptom",
      text: "What are the symptoms?",
      type: "multi",
      options: [
        { id: "smoke", label: "💨 Smoke from hood", tags: ["overheating", "leak", "engine"] },
        { id: "smell", label: "👃 Gas smell", tags: ["fuel", "leak", "danger"] },
        { id: "warning_light", label: "⚠️ Warning light on dashboard", tags: ["sensor", "diagnostic", "check"] }
>>>>>>> 92849c5936c3da4acab85528b91f11224f9f55d1
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
<<<<<<< HEAD
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
      options: [
        { id: "running", label: "🟢 Yes, running", tags: ["running"] },
        { id: "stopped", label: "🔴 No, turned off", tags: ["stopped"] },
        { id: "stalled", label: "⛔ It stalled (shut off by itself)", tags: ["stalled"] }
      ]
    },
    {
      id: "fan_working",
      text: "Is the cooling fan working? (hear or see it)",
      type: "single",
      options: [
        { id: "yes", label: "✅ Yes, it's working", tags: ["fan_on"] },
        { id: "no", label: "❌ No, it's not working", tags: ["fan_off"] },
        { id: "unknown", label: "❓ Don't know / can't see", tags: ["fan_unknown"] }
      ]
    },
    {
      id: "coolant_level_visible",
      text: "Can you see the coolant level in the expansion tank?",
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
    // 1. Stop and cool down the engine
    // ========================================
    {
      id: "stop_and_cool",
      title: "🛑 Stop and cool down the engine",
      description: "If overheating occurs, STOP IMMEDIATELY and let the engine cool down.",
      conditions: { symptom: ["temp_high", "smoke", "warning_light"], engine_state: ["running", "stopped", "stalled"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Cooled engine",
      tags: ["emergency", "cool_down", "safety"],
      steps: [
        "IMMEDIATELY pull over to the side of the road (if safe)",
        "Turn off the engine (if it hasn't stalled)",
        "Turn on hazard lights",
        "DO NOT open the hood for 15-20 minutes — let the engine cool",
        "DO NOT open the radiator cap — steam under pressure can burn you",
        "If possible — turn the heater on full power (it draws heat from the engine)",
        "After cooling, open the hood and check coolant level",
        "Do not attempt to drive until the engine is completely cool"
      ],
      warnings: [
        "NEVER open the hood immediately — steam can burn you",
        "DO NOT pour cold water into a hot engine — risk of cracking the block",
        "If the engine stalled — do not try to restart it immediately",
        "If there's a coolant leak — do not top up until the engine is cool"
      ]
    },
    // ========================================
    // 2. Check and top up coolant
    // ========================================
    {
      id: "coolant_add",
      title: "🧊 Check and top up coolant",
      description: "If coolant level is low — top up to the correct level after the engine has cooled.",
      conditions: { symptom: ["temp_high", "coolant_leak"], engine_state: ["stopped"], coolant_level_visible: ["low", "empty"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "10-15 min",
      yield_estimate: "Normal coolant level",
      tags: ["coolant", "top_up", "antifreeze"],
      steps: [
        "Make sure the engine is cool (hood is not hot)",
        "Open the hood, locate the expansion tank (usually clear, with MIN/MAX marks)",
        "If available — top up with coolant to between MIN and MAX",
        "If no coolant — top up with distilled water (as a last resort)",
        "DO NOT open the radiator cap while the engine is hot!",
        "Check for leaks under the car after topping up",
        "Start the engine and let it idle for 2-3 minutes",
        "Check if overheating reoccurs"
      ],
      warnings: [
        "DO NOT open the radiator on a hot engine — risk of burns",
        "Only mix the same type of coolant (green with green, red with red)",
        "If the leak is large — it won't help, call a tow truck",
        "After topping up, recheck the level after some time"
      ]
    },
    // ========================================
    // 3. Check the cooling fan
    // ========================================
    {
      id: "check_fan",
      title: "💨 Check the cooling fan",
      description: "If the fan is not working — the engine overheats at idle and in traffic jams.",
      conditions: { symptom: ["temp_high"], fan_working: ["no", "unknown"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "5-10 min",
      yield_estimate: "Fan diagnosis",
      tags: ["fan", "diagnostics", "cooling"],
      steps: [
        "Start the engine and turn on the air conditioning (if available) — the fan should turn on",
        "If the fan does not start — check the fuse (in the fuse box)",
        "Check the fan relay (swap with a similar one nearby)",
        "If the fan turns on but not at full speed — the resistor may be faulty",
        "If the fan does not work — you can drive, but avoid traffic jams and long idling",
        "If the fan is not working — keep moving (airflow while driving helps)"
      ],
      warnings: [
        "If the fan does not work — do not sit in traffic jams, the engine will overheat",
        "Check fuses with the ignition off",
        "Do not touch the fan blades while the engine is running",
        "If the relay is fine but the fan doesn't work — the fan motor may be faulty"
      ]
    },
    // ========================================
    // 4. Thermostat check / replacement
    // ========================================
    {
      id: "thermostat_check",
      title: "🌡️ Thermostat check / replacement",
      description: "If the engine overheats while driving on the highway — the thermostat may be stuck.",
      conditions: { symptom: ["temp_high"], engine_state: ["running"], location: ["road", "highway"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-60 min (at a service center)",
      yield_estimate: "Cause of overheating fixed",
      tags: ["thermostat", "cooling", "repair"],
      steps: [
        "Check the temperature: if it rises quickly while driving — the thermostat may be closed",
        "Check the hoses: if one is hot and the other is cold — the thermostat is not opening",
        "In this case — visit a service center for thermostat replacement",
        "If you can't reach a service center — try removing the thermostat (temporary solution)",
        "After removing the thermostat — the engine will take longer to warm up, but won't overheat",
        "Be sure to replace the thermostat with a new one at the earliest opportunity"
      ],
      warnings: [
        "Replacing the thermostat requires draining the coolant — do this only after the engine has cooled",
        "If the thermostat is stuck closed — the engine will overheat",
        "If stuck open — the engine will be cold (takes long to warm up)",
        "Do not drive without a thermostat in winter — the engine will be cold and the heater won't work"
      ]
    },
    // ========================================
    // 5. Check the radiator for blockage
    // ========================================
    {
      id: "radiator_check",
      title: "🧽 Check the radiator (blockage, dirt, damage)",
      description: "A clogged radiator does not dissipate heat well — a cause of overheating.",
      conditions: { symptom: ["temp_high"], location: ["home", "parking"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "20-30 min",
      yield_estimate: "Clean radiator",
      tags: ["radiator", "cleaning", "maintenance"],
      steps: [
        "Inspect the radiator fins — they should not be clogged with fluff, dirt, or insects",
        "Rinse the radiator with water from a hose (carefully, do not damage the fins)",
        "Check if the radiator is damaged (leaks, dents)",
        "If the radiator is damaged — replacement or soldering is needed",
        "Check if air can circulate freely through the radiator (no obstructions)",
        "If the radiator is clogged — clean it from the outside and flush from the inside"
      ],
      warnings: [
        "Do not use high water pressure — it can damage the fins",
        "When washing the radiator, make sure water does not get on electronics",
        "If the radiator is leaking — do not attempt to drive, call a tow truck",
        "Radiator blockage often occurs from using poor-quality antifreeze"
      ]
    },
    // ========================================
    // 6. Turn on the heater (emergency cooling)
    // ========================================
    {
      id: "heater_cooling",
      title: "🔥 Turn on the heater for emergency cooling",
      description: "If the engine overheats — turn the heater on full power to draw heat away from the cabin.",
      conditions: { symptom: ["temp_high"], engine_state: ["running"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1 min",
      yield_estimate: "Temperature drop of 5-10°C",
      tags: ["emergency", "heater", "cooling"],
      steps: [
        "IMMEDIATELY turn the heater on full power",
        "Open the windows (to remove heat from the cabin)",
        "Set the fan to maximum speed",
        "Direct airflow toward the windshield (so it doesn't blow on you)",
        "This will draw some heat away from the engine and lower the temperature",
        "Watch the temperature gauge — it should start dropping",
        "If it doesn't help — stop and let the engine cool"
      ],
      warnings: [
        "It may get very hot inside — that's normal",
        "If the heater doesn't blow hot air — there may be low coolant or air in the system",
        "This is a temporary measure, it doesn't fix the problem"
      ]
    },
    // ========================================
    // 7. Call a tow truck (critical situation)
    // ========================================
    {
      id: "tow_truck_overheat",
      title: "🚛 Call a tow truck (critical situation)",
      description: "If overheating is severe, there is a leak, the engine stalled, or you're on the highway — call a tow truck.",
      conditions: { symptom: ["smoke", "smell", "coolant_leak", "stalled"], location: ["highway", "road"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Safe delivery to service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights, place the emergency triangle",
        "If the engine stalled — do not try to restart it",
        "Call a tow truck (through insurance or paid service)",
        "Tell the operator: make, problem (overheating), exact location",
        "If on the highway — move behind the barrier",
        "During loading, watch to ensure the car is not damaged",
        "Go to a service center or home"
      ],
      warnings: [
        "Do not attempt to drive with an overheated engine — it will lead to expensive repairs",
        "If there's a coolant leak — do not top up until the engine has cooled",
        "When towing with a rope — remember that the brake booster may not work",
        "If there is smoke — do not open the hood until it has cooled down"
=======
        { id: "home", label: "🏠 Home/Garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road", tags: ["road", "traffic", "safety"] },
        { id: "highway", label: "🛣️ Highway", tags: ["highway", "speed", "danger"] }
      ]
    }
  ],
  solutions: [
    {
      id: "coolant_check",
      title: "🌡️ Check and refill coolant",
      description: "When overheating, check coolant level in radiator",
      conditions: {
        symptom: ["smoke"]
      },
      tags: ["cooling", "radiator", "urgent", "critical"],
      priority: "fast",
      reliability: "high",
      time_estimate: "10-15 min",
      steps: [
        "Stop and turn off engine",
        "Let engine cool for 15-20 minutes",
        "Don't open radiator on hot engine!",
        "Check coolant level in expansion tank",
        "If level is low — refill to normal level",
        "Check for leaks under the car"
      ],
      warnings: [
        "NEVER open radiator cap on hot engine — steam can burn you",
        "Use only recommended coolant type",
        "If fluid disappears quickly — there's a leak, repair needed"
>>>>>>> 92849c5936c3da4acab85528b91f11224f9f55d1
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoOverheatingDataEn = autoOverheatingDataEn;
