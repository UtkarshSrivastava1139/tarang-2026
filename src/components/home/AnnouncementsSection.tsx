'use client';

import React from 'react';
import { announcements } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';

export function AnnouncementsSection() {
  const { isHindi, t } = useLocale();

  return (
    <section className="py-14 sm:py-20 bg-ivory border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
          <span>05 • {t('announcements.badge')}</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight mb-8">
          {t('announcements.title')}
        </h2>

        {/* Announcements List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {announcements.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-lg border transition-all duration-300 relative flex flex-col justify-between ${
                item.highlight
                  ? 'bg-parchment/30 border-gold shadow-md'
                  : 'bg-white border-gold/30 shadow-card hover:border-gold/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      item.highlight
                        ? 'bg-vermilion text-white'
                        : 'bg-gold/15 text-gold-dim border border-gold/30'
                    }`}
                  >
                    {item.highlight ? '★ Official Notice' : 'Notice'}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-navy leading-snug mb-2">
                  {isHindi ? item.titleHi : item.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {isHindi ? item.detailHi : item.detailEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between text-[11px] text-text-muted">
                <span>Smt. Radhika Devi Institutions</span>
                <span className="text-gold font-bold">Mathauli Bazar</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

