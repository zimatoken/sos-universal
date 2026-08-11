// modules/travel/i18n.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Переводы для модуля Путешествия (TRAVEL)
// ============================================================

const TRAVEL_LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    app_title: "✈️ TRAVEL",
    app_subtitle: "Экстренные ситуации за границей и в поездках",

    // Категории
    cat_documents: "📄 Документы",
    cat_money: "💳 Деньги",
    cat_health: "🏥 Здоровье",
    cat_flight: "✈️ Авиаперелёты",
    cat_hotel: "🏨 Отели",
    cat_theft: "🦹 Кража",
    cat_lost: "🗺️ Потерялся"
  },

  // ===== АНГЛИЙСКИЙ =====
  en: {
    app_title: "✈️ TRAVEL",
    app_subtitle: "Emergency situations abroad and during trips",

    cat_documents: "📄 Documents",
    cat_money: "💳 Money",
    cat_health: "🏥 Health",
    cat_flight: "✈️ Flights",
    cat_hotel: "🏨 Hotels",
    cat_theft: "🦹 Theft",
    cat_lost: "🗺️ Lost"
  }
};

window.TRAVEL_LOCALES = TRAVEL_LOCALES;
console.log('✅ Локализации загружены (SOS TRAVEL module)');