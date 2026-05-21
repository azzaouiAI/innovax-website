'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    // Replace locale prefix in path
    const segments = pathname.split('/');
    if (segments[1] === 'fr' || segments[1] === 'en') {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join('/') || '/');
  };

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#services', label: t('services') },
    { href: '#product', label: t('product') },
    { href: '#approach', label: t('approach') },
    { href: '#sectors', label: t('sectors') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="text-xl font-semibold tracking-tight">
          INNO<span className="text-brand-blue">VAX</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: lang switcher + CTA */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center rounded-md border border-gray-200 overflow-hidden text-xs font-medium">
            <button
              onClick={() => switchLocale('fr')}
              className={`px-2.5 py-1.5 transition-colors ${
                locale === 'fr'
                  ? 'bg-brand-blue text-white'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => switchLocale('en')}
              className={`px-2.5 py-1.5 transition-colors border-l border-gray-200 ${
                locale === 'en'
                  ? 'bg-brand-blue text-white'
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center bg-brand-blue text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('cta')}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 rounded text-gray-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-2 text-center bg-brand-blue text-white text-sm font-medium px-4 py-2 rounded-lg"
          >
            {t('cta')}
          </a>
        </div>
      )}
    </nav>
  );
}
