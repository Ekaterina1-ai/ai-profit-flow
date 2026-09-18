/**
 * MobileLanding — dedicated phone layout for AI Profit Flow.
 * Styles: ./mobile.css
 * Edit this file for mobile UI/content without touching desktop App.tsx.
 */
import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Cpu,
  FileCheck,
  GraduationCap as Academy,
  Headset,
  HelpCircle,
  Menu,
  Phone,
  Search,
  Send,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
  Palmtree,
} from 'lucide-react';
import { useI18n } from '../i18n';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import './mobile.css';

const SOCIAL = [
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/katerina_happy1',
    handle: '@katerina_happy1',
    color: '#2AABEE',
  },
  {
    id: 'max',
    label: 'Max',
    href: 'https://max.ru/u/f9LHodD0cOJqSY8zi8oucx8bDFTldWgIefi51aTHh0SMs3gSOWpMwP5yYa4',
    handle: 'Max',
    color: '#7C5CFF',
  },
  {
    id: 'vk',
    label: 'VK',
    href: 'https://vk.ru/ai.profitflow_bisness',
    handle: 'ai.profitflow_bisness',
    color: '#0077FF',
  },
] as const;

const SocialGlyph: React.FC<{ id: string; size?: number }> = ({ id, size = 18 }) => {
  if (id === 'telegram') return <Send size={size} />;
  if (id === 'max') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zm3.16 14.27h-1.48c-.56 0-.73-.45-1.73-1.47-.87-.88-1.25-.99-1.47-.99-.3 0-.39.09-.39.5v1.34c0 .36-.12.58-1.07.58-1.58 0-3.33-.96-4.56-2.74-1.85-2.64-2.36-4.62-2.36-5.03 0-.22.09-.42.5-.42h1.48c.37 0 .51.17.65.57.72 2.08 1.93 3.9 2.43 3.9.19 0 .27-.09.27-.56V9.4c-.06-.98-.57-1.06-.57-1.41 0-.18.15-.36.39-.36h2.33c.31 0 .42.17.42.53v2.86c0 .31.14.42.22.42.19 0 .35-.11.7-.46 1.07-1.2 1.83-3.05 1.83-3.05.1-.22.27-.42.64-.42h1.48c.44 0 .54.23.44.53-.18.86-1.95 3.34-1.95 3.34-.16.26-.22.37 0 .66.16.22.7.68 1.06 1.09.65.74 1.15 1.36 1.28 1.79.14.42-.07.64-.49.64z" />
    </svg>
  );
};

type Service = {
  id: number;
  title: string;
  price: string;
  shortDesc: string;
  features: string[];
  icon: React.ReactNode;
};

const SERVICE_META = [
  {
    id: 1,
    price: '15 000',
    icon: <Search className="text-cyan-400" />,
  },
  {
    id: 2,
    price: '45 000',
    icon: <Users className="text-blue-400" />,
  },
  {
    id: 3,
    price: '75 000',
    icon: <Cpu className="text-cyan-300" />,
  },
  {
    id: 4,
    price: '50 000',
    icon: <BarChart3 className="text-indigo-400" />,
  },
  {
    id: 5,
    price: '30 000',
    icon: <Academy className="text-pink-400" />,
  },
  {
    id: 6,
    price: '60 000',
    icon: <ShoppingBag className="text-orange-400" />,
  },
  {
    id: 7,
    price: '50 000',
    icon: <Palmtree className="text-green-400" />,
  },
  {
    id: 8,
    price: '20 000',
    icon: <Headset className="text-purple-400" />,
  },
];

