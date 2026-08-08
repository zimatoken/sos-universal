// === МОДУЛЬ: ДЕТИ — ТРАВМЫ И ПЕРВАЯ ПОМОЩЬ (УЛУЧШЕННАЯ ВЕРСИЯ) ===
const injuryData = {
  category: "injury",
  title: "🩹 Травмы и первая помощь",
  description: "Порезы, ожоги, ушибы, переломы, удары головой, попадание в глаз, удушье, укусы животных — алгоритмы действий",

  questions: [
    {
      id: "injury_type",
      text: "Какой тип травмы?",
      type: "single",
      options: [
        { id: "cut", label: "Порез / рана / кровотечение", tags: ["cut", "bleeding"] },
        { id: "burn", label: "Ожог (кипяток, огонь, химия, электричество)", tags: ["burn"] },
        { id: "bruise", label: "Ушиб / синяк / растяжение", tags: ["bruise", "sprain"] },
        { id: "fracture", label: "Перелом / подозрение на перелом", tags: ["fracture"] },
        { id: "head", label: "Удар по голове / сотрясение", tags: ["head", "concussion"] },
        { id: "eye", label: "Травма глаза (химия, инородное тело, удар)", tags: ["eye"] },
        { id: "choking", label: "Подавился / задыхается", tags: ["choking"] },
        { id: "bite", label: "Укус животного / насекомого", tags: ["bite"] },
        { id: "tooth", label: "Выбитый / сломанный зуб", tags: ["tooth"] }
      ]
    },
    {
      id: "severity",
      text: "Насколько серьезна травма?",
      type: "single",
      options: [
        { id: "minor", label: "Мелкая царапина, синяк, ссадина (поверхностно)", tags: ["minor"] },
        { id: "moderate", label: "Глубокая рана, сильный ожог, сильный отёк", tags: ["moderate"] },
        { id: "severe", label: "Сильное кровотечение, перелом, потеря сознания, судороги", tags: ["severe"] }
      ]
    },
    {
      id: "age",
      text: "Возраст ребёнка?",
      type: "single",
      options: [
        { id: "infant", label: "Младенец (0–1 год)", tags: ["infant"] },
        { id: "toddler", label: "1–3 года", tags: ["toddler"] },
        { id: "child", label: "3–7 лет", tags: ["child"] },
        { id: "school", label: "7+ лет", tags: ["school"] }
      ]
    },
    {
      id: "bleeding_type",
      text: "Если кровотечение — какого типа?",
      condition: { injury_type: ["cut"] },
      options: [
        { id: "capillary", label: "Капиллярное (мелкие капли, сочится)", tags: ["capillary"] },
        { id: "venous", label: "Венозное (темная кровь, течёт равномерно)", tags: ["venous"] },
        { id: "arterial", label: "Артериальное (яркая, пульсирует фонтаном)", tags: ["arterial"] }
      ]
    },
    {
      id: "burn_cause",
      text: "Чем вызван ожог?",
      condition: { injury_type: ["burn"] },
      options: [
        { id: "hot_water", label: "Кипяток / горячий пар", tags: ["thermal"] },
        { id: "flame", label: "Огонь / горячий предмет", tags: ["thermal"] },
        { id: "chemical", label: "Химическое вещество (кислота, щелочь)", tags: ["chemical"] },
        { id: "electric", label: "Электрический ток (розетка, провод)", tags: ["electric"] }
      ]
    },
    {
      id: "burn_area",
      text: "Где ожог? (можно выбрать несколько, но для простоты выберите основную зону)",
      condition: { injury_type: ["burn"] },
      options: [
        { id: "face", label: "Лицо / шея", tags: ["face"] },
        { id: "hands", label: "Руки / кисти", tags: ["hands"] },
        { id: "feet", label: "Ноги / стопы", tags: ["feet"] },
        { id: "torso", label: "Туловище / спина", tags: ["torso"] },
        { id: "genitals", label: "Пах / гениталии", tags: ["genitals"] }
      ]
    },
    {
      id: "fracture_location",
      text: "Где подозревается перелом?",
      condition: { injury_type: ["fracture"] },
      options: [
        { id: "arm", label: "Рука (плечо, предплечье, запястье)", tags: ["arm"] },
        { id: "leg", label: "Нога (бедро, голень, стопа)", tags: ["leg"] },
        { id: "collarbone", label: "Ключица", tags: ["collarbone"] },
        { id: "ribs", label: "Ребра", tags: ["ribs"] },
        { id: "spine", label: "Позвоночник", tags: ["spine"] },
        { id: "skull", label: "Череп", tags: ["skull"] }
      ]
    },
    {
      id: "head_consciousness",
      text: "Была ли потеря сознания после удара головой?",
      condition: { injury_type: ["head"] },
      options: [
        { id: "no_loss", label: "Нет, сознание не терял", tags: ["conscious"] },
        { id: "brief_loss", label: "Да, на несколько секунд", tags: ["brief_loss"] },
        { id: "prolonged_loss", label: "Да, более 1 минуты", tags: ["prolonged_loss"] }
      ]
    },
    {
      id: "bite_animal",
      text: "Кто укусил?",
      condition: { injury_type: ["bite"] },
      options: [
        { id: "dog", label: "Собака (домашняя или бездомная)", tags: ["dog"] },
        { id: "cat", label: "Кошка", tags: ["cat"] },
        { id: "wild", label: "Дикое животное (лиса, белка, енот)", tags: ["wild"] },
        { id: "insect", label: "Насекомое (пчела, оса, клещ)", tags: ["insect"] }
      ]
    },
    {
      id: "tetanus",
      text: "Когда была последняя прививка от столбняка (АКДС / АДС-М)?",
      type: "single",
      options: [
        { id: "within_5y", label: "Менее 5 лет назад", tags: ["protected"] },
        { id: "over_5y", label: "Более 5 лет назад", tags: ["need_booster"] },
        { id: "unknown", label: "Не знаю / не привит", tags: ["unknown"] }
      ]
    },
    {
      id: "bleeding_control_done",
      text: "Удалось ли остановить кровотечение самостоятельно?",
      condition: { injury_type: ["cut"], severity: ["moderate", "severe"] },
      options: [
        { id: "stopped", label: "Да, кровь остановилась", tags: ["stopped"] },
        { id: "not_stopped", label: "Нет, кровь продолжается", tags: ["not_stopped"] }
      ]
    }
  ],

  solutions: [
    // =================================