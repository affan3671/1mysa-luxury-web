import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, Phone } from 'lucide-react';
import { SEO, kunafaKeywords } from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | 1Mysa Café"
        description="Sorry, the page you're looking for doesn't exist. Visit 1Mysa Café for the best Turkish Kunafa in Delhi. Order online or visit us at Shaheen Bagh."
        keywords={`Page Not Found, 404 Error, ${kunafaKeywords}`}
        canonical="https://www.1mysacafe.com"
      />

      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl font-heading font-bold gold-text"
            >
              404
            </motion.div>
          </div>

          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Page Not Found
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off. But don't worry, our delicious Turkish Kunafa is still here waiting for you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-heading font-semibold hover:bg-primary/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>

            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Search className="w-5 h-5" />
              View Our Menu
            </Link>
          </div>

          <div className="mt-12 p-6 bg-secondary/30 rounded-2xl">
            <p className="text-muted-foreground mb-4">
              Looking for something specific? Contact us directly:
            </p>
            <a
              href="https://wa.me/919310579571"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <Phone className="w-4 h-4" />
              +91-93105-79571
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
