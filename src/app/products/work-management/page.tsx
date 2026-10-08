'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveKanbanFlow } from '@/components/showcase/InteractiveKanbanFlow';

export default function WorkManagementPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveKanbanFlow isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'kanban',
          tag: 'Trực quan',
          title: 'Bảng việc Kanban đa luồng & Trạng thái',
          description: 'Quản lý thẻ việc kéo thả trực quan theo từng giai đoạn, phân loại theo độ ưu tiên, nhãn nghiệp vụ, hạn chót và checklist con độc lập.',
          metricBadge: { label: 'Tối ưu luồng việc', value: '3x nhanh hơn' },
        },
        {
          id: 'gantt',
          tag: 'Lộ trình',
          title: 'Biểu đồ Gantt & Ràng buộc đường găng',
          description: 'Theo dõi tiến trình dự án trực quan theo mốc thời gian, tự động tái tính toán ngày hoàn thành khi các nhiệm vụ phụ thuộc bị trễ hạn.',
          metricBadge: { label: 'Kiểm soát hạn chót', value: '100% chính xác' },
        },
        {
          id: 'my-work',
          tag: 'Cá nhân hóa',
          title: 'Trung tâm "Công việc của tôi" & Hộp thư Inbox',
          description: 'Hàng đợi tập trung tổng hợp tất cả đầu việc được giao từ nhiều dự án khác nhau vào một màn hình duy nhất cho từng nhân viên, không bỏ sót đầu việc.',
          metricBadge: { label: 'Tập trung cá nhân', value: '0 bỏ sót task' },
        },
        {
          id: 'time-logs',
          tag: 'Năng suất',
          title: 'Nhật ký thời gian & Báo cáo giờ dự án',
          description: 'Ghi nhận giờ làm việc thực tế cho từng subtask, đối soát ngân sách sprint, kiểm soát năng suất và tự động đồng bộ sang bảng chấm công HR.',
          metricBadge: { label: 'Năng suất bàn giao', value: '+17% vượt kế hoạch' },
        },
        {
          id: 'sprints',
          tag: 'Agile Engine',
          title: 'Quản lý Sprint, Biểu đồ Burndown & Velocity',
          description: 'Thiết lập chu kỳ sprint định kỳ 2 tuần, theo dõi biểu đồ Burndown, cân bằng tải năng lực đội ngũ và đo lường vận tốc bàn giao qua từng chu kỳ.',
          metricBadge: { label: 'Chu kỳ phân phối', value: '2 tuần/sprint' },
        },
        {
          id: 'acceptance-budget',
          tag: 'Điều hành & Kiểm toán',
          title: 'Nghiệm thu 3 cấp, Ngân sách & Báo cáo lãnh đạo',
          description: 'Quy trình nghiệm thu công việc 3 cấp kèm biên bản ký số, kiểm soát ngân sách thực tế so với kế hoạch và tổng hợp Executive Dashboard đa dự án.',
          metricBadge: { label: 'Kiểm soát ngân sách', value: 'Thời gian thực' },
        },
      ]
    : [
        {
          id: 'kanban',
          tag: 'Visual Flow',
          title: 'Multi-Stream Kanban & Status Lanes',
          description: 'Drag-and-drop workflow tracking with custom swimlanes, priority tagging, automated column triggers, and granular subtask checklists.',
          metricBadge: { label: 'Workflow Efficiency', value: '3x Faster' },
        },
        {
          id: 'gantt',
          tag: 'Roadmap',
          title: 'Gantt Timeline & Critical Path Dependencies',
          description: 'Interactive Gantt charts that recalculate critical paths, milestone progress, and alert project managers before milestones slip.',
          metricBadge: { label: 'Deadline Accuracy', value: '100% On-Track' },
        },
        {
          id: 'my-work',
          tag: 'Personal Hub',
          title: '"My Work" Unified Task Queue & Inbox',
          description: 'Personalized workspace aggregating assignments, overdue action items, and sprint commitments across all enterprise workspaces in real time.',
          metricBadge: { label: 'Task Focus', value: 'Zero Missed Tasks' },
        },
        {
          id: 'time-logs',
          tag: 'Productivity',
          title: 'Real-Time Work Logs & Team Time Auditing',
          description: 'Granular hours logging per subtask, team time auditing, sprint budget burn-down, and seamless synchronization with HR payroll timesheets.',
          metricBadge: { label: 'Team Velocity', value: '+17% Ahead of Plan' },
        },
        {
          id: 'sprints',
          tag: 'Agile Engine',
          title: 'Sprint Planning, Burndown & Velocity Metrics',
          description: 'Plan two-week agile sprints, balance squad capacities with Burndown charts, and track quarterly delivery velocity curves.',
          metricBadge: { label: 'Release Cadence', value: 'Bi-weekly Sprints' },
        },
        {
          id: 'acceptance-budget',
          tag: 'Governance',
          title: '3-Tier Acceptance, Budget & Executive KPIs',
          description: 'Multi-tier deliverable acceptance workflows with signed deliverables, actual budget tracking against baseline, and executive PMO dashboards.',
          metricBadge: { label: 'Budget Control', value: 'Realtime Variance' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Dự án & Công việc' : 'Work & Projects Module'}
          title={
            isVi
              ? ['Lập kế hoạch chính xác.', 'Thực thi không gián đoạn.']
              : ['Plan with precision.', 'Execute without friction.']
          }
          subtitle={
            isVi
              ? 'CommaDesk Work Management kết nối bảng việc Kanban, sơ đồ Gantt tương tác, nhật ký thời gian Time Logs và báo cáo điều hành Executive Dashboard vào một nền tảng hợp nhất, loại bỏ hoàn toàn tình trạng phân mảnh công cụ.'
              : 'CommaDesk Work Management unifies Kanban boards, interactive Gantt dependencies, subtask time logs, and executive PMO dashboards into one enterprise operational suite.'
          }
          tags={
            isVi
              ? [
                  'Bảng việc Kanban kéo thả',
                  'Biểu đồ Gantt tương tác',
                  'Công việc của tôi & Inbox',
                  'Nhật ký giờ Time Logs',
                  'Vận tốc Sprint Burndown',
                  'Báo cáo điều hành KPIs',
                  'Phân quyền thẻ việc Casbin',
                ]
              : [
                  'Kanban Drag & Drop',
                  'Interactive Gantt',
                  'My Work & Inbox',
                  'Time Logs & Hours',
                  'Sprint Burndown',
                  'Executive KPIs',
                  'Casbin Task RBAC',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Bộ công cụ quản lý dự án cấp doanh nghiệp' : 'Enterprise Project Management Suite'}
          subtitle={
            isVi
              ? 'Được thiết kế để giải quyết bài toán tiến độ, kiểm soát ngân sách thực tế và gia tăng tốc độ chuyển giao sản phẩm cho toàn bộ đội ngũ.'
              : 'Engineered to accelerate delivery timelines, keep project budgets predictable, and eliminate cross-departmental silos.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Quản lý Công việc & Dự án' : 'Work & Projects'} />

        <Footer />
      </main>
    </>
  );
}
