'use client';

import React, { useState } from 'react';
import {
  LaptopIcon,
  SmartphoneIcon,
  ZapIcon,
  ContainerIcon,
  WindowsIcon,
  LightbulbIcon,
  MapPinIcon,
  PenToolIcon,
  BellIcon,
  CheckIcon,
} from '@/components/ui/UIIcons';

interface Props {
  isVi?: boolean;
}

export function InteractiveDeploymentHub({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile' | 'hybrid' | 'docker'>('desktop');

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-4 sm:p-6 border border-slate-200/80">
      {/* Top Controls: Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            {isVi ? 'Trung Tâm Điều Phối Đa Nền Tảng' : 'Multi-Platform Client & Infra Hub'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('desktop')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'desktop'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <LaptopIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Desktop Windows (.exe)' : 'Desktop (.exe)'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('mobile')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'mobile'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <SmartphoneIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Mobile Flutter' : 'Mobile Flutter'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('hybrid')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'hybrid'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ZapIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Kiến trúc Hybrid DB' : 'Hybrid DB'}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('docker')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'docker'
                ? 'bg-[#FF4D38] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <ContainerIcon className="w-3.5 h-3.5" />
            <span>{isVi ? 'Docker & On-Prem' : 'Docker Compose'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="min-h-[340px] flex items-center justify-center">
        {/* Tab 1: Desktop Electron Windows */}
        {activeTab === 'desktop' && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold text-sm">
                  <WindowsIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isVi ? 'Ứng dụng CommaDesk Desktop (Windows x64)' : 'CommaDesk Desktop Client (Windows x64)'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Electron Shell • Native Windows Installer • Auto-Updater Enabled
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                v2.4.0 (Latest Release)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Gói cài đặt' : 'Distribution'}
                </span>
                <p className="text-sm font-bold text-slate-800">CommaDesk-Setup.exe</p>
                <p className="text-[11px] text-slate-500">
                  {isVi ? 'Chỉ cần tải về và chạy, không phụ thuộc môi trường' : 'Self-contained executable with embedded runtime'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Tự động cập nhật' : 'Auto-Update Engine'}
                </span>
                <p className="text-sm font-bold text-slate-800">Delta Background Sync</p>
                <p className="text-[11px] text-slate-500">
                  {isVi ? 'Âm thầm tải bản vá và cập nhật khi khởi động lại' : 'Silent patch download with instant zero-downtime apply'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <span className="text-[10px] font-bold uppercase text-slate-400">
                  {isVi ? 'Đồng bộ dữ liệu' : 'Data Connection'}
                </span>
                <p className="text-sm font-bold text-slate-800">WebSocket Realtime</p>
                <p className="text-[11px] text-slate-500">
                  {isVi ? 'Kết nối an toàn tới máy chủ backend của tổ chức' : 'Live push notifications, instant chat & task alerts'}
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-sky-50/70 border border-sky-100 flex items-center justify-between text-xs text-sky-800">
              <div className="flex items-center gap-2">
                <LightbulbIcon className="w-4 h-4 text-sky-600 shrink-0" />
                <span>
                  {isVi
                    ? 'Khách hàng khối doanh nghiệp chỉ cần cài file installer, toàn bộ dữ liệu lưu trữ tập trung tại server bảo mật.'
                    : 'Enterprise staff only need the installer; all data resides securely on tenant-partitioned servers.'}
                </span>
              </div>
              <span className="font-mono font-bold text-[11px] bg-white px-2 py-0.5 rounded border border-sky-200">
                SHA-256 Verified
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Mobile Flutter */}
        {activeTab === 'mobile' && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold text-sm">
                  <SmartphoneIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isVi ? 'Ứng dụng CommaDesk Mobile (Flutter Native Parity)' : 'CommaDesk Mobile App (Flutter Native)'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Cross-Platform iOS &amp; Android • Native Shell • Parity Features
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-200">
                100% Core Parity
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-2">
                  <MapPinIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 mb-1">
                  {isVi ? 'Chấm công GPS & Khuôn mặt' : 'GPS Geofenced Check-in'}
                </h5>
                <p className="text-[11px] text-slate-500">
                  {isVi ? 'Xác thực tọa độ chi nhánh và đối khớp sinh trắc học thời gian thực' : 'Validates branch perimeter fences with anti-spoofing face match'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                  <PenToolIcon className="w-5 h-5 text-emerald-600" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 mb-1">
                  {isVi ? 'Duyệt đơn 1 chạm' : '1-Tap Manager Approvals'}
                </h5>
                <p className="text-[11px] text-slate-500">
                  {isVi ? 'Phê duyệt nghỉ phép, tăng ca OT và phiếu kho ngay trên màn hình khóa' : 'Approve time-off, overtime and warehouse vouchers instantly'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                  <BellIcon className="w-5 h-5 text-amber-600" />
                </div>
                <h5 className="text-xs font-bold text-slate-900 mb-1">
                  {isVi ? 'Thông báo Push & Chat Matrix' : 'Native Push & Matrix Chat'}
                </h5>
                <p className="text-[11px] text-slate-500">
                  {isVi ? 'Nhận thông báo sự cố SLA, nhắc việc và trò chuyện nội bộ tức thì' : 'SLA breach alerts, calendar reminders, and internal messaging'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Hybrid DB Architecture */}
        {activeTab === 'hybrid' && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  <ZapIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isVi ? 'Kiến trúc Định tuyến Dữ liệu Hỗn hợp (Hybrid DB Routing)' : 'Hybrid Database Routing Architecture'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Multi-Model OLTP + OLAP + In-Memory Caching Optimization
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
                Sub-millisecond Routing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-600">MySQL 8.0</span>
                  <span className="text-[9px] bg-blue-100/70 text-blue-800 px-1.5 py-0.5 rounded font-bold">OLTP</span>
                </div>
                <p className="text-xs font-bold text-slate-800">{isVi ? 'Nghiệp vụ Cốt lõi' : 'Transactional Core'}</p>
                <p className="text-[11px] text-slate-500">Tenants, Users, Projects, Vouchers, Documents, RBAC policies</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-amber-600">ClickHouse</span>
                  <span className="text-[9px] bg-amber-100/70 text-amber-800 px-1.5 py-0.5 rounded font-bold">OLAP</span>
                </div>
                <p className="text-xs font-bold text-slate-800">{isVi ? 'Chuỗi thời gian AI' : 'Timeseries Analytics'}</p>
                <p className="text-[11px] text-slate-500">AI camera detections, ANPR event logs, Heatmaps, GPS streams</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-rose-600">Redis 7</span>
                  <span className="text-[9px] bg-rose-100/70 text-rose-800 px-1.5 py-0.5 rounded font-bold">RAM</span>
                </div>
                <p className="text-xs font-bold text-slate-800">{isVi ? 'Bộ nhớ đệm & Queue' : 'Cache & Pub/Sub'}</p>
                <p className="text-[11px] text-slate-500">Live sessions, Casbin token cache, WebSocket event dispatcher</p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-purple-600">MinIO S3</span>
                  <span className="text-[9px] bg-purple-100/70 text-purple-800 px-1.5 py-0.5 rounded font-bold">Object</span>
                </div>
                <p className="text-xs font-bold text-slate-800">{isVi ? 'Lưu trữ tệp tin' : 'Cloud Storage'}</p>
                <p className="text-[11px] text-slate-500">Personal &amp; Org Drive, encrypted document scans, CCTV snapshots</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Docker & On-Premises */}
        {activeTab === 'docker' && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-5 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  <ContainerIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {isVi ? 'Triển khai Docker Compose & Private Cloud On-Premises' : 'Docker Compose & On-Premises Deployment'}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    1-Click Setup • Production Ready • Air-Gapped Capable
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                All Services Healthy
              </span>
            </div>

            {/* Simulated Clean Light Terminal */}
            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 font-mono text-xs space-y-1.5 text-slate-700">
              <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-slate-200/60 font-sans">
                <span>terminal@commadesk-host:~$ ./develop-setup.sh</span>
                <span className="text-emerald-600 font-bold">1-Click Automated</span>
              </div>
              <p className="text-slate-800 font-bold">$ docker compose -f docker/docker-compose.prod.yml up -d</p>
              <p className="text-emerald-600 flex items-center gap-1"><CheckIcon className="w-3.5 h-3.5 text-emerald-600" /> Network commadesk_default Created</p>
              <p className="text-emerald-600 flex items-center gap-1"><CheckIcon className="w-3.5 h-3.5 text-emerald-600" /> Container cp_db (MySQL 8.0) Started [healthy]</p>
              <p className="text-emerald-600 flex items-center gap-1"><CheckIcon className="w-3.5 h-3.5 text-emerald-600" /> Container cp_redis Started [healthy]</p>
              <p className="text-emerald-600 flex items-center gap-1"><CheckIcon className="w-3.5 h-3.5 text-emerald-600" /> Container cp_clickhouse Started [healthy]</p>
              <p className="text-emerald-600 flex items-center gap-1"><CheckIcon className="w-3.5 h-3.5 text-emerald-600" /> Container cp_backend (Gin/GORM API) Listening on :8080</p>
              <p className="text-emerald-600 flex items-center gap-1"><CheckIcon className="w-3.5 h-3.5 text-emerald-600" /> Container cp_frontend (Next.js 16) Listening on :3000</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] text-slate-400 uppercase font-bold">{isVi ? 'Thời gian khởi chạy' : 'Spin-up Time'}</span>
                <p className="font-bold text-slate-800">&lt; 3 phút</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] text-slate-400 uppercase font-bold">{isVi ? 'Khả năng cô lập' : 'Isolation'}</span>
                <p className="font-bold text-slate-800">100% On-Premises</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] text-slate-400 uppercase font-bold">{isVi ? 'Sao lưu dữ liệu' : 'Backup Engine'}</span>
                <p className="font-bold text-slate-800">OBB Automated</p>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                <span className="text-[10px] text-slate-400 uppercase font-bold">{isVi ? 'Chứng chỉ bảo mật' : 'Security'}</span>
                <p className="font-bold text-slate-800">Casbin RBAC</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
