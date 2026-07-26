import { useCallback, useEffect, useMemo, useState } from "react";
import LanguageContext from "./languageContext.jsx";
import {
  getInitialLanguage,
  LANGUAGE_CONTENT,
  STORAGE_KEY
} from "./languageContent.jsx";

export default function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage) => {
    if (!LANGUAGE_CONTENT[nextLanguage]) {
      return;
    }

    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((currentLanguage) =>
      currentLanguage === "es" ? "en" : "es"
    );
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }

    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      content: LANGUAGE_CONTENT[language].content,
      languages: Object.values(LANGUAGE_CONTENT),
      currentLanguage: LANGUAGE_CONTENT[language],
      setLanguage,
      toggleLanguage
    }),
    [language, setLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}