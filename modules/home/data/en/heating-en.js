<<<<<<< HEAD
// === MODULE: HOME — HEATING (ENGLISH) ===
const heatingDataEn = {
  category: "heating",
  title: "🌡️ Heating",
  description: "Cold in the apartment, radiator leak, boiler not working, frozen pipes",

  questions: [
    {
      id: "heating_issue",
      text: "What happened? (select the main problem)",
      type: "single",
      options: [
        { id: "cold", label: "❄️ Cold in the apartment / radiators are cold", tags: ["cold", "no_heat"] },
        { id: "leak", label: "💧 Radiator / pipe / valve is leaking", tags: ["leak", "water"] },
        { id: "boiler_off", label: "🔥 Boiler / water heater not working / error", tags: ["boiler", "error"] },
        { id: "frozen_pipes", label: "🧊 Pipes frozen / no water", tags: ["frozen", "winter"] },
        { id: "noise", label: "🔊 Noise / banging / humming in radiators", tags: ["noise", "air"] },
        { id: "overheat", label: "🌡️ Too hot / cannot regulate temperature", tags: ["overheat", "hot"] },
        { id: "uneven", label: "📊 Uneven heating (one room warm, another cold)", tags: ["uneven", "balance"] }
      ]
    },
    {
      id: "heating_type",
      text: "What type of heating do you have?",
      type: "single",
      options: [
        { id: "central", label: "🏢 Central (radiators from management company)", tags: ["central", "uk"] },
        { id: "individual", label: "🏠 Individual (own boiler)", tags: ["individual", "boiler"] },
        { id: "electric", label: "⚡ Electric (convector, heated floor)", tags: ["electric", "convector"] },
        { id: "stove", label: "🔥 Stove / fireplace / wood burner", tags: ["stove", "wood"] },
        { id: "underfloor", label: "🦶 Underfloor heating (water / electric)", tags: ["underfloor", "floor"] }
      ]
    },
    {
      id: "scope_cold",
      text: "Where exactly is the problem / cold?",
      condition: { heating_issue: ["cold", "uneven", "overheat", "noise"] },
      options: [
        { id: "whole_flat", label: "🏠 Throughout the entire apartment", tags: ["whole", "building"] },
        { id: "one_room", label: "🚪 In one room", tags: ["room", "local"] },
        { id: "one_radiator", label: "🛠️ One radiator / section", tags: ["radiator", "local"] },
        { id: "windows", label: "🪟 Near windows / draft", tags: ["windows", "insulation"] }
      ]
    },
    {
      id: "has_thermometer",
      text: "Do you have a thermometer and what's the room temperature?",
      options: [
        { id: "below_18", label: "🌡️ Below 18°C (cold)", tags: ["cold_room"] },
        { id: "18_22", label: "🌡️ 18–22°C (normal)", tags: ["normal"] },
        { id: "above_22", label: "🌡️ Above 22°C (hot)", tags: ["hot_room"] },
        { id: "no_thermometer", label: "❌ No thermometer", tags: ["no_therm"] }
      ]
    },
    {
      id: "season_time",
      text: "What time of year / day is it?",
      options: [
        { id: "winter_day", label: "❄️ Winter, daytime", tags: ["winter", "day"] },
        { id: "winter_night", label: "❄️ Winter, night", tags: ["winter", "night"] },
        { id: "summer", label: "☀️ Summer / off-season", tags: ["summer"] },
        { id: "off_season", label: "🌤️ Autumn / spring (heating season not started)", tags: ["off_season"] }
      ]
    },
    {
      id: "boiler_error_code",
      text: "Is there an error code on the boiler? (if yes, please note it)",
      condition: { heating_issue: ["boiler_off"], heating_type: ["individual"] },
      options: [
        { id: "no_code", label: "❌ No error / display is off", tags: ["no_code"] },
        { id: "e01", label: "🔴 E01 / E02 (ignition, gas)", tags: ["e01"] },
        { id: "f28", label: "🔴 F28 / F29 (ignition, gas, electrodes)", tags: ["f28"] },
        { id: "ce", label: "🔴 CE / E9 (overheat, sensors)", tags: ["ce"] },
        { id: "other", label: "❓ Other code", tags: ["other_code"] }
      ]
    },
    {
      id: "boiler_pressure",
      text: "What is the system pressure? (check the boiler manometer)",
      condition: { heating_issue: ["boiler_off"], heating_type: ["individual"] },
      options: [
        { id: "below_1", label: "📉 Below 1 bar (low)", tags: ["low_pressure"] },
        { id: "1_2", label: "✅ 1–1.5 bar (normal)", tags: ["normal_pressure"] },
        { id: "above_2", label: "📈 Above 2 bar (high)", tags: ["high_pressure"] },
        { id: "no_manometer", label: "❌ No manometer / can't see", tags: ["no_pressure"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Cold with central heating
    // ========================================
    {
      id: "cold_central_heating",
      title: "❄️ Cold with central heating — what to do",
      description: "Radiators are cold, temperature below 18°C. The management company is required to maintain temperature. Act by law.",
      conditions: { heating_issue: ["cold"], heating_type: ["central"], has_thermometer: ["below_18", "18_22"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Warm apartment",
      tags: ["heating", "central", "law"],
      steps: [
        "Check the radiators: are the valves open? Valves should be fully open (handle parallel to the pipe). If closed — open them",
        "Check for air in the radiator: if the top is cold and the bottom is warm — air lock. Open the bleed valve (small valve on the radiator) with a key or screwdriver, release air until water appears. Place a container underneath",
        "Check for blockage: if the bottom is cold — possible blockage. Flushing the radiator is the management company's responsibility — file a request",
        "Measure the room temperature with a thermometer. Standard: daytime 18–20°C (for residential), 20–22°C (for corner rooms). Nighttime 15–17°C (Article 15 of the Housing Code, Resolution No. 354)",
        "If the temperature is below standard — create a report with a management company representative. If they refuse — create a report with 2 witnesses, photos, video",
        "Send a claim to the management company: demand to fix the violations, recalculate heating fees (reduction factor 0.15 for each degree below standard)",
        "If the management company doesn't respond — complain to the State Housing Inspectorate (GZHI), prosecutor's office, Rospotrebnadzor. Response time: 30 days",
        "Temporary solution: electric heaters, heated floors, convectors. But watch the wiring — don't overload. Dry clothes on the radiator (if it's slightly warm) — increases humidity and heat",
        "Insulate windows: film, foam, sealant. Close gaps under the door with a threshold or cloth. This adds 2–3°C"
      ],
      warnings: [
        "DO NOT cover the radiator with a screen, cabinet, drywall — this reduces heat output by 30–50% and is a violation",
        "DO NOT drain water from the radiator yourself — it's a violation, a fine, and may leave neighbors without heating",
        "Recalculation for heating: if the temperature is below standard by 1°C — 15% discount, by 2°C — 30%, etc. (Resolution No. 354, Appendix No. 1)",
        "If the management company refuses to create a report — create one yourself with neighbors. Report + photo + thermometer = evidence in court",
        "Winter, no heating for > 24 hours — emergency situation. Complaint to the prosecutor's office, demand relocation to temporary housing (Article 15 of the Housing Code)"
      ]
    },
    // ========================================
    // 2. Radiator / pipe leak
    // ========================================
    {
      id: "radiator_leak",
      title: "💧 Radiator / pipe leak — stopping the leak",
      description: "Heating leak — hot water under pressure. Quickly shut it off, cool, call a technician.",
      conditions: { heating_issue: ["leak"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Leak stopped",
      tags: ["heating", "leak", "emergency"],
      steps: [
        "Immediately close the valve on the radiator supply (usually bottom left and right). Turn CLOCKWISE until fully closed",
        "If the valve doesn't work or a pipe is leaking — close the main riser in the apartment (valve in the floor, in the box, in the bathroom). Turn fully closed",
        "If you can't close it — call the management company emergency: 01 (101/112) or the dispatcher. Report: 'Heating leak, address, floor'",
        "Place containers, lay out rags, towels. Hot water can burn — be careful",
        "Cool the leak area: open a window, turn on ventilation. Hot water deforms plastic containers",
        "If the leak is at a connection — tighten the nut with a wrench. Don't overtighten — the thread may break",
        "If the leak is from cast iron / aluminum — temporarily plug with chewing gum, epoxy, clamp. But this is temporary — replacement needed",
        "After stopping the leak — call a plumber / management company. Radiator replacement: 3000–8000 RUB (depends on material, size, region)"
      ],
      warnings: [
        "DO NOT try to close the valve with bare hands if the water is hot (>60°C) — burns. Use gloves, cloth",
        "DO NOT drill, cut a pipe with water under pressure — fountain of hot water, burns, flooding",
        "If the leak is in the riser (common pipe) — DO NOT close the riser unless absolutely necessary. You'll leave neighbors without heating",
        "Cast iron radiators (>30 years) — cracks appear unexpectedly. Prevention: replace before an accident. Aluminum — rusts faster in poor water"
      ]
    },
    // ========================================
    // 3. Boiler not working — diagnostics
    // ========================================
    {
      id: "boiler_error",
      title: "🔥 Boiler / water heater not working — diagnostics",
      description: "Gas boiler shows an error, won't start, won't heat. Often the problem can be solved yourself.",
      conditions: { heating_issue: ["boiler_off"], heating_type: ["individual"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Operation restored",
      tags: ["boiler", "individual", "repair"],
      steps: [
        "Check the boiler display: what error? Write down the code (E01, F28, CE, etc.). Find the explanation in the manual or on the manufacturer's website",
        "Check the power: is the display on? If not — check the circuit breaker, plug, boiler fuse",
        "Check the gas: does the stove work? If not — gas outage (see 'Gas' module). If gas is on — check the valve before the boiler",
        "Check the system water pressure: the boiler manometer should show 1–1.5 bar. If lower — add water through the fill valve (usually below, blue) to 1.2 bar",
        "Check the chimney: is it blocked? Snow, ice, birds, soot — common causes. Caution: CO! If blocked — call a technician",
        "Restart the boiler: turn it off for 5 minutes, turn it back on. Sometimes this resets the error",
        "If it's an ignition error (F28, E01) — check the electrodes, spark plug, gas valve. Clean electrodes with fine sandpaper",
        "If it doesn't help — call a service technician. Cost: 1500–4000 RUB (diagnostics + minor repairs). Complex repair: 5000–15000 RUB",
        "Annual boiler maintenance: cleaning, adjustment, chimney check. Prevents 80% of breakdowns"
      ],
      warnings: [
        "DO NOT disassemble the gas part of the boiler without experience — gas leak, explosion, CO poisoning. Electrical — also careful, 220V",
        "If the boiler shows a CO / overheat / chimney error — immediately turn off, ventilate, call a technician. Do not restart",
        "Adding water to the system: don't overdo it (>2 bar) — the safety valve will open, water will spill out. Normal: 1.2–1.5 bar",
        "If the boiler is old (>10–15 years) — repairs may not be worth it. New boiler: 30000–80000 RUB, but more reliable and efficient"
      ]
    },
    // ========================================
    // 4. Frozen pipes — thawing
    // ========================================
    {
      id: "frozen_pipes_thaw",
      title: "🧊 Frozen pipes — thawing without damage",
      description: "Pipes frozen, no water, risk of bursting. Thaw properly, don't use open flame.",
      conditions: { heating_issue: ["frozen_pipes"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "30–120 minutes",
      yield_estimate: "Water supply restored",
      tags: ["frozen", "pipes", "emergency"],
      steps: [
        "DO NOT use open flame (torch, blowtorch) on plastic pipes — they will melt, burst, cause fire. On metal — careful, don't overheat",
        "Open the taps (hot and cold) — during thawing, water should have somewhere to flow. This speeds up the process",
        "Find the freezing point: usually near exterior walls, in the basement, balcony, unheated areas. Tap the pipe — a dull sound = ice",
        "Thawing methods: heat gun (best), warm cloth (change every 5 minutes), heating pad, heater directed at the pipe, warm water in a basin under the pipe",
        "Start from the freezing point and move toward the tap. Don't heat one spot — spread evenly",
        "If the pipe burst during freezing — close the valve, call a plumber. Temporary: clamp, epoxy, section replacement",
        "After thawing: check for leaks. Ice expands and can crack the pipe. Slowly open the tap, check connections",
        "Prevention: insulate pipes (mineral wool, foam, pipe insulation). Leave taps slightly open in frost (<-15°C). Provide heat to the basement"
      ],
      warnings: [
        "Open flame + plastic = fire + toxic gases. NEVER use a gas burner on plastic pipes",
        "If the pipe burst and you can't close the valve — call emergency. Flooding can be serious",
        "After freezing, pipes become brittle. Even if they didn't burst — check within a week for micro-leaks",
        "Unheated summer houses / garages: drain water for winter. Or leave a heater at +5°C with a thermostat"
      ]
    },
    // ========================================
    // 5. Air in radiator — bleeding
    // ========================================
    {
      id: "air_in_radiator",
      title: "💨 Air in the radiator — how to bleed it",
      description: "Radiator top cold, bottom warm — sign of air. Bleed it through the bleeder valve.",
      conditions: { heating_issue: ["cold", "noise"], heating_type: ["central", "individual"], scope_cold: ["one_radiator"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–10 minutes",
      yield_estimate: "Even heating",
      tags: ["air", "bleed", "radiator"],
      steps: [
        "Find the bleeder valve on the radiator (usually at the top, on the side). It's a small valve with a slot for a screwdriver or a square shank",
        "Prepare a container (bucket, pot), cloth, screwdriver or special key (for square shank)",
        "Place the container under the valve, lay a cloth to avoid flooding the floor",
        "Slowly open the bleeder valve (turn counterclockwise). First air will come out (hissing), then water will flow",
        "Don't open fully — 1–2 turns is enough. Wait until the hissing stops and a steady stream of water without bubbles flows",
        "Close the valve fully (turn clockwise). Check for leaks",
        "Check the system pressure (for individual heating). After bleeding, pressure may drop — add water through the fill valve to 1.2–1.5 bar",
        "After 15–20 minutes, check the radiator: the top should be warm. If not — repeat the bleed after 2–3 hours"
      ],
      warnings: [
        "DO NOT open the bleeder valve fully — it can blow out, then water will pour under pressure",
        "If the water is hot (>60°C) — be careful, burns",
        "If the radiator doesn't heat up after bleeding — possible blockage or problem in the riser (call the management company)",
        "For aluminum radiators — don't bleed air often, they release hydrogen (can explode). Ventilate the room"
      ]
    },
    // ========================================
    // 6. Uneven heating — balancing the system
    // ========================================
    {
      id: "heating_balance",
      title: "📊 Uneven heating — balancing the heating system",
      description: "Some rooms warm, others cold — balancing issue. Adjust valves on radiators.",
      conditions: { heating_issue: ["uneven"], heating_type: ["central", "individual"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–3 hours",
      yield_estimate: "Even heating",
      tags: ["balance", "uneven", "radiator"],
      steps: [
        "Check: are all radiator valves open? Valves should be fully open or partially closed for balancing",
        "Start with the furthest radiator from the boiler / riser: open its valve about 75% of full",
        "The next furthest — about 50%. The closest — 25–30%. This forces the coolant to go further",
        "Principle: the further the radiator, the more it should be open. This is called 'balancing'",
        "If there are thermostats on the radiators — set them to position 3 (middle) on all radiators",
        "If after adjustment, after 2–3 hours the cold radiator hasn't warmed — possible blockage or air (see solution 5)",
        "In a system with an individual boiler: check if there's enough pressure (1–1.5 bar) and temperature (70–80°C)",
        "If it doesn't help — call a technician. Balancing can cost 2000–5000 RUB"
      ],
      warnings: [
        "DO NOT open all radiators fully — this can leave distant ones cold",
        "DO NOT close valves too much — the system may overheat",
        "For old cast iron radiators — don't adjust sharply, they are inertial (heating takes 2–3 hours)",
        "If the problem recurs every season — possible system flush or pipe replacement needed"
      ]
    },
    // ========================================
    // 7. Boiler maintenance and replacement
    // ========================================
    {
      id: "boiler_maintenance",
      title: "🔧 Boiler maintenance and replacement",
      description: "Regular maintenance extends boiler life and prevents accidents.",
      conditions: { heating_issue: ["boiler_off", "noise"], heating_type: ["individual"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Reliable boiler operation",
      tags: ["boiler", "maintenance", "prevention"],
      steps: [
        "Perform annual maintenance (service) of the boiler before the heating season: burner cleaning, chimney check, automation adjustment",
        "Check and replace: electrodes (ignition, ionization), spark plug, seals, gaskets if necessary",
        "Flush the heat exchanger: if the boiler overheats or makes noise — possible scale. Special cleaning solution, then flush",
        "Check the expansion tank: air pressure should be 1–1.2 bar. If dropped — pump with a pump",
        "Install a magnetic filter or dirt separator — protection from debris and dirt in the system",
        "If there are frequent failures (errors) — contact a service engineer. Do not try to repair yourself",
        "If the boiler is > 12–15 years old — replacement with a more efficient model pays for itself in 3–5 years (gas savings 20–30%)",
        "Choose a new boiler with modulation (power regulation) — it runs quieter and more efficiently",
        "Install a room thermostat: it turns off the boiler when temperature is reached, saving up to 20% fuel"
      ],
      warnings: [
        "DO NOT attempt to repair the gas part of the boiler without certification — criminal liability",
        "DO NOT skimp on maintenance — 2000 RUB per year saves 20000 RUB on repairs",
        "If smoke or gas smell comes from the boiler — immediately turn off, ventilate, call emergency",
        "When replacing the boiler — trust only licensed organizations with warranty"
      ]
    }
  ]
};

// ===== EXPORT =====
window.heatingDataEn = heatingDataEn;
=======
// === MODULE: HOME — HEATING (ENGLISH) ===
const heatingDataEn = {
  category: "heating",
  title: "🌡️ Heating",
  description: "Cold in the apartment, radiator leak, boiler not working, frozen pipes",

  questions: [
    {
      id: "heating_issue",
      text: "What happened? (select the main problem)",
      type: "single",
      options: [
        { id: "cold", label: "❄️ Cold in the apartment / radiators are cold", tags: ["cold", "no_heat"] },
        { id: "leak", label: "💧 Radiator / pipe / valve is leaking", tags: ["leak", "water"] },
        { id: "boiler_off", label: "🔥 Boiler / water heater not working / error", tags: ["boiler", "error"] },
        { id: "frozen_pipes", label: "🧊 Pipes frozen / no water", tags: ["frozen", "winter"] },
        { id: "noise", label: "🔊 Noise / banging / humming in radiators", tags: ["noise", "air"] },
        { id: "overheat", label: "🌡️ Too hot / cannot regulate temperature", tags: ["overheat", "hot"] },
        { id: "uneven", label: "📊 Uneven heating (one room warm, another cold)", tags: ["uneven", "balance"] }
      ]
    },
    {
      id: "heating_type",
      text: "What type of heating do you have?",
      type: "single",
      options: [
        { id: "central", label: "🏢 Central (radiators from management company)", tags: ["central", "uk"] },
        { id: "individual", label: "🏠 Individual (own boiler)", tags: ["individual", "boiler"] },
        { id: "electric", label: "⚡ Electric (convector, heated floor)", tags: ["electric", "convector"] },
        { id: "stove", label: "🔥 Stove / fireplace / wood burner", tags: ["stove", "wood"] },
        { id: "underfloor", label: "🦶 Underfloor heating (water / electric)", tags: ["underfloor", "floor"] }
      ]
    },
    {
      id: "scope_cold",
      text: "Where exactly is the problem / cold?",
      condition: { heating_issue: ["cold", "uneven", "overheat", "noise"] },
      options: [
        { id: "whole_flat", label: "🏠 Throughout the entire apartment", tags: ["whole", "building"] },
        { id: "one_room", label: "🚪 In one room", tags: ["room", "local"] },
        { id: "one_radiator", label: "🛠️ One radiator / section", tags: ["radiator", "local"] },
        { id: "windows", label: "🪟 Near windows / draft", tags: ["windows", "insulation"] }
      ]
    },
    {
      id: "has_thermometer",
      text: "Do you have a thermometer and what's the room temperature?",
      options: [
        { id: "below_18", label: "🌡️ Below 18°C (cold)", tags: ["cold_room"] },
        { id: "18_22", label: "🌡️ 18–22°C (normal)", tags: ["normal"] },
        { id: "above_22", label: "🌡️ Above 22°C (hot)", tags: ["hot_room"] },
        { id: "no_thermometer", label: "❌ No thermometer", tags: ["no_therm"] }
      ]
    },
    {
      id: "season_time",
      text: "What time of year / day is it?",
      options: [
        { id: "winter_day", label: "❄️ Winter, daytime", tags: ["winter", "day"] },
        { id: "winter_night", label: "❄️ Winter, night", tags: ["winter", "night"] },
        { id: "summer", label: "☀️ Summer / off-season", tags: ["summer"] },
        { id: "off_season", label: "🌤️ Autumn / spring (heating season not started)", tags: ["off_season"] }
      ]
    },
    {
      id: "boiler_error_code",
      text: "Is there an error code on the boiler? (if yes, please note it)",
      condition: { heating_issue: ["boiler_off"], heating_type: ["individual"] },
      options: [
        { id: "no_code", label: "❌ No error / display is off", tags: ["no_code"] },
        { id: "e01", label: "🔴 E01 / E02 (ignition, gas)", tags: ["e01"] },
        { id: "f28", label: "🔴 F28 / F29 (ignition, gas, electrodes)", tags: ["f28"] },
        { id: "ce", label: "🔴 CE / E9 (overheat, sensors)", tags: ["ce"] },
        { id: "other", label: "❓ Other code", tags: ["other_code"] }
      ]
    },
    {
      id: "boiler_pressure",
      text: "What is the system pressure? (check the boiler manometer)",
      condition: { heating_issue: ["boiler_off"], heating_type: ["individual"] },
      options: [
        { id: "below_1", label: "📉 Below 1 bar (low)", tags: ["low_pressure"] },
        { id: "1_2", label: "✅ 1–1.5 bar (normal)", tags: ["normal_pressure"] },
        { id: "above_2", label: "📈 Above 2 bar (high)", tags: ["high_pressure"] },
        { id: "no_manometer", label: "❌ No manometer / can't see", tags: ["no_pressure"] }
      ]
    }
  ],

  solutions: [
    // ========================================
    // 1. Cold with central heating
    // ========================================
    {
      id: "cold_central_heating",
      title: "❄️ Cold with central heating — what to do",
      description: "Radiators are cold, temperature below 18°C. The management company is required to maintain temperature. Act by law.",
      conditions: { heating_issue: ["cold"], heating_type: ["central"], has_thermometer: ["below_18", "18_22"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Warm apartment",
      tags: ["heating", "central", "law"],
      steps: [
        "Check the radiators: are the valves open? Valves should be fully open (handle parallel to the pipe). If closed — open them",
        "Check for air in the radiator: if the top is cold and the bottom is warm — air lock. Open the bleed valve (small valve on the radiator) with a key or screwdriver, release air until water appears. Place a container underneath",
        "Check for blockage: if the bottom is cold — possible blockage. Flushing the radiator is the management company's responsibility — file a request",
        "Measure the room temperature with a thermometer. Standard: daytime 18–20°C (for residential), 20–22°C (for corner rooms). Nighttime 15–17°C (Article 15 of the Housing Code, Resolution No. 354)",
        "If the temperature is below standard — create a report with a management company representative. If they refuse — create a report with 2 witnesses, photos, video",
        "Send a claim to the management company: demand to fix the violations, recalculate heating fees (reduction factor 0.15 for each degree below standard)",
        "If the management company doesn't respond — complain to the State Housing Inspectorate (GZHI), prosecutor's office, Rospotrebnadzor. Response time: 30 days",
        "Temporary solution: electric heaters, heated floors, convectors. But watch the wiring — don't overload. Dry clothes on the radiator (if it's slightly warm) — increases humidity and heat",
        "Insulate windows: film, foam, sealant. Close gaps under the door with a threshold or cloth. This adds 2–3°C"
      ],
      warnings: [
        "DO NOT cover the radiator with a screen, cabinet, drywall — this reduces heat output by 30–50% and is a violation",
        "DO NOT drain water from the radiator yourself — it's a violation, a fine, and may leave neighbors without heating",
        "Recalculation for heating: if the temperature is below standard by 1°C — 15% discount, by 2°C — 30%, etc. (Resolution No. 354, Appendix No. 1)",
        "If the management company refuses to create a report — create one yourself with neighbors. Report + photo + thermometer = evidence in court",
        "Winter, no heating for > 24 hours — emergency situation. Complaint to the prosecutor's office, demand relocation to temporary housing (Article 15 of the Housing Code)"
      ]
    },
    // ========================================
    // 2. Radiator / pipe leak
    // ========================================
    {
      id: "radiator_leak",
      title: "💧 Radiator / pipe leak — stopping the leak",
      description: "Heating leak — hot water under pressure. Quickly shut it off, cool, call a technician.",
      conditions: { heating_issue: ["leak"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Leak stopped",
      tags: ["heating", "leak", "emergency"],
      steps: [
        "Immediately close the valve on the radiator supply (usually bottom left and right). Turn CLOCKWISE until fully closed",
        "If the valve doesn't work or a pipe is leaking — close the main riser in the apartment (valve in the floor, in the box, in the bathroom). Turn fully closed",
        "If you can't close it — call the management company emergency: 01 (101/112) or the dispatcher. Report: 'Heating leak, address, floor'",
        "Place containers, lay out rags, towels. Hot water can burn — be careful",
        "Cool the leak area: open a window, turn on ventilation. Hot water deforms plastic containers",
        "If the leak is at a connection — tighten the nut with a wrench. Don't overtighten — the thread may break",
        "If the leak is from cast iron / aluminum — temporarily plug with chewing gum, epoxy, clamp. But this is temporary — replacement needed",
        "After stopping the leak — call a plumber / management company. Radiator replacement: 3000–8000 RUB (depends on material, size, region)"
      ],
      warnings: [
        "DO NOT try to close the valve with bare hands if the water is hot (>60°C) — burns. Use gloves, cloth",
        "DO NOT drill, cut a pipe with water under pressure — fountain of hot water, burns, flooding",
        "If the leak is in the riser (common pipe) — DO NOT close the riser unless absolutely necessary. You'll leave neighbors without heating",
        "Cast iron radiators (>30 years) — cracks appear unexpectedly. Prevention: replace before an accident. Aluminum — rusts faster in poor water"
      ]
    },
    // ========================================
    // 3. Boiler not working — diagnostics
    // ========================================
    {
      id: "boiler_error",
      title: "🔥 Boiler / water heater not working — diagnostics",
      description: "Gas boiler shows an error, won't start, won't heat. Often the problem can be solved yourself.",
      conditions: { heating_issue: ["boiler_off"], heating_type: ["individual"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Operation restored",
      tags: ["boiler", "individual", "repair"],
      steps: [
        "Check the boiler display: what error? Write down the code (E01, F28, CE, etc.). Find the explanation in the manual or on the manufacturer's website",
        "Check the power: is the display on? If not — check the circuit breaker, plug, boiler fuse",
        "Check the gas: does the stove work? If not — gas outage (see 'Gas' module). If gas is on — check the valve before the boiler",
        "Check the system water pressure: the boiler manometer should show 1–1.5 bar. If lower — add water through the fill valve (usually below, blue) to 1.2 bar",
        "Check the chimney: is it blocked? Snow, ice, birds, soot — common causes. Caution: CO! If blocked — call a technician",
        "Restart the boiler: turn it off for 5 minutes, turn it back on. Sometimes this resets the error",
        "If it's an ignition error (F28, E01) — check the electrodes, spark plug, gas valve. Clean electrodes with fine sandpaper",
        "If it doesn't help — call a service technician. Cost: 1500–4000 RUB (diagnostics + minor repairs). Complex repair: 5000–15000 RUB",
        "Annual boiler maintenance: cleaning, adjustment, chimney check. Prevents 80% of breakdowns"
      ],
      warnings: [
        "DO NOT disassemble the gas part of the boiler without experience — gas leak, explosion, CO poisoning. Electrical — also careful, 220V",
        "If the boiler shows a CO / overheat / chimney error — immediately turn off, ventilate, call a technician. Do not restart",
        "Adding water to the system: don't overdo it (>2 bar) — the safety valve will open, water will spill out. Normal: 1.2–1.5 bar",
        "If the boiler is old (>10–15 years) — repairs may not be worth it. New boiler: 30000–80000 RUB, but more reliable and efficient"
      ]
    },
    // ========================================
    // 4. Frozen pipes — thawing
    // ========================================
    {
      id: "frozen_pipes_thaw",
      title: "🧊 Frozen pipes — thawing without damage",
      description: "Pipes frozen, no water, risk of bursting. Thaw properly, don't use open flame.",
      conditions: { heating_issue: ["frozen_pipes"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "30–120 minutes",
      yield_estimate: "Water supply restored",
      tags: ["frozen", "pipes", "emergency"],
      steps: [
        "DO NOT use open flame (torch, blowtorch) on plastic pipes — they will melt, burst, cause fire. On metal — careful, don't overheat",
        "Open the taps (hot and cold) — during thawing, water should have somewhere to flow. This speeds up the process",
        "Find the freezing point: usually near exterior walls, in the basement, balcony, unheated areas. Tap the pipe — a dull sound = ice",
        "Thawing methods: heat gun (best), warm cloth (change every 5 minutes), heating pad, heater directed at the pipe, warm water in a basin under the pipe",
        "Start from the freezing point and move toward the tap. Don't heat one spot — spread evenly",
        "If the pipe burst during freezing — close the valve, call a plumber. Temporary: clamp, epoxy, section replacement",
        "After thawing: check for leaks. Ice expands and can crack the pipe. Slowly open the tap, check connections",
        "Prevention: insulate pipes (mineral wool, foam, pipe insulation). Leave taps slightly open in frost (<-15°C). Provide heat to the basement"
      ],
      warnings: [
        "Open flame + plastic = fire + toxic gases. NEVER use a gas burner on plastic pipes",
        "If the pipe burst and you can't close the valve — call emergency. Flooding can be serious",
        "After freezing, pipes become brittle. Even if they didn't burst — check within a week for micro-leaks",
        "Unheated summer houses / garages: drain water for winter. Or leave a heater at +5°C with a thermostat"
      ]
    },
    // ========================================
    // 5. Air in radiator — bleeding
    // ========================================
    {
      id: "air_in_radiator",
      title: "💨 Air in the radiator — how to bleed it",
      description: "Radiator top cold, bottom warm — sign of air. Bleed it through the bleeder valve.",
      conditions: { heating_issue: ["cold", "noise"], heating_type: ["central", "individual"], scope_cold: ["one_radiator"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–10 minutes",
      yield_estimate: "Even heating",
      tags: ["air", "bleed", "radiator"],
      steps: [
        "Find the bleeder valve on the radiator (usually at the top, on the side). It's a small valve with a slot for a screwdriver or a square shank",
        "Prepare a container (bucket, pot), cloth, screwdriver or special key (for square shank)",
        "Place the container under the valve, lay a cloth to avoid flooding the floor",
        "Slowly open the bleeder valve (turn counterclockwise). First air will come out (hissing), then water will flow",
        "Don't open fully — 1–2 turns is enough. Wait until the hissing stops and a steady stream of water without bubbles flows",
        "Close the valve fully (turn clockwise). Check for leaks",
        "Check the system pressure (for individual heating). After bleeding, pressure may drop — add water through the fill valve to 1.2–1.5 bar",
        "After 15–20 minutes, check the radiator: the top should be warm. If not — repeat the bleed after 2–3 hours"
      ],
      warnings: [
        "DO NOT open the bleeder valve fully — it can blow out, then water will pour under pressure",
        "If the water is hot (>60°C) — be careful, burns",
        "If the radiator doesn't heat up after bleeding — possible blockage or problem in the riser (call the management company)",
        "For aluminum radiators — don't bleed air often, they release hydrogen (can explode). Ventilate the room"
      ]
    },
    // ========================================
    // 6. Uneven heating — balancing the system
    // ========================================
    {
      id: "heating_balance",
      title: "📊 Uneven heating — balancing the heating system",
      description: "Some rooms warm, others cold — balancing issue. Adjust valves on radiators.",
      conditions: { heating_issue: ["uneven"], heating_type: ["central", "individual"] },
      priority: "medium",
      reliability: "medium",
      time_estimate: "1–3 hours",
      yield_estimate: "Even heating",
      tags: ["balance", "uneven", "radiator"],
      steps: [
        "Check: are all radiator valves open? Valves should be fully open or partially closed for balancing",
        "Start with the furthest radiator from the boiler / riser: open its valve about 75% of full",
        "The next furthest — about 50%. The closest — 25–30%. This forces the coolant to go further",
        "Principle: the further the radiator, the more it should be open. This is called 'balancing'",
        "If there are thermostats on the radiators — set them to position 3 (middle) on all radiators",
        "If after adjustment, after 2–3 hours the cold radiator hasn't warmed — possible blockage or air (see solution 5)",
        "In a system with an individual boiler: check if there's enough pressure (1–1.5 bar) and temperature (70–80°C)",
        "If it doesn't help — call a technician. Balancing can cost 2000–5000 RUB"
      ],
      warnings: [
        "DO NOT open all radiators fully — this can leave distant ones cold",
        "DO NOT close valves too much — the system may overheat",
        "For old cast iron radiators — don't adjust sharply, they are inertial (heating takes 2–3 hours)",
        "If the problem recurs every season — possible system flush or pipe replacement needed"
      ]
    },
    // ========================================
    // 7. Boiler maintenance and replacement
    // ========================================
    {
      id: "boiler_maintenance",
      title: "🔧 Boiler maintenance and replacement",
      description: "Regular maintenance extends boiler life and prevents accidents.",
      conditions: { heating_issue: ["boiler_off", "noise"], heating_type: ["individual"] },
      priority: "slow",
      reliability: "high",
      time_estimate: "1–3 days",
      yield_estimate: "Reliable boiler operation",
      tags: ["boiler", "maintenance", "prevention"],
      steps: [
        "Perform annual maintenance (service) of the boiler before the heating season: burner cleaning, chimney check, automation adjustment",
        "Check and replace: electrodes (ignition, ionization), spark plug, seals, gaskets if necessary",
        "Flush the heat exchanger: if the boiler overheats or makes noise — possible scale. Special cleaning solution, then flush",
        "Check the expansion tank: air pressure should be 1–1.2 bar. If dropped — pump with a pump",
        "Install a magnetic filter or dirt separator — protection from debris and dirt in the system",
        "If there are frequent failures (errors) — contact a service engineer. Do not try to repair yourself",
        "If the boiler is > 12–15 years old — replacement with a more efficient model pays for itself in 3–5 years (gas savings 20–30%)",
        "Choose a new boiler with modulation (power regulation) — it runs quieter and more efficiently",
        "Install a room thermostat: it turns off the boiler when temperature is reached, saving up to 20% fuel"
      ],
      warnings: [
        "DO NOT attempt to repair the gas part of the boiler without certification — criminal liability",
        "DO NOT skimp on maintenance — 2000 RUB per year saves 20000 RUB on repairs",
        "If smoke or gas smell comes from the boiler — immediately turn off, ventilate, call emergency",
        "When replacing the boiler — trust only licensed organizations with warranty"
      ]
    }
  ]
};

// ===== EXPORT =====
window.heatingDataEn = heatingDataEn;
>>>>>>> 57522793a60f67c90dd6befc66693a2a0762d34e
