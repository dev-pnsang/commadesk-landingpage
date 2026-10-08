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
          tag: 'API',
          title: 'REST API & Swagger UI',
          description: 'Hàng trăm endpoint chuẩn OpenAPI 3.0 với Swagger UI tương tác thử cURL tức thì.',
          metricBadge: { label: 'Chuẩn', value: 'OpenAPI 3.0' },
        },
        {
          id: 'webhooks-pipeline',
          tag: 'Webhooks',
          title: 'Webhooks Hai Chiều',
          description: 'Bắn sự kiện tức thì khi có biến động nhân sự, công việc kèm cơ chế retry lũy tiến.',
          metricBadge: { label: 'Độ trễ', value: '< 50ms Realtime' },
        },
        {
          id: 'feature-specs-14',
          tag: 'Đặc tả',
          title: 'Đặc Tả 14 Phân Hệ',
          description: 'Tài liệu hướng dẫn chuyên sâu cho toàn bộ 14 phân hệ nghiệp vụ của CommaDesk.',
          metricBadge: { label: 'Bao phủ', value: '14 Phân hệ' },
        },
        {
          id: 'jwt-rs256',
          tag: 'Xác thực',
          title: 'Xác Thực JWT & HMAC',
          description: 'Xác thực bất đối xứng RS256, 2FA chuẩn RFC 6238 và ghép nối thiết bị qua HMAC.',
          metricBadge: { label: 'Thuật toán', value: 'RS256 / SHA-256' },
        },
        {
          id: 'casbin-rbac-docs',
          tag: 'Phân quyền',
          title: 'Chính Sách Casbin RBAC',
          description: 'Hướng dẫn khai báo chính sách phân quyền chi tiết, kiểm tra quyền dưới 1ms.',
          metricBadge: { label: 'Tốc độ', value: '< 1ms In-Memory' },
        },
        {
          id: 'iot-peripherals',
          tag: 'Phần cứng',
          title: 'Kết Nối Thiết Bị Ngoại Vi',
          description: 'Kết nối camera RTSP/ONVIF, máy chấm công, MinIO S3 và bản đồ địa lý GIS.',
          metricBadge: { label: 'Chuẩn', value: 'Công nghiệp' },
        },
      ]
    : [
        {
          id: 'rest-api-swagger',
          tag: 'API',
          title: 'OpenAPI 3.0 & Swagger UI',
          description: 'Hundreds of standardized endpoints with an interactive Swagger test playground.',
          metricBadge: { label: 'Standard', value: 'OpenAPI 3.0' },
        },
        {
          id: 'webhooks-pipeline',
          tag: 'Webhooks',
          title: 'Real-Time Webhooks',
          description: 'Bi-directional event streams for tasks, attendance, and audit alerts with retries.',
          metricBadge: { label: 'Latency', value: '< 50ms Realtime' },
        },
        {
          id: 'feature-specs-14',
          tag: 'Specs',
          title: '14 Module Specifications',
          description: 'In-depth implementation guides for all 14 core CommaDesk enterprise modules.',
          metricBadge: { label: 'Coverage', value: '14 Core Modules' },
        },
        {
          id: 'jwt-rs256',
          tag: 'Auth',
          title: 'JWT RS256 & HMAC Tokens',
          description: 'Enterprise identity with RS256 keys, TOTP 2FA, and edge device HMAC pairing.',
          metricBadge: { label: 'Crypto', value: 'RS256 / SHA-256' },
        },
        {
          id: 'casbin-rbac-docs',
          tag: 'Security',
          title: 'Casbin RBAC Policy Guide',
          description: 'Configure domain-scoped access policies for sub-millisecond in-memory authorization.',
          metricBadge: { label: 'Speed', value: '< 1ms In-Memory' },
        },
        {
          id: 'iot-peripherals',
          tag: 'Hardware',
          title: 'IoT & Camera Ingestion',
          description: 'Documentation for RTSP/ONVIF cameras, time clock APIs, and MinIO S3 storage.',
          metricBadge: { label: 'Protocol', value: 'Industry Standard' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Tài nguyên Kỹ thuật & API' : 'Technical Docs & API Reference'}
          title={
            isVi
              ? ['Tài liệu kỹ thuật mở.', 'Tích hợp không giới hạn.']
              : ['Open technical docs.', 'Limitless integration.']
          }
          subtitle={
            isVi
              ? 'Tài nguyên kỹ thuật: đặc tả 14 phân hệ, bộ REST API OpenAPI 3.0 và hệ thống Webhooks hai chiều.'
              : 'Developer hub for 14 module specifications, OpenAPI 3.0 REST endpoints, and Webhooks.'
          }
          tags={
            isVi
              ? [
                  'REST API OpenAPI 3.0',
                  'Webhooks hai chiều',
                  'Đặc tả 14 phân hệ',
                  'Chính sách Casbin RBAC',
                  'Camera RTSP / ONVIF',
                ]
              : [
                  'REST API OpenAPI 3.0',
                  'Bi-directional Webhooks',
                  '14 Module Specs',
                  'Casbin RBAC Policies',
                  'Camera RTSP / ONVIF',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Tài nguyên tích hợp' : 'Integration Resources'}
          title={isVi ? 'Bộ công cụ tích hợp & Hướng dẫn kỹ thuật' : 'Developer Tools & Integration Ecosystem'}
          subtitle={
            isVi
              ? 'Kết nối CommaDesk với hệ thống nội bộ, ứng dụng bên thứ ba và hạ tầng đám mây sẵn có.'
              : 'Connect CommaDesk with your internal pipelines, third-party apps, and cloud infra.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Tài liệu Kỹ thuật & API' : 'Technical Docs & APIs'} />

        <Footer />
      </main>
    </>
  );
}
