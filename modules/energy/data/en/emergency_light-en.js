// modules/energy/data/en/emergency_light-en.js
// === MODULE: ENERGY — EMERGENCY LIGHTING ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "energy",
    category: "emergency_light",
    version: "1.0.0",
    lang: "en",
    title: "💡 Emergency Lighting",
    description: "Light without electricity: candles, oil lamps, flashlights, extending phone flashlight life. Complete guide to lighting in the dark.",
    icon: "💡",
    color: "#ec4899"
  },

  questions: [
    // ============================================================
    // QUESTION 1: Light sources
    // ============================================================
    {
      id: "light_sources",
      type: "multi",
      text: "What light sources do you have?",
      options: [
        { id: "candles", label: "🕯️ Candles (wax, paraffin, stearin)", tags: ["candle"] },
        { id: "flashlight", label: "🔦 Flashlight / headlamp / lantern (any)", tags: ["flash"] },
        { id: "phone_light", label: "📱 Phone with flashlight (LED)", tags: ["phone"] },
        { id: "matches", label: "🔥 Matches / lighter (for ignition)", tags: ["fire"] },
        { id: "lamp", label: "🪔 Kerosene lamp / oil lamp (ready-made)", tags: ["lamp"] },
        { id: "nothing_light", label: "❌ Nothing", tags: ["none"] }
      ]
    },

    // ============================================================
    // QUESTION 2: Fuel
    // ============================================================
    {
      id: "fuel",
      type: "multi",
      text: "What fuel do you have for homemade lamps?",
      conditions: { light_sources: ["candles", "flashlight", "phone_light", "matches", "lamp"] },
      options: [
        { id: "oil", label: "🫒 Vegetable oil (sunflower, olive, any)", tags: ["oil"] },
        { id: "kerosene", label: "⛽ Kerosene / gasoline / diesel / alcohol", tags: ["kerosene"] },
        { id: "fat", label: "🧈 Animal fat / lard / tallow", tags: ["fat"] },
        { id: "alcohol", label: "🍶 Alcohol / vodka / moonshine (flammable)", tags: ["alcohol"] },
        { id: "wax", label: "🕯️ Wax / paraffin (candle scraps)", tags: ["wax"] },
        { id: "no_fuel", label: "❌ No fuel", tags: ["none"] }
      ]
    },

    // ============================================================
    // QUESTION 3: Purpose
    // ============================================================
    {
      id: "purpose",
      type: "single",
      text: "What do you need light for?",
      conditions: { light_sources: ["candles", "flashlight", "phone_light", "matches", "lamp"] },
      options: [
        { id: "room", label: "🏠 Light a room / tent (general light)", tags: ["room"] },
        { id: "read", label: "📖 Read / work (local light)", tags: ["read"] },
        { id: "signal", label: "🚨 Signal / beacon (sending signal)", tags: ["signal"] },
        { id: "move", label: "🚶 Move in darkness (flashlight)", tags: ["move"] },
        { id: "cook", label: "🍳 Lighting for cooking", tags: ["cook"] }
      ]
    },

    // ============================================================
    // QUESTION 4: Containers and materials
    // ============================================================
    {
      id: "containers",
      type: "multi",
      text: "What containers and materials do you have for lamps?",
      conditions: { light_sources: ["candles", "flashlight", "phone_light", "matches", "lamp"] },
      options: [
        { id: "jar", label: "🫙 Jar / glass bottle / glass", tags: ["jar"] },
        { id: "can", label: "🥫 Tin can / lid from can", tags: ["can"] },
        { id: "foil", label: "🥈 Foil / metal sheet (reflector)", tags: ["foil"] },
        { id: "wick", label: "🧵 Thread / fabric / cotton / cord (wick)", tags: ["wick"] },
        { id: "paper", label: "📄 Paper / cardboard (for reflector)", tags: ["paper"] }
      ]
    },

    // ============================================================
    // QUESTION 5: Duration
    // ============================================================
    {
      id: "duration",
      type: "single",
      text: "How long do you need light for?",
      conditions: { light_sources: ["candles", "flashlight", "phone_light", "matches", "lamp"] },
      options: [
        { id: "short", label: "🟢 1–2 hours (short-term)", tags: ["short"] },
        { id: "medium_dur", label: "🟡 4–8 hours (overnight)", tags: ["medium_dur"] },
        { id: "long", label: "🔴 12+ hours (long-term, several days)", tags: ["long"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // SOLUTION 1: CANDLE + REFLECTOR
    // ============================================================
    {
      id: "candle_reflector",
      title: "🕯️ Candle + reflector = 3× more light",
      description: "A regular candle gives 12 lumens. With foil or a jar — up to 40 lumens. Simple, effective, safe.",
      conditions: { light_sources: ["candles"], purpose: ["room", "read"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 minutes",
      yield_estimate: "3× candle brightness",
      tags: ["candle", "reflector", "simple", "boost"],
      steps: [
        "Take aluminum foil or cut a piece from a tin can.",
        "Bend the foil into a semicircle behind the candle — reflector.",
        "You can use a metal lid, CD, or mirror.",
        "Place the candle in front of a white wall — the wall also reflects light.",
        "For reading: candle + foil above the head = diffused light.",
        "Several candles in a row with a common reflector = chandelier.",
        "Never leave a candle unattended — fire hazard."
      ],
      warnings: [
        "DO NOT place candles near curtains, paper, fabric — ignition in seconds.",
        "Foil heats up — don't touch with bare hands.",
        "Candle in a jar: leave an air hole, otherwise it will go out.",
        "DO NOT use candles in a tent without ventilation — carbon monoxide."
      ]
    },

    // ============================================================
    // SOLUTION 2: OIL LAMP FROM A JAR
    // ============================================================
    {
      id: "oil_lamp",
      title: "🫙 Oil lamp from a jar — 8–12 hours of light",
      description: "Any vegetable oil + thread + jar = lamp for 8–12 hours. Brightness 20–30 lumens.",
      conditions: { fuel: ["oil", "fat"], containers: ["jar", "wick"] },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "5 minutes",
      yield_estimate: "8–12 hours of light",
      tags: ["oil", "lamp", "long", "simple"],
      steps: [
        "Take a glass jar or bottle (wide mouth is better).",
        "Pour vegetable oil (sunflower, olive, any) to 2–3 cm depth.",
        "Take a cotton thread or strip of fabric (5–8 cm) as a wick.",
        "Soak the wick in oil and place it in the jar, leaving 1–2 cm outside.",
        "Secure the wick: paperclip on the rim, cork with a hole, fork.",
        "Wait 5 minutes — oil will rise through the wick (capillary effect).",
        "Light the tip of the wick. The lamp burns steadily and long.",
        "If it smokes — shorten the wick (leave 0.5–1 cm)."
      ],
      warnings: [
        "DO NOT use gasoline or alcohol in a closed container — explosion.",
        "Wick must be cotton — synthetic will melt.",
        "DO NOT fill oil to the brim — it will expand and spill when heated.",
        "DO NOT leave the lamp unattended — it may tip over."
      ]
    },

    // ============================================================
    // SOLUTION 3: SAVE PHONE FLASHLIGHT BATTERY
    // ============================================================
    {
      id: "phone_flashlight_save",
      title: "📱 Save phone flashlight battery — extend runtime",
      description: "Phone flashlight is the brightest source but drains battery fast. How to extend runtime 2–3 times.",
      conditions: { light_sources: ["phone_light"], purpose: ["room", "read", "move"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 minute",
      yield_estimate: "2–3× longer flashlight runtime",
      tags: ["phone", "save", "efficient", "light"],
      steps: [
        "Turn flashlight to minimum brightness (if supported).",
        "Use a reflector: white wall, paper, foil — scatters light.",
        "Don't point at the ceiling — light is lost. Point at wall or table.",
        "Flash intermittently: 10 seconds on → 50 seconds off.",
        "Turn off Wi-Fi, mobile data, Bluetooth — save battery.",
        "Switch to airplane mode — flashlight lasts 2× longer.",
        "Use the screen as a lamp: white image at max brightness.",
        "Make a lampshade from a bottle — diffuses light."
      ],
      warnings: [
        "LED flashlight heats up during long use — don't cover ventilation.",
        "DO NOT shine in eyes — temporary blindness in the dark.",
        "Below 0°C, battery drains faster — keep the phone warm.",
        "DO NOT use flashlight as the main source — save charge."
      ]
    },

    // ============================================================
    // SOLUTION 4: SIGNAL FIRE (SOS)
    // ============================================================
    {
      id: "signal_fire",
      title: "🚨 Signal fire for rescuers",
      description: "Three fires in a row, smoke by day, flames by night. International distress signal. Visible 5–10 km at night.",
      conditions: { purpose: ["signal"], light_sources: ["matches", "candles", "flashlight"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10–20 minutes",
      yield_estimate: "Visibility 5–10 km at night",
      tags: ["signal", "fire", "sos", "emergency"],
      steps: [
        "Distress signal: three fires in a row (or triangle), three flashes, three smoke columns.",
        "Choose an open place: hilltop, clearing, riverbank.",
        "Collect dry branches, pine needles, paper, rags — anything that burns.",
        "By day: add green branches or rubber — thick smoke is visible from afar.",
        "By night: bright flame, add oil or gasoline for a flash.",
        "DO NOT leave the fire unattended — it may spread.",
        "If you have a mirror — use it to reflect sunlight (by day)."
      ],
      warnings: [
        "DO NOT light a fire in a forest in dry weather — forest fire.",
        "Gasoline on fire = flash and burns. Add BEFORE lighting.",
        "Three fires is the SOS standard. Two fires = camp, not distress.",
        "Make sure you are visible from the air (not under trees)."
      ]
    },

    // ============================================================
    // SOLUTION 5: FLASHLIGHT REPAIR
    // ============================================================
    {
      id: "flashlight_repair",
      title: "🔦 Flashlight repair — 90% of problems fixed in 5 minutes",
      description: "Flashlight not working? 90% of problems are oxidized contacts, dead batteries, or broken spring.",
      conditions: { light_sources: ["flashlight"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Restored flashlight",
      tags: ["repair", "flashlight", "quick", "fix"],
      steps: [
        "Check the batteries: put them in another device or short with wire (should get warm).",
        "Clean contacts: eraser, sandpaper, alcohol. Oxidation = no contact.",
        "Check the spring in the cap: if broken — replace with a spring from a pen or paperclip.",
        "Check the bulb / LED: if there's a black dot inside — it's burned out.",
        "If the LED is burned — replace from an old phone or string lights.",
        "Check the switch: drop alcohol or WD-40, click 10–20 times.",
        "If the case is cracked — sealant or tape."
      ],
      warnings: [
        "DO NOT use different batteries in one flashlight — over/undercharge.",
        "Alkaline batteries leak — white residue = discard.",
        "DO NOT look directly at a powerful LED — retinal damage.",
        "DO NOT disassemble the flashlight under voltage."
      ]
    },

    // ============================================================
    // SOLUTION 6: LED SIGNAL BEACON
    // ============================================================
    {
      id: "led_signal_beacon",
      title: "🚨 LED beacon for signaling",
      description: "LED + battery = emergency beacon. Flashing, visible from far away. Runs for hours.",
      conditions: { purpose: ["signal"], light_sources: ["flashlight", "phone_light"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5–10 minutes",
      yield_estimate: "Visibility 1–3 km at night",
      tags: ["led", "beacon", "signal", "emergency"],
      steps: [
        "Take a bright LED (red or white) and a 3V battery (CR2032, 2×AA).",
        "Connect: battery anode (+) to LED anode (long leg).",
        "Battery cathode (−) to LED cathode (short leg) through a 100–220 Ohm resistor.",
        "Flashing: touch the contact — LED lights up.",
        "Mount on a stick, pole, tree — visible from afar.",
        "For automatic flashing — use a flashing LED (built-in chip).",
        "Turn on for 1–2 seconds periodically — save battery."
      ],
      warnings: [
        "LED without resistor will burn out in a second — always use a resistor.",
        "DO NOT look directly at a bright LED — eye damage.",
        "Batteries drain — check periodically.",
        "Moisture kills contacts — seal them."
      ]
    },

    // ============================================================
    // SOLUTION 7: PHONE SCREEN AS A LAMP
    // ============================================================
    {
      id: "phone_screen_light",
      title: "📱 Phone screen as a lamp — soft diffused light",
      description: "A white image at maximum brightness = soft light for reading and room lighting. Saves battery.",
      conditions: { light_sources: ["phone_light"], purpose: ["room", "read"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1 minute",
      yield_estimate: "Soft light for 2–3 hours",
      tags: ["phone", "screen", "light", "soft"],
      steps: [
        "Open a notes app or gallery.",
        "Create a white sheet (or open a white image).",
        "Set brightness to maximum.",
        "Set the screen vertically or place it on the table.",
        "The screen gives soft diffused light.",
        "Adjust brightness using the brightness slider.",
        "Cover the screen with white paper or fabric — light becomes warmer."
      ],
      warnings: [
        "White screen consumes more energy — use wisely.",
        "AMOLED screens consume less on dark themes — use a grey background.",
        "DO NOT leave the screen on for too long without need.",
        "Eyes get tired from a bright screen in the dark — take breaks."
      ]
    },

    // ============================================================
    // SOLUTION 8: CANDLE IN A JAR — LONGER BURN
    // ============================================================
    {
      id: "candle_in_jar",
      title: "🕯️ Candle in a jar — wind protection and longer burn",
      description: "A candle in a glass jar burns longer, doesn't go out in wind, and is safe in a tent.",
      conditions: { light_sources: ["candles"], fuel: ["wax"], purpose: ["room", "cook"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 minutes",
      yield_estimate: "2× longer burn time",
      tags: ["candle", "jar", "protection", "longer"],
      steps: [
        "Take a glass jar (tall is better).",
        "Place the candle at the bottom of the jar (can be on a coin stand).",
        "Light the candle. The jar protects from wind and drafts.",
        "Burning slows down — less oxygen, candle burns longer.",
        "You can place several candles for more light.",
        "The jar heats up — don't touch it with bare hands.",
        "Use in a tent, balcony, open area."
      ],
      warnings: [
        "DO NOT cover the jar with a lid — the candle will go out from lack of oxygen.",
        "The jar heats up to 70°C — use a potholder.",
        "DO NOT place on a plastic surface — it may melt.",
        "DO NOT leave unattended."
      ]
    }
  ]
});