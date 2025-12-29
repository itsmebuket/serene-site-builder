import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Feng Shui Master | Yaşam Alanınızda Uyum ve Denge</title>
        <meta 
          name="description" 
          content="Profesyonel Feng Shui danışmanlığı ile yaşam ve çalışma alanlarınızda enerji akışını optimize edin. 20 yıllık deneyim, 500+ mutlu müşteri." 
        />
        <meta name="keywords" content="feng shui, enerji, chi, danışmanlık, ev dekorasyonu, ofis feng shui, istanbul" />
        <meta property="og:title" content="Feng Shui Master | Yaşam Alanınızda Uyum ve Denge" />
        <meta property="og:description" content="Profesyonel Feng Shui danışmanlığı ile yaşam ve çalışma alanlarınızda enerji akışını optimize edin." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://fengshui.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <BlogSection />
          <ContactSection />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
