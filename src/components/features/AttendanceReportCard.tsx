import React from 'react';

export function AttendanceReportCard() {
  return (
    <div className="scroll-fade-up delay-75 bg-[#FAFAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Graphic: Attendance Report Box */}
      <div className="relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 mb-6 shadow-xs overflow-hidden">
        {/* Mép thẻ mờ hai bên tạo chiều sâu 3D */}
        <div className="absolute -left-12 top-6 bottom-6 w-16 bg-slate-50 border border-slate-100 rounded-xl opacity-60 pointer-events-none" />
        <div className="absolute -right-12 top-6 bottom-6 w-16 bg-slate-50 border border-slate-100 rounded-xl opacity-60 pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-gray-700">Time Logs &amp; Velocity</span>
          <span className="text-[10px] font-medium text-gray-400 bg-slate-50 px-2 py-0.5 rounded-full border border-gray-100">
            Weekly ▾
          </span>
        </div>

        {/* Graphic with Mon-Fri Axis & +17% Badge */}
        <div className="relative z-10 h-28 flex items-end justify-between gap-2 pt-2 px-1">
          <div className="absolute top-8 left-6 right-2 border-b border-dashed border-slate-300/80 pointer-events-none" />

          <div className="flex flex-col justify-between h-20 text-[9px] text-gray-400 pr-1">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>

          {/* Cột 1 */}
          <div className="w-full flex flex-col items-center">
            <div
              className="chart-bar w-full bg-[#FF4D38]/30 rounded-t-md h-12"
              style={{ transitionDelay: '200ms' }}
            />
          </div>
          {/* Cột 2 */}
          <div className="w-full flex flex-col items-center">
            <div
              className="chart-bar w-full bg-[#FF4D38]/50 rounded-t-md h-16"
              style={{ transitionDelay: '300ms' }}
            />
          </div>
          {/* Cột 3 - Cao nhất kèm Badge đen +17% */}
          <div className="w-full flex flex-col items-center relative">
            <span
              className="chart-badge absolute -top-6 text-[9px] font-bold bg-black text-white px-1.5 py-0.5 rounded-md shadow-xs"
              style={{ transitionDelay: '500ms' }}
            >
              +17%
            </span>
            <div
              className="chart-bar w-full bg-[#7C6AF7] rounded-t-md h-24 shadow-sm shadow-indigo-300/50"
              style={{ transitionDelay: '450ms' }}
            />
          </div>
          {/* Cột 4 */}
          <div className="w-full flex flex-col items-center">
            <div
              className="chart-bar w-full bg-[#7C6AF7]/60 rounded-t-md h-16"
              style={{ transitionDelay: '550ms' }}
            />
          </div>
          {/* Cột 5 */}
          <div className="w-full flex flex-col items-center">
            <div
              className="chart-bar w-full bg-[#FF4D38]/70 rounded-t-md h-20"
              style={{ transitionDelay: '650ms' }}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Projects, Kanban &amp; Time Logs</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Manage workflows with drag-and-drop Kanban, log billable project hours, and track team velocity automatically.
        </p>
      </div>
    </div>
  );
}
