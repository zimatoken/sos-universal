// === МОДУЛЬ: БУЛЛИНГ (ДЕТИ) — УЛУЧШЕННАЯ ВЕРСИЯ ===
const bullyingData = {
  category: "bullying",
  title: "💔 Буллинг и травля",
  description: "Физическое насилие, оскорбления, кибербуллинг, социальная изоляция — как защитить ребёнка",

  questions: [
    {
      id: "bully_type",
      text: "С чем вы столкнулись? Выберите основной тип травли.",
      type: "single",
      options: [
        { id: "physical", label: "Физическое насилие (толкания, удары, отняли вещи)", tags: ["physical", "violence"] },
        { id: "verbal", label: "Слова, оскорбления, угрозы, шантаж", tags: ["verbal", "threats"] },
        { id: "cyber", label: "Кибербуллинг (соцсети, мессенджеры, игры)", tags: ["cyber", "online"] },
        { id: "social", label: "Социальная травля (изгнание, сплетни, бойкот)", tags: ["social", "exclusion"] },
        { id: "sexual", label: "Сексуальные домогательства / непристойные комментарии", tags: ["sexual", "abuse"] }
      ]
    },
    {
      id: "role",
      text: "Кем является ваш ребёнок в этой ситуации?",
      type: "single",
      options: [
        { id: "victim", label: "Мой ребёнок — жертва", tags: ["victim"] },
        { id: "witness", label: "Мой ребёнок — свидетель (видел или слышал о травле)", tags: ["witness"] },
        { id: "aggressor", label: "Мой ребёнок — агрессор / травит других", tags: ["aggressor"] }
      ]
    },
    {
      id: "duration",
      text: "Как долго длится эта ситуация?",
      type: "single",
      options: [
        { id: "once", label: "Один раз / первый случай", tags: ["short"] },
        { id: "weeks", label: "Несколько недель", tags: ["medium"] },
        { id: "months", label: "Несколько месяцев и более", tags: ["long"] }
      ]
    },
    {
      id: "location",
      text: "Где происходит травля?",
      type: "single",
      options: [
        { id: "school", label: "В школе / на уроках", tags: ["school"] },
        { id: "street", label: "На улице / во дворе", tags: ["street"] },
        { id: "online", label: "В интернете (соцсети, игры)", tags: ["online"] },
        { id: "club", label: "В секции / кружке / лагере", tags: ["club"] }
      ]
    },
    {
      id: "known_aggressor",
      text: "Известны ли агрессоры (кто именно травит)?",
      type: "single",
      options: [
        { id: "known", label: "Да, знаю имена / лица", tags: ["known"] },
        { id: "partial", label: "Частично известны", tags: ["partial"] },
        { id: "unknown", label: "Нет, анонимно / не знаю", tags: ["unknown"] }
      ]
    },
    {
      id: "cyber_platform",
      text: "Если кибербуллинг — на какой платформе?",
      condition: { bully_type: ["cyber"] },
      options: [
        { id: "social_network", label: "Соцсети (VK, Instagram, TikTok)", tags: ["social_network"] },
        { id: "messenger", label: "Мессенджеры (Telegram, WhatsApp)", tags: ["messenger"] },
        { id: "games", label: "Игровые платформы (Discord, Roblox, Minecraft)", tags: ["games"] }
      ]
    },
    {
      id: "threats",
      text: "Есть ли угрозы жизни, здоровью или распространение интимных фото?",
      type: "single",
      options: [
        { id: "no_threats", label: "Нет, просто оскорбления / изоляция", tags: ["low_risk"] },
        { id: "threats", label: "Угрозы физической расправы", tags: ["high_risk"] },
        { id: "intimate_photos", label: "Распространение интимных фото / видео", tags: ["intimate"] }
      ]
    }
  ],

  solutions: [
    // =================================