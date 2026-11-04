'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { GalleryPhoto } from '@/content/gallery';
import { useLocale } from '@/context/LocaleContext';

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ photos, currentIndex, onClose, onNavigate }: LightboxProps) {
  const { isHindi } = useLocale();

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + photos.length) % photos.length;
    onNavigate(nextIdx);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % photos.length;
    onNavigate(nextIdx);
  }, [currentIndex, photos.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, handlePrev, handleNext]);

  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur-lg flex flex-col justify-between p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo Viewer"
    >
      {/* Top Header Bar */}
      <div
        className="flex items-center justify-between text-ivory max-w-7xl w-full mx-auto pb-3 border-b border-ivory/15"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 rounded bg-gold/20 text-gold text-xs font-mono font-bold">
            {currentIndex + 1} / {photos.length}
          </span>
          <span className="text-xs uppercase tracking-wider text-ivory/70 hidden sm:inline">
            TARANG {currentPhoto.year} Archive
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={currentPhoto.src}
            download={`TARANG_${currentPhoto.id}.png`}
            className="px-3 py-1 rounded bg-navy-surface border border-gold/40 hover:border-gold text-ivory text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:inline">{isHindi ? 'डाउनलोड' : 'Save Photo'}</span>
          </a>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-navy-surface border border-ivory/20 hover:border-gold text-ivory flex items-center justify-center transition-colors text-sm"
            aria-label="Close photo viewer"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Center Image with Navigation Controls */}
      <div
        className="relative flex-1 flex items-center justify-center my-2 max-w-5xl w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-1 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy/80 hover:bg-navy border border-gold/40 text-gold flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg text-lg"
          aria-label="Previous photograph"
        >
          ‹
        </button>

        {/* Current Image */}
        <div className="relative w-full h-[60vh] sm:h-[72vh] rounded-lg overflow-hidden border border-gold/30 shadow-2xl">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-1 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy/80 hover:bg-navy border border-gold/40 text-gold flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg text-lg"
          aria-label="Next photograph"
        >
          ›
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div
        className="max-w-4xl w-full mx-auto bg-navy/90 border border-gold/30 rounded-lg p-3 sm:p-4 text-center text-ivory"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="font-display text-sm sm:text-base font-bold text-gold tracking-wide">
          {isHindi ? currentPhoto.titleHi : currentPhoto.titleEn}
        </h4>
        <p className="text-xs text-ivory/80 mt-1 max-w-2xl mx-auto">
          {isHindi ? currentPhoto.captionHi : currentPhoto.captionEn}
        </p>
      </div>
    </div>
  );
}

