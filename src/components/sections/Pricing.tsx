import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, UserCheck, Clock, Music, Star, Percent, FileText, GraduationCap } from 'lucide-react';

const Pricing = () => {
  const pricingData = [
    {
      category: "Cours individuels d'instruments",
      subtitle: "Piano, Violon, Chant, Guitare, Saxophone",
      sessions: "31 séances / an",
      courses: [
        { duration: "30 min", price: "400 €", popular: false },
        { duration: "45 min", price: "600 €", popular: true },
        { duration: "1 h", price: "750 €", popular: false }
      ]
    },
    {
      category: "Formation musicale",
      subtitle: "Solfège et théorie",
      sessions: "31 séances / an",
      courses: [
        { duration: "45 min collectif", price: "50 €", popular: true }
      ]
    },
    {
      category: "Éveil musical",
      subtitle: "Enfants de 3 à 6 ans",
      sessions: "31 séances / an",
      courses: [
        { duration: "45 min", price: "150 €", popular: false }
      ]
    },
    {
      category: "Ensemble vocal",
      subtitle: "Adolescents et adultes",
      sessions: "31 séances / an",
      courses: [
        { duration: "1 h 30", price: "120 €", popular: false }
      ]
    },
    {
      category: "Atelier musical",
      subtitle: "Projets et musique d'ensemble",
      sessions: "18 séances / an",
      courses: [
        { duration: "1 h", price: "140 €", popular: false }
      ]
    }
  ];

  const reductions = [
    "10 % sur le second inscrit (cours individuels) et les suivants",
    "10 % sur le second instrument ou chant individuel"
  ];

  return (
    <section id="tarifs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Tarifs des cours de musique
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des tarifs transparents et accessibles pour un enseignement de qualité à Saint-Gilles. 
            Cours d'essai gratuit et sans engagement.
          </p>
        </div>

        {/* Membership Fee */}
        <div className="text-center mb-12">
          <Card className="max-w-md mx-auto bg-gradient-musical border-0">
            <CardContent className="p-6">
              <UserCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-2xl font-semibold text-secondary-foreground mb-2">
                Adhésion annuelle
              </h3>
              <div className="text-4xl font-bold text-primary mb-2">30 €</div>
              <p className="text-secondary-foreground">adhésion annuelle</p>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pricingData.map((category, index) => (
            <Card key={index} className="hover:shadow-musical transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-lg text-primary text-center">
                  {category.category}
                </CardTitle>
                <p className="text-sm text-muted-foreground text-center">{category.subtitle}</p>
                <div className="flex items-center justify-center text-sm text-muted-foreground mt-2">
                  <Clock className="w-4 h-4 mr-1" />
                  {category.sessions}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.courses.map((course, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg border ${course.popular ? 'border-secondary bg-secondary/5' : 'border-border'}`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-medium text-foreground">{course.duration}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{course.price}</div>
                          <div className="text-xs text-muted-foreground">/ an</div>
                          {course.popular && (
                            <Badge variant="secondary" className="text-xs mt-1">
                              <Star className="w-3 h-3 mr-1" />
                              Populaire
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reductions */}
        <div className="mb-16">
          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-accent text-center">
                <Percent className="inline w-8 h-8 mr-2" />
                Réductions famille
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {reductions.map((reduction, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Percent className="w-4 h-4 text-accent" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{reduction}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Info */}
        <div className="mb-16">
          <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="font-heading text-xl font-semibold text-primary mb-4 text-center">
                Modalités de paiement
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Options disponibles :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Paiement en une fois (septembre)</li>
                    <li>• Paiement en 3 fois (sept./janv./mars)</li>
                    <li>• Prélèvement mensuel (10 mois)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Moyens de paiement :</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Chèque bancaire</li>
                    <li>• Espèces</li>
                    <li>• Virement bancaire</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-musical transition-all duration-300">
            <CardContent className="p-8">
              <Download className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                Plaquette complète
              </h3>
              <p className="text-muted-foreground mb-6">
                Téléchargez notre plaquette avec tous les détails sur les cours, tarifs et modalités d'inscription.
              </p>
              <Button variant="outline" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                Télécharger la plaquette PDF
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-musical transition-all duration-300 border-secondary/30">
            <CardContent className="p-8">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="font-heading text-xl font-semibold text-primary mb-4">
                Inscrivez-vous
              </h3>
              <p className="text-muted-foreground mb-6">
                Réservez votre cours d'essai gratuit ou inscrivez-vous directement pour la rentrée.
              </p>
              <Button className="w-full bg-gradient-musical hover:opacity-90" asChild>
                <a href="#contact">
                  <Music className="w-4 h-4 mr-2" />
                  Demander un cours d'essai
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
