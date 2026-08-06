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
// Lawyer categories (RU)
console.log("  dtpData:", typeof window.dtpData !== 'undefined' ? '✅' : '❌');
console.log("  laborData:", typeof window.laborData !== 'undefined' ? '✅' : '❌');
console.log("  housingData:", typeof window.housingData !== 'undefined' ? '✅' : '❌');
console.log("  inheritanceData:", typeof window.inheritanceData !== 'undefined' ? '✅' : '❌');
console.log("  debtsData:", typeof window.debtsData !== 'undefined' ? '✅' : '❌');
console.log("  divorceData:", typeof window.divorceData !== 'undefined' ? '✅' : '❌');
console.log("  consumerData:", typeof window.consumerData !== 'undefined' ? '✅' : '❌');
// Home categories (RU)
console.log("  plumbingData:", typeof window.plumbingData !== 'undefined' ? '✅' : '❌');
console.log("  electricityData:", typeof window.electricityData !== 'undefined' ? '✅' : '❌');
console.log("  homeFireData:", typeof window.homeFireData !== 'undefined' ? '✅' : '❌');
console.log("  gasData:", typeof window.gasData !== 'undefined' ? '✅' : '❌');
console.log("  lockData:", typeof window.lockData !== 'undefined' ? '✅' : '❌');
console.log("  heatingData:", typeof window.heatingData !== 'undefined' ? '✅' : '❌');
console.log("  naturalData:", typeof window.naturalData !== 'undefined' ? '✅' : '❌');

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
// Lawyer categories (EN)
console.log("  dtpDataEn:", typeof window.dtpDataEn !== 'undefined' ? '✅' : '❌');
console.log("  laborDataEn:", typeof window.laborDataEn !== 'undefined' ? '✅' : '❌');
console.log("  housingDataEn:", typeof window.housingDataEn !== 'undefined' ? '✅' : '❌');
console.log("  inheritanceDataEn:", typeof window.inheritanceDataEn !== 'undefined' ? '✅' : '❌');
console.log("  debtsDataEn:", typeof window.debtsDataEn !== 'undefined' ? '✅' : '❌');
console.log("  divorceDataEn:", typeof window.divorceDataEn !== 'undefined' ? '✅' : '❌');
console.log("  consumerDataEn:", typeof window.consumerDataEn !== 'undefined' ? '✅' : '❌');
// Home categories (EN)
console.log("  plumbingDataEn:", typeof window.plumbingDataEn !== 'undefined' ? '✅' : '❌');
console.log("  electricityDataEn:", typeof window.electricityDataEn !== 'undefined' ? '✅' : '❌');
console.log("  homeFireDataEn:", typeof window.homeFireDataEn !== 'undefined' ? '✅' : '❌');
console.log("  gasDataEn:", typeof window.gasDataEn !== 'undefined' ? '✅' : '❌');
console.log("  lockDataEn:", typeof window.lockDataEn !== 'undefined' ? '✅' : '❌');
console.log("  heatingDataEn:", typeof window.heatingDataEn !== 'undefined' ? '✅' : '❌');
console.log("  naturalDataEn:", typeof window.naturalDataEn !== 'undefined' ? '✅' : '❌');

// Регистр всех данных (русские и английские версии)
const dataRegistry = {
  ru: {
    // Survival
    water: typeof window.waterData !== 'undefined' ? window.waterData : null,
    fire: typeof window.fireData !== 'undefined' ? window.fireData : null,
    shelter: typeof window.shelterData !== 'undefined' ? window.shelterData : null,
    food: typeof window.foodData !== 'undefined' ? window.foodData : null,
    medicine: typeof window.medicineData !== 'undefined' ? window.medicineData : null,
    navigation: typeof window.navigationData !== 'undefined' ? window.navigationData : null,
    radio: typeof window.radioData !== 'undefined' ? window.radioData : null,
    kit: typeof window.kitData !== 'undefined' ? window.kitData : null,
    // Auto
    wont_start: typeof window.autoWontStartData !== 'undefined' ? window.autoWontStartData : null,
    overheating: typeof window.autoOverheatingData !== 'undefined' ? window.autoOverheatingData : null,
    flat_tire: typeof window.autoFlatTireData !== 'undefined' ? window.autoFlatTireData : null,
    brakes: typeof window.autoBrakesData !== 'undefined' ? window.autoBrakesData : null,
    battery: typeof window.autoBatteryData !== 'undefined' ? window.autoBatteryData : null,
    leak: typeof window.autoLeakData !== 'undefined' ? window.autoLeakData : null,
    dtp: typeof window.autoDtpData !== 'undefined' ? window.autoDtpData : null,
    // Lawyer
    dtp_lawyer: typeof window.dtpData !== 'undefined' ? window.dtpData : null,
    labor: typeof window.laborData !== 'undefined' ? window.laborData : null,
    housing: typeof window.housingData !== 'undefined' ? window.housingData : null,
    inheritance: typeof window.inheritanceData !== 'undefined' ? window.inheritanceData : null,
    debts: typeof window.debtsData !== 'undefined' ? window.debtsData : null,
    divorce: typeof window.divorceData !== 'undefined' ? window.divorceData : null,
    consumer: typeof window.consumerData !== 'undefined' ? window.consumerData : null,
    // Home (используем префикс home_ чтобы не конфликтовать с survival)
    plumbing: typeof window.plumbingData !== 'undefined' ? window.plumbingData : null,
    electricity: typeof window.electricityData !== 'undefined' ? window.electricityData : null,
    home_fire: typeof window.homeFireData !== 'undefined' ? window.homeFireData : null,
    gas: typeof window.gasData !== 'undefined' ? window.gasData : null,
    home_lock: typeof window.lockData !== 'undefined' ? window.lockData : null,
    heating: typeof window.heatingData !== 'undefined' ? window.heatingData : null,
    natural: typeof window.naturalData !== 'undefined' ? window.naturalData : null
  },
  en: {}
};

