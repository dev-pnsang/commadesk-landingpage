'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { ModuleIcon } from '@/components/ui/ModuleIcon';

export function Navbar() {
  const { t, modules } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isMobileModulesOpen, setIsMobileModulesOpen] = useState(false);

  const modulesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsModulesOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        modulesRef.current &&
        !modulesRef.current.contains(e.target as Node)
      ) {
        setIsModulesOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsMobileMenuOpen(false);
    setIsModulesOpen(false);

    if (href.startsWith('#')) {
      e.preventDefault();
      if (pathname === '/') {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        router.push(`/${href}`);
      }
    }
  };

  const navItems = [
    {
      label: t.nav.workspace,
      href: pathname === '/' ? '#hero2Card' : '/#hero2Card',
    },
    {
      label: t.nav.integrations,
      href: pathname === '/' ? '#integrations' : '/#integrations',
    },
    {
      label: t.nav.security,
      href: pathname === '/' ? '#testimonials' : '/#testimonials',
    },
  ];

  return (
    <>
      {/* Floating Pill Navbar */}
      <header
        id="mainHeader"
        className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[92%] max-w-[860px] pointer-events-none"
      >
        <div
          id="navbarPill"
          className={`pointer-events-auto px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full border transition-all duration-300 flex items-center justify-between gap-1.5 sm:gap-3 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-xl border-slate-300/80 shadow-slate-200/50'
              : 'bg-white/95 backdrop-blur-md shadow-md border-slate-200/90 shadow-slate-200/40'
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 group shrink-0"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsModulesOpen(false);
            }}
          >
            <div className="w-6 h-6 rounded-md bg-black flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 p-0.5">
              <img
                src="/commadesk/logo_CommaDesk-icon.webp"
                alt="CommaDesk Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-gray-950">
              CommaDesk
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-[13px] font-medium text-gray-700">
            {/* Modules Dropdown Trigger */}
            <div className="relative" ref={modulesRef}>
              <button
                type="button"
                onClick={() => setIsModulesOpen(!isModulesOpen)}
                onMouseEnter={() => setIsModulesOpen(true)}
                aria-expanded={isModulesOpen}
                className={`flex items-center gap-1 hover:text-black transition-colors cursor-pointer py-1 ${
                  isModulesOpen ? 'text-black font-semibold' : ''
                }`}
              >
                <span>{t.nav.modules}</span>
                <svg
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                    isModulesOpen ? 'rotate-180 text-black' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Modules Mega Flyout Menu */}
              {isModulesOpen && (
                <>
                  {/* Click-outside transparent overlay */}
                  <div
                    onClick={() => setIsModulesOpen(false)}
                    className="fixed inset-0 z-40"
                  />

                  <div
                    onMouseLeave={() => setIsModulesOpen(false)}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/15 p-4 z-50 animate-in fade-in zoom-in-95 duration-200"
                  >
                    <div className="flex items-center justify-between px-3 pb-3 border-b border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {t.nav.exploreAllModules}
                      </span>
                    <Link
                      href="/#features"
                      onClick={() => setIsModulesOpen(false)}
                      className="text-xs font-semibold text-[#FF4D38] hover:underline"
                    >
                      {t.nav.viewAll} →
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-3">
                    {modules.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsModulesOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all text-left"
                      >
                        <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-[#FF4D38]/10 text-slate-700 group-hover:text-[#FF4D38] flex items-center justify-center shrink-0 transition-colors">
                          <ModuleIcon name={item.iconName} className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-gray-900 group-hover:text-[#FF4D38] transition-colors truncate">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 group-hover:bg-[#FF4D38]/10 group-hover:text-[#FF4D38] transition-colors uppercase tracking-wider">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                            {item.shortDesc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
            {/* Language Selector Dropdown */}
            <LanguageSelector variant="pill" />

            <Link
              href="/#features"
              className="hidden sm:inline-flex bg-black hover:bg-neutral-800 text-white text-xs sm:text-[13px] font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs whitespace-nowrap"
            >
              {t.nav.getStarted}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              id="mobileMenuBtn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hamburger-btn md:hidden w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200/80 active:scale-90 flex items-center justify-center text-slate-800 transition-all focus:outline-none cursor-pointer ${
                isMobileMenuOpen ? 'is-active' : ''
              }`}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-4 h-3 flex flex-col justify-between items-center relative">
                <span className="hamburger-line hamburger-line-1 w-full h-[2px] bg-slate-800 rounded-full origin-center"></span>
                <span className="hamburger-line hamburger-line-2 w-full h-[2px] bg-slate-800 rounded-full"></span>
                <span className="hamburger-line hamburger-line-3 w-full h-[2px] bg-slate-800 rounded-full origin-center"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div
            id="mobileMenuPanel"
            className="pointer-events-auto md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-[26px] border border-slate-200/90 shadow-2xl shadow-slate-900/10 p-4 transition-all duration-300 ease-out origin-top animate-in fade-in zoom-in-95 max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              {/* Modules Accordion */}
              <div className="rounded-xl overflow-hidden border border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsMobileModulesOpen(!isMobileModulesOpen)}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF4D38]"></span>
                    {t.nav.modules}
                  </span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      isMobileModulesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isMobileModulesOpen && (
                  <div className="px-2 pb-2 pt-1 flex flex-col gap-1 bg-slate-50/70 border-t border-slate-100">
                    {modules.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 hover:text-black hover:bg-white transition-colors text-xs font-medium"
                      >
                        <ModuleIcon name={item.iconName} className="w-3.5 h-3.5 text-[#FF4D38]" />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="mobile-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-800 hover:bg-slate-100/80 transition-colors font-medium text-sm"
                >
                  <span>{item.label}</span>
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </nav>

            <div className="h-px bg-slate-100 my-2.5"></div>

            {/* Mobile Controls & Actions */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center justify-between px-3 py-1">
                <span className="text-xs text-slate-500 font-medium">{t.nav.selectLanguage}</span>
                <LanguageSelector variant="pill" />
              </div>
              <Link
                href="/#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 bg-[#FF4D38] hover:bg-[#E03E2A] text-white text-center text-sm font-bold rounded-full shadow-md shadow-[#FF4D38]/20 transition-all active:scale-[0.98]"
              >
                {t.nav.getStarted}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobileMenuBackdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          className="frosted-backdrop fixed inset-0 z-40 md:hidden transition-opacity duration-300"
        />
      )}
    </>
  );
}
