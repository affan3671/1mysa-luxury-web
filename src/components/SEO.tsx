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
export const kunafaKeywords = 'Kunafa, Turkish Kunafa, Best Kunafa in Delhi, Kunafa Near Me, Kunafa Shaheen Bagh, Authentic Kunafa, Turkish Desserts Delhi, Middle Eastern Sweets, Kunafah, Knafeh, كنافة';

export const kunafaMenuKeywords = 'Kunafa Menu, Turkish Kunafa Price, Order Kunafa Online, Kunafa Delivery Delhi, Fresh Kunafa, Cheese Kunafa, Pistachio Kunafa, Best Kunafa Shop';

export const locationKeywords = 'Kunafa in Shaheen Bagh, Kunafa in Okhla, Kunafa Near Jamia, Kunafa South Delhi, Turkish Cafe Delhi, Kunafa Restaurant Delhi';

export default SEO;
