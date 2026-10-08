'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';
import { InteractiveSocialRetail } from '@/components/showcase/InteractiveSocialRetail';

export default function SocialRetailPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveSocialRetail isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'multi-channel-hub',
          tag: 'Đa kênh MXH',
          title: 'Quản Lý Tập Trung Kênh Mạng Xã Hội (Social Gateway)',
          description: 'Hội tụ toàn bộ các kênh Facebook Fanpage, Zalo Official Account, và Webchat chăm sóc khách hàng vào một bảng điều khiển duy nhất.',
          metricBadge: { label: 'Kết nối mạng xã hội', value: 'Đa kênh Meta & Zalo' },
        },
        {
          id: 'post-composer',
          tag: 'Soạn thảo xuất bản',
          title: 'Trình Soạn Thảo Đăng Bài Đa Kênh (Post Composer)',
          description: 'Soạn thảo nội dung một lần, xem trước giao diện trực quan và hẹn giờ đăng bài đồng thời lên tất cả các fanpage và tài khoản Zalo OA.',
          metricBadge: { label: 'Tiết kiệm thời gian', value: 'Nhanh hơn 4x' },
        },
        {
          id: 'kiotviet-two-way-sync',
          tag: 'Bán lẻ KiotViet',
          title: 'Đồng Bộ Hai Chiều Với Phần Mềm Bán Lẻ KiotViet',
          description: 'Tự động đồng bộ danh mục sản phẩm, giá bán, số dư tồn kho theo chi nhánh và đơn hàng realtime giữa KiotViet POS và CommaDesk.',
          metricBadge: { label: 'Độ trễ đồng bộ', value: '< 1.2 Giây' },
        },
        {
          id: 'branch-stock-balance',
          tag: 'Tồn kho chi nhánh',
          title: 'Kiểm Soát Tồn Kho Chuỗi Cửa Hàng Bán Lẻ',
          description: 'Theo dõi lượng tồn kho tại từng điểm bán lẻ KiotViet, tự động bù trừ khi có đơn hàng phát sinh, chống bán quá số lượng có sẵn.',
          metricBadge: { label: 'Sai lệch số dư', value: 'Tuyệt đối 0%' },
        },
        {
          id: 'social-monitoring',
          tag: 'Giám sát tương tác',
          title: 'Bảng Điều Khiển Giám Sát & Nhật Ký Kiểm Toán (Audit Log)',
          description: 'Giám sát lưu lượng tương tác, cảnh báo vượt ngưỡng tần suất gọi API, ghi log chi tiết lịch sử gửi nhận thông điệp đa kênh.',
          metricBadge: { label: 'Kiểm toán an toàn', value: '100% Casbin Log' },
        },
        {
          id: 'omnichannel-orders',
          tag: 'Đơn hàng đa kênh',
          title: 'Xử Lý Đơn Hàng Từ Mạng Xã Hội Về Kho Trung Tâm',
          description: 'Chuyển hóa tương tác khách hàng trên Facebook/Zalo thành đơn hàng thực tế, kích hoạt luồng xuất kho và giao vận tức thì.',
          metricBadge: { label: 'Tỷ lệ chuyển đổi', value: '+28% Doanh thu' },
        },
      ]
    : [
        {
          id: 'multi-channel-hub',
          tag: 'Omnichannel Hub',
          title: 'Centralized Multi-Channel Social Gateway',
          description: 'Unify company Facebook Fanpages, Zalo Official Accounts, and customer live webchats under a single high-availability operational dashboard.',
          metricBadge: { label: 'Connected Channels', value: 'Meta & Zalo Native' },
        },
        {
          id: 'post-composer',
          tag: 'Post Composer',
          title: 'Multi-Channel Campaign Composer & Scheduled Broadcast',
          description: 'Author campaigns once, inspect live platform previews, and schedule simultaneous broadcasts across pages and messaging channels.',
          metricBadge: { label: 'Workflow Velocity', value: '4x Faster' },
        },
        {
          id: 'kiotviet-two-way-sync',
          tag: 'KiotViet Sync',
          title: 'Bi-Directional Real-Time KiotViet POS Synchronization',
          description: 'Real-time synchronization of product catalogs, multi-branch price tiers, stock balances and counter orders between KiotViet POS and CommaDesk.',
          metricBadge: { label: 'Sync Latency', value: '< 1.2 Seconds' },
        },
        {
          id: 'branch-stock-balance',
          tag: 'Store Stock',
          title: 'Retail Storefront & Branch Inventory Ledger Reconciler',
          description: 'Track real-time stock balances across all retail store locations, automatically deducting units whenever a retail sale is rung up.',
          metricBadge: { label: 'Oversell Risk', value: 'Zero Discrepancy' },
        },
        {
          id: 'social-monitoring',
          tag: 'Monitoring & Audit',
          title: 'Gateway Health Monitor & Cryptographic Social Audit Logs',
          description: 'Monitor inbound/outbound traffic volumes, API rate limits, webhook delivery retries, and comprehensive audit trails under Casbin RBAC.',
          metricBadge: { label: 'Security & Audit', value: '100% Logged' },
        },
        {
          id: 'omnichannel-orders',
          tag: 'Order Pipeline',
          title: 'Social Lead Ingestion to Central Fulfillment Pipeline',
          description: 'Convert social interactions from Facebook and Zalo into confirmed orders, dispatching warehouse fulfillment and logistics seamlessly.',
          metricBadge: { label: 'Conversion Impact', value: '+28% Revenue' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Mạng Xã Hội & Bán Lẻ' : 'Social & Retail Module'}
          title={
            isVi
              ? ['Kết nối mạng xã hội.', 'Đồng bộ bán lẻ KiotViet.']
              : ['Unify social marketing.', 'Sync retail POS instantly.']
          }
          subtitle={
            isVi
              ? 'Cổng kết nối mạng xã hội tập trung, soạn đăng bài đa kênh, giám sát tương tác và tự động đồng bộ hai chiều dữ liệu sản phẩm, tồn kho và đơn hàng với phần mềm KiotViet.'
              : 'Enterprise social broadcasting, Facebook & Zalo multi-channel campaign composer, live audit logging, and bi-directional retail synchronization with KiotViet POS.'
          }
          tags={
            isVi
              ? [
                  'Social Gateway tập trung',
                  'Soạn bài Post Composer',
                  'Đồng bộ KiotViet POS',
                  'Cân bằng tồn chi nhánh',
                  'Giám sát & Nhật ký Audit',
                  'Xử lý đơn hàng đa kênh',
                ]
              : [
                  'Central Social Gateway',
                  'Post Composer Tool',
                  'KiotViet Real-Time Sync',
                  'Branch Inventory Balances',
                  'Gateway Health & Auditing',
                  'Omnichannel Order Pipeline',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Giải pháp bán lẻ đa kênh & mạng xã hội hợp nhất' : 'Enterprise Omnichannel Social & Retail Engine'}
          subtitle={
            isVi
              ? 'Không còn phân mảnh giữa đội ngũ marketing mạng xã hội và vận hành kho bãi, cửa hàng thực tế.'
              : 'Bridge the gap between digital marketing campaigns, counter point-of-sale transactions, and central warehouse fulfillment.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Mạng Xã Hội & Bán Lẻ KiotViet' : 'Social Gateway & Retail'} />

        <Footer />
      </main>
    </>
  );
}
