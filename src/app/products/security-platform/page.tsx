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
          tag: 'Phân quyền',
          title: 'Ma Trận Casbin RBAC',
          description: 'Phân quyền rành mạch theo vai trò và tổ chức, kiểm tra quyền dưới 1ms trong bộ nhớ.',
          metricBadge: { label: 'Độ trễ', value: '< 1ms In-Memory' },
        },
        {
          id: 'multi-tenant',
          tag: 'Đa tổ chức',
          title: 'Kiến Trúc Multi-Tenant',
          description: 'Cô lập dữ liệu tuyệt đối giữa các tổ chức và chi nhánh, loại bỏ nguy cơ rò rỉ.',
          metricBadge: { label: 'Cô lập', value: '100% Tenant Isolation' },
        },
        {
          id: 'audit-trails',
          tag: 'Kiểm toán',
          title: 'Nhật Ký Kiểm Toán 3 Lớp',
          description: 'Ghi lại mọi thay đổi dữ liệu, lịch sử truy cập và nhật ký quyền hạn bất biến.',
          metricBadge: { label: 'Toàn vẹn', value: 'Bất biến (Immutable)' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Xác thực',
          title: 'Xác Thực 2FA & Thiết Bị',
          description: 'Bảo vệ đăng nhập với 2FA/TOTP và định danh thiết bị IoT, camera bằng HMAC.',
          metricBadge: { label: 'An toàn', value: 'Zero Account Takeover' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Kết nối',
          title: 'REST API & Webhooks',
          description: 'Bộ API chuẩn OpenAPI 3.0 và hệ thống Webhooks hai chiều tích hợp không giới hạn.',
          metricBadge: { label: 'Tiêu chuẩn', value: 'OpenAPI 3.0' },
        },
        {
          id: 'deployment-modes',
          tag: 'Hạ tầng',
          title: 'Triển Khai Linh Hoạt',
          description: 'Vận hành trên Cloud, On-Premises hoặc Hybrid với ứng dụng Desktop và Mobile.',
          metricBadge: { label: 'Mô hình', value: 'Docker / On-Prem / Hybrid' },
        },
      ]
    : [
        {
          id: 'casbin-rbac',
          tag: 'Access Control',
          title: 'Casbin RBAC Matrix',
          description: 'Fine-grained role-based authorization enforced across all actions under 1ms.',
          metricBadge: { label: 'Latency', value: '< 1ms In-Memory' },
        },
        {
          id: 'multi-tenant',
          tag: 'Multi-Tenant',
          title: 'Tenant Isolation',
          description: 'Strict logical database isolation between corporate tenants eliminating leaks.',
          metricBadge: { label: 'Isolation', value: '100% Tenant Scoped' },
        },
        {
          id: 'audit-trails',
          tag: 'Auditing',
          title: 'Triple-Layer Audit Trails',
          description: 'Complete audit logs covering data deltas, access attempts, and RBAC changes.',
          metricBadge: { label: 'Integrity', value: 'Cryptographic Logs' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Auth & Tokens',
          title: '2FA & Device Identity',
          description: 'Fortify logins with TOTP 2FA, remote session control, and HMAC device pairing.',
          metricBadge: { label: 'Security', value: 'Zero Account Takeover' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'APIs',
          title: 'REST API & Webhooks',
          description: 'OpenAPI 3.0 endpoints and bi-directional Webhooks with full trace debugging.',
          metricBadge: { label: 'Standard', value: 'OpenAPI 3.0' },
        },
        {
          id: 'deployment-modes',
          tag: 'Deployment',
          title: 'Hybrid Deployments',
          description: 'Flexible deployment across Cloud, On-Premises, or Hybrid with Desktop & Mobile apps.',
          metricBadge: { label: 'Modes', value: 'Docker / On-Prem / Hybrid' },
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
              ? ['Bảo mật cấp doanh nghiệp.', 'Hạ tầng mở rộng linh hoạt.']
              : ['Enterprise-grade security.', 'Scalable infrastructure.']
          }
          subtitle={
            isVi
              ? 'Phân quyền Casbin RBAC, kiến trúc đa tổ chức Multi-tenant an toàn và nhật ký kiểm toán bất biến.'
              : 'Casbin RBAC access governance, zero-leak multi-tenant partitioning, and immutable audit trails.'
          }
          tags={
            isVi
              ? [
                  'Phân quyền Casbin RBAC',
                  'Đa tổ chức Multi-Tenant',
                  'Nhật ký Audit 3 lớp',
                  'Xác thực 2FA / HMAC',
                  'REST API & Webhooks',
                ]
              : [
                  'Casbin RBAC Matrix',
                  'Multi-Tenant Isolation',
                  'Triple-Layer Audit',
                  '2FA & HMAC Identity',
                  'REST API & Webhooks',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Nền tảng bảo mật & Hạ tầng công nghệ' : 'Enterprise Security & Technical Foundation'}
          subtitle={
            isVi
              ? 'Xây dựng theo tiêu chuẩn an ninh nghiêm ngặt, bảo vệ dữ liệu và triển khai linh hoạt.'
              : 'Engineered according to rigorous security standards with versatile cloud and on-prem deployments.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Bảo mật & Nền tảng' : 'Security & Platform'} />

        <Footer />
      </main>
    </>
  );
}
