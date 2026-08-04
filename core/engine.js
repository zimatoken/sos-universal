// === ДВИЖОК ФИЛЬТРАЦИИ РЕШЕНИЙ ===
// Поддержка мультиязычности — выбирает данные по текущему языку
// SOS UNIVERSAL Core Engine

// Глобальная переменная для текущих данных
let currentData = null;
let currentLang = 'ru';

/**
 * Установка текущего языка
 */
function setEngineLang(lang) {
  currentLang = lang;
  console.log(`🌍 Язык двигателя установлен: ${lang}`);
}

/**
 * Запуск квиза по категории
 */
function startFlow(category) {
  console.log(`🚀 Запуск категории: ${category}`);
  
  // Определяем язык
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ru';
  
  // Выбор данных по категории
  if (category === 'water') currentData = typeof waterDataEn !== 'undefined' && lang === 'en' ? waterDataEn : waterData;
  else if (category === 'fire') currentData = typeof fireDataEn !== 'undefined' && lang === 'en' ? fireDataEn : fireData;
  else if (category === 'shelter') currentData = typeof shelterDataEn !== 'undefined' && lang === 'en' ? shelterDataEn : shelterData;
  else if (category === 'food') currentData = typeof foodDataEn !== 'undefined' && lang === 'en' ? foodDataEn : foodData;
  else if (category === 'medicine') currentData = typeof medicineDataEn !== 'undefined' && lang === 'en' ? medicineDataEn : medicineData;
  else if (category === 'navigation') currentData = typeof navigationDataEn !== 'undefined' && lang === 'en' ? navigationDataEn : navigationData;
  else if (category === 'radio') currentData = typeof radioDataEn !== 'undefined' && lang === 'en' ? radioDataEn : radioData;
  else if (category === 'kit') currentData = typeof kitDataEn !== 'undefined' && lang === 'en' ? kitDataEn : kitData;
  // Auto categories
  else if (category === 'wont_start') currentData = typeof wont_startDataEn !== 'undefined' && lang === 'en' ? wont_startDataEn : wont_startData;
  else if (category === 'overheating') currentData = typeof overheatingDataEn !== 'undefined' && lang === 'en' ? overheatingDataEn : overheatingData;
  else if (category === 'flat_tire') currentData = typeof flat_tireDataEn !== 'undefined' && lang === 'en' ? flat_tireDataEn : flat_tireData;
  else if (category === 'brakes') currentData = typeof brakesDataEn !== 'undefined' && lang === 'en' ? brakesDataEn : brakesData;
  else if (category === 'battery') currentData = typeof batteryDataEn !== 'undefined' && lang === 'en' ? batteryDataEn : batteryData;
  else if (category === 'leak') currentData = typeof leakDataEn !== 'undefined' && lang === 'en' ? leakDataEn : leakData;
  else if (category === 'dtp') currentData = typeof dtpDataEn !== 'undefined' && lang === 'en' ? dtpDataEn : dtpData;
  else {
    console.error(`❌ Неизвестная категория: ${category}`);
    return;
  }
  
  if (!currentData) {
    console.error(`❌ Данные не найдены для категории: ${category}`);
    return;
  }
  
  console.log(`✅ Данные загружены: ${currentData.title}`);
  console.log(`   Вопросов: ${currentData.questions?.length || 0}, решений: ${currentData.solutions?.length || 0}`);
  
  // Инициализация квиза
  currentQuestionIndex = 0;
  answers = {};
  showScreen("screen-questions");
  renderQuestion();
}

/**
 * Фильтрация решений по ответам пользователя
 */
function filterSolutions(data, answers) {
  if (!data || !data.solutions) {
    console.warn("⚠️ Нет данных или решений для фильтрации");
    return [];
  }

  if (!answers || Object.keys(answers).length === 0) {
    console.warn("⚠️ Нет ответов, возвращаем первые 5 решений");
    return data.solutions.slice(0, 5);
  }

  // --- ОСНОВНАЯ ФИЛЬТРАЦИЯ ---
  let matched = data.solutions.filter(sol => {
    for (let [key, allowedValues] of Object.entries(sol.conditions)) {
      const userAnswer = answers[key];
      if (!userAnswer || userAnswer.length === 0) continue;
      const hasMatch = userAnswer.some(val => allowedValues.includes(val));
      if (!hasMatch) return false;
    }
    return true;
  });

  // --- FALLBACK: если нет точных совпадений ---
  if (matched.length === 0) {
    console.log("🔄 Нет точных совпадений, ищем ближайшие по тегам");
    
    // Собираем все теги из ответов
    const allTags = Object.values(answers).flat();
    
    matched = data.solutions.filter(sol => {
      if (!sol.tags) return false;
      
      // Проверяем пересечение тегов
      const hasTagMatch = allTags.some(tag => sol.tags.includes(tag));
      
      // Проверяем, помечено ли как универсальное
      const isUniversal = sol.tags.includes("universal") || 
                         sol.tags.includes("primitive") ||
                         sol.tags.includes("search") ||
                         sol.tags.includes("basic") ||
                         sol.tags.includes("emergency") ||
                         sol.tags.includes("first_aid") ||
                         sol.tags.includes("checklist");
      
      return hasTagMatch || isUniversal;
    });
    
    // Если всё ещё ничего не найдено — возвращаем первые 3 решения
    if (matched.length === 0) {
      console.warn("⚠️ Не найдено подходящих решений, показываем первые 3");
      matched = data.solutions.slice(0, 3);
    }
  }

  // --- СОРТИРОВКА ---
  const prioOrder = { fast: 3, medium: 2, slow: 1 };
  const relOrder = { high: 3, medium: 2, low: 1 };

  matched.sort((a, b) => {
    const prioA = prioOrder[a.priority] || 1;
    const prioB = prioOrder[b.priority] || 1;
    if (prioB !== prioA) {
      return prioB - prioA;
    }
    const relA = relOrder[a.reliability] || 1;
    const relB = relOrder[b.reliability] || 1;
    return relB - relA;
  });

  const result = matched.slice(0, 5);
  console.log(`✅ Найдено решений: ${matched.length}, показано: ${result.length}`);
  return result;
}

function getSolutionById(data, id) {
  if (!data || !data.solutions) {
    console.warn("⚠️ Нет данных для поиска решения");
    return null;
  }
  const solution = data.solutions.find(s => s.id === id);
  if (!solution) {
    console.warn(`⚠️ Решение не найдено: ${id}`);
  }
  return solution || null;
}

// Глобальные переменные для квиза
let currentQuestionIndex = 0;
let answers = {};

// Экспорт
window.startFlow = startFlow;
window.filterSolutions = filterSolutions;
window.getSolutionById = getSolutionById;
window.setEngineLang = setEngineLang;
window.currentData = currentData;
window.currentQuestionIndex = currentQuestionIndex;
window.answers = answers;

console.log("✅ Движок загружен, готов к работе!");