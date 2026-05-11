import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');
  const pills = t.raw('pills') as string[];

  return (
    <section id="about" className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-semibold text-brand-blue uppercase tracking-widest mb-2">
            {t('label')}
          </p>
          <h2 className="text-3xl font-semibold leading-snug tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{t('p1')}</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">{t('p2')}</p>
          <div className="flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-600"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="bg-gradient-to-br from-brand-blue-light to-brand-teal-light rounded-2xl border border-gray-100 h-64 md:h-80 flex flex-col items-center justify-center gap-3">
          <svg className="w-16 h-16 text-brand-blue" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
          </svg>
          <span className="text-sm font-medium text-brand-blue">Digital × AI × Consulting</span>
        </div>
      </div>
    </section>
  );
}
