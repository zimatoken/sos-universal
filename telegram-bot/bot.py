# telegram-bot/bot.py
# SOS UNIVERSAL Telegram Bot v2.1 — production-ready
# Работает на любой версии Python (3.7+)

import requests
import time
import json
import logging
import sys
from datetime import datetime

# ============================================================
# КОНФИГУРАЦИЯ
# ============================================================

try:
    from config import TOKEN, APP_URL, BOT_VERSION
except ImportError:
    TOKEN = "YOUR_TOKEN_HERE"
    APP_URL = "https://zimatoken.github.io/sos-universal/"
    BOT_VERSION = "2.1"

# ============================================================
# НАСТРОЙКА ЛОГОВ
# ============================================================

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO,
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler("bot.log", encoding='utf-8')
    ]
)
logger = logging.getLogger(__name__)

# ============================================================
# БАЗОВЫЙ URL
# ============================================================

BASE_URL = f"https://api.telegram.org/bot{TOKEN}/"

# ============================================================
# API HELPERS (с retry и обработкой ошибок)
# ============================================================

def api_request(method, payload=None, files=None, max_retries=3):
    """Универсальный запрос к Telegram API с retry"""
    url = BASE_URL + method
    attempt = 0

    while attempt < max_retries:
        try:
            if files:
                response = requests.post(url, data=payload, files=files, timeout=30)
            else:
                response = requests.post(url, json=payload, timeout=30)

            if response.status_code == 200:
                return response.json()
            elif response.status_code == 429:
                # Rate limit
                retry_after = response.json().get('parameters', {}).get('retry_after', 5)
                logger.warning(f"Rate limit. Ждём {retry_after} сек...")
                time.sleep(retry_after)
                attempt += 1
                continue
            else:
                logger.error(f"API ошибка {response.status_code}: {response.text}")
                return {'ok': False, 'description': response.text}
        except requests.exceptions.Timeout:
            attempt += 1
            logger.warning(f"Таймаут запроса {method}, попытка {attempt}/{max_retries}")
            time.sleep(2)
        except Exception as e:
            attempt += 1
            logger.error(f"Ошибка запроса {method}: {e}")
            time.sleep(2)

    return {'ok': False, 'description': 'Max retries exceeded'}


def send_message(chat_id, text, reply_markup=None, parse_mode='Markdown', disable_preview=True):
    """Отправка сообщения с обработкой ошибок"""
    payload = {
        'chat_id': chat_id,
        'text': text,
        'parse_mode': parse_mode,
        'disable_web_page_preview': disable_preview
    }
    if reply_markup:
        payload['reply_markup'] = json.dumps(reply_markup)

    result = api_request("sendMessage", payload)
    if result and not result.get('ok'):
        # Если Markdown сломался — пробуем без него
        if 'can't parse entities' in str(result.get('description', '')):
            payload['parse_mode'] = None
            payload['text'] = text.replace('*', '').replace('_', '').replace('`', '')
            result = api_request("sendMessage", payload)
    return result


def edit_message(chat_id, message_id, text, reply_markup=None, parse_mode='Markdown'):
    """Редактирование сообщения с обработкой 'message is not modified'"""
    payload = {
        'chat_id': chat_id,
        'message_id': message_id,
        'text': text,
        'parse_mode': parse_mode
    }
    if reply_markup:
        payload['reply_markup'] = json.dumps(reply_markup)

    result = api_request("editMessageText", payload)
    if result and not result.get('ok'):
        desc = result.get('description', '')
        # Если текст не изменился — не ошибка
        if 'message is not modified' in desc:
            logger.debug("Сообщение не изменилось — пропускаем")
            return {'ok': True}
        # Если Markdown сломался — пробуем без него
        elif 'can't parse entities' in desc:
            payload['parse_mode'] = None
            payload['text'] = text.replace('*', '').replace('_', '').replace('`', '')
            result = api_request("editMessageText", payload)
    return result


def answer_callback(callback_query_id, text=None):
    """Ответ на callback query"""
    payload = {'callback_query_id': callback_query_id}
    if text:
        payload['text'] = text
        payload['show_alert'] = True
    return api_request("answerCallbackQuery", payload)


