// === MODULE: AUTO (ENGLISH) ===
// All categories of car problems

// ============================================
// 1. WON'T START
// ============================================
const autoWontStartDataEn = {
  category: "wont_start",
  title: "🔌 Won't Start",
  description: "Diagnostics and engine starting problems",

  questions: [
    {
      id: "symptom",
      text: "What happens when you turn the key? (select all that apply)",
      type: "multi",
      options: [
        { id: "click", label: "🔊 One click / several clicks", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence (nothing happens)", tags: ["battery", "dead", "electrical"] },
        { id: "crank_slow", label: "🐢 Starter cranks slowly", tags: ["battery", "weak"] },
        { id: "crank_fast", label: "⚙️ Cranks normally but doesn't start", tags: ["fuel", "spark", "engine"] },
        { id: "dashboard_dark", label: "💡 Dashboard goes dark when trying", tags: ["battery", "connection"] },
        { id: "smell_gas", label: "👃 Smell of gasoline after attempt", tags: ["fuel", "flooded"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["public", "help"] },
        { id: "remote", label: "🌲 Far from the city", tags: ["remote", "no_help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "cables", label: "🔌 Jump-start cables", tags: ["jump_cables"] },
        { id: "multimeter", label: "📟 Multimeter / tester", tags: ["diagnostics"] },
        { id: "fuel_can", label: "⛽ Fuel can", tags: ["fuel"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "fuel_level",
      text: "Is there fuel in the tank?",
      type: "single",
      options: [
        { id: "has_fuel", label: "✅ Yes (gauge not on empty)", tags: ["fuel_yes"] },
        { id: "no_fuel", label: "❌ No (gauge on empty or light is on)", tags: ["fuel_no"] },
        { id: "unknown", label: "❓ Not sure", tags: ["fuel_unknown"] }
      ]
    },
    {
      id: "car_type",
      text: "What type of car do you have?",
      type: "single",
      options: [
        { id: "standard", label: "🚗 Standard passenger car (12V)", tags: ["standard"] },
        { id: "diesel", label: "🛻 Diesel", tags: ["diesel"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid"] }
      ]
    },
    {
      id: "immobilizer",
      text: "Is the immobilizer light flashing on the dashboard (key symbol)?",
      type: "single",
      options: [
        { id: "yes_blinking", label: "✅ Yes, flashing or on", tags: ["immobilizer"] },
        { id: "no", label: "❌ No, not flashing", tags: ["no_immobilizer"] },
        { id: "unknown", label: "❓ Don't know / can't see", tags: ["immobilizer_unknown"] }
      ]
    }
  ],

  solutions: [
    {
      id: "jump_start",
      title: "🔋 Jump-start from another car",
      description: "If the battery is dead — jump-start from a working car.",
      conditions: { symptom: ["click", "silence", "crank_slow"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Engine start",
      tags: ["battery", "jump", "electrical"],
      steps: [
        "Find a car with a working battery (same voltage)",
        "Position the cars close but not touching",
        "Turn off both cars (ignition, lights, all consumers)",
        "Connect cables: red (positive) to positive of your car, then to positive of donor",
        "Black (negative) — to negative of donor, other end to ground (unpainted metal) of your car",
        "Start the donor car, let it run for 2-3 minutes",
        "Try to start your car (no longer than 10 seconds)",
        "After starting, let it run for 10-15 minutes to charge",
        "Disconnect cables in reverse order: negative from ground, negative from donor, positive from donor, positive from your car"
      ],
      warnings: [
        "Don't touch terminals while the engine is running",
        "Watch polarity — incorrect connection can damage electronics",
        "If battery is smoking or has a smell — don't jump-start",
        "For diesel cars, thicker cables are needed (at least 16 mm²)"
      ]
    },
    {
      id: "check_immobilizer",
      title: "🔐 Check immobilizer",
      description: "If the key symbol is flashing — the immobilizer is blocking the start.",
      conditions: { immobilizer: ["yes_blinking"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2-5 min",
      yield_estimate: "Start unblocked",
      tags: ["immobilizer", "key", "security"],
      steps: [
        "Try locking and unlocking the car with the remote (resets the alarm)",
        "Check the key battery — if weak, the immobilizer may not read the code",
        "If you have a spare key — try starting with it",
        "Insert the key in the ignition, turn to ON, and wait 10 seconds (sometimes resets)",
        "If not helping — disconnect the battery terminal for 5 minutes (resets electronics), then reconnect",
        "If the problem persists — need a specialist (immobilizer diagnostics)"
      ],
      warnings: [
        "Don't try to break the immobilizer — it's a security system",
        "If the key is not reading — may need reprogramming by the dealer",
        "Disconnecting the battery may reset radio and clock settings"
      ]
    },
    {
      id: "add_fuel",
      title: "⛽ Add fuel",
      description: "If you ran out of fuel — add fuel from a can.",
      conditions: { fuel_level: ["no_fuel", "fuel_unknown"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Engine start",
      tags: ["fuel", "add", "basic"],
      steps: [
        "Make sure the fuel gauge is on empty or the light is on",
        "If you have a can — carefully pour fuel into the tank",
        "If not — call friends or roadside fuel delivery",
        "After adding: turn the ignition on for 5 seconds, off (prime the fuel system)",
        "Repeat 2-3 times, then try to start",
        "If the car doesn't start — possibly the fuel pump is faulty (need service)"
      ],
      warnings: [
        "Don't smoke while refueling!",
        "Don't pour fuel near open flame or sparks",
        "If the car stalled due to lack of fuel — the fuel system may be air-locked",
        "For diesel cars — manual priming may be needed"
      ]
    },
    {
      id: "check_fuses",
      title: "🔧 Check fuses",
      description: "Sometimes the problem is a blown fuse (starter, fuel pump, ECU).",
      conditions: { symptom: ["silence", "crank_fast"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "5-10 min",
      yield_estimate: "Fault fixed",
      tags: ["fuses", "electrical", "diagnostics"],
      steps: [
        "Find the fuse box (usually under the hood or under the steering column)",
        "On the cover, there is a diagram with fuse names",
        "Check: starter, fuel pump, ECU",
        "Pull out the fuse, check its integrity (the internal bridge should not be burnt)",
        "If blown — replace with the same rating (amps are indicated on the housing)",
        "If the new one blows immediately — there is a short circuit, need an electrician",
        "Also check the starter and fuel pump relays (can swap with a similar one nearby)"
      ],
      warnings: [
        "Don't install a higher-rated fuse — may cause a fire",
        "Check fuses with the ignition off",
        "If several fuses blow — there is a serious wiring issue"
      ]
    },
    {
      id: "clean_contacts",
      title: "🧽 Clean battery contacts",
      description: "Oxidized terminals are a common cause of poor contact.",
      conditions: { symptom: ["click", "silence", "crank_slow"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "5-10 min",
      yield_estimate: "Contact restored",
      tags: ["battery", "contacts", "cleaning"],
      steps: [
        "Disconnect battery terminals (first negative, then positive)",
        "Inspect terminals for white or green deposit (oxides)",
        "Clean terminals with a stiff wire brush or sandpaper",
        "Clean the contacts on the battery itself",
        "Apply a thin layer of grease or petroleum jelly (protection from oxidation)",
        "Reconnect terminals (first positive, then negative)",
        "Tighten terminals (don't over-tighten)",
        "Try to start the car"
      ],
      warnings: [
        "Don't touch terminals with metal objects — short circuit",
        "Don't over-tighten terminals — can damage the battery",
        "If the deposit is very strong — may need terminal replacement"
      ]
    },
    {
      id: "diesel_priming",
      title: "🛻 Priming the fuel system (diesel)",
      description: "For diesel cars, after refueling or filter replacement, priming is needed.",
      conditions: { car_type: ["diesel"], symptom: ["crank_fast"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "10-20 min",
      yield_estimate: "Engine start",
      tags: ["diesel", "priming", "fuel"],
      steps: [
        "Find the manual pump (usually on the fuel filter or near the high-pressure pump)",
        "Press the pump several times until you feel resistance (fuel has flowed)",
        "If there's no pump — use the ignition key: turn it on for 10 seconds, off, repeat 3-4 times",
        "If the system is air-locked — may need to crack a fitting on an injector and bleed (complex, call a specialist)",
        "After priming, try to start the car",
        "If it doesn't start — possibly the high-pressure pump is faulty (expensive)"
      ],
      warnings: [
        "Don't try to prime the system if you're not sure — can damage the pump",
        "Avoid getting fuel on hot parts",
        "If the diesel doesn't start, don't crank the starter for long — you'll drain the battery"
      ]
    },
    {
      id: "tow_truck_start",
      title: "🚛 Call a tow truck or tow",
      description: "If nothing helps — call a tow truck.",
      conditions: { symptom: ["crank_fast", "click", "silence"], location: ["road", "parking", "remote"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights and place the emergency triangle",
        "Call your insurance company (is towing included in the policy?)",
        "If not — call a paid towing service (compare prices)",
        "Tell the operator: make, problem (won't start), exact location",
        "If on the highway — move behind the barrier until help arrives",
        "During loading, watch to ensure the bumper is not damaged",
        "If possible — towing on a rope (only MT, no more than 50 km/h)"
      ],
      warnings: [
        "Don't try to drive a faulty car",
        "When towing with a rope — remember that the brake booster may not work",
        "If the car has AT — towing only on a tow truck (or with the driveshaft disconnected)",
        "Keep the towing receipt — may be useful for insurance"
      ]
    }
  ]
};

// ============================================
// 2. OVERHEATING
// ============================================
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
        { id: "temp_high", label: "🌡️ Temperature gauge in the red zone", tags: ["temp_high", "alert"] },
        { id: "smoke", label: "💨 Steam / smoke from under the hood", tags: ["smoke", "steam", "danger"] },
        { id: "smell", label: "👃 Sweet smell (antifreeze) / burnt oil", tags: ["smell", "coolant"] },
        { id: "warning_light", label: "⚠️ Overheat warning light came on", tags: ["warning", "check"] },
        { id: "steam_radiator", label: "🌫️ Steam from radiator or expansion tank", tags: ["steam", "pressure"] },
        { id: "loss_power", label: "🐢 Loss of power, engine misfiring", tags: ["power_loss", "engine"] },
        { id: "coolant_leak", label: "💧 Puddle under the car (green/red fluid)", tags: ["leak", "coolant"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools"] },
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
      ]
    }
  ]
};

// ============================================
// 3. FLAT TIRE
// ============================================
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
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "danger"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["public", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "jack", label: "🛠️ Jack", tags: ["jack"] },
        { id: "spare", label: "🛞 Spare tire (full size)", tags: ["spare_full"] },
        { id: "spare_temp", label: "🛞 Spare tire (donut)", tags: ["spare_temp"] },
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
    }
  ],

  solutions: [
    {
      id: "tire_change",
      title: "🛞 Tire change (spare tire)",
      description: "The most reliable solution — install the spare tire.",
      conditions: { symptom: ["flat", "blowout", "sidewall_damage", "bulge"], has_tools: ["jack", "spare_full", "spare_temp"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Working spare tire installed",
      tags: ["tire", "wheel", "basic", "change"],
      steps: [
        "Stop on a flat surface, turn on hazard lights",
        "Engage first gear (MT) or Park (AT), apply the handbrake",
        "Place wheel chocks behind the wheels",
        "Loosen the lug nuts on the damaged wheel (1/2 turn)",
        "Place the jack, lift the car",
        "Fully remove the lug nuts and take off the wheel",
        "Install the spare tire, hand-tighten the lug nuts",
        "Lower the car, tighten the lug nuts in a star pattern",
        "Check the pressure in the spare tire",
        "Drive at a maximum speed of 80 km/h to the nearest tire shop"
      ],
      warnings: [
        "NEVER go under a car supported only by a jack",
        "Tighten lug nuts with the correct torque",
        "Temporary spare (donut) — max speed 80 km/h, max distance 150 km"
      ]
    },
    {
      id: "tire_repair_kit",
      title: "🧰 Tire plug repair (without removing the tire)",
      description: "If the damage is minor (nail) — you can repair it with a plug on the spot.",
      conditions: { symptom: ["flat", "slow_leak"], has_tools: ["repair_kit", "compressor"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "10-20 min",
      yield_estimate: "Tire sealed temporarily",
      tags: ["repair", "plug", "emergency"],
      steps: [
        "Find the puncture, remove the foreign object",
        "Widen the hole with the special reamer tool",
        "Insert the plug into the needle, apply the special glue",
        "Insert the needle with the plug into the hole and push it in",
        "Pull out the needle, trim the excess plug",
        "Inflate the tire to normal pressure",
        "Check for leaks with soapy water"
      ],
      warnings: [
        "Plug repair is a temporary solution — drive no more than 100 km",
        "DO NOT use this method for sidewall cuts or bulges",
        "If the hole is larger than 6 mm — the repair won't hold"
      ]
    },
    {
      id: "inflate_tire",
      title: "💨 Tire inflation (if slow leak)",
      description: "If the tire is slowly deflating — inflate it and drive to a tire shop.",
      conditions: { symptom: ["slow_leak"], has_tools: ["compressor"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "2-5 min",
      yield_estimate: "Ability to drive to a service center",
      tags: ["inflate", "pressure", "emergency"],
      steps: [
        "Connect the compressor to the tire valve",
        "Inflate to 2.0-2.5 bar (as per the manual)",
        "If no compressor — use a manual pump",
        "If the tire deflates quickly — inflate to maximum and drive immediately to a tire shop"
      ],
      warnings: [
        "Do not overinflate beyond the maximum pressure",
        "If the tire is severely damaged — inflation won't help"
      ]
    },
    {
      id: "tire_sealant",
      title: "🧴 Using tire sealant (temporary)",
      description: "If the puncture is small — pour sealant through the valve.",
      conditions: { symptom: ["flat", "slow_leak"], has_tools: ["compressor"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "5-10 min",
      yield_estimate: "Temporary seal of the puncture",
      tags: ["sealant", "temporary", "emergency"],
      steps: [
        "Buy a tire sealant spray can",
        "Remove the foreign object from the tire",
        "Shake the can, connect the hose to the valve",
        "Inject the sealant, inflate the tire",
        "Drive 500-1000 meters to distribute the sealant",
        "Drive to the nearest tire shop (max 100 km)"
      ],
      warnings: [
        "Sealant only works for tread punctures",
        "After using sealant, the tire needs cleaning or replacement",
        "Do not store the can in high temperatures"
      ]
    },
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
        "Check the pressure in all tires",
        "Inspect tires for cuts, bulges, uneven wear",
        "Check tread depth (should be at least 1.6 mm)",
        "Clean tires of stones and debris",
        "If there is uneven wear — check the wheel alignment"
      ],
      warnings: [
        "Underinflated tires increase fuel consumption",
        "Overinflated tires reduce traction",
        "Tread depth less than 1.6 mm is dangerous"
      ]
    },
    {
      id: "emergency_tire_help",
      title: "🆘 Emergency roadside help (no spare tire)",
      description: "If you don't have a spare tire or repair kit — call for help.",
      conditions: { has_tools: ["nothing"], location: ["road", "highway"] },
      priority: "fast",
      reliability: "low",
      time_estimate: "5-30 min",
      yield_estimate: "Help called",
      tags: ["emergency", "help", "call"],
      steps: [
        "Turn on hazard lights, place the emergency triangle",
        "Call your insurance company (is roadside assistance included?)",
        "If not available — call a tow truck",
        "Call friends who can bring a spare tire",
        "If on the highway — move behind the barrier"
      ],
      warnings: [
        "Do not drive on a flat tire — it will damage the wheel",
        "Do not stand on the roadway"
      ]
    },
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
        "Turn on hazard lights, place the emergency triangle",
        "Call your insurance company (is towing included?)",
        "If not — call a towing service via 2GIS or Yandex",
        "Tell the operator: make, damage, address",
        "If on the highway — move behind the barrier",
        "Keep the towing receipt"
      ],
      warnings: [
        "Do not drive on a flat tire",
        "If on the highway — do not wait in the car"
      ]
    }
  ]
};

// ============================================
// 4. BRAKES
// ============================================
const autoBrakesDataEn = {
  category: "brakes",
  title: "🛑 Brake Problems",
  description: "Diagnostics and solutions for critical brake system issues",

  questions: [
    {
      id: "symptom",
      text: "What symptoms do you notice? (select all that apply)",
      type: "multi",
      options: [
        { id: "soft_pedal", label: "🦶 Brake pedal is soft / sinks to the floor", tags: ["soft_pedal", "air", "fluid"] },
        { id: "squeal", label: "🔊 Squealing or screeching when braking", tags: ["squeal", "pads", "wear"] },
        { id: "vibration", label: "📳 Vibration in pedal or steering wheel when braking", tags: ["vibration", "discs", "warp"] },
        { id: "pulls", label: "🚗 Car pulls to one side when braking", tags: ["pulls", "caliper", "uneven"] },
        { id: "burning_smell", label: "👃 Burning smell (plastic / rubber)", tags: ["burning", "overheat", "caliper"] },
        { id: "warning_light", label: "💡 Brake warning light on dashboard", tags: ["warning", "abs", "fluid"] },
        { id: "long_stop", label: "📏 Increased stopping distance", tags: ["long_stop", "pads", "fluid"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "danger"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["parking", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "jack", label: "🛠️ Jack", tags: ["jack"] },
        { id: "tools", label: "🔧 Wrench / socket set", tags: ["tools"] },
        { id: "brake_fluid", label: "🧴 Brake fluid", tags: ["fluid"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "car_type",
      text: "What type of car do you have?",
      type: "single",
      options: [
        { id: "standard", label: "🚗 Standard passenger car", tags: ["standard"] },
        { id: "suv", label: "🚙 SUV / off-road", tags: ["suv", "heavy"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid", "electric"] }
      ]
    },
    {
      id: "brake_light",
      text: "Is the brake system warning light on?",
      type: "single",
      options: [
        { id: "yes_red", label: "🔴 Yes, red (urgent)", tags: ["red_light", "emergency"] },
        { id: "yes_yellow", label: "🟡 Yes, yellow (ABS)", tags: ["yellow_light", "abs"] },
        { id: "no", label: "🚫 No, not on", tags: ["no_light"] }
      ]
    }
  ],

  solutions: [
    {
      id: "brake_fluid_check",
      title: "🧴 Brake fluid check and top-up",
      description: "Low fluid level is a common cause of a soft pedal.",
      conditions: { symptom: ["soft_pedal", "long_stop", "warning_light"], brake_light: ["red_light", "yellow_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Brake function restored",
      tags: ["fluid", "check", "top_up"],
      steps: [
        "Open the hood and locate the brake fluid reservoir",
        "Check the level: between MIN and MAX",
        "If below MIN — top up with brake fluid (DOT 4 / DOT 5.1)",
        "Inspect the reservoir and hoses for leaks",
        "If the pedal is still soft — air may be in the system (needs bleeding)"
      ],
      warnings: [
        "DO NOT use fluid from an open bottle",
        "DO NOT mix DOT 4 and DOT 5 (they are incompatible)",
        "If the level dropped suddenly — there is a leak, do not drive"
      ]
    },
    {
      id: "brake_pads_replace",
      title: "🔧 Brake pad replacement",
      description: "Squealing and increased stopping distance are signs of worn pads.",
      conditions: { symptom: ["squeal", "long_stop"], location: ["home", "parking"], has_tools: ["jack", "tools"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-2 hours",
      yield_estimate: "New pads, confident braking",
      tags: ["pads", "replace", "brakes"],
      steps: [
        "Jack up the car, remove the wheel",
        "Unscrew the caliper guide pins",
        "Remove the old pads, install new ones",
        "Lubricate the caliper guide pins",
        "Reassemble the caliper, pump the brakes",
        "Break in the pads: 50-100 km without hard braking"
      ],
      warnings: [
        "DO NOT use greasy or oily hands",
        "DO NOT brake hard for the first 50-100 km",
        "Replace pads on both wheels of the same axle"
      ]
    },
    {
      id: "bleed_brakes",
      title: "🩸 Brake bleeding (removing air)",
      description: "Air in the system causes a soft pedal. Bleeding removes the air.",
      conditions: { symptom: ["soft_pedal"], location: ["home", "parking"], has_tools: ["tools"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "30-60 min",
      yield_estimate: "Firm pedal",
      tags: ["bleed", "air", "fluid"],
      steps: [
        "Check the fluid level (should be at MAX)",
        "Start with the right rear wheel",
        "One person pumps the pedal, another opens the bleeder screw",
        "Repeat until clean fluid without bubbles comes out",
        "Repeat for each wheel",
        "Keep topping up fluid"
      ],
      warnings: [
        "DO NOT let the fluid drop below MIN",
        "DO NOT bleed if there are leaks"
      ]
    },
    {
      id: "engine_brake",
      title: "⚙️ Engine braking (emergency)",
      description: "If brakes fail on the highway, use engine compression and handbrake to stop.",
      conditions: { symptom: ["soft_pedal", "long_stop"], location: ["highway"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "0 min (immediate)",
      yield_estimate: "Vehicle stopped",
      tags: ["emergency", "engine_brake", "survival"],
      steps: [
        "DO NOT turn off the ignition",
        "Downshift (MT — 4th → 3rd → 2nd; AT — manual mode)",
        "Smoothly release the clutch",
        "Simultaneously use the parking brake — gently, in pulses",
        "If possible, steer the car uphill or into a field"
      ],
      warnings: [
        "DO NOT turn off the ignition — steering will lock",
        "DO NOT yank the handbrake abruptly — the car may spin"
      ]
    },
    {
      id: "abs_diagnostics",
      title: "💡 ABS diagnostics (yellow light)",
      description: "A yellow ABS warning light indicates a problem with the anti-lock braking system.",
      conditions: { symptom: ["warning_light"], brake_light: ["yellow_light"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-30 min",
      yield_estimate: "Fault identified",
      tags: ["abs", "diagnostics", "electronics"],
      steps: [
        "Check the ABS fuses in the fuse box",
        "Inspect wheel speed sensors — they may be dirty or damaged",
        "Check sensor wiring",
        "If you have an OBD2 scanner — read fault codes",
        "If ABS engages too often or not at all — visit a service center"
      ],
      warnings: [
        "Do not ignore the yellow light",
        "If the RED brake light is on — DO NOT drive"
      ]
    },
    {
      id: "visual_inspection",
      title: "🔍 Visual inspection of brakes",
      description: "Check discs, calipers, and hoses for damage.",
      conditions: { symptom: ["vibration", "pulls", "burning_smell"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "Fault identified",
      tags: ["inspection", "discs", "calipers"],
      steps: [
        "Jack up the car, remove the wheel",
        "Inspect the brake disc (scratches, cracks, blue tint)",
        "Check the caliper (is it sticking?)",
        "Inspect the brake hoses (cracks, bulges)",
        "Assess pad wear"
      ],
      warnings: [
        "Do not touch hot discs",
        "Brake fluid is corrosive — avoid contact with paint"
      ]
    },
    {
      id: "tow_truck_brakes",
      title: "🚛 Calling a tow truck (safe option)",
      description: "If brakes are critically faulty, driving is risky.",
      conditions: { symptom: ["soft_pedal", "burning_smell", "warning_light"], brake_light: ["red_light"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights, place the emergency triangle",
        "Call a tow truck (through insurance or paid service)",
        "Tell the operator: make, problem (brake failure)",
        "During loading, ask them to be careful",
        "Go to a service center or home"
      ],
      warnings: [
        "Do not attempt to drive with critical brake failure",
        "Towing with a rope with faulty brakes is DANGEROUS"
      ]
    }
  ]
};

// ============================================
// 5. DEAD BATTERY
// ============================================
const autoBatteryDataEn = {
  category: "battery",
  title: "🔋 Dead Battery",
  description: "Battery problems: diagnostics, jump-start, replacement",

  questions: [
    {
      id: "symptom",
      text: "What symptoms are you experiencing? (select all that apply)",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Clicking sound when turning the key", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Complete silence (nothing happens)", tags: ["battery", "dead", "electrical"] },
        { id: "slow_crank", label: "🐢 Starter cranks slowly", tags: ["battery", "weak", "starter"] },
        { id: "lights_dark", label: "💡 Dim headlights / dashboard lights", tags: ["battery", "low_voltage"] },
        { id: "smell", label: "👃 Smell of sulfur / rotten eggs", tags: ["battery", "danger", "replace"] },
        { id: "swollen", label: "📦 Battery is swollen (deformed)", tags: ["battery", "danger", "replace"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools"] },
        { id: "road", label: "🛣️ On the road (highway)", tags: ["road", "traffic"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["public", "help"] },
        { id: "remote", label: "🌲 Far from the city", tags: ["remote", "no_help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "cables", label: "🔌 Jump-start cables", tags: ["jump_cables"] },
        { id: "voltmeter", label: "📟 Multimeter / tester", tags: ["diagnostics"] },
        { id: "charger", label: "🔋 Battery charger (220V)", tags: ["charger"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "time_season",
      text: "What season is it?",
      type: "single",
      options: [
        { id: "summer", label: "☀️ Summer / warm", tags: ["warm"] },
        { id: "winter", label: "❄️ Winter / freezing", tags: ["cold"] },
        { id: "season_other", label: "🌤️ Spring / autumn", tags: ["moderate"] }
      ]
    },
    {
      id: "car_type",
      text: "What type of car do you have?",
      type: "single",
      options: [
        { id: "standard", label: "🚗 Standard passenger car (12V)", tags: ["standard"] },
        { id: "diesel", label: "🛻 Diesel (heavy start)", tags: ["diesel"] },
        { id: "hybrid", label: "⚡ Hybrid / electric", tags: ["hybrid"] }
      ]
    }
  ],

  solutions: [
    {
      id: "jump_start",
      title: "🔋 Jump-start from another car",
      description: "The fastest way to start the car if there is another car and cables available.",
      conditions: { symptom: ["click", "silence", "slow_crank"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Engine start",
      tags: ["battery", "jump", "electrical"],
      steps: [
        "Find a car with a working battery",
        "Position the cars so the hoods are close",
        "Turn off both cars",
        "Connect the cables: positive to positive, negative to negative",
        "Start the donor car",
        "Try to start your car",
        "After starting, let it run for 10-15 minutes"
      ],
      warnings: [
        "Don't touch terminals while the engine is running",
        "Watch polarity",
        "If the battery is smoking — don't jump-start"
      ]
    },
    {
      id: "charger_220v",
      title: "🔌 Charging the battery from 220V outlet",
      description: "If you have a charger and access to an outlet — the best way.",
      conditions: { has_tools: ["charger"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "4-8 hours",
      yield_estimate: "Fully charged battery",
      tags: ["battery", "charger", "220v"],
      steps: [
        "Disconnect the battery from the car",
        "Clean the terminals from oxides",
        "Connect the charger",
        "Plug it into the 220V outlet",
        "Select the mode (10-15% of capacity)",
        "Charging time: 4-8 hours",
        "After charging, disconnect the device"
      ],
      warnings: [
        "DO NOT leave unattended overnight",
        "DO NOT charge a deeply discharged battery with a high current"
      ]
    },
    {
      id: "diagnostics_voltmeter",
      title: "📟 Battery diagnostics with a multimeter",
      description: "A multimeter helps determine the battery's condition accurately.",
      conditions: { has_tools: ["voltmeter"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Accurate diagnosis",
      tags: ["diagnostics", "voltmeter", "testing"],
      steps: [
        "Measure the voltage on the terminals (engine off)",
        "Normal: 12.5-12.9V (fully charged)",
        "Start the engine and measure the voltage (alternator)",
        "Normal: 13.8-14.4V (alternator is charging)",
        "Measure current leakage (normal: less than 50 mA)"
      ],
      warnings: [
        "DO NOT take measurements with the ignition on",
        "When measuring leakage current — wait 10 minutes"
      ]
    },
    {
      id: "emergency_start_no_tools",
      title: "🚀 Emergency start without cables",
      description: "If no cables — try starting with a push or tow.",
      conditions: { location: ["road", "parking"], has_tools: ["nothing"], car_type: ["standard"] },
      priority: "medium",
      reliability: "low",
      time_estimate: "10-30 min",
      yield_estimate: "Engine start",
      tags: ["emergency", "push_start", "tow"],
      steps: [
        "For MT: engage 2nd gear, press the clutch",
        "Ask 2-3 people to push the car",
        "When it reaches speed — smoothly release the clutch",
        "For AT: this method DOES NOT WORK (only tow)"
      ],
      warnings: [
        "This method DOES NOT WORK on AT",
        "Towing is a dangerous method"
      ]
    },
    {
      id: "replace_battery",
      title: "🔄 Battery replacement",
      description: "If the battery is old, keeps discharging, or is swollen — it needs to be replaced.",
      conditions: { symptom: ["smell", "swollen", "lights_dark"], location: ["home", "parking"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "20-40 min",
      yield_estimate: "New battery",
      tags: ["battery", "replace", "new"],
      steps: [
        "Buy a new battery with the same specifications",
        "Disconnect the terminals (first negative, then positive)",
        "Unscrew the hold-down, remove the old battery",
        "Clean the contacts on the car",
        "Install the new battery, secure it",
        "Connect the terminals (first positive, then negative)",
        "Dispose of the old battery at a collection point"
      ],
      warnings: [
        "DO NOT mix up the polarity",
        "DO NOT throw the old battery in the trash"
      ]
    },
    {
      id: "battery_maintenance",
      title: "🧽 Battery maintenance",
      description: "Extend the life of the battery with simple maintenance.",
      conditions: { location: ["home", "parking"], time_season: ["warm", "moderate"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-60 min",
      yield_estimate: "Extended battery life",
      tags: ["battery", "maintenance", "long_term"],
      steps: [
        "Clean the terminals from oxides",
        "Check the electrolyte level (if serviceable)",
        "If necessary, add distilled water",
        "Charge the battery with a charger",
        "In severe frost — insulate the battery"
      ],
      warnings: [
        "DO NOT fill above the 'max' mark",
        "DO NOT use regular water — only distilled"
      ]
    },
    {
      id: "tow_truck",
      title: "🚛 Calling a tow truck",
      description: "If nothing helps — call a tow truck.",
      conditions: { location: ["road", "remote"], has_tools: ["nothing"], car_type: ["diesel", "hybrid"] },
      priority: "slow",
      reliability: "medium",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "emergency", "safe"],
      steps: [
        "Turn on hazard lights",
        "Move to a safe distance",
        "Call your insurance company (if towing is included)",
        "If not — call a paid towing service",
        "Tell the operator: make, problem"
      ],
      warnings: [
        "DO NOT wait on the road",
        "Towing at night is more expensive"
      ]
    }
  ]
};

// ============================================
// 6. FLUID LEAK
// ============================================
const autoLeakDataEn = {
  category: "leak",
  title: "💧 Fluid Leak",
  description: "Diagnostics and solutions for vehicle fluid leaks",

  questions: [
    {
      id: "symptom",
      text: "What do you notice? (select all that apply)",
      type: "multi",
      options: [
        { id: "puddle", label: "💧 Puddle under the car", tags: ["puddle", "leak"] },
        { id: "low_level", label: "📉 Fluid level dropped (dashboard warning)", tags: ["low_level", "warning"] },
        { id: "warning_light", label: "💡 Warning light came on", tags: ["warning", "alert"] },
        { id: "smell", label: "👃 Smell (burnt oil, sweet antifreeze, gasoline)", tags: ["smell", "diagnostic"] },
        { id: "overheat", label: "🌡️ Engine overheating", tags: ["overheat", "coolant"] },
        { id: "smoke", label: "💨 Smoke / steam from under the hood", tags: ["smoke", "overheat"] },
        { id: "poor_brakes", label: "🛑 Brake pedal soft / sinks to the floor", tags: ["brake_fluid", "danger"] }
      ]
    },
    {
      id: "fluid_type",
      text: "What fluid do you think is leaking?",
      options: [
        { id: "oil", label: "🛢️ Engine oil (dark, oily)", tags: ["oil", "engine"] },
        { id: "coolant", label: "🧊 Coolant / antifreeze", tags: ["coolant", "antifreeze"] },
        { id: "brake_fluid", label: "🛑 Brake fluid (light, oily, corrosive)", tags: ["brake_fluid", "critical"] },
        { id: "fuel", label: "⛽ Fuel (gasoline/diesel, strong smell)", tags: ["fuel", "danger"] },
        { id: "steering_fluid", label: "🔄 Power steering fluid (red, oily)", tags: ["steering", "power_steering"] },
        { id: "water", label: "💧 Water (condensation)", tags: ["water", "normal"] },
        { id: "unknown", label: "❓ Not sure", tags: ["unknown", "diagnostic"] }
      ]
    },
    {
      id: "fluid_color",
      text: "What color is the fluid?",
      condition: { symptom: ["puddle"] },
      options: [
        { id: "brown_black", label: "🟫 Brown / black (oil)", tags: ["brown", "oil"] },
        { id: "red_blue", label: "🔴 Red / blue (antifreeze, PS fluid)", tags: ["red", "coolant"] },
        { id: "green_yellow", label: "🟢 Green / yellow (antifreeze)", tags: ["green", "coolant"] },
        { id: "clear", label: "💧 Clear (water)", tags: ["clear", "water"] },
        { id: "yellow_gold", label: "🟡 Yellow / gold (brake fluid)", tags: ["yellow", "brake_fluid"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Home / garage", tags: ["safe", "tools"] },
        { id: "road", label: "🛣️ On the road (city)", tags: ["road", "traffic"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "danger"] },
        { id: "parking", label: "🅿️ Parking lot", tags: ["parking", "help"] }
      ]
    },
    {
      id: "has_tools",
      text: "What do you have with you?",
      type: "multi",
      options: [
        { id: "fluid", label: "🧴 Fluid (oil, antifreeze, brake fluid)", tags: ["fluid"] },
        { id: "funnel", label: "🔧 Funnel", tags: ["funnel"] },
        { id: "gloves", label: "🧤 Gloves", tags: ["gloves"] },
        { id: "nothing", label: "❌ None of the above", tags: ["no_tools"] }
      ]
    },
    {
      id: "engine_temp",
      text: "What is the engine temperature?",
      options: [
        { id: "normal", label: "🌡️ Normal (gauge in the middle)", tags: ["normal_temp"] },
        { id: "hot", label: "🌡️ Hot (gauge near the red zone)", tags: ["hot_temp", "overheat"] },
        { id: "overheated", label: "🌡️ Overheated (red zone)", tags: ["overheated", "emergency"] }
      ]
    }
  ],

  solutions: [
    {
      id: "identify_fluid",
      title: "🔍 Identifying the fluid leak by color",
      description: "The color and consistency will help you understand what exactly is leaking.",
      conditions: { symptom: ["puddle"], fluid_color: ["brown_black", "red_blue", "green_yellow", "clear", "yellow_gold"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "2-5 min",
      yield_estimate: "Diagnosis",
      tags: ["identification", "fluid", "diagnostic"],
      steps: [
        "Place white paper under the leak",
        "Determine the fluid color",
        "Engine oil (brown/black) — engine leak",
        "Coolant (red/green) — cooling system",
        "Brake fluid (light yellow) — brake system",
        "Fuel (gasoline/diesel) — fuel system",
        "Water (clear) — condensation (normal)"
      ],
      warnings: [
        "Do not touch fluids without gloves",
        "Brake fluid damages paint",
        "If you smell gasoline — do not smoke"
      ]
    },
    {
      id: "oil_check",
      title: "🛢️ Check and top up engine oil",
      description: "If oil is leaking or the level has dropped — check and top up.",
      conditions: { symptom: ["low_level", "warning_light"], fluid_type: ["oil"], fluid_color: ["brown_black"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal oil level",
      tags: ["oil", "check", "top_up"],
      steps: [
        "Turn off the engine, wait 5-10 minutes",
        "Check the level with the dipstick (between MIN and MAX)",
        "If below MIN — add oil through the fill port",
        "Only use the recommended oil type"
      ],
      warnings: [
        "Do not overfill",
        "If oil is leaking quickly — do not drive"
      ]
    },
    {
      id: "coolant_check",
      title: "🧊 Check coolant level",
      description: "If the engine is overheating — check the coolant level.",
      conditions: { symptom: ["overheat", "smoke"], fluid_type: ["coolant"], engine_temp: ["hot", "overheated"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Normal coolant level",
      tags: ["coolant", "antifreeze", "overheat"],
      steps: [
        "Let the engine cool down for at least 30 minutes",
        "Check the level in the expansion tank (between MIN and MAX)",
        "If below MIN — top up with coolant",
        "If no coolant — top up with distilled water (as a last resort)"
      ],
      warnings: [
        "DO NOT open the radiator on a hot engine",
        "DO NOT mix different colors of antifreeze"
      ]
    },
    {
      id: "fuel_leak",
      title: "⛽ Fuel leak — DO NOT IGNORE!",
      description: "A fuel leak is very dangerous! Take immediate action.",
      conditions: { fluid_type: ["fuel"], symptom: ["smell", "puddle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Safety + call for help",
      tags: ["fuel", "danger", "emergency"],
      steps: [
        "DO NOT smoke! DO NOT turn on the ignition!",
        "DO NOT start the engine!",
        "Move to a safe distance",
        "Call a tow truck (do not attempt to drive!)",
        "If the leak is large — call the emergency services (112)"
      ],
      warnings: [
        "Fuel is highly flammable!",
        "Do not attempt to start the car"
      ]
    },
    {
      id: "brake_fluid_leak",
      title: "🛑 Brake fluid leak — DO NOT DRIVE!",
      description: "Brake fluid is critical for safety. A leak is dangerous.",
      conditions: { fluid_type: ["brake_fluid"], symptom: ["poor_brakes", "warning_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 min",
      yield_estimate: "Tow truck call",
      tags: ["brake_fluid", "danger", "critical"],
      steps: [
        "DO NOT attempt to drive!",
        "Turn on hazard lights",
        "Check the fluid level in the reservoir",
        "Call a tow truck"
      ],
      warnings: [
        "If the brake pedal sinks — DO NOT DRIVE",
        "Do not mix DOT 4 and DOT 5"
      ]
    },
    {
      id: "power_steering_leak",
      title: "🔄 Power steering fluid leak",
      description: "If the steering becomes stiff — check the power steering.",
      conditions: { fluid_type: ["steering_fluid"], fluid_color: ["red_blue"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "10-15 min",
      yield_estimate: "Until the leak is fixed",
      tags: ["steering", "power_steering", "fluid"],
      steps: [
        "Check the power steering fluid level in the reservoir",
        "If low — top up with the recommended fluid",
        "Inspect hoses for leaks",
        "If the steering is stiff — do not drive long distances"
      ],
      warnings: [
        "Do not drive without power steering fluid — damage to the rack",
        "Power steering fluid is often red"
      ]
    },
    {
      id: "ac_condensation",
      title: "💧 AC condensation — this is normal!",
      description: "If there is clear water under the car — it's condensation.",
      conditions: { fluid_type: ["water"], fluid_color: ["clear"], symptom: ["puddle"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1 min",
      yield_estimate: "Peace of mind",
      tags: ["water", "normal", "ac"],
      steps: [
        "Make sure the fluid is clear and odorless",
        "Check that the puddle is under the front of the car (where the AC is)",
        "If the water is clean — it's AC condensation (normal)",
        "You can continue driving"
      ],
      warnings: [
        "If the water is not clear — it's a leak",
        "If the AC hasn't been running — there may be no water"
      ]
    }
  ]
};

// ============================================
// 7. ACCIDENT
// ============================================
const autoDtpDataEn = {
  category: "dtp",
  title: "🚨 Accident / Crash",
  description: "Actions in case of a traffic accident",

  questions: [
    {
      id: "severity",
      text: "What is the severity of the accident?",
      type: "single",
      options: [
        { id: "minor", label: "📝 Minor (bumper damage)", tags: ["minor", "paperwork"] },
        { id: "major", label: "🚨 Severe (there are injuries)", tags: ["major", "injury", "emergency"] },
        { id: "blocked", label: "🚧 Road is blocked", tags: ["blocked", "traffic"] },
        { id: "hit_run", label: "🏃 At-fault driver fled", tags: ["hit_run", "unknown"] },
        { id: "dispute", label: "⚖️ Dispute about fault", tags: ["dispute", "lawyer"] }
      ]
    },
    {
      id: "injuries",
      text: "Are there any injured people?",
      condition: { severity: ["major"] },
      options: [
        { id: "injuries_severe", label: "Severe injuries (need ambulance)", tags: ["severe", "ambulance"] },
        { id: "injuries_light", label: "Minor injuries", tags: ["light", "first_aid"] },
        { id: "no_injuries", label: "No injuries", tags: ["none"] }
      ]
    },
    {
      id: "location",
      text: "Where are you?",
      type: "single",
      options: [
        { id: "city", label: "🏙️ In the city", tags: ["city", "police"] },
        { id: "highway", label: "🛣️ On the highway", tags: ["highway", "gai"] },
        { id: "parking", label: "🅿️ In a parking lot", tags: ["parking", "minor"] },
        { id: "remote", label: "🌲 Far from the city", tags: ["remote", "help"] }
      ]
    },
    {
      id: "has_documents",
      text: "What documents do you and the other driver have?",
      options: [
        { id: "full", label: "All: OSAGO, license, vehicle registration", tags: ["full", "complete"] },
        { id: "partial", label: "Partial", tags: ["partial", "incomplete"] },
        { id: "none", label: "The at-fault driver has no documents", tags: ["none", "missing"] }
      ]
    },
    {
      id: "has_witnesses",
      text: "Are there any witnesses to the accident?",
      options: [
        { id: "witness_yes", label: "Yes (contacts recorded)", tags: ["witness_yes"] },
        { id: "witness_no", label: "No", tags: ["witness_no"] },
        { id: "video", label: "There is video footage", tags: ["video"] }
      ]
    },
    {
      id: "car_drivable",
      text: "Is the car drivable?",
      options: [
        { id: "drivable", label: "Yes, can drive", tags: ["drivable"] },
        { id: "not_drivable", label: "No, needs a tow truck", tags: ["not_drivable", "tow"] },
        { id: "unsafe", label: "Drivable but unsafe", tags: ["unsafe"] }
      ]
    }
  ],

  solutions: [
    {
      id: "emergency_call",
      title: "📞 Calling emergency services for a severe accident",
      description: "In a severe accident with injuries, IMMEDIATELY call an ambulance and the police.",
      conditions: { severity: ["major"], injuries: ["injuries_severe", "injuries_light"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1-2 min",
      yield_estimate: "Ambulance and police arrive",
      tags: ["emergency", "critical", "fast"],
      steps: [
        "Turn on hazard lights",
        "Call an ambulance: 103 or 112 — FIRST STEP",
        "Call the police: 102 or 112",
        "Tell the exact location",
        "Do not move injured people",
        "Provide first aid if possible"
      ],
      warnings: [
        "If there is a risk of fire — evacuate",
        "Do not touch injured people unnecessarily",
        "Do not leave the scene of the accident"
      ]
    },
    {
      id: "minor_accident",
      title: "📝 Minor accident (europrotocol)",
      description: "For a minor accident without injuries and no fault dispute — fill out the europrotocol.",
      conditions: { severity: ["minor"], has_documents: ["full"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 min",
      yield_estimate: "Europrotocol + OSAGO payout",
      tags: ["paperwork", "europrotocol", "insurance"],
      steps: [
        "Turn on hazard lights, place the emergency triangle",
        "Take photos from different angles",
        "Fill out the europrotocol (paper or via the app)",
        "Both drivers sign",
        "Within 5 days, submit a claim to your insurance company"
      ],
      warnings: [
        "Do not leave the scene before completing the protocol",
        "If you have doubts about fault — call the police",
        "If the at-fault driver has no OSAGO — call the police"
      ]
    },
    {
      id: "gibdd_call",
      title: "👮 Call the police for a fault dispute",
      description: "If there is a dispute about fault — call the traffic police.",
      conditions: { severity: ["dispute"], has_documents: ["partial", "none"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "1-3 hours",
      yield_estimate: "Police certificate",
      tags: ["gibdd", "police", "dispute"],
      steps: [
        "Call the traffic police: 102 or 112",
        "Do not move the cars until they arrive",
        "Take photos of everything before they arrive",
        "Record witness contacts",
        "Get copies of all documents"
      ],
      warnings: [
        "Do not leave the scene of the accident",
        "Do not admit fault verbally",
        "Do not sign documents without reading"
      ]
    },
    {
      id: "hit_and_run",
      title: "🏃 Hit and run — at-fault driver fled",
      description: "If the at-fault driver fled — act quickly.",
      conditions: { severity: ["hit_run"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "1-6 months",
      yield_estimate: "Compensation through court",
      tags: ["hit_run", "unknown", "police"],
      steps: [
        "Memorize and record the license plate",
        "Call the traffic police (102)",
        "Record witness contacts",
        "Obtain an accident certificate",
        "File a claim with your insurance company"
      ],
      warnings: [
        "If you didn't record the plate — chances are minimal",
        "DO NOT try to chase the at-fault driver"
      ]
    },
    {
      id: "evidence_collection",
      title: "📸 Collecting evidence for insurance",
      description: "Properly collected evidence is the key to a quick payout.",
      conditions: { severity: ["minor", "dispute"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10-20 min",
      yield_estimate: "Complete package of documents",
      tags: ["evidence", "insurance", "photo"],
      steps: [
        "Take photos from four sides",
        "Photograph license plates and documents",
        "Record witness contacts",
        "Save dashcam footage",
        "Draw a diagram of the accident"
      ],
      warnings: [
        "Do not delete photos and videos",
        "Witnesses are your main weapon"
      ]
    },
    {
      id: "highway_accident",
      title: "🛣️ Actions during an accident on the highway",
      description: "On the highway, safety is the priority.",
      conditions: { location: ["highway"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5-30 min",
      yield_estimate: "Safety",
      tags: ["highway", "safety", "emergency"],
      steps: [
        "Turn on hazard lights, place the triangle 30 meters behind",
        "Get out of the car, move behind the barrier",
        "Call the traffic police (102) and ambulance (103)",
        "Do not stand on the roadway"
      ],
      warnings: [
        "On the highway, every second is dangerous",
        "Do not repair the car on the roadway"
      ]
    },
    {
      id: "tow_truck_dtp",
      title: "🚛 Towing the car after an accident",
      description: "If the car is not drivable — call a tow truck.",
      conditions: { car_drivable: ["not_drivable", "unsafe"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "30-120 min",
      yield_estimate: "Car at service center",
      tags: ["tow_truck", "evacuation", "safe"],
      steps: [
        "Turn on hazard lights, place the emergency triangle",
        "Call a tow truck (through insurance or paid service)",
        "Tell the operator: make, damage",
        "During loading, watch to ensure the car is not damaged"
      ],
      warnings: [
        "Do not attempt to drive a damaged car",
        "Keep the towing receipt"
      ]
    }
  ]
};

// ===== EXPORT ALL CATEGORIES =====
window.autoWontStartDataEn = autoWontStartDataEn;
window.autoOverheatingDataEn = autoOverheatingDataEn;
window.autoFlatTireDataEn = autoFlatTireDataEn;
window.autoBrakesDataEn = autoBrakesDataEn;
window.autoBatteryDataEn = autoBatteryDataEn;
window.autoLeakDataEn = autoLeakDataEn;
window.autoDtpDataEn = autoDtpDataEn;
