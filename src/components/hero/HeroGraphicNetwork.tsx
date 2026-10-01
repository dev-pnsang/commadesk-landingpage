import React from 'react';
import Image from 'next/image';

export function HeroGraphicNetwork() {
  return (
    <div className="relative w-full max-w-[960px] lg:max-w-[1080px] xl:max-w-[1180px] h-[280px] sm:h-[320px] md:h-[350px] mx-auto flex items-center justify-center">
      {/* Connecting Lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-200"
        strokeWidth="1.8"
      >
        {/* Nhánh trái */}
        <line x1="50%" y1="48%" x2="35%" y2="48%" />
        <line x1="35%" y1="48%" x2="25%" y2="24%" />
        <line x1="35%" y1="48%" x2="14%" y2="48%" />
        <line x1="35%" y1="48%" x2="25%" y2="74%" />

        {/* Nhánh phải */}
        <line x1="50%" y1="48%" x2="65%" y2="48%" />
        <line x1="65%" y1="48%" x2="76%" y2="24%" />
        <line x1="65%" y1="48%" x2="88%" y2="48%" />
        <line x1="65%" y1="48%" x2="79%" y2="70%" />
      </svg>

      {/* Nút chấm tròn tím nhỏ trên các mối rẽ */}
      <div className="absolute top-[24%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7C6AF7] ring-4 ring-white shadow-xs" />
      <div className="absolute top-[74%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7C6AF7] ring-4 ring-white shadow-xs" />
      <div className="absolute top-[24%] left-[76%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7C6AF7] ring-4 ring-white shadow-xs" />
      <div className="absolute top-[70%] left-[79%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7C6AF7] ring-4 ring-white shadow-xs" />

      {/* Center Node: Purple Square with Checkmark Chevron */}
      <div className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 md:w-[158px] md:h-[158px] rounded-[30px] sm:rounded-[38px] md:rounded-[42px] bg-gradient-to-br from-[#9465FA] via-[#834EF8] to-[#6A35F5] shadow-[0_24px_55px_-12px_rgba(118,70,245,0.48)] flex items-center justify-center border-2 border-white/70 transition-transform duration-500 hover:scale-105 cursor-pointer">
        <div className="w-13 h-13 sm:w-16 sm:h-16 md:w-[74px] md:h-[74px] rounded-full border-[3px] border-white/80 flex items-center justify-center shadow-inner">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Node 1 (Top Left): Yellow Lightbulb */}
      <div className="absolute top-[4%] sm:top-[6%] left-[15%] sm:left-[17%] z-10 w-14 h-14 sm:w-18 sm:h-18 md:w-[84px] md:h-[84px] rounded-2xl sm:rounded-[26px] bg-[#FFC024] text-white flex items-center justify-center shadow-xl shadow-amber-400/40 border-2 border-white/80 animate-float-slow">
        <svg
          className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2.2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>

      {/* Node 2 (Bottom Left): Cyan 2 Balloons */}
      <div className="absolute bottom-[2%] sm:bottom-[4%] left-[16%] sm:left-[18%] z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-[98px] md:h-[98px] rounded-2xl sm:rounded-[30px] bg-[#16BEFA] text-white flex items-center justify-center shadow-xl shadow-sky-400/40 border-2 border-white/80 animate-float-reverse">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 2.5a3.8 3.8 0 00-3.8 3.8c0 2.8 2.4 4.8 3.4 5.3l-.4 1.4h1.6l-.4-1.4c1-.5 3.4-2.5 3.4-5.3A3.8 3.8 0 008 2.5z" />
          <path
            d="M7.8 13c-.3 1.5.4 2.5.9 3.5s.4 2-.5 3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path d="M15 5a3.2 3.2 0 00-3.2 3.2c0 2.4 2 4 2.8 4.5l-.3 1.2h1.4l-.3-1.2c.8-.5 2.8-2.1 2.8-4.5A3.2 3.2 0 0015 5z" />
          <path
            d="M14.8 14c-.2 1.2.3 2 .7 2.8s.3 1.6-.4 2.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Node 3 (Top Right): Red Shield with Lightning Bolt */}
      <div className="absolute top-[4%] sm:top-[6%] right-[16%] sm:right-[18%] z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-[98px] md:h-[98px] rounded-2xl sm:rounded-[30px] bg-[#FF4747] text-white flex items-center justify-center shadow-xl shadow-red-500/40 border-2 border-white/80 animate-float-drift">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16l-3-6h3V6l5 7h-4v4z" />
        </svg>
      </div>

      {/* Node 4 (Right Middle): 2D Vector Cartoon Eyes looking left */}
      <div className="absolute top-[48%] -translate-y-1/2 right-[0.5%] sm:right-[2%] z-10 w-18 h-18 sm:w-24 sm:h-24 md:w-[114px] md:h-[114px] rounded-[24px] sm:rounded-[32px] md:rounded-[36px] bg-white text-slate-800 flex items-center justify-center shadow-2xl shadow-slate-200/90 border border-slate-100 animate-float-slow">
        <svg
          className="w-10 h-7 sm:w-14 sm:h-10 md:w-18 md:h-12"
          viewBox="0 0 44 28"
          fill="none"
        >
          {/* Left Eye */}
          <ellipse cx="13" cy="14" rx="9" ry="12" fill="white" stroke="#0F172A" strokeWidth="2.8" />
          <circle cx="9.5" cy="14" r="4.6" fill="#0F172A" />
          <circle cx="8" cy="12" r="1.4" fill="white" />
          {/* Right Eye */}
          <ellipse cx="31" cy="14" rx="9" ry="12" fill="white" stroke="#0F172A" strokeWidth="2.8" />
          <circle cx="27.5" cy="14" r="4.6" fill="#0F172A" />
          <circle cx="26" cy="12" r="1.4" fill="white" />
        </svg>
      </div>

      {/* Floating Avatar 1 (Left Middle): Chàng trai tóc dài lượn sóng */}
      <div className="absolute top-[48%] -translate-y-1/2 left-[0.5%] sm:left-[2%] z-10 animate-float-slow">
        <div className="w-18 h-18 sm:w-24 sm:h-24 md:w-[114px] md:h-[114px] rounded-[24px] sm:rounded-[32px] md:rounded-[36px] p-0.5 bg-white shadow-2xl shadow-slate-300/70 border-2 border-white overflow-hidden">
          <Image
            src="/avatars/hero1_man.png"
            alt="Team member"
            width={114}
            height={114}
            className="w-full h-full object-cover rounded-[22px] sm:rounded-[30px] md:rounded-[34px]"
            priority
          />
        </div>
      </div>

      {/* Floating Avatar 2 (Bottom Right): Cô gái cười tươi nghe điện thoại */}
      <div className="absolute bottom-[4%] sm:bottom-[6%] right-[15%] sm:right-[17%] z-10 animate-float-reverse">
        <div className="w-14 h-16 sm:w-18 sm:h-22 md:w-[78px] md:h-[94px] rounded-2xl sm:rounded-[24px] p-0.5 bg-white shadow-2xl shadow-slate-300/70 border-2 border-white overflow-hidden">
          <Image
            src="/avatars/hero1_woman.png"
            alt="Team member"
            width={78}
            height={94}
            className="w-full h-full object-cover rounded-xl sm:rounded-[20px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
