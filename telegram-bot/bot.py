# telegram-bot/bot.py
# SOS UNIVERSAL Telegram Bot v2.1 — гибридная версия
# Лучшее из двух миров: надёжность Али Бабы + простота твоего кода

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
# API HELPERS (с retry и обработкой ошибок) — от Али Бабы
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
                retry_after = response.json().get('parameters', {}).get('retry_after', 5)
                logger.warning(f"Rate limit. Ждём {retry_after} сек...")
                time.sleep(retry_after)
                attempt += 1
                continue
            else:
                logger.error(f"API ошибка {response.status_code}: {response.text[:200]}")
                return {'ok': False, 'description': response.text[:200]}
        except requests.exceptions.Timeout:
            attempt += 1
            logger.warning(f"Таймаут {method}, попытка {attempt}/{max_retries}")
            time.sleep(2)
        except Exception as e:
            attempt += 1
            logger.error(f"Ошибка {method}: {e}")
            time.sleep(2)

    return {'ok': False, 'description': 'Max retries exceeded'}


def send_message(chat_id, text, reply_markup=None, parse_mode='Markdown'):
    """Отправка сообщения с обработкой ошибок — от Али Бабы"""
    payload = {
        'chat_id': chat_id,
        'text': text,
        'parse_mode': parse_mode,
        'disable_web_page_preview': True
    }
    if reply_markup:
        payload['reply_markup'] = json.dumps(reply_markup)

    result = api_request("sendMessage", payload)
    if result and not result.get('ok'):
        if 'can\'t parse entities' in str(result.get('description', '')):
            payload['parse_mode'] = None
            payload['text'] = text.replace('*', '').replace('_', '').replace('`', '')
            result = api_request("sendMessage", payload)
    return result


def edit_message(chat_id, message_id, text, reply_markup=None, parse_mode='Markdown'):
    """Редактирование сообщения — от Али Бабы"""
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
        if 'message is not modified' in desc:
            return {'ok': True}
        if 'can\'t parse entities' in desc:
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
            logger.error(f"getUpdates ошибка {response.status_code}")
            return []
    except Exception as e:
        logger.error(f"getUpdates ошибка: {e}")
        return []


def delete_webhook():
    """Очистка webhook перед long polling — от Али Бабы"""
    result = api_request("deleteWebhook", {'drop_pending_updates': True})
    if result and result.get('ok'):
        logger.info("✅ Webhook удалён")
    return result


def get_me():
    """Проверка токена — от Али Бабы"""
    result = api_request("getMe")
    if result and result.get('ok'):
        bot_info = result['result']
        logger.info(f"✅ Бот: @{bot_info['username']}")
        return bot_info
    else:
        logger.error("❌ Токен неверный!")
        return None

# ============================================================
# ДАННЫЕ МОДУЛЕЙ (9 штук)
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
        'desc': 'Зарядка, батарейки, солнечная энергия, динамо',
        'categories': 'phone_charge, battery_diy, solar, hand_crank, cable_pinout, power_bank, emergency_light'
    }
}


def get_module_info(module_id):
    return MODULES.get(module_id)

# ============================================================
# КЛАВИАТУРЫ
# ============================================================

def main_keyboard():
    return {
        'inline_keyboard': [
            [{'text': '📱 Открыть приложение', 'url': APP_URL}],
            [{'text': '📋 Все модули', 'callback_data': 'modules'}],
            [{'text': '🆘 SOS', 'callback_data': 'sos'}],
            [{'text': '❓ Помощь', 'callback_data': 'help'}]
        ]
    }


def modules_keyboard():
    keyboard = []
    row = []
    for module_id, module in MODULES.items():
        row.append({'text': f"{module['emoji']} {module['name']}", 'callback_data': f'module_{module_id}'})
        if len(row) == 2:
            keyboard.append(row)
            row = []
    if row:
        keyboard.append(row)
    keyboard.append([{'text': '🔙 Назад', 'callback_data': 'back'}])
    return {'inline_keyboard': keyboard}


def back_keyboard():
    return {'inline_keyboard': [[{'text': '🔙 Назад', 'callback_data': 'back'}]]}


def sos_keyboard():
    return {
        'inline_keyboard': [
            [{'text': '🚨 Открыть SOS', 'url': APP_URL}],
            [{'text': '🔙 Назад', 'callback_data': 'back'}]
        ]
    }

