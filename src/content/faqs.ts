export interface FAQItem {
  id: string;
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
  category: 'general' | 'entry' | 'participation' | 'venue';
}

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'entry',
    questionEn: 'Is there an admission fee or ticket required to attend TARANG 2.0?',
    questionHi: 'क्या तरंग 2.0 समारोह में सम्मिलित होने के लिए कोई प्रवेश शुल्क या टिकट आवश्यक है?',
    answerEn: 'No. TARANG 2.0 is an institutional annual celebration open to all parents, alumni, guardians, well-wishers, and invited guests free of charge.',
    answerHi: 'नहीं। तरंग 2.0 विद्यालय का वार्षिक सांस्कृतिक उत्सव है, जिसमें समस्त अभिभावक, पूर्व छात्र, संरक्षक एवं सम्मानित अतिथि सादर आमंत्रित हैं और प्रवेश पूर्णतः निःशुल्क है।'
  },
  {
    id: 'faq-2',
    category: 'general',
    questionEn: 'What are the reporting and event timings for visitors?',
    questionHi: 'आगंतुकों एवं अभिभावकों के आगमन का समय क्या है?',
    answerEn: 'Gates open at 2:30 PM. The ceremonial inaugural proceedings begin promptly at 3:00 PM on Wednesday, 18 November 2026.',
    answerHi: 'समारोह के लिए विद्यालय मुख्य द्वार अपराह्न 2:30 बजे खुलेंगे। उद्घाटन सत्र एवं दीप प्रज्वलन 3:00 बजे प्रारंभ होगा।'
  },
  {
    id: 'faq-3',
    category: 'participation',
    questionEn: 'How can students register or audition for TARANG performances?',
    questionHi: 'विद्यार्थी सांस्कृतिक कार्यक्रमों में किस प्रकार भाग ले सकते हैं?',
    answerEn: 'Student participation is coordinated offline directly through respective class teachers and the Cultural Committee on campus. Auditions and rehearsals are organized during school activity hours.',
    answerHi: 'विद्यार्थियों का पंजीकरण विद्यालय में सांस्कृतिक समिति एवं कक्षा अध्यापकों द्वारा ऑफलाइन प्रक्रिया के माध्यम से किया जाता है। नियमित पूर्वाभ्यास विद्यालय समय में संचालित होते हैं।'
  },
  {
    id: 'faq-4',
    category: 'venue',
    questionEn: 'Where is the school campus located and what are the parking arrangements?',
    questionHi: 'विद्यालय परिसर कहाँ स्थित है एवं वाहन पार्किंग की क्या व्यवस्था है?',
    answerEn: 'The event takes place at the School Campus in Mathauli Bazar, Kushinagar (U.P.). Dedicated parking spaces and volunteer guides will be available at the main approach road.',
    answerHi: 'समारोह विद्यालय प्रांगण, मथौली बाज़ार, कुशीनगर (उ.प्र.) में आयोजित होगा। मुख्य मार्ग पर वाहन पार्किंग एवं स्वयंसेवक मार्गदर्शन उपलब्ध रहेगा।'
  },
  {
    id: 'faq-5',
    category: 'general',
    questionEn: 'Will recordings and photographs be accessible after the event?',
    questionHi: 'क्या समारोह के उपरांत छायाचित्र एवं वीडियो उपलब्ध होंगे?',
    answerEn: 'Yes! High-resolution photographs will be published in the official online Gallery, and full performance videos will be uploaded to our official YouTube channel (@SRDICTarang2024).',
    answerHi: 'हाँ! समारोह के सभी उच्च गुणवत्ता वाले छायाचित्र आधिकारिक वेबसाइट गैलरी में एवं वीडियो प्रस्तुतियाँ हमारे आधिकारिक यूट्यूब चैनल (@SRDICTarang2024) पर प्रकाशित की जाएंगी।'
  }
];

