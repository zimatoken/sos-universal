// === ЛОГИКА ПРИЛОЖЕНИЯ ===
// SOS UNIVERSAL Core App Logic

let currentFlow = null;
let currentQuestion = 0;
let answers = {};
let lastResults = [];

// Translation function - merges core and module locales
function t(key) {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'ru';
  const coreTexts = typeof LOCALES !== 'undefined' ? (LOCALES[lang] || LOCALES.ru) : {};
  const moduleTexts = typeof SURVIVAL_LOCALES !== 'undefined' ? (SURVIVAL_LOCALES[lang] || SURVIVAL_LOCALES.ru) : {};
  
  const texts = { ...coreTexts, ...moduleTexts };
  return texts[key] || key;
}

function showToast(msg) {
  const t = document.getElementById("toast");
  if (t) {
    t.textContent = msg;
    t.style.display = "block";
    setTimeout(() => t.style.display = "none", 2500);
  }
}

// Добавь функцию для переведённых тостов
function showToastKey(key) {
  showToast(t(key));
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const screen = document.getElementById(id);
  if (screen) {
    screen.classList.add("active");
  }
}

function goHome() {
  currentFlow = null;
  currentQuestion = 0;
  answers = {};
  showScreen("screen-home");
}

function showSOS() {
  showScreen("screen-sos");
  updateGPS();
  loadContactData();
  showToast("Координаты сохранены в кэш");
}

function loadContactData() {
  const phone = localStorage.getItem('sos_contact_phone');
  const name = localStorage.getItem('sos_contact_name');
  if (phone) document.getElementById('sos-phone').value = phone;
  if (name) document.getElementById('sos-name').value = name;
}

function saveContactData() {
  const phone = document.getElementById('sos-phone').value.trim();
  const name = document.getElementById('sos-name').value.trim();
  if (phone) localStorage.setItem('sos_contact_phone', phone);
  if (name) localStorage.setItem('sos_contact_name', name);
}

function sendSOS() {
  const phone = document.getElementById('sos-phone').value.trim();
  const name = document.getElementById('sos-name').value.trim();
  
  if (!phone) {
    showToast("Введите номер телефона!");
    return;
  }
  
  saveContactData();
  
  const coordsEl = document.getElementById("gps-coords");
  const coords = coordsEl.textContent;
  const now = new Date();
  const timeStr = now.getHours() + ":" + now.getMinutes().toString().padStart(2, "0");
  
  const message = `🆘 SOS! Я в опасности!
📍 Координаты: ${coords}
📱 Карта: https://maps.google.com/?q=${coords.replace(/° N, /g, ',').replace('° E', '')}
⏰ Время: ${timeStr}
${name ? '👤 Имя: ' + name : ''}
Пожалуйста, вызовите помощь!`;
  
  const smsUrl = `sms:${phone}?body=${encodeURIComponent(message)}`;
  
  window.location.href = smsUrl;
  
  setTimeout(() => {
    navigator.clipboard.writeText(message).then(() => {
      showToast("Сообщение скопировано в буфер обмена");
    }).catch(() => {
      showToast("SMS открыт. Если не работает, скопируйте координаты вручную.");
    });
  }, 1000);
}

function updateGPS() {
  const coordsEl = document.getElementById("gps-coords");
  const timeEl = document.getElementById("gps-time");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude.toFixed(4);
      const lon = pos.coords.longitude.toFixed(4);
      coordsEl.textContent = lat + "° N, " + lon + "° E";
      const now = new Date();
      timeEl.textContent = "Обновлено: " + now.getHours() + ":" + now.getMinutes().toString().padStart(2, "0");
    }, () => {
      coordsEl.textContent = "GPS недоступен — координаты не определены";
      timeEl.textContent = "Используйте компас и ориентиры";
    });
  } else {
    coordsEl.textContent = "GPS не поддерживается устройством";
  }
}

function toggleSignal(el) {
  el.classList.toggle("active");
  const check = el.querySelector(".signal-check");
  check.textContent = el.classList.contains("active") ? "✓" : "";
}

