import React from 'react';
import Image from 'next/image';

interface GoldDividerProps {
  className?: string;
  withLotus?: boolean;
}

export function GoldDivider({ className = '', withLotus = true }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <span className="h-px flex-1 max-w-[90px] bg-gradient-to-r from-transparent to-gold/70" />
      {withLotus ? (
        <span className="flex items-center justify-center text-gold">
          {/* Classical stylized Indian lotus / kalash motif */}
          <svg
            className="w-5 h-5 text-gold"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C12 2 10 7 10 11C10 13 11 15 12 15C13 15 14 13 14 11C14 7 12 2 12 2Z" opacity="0.9" />
            <path d="M8.5 7.5C7.2 9.8 6.5 12.5 7.2 14.5C7.7 15.8 8.8 16.5 10 16.2C9.2 14.5 9.2 11.5 10.8 9C9.9 8.2 9.1 7.7 8.5 7.5Z" opacity="0.75" />
            <path d="M15.5 7.5C16.8 9.8 17.5 12.5 16.8 14.5C16.3 15.8 15.2 16.5 14 16.2C14.8 14.5 14.8 11.5 13.2 9C14.1 8.2 14.9 7.7 15.5 7.5Z" opacity="0.75" />
            <circle cx="12" cy="18" r="1.5" />
          </svg>
        </span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-gold rotate-45" />
      )}
      <span className="h-px flex-1 max-w-[90px] bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

export function LotusSectionDivider({ className = '', inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <div className={`flex items-center justify-center my-6 ${className}`} aria-hidden="true">
      <div className={`relative w-44 sm:w-60 h-7 ${inverted ? 'brightness-125 contrast-125 opacity-90' : 'opacity-85'}`}>
        <Image
          src="/assets/tarang/motifs/lotus-section-divider.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function HeritageArchCorner({ position = 'top-right' }: { position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' }) {
  const getTransforms = () => {
    switch (position) {
      case 'top-left':
        return '';
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-[-1]';
    }
  };

  return (
    <svg
      className={`absolute w-8 h-8 text-gold/40 pointer-events-none ${getTransforms()}`}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 30V10C2 5.58 5.58 2 10 2H30" />
      <path d="M6 30V12C6 8.68 8.68 6 12 6H30" opacity="0.5" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}

