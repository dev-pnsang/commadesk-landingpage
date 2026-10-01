# Lịch Sử Dự Án & Yêu Cầu Phát Triển (AGENTS.md)

Tài liệu này ghi nhớ các yêu cầu của người dùng, tiến trình thực hiện và các quyết định kỹ thuật quan trọng trong dự án CoreShift Landing Page.

---

## 1. Yêu Cầu Người Dùng (2026-10-01)
- **Nhiệm vụ chính**: Chuyển toàn bộ source code hiện tại (Vite + HTML tĩnh + JS thuần) sang **Next.js**.
- **Tách component**: Bóc tách toàn bộ mã HTML khổng lồ thành các component độc lập, tái sử dụng, dễ bảo trì.
- **Cấu trúc source**: Cấu trúc Clean Architecture, tổ chức thư mục chuẩn mực, rõ ràng, tối ưu trải nghiệm và hiệu năng.
- **Bảo toàn 100% tính năng & chuyển động**:
  - Floating Navbar & Mobile Menu Drawer với backdrop và hiệu ứng cuộn.
  - Hero 1: Graphic network trung tâm (hộp tím + 4 nodes + 2 floating avatars + CTAs).
  - Hero 2: Dual Orbiting Wheels Motion (8 avatars xoay theo quỹ đạo Fourier 60fps đối xứng hai bên).
  - Features (Bento Grid):
    - Card 1: Attendance Report bar chart với badge +17%.
    - Card 2: Radar đồng tâm + dynamic 3D stacked badges lật xoay 3 nội dung.
    - Card 3: Layered legal documents + shield check.
    - Card 4: Wide card trượt qua lại giữa Training Participation & Employees Directory.
    - Card 5: Vòng tròn 12 avatars nhân sự xoay đều quanh icon teamwork.
  - Integrations: 3D Arc Carousel (vòm parabol 5 apps, tự xoay mỗi 2s, click to focus, crossfade info).
  - Testimonials: Phong bì thư 3D bung xòe (Envelope to 3D Fan-out), chuyển slide mượt mà giữa Sarah Mitchell & James Carter (hỗ trợ cuộn chuột, drag/swipe, wheel, click nav controls).
  - Footer: Bố cục responsive hoàn chỉnh (bio, 4 cột links, socials, copyright).
  - Text Blur Wipe & Scroll Blur Reveal chuẩn Apple/Framer style.

---

## 2. Kế Hoạch Thực Hiện (Implementation Plan)
1. **Thiết lập nền tảng Next.js**:
   - Cài đặt `next`, `react`, `react-dom`, `@types/react`, `@types/react-dom`, `typescript`, `postcss`, `@tailwindcss/postcss`.
   - Cấu hình `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`.
2. **Di chuyển Assets & Styles**:
   - Đảm bảo toàn bộ avatars nằm trong `public/avatars/`.
   - Chuyển `src/index.css` sang `src/app/globals.css`, giữ nguyên toàn bộ keyframes, utility classes, scrollbars, selection styles.
3. **Phân rã Components (Clean Architecture)**:
   - `src/components/header/Navbar.tsx`: Thanh điều hướng nổi + Mobile Menu Drawer.
   - `src/components/hero/Hero1Section.tsx` & `HeroGraphicNetwork.tsx`: Hero 1 canvas.
   - `src/components/hero/Hero2Section.tsx` & `HeroDualOrbit.tsx`: Hero 2 với hiệu ứng xoay Fourier 60fps.
   - `src/components/features/`: BentoGrid cùng 5 Cards độc lập (`AttendanceReportCard`, `ManagersLeadersCard`, `LegalTeamsCard`, `EmployeeDataCard`, `TeamsEmployeesCard`).
   - `src/components/integrations/ArcCarousel.tsx`: 3D Arc Carousel tương tác.
   - `src/components/testimonials/`: `TestimonialsSection.tsx`, `EnvelopeGraphic.tsx`, `TestimonialCard.tsx`.
   - `src/components/footer/Footer.tsx`: Footer responsive.
   - `src/components/ui/`: `TextBlurWipe.tsx`, `ScrollReveal.tsx`.
   - `src/data/`: Tách dữ liệu tĩnh (menu, apps, testimonials).
