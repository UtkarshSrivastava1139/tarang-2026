import React from 'react';
import { Hero } from '@/components/home/Hero';
import { EventStrip } from '@/components/home/EventStrip';
import { ThemeSection } from '@/components/home/ThemeSection';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { ArchivalCollage } from '@/components/home/ArchivalCollage';
import { FeaturedVideo } from '@/components/home/FeaturedVideo';
import { AnnouncementsSection } from '@/components/home/AnnouncementsSection';
import { SocialMediaHub } from '@/components/home/SocialMediaHub';

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventStrip />
      <ThemeSection />
      <CategoriesSection />
      <ArchivalCollage />
      <FeaturedVideo />
      <AnnouncementsSection />
      <SocialMediaHub />
    </>
  );
}
