import {
  ReadmeBlock,
  HeroConfig,
  TechStackConfig,
  StatsConfig,
  TopReposConfig,
  SocialConfig,
  StreakConfig,
  TrophyConfig,
  WaveConfig,
  GraphConfig,
  CustomConfig,
  TECHNOLOGIES,
} from '@/types/blocks';

// ─── Wave Banner ─────────────────────────────────────────────────────────────
function generateWaveBanner(block: ReadmeBlock, username: string): string {
  if (!username) return '';
  const cfg = block.config as WaveConfig;
  const theme = cfg.theme || 'waving';
  const color = cfg.color || '6366F1';
  const height = cfg.height || 120;
  const text = cfg.text || username;
  const anim = cfg.animation || 'fadeIn';
  return [
    `<p align="center">`,
    `  <img width="100%" src="https://capsule-render.vercel.app/api?type=${theme}&color=${color}&height=${height}&section=header&text=${encodeURIComponent(text)}&fontSize=30&fontColor=ffffff&animation=${anim}" />`,
    `</p>`,
    ``,
  ].join('\n');
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function generateHero(block: ReadmeBlock, username: string): string {
  const cfg = block.config as HeroConfig;
  const name = cfg.name || username || 'Your Name';
  const lines: string[] = [];

  if (cfg.showTypingAnim) {
    const typingText = encodeURIComponent(`Hi there 👋 I'm ${name}`);
    lines.push(
      `<p align="center">`,
      `  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=6366F1&center=true&vCenter=true&width=435&lines=${typingText}" alt="Typing SVG" />`,
      `</p>`,
      ``
    );
  } else {
    lines.push(`# Hi there 👋 I'm ${name}`, ``);
  }

  if (cfg.showBadge && cfg.badgeText) {
    lines.push(
      `<p align="center">`,
      `  <img src="https://img.shields.io/badge/${encodeURIComponent(cfg.badgeText)}-6366F1?style=for-the-badge&logoColor=white" alt="${cfg.badgeText}" />`,
      `</p>`,
      ``
    );
  }

  if (cfg.subtitle) lines.push(`### ${cfg.subtitle}`, ``);
  if (cfg.description) lines.push(`${cfg.description}`, ``);

  lines.push(`---`, ``);
  return lines.join('\n');
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────
function generateTechStack(block: ReadmeBlock): string {
  const cfg = block.config as TechStackConfig;
  const lines: string[] = ['## 🛠️ Tech Stack', ''];

  const imgTags = cfg.technologies
    .map((techLabel) => {
      const tech = TECHNOLOGIES.find((t) => t.label === techLabel);
      if (!tech) return null;
      const encoded = encodeURIComponent(tech.label);
      return `  <img src="https://img.shields.io/badge/${encoded}-${tech.color}?style=for-the-badge&logo=${tech.logo}&logoColor=white" alt="${tech.label}" />`;
    })
    .filter(Boolean)
    .join('\n');

  lines.push(`<p align="center">`, imgTags, `</p>`, ``);
  lines.push(`---`, ``);
  return lines.join('\n');
}

// ─── GitHub Stats ─────────────────────────────────────────────────────────────
function generateStats(block: ReadmeBlock, username: string): string {
  if (!username) return '';
  const cfg = block.config as StatsConfig;

  const statsUrl = `https://github-readme-stats.vercel.app/api?username=${username}&theme=${cfg.theme}&show_icons=${cfg.showIcons}&hide_border=${cfg.hideBorder}&count_private=${cfg.includeAllCommits}&include_all_commits=${cfg.includeAllCommits}`;
  const langUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=${cfg.theme}&hide_border=${cfg.hideBorder}&layout=compact`;

  return [
    `## 📊 GitHub Stats`,
    ``,
    `<p align="center">`,
    `  <img height="180em" src="${statsUrl}" alt="GitHub Stats" />`,
    `  <img height="180em" src="${langUrl}" alt="Top Languages" />`,
    `</p>`,
    ``,
    `---`,
    ``,
  ].join('\n');
}

// ─── Activity Graph ──────────────────────────────────────────────────────────
function generateActivityGraph(block: ReadmeBlock, username: string): string {
  if (!username) return '';
  const cfg = block.config as GraphConfig;
  const theme = cfg.theme || 'react-dark';
  return [
    `## 📈 Activity Graph`,
    ``,
    `<p align="center">`,
    `  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=${theme}&hide_border=true" alt="Activity Graph" />`,
    `</p>`,
    ``,
    `---`,
    ``,
  ].join('\n');
}

// ─── Top Repos ────────────────────────────────────────────────────────────────
function generateTopRepos(block: ReadmeBlock, username: string): string {
  if (!username) return '';
  const cfg = block.config as TopReposConfig;
  const lines = [`## 📌 Top Repositories`, ``];

  if (cfg.repo1 || cfg.repo2) {
    lines.push(`<p align="center">`);
    if (cfg.repo1) {
      lines.push(`  <img src="https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${cfg.repo1}&theme=${cfg.theme}" alt="${cfg.repo1}" />`);
    }
    if (cfg.repo2) {
      lines.push(`  <img src="https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${cfg.repo2}&theme=${cfg.theme}" alt="${cfg.repo2}" />`);
    }
    lines.push(`</p>`);
  } else {
    lines.push(`<!-- Add repo names in the configuration panel -->`);
  }

  lines.push(``, `---`, ``);
  return lines.join('\n');
}

// ─── Social Links ─────────────────────────────────────────────────────────────
function generateSocial(block: ReadmeBlock): string {
  const cfg = block.config as SocialConfig;
  const lines = [`## 🌐 Connect With Me`, ``, `<p align="center">`];

  if (cfg.twitter) {
    lines.push(`  <a href="https://twitter.com/${cfg.twitter}" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" /></a>`);
  }
  if (cfg.linkedin) {
    lines.push(`  <a href="https://linkedin.com/in/${cfg.linkedin}" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>`);
  }
  if (cfg.devto) {
    lines.push(`  <a href="https://dev.to/${cfg.devto}" target="_blank"><img src="https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white" alt="Dev.to" /></a>`);
  }
  if (cfg.medium) {
    lines.push(`  <a href="https://medium.com/@${cfg.medium}" target="_blank"><img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium" /></a>`);
  }
  if (cfg.website) {
    lines.push(`  <a href="${cfg.website}" target="_blank"><img src="https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Website" /></a>`);
  }
  if (cfg.email) {
    lines.push(`  <a href="mailto:${cfg.email}"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>`);
  }

  lines.push(`</p>`, ``, `---`, ``);
  return lines.join('\n');
}

// ─── Streak ───────────────────────────────────────────────────────────────────
function generateStreak(block: ReadmeBlock, username: string): string {
  if (!username) return '';
  const cfg = block.config as StreakConfig;

  return [
    `## 🔥 GitHub Streak`,
    ``,
    `<p align="center">`,
    `  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${cfg.theme}" alt="GitHub Streak" />`,
    `</p>`,
    ``,
    `---`,
    ``,
  ].join('\n');
}

// ─── Trophy ───────────────────────────────────────────────────────────────────
function generateTrophy(block: ReadmeBlock, username: string): string {
  if (!username) return '';
  const cfg = block.config as TrophyConfig;

  return [
    `## 🏆 GitHub Trophies`,
    ``,
    `<p align="center">`,
    `  <img src="https://github-profile-trophy.vercel.app/?username=${username}&theme=${cfg.theme}&row=${cfg.row}&column=${cfg.column}" alt="GitHub Trophies" />`,
    `</p>`,
    ``,
    `---`,
    ``,
  ].join('\n');
}

// ─── Custom Section ───────────────────────────────────────────────────────────
function generateCustom(block: ReadmeBlock): string {
  const cfg = block.config as CustomConfig;
  return (cfg.content || '') + '\n\n---\n\n';
}

// ─── Main Generator ───────────────────────────────────────────────────────────
export function generateMarkdown(
  username: string,
  blocks: ReadmeBlock[]
): string {
  const enabledBlocks = blocks.filter((b) => b.enabled);

  const parts = enabledBlocks.map((block) => {
    switch (block.type) {
      case 'wave':       return generateWaveBanner(block, username);
      case 'hero':       return generateHero(block, username);
      case 'techstack':  return generateTechStack(block);
      case 'stats':      return generateStats(block, username);
      case 'graph':      return generateActivityGraph(block, username);
      case 'toprepos':   return generateTopRepos(block, username);
      case 'social':     return generateSocial(block);
      case 'streak':     return generateStreak(block, username);
      case 'trophy':     return generateTrophy(block, username);
      case 'custom':     return generateCustom(block);
      default:           return '';
    }
  });

  // Profile views counter footer (always last)
  const footer = username
    ? `\n<p align="center">\n  <img src="https://komarev.com/ghpvc/?username=${username}&color=6366F1&style=for-the-badge" alt="Profile Views" />\n</p>\n`
    : '';

  return parts.join('') + footer;
}
