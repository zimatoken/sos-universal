# telegram-bot/bot.py
# SOS UNIVERSAL Telegram Bot — чистая реализация на HTTP API
# Работает на любой версии Python (3.6+)

import requests
import time
import json
import logging
from datetime import datetime

# ============================================================
# КОНФИГУРАЦИЯ
# ============================================================

try:
    from config import TOKEN, APP_URL, BOT_VERSION
except ImportError:
    TOKEN = "YOUR_TOKEN_HERE"
    APP_URL = "https://zimatoken.github.io/sos-universal/"
    BOT_VERSION = "2.0"

# ============================================================
# НАСТРОЙКА ЛОГОВ
# ============================================================

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# ============================================================
# БАЗОВЫЙ URL
# ============================================================

BASE_URL = f"https://api.telegram.org/bot{TOKEN}/"

# ============================================================
# ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
# ============================================================

def get_module_info(module_id):
    """Возвращает информацию о модуле по ID"""
    modules = {
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
            'desc': 'Зарядка телефона, батарейки, солнечная энергия, динамо, кабели',
            'categories': 'phone_charge, battery_diy, solar, hand_crank, cable_pinout, power_bank, emergency_light'
        }
    }
    return modules.get(module_id)

# ============================================================
# TELEGRAM API ФУНКЦИИ
# ============================================================

def send_message(chat_id, text, reply_markup=None, parse_mode='Markdown'):
    """Отправка сообщения"""
    url = BASE_URL + "sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': text,
        'parse_mode': parse_mode
    }
    if reply_markup:
        payload['reply_markup'] = json.dumps(reply_markup)
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        if response.status_code != 200:
            logger.error(f"Ошибка отправки: {response.text}")
        return response.json()
    except Exception as e:
        logger.error(f"Ошибка: {e}")
        return None

def edit_message(chat_id, message_id, text, reply_markup=None, parse_mode='Markdown'):
    """Редактирование сообщения"""
    url = BASE_URL + "editMessageText"
    payload = {
        'chat_id': chat_id,
        'message_id': message_id,
        'text': text,
        'parse_mode': parse_mode
    }
    if reply_markup:
        payload['reply_markup'] = json.dumps(reply_markup)
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        return response.json()
    except Exception as e:
        logger.error(f"Ошибка: {e}")
        return None

def get_updates(offset=None):
    """Получение обновлений"""
    url = BASE_URL + "getUpdates"
    params = {'timeout': 10}
    if offset:
        params['offset'] = offset
    
    try:
        response = requests.get(url, params=params, timeout=15)
        if response.status_code == 200:
            return response.json().get('result', [])
        else:
            logger.error(f"Ошибка getUpdates: {response.text}")
            return []
    except Exception as e:
        logger.error(f"Ошибка: {e}")
        return []

# ============================================================
# КЛАВИАТУРЫ
# ============================================================

def main_keyboard():
    """Главное меню"""
    return {
        'inline_keyboard': [
            [{'text': '📱 Открыть приложение', 'url': APP_URL}],
            [{'text': '📋 Все модули', 'callback_data': 'modules'}],
            [{'text': '🆘 SOS', 'callback_data': 'sos'}],
            [{'text': '❓ Помощь', 'callback_data': 'help'}]
        ]
    }

def modules_keyboard():
    """Список модулей"""
    return {
        'inline_keyboard': [
            [{'text': '🚗 Авто', 'callback_data': 'module_auto'}],
            [{'text': '🏠 Дом', 'callback_data': 'module_home'}],
            [{'text': '⚖️ Юрист', 'callback_data': 'module_lawyer'}],
            [{'text': '🐕 Животные', 'callback_data': 'module_pets'}],
            [{'text': '✈️ Путешествия', 'callback_data': 'module_travel'}],
            [{'text': '👶 Дети', 'callback_data': 'module_children'}],
            [{'text': '🪖 Дрон', 'callback_data': 'module_drone'}],
            [{'text': '🏕️ Выживание', 'callback_data': 'module_survival'}],
            [{'text': '⚡ Энергия', 'callback_data': 'module_energy'}],
            [{'text': '📱 Открыть приложение', 'url': APP_URL}]
        ]
    }

def back_keyboard():
    """Кнопка Назад"""
    return {
        'inline_keyboard': [
            [{'text': '🔙 Назад', 'callback_data': 'back'}]
        ]
    }

# ============================================================
# ОБРАБОТЧИКИ СООБЩЕНИЙ
# ============================================================

def handle_start(chat_id):
    """Обработка /start"""
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
    """Обработка помощи"""
    text = (
        "🆘 *Как пользоваться SOS UNIVERSAL:*\n\n"
        "1️⃣ Открой приложение\n"
        "2️⃣ Выбери модуль (Авто, Дом, Энергия...)\n"
        "3️⃣ Ответь на 3-5 вопросов\n"
        "4️⃣ Получи пошаговые инструкции\n\n"
        "✅ *Всё просто и быстро!*\n"
        f"📱 *Открыть:* {APP_URL}"
    )
    send_message(chat_id, text, back_keyboard())

