// === ДВИЖОК ФИЛЬТРАЦИИ РЕШЕНИЙ ===
// Поддержка мультиязычности — выбирает данные по текущему языку

// Проверяем, что все данные загружены (русские версии)
console.log("🔍 Проверка данных (RU):");
console.log("  waterData:", typeof window.waterData !== 'undefined' ? '✅' : '❌');
console.log("  fireData:", typeof window.fireData !== 'undefined' ? '✅' : '❌');
console.log("  shelterData:", typeof window.shelterData !== 'undefined' ? '✅' : '❌');
console.log("  foodData:", typeof window.foodData !== 'undefined' ? '✅' : '❌');
console.log("  medicineData:", typeof window.medicineData !== 'undefined' ? '✅' : '❌');
console.log("  navigationData:", typeof window.navigationData !== 'undefined' ? '✅' : '❌');
console.log("  radioData:", typeof window.radioData !== 'undefined' ? '✅' : '❌');
console.log("  kitData:", typeof window.kitData !== 'undefined' ? '✅' : '❌');
console.log("  autoWontStartData:", typeof window.autoWontStartData !== 'undefined' ? '✅' : '❌');
console.log("  autoOverheatingData:", typeof window.autoOverheatingData !== 'undefined' ? '✅' : '❌');
console.log("  autoFlatTireData:", typeof window.autoFlatTireData !== 'undefined' ? '✅' : '❌');
console.log("  autoBrakesData:", typeof window.autoBrakesData !== 'undefined' ? '✅' : '❌');
console.log("  autoBatteryData:", typeof window.autoBatteryData !== 'undefined' ? '✅' : '❌');
console.log("  autoLeakData:", typeof window.autoLeakData !== 'undefined' ? '✅' : '❌');
console.log("  autoDtpData:", typeof window.autoDtpData !== 'undefined' ? '✅' : '❌');

