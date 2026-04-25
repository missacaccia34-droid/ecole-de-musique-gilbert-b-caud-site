import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Star, MapPin, GraduationCap, Smile, Target, Music } from 'lucide-react';
import studentsImage from '@/assets/students-learning.jpg';

const About = () => {
  const audiences = [
    {
      icon: Smile,
      title: "Enfants dès 3 ans",
      description: "Éveil musical ludique, découverte des sons et des rythmes. L'enfant développe son oreille et sa créativité dans un cadre adapté."
    },
    {
      icon: GraduationCap,
      title: "Adolescents",
      description: "Cours individuels ou collectifs pour progresser à son rythme. L'adolescent explore les styles qui lui plaisent et gagne en confiance."
    },
    {
      icon: Users,
      title: "Adultes débutants ou confirmés",
      description: "Il n'est jamais trop tard pour apprendre. Nos cours s'adaptent à vos objectifs, que vous débutiez ou souhaitiez vous perfectionner."
    }
  ];

  const reasons = [
    {
      icon: Heart,
      title: "Pédagogie bienveillante",
      description: "Le plaisir de jouer avant la performance. Chaque élève progresse à son rythme, sans pression."
    },
    {
      icon: Target,
      title: "Progression adaptée",
      description: "Un programme personnalisé selon votre niveau, vos envies et vos objectifs musicaux."
    },
    {
      icon: Star,
      title: "Professeurs diplômés",
      description: "Des musiciens professionnels et pédagogues passionnés, formés pour enseigner à tous les publics."
    },
    {
      icon: MapPin,
      title: "Au cœur de Saint-Gilles",
      description: "Facilement accessible depuis Vauvert, Beauvoisin, Générac, Bellegarde et toute la région nîmoise."
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Une école de musique à taille humaine
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis plus de 25 ans, l'École de Musique de Saint-Gilles accompagne enfants, 
            adolescents et adultes dans la découverte et la pratique de la musique.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-heading text-3xl font-semibold text-primary mb-6">
              Apprendre la musique dans un cadre chaleureux
            </h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-loose">
              <p>
                Située au cœur de Saint-Gilles, place Frédéric Mistral, notre école de musique 
                propose des <strong>cours de piano, guitare, violon, chant, batterie, saxophone, flûte traversière, éveil musical et formation musicale</strong> 
                {" "}pour tous les âges et tous les niveaux.
              </p>
              <p>
                Notre priorité : que chaque élève prenne plaisir à jouer et progresse à son rythme, 
                dans une ambiance conviviale et bienveillante. Ici, pas de compétition — 
                juste le bonheur de la musique partagée.
              </p>
              <p>
                Que vous habitiez Saint-Gilles, Vauvert, Beauvoisin, Générac, Bellegarde 
                ou les environs de Nîmes, vous êtes les bienvenus dans notre école !
              </p>
            </div>
            <Button className="mt-6 bg-gradient-musical hover:opacity-90" asChild>
              <a href="#contact">
                <Music className="w-4 h-4 mr-2" />
                Réserver un cours d'essai gratuit
              </a>
            </Button>
          </div>
          <div className="relative">
            <img
              src={studentsImage}
              alt="Élèves apprenant la musique à l'école de Saint-Gilles"
              className="rounded-2xl shadow-hero w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Pour qui ? */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl font-semibold text-primary text-center mb-4">
            Des cours de musique pour tous les âges
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enfant, adolescent ou adulte, débutant ou confirmé : trouvez le cours qui vous correspond.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-musical transition-all duration-300 musical-hover">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-musical rounded-full flex items-center justify-center mb-4">
                    <audience.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-xl text-primary mb-3">
                    {audience.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pourquoi nous choisir */}
        <div className="mb-20">
          <h3 className="font-heading text-3xl font-semibold text-primary text-center mb-4">
            Pourquoi choisir notre école de musique ?
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ce qui fait la différence à l'École de Musique de Saint-Gilles.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-musical transition-all duration-300 musical-hover">
                <CardContent className="pt-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                    <reason.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-3">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