let flashlightOn = false;
function toggleFlashlight() {
  const btn = document.querySelector(".flashlight-btn");
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

let flashInterval;
function startSOSFlash() {
  const pattern = [200,200,200,200,200,200,600,200,600,200,600,200,200,200,200,200,200,200,1000];
  let i = 0;

  function flash() {
    if (!flashlightOn) return;
    const duration = pattern[i % pattern.length];
    const isOn = i % 2 === 0 && duration < 500;

    if (navigator.vibrate) {
      if (isOn) navigator.vibrate(duration);
    }

    i++;
    flashInterval = setTimeout(flash, duration);
  }
  flash();
}

function stopSOSFlash() {
  clearTimeout(flashInterval);
  if (navigator.vibrate) navigator.vibrate(0);
}

function startFlow(category) {
  currentFlow = getCategoryData(category);
  if (!currentFlow) {
    showToast("Раздел в разработке");
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
  const progressEl = document.getElementById("progress");
  const progressFill = document.getElementById("progress-fill");
  if (progressEl) {
    progressEl.style.width = progress + "%";
  }
  if (progressFill) {
    progressFill.style.width = progress + "%";
  }

  const container = document.getElementById("question-container");
  if (!container) {
    console.error("❌ Question container not found");
    return;
  }
  
  let html = '<div class="question-card">';
  
  // Используем перевод для номера вопроса
  const numText = t('question_of')
    .replace('{current}', currentQuestion + 1)
    .replace('{total}', currentFlow.questions.length);
  
  html += '<div class="question-num">' + numText + '</div>';
  html += "<h3>" + q.text + "</h3>";

  q.options.forEach((opt) => {
    const isMulti = q.type === "multi";
    const cls = isMulti ? "option multi" : "option";
    // ИСПРАВЛЕНО: правильная экранизация кавычек
    html += '<div class="' + cls + '" data-id="' + opt.id + '" onclick="selectOption(this, \'' + q.id + '\', ' + isMulti + ')">';
    html += '<div class="check"></div>';
    html += "<span>" + opt.label + "</span>";
    html += "</div>";
  });
  html += "</div>";
  container.innerHTML = html;

  const nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestion === currentFlow.questions.length - 1 ? t('show_results') : t('next');
  }
}

function selectOption(el, qid, isMulti) {
  if (!isMulti) {
    document.querySelectorAll(".option").forEach(o => {
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
  if (nextBtn) {
    nextBtn.disabled = selected.length === 0;
  }
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

function showResults() {
  showScreen("screen-results");

  const iconMap = {
    water: "💧", fire: "🔥", shelter: "🏠", 
    food: "🍖", medicine: "🩹", radio: "📻", navigation: "🧭"
  };

  const resultIcon = document.getElementById("result-icon");
  if (resultIcon) {
    resultIcon.textContent = iconMap[currentFlow.category] || "🆘";
  }
  
  // Используем перевод
  const resultTitle = document.getElementById("result-title");
  if (resultTitle) {
    resultTitle.textContent = t('results_title').replace('{title}', currentFlow.title);
  }
  
  const resultSubtitle = document.getElementById("result-subtitle");
  if (resultSubtitle) {
    resultSubtitle.textContent = t('results_subtitle');
  }

  // Защита от ошибок — всегда возвращаем массив
  let matched = filterSolutions(currentFlow, answers) || [];
  lastResults = matched;

  const container = document.getElementById("results-container");
  if (!container) {
    console.error("❌ Results container not found");
    return;
  }
  
  let html = "";

  if (matched.length === 0) {
    html = '<div class="result-card" style="border-left-color: var(--accent2);">';
    html += "<h4>⚠️ Нет точных решений</h4>";
    html += "<p>" + t('no_results_desc') + "</p>";
    html += "</div>";
  } else {
    matched.forEach((sol, i) => {
      const prioBadge = sol.priority === "fast" ? '<span class="badge fast">' + t('badge_fast') + '</span>' :
                       sol.priority === "medium" ? '<span class="badge medium">' + t('badge_medium') + '</span>' :
                       '<span class="badge slow">' + t('badge_slow') + '</span>';
      const relBadge = sol.reliability === "high" ? '<span class="badge high">' + t('badge_high') + '</span>' :
                      sol.reliability === "medium" ? '<span class="badge medium-rel">' + t('badge_medium_rel') + '</span>' :
                      '<span class="badge low">' + t('badge_low') + '</span>';

      html += '<div class="result-card" onclick="showDetails(' + i + ')">';
      html += prioBadge + " " + relBadge;
      html += "<h4>" + (i+1) + ". " + sol.title + "</h4>";
      html += "<p>" + sol.description.substring(0, 120) + "...</p>";
      html += '<div class="meta">';
      html += "<span>⏱️ " + sol.time_estimate + "</span>";
      html += "<span>📍 " + sol.tags.slice(0, 3).join(", ") + "</span>";
      html += "</div>";
      html += "</div>";
    });
  }

  container.innerHTML = html;
}

function showDetails(index) {
  const sol = lastResults[index];
  if (!sol) {
    showToast("Решение не найдено");
    return;
  }

  showScreen("screen-details");

  const container = document.getElementById("details-container");
  if (!container) {
    console.error("❌ Details container not found");
    return;
  }
  
  let html = '<div class="detail-card">';
  html += "<h2>" + sol.title + "</h2>";
  html += '<div class="detail-desc">' + sol.description + "</div>";

  html += '<div class="detail-section"><h3>' + t('detail_steps') + '</h3>';
  if (sol.steps && sol.steps.length > 0) {
    html += '<ul>';
    sol.steps.forEach((step) => {
      html += '<li>' + step + "</li>";
    });
    html += '</ul>';
  }
  html += "</div>";

  html += '<div class="detail-section"><h3>' + t('detail_warnings') + '</h3>';
  if (sol.warnings && sol.warnings.length > 0) {
    html += '<ul>';
    sol.warnings.forEach(warn => {
      html += '<li>' + warn + "</li>";
    });
    html += '</ul>';
  }
  html += "</div>";

  html += "</div>";
  container.innerHTML = html;
}

function showResultsBack() {
  showScreen("screen-results");
}

// === SUPPORT BANNER FUNCTIONS ===

function handleSupportBannerClick(event) {
  // Prevent triggering when clicking the close button
  if (event.target.classList.contains('support-banner-close')) {
    return;
  }
  
  // Open donation link (placeholder for now)
  window.open('https://www.tinkoff.ru/rm/zima.token1/5z4YV31214', '_blank');
}

function closeSupportBanner(event) {
  event.stopPropagation(); // Prevent banner click handler from firing
  
  const banner = document.getElementById('supportBanner');
  if (banner) {
    banner.style.opacity = '0';
    banner.style.transform = 'translateX(-50%) translateY(20px)';
    banner.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
      banner.style.display = 'none';
    }, 300);
  }
  
  // Save dismissal to localStorage (optional - banner won't show again for 24 hours)
  const dismissedUntil = Date.now() + (24 * 60 * 60 * 1000); // 24 hours
  localStorage.setItem('supportBannerDismissed', dismissedUntil.toString());
}

// Check if banner should be shown on page load
document.addEventListener('DOMContentLoaded', function() {
  const dismissedUntil = localStorage.getItem('supportBannerDismissed');
  const banner = document.getElementById('supportBanner');
  
  if (banner && dismissedUntil) {
    if (Date.now() < parseInt(dismissedUntil)) {
      banner.style.display = 'none';
    }
  }
});

function backToResults() {
  showScreen("screen-results");
}

function restart() {
  goHome();
}

// ===== ЭКСПОРТ =====
window.showToast = showToast;
window.showToastKey = showToastKey;
window.showScreen = showScreen;
window.goHome = goHome;
window.showSOS = showSOS;
window.startFlow = startFlow;
window.renderQuestion = renderQuestion;
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.showResults = showResults;
window.showDetails = showDetails;
window.backToResults = backToResults;
window.restart = restart;
window.sendSOS = sendSOS;
window.toggleSignal = toggleSignal;
window.toggleFlashlight = toggleFlashlight;
window.handleSupportBannerClick = handleSupportBannerClick;
window.closeSupportBanner = closeSupportBanner;
window.t = t;

console.log('✅ Логика приложения загружена (SOS UNIVERSAL core)');