// ─── Block Types ────────────────────────────────────────────────────────────

export type BlockType =
  | 'wave'
  | 'hero'
  | 'techstack'
  | 'stats'
  | 'graph'
  | 'toprepos'
  | 'social'
  | 'streak'
  | 'trophy'
  | 'custom';

// ─── Per-block Config Interfaces ────────────────────────────────────────────

export interface WaveConfig {
  theme: string; // e.g. waving, slice, rect, soft, etc.
  color: string;
  height: number;
  text: string;
  animation: string;
}

export interface HeroConfig {
  name: string;
  subtitle: string;
  description: string;
  showTypingAnim: boolean;
  showBadge: boolean;
  badgeText: string;
}

export interface TechStackConfig {
  technologies: string[];
}

export interface StatsConfig {
  theme: string;
  showIcons: boolean;
  hideBorder: boolean;
  includeAllCommits: boolean;
}

export interface GraphConfig {
  theme: string;
}

export interface TopReposConfig {
  repo1: string;
  repo2: string;
  theme: string;
}

export interface SocialConfig {
  twitter: string;
  linkedin: string;
  email: string;
  website: string;
  devto: string;
  medium: string;
}

export interface StreakConfig {
  theme: string;
}

export interface TrophyConfig {
  theme: string;
  row: number;
  column: number;
}

export interface CustomConfig {
  content: string;
  title: string;
}

export type BlockConfig =
  | WaveConfig
  | HeroConfig
  | TechStackConfig
  | StatsConfig
  | GraphConfig
  | TopReposConfig
  | SocialConfig
  | StreakConfig
  | TrophyConfig
  | CustomConfig;

// ─── Block Interface ─────────────────────────────────────────────────────────

export interface ReadmeBlock {
  id: string;
  type: BlockType;
  config: BlockConfig;
  enabled: boolean;
}

// ─── Available Technologies ──────────────────────────────────────────────────

export interface TechItem {
  label: string;
  logo: string;
  color: string;
}

export const TECHNOLOGIES: TechItem[] = [
  { label: 'JavaScript', logo: 'javascript', color: 'F7DF1E' },
  { label: 'TypeScript', logo: 'typescript', color: '3178C6' },
  { label: 'React', logo: 'react', color: '61DAFB' },
  { label: 'Next.js', logo: 'nextdotjs', color: '000000' },
  { label: 'Vue.js', logo: 'vuedotjs', color: '4FC08D' },
  { label: 'Svelte', logo: 'svelte', color: 'FF3E00' },
  { label: 'Node.js', logo: 'nodedotjs', color: '339933' },
  { label: 'Python', logo: 'python', color: '3776AB' },
  { label: 'Rust', logo: 'rust', color: '000000' },
  { label: 'Go', logo: 'go', color: '00ADD8' },
  { label: 'Java', logo: 'openjdk', color: 'ED8B00' },
  { label: 'C#', logo: 'csharp', color: '239120' },
  { label: 'C++', logo: 'cplusplus', color: '00599C' },
  { label: 'PHP', logo: 'php', color: '777BB4' },
  { label: 'Ruby', logo: 'ruby', color: 'CC342D' },
  { label: 'Swift', logo: 'swift', color: 'F05138' },
  { label: 'Kotlin', logo: 'kotlin', color: '7F52FF' },
  { label: 'Tailwind CSS', logo: 'tailwindcss', color: '06B6D4' },
  { label: 'PostgreSQL', logo: 'postgresql', color: '4169E1' },
  { label: 'MongoDB', logo: 'mongodb', color: '47A248' },
  { label: 'Redis', logo: 'redis', color: 'DC382D' },
  { label: 'Docker', logo: 'docker', color: '2496ED' },
  { label: 'Kubernetes', logo: 'kubernetes', color: '326CE5' },
  { label: 'AWS', logo: 'amazonaws', color: 'FF9900' },
  { label: 'Vercel', logo: 'vercel', color: '000000' },
  { label: 'Firebase', logo: 'firebase', color: 'FFCA28' },
  { label: 'GraphQL', logo: 'graphql', color: 'E10098' },
  { label: 'Prisma', logo: 'prisma', color: '2D3748' },
  { label: 'Git', logo: 'git', color: 'F05032' },
  { label: 'Linux', logo: 'linux', color: 'FCC624' },
];

