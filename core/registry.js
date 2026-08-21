// core/registry.js — SOS UNIVERSAL v3.0 Registry
(function() {
  'use strict';
  
  const REGISTRY = {};
  
  window.SOS_REGISTER_QUIZ = function(data) {
    if (!data || !data.meta) {
      console.error('❌ SOS_REGISTER_QUIZ: неверная структура', data);
      return;
    }
    const key = `${data.meta.module}::${data.meta.category}::${data.meta.lang || 'ru'}`;
    REGISTRY[key] = data;
    console.log(`✅ Зарегистрирован: ${key}`);
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
  
  window.SOS_DEBUG_REGISTRY = function() {
    console.log('=== SOS REGISTRY ===');
    Object.keys(REGISTRY).forEach(k => {
      const d = REGISTRY[k];
      console.log(`  ${k}: ${d.questions?.length || 0}Q / ${d.solutions?.length || 0}S`);
    });
  };
})();