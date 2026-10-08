'use client';

import React from 'react';
import Link from 'next/link';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { useLanguage } from '@/i18n/LanguageContext';

import { ArrowBackIcon, ArrowDownIcon, ArrowLeftIcon } from "@/components/ui/UIIcons";

interface SubpageHeroProps {
  categoryBadge: string;
  title: string | string[];
  subtitle: string;
  visualPreview: React.ReactNode;
  tags?: string[];
}

export function SubpageHero({
  categoryBadge,
  title,
  subtitle,
  visualPreview,
  tags = [],
}: SubpageHeroProps) {
  const { t, language } = useLanguage();

  return (
    <section className="canvas-card bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative pt-32 sm:pt-44 md:pt-48 pb-12 sm:pb-24 px-3 sm:px-8 lg:px-12">
      {/* Breadcrumb & Top Bar - Thoáng đãng, không bị Navbar cố định che lấp */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2.5 mb-8 sm:mb-14 md:mb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-semibold text-gray-500 hover:text-black transition-colors px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-100 hover:bg-slate-200/80 shadow-2xs"
        >
          <ArrowBackIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>{t.subpages.backHome}</span>
        </Link>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FF4D38]/10 text-[#FF4D38] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D38] animate-pulse"></span>
          {categoryBadge}
        </div>
      </div>

      {/* Main Hero Header */}
      <div className="max-w-4xl mx-auto text-center is-revealed">
        <TextBlurWipe
          as="h1"
          className="is-revealed text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.12] break-words"
        >
          {Array.isArray(title) ? title : [title]}
        </TextBlurWipe>

        <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>

        {/* Feature Tags Pill Track - Đủ rộng và có khoảng cách thở thoáng đãng với nút bấm */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mt-6 sm:mt-10 mb-6 sm:mb-10 max-w-4xl mx-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-50 text-slate-700 border border-slate-200/90 shadow-2xs hover:bg-white hover:border-slate-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons Container với khoảng cách tách biệt hoàn toàn, full-width trên 320px */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-5 mt-4 sm:mt-6 mb-10 sm:mb-18 md:mb-20 w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href="#capabilities"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[210px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-white font-bold text-xs sm:text-base bg-[#FF4D38] hover:bg-[#E03E2A] shadow-xl shadow-[#FF4D38]/25 transition-all active:scale-95 text-center"
          >
            <span>{language === 'vi' ? 'Khám phá tính năng chi tiết' : 'Explore Capabilities'}</span>
            <ArrowDownIcon className="w-4 h-4" />
          </a>
          <Link
            href="/#features"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto sm:min-w-[180px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-slate-800 font-bold text-xs sm:text-base bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90 shadow-2xs transition-all active:scale-95 text-center"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            <span>{language === 'vi' ? 'Xem tất cả phân hệ' : 'All Modules'}</span>
          </Link>
        </div>
      </div>

      {/* Visual Showcase Box - Cách xa nút bấm để bóng đổ không bị cắt */}
      <div className="mt-6 sm:mt-12 max-w-5xl mx-auto">
        <div className="relative rounded-[20px] sm:rounded-[36px] bg-gradient-to-b from-slate-100/90 to-slate-50 border border-slate-200/80 p-2 sm:p-5 md:p-6 shadow-2xl shadow-slate-200/50 overflow-hidden">
          {/* Mac/Browser Frame Header */}
          <div className="flex items-center justify-between pb-2.5 sm:pb-4 border-b border-slate-200/80 mb-3 sm:mb-6">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-400"></span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400"></span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-white text-[10px] sm:text-[11px] font-semibold text-slate-500 border border-slate-200 shadow-2xs truncate max-w-[160px] sm:max-w-none">
              commadesk.app / enterprise
            </div>
            <div className="w-6 sm:w-8"></div>
          </div>

          {/* Child Visual Preview Container */}
          <div className="bg-white rounded-xl sm:rounded-3xl p-2.5 sm:p-6 md:p-8 border border-slate-200/60 shadow-xs">
            {visualPreview}
          </div>
        </div>
      </div>
    </section>
  );
}
