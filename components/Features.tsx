import React, { useState } from 'react';
import { Activity, FileSearch, Mic, BarChart3, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const featureMeta = [
  {
    icon: Activity,
    color: '#007a9a',
    tint: 'rgba(0,122,154,0.08)',
    desc: {
      fr: "Le moteur simule en temps réel les cascades physiologiques : choc hémorragique, détresse respiratoire, défaillance multi-organes. L'état du patient évolue selon vos décisions.",
      en: "The engine simulates physiological cascades in real time: hemorrhagic shock, respiratory distress, multi-organ failure. The patient's condition evolves with your decisions.",
      es: "El motor simula en tiempo real las cascadas fisiológicas: shock hemorrágico, distrés respiratorio, fallo multiorgánico. El estado del paciente evoluciona según sus decisiones.",
      ar: "يحاكي المحرك التسلسلات الفيزيولوجية في الوقت الفعلي: الصدمة النزفية، الضائقة التنفسية، فشل الأعضاء المتعددة. وتتطور حالة المريض وفق قراراتك.",
    },
  },
  {
    icon: FileSearch,
    color: '#b45309',
    tint: 'rgba(180,83,9,0.08)',
    desc: {
      fr: "Une large bibliothèque de scénarios couvrant l'urgence, la médecine interne, la pédiatrie et la chirurgie. Chaque session est différente, chaque patient est unique.",
      en: "A broad library of scenarios covering emergency, internal medicine, pediatrics and surgery. Each session is different, every patient is unique.",
      es: "Una amplia biblioteca de escenarios clínicos que abarca urgencias, medicina interna, pediatría y cirugía. Cada sesión es distinta, cada paciente es único.",
      ar: "مكتبة واسعة من السيناريوهات تغطي الطوارئ والطب الداخلي وطب الأطفال والجراحة. كل جلسة مختلفة وكل مريض فريد.",
    },
  },
  {
    icon: Mic,
    color: '#047857',
    tint: 'rgba(4,120,87,0.08)',
    desc: {
      fr: "Interrogez le patient à voix haute, comme en consultation. La reconnaissance vocale comprend l'anamnèse en français, anglais, arabe et espagnol.",
      en: "Question the patient out loud, as in a real consultation. Voice recognition understands history-taking in French, English, Arabic and Spanish.",
      es: "Interrogue al paciente en voz alta, como en una consulta real. El reconocimiento de voz comprende la anamnesis en francés, inglés, árabe y español.",
      ar: "استجوب المريض بصوت عالٍ كما في الاستشارة الحقيقية. يفهم التعرف الصوتي أخذ السوابق بالفرنسية والإنجليزية والعربية والإسبانية.",
    },
  },
  {
    icon: BarChart3,
    color: '#4338ca',
    tint: 'rgba(67,56,202,0.08)',
    desc: {
      fr: "À l'issue de chaque simulation, un rapport détaillé analyse vos décisions : points justes, points critiques et pistes de progression.",
      en: "After each simulation, a detailed report analyses your decisions: what went right, what was critical, and how to improve.",
      es: "Al finalizar cada simulación, un informe detallado analiza sus decisiones: aciertos, puntos críticos y áreas de mejora.",
      ar: "في نهاية كل محاكاة، يحلل تقرير مفصل قراراتك: ما كان صحيحاً، وما كان حرجاً، وكيف تتحسن.",
    },
  },
];

const FeatureCard: React.FC<{
  feature: (typeof featureMeta)[number];
  index: number;
  title: string;
  items: string[];
  language: string;
}> = ({ feature, index, title, items, language }) => {
  const { color, tint, icon: Icon, desc } = feature;
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const description = desc[language as keyof typeof desc] ?? desc.fr;
  const panelId = `feature-panel-${index}`;

  return (
    <div className="reveal" style={{ '--d': `${(index % 2) * 0.08}s` } as React.CSSProperties}>
      <article className="card card-hover p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: tint }}>
            <Icon className="h-6 w-6" style={{ color }} strokeWidth={2} />
          </div>
          <span className="font-mono text-sm font-bold text-slate-300">{String(index + 1).padStart(2, '0')}</span>
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900 sm:text-2xl">{title}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{description}</p>

        <div
          id={panelId}
          className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
        >
          <div className="overflow-hidden">
            <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: tint, color }}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ color }}
        >
          {isOpen ? t.features_extended.toggle.hide : t.features_extended.toggle.show}
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </article>
    </div>
  );
};

const Features: React.FC = () => {
  const { t, language } = useLanguage();

  const featureData = [
    { title: t.features.f1_title, items: t.features.f1_items },
    { title: t.features.f2_title, items: t.features.f2_items },
    { title: t.features.f3_title, items: t.features.f3_items },
    { title: t.features.f4_title, items: t.features.f4_items },
  ];

  return (
    <section id="expertise" className="defer-render bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <span className="eyebrow">{t.features_extended.badge}</span>
          <h2 className="mt-5 text-balance text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
            {t.features_extended.main_title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.features_extended.main_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {featureMeta.map((feature, idx) => (
            <FeatureCard
              key={idx}
              index={idx}
              feature={feature}
              title={featureData[idx].title}
              items={featureData[idx].items}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;