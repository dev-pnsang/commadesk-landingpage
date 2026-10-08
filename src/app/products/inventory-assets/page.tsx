'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';
import { InteractiveInventoryAssets } from '@/components/showcase/InteractiveInventoryAssets';

export default function InventoryAssetsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveInventoryAssets isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'multi-warehouse-balances',
          tag: 'Cân bằng kho',
          title: 'Quản lý Kho Đa Địa Điểm & Số Dư Realtime',
          description: 'Theo dõi vị trí lưu kho, đối soát số dư tức thì, luân chuyển hàng hóa giữa các kho chi nhánh trên một màn hình duy nhất.',
          metricBadge: { label: 'Độ chính xác tồn', value: '100% tức thì' },
        },
        {
          id: 'voucher-approvals',
          tag: 'Quy trình kho',
          title: 'Phiếu Nhập, Xuất & Chuyển Kho Đa Cấp',
          description: 'Tự động hóa luồng duyệt phiếu: từ thủ kho đề xuất, quản lý ký duyệt đến kế toán kiểm toán và tự động cập nhật số dư.',
          metricBadge: { label: 'Tốc độ duyệt', value: 'Nhanh hơn 3x' },
        },
        {
          id: 'serial-assets',
          tag: 'Tài sản cố định',
          title: 'Quản Lý Tài Sản Serial & Mã Vạch QR',
          description: 'Theo dõi chi tiết từng máy tính, thiết bị máy móc theo số Serial duy nhất, lịch sử bàn giao cho nhân sự và khấu hao.',
          metricBadge: { label: 'Chống thất thoát', value: 'Tuyệt đối 0 rủi ro' },
        },
        {
          id: 'stationery-catalog',
          tag: 'Mua sắm & VPP',
          title: 'Đăng Ký & Quyết Toán Văn Phòng Phẩm (VPP)',
          description: 'Danh mục định mức VPP tiêu chuẩn, nhân viên gửi yêu cầu trực tuyến và bảng tổng hợp quyết toán chi phí hàng tháng.',
          metricBadge: { label: 'Tiết kiệm chi phí', value: '-18% hao phí' },
        },
        {
          id: 'machinery-maintenance',
          tag: 'Bảo trì máy móc',
          title: 'Quản Lý Máy In, Mực In & Thiết Bị Văn Phòng',
          description: 'Lịch sử thay mực in, nhật ký bảo trì thiết bị, tự động cảnh báo lịch kiểm định định kỳ cho máy móc văn phòng.',
          metricBadge: { label: 'Thời gian sẵn sàng', value: '99.8% Uptime' },
        },
        {
          id: 'min-stock-alerts',
          tag: 'Cảnh báo tồn',
          title: 'Cảnh Báo Tồn Tối Thiểu & Điểm Đặt Hàng Lại',
          description: 'Hệ thống tự động kích hoạt cảnh báo thông minh khi lượng tồn chạm ngưỡng an toàn, hỗ trợ dự báo nhu cầu bổ sung hàng.',
          metricBadge: { label: 'Cháy hàng (Out-of-Stock)', value: 'Giảm 95%' },
        },
      ]
    : [
        {
          id: 'multi-warehouse-balances',
          tag: 'Stock Balance',
          title: 'Multi-Depot Locations & Real-Time Stock Balances',
          description: 'Track multi-location warehouse inventories, reconcile item balances instantaneously, and manage branch transfers on one screen.',
          metricBadge: { label: 'Stock Accuracy', value: '100% Real-time' },
        },
        {
          id: 'voucher-approvals',
          tag: 'Voucher Routing',
          title: 'Inbound, Outbound & Transfer Stock Vouchers',
          description: 'Automated multi-level voucher pipeline: keeper initiation, manager sign-off, accountant verification, and instant ledger deduction.',
          metricBadge: { label: 'Cycle Speed', value: '3x Faster' },
        },
        {
          id: 'serial-assets',
          tag: 'Fixed Assets',
          title: 'Serial Numbered Assets & QR Asset Custody',
          description: 'Track individual workstations, machinery and laptops by unique serial IDs, custody handoff history, and depreciation lifecycles.',
          metricBadge: { label: 'Asset Loss Risk', value: 'Zero Slippage' },
        },
        {
          id: 'stationery-catalog',
          tag: 'Procurement',
          title: 'Employee Stationery Catalog & Settlement',
          description: 'Standardized stationery allowances, digital request submissions, and automated monthly department cost settlement panels.',
          metricBadge: { label: 'Spend Optimization', value: '-18% Waste' },
        },
        {
          id: 'machinery-maintenance',
          tag: 'Machinery SOP',
          title: 'Printer, Toner Cartridge & Device Maintenance Logs',
          description: 'Track consumables replacements, machine repairs, maintenance schedules, and device health status across all facilities.',
          metricBadge: { label: 'Equipment Availability', value: '99.8% Uptime' },
        },
        {
          id: 'min-stock-alerts',
          tag: 'Stock Alerts',
          title: 'Safety Stock Thresholds & Automated Reorder Alerts',
          description: 'Automated proactive notifications when critical items breach safety limits, preventing operational downtime and stock-outs.',
          metricBadge: { label: 'Stock-out Rate', value: '-95% Reduction' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Kho & Tài Sản' : 'Inventory & Assets Module'}
          title={
            isVi
              ? ['Kiểm soát tồn kho tuyệt đối.', 'Quản trị vòng đời tài sản.']
              : ['Total inventory control.', 'Complete asset governance.']
          }
          subtitle={
            isVi
              ? 'Hợp nhất quản lý kho SKU đa điểm, tự động hóa luồng duyệt phiếu xuất nhập kho, theo dõi tài sản cố định theo số serial và quyết toán văn phòng phẩm trên một nền tảng chuẩn mực Casbin RBAC.'
              : 'End-to-end multi-warehouse SKU tracking, automated voucher approvals, serial asset custody lifecycle, and department procurement under one Casbin RBAC platform.'
          }
          tags={
            isVi
              ? [
                  'Kho SKU đa điểm',
                  'Phiếu nhập xuất chuyển',
                  'Luồng duyệt 2 cấp',
                  'Tài sản Serial & QR',
                  'Đăng ký VPP',
                  'Cảnh báo tồn tối thiểu',
                ]
              : [
                  'Multi-Warehouse Balances',
                  'Stock Voucher Pipeline',
                  '2-Step Approval Routing',
                  'Serial & QR Asset Custody',
                  'Stationery Requests',
                  'Safety Stock Alerts',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Quản lý kho & tài sản chuẩn mực cấp doanh nghiệp' : 'Enterprise Inventory & Asset Lifecycle'}
          subtitle={
            isVi
              ? 'Loại bỏ sai lệch số liệu kiểm kê, tự động hóa luồng phê duyệt và kiểm soát chặt chẽ từng đồng chi phí vật tư.'
              : 'Eliminate inventory discrepancies, streamline voucher authorizations, and keep full custody over corporate assets.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Kho SKU & Tài sản Doanh nghiệp' : 'Inventory & Fixed Assets'} />

        <Footer />
      </main>
    </>
  );
}
