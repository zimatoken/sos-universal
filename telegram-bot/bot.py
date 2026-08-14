import logging
import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes
from config import TOKEN, APP_URL

# Настройка логов
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# --- КОМАНДЫ БОТА ---

# Команда /start
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)],
        [InlineKeyboardButton("📱 Скачать PWA", url=APP_URL)],
        [InlineKeyboardButton("🆘 SOS — инструкция", callback_data='sos')],
        [InlineKeyboardButton("📖 Модули и помощь", callback_data='help')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "🆘 *SOS UNIVERSAL* — твой универсальный ассистент в любой ситуации!\n\n"
        "📱 Приложение работает *без интернета*.\n"
        "🗺️ 8 модулей для разных жизненных ситуаций.\n"
        "🌍 Русский и английский языки.\n"
        "📴 Полностью офлайн.\n\n"
        "🚗 *Авто* — поломки, ДТП\n"
        "🏠 *Дом* — аварии, безопасность\n"
        "⚖️ *Юрист* — права, документы\n"
        "🐕 *Животные* — первая помощь питомцам\n"
        "✈️ *Путешествия* — документы, утеря\n"
        "👶 *Дети* — безопасность, здоровье\n"
        "🪖 *Дрон* — инструкции\n"
        "🏕️ *Выживание* — вода, огонь, еда\n\n"
        "👉 *Открой прямо сейчас:*",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# Команда /help
async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)],
        [InlineKeyboardButton("🆘 SOS", callback_data='sos')],
        [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "🆘 *SOS UNIVERSAL* — 8 модулей помощи:\n\n"
        "🚗 *Авто* — поломки, ДТП, шины, аккумулятор\n"
        "🏠 *Дом* — пожар, газ, электричество, сантехника\n"
        "⚖️ *Юрист* — ДТП, жильё, наследство, развод\n"
        "🐕 *Животные* — первая помощь, потеря, отравление\n"
        "✈️ *Путешествия* — документы, кража, здоровье\n"
        "👶 *Дети* — безопасность, буллинг, потеря\n"
        "🪖 *Дрон* — инструкции, первая помощь\n"
        "🏕️ *Выживание* — вода, огонь, еда, укрытие\n\n"
        "💡 *Как работает:* отвечай на вопросы → получай решения\n\n"
        f"📱 *Открыть:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# Команда /demo — как пользоваться
async def demo_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "📱 *Как пользоваться SOS UNIVERSAL:*\n\n"
        "1️⃣ Открой приложение\n"
        "2️⃣ Выбери модуль (Авто, Дом, Юрист...)\n"
        "3️⃣ Ответь на 3-4 вопроса\n"
        "4️⃣ Получи 2-5 решений с пошаговыми инструкциями\n\n"
        "✅ *Всё просто и быстро!*\n"
        "📴 *Работает без интернета*\n"
        "🌍 *На русском и английском*\n\n"
        f"📱 *Попробуй сейчас:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# Команда /sos — экстренная помощь
async def sos_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("🚨 Открыть SOS в приложении", url=APP_URL)],
        [InlineKeyboardButton("📱 Скачать приложение", url=APP_URL)]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "🚨 *Если вы в опасности:*\n\n"
        "1️⃣ Открой *SOS UNIVERSAL*\n"
        "2️⃣ Нажми *SOS — Я в опасности*\n"
        "3️⃣ Введи телефон близкого человека\n"
        "4️⃣ Нажми *ОТПРАВИТЬ SOS*\n\n"
        "📱 Приложение отправит *SMS* с вашими координатами и ссылкой на карту.\n\n"
        "⚠️ *Если связи нет* — используйте сигналы:\n"
        "• 3 огня в треугольнике (международный сигнал)\n"
        "• Зеркало для отражения солнца\n"
        "• Свисток (3 коротких звука)\n"
        "• Буквы SOS на земле (камни, ветки)\n\n"
        f"📱 *Открыть приложение:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# Команда /modules — список модулей
