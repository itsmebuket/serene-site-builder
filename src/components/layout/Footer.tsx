import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { lang } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="bg-forest text-zen-white">
      {/* Main Footer */}
      <div className="feng-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
                <span className="text-sage-light font-serif text-2xl">氣</span>
              </div>
              <span className="font-serif text-2xl">Feng Shui</span>
            </div>
            <p className="text-zen-white/70 leading-relaxed mb-6">
              {lang.about.description.substring(0, 120)}...
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center hover:bg-sage/30 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-sage-light">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {[
                { label: lang.nav.home, href: '#home' },
                { label: lang.nav.about, href: '#about' },
                { label: lang.nav.services, href: '#services' },
                { label: lang.nav.blog, href: '#blog' },
                { label: lang.nav.contact, href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zen-white/70 hover:text-zen-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-sage-light">{lang.nav.services}</h4>
            <ul className="space-y-3">
              {lang.services.items.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-zen-white/70 hover:text-zen-white transition-colors duration-300"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-sage-light">{lang.nav.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sage-light mt-1 shrink-0" />
                <span className="text-zen-white/70">
                  Bağdat Caddesi No: 123<br />
                  Kadıköy, İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-sage-light shrink-0" />
                <a href="tel:+902161234567" className="text-zen-white/70 hover:text-zen-white transition-colors">
                  +90 216 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-sage-light shrink-0" />
                <a href="mailto:info@fengshui.com" className="text-zen-white/70 hover:text-zen-white transition-colors">
                  info@fengshui.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sage/10">
        <div className="feng-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zen-white/60 text-sm">
            {lang.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-zen-white/60 hover:text-zen-white transition-colors">
              {lang.footer.privacy}
            </a>
            <a href="#" className="text-zen-white/60 hover:text-zen-white transition-colors">
              {lang.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
