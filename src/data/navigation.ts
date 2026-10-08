export interface NavLink {
  label: string;
  labelVi?: string;
  labelEn?: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Modules', labelVi: 'Phân hệ', labelEn: 'Modules', href: '#features' },
  { label: 'Solutions', labelVi: 'Giải pháp', labelEn: 'Solutions', href: '#features' },
  { label: 'Platform & Trust', labelVi: 'Nền tảng & Bảo mật', labelEn: 'Platform & Trust', href: '/deployment' },
  { label: 'Resources', labelVi: 'Tài nguyên', labelEn: 'Resources', href: '/docs' },
];

export const FOOTER_LINKS = {
  operations: [
    { label: 'Fleet & Logistics', labelVi: 'Vận tải & Đội xe', labelEn: 'Fleet & Logistics', href: '/products/fleet-logistics' },
    { label: 'Inventory & Assets', labelVi: 'Kho SKU & Tài sản', labelEn: 'Inventory & Assets', href: '/products/inventory-assets' },
    { label: 'Operations & Registry', labelVi: 'Sổ văn bản & Pháp lý', labelEn: 'Operations & Registry', href: '/products/operations-documents' },
  ],
  workforce: [
    { label: 'Projects & Kanban', labelVi: 'Dự án & Kanban', labelEn: 'Projects & Kanban', href: '/products/work-management' },
    { label: 'Org Chart & Workforce', labelVi: 'Tổ chức & Nhân sự', labelEn: 'Org Chart & Workforce', href: '/products/hr-workforce' },
    { label: 'Approvals & Leadership', labelVi: 'Phê duyệt & Lãnh đạo', labelEn: 'Approvals & Leadership', href: '/products/approvals-analytics' },
  ],
  comms: [
    { label: 'CommaMeet & Chat', labelVi: 'Giao tiếp & CommaMeet', labelEn: 'CommaMeet & Chat', href: '/products/communication-meet' },
    { label: 'Surveys & Feedback', labelVi: 'Khảo sát & Góp ý', labelEn: 'Surveys & Feedback', href: '/products/surveys-feedback' },
    { label: 'CMS Studio & Portal', labelVi: 'CMS Studio & Cổng tin', labelEn: 'CMS Studio & Portal', href: '/products/cms-portal' },
  ],
  commerce: [
    { label: 'CRM & Helpdesk', labelVi: 'Khách hàng & Hỗ trợ', labelEn: 'CRM & Helpdesk', href: '/products/crm-helpdesk' },
    { label: 'Social & Retail', labelVi: 'Mạng xã hội & Bán lẻ', labelEn: 'Social & Retail', href: '/products/social-retail' },
    { label: 'AI Vision & Cameras', labelVi: 'AI Vision & Smart City', labelEn: 'AI Vision & Cameras', href: '/products/ai-smart-city' },
    { label: 'Casbin RBAC Security', labelVi: 'Bảo mật Casbin RBAC', labelEn: 'Casbin RBAC Security', href: '/products/security-platform' },
  ],
  pricing: [
    { label: 'Multi-Tenant Cloud', labelVi: 'Đám mây Đa tổ chức', labelEn: 'Multi-Tenant Cloud', href: '/deployment' },
    { label: 'Private Cloud / On-Prem', labelVi: 'Máy chủ riêng On-Premises', labelEn: 'Private Cloud / On-Prem', href: '/deployment' },
    { label: 'Desktop & Mobile Parity', labelVi: 'Bản Desktop (.exe) & Mobile', labelEn: 'Desktop & Mobile Parity', href: '/deployment' },
    { label: 'SLA & Compliance', labelVi: 'Cam kết SLA & Uptime 99.9%', labelEn: 'SLA & Compliance', href: '/deployment' },
  ],
  resources: [
    { label: '67+ Feature Documentation', labelVi: 'Đặc tả 67+ phân hệ', labelEn: '67+ Feature Documentation', href: '/docs' },
    { label: "What's New & Release Notes", labelVi: 'Nhật ký phát hành mới', labelEn: "What's New & Release Notes", href: '/release-notes' },
    { label: 'REST API & Webhooks', labelVi: 'REST API & Webhooks', labelEn: 'REST API & Webhooks', href: '/docs' },
    { label: 'Architecture & Deployment', labelVi: 'Kiến trúc triển khai', labelEn: 'Architecture & Deployment', href: '/deployment' },
  ],
};

