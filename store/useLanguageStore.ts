import { create } from 'zustand';
import { Lang, getInitialLang } from '@/lib/i18n';
import { setCookie } from '@/lib/cookies';

interface LanguageStore {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  lang: 'en', // will be overridden on mount via useEffect in LangToggle
  setLang: (lang) => {
    setCookie('readme_lang', lang);
    set({ lang });
  },
}));

// Call this once on client mount to initialize from cookie/browser
export function initLanguage() {
  useLanguageStore.getState().lang; // touch state
  const lang = getInitialLang();
  useLanguageStore.setState({ lang });
}
