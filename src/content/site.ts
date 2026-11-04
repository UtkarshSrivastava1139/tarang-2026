export interface NavigationItem {
  id: string;
  href: string;
  en: string;
  hi: string;
  icon: string;
}

export type ActivityGroupKey = 'performances' | 'on-stage' | 'beyond-stage';

export interface ActivityGroup {
  id: ActivityGroupKey;
  en: string;
  hi: string;
  descriptionEn?: string;
  descriptionHi?: string;
}

export interface CulturalCategory {
  id: string;
  groupId: ActivityGroupKey;
  en: string;
  hi: string;
  color: 'saffron' | 'emerald' | 'rose' | 'vermilion' | 'gold' | 'navy';
  descriptionEn: string;
  descriptionHi: string;
  icon: string;
}

export interface Announcement {
  id: string;
  titleEn: string;
  titleHi: string;
  date: string;
  highlight?: boolean;
  link?: string;
  detailEn: string;
  detailHi: string;
}

export const siteConfig = {
  name: 'TARANG',
  edition: 'TARANG 2.0',
  title: 'TARANG 2.0 — Annual Function & Cultural Event 2026',
  tagline: 'The Rhythm of Togetherness',
  taglineHi: 'एकता का सुरम्य उत्सव',
  theme: 'एक भारत • अनेक रंग',
  themeMeaningEn: 'One India, Many Colours — Celebrating the civilizational richness, unity and regional artistic expressions of our motherland.',
  themeMeaningHi: 'भारत की सांस्कृतिक विविधता, संगीत, नृत्य, कला और साझा धरोहर का अद्भुत संगम।',
  institutions: {
    college: {
      en: 'Smt. Radhika Devi Intermediate College',
      hi: 'श्रीमती राधिका देवी इण्टर कॉलेज',
      shortEn: 'SRD Intermediate College',
      logo: '/branding/college_logo.png',
      image: '/campus/srd_intermediate_college_campus.jpg'
    },
    academy: {
      en: 'Smt. Radhika Devi Children Academy',
      hi: 'श्रीमती राधिका देवी चिल्ड्रेन्स एकेडमी',
      shortEn: 'SRD Children Academy',
      logo: '/branding/academy_logo.png',
      image: '/campus/srd_children_academy_campus.jpg'
    }
  },
  event: {
    dateDisplayEn: 'Wednesday, 18 November 2026',
    dateDisplayHi: 'बुधवार, 18 नवम्बर 2026',
    shortDate: '18 NOV 2026',
    timeEn: '3:00 PM onwards',
    timeHi: 'अपराह्न 3:00 बजे से',
    targetIso: '2026-11-18T15:00:00+05:30',
    venueEn: 'School Campus, Mathauli Bazar',
    venueHi: 'विद्यालय प्रांगण, मथौली बाज़ार',
    location: 'Mathauli Bazar, Kushinagar, Uttar Pradesh'
  },
  social: {
    instagram: {
      handle: '@srdic_mathauli',
      url: 'https://www.instagram.com/srdic_mathauli/'
    },
    facebook: {
      handle: 'SRDHSSchool',
      pageName: 'Smt. Radhika Devi School',
      url: 'https://www.facebook.com/SRDHSSchool'
    },
    youtube: {
      channelName: 'SRDIC Tarang 2024',
      url: 'https://www.youtube.com/@SRDICTarang2024'
    },
    whatsapp: {
      channelName: 'SRD Institutions Official',
      url: 'https://whatsapp.com/channel/0029VaEDRDJG3R3lICfz881o'
    }
  },
  video: {
    featuredId: 'ln0mSywwY3o',
    watchUrl: 'https://www.youtube.com/watch?v=ln0mSywwY3o',
    embedUrl: 'https://www.youtube-nocookie.com/embed/ln0mSywwY3o',
    titleEn: 'TARANG — The Living Celebration Film',
    titleHi: 'तरंग — सांस्कृतिक महोत्सव सजीव प्रस्तुति',
    descEn: 'Experience the living energy of TARANG: classical ragas, vibrant folk dances, theatrical drama, and historic celebrations.',
    descHi: 'तरंग के भव्य मंचन, शास्त्रीय धुनों, मनोहारी लोक नृत्यों और सहभाव के सजीव पलों का अनुभव करें।'
  },
  invitation: {
    image: '/invitation/final_invitation.png',
    titleEn: 'Official Ceremonial Invitation',
    titleHi: 'आधिकारिक निमंत्रण पत्र'
  },
  art: {
    panorama: '/art/watercolor_indian_heritage_panorama.png',
    watercolorHeritage: '/art/indian_heritage_in_watercolour.png',
    identityBoard: '/art/tarang_2026_cultural_identity_board.png',
    tarangLogo: '/branding/tarang_logo.png',
    themeLogo: '/branding/theme_logo.png'
  }
} as const;

