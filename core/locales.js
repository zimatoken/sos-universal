// core/locales.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Общие фразы для SOS UNIVERSAL + модули
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
    
    // Модули (главная страница)
    mod_survival: "Выживание",
    mod_auto: "Авто",
    mod_lawyer: "Юрист",
    mod_home: "Дом",
    mod_kids: "Дети",
    mod_animals: "Животные",
    mod_travel: "Путешествия",
    mod_drone: "Дроны",
    mod_soon: "Скоро",
    
    // Модули (для data-i18n на главной)
    cat_survival: "Выживание",
    cat_auto: "Авто",
    cat_lawyer: "Юрист",
    cat_home: "Дом",
    cat_kids: "Дети",
    cat_animals: "Животные",
    cat_travel: "Путешествия",
    cat_drone: "Дроны",
    
    // ===== SURVIVAL =====
    survival_title: "ВЫЖИВАНИЕ",
    survival_subtitle: "Офлайн-ассистент выживания",
    survival_water: "Вода",
    survival_fire: "Огонь",
    survival_shelter: "Укрытие",
    survival_food: "Еда",
    survival_medicine: "Медицина",
    survival_navigation: "Навигация",
    survival_radio: "Связь",
    survival_kit: "Чемоданчик",
    
    // ===== AUTO =====
    auto_title: "🚗 Авто",
    auto_subtitle: "Помощь на дороге и в гараже",
    auto_battery: "Села батарея",
    auto_brakes: "Тормоза",
    auto_dtp: "ДТП",
    auto_flat_tire: "Прокол шины",
    auto_leak: "Утечка жидкости",
    auto_overheating: "Перегрев двигателя",
    auto_wont_start: "Не заводится",
    
    // ===== LAWYER =====
    lawyer_title: "⚖️ Юрист",
    lawyer_subtitle: "Защита прав и юридическая помощь",
    lawyer_consumer: "Защита прав потребителей",
    lawyer_debts: "Долги и коллекторы",
    lawyer_divorce: "Развод и алименты",
    lawyer_dtp: "ДТП",
    lawyer_housing: "Жилищные вопросы",
    lawyer_inheritance: "Наследство",
    lawyer_labor: "Трудовые споры",
    
    // ===== HOME =====
    home_title: "🏠 Дом",
    home_subtitle: "Безопасность дома и ЖКХ",
    home_plumbing: "Вода и канализация",
    home_electricity: "Электричество",
    home_fire: "Пожар",
    home_gas: "Газ",
    home_lock: "Замки и двери",
    home_heating: "Отопление",
    home_natural: "Стихия",
    
    // ===== CHILDREN =====
    children_title: "👶 Дети",
    children_subtitle: "Безопасность, здоровье и помощь детям",
    children_safety: "Безопасность",
    children_health: "Здоровье",
    children_injury: "Травмы и первая помощь",
    children_lost: "Пропажа ребёнка",
    children_bullying: "Буллинг",
    children_internet: "Интернет-безопасность",
    children_school: "Школа",
    
    // ===== PETS =====
    pets_title: "🐾 Животные",
    pets_subtitle: "Помощь домашним питомцам",
    pets_behavior: "Поведение и агрессия",
    pets_care: "Уход и гигиена",
    pets_emergency: "Чрезвычайные ситуации",
    pets_firstaid: "Первая помощь",
    pets_health: "Здоровье",
    pets_lost: "Пропажа питомца",
    pets_poison: "Отравление",
    
    // ===== TRAVEL =====
    travel_title: "🌍 Путешествия",
    travel_subtitle: "Помощь в поездках",
    travel_documents: "Документы",
    travel_flight: "Перелёты",
    travel_health: "Здоровье",
    travel_hotel: "Отели",
    travel_lost: "Потеря вещей",
    travel_money: "Деньги",
    travel_theft: "Кража",
    
    // ===== DRONE =====
    drone_title: "🛸 Дроны",
    drone_subtitle: "Оповещение и безопасность",
    drone_comms: "Связь и оповещение",
    drone_detect: "Обнаружение дрона",
    drone_evac: "Эвакуация",
    drone_firstaid: "Первая помощь",
    drone_identify: "Идентификация дрона",
    drone_prep: "Подготовка",
    drone_shelter: "Укрытие",
    
    // Общие
    back: "← Назад",
    next: "Далее",
    show_results: "Показать результаты",
    back_home: "← На главную",
    back_results: "← Назад к результатам",
    restart: "🔄 Новый запрос",
    settings: "Настройки",
    language: "Язык",
    theme: "Тема",
    voice: "Голос",
    download_pdf: "Скачать PDF",
    
    // Вопросы
    question_of: "Вопрос {current} из {total}",
    select_all: "✅ Выберите все, что применимо",
    select_one: "Выберите один вариант",
    
    // Результаты
    results_title: "{title} — Результаты",
    results_subtitle: "Под вашу ситуацию",
    no_results: "⚠️ Нет точных решений",
    no_results_desc: "Попробуйте изменить параметры или выберите другой раздел.",
    
    // Бейджи
    badge_fast: "Быстро",
    badge_medium: "⏱Средне",
    badge_slow: "Медленно",
    badge_high: "Надёжно",
    badge_medium_rel: "Средне",
    badge_low: "Риск",
    
    // Детали
    detail_steps: "Шаги выполнения",
    detail_warnings: "Важные предупреждения",
    
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
    support_title: "❤️ Спасибо, что выбрали SOS!",
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
    mod_drone: "Drones",
    mod_soon: "Coming soon",
    
    // Modules (for data-i18n on main page)
    cat_survival: "Survival",
    cat_auto: "Auto",
    cat_lawyer: "Lawyer",
    cat_home: "Home",
    cat_kids: "Kids",
    cat_animals: "Animals",
    cat_travel: "Travel",
    cat_drone: "Drones",
    
    // ===== SURVIVAL =====
    survival_title: "SURVIVE",
    survival_subtitle: "Offline Survival Assistant",
    survival_water: "Water",
    survival_fire: "Fire",
    survival_shelter: "Shelter",
    survival_food: "Food",
    survival_medicine: "Medicine",
    survival_navigation: "Navigation",
    survival_radio: "Radio",
    survival_kit: "Survival Kit",
    
    // ===== AUTO =====
    auto_title: "🚗 Auto",
    auto_subtitle: "Road and garage assistance",
    auto_battery: "Dead Battery",
    auto_brakes: "Brakes",
    auto_dtp: "Accident",
    auto_flat_tire: "Flat Tire",
    auto_leak: "Fluid Leak",
    auto_overheating: "Overheating",
    auto_wont_start: "Won't Start",
    
    // ===== LAWYER =====
    lawyer_title: "⚖️ Lawyer",
    lawyer_subtitle: "Rights protection and legal help",
    lawyer_consumer: "Consumer Rights",
    lawyer_debts: "Debts & Collectors",
    lawyer_divorce: "Divorce & Alimony",
    lawyer_dtp: "Accident",
    lawyer_housing: "Housing Issues",
    lawyer_inheritance: "Inheritance",
    lawyer_labor: "Labor Disputes",
    
    // ===== HOME =====
    home_title: "🏠 Home",
    home_subtitle: "Home safety and utilities",
    home_plumbing: "Plumbing",
    home_electricity: "Electricity",
    home_fire: "Fire",
    home_gas: "Gas",
    home_lock: "Locks & Doors",
    home_heating: "Heating",
    home_natural: "Natural Disasters",
    
    // ===== CHILDREN =====
    children_title: "👶 Children",
    children_subtitle: "Safety, health and help for children",
    children_safety: "Safety",
    children_health: "Health",
    children_injury: "Injuries & First Aid",
    children_lost: "Missing Child",
    children_bullying: "Bullying",
    children_internet: "Internet Safety",
    children_school: "School",
    
    // ===== PETS =====
    pets_title: "🐾 Pets",
    pets_subtitle: "Help for pets",
    pets_behavior: "Behavior & Aggression",
    pets_care: "Care & Hygiene",
    pets_emergency: "Emergencies",
    pets_firstaid: "First Aid",
    pets_health: "Health",
    pets_lost: "Lost Pet",
    pets_poison: "Poisoning",
    
    // ===== TRAVEL =====
    travel_title: "🌍 Travel",
    travel_subtitle: "Help during trips",
    travel_documents: "Documents",
    travel_flight: "Flights",
    travel_health: "Health",
    travel_hotel: "Hotels",
    travel_lost: "Lost Items",
    travel_money: "Money",
    travel_theft: "Theft",
    
    // ===== DRONE =====
    drone_title: "🛸 Drones",
    drone_subtitle: "Alerting and safety",
    drone_comms: "Communication & Alerting",
    drone_detect: "Drone Detection",
    drone_evac: "Evacuation",
    drone_firstaid: "First Aid",
    drone_identify: "Drone Identification",
    drone_prep: "Preparation",
    drone_shelter: "Shelter",
    
    // Common
    back: "← Back",
    next: "Next",
    show_results: "Show solutions",
    back_home: "← Home",
    back_results: "← Back to results",
    restart: "🔄 New request",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    voice: "Voice",
    download_pdf: "Download PDF",
    
    // Questions
    question_of: "Question {current} of {total}",
    select_all: "✅ Select all that apply",
    select_one: "Select one option",
    
    // Results
    results_title: "{title} — Results",
    results_subtitle: "For your situation",
    no_results: "⚠️ No exact solutions",
    no_results_desc: "Try changing parameters or choose another section.",
    
    // Badges
    badge_fast: "Fast",
    badge_medium: "⏱Medium",
    badge_slow: "Slow",
    badge_high: "Reliable",
    badge_medium_rel: "Medium",
    badge_low: "Risky",
    
    // Details
    detail_steps: "Steps",
    detail_warnings: "Warnings",
    
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
    support_title: "❤️ Thank you for choosing SOS!",
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
window.LOCALES = LOCALES;

// Функция перевода
function t(key) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ru';
  const texts = LOCALES[lang] || LOCALES.ru;
  
  // Подстановка параметров
  if (arguments.length > 1 && typeof arguments[1] === 'object') {
    let result = texts[key] || key;
    const params = arguments[1];
    for (const [k, v] of Object.entries(params)) {
      result = result.replace(`{${k}}`, v);
    }
    return result;
  }
  
  return texts[key] || key;
}

window.t = t;

console.log('✅ Локализации загружены (SOS UNIVERSAL core + модули)');