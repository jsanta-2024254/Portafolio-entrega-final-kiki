import esContent from "../../content/i18n/es.json";
import enContent from "../../content/i18n/en.json";

export const STORAGE_KEY = "kiki-portfolio-language";

export const LANGUAGE_CONTENT = {
  es: {
    code: "es",
    shortLabel: "ES",
    label: "Español",
    content: esContent
  },
  en: {
    code: "en",
    shortLabel: "EN",
    label: "English",
    content: enContent
  }
};

export function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "es";
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);

  if (storedLanguage && LANGUAGE_CONTENT[storedLanguage]) {
    return storedLanguage;
  }

  return "es";
}