export const navigationItems: NavigationItem[] = [
  { id: 'home', href: '/', en: 'Home', hi: 'होम', icon: 'home' },
  { id: 'journey', href: '/journey', en: 'Journey', hi: 'यात्रा', icon: 'sparkles' },
  { id: 'gallery', href: '/gallery', en: 'Gallery', hi: 'गैलरी', icon: 'photo' },
  { id: 'more', href: '/more', en: 'More', hi: 'अन्य', icon: 'dots' }
];

export const activityGroups: ActivityGroup[] = [
  {
    id: 'performances',
    en: 'Performances',
    hi: 'मंचीय प्रस्तुतियाँ',
    descriptionEn: 'Vibrant stage performances celebrating movement, expression, melody, and dramatic storytelling.',
    descriptionHi: 'गति, भाव, लय और नाट्य अभिनय की सजीव मंचीय प्रस्तुतियाँ।'
  },
  {
    id: 'on-stage',
    en: 'On-stage Experiences',
    hi: 'मंच संचालन एवं संवाद',
    descriptionEn: 'Thoughtful addresses, lively stage hosting, and fun audience-engagement moments.',
    descriptionHi: 'प्रेरक वक्तव्य, जीवंत मंच संचालन और उत्सव को जोड़ने वाली संवादात्मक गतिविधियाँ।'
  },
  {
    id: 'beyond-stage',
    en: 'Beyond the Stage',
    hi: 'मंच से परे सृजन',
    descriptionEn: 'A showcase of creativity through artwork and craft made by our students.',
    descriptionHi: 'विद्यार्थियों द्वारा निर्मित कलाकृतियों और हस्तशिल्प की अनूठी प्रदर्शनी।'
  }
];

