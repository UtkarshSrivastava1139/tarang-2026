'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationItems, siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';
import { GoldDivider } from '@/components/common/Ornaments';

export function Footer() {
  const { isHindi, t } = useLocale();

  return (
    <footer className="bg-navy-deep text-ivory pt-0 pb-24 md:pb-12 relative overflow-hidden">
      {/* Ornate Textile Border Strip along the top edge of the footer */}
      <div className="tarang-footer-border w-full" aria-hidden="true" />

      {/* Subtle filigree background overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none heritage-gold-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10">
        
        {/* Top Filigree Accent */}
        <GoldDivider withLotus={true} className="mb-10 opacity-70" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-ivory/10">
          
          {/* Institutional Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-md p-1 border border-gold/40">
                <Image
                  src={siteConfig.institutions.college.logo}
                  alt={siteConfig.institutions.college.en}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="relative w-12 h-12 bg-white rounded-md p-1 border border-gold/40">
                <Image
                  src={siteConfig.institutions.academy.logo}
                  alt={siteConfig.institutions.academy.en}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-ivory tracking-wide leading-tight">
                  {siteConfig.edition}
                </h3>
                <p className="text-gold font-display italic text-sm">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>

            <div className="space-y-1 text-xs text-ivory/75 font-sans leading-relaxed">
              <p className="font-semibold text-ivory">
                {isHindi ? siteConfig.institutions.college.hi : siteConfig.institutions.college.en}
              </p>
              <p>
                {isHindi ? siteConfig.institutions.academy.hi : siteConfig.institutions.academy.en}
              </p>
              <p className="text-gold/80 flex items-center gap-1.5 pt-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {t('footer.address')}
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              {isHindi ? 'नेविगेशन' : 'Platform Links'}
            </h4>
            <ul className="space-y-2 text-xs">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-ivory/70 hover:text-gold transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50" />
                    <span>{isHindi ? item.hi : item.en}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Event Reminder (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold">
              {isHindi ? 'आधिकारिक सोशल मीडिया' : 'Official Channels'}
            </h4>
            
            <div className="space-y-2">
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-navy-surface border border-gold/30 hover:border-gold transition-all group text-xs"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#E1306C]/20 text-[#E1306C] flex items-center justify-center font-bold text-xs">
                    ig
                  </div>
                  <div>
                    <span className="font-semibold text-ivory block leading-tight">Instagram</span>
                    <span className="text-[11px] text-ivory/60">{siteConfig.social.instagram.handle}</span>
                  </div>
                </div>
                <span className="text-gold group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>

              <a
                href={siteConfig.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-navy-surface border border-gold/30 hover:border-gold transition-all group text-xs"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1877F2]/20 text-[#1877F2] flex items-center justify-center font-bold text-xs">
                    fb
                  </div>
                  <div>
                    <span className="font-semibold text-ivory block leading-tight">Facebook</span>
                    <span className="text-[11px] text-ivory/60">{siteConfig.social.facebook.handle}</span>
                  </div>
                </div>
                <span className="text-gold group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>

              <a
                href={siteConfig.social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-navy-surface border border-gold/30 hover:border-gold transition-all group text-xs"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#FF0000]/20 text-[#FF0000] flex items-center justify-center font-bold text-xs">
                    yt
                  </div>
                  <div>
                    <span className="font-semibold text-ivory block leading-tight">YouTube Archive</span>
                    <span className="text-[11px] text-ivory/60">{siteConfig.social.youtube.channelName}</span>
                  </div>
                </div>
                <span className="text-gold group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>

              <a
                href={siteConfig.social.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-navy-surface border border-gold/30 hover:border-gold transition-all group text-xs"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center font-bold text-xs">
                    wa
                  </div>
                  <div>
                    <span className="font-semibold text-ivory block leading-tight">WhatsApp Channel</span>
                    <span className="text-[11px] text-ivory/60">{siteConfig.social.whatsapp.channelName}</span>
                  </div>
                </div>
                <span className="text-gold group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>

            {/* Event Day Pill */}
            <div className="p-2.5 rounded-md bg-gold/10 border border-gold/30 flex items-center gap-2.5 text-xs text-gold">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{isHindi ? siteConfig.event.dateDisplayHi : siteConfig.event.dateDisplayEn}</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-ivory/50">
          <p>{t('footer.rights')}</p>
          <p className="text-gold/60">{t('footer.designedFor')}</p>
        </div>

      </div>
    </footer>
  );
}

