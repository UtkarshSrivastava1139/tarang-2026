import type { Metadata } from 'next';
import { ProgrammeClient } from '@/components/programme/ProgrammeClient';

export const metadata: Metadata = {
  title: 'Programme Schedule | TARANG 2.0 | Annual Function 2026',
  description: 'Explore the complete itinerary and performance schedule for TARANG 2.0 at Smt. Radhika Devi Intermediate College & Children Academy.'
};

export default function ProgrammePage() {
  return <ProgrammeClient />;
}

