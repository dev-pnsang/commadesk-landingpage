export interface NavLink {
  label: string;
  labelVi?: string;
  labelEn?: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Modules', labelVi: 'Phân hệ', labelEn: 'Modules', href: '#features' },
  { label: 'Workspace', labelVi: 'Không gian làm việc', labelEn: 'Workspace', href: '#hero2Card' },
  { label: 'Integrations', labelVi: 'Tích hợp', labelEn: 'Integrations', href: '#integrations' },
  { label: 'Security & Trust', labelVi: 'Bảo mật & Chứng thực', labelEn: 'Security & Trust', href: '#testimonials' },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Projects & Kanban', labelVi: 'Dự án & Kanban', labelEn: 'Projects & Kanban', href: '/products/work-management' },
    { label: 'Org Chart & Directory', labelVi: 'Tổ chức & Nhân sự', labelEn: 'Org Chart & Directory', href: '/products/hr-workforce' },
    { label: 'AI Vision & Cameras', labelVi: 'AI Vision & Smart City', labelEn: 'AI Vision & Cameras', href: '/products/ai-smart-city' },
    { label: 'Operations & Registry', labelVi: 'Sổ văn bản & Kho SKU', labelEn: 'Operations & Registry', href: '/products/operations-documents' },
  ],
  features: [
    { label: 'CRM & Helpdesk', labelVi: 'CRM & IT Helpdesk', labelEn: 'CRM & Helpdesk', href: '/products/crm-helpdesk' },
    { label: 'Casbin RBAC Security', labelVi: 'Bảo mật Casbin RBAC', labelEn: 'Casbin RBAC Security', href: '/products/security-platform' },
    { label: 'Multi-Tenant Platform', labelVi: 'Đa tổ chức Multi-Tenant', labelEn: 'Multi-Tenant Platform', href: '/products/security-platform' },
    { label: 'Executive Dashboard', labelVi: 'Báo cáo điều hành & KPIs', labelEn: 'Executive Dashboard', href: '/products/work-management' },
  ],
  pricing: [
    { label: 'Multi-Tenant Cloud', labelVi: 'Đám mây Đa tổ chức', labelEn: 'Multi-Tenant Cloud', href: '/deployment' },
    { label: 'Private Cloud / On-Prem', labelVi: 'Máy chủ riêng On-Premises', labelEn: 'Private Cloud / On-Prem', href: '/deployment' },
    { label: 'Desktop & Mobile Parity', labelVi: 'Bản Desktop (.exe) & Mobile', labelEn: 'Desktop & Mobile Parity', href: '/deployment' },
    { label: 'SLA & Compliance', labelVi: 'Cam kết SLA & Uptime 99.9%', labelEn: 'SLA & Compliance', href: '/deployment' },
  ],
  resources: [
    { label: '14-Module Technical Specs', labelVi: 'Đặc tả 14 phân hệ', labelEn: '14-Module Technical Specs', href: '/docs' },
    { label: 'REST API & Swagger', labelVi: 'REST API & Swagger', labelEn: 'REST API & Swagger', href: '/docs' },
    { label: 'Webhooks Pipeline', labelVi: 'Webhooks Pipeline', labelEn: 'Webhooks Pipeline', href: '/docs' },
    { label: 'Feature Documentation', labelVi: 'Trung tâm tài liệu', labelEn: 'Feature Documentation', href: '/docs' },
  ],
};
