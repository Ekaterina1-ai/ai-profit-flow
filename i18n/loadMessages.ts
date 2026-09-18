import ru from './locales/ru';
import type { Locale, Messages } from './types';

export const loadMessages = async (locale: Locale): Promise<Messages> => {
  try {
    switch (locale) {
      case 'ru':
        return (await import('./locales/ru')).default;
      case 'en':
        return (await import('./locales/en')).default;
      case 'zh':
        return (await import('./locales/zh')).default;
      case 'fr':
        return (await import('./locales/fr')).default;
      case 'it':
        return (await import('./locales/it')).default;
      case 'uz':
        return (await import('./locales/uz')).default;
      case 'ky':
        return (await import('./locales/ky')).default;
      case 'kk':
        return (await import('./locales/kk')).default;
      case 'ar':
        return (await import('./locales/ar')).default;
      case 'es':
        return (await import('./locales/es')).default;
      case 'de':
        return (await import('./locales/de')).default;
      case 'pt':
        return (await import('./locales/pt')).default;
      case 'tr':
        return (await import('./locales/tr')).default;
      default:
        return ru;
    }
  } catch {
    return ru;
  }
};
