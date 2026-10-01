'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { t, language } = useLanguage();
  const isVi = language === 'vi';

  return (
    <footer className="canvas-card bg-white rounded-[24px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative pt-12 sm:pt-20 md:pt-24 pb-8 sm:pb-10 px-3.5 sm:px-10 md:px-12 lg:px-16 flex flex-col justify-between">
      {/* Upper Section */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-6 lg:gap-12 pb-10 sm:pb-16">
        {/* Col 1: Bio & Branding */}
        <div className="w-full md:w-[240px] lg:w-[290px] shrink-0 text-left">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="w-7 h-7 rounded-lg bg-black flex items-center justify-center p-1 transition-transform group-hover:scale-105">
              <img
                src="/commadesk/logo_CommaDesk-icon.webp"
                alt="Commadesk Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-gray-950">
              Commadesk
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
              <span>{isVi ? 'Khám phá giải pháp' : 'Explore Platform'}</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 md:gap-7 lg:gap-12 xl:gap-14 text-left">
          {/* Sub-col 1: Core Modules */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="text-sm font-semibold text-gray-900">
              {t.footer.columns.products}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-500">
              <li>
                <Link
                  href="/products/work-management"
                  className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                >
                  {isVi ? 'Dự án & Kanban' : 'Work & Projects'}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/hr-workforce"
                  className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                >
                  {isVi ? 'Tổ chức & Nhân sự' : 'HR & Workforce'}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/ai-smart-city"
                  className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                >
                  {isVi ? 'AI Vision & Smart City' : 'AI Vision & Cameras'}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/operations-documents"
                  className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                >
                  {isVi ? 'Sổ văn bản & Kho SKU' : 'Operations & Registry'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sub-col 2: Solutions & Operations */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="text-sm font-semibold text-gray-900">
              {t.footer.columns.solutions}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-500">
              <li>
                <Link
                  href="/products/crm-helpdesk"
                  className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                >
                  {isVi ? 'CRM & IT Helpdesk' : 'CRM & Helpdesk'}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/security-platform"
                  className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                >
                  {isVi ? 'Bảo mật Casbin RBAC' : 'Casbin RBAC Security'}
                </Link>
              </li>
              <li>
                <Link
                  href="/products/security-platform"
                  className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                >
                  {isVi ? 'Đa tổ chức Multi-Tenant' : 'Multi-Tenant Platform'}
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-black hover:translate-x-0.5 inline-block transition-all"
                >
                  {isVi ? 'Báo cáo điều hành & KPIs' : 'Executive Dashboard'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Sub-col 3: Deployment */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="text-sm font-semibold text-gray-900">
              {t.footer.columns.pricing}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-500">
              <li>
                <Link href="/products/security-platform" className="hover:text-black transition-colors">
                  Multi-Tenant Cloud
                </Link>
              </li>
              <li>
                <Link href="/products/security-platform" className="hover:text-black transition-colors">
                  Private Cloud / On-Prem
                </Link>
              </li>
              <li>
                <Link href="/#hero2Card" className="hover:text-black transition-colors">
                  Desktop &amp; Mobile Parity
                </Link>
              </li>
              <li>
                <Link href="/products/security-platform" className="hover:text-black transition-colors">
                  SLA &amp; Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Sub-col 4: Resources & Access */}
          <div className="space-y-3 sm:space-y-3.5">
            <h4 className="text-sm font-semibold text-gray-900">
              {t.footer.columns.resources}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-500">
              <li>
                <Link href="/products/work-management" className="hover:text-black transition-colors font-semibold text-slate-700">
                  {isVi ? 'Tài liệu quản lý công việc' : 'Work & Projects Guide'}
                </Link>
              </li>
              <li>
                <Link href="/products/ai-smart-city" className="hover:text-black transition-colors">
                  {isVi ? 'Kiến trúc AI Smart City' : 'AI Smart City Architecture'}
                </Link>
              </li>
              <li>
                <Link href="/products/security-platform" className="hover:text-black transition-colors">
                  REST API &amp; Webhooks
                </Link>
              </li>
              <li>
                <Link href="/products/work-management" className="hover:text-black transition-colors">
                  {isVi ? 'Tài liệu hướng dẫn' : 'Feature Documentation'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 3: Follow us */}
        <div className="w-full md:w-auto space-y-3 sm:space-y-3.5 shrink-0 text-left">
          <h4 className="text-sm font-semibold text-gray-900">
            {t.footer.followUs}
          </h4>
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-[#F4F5F7] hover:bg-slate-200 text-gray-950 flex items-center justify-center transition-all hover:scale-105 shrink-0"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* X Twitter */}
            <a
              href="#"
              aria-label="X Twitter"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-[#F4F5F7] hover:bg-slate-200 text-gray-950 flex items-center justify-center transition-all hover:scale-105 shrink-0"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="#"
              aria-label="TikTok"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-[#F4F5F7] hover:bg-slate-200 text-gray-950 flex items-center justify-center transition-all hover:scale-105 shrink-0"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
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
