import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { useLanguage } from '@/contexts/LanguageContext';

// FAQ Item Component with Accordion
function FAQItem({ question, answer, index, language }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-2xl border border-border overflow-hidden hover-lift"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors"
      >
        <h3 className="text-lg md:text-xl font-heading font-bold text-foreground pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const { t, language } = useLanguage();

  const faqs = {
    en: [
      {
        question: "What are your operating hours?",
        answer: "We're open every day from 5:30 PM to 10:50 PM. We serve Kunafa, Baklava, Turkish Coffee and much more, with our full menu available throughout the day."
      },
      {
        question: "How would you describe the personality of your café in three words?",
        answer: "Exceptionally uncompromised and acknowledgement of each with transparency, We want to be exceptional in terms of quality at best , no compromise policy , service at top , personal touch to each who visit us."
      },
      {
        question: "What is the primary factor that differentiates your café from other local cafés?",
        answer: "We touch all of our guests with our service, attention to details and always open to their postive/negative feedbacks or suggestions."
      },
      {
        question: "Do you provide catering services?",
        answer: "Yes! We offer catering for events, parties, and corporate functions. Our catering menu features our most popular dishes and can be customized to your preferences. Contact us for more information and to place an order."
      },
      {
        question: "Is parking available?",
        answer: "We have common street parking space available for our customers nearby."
      },
      {
        question: "Do you offer delivery or takeaway?",
        answer: "Yes, we offer both! You can order directly or find us on popular delivery apps like Zomato and Swiggy. Takeaway orders can be placed by phone or in person.we do deliver in all Delhi NCR , upto Ghaziabad, Greater Noida, Dwarka , Gurugram , West Delhi , Faridabad etc. till Porter service accept."
      },
      { question: "What are the delivery charges for orders in Delhi NCR?",
        answer: "Please note that we do not charge any delivery fees directly, we only charge for the ordered products and the customer may pay the delivery charges through the actual delivery service like Porter, Uber, Rapido or others."
      },
      {
        question: "Are your ingredients locally sourced?",
        answer: "No— we generally source ingredients from their country/place of origin maximum times. We use high-quality products from trusted, authorized suppliers, like coffee powder from Turkey itself and kishta from Middle East."
      },
      {
        question: "Do you accommodate food allergies?",
        answer: "Yes, we take food allergies very seriously. Please inform our staff of any allergies when ordering, and we'll ensure your meal is prepared safely.for example wd use clarifies butter ad lactose free "
      }
    ],
    hi: [
      [
  {
    "question": "आपके संचालन के समय क्या हैं?",
    "answer": "हम हर दिन शाम 5:30 बजे से रात 10:50 बजे तक खुले रहते हैं। हम कुनाफ़ा, बकलावा, तुर्किश कॉफी और बहुत कुछ परोसते हैं। हमारा पूरा मेनू पूरे समय उपलब्ध रहता है।"
  },
  {
    "question": "आप अपने कैफ़े की पहचान को तीन शब्दों में कैसे बताएँगे?",
    "answer": "असाधारण, बिना समझौते के और पारदर्शिता के साथ हर व्यक्ति को महत्व देना। हम गुणवत्ता के मामले में सर्वश्रेष्ठ बनना चाहते हैं, बिना किसी समझौते की नीति के साथ, शीर्ष स्तर की सेवा और हर आगंतुक के साथ व्यक्तिगत जुड़ाव।"
  },
  {
    "question": "ऐसा कौन-सा मुख्य कारण है जो आपके कैफ़े को अन्य स्थानीय कैफ़े से अलग बनाता है?",
    "answer": "हम अपनी सेवा, बारीकियों पर ध्यान और अपने मेहमानों के सकारात्मक/नकारात्मक फीडबैक व सुझावों के लिए हमेशा खुले रहकर हर अतिथि को खास अनुभव देते हैं।"
  },
  {
    "question": "क्या आप कैटरिंग सेवाएँ प्रदान करते हैं?",
    "answer": "हाँ! हम इवेंट्स, पार्टियों और कॉर्पोरेट फ़ंक्शन्स के लिए कैटरिंग सेवाएँ प्रदान करते हैं। हमारे कैटरिंग मेनू में हमारे सबसे लोकप्रिय व्यंजन शामिल हैं और इसे आपकी पसंद के अनुसार कस्टमाइज़ किया जा सकता है। अधिक जानकारी और ऑर्डर देने के लिए हमसे संपर्क करें।"
  },
  {
    "question": "क्या पार्किंग की सुविधा उपलब्ध है?",
    "answer": "हमारे ग्राहकों के लिए पास में कॉमन स्ट्रीट पार्किंग की सुविधा उपलब्ध है।"
  },
  {
    "question": "क्या आप डिलीवरी या टेकअवे की सुविधा देते हैं?",
    "answer": "हाँ, हम दोनों सुविधाएँ देते हैं। आप सीधे ऑर्डर कर सकते हैं या हमें ज़ोमैटो और स्विगी जैसे लोकप्रिय डिलीवरी ऐप्स पर पा सकते हैं। टेकअवे ऑर्डर फोन पर या व्यक्तिगत रूप से दिए जा सकते हैं। हम पूरे दिल्ली एनसीआर में डिलीवरी करते हैं—जैसे ग़ाज़ियाबाद, ग्रेटर नोएडा, द्वारका, गुरुग्राम, वेस्ट दिल्ली, फरीदाबाद आदि—जब तक पोर्टर सेवा स्वीकार करती है।"
  },
  {"question": "दिल्ली एनसीआर में ऑर्डर की डिलीवरी के लिए क्या शुल्क लगते हैं?",
    "answer": "कृपया ध्यान दें कि हम सीधे तौर पर कोई डिलीवरी शुल्क नहीं लेते हैं, हम केवल ऑर्डर किए गए उत्पाद के लिए शुल्क लेते हैं और ग्राहक पोर्टर, उबर, रैपिडो या अन्य जैसी वास्तविक डिलीवरी सेवा के माध्यम से डिलीवरी शुल्क का भुगतान कर सकते हैं।"
  },
  {
    "question": "क्या आपकी सामग्री स्थानीय रूप से प्राप्त की जाती है?",
    "answer": "नहीं—हम अधिकांश सामग्री उनके मूल देश या स्थान से ही प्राप्त करते हैं। हम भरोसेमंद और अधिकृत सप्लायर्स से उच्च गुणवत्ता वाले उत्पादों का उपयोग करते हैं, जैसे कॉफी पाउडर सीधे तुर्की से और किश्ता मिडिल ईस्ट से।"
  },
  {
    "question": "क्या आप फूड एलर्जी को ध्यान में रखते हैं?",
    "answer": "हाँ, हम फूड एलर्जी को बहुत गंभीरता से लेते हैं। ऑर्डर देते समय कृपया हमारी टीम को किसी भी एलर्जी के बारे में सूचित करें, और हम सुनिश्चित करेंगे कि आपका भोजन सुरक्षित रूप से तैयार किया जाए। उदाहरण के लिए, हम क्लैरिफ़ाइड बटर और लैक्टोज़-फ्री विकल्पों का उपयोग करते हैं।"
  },
]

    ]
  };

  const currentFAQs = faqs[language] || faqs.en;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          {/* QUESTION: Replace with your actual FAQ hero image */}
          <img 
            src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo9.png" 
            alt="FAQ" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            <span className="gold-text">
              {language === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {language === 'en' 
              ? 'Everything you need to know about 1Mysa Cafe' 
              : '1Mysa कैफे के बारे में वह सब कुछ जो आपको जानना चाहिए'}
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="gold-text">
                {language === 'en' ? 'Got Questions?' : 'सवाल हैं?'}
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? "Find answers to common questions about our cafe, menu, and services."
                : "हमारे कैफे, मेनू और सेवाओं के बारे में सामान्य प्रश्नों के उत्तर खोजें।"}
            </p>
          </motion.div>

          <div className="space-y-4">
            {currentFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
                language={language}
              />
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 bg-secondary/30 rounded-3xl"
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              {language === 'en' ? "Still have questions?" : "अभी भी सवाल हैं?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'en'
                ? "We're here to help! Reach out to us and we'll get back to you as soon as possible."
                : "हम मदद के लिए यहां हैं! हमसे संपर्क करें और हम जल्द से जल्द आपको जवाब देंगे।"}
            </p>
            <a
               href="https://wa.me/919310579571" // TODO: Replace XXXXXXXXXX with your WhatsApp number (include country code, no + or spaces)
               target="_blank"
               rel="noopener noreferrer"
               className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-heading font-semibold hover:bg-primary/90 transition-colors inline-block"
              >
              {language === 'en' ? 'Contact Us' : 'हमसे संपर्क करें'}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}