// JSON-LD structured data for SEO

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: '1Mysa Café',
  alternateName: '1मायसा कैफे',
  description: 'Best Turkish Kunafa and authentic Turkish coffee café in Shaheen Bagh, New Delhi',
  image: 'https://i.ibb.co/v4wGDzQn/bg.png',
  url: 'https://www.1mysacafe.com',
  telephone: '+91-93105-79571',
  priceRange: '₹₹',
  servesCuisine: ['Turkish', 'Middle Eastern', 'Desserts', 'Kunafa'],
  menu: 'https://www.1mysacafe.com/menu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al-habib masjid, near 40 futa road, next to Crumbs of Paris',
    addressLocality: 'Shaheen Bagh, Okhla',
    addressRegion: 'Delhi',
    postalCode: '110025',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.5392',
    longitude: '77.2900',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '10:00',
      closes: '23:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '244',
  },
};

export const kunafaProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Authentic Turkish Kunafa',
  description: 'Fresh, authentic Turkish Kunafa with premium cheese and pistachio toppings',
  image: 'https://i.ibb.co/v4wGDzQn/bg.png',
  brand: {
    '@type': 'Brand',
    name: '1Mysa Café',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://www.1mysacafe.com/menu',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    price: '299',
    priceValidUntil: '2026-12-31',
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'INR',
      },
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where can I find the best Kunafa in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1Mysa Café in Shaheen Bagh serves authentic Turkish Kunafa made with traditional recipes and premium ingredients. We are known for having the best Kunafa in Delhi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer Kunafa delivery in Delhi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer free delivery of fresh Kunafa across Delhi. Order through our website or delivery apps like Zomato and Swiggy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes your Kunafa authentic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Kunafa is made using traditional Turkish techniques with kataifi dough, premium quality cheese, authentic syrup, and fresh pistachio toppings imported from Turkey.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kunafa available for parties and events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide Kunafa catering for parties, weddings, corporate events, and celebrations. Contact us for bulk orders and special event packages.',
      },
    },
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: '1Mysa Café - Best Kunafa in Delhi',
  description: 'Authentic Turkish Kunafa and specialty coffee in Shaheen Bagh',
  url: 'https://www.1mysacafe.com',
  telephone: '+91-93105-79571',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al-habib masjid, near 40 futa road, next to Crumbs of Paris',
    addressLocality: 'Shaheen Bagh, Okhla',
    addressRegion: 'Delhi',
    postalCode: '110025',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.5392',
    longitude: '77.2900',
  },
  openingHours: ['Mo-Su 10:00-23:00'],
  priceRange: '₹₹',
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
