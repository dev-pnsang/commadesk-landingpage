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
          description: 'Chuẩn hóa quy trình tiếp nhận, đăng ký số hiệu tự động theo quy tắc cơ quan, quản lý số chừa/số huỷ, trích yếu, gắn nhãn bảo mật và phân loại lĩnh vực hành chính.',
          metricBadge: { label: 'Tốc độ số hóa', value: '100% không dùng giấy' },
        },
        {
          id: 'approvals-flow',
          tag: 'Trình ký số',
          title: 'Quy trình ký duyệt điện tử & Dấu niêm phong số',
          description: 'Thiết lập luồng trình ký linh hoạt theo ma trận quyền hạn, hỗ trợ ủy quyền ký khi vắng mặt, xác thực chữ ký băm bất biến và đối soát vết sửa đổi chống giả mạo.',
          metricBadge: { label: 'Thời gian trình duyệt', value: 'Giảm 75% chu kỳ' },
        },
        {
          id: 'inventory-sku',
          tag: 'Kho & SKU',
          title: 'Kho đa vị trí, Danh mục SKU & Phiếu duyệt nhập/xuất',
          description: 'Theo dõi biến động tồn kho đa điểm: phiếu nhập, xuất, điều chuyển kho nội bộ có quy trình ký duyệt, đăng ký văn phòng phẩm và cảnh báo tồn kho an toàn tối thiểu.',
          metricBadge: { label: 'Chính xác tồn kho', value: '99.9% đối soát' },
        },
        {
          id: 'device-assets',
          tag: 'Quản lý tài sản',
          title: 'Tài sản máy móc theo Serial, Asset Tag & Khấu hao',
          description: 'Quản lý toàn bộ vòng đời tài sản công nghệ: cấp phát máy móc thiết bị có biên bản bàn giao, theo dõi bảo hành bảo dưỡng, tính khấu hao và tự động thu hồi khi thôi việc.',
          metricBadge: { label: 'Theo dõi tài sản', value: 'Định danh Serial 100%' },
        },
        {
          id: 'fleet-logistics',
          tag: 'Vận tải & Logistics',
          title: 'Quản lý đội xe GPS, Điều phối Dispatch & POD',
          description: 'Giám sát hành trình xe GPS theo thời gian thực, điều phối đơn vận chuyển trên bản đồ số, tối ưu lộ trình (Routing engines), bằng chứng giao nhận POD và sổ cái vận tải Fleet Ledger.',
          metricBadge: { label: 'Chi phí vận hành', value: 'Tiết kiệm 20% chi phí' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Kiểm soát truy cập',
          title: 'Phân quyền hồ sơ văn bản theo Casbin RBAC',
          description: 'Bảo mật tuyệt đối văn bản mật, tài liệu nội bộ và hồ sơ tài sản bằng chính sách truy cập phân cấp: chỉ nhân sự có thẩm quyền trong tổ chức mới được mở tệp đính kèm.',
          metricBadge: { label: 'Tiêu chuẩn bảo mật', value: 'ISO 27001' },
        },
      ]
    : [
        {
          id: 'doc-registry',
          tag: 'Digital Registry',
          title: 'Inbound & Outbound Registries (Decree 150/370)',
          description: 'Standardize administrative dispatching with automated reference number allocation, reserved number management, confidentiality tags, and Decree 150/370 administrative categories.',
          metricBadge: { label: 'Paperless Speed', value: '100% Digital Flow' },
        },
        {
          id: 'approvals-flow',
          tag: 'Digital Signing',
          title: 'Multi-Tier Digital Signing & Cryptographic Seals',
          description: 'Configure flexible approval workflows according to delegation matrices, cryptographic timestamped seals, and immutable revision trails that prevent unauthorized alterations.',
          metricBadge: { label: 'Cycle Reduction', value: '75% Faster Routing' },
        },
        {
          id: 'inventory-sku',
          tag: 'Multi-Warehouse',
          title: 'Multi-Location Warehouses & Approved SKU Vouchers',
          description: 'Real-time multi-branch stock tracking: inbound, outbound, and internal transfer vouchers with multi-stage sign-offs, stationery requests, and minimum stock threshold alerts.',
          metricBadge: { label: 'Inventory Auditing', value: '99.9% Variance Match' },
        },
        {
          id: 'device-assets',
          tag: 'Fixed Assets',
          title: 'Serial Asset Lifecycle, Allocation & Depreciation',
          description: 'Govern enterprise IT hardware and machinery by serial numbers/asset tags, warranty schedules, depreciation curves, and automated asset recovery upon employee exit.',
          metricBadge: { label: 'Asset Custody', value: '100% Serialized' },
        },
        {
          id: 'fleet-logistics',
          tag: 'Fleet & Logistics',
          title: 'Fleet Logistics, Realtime GPS Dispatch & POD',
          description: 'Track fleet vehicles via real-time GPS coordinates, dispatch orders on interactive maps, optimize routes, capture digital Proof of Delivery (POD), and maintain the Fleet Ledger.',
          metricBadge: { label: 'Fleet Optimization', value: '20% Fuel Savings' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Access Control',
          title: 'Casbin RBAC Security for Confidential Records',
          description: 'Safeguard classified legal documents, financial vouchers, and enterprise assets with strict Casbin policies ensuring only authorized roles view sensitive attachments.',
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
