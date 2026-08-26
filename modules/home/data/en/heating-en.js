// modules/home/data/en/heating-en.js
// === MODULE: HOME — HEATING ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "home",
    category: "heating",
    version: "1.0.0",
    lang: "en",
    title: "Heating",
    description: "Cold apartment, radiator leak, boiler not working, frozen pipes, recalculation",
    icon: "🌡️",
    color: "#0891b2"
  },

  questions: [
    {
      id: "heating_issue",
      type: "single",
      text: "What happened?",
      options: [
        { id: "cold", label: "❄️ Cold in apartment / radiators are cold", tags: ["cold"] },
        { id: "leak", label: "💧 Radiator / pipe / valve is leaking", tags: ["leak"] },
        { id: "boiler_off", label: "🔧 Boiler / water heater not working / error", tags: ["boiler"] },
        { id: "frozen_pipes", label: "🧊 Pipes frozen / no water", tags: ["frozen"] },
        { id: "noise", label: "🔊 Banging / noise / humming in radiators", tags: ["noise"] },
        { id: "overheat", label: "🌡️ Too hot / can't regulate", tags: ["overheat"] },
        { id: "season_start", label: "📅 Heating hasn't been turned on yet, it's cold", tags: ["season"] },
        { id: "air_pocket", label: "💨 Radiator cold on top, warm on bottom (air)", tags: ["air_pocket"] }
      ]
    },
    {
      id: "heating_type",
      type: "single",
      text: "What type of heating?",
      conditions: { heating_issue: ["cold", "leak", "boiler", "frozen", "noise", "overheat", "season", "air_pocket"] },
      options: [
        { id: "central", label: "🏢 Central heating (radiators from management company)", tags: ["central"] },
        { id: "individual", label: "🏠 Individual heating (own boiler)", tags: ["individual"] },
        { id: "electric", label: "⚡ Electric (convector, heated floor)", tags: ["electric"] },
        { id: "stove", label: "🔥 Wood stove / fireplace / potbelly stove", tags: ["stove"] }
      ]
    },
    {
      id: "scope_cold",
      type: "single",
      text: "Where exactly is it cold?",
      conditions: { heating_issue: ["cold"], heating_type: ["central", "individual"] },
      options: [
        { id: "whole_flat", label: "🏠 In the entire apartment", tags: ["whole"] },
        { id: "one_room", label: "🚪 In one room", tags: ["room"] },
        { id: "one_radiator", label: "🪟 One radiator / section", tags: ["radiator"] },
        { id: "cold_windows", label: "🪟 Near windows / draft", tags: ["windows"] }
      ]
    },
    {
      id: "room_temperature",
      type: "single",
      text: "What is the temperature in the apartment?",
      conditions: { heating_issue: ["cold", "overheat"] },
      options: [
        { id: "below_18", label: "❄️ Below 18°C", tags: ["below_18"] },
        { id: "18_20", label: "🌡️ 18–20°C", tags: ["18_20"] },
        { id: "20_22", label: "🌡️ 20–22°C", tags: ["20_22"] },
        { id: "above_22", label: "🔥 Above 22°C", tags: ["above_22"] }
      ]
    },
    {
      id: "has_valves",
      type: "single",
      text: "Are there shutoff valves on the radiators?",
      conditions: { heating_issue: ["cold", "leak", "noise", "overheat"], heating_type: ["central", "individual"] },
      options: [
        { id: "valves_yes", label: "✅ Yes, there are valves", tags: ["valves_yes"] },
        { id: "valves_no", label: "❌ No valves", tags: ["valves_no"] },
        { id: "valves_unknown", label: "❓ Don't know", tags: ["valves_unknown"] }
      ]
    },
    {
      id: "radiator_type",
      type: "single",
      text: "What type of radiators?",
      conditions: { heating_issue: ["cold", "leak", "noise", "air_pocket"], heating_type: ["central"] },
      options: [
        { id: "cast_iron", label: "🔩 Cast iron (old, heavy)", tags: ["cast_iron"] },
        { id: "aluminum", label: "🔩 Aluminum (light, modern)", tags: ["aluminum"] },
        { id: "bimetallic", label: "🔩 Bimetallic (steel+aluminum)", tags: ["bimetallic"] },
        { id: "unknown_radiator", label: "❓ Don't know", tags: ["unknown_radiator"] }
      ]
    },
    {
      id: "has_debt_heating",
      type: "single",
      text: "Is there any debt for heating?",
      conditions: { heating_issue: ["cold"] },
      options: [
        { id: "debt_heat_yes", label: "💰 Yes, there is debt", tags: ["debt_yes"] },
        { id: "debt_heat_no", label: "✅ No, I pay on time", tags: ["debt_no"] },
        { id: "debt_heat_unknown", label: "❓ Don't know / possibly", tags: ["debt_unknown"] }
      ]
    },
    {
      id: "heating_season",
      type: "single",
      text: "Has the heating season started?",
      conditions: { heating_issue: ["season"] },
      options: [
        { id: "season_not_started", label: "❌ Not started yet (cold, radiators cold)", tags: ["not_started"] },
        { id: "season_started", label: "✅ Started, but radiators are cold", tags: ["started_cold"] },
        { id: "season_unknown", label: "❓ Don't know", tags: ["unknown_season"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. COLD WITH CENTRAL HEATING — LAW AND ACTIONS
    // ============================================================
    {
      id: "cold_central_heating",
      title: "❄️ Cold with central heating — what to do",
      description: "Radiators are cold, temperature below 18°C. The management company must maintain temperature. Act by law.",
      conditions: { heating_issue: ["cold"], heating_type: ["central"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–7 days",
      yield_estimate: "Heat restored + recalculation",
      tags: ["heating", "central", "law"],
      steps: [
        "Check: are the valves on the radiator open? Valves should be fully open (handle parallel to pipe)",
        "Check for air in the radiator: if top is cold and bottom is warm — air pocket",
        "Check for blockage: if bottom is cold — possible clog. Flushing is the management company's job",
        "Measure room temperature with a thermometer. Norm: 18–20°C (living rooms), 20–22°C (corner rooms)",
        "If temperature is below normal — draw up a report with the management company. If they refuse — report with 2 witnesses",
        "Send a claim to the management company: demand fixing the issue and recalculation",
        "If the management company doesn't respond — complaint to housing inspection, prosecutor's office",
        "Temporary solution: electric heaters. Insulate windows"
      ],
      warnings: [
        "DON'T cover radiators with screens or furniture — reduces heat output by 30–50%",
        "DON'T drain water from the radiator yourself — violation, fine",
        "Recalculation: if temperature is 1°C below normal — 15% discount"
      ]
    },
    // ============================================================
    // 2. HEATING NOT TURNED ON FOR THE SEASON
    // ============================================================
    {
      id: "heating_season_start",
      title: "📅 Heating not turned on for the season — what to do",
      description: "The heating season starts when the average daily temperature is below +8°C for 5 days.",
      conditions: { heating_issue: ["season"], heating_season: ["not_started"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 days",
      yield_estimate: "Heating turned on",
      tags: ["season", "heating", "law"],
      steps: [
        "Check: is the average daily temperature outside below +8°C for 5 days? This is the condition for starting the season",
        "If conditions are met — call the management company and demand heating be turned on",
        "If the management company doesn't turn it on — submit a written request",
        "If the management company ignores — complaint to housing inspection and prosecutor's office",
        "Record the temperature in the apartment: photo of thermometer, date, time"
      ],
      warnings: [
        "Season start is a regional rule. The exact date depends on the weather",
        "If the management company doesn't turn it on when conditions are met — violation of law"
      ]
    },
    // ============================================================
    // 3. AIR POCKET IN RADIATOR
    // ============================================================
    {
      id: "air_pocket_removal",
      title: "💨 Air pocket in radiator — how to remove",
      description: "Radiator cold on top, warm on bottom — air pocket. Remove air with the bleed valve.",
      conditions: { heating_issue: ["air_pocket"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Radiator heated",
      tags: ["air", "radiator", "maintenance"],
      steps: [
        "Find the bleed valve on the radiator — a small metal screw with a hole (on top)",
        "Place a container (bowl, basin, towel) under the hole",
        "Slowly turn the bleed valve with a key or screwdriver (don't unscrew completely!)",
        "When air starts coming out (hissing) — wait until water flows in a steady stream without bubbles",
        "Close the valve. Check — the radiator has heated up",
        "If the radiator is still cold — possibly clogged. Call a plumber"
      ],
      warnings: [
        "DON'T unscrew the valve completely — water under pressure can flood everything",
        "Water may be dirty (rusty) — avoid getting it on you or things"
      ]
    },
    // ============================================================
    // 4. HEATING RECALCULATION
    // ============================================================
    {
      id: "heating_recalculation",
      title: "📊 Heating recalculation — how to get money back",
      description: "If the temperature was below normal, you have the right to recalculation.",
      conditions: { heating_issue: ["cold"], room_temperature: ["below_18"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "Refund of overpayment",
      tags: ["recalculation", "heating", "law"],
      steps: [
        "Record the temperature in the apartment: daily measurements at 8:00, 13:00, 20:00 (for 3 consecutive days)",
        "For each degree below normal — 0.15% reduction in payment",
        "Submit an application to the management company demanding recalculation. Attach reports, photos, temperature chart",
        "If the management company refuses — complaint to housing inspection, prosecutor's office",
        "If heating was off for > 24 hours — reduction for each hour",
        "If you win — the management company must recalculate and return the money"
      ],
      warnings: [
        "Record temperature strictly according to rules: 3 days, 3 measurements per day",
        "Reports must be signed by neighbors or witnesses"
      ]
    },
    // ============================================================
    // 5. RADIATOR / PIPE LEAK
    // ============================================================
    {
      id: "radiator_leak",
      title: "💧 Radiator / pipe leak — stopping the leak",
      description: "Heating leak — hot water under pressure. Quickly shut off, cool down, call a master.",
      conditions: { heating_issue: ["leak"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Leak stopped",
      tags: ["heating", "leak", "emergency"],
      steps: [
        "Close the valve on the radiator supply (usually bottom left and right). Turn CLOCKWISE until it stops",
        "If the valve doesn't work — close the main riser in the apartment",
        "If you can't close it — call the emergency service: 01 (101/112)",
        "Place containers, lay out rags. Hot water burns — be careful",
        "If the leak is from a connection — tighten the nut with a wrench (don't overtighten)",
        "If the leak is from cast iron/aluminum — temporarily plug with epoxy putty, clamp",
        "After stopping — call a plumber / management company"
      ],
      warnings: [
        "DON'T try to close the valve with bare hands if water is hot (>60°C)",
        "DON'T drill or cut a pipe with water under pressure — burns, flooding"
      ]
    },
    // ============================================================
    // 6. RADIATOR REPLACEMENT
    // ============================================================
    {
      id: "radiator_replacement",
      title: "🔧 Radiator replacement — algorithm for management company",
      description: "Replacing a radiator in a central heating system requires coordination with the management company.",
      conditions: { heating_issue: ["leak"], heating_type: ["central"] },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "1–2 weeks",
      yield_estimate: "New radiator",
      tags: ["radiator", "replacement", "uk"],
      steps: [
        "Replacing a radiator in central heating is a redevelopment. Requires approval from the management company",
        "Write an application to the management company for radiator replacement. Attach a photo of the old one",
        "Coordinate the timing — shutting off the riser during work",
        "Choose the type: cast iron, aluminum, bimetallic. Consider system pressure",
        "Hire a licensed plumber (with the management company's consent)",
        "After installation — check for leaks, sign a report with the management company"
      ],
      warnings: [
        "Without management company approval — violation, fine",
        "Consider system pressure (cast iron up to 10 bar, aluminum up to 6)"
      ]
    },
    // ============================================================
    // 7. BOILER NOT WORKING
    // ============================================================
    {
      id: "boiler_error",
      title: "🔥 Boiler / water heater not working — diagnostics",
      description: "Gas boiler shows an error, won't start, won't heat. Often the problem can be fixed yourself.",
      conditions: { heating_issue: ["boiler"], heating_type: ["individual"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Operation restored",
      tags: ["boiler", "individual", "repair"],
      steps: [
        "Check the boiler display: what error? Write down the code. Find the meaning in the manual",
        "Check electricity: is the display on? If not — check the breaker, plug",
        "Check gas: does the stove light? If not — gas shutoff",
        "Check water pressure: the manometer should show 1–1.5 bar. Add water to 1.2 bar",
        "Check the chimney: is it blocked? Snow, ice, birds, soot",
        "Reset the boiler: turn off for 5 minutes, turn on again",
        "If it doesn't help — call a service technician"
      ],
      warnings: [
        "DON'T disassemble the gas part of the boiler without experience — gas leak, explosion",
        "If the boiler shows a CO error — immediately turn off, ventilate",
        "Adding water: don't exceed (>2 bar) — safety valve will activate"
      ]
    },
    // ============================================================
    // 8. FROZEN PIPES
    // ============================================================
    {
      id: "frozen_pipes_thaw",
      title: "🧊 Frozen pipes — thawing without damage",
      description: "Pipes are frozen, no water, risk of bursting. Thaw correctly, do not use open flame.",
      conditions: { heating_issue: ["frozen"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "30–120 minutes",
      yield_estimate: "Water supply restored",
      tags: ["frozen", "pipes", "emergency"],
      steps: [
        "DON'T use open flame on plastic pipes — they will melt",
        "Open faucets — when thawing, water should have somewhere to flow",
        "Find the frozen area: near exterior walls, in the basement, on the balcony",
        "Thawing methods: construction hair dryer (best), warm cloth, heating pad, heater",
        "Start from the frozen area and move toward the faucet",
        "If the pipe burst — close the valve, call a plumber",
        "Prevention: insulate pipes, leave faucets slightly open when it's freezing (<-15°C)"
      ],
      warnings: [
        "Open flame + plastic = fire. NEVER use a gas torch",
        "After freezing, pipes become brittle — check for micro-leaks within a week"
      ]
    },
    // ============================================================
    // 9. RADIATOR NOISE
    // ============================================================
    {
      id: "radiator_noise",
      title: "🔊 Banging / noise / humming in radiators — causes and solutions",
      description: "Noise in radiators is usually air, dirt, or pressure fluctuations. Often fixed simply.",
      conditions: { heating_issue: ["noise"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "10–30 minutes",
      yield_estimate: "Silence in radiators",
      tags: ["noise", "radiator", "maintenance"],
      steps: [
        "Banging in radiator — air or dirt. Bleed air through the valve until water appears",
        "Humming / howling — pressure drop or blockage. Report to the management company",
        "Clicking / rattling — pipe expansion during heating. Make sure pipes don't touch walls",
        "Water noise — air or low pressure. Bleed air",
        "If noise persists — call a plumber from the management company"
      ],
      warnings: [
        "DON'T ignore strong humming — may indicate pipe or pump damage",
        "DON'T try to disassemble the radiator yourself"
      ]
    },
    // ============================================================
    // 10. TOO HOT
    // ============================================================
    {
      id: "overheat_control",
      title: "🌡️ Too hot — how to regulate heating",
      description: "If it's too hot in the apartment, there are ways to lower the temperature without overpaying.",
      conditions: { heating_issue: ["overheat"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5–15 minutes",
      yield_estimate: "Comfortable temperature",
      tags: ["overheat", "control", "regulation"],
      steps: [
        "Close the valves on the radiators — turn clockwise until it stops",
        "Install a thermostat on the radiator — automatically maintains the temperature",
        "Open windows (vents) — ventilation lowers the temperature",
        "With central heating: if neighbors also have it hot — problem with the management company",
        "With individual heating: adjust the temperature on the boiler",
        "If you're overpaying — demand recalculation from the management company"
      ],
      warnings: [
        "DON'T close all valves completely — the system will get airlocked",
        "DON'T leave windows wide open in winter for long — pipes may freeze"
      ]
    }
  ]
});