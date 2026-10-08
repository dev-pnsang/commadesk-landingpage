'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';
import { InteractiveFleetLogistics } from '@/components/showcase/InteractiveFleetLogistics';

export default function FleetLogisticsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveFleetLogistics isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'fleet-tracking',
          tag: 'Định vị Live',
          title: 'Giám sát Đội xe & Bản đồ GPS thời gian thực',
          description: 'Theo dõi hành trình, tốc độ, trạng thái và định vị xe theo thời gian thực trên bản đồ GIS.',
          metricBadge: { label: 'Độ chính xác GPS', value: 'Thời gian thực' },
        },
        {
          id: 'sku-inventory',
          tag: 'Kho & Vật tư',
          title: 'Quản lý Kho SKU & Cảnh báo tồn tối thiểu',
          description: 'Theo dõi tồn kho SKU, quản lý thiết bị máy móc và tự động cảnh báo khi sắp hết hàng.',
          metricBadge: { label: 'Kiểm soát tồn', value: '100% tự động' },
        },
        {
          id: 'voucher-flow',
          tag: 'Quy trình kho',
          title: 'Phiếu Nhập, Xuất & Chuyển kho đa cấp',
          description: 'Chuẩn hóa quy trình tạo và phê duyệt phiếu xuất nhập kho, cân bằng số dư tức thì.',
          metricBadge: { label: 'Tốc độ luân chuyển', value: 'Nhanh hơn 2x' },
        },
        {
          id: 'driver-dispatch',
          tag: 'Điều phối',
          title: 'Phân công Tài xế & Quản lý Đơn hàng',
          description: 'Giao việc cho tài xế, quản lý địa điểm giao nhận và kiểm soát tiến độ từng đơn giao hàng.',
          metricBadge: { label: 'Tỷ lệ đúng hạn', value: '98.5%' },
        },
        {
          id: 'fleet-ledger',
          tag: 'Tài chính kho vận',
          title: 'Sổ cái Vận tải & Đối soát chi phí',
          description: 'Tự động tính cước theo vùng zones, kiểm soát chi phí nhiên liệu và đối soát minh bạch.',
          metricBadge: { label: 'Tiết kiệm chi phí', value: '-22% chi phí xe' },
        },
        {
          id: 'asset-custody',
          tag: 'Tài sản',
          title: 'Cấp phát Tài sản Serial & Máy móc',
          description: 'Theo dõi lịch sử bàn giao thiết bị, bảo hành máy móc và kiểm kê tài sản định kỳ.',
          metricBadge: { label: 'Chống thất thoát', value: '0 sai sót' },
        },
      ]
    : [
        {
          id: 'fleet-tracking',
          tag: 'Live Tracking',
          title: 'Real-Time Fleet GPS & Route Monitoring',
          description: 'Live vehicle tracking, speed monitoring, and interactive route breadcrumbs on GIS map.',
          metricBadge: { label: 'GPS Precision', value: 'Realtime' },
        },
        {
          id: 'sku-inventory',
          tag: 'SKU Inventory',
          title: 'Multi-Location SKU Stock & Min-Level Alerts',
          description: 'Real-time stock balance tracking with automated replenishment alerts before depletion.',
          metricBadge: { label: 'Stock Accuracy', value: '100% Automated' },
        },
        {
          id: 'voucher-flow',
          tag: 'Warehouse Flow',
          title: 'Inbound, Outbound & Transfer Vouchers',
          description: 'Standardized warehouse vouchers with multi-tier digital sign-off and instant reconciliation.',
          metricBadge: { label: 'Turnover Speed', value: '2x Faster' },
        },
        {
          id: 'driver-dispatch',
          tag: 'Dispatching',
          title: 'Driver Assignments & Order Tracking',
          description: 'Automated job dispatches to drivers with live delivery status and destination routing.',
          metricBadge: { label: 'On-Time Rate', value: '98.5%' },
        },
        {
          id: 'fleet-ledger',
          tag: 'Logistics Finance',
          title: 'Fleet Ledger & Zone Rate Calculator',
          description: 'Automated fuel expense tracking, zone-based rate matrices, and cost reconciliation.',
          metricBadge: { label: 'Cost Reduction', value: '-22% Fuel Cost' },
        },
        {
          id: 'asset-custody',
          tag: 'Asset Custody',
          title: 'Serial Asset Tracking & Equipment Custody',
          description: 'Lifecycle tracking for IT hardware and machinery from assignment to maintenance.',
          metricBadge: { label: 'Loss Prevention', value: 'Zero Losses' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Vận tải & Kho bãi' : 'Fleet & Logistics Module'}
          title={
            isVi
              ? ['Quản lý kho SKU.', 'Điều phối đội xe thông minh.']
              : ['Optimized inventory.', 'Intelligent fleet routing.']
          }
          subtitle={
            isVi
              ? 'Hợp nhất quản lý kho vật tư SKU, điều phối phương tiện GPS và kiểm soát chi phí vận tải trên một nền tảng duy nhất.'
              : 'Unify multi-warehouse SKU inventory, live GPS vehicle tracking, and transport cost ledgers into one powerful platform.'
          }
          visualPreview={visualPreview}
          tags={
            isVi
              ? ['Đội xe GPS Live', 'Kho SKU & Vật tư', 'Phiếu Xuất/Nhập', 'Sổ cái Vận tải', 'Tài xế & Đơn hàng']
              : ['Live Fleet GPS', 'SKU Inventory', 'Stock Vouchers', 'Fleet Ledger', 'Driver Dispatch']
          }
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Năng lực cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Tối Ưu Vận Hành Kho Vận & Đội Xe' : 'Streamlined Logistics Operations'}
          subtitle={
            isVi
              ? 'Kiểm soát từ lượng hàng tồn kho đến từng chuyến xe lăn bánh ngoài thực địa.'
              : 'Complete control from warehouse balances to live vehicles on the road.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Phân hệ Vận tải & Kho bãi' : 'Fleet & Logistics'} />
        <Footer />
      </main>
    </>
  );
}