def get_updates(offset=None):
    """Получение обновлений с long polling"""
    payload = {'timeout': 30, 'limit': 100}
    if offset:
        payload['offset'] = offset

    try:
        response = requests.get(BASE_URL + "getUpdates", params=payload, timeout=35)
        if response.status_code == 200:
            return response.json().get('result', [])
        else:
            logger.error(f"getUpdates ошибка {response.status_code}: {response.text}")
            return []
    except requests.exceptions.Timeout:
        logger.warning("getUpdates таймаут — нормально для long polling")
        return []
    except Exception as e:
        logger.error(f"getUpdates ошибка: {e}")
        return []


def delete_webhook():
    """Очистка webhook перед long polling"""
    result = api_request("deleteWebhook", {'drop_pending_updates': True})
    if result and result.get('ok'):
        logger.info("✅ Webhook удалён, pending updates очищены")
    return result


def get_me():
    """Проверка токена и получение информации о боте"""
    result = api_request("getMe")
    if result and result.get('ok'):
        bot_info = result['result']
        logger.info(f"✅ Бот подключён: @{bot_info['username']} ({bot_info['first_name']})")
        return bot_info
    else:
        logger.error("❌ Не удалось получить информацию о боте. Проверь токен!")
        return None

# ============================================================
# ДАННЫЕ МОДУЛЕЙ
# ============================================================

MODULES = {
    'auto': {
        'emoji': '🚗',
        'name': 'Авто',
        'desc': 'Поломки, ДТП, шины, аккумулятор, тормоза',
        'categories': 'wont_start, overheating, flat_tire, brakes, battery, leak, dtp'
    },
    'home': {
        'emoji': '🏠',
        'name': 'Дом',
        'desc': 'Пожар, газ, электричество, сантехника, замки',
        'categories': 'plumbing, electricity, fire, gas, lock, heating, natural'
    },
    'lawyer': {
        'emoji': '⚖️',
        'name': 'Юрист',
        'desc': 'ДТП, жильё, наследство, развод, долги',
        'categories': 'dtp, labor, housing, inheritance, debts, divorce, consumer'
    },
    'pets': {
        'emoji': '🐕',
        'name': 'Животные',
        'desc': 'Первая помощь, потеря, отравление, здоровье',
        'categories': 'firstaid, lost, behavior, health, poison, emergency, care'
    },
    'travel': {
        'emoji': '✈️',
        'name': 'Путешествия',
        'desc': 'Документы, кража, здоровье, отели, рейсы',
        'categories': 'documents, money, health, flight, hotel, theft, lost'
    },
    'children': {
        'emoji': '👶',
        'name': 'Дети',
        'desc': 'Безопасность, буллинг, здоровье, потеря',
        'categories': 'safety, health, injury, lost, bullying, internet, school'
    },
    'drone': {
        'emoji': '🪖',
        'name': 'Дрон',
        'desc': 'Инструкции, связь, эвакуация, первая помощь',
        'categories': 'detect, identify, shelter, comms, evac, firstaid, prep'
    },
    'survival': {
        'emoji': '🏕️',
        'name': 'Выживание',
        'desc': 'Вода, огонь, еда, укрытие, медицина, навигация',
        'categories': 'water, fire, shelter, food, medicine, navigation, radio, kit'
    },
    'energy': {
        'emoji': '⚡',
        'name': 'Энергия',
        'desc': 'Зарядка телефона, батарейки, солнечная энергия, динамо',
        'categories': 'phone_charge, battery_diy, solar, hand_crank, cable_pinout, power_bank, emergency_light'
    }
}


def get_module_info(module_id):
    """Возвращает информацию о модуле по ID"""
    return MODULES.get(module_id)


# ============================================================
# КЛАВИАТУРЫ
# ============================================================

def main_keyboard():
    """Главное меню"""
    return {
        'inline_keyboard': [
            [{'text': '📱 Открыть приложение', 'url': APP_URL}],
            [{'text': '📋 Все модули', 'callback_data': 'modules'},
             {'text': '🆘 SOS', 'callback_data': 'sos'}],
            [{'text': '❓ Помощь', 'callback_data': 'help'},
             {'text': 'ℹ️ О боте', 'callback_data': 'about'}]
        ]
    }


