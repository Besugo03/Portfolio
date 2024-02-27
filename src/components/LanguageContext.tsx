import React from "react";

interface ILanguageContext {
  language: string;
  changeLanguage: (language: string) => void;
}

const LanguageContext = React.createContext<ILanguageContext | undefined>(
  undefined
);

export default LanguageContext;
