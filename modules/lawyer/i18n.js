// modules/lawyer/i18n.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Переводы для модуля Юрист
// ============================================================

const LAWYER_LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    app_title: "⚖️ YRIST",
    app_subtitle: "Юридическая помощь в любой ситуации",

    cat_dtp: "🚨 ДТП / Авария",
    cat_labor: "💼 Трудовые споры",
    cat_housing: "🏠 Жилищные вопросы",
    cat_inheritance: "📜 Наследство",
    cat_debts: "💸 Долги и коллекторы",
    cat_divorce: "💔 Развод и алименты",
    cat_consumer: "🛡️ Защита прав потребителей"
  },

  // ===== АНГЛИЙСКИЙ =====
  en: {
    app_title: "⚖️ LAWYER",
    app_subtitle: "Legal assistance in any situation",

    cat_dtp: "🚨 Accident / Crash",
    cat_labor: "💼 Labor Disputes",
    cat_housing: "🏠 Housing Issues",
    cat_inheritance: "📜 Inheritance",
    cat_debts: "💸 Debts & Collectors",
    cat_divorce: "💔 Divorce & Alimony",
    cat_consumer: "🛡️ Consumer Rights"
  }
};

window.LAWYER_LOCALES = LAWYER_LOCALES;
console.log('✅ Локализации загружены (SOS LAWYER module)');