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
          tag: 'Kinh doanh B2B',
          title: 'Phễu cơ hội kinh doanh Deals & Dự báo doanh thu',
          description: 'Theo dõi toàn bộ chu trình bán hàng từ Leads, Deals đến dự báo doanh thu.',
          metricBadge: { label: 'Tăng trưởng doanh số', value: '+35% tỷ lệ chốt deal' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'Hỗ trợ ITIL',
          title: 'Hàng đợi Ticket & Đồng hồ kiểm soát SLA',
          description: 'Tiếp nhận sự cố chuẩn ITIL, phân công tự động và đồng hồ đếm ngược vi phạm SLA.',
          metricBadge: { label: 'Tuân thủ SLA', value: '98.5% giải quyết chuẩn' },
        },
        {
          id: 'customer-360',
          tag: 'Khách hàng 360°',
          title: 'Hồ sơ khách hàng 360° tập trung',
          description: 'Hồ sơ khách hàng tổng hợp hợp đồng, lịch sử giao dịch và nhật ký hỗ trợ.',
          metricBadge: { label: 'Độ hài lòng CSAT', value: '4.9 / 5.0 sao' },
        },
        {
          id: 'hr-helpdesk-widget',
          tag: 'Hỗ trợ HR nội bộ',
          title: 'Widget hỗ trợ HR & Phân bổ Hybrid Assign',
          description: 'Widget gửi yêu cầu hỗ trợ nội bộ cho nhân sự ngay trên giao diện làm việc.',
          metricBadge: { label: 'Thời gian hỗ trợ', value: 'Giải quyết < 1 giờ' },
        },
        {
          id: 'omnichannel',
          tag: 'Đa kênh tích hợp',
          title: 'Tiếp nhận ticket đa kênh & Tự động định tuyến',
          description: 'Tự động tạo ticket từ Email, Chat trực tuyến hoặc cổng tự phục vụ đa kênh.',
          metricBadge: { label: 'Thời gian tiếp nhận', value: 'Tức thì (Realtime)' },
        },
        {
          id: 'knowledge-base',
          tag: 'Tri thức & CSAT',
          title: 'Kho tài liệu giải pháp & Khảo sát CSAT tự động',
          description: 'Kho giải pháp tự phục vụ giúp giảm tải ticket trùng và khảo sát CSAT tự động.',
          metricBadge: { label: 'Tự phục vụ', value: 'Giảm 50% ticket trùng' },
        },
      ]
    : [
        {
          id: 'crm-pipeline',
          tag: 'B2B Sales Engine',
          title: 'B2B Sales Pipeline, Deals & Revenue Forecasting',
          description: 'Track complete sales journey from leads and deals to accurate revenue forecasting.',
          metricBadge: { label: 'Win Rate Boost', value: '+35% Conversion' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'ITIL Service Desk',
          title: 'ITIL Ticket Queues & SLA Breach Countdown',
          description: 'ITIL ticket handling with automated triage and SLA escalation timers.',
          metricBadge: { label: 'SLA Adherence', value: '98.5% On-Time' },
        },
        {
          id: 'customer-360',
          tag: 'Customer 360°',
          title: 'Unified Customer 360° Dossier & Contacts',
          description: 'Unified customer dossier uniting signed contracts, billing history, and support records.',
          metricBadge: { label: 'Customer CSAT', value: '4.9 / 5.0 Score' },
        },
        {
          id: 'hr-helpdesk-widget',
          tag: 'Internal HR Support',
          title: 'Internal HR Support Widget & Hybrid Assign',
          description: 'In-app HR service request widget enabling rapid employee query resolution.',
          metricBadge: { label: 'Response Speed', value: '< 1 Hour Resolution' },
        },
        {
          id: 'omnichannel',
          tag: 'Omnichannel Ingest',
          title: 'Omnichannel Ticket Ingest & Automated Triage',
          description: 'Ingest issues via inbound mailboxes, chat widgets, self-service portals, and APIs.',
          metricBadge: { label: 'Ingest Speed', value: 'Zero-Lag Realtime' },
        },
        {
          id: 'knowledge-base',
          tag: 'Knowledge & CSAT',
          title: 'Self-Service Knowledge Base & Automated CSAT',
          description: 'Self-service resolution articles deflect repetitive tickets with instant CSAT ratings.',
          metricBadge: { label: 'Deflection Rate', value: '50% Fewer Repetitive Tickets' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Khách hàng & Hỗ trợ' : 'CRM & Helpdesk Module'}
          title={
            isVi
              ? ['Dịch vụ xuất sắc.', 'Tăng trưởng doanh số bền vững.']
              : ['Exceptional service.', 'Accelerated enterprise sales.']
          }
          subtitle={
            isVi
              ? 'CommaDesk CRM & Helpdesk kết nối phễu cơ hội kinh doanh B2B, hàng đợi ticket ITIL, hỗ trợ HR nội bộ và hồ sơ khách hàng 360° vào một nền tảng chăm sóc và phát triển khách hàng toàn diện.'
              : 'CommaDesk CRM & Helpdesk unifies B2B opportunity pipelines, ITIL service desk queues with SLA countdowns, internal HR helpdesks, and customer 360° profiles into one connected platform.'
          }
          tags={
            isVi
              ? [
                  'Phễu cơ hội B2B Deals',
                  'Hàng đợi ITIL Service Desk',
                  'Đồng hồ đếm ngược SLA',
                  'Widget hỗ trợ HR nội bộ',
                  'Hồ sơ khách hàng 360°',
                  'Hội tụ đa kênh Omnichannel',
                ]
              : [
                  'B2B Deals Pipeline',
                  'ITIL Service Desk',
                  'SLA Breach Timers',
                  'HR Helpdesk Widget',
                  'Customer 360° Dossier',
                  'Omnichannel Ingestion',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Bộ giải pháp quan hệ khách hàng & Hỗ trợ dịch vụ' : 'Enterprise CRM & Service Desk Suite'}
          subtitle={
            isVi
              ? 'Rút ngắn chu kỳ bán hàng B2B, tối ưu hóa năng suất giải quyết sự cố kỹ thuật và nâng cao chỉ số hài lòng của cả khách hàng lẫn nhân viên nội bộ.'
              : 'Shorten enterprise deal cycles, empower support agents with automated workflows, and maximize satisfaction across external clients and internal staff.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Khách hàng & Hỗ trợ' : 'CRM & Helpdesk'} />

        <Footer />
      </main>
    </>
  );
}
