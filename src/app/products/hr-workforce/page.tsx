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
          tag: 'Tổ chức',
          title: 'Sơ đồ tổ chức đa cấp & Chi nhánh',
          description: 'Mô hình hóa toàn bộ ma trận doanh nghiệp: công ty mẹ, chi nhánh, phòng ban và đội nhóm với tuyến báo cáo trực tiếp/gián tiếp.',
          metricBadge: { label: 'Khả năng mở rộng', value: 'Không giới hạn cấp' },
        },
        {
          id: 'profile-360',
          tag: 'Hồ sơ',
          title: 'Hồ sơ nhân sự 360° tập trung',
          description: 'Lưu trữ toàn diện thông tin hợp đồng, tài khoản ngân hàng nhận lương, giảm trừ gia cảnh NPT TNCN, quá trình công tác và khen thưởng.',
          metricBadge: { label: 'Chuẩn hóa hồ sơ', value: '100% số hóa' },
        },
        {
          id: 'multi-shifts',
          tag: 'Chấm công',
          title: 'Chấm công đa ca linh hoạt',
          description: 'Hỗ trợ ca xoay, ca gãy, ca đêm kết hợp xác thực đa phương thức: nhận diện khuôn mặt AI, GPS Geofencing và Wifi công ty.',
          metricBadge: { label: 'Tỷ lệ chính xác', value: '99.98% chống gian lận' },
        },
        {
          id: 'approvals',
          tag: 'Quy trình',
          title: 'Phê duyệt nghỉ phép & Tăng ca đa cấp',
          description: 'Định tuyến phê duyệt 2-3 cấp kèm cảnh báo SLA, tự động trừ phép năm và kiểm tra hạn mức tăng ca theo Bộ luật Lao động.',
          metricBadge: { label: 'Thời gian duyệt', value: '< 2 giờ làm việc' },
        },
        {
          id: 'payroll',
          tag: 'Lương bổng',
          title: 'Tính lương tự động & Phiếu lương',
          description: 'Tự động tổng hợp bảng công thực tế, tính toán làm thêm giờ OT, bảo hiểm xã hội, thuế TNCN và gửi phiếu lương bảo mật.',
          metricBadge: { label: 'Rút ngắn thời gian', value: 'Từ 5 ngày xuống 1 giờ' },
        },
        {
          id: 'onboarding',
          tag: 'Vòng đời',
          title: 'Onboarding & Luân chuyển nhân sự',
          description: 'Tự động hóa luồng tiếp nhận nhân viên mới, bàn giao trang thiết bị văn phòng và điều chuyển phòng ban không gián đoạn quyền hạn.',
          metricBadge: { label: 'Trải nghiệm nhân viên', value: 'Tiếp nhận liền mạch' },
        },
      ]
    : [
        {
          id: 'org-tree',
          tag: 'Hierarchy',
          title: 'Multi-Level Org Matrix & Reporting Lines',
          description: 'Model parent corporations, subsidiaries, business units, and cross-functional teams with dynamic multi-manager reporting.',
          metricBadge: { label: 'Scalability', value: 'Unlimited Depth' },
        },
        {
          id: 'profile-360',
          tag: '360° Files',
          title: 'Unified Employee 360° Repository',
          description: 'Centralized repository covering employment contracts, salary bank accounts, tax dependents, skills matrix, and career milestones.',
          metricBadge: { label: 'Digital Records', value: '100% Paperless' },
        },
        {
          id: 'multi-shifts',
          tag: 'Attendance',
          title: 'Multi-Shift Scheduling & Geofenced Clock-in',
          description: 'Support complex rotating shifts with multi-factor check-in: AI facial recognition, GPS perimeter fences, and enterprise Wifi BSSID.',
          metricBadge: { label: 'Verification', value: '99.98% Anti-Spoofing' },
        },
        {
          id: 'approvals',
          tag: 'Workflows',
          title: 'Multi-Manager Leave & Overtime Routing',
          description: 'Automated 2-step approval routing with statutory overtime limits enforcement, SLA escalations, and live balance recalculations.',
          metricBadge: { label: 'Approval Speed', value: '< 2 Working Hours' },
        },
        {
          id: 'payroll',
          tag: 'Compensation',
          title: 'Automated Timesheet Close & Payroll Engine',
          description: 'Aggregate attendance time entries into automated payroll formulas, social insurance deductions, tax calculations, and digital payslips.',
          metricBadge: { label: 'Processing Speed', value: '5 Days Down to 1 Hr' },
        },
        {
          id: 'onboarding',
          tag: 'Lifecycle',
          title: 'Automated Onboarding & Transfers',
          description: 'Streamline hire-to-retire journeys: automated equipment allocation, credential issuing, and departmental transfers without permission leaks.',
          metricBadge: { label: 'Employee NPS', value: 'Frictionless Journey' },
        },
      ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1440px] mx-auto space-y-12 sm:space-y-24 md:space-y-32 relative px-2.5 sm:px-6 lg:px-8 pb-16">
        <SubpageHero
          categoryBadge={isVi ? 'Phân hệ Tổ chức & Nhân sự' : 'HR & Workforce Module'}
          title={
            isVi
              ? ['Vận hành nhân sự thông minh.', 'Tự động hóa từ chấm công đến lương.']
              : ['Smart People Operations.', 'From Attendance to Payroll.']
          }
          subtitle={
            isVi
              ? 'Commadesk HR & Workforce chuyển đổi toàn bộ quy trình nhân sự thủ công thành luồng tự động khép kín: sơ đồ tổ chức đa cấp, chấm công sinh trắc học, phê duyệt đa cấp và tự động hóa bảng lương.'
              : 'Commadesk HR & Workforce replaces fragmented spreadsheets with an end-to-end operational engine: multi-level org trees, biometric multi-shift attendance, and automated payroll.'
          }
          tags={[
            'Dynamic Org Chart',
            '360° Employee Records',
            'Biometric Face Clock-in',
            'Multi-Manager Routing',
            'Automated Timesheets',
            'Statutory Payroll',
          ]}
          visualPreview={visualPreview}
        />

        <SubpageFeaturesGrid
          badge={isVi ? 'Năng lực nhân sự' : 'Workforce Capabilities'}
          title={isVi ? 'Hệ điều hành quản trị nhân sự hiện đại' : 'Complete People Operations Platform'}
          subtitle={
            isVi
              ? 'Xây dựng môi trường làm việc minh bạch, giảm thiểu 90% thời gian xử lý thủ công cho phòng nhân sự và tạo trải nghiệm tốt nhất cho người lao động.'
              : 'Deliver transparency, eliminate 90% of manual HR workload, and elevate the workplace experience across your enterprise.'
          }
          features={features}
        />

        <SubpageCTA moduleName={isVi ? 'Tổ chức & Nhân sự' : 'HR & Workforce'} />

        <Footer />
      </main>
    </>
  );
}
