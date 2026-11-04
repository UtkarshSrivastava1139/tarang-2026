'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';
import { GoldDivider, LotusSectionDivider } from '@/components/common/Ornaments';

export function ThemeSection() {
  const { isHindi, t } = useLocale();

  return (
    <section className="py-14 sm:py-20 bg-ivory border-b border-gold/30 relative overflow-hidden">
      {/* Cultural Panorama Feature Backdrop */}
      <div className="absolute inset-x-0 top-0 h-[480px] pointer-events-none opacity-20 select-none overflow-hidden">
        <Image
          src="/assets/tarang/raster/backgrounds/05_heritage-panorama-ultrawide.webp"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ivory/70 to-ivory" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Index Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
          <span>01 • {t('theme.badge')}</span>
        </div>

        {/* Panoramic Watercolor Indian Heritage Banner with Centered Theme Logo */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] lg:aspect-[24/9] rounded-2xl overflow-hidden border-2 border-gold/40 shadow-editorial mb-10 group">
          <Image
            src={siteConfig.art.panorama}
            alt="One India, Many Colours - Watercolor Heritage Panorama"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
            priority
          />
          
          {/* Subtle warm center wash & vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-ivory/60" />

          {/* Centered Grand Theme Masterpiece Presentation */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center z-10">
            {/* Top Festival Edition Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/80 backdrop-blur-xs border border-gold/50 text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" />
              <span>{isHindi ? 'वार्षिक सांस्कृतिक महोत्सव २०२६' : 'Central Cultural Theme • 2026'}</span>
            </div>

            {/* Large Prominent Theme Logo */}
            <div className="relative w-full max-w-[320px] sm:max-w-[460px] md:max-w-[580px] lg:max-w-[660px] h-16 sm:h-24 md:h-32 drop-shadow-md">
              <Image
                src={siteConfig.art.themeLogo}
                alt={siteConfig.theme}
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 460px, 660px"
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Permanent Tagline */}
            <p className="font-display italic text-sm sm:text-lg md:text-xl font-bold text-navy tracking-wide mt-2 drop-shadow-xs">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>

            {/* Sub-label */}
            <span className="text-[10px] sm:text-xs text-navy/80 font-semibold tracking-wider uppercase mt-1">
              {isHindi ? 'एकता का सुरम्य उत्सव • Mathauli Bazar' : 'The Rhythm of Togetherness • Kushinagar'}
            </span>
          </div>
        </div>

        {/* Dual Column Editorial Layout */}
        <div className="bg-white/85 backdrop-blur-xs rounded-xl border border-gold/30 p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Title Column (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
                <span>{siteConfig.edition} • {t('theme.badge')}</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-none tracking-tight">
                {t('theme.titleLine1')}<br />
                <span className="text-vermilion italic font-normal">{t('theme.titleLine2')}</span>
              </h2>

              <p className="text-xs uppercase tracking-widest text-gold-dim font-bold pt-1">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Right Narrative Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4 border-l-2 border-gold/40 pl-5 sm:pl-8 text-navy/85">
              <p className="text-xs sm:text-sm leading-relaxed text-text-muted">
                {t('theme.description')}
              </p>

              <p className="text-xs sm:text-sm leading-relaxed text-text-muted">
                {t('theme.subtext')}
              </p>

              <GoldDivider withLotus={false} className="!justify-start my-3 opacity-60" />

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <div className="text-[11px] text-text-muted italic">
                  {isHindi
                    ? 'श्रीमती राधिका देवी इण्टर कॉलेज एवं चिल्ड्रेन्स एकेडमी का संयुक्त सांस्कृतिक मंच'
                    : 'Joint cultural forum of Smt. Radhika Devi Intermediate College & Children Academy'}
                </div>
                <Link
                  href="/journey"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-vermilion border-b border-gold pb-0.5 uppercase tracking-wider transition-colors"
                >
                  <span>{isHindi ? 'सम्पूर्ण यात्रा पढ़ें' : 'Read Full Journey'}</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Section Transition Motif */}
        <LotusSectionDivider className="mt-12 -mb-4" />

      </div>
    </section>
  );
}

