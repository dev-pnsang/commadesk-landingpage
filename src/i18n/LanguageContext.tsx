'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, MODULE_ITEMS, ModuleMenuItem } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  modules: ModuleMenuItem[];
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
  modules: MODULE_ITEMS.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('commadesk_lang') as Language;
      if (saved === 'en' || saved === 'vi') {
        setLanguageState(saved);
      }
    } catch {
      // Ignore localStorage errors in SSR or restricted environments
    }
    setMounted(true);
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('commadesk_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore
    }
  };

  const t = translations[language] || translations.en;
  const modules = MODULE_ITEMS[language] || MODULE_ITEMS.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, modules }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
