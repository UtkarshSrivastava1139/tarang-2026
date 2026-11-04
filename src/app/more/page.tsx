import type { Metadata } from 'next';
import { MoreClient } from '@/components/more/MoreClient';

export const metadata: Metadata = {
  title: 'Directory & FAQs | TARANG 2.0 | Annual Function 2026',
  description: 'Official institutional guide, invitation card, student participation rules, campus venue directions, and FAQs for TARANG 2.0.'
};

export default function MorePage() {
  return <MoreClient />;
}

