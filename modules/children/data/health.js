// === МОДУЛЬ: ДЕТИ — ЗДОРОВЬЕ (УЛУЧШЕННАЯ ВЕРСИЯ) ===
const healthData = {
  category: "health",
  title: "🤒 Здоровье и первая помощь",
  description: "Температура, рвота, аллергия, судороги, боль, кашель, сыпь — когда и как действовать",

  questions: [
    {
      id: "symptom",
      text: "Какой главный симптом у ребёнка?",
      type: "single",
      options: [
        { id: "fever", label: "Высокая температура", tags: ["fever"] },
        { id: "vomit", label: "Рвота / понос", tags: ["vomit", "diarrhea"] },
        { id: "allergy", label: "Сыпь / отёк / крапивница", tags: ["allergy", "rash"] },
        { id: "seizure", label: "Судороги / потеря сознания", tags: ["seizure"] },
        { id: "pain", label: "Сильная боль (живот, голова, ухо)", tags: ["pain"] },
        { id: "breath", label: "Затруднённое дыхание / кашель", tags: ["breath", "cough"] },
        { id: "rash_infect", label: "Сыпь с температурой (инфекционная)", tags: ["rash", "fever"] }
      ]
    },
    {
      id: "age",
      text: "Возраст ребёнка?",
      type: "single",
      options: [
        { id: "infant", label: "Младенец (0–3 месяца)", tags: ["infant_0_3"] },
        { id: "baby", label: "Грудной (3–12 месяцев)", tags: ["baby"] },
        { id: "toddler", label: "1–3 года", tags: ["toddler"] },
        { id: "preschool", label: "3–7 лет", tags: ["preschool"] },
        { id: "school", label: "7+ лет", tags: ["school"] }
      ]
    },
    {
      id: "duration",
      text: "Как долго длится симптом?",
      type: "single",
      options: [
        { id: "less_1h", label: "Менее 1 часа (остро)", tags: ["acute"] },
        { id: "hours", label: "Несколько часов", tags: ["hours"] },
        { id: "days", label: "1–3 дня", tags: ["days"] },
        { id: "week", label: "Более 3 дней", tags: ["week"] }
      ]
    },
    {
      id: "temp_value",
      text: "Какая температура (если есть)?",
      condition: { symptom: ["fever"] },
      options: [
        { id: "temp_low", label: "37.5 – 38.5°C", tags: ["temp_low"] },
        { id: "temp_high", label: "38.6 – 39.5°C", tags: ["temp_high"] },
        { id: "temp_very_high", label: "Выше 39.5°C", tags: ["temp_very_high"] }
      ]
    },
    {
      id: "chronic",
      text: "Есть ли хронические заболевания, аллергия или приём лекарств?",
      type: "single",
      options: [
        { id: "no_chronic", label: "Нет", tags: ["healthy"] },
        { id: "allergy_known", label: "Известная аллергия (лекарства, продукты, пыльца)", tags: ["allergy_known"] },
        { id: "asthma", label: "Астма / аллергический бронхит", tags: ["asthma"] },
        { id: "epilepsy", label: "Эпилепсия / судороги в анамнезе", tags: ["epilepsy"] },
        { id: "medication", label: "Принимает лекарства (какие)", tags: ["medication"] }
      ]
    },
    {
      id: "contact",
      text: "Был ли контакт с больными (инфекционные болезни, ОРВИ) или поездки?",
      type: "single",
      options: [
        { id: "no_contact", label: "Нет", tags: ["no_contact"] },
        { id: "sick_family", label: "Болеют в семье / классе", tags: ["contact"] },
        { id: "travel", label: "Недавние поездки (другой регион / страна)", tags: ["travel"] }
      ]
    },
    {
      id: "appetite",
      text: "Как ребёнок ест и пьёт?",
      type: "single",
      options: [
        { id: "normal", label: "Нормально", tags: ["appetite_normal"] },
        { id: "reduced", label: "Ест/пьёт меньше обычного", tags: ["appetite_reduced"] },
        { id: "refusal", label: "Отказывается от еды и воды", tags: ["appetite_refusal"] }
      ]
    },
    {
      id: "additional",
      text: "Есть ли дополнительные настораживающие признаки?",
      type: "single",
      options: [
        { id: "no_extra", label: "Нет, только основной симптом", tags: ["no_extra"] },
        { id: "lethargy", label: "Сильная сонливость, вялость, ребёнка трудно разбудить", tags: ["lethargy"] },
        { id: "stiff_neck", label: "Ригидность затылочных мышц (не может коснуться подбородком груди)", tags: ["stiff_neck"] },
        { id: "rash_purple", label: "Сыпь, которая не бледнеет при нажатии (багровая)", tags: ["rash_purple"] }
      ]
    }
  ],

  solutions: [
    // =================================