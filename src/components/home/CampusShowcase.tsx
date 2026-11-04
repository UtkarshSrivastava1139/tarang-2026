'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';

export function CampusShowcase() {
  const { isHindi, t } = useLocale();

  return (
    <section className="py-14 sm:py-20 bg-ivory border-b border-gold/30 relative overflow-hidden">
      {/* Subtle Woven Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-multiply select-none">
        <Image
          src="/assets/tarang/raster/patterns/01_subtle-woven-floral-background.webp"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
              <span>05 • {t('campus.badge')}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
              {t('campus.title')}
            </h2>
            <p className="text-text-muted text-xs sm:text-sm mt-1 max-w-2xl">
              {t('campus.subtitle')}
            </p>
          </div>

          <Link
            href="/more"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-vermilion border-b border-gold pb-0.5 uppercase tracking-wider transition-colors shrink-0"
          >
            <span>{isHindi ? 'विस्तृत संस्थान परिचय देखें' : 'View Institutional Guide'}</span>
            <span>↗</span>
          </Link>
        </div>

        {/* Dual Campus Visual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Intermediate College (Event Main Grounds) */}
          <div className="bg-white rounded-2xl border-2 border-gold/40 shadow-card hover:shadow-editorial transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            {/* Campus Real Photograph */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-parchment/30">
              <Image
                src={siteConfig.institutions.college.image}
                alt={isHindi ? siteConfig.institutions.college.hi : siteConfig.institutions.college.en}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              
              {/* Inner Filigree Accent */}
              <div className="absolute inset-2 border border-white/40 rounded-lg pointer-events-none" />

              {/* Gradient & Labels */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-ivory">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-navy/85 border border-gold/40 text-gold shadow-xs inline-block mb-1">
                    {isHindi ? 'समारोह का मुख्य प्रांगण' : 'Main Festival Arena'}
                  </span>
                  <p className="font-display text-sm sm:text-base font-bold text-ivory leading-tight">
                    {isHindi ? 'हरित मैदान एवं भव्य मंच स्थल' : 'Green Lawn & Grand Stage Grounds'}
                  </p>
                </div>
                <span className="text-[10px] text-ivory/80 font-mono font-medium shrink-0">
                  Mathauli Bazar
                </span>
              </div>
            </div>

            {/* Institution Details */}
            <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 bg-ivory rounded-lg p-1 border border-gold/30 shrink-0">
                    <Image
                      src={siteConfig.institutions.college.logo}
                      alt={siteConfig.institutions.college.en}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-dim block">
                      Senior Secondary Institution
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-navy leading-snug">
                      {isHindi ? siteConfig.institutions.college.hi : siteConfig.institutions.college.en}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-text-muted leading-relaxed">
                  {isHindi
                    ? 'श्रीमती राधिका देवी इण्टर कॉलेज मथौली बाज़ार में उच्च माध्यमिक शिक्षा का प्रतिष्ठित संस्थान है। इसी विस्तृत एवं सुरम्य प्रांगण में तरंग २.० का मुख्य मंच सजाया जाएगा।'
                    : 'A distinguished senior secondary campus in Mathauli Bazar featuring expansive green grounds where the grand stage of TARANG 2.0 will welcome students, guests, and dignitaries.'}
                </p>
              </div>

              <div className="pt-3 border-t border-gold/20 flex items-center justify-between text-xs text-text-muted">
                <span>{isHindi ? 'कुशीनगर, उत्तर प्रदेश' : 'Kushinagar, Uttar Pradesh'}</span>
                <span className="text-gold font-bold">{isHindi ? 'समारोह स्थल' : 'Event Venue'}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Children Academy (Cultural Courtyard) */}
          <div className="bg-white rounded-2xl border-2 border-gold/40 shadow-card hover:shadow-editorial transition-all duration-300 overflow-hidden flex flex-col justify-between group">
            {/* Campus Real Photograph */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-parchment/30">
              <Image
                src={siteConfig.institutions.academy.image}
                alt={isHindi ? siteConfig.institutions.academy.hi : siteConfig.institutions.academy.en}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              
              {/* Inner Filigree Accent */}
              <div className="absolute inset-2 border border-white/40 rounded-lg pointer-events-none" />

              {/* Gradient & Labels */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-ivory">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded bg-navy/85 border border-gold/40 text-gold shadow-xs inline-block mb-1">
                    {isHindi ? 'कला एवं सांस्कृतिक परिसर' : 'Cultural Courtyard'}
                  </span>
                  <p className="font-display text-sm sm:text-base font-bold text-ivory leading-tight">
                    {isHindi ? 'प्राथमिक एवं पूर्व-माध्यमिक परिसर' : 'Foundational Academy Campus'}
                  </p>
                </div>
                <span className="text-[10px] text-ivory/80 font-mono font-medium shrink-0">
                  Mathauli Bazar
                </span>
              </div>
            </div>

            {/* Institution Details */}
            <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 bg-ivory rounded-lg p-1 border border-gold/30 shrink-0">
                    <Image
                      src={siteConfig.institutions.academy.logo}
                      alt={siteConfig.institutions.academy.en}
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gold-dim block">
                      Foundational Academy
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-navy leading-snug">
                      {isHindi ? siteConfig.institutions.academy.hi : siteConfig.institutions.academy.en}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-text-muted leading-relaxed">
                  {isHindi
                    ? 'श्रीमती राधिका देवी चिल्ड्रेन्स एकेडमी बाल मनोविज्ञान पर आधारित मूल्यनिष्ठ प्राथमिक शिक्षा और बाल प्रतिभा संवर्धन का पावन केंद्र है, जहाँ के नन्हे विद्यार्थी तरंग में उत्साहपूर्वक भाग लेते हैं।'
                    : 'Fostering foundational learning and student talent, where our young learners prepare vibrant presentations, dramas, and traditional arts for the annual cultural celebration.'}
                </p>
              </div>

              <div className="pt-3 border-t border-gold/20 flex items-center justify-between text-xs text-text-muted">
                <span>{isHindi ? 'कुशीनगर, उत्तर प्रदेश' : 'Kushinagar, Uttar Pradesh'}</span>
                <span className="text-gold font-bold">{isHindi ? 'सह-आयोजक' : 'Co-Host Institution'}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

