'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InvitationModal({ isOpen, onClose }: InvitationModalProps) {
  const { isHindi, t } = useLocale();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-deep/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Official Invitation Card"
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] bg-ivory rounded-xl border border-gold shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-navy px-4 py-3 flex items-center justify-between border-b border-gold/40 text-ivory">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <h3 className="font-display text-base sm:text-lg font-bold text-gold tracking-wide">
              {isHindi ? siteConfig.invitation.titleHi : siteConfig.invitation.titleEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-navy-surface border border-gold/30 hover:border-gold text-ivory/80 hover:text-white flex items-center justify-center transition-colors text-sm"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Invitation Image Container */}
        <div className="relative flex-1 overflow-auto bg-parchment/20 p-2 sm:p-4 flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-[3/4] sm:aspect-[4/5] rounded-lg overflow-hidden shadow-editorial border border-gold/40">
            <Image
              src={siteConfig.invitation.image}
              alt="TARANG 2.0 Official Ceremonial Invitation Card"
              fill
              sizes="(max-width: 768px) 95vw, 600px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-ivory border-t border-gold/30 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <p className="text-text-muted text-[11px] sm:text-xs">
            {isHindi
              ? 'प्रबंध तंत्र एवं विद्यालय परिवार की ओर से सादर आमंत्रण'
              : 'Cordially invited by the Management, Staff & Students'}
          </p>
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.invitation.image}
              download="TARANG_2.0_Invitation.png"
              className="px-3.5 py-1.5 rounded bg-vermilion hover:bg-vermilion-dark text-white font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{t('common.download')}</span>
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded border border-navy/30 hover:border-navy text-navy font-semibold transition-colors"
            >
              {t('common.close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

