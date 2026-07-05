<p align="center">
  <img src="https://raw.githubusercontent.com/InfernalShark/README-Builder/main/public/icon.png" alt="README Builder Logo" width="100" height="100" />
</p>

<h1 align="center">README Builder</h1>

<p align="center">
  <strong>A visual constructor for stunning GitHub profile README files</strong><br/>
  Dark-themed • Drag &amp; Drop • Live Preview • One-click Export
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
  <strong>🌐 English</strong> | <a href="./README.ru.md">🇷🇺 Русский язык (Russian Version)</a>
</p>

---

## ✨ What is README Builder?

**README Builder** is a free, open-source web application that lets you visually compose a beautiful GitHub profile `README.md` without writing a single line of markdown manually.

You pick a GitHub username, assemble blocks (Hero, Tech Stack, Stats, Repos, Social Links, etc.), drag them into the order you want, configure each one — and the app generates the perfect markdown in real time. Then export it with one click.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🎨 **Visual Block Editor** | Add, remove, reorder blocks with drag & drop |
| 👁 **Live Preview** | See the rendered README update instantly as you type |
| 📄 **Raw Markdown View** | Switch to see the raw `.md` source |
| 📋 **Copy to Clipboard** | Copy the full markdown with one click |
| ⬇️ **Download as .md** | Save the file directly to your computer |
| 🐙 **Publish to GitHub Gist** | Publish publicly via GitHub Gist API (secure modal, Bearer token) |
| 🌐 **English / Russian UI** | Full bilingual interface, persisted in browser cookies |
| 🌙 **Dark Theme** | Vercel/Linear aesthetic — deep black, thin borders, subtle glows |
| 🔄 **Drag & Drop** | Powered by `@dnd-kit/core` — smooth, accessible reordering |
| 🖼 **Live Image Preview** | Stats, streaks, trophies, badges render in real time |

---

## 🧱 Available Blocks

| Block | Description | Powered by |
|---|---|---|
| 🌊 **Wave Banner** | Waving header banner with dynamic styling | capsule-render |
| 🦸 **Hero** | Name + typing animation + subtitle + badge | readme-typing-svg + shields.io |
| 💻 **Tech Stack** | 30+ technologies — renders `for-the-badge` icons | shields.io |
| 📊 **GitHub Stats** | Commit stats card + top languages card | github-readme-stats |
| 📈 **Activity Graph** | Beautiful graphical chart of repository contributions | github-readme-activity-graph |
| 📌 **Top Repos** | Two pinned repository cards | github-readme-stats |
| 🌐 **Social Links** | Twitter, LinkedIn, Dev.to, Medium, Email, Website | shields.io |
| 🔥 **Streak** | Commit streak calendar graph | github-readme-streak-stats |
| 🏆 **Trophy** | GitHub trophy collection (configurable rows/cols) | github-profile-trophy |
| ✏️ **Custom Section** | Free-form Markdown textarea with presets (API Ref, FAQ, etc.) | — |

---

## 🖥 Screenshots

> _Run the app locally at `http://localhost:3000` after installation._

The interface is split into two panels:
- **Left panel** — Block list with drag handles, block library dropdown, per-block configurator, EN/RU language toggle
- **Right panel** — Live preview with Rendered / Raw tabs, Copy / Download / Publish Gist toolbar

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** `>= 18.0.0`
- **npm** `>= 9.0.0`
- A modern browser (Chrome, Firefox, Edge, Safari)

### 1. Clone the repository

