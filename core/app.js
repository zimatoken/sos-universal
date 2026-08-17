// === SOS UNIVERSAL — ЯДРО ПРИЛОЖЕНИЯ ===
// Версия 2.0 — модульная архитектура с поддержкой условий
// Полностью рабочий движок для всех разделов

// ============================================================
// 1. ГЛОБАЛЬНОЕ СОСТОЯНИЕ
// ============================================================

const App = {
  flow: null,              // Текущий модуль (данные)
  allQuestions: [],        // Все вопросы модуля (исходные)
  visibleQuestions: [],    // Вопросы, прошедшие фильтр условий
  currentIndex: 0,         // Индекс в visibleQuestions
  answers: {},             // Ответы пользователя { questionId: [selectedIds] }
  results: [],             // Последние результаты
  isComplete: false        // Флаг завершения квиза
};

// ============================================================
// 2. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================

function showToast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
  clearTimeout(el._timeout);
  el._timeout = setTimeout(() => el.style.display = "none", 2500);
}

function showToastKey(key) {
  showToast(window.t ? t(key) : key);
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

function goHome() {
  Object.assign(App, {
    flow: null,
    allQuestions: [],
    visibleQuestions: [],
    currentIndex: 0,
    answers: {},
    results: [],
    isComplete: false
  });
  showScreen("screen-home");
}

// ============================================================
// 3. ФИЛЬТРАЦИЯ ВОПРОСОВ ПО УСЛОВИЯМ
// ============================================================

/**
 * Проверяет, выполняется ли условие для вопроса
 * @param {Object} question - вопрос с полем conditions
 * @param {Object} answers - текущие ответы
 * @returns {boolean}
 */
function isQuestionVisible(question, answers) {
  // Нет условий → всегда видим
  if (!question.conditions) return true;
  
  // Проверяем все условия
  for (const [key, allowedValues] of Object.entries(question.conditions)) {
    const userAnswer = answers[key];
    
    // Если ответа нет → условие не выполнено
    if (!userAnswer || userAnswer.length === 0) return false;
    
    // Хотя бы одно значение из ответа должно совпадать с разрешёнными
    const hasMatch = userAnswer.some(val => allowedValues.includes(val));
    if (!hasMatch) return false;
  }
  
  return true;
}

/**
 * Фильтрует вопросы на основе текущих ответов
 * @param {Array} questions - все вопросы модуля
 * @param {Object} answers - текущие ответы
 * @returns {Array} - видимые вопросы
 */
function getVisibleQuestions(questions, answers) {
  if (!questions || questions.length === 0) return [];
  return questions.filter(q => isQuestionVisible(q, answers));
}

// ============================================================
// 4. ЗАПУСК КВИЗА
// ============================================================

function startFlow(category) {
  // Загружаем данные модуля
  const flow = typeof getCategoryData === 'function' ? getCategoryData(category) : null;
  if (!flow) {
    showToastKey("toast_develop");
    return;
  }
  
  // Инициализируем состояние
  App.flow = flow;
  App.allQuestions = flow.questions || [];
  App.answers = {};
  App.currentIndex = 0;
  App.isComplete = false;
  
  // Первичная фильтрация (пока ответов нет — видны только вопросы без условий)
  App.visibleQuestions = getVisibleQuestions(App.allQuestions, App.answers);
  
  if (App.visibleQuestions.length === 0) {
    showToast("❌ Нет доступных вопросов");
    return;
  }
  
  renderQuestion();
  showScreen("screen-questions");
}

// ============================================================
// 5. ОТОБРАЖЕНИЕ ВОПРОСА
// ============================================================

function renderQuestion() {
  // Проверка наличия вопросов
  if (!App.visibleQuestions || App.visibleQuestions.length === 0) {
    const container = document.getElementById("question-container");
    if (container) {
      container.innerHTML = '<p style="color: var(--accent2);">❌ Вопросы не загружены.</p>';
    }
    return;
  }
  
  // Проверка индекса
  if (App.currentIndex >= App.visibleQuestions.length) {
    showResults();
    return;
  }
  
  const question = App.visibleQuestions[App.currentIndex];
  const total = App.allQuestions.length; // ← ВСЕ вопросы для нумерации!
  const current = App.currentIndex + 1;
  
  // Прогресс-бар (по всем вопросам)
  const progress = (App.currentIndex / Math.max(total, 1)) * 100;
  const progressBar = document.getElementById("progress");
  if (progressBar) progressBar.style.width = progress + "%";
  
  const container = document.getElementById("question-container");
  if (!container) return;
  
  const isMulti = question.type === "multi";
  const selectedValues = App.answers[question.id] || [];
  
  let html = '<div class="question-card">';
  
  // Номер вопроса (сквозная нумерация по ВСЕМ вопросам)
  const numText = (window.t ? t('question_of') : 'Вопрос {current} из {total}')
    .replace('{current}', current)
    .replace('{total}', total);
  
  html += `<div class="question-num">${numText}</div>`;
  html += `<h3>${question.text}</h3>`;
  
  // Подсказка для multi
  if (isMulti) {
    html += `<p class="question-hint" style="
      margin: 0 0 14px 0;
      padding: 10px 14px;
      background: rgba(59, 130, 246, 0.15);
      border-left: 3px solid #3b82f6;
      border-radius: 0 8px 8px 0;
      color: #60a5fa;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.4;
      display: flex;
      align-items: center;
      gap: 8px;
    ">
      <span style="margin-right: 4px;">✅</span>
      Можно выбрать <strong>несколько вариантов</strong>
    </p>`;
  }
  
  html += '<div class="options-container">';
  
  question.options.forEach((opt) => {
    const isSelected = selectedValues.includes(opt.id);
    const cls = isMulti ? "option multi" : "option";
    const selectedClass = isSelected ? 'selected' : '';
    
    html += `<div class="${cls} ${selectedClass}" data-id="${opt.id}" onclick="selectOption(this, '${question.id}', ${isMulti})">`;
    html += `<div class="check">${isSelected ? '✓' : ''}</div>`;
    html += `<span>${opt.label}</span>`;
    html += '</div>';
  });
  
  html += '</div></div>';
  container.innerHTML = html;
  
  // Кнопка "Далее"
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    const hasSelected = container.querySelectorAll('.option.selected').length > 0;
    nextBtn.disabled = !hasSelected;
    const isLast = App.currentIndex === App.visibleQuestions.length - 1;
    nextBtn.textContent = isLast ? (window.t ? t('show_results') : 'Показать результаты') : (window.t ? t('next') : 'Далее');
  }
}

