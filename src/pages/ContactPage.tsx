import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { SEO, kunafaKeywords, locationKeywords } from '@/components/SEO';
import { breadcrumbSchema } from '@/utils/jsonLd';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Order Kunafa Online in Delhi"
        description="Contact 1Mysa Café for Kunafa orders, catering inquiries, or questions. Call +91-93105-79571 or WhatsApp us. Best Turkish Kunafa delivery in Shaheen Bagh, Delhi."
        keywords={`Contact 1Mysa Cafe, Order Kunafa Online, Kunafa Delivery Contact, Turkish Cafe Delhi Phone, Kunafa Catering Inquiry, ${kunafaKeywords}, ${locationKeywords}`}
        canonical="https://www.1mysacafe.com/contact"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact 1Mysa Café',
          description: 'Contact us for Kunafa orders and catering',
          url: 'https://www.1mysacafe.com/contact',
          telephone: '+91-93105-79571',
          breadcrumb: breadcrumbSchema([
            { name: 'Home', url: 'https://www.1mysacafe.com' },
            { name: 'Contact', url: 'https://www.1mysacafe.com/contact' },
          ]),
        }}
      />

      <main className="min-h-screen bg-background">
        <Navbar />
        <ContactSection />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
}
