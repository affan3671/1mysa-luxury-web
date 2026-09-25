import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business';
  jsonLd?: Record<string, unknown>;
}

export function SEO({
  title,
  description,
  keywords = '',
  canonical = 'https://www.1mysacafe.com',
  ogImage = 'https://i.ibb.co/HTwYn7wy/opengraph-image-p98pqg.png',
  ogType = 'website',
  jsonLd,
}: SEOProps) {
  const siteName = '1Mysa Café';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

// Pre-configured SEO for Kunafa-focused pages
export const kunafaKeywords = 'Best Kunafa in Delhi, Best Turkish Kunafa in New Delhi, Kunafa Near Me, Best Turkish Cafe Delhi, Best Turkish Coffee Near Me, Turkish Coffee in Delhi, Turkish Coffee in New Delhi, Turkish Cafe Near Me, Best Turkish Cafe in Delhi, Kunafa, Turkish Kunafa, Best Kunafa in Delhi, Kunafa Shaheen Bagh, Authentic Kunafa, Turkish Desserts Delhi, Middle Eastern Sweets, Kunafah, Knafeh, كنافة, Famous Turkish Cafe India';

export const kunafaMenuKeywords = 'Kunafa Menu, Best Turkish Kunafa Price, Order Best Kunafa Online, Best Kunafa Delivery Delhi, Fresh Kunafa, Cheese Kunafa, Pistachio Kunafa, Best Kunafa Shop New Delhi, Best Turkish Baklava Price';

export const locationKeywords = 'Best Kunafa in Shaheen Bagh, Best Kunafa in Okhla, Kunafa Near Jamia, Best Kunafa South Delhi, Best Turkish Cafe Delhi, Best Kunafa Restaurant Delhi, Best Cafe in Delhi Near Me, Best Cafe in New Delhi, Turkish Culture Turkey in India';

export default SEO;