type CaseItem = {
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
    icon: <Users size={18} />,
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
    icon: <Cpu size={18} />,
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
    icon: <ShoppingBag size={18} />,
    screenshots: [
      { src: '/projects/zakup/ui-1.jpg' },
      { src: '/projects/zakup/ui-2.jpg' },
      { src: '/projects/zakup/zakup-1.jpg' },
    ],
    presentationUrl: 'https://disk.yandex.ru/i/mQ94_XL-O9_59g',
  },
  {
    id: 4,
    icon: <Sparkles size={18} />,
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

type Expert = {
  id: number;
  name: string;
  title: string;
  photo: string;
  shortDesc: string;
  fullDesc: string;
};

const EXPERT_META = [
  {
    id: 1,
    photo: '/info/Екатерина.jpg',
  },
  {
    id: 2,
    photo: '/info/Даша.jpg',
  },
  {
    id: 3,
    photo: '/info/Евгения.png',
  },
];

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const MobileLanding: React.FC = () => {
  const { t } = useI18n();
  const services = useMemo<Service[]>(
    () =>
      SERVICE_META.map((item, idx) => ({
        ...item,
        ...t.services[idx],
      })),
    [t],
  );
  const cases = useMemo<CaseItem[]>(
    () =>
      CASE_META.map((item, idx) => ({
        ...item,
        ...t.caseItems[idx],
        screenshots: item.screenshots.map((shot, shotIdx) => ({
          ...shot,
          alt: t.caseItems[idx].screenshotsAlt[shotIdx] ?? '',
        })),
      })),
    [t],
  );
  const experts = useMemo<Expert[]>(
    () =>
      EXPERT_META.map((item, idx) => ({
        ...item,
        ...t.expertItems[idx],
      })),
    [t],
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [serviceId, setServiceId] = useState<number | null>(null);
  const [expertId, setExpertId] = useState<number | null>(null);
  const [faqOpen, setFaqOpen] = useState(false);
  const [faqId, setFaqId] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState('hero');
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [svcStep, setSvcStep] = useState<'details' | 'form'>('details');
  const [svcName, setSvcName] = useState('');
  const [svcPhone, setSvcPhone] = useState('');
  const [svcAgree, setSvcAgree] = useState(false);
  const [svcSending, setSvcSending] = useState(false);
  const [svcSent, setSvcSent] = useState(false);
  const service = services.find((item) => item.id === serviceId) ?? null;
  const expert = experts.find((item) => item.id === expertId) ?? null;

  useEffect(() => {
    document.body.style.overflow = menuOpen || !!service || !!expert || faqOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, service, expert, faqOpen]);

  useEffect(() => {
    setSvcStep('details');
    setSvcName('');
    setSvcPhone('');
    setSvcAgree(false);
    setSvcSending(false);
    setSvcSent(false);
  }, [serviceId]);

  useEffect(() => {
    const ids = ['m-hero', 'm-solutions', 'm-cases', 'm-phone-form'];
    const onScroll = () => {
      let current = 'hero';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) {
          current = id.replace('m-', '');
        }
      }
      setActiveNav(current === 'phone-form' ? 'form' : current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setMenuOpen(false);
    setFaqOpen(false);
    scrollToId(id);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) {
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
        body: JSON.stringify({ name: formName.trim(), phone: formPhone.trim() }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || t.forms.sendError);
      alert(t.forms.thankYou);
      setFormName('');
      setFormPhone('');
    } catch (err) {
      alert(`❌ ${t.forms.sendError}: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSubmitting(false);
    }
  };

  const submitService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;
    if (!svcName.trim() || !svcPhone.trim()) {
      alert(t.forms.fillBoth);
      return;
    }
    if (!svcAgree) {
      alert(t.forms.agreeRequired);
      return;
    }
    setSvcSending(true);
    try {
      const response = await fetch('/api/send-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: svcName.trim(),
          phone: svcPhone.trim(),
          service: service.title,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || t.forms.sendError);
      setSvcSent(true);
    } catch (err) {
      alert(`❌ ${t.forms.sendError}: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setSvcSending(false);
    }
  };

  return (
    <div className="m-root">
      <header className="m-header">
        <div className="m-brand">
          <Cpu className="animate-ai-icon" size={22} />
          <div className="m-brand-text">AI PROFIT FLOW</div>
        </div>
        <LanguageSwitcher compact />
        <button type="button" className="m-icon-btn" aria-label={t.nav.openMenu} onClick={() => setMenuOpen(true)}>
          <Menu size={20} />
        </button>
      </header>

      <div
        className={`m-drawer-backdrop${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <aside className={`m-drawer${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <div className="m-brand">
            <Cpu className="animate-ai-icon" size={20} />
            <div className="m-brand-text">
              AI PROFIT FLOW
            </div>
          </div>
          <LanguageSwitcher compact />
          <button type="button" className="m-icon-btn" aria-label={t.common.close} onClick={() => setMenuOpen(false)}>
            <X size={18} />
          </button>
        </div>
        <button type="button" className="m-drawer-link" onClick={() => go('m-solutions')}>
          {t.nav.solutions}
        </button>
        <button type="button" className="m-drawer-link" onClick={() => go('m-cases')}>
          {t.cases.title}
        </button>
        <button type="button" className="m-drawer-link" onClick={() => go('m-experts')}>
          {t.experts.title}
        </button>
        <button type="button" className="m-drawer-link" onClick={() => go('m-phone-form')}>
          {t.nav.consultation}
        </button>
        <button type="button" className="m-drawer-link" onClick={() => go('m-contacts')}>
          {t.nav.contacts}
        </button>
        <div className="m-drawer-label">{t.nav.writeUs}</div>
        {SOCIAL.map((s) => (
          <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" style={{ color: s.color }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <SocialGlyph id={s.id} size={16} /> {s.label}
            </span>
          </a>
        ))}
      </aside>

      {/* HERO */}
      <section id="m-hero" className="m-hero">
        <div className="m-hero-grid" aria-hidden />
        <div className="m-hero-inner">
          <div className="m-status m-fade-up">
            <span className="m-status-dot" />
            {t.hero.status}
          </div>
          <br />
          <div className="m-hero-brand m-fade-up m-fade-up-2">AI PROFIT FLOW</div>
          <h1 className="m-fade-up m-fade-up-3">
            {t.hero.titleLine1}
            <br />
            <span className="m-accent">{t.hero.titleLine2}</span>
          </h1>
          <p className="m-fade-up m-fade-up-3">
            {t.hero.subtitle}
          </p>
          <button type="button" className="m-cta m-fade-up m-fade-up-4" onClick={() => go('m-phone-form')}>
            {t.hero.cta} <ArrowRight size={18} />
          </button>
          <div className="m-social-row m-fade-up m-fade-up-4">
            {SOCIAL.map((s) => (
              <a key={s.id} className="m-social-chip" href={s.href} target="_blank" rel="noopener noreferrer">
                <span style={{ color: s.color }}>
                  <SocialGlyph id={s.id} size={18} />
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="m-section">
        <h2 className="m-section-title">
          {t.workBoost.titleBefore} <span className="m-accent">{t.workBoost.titleAccent}</span>
        </h2>
        <div className="m-rule" />
        <div className="m-card">
          <div className="m-card-icon">
            <Zap size={22} />
          </div>
          <h3>{t.workBoost.card1Title}</h3>
          <p>{t.workBoost.card1Text}</p>
        </div>
        <div className="m-card">
          <div className="m-card-icon" style={{ background: 'rgba(59,130,246,0.12)', color: '#60a5fa' }}>
            <TrendingUp size={22} />
          </div>
          <h3>{t.workBoost.card2Title}</h3>
          <p>{t.workBoost.card2Text}</p>
        </div>
      </section>

      {/* Solutions */}
      <section id="m-solutions" className="m-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ padding: '0 16px' }}>
          <h2 className="m-section-title">{t.solutions.title}</h2>
          <p className="m-section-sub">{t.solutions.subtitle}</p>
          <div className="m-rule" />
        </div>
        <div className="m-solutions-marquee">
          <div className="m-solutions-marquee-track">
            {[...services, ...services].map((item, idx) => (
              <button
                key={`${item.id}-${idx}`}
                type="button"
                className="m-sol-chip"
                onClick={() => setServiceId(item.id)}
              >
                <div className="m-sol-icon">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.75 })}
                </div>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
        <button type="button" className="m-btn-ghost" onClick={() => setShowAllServices((v) => !v)}>
          {showAllServices ? t.solutions.hideList : t.solutions.showAll}
          <ChevronDown size={14} style={{ transform: showAllServices ? 'rotate(180deg)' : undefined }} />
        </button>
        {showAllServices && (
          <div className="m-service-list">
            {services.map((item) => (
              <button key={item.id} type="button" className="m-service-row" onClick={() => setServiceId(item.id)}>
                <div className="m-card-icon" style={{ marginBottom: 0, width: 44, height: 44 }}>
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <strong>{item.title}</strong>
                  <em>{t.solutions.priceFrom} {item.price} {t.common.currency}</em>
                  <small>{item.shortDesc}</small>
                </div>
                <ArrowRight size={16} color="#67e8f9" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Employees */}
      <section className="m-section">
        <h2 className="m-section-title">
          {t.automationHelp.titleBefore} <span className="m-accent">{t.automationHelp.titleAccent}</span>
        </h2>
        <div className="m-rule" />
        {t.automationHelp.items.map((item, idx) => (
          <div key={item.t} className="m-card">
            <div className="m-card-icon">{[<Clock size={22} />, <ClipboardCheck size={22} />, <Target size={22} />][idx]}</div>
            <h3>{item.t}</h3>
            <p>{item.d}</p>
          </div>
        ))}
      </section>

      {/* Income steps */}
      <section className="m-section">
        <h2 className="m-section-title">
          {t.income.titleBefore} <span className="m-accent">{t.income.titleAccent}</span>
        </h2>
        <div className="m-rule" />
        <div className="m-steps">
          {t.income.steps.map((item, idx) => (
            <div key={item.n} className="m-step">
              <div className="m-step-num">{item.n}</div>
              <div className="m-card">
                <div style={{ opacity: 0.7, marginBottom: 8, color: '#22d3ee' }}>
                  {[<Cpu size={20} />, <Zap size={20} />, <TrendingUp size={20} />, <BarChart3 size={20} />][idx]}
                </div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section id="m-cases" className="m-section">
        <h2 className="m-section-title">{t.cases.title}</h2>
        <p className="m-section-sub">{t.cases.subtitle}</p>
        <div className="m-rule" />
        {cases.map((item) => {
          const open = expandedCase === item.id;
          return (
            <div key={item.id} className="m-case">
              <button
                type="button"
                className="m-case-head"
                aria-expanded={open}
                onClick={() => setExpandedCase(open ? null : item.id)}
              >
                <div className="m-case-badge">{item.icon}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3>{item.name}</h3>
                  <p>{item.result}</p>
                </div>
                <ChevronDown
                  size={18}
                  color="#67e8f9"
                  style={{ transform: open ? 'rotate(180deg)' : undefined, transition: 'transform .2s' }}
                />
              </button>
              {open && (
                <div className="m-case-body">
                  <p>{item.text}</p>
                  {item.benefits.map((b) => (
                    <div key={b} className="m-benefit">
                      <CheckCircle size={15} color="#22d3ee" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                  <div className="m-shot-scroll">
                    {item.screenshots.map((shot) => (
                      <a key={shot.src} href={shot.src} target="_blank" rel="noopener noreferrer" className="m-shot">
                        <img src={shot.src} alt={shot.alt} loading="lazy" />
                        <span>{shot.alt}</span>
                      </a>
                    ))}
                  </div>
                  <div className="m-link-row">
                    <a className="m-link-primary" href={item.presentationUrl} target="_blank" rel="noopener noreferrer">
                      {t.cases.watchPresentation}
                    </a>
                    {item.siteUrl && (
                      <a className="m-link-secondary" href={item.siteUrl} target="_blank" rel="noopener noreferrer">
                        {t.cases.sitePrefix} {item.siteLabel}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Experts */}
      <section id="m-experts" className="m-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ padding: '0 16px' }}>
          <h2 className="m-section-title">{t.experts.title}</h2>
          <p className="m-section-sub">{t.experts.subtitle}</p>
          <div className="m-rule" />
        </div>
        <div className="m-hscroll">
          {experts.map((item) => (
            <div key={item.id} className="m-card m-expert">
              <img src={item.photo} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="role">{item.title}</div>
              <p>{item.shortDesc}</p>
              <button type="button" onClick={() => setExpertId(item.id)}>
                {t.experts.more}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Integration */}
      <section className="m-section">
        <h2 className="m-section-title">{t.aiIntegration.title}</h2>
        <div className="m-rule" />
        <div className="m-steps">
          {t.aiIntegration.steps.map((item, idx) => (
            <div key={item.t} className="m-step">
              <div className="m-step-num">{idx + 1}</div>
              <div className="m-card">
                <div style={{ color: '#22d3ee', marginBottom: 8 }}>
                  {[<Search size={18} />, <FileCheck size={18} />, <Cpu size={18} />, <Academy size={18} />, <Headset size={18} />][idx]}
                </div>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plan */}
      <section className="m-section">
        <h2 className="m-section-title">
          {t.plan.titleBefore} <span className="m-accent">{t.plan.titleAccent}</span>
        </h2>
        <div className="m-rule" />
        <div className="m-steps">
          {t.plan.steps.map((step, idx) => (
            <div key={step.t} className="m-step">
              <div className="m-step-num" style={{ background: '#22d3ee', color: '#000', border: 0 }}>
                {idx + 1}
              </div>
              <div className="m-card">
                <h3 style={{ color: '#67e8f9' }}>{step.t}</h3>
                <p>{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="m-phone-form" className="m-section">
        <div className="m-form-wrap">
          <h2>
            {t.cta.titleLine1}
            <br />
            {t.cta.titleLine2}
          </h2>
          <p>{t.cta.subtitle}</p>
          <form onSubmit={submitForm}>
            <input
              className="m-input"
              type="text"
              placeholder={t.cta.namePh}
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
            <input
              className="m-input"
              type="tel"
              placeholder={t.cta.phonePh}
              value={formPhone}
              onChange={(e) => setFormPhone(e.target.value)}
            />
            <label className="m-agree">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <span>
                {t.cta.agreePrefix}{' '}
                <a href="/doc/Согласие.pdf" target="_blank" rel="noreferrer">
                  {t.cta.agreeLink}
                </a>
              </span>
            </label>
            <button type="submit" className="m-cta" disabled={submitting || !agree} style={{ opacity: submitting || !agree ? 0.5 : 1 }}>
              {submitting ? t.cta.submitting : t.cta.submit}
            </button>
          </form>
          <div className="m-drawer-label" style={{ textAlign: 'center' }}>
            {t.cta.orWrite}
          </div>
          <div className="m-social-row">
            {SOCIAL.map((s) => (
              <a key={s.id} className="m-social-chip" href={s.href} target="_blank" rel="noopener noreferrer">
                <span style={{ color: s.color }}>
                  <SocialGlyph id={s.id} size={16} />
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="m-contacts" className="m-footer">
        <div className="logo">AI PROFIT FLOW</div>
        <p>{t.footer.blurb}</p>
        <a href="tel:+79616750654">
          <Phone size={16} color="#22d3ee" /> +7 (961) 675-06-54
        </a>
        <a href="mailto:katerina7959@yandex.ru">
          <ClipboardCheck size={16} color="#22d3ee" /> katerina7959@yandex.ru
        </a>
        <div className="m-drawer-label">{t.footer.messengers}</div>
        {SOCIAL.map((s) => (
          <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer">
            <span style={{ color: s.color }}>
              <SocialGlyph id={s.id} size={16} />
            </span>
            {s.label}
            <span style={{ color: '#64748b', fontWeight: 500, fontSize: 12 }}>{s.handle}</span>
          </a>
        ))}
        <div className="legal">
          {t.footer.legalName}
          <br />
          {t.footer.inn}
          <br />{t.footer.rights}
          <br />
          <a href="/doc/Политика.pdf" target="_blank" rel="noreferrer" style={{ color: '#475569', display: 'inline' }}>
            {t.footer.privacy}
          </a>
        </div>
      </footer>

      {/* Bottom nav */}
      <nav className="m-bottom-nav" aria-label="AI PROFIT FLOW">
        <button type="button" className={activeNav === 'hero' ? 'is-active' : ''} onClick={() => go('m-hero')}>
          <Cpu size={18} />
          AI
        </button>
        <button type="button" className={activeNav === 'solutions' ? 'is-active' : ''} onClick={() => go('m-solutions')}>
          <Sparkles size={18} />
          {t.nav.solutions}
        </button>
        <button type="button" className={activeNav === 'cases' ? 'is-active' : ''} onClick={() => go('m-cases')}>
          <BarChart3 size={18} />
          {t.cases.title}
        </button>
        <button type="button" className={activeNav === 'form' ? 'is-active' : ''} onClick={() => go('m-phone-form')}>
          <Phone size={18} />
          {t.nav.consultation}
        </button>
      </nav>

      {/* FAQ FAB */}
      <div
        style={{
          position: 'fixed',
          right: 14,
          bottom: 'calc(64px + env(safe-area-inset-bottom, 0px) + 14px)',
          zIndex: 58,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 10,
        }}
      >
        {faqOpen && (
          <div
            className="m-card"
            style={{
              width: 'min(100vw - 28px, 340px)',
              maxHeight: '58vh',
              overflow: 'auto',
              borderColor: 'rgba(34,211,238,0.35)',
              padding: 0,
            }}
          >
            <div
              style={{
                padding: '14px 14px 12px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div>
                <div style={{ fontWeight: 900, fontSize: 14 }}>{t.faq.support}</div>
                <div style={{ fontSize: 11, color: '#67e8f9' }}>{t.faq.online}</div>
              </div>
              <button type="button" className="m-icon-btn" aria-label={t.faq.closeAria} onClick={() => setFaqOpen(false)}>
                <X size={16} />
              </button>
            </div>
            <div style={{ padding: 10 }}>
              {t.faq.items.map((item, idx) => {
                const open = faqId === idx;
                return (
                  <div
                    key={item.q}
                    style={{
                      marginBottom: 8,
                      borderRadius: 14,
                      border: `1px solid ${open ? 'rgba(34,211,238,0.35)' : 'rgba(255,255,255,0.06)'}`,
                      background: open ? 'rgba(34,211,238,0.06)' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setFaqId(open ? null : idx)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        gap: 8,
                        alignItems: 'flex-start',
                        padding: 12,
                        background: 'transparent',
                        border: 0,
                        color: '#fff',
                        textAlign: 'left',
                        fontWeight: 700,
                        fontSize: 13,
                      }}
                    >
                      <HelpCircle size={15} color={open ? '#22d3ee' : '#64748b'} style={{ marginTop: 2, flexShrink: 0 }} />
                      <span style={{ flex: 1 }}>{item.q}</span>
                      <ChevronDown
                        size={15}
                        style={{ transform: open ? 'rotate(180deg)' : undefined, transition: 'transform .2s' }}
                      />
                    </button>
                    {open && (
                      <p style={{ margin: '0 12px 12px 35px', color: '#cbd5e1', fontSize: 12, lineHeight: 1.5 }}>{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!faqOpen && (
          <div
            style={{
              background: 'linear-gradient(90deg,#06b6d4,#2563eb)',
              color: '#000',
              fontSize: 10,
              fontWeight: 900,
              padding: '6px 12px',
              borderRadius: 999,
            }}
          >
            {t.faq.haveQuestions}
          </div>
        )}
        <button
          type="button"
          aria-label={faqOpen ? t.faq.closeAria : t.faq.openAria}
          onClick={() => setFaqOpen((v) => !v)}
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            border: '2px solid rgba(34,211,238,0.4)',
            background: '#0a0a0c',
            color: '#22d3ee',
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0 10px 30px rgba(34,211,238,0.25)',
          }}
        >
          {faqOpen ? <X size={24} /> : <Cpu className="animate-ai-icon" size={28} />}
        </button>
      </div>

      {/* Service modal */}
      {service && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 80,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: 12,
          }}
          onClick={() => setServiceId(null)}
        >
          <div
            className="m-card"
            style={{
              width: '100%',
              maxHeight: '88dvh',
              overflow: 'auto',
              borderRadius: 24,
              borderColor: 'rgba(34,211,238,0.35)',
              padding: 20,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 11, color: '#67e8f9', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {t.forms.serviceApplication}
                </div>
                <h3 style={{ margin: '4px 0 0', fontSize: 20 }}>{service.title}</h3>
                <div style={{ color: '#22d3ee', fontWeight: 900, marginTop: 6 }}>{t.solutions.priceFrom} {service.price} {t.common.currency}</div>
              </div>
              <button type="button" className="m-icon-btn" onClick={() => setServiceId(null)} aria-label={t.common.close}>
                <X size={18} />
              </button>
            </div>

            {svcStep === 'details' && (
              <>
                <p style={{ color: '#cbd5e1', fontStyle: 'italic', marginBottom: 14 }}>{service.shortDesc}</p>
                {service.features.map((f) => (
                  <div key={f} className="m-benefit">
                    <CheckCircle size={15} color="#22d3ee" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{f}</span>
                  </div>
                ))}
                <button type="button" className="m-cta" style={{ marginTop: 16 }} onClick={() => setSvcStep('form')}>
                  {t.forms.launchProcess}
                </button>
              </>
            )}

            {svcStep === 'form' && !svcSent && (
              <form onSubmit={submitService}>
                <input className="m-input" placeholder={t.cta.namePh} value={svcName} onChange={(e) => setSvcName(e.target.value)} />
                <input className="m-input" type="tel" placeholder={t.cta.phonePh} value={svcPhone} onChange={(e) => setSvcPhone(e.target.value)} />
                <label className="m-agree">
                  <input type="checkbox" checked={svcAgree} onChange={(e) => setSvcAgree(e.target.checked)} />
                  <span>
                    {t.cta.agreePrefix}{' '}
                    <a href="/doc/Согласие.pdf" target="_blank" rel="noreferrer">
                      {t.cta.agreeLink}
                    </a>
                  </span>
                </label>
                <button type="submit" className="m-cta" disabled={svcSending || !svcAgree} style={{ opacity: svcSending || !svcAgree ? 0.5 : 1 }}>
                  {svcSending ? t.cta.submitting : t.cta.submit}
                </button>
                <button
                  type="button"
                  onClick={() => setSvcStep('details')}
                  style={{ width: '100%', marginTop: 10, background: 'transparent', border: 0, color: '#94a3b8', fontWeight: 700 }}
                >
                  {t.forms.backToDesc}
                </button>
              </form>
            )}

            {svcStep === 'form' && svcSent && (
              <div style={{ textAlign: 'center', padding: '12px 0' }}>
                <CheckCircle size={36} color="#22d3ee" style={{ margin: '0 auto 12px' }} />
                <h3 style={{ marginBottom: 8 }}>{t.forms.applicationSent}</h3>
                <p style={{ color: '#94a3b8', marginBottom: 16 }}>{t.forms.thanksService}</p>
                <button type="button" className="m-cta" onClick={() => setServiceId(null)}>
                  {t.common.close}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Expert modal */}
      {expert && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 80,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: 12,
          }}
          onClick={() => setExpertId(null)}
        >
          <div
            className="m-card"
            style={{ width: '100%', maxHeight: '85dvh', overflow: 'auto', borderRadius: 24, padding: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="button" className="m-icon-btn" onClick={() => setExpertId(null)} aria-label={t.common.close}>
                <X size={18} />
              </button>
            </div>
            <img
              src={expert.photo}
              alt={expert.name}
              style={{ width: 84, height: 84, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(34,211,238,0.35)', margin: '0 auto 12px', display: 'block' }}
            />
            <h3 style={{ textAlign: 'center', margin: '0 0 4px' }}>{expert.name}</h3>
            <div style={{ textAlign: 'center', color: '#22d3ee', fontWeight: 800, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
              {expert.title}
            </div>
            <p style={{ color: '#cbd5e1', whiteSpace: 'pre-line', fontSize: 14, lineHeight: 1.55, margin: 0 }}>{expert.fullDesc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileLanding;
