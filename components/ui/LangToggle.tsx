'use client';
import React, { useEffect } from 'react';
import { useLanguageStore, initLanguage } from '@/store/useLanguageStore';

export function LangToggle() {
  const { lang, setLang } = useLanguageStore();

  // Initialize language from cookie on first client render
  useEffect(() => {
    initLanguage();
  }, []);

  return (
    <div className="flex items-center gap-0.5 bg-white/[0.04] rounded-lg p-1">
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
          lang === 'en'
            ? 'bg-white/10 text-white shadow-sm'
            : 'text-neutral-500 hover:text-neutral-300'
        }`}
        aria-pressed={lang === 'en'}
        title="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLang('ru')}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-150 ${
          lang === 'ru'
            ? 'bg-white/10 text-white shadow-sm'
            : 'text-neutral-500 hover:text-neutral-300'
        }`}
        aria-pressed={lang === 'ru'}
        title="Переключить на русский"
      >
        RU
      </button>
    </div>
  );
}
