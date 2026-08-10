const TRAVEL_LOCALES = {
  ru: {
    moduleTitle: "Путешествия",
    moduleSubtitle: "Экстренные ситуации за границей и в поездках",
    selectCategory: "Выберите ситуацию:",
    back: "← Назад",
    backToModule: "← К категориям",
    restart: "🔄 Пройти заново",
    print: "🖨️ Печать",
    pdf: "📄 PDF",
    share: "🔗 Поделиться",
    step: "Шаг",
    steps: "Действия",
    warnings: "⚠️ Важно",
    emergencyCall: "🚨 Экстренный вызов",
    sos: "SOS",
    question: "Вопрос",
    of: "из",
    result: "Результат",
    noResult: "Не удалось определить ситуацию. Попробуйте другие ответы.",
    loading: "Загрузка...",
    errorLoad: "Ошибка загрузки данных",
    categories: {
      documents: "📄 Потеря документов",
      money: "💳 Деньги и карты",
      health: "🏥 Здоровье",
      flight: "✈️ Проблемы с рейсом",
      hotel: "🏨 Жильё",
      theft: "🦹 Кража и мошенничество",
      lost: "🗺️ Потерялся / нет связи"
    },
    categoryDesc: {
      documents: "Паспорт, виза, билеты, страховка",
      money: "Потеря кошелька, блокировка карт, кража",
      health: "Травма, болезнь, страховой случай",
      flight: "Задержка, отмена, пропущен рейс",
      hotel: "Нет брони, некачественный отель, выселение",
      theft: "Кража вещей, мошенничество, карманники",
      lost: "Потерялся в городе, нет интернета, языковой барьер"
    }
  },
  en: {
    moduleTitle: "Travel",
    moduleSubtitle: "Emergency situations abroad and during trips",
    selectCategory: "Select a situation:",
    back: "← Back",
    backToModule: "← To categories",
    restart: "🔄 Restart",
    print: "🖨️ Print",
    pdf: "📄 PDF",
    share: "🔗 Share",
    step: "Step",
    steps: "Actions",
    warnings: "⚠️ Important",
    emergencyCall: "🚨 Emergency Call",
    sos: "SOS",
    question: "Question",
    of: "of",
    result: "Result",
    noResult: "Could not determine the situation. Try different answers.",
    loading: "Loading...",
    errorLoad: "Error loading data",
    categories: {
      documents: "📄 Lost Documents",
      money: "💳 Money & Cards",
      health: "🏥 Health",
      flight: "✈️ Flight Issues",
      hotel: "🏨 Accommodation",
      theft: "🦹 Theft & Fraud",
      lost: "🗺️ Lost / No Signal"
    },
    categoryDesc: {
      documents: "Passport, visa, tickets, insurance",
      money: "Lost wallet, blocked cards, theft",
      health: "Injury, illness, insurance case",
      flight: "Delay, cancellation, missed flight",
      hotel: "No booking, bad hotel, eviction",
      theft: "Stolen belongings, scams, pickpockets",
      lost: "Lost in city, no internet, language barrier"
    }
  }
};

if (typeof window !== 'undefined') {
  window.TRAVEL_LOCALES = TRAVEL_LOCALES;
}
