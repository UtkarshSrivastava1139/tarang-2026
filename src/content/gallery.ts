export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  titleEn: string;
  titleHi: string;
  category: 'stage' | 'dance' | 'drama' | 'celebration';
  year: '2024' | '2026';
  captionEn: string;
  captionHi: string;
  featured?: boolean;
}

export interface VideoArchiveItem {
  id: string;
  youtubeId: string;
  titleEn: string;
  titleHi: string;
  categoryEn: string;
  categoryHi: string;
  duration: string;
  thumbnail: string;
  descriptionEn: string;
  descriptionHi: string;
  url: string;
}

export interface InstagramReelItem {
  id: string;
  url: string;
  shortcode: string;
  titleEn: string;
  titleHi: string;
  categoryEn: string;
  categoryHi: string;
  captionEn: string;
  captionHi: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'tarang-24-ganesha',
    src: '/gallery/tarang-24/_DSC0090.webp',
    alt: 'Ganesh Vandana Inaugural Stage Presentation',
    titleEn: 'Ganesh Vandana & Mangalacharan',
    titleHi: 'गणेश वंदना एवं मंगलाचरण',
    category: 'stage',
    year: '2024',
    captionEn: 'Student portraying Lord Ganesha during the ceremonial opening prayer and mangalacharan at TARANG 2024.',
    captionHi: 'समारोह के शुभारंभ पर गणेश वंदना एवं मंगलाचरण की पावन प्रस्तुति।',
    featured: true
  },
  {
    id: 'tarang-24-folk-troupe',
    src: '/gallery/tarang-24/_DSC0101.webp',
    alt: 'Folk Rhythm and Choral Dance Performance',
    titleEn: 'Folk Rhythm & Synchronized Choral Dance',
    titleHi: 'समूह नृत्य एवं लोक ताल प्रस्तुति',
    category: 'dance',
    year: '2024',
    captionEn: 'Senior student troupe presenting synchronized folk choreography in festive red and white attire.',
    captionHi: 'पारंपरिक लाल व श्वेत वेशभूषा में विद्यार्थियों का मनमोहक सामूहिक नृत्य मंचन।',
    featured: true
  },
  {
    id: 'tarang-24-classical-nauvari',
    src: '/gallery/tarang-24/_DSC0107.webp',
    alt: 'Classical Nauvari Attire Circle Formation Dance',
    titleEn: 'Classical Silk Attire Circle Choreography',
    titleHi: 'पारंपरिक रेशमी वेशभूषा मंडल नृत्य',
    category: 'dance',
    year: '2024',
    captionEn: 'Graceful student dancers adorned with floral gajras forming an intricate traditional dance circle.',
    captionHi: 'पारंपरिक रेशमी परिधान एवं पुष्प गजरे से सुसज्जित छात्राओं का भावपूर्ण मंडल नृत्य।',
    featured: false
  },
  {
    id: 'tarang-24-student-merit-honors',
    src: '/gallery/tarang-24/_DSC0137.webp',
    alt: 'Principal and Dignitary Presenting Academic Awards',
    titleEn: 'Academic Merit & Distinction Honors',
    titleHi: 'मेधावी विद्यार्थी सम्मान समारोह',
    category: 'celebration',
    year: '2024',
    captionEn: 'School leadership and dignitaries recognizing academic excellence and student achievements on stage.',
    captionHi: 'मंच पर विद्यार्थियों की अकादमिक उत्कृष्टता एवं उपलब्धियों का सम्मान करते विद्यालय प्रबंधक एवं अतिथिगण।',
    featured: false
  },
  {
    id: 'tarang-24-acrobatic-pyramid',
    src: '/gallery/tarang-24/_DSC0162.webp',
    alt: 'Student Acrobatic Human Pyramid Dance Formation',
    titleEn: 'Human Pyramid Acrobatic Choreography',
    titleHi: 'मानव पिरामिड एवं साहसिक नृत्य मंचन',
    category: 'dance',
    year: '2024',
    captionEn: 'High-energy student troupe performing a breathtaking multi-tiered human pyramid on stage.',
    captionHi: 'मंच पर विद्यार्थियों द्वारा अद्भुत संतुलन एवं समन्वय के साथ मानव पिरामिड का भव्य प्रदर्शन।',
    featured: true
  },
  {
    id: 'tarang-24-children-academy-fairies',
    src: '/gallery/tarang-24/_DSC0172.webp',
    alt: 'Children Academy Little Stars Dance',
    titleEn: 'Children Academy Little Stars Troupe',
    titleHi: 'चिल्ड्रेन्स एकेडमी बाल नृत्य प्रस्तुति',
    category: 'dance',
    year: '2024',
    captionEn: 'Junior students of Smt. Radhika Devi Children Academy performing a joyous synchronized dance in pastel petal dresses.',
    captionHi: 'श्रीमती राधिका देवी चिल्ड्रेन्स एकेडमी की नन्हीं बालिकाओं की मनमोहक समवेत नृत्य प्रस्तुति।',
    featured: true
  },
  {
    id: 'tarang-24-night-stage-formation',
    src: '/gallery/tarang-24/_DSC0199.webp',
    alt: 'Dynamic Theatrical Stage Lighting and Formation',
    titleEn: 'Dynamic Night Stage Formation Dance',
    titleHi: 'रात्रि मंचन एवं प्रकाश संयोजन नृत्य',
    category: 'dance',
    year: '2024',
    captionEn: 'Vibrant stage lights and dramatic spotlighting accompanying an intense synchronized dance routine.',
    captionHi: 'रंग-बिरंगी मंच प्रकाश व्यवस्था के बीच विद्यार्थियों की ऊर्जावान समूह नृत्य प्रस्तुति।',
    featured: false
  },
  {
    id: 'tarang-24-chhalla-folk',
    src: '/gallery/tarang-24/_DSC0202.webp',
    alt: 'Chhalla Dance Performance in Yellow Kurtas',
    titleEn: 'Chhalla Folk Dance Celebration',
    titleHi: 'छल्ला लोक नृत्य प्रस्तुति',
    category: 'dance',
    year: '2024',
    captionEn: 'Students performing the energetic Chhalla dance in vibrant yellow kurtas and crimson waist sashes.',
    captionHi: 'पीताम्बरी कुर्तों एवं लाल पटके में छल्ला लोक गीत पर छात्राओं का मनभावन नृत्य।',
    featured: true
  },
  {
    id: 'tarang-24-up-board-topper-award',
    src: '/gallery/tarang-24/_DSC0214.webp',
    alt: 'UP Board School Topper Award Ceremony on 18 November 2024',
    titleEn: 'UP Board School Topper Felicitation',
    titleHi: 'यूपी बोर्ड विद्यालय टॉपर सम्मान (१८ नवम्बर २०२४)',
    category: 'celebration',
    year: '2024',
    captionEn: 'Formal presentation of the Rs. 5000 scholarship cheque to the UP Board Exam Topper on 18 November 2024.',
    captionHi: '18 नवम्बर 2024 को यूपी बोर्ड परीक्षा टॉपर छात्रा को ₹5000/- की छात्रवृत्ति एवं सम्मान प्रदान करते अतिथि।',
    featured: true
  },
  {
    id: 'tarang-24-board-merit-scholarship',
    src: '/gallery/tarang-24/_DSC0218.webp',
    alt: 'Board Exam Distinction Award Cheque Presentation',
    titleEn: 'Board Exam Distinction Award Ceremony',
    titleHi: 'बोर्ड परीक्षा मेधावी छात्रवृत्ति अलंकरण',
    category: 'celebration',
    year: '2024',
    captionEn: 'Patrons and institution founders conferring academic distinction honours on stage.',
    captionHi: 'संस्थापकों एवं प्रबंध समिति द्वारा मेधावी विद्यार्थियों को छात्रवृत्ति चेक एवं प्रशस्ति पत्र का वितरण।',
    featured: false
  },
  {
    id: 'tarang-24-patrons-dignitaries',
    src: '/gallery/tarang-24/_DSC0225.webp',
    alt: 'Institution Management and Leadership Assembly',
    titleEn: 'Institution Management & Leadership on Stage',
    titleHi: 'विद्यालय प्रबंध तंत्र एवं विशिष्ट अतिथि मंच',
    category: 'celebration',
    year: '2024',
    captionEn: 'The Management Committee and Principals of SRD Intermediate College & Children Academy presiding over the felicitation.',
    captionHi: 'समारोह में मंच पर उपस्थित एसआरडी इण्टर कॉलेज एवं चिल्ड्रेन्स एकेडमी के प्रबंध तंत्र एवं पदाधिकारीगण।',
    featured: false
  },
  {
    id: 'tarang-24-laxmi-bai-drama',
    src: '/gallery/tarang-24/_DSC0255.webp',
    alt: 'Rani Laxmi Bai Theatrical Drama Presentation',
    titleEn: 'Rani Laxmi Bai Historical Theatrical Play',
    titleHi: 'रानी लक्ष्मीबाई ऐतिहासिक नाट्य मंचन',
    category: 'drama',
    year: '2024',
    captionEn: 'Students in regal Maratha and Rajasthani attire bringing the valor and patriotism of Rani Lakshmibai to life.',
    captionHi: 'मराठा व राजस्थानी पारंपरिक परिधानों में झाँसी की रानी लक्ष्मीबाई के शौर्य का भावपूर्ण नाट्य मंचन।',
    featured: true
  },
  {
    id: 'tarang-24-aakal-mrityu',
    src: '/gallery/tarang-24/_DSC0273.webp',
    alt: 'Aakal Mrityu Dramatic Dance Ensemble',
    titleEn: 'Aakal Mrityu Theatrical Dance Ensemble',
    titleHi: 'अकाल मृत्यु भावपूर्ण नाट्य-नृत्य मंचन',
    category: 'drama',
    year: '2024',
    captionEn: 'Dramatic theatrical dance choreography featuring black and crimson attire with sacred tripundra tilak.',
    captionHi: 'गहन भावों और त्रिपुण्ड तिलक से सुसज्जित विद्यार्थियों की प्रभावशाली नाट्य-नृत्य प्रस्तुति।',
    featured: true
  },
  {
    id: 'tarang-24-shiva-tandava',
    src: '/gallery/tarang-24/_DSC0287.webp',
    alt: 'Shiva Tandava Theatrical Presentation under Blue Lights',
    titleEn: 'Shiva Tandava Theatrical Presentation',
    titleHi: 'शिव तांडव एवं गण नाट्य मंचन',
    category: 'drama',
    year: '2024',
    captionEn: 'Student portraying Lord Shiva alongside Shiv Ganas in a powerful cosmic dance enact under deep azure spotlights.',
    captionHi: 'नील वर्ण प्रकाश में भगवान शिव एवं शिव गणों की भव्य तांडव नाट्य प्रस्तुति।',
    featured: true
  },
  {
    id: 'tarang-24-ramayan-ensemble',
    src: '/gallery/tarang-24/_DSC0328.webp',
    alt: 'Ramayan Act Moral Story Play on Stage',
    titleEn: 'Ramayan Stage Play: Moral Values & Heritage',
    titleHi: 'रामायण प्रसंग: आदर्श जीवन मूल्य मंचन',
    category: 'drama',
    year: '2024',
    captionEn: 'Students presenting classic moral episodes and ethical teachings from the Ramayana.',
    captionHi: 'रामायण के प्रेरक प्रसंगों एवं नैतिक मूल्यों पर आधारित विद्यार्थियों का भव्य नाट्य मंचन।',
    featured: false
  },
  {
    id: 'tarang-24-hanuman-sita-ashok-vatika',
    src: '/gallery/tarang-24/_DSC0338.webp',
    alt: 'Ramayan Act: Hanuman and Mata Sita in Ashok Vatika',
    titleEn: 'Ramayan Act: Hanuman & Mata Sita',
    titleHi: 'रामायण मंचन: अशोक वाटिका में श्री हनुमान एवं माता सीता',
    category: 'drama',
    year: '2024',
    captionEn: 'Student portraying Shri Hanuman offering devotion to Mata Sita in a touching devotional theatrical sequence.',
    captionHi: 'अशोक वाटिका प्रसंग में माता सीता के समक्ष नतमस्तक श्री हनुमान का भावविभोर कर देने वाला अभिनय।',
    featured: true
  },
  {
    id: 'tarang-24-radha-krishna-leela',
    src: '/gallery/tarang-24/_DSC0351.webp',
    alt: 'Radha Krishna Divine Leela Dance',
    titleEn: 'Radha Krishna Divine Leela Dance',
    titleHi: 'राधा-कृष्ण दिव्य युगल नृत्य',
    category: 'dance',
    year: '2024',
    captionEn: 'Students portraying Shri Krishna with flute and peacock crown alongside Radha in embroidered traditional lehenga.',
    captionHi: 'मोरमुकुट-वंशीधारी श्री कृष्ण एवं सजीली राधा के रूप में विद्यार्थियों का मनमोहक युगल नृत्य।',
    featured: true
  },
  {
    id: 'photo-1',
    src: '/gallery/tarang_2024_1.webp',
    alt: 'TARANG 2024 Stage Inauguration and Classical Welcome',
    titleEn: 'Ceremonial Stage Inauguration',
    titleHi: 'भव्य मंच उद्घाटन एवं मंगलाचरण',
    category: 'stage',
    year: '2024',
    captionEn: 'The illuminated main stage during the inaugural lighting ceremony of TARANG 2024 on 18 November 2024.',
    captionHi: '18 नवम्बर 2024 को तरंग 2024 के शुभारंभ पर आलोकित मुख्य मंच एवं उद्घाटन समारोह।',
    featured: true
  },
  {
    id: 'photo-2',
    src: '/gallery/tarang_2024_2.webp',
    alt: 'TARANG 2024 Classical Dance Fusion',
    titleEn: 'Folk Rhythm & Choral Harmony',
    titleHi: 'लोक धुन एवं समवेत गायन',
    category: 'dance',
    year: '2024',
    captionEn: 'Student troupe presenting synchronized folk choreography celebrating rhythm and expression.',
    captionHi: 'लय और अभिव्यक्ति का उत्सव मनाती विद्यार्थियों की मनमोहक लोक नृत्य प्रस्तुति।',
    featured: false
  },
  {
    id: 'photo-3',
    src: '/gallery/tarang_2024_3.webp',
    alt: 'TARANG 2024 Celebrations and Student Pride',
    titleEn: 'Audience Applause & Dignitary Honors',
    titleHi: 'अतिथि सम्मान एवं दर्शक दीर्घा',
    category: 'celebration',
    year: '2024',
    captionEn: 'Parents, educators, and guests applauding the artistic presentations.',
    captionHi: 'विद्यार्थियों की प्रतिभा की सराहना करते अभिभावक, शिक्षक एवं अतिथिगण।',
    featured: false
  },
  {
    id: 'photo-4',
    src: '/gallery/tarang_2024_4.webp',
    alt: 'TARANG 2024 Grand Finale Assembly',
    titleEn: 'Grand Finale Ensemble',
    titleHi: 'महा-समापन एवं समवेत प्रस्तुति',
    category: 'celebration',
    year: '2024',
    captionEn: 'All performing students uniting on stage for the grand musical finale.',
    captionHi: 'समारोह के भव्य समापन पर मंच पर उपस्थित समस्त प्रतिभागी विद्यार्थी।',
    featured: false
  }
];

