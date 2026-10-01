'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';

interface LanguageSelectorProps {
  variant?: 'pill' | 'minimal';
}

export function LanguageSelector({ variant = 'pill' }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en' as Language, label: 'English', flag: '🇺🇸', short: 'EN' },
    { code: 'vi' as Language, label: 'Tiếng Việt', flag: '🇻🇳', short: 'VI' },
  ];

  const current = languages.find((l) => l.code === language) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
        className={`flex items-center gap-1.5 transition-all cursor-pointer ${
          variant === 'pill'
            ? 'px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200/80 text-gray-800 text-xs sm:text-[13px] font-semibold border border-slate-200/80 shadow-2xs active:scale-95'
            : 'text-gray-700 hover:text-black text-xs sm:text-[13px] font-medium py-1 px-1.5'
        }`}
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="tracking-wide uppercase font-bold text-[11px] sm:text-xs">
          {current.short}
        </span>
        <svg
          className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Click outside overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div
            className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/20 py-2 z-50 animate-in fade-in zoom-in-95 duration-150 origin-top-right overflow-hidden"
            role="menu"
          >
            <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
              Language / Ngôn ngữ
            </div>
          {languages.map((item) => {
            const isSelected = item.code === language;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => handleSelect(item.code)}
                className={`w-full text-left px-3 py-2 flex items-center justify-between text-xs sm:text-[13px] font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-slate-100/80 text-black font-semibold'
                    : 'text-gray-700 hover:bg-slate-50 hover:text-black'
                }`}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">{item.flag}</span>
                  <span>{item.label}</span>
                </div>
                {isSelected && (
                  <svg
                    className="w-4 h-4 text-[#FF4D38]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            );
          })}
          </div>
        </>
      )}
    </div>
  );
}
