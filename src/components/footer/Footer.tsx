"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { FOOTER_LINKS } from "@/data/navigation";
import {
  InstagramIcon,
  TwitterIcon,
  TikTokIcon,
  ArrowRightIcon,
} from "@/components/ui/UIIcons";

export function Footer() {
  const { t, language } = useLanguage();
  const isVi = language === "vi";

  return (
    <footer className="canvas-card bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative pt-12 sm:pt-20 md:pt-24 pb-8 sm:pb-10 px-3.5 sm:px-10 md:px-12 lg:px-16 flex flex-col justify-between">
      {/* Upper Section */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-6 lg:gap-10 pb-10 sm:pb-16">
        {/* Col 1: Bio & Branding */}
        <div className="w-full md:w-[220px] lg:w-[260px] shrink-0 text-left">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center p-0.5 transition-transform group-hover:scale-105">
              <img
                src="/commadesk/logo_CommaDesk.webp"
                alt="CommaDesk Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="font-extrabold text-lg tracking-tight text-gray-950">
              CommaDesk
            </span>
          </Link>
          <p className="text-sm font-normal text-gray-500 leading-relaxed">
            {t.footer.bio}
          </p>

          <div className="mt-5">
            <Link
              href="/#features"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF4D38] hover:bg-[#E03E2A] text-white text-xs font-bold shadow-md shadow-[#FF4D38]/20 transition-all active:scale-95"
            >
              <span>{isVi ? "Khám phá 13 phân hệ" : "Explore 13 Modules"}</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Col 2: Navigation Links 4 Columns */}
        <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8 xl:gap-10 text-left">
          {/* Sub-col 1: Operations & Supply */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
              {t.footer.columns.products}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-500">
              {FOOTER_LINKS.operations.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-col 2: Workforce & Execution */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
              {t.footer.columns.workforce}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-500">
              {FOOTER_LINKS.workforce.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-col 3: Comms & Commerce */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
              {t.footer.columns.comms}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-500">
              {FOOTER_LINKS.comms.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
              {FOOTER_LINKS.commerce.slice(0, 1).map((link, idx) => (
                <li key={`comm-${idx}`}>
                  <Link
                    href={link.href}
                    className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-col 4: Resources & Releases */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
              {t.footer.columns.resources}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-500">
              {FOOTER_LINKS.resources.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                  >
                    {isVi ? link.labelVi : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Col 3: Follow us */}
        <div className="w-full md:w-auto space-y-3 sm:space-y-3.5 shrink-0 text-left">
          <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider">
            {t.footer.followUs}
          </h4>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-[#F4F5F7] hover:bg-slate-200 text-gray-950 flex items-center justify-center transition-all hover:scale-105 shrink-0"
            >
              <InstagramIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
            <a
              href="#"
              aria-label="X Twitter"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-[#F4F5F7] hover:bg-slate-200 text-gray-950 flex items-center justify-center transition-all hover:scale-105 shrink-0"
            >
              <TwitterIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-[#F4F5F7] hover:bg-slate-200 text-gray-950 flex items-center justify-center transition-all hover:scale-105 shrink-0"
            >
              <TikTokIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-6 border-t border-slate-100 text-center">
        <p className="text-xs sm:text-sm font-medium text-gray-400">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
