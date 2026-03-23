import React, { useState, useRef } from 'react';
import { Activity, FileSearch, Mic, BarChart3, CheckCircle2, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const features = [
  {
    icon: Activity,
    color: '#007a9a',
    colorRgb: '0,122,154',
    code: 'PHYSIO_ENGINE_V1',
    keyIndex: 0,
  },
  {
    icon: FileSearch,
    color: '#b45309',
    colorRgb: '180,83,9',
    code: 'DIAGNOSTIC_CORE',
    keyIndex: 1,
  },
  {
    icon: Mic,
    color: '#047857',
    colorRgb: '4,120,87',
    code: 'VOICE_RECOGNITION',
    keyIndex: 2,
  },
  {
    icon: BarChart3,
    color: '#4338ca',
    colorRgb: '67,56,202',
    code: 'ANALYSIS_CORE_V2',
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
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
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
      className="group relative rounded-[2rem] flex flex-col overflow-hidden cursor-default"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(0)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16,1,0.3,1)',
        background: isHovered
          ? `linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(${colorRgb},0.06) 100%)`
          : 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid rgba(${colorRgb}, ${isHovered ? 0.3 : 0.12})`,
        boxShadow: isHovered
          ? `0 20px 60px rgba(${colorRgb},0.15), 0 0 0 1px rgba(${colorRgb},0.12), inset 0 1px 0 rgba(255,255,255,0.9)`
          : '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
      }}
    >
      {/* Top shimmer edge */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${colorRgb},0.5), transparent)` }}
      />

      {/* Hover radial glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(ellipse at 20% 10%, rgba(${colorRgb},0.08), transparent 65%)`,
        }}
      />

      <div className="relative z-10 p-8 flex flex-col h-full gap-6">
        {/* Icon + Title row */}
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{
              background: `rgba(${colorRgb},0.1)`,
              border: `1px solid rgba(${colorRgb},0.2)`,
              boxShadow: isHovered ? `0 0 20px rgba(${colorRgb},0.25)` : 'none',
            }}
          >
            <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.5} />
          </div>
          <h3 className="text-lg sm:text-xl font-display font-black uppercase tracking-wide leading-tight" style={{ color: '#0f172a' }}>
            {title}
          </h3>
        </div>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, rgba(${colorRgb},0.3), transparent)` }} />

        {/* Checklist — always visible, fills space */}
        <ul className="space-y-3 flex-grow">
          {items && items.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <div
                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: `rgba(${colorRgb},0.1)`,
                  border: `1px solid rgba(${colorRgb},0.25)`,
                }}
              >
                <CheckCircle2 className="w-3 h-3" style={{ color }} />
              </div>
              <span className="text-slate-700 text-sm leading-snug">{item}</span>
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
            style={{ color: isHovered ? color : '#94a3b8' }}
          >
            {code}
          </span>
          <Activity className="w-4 h-4 transition-colors duration-300" style={{ color: isHovered ? color : '#cbd5e1' }} />
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
    <section id="expertise" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Subtle section bg tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,122,154,0.04) 0%, transparent 70%)' }} />

      <div className="px-6 mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 reveal">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6 sm:mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-display uppercase tracking-[0.3em] text-primary">
              {t.features_extended.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-6 sm:mb-8 leading-tight" style={{ color: '#0f172a' }}>
            {t.features_extended.main_title}
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg sm:text-xl leading-relaxed">
            {t.features_extended.main_desc}
          </p>
        </div>

        {/* Feature Grid — 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-stretch">
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