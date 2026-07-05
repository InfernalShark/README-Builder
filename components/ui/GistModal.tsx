'use client';
import React, { useState, useRef, useEffect } from 'react';
import { GitBranch, X, ExternalLink, Key } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useLanguageStore } from '@/store/useLanguageStore';
import { t } from '@/lib/i18n';

interface GistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPublish: (token: string) => Promise<void>;
  isLoading: boolean;
}

export function GistModal({ isOpen, onClose, onPublish, isLoading }: GistModalProps) {
  const { lang } = useLanguageStore();
  const [token, setToken] = useState('');
  const [showToken, setShowToken] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setToken('');
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token.trim()) return;
    await onPublish(token.trim());
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#111111] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <GitBranch size={15} className="text-indigo-400" />
            </div>
            <h2 className="text-sm font-semibold text-white">{t(lang, 'gistModalTitle')}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-white/5 transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <p className="text-sm text-neutral-400 leading-relaxed">
            {t(lang, 'gistModalDesc')}{' '}
            <code className="text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded text-xs font-mono">
              {t(lang, 'gistModalScope')}
            </code>
            .
          </p>

          {/* Token field */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                <Key size={11} />
                {t(lang, 'gistModalToken')}
              </label>
              <a
                href="https://github.com/settings/tokens/new?scopes=gist&description=README+Builder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
              >
                {t(lang, 'gistModalHowTo')} <ExternalLink size={10} />
              </a>
            </div>
            <div className="relative">
              <input
                ref={inputRef}
                type={showToken ? 'text' : 'password'}
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder={t(lang, 'gistModalTokenPlaceholder')}
                autoComplete="off"
                spellCheck={false}
                className="w-full bg-white/5 border border-white/10 rounded-lg text-sm text-neutral-100 placeholder-neutral-600 font-mono px-3 py-2.5 pr-20 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowToken((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-neutral-500 hover:text-neutral-300 bg-white/5 px-2 py-1 rounded transition-colors"
              >
                {showToken ? 'hide' : 'show'}
              </button>
            </div>
          </div>

          {/* Security note */}
          <div className="flex items-start gap-2 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2.5">
            <span className="text-green-400 mt-0.5 flex-shrink-0">🔒</span>
            <p className="text-xs text-neutral-500 leading-relaxed">{t(lang, 'gistModalSecure')}</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 justify-end pt-1">
            <Button variant="ghost" size="md" type="button" onClick={onClose} disabled={isLoading}>
              {t(lang, 'gistModalCancel')}
            </Button>
            <Button
              variant="primary"
              size="md"
              type="submit"
              disabled={!token.trim() || isLoading}
              className={cn(isLoading && 'opacity-60 cursor-not-allowed')}
            >
              <GitBranch size={13} />
              {isLoading ? t(lang, 'gistModalPublishing') : t(lang, 'gistModalPublish')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