export const videoArchive: VideoArchiveItem[] = [
  {
    id: 'vid-main',
    youtubeId: 'ln0mSywwY3o',
    titleEn: 'Tarang Celebration 2024: A Vibrant Showcase of Talents',
    titleHi: 'तरंग उत्सव २०२४: प्रतिभाओं का भव्य सांस्कृतिक मंचन',
    categoryEn: 'Official Festival Film',
    categoryHi: 'मुख्य समारोह',
    duration: 'Main Film',
    thumbnail: '/gallery/yt-thumbnails/ln0mSywwY3o.jpg',
    descriptionEn: 'The official retrospective film capturing inaugural ceremonies, choral singing, dance choreography, and keynotes at Smt. Radhika Devi Intermediate College.',
    descriptionHi: 'उद्घाटन, मंगलाचरण, नृत्य और वक्तव्य सहित संपूर्ण सांस्कृतिक समारोह का आधिकारिक संकलन।',
    url: 'https://www.youtube.com/watch?v=ln0mSywwY3o'
  },
  {
    id: 'vid-laxmibai',
    youtubeId: 'VCuHJ4mvJxM',
    titleEn: 'Laxmi Bai Theatrical Drama Act',
    titleHi: 'रानी लक्ष्मीबाई ऐतिहासिक नाट्य मंचन',
    categoryEn: 'Theatrical Drama',
    categoryHi: 'नाट्य मंचन',
    duration: 'Drama Act',
    thumbnail: '/gallery/yt-thumbnails/VCuHJ4mvJxM.jpg',
    descriptionEn: 'Inspiring student historical enactment of Rani Lakshmibai of Jhansi celebrating bravery, sacrifice, and patriotism.',
    descriptionHi: 'झाँसी की रानी लक्ष्मीबाई के शौर्य, पराक्रम एवं राष्ट्रभक्ति पर विद्यार्थियों का भावपूर्ण मंचन।',
    url: 'https://www.youtube.com/watch?v=VCuHJ4mvJxM'
  },
  {
    id: 'vid-swachhta',
    youtubeId: '5t66dD0M3i0',
    titleEn: 'Swachhta Ki Jyot Presentation',
    titleHi: 'स्वच्छता की ज्योति विशेष प्रस्तुति',
    categoryEn: 'Thematic Presentation',
    categoryHi: 'थीम प्रस्तुति',
    duration: 'Social Act',
    thumbnail: '/gallery/yt-thumbnails/5t66dD0M3i0.jpg',
    descriptionEn: 'A meaningful student presentation advocating cleanliness, social responsibility, and national service.',
    descriptionHi: 'स्वच्छता, सामाजिक दायित्व और राष्ट्रीय सेवा के संदेश को समर्पित मनोहारी प्रस्तुति।',
    url: 'https://www.youtube.com/watch?v=5t66dD0M3i0'
  },
  {
    id: 'vid-chhalla',
    youtubeId: 'r_TCpHt_zqs',
    titleEn: 'Chhalla (Mai Lad Jana) Dance Performance',
    titleHi: 'छल्ला (मैं लड़ जाना) ऊर्जावान नृत्य प्रस्तुति',
    categoryEn: 'Dance Performance',
    categoryHi: 'नृत्य प्रस्तुति',
    duration: 'Dance Act',
    thumbnail: '/gallery/yt-thumbnails/r_TCpHt_zqs.jpg',
    descriptionEn: 'Energetic and synchronized student dance choreography celebrating movement, rhythm, and festive cheer.',
    descriptionHi: 'विद्यार्थियों द्वारा लय, ताल और ऊर्जा से ओतप्रोत मनमोहक सामूहिक नृत्य मंचन।',
    url: 'https://www.youtube.com/watch?v=r_TCpHt_zqs'
  },
  {
    id: 'vid-saraswati',
    youtubeId: '-V-9VCGbbT0',
    titleEn: 'Saraswati Sharde Inaugural Performance',
    titleHi: 'सरस्वती शारदे मंगलाचरण एवं वंदना नृत्य',
    categoryEn: 'Inaugural Recital',
    categoryHi: 'मंगलाचरण',
    duration: 'Inaugural Act',
    thumbnail: '/gallery/yt-thumbnails/-V-9VCGbbT0.jpg',
    descriptionEn: 'Ceremonial opening prayer and invocation dance paying homage to Goddess Saraswati at the festival opening.',
    descriptionHi: 'माँ सरस्वती के चरणों में समर्पित पावन मंगलाचरण एवं समारोह का औपचारिक शुभारंभ नृत्य।',
    url: 'https://www.youtube.com/watch?v=-V-9VCGbbT0'
  },
  {
    id: 'vid-aakal',
    youtubeId: 'VXhpKCOxo54',
    titleEn: 'Aakal Mrityu Dance Performance',
    titleHi: 'अकाल मृत्यु भावपूर्ण नृत्य प्रस्तुति',
    categoryEn: 'Dance Performance',
    categoryHi: 'नृत्य प्रस्तुति',
    duration: 'Dance Act',
    thumbnail: '/gallery/yt-thumbnails/VXhpKCOxo54.jpg',
    descriptionEn: 'Intense and dramatic student choreography featuring expressive mudras, synchronization, and rhythmic footwork.',
    descriptionHi: 'गहन भावों और लयबद्ध पदचापों से सुसज्जित विद्यार्थियों की प्रभावशाली नृत्य प्रस्तुति।',
    url: 'https://www.youtube.com/watch?v=VXhpKCOxo54'
  },
  {
    id: 'vid-ramayan',
    youtubeId: 'egDB-vK6S2k',
    titleEn: 'Ramayan Act Dramatic Performance',
    titleHi: 'रामायण प्रसंग नाट्य प्रस्तुति',
    categoryEn: 'Theatrical Drama',
    categoryHi: 'नाट्य मंचन',
    duration: 'Drama Act',
    thumbnail: '/gallery/yt-thumbnails/egDB-vK6S2k.jpg',
    descriptionEn: 'Reverent theatrical presentation depicting classic episodes and moral values from the Ramayana on stage.',
    descriptionHi: 'रामायण के आदर्श चरित्रों और नैतिक मूल्यों को जीवंत करता विद्यार्थियों का नाट्य मंचन।',
    url: 'https://www.youtube.com/watch?v=egDB-vK6S2k'
  }
];

