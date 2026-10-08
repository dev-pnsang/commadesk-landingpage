"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { ModuleIcon } from "@/components/ui/ModuleIcon";

function NavItemIcon({
  type,
  className = "w-4 h-4",
}: {
  type: "modules" | "workspace" | "integrations" | "security" | "globe";
  className?: string;
}) {
  switch (type) {
    case "modules":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      );
    case "workspace":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      );
    case "integrations":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      );
    case "security":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
    case "globe":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      );
    default:
      return null;
  }
}

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
      if (e.key === "Escape") {
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setIsMobileMenuOpen(false);
    setIsModulesOpen(false);

    if (href.startsWith("#")) {
      e.preventDefault();
      if (pathname === "/") {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        router.push(`/${href}`);
      }
    }
  };

  const navItems = [
    {
      id: "workspace",
      label: t.nav.workspace,
      href: pathname === "/" ? "#hero2Card" : "/#hero2Card",
      iconType: "workspace" as const,
    },
    {
      id: "integrations",
      label: t.nav.integrations,
      href: pathname === "/" ? "#integrations" : "/#integrations",
      iconType: "integrations" as const,
    },
    {
      id: "security",
      label: t.nav.security,
      href: pathname === "/" ? "#testimonials" : "/#testimonials",
      iconType: "security" as const,
    },
  ];

  return (
    <>
      {/* Floating Pill Navbar */}
      <header
        id="mainHeader"
        className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.25rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] max-w-6xl pointer-events-none"
      >
        <div
          id="navbarPill"
          className={`pointer-events-auto relative z-30 px-3 sm:px-6 lg:px-7 py-2 sm:py-2.5 rounded-full border transition-all duration-300 flex items-center justify-between gap-2 sm:gap-4 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-xl border-slate-300/80 shadow-slate-200/50"
              : "bg-white/95 backdrop-blur-md shadow-md border-slate-200/90 shadow-slate-200/40"
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
            <div className="w-7 h-7 rounded-md flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 p-0.5">
              <img
                src="/commadesk/logo_commadesk.webp"
                alt="CommaDesk Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-gray-950">
              CommaDesk
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-3.5 lg:gap-6 xl:gap-8 text-[13px] lg:text-[13.5px] font-medium text-gray-700 whitespace-nowrap">
            {/* Modules Dropdown Trigger */}
            <div className="relative" ref={modulesRef}>
              <button
                type="button"
                onClick={() => setIsModulesOpen(!isModulesOpen)}
                onMouseEnter={() => setIsModulesOpen(true)}
                aria-expanded={isModulesOpen}
                className={`flex items-center gap-1 hover:text-black transition-colors cursor-pointer py-1 whitespace-nowrap ${
                  isModulesOpen ? "text-black font-semibold" : ""
                }`}
              >
                <span>{t.nav.modules}</span>
                <svg
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                    isModulesOpen ? "rotate-180 text-black" : ""
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
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[680px] lg:w-[720px] rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/15 p-4 z-50 animate-in fade-in zoom-in-95 duration-200"
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
                            <ModuleIcon
                              name={item.iconName}
                              className="w-4 h-4"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1.5">
                              <span className="text-xs font-bold text-gray-900 group-hover:text-[#FF4D38] transition-colors whitespace-nowrap">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 group-hover:bg-[#FF4D38]/10 group-hover:text-[#FF4D38] transition-colors uppercase tracking-wider shrink-0">
                                {item.badge}
                              </span>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 leading-snug">
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
                className="hover:text-black transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
            {/* Language Selector Dropdown */}
            <LanguageSelector variant="pill" />

            {/* Desktop Only CTA button */}
            <Link
              href="/#features"
              className="hidden md:inline-flex bg-black hover:bg-neutral-800 text-white text-xs sm:text-[13px] font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs whitespace-nowrap"
            >
              {t.nav.getStarted}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              id="mobileMenuBtn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hamburger-btn md:hidden w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200/80 active:scale-90 flex items-center justify-center text-slate-800 transition-all focus:outline-none cursor-pointer ${
                isMobileMenuOpen ? "is-active" : ""
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
            className="pointer-events-auto relative z-10 md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-[26px] border border-slate-200/90 shadow-2xl shadow-slate-900/10 p-3.5 sm:p-4 transition-all duration-300 ease-out origin-top animate-in fade-in zoom-in-95 max-h-[82vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1.5">
              {/* Level 1: Modules Accordion Item */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileModulesOpen(!isMobileModulesOpen)}
                  className={`w-full group flex items-center justify-between px-3.5 py-2.5 rounded-2xl transition-all cursor-pointer ${
                    isMobileModulesOpen
                      ? "bg-slate-100/90 text-slate-950 font-bold"
                      : "text-slate-800 hover:bg-slate-100/80 active:bg-slate-200/60 font-semibold"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                        isMobileModulesOpen
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-slate-100 text-slate-700 border-slate-200/60 group-hover:bg-slate-200/80"
                      }`}
                    >
                      <NavItemIcon type="modules" />
                    </div>
                    <span className="text-sm tracking-tight">{t.nav.modules}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-slate-200/80 text-slate-600">
                      {modules.length}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                      isMobileModulesOpen ? "rotate-180 text-slate-900" : "group-hover:text-slate-700"
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

                {/* Submenu List */}
                {isMobileModulesOpen && (
                  <div className="bg-slate-50/90 rounded-2xl p-2 border border-slate-200/70 mt-1 mb-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-200">
                    {modules.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-white text-slate-700 hover:text-black transition-all border border-transparent hover:border-slate-200/70 shadow-none hover:shadow-2xs text-left"
                      >
                        <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/70 text-[#FF4D38] group-hover:bg-[#FF4D38]/10 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                          <ModuleIcon
                            name={item.iconName}
                            className="w-3.5 h-3.5"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-[#FF4D38] transition-colors truncate">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-200/80 text-slate-600 uppercase tracking-wider shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 leading-snug">
                            {item.shortDesc}
                          </p>
                        </div>
                      </Link>
                    ))}

                    <div className="pt-1 border-t border-slate-200/60 mt-1">
                      <Link
                        href="/#features"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#FF4D38] hover:bg-[#FF4D38]/10 transition-colors"
                      >
                        <span>{t.nav.viewAll}</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Level 1: Direct Link Items */}
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-slate-800 hover:bg-slate-100/80 active:bg-slate-200/60 transition-all font-semibold text-sm cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-slate-200/80 flex items-center justify-center shrink-0 border border-slate-200/60 transition-colors">
                      <NavItemIcon type={item.iconType} />
                    </div>
                    <span className="tracking-tight">{item.label}</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all"
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

            {/* Full Width Get Started CTA */}
            <div className="pt-0.5">
              <Link
                href="/#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 px-4 bg-[#FF4D38] hover:bg-[#E03E2A] text-white text-center text-sm font-bold rounded-2xl shadow-lg shadow-[#FF4D38]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>{t.nav.getStarted}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
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
