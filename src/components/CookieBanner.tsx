import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('1mysa_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('1mysa_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-6 right-6 z-50 md:left-12 md:right-12"
      >
        <div className="bg-card border border-border p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md bg-card/90">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-primary/10 rounded-full text-primary">
              <Cookie className="w-6 h-6" />
            </div>
            <div className="text-sm text-muted-foreground max-w-md text-center md:text-left">
              <p>
                We use cookies and <span className="text-foreground font-medium">Google Analytics</span> to enhance your experience.
                By continuing to browse, you agree to our{' '}
                <Link to="/privacy" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              Accept & Close
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieBanner;
