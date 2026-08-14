// === ЛОГИКА ПРИЛОЖЕНИЯ ===

let currentFlow = null;
let currentQuestion = 0;
let answers = {};
let lastResults = [];

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.style.display = "none", 2500);
}

function showToastKey(key) {
  showToast(t(key));
}

// ===== SCREENS =====
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
}

function goHome() {
  currentFlow = null;
  currentQuestion = 0;
  answers = {};
  showScreen("screen-home");
}

// ===== SOS =====
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

// ===== SIGNALS =====
function toggleSignal(el) {
  if (!el) return;
  el.classList.toggle("active");
  const check = el.querySelector(".signal-check");
  if (check) check.textContent = el.classList.contains("active") ? "✓" : "";
}

// ===== FLASHLIGHT =====
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

// ===== QUIZ =====
function startFlow(category) {
  currentFlow = getCategoryData(category);
  if (!currentFlow) {
    showToastKey("toast_develop");
    return;
  }
  currentQuestion = 0;
  answers = {};
  renderQuestion();
  showScreen("screen-questions");
}

function renderQuestion() {
  const q = currentFlow.questions[currentQuestion];
  const progress = ((currentQuestion) / currentFlow.questions.length) * 100;
  const progressBar = document.getElementById("progress");
  if (progressBar) progressBar.style.width = progress + "%";

  const container = document.getElementById("question-container");
  if (!container) return;
  
  const isMulti = q.type === "multi";
  
  let html = '<div class="question-card">';
  
  const numText = t('question_of')
    .replace('{current}', currentQuestion + 1)
    .replace('{total}', currentFlow.questions.length);
  
  html += '<div class="question-num">' + numText + '</div>';
  html += "<h3>" + q.text + "</h3>";
  
  // ============================================================
  // ПОДСКАЗКА ДЛЯ MULTI-ВОПРОСОВ — с inline-стилями
  // ============================================================
  if (isMulti) {
    html += `<p class="question-hint" style="
      margin: 0 0 14px 0;
      padding: 10px 14px;
      background: rgba(59, 130, 246, 0.15);
      border-left: 3px solid #3b82f6;
      border-radius: 0 8px 8px 0;
      color: #60a5fa;
      font-size: 13px;
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
  
  q.options.forEach((opt) => {
    const cls = isMulti ? "option multi" : "option";
    const checked = answers[q.id] && answers[q.id].includes(opt.id) ? 'selected' : '';
    html += `<div class="${cls} ${checked}" data-id="${opt.id}" onclick="selectOption(this, '${q.id}', ${isMulti})">`;
    html += '<div class="check"></div>';
    html += "<span>" + opt.label + "</span>";
    html += "</div>";
  });
  
  html += "</div></div>";
  container.innerHTML = html;

  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    const hasSelected = container.querySelectorAll('.option.selected').length > 0;
    nextBtn.disabled = !hasSelected;
    const isLast = currentQuestion === currentFlow.questions.length - 1;
    nextBtn.textContent = isLast ? t('show_results') : t('next');
  }
}

function selectOption(el, qid, isMulti) {
  if (!el) return;
  
  if (!isMulti) {
    document.querySelectorAll(".option").forEach(o => {
      o.classList.remove("selected");
      const check = o.querySelector(".check");
      if (check) check.textContent = "";
    });
  }
  el.classList.toggle("selected");
  const check = el.querySelector(".check");
  if (check) check.textContent = el.classList.contains("selected") ? "✓" : "";

  const selected = document.querySelectorAll(".option.selected");
  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) nextBtn.disabled = selected.length === 0;
}

function nextQuestion() {
  const q = currentFlow.questions[currentQuestion];
  const selected = document.querySelectorAll(".option.selected");
  const vals = Array.from(selected).map(el => el.dataset.id);
  answers[q.id] = vals;

  if (currentQuestion < currentFlow.questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
}

// ===== RESULTS =====
function showResults() {
  showScreen("screen-results");

  const iconMap = {
    water: "💧", fire: "🔥", shelter: "🏠", 
    food: "🍖", medicine: "🩹", radio: "📻", navigation: "🧭"
  };

  const iconEl = document.getElementById("result-icon");
  if (iconEl) iconEl.textContent = iconMap[currentFlow.category] || "🆘";
  
  const titleEl = document.getElementById("result-title");
  if (titleEl) titleEl.textContent = t('results_title').replace('{title}', currentFlow.title || "Результаты");
  
  const subtitleEl = document.getElementById("result-subtitle");
  if (subtitleEl) subtitleEl.textContent = t('results_subtitle');

  let matched = filterSolutions(currentFlow, answers) || [];
  lastResults = matched;

  const container = document.getElementById("results-container");
  if (!container) return;
  
  let html = "";

  if (matched.length === 0) {
    html = '<div class="result-card" style="border-left-color: var(--accent2);">';
    html += "<h4>⚠️ " + t('no_results') + "</h4>";
    html += '<p style="color:var(--text2);">' + t('no_results_desc') + '</p>';
    html += "</div>";
  } else {
    matched.forEach((sol, i) => {
      const prioBadge = sol.priority === "fast" ? '<span class="badge fast">⚡ ' + t('badge_fast') + '</span>' :
                       sol.priority === "medium" ? '<span class="badge medium">⏱️ ' + t('badge_medium') + '</span>' :
                       '<span class="badge slow">🐢 ' + t('badge_slow') + '</span>';
      const relBadge = sol.reliability === "high" ? '<span class="badge high">✅ ' + t('badge_high') + '</span>' :
                      sol.reliability === "medium" ? '<span class="badge medium-rel">⚠️ ' + t('badge_medium_rel') + '</span>' :
                      '<span class="badge low">❌ ' + t('badge_low') + '</span>';

      const desc = sol.description ? sol.description.substring(0, 120) : "";
      html += '<div class="result-card" onclick="showDetail(\'' + sol.id + '\')">';
      html += prioBadge + " " + relBadge;
      html += "<h4>" + (i+1) + ". " + sol.title + "</h4>";
      html += "<p>" + desc + (desc.length >= 120 ? "..." : "") + "</p>";
      html += '<div class="meta">';
      if (sol.time_estimate) html += "<span>⏱️ " + sol.time_estimate + "</span>";
      if (sol.tags) html += "<span>📍 " + sol.tags.slice(0, 3).join(", ") + "</span>";
      html += "</div>";
      html += "</div>";
    });
  }

  container.innerHTML = html;
}

// ===== DETAIL =====
function showDetail(solId) {
  const sol = getSolutionById(currentFlow, solId);
  if (!sol) {
    showToast("Решение не найдено");
    return;
  }

  showScreen("screen-detail");

  const container = document.getElementById("detail-container");
  if (!container) return;
  
  let html = '<div class="detail-card">';
  html += "<h2>" + sol.title + "</h2>";
  html += '<div class="detail-desc">' + sol.description + "</div>";

  html += '<div class="steps-block"><h4>📋 ' + t('detail_steps') + '</h4>';
  if (sol.steps && sol.steps.length) {
    sol.steps.forEach((step, i) => {
      html += '<div class="step-item"><div class="step-num">' + (i+1) + '</div><span>' + step + "</span></div>";
    });
  }
  html += "</div>";

  html += '<div class="warnings-block"><h4>⚠️ ' + t('detail_warnings') + '</h4>';
  if (sol.warnings && sol.warnings.length) {
    sol.warnings.forEach(warn => {
      html += '<div class="warning-item"><div class="warn-icon">!</div><span>' + warn + "</span></div>";
    });
  }
  html += "</div>";

  html += '<div class="meta" style="margin-top:16px;">';
  if (sol.time_estimate) html += "<span>⏱️ " + sol.time_estimate + "</span>";
  if (sol.yield_estimate) html += "<span>📦 " + sol.yield_estimate + "</span>";
  html += "</div>";
  html += "</div>";

  container.innerHTML = html;
}

function showResultsBack() {
  showScreen("screen-results");
}

// ===== SUPPORT BANNER =====
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

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', function() {
  const dismissed = localStorage.getItem('supportBannerDismissed');
  const banner = document.getElementById('supportBanner');
  if (banner && dismissed && Date.now() < parseInt(dismissed)) {
    banner.style.display = 'none';
  }
});

// ===== GLOBAL EXPORTS =====
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

console.log('✅ Приложение загружено (SOS UNIVERSAL core)');