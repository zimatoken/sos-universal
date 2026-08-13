import logging
import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, CallbackQueryHandler, ContextTypes
from dotenv import load_dotenv

# Загружаем переменные из .env
load_dotenv()

TOKEN = os.getenv("TOKEN")
if not TOKEN:
    raise ValueError("❌ Токен не найден! Укажите TOKEN в .env или переменных окружения.")

APP_URL = "https://zimatoken.github.io/sos-universal/"

# Настройка логов
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# --- КОМАНДЫ ---
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)],
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
        "👉 *Открой прямо сейчас:*",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)],
        [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "🆘 *SOS UNIVERSAL* — 8 модулей помощи:\n\n"
        "🚗 Авто · 🏠 Дом · ⚖️ Юрист · 🐕 Животные\n"
        "✈️ Путешествия · 👶 Дети · 🪖 Дрон · 🏕️ Выживание\n\n"
        "💡 *Как работает:* отвечай на вопросы → получай решения.\n\n"
        f"📱 *Открыть:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

async def demo_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [[InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "📱 *Как пользоваться SOS UNIVERSAL:*\n\n"
        "1️⃣ Открой приложение\n"
        "2️⃣ Выбери модуль\n"
        "3️⃣ Ответь на 3-4 вопроса\n"
        "4️⃣ Получи пошаговые инструкции\n\n"
        "✅ *Всё просто и быстро!*\n"
        "📴 *Работает без интернета*\n\n"
        f"📱 *Попробуй сейчас:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

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
        "📱 Приложение отправит *SMS* с координатами.\n\n"
        "⚠️ *Сигналы бедствия:*\n"
        "• 3 огня в треугольнике\n"
        "• Зеркало для отражения солнца\n"
        "• Свисток (3 коротких)\n\n"
        f"📱 *Открыть:* {APP_URL}",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

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

async def about_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "🤖 *SOS UNIVERSAL Bot*\n\n"
        "Версия: 1.0\n"
        "Разработан для помощи в любых ситуациях.\n"
        "Исходный код: https://github.com/zimatoken/sos-universal\n"
        f"Приложение: {APP_URL}",
        parse_mode='Markdown'
    )

# --- ОБРАБОТЧИК КНОПОК ---
async def button_handler(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()
    data = query.data

    if data == 'help':
        text = (
            "🆘 *SOS UNIVERSAL* — 8 модулей помощи:\n\n"
            "🚗 Авто · 🏠 Дом · ⚖️ Юрист · 🐕 Животные\n"
            "✈️ Путешествия · 👶 Дети · 🪖 Дрон · 🏕️ Выживание\n\n"
            f"📱 *Открыть:* {APP_URL}"
        )
        keyboard = [
            [InlineKeyboardButton("📱 Открыть приложение", url=APP_URL)],
            [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
        ]
        await query.edit_message_text(text, parse_mode='Markdown', reply_markup=InlineKeyboardMarkup(keyboard))

    elif data == 'sos':
        text = (
            "🚨 *Если вы в опасности:*\n\n"
            "1️⃣ Открой *SOS UNIVERSAL*\n"
            "2️⃣ Нажми *SOS — Я в опасности*\n"
            "3️⃣ Введи телефон близкого человека\n"
            "4️⃣ Нажми *ОТПРАВИТЬ SOS*\n\n"
            f"📱 *Открыть:* {APP_URL}"
        )
        keyboard = [[InlineKeyboardButton("🚨 Открыть SOS", url=APP_URL)]]
        await query.edit_message_text(text, parse_mode='Markdown', reply_markup=InlineKeyboardMarkup(keyboard))

    elif data == 'modules':
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
        await query.edit_message_text(
            "📋 *Модули SOS UNIVERSAL:*\n\nВыбери нужный модуль:",
            parse_mode='Markdown',
            reply_markup=InlineKeyboardMarkup(keyboard)
        )

    elif data.startswith('module_'):
        module_name = data.replace('module_', '').capitalize()
        descriptions = {
            'auto': '🚗 *Авто* — ДТП, шины, аккумулятор, перегрев, тормоза',
            'home': '🏠 *Дом* — пожар, газ, электричество, сантехника, замки',
            'lawyer': '⚖️ *Юрист* — ДТП, жильё, трудовые споры, наследство, долги',
            'pets': '🐕 *Животные* — первая помощь, потеря, отравление, поведение',
            'travel': '✈️ *Путешествия* — документы, кража, здоровье, отель, рейс',
            'children': '👶 *Дети* — безопасность, буллинг, здоровье, травмы, потеря',
            'drone': '🪖 *Дрон* — подготовка, идентификация, связь, эвакуация',
            'survival': '🏕️ *Выживание* — вода, огонь, укрытие, еда, медицина, навигация'
        }
        text = descriptions.get(data.replace('module_', ''), f"*{module_name}* — модуль в разработке.")
        keyboard = [
            [InlineKeyboardButton("📱 Открыть модуль", url=APP_URL)],
            [InlineKeyboardButton("📋 Все модули", callback_data='modules')]
        ]
        await query.edit_message_text(text, parse_mode='Markdown', reply_markup=InlineKeyboardMarkup(keyboard))

# --- ГЛАВНАЯ ФУНКЦИЯ ---
def main():
    try:
        app = Application.builder().token(TOKEN).build()
    except Exception as e:
        logger.error(f"Ошибка при создании приложения: {e}")
        return

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("help", help_command))
    app.add_handler(CommandHandler("demo", demo_command))
    app.add_handler(CommandHandler("sos", sos_command))
    app.add_handler(CommandHandler("modules", modules_command))
    app.add_handler(CommandHandler("about", about_command))
    app.add_handler(CallbackQueryHandler(button_handler))

    logger.info("🤖 Бот SOS UNIVERSAL запущен!")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == '__main__':
    main()