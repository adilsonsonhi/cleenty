import { createContext, useContext } from "react";

import { en } from "./en";
import { es } from "./es";
import { pt, type Dictionary } from "./pt";

export type Language = "pt" | "en" | "es";

export const dictionaries: Record<Language, Dictionary> = { pt, en, es };

// Formato regional usado no atributo lang e nas datas/números (Intl).
export const locales: Record<Language, string> = {
  pt: "pt-PT",
  en: "en-GB",
  es: "es-ES",
};

export type I18n = {
  language: Language;
  locale: string;
  t: Dictionary;
  setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<I18n | null>(null);

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useI18n tem de ser usado dentro de LanguageProvider");
  return context;
}
