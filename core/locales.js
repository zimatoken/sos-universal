// core/locales.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Общие фразы для SOS UNIVERSAL
// ============================================================

const LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    // Главный экран
    app_title: "UNIVERSAL",
    app_subtitle: "Супер-приложение для любых ситуаций",
    status_online: "Режим офлайн — база загружена",
    sos_button: "SOS — Я в опасности",
    footer_text: "v1.0 · Полностью офлайн",
    
    // Модули
    mod_survival: "Выживание",
    mod_auto: "Авто",
    mod_lawyer: "Юрист",
    mod_home: "Дом",
    mod_kids: "Дети",
    mod_animals: "Животные",
    mod_travel: "Путешествия",
    mod_soon: "Скоро",
    
    // Общие
    back: "← Назад",
    next: "Далее",
    settings: "Настройки",
    language: "Язык",
    theme: "Тема",
    voice: "Голос",
    download_pdf: "Скачать PDF",
    
    // Язык
    lang_ru: "🇷🇺 Русский",
    lang_en: "🇬🇧 English"
  },
  
  // ===== АНГЛИЙСКИЙ =====
  en: {
    // Main screen
    app_title: "UNIVERSAL",
    app_subtitle: "Super-app for any situation",
    status_online: "Offline mode — database loaded",
    sos_button: "SOS — I'm in danger",
    footer_text: "v1.0 · Fully offline",
    
    // Modules
    mod_survival: "Survival",
    mod_auto: "Auto",
    mod_lawyer: "Lawyer",
    mod_home: "Home",
    mod_kids: "Kids",
    mod_animals: "Animals",
    mod_travel: "Travel",
    mod_soon: "Coming soon",
    
    // Common
    back: "← Back",
    next: "Next",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    voice: "Voice",
    download_pdf: "Download PDF",
    
    // Language
    lang_ru: "🇷🇺 Русский",
    lang_en: "🇬🇧 English"
  }
};

// ===== ЭКСПОРТ =====
window.LOCALES = LOCALES;

// Функция перевода
function t(key) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ru';
  const texts = LOCALES[lang] || LOCALES.ru;
  return texts[key] || key;
}

window.t = t;

console.log('✅ Локализации загружены (SOS UNIVERSAL core)');