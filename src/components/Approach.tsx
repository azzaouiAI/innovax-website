import { useTranslations } from 'next-intl';

export default function Approach() {
  const t = useTranslations('approach');
  const steps = t.raw('steps') as { num: string; title: string; desc: string }[];

  return (
    <section id="approach" className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-brand-blue uppercase tracking-widest mb-2">
            {t('label')}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">{t('title')}</h2>
        </div>

        <div className="grid sm:grid-cols-4 gap-0 relative">
          {/* Connector line (desktop) */}
          <div className="hidden sm:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gray-200" />

          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center p-6">
              <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center text-sm font-semibold z-10 mb-4">
                {step.num}
              </div>
              <h4 className="text-sm font-semibold mb-1.5">{step.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>

              {/* Mobile connector */}
              {i < steps.length - 1 && (
                <div className="sm:hidden w-px h-6 bg-gray-200 mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
