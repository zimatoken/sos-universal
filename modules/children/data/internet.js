// === МОДУЛЬ: ДЕТИ — ИНТЕРНЕТ-БЕЗОПАСНОСТЬ (УЛУЧШЕННАЯ ВЕРСИЯ) ===
const internetData = {
  category: "internet",
  title: "📱 Интернет-безопасность",
  description: "Груминг, секстинг, зависимость, мошенничество, опасный контент, буллинг в сети, утечка данных — как защитить ребёнка",

  questions: [
    {
      id: "threat",
      text: "С какой угрозой вы столкнулись?",
      type: "single",
      options: [
        { id: "grooming", label: "Общение с незнакомцем / подозрительные сообщения (груминг)", tags: ["grooming"] },
        { id: "sexting", label: "Ребёнок отправил/получил интимные фото или видео", tags: ["sexting"] },
        { id: "addiction", label: "Зависимость от гаджетов / игр / соцсетей", tags: ["addiction"] },
        { id: "scam", label: "Мошенничество / вымогательство / фишинг", tags: ["scam"] },
        { id: "content", label: "Опасный контент (жестокость, суицид, наркотики)", tags: ["content"] },
        { id: "leak", label: "Утечка личных данных / взлом аккаунта", tags: ["leak"] },
        { id: "cyberbullying", label: "Кибербуллинг (оскорбления, угрозы, травля в сети)", tags: ["cyberbullying"] }
      ]
    },
    {
      id: "age",
      text: "Возраст ребёнка?",
      type: "single",
      options: [
        { id: "preschool", label: "3–7 лет", tags: ["preschool"] },
        { id: "school", label: "7–12 лет", tags: ["school_age"] },
        { id: "teen", label: "Подросток 13–17 лет", tags: ["teen"] }
      ]
    },
    {
      id: "platform",
      text: "Где произошло?",
      type: "single",
      options: [
        { id: "social", label: "Соцсети (VK, Instagram, TikTok)", tags: ["social"] },
        { id: "games", label: "Игры (Roblox, Minecraft, CS:GO, Brawl Stars)", tags: ["games"] },
        { id: "messengers", label: "Мессенджеры (Telegram, WhatsApp, Discord)", tags: ["messengers"] },
        { id: "video", label: "Видео (YouTube, Twitch, TikTok)", tags: ["video"] }
      ]
    },
    {
      id: "grooming_details",
      text: "Если груминг — есть ли признаки опасности?",
      condition: { threat: ["grooming"] },
      options: [
        { id: "no_meeting", label: "Пока только переписка, встречи не было", tags: ["no_meeting"] },
        { id: "meeting_planned", label: "Назначена встреча или ребёнок уже ушёл на встречу", tags: ["meeting_planned"] },
        { id: "extortion", label: "Вымогают деньги или интимные фото под угрозами", tags: ["extortion"] }
      ]
    },
    {
      id: "sexting_details",
      text: "Если секстинг — что именно произошло?",
      condition: { threat: ["sexting"] },
      options: [
        { id: "sent_voluntarily", label: "Ребёнок сам отправил фото/видео по просьбе", tags: ["sent"] },
        { id: "received", label: "Ребёнок получил чужие интимные материалы", tags: ["received"] },
        { id: "leaked", label: "Фото/видео уже распространяются или шантажируют", tags: ["leaked"] }
      ]
    },
    {
      id: "addiction_severity",
      text: "Если зависимость — как проявляется?",
      condition: { threat: ["addiction"] },
      options: [
        { id: "mild", label: "Много времени в телефоне, но не мешает учёбе и сну", tags: ["mild"] },
        { id: "moderate", label: "Пропускает еду, не делает уроки, ссоры при попытке ограничить", tags: ["moderate"] },
        { id: "severe", label: "Агрессия, истерики, угрозы, тайное использование ночью, забросил всё", tags: ["severe"] }
      ]
    },
    {
      id: "scam_details",
      text: "Если мошенничество — что украли?",
      condition: { threat: ["scam"] },
      options: [
        { id: "account", label: "Взломали аккаунт в игре или соцсети", tags: ["account"] },
        { id: "money", label: "Украли деньги с карты или выманили переводом", tags: ["money"] },
        { id: "data", label: "Украли личные данные (паспорт, адрес, фото)", tags: ["data"] }
      ]
    },
    {
      id: "content_type",
      text: "Какой опасный контент?",
      condition: { threat: ["content"] },
      options: [
        { id: "violence", label: "Насилие, жестокость, расчленёнка", tags: ["violence"] },
        { id: "suicide", label: "Пропаганда суицида, депрессивные группы, «синий кит»", tags: ["suicide"] },
        { id: "drugs", label: "Наркотики, спайсы, психоактивные вещества", tags: ["drugs"] },
        { id: "porn", label: "Порнография, эротика (не по возрасту)", tags: ["porn"] }
      ]
    },
    {
      id: "child_reaction",
      text: "Реакция ребёнка на ситуацию?",
      type: "single",
      options: [
        { id: "calm", label: "Спокойно, сам(а) рассказал(а) и готов(а) обсуждать", tags: ["calm"] },
        { id: "shame", label: "Стыдится, замкнулся(лась), боится наказания", tags: ["shame"] },
        { id: "aggressive", label: "Агрессивен, отрицает, не идёт на контакт", tags: ["aggressive"] },
        { id: "suicidal", label: "Говорит о смерти, самоповреждении, безнадёжности", tags: ["suicidal"] }
      ]
    },
    {
      id: "parental_control",
      text: "Используете ли вы родительский контроль или ограничения?",
      type: "single",
      options: [
        { id: "no_control", label: "Нет, не используем", tags: ["no_control"] },
        { id: "basic", label: "Есть базовые ограничения (таймер, безопасный поиск)", tags: ["basic"] },
        { id: "full", label: "Полный контроль с мониторингом и фильтрацией", tags: ["full"] }
      ]
    }
  ],

  solutions: [
    // =================================