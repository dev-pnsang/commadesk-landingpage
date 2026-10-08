'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveVisionRadar } from '@/components/showcase/InteractiveVisionRadar';

export default function AiSmartCityPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveVisionRadar isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'face-recognition',
          tag: 'Nhận diện AI Sinh trắc',
          title: 'Nhận diện khuôn mặt thời gian thực (<200ms)',
          description: 'Nhận diện khuôn mặt dưới 200ms, chống giả mạo cho chấm công và đón tiếp VIP.',
          metricBadge: { label: 'Tốc độ đối khớp', value: '< 200ms' },
        },
        {
          id: 'anpr',
          tag: 'Bãi đỗ xe thông minh',
          title: 'Nhận diện biển số xe tự động (ANPR)',
          description: 'Tự động đọc biển số xe, điều khiển barrier ra vào tòa nhà và bãi đỗ xe thông minh.',
          metricBadge: { label: 'Độ chính xác biển số', value: '99.4%' },
        },
        {
          id: 'vms',
          tag: 'Hệ thống VMS Đa kênh',
          title: 'Hệ thống VMS Portal & Chuẩn nén H.265',
          description: 'Quản lý tập trung camera RTSP/ONVIF chuẩn H.265 với độ trễ thấp và tua lại sự kiện.',
          metricBadge: { label: 'Chuẩn kết nối', value: 'RTSP / ONVIF' },
        },
        {
          id: 'heatmap',
          tag: 'Phân tích không gian',
          title: 'Bản đồ nhiệt 2D Heatmap & Thời gian dừng chân',
          description: 'Theo dõi luồng di chuyển và mật độ khách dừng chân để tối ưu mặt bằng bán lẻ.',
          metricBadge: { label: 'Dữ liệu phân tích', value: 'Realtime 2D Grid' },
        },
        {
          id: 'gis-map',
          tag: 'Đô thị & Bản đồ số',
          title: 'Bản đồ GIS Smart City & Trung tâm điều hành',
          description: 'Bản đồ số định vị hệ thống camera, cảm biến IoT và cửa hàng thời gian thực.',
          metricBadge: { label: 'Tọa độ GPS', value: 'Định vị chính xác cao' },
        },
        {
          id: 'retail-events',
          tag: 'Bán lẻ & Chuyển đổi',
          title: 'Phân tích bán lẻ Retail Analytics & Đối soát POS',
          description: 'Phân tích đối soát lưu lượng khách với doanh thu POS thực tế đo lường chuyển đổi.',
          metricBadge: { label: 'Tỷ lệ chuyển đổi', value: 'Đối soát tự động' },
        },
      ]
    : [
        {
          id: 'face-recognition',
          tag: 'Biometric AI',
          title: 'Real-Time Facial Recognition Engine (<200ms)',
          description: 'Sub-200ms AI face recognition with anti-spoofing for contactless check-in and VIP welcome.',
          metricBadge: { label: 'Inference Latency', value: '< 200ms' },
        },
        {
          id: 'anpr',
          tag: 'Smart Parking',
          title: 'Automatic Number Plate Recognition (ANPR)',
          description: 'Automated vehicle license plate reading with automatic gate barrier controls.',
          metricBadge: { label: 'Recognition Accuracy', value: '99.4%' },
        },
        {
          id: 'vms',
          tag: 'Video Management',
          title: 'Enterprise VMS Portal & H.265 Streaming',
          description: 'Centralized RTSP/ONVIF video management with low-latency live walls and event playback.',
          metricBadge: { label: 'Protocol Support', value: 'RTSP / ONVIF' },
        },
        {
          id: 'heatmap',
          tag: 'Spatial Analytics',
          title: '2D Footfall & Customer Density Heatmaps',
          description: 'Analyze customer dwell times and high-traffic retail aisles to maximize store layout.',
          metricBadge: { label: 'Spatial Resolution', value: 'Realtime 2D Grid' },
        },
        {
          id: 'gis-map',
          tag: 'Smart City GIS',
          title: 'Interactive GIS Map & Smart City Dashboard',
          description: 'Geospatial map plotting cameras, IoT sensors, and branch statuses in real time.',
          metricBadge: { label: 'Geo-Precision', value: 'Meter-Level Accuracy' },
        },
        {
          id: 'retail-events',
          tag: 'Retail Intelligence',
          title: 'Retail Analytics & POS Revenue Correlation',
          description: 'Correlate footfall traffic with actual POS register sales to compute true conversion rates.',
          metricBadge: { label: 'Conversion Tracking', value: 'Automated Audit' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ AI Vision & Smart City' : 'AI Vision & Smart City Module'}
          title={
            isVi
              ? ['Thị giác máy tính AI.', 'Giám sát & Điều hành đô thị.']
              : ['Computer Vision AI.', 'Smart City Intelligence.']
          }
          subtitle={
            isVi
              ? 'CommaDesk AI Vision & Smart City biến luồng camera thông thường thành hệ thống phân tích thị giác máy tính: nhận diện khuôn mặt tức thì, đọc biển số xe ANPR, bản đồ nhiệt Heatmap và trung tâm điều hành Smart City Dashboard.'
              : 'CommaDesk AI Vision & Smart City turns standard CCTV streams into high-value computer vision insights: sub-200ms face matching, automated ANPR plates, retail heatmaps, and unified GIS city management.'
          }
          tags={
            isVi
              ? [
                  'Nhận diện khuôn mặt <200ms',
                  'Đọc biển số xe ANPR',
                  'VMS Camera đa kênh',
                  'Bản đồ nhiệt Heatmap 2D',
                  'Bản đồ số Goong Map GIS',
                  'Đối soát doanh thu POS',
                ]
              : [
                  'Face Matching <200ms',
                  'ANPR License Plates',
                  'Multi-Channel VMS',
                  '2D Footfall Heatmap',
                  'Goong Map GIS',
                  'POS Conversion Tracking',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Nền tảng thị giác máy tính & Phân tích bán lẻ' : 'Enterprise Computer Vision & Spatial Analytics'}
          subtitle={
            isVi
              ? 'Tận dụng công nghệ AI tiên tiến để nâng cao mức độ an ninh, tự động hóa quy trình kiểm soát ra vào và thấu hiểu hành vi khách hàng trong không gian thực.'
              : 'Harness state-of-the-art vision models to fortify security perimeter gates, automate physical access, and optimize commercial footfall revenue.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'AI Vision & Smart City' : 'AI Vision & Smart City'} />

        <Footer />
      </main>
    </>
  );
}
