'use client';

import React, { useState } from 'react';
import { QuantumShieldGraphic } from '@/components/ui/UIIcons';

interface Props {
  isVi?: boolean;
}

export function InteractiveCasbinShield({ isVi }: Props) {
  const [permissions, setPermissions] = useState<Record<string, boolean>>({
    'admin:all': true,
    'mgr:projects_write': true,
    'mgr:payroll_view': false,
    'auditor:audit_read': true,
    'auditor:system_modify': false,
  });

  const togglePermission = (key: string) => {
    setPermissions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-4 sm:p-6 border border-slate-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Col: 3D Holographic Quantum Shield Center */}
        <div className="lg:col-span-6 relative min-h-[290px] sm:min-h-[380px] flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-white to-slate-50/60 rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          {/* Rotating cryptographic rings */}
          <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full border border-dashed border-indigo-200/80 animate-spin" style={{ animationDuration: '40s' }}></div>
          <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border border-dashed border-emerald-200/80 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full bg-indigo-50/60 animate-ping" style={{ animationDuration: '4s' }}></div>

          {/* Central 3D Quantum Shield */}
          <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-tr from-indigo-500 via-[#6366F1] to-[#FF4D38] shadow-2xl shadow-indigo-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-xl sm:rounded-2xl bg-white flex flex-col items-center justify-center relative overflow-hidden">
              <QuantumShieldGraphic className="w-11 h-11 sm:w-14 sm:h-14 text-indigo-600 drop-shadow-md" />
              <div className="absolute bottom-1 px-1.5 py-0.5 rounded bg-emerald-100 text-[8px] font-black text-emerald-800 uppercase tracking-widest">
                VERIFIED
              </div>
            </div>
          </div>

          <p className="relative z-10 mt-3 sm:mt-4 text-[10px] sm:text-xs font-bold font-mono text-slate-800 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            CASBIN_RBAC_ENFORCER // v2.6
          </p>
          <span className="relative z-10 text-[10px] sm:text-[11px] text-emerald-600 font-bold mt-1 sm:mt-1.5 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            {isVi ? 'Đánh giá chính sách: < 0.04ms' : 'Policy Evaluation: < 0.04ms'}
          </span>
        </div>

        {/* Right Col: Interactive RBAC Matrix Simulator */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {isVi ? 'Trình Thử Nghiệm Ma Trận Phân Quyền Casbin' : 'Casbin Access Matrix Simulator'}
              </span>
              <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                {isVi ? 'Thử nghiệm' : 'Interactive'}
              </span>
            </div>

            {/* Matrix Rules */}
            <div className="space-y-2">
              {[
                {
                  key: 'admin:all',
                  role: 'Role: SuperAdmin',
                  action: 'All Resources (*)',
                  defaultDesc: isVi ? 'Toàn quyền cụm máy chủ' : 'Root Cluster Access',
                },
                {
                  key: 'mgr:projects_write',
                  role: 'Role: Ops Manager',
                  action: 'Projects:Write & Approve',
                  defaultDesc: isVi ? 'Sprint & Phiếu chi vật tư' : 'Sprint & Vouchers',
                },
                {
                  key: 'mgr:payroll_view',
                  role: 'Role: Ops Manager',
                  action: 'Payroll:ConfidentialView',
                  defaultDesc: isVi ? 'Dữ liệu lương mật' : 'Salary Master Data',
                },
                {
                  key: 'auditor:audit_read',
                  role: 'Role: Compliance',
                  action: 'AuditLogs:ImmutableRead',
                  defaultDesc: isVi ? 'Nhật ký kiểm toán bất biến' : 'Tamper-Proof Stream',
                },
                {
                  key: 'auditor:system_modify',
                  role: 'Role: Compliance',
                  action: 'SystemConfig:Write',
                  defaultDesc: isVi ? 'Tham số nhân hệ thống' : 'Kernel Parameter',
                },
              ].map((rule) => {
                const isAllowed = permissions[rule.key];
                return (
                  <div
                    key={rule.key}
                    onClick={() => togglePermission(rule.key)}
                    className={`p-2 sm:p-2.5 rounded-xl border flex items-center justify-between gap-2 transition-all cursor-pointer select-none ${
                      isAllowed
                        ? 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-300'
                        : 'bg-rose-50/50 border-rose-200 hover:border-rose-300'
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-900">{rule.role}</span>
                        <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.2 rounded bg-white border text-slate-600 truncate max-w-[120px] sm:max-w-none">
                          {rule.action}
                        </span>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 truncate">{rule.defaultDesc}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                          isAllowed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {isVi ? (isAllowed ? 'CHO PHÉP' : 'TỪ CHỐI') : (isAllowed ? 'ALLOW' : 'DENY')}
                      </span>
                      <div
                        className={`w-8 h-4 rounded-full p-0.5 transition-colors ${
                          isAllowed ? 'bg-emerald-500' : 'bg-slate-300'
                        }`}
                      >
                        <div
                          className={`w-3 h-3 rounded-full bg-white transition-transform ${
                            isAllowed ? 'translate-x-4' : 'translate-x-0'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[10px] text-slate-400 text-center font-mono">
              {isVi ? 'Nhấp vào từng dòng để kích hoạt / vô hiệu hóa chính sách thời gian thực' : 'Click any row to test dynamic Casbin policy enforcement in real-time'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
