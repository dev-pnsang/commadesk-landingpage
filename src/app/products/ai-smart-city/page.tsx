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
          tag: 'Nhận diện AI',
          title: 'Nhận diện khuôn mặt thời gian thực',
          description: 'Thuật toán Deep Learning nhận diện đối khớp danh tính đa góc độ trong dưới 200ms, hỗ trợ chấm công, đón tiếp VIP và cảnh báo đối tượng xấu.',
          metricBadge: { label: 'Tốc độ đối khớp', value: '< 200ms' },
        },
        {
          id: 'anpr',
          tag: 'Giao thông',
          title: 'Nhận diện biển số xe tự động (ANPR)',
          description: 'Tự động trích xuất biển số xe máy và ô tô, kiểm soát barrier đóng mở tự động tại cổng ra vào tòa nhà, hầm đỗ xe và khu công nghiệp.',
          metricBadge: { label: 'Độ chính xác biển số', value: '99.4%' },
        },
        {
          id: 'vms',
          tag: 'Quản lý Camera',
          title: 'Hệ thống VMS Portal đa kênh',
          description: 'Quản lý tập trung hàng trăm luồng camera RTSP/ONVIF với chuẩn nén H.265, xem trực tiếp độ trễ thấp và tua lại sự kiện thông minh.',
          metricBadge: { label: 'Chuẩn kết nối', value: 'RTSP / ONVIF' },
        },
        {
          id: 'heatmap',
          tag: 'Bản đồ nhiệt',
          title: 'Phân tích mật độ & Bản đồ nhiệt Heatmap',
          description: 'Theo dõi hành vi di chuyển của khách hàng, mật độ dừng chân tại các gian hàng và tối ưu hóa không gian bán lẻ dựa trên dữ liệu thực.',
          metricBadge: { label: 'Dữ liệu phân tích', value: 'Realtime 2D Grid' },
        },
        {
          id: 'gis-map',
          tag: 'Đô thị',
          title: 'Bản đồ GIS Smart City & Chuỗi điểm',
          description: 'Hiển thị vị trí trực quan toàn bộ hệ thống camera, cảm biến IoT và cửa hàng trên nền bản đồ số hóa tương tác.',
          metricBadge: { label: 'Tọa độ GPS', value: 'Định vị chính xác cao' },
        },
        {
          id: 'retail-events',
          tag: 'Bán lẻ',
          title: 'Sự kiện mua hàng & Phân tích POS',
          description: 'Đối soát tương quan giữa lưu lượng khách vào cửa hàng với số lượng hóa đơn mua hàng thực tế để đo lường tỷ lệ chuyển đổi.',
          metricBadge: { label: 'Tỷ lệ chuyển đổi', value: 'Đối soát tự động' },
        },
      ]
    : [
        {
          id: 'face-recognition',
          tag: 'Biometric AI',
          title: 'Real-Time Facial Recognition Engine',
          description: 'Sub-200ms neural face matching for contactless access control, VIP guest greeting, and immediate perimeter blacklist alerts.',
          metricBadge: { label: 'Inference Latency', value: '< 200ms' },
        },
        {
          id: 'anpr',
          tag: 'Smart Parking',
          title: 'Automatic Number Plate Recognition (ANPR)',
          description: 'Automated vehicle license plate reading for parking barriers, fleet access validation, and vehicle occupancy monitoring.',
          metricBadge: { label: 'Recognition Accuracy', value: '99.4%' },
        },
        {
          id: 'vms',
          tag: 'Video Matrix',
          title: 'Centralized VMS Portal & H.265 Streaming',
          description: 'Enterprise video management platform supporting RTSP/ONVIF streams, multi-camera live walls, and motion-triggered event playback.',
          metricBadge: { label: 'Protocol Support', value: 'RTSP / ONVIF' },
        },
        {
          id: 'heatmap',
          tag: 'Spatial Analytics',
          title: '2D Footfall & Customer Density Heatmaps',
          description: 'Analyze customer dwell times, high-traffic corridors, and floor plan bottlenecks to maximize commercial retail revenue.',
          metricBadge: { label: 'Spatial Resolution', value: 'Realtime 2D Grid' },
        },
        {
          id: 'gis-map',
          tag: 'Urban GIS',
          title: 'Smart City Map & Multi-Store Geo Tracking',
          description: 'Interactive GIS geospatial map plotting camera streams, IoT environmental sensors, and chain branch status across metropolitan areas.',
          metricBadge: { label: 'Geo-Precision', value: 'Meter-Level Accuracy' },
        },
        {
          id: 'retail-events',
          tag: 'Commerce AI',
          title: 'POS Purchase Events & Conversion Sync',
          description: 'Correlate physical camera footfall traffic with retail point-of-sale transactions to measure conversion rates by zone and hour.',
          metricBadge: { label: 'Store ROI', value: 'Automated Attribution' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto space-y-12 sm:space-y-24 md:space-y-32 relative px-2.5 sm:px-6 lg:px-8 pb-16">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ AI Vision & Smart City' : 'AI Vision & Smart City Module'}
          title={
            isVi
              ? ['Thị giác máy tính AI.', 'Biến camera giám sát thành dữ liệu hành động.']
              : ['AI Computer Vision.', 'Turn CCTV streams into actionable insights.']
          }
          subtitle={
            isVi
              ? 'Commadesk AI Vision biến hạ tầng camera hiện hữu thành hệ thống thị giác thông minh: nhận diện khuôn mặt chấm công, đọc biển số xe tự động, bản đồ nhiệt mật độ và giám sát thông minh theo thời gian thực.'
              : 'Commadesk AI Vision upgrades existing CCTV camera infrastructure with deep learning: biometric facial check-in, automatic license plate recognition, and footfall heatmaps.'
          }
          tags={[
            'Neural Face Recognition',
            'ANPR Vehicle Plates',
            'VMS Multi-Channel Portal',
            '2D Heatmap Analytics',
            'Smart City GIS Map',
            'Retail Events Sync',
          ]}
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Thị giác máy tính' : 'Vision Intelligence'}
          title={isVi ? 'Nền tảng AI Vision phục vụ doanh nghiệp & chuỗi điểm' : 'Enterprise Smart City & AI Vision Suite'}
          subtitle={
            isVi
              ? 'Tích hợp trực tiếp với camera có sẵn mà không cần thay mới phần cứng, bảo mật dữ liệu tuyệt đối tại biên (Edge AI) hoặc trên đám mây riêng.'
              : 'Seamlessly works with existing IP cameras via Edge AI or secure cloud gateways, requiring zero proprietary hardware replacement.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'AI Vision & Smart City' : 'AI Vision & Smart City'} />

        <Footer />
      </main>
    </>
  );
}
