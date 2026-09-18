import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getLocaleMeta } from './locales';
import { resolveInitialLocale, saveLocale } from './detect';
import { loadMessages } from './loadMessages';
import ruMessages from './locales/ru';
import type { Locale, Messages } from './types';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => Promise<void>;
  t: Messages;
  ready: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const applyDocumentLocale = (locale: Locale) => {
  if (typeof document === 'undefined') return;

  const meta = getLocaleMeta(locale);
  document.documentElement.lang = locale;
  document.documentElement.dir = meta.dir;
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('ru');
  const [messages, setMessages] = useState<Messages>(ruMessages);
  const [ready, setReady] = useState(false);

  const setLocale = useCallback(async (nextLocale: Locale) => {
    const nextMessages = await loadMessages(nextLocale);
    setLocaleState(nextLocale);
    setMessages(nextMessages);
    saveLocale(nextLocale);
    applyDocumentLocale(nextLocale);
  }, []);

  useEffect(() => {
    let active = true;

    const init = async () => {
      const initialLocale = await resolveInitialLocale();
      const initialMessages = await loadMessages(initialLocale);
      if (!active) return;

      setLocaleState(initialLocale);
      setMessages(initialMessages);
      applyDocumentLocale(initialLocale);
      setReady(true);
    };

    init();

    return () => {
      active = false;
    };
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: messages,
      ready,
    }),
    [locale, messages, ready, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
};
