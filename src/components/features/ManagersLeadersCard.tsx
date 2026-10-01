'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export function ManagersLeadersCard() {
  const { t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const badges = [
    {
      text: t.features.card2.badge1Title,
      iconClass: 'bg-sky-50 text-sky-500',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      text: t.features.card2.badge2Title,
      iconClass: 'bg-red-50 text-red-500',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z" />
          <circle cx="12" cy="2" r="1.5" />
        </svg>
      ),
    },
    {
      text: t.features.card2.badge3Title,
      iconClass: 'bg-amber-50 text-amber-500',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipping(true);

      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % badges.length);
        setIsFlipping(false);
      }, 250);
    }, 3400);

    return () => clearInterval(timer);
  }, [badges.length]);

  const badge = badges[currentIdx];

  return (
    <div className="scroll-fade-up delay-150 bg-[#FAFAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Graphic: Concentric Radar & Stacked Badges */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6 flex items-center justify-center min-h-[170px] relative overflow-hidden shadow-xs">
        {/* Concentric Circles Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-ripple">
          <div className="w-48 h-48 rounded-full border border-slate-100" />
          <div className="absolute w-32 h-32 rounded-full border border-slate-100" />
          <div className="absolute w-16 h-16 rounded-full border border-slate-100" />
        </div>

        {/* Stacked Cards Container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Thẻ lót 3 (dưới cùng có mép vàng) */}
          <div className="w-56 h-10 bg-slate-50 rounded-xl border border-slate-200/60 shadow-xs -mb-7 scale-90 relative">
            <div className="absolute -bottom-1 left-4 w-5 h-1.5 bg-amber-400 rounded-full" />
          </div>
          {/* Thẻ lót 2 (ở giữa có mép đỏ) */}
          <div className="w-60 h-10 bg-slate-100/80 rounded-xl border border-slate-200/70 shadow-xs -mb-7 scale-95 relative">
            <div className="absolute -bottom-1 left-4 w-5 h-1.5 bg-red-400 rounded-full" />
          </div>
          {/* Thẻ chính: 3D Flip Cylinder Stacked Badge */}
          <div
            className="relative z-10 px-5 py-3 bg-white rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 transition-all duration-300"
            style={{
              transform: isFlipping
                ? 'perspective(500px) rotateX(-75deg) scale(0.92)'
                : 'perspective(500px) rotateX(0deg) scale(1)',
              opacity: isFlipping ? 0 : 1,
            }}
          >
            <span
              className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold shadow-2xs ${badge.iconClass}`}
            >
              {badge.icon}
            </span>
            <span className="text-sm font-bold text-gray-800 tracking-tight whitespace-nowrap">
              {badge.text}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.features.card2.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {t.features.card2.desc}
        </p>
      </div>
    </div>
  );
}
