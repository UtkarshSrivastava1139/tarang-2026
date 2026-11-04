'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { galleryPhotos, videoArchive, instagramReels, GalleryPhoto, VideoArchiveItem } from '@/content/gallery';
import { siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';
import { Lightbox } from '@/components/gallery/Lightbox';
import { VideoModal } from '@/components/gallery/VideoModal';
import { GoldDivider } from '@/components/common/Ornaments';

type AlbumCategory = 'all' | 'dance' | 'drama' | 'stage' | 'celebration';

export function GalleryClient() {
  const { isHindi, t } = useLocale();
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoArchiveItem | null>(null);

  const albums = [
    { id: 'all', en: 'All Photographs', hi: 'सम्पूर्ण छायाचित्र' },
    { id: 'dance', en: 'Dance & Rhythm', hi: 'नृत्य एवं लय' },
    { id: 'drama', en: 'Theatrical Drama', hi: 'नाट्य एवं मंचन' },
    { id: 'stage', en: 'Stage & Sacred', hi: 'मंगलाचरण एवं मंच' },
    { id: 'celebration', en: 'Felicitation & Awards', hi: 'सम्मान एवं पुरस्कार' }
  ];

  const filteredPhotos = useMemo(() => {
    if (selectedAlbum === 'all') return galleryPhotos;
    return galleryPhotos.filter((p) => p.category === selectedAlbum);
  }, [selectedAlbum]);

  return (
    <div className="py-8 sm:py-14 space-y-16">
      
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment/60 border border-gold/40 text-xs font-semibold text-gold-dim uppercase tracking-wider mb-3">
            <span>Visual Archive</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight">
            {isHindi ? 'तरंग स्मृति दीर्घा' : 'Archival Gallery & Memories'}
          </h1>
          <p className="font-display italic text-base sm:text-lg text-gold font-semibold mt-2">
            TARANG 2024 &amp; 2026 Visual Chronicles
          </p>
          <p className="text-text-muted text-xs sm:text-sm mt-3 leading-relaxed">
            {isHindi
              ? 'विद्यार्थियों की अद्भुत कला, मंच की भव्यता और अविस्मरणीय उत्सव के सजीव छायाचित्र एवं वीडियो।'
              : 'Preserving the artistic expressions, stage achievements, and joyous cultural memories of our students.'}
          </p>
          <GoldDivider withLotus={true} className="mt-5 mb-8 opacity-75" />
        </div>

        {/* Album Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          {albums.map((album) => {
            const isActive = selectedAlbum === album.id;
            return (
              <button
                key={album.id}
                onClick={() => setSelectedAlbum(album.id as AlbumCategory)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-navy text-gold border-gold shadow-xs'
                    : 'bg-white/80 text-text-muted border-gold/30 hover:bg-white hover:text-navy'
                }`}
              >
                {isHindi ? album.hi : album.en}
              </button>
            );
          })}
        </div>

        {/* Photo Grid with Lightbox Triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => {
                const globalIndex = galleryPhotos.findIndex((p) => p.id === photo.id);
                setLightboxIndex(globalIndex !== -1 ? globalIndex : index);
              }}
              className="group relative rounded-xl overflow-hidden bg-white border border-gold/40 shadow-card hover:shadow-editorial transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-parchment/20">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-104 transition-transform duration-700"
                />
                
                {/* Filigree Inset Frame */}
                <div className="absolute inset-2 border border-white/40 rounded pointer-events-none" />

                {/* Top Year Badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-navy/80 text-gold text-[10px] font-mono font-bold border border-gold/30">
                  {photo.year}
                </div>

                {/* Hover Click Hint */}
                <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-navy/90 text-gold border border-gold/50 flex items-center justify-center text-sm shadow-md">
                    <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base font-bold text-navy group-hover:text-vermilion transition-colors leading-tight mb-1">
                    {isHindi ? photo.titleHi : photo.titleEn}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed">
                    {isHindi ? photo.captionHi : photo.captionEn}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-gold/20 flex items-center justify-between text-[11px] text-text-muted">
                  <span className="uppercase tracking-wider font-semibold text-gold-dim">
                    {photo.category}
                  </span>
                  <span className="text-navy font-bold flex items-center gap-1 group-hover:text-vermilion">
                    <span>{isHindi ? 'विस्तार से देखें' : 'View'}</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Video Archive Section (PRD Section 8.2) */}
      <section className="bg-navy py-14 text-ivory border-y border-gold/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 heritage-gold-pattern pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">
                Official YouTube Archive
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ivory">
                {isHindi ? 'समारोह वीडियो संकलन' : 'Relive TARANG Performances'}
              </h2>
              <p className="text-xs sm:text-sm text-ivory/70 mt-1 max-w-xl">
                {isHindi
                  ? 'तरंग 2024 के शास्त्रीय नृत्य, समूह गान और नाटक की संपूर्ण प्रस्तुतियाँ देखें।'
                  : 'Official recordings preserving stage recitals, drama acts, and keynote speeches.'}
              </p>
            </div>

            <a
              href={siteConfig.social.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#FF0000] hover:bg-[#CC0000] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm shrink-0"
            >
              <span>{isHindi ? 'यूट्यूब चैनल देखें' : 'Visit YouTube Channel'}</span>
              <span>↗</span>
            </a>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoArchive.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="bg-navy-surface rounded-xl overflow-hidden border border-gold/30 hover:border-gold transition-all duration-300 shadow-md group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <Image
                      src={video.thumbnail}
                      alt={video.titleEn}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-104 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-[#FF0000] text-white flex items-center justify-center text-lg shadow-lg group-hover:scale-110 transition-transform">
                        ▶
                      </span>
                    </div>
                    <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-white font-bold">
                      {video.duration}
                    </span>
                  </div>

                  <div className="p-4">
                    <span className="text-[10px] text-gold uppercase tracking-wider font-bold block mb-1">
                      {isHindi ? video.categoryHi : video.categoryEn}
                    </span>
                    <h3 className="font-display text-sm sm:text-base font-bold text-ivory group-hover:text-gold transition-colors leading-snug">
                      {isHindi ? video.titleHi : video.titleEn}
                    </h3>
                    <p className="text-xs text-ivory/70 mt-2 line-clamp-2 leading-relaxed">
                      {isHindi ? video.descriptionHi : video.descriptionEn}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-3 border-t border-ivory/10 flex items-center justify-between text-xs text-gold">
                  <span>Watch Video</span>
                  <span>↗</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Instagram Community & Featured Reels Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Banner */}
        <div className="bg-gradient-to-r from-parchment/60 via-white to-parchment/60 rounded-xl p-6 sm:p-8 border border-gold/40 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gold-dim uppercase tracking-widest block">
              {isHindi ? 'दैनिक झलकियाँ, रील्स एवं टीज़र' : 'Daily Reels, Shorts & Teasers'}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
              Follow TARANG on Instagram
            </h3>
            <p className="text-xs text-text-muted">
              Official handle: <span className="font-bold text-[#E1306C]">{siteConfig.social.instagram.handle}</span>
            </p>
          </div>

          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-md bg-[#E1306C] hover:bg-[#C13584] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95 shrink-0 flex items-center gap-2"
          >
            <span>{isHindi ? 'इंस्टाग्राम फॉलो करें' : 'Follow @srdic_mathauli'}</span>
            <span>↗</span>
          </a>
        </div>

        {/* Featured Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {instagramReels.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-5 border border-gold/30 hover:border-[#E1306C]/60 shadow-card hover:shadow-editorial transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#833AB4]/10 to-[#E1306C]/10 text-[#E1306C] border border-[#E1306C]/25">
                    {isHindi ? reel.categoryHi : reel.categoryEn}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-text-muted flex items-center gap-1 group-hover:text-[#E1306C] transition-colors">
                    <span>Reel</span>
                    <span>↗</span>
                  </span>
                </div>

                <h4 className="font-display text-base font-bold text-navy group-hover:text-[#E1306C] transition-colors leading-snug mb-1.5">
                  {isHindi ? reel.titleHi : reel.titleEn}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                  {isHindi ? reel.captionHi : reel.captionEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between text-xs text-[#E1306C] font-semibold">
                <span>{isHindi ? 'इंस्टाग्राम पर देखें' : 'Watch on Instagram'}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Full-Screen Lightbox */}
      <Lightbox
        photos={galleryPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

      {/* Video Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

    </div>
  );
}

