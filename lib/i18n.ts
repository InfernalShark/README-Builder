import { getCookie, setCookie } from '@/lib/cookies';

export type Lang = 'en' | 'ru';

export const translations = {
  en: {
    // App header
    appName: 'README Builder',
    appSubtitle: 'GitHub Profile Generator',

    // Sidebar sections
    githubUsername: 'GitHub Username',
    usernamePlaceholder: 'e.g. torvalds',
    usernameHint: 'Used to generate stats & badges',
    blocks: 'Blocks',
    addBlock: 'Add',
    blockSettings: 'Settings',
    selectBlockHint: 'Select a block to configure it',
    noBlocks: 'Add a block to get started',

    // Block library
    addBlockTitle: 'Add Block',

    // Block labels
    wave: 'Wave Banner',
    hero: 'Hero',
    techstack: 'Tech Stack',
    stats: 'GitHub Stats',
    graph: 'Activity Graph',
    toprepos: 'Top Repos',
    social: 'Social Links',
    streak: 'Streak',
    trophy: 'Trophy',
    custom: 'Custom Section',

    // Block descriptions
    waveDesc: 'Waving SVG header banner',
    heroDesc: 'Name, subtitle & intro',
    techstackDesc: 'Shields.io badges',
    statsDesc: 'Stats card',
    graphDesc: 'Beautiful activity chart',
    topreposDesc: 'Pinned repo cards',
    socialDesc: 'Twitter, LinkedIn…',
    streakDesc: 'Commit streak graph',
    trophyDesc: 'GitHub trophies',
    customDesc: 'Free-form Markdown',

    // Wave config
    waveText: 'Banner Text',
    waveColor: 'Banner Color',
    waveHeight: 'Banner Height (px)',
    waveStyle: 'Wave Style',
    waveAnimation: 'Animation Style',

    // Hero config
    displayName: 'Display Name',
    subtitle: 'Subtitle',
    description: 'Description',
    badgeText: 'Badge Text',
    typingAnimation: 'Typing animation',
    showBadge: 'Show badge',

    // TechStack config
    selectTechnologies: 'Select Technologies',

    // Stats config
    theme: 'Theme',
    showIcons: 'Show icons',
    hideBorder: 'Hide border',
    includeAllCommits: 'Include all commits',

    // TopRepos config
    repository1: 'Repository 1',
    repository2: 'Repository 2',

    // Social config
    twitterHandle: 'Twitter Handle',
    linkedinUsername: 'LinkedIn Username',
    devtoUsername: 'Dev.to Username',
    mediumUsername: 'Medium Username',
    email: 'Email',
    websiteUrl: 'Website URL',

    // Trophy config
    rows: 'Rows',
    columns: 'Columns',

    // Custom config
    sectionTitle: 'Section Title',
    markdownContent: 'Markdown Content',
    markdownPlaceholder: 'Write any markdown here...',

    // Templates
    templates: 'Section Templates',
    selectTemplate: 'Load a standard template...',
    tplApiRef: 'API Reference',
    tplInstallation: 'Installation',
    tplFAQ: 'FAQ',
    tplContributing: 'Contributing',
    tplLicense: 'License',

    // Preview toolbar
    rendered: 'Rendered',
    raw: 'Raw',
    copy: 'Copy',
    copied: 'Copied!',
    download: 'Download',
    publishGist: 'Publish Gist',
    publishing: 'Publishing…',

    // Gist modal
    gistModalTitle: 'Publish to GitHub Gist',
    gistModalDesc: 'Enter your GitHub Personal Access Token with',
    gistModalScope: 'gist scope',
    gistModalSecure: 'Your token is used only for this single request and is never stored anywhere.',
    gistModalToken: 'Personal Access Token',
    gistModalTokenPlaceholder: 'ghp_xxxxxxxxxxxxxxxxxxxx',
    gistModalPublish: 'Publish',
    gistModalCancel: 'Cancel',
    gistModalPublishing: 'Publishing…',
    gistModalHowTo: 'How to get a token',

    // Gist status
    published: 'Published!',
    viewGist: 'View Gist',

    // Empty state
    noContent: 'No content yet',
    noContentHint: 'Enter your GitHub username and add some blocks to get started',

    // Block actions
    hideBlock: 'Hide block',
    showBlock: 'Show block',
    removeBlock: 'Remove block',

    // Language toggle
    language: 'Language',

    // Reset workspace
    resetWorkspace: 'Reset Workspace',
    resetConfirm: 'Are you sure you want to reset the workspace? This will delete all your edits.',
  },
  ru: {
    // App header
    appName: 'README Builder',
    appSubtitle: 'Генератор GitHub-профиля',

    // Sidebar sections
    githubUsername: 'GitHub Никнейм',
    usernamePlaceholder: 'например torvalds',
    usernameHint: 'Используется для генерации статистики',
    blocks: 'Блоки',
    addBlock: 'Добавить',
    blockSettings: 'Настройки',
    selectBlockHint: 'Выберите блок для настройки',
    noBlocks: 'Добавьте блок для начала работы',

    // Block library
    addBlockTitle: 'Добавить блок',

    // Block labels
    wave: 'Волнистый баннер',
    hero: 'Шапка',
    techstack: 'Технологии',
    stats: 'GitHub Статистика',
    graph: 'График активности',
    toprepos: 'Топ репозитории',
    social: 'Соцсети',
    streak: 'Серия коммитов',
    trophy: 'Трофеи',
    custom: 'Свой раздел',

    // Block descriptions
    waveDesc: 'Декоративный заголовок capsule-render',
    heroDesc: 'Имя, должность и описание',
    techstackDesc: 'Бейджи Shields.io',
    statsDesc: 'Карточка статистики',
    graphDesc: 'Красивый график вашей активности',
    topreposDesc: 'Закреплённые репозитории',
    socialDesc: 'Twitter, LinkedIn…',
    streakDesc: 'График серии коммитов',
    trophyDesc: 'Трофеи GitHub',
    customDesc: 'Свободный Markdown',

    // Wave config
    waveText: 'Текст баннера',
    waveColor: 'Цвет баннера',
    waveHeight: 'Высота баннера (px)',
    waveStyle: 'Стиль волны',
    waveAnimation: 'Анимация',

    // Hero config
    displayName: 'Отображаемое имя',
    subtitle: 'Подзаголовок',
    description: 'Описание',
    badgeText: 'Текст бейджа',
    typingAnimation: 'Анимация набора текста',
    showBadge: 'Показывать бейдж',

    // TechStack config
    selectTechnologies: 'Выберите технологии',

    // Stats config
    theme: 'Тема',
    showIcons: 'Показывать иконки',
    hideBorder: 'Скрыть границу',
    includeAllCommits: 'Включить все коммиты',

    // TopRepos config
    repository1: 'Репозиторий 1',
    repository2: 'Репозиторий 2',

    // Social config
    twitterHandle: 'Никнейм Twitter',
    linkedinUsername: 'Никнейм LinkedIn',
    devtoUsername: 'Никнейм Dev.to',
    mediumUsername: 'Никнейм Medium',
    email: 'Email',
    websiteUrl: 'URL сайта',

    // Trophy config
    rows: 'Строки',
    columns: 'Столбцы',

    // Custom config
    sectionTitle: 'Название раздела',
    markdownContent: 'Markdown-содержимое',
    markdownPlaceholder: 'Напишите любой markdown здесь...',

    // Templates
    templates: 'Шаблоны разделов',
    selectTemplate: 'Загрузить стандартный шаблон...',
    tplApiRef: 'API Референс',
    tplInstallation: 'Установка',
    tplFAQ: 'Вопросы и ответы (FAQ)',
    tplContributing: 'Участие в разработке',
    tplLicense: 'Лицензия',

    // Preview toolbar
    rendered: 'Предпросмотр',
    raw: 'Исходник',
    copy: 'Копировать',
    copied: 'Скопировано!',
    download: 'Скачать',
    publishGist: 'Опубликовать',
    publishing: 'Публикация…',

    // Gist modal
    gistModalTitle: 'Опубликовать в GitHub Gist',
    gistModalDesc: 'Введите GitHub Personal Access Token с областью',
    gistModalScope: 'gist',
    gistModalSecure: 'Токен используется только для этого запроса и нигде не сохраняется.',
    gistModalToken: 'Personal Access Token',
    gistModalTokenPlaceholder: 'ghp_xxxxxxxxxxxxxxxxxxxx',
    gistModalPublish: 'Опубликовать',
    gistModalCancel: 'Отмена',
    gistModalPublishing: 'Публикация…',
    gistModalHowTo: 'Как получить токен',

    // Gist status
    published: 'Опубликовано!',
    viewGist: 'Открыть Gist',

    // Empty state
    noContent: 'Пока ничего нет',
    noContentHint: 'Введите GitHub никнейм и добавьте блоки чтобы начать',

    // Block actions
    hideBlock: 'Скрыть блок',
    showBlock: 'Показать блок',
    removeBlock: 'Удалить блок',

    // Language toggle
    language: 'Язык',

    // Reset workspace
    resetWorkspace: 'Сбросить рабочую область',
    resetConfirm: 'Вы уверены, что хотите сбросить рабочую область? Это удалит все ваши изменения.',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function getInitialLang(): Lang {
  if (typeof document === 'undefined') return 'en';
  const cookie = getCookie('readme_lang');
  if (cookie === 'ru' || cookie === 'en') return cookie;
  // Auto-detect from browser
  const nav = navigator.language.toLowerCase();
  return nav.startsWith('ru') ? 'ru' : 'en';
}

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] as string;
}
