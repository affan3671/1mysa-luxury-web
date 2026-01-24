import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect } from "react";  // your tailwind import

import Index from "./pages/Index";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import PartyPage from "./pages/PartyPage";
import OrderPage from "./pages/OrderPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import FAQs from "./pages/FAQs";
import sitemap from "./sitemap.xml?url";

const GA_ID = "G-WDYZL10G97";
const queryClient = new QueryClient();

/* 🔹 GA Tracker must be INSIDE Router */
function GATracker() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("config", GA_ID, {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <GATracker />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/faq" element={<FAQs/>} />
              <Route path="/party" element={<PartyPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/sitemap.xml" element={sitemap} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
