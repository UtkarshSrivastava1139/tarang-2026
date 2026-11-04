'use client';

import React from 'react';
import { siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';

export function SocialMediaHub() {
  const { isHindi, t } = useLocale();

  return (
    <section className="py-14 sm:py-20 bg-ivory border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-widest mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
          <span>07 • {t('connect.badge')}</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy leading-tight mb-2">
          {t('connect.title')}
        </h2>
        <p className="text-text-muted text-xs sm:text-sm max-w-2xl mb-8">
          {t('connect.subtitle')}
        </p>

        {/* Channels Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          {/* WhatsApp Channel Card */}
          <div className="bg-gradient-to-br from-[#25D366]/10 via-[#25D366]/5 to-white rounded-xl p-5 sm:p-6 border border-[#25D366]/30 shadow-card flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  wa
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#25D366] bg-white/80 px-2.5 py-1 rounded-full border border-[#25D366]/30">
                  {isHindi ? 'त्वरित अपडेट' : 'Instant Broadcast'}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-navy mb-1">
                WhatsApp Channel
              </h3>
              <p className="text-sm font-semibold text-[#25D366] mb-3">
                {siteConfig.social.whatsapp.channelName}
              </p>

              <p className="text-xs text-text-muted leading-relaxed mb-6">
                {isHindi
                  ? 'विद्यालय की आधिकारिक घोषणाएं, कार्यक्रम सारणी, मंच निर्देश और सजीव उत्सव अपडेट सीधे अपने व्हाट्सएप पर प्राप्त करें।'
                  : 'Official announcements, program circulars, event guidelines, and live updates delivered directly to your WhatsApp.'}
              </p>
            </div>

            <a
              href={siteConfig.social.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-md bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>{t('connect.whatsappCta')}</span>
              <span>↗</span>
            </a>
          </div>
          
          {/* Instagram Card */}
          <div className="bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/5 to-[#F56040]/10 rounded-xl p-5 sm:p-6 border border-[#E1306C]/30 shadow-card flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  ig
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E1306C] bg-white/80 px-2.5 py-1 rounded-full border border-[#E1306C]/30">
                  Visual Stories
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-navy mb-1">
                Instagram Official
              </h3>
              <p className="text-sm font-semibold text-[#E1306C] mb-3">
                {siteConfig.social.instagram.handle}
              </p>

              <p className="text-xs text-text-muted leading-relaxed mb-4">
                {isHindi
                  ? 'समारोह की नवीनतम सूचनाएँ, रिहर्सल वीडियो, रील्स और मंच के पीछे की तैयारियों की दैनिक झलकियाँ यहाँ देखें।'
                  : 'Official announcements, rehearsal reels, behind-the-scenes photography, and live event day updates.'}
              </p>

              {/* Featured Reels Links - Zero Emojis */}
              <div className="space-y-1.5 mb-5 pt-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-muted block">
                  {isHindi ? 'विशेष रील्स' : 'Featured Reels'}:
                </span>
                <a
                  href="https://www.instagram.com/p/DDUu7JYyEVI/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded bg-white/80 hover:bg-white text-[11px] text-navy font-semibold transition-colors border border-gold/25"
                >
                  <span className="truncate">{isHindi ? 'ड्रोन विहंगम दृश्य' : 'Drone Aerial View Reel'}</span>
                  <span className="text-[#E1306C] font-bold text-xs">↗</span>
                </a>
                <a
                  href="https://www.instagram.com/p/DeJAhUHv9Uu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded bg-white/80 hover:bg-white text-[11px] text-navy font-semibold transition-colors border border-gold/25"
                >
                  <span className="truncate">{isHindi ? 'तरंग २.० टीज़र वीडियो' : 'TARANG 2.0 Teaser'}</span>
                  <span className="text-[#E1306C] font-bold text-xs">↗</span>
                </a>
                <a
                  href="https://www.instagram.com/p/DCib7ZCTcb2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded bg-white/80 hover:bg-white text-[11px] text-navy font-semibold transition-colors border border-gold/25"
                >
                  <span className="truncate">{isHindi ? 'तरंग २०२४ समारोह झलकियाँ' : '2024 Post-Event Highlights'}</span>
                  <span className="text-[#E1306C] font-bold text-xs">↗</span>
                </a>
              </div>
            </div>

            <a
              href={siteConfig.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-md bg-gradient-to-r from-[#833AB4] to-[#E1306C] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>{t('connect.instagramCta')}</span>
              <span>↗</span>
            </a>
          </div>

          {/* Facebook Card */}
          <div className="bg-gradient-to-br from-[#1877F2]/10 via-[#1877F2]/5 to-white rounded-xl p-5 sm:p-6 border border-[#1877F2]/30 shadow-card flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  fb
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#1877F2] bg-white/80 px-2.5 py-1 rounded-full border border-[#1877F2]/30">
                  School Community
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-navy mb-1">
                Facebook Official
              </h3>
              <p className="text-sm font-semibold text-[#1877F2] mb-3">
                {siteConfig.social.facebook.pageName}
              </p>

              <p className="text-xs text-text-muted leading-relaxed mb-6">
                {isHindi
                  ? 'विद्यालय परिवार, पूर्व विद्यार्थियों, अभिभावकों और क्षेत्रवासियों के लिए आधिकारिक सूचनाएँ और सांस्कृतिक स्मृतियाँ।'
                  : 'Institutional circulars, community updates, parent-teacher notices, and annual celebration photo galleries.'}
              </p>
            </div>

            <a
              href={siteConfig.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-md bg-[#1877F2] hover:bg-[#1565C0] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>{t('connect.facebookCta')}</span>
              <span>↗</span>
            </a>
          </div>

          {/* YouTube Card */}
          <div className="bg-gradient-to-br from-[#FF0000]/10 via-[#FF0000]/5 to-white rounded-xl p-5 sm:p-6 border border-[#FF0000]/30 shadow-card flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FF0000] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  yt
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF0000] bg-white/80 px-2.5 py-1 rounded-full border border-[#FF0000]/30">
                  Video Archive
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-navy mb-1">
                TARANG Video Archive
              </h3>
              <p className="text-sm font-semibold text-[#FF0000] mb-3">
                {siteConfig.social.youtube.channelName}
              </p>

              <p className="text-xs text-text-muted leading-relaxed mb-6">
                {isHindi
                  ? 'तरंग 2024 के सांस्कृतिक नृत्य, नाटक, गायन और मुख्य अतिथि संबोधन के सभी आधिकारिक वीडियो देखें।'
                  : 'Preserving full-length stage performances, musical harmonies, student dramas, and historic celebrations.'}
              </p>
            </div>

            <a
              href={siteConfig.social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-md bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>{t('connect.youtubeCta')}</span>
              <span>↗</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

