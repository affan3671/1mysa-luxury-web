import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { breadcrumbSchema } from '@/utils/jsonLd';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const { t, language } = useLanguage();

  const blogPosts = [
    {
      title: language === 'en' ? 'Best Places To Try Kunafa' : 'कुनाफा ट्राई करने के लिए सबसे अच्छे स्थान',
      excerpt: language === 'en'
        ? 'Are you in love with the viral Kunafa dessert? Well, you can find it here in Delhi. Here are the seven best spots to enjoy Kunafa in Delhi NCR.'
        : 'क्या आप वायरल कुनाफा डेसर्ट के दीवाने हैं? खैर, आप इसे दिल्ली में पा सकते हैं। दिल्ली एनसीआर में कुनाफा का आनंद लेने के लिए यहां सात बेहतरीन स्थान हैं।',
      date: '2026-04-01',
      readTime: '4 min',
      image: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo11.webp',
      link: 'https://www.herzindagi.com/diary/best-places-to-try-kunafa-the-viral-middle-eastern-dessert-in-delhi-ncr-article-1048998',
    },
    {
      title: language === 'en' ? 'Serve The Most Oozy, Syrupy & Cheesy Kunafa' : 'सर्व अधिक ओजी, सरपी और चीज़ी कुनाफा सर्व करें',
      excerpt: language === 'en'
        ? "If your idea of happiness involves crispy golden pastry, stretchy cheese, and a sweet syrupy drizzle, welcome to Kunafa heaven! This Middle Eastern delight has taken over Delhi, and we're absolutely here for it. Whether you like it classic or loaded with ice cream, pistachios, or Lotus Biscoff, these 10 best spots in Delhi NCR are serving Kunafa that's pure chef's kiss! So, get ready to dig in!"
        : 'अगर आपकी खुशी का विचार कुरकुरे सुनहरे पेस्ट्री, खिंचावदार चीज़, और मीठे सिरप की बूंदा-बांदी से जुड़ा है, तो कुनाफा स्वर्ग में आपका स्वागत है! यह मध्य पूर्वी प्रसन्नता ने दिल्ली पर कब्जा कर लिया है, और हम इसके लिए पूरी तरह से यहां हैं। चाहे आप इसे क्लासिक पसंद करें या आइसक्रीम, पिस्ता, या लोटस बिस्कॉफ के साथ लोडेड, दिल्ली एनसीआर में ये 10 बेहतरीन स्थान कुनाफा परोस रहे हैं जो शुद्ध शेफ्स किस है! तो, खाने के लिए तैयार हो जाइए!',
      date: '2026-02-25',
      readTime: '3 min',
      image: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/2024-06-14.webp',
      link: 'https://so.city/delhi/article/these-places-in-delhi-serve-the-most-oozy-syrupy-cheesy-kunafa-thatll-satisfy-all-your-cravings',
    }
  ];

  return (
    <>
      <SEO
        title="Blog | 1Mysa Café - Turkish Kunafa & Desserts Stories"
        description="Read about Turkish Kunafa recipes, coffee culture, and the story behind 1Mysa Café in Delhi. Authentic dessert traditions and brewing tips."
        keywords="Turkish Kunafa blog, dessert recipes, Turkish coffee culture, 1Mysa Café stories, authentic desserts Delhi"
        canonical="https://www.1mysacafe.com/blog"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Blog',
              name: '1Mysa Café Blog',
              description: 'Stories about Turkish Kunafa, coffee culture, and dessert traditions',
              url: 'https://www.1mysacafe.com/blog',
            },
            breadcrumbSchema([
              { name: 'Home', url: 'https://www.1mysacafe.com' },
              { name: 'Blog', url: 'https://www.1mysacafe.com/blog' },
            ]),
          ],
        }}
      />

      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Banner */}
        <header className="pt-28 pb-12 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-4"
            >
              <span className="gold-text">
                {language === 'en' ? 'Our Blog' : 'हमारा ब्लॉग'}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {language === 'en'
                ? 'Stories, recipes, and traditions from the world of Turkish desserts'
                : 'तुर्की डेसर्ट की दुनिया से कहानियां, व्यंजन और परंपराएं'}
            </motion.p>
          </div>
        </header>

        {/* Blog Posts Grid */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (img.dataset.fallbackApplied) return;
                      img.dataset.fallbackApplied = "1";
                      img.src = "/placeholder.svg";
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'hi-IN')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    {language === 'en' ? 'Read More' : 'और पढ़ें'}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 bg-gradient-to-br from-secondary/50 to-background rounded-3xl border border-border"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              <span className="gold-text">
                {language === 'en' ? 'More Stories Coming Soon' : 'और भी कहानियां जल्द आ रही हैं'}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {language === 'en'
                ? 'We are working on bringing you more exciting content about Turkish desserts, recipes, and culture.'
                : 'हम तुर्की डेसर्ट, व्यंजनों और संस्कृति के बारे में अधिक रोमांचक सामग्री लाने पर काम कर रहे हैं।'}
            </p>
          </motion.div>
        </section>

        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
}