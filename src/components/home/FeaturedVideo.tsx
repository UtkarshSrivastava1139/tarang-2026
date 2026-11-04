'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';
import { GoldDivider } from '@/components/common/Ornaments';

export function FeaturedVideo() {
  const { isHindi } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  const video = siteConfig.video;

  return (
    <section className="py-16 sm:py-24 bg-navy-deep text-ivory border-b border-gold/40 relative overflow-hidden">
      {/* 06_midnight-celebration-16x9 Raster Celebration Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none overflow-hidden">
        <Image
          src="/assets/tarang/raster/backgrounds/06_midnight-celebration-16x9.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Decorative Rangoli Mandala Flanks (pointer-events: none, low opacity) */}
      <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 opacity-15 pointer-events-none select-none">
        <Image
          src="/assets/tarang/raster/decorative-motifs/rangoli-mandala.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 opacity-15 pointer-events-none select-none">
        <Image
          src="/assets/tarang/raster/decorative-motifs/rangoli-mandala.webp"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-xs font-semibold text-gold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
            <span>04 • {isHindi ? 'जीवंत स्मृति' : 'Relive the Moments'}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory leading-tight">
            {isHindi ? 'तरंग का सजीव दर्शन' : 'The Celebration in Motion'}
          </h2>

          <p className="text-xs sm:text-sm text-ivory/70 mt-3 max-w-xl mx-auto leading-relaxed">
            {isHindi ? video.descHi : video.descEn}
          </p>

          <GoldDivider withLotus={true} className="mt-4 mb-2 opacity-60" />
        </div>

        {/* Video Player Display Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-black group">
            
            {isPlaying ? (
              <iframe
                src={`${video.embedUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={isHindi ? video.titleHi : video.titleEn}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true);
                }}
                aria-label="Play festival film"
              >
                {/* Poster Background */}
                <Image
                  src="/gallery/tarang_2024_1.png"
                  alt="TARANG Festival Video Poster"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover opacity-75 group-hover:scale-103 group-hover:opacity-90 transition-all duration-700"
                  priority
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-black/40" />

                {/* Filigree Inner Inset Frame */}
                <div className="absolute inset-3 border border-white/30 rounded-xl pointer-events-none" />

                {/* Play Button Lockup */}
                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FF0000] hover:bg-[#CC0000] text-white flex items-center justify-center text-2xl sm:text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    ▶
                  </div>

                  <span className="font-display text-base sm:text-lg font-bold text-ivory tracking-wide mt-4 drop-shadow">
                    {isHindi ? video.titleHi : video.titleEn}
                  </span>

                  <span className="text-xs text-gold uppercase tracking-wider font-semibold mt-1">
                    {isHindi ? 'वीडियो देखने के लिए क्लिक करें' : 'Click to Play Official Film'}
                  </span>
                </div>

                {/* Bottom Video Length / Badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-ivory/80 pointer-events-none z-10">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 border border-white/20 text-[10px] uppercase font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-pulse" />
                    YouTube Official
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono font-bold text-gold">
                    HD 1080p
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Action Footer Bar */}
          <div className="mt-5 p-4 sm:p-5 rounded-xl bg-navy-surface border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-0.5">
              <h3 className="font-display text-base sm:text-lg font-bold text-gold">
                {isHindi ? video.titleHi : video.titleEn}
              </h3>
              <p className="text-xs text-ivory/70">
                {isHindi
                  ? 'श्रीमती राधिका देवी इण्टर कॉलेज एवं चिल्ड्रेन्स एकेडमी का आधिकारिक सांस्कृतिक संकलन'
                  : 'Official cultural chronicle of Smt. Radhika Devi Intermediate College & Children Academy'}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={video.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded bg-[#FF0000] hover:bg-[#CC0000] active:scale-95 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
              >
                <span>{isHindi ? 'यूट्यूब पर देखें' : 'Watch on YouTube'}</span>
                <span>↗</span>
              </a>

              <Link
                href="/gallery"
                className="px-4 py-2 rounded bg-gold/15 hover:bg-gold/25 border border-gold/40 active:scale-95 text-gold text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                {isHindi ? 'फोटो गैलरी' : 'Photo Gallery'} ↗
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