export const culturalCategories: CulturalCategory[] = [
  {
    id: 'dance',
    groupId: 'performances',
    en: 'Dance — Solo & Group',
    hi: 'नृत्य — एकल एवं समूह',
    color: 'emerald',
    descriptionEn: 'Solo and group dance performances celebrating movement, expression and rhythm.',
    descriptionHi: 'गति, भाव और लय का उत्सव मनाती एकल एवं सामूहिक नृत्य प्रस्तुतियाँ।',
    icon: '/assets/tarang/generated/dance-ghungroo.png'
  },
  {
    id: 'singing',
    groupId: 'performances',
    en: 'Singing — Solo & Group',
    hi: 'गायन — एकल एवं समूह',
    color: 'rose',
    descriptionEn: "Individual and group vocal performances showcasing students' musical talent.",
    descriptionHi: 'विद्यार्थियों की संगीत प्रतिभा को दर्शाती व्यक्तिगत और समवेत गायन प्रस्तुतियाँ।',
    icon: '/assets/tarang/generated/singing-indian-classical.png'
  },
  {
    id: 'drama',
    groupId: 'performances',
    en: 'Drama & Story Play — Solo & Group',
    hi: 'नाट्य एवं कथा मंचन — एकल एवं समूह',
    color: 'vermilion',
    descriptionEn: 'Stories brought to life through individual and group dramatic performances.',
    descriptionHi: 'व्यक्तिगत और सामूहिक नाटकीय प्रस्तुतियों के माध्यम से सजीव होती कहानियाँ।',
    icon: '/assets/tarang/generated/drama-natyashastra.png'
  },
  {
    id: 'speeches',
    groupId: 'on-stage',
    en: 'Speeches & Addresses',
    hi: 'भाषण एवं वक्तव्य',
    color: 'navy',
    descriptionEn: 'Thoughtful speeches and addresses by students and distinguished dignitaries.',
    descriptionHi: 'विद्यार्थियों एवं विशिष्ट अतिथियों द्वारा विचारोत्तेजक और प्रेरक वक्तव्य।',
    icon: '/assets/tarang/generated/speeches-addresses.png'
  },
  {
    id: 'anchoring',
    groupId: 'on-stage',
    en: 'Anchoring & Hosting',
    hi: 'मंच संचालन एवं सूत्रधार',
    color: 'gold',
    descriptionEn: 'Lively stage hosting that connects performances and keeps the celebration flowing.',
    descriptionHi: 'प्रस्तुतियों को एक सूत्र में पिरोने और उत्सव की ऊर्जा बनाए रखने वाला जीवंत मंच संचालन।',
    icon: '/assets/tarang/generated/anchoring-hosting.png'
  },
  {
    id: 'interactive',
    groupId: 'on-stage',
    en: 'Interactive Activities',
    hi: 'संवादात्मक गतिविधियाँ',
    color: 'saffron',
    descriptionEn: 'Fun audience-engagement activities and entertaining moments throughout the event.',
    descriptionHi: 'समारोह के दौरान दर्शकों को जोड़ने वाली मनोरंजक और उत्साहवर्धक गतिविधियाँ।',
    icon: '/assets/tarang/generated/interactive-activities.png'
  },
  {
    id: 'art-craft',
    groupId: 'beyond-stage',
    en: 'Student Art & Craft Showcase',
    hi: 'विद्यार्थी कला एवं हस्तशिल्प प्रदर्शनी',
    color: 'gold',
    descriptionEn: 'A showcase of creativity through artwork and craft made by our students.',
    descriptionHi: 'हमारे विद्यार्थियों द्वारा निर्मित कलाकृतियों और हस्तशिल्प के माध्यम से सृजनात्मकता का प्रदर्शन।',
    icon: '/assets/tarang/generated/art-craft-heritage.png'
  }
];

export const announcements: Announcement[] = [
  {
    id: 'ann-1',
    titleEn: 'Official Date & Venue Announced for TARANG 2.0',
    titleHi: 'तरंग 2.0 की आधिकारिक तिथि एवं स्थान घोषित',
    date: 'Nov 2026',
    highlight: true,
    detailEn: 'The annual function TARANG 2.0 is scheduled for Wednesday, 18 November 2026 from 3:00 PM onwards at the School Campus.',
    detailHi: 'वार्षिक सांस्कृतिक उत्सव तरंग 2.0 बुधवार, 18 नवम्बर 2026 को अपराह्न 3:00 बजे से विद्यालय प्रांगण में आयोजित होगा।'
  },
  {
    id: 'ann-2',
    titleEn: 'Student Auditions and Rehearsals Underway',
    titleHi: 'विद्यार्थियों के पूर्वाभ्यास एवं चयन सत्र प्रारंभ',
    date: 'Active',
    highlight: false,
    detailEn: 'Student cultural groups in music, classical dance, and drama are participating in guided rehearsal sessions.',
    detailHi: 'संगीत, शास्त्रीय नृत्य एवं नाटक में विद्यार्थियों के पूर्वाभ्यास सत्र अनुभवी शिक्षकों के मार्गदर्शन में जारी हैं।'
  }
];

