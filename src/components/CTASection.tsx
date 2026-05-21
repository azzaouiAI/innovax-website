'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function CTASection() {
  const t = useTranslations('cta');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSending(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/contact.innovax.ma@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          message: message || 'Consultation request from website',
          _subject: `INNOVAX — New consultation request from ${email}`,
          _template: 'table',
        }),
      });

      if (res.ok) {
        setSent(true);
      }
    } catch {
      // Fallback to mailto if the service fails
      window.location.href = `mailto:contact.innovax.ma@gmail.com?subject=Consultation%20Request&body=From:%20${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message || 'I would like to discuss a project with INNOVAX.')}`;
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-[#042C53] via-[#185FA5] to-[#0F6E56] text-white py-20 px-4 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-3">{t('title')}</h2>
        <p className="text-blue-100 text-sm mb-8 leading-relaxed">{t('subtitle')}</p>

        {sent ? (
          <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6 text-sm">
            ✅ &nbsp;{t('success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('placeholder')}
              className="bg-white/10 border border-white/25 rounded-lg px-4 py-2.5 text-sm placeholder-blue-200 text-white outline-none focus:border-white/60 transition-colors"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('message_placeholder')}
              rows={3}
              className="bg-white/10 border border-white/25 rounded-lg px-4 py-2.5 text-sm placeholder-blue-200 text-white outline-none focus:border-white/60 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="bg-white text-brand-blue text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap disabled:opacity-60"
            >
              {sending ? '...' : t('button')}
            </button>
          </form>
        )}

        <p className="text-xs text-blue-200 mt-4">{t('note')}</p>
      </div>
    </section>
  );
}
