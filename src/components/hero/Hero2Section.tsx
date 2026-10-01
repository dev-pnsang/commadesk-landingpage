'use client';

import React from 'react';
import { HeroDualOrbit } from './HeroDualOrbit';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { useLanguage } from '@/i18n/LanguageContext';

export function Hero2Section() {
  const { t, language } = useLanguage();

  return (
    <section
      id="hero2Card"
      className="canvas-card scroll-mt-28 bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative min-h-[620px] sm:min-h-[880px] lg:min-h-[940px] xl:min-h-[960px] flex items-center justify-center px-2.5 sm:px-8 text-center"
    >
      {/* 8 Orbiting Avatars Dual Wheel */}
      <HeroDualOrbit />

      {/* Center Content: Icon Tím, Tiêu đề, Phụ đề, Nút Learn more */}
      <div className="relative z-20 max-w-[480px] lg:max-w-[540px] mx-auto px-2 sm:px-4 py-8">
        {/* Center Icon: Purple User Profile */}
        <div className="scroll-blur-reveal w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-lg shadow-indigo-100/80 flex items-center justify-center text-[#7C3AED] mx-auto mb-4 sm:mb-6 border border-slate-100">
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        {/* Typography & CTA */}
        <div className="scroll-blur-reveal delay-100">
          <TextBlurWipe
            as="h2"
            className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.08] break-words"
          >
            {language === 'vi'
              ? ['Một không gian', <br key="br2" />, 'cho toàn đội ngũ']
              : ['One workspace', <br key="br2" />, 'for your team']}
          </TextBlurWipe>

          <p className="text-blur-wipe-sub mt-3 sm:mt-4 text-xs sm:text-base text-gray-500 font-normal leading-relaxed max-w-sm sm:max-w-md mx-auto">
            {t.hero2.subtitle}
          </p>

          <div className="mt-6 sm:mt-8 flex justify-center w-full max-w-xs sm:max-w-none mx-auto">
            <a
              href="#features"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl text-white font-medium text-xs sm:text-sm bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] shadow-lg shadow-indigo-300/40 transition-all duration-300 active:scale-95 text-center"
            >
              {language === 'vi' ? 'Khám phá Không gian làm việc' : 'Explore Workspace'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
