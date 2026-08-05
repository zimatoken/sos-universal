// === РАЗДЕЛ: АВТО - ПЕРЕГРЕВ ===

const autoOverheatingData = {
  category: "overheating",
  title: "🌡️ Перегрев",
  description: "Проблемы с системой охлаждения",
  questions: [
    {
      id: "symptom",
      text: "Какие симптомы?",
      type: "multi",
      options: [
        { id: "smoke", label: "💨 Дым из под капота", tags: ["overheating", "leak", "engine"] },
        { id: "smell", label: "👃 Запах бензина", tags: ["fuel", "leak", "danger"] },
        { id: "warning_light", label: "⚠️ Горит индикатор на панели", tags: ["sensor", "diagnostic", "check"] }
      ]
    },
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
      id: "coolant_check",
      title: "🌡️ Проверка и доливка охлаждающей жидкости",
      description: "При перегреве проверьте уровень антифриза в радиаторе",
      conditions: {
        symptom: ["smoke"]
      },
      tags: ["cooling", "radiator", "urgent", "critical"],
      priority: "fast",
      reliability: "high",
      time_estimate: "10-15 мин",
      steps: [
        "Остановитесь и выключите двигатель",
        "Дайте двигателю остыть 15-20 минут",
        "Не открывайте радиатор на горячем двигателе!",
        "Проверьте уровень жидкости в расширительном бачке",
        "Если уровень низкий — долейте антифриз до нормы",
        "Проверьте нет ли утечек под машиной"
      ],
      warnings: [
        "НИКОГДА не открывайте крышку радиатора на горячем двигателе — пар может обжечь",
        "Используйте только рекомендованный тип антифриза",
        "Если жидкость быстро уходит — есть утечка, нужна ремонт"
      ]
    }
  ]
};

// ===== EXPORT =====
window.autoOverheatingData = autoOverheatingData;
