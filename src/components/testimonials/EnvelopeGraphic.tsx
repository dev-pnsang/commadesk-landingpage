import React from 'react';

export function EnvelopeGraphic() {
  return (
    <>
      {/* 3a. Lưng phong bì & Lót tím violet mở nắp (Back Lining - Z-15, nằm SAU lá thư) */}
      <div
        id="envelopeBackWrap"
        className="testi-envelope-wrap absolute left-1/2 top-1/2 w-[94vw] max-w-[500px] sm:max-w-[540px] md:max-w-[560px] h-[390px] sm:h-[410px] md:h-[420px] pointer-events-none z-15"
      >
        <svg
          className="w-full h-full drop-shadow-md"
          viewBox="0 0 560 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="purpleLiningGrad"
              x1="0"
              y1="100"
              x2="560"
              y2="420"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#9661F8" />
              <stop offset="100%" stopColor="#7330F5" />
            </linearGradient>
          </defs>
          <path
            d="M 0 100 L 115 225 L 445 225 L 560 100 L 560 392 C 560 406 548 418 532 418 L 28 418 C 12 418 0 406 0 392 Z"
            fill="url(#purpleLiningGrad)"
          />
          <path d="M 0 100 L 115 225" stroke="#A77BF9" strokeWidth="2" opacity="0.6" />
          <path d="M 560 100 L 445 225" stroke="#8E53F7" strokeWidth="2" opacity="0.6" />
        </svg>
      </div>

      {/* 3b. Vạt trước phong bì màu trắng hình chữ V (Front Pocket - Z-25, ôm thân dưới của lá thư) */}
      <div
        id="envelopeFrontWrap"
        className="testi-envelope-wrap absolute left-1/2 top-1/2 w-[94vw] max-w-[500px] sm:max-w-[540px] md:max-w-[560px] h-[225px] sm:h-[240px] md:h-[250px] pointer-events-none z-25"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 560 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="envFrontDropShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="-4" stdDeviation="8" floodColor="#000000" floodOpacity="0.08" />
          </filter>
          <path
            d="M 0 25 L 280 135 L 560 25 L 560 224 C 560 238 548 248 532 248 L 28 248 C 12 248 0 238 0 224 Z"
            fill="#FFFFFF"
            filter="url(#envFrontDropShadow)"
          />
          <path d="M 0 248 L 260 140" stroke="#E8ECF0" strokeWidth="1.5" opacity="0.7" />
          <path d="M 560 248 L 300 140" stroke="#DFE3E8" strokeWidth="1.5" opacity="0.7" />
          <path d="M 0 25 L 280 135 L 560 25" stroke="#F1F3F5" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </>
  );
}
