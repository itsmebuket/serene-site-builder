import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const { lang } = useLanguage();

  const blogPosts = [
    {
      title: 'Evinizde Pozitif Enerji Akışı İçin 5 İpucu',
      excerpt: 'Feng Shui prensiplerini kullanarak yaşam alanınızda uyum ve denge yaratmanın yolları...',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&auto=format&fit=crop&q=80',
      date: '15 Aralık 2024',
      category: 'Ev Feng Shui',
    },
    {
      title: 'Ofiste Başarı İçin Feng Shui Düzenlemesi',
      excerpt: 'İş yerinizde verimlilik ve başarıyı artırmak için enerji düzenlemeleri hakkında bilgiler...',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80',
      date: '10 Aralık 2024',
      category: 'Ofis',
    },
    {
      title: '2025 Yılı Feng Shui Tahminleri',
      excerpt: 'Yeni yılda enerjinizi yükseltmek ve şansınızı artırmak için yapmanız gerekenler...',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
      date: '5 Aralık 2024',
      category: 'Genel',
    },
  ];

  return (
    <section id="blog" className="section-padding bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sage/5 blur-3xl" />

      <div className="feng-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
            {lang.blog.subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {lang.blog.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-background rounded-3xl overflow-hidden shadow-zen hover:shadow-float transition-all duration-500 zen-hover"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="inline-flex items-center text-primary font-medium text-sm group/link"
                >
                  <span className="gold-underline">{lang.blog.readMore}</span>
                  <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