// Заполняем английский регистр
// Survival
if (typeof window.waterDataEn !== 'undefined') dataRegistry.en.water = window.waterDataEn;
if (typeof window.fireDataEn !== 'undefined') dataRegistry.en.fire = window.fireDataEn;
if (typeof window.shelterDataEn !== 'undefined') dataRegistry.en.shelter = window.shelterDataEn;
if (typeof window.foodDataEn !== 'undefined') dataRegistry.en.food = window.foodDataEn;
if (typeof window.medicineDataEn !== 'undefined') dataRegistry.en.medicine = window.medicineDataEn;
if (typeof window.navigationDataEn !== 'undefined') dataRegistry.en.navigation = window.navigationDataEn;
if (typeof window.radioDataEn !== 'undefined') dataRegistry.en.radio = window.radioDataEn;
if (typeof window.kitDataEn !== 'undefined') dataRegistry.en.kit = window.kitDataEn;
// Auto
if (typeof window.autoWontStartDataEn !== 'undefined') dataRegistry.en.wont_start = window.autoWontStartDataEn;
if (typeof window.autoOverheatingDataEn !== 'undefined') dataRegistry.en.overheating = window.autoOverheatingDataEn;
if (typeof window.autoFlatTireDataEn !== 'undefined') dataRegistry.en.flat_tire = window.autoFlatTireDataEn;
if (typeof window.autoBrakesDataEn !== 'undefined') dataRegistry.en.brakes = window.autoBrakesDataEn;
if (typeof window.autoBatteryDataEn !== 'undefined') dataRegistry.en.battery = window.autoBatteryDataEn;
if (typeof window.autoLeakDataEn !== 'undefined') dataRegistry.en.leak = window.autoLeakDataEn;
if (typeof window.autoDtpDataEn !== 'undefined') dataRegistry.en.dtp = window.autoDtpDataEn;
// Lawyer
if (typeof window.dtpDataEn !== 'undefined') dataRegistry.en.dtp_lawyer = window.dtpDataEn;
if (typeof window.laborDataEn !== 'undefined') dataRegistry.en.labor = window.laborDataEn;
if (typeof window.housingDataEn !== 'undefined') dataRegistry.en.housing = window.housingDataEn;
if (typeof window.inheritanceDataEn !== 'undefined') dataRegistry.en.inheritance = window.inheritanceDataEn;
if (typeof window.debtsDataEn !== 'undefined') dataRegistry.en.debts = window.debtsDataEn;
if (typeof window.divorceDataEn !== 'undefined') dataRegistry.en.divorce = window.divorceDataEn;
if (typeof window.consumerDataEn !== 'undefined') dataRegistry.en.consumer = window.consumerDataEn;
// Home
if (typeof window.plumbingDataEn !== 'undefined') dataRegistry.en.plumbing = window.plumbingDataEn;
if (typeof window.electricityDataEn !== 'undefined') dataRegistry.en.electricity = window.electricityDataEn;
if (typeof window.homeFireDataEn !== 'undefined') dataRegistry.en.home_fire = window.homeFireDataEn;
if (typeof window.gasDataEn !== 'undefined') dataRegistry.en.gas = window.gasDataEn;
if (typeof window.lockDataEn !== 'undefined') dataRegistry.en.home_lock = window.lockDataEn;
if (typeof window.heatingDataEn !== 'undefined') dataRegistry.en.heating = window.heatingDataEn;
if (typeof window.naturalDataEn !== 'undefined') dataRegistry.en.natural = window.naturalDataEn;

function getCurrentLang() {
  return typeof currentLang !== 'undefined' ? currentLang : 'ru';
}

function getCategoryData(category) {
  const lang = getCurrentLang();
  const langData = dataRegistry[lang] || dataRegistry.ru;
  
  // Маппинг категорий с учётом конфликтов имён
  let mappedCategory = category;
  
  // 1. Маппинг для AUTO (dtp конфликтует с lawyer/dtp)
  if (category === 'dtp' && langData.dtp_lawyer) {
    mappedCategory = 'dtp_lawyer';
  }
  
  // 2. Маппинг для HOME (fire конфликтует с survival/fire)
  if (category === 'fire' && langData.home_fire) {
    mappedCategory = 'home_fire';
  }
  
  // 3. Маппинг для HOME (lock -> home_lock)
  if (category === 'lock' && langData.home_lock) {
    mappedCategory = 'home_lock';
  }
  
  // 4. Универсальный маппинг: если категория не найдена, пробуем с префиксом home_
  if (!langData[mappedCategory]) {
    const withHomePrefix = 'home_' + category;
    if (langData[withHomePrefix]) {
      mappedCategory = withHomePrefix;
    }
  }
  
  const data = langData[mappedCategory];
  
  if (!data) {
    console.error(`❌ Категория не найдена: ${category} (язык: ${lang})`);
    if (lang !== 'ru' && dataRegistry.ru[mappedCategory]) {
      console.log(`🔄 Используем русскую версию как fallback для ${category}`);
      return dataRegistry.ru[mappedCategory];
    }
    return null;
  }
  
  console.log(`✅ Загружена категория: ${category} (язык: ${lang}) -> ${mappedCategory}`);
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