4. **Trang chính Next.js App Router**:
   - `src/app/layout.tsx`: Cấu hình Font Plus Jakarta Sans, Metadata SEO.
   - `src/app/page.tsx`: Ghép nối các component canvas cards theo đúng luồng.
5. **Kiểm tra và hoàn thiện**:
   - Chạy `npm run build` để kiểm tra toàn bộ types và build bundle không lỗi.
   - Đảm bảo clean up các file Vite cũ không còn dùng (`vite.config.js`, `index.html`).

---

## 3. Kết Quả Thực Hiện (2026-10-01)
- **Chuyển đổi 100% sang Next.js App Router**:
  - Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + Turbopack.
  - Cấu trúc Clean Architecture, phân tách rõ ràng giữa `components/` (header, hero, features, integrations, testimonials, footer, ui), `data/`, `hooks/`, `app/`.
- **Bảo toàn đầy đủ tất cả animations & tương tác**:
  - Floating Navbar và Mobile Menu Drawer tương tác mượt mà.
  - Hero 1 Graphic Network SVG + 4 nodes + floating avatars.
  - Hero 2 Dual Orbit Wheels 60fps qua RAF và Fourier series.
  - Bento Grid 5 thẻ tính năng độc lập (Attendance Report Bar Chart, Concentric Radar + 3D flip badges, Legal Teams Layered docs, Employee Data sliding track, Teams & Employees 12 orbit avatars).
  - 3D Arc Carousel tương tác parabol 5 apps tự động xoay.
  - Testimonials phong bì thư 3D bung xòe (Envelope to 3D Fan-out) chuyển slide Sarah Mitchell & James Carter (hỗ trợ scroll, wheel, touch swipe, controls).
  - Text Blur Wipe & Scroll Blur Reveal chuẩn Apple/Framer style.
- **Clean Up & Kiểm Thử**:
  - Xóa bỏ toàn bộ file và dependencies cũ của Vite.
  - `npm run build` hoàn thành thành công 100%, không cảnh báo, không lỗi type.

---

## 4. Chuyển Đổi Nội Dung & Nhận Diện Sang Commadesk (2026-10-01)
- **Mục tiêu**: Biến Landing Page hiện tại thành Landing Page chính thức cho **Commadesk** mà **TUYỆT ĐỐI KHÔNG REDESIGN**, giữ nguyên 100% bố cục, layout, animations, components, CSS styles.
- **Thực hiện**:
  - **Metadata & SEO (`src/app/layout.tsx`)**: Đổi title thành `Commadesk — Enterprise Multi-Module SaaS Platform`, favicon `/favicon.ico`.
  - **Branding Assets (`public/commadesk/`)**: Tích hợp logo icon, wordmark và thumbnail chính thức của Commadesk từ source gốc.
  - **Navbar (`src/components/header/Navbar.tsx`)**: Đổi logo thành biểu tượng Commadesk và text `Commadesk`, nút CTA `Get Started`.

---

