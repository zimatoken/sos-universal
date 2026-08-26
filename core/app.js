// === SOS UNIVERSAL — ЯДРО ПРИЛОЖЕНИЯ ===
// Версия 2.1 — модульная архитектура с поддержей условий
// Исправления: SOS auto-open, Payments v2.2, vibrate fix

// ============================================================
// 1. ГЛОБАЛЬНОЕ СОСТОЯНИЕ
// ============================================================

const App = {
  flow: null,
  allQuestions: [],
  visibleQuestions: [],
  currentIndex: 0,
  answers: {},
  results: [],
  isComplete: false
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

function isQuestionVisible(question, answers) {
  if (!question.conditions) return true;

  for (const [key, allowedValues] of Object.entries(question.conditions)) {
    const userAnswer = answers[key];
    if (!userAnswer || userAnswer.length === 0) return false;
    const hasMatch = userAnswer.some(val => allowedValues.includes(val));
    if (!hasMatch) return false;
  }
  return true;
}

function getVisibleQuestions(questions, answers) {
  if (!questions || questions.length === 0) return [];
  return questions.filter(q => isQuestionVisible(q, answers));
}

// ============================================================
// 4. ЗАПУСК КВИЗА
// ============================================================

function detectModuleFromPath() {
  const path = window.location.pathname;
  const m = path.match(/modules\/([^/]+)/);
  return m ? m[1] : 'unknown';
}

function startFlow(category) {
  const moduleId = document.body.dataset.module || detectModuleFromPath();
  const lang = window.currentLang || 'ru';

  let flow = null;

  // Попытка 1: Smart Adapter с ЯЗЫКОМ
  if (typeof SOS_GET_QUIZ === 'function') {
    flow = SOS_GET_QUIZ(moduleId, category, lang);
    if (flow) console.log(`✅ Smart Adapter: ${moduleId}/${category} [${lang}]`);
  }

  // Попытка 2: Fallback на русский, если текущий язык не найден
  if (!flow && lang !== 'ru' && typeof SOS_GET_QUIZ === 'function') {
    flow = SOS_GET_QUIZ(moduleId, category, 'ru');
    if (flow) console.log(`✅ Fallback RU: ${moduleId}/${category}`);
  }

  // Попытка 3: Старый fallback getCategoryData
  if (!flow && typeof getCategoryData === 'function') {
    flow = getCategoryData(category);
    if (flow) console.log(`✅ Legacy: ${category}`);
  }

  if (!flow) {
    showToastKey("toast_develop");
    console.error(`❌ Нет данных: module=${moduleId}, category=${category}, lang=${lang}`);
    console.error(`   Проверь: 1) data-module на <body>, 2) имя файла .js, 3) meta.category в данных`);
    return;
  }

  App.flow = flow;
  App.allQuestions = flow.questions || [];
  App.answers = {};
  App.currentIndex = 0;
  App.isComplete = false;

  App.visibleQuestions = getVisibleQuestions(App.allQuestions, App.answers);

  if (App.visibleQuestions.length === 0) {
    showToast("❌ Вопросы отсутствуют в данных");
    console.error(`❌ flow.questions пустой! module=${moduleId}, category=${category}`);
    return;
  }

  renderQuestion();
  showScreen("screen-questions");
}

// ============================================================
// 5. ОТОБРАЖЕНИЕ ВОПРОСА
// ============================================================

function renderQuestion() {
  if (!App.visibleQuestions || App.visibleQuestions.length === 0) {
    const container = document.getElementById("question-container");
    if (container) {
      container.innerHTML = '<p style="color: var(--accent2);">❌ Вопросы не загружены.</p>';
    }
    return;
  }

  if (App.currentIndex >= App.visibleQuestions.length) {
    showResults();
    return;
  }

  const question = App.visibleQuestions[App.currentIndex];
  const total = App.allQuestions.length;
  const current = App.currentIndex + 1;

  const progress = (App.currentIndex / Math.max(total, 1)) * 100;
  const progressBar = document.getElementById("progress");
  if (progressBar) progressBar.style.width = progress + "%";

  const container = document.getElementById("question-container");
  if (!container) return;

  const isMulti = question.type === "multi";
  const selectedValues = App.answers[question.id] || [];

  let html = '<div class="question-card">';

  let numText = 'Вопрос {current} из {total}';
  if (typeof window.t === 'function') {
    const translated = t('question_of', { current: current, total: total });
    if (translated && translated.includes('{')) {
      numText = translated;
    } else if (translated) {
      numText = translated;
    }
  }
  numText = numText.replace(/\{current\}/g, current).replace(/\{total\}/g, total);

  html += `<div class="question-num">${numText}</div>`;
  html += `<h3>${question.text}</h3>`;

  if (isMulti) {
    html += `<p class="question-hint">
      <span>✅</span>
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
    const parent = el.parentElement;
    parent.querySelectorAll(".option").forEach(o => {
      o.classList.remove("selected");
      const check = o.querySelector(".check");
      if (check) check.textContent = "";
    });
  }

  el.classList.toggle("selected");
  const check = el.querySelector(".check");
  if (check) {
    check.textContent = el.classList.contains("selected") ? "✓" : "";
  }

  const selected = document.querySelectorAll(".option.selected");
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) nextBtn.disabled = selected.length === 0;
}

// ============================================================
// 7. ПЕРЕХОД К СЛЕДУЮЩЕМУ ВОПРОСУ
// ============================================================

function nextQuestion() {
  if (!App.visibleQuestions || App.visibleQuestions.length === 0) {
    showToast("❌ Ошибка: нет вопросов");
    return;
  }

  if (App.currentIndex >= App.visibleQuestions.length) {
    showResults();
    return;
  }

  const question = App.visibleQuestions[App.currentIndex];
  const selected = document.querySelectorAll(".option.selected");
  const values = Array.from(selected).map(el => el.dataset.id);
  App.answers[question.id] = values;

  App.currentIndex++;

  const newVisible = getVisibleQuestions(App.allQuestions, App.answers);

  if (newVisible.length !== App.visibleQuestions.length) {
    App.visibleQuestions = newVisible;
    if (App.currentIndex >= App.visibleQuestions.length) {
      showResults();
      return;
    }
  }

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

  const iconEl = document.getElementById("result-icon");
  if (iconEl) iconEl.textContent = flow.meta?.icon || "🆘";

  const titleEl = document.getElementById("result-title");
  if (titleEl) {
    const label = window.t ? t('results_title') : 'Результаты: {title}';
    const title = flow.meta?.title || flow.title || "Результаты";
    titleEl.textContent = label.replace('{title}', title);
  }

  const subtitleEl = document.getElementById("result-subtitle");
  if (subtitleEl) {
    subtitleEl.textContent = window.t ? t('results_subtitle') : 'Подходящие решения для вашей ситуации';
  }

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
    html += `<p class="result-hint">${window.t ? t('click_to_expand') : '👆 Нажмите на решение, чтобы увидеть пошаговую инструкцию'}</p>`;

    matched.forEach((sol, i) => {
      const prioMap = { fast: '⚡ Быстро', medium: '⏱️ Средне', slow: '🐢 Долго' };
      const relMap = { high: '✅ Надёжно', medium: '⚠️ Средне', low: '❌ Низко' };

      const prio = sol.scoring?.priority || sol.priority || 'medium';
      const rel = sol.scoring?.reliability || sol.reliability || 'medium';

      const prioLabel = prioMap[prio] || prio;
      const relLabel = relMap[rel] || rel;

      const desc = sol.description ? sol.description.substring(0, 120) : "";

      html += `<div class="result-card" onclick="showDetail('${sol.id}')">
        <span class="badge prio-${prio}">${prioLabel}</span>
        <span class="badge rel-${rel}">${relLabel}</span>
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

  const prioMap = { fast: '⚡ Быстро', medium: '⏱️ Средне', slow: '🐢 Долго' };
  const relMap = { high: '✅ Надёжно', medium: '⚠️ Средне', low: '❌ Низко' };

  const prio = solution.scoring?.priority || solution.priority || 'medium';
  const rel = solution.scoring?.reliability || solution.reliability || 'medium';

  const prioLabel = prioMap[prio] || prio;
  const relLabel = relMap[rel] || rel;

  let html = `<div class="detail-card">
    <h2>${solution.title}</h2>
    <div class="detail-meta">
      <span class="badge prio-${prio}">${prioLabel}</span>
      <span class="badge rel-${rel}">${relLabel}</span>
      ${solution.time_estimate ? `<span class="badge time">⏱️ ${solution.time_estimate}</span>` : ''}
      ${solution.yield_estimate ? `<span class="badge yield">🎯 ${solution.yield_estimate}</span>` : ''}
    </div>
    <div class="detail-desc">${solution.description}</div>`;

  if (solution.steps && solution.steps.length) {
    html += `<div class="steps-block"><h4><span style="font-size:28px;display:inline-block;margin-right:6px;">📋</span> ${window.t ? t('detail_steps') : 'Шаги'}</h4>`;
    solution.steps.forEach((step, i) => {
      html += `<div class="step-item"><div class="step-num">${i+1}</div><span>${step}</span></div>`;
    });
    html += '</div>';
  }

  if (solution.warnings && solution.warnings.length) {
    html += `<div class="warnings-block"><h4><span style="font-size:28px;display:inline-block;margin-right:6px;">⚠️</span> ${window.t ? t('detail_warnings') : 'Предупреждения'}</h4>`;
    solution.warnings.forEach(warn => {
      html += `<div class="warning-item"><div class="warn-icon">!</div><span>${warn}</span></div>`;
    });
    html += '</div>';
  }

  html += `</div>`;
  container.innerHTML = html;
}

// ============================================================
// 9.5 НАЗАД К РЕЗУЛЬТАТАМ
// ============================================================

function showResultsBack() {
  showScreen("screen-results");
  window.scrollTo(0, 0);
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
// 12. FLASHLIGHT v2.0 — реальный torch + screen fallback + вибрация
// ============================================================

let flashlightOn = false;
let flashInterval = null;
let torchTrack = null;
let torchStream = null;

async function tryRealTorch(on) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return false;
  try {
    if (on) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      const track = stream.getVideoTracks()[0];
      const caps = track.getCapabilities();
      if (caps.torch) {
        await track.applyConstraints({ advanced: [{ torch: true }] });
        torchTrack = track;
        torchStream = stream;
        return true;
      }
      track.stop();
      return false;
    } else {
      if (torchTrack) {
        try { await torchTrack.applyConstraints({ advanced: [{ torch: false }] }); } catch(e) {}
        torchTrack.stop();
        torchTrack = null;
      }
      if (torchStream) {
        torchStream.getTracks().forEach(t => t.stop());
        torchStream = null;
      }
      return true;
    }
  } catch (e) {
    console.log('[Flashlight] Real torch unavailable:', e.message);
    return false;
  }
}

function toggleFlashlight() {
  const btn = document.querySelector(".flashlight-btn");
  if (!btn) return;

  flashlightOn = !flashlightOn;

  if (flashlightOn) {
    btn.classList.add("on");
    btn.textContent = "🔦 Фонарик ВКЛ (SOS-мигание)";

    tryRealTorch(true).then(ok => {
      if (ok) console.log('[Flashlight] Real torch ON');
      else console.log('[Flashlight] Using screen fallback');
    });

    startSOSFlash();
  } else {
    btn.classList.remove("on");
    btn.textContent = "🔦 Фонарик (SOS-мигание)";

    tryRealTorch(false);
    stopSOSFlash();
  }
}

function startSOSFlash() {
  if (flashInterval) clearInterval(flashInterval);

  const pattern = [200,200,200, 200,200,600, 200,600,200, 600,200,200, 200,200,200, 1000];
  let i = 0;

  flashInterval = setInterval(() => {
    if (!flashlightOn) {
      clearInterval(flashInterval);
      flashInterval = null;
      document.body.classList.remove('screen-flash');
      return;
    }

    const duration = pattern[i % pattern.length];
    const isShort = duration < 500;

    if (navigator.vibrate && isShort) {
      navigator.vibrate(duration);
    } else if (navigator.vibrate && !isShort) {
      navigator.vibrate([duration, 200]);
    }

    if (isShort) {
      document.body.classList.add('screen-flash');
      setTimeout(() => document.body.classList.remove('screen-flash'), duration);
    }

    i++;
  }, 250);
}

function stopSOSFlash() {
  if (flashInterval) {
    clearInterval(flashInterval);
    flashInterval = null;
  }
  if (navigator.vibrate) navigator.vibrate([]);
  document.body.classList.remove('screen-flash');
  tryRealTorch(false);
}

// ============================================================
// 13. ПЛАТЕЖИ v2.2 — 6 способов поддержки
// ============================================================

function copySBP() {
  const phone = '+79639424331';
  copyToClipboard(phone, '📋 Номер скопирован. Откройте банк → СБП → перевод');
}

function copyCrypto(type) {
  const addresses = {
    evm: '0x428B1872339a628213d8560C1C2aB26146499dcA',
    tron: 'TYBCg6Ev5uPjAopKxhritoqSuDwVHV5LbT',
    bitcoin: 'bc1qw0lfv4hwvzk9qhax2xp0n4jm94lce4mkn8pwjl',
    solana: '4rPx8Vtk5dcBe8CpCb9ZgaGf9HwW9cf5FesuspijLfCj'
  };
  const address = addresses[type];
  if (!address) return;
  copyToClipboard(address, '📋 Адрес ' + type.toUpperCase() + ' скопирован');
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(successMsg))
      .catch(() => fallbackCopy(text, successMsg));
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, msg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); showToast(msg); }
  catch (e) { showToast('Реквизиты: ' + text); }
  document.body.removeChild(ta);
}

function trackSupport(method) {
  console.log('[Support] Клик:', method);
}

// ============================================================
// 14. DOM READY — авто-открытие SOS + поддержка
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
  // Авто-открытие SOS при переходе с главной
  if (localStorage.getItem('sos_auto_open') === '1') {
    localStorage.removeItem('sos_auto_open');
    setTimeout(() => {
      if (typeof showSOS === 'function') showSOS();
    }, 400);
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
window.copySBP = copySBP;
window.copyCrypto = copyCrypto;
window.copyToClipboard = copyToClipboard;
window.fallbackCopy = fallbackCopy;
window.trackSupport = trackSupport;

console.log('✅ SOS UNIVERSAL core v2.1 загружен');
console.log(`📊 Всего вопросов: ${App.allQuestions.length}, видимых: ${App.visibleQuestions.length}`);
