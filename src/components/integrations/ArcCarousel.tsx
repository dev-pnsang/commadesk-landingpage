'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TextBlurWipe } from '@/components/ui/TextBlurWipe';
import { INTEGRATION_APPS } from '@/data/integrations';
import { useLanguage } from '@/i18n/LanguageContext';

// SVG Icons cho từng app
const APP_ICONS: Record<string, React.ReactNode> = {
  teams: (
    <svg
      className="w-full h-full max-w-[40px] max-h-[40px] sm:max-w-[46px] sm:max-h-[46px] lg:max-w-[54px] lg:max-h-[54px] xl:max-w-[62px] xl:max-h-[62px]"
      viewBox="0 0 48 48"
      fill="none"
    >
      <circle cx="34" cy="16" r="4.5" fill="#5059C9" />
      <path
        d="M26 31C26 27.134 29.134 24 33 24H35C38.866 24 42 27.134 42 31V34H26V31Z"
        fill="#5059C9"
      />
      <rect x="6" y="12" width="24" height="24" rx="5" fill="#464EB8" />
      <path d="M13 18H23V21H19.5V30H16.5V21H13V18Z" fill="white" />
    </svg>
  ),
  gmail: (
    <svg
      className="w-full h-full max-w-[38px] max-h-[38px] sm:max-w-[44px] sm:max-h-[44px] lg:max-w-[52px] lg:max-h-[52px] xl:max-w-[58px] xl:max-h-[58px]"
      viewBox="0 0 24 24"
    >
      <path fill="#4285F4" d="M2.5 5.5v13c0 .8.7 1.5 1.5 1.5h3v-9L2.5 7.5z" />
      <path fill="#34A853" d="M17 20h3c.8 0 1.5-.7 1.5-1.5v-13L17 11z" />
      <path
        fill="#EA4335"
        d="M17 11V4c0-.7-.6-1.2-1.2-1.2h-7.6C7.6 2.8 7 3.3 7 4v7l5 3.8z"
      />
      <path
        fill="#FBBC04"
        d="M2.5 5.5C2.5 4.7 3.2 4 4 4c.4 0 .8.2 1.1.4L12 9.5l6.9-5.1c.3-.2.7-.4 1.1-.4.8 0 1.5.7 1.5 1.5L12 13.5z"
      />
    </svg>
  ),
  loom: (
    <svg
      className="w-full h-full max-w-[40px] max-h-[40px] sm:max-w-[46px] sm:max-h-[46px] lg:max-w-[54px] lg:max-h-[54px] xl:max-w-[62px] xl:max-h-[62px]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2v6m0 8v6M2 12h6m8 0h6m-3.07-6.93l-4.24 4.24m-5.38 5.38l-4.24 4.24m13.86 0l-4.24-4.24m-5.38-5.38L4.93 5.07"
        stroke="#625DF5"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  meet: (
    <svg
      className="w-full h-full max-w-[38px] max-h-[38px] sm:max-w-[44px] sm:max-h-[44px] lg:max-w-[52px] lg:max-h-[52px] xl:max-w-[58px] xl:max-h-[58px]"
      viewBox="0 0 24 24"
    >
      <path fill="#00832d" d="M15 8l4.5-3.5v15L15 16V8z" />
      <rect fill="#00ac47" x="2" y="6" width="13" height="12" rx="2" />
      <path fill="#ea4335" d="M15 8l4.5-3.5V8H15z" />
      <path fill="#2684fc" d="M15 16l4.5 3.5V16H15z" />
      <path fill="#ffba00" d="M2 16h13v2H2z" />
    </svg>
  ),
  outlook: (
    <svg
      className="w-full h-full max-w-[40px] max-h-[40px] sm:max-w-[46px] sm:max-h-[46px] lg:max-w-[54px] lg:max-h-[54px] xl:max-w-[62px] xl:max-h-[62px]"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M28 8H40C42.2091 8 44 9.79086 44 12V36C44 38.2091 42.2091 40 40 40H28V8Z"
        fill="#0078D4"
      />
      <path d="M28 8L44 20V36L28 24V8Z" fill="#1490DF" />
      <path d="M28 24L44 36H28V24Z" fill="#28A8EA" />
      <path d="M28 8L44 20H28V8Z" fill="#005A9E" />
      <rect x="6" y="11" width="22" height="26" rx="5" fill="#0078D4" />
      <circle cx="17" cy="24" r="6" stroke="white" strokeWidth="3" fill="none" />
    </svg>
  ),
};

export function ArcCarousel() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(2); // Loom ban đầu ở giữa
  const [windowWidth, setWindowWidth] = useState(1200);
  const [textVisible, setTextVisible] = useState(true);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  // Lấy kích thước màn hình
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Tự động xoay sau 2.0s
  const startTimer = useCallback(() => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    autoRotateRef.current = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % INTEGRATION_APPS.length);
        setTextVisible(true);
      }, 150);
    }, 2000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, [startTimer]);

  const handleTileClick = (index: number) => {
    if (index === currentIndex) return;
    setTextVisible(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setTextVisible(true);
    }, 150);
    startTimer();
  };

  // Tính toán vị trí theo tỷ lệ parabolic arc
  const isLargeDesktop = windowWidth >= 1280;
  const isMediumDesktop = windowWidth >= 1024 && windowWidth < 1280;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  let stepX1 = 182;
  let stepX2 = 356;
  let dropY1 = 22;
  let dropY2 = 72;
  let rot1 = 8.5;
  let rot2 = 17;
  let scale0 = 1.05;
  let scale1 = 0.94;
  let scale2 = 0.84;

  if (isLargeDesktop) {
    stepX1 = 182;
    stepX2 = 356;
    dropY1 = 22;
    dropY2 = 72;
    rot1 = 8.5;
    rot2 = 17;
    scale0 = 1.05;
    scale1 = 0.94;
    scale2 = 0.84;
  } else if (isMediumDesktop) {
    stepX1 = 160;
    stepX2 = 314;
    dropY1 = 20;
    dropY2 = 66;
    rot1 = 8.5;
    rot2 = 17;
    scale0 = 1.05;
    scale1 = 0.94;
    scale2 = 0.84;
  } else if (isTablet) {
    stepX1 = 122;
    stepX2 = 238;
    dropY1 = 16;
    dropY2 = 52;
    rot1 = 8;
    rot2 = 16;
    scale0 = 1.04;
    scale1 = 0.92;
    scale2 = 0.8;
  } else {
    stepX1 = 82;
    stepX2 = 158;
    dropY1 = 12;
    dropY2 = 36;
    rot1 = 7;
    rot2 = 14;
    scale0 = 1.04;
    scale1 = 0.86;
    scale2 = 0.7;
  }

  const isDesktop = isLargeDesktop || isMediumDesktop;
  const baseTopY = isLargeDesktop ? -22 : isMediumDesktop ? -20 : -16;

  const currentApp = INTEGRATION_APPS[currentIndex];

  return (
    <section
      id="integrations"
      className="canvas-card scroll-mt-28 sm:scroll-mt-36 md:scroll-mt-40 bg-white rounded-[32px] sm:rounded-[44px] md:rounded-[48px] shadow-sm border border-slate-200/60 overflow-hidden relative flex flex-col justify-center pt-24 sm:pt-32 md:pt-36 pb-20 sm:pb-28 px-4 sm:px-10 lg:px-14 text-center"
    >
      {/* Icon 2 bánh răng đôi màu cam đỏ */}
      <div className="scroll-blur-reveal inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white text-[#FF5A43] mb-5 sm:mb-6 shadow-sm border border-slate-100 mx-auto">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm-1 3a1 1 0 112 0 1 1 0 01-2 0z" />
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      </div>

      {/* Heading */}
      <div className="scroll-blur-reveal delay-100">
        <TextBlurWipe
          as="h2"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black text-gray-900 tracking-tight max-w-2xl mx-auto leading-tight"
        >
          {language === 'vi'
            ? ['Tích hợp công cụ sẵn có', <br key="br3" />, 'chỉ trong vài giây']
            : ['Integrate with your existing', <br key="br3" />, 'tools in seconds']}
        </TextBlurWipe>
      </div>

      {/* 3D Arc Curved Carousel Container */}
      <div className="scroll-scale-up delay-200 relative max-w-5xl xl:max-w-6xl mx-auto mt-12 sm:mt-16 flex flex-col items-center justify-center">
        <div
          id="arcContainer"
          className="relative w-full h-44 sm:h-52 md:h-60 lg:h-64 xl:h-72 flex items-center justify-center overflow-visible"
        >
          <div
            id="arcTrack"
            className="relative w-full max-w-[840px] md:max-w-[920px] lg:max-w-[1000px] xl:max-w-[1060px] h-40 sm:h-48 md:h-56 lg:h-60 xl:h-64 flex items-center justify-center"
          >
            {/* Left White Blur Shadow Mask */}
            <div className="pointer-events-none absolute -inset-y-4 left-0 w-16 sm:w-24 md:w-32 lg:w-36 xl:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-[22]" />

            {/* Right White Blur Shadow Mask */}
            <div className="pointer-events-none absolute -inset-y-4 right-0 w-16 sm:w-24 md:w-32 lg:w-36 xl:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-[22]" />

            {/* 5 Ứng dụng Arc Tiles */}
            {INTEGRATION_APPS.map((app, appIndex) => {
              let diff = (appIndex - currentIndex) % 5;
              if (diff < 0) diff += 5;
              const relIndex = diff > 2 ? diff - 5 : diff;

              let posX = 0;
              let posY = baseTopY;
              let rot = 0;
              let scale = 1;
              let zIndex = 10;
              let opacity = 1;

              if (relIndex === 0) {
                posX = 0;
                posY = baseTopY;
                rot = 0;
                scale = scale0;
                zIndex = 30;
                opacity = 1;
              } else if (Math.abs(relIndex) === 1) {
                posX = relIndex * stepX1;
                posY = baseTopY + dropY1;
                rot = relIndex * rot1;
                scale = scale1;
                zIndex = 25;
                opacity = 0.94;
              } else {
                posX = (relIndex > 0 ? 1 : -1) * stepX2;
                posY = baseTopY + dropY2;
                rot = (relIndex > 0 ? 1 : -1) * rot2;
                scale = scale2;
                zIndex = 10;
                opacity = isDesktop ? 0.68 : isTablet ? 0.55 : 0.42;
              }

              return (
                <div
                  key={app.id}
                  id={`arcTile${appIndex}`}
                  data-index={appIndex}
                  onClick={() => handleTileClick(appIndex)}
                  className="arc-tile cursor-pointer flex items-center justify-center select-none"
                  title={app.name}
                  style={{
                    transform: `translate3d(calc(-50% + ${posX}px), calc(-50% + ${posY}px), 0) scale(${scale}) rotate(${rot}deg)`,
                    zIndex,
                    opacity,
                  }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-[142px] xl:h-[142px] rounded-[20px] sm:rounded-[24px] md:rounded-[26px] lg:rounded-[28px] xl:rounded-[32px] bg-[#F1F3F5] flex items-center justify-center p-3.5 sm:p-4 md:p-5 lg:p-6 xl:p-7 shadow-sm transition-all duration-300">
                    {APP_ICONS[app.id]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active App Label & Details */}
        <div
          id="activeAppDetails"
          className="mt-6 sm:mt-8 text-center transition-all duration-300 min-h-[52px]"
          style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(4px)',
          }}
        >
          <h3
            id="activeAppName"
            className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight"
          >
            {currentApp.name}
          </h3>
          <p
            id="activeAppDesc"
            className="text-xs sm:text-sm font-normal text-gray-500 mt-1"
          >
            {currentApp.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
