import React from 'react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 sm:py-32 relative overflow-hidden">

      <div className="px-6 mx-auto max-w-5xl relative z-10">

        {/* Main Discovery Panel */}
        <div className="group relative overflow-hidden rounded-[3rem] border border-primary/15 p-8 sm:p-16 text-center shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_80px_rgba(0,122,154,0.15)] hover:border-primary/30"
          style={{background: 'rgba(255,255,255,0.6)', backdropFilter:'blur(24px)', WebkitBackdropFilter:'blur(24px)'}}>

          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/12 transition-all duration-700"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 mb-8" style={{backgroundColor:'rgba(0,122,154,0.07)'}}>
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-display font-bold text-primary uppercase tracking-[0.2em]">{t.faq.badge}</span>
            </div>

            {/* Icon */}
            <div className="mb-8 w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              style={{background:'rgba(0,122,154,0.08)', border:'1px solid rgba(0,122,154,0.18)', boxShadow:'0 8px 24px rgba(0,122,154,0.1)'}}>
              <BookOpen className="w-8 h-8 text-primary transition-colors" strokeWidth={1.5} />
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-6xl font-display font-black mb-6 tracking-tight leading-tight max-w-3xl" style={{color:'#0f172a'}}>
              {t.faq.title}
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mb-12">
              {t.faq.description}
            </p>

            {/* CTA Button */}
            <a
              href="https://ppt-doctiplay.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-primary text-white rounded-full font-display font-black text-sm tracking-widest uppercase hover:bg-accent hover:text-white transition-all shadow-[0_10px_30px_rgba(0,172,205,0.2)] hover:shadow-[0_20px_50px_rgba(99,102,240,0.3)] hover:-translate-y-1 group-hover:scale-105"
            >
              {t.faq.action}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] mask-image-gradient opacity-20 pointer-events-none"></div>
        </div>

      </div>

    </section>
  );
};

export default FAQ;