// modules/survival/data/index.js
// ============================================================
// Экспорт всех категорий данных для модуля выживания
// ============================================================

// Поскольку данные загружаются через script tags как глобальные переменные,
// этот файл просто собирает их в один объект для удобства

const survivalData = {
  water: typeof waterData !== 'undefined' ? waterData : null,
  fire: typeof fireData !== 'undefined' ? fireData : null,
  shelter: typeof shelterData !== 'undefined' ? shelterData : null,
  food: typeof foodData !== 'undefined' ? foodData : null,
  medicine: typeof medicineData !== 'undefined' ? medicineData : null,
  navigation: typeof navigationData !== 'undefined' ? navigationData : null,
  radio: typeof radioData !== 'undefined' ? radioData : null,
  kit: typeof kitData !== 'undefined' ? kitData : null,
  // Английские версии
  waterEn: typeof waterDataEn !== 'undefined' ? waterDataEn : null,
  fireEn: typeof fireDataEn !== 'undefined' ? fireDataEn : null,
  shelterEn: typeof shelterDataEn !== 'undefined' ? shelterDataEn : null,
  foodEn: typeof foodDataEn !== 'undefined' ? foodDataEn : null,
  medicineEn: typeof medicineDataEn !== 'undefined' ? medicineDataEn : null,
  navigationEn: typeof navigationDataEn !== 'undefined' ? navigationDataEn : null,
  radioEn: typeof radioDataEn !== 'undefined' ? radioDataEn : null,
  kitEn: typeof kitDataEn !== 'undefined' ? kitDataEn : null
};

// Экспорт для использования в engine.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = survivalData;
}

// Также делаем доступным глобально
window.survivalData = survivalData;