'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Hero1Section } from '@/components/hero/Hero1Section';
import { Hero2Section } from '@/components/hero/Hero2Section';
import { BentoGridSection } from '@/components/features/BentoGridSection';
import { ArcCarousel } from '@/components/integrations/ArcCarousel';
import { TestimonialsSection } from '@/components/testimonials/TestimonialsSection';
import { Footer } from '@/components/footer/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto space-y-6 sm:space-y-8 md:space-y-10 relative">
        <Hero1Section />
        <Hero2Section />
        <BentoGridSection />
        <ArcCarousel />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
}
