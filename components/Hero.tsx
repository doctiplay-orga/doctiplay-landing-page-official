import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onOpenPartnership: () => void;
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { t } = useLanguage();

  return (
    <section
      id="simulation"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-50 pt-32 pb-20 sm:pt-44 sm:pb-28"
    >
      {/* Static, GPU-cheap backdrop */}
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(0,172,205,0.12) 0%, rgba(79,70,229,0.05) 45%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 text-center sm:px-8">
        <div
          className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm"
          style={{ '--d': '0s' } as React.CSSProperties}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
            {t.hero.badge}
          </span>
        </div>

        <h1
          className="reveal text-balance text-[2.5rem] font-bold leading-[1.08] text-slate-900 sm:text-6xl lg:text-7xl"
          style={{ '--d': '0.08s' } as React.CSSProperties}
        >
          <span className="block">{t.hero.headline}</span>
          <span className="block bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text pb-2 text-transparent">
            {t.hero.headline_highlight}
          </span>
        </h1>

        <p
          className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
          style={{ '--d': '0.16s' } as React.CSSProperties}
        >
          {t.hero_extended.subtext_full}
        </p>

        <div
          className="reveal mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          style={{ '--d': '0.24s' } as React.CSSProperties}
        >
          <a
            href="https://app.doctiplay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group w-full sm:w-auto"
          >
            {t.hero_extended.btn_play_demo}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </a>
          <button onClick={onOpenContact} className="btn-secondary w-full sm:w-auto">
            {t.hero_extended.btn_contact_us}
          </button>
        </div>

        <ul
          className="reveal mt-14 flex flex-col items-center gap-3 border-t border-slate-200/80 pt-8 text-sm font-medium text-slate-600 sm:flex-row sm:gap-10"
          style={{ '--d': '0.32s' } as React.CSSProperties}
        >
          {t.hero_extended.points.map((point: string) => (
            <li key={point} className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;