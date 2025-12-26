import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About Us',
    'nav.gallery': 'Gallery',
    'nav.faq': 'FAQs',
    'nav.party': 'Party & Events',
    'nav.order': 'Order Online',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.tagline': 'Kunafa. Coffee. Comfort.',
    'hero.subtitle': 'The Heart of Shaheen Bagh',
    'hero.cta.order': 'Order on Zomato',
    'hero.cta.directions': 'Get Directions',
    
    // Features
    'feature.dinein': 'Dine-in',
    'feature.drivethrough': 'Drive-through',
    'feature.delivery': 'Delivery',
    
    // Menu
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Authentic Turkish & Middle Eastern Delights',
    'menu.coffee': 'Turkish Coffee & Hot Drinks',
    'menu.kunafa': 'Kunafa / Knafeh',
    'menu.baklava': 'Baklava & Sweets',
    //*'menu.drinks': 'Beverages',*/
    
    // About
    'about.title': 'Our Story',
    'about.subtitle': 'A Taste of Turkey in Delhi',
    'about.p1': 'Nestled in the vibrant heart of Shaheen Bagh, 1Mysa Café brings the authentic flavors of Turkish and Middle Eastern desserts to Delhi. Our passion lies in crafting the perfect Kunafa - crispy, golden, and dripping with sweet syrup.',
    'about.p2': 'Our Turkish coffee is sand-boiled the traditional way, creating a rich, aromatic experience that transports you straight to the streets of Istanbul. Every cup tells a story of centuries-old tradition.',
    'about.p3': 'At 1Mysa, we believe in warm hospitality and creating a cozy ambiance where every guest feels at home. Come, sit, and savor the sweetness of life.',
    
    // Reviews
    'reviews.title': 'What Our Guests Say',
    'reviews.subtitle': 'Real experiences from our beloved customers',
    'reviews.submit': 'Share Your Experience',
    'reviews.name': 'Your Name',
    'reviews.review': 'Your Review',
    'reviews.rating': 'Rating',
    'reviews.send': 'Submit Review',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'A Visual Journey Through 1Mysa',
    'gallery.food': 'Food',
    'gallery.vibe': 'Vibe',
    'gallery.interior': 'Interior',
    
    // Contact
    'contact.title': 'Visit Us',
    'contact.subtitle': 'We would love to see you',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.hours': 'Hours',
    'contact.hoursValue': 'Open till 11 PM daily',
    'contact.callnow': 'Call Now',
    'contact.whatsapp': 'WhatsApp',
    'contact.directions': 'Get Directions',
    
    // Footer
    'footer.tagline': 'Baked with Love in Shaheen Bagh.',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Connect With Us',
    'footer.rights': 'All rights reserved.',
    
    // Order
    'order.title': 'Order Online',
    'order.subtitle': 'Craving Kunafa? Get it delivered!',
    
    // Party & Events
    'party.badge': 'Celebrate With Us',
    'party.title': 'Party & Big Orders',
    'party.subtitle': 'Make your celebrations sweeter with authentic Turkish desserts and beverages—Turkish coffee, Turkish qahwa and tea, baklava, and kunafah—perfect for birthdays, corporate events, and special occasions.',
    'party.gallery': 'Our Events',
    'party.cta.title': 'Ready to Book?',
    'party.cta.subtitle': 'Contact us on WhatsApp for bulk orders, party bookings, and custom arrangements.',
    'party.cta.button': 'Book on WhatsApp',
    //'party.cta.response': 'We typically respond within 30 minutes',
  },
  hi: {
    // Navbar
    'nav.home': 'होम',
    'nav.menu': 'मेन्यू',
    'nav.about': 'हमारे बारे में',
    'nav.gallery': 'गैलरी',
    'nav.party': 'पार्टी और इवेंट्स',
    'nav.order': 'ऑनलाइन ऑर्डर',
    'nav.contact': 'संपर्क',
    
    // Hero
    'hero.tagline': 'कुनाफा। कॉफी। आराम।',
    'hero.subtitle': 'शाहीन बाघ का दिल',
    'hero.cta.order': 'Zomato पर ऑर्डर करें',
    'hero.cta.directions': 'रास्ता देखें',
    
    // Features
    'feature.dinein': 'डाइन-इन',
    'feature.drivethrough': 'ड्राइव-थ्रू',
    'feature.delivery': 'डिलीवरी',
    
    // Menu
    'menu.title': 'हमारा मेन्यू',
    'menu.subtitle': 'प्रामाणिक तुर्की और मध्य पूर्वी व्यंजन',
    'menu.coffee': 'तुर्किश कॉफी और गर्म पेय',
    'menu.kunafa': 'कुनाफा / नाफेह',
    'menu.baklava': 'बकलावा और मिठाइयां',
    'menu.drinks': 'पेय पदार्थ',
    
    // About
    'about.title': 'हमारी कहानी',
    'about.subtitle': 'दिल्ली में तुर्की का स्वाद',
    'about.p1': 'शाहीन बाघ के जीवंत हृदय में स्थित, 1मायसा कैफे दिल्ली में तुर्की और मध्य पूर्वी मिठाइयों का प्रामाणिक स्वाद लाता है। हमारा जुनून सही कुनाफा बनाना है - कुरकुरा, सुनहरा और मीठे शरबत से भरपूर।',
    'about.p2': 'हमारी तुर्किश कॉफी पारंपरिक तरीके से रेत में उबाली जाती है, जो एक समृद्ध, सुगंधित अनुभव बनाती है जो आपको सीधे इस्तांबुल की गलियों में ले जाती है।',
    'about.p3': '1मायसा में, हम गर्मजोशी से आतिथ्य और एक आरामदायक माहौल बनाने में विश्वास करते हैं जहां हर मेहमान घर जैसा महसूस करे। आइए, बैठिए और जीवन की मिठास का आनंद लीजिए।',
    
    // Reviews
    'reviews.title': 'हमारे मेहमान क्या कहते हैं',
    'reviews.subtitle': 'हमारे प्रिय ग्राहकों के वास्तविक अनुभव',
    'reviews.submit': 'अपना अनुभव साझा करें',
    'reviews.name': 'आपका नाम',
    'reviews.review': 'आपकी समीक्षा',
    'reviews.rating': 'रेटिंग',
    'reviews.send': 'समीक्षा भेजें',
    
    // Gallery
    'gallery.title': 'गैलरी',
    'gallery.subtitle': '1मायसा की एक दृश्य यात्रा',
    'gallery.food': 'खाना',
    'gallery.vibe': 'माहौल',
    'gallery.interior': 'इंटीरियर',
    
    // Contact
    'contact.title': 'हमसे मिलें',
    'contact.subtitle': 'हम आपसे मिलना पसंद करेंगे',
    'contact.address': 'पता',
    'contact.phone': 'फोन',
    'contact.hours': 'समय',
    'contact.hoursValue': 'रोजाना रात 11 बजे तक खुला',
    'contact.callnow': 'अभी कॉल करें',
    'contact.whatsapp': 'व्हाट्सएप',
    'contact.directions': 'रास्ता देखें',
    
    // Footer
    'footer.tagline': 'शाहीन बाघ में प्यार से बेक किया गया।',
    'footer.quicklinks': 'त्वरित लिंक',
    'footer.connect': 'हमसे जुड़ें',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',
    
    // Order
    'order.title': 'ऑनलाइन ऑर्डर करें',
    'order.subtitle': 'कुनाफा की चाहत? इसे डिलीवर करवाएं!',
    
    // Party & Events
    'party.badge': 'हमारे साथ जश्न मनाएं',
    'party.title': 'पार्टी और बड़े ऑर्डर',
    'party.subtitle': 'अपने उत्सवों को प्रामाणिक तुर्की मिठाइयों और पेय पदार्थों - तुर्की कॉफी, तुर्की कहवा और चाय, बकलावा और कुनाफा - के साथ और भी मीठा बनाएं, जो जन्मदिन, कॉर्पोरेट कार्यक्रमों और विशेष अवसरों के लिए बिल्कुल उपयुक्त हैं।',
    'party.gallery': 'हमारे इवेंट्स',
    'party.cta.title': 'बुक करने के लिए तैयार?',
    'party.cta.subtitle': 'बल्क ऑर्डर, पार्टी बुकिंग और कस्टम व्यवस्था के लिए व्हाट्सएप पर संपर्क करें।',
    'party.cta.button': 'व्हाट्सएप पर बुक करें',
    //'party.cta.response': 'हम आमतौर पर 30 मिनट में जवाब देते हैं',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
