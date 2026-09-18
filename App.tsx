
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  BarChart3,
  Globe,
  Settings,
  Stethoscope,
  Utensils,
  ShoppingBag,
  Palmtree,
  Sparkles,
  Layout,
  GraduationCap,
  X,
  Info,
  Phone,
  Search,
  ClipboardCheck,
  Cpu,
  GraduationCap as Academy,
  Headset,
  Clock,
  TrendingUp,
  Target,
  FileCheck,
  ChevronDown,
  HelpCircle,
  Send
} from 'lucide-react';
import { useIsMobile } from './useIsMobile';
import MobileLanding from './mobile/MobileLanding';
import { useI18n } from './i18n';
import LanguageSwitcher from './i18n/LanguageSwitcher';

const SOCIAL_LINKS = [
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/katerina_happy1',
    handle: '@katerina_happy1',
    accent: 'text-[#2AABEE]',
    soft: 'bg-[#2AABEE]/10 border-[#2AABEE]/25 hover:border-[#2AABEE]/50',
  },
  {
    id: 'max',
    label: 'Max',
    href: 'https://max.ru/u/f9LHodD0cOJqSY8zi8oucx8bDFTldWgIefi51aTHh0SMs3gSOWpMwP5yYa4',
    handle: 'Max',
    accent: 'text-[#7C5CFF]',
    soft: 'bg-[#7C5CFF]/10 border-[#7C5CFF]/25 hover:border-[#7C5CFF]/50',
  },
  {
    id: 'vk',
    label: 'VK',
    href: 'https://vk.ru/ai.profitflow_bisness',
    handle: 'ai.profitflow_bisness',
    accent: 'text-[#0077FF]',
    soft: 'bg-[#0077FF]/10 border-[#0077FF]/25 hover:border-[#0077FF]/50',
  },
] as const;

const SocialIcon: React.FC<{ id: string; size?: number; className?: string }> = ({
  id,
  size = 18,
  className = '',
}) => {
  if (id === 'telegram') {
    return <Send size={size} className={className} />;
  }
  if (id === 'max') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
        <path
          d="M12 3.5c-4.7 0-8.5 3.4-8.5 7.6 0 2.5 1.4 4.7 3.6 6.1-.1.7-.4 2-.5 2.6 0 0-.1.5.3.3.5-.2 2.1-1.3 2.9-1.8 1.1.3 2.2.4 3.2.4 4.7 0 8.5-3.4 8.5-7.6S16.7 3.5 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M8.2 11.2h7.6M8.2 14h5.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.16 14.27h-1.48c-.56 0-.73-.45-1.73-1.47-.87-.88-1.25-.99-1.47-.99-.3 0-.39.09-.39.5v1.34c0 .36-.12.58-1.07.58-1.58 0-3.33-.96-4.56-2.74-1.85-2.64-2.36-4.62-2.36-5.03 0-.22.09-.42.5-.42h1.48c.37 0 .51.17.65.57.72 2.08 1.93 3.9 2.43 3.9.19 0 .27-.09.27-.56V9.4c-.06-.98-.57-1.06-.57-1.41 0-.18.15-.36.39-.36h2.33c.31 0 .42.17.42.53v2.86c0 .31.14.42.22.42.19 0 .35-.11.7-.46 1.07-1.2 1.83-3.05 1.83-3.05.1-.22.27-.42.64-.42h1.48c.44 0 .54.23.44.53-.18.86-1.95 3.34-1.95 3.34-.16.26-.22.37 0 .66.16.22.7.68 1.06 1.09.65.74 1.15 1.36 1.28 1.79.14.42-.07.64-.49.64z" />
    </svg>
  );
};

const SocialLinksRow: React.FC<{
  variant?: 'hero' | 'footer' | 'menu' | 'faq';
  className?: string;
}> = ({ variant = 'footer', className = '' }) => {
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col sm:flex-row flex-wrap gap-3 justify-center ${className}`}>
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto glass-card px-7 py-4 rounded-3xl font-black text-base hover:bg-white/10 flex items-center justify-center gap-2.5 border ${link.soft}`}
          >
            <SocialIcon id={link.id} size={20} className={link.accent} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'menu') {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 font-black ${link.soft} ${link.accent}`}
          >
            <SocialIcon id={link.id} size={18} />
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'faq') {
    return (
      <div className={`grid grid-cols-3 gap-2 ${className}`}>
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex flex-col items-center justify-center gap-1 rounded-2xl border px-2 py-2.5 text-[10px] font-black uppercase tracking-wide ${link.soft} ${link.accent}`}
          >
            <SocialIcon id={link.id} size={16} />
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-cyan-400 transition-colors group"
        >
          <span className={`w-9 h-9 rounded-xl border flex items-center justify-center ${link.soft}`}>
            <SocialIcon id={link.id} size={16} className={link.accent} />
          </span>
          <span className="font-bold">
            {link.label}
            <span className="block text-xs text-gray-500 font-medium group-hover:text-cyan-400/80">
              {link.handle}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
};

type ServiceItem = {
  id: number;
  title: string;
  price: string;
  shortDesc: string;
  features: string[];
  icon: React.ReactNode;
};

