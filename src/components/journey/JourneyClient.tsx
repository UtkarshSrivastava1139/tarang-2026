'use client';

import React from 'react';
import Link from 'next/link';
import { journeyMilestones } from '@/content/timeline';
import { siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';
import { GoldDivider } from '@/components/common/Ornaments';

export function JourneyClient() {
  const { isHindi } = useLocale();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald/15 text-emerald-dim border border-emerald/30 text-[10px] font-bold uppercase tracking-wider">
            <span>✓</span> {isHindi ? 'सम्पन्न' : 'Completed'}
          </span>
        );
      case 'in-progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-saffron/15 text-saffron-dim border border-saffron/30 text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
            {isHindi ? 'प्रगति पर' : 'Active'}
          </span>
        );
      case 'upcoming':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-navy/10 text-navy/70 border border-navy/20 text-[10px] font-bold uppercase tracking-wider">
            {isHindi ? 'आगामी' : 'Upcoming'}
          </span>
        );
    }
  };

  return (
    <div className="py-8 sm:py-14 space-y-16">
      
      {/* 1. Header & Institutional Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment/60 border border-gold/40 text-xs font-semibold text-gold-dim uppercase tracking-wider mb-3">
            <span>The Story &amp; Legacy</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            {isHindi ? 'तरंग की पावन यात्रा' : 'The Journey of TARANG'}
          </h1>
          <p className="font-display italic text-base sm:text-lg text-gold font-semibold mt-2">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
          <p className="text-text-muted text-xs sm:text-sm mt-3 leading-relaxed">
            {isHindi
              ? 'श्रीमती राधिका देवी इण्टर कॉलेज एवं चिल्ड्रेन्स एकेडमी का यह सांस्कृतिक उत्सव विद्यार्थियों की रचनात्मक ऊर्जा, राष्ट्रीय चेतना और सहभाव का जीवंत प्रतीक है।'
              : 'Founded on creative freedom and student expression, TARANG represents the heartbeat of Smt. Radhika Devi Intermediate College and Children Academy.'}
          </p>
          <GoldDivider withLotus={true} className="mt-5 mb-8 opacity-75" />
        </div>

        {/* Story Grid: Left Narrative + Right Royal Blue Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
          
          {/* Left Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-navy/85 leading-relaxed flex flex-col justify-between">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-snug mb-3">
                {isHindi ? 'सांस्कृतिक उत्सव का ध्येय एवं गौरव' : 'A Living Tradition of Cultural Excellence'}
              </h2>
              <p className="mb-3">
                {isHindi
                  ? '18 नवम्बर 2024 को आयोजित प्रथम संस्करण "तरंग 2024" की ऐतिहासिक सफलता के उपरांत, यह उत्सव अब 2026 में अपने नवीन स्वरूप "तरंग 2.0" के साथ लौट रहा है।'
                  : 'Following the grand success of TARANG on 18 November 2024, our annual festival returns in November 2026 under the cultural theme "एक भारत • अनेक रंग" (The Rhythm of Togetherness).'}
              </p>
              <p>
                {isHindi
                  ? 'हमारा उद्देश्य प्रत्येक विद्यार्थी को एक ऐसा मंच प्रदान करना है जहाँ वे शास्त्रीय संगीत, लोक नृत्य, नाटक और कला के माध्यम से अपनी प्रतिभा को संवार सकें।'
                  : 'Our mission is to provide every student an authentic platform to celebrate Indian classical ragas, vibrant folklore, theatrical drama, and civilizational unity.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gold/40 shadow-xs flex items-center gap-3.5 mt-4">
              <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-xs">
                <span className="font-bold text-navy block text-sm">
                  Smt. Radhika Devi Institutions
                </span>
                <span className="text-text-muted">
                  Intermediate College &amp; Children Academy, Mathauli Bazar
                </span>
              </div>
            </div>
          </div>

          {/* Right Royal Blue Showcase Card (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-navy via-navy-deep to-navy-surface rounded-2xl p-6 sm:p-8 border-2 border-gold/50 shadow-editorial text-ivory flex flex-col justify-between relative overflow-hidden">
            {/* Subtle radial glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-gold/15 text-gold border border-gold/40 text-[10px] font-bold uppercase tracking-widest">
                  {isHindi ? 'ऐतिहासिक कीर्तिमान • 18 नवम्बर 2024' : 'Proven Legacy • 18 Nov 2024'}
                </span>
                <span className="text-[11px] font-mono text-ivory/60">
                  Mathauli Bazar
                </span>
              </div>

              <div className="space-y-4 my-6">
                <div className="border-b border-ivory/15 pb-4">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-gold block leading-none">
                    10,000+
                  </span>
                  <p className="text-xs sm:text-sm text-ivory/80 mt-1 font-medium">
                    {isHindi ? 'दर्शक, अभिभावक एवं क्षेत्रवासी सम्मिलित हुए' : 'Visitors, Parents & Community Members'}
                  </p>
                </div>

                <div className="border-b border-ivory/15 pb-4">
                  <span className="font-display text-3xl sm:text-4xl font-bold text-ivory block leading-none">
                    10+ Hours
                  </span>
                  <p className="text-xs sm:text-sm text-ivory/80 mt-1 font-medium">
                    {isHindi ? 'सृजनात्मक सांस्कृतिक कार्यक्रम एवं प्रस्तुतियाँ' : 'Continuous Cultural Programs & Student Creativity'}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-gold font-bold block">
                    {isHindi ? 'विद्यालय प्रांगण, मथौली बाज़ार' : 'School Campus, Mathauli Bazar'}
                  </span>
                  <p className="text-xs text-ivory/70 mt-0.5">
                    {isHindi ? 'श्रीमती राधिका देवी इण्टर कॉलेज एवं चिल्ड्रेन्स एकेडमी' : 'Smt. Radhika Devi Intermediate College & Children Academy'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-ivory/15 flex items-center justify-between">
              <span className="text-xs text-ivory/70">
                {isHindi ? 'तरंग २०२४ की स्मृतियाँ' : 'TARANG 2024 Memories'}
              </span>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-gold hover:bg-gold-light text-navy font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>{isHindi ? 'फोटो गैलरी देखें' : 'View Photo Gallery'}</span>
                <span>↗</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Theme Deep-Dive: Ek Bharat, Anek Rang */}
      <section className="bg-parchment-grain py-14 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">
              {isHindi ? 'केंद्रीय विचार' : 'Central Concept'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
              {siteConfig.theme}
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-2">
              {isHindi
                ? 'उत्तर से दक्षिण, पूरब से पश्चिम—विविधता में एकता का अनुपम सौंदर्य।'
                : 'Celebrating the interconnected tapestry of regional traditions, languages, and artistic forms.'}
            </p>
          </div>

          {/* Regional Pillars Cards - Zero Emojis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-lg border border-gold/30 shadow-card">
              <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-wider mb-2 block">
                [ 01 • North ]
              </span>
              <h3 className="font-display text-base font-bold text-navy mb-1">North India</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {isHindi
                  ? 'कत्थक की पदचाप, शास्त्रीय राग, ब्रज की लोक संस्कृति एवं पंजाब का भांगड़ा।'
                  : 'Classical Kathak footwork, traditional ragas, Braj folklore, and energetic Bhangra.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gold/30 shadow-card">
              <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-wider mb-2 block">
                [ 02 • South ]
              </span>
              <h3 className="font-display text-base font-bold text-navy mb-1">South India</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {isHindi
                  ? 'भरतनाट्यम की आध्यात्मिक मुद्राएँ, कर्णाटक संगीत और मृदंगम की लयबद्ध ताल।'
                  : 'Spiritual Bharatanatyam mudras, Carnatic vocal harmonies, and temple rhythms.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gold/30 shadow-card">
              <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-wider mb-2 block">
                [ 03 • East &amp; NE ]
              </span>
              <h3 className="font-display text-base font-bold text-navy mb-1">East &amp; North-East</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {isHindi
                  ? 'असम का बिहू नृत्य, ओडिसी की लालित्यपूर्ण भंगिमाएँ एवं रबीन्द्र संगीत।'
                  : 'Rhythmic Bihu celebrations, Odissi sculptures in motion, and folk heritage.'}
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gold/30 shadow-card">
              <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-wider mb-2 block">
                [ 04 • West &amp; Central ]
              </span>
              <h3 className="font-display text-base font-bold text-navy mb-1">West &amp; Central</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {isHindi
                  ? 'गुजरात का गरबा, महाराष्ट्र की लावणी एवं राजस्थान के घूमर रंग।'
                  : 'Joyous Gujarati Garba, Maharashtrian Lavani, and regal Rajasthani Ghoomar.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Event Milestones Roadmap - Simple & Clean */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">
            {isHindi ? 'समारोह समयरेखा' : 'Event Milestones'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy">
            {isHindi ? 'संक्षिप्त ऐतिहासिक पड़ाव' : 'Key Milestones'}
          </h2>
          <p className="text-xs text-text-muted mt-2">
            {isHindi
              ? 'तरंग की स्थापना से मुख्य समारोह तक का संक्षिप्त विवरण।'
              : 'From the grand premiere to Wednesday, 18 November 2026.'}
          </p>
        </div>

        {/* Milestones Flow - Clean 3 Steps */}
        <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-gold/35">
          {journeyMilestones.map((m) => (
            <div key={m.id} className="relative pl-10 sm:pl-16">
              {/* Node Icon */}
              <div className="absolute left-1.5 sm:left-3.5 top-3 w-5 h-5 rounded-full bg-navy border-2 border-gold flex items-center justify-center text-[9px] text-gold font-bold shadow-xs">
                {m.status === 'completed' ? '✓' : '•'}
              </div>

              {/* Milestone Card */}
              <div className="bg-white rounded-xl p-5 border border-gold/30 shadow-card hover:shadow-editorial transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-gold-dim">
                      {m.phase}
                    </span>
                    <span className="text-xs text-text-muted">• {isHindi ? m.dateHi : m.dateEn}</span>
                  </div>
                  {getStatusBadge(m.status)}
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-navy mb-1.5">
                  {isHindi ? m.titleHi : m.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {isHindi ? m.descriptionHi : m.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Gallery */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-navy hover:bg-navy-deep text-gold border border-gold/50 font-semibold text-xs tracking-wider uppercase shadow-md transition-all active:scale-95"
          >
            <span>{isHindi ? 'तरंग स्मृति दीर्घा देखें' : 'View Festival Photo Gallery'}</span>
            <span>↗</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
