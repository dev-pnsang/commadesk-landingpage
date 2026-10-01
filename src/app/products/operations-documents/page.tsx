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
          tag: 'Văn thư số',
          title: 'Sổ văn bản đến & văn bản đi',
          description: 'Chuẩn hóa quy trình tiếp nhận, đăng ký số hiệu tự động, trích yếu, gắn nhãn bảo mật và gửi văn bản tới đúng phòng ban chức năng.',
          metricBadge: { label: 'Tốc độ số hóa', value: '100% không dùng giấy' },
        },
        {
          id: 'approvals-flow',
          tag: 'Trình ký',
          title: 'Quy trình ký duyệt điện tử đa cấp',
          description: 'Thiết lập luồng trình ký linh hoạt theo ma trận quyền hạn, hỗ trợ ủy quyền ký khi vắng mặt và kiểm tra nhật ký ký duyệt chống giả mạo.',
          metricBadge: { label: 'Thời gian trình duyệt', value: 'Giảm 75% chu kỳ' },
        },
        {
          id: 'inventory-sku',
          tag: 'Kho & SKU',
          title: 'Quản lý kho vật tư & Danh mục SKU',
          description: 'Theo dõi biến động tồn kho theo thời gian thực: phiếu nhập, xuất, điều chuyển kho nội bộ và cảnh báo khi tồn kho chạm ngưỡng tối thiểu.',
          metricBadge: { label: 'Chính xác tồn kho', value: '99.9% đối soát' },
        },
        {
          id: 'device-assets',
          tag: 'Tài sản',
          title: 'Tài sản máy móc theo Serial & Khấu hao',
          description: 'Quản lý vòng đời tài sản công nghệ: cấp phát cho nhân viên, theo dõi lịch bảo dưỡng, mã bảo hành và tự động thu hồi khi thôi việc.',
          metricBadge: { label: 'Theo dõi tài sản', value: 'Định danh Serial 100%' },
        },
        {
          id: 'fleet-logistics',
          tag: 'Đội xe GPS',
          title: 'Quản lý đội xe & Nhật ký hành trình',
          description: 'Theo dõi định vị GPS phương tiện vận tải, định mức tiêu hao nhiên liệu, hạn đăng kiểm và tối ưu hóa tuyến đường giao vận.',
          metricBadge: { label: 'Chi phí vận hành', value: 'Tiết kiệm 20% chi phí' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Bảo mật',
          title: 'Phân quyền xem văn bản theo Casbin RBAC',
          description: 'Bảo mật tuyệt đối văn bản mật, văn bản nội bộ bằng chính sách truy cập phân cấp: chỉ nhân sự có thẩm quyền mới được mở tệp đính kèm.',
          metricBadge: { label: 'Tiêu chuẩn bảo mật', value: 'ISO 27001' },
        },
      ]
    : [
        {
          id: 'doc-registry',
          tag: 'Digital Registry',
          title: 'Official Inbound & Outbound Registries',
          description: 'Standardize incoming/outgoing administrative dispatching with automated reference numbers, confidentiality tags, and audit archives.',
          metricBadge: { label: 'Paperless Speed', value: '100% Digital Flow' },
        },
        {
          id: 'approvals-flow',
          tag: 'Dispatching',
          title: 'Multi-Tier Digital Signing & Routing',
          description: 'Configure flexible review chains according to governance matrices, delegation of authority, and timestamped signature trails.',
          metricBadge: { label: 'Cycle Reduction', value: '75% Faster Routing' },
        },
        {
          id: 'inventory-sku',
          tag: 'Warehouses',
          title: 'Warehouse Locations & Realtime SKU Balances',
          description: 'Track material inbound, outbound, and internal transfer vouchers with automated notifications when items reach reorder levels.',
          metricBadge: { label: 'Inventory Auditing', value: '99.9% Variance Match' },
        },
        {
          id: 'device-assets',
          tag: 'Fixed Assets',
          title: 'Serial Asset Lifecycle & Allocation',
          description: 'Govern IT hardware allocation by serial numbers, warranty status, maintenance schedules, and automated handback upon offboarding.',
          metricBadge: { label: 'Asset Custody', value: '100% Serialized' },
        },
        {
          id: 'fleet-logistics',
          tag: 'Logistics',
          title: 'Fleet Management & GPS Route Logs',
          description: 'Monitor enterprise vehicle fleets in real time: mileage odometer logs, fuel efficiency analytics, and inspection alerts.',
          metricBadge: { label: 'Fleet Optimization', value: '20% Fuel Savings' },
        },
        {
          id: 'casbin-registry-rbac',
          tag: 'Compliance',
          title: 'Casbin Confidentiality & Access Policies',
          description: 'Enforce strict confidentiality levels on legal contracts and board resolutions so sensitive attachments never leak outside permitted roles.',
          metricBadge: { label: 'Security Grade', value: 'ISO 27001 Strict' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto space-y-12 sm:space-y-24 md:space-y-32 relative px-2.5 sm:px-6 lg:px-8 pb-16">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Vận hành & Văn bản' : 'Operations & Documents Module'}
          title={
            isVi
              ? ['Số hóa văn bản hành chính.', 'Quản trị kho tài sản và đội xe chuẩn mực.']
              : ['Digital Document Registry.', 'Precision Warehousing & Fleet Operations.']
          }
          subtitle={
            isVi
              ? 'Commadesk kết nối sổ văn bản đến/đi số hóa, phê duyệt trình ký điện tử, kiểm kê vật tư kho SKU và định vị đội xe GPS vào một quy trình vận hành khép kín, minh bạch và tuân thủ cao.'
              : 'Commadesk combines official inbound/outbound document registries, approval workflows, warehouse SKU inventory, and GPS fleet tracking into a tamper-proof operational platform.'
          }
          tags={[
            'Official Document Registry',
            'Multi-Tier Approvals',
            'Warehouse SKU Inventory',
            'Serial Fixed Assets',
            'Fleet GPS Logistics',
            'Casbin Access Control',
          ]}
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Năng lực vận hành' : 'Operations Suite'}
          title={isVi ? 'Giải pháp quản trị hành chính & tài sản toàn diện' : 'Complete Enterprise Administrative Engine'}
          subtitle={
            isVi
              ? 'Loại bỏ tình trạng thất lạc giấy tờ công văn, thất thoát tài sản thiết bị và mất kiểm soát chi phí vận hành kho bãi.'
              : 'Prevent lost official dispatches, eliminate asset leakage, and bring full financial accountability to warehouse inventory.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Vận hành & Văn bản' : 'Operations & Documents'} />

        <Footer />
      </main>
    </>
  );
}
