import type { Locale } from './types';

export const LOCALES: {
  code: Locale;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  countries: string[];
}[] = [
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr', countries: ['RU', 'BY'] },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    countries: ['US', 'GB', 'AU', 'CA', 'IE', 'NZ', 'IN', 'PH', 'SG', 'ZA', 'NG'],
  },
  { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr', countries: ['CN', 'TW', 'HK', 'SG'] },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    dir: 'ltr',
    countries: ['FR', 'BE', 'CH', 'CA', 'SN', 'CI', 'MA', 'DZ', 'TN'],
  },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr', countries: ['IT', 'SM', 'VA'] },
  { code: 'uz', name: 'Uzbek', nativeName: 'O‘zbekcha', dir: 'ltr', countries: ['UZ'] },
  { code: 'ky', name: 'Kyrgyz', nativeName: 'Кыргызча', dir: 'ltr', countries: ['KG'] },
  { code: 'kk', name: 'Kazakh', nativeName: 'Қазақша', dir: 'ltr', countries: ['KZ'] },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    countries: ['SA', 'AE', 'EG', 'IQ', 'JO', 'KW', 'QA', 'BH', 'OM', 'LB', 'SY', 'YE', 'MA', 'DZ', 'TN', 'LY', 'SD'],
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    dir: 'ltr',
    countries: ['ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY'],
  },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', countries: ['DE', 'AT', 'CH', 'LI'] },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr', countries: ['PT', 'BR', 'AO', 'MZ'] },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr', countries: ['TR', 'CY'] },
];

export const DEFAULT_LOCALE: Locale = 'ru';

export const isLocale = (value: string | null | undefined): value is Locale =>
  LOCALES.some((locale) => locale.code === value);

export const getLocaleMeta = (locale: Locale) =>
  LOCALES.find((item) => item.code === locale) ?? LOCALES[0];

export const getLocaleByCountry = (countryCode: string | null | undefined): Locale | null => {
  if (!countryCode) return null;
  const normalized = countryCode.toUpperCase();
  return LOCALES.find((locale) => locale.countries.includes(normalized))?.code ?? null;
};
