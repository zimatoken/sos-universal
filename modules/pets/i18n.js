// modules/pets/i18n.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Переводы для модуля Животные
// ============================================================

const PETS_LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    app_title: "🐕 Животные",
    app_subtitle: "Помощь, здоровье и безопасность питомцев",

    // Категории
    cat_firstaid: "Первая помощь",
    cat_lost: "Пропажа питомца",
    cat_behavior: "Поведение и агрессия",
    cat_health: "Здоровье",
    cat_poison: "Отравление",
    cat_emergency: "Чрезвычайные ситуации",
    cat_care: "Уход и гигиена"
  },

  // ===== АНГЛИЙСКИЙ =====
  en: {
    app_title: "🐕 Pets",
    app_subtitle: "Help, health and safety for pets",

    cat_firstaid: "First Aid",
    cat_lost: "Lost Pet",
    cat_behavior: "Behavior & Aggression",
    cat_health: "Health",
    cat_poison: "Poisoning",
    cat_emergency: "Emergencies",
    cat_care: "Care & Hygiene"
  }
};

window.PETS_LOCALES = PETS_LOCALES;
console.log('✅ Локализации загружены (SOS PETS module)');
