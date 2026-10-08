import React from 'react';

interface GraphicProps {
  className?: string;
}

export function NetworkConnectingLines() {
  return (
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
  );
}

export function CenterChevronIcon({ className = 'w-6 h-6' }: GraphicProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="3.5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function LightbulbNodeGraphic({ className = 'w-7 h-7' }: GraphicProps) {
  return (
    <svg
      className={className}
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
  );
}

export function BalloonsNodeGraphic({ className = 'w-8 h-8' }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
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
  );
}

export function LightningShieldNodeGraphic({ className = 'w-8 h-8' }: GraphicProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16l-3-6h3V6l5 7h-4v4z" />
    </svg>
  );
}

export function CartoonEyesNodeGraphic({ className = 'w-10 h-7' }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 44 28" fill="none">
      {/* Left Eye */}
      <ellipse cx="13" cy="14" rx="9" ry="12" fill="white" stroke="#0F172A" strokeWidth="2.8" />
      <circle cx="9.5" cy="14" r="4.6" fill="#0F172A" />
      <circle cx="8" cy="12" r="1.4" fill="white" />
      {/* Right Eye */}
      <ellipse cx="31" cy="14" rx="9" ry="12" fill="white" stroke="#0F172A" strokeWidth="2.8" />
      <circle cx="27.5" cy="14" r="4.6" fill="#0F172A" />
      <circle cx="26" cy="12" r="1.4" fill="white" />
    </svg>
  );
}
