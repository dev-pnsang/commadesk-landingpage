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

