const CACHE_NAME = 'sos-universal-v1-OFFLINE';
const BASE_PATH = '/sos-universal/';

// Критичные файлы — index.html, манифест, CSS, иконки
const CORE_FILES = [
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'css/styles.css',
  BASE_PATH + 'assets/icons/icon-192.png',
  BASE_PATH + 'assets/icons/icon-512.png'
];

// Все JS файлы — критично для офлайн работы
const JS_FILES = [
  BASE_PATH + 'core/locales.js',
  BASE_PATH + 'core/theme.js',
  BASE_PATH + 'core/voice.js',
  BASE_PATH + 'core/engine.js',
  BASE_PATH + 'core/app.js',
  // Survival данные (русские)
  BASE_PATH + 'modules/survival/data/water.js',
  BASE_PATH + 'modules/survival/data/fire.js',
  BASE_PATH + 'modules/survival/data/shelter.js',
  BASE_PATH + 'modules/survival/data/food.js',
  BASE_PATH + 'modules/survival/data/medicine.js',
  BASE_PATH + 'modules/survival/data/navigation.js',
  BASE_PATH + 'modules/survival/data/radio.js',
  BASE_PATH + 'modules/survival/data/kit.js',
  // Survival данные (английские)
  BASE_PATH + 'modules/survival/data/en/water-en.js',
  BASE_PATH + 'modules/survival/data/en/fire-en.js',
  BASE_PATH + 'modules/survival/data/en/shelter-en.js',
  BASE_PATH + 'modules/survival/data/en/food-en.js',
  BASE_PATH + 'modules/survival/data/en/medicine-en.js',
  BASE_PATH + 'modules/survival/data/en/navigation-en.js',
  BASE_PATH + 'modules/survival/data/en/radio-en.js',
  BASE_PATH + 'modules/survival/data/en/kit-en.js',
  // Auto данные (русские)
  BASE_PATH + 'modules/auto/data/wont-start.js',
  BASE_PATH + 'modules/auto/data/overheating.js',
  BASE_PATH + 'modules/auto/data/flat-tire.js',
  BASE_PATH + 'modules/auto/data/brakes.js',
  BASE_PATH + 'modules/auto/data/battery.js',
  BASE_PATH + 'modules/auto/data/leak.js',
  BASE_PATH + 'modules/auto/data/dtp.js',
  // Auto данные (английские)
  BASE_PATH + 'modules/auto/data/en/wont-start-en.js',
  BASE_PATH + 'modules/auto/data/en/overheating-en.js',
  BASE_PATH + 'modules/auto/data/en/flat-tire-en.js',
  BASE_PATH + 'modules/auto/data/en/brakes-en.js',
  BASE_PATH + 'modules/auto/data/en/battery-en.js',
  BASE_PATH + 'modules/auto/data/en/leak-en.js',
  BASE_PATH + 'modules/auto/data/en/dtp-en.js',
  // Lawyer данные (русские)
  BASE_PATH + 'modules/lawyer/data/dtp.js',
  BASE_PATH + 'modules/lawyer/data/labor.js',
  BASE_PATH + 'modules/lawyer/data/housing.js',
  BASE_PATH + 'modules/lawyer/data/inheritance.js',
  BASE_PATH + 'modules/lawyer/data/debts.js',
  BASE_PATH + 'modules/lawyer/data/divorce.js',
  BASE_PATH + 'modules/lawyer/data/consumer.js',
  // Lawyer данные (английские)
  BASE_PATH + 'modules/lawyer/data/en/dtp-en.js',
  BASE_PATH + 'modules/lawyer/data/en/labor-en.js',
  BASE_PATH + 'modules/lawyer/data/en/housing-en.js',
  BASE_PATH + 'modules/lawyer/data/en/inheritance-en.js',
  BASE_PATH + 'modules/lawyer/data/en/debts-en.js',
  BASE_PATH + 'modules/lawyer/data/en/divorce-en.js',
  BASE_PATH + 'modules/lawyer/data/en/consumer-en.js',
  // Home данные (русские)
  BASE_PATH + 'modules/home/data/plumbing.js',
  // Home данные (английские)
  BASE_PATH + 'modules/home/data/en/plumbing-en.js'
];

// Установка — кэшируем ВСЕ файлы
self.addEventListener('install', event => {
  console.log('[SW v1] Установка...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW v1] Кэшируем ядро...');
        return cache.addAll(CORE_FILES);
      })
      .then(() => {
        console.log('[SW v1] Ядро закэшировано, кэшируем JS файлы...');
        return caches.open(CACHE_NAME).then(cache => {
          return Promise.all(
            JS_FILES.map(url => 
              cache.add(url).catch(err => {
                console.warn('[SW v1] Не удалось кэшировать:', url, err);
              })
            )
          );
        });
      })
      .then(() => {
        console.log('[SW v1] Установка завершена');
        return self.skipWaiting();
      })
  );
});

// Активация — удаляем старые кэши
self.addEventListener('activate', event => {
  console.log('[SW v1] Активация...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW v1] Удаляем старый кэш:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW v1] Активирован');
      return self.clients.claim();
    })
  );
});

// Fetch — Cache First для офлайн работы
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Навигация (открытие страницы) — Cache First для офлайн работы
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(BASE_PATH + 'index.html')
        .then(response => {
          if (response) {
            console.log('[SW v1] Берём index.html из кэша');
            return response;
          }
          console.log('[SW v1] Кэш пуст, загружаем из сети');
          return fetch(event.request).then(response => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(BASE_PATH + 'index.html', clone);
              });
            }
            return response;
          });
        })
        .catch(() => {
          console.error('[SW v1] Ошибка загрузки index.html');
          return caches.match(BASE_PATH + '404.html');
        })
    );
    return;
  }
  
  // Для остальных запросов — Cache First
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(response => {
        // Кэшируем новые ответы
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(err => {
        console.warn('[SW v1] Ошибка загрузки:', event.request.url);
        // Для изображений возвращаем пустой ответ
        if (event.request.destination === 'image') {
          return new Response('', { status: 404 });
        }
      });
    })
  );
});

console.log('[SW v1] Service Worker загружен - Cache First стратегия');