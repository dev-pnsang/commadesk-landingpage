export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'sarah',
    name: 'Sarah Mitchell',
    role: 'Head of Product at NexaTech',
    avatar: '/avatars/sarah_mitchell.png',
    rating: 5.0,
    quote:
      '“Commadesk eliminated tool fragmentation across our teams. Having Kanban workflows, project time logs, and multi-tenant org charts in one platform saved our leads hours of status meetings every week.”',
  },
  {
    id: 'james',
    name: 'James Carter',
    role: 'Operations Lead at BrightPath',
    avatar: '/avatars/james_carter.png',
    rating: 5.0,
    quote:
      '“The document registry and Casbin RBAC permissions gave us enterprise-grade governance. Multi-manager approvals and shift timesheets happen in minutes without bureaucratic friction.”',
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'VP of Engineering at TechVanguard',
    avatar: '/avatars/hero2_3.png',
    rating: 5.0,
    quote:
      '“The REST API, webhooks, and GitHub integration fit smoothly into our CI/CD pipelines. Casbin RBAC makes managing fine-grained developer permissions effortless and bulletproof.”',
  },
  {
    id: 'david',
    name: 'David Chen',
    role: 'HR & People Ops Director at OmniRetail',
    avatar: '/avatars/hero2_7.png',
    rating: 5.0,
    quote:
      '“Managing multi-shift rosters across branches with mobile GPS and Kiosk check-in transformed our attendance. Automated timesheet calculations cut our month-end payroll cycle by 60%.”',
  },
  {
    id: 'marcus',
    name: 'Marcus Aurel',
    role: 'Enterprise Solution Architect at Apex Global',
    avatar: '/avatars/hero2_1.png',
    rating: 5.0,
    quote:
      '“Commadesk’s multi-tenant database routing, hybrid MySQL architecture, and automated OBB backup/restore gave our security council the confidence to roll out company-wide.”',
  },
  {
    id: 'sophia',
    name: 'Sophia Lin',
    role: 'PMO Director at Horizon Software',
    avatar: '/avatars/hero2_6.png',
    rating: 5.0,
    quote:
      '“Real-time Gantt tracking and executive dashboard KPIs let our executive team spot project delivery bottlenecks weeks before milestones slip. The acceptance workflow is second to none.”',
  },
];
