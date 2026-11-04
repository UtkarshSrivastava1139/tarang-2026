export interface Milestone {
  id: string;
  phase: string;
  titleEn: string;
  titleHi: string;
  dateEn: string;
  dateHi: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  descriptionEn: string;
  descriptionHi: string;
}

export const journeyMilestones: Milestone[] = [
  {
    id: 'tarang-2024',
    phase: '18 Nov 2024',
    titleEn: 'TARANG 2024 — Grand Premiere',
    titleHi: 'तरंग २०२४ — भव्य प्रथम संस्करण',
    dateEn: 'Monday, 18 November 2024',
    dateHi: 'सोमवार, १८ नवम्बर २०२४',
    status: 'completed',
    descriptionEn: 'The historic first edition welcomed 10,000+ visitors and featured nearly 10 hours of student cultural presentations and creative celebrations.',
    descriptionHi: 'प्रथम संस्करण में १०,००० से अधिक दर्शक सम्मिलित हुए और लगभग १० घंटे तक विद्यार्थियों की सांस्कृतिक प्रस्तुतियों का मनमोहक मंचन हुआ।'
  },
  {
    id: 'tarang-2026-theme',
    phase: 'October 2026',
    titleEn: 'TARANG 2.0 Theme Announcement',
    titleHi: 'तरंग २.० थीम की घोषणा',
    dateEn: 'October 2026',
    dateHi: 'अक्टूबर २०२६',
    status: 'completed',
    descriptionEn: 'Official declaration of TARANG 2.0 celebrating the cultural theme "एक भारत • अनेक रंग" (The Rhythm of Togetherness).',
    descriptionHi: '"एक भारत • अनेक रंग" (The Rhythm of Togetherness) केंद्रीय विषय के साथ तरंग २.० की औपचारिक घोषणा।'
  },
  {
    id: 'tarang-2026-main',
    phase: '18 Nov 2026',
    titleEn: 'TARANG 2.0 — Main Cultural Festival',
    titleHi: 'तरंग २.० — मुख्य सांस्कृतिक समारोह',
    dateEn: 'Wednesday, 18 November 2026',
    dateHi: 'बुधवार, १८ नवम्बर २०२६',
    status: 'upcoming',
    descriptionEn: 'The grand annual function commences from 3:00 PM onwards at the School Campus, Mathauli Bazar.',
    descriptionHi: 'अपराह्न ३:०० बजे से विद्यालय प्रांगण, मथौली बाज़ार में मुख्य सांस्कृतिक समारोह का आयोजन।'
  }
];
