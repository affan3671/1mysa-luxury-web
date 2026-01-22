export interface MenuItem {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  descriptionHi: string;
  price: number;
  category: 'coffee' | 'kunafa' | 'baklava' | 'drinks';
  image?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export const menuItems: MenuItem[] = [
  // Turkish Coffee & Hot Drinks
  {
    id: 'tc-1',
    name: 'Sand Caffeine-Infused Turkish Coffee',
    nameHi: 'सैंड कैफीन-युक्त तुर्की कॉफी',
    description: 'Traditional sand-boiled Turkish coffee, rich and aromatic',
    descriptionHi: 'पारंपरिक रेत में उबाली गई तुर्किश कॉफी, समृद्ध और सुगंधित',
    price: 55,
    category: 'coffee',
    image: '/images/coffee/Sand_Caffeine_Infused_Turkish_Coffee.jpg',
    isPopular: true,
  },
  {
    id: 'tc-2',
    name: 'Sand Black Caffeine-Authentic Turkish Coffee',
    nameHi: 'सैंड ब्लैक कैफीन-प्रामाणिक तुर्की कॉफी',
    description: 'Rich, bold, and aromatic Turkish coffee for a true traditional experience.',
    descriptionHi: 'एक सच्चे पारंपरिक अनुभव के लिए समृद्ध, दमदार और सुगंधित तुर्की कॉफी।',
    price: 70,
    category: 'coffee',
    image: '/images/coffee/Sand_Black_Caffeine_Authentic_Turkish_Coffee.jpg',
  },
  {
    id: 'tc-3',
    name: '1 Mysa Beaten Caffeine-More Creamy Coffee',
    nameHi: '1 मायसा बीटन कैफीन-मोर क्रीमी कॉफी',
    description: 'Smooth, creamy, and well-balanced coffee with a rich, comforting taste.',
    descriptionHi: 'एक मुलायम, मलाईदार और संतुलित कॉफी जिसका स्वाद भरपूर और सुखद है।',
    price: 70,
    category: 'coffee',
    image: '/images/coffee/1_Mysa_Beaten_Caffeine_More_Creamy_Coffee.jpg',
  },
  /*{
    id: 'tc-4',
    name: 'Ginger Coffee',
    nameHi: 'अदरक कॉफी',
    description: 'Warming coffee infused with fresh ginger',
    descriptionHi: 'ताज़े अदरक से युक्त गर्म कॉफी',
    price: 110,
    category: 'coffee',
    image: '/images/coffee/399361128_759025669573090_1213483921279875783_n.jpg',
  },
  {
    id: 'tc-5',
    name: 'Ginger Halwa Drink',
    nameHi: 'अदरक हलवा ड्रिंक',
    description: 'Sweet ginger halwa flavored hot beverage',
    descriptionHi: 'मीठा अदरक हलवा स्वाद वाला गर्म पेय',
    price: 140,
    category: 'coffee',
    image: '/images/coffee/399361128_759025669573090_1213483921279875783_n.jpg',
    isNew: true,
  },
  {
    id: 'tc-6',
    name: 'Hot Chocolate',
    nameHi: 'हॉट चॉकलेट',
    description: 'Rich and creamy hot chocolate',
    descriptionHi: 'समृद्ध और मलाईदार हॉट चॉकलेट',
    price: 120,
    category: 'coffee',
    image: '/images/coffee/399361128_759025669573090_1213483921279875783_n.jpg',
  },*/

  // Kunafa / Knafeh
  {
    id: 'k-1',
    name: 'Lotus Biscoff Knafeh/Kunafa',
    nameHi: 'लोटस बिस्कॉफ कनाफेह/कुनाफा',
    description: 'Crispy kunafa layered with creamy filling and rich Lotus Biscoff flavor.',
    descriptionHi: 'मलाईदार भरावन और लोटस बिस्कॉफ के भरपूर स्वाद से भरपूर कुरकुरे कुनाफा की परतें।',
    price: 599,
    category: 'kunafa',
    image: '/images/kunafa/lotus-biscoff-kunafa.jpg',
    isPopular: true,
  },
  {
    id: 'k-2',
    name: 'Honey Syrup Knafeh/Kunafa',
    nameHi: 'शहद की चाशनी वाला कनाफेह/कुनाफा',
    description: 'Crispy kunafa soaked in sweet honey syrup with a rich, traditional taste.',
    descriptionHi: 'मीठे शहद के सिरप में डूबे हुए कुरकुरे कुनाफा, एक समृद्ध, पारंपरिक स्वाद के साथ।',
    price: 449,
    category: 'kunafa',
    image: '/images/kunafa/honey-syrup-kunafa.jpg',
    isPopular: true,
  },
  {
    id: 'k-3',
    name: 'Nutella Spread Knafeh/Kunafa',
    nameHi: 'नूटेला स्प्रेड कनाफेह/कुनाफा',
    description: 'Crispy kunafa filled with warm, rich Nutella for an indulgent treat.',
    descriptionHi: 'गरमागरम, लजीज न्यूटेला से भरे कुरकुरे कुनाफा एक शानदार व्यंजन हैं।',
    price: 539,
    category: 'kunafa',
    image: '/images/kunafa/nutella-spread-kunafa.jpeg',
  },
  {
    id: 'k-4',
    name: 'Date Syrup Knafeh/Kunafa',
    nameHi: 'खजूर की चाशनी से बना कनाफेह/कुनाफा',
    description: 'Crispy kunafa drizzled with rich, natural date syrup for a deep, sweet flavor.',
    descriptionHi: 'कुरकुरे कुनाफा पर भरपूर, प्राकृतिक खजूर की चाशनी डाली गई है, जिससे इसका स्वाद गहरा और मीठा हो जाता है।',
    price: 499,
    category: 'kunafa',
    image: '/images/kunafa/date_syrup_kunafa.jpg',
  },
  {
    id: 'k-5',
    name: 'Sugar Syrup Knafeh/Kunafa',
    nameHi: 'चीनी की चाशनी से बना कनाफेह/कुनाफा',
    description: 'Golden, crispy kunafa soaked in classic sugar syrup for a traditional sweetness.',
    descriptionHi: 'पारंपरिक मिठास के लिए क्लासिक चीनी की चाशनी में भिगोए हुए सुनहरे, कुरकुरे कुनाफा।',
    price: 349,
    category: 'kunafa',
    image: '/images/kunafa/sugar_syrup_kunafa.jpg',
    isPopular: true,
  },
  {
    id: 'k-6',
    name: 'Ice Cream Knafeh/Kunafa',
    nameHi: 'आइसक्रीम कनाफेह/कुनाफा',
    description: 'Warm, crispy kunafa paired with cold, creamy ice cream for a perfect contrast.',
    descriptionHi: 'गरमागरम, कुरकुरे कुनाफा को ठंडी, मलाईदार आइसक्रीम के साथ मिलाकर एक बेहतरीन संयोजन बनता है।',
    price: 499,
    category: 'kunafa',
    image: '/images/kunafa/ice-cream-kunafa.jpeg',
  },
  {
    id: 'k-7',
    name: 'Pista Kunefe/Kunafa',
    nameHi: 'पिस्ता कुनेफे/कुनाफा',
    description: 'Crispy kunafa filled with rich pistachio flavor and sweet syrup.',
    descriptionHi: 'कुरकुरे कुनाफा, जो पिस्ता के भरपूर स्वाद और मीठे सिरप से भरे हुए हैं।',
    price: 749,
    category: 'kunafa',
    image: '/images/kunafa/pista_kunafa.jpg',
  },
  {
    id: 'k-8',
    name: 'Dubai Pista Spread Kunafa/Kunefe',
    nameHi: 'दुबई पिस्ता स्प्रेड कनाफेह/कुनाफा',
    description: 'Crispy kunafa layered with rich Dubai pistachio spread for a luxurious taste.',
    descriptionHi: 'शानदार स्वाद के लिए कुरकुरे कुनाफा पर दुबई पिस्ता का भरपूर स्प्रेड लगाया गया है।',
    price: 699,
    category: 'kunafa',
    image: '/images/kunafa/dubai_pista_kunafa.jpeg',
  },
  {
    id: 'k-9',
    name: 'Combo Topping Kunefe/Kunafa',
    nameHi: 'कुनेफे/कुनाफा टॉपिंग कॉम्बो',
    description: 'Crispy kunafa topped with a mix of rich, indulgent flavors.',
    descriptionHi: 'कुरकुरे कुनाफा के ऊपर स्वादिष्ट और लजीज स्वादों का मिश्रण डाला गया है।',
    price: 0, // Price varies based on topping selection
    category: 'kunafa',
    image: '/images/kunafa/combo_topping_kunafa.jpg',
  },
  
  // Baklava & Sweets

  /*{
    id: 'b-1',
    name: 'Finger Baklava',
    nameHi: 'उंगली बाकलावा',
    description: 'Crispy, golden pastry filled with nuts and finished with sweet syrup.',
    descriptionHi: 'कुरकुरी, सुनहरी पेस्ट्री जिसमें मेवे भरे हुए हैं और ऊपर से मीठी चाशनी डाली गई है।',
    price: 80,
    category: 'baklava',
    image: '/images/baklava/hero-baklava.jpg',
    isPopular: true,
  },*/
  {
    id: 'b-2',
    name: 'Pyramid Baklava',
    nameHi: 'पिरामिड बकलावा',
    description: 'Layered, flaky baklava shaped into a pyramid and soaked in sweet syrup.',
    descriptionHi: 'परतदार, खस्ता बकलावा को पिरामिड के आकार में ढाला जाता है और मीठे सिरप में भिगोया जाता है।',
    price: 39,
    category: 'baklava',
    image: '/images/baklava/pyramid_baklava.jpg',
  },
  {
    id: 'b-3',
    name: 'Cashew Square Baklava',
    nameHi: 'काजू का चौकोर बकलावा',
    description: 'Flaky square baklava filled with rich, crunchy cashews and sweet syrup.',
    descriptionHi: 'परतदार चौकोर बकलावा, जिसमें भरपूर मात्रा में कुरकुरे काजू और मीठी चाशनी भरी हुई है।',
    price: 49,
    category: 'baklava',
    image: '/images/baklava/cashew_square_baklava.jpg',
  },
  {
    id: 'b-4',
    name: 'Cashew Kunafa Baklava',
    nameHi: 'काजू कुनाफा बकलावा',
    description: 'Crispy kunafa-style baklava filled with roasted cashews and sweet syrup.',
    descriptionHi: 'भुने हुए काजू और मीठे सिरप से भरा कुरकुरा कुनाफा-शैली का बकलावा।',
    price: 59,
    category: 'baklava',
    image: '/images/baklava/cashew_kunafa_baklava.jpg',
  },
  {
    id: 'b-5',
    name: 'Oshe Bulbul Baklava',
    nameHi: 'ओशे बुलबुल बकलावा',
    description: 'Delicate, bird’s-nest–shaped baklava filled with nuts and drizzled with syrup.',
    descriptionHi: 'मेवों से भरी और चाशनी से सजी, चिड़िया के घोंसले के आकार की नाजुक बकलावा।',
    price: 70,
    category: 'baklava',
    image: '/images/baklava/oshe_bulbul_baklava.jpg',
  },
  {
    id: 'b-6',
    name: 'Chocolate Square Baklava',
    nameHi: 'चॉकलेट स्क्वायर बकलावा',
    description: 'Rich, flaky baklava squares layered with chocolate and sweet syrup.',
    descriptionHi: 'चॉकलेट और मीठे सिरप की परतों से सजे हुए, मुलायम और परतदार बकलावा के चौकोर टुकड़े।',
    price: 35,
    category: 'baklava',
    image: '/images/baklava/chocolate_square_baklava.jpg',
  },

  // Beverages
  /*{
    id: 'd-1',
    name: 'Sand Black Caffeine(Turkish Strong) ',
    nameHi: 'सैंड ब्लैक कैफीन (तुर्की स्ट्रॉन्ग)',
    description: 'Bold, intense Turkish coffee with a deep, powerful flavor.',
    descriptionHi: 'एक दमदार और तीव्र स्वाद वाली तुर्की कॉफी।',
    price: 30,
    category: 'drinks',
    image: '/images/bevarage.jpg',
    isPopular: true,
  },
  {
    id: 'd-2',
    name: 'Sand Caffeine (Turkish Milk Based)',
    nameHi: 'सैंड कैफीन (तुर्की दूध आधारित)',
    description: 'Smooth Turkish coffee blended with milk for a rich, creamy taste.',
    descriptionHi: 'गाढ़े और मलाईदार स्वाद के लिए दूध के साथ मिश्रित मुलायम तुर्की कॉफी।',
    price: 35,
    category: 'drinks',
    image: '/images/bevarage.jpg',
  },
  {
    id: 'd-3',
    name: '1 Mysa Beaten Caffeine',
    nameHi: '1 मायसा बीटन कैफीन',
    description: 'Light, smooth coffee with a soft, creamy finish.',
    descriptionHi: 'हल्की, मुलायम कॉफी जिसका स्वाद मलाईदार और हल्का होता है।',
    price: 55,
    category: 'drinks',
    image: '/images/bevarage.jpg',
  },
  /*{
    id: 'd-4',
    name: 'Finger Baklava',
    nameHi: 'उंगली बाकलावा',
    description: 'Crispy, golden pastry filled with nuts and finished with sweet syrup.',
    descriptionHi: 'कुरकुरी, सुनहरी पेस्ट्री जिसमें मेवे भरे हुए हैं और ऊपर से मीठी चाशनी डाली गई है।',
    price: 20,
    category: 'drinks',
    image: '/images/bevarage.jpg',
  },
  {
    id: 'd-5',
    name: 'Cold Coffee',
    nameHi: 'कोल्ड कॉफी',
    description: 'Chilled coffee blend with ice cream',
    descriptionHi: 'आइसक्रीम के साथ ठंडी कॉफी',
    price: 110,
    category: 'drinks',
    image: '/images/399361128_759025669573090_1213483921279875783_n.jpg',
  },
  {
    id: 'd-6',
    name: 'Fresh Lime Soda',
    nameHi: 'फ्रेश लाइम सोडा',
    description: 'Fizzy lime soda, sweet or salted',
    descriptionHi: 'फ़िज़ी नींबू सोडा, मीठा या नमकीन',
    price: 50,
    category: 'drinks',
    image: '/images/bevarage.jpg',
  },*/
];

export const getMenuByCategory = (category: MenuItem['category']) => {
  return menuItems.filter(item => item.category === category);
};

export const getPopularItems = () => {
  return menuItems.filter(item => item.isPopular);
};

export const getNewItems = () => {
  return menuItems.filter(item => item.isNew);
};
