import type { Metadata } from 'next';
import { GalleryClient } from '@/components/gallery/GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery & Media Archive | TARANG 2.0 | Annual Function 2026',
  description: 'Explore the photographic memories, stage performances, and official video archive of TARANG at Smt. Radhika Devi Intermediate College & Children Academy.'
};

export default function GalleryPage() {
  return <GalleryClient />;
}

