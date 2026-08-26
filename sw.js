// ============================================================
// sw.js — Service Worker для SOS UNIVERSAL v4.2
// ============================================================
// Стратегия: Cache First с обновлением в фоне (Stale-While-Revalidate)
// Исправления: navigate fallback, addAll → individual cache, clone fix

const CACHE_NAME = 'sos-universal-v4.2-OFFLINE';
const BASE_PATH = '/sos-universal/';

// ============================================================
// КРИТИЧЕСКИЕ ФАЙЛЫ
// ============================================================
const CORE_FILES = [
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + '404.html',
  BASE_PATH + 'css/styles.css',
  BASE_PATH + 'css/modules/survival.css',
  BASE_PATH + 'css/modules/auto.css',
  BASE_PATH + 'css/modules/lawyer.css',
  BASE_PATH + 'css/modules/home.css',
  BASE_PATH + 'css/modules/children.css',
  BASE_PATH + 'css/modules/pets.css',
  BASE_PATH + 'css/modules/travel.css',
  BASE_PATH + 'css/modules/drone.css',
  BASE_PATH + 'css/modules/energy.css',
  BASE_PATH + 'assets/icons/icon-192.png',
  BASE_PATH + 'assets/icons/icon-512.png'
];

// ============================================================
// ВСЕ JS ФАЙЛЫ
// ============================================================
const JS_FILES = [
  BASE_PATH + 'core/locales.js',
  BASE_PATH + 'core/registry.js',
  BASE_PATH + 'core/theme.js',
  BASE_PATH + 'core/voice.js',
  BASE_PATH + 'core/engine.js',
  BASE_PATH + 'core/app.js',

  BASE_PATH + 'modules/survival/data/water.js',
  BASE_PATH + 'modules/survival/data/fire.js',
  BASE_PATH + 'modules/survival/data/shelter.js',
  BASE_PATH + 'modules/survival/data/food.js',
  BASE_PATH + 'modules/survival/data/medicine.js',
  BASE_PATH + 'modules/survival/data/navigation.js',
  BASE_PATH + 'modules/survival/data/radio.js',
  BASE_PATH + 'modules/survival/data/kit.js',
  BASE_PATH + 'modules/survival/data/en/water-en.js',
  BASE_PATH + 'modules/survival/data/en/fire-en.js',
  BASE_PATH + 'modules/survival/data/en/shelter-en.js',
  BASE_PATH + 'modules/survival/data/en/food-en.js',
  BASE_PATH + 'modules/survival/data/en/medicine-en.js',
  BASE_PATH + 'modules/survival/data/en/navigation-en.js',
  BASE_PATH + 'modules/survival/data/en/radio-en.js',
  BASE_PATH + 'modules/survival/data/en/kit-en.js',

  BASE_PATH + 'modules/auto/data/wont_start.js',
  BASE_PATH + 'modules/auto/data/overheating.js',
  BASE_PATH + 'modules/auto/data/flat_tire.js',
  BASE_PATH + 'modules/auto/data/brakes.js',
  BASE_PATH + 'modules/auto/data/battery.js',
  BASE_PATH + 'modules/auto/data/leak.js',
  BASE_PATH + 'modules/auto/data/dtp.js',
  BASE_PATH + 'modules/auto/data/en/wont_start-en.js',
  BASE_PATH + 'modules/auto/data/en/overheating-en.js',
  BASE_PATH + 'modules/auto/data/en/flat_tire-en.js',
  BASE_PATH + 'modules/auto/data/en/brakes-en.js',
  BASE_PATH + 'modules/auto/data/en/battery-en.js',
  BASE_PATH + 'modules/auto/data/en/leak-en.js',
  BASE_PATH + 'modules/auto/data/en/dtp-en.js',

  BASE_PATH + 'modules/lawyer/data/dtp.js',
  BASE_PATH + 'modules/lawyer/data/labor.js',
  BASE_PATH + 'modules/lawyer/data/housing.js',
  BASE_PATH + 'modules/lawyer/data/inheritance.js',
  BASE_PATH + 'modules/lawyer/data/debts.js',
  BASE_PATH + 'modules/lawyer/data/divorce.js',
  BASE_PATH + 'modules/lawyer/data/consumer.js',
  BASE_PATH + 'modules/lawyer/data/en/dtp-en.js',
  BASE_PATH + 'modules/lawyer/data/en/labor-en.js',
  BASE_PATH + 'modules/lawyer/data/en/housing-en.js',
  BASE_PATH + 'modules/lawyer/data/en/inheritance-en.js',
  BASE_PATH + 'modules/lawyer/data/en/debts-en.js',
  BASE_PATH + 'modules/lawyer/data/en/divorce-en.js',
  BASE_PATH + 'modules/lawyer/data/en/consumer-en.js',

  BASE_PATH + 'modules/home/data/plumbing.js',
  BASE_PATH + 'modules/home/data/electricity.js',
  BASE_PATH + 'modules/home/data/fire.js',
  BASE_PATH + 'modules/home/data/gas.js',
  BASE_PATH + 'modules/home/data/lock.js',
  BASE_PATH + 'modules/home/data/heating.js',
  BASE_PATH + 'modules/home/data/natural.js',
  BASE_PATH + 'modules/home/data/en/plumbing-en.js',
  BASE_PATH + 'modules/home/data/en/electricity-en.js',
  BASE_PATH + 'modules/home/data/en/fire-en.js',
  BASE_PATH + 'modules/home/data/en/gas-en.js',
  BASE_PATH + 'modules/home/data/en/lock-en.js',
  BASE_PATH + 'modules/home/data/en/heating-en.js',
  BASE_PATH + 'modules/home/data/en/natural-en.js',

  BASE_PATH + 'modules/children/data/safety.js',
  BASE_PATH + 'modules/children/data/health.js',
  BASE_PATH + 'modules/children/data/injury.js',
  BASE_PATH + 'modules/children/data/lost.js',
  BASE_PATH + 'modules/children/data/bullying.js',
  BASE_PATH + 'modules/children/data/internet.js',
  BASE_PATH + 'modules/children/data/school.js',
  BASE_PATH + 'modules/children/data/en/safety-en.js',
  BASE_PATH + 'modules/children/data/en/health-en.js',
  BASE_PATH + 'modules/children/data/en/injury-en.js',
  BASE_PATH + 'modules/children/data/en/lost-en.js',
  BASE_PATH + 'modules/children/data/en/bullying-en.js',
  BASE_PATH + 'modules/children/data/en/internet-en.js',
  BASE_PATH + 'modules/children/data/en/school-en.js',

  BASE_PATH + 'modules/pets/data/firstaid.js',
  BASE_PATH + 'modules/pets/data/lost.js',
  BASE_PATH + 'modules/pets/data/behavior.js',
  BASE_PATH + 'modules/pets/data/health.js',
  BASE_PATH + 'modules/pets/data/poison.js',
  BASE_PATH + 'modules/pets/data/emergency.js',
  BASE_PATH + 'modules/pets/data/care.js',
  BASE_PATH + 'modules/pets/data/en/firstaid-en.js',
  BASE_PATH + 'modules/pets/data/en/lost-en.js',
  BASE_PATH + 'modules/pets/data/en/behavior-en.js',
  BASE_PATH + 'modules/pets/data/en/health-en.js',
  BASE_PATH + 'modules/pets/data/en/poison-en.js',
  BASE_PATH + 'modules/pets/data/en/emergency-en.js',
  BASE_PATH + 'modules/pets/data/en/care-en.js',

  BASE_PATH + 'modules/travel/data/documents.js',
  BASE_PATH + 'modules/travel/data/money.js',
  BASE_PATH + 'modules/travel/data/health.js',
  BASE_PATH + 'modules/travel/data/flight.js',
  BASE_PATH + 'modules/travel/data/hotel.js',
  BASE_PATH + 'modules/travel/data/theft.js',
  BASE_PATH + 'modules/travel/data/lost.js',
  BASE_PATH + 'modules/travel/data/en/documents-en.js',
  BASE_PATH + 'modules/travel/data/en/money-en.js',
  BASE_PATH + 'modules/travel/data/en/health-en.js',
  BASE_PATH + 'modules/travel/data/en/flight-en.js',
  BASE_PATH + 'modules/travel/data/en/hotel-en.js',
  BASE_PATH + 'modules/travel/data/en/theft-en.js',
  BASE_PATH + 'modules/travel/data/en/lost-en.js',

  BASE_PATH + 'modules/drone/data/detect.js',
  BASE_PATH + 'modules/drone/data/identify.js',
  BASE_PATH + 'modules/drone/data/shelter.js',
  BASE_PATH + 'modules/drone/data/comms.js',
  BASE_PATH + 'modules/drone/data/evac.js',
  BASE_PATH + 'modules/drone/data/firstaid.js',
  BASE_PATH + 'modules/drone/data/prep.js',
  BASE_PATH + 'modules/drone/data/en/detect-en.js',
  BASE_PATH + 'modules/drone/data/en/identify-en.js',
  BASE_PATH + 'modules/drone/data/en/shelter-en.js',
  BASE_PATH + 'modules/drone/data/en/comms-en.js',
  BASE_PATH + 'modules/drone/data/en/evac-en.js',
  BASE_PATH + 'modules/drone/data/en/firstaid-en.js',
  BASE_PATH + 'modules/drone/data/en/prep-en.js',

  BASE_PATH + 'modules/energy/data/phone_charge.js',
  BASE_PATH + 'modules/energy/data/battery_diy.js',
  BASE_PATH + 'modules/energy/data/solar.js',
  BASE_PATH + 'modules/energy/data/hand_crank.js',
  BASE_PATH + 'modules/energy/data/cable_pinout.js',
  BASE_PATH + 'modules/energy/data/power_bank.js',
  BASE_PATH + 'modules/energy/data/emergency_light.js',
  BASE_PATH + 'modules/energy/data/en/phone_charge-en.js',
  BASE_PATH + 'modules/energy/data/en/battery_diy-en.js',
  BASE_PATH + 'modules/energy/data/en/solar-en.js',
  BASE_PATH + 'modules/energy/data/en/hand_crank-en.js',
  BASE_PATH + 'modules/energy/data/en/cable_pinout-en.js',
  BASE_PATH + 'modules/energy/data/en/power_bank-en.js',
  BASE_PATH + 'modules/energy/data/en/emergency_light-en.js'
];

