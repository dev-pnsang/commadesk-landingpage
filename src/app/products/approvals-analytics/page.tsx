'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';
import { InteractiveApprovalsAnalytics } from '@/components/showcase/InteractiveApprovalsAnalytics';

export default function ApprovalsAnalyticsPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveApprovalsAnalytics isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'unified-approval-inbox',
          tag: 'Hàng đợi tập trung',
          title: 'Hộp Thư Phê Duyệt Hợp Nhất Toàn Doanh Nghiệp',
          description: 'Gom toàn bộ đơn từ từ mọi phân hệ: Đơn nghỉ phép, Cấp tài sản, Phiếu kho, Ký văn bản đi, Đề xuất chi phí vào một màn hình duy nhất.',
          metricBadge: { label: 'Tập trung đơn từ', value: '100% Một Inbox' },
        },
        {
          id: 'delegation-engine',
          tag: 'Ủy quyền thông minh',
          title: 'Cơ Chế Ủy Quyền Phê Duyệt Khi Vắng Mặt',
          description: 'Thiết lập ủy quyền tự động cho cấp phó khi đi công tác/nghỉ phép, kèm ràng buộc hạn mức tài chính và khoảng thời gian hiệu lực nghiêm ngặt.',
          metricBadge: { label: 'Tắc nghẽn quyết định', value: 'Giảm 100%' },
        },
        {
          id: 'executive-kpi-radar',
          tag: 'Radar lãnh đạo',
          title: 'Bảng Điều Khiển Ban Lãnh Đạo (Executive Leadership Dashboard)',
          description: 'Cung cấp góc nhìn vĩ mô 360° về nhịp đập doanh nghiệp: Tốc độ hoàn thành sprint, rủi ro trễ deadline và tỷ lệ phân bổ ngân sách.',
          metricBadge: { label: 'Tầm nhìn quản trị', value: 'Thời gian thực' },
        },
        {
          id: 'acceptance-quality',
          tag: 'Nghiệm thu công việc',
          title: 'Báo Cáo Chất Lượng Nghiệm Thu & Năng Suất Nhân Sự',
          description: 'Đánh giá tỷ lệ nhiệm vụ hoàn thành đúng hạn, năng suất velocity của từng phòng ban và nghiệm thu công việc kèm bằng chứng xác thực.',
          metricBadge: { label: 'Tỷ lệ đúng hạn', value: '96.8% Milestones' },
        },
        {
          id: 'immutable-audit-trail',
          tag: 'Kiểm toán bất biến',
          title: 'Nhật Ký Kiểm Toán Chữ Ký Số Bất Biến (Audit Trail)',
          description: 'Mọi thao tác phê duyệt, từ chối hay chuyển tiếp đều được gắn dấu thời gian và lưu vết bất biến tuân thủ ma trận Casbin RBAC.',
          metricBadge: { label: 'Tính minh bạch', value: '100% Bất biến' },
        },
        {
          id: 'sla-escalation',
          tag: 'Cảnh báo SLA',
          title: 'Cảnh Báo Quá Hạn Phê Duyệt & Tự Động Leo Thang',
          description: 'Tự động nhắc nhở và leo thang người phê duyệt cấp trên nếu yêu cầu vượt quá thời gian cam kết SLA, đảm bảo luồng vận hành luôn thông suốt.',
          metricBadge: { label: 'Tốc độ ra quyết định', value: 'Nhanh hơn 4x' },
        },
      ]
    : [
        {
          id: 'unified-approval-inbox',
          tag: 'Unified Queue',
          title: 'Unified Enterprise Cross-Module Approval Inbox',
          description: 'Aggregate pending approvals from all operational modules: leave requests, inventory dispatches, document signings, and expense requests in one view.',
          metricBadge: { label: 'Inbox Consolidation', value: 'Single Destination' },
        },
        {
          id: 'delegation-engine',
          tag: 'Smart Delegation',
          title: 'Automated Absence Delegation & Threshold Routing',
          description: 'Delegate sign-off authority to deputies during travel or leave, bounded by maximum financial spending limits and strict expiry date windows.',
          metricBadge: { label: 'Operational Bottleneck', value: 'Zero Delays' },
        },
        {
          id: 'executive-kpi-radar',
          tag: 'Executive Radar',
          title: 'Executive C-Suite Dashboard & Operational Pulse',
          description: 'A 360° strategic view over company health: delivery velocity, overdue milestone risks, workforce utilization, and multi-tenant budget burn.',
          metricBadge: { label: 'Strategic Visibility', value: 'Live Telemetry' },
        },
        {
          id: 'acceptance-quality',
          tag: 'Delivery Quality',
          title: 'Milestone Acceptance Quality & Productivity Metrics',
          description: 'Measure task turnaround rates, team velocity trends, and rigorous deliverable acceptances backed by verifiable digital audit proofs.',
          metricBadge: { label: 'On-time Milestones', value: '96.8% Velocity' },
        },
        {
          id: 'immutable-audit-trail',
          tag: 'Cryptographic Audit',
          title: 'Immutable Cryptographic Signature Audit Trail',
          description: 'Every approval, rejection, or delegation is cryptographically timestamped and immutably recorded according to Casbin RBAC security policies.',
          metricBadge: { label: 'Audit Rigor', value: '100% Immutable' },
        },
        {
          id: 'sla-escalation',
          tag: 'SLA Escalations',
          title: 'Approval SLA Countdown Timers & Auto-Escalation Engine',
          description: 'Automatic urgency reminders and vertical supervisory escalations whenever approvals risk breaching designated SLA timeframes.',
          metricBadge: { label: 'Decision Speed', value: '4x Faster' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Phê Duyệt & Lãnh Đạo' : 'Approvals & Leadership Module'}
          title={
            isVi
              ? ['Một luồng phê duyệt duy nhất.', 'Toàn cảnh nhịp đập doanh nghiệp.']
              : ['Unified sign-off routing.', 'Real-time executive telemetry.']
          }
          subtitle={
            isVi
              ? 'Một điểm đến duy nhất cho mọi quy trình phê duyệt nghỉ phép, tài sản, kho bãi, văn bản và chi phí, kết hợp dashboard năng suất thời gian thực cho Ban Lãnh đạo C-Suite.'
              : 'A single unified inbox for leave, asset, warehouse, document and expense approvals, paired with real-time strategic productivity telemetry for C-Suite executives.'
          }
          tags={
            isVi
              ? [
                  'Hộp thư duyệt hợp nhất',
                  'Ủy quyền phê duyệt đa cấp',
                  'Radar KPI lãnh đạo 360°',
                  'Chất lượng nghiệm thu việc',
                  'Nhật ký kiểm toán Casbin',
                  'Cảnh báo leo thang SLA',
                ]
              : [
                  'Unified Approvals Inbox',
                  'Absence Delegation Engine',
                  'Executive 360° KPI Radar',
                  'Deliverable Acceptance Proofs',
                  'Casbin Immutable Audit',
                  'SLA Escalation Triggers',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Xóa bỏ điểm nghẽn ra quyết định trong doanh nghiệp' : 'Eliminate Decision Bottlenecks Across the Enterprise'}
          subtitle={
            isVi
              ? 'Tăng tốc tốc độ phê duyệt, chống tồn đọng đơn từ và trao cho lãnh đạo quyền kiểm soát toàn cảnh chỉ trong tích tắc.'
              : 'Accelerate decision-making speed, prevent request backlog, and provide leaders with complete situational awareness.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Phê Duyệt & Báo Cáo Lãnh Đạo' : 'Approvals & Executive Intelligence'} />

        <Footer />
      </main>
    </>
  );
}
