// core/locales.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — Общие фразы для SOS UNIVERSAL + модули
// ============================================================

const LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    // Главный экран
    app_title: "УНИВЕРСАЛ",
    app_subtitle: "Универсальный спасатель",

    // Заголовки модулей (RU)
    app_title_survival: "🆘 ВЫЖИВАНИЕ",
    app_title_auto: "🚗 АВТО",
    app_title_lawyer: "⚖️ ЮРИСТ",
    app_title_home: "🏠 ДОМ",
    app_title_children: "👶 ДЕТИ",
    app_title_pets: "🐕 ЖИВОТНЫЕ",
    app_title_travel: "✈️ ПУТЕШЕСТВИЯ",
    app_title_drone: "🚁 ДРОНЫ",
    app_title_energy: "⚡ ЭНЕРГИЯ",

    // Подзаголовки модулей (RU)
    app_subtitle_survival: "Экстренные ситуации и выживание",
    app_subtitle_auto: "Помощь при поломке автомобиля",
    app_subtitle_lawyer: "Юридическая помощь онлайн",
    app_subtitle_home: "Проблемы в квартире и доме",
    app_subtitle_children: "Безопасность и здоровье детей",
    app_subtitle_pets: "Помощь животным",
    app_subtitle_travel: "Экстренные ситуации за границей и в поездках",
    app_subtitle_drone: "Безопасность при беспилотных летательных аппаратах",
    app_subtitle_energy: "Энергия и питание устройств",

    status_online: "Режим офлайн — база загружена",
    sos_button: "SOS — Я в опасности",
    footer_text: "v2.0 · Полностью офлайн",

    // Модули (главная страница)
    mod_survival: "Выживание",
    mod_auto: "Авто",
    mod_lawyer: "Юрист",
    mod_home: "Дом",
    mod_kids: "Дети",
    mod_animals: "Животные",
    mod_travel: "Путешествия",
    mod_drone: "Дроны",
    mod_energy: "Энергия",
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
    cat_energy: "Энергия",

    // ===== SURVIVAL =====
    survival_title: "ВЫЖИВАНИЕ",
    survival_subtitle: "Офлайн-ассистент выживания",
    cat_water: "Вода",
    cat_fire: "Огонь",
    cat_shelter: "Укрытие",
    cat_food: "Еда",
    cat_medicine: "Медицина",
    cat_navigation: "Навигация",
    cat_radio: "Связь",
    cat_kit: "Чемоданчик",

    // ===== AUTO =====
    auto_title: "🚗 Авто",
    auto_subtitle: "Помощь на дороге и в гараже",
    cat_wont_start: "Не заводится",
    cat_overheating: "Перегрев двигателя",
    cat_flat_tire: "Прокол шины",
    cat_brakes: "Тормоза",
    cat_battery: "Села батарея",
    cat_leak: "Утечка жидкости",
    cat_dtp: "ДТП",

    // ===== LAWYER =====
    lawyer_title: "⚖️ Юрист",
    lawyer_subtitle: "Защита прав и юридическая помощь",
    cat_dtp_lawyer: "ДТП",
    cat_labor: "Трудовые споры",
    cat_housing: "Жилищные вопросы",
    cat_inheritance: "Наследство",
    cat_debts: "Долги и коллекторы",
    cat_divorce: "Развод и алименты",
    cat_consumer: "Защита прав потребителей",

    // ===== HOME =====
    home_title: "🏠 Дом",
    home_subtitle: "Безопасность дома и ЖКХ",
    cat_plumbing: "Вода и канализация",
    cat_electricity: "Электричество",
    cat_home_fire: "Пожар",
    cat_gas: "Газ",
    cat_lock: "Замки и двери",
    cat_heating: "Отопление",
    cat_natural: "Стихия",

    // ===== CHILDREN =====
    children_title: "👶 Дети",
    children_subtitle: "Безопасность, здоровье и помощь детям",
    cat_safety: "Безопасность",
    cat_children_health: "Здоровье",
    cat_injury: "Травмы и первая помощь",
    cat_children_lost: "Пропажа ребёнка",
    cat_bullying: "Буллинг",
    cat_internet: "Интернет-безопасность",
    cat_school: "Школа",

    // ===== PETS =====
    pets_title: "🐾 Животные",
    pets_subtitle: "Помощь домашним питомцам",
    cat_behavior: "Поведение и агрессия",
    cat_care: "Уход и гигиена",
    cat_emergency: "Чрезвычайные ситуации",
    cat_firstaid: "Первая помощь",
    cat_pet_health: "Здоровье",
    cat_lost: "Пропажа питомца",
    cat_poison: "Отравление",

    // ===== TRAVEL =====
    travel_title: "🌍 Путешествия",
    travel_subtitle: "Помощь в поездках",
    cat_documents: "Документы",
    cat_flight: "Перелёты",
    cat_travel_health: "Здоровье",
    cat_hotel: "Отели",
    cat_travel_lost: "Потеря вещей",
    cat_money: "Деньги",
    cat_theft: "Кража",

    // ===== DRONE =====
    drone_title: "🛸 Дроны",
    drone_subtitle: "Оповещение и безопасность",
    cat_comms: "Связь и оповещение",
    cat_detect: "Обнаружение дрона",
    cat_evac: "Эвакуация",
    cat_drone_firstaid: "Первая помощь",
    cat_identify: "Идентификация дрона",
    cat_prep: "Подготовка",
    cat_drone_shelter: "Укрытие",

    // ===== ENERGY =====
    energy_title: "⚡ Энергия",
    energy_subtitle: "Энергия и зарядка без розетки",
    cat_phone_charge: "Зарядка телефона",
    cat_battery_diy: "Батарейки DIY",
    cat_solar: "Солнечная энергия",
    cat_hand_crank: "Ручная динамо",
    cat_cable_pinout: "Распиновка USB",
    cat_power_bank: "Power Bank",
    cat_emergency_light: "Аварийный свет",

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
    click_to_expand: "👆 Нажмите на решение, чтобы увидеть пошаговую инструкцию",
    no_results: "⚠️ Нет точных решений",
    no_results_desc: "Попробуйте изменить параметры или выберите другой раздел.",

    // Бейджи
    badge_fast: "⚡ Быстро",
    badge_medium: "⏱️ Средне",
    badge_slow: "🐢 Долго",
    badge_high: "✅ Надёжно",
    badge_medium_rel: "⚠️ Средне",
    badge_low: "❌ Низко",

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
    sos_contact_title: "📱 Экстренный контакт",
    sos_phone_label: "Телефон близкого человека *",
    sos_name_label: "Имя близкого человека (опционально)",
    sos_send_btn: "🆘 ОТПРАВИТЬ SOS",
    sos_signals: "📡 Сигналы для спасателей",
    sos_signal_1: "3 огня в треугольнике (международный сигнал бедствия)",
    sos_signal_2: "Зеркало / блестящий предмет — отражать солнце",
    sos_signal_3: "Громкие звуки — 3 удара, пауза, 3 удара",
    sos_signal_4: "Буквы SOS на открытой местности (камни, ветки)",
    sos_flashlight: "🔦 Фонарик (SOS-мигание)",
    sos_flashlight_on: "🔦 Фонарик ВКЛ (SOS-мигание)",
    sos_coords_saved: "Координаты сохранены в кэш",

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
    support_title: "Спасибо, что выбрали SOS!",
    support_desc: "Если приложение помогло — скажите спасибо, это вдохновляет нас делать его лучше!",
    support_telegram: "Написать в Telegram",
    support_donate: "Поддержать проект",
    support_trust: "Есть идеи или предложения? Пишите нам на почту sos.universal.help@gmail.com. Спасибо, что вы с нами!",
    support_footer: "Спасибо, что вы с нами! 🙌",

    // Язык
    lang_ru: "🇷🇺 Русский",
    lang_en: "🇬🇧 English"
  },

  // ===== АНГЛИЙСКИЙ =====
  en: {
    // Main screen
    app_title: "UNIVERSAL",
    app_subtitle: "Universal Rescuer",

    // Module titles (EN)
    app_title_survival: "🆘 SURVIVAL",
    app_title_auto: "🚗 AUTO",
    app_title_lawyer: "⚖️ LAWYER",
    app_title_home: "🏠 HOME",
    app_title_children: "👶 CHILDREN",
    app_title_pets: "🐕 PETS",
    app_title_travel: "✈️ TRAVEL",
    app_title_drone: "🚁 DRONE",
    app_title_energy: "⚡ ENERGY",

    // Module subtitles (EN)
    app_subtitle_survival: "Emergency situations and survival",
    app_subtitle_auto: "Car breakdown assistance",
    app_subtitle_lawyer: "Online legal assistance",
    app_subtitle_home: "Apartment and home issues",
    app_subtitle_children: "Children safety and health",
    app_subtitle_pets: "Animal assistance",
    app_subtitle_travel: "Emergency situations abroad and during trips",
    app_subtitle_drone: "Unmanned aerial vehicle safety",
    app_subtitle_energy: "Energy and device charging",

    status_online: "Offline mode — database loaded",
    sos_button: "SOS — I'm in danger",
    footer_text: "v2.0 · Fully offline",

    // Modules
    mod_survival: "Survival",
    mod_auto: "Auto",
    mod_lawyer: "Lawyer",
    mod_home: "Home",
    mod_kids: "Kids",
    mod_animals: "Animals",
    mod_travel: "Travel",
    mod_drone: "Drones",
    mod_energy: "Energy",
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
    cat_energy: "Energy",

    // ===== SURVIVAL =====
    survival_title: "SURVIVE",
    survival_subtitle: "Offline Survival Assistant",
    cat_water: "Water",
    cat_fire: "Fire",
    cat_shelter: "Shelter",
    cat_food: "Food",
    cat_medicine: "Medicine",
    cat_navigation: "Navigation",
    cat_radio: "Radio",
    cat_kit: "Survival Kit",

    // ===== AUTO =====
    auto_title: "🚗 Auto",
    auto_subtitle: "Road and garage assistance",
    cat_wont_start: "Won't Start",
    cat_overheating: "Overheating",
    cat_flat_tire: "Flat Tire",
    cat_brakes: "Brakes",
    cat_battery: "Dead Battery",
    cat_leak: "Fluid Leak",
    cat_dtp: "Accident",

    // ===== LAWYER =====
    lawyer_title: "⚖️ Lawyer",
    lawyer_subtitle: "Rights protection and legal help",
    cat_dtp_lawyer: "Accident",
    cat_labor: "Labor Disputes",
    cat_housing: "Housing Issues",
    cat_inheritance: "Inheritance",
    cat_debts: "Debts & Collectors",
    cat_divorce: "Divorce & Alimony",
    cat_consumer: "Consumer Rights",

    // ===== HOME =====
    home_title: "🏠 Home",
    home_subtitle: "Home safety and utilities",
    cat_plumbing: "Plumbing",
    cat_electricity: "Electricity",
    cat_home_fire: "Fire",
    cat_gas: "Gas",
    cat_lock: "Locks & Doors",
    cat_heating: "Heating",
    cat_natural: "Natural Disasters",

    // ===== CHILDREN =====
    children_title: "👶 Children",
    children_subtitle: "Safety, health and help for children",
    cat_safety: "Safety",
    cat_children_health: "Health",
    cat_injury: "Injuries & First Aid",
    cat_children_lost: "Missing Child",
    cat_bullying: "Bullying",
    cat_internet: "Internet Safety",
    cat_school: "School",

    // ===== PETS =====
    pets_title: "🐾 Pets",
    pets_subtitle: "Help for pets",
    cat_behavior: "Behavior & Aggression",
    cat_care: "Care & Hygiene",
    cat_emergency: "Emergencies",
    cat_firstaid: "First Aid",
    cat_pet_health: "Health",
    cat_lost: "Lost Pet",
    cat_poison: "Poisoning",

    // ===== TRAVEL =====
    travel_title: "🌍 Travel",
    travel_subtitle: "Help during trips",
    cat_documents: "Documents",
    cat_flight: "Flights",
    cat_travel_health: "Health",
    cat_hotel: "Hotels",
    cat_travel_lost: "Lost Items",
    cat_money: "Money",
    cat_theft: "Theft",

    // ===== DRONE =====
    drone_title: "🛸 Drones",
    drone_subtitle: "Alerting and safety",
    cat_comms: "Communication & Alerting",
    cat_detect: "Drone Detection",
    cat_evac: "Evacuation",
    cat_drone_firstaid: "First Aid",
    cat_identify: "Drone Identification",
    cat_prep: "Preparation",
    cat_drone_shelter: "Shelter",

    // ===== ENERGY =====
    energy_title: "⚡ Energy",
    energy_subtitle: "Energy and charging without outlet",
    cat_phone_charge: "Phone Charging",
    cat_battery_diy: "DIY Batteries",
    cat_solar: "Solar Energy",
    cat_hand_crank: "Hand Crank",
    cat_cable_pinout: "USB Pinout",
    cat_power_bank: "Power Bank",
    cat_emergency_light: "Emergency Light",

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
    click_to_expand: "👆 Click on a solution to see step-by-step instructions",
    no_results: "⚠️ No exact solutions",
    no_results_desc: "Try changing parameters or choose another section.",

    // Badges
    badge_fast: "⚡ Fast",
    badge_medium: "⏱️ Medium",
    badge_slow: "🐢 Slow",
    badge_high: "✅ Reliable",
    badge_medium_rel: "⚠️ Medium",
    badge_low: "❌ Low",

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
    sos_contact_title: "📱 Emergency contact",
    sos_phone_label: "Contact phone number *",
    sos_name_label: "Contact name (optional)",
    sos_send_btn: "🆘 SEND SOS",
    sos_signals: "📡 Rescue signals",
    sos_signal_1: "3 fires in triangle (international distress signal)",
    sos_signal_2: "Mirror / shiny object — reflect sunlight",
    sos_signal_3: "Loud sounds — 3 hits, pause, 3 hits",
    sos_signal_4: "SOS letters in open area (stones, branches)",
    sos_flashlight: "🔦 Flashlight (SOS blinking)",
    sos_flashlight_on: "🔦 Flashlight ON (SOS blinking)",
    sos_coords_saved: "Coordinates saved to cache",

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
    support_title: "Thank you for choosing SOS!",
    support_desc: "If the app helped — say thanks, it inspires us to make it better!",
    support_telegram: "Write on Telegram",
    support_donate: "Support the project",
    support_trust: "Have ideas or suggestions? Write to us at sos.universal.help@gmail.com. Thank you for being with us!",
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
console.log(`🌍 Доступные языки: ${Object.keys(LOCALES).join(', ')}`);