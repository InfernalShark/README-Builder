<p align="center">
  <img src="https://raw.githubusercontent.com/InfernalShark/README-Builder/main/public/icon.png" alt="README Builder Logo" width="100" height="100" />
</p>

<h1 align="center">README Builder</h1>

<p align="center">
  <strong>Визуальный конструктор эстетичных GitHub-профилей README</strong><br/>
  Тёмная тема • Drag &amp; Drop • Live Preview • Экспорт одним кликом
</p>

<p align="center">
  <a href="https://github.com/InfernalShark/README-Builder">
    <img src="https://img.shields.io/badge/GitHub-InfernalShark-6366F1?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Zustand-state-FF6B35?style=for-the-badge" alt="Zustand" />
</p>

<p align="center">
  <strong>🌐 Русский</strong> | <a href="./README.md">🇬🇧 English Version (Английская версия)</a>
</p>

---

## ✨ Что такое README Builder?

**README Builder** — это бесплатное веб-приложение с открытым исходным кодом, которое позволяет визуально создавать красивый профиль `README.md` на GitHub без написания markdown вручную.

Вы вводите GitHub-никнейм, собираете блоки (Шапка, Технологии, Статистика, Репозитории, Соцсети и т.д.), перетаскиваете их в нужном порядке, настраиваете каждый — и приложение в реальном времени генерирует готовый markdown. Экспортируете одним кликом.

---

## 🚀 Возможности

| Функция | Описание |
|---|---|
| 🎨 **Визуальный редактор блоков** | Добавляйте, удаляйте, переставляйте блоки через drag & drop |
| 👁 **Live Preview** | Видите отрендеренный README в реальном времени |
| 📄 **Просмотр исходного кода** | Вкладка "Исходник" для сырого markdown |
| 📋 **Копировать в буфер** | Копирование полного markdown одним кликом |
| ⬇️ **Скачать как .md** | Сохраните файл прямо на компьютер |
| 🐙 **Публикация в GitHub Gist** | Публикация через Gist API (безопасный модал, Bearer-токен) |
| 🌐 **EN / RU интерфейс** | Полноценный двуязычный интерфейс с сохранением в куки браузера |
| 🌙 **Тёмная тема** | Эстетика Vercel/Linear — глубокий чёрный, тонкие бордеры |
| 🔄 **Drag & Drop** | На базе `@dnd-kit/core` — плавная, доступная сортировка |
| 🖼 **Live рендер изображений** | Статистика, серии, трофеи, бейджи рендерятся в реальном времени |

---

## 🧱 Доступные блоки

| Блок | Описание | Основан на |
|---|---|---|
| 🌊 **Волнистый баннер** | Декоративный баннер capsule-render с настройкой стиля и цвета | capsule-render |
| 🦸 **Шапка (Hero)** | Имя + анимация набора текста + подзаголовок + бейдж | readme-typing-svg + shields.io |
| 💻 **Технологии** | 30+ технологий — рендерит иконки `for-the-badge` | shields.io |
| 📊 **GitHub Статистика** | Карточка статистики + топ языки | github-readme-stats |
| 📈 **График активности** | Красивый график вашей активности в репозиториях | github-readme-activity-graph |
| 📌 **Топ репозитории** | Две карточки закреплённых репозиториев | github-readme-stats |
| 🌐 **Соцсети** | Twitter, LinkedIn, Dev.to, Medium, Email, Сайт | shields.io |
| 🔥 **Серия коммитов** | Календарный граф серии коммитов | github-readme-streak-stats |
| 🏆 **Трофеи** | Коллекция трофеев GitHub (настраиваемые строки/столбцы) | github-profile-trophy |
| ✏️ **Свой раздел** | Свободное поле с шаблонами (API Ref, Установка, FAQ и т.д.) | — |

---

## ⚡ Быстрый старт

### Требования

- **Node.js** `>= 18.0.0`
- **npm** `>= 9.0.0`
- Современный браузер (Chrome, Firefox, Edge, Safari)

### 1. Клонировать репозиторий

