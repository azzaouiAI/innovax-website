import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import WhyUs from '@/components/WhyUs';
import Sectors from '@/components/Sectors';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Approach />
      <WhyUs />
      <Sectors />
      <CTASection />
      <Footer />
    </main>
  );
}
