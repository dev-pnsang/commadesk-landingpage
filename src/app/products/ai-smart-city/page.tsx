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
          description: 'Mạng nơ-ron Deep Learning đối khớp danh tính đa góc độ trong dưới 200ms với thuật toán chống giả mạo (Anti-spoofing), hỗ trợ chấm công không chạm, đón tiếp VIP và cảnh báo blacklist.',
          metricBadge: { label: 'Tốc độ đối khớp', value: '< 200ms' },
        },
        {
          id: 'anpr',
          tag: 'Bãi đỗ xe thông minh',
          title: 'Nhận diện biển số xe tự động (ANPR)',
          description: 'Tự động trích xuất biển số xe máy và ô tô, kiểm soát barrier đóng mở tự động tại cổng ra vào tòa nhà, hầm đỗ xe và khu công nghiệp với độ chính xác trên 99.4%.',
          metricBadge: { label: 'Độ chính xác biển số', value: '99.4%' },
        },
        {
          id: 'vms',
          tag: 'Hệ thống VMS Đa kênh',
          title: 'Hệ thống VMS Portal & Chuẩn nén H.265',
          description: 'Quản lý tập trung hàng trăm luồng camera RTSP/ONVIF với chuẩn nén H.265 tối ưu băng thông, tường xem trực tiếp Live Wall độ trễ cực thấp và tua lại sự kiện AI thông minh.',
          metricBadge: { label: 'Chuẩn kết nối', value: 'RTSP / ONVIF' },
        },
        {
          id: 'heatmap',
          tag: 'Phân tích không gian',
          title: 'Bản đồ nhiệt 2D Heatmap & Thời gian dừng chân',
          description: 'Theo dõi luồng di chuyển khách hàng, mật độ dừng chân (dwell time) tại các gian hàng và tối ưu hóa không gian trưng bày bán lẻ dựa trên số liệu thực tế.',
          metricBadge: { label: 'Dữ liệu phân tích', value: 'Realtime 2D Grid' },
        },
        {
          id: 'gis-map',
          tag: 'Đô thị & Bản đồ số',
          title: 'Bản đồ GIS Smart City & Trung tâm điều hành',
          description: 'Bản đồ số tương tác (tích hợp Goong Map GIS) định vị chính xác vị trí toàn bộ camera, cửa hàng và cảm biến IoT; tổng hợp dữ liệu thời gian thực trên Smart City Dashboard.',
          metricBadge: { label: 'Tọa độ GPS', value: 'Định vị chính xác cao' },
        },
        {
          id: 'retail-events',
          tag: 'Bán lẻ & Chuyển đổi',
          title: 'Phân tích bán lẻ Retail Analytics & Đối soát POS',
          description: 'Phân tích tương quan giữa lưu lượng khách vào cửa hàng (footfall traffic) với số lượng hóa đơn mua hàng POS thực tế, đo lường tỷ lệ chuyển đổi và giá trị đơn hàng trung bình.',
          metricBadge: { label: 'Tỷ lệ chuyển đổi', value: 'Đối soát tự động' },
        },
      ]
    : [
        {
          id: 'face-recognition',
          tag: 'Biometric AI',
          title: 'Real-Time Facial Recognition Engine (<200ms)',
          description: 'Sub-200ms deep learning neural face matching with anti-spoofing verification for contactless access control, VIP guest greeting, and immediate perimeter blacklist alerts.',
          metricBadge: { label: 'Inference Latency', value: '< 200ms' },
        },
        {
          id: 'anpr',
          tag: 'Smart Parking',
          title: 'Automatic Number Plate Recognition (ANPR)',
          description: 'Automated vehicle license plate extraction for automated barrier gates, fleet access validation, and parking occupancy monitoring with 99.4% precision.',
          metricBadge: { label: 'Recognition Accuracy', value: '99.4%' },
        },
        {
          id: 'vms',
          tag: 'Video Management',
          title: 'Enterprise VMS Portal & H.265 Streaming',
          description: 'Centralized video management platform supporting RTSP/ONVIF streams, bandwidth-efficient H.265 encoding, multi-camera live walls, and motion-triggered event playback.',
          metricBadge: { label: 'Protocol Support', value: 'RTSP / ONVIF' },
        },
        {
          id: 'heatmap',
          tag: 'Spatial Analytics',
          title: '2D Footfall & Customer Density Heatmaps',
          description: 'Analyze customer dwell times, high-traffic retail corridors, and store plan bottlenecks to maximize commercial revenue and floor plan efficiency.',
          metricBadge: { label: 'Spatial Resolution', value: 'Realtime 2D Grid' },
        },
        {
          id: 'gis-map',
          tag: 'Smart City GIS',
          title: 'Interactive GIS Map & Smart City Dashboard',
          description: 'Interactive geospatial GIS map (Goong Map integration) plotting camera streams, IoT environmental sensors, and chain branch status across metropolitan areas.',
          metricBadge: { label: 'Geo-Precision', value: 'Meter-Level Accuracy' },
        },
        {
          id: 'retail-events',
          tag: 'Retail Intelligence',
          title: 'Retail Analytics & POS Revenue Correlation',
          description: 'Correlate real-time store footfall traffic with actual POS transaction receipts to compute accurate conversion rates and average basket size metrics.',
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
          tags={[
            'Face Matching <200ms',
            'ANPR License Plates',
            'Multi-Channel VMS',
            '2D Footfall Heatmap',
            'Goong Map GIS',
            'POS Conversion Tracking',
          ]}
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
