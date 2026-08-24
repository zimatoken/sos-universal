// core/voice.js
// ============================================================
// ГОЛОСОВОЙ ВВОД v2.0 — Распознавание команд голосом
// Поддержка ВСЕХ модулей и категорий SOS UNIVERSAL
// ============================================================

// ============================================================
// КОНФИГУРАЦИЯ ГОЛОСОВЫХ КОМАНД
// ============================================================

const VOICE_COMMANDS = {
  ru: {
    // Модули
    modules: {
      'выживание': 'survival',
      'авто': 'auto',
      'юрист': 'lawyer',
      'дом': 'home',
      'дети': 'children',
      'животные': 'pets',
      'путешествия': 'travel',
      'дроны': 'drone',
      'энергия': 'energy'
    },
    // Категории (по модулям)
    categories: {
      // SURVIVAL
      'вода': 'water',
      'огонь': 'fire',
      'укрытие': 'shelter',
      'еда': 'food',
      'медицина': 'medicine',
      'навигация': 'navigation',
      'связь': 'radio',
      'чемоданчик': 'kit',
      
      // AUTO
      'не заводится': 'wont_start',
      'перегрев': 'overheating',
      'прокол шины': 'flat_tire',
      'шина': 'flat_tire',
      'тормоза': 'brakes',
      'батарея': 'battery',
      'села батарея': 'battery',
      'утечка': 'leak',
      'дтп': 'dtp',
      'авария': 'dtp',
      
      // LAWYER
      'юрист дтп': 'dtp',
      'трудовые': 'labor',
      'работа': 'labor',
      'жильё': 'housing',
      'квартира': 'housing',
      'наследство': 'inheritance',
      'долги': 'debts',
      'коллекторы': 'debts',
      'развод': 'divorce',
      'алименты': 'divorce',
      'потребители': 'consumer',
      
      // HOME
      'сантехника': 'plumbing',
      'вода дома': 'plumbing',
      'электричество': 'electricity',
      'пожар': 'fire',
      'газ': 'gas',
      'замок': 'lock',
      'дверь': 'lock',
      'отопление': 'heating',
      'стихия': 'natural',
      
      // CHILDREN
      'безопасность': 'safety',
      'здоровье': 'health',
      'травма': 'injury',
      'потеря': 'lost',
      'буллинг': 'bullying',
      'интернет': 'internet',
      'школа': 'school',
      
      // PETS
      'поведение': 'behavior',
      'агрессия': 'behavior',
      'уход': 'care',
      'чп животные': 'emergency',
      'первая помощь': 'firstaid',
      'здоровье питомца': 'health',
      'пропажа': 'lost',
      'отравление': 'poison',
      
      // TRAVEL
      'документы': 'documents',
      'деньги': 'money',
      'здоровье в пути': 'health',
      'перелёты': 'flight',
      'отели': 'hotel',
      'кража': 'theft',
      'потеря вещей': 'lost',
      
      // DRONE
      'обнаружение': 'detect',
      'идентификация': 'identify',
      'укрытие дрон': 'shelter',
      'связь дрон': 'comms',
      'эвакуация': 'evac',
      'первая помощь дрон': 'firstaid',
      'подготовка': 'prep',
      
      // ENERGY
      'зарядка': 'phone_charge',
      'телефон': 'phone_charge',
      'батарейки': 'battery_diy',
      'солнце': 'solar',
      'солнечная': 'solar',
      'динамо': 'hand_crank',
      'ручная': 'hand_crank',
      'распиновка': 'cable_pinout',
      'кабель': 'cable_pinout',
      'пауэрбанк': 'power_bank',
      'свет': 'emergency_light'
    },
    // Команды управления
    controls: {
      'назад': 'back',
      'главная': 'home',
      'домой': 'home',
      'далее': 'next',
      'вперед': 'next',
      'результаты': 'results',
      'показать результаты': 'results'
    },
    // SOS
    sos: ['sos', 'помощь', 'спасите', 'опасность']
  },
  
  en: {
    // Modules
    modules: {
      'survival': 'survival',
      'auto': 'auto',
      'lawyer': 'lawyer',
      'home': 'home',
      'children': 'children',
      'pets': 'pets',
      'travel': 'travel',
      'drone': 'drone',
      'energy': 'energy'
    },
    // Categories
    categories: {
      // SURVIVAL
      'water': 'water',
      'fire': 'fire',
      'shelter': 'shelter',
      'food': 'food',
      'medicine': 'medicine',
      'navigation': 'navigation',
      'radio': 'radio',
      'kit': 'kit',
      
      // AUTO
      'won\'t start': 'wont_start',
      'overheating': 'overheating',
      'flat tire': 'flat_tire',
      'tire': 'flat_tire',
      'brakes': 'brakes',
      'battery': 'battery',
      'dead battery': 'battery',
      'leak': 'leak',
      'accident': 'dtp',
      
      // LAWYER
      'lawyer accident': 'dtp',
      'labor': 'labor',
      'work': 'labor',
      'housing': 'housing',
      'apartment': 'housing',
      'inheritance': 'inheritance',
      'debts': 'debts',
      'collectors': 'debts',
      'divorce': 'divorce',
      'alimony': 'divorce',
      'consumer': 'consumer',
      
      // HOME
      'plumbing': 'plumbing',
      'water home': 'plumbing',
      'electricity': 'electricity',
      'fire home': 'fire',
      'gas': 'gas',
      'lock': 'lock',
      'door': 'lock',
      'heating': 'heating',
      'natural': 'natural',
      
      // CHILDREN
      'safety': 'safety',
      'health child': 'health',
      'injury': 'injury',
      'lost child': 'lost',
      'bullying': 'bullying',
      'internet': 'internet',
      'school': 'school',
      
      // PETS
      'behavior': 'behavior',
      'aggression': 'behavior',
      'care': 'care',
      'pet emergency': 'emergency',
      'first aid': 'firstaid',
      'pet health': 'health',
      'lost pet': 'lost',
      'poison': 'poison',
      
      // TRAVEL
      'documents': 'documents',
      'money': 'money',
      'travel health': 'health',
      'flight': 'flight',
      'hotel': 'hotel',
      'theft': 'theft',
      'lost items': 'lost',
      
      // DRONE
      'detect': 'detect',
      'identify': 'identify',
      'drone shelter': 'shelter',
      'drone comms': 'comms',
      'evacuation': 'evac',
      'drone first aid': 'firstaid',
      'preparation': 'prep',
      
      // ENERGY
      'phone charge': 'phone_charge',
      'charging': 'phone_charge',
      'batteries': 'battery_diy',
      'solar': 'solar',
      'sun': 'solar',
      'hand crank': 'hand_crank',
      'crank': 'hand_crank',
      'pinout': 'cable_pinout',
      'cable': 'cable_pinout',
      'power bank': 'power_bank',
      'light': 'emergency_light'
    },
    // Controls
    controls: {
      'back': 'back',
      'home': 'home',
      'next': 'next',
      'results': 'results',
      'show results': 'results'
    },
    // SOS
    sos: ['sos', 'help', 'save', 'danger', 'emergency']
  }
};

