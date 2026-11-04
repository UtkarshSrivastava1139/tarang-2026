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
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-lg border-t border-gold/40 shadow-2xl md:hidden px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-[56px] py-1 px-1.5 rounded-lg transition-all duration-200 active:scale-95 ${
                isActive ? 'text-gold' : 'text-ivory/65 hover:text-ivory'
              }`}
            >
              <div className="relative">
                {getIcon(item.id, isActive)}
                {isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-vermilion" />
                )}
              </div>
              <span
                className={`text-[10px] tracking-wider mt-1 leading-none ${
                  isActive ? 'font-bold text-gold' : 'font-medium'
                } ${isHindi ? 'font-hindi-sans' : ''}`}
              >
                {isHindi ? item.hi : item.en}
              </span>
              {isActive && (
                <span className="w-3 h-0.5 bg-gold rounded-full mt-1 animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

