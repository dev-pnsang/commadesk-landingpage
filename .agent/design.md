# Hướng Dẫn Quy Chuẩn Thiết Kế CoreShift (.agent/design.md)

Tài liệu này xác định các quy tắc thiết kế cốt lõi của CoreShift để đảm bảo tính nhất quán, hiện đại, tái sử dụng component và kế thừa tối đa các class CSS.

---

## 1. Bảng Màu (Color Palette)
- **Nền tổng thể (Page Canvas)**: `#EEF0F3` (xám sáng ấm, tạo cảm giác canvas tinh tế như Apple/Figma).
- **Khung nội dung chính (Main Container)**: `#FFFFFF` kết hợp viền mờ `border-gray-100` và đổ bóng mềm mại `shadow-2xl shadow-slate-200/50`.
- **Màu thương hiệu chính (Primary Brand)**:
  - Coral / Vermilion: `#FF4D38` (được sử dụng cho nút CTA chính "Request a Demo", icon liên kết, chữ CoreShift nền footer).
  - Indigo / Violet: `#6366F1` / `#4F46E5` (dùng cho nút "Learn more", icon Core HR, phong bì thư khách hàng).
- **Màu bổ trợ (Accents)**:
  - Vàng nắng (Sun Yellow): `#FBBF24` (icon bóng đèn).
  - Đỏ tươi (Bright Red): `#EF4444` (icon tia sét).
  - Xanh Cyan / Sky: `#38BDF8` (icon bóng bay).
  - Tím Lavender: `#8B5CF6` / `#A78BFA` (thẻ tài liệu legal, biểu đồ).
  - Xám chữ: `#111827` (Text chính), `#4B5563` (Text phụ), `#9CA3AF` (Muted text).

---

## 2. Typography
- **Font chữ chính**: `Plus Jakarta Sans`, sans-serif (Google Fonts).
- **Headings**:
  - H1: `font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl text-gray-900`
  - H2: `font-bold tracking-tight text-3xl sm:text-4xl text-gray-900`
  - H3: `font-semibold text-lg sm:text-xl text-gray-900`
- **Body**:
  - Subtitle: `text-base sm:text-lg text-gray-500 max-w-xl mx-auto font-normal`
  - Normal text: `text-sm text-gray-500 leading-relaxed`

---

## 3. Khung & Bo Góc (Border Radius & Elevations)
- Container bao quanh giao diện: `rounded-[28px] sm:rounded-[36px] md:rounded-[44px]`
- Thẻ Bento Grid: `rounded-3xl bg-slate-50/70 border border-slate-100 p-6 md:p-8 hover:shadow-lg transition-all duration-300`
- Nút CTA Pill: `rounded-full px-6 py-3 font-medium transition-all duration-300 active:scale-95`
- Icon Badge: `rounded-2xl shadow-md flex items-center justify-center`

---

## 4. Components Tái Sử Dụng (Reusable Components)
1. **Button Pill (`.btn-pill`)**: Nút bo tròn hình viên thuốc, có các biến thể:
   - Primary Coral: `bg-[#FF4D38] hover:bg-[#E03E2A] text-white shadow-md shadow-[#FF4D38]/20`
   - Primary Indigo: `bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-md shadow-[#6366F1]/20`
   - Dark: `bg-black hover:bg-neutral-800 text-white`
   - Ghost: `text-gray-700 hover:text-black font-medium`
2. **Bento Card (`.bento-card`)**: Thẻ bo góc tròn lớn với nền sáng nhẹ, viền mảnh và bóng đổ đa tầng.
3. **Avatar Card (`.avatar-bubble`)**: Ảnh đại diện nhân viên viền trắng nổi khối `border-2 border-white shadow-md rounded-2xl md:rounded-3xl object-cover`.
4. **App Integration Tile (`.app-tile`)**: Thẻ icon vuông bo góc trắng nổi bóng 3D mượt mà cho Arc Carousel.
5. **Envelope Testimonial (`.envelope-card`)**: Mô hình phong bì thư 3D mở nắp đựng thư đánh giá khách hàng.

---

## 5. Hiệu Ứng Động (Animations)
- `floating`: Chuyển động lơ lửng nhẹ nhàng cho các avatar và badge trong Hero.
- `arc-slide`: Xoay chuyển vị trí mềm mại theo quỹ đạo vòng cung của các icon tích hợp.
- `fade-up`: Hiệu ứng xuất hiện mượt mà khi cuộn trang.
- `frosted-glass`: Lớp nền phủ kính mờ `backdrop-blur-md bg-white/70`.
