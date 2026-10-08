'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveDocsConsole } from '@/components/showcase/InteractiveDocsConsole';

export default function DocsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveDocsConsole isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'rest-api-swagger',
          tag: 'API Chuẩn Mở',
          title: 'REST API Chuẩn OpenAPI 3.0 / Swagger UI',
          description: 'Hệ thống hàng trăm endpoint được chuẩn hóa theo chuẩn OpenAPI 3.0, cung cấp Swagger UI trực quan cho phép lập trình viên kiểm thử cURL, xem schema dữ liệu và tích hợp nhanh chóng.',
          metricBadge: { label: 'Chuẩn tài liệu', value: 'OpenAPI 3.0 / JSON' },
        },
        {
          id: 'webhooks-pipeline',
          tag: 'Sự kiện Realtime',
          title: 'Webhooks Inbound & Outbound Pipeline',
          description: 'Cơ chế bắn sự kiện tức thì khi có biến động nhân sự, công việc, chấm công, văn bản hoặc cảnh báo an ninh. Tích hợp sẵn bộ test harness, cURL tester và cơ chế retry lũy tiến.',
          metricBadge: { label: 'Độ trễ sự kiện', value: '< 50ms Realtime' },
        },
        {
          id: 'feature-specs-14',
          tag: 'Đặc tả 14 phân hệ',
          title: 'Kho tài liệu đặc tả 14 phân hệ nghiệp vụ',
          description: 'Hệ thống tài liệu hướng dẫn chuyên sâu cho toàn bộ 14 phân hệ của CommaDesk: từ nền tảng bảo mật, nhân sự, dự án, kho vật tư, sổ văn bản, logistics đội xe đến camera AI và CRM.',
          metricBadge: { label: 'Phạm vi bao phủ', value: '14 Phân hệ cốt lõi' },
        },
        {
          id: 'jwt-rs256',
          tag: 'Xác thực an toàn',
          title: 'Xác thực JWT RS256, 2FA & Device Identity HMAC',
          description: 'Cơ chế xác thực bất đối xứng với chữ ký số RS256, mã hóa 2FA/TOTP chuẩn RFC 6238 và ghép nối thiết bị ngoại vi (camera, máy chấm công, agent) bằng chữ ký băm HMAC.',
          metricBadge: { label: 'Thuật toán mã hóa', value: 'RS256 / SHA-256' },
        },
        {
          id: 'casbin-rbac-docs',
          tag: 'Chính sách phân quyền',
          title: 'Cấu hình ma trận phân quyền Casbin RBAC',
          description: 'Tài liệu hướng dẫn khai báo chính sách phân quyền chi tiết theo domain-scoped, cho phép kiểm soát quyền hạn tới từng hành vi (read, write, approve, export) và từng API endpoint.',
          metricBadge: { label: 'Hiệu năng kiểm tra', value: '< 1ms trong bộ nhớ' },
        },
        {
          id: 'iot-peripherals',
          tag: 'Tích hợp phần cứng',
          title: 'Kết nối thiết bị ngoại vi & Dịch vụ đám mây',
          description: 'Tài liệu kết nối luồng camera RTSP/ONVIF chuẩn H.265, API đồng bộ dữ liệu máy chấm công (device-ingest), lưu trữ đối tượng MinIO S3 và bản đồ địa lý Goong Map GIS.',
          metricBadge: { label: 'Tương thích', value: 'Chuẩn công nghiệp' },
        },
      ]
    : [
        {
          id: 'rest-api-swagger',
          tag: 'Open Standards',
          title: 'REST API OpenAPI 3.0 & Swagger UI Reference',
          description: 'Hundreds of standardized endpoints with complete OpenAPI 3.0 definitions, interactive Swagger playground, request/response JSON schemas, and SDK generation support.',
          metricBadge: { label: 'API Standard', value: 'OpenAPI 3.0 / JSON' },
        },
        {
          id: 'webhooks-pipeline',
          tag: 'Realtime Events',
          title: 'Bi-directional Inbound & Outbound Webhooks',
          description: 'Real-time event streams triggered upon task status changes, employee check-ins, document dispatches, and AI perimeter breaches with HMAC signatures and exponential retry.',
          metricBadge: { label: 'Event Latency', value: '< 50ms Realtime' },
        },
        {
          id: 'feature-specs-14',
          tag: '14 Feature Specs',
          title: 'Comprehensive 14-Module Technical Specifications',
          description: 'In-depth implementation guides for all 14 CommaDesk modules: security platform, workforce, Kanban projects, inventory SKU, legal registry, fleet GPS, AI vision, and CRM.',
          metricBadge: { label: 'Coverage', value: '14 Core Modules' },
        },
        {
          id: 'jwt-rs256',
          tag: 'Authentication',
          title: 'JWT RS256 Asymmetric Tokens & HMAC Identity',
          description: 'Enterprise identity layer powered by RS256 asymmetric cryptographic keys, RFC 6238 TOTP two-factor auth, and cryptographic HMAC pairing for edge camera gateways.',
          metricBadge: { label: 'Crypto Algorithm', value: 'RS256 / SHA-256' },
        },
        {
          id: 'casbin-rbac-docs',
          tag: 'Access Governance',
          title: 'Casbin RBAC Domain-Scoped Policy Guide',
          description: 'Complete architectural reference for configuring domain-scoped access control policies, ensuring sub-millisecond in-memory authorization across all UI elements and APIs.',
          metricBadge: { label: 'Enforcer Speed', value: '< 1ms In-Memory' },
        },
        {
          id: 'iot-peripherals',
          tag: 'Hardware Integration',
          title: 'IoT Devices, RTSP Cameras & Cloud Storage',
          description: 'Developer documentation for RTSP/ONVIF camera ingestion, biometric time clock device-ingest APIs, MinIO S3 object storage buckets, and Goong Map GIS tiles.',
          metricBadge: { label: 'Compatibility', value: 'Industry Standard' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto space-y-12 sm:space-y-24 md:space-y-32 relative px-2.5 sm:px-6 lg:px-8 pb-16">
        <SubpageHero
          categoryBadge={isVi ? 'Tài nguyên Kỹ thuật & API' : 'Technical Docs & API Reference'}
          title={
            isVi
              ? ['Tài liệu kỹ thuật mở.', 'Tích hợp không giới hạn.']
              : ['Open technical docs.', 'Limitless integration.']
          }
          subtitle={
            isVi
              ? 'Trung tâm tài nguyên kỹ thuật dành cho nhà phát triển và đội ngũ kỹ thuật: đặc tả chi tiết 14 phân hệ, bộ REST API chuẩn OpenAPI 3.0, hệ thống Webhooks hai chiều và hướng dẫn tích hợp thiết bị phần cứng.'
              : 'Developer hub providing full specifications for all 14 CommaDesk modules, OpenAPI 3.0 REST endpoints, bi-directional Webhooks, and hardware peripheral integration guides.'
          }
          tags={
            isVi
              ? [
                  'REST API Chuẩn OpenAPI 3.0',
                  'Webhooks Inbound & Outbound',
                  'Đặc tả 14 phân hệ cốt lõi',
                  'Chính sách phân quyền Casbin RBAC',
                  'Luồng Camera RTSP / ONVIF',
                  'Lưu trữ MinIO S3 Object Storage',
                ]
              : [
                  'REST API OpenAPI 3.0',
                  'Inbound & Outbound Webhooks',
                  '14 Feature Specifications',
                  'Casbin RBAC Policies',
                  'Camera RTSP / ONVIF',
                  'MinIO S3 Object Storage',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Tài nguyên tích hợp' : 'Integration Resources'}
          title={isVi ? 'Bộ công cụ tích hợp & Hướng dẫn kỹ thuật' : 'Developer Tools & Integration Ecosystem'}
          subtitle={
            isVi
              ? 'Tất cả tài nguyên cần thiết để kết nối CommaDesk với hệ thống nội bộ, ứng dụng bên thứ ba và hạ tầng đám mây sẵn có của doanh nghiệp.'
              : 'All necessary endpoints, webhooks, and specifications required to interface CommaDesk with your enterprise data pipelines and cloud infra.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Tài liệu Kỹ thuật & API' : 'Technical Docs & APIs'} />

        <Footer />
      </main>
    </>
  );
}
