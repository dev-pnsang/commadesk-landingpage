export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Product', href: '#hero1Card' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#integrations' },
  { label: 'Resources', href: '#testimonials' },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'CoreHR', href: '#hero1Card' },
    { label: 'Recruit', href: '#features' },
    { label: 'Perform', href: '#integrations' },
    { label: 'Pulse', href: '#testimonials' },
  ],
  features: [
    { label: 'Desk', href: '#features' },
    { label: 'Time', href: '#features' },
    { label: 'Analytics', href: '#features' },
  ],
  pricing: [
    { label: 'Pricing', href: '#integrations' },
  ],
  resources: [
    { label: 'Resources', href: '#testimonials' },
  ],
};
