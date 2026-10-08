'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';
import { InteractiveCmsPortal } from '@/components/showcase/InteractiveCmsPortal';

export default function CmsPortalPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveCmsPortal isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'visual-builder',
          tag: 'Trình dựng No-Code',
          title: 'Dựng Trang Trực Quan Với Thư Viện Khối Khởi Động',
          description: 'Kéo thả các khối giao diện (Startup Blocks, Hero banners, Callouts, Lưới bài viết) mà không cần viết một dòng mã HTML/CSS.',
          metricBadge: { label: 'Tốc độ xuất bản', value: 'Trong 5 phút' },
        },
        {
          id: 'intranet-portal',
          tag: 'Cổng thông tin',
          title: 'Cổng Thông Tin Nội Bộ (Enterprise Intranet)',
          description: 'Kênh truyền thông chính thống cho thông điệp Tổng Giám đốc, bảng vinh danh, văn hóa doanh nghiệp và quy chế ban hành.',
          metricBadge: { label: 'Tiếp cận nhân sự', value: '100% toàn công ty' },
        },
        {
          id: 'articles-newsroom',
          tag: 'Tòa soạn tin tức',
          title: 'Biên Tập Bài Viết Chuyên Nghiệp & Đa Danh Mục',
          description: 'Trình soạn thảo rich-text hiện đại, quản lý danh mục đa cấp, gắn thẻ tag, bài viết ghim nổi bật và tối ưu SEO nội bộ.',
          metricBadge: { label: 'Định dạng nội dung', value: 'Đa phương tiện' },
        },
        {
          id: 'media-library',
          tag: 'Thư viện Media',
          title: 'Quản Lý Kho Ảnh, Video & Tài Liệu Tập Trung',
          description: 'Lưu trữ hình ảnh sự kiện, tài liệu đào tạo, banner đồ họa đồng bộ trực tiếp với đám mây MinIO S3 Object Storage.',
          metricBadge: { label: 'Tốc độ CDN', value: '< 80ms Cache' },
        },
        {
          id: 'comment-moderation',
          tag: 'Tương tác & Kiểm duyệt',
          title: 'Điều Duyệt Bình Luận & Biểu Mẫu Góp Ý Công Khai',
          description: 'Bộ lọc bình luận thông minh, kiểm duyệt phản hồi độc giả và tích hợp biểu mẫu thu thập ý kiến khách hàng/nhân sự.',
          metricBadge: { label: 'Kiểm soát nội dung', value: '100% chuẩn mực' },
        },
        {
          id: 'cms-analytics',
          tag: 'Thống kê độc giả',
          title: 'Phân Tích Lượt Đọc & Mức Độ Tương Tác (CMS Analytics)',
          description: 'Theo dõi lượt xem, thời gian đọc trung bình, chủ đề thịnh hành và tỷ lệ phản hồi theo từng phòng ban và thời gian thực.',
          metricBadge: { label: 'Mức độ gắn kết', value: '+35% Tương tác' },
        },
      ]
    : [
        {
          id: 'visual-builder',
          tag: 'No-Code Builder',
          title: 'Visual Drag-and-Drop Page Builder with Startup Blocks',
          description: 'Assemble stunning portal pages using modular layout blocks, hero carousels, callouts, and article grids without writing code.',
          metricBadge: { label: 'Publishing Speed', value: 'Under 5 Minutes' },
        },
        {
          id: 'intranet-portal',
          tag: 'Intranet Portal',
          title: 'Unified Corporate Intranet & Knowledge Portal',
          description: 'The authoritative central communication hub for leadership memos, employee spotlights, company culture, and corporate announcements.',
          metricBadge: { label: 'Employee Reach', value: '100% Enterprise-wide' },
        },
        {
          id: 'articles-newsroom',
          tag: 'Newsroom CMS',
          title: 'Professional Multi-Category Article Newsroom',
          description: 'Rich-text editorial engine, multi-level hierarchy, tags, sticky articles, and full indexing for instant company-wide search.',
          metricBadge: { label: 'Content Media', value: 'Full Rich-Media' },
        },
        {
          id: 'media-library',
          tag: 'Media Assets',
          title: 'Centralized Digital Asset Management (DAM) & Media Library',
          description: 'Store company event photos, training videos, graphics and branding assets backed directly by enterprise MinIO S3 storage.',
          metricBadge: { label: 'CDN Latency', value: '< 80ms Edge' },
        },
        {
          id: 'comment-moderation',
          tag: 'Moderation',
          title: 'Smart Comment Moderation & Public Feedback Forms',
          description: 'Built-in profanity filters, comment approval queues, and embedded customizable feedback forms for public readers or staff.',
          metricBadge: { label: 'Content Safety', value: '100% Brand Safe' },
        },
        {
          id: 'cms-analytics',
          tag: 'Readership Pulse',
          title: 'Readership Analytics & Content Engagement Metrics',
          description: 'Track real-time page views, average reading time, trending departments, and content interaction across desktop and mobile.',
          metricBadge: { label: 'Engagement Lift', value: '+35% Active Reads' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ CMS Studio & Cổng Thông Tin' : 'CMS Studio & Portal Module'}
          title={
            isVi
              ? ['Xây dựng cổng nội bộ.', 'Lan tỏa tiếng nói thương hiệu.']
              : ['Build corporate portals.', 'Broadcast unified culture.']
          }
          subtitle={
            isVi
              ? 'Trình dựng website kéo thả dạng khối no-code, tòa soạn xuất bản tin tức nội bộ, quản lý thư viện media MinIO S3 và điều duyệt phản hồi độc giả trên một nền tảng truyền thông hợp nhất.'
              : 'Visual block composer, digital newsroom, MinIO S3 media asset storage, and content moderation under one enterprise communications suite.'
          }
          tags={
            isVi
              ? [
                  'Kéo thả Startup Blocks',
                  'Cổng thông tin Intranet',
                  'Tòa soạn tin tức số',
                  'Thư viện Media MinIO S3',
                  'Điều duyệt bình luận',
                  'Thống kê độc giả CMS',
                ]
              : [
                  'Drag & Drop Startup Blocks',
                  'Enterprise Intranet Portal',
                  'Digital Newsroom Engine',
                  'MinIO S3 Media Assets',
                  'Comment Moderation',
                  'Readership Analytics',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Nền tảng xuất bản nội dung & truyền thông số' : 'Enterprise Content Publishing & Digital Communications'}
          subtitle={
            isVi
              ? 'Đem lại cho doanh nghiệp tiếng nói thương hiệu thống nhất, gắn kết nhân viên và lan tỏa văn hóa doanh nghiệp sâu rộng.'
              : 'Empower leadership with a unified brand voice, elevate employee engagement, and broadcast corporate culture seamlessly.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'CMS Studio & Cổng Thông Tin' : 'CMS Studio & Portal'} />

        <Footer />
      </main>
    </>
  );
}
