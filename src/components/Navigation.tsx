'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, site } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  return (
    <>
      <header className="site-header">
        <Link className="brand-lockup" href="/" aria-label="TARANG home">
          <span className="institution-logos">
            <img src="/branding/college_logo.png" alt="" />
            <img src="/branding/academy_logo.png" alt="" />
          </span>
          <span>
            <b>{site.edition}</b>
            <small>Smt. Radhika Devi Intermediate College<br />&amp; Children Academy</small>
          </span>
        </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link className={pathname === item.href ? 'active' : ''} href={item.href} key={item.href}>
            {item.en}
          </Link>
        ))}
      </nav>
      <button className="language-toggle" type="button" aria-label="Language: English">EN <span>हिं</span></button>
      </header>
      <div className="announcement-bar">
        <span>● Official announcement</span>
        <b>Annual Function &amp; Cultural Event · Wednesday, 18 November 2026</b>
        <span className="announcement-time">3:00 PM onwards · School Campus</span>
      </div>
    </>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {navigation.map((item) => (
        <Link className={pathname === item.href ? 'active' : ''} href={item.href} key={item.href}>
          <span className="nav-mark" aria-hidden="true">{item.en.slice(0, 1)}</span>
          <span>{item.en}</span>
        </Link>
      ))}
    </nav>
  );
}
