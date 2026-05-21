'use client';

import { useTranslations } from 'next-intl';

const featureIcons: Record<string, string> = {
  analysis: '\u{1F4C4}',
  generation: '\u{270D}️',
  dashboard: '\u{26A1}',
  alerts: '\u{1F514}',
  compliance: '\u{2696}️',
  comparison: '\u{1F50D}',
  workflow: '\u{1F91D}',
  bilingual: '\u{1F310}',
  reports: '\u{1F4CA}',
};

const featureKeys = [
  'analysis',
  'generation',
  'dashboard',
  'alerts',
  'compliance',
  'comparison',
  'workflow',
  'bilingual',
  'reports',
];

export default function Product() {
  const t = useTranslations('product');
  const audiences = t.raw('audiences') as { profile: string; benefit: string }[];
  const whys = t.raw('why_items') as string[];

  return (
    <section id="product" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#042C53] text-white text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            {t('label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('name')}
          </h2>
          <p className="text-lg text-brand-blue font-medium mb-4">{t('tagline')}</p>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Features grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">{t('features_title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featureKeys.map((key) => (
              <div
                key={key}
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{featureIcons[key]}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1.5 group-hover:text-brand-blue transition-colors">
                      {t(`features.${key}.title`)}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {t(`features.${key}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who is it for */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-8">{t('audience_title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {audiences.map((a) => (
              <div key={a.profile} className="bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-900 mb-1">{a.profile}</p>
                <p className="text-xs text-gray-500">{a.benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why choose PICA */}
        <div className="bg-[#042C53] rounded-2xl px-6 md:px-10 py-10 text-white">
          <h3 className="text-xl font-semibold text-center mb-6">{t('why_title')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-8">
            {whys.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-blue-100">
                <span className="text-green-400 mt-0.5 shrink-0">{'✓'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-200 text-sm italic max-w-2xl mx-auto">
            {t('quote')}
          </p>
          <div className="text-center mt-6">
            <a
              href="#contact"
              className="inline-flex items-center bg-white text-[#042C53] text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
