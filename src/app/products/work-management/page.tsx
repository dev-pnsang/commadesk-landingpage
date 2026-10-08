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
          description: 'Kéo thả thẻ việc trực quan, phân loại ưu tiên, hạn chót và checklist con rõ ràng.',
          metricBadge: { label: 'Tối ưu luồng việc', value: '3x nhanh hơn' },
        },
        {
          id: 'gantt',
          tag: 'Lộ trình',
          title: 'Biểu đồ Gantt & Ràng buộc đường găng',
          description: 'Theo dõi mốc tiến độ dự án, tự động cập nhật khi nhiệm vụ liên đới thay đổi.',
          metricBadge: { label: 'Kiểm soát hạn chót', value: '100% chính xác' },
        },
        {
          id: 'my-work',
          tag: 'Cá nhân hóa',
          title: 'Trung tâm "Công việc của tôi" & Hộp thư Inbox',
          description: 'Tổng hợp tất cả đầu việc cá nhân từ nhiều dự án vào một màn hình duy nhất.',
          metricBadge: { label: 'Tập trung cá nhân', value: '0 bỏ sót task' },
        },
        {
          id: 'time-logs',
          tag: 'Năng suất',
          title: 'Nhật ký thời gian & Báo cáo giờ dự án',
          description: 'Ghi nhận giờ làm từng việc, kiểm soát ngân sách và tự động đồng bộ sang bảng công.',
          metricBadge: { label: 'Năng suất bàn giao', value: '+17% vượt kế hoạch' },
        },
        {
          id: 'sprints',
          tag: 'Agile Engine',
          title: 'Quản lý Sprint, Biểu đồ Burndown & Velocity',
          description: 'Theo dõi biểu đồ Burndown, cân bằng năng lực đội ngũ và tiến độ bàn giao sprint.',
          metricBadge: { label: 'Chu kỳ phân phối', value: '2 tuần/sprint' },
        },
        {
          id: 'acceptance-budget',
          tag: 'Điều hành & Kiểm toán',
          title: 'Nghiệm thu 3 cấp, Ngân sách & Báo cáo lãnh đạo',
          description: 'Nghiệm thu công việc trực tuyến, đối soát ngân sách và báo cáo tiến độ đa dự án.',
          metricBadge: { label: 'Kiểm soát ngân sách', value: 'Thời gian thực' },
        },
      ]
    : [
        {
          id: 'kanban',
          tag: 'Visual Flow',
          title: 'Multi-Stream Kanban & Status Lanes',
          description: 'Intuitive drag-and-drop task boards with priority tags and granular checklists.',
          metricBadge: { label: 'Workflow Efficiency', value: '3x Faster' },
        },
        {
          id: 'gantt',
          tag: 'Roadmap',
          title: 'Gantt Timeline & Critical Path Dependencies',
          description: 'Interactive timelines with automated rescheduling when milestones shift.',
          metricBadge: { label: 'Deadline Accuracy', value: '100% On-Track' },
        },
        {
          id: 'my-work',
          tag: 'Personal Hub',
          title: '"My Work" Unified Task Queue & Inbox',
          description: 'Aggregates all personal assignments across enterprise workspaces in one view.',
          metricBadge: { label: 'Task Focus', value: 'Zero Missed Tasks' },
        },
        {
          id: 'time-logs',
          tag: 'Productivity',
          title: 'Real-Time Work Logs & Team Time Auditing',
          description: 'Track subtask hours, monitor sprint budgets, and auto-sync with HR timesheets.',
          metricBadge: { label: 'Team Velocity', value: '+17% Ahead of Plan' },
        },
        {
          id: 'sprints',
          tag: 'Agile Engine',
          title: 'Sprint Planning, Burndown & Velocity Metrics',
          description: 'Balance squad capacities with Burndown curves and monitor sprint velocity.',
          metricBadge: { label: 'Release Cadence', value: 'Bi-weekly Sprints' },
        },
        {
          id: 'acceptance-budget',
          tag: 'Governance',
          title: '3-Tier Acceptance, Budget & Executive KPIs',
          description: 'Digital deliverable sign-offs with real-time budget vs actual expenditure.',
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
