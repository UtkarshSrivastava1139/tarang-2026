'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';
import { Countdown } from '@/components/home/Countdown';
import { InvitationModal } from '@/components/home/InvitationModal';

export function Hero() {
  const { isHindi, t } = useLocale();
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-ivory pt-9 pb-12 sm:pt-14 sm:pb-16 border-b border-gold/30">
        {/* Auspicious Marigold & Brass Bells Toran Canopy across the top */}
        <div className="absolute top-0 inset-x-0 h-10 sm:h-14 pointer-events-none z-20 select-none overflow-hidden opacity-90">
          <Image
            src="/assets/tarang/generated/marigold-brass-bells-toran.png"
            alt=""
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Subtle Signature Canvas Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-25 select-none overflow-hidden">
          <Image
            src="/assets/tarang/raster/backgrounds/01_signature-canvas-16x9.webp"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Botanical Flourish in corner */}
        <div className="absolute top-4 right-0 w-44 sm:w-64 h-56 sm:h-80 opacity-20 pointer-events-none">
          <Image
            src="/assets/tarang/motifs/botanical-corner.svg"
            alt=""
            fill
            className="object-contain object-top-right"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2 sm:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Brand, Theme & Actions (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-5">
              
              {/* Event Kicker Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment/70 border border-gold/50 text-navy text-[11px] sm:text-xs font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                <span>{t('hero.kicker')}</span>
                <span className="text-gold/60">•</span>
                <span className="text-gold-dim font-bold">{siteConfig.event.shortDate}</span>
              </div>

              {/* Official Tarang Wordmark - Large & Authoritative */}
              <div className="relative w-full max-w-[460px] sm:max-w-[560px] lg:max-w-[620px] h-28 sm:h-36 lg:h-40">
                <Image
                  src={siteConfig.art.tarangLogo}
                  alt={siteConfig.edition}
                  fill
                  sizes="(max-width: 640px) 460px, (max-width: 1024px) 560px, 620px"
                  className="object-contain object-left"
                  priority
                />
              </div>

              {/* Permanent Tagline */}
              <p className="font-display italic text-lg sm:text-xl font-semibold text-gold tracking-wide -mt-2">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>

              {/* Authentic Hindi Theme Artwork */}
              <div className="relative w-full max-w-[280px] sm:max-w-[360px] h-12 sm:h-14">
                <Image
                  src={siteConfig.art.themeLogo}
                  alt={siteConfig.theme}
                  fill
                  sizes="(max-width: 640px) 280px, 360px"
                  className="object-contain object-left"
                  priority
                />
              </div>

              {/* Editorial Intro Text */}
              <p className="text-text-muted text-xs sm:text-sm leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>

              {/* Key Logistics Badges - Clean Vector Icons (No Emojis) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-lg pt-1">
                <div className="p-2.5 rounded-lg bg-white/95 border border-gold/40 shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] sm:text-xs font-bold text-navy block leading-tight">18 Nov 2026</span>
                    <span className="text-[10px] text-text-muted block leading-tight">{isHindi ? 'बुधवार' : 'Wednesday'}</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white/95 border border-gold/40 shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] sm:text-xs font-bold text-navy block leading-tight">3:00 PM IST</span>
                    <span className="text-[10px] text-text-muted block leading-tight">{isHindi ? 'अपराह्न से' : 'Onwards'}</span>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-white/95 border border-gold/40 shadow-2xs flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <span className="text-[11px] sm:text-xs font-bold text-navy block leading-tight">School Campus</span>
                    <span className="text-[10px] text-text-muted block leading-tight truncate">Mathauli Bazar</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Mobile Ergonomic 48px targets */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-2 w-full">
                <Link
                  href="/journey"
                  className="min-h-[48px] px-6 py-3 rounded-lg bg-vermilion hover:bg-vermilion-dark active:scale-[0.98] text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>{t('hero.exploreProgramme')}</span>
                  <span className="text-gold text-base font-bold">↗</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsInviteOpen(true)}
                  className="min-h-[48px] px-5 py-3 rounded-lg bg-navy hover:bg-navy-deep active:scale-[0.98] text-gold hover:text-white border border-gold/60 font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{t('hero.viewInvitation')}</span>
                </button>

                <Link
                  href="/gallery"
                  className="min-h-[48px] px-5 py-3 rounded-lg bg-white/95 hover:bg-parchment/40 active:scale-[0.98] text-navy border border-gold/40 font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-2xs flex items-center justify-center gap-2"
                >
                  <span>{t('hero.relive2024')}</span>
                </Link>
              </div>

              {/* Social Channels Quick Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={siteConfig.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/80 hover:bg-white border border-gold/30 text-[11px] font-medium text-navy transition-colors shadow-2xs"
                >
                  <span className="text-[#E1306C] font-bold">ig</span>
                  <span className="truncate">{siteConfig.social.instagram.handle}</span>
                </a>

                <a
                  href={siteConfig.social.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/80 hover:bg-white border border-gold/30 text-[11px] font-medium text-navy transition-colors shadow-2xs"
                >
                  <span className="text-[#1877F2] font-bold">fb</span>
                  <span>{siteConfig.social.facebook.handle}</span>
                </a>

                <a
                  href={siteConfig.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/80 hover:bg-white border border-gold/30 text-[11px] font-medium text-navy transition-colors shadow-2xs"
                >
                  <span className="text-[#FF0000] font-bold">yt</span>
                  <span>{siteConfig.social.youtube.channelName}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Countdown & Cultural Masterpiece Frame (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4 relative">
              
              {/* Live Countdown Card */}
              <Countdown />

              {/* Authentic Historic TARANG 2024 Photograph Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] w-full rounded-xl overflow-hidden border-2 border-gold/40 shadow-editorial bg-parchment/30 group">
                <Image
                  src="/gallery/tarang_2024_1.png"
                  alt="TARANG 2024 Stage Inauguration Celebration"
                  fill
                  sizes="(max-width: 768px) 100vw, 520px"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  priority
                />
                
                {/* Filigree Inner Inset Line */}
                <div className="absolute inset-2 border border-white/50 rounded-lg pointer-events-none" />

                {/* Caption pill */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent p-3 sm:p-4 text-ivory">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gold font-bold block">
                        TARANG 2024 • Stage Inauguration
                      </span>
                      <span className="font-display text-xs sm:text-sm text-ivory/95 font-medium">
                        {isHindi ? 'मंगलाचरण नृत्य एवं मंच उद्घाटन की सजीव स्मृति' : 'A Living Archive of Student Celebration'}
                      </span>
                    </div>
                    <Link
                      href="/gallery"
                      className="px-2.5 py-1 rounded bg-gold/25 hover:bg-gold/40 border border-gold/40 text-[10px] text-gold uppercase tracking-wider font-semibold transition-colors shrink-0"
                    >
                      {isHindi ? 'गैलरी' : 'Gallery'} ↗
                    </Link>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Invitation Card Modal */}
      <InvitationModal isOpen={isInviteOpen} onClose={() => setIsInviteOpen(false)} />
    </>
  );
}