// ============================================================
// 6. ВЫБОР ОТВЕТА
// ============================================================

function selectOption(el, questionId, isMulti) {
  if (!el) return;
  
  if (!isMulti) {
    // Single: снимаем все остальные в этой группе
    const parent = el.parentElement;
    parent.querySelectorAll(".option").forEach(o => {
      o.classList.remove("selected");
      const check = o.querySelector(".check");
      if (check) check.textContent = "";
    });
  }
  
  // Переключаем текущий
  el.classList.toggle("selected");
  const check = el.querySelector(".check");
  if (check) {
    check.textContent = el.classList.contains("selected") ? "✓" : "";
  }
  
  // Обновляем кнопку
  const selected = document.querySelectorAll(".option.selected");
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) nextBtn.disabled = selected.length === 0;
}

// ============================================================
// 7. ПЕРЕХОД К СЛЕДУЮЩЕМУ ВОПРОСУ
// ============================================================

function nextQuestion() {
  // Проверка состояния
  if (!App.visibleQuestions || App.visibleQuestions.length === 0) {
    showToast("❌ Ошибка: нет вопросов");
    return;
  }
  
  if (App.currentIndex >= App.visibleQuestions.length) {
    showResults();
    return;
  }
  
  // Сохраняем ответ на текущий вопрос
  const question = App.visibleQuestions[App.currentIndex];
  const selected = document.querySelectorAll(".option.selected");
  const values = Array.from(selected).map(el => el.dataset.id);
  App.answers[question.id] = values;
  
  // Переходим к следующему индексу
  App.currentIndex++;
  
  // Пересчитываем видимые вопросы на основе новых ответов
  const newVisible = getVisibleQuestions(App.allQuestions, App.answers);
  
  // Если список видимых вопросов изменился — обновляем
  if (newVisible.length !== App.visibleQuestions.length) {
    App.visibleQuestions = newVisible;
    // Если текущий индекс вышел за пределы — показываем результаты
    if (App.currentIndex >= App.visibleQuestions.length) {
      showResults();
      return;
    }
  }
  
  // Проверяем, есть ли ещё вопросы
  if (App.currentIndex < App.visibleQuestions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

// ============================================================
// 8. РЕЗУЛЬТАТЫ
// ============================================================

function showResults() {
  showScreen("screen-results");
  
  const flow = App.flow;
  if (!flow) return;
  
  const iconMap = {
    water: "💧", fire: "🔥", shelter: "🏠", 
    food: "🍖", medicine: "🩹", radio: "📻", navigation: "🧭"
  };
  
  const iconEl = document.getElementById("result-icon");
  if (iconEl) iconEl.textContent = iconMap[flow.category] || "🆘";
  
  const titleEl = document.getElementById("result-title");
  if (titleEl) {
    const label = window.t ? t('results_title') : 'Результаты: {title}';
    titleEl.textContent = label.replace('{title}', flow.title || "Результаты");
  }
  
  const subtitleEl = document.getElementById("result-subtitle");
  if (subtitleEl) {
    subtitleEl.textContent = window.t ? t('results_subtitle') : 'Подходящие решения для вашей ситуации';
  }
  
  // Фильтруем решения
  const matched = typeof filterSolutions === 'function' 
    ? filterSolutions(flow, App.answers) 
    : (flow.solutions || []).slice(0, 5);
  
  App.results = matched;
  
  const container = document.getElementById("results-container");
  if (!container) return;
  
  let html = "";
  
  if (!matched || matched.length === 0) {
    html = `<div class="result-card" style="border-left-color: var(--accent2);">
      <h4>⚠️ ${window.t ? t('no_results') : 'Нет подходящих решений'}</h4>
      <p style="color:var(--text2);">${window.t ? t('no_results_desc') : 'Попробуйте изменить ответы или обратитесь к специалисту'}</p>
    </div>`;
  } else {
    matched.forEach((sol, i) => {
      const prioMap = { fast: '⚡ Быстро', medium: '⏱️ Средне', slow: '🐢 Долго' };
      const relMap = { high: '✅ Надёжно', medium: '⚠️ Средне', low: '❌ Низко' };
      
      const prioLabel = prioMap[sol.priority] || sol.priority || '';
      const relLabel = relMap[sol.reliability] || sol.reliability || '';
      
      const desc = sol.description ? sol.description.substring(0, 120) : "";
      
      html += `<div class="result-card" onclick="showDetail('${sol.id}')">
        <span class="badge fast">${prioLabel}</span>
        <span class="badge high">${relLabel}</span>
        <h4>${i+1}. ${sol.title}</h4>
        <p>${desc}${desc.length >= 120 ? '...' : ''}</p>
        <div class="meta">
          ${sol.time_estimate ? `<span>⏱️ ${sol.time_estimate}</span>` : ''}
          ${sol.tags ? `<span>📍 ${sol.tags.slice(0, 3).join(', ')}</span>` : ''}
        </div>
      </div>`;
    });
  }
  
  container.innerHTML = html;
}

// ============================================================
// 9. ДЕТАЛИ РЕШЕНИЯ
// ============================================================

function showDetail(solutionId) {
  const flow = App.flow;
  if (!flow) return;
  
  const solution = typeof getSolutionById === 'function' 
    ? getSolutionById(flow, solutionId) 
    : (flow.solutions || []).find(s => s.id === solutionId);
  
  if (!solution) {
    showToast("Решение не найдено");
    return;
  }
  
  showScreen("screen-detail");
  
  const container = document.getElementById("detail-container");
  if (!container) return;
  
  let html = `<div class="detail-card">
    <h2>${solution.title}</h2>
    <div class="detail-desc">${solution.description}</div>`;
  
  if (solution.steps && solution.steps.length) {
    html += `<div class="steps-block"><h4>📋 ${window.t ? t('detail_steps') : 'Шаги'}</h4>`;
    solution.steps.forEach((step, i) => {
      html += `<div class="step-item"><div class="step-num">${i+1}</div><span>${step}</span></div>`;
    });
    html += '</div>';
  }
  
  if (solution.warnings && solution.warnings.length) {
    html += `<div class="warnings-block"><h4>⚠️ ${window.t ? t('detail_warnings') : 'Предупреждения'}</h4>`;
    solution.warnings.forEach(warn => {
      html += `<div class="warning-item"><div class="warn-icon">!</div><span>${warn}</span></div>`;
    });
    html += '</div>';
  }
  
  html += `<div class="meta" style="margin-top:16px;">
    ${solution.time_estimate ? `<span>⏱️ ${solution.time_estimate}</span>` : ''}
    ${solution.yield_estimate ? `<span>📦 ${solution.yield_estimate}</span>` : ''}
  </div></div>`;
  
  container.innerHTML = html;
}

function showResultsBack() {
  showScreen("screen-results");
}

// ============================================================
// 10. SOS
// ============================================================

function showSOS() {
  showScreen("screen-sos");
  updateGPS();
  loadContactData();
  showToastKey("sos_coords_saved");
}

function loadContactData() {
  const phone = localStorage.getItem('sos_contact_phone');
  const name = localStorage.getItem('sos_contact_name');
  const phoneEl = document.getElementById('sos-phone');
  const nameEl = document.getElementById('sos-name');
  if (phoneEl && phone) phoneEl.value = phone;
  if (nameEl && name) nameEl.value = name;
}

function saveContactData() {
  const phone = document.getElementById('sos-phone')?.value?.trim() || '';
  const name = document.getElementById('sos-name')?.value?.trim() || '';
  if (phone) localStorage.setItem('sos_contact_phone', phone);
  if (name) localStorage.setItem('sos_contact_name', name);
}

function sendSOS() {
  const phone = document.getElementById('sos-phone')?.value?.trim() || '';
  const name = document.getElementById('sos-name')?.value?.trim() || '';
  
  if (!phone) {
    showToast("Введите номер телефона!");
    return;
  }
  
  saveContactData();
  
  const coordsEl = document.getElementById("gps-coords");
  const coords = coordsEl ? coordsEl.textContent : "Координаты не определены";
  const now = new Date();
  const timeStr = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
  
  let mapUrl = "";
  const match = coords.match(/([\d.]+)° N, ([\d.]+)° E/);
  if (match) {
    mapUrl = `https://maps.google.com/?q=${match[1]},${match[2]}`;
  }
  
  const message = `🆘 SOS! Я в опасности!
📍 Координаты: ${coords}
📱 Карта: ${mapUrl || coords}
⏰ Время: ${timeStr}
${name ? '👤 Имя: ' + name : ''}
Пожалуйста, вызовите помощь!`;
  
  const smsUrl = `sms:${phone}?body=${encodeURIComponent(message)}`;
  
  window.location.href = smsUrl;
  
  setTimeout(() => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).then(() => {
        showToast("Сообщение скопировано в буфер обмена");
      }).catch(() => {
        showToast("SMS открыт. Скопируйте координаты вручную.");
      });
    } else {
      showToast("SMS открыт. Скопируйте координаты вручную.");
    }
  }, 1000);
}

