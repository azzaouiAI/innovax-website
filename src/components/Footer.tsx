import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const services = t.raw('services') as string[];
  const company = t.raw('company') as string[];
  const contact = t.raw('contact') as string[];

  return (
    <footer className="bg-[#042C53] text-blue-200 py-14 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-semibold text-white mb-3">
              INNO<span className="text-[#85B7EB]">VAX</span>
            </p>
            <p className="text-xs leading-relaxed">{t('tagline')}</p>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">{t('services_title')}</p>
            <ul className="space-y-1.5">
              {services.map((s) => (
                <li key={s} className="text-xs hover:text-white cursor-pointer transition-colors">{s}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">{t('company_title')}</p>
            <ul className="space-y-1.5">
              {company.map((s) => (
                <li key={s} className="text-xs hover:text-white cursor-pointer transition-colors">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">{t('contact_title')}</p>
            <ul className="space-y-1.5">
              {contact.map((s) => (
                <li key={s} className="text-xs hover:text-white cursor-pointer transition-colors">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-blue-300">
          © {new Date().getFullYear()} INNOVAX. {t('rights')}
        </div>
      </div>
    </footer>
  );
}
