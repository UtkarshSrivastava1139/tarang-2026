import { siteConfig, navigationItems, culturalCategories, announcements, activityGroups } from '@/content/site';

export const site = {
  name: siteConfig.name,
  edition: siteConfig.edition,
  tagline: siteConfig.tagline,
  theme: siteConfig.theme,
  date: siteConfig.event.dateDisplayEn,
  dateShort: siteConfig.event.shortDate,
  time: siteConfig.event.timeEn,
  venue: siteConfig.event.venueEn,
  instagram: siteConfig.social.instagram.url,
  facebook: siteConfig.social.facebook.url,
  youtube: siteConfig.social.youtube.url
} as const;

export type Locale = 'en' | 'hi';

export const navigation = navigationItems;

export const archivePhotos = [
  { src: '/gallery/tarang_2024_1.png', alt: 'TARANG 2024 cultural memory', position: 'hero' },
  { src: '/gallery/tarang_2024_2.png', alt: 'TARANG 2024 performance memory', position: 'wide' },
  { src: '/gallery/tarang_2024_3.png', alt: 'TARANG 2024 celebration memory', position: 'portrait' },
  { src: '/gallery/tarang_2024_4.png', alt: 'TARANG 2024 stage memory', position: 'square' }
] as const;

export { siteConfig, culturalCategories, announcements, activityGroups };