const MODULE_HTML = [
  BASE_PATH + 'modules/survival/index.html',
  BASE_PATH + 'modules/auto/index.html',
  BASE_PATH + 'modules/lawyer/index.html',
  BASE_PATH + 'modules/home/index.html',
  BASE_PATH + 'modules/children/index.html',
  BASE_PATH + 'modules/pets/index.html',
  BASE_PATH + 'modules/travel/index.html',
  BASE_PATH + 'modules/drone/index.html',
  BASE_PATH + 'modules/energy/index.html'
];

const ALL_FILES = [...CORE_FILES, ...JS_FILES, ...MODULE_HTML];

// ============================================================
// УСТАНОВКА — индивидуальное кэширование (не addAll!)
// ============================================================
self.addEventListener('install', event => {
  console.log('[SW v4.2] Установка...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        ALL_FILES.map(url =>
          cache.add(url).catch(err => {
            console.warn('[SW v4.2] Пропущен:', url, err.message);
          })
        )
      );
    }).then(() => {
      console.log('[SW v4.2] Установка завершена. Всего файлов:', ALL_FILES.length);
      return self.skipWaiting();
    })
  );
});

// ============================================================
// АКТИВАЦИЯ — удаляем старые кэши
// ============================================================
self.addEventListener('activate', event => {
  console.log('[SW v4.2] Активация...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            console.log('[SW v4.2] Удаляем старый кэш:', name);
            return caches.delete(name);
          }
        })
      );
    }).then(() => {
      console.log('[SW v4.2] Активирован');
      return self.clients.claim();
    })
  );
});

