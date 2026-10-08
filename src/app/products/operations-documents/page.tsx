'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveDigitalSignature } from '@/components/showcase/InteractiveDigitalSignature';

export default function OperationsDocumentsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveDigitalSignature isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'doc-registry',
          tag: 'Văn thư & Pháp lý',
          title: 'Sổ văn bản đến & văn bản đi (Nghị định 150/370)',
          description: 'Chuẩn hóa quy trình tiếp nhận, đăng ký số hiệu tự động và phân loại lĩnh vực theo quy định.',
          metricBadge: { label: 'Tốc độ số hóa', value: '100% không dùng giấy' },
        },
        {
          id: 'approvals-flow',
          tag: 'Trình ký số',
          title: 'Quy trình ký duyệt điện tử & Dấu niêm phong số',
          description: 'Thiết lập luồng trình ký linh hoạt, chữ ký số băm bất biến và đối soát vết sửa đổi minh bạch.',
          metricBadge: { label: 'Thời gian trình duyệt', value: 'Giảm 75% chu kỳ' },
        },
        {
          id: 'reserved-numbers',
          tag: 'Đánh số tự động',
          title: 'Quản lý Số chừa, Số hủy & Đánh số tự động',
          description: 'Hệ thống tự động cấp số văn bản liên tục, quản lý số chừa và số hủy tránh trùng lặp.',
          metricBadge: { label: 'Độ chính xác', value: '100% không trùng số' },
        },
        {
          id: 'policy-docs',
          tag: 'Quy chế nội bộ',
          title: 'Kho Quy chế, Chính sách & Hướng dẫn nội bộ',
          description: 'Lưu trữ tài liệu quy chế công ty, phân loại theo phòng ban và theo dõi lịch sử cập nhật.',
          metricBadge: { label: 'Truy cập nội bộ', value: 'Tức thời' },
        },
        {
          id: 'doc-search',
          tag: 'Tra cứu thông minh',
          title: 'Tra cứu trích yếu & Tìm kiếm văn bản tức thì',
          description: 'Tìm kiếm nhanh theo số hiệu, trích yếu, ngày phát hành, cơ quan ban hành hoặc từ khóa tệp.',
          metricBadge: { label: 'Thời gian tìm kiếm', value: '< 1 giây' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Kiểm soát truy cập',
          title: 'Phân quyền hồ sơ văn bản theo Casbin RBAC',
          description: 'Bảo mật văn bản mật và hồ sơ pháp lý, chỉ nhân sự có thẩm quyền mới được xem tệp đính kèm.',
          metricBadge: { label: 'Tiêu chuẩn bảo mật', value: 'ISO 27001' },
        },
      ]
    : [
        {
          id: 'doc-registry',
          tag: 'Digital Registry',
          title: 'Inbound & Outbound Registries (Decree 150/370)',
          description: 'Standardize dispatch books with automated numbering and statutory administrative classifications.',
          metricBadge: { label: 'Paperless Speed', value: '100% Digital Flow' },
        },
        {
          id: 'approvals-flow',
          tag: 'Digital Signing',
          title: 'Multi-Tier Digital Signing & Cryptographic Seals',
          description: 'Flexible digital signing workflows with cryptographic seals and tamper-proof revision audits.',
          metricBadge: { label: 'Cycle Reduction', value: '75% Faster Routing' },
        },
        {
          id: 'reserved-numbers',
          tag: 'Numbering Rules',
          title: 'Reserved & Void Number Governance',
          description: 'Automated continuous numbering engines preventing duplicate or skipped dispatch numbers.',
          metricBadge: { label: 'Numbering Accuracy', value: 'Zero Collisions' },
        },
        {
          id: 'policy-docs',
          tag: 'Internal Policies',
          title: 'Company Policy Repository & Circulars',
          description: 'Centralized policy repository with department tags, role views, and version history.',
          metricBadge: { label: 'Access Speed', value: 'Instant Access' },
        },
        {
          id: 'doc-search',
          tag: 'Smart Search',
          title: 'Instant Document & Abstract Full-Text Search',
          description: 'Rapid search by dispatch ID, abstract summary, issuance date, or full attachment text.',
          metricBadge: { label: 'Search Latency', value: '< 1 Second' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Access Control',
          title: 'Casbin RBAC Security for Confidential Records',
          description: 'Strict Casbin access policies ensuring only authorized personnel view sensitive files.',
          metricBadge: { label: 'Security Standard', value: 'ISO 27001' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Vận hành & Văn bản' : 'Operations & Registry Module'}
          title={
            isVi
              ? ['Văn bản chuẩn mực.', 'Kho vận & Tài sản chính xác.']
              : ['Standardized registry.', 'Flawless inventory & fleet operations.']
          }
          subtitle={
            isVi
              ? 'CommaDesk Operations & Registry hợp nhất sổ văn bản đến/đi theo chuẩn hành chính, quy trình ký duyệt số, kho đa vị trí SKU, cấp phát tài sản Serial và điều phối logistics đội xe GPS vào một quy trình vận hành đồng bộ.'
              : 'CommaDesk Operations & Registry unifies statutory document dispatch books, digital approvals, multi-location SKU inventory, serialized fixed assets, and GPS fleet logistics into a single governance engine.'
          }
          tags={
            isVi
              ? [
                  'Sổ văn bản NĐ 150/370',
                  'Ký số & Dấu mộc điện tử',
                  'Kho SKU đa vị trí',
                  'Tài sản mã định danh Serial',
                  'Logistics đội xe GPS',
                  'Biên bản giao nhận POD',
                ]
              : [
                  'Decree 150/370 Registry',
                  'Digital Signing & Seals',
                  'Multi-Warehouse SKU',
                  'Serial Asset Tags',
                  'Fleet Logistics GPS',
                  'Proof of Delivery POD',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Hệ thống vận hành văn thư, kho bãi & đội xe' : 'Enterprise Governance, Inventory & Fleet Suite'}
          subtitle={
            isVi
              ? 'Xóa bỏ quy trình giấy tờ thủ công, kiểm soát minh bạch từng công văn pháp lý, từng linh kiện vật tư và từng chuyến xe vận chuyển.'
              : 'Eliminate manual paper trails, gain full transparency over legal dispatches, warehouse inventory balances, and commercial fleet movements.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Vận hành & Văn bản' : 'Operations & Registry'} />

        <Footer />
      </main>
    </>
  );
}
