import { useEffect, useMemo, useState, type ReactNode } from "react";

import {
  dictionaries,
  LanguageContext,
  locales,
  type Language,
} from "./context";
import type { Dictionary } from "./pt";

const STORAGE_KEY = "cleenty-lang";

function isLanguage(value: unknown): value is Language {
  return value === "pt" || value === "en" || value === "es";
}

// Escolha guardada; na primeira visita, o idioma do browser; senão, português.
function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch {
    // localStorage indisponível (ex.: modo privado restrito).
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag?.slice(0, 2).toLowerCase();
    if (isLanguage(base)) return base;
  }
  return "pt";
}

export function LanguageProvider({
  children,
  meta = (t) => t.meta,
}: {
  children: ReactNode;
  // Título e descrição da página (por omissão, os da página inicial).
  meta?: (t: Dictionary) => { title: string; description: string };
}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const t = dictionaries[language];
  const locale = locales[language];
  const { title, description } = meta(t);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Sem persistência: a escolha vale apenas para esta visita.
    }
    document.documentElement.lang = locale;
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [language, locale, title, description]);

  const value = useMemo(
    () => ({ language, locale, t, setLanguage }),
    [language, locale, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
