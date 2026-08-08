// === МОДУЛЬ: ДЕТИ — БЕЗОПАСНОСТЬ (УЛУЧШЕННАЯ ВЕРСИЯ) ===
const safetyData = {
  category: "safety",
  title: "🛡️ Безопасность ребёнка",
  description: "Потерялся, ушёл с незнакомцем, остался один, нашёл опасные предметы, ДТП, укус животного, игра с огнём — алгоритмы действий",

  questions: [
    {
      id: "situation",
      text: "Что произошло? (выберите основное)",
      type: "single",
      options: [
        { id: "stranger", label: "Ребёнок контактировал с незнакомцем / ушёл с ним", tags: ["stranger"] },
        { id: "alone_home", label: "Остался один дома / потерялся в людном месте", tags: ["alone", "lost"] },
        { id: "dangerous_item", label: "Нашёл опасный предмет (ножи, таблетки, оружие, химия)", tags: ["dangerous"] },
        { id: "traffic", label: "Опасная ситуация на дороге / ДТП", tags: ["traffic"] },
        { id: "animal", label: "Укусило / поцарапало животное (собака, кошка, змея, клещ)", tags: ["animal"] },
        { id: "fire", label: "Играл с огнём / спичками / зажигалкой / электроприборами", tags: ["fire"] }
      ]
    },
    {
      id: "child_age",
      text: "Возраст ребёнка?",
      type: "single",
      options: [
        { id: "baby", label: "До 3 лет", tags: ["baby"] },
        { id: "preschool", label: "3–7 лет", tags: ["preschool"] },
        { id: "school", label: "7–12 лет", tags: ["school_age"] },
        { id: "teen", label: "Подросток 13–17 лет", tags: ["teen"] }
      ]
    },
    {
      id: "location",
      text: "Где произошло?",
      type: "single",
      options: [
        { id: "home", label: "Дома / в квартире", tags: ["home"] },
        { id: "street", label: "На улице / во дворе / в парке", tags: ["street"] },
        { id: "public", label: "В магазине / ТЦ / транспорте", tags: ["public"] },
        { id: "school", label: "В школе / садике / секции", tags: ["school_place"] }
      ]
    },
    {
      id: "stranger_details",
      text: "Если контакт с незнакомцем — что именно произошло?",
      condition: { situation: ["stranger"] },
      options: [
        { id: "stranger_talk", label: "Просто разговаривал, угощали, просили помощи", tags: ["talk"] },
        { id: "stranger_tried_take", label: "Пытались увести / посадить в машину, но ребёнок убежал", tags: ["attempt"] },
        { id: "stranger_taken", label: "Ребёнок ушёл с незнакомцем / поехал на машине", tags: ["taken"] }
      ]
    },
    {
      id: "alone_lost_details",
      text: "Если потерялся или один дома — уточните",
      condition: { situation: ["alone_home"] },
      options: [
        { id: "home_alone", label: "Ребёнок один дома (оставлен без присмотра)", tags: ["alone_at_home"] },
        { id: "lost_mall", label: "Потерялся в магазине / ТЦ / на вокзале", tags: ["lost_public"] },
        { id: "lost_street", label: "Потерялся на улице / в парке / во дворе", tags: ["lost_street"] }
      ]
    },
    {
      id: "dangerous_item_type",
      text: "Какой опасный предмет нашёл ребёнок?",
      condition: { situation: ["dangerous_item"] },
      options: [
        { id: "pills", label: "Таблетки / лекарства / витамины", tags: ["pills"] },
        { id: "chemicals", label: "Бытовая химия / кислоты / щёлочи", tags: ["chemicals"] },
        { id: "knife", label: "Нож / острые предметы", tags: ["knife"] },
        { id: "weapon", label: "Оружие (нож, пистолет, арбалет)", tags: ["weapon"] }
      ]
    },
    {
      id: "traffic_details",
      text: "Что произошло на дороге?",
      condition: { situation: ["traffic"] },
      options: [
        { id: "ran_out", label: "Выбежал на проезжую часть, успели остановиться", tags: ["near_miss"] },
        { id: "bike", label: "Ехал на велосипеде / самокате и упал / столкнулся", tags: ["bike"] },
        { id: "accident", label: "Сбила машина / ДТП с участием ребёнка", tags: ["accident"] }
      ]
    },
    {
      id: "animal_details",
      text: "Какое животное?",
      condition: { situation: ["animal"] },
      options: [
        { id: "dog", label: "Собака (домашняя / бродячая)", tags: ["dog"] },
        { id: "cat", label: "Кошка", tags: ["cat"] },
        { id: "rodent", label: "Крыса / мышь", tags: ["rodent"] },
        { id: "snake", label: "Змея", tags: ["snake"] },
        { id: "tick", label: "Клещ", tags: ["tick"] },
        { id: "insect", label: "Пчела / оса / паук", tags: ["insect"] }
      ]
    },
    {
      id: "fire_details",
      text: "Что именно с огнём/электричеством?",
      condition: { situation: ["fire"] },
      options: [
        { id: "matches", label: "Играл со спичками / зажигалкой", tags: ["matches"] },
        { id: "electric", label: "Трогал розетку / провода / включил прибор", tags: ["electric"] },
        { id: "candle", label: "Зажёг свечу / оставил без присмотра", tags: ["candle"] }
      ]
    },
    {
      id: "severity",
      text: "Насколько серьёзно?",
      type: "single",
      options: [
        { id: "mild", label: "Лёгкая ситуация (контакт был недолгим, ребёнок не пострадал)", tags: ["mild"] },
        { id: "moderate", label: "Средняя (есть мелкие травмы, сильный испуг)", tags: ["moderate"] },
        { id: "severe", label: "Тяжёлая (потеря сознания, сильное кровотечение, похищение)", tags: ["severe"] }
      ]
    }
  ],

  solutions: [
    // =================================