// ─── Stats Themes ─────────────────────────────────────────────────────────────

export const STATS_THEMES = [
  'dark', 'radical', 'merko', 'gruvbox', 'tokyonight',
  'onedark', 'cobalt', 'synthwave', 'highcontrast', 'dracula',
  'prussian', 'monokai', 'vue-dark', 'algolia', 'great-gatsby',
];

// ─── Trophy Themes ────────────────────────────────────────────────────────────

export const TROPHY_THEMES = [
  'dark_hub', 'flat', 'onedark', 'gruvbox',
  'dracula', 'monokai', 'chalk', 'nord',
  'alduin', 'darkhub', 'juicyfresh', 'buddhism',
];

// ─── Block Metadata (for the block library UI) ────────────────────────────────

export interface BlockMeta {
  type: BlockType;
  label: string;
  description: string;
  icon: string;
}

export const BLOCK_LIBRARY: BlockMeta[] = [
  { type: 'wave', label: 'Wave Banner', description: 'Waving SVG header banner', icon: 'Waves' },
  { type: 'hero', label: 'Hero', description: 'Name, subtitle & intro', icon: 'Sparkles' },
  { type: 'techstack', label: 'Tech Stack', description: 'Shields.io badges', icon: 'Code2' },
  { type: 'stats', label: 'GitHub Stats', description: 'Stats card', icon: 'BarChart2' },
  { type: 'graph', label: 'Activity Graph', description: 'Beautiful activity chart', icon: 'Activity' },
  { type: 'toprepos', label: 'Top Repos', description: 'Pinned repo cards', icon: 'BookMarked' },
  { type: 'social', label: 'Social Links', description: 'Twitter, LinkedIn…', icon: 'Share2' },
  { type: 'streak', label: 'Streak', description: 'Commit streak graph', icon: 'Flame' },
  { type: 'trophy', label: 'Trophy', description: 'GitHub trophies', icon: 'Trophy' },
  { type: 'custom', label: 'Custom Section', description: 'Free-form Markdown', icon: 'FileEdit' },
];

// ─── Default Configs ──────────────────────────────────────────────────────────

export function getDefaultConfig(type: BlockType): BlockConfig {
  switch (type) {
    case 'wave':
      return {
        theme: 'waving',
        color: '6366F1',
        height: 120,
        text: '',
        animation: 'fadeIn',
      } as WaveConfig;
    case 'hero':
      return {
        name: '',
        subtitle: 'Full Stack Developer',
        description: 'Passionate about building beautiful, performant web applications.',
        showTypingAnim: true,
        showBadge: true,
        badgeText: 'Open to work',
      } as HeroConfig;
    case 'techstack':
      return { technologies: ['JavaScript', 'TypeScript', 'React', 'Next.js'] } as TechStackConfig;
    case 'stats':
      return { theme: 'tokyonight', showIcons: true, hideBorder: false, includeAllCommits: true } as StatsConfig;
    case 'graph':
      return { theme: 'react-dark' } as GraphConfig;
    case 'toprepos':
      return { repo1: '', repo2: '', theme: 'tokyonight' } as TopReposConfig;
    case 'social':
      return { twitter: '', linkedin: '', email: '', website: '', devto: '', medium: '' } as SocialConfig;
    case 'streak':
      return { theme: 'tokyonight' } as StreakConfig;
    case 'trophy':
      return { theme: 'darkhub', row: 1, column: 6 } as TrophyConfig;
    case 'custom':
      return { content: '## About Me\n\nWrite something cool here!', title: 'Custom Section' } as CustomConfig;
  }
}
