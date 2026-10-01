export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Modules', href: '#features' },
  { label: 'Workspace', href: '#hero2Card' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Security & Trust', href: '#testimonials' },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Projects & Kanban', href: '#features' },
    { label: 'Org Chart & Directory', href: '#hero2Card' },
    { label: 'Time & Attendance', href: '#features' },
    { label: 'Executive Dashboard', href: '#features' },
  ],
  features: [
    { label: 'Document Registry', href: '#features' },
    { label: 'Timesheets & Payroll', href: '#features' },
    { label: 'Casbin RBAC Security', href: '#features' },
    { label: 'Internal Chat & Events', href: '#features' },
  ],
  pricing: [
    { label: 'Multi-Tenant Cloud', href: '#hero1Card' },
    { label: 'Desktop & Mobile Parity', href: '#hero1Card' },
  ],
  resources: [
    { label: 'REST API & Webhooks', href: '#integrations' },
    { label: 'Feature Documentation', href: '#testimonials' },
  ],
};
