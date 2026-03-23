import React, { useState, useRef } from 'react';
import { Activity, FileSearch, Mic, BarChart3, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const features = [
  {
    icon: Activity,
    color: '#00accd',
    colorRgb: '0,172,205',
    code: 'PHYSIO_ENGINE_V1',
    accentClass: 'from-cyan-500/15 to-cyan-600/5',
    keyIndex: 0,
  },
  {
    icon: FileSearch,
    color: '#f59e0b',
    colorRgb: '245,158,11',
    code: 'DIAGNOSTIC_CORE',
    accentClass: 'from-amber-500/15 to-amber-600/5',
    keyIndex: 1,
  },
  {
    icon: Mic,
    color: '#10b981',
    colorRgb: '16,185,129',
    code: 'VOICE_RECOGNITION',
    accentClass: 'from-emerald-500/15 to-emerald-600/5',
    keyIndex: 2,
  },
  {
    icon: BarChart3,
    color: '#6366f0',
    colorRgb: '99,102,240',
    code: 'ANALYSIS_CORE_V2',
    accentClass: 'from-indigo-500/15 to-indigo-600/5',
    keyIndex: 3,
  },
];

const FeatureCard: React.FC<{
  feature: typeof features[0];
  title: string;
  items: string[];
}> = ({ feature, title, items }) => {
  const { color, colorRgb, code, icon: Icon } = feature;
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-[2.5rem] flex flex-col overflow-hidden cursor-default"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(0)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        background: `linear-gradient(135deg, rgba(${colorRgb},0.08) 0%, rgba(10,13,28,0.7) 50%, rgba(8,11,24,0.95) 100%)`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid rgba(${colorRgb},${isHovered ? 0.35 : 0.12})`,
        boxShadow: isHovered
          ? `0 30px 80px rgba(${colorRgb},0.2), 0 0 0 1px rgba(${colorRgb},0.15), inset 0 1px 0 rgba(255,255,255,0.06)`
          : 'inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      {/* Glass shimmer top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${colorRgb},0.4), transparent)` }}
      />

      {/* Hover radial glow from top-left */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(ellipse at 20% 20%, rgba(${colorRgb},0.12), transparent 60%)`,
        }}
      />

      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
          style={{
            background: `rgba(${colorRgb},0.12)`,
            border: `1px solid rgba(${colorRgb},0.2)`,
            boxShadow: isHovered ? `0 0 30px rgba(${colorRgb},0.35)` : 'none',
          }}
        >
          <Icon className="w-7 h-7" style={{ color }} strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-wide mb-6">
          {title}
        </h3>

        {/* Checklist — always visible */}
        <ul className="space-y-3 flex-grow mb-8">
          {items && items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <div
                className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: `rgba(${colorRgb},0.12)`,
                  border: `1px solid rgba(${colorRgb},0.25)`,
                }}
              >
                <CheckCircle2 className="w-3 h-3" style={{ color }} />
              </div>
              <span className="text-slate-300 text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div
          className="pt-4 border-t flex items-center justify-between"
          style={{ borderColor: `rgba(${colorRgb},0.12)` }}
        >
          <span
            className="font-display text-[9px] uppercase tracking-[0.2em] transition-colors duration-300"
            style={{ color: isHovered ? color : 'rgba(100,116,139,1)' }}
          >
            {code}
          </span>
          <Activity className="w-4 h-4 transition-colors duration-300" style={{ color: isHovered ? color : '#334155' }} />
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const { t } = useLanguage();

  const featureData = [
    { title: t.features.f1_title, items: t.features.f1_items },
    { title: t.features.f2_title, items: t.features.f2_items },
    { title: t.features.f3_title, items: t.features.f3_items },
    { title: t.features.f4_title, items: t.features.f4_items },
  ];

  return (
    <section id="expertise" className="py-20 sm:py-32 relative overflow-hidden" style={{ backgroundColor: '#0a0d1c' }}>
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(0,172,205,0.05) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(99,102,240,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className="px-6 mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/5 bg-white/5 mb-6 sm:mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-display uppercase tracking-[0.3em] text-slate-300">
              {t.features_extended.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-white mb-6 sm:mb-8 leading-tight">
            {t.features_extended.main_title}
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto font-medium text-lg sm:text-xl leading-relaxed">
            {t.features_extended.main_desc}
          </p>
        </div>

        {/* Feature Grid — 2×2 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.keyIndex}
              feature={feature}
              title={featureData[idx].title}
              items={featureData[idx].items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;