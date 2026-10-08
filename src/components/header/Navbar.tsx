"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSelector } from "@/components/ui/LanguageSelector";
import { IconName } from "@/i18n/types";
import { NavbarSubmenuItem, MobileAccordionTrigger } from "./NavbarSubmenuItem";
import {
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
  ArrowLongRightIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@/components/ui/UIIcons";

export function Navbar() {
  const { t, modules } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const [isMobileModulesOpen, setIsMobileModulesOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  const modulesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsModulesOpen(false);
        setIsSolutionsOpen(false);
        setIsResourcesOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (modulesRef.current && !modulesRef.current.contains(target)) {
        setIsModulesOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(target)) {
        setIsSolutionsOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(target)) {
        setIsResourcesOpen(false);
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

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsModulesOpen(false);
    setIsSolutionsOpen(false);
    setIsResourcesOpen(false);
  };

  const categories = [
    { key: "operations" as const, title: t.nav.categories.operations },
    { key: "workforce" as const, title: t.nav.categories.workforce },
    { key: "comms" as const, title: t.nav.categories.comms },
    { key: "commerce" as const, title: t.nav.categories.commerce },
  ];

  const solutionsList: {
    title: string;
    desc: string;
    href: string;
    iconName: IconName;
  }[] = [
    {
      title: t.nav.solutionsList.logistics,
      desc: t.nav.solutionsList.logisticsDesc,
      href: "/products/fleet-logistics",
      iconName: "Truck",
    },
    {
      title: t.nav.solutionsList.retail,
      desc: t.nav.solutionsList.retailDesc,
      href: "/products/social-retail",
      iconName: "Store",
    },
    {
      title: t.nav.solutionsList.enterprise,
      desc: t.nav.solutionsList.enterpriseDesc,
      href: "/products/security-platform",
      iconName: "Building",
    },
    {
      title: t.nav.solutionsList.public,
      desc: t.nav.solutionsList.publicDesc,
      href: "/products/operations-documents",
      iconName: "Landmark",
    },
  ];

  const resourcesList: {
    title: string;
    desc: string;
    href: string;
    iconName: IconName;
    badge?: string;
  }[] = [
    {
      title: t.nav.resourcesList.docs,
      desc: "Full feature technical architecture",
      href: "/docs",
      iconName: "BookOpen",
    },
    {
      title: t.nav.resourcesList.releaseNotes,
      desc: "Changelog and continuous updates",
      href: "/release-notes",
      badge: "What's New",
      iconName: "Sparkles",
    },
    {
      title: t.nav.resourcesList.api,
      desc: "Interactive OpenAPI 3.0 endpoints",
      href: "/docs",
      iconName: "Code2",
    },
    {
      title: t.nav.resourcesList.deployment,
      desc: "Cloud, On-Prem & Desktop (.exe)",
      href: "/deployment",
      iconName: "Monitor",
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
          className={`pointer-events-auto relative z-50 px-3 sm:px-6 lg:px-7 py-2 sm:py-2.5 rounded-full border transition-all duration-300 flex items-center justify-between gap-2 sm:gap-4 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-xl border-slate-300/80 shadow-slate-200/50"
              : "bg-white/95 backdrop-blur-md shadow-md border-slate-200/90 shadow-slate-200/40"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 group shrink-0"
            onClick={closeAllMenus}
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
            {/* 1. Modules Dropdown */}
            <div
              className="relative"
              ref={modulesRef}
              onMouseEnter={() => {
                setIsModulesOpen(true);
                setIsSolutionsOpen(false);
                setIsResourcesOpen(false);
              }}
              onMouseLeave={() => setIsModulesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsModulesOpen(!isModulesOpen)}
                aria-expanded={isModulesOpen}
                className={`flex items-center gap-1 hover:text-black transition-colors cursor-pointer py-1 whitespace-nowrap ${
                  isModulesOpen ? "text-black font-semibold" : ""
                }`}
              >
                <span>{t.nav.modules}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                    isModulesOpen ? "rotate-180 text-black" : ""
                  }`}
                />
              </button>

              {/* Modules Mega Flyout */}
              {isModulesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/3 sm:-translate-x-1/4 lg:-translate-x-1/3 top-full mt-3 w-[calc(100vw-2rem)] max-w-[820px] rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/15 p-4 sm:p-5 z-50 animate-in fade-in zoom-in-95 duration-200 max-h-[82vh] overflow-y-auto before:content-[''] before:absolute before:-top-3.5 before:left-0 before:right-0 before:h-4"
                >
                  <div className="flex items-center justify-between px-2 pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {t.nav.exploreAllModules}
                      </span>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#FF4D38]/10 text-[#FF4D38]">
                        13 Modules
                      </span>
                    </div>
                    <Link
                      href="/#features"
                      onClick={() => setIsModulesOpen(false)}
                      className="text-xs font-semibold text-[#FF4D38] hover:underline inline-flex items-center gap-1"
                    >
                      <span>{t.nav.viewAll}</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </Link>
                  </div>

                  {/* 4 Categorized Columns / Sections */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {categories.map((cat) => {
                      const items = modules.filter((m) => m.category === cat.key);
                      return (
                        <div key={cat.key} className="space-y-1.5">
                          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-2">
                            {cat.title}
                          </div>
                          <div className="space-y-1">
                            {items.map((item) => (
                              <NavbarSubmenuItem
                                key={item.id}
                                item={item}
                                onClick={() => setIsModulesOpen(false)}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div
              className="relative"
              ref={solutionsRef}
              onMouseEnter={() => {
                setIsSolutionsOpen(true);
                setIsModulesOpen(false);
                setIsResourcesOpen(false);
              }}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                aria-expanded={isSolutionsOpen}
                className={`flex items-center gap-1 hover:text-black transition-colors cursor-pointer py-1 whitespace-nowrap ${
                  isSolutionsOpen ? "text-black font-semibold" : ""
                }`}
              >
                <span>{t.nav.solutions}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                    isSolutionsOpen ? "rotate-180 text-black" : ""
                  }`}
                />
              </button>

              {isSolutionsOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[calc(100vw-2rem)] max-w-[460px] rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/15 p-3.5 sm:p-4 z-50 animate-in fade-in zoom-in-95 duration-200 before:content-[''] before:absolute before:-top-3.5 before:left-0 before:right-0 before:h-4"
                >
                  <div className="space-y-1.5 w-full">
                    {solutionsList.map((sol, idx) => (
                      <NavbarSubmenuItem
                        key={idx}
                        item={sol}
                        onClick={() => setIsSolutionsOpen(false)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Platform & Trust */}
            <Link
              href="/deployment"
              onClick={closeAllMenus}
              onMouseEnter={() => {
                setIsModulesOpen(false);
                setIsSolutionsOpen(false);
                setIsResourcesOpen(false);
              }}
              className="hover:text-black transition-colors whitespace-nowrap py-1"
            >
              {t.nav.platform}
            </Link>

            {/* 4. Resources Dropdown */}
            <div
              className="relative"
              ref={resourcesRef}
              onMouseEnter={() => {
                setIsResourcesOpen(true);
                setIsModulesOpen(false);
                setIsSolutionsOpen(false);
              }}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                aria-expanded={isResourcesOpen}
                className={`flex items-center gap-1 hover:text-black transition-colors cursor-pointer py-1 whitespace-nowrap ${
                  isResourcesOpen ? "text-black font-semibold" : ""
                }`}
              >
                <span>{t.nav.resources}</span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${
                    isResourcesOpen ? "rotate-180 text-black" : ""
                  }`}
                />
              </button>

              {isResourcesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[calc(100vw-2rem)] max-w-[400px] rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-900/15 p-3.5 z-50 animate-in fade-in zoom-in-95 duration-200 before:content-[''] before:absolute before:-top-3.5 before:left-0 before:right-0 before:h-4"
                >
                  <div className="space-y-1 w-full">
                    {resourcesList.map((res, idx) => (
                      <NavbarSubmenuItem
                        key={idx}
                        item={res}
                        onClick={() => setIsResourcesOpen(false)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
            <LanguageSelector variant="pill" />

            <Link
              href="/#features"
              onClick={closeAllMenus}
              className="hidden lg:inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FF4D38] hover:bg-[#E03E2A] text-white text-xs font-bold shadow-md shadow-[#FF4D38]/20 transition-all active:scale-95"
            >
              {t.nav.getStarted}
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
              aria-label={isMobileMenuOpen ? t.nav.closeMenu : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-4 h-4" />
              ) : (
                <MenuIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div
            id="mobileMenuDrawer"
            className="pointer-events-auto relative z-10 md:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-[26px] border border-slate-200/90 shadow-2xl shadow-slate-900/10 p-3.5 sm:p-4 transition-all duration-300 ease-out origin-top animate-in fade-in zoom-in-95 max-h-[82vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1.5">
              {/* Mobile: Modules Accordion */}
              <div>
                <MobileAccordionTrigger
                  type="modules"
                  title={t.nav.modules}
                  count={modules.length}
                  isOpen={isMobileModulesOpen}
                  onToggle={() => setIsMobileModulesOpen(!isMobileModulesOpen)}
                />

                {isMobileModulesOpen && (
                  <div className="bg-slate-50/90 rounded-2xl p-2 border border-slate-200/70 mt-1 mb-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-200 max-h-72 overflow-y-auto">
                    {modules.map((item) => (
                      <NavbarSubmenuItem
                        key={item.id}
                        item={item}
                        onClick={closeAllMenus}
                        variant="mobile"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile: Solutions Accordion */}
              <div>
                <MobileAccordionTrigger
                  type="solutions"
                  title={t.nav.solutions}
                  count={solutionsList.length}
                  isOpen={isMobileSolutionsOpen}
                  onToggle={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                />

                {isMobileSolutionsOpen && (
                  <div className="bg-slate-50/90 rounded-2xl p-2 border border-slate-200/70 mt-1 mb-1.5 space-y-1">
                    {solutionsList.map((sol, idx) => (
                      <NavbarSubmenuItem
                        key={idx}
                        item={sol}
                        onClick={closeAllMenus}
                        variant="mobile"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile: Direct Platform Link */}
              <Link
                href="/deployment"
                onClick={closeAllMenus}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-slate-800 hover:bg-slate-100/80 font-semibold text-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200/60">
                  <ShieldCheckIcon className="w-4 h-4" />
                </div>
                <span>{t.nav.platform}</span>
              </Link>

              {/* Mobile: Resources Accordion */}
              <div>
                <MobileAccordionTrigger
                  type="resources"
                  title={t.nav.resources}
                  count={resourcesList.length}
                  isOpen={isMobileResourcesOpen}
                  onToggle={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                />

                {isMobileResourcesOpen && (
                  <div className="bg-slate-50/90 rounded-2xl p-2 border border-slate-200/70 mt-1 mb-1.5 space-y-1">
                    {resourcesList.map((res, idx) => (
                      <NavbarSubmenuItem
                        key={idx}
                        item={res}
                        onClick={closeAllMenus}
                        variant="mobile"
                      />
                    ))}
                  </div>
                )}
              </div>
            </nav>

            <div className="h-px bg-slate-100 my-2.5"></div>

            <div className="pt-0.5">
              <Link
                href="/#features"
                onClick={closeAllMenus}
                className="w-full py-3 px-4 bg-[#FF4D38] hover:bg-[#E03E2A] text-white text-center text-sm font-bold rounded-2xl shadow-lg shadow-[#FF4D38]/20 transition-all flex items-center justify-center gap-2"
              >
                <span>{t.nav.getStarted}</span>
                <ArrowLongRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobileMenuBackdrop"
          onClick={closeAllMenus}
          className="frosted-backdrop fixed inset-0 z-40 md:hidden transition-opacity duration-300"
        />
      )}
    </>
  );
}
