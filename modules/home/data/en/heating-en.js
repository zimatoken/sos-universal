// === MODULE: HOME — HEATING ===
const heatingDataEn = {
  category: "heating",
  title: "🌡️ Heating",
  description: "Cold in the apartment, radiator leak, boiler not working, frozen pipes",

  questions: [
    {
      id: "heating_issue",
      text: "What happened?",
      type: "single",
      options: [
        { id: "cold", label: "❄️ Cold in the apartment / radiators are cold", tags: ["cold"] },
        { id: "leak", label: "💧 Radiator / pipe / faucet is leaking", tags: ["leak"] },
        { id: "boiler_off", label: "🔧 Boiler / water heater not working / error", tags: ["boiler"] },
        { id: "frozen_pipes", label: "🧊 Pipes frozen / no water", tags: ["frozen"] },
        { id: "noise", label: "🔊 Knocking / noise / humming in radiators", tags: ["noise"] },
        { id: "overheat", label: "🌡️ Too hot / cannot regulate", tags: ["overheat"] }
      ]
    },
    {
      id: "heating_type",
      text: "What type of heating do you have?",
      type: "single",
      options: [
        { id: "central", label: "🏢 Central (radiators from management company)", tags: ["central"] },
        { id: "individual", label: "🏠 Individual (own boiler)", tags: ["individual"] },
        { id: "electric", label: "⚡ Electric (convector, heated floor)", tags: ["electric"] },
        { id: "stove", label: "🔥 Wood stove / fireplace / potbelly stove", tags: ["stove"] }
      ]
    },
    {
      id: "scope_cold",
      text: "Where exactly is it cold?",
      type: "single",
      conditions: { heating_issue: ["cold"] },
      options: [
        { id: "whole_flat", label: "Throughout the entire apartment", tags: ["whole"] },
        { id: "one_room", label: "In one room", tags: ["room"] },
        { id: "one_radiator", label: "One radiator / section", tags: ["radiator"] },
        { id: "cold_windows", label: "Near windows / draft", tags: ["windows"] }
      ]
    }
  ],

  solutions: [
    {
      id: "cold_central_heating",
      title: "❄️ Cold with central heating — what to do",
      description: "Radiators are cold, apartment is below 18°C. The management company is required to maintain temperature. Act according to the law.",
      conditions: { heating_issue: ["cold"], heating_type: ["central"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "1–7 days",
      yield_estimate: "Warmth in the apartment",
      tags: ["heating", "central", "law"],
      steps: [
        "Check the radiators: are the valves on the supply pipes open? Valves should be fully open (handle parallel to the pipe). If closed — open them",
        "Check for air in the radiator: if the top is cold and the bottom is warm — airlock. Open the Mayevsky valve (small valve on the radiator) with a key or screwdriver, release air until water appears. Place a container",
        "Check the radiator for blockage: if the bottom is cold — possible blockage. Flushing the radiator is the management company's job, submit a request",
        "Measure the temperature in the room with a thermometer. Standard: daytime 18–20°C (for living rooms), 20–22°C (for corner rooms). Nighttime 15–17°C (Article 15 of the Housing Code, Decree No. 354)",
        "If the temperature is below normal — draw up a report with a management company representative. If the management company refuses — draw up a report with 2 witnesses, photos, videos",
        "Send a claim to the management company: demand to eliminate violations, recalculate heating fees (reduction coefficient of 0.15 for each degree below normal)",
        "If the management company doesn't respond — complaint to the State Housing Inspectorate (GZHI), prosecutor's office, Rospotrebnadzor. Review period: 30 days",
        "Temporary solution: electric heaters, heated floors, convectors. But watch the wiring — don't overload it",
        "Insulate windows: film, foam, sealant. Close gaps under the door with a threshold or cloth. This will add 2–3°C"
      ],
      warnings: [
        "DO NOT cover the radiator with a screen, cabinet, drywall — this reduces heat output by 30–50%",
        "DO NOT drain water from the radiator yourself — it's a violation, a fine, and can leave neighbors without heating",
        "Recalculation for heating: if the temperature is 1°C below normal — 15% discount, 2°C — 30%",
        "Winter, no heating > 24 hours — emergency situation. Complaint to the prosecutor's office, demand for relocation to temporary housing"
      ]
    },
    {
      id: "radiator_leak",
      title: "💧 Radiator / pipe is leaking — stopping the leak",
      description: "Heating leak — hot water under pressure. Quickly close it, cool it down, call a specialist.",
      conditions: { heating_issue: ["leak"] },
      priority: "fast",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Leak stopped",
      tags: ["heating", "leak", "emergency"],
      steps: [
        "Immediately close the valve on the radiator supply (usually bottom left and right). Turn CLOCKWISE until it stops",
        "If the valve doesn't work or the pipe is leaking — close the main riser in the apartment (valve in the floor, in a box, in the toilet). Turn until it stops",
        "If you can't close it — call the management company emergency service: 01 (101/112) or the management company dispatcher. Report: 'Heating leak, address, floor'",
        "Place containers, lay out rags, towels. Hot water burns — be careful",
        "If the leak is from a joint — tighten the nut with a wrench. Don't overtighten — the thread can strip",
        "If the leak is from cast iron / aluminum — temporarily plug it with chewing gum, epoxy, a clamp. But this is temporary — replacement is needed",
        "After stopping the leak — call a plumber / management company. Radiator replacement: 3000–8000 rubles"
      ],
      warnings: [
        "DO NOT try to close the valve with bare hands if the water is hot (>60°C) — burns",
        "DO NOT drill or cut a pipe with water under pressure — a fountain of hot water, burns, flooding",
        "If the leak is in the riser (common pipe) — DO NOT close the riser unless absolutely necessary",
        "Cast iron radiators (>30 years) — cracks appear unexpectedly. Prevention: replacement before an accident"
      ]
    },
    {
      id: "boiler_error",
      title: "🔥 Boiler / water heater not working — diagnostics",
      description: "The gas boiler shows an error, won't start, won't heat. Often the problem can be solved independently.",
      conditions: { heating_issue: ["boiler_off"], heating_type: ["individual"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Restoration of operation",
      tags: ["boiler", "individual", "repair"],
      steps: [
        "Check the boiler display: what error? Write down the code. Find the explanation in the manual or on the manufacturer's website",
        "Check the electricity: is the display on? If not — check the circuit breaker, plug, boiler fuse",
        "Check the gas: is the stove working? If not — gas outage. If gas is available — check the valve before the boiler",
        "Check the water pressure in the system: the pressure gauge on the boiler should show 1–1.5 bar. If lower — add water through the make-up valve to 1.2 bar",
        "Check the chimney: is it blocked? Snow, ice, birds, soot — common causes",
        "Restart the boiler: turn it off for 5 minutes, turn it back on. Sometimes this clears the error",
        "If the error is ignition-related — check the electrodes, spark plug, gas valve. Clean the electrodes with fine sandpaper",
        "If it doesn't help — call a service technician. Cost: 1500–4000 rubles",
        "Annual boiler maintenance: cleaning, adjustment, chimney check. Prevents 80% of breakdowns"
      ],
      warnings: [
        "DO NOT disassemble the gas part of the boiler without experience — gas leak, explosion, CO poisoning",
        "If the boiler shows a CO / overheating / chimney error — immediately turn it off, ventilate, call a technician",
        "Adding water to the system: don't overdo it (>2 bar) — the safety valve will activate",
        "If the boiler is old (>10–15 years) — repair may not be cost-effective"
      ]
    },
    {
      id: "frozen_pipes_thaw",
      title: "🧊 Frozen pipes — thawing without damage",
      description: "Pipes are frozen, no water, risk of bursting. Thaw correctly, don't use open flame.",
      conditions: { heating_issue: ["frozen_pipes"] },
      priority: "fast",
      reliability: "medium",
      time_estimate: "30–120 minutes",
      yield_estimate: "Restoration of water supply",
      tags: ["frozen", "pipes", "emergency"],
      steps: [
        "DO NOT use open flame (torch, soldering lamp) on plastic pipes — they will melt, burst, cause a fire",
        "Open faucets (hot and cold) — when thawing, water should have somewhere to flow",
        "Find the freezing point: usually at exterior walls, in the basement, on the balcony, in unheated areas",
        "Thawing methods: hair dryer (best), warm cloth (change every 5 minutes), heating pad, heater directed at the pipe",
        "Start from the freezing point and move toward the faucet. Don't heat one spot — heat evenly along the section",
        "If the pipe burst during freezing — close the valve, call a plumber",
        "After thawing: check for leaks. Ice expands and can crack the pipe",
        "Prevention: insulate pipes (mineral wool, foam, pipe insulation). Leave faucets slightly open during frost (<-15°C)"
      ],
      warnings: [
        "Open flame + plastic = fire + toxic gases. NEVER use a gas torch on plastic pipes",
        "If the pipe burst and you can't close the valve — call the emergency service",
        "After freezing, pipes become brittle. Check for micro-leaks over the next week",
        "Unheated summer houses / garages: drain water for the winter"
      ]
    },
    {
      id: "radiator_noise",
      title: "🔊 Knocking / noise / humming in radiators — causes and fixes",
      description: "Noise in radiators — usually air, dirt, or pressure drop. Often solved simply.",
      conditions: { heating_issue: ["noise"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "10–30 minutes",
      yield_estimate: "Quiet radiators",
      tags: ["noise", "radiator", "maintenance"],
      steps: [
        "Knocking in the radiator — air or dirt. Release air with the Mayevsky valve (key or screwdriver) until water appears",
        "Humming / howling — pressure drop or blockage in the system. Report to the management company, they should adjust it",
        "Clicking / rattling — pipe expansion when heating. Make sure pipes are not touching the wall, floor, furniture",
        "Water noise — air or low pressure. Release air, check pressure with neighbors",
        "If the noise continues — call a plumber from the management company. Flushing the system or radiator replacement may be needed",
        "Prevention: install automatic air vents (cost 300–800 rubles) — they release air automatically"
      ],
      warnings: [
        "DO NOT ignore strong humming — it may indicate pipe or pump damage",
        "DO NOT try to disassemble the radiator yourself — that's a plumber's job",
        "If the noise is heard by neighbors — the problem may be common. Call the management company collectively"
      ]
    },
    {
      id: "overheat_control",
      title: "🌡️ Too hot — how to regulate heating",
      description: "If the apartment is too hot, there are ways to lower the temperature without overpaying.",
      conditions: { heating_issue: ["overheat"] },
      priority: "medium",
      reliability: "high",
      time_estimate: "5–15 minutes",
      yield_estimate: "Comfortable temperature",
      tags: ["overheat", "control", "regulation"],
      steps: [
        "Close the valves on the radiators (if available) — turn clockwise until it stops. Open partially to regulate the heat",
        "Install a thermostat on the radiator (cost 500–2000 rubles) — automatically maintains the desired temperature",
        "Open windows (vents) — ventilation lowers the temperature. But don't leave them open at night in winter",
        "With central heating: if neighbors also have it too hot — the problem is with the management company. Demand adjustment (Decree No. 354)",
        "With individual heating: adjust the temperature on the boiler (usually 50–60°C for heated floors, 60–70°C for radiators)",
        "If you're overpaying for heating — demand a recalculation from the management company for poor-quality service (temperature above normal is also a violation)",
        "Install a regulator on the return line (bypass) — reduces pressure and temperature in the system"
      ],
      warnings: [
        "DO NOT close all valves completely — the system may get airlocked, then there will be no heat at all",
        "DO NOT open windows wide in winter for a long time — pipes may freeze (though this is rare with central heating)",
        "If you have a gas boiler — lowering the temperature by 1°C saves 5–7% of gas per month"
      ]
    }
  ]
};

// ===== EXPORT =====
window.heatingDataEn = heatingDataEn;