def modules_keyboard():
    """Список модулей — 2 в ряд для компактности"""
    keyboard = []
    row = []

    for module_id, module in MODULES.items():
        row.append({
            'text': f"{module['emoji']} {module['name']}",
            'callback_data': f'module_{module_id}'
        })
        if len(row) == 2:
            keyboard.append(row)
            row = []

    if row:
        keyboard.append(row)

    keyboard.append([{'text': '📱 Открыть приложение', 'url': APP_URL}])
    keyboard.append([{'text': '🔙 Назад', 'callback_data': 'back'}])

    return {'inline_keyboard': keyboard}


def module_keyboard(module_id):
    """Клавиатура конкретного модуля"""
    module = get_module_info(module_id)
    if not module:
        return back_keyboard()

    return {
        'inline_keyboard': [
            [{'text': f"📱 Открыть {module['name']}", 'url': APP_URL}],
            [{'text': '📋 Все модули', 'callback_data': 'modules'}],
            [{'text': '🔙 Назад', 'callback_data': 'back'}]
        ]
    }


def back_keyboard():
    """Кнопка Назад"""
    return {
        'inline_keyboard': [
            [{'text': '🔙 Назад', 'callback_data': 'back'}]
        ]
    }


def sos_keyboard():
    """SOS клавиатура"""
    return {
        'inline_keyboard': [
            [{'text': '📱 Открыть SOS', 'url': APP_URL}],
            [{'text': '🔙 Назад', 'callback_data': 'back'}]
        ]
    }

# ============================================================
# ОБРАБОТЧИКИ СООБЩЕНИЙ
# ============================================================

def handle_start(chat_id, args=None):
    """Обработка /start [args]"""
    # Если есть аргументы (deep linking) — открываем модуль сразу
    if args and args in MODULES:
        handle_module(chat_id, args)
        return

    text = (
        f"🆘 *SOS UNIVERSAL* — твой универсальный ассистент!

"
        f"📱 Приложение работает *без интернета*
"
        f"🗺️ 9 модулей для разных ситуаций
"
        f"🌍 Русский и английский языки
"
        f"📴 Полностью офлайн

"
        f"👉 *Выбери действие:*"
    )
    send_message(chat_id, text, main_keyboard())


def handle_help(chat_id):
    """Обработка /help"""
    text = (
        "🆘 *Как пользоваться SOS UNIVERSAL:*

"
        "1️⃣ Открой приложение
"
        "2️⃣ Выбери модуль (Авто, Дом, Энергия...)
"
        "3️⃣ Ответь на 3-5 вопросов
"
        "4️⃣ Получи пошаговые инструкции

"
        "📋 *Команды бота:*
"
        "/start — главное меню
"
        "/modules — список модулей
"
        "/sos — экстренная помощь
"
        "/help — эта справка
"
        "/about — о проекте

"
        "✅ *Всё просто и быстро!*"
    )
    send_message(chat_id, text, back_keyboard())


def handle_about(chat_id):
    """Обработка /about"""
    text = (
        f"🆘 *SOS UNIVERSAL* v{BOT_VERSION}

"
        f"Универсальный офлайн-ассистент для экстренных ситуаций.

"
        f"🗺️ *9 модулей:* Авто, Дом, Юрист, Животные, Путешествия, Дети, Дрон, Выживание, Энергия

"
        f"📱 *Приложение:* {APP_URL}
"
        f"📧 *Почта:* sos.universal.help@gmail.com

"
        f"💡 *Идеи и предложения?* Пиши в Telegram: @sos_universal_bot"
    )
    send_message(chat_id, text, back_keyboard())


def handle_sos(chat_id):
    """Обработка /sos"""
    text = (
        "🚨 *Если вы в опасности:*

"
        "1️⃣ Открой *SOS UNIVERSAL*
"
        "2️⃣ Нажми *SOS — Я в опасности*
"
        "3️⃣ Введи телефон близкого человека
"
        "4️⃣ Нажми *ОТПРАВИТЬ SOS*

"
        "📱 Приложение отправит *SMS* с координатами

"
        "⚠️ *Сигналы бедствия:*
"
        "• 🔥 3 огня в треугольнике
"
        "• 🪞 Зеркало для отражения солнца
"
        "• 🔊 Свисток (3 коротких звука)
"
        "• 🪨 Буквы SOS на открытой местности"
    )
    send_message(chat_id, text, sos_keyboard())


