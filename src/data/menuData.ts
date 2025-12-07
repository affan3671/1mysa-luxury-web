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
    name: 'Turkish Coffee (Strong)',
    nameHi: 'तुर्किश कॉफी (स्ट्रॉन्ग)',
    description: 'Traditional sand-boiled Turkish coffee, rich and aromatic',
    descriptionHi: 'पारंपरिक रेत में उबाली गई तुर्किश कॉफी, समृद्ध और सुगंधित',
    price: 120,
    category: 'coffee',
    isPopular: true,
  },
  {
    id: 'tc-2',
    name: 'Turkish Coffee with Cream',
    nameHi: 'तुर्किश कॉफी विथ क्रीम',
    description: 'Rich Turkish coffee topped with velvety cream',
    descriptionHi: 'मखमली क्रीम के साथ समृद्ध तुर्किश कॉफी',
    price: 150,
    category: 'coffee',
  },
  {
    id: 'tc-3',
    name: 'Bosnian Coffee',
    nameHi: 'बोस्नियन कॉफी',
    description: 'Traditional Bosnian style coffee with unique flavor',
    descriptionHi: 'अनोखे स्वाद के साथ पारंपरिक बोस्नियन शैली की कॉफी',
    price: 130,
    category: 'coffee',
  },
  {
    id: 'tc-4',
    name: 'Ginger Coffee',
    nameHi: 'अदरक कॉफी',
    description: 'Warming coffee infused with fresh ginger',
    descriptionHi: 'ताज़े अदरक से युक्त गर्म कॉफी',
    price: 110,
    category: 'coffee',
  },
  {
    id: 'tc-5',
    name: 'Ginger Halwa Drink',
    nameHi: 'अदरक हलवा ड्रिंक',
    description: 'Sweet ginger halwa flavored hot beverage',
    descriptionHi: 'मीठा अदरक हलवा स्वाद वाला गर्म पेय',
    price: 140,
    category: 'coffee',
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
  },

  // Kunafa / Knafeh
  {
    id: 'k-1',
    name: 'Classic Kunafa',
    nameHi: 'क्लासिक कुनाफा',
    description: 'Traditional cheese kunafa with sugar syrup and pistachios',
    descriptionHi: 'चीनी की चाशनी और पिस्ता के साथ पारंपरिक चीज़ कुनाफा',
    price: 180,
    category: 'kunafa',
    isPopular: true,
  },
  {
    id: 'k-2',
    name: 'Cheese Kunafa',
    nameHi: 'चीज़ कुनाफा',
    description: 'Extra cheese filling with crispy vermicelli top',
    descriptionHi: 'कुरकुरे वर्मीसेली टॉप के साथ एक्स्ट्रा चीज़ फिलिंग',
    price: 200,
    category: 'kunafa',
    isPopular: true,
  },
  {
    id: 'k-3',
    name: 'Cream Kunafa',
    nameHi: 'क्रीम कुनाफा',
    description: 'Light cream filled kunafa with rose water essence',
    descriptionHi: 'गुलाब जल के सार के साथ हल्की क्रीम भरी कुनाफा',
    price: 190,
    category: 'kunafa',
  },
  {
    id: 'k-4',
    name: 'Nutella Kunafa',
    nameHi: 'नुटेला कुनाफा',
    description: 'Fusion kunafa filled with rich Nutella',
    descriptionHi: 'समृद्ध नुटेला से भरी फ्यूज़न कुनाफा',
    price: 220,
    category: 'kunafa',
    isNew: true,
  },
  {
    id: 'k-5',
    name: 'Pistachio Kunafa',
    nameHi: 'पिस्ता कुनाफा',
    description: 'Premium kunafa loaded with crushed pistachios',
    descriptionHi: 'कुचले पिस्ता से भरपूर प्रीमियम कुनाफा',
    price: 250,
    category: 'kunafa',
    isPopular: true,
  },
  {
    id: 'k-6',
    name: 'Kunafa Bites',
    nameHi: 'कुनाफा बाइट्स',
    description: 'Mini kunafa pieces, perfect for sharing (6 pcs)',
    descriptionHi: 'मिनी कुनाफा टुकड़े, शेयर करने के लिए परफेक्ट (6 पीस)',
    price: 160,
    category: 'kunafa',
  },

  // Baklava & Sweets
  {
    id: 'b-1',
    name: 'Pistachio Baklava',
    nameHi: 'पिस्ता बकलावा',
    description: 'Layers of phyllo with crushed pistachios and honey',
    descriptionHi: 'कुचले पिस्ता और शहद के साथ फाइलो की परतें',
    price: 80,
    category: 'baklava',
    isPopular: true,
  },
  {
    id: 'b-2',
    name: 'Walnut Baklava',
    nameHi: 'अखरोट बकलावा',
    description: 'Classic baklava with premium walnuts',
    descriptionHi: 'प्रीमियम अखरोट के साथ क्लासिक बकलावा',
    price: 70,
    category: 'baklava',
  },
  {
    id: 'b-3',
    name: 'Mixed Baklava Box',
    nameHi: 'मिक्स्ड बकलावा बॉक्स',
    description: 'Assortment of our finest baklava varieties (8 pcs)',
    descriptionHi: 'हमारी बेहतरीन बकलावा किस्मों का वर्गीकरण (8 पीस)',
    price: 320,
    category: 'baklava',
  },
  {
    id: 'b-4',
    name: 'Turkish Delight',
    nameHi: 'तुर्किश डिलाइट',
    description: 'Rose flavored lokum with pistachios',
    descriptionHi: 'पिस्ता के साथ गुलाब स्वाद वाला लोकुम',
    price: 60,
    category: 'baklava',
  },
  {
    id: 'b-5',
    name: 'Basbousa',
    nameHi: 'बसबूसा',
    description: 'Semolina cake soaked in sweet syrup',
    descriptionHi: 'मीठी चाशनी में भिगोया हुआ सूजी का केक',
    price: 90,
    category: 'baklava',
  },

  // Beverages
  {
    id: 'd-1',
    name: 'Karak Tea',
    nameHi: 'कड़क चाय',
    description: 'Spiced milk tea, creamy and aromatic',
    descriptionHi: 'मसालेदार दूध की चाय, मलाईदार और सुगंधित',
    price: 60,
    category: 'drinks',
    isPopular: true,
  },
  {
    id: 'd-2',
    name: 'Mint Lemonade',
    nameHi: 'पुदीना नींबू पानी',
    description: 'Refreshing lemonade with fresh mint',
    descriptionHi: 'ताज़े पुदीने के साथ ताज़गी भरा नींबू पानी',
    price: 80,
    category: 'drinks',
  },
  {
    id: 'd-3',
    name: 'Mango Shake',
    nameHi: 'मैंगो शेक',
    description: 'Thick and creamy mango milkshake',
    descriptionHi: 'गाढ़ा और मलाईदार आम का मिल्कशेक',
    price: 100,
    category: 'drinks',
  },
  {
    id: 'd-4',
    name: 'Oreo Shake',
    nameHi: 'ओरियो शेक',
    description: 'Creamy shake with crushed Oreo cookies',
    descriptionHi: 'कुचले ओरियो कुकीज़ के साथ मलाईदार शेक',
    price: 120,
    category: 'drinks',
  },
  {
    id: 'd-5',
    name: 'Cold Coffee',
    nameHi: 'कोल्ड कॉफी',
    description: 'Chilled coffee blend with ice cream',
    descriptionHi: 'आइसक्रीम के साथ ठंडी कॉफी',
    price: 110,
    category: 'drinks',
  },
  {
    id: 'd-6',
    name: 'Fresh Lime Soda',
    nameHi: 'फ्रेश लाइम सोडा',
    description: 'Fizzy lime soda, sweet or salted',
    descriptionHi: 'फ़िज़ी नींबू सोडा, मीठा या नमकीन',
    price: 50,
    category: 'drinks',
  },
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
