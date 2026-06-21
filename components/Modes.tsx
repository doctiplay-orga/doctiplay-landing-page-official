import React, { useState } from 'react';
import { Stethoscope, HeartPulse, GraduationCap, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ModesProps {
  onOpenBetaOrder: () => void;
}

const modesMeta = [
  {
    id: 'medical',
    icon: Stethoscope,
    color: '#007a9a',
    colorRgb: '0,122,154',
    textColorDark: '#005f78',
    glow: 'hover:shadow-[0_0_60px_rgba(0,122,154,0.25)]',
  },
  {
    id: 'paramedical',
    icon: HeartPulse,
    color: '#10b981',
    colorRgb: '16,185,129',
    textColorDark: '#065f46',
    glow: 'hover:shadow-[0_0_60px_rgba(16,185,129,0.25)]',
  },
  {
    id: 'ecos',
    icon: GraduationCap,
    color: '#f59e0b',
    colorRgb: '245,158,11',
    textColorDark: '#b45309',
    glow: 'hover:shadow-[0_0_60px_rgba(245,158,11,0.25)]',
  },
];

const Modes: React.FC<ModesProps> = ({ onOpenBetaOrder }) => {
  const [hoveredMode, setHoveredMode] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';
  const ms = t.modes_section;

  const modeData = [
    ms.medical,
    ms.paramedical,
    ms.ecos,
  ];

  const toggleMode = (id: string) => {
    setSelectedMode(prev => prev === id ? null : id);
  };

  return (
    <section id="modes" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background mesh blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="px-4 sm:px-6 mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20 reveal" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/25 mb-6 sm:mb-8" style={{backgroundColor: 'rgba(0,122,154,0.08)'}}>
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-display uppercase tracking-[0.3em] text-primary">
              {ms.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-4 sm:mb-6 leading-tight" style={{color:'#0f172a'}}>
            {ms.section_title_line1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-emerald-500 to-amber-500">
              {ms.section_title_line2}
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            {ms.section_desc}
          </p>
        </div>

        {/* Modes Grid — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {modesMeta.map((meta, idx) => {
            const mode = modeData[idx];
            const isHovered = hoveredMode === meta.id;
            const isSelected = selectedMode === meta.id;
            const Icon = meta.icon;

            return (
              <div
                key={meta.id}
                onMouseEnter={() => setHoveredMode(meta.id)}
                onMouseLeave={() => setHoveredMode(null)}
                onClick={() => toggleMode(meta.id)}
                className={`group relative rounded-[2rem] p-6 sm:p-8 flex flex-col cursor-pointer transition-all duration-500 ${meta.glow} hover:-translate-y-2`}
                dir={isRtl ? 'rtl' : 'ltr'}
                style={{
                  background: isHovered
                    ? `linear-gradient(135deg, #ffffff 0%, rgba(${meta.colorRgb},0.08) 100%)`
                    : 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `2px solid rgba(${meta.colorRgb}, ${isHovered ? 0.75 : 0.25})`,
                  boxShadow: isHovered
                    ? `0 20px 40px -10px rgba(${meta.colorRgb}, 0.16), 0 0 0 1px rgba(${meta.colorRgb}, 0.05), inset 0 1px 0 rgba(255,255,255,0.9)`
                    : '0 8px 30px -10px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {/* Top left glow */}
                <div
                  className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at top left, rgba(${meta.colorRgb},0.15), transparent 70%)` }}
                />

                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 w-fit"
                  style={{ 
                    background: `rgba(${meta.colorRgb},0.12)`, 
                    border: `1.5px solid rgba(${meta.colorRgb},0.35)` 
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: meta.color }} />
                  <span className="font-display text-[9.5px] font-black uppercase tracking-[0.2em]" style={{ color: meta.textColorDark }}>
                    {mode.badge}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: `rgba(${meta.colorRgb},0.14)`,
                    border: `2px solid rgba(${meta.colorRgb},0.3)`,
                    boxShadow: isHovered ? `0 0 30px rgba(${meta.colorRgb},0.3)` : 'none',
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: meta.color }} strokeWidth={2} />
                </div>

                {/* Subtitle */}
                <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.22em] mb-2" style={{ color: meta.textColorDark }}>
                  {mode.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-display font-black whitespace-pre-line leading-tight mb-3" style={{color:'#0f172a'}}>
                  {mode.title}
                </h3>

                {/* Click-to-expand Description */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{
                    maxHeight: isSelected ? '240px' : '0px',
                    opacity: isSelected ? 1 : 0,
                    marginBottom: isSelected ? '1rem' : '0',
                  }}
                >
                  <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line text-left rtl:text-right">
                    {mode.desc}
                  </p>
                </div>

                {/* Expand hint */}
                <p className="text-[10.5px] font-display font-bold uppercase tracking-widest mb-5 transition-colors duration-300" style={{ color: isHovered ? meta.color : '#475569' }}>
                  {isSelected ? ms.collapse : ms.expand}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {mode.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[9px] font-display font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{
                        background: `rgba(${meta.colorRgb},0.08)`,
                        color: meta.textColorDark,
                        border: `1.5px solid rgba(${meta.colorRgb},0.25)`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className="mt-auto flex items-center justify-between px-5 py-4 rounded-2xl font-display font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 group/btn w-full shadow-md"
                  style={{
                    background: isHovered ? meta.color : `rgba(${meta.colorRgb},0.08)`,
                    border: `2px solid ${meta.color}`,
                    color: isHovered ? '#ffffff' : meta.textColorDark,
                    boxShadow: isHovered ? `0 12px 24px -10px rgba(${meta.colorRgb}, 0.5)` : 'none',
                  }}
                  onClick={(e) => { e.stopPropagation(); onOpenBetaOrder(); }}
                >
                  <span>{ms.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" style={{ color: isHovered ? '#ffffff' : meta.textColorDark }} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modes;