def handle_modules(chat_id):
    """Обработка /modules"""
    text = "📋 *Модули SOS UNIVERSAL:*

Выбери нужный модуль для подробностей:"
    send_message(chat_id, text, modules_keyboard())


def handle_module(chat_id, module_id):
    """Обработка отдельного модуля"""
    module = get_module_info(module_id)
    if module:
        text = (
            f"{module['emoji']} *Модуль {module['name']}*

"
            f"Помощь при:
"
            f"• {module['desc']}

"
            f"📂 *Категории:* `{module['categories']}`

"
            f"📱 *Открыть модуль:* {APP_URL}"
        )
        send_message(chat_id, text, module_keyboard(module_id))
    else:
        send_message(chat_id, "❌ Модуль не найден. Используй /modules", back_keyboard())


def handle_unknown(chat_id, text):
    """Обработка неизвестных сообщений"""
    reply = (
        f"🤔 Не понял команду *{text}*

"
        f"Доступные команды:
"
        f"/start — главное меню
"
        f"/modules — список модулей
"
        f"/sos — экстренная помощь
"
        f"/help — справка
"
        f"/about — о проекте"
    )
    send_message(chat_id, reply, main_keyboard())

# ============================================================
# ОБРАБОТЧИКИ CALLBACK
# ============================================================

def handle_callback(chat_id, callback_data, message_id, callback_query_id):
    """Обработка callback-запросов"""
    # Отвечаем на callback сразу (чтобы убрать часики)
    answer_callback(callback_query_id)

    if callback_data == 'help':
        text = (
            "🆘 *SOS UNIVERSAL* — 9 модулей помощи:

"
            "🚗 *Авто* — поломки, ДТП, шины, аккумулятор
"
            "🏠 *Дом* — пожар, газ, электричество, сантехника
"
            "⚖️ *Юрист* — ДТП, жильё, наследство, развод
"
            "🐕 *Животные* — первая помощь, потеря, отравление
"
            "✈️ *Путешествия* — документы, кража, здоровье
"
            "👶 *Дети* — безопасность, буллинг, потеря
"
            "🪖 *Дрон* — инструкции, первая помощь
"
            "🏕️ *Выживание* — вода, огонь, еда, укрытие
"
            "⚡ *Энергия* — зарядка, батарейки, солнечная энергия

"
            "💡 *Как работает:* отвечай на вопросы → получай решения"
        )
        edit_message(chat_id, message_id, text, back_keyboard())

    elif callback_data == 'sos':
        text = (
            "🚨 *Если вы в опасности:*

"
            "1️⃣ Открой *SOS UNIVERSAL*
"
            "2️⃣ Нажми *SOS — Я в опасности*
"
            "3️⃣ Введи телефон близкого человека
"
            "4️⃣ Нажми *ОТПРАВИТЬ SOS*

"
            "📱 Приложение отправит *SMS* с координатами

"
            "⚠️ *Сигналы бедствия:*
"
            "• 🔥 3 огня в треугольнике
"
            "• 🪞 Зеркало для отражения солнца
"
            "• 🔊 Свисток (3 коротких звука)"
        )
        edit_message(chat_id, message_id, text, sos_keyboard())

    elif callback_data == 'modules':
        text = "📋 *Модули SOS UNIVERSAL:*

Выбери нужный модуль для подробностей:"
        edit_message(chat_id, message_id, text, modules_keyboard())

    elif callback_data.startswith('module_'):
        module_id = callback_data.replace('module_', '')
        module = get_module_info(module_id)
        if module:
            text = (
                f"{module['emoji']} *Модуль {module['name']}*

"
                f"Помощь при:
"
                f"• {module['desc']}

"
                f"📂 *Категории:* `{module['categories']}`

"
                f"📱 *Открыть модуль:* {APP_URL}"
            )
            edit_message(chat_id, message_id, text, module_keyboard(module_id))
        else:
            edit_message(chat_id, message_id, "❌ Модуль не найден", back_keyboard())

    elif callback_data == 'about':
        text = (
            f"🆘 *SOS UNIVERSAL* v{BOT_VERSION}

"
            f"Универсальный офлайн-ассистент для экстренных ситуаций.

"
            f"🗺️ *9 модулей:* Авто, Дом, Юрист, Животные, Путешествия, Дети, Дрон, Выживание, Энергия

"
            f"📱 *Приложение:* {APP_URL}
"
            f"📧 *Почта:* sos.universal.help@gmail.com"
        )
        edit_message(chat_id, message_id, text, back_keyboard())

    elif callback_data == 'back':
        text = "🆘 *SOS UNIVERSAL* — твой универсальный ассистент!

