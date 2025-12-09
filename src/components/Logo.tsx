import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Turbo Icon SVG */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path
          d="M12 20 L20 12 L28 20 L20 28 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="4" fill="currentColor" />
        <path
          d="M20 8 L20 12 M20 28 L20 32 M8 20 L12 20 M28 20 L32 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold text-white">
        İkitelli <span className="text-primary">Turbocu</span>
      </span>
    </div>
  );
}


