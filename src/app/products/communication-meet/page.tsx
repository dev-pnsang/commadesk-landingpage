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
          tag: 'Họp online',
          title: 'Họp Video CommaMeet',
          description: 'Họp video bảo mật trên nền WebRTC, không giới hạn thời gian họp.',
          metricBadge: { label: 'Độ trễ', value: '<100ms siêu mượt' },
        },
        {
          id: 'matrix-chat',
          tag: 'Chat',
          title: 'Kênh Chat Mã Hóa E2EE',
          description: 'Nhắn tin tức thì, chia sẻ tệp và tạo kênh trao đổi theo dự án bảo mật tuyệt đối.',
          metricBadge: { label: 'Mã hóa', value: 'E2EE Standard' },
        },
        {
          id: 'cms-portal',
          tag: 'Cổng tin',
          title: 'Cổng Tin Doanh Nghiệp',
          description: 'Xuất bản thông báo nội bộ, chính sách công ty và tin tức hoạt động trực quan.',
          metricBadge: { label: 'Tiếp cận', value: '100% nhân sự' },
        },
        {
          id: 'screen-share',
          tag: 'Hợp tác',
          title: 'Chia Sẻ & Bảng Trắng',
          description: 'Trình chiếu tài liệu, chia sẻ màn hình và vẽ sơ đồ trực tiếp trong cuộc họp.',
          metricBadge: { label: 'Tương tác', value: 'Thời gian thực' },
        },
        {
          id: 'surveys-feedback',
          tag: 'Khảo sát',
          title: 'Khảo Sát & Góp Ý Ẩn Danh',
          description: 'Thăm dò ý kiến nhân viên, đo lường gắn kết và tiếp nhận góp ý bảo mật.',
          metricBadge: { label: 'Bảo mật', value: 'Ẩn danh 100%' },
        },
        {
          id: 'push-notifications',
          tag: 'Thông báo',
          title: 'Thông Báo Tức Thì',
          description: 'Đồng bộ thông báo in-app qua WebSocket và đẩy tin quan trọng đến Telegram, Zalo.',
          metricBadge: { label: 'Tốc độ', value: 'Tức thời' },
        },
      ]
    : [
        {
          id: 'commameet-webrtc',
          tag: 'Video',
          title: 'CommaMeet Video Calls',
          description: 'Enterprise WebRTC video conferencing with zero time limits and high concurrency.',
          metricBadge: { label: 'Audio', value: '<100ms Latency' },
        },
        {
          id: 'matrix-chat',
          tag: 'Chat',
          title: 'Matrix E2EE Messenger',
          description: 'Instant team channels, file sharing, and project chat rooms with E2EE security.',
          metricBadge: { label: 'Security', value: 'E2EE Standard' },
        },
        {
          id: 'cms-portal',
          tag: 'Portal',
          title: 'Corporate Intranet Portal',
          description: 'Publish company news, policy announcements, and interactive articles easily.',
          metricBadge: { label: 'Reach', value: '100% Staff' },
        },
        {
          id: 'screen-share',
          tag: 'Collab',
          title: 'Screen Share & Whiteboard',
          description: 'HD screen presentation and interactive whiteboard brainstorming in meetings.',
          metricBadge: { label: 'Interactivity', value: 'Realtime' },
        },
        {
          id: 'surveys-feedback',
          tag: 'Surveys',
          title: 'Anonymous Feedback',
          description: 'Conduct eNPS surveys and collect confidential employee suggestions safely.',
          metricBadge: { label: 'Privacy', value: '100% Anonymous' },
        },
        {
          id: 'push-notifications',
          tag: 'Alerts',
          title: 'Multi-Channel Alerts',
          description: 'WebSocket in-app realtime alerts and outbound webhooks to Telegram and Zalo.',
          metricBadge: { label: 'Speed', value: 'Instant' },
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
              ? 'Họp video trực tuyến CommaMeet không giới hạn, kênh chat nội bộ và thông báo đẩy tức thì.'
              : 'Secure CommaMeet video conferencing with unlimited call time, encrypted channels, and instant alerts.'
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
          title={isVi ? 'Giao tiếp không khoảng cách' : 'Frictionless Communications'}
          subtitle={
            isVi
              ? 'Tăng tốc trao đổi thông tin và bảo mật tuyệt đối các cuộc họp chiến lược.'
              : 'Accelerate decision-making with high-fidelity meetings and encrypted collaboration.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Phân hệ Giao tiếp & CommaMeet' : 'CommaMeet & Comms'} />
        <Footer />
      </main>
    </>
  );
}
