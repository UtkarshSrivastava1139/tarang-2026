export interface ProgrammeItem {
  id: string;
  time: string;
  endTime?: string;
  category: 'music' | 'dance' | 'singing' | 'drama' | 'art' | 'regional' | 'ceremony';
  titleEn: string;
  titleHi: string;
  sessionEn: string;
  sessionHi: string;
  stageEn: string;
  stageHi: string;
  duration: string;
  synopsisEn: string;
  synopsisHi: string;
  participantsEn: string;
  participantsHi: string;
  isPlaceholder?: boolean;
}

export const programmeSchedule: ProgrammeItem[] = [
  {
    id: 'prog-1',
    time: '3:00 PM',
    endTime: '3:30 PM',
    category: 'ceremony',
    titleEn: 'Ceremonial Lamp Lighting & Saraswati Vandana',
    titleHi: 'दीप प्रज्वलन एवं सरस्वती वंदना',
    sessionEn: 'Inaugural Session',
    sessionHi: 'उद्घाटन सत्र',
    stageEn: 'Main Stage (Kailash Rangmanch)',
    stageHi: 'मुख्य मंच (कैलाश रंगमंच)',
    duration: '30 mins',
    synopsisEn: 'Traditional invocation of the divine Goddess of wisdom, accompanied by sacred shlokas and ceremonial lamp lighting by institutional dignitaries.',
    synopsisHi: 'संस्थान के प्रबंध तंत्र, मुख्य अतिथियों एवं प्राचार्यों द्वारा दीप प्रज्वलन एवं शास्त्रीय श्लोकों सहित सरस्वती वंदना।',
    participantsEn: 'Senior Choir & Dignitaries',
    participantsHi: 'वरिष्ठ संगीत समूह एवं सम्मानित अतिथि'
  },
  {
    id: 'prog-2',
    time: '3:35 PM',
    endTime: '4:05 PM',
    category: 'dance',
    titleEn: 'Classical Welcome Recital — Bharatanatyam & Kathak',
    titleHi: 'शास्त्रीय स्वागत प्रस्तुति — भरतनाट्यम एवं कत्थक संगम',
    sessionEn: 'Classical Showcase',
    sessionHi: 'शास्त्रीय प्रस्तुति',
    stageEn: 'Main Stage (Kailash Rangmanch)',
    stageHi: 'मुख्य मंच (कैलाश रंगमंच)',
    duration: '30 mins',
    synopsisEn: 'A graceful classical fusion capturing the intricate footwork of Kathak and statuesque postures of Bharatanatyam, embodying traditional Indian aesthetics.',
    synopsisHi: 'कत्थक के द्रुत तराने और भरतनाट्यम के भावपूर्ण अभिनय का मनोहारी संगम, जो भारतीय शास्त्रीय संस्कृति की गरिमा को दर्शाता है।',
    participantsEn: 'Junior & Senior Academy Troupe',
    participantsHi: 'जूनियर एवं सीनियर एकेडमी नृत्य दल'
  },
  {
    id: 'prog-3',
    time: '4:10 PM',
    endTime: '4:40 PM',
    category: 'music',
    titleEn: 'Vocal Symphony: "रागों की अविरल धारा"',
    titleHi: 'स्वर संगम: रागों की अविरल धारा',
    sessionEn: 'Music Harmony',
    sessionHi: 'संगीत माधुरी',
    stageEn: 'Main Stage (Kailash Rangmanch)',
    stageHi: 'मुख्य मंच (कैलाश रंगमंच)',
    duration: '30 mins',
    synopsisEn: 'Melodious orchestral performance blending classical harmonium, tabla rhythms, flute, and student choir in traditional Indian ragas.',
    synopsisHi: 'हारमोनियम, तबला, बाँसुरी एवं विद्यार्थियों के सुमधुर स्वर का शास्त्रीय वाद्य वृंद संगम।',
    participantsEn: 'School Orchestra & Choral Society',
    participantsHi: 'विद्यालय संगीत वृंद'
  },
  {
    id: 'prog-4',
    time: '4:45 PM',
    endTime: '5:25 PM',
    category: 'drama',
    titleEn: 'Historical Play: "एकता की गूंज — स्वतंत्रता के अमर सेनानी"',
    titleHi: 'ऐतिहासिक नाटक: एकता की गूंज — स्वतंत्रता के अमर सेनानी',
    sessionEn: 'Theatrical Acts',
    sessionHi: 'नाट्य मंचन',
    stageEn: 'Main Stage (Kailash Rangmanch)',
    stageHi: 'मुख्य मंच (कैलाश रंगमंच)',
    duration: '40 mins',
    synopsisEn: 'An inspiring enactment reflecting the courage, sacrifices, and communal unity of legendary freedom fighters who laid the foundations of independent India.',
    synopsisHi: 'भारत के अमर स्वाधीनता संग्राम सेनानियों के त्याग, शौर्य और राष्ट्रीय एकता पर आधारित भावपूर्ण एवं प्रेरणादायी नाट्य प्रस्तुति।',
    participantsEn: 'Dramatic Arts Society (Classes 9–12)',
    participantsHi: 'नाट्य कला परिषद (कक्षा 9–12)'
  },
  {
    id: 'prog-5',
    time: '5:30 PM',
    endTime: '6:15 PM',
    category: 'regional',
    titleEn: 'Grand Regional Pageant: "एक भारत • अनेक रंग"',
    titleHi: 'विराट सांस्कृतिक झांकी: एक भारत • अनेक रंग',
    sessionEn: 'Theme Feature',
    sessionHi: 'थीम विशेष',
    stageEn: 'Main Stage (Kailash Rangmanch)',
    stageHi: 'मुख्य मंच (कैलाश रंगमंच)',
    duration: '45 mins',
    synopsisEn: 'A magnificent panorama representing folk dances from across the motherland: Garba of Gujarat, Bhangra of Punjab, Bihu of Assam, Lavani of Maharashtra, and Chhau of East India.',
    synopsisHi: 'भारत के विभिन्न राज्यों के लोक नृत्यों का उत्सव—गरबा, भांगड़ा, बिहू, लावणी, एवं छऊ नृत्य की बहुरंगी मनमोहक झांकी।',
    participantsEn: 'Combined Student Assembly (Inter College & Academy)',
    participantsHi: 'इण्टर कॉलेज एवं चिल्ड्रेन्स एकेडमी संयुक्त दल'
  },
  {
    id: 'prog-6',
    time: '6:20 PM',
    endTime: '6:50 PM',
    category: 'singing',
    titleEn: 'Patriotic Choral Finale: "वंदे मातरम् — समवेत राष्ट्र गान"',
    titleHi: 'देशभक्ति समवेत गान: वंदे मातरम् एवं राष्ट्रगान',
    sessionEn: 'Ceremonial Finale',
    sessionHi: 'समारोह समापन',
    stageEn: 'Main Stage (Kailash Rangmanch)',
    stageHi: 'मुख्य मंच (कैलाश रंगमंच)',
    duration: '30 mins',
    synopsisEn: 'A stirring choral rendition by all student participants, concluding with principal address, vote of thanks, and the National Anthem.',
    synopsisHi: 'समस्त विद्यार्थियों, शिक्षकों एवं आगंतुकों का समवेत राष्ट्रगीत, संस्था प्रधान का संबोधन एवं राष्ट्रगान।',
    participantsEn: 'All Participating Students, Faculty & Guests',
    participantsHi: 'समस्त प्रतिभागी विद्यार्थी, शिक्षक एवं अतिथिगण'
  }
];

