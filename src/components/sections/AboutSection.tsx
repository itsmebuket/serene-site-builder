import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Users, CheckCircle, Globe } from 'lucide-react';
import portraitImage from '@/assets/aysenur-portrait.jpeg';

const AboutSection = () => {
  const { lang } = useLanguage();

  const stats = [
    { icon: Award, value: '5+', label: lang.about.experience },
    { icon: Users, value: '100+', label: lang.about.clients },
    { icon: CheckCircle, value: '200+', label: lang.about.projects },
    { icon: Globe, value: '1', label: lang.about.certification },
  ];

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-sage/5 blur-3xl" />

      <div className="feng-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-float">
              <img
                src={portraitImage}
                alt="Ayşenur Gündoğdu - İç Mimar & Feng Shui Uzmanı"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-float max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="font-serif text-2xl text-accent">氣</span>
                </div>
                <div>
                  <p className="font-serif text-lg text-foreground">Chi Enerjisi</p>
                  <p className="text-sm text-muted-foreground">Hayat enerjisinin akışı</p>
                </div>
              </div>
            </div>

            {/* Decorative Shape */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-sage/30 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              {lang.about.subtitle}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              {lang.about.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {lang.about.description}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Aslında feng shui'yi girdiğimiz yaşam alanlarında hepimiz farkediyoruz, bir mekana girdiğimizde bazen çok huzur buluyoruz dinlenmiş hissediyoruz bazen de herşey ne kadar iyi görünürse görünsün orada durmak dahi istemiyoruz. Mekanların etkisi hayatımızda bu kadar önemliyken bize verilen bu şansı değerlendirmek aslında bizlerin elinde.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-background p-6 rounded-2xl shadow-zen hover:shadow-float transition-all duration-500 zen-hover"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-serif text-3xl text-foreground mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
