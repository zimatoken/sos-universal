// modules/auto/i18n.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Переводы для модуля авто
// ============================================================

const AUTO_LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    // Главный экран модуля
    app_title: "AUTO",
    app_subtitle: "Помощь при поломке автомобиля",
    status_online: "Режим офлайн — база загружена",
    sos_button: "SOS — Я в опасности",
    footer_text: "v1.0 · Полностью офлайн",
    
    // Категории (проблемы)
    cat_wont_start: "Не заводится",
    cat_overheating: "Перегрев",
    cat_flat_tire: "Прокол шины",
    cat_brakes: "Проблемы с тормозами",
    cat_battery: "Села батарея",
    cat_leak: "Утечка жидкости",
    
    // Общие
    back: "← Назад",
    next: "Далее",
    show_results: "Показать решения",
    restart: "🔄 Новый запрос",
    back_home: "← На главную",
    back_results: "← Назад к результатам",
    
    // Вопросы
    question_of: "Вопрос {current} из {total}",
    
    // Результаты
    results_title: "{title} — Результаты",
    results_subtitle: "Под вашу ситуацию",
    no_results: "⚠️ Нет точных решений",
    no_results_desc: "Попробуйте изменить параметры или выберите другой раздел. Универсальные советы: проверьте уровень топлива, аккумулятор, вызовите помощь.",
    
    // Бейджи
    badge_fast: "⚡ Быстро",
    badge_medium: "⏱️ Средне",
    badge_slow: "🐢 Медленно",
    badge_high: "✅ Надёжно",
    badge_medium_rel: "⚠️ Средне",
    badge_low: "❌ Риск",
    
    // Детали
    detail_steps: "📋 Шаги выполнения",
    detail_warnings: "⚠️ Важные предупреждения",
    
    // SOS
    sos_title: "Режим SOS",
    sos_desc: "Ваши координаты сохранены. При появлении сигнала будет отправлено сообщение экстренным контактам.",
    sos_gps: "📍 GPS-координаты (кэш)",
    sos_gps_detecting: "Определение...",
    sos_gps_unavailable: "GPS недоступен — координаты не определены",
    sos_gps_unsupported: "GPS не поддерживается устройством",
    sos_gps_updated: "Обновлено: {time}",
    sos_compass: "Используйте компас и ориентиры",
    sos_signals: "📡 Сигналы для спасателей",
    sos_signal_1: "3 огня в треугольнике (международный сигнал бедствия)",
    sos_signal_2: "Зеркало / блестящий предмет — отражать солнце",
    sos_signal_3: "Громкие звуки — 3 удара, пауза, 3 удара",
    sos_signal_4: "Буквы SOS на открытой местности (камни, ветки)",
    sos_flashlight: "🔦 Фонарик (SOS-мигание)",
    sos_flashlight_on: "🔦 Фонарик ВКЛ (SOS-мигание)",
    sos_coords_saved: "Координаты сохранены в кэш",
    sos_contact_title: "📱 Экстренный контакт",
    sos_phone_label: "Телефон близкого человека *",
    sos_name_label: "Имя близкого человека (опционально)",
    sos_send_btn: "🆘 ОТПРАВИТЬ SOS",
    
    // Toast
    toast_develop: "Раздел в разработке",
    toast_no_results: "Нет результатов для экспорта",
    toast_voice_unsupported: "Голосовой ввод не поддерживается",
    
    // Язык
    lang_ru: "🇷🇺 Русский",
    lang_en: "🇬🇧 English"
  },
  
  // ===== АНГЛИЙСКИЙ =====
  en: {
    // Main screen
    app_title: "AUTO",
    app_subtitle: "Car breakdown assistance",
    status_online: "Offline mode — database loaded",
    sos_button: "SOS — I'm in danger",
    footer_text: "v1.0 · Fully offline",
    
    // Categories (problems)
    cat_wont_start: "Won't start",
    cat_overheating: "Overheating",
    cat_flat_tire: "Flat tire",
    cat_brakes: "Brake problems",
    cat_battery: "Dead battery",
    cat_leak: "Fluid leak",
    
    // Common
    back: "← Back",
    next: "Next",
    show_results: "Show solutions",
    restart: "🔄 New request",
    back_home: "← Home",
    back_results: "← Back to results",
    
    // Questions
    question_of: "Question {current} of {total}",
    
    // Results
    results_title: "{title} — Results",
    results_subtitle: "For your situation",
    no_results: "⚠️ No exact solutions",
    no_results_desc: "Try changing parameters or choose another section. Universal tips: check fuel level, battery, call for help.",
    
    // Badges
    badge_fast: "⚡ Fast",
    badge_medium: "⏱️ Medium",
    badge_slow: "🐢 Slow",
    badge_high: "✅ Reliable",
    badge_medium_rel: "⚠️ Medium",
    badge_low: "❌ Risky",
    
    // Details
    detail_steps: "📋 Steps",
    detail_warnings: "⚠️ Warnings",
    
    // SOS
    sos_title: "SOS Mode",
    sos_desc: "Your coordinates are saved. When signal appears, emergency message will be sent.",
    sos_gps: "📍 GPS coordinates (cached)",
    sos_gps_detecting: "Detecting...",
    sos_gps_unavailable: "GPS unavailable — coordinates not defined",
    sos_gps_unsupported: "GPS not supported by device",
    sos_gps_updated: "Updated: {time}",
    sos_compass: "Use compass and landmarks",
    sos_signals: "📡 Rescue signals",
    sos_signal_1: "3 fires in triangle (international distress signal)",
    sos_signal_2: "Mirror / shiny object — reflect sunlight",
    sos_signal_3: "Loud sounds — 3 hits, pause, 3 hits",
    sos_signal_4: "SOS letters in open area (stones, branches)",
    sos_flashlight: "🔦 Flashlight (SOS blinking)",
    sos_flashlight_on: "🔦 Flashlight ON (SOS blinking)",
    sos_coords_saved: "Coordinates saved to cache",
    sos_contact_title: "📱 Emergency contact",
    sos_phone_label: "Contact phone number *",
    sos_name_label: "Contact name (optional)",
    sos_send_btn: "🆘 SEND SOS",
    
    // Toast
    toast_develop: "Section in development",
    toast_no_results: "No results to export",
    toast_voice_unsupported: "Voice input not supported",
    
    // Language
    lang_ru: "🇷🇺 Русский",
    lang_en: "🇬🇧 English"
  }
};

// ===== ЭКСПОРТ =====
window.AUTO_LOCALES = AUTO_LOCALES;

console.log('✅ Локализации загружены (SOS AUTO module)');