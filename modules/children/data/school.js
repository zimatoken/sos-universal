// === МОДУЛЬ: ШКОЛА (УЛУЧШЕННАЯ ВЕРСИЯ) ===
const schoolData = {
  category: "school",
  title: "🏫 Школа и учёба",
  description: "Проблемы с успеваемостью, конфликты с учителями, травля, отказ от школы, агрессия, наркотики, профориентация — как помочь ребёнку",

  questions: [
    {
      id: "problem",
      text: "Какая основная проблема?",
      type: "single",
      options: [
        { id: "grades", label: "Плохая успеваемость / двойки / не понимает материал", tags: ["grades"] },
        { id: "teacher_conflict", label: "Конфликт с учителем / несправедливость / оскорбления", tags: ["teacher"] },
        { id: "refusal", label: "Ребёнок не хочет идти в школу / прогулы / страхи", tags: ["refusal"] },
        { id: "bullying", label: "Травля / буллинг / изгнание из класса", tags: ["bullying"] },
        { id: "substances", label: "Курение / алкоголь / наркотики (употребляет или предлагают)", tags: ["substances"] },
        { id: "aggression", label: "Агрессия / драки / нарушение дисциплины", tags: ["aggression"] },
        { id: "friends", label: "Проблемы с одноклассниками / нет друзей / одиночество", tags: ["friends"] },
        { id: "future", label: "Не знает, куда поступать / не хочет учиться дальше", tags: ["future"] },
        { id: "exams", label: "Страх перед экзаменами / ОГЭ / ЕГЭ / стресс", tags: ["exams"] }
      ]
    },
    {
      id: "age_group",
      text: "Возраст / класс?",
      type: "single",
      options: [
        { id: "primary", label: "1–4 класс (6–10 лет)", tags: ["primary"] },
        { id: "middle", label: "5–9 класс (10–15 лет)", tags: ["middle"] },
        { id: "high", label: "10–11 класс / колледж (15–18 лет)", tags: ["high"] }
      ]
    },
    {
      id: "urgency",
      text: "Как давно и насколько серьёзно?",
      type: "single",
      options: [
        { id: "acute", label: "Случилось сегодня / вчера — острая ситуация", tags: ["acute"] },
        { id: "accumulated", label: "Накапливалось неделями / месяцами", tags: ["accumulated"] },
        { id: "chronic", label: "Хроническая проблема (полгода и более)", tags: ["chronic"] }
      ]
    },
    {
      id: "child_reaction",
      text: "Как ребёнок реагирует на проблему?",
      type: "single",
      options: [
        { id: "calm", label: "Спокойно, готов обсуждать, ищет решения", tags: ["open"] },
        { id: "shame", label: "Замкнут, стыдится, боится наказания", tags: ["closed"] },
        { id: "aggressive", label: "Агрессивен, отрицает, обвиняет других", tags: ["defensive"] },
        { id: "depressed", label: "Апатичен, говорит о безнадёжности, не видит смысла", tags: ["depressed"] }
      ]
    },
    {
      id: "parental_support",
      text: "Есть ли у ребёнка поддержка дома и в школе?",
      type: "single",
      options: [
        { id: "full_support", label: "Да, я поддерживаю, и школа помогает", tags: ["support_yes"] },
        { id: "home_only", label: "Я поддерживаю, но школа игнорирует / не помогает", tags: ["school_no"] },
        { id: "school_only", label: "Школа помогает, но дома не понимают", tags: ["home_no"] },
        { id: "no_support", label: "Никто не поддерживает, ребёнок один", tags: ["support_no"] }
      ]
    },
    {
      id: "grades_details",
      text: "Если проблема с оценками — уточните",
      condition: { problem: ["grades"] },
      options: [
        { id: "single_subject", label: "Тяжело даётся один предмет", tags: ["one_subject"] },
        { id: "multiple", label: "Не успевает по нескольким предметам", tags: ["multiple"] },
        { id: "all", label: "Не понимает вообще ничего / полная неуспеваемость", tags: ["all_subjects"] },
        { id: "motivation", label: "Не хочет учиться, хотя способности есть", tags: ["motivation"] }
      ]
    },
    {
      id: "bullying_type",
      text: "Если буллинг — какой тип?",
      condition: { problem: ["bullying"] },
      options: [
        { id: "physical_bully", label: "Физическое насилие (толкают, бьют, отнимают вещи)", tags: ["physical"] },
        { id: "verbal_bully", label: "Слова, оскорбления, угрозы, прозвища", tags: ["verbal"] },
        { id: "social_bully", label: "Изгнание, бойкот, сплетни, исключение из чатов", tags: ["social"] },
        { id: "cyber_bully", label: "Кибербуллинг (соцсети, мессенджеры)", tags: ["cyber"] }
      ]
    },
    {
      id: "substance_details",
      text: "Если употребление — что именно?",
      condition: { problem: ["substances"] },
      options: [
        { id: "cigarettes", label: "Курит сигареты / вейп (никотин)", tags: ["smoking"] },
        { id: "alcohol", label: "Употребляет алкоголь", tags: ["alcohol"] },
        { id: "drugs", label: "Наркотики / спайсы / соли / марихуана", tags: ["drugs"] },
        { id: "offered", label: "Предлагают, но ребёнок отказывается / не пробовал", tags: ["offered"] }
      ]
    },
    {
      id: "exam_type",
      text: "Если экзамены — какие?",
      condition: { problem: ["exams"] },
      options: [
        { id: "oge", label: "ОГЭ (9 класс)", tags: ["oge"] },
        { id: "ege", label: "ЕГЭ (11 класс)", tags: ["ege"] },
        { id: "transfer", label: "Переводные экзамены / контрольные", tags: ["transfer"] },
        { id: "other", label: "Другие экзамены (вступительные, международные)", tags: ["other_exam"] }
      ]
    },
    {
      id: "aggression_target",
      text: "Если агрессия — на кого направлена?",
      condition: { problem: ["aggression"] },
      options: [
        { id: "peers", label: "На одноклассников (других детей)", tags: ["peers"] },
        { id: "teachers", label: "На учителей / взрослых в школе", tags: ["teachers"] },
        { id: "self", label: "На себя (самоповреждение, риски)", tags: ["self_harm"] },
        { id: "parents", label: "На родителей (дома)", tags: ["parents"] }
      ]
    }
  ],

  solutions: [
    // =================================