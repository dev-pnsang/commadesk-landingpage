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
          title: 'Bảng việc Kanban đa luồng',
          description: 'Quản lý thẻ việc kéo thả trực quan theo từng giai đoạn, phân loại theo độ ưu tiên, nhãn nghiệp vụ và hạn chót.',
          metricBadge: { label: 'Tối ưu luồng việc', value: '3x nhanh hơn' },
        },
        {
          id: 'gantt',
          tag: 'Lộ trình',
          title: 'Biểu đồ Gantt & Ràng buộc phụ thuộc',
          description: 'Theo dõi tiến trình dự án trực quan theo mốc thời gian, tự động điều chỉnh ngày khi các task phụ thuộc bị trễ hạn.',
          metricBadge: { label: 'Kiểm soát hạn chót', value: '100% chính xác' },
        },
        {
          id: 'my-work',
          tag: 'Cá nhân hóa',
          title: 'Trung tâm "Công việc của tôi"',
          description: 'Hàng đợi tập trung tổng hợp tất cả đầu việc được giao từ nhiều dự án khác nhau vào một màn hình duy nhất cho từng nhân viên.',
          metricBadge: { label: 'Tập trung cá nhân', value: '0 bỏ sót task' },
        },
        {
          id: 'time-logs',
          tag: 'Năng suất',
          title: 'Nhật ký thời gian & Time Logs',
          description: 'Ghi nhận giờ làm việc thực tế cho từng task, đối soát ngân sách sprint và tự động đồng bộ sang bảng lương chấm công.',
          metricBadge: { label: 'Năng suất bàn giao', value: '+17% vượt kế hoạch' },
        },
        {
          id: 'sprints',
          tag: 'Agile',
          title: 'Quản lý Sprint & Đo lường Velocity',
          description: 'Thiết lập sprint định kỳ, theo dõi biểu đồ Burndown và năng lực cam kết của từng nhóm kỹ thuật qua các chu kỳ.',
          metricBadge: { label: 'Chu kỳ phân phối', value: '2 tuần/sprint' },
        },
        {
          id: 'subtasks',
          tag: 'Chi tiết',
          title: 'Checklist con & Tệp đính kèm',
          description: 'Phân tách công việc phức tạp thành các checklist nhỏ có người nhận riêng, lưu trữ biên bản nghiệm thu trực tiếp.',
          metricBadge: { label: 'Kiểm soát chất lượng', value: 'SLA chuẩn hóa' },
        },
      ]
    : [
        {
          id: 'kanban',
          tag: 'Visual',
          title: 'Multi-Stream Kanban Boards',
          description: 'Drag-and-drop workflow tracking with custom swimlanes, priority tagging, and automated column triggers.',
          metricBadge: { label: 'Workflow Efficiency', value: '3x Faster' },
        },
        {
          id: 'gantt',
          tag: 'Roadmap',
          title: 'Gantt Timeline & Task Dependencies',
          description: 'Interactive Gantt charts that recalculate critical paths and alert project managers before milestones slip.',
          metricBadge: { label: 'Deadline Accuracy', value: '100% On-Track' },
        },
        {
          id: 'my-work',
          tag: 'Personal Hub',
          title: '"My Work" Unified Task Queue',
          description: 'Personalized dashboard aggregating assignments, overdue action items, and sprint commitments across all workspaces.',
          metricBadge: { label: 'Task Focus', value: 'Zero Missed Tasks' },
        },
        {
          id: 'time-logs',
          tag: 'Productivity',
          title: 'Real-Time Work Logs & Time Tracking',
          description: 'Granular hours logging per subtask, sprint budget burn-down, and seamless synchronization with HR payroll.',
          metricBadge: { label: 'Team Velocity', value: '+17% Ahead of Plan' },
        },
        {
          id: 'sprints',
          tag: 'Agile Engine',
          title: 'Sprint Planning & Velocity Burndown',
          description: 'Plan two-week sprints, balance squad capacities, and measure velocity metrics across quarterly releases.',
          metricBadge: { label: 'Release Cadence', value: 'Bi-weekly Sprints' },
        },
        {
          id: 'subtasks',
          tag: 'Governance',
          title: 'Checklists & Evidence Verification',
          description: 'Break complex epics into verifiable subtasks with individual assignees, audit stamps, and signed deliverables.',
          metricBadge: { label: 'QA Compliance', value: 'Standardized SLA' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto space-y-12 sm:space-y-24 md:space-y-32 relative px-2.5 sm:px-6 lg:px-8 pb-16">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Dự án & Công việc' : 'Work & Projects Module'}
          title={
            isVi
              ? ['Lập kế hoạch chính xác.', 'Thực thi không gián đoạn.']
              : ['Plan with precision.', 'Execute without friction.']
          }
          subtitle={
            isVi
              ? 'Commadesk Work Management kết nối bảng Kanban, sơ đồ Gantt và nhật ký thời gian vào một nền tảng duy nhất, loại bỏ tình trạng phân mảnh công cụ giữa các nhóm kỹ thuật và ban lãnh đạo.'
              : 'Commadesk Work Management unifies Kanban boards, interactive Gantt dependencies, sprint velocity, and personal task queues into one enterprise platform.'
          }
          tags={[
            'Kanban Drag & Drop',
            'Interactive Gantt',
            'My Work Center',
            'Time Logs',
            'Sprint Burndown',
            'Casbin Task RBAC',
          ]}
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Bộ công cụ quản lý dự án cấp doanh nghiệp' : 'Enterprise Project Management Suite'}
          subtitle={
            isVi
              ? 'Được thiết kế để giải quyết bài toán tiến độ, kiểm soát ngân sách thực tế và gia tăng tốc độ chuyển giao sản phẩm.'
              : 'Engineered to accelerate delivery timelines, keep budgets predictable, and eliminate workplace silos.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Quản lý Công việc & Dự án' : 'Work & Projects'} />

        <Footer />
      </main>
    </>
  );
}
