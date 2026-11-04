'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/content/site';
import { useLocale } from '@/context/LocaleContext';

export function MobileNavigation() {
  const pathname = usePathname();
  const { isHindi } = useLocale();

  const getIcon = (id: string, isActive: boolean) => {
    switch (id) {
      case 'home':
        return (
          <svg className="w-5 h-5" fill={isActive ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'programme':
        return (
          <svg className="w-5 h-5" fill={isActive ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'journey':
        return (
          <svg className="w-5 h-5" fill={isActive ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'gallery':
        return (
          <svg className="w-5 h-5" fill={isActive ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'more':
      default:
        return (
          <svg className="w-5 h-5" fill={isActive ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 2 : 1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        );
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0E1A35]/95 backdrop-blur-xl border-t border-gold/30 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] md:hidden px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]"
      aria-label="Mobile Bottom Navigation"
    >
      {/* Auspicious Gold Hairline Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />

      <div className="flex items-center justify-around max-w-md mx-auto">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-[68px] min-h-[50px] py-1 px-2 rounded-xl transition-all duration-200 active:scale-90 ${
                isActive
                  ? 'bg-gradient-to-b from-gold/20 via-gold/10 to-transparent text-gold border border-gold/40 shadow-[0_0_12px_rgba(201,162,77,0.2)]'
                  : 'text-ivory/65 hover:text-ivory hover:bg-white/5 border border-transparent'
              }`}
            >
              <div className="relative">
                {getIcon(item.id, isActive)}
                {isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-vermilion shadow-[0_0_6px_rgba(217,59,48,0.8)]" />
                )}
              </div>
              <span
                className={`text-[10px] tracking-wider mt-1 leading-none ${
                  isActive ? 'font-bold text-gold' : 'font-medium'
                } ${isHindi ? 'font-hindi font-medium' : ''}`}
              >
                {isHindi ? item.hi : item.en}
              </span>
              {isActive && (
                <span className="w-4 h-0.5 bg-gold rounded-full mt-1" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

