'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveCasbinShield } from '@/components/showcase/InteractiveCasbinShield';

export default function SecurityPlatformPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveCasbinShield isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'casbin-rbac',
          tag: 'Kiểm soát truy cập',
          title: 'Ma trận phân quyền Casbin RBAC Domain-Scoped',
          description: 'Phân quyền rành mạch theo vai trò và tổ chức, kiểm tra quyền dưới 1ms trong bộ nhớ.',
          metricBadge: { label: 'Độ trễ kiểm tra quyền', value: '< 1ms trong bộ nhớ' },
        },
        {
          id: 'multi-tenant',
          tag: 'Kiến trúc cô lập',
          title: 'Kiến trúc đa tổ chức Multi-Tenant an toàn tuyệt đối',
          description: 'Cô lập dữ liệu tuyệt đối giữa các tổ chức và chi nhánh, loại bỏ rủi ro rò rỉ dữ liệu.',
          metricBadge: { label: 'Cô lập dữ liệu', value: '100% Tenant Isolation' },
        },
        {
          id: 'audit-trails',
          tag: 'Kiểm toán 3 tầng',
          title: 'Nhật ký Audit 3 lớp chống gian lận & OBB Backup',
          description: 'Ghi lại mọi thay đổi dữ liệu chi tiết, lịch sử truy cập và nhật ký quyền hạn bất biến.',
          metricBadge: { label: 'Tính toàn vẹn', value: 'Bất biến (Immutable)' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Định danh & Phiên',
          title: 'Xác thực 2FA/TOTP & Device Identity HMAC',
          description: 'Bảo vệ đăng nhập với xác thực 2FA/TOTP và định danh thiết bị IoT/camera bằng HMAC.',
          metricBadge: { label: 'Mức độ bảo vệ', value: 'Zero Account Takeover' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Kết nối mở rộng',
          title: 'REST API Swagger & Webhooks Trace Debug Pipeline',
          description: 'Bộ API chuẩn OpenAPI 3.0 và hệ thống Webhooks hai chiều tích hợp không giới hạn.',
          metricBadge: { label: 'Tiêu chuẩn API', value: 'OpenAPI 3.0 Ready' },
        },
        {
          id: 'deployment-modes',
          tag: 'Hạ tầng & Đa nền tảng',
          title: 'Hybrid DB, Desktop Windows (.exe) & Mobile Flutter',
          description: 'Triển khai linh hoạt Cloud, On-Premises hoặc Hybrid với ứng dụng Desktop và Mobile.',
          metricBadge: { label: 'Mô hình triển khai', value: 'Docker / On-Prem / Hybrid' },
        },
      ]
    : [
        {
          id: 'casbin-rbac',
          tag: 'Access Control',
          title: 'Casbin RBAC Multi-Tenant Matrix (<1ms Latency)',
          description: 'Fine-grained role-based authorization enforced across all actions under 1ms.',
          metricBadge: { label: 'Enforcer Latency', value: '< 1ms In-Memory' },
        },
        {
          id: 'multi-tenant',
          tag: 'Isolation Architecture',
          title: 'Zero-Leak Multi-Tenant Logical Partitioning',
          description: 'Strict logical database isolation between corporate tenants eliminating cross-org leaks.',
          metricBadge: { label: 'Data Isolation', value: '100% Tenant Scoped' },
        },
        {
          id: 'audit-trails',
          tag: 'Compliance Auditing',
          title: 'Triple-Layer Audit Trails & OBB Backup/Restore',
          description: 'Complete audit logs covering data deltas, access attempts, and immutable RBAC changes.',
          metricBadge: { label: 'Audit Integrity', value: 'Cryptographic Logs' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Identity & Tokens',
          title: 'Mandatory 2FA / TOTP & HMAC Device Identity',
          description: 'Fortify logins with TOTP 2FA, remote session kills, and HMAC device pairing.',
          metricBadge: { label: 'Credential Security', value: 'Zero Account Takeover' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Enterprise Connectivity',
          title: 'Enterprise REST API & Inbound/Outbound Webhooks',
          description: 'OpenAPI 3.0 endpoints and bi-directional Webhooks with end-to-end event tracing.',
          metricBadge: { label: 'API Standard', value: 'OpenAPI 3.0 / JSON' },
        },
        {
          id: 'deployment-modes',
          tag: 'Infrastructure Parity',
          title: 'Hybrid DB, Desktop Windows (.exe) & Mobile Flutter',
          description: 'Flexible deployment across Cloud, On-Premises, or Hybrid with Desktop & Mobile apps.',
          metricBadge: { label: 'Deployment Modes', value: 'Docker / On-Prem / Hybrid' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Bảo mật & Nền tảng' : 'Security & Platform Module'}
          title={
            isVi
              ? ['Bảo mật cấp doanh nghiệp.', 'Hạ tầng mở rộng không giới hạn.']
              : ['Enterprise-grade security.', 'Infinite infrastructure scalability.']
          }
          subtitle={
            isVi
              ? 'CommaDesk Security & Platform cung cấp ma trận phân quyền Casbin RBAC, kiến trúc đa tổ chức Multi-tenant an toàn tuyệt đối, nhật ký Audit 3 lớp, kiến trúc Hybrid DB và bộ REST API chuẩn mở cấp doanh nghiệp.'
              : 'CommaDesk Security & Platform delivers Casbin RBAC access governance, zero-leak multi-tenant partitioning, triple-layer audit trails, Hybrid DB routing, and enterprise OpenAPI capabilities.'
          }
          tags={
            isVi
              ? [
                  'Ma trận quyền Casbin RBAC',
                  'Đa tổ chức Multi-Tenant cô lập',
                  'Nhật ký Audit 3 lớp',
                  '2FA RFC 6238 & Định danh HMAC',
                  'Định tuyến dữ liệu Hybrid DB',
                  'Đồng bộ Windows & Mobile',
                ]
              : [
                  'Casbin RBAC Matrix',
                  'Zero-Leak Multi-Tenant',
                  'Triple Audit Logs',
                  'RFC 6238 2FA & HMAC',
                  'Hybrid DB Routing',
                  'Windows & Mobile Parity',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Nền tảng bảo mật & Hạ tầng công nghệ' : 'Enterprise Security & Technical Foundation'}
          subtitle={
            isVi
              ? 'Được xây dựng theo tiêu chuẩn bảo mật khắt khe nhất, bảo vệ dữ liệu toàn vẹn và cho phép tùy biến cài đặt trên mọi môi trường hạ tầng.'
              : 'Engineered according to rigorous enterprise security standards, protecting data integrity while offering versatile deployment on any cloud or on-prem environment.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Bảo mật & Nền tảng' : 'Security & Platform'} />

        <Footer />
      </main>
    </>
  );
}
