import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | 1Mysa Café"
        description="Read the Privacy Policy of 1Mysa Café. Learn how we handle your data, Google Analytics, and Google Signals for a better user experience."
      />
      <main className="min-h-screen bg-background pt-28 pb-12">
        <Navbar />
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 gold-text text-center">
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 leading-relaxed">
              <p className="text-lg">
                Last Updated: September 25, 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  Welcome to 1Mysa Café. We value your privacy and are committed to protecting your personal data.
                  This policy explains how we collect, use, and protect your information when you visit our website
                  and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Data Collection</h2>
                <p>
                  We collect information to provide a better experience for our guests. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Usage Data:</strong> Information about how you use our website (pages visited, time spent).</li>
                  <li><strong>Contact Information:</strong> If you contact us via WhatsApp or email, we collect the details you provide.</li>
                  <li><strong>Cookie Data:</strong> Small files stored on your device to remember your preferences.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Google Analytics, Signals & User ID</h2>
                <p>
                  To improve our business and understand our guests better, we use <strong className="text-foreground">Google Analytics</strong>.
                  Our implementation includes advanced data collection features:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-3">
                  <li>
                    <strong className="text-foreground">Google Signals:</strong> We have enabled Google Signals, which allows Google to associate your visitation information
                    with your signed-in Google Account if you have consented to Ad Personalization. This provides us with demographic insights
                    (age, gender, interests) to better serve our guests.
                  </li>
                  <li>
                    <strong className="text-foreground">User ID Collection:</strong> We may use unique identifiers to connect your behavior across different
                    sessions and devices, providing a more holistic and accurate story of your interaction with 1Mysa Café.
                  </li>
                  <li>
                    <strong className="text-foreground">User-Provided Data:</strong> In certain instances, we may process consented, hashed customer data
                    to improve conversion measurement and audience sharing.
                  </li>
                </ul>
                <p className="mt-4">
                  For more information on how Google collects and processes data, please visit: <br />
                  <a
                    href="https://www.google.com/policies/privacy/partners/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    How Google uses information from sites or apps that use our services
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Your Data</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To optimize our menu and services based on popular demand.</li>
                  <li>To improve website performance and user experience.</li>
                  <li>To communicate with you regarding your orders or inquiries.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Sharing</h2>
                <p>
                  We do not sell your personal data. We only share data with trusted service providers (like Google Analytics
                  and Netlify) who help us operate our website and analyze traffic.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <p>
                  You can opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on
                  or adjusting your Google Account settings for Ad Personalization OR Pressing/Clicking "X" (Cross) On The Cookie Dialog Banner Upon Visit.
                </p>
              </section>

              <section className="pt-8 border-t border-border">
                <p className="text-center italic">
                  By using our website, you agree to the terms outlined in this Privacy Policy.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
};

export default PrivacyPolicy;
