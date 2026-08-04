// === РАЗДЕЛ: АВТО - УТЕЧКА ===

const autoLeakData = {
  category: "leak",
  title: "💧 Утечка жидкости",
  description: "Утечки технических жидкостей",
  questions: [
    {
      id: "location",
      text: "Где вы находитесь?",
      type: "single",
      options: [
        { id: "home", label: "🏠 Дома/гараж", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "🛣️ На дороге", tags: ["road", "traffic", "safety"] },
        { id: "highway", label: "🛣️ Трасса", tags: ["highway", "speed", "danger"] }
      ]
    }
  ],
  solutions: [
    {
      id: "call_help",
      title: "📞 Вызов эвакуатора",
      description: "Если не можете устранить проблему — вызовите помощь",
      conditions: {
        location: ["road", "highway"]
      },
      tags: ["emergency", "help", "safe", "universal"],
      priority: "fast",
      reliability: "high",
      time_estimate: "30-60 мин",
      steps: [
        "Включите аварийную сигнализацию",
        "Установите знак аварийной остановки за 15 метров",
        "Отойдите на безопасное расстояние от проезжей части",
        "Позвоните в службу эвакуации или страховку",
        "Сообщите точное местоположение и проблему",
        "Оставайтесь в безопасном месте до приезда помощи"
      ],
      warnings: [
        "Не стойте на проезжей части",
        "В тёмное время наденьте светоотражающий жилет",
        "На трассе будьте особенно осторожны"
      ]
    }
  ]
};