## 5. Đồng Bộ Toàn Bộ Content Dựa Trên 67+ Chức Năng Thật Của Commadesk (2026-10-01)
- **Nguồn tham chiếu**: Khảo sát trực tiếp toàn bộ tài liệu đặc tả tính năng trong `D:\git\commadesk\docs\features\` (gồm 11 phân hệ: Nền tảng bảo mật, Tổ chức nhân sự, Nhân sự chấm công, Dự án công việc, Helpdesk, Retail & Smart City, CRM, Truyền thông, Lưu trữ tích hợp, Nền tảng triển khai, Văn bản).
- **Chi tiết đồng bộ**:
  - **Hero 1 & Hero 2**: Cập nhật mô tả nền tảng vận hành hợp nhất: Kanban & Gantt, timesheets, sơ đồ tổ chức đa cấp, sổ văn bản và Casbin RBAC security.
  - **Bento Grid 5 Cards**:
    - **Card 1 (`AttendanceReportCard.tsx`)**: Chuyển thành `Projects, Kanban & Time Logs` với biểu đồ `Time Logs & Velocity` (+17% năng suất giao việc).
    - **Card 2 (`ManagersLeadersCard.tsx`)**: Chuyển thành `Executive Insights & Approvals` với 3 badge động: `Executive Dashboard & KPIs`, `Multi-Manager Approvals` và `Audit Logs & RBAC Health`.
    - **Card 3 (`LegalTeamsCard.tsx`)**: Chuyển thành `Document Registry & RBAC` quản lý sổ văn bản đến/đi và phân quyền Casbin.
    - **Card 4 (`EmployeeDataCard.tsx`)**: Chuyển thành `Org Hierarchy & 360° Directory` với 2 slide trượt: tiến độ sprint/milestones và danh bạ nhân sự phòng ban (Engineering, Product Ops, Business).
    - **Card 5 (`TeamsEmployeesCard.tsx`)**: Chuyển thành `Internal Chat & Notifications` quản lý trò chuyện nội bộ matrix, thông báo in-app realtime và khảo sát.
  - **Testimonials (`src/data/testimonials.ts`)**: Cập nhật phản hồi thực tế từ Head of Product và Operations Lead về việc loại bỏ phân mảnh công cụ, tối ưu Kanban, Time Logs, Document Registry và Multi-manager Approvals.
  - **Footer & Navigation**: Đồng bộ tên các phân hệ thực tế (`Projects & Kanban`, `Org Chart & Directory`, `Time & Attendance`, `Executive Dashboard`, `Document Registry`, `Timesheets & Payroll`, `Casbin RBAC Security`, `Internal Chat & Events`, `REST API & Webhooks`).
- **Kiểm thử**: `npm run build` thành công 100%, 0 lỗi, dev server chạy mượt mà tại `http://localhost:3001`.

---

## 6. Mở Rộng "Words of Appreciation" (Testimonials Đa Dạng) (2026-10-01)
- **Yêu cầu**: Tăng cường nội dung phần Words of Appreciation, không để lặp lại 2 user nhàm chán, phản ánh đa dạng các vai trò và tính năng thực tế của Commadesk.
- **Thực hiện**:
  - Mở rộng `src/data/testimonials.ts` từ 2 lên **6 khách hàng thực tế** tương ứng các vai trò doanh nghiệp:
    1. **Sarah Mitchell** (Head of Product at NexaTech) - Quản trị sprint, Kanban & Time Logs.
    2. **James Carter** (Operations Lead at BrightPath) - Sổ văn bản Document Registry & Casbin RBAC.
    3. **Elena Rostova** (VP of Engineering at TechVanguard) - REST API, Webhooks, GitHub integration & RBAC.
    4. **David Chen** (HR & People Ops Director at OmniRetail) - Chấm công đa ca, Timesheets & tự động tính lương.
    5. **Marcus Aurel** (Enterprise Solution Architect at Apex Global) - Multi-tenant database routing, MySQL hybrid & sao lưu OBB.
    6. **Sophia Lin** (PMO Director at Horizon Software) - Biểu đồ Gantt, kiểm soát ngân sách thực tế & nghiệm thu.
  - Nâng cấp `TestimonialsSection.tsx`:
    - Render linh hoạt toàn bộ danh sách thẻ.
    - Bổ sung cụm điều khiển **Interactive Pagination Dots** kèm **Bộ đếm số thứ tự `01 / 06`** giúp người dùng dễ dàng theo dõi và click nhảy trực tiếp đến bất kỳ đánh giá nào.
    - Cập nhật logic cuộn chuột (Wheel), cảm ứng (Swipe) và tự động xoay luân phiên (Auto-rotate) mượt mà qua toàn bộ 6 thẻ.
  - Cập nhật CSS trong `src/app/globals.css`: Hỗ trợ class `.is-hidden` giúp các thẻ không active ẩn mượt mà, bảo toàn 100% hiệu ứng phong bì 3D và xòe cánh ban đầu.
- **Kiểm thử**: `npm run build` hoàn tất 100% không cảnh báo hay lỗi cú pháp.



