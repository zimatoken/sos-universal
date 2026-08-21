// core/engine.js — ДВИЖОК ФИЛЬТРАЦИИ РЕШЕНИЙ v4.0
// Очищен от дублирующего кода (renderQuestion удалён)

(function() {
  'use strict';

  function getCurrentLang() {
    return window.currentLang || localStorage.getItem('language') || 'ru';
  }

  function detectModule() {
    const path = window.location.pathname;
    const m = path.match(/modules\/([^/]+)/);
    return m ? m[1] : null;
  }

  function getModuleFromBody() {
    const body = document.body;
    if (body?.dataset?.module) return body.dataset.module;
    return detectModule();
  }

  // ============================================================
  // === ПОЛУЧЕНИЕ ДАННЫХ ===
  // ============================================================

  window.getCategoryData = function(category) {
    const moduleId = getModuleFromBody();
    const lang = getCurrentLang();

    if (!moduleId) {
      console.error('❌ Не удалось определить модуль');
      return null;
    }

    if (typeof window.SOS_GET_QUIZ === 'function') {
      const data = window.SOS_GET_QUIZ(moduleId, category, lang);
      if (data) {
        console.log(`✅ Загружено: ${moduleId}/${category} (${lang})`);
        return data;
      }
    }

    console.error(`❌ Категория не найдена: ${moduleId}/${category} (${lang})`);
    return null;
  };

  // ============================================================
  // === ВИДИМЫЕ ВОПРОСЫ ===
  // ============================================================

  window.getVisibleQuestions = function(questions, answers) {
    if (!questions || questions.length === 0) return [];

    const result = [];
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];

      if (i === 0) {
        result.push(q);
        continue;
      }

      if (!q.conditions || Object.keys(q.conditions).length === 0) {
        result.push(q);
        continue;
      }

      let visible = true;
      for (const [key, allowedValues] of Object.entries(q.conditions)) {
        const userAnswer = answers ? answers[key] : null;
        if (!userAnswer || userAnswer.length === 0) {
          visible = false;
          break;
        }
        const hasMatch = userAnswer.some(val => allowedValues.includes(val));
        if (!hasMatch) {
          visible = false;
          break;
        }
      }

      if (visible) result.push(q);
    }

    return result;
  };

  // ============================================================
  // === ФИЛЬТРАЦИЯ РЕШЕНИЙ ===
  // ============================================================

  window.filterSolutions = function(data, answers) {
    if (!data?.solutions || data.solutions.length === 0) {
      console.warn('⚠️ Нет решений');
      return [];
    }

    if (!answers || Object.keys(answers).length === 0) {
      return data.solutions.slice(0, 3);
    }

    // 1. Точное совпадение
    let matched = data.solutions.filter(sol => {
      if (!sol.conditions || Object.keys(sol.conditions).length === 0) {
        return true;
      }

      for (const [key, allowedValues] of Object.entries(sol.conditions)) {
        const userAnswer = answers[key];
        if (!userAnswer || userAnswer.length === 0) return false;
        const hasMatch = userAnswer.some(val => allowedValues.includes(val));
        if (!hasMatch) return false;
      }
      return true;
    });

    // 2. По тегам
    if (matched.length === 0) {
      console.log('🔄 Ищем по тегам...');
      const allTags = Object.values(answers).flat();

      matched = data.solutions.filter(sol => {
        if (!sol.tags || sol.tags.length === 0) return false;
        return allTags.some(tag => sol.tags.includes(tag));
      });
    }

    // 3. Emergency
    if (matched.length === 0) {
      console.log('🔄 Ищем экстренные...');
      matched = data.solutions.filter(sol =>
        sol.tags?.includes('emergency')
      );
    }

    // 4. Fallback
    if (matched.length === 0) {
      matched = data.solutions.slice(0, 3);
    }

    // Сортировка
    const prioOrder = { fast: 3, medium: 2, slow: 1 };
    const relOrder = { high: 3, medium: 2, low: 1 };

    matched.sort((a, b) => {
      const prioA = prioOrder[a.scoring?.priority] || 1;
      const prioB = prioOrder[b.scoring?.priority] || 1;
      if (prioB !== prioA) return prioB - prioA;

      const relA = relOrder[a.scoring?.reliability] || 1;
      const relB = relOrder[b.scoring?.reliability] || 1;
      return relB - relA;
    });

    const result = matched.slice(0, 5);
    console.log(`✅ Найдено: ${matched.length}, показано: ${result.length}`);
    return result;
  };

  // ============================================================
  // === ПОЛУЧЕНИЕ РЕШЕНИЯ ПО ID ===
  // ============================================================

  window.getSolutionById = function(data, id) {
    if (!data?.solutions) return null;
    return data.solutions.find(s => s.id === id) || null;
  };

  // ============================================================
  // === ОБНОВЛЕНИЕ РЕЕСТРА ===
  // ============================================================

  window.refreshDataRegistry = function() {
    console.log(`🔄 Обновление данных (${getCurrentLang()})`);
    if (typeof window.SOS_DEBUG_REGISTRY === 'function') {
      window.SOS_DEBUG_REGISTRY();
    }
  };

  // ============================================================
  // === ИНИЦИАЛИЗАЦИЯ ===
  // ============================================================

  console.log('✅ Engine v4.0 загружен');
  console.log(`🌍 Язык: ${getCurrentLang()}`);
  console.log(`📦 Модуль: ${getModuleFromBody() || 'не определён'}`);

})();