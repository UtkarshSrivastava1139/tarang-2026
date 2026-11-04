'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import enTranslations from '@/locales/en.json';
import hiTranslations from '@/locales/hi.json';

export type Locale = 'en' | 'hi';

type Translations = typeof enTranslations;

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (keyPath: string, fallback?: string) => string;
  translations: Translations;
  isHindi: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'tarang_preferred_locale';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY) as Locale | null;
      if (saved === 'en' || saved === 'hi') {
        setLocaleState(saved);
      }
    } catch {
      // LocalStorage access may fail in private mode or SSR
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // Ignore
    }
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'hi' : 'en');
  };

  const translations = locale === 'hi' ? hiTranslations : enTranslations;

  const t = (keyPath: string, fallback?: string): string => {
    const keys = keyPath.split('.');
    let current: any = translations;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return fallback || keyPath;
      }
    }
    return typeof current === 'string' ? current : (fallback || keyPath);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale: mounted ? locale : 'en',
        setLocale,
        toggleLocale,
        t,
        translations,
        isHindi: locale === 'hi'
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

