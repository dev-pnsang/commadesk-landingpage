'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveCRMPipeline } from '@/components/showcase/InteractiveCRMPipeline';

export default function CrmHelpdeskPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveCRMPipeline isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'crm-pipeline',
          tag: 'Kinh doanh',
          title: 'Quản lý quan hệ khách hàng & Phễu Deal',
          description: 'Theo dõi toàn bộ hành trình chuyển đổi khách hàng từ lead tiềm năng, báo giá, thương thảo hợp đồng đến chăm sóc sau bán hàng.',
          metricBadge: { label: 'Tăng trưởng doanh số', value: '+35% tỷ lệ chốt deal' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'Hỗ trợ IT',
          title: 'Hàng đợi Ticket & SLA Service Desk',
          description: 'Tiếp nhận sự cố và yêu cầu dịch vụ chuẩn ITIL, tự động định tuyến ticket cho nhóm kỹ thuật phụ trách và cảnh báo vi phạm SLA.',
          metricBadge: { label: 'Tuân thủ SLA', value: '98.5% giải quyết chuẩn' },
        },
        {
          id: 'customer-360',
          tag: 'Khách hàng 360',
          title: 'Hồ sơ khách hàng 360° tập trung',
          description: 'Lưu trữ toàn diện lịch sử giao dịch, hợp đồng dịch vụ đã ký, các ticket hỗ trợ trong quá khứ và nhật ký cuộc gọi trao đổi.',
          metricBadge: { label: 'Độ hài lòng CSAT', value: '4.9 / 5.0 sao' },
        },
        {
          id: 'omnichannel',
          tag: 'Đa kênh',
          title: 'Tiếp nhận ticket đa kênh tích hợp',
          description: 'Tự động tạo ticket từ email gửi đến, widget chat in-app, form yêu cầu hỗ trợ nội bộ hoặc qua REST API.',
          metricBadge: { label: 'Thời gian tiếp nhận', value: 'Tức thì (Realtime)' },
        },
        {
          id: 'knowledge-base',
          tag: 'Tri thức',
          title: 'Kho tài liệu giải pháp Knowledge Base',
          description: 'Xây dựng trung tâm hướng dẫn tự khắc phục sự cố cho người dùng, giúp giảm 50% khối lượng ticket lặp lại cho đội ngũ hỗ trợ.',
          metricBadge: { label: 'Tự phục vụ', value: 'Giảm 50% ticket trùng' },
        },
        {
          id: 'csat-feedback',
          tag: 'Đánh giá',
          title: 'Đo lường sự hài lòng & Báo cáo chất lượng',
          description: 'Khảo sát chất lượng dịch vụ tự động ngay sau khi đóng ticket, phân tích hiệu suất phản hồi của từng chuyên viên hỗ trợ.',
          metricBadge: { label: 'Đánh giá CSAT', value: 'Tự động 100%' },
        },
      ]
    : [
        {
          id: 'crm-pipeline',
          tag: 'Sales Engine',
          title: 'B2B Sales Pipeline & Opportunities',
          description: 'Visualize enterprise deals across pipeline stages, automate lead distribution, and accurately forecast quarterly revenue.',
          metricBadge: { label: 'Win Rate Boost', value: '+35% Conversion' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'Service Desk',
          title: 'ITIL Ticket Queues & SLA Escalations',
          description: 'Faveo-style ticket handling with priority tiers, automated assignment to skilled agents, and breach countdown timers.',
          metricBadge: { label: 'SLA Adherence', value: '98.5% On-Time' },
        },
        {
          id: 'customer-360',
          tag: 'Customer 360',
          title: 'Unified Customer 360° Dossier',
          description: 'Single pane of glass unifying signed enterprise contracts, historical tickets, primary contacts, and billing status.',
          metricBadge: { label: 'Customer CSAT', value: '4.9 / 5.0 Score' },
        },
        {
          id: 'omnichannel',
          tag: 'Omnichannel',
          title: 'Multi-Channel Ingest & In-App Chat',
          description: 'Automatically ingest issues via inbound support mailboxes, embeddable web forms, and internal employee helpdesk chats.',
          metricBadge: { label: 'Ingest Speed', value: 'Zero-Lag Realtime' },
        },
        {
          id: 'knowledge-base',
          tag: 'Self-Service',
          title: 'Internal & Customer Knowledge Base',
          description: 'Empower users with searchable resolution articles, standard operating procedures, and automated answer deflection.',
          metricBadge: { label: 'Deflection Rate', value: '50% Fewer Repetitive Tickets' },
        },
        {
          id: 'csat-feedback',
          tag: 'Satisfaction',
          title: 'Automated CSAT Surveys & Agent Analytics',
          description: 'Collect post-resolution feedback instantly, evaluate team response times, and pinpoint customer satisfaction trends.',
          metricBadge: { label: 'Survey Flow', value: '100% Automated' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto space-y-12 sm:space-y-24 md:space-y-32 relative px-2.5 sm:px-6 lg:px-8 pb-16">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Khách hàng & Hỗ trợ' : 'CRM & Helpdesk Module'}
          title={
            isVi
              ? ['Thắt chặt quan hệ khách hàng.', 'Dịch vụ hỗ trợ đạt chuẩn SLA quốc tế.']
              : ['Elevate Customer Relationships.', 'World-Class IT Service Desk.']
          }
          subtitle={
            isVi
              ? 'Commadesk CRM & Helpdesk kết hợp quản lý khách hàng doanh nghiệp và hệ thống hỗ trợ kỹ thuật chuẩn ITIL vào cùng một nền tảng, đảm bảo mọi phản ánh được xử lý nhanh chóng và cam kết SLA.'
              : 'Commadesk CRM & Helpdesk combines enterprise B2B sales pipelines with ITIL-compliant service desk queues to drive revenue and keep SLAs under strict control.'
          }
          tags={[
            'B2B Pipeline & Deals',
            'Customer 360 Repository',
            'Faveo-Style Ticket Queues',
            'Automated SLA Escalation',
            'Omnichannel Ingest',
            'CSAT Feedback Analytics',
          ]}
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Chăm sóc & Dịch vụ' : 'Service Suite'}
          title={isVi ? 'Bộ giải pháp kinh doanh & hỗ trợ toàn diện' : 'Complete Revenue & Service Desk Suite'}
          subtitle={
            isVi
              ? 'Tối ưu hóa hành trình khách hàng từ lúc tiếp cận ban đầu cho đến khi vận hành ổn định và gia hạn hợp đồng.'
              : 'Unify sales and post-purchase engineering support so your customer relationship is always managed with context.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'CRM & Hỗ trợ Helpdesk' : 'CRM & Helpdesk'} />

        <Footer />
      </main>
    </>
  );
}
