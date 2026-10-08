'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';
import { InteractiveSurveysFeedback } from '@/components/showcase/InteractiveSurveysFeedback';

export default function SurveysFeedbackPage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveSurveysFeedback isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'survey-builder',
          tag: 'Trình tạo khảo sát',
          title: 'Trình Tạo Khảo Sát Trực Quan & Đa Dạng Câu Hỏi',
          description: 'Thiết kế khảo sát linh hoạt: Thang điểm Likert, trắc nghiệm chọn nhiều, đánh giá ma trận, câu hỏi tự luận với logic phân nhánh.',
          metricBadge: { label: 'Tùy biến câu hỏi', value: '10+ Loại trường' },
        },
        {
          id: 'survey-approval-workflow',
          tag: 'Luồng phê duyệt',
          title: 'Quy Trình Phê Duyệt Khảo Sát Tự Động Trước Khi Ban Hành',
          description: 'Tích hợp luồng xét duyệt nội dung khảo sát qua HR Manager hoặc Ban Giám Đốc trước khi tự động gửi thông báo tới toàn thể nhân viên.',
          metricBadge: { label: 'Kiểm duyệt nội dung', value: '100% chuẩn mực' },
        },
        {
          id: 'enps-analytics',
          tag: 'Chỉ số eNPS',
          title: 'Phân Tích Chỉ Số eNPS & Biểu Đồ Cảm Xúc Realtime',
          description: 'Đo lường mức độ hài lòng, phân loại nhóm ủng hộ (Promoters), trung lập (Passives) và cần cải thiện (Detractors) kèm phân tích theo phòng ban.',
          metricBadge: { label: 'Đo lường gắn kết', value: 'Realtime eNPS' },
        },
        {
          id: 'confidential-mailbox',
          tag: 'Hộp thư bảo mật',
          title: 'Hộp Thư Góp Ý Điện Tử Bảo Mật Tới Ban Lãnh Đạo',
          description: 'Kênh tiếp nhận tâm tư nguyện vọng của nhân viên: Lựa chọn định danh hoặc gửi ẩn danh mã hóa hoàn toàn, chống lộ danh tính người gửi.',
          metricBadge: { label: 'Bảo mật danh tính', value: 'Mã hóa 100%' },
        },
        {
          id: 'sla-response-tracking',
          tag: 'Cam kết giải quyết',
          title: 'Theo Dõi Tiến Độ Giải Quyết Ý Kiến Góp Ý (SLA 48h)',
          description: 'Cấp mã tra cứu bí mật cho người gửi, thiết lập thời hạn phản hồi giải quyết cho từng bộ phận phụ trách và gửi thông báo bảo mật.',
          metricBadge: { label: 'Thời hạn phản hồi', value: 'Cam kết 48 Giờ' },
        },
        {
          id: 'culture-retention',
          tag: 'Văn hóa & Giữ chân',
          title: 'Cải Thiện Văn Hóa Doanh Nghiệp & Tỷ Lệ Giữ Chân Nhân Tài',
          description: 'Chuyển hóa dữ liệu khảo sát và ý kiến đóng góp thành hành động cụ thể, xây dựng môi trường làm việc cởi mở, minh bạch và gắn kết.',
          metricBadge: { label: 'Giữ chân nhân tài', value: '+22% Tỷ lệ gắn bó' },
        },
      ]
    : [
        {
          id: 'survey-builder',
          tag: 'Survey Builder',
          title: 'Visual Survey Designer with Multi-Type Question Blocks',
          description: 'Construct flexible feedback questionnaires: Likert scales, multi-choice, rating matrices, and rich-text prompts with conditional logic branching.',
          metricBadge: { label: 'Question Types', value: '10+ Input Formats' },
        },
        {
          id: 'survey-approval-workflow',
          tag: 'Survey Workflow',
          title: 'Automated Survey Review & Pre-Broadcast Approvals',
          description: 'Ensure survey rigor through integrated review routing: HR review, department sign-off, and automated scheduling to targeted employee cohorts.',
          metricBadge: { label: 'Editorial Review', value: '100% Policy-Safe' },
        },
        {
          id: 'enps-analytics',
          tag: 'eNPS Analytics',
          title: 'Real-Time Employee Net Promoter Score (eNPS) Radar',
          description: 'Track sentiment metrics, segment employee cohorts (Promoters, Passives, Detractors), and analyze retention trends across branches and departments.',
          metricBadge: { label: 'Sentiment Metric', value: 'Real-time eNPS' },
        },
        {
          id: 'confidential-mailbox',
          tag: 'Encrypted Mailbox',
          title: 'Confidential & Direct Leadership Feedback Mailbox',
          description: 'Provide staff with safe channels to voice concerns: choose between signed submissions or fully cryptographically shielded anonymous submissions.',
          metricBadge: { label: 'Whistleblower Shield', value: '100% Zero-Leak' },
        },
        {
          id: 'sla-response-tracking',
          tag: 'Resolution SLA',
          title: 'Tracking Feedback Resolution with 48h SLA Tracking',
          description: 'Assign unique anonymous inquiry codes, route feedback to responsible operational heads, and guarantee audited 48-hour response closure.',
          metricBadge: { label: 'Resolution Window', value: '48h SLA Target' },
        },
        {
          id: 'culture-retention',
          tag: 'Culture & Retention',
          title: 'Actionable Workplace Insights & Talent Retention Driver',
          description: 'Transform pulse data into concrete leadership actions, fostering psychological safety, workplace trust, and long-term organizational health.',
          metricBadge: { label: 'Talent Retention', value: '+22% Retention' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Khảo Sát & Góp Ý' : 'Surveys & Feedback Module'}
          title={
            isVi
              ? ['Lắng nghe tiếng nói.', 'Nâng tầm văn hóa tổ chức.']
              : ['Listen to employee voices.', 'Elevate workplace trust.']
          }
          subtitle={
            isVi
              ? 'Trình tạo khảo sát trực quan, đo lường chỉ số eNPS theo thời gian thực và hộp thư góp ý điện tử bảo mật danh tính trực tiếp tới Ban Lãnh đạo.'
              : 'Visual pulse surveys, real-time eNPS analytics, and cryptographically shielded direct leadership feedback mailboxes under one cultural health platform.'
          }
          tags={
            isVi
              ? [
                  'Survey Builder kéo thả',
                  'Phê duyệt nội dung khảo sát',
                  'Chỉ số gắn kết eNPS',
                  'Hộp thư góp ý bảo mật',
                  'Cam kết SLA phản hồi 48h',
                  'Báo cáo cảm xúc tổ chức',
                ]
              : [
                  'Visual Survey Builder',
                  'Pre-Broadcast Review Flow',
                  'Real-Time eNPS Radar',
                  'Encrypted Direct Mailbox',
                  '48h SLA Resolution Tracking',
                  'Organizational Sentiment Pulse',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Đo lường sự gắn kết & minh bạch ý kiến nội bộ' : 'Measuring Engagement with Trust and Accountability'}
          subtitle={
            isVi
              ? 'Trao cho mọi nhân viên kênh lên tiếng an toàn và cung cấp cho ban lãnh đạo bức tranh trung thực nhất về sức khỏe tổ chức.'
              : 'Give every team member a safe voice and empower executive leadership with real-time, unfiltered organizational pulse.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Khảo Sát & Hộp Thư Góp Ý' : 'Surveys & Culture Mailbox'} />

        <Footer />
      </main>
    </>
  );
}
