// modules/drone/i18n.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Переводы для модуля Дроны (SOS DRONE)
// ============================================================

const DRONE_LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    // Главный экран модуля
    app_title: "🚁 ДРОНЫ",
    app_subtitle: "Безопасность при беспилотных летательных аппаратах",

    // Категории
    cat_detect: "Обнаружение дрона",
    cat_identify: "Идентификация",
    cat_shelter: "Укрытие",
    cat_comms: "Связь и оповещение",
    cat_evac: "Эвакуация",
    cat_firstaid: "Первая помощь",
    cat_prep: "Подготовка"
  },

  // ===== АНГЛИЙСКИЙ =====
  en: {
    // Main screen
    app_title: "🚁 DRONE",
    app_subtitle: "Safety for unmanned aerial vehicles (UAVs)",

    // Categories
    cat_detect: "Drone Detection",
    cat_identify: "Identification",
    cat_shelter: "Shelter",
    cat_comms: "Communication & Alerting",
    cat_evac: "Evacuation",
    cat_firstaid: "First Aid",
    cat_prep: "Preparation"
  }
};

// ===== ЭКСПОРТ =====
window.DRONE_LOCALES = DRONE_LOCALES;
console.log('✅ Локализации загружены (SOS DRONE module)');
