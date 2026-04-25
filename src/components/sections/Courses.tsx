import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Music4, Mic, Music, Users, Baby, Clock, GraduationCap, Sparkles, Heart, Guitar } from 'lucide-react';

const Courses = () => {
  const disciplines = [
    {
      icon: Music, // Piano icon
      name: "Piano",
      slug: "piano",
      description: "Classique, jazz ou variété : explorez tous les styles au piano. Des premières notes aux morceaux complexes, progressez avec plaisir.",
      age: "À partir de 6 ans",
      levels: ["Débutant", "Intermédiaire", "Confirmé"],
      objectives: ["Lecture de partition", "Technique et posture", "Interprétation musicale", "Répertoire varié"],
      benefits: "Développe la coordination, la concentration et l'expression artistique.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Music4,
      name: "Violon",
      slug: "violon",
      description: "Découvrez la richesse du violon dans un cadre bienveillant. Un instrument exigeant mais tellement gratifiant à maîtriser.",
      age: "À partir de 6 ans",
      levels: ["Débutant", "Intermédiaire", "Confirmé"],
      objectives: ["Justesse et sonorité", "Technique d'archet", "Répertoire classique et actuel", "Musique d'ensemble"],
      benefits: "Développe l'oreille musicale, la patience et la sensibilité artistique.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Mic,
      name: "Chant",
      slug: "chant",
      description: "Apprenez à poser votre voix, à respirer et à interpréter avec émotion. Le chant est accessible à tous, sans prérequis.",
      age: "À partir de 10 ans",
      levels: ["Débutant", "Intermédiaire", "Confirmé"],
      objectives: ["Technique vocale et respiration", "Justesse et placement", "Interprétation et scène", "Répertoire personnalisé"],
      benefits: "Renforce la confiance en soi, la gestion du souffle et l'expression personnelle.",
      color: "bg-secondary/10 text-secondary-dark"
    },
    {
      icon: Music, // Drum
      name: "Batterie",
      slug: "batterie",
      description: "Rythme, énergie et coordination : la batterie est l'instrument idéal pour canaliser son énergie et s'amuser en musique.",
      age: "À partir de 8 ans",
      levels: ["Débutant", "Intermédiaire", "Confirmé"],
      objectives: ["Indépendance des membres", "Lecture rythmique", "Styles variés (rock, funk, jazz)", "Jeu en groupe"],
      benefits: "Développe le sens du rythme, la coordination et la capacité d'écoute.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Baby,
      name: "Éveil musical",
      slug: "eveil-musical",
      description: "Une approche ludique et sensorielle de la musique pour les tout-petits. Chansons, jeux de rythme, découverte des instruments.",
      age: "De 3 à 6 ans",
      levels: ["Découverte"],
      objectives: ["Découverte des sons et instruments", "Jeux rythmiques et corporels", "Chansons et comptines", "Écoute et créativité"],
      benefits: "Stimule l'éveil sensoriel, la socialisation et la motricité fine.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: GraduationCap,
      name: "Formation musicale",
      slug: "formation-musicale",
      description: "Solfège, théorie et culture musicale : les fondations indispensables pour progresser sur votre instrument.",
      age: "À partir de 7 ans",
      levels: ["Débutant", "Intermédiaire", "Confirmé"],
      objectives: ["Lecture de notes et rythmes", "Ear training", "Culture et histoire musicale", "Harmonie et analyse"],
      benefits: "Donne les clés pour comprendre et lire la musique, quel que soit l'instrument pratiqué.",
      color: "bg-secondary/10 text-secondary-dark"
    },
    {
      icon: Users,
      name: "Ensemble vocal",
      slug: "ensemble-vocal",
      description: "Venez chanter à plusieurs, découvrir les harmonies et apprendre à faire entendre votre voix au sein d'un groupe. Un moment musical convivial.",
      age: "À partir de 10 ans",
      levels: ["Tous niveaux"],
      objectives: ["Chant polyphonique", "Écoute et harmonies", "Confiance vocale", "Plaisir de chanter ensemble"],
      benefits: "Développe l'écoute, le sens du collectif et le plaisir de partager la musique vocalement.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Guitar,
      name: "Guitare",
      slug: "guitare",
      description: "Acoustique ou électrique, apprenez la guitare dans un cadre convivial. Accords, fingerpicking, rythmique : explorez les styles qui vous plaisent.",
      age: "À partir de 8 ans",
      levels: ["Débutant", "Intermédiaire", "Confirmé"],
      objectives: ["Accords et rythmique", "Fingerpicking et arpèges", "Lecture de tablatures", "Répertoire personnalisé"],
      benefits: "Développe la dextérité, la créativité et le sens musical à travers un instrument polyvalent.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Music4,
      name: "Saxophone",
      slug: "saxophone",
      description: "Explorez le son chaleureux et expressif du saxophone. Jazz, classique ou variété : cet instrument s'adapte à tous les styles musicaux.",
      age: "À partir de 8 ans",
      levels: ["Débutant", "Intermédiaire", "Confirmé"],
      objectives: ["Embouchure et sonorité", "Lecture de partition", "Improvisation", "Répertoire varié"],
      benefits: "Développe le souffle, l'oreille musicale et l'expression personnelle.",
      color: "bg-secondary/10 text-secondary-dark"
    },
    {
      icon: Music,
      name: "Flûte traversière",
      slug: "flute-traversiere",
      description: "Élégante et mélodieuse, la flûte traversière offre une palette sonore riche. Un instrument qui allie technique et sensibilité.",
      age: "À partir de 8 ans",
      levels: ["Débutant", "Intermédiaire", "Confirmé"],
      objectives: ["Technique de souffle", "Sonorité et justesse", "Répertoire classique et moderne", "Musique d'ensemble"],
      benefits: "Développe la maîtrise du souffle, la concentration et la finesse musicale.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Music4,
      name: "Atelier musical",
      slug: "atelier-musical",
      description: "Animé par Sébastien — Venez jouer en groupe pour interpréter vos classiques préférés dans une ambiance dynamique et conviviale.",
      age: "À partir de 10 ans",
      levels: ["Intermédiaire", "Confirmé"],
      objectives: ["Jeu collectif", "Écoute musicale", "Interprétation de reprises", "Cohésion de groupe"],
      benefits: "Développe le jeu en groupe, l'écoute mutuelle et le plaisir de partager la scène.",
      color: "bg-primary/10 text-primary"
    }
  ];

  return (
    <section id="cours" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative text-center mb-16 py-12 px-6 rounded-3xl bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-8 w-24 h-24 border-2 border-primary-foreground rounded-full" />
            <div className="absolute bottom-6 right-12 w-16 h-16 border-2 border-primary-foreground rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-secondary rounded-full" />
            <div className="absolute top-8 right-1/3 w-6 h-6 bg-secondary rounded-full" />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full mb-6">
              <Music className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground/90">7 instruments • Tous niveaux</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Nos cours de musique
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Sept instruments enseignés par des professeurs passionnés — 
              trouvez le cours qui vous correspond et progressez à votre rythme.
            </p>
          </div>
        </div>

        {/* Disciplines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {disciplines.map((discipline, index) => (
            <Card key={index} className="hover:shadow-musical transition-all duration-300 musical-hover flex flex-col">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-full ${discipline.color} flex items-center justify-center mb-4`}>
                  <discipline.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-heading text-2xl text-primary">
                  {discipline.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {discipline.description}
                </p>

                {/* Age & Levels */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{discipline.age}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {discipline.levels.map((level, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Objectives */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                    <Sparkles className="w-4 h-4 mr-1 text-secondary" />
                    Objectifs pédagogiques
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {discipline.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-start">
                    <Heart className="w-4 h-4 mr-2 text-accent flex-shrink-0 mt-0.5" />
                    {discipline.benefits}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#contact">
                      Réserver un essai — {discipline.name}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div>
          <Card className="bg-gradient-musical border-0 text-secondary-foreground">
            <CardContent className="p-8 text-center">
              <Music className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-2xl font-semibold mb-4">
                Cours d'essai gratuit et sans engagement
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Vous hésitez encore ? Venez découvrir notre pédagogie et rencontrer nos professeurs 
                lors d'un cours d'essai gratuit. Aucun engagement, juste le plaisir de tester.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark" asChild>
                <a href="#contact">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Demander mon cours d'essai
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;
