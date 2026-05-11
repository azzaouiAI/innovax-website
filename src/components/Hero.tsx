import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  const stats = [
    { num: '10+', label: t('stat_years') },
    { num: '50+', label: t('stat_projects') },
    { num: '3',   label: t('stat_regions') },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#042C53] via-[#185FA5] to-[#0F6E56] text-white py-24 px-4 text-center">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/20 backdrop-blur-sm">
          {t('badge')}
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight mb-5 animate-fade-up">
          {t('title')}
        </h1>

        <p className="text-lg text-blue-100 max-w-lg mx-auto mb-8 leading-relaxed animate-fade-up animate-fade-up-delay-1">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-fade-up animate-fade-up-delay-2">
          <a
            href="#services"
            className="bg-white text-brand-blue font-medium text-sm px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            {t('cta_primary')}
          </a>
          <a
            href="#contact"
            className="border border-white/40 text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            {t('cta_secondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto animate-fade-up animate-fade-up-delay-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/10 border border-white/15 rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-semibold">{s.num}</div>
              <div className="text-xs text-blue-200 mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
