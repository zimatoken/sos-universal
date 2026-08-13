// modules/auto/i18n.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Переводы для модуля авто
// ============================================================

const AUTO_LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    app_title: "🚗 АВТО",
    app_subtitle: "Помощь при поломке автомобиля",

    cat_wont_start: "Не заводится",
    cat_overheating: "Перегрев",
    cat_flat_tire: "Прокол шины",
    cat_brakes: "Проблемы с тормозами",
    cat_battery: "Села батарея",
    cat_leak: "Утечка жидкости",
    cat_dtp: "ДТП / Авария"
  },

  // ===== АНГЛИЙСКИЙ =====
  en: {
    app_title: "🚗 AUTO",
    app_subtitle: "Car breakdown assistance",

    cat_wont_start: "Won't start",
    cat_overheating: "Overheating",
    cat_flat_tire: "Flat tire",
    cat_brakes: "Brake problems",
    cat_battery: "Dead battery",
    cat_leak: "Fluid leak",
    cat_dtp: "Accident / Crash"
  }
};

window.AUTO_LOCALES = AUTO_LOCALES;
console.log('✅ Локализации загружены (SOS AUTO module)');