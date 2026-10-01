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

      <main className="max-w-[1440px] mx-auto space-y-8 sm:space-y-12 md:space-y-16 relative px-2.5 sm:px-6 lg:px-8 pb-16">
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
