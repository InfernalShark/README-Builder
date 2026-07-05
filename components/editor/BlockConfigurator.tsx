'use client';
import React from 'react';
import { useReadmeStore } from '@/store/useReadmeStore';
import { useLanguageStore } from '@/store/useLanguageStore';
import {
  BlockType,
  WaveConfig,
  HeroConfig,
  TechStackConfig,
  StatsConfig,
  GraphConfig,
  TopReposConfig,
  SocialConfig,
  StreakConfig,
  TrophyConfig,
  CustomConfig,
  TECHNOLOGIES,
  STATS_THEMES,
  TROPHY_THEMES,
} from '@/types/blocks';
import { Input } from '@/components/ui/Input';
import { Toggle } from '@/components/ui/Toggle';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function BlockConfigurator() {
  const { blocks, selectedBlockId, updateBlockConfig } = useReadmeStore();
  const { lang } = useLanguageStore();
  const block = blocks.find((b) => b.id === selectedBlockId);

  if (!block) {
    return (
      <div className="flex flex-col items-center justify-center h-24 text-neutral-600 text-sm gap-2">
        <span>{t(lang, 'selectBlockHint')}</span>
      </div>
    );
  }

  const update = (cfg: Partial<Record<string, unknown>>) => {
    updateBlockConfig(block.id, cfg as never);
  };

  switch (block.type as BlockType) {
    case 'wave': {
      const cfg = block.config as WaveConfig;
      const themes = ['waving', 'slice', 'rect', 'soft', 'rounded', 'transparent'];
      const animations = ['fadeIn', 'scaleIn', 'editor'];
      return (
        <div className="flex flex-col gap-3 p-3">
          <Input
            label={t(lang, 'waveText')}
            id="wave-text"
            value={cfg.text}
            placeholder="e.g. Welcome to my profile!"
            onChange={(e) => update({ text: e.target.value })}
          />
          <Input
            label={t(lang, 'waveColor')}
            id="wave-color"
            value={cfg.color}
            placeholder="e.g. 6366F1 or violet"
            onChange={(e) => update({ color: e.target.value })}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'waveStyle')}</label>
            <select
              value={cfg.theme}
              onChange={(e) => update({ theme: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:border-indigo-500/60"
            >
              {themes.map((th) => (
                <option key={th} value={th} className="bg-neutral-900">{th}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'waveAnimation')}</label>
            <select
              value={cfg.animation}
              onChange={(e) => update({ animation: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:border-indigo-500/60"
            >
              {animations.map((an) => (
                <option key={an} value={an} className="bg-neutral-900">{an}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'waveHeight')} ({cfg.height}px)</label>
            <input
              type="range"
              min={50}
              max={300}
              value={cfg.height}
              onChange={(e) => update({ height: Number(e.target.value) })}
              className="w-full accent-indigo-500 bg-white/5 border border-white/10 rounded-lg h-2"
            />
          </div>
        </div>
      );
    }

    case 'hero': {
      const cfg = block.config as HeroConfig;
      return (
        <div className="flex flex-col gap-3 p-3">
          <Input
            label={t(lang, 'displayName')}
            id="hero-name"
            value={cfg.name}
            placeholder="Your Name"
            onChange={(e) => update({ name: e.target.value })}
          />
          <Input
            label={t(lang, 'subtitle')}
            id="hero-subtitle"
            value={cfg.subtitle}
            placeholder="Full Stack Developer"
            onChange={(e) => update({ subtitle: e.target.value })}
          />
          <Input
            label={t(lang, 'description')}
            id="hero-desc"
            value={cfg.description}
            placeholder="A short bio..."
            onChange={(e) => update({ description: e.target.value })}
          />
          <Input
            label={t(lang, 'badgeText')}
            id="hero-badge"
            value={cfg.badgeText}
            placeholder="Open to work"
            onChange={(e) => update({ badgeText: e.target.value })}
          />
          <Toggle
            id="hero-typing"
            checked={cfg.showTypingAnim}
            onChange={(v) => update({ showTypingAnim: v })}
            label={t(lang, 'typingAnimation')}
          />
          <Toggle
            id="hero-badge-toggle"
            checked={cfg.showBadge}
            onChange={(v) => update({ showBadge: v })}
            label={t(lang, 'showBadge')}
          />
        </div>
      );
    }

    case 'techstack': {
      const cfg = block.config as TechStackConfig;
      return (
        <div className="flex flex-col gap-2 p-3">
          <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium">
            {t(lang, 'selectTechnologies')}
          </p>
          <div className="grid grid-cols-2 gap-1.5 max-h-52 overflow-y-auto pr-1 custom-scrollbar">
            {TECHNOLOGIES.map((tech) => {
              const selected = cfg.technologies.includes(tech.label);
              return (
                <button
                  key={tech.label}
                  onClick={() => {
                    const techs = selected
                      ? cfg.technologies.filter((t) => t !== tech.label)
                      : [...cfg.technologies, tech.label];
                    update({ technologies: techs });
                  }}
                  className={cn(
                    'text-xs px-2 py-1.5 rounded-md border text-left transition-all duration-150',
                    selected
                      ? 'border-indigo-500/60 bg-indigo-500/10 text-indigo-300'
                      : 'border-white/10 bg-white/5 text-neutral-400 hover:border-white/20 hover:text-neutral-300'
                  )}
                >
                  {tech.label}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    case 'stats': {
      const cfg = block.config as StatsConfig;
      return (
        <div className="flex flex-col gap-3 p-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'theme')}</label>
            <select
              value={cfg.theme}
              onChange={(e) => update({ theme: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:border-indigo-500/60"
            >
              {STATS_THEMES.map((th) => (
                <option key={th} value={th} className="bg-neutral-900">{th}</option>
              ))}
            </select>
          </div>
          <Toggle id="stats-icons" checked={cfg.showIcons} onChange={(v) => update({ showIcons: v })} label={t(lang, 'showIcons')} />
          <Toggle id="stats-border" checked={cfg.hideBorder} onChange={(v) => update({ hideBorder: v })} label={t(lang, 'hideBorder')} />
          <Toggle id="stats-commits" checked={cfg.includeAllCommits} onChange={(v) => update({ includeAllCommits: v })} label={t(lang, 'includeAllCommits')} />
        </div>
      );
    }

    case 'graph': {
      const cfg = block.config as GraphConfig;
      const graphThemes = ['react-dark', 'react', 'github', 'github-light', 'dracula', 'tokyonight', 'nord', 'gotham', 'signature'];
      return (
        <div className="flex flex-col gap-3 p-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'theme')}</label>
            <select
              value={cfg.theme}
              onChange={(e) => update({ theme: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:border-indigo-500/60"
            >
              {graphThemes.map((th) => (
                <option key={th} value={th} className="bg-neutral-900">{th}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }

    case 'toprepos': {
      const cfg = block.config as TopReposConfig;
      return (
        <div className="flex flex-col gap-3 p-3">
          <Input label={t(lang, 'repository1')} id="repo1" value={cfg.repo1} placeholder="my-awesome-repo" onChange={(e) => update({ repo1: e.target.value })} />
          <Input label={t(lang, 'repository2')} id="repo2" value={cfg.repo2} placeholder="another-repo" onChange={(e) => update({ repo2: e.target.value })} />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'theme')}</label>
            <select
              value={cfg.theme}
              onChange={(e) => update({ theme: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:border-indigo-500/60"
            >
              {STATS_THEMES.map((th) => (
                <option key={th} value={th} className="bg-neutral-900">{th}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }

    case 'social': {
      const cfg = block.config as SocialConfig;
      return (
        <div className="flex flex-col gap-3 p-3">
          <Input label={t(lang, 'twitterHandle')} id="social-twitter" value={cfg.twitter} placeholder="username" onChange={(e) => update({ twitter: e.target.value })} />
          <Input label={t(lang, 'linkedinUsername')} id="social-linkedin" value={cfg.linkedin} placeholder="username" onChange={(e) => update({ linkedin: e.target.value })} />
          <Input label={t(lang, 'devtoUsername')} id="social-devto" value={cfg.devto} placeholder="username" onChange={(e) => update({ devto: e.target.value })} />
          <Input label={t(lang, 'mediumUsername')} id="social-medium" value={cfg.medium} placeholder="username" onChange={(e) => update({ medium: e.target.value })} />
          <Input label={t(lang, 'email')} id="social-email" value={cfg.email} placeholder="you@example.com" onChange={(e) => update({ email: e.target.value })} />
          <Input label={t(lang, 'websiteUrl')} id="social-website" value={cfg.website} placeholder="https://yoursite.com" onChange={(e) => update({ website: e.target.value })} />
        </div>
      );
    }

    case 'streak': {
      const cfg = block.config as StreakConfig;
      return (
        <div className="flex flex-col gap-3 p-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'theme')}</label>
            <select
              value={cfg.theme}
              onChange={(e) => update({ theme: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:border-indigo-500/60"
            >
              {STATS_THEMES.map((th) => (
                <option key={th} value={th} className="bg-neutral-900">{th}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }

    case 'trophy': {
      const cfg = block.config as TrophyConfig;
      return (
        <div className="flex flex-col gap-3 p-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'theme')}</label>
            <select
              value={cfg.theme}
              onChange={(e) => update({ theme: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:border-indigo-500/60"
            >
              {TROPHY_THEMES.map((th) => (
                <option key={th} value={th} className="bg-neutral-900">{th}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'rows')}</label>
              <input type="number" min={1} max={5} value={cfg.row}
                onChange={(e) => update({ row: Number(e.target.value) })}
                className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:border-indigo-500/60 w-full"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{t(lang, 'columns')}</label>
              <input type="number" min={1} max={10} value={cfg.column}
                onChange={(e) => update({ column: Number(e.target.value) })}
                className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:border-indigo-500/60 w-full"
              />
            </div>
          </div>
        </div>
      );
    }

    case 'custom': {
      const cfg = block.config as CustomConfig;
      return (
        <div className="flex flex-col gap-3 p-3">
          <Input
            label={t(lang, 'sectionTitle')}
            id="custom-title"
            value={cfg.title}
            placeholder="Custom Section"
            onChange={(e) => update({ title: e.target.value })}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              {t(lang, 'templates')}
            </label>
            <select
              onChange={(e) => {
                const val = e.target.value;
                if (!val) return;
                let content = '';
                if (val === 'api') {
                  content = `## 🔗 API Reference\n\n#### Get all items\n\n\`\`\`http\nGET /api/items\n\`\`\`\n\n| Parameter | Type     | Description                |\n| :-------- | :------- | :------------------------- |\n| \`api_key\` | \`string\` | **Required**. Your API key |\n\n#### Get item\n\n\`\`\`http\nGET /api/items/\${id}\n\`\`\`\n\n| Parameter | Type     | Description                       |\n| :-------- | :------- | :-------------------------------- |\n| \`id\`      | \`string\` | **Required**. Id of item to fetch |`;
                } else if (val === 'install') {
                  content = `## 💾 Installation\n\nInstall my-project with npm\n\n\`\`\`bash\nnpm install my-project\ncd my-project\n\`\`\``;
                } else if (val === 'faq') {
                  content = `## ❓ FAQ\n\n#### Question 1?\nAnswer 1...\n\n#### Question 2?\nAnswer 2...`;
                } else if (val === 'contrib') {
                  content = `## 🤝 Contributing\n\nContributions are always welcome!\n\nSee \`contributing.md\` for ways to get started.\n\nPlease adhere to this project's \`code of conduct\`.`;
                } else if (val === 'license') {
                  content = `## 📄 License\n\n[MIT](https://choosealicense.com/licenses/mit/)`;
                }
                update({ content });
                e.target.value = ''; // Reset select
              }}
              className="bg-[#0a0a0a] border border-white/10 rounded-lg text-sm text-neutral-300 px-3 py-2 focus:outline-none focus:border-indigo-500/60"
            >
              <option value="" className="bg-neutral-900">{t(lang, 'selectTemplate')}</option>
              <option value="api" className="bg-neutral-900">{t(lang, 'tplApiRef')}</option>
              <option value="install" className="bg-neutral-900">{t(lang, 'tplInstallation')}</option>
              <option value="faq" className="bg-neutral-900">{t(lang, 'tplFAQ')}</option>
              <option value="contrib" className="bg-neutral-900">{t(lang, 'tplContributing')}</option>
              <option value="license" className="bg-neutral-900">{t(lang, 'tplLicense')}</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
              {t(lang, 'markdownContent')}
            </label>
            <textarea
              value={cfg.content}
              onChange={(e) => update({ content: e.target.value })}
              rows={8}
              placeholder={t(lang, 'markdownPlaceholder')}
              className="bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 placeholder-neutral-600 px-3 py-2 focus:outline-none focus:border-indigo-500/60 resize-none font-mono custom-scrollbar"
            />
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}
