// === РАЗДЕЛ: АВТО ===
// Отдельные категории для каждой проблемы

const wont_startData = {
  category: "wont_start",
  title: "🔌 Не заводится",
  description: "Проблемы с запуском двигателя",
  questions: [
    {
      id: "symptom",
      text: "Какие симптомы?",
      type: "multi",
      options: [
        { id: "click", label: "🔊 Щелчок при повороте ключа", tags: ["starter", "battery", "click"] },
        { id: "silence", label: "🔇 Полная тишина", tags: ["battery", "dead", "electrical"] },
        { id: "crank", label: "⚙️ Крутится но не заводится", tags: ["fuel", "spark", "engine"] }
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
    },
    {
      id: "check_fuel",
      title: "⛽ Проверка топлива",
      description: "Самая частая причина — просто закончился бензин",
      conditions: {
        symptom: ["crank"]
      },
      tags: ["fuel", "basic", "check", "fast"],
      priority: "fast",
      reliability: "high",
      time_estimate: "1 мин",
      steps: [
        "Посмотрите на указатель топлива на панели",
        "Если показания неясны — проверьте датчик уровня топлива",
        "Проверьте резервный топливный бак (если есть)",
        "Покачайте машину — датчик может показать реальный уровень"
      ],
      warnings: [
        "Не запускайте двигатель без топлива — это может повредить топливный насос"
      ]
    }
  ]
};

const overheatingData = {
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

const flat_tireData = {
  category: "flat_tire",
  title: "🛞 Прокол шины",
  description: "Проблемы с колёсами",
  questions: [
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
      id: "tire_change",
      title: "🛞 Замена колеса",
      description: "При проколе замените колесо на запасное",
      conditions: {},
      tags: ["tire", "wheel", "basic", "medium"],
      priority: "medium",
      reliability: "high",
      time_estimate: "15-30 мин",
      steps: [
        "Остановитесь на ровной твёрдой поверхности",
        "Включите первую передачу и ручной тормоз",
        "Подложите упоры под колёса",
        "Ослабьте болты на повреждённом колесе (на 1/2 оборота)",
        "Поднимите машину домкратом",
        "Полностью открутите болты и снимите колесо",
        "Установите запасное колесо и закрутите болты от руки",
        "Опустите машину и затяните болты крест-накрест с усилием",
        "Проверьте давление в запасном колесе"
      ],
      warnings: [
        "Никогда не подлезайте под машину на домкрате",
        "Затягивайте болты с правильным усилием — перетяжка опасна",
        "Проверьте давление в новом колесе перед началом движения"
      ]
    }
  ]
};

const brakesData = {
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

const batteryData = {
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

const leakData = {
  category: "leak",
  title: "💧 Утечка жидкости",
  description: "Утечки технических жидкостей",
  questions: [
    {
      id: "location",
      text: "Где вы находитесь?",
      type: "single",
      options: [
        { id: "home", label: "� Дома/гараж", tags: ["safe", "tools", "garage"] },
        { id: "road", label: "�️ На дороге", tags: ["road", "traffic", "safety"] },
        { id: "highway", label: "�️ Трасса", tags: ["highway", "speed", "danger"] }
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