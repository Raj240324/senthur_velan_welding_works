"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "./en.json";
import ta from "./ta.json";

type Locale = "en" | "ta";

// Both dictionaries share the same shape
type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, ta };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load saved preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Locale | null;
    if (saved && (saved === "en" || saved === "ta")) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("lang", newLocale);
    // Update <html> lang + data-lang attribute for accessibility, SEO & CSS targeting
    document.documentElement.lang = newLocale;
    document.documentElement.setAttribute("data-lang", newLocale);
  }, []);

  // Also set data-lang on initial load
  useEffect(() => {
    document.documentElement.setAttribute("data-lang", locale);
  }, [locale]);

  // Nested key lookup: t("hero.line1") → dictionaries[locale].hero.line1
  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let result: any = dictionaries[locale];
      for (const k of keys) {
        if (result && typeof result === "object" && k in result) {
          result = result[k];
        } else {
          // Fallback to English if key not found in current locale
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let fallback: any = dictionaries.en;
          for (const fk of keys) {
            if (fallback && typeof fallback === "object" && fk in fallback) {
              fallback = fallback[fk];
            } else {
              return key; // Return key itself if not found anywhere
            }
          }
          return typeof fallback === "string" ? fallback : key;
        }
      }
      return typeof result === "string" ? result : key;
    },
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for consuming the context
export function useTranslation() {
  return useContext(LanguageContext);
}
