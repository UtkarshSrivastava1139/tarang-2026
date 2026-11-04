'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { culturalCategories, activityGroups } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';

export function CategoriesSection() {
  const { isHindi, t } = useLocale();

  const getStyleTokens = (color: string) => {
    switch (color) {
      case 'saffron':
        return {
          border: 'border-saffron/40 hover:border-saffron',
          badge: 'bg-saffron/15 text-saffron-dim border-saffron/30',
          indicator: 'bg-saffron',
          glow: 'group-hover:border-saffron/60 group-hover:bg-saffron/5',
          iconBg: 'bg-[#FFF8EE] border-saffron/30'
        };
      case 'emerald':
        return {
          border: 'border-emerald/40 hover:border-emerald',
          badge: 'bg-emerald/15 text-emerald-dim border-emerald/30',
          indicator: 'bg-emerald',
          glow: 'group-hover:border-emerald/60 group-hover:bg-emerald/5',
          iconBg: 'bg-[#F2F8F5] border-emerald/30'
        };
      case 'rose':
        return {
          border: 'border-rose/40 hover:border-rose',
          badge: 'bg-rose/15 text-rose-dim border-rose/30',
          indicator: 'bg-rose',
          glow: 'group-hover:border-rose/60 group-hover:bg-rose/5',
          iconBg: 'bg-[#FBF4F6] border-rose/30'
        };
      case 'vermilion':
        return {
          border: 'border-vermilion/40 hover:border-vermilion',
          badge: 'bg-vermilion/15 text-vermilion-dark border-vermilion/30',
          indicator: 'bg-vermilion',
          glow: 'group-hover:border-vermilion/60 group-hover:bg-vermilion/5',
          iconBg: 'bg-[#FDF4F3] border-vermilion/30'
        };
      case 'gold':
        return {
          border: 'border-gold/50 hover:border-gold',
          badge: 'bg-gold/15 text-gold-dim border-gold/40',
          indicator: 'bg-gold',
          glow: 'group-hover:border-gold/70 group-hover:bg-gold/5',
          iconBg: 'bg-[#FAF6EC] border-gold/40'
        };
      case 'navy':
      default:
        return {
          border: 'border-navy/35 hover:border-navy',
          badge: 'bg-navy/10 text-navy border-navy/25',
          indicator: 'bg-navy',
          glow: 'group-hover:border-navy/60 group-hover:bg-navy/5',
          iconBg: 'bg-[#F2F5FB] border-navy/30'
        };
    }
  };

  // Keep a global item counter across groups
  let globalItemIndex = 0;

  return (
    <section className="py-14 sm:py-20 tarang-woven border-b border-gold/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
              <span>02 • {t('categories.badge')}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
              {t('categories.title')}
            </h2>
            <p className="text-text-muted text-xs sm:text-sm mt-1 max-w-2xl">
              {t('categories.subtitle')}
            </p>
          </div>

          <Link
            href="/journey"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-vermilion border-b border-gold pb-0.5 uppercase tracking-wider transition-colors shrink-0"
          >
            <span>{isHindi ? 'सांस्कृतिक यात्रा देखें' : 'Explore Journey'}</span>
            <span>↗</span>
          </Link>
        </div>

        {/* Grouped Activities Layout */}
        <div className="space-y-12 sm:space-y-14">
          {activityGroups.map((group, groupIdx) => {
            const groupCategories = culturalCategories.filter((cat) => cat.groupId === group.id);
            if (groupCategories.length === 0) return null;

            return (
              <div key={group.id} className="space-y-5">
                {/* Subtle Group Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gold/30">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-vermilion shrink-0" />
                    <h3 className="font-display text-base sm:text-lg lg:text-xl font-bold text-navy tracking-wide">
                      {isHindi ? group.hi : group.en}
                    </h3>
                    <span className="text-[10px] font-mono font-bold text-gold-dim px-2 py-0.5 rounded-full bg-gold/10 border border-gold/30 uppercase">
                      {groupCategories.length} {groupCategories.length === 1 ? (isHindi ? 'विधा' : 'Category') : (isHindi ? 'विधाएँ' : 'Categories')}
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-text-muted leading-tight">
                    {isHindi ? group.descriptionHi : group.descriptionEn}
                  </p>
                </div>

                {/* Group Content: If 1 item (Beyond the Stage), render as an expansive editorial showcase card */}
                {groupCategories.length === 1 ? (
                  <div>
                    {groupCategories.map((category) => {
                      globalItemIndex += 1;
                      const styles = getStyleTokens(category.color);

                      return (
                        <div
                          key={category.id}
                          className={`p-4 sm:p-6 lg:p-8 rounded-xl bg-white/95 backdrop-blur-xs border ${styles.border} ${styles.glow} shadow-card hover:shadow-editorial transition-all duration-300 relative overflow-hidden group`}
                        >
                          {/* Top strip accent */}
                          <div className={`absolute top-0 left-0 right-0 h-1.5 ${styles.indicator}`} />

                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                            {/* Left Col: Illustration & Details */}
                            <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                              <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border ${styles.iconBg} p-2 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                                <Image
                                  src={category.icon}
                                  alt={isHindi ? category.hi : category.en}
                                  fill
                                  sizes="112px"
                                  className="object-contain p-1"
                                />
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                  <span className="text-xs font-mono font-bold text-text-muted/70 tracking-wider">
                                    0{globalItemIndex}
                                  </span>
                                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles.badge}`}>
                                    {isHindi ? 'परिसर प्रदर्शनी' : 'Campus Showcase'}
                                  </span>
                                </div>

                                <h4 className="font-display text-xl sm:text-2xl font-bold text-navy group-hover:text-vermilion transition-colors leading-tight">
                                  {isHindi ? category.hi : category.en}
                                </h4>
                                <p className="text-xs text-gold-dim font-hindi font-medium">
                                  {isHindi ? category.en : category.hi}
                                </p>
                                <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-xl">
                                  {isHindi ? category.descriptionHi : category.descriptionEn}
                                </p>
                              </div>
                            </div>

                            {/* Right Col: Campus Gallery Box */}
                            <div className="lg:col-span-4 bg-parchment/50 rounded-xl p-4 sm:p-5 border border-gold/30 flex flex-col justify-between space-y-3">
                              <div>
                                <span className="text-[10px] font-mono font-bold text-gold uppercase tracking-wider block mb-1">
                                  {isHindi ? 'रचनात्मक अभिव्यक्ति' : 'Student Creativity'}
                                </span>
                                <h5 className="font-display text-sm font-bold text-navy">
                                  {isHindi ? 'हस्तशिल्प एवं चित्रकला दीर्घा' : 'Art & Craft Gallery'}
                                </h5>
                                <p className="text-[11px] text-text-muted mt-1 leading-relaxed">
                                  {isHindi
                                    ? 'विद्यार्थियों द्वारा तैयार कलाकृतियाँ एवं मॉडल समारोह स्थल पर आगंतुकों हेतु प्रदर्शित रहेंगी।'
                                    : 'Original paintings, handmade crafts, and creative models exhibited across the campus arena.'}
                                </p>
                              </div>

                              <div className="pt-2 border-t border-gold/20 flex items-center justify-between text-[11px]">
                                <span className="text-text-muted">Mathauli Bazar</span>
                                <span className="text-gold-dim font-bold uppercase tracking-wider">18 Nov 2026</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Standard 3-column Grid for Multi-item Groups */
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {groupCategories.map((category) => {
                      globalItemIndex += 1;
                      const styles = getStyleTokens(category.color);

                      return (
                        <div
                          key={category.id}
                          className={`p-4 sm:p-6 rounded-xl bg-white/95 backdrop-blur-xs border ${styles.border} ${styles.glow} shadow-card hover:shadow-editorial transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                        >
                          {/* Top strip accent */}
                          <div className={`absolute top-0 left-0 right-0 h-1.5 ${styles.indicator}`} />

                          <div>
                            {/* Header Row: Index & Group Badge */}
                            <div className="flex items-center justify-between mb-4 pt-1">
                              <span className="text-xs font-mono font-bold text-text-muted/70 tracking-wider">
                                0{globalItemIndex}
                              </span>
                              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles.badge}`}>
                                {isHindi ? group.hi : group.en}
                              </span>
                            </div>

                            {/* High-detail Cultural Art Illustration */}
                            <div className="mb-4 flex items-center justify-start">
                              <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border ${styles.iconBg} p-2 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300`}>
                                <Image
                                  src={category.icon}
                                  alt={isHindi ? category.hi : category.en}
                                  fill
                                  sizes="96px"
                                  className="object-contain p-1"
                                />
                              </div>
                            </div>

                            {/* Title & Hindi Script */}
                            <h4 className="font-display text-xl sm:text-2xl font-bold text-navy group-hover:text-vermilion transition-colors leading-tight mb-1">
                              {isHindi ? category.hi : category.en}
                            </h4>
                            <p className="text-xs text-gold-dim font-hindi font-medium mb-3">
                              {isHindi ? category.en : category.hi}
                            </p>

                            {/* Description */}
                            <p className="text-xs sm:text-[13px] text-text-muted leading-relaxed">
                              {isHindi ? category.descriptionHi : category.descriptionEn}
                            </p>
                          </div>

                          {/* Card Action / Badge */}
                          <div className="mt-5 pt-3 border-t border-gold/25 flex items-center justify-between text-xs font-medium">
                            <span className="text-[11px] text-gold-dim uppercase tracking-wider font-semibold">
                              {isHindi ? 'तरंग 2.0 विधा' : 'Discipline'}
                            </span>
                            <span className="text-[11px] font-semibold text-navy/75 bg-parchment/60 px-2 py-0.5 rounded border border-gold/30">
                              {isHindi ? 'वार्षिक प्रस्तुति' : 'Annual Stage 2.0'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
