'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function CTASection() {
  const t = useTranslations('cta');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In production: integrate with your CRM / email service
      setSent(true);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-[#042C53] via-[#185FA5] to-[#0F6E56] text-white py-20 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-3">{t('title')}</h2>
        <p className="text-blue-100 text-sm mb-8 leading-relaxed">{t('subtitle')}</p>

        {sent ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6 text-sm">
            ✅ &nbsp;Message envoyé — nous vous recontactons sous 24h.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('placeholder')}
              className="flex-1 bg-white/10 border border-white/25 rounded-lg px-4 py-2.5 text-sm placeholder-blue-200 text-white outline-none focus:border-white/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-white text-brand-blue text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              {t('button')}
            </button>
          </form>
        )}

        <p className="text-xs text-blue-200 mt-4">{t('note')}</p>
      </div>
    </section>
  );
}
