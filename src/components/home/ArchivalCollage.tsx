'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/context/LocaleContext';

export function ArchivalCollage() {
  const { isHindi, t } = useLocale();

  const photos = [
    {
      src: '/gallery/tarang-24/_DSC0101.JPG',
      alt: 'TARANG 2024 Group Dance Troupe',
      captionEn: 'Folk Rhythm & Synchronized Troupe Dance',
      captionHi: 'समूह नृत्य एवं लोक ताल प्रस्तुति',
      span: 'md:col-span-8 md:row-span-2 aspect-[16/10] sm:aspect-[16/9]'
    },
    {
      src: '/gallery/tarang-24/_DSC0214.JPG',
      alt: 'UP Board School Topper Award Ceremony on 18 November 2024',
      captionEn: 'UP Board Topper Felicitation (18 Nov 2024)',
      captionHi: 'यूपी बोर्ड टॉपर सम्मान (१८ नवम्बर २०२४)',
      span: 'md:col-span-4 aspect-[4/3]'
    },
    {
      src: '/gallery/tarang-24/_DSC0162.JPG',
      alt: 'Student Human Pyramid Acrobatic Dance',
      captionEn: 'Human Pyramid Acrobatic Choreography',
      captionHi: 'मानव पिरामिड एवं साहसिक नृत्य मंचन',
      span: 'md:col-span-4 aspect-[4/3]'
    },
    {
      src: '/gallery/tarang-24/_DSC0255.JPG',
      alt: 'Rani Laxmibai Historical Theatrical Play',
      captionEn: 'Rani Laxmibai Historical Theatrical Play',
      captionHi: 'रानी लक्ष्मीबाई ऐतिहासिक नाट्य मंचन',
      span: 'md:col-span-6 aspect-[16/10] sm:aspect-[16/9]'
    },
    {
      src: '/gallery/tarang-24/_DSC0338.JPG',
      alt: 'Ramayan Act: Hanuman and Mata Sita in Ashok Vatika',
      captionEn: 'Ramayan Act: Devotional Stage Play',
      captionHi: 'रामायण प्रसंग: अशोक वाटिका नाट्य मंचन',
      span: 'md:col-span-6 aspect-[16/10] sm:aspect-[16/9]'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-parchment-grain border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
              <span>03 • {t('archive.badge')}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight">
              {t('archive.title')}
            </h2>
            <p className="text-text-muted text-xs sm:text-sm mt-1">
              {t('archive.subtitle')}
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-vermilion border-b border-gold pb-0.5 uppercase tracking-wider transition-colors shrink-0"
          >
            <span>{t('archive.viewFull')}</span>
            <span>↗</span>
          </Link>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`relative rounded-lg overflow-hidden border border-gold/40 shadow-card hover:shadow-editorial group ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover group-hover:scale-103 transition-transform duration-700"
              />

              {/* Inner Filigree Border */}
              <div className="absolute inset-2 border border-white/40 rounded pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/60 to-transparent p-3 sm:p-4 text-ivory flex items-end justify-between">
                <div>
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider block">
                    0{index + 1} • TARANG 2024
                  </span>
                  <p className="font-display text-xs sm:text-sm font-semibold text-ivory/95">
                    {isHindi ? photo.captionHi : photo.captionEn}
                  </p>
                </div>
                <Link
                  href="/gallery"
                  className="opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded bg-gold/25 hover:bg-gold/40 text-[10px] text-gold font-bold uppercase tracking-wider"
                >
                  View ↗
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

