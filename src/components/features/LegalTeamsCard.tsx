import React from 'react';

export function LegalTeamsCard() {
  return (
    <div className="scroll-fade-up delay-200 bg-[#FAFAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Graphic: Sọc kẻ dọc mờ + Hai tài liệu nghiêng + Khối tím 3D icon khiên check */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6 flex items-center justify-center min-h-[170px] relative overflow-hidden shadow-xs">
        {/* Vertical Lines Background */}
        <div className="absolute inset-0 flex justify-between px-8 pointer-events-none opacity-40">
          <div className="w-px h-full bg-slate-100" />
          <div className="w-px h-full bg-slate-100" />
          <div className="w-px h-full bg-slate-100" />
          <div className="w-px h-full bg-slate-100" />
          <div className="w-px h-full bg-slate-100" />
        </div>

        {/* Tài liệu nghiêng trái */}
        <div className="absolute w-24 h-32 bg-slate-50 rounded-xl border border-slate-200 shadow-md transform -rotate-12 -translate-x-6 p-2 space-y-1.5 opacity-90">
          <div className="w-8 h-2 bg-slate-200 rounded-full" />
          <div className="w-14 h-1.5 bg-slate-200/60 rounded-full" />
          <div className="w-10 h-1.5 bg-slate-200/60 rounded-full" />
        </div>
        {/* Tài liệu nghiêng phải */}
        <div className="absolute w-24 h-32 bg-slate-50 rounded-xl border border-slate-200 shadow-md transform rotate-12 translate-x-6 p-2 space-y-1.5 opacity-90">
          <div className="w-8 h-2 bg-slate-200 rounded-full" />
          <div className="w-14 h-1.5 bg-slate-200/60 rounded-full" />
          <div className="w-10 h-1.5 bg-slate-200/60 rounded-full" />
        </div>
        {/* Khối tím trung tâm với khiên check */}
        <div className="relative z-20 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B77FF] to-[#6A53F5] text-white flex items-center justify-center shadow-xl shadow-indigo-400/40 border border-white/80">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">For legal teams</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          CoreShift helps legal teams by streamlining compliance, managing contracts and policies.
        </p>
      </div>
    </div>
  );
}