const SERVICE_META = [
  { id: 1, price: '15 000', icon: <Search className="text-cyan-400" /> },
  { id: 2, price: '45 000', icon: <Users className="text-blue-400" /> },
  { id: 3, price: '75 000', icon: <Cpu className="text-cyan-300" /> },
  { id: 4, price: '50 000', icon: <BarChart3 className="text-indigo-400" /> },
  { id: 5, price: '30 000', icon: <Academy className="text-pink-400" /> },
  { id: 6, price: '60 000', icon: <ShoppingBag className="text-orange-400" /> },
  { id: 7, price: '50 000', icon: <Palmtree className="text-green-400" /> },
  { id: 8, price: '20 000', icon: <Headset className="text-purple-400" /> },
];

type CaseProject = {
  id: number;
  name: string;
  result: string;
  text: string;
  icon: React.ReactNode;
  benefits: string[];
  screenshots: { src: string; alt: string }[];
  presentationUrl: string;
  siteUrl?: string;
  siteLabel?: string;
};

const CASE_META = [
  {
    id: 1,
    icon: <Users />,
    screenshots: [
      { src: '/projects/hr/site-1.jpg' },
      { src: '/projects/hr/site-2.jpg' },
      { src: '/projects/hr/hr-1.jpg' },
      { src: '/projects/hr/hr-2.jpg' },
    ],
    presentationUrl: 'https://disk.yandex.ru/i/3j427tx96gwq0g',
    siteUrl: 'https://кадроаи.рф/',
    siteLabel: 'кадроаи.рф',
  },
  {
    id: 2,
    icon: <Cpu />,
    screenshots: [
      { src: '/projects/logist/site-1.jpg' },
      { src: '/projects/logist/site-2.jpg' },
    ],
    presentationUrl: 'https://disk.yandex.ru/i/lcj6dm9UTgckiA',
    siteUrl: 'https://24логист.рф/',
    siteLabel: '24логист.рф',
  },
  {
    id: 3,
    icon: <ShoppingBag />,
    screenshots: [
      { src: '/projects/zakup/ui-1.jpg' },
      { src: '/projects/zakup/ui-2.jpg' },
      { src: '/projects/zakup/zakup-1.jpg' },
    ],
    presentationUrl: 'https://disk.yandex.ru/i/mQ94_XL-O9_59g',
  },
  {
    id: 4,
    icon: <Sparkles />,
    screenshots: [
      { src: '/projects/beauty/web-landing.jpg' },
      { src: '/projects/beauty/web-services.jpg' },
      { src: '/projects/beauty/mobile.jpg' },
      { src: '/projects/beauty/cabinet.jpg' },
    ],
    presentationUrl: 'https://disk.yandex.ru/i/bXqPoRRlIP0r_Q',
    siteUrl: 'https://норма-тела.рф/',
    siteLabel: 'норма-тела.рф',
  },
];


type ExpertItem = {
  id: number;
  name: string;
  title: string;
  photo: string;
  shortDesc: string;
  fullDesc: string;
};

const EXPERT_META = [
  { id: 1, photo: '/info/Екатерина.jpg' },
  { id: 2, photo: '/info/Даша.jpg' },
  { id: 3, photo: '/info/Евгения.png' },
];

const AUTOMATION_HELP_ICONS = [<Clock />, <ClipboardCheck />, <Target />] as const;
const INCOME_ICONS = [<Cpu />, <Zap />, <TrendingUp />, <BarChart3 />] as const;
const AI_INTEGRATION_ICONS = [<Search />, <FileCheck />, <Cpu />, <Academy />, <Headset />] as const;


const SectionTitle: React.FC<{ title: React.ReactNode; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16 px-4">
    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-heading font-black uppercase tracking-tight mb-4 text-white leading-tight">
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(41,221,218,0.6)]"></div>
  </div>
);

const CollapsibleSection: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
  alwaysOpen?: boolean;
  isMobile: boolean;
  opened: boolean;
  onToggle: (id: string) => void;
}> = ({ id, title, children, alwaysOpen = false, isMobile, opened, onToggle }) => {
  const visible = !isMobile || alwaysOpen || opened;
  return (
    <section className="mb-6">
      <div className="flex items-center justify-between cursor-pointer md:cursor-default" onClick={() => isMobile && !alwaysOpen && onToggle(id)}>
        <h3 className="text-xl md:text-3xl font-black uppercase text-white">{title}</h3>
        {isMobile && !alwaysOpen && (
          <span className="text-cyan-400 font-black text-xl">{visible ? '−' : '+'}</span>
        )}
      </div>
      <div className={`${visible ? 'max-h-screen' : 'max-h-0 overflow-hidden'} transition-all duration-300`}>
        {visible && <div className="mt-4">{children}</div>}
      </div>
    </section>
  );
};

const PriceCard: React.FC<{ service: ServiceItem, onClick: () => void }> = ({ service, onClick }) => {
  const { t } = useI18n();

  return (
  <div 
    onClick={onClick}
    className="glass-card w-full h-full p-4 sm:p-6 md:p-8 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col items-start text-left group sm:hover:border-cyan-500/60 cursor-pointer sm:hover:-translate-y-2 transition-transform"
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 sm:group-hover:scale-110 transition-transform">
      {/* Cast to ReactElement<any> to fix 'size' property error */}
      {React.cloneElement(service.icon as React.ReactElement<any>, { size: 20, strokeWidth: 1.5 })}
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:group-hover:text-cyan-400 transition-colors">{service.title}</h3>
    <p className="text-gray-400 text-sm sm:text-base leading-snug md:leading-relaxed line-clamp-3 italic">
      {service.shortDesc}
    </p>
    <div className="mt-auto w-full flex justify-between items-end">
      <div>
        <p className="text-gray-500 text-[10px] mb-1 uppercase tracking-widest font-bold">{t.solutions.priceFrom}</p>
        <div className="text-xl sm:text-2xl md:text-3xl font-black text-cyan-400 price-glow">
          {service.price} {t.common.currency}
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs font-bold text-gray-500 sm:group-hover:text-white transition-colors">
        {t.solutions.details} <ArrowRight size={14} />
      </div>
    </div>
  </div>
  );
};