👉 *Выбери действие:*"
        edit_message(chat_id, message_id, text, main_keyboard())

# ============================================================
# ОБРАБОТКА ОБНОВЛЕНИЯ
# ============================================================

def process_update(update):
    """Обработка одного обновления с полной защитой от падений"""
    try:
        update_id = update.get('update_id')

        # === СООБЩЕНИЯ ===
        if 'message' in update:
            message = update['message']
            chat = message.get('chat', {})
            chat_id = chat.get('id')

            if not chat_id:
                logger.warning(f"Сообщение без chat_id: {update_id}")
                return

            # Только текстовые сообщения
            if 'text' not in message:
                return

            text = message['text'].strip()
            user = message.get('from', {})
            username = user.get('username', 'unknown')

            logger.info(f"[{update_id}] Сообщение от @{username} ({chat_id}): {text[:50]}")

            # Команды
            if text.startswith('/start'):
                args = text.replace('/start', '').strip()
                handle_start(chat_id, args if args else None)
            elif text == '/help':
                handle_help(chat_id)
            elif text == '/about':
                handle_about(chat_id)
            elif text == '/modules':
                handle_modules(chat_id)
            elif text == '/sos':
                handle_sos(chat_id)
            elif text.startswith('/module_'):
                module_id = text.replace('/module_', '').strip()
                handle_module(chat_id, module_id)
            elif text.startswith('/'):
                handle_unknown(chat_id, text)
            else:
                # Обычный текст — отправляем меню
                handle_start(chat_id)

        # === CALLBACK QUERIES ===
        elif 'callback_query' in update:
            callback = update['callback_query']
            callback_id = callback.get('id')
            callback_data = callback.get('data', '')

            # Проверяем наличие message (не inline mode)
            if 'message' not in callback:
                logger.debug(f"Callback без message (inline mode): {callback_id}")
                answer_callback(callback_id, "Эта кнопка работает только в чате с ботом")
                return

            message = callback['message']
            chat_id = message['chat']['id']
            message_id = message['message_id']

            logger.info(f"[{update_id}] Callback от {chat_id}: {callback_data}")
            handle_callback(chat_id, callback_data, message_id, callback_id)

    except Exception as e:
        logger.error(f"❌ Ошибка обработки update {update.get('update_id')}: {e}", exc_info=True)

# ============================================================
# ГЛАВНЫЙ ЦИКЛ
# ============================================================

def main():
    """Запуск бота"""
    if not TOKEN or TOKEN == 'YOUR_TOKEN_HERE':
        logger.error("❌ Токен не настроен! Создай config.py с TOKEN='...'")
        print("❌ Токен не настроен! Создай config.py с TOKEN='...'")
        return

    # Очистка webhook и проверка токена
    delete_webhook()
    bot_info = get_me()
    if not bot_info:
        return

    logger.info(f"🤖 SOS UNIVERSAL Bot v{BOT_VERSION} запущен!")
    print(f"🤖 SOS UNIVERSAL Bot v{BOT_VERSION} запущен!")
    print(f"   Бот: @{bot_info['username']}")
    print(f"   Нажми Ctrl+C для остановки\n")

    # offset=-1 пропускает старые сообщения при старте
    last_update_id = -1

    try:
        while True:
            updates = get_updates(last_update_id)

            for update in updates:
                update_id = update.get('update_id')

                # Пропускаем старые сообщения при первом запуске
                if last_update_id == -1:
                    last_update_id = update_id + 1
                    continue

                last_update_id = update_id + 1
                process_update(update)

            time.sleep(0.5)

    except KeyboardInterrupt:
        logger.info("🛑 Бот остановлен пользователем (Ctrl+C)")
        print("\n🛑 Бот остановлен")
    except Exception as e:
        logger.critical(f"💥 Критическая ошибка: {e}", exc_info=True)
        print(f"💥 Критическая ошибка: {e}")
        # Автоперезапуск через 5 секунд
        time.sleep(5)
        main()


if __name__ == '__main__':
    main()
