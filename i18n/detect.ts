import type { Locale } from './types';
import { DEFAULT_LOCALE, getLocaleByCountry, isLocale } from './locales';

export const STORAGE_KEY = 'apf_lang';

export const getSavedLocale = (): Locale | null => {
  if (typeof window === 'undefined') return null;

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(saved) ? saved : null;
  } catch {
    return null;
  }
};

export const saveLocale = (locale: Locale) => {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Storage can be unavailable in private mode or embedded previews.
  }
};

export const detectFromBrowser = (): Locale | null => {
  if (typeof navigator === 'undefined') return null;

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of languages) {
    const normalized = language.toLowerCase();
    const base = normalized.split('-')[0];

    if (normalized.startsWith('zh')) return 'zh';
    if (isLocale(base)) return base;
  }

  return null;
};

export const detectFromGeo = async (): Promise<Locale | null> => {
  if (typeof fetch === 'undefined') return null;

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 2500);

  try {
    const response = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    if (!response.ok) return null;

    const data = (await response.json()) as { country_code?: string; country?: string };
    return getLocaleByCountry(data.country_code ?? data.country);
  } catch {
    return null;
  } finally {
    window.clearTimeout(timeoutId);
  }
};

export const resolveInitialLocale = async (): Promise<Locale> => {
  return getSavedLocale() ?? detectFromBrowser() ?? (await detectFromGeo()) ?? DEFAULT_LOCALE;
};
