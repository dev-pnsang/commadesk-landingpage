'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { SparklesIcon, ShieldCheckIcon, ZapIcon } from '@/components/ui/UIIcons';

interface ReleaseItem {
  version: string;
  date: string;
  badge: string;
  badgeColor: string;
  summary: {
    en: string;
    vi: string;
  };
  highlights: {
    category: 'feature' | 'enhancement' | 'security' | 'performance';
    title: { en: string; vi: string };
    desc: { en: string; vi: string };
  }[];
}

export default function ReleaseNotesPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';
  const [activeFilter, setActiveFilter] = useState<'all' | 'feature' | 'security' | 'enhancement'>('all');

  const releases: ReleaseItem[] = [
    {
      version: 'v2.4.0',
      date: isVi ? 'Tháng 10, 2026' : 'October 2026',
      badge: isVi ? 'Bản Mới Nhất' : 'Latest Release',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      summary: {
        vi: 'Bổ sung 5 phân hệ đột phá: Quản lý Kho SKU & Tài sản serial, CMS Studio kéo thả, Social Gateway kết nối POS KiotViet, Khảo sát eNPS và Trung tâm Phê duyệt tập trung.',
        en: 'Major release introducing 5 core pillars: SKU Warehouses & Serial Assets, Drag-and-Drop CMS Studio, Social Gateway with KiotViet POS Sync, eNPS Surveys, and Unified Approvals.',
      },
      highlights: [
        {
          category: 'feature',
          title: {
            vi: 'Phân hệ Quản lý Kho SKU & Tài sản thiết bị',
            en: 'Dedicated SKU Inventory & Fixed Asset Custody',
          },
          desc: {
            vi: 'Cân bằng số dư kho đa địa điểm, luồng duyệt phiếu nhập xuất 2 cấp, quản lý tài sản theo số serial và tự động cảnh báo tồn an toàn.',
            en: 'Multi-depot inventory balancing, 2-step stock voucher approvals, serial asset tracking, and proactive safety stock alerts.',
          },
        },
        {
          category: 'feature',
          title: {
            vi: 'CMS Studio & Cổng thông tin nội bộ',
            en: 'Visual CMS Studio & Enterprise Intranet Portal',
          },
          desc: {
            vi: 'Dựng website kéo thả no-code dạng khối, tòa soạn bài viết đa cấp, quản lý thư viện media và kiểm duyệt bình luận tự động.',
            en: 'Modular drag-and-drop page builder, multi-category newsroom, media asset library, and automated comment moderation.',
          },
        },
        {
          category: 'feature',
          title: {
            vi: 'Đồng bộ hai chiều với Phần mềm Bán lẻ KiotViet',
            en: 'Bi-Directional Real-Time KiotViet POS Synchronization',
          },
          desc: {
            vi: 'Tự động đồng bộ sản phẩm, giá bán, chi nhánh và bù trừ số dư tồn kho tức thì trong < 1.2s khi phát sinh giao dịch tại quầy.',
            en: 'Real-time synchronization of products, branch price tiers, and inventory deductions in < 1.2s upon counter sales.',
          },
        },
        {
          category: 'security',
          title: {
            vi: 'Cơ chế Ủy quyền Phê duyệt & Hòm thư góp ý bảo mật',
            en: 'Approval Delegation Engine & Encrypted Leadership Mailbox',
          },
          desc: {
            vi: 'Ủy quyền duyệt có ràng buộc hạn mức tài chính và kênh gửi phản ánh ẩn danh mã hóa hoàn toàn tới Ban Lãnh đạo.',
            en: 'Threshold-constrained approval delegation and cryptographically shielded anonymous direct leadership mailboxes.',
          },
        },
      ],
    },
    {
      version: 'v2.3.0',
      date: isVi ? 'Tháng 09, 2026' : 'September 2026',
      badge: isVi ? 'Cập Nhật Nền Tảng' : 'Platform Update',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      summary: {
        vi: 'Nâng cấp chuẩn văn bản theo Nghị định 30, thuật toán ANPR nhận diện biển số xe và hệ thống họp video CommaMeet chất lượng HD.',
        en: 'Full State Decree 30 official document compliance, enhanced ANPR camera plate recognition, and HD CommaMeet video conference engine.',
      },
      highlights: [
        {
          category: 'feature',
          title: {
            vi: 'Sổ Văn bản Đến/Đi & Giữ số theo Nghị định 30',
            en: 'Decree 30 Official Document Registry & Reserved Numbers',
          },
          desc: {
            vi: 'Quy tắc đánh số tự động, phân phối văn bản nội bộ và quản lý sổ chứa văn bản pháp lý chuẩn mực hành chính.',
            en: 'Automated document numbering rules, intra-organization dispatch routing, and administrative decree compliance.',
          },
        },
        {
          category: 'performance',
          title: {
            vi: 'Tối ưu tốc độ nhận diện khuôn mặt Face AI & ANPR',
            en: 'High-Velocity Edge Inference for Face AI & ANPR Cameras',
          },
          desc: {
            vi: 'Tốc độ nhận diện biển số xe và chấm công sinh trắc học đạt < 85ms trên hệ thống camera VMS đa điểm.',
            en: 'Sub-85ms recognition speed for license plates and biometric check-ins across distributed VMS camera nodes.',
          },
        },
      ],
    },
    {
      version: 'v2.2.0',
      date: isVi ? 'Tháng 08, 2026' : 'August 2026',
      badge: isVi ? 'Bảo Mật & Ứng Dụng' : 'Security & App Parity',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      summary: {
        vi: 'Ra mắt ứng dụng Desktop Windows (.exe) với cơ chế tự động cập nhật, ứng dụng Mobile Flutter và nâng cấp ma trận bảo mật Casbin RBAC.',
        en: 'Launch of Windows Desktop (.exe) with auto-updater, Flutter Mobile apps, and enhanced Casbin RBAC permission matrix.',
      },
      highlights: [
        {
          category: 'security',
          title: {
            vi: 'Ma trận phân quyền Casbin RBAC & Xác thực 2FA/TOTP',
            en: 'Casbin RBAC Matrix & Mandatory TOTP 2FA Verification',
          },
          desc: {
            vi: 'Khóa phiên từ xa, kiểm soát danh tính thiết bị qua mã băm HMAC và lưu vết kiểm toán 3 tầng độc lập.',
            en: 'Remote session revocation, HMAC device binding, and triple-layer cryptographic audit logging.',
          },
        },
      ],
    },
  ];

  const filteredReleases = releases.map((release) => ({
    ...release,
    highlights: release.highlights.filter((item) => {
      if (activeFilter === 'all') return true;
      return item.category === activeFilter;
    }),
  })).filter((release) => release.highlights.length > 0 || activeFilter === 'all');

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 selection:bg-[#FF4D38] selection:text-white">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF4D38]"></span>
            {isVi ? 'Nhật Ký Phát Hành & Tính Năng Mới' : "What's New & Release Changelog"}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {isVi ? 'Lịch Sử Cập Nhật & Tiến Hóa Nền Tảng' : 'Platform Evolution & Release Notes'}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {isVi
              ? 'Khám phá các cải tiến, tính năng mới và nâng cấp bảo mật liên tục được tích hợp vào hệ điều hành doanh nghiệp CommaDesk.'
              : 'Discover continuous enhancements, enterprise modules, and security reinforcements engineered into the CommaDesk ecosystem.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#FF4D38] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}

            >
              {isVi ? 'Tất cả thay đổi' : 'All Updates'}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('feature')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'feature'
                  ? 'bg-[#FF4D38] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>{isVi ? 'Tính năng mới' : 'New Features'}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('security')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'security'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <ShieldCheckIcon className="w-3.5 h-3.5" />
              <span>{isVi ? 'Bảo mật & RBAC' : 'Security & RBAC'}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('enhancement')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'enhancement'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              <ZapIcon className="w-3.5 h-3.5" />
              <span>{isVi ? 'Cải tiến & Hiệu năng' : 'Enhancements'}</span>
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="max-w-4xl mx-auto space-y-12">
          {filteredReleases.map((release) => (
            <div
              key={release.version}
              className="relative p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/40 space-y-6"
            >
              {/* Release Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {release.version}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${release.badgeColor}`}>
                    {release.badge}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {release.date}
                </span>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {isVi ? release.summary.vi : release.summary.en}
              </p>

              {/* Highlights Cards */}
              <div className="space-y-3 pt-2">
                {release.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-1.5 hover:bg-white hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
                        item.category === 'feature'
                          ? 'bg-rose-100 text-rose-700'
                          : item.category === 'security'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {item.category === 'feature' ? (isVi ? 'Tính năng' : 'Feature') : item.category === 'security' ? (isVi ? 'Bảo mật' : 'Security') : (isVi ? 'Hiệu năng' : 'Performance')}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900">
                        {isVi ? item.title.vi : item.title.en}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-1">
                      {isVi ? item.desc.vi : item.desc.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Docs */}
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 text-center shadow-xs space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            {isVi ? 'Cần Tra Cứu Đặc Tả Kỹ Thuật Chi Tiết?' : 'Looking for Complete Feature Documentation?'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            {isVi
              ? 'Tham khảo kho tài liệu đặc tả 67+ phân hệ và OpenAPI Swagger để nắm rõ cấu trúc dữ liệu và API kết nối.'
              : 'Explore our comprehensive 67+ module technical feature guide and OpenAPI Swagger documentation.'}
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <Link
              href="/docs"
              className="px-5 py-2.5 rounded-full bg-[#FF4D38] text-white text-xs font-bold shadow-sm hover:bg-[#e03d29] transition-all"
            >
              {isVi ? 'Xem Tài Liệu 67+ Phân Hệ' : 'Explore 67+ Technical Docs'}
            </Link>
            <Link
              href="/deployment"
              className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition-all"
            >
              {isVi ? 'Mô Hình Triển Khai' : 'Deployment Options'}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
