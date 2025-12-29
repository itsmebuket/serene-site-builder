import React, { createContext, useContext, useState, ReactNode } from 'react';
import { lang_tr, LangKeys } from '@/i18n/lang_tr';

type LanguageContextType = {
  lang: LangKeys;
  currentLang: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages: Record<string, LangKeys> = {
  tr: lang_tr,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState('tr');
  const lang = languages[currentLang] || lang_tr;

  const setLanguage = (lang: string) => {
    if (languages[lang]) {
      setCurrentLang(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, currentLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
