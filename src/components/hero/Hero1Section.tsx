'use client';

import React from 'react';
import { HeroGraphicNetwork } from './HeroGraphicNetwork';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { useLanguage } from '@/i18n/LanguageContext';

export function Hero1Section() {
  const { t } = useLanguage();

  return (
    <section
      id="hero1Card"
      className="canvas-card bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative pt-16 sm:pt-24 md:pt-26 pb-12 sm:pb-18 px-2 sm:px-6 md:px-8 text-center min-h-[80vh] sm:min-h-[88vh] flex flex-col justify-center"
    >
      {/* Central Graphic Network */}
      <HeroGraphicNetwork />

      {/* Typography & CTA Button */}
      <div className="scroll-blur-reveal max-w-4xl mx-auto px-1 sm:px-4 mt-4 sm:mt-6">
        <TextBlurWipe
          as="h1"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-black text-gray-950 tracking-tight leading-[1.08] break-words"
        >
          {[t.hero1.headlinePart1, <br key="br1" />, t.hero1.headlinePart2]}
        </TextBlurWipe>

        <p className="text-blur-wipe-sub mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-xl mx-auto">
          {t.hero1.subtitle}
        </p>

        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="#features"
            className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[220px] px-6 sm:px-9 py-3 sm:py-3.5 rounded-2xl text-white font-semibold text-xs sm:text-base bg-[#FF5A43] hover:bg-[#EE4832] shadow-xl shadow-[#FF5A43]/35 transition-all duration-300 active:scale-95 text-center"
          >
            {t.hero1.requestDemo}
          </a>
          <a
            href="#hero2Card"
            className="inline-flex items-center justify-center w-full sm:w-auto sm:min-w-[160px] px-6 py-3 sm:py-3.5 rounded-2xl text-slate-800 font-semibold text-xs sm:text-base bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 transition-all duration-300 active:scale-95 text-center"
          >
            {t.hero1.exploreFeatures} →
          </a>
        </div>
      </div>
    </section>
  );
}
