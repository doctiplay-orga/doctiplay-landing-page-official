import React, { useState } from 'react';
import { Stethoscope, HeartPulse, GraduationCap, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ModesProps {
  onOpenBetaOrder: () => void;
}

const modesMeta = [
  { id: 'medical', icon: Stethoscope, color: '#007a9a', tint: 'rgba(0,122,154,0.08)' },
  { id: 'paramedical', icon: HeartPulse, color: '#059669', tint: 'rgba(5,150,105,0.08)' },
  { id: 'ecos', icon: GraduationCap, color: '#d97706', tint: 'rgba(217,119,6,0.09)' },
];

const Modes: React.FC<ModesProps> = ({ onOpenBetaOrder }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const { t } = useLanguage();
  const ms = t.modes_section;
  const modeData = [ms.medical, ms.paramedical, ms.ecos];

  return (
    <section id="modes" className="defer-render bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="eyebrow">{ms.badge}</span>
          <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {ms.section_title_line1}{' '}
            <span className="text-primary">{ms.section_title_line2}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{ms.section_desc}</p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {modesMeta.map((meta, idx) => {
            const mode = modeData[idx];
            const isOpen = openId === meta.id;
            const Icon = meta.icon;
            const panelId = `mode-panel-${meta.id}`;

            return (
              <div key={meta.id} className="reveal" style={{ '--d': `${idx * 0.08}s` } as React.CSSProperties}>
              <article className="card card-hover relative flex flex-col overflow-hidden">
                <div className="h-1 w-full" style={{ background: meta.color }} />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: meta.tint }}
                    >
                      <Icon className="h-5 w-5" style={{ color: meta.color }} strokeWidth={2} />
                    </div>
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.14em]"
                      style={{ color: meta.color }}
                    >
                      {mode.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-slate-900 md:min-h-[3.25rem]">{mode.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{mode.subtitle}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {mode.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable detail (height animates without layout thrash) */}
                  <div
                    id={panelId}
                    className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-5 whitespace-pre-line border-t border-slate-100 pt-5 text-sm leading-relaxed text-slate-600">
                        {mode.desc}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpenId(isOpen ? null : meta.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
                    style={{ color: meta.color }}
                  >
                    {isOpen ? ms.collapse : ms.expand}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <button
                    onClick={onOpenBetaOrder}
                    className="group mt-6 inline-flex w-full items-center justify-between rounded-xl border px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:text-white"
                    style={{ borderColor: meta.color, color: meta.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = meta.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {ms.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" />
                  </button>
                </div>
              </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modes;
