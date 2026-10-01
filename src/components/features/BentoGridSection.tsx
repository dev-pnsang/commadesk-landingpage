import React from 'react';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { AttendanceReportCard } from './AttendanceReportCard';
import { ManagersLeadersCard } from './ManagersLeadersCard';
import { LegalTeamsCard } from './LegalTeamsCard';
import { EmployeeDataCard } from './EmployeeDataCard';
import { TeamsEmployeesCard } from './TeamsEmployeesCard';

export function BentoGridSection() {
  return (
    <section
      id="features"
      className="canvas-card scroll-mt-32 sm:scroll-mt-36 md:scroll-mt-40 bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 px-4 sm:px-10 lg:px-14"
    >
      {/* Section Header */}
      <div className="scroll-blur-reveal text-center max-w-3xl mx-auto mb-14">
        <TextBlurWipe
          as="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
        >
          Built for everyone
        </TextBlurWipe>
        <p className="text-blur-wipe-sub mt-3 text-sm sm:text-base text-gray-500">
          Thousands of businesses, from startups to enterprises, use CoreShift to handle payments.
        </p>
      </div>

      {/* Bento Grid 5 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <AttendanceReportCard />
        <ManagersLeadersCard />
        <LegalTeamsCard />
        <EmployeeDataCard />
        <TeamsEmployeesCard />
      </div>
    </section>
  );
}
