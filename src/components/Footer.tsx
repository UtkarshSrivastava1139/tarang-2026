import Link from 'next/link';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/branding/tarang_logo.webp" alt="TARANG 2.0" />
        <p>{site.tagline}</p>
      </div>
      <div className="footer-institutions">
        <p>Smt. Radhika Devi Intermediate College</p>
        <p>Smt. Radhika Devi Children Academy</p>
      </div>
      <div className="footer-links">
        <Link href="/gallery">Gallery</Link>
        <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href={site.youtube} target="_blank" rel="noreferrer">YouTube</a>
      </div>
      <small>© 2026 TARANG. Official cultural festival platform.</small>
    </footer>
  );
}