```bash
git clone https://github.com/InfernalShark/README-Builder.git
cd README-Builder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production (optional)

```bash
npm run build
npm start
```

---

## 📖 How to Use — Step by Step

### Step 1 — Enter your GitHub username

In the **GitHub Username** field at the top of the left sidebar, type your GitHub handle (e.g. `torvalds`).

This username is automatically injected into all dynamic image URLs:
- `github-readme-stats.vercel.app/api?username=YOUR_NAME`
- `github-readme-streak-stats.herokuapp.com/?user=YOUR_NAME`
- `github-profile-trophy.vercel.app/?username=YOUR_NAME`

### Step 2 — Add blocks

Click **+ Add** (EN) or **+ Добавить** (RU) to open the block library. Click any block to add it to your active list.

### Step 3 — Reorder blocks

Grab any block by its **⠿ grip handle** on the left side and drag it to the desired position.

### Step 4 — Configure each block

Click any block in the list to select it — the **Settings** panel expands at the bottom of the sidebar with all options:
- **Hero**: display name, subtitle, description, badge text, toggle typing animation
- **Tech Stack**: checkbox grid of 30+ technologies
- **GitHub Stats**: theme selector (15 themes), show icons toggle, hide border toggle
- **Top Repos**: two repository name fields, theme selector
- **Social Links**: Twitter, LinkedIn, Dev.to, Medium, Email, Website URL
- **Streak**: theme selector
- **Trophy**: theme, rows, columns
- **Custom**: title + free markdown textarea + template selector (API Ref, Install, FAQ, etc.)

### Step 5 — Toggle visibility

Click the 👁 eye icon on any block to temporarily exclude it from the output without deleting it.

### Step 6 — Switch language

Click **EN** or **RU** in the top-right corner of the sidebar. The language is saved in a browser cookie and remembered across sessions.

### Step 7 — Export your README

In the right preview panel:

| Button | Action |
|---|---|
| **Rendered** tab | Shows styled preview (like GitHub renders it) |
| **Raw** tab | Shows the raw `.md` source |
| **Copy** | Copies markdown to clipboard |
| **Download** | Saves `README.md` to your computer |
| **Publish Gist** | Opens secure modal → enter PAT → publishes to GitHub Gist |

---

## 🐙 Publishing to GitHub Gist

1. Click **Publish Gist** / **Опубликовать** in the toolbar
2. A secure modal dialog opens (no browser `prompt()` — native custom UI)
3. Click **"How to get a token"** — opens GitHub Settings with `gist` scope pre-checked
4. Paste your token into the field and click **Publish**
5. A green success banner with a direct Gist link appears

> **🔒 Security note:** Your token is used exclusively for this single HTTPS request directly to `api.github.com`. It is **never stored**, **never logged**, and **never sent** to any third-party server.

---

## 🏗 Project Architecture

```
readme-generator/
├── app/
│   ├── layout.tsx             # Root layout: Inter font, SEO metadata, favicon
│   ├── page.tsx               # Main two-panel layout
│   └── globals.css            # Tailwind v4 base + custom scrollbars + animations
├── types/
│   └── blocks.ts              # Block types, config interfaces, defaults, constants
├── store/
│   ├── useReadmeStore.ts      # Zustand: blocks[], username, CRUD, reorder
│   └── useLanguageStore.ts    # Zustand: lang ('en'|'ru') → cookie 'readme_lang'
├── lib/
│   ├── i18n.ts                # 60+ translation keys for EN and RU
│   ├── cookies.ts             # getCookie / setCookie helpers
│   ├── markdownGenerator.ts   # Pure fn: (username, blocks[]) → markdown string
│   └── utils.ts               # cn() tailwind-merge helper
└── components/
    ├── editor/
    │   ├── Sidebar.tsx            # Username, dnd-kit sortable list, block library
    │   └── BlockConfigurator.tsx  # Per-block config forms with i18n labels
    ├── preview/
    │   └── MarkdownPreview.tsx    # Rendered/Raw tabs, Copy/Download/Gist
    └── ui/
        ├── Button.tsx      # Variants: primary | ghost | danger | outline
        ├── Input.tsx       # Text input with label, icon, hint
        ├── Toggle.tsx      # On/off switch
        ├── LangToggle.tsx  # EN / RU language switcher with cookie persistence
        └── GistModal.tsx   # Secure Gist modal (PAT input, show/hide, link)
```

---

## 🛠 Tech Stack

| Technology | Version | Role |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | Framework (App Router, Turbopack dev) |
| [TypeScript](https://typescriptlang.org) | 5 | Full type safety |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Styling with dark-first design |
| [Zustand](https://github.com/pmndrs/zustand) | 5 | Global state (blocks + language) |
| [@dnd-kit](https://dndkit.com) | 6 | Accessible drag-and-drop |
| [react-markdown](https://github.com/remarkjs/react-markdown) | 9 | Markdown → React rendering |
| [remark-gfm](https://github.com/remarkjs/remark-gfm) | 4 | GitHub Flavored Markdown plugin |
| [rehype-raw](https://github.com/rehypejs/rehype-raw) | 7 | Raw HTML rendering (badges, images) |
| [lucide-react](https://lucide.dev) | latest | Icon library |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Class merging utility |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss.

1. Fork this repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📜 License

MIT © [InfernalShark](https://github.com/InfernalShark)
