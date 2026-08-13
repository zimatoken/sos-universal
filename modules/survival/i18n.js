// modules/survival/i18n.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Переводы для модуля выживания
// ============================================================

const SURVIVAL_LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    app_title: "ВЫЖИВАНИЕ",
    app_subtitle: "Офлайн-ассистент выживания",

    cat_water: "Вода",
    cat_fire: "Огонь",
    cat_shelter: "Укрытие",
    cat_food: "Еда",
    cat_medicine: "Медицина",
    cat_navigation: "Навигация",
    cat_radio: "Связь",
    cat_kit: "Чемоданчик"
  },

  // ===== АНГЛИЙСКИЙ =====
  en: {
    app_title: "SURVIVE",
    app_subtitle: "Offline Survival Assistant",

    cat_water: "Water",
    cat_fire: "Fire",
    cat_shelter: "Shelter",
    cat_food: "Food",
    cat_medicine: "Medicine",
    cat_navigation: "Navigation",
    cat_radio: "Radio",
    cat_kit: "Survival Kit"
  }
};

window.SURVIVAL_LOCALES = SURVIVAL_LOCALES;
console.log('✅ Локализации загружены (SOS SURVIVE module)');