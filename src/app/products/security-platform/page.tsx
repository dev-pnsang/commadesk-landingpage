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
          title: 'Ma trận phân quyền Casbin RBAC chặt chẽ',
          description: 'Hỗ trợ kiểm soát truy cập dựa trên vai trò (RBAC) kết hợp phạm vi đa tổ chức (domain-scoped). Phân tách quyền hạn rành mạch tới từng API và nút bấm.',
          metricBadge: { label: 'Độ trễ kiểm tra quyền', value: '< 1ms trong bộ nhớ' },
        },
        {
          id: 'multi-tenant',
          tag: 'Kiến trúc',
          title: 'Kiến trúc đa tổ chức Multi-Tenant an toàn',
          description: 'Phân vùng và cô lập dữ liệu hoàn toàn giữa các doanh nghiệp/chi nhánh, loại bỏ triệt để rủi ro rò rỉ dữ liệu chéo giữa các bên.',
          metricBadge: { label: 'Cô lập dữ liệu', value: '100% Tenant Isolation' },
        },
        {
          id: 'audit-trails',
          tag: 'Kiểm toán',
          title: 'Nhật ký Audit 3 lớp chống gian lận',
          description: 'Ghi lại mọi thay đổi dữ liệu (Data Delta), lịch sử truy cập HTTP và nhật ký thay đổi phân quyền RBAC có chữ ký băm bất biến.',
          metricBadge: { label: 'Tính toàn vẹn', value: 'Bất biến (Immutable)' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Xác thực',
          title: 'Xác thực hai lớp (2FA/TOTP) & Quản lý phiên',
          description: 'Bảo vệ tài khoản đăng nhập với mã OTP chuẩn TOTP (Google Authenticator), thu hồi phiên đăng nhập từ xa và tự động chặn brute-force.',
          metricBadge: { label: 'Mức độ bảo vệ', value: 'Zero Account Takeover' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Kết nối',
          title: 'REST API & Webhooks cấp doanh nghiệp',
          description: 'Cung cấp bộ API chuẩn OpenAPI/Swagger và Webhooks gửi sự kiện tức thì khi có biến động nhân sự, dự án, chấm công hoặc văn bản.',
          metricBadge: { label: 'Tiêu chuẩn API', value: 'OpenAPI 3.0 Ready' },
        },
        {
          id: 'deployment-modes',
          tag: 'Triển khai',
          title: 'Triển khai linh hoạt: On-Premises & Private Cloud',
          description: 'Hỗ trợ cài đặt trực tiếp trên hạ tầng máy chủ nội bộ On-Premises của doanh nghiệp, máy chủ đám mây riêng biệt hoặc Cloud SaaS.',
          metricBadge: { label: 'Mô hình triển khai', value: 'On-Prem / Private Cloud' },
        },
      ]
    : [
        {
          id: 'casbin-rbac',
          tag: 'Access Control',
          title: 'Casbin RBAC Multi-Tenant Matrix',
          description: 'High-performance role-based authorization with domain tenant scoping, ensuring fine-grained enforcement across all UI actions and API endpoints.',
          metricBadge: { label: 'Enforcer Latency', value: '< 1ms In-Memory' },
        },
        {
          id: 'multi-tenant',
          tag: 'Architecture',
          title: 'Zero-Leak Multi-Tenant Architecture',
          description: 'Strict logical database isolation between corporate tenants, preventing cross-organization data contamination with automated tenant routing.',
          metricBadge: { label: 'Data Isolation', value: '100% Tenant Scoped' },
        },
        {
          id: 'audit-trails',
          tag: 'Compliance',
          title: 'Triple-Layer Tamper-Proof Audit Trails',
          description: 'Comprehensive audit capture covering HTTP access, record-level data delta revisions, and security privilege grants with cryptographic hashing.',
          metricBadge: { label: 'Audit Integrity', value: 'Cryptographic Logs' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Identity',
          title: 'Mandatory 2FA / TOTP & Session Revocation',
          description: 'Fortify logins with standard RFC 6238 TOTP authenticator apps, instant remote session termination, and intelligent rate limiting.',
          metricBadge: { label: 'Credential Security', value: 'Zero Account Takeover' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Integration',
          title: 'Enterprise REST API & Realtime Webhooks',
          description: 'Well-documented OpenAPI endpoints and configurable webhook triggers to stream HR events, task updates, and document dispatches to your data warehouse.',
          metricBadge: { label: 'API Standard', value: 'OpenAPI 3.0 / JSON' },
        },
        {
          id: 'deployment-modes',
          tag: 'Deployment',
          title: 'Flexible Deployment: On-Prem & Private Cloud',
          description: 'Deploy within your own Kubernetes cluster, isolated VPC on AWS/GCP, or run air-gapped on-premises behind your enterprise firewall.',
          metricBadge: { label: 'Deployment Options', value: 'On-Prem / Cloud / Hybrid' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto space-y-12 sm:space-y-24 md:space-y-32 relative px-2.5 sm:px-6 lg:px-8 pb-16">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Bảo mật & Nền tảng' : 'Security & Platform Module'}
          title={
            isVi
              ? ['Bảo mật cấp doanh nghiệp.', 'Nền tảng kiểm soát phân quyền Casbin RBAC vững chắc.']
              : ['Enterprise-Grade Security.', 'Fortified with Casbin RBAC & Multi-Tenancy.']
          }
          subtitle={
            isVi
              ? 'Commadesk Security Platform bảo vệ dữ liệu tối cao cho doanh nghiệp với ma trận phân quyền Casbin RBAC, kiến trúc đa tổ chức Multi-tenant độc lập, xác thực 2FA và nhật ký kiểm toán không thể giả mạo.'
              : 'Commadesk Security Platform safeguards enterprise assets with high-speed Casbin RBAC policies, strict multi-tenant database partitioning, and tamper-proof audit trails.'
          }
          tags={[
            'Casbin RBAC Matrix',
            'Multi-Tenant Partitioning',
            'Tamper-Proof Audit Trails',
            'TOTP 2FA Authentication',
            'Enterprise REST API',
            'On-Premises & Private Cloud',
          ]}
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'An toàn & Tuân thủ' : 'Security & Compliance'}
          title={isVi ? 'Nền tảng kỹ thuật sẵn sàng cho các tập đoàn lớn' : 'Engineered for High-Stakes Enterprise Workloads'}
          subtitle={
            isVi
              ? 'Đảm bảo tuân thủ các quy định bảo mật dữ liệu khắt khe nhất, bảo vệ quyền riêng tư và trao quyền kiểm soát tuyệt đối cho đội ngũ quản trị hệ thống.'
              : 'Built from the ground up for strict data governance, regulatory compliance, and total sovereignty over your corporate intelligence.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Bảo mật & Nền tảng' : 'Security & Platform'} />

        <Footer />
      </main>
    </>
  );
}
