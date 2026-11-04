'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';

export function EventStrip() {
  const { t } = useLocale();

  return (
    <section className="bg-navy text-ivory border-y border-gold/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-ivory/15 py-3 sm:py-0">
          
          {/* Item 1: Date */}
          <div className="py-3.5 sm:py-5 px-3 lg:px-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gold font-bold block">
                {t('hero.days')}
              </span>
              <strong className="font-display text-sm sm:text-base text-ivory font-semibold block leading-tight">
                {t('eventStrip.dateTitle')}
              </strong>
              <small className="text-[10px] text-ivory/60 block leading-tight">
                {t('eventStrip.dateSubtitle')}
              </small>
            </div>
          </div>

          {/* Item 2: Time */}
          <div className="py-3.5 sm:py-5 px-3 lg:px-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gold font-bold block">
                {t('hero.hours')}
              </span>
              <strong className="font-display text-sm sm:text-base text-ivory font-semibold block leading-tight">
                {t('eventStrip.timeTitle')}
              </strong>
              <small className="text-[10px] text-ivory/60 block leading-tight">
                {t('eventStrip.timeSubtitle')}
              </small>
            </div>
          </div>

          {/* Item 3: Venue */}
          <div className="py-3.5 sm:py-5 px-3 lg:px-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gold font-bold block">
                Location
              </span>
              <strong className="font-display text-sm sm:text-base text-ivory font-semibold block leading-tight">
                {t('eventStrip.venueTitle')}
              </strong>
              <small className="text-[10px] text-ivory/60 block leading-tight">
                {t('eventStrip.venueSubtitle')}
              </small>
            </div>
          </div>

          {/* Item 4: Quick Action */}
          <div className="py-3 sm:py-5 px-3 lg:px-6 flex items-center justify-start lg:justify-center">
            <Link
              href="/journey"
              className="w-full py-2.5 px-4 rounded bg-vermilion hover:bg-vermilion-dark active:scale-95 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-between shadow-xs"
            >
              <span>{t('eventStrip.exploreAction')}</span>
              <span className="text-gold font-bold text-sm">↗</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