def handle_sos(chat_id):
    """Обработка SOS"""
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
        "• 🔊 Свисток (3 коротких звука)\n"
        f"📱 *Открыть:* {APP_URL}"
    )
    send_message(chat_id, text, back_keyboard())

def handle_modules(chat_id):
    """Обработка списка модулей"""
    text = "📋 *Модули SOS UNIVERSAL:*\n\nВыбери нужный модуль для подробностей:"
    send_message(chat_id, text, modules_keyboard())

def handle_module(chat_id, module_id):
    """Обработка отдельного модуля"""
    module = get_module_info(module_id)
    if module:
        text = (
            f"{module['emoji']} *Модуль {module['name']}*\n\n"
            f"Помощь при:\n"
            f"• {module['desc']}\n\n"
            f"📂 *Категории:* {module['categories']}\n\n"
            f"📱 *Открыть модуль:* {APP_URL}"
        )
        keyboard = {
            'inline_keyboard': [
                [{'text': f"📱 Открыть {module['name']}", 'url': APP_URL}],
                [{'text': '📋 Все модули', 'callback_data': 'modules'}],
                [{'text': '🔙 Назад', 'callback_data': 'back'}]
            ]
        }
        send_message(chat_id, text, keyboard)
    else:
        send_message(chat_id, "❌ Модуль не найден", back_keyboard())

def handle_callback(chat_id, callback_data, message_id):
    """Обработка callback-запросов"""
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
            "💡 *Как работает:* отвечай на вопросы → получай решения\n\n"
            f"📱 *Открыть:* {APP_URL}"
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
            "• 🔊 Свисток (3 коротких звука)\n"
            f"📱 *Открыть:* {APP_URL}"
        )
        edit_message(chat_id, message_id, text, back_keyboard())
    
    elif callback_data == 'modules':
        text = "📋 *Модули SOS UNIVERSAL:*\n\nВыбери нужный модуль для подробностей:"
        edit_message(chat_id, message_id, text, modules_keyboard())
    
    elif callback_data.startswith('module_'):
        module_id = callback_data.replace('module_', '')
        module = get_module_info(module_id)
        if module:
            text = (
                f"{module['emoji']} *Модуль {module['name']}*\n\n"
                f"Помощь при:\n"
                f"• {module['desc']}\n\n"
                f"📂 *Категории:* {module['categories']}\n\n"
                f"📱 *Открыть модуль:* {APP_URL}"
            )
            keyboard = {
                'inline_keyboard': [
                    [{'text': f"📱 Открыть {module['name']}", 'url': APP_URL}],
                    [{'text': '📋 Все модули', 'callback_data': 'modules'}],
                    [{'text': '🔙 Назад', 'callback_data': 'back'}]
                ]
            }
            edit_message(chat_id, message_id, text, keyboard)
        else:
            edit_message(chat_id, message_id, "❌ Модуль не найден", back_keyboard())
    
    elif callback_data == 'back':
        text = "🆘 *SOS UNIVERSAL* — твой универсальный ассистент!\n\n👉 *Выбери действие:*"
        edit_message(chat_id, message_id, text, main_keyboard())

# ============================================================
# ГЛАВНЫЙ ЦИКЛ
# ============================================================

def main():
    """Запуск бота"""
    if not TOKEN or TOKEN == 'YOUR_TOKEN_HERE':
        logger.error("❌ Токен не настроен! Укажи TOKEN в config.py")
        print("❌ Токен не настроен! Укажи TOKEN в config.py")
        return
    
    logger.info(f"🤖 Бот SOS UNIVERSAL v{BOT_VERSION} запущен!")
    print(f"🤖 Бот SOS UNIVERSAL v{BOT_VERSION} запущен! Нажми Ctrl+C для остановки.")
    
    last_update_id = None
    
    try:
        while True:
            updates = get_updates(last_update_id)
            
            for update in updates:
                update_id = update.get('update_id')
                last_update_id = update_id + 1
                
                # Обработка сообщений
                if 'message' in update:
                    message = update['message']
                    chat_id = message['chat']['id']
                    
                    if 'text' in message:
                        text = message['text']
                        if text == '/start':
                            handle_start(chat_id)
                        elif text == '/help':
                            handle_help(chat_id)
                        elif text == '/modules':
                            handle_modules(chat_id)
                        elif text == '/sos':
                            handle_sos(chat_id)
                        elif text.startswith('/module_'):
                            module_id = text.replace('/module_', '')
                            handle_module(chat_id, module_id)
                
                # Обработка callback-запросов
                if 'callback_query' in update:
                    callback = update['callback_query']
                    chat_id = callback['message']['chat']['id']
                    message_id = callback['message']['message_id']
                    callback_data = callback['data']
                    
                    # Отвечаем на callback
                    url = BASE_URL + "answerCallbackQuery"
                    requests.post(url, json={'callback_query_id': callback['id']})
                    
                    handle_callback(chat_id, callback_data, message_id)
            
            time.sleep(1)
            
    except KeyboardInterrupt:
        logger.info("🛑 Бот остановлен пользователем")
        print("🛑 Бот остановлен")
    except Exception as e:
        logger.error(f"❌ Ошибка: {e}")
        print(f"❌ Ошибка: {e}")

if __name__ == '__main__':
    main()