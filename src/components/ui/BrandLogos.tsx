import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * 1. Work & Project Management Logo
 * Biểu tượng Kanban đa tầng hiện đại: 3 cột tiến độ với các thẻ công việc 3D gradient,
 * thanh tiến độ và dấu tick hoàn thành, biểu trưng cho hiệu suất và quản trị công việc.
 */
export function WorkManagementLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wmGradCol1" x1="6" y1="10" x2="22" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="wmGradCol2" x1="24" y1="10" x2="40" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#4338CA" />
        </linearGradient>
        <linearGradient id="wmGradCol3" x1="42" y1="10" x2="58" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="wmCardGlow" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.6" />
        </linearGradient>
        <filter id="wmShadow" x="0" y="2" width="64" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#1E293B" floodOpacity="0.15" />
        </filter>
      </defs>

      <g filter="url(#wmShadow)">
        {/* Cột 1: To-Do (Blue) */}
        <rect x="6" y="10" width="16" height="44" rx="5" fill="url(#wmGradCol1)" />
        <rect x="9" y="14" width="10" height="9" rx="2.5" fill="url(#wmCardGlow)" />
        <rect x="9" y="26" width="10" height="15" rx="2.5" fill="url(#wmCardGlow)" fillOpacity="0.85" />
        <line x1="11" y1="30" x2="17" y2="30" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="34" x2="15" y2="34" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />

        {/* Cột 2: In Progress (Indigo/Purple) */}
        <rect x="24" y="6" width="16" height="48" rx="5" fill="url(#wmGradCol2)" />
        <rect x="27" y="10" width="10" height="18" rx="2.5" fill="#FFFFFF" />
        <line x1="29.5" y1="14" x2="34.5" y2="14" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="29.5" y1="18" x2="33" y2="18" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" />
        {/* Progress bar inside card */}
        <rect x="29.5" y="22" width="5" height="2" rx="1" fill="#C7D2FE" />
        <rect x="29.5" y="22" width="3.2" height="2" rx="1" fill="#6366F1" />
        <rect x="27" y="31" width="10" height="11" rx="2.5" fill="url(#wmCardGlow)" fillOpacity="0.8" />

        {/* Cột 3: Done (Emerald) */}
        <rect x="42" y="10" width="16" height="44" rx="5" fill="url(#wmGradCol3)" />
        <rect x="45" y="14" width="10" height="22" rx="2.5" fill="#FFFFFF" />
        <circle cx="50" cy="20" r="3.5" fill="#10B981" />
        <path d="M48.5 20L49.5 21L51.5 19" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="47.5" y1="27" x2="52.5" y2="27" stroke="#047857" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="45" y="39" width="10" height="8" rx="2.5" fill="url(#wmCardGlow)" fillOpacity="0.8" />
      </g>
    </svg>
  );
}

/**
 * 2. HR & Smart Attendance Logo
 * Biểu tượng hồ sơ nhân sự 360° kết hợp khung nhận diện sinh trắc học Face AI và huy hiệu số.
 */
export function HrWorkforceLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hrGradShield" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0EA5E9" />
          <stop offset="0.5" stopColor="#06B6D4" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="hrGradUser" x1="20" y1="16" x2="44" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#E0F2FE" />
        </linearGradient>
        <filter id="hrShadow" x="4" y="4" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0891B2" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#hrShadow)">
        {/* Nền bo góc mềm mại công nghệ */}
        <rect x="8" y="8" width="48" height="48" rx="14" fill="url(#hrGradShield)" />

        {/* 4 góc quét Face AI Bounding Box */}
        <path d="M14 19V15C14 14.4477 14.4477 14 15 14H19" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 19V15C50 14.4477 49.5523 14 49 14H45" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 45V49C14 49.5523 14.4477 50 15 50H19" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 45V49C50 49.5523 49.5523 50 49 50H45" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" />

        {/* Avatar Profile (Head & Shoulders) */}
        <circle cx="32" cy="24" r="8" fill="url(#hrGradUser)" />
        <path
          d="M20 44C20 37.3726 25.3726 34 32 34C38.6274 34 44 37.3726 44 44"
          fill="url(#hrGradUser)"
        />

        {/* Chip sinh trắc học Check-in Badge góc dưới */}
        <circle cx="43" cy="43" r="6.5" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
        <path d="M40.5 43L42.2 44.7L45.5 41.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/**
 * 3. CommaMeet & Unified Comms Logo
 * Biểu tượng Camera HD mang dấu ấn thương hiệu Comma (dấu phẩy cam đỏ #FF5A43 rực rỡ)
 * kết hợp sóng âm thanh và luồng video trực tuyến mã hóa.
 */
export function CommaMeetLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cmGradCam" x1="8" y1="12" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF5A43" />
          <stop offset="0.6" stopColor="#FF385C" />
          <stop offset="1" stopColor="#E11D48" />
        </linearGradient>
        <linearGradient id="cmGradComma" x1="20" y1="18" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFF1F2" />
        </linearGradient>
        <filter id="cmShadow" x="4" y="6" width="56" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="3.5" stdDeviation="3.5" floodColor="#E11D48" floodOpacity="0.3" />
        </filter>
      </defs>

      <g filter="url(#cmShadow)">
        {/* Thân Camera chính bo góc */}
        <rect x="8" y="14" width="36" height="36" rx="11" fill="url(#cmGradCam)" />

        {/* Ống kính phụ bên ngoài (Lens Cone) */}
        <path
          d="M44 26.5L53.5 20.8C54.8 19.9 56.5 20.8 56.5 22.4V41.6C56.5 43.2 54.8 44.1 53.5 43.2L44 37.5V26.5Z"
          fill="#FF5A43"
        />

        {/* Biểu tượng dấu phẩy Comma thương hiệu tại tâm camera */}
        <path
          d="M26 22C29.3137 22 32 24.6863 32 28C32 30.6 30.3 32.8 28 33.6C26.5 34.2 25.5 35.8 25.8 38.2C25.9 39 25 39.5 24.3 39C22.6 37.6 21 34.5 21 31C21 26.0294 23.2386 22 26 22Z"
          fill="url(#cmGradComma)"
        />

        {/* Đèn báo Live phát sóng xanh lá */}
        <circle cx="15" cy="21" r="2.5" fill="#34D399" stroke="#FFFFFF" strokeWidth="1" />

        {/* Vòng hào quang âm thanh / sóng truyền */}
        <circle cx="26" cy="28" r="8" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="2 2" />
      </g>
    </svg>
  );
}

