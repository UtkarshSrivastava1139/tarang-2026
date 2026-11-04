'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { VideoArchiveItem } from '@/content/gallery';
import { useLocale } from '@/context/LocaleContext';

interface VideoModalProps {
  video: VideoArchiveItem | null;
  onClose: () => void;
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  const { isHindi } = useLocale();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  const isEmbeddable = video.youtubeId && video.youtubeId.length === 11;

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-deep/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video Player"
    >
      <div
        className="relative max-w-3xl w-full bg-navy rounded-xl border border-gold/40 shadow-2xl overflow-hidden text-ivory flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-4 py-3 bg-navy-deep border-b border-ivory/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0000]" />
            <h3 className="font-display text-sm sm:text-base font-bold text-ivory truncate max-w-md">
              {isHindi ? video.titleHi : video.titleEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-navy-surface border border-ivory/20 hover:border-gold text-ivory flex items-center justify-center text-sm"
          >
            ✕
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {isEmbeddable ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={isHindi ? video.titleHi : video.titleEn}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center group">
              <Image
                src={video.thumbnail}
                alt={video.titleEn}
                fill
                sizes="800px"
                className="object-cover opacity-60 group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white flex items-center justify-center text-2xl shadow-xl hover:scale-108 transition-all"
                >
                  ▶
                </a>
                <span className="text-xs uppercase tracking-wider text-ivory font-semibold mt-3">
                  {isHindi ? 'यूट्यूब पर आधिकारिक वीडियो देखें' : 'Watch Full Recording on YouTube'}
                </span>
                <span className="text-[11px] text-gold/80 mt-1">
                  SRDIC Tarang Official Channel
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="p-4 sm:p-5 bg-navy-surface border-t border-ivory/10 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="px-2.5 py-0.5 rounded bg-gold/20 text-gold font-semibold uppercase tracking-wider text-[10px]">
              {isHindi ? video.categoryHi : video.categoryEn}
            </span>
            <span className="text-ivory/60">⏱ {video.duration}</span>
          </div>
          <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed">
            {isHindi ? video.descriptionHi : video.descriptionEn}
          </p>
          <div className="pt-2 flex justify-end">
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm"
            >
              <span>{isHindi ? 'यूट्यूब चैनल खोलें' : 'Open in YouTube'}</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
