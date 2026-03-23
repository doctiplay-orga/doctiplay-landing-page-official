import React, { useState } from 'react';
import { Stethoscope, HeartPulse, GraduationCap, ArrowRight, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const modes = [
  {
    id: 'medical',
    icon: Stethoscope,
    color: '#06b6d4',      // Cyan
    colorRgb: '6,182,212',
    gradient: 'from-cyan-500/10 to-cyan-600/5',
    border: 'border-cyan-500/20',
    glow: 'hover:shadow-[0_0_60px_rgba(6,182,212,0.2)]',
    badge: 'SIMULATION MÉDICALE',
    subtitle: 'Urgences, Réanimation & Déchocage',
    title: 'Médecine\nIntensive',
    description: 'Prenez en charge un patient en situation critique. Diagnostic caché, monitoring en temps réel, décisions sous pression. Chaque seconde compte.',
    tags: ['Urgences', 'Réanimation', 'Déchocage', 'Monitoring'],
  },
  {
    id: 'paramedical',
    icon: HeartPulse,
    color: '#10b981',      // Emerald
    colorRgb: '16,185,129',
    gradient: 'from-emerald-500/10 to-emerald-600/5',
    border: 'border-emerald-500/20',
    glow: 'hover:shadow-[0_0_60px_rgba(16,185,129,0.2)]',
    badge: 'SIMULATION PARAMÉDICALE',
    subtitle: 'Soins Infirmiers & Niveau de Priorité',
    title: 'Soins de\nPremière Ligne',
    description: "Évaluation infirmière, triage et soins de première ligne. Maîtrisez l'évaluation clinique et les protocoles de soin avec une précision sans compromis.",
    tags: ['Triage', 'Soins Infirmiers', 'Évaluation', 'Priorités'],
  },
  {
    id: 'ecos',
    icon: GraduationCap,
    color: '#f59e0b',      // Amber
    colorRgb: '245,158,11',
    gradient: 'from-amber-500/10 to-amber-600/5',
    border: 'border-amber-500/20',
    glow: 'hover:shadow-[0_0_60px_rgba(245,158,11,0.2)]',
    badge: 'EXAMEN ECOS',
    subtitle: 'Évaluation Clinique Structurée',
    title: 'Certification\nECOS / CFEU',
    description: 'Préparez vos examens ECOS avec des scénarios standardisés et une grille CFEU intégrée. Simulez les conditions réelles de l\'examen.',
    tags: ['ECOS', 'CFEU', 'Standardisé', 'Certification'],
  },
];

const Modes: React.FC = () => {
  const [hoveredMode, setHoveredMode] = useState<string | null>(null);
  const { language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section id="modes" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background mesh blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="px-6 mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 reveal" dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/25 mb-6 sm:mb-8" style={{backgroundColor: 'rgba(0,122,154,0.08)'}}>
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-display uppercase tracking-[0.3em] text-primary">
              3 PARCOURS SPÉCIALISÉS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black mb-6 leading-tight" style={{color:'#0f172a'}}>
            Votre formation,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-emerald-500 to-amber-500">
              votre parcours.
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Trois environnements de simulation calibrés pour chaque profil clinique. Immersifs, précis, exigeants.
          </p>
        </div>

        {/* Modes Grid - 3 column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const isHovered = hoveredMode === mode.id;

            return (
              <div
                key={mode.id}
                onMouseEnter={() => setHoveredMode(mode.id)}
                onMouseLeave={() => setHoveredMode(null)}
                className={`group relative rounded-[2.5rem] border ${mode.border} p-8 sm:p-10 flex flex-col cursor-pointer transition-all duration-500 ${mode.glow} hover:-translate-y-2`}
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(${mode.colorRgb},0.05) 100%)`,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid rgba(${mode.colorRgb}, ${isHovered ? 0.4 : 0.15})`,
                  boxShadow: isHovered ? `0 0 60px rgba(${mode.colorRgb}, 0.15), inset 0 1px 0 rgba(255,255,255,0.9)` : '0 4px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)',
                  transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {/* Top left light source */}
                <div
                  className="absolute top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at top left, rgba(${mode.colorRgb},0.15), transparent 70%)` }}
                />

                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 w-fit"
                  style={{ background: `rgba(${mode.colorRgb},0.12)`, border: `1px solid rgba(${mode.colorRgb},0.25)` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: mode.color }} />
                  <span className="font-display text-[9px] uppercase tracking-[0.2em]" style={{ color: mode.color }}>
                    {mode.badge}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    background: `rgba(${mode.colorRgb},0.12)`,
                    border: `1px solid rgba(${mode.colorRgb},0.2)`,
                    boxShadow: isHovered ? `0 0 30px rgba(${mode.colorRgb},0.3)` : 'none',
                  }}
                >
                  <Icon
                    className="w-8 h-8 transition-colors duration-300"
                    style={{ color: mode.color }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Subtitle */}
                <p className="font-display text-[10px] uppercase tracking-[0.2em] mb-3" style={{ color: `rgba(${mode.colorRgb},0.7)` }}>
                  {mode.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-display font-black whitespace-pre-line leading-tight" style={{color:'#0f172a'}}>
                  {mode.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
                  {mode.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {mode.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-display uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{
                        background: `rgba(${mode.colorRgb},0.08)`,
                        color: `rgba(${mode.colorRgb},0.8)`,
                        border: `1px solid rgba(${mode.colorRgb},0.15)`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://app.doctiplay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-6 py-4 rounded-2xl font-display font-black text-xs uppercase tracking-widest transition-all duration-300 group/btn"
                  style={{
                    background: isHovered ? `rgba(${mode.colorRgb},0.2)` : `rgba(${mode.colorRgb},0.08)`,
                    border: `1px solid rgba(${mode.colorRgb},${isHovered ? 0.35 : 0.15})`,
                    color: mode.color,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Accéder au mode</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modes;
