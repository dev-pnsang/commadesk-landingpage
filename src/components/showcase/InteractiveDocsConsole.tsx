'use client';

import React, { useState } from 'react';

interface Props {
  isVi?: boolean;
}

export function InteractiveDocsConsole({ isVi }: Props) {
  const [activeTab, setActiveTab] = useState<'api' | 'webhooks' | 'casbin'>('api');
  const [selectedEndpoint, setSelectedEndpoint] = useState<'tasks' | 'auth' | 'checkin'>('tasks');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100/60 p-4 sm:p-6 border border-slate-200/80">
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            {isVi ? 'Bảng Điều Khiển Tích Hợp Kỹ Thuật' : 'Developer & API Integration Console'}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab('api')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'api'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            ⚡ {isVi ? 'REST API (OpenAPI 3.0)' : 'REST API Swagger'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('webhooks')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'webhooks'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            🪝 {isVi ? 'Webhooks Pipeline' : 'Webhooks Trace'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('casbin')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'casbin'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            🛡️ {isVi ? 'Ma Trận Quyền Casbin' : 'Casbin Policy'}
          </button>
        </div>
      </div>

      {/* Main Console Body */}
      <div className="min-h-[350px]">
        {/* Tab 1: REST API Explorer */}
        {activeTab === 'api' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  OPENAPI 3.0
                </span>
                <span className="text-xs text-slate-500">Base URL: <code className="text-slate-800 font-semibold font-mono">https://api.commadesk.app/v1</code></span>
              </div>
              <div className="flex items-center gap-1.5">
                {(['tasks', 'auth', 'checkin'] as const).map((ep) => (
                  <button
                    key={ep}
                    type="button"
                    onClick={() => setSelectedEndpoint(ep)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold transition-all cursor-pointer ${
                      selectedEndpoint === ep
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    /{ep}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Endpoint Request/Response Block */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 space-y-3 font-mono text-xs text-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    selectedEndpoint === 'tasks' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {selectedEndpoint === 'tasks' ? 'GET' : 'POST'}
                  </span>
                  <span className="font-bold text-slate-900">
                    {selectedEndpoint === 'tasks' && '/projects/tasks?sprint=14&status=in_progress'}
                    {selectedEndpoint === 'auth' && '/auth/token (JWT RS256)'}
                    {selectedEndpoint === 'checkin' && '/checkin/device-ingest (HMAC Signature)'}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-sans">
                  200 OK (24ms)
                </span>
              </div>

              {/* Code Snippet */}
              <div className="bg-white p-3 rounded-lg border border-slate-200/80 text-[11px] overflow-x-auto space-y-1">
                <p className="text-slate-400">// Response Payload (application/json)</p>
                {selectedEndpoint === 'tasks' && (
                  <pre className="text-slate-800 leading-relaxed">{`{
  "status": "success",
  "data": {
    "total": 42,
    "sprint_velocity": "+17%",
    "items": [
      { "id": "TASK-104", "title": "Deploy Hybrid DB ClickHouse routing", "assignee": "Sarah Mitchell", "status": "done" },
      { "id": "TASK-105", "title": "Audit Casbin domain policies", "assignee": "James Carter", "status": "in_progress" }
    ]
  }
}`}</pre>
                )}
                {selectedEndpoint === 'auth' && (
                  <pre className="text-slate-800 leading-relaxed">{`{
  "token_type": "Bearer",
  "expires_in": 86400,
  "claims": {
    "tenant_id": "org_nexa_tech",
    "roles": ["project_lead", "approver"],
    "casbin_domain": "engineering"
  }
}`}</pre>
                )}
                {selectedEndpoint === 'checkin' && (
                  <pre className="text-slate-800 leading-relaxed">{`{
  "device_id": "KIOSK-GATE-01",
  "matched_user": "David Chen",
  "latency_ms": 164,
  "anti_spoofing": "PASSED",
  "verified_at": "2026-10-08T08:30:00Z"
}`}</pre>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1">
              <span>{isVi ? 'Tương thích tiêu chuẩn OpenAPI 3.0 / Swagger UI' : 'Compatible with standard OpenAPI 3.0 / Swagger UI'}</span>
              <button
                type="button"
                onClick={() => handleCopy('curl -X GET "https://api.commadesk.app/v1/projects/tasks" -H "Authorization: Bearer <TOKEN>"')}
                className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
              >
                <span>{isCopied ? '✔ Copied cURL' : '📋 Copy cURL'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Webhooks Trace */}
        {activeTab === 'webhooks' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <h4 className="text-sm font-bold text-slate-900">
                  {isVi ? 'Luồng Webhook Inbound & Outbound Thời Gian Thực' : 'Real-time Inbound & Outbound Webhook Stream'}
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-400">HMAC-SHA256 Signed</span>
            </div>

            <div className="space-y-2">
              {[
                { event: 'employee.checkin.verified', latency: '42ms', status: '200 DELIVERED', payload: '{ "user_id": "EMP-92", "device": "AI-CAM-LOBBY", "time": "08:30:12" }' },
                { event: 'document.voucher.approved', latency: '35ms', status: '200 DELIVERED', payload: '{ "voucher_no": "EXP-2026-08", "approver": "David Chen", "amount": 14500000 }' },
                { event: 'fleet.gps.zone_entered', latency: '58ms', status: '200 DELIVERED', payload: '{ "vehicle_id": "TRUCK-04", "zone": "Zone-A-Depot", "speed_kmh": 28 }' },
              ].map((w, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-indigo-700">{w.event}</span>
                      <span className="text-[10px] text-slate-400 font-sans">({w.latency})</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate max-w-md">{w.payload}</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0 font-sans">
                    {w.status}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500">
              {isVi
                ? 'Hỗ trợ kiểm thử cURL nội bộ, giả lập sự kiện kiểm toán và cơ chế retry tự động theo cấp số nhân (exponential backoff).'
                : 'Built-in cURL test harness, simulated audit events, and exponential backoff retry policies.'}
            </p>
          </div>
        )}

        {/* Tab 3: Casbin Policy Matrix */}
        {activeTab === 'casbin' && (
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-5 sm:p-7 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                <h4 className="text-sm font-bold text-slate-900">
                  {isVi ? 'Trình Mô Phỏng Chính Sách Casbin RBAC' : 'Casbin RBAC Policy Simulation'}
                </h4>
              </div>
              <span className="text-xs font-mono text-emerald-600 font-bold">&lt; 1ms In-Memory Enforce</span>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 font-mono text-xs space-y-2 text-slate-800">
              <p className="text-slate-400 font-sans text-[11px]">// Casbin Model: [request_definition], [policy_definition], [role_definition]</p>
              <div className="space-y-1">
                <p><span className="text-indigo-600 font-bold">p</span>, role_project_lead, tenant_nexa, /projects/sprint, write</p>
                <p><span className="text-indigo-600 font-bold">p</span>, role_hr_manager, tenant_nexa, /workforce/payroll, approve</p>
                <p><span className="text-indigo-600 font-bold">p</span>, role_auditor, tenant_nexa, /registry/audit-logs, read</p>
                <p><span className="text-emerald-600 font-bold">g</span>, sarah_mitchell, role_project_lead, tenant_nexa</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between text-xs text-emerald-800">
              <div className="flex items-center gap-2">
                <span>🛡️</span>
                <span>
                  {isVi
                    ? 'Chính sách được cô lập tuyệt đối theo Tenant Domain ID. 0% rủi ro rò rỉ quyền hạn giữa các tổ chức.'
                    : 'Enforced with strict Tenant Domain isolation. Zero risk of cross-tenant permission contamination.'}
                </span>
              </div>
              <span className="font-bold font-mono">ALLOW: TRUE</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
