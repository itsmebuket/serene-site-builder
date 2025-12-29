import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const { lang } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mesajınız Gönderildi!",
      description: "En kısa sürede sizinle iletişime geçeceğiz.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: lang.contact.address,
      content: 'Bağdat Caddesi No: 123\nKadıköy, İstanbul',
    },
    {
      icon: Phone,
      title: lang.contact.phone,
      content: '+90 216 123 45 67',
      href: 'tel:+902161234567',
    },
    {
      icon: Mail,
      title: lang.contact.email,
      content: 'info@fengshui.com',
      href: 'mailto:info@fengshui.com',
    },
    {
      icon: Clock,
      title: lang.contact.workHours,
      content: 'Pazartesi - Cumartesi\n09:00 - 18:00',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-zen" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-sage/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />

      <div className="feng-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            {lang.contact.subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {lang.contact.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-3xl shadow-float">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {lang.contact.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-background border-border/50 rounded-xl h-12 focus:ring-primary focus:border-primary"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {lang.contact.phone}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-background border-border/50 rounded-xl h-12 focus:ring-primary focus:border-primary"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {lang.contact.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-background border-border/50 rounded-xl h-12 focus:ring-primary focus:border-primary"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {lang.contact.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="bg-background border-border/50 rounded-xl resize-none focus:ring-primary focus:border-primary"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl h-12 text-base font-medium shadow-zen"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Gönderiliyor...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    {lang.contact.send}
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-zen hover:shadow-float transition-all duration-500 zen-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-serif text-lg text-foreground mb-2">{info.title}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-3xl overflow-hidden shadow-zen h-64 relative">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80"
                alt="Harita"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent flex items-end justify-center pb-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full text-foreground font-medium text-sm hover:bg-background transition-colors"
                >
                  Google Maps'te Aç
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
