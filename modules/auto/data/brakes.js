// === РАЗДЕЛ: АВТО - ТОРМОЗА ===

const autoBrakesData = {
  category: "brakes",
  title: "🛑 Проблемы с тормозами",
  description: "Критические проблемы с тормозной системой",
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
      id: "brake_fluid",
      title: "🛑 Проверка тормозной жидкости",
      description: "При проблемах с тормозами проверьте уровень жидкости",
      conditions: {},
      tags: ["brakes", "safety", "critical", "urgent"],
      priority: "fast",
      reliability: "high",
      time_estimate: "5 мин",
      steps: [
        "Найдите бачок тормозной жидкости (обычно у водителя)",
        "Проверьте уровень жидкости — должен быть между MIN и MAX",
        "Если уровень низкий — долейте тормозную жидкость",
        "Проверьте нет ли утечек под машиной",
        "Протестируйте тормоза на безопасной скорости"
      ],
      warnings: [
        "При проблемах с тормозами не продолжайте движение",
        "Используйте только рекомендованный тип жидкости",
        "Если педаль мягкая или проваливается — немедленно остановитесь"
      ]
    }
  ]
};