export const instagramReels: InstagramReelItem[] = [
  {
    id: 'reel-drone',
    shortcode: 'DDUu7JYyEVI',
    url: 'https://www.instagram.com/p/DDUu7JYyEVI/',
    titleEn: 'Drone Aerial View & Grand Campus Gathering',
    titleHi: 'ड्रोन विहंगम दृश्य एवं महोत्सव की भव्यता',
    categoryEn: 'Aerial View',
    categoryHi: 'विहंगम दृश्य',
    captionEn: 'Spectacular drone footage capturing the vast sea of 10,000+ visitors, parents, and festive campus illumination.',
    captionHi: 'विद्यालय परिसर के विशाल जनसमूह एवं उत्सव के उल्लास को दर्शाता मनोहारी ड्रोन दृश्य।'
  },
  {
    id: 'reel-teaser',
    shortcode: 'DeJAhUHv9Uu',
    url: 'https://www.instagram.com/p/DeJAhUHv9Uu/',
    titleEn: 'TARANG 2.0 — Official Festival Teaser',
    titleHi: 'तरंग २.० — आधिकारिक उत्सव टीज़र',
    categoryEn: 'Official Teaser',
    categoryHi: 'आधिकारिक टीज़र',
    captionEn: 'First official look and musical teaser announcing the upcoming edition of TARANG 2.0.',
    captionHi: 'तरंग २.० के नवीन स्वरूप एवं सांस्कृतिक थीम की पहली संगीतमय आधिकारिक झलक।'
  },
  {
    id: 'reel-post-event',
    shortcode: 'DCib7ZCTcb2',
    url: 'https://www.instagram.com/p/DCib7ZCTcb2/',
    titleEn: 'TARANG 2024 — Post-Event Highlights',
    titleHi: 'तरंग २०२४ — समारोह उपरांत मुख्य झलकियाँ',
    categoryEn: 'Event Highlights',
    categoryHi: 'समारोह झलकियाँ',
    captionEn: 'Relive the high-energy celebrations, student joy, and memorable memories from 18 November 2024.',
    captionHi: '१८ नवम्बर २०२४ के अविस्मरणीय पलों, विद्यार्थियों के उत्साह और उत्सव की जीवंत स्मृतियाँ।'
  }
];

