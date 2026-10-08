'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { ShieldCheckIcon } from '@/components/ui/UIIcons';

export function LegalTeamsCard() {
  const { t } = useLanguage();

  return (
    <div className="scroll-fade-up delay-200 bg-[#FAFAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Graphic: Sọc kẻ dọc mờ + Hai tài liệu nghiêng + Khối tím 3D icon khiên check */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6 flex items-center justify-center min-h-[170px] relative overflow-hidden shadow-xs">
        {/* Vertical Lines Background */}
        <div className="absolute inset-0 flex justify-between px-8 pointer-events-none opacity-40">
          <div className="w-px h-full bg-slate-100" />
          <div className="w-px h-full bg-slate-100" />
          <div className="w-px h-full bg-slate-100" />
          <div className="w-px h-full bg-slate-100" />
          <div className="w-px h-full bg-slate-100" />
        </div>

        {/* Tài liệu nghiêng trái */}
        <div className="absolute w-24 h-32 bg-slate-50 rounded-xl border border-slate-200 shadow-md transform -rotate-12 -translate-x-6 p-2 space-y-1.5 opacity-90">
          <div className="w-8 h-2 bg-slate-200 rounded-full" />
          <div className="w-14 h-1.5 bg-slate-200/60 rounded-full" />
          <div className="w-10 h-1.5 bg-slate-200/60 rounded-full" />
        </div>
        {/* Tài liệu nghiêng phải */}
        <div className="absolute w-24 h-32 bg-slate-50 rounded-xl border border-slate-200 shadow-md transform rotate-12 translate-x-6 p-2 space-y-1.5 opacity-90">
          <div className="w-8 h-2 bg-slate-200 rounded-full" />
          <div className="w-14 h-1.5 bg-slate-200/60 rounded-full" />
          <div className="w-10 h-1.5 bg-slate-200/60 rounded-full" />
        </div>
        {/* Khối tím trung tâm với khiên check */}
        <div className="relative z-20 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B77FF] to-[#6A53F5] text-white flex items-center justify-center shadow-xl shadow-indigo-400/40 border border-white/80">
          <ShieldCheckIcon className="w-7 h-7" />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.features.card3.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {t.features.card3.desc}
        </p>
      </div>
    </div>
  );
}