console.log("🔍 Проверка данных (EN):");
console.log("  waterDataEn:", typeof window.waterDataEn !== 'undefined' ? '✅' : '❌');
console.log("  fireDataEn:", typeof window.fireDataEn !== 'undefined' ? '✅' : '❌');
console.log("  shelterDataEn:", typeof window.shelterDataEn !== 'undefined' ? '✅' : '❌');
console.log("  foodDataEn:", typeof window.foodDataEn !== 'undefined' ? '✅' : '❌');
console.log("  medicineDataEn:", typeof window.medicineDataEn !== 'undefined' ? '✅' : '❌');
console.log("  navigationDataEn:", typeof window.navigationDataEn !== 'undefined' ? '✅' : '❌');
console.log("  radioDataEn:", typeof window.radioDataEn !== 'undefined' ? '✅' : '❌');
console.log("  kitDataEn:", typeof window.kitDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoWontStartDataEn:", typeof window.autoWontStartDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoOverheatingDataEn:", typeof window.autoOverheatingDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoFlatTireDataEn:", typeof window.autoFlatTireDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoBrakesDataEn:", typeof window.autoBrakesDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoBatteryDataEn:", typeof window.autoBatteryDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoLeakDataEn:", typeof window.autoLeakDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoDtpDataEn:", typeof window.autoDtpDataEn !== 'undefined' ? '✅' : '❌');

// Регистр всех данных (русские и английские версии)
const dataRegistry = {
  ru: {
    water: typeof window.waterData !== 'undefined' ? window.waterData : null,
    fire: typeof window.fireData !== 'undefined' ? window.fireData : null,
    shelter: typeof window.shelterData !== 'undefined' ? window.shelterData : null,
    food: typeof window.foodData !== 'undefined' ? window.foodData : null,
    medicine: typeof window.medicineData !== 'undefined' ? window.medicineData : null,
    navigation: typeof window.navigationData !== 'undefined' ? window.navigationData : null,
    radio: typeof window.radioData !== 'undefined' ? window.radioData : null,
    kit: typeof window.kitData !== 'undefined' ? window.kitData : null,
    wont_start: typeof window.autoWontStartData !== 'undefined' ? window.autoWontStartData : null,
    overheating: typeof window.autoOverheatingData !== 'undefined' ? window.autoOverheatingData : null,
    flat_tire: typeof window.autoFlatTireData !== 'undefined' ? window.autoFlatTireData : null,
    brakes: typeof window.autoBrakesData !== 'undefined' ? window.autoBrakesData : null,
    battery: typeof window.autoBatteryData !== 'undefined' ? window.autoBatteryData : null,
    leak: typeof window.autoLeakData !== 'undefined' ? window.autoLeakData : null,
    dtp: typeof window.autoDtpData !== 'undefined' ? window.autoDtpData : null
  },
  en: {}
};

// Заполняем английский регистр
if (typeof window.waterDataEn !== 'undefined') dataRegistry.en.water = window.waterDataEn;
if (typeof window.fireDataEn !== 'undefined') dataRegistry.en.fire = window.fireDataEn;
if (typeof window.shelterDataEn !== 'undefined') dataRegistry.en.shelter = window.shelterDataEn;
if (typeof window.foodDataEn !== 'undefined') dataRegistry.en.food = window.foodDataEn;
if (typeof window.medicineDataEn !== 'undefined') dataRegistry.en.medicine = window.medicineDataEn;
if (typeof window.navigationDataEn !== 'undefined') dataRegistry.en.navigation = window.navigationDataEn;
if (typeof window.radioDataEn !== 'undefined') dataRegistry.en.radio = window.radioDataEn;
if (typeof window.kitDataEn !== 'undefined') dataRegistry.en.kit = window.kitDataEn;
if (typeof window.autoWontStartDataEn !== 'undefined') dataRegistry.en.wont_start = window.autoWontStartDataEn;
if (typeof window.autoOverheatingDataEn !== 'undefined') dataRegistry.en.overheating = window.autoOverheatingDataEn;
if (typeof window.autoFlatTireDataEn !== 'undefined') dataRegistry.en.flat_tire = window.autoFlatTireDataEn;
if (typeof window.autoBrakesDataEn !== 'undefined') dataRegistry.en.brakes = window.autoBrakesDataEn;
if (typeof window.autoBatteryDataEn !== 'undefined') dataRegistry.en.battery = window.autoBatteryDataEn;
if (typeof window.autoLeakDataEn !== 'undefined') dataRegistry.en.leak = window.autoLeakDataEn;
if (typeof window.autoDtpDataEn !== 'undefined') dataRegistry.en.dtp = window.autoDtpDataEn;

function getCurrentLang() {
  return typeof currentLang !== 'undefined' ? currentLang : 'ru';
}

function getCategoryData(category) {
  const lang = getCurrentLang();
  const langData = dataRegistry[lang] || dataRegistry.ru;
  const data = langData[category];
  
  if (!data) {
    console.error(`❌ Категория не найдена: ${category} (язык: ${lang})`);
    if (lang !== 'ru' && dataRegistry.ru[category]) {
      console.log(`🔄 Используем русскую версию как fallback для ${category}`);
      return dataRegistry.ru[category];
    }
    return null;
  }
  
  console.log(`✅ Загружена категория: ${category} (язык: ${lang})`);
  console.log(`   Вопросов: ${data.questions?.length || 0}, решений: ${data.solutions?.length || 0}`);
  return data;
}

/**
 * Фильтрация решений по ответам пользователя
 * Улучшена: учитывает основной симптом при Fallback
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
    console.log("🔄 Нет точных совпадений, ищем ближайшие по симптомам");
    
    // 1. Определяем основной симптом (для медицины)
    const mainSymptom = answers.symptom ? answers.symptom[0] : null;
    
    // 2. Собираем все теги из ответов
    const allTags = Object.values(answers).flat();
    
    matched = data.solutions.filter(sol => {
      if (!sol.tags) return false;
      
      // 2.1 Проверяем симптом (для медицины)
      if (mainSymptom) {
        // Если у решения есть symptom в условиях — проверяем соответствие
        if (sol.conditions && sol.conditions.symptom) {
          const solSymptoms = sol.conditions.symptom;
          if (!solSymptoms.includes(mainSymptom)) {
            // Если симптом не совпадает — пропускаем
            return false;
          }
        } else {
          // Если у решения нет symptom в условиях, но оно помечено как универсальное
          // и подходит по тегам — пропускаем только если это действительно универсальное
          // (для медицины — только emergency и universal)
          const isMedicalUniversal = sol.tags.includes("emergency") || 
                                     sol.tags.includes("first_aid");
          if (!isMedicalUniversal) {
            return false;
          }
        }
      }
      
      // 2.2 Проверяем пересечение тегов
      const hasTagMatch = allTags.some(tag => sol.tags.includes(tag));
      
      // 2.3 Проверяем, помечено ли как универсальное
      const isUniversal = sol.tags.includes("universal") || 
                         sol.tags.includes("primitive") ||
                         sol.tags.includes("search") ||
                         sol.tags.includes("basic") ||
                         sol.tags.includes("emergency") ||
                         sol.tags.includes("first_aid") ||
                         sol.tags.includes("checklist");
      
      return hasTagMatch || isUniversal;
    });
    
    // 3. Если всё ещё ничего не найдено — возвращаем первые 3 решения как экстренные
    if (matched.length === 0) {
      console.warn("⚠️ Не найдено подходящих решений, показываем экстренные");
      matched = data.solutions.filter(sol => 
        sol.tags && (sol.tags.includes("emergency") || sol.tags.includes("first_aid"))
      );
      if (matched.length === 0) {
        matched = data.solutions.slice(0, 3);
      }
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

function refreshDataRegistry() {
  const lang = getCurrentLang();
  console.log(`🔄 Обновление данных для языка: ${lang}`);
  const langData = dataRegistry[lang] || dataRegistry.ru;
  const categories = Object.keys(langData);
  console.log(`📋 Доступно категорий (${lang}): ${categories.join(", ")}`);
}

// Экспорт
window.getCategoryData = getCategoryData;
window.filterSolutions = filterSolutions;
window.getSolutionById = getSolutionById;
window.refreshDataRegistry = refreshDataRegistry;

console.log("✅ Движок загружен, готов к работе!");
console.log(`🌍 Доступные языки: ${Object.keys(dataRegistry).join(", ")}`);