function updateGPS() {
  const coordsEl = document.getElementById("gps-coords");
  const timeEl = document.getElementById("gps-time");

  if (!coordsEl || !timeEl) return;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude.toFixed(4);
        const lon = pos.coords.longitude.toFixed(4);
        coordsEl.textContent = lat + "° N, " + lon + "° E";
        const now = new Date();
        timeEl.textContent = "Обновлено: " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
      },
      () => {
        coordsEl.textContent = "GPS недоступен — координаты не определены";
        timeEl.textContent = "Используйте компас и ориентиры";
      }
    );
  } else {
    coordsEl.textContent = "GPS не поддерживается устройством";
  }
}

// ============================================================
// 11. SIGNALS
// ============================================================

function toggleSignal(el) {
  if (!el) return;
  el.classList.toggle("active");
  const check = el.querySelector(".signal-check");
  if (check) check.textContent = el.classList.contains("active") ? "✓" : "";
}

// ============================================================
// 12. FLASHLIGHT
// ============================================================

let flashlightOn = false;
let flashInterval = null;

function toggleFlashlight() {
  const btn = document.querySelector(".flashlight-btn");
  if (!btn) return;
  
  flashlightOn = !flashlightOn;
  btn.classList.toggle("on", flashlightOn);

  if (flashlightOn) {
    btn.textContent = "🔦 Фонарик ВКЛ (SOS-мигание)";
    startSOSFlash();
  } else {
    btn.textContent = "🔦 Фонарик (SOS-мигание)";
    stopSOSFlash();
  }
}

