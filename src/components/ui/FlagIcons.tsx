import React, { useId } from 'react';

interface FlagProps {
  className?: string;
}

/**
 * Flag of Vietnam (Cờ đỏ sao vàng)
 * Ratio: 4:3 (viewBox 0 0 640 480)
 */
export function FlagVN({ className = 'w-5 h-3.5' }: FlagProps) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="640" height="480" fill="#da251d" />
      <polygon
        fill="#ff0"
        points="320,84 357.1,198.2 477.1,198.2 380,268.8 417.1,383 320,312.4 222.9,383 260,268.8 162.9,198.2 282.9,198.2"
      />
    </svg>
  );
}

/**
 * Flag of the United States (Cờ Mỹ - English US)
 * Ratio: 4:3 (viewBox 0 0 640 480)
 */
export function FlagUS({ className = 'w-5 h-3.5' }: FlagProps) {
  const reactId = useId();
  const markerId = `us-star-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path fill="#bd3d44" d="M0 0h640v480H0" />
      <path
        stroke="#fff"
        strokeWidth="37"
        d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
      />
      <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
      <defs>
        <marker id={markerId} markerHeight="30" markerWidth="30">
          <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
        </marker>
      </defs>
      <path
        fill="none"
        markerMid={`url(#${markerId})`}
        d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
      />
    </svg>
  );
}

/**
 * Flag of the United Kingdom (Cờ Vương quốc Anh - English UK)
 * Ratio: 4:3 (viewBox 0 0 640 480)
 */
export function FlagGB({ className = 'w-5 h-3.5' }: FlagProps) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path
        fill="#FFF"
        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
      />
      <path
        fill="#C8102E"
        d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
      />
      <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
      <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
    </svg>
  );
}
