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
          description: 'Theo dõi hành trình, tốc độ, trạng thái tải trọng và định vị xe theo thời gian thực trên bản đồ GIS tương tác.',
          metricBadge: { label: 'Độ chính xác GPS', value: 'Thời gian thực' },
        },
        {
          id: 'driver-pwa',
          tag: 'Tài xế di động',
          title: 'Ứng Dụng Tài Xế Driver PWA & Nhận Lệnh Vận Chuyển',
          description: 'Giao diện PWA chuyên biệt cho tài xế nhận lệnh, xác nhận điểm giao nhận, chụp ảnh ký nhận POD và cập nhật lộ trình tức thì.',
          metricBadge: { label: 'Thiết bị hỗ trợ', value: 'Android & iOS PWA' },
        },
        {
          id: 'order-board',
          tag: 'Điều phối chuyến',
          title: 'Bảng Điều Hành Order Board & Tối Ưu Lộ Trình',
          description: 'Phân luồng xe thông minh, ghép đơn tối ưu hóa tuyến đường, hạn chế xe chạy rỗng và giảm thời gian chờ đợi tại điểm gom hàng.',
          metricBadge: { label: 'Tỷ lệ đúng hạn', value: '98.5% On-time' },
        },
        {
          id: 'fleet-ledger',
          tag: 'Sổ cái cước',
          title: 'Sổ Cái Vận Tải & Đối Soát Chi Phí Nhiên Liệu',
          description: 'Hạch toán chi phí xăng dầu, phí cầu đường bến bãi, công nợ nhà xe và đối soát minh bạch với khách hàng theo từng chuyến đi.',
          metricBadge: { label: 'Tiết kiệm chi phí', value: '-22% chi phí xe' },
        },
        {
          id: 'zones-rates',
          tag: 'Bảng cước',
          title: 'Cấu Hình Vùng Cước (Zones) & Bảng Giá Vận Chuyển',
          description: 'Thiết lập biểu phí linh hoạt theo bán kính, vùng địa lý, khối lượng và tải trọng xe, tự động tính cước chính xác khi tạo đơn.',
          metricBadge: { label: 'Tính cước tự động', value: '100% tức thì' },
        },
        {
          id: 'storefront-logistics',
          tag: 'Cổng trực tuyến',
          title: 'Cổng Khách Hàng Storefront & Tra Cứu Vận Đơn',
          description: 'Khách hàng có thể tự đặt chuyến, theo dõi trực tiếp vị trí xe chở hàng của mình trên bản đồ và nhận thông báo khi hàng đến nơi.',
          metricBadge: { label: 'Trải nghiệm khách hàng', value: 'Minh bạch 100%' },
        },
      ]
    : [
        {
          id: 'fleet-tracking',
          tag: 'Live GPS',
          title: 'Real-Time Fleet GPS & Telemetry Tracking',
          description: 'Live vehicle tracking, speed monitoring, fuel telemetry, and interactive route breadcrumbs on high-precision GIS maps.',
          metricBadge: { label: 'GPS Precision', value: 'Realtime' },
        },
        {
          id: 'driver-pwa',
          tag: 'Driver PWA',
          title: 'Driver Mobile PWA & Instant Digital Proof-of-Delivery',
          description: 'Specialized mobile PWA for drivers to accept dispatches, navigate drop-offs, capture signature PODs, and update delivery status.',
          metricBadge: { label: 'Mobile Parity', value: 'Android & iOS PWA' },
        },
        {
          id: 'order-board',
          tag: 'Dispatch Board',
          title: 'Interactive Order Board & Route Optimization',
          description: 'Intelligent multi-stop delivery dispatching, multi-vehicle routing, deadhead reduction, and automated transit schedules.',
          metricBadge: { label: 'On-time Rate', value: '98.5% On-time' },
        },
        {
          id: 'fleet-ledger',
          tag: 'Fleet Ledger',
          title: 'Fleet Ledger, Fuel Surcharges & Expense Auditing',
          description: 'Automated fuel cost logging, toll ticket settlements, driver trip stipends, and transparent client invoicing per transport leg.',
          metricBadge: { label: 'Cost Reduction', value: '-22% Fleet Spend' },
        },
        {
          id: 'zones-rates',
          tag: 'Zones & Rates',
          title: 'Geographic Zone Configurations & Dynamic Tariffs',
          description: 'Configure flexible distance-based, weight-tiered, and zone-based tariff matrices that automatically calculate shipping quotes.',
          metricBadge: { label: 'Automated Rates', value: 'Instant Quotation' },
        },
        {
          id: 'storefront-logistics',
          tag: 'Client Storefront',
          title: 'Logistics Customer Storefront & Live Consignment Tracking',
          description: 'Self-service shipping booking, real-time vehicle breadcrumb tracking, and automated milestone SMS/push notifications.',
          metricBadge: { label: 'Client Experience', value: '100% Transparency' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Vận Tải & Đội Xe' : 'Fleet & Logistics Module'}
          title={
            isVi
              ? ['Định vị thời gian thực.', 'Tối ưu hóa hành trình vận tải.']
              : ['Real-time telemetry.', 'Intelligent route dispatch.']
          }
          subtitle={
            isVi
              ? 'Nền tảng điều phối vận tải toàn diện: Giám sát GPS thời gian thực trên bản đồ GIS, ứng dụng tài xế Driver PWA, bảng cước động và sổ cái chi phí xe minh bạch.'
              : 'End-to-end transport operations: Real-time GPS GIS tracking, mobile Driver PWA dispatch, dynamic zone tariffs, and transparent freight expense accounting.'
          }
          tags={
            isVi
              ? [
                  'Giám sát GPS Live',
                  'Driver PWA nhận lệnh',
                  'Điều phối Order Board',
                  'Sổ cái cước vận tải',
                  'Bảng giá theo Zones',
                  'Cổng đặt xe Storefront',
                ]
              : [
                  'Real-Time GPS Tracking',
                  'Driver Mobile PWA',
                  'Order Board Dispatching',
                  'Freight Cost Ledger',
                  'Dynamic Tariff Zones',
                  'Logistics Storefront',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Vận hành đội xe & giao vận khép kín cấp doanh nghiệp' : 'Enterprise Closed-Loop Fleet & Transport Operations'}
          subtitle={
            isVi
              ? 'Kiểm soát từng ki-lô-mét lộ trình, tối ưu hóa cung đường và minh bạch hóa toàn bộ chi phí kho vận doanh nghiệp.'
              : 'Gain minute-by-minute visibility into routes, reduce transport empty miles, and streamline logistics accounting.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Vận Tải & Đội Xe Logistics' : 'Fleet & Logistics'} />

        <Footer />
      </main>
    </>
  );
}