# ============================================================
# ОБРАБОТЧИКИ
# ============================================================

def handle_start(chat_id):
    text = (
        f"🆘 *SOS UNIVERSAL* — твой универсальный ассистент!\n\n"
        f"📱 Приложение работает *без интернета*\n"
        f"🗺️ 9 модулей для разных ситуаций\n"
        f"🌍 Русский и английский языки\n"
        f"📴 Полностью офлайн\n\n"
        f"👉 *Выбери действие:*"
    )
    send_message(chat_id, text, main_keyboard())


def handle_help(chat_id):
    text = (
        "🆘 *Как пользоваться SOS UNIVERSAL:*\n\n"
        "1️⃣ Открой приложение\n"
        "2️⃣ Выбери модуль (Авто, Дом, Энергия...)\n"
        "3️⃣ Ответь на 3-5 вопросов\n"
        "4️⃣ Получи пошаговые инструкции\n\n"
        "📋 *Команды бота:*\n"
        "/start — главное меню\n"
        "/modules — список модулей\n"
        "/sos — экстренная помощь\n"
        "/help — эта справка\n\n"
        f"📱 *Открыть:* {APP_URL}"
    )
    send_message(chat_id, text, back_keyboard())


def handle_sos(chat_id):
    text = (
        "🚨 *Если вы в опасности:*\n\n"
        "1️⃣ Открой *SOS UNIVERSAL*\n"
        "2️⃣ Нажми *SOS — Я в опасности*\n"
        "3️⃣ Введи телефон близкого человека\n"
        "4️⃣ Нажми *ОТПРАВИТЬ SOS*\n\n"
        "📱 Приложение отправит *SMS* с координатами\n\n"
        "⚠️ *Сигналы бедствия:*\n"
        "• 🔥 3 огня в треугольнике\n"
        "• 🪞 Зеркало для отражения солнца\n"
        "• 🔊 Свисток (3 коротких звука)"
    )
    send_message(chat_id, text, sos_keyboard())


def handle_modules(chat_id):
    text = "📋 *Модули SOS UNIVERSAL:*\n\nВыбери нужный модуль:"
    send_message(chat_id, text, modules_keyboard())


def handle_module(chat_id, module_id):
    module = get_module_info(module_id)
    if module:
        text = (
            f"{module['emoji']} *Модуль {module['name']}*\n\n"
            f"Помощь при:\n"
            f"• {module['desc']}\n\n"
            f"📂 *Категории:* `{module['categories']}`\n\n"
            f"📱 *Открыть:* {APP_URL}"
        )
        send_message(chat_id, text, back_keyboard())
    else:
        send_message(chat_id, "❌ Модуль не найден", back_keyboard())

# ============================================================
# CALLBACK ОБРАБОТЧИК
# ============================================================

