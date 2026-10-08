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
          description: 'Mô hình hóa toàn bộ cơ cấu doanh nghiệp: công ty mẹ, công ty con, chi nhánh (Org Units) và phòng ban với tuyến báo cáo trực tiếp/gián tiếp đa quản lý.',
          metricBadge: { label: 'Khả năng mở rộng', value: 'Không giới hạn cấp' },
        },
        {
          id: 'profile-360',
          tag: 'Hồ sơ số hóa',
          title: 'Hồ sơ nhân sự 360° & Danh bạ Directory',
          description: 'Số hóa toàn diện thông tin nhân sự: hợp đồng lao động, tài khoản ngân hàng nhận lương, giảm trừ gia cảnh NPT TNCN, bằng cấp chứng chỉ và tìm kiếm danh bạ tức thì.',
          metricBadge: { label: 'Chuẩn hóa hồ sơ', value: '100% số hóa' },
        },
        {
          id: 'multi-shifts',
          tag: 'Chấm công đa thức',
          title: 'Chấm công đa ca linh hoạt: Kiosk, Face AI & GPS',
          description: 'Hỗ trợ ca xoay, ca gãy, ca đêm kết hợp đa phương thức xác thực: nhận diện khuôn mặt Face AI (<200ms), Kiosk màn hình, Mobile GPS Geofencing và API máy chấm công.',
          metricBadge: { label: 'Tỷ lệ chính xác', value: '99.98% chống gian lận' },
        },
        {
          id: 'approvals',
          tag: 'Luồng phê duyệt',
          title: 'Phê duyệt nghỉ phép & Tăng ca OT đa cấp',
          description: 'Định tuyến phê duyệt 2-3 cấp kèm cảnh báo SLA, tự động trừ quỹ phép năm, kiểm tra trần giờ làm thêm theo Bộ luật Lao động và gửi thông báo Email CC.',
          metricBadge: { label: 'Thời gian duyệt', value: '< 2 giờ làm việc' },
        },
        {
          id: 'payroll',
          tag: 'Lương bổng & Bảng công',
          title: 'Bảng công Work Entries & Tính lương tự động',
          description: 'Tự động tổng hợp bảng công thực tế (Work Entries), tính toán làm thêm giờ OT, trích đóng bảo hiểm xã hội, thuế TNCN và phát hành phiếu lương số bảo mật.',
          metricBadge: { label: 'Rút ngắn thời gian', value: 'Từ 5 ngày xuống 1 giờ' },
        },
        {
          id: 'hr-analytics',
          tag: 'Báo cáo chuyên sâu',
          title: 'HR Analytics (RPT-05/06/07) & Vòng đời Onboarding',
          description: 'Bộ 3 báo cáo chuyên sâu về cơ cấu nhân sự, kỷ luật thời gian, phân tích vắng mặt kết hợp tự động hóa quy trình tiếp nhận nhân sự mới và thu hồi tài sản khi thôi việc.',
          metricBadge: { label: 'Báo cáo HR', value: 'Chuẩn ISO/Kiểm toán' },
        },
      ]
    : [
        {
          id: 'org-tree',
          tag: 'Hierarchy Matrix',
          title: 'Multi-Level Org Matrix, Branches & Multi-Manager',
          description: 'Model parent corporations, subsidiaries, branch units (Org Units), and cross-functional teams with dynamic multi-manager reporting structures.',
          metricBadge: { label: 'Scalability', value: 'Unlimited Depth' },
        },
        {
          id: 'profile-360',
          tag: '360° Digital Files',
          title: 'Unified Employee 360° Files & Directory',
          description: 'Centralized repository covering employment contracts, salary bank accounts, tax dependents (PIT), credentials, certifications, and instant staff directory lookups.',
          metricBadge: { label: 'Digital Records', value: '100% Paperless' },
        },
        {
          id: 'multi-shifts',
          tag: 'Multi-Modal Clock-in',
          title: 'Multi-Shift Scheduling: Kiosk, Face AI & GPS Fences',
          description: 'Support complex rotating and night shifts with multi-factor check-in: AI facial recognition (<200ms), tablet Kiosk, GPS perimeter fences, and time clock device APIs.',
          metricBadge: { label: 'Anti-Spoofing', value: '99.98% Accuracy' },
        },
        {
          id: 'approvals',
          tag: 'Approval Workflows',
          title: 'Multi-Manager Leave & Overtime (OT) Routing',
          description: 'Automated 2-step approval routing with statutory overtime limit checks, automated annual leave deduction, SLA escalations, and automated Email CC notifications.',
          metricBadge: { label: 'Approval Speed', value: '< 2 Working Hours' },
        },
        {
          id: 'payroll',
          tag: 'Compensation Engine',
          title: 'Work Entries Timesheets & Automated Payroll',
          description: 'Aggregate attendance time records into unified Work Entries, automate payroll formulas, statutory insurance deductions, PIT tax, and encrypted digital payslips.',
          metricBadge: { label: 'Processing Speed', value: '5 Days Down to 1 Hr' },
        },
        {
          id: 'hr-analytics',
          tag: 'Advanced Analytics',
          title: 'HR Analytics (RPT-05/06/07) & Onboarding Lifecycles',
          description: 'Deep-dive HR reports covering workforce demographics, attendance discipline, absenteeism trends, and automated employee onboarding/offboarding workflows.',
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
