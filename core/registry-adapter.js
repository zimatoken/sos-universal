// ============================================================
// core/registry-adapter.js
// SOS UNIVERSAL — Smart Adapter v3.0
// Авто-регистрация старых данных + поддержка нового формата
// ============================================================

(function() {
  'use strict';

  const REGISTRY = {};
  
  // === МАППИНГ: имя переменной → { module, category, lang } ===
  // Это ЕДИНСТВЕННОЕ место где нужно прописать конфликты
  const VAR_MAP = {
    // --- SURVIVAL ---
    'waterData':       { module: 'survival', category: 'water',       lang: 'ru', color: '#16a34a', icon: '💧' },
    'fireData':        { module: 'survival', category: 'fire',        lang: 'ru', color: '#16a34a', icon: '🔥' },
    'shelterData':     { module: 'survival', category: 'shelter',     lang: 'ru', color: '#16a34a', icon: '🏠' },
    'foodData':        { module: 'survival', category: 'food',        lang: 'ru', color: '#16a34a', icon: '🍖' },
    'medicineData':    { module: 'survival', category: 'medicine',    lang: 'ru', color: '#16a34a', icon: '🩹' },
    'navigationData':  { module: 'survival', category: 'navigation',  lang: 'ru', color: '#16a34a', icon: '🧭' },
    'radioData':       { module: 'survival', category: 'radio',       lang: 'ru', color: '#16a34a', icon: '📻' },
    'kitData':         { module: 'survival', category: 'kit',         lang: 'ru', color: '#16a34a', icon: '🎒' },
    
    // --- AUTO ---
    'autoWontStartData':   { module: 'auto', category: 'wont_start',  lang: 'ru', color: '#2563eb', icon: '🚗' },
    'autoOverheatingData': { module: 'auto', category: 'overheating', lang: 'ru', color: '#2563eb', icon: '🌡️' },
    'autoFlatTireData':    { module: 'auto', category: 'flat_tire',   lang: 'ru', color: '#2563eb', icon: '🛞' },
    'autoBrakesData':      { module: 'auto', category: 'brakes',      lang: 'ru', color: '#2563eb', icon: '🛑' },
    'autoBatteryData':     { module: 'auto', category: 'battery',     lang: 'ru', color: '#2563eb', icon: '🔋' },
    'autoLeakData':        { module: 'auto', category: 'leak',        lang: 'ru', color: '#2563eb', icon: '💧' },
    'autoDtpData':         { module: 'auto', category: 'dtp',         lang: 'ru', color: '#2563eb', icon: '💥' },
    
    // --- LAWYER ---
    'dtpData':         { module: 'lawyer', category: 'dtp',         lang: 'ru', color: '#7c3aed', icon: '⚖️' },
    'laborData':       { module: 'lawyer', category: 'labor',       lang: 'ru', color: '#7c3aed', icon: '💼' },
    'housingData':     { module: 'lawyer', category: 'housing',     lang: 'ru', color: '#7c3aed', icon: '🏠' },
    'inheritanceData': { module: 'lawyer', category: 'inheritance', lang: 'ru', color: '#7c3aed', icon: '📜' },
    'debtsData':       { module: 'lawyer', category: 'debts',       lang: 'ru', color: '#7c3aed', icon: '💰' },
    'divorceData':     { module: 'lawyer', category: 'divorce',     lang: 'ru', color: '#7c3aed', icon: '💔' },
    'consumerData':    { module: 'lawyer', category: 'consumer',    lang: 'ru', color: '#7c3aed', icon: '🛒' },
    
    // --- HOME ---
    'plumbingData':    { module: 'home', category: 'plumbing',    lang: 'ru', color: '#0891b2', icon: '🚿' },
    'electricityData': { module: 'home', category: 'electricity', lang: 'ru', color: '#0891b2', icon: '⚡' },
    'homeFireData':    { module: 'home', category: 'fire',        lang: 'ru', color: '#0891b2', icon: '🔥' },
    'gasData':         { module: 'home', category: 'gas',         lang: 'ru', color: '#0891b2', icon: '⛽' },
    'lockData':        { module: 'home', category: 'lock',        lang: 'ru', color: '#0891b2', icon: '🔐' },
    'heatingData':     { module: 'home', category: 'heating',     lang: 'ru', color: '#0891b2', icon: '🔥' },
    'naturalData':     { module: 'home', category: 'natural',     lang: 'ru', color: '#0891b2', icon: '🌊' },
    
    // --- CHILDREN ---
    'safetyData':      { module: 'children', category: 'safety',    lang: 'ru', color: '#db2777', icon: '🛡️' },
    'healthData':      { module: 'children', category: 'health',    lang: 'ru', color: '#db2777', icon: '🏥' },
    'injuryData':      { module: 'children', category: 'injury',    lang: 'ru', color: '#db2777', icon: '🩹' },
    'lostData':        { module: 'children', category: 'lost',      lang: 'ru', color: '#db2777', icon: '🔍' },
    'bullyingData':    { module: 'children', category: 'bullying',  lang: 'ru', color: '#db2777', icon: '😢' },
    'internetData':    { module: 'children', category: 'internet',  lang: 'ru', color: '#db2777', icon: '🌐' },
    'schoolData':      { module: 'children', category: 'school',    lang: 'ru', color: '#db2777', icon: '🎒' },
    
    // --- PETS ---
    'firstaidData':    { module: 'pets', category: 'firstaid',    lang: 'ru', color: '#9333ea', icon: '🩹' },
    'lostPetData':     { module: 'pets', category: 'lost',        lang: 'ru', color: '#9333ea', icon: '🔍' },
    'behaviorData':    { module: 'pets', category: 'behavior',    lang: 'ru', color: '#9333ea', icon: '🐕' },
    'petHealthData':   { module: 'pets', category: 'health',      lang: 'ru', color: '#9333ea', icon: '🏥' },
    'poisonData':      { module: 'pets', category: 'poison',      lang: 'ru', color: '#9333ea', icon: '☠️' },
    'emergencyPetData':{ module: 'pets', category: 'emergency',   lang: 'ru', color: '#9333ea', icon: '🚨' },
    'careData':        { module: 'pets', category: 'care',        lang: 'ru', color: '#9333ea', icon: '💚' },
    
    // --- TRAVEL ---
    'documentsData':   { module: 'travel', category: 'documents', lang: 'ru', color: '#0d9488', icon: '🛂' },
    'moneyData':       { module: 'travel', category: 'money',     lang: 'ru', color: '#0d9488', icon: '💱' },
    'travelHealthData':{ module: 'travel', category: 'health',    lang: 'ru', color: '#0d9488', icon: '🏥' },
    'flightData':      { module: 'travel', category: 'flight',    lang: 'ru', color: '#0d9488', icon: '✈️' },
    'hotelData':       { module: 'travel', category: 'hotel',     lang: 'ru', color: '#0d9488', icon: '🏨' },
    'theftData':       { module: 'travel', category: 'theft',     lang: 'ru', color: '#0d9488', icon: '🦹' },
    'travelLostData':  { module: 'travel', category: 'lost',      lang: 'ru', color: '#0d9488', icon: '🔍' },
    
    // --- DRONE ---
    'detectData':       { module: 'drone', category: 'detect',    lang: 'ru', color: '#ea580c', icon: '🛸' },
    'identifyData':     { module: 'drone', category: 'identify',  lang: 'ru', color: '#ea580c', icon: '🔊' },
    'droneShelterData': { module: 'drone', category: 'shelter',   lang: 'ru', color: '#ea580c', icon: '🛡️' },
    'droneCommsData':   { module: 'drone', category: 'comms',     lang: 'ru', color: '#ea580c', icon: '📡' },
    'droneEvacData':    { module: 'drone', category: 'evac',      lang: 'ru', color: '#ea580c', icon: '🏃' },
    'droneFirstaidData':{ module: 'drone', category: 'firstaid',  lang: 'ru', color: '#ea580c', icon: '🩹' },
    'dronePrepData':    { module: 'drone', category: 'prep',      lang: 'ru', color: '#ea580c', icon: '📋' },
    
    // --- ENGLISH (survival) ---
    'waterDataEn':       { module: 'survival', category: 'water',       lang: 'en', color: '#16a34a', icon: '💧' },
    'fireDataEn':        { module: 'survival', category: 'fire',        lang: 'en', color: '#16a34a', icon: '🔥' },
    'shelterDataEn':     { module: 'survival', category: 'shelter',     lang: 'en', color: '#16a34a', icon: '🏠' },
    'foodDataEn':        { module: 'survival', category: 'food',        lang: 'en', color: '#16a34a', icon: '🍖' },
    'medicineDataEn':    { module: 'survival', category: 'medicine',    lang: 'en', color: '#16a34a', icon: '🩹' },
    'navigationDataEn':  { module: 'survival', category: 'navigation',  lang: 'en', color: '#16a34a', icon: '🧭' },
    'radioDataEn':       { module: 'survival', category: 'radio',       lang: 'en', color: '#16a34a', icon: '📻' },
    'kitDataEn':         { module: 'survival', category: 'kit',         lang: 'en', color: '#16a34a', icon: '🎒' },
    
    // --- ENGLISH (auto) ---
    'autoWontStartDataEn':   { module: 'auto', category: 'wont_start',  lang: 'en', color: '#2563eb', icon: '🚗' },
    'autoOverheatingDataEn': { module: 'auto', category: 'overheating', lang: 'en', color: '#2563eb', icon: '🌡️' },
    'autoFlatTireDataEn':    { module: 'auto', category: 'flat_tire',   lang: 'en', color: '#2563eb', icon: '🛞' },
    'autoBrakesDataEn':      { module: 'auto', category: 'brakes',      lang: 'en', color: '#2563eb', icon: '🛑' },
    'autoBatteryDataEn':     { module: 'auto', category: 'battery',     lang: 'en', color: '#2563eb', icon: '🔋' },
    'autoLeakDataEn':        { module: 'auto', category: 'leak',        lang: 'en', color: '#2563eb', icon: '💧' },
    'autoDtpDataEn':         { module: 'auto', category: 'dtp',         lang: 'en', color: '#2563eb', icon: '💥' },
    
    // --- ENGLISH (lawyer) ---
    'dtpDataEn':         { module: 'lawyer', category: 'dtp',         lang: 'en', color: '#7c3aed', icon: '⚖️' },
    'laborDataEn':       { module: 'lawyer', category: 'labor',       lang: 'en', color: '#7c3aed', icon: '💼' },
    'housingDataEn':     { module: 'lawyer', category: 'housing',     lang: 'en', color: '#7c3aed', icon: '🏠' },
    'inheritanceDataEn': { module: 'lawyer', category: 'inheritance', lang: 'en', color: '#7c3aed', icon: '📜' },
    'debtsDataEn':       { module: 'lawyer', category: 'debts',       lang: 'en', color: '#7c3aed', icon: '💰' },
    'divorceDataEn':     { module: 'lawyer', category: 'divorce',     lang: 'en', color: '#7c3aed', icon: '💔' },
    'consumerDataEn':    { module: 'lawyer', category: 'consumer',    lang: 'en', color: '#7c3aed', icon: '🛒' },
    
    // --- ENGLISH (home) ---
    'plumbingDataEn':    { module: 'home', category: 'plumbing',    lang: 'en', color: '#0891b2', icon: '🚿' },
    'electricityDataEn': { module: 'home', category: 'electricity', lang: 'en', color: '#0891b2', icon: '⚡' },
    'homeFireDataEn':    { module: 'home', category: 'fire',        lang: 'en', color: '#0891b2', icon: '🔥' },
    'gasDataEn':         { module: 'home', category: 'gas',         lang: 'en', color: '#0891b2', icon: '⛽' },
    'lockDataEn':        { module: 'home', category: 'lock',        lang: 'en', color: '#0891b2', icon: '🔐' },
    'heatingDataEn':     { module: 'home', category: 'heating',     lang: 'en', color: '#0891b2', icon: '🔥' },
    'naturalDataEn':     { module: 'home', category: 'natural',     lang: 'en', color: '#0891b2', icon: '🌊' },
    
    // --- ENGLISH (children) ---
    'safetyDataEn':      { module: 'children', category: 'safety',    lang: 'en', color: '#db2777', icon: '🛡️' },
    'healthDataEn':      { module: 'children', category: 'health',    lang: 'en', color: '#db2777', icon: '🏥' },
    'injuryDataEn':      { module: 'children', category: 'injury',    lang: 'en', color: '#db2777', icon: '🩹' },
    'lostDataEn':        { module: 'children', category: 'lost',      lang: 'en', color: '#db2777', icon: '🔍' },
    'bullyingDataEn':    { module: 'children', category: 'bullying',  lang: 'en', color: '#db2777', icon: '😢' },
    'internetDataEn':    { module: 'children', category: 'internet',  lang: 'en', color: '#db2777', icon: '🌐' },
    'schoolDataEn':      { module: 'children', category: 'school',    lang: 'en', color: '#db2777', icon: '🎒' },
    
    // --- ENGLISH (pets) ---
    'firstaidDataEn':    { module: 'pets', category: 'firstaid',    lang: 'en', color: '#9333ea', icon: '🩹' },
    'lostPetDataEn':     { module: 'pets', category: 'lost',        lang: 'en', color: '#9333ea', icon: '🔍' },
    'behaviorDataEn':    { module: 'pets', category: 'behavior',    lang: 'en', color: '#9333ea', icon: '🐕' },
    'petHealthDataEn':   { module: 'pets', category: 'health',      lang: 'en', color: '#9333ea', icon: '🏥' },
    'poisonDataEn':      { module: 'pets', category: 'poison',      lang: 'en', color: '#9333ea', icon: '☠️' },
    'emergencyPetDataEn':{ module: 'pets', category: 'emergency',   lang: 'en', color: '#9333ea', icon: '🚨' },
    'careDataEn':        { module: 'pets', category: 'care',        lang: 'en', color: '#9333ea', icon: '💚' },
    
    // --- ENGLISH (travel) ---
    'documentsDataEn':   { module: 'travel', category: 'documents', lang: 'en', color: '#0d9488', icon: '🛂' },
    'moneyDataEn':       { module: 'travel', category: 'money',     lang: 'en', color: '#0d9488', icon: '💱' },
    'travelHealthDataEn':{ module: 'travel', category: 'health',    lang: 'en', color: '#0d9488', icon: '🏥' },
    'flightDataEn':      { module: 'travel', category: 'flight',    lang: 'en', color: '#0d9488', icon: '✈️' },
    'hotelDataEn':       { module: 'travel', category: 'hotel',     lang: 'en', color: '#0d9488', icon: '🏨' },
    'theftDataEn':       { module: 'travel', category: 'theft',     lang: 'en', color: '#0d9488', icon: '🦹' },
    'travelLostDataEn':  { module: 'travel', category: 'lost',      lang: 'en', color: '#0d9488', icon: '🔍' },
    
    // --- ENGLISH (drone) ---
    'detectDataEn':       { module: 'drone', category: 'detect',    lang: 'en', color: '#ea580c', icon: '🛸' },
    'identifyDataEn':     { module: 'drone', category: 'identify',  lang: 'en', color: '#ea580c', icon: '🔊' },
    'droneShelterDataEn': { module: 'drone', category: 'shelter',   lang: 'en', color: '#ea580c', icon: '🛡️' },
    'droneCommsDataEn':   { module: 'drone', category: 'comms',     lang: 'en', color: '#ea580c', icon: '📡' },
    'droneEvacDataEn':    { module: 'drone', category: 'evac',      lang: 'en', color: '#ea580c', icon: '🏃' },
    'droneFirstaidDataEn':{ module: 'drone', category: 'firstaid',  lang: 'en', color: '#ea580c', icon: '🩹' },
    'dronePrepDataEn':    { module: 'drone', category: 'prep',      lang: 'en', color: '#ea580c', icon: '📋' },
  };

  // === АВТО-СКАНИРОВАНИЕ window ===
  function autoRegisterLegacy() {
    let count = 0;
    
    for (const varName in VAR_MAP) {
      if (window[varName]) {
        const info = VAR_MAP[varName];
        const data = window[varName];
        
        // Создаём meta на лету
        const quizData = {
          meta: {
            module: info.module,
            category: info.category,
            version: '1.0.0',
            lang: info.lang,
            title: data.title || info.category,
            description: data.description || '',
            icon: info.icon,
            color: info.color
          },
          questions: data.questions || [],
          solutions: (data.solutions || []).map(s => ({
            ...s,
            scoring: {
              priority: s.priority || 'medium',
              reliability: s.reliability || 'medium',
              urgency_score: 0
            }
          }))
        };
        
        register(quizData);
        count++;
      }
    }
    
    console.log(`✅ Smart Adapter: зарегистрировано ${count} старых файлов`);
  }

  // === НОВЫЙ API (для новых модулей) ===
  window.SOS_REGISTER_QUIZ = function(data) {
    register(data);
  };

  window.SOS_GET_QUIZ = function(module, category, lang) {
    lang = lang || (typeof currentLang !== 'undefined' ? currentLang : 'ru');
    const key = `${module}::${category}::${lang}`;
    let data = REGISTRY[key];
    
    if (!data && lang !== 'ru') {
      data = REGISTRY[`${module}::${category}::ru`];
    }
    
    return data || null;
  };

  window.SOS_DEBUG = function() {
    console.log('=== SOS REGISTRY ===');
    Object.keys(REGISTRY).forEach(k => {
      const d = REGISTRY[k];
      console.log(`  ${k}: ${d.questions?.length || 0}Q / ${d.solutions?.length || 0}S`);
    });
  };

  function register(data) {
    if (!data?.meta) {
      console.error('❌ Неверная структура:', data);
      return;
    }
    const key = `${data.meta.module}::${data.meta.category}::${data.meta.lang || 'ru'}`;
    REGISTRY[key] = data;
  }

  // === ЗАПУСК ===
  // Ждём загрузки всех скриптов данных, потом сканируем
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoRegisterLegacy);
  } else {
    autoRegisterLegacy();
  }

})();