function startSOSFlash() {
  if (flashInterval) {
    clearInterval(flashInterval);
    flashInterval = null;
  }
  
  const pattern = [200, 200, 200, 200, 200, 200, 600, 200, 600, 200, 600, 200, 200, 200, 200, 200, 200, 200, 1000];
  let i = 0;

  function flash() {
    if (!flashlightOn) {
      clearInterval(flashInterval);
      flashInterval = null;
      return;
    }
    const duration = pattern[i % pattern.length];
    const isOn = i % 2 === 0 && duration < 500;

    if (navigator.vibrate) {
      if (isOn) navigator.vibrate(duration);
    }
    i++;
  }
  
  flashInterval = setInterval(flash, 200);
  flash();
}

function stopSOSFlash() {
  if (flashInterval) {
    clearInterval(flashInterval);
    flashInterval = null;
  }
  if (navigator.vibrate) navigator.vibrate(0);
}

// ============================================================
// 13. SUPPORT BANNER
// ============================================================

function handleSupportBannerClick(event) {
  if (event.target.classList.contains('support-banner-close')) return;
  window.open('https://www.tinkoff.ru/rm/zima.token1/5z4YV31214', '_blank');
}

function closeSupportBanner(event) {
  event.stopPropagation();
  const banner = document.getElementById('supportBanner');
  if (banner) {
    banner.style.opacity = '0';
    banner.style.transform = 'translateX(-50%) translateY(20px)';
    banner.style.transition = 'all 0.3s ease';
    setTimeout(() => { banner.style.display = 'none'; }, 300);
  }
  localStorage.setItem('supportBannerDismissed', (Date.now() + 24*60*60*1000).toString());
}

// ============================================================
// 14. DOM READY
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  const dismissed = localStorage.getItem('supportBannerDismissed');
  const banner = document.getElementById('supportBanner');
  if (banner && dismissed && Date.now() < parseInt(dismissed)) {
    banner.style.display = 'none';
  }
});

// ============================================================
// 15. ГЛОБАЛЬНЫЙ ЭКСПОРТ
// ============================================================

window.showSOS = showSOS;
window.startFlow = startFlow;
window.showToast = showToast;
window.goHome = goHome;
window.nextQuestion = nextQuestion;
window.toggleSignal = toggleSignal;
window.toggleFlashlight = toggleFlashlight;
window.sendSOS = sendSOS;
window.selectOption = selectOption;
window.showDetail = showDetail;
window.showResultsBack = showResultsBack;
window.handleSupportBannerClick = handleSupportBannerClick;
window.closeSupportBanner = closeSupportBanner;

console.log('✅ SOS UNIVERSAL core v2.0 загружен');
console.log(`📊 Всего вопросов: ${App.allQuestions.length}, видимых: ${App.visibleQuestions.length}`);