'use client';

import React from 'react';
import { Navbar } from '@/components/header/Navbar';
import { Footer } from '@/components/footer/Footer';
import { SubpageHero } from '@/components/subpage/SubpageHero';
import { SubpageFeaturesGrid, SubpageFeatureItem } from '@/components/subpage/SubpageFeaturesGrid';
import { SubpageCTA } from '@/components/subpage/SubpageCTA';
import { useLanguage } from '@/i18n/LanguageContext';

import { InteractiveOrgOrbit } from '@/components/showcase/InteractiveOrgOrbit';

export default function HrWorkforcePage() {
  const { language } = useLanguage();
  const isVi = language === 'vi';

  const visualPreview = <InteractiveOrgOrbit isVi={isVi} />;

  const features: SubpageFeatureItem[] = isVi
    ? [
        {
          id: 'org-tree',
          tag: 'Tổ chức & Cây ma trận',
          title: 'Sơ đồ tổ chức đa cấp, Chi nhánh & Multi-Manager',
          description: 'Mô hình hóa cơ cấu công ty mẹ, chi nhánh và phòng ban với tuyến báo cáo đa cấp.',
          metricBadge: { label: 'Khả năng mở rộng', value: 'Không giới hạn cấp' },
        },
        {
          id: 'profile-360',
          tag: 'Hồ sơ số hóa',
          title: 'Hồ sơ nhân sự 360° & Danh bạ Directory',
          description: 'Số hóa hợp đồng lao động, tài khoản lương, thuế TNCN và danh bạ nhân sự tức thì.',
          metricBadge: { label: 'Chuẩn hóa hồ sơ', value: '100% số hóa' },
        },
        {
          id: 'multi-shifts',
          tag: 'Chấm công đa thức',
          title: 'Chấm công đa ca linh hoạt: Kiosk, Face AI & GPS',
          description: 'Chấm công nhận diện Face AI (<200ms), Mobile GPS và Kiosk chống gian lận.',
          metricBadge: { label: 'Tỷ lệ chính xác', value: '99.98% chống gian lận' },
        },
        {
          id: 'approvals',
          tag: 'Luồng phê duyệt',
          title: 'Phê duyệt nghỉ phép & Tăng ca OT đa cấp',
          description: 'Định tuyến duyệt nghỉ phép, làm thêm giờ OT tự động trừ phép kèm cảnh báo SLA.',
          metricBadge: { label: 'Thời gian duyệt', value: '< 2 giờ làm việc' },
        },
        {
          id: 'payroll',
          tag: 'Lương bổng & Bảng công',
          title: 'Bảng công Work Entries & Tính lương tự động',
          description: 'Tự động tính công, làm thêm giờ, thuế, bảo hiểm và phát hành phiếu lương bảo mật.',
          metricBadge: { label: 'Rút ngắn thời gian', value: 'Từ 5 ngày xuống 1 giờ' },
        },
        {
          id: 'hr-analytics',
          tag: 'Báo cáo chuyên sâu',
          title: 'HR Analytics (RPT-05/06/07) & Vòng đời Onboarding',
          description: 'Báo cáo cơ cấu nhân sự, biến động vắng mặt và tự động hóa quy trình Onboarding.',
          metricBadge: { label: 'Báo cáo HR', value: 'Chuẩn ISO/Kiểm toán' },
        },
      ]
    : [
        {
          id: 'org-tree',
          tag: 'Hierarchy Matrix',
          title: 'Multi-Level Org Matrix, Branches & Multi-Manager',
          description: 'Model corporate holding, subsidiaries, and departments with dynamic matrix trees.',
          metricBadge: { label: 'Scalability', value: 'Unlimited Depth' },
        },
        {
          id: 'profile-360',
          tag: '360° Digital Files',
          title: 'Unified Employee 360° Files & Directory',
          description: 'Digitize contracts, salary accounts, tax dependents, and corporate directory lookups.',
          metricBadge: { label: 'Digital Records', value: '100% Paperless' },
        },
        {
          id: 'multi-shifts',
          tag: 'Multi-Modal Clock-in',
          title: 'Multi-Shift Scheduling: Kiosk, Face AI & GPS Fences',
          description: 'High-speed Face AI (<200ms), tablet Kiosk, and GPS geofences against buddy punching.',
          metricBadge: { label: 'Anti-Spoofing', value: '99.98% Accuracy' },
        },
        {
          id: 'approvals',
          tag: 'Approval Workflows',
          title: 'Multi-Manager Leave & Overtime (OT) Routing',
          description: 'Automated approval routing with statutory overtime limit checks and SLA escalations.',
          metricBadge: { label: 'Approval Speed', value: '< 2 Working Hours' },
        },
        {
          id: 'payroll',
          tag: 'Compensation Engine',
          title: 'Work Entries Timesheets & Automated Payroll',
          description: 'Aggregate verified work entries, calculate taxes, insurance, and issue digital payslips.',
          metricBadge: { label: 'Processing Speed', value: '5 Days to 1 Hr' },
        },
        {
          id: 'hr-analytics',
          tag: 'Advanced Analytics',
          title: 'HR Analytics (RPT-05/06/07) & Onboarding Lifecycles',
          description: 'Workforce demographics, attendance trends, and automated paperless onboarding.',
          metricBadge: { label: 'HR Compliance', value: 'Audit-Ready Specs' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto flex flex-col gap-6 sm:gap-10 md:gap-12 lg:gap-14 relative px-2.5 sm:px-6 lg:px-8 pb-4 sm:pb-6 md:pb-6 lg:pb-6">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Tổ chức & Nhân sự' : 'HR & Workforce Module'}
          title={
            isVi
              ? ['Cơ cấu minh bạch.', 'Vận hành nhân sự chuẩn xác.']
              : ['Transparent hierarchy.', 'Effortless workforce operations.']
          }
          subtitle={
            isVi
              ? 'CommaDesk HR & Workforce hợp nhất sơ đồ tổ chức đa cấp, hồ sơ nhân sự 360°, chấm công sinh trắc học đa phương thức, báo cáo HR Analytics và đóng bảng lương tự động vào một hệ thống tập trung duy nhất.'
              : 'CommaDesk HR & Workforce unifies multi-level org charts, 360° employee dossiers, multi-modal biometric attendance, HR Analytics, and automated payroll into one centralized platform.'
          }
          tags={
            isVi
              ? [
                  'Sơ đồ tổ chức đa cấp',
                  'Hồ sơ nhân sự 360°',
                  'Chấm công Face AI & Kiosk',
                  'Định vị GPS Geofencing',
                  'Bảng công & Tính lương',
                  'Báo cáo HR Analytics',
                ]
              : [
                  'Multi-Level Org Matrix',
                  '360° Employee Dossier',
                  'Biometric Face AI & Kiosk',
                  'Mobile GPS Fencing',
                  'Work Entries & Payroll',
                  'HR Analytics RPT',
                ]
          }
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Khả năng cốt lõi' : 'Core Capabilities'}
          title={isVi ? 'Hệ điều hành nhân sự toàn diện' : 'Complete People Operations Operating System'}
          subtitle={
            isVi
              ? 'Chuẩn hóa toàn bộ vòng đời nhân viên từ tiếp nhận, chấm công phân ca, phê duyệt nghỉ phép đến tự động hóa tính lương và phân tích dữ liệu nguồn nhân lực.'
              : 'Standardize the entire employee lifecycle from onboarding, multi-shift attendance, leave approvals to automated payroll calculations and workforce analytics.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Tổ chức & Nhân sự' : 'HR & Workforce'} />

        <Footer />
      </main>
    </>
  );
}