// ============================================================
// ОСНОВНАЯ ФУНКЦИЯ
// ============================================================

function startVoiceInput() {
  // Проверка поддержки
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    showToastKey('toast_voice_unsupported');
    return;
  }
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = getCurrentLang() === 'ru' ? 'ru-RU' : 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;
  
  // Обработка результата
  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript.toLowerCase().trim();
    console.log('🎤 Распознано:', text);
    
    // Получаем язык
    const lang = getCurrentLang();
    const commands = VOICE_COMMANDS[lang] || VOICE_COMMANDS.ru;
    
    // --- 1. Проверка на SOS ---
    if (commands.sos && commands.sos.some(word => text.includes(word))) {
      if (typeof showSOS === 'function') {
        showSOS();
        showToast('🆘 SOS активирован!');
      } else {
        showToast('🆘 Откройте SOS в приложении');
      }
      return;
    }
    
    // --- 2. Проверка на команды управления ---
    if (commands.controls) {
      for (const [phrase, action] of Object.entries(commands.controls)) {
        if (text.includes(phrase)) {
          if (action === 'back' && typeof goBack === 'function') {
            goBack();
            showToast('⬅️ Назад');
          } else if (action === 'home' && typeof goHome === 'function') {
            goHome();
            showToast('🏠 Главная');
          } else if (action === 'next' && typeof nextQuestion === 'function') {
            nextQuestion();
            showToast('➡️ Далее');
          } else if (action === 'results' && typeof showResults === 'function') {
            showResults();
            showToast('📊 Результаты');
          }
          return;
        }
      }
    }
    
    // --- 3. Проверка на модули ---
    if (commands.modules) {
      for (const [phrase, moduleId] of Object.entries(commands.modules)) {
        if (text.includes(phrase)) {
          // Переход на модуль
          const url = `./modules/${moduleId}/index.html`;
          window.location.href = url;
          showToast(`📱 Переход в ${phrase}`);
          return;
        }
      }
    }
    
    // --- 4. Проверка на категории ---
    if (commands.categories) {
      // Сначала проверяем точное совпадение по фразе
      for (const [phrase, categoryId] of Object.entries(commands.categories)) {
        if (text.includes(phrase)) {
          // Если есть startFlow — запускаем квиз
          if (typeof startFlow === 'function') {
            startFlow(categoryId);
            showToast(`🎯 ${phrase}`);
          } else {
            showToast(`❌ Откройте модуль для категории "${phrase}"`);
          }
          return;
        }
      }
    }
    
    // --- 5. Не распознано ---
    showToast(`❌ Не понял: "${text}"`);
  };
  
  // Обработка ошибок
  recognition.onerror = function(event) {
    console.warn('🎤 Ошибка:', event.error);
    const errorMessages = {
      'not-allowed': '❌ Разрешите доступ к микрофону',
      'no-speech': '🎤 Ничего не сказано',
      'audio-capture': '🎤 Микрофон не найден',
      'network': '🌐 Ошибка сети',
      'service-not-allowed': '❌ Сервис недоступен'
    };
    showToast(errorMessages[event.error] || `🎤 Ошибка: ${event.error}`);
  };
  
  // Запуск
  recognition.start();
  showToast('🎤 Слушаю...');
}

// ============================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================================

function getCurrentLang() {
  return window.currentLang || localStorage.getItem('language') || 'ru';
}

// ============================================================
// ЭКСПОРТ
// ============================================================

window.startVoiceInput = startVoiceInput;
window.VOICE_COMMANDS = VOICE_COMMANDS;

console.log('✅ Голосовой ввод v2.0 загружен');
console.log(`🌍 Поддерживаемые языки: ru, en`);
console.log(`📋 Команд: ${Object.keys(VOICE_COMMANDS.ru.categories).length + Object.keys(VOICE_COMMANDS.en.categories).length}`);