/**
 * 4. Document Registry Logo (Sổ văn bản & Pháp lý số)
 * Tệp tài liệu số hóa chuẩn Nghị định 30 với con dấu chứng thực điện tử màu đỏ son và ruy băng.
 */
export function DocumentRegistryLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="docGradBase" x1="12" y1="8" x2="48" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E40AF" />
          <stop offset="0.6" stopColor="#2563EB" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="docGradStamp" x1="36" y1="36" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF4444" />
          <stop offset="1" stopColor="#B91C1C" />
        </linearGradient>
        <filter id="docShadow" x="6" y="4" width="52" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="3.5" stdDeviation="3" floodColor="#1E3A8A" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#docShadow)">
        {/* Tệp văn bản nền sau (Stack layer) */}
        <rect x="18" y="8" width="34" height="42" rx="4" fill="#93C5FD" fillOpacity="0.6" />

        {/* Tệp văn bản chính phía trước */}
        <rect x="12" y="12" width="34" height="42" rx="4" fill="#FFFFFF" stroke="#DBEAFE" strokeWidth="1.5" />

        {/* Banner tiêu đề văn bản */}
        <path d="M12 16C12 13.7909 13.7909 12 16 12H42C44.2091 12 46 13.7909 46 16V22H12V16Z" fill="url(#docGradBase)" />
        <rect x="18" y="16" width="16" height="2.5" rx="1" fill="#FFFFFF" />

        {/* Các dòng văn bản số hóa */}
        <line x1="18" y1="28" x2="38" y2="28" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="34" x2="34" y2="34" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="40" x2="30" y2="40" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

        {/* Con dấu mộc điện tử số chứng thực pháp lý */}
        <circle cx="42" cy="42" r="9" fill="url(#docGradStamp)" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="42" cy="42" r="7" stroke="#FEE2E2" strokeWidth="1" strokeDasharray="1.5 1.5" />
        {/* Ngôi sao chứng thực số ở tâm */}
        <path
          d="M42 38L43.2 40.5L46 40.8L44 42.6L44.5 45.4L42 44.1L39.5 45.4L40 42.6L38 40.8L40.8 40.5L42 38Z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}

/**
 * 5. AI Vision & Smart City Logo
 * Biểu tượng Camera AI VMS với thấu kính quang học đa tầng, khung bounding box nhận diện khuôn mặt / biển số.
 */
export function AiSmartCityLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiGradLens" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="aiGradCore" x1="22" y1="22" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <filter id="aiShadow" x="4" y="4" width="56" height="56" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="3.5" stdDeviation="3" floodColor="#7C3AED" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#aiShadow)">
        {/* Khung nền bo góc AI Hub */}
        <rect x="8" y="8" width="48" height="48" rx="14" fill="url(#aiGradLens)" />

        {/* Bounding box nhận diện AI 4 góc */}
        <path d="M15 21V16C15 15.4477 15.4477 15 16 15H21" stroke="#A5F3FC" strokeWidth="2" strokeLinecap="round" />
        <path d="M49 21V16C49 15.4477 48.5523 15 48 15H43" stroke="#A5F3FC" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 43V48C15 48.5523 15.4477 49 16 49H21" stroke="#A5F3FC" strokeWidth="2" strokeLinecap="round" />
        <path d="M49 43V48C49 48.5523 48.5523 49 48 49H43" stroke="#A5F3FC" strokeWidth="2" strokeLinecap="round" />

        {/* Vòng ngoài thấu kính quang học */}
        <circle cx="32" cy="32" r="14" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="2" />
        <circle cx="32" cy="32" r="10" fill="url(#aiGradCore)" stroke="#FFFFFF" strokeWidth="1.5" />

        {/* Đồng tử quang học / AI Core */}
        <circle cx="32" cy="32" r="4.5" fill="#FFFFFF" />
        <circle cx="30.5" cy="30.5" r="1.5" fill="#06B6D4" />

        {/* Tia cảm biến nơ-ron quét 4 hướng */}
        <line x1="32" y1="13" x2="32" y2="17" stroke="#A5F3FC" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="47" x2="32" y2="51" stroke="#A5F3FC" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="32" x2="17" y2="32" stroke="#A5F3FC" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="47" y1="32" x2="51" y2="32" stroke="#A5F3FC" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Giữ nguyên các logo cũ nếu có component nào cần fallback */
export { WorkManagementLogo as TeamsLogo };
export { HrWorkforceLogo as GmailLogo };
export { CommaMeetLogo as LoomLogo };
export { DocumentRegistryLogo as GoogleMeetLogo };
export { AiSmartCityLogo as OutlookLogo };
