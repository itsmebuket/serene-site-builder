import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-fengshui.jpg';

const HeroSection = () => {
  const { lang } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Feng Shui Zen Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-sage/10 animate-chi-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gold/10 animate-chi-float" style={{ animationDelay: '2s' }} />

      {/* Yin Yang Symbol */}
      <div className="absolute top-1/4 left-1/4 opacity-10">
        <svg width="200" height="200" viewBox="0 0 100 100" className="animate-spin-slow">
          <circle cx="50" cy="50" r="48" fill="currentColor" className="text-forest" />
          <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" className="text-sage" />
          <circle cx="50" cy="26" r="8" fill="currentColor" className="text-forest" />
          <circle cx="50" cy="74" r="8" fill="currentColor" className="text-sage" />
        </svg>
      </div>

      {/* Content */}
      <div className="feng-container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-8 animate-chi-fade-in border border-primary/30">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium">Chi Enerjisi ile Yaşamınızı Dönüştürün</span>
          </div>

          {/* Title */}
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground leading-tight mb-6 animate-chi-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {lang.hero.title}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-chi-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {lang.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-start gap-4 animate-chi-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base shadow-zen group"
              onClick={() => scrollToSection('#contact')}
            >
              {lang.hero.cta}
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/10 rounded-full px-8 py-6 text-base backdrop-blur-sm"
              onClick={() => scrollToSection('#about')}
            >
              {lang.hero.secondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ animationDelay: '1s' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