def handle_callback(chat_id, callback_data, message_id, callback_query_id):
    answer_callback(callback_query_id)

    if callback_data == 'help':
        text = (
            "🆘 *SOS UNIVERSAL* — 9 модулей помощи:\n\n"
            "🚗 *Авто* — поломки, ДТП, шины, аккумулятор\n"
            "🏠 *Дом* — пожар, газ, электричество, сантехника\n"
            "⚖️ *Юрист* — ДТП, жильё, наследство, развод\n"
            "🐕 *Животные* — первая помощь, потеря, отравление\n"
            "✈️ *Путешествия* — документы, кража, здоровье\n"
            "👶 *Дети* — безопасность, буллинг, потеря\n"
            "🪖 *Дрон* — инструкции, первая помощь\n"
            "🏕️ *Выживание* — вода, огонь, еда, укрытие\n"
            "⚡ *Энергия* — зарядка, батарейки, солнечная энергия\n\n"
            "💡 *Как работает:* отвечай на вопросы → получай решения"
        )
        edit_message(chat_id, message_id, text, back_keyboard())

    elif callback_data == 'sos':
        text = (
            "🚨 *Если вы в опасности:*\n\n"
            "1️⃣ Открой *SOS UNIVERSAL*\n"
            "2️⃣ Нажми *SOS — Я в опасности*\n"
            "3️⃣ Введи телефон близкого человека\n"
            "4️⃣ Нажми *ОТПРАВИТЬ SOS*\n\n"
            "📱 Приложение отправит *SMS* с координатами\n\n"
            "⚠️ *Сигналы бедствия:*\n"
            "• 🔥 3 огня в треугольнике\n"
            "• 🪞 Зеркало для отражения солнца\n"
            "• 🔊 Свисток (3 коротких звука)"
        )
        edit_message(chat_id, message_id, text, sos_keyboard())

    elif callback_data == 'modules':
        text = "📋 *Модули SOS UNIVERSAL:*\n\nВыбери нужный модуль:"
        edit_message(chat_id, message_id, text, modules_keyboard())

    elif callback_data.startswith('module_'):
        module_id = callback_data.replace('module_', '')
        module = get_module_info(module_id)
        if module:
            text = (
                f"{module['emoji']} *Модуль {module['name']}*\n\n"
                f"Помощь при:\n"
                f"• {module['desc']}\n\n"
                f"📂 *Категории:* `{module['categories']}`\n\n"
                f"📱 *Открыть:* {APP_URL}"
            )
            edit_message(chat_id, message_id, text, back_keyboard())
        else:
            edit_message(chat_id, message_id, "❌ Модуль не найден", back_keyboard())

    elif callback_data == 'back':
        text = "🆘 *SOS UNIVERSAL* — твой универсальный ассистент!\n\n👉 *Выбери действие:*"
        edit_message(chat_id, message_id, text, main_keyboard())

# ============================================================
# ПРОЦЕСС ОБНОВЛЕНИЙ
# ============================================================

def process_update(update):
    try:
        update_id = update.get('update_id')

        if 'message' in update:
            message = update['message']
            chat_id = message['chat']['id']
            if 'text' not in message:
                return

            text = message['text'].strip()
            logger.info(f"[{update_id}] Сообщение: {text[:50]}")

            if text == '/start':
                handle_start(chat_id)
            elif text == '/help':
                handle_help(chat_id)
            elif text == '/modules':
                handle_modules(chat_id)
            elif text == '/sos':
                handle_sos(chat_id)
            elif text.startswith('/module_'):
                handle_module(chat_id, text.replace('/module_', '').strip())
            elif text.startswith('/'):
                handle_help(chat_id)
            else:
                handle_start(chat_id)

        elif 'callback_query' in update:
            callback = update['callback_query']
            callback_id = callback.get('id')
            callback_data = callback.get('data', '')

            if 'message' not in callback:
                answer_callback(callback_id, "Кнопка работает только в чате")
                return

            message = callback['message']
            chat_id = message['chat']['id']
            message_id = message['message_id']

            logger.info(f"[{update_id}] Callback: {callback_data}")
            handle_callback(chat_id, callback_data, message_id, callback_id)

    except Exception as e:
        logger.error(f"Ошибка обработки: {e}", exc_info=True)

# ============================================================
# ГЛАВНЫЙ ЦИКЛ
# ============================================================

def main():
    if not TOKEN or TOKEN == 'YOUR_TOKEN_HERE':
        logger.error("❌ Токен не настроен!")
        print("❌ Токен не настроен! Создай config.py с TOKEN='...'")
        return

    delete_webhook()
    bot_info = get_me()
    if not bot_info:
        return

    logger.info(f"🤖 SOS UNIVERSAL Bot v{BOT_VERSION} запущен!")
    print(f"🤖 SOS UNIVERSAL Bot v{BOT_VERSION} запущен!")
    print(f"   Бот: @{bot_info['username']}")
    print("   Нажми Ctrl+C для остановки\n")

    last_update_id = -1

    try:
        while True:
            updates = get_updates(last_update_id)

            for update in updates:
                update_id = update.get('update_id')

                if last_update_id == -1:
                    last_update_id = update_id + 1
                    continue

                last_update_id = update_id + 1
                process_update(update)

            time.sleep(0.5)

    except KeyboardInterrupt:
        logger.info("🛑 Бот остановлен")
        print("\n🛑 Бот остановлен")
    except Exception as e:
        logger.critical(f"💥 Ошибка: {e}", exc_info=True)
        print(f"💥 Ошибка: {e}")
        time.sleep(5)
        main()


if __name__ == '__main__':
    main()