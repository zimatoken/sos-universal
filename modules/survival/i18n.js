// modules/survival/i18n.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Переводы для модуля выживания
// ============================================================

const SURVIVAL_LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    // Главный экран модуля
    app_title: "SURVIVE",
    app_subtitle: "Офлайн-ассистент выживания",
    status_online: "Режим офлайн — база загружена",
    sos_button: "SOS — Я в опасности",
    footer_text: "v2.0 · Полностью офлайн",
    
    // Категории
    cat_water: "Вода",
    cat_fire: "Огонь",
    cat_shelter: "Укрытие",
    cat_food: "Еда",
    cat_medicine: "Медицина",
    cat_navigation: "Навигация",
    cat_radio: "Связь",
    cat_kit: "Чемоданчик",
    
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
    no_results_desc: "Попробуйте изменить параметры или выберите другой раздел. Универсальные советы: ищите воду, укрытие, оставайтесь на месте и подавайте сигналы.",
    
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
    
    // Карта
    map_link: "🗺️ Открыть карту (требуется интернет)",
    map_hint: "Или скачай Organic Maps — работает офлайн",
    
    // Психология
    psychology_breath: "Дыши: 4 сек вдох, 4 пауза, 4 выдох",
    psychology_plan: "Планируй: разбей день на отрезки",
    psychology_talk: "Говори с собой вслух — это успокаивает",
    psychology_goals: "Ставь маленькие цели: 'собрать дрова на 2 часа'",
    
    // Поддержка
    support_title: "❤️ Спасибо, что выбрали SOS SURVIVE!",
    support_desc: "Если приложение помогло — скажите спасибо, это вдохновляет нас делать его лучше!",
    support_telegram: "📱 Написать в Telegram",
    support_donate: "💳 Поддержать проект",
    support_trust: "💎 Все средства идут на развитие проекта и помощь людям в экстренных ситуациях. Спасибо за доверие!",
    support_footer: "Спасибо, что вы с нами! 🙌",
    
    // Язык
    lang_ru: "🇷🇺 Русский",
    lang_en: "🇬🇧 English"
  },
  
  // ===== АНГЛИЙСКИЙ =====
  en: {
    // Main screen
    app_title: "SURVIVE",
    app_subtitle: "Offline Survival Assistant",
    status_online: "Offline mode — database loaded",
    sos_button: "SOS — I'm in danger",
    footer_text: "v2.0 · Fully offline",
    
    // Categories
    cat_water: "Water",
    cat_fire: "Fire",
    cat_shelter: "Shelter",
    cat_food: "Food",
    cat_medicine: "Medicine",
    cat_navigation: "Navigation",
    cat_radio: "Radio",
    cat_kit: "Survival Kit",
    
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
    no_results_desc: "Try changing parameters or choose another section. Universal tips: find water, shelter, stay put and send signals.",
    
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
    
    // Map
    map_link: "🗺️ Open map (requires internet)",
    map_hint: "Or download Organic Maps — works offline",
    
    // Psychology
    psychology_breath: "Breathe: 4 sec inhale, 4 pause, 4 exhale",
    psychology_plan: "Plan: break the day into segments",
    psychology_talk: "Talk to yourself out loud — it calms",
    psychology_goals: "Set small goals: 'collect wood for 2 hours'",
    
    // Support
    support_title: "❤️ Thank you for choosing SOS SURVIVE!",
    support_desc: "If the app helped — say thanks, it inspires us to make it better!",
    support_telegram: "📱 Write on Telegram",
    support_donate: "💳 Support the project",
    support_trust: "💎 All funds go to project development and helping people in emergencies. Thank you for your trust!",
    support_footer: "Thank you for being with us! 🙌",
    
    // Language
    lang_ru: "🇷🇺 Русский",
    lang_en: "🇬🇧 English"
  }
};

// ===== ЭКСПОРТ =====
window.SURVIVAL_LOCALES = SURVIVAL_LOCALES;

console.log('✅ Локализации загружены (SOS SURVIVE module)');