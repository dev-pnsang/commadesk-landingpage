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
          tag: 'Ứng dụng máy tính',
          title: 'Ứng dụng Desktop Windows (.exe) & Auto-Update',
          description: 'Đóng gói toàn bộ sức mạnh CommaDesk thành file cài đặt Windows độc lập (.exe). Cơ chế cập nhật ngầm tự động (Auto-Updater) giúp người dùng luôn nhận được bản vá mới nhất mà không cần cài đặt lại.',
          metricBadge: { label: 'Tương thích', value: 'Windows 10/11 x64' },
        },
        {
          id: 'mobile-flutter',
          tag: 'Ứng dụng di động',
          title: 'Ứng dụng Mobile Flutter Native Parity',
          description: 'Ứng dụng di động đa nền tảng iOS & Android với tính năng đồng bộ 100% bản web: chấm công định vị GPS Geofencing, nhận diện khuôn mặt sinh trắc, duyệt đơn nghỉ phép 1 chạm và thông báo đẩy tức thì.',
          metricBadge: { label: 'Tốc độ phản hồi', value: 'Tức thì (Realtime)' },
        },
        {
          id: 'docker-compose',
          tag: 'Container 1-Click',
          title: 'Triển khai Docker Compose & VPS tự động',
          description: 'Hỗ trợ khởi chạy toàn bộ hệ thống (Golang Gin API, Next.js, MySQL, ClickHouse, Redis, MinIO) bằng một lệnh duy nhất: develop-setup.sh hoặc docker compose prod.',
          metricBadge: { label: 'Thời gian khởi chạy', value: '< 3 phút' },
        },
        {
          id: 'on-prem-ha',
          tag: 'Máy chủ riêng',
          title: 'Cài đặt Private Cloud & On-Premises Air-Gapped',
          description: 'Khả năng vận hành độc lập hoàn toàn trên hạ tầng máy chủ vật lý nội bộ của doanh nghiệp, đáp ứng các tiêu chuẩn an ninh nghiêm ngặt nhất của ngân hàng, viễn thông và cơ quan nhà nước.',
          metricBadge: { label: 'Mức độ bảo mật', value: '100% On-Premises' },
        },
        {
          id: 'hybrid-db',
          tag: 'Hiệu năng cao',
          title: 'Kiến trúc Hybrid DB: MySQL 8.0 & ClickHouse OLAP',
          description: 'Định tuyến dữ liệu thông minh giữa MySQL 8.0 cho giao dịch nghiệp vụ cốt lõi, ClickHouse cho hàng tỷ sự kiện camera AI chuỗi thời gian, và Redis cho bộ đệm tốc độ cao.',
          metricBadge: { label: 'Truy vấn phân tích', value: 'Nhanh hơn 100x' },
        },
        {
          id: 'sla-uptime',
          tag: 'Độ tin cậy',
          title: 'Cam kết chất lượng SLA & Uptime 99.9%',
          description: 'Hạ tầng phân tán với cơ chế tự phục hồi, giám sát sức khỏe đa kênh và sao lưu dữ liệu tổ chức tự động định kỳ (OBB Backup), đảm bảo hoạt động liên tục 24/7.',
          metricBadge: { label: 'Cam kết Uptime', value: '99.9% Doanh nghiệp' },
        },
      ]
    : [
        {
          id: 'desktop-electron',
          tag: 'Desktop Client',
          title: 'Windows Desktop Client (.exe) & Auto-Update',
          description: 'Self-contained Windows executable installer with delta auto-update background engine, enabling frictionless corporate deployment without complex environment dependencies.',
          metricBadge: { label: 'Compatibility', value: 'Windows 10/11 x64' },
        },
        {
          id: 'mobile-flutter',
          tag: 'Mobile App',
          title: 'Flutter Mobile App (Native Parity Shell)',
          description: 'Full-featured iOS & Android companion app providing geofenced GPS check-in, biometric face validation, 1-tap manager approvals, and push alerts with offline queueing.',
          metricBadge: { label: 'Sync Speed', value: 'Zero-Lag Realtime' },
        },
        {
          id: 'docker-compose',
          tag: 'Containerization',
          title: '1-Click Docker Compose & Automated VPS Setup',
          description: 'Spin up the entire microservice ecosystem (Golang API, Next.js, MySQL 8.0, ClickHouse, Redis, MinIO) with a single command via production Docker Compose manifests.',
          metricBadge: { label: 'Spin-up Time', value: '< 3 Minutes' },
        },
        {
          id: 'on-prem-ha',
          tag: 'Air-Gapped',
          title: 'Private Cloud & Air-Gapped On-Premises Deployment',
          description: 'Complete data sovereignty with air-gapped on-premises support, compliant with strict banking, telecom, and governmental data privacy mandates.',
          metricBadge: { label: 'Data Sovereignty', value: '100% In-House' },
        },
        {
          id: 'hybrid-db',
          tag: 'High Performance',
          title: 'Hybrid DB Architecture: MySQL 8.0 & ClickHouse OLAP',
          description: 'Smart query routing balancing transactional operations in MySQL 8.0, billions of AI vision timeseries events in ClickHouse OLAP, and in-memory Redis caching.',
          metricBadge: { label: 'Analytics Query', value: '100x Faster' },
        },
        {
          id: 'sla-uptime',
          tag: 'Reliability',
          title: 'Enterprise SLA & 99.9% Uptime Commitment',
          description: 'Distributed architecture featuring automated health checks, multi-channel alerts, and automated tenant data backup (OBB) ensuring 24/7 mission-critical operations.',
          metricBadge: { label: 'Uptime SLA', value: '99.9% Enterprise' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto space-y-12 sm:space-y-24 md:space-y-32 relative px-2.5 sm:px-6 lg:px-8 pb-16">
        <SubpageHero
          categoryBadge={isVi ? 'Hạ tầng & Mô hình Triển khai' : 'Infrastructure & Deployment'}
          title={
            isVi
              ? ['Triển khai linh hoạt.', 'Vận hành đa nền tảng.']
              : ['Flexible deployment.', 'Multi-platform operations.']
          }
          subtitle={
            isVi
              ? 'CommaDesk hỗ trợ trọn vẹn mọi mô hình triển khai doanh nghiệp: từ Multi-Tenant Cloud SaaS, Docker Compose 1-click, máy chủ On-Premises độc lập, đến ứng dụng Desktop Windows (.exe) và Mobile Flutter đồng bộ 100% tính năng.'
              : 'CommaDesk supports all enterprise hosting topologies: from Multi-Tenant Cloud SaaS, 1-click Docker manifests, air-gapped On-Premises, to native Windows Desktop (.exe) and Flutter mobile clients.'
          }
          tags={
            isVi
              ? [
                  'Desktop Windows (.exe)',
                  'Mobile Flutter Native Parity',
                  'Docker Compose 1-Click',
                  'Kiến trúc Hybrid DB (MySQL + ClickHouse)',
                  'Máy chủ On-Premises Air-Gapped',
                  'Cam kết Uptime SLA 99.9%',
                ]
              : [
                  'Windows Desktop (.exe)',
                  'Flutter Mobile Native Parity',
                  '1-Click Docker Compose',
                  'Hybrid DB (MySQL + ClickHouse)',
                  'Air-Gapped On-Premises',
                  'Enterprise 99.9% SLA',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Mô hình triển khai' : 'Deployment Capabilities'}
          title={isVi ? 'Hạ tầng cấp doanh nghiệp & Ứng dụng client đa dạng' : 'Enterprise Infrastructure & Client Topology'}
          subtitle={
            isVi
              ? 'Lựa chọn phương án triển khai tối ưu nhất cho quy mô tổ chức: từ dịch vụ đám mây trọn gói đến tự chủ dữ liệu 100% trên hạ tầng nội bộ.'
              : 'Select the optimal deployment model for your organization: from turnkey managed SaaS to complete data sovereignty on in-house infrastructure.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Hạ tầng & Triển khai' : 'Infrastructure & Deployment'} />

        <Footer />
      </main>
    </>
  );
}
