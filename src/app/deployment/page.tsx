'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveDeploymentHub } from '@/components/showcase/InteractiveDeploymentHub';

export default function DeploymentPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveDeploymentHub isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'desktop-electron',
          tag: 'Máy tính',
          title: 'Ứng Dụng Desktop Windows',
          description: 'Cài đặt Windows (.exe) độc lập với cơ chế cập nhật tự động ngầm không cần cài lại.',
          metricBadge: { label: 'Tương thích', value: 'Windows 10/11' },
        },
        {
          id: 'mobile-flutter',
          tag: 'Di động',
          title: 'Ứng Dụng Mobile Flutter',
          description: 'Đồng bộ 100% web trên iOS & Android: chấm công GPS, Face AI và duyệt phép 1 chạm.',
          metricBadge: { label: 'Tốc độ', value: 'Thời gian thực' },
        },
        {
          id: 'docker-compose',
          tag: 'Container',
          title: 'Triển Khai Docker 1-Click',
          description: 'Khởi chạy toàn bộ hệ thống API, Next.js, MySQL, Redis, MinIO bằng một lệnh duy nhất.',
          metricBadge: { label: 'Thời gian', value: '< 3 phút' },
        },
        {
          id: 'on-prem-ha',
          tag: 'Máy chủ riêng',
          title: 'Cài Đặt On-Premises',
          description: 'Vận hành độc lập trên máy chủ vật lý nội bộ, đáp ứng tiêu chuẩn an ninh ngân hàng.',
          metricBadge: { label: 'Tự chủ', value: '100% In-House' },
        },
        {
          id: 'hybrid-db',
          tag: 'Hiệu năng',
          title: 'Kiến Trúc Hybrid DB',
          description: 'Cân bằng giữa MySQL cho giao dịch nghiệp vụ và ClickHouse cho hàng tỷ sự kiện AI.',
          metricBadge: { label: 'Truy vấn', value: '100x nhanh hơn' },
        },
        {
          id: 'sla-uptime',
          tag: 'Độ tin cậy',
          title: 'Cam Kết Uptime 99.9%',
          description: 'Hạ tầng phân tán tự phục hồi, cảnh báo đa kênh và sao lưu dữ liệu tự động 24/7.',
          metricBadge: { label: 'Cam kết', value: '99.9% Uptime' },
        },
      ]
    : [
        {
          id: 'desktop-electron',
          tag: 'Desktop',
          title: 'Windows Desktop Client',
          description: 'Windows standalone executable installer with background delta auto-updates.',
          metricBadge: { label: 'OS', value: 'Windows 10/11' },
        },
        {
          id: 'mobile-flutter',
          tag: 'Mobile',
          title: 'Flutter Mobile App',
          description: 'Native parity on iOS & Android: GPS check-in, Face AI, and 1-tap approvals.',
          metricBadge: { label: 'Sync', value: 'Realtime' },
        },
        {
          id: 'docker-compose',
          tag: 'Container',
          title: '1-Click Docker Compose',
          description: 'Spin up microservices (Golang API, Next.js, MySQL, Redis, MinIO) in one command.',
          metricBadge: { label: 'Setup', value: '< 3 Minutes' },
        },
        {
          id: 'on-prem-ha',
          tag: 'On-Premises',
          title: 'Air-Gapped Deployment',
          description: 'Complete data sovereignty on in-house servers, compliant with banking mandates.',
          metricBadge: { label: 'Sovereignty', value: '100% In-House' },
        },
        {
          id: 'hybrid-db',
          tag: 'Performance',
          title: 'Hybrid DB Architecture',
          description: 'Query routing balancing transactional MySQL and timeseries ClickHouse OLAP.',
          metricBadge: { label: 'Analytics', value: '100x Faster' },
        },
        {
          id: 'sla-uptime',
          tag: 'Reliability',
          title: '99.9% Uptime SLA',
          description: 'Distributed architecture with health monitoring and automated tenant backups.',
          metricBadge: { label: 'SLA', value: '99.9% Uptime' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Hạ tầng & Mô hình Triển khai' : 'Infrastructure & Deployment'}
          title={
            isVi
              ? ['Triển khai linh hoạt.', 'Vận hành đa nền tảng.']
              : ['Flexible deployment.', 'Multi-platform operations.']
          }
          subtitle={
            isVi
              ? 'Hỗ trợ Cloud SaaS, Docker Compose 1-click, máy chủ On-Premises cùng ứng dụng Desktop và Mobile.'
              : 'Turnkey Cloud SaaS, 1-click Docker, air-gapped On-Premises, and native Desktop/Mobile apps.'
          }
          tags={
            isVi
              ? [
                  'Desktop Windows (.exe)',
                  'Mobile Flutter',
                  'Docker Compose 1-Click',
                  'Hybrid DB (MySQL + ClickHouse)',
                  'Máy chủ On-Premises',
                ]
              : [
                  'Windows Desktop (.exe)',
                  'Flutter Mobile App',
                  '1-Click Docker Compose',
                  'Hybrid DB Architecture',
                  'Air-Gapped On-Premises',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Mô hình triển khai' : 'Deployment Capabilities'}
          title={isVi ? 'Hạ tầng cấp doanh nghiệp & Ứng dụng client' : 'Enterprise Infrastructure & Topology'}
          subtitle={
            isVi
              ? 'Lựa chọn phương án triển khai tối ưu cho tổ chức: từ đám mây trọn gói đến tự chủ dữ liệu nội bộ.'
              : 'Select the optimal model: from turnkey managed SaaS to complete data sovereignty.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Hạ tầng & Triển khai' : 'Infrastructure & Deployment'} />

        <Footer />
      </main>
    </>
  );
}