```bash
git clone https://github.com/InfernalShark/README-Builder.git
cd README-Builder
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Запустить сервер разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### 4. Сборка для продакшена (опционально)

```bash
npm run build
npm start
```

---

## 📖 Пошаговая инструкция

### Шаг 1 — Введите GitHub никнейм

В поле **GitHub Никнейм** в верхней части левой панели введите ваш GitHub-логин (например `torvalds`).

Никнейм автоматически подставляется во все динамические URL:
- `github-readme-stats.vercel.app/api?username=ВАШ_НИК`
- `github-readme-streak-stats.herokuapp.com/?user=ВАШ_НИК`
- `github-profile-trophy.vercel.app/?username=ВАШ_НИК`

### Шаг 2 — Добавьте блоки

Нажмите **+ Добавить** чтобы открыть библиотеку блоков. Кликните любой блок для добавления.

### Шаг 3 — Измените порядок

Перетащите блок за **⠿ ручку** слева для изменения порядка.

### Шаг 4 — Настройте блок

Кликните блок в списке — панель **Настройки** откроется внизу сайдбара:
- **Шапка**: имя, подзаголовок, описание, текст бейджа, анимация
- **Технологии**: чекбоксы 30+ технологий
- **Статистика**: 15 тем оформления, переключатели иконок/бордера
- **Топ репозитории**: два поля с именем репозитория, тема
- **Соцсети**: Twitter, LinkedIn, Dev.to, Medium, Email, URL сайта
- **Серия коммитов**: тема оформления
- **Трофеи**: тема, строки, столбцы
- **Свой раздел**: заголовок + свободное markdown-поле + выбор готовых шаблонов

### Шаг 5 — Переключите видимость

Нажмите иконку 👁 на блоке чтобы временно исключить его из вывода не удаляя.

### Шаг 6 — Переключите язык

Нажмите **EN** или **RU** в правом верхнем углу сайдбара. Язык сохраняется в куки браузера.

### Шаг 7 — Экспортируйте README

| Кнопка | Действие |
|---|---|
| Вкладка **Предпросмотр** | Отрендеренный вид (как GitHub показывает README) |
| Вкладка **Исходник** | Сырой `.md` исходный код |
| **Копировать** | Копирует markdown в буфер обмена |
| **Скачать** | Сохраняет `README.md` на компьютер |
| **Опубликовать** | Открывает модал → введите PAT → публикует в GitHub Gist |

---

## 🐙 Публикация в GitHub Gist

1. Нажмите **Опубликовать** в тулбаре
2. Открывается безопасное модальное окно (без браузерного `prompt()`)
3. Нажмите **"Как получить токен"** — откроется страница GitHub Settings с предустановленной областью `gist`
4. Вставьте токен и нажмите **Опубликовать**
5. Зелёный баннер с прямой ссылкой на Gist появится сверху

> **🔒 Безопасность:** Токен используется исключительно для одного HTTPS-запроса напрямую к `api.github.com`. Он **нигде не сохраняется**, **не логируется** и **не передаётся** ни на какой сторонний сервер.

---

## 🏗 Архитектура проекта

```
readme-generator/
├── app/
│   ├── layout.tsx             # Корневой layout: шрифт Inter, SEO, фавикон
│   ├── page.tsx               # Основная двухпанельная страница
│   └── globals.css            # Tailwind v4 + кастомные скроллбары
├── types/
│   └── blocks.ts              # Типы блоков, интерфейсы конфигов, дефолты
├── store/
│   ├── useReadmeStore.ts      # Zustand: blocks[], username, CRUD, порядок
│   └── useLanguageStore.ts    # Zustand: lang → куки 'readme_lang'
├── lib/
│   ├── i18n.ts                # 60+ ключей перевода EN/RU
│   ├── cookies.ts             # getCookie / setCookie
│   ├── markdownGenerator.ts   # (username, blocks[]) → строка markdown
│   └── utils.ts               # cn() для tailwind-merge
└── components/
    ├── editor/
    │   ├── Sidebar.tsx            # Ввод никнейма, dnd-kit список, библиотека
    │   └── BlockConfigurator.tsx  # Формы настройки с i18n
    ├── preview/
    │   └── MarkdownPreview.tsx    # Вкладки Rendered/Raw, экспорт
    └── ui/
        ├── Button.tsx      # primary | ghost | danger | outline
        ├── Input.tsx       # Поле с лейблом, иконкой, подсказкой
        ├── Toggle.tsx      # Переключатель вкл/выкл
        ├── LangToggle.tsx  # EN / RU с сохранением в куки
        └── GistModal.tsx   # Безопасный модал для GitHub PAT
```

---

## 🛠 Технологии

| Технология | Версия | Роль |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | Фреймворк (App Router, Turbopack) |
| [TypeScript](https://typescriptlang.org) | 5 | Полная типизация |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Стилизация |
| [Zustand](https://github.com/pmndrs/zustand) | 5 | Глобальный стейт |
| [@dnd-kit](https://dndkit.com) | 6 | Drag-and-drop |
| [react-markdown](https://github.com/remarkjs/react-markdown) | 9 | Рендеринг markdown |
| [remark-gfm](https://github.com/remarkjs/remark-gfm) | 4 | GitHub Flavored Markdown |
| [rehype-raw](https://github.com/rehypejs/rehype-raw) | 7 | HTML в markdown |
| [lucide-react](https://lucide.dev) | latest | Иконки |

---

## 🤝 Участие в разработке

Pull-запросы приветствуются! Для крупных изменений откройте issue.

1. Форкните репозиторий
2. Создайте ветку: `git checkout -b feature/моя-функция`
3. Коммит: `git commit -m 'feat: добавил функцию'`
4. Push: `git push origin feature/моя-функция`
5. Откройте Pull Request

---

## 📜 Лицензия

MIT © [InfernalShark](https://github.com/InfernalShark)
