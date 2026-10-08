export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  roleVi?: string;
  roleEn?: string;
  avatar: string;
  rating: number;
  quote: string;
  quoteVi?: string;
  quoteEn?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'sarah',
    name: 'Sarah Mitchell',
    role: 'Head of Product at NexaTech',
    roleVi: 'Giám đốc Sản phẩm tại NexaTech',
    roleEn: 'Head of Product at NexaTech',
    avatar: '/avatars/sarah_mitchell_hd.jpg',
    rating: 5.0,
    quote:
      '“CommaDesk eliminated tool fragmentation across our teams. Having Kanban workflows, project time logs, and multi-tenant org charts in one platform saved our leads hours of status meetings every week.”',
    quoteVi:
      '“CommaDesk xóa bỏ hoàn toàn tình trạng phân mảnh công cụ giữa các đội ngũ của chúng tôi. Việc tích hợp quy trình Kanban, nhật ký giờ dự án và sơ đồ tổ chức đa chi nhánh vào một nền tảng duy nhất đã tiết kiệm cho các nhóm trưởng hàng giờ họp báo cáo tiến độ mỗi tuần.”',
    quoteEn:
      '“CommaDesk eliminated tool fragmentation across our teams. Having Kanban workflows, project time logs, and multi-tenant org charts in one platform saved our leads hours of status meetings every week.”',
  },
  {
    id: 'james',
    name: 'James Carter',
    role: 'Operations Lead at BrightPath',
    roleVi: 'Trưởng khối Vận hành tại BrightPath',
    roleEn: 'Operations Lead at BrightPath',
    avatar: '/avatars/james_carter_hd.jpg',
    rating: 5.0,
    quote:
      '“The document registry and Casbin RBAC permissions gave us enterprise-grade governance. Multi-manager approvals and shift timesheets happen in minutes without bureaucratic friction.”',
    quoteVi:
      '“Hệ thống sổ văn bản hành chính và phân quyền Casbin RBAC mang lại cho chúng tôi năng lực quản trị chuẩn doanh nghiệp. Quy trình phê duyệt đa quản lý và bảng công theo ca diễn ra chỉ trong vài phút mà không gặp bất kỳ trở ngại thủ tục nào.”',
    quoteEn:
      '“The document registry and Casbin RBAC permissions gave us enterprise-grade governance. Multi-manager approvals and shift timesheets happen in minutes without bureaucratic friction.”',
  },
  {
    id: 'elena',
    name: 'Elena Rostova',
    role: 'VP of Engineering at TechVanguard',
    roleVi: 'Phó Chủ tịch Kỹ thuật tại TechVanguard',
    roleEn: 'VP of Engineering at TechVanguard',
    avatar: '/avatars/elena_rostova_hd.jpg',
    rating: 5.0,
    quote:
      '“The REST API, webhooks, and GitHub integration fit smoothly into our CI/CD pipelines. Casbin RBAC makes managing fine-grained developer permissions effortless and bulletproof.”',
    quoteVi:
      '“Hệ thống REST API, Webhooks và tích hợp Git/GitHub kết nối mượt mà vào toàn bộ đường ống CI/CD của chúng tôi. Ma trận phân quyền Casbin RBAC giúp việc quản lý quyền hạn lập trình viên trở nên nhẹ nhàng, an toàn tuyệt đối.”',
    quoteEn:
      '“The REST API, webhooks, and GitHub integration fit smoothly into our CI/CD pipelines. Casbin RBAC makes managing fine-grained developer permissions effortless and bulletproof.”',
  },
  {
    id: 'david',
    name: 'David Chen',
    role: 'HR & People Ops Director at OmniRetail',
    roleVi: 'Giám đốc Nhân sự & Vận hành tại OmniRetail',
    roleEn: 'HR & People Ops Director at OmniRetail',
    avatar: '/avatars/david_chen_hd.jpg',
    rating: 5.0,
    quote:
      '“Managing multi-shift rosters across branches with mobile GPS and Kiosk check-in transformed our attendance. Automated timesheet calculations cut our month-end payroll cycle by 60%.”',
    quoteVi:
      '“Quản lý lịch phân ca đa chi nhánh kết hợp chấm công GPS trên di động và Kiosk Face AI đã thay đổi hoàn toàn cách chúng tôi theo dõi nhân sự. Cơ chế tự động tính bảng công đã rút ngắn 60% chu kỳ chốt bảng lương cuối tháng.”',
    quoteEn:
      '“Managing multi-shift rosters across branches with mobile GPS and Kiosk check-in transformed our attendance. Automated timesheet calculations cut our month-end payroll cycle by 60%.”',
  },
  {
    id: 'marcus',
    name: 'Marcus Aurel',
    role: 'Enterprise Solution Architect at Apex Global',
    roleVi: 'Kiến trúc sư Giải pháp Doanh nghiệp tại Apex Global',
    roleEn: 'Enterprise Solution Architect at Apex Global',
    avatar: '/avatars/marcus_aurel_hd.jpg',
    rating: 5.0,
    quote:
      '“CommaDesk’s multi-tenant database routing, hybrid MySQL architecture, and automated OBB backup/restore gave our security council the confidence to roll out company-wide.”',
    quoteVi:
      '“Kiến trúc định tuyến cơ sở dữ liệu đa tổ chức của CommaDesk, mô hình kết hợp MySQL 8.0, ClickHouse và sao lưu tự động OBB đã đem lại cho hội đồng an ninh thông tin của chúng tôi sự tin tưởng tuyệt đối để triển khai toàn tập đoàn.”',
    quoteEn:
      '“CommaDesk’s multi-tenant database routing, hybrid MySQL architecture, and automated OBB backup/restore gave our security council the confidence to roll out company-wide.”',
  },
  {
    id: 'sophia',
    name: 'Sophia Lin',
    role: 'PMO Director at Horizon Software',
    roleVi: 'Giám đốc Văn phòng Quản lý Dự án PMO tại Horizon Software',
    roleEn: 'PMO Director at Horizon Software',
    avatar: '/avatars/sophia_lin_hd.jpg',
    rating: 5.0,
    quote:
      '“Real-time Gantt tracking and executive dashboard KPIs let our executive team spot project delivery bottlenecks weeks before milestones slip. The acceptance workflow is second to none.”',
    quoteVi:
      '“Sơ đồ Gantt thời gian thực và chỉ số KPI trên Executive Dashboard giúp ban lãnh đạo phát hiện sớm các nút thắt cổ chai trong tiến độ dự án nhiều tuần trước khi trễ hạn. Quy trình nghiệm thu 3 cấp thực sự vô cùng chuyên nghiệp.”',
    quoteEn:
      '“Real-time Gantt tracking and executive dashboard KPIs let our executive team spot project delivery bottlenecks weeks before milestones slip. The acceptance workflow is second to none.”',
  },
];
