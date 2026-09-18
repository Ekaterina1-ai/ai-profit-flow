import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { LOCALES, getLocaleMeta } from './locales';
import { useI18n } from './I18nContext';
import type { Locale } from './types';

type LanguageSwitcherProps = {
  compact?: boolean;
  className?: string;
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ compact = false, className = '' }) => {
  const { locale, setLocale, t } = useI18n();
  const current = getLocaleMeta(locale);

  return (
    <label
      className={`relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/60 text-white shadow-[0_0_24px_rgba(34,211,238,0.08)] backdrop-blur-md transition-colors hover:border-cyan-400/40 ${
        compact ? 'px-3 py-2 text-xs' : 'px-4 py-2.5 text-sm'
      } ${className}`}
      title={t.lang.choose}
    >
      <span className="sr-only">{t.lang.label}</span>
      <Globe size={compact ? 14 : 16} className="text-cyan-300" />
      <span className="pointer-events-none max-w-[8rem] truncate font-black tracking-wide text-cyan-100">
        {compact ? locale.toUpperCase() : current.nativeName || locale.toUpperCase()}
      </span>
      <select
        aria-label={t.lang.label}
        value={locale}
        onChange={(event) => {
          void setLocale(event.target.value as Locale);
        }}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      >
        {LOCALES.map((item) => (
          <option key={item.code} value={item.code}>
            {item.nativeName} ({item.code.toUpperCase()})
          </option>
        ))}
      </select>
      <ChevronDown size={compact ? 14 : 16} className="pointer-events-none text-cyan-300/80" />
    </label>
  );
};

export default LanguageSwitcher;
