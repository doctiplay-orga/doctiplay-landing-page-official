import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ResearchProps {
  onOpenPartnership: () => void;
}

const Research: React.FC<ResearchProps> = ({ onOpenPartnership }) => {
  const { t } = useLanguage();
  const r = t.research;

  return (
    <section id="recherche" className="defer-render bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className="reveal relative overflow-hidden rounded-3xl px-6 py-12 sm:px-12 sm:py-16"
          style={{ background: 'linear-gradient(135deg, #020e4f 0%, #0b1f5c 55%, #005f78 130%)' }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(50% 70% at 100% 0%, rgba(0,172,205,0.28) 0%, transparent 70%), radial-gradient(40% 60% at 0% 100%, rgba(79,70,229,0.28) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                <span className="h-0.5 w-7 rounded bg-cyan-300" />
                {r.badge}
              </span>
              <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{r.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{r.desc}</p>
              <button
                onClick={onOpenPartnership}
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-secondary transition duration-200 hover:bg-cyan-50 active:scale-[0.98]"
              >
                {r.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
              </button>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{r.points_label}</p>
              <ol className="space-y-3">
                {r.points.map((point: string, i: number) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <span className="font-mono text-sm font-bold text-cyan-300">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[15px] font-medium leading-snug text-slate-100">{point}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
