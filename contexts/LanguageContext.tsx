import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TranslationData } from '../types';
import { TRANSLATIONS } from '../constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
  dir: 'rtl' | 'ltr';
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(Language.AR);

  useEffect(() => {
    // Update HTML dir attribute when language changes
    document.documentElement.dir = TRANSLATIONS[language].meta.dir;
    document.documentElement.lang = language;
    
    // Update font family based on language
    if (language === Language.AR) {
        document.body.classList.add('font-arabic');
    } else {
        document.body.classList.remove('font-arabic');
    }

  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === Language.AR ? Language.EN : Language.AR));
  };

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language],
    dir: TRANSLATIONS[language].meta.dir,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};