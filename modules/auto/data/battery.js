// === РАЗДЕЛ: АВТО - БАТАРЕЯ ===

const autoBatteryData = {
  category: "battery",
  title: "🔋 Села батарея",
  description: "Проблемы с аккумулятором",
  questions: [
    {
      id: "symptom",
      text: "Какие симптомы?",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Щелчок при повороте ключа", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Полная тишина", tags: ["battery", "dead", "electrical"] }
      ]
    },
    {
      id: "location",
      text: "Где вы находитесь?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Дома/гараж", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ На дороге", tags: ["road", "traffic", "safety"] },
        { id: "parking", label: "🅿️ Парковка", tags: ["public", "tools", "help"] }
      ]
    }
  ],
  solutions: [
    {
      id: "jump_start",
      title: "🔋 Прикуривание от другой машины",
      description: "Если батарея села — поможет прикуривание от работающего автомобиля",
      conditions: {
        symptom: ["click", "silence"]
      },
      tags: ["battery", "jump", "electrical", "common"],
      priority: "fast",
      reliability: "high",
      time_estimate: "5-10 мин",
      steps: [
        "Найдите автомобиль с рабочей батареей",
        "Подъедьте так, чтобы бамперы были рядом",
        "Выключите оба автомобиля (зажигание, фары)",
        "Соедините клеммы: плюсовой к плюсовой, минусовой к минусовой",
        "Запустите донорский автомобиль и дайте поработать 2-3 минуты",
        "Попробуйте завести свой автомобиль",
        "После запуска дайте поработать 10-15 минут",
        "Снимите клеммы в обратном порядке: минус, затем плюс"
      ],
      warnings: [
        "Не прикасайтесь к клеммам при работающем двигателе",
        "Следите за полярностью — неправильное соединение может повредить электронику",
        "Если от батареи идёт дым или запах — не прикуривайте"
      ]
    }
  ]
};