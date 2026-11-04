'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { faqList } from '@/content/faqs';
import { useLocale } from '@/context/LocaleContext';
import { GoldDivider } from '@/components/common/Ornaments';

export function MoreClient() {
  const { isHindi } = useLocale();
  const [activeFaqId, setActiveFaqId] = useState<string | null>(faqList[0]?.id || null);

  const toggleFaq = (id: string) => {
    setActiveFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="py-8 sm:py-14 space-y-16">
      
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment/60 border border-gold/40 text-xs font-semibold text-gold-dim uppercase tracking-wider mb-3">
            <span>Directory &amp; Information</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            {isHindi ? 'संस्थान परिचय एवं मार्गदर्शिका' : 'Institutional Guide & Directory'}
          </h1>
          <p className="font-display italic text-base sm:text-lg text-gold font-semibold mt-2">
            TARANG 2.0 • Smt. Radhika Devi Institutions
          </p>
          <p className="text-text-muted text-xs sm:text-sm mt-3 leading-relaxed">
            {isHindi
              ? 'विद्यालय का परिचय, आधिकारिक निमंत्रण पत्र, प्रतिभागी दिशा-निर्देश, स्थान विवरण एवं सामान्य प्रश्नोत्तर।'
              : 'Everything you need to know about TARANG 2.0: institutional background, invitation, student participation, venue guidelines, and FAQs.'}
          </p>
          <GoldDivider withLotus={true} className="mt-5 mb-8 opacity-75" />
        </div>
      </section>

      {/* 2. Institutional Background Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">
            {isHindi ? 'संस्थान परिचय' : 'Our Institutions'}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            {isHindi ? 'शिक्षा एवं संस्कृति का पावन केंद्र' : 'Pioneering Education & Cultural Values'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Intermediate College Card */}
          <div className="bg-white rounded-xl border border-gold/40 shadow-card hover:shadow-editorial transition-all overflow-hidden flex flex-col justify-between group">
            {/* Campus Photo Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-parchment/20">
              <Image
                src={siteConfig.institutions.college.image}
                alt={isHindi ? siteConfig.institutions.college.hi : siteConfig.institutions.college.en}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-ivory">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-navy/85 border border-gold/40 text-gold shadow-xs">
                  {isHindi ? 'कॉलेज परिसर एवं मुख्य मंच प्रांगण' : 'College Campus & Event Arena'}
                </span>
                <span className="text-[10px] font-medium text-ivory/90">
                  Mathauli Bazar
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
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
                    <h3 className="font-display text-lg sm:text-xl font-bold text-navy leading-snug">
                      {isHindi ? siteConfig.institutions.college.hi : siteConfig.institutions.college.en}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {isHindi
                    ? 'श्रीमती राधिका देवी इण्टर कॉलेज मथौली बाज़ार में उच्च माध्यमिक शिक्षा का प्रतिष्ठित संस्थान है। यहाँ विद्यार्थियों को अकादमिक उत्कृष्टता के साथ-साथ नैतिक मूल्य, अनुशासन और राष्ट्रीय चेतना की शिक्षा दी जाती है।'
                    : 'Smt. Radhika Devi Intermediate College is a distinguished senior secondary institution in Mathauli Bazar, dedicated to academic distinction, scientific temperament, and ethical character building.'}
                </p>
              </div>

              <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-text-muted">
                <span>Mathauli Bazar, Kushinagar</span>
                <span className="text-gold font-bold">UP Board Affiliated</span>
              </div>
            </div>
          </div>

          {/* Children Academy Card */}
          <div className="bg-white rounded-xl border border-gold/40 shadow-card hover:shadow-editorial transition-all overflow-hidden flex flex-col justify-between group">
            {/* Campus Photo Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-parchment/20">
              <Image
                src={siteConfig.institutions.academy.image}
                alt={isHindi ? siteConfig.institutions.academy.hi : siteConfig.institutions.academy.en}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-ivory">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-navy/85 border border-gold/40 text-gold shadow-xs">
                  {isHindi ? 'चिल्ड्रेन्स एकेडमी परिसर' : 'Children Academy Campus'}
                </span>
                <span className="text-[10px] font-medium text-ivory/90">
                  Mathauli Bazar
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
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
                    <h3 className="font-display text-lg sm:text-xl font-bold text-navy leading-snug">
                      {isHindi ? siteConfig.institutions.academy.hi : siteConfig.institutions.academy.en}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  {isHindi
                    ? 'श्रीमती राधिका देवी चिल्ड्रेन्स एकेडमी बाल मनोविज्ञान पर आधारित आधुनिक एवं मूल्यनिष्ठ प्राथमिक व पूर्व-माध्यमिक शिक्षा प्रदान करती है, जहाँ खेलकूद और कलात्मक गतिविधियों द्वारा बच्चों का सर्वांगीण विकास होता है।'
                    : 'Smt. Radhika Devi Children Academy fosters joyful early childhood and middle school education, combining modern pedagogical methods with performing arts, sports, and cultural enrichment.'}
                </p>
              </div>

              <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs text-text-muted">
                <span>Mathauli Bazar, Kushinagar</span>
                <span className="text-gold font-bold">Holistic Learning</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Official Ceremonial Invitation Card */}
      <section className="bg-parchment-grain py-14 border-y border-gold/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">
              {isHindi ? 'आधिकारिक आमंत्रण' : 'Ceremonial Card'}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
              {isHindi ? siteConfig.invitation.titleHi : siteConfig.invitation.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-2">
              {isHindi
                ? 'प्रबंध तंत्र, प्रधानाचार्य, शिक्षक गण एवं समस्त विद्यार्थियों की ओर से सादर आमंत्रण।'
                : 'The Management, Principal, Staff, and Students warmly invite you to join the celebration.'}
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gold/40 shadow-editorial">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-md mx-auto rounded-lg overflow-hidden border border-gold/40 shadow-md">
              <Image
                src={siteConfig.invitation.image}
                alt="Official Invitation Card for TARANG 2.0"
                fill
                sizes="(max-width: 640px) 100vw, 450px"
                className="object-contain"
                priority
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteConfig.invitation.image}
                download="TARANG_2.0_Official_Invitation.png"
                className="px-5 py-2.5 rounded bg-vermilion hover:bg-vermilion-dark text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{isHindi ? 'निमंत्रण पत्र डाउनलोड करें' : 'Download Invitation Card'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Student Participation Guidelines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">
            {isHindi ? 'प्रतिभागिता नियम' : 'Participation Protocol'}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            {isHindi ? 'विद्यार्थी सहभागिता एवं मार्गदर्शिका' : 'Student Participation & Audition Details'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg border border-gold/30 shadow-card">
            <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-wider mb-2 block">
              [ 01 • Protocol ]
            </span>
            <h3 className="font-display text-base font-bold text-navy mb-1">
              {isHindi ? 'ऑफलाइन पंजीकरण' : 'Offline Registration'}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {isHindi
                ? 'सभी प्रतिभागी विद्यार्थियों का चयन विद्यालय सांस्कृतिक समिति एवं कक्षा अध्यापकों द्वारा परिसर में संपन्न होता है। कोई ऑनलाइन फॉर्म आवश्यक नहीं है।'
                : 'Registration and auditions are handled offline on campus through respective class teachers and faculty coordinators.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gold/30 shadow-card">
            <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-wider mb-2 block">
              [ 02 • Attire ]
            </span>
            <h3 className="font-display text-base font-bold text-navy mb-1">
              {isHindi ? 'वेशभूषा एवं मंच सज्जा' : 'Costumes & Attire'}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {isHindi
                ? 'शास्त्रीय एवं लोक नृत्यों के लिए पारंपरिक वेशभूषा संस्थान द्वारा समन्वयित की जाती है। सभी वेशभूषा भारतीय संस्कृति की गरिमा के अनुरूप हैं।'
                : 'Traditional cultural costumes and props representing different Indian states are arranged under teacher supervision.'}
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gold/30 shadow-card">
            <span className="text-[11px] font-mono font-bold text-gold uppercase tracking-wider mb-2 block">
              [ 03 • Recognition ]
            </span>
            <h3 className="font-display text-base font-bold text-navy mb-1">
              {isHindi ? 'सम्मान एवं प्रमाण पत्र' : 'Awards & Recognition'}
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              {isHindi
                ? 'उत्सव में भाग लेने वाले प्रत्येक विद्यार्थी को संस्था द्वारा प्रशस्ति पत्र एवं विशेष प्रदर्शन हेतु स्मृति चिह्न प्रदान किए जाते हैं।'
                : 'Every participant receives an institutional certificate of merit, and outstanding performances are honored by dignitaries.'}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Campus Venue & Location Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy text-ivory rounded-xl p-6 sm:p-10 border border-gold/40 shadow-editorial relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 heritage-gold-pattern pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block">
                {isHindi ? 'स्थल एवं पहुँच' : 'Venue & Directions'}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory leading-tight">
                {isHindi ? 'विद्यालय प्रांगण, मथौली बाज़ार' : 'School Campus, Mathauli Bazar'}
              </h2>
              <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed max-w-xl">
                {isHindi
                  ? 'समारोह विद्यालय के विशाल मुख्य प्रांगण (कैलाश रंगमंच) में आयोजित होगा। कुशीनगर जनपद के मथौली बाज़ार मुख्य मार्ग से परिसर तक सुगम पहुँच उपलब्ध है।'
                  : 'The celebration takes place on the main campus grounds in Mathauli Bazar, Kushinagar (U.P.), with convenient road connectivity and dedicated visitor parking.'}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded bg-navy-surface border border-gold/30">
                  <span className="text-gold font-bold block mb-0.5">Address</span>
                  <span className="text-ivory/70">{siteConfig.event.location}</span>
                </div>
                <div className="p-3 rounded bg-navy-surface border border-gold/30">
                  <span className="text-gold font-bold block mb-0.5">Date &amp; Time</span>
                  <span className="text-ivory/70">Wednesday, 18 Nov 2026 • 3:00 PM</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-deep p-5 rounded-lg border border-gold/30 space-y-3">
              <h3 className="font-display text-base font-bold text-gold">Visitor Protocol</h3>
              <ul className="space-y-2 text-xs text-ivory/80 list-disc list-inside">
                <li>Gates open for seating at 2:30 PM.</li>
                <li>Reserved seating for dignitaries, parents &amp; alumni.</li>
                <li>Free admission for all guardians &amp; guests.</li>
                <li>Designated visitor parking at main entry gate.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions (FAQ Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">
            {isHindi ? 'प्रश्नोत्तर' : 'Information Desk'}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy">
            {isHindi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
          </h2>
          <p className="text-xs text-text-muted mt-2">
            {isHindi ? 'अभिभावकों एवं अतिथियों के सामान्य प्रश्नों के उत्तर।' : 'Answers to common queries regarding TARANG 2.0.'}
          </p>
        </div>

        <div className="space-y-3">
          {faqList.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gold/30 overflow-hidden shadow-card transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-parchment/20 transition-colors"
                >
                  <span className="font-display text-sm sm:text-base font-bold text-navy">
                    {isHindi ? faq.questionHi : faq.questionEn}
                  </span>
                  <span className="text-gold font-bold text-base shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-gold/15 bg-ivory/20 animate-fadeIn">
                    {isHindi ? faq.answerHi : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

