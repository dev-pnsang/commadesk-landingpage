import React from 'react';
import { HeroGraphicNetwork } from './HeroGraphicNetwork';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';

export function Hero1Section() {
  return (
    <section
      id="hero1Card"
      className="canvas-card bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative pt-20 sm:pt-24 md:pt-26 pb-14 sm:pb-18 px-4 sm:px-6 md:px-8 text-center min-h-[85vh] sm:min-h-[88vh] flex flex-col justify-center"
    >
      {/* Central Graphic Network */}
      <HeroGraphicNetwork />

      {/* Typography & CTA Button */}
      <div className="scroll-blur-reveal max-w-4xl mx-auto px-4 mt-4 sm:mt-6">
        <TextBlurWipe
          as="h1"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-black text-gray-950 tracking-tight leading-[1.04]"
        >
          {['Manage work.', <br key="br1" />, 'Move projects forward.']}
        </TextBlurWipe>

        <p className="text-blur-wipe-sub mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-500 font-normal leading-relaxed max-w-xl mx-auto">
          Commadesk unites project management, Kanban &amp; Gantt, timesheets, org structure, and document registry into one centralized enterprise workspace.
        </p>

        <div className="mt-6 sm:mt-7 flex justify-center">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center min-w-[220px] sm:min-w-[250px] px-8 sm:px-10 py-3 sm:py-3.5 rounded-2xl text-white font-semibold text-sm sm:text-base bg-[#FF5A43] hover:bg-[#EE4832] shadow-xl shadow-[#FF5A43]/35 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
