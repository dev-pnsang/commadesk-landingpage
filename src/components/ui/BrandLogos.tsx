import React from 'react';

interface LogoProps {
  className?: string;
}

export function TeamsLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <circle cx="34" cy="16" r="4.5" fill="#5059C9" />
      <path
        d="M26 31C26 27.134 29.134 24 33 24H35C38.866 24 42 27.134 42 31V34H26V31Z"
        fill="#5059C9"
      />
      <rect x="6" y="12" width="24" height="24" rx="5" fill="#464EB8" />
      <path d="M13 18H23V21H19.5V30H16.5V21H13V18Z" fill="white" />
    </svg>
  );
}

export function GmailLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
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
  );
}

export function LoomLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2v6m0 8v6M2 12h6m8 0h6m-3.07-6.93l-4.24 4.24m-5.38 5.38l-4.24 4.24m13.86 0l-4.24-4.24m-5.38-5.38L4.93 5.07"
        stroke="#625DF5"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GoogleMeetLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#00832d" d="M15 8l4.5-3.5v15L15 16V8z" />
      <rect fill="#00ac47" x="2" y="6" width="13" height="12" rx="2" />
      <path fill="#ea4335" d="M15 8l4.5-3.5V8H15z" />
      <path fill="#2684fc" d="M15 16l4.5 3.5V16H15z" />
      <path fill="#ffba00" d="M2 16h13v2H2z" />
    </svg>
  );
}

export function OutlookLogo({ className = 'w-full h-full' }: LogoProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
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
  );
}
