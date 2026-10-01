'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/data/navigation';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Floating Pill Navbar */}
      <header
        id="mainHeader"
        className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[92%] max-w-[760px] pointer-events-none"
      >
        <div
          id="navbarPill"
          className={`pointer-events-auto px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full border transition-all duration-300 flex items-center justify-between gap-2 sm:gap-3 ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md shadow-xl border-slate-300/80 shadow-slate-200/50'
              : 'bg-white/95 backdrop-blur-md shadow-md border-slate-200/90 shadow-slate-200/40'
          }`}
        >
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-1.5 sm:gap-2 group shrink-0"
            onClick={(e) => handleLinkClick(e, '#')}
          >
            <div className="w-6 h-6 rounded-md bg-black flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8c2.05 0 3.91.78 5.34 2.07l-2.02 2.02C14.39 7.42 13.24 7 12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.24 0 2.39-.42 3.32-1.09l2.02 2.02C15.91 19.22 14.05 20 12 20z" />
              </svg>
            </div>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-gray-950">
              CoreShift
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium text-gray-700">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a
              href="#signin"
              onClick={(e) => handleLinkClick(e, '#signin')}
              className="hidden sm:inline-block text-[13px] font-medium text-gray-700 hover:text-black transition-colors px-1 whitespace-nowrap"
            >
              Sign in
            </a>

            <a
              href="#demo"
              onClick={(e) => handleLinkClick(e, '#demo')}
              className="bg-black hover:bg-neutral-800 text-white text-xs sm:text-[13px] font-medium px-3 sm:px-5 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs whitespace-nowrap"
            >
              Request a Demo
            </a>

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
            className="pointer-events-auto md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-[26px] border border-slate-200/90 shadow-2xl shadow-slate-900/10 p-4 transition-all duration-300 ease-out origin-top animate-in fade-in zoom-in-95"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="mobile-nav-link flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-800 hover:bg-slate-100/80 transition-colors font-medium text-sm"
                >
                  <span>{link.label}</span>
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

            <div className="flex flex-col gap-2 pt-1">
              <a
                href="#signin"
                onClick={(e) => handleLinkClick(e, '#signin')}
                className="w-full py-2.5 px-3 text-center text-sm font-semibold text-slate-700 hover:text-black hover:bg-slate-100/80 rounded-xl transition-colors"
              >
                Sign in
              </a>
              <a
                href="#demo"
                onClick={(e) => handleLinkClick(e, '#demo')}
                className="w-full py-2.5 px-3 bg-[#FF4D38] hover:bg-[#E03E2A] text-white text-center text-sm font-bold rounded-full shadow-md shadow-[#FF4D38]/20 transition-all active:scale-[0.98]"
              >
                Request a Demo
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobileMenuBackdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs z-40 md:hidden transition-opacity duration-300"
        />
      )}
    </>
  );
}
