'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationItems, siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';

export function Header() {
  const pathname = usePathname();
  const { locale, toggleLocale, isHindi, t } = useLocale();

  return (
    <>
      {/* Top Notification / Bulletin Ticker */}
      <div className="bg-navy text-ivory text-xs border-b border-gold/30 px-3 sm:px-6 py-1.5 flex items-center justify-between gap-3 text-[11px] sm:text-xs">
        <div className="flex items-center gap-2 truncate">
          <span className="inline-flex items-center gap-1 text-gold font-semibold uppercase tracking-wider shrink-0 text-[10px]">
            <span className="w-2 h-2 rounded-full bg-vermilion animate-pulse" />
            {t('common.announcement')}
          </span>
          <span className="hidden sm:inline text-gold/40">|</span>
          <span className="truncate text-ivory/90 font-medium">
            {isHindi
              ? 'वार्षिक सांस्कृतिक उत्सव • बुधवार, 18 नवम्बर 2026 • 3:00 बजे से'
              : 'Annual Cultural Festival • Wednesday, 18 Nov 2026 • 3:00 PM onwards'}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-gold/80 text-[11px] shrink-0 font-medium">
          <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{isHindi ? siteConfig.event.venueHi : siteConfig.event.venueEn}</span>
        </div>
      </div>

      {/* Main Institutional Header */}
      <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-gold/30 shadow-card">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2.5 sm:gap-4">
          
          {/* Institutional Lockup */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0">
            {/* Dual Logos Container */}
            <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-white rounded-lg border border-gold/40 shadow-xs group-hover:border-gold transition-colors shrink-0">
              <div className="relative w-7 h-7 sm:w-10 sm:h-10">
                <Image
                  src={siteConfig.institutions.college.logo}
                  alt={siteConfig.institutions.college.en}
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="w-px h-5 sm:h-6 bg-gold/40" />
              <div className="relative w-7 h-7 sm:w-10 sm:h-10">
                <Image
                  src={siteConfig.institutions.academy.logo}
                  alt={siteConfig.institutions.academy.en}
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Institutional Titles */}
            <div className="flex flex-col text-left min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-navy text-sm sm:text-base tracking-wide leading-tight group-hover:text-vermilion transition-colors">
                  {siteConfig.edition}
                </span>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded bg-gold/15 text-gold-dim font-bold border border-gold/30 uppercase tracking-widest">
                  2026
                </span>
              </div>
              
              {/* Responsive Subtitle: Clean on Mobile, Detailed on Desktop */}
              <h1 className="text-[10px] sm:text-xs font-semibold text-navy/85 uppercase tracking-wider leading-tight truncate">
                <span className="sm:hidden">
                  {isHindi ? 'श्रीमती राधिका देवी शिक्षण संस्थान' : 'Smt. Radhika Devi Institutions'}
                </span>
                <span className="hidden sm:inline">
                  {isHindi ? siteConfig.institutions.college.hi : siteConfig.institutions.college.en}
                </span>
              </h1>
              
              <p className="text-[9px] sm:text-[10px] text-text-muted leading-tight truncate">
                <span className="sm:hidden text-gold-dim font-medium">
                  {isHindi ? 'मथौली बाज़ार, कुशीनगर' : 'Mathauli Bazar, Kushinagar'}
                </span>
                <span className="hidden sm:inline">
                  &amp; {isHindi ? siteConfig.institutions.academy.hi : siteConfig.institutions.academy.en} • {isHindi ? 'मथौली बाज़ार' : 'Mathauli Bazar'}
                </span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Primary Navigation">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-2 text-xs lg:text-sm font-semibold tracking-wide rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-navy font-bold bg-gold/15 shadow-2xs'
                      : 'text-text-muted hover:text-navy hover:bg-gold/10'
                  }`}
                >
                  {isHindi ? item.hi : item.en}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-vermilion rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Tactile Bilingual Segmented Pill */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={toggleLocale}
              type="button"
              className="group relative flex items-center gap-1 p-1 sm:px-2.5 sm:py-1.5 rounded-full border border-gold/50 bg-white/90 hover:bg-white shadow-2xs transition-all active:scale-95"
              aria-label={`Switch language. Current: ${locale.toUpperCase()}`}
            >
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold transition-all ${
                  locale === 'en'
                    ? 'bg-navy text-gold shadow-xs'
                    : 'text-navy/60 hover:text-navy'
                }`}
              >
                EN
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold font-hindi transition-all ${
                  locale === 'hi'
                    ? 'bg-navy text-gold shadow-xs'
                    : 'text-navy/60 hover:text-navy'
                }`}
              >
                हिं
              </span>
            </button>
          </div>

        </div>
      </header>
    </>
  );
}