// ============================================================
// FETCH — Stale-While-Revalidate
// ============================================================
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // ===== НАВИГАЦИЯ (открытие страницы) =====
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match(request).then(cached => {
        // Фоновое обновление
        const networkUpdate = fetch(request).then(networkResponse => {
          if (networkResponse.ok) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, networkResponse.clone());
            });
          }
          return networkResponse;
        }).catch(() => null);

        if (cached) {
          // Есть в кэше — отдаём сразу, обновляем в фоне
          networkUpdate; // выполнится в фоне
          return cached;
        }

        // Нет в кэше — ждём сеть
        return networkUpdate.then(networkResponse => {
          if (networkResponse) return networkResponse;
          // Ни кэша, ни сети — fallback на корень
          return caches.match(BASE_PATH + 'index.html').then(root => {
            if (root) return root;
            return caches.match(BASE_PATH + '404.html');
          });
        });
      })
    );
    return;
  }

  // ===== STATIC (CSS, JS, PNG, иконки) =====
  const isStatic = /\.(css|js|png|jpg|jpeg|svg|ico|webmanifest|json)$/.test(url.pathname);

  if (isStatic) {
    event.respondWith(
      caches.match(request).then(cached => {
        const networkFetch = fetch(request).then(networkResponse => {
          if (networkResponse.ok) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(request, networkResponse.clone());
            });
          }
          return networkResponse;
        }).catch(() => null);

        return cached || networkFetch.then(nr => {
          if (nr) return nr;
          return new Response('Файл недоступен в офлайн-режиме', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          });
        });
      })
    );
    return;
  }

  // ===== ОСТАЛЬНОЕ (API, внешние ссылки) =====
  event.respondWith(
    fetch(request).then(response => {
      if (response.ok && response.type !== 'opaque') {
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, response.clone());
        });
      }
      return response;
    }).catch(() => {
      return caches.match(request).then(cached => {
        if (cached) return cached;
        return new Response('Страница недоступна в офлайн-режиме', {
          status: 503,
          headers: { 'Content-Type': 'text/plain' }
        });
      });
    })
  );
});

// ============================================================
// ОШИБКИ
// ============================================================
self.addEventListener('error', event => {
  console.error('[SW v4.2] Ошибка:', event.message);
});

console.log('[SW v4.2] Service Worker загружен');
console.log(`📦 Кэш: ${CACHE_NAME}`);
console.log(`📄 Всего файлов: ${ALL_FILES.length}`);