async def modules_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("🚗 Авто", callback_data='module_auto')],
        [InlineKeyboardButton("🏠 Дом", callback_data='module_home')],
        [InlineKeyboardButton("⚖️ Юрист", callback_data='module_lawyer')],
        [InlineKeyboardButton("🐕 Животные", callback_data='module_pets')],
        [InlineKeyboardButton("✈️ Путешествия", callback_data='module_travel')],
        [InlineKeyboardButton("👶 Дети", callback_data='module_children')],
        [InlineKeyboardButton("🪖 Дрон", callback_data='module_drone')],
        [InlineKeyboardButton("🏕️ Выживание", callback_data='module_survival')],
        [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "📋 *Модули SOS UNIVERSAL:*\n\n"
        "Выбери нужный модуль, чтобы узнать подробности:",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

# Команда /about — информация о боте
async def about_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "🤖 *SOS UNIVERSAL Bot*\n\n"
        "Версия: 2.0\n"
        "Разработан для помощи в любых ситуациях.\n"
        "Исходный код: https://github.com/zimatoken/sos-universal\n"
        f"Приложение: {APP_URL}",
        parse_mode='Markdown'
    )

# --- ОБРАБОТЧИКИ КНОПОК ---

async def button_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    
    # --- ПОМОЩЬ ---
    if query.data == 'help':
        await query.edit_message_text(
            "🆘 *SOS UNIVERSAL* — 8 модулей помощи:\n\n"
            "🚗 *Авто* — поломки, ДТП, шины, аккумулятор\n"
            "🏠 *Дом* — пожар, газ, электричество, сантехника\n"
            "⚖️ *Юрист* — ДТП, жильё, наследство, развод\n"
            "🐕 *Животные* — первая помощь, потеря, отравление\n"
            "✈️ *Путешествия* — документы, кража, здоровье\n"
            "👶 *Дети* — безопасность, буллинг, потеря\n"
            "🪖 *Дрон* — инструкции, первая помощь\n"
            "🏕️ *Выживание* — вода, огонь, еда, укрытие\n\n"
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
        await query.edit_message_text(
            "🚨 *Если вы в опасности:*\n\n"
            "1️⃣ Открой *SOS UNIVERSAL*\n"
            "2️⃣ Нажми *SOS — Я в опасности*\n"
            "3️⃣ Введи телефон близкого человека\n"
            "4️⃣ Нажми *ОТПРАВИТЬ SOS*\n\n"
            "📱 Приложение отправит *SMS* с координатами.\n\n"
            "⚠️ *Сигналы бедствия:*\n"
            "• 3 огня в треугольнике\n"
            "• Зеркало для отражения солнца\n"
            "• Свисток (3 коротких звука)\n\n"
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
            [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)]
        ]
        reply_markup = InlineKeyboardMarkup(keyboard)
        
        await query.edit_message_text(
            "📋 *Модули SOS UNIVERSAL:*\n\n"
            "Выбери нужный модуль, чтобы узнать подробности:",
            reply_markup=reply_markup,
            parse_mode='Markdown'
        )
    
    # --- ОТДЕЛЬНЫЕ МОДУЛИ ---
    elif query.data == 'module_auto':
        await query.edit_message_text(
            "🚗 *Модуль АВТО*\n\n"
            "Помощь при:\n"
            "• ДТП (авария)\n"
            "• Прокол шины\n"
            "• Разряженный аккумулятор\n"
            "• Перегрев двигателя\n"
            "• Утечка жидкостей\n"
            "• Отказ тормозов\n"
            "• Автомобиль не заводится\n\n"
            f"📱 *Открыть модуль:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("📱 Открыть Авто", url=APP_URL)],
                [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
            ])
        )
    
    elif query.data == 'module_home':
        await query.edit_message_text(
            "🏠 *Модуль ДОМ*\n\n"
            "Помощь при:\n"
            "• Пожар в квартире/доме\n"
            "• Утечка газа\n"
            "• Проблемы с электричеством\n"
            "• Засор/утечка воды\n"
            "• Сломанный замок\n"
            "• Отопление\n"
            "• Природные ЧС\n\n"
            f"📱 *Открыть модуль:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("📱 Открыть Дом", url=APP_URL)],
                [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
            ])
        )
    
    elif query.data == 'module_lawyer':
        await query.edit_message_text(
            "⚖️ *Модуль ЮРИСТ*\n\n"
            "Помощь при:\n"
            "• ДТП (оформление)\n"
            "• Жилищные вопросы\n"
            "• Трудовые споры\n"
            "• Наследство\n"
            "• Долги\n"
            "• Развод\n"
            "• Защита прав потребителей\n\n"
            f"📱 *Открыть модуль:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("📱 Открыть Юрист", url=APP_URL)],
                [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
            ])
        )
    
    elif query.data == 'module_pets':
        await query.edit_message_text(
            "🐕 *Модуль ЖИВОТНЫЕ*\n\n"
            "Помощь при:\n"
            "• Первая помощь питомцу\n"
            "• Потеря животного\n"
            "• Отравление\n"
            "• Поведенческие проблемы\n"
            "• Здоровье питомца\n"
            "• Экстренные ситуации\n"
            "• Уход за животным\n\n"
            f"📱 *Открыть модуль:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("📱 Открыть Животные", url=APP_URL)],
                [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
            ])
        )
    
    elif query.data == 'module_travel':
        await query.edit_message_text(
            "✈️ *Модуль ПУТЕШЕСТВИЯ*\n\n"
            "Помощь при:\n"
            "• Потеря документов\n"
            "• Кража денег/вещей\n"
            "• Проблемы со здоровьем\n"
            "• Задержка/отмена рейса\n"
            "• Проблемы с отелем\n"
            "• Потеря багажа\n\n"
            f"📱 *Открыть модуль:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("📱 Открыть Путешествия", url=APP_URL)],
                [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
            ])
        )
    
    elif query.data == 'module_children':
        await query.edit_message_text(
            "👶 *Модуль ДЕТИ*\n\n"
            "Помощь при:\n"
            "• Безопасность ребёнка\n"
            "• Буллинг в школе\n"
            "• Здоровье ребёнка\n"
            "• Травмы\n"
            "• Потеря ребёнка\n"
            "• Интернет-безопасность\n\n"
            f"📱 *Открыть модуль:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("📱 Открыть Дети", url=APP_URL)],
                [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
            ])
        )
    
    elif query.data == 'module_drone':
        await query.edit_message_text(
            "🪖 *Модуль ДРОН*\n\n"
            "Помощь при:\n"
            "• Подготовка к полёту\n"
            "• Идентификация объектов\n"
            "• Связь и сигналы\n"
            "• Эвакуация\n"
            "• Первая помощь\n"
            "• Укрытие и маскировка\n"
            "• Обнаружение\n\n"
            f"📱 *Открыть модуль:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("📱 Открыть Дрон", url=APP_URL)],
                [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
            ])
        )
    
    elif query.data == 'module_survival':
        await query.edit_message_text(
            "🏕️ *Модуль ВЫЖИВАНИЕ*\n\n"
            "Помощь при:\n"
            "• Вода — добыча и очистка\n"
            "• Огонь — разведение в любых условиях\n"
            "• Укрытие — защита от непогоды\n"
            "• Еда — добыча в дикой природе\n"
            "• Медицина — первая помощь\n"
            "• Навигация — ориентирование\n"
            "• Связь — сигналы и связь\n"
            "• Чемоданчик — чек-листы\n\n"
            f"📱 *Открыть модуль:* {APP_URL}",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup([
                [InlineKeyboardButton("📱 Открыть Выживание", url=APP_URL)],
                [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
            ])
        )

# --- ГЛАВНАЯ ФУНКЦИЯ ---

def main():
    try:
        # Пытаемся создать приложение
        app = Application.builder().token(TOKEN).build()
        logger.info("✅ Приложение успешно создано")
    except Exception as e:
        logger.error(f"❌ Ошибка при создании приложения: {e}")
        logger.error("Проверьте токен в config.py и интернет-соединение.")
        return
    
    # Регистрируем команды
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("demo", demo_command))
    app.add_handler(CommandHandler("sos", sos_command))
    app.add_handler(CommandHandler("modules", modules_command))
    app.add_handler(CommandHandler("about", about_command))
    
    # Регистрируем обработчик кнопок
    app.add_handler(CallbackQueryHandler(button_handler))
    
    # Запуск
    logger.info("🤖 Бот SOS UNIVERSAL запущен! Нажми Ctrl+C для остановки.")
    print("🤖 Бот SOS UNIVERSAL запущен! Нажми Ctrl+C для остановки.")
    
    try:
        app.run_polling(allowed_updates=Update.ALL_TYPES)
    except Exception as e:
        logger.error(f"❌ Ошибка при запуске polling: {e}")
        print(f"❌ Ошибка: {e}")

if __name__ == '__main__':
    main()