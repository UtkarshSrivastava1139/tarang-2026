'use client';

import React, { useEffect, useState } from 'react';
import { useLocale } from '@/context/LocaleContext';

// Target: 18 November 2026 at 3:00 PM IST (UTC 2026-11-18 09:30:00)
const TARGET_TIMESTAMP = Date.UTC(2026, 10, 18, 9, 30, 0);

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  isCompleted: boolean;
}

function calculateTimeRemaining(): TimeRemaining {
  const now = Date.now();
  const diff = TARGET_TIMESTAMP - now;

  // Event day is active for 8 hours after start
  const eventDuration = 8 * 60 * 60 * 1000;

  if (diff <= 0) {
    if (diff > -eventDuration) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true, isCompleted: false };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: false, isCompleted: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isLive: false,
    isCompleted: false
  };
}

export function Countdown() {
  const { t, isHindi } = useLocale();
  const [time, setTime] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
    isCompleted: false
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTime(calculateTimeRemaining());
    setMounted(true);
    const interval = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-navy rounded-lg p-4 border border-gold/40 shadow-editorial text-center min-h-[140px] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (time.isLive) {
    return (
      <div className="bg-gradient-to-r from-navy via-navy-deep to-navy p-4 rounded-lg border-2 border-vermilion shadow-vermilion-glow text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vermilion text-white text-xs font-bold uppercase tracking-wider animate-pulse">
          <span className="w-2 h-2 rounded-full bg-white" />
          {t('hero.eventLive')}
        </span>
        <p className="text-gold font-display text-sm mt-2 font-semibold">
          {isHindi ? 'समारोह विद्यालय प्रांगण में प्रारंभ है!' : 'Celebration is underway at School Campus!'}
        </p>
      </div>
    );
  }

  if (time.isCompleted) {
    return (
      <div className="bg-navy p-4 rounded-lg border border-gold/40 shadow-editorial text-center">
        <span className="text-gold font-display text-base font-semibold">
          {t('hero.eventConcluded')}
        </span>
        <p className="text-ivory/70 text-xs mt-1">
          {isHindi ? 'स्मृतियों के लिए गैलरी देखें' : 'Visit gallery to relive the celebration.'}
        </p>
      </div>
    );
  }

  const units = [
    { label: t('hero.days'), value: time.days },
    { label: t('hero.hours'), value: time.hours },
    { label: t('hero.mins'), value: time.minutes },
    { label: t('hero.secs'), value: time.seconds }
  ];

  return (
    <div className="bg-navy rounded-lg p-3.5 sm:p-4 border border-gold/40 shadow-editorial text-ivory relative overflow-hidden">
      {/* Subtle gold glow background */}
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gold/10 blur-xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-ivory/15 pb-2.5 mb-3">
        <div className="flex items-center gap-1.5 text-gold text-xs font-semibold uppercase tracking-wider">
          <svg className="w-3.5 h-3.5 text-gold animate-spin" style={{ animationDuration: '6s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[11px] sm:text-xs font-bold text-gold">{t('hero.countdownLabel')}</span>
        </div>
        <span className="text-[10px] sm:text-[11px] text-ivory/60 font-medium">
          18 Nov 2026 • 3:00 PM
        </span>
      </div>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 text-center">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="bg-navy-deep/80 border border-gold/25 rounded-md p-1.5 sm:p-2 flex flex-col items-center justify-center transition-transform hover:scale-102"
          >
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gold leading-none">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-ivory/70 mt-1 font-medium">
              {unit.label}
            </span>
          </div>
        ))}
      </div>

      {/* Location Footer */}
      <div className="mt-2.5 pt-2 border-t border-ivory/10 flex items-center justify-between text-[10px] text-ivory/70">
        <span className="truncate flex items-center gap-1">
          <svg className="w-3 h-3 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {isHindi ? 'विद्यालय प्रांगण, मथौली' : 'School Campus, Mathauli'}
        </span>
        <span className="text-gold font-semibold shrink-0">IST (UTC+5:30)</span>
      </div>
    </div>
  );
}

