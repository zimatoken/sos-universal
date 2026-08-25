import logging
import os
import sys
from datetime import datetime
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler, CallbackContext
from config import TOKEN, APP_URL, BOT_VERSION

# ============================================================
# НАСТРОЙКА ЛОГОВ
# ============================================================

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# Версия бота
BOT_VERSION = getattr(sys.modules.get('config'), 'BOT_VERSION', '2.0')

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
# КОМАНДЫ БОТА
# ============================================================

def start(update: Update, context: CallbackContext):
    """Команда /start — приветствие и главное меню"""
    keyboard = [
        [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)],
        [InlineKeyboardButton("📋 Все модули", callback_data='modules')],
        [InlineKeyboardButton("🆘 SOS — инструкция", callback_data='sos')],
        [InlineKeyboardButton("❓ Помощь", callback_data='help')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    update.message.reply_text(
        f"🆘 *SOS UNIVERSAL* — твой универсальный ассистент!\n\n"
        f"📱 Приложение работает *без интернета*\n"
        f"🗺️ 9 модулей для разных ситуаций\n"
        f"🌍 Русский и английский языки\n"
        f"📴 Полностью офлайн\n\n"
        f"👉 *Выбери действие:*",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )


def help_command(update: Update, context: CallbackContext):
    """Команда /help — инструкция по использованию"""
    keyboard = [
        [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)],
        [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    update.message.reply_text(
        "🆘 *Как пользоваться SOS UNIVERSAL:*\n\n"
        "1️⃣ Открой приложение\n"
        "2️⃣ Выбери модуль (Авто, Дом, Энергия...)\n"
        "3️⃣ Ответь на 3-5 вопросов\n"
        "4️⃣ Получи пошаговые инструкции\n\n"
        "✅ *Всё просто и быстро!*\n"
        "📴 *Работает без интернета*\n"
        "🌍 *На русском и английском*\n\n"
        f"📱 *Открыть:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )


def demo_command(update: Update, context: CallbackContext):
    """Команда /demo — демонстрация работы"""
    keyboard = [
        [InlineKeyboardButton("📱 Попробовать сейчас", url=APP_URL)]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    update.message.reply_text(
        "🎯 *Демо-режим:*\n\n"
        "📱 Открой приложение и выбери модуль *Энергия*\n"
        "📱 Нажми *«Зарядка телефона»*\n"
        "🔋 Ответь на вопросы о доступных материалах\n"
        "⚡ Получи пошаговый план действий\n\n"
        "🔥 *Попробуй прямо сейчас!*",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )


def sos_command(update: Update, context: CallbackContext):
    """Команда /sos — экстренная помощь"""
    keyboard = [
        [InlineKeyboardButton("🚨 Открыть SOS", url=APP_URL)],
        [InlineKeyboardButton("📱 Скачать приложение", url=APP_URL)]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    update.message.reply_text(
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
        "• 🪨 Буквы SOS на земле\n\n"
        f"📱 *Открыть:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )


def modules_command(update: Update, context: CallbackContext):
    """Команда /modules — список всех модулей"""
    keyboard = [
        [InlineKeyboardButton("🚗 Авто", callback_data='module_auto')],
        [InlineKeyboardButton("🏠 Дом", callback_data='module_home')],
        [InlineKeyboardButton("⚖️ Юрист", callback_data='module_lawyer')],
        [InlineKeyboardButton("🐕 Животные", callback_data='module_pets')],
        [InlineKeyboardButton("✈️ Путешествия", callback_data='module_travel')],
        [InlineKeyboardButton("👶 Дети", callback_data='module_children')],
        [InlineKeyboardButton("🪖 Дрон", callback_data='module_drone')],
        [InlineKeyboardButton("🏕️ Выживание", callback_data='module_survival')],
        [InlineKeyboardButton("⚡ Энергия", callback_data='module_energy')],
        [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    update.message.reply_text(
        "📋 *Модули SOS UNIVERSAL:*\n\n"
        "Выбери нужный модуль для подробностей:",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )


def about_command(update: Update, context: CallbackContext):
    """Команда /about — информация о боте"""
    update.message.reply_text(
        f"🤖 *SOS UNIVERSAL Bot*\n\n"
        f"Версия: {BOT_VERSION}\n"
        f"Разработан для помощи в любых ситуациях\n"
        f"📱 Приложение: {APP_URL}\n\n"
        f"💡 *Команды:*\n"
        f"/start — Главное меню\n"
        f"/help — Инструкция\n"
        f"/demo — Демонстрация\n"
        f"/sos — Экстренная помощь\n"
        f"/modules — Все модули\n"
        f"/about — О боте",
        parse_mode='Markdown'
    )


# ============================================================
# ОБРАБОТЧИКИ КНОПОК
# ============================================================

def button_handler(update: Update, context: CallbackContext):
    """Обработка нажатий на кнопки"""
    query = update.callback_query
    query.answer()
    
    # --- ПОМОЩЬ ---
    if query.data == 'help':
        query.edit_message_text(
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
            f"📱 *Открыть:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)],
                [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
            ])
        )
    
    # --- SOS ---
    elif query.data == 'sos':
        query.edit_message_text(
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
            "• 🪨 Буквы SOS на земле\n\n"
            f"📱 *Открыть:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("🚨 Открыть SOS", url=APP_URL)]
            ])
        )
    
    # --- ВСЕ МОДУЛИ ---
    elif query.data == 'modules':
        keyboard = [
            [InlineKeyboardButton("🚗 Авто", callback_data='module_auto')],
            [InlineKeyboardButton("🏠 Дом", callback_data='module_home')],
            [InlineKeyboardButton("⚖️ Юрист", callback_data='module_lawyer')],
            [InlineKeyboardButton("🐕 Животные", callback_data='module_pets')],
            [InlineKeyboardButton("✈️ Путешествия", callback_data='module_travel')],
            [InlineKeyboardButton("👶 Дети", callback_data='module_children')],
            [InlineKeyboardButton("🪖 Дрон", callback_data='module_drone')],
            [InlineKeyboardButton("🏕️ Выживание", callback_data='module_survival')],
            [InlineKeyboardButton("⚡ Энергия", callback_data='module_energy')],
            [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)]
        ]
        reply_markup = InlineKeyboardMarkup(keyboard)
        
        query.edit_message_text(
            "📋 *Модули SOS UNIVERSAL:*\n\n"
            "Выбери нужный модуль для подробностей:",
            reply_markup=reply_markup,
            parse_mode='Markdown'
        )
    
    # --- ОТДЕЛЬНЫЕ МОДУЛИ (динамическая обработка) ---
    elif query.data.startswith('module_'):
        module_id = query.data.replace('module_', '')
        module = get_module_info(module_id)
        
        if module:
            query.edit_message_text(
                f"{module['emoji']} *Модуль {module['name']}*\n\n"
                f"Помощь при:\n"
                f"• {module['desc']}\n\n"
                f"📂 *Категории:* {module['categories']}\n\n"
                f"📱 *Открыть модуль:* {APP_URL}",
                parse_mode='Markdown',
                reply_markup=InlineKeyboardMarkup([
                    [InlineKeyboardButton(f"📱 Открыть {module['name']}", url=APP_URL)],
                    [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
                ])
            )
        else:
            query.edit_message_text(
                "❌ Модуль не найден",
                reply_markup=InlineKeyboardMarkup([
                    [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
                ])
            )


# ============================================================
# ОБРАБОТКА ОШИБОК
# ============================================================

def error_handler(update: Update, context: CallbackContext):
    """Обработчик ошибок"""
    logger.error(f"❌ Ошибка: {context.error}")
    
    if update and update.effective_message:
        update.effective_message.reply_text(
            "❌ Произошла ошибка. Пожалуйста, попробуйте позже.\n"
            "Если ошибка повторяется, сообщите разработчику."
        )


# ============================================================
# ГЛАВНАЯ ФУНКЦИЯ
# ============================================================

def main():
    """Запуск бота"""
    try:
        # Проверяем токен
        if not TOKEN or TOKEN == 'YOUR_TOKEN_HERE':
            logger.error("❌ Токен не настроен! Укажи TOKEN в config.py")
            print("❌ Токен не настроен! Укажи TOKEN в config.py")
            return
        
        # Создаём приложение
        updater = Updater(TOKEN, use_context=True)
        dp = updater.dispatcher
        
        # Регистрируем команды
        dp.add_handler(CommandHandler("start", start))
        dp.add_handler(CommandHandler("help", help_command))
        dp.add_handler(CommandHandler("demo", demo_command))
        dp.add_handler(CommandHandler("sos", sos_command))
        dp.add_handler(CommandHandler("modules", modules_command))
        dp.add_handler(CommandHandler("about", about_command))
        
        # Регистрируем обработчики
        dp.add_handler(CallbackQueryHandler(button_handler))
        dp.add_error_handler(error_handler)
        
        # Запуск
        logger.info(f"🤖 Бот SOS UNIVERSAL v{BOT_VERSION} запущен!")
        print(f"🤖 Бот SOS UNIVERSAL v{BOT_VERSION} запущен! Нажми Ctrl+C для остановки.")
        
        updater.start_polling()
        updater.idle()
        
    except KeyboardInterrupt:
        logger.info("🛑 Бот остановлен пользователем")
        print("🛑 Бот остановлен")
    except Exception as e:
        logger.error(f"❌ Ошибка при запуске: {e}")
        print(f"❌ Ошибка: {e}")


if __name__ == '__main__':
    main()