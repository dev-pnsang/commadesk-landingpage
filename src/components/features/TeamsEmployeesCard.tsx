import React from 'react';
import Image from 'next/image';

const ORBIT_AVATARS = [
  { src: '/avatars/hero2_1.png', pos: 'top-0 left-1/2 -translate-x-1/2' },
  { src: '/avatars/hero2_2.png', pos: 'top-[7%] right-[25%]' },
  { src: '/avatars/hero2_3.png', pos: 'top-[25%] right-[7%]' },
  { src: '/avatars/hero2_4.png', pos: 'top-1/2 right-0 -translate-y-1/2' },
  { src: '/avatars/hero2_5.png', pos: 'bottom-[25%] right-[7%]' },
  { src: '/avatars/hero2_6.png', pos: 'bottom-[7%] right-[25%]' },
  { src: '/avatars/hero2_7.png', pos: 'bottom-0 left-1/2 -translate-x-1/2' },
  { src: '/avatars/hero2_8.png', pos: 'bottom-[7%] left-[25%]' },
  { src: '/avatars/hero1_man.png', pos: 'bottom-[25%] left-[7%]' },
  { src: '/avatars/hero1_woman.png', pos: 'top-1/2 left-0 -translate-y-1/2' },
  { src: '/avatars/sarah_mitchell.png', pos: 'top-[25%] left-[7%]' },
  { src: '/avatars/james_carter.png', pos: 'top-[7%] left-[25%]' },
];

export function TeamsEmployeesCard() {
  return (
    <div className="scroll-fade-up delay-300 bg-[#FAFAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      {/* Graphic: Vòng tròn 12 Avatar nhân sự xếp như mặt đồng hồ */}
      <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6 flex items-center justify-center min-h-[170px] relative overflow-hidden shadow-xs">
        {/* Tâm: Icon 2 người màu đen teamwork */}
        <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center z-20 text-gray-800">
          <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.66-3.3-1-4.5-1C5.17 13 2 14.17 2 16.5V19h15v-2.5c0-2.33-3.17-3.5-5.5-3.5zM7.5 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm9 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-.41 0-.85.04-1.31.11.87.69 1.48 1.63 1.69 2.76.71.18 1.4.38 2.12.63V19h4v-2.5c0-1.84-2.52-2.92-4.5-3.5z" />
          </svg>
        </div>

        {/* Vòng tròn 12 Avatar xoay chậm (animate-orbit-slow) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-slow">
          <div className="w-36 h-36 rounded-full relative">
            {ORBIT_AVATARS.map((av, idx) => (
              <div
                key={idx}
                className={`absolute ${av.pos} w-6 h-6 rounded-full border border-white shadow-2xs overflow-hidden`}
              >
                <Image
                  src={av.src}
                  alt={`Team avatar ${idx + 1}`}
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Internal Chat &amp; Notifications</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Keep teams aligned with matrix-based internal chat, realtime in-app notifications, events, and company surveys.
        </p>
      </div>
    </div>
  );
}
