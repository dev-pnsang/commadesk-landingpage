'use client';

import React, { useState } from 'react';

interface Props {
  isVi?: boolean;
}

export function InteractiveOrgOrbit({ isVi }: Props) {
  const [activeShift, setActiveShift] = useState<'morning' | 'night' | 'remote'>('morning');

  const shiftStats = {
    morning: { rate: '98.6%', count: '1,420 Active', gps: 'Hanoi HQ Geofence' },
    night: { rate: '99.4%', count: '380 Active', gps: '24/7 Security & Ops' },
    remote: { rate: '100%', count: '650 Active', gps: 'Verified GPS & Face ID' },
  };

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-4 sm:p-6 border border-slate-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Col: 3D Holographic Org Orbit (Neural Team Graph) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[350px] sm:min-h-[420px] bg-gradient-to-b from-white via-indigo-50/20 to-slate-50 rounded-2xl border border-slate-200/80 p-3 sm:p-6 overflow-hidden shadow-xs">
          {/* Subtle concentric orbit rings */}
          <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-indigo-200/80 animate-spin" style={{ animationDuration: '60s' }}></div>
          <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-dashed border-slate-300/80 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}></div>
          <div className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full bg-indigo-50/70 border border-indigo-100 animate-ping" style={{ animationDuration: '3.5s' }}></div>

          {/* SVG Connecting Ray Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-indigo-200/70" strokeWidth="1.5" strokeDasharray="3 3">
            <line x1="50%" y1="50%" x2="22%" y2="20%" />
            <line x1="50%" y1="50%" x2="78%" y2="20%" />
            <line x1="50%" y1="50%" x2="22%" y2="80%" />
            <line x1="50%" y1="50%" x2="78%" y2="80%" />
          </svg>

          {/* Central Hub Node (Holographic Executive Core) */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-tr from-[#FF4D38] via-indigo-600 to-purple-600 shadow-xl sm:shadow-2xl shadow-indigo-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white flex flex-col items-center justify-center relative overflow-hidden p-1.5 sm:p-2 text-center">
                {/* 3D Core Icon */}
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#FF4D38] to-indigo-600 text-white flex items-center justify-center text-sm sm:text-lg shadow-md mb-0.5 sm:mb-1">
                  🏛️
                </div>
                <span className="text-[9px] sm:text-[10px] font-black text-slate-900 tracking-tight leading-none uppercase">
                  {isVi ? 'Ban Điều Hành' : 'Executive Core'}
                </span>
                <span className="text-[7px] sm:text-[8px] font-mono text-indigo-600 font-bold mt-0.5">
                  LEVEL 0
                </span>
              </div>
            </div>
            <span className="mt-1.5 sm:mt-2 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs">
              {isVi ? 'Sơ Đồ Tổ Chức 360°' : '360° Org Hierarchy'}
            </span>
          </div>

          {/* Orbiting Department Nodes */}
          {[
            {
              role: isVi ? 'Khối Kỹ Thuật' : 'Engineering Core',
              lead: 'Elena Rostova',
              avatar: '/avatars/elena_rostova_hd.jpg',
              pos: 'top-3 sm:top-6 right-2 sm:right-10',
              badge: 'Sprint 14',
              color: 'text-indigo-600 bg-indigo-50',
            },
            {
              role: isVi ? 'Khối Vận Hành' : 'Operations Ops',
              lead: 'James Carter',
              avatar: '/avatars/james_carter_hd.jpg',
              pos: 'top-3 sm:top-6 left-2 sm:left-10',
              badge: '99.8% SLA',
              color: 'text-emerald-600 bg-emerald-50',
            },
            {
              role: isVi ? 'Khối Nhân Sự' : 'People & Culture',
              lead: 'David Chen',
              avatar: '/avatars/david_chen_hd.jpg',
              pos: 'bottom-3 sm:bottom-6 left-2 sm:left-10',
              badge: 'Synced',
              color: 'text-amber-600 bg-amber-50',
            },
            {
              role: isVi ? 'Khối Dự Án' : 'PMO Portfolio',
              lead: 'Sophia Lin',
              avatar: '/avatars/sophia_lin_hd.jpg',
              pos: 'bottom-3 sm:bottom-6 right-2 sm:right-10',
              badge: '18 Active',
              color: 'text-rose-600 bg-rose-50',
            },
          ].map((node, i) => (
            <div
              key={i}
              className={`absolute ${node.pos} z-10 flex items-center gap-1.5 sm:gap-2.5 p-1 pr-2 sm:p-1.5 sm:pr-3.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 animate-float`}
              style={{ animationDelay: `${i * 0.75}s` }}
            >
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white shadow-xs shrink-0 relative bg-slate-100">
                {/* Standard HTML img tag guarantees instantaneous 100% rendering without layout shift */}
                <img
                  src={node.avatar}
                  alt={node.lead}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <p className="text-[9px] sm:text-[11px] font-bold text-slate-800 leading-tight">{node.role}</p>
                <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5">
                  <span className="text-[8px] sm:text-[9px] text-slate-500 font-medium">{node.lead}</span>
                  <span className={`text-[7px] sm:text-[8px] font-bold px-1 sm:px-1.5 py-0.2 rounded-full ${node.color}`}>
                    {node.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Col: Biometric Shift Engine Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {isVi ? 'Chấm Công Sinh Trắc Học AI' : 'AI Biometric Check-in'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 animate-pulse">
                {shiftStats[activeShift].gps}
              </span>
            </div>

            {/* Shift Selectors */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
              {[
                { id: 'morning', label: isVi ? 'Ca Sáng' : 'Morning Shift' },
                { id: 'night', label: isVi ? 'Ca Đêm' : 'Night Shift' },
                { id: 'remote', label: isVi ? 'Từ Xa' : 'Remote Hub' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveShift(s.id as any)}
                  className={`py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                    activeShift === s.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-black'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Live Scan Preview */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl shadow-md shadow-emerald-500/20">
                📷
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-emerald-950">
                    {isVi ? 'Nhận diện gương mặt 3D: 0.12s' : '3D Face Recognition: 0.12s'}
                  </p>
                  <span className="text-xs font-bold font-mono text-emerald-700">
                    {shiftStats[activeShift].rate}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-700">
                  {isVi ? 'Chống giả mạo ảnh tĩnh & video deepfake' : 'Anti-spoofing with liveness detection'}
                </p>
              </div>
            </div>

            {/* Automated Payroll sync */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>{isVi ? 'Đồng bộ bảng lương tự động:' : 'Automated Payroll Sync:'}</span>
              <span className="font-bold text-slate-900 font-mono">100% On Time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
