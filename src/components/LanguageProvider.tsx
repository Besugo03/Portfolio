import React, { useState, ReactNode } from "react";
import LanguageContext from "./LanguageContext";

interface LanguageProviderProps {
  children: ReactNode;
}

const SUPPORTED_LANGUAGES = ["en", "it"];
const DEFAULT_LANGUAGE = "en";

const detectBrowserLanguage = (): string => {
  const preferred = navigator.languages ?? [navigator.language];
  for (const locale of preferred) {
    const lang = locale.split("-")[0].toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(lang)) return lang;
  }
  return DEFAULT_LANGUAGE;
};

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(detectBrowserLanguage); // default language from browser locale

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
