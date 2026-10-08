'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';
import { InteractiveMeetCollab } from '@/components/showcase/InteractiveMeetCollab';

export default function CommunicationMeetPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveMeetCollab isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'commameet-webrtc',
          tag: 'Họp trực tuyến',
          title: 'Họp Video CommaMeet bảo mật & Độ nét HD',
          description: 'Họp video bảo mật trên nền LiveKit WebRTC, không giới hạn thời gian, hỗ trợ hàng trăm người.',
          metricBadge: { label: 'Độ trễ truyền âm', value: '<100ms siêu mượt' },
        },
        {
          id: 'matrix-chat',
          tag: 'Chat nội bộ',
          title: 'Kênh Chat Mã Hóa E2EE & Nhóm Dự Án',
          description: 'Nhắn tin tức thì, chia sẻ tài liệu và tạo kênh trao đổi theo dự án, phòng ban bảo mật tuyệt đối.',
          metricBadge: { label: 'Bảo mật tin nhắn', value: 'Mã hóa E2EE' },
        },
        {
          id: 'cms-portal',
          tag: 'Cổng thông tin',
          title: 'Cổng Tin Tức Doanh Nghiệp & CMS Studio',
          description: 'Xuất bản thông báo nội bộ, chính sách công ty và tin tức hoạt động với giao diện trực quan.',
          metricBadge: { label: 'Tiếp cận nhân sự', value: '100% toàn diện' },
        },
        {
          id: 'screen-share',
          tag: 'Hợp tác số',
          title: 'Chia sẻ Màn hình & Bảng vẽ Whiteboard',
          description: 'Trình chiếu tài liệu, chia sẻ màn hình máy tính và cộng tác vẽ sơ đồ trực tiếp trong cuộc họp.',
          metricBadge: { label: 'Tương tác nhóm', value: 'Thời gian thực' },
        },
        {
          id: 'surveys-feedback',
          tag: 'Lắng nghe',
          title: 'Khảo sát Nội bộ & Hộp thư góp ý ẩn danh',
          description: 'Thăm dò ý kiến nhân viên, đo lường độ hài lòng và tiếp nhận phản ánh bảo mật danh tính.',
          metricBadge: { label: 'Mức độ tin cậy', value: 'Ẩn danh 100%' },
        },
        {
          id: 'push-notifications',
          tag: 'Thông báo',
          title: 'Hệ thống Thông Báo Đa Kênh Tức Thì',
          description: 'Đồng bộ thông báo in-app realtime qua WebSocket và đẩy tin quan trọng đến Telegram/Zalo.',
          metricBadge: { label: 'Tốc độ gửi tin', value: 'Tức thời' },
        },
      ]
    : [
        {
          id: 'commameet-webrtc',
          tag: 'Video Meetings',
          title: 'CommaMeet Ultra-Secure HD Video Calls',
          description: 'Enterprise WebRTC video conferencing powered by LiveKit with zero time limits and high concurrency.',
          metricBadge: { label: 'Audio Latency', value: '<100ms Latency' },
        },
        {
          id: 'matrix-chat',
          tag: 'Team Chat',
          title: 'Matrix E2EE Encrypted Team Messenger',
          description: 'Instant team channels, file sharing, and project chat rooms with end-to-end security.',
          metricBadge: { label: 'Encryption', value: 'E2EE Standard' },
        },
        {
          id: 'cms-portal',
          tag: 'Company Portal',
          title: 'Corporate CMS Studio & Internal Portal',
          description: 'Publish company news, policy announcements, and interactive articles with rich formatting.',
          metricBadge: { label: 'Staff Reach', value: '100% Unified' },
        },
        {
          id: 'screen-share',
          tag: 'Collaboration',
          title: 'HD Screen Sharing & Interactive Whiteboard',
          description: 'High-framerate screen presentation and interactive whiteboard brainstorming in meetings.',
          metricBadge: { label: 'Team Interactivity', value: 'Realtime' },
        },
        {
          id: 'surveys-feedback',
          tag: 'Feedback Loop',
          title: 'Internal Surveys & Anonymous Feedback Mailbox',
          description: 'Conduct eNPS surveys and collect confidential employee suggestions with full anonymity.',
          metricBadge: { label: 'Confidentiality', value: '100% Protected' },
        },
        {
          id: 'push-notifications',
          tag: 'Notifications',
          title: 'Multi-Channel Push & Alert Dispatching',
          description: 'WebSocket in-app realtime alerts and automated outbound webhooks to Telegram and Zalo.',
          metricBadge: { label: 'Delivery Speed', value: 'Instant' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Giao tiếp & Họp trực tuyến' : 'Comms & Meet Module'}
          title={
            isVi
              ? ['Họp video HD bảo mật.', 'Kết nối đội ngũ tức thì.']
              : ['Encrypted HD meetings.', 'Instant workforce collaboration.']
          }
          subtitle={
            isVi
              ? 'Nền tảng họp trực tuyến CommaMeet không giới hạn, kênh chat mã hóa nội bộ và cổng thông tin doanh nghiệp hợp nhất.'
              : 'Secure CommaMeet video conferencing with unlimited call time, encrypted team channels, and unified company portal.'
          }
          visualPreview={visualPreview}
          tags={
            isVi
              ? ['Họp CommaMeet HD', 'Chat Matrix E2EE', 'Cổng tin tức CMS', 'Khảo sát nội bộ', 'Thông báo tức thì']
              : ['CommaMeet HD', 'Matrix E2EE Chat', 'CMS Portal', 'Internal Surveys', 'Instant Alerts']
          }
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Năng lực cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Giao Tiếp Không Khoảng Cách Cho Doanh Nghiệp' : 'Frictionless Enterprise Communications'}
          subtitle={
            isVi
              ? 'Tăng tốc trao đổi thông tin, bảo mật tuyệt đối các cuộc họp chiến lược của công ty.'
              : 'Accelerate decision-making with high-fidelity meetings and encrypted team collaboration.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Phân hệ Giao tiếp & CommaMeet' : 'CommaMeet & Comms'} />
        <Footer />
      </main>
    </>
  );
}