const CaseCard: React.FC<{
  item: CaseProject;
  expanded: boolean;
  onToggle: () => void;
}> = ({ item, expanded, onToggle }) => {
  const { t } = useI18n();

  return (
  <div
    className={`glass-card p-4 sm:p-6 md:p-7 rounded-[2rem] border transition-all duration-300 ${
      expanded ? 'border-cyan-500/45 shadow-[0_0_40px_rgba(34,211,238,0.12)]' : 'border-white/5 sm:hover:border-cyan-500/30'
    }`}
  >
    <div className="flex items-center gap-4 mb-4 sm:mb-5">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-bold shrink-0">
        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 16, strokeWidth: 1.5 })}
      </div>
      <div className="min-w-0">
        <h4 className="text-base sm:text-lg font-bold">{item.name}</h4>
        <div className="text-cyan-400 text-xs font-black uppercase tracking-wider">{item.result}</div>
      </div>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed mb-5">{item.text}</p>
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      className="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold hover:text-cyan-300 transition-colors"
    >
      {expanded ? t.cases.hide : t.cases.learnMore}
      <ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
    </button>
  </div>
  );
};

const CaseDetails: React.FC<{ item: CaseProject }> = ({ item }) => {
  const { t } = useI18n();

  return (
  <div className="glass-card rounded-[2rem] border border-cyan-500/30 p-5 sm:p-8 md:p-10">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
      <div className="lg:w-[42%] space-y-5">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-400/80 font-black mb-2">{t.cases.benefits}</div>
          <h3 className="text-2xl font-heading font-bold mb-2">{item.name}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
        </div>
        <ul className="space-y-3">
          {item.benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-gray-200">
              <CheckCircle size={16} className="text-cyan-400 mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={item.presentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black text-xs uppercase tracking-wide px-5 py-3.5 hover:brightness-110 transition"
          >
            {t.cases.watchPresentation}
          </a>
          {item.siteUrl && (
            <a
              href={item.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 text-white font-black text-xs uppercase tracking-wide px-5 py-3.5 hover:border-cyan-400/40 transition"
            >
              {t.cases.sitePrefix} {item.siteLabel || ''}
            </a>
          )}
        </div>
      </div>

      <div className="lg:flex-1">
        <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-400/80 font-black mb-3">{t.cases.productUi}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {item.screenshots.map((shot) => (
            <a
              key={shot.src}
              href={shot.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 aspect-[16/10]"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-[11px] text-white/80 font-medium">
                {shot.alt}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

const ExpertCard: React.FC<{ expert: ExpertItem, onClick: () => void }> = ({ expert, onClick }) => {
  const { t } = useI18n();

  return (
  <div className="glass-card p-4 sm:p-6 rounded-[2.5rem] border-white/5 sm:hover:border-cyan-500/30 text-center">
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-500/30">
      <img src={expert.photo} alt={expert.name} className="w-full h-full object-cover" />
    </div>
    <h4 className="font-bold text-base sm:text-lg mb-2">{expert.name}</h4>
    <p className="text-cyan-400 text-xs sm:text-sm font-black uppercase tracking-wider mb-4">{expert.title}</p>
    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed italic mb-6">{expert.shortDesc}</p>
    <button 
      onClick={onClick}
      className="bg-cyan-500/10 border border-cyan-500/30 sm:hover:border-cyan-500 text-cyan-400 sm:hover:text-white px-4 sm:px-6 py-2 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all"
    >
      {t.experts.more}
    </button>
  </div>
  );
};

const ServiceModal: React.FC<{ service: ServiceItem | null, onClose: () => void }> = ({ service, onClose }) => {
  const { t } = useI18n();
  const [step, setStep] = useState<'details' | 'form'>('details');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setStep('details');
    setName('');
    setPhone('');
    setAgree(false);
    setSubmitting(false);
    setSent(false);
  }, [service?.id]);

  if (!service) return null;

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert(t.forms.fillBoth);
      return;
    }
    if (!agree) {
      alert(t.forms.agreeRequired);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/send-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          service: service.title,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || t.forms.sendError);
      setSent(true);
    } catch (err) {
      alert(`❌ Ошибка: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop animate-in fade-in duration-300" onClick={onClose}>
      <div
        className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 sm:p-10 md:p-14 rounded-[3rem] relative shadow-[0_0_80px_rgba(41,221,218,0.2)] border-cyan-500/40"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors" aria-label={t.common.close}>
          <X size={28} />
        </button>

        <div className="flex items-center gap-5 sm:gap-6 mb-8 sm:mb-10 pr-10">
           <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center shrink-0">
              {React.cloneElement(service.icon as React.ReactElement<any>, { size: 36 })}
           </div>
           <div>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading">{service.title}</h2>
              <div className="bg-cyan-500/20 text-cyan-400 px-4 py-1 rounded-full text-sm font-black mt-2 inline-block">
                {t.solutions.priceFrom} {service.price} {t.common.currency}
              </div>
           </div>
        </div>

        {step === 'details' && (
          <>
            <div className="mb-10 text-gray-300 text-lg sm:text-xl italic leading-relaxed border-l-4 border-cyan-500/50 pl-6 sm:pl-8">
              {service.shortDesc}
            </div>
            <div className="space-y-5">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-500/60 mb-4">{t.forms.launchProcess}</h4>
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 text-gray-100 group/item">
                  <CheckCircle size={20} className="text-cyan-500 mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                  <span className="text-base sm:text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep('form')}
              className="w-full mt-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-base sm:text-lg shadow-xl"
            >
              {t.forms.launchProcess}
            </button>
          </>
        )}

        {step === 'form' && !sent && (
          <form className="space-y-4" onSubmit={submitLead}>
            <div className="mb-2">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 mb-2">{t.forms.serviceApplication}</div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.forms.serviceCallHint} «{service.title}».
              </p>
            </div>
            <input
              type="text"
              placeholder={t.cta.namePh}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500 transition-colors text-base"
            />
            <input
              type="tel"
              placeholder={t.cta.phonePh}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-500 transition-colors text-base"
            />
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="w-4 h-4 mt-1 accent-cyan-500"
              />
              <span>
                {t.cta.agreePrefix}{' '}
                <a href="/doc/Согласие.pdf" target="_blank" className="text-cyan-400 underline hover:text-cyan-300">
                  {t.cta.agreeLink}
                </a>
              </span>
            </div>
            <button
              type="submit"
              disabled={submitting || !agree}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-black py-5 rounded-2xl hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase tracking-widest text-base shadow-xl"
            >
              {submitting ? t.cta.submitting : t.cta.submit}
            </button>
            <button
              type="button"
              onClick={() => setStep('details')}
              className="w-full text-gray-500 hover:text-cyan-400 text-sm font-bold py-2 transition-colors"
            >
              {t.forms.backToDesc}
            </button>
            <div className="pt-2">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-black mb-3 text-center">
                {t.forms.orWriteNow}
              </div>
              <SocialLinksRow variant="faq" />
            </div>
          </form>
        )}

        {step === 'form' && sent && (
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center">
              <CheckCircle className="text-cyan-400" size={32} />
            </div>
            <h3 className="text-2xl font-black mb-3">{t.forms.applicationSent}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t.forms.thanksService}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-cyan-500 text-black font-black py-4 rounded-2xl uppercase tracking-widest hover:bg-cyan-400 transition-colors"
            >
              {t.common.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ExpertModal: React.FC<{ expert: ExpertItem | null, onClose: () => void }> = ({ expert, onClose }) => {
  const { t } = useI18n();
  if (!expert) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-backdrop animate-in fade-in duration-300">
      <div className="glass-card max-w-4xl w-full p-10 md:p-14 rounded-[3rem] relative shadow-[0_0_80px_rgba(41,221,218,0.2)] border-cyan-500/40">
        <button onClick={onClose} className="absolute top-10 right-10 text-gray-500 hover:text-white transition-colors" aria-label={t.common.close}>
          <X size={28} />
        </button>
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-500/30">
            <img src={expert.photo} alt={expert.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold font-heading">{expert.name}</h2>
            <div className="text-cyan-400 font-black text-lg uppercase tracking-wider mt-2">{expert.title}</div>
          </div>
        </div>
        <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
          {expert.fullDesc}
        </div>
      </div>
    </div>
  );
};


const SupportFAQ: React.FC = () => {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(0);

  return (
    <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-[60] flex flex-col items-end gap-3 pointer-events-none">
      {open && (
        <div className="pointer-events-auto w-[min(100vw-2rem,380px)] glass-card rounded-[2rem] border-cyan-500/40 shadow-[0_0_50px_rgba(41,221,218,0.18)] overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="px-5 py-4 border-b border-white/10 bg-gradient-to-r from-cyan-500/15 to-blue-600/10 flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center shrink-0">
                <Headset size={22} className="text-cyan-300" />
              </div>
              <div className="min-w-0">
                <div className="text-white font-black text-sm tracking-wide">{t.faq.support}</div>
                <div className="text-[11px] text-cyan-300/90 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.faq.online}
                </div>
              </div>
            </div>
            <button
              type="button"
              aria-label={t.common.close}
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors shrink-0"
            >
              <X size={16} />
            </button>
          </div>

          <div className="max-h-[min(58vh,420px)] overflow-y-auto overscroll-contain px-3 py-3 space-y-1.5">
            {t.faq.items.map((item, idx) => {
              const isOpen = activeId === idx;
              return (
                <div
                  key={item.q}
                  className={`rounded-2xl border transition-colors ${
                    isOpen ? 'border-cyan-500/35 bg-cyan-500/5' : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(isOpen ? null : idx)}
                    className="w-full flex items-start gap-3 px-3.5 py-3.5 text-left"
                    aria-expanded={isOpen}
                  >
                    <HelpCircle size={16} className={`mt-0.5 shrink-0 ${isOpen ? 'text-cyan-400' : 'text-gray-500'}`} />
                    <span className="flex-1 text-[13px] font-bold text-white leading-snug">{item.q}</span>
                    <ChevronDown
                      size={16}
                      className={`mt-0.5 shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-3.5 pb-3.5 pl-[2.15rem] text-[12px] leading-relaxed text-gray-300">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="px-4 py-3.5 border-t border-white/10 bg-black/30 space-y-2">
            <SocialLinksRow variant="faq" />
            <a
              href="#phone-form"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 text-white text-[11px] font-black uppercase tracking-wide px-3 py-3 hover:border-cyan-400/40 transition"
            >
              <Phone size={14} className="text-cyan-400" /> {t.faq.leaveRequest}
            </a>
          </div>
        </div>
      )}

      <div className="relative pointer-events-auto">
        {!open && (
          <div className="absolute -top-12 right-0 whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-600 text-black text-[10px] font-black px-4 py-1.5 rounded-full animate-bounce shadow-[0_0_20px_rgba(6,182,212,0.55)] z-20 border border-white/20">
            {t.faq.haveQuestions}
          </div>
        )}

        <button
          type="button"
          aria-label={open ? t.faq.closeAria : t.faq.openAria}
          onClick={() => setOpen((v) => !v)}
          className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-2xl relative overflow-hidden group border-2 ${
            open
              ? 'bg-cyan-500/15 border-cyan-400/60 scale-105 shadow-cyan-500/30'
              : 'bg-[#0a0a0c] border-cyan-500/30 hover:border-cyan-400 hover:scale-110 shadow-cyan-500/20 hover:shadow-cyan-500/45'
          }`}
        >
          {!open && (
            <>
              <div className="absolute inset-0 bg-cyan-500/20 animate-ping rounded-full pointer-events-none duration-1000" />
              <div className="absolute inset-0 bg-cyan-500/10 animate-pulse rounded-full pointer-events-none" />
            </>
          )}
          <div className="relative z-10 flex flex-col items-center">
            {open ? (
              <>
                <X size={28} className="text-cyan-300" />
                <span className="text-[9px] font-black uppercase mt-1 text-cyan-300 tracking-widest">{t.faq.close}</span>
              </>
            ) : (
              <>
                <Cpu className="animate-ai-icon mb-1" size={32} />
                <span className="text-[9px] font-black uppercase tracking-tighter leading-tight text-center px-2 text-cyan-400 group-hover:text-white transition-colors">
                  AI PROFIT <br/> FLOW
                </span>
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const { t } = useI18n();
  const [showAllServices, setShowAllServices] = useState(false);
  const [expandedCaseId, setExpandedCaseId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedExpert, setSelectedExpert] = useState<ExpertItem | null>(null);
  const [showPlan, setShowPlan] = useState(false);
  const [formName, setFormName] = useState('');
  const isMobile = useIsMobile();
  const [sectionOpen, setSectionOpen] = useState<Record<string, boolean>>({
    solutions: false,
    cases: false,
    aiIntegration: false,
    // keep always-open on mobile (not collapsible)
    workBoost: true,
    experts: true,
    phoneForm: true,
  });
  const [formPhone, setFormPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agree, setAgree] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const services = SERVICE_META.map((item, idx) => ({ ...item, ...t.services[idx] }));
  const cases = CASE_META.map((item, idx) => ({
    ...item,
    ...t.caseItems[idx],
    screenshots: item.screenshots.map((shot, shotIdx) => ({
      ...shot,
      alt: t.caseItems[idx].screenshotsAlt[shotIdx] ?? '',
    })),
  }));
  const experts = EXPERT_META.map((item, idx) => ({ ...item, ...t.expertItems[idx] }));

  const toggleSection = (id: string) => {
    setSectionOpen(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderSolutions = () => (
    <section id="solutions" className="py-12 sm:py-20 md:py-28 lg:py-32 bg-black/40 border-y border-white/5 scroll-mt-20">
      <SectionTitle
        title={t.solutions.title}
        subtitle={t.solutions.subtitle}
      />

      <div className="solutions-marquee relative mb-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#070709] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#070709] to-transparent z-10" />
        <div className="solutions-marquee-track gap-5 sm:gap-8 py-4 px-4">
          {[...services, ...services].map((service, idx) => (
            <button
              key={`${service.id}-${idx}`}
              type="button"
              onClick={() => setSelectedService(service)}
              className="group/item shrink-0 w-[132px] sm:w-[156px] flex flex-col items-center gap-3 outline-none"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[1.75rem] bg-white/[0.04] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 group-hover/item:border-cyan-400/70 group-hover/item:bg-cyan-500/15 group-hover/item:shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                {React.cloneElement(service.icon as React.ReactElement<any>, {
                  size: 36,
                  strokeWidth: 1.75,
                  className: `${(service.icon as React.ReactElement<any>).props.className || 'text-cyan-400'} transition-transform duration-300 group-hover/item:scale-110`,
                })}
              </div>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wide text-gray-400 text-center leading-tight transition-colors duration-300 group-hover/item:text-cyan-300">
                {service.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center">
        <button
          type="button"
          onClick={() => setShowAllServices((v) => !v)}
          aria-expanded={showAllServices}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400/60 px-8 py-3.5 text-cyan-300 font-black uppercase tracking-[0.18em] text-[11px] sm:text-xs transition-all shadow-[0_0_24px_rgba(34,211,238,0.12)]"
        >
          {showAllServices ? t.solutions.hideList : t.solutions.showAll}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${showAllServices ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          className={`w-full grid transition-[grid-template-rows] duration-500 ease-out ${
            showAllServices ? 'grid-rows-[1fr] mt-10' : 'grid-rows-[0fr] mt-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 pb-2">
              {services.map((service) => (
                <PriceCard
                  key={service.id}
                  service={service}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCases = () => {
    const expanded = cases.find((c) => c.id === expandedCaseId) || null;
    return (
      <div id="cases" className="py-12 sm:py-20 md:py-28 lg:py-32 container mx-auto px-6 scroll-mt-20">
        <SectionTitle title={t.cases.title} subtitle={t.cases.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {cases.map((item) => (
            <CaseCard
              key={item.id}
              item={item}
              expanded={expandedCaseId === item.id}
              onToggle={() => setExpandedCaseId((prev) => (prev === item.id ? null : item.id))}
            />
          ))}
        </div>
        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            expanded ? 'grid-rows-[1fr] mt-6 sm:mt-8' : 'grid-rows-[0fr] mt-0'
          }`}
        >
          <div className="overflow-hidden">
            {expanded && <CaseDetails item={expanded} />}
          </div>
        </div>
      </div>
    );
  };

  const renderAIIntegration = () => (
    <div className="py-12 sm:py-20 md:py-28 lg:py-32 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle title={t.aiIntegration.title} />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {t.aiIntegration.steps.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
                {React.cloneElement(AI_INTEGRATION_ICONS[idx] as React.ReactElement<any>, { size: 24 })}
              </div>
              <h4 className="font-bold text-lg mb-3">{item.t}</h4>
              <p className="text-gray-500 text-sm">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formName.trim() || !formPhone.trim()) {
      alert(t.forms.fillBoth);
      return;
    }

    if (!agree) {
      alert(t.forms.agreeRequired);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('Sending application:', { name: formName, phone: formPhone });
      
      const response = await fetch('/api/send-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formName,
          phone: formPhone
        }),
      });

      console.log('Server response:', response.status, response.statusText);

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        alert(t.forms.thankYou);
        setFormName('');
        setFormPhone('');
      } else {
        throw new Error(data.error || t.forms.sendError);
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.error('Full error:', err);
      alert(`${t.forms.sendError}: ${errorMsg}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Dedicated mobile layout lives in mobile/MobileLanding.tsx + mobile/mobile.css
  if (isMobile) {
    return <MobileLanding />;
  }

  return (
    <div className="bg-[#07090f] min-h-screen selection:bg-cyan-500/30">
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      <ExpertModal expert={selectedExpert} onClose={() => setSelectedExpert(null)} />
      
      {/* FLOATING AI ASSISTANT */}
      <SupportFAQ />

      {/* HEADER / NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 glass-card !bg-black/60 border-none px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3 group">
          <Cpu className="animate-ai-icon" size={24} />
          <div className="text-xl md:text-2xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-blue-400">
            AI PROFIT FLOW
          </div>
        </div>
        <div className="hidden md:flex gap-10 text-xs font-black tracking-[0.2em] text-gray-400 uppercase">
          <a href="#solutions" className="hover:text-cyan-400 transition-colors">{t.nav.solutions}</a>
          <a href="#cases" className="hover:text-cyan-400 transition-colors">{t.nav.cases}</a>
          <a href="#contacts" className="hover:text-cyan-400 transition-colors">{t.nav.contacts}</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:inline-block bg-cyan-500 text-black px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            {t.nav.consultation}
          </button>
          <LanguageSwitcher compact />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md bg-white/5 hover:bg-white/10"
            aria-label={t.nav.openMenu}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="white" opacity="0.8" />
              <rect y="6" width="20" height="2" rx="1" fill="white" opacity="0.8" />
              <rect y="12" width="20" height="2" rx="1" fill="white" opacity="0.8" />
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md md:hidden p-6 z-40">
            <div className="flex flex-col gap-4 text-lg">
              <a href="#solutions" className="font-black text-white">{t.nav.solutions}</a>
              <a href="#cases" className="font-black text-white">{t.nav.cases}</a>
              <a href="#contacts" className="font-black text-white">{t.nav.contacts}</a>
              <div className="mt-2 text-[11px] uppercase tracking-widest text-gray-500 font-black">{t.nav.writeUs}</div>
              <LanguageSwitcher compact className="self-start" />
              <SocialLinksRow variant="menu" />
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="hero-stage relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="hero-grid" aria-hidden />
        <div className="hero-scan" aria-hidden />
        <div className="hero-orbit" aria-hidden />

        {/* Neural mesh: draw-in, then quiet life */}
        <svg
          className="hero-mesh"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroWire" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <g>
            <path className="hero-mesh-line" d="M80 180 L260 240 L420 120 L610 210 L780 140 L980 230 L1120 160" />
            <path className="hero-mesh-line" d="M120 520 L300 430 L480 510 L670 390 L860 470 L1040 400" />
            <path className="hero-mesh-line" d="M260 240 L300 430 M420 120 L480 510 M610 210 L670 390 M780 140 L860 470" />
          </g>
          <g>
            {[
              [80, 180], [260, 240], [420, 120], [610, 210], [780, 140], [980, 230], [1120, 160],
              [120, 520], [300, 430], [480, 510], [670, 390], [860, 470], [1040, 400],
            ].map(([x, y], i) => (
              <circle
                key={i}
                className={`hero-mesh-node${i % 3 === 0 ? ' is-alive' : ''}`}
                cx={x}
                cy={y}
                r={i % 3 === 0 ? 3.6 : 2.3}
                style={{ animationDelay: `${0.45 + i * 0.07}s` }}
              />
            ))}
          </g>
          <circle className="hero-pulse-packet" r="2.8" />
          <circle className="hero-pulse-packet alt" r="2.4" />
        </svg>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="hero-fade-up mb-7 md:mb-9">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-cyan-400/20 bg-black/35 backdrop-blur-md hero-status text-[10px] sm:text-[11px] text-cyan-200/90 uppercase font-bold">
              <span className="hero-status-dot" />
              {t.hero.status}
            </div>
          </div>

          <div className="hero-fade-up hero-fade-up-delay-1 mb-5 md:mb-6">
            <div className="text-sm sm:text-base md:text-lg font-heading font-bold tracking-[0.35em] text-white/90">
              AI PROFIT FLOW
            </div>
          </div>

          <h1 className="hero-fade-up hero-fade-up-delay-2 text-3xl sm:text-5xl md:text-7xl font-extrabold font-heading leading-[1.08] mb-6 sm:mb-8 tracking-tight">
            {t.hero.titleLine1} <br />
            <span className="hero-title-shine text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="hero-fade-up hero-fade-up-delay-3 text-base md:text-xl text-slate-300/90 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>

          <div className="hero-fade-up hero-fade-up-delay-4 flex flex-col gap-7 items-center">
            <button
              onClick={() => document.getElementById('phone-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-extrabold text-lg hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-3 border border-white/10"
            >
              {t.hero.cta} <ArrowRight size={22} />
            </button>
            <SocialLinksRow variant="hero" />
          </div>
        </div>
      </section>

      {/* BLOCK 1: Как упростить работу */}
      <section className="py-12 sm:py-20 md:py-28 lg:py-32 container mx-auto px-6 relative z-10">
        <SectionTitle title={<>{t.workBoost.titleBefore} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-serif">{t.workBoost.titleAccent}</span> {t.workBoost.titleAfter}</>} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-6 sm:p-10 rounded-[3rem] border-cyan-500/20">
            <div className="bg-cyan-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="text-cyan-400" size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{t.workBoost.card1Title}</h3>
            <p className="text-gray-400 leading-snug md:leading-relaxed italic text-base md:text-lg">
                {t.workBoost.card1Text}
            </p>
          </div>
          <div className="glass-card p-6 sm:p-10 rounded-[3rem] border-blue-500/20">
            <div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <TrendingUp className="text-blue-400" size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{t.workBoost.card2Title}</h3>
            <p className="text-gray-400 leading-snug md:leading-relaxed italic text-base md:text-lg">
                {t.workBoost.card2Text}
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      {renderSolutions()}

      {/* BLOCK 2: Как автоматизация помогает сотрудникам */}
      <section className="py-12 sm:py-20 md:py-28 lg:py-32 container mx-auto px-6">
        <SectionTitle title={<>{t.automationHelp.titleBefore} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-serif">{t.automationHelp.titleAccent}</span></>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.automationHelp.items.map((item, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-10 rounded-[3rem] hover:border-cyan-500/40">
              {/* Cast to ReactElement<any> to fix 'size' property error */}
              <div className="text-cyan-400 mb-6">{React.cloneElement(AUTOMATION_HELP_ICONS[idx] as React.ReactElement<any>, { size: 36 })}</div>
              <h4 className="text-xl font-bold mb-4">{item.t}</h4>
              <p className="text-gray-400 italic leading-snug md:leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 3: Доход вашего бизнеса - ОБНОВЛЕННЫЙ С ШАГАМИ */}
      <section className="py-12 sm:py-20 md:py-28 lg:py-32 bg-black/30 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 px-4">
            <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tight text-white leading-[1.3]">
                {t.income.titleBefore} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-serif text-5xl md:text-7xl lowercase tracking-normal mx-2">{t.income.titleAccent}</span> 
                {t.income.titleAfter}
            </h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mt-8 opacity-50 shadow-[0_0_15px_#22d3ee]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 -translate-y-1/2 z-0"></div>
            
            {t.income.steps.map((item, idx) => (
              <div key={idx} className="relative z-10 group">
                <div className="glass-card p-10 rounded-[3rem] border-white/5 group-hover:border-cyan-500/50 h-full flex flex-col items-center text-center pt-20 pb-12 transition-all">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#070709] border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 font-black text-2xl shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    {item.n}
                  </div>
                  <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    {/* Cast to ReactElement<any> to fix 'size' and 'strokeWidth' property errors */}
                    {React.cloneElement(INCOME_ICONS[idx] as React.ReactElement<any>, { size: 40, strokeWidth: 1.5 })}
                  </div>
                  <h4 className="text-xl font-black text-white mb-4 uppercase tracking-wider">{item.t}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed italic px-2">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      {isMobile ? (
        <CollapsibleSection
          id="cases"
          title={t.cases.title}
          alwaysOpen={false}
          isMobile={isMobile}
          opened={sectionOpen.cases}
          onToggle={toggleSection}
        >
          {renderCases()}
        </CollapsibleSection>
      ) : (
        renderCases()
      )}

      {/* EXPERTS */}
      <section id="experts" className="py-12 sm:py-20 md:py-28 lg:py-32 container mx-auto px-6 scroll-mt-20">
        <SectionTitle title={t.experts.title} subtitle={t.experts.subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
            {experts.map(expert => (
                <ExpertCard key={expert.id} expert={expert} onClick={() => setSelectedExpert(expert)} />
            ))}
        </div>
      </section>

      {/* BLOCK 4: Встраивание ИИ-технологий */}
      {isMobile ? (
        <CollapsibleSection
          id="aiIntegration"
          title={t.aiIntegration.title}
          alwaysOpen={false}
          isMobile={isMobile}
          opened={sectionOpen.aiIntegration}
          onToggle={toggleSection}
        >
          {renderAIIntegration()}
        </CollapsibleSection>
      ) : (
        renderAIIntegration()
      )}

      {/* BLOCK 5: Пошаговый план работы */}
      <section className="py-12 sm:py-20 md:py-28 lg:py-32 container mx-auto px-6">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tight text-white leading-[1.3]">
              {t.plan.titleBefore} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-serif text-5xl md:text-7xl lowercase tracking-normal mx-2">{t.plan.titleAccent}</span> 
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-8 opacity-50 shadow-[0_0_15px_#22d3ee]"></div>
        </div>

        <div className="text-center mb-16">
          <button 
            onClick={() => setShowPlan(!showPlan)}
            className="bg-white/5 border border-white/10 hover:border-cyan-500/50 px-12 py-5 rounded-[2rem] text-cyan-400 font-black uppercase tracking-[0.2em] transition-all flex items-center gap-4 mx-auto group shadow-2xl"
          >
            {showPlan ? t.plan.hide : t.plan.show}
            <ArrowRight size={24} className={`transition-transform duration-500 ${showPlan ? "-rotate-90 text-white" : "rotate-90"}`} />
          </button>
        </div>

        {showPlan && (
          <div className="animate-in fade-in slide-in-from-top-8 duration-700">
            <div className="max-w-4xl mx-auto space-y-10 relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/20 -translate-x-1/2 hidden md:block"></div>
              {t.plan.steps.map((step, idx) => (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-left">
                    <div className={`glass-card p-8 rounded-[2.5rem] border-cyan-500/10 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h4 className="text-xl font-bold text-cyan-400 mb-2">{step.t}</h4>
                      <p className="text-gray-400 italic">{step.d}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black font-black z-10 shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                    {idx + 1}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
            <p className="text-center text-xl text-cyan-400 font-bold mt-20 italic px-4">
                {t.plan.footerNote}
            </p>
          </div>
        )}
      </section>

      {/* CALL TO ACTION */}
      <section id="phone-form" className="py-12 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8 md:p-16 rounded-[3rem] border-cyan-500/30 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5"></div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 sm:mb-10 leading-snug uppercase relative z-10">
              {t.cta.titleLine1} <br /> {t.cta.titleLine2}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12 leading-snug relative z-10">
              {t.cta.subtitle}
            </p>
            <div className="max-w-sm sm:max-w-md mx-auto relative z-10">
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                      <input 
                        type="text" 
                        placeholder={t.cta.namePh} 
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-3 sm:px-8 sm:py-4 outline-none focus:border-cyan-500 transition-colors text-base sm:text-lg" 
                      />
                  <input 
                    type="tel" 
                    placeholder={t.cta.phonePh} 
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-3 sm:px-8 sm:py-4 outline-none focus:border-cyan-500 transition-colors text-base sm:text-lg" 
                  />
                  <div className="flex items-start gap-3 text-sm text-gray-400">
                    <input 
                      type="checkbox" 
                      checked={agree} 
                      onChange={(e) => setAgree(e.target.checked)} 
                      className="w-4 h-4 mt-1 accent-cyan-500" 
                    />
                    <span>
                      {t.cta.agreePrefix} <a href="/doc/Согласие.pdf" target="_blank" className="text-cyan-400 underline hover:text-cyan-300">{t.cta.agreeLink}</a>
                    </span>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting || !agree}
                    className="w-full bg-cyan-500 text-black font-black py-4 sm:py-6 rounded-2xl hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase tracking-[0.15em] text-base sm:text-lg shadow-2xl"
                  >
                    {isSubmitting ? t.cta.submitting : t.cta.submit}
                  </button>
                </form>
                <div className="mt-8">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-black mb-4">
                    {t.cta.orWrite}
                  </div>
                  <SocialLinksRow variant="hero" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacts" className="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          <div>
            <div className="text-2xl font-black text-cyan-400 mb-6 tracking-tighter">AI PROFIT FLOW</div>
            <p className="text-gray-500 text-sm leading-relaxed">
                {t.footer.blurb}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-black text-white text-xs uppercase tracking-widest mb-2 opacity-50 underline decoration-cyan-500 decoration-2 underline-offset-8">{t.footer.contacts}</div>
            <a href="tel:+79616750654" className="flex items-center gap-3 hover:text-cyan-400 transition-colors text-lg font-bold">
                <Phone size={18} className="text-cyan-400" /> +7 (961) 675-06-54
            </a>
            <a href="mailto:katerina7959@yandex.ru" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <ClipboardCheck size={18} className="text-cyan-400" /> katerina7959@yandex.ru
            </a>
            <div className="mt-4">
              <div className="font-black text-white text-[10px] uppercase tracking-widest mb-3 opacity-50">{t.footer.messengers}</div>
              <SocialLinksRow variant="footer" />
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-2">
            <div className="text-[10px] text-gray-700 uppercase tracking-[0.3em] font-black">
              {t.footer.legalName}
            </div>
            <div className="text-[10px] text-gray-700 uppercase tracking-[0.3em]">
              {t.footer.inn}
            </div>
            <div className="text-[10px] text-gray-800 mt-8">
              {t.footer.rights}
            </div>
            <a href="/doc/Политика.pdf" target="_blank" className="text-[10px] text-gray-700 hover:text-cyan-400 transition-colors mt-2 inline-block">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
