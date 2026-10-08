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
          description: 'Theo dõi toàn bộ hành trình chuyển đổi khách hàng từ đầu mối tiềm năng (Leads), các giai đoạn Deal, báo giá, thương thảo hợp đồng đến dự báo doanh thu theo quý.',
          metricBadge: { label: 'Tăng trưởng doanh số', value: '+35% tỷ lệ chốt deal' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'Hỗ trợ ITIL',
          title: 'Hàng đợi Ticket & Đồng hồ kiểm soát SLA',
          description: 'Tiếp nhận sự cố và yêu cầu dịch vụ theo chuẩn ITIL (Faveo-style), phân bổ chuyên viên tự động, đồng hồ đếm ngược vi phạm thời gian phản hồi/xử lý và kịch bản trả lời mẫu.',
          metricBadge: { label: 'Tuân thủ SLA', value: '98.5% giải quyết chuẩn' },
        },
        {
          id: 'customer-360',
          tag: 'Khách hàng 360°',
          title: 'Hồ sơ khách hàng 360° tập trung',
          description: 'Lưu trữ toàn diện danh bạ liên hệ (Contacts), hợp đồng dịch vụ đã ký, lịch sử giao dịch thanh toán, các ticket hỗ trợ trong quá khứ và nhật ký cuộc gọi trao đổi.',
          metricBadge: { label: 'Độ hài lòng CSAT', value: '4.9 / 5.0 sao' },
        },
        {
          id: 'hr-helpdesk-widget',
          tag: 'Hỗ trợ HR nội bộ',
          title: 'Widget hỗ trợ HR & Phân bổ Hybrid Assign',
          description: 'Tích hợp widget gửi ticket yêu cầu hỗ trợ nội bộ cho phòng nhân sự ngay trên giao diện làm việc, phân quyền kết hợp linh hoạt cho quản lý phòng ban và HR chuyên trách.',
          metricBadge: { label: 'Thời gian hỗ trợ', value: 'Giải quyết < 1 giờ' },
        },
        {
          id: 'omnichannel',
          tag: 'Đa kênh tích hợp',
          title: 'Tiếp nhận ticket đa kênh & Tự động định tuyến',
          description: 'Tự động tạo ticket từ email gửi đến hộp thư hỗ trợ, widget chat trực tuyến, cổng thông tin tự phục vụ nội bộ hoặc qua REST API tích hợp bên thứ ba.',
          metricBadge: { label: 'Thời gian tiếp nhận', value: 'Tức thì (Realtime)' },
        },
        {
          id: 'knowledge-base',
          tag: 'Tri thức & CSAT',
          title: 'Kho tài liệu giải pháp & Khảo sát CSAT tự động',
          description: 'Xây dựng trung tâm hướng dẫn tự khắc phục sự cố (Knowledge Base) giúp giảm 50% khối lượng ticket trùng lặp, kèm khảo sát đánh giá chất lượng tự động ngay sau khi đóng ticket.',
          metricBadge: { label: 'Tự phục vụ', value: 'Giảm 50% ticket trùng' },
        },
      ]
    : [
        {
          id: 'crm-pipeline',
          tag: 'B2B Sales Engine',
          title: 'B2B Sales Pipeline, Deals & Revenue Forecasting',
          description: 'Visualize enterprise sales opportunities across pipeline stages, automate lead distribution, track contract negotiations, and accurately forecast quarterly revenue.',
          metricBadge: { label: 'Win Rate Boost', value: '+35% Conversion' },
        },
        {
          id: 'helpdesk-queues',
          tag: 'ITIL Service Desk',
          title: 'ITIL Ticket Queues & SLA Breach Countdown',
          description: 'Faveo-style ticket handling with priority tiers, automated assignment to skilled agents, SLA escalation countdown timers, and canned responses.',
          metricBadge: { label: 'SLA Adherence', value: '98.5% On-Time' },
        },
        {
          id: 'customer-360',
          tag: 'Customer 360°',
          title: 'Unified Customer 360° Dossier & Contacts',
          description: 'Single pane of glass unifying signed enterprise contracts, key stakeholders & contacts, billing history, past tickets, and activity logs.',
          metricBadge: { label: 'Customer CSAT', value: '4.9 / 5.0 Score' },
        },
        {
          id: 'hr-helpdesk-widget',
          tag: 'Internal HR Support',
          title: 'Internal HR Support Widget & Hybrid Assign',
          description: 'In-app HR service request widget enabling employees to submit policy queries and grievances with hybrid routing between department heads and HR specialists.',
          metricBadge: { label: 'Response Speed', value: '< 1 Hour Resolution' },
        },
        {
          id: 'omnichannel',
          tag: 'Omnichannel Ingest',
          title: 'Omnichannel Ticket Ingest & Automated Triage',
          description: 'Automatically ingest issues via inbound support mailboxes, embeddable chat widgets, employee self-service portals, and external REST API webhooks.',
          metricBadge: { label: 'Ingest Speed', value: 'Zero-Lag Realtime' },
        },
        {
          id: 'knowledge-base',
          tag: 'Knowledge & CSAT',
          title: 'Self-Service Knowledge Base & Automated CSAT',
          description: 'Empower users with searchable resolution articles to deflect 50% of repetitive tickets, paired with automated customer satisfaction surveys upon ticket close.',
          metricBadge: { label: 'Deflection Rate', value: '50% Fewer Repetitive Tickets' },
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
              ? ['Dịch vụ xuất sắc.', 'Tăng trưởng doanh số bền vững.']
              : ['Exceptional service.', 'Accelerated enterprise sales.']
          }
          subtitle={
            isVi
              ? 'CommaDesk CRM & Helpdesk kết nối phễu cơ hội kinh doanh B2B, hàng đợi ticket ITIL, hỗ trợ HR nội bộ và hồ sơ khách hàng 360° vào một nền tảng chăm sóc và phát triển khách hàng toàn diện.'
              : 'CommaDesk CRM & Helpdesk unifies B2B opportunity pipelines, ITIL service desk queues with SLA countdowns, internal HR helpdesks, and customer 360° profiles into one connected platform.'
          }
          tags={[
            'B2B Deals Pipeline',
            'ITIL Service Desk',
            'SLA Breach Timers',
            'HR Helpdesk Widget',
            'Customer 360° Dossier',
            'Omnichannel Ingestion',
          ]}
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
