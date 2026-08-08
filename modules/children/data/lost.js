// === МОДУЛЬ: ДЕТИ — ПРОПАЖА РЕБЁНКА (УЛУЧШЕННАЯ ВЕРСИЯ) ===
const lostData = {
  category: "lost",
  title: "🔍 Пропажа ребёнка",
  description: "Ребёнок не пришёл из школы, не отвечает на звонки, пропал без вести — алгоритм действий для каждой ситуации",

  questions: [
    {
      id: "lost_type",
      text: "Какая ситуация?",
      type: "single",
      options: [
        { id: "not_home", label: "Не пришёл из школы / с секции / от друзей", tags: ["not_home"] },
        { id: "no_contact", label: "Не отвечает на звонки / сообщения (сутки+)", tags: ["no_contact"] },
        { id: "runaway", label: "Убежал из дома после ссоры", tags: ["runaway"] },
        { id: "abduction", label: "Подозреваю похищение / увез незнакомец", tags: ["abduction"] },
        { id: "online", label: "Пропал после общения в интернете / соцсетях", tags: ["online"] },
        { id: "lost_nature", label: "Пропал в лесу / на природе / в походе", tags: ["nature"] },
        { id: "shopping", label: "Потерялся в торговом центре / на вокзале / в людном месте", tags: ["shopping"] }
      ]
    },
    {
      id: "time_missing",
      text: "Сколько времени прошло с момента, когда вы поняли, что ребёнок пропал?",
      type: "single",
      options: [
        { id: "less_30min", label: "Менее 30 минут", tags: ["very_recent"] },
        { id: "less_1h", label: "30 минут – 1 час", tags: ["recent"] },
        { id: "1_3h", label: "1–3 часа", tags: ["short"] },
        { id: "3_12h", label: "3–12 часов", tags: ["medium"] },
        { id: "more_12h", label: "Более 12 часов", tags: ["long"] }
      ]
    },
    {
      id: "age",
      text: "Возраст ребёнка?",
      type: "single",
      options: [
        { id: "infant", label: "0–2 года (не ходит / плохо говорит)", tags: ["infant"] },
        { id: "preschool", label: "3–7 лет", tags: ["preschool"] },
        { id: "school", label: "7–12 лет", tags: ["school_age"] },
        { id: "teen", label: "Подросток 13–17 лет", tags: ["teen"] }
      ]
    },
    {
      id: "health_issues",
      text: "Есть ли у ребёнка проблемы со здоровьем, которые могут усложнить поиск?",
      type: "single",
      options: [
        { id: "no_health", label: "Нет, здоров", tags: ["healthy"] },
        { id: "allergy", label: "Аллергия (нужны лекарства)", tags: ["allergy"] },
        { id: "chronic", label: "Хроническое заболевание (диабет, астма, эпилепсия)", tags: ["chronic"] },
        { id: "autism", label: "РАС / аутизм / ментальные нарушения", tags: ["autism"] },
        { id: "medication", label: "Принимает лекарства, которые нужно дать вовремя", tags: ["medication"] }
      ]
    },
    {
      id: "last_location",
      text: "Где видели ребёнка в последний раз?",
      type: "single",
      options: [
        { id: "home", label: "Дома / во дворе", tags: ["home"] },
        { id: "school", label: "Школа / садик / секция", tags: ["school"] },
        { id: "friends", label: "У друзей / родственников", tags: ["friends"] },
        { id: "street", label: "На улице / в парке / на остановке", tags: ["street"] },
        { id: "mall", label: "В торговом центре / магазине", tags: ["mall"] },
        { id: "nature", label: "В лесу / на даче / в походе", tags: ["nature_place"] }
      ]
    },
    {
      id: "communication",
      text: "Есть ли у ребёнка телефон и работает ли он?",
      type: "single",
      options: [
        { id: "has_works", label: "Телефон есть, работает, но не отвечает", tags: ["phone_works"] },
        { id: "has_off", label: "Телефон есть, но выключен / разрядился", tags: ["phone_off"] },
        { id: "no_phone", label: "Телефона нет", tags: ["no_phone"] },
        { id: "share_location", label: "Я вижу геолокацию (Find My, Google, Life360)", tags: ["location_available"] }
      ]
    },
    {
      id: "last_actions",
      text: "Что ребёнок делал незадолго до пропажи? (можно выбрать несколько, но выберите основное)",
      type: "single",
      options: [
        { id: "normal", label: "Всё было как обычно, не подавал признаков беспокойства", tags: ["normal"] },
        { id: "upset", label: "Был расстроен / плакал / конфликтовал", tags: ["upset"] },
        { id: "secretive", label: "Вёл себя скрытно, много сидел в телефоне", tags: ["secretive"] },
        { id: "talk_meeting", label: "Говорил о встрече с кем-то из интернета", tags: ["talk_meeting"] },
        { id: "packed", label: "Собирал вещи / брал деньги / уходил поспешно", tags: ["packed"] }
      ]
    },
    {
      id: "clothing_description",
      text: "Можете ли вы точно описать одежду ребёнка?",
      type: "single",
      options: [
        { id: "yes_known", label: "Да, знаю точно, что было на нём", tags: ["clothes_known"] },
        { id: "partial", label: "Приблизительно, но могу описать", tags: ["clothes_partial"] },
        { id: "no", label: "Не помню / не уверен", tags: ["clothes_unknown"] }
      ]
    },
    {
      id: "social_media",
      text: "Проверяли ли вы аккаунты ребёнка в соцсетях и переписки?",
      type: "single",
      options: [
        { id: "checked", label: "Да, проверил(а), нет подозрительного", tags: ["checked"] },
        { id: "suspicious", label: "Есть подозрительные контакты или сообщения", tags: ["suspicious"] },
        { id: "not_checked", label: "Нет, ещё не проверял(а)", tags: ["not_checked"] }
      ]
    }
  ],

  solutions: [
    // =================================