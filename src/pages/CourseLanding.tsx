import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/sections/Footer';
import heroImage from '@/assets/hero-music-school.jpg';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  GraduationCap,
  Heart,
  MapPin,
  Quote,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';

type RelatedCourse = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export type CourseLandingProps = {
  title: string;
  eyebrow: string;
  highlight: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  icon: LucideIcon;
  age: string;
  formats: string[];
  benefits: string[];
  pedagogy: string[];
  levels: Array<{ title: string; text: string }>;
  faq: Array<{ question: string; answer: string }>;
  related: RelatedCourse[];
  testimonial: string;
  testimonialAuthor: string;
};

const siteUrl = 'https://www.ecoledemusique-saintgilles.fr';

const setMetaTag = (name: string, content: string) => {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const CourseLanding = ({
  title,
  eyebrow,
  highlight,
  intro,
  metaTitle,
  metaDescription,
  canonicalPath,
  icon: Icon,
  age,
  formats,
  benefits,
  pedagogy,
  levels,
  faq,
  related,
  testimonial,
  testimonialAuthor,
}: CourseLandingProps) => {
  useEffect(() => {
    document.title = metaTitle;
    setMetaTag('description', metaDescription);

    const canonicalUrl = `${siteUrl}${canonicalPath}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalUrl;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: title,
      description: metaDescription,
      provider: {
        '@type': 'MusicSchool',
        name: 'École de Musique Gilbert Bécaud',
        url: siteUrl,
        telephone: '+33625700881',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1 Place Frédéric Mistral',
          postalCode: '30800',
          addressLocality: 'Saint-Gilles',
          addressRegion: 'Gard',
          addressCountry: 'FR',
        },
        areaServed: ['Saint-Gilles', 'Vauvert', 'Beauvoisin', 'Bellegarde', 'Générac', 'Garons', 'Nîmes Sud'],
      },
    };

    const scriptId = `schema-${canonicalPath.replace(/[^a-z0-9]/gi, '-')}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [canonicalPath, metaDescription, metaTitle, title]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="relative min-h-[82vh] overflow-hidden pt-24 flex items-center">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="École de musique à Saint-Gilles dans le Gard" className="h-full w-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/35" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-primary shadow-musical mb-6">
                <Icon className="h-5 w-5" />
                <span className="font-heading text-sm md:text-base font-bold tracking-wide">{eyebrow}</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                {title}
                <span className="block bg-gradient-musical bg-clip-text text-transparent mt-2">{highlight}</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl leading-relaxed mb-8">{intro}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-8 py-4 text-lg shadow-musical" asChild>
                  <a href="/#contact"><GraduationCap className="w-5 h-5 mr-2" />Demander un cours d'essai</a>
                </Button>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg shadow-musical border-2 border-primary-foreground/20" asChild>
                  <a href="tel:0625700881">Appeler l'école</a>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-5 max-w-3xl">
                <div className="flex items-center gap-3 text-primary-foreground">
                  <div className="p-3 bg-secondary/20 backdrop-blur-sm rounded-full"><Clock className="w-5 h-5 text-secondary" /></div>
                  <div><div className="font-bold">{age}</div><div className="text-sm opacity-80">Âge conseillé</div></div>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground">
                  <div className="p-3 bg-secondary/20 backdrop-blur-sm rounded-full"><Users className="w-5 h-5 text-secondary" /></div>
                  <div><div className="font-bold">Tous niveaux</div><div className="text-sm opacity-80">Débutant à confirmé</div></div>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground">
                  <div className="p-3 bg-secondary/20 backdrop-blur-sm rounded-full"><MapPin className="w-5 h-5 text-secondary" /></div>
                  <div><div className="font-bold">Saint-Gilles</div><div className="text-sm opacity-80">Gard, 30800</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div>
              <Badge className="mb-5 bg-secondary text-primary hover:bg-secondary">Notre pédagogie</Badge>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">Un apprentissage musical bienveillant et structuré</h2>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                {pedagogy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>

            <Card className="shadow-hero border-primary/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6"><Award className="w-8 h-8" /></div>
                <h3 className="font-heading text-2xl font-semibold text-primary mb-5">Pourquoi choisir l'École Gilbert Bécaud ?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-5 bg-primary text-primary-foreground hover:bg-primary">Cours adaptés</Badge>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-5">Pour enfants, ados et adultes</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Chaque parcours est personnalisé selon l'âge, le niveau, les envies musicales et le rythme de progression de l'élève.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {levels.map((level) => (
                <Card key={level.title} className="hover:shadow-musical transition-all duration-300 musical-hover">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-secondary/20 text-secondary-dark flex items-center justify-center mb-5"><Sparkles className="w-7 h-7" /></div>
                    <h3 className="font-heading text-2xl font-semibold text-primary mb-4">{level.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{level.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <Card className="bg-gradient-to-br from-primary via-primary-light to-primary text-primary-foreground overflow-hidden border-0 shadow-hero">
              <CardContent className="p-8 md:p-10 relative">
                <div className="absolute top-6 right-8 w-24 h-24 border border-primary-foreground/20 rounded-full" />
                <Quote className="w-10 h-10 text-secondary mb-6" />
                <p className="text-xl leading-relaxed mb-6">{testimonial}</p>
                <p className="font-heading font-semibold text-secondary">{testimonialAuthor}</p>
              </CardContent>
            </Card>

            <div>
              <Badge className="mb-5 bg-secondary text-primary hover:bg-secondary">Infos pratiques</Badge>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6">Une école ancrée à Saint-Gilles, ouverte aux communes voisines</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Située à Saint-Gilles dans le Gard, l'École de Musique Gilbert Bécaud accueille des élèves venant également de Vauvert, Beauvoisin, Bellegarde, Générac, Garons et des environs de Nîmes Sud.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {formats.map((format) => <Badge key={format} variant="secondary">{format}</Badge>)}
              </div>
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground" asChild>
                <a href="/#contact">Contacter l'école<ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-5 bg-secondary text-primary hover:bg-secondary">FAQ</Badge>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary">Questions fréquentes</h2>
            </div>
            <div className="max-w-4xl mx-auto grid gap-5">
              {faq.map((item) => (
                <Card key={item.question}>
                  <CardContent className="p-7">
                    <h3 className="font-heading text-xl font-semibold text-primary mb-3">{item.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-5 bg-primary text-primary-foreground hover:bg-primary">Maillage interne</Badge>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary">Découvrir aussi nos autres cours</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((course) => (
                <Link key={course.href} to={course.href} className="group">
                  <Card className="h-full hover:shadow-musical transition-all duration-300 musical-hover">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary group-hover:bg-secondary group-hover:text-primary transition-colors flex items-center justify-center mb-5">
                        <course.icon className="w-8 h-8" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-primary mb-3">{course.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-5">{course.description}</p>
                      <span className="inline-flex items-center font-semibold text-primary group-hover:text-secondary-dark">Voir la page<ArrowRight className="w-4 h-4 ml-2" /></span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-musical">
          <div className="container mx-auto px-4 text-center">
            <Heart className="w-12 h-12 mx-auto text-primary mb-5" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-5">Envie de commencer la musique ?</h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto mb-8">Le cours d'essai permet de rencontrer l'équipe, de poser vos questions et de trouver le parcours musical le plus adapté.</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark" asChild>
              <a href="/#contact">Demander un cours d'essai gratuit</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseLanding;
