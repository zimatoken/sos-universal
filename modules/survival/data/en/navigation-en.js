// modules/survival/data/en/navigation-en.js
// === MODULE: SURVIVAL — NAVIGATION ===

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "survival",
    category: "navigation",
    version: "1.0.0",
    lang: "en",
    title: "Navigation",
    description: "How to navigate and signal for rescue in any terrain",
    icon: "🧭",
    color: "#16a34a"
  },

  questions: [
    {
      id: "situation",
      type: "single",
      text: "What's your situation?",
      options: [
        { id: "lost", label: "🗺️ Lost / disoriented", tags: ["lost", "find_way"] },
        { id: "stranded", label: "🆘 Stranded / accident", tags: ["stranded", "wait_rescue"] },
        { id: "evacuate", label: "🏃 Need to evacuate", tags: ["evacuate", "move"] },
        { id: "night", label: "🌙 Night / darkness", tags: ["night", "dark", "wait"] },
        { id: "rescue", label: "🚁 Want to attract rescuers", tags: ["rescue", "signals"] }
      ]
    },
    {
      id: "tools",
      type: "multi",
      text: "What navigation tools do you have?",
      conditions: { situation: ["lost", "stranded", "evacuate", "night", "rescue"] },
      options: [
        { id: "compass", label: "🧭 Compass", tags: ["compass", "direction"] },
        { id: "gps", label: "📱 GPS / phone with maps", tags: ["gps", "coordinates"] },
        { id: "map", label: "🗺️ Map", tags: ["map", "terrain"] },
        { id: "watch", label: "⌚ Watch (analog)", tags: ["watch", "sun", "time"] },
        { id: "mirror", label: "🪞 Mirror / shiny object", tags: ["mirror", "signals", "sun"] },
        { id: "nothing", label: "❌ Nothing at all", tags: ["primitive", "natural"] }
      ]
    },
    {
      id: "weather",
      type: "single",
      text: "Weather / time of day?",
      conditions: { situation: ["lost", "stranded", "evacuate", "night", "rescue"] },
      options: [
        { id: "sunny", label: "☀️ Sunny / day", tags: ["sun", "day", "shadows"] },
        { id: "cloudy", label: "☁️ Cloudy", tags: ["clouds", "no_sun", "landmarks"] },
        { id: "night", label: "🌙 Night / stars", tags: ["stars", "moon", "polaris"] },
        { id: "fog", label: "🌫️ Fog / rain", tags: ["fog", "low_vis", "wait"] },
        { id: "moon", label: "🌕 Night / full moon", tags: ["moon", "night_vis"] }
      ]
    },
    {
      id: "terrain",
      type: "single",
      text: "What terrain are you in?",
      conditions: { situation: ["lost", "stranded", "evacuate", "night", "rescue"] },
      options: [
        { id: "forest", label: "🌲 Forest / taiga", tags: ["forest", "trees", "moss"] },
        { id: "open", label: "🏜️ Open / plain", tags: ["open", "horizon", "sun"] },
        { id: "mountain", label: "⛰️ Mountains / hills", tags: ["mountain", "ridge", "valley"] },
        { id: "coast", label: "🏖️ Coast / river", tags: ["coast", "water", "follow"] },
        { id: "urban", label: "🏙️ City / industrial", tags: ["urban", "roads", "signs"] },
        { id: "swamp", label: "🌿 Swamp / tundra", tags: ["swamp", "flat", "moss"] }
      ]
    }
  ],

  solutions: [
    // ============================================================
    // 1. COMPASS — BASIC NAVIGATION
    // ============================================================
    {
      id: "compass_basic",
      title: "🧭 Compass — basic navigation",
      description: "The compass shows magnetic north. Remember: magnetic declination (in Russia 5-15° east). Match with map: rotate compass until needle aligns with map north.",
      conditions: { situation: ["lost", "evacuate", "stranded"], tools: ["compass"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "open", "mountain", "coast", "urban", "swamp"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2-5 min",
      yield_estimate: "accurate direction",
      tags: ["compass", "direction", "universal", "tool"],
      steps: [
        "1. Hold compass horizontally, wait for needle to settle.",
        "2. Needle points to magnetic north (red end).",
        "3. In Russia, magnetic declination is ~5-15° east of true north.",
        "4. Match with map: rotate compass until needle aligns with map north.",
        "5. Choose a distant landmark in the direction of travel.",
        "6. Recheck direction every 100-200 meters."
      ],
      warnings: [
        "Don't hold compass near metal — distorts readings.",
        "Magnetic declination varies by region.",
        "When evacuating — move toward civilization, not just south."
      ]
    },
    // ============================================================
    // 2. SUN AND SHADOW NAVIGATION
    // ============================================================
    {
      id: "sun_shadow",
      title: "☀️ Sun and shadow navigation",
      description: "In sunny weather: sun rises in east, sets in west. At 12:00 — south (in northern hemisphere). The shadow from a vertical stick shows direction.",
      conditions: { situation: ["lost", "evacuate"], tools: ["nothing", "watch", "compass"], weather: ["sunny"], terrain: ["forest", "open", "mountain", "coast"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "5-10 min",
      yield_estimate: "approximate direction",
      tags: ["sun", "shadow", "primitive", "day", "free"],
      steps: [
        "1. Stick a vertical pole in the ground (1 m).",
        "2. Mark the shadow tip with a stone (point A).",
        "3. After 15-20 minutes, mark the new shadow tip (point B).",
        "4. Draw a line from A to B — this is WEST → EAST direction.",
        "5. Perpendicular to this line is NORTH → SOUTH (in northern hemisphere).",
        "6. For accuracy — repeat 2-3 times."
      ],
      warnings: [
        "Accuracy ±10-15° — for approximate direction.",
        "Doesn't work in cloudy weather.",
        "At noon, shadow is minimal — hard to determine."
      ]
    },
    // ============================================================
    // 3. WATCH AND SUN NAVIGATION
    // ============================================================
    {
      id: "watch_sun",
      title: "⌚ Watch and sun navigation",
      description: "Analog watch: point the hour hand at the sun. Half the angle between the hour hand and 12 o'clock points south. At 12:00 — the hour hand itself points roughly south.",
      conditions: { situation: ["lost", "evacuate"], tools: ["watch", "nothing"], weather: ["sunny"], terrain: ["forest", "open", "mountain", "coast", "urban"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1-2 min",
      yield_estimate: "approximate direction",
      tags: ["watch", "sun", "quick", "day"],
      steps: [
        "1. Point the hour hand at the sun.",
        "2. Find half the angle between the hour hand and 12 o'clock.",
        "3. This line points SOUTH (in northern hemisphere).",
        "4. At 12:00, the hour hand itself points roughly south.",
        "5. At 18:00 — west, at 6:00 — east.",
        "6. In summer: use 13 instead of 12."
      ],
      warnings: [
        "Accuracy ±20-30° — approximate.",
        "Daylight saving time: use 13 instead of 12.",
        "Doesn't work in cloudy weather or at night."
      ]
    },
    // ============================================================
    // 4. STAR NAVIGATION (POLARIS)
    // ============================================================
    {
      id: "stars_north",
      title: "⭐ Star navigation (Polaris)",
      description: "Find the Big Dipper. Draw a line through the 2 outer stars of the dipper 5 times the distance upward. There's Polaris — it points north.",
      conditions: { situation: ["lost", "evacuate", "night"], tools: ["nothing", "compass", "watch"], weather: ["night", "moon"], terrain: ["forest", "open", "mountain", "coast", "swamp"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2-5 min",
      yield_estimate: "accurate north",
      tags: ["stars", "night", "polaris", "free", "accurate"],
      steps: [
        "1. Find the Big Dipper — 7 bright stars.",
        "2. Take the 2 outer stars of the dipper: Merak and Dubhe.",
        "3. Draw a line through them 5 times the dipper distance upward.",
        "4. There's Polaris — bright, doesn't twinkle, points north.",
        "5. The Little Dipper — a small dipper near Polaris — confirms direction.",
        "6. Polaris is always at the same height above the horizon (latitude)."
      ],
      warnings: [
        "Polaris is high above the horizon — this is north.",
        "In the southern hemisphere — look for the Southern Cross.",
        "Clouds, moon, lights interfere with seeing stars."
      ]
    },
    // ============================================================
    // 5. MOON NAVIGATION
    // ============================================================
    {
      id: "moon_navigation",
      title: "🌙 Moon navigation",
      description: "On a clear night with moon: moon moves east to west. Waxing moon (crescent like C) — seen evening in west. Waning moon (crescent like reversed C) — seen morning in east. Full moon — south around midnight.",
      conditions: { situation: ["lost", "evacuate", "night"], tools: ["nothing", "watch"], weather: ["moon", "night"], terrain: ["forest", "open", "mountain", "coast", "swamp"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "2-5 min",
      yield_estimate: "approximate direction",
      tags: ["moon", "night", "primitive", "free"],
      steps: [
        "1. Waxing moon (crescent like C) — seen evening in west.",
        "2. Waning moon (crescent like reversed C) — seen morning in east.",
        "3. Full moon — around midnight in south (in northern hemisphere).",
        "4. The line between the crescent horns points roughly south.",
        "5. Use as a supplement to stars."
      ],
      warnings: [
        "Accuracy ±15-20° — approximate.",
        "Clouds interfere with seeing the moon.",
        "New moon isn't visible — use stars."
      ]
    },
    // ============================================================
    // 6. FOLLOW WATER
    // ============================================================
    {
      id: "water_follow",
      title: "🌊 Follow water",
      description: "Rivers and streams almost always lead to civilization. In mountains — downstream. On plains — toward larger rivers, lakes, sea. In desert — dry riverbeds lead to oases.",
      conditions: { situation: ["lost", "evacuate", "stranded"], tools: ["nothing", "compass", "watch"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "mountain", "coast", "swamp"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "0 min",
      yield_estimate: "path to civilization",
      tags: ["water", "river", "follow", "safe", "universal"],
      steps: [
        "1. Find a stream, river, lake.",
        "2. In mountains — move downstream.",
        "3. On plains — follow toward larger water bodies.",
        "4. Rivers lead to lakes, sea, settlements.",
        "5. In desert — dry riverbeds lead to oases.",
        "6. Along rivers there are often trails and roads."
      ],
      warnings: [
        "Don't swim in rough water — walk along the bank.",
        "Waterfalls and rapids — go around.",
        "In desert — water may be salty, check."
      ]
    },
    // ============================================================
    // 7. FOLLOW ROADS / TRAILS
    // ============================================================
    {
      id: "road_follow",
      title: "🛣️ Follow roads / trails",
      description: "In forest — look for trails, clearings, power lines. In city — main streets, signs, light. In mountains — passes, pastures. Roads always lead to people.",
      conditions: { situation: ["lost", "evacuate", "stranded"], tools: ["nothing", "compass", "watch"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "mountain", "urban"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "0-10 min",
      yield_estimate: "path to people",
      tags: ["roads", "trails", "civilization", "safe"],
      steps: [
        "1. In forest — look for trails, clearings, power lines.",
        "2. People's tracks, trash, cut branches — signs of civilization.",
        "3. In mountains — passes, pastures, sheep trails.",
        "4. In city — main streets, light, noise, traffic.",
        "5. Roads always lead to people — follow them.",
        "6. If the road splits — choose the more worn path."
      ],
      warnings: [
        "Don't walk on railway tracks — dangerous, walk alongside.",
        "Abandoned roads may lead nowhere.",
        "In fog — stick to the road, don't leave it."
      ]
    },
    // ============================================================
    // 8. SOS RESCUE SIGNALS
    // ============================================================
    {
      id: "sos_signals",
      title: "🆘 Rescue signals (SOS)",
      description: "International distress signal: 3 fires in a triangle, 3 flashes, 3 strikes, 3 shots. SOS in Morse code: three short, three long, three short. Mirror reflects sunlight onto aircraft.",
      conditions: { situation: ["stranded", "lost", "evacuate", "rescue"], tools: ["nothing", "compass", "watch", "mirror"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "open", "mountain", "coast", "urban"] },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "10-30 min",
      yield_estimate: "attention attracted",
      tags: ["sos", "rescue", "signals", "universal", "emergency"],
      steps: [
        "1. 3 fires in a triangle — international distress signal.",
        "2. 3 flashes, 3 strikes, 3 shots — pause, repeat.",
        "3. SOS in Morse code: ... --- ... (three short, three long, three short).",
        "4. Mirror reflect sunlight onto aircraft (not into pilot's eyes).",
        "5. Smoke signal: wet branches on fire — thick smoke.",
        "6. On the ground, lay out SOS from stones or branches (3×3 m)."
      ],
      warnings: [
        "Don't use all resources on signals — save for night.",
        "In forest, signals are less visible — find a clearing, summit.",
        "Don't wave — may be perceived as greeting.",
        "Don't shine mirror into pilot's eyes — blind them."
      ]
    },
    // ============================================================
    // 9. SMOKE SIGNALS
    // ============================================================
    {
      id: "smoke_signals",
      title: "🔥 Smoke signals",
      description: "Smoke is visible from far away. For daytime signal: wet green branches, moss, grass — produce thick white smoke. For night: dry wood — bright flame. 3 smoke columns = distress signal.",
      conditions: { situation: ["stranded", "lost", "rescue"], tools: ["fire", "nothing"], weather: ["sunny", "cloudy", "fog"], terrain: ["forest", "open", "mountain", "coast"] },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "5-15 min",
      yield_estimate: "visible signal for 5-10 km",
      tags: ["smoke", "rescue", "signals", "fire", "day"],
      steps: [
        "1. Build a fire in an open area.",
        "2. Add wet branches, green moss, grass — thick white smoke.",
        "3. Make 3 smoke columns (3 fires) — distress signal.",
        "4. In forest, smoke is less visible — find a clearing or high ground.",
        "5. Refresh smoke every 10-15 minutes.",
        "6. For night — dry wood gives bright flame."
      ],
      warnings: [
        "Wind carries smoke — stand on the leeward side.",
        "Don't start a fire in dry windy weather — fire hazard.",
        "Smoke isn't visible at night — use fire.",
        "If smoke is white — good, if black — chemicals are burning."
      ]
    },
    // ============================================================
    // 10. NATURE SIGNS (MOSS, TREES, ANTHILLS)
    // ============================================================
    {
      id: "moss_trees",
      title: "🌿 Nature signs (moss, trees, anthills)",
      description: "Moss often grows on the north side of trees and rocks. Anthills are usually on the south side of trees (seeking warmth). Branches on the south side are thicker. Snow melts faster on south slopes.",
      conditions: { situation: ["lost", "evacuate"], tools: ["nothing", "compass", "watch"], weather: ["sunny", "cloudy", "fog"], terrain: ["forest", "mountain", "swamp"] },
      scoring: { priority: "medium", reliability: "low" },
      time_estimate: "5-10 min",
      yield_estimate: "approximate direction",
      tags: ["nature", "moss", "trees", "primitive", "backup"],
      steps: [
        "1. Moss often on north side of trees and rocks.",
        "2. Anthills — on south side of trees (seek warmth).",
        "3. Branches on south side are thicker and longer.",
        "4. Snow melts faster on south slopes, slower on north.",
        "5. Bark on north side is wetter and darker.",
        "6. Use only in combination with other methods."
      ],
      warnings: [
        "Moss is not 100% reliable — humidity and shade affect it.",
        "In dense forest, moss grows on all sides.",
        "Use only in combination with other methods.",
        "Anthills may be on the south side, but not always."
      ]
    },
    // ============================================================
    // 11. TREE MARKINGS (TRAIL MARKING)
    // ============================================================
    {
      id: "tree_notches",
      title: "🪵 Tree markings (trail marking)",
      description: "If you decide to move in the forest — mark trees: deep notches with a knife, tied branches, arrows from sticks. This helps find your way back and rescuers to see your direction.",
      conditions: { situation: ["lost", "evacuate"], tools: ["knife", "nothing"], weather: ["sunny", "cloudy", "fog"], terrain: ["forest", "swamp"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1-2 min per mark",
      yield_estimate: "return path",
      tags: ["forest", "marking", "trail", "backtrack"],
      steps: [
        "1. Make deep notches on trees every 50-100 m.",
        "2. Tie branches or bend bushes in the direction of travel.",
        "3. Arrows from sticks or stones on the ground.",
        "4. If lost — follow your marks back.",
        "5. For rescuers — leave large visible signs.",
        "6. Use bright tape/fabric if available."
      ],
      warnings: [
        "Don't damage the bark in a circle — the tree will die.",
        "Marks may be erased by rain or snow.",
        "Don't leave trash — only visible signs.",
        "Distance between marks should be small."
      ]
    },
    // ============================================================
    // 12. LANDMARK ORIENTATION
    // ============================================================
    {
      id: "landmark_orient",
      title: "🗺️ Landmark orientation",
      description: "In any terrain, look for noticeable objects: tall trees, rocks, hills, towers, water towers. Determine your position relative to them. Move from landmark to landmark.",
      conditions: { situation: ["lost", "evacuate"], tools: ["nothing", "map", "compass"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "open", "mountain", "coast", "urban", "swamp"] },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "5-15 min",
      yield_estimate: "terrain orientation",
      tags: ["landmarks", "orientation", "visual", "universal"],
      steps: [
        "1. In forest — tallest trees, hills.",
        "2. In mountains — peaks, passes, valleys.",
        "3. In city — towers, churches, water towers.",
        "4. On coast — lighthouses, capes, bays.",
        "5. Identify 2-3 landmarks, move between them.",
        "6. Look back periodically — remember the return route."
      ],
      warnings: [
        "In fog, landmarks aren't visible — wait or use compass.",
        "At night, landmarks are hard to distinguish — only move with moon.",
        "Look back periodically — remember the return route."
      ]
    },
    // ============================================================
    // 13. STAY IN PLACE AND WAIT
    // ============================================================
    {
      id: "stay_put",
      title: "🧘 Stay in place and wait",
      description: "If you don't know where to go, are injured, night, storm — stay in place. Rescuers search within the radius of the last known location. Build shelter, signals, fire.",
      conditions: { situation: ["lost", "stranded", "night"], tools: ["nothing", "compass", "watch"], weather: ["fog", "night", "cloudy"], terrain: ["forest", "mountain", "open", "swamp"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "0 min",
      yield_estimate: "increased chances of rescue",
      tags: ["wait", "rescue", "safe", "wisdom"],
      steps: [
        "1. If injured, night, storm, fog — DON'T move.",
        "2. Rescuers search within the radius of the last known location.",
        "3. Build shelter, fire, signals — be visible.",
        "4. Stay in an open area if safe.",
        "5. Only move if you're sure of direction and have light.",
        "6. Don't wander — wastes energy and moves away from search area."
      ],
      warnings: [
        "Panic is the main enemy. Breathe, think, act.",
        "Don't wander — wastes energy and moves away from search area.",
        "If moving — leave signs: arrows, piles of stones.",
        "If thirsty — drink water, don't wait until the last moment."
      ]
    },
    // ============================================================
    // 14. PSYCHOLOGY OF WAITING FOR RESCUE
    // ============================================================
    {
      id: "wait_rescue_psychology",
      title: "🧠 Psychology of waiting for rescue",
      description: "Waiting is the hardest part. Stay calm: breathe deeply, plan your day. Break time into segments: food, water, signals, rest. Keep a diary — write events, it preserves sanity.",
      conditions: { situation: ["stranded", "lost", "night"], tools: ["nothing"], weather: ["sunny", "cloudy", "night", "fog", "moon"], terrain: ["forest", "open", "mountain", "coast", "urban", "swamp"] },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "0 min",
      yield_estimate: "mental health preserved",
      tags: ["psychology", "wait", "rescue", "mental_health"],
      steps: [
        "1. Breathe deeply — 4 sec inhale, 4 sec pause, 4 sec exhale.",
        "2. Plan your day: break into segments (food, signals, rest).",
        "3. Keep a diary: write time, weather, thoughts.",
        "4. Set goals: 'today I'll collect wood for 2 days'.",
        "5. At night don't panic — rest, tomorrow is a new day.",
        "6. Talk to yourself out loud — it calms you down."
      ],
      warnings: [
        "Panic kills faster than hunger — control your breathing.",
        "Don't think about the bad — focus on actions.",
        "Talk to yourself out loud — it calms you down.",
        "Don't let yourself sleep all day — activity is important."
      ]
    }
  ]
});