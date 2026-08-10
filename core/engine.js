// === ДВИЖОК ФИЛЬТРАЦИИ РЕШЕНИЙ ===
// Поддержка мультиязычности — выбирает данные по текущему языку

// Проверяем, что все данные загружены (русские версии)
console.log("🔍 Проверка данных (RU):");
// Survival
console.log("  waterData:", typeof window.waterData !== 'undefined' ? '✅' : '❌');
console.log("  fireData:", typeof window.fireData !== 'undefined' ? '✅' : '❌');
console.log("  shelterData:", typeof window.shelterData !== 'undefined' ? '✅' : '❌');
console.log("  foodData:", typeof window.foodData !== 'undefined' ? '✅' : '❌');
console.log("  medicineData:", typeof window.medicineData !== 'undefined' ? '✅' : '❌');
console.log("  navigationData:", typeof window.navigationData !== 'undefined' ? '✅' : '❌');
console.log("  radioData:", typeof window.radioData !== 'undefined' ? '✅' : '❌');
console.log("  kitData:", typeof window.kitData !== 'undefined' ? '✅' : '❌');
// Auto
console.log("  autoWontStartData:", typeof window.autoWontStartData !== 'undefined' ? '✅' : '❌');
console.log("  autoOverheatingData:", typeof window.autoOverheatingData !== 'undefined' ? '✅' : '❌');
console.log("  autoFlatTireData:", typeof window.autoFlatTireData !== 'undefined' ? '✅' : '❌');
console.log("  autoBrakesData:", typeof window.autoBrakesData !== 'undefined' ? '✅' : '❌');
console.log("  autoBatteryData:", typeof window.autoBatteryData !== 'undefined' ? '✅' : '❌');
console.log("  autoLeakData:", typeof window.autoLeakData !== 'undefined' ? '✅' : '❌');
console.log("  autoDtpData:", typeof window.autoDtpData !== 'undefined' ? '✅' : '❌');
// Lawyer
console.log("  dtpData:", typeof window.dtpData !== 'undefined' ? '✅' : '❌');
console.log("  laborData:", typeof window.laborData !== 'undefined' ? '✅' : '❌');
console.log("  housingData:", typeof window.housingData !== 'undefined' ? '✅' : '❌');
console.log("  inheritanceData:", typeof window.inheritanceData !== 'undefined' ? '✅' : '❌');
console.log("  debtsData:", typeof window.debtsData !== 'undefined' ? '✅' : '❌');
console.log("  divorceData:", typeof window.divorceData !== 'undefined' ? '✅' : '❌');
console.log("  consumerData:", typeof window.consumerData !== 'undefined' ? '✅' : '❌');
// Home
console.log("  plumbingData:", typeof window.plumbingData !== 'undefined' ? '✅' : '❌');
console.log("  electricityData:", typeof window.electricityData !== 'undefined' ? '✅' : '❌');
console.log("  homeFireData:", typeof window.homeFireData !== 'undefined' ? '✅' : '❌');
console.log("  gasData:", typeof window.gasData !== 'undefined' ? '✅' : '❌');
console.log("  lockData:", typeof window.lockData !== 'undefined' ? '✅' : '❌');
console.log("  heatingData:", typeof window.heatingData !== 'undefined' ? '✅' : '❌');
console.log("  naturalData:", typeof window.naturalData !== 'undefined' ? '✅' : '❌');
// Baby (Дети)
console.log("  safetyData:", typeof window.safetyData !== 'undefined' ? '✅' : '❌');
console.log("  healthData:", typeof window.healthData !== 'undefined' ? '✅' : '❌');
console.log("  injuryData:", typeof window.injuryData !== 'undefined' ? '✅' : '❌');
console.log("  lostData:", typeof window.lostData !== 'undefined' ? '✅' : '❌');
console.log("  bullyingData:", typeof window.bullyingData !== 'undefined' ? '✅' : '❌');
console.log("  internetData:", typeof window.internetData !== 'undefined' ? '✅' : '❌');
console.log("  schoolData:", typeof window.schoolData !== 'undefined' ? '✅' : '❌');
// Pets (Животные)
console.log("  firstaidData:", typeof window.firstaidData !== 'undefined' ? '✅' : '❌');
console.log("  lostPetData:", typeof window.lostPetData !== 'undefined' ? '✅' : '❌');
console.log("  behaviorData:", typeof window.behaviorData !== 'undefined' ? '✅' : '❌');
console.log("  petHealthData:", typeof window.petHealthData !== 'undefined' ? '✅' : '❌');
console.log("  poisonData:", typeof window.poisonData !== 'undefined' ? '✅' : '❌');
console.log("  emergencyPetData:", typeof window.emergencyPetData !== 'undefined' ? '✅' : '❌');
console.log("  careData:", typeof window.careData !== 'undefined' ? '✅' : '❌');
// Travel (Путешествия)
console.log("  documentsData:", typeof window.documentsData !== 'undefined' ? '✅' : '❌');
console.log("  moneyData:", typeof window.moneyData !== 'undefined' ? '✅' : '❌');
console.log("  travelHealthData:", typeof window.travelHealthData !== 'undefined' ? '✅' : '❌');
console.log("  flightData:", typeof window.flightData !== 'undefined' ? '✅' : '❌');
console.log("  hotelData:", typeof window.hotelData !== 'undefined' ? '✅' : '❌');
console.log("  theftData:", typeof window.theftData !== 'undefined' ? '✅' : '❌');
console.log("  travelLostData:", typeof window.travelLostData !== 'undefined' ? '✅' : '❌');

console.log("🔍 Проверка данных (EN):");
// Survival
console.log("  waterDataEn:", typeof window.waterDataEn !== 'undefined' ? '✅' : '❌');
console.log("  fireDataEn:", typeof window.fireDataEn !== 'undefined' ? '✅' : '❌');
console.log("  shelterDataEn:", typeof window.shelterDataEn !== 'undefined' ? '✅' : '❌');
console.log("  foodDataEn:", typeof window.foodDataEn !== 'undefined' ? '✅' : '❌');
console.log("  medicineDataEn:", typeof window.medicineDataEn !== 'undefined' ? '✅' : '❌');
console.log("  navigationDataEn:", typeof window.navigationDataEn !== 'undefined' ? '✅' : '❌');
console.log("  radioDataEn:", typeof window.radioDataEn !== 'undefined' ? '✅' : '❌');
console.log("  kitDataEn:", typeof window.kitDataEn !== 'undefined' ? '✅' : '❌');
// Auto
console.log("  autoWontStartDataEn:", typeof window.autoWontStartDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoOverheatingDataEn:", typeof window.autoOverheatingDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoFlatTireDataEn:", typeof window.autoFlatTireDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoBrakesDataEn:", typeof window.autoBrakesDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoBatteryDataEn:", typeof window.autoBatteryDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoLeakDataEn:", typeof window.autoLeakDataEn !== 'undefined' ? '✅' : '❌');
console.log("  autoDtpDataEn:", typeof window.autoDtpDataEn !== 'undefined' ? '✅' : '❌');
// Lawyer
console.log("  dtpDataEn:", typeof window.dtpDataEn !== 'undefined' ? '✅' : '❌');
console.log("  laborDataEn:", typeof window.laborDataEn !== 'undefined' ? '✅' : '❌');
console.log("  housingDataEn:", typeof window.housingDataEn !== 'undefined' ? '✅' : '❌');
console.log("  inheritanceDataEn:", typeof window.inheritanceDataEn !== 'undefined' ? '✅' : '❌');
console.log("  debtsDataEn:", typeof window.debtsDataEn !== 'undefined' ? '✅' : '❌');
console.log("  divorceDataEn:", typeof window.divorceDataEn !== 'undefined' ? '✅' : '❌');
console.log("  consumerDataEn:", typeof window.consumerDataEn !== 'undefined' ? '✅' : '❌');
// Home
console.log("  plumbingDataEn:", typeof window.plumbingDataEn !== 'undefined' ? '✅' : '❌');
console.log("  electricityDataEn:", typeof window.electricityDataEn !== 'undefined' ? '✅' : '❌');
console.log("  homeFireDataEn:", typeof window.homeFireDataEn !== 'undefined' ? '✅' : '❌');
console.log("  gasDataEn:", typeof window.gasDataEn !== 'undefined' ? '✅' : '❌');
console.log("  lockDataEn:", typeof window.lockDataEn !== 'undefined' ? '✅' : '❌');
console.log("  heatingDataEn:", typeof window.heatingDataEn !== 'undefined' ? '✅' : '❌');
console.log("  naturalDataEn:", typeof window.naturalDataEn !== 'undefined' ? '✅' : '❌');
// Baby (Дети) EN
console.log("  safetyDataEn:", typeof window.safetyDataEn !== 'undefined' ? '✅' : '❌');
console.log("  healthDataEn:", typeof window.healthDataEn !== 'undefined' ? '✅' : '❌');
console.log("  injuryDataEn:", typeof window.injuryDataEn !== 'undefined' ? '✅' : '❌');
console.log("  lostDataEn:", typeof window.lostDataEn !== 'undefined' ? '✅' : '❌');
console.log("  bullyingDataEn:", typeof window.bullyingDataEn !== 'undefined' ? '✅' : '❌');
console.log("  internetDataEn:", typeof window.internetDataEn !== 'undefined' ? '✅' : '❌');
console.log("  schoolDataEn:", typeof window.schoolDataEn !== 'undefined' ? '✅' : '❌');
// Pets (Животные) EN
console.log("  firstaidDataEn:", typeof window.firstaidDataEn !== 'undefined' ? '✅' : '❌');
console.log("  lostPetDataEn:", typeof window.lostPetDataEn !== 'undefined' ? '✅' : '❌');
console.log("  behaviorDataEn:", typeof window.behaviorDataEn !== 'undefined' ? '✅' : '❌');
console.log("  petHealthDataEn:", typeof window.petHealthDataEn !== 'undefined' ? '✅' : '❌');
console.log("  poisonDataEn:", typeof window.poisonDataEn !== 'undefined' ? '✅' : '❌');
console.log("  emergencyPetDataEn:", typeof window.emergencyPetDataEn !== 'undefined' ? '✅' : '❌');
console.log("  careDataEn:", typeof window.careDataEn !== 'undefined' ? '✅' : '❌');
// Travel (Путешествия) EN
console.log("  documentsDataEn:", typeof window.documentsDataEn !== 'undefined' ? '✅' : '❌');
console.log("  moneyDataEn:", typeof window.moneyDataEn !== 'undefined' ? '✅' : '❌');
console.log("  travelHealthDataEn:", typeof window.travelHealthDataEn !== 'undefined' ? '✅' : '❌');
console.log("  flightDataEn:", typeof window.flightDataEn !== 'undefined' ? '✅' : '❌');
console.log("  hotelDataEn:", typeof window.hotelDataEn !== 'undefined' ? '✅' : '❌');
console.log("  theftDataEn:", typeof window.theftDataEn !== 'undefined' ? '✅' : '❌');
console.log("  travelLostDataEn:", typeof window.travelLostDataEn !== 'undefined' ? '✅' : '❌');

// Регистр всех данных (русские и английские версии)
const dataRegistry = {
  ru: {
    // ===== SURVIVAL =====
    water: typeof window.waterData !== 'undefined' ? window.waterData : null,
    fire: typeof window.fireData !== 'undefined' ? window.fireData : null,
    shelter: typeof window.shelterData !== 'undefined' ? window.shelterData : null,
    food: typeof window.foodData !== 'undefined' ? window.foodData : null,
    medicine: typeof window.medicineData !== 'undefined' ? window.medicineData : null,
    navigation: typeof window.navigationData !== 'undefined' ? window.navigationData : null,
    radio: typeof window.radioData !== 'undefined' ? window.radioData : null,
    kit: typeof window.kitData !== 'undefined' ? window.kitData : null,

    // ===== AUTO =====
    wont_start: typeof window.autoWontStartData !== 'undefined' ? window.autoWontStartData : null,
    overheating: typeof window.autoOverheatingData !== 'undefined' ? window.autoOverheatingData : null,
    flat_tire: typeof window.autoFlatTireData !== 'undefined' ? window.autoFlatTireData : null,
    brakes: typeof window.autoBrakesData !== 'undefined' ? window.autoBrakesData : null,
    battery: typeof window.autoBatteryData !== 'undefined' ? window.autoBatteryData : null,
    leak: typeof window.autoLeakData !== 'undefined' ? window.autoLeakData : null,
    dtp: typeof window.autoDtpData !== 'undefined' ? window.autoDtpData : null,  // Auto ДТП

    // ===== LAWYER =====
    dtp_lawyer: typeof window.dtpData !== 'undefined' ? window.dtpData : null,
    labor: typeof window.laborData !== 'undefined' ? window.laborData : null,
    housing: typeof window.housingData !== 'undefined' ? window.housingData : null,
    inheritance: typeof window.inheritanceData !== 'undefined' ? window.inheritanceData : null,
    debts: typeof window.debtsData !== 'undefined' ? window.debtsData : null,
    divorce: typeof window.divorceData !== 'undefined' ? window.divorceData : null,
    consumer: typeof window.consumerData !== 'undefined' ? window.consumerData : null,

    // ===== HOME =====
    plumbing: typeof window.plumbingData !== 'undefined' ? window.plumbingData : null,
    electricity: typeof window.electricityData !== 'undefined' ? window.electricityData : null,
    home_fire: typeof window.homeFireData !== 'undefined' ? window.homeFireData : null,
    gas: typeof window.gasData !== 'undefined' ? window.gasData : null,
    home_lock: typeof window.lockData !== 'undefined' ? window.lockData : null,
    heating: typeof window.heatingData !== 'undefined' ? window.heatingData : null,
    natural: typeof window.naturalData !== 'undefined' ? window.naturalData : null,

    // ===== BABY (Дети) =====
    safety: typeof window.safetyData !== 'undefined' ? window.safetyData : null,
    health: typeof window.healthData !== 'undefined' ? window.healthData : null,  // детский health
    injury: typeof window.injuryData !== 'undefined' ? window.injuryData : null,
    lost: typeof window.lostData !== 'undefined' ? window.lostData : null,       // детский lost
    bullying: typeof window.bullyingData !== 'undefined' ? window.bullyingData : null,
    internet: typeof window.internetData !== 'undefined' ? window.internetData : null,
    school: typeof window.schoolData !== 'undefined' ? window.schoolData : null,

    // ===== PETS (Животные) =====
    firstaid: typeof window.firstaidData !== 'undefined' ? window.firstaidData : null,
    lost_pet: typeof window.lostPetData !== 'undefined' ? window.lostPetData : null,
    behavior: typeof window.behaviorData !== 'undefined' ? window.behaviorData : null,
    pet_health: typeof window.petHealthData !== 'undefined' ? window.petHealthData : null,
    poison: typeof window.poisonData !== 'undefined' ? window.poisonData : null,
    emergency_pet: typeof window.emergencyPetData !== 'undefined' ? window.emergencyPetData : null,
    care: typeof window.careData !== 'undefined' ? window.careData : null,

    // ===== TRAVEL (Путешествия) =====
    documents: typeof window.documentsData !== 'undefined' ? window.documentsData : null,
    money: typeof window.moneyData !== 'undefined' ? window.moneyData : null,
    travel_health: typeof window.travelHealthData !== 'undefined' ? window.travelHealthData : null,
    flight: typeof window.flightData !== 'undefined' ? window.flightData : null,
    hotel: typeof window.hotelData !== 'undefined' ? window.hotelData : null,
    theft: typeof window.theftData !== 'undefined' ? window.theftData : null,
    travel_lost: typeof window.travelLostData !== 'undefined' ? window.travelLostData : null
  },
  en: {}
};

// ===== ЗАПОЛНЯЕМ АНГЛИЙСКИЙ РЕГИСТР =====
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

// Baby (Дети) EN
if (typeof window.safetyDataEn !== 'undefined') dataRegistry.en.safety = window.safetyDataEn;
if (typeof window.healthDataEn !== 'undefined') dataRegistry.en.health = window.healthDataEn;
if (typeof window.injuryDataEn !== 'undefined') dataRegistry.en.injury = window.injuryDataEn;
if (typeof window.lostDataEn !== 'undefined') dataRegistry.en.lost = window.lostDataEn;
if (typeof window.bullyingDataEn !== 'undefined') dataRegistry.en.bullying = window.bullyingDataEn;
if (typeof window.internetDataEn !== 'undefined') dataRegistry.en.internet = window.internetDataEn;
if (typeof window.schoolDataEn !== 'undefined') dataRegistry.en.school = window.schoolDataEn;

// Pets (Животные) EN
if (typeof window.firstaidDataEn !== 'undefined') dataRegistry.en.firstaid = window.firstaidDataEn;
if (typeof window.lostPetDataEn !== 'undefined') dataRegistry.en.lost_pet = window.lostPetDataEn;
if (typeof window.behaviorDataEn !== 'undefined') dataRegistry.en.behavior = window.behaviorDataEn;
if (typeof window.petHealthDataEn !== 'undefined') dataRegistry.en.pet_health = window.petHealthDataEn;
if (typeof window.poisonDataEn !== 'undefined') dataRegistry.en.poison = window.poisonDataEn;
if (typeof window.emergencyPetDataEn !== 'undefined') dataRegistry.en.emergency_pet = window.emergencyPetDataEn;
if (typeof window.careDataEn !== 'undefined') dataRegistry.en.care = window.careDataEn;

// Travel (Путешествия) EN
if (typeof window.documentsDataEn !== 'undefined') dataRegistry.en.documents = window.documentsDataEn;
if (typeof window.moneyDataEn !== 'undefined') dataRegistry.en.money = window.moneyDataEn;
if (typeof window.travelHealthDataEn !== 'undefined') dataRegistry.en.travel_health = window.travelHealthDataEn;
if (typeof window.flightDataEn !== 'undefined') dataRegistry.en.flight = window.flightDataEn;
if (typeof window.hotelDataEn !== 'undefined') dataRegistry.en.hotel = window.hotelDataEn;
if (typeof window.theftDataEn !== 'undefined') dataRegistry.en.theft = window.theftDataEn;
if (typeof window.travelLostDataEn !== 'undefined') dataRegistry.en.travel_lost = window.travelLostDataEn;

function getCurrentLang() {
  return typeof currentLang !== 'undefined' ? currentLang : 'ru';
}

/**
 * Получение данных категории с учётом маппинга конфликтов
 */
function getCategoryData(category) {
  const lang = getCurrentLang();
  const langData = dataRegistry[lang] || dataRegistry.ru;
  
  let mappedCategory = category;
  
  // ===== МАППИНГ КОНФЛИКТОВ =====
  // 1. LAWYER / AUTO: dtp конфликтует
  if (category === 'dtp' && langData.dtp_lawyer) {
    mappedCategory = 'dtp_lawyer';
  }

  // 2. HOME / SURVIVAL: fire конфликтует
  if (category === 'fire' && langData.home_fire) {
    mappedCategory = 'home_fire';
  }

  // 3. HOME: lock конфликтует
  if (category === 'lock' && langData.home_lock) {
    mappedCategory = 'home_lock';
  }

  // 4. Универсальный fallback с префиксом home_
  if (!langData[mappedCategory]) {
    const withHomePrefix = 'home_' + category;
    if (langData[withHomePrefix]) {
      mappedCategory = withHomePrefix;
    }
  }

  // 5. PETS: маппинг для конфликтующих категорий (lost, health, emergency)
  if (category === 'lost' && langData.lost_pet) {
    mappedCategory = 'lost_pet';
  }
  if (category === 'health' && langData.pet_health) {
    mappedCategory = 'pet_health';
  }
  if (category === 'emergency' && langData.emergency_pet) {
    mappedCategory = 'emergency_pet';
  }

  // 6. TRAVEL: маппинг для конфликтующих категорий (health, lost)
  if (category === 'health' && langData.travel_health) {
    mappedCategory = 'travel_health';
  }
  if (category === 'lost' && langData.travel_lost) {
    mappedCategory = 'travel_lost';
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
    
    const mainSymptom = answers.symptom ? answers.symptom[0] : null;
    const allTags = Object.values(answers).flat();
    
    matched = data.solutions.filter(sol => {
      if (!sol.tags) return false;
      
      if (mainSymptom) {
        if (sol.conditions && sol.conditions.symptom) {
          const solSymptoms = sol.conditions.symptom;
          if (!solSymptoms.includes(mainSymptom)) {
            return false;
          }
        } else {
          const isMedicalUniversal = sol.tags.includes("emergency") || 
                                     sol.tags.includes("first_aid");
          if (!isMedicalUniversal) {
            return false;
          }
        }
      }
      
      const hasTagMatch = allTags.some(tag => sol.tags.includes(tag));
      const isUniversal = sol.tags.includes("universal") || 
                         sol.tags.includes("primitive") ||
                         sol.tags.includes("search") ||
                         sol.tags.includes("basic") ||
                         sol.tags.includes("emergency") ||
                         sol.tags.includes("first_aid") ||
                         sol.tags.includes("checklist");
      
      return hasTagMatch || isUniversal;
    });
    
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
    if (prioB !== prioA) return prioB - prioA;
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

// ===== ЭКСПОРТ =====
window.getCategoryData = getCategoryData;
window.filterSolutions = filterSolutions;
window.getSolutionById = getSolutionById;
window.refreshDataRegistry = refreshDataRegistry;

console.log("✅ Движок загружен, готов к работе!");
console.log(`🌍 Доступные языки: ${Object.keys(dataRegistry).join(", ")}`);