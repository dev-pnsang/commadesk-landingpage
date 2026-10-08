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
          description: 'Hỗ trợ kiểm soát truy cập dựa trên vai trò (RBAC) kết hợp phạm vi đa tổ chức (domain-scoped). Phân tách quyền hạn rành mạch tới từng API và nút bấm giao diện, thời gian thực thi dưới 1ms trong bộ nhớ.',
          metricBadge: { label: 'Độ trễ kiểm tra quyền', value: '< 1ms trong bộ nhớ' },
        },
        {
          id: 'multi-tenant',
          tag: 'Kiến trúc cô lập',
          title: 'Kiến trúc đa tổ chức Multi-Tenant an toàn tuyệt đối',
          description: 'Phân vùng và cô lập logic cơ sở dữ liệu hoàn toàn giữa các doanh nghiệp/chi nhánh khách thuê, loại bỏ triệt để rủi ro rò rỉ dữ liệu chéo giữa các tổ chức.',
          metricBadge: { label: 'Cô lập dữ liệu', value: '100% Tenant Isolation' },
        },
        {
          id: 'audit-trails',
          tag: 'Kiểm toán 3 tầng',
          title: 'Nhật ký Audit 3 lớp chống gian lận & OBB Backup',
          description: 'Ghi lại mọi thay đổi dữ liệu chi tiết (Data Delta), lịch sử truy cập HTTP và nhật ký thay đổi quyền RBAC có chữ ký băm bất biến; đi kèm công cụ sao lưu/khôi phục tổ chức (OBB).',
          metricBadge: { label: 'Tính toàn vẹn', value: 'Bất biến (Immutable)' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Định danh & Phiên',
          title: 'Xác thực 2FA/TOTP & Device Identity HMAC',
          description: 'Bảo vệ tài khoản đăng nhập với mã OTP chuẩn TOTP RFC 6238, thu hồi phiên làm việc tức thì và định danh thiết bị IoT/camera thông qua chữ ký số HMAC.',
          metricBadge: { label: 'Mức độ bảo vệ', value: 'Zero Account Takeover' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Kết nối mở rộng',
          title: 'REST API Swagger & Webhooks Trace Debug Pipeline',
          description: 'Cung cấp bộ API chuẩn OpenAPI 3.0 / Swagger và hệ thống Webhooks hai chiều (Inbound & Outbound) với công cụ kiểm thử cURL, giả lập payload và truy vết pipeline sự kiện.',
          metricBadge: { label: 'Tiêu chuẩn API', value: 'OpenAPI 3.0 Ready' },
        },
        {
          id: 'deployment-modes',
          tag: 'Hạ tầng & Đa nền tảng',
          title: 'Hybrid DB, Desktop Windows (.exe) & Mobile Flutter',
          description: 'Định tuyến dữ liệu hỗn hợp (MySQL 8.0, ClickHouse OLAP, Redis, MinIO S3), triển khai linh hoạt Docker/On-Premises, đi kèm ứng dụng Desktop Windows tự cập nhật và Mobile Flutter native.',
          metricBadge: { label: 'Mô hình triển khai', value: 'Docker / On-Prem / Hybrid' },
        },
      ]
    : [
        {
          id: 'casbin-rbac',
          tag: 'Access Control',
          title: 'Casbin RBAC Multi-Tenant Matrix (<1ms Latency)',
          description: 'High-performance role-based authorization with domain tenant scoping, ensuring fine-grained enforcement across all UI actions and REST endpoints under 1ms.',
          metricBadge: { label: 'Enforcer Latency', value: '< 1ms In-Memory' },
        },
        {
          id: 'multi-tenant',
          tag: 'Isolation Architecture',
          title: 'Zero-Leak Multi-Tenant Logical Partitioning',
          description: 'Strict logical database isolation between corporate tenants, preventing cross-organization data contamination with automated tenant routing engines.',
          metricBadge: { label: 'Data Isolation', value: '100% Tenant Scoped' },
        },
        {
          id: 'audit-trails',
          tag: 'Compliance Auditing',
          title: 'Triple-Layer Audit Trails & OBB Backup/Restore',
          description: 'Comprehensive audit capture covering HTTP access, record-level data delta revisions, and security privilege grants with cryptographic hashing and automated OBB tenant backups.',
          metricBadge: { label: 'Audit Integrity', value: 'Cryptographic Logs' },
        },
        {
          id: 'two-factor-auth',
          tag: 'Identity & Tokens',
          title: 'Mandatory 2FA / TOTP & HMAC Device Identity',
          description: 'Fortify logins with standard RFC 6238 TOTP authenticator apps, instant remote session termination, and cryptographic HMAC pairing for edge cameras and storage agents.',
          metricBadge: { label: 'Credential Security', value: 'Zero Account Takeover' },
        },
        {
          id: 'rest-api-webhooks',
          tag: 'Enterprise Connectivity',
          title: 'Enterprise REST API & Inbound/Outbound Webhooks',
          description: 'Well-documented OpenAPI 3.0 endpoints and bi-directional Webhooks with an interactive payload test harness, cURL simulator, and end-to-end event pipeline tracing.',
          metricBadge: { label: 'API Standard', value: 'OpenAPI 3.0 / JSON' },
        },
        {
          id: 'deployment-modes',
          tag: 'Infrastructure Parity',
          title: 'Hybrid DB, Desktop Windows (.exe) & Mobile Flutter',
          description: 'Hybrid database routing (MySQL 8.0, ClickHouse OLAP, Redis, MinIO S3), flexible 1-click Docker/On-Premises deployment, Windows Electron desktop client, and Flutter mobile shell.',
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
          tags={[
            'Casbin RBAC Matrix',
            'Zero-Leak Multi-Tenant',
            'Triple Audit Logs',
            'RFC 6238 2FA & HMAC',
            'Hybrid DB Routing',
            'Windows & Mobile Parity',
          ]}
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
