'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';
import { GoldDivider } from '@/components/common/Ornaments';

export function ProgrammeClient() {
  const { isHindi } = useLocale();

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Edition Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-parchment/60 border border-gold/40 text-xs font-semibold text-gold-dim uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" />
          <span>{siteConfig.edition} • {siteConfig.event.shortDate}</span>
        </div>

        {/* Grand Headline */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
          {isHindi ? 'कार्यक्रम समय-सारिणी शीघ्र प्रकाशित होगी' : 'Programme Schedule Releasing Soon'}
        </h1>

        <p className="font-display italic text-base sm:text-lg text-gold font-semibold mt-2">
          &ldquo;{siteConfig.theme}&rdquo; — {siteConfig.tagline}
        </p>

        <p className="text-text-muted text-xs sm:text-sm mt-4 leading-relaxed max-w-2xl mx-auto">
          {isHindi
            ? 'तरंग २.० की संपूर्ण प्रस्तुति अनुसूची, मंच क्रम एवं समय-सारिणी का औपचारिक प्रकाशन विद्यार्थियों के पूर्वाभ्यास सत्रों के समापन के उपरांत मुख्य समारोह की तिथि के निकट किया जाएगा।'
            : 'The official stage sequence, session timings, and performance itinerary for TARANG 2.0 will be released closer to the event date after student auditions and rehearsals conclude.'}
        </p>

        <GoldDivider withLotus={true} className="mt-6 mb-10 opacity-75" />

        {/* Official Event Overview Box */}
        <div className="bg-white rounded-2xl border-2 border-gold/40 shadow-editorial p-6 sm:p-8 max-w-2xl mx-auto text-left relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-gold/25 mb-6">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold-dim block">
                Official Festival Notice
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-navy">
                {isHindi ? 'समारोह विवरण' : 'Event Logistics Summary'}
              </h2>
            </div>
            <span className="px-2.5 py-1 rounded bg-navy text-gold text-[10px] font-mono font-bold uppercase tracking-wider">
              18 NOV 2026
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 rounded-lg bg-ivory border border-gold/30">
              <span className="text-[10px] uppercase font-bold text-gold-dim block mb-1">
                {isHindi ? 'दिनांक' : 'Date'}
              </span>
              <span className="font-display font-bold text-navy block text-sm">
                18 Nov 2026
              </span>
              <span className="text-text-muted text-[11px]">
                {isHindi ? 'बुधवार' : 'Wednesday'}
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-ivory border border-gold/30">
              <span className="text-[10px] uppercase font-bold text-gold-dim block mb-1">
                {isHindi ? 'समय' : 'Timing'}
              </span>
              <span className="font-display font-bold text-navy block text-sm">
                3:00 PM
              </span>
              <span className="text-text-muted text-[11px]">
                {isHindi ? 'अपराह्न 3:00 बजे से' : 'Onwards'}
              </span>
            </div>

            <div className="p-3.5 rounded-lg bg-ivory border border-gold/30">
              <span className="text-[10px] uppercase font-bold text-gold-dim block mb-1">
                {isHindi ? 'स्थान' : 'Venue'}
              </span>
              <span className="font-display font-bold text-navy block text-sm truncate">
                School Campus
              </span>
              <span className="text-text-muted text-[11px] truncate block">
                Mathauli Bazar
              </span>
            </div>
          </div>

          {/* Action links */}
          <div className="mt-8 pt-6 border-t border-gold/25 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/journey"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-vermilion hover:bg-vermilion-dark text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm text-center"
            >
              <span>{isHindi ? 'तरंग की पावन यात्रा' : 'Explore The Journey'}</span> ↗
            </Link>

            <Link
              href="/gallery"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-navy hover:bg-navy-deep text-gold border border-gold/50 font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm text-center"
            >
              <span>{isHindi ? 'फोटो एवं वीडियो गैलरी' : 'Relive 2024 Celebration'}</span> ↗
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
