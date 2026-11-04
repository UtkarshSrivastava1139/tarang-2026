import type { Metadata } from 'next';
import { JourneyClient } from '@/components/journey/JourneyClient';

export const metadata: Metadata = {
  title: 'The Journey & Theme | TARANG 2.0 | एक भारत • अनेक रंग',
  description: 'Discover the institutional legacy, cultural philosophy, and event milestones of TARANG 2.0 at Smt. Radhika Devi Intermediate College & Children Academy.'
};

export default function JourneyPage() {
  return <JourneyClient />;
}

