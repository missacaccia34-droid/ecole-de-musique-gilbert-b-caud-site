import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

import hugo1 from '@/assets/teachers/hugo-1.png';
import hugo2 from '@/assets/teachers/hugo-2.jpeg';
import anita1 from '@/assets/teachers/anita-1.png';
import anita2 from '@/assets/teachers/anita-2.jpg';
import laurence1 from '@/assets/teachers/laurence-1.png';
import laurence2 from '@/assets/teachers/laurence-2.jpg';
import cecile1 from '@/assets/teachers/cecile-1.png';
import cecile2 from '@/assets/teachers/cecile-2.jpg';
import thibaut1 from '@/assets/teachers/thibaut-1.png';
import thibaut2 from '@/assets/teachers/thibaut-2.jpeg';
import sebastien1 from '@/assets/teachers/sebastien-1.jpg';
import sebastien2 from '@/assets/teachers/sebastien-2.jpg';

interface Teacher {
  name: string;
  discipline: string;
  shortDesc: string;
  fullDesc: string[];
  profileImage: string;
  detailImage: string;
  profileImageClass?: string;
}

const teachers: Teacher[] = [
  {
    name: "Laurence",
    discipline: "Piano & Formation musicale",
    shortDesc: "Directrice pédagogique — Piano classique, jazz et pop rock pour tous niveaux.",
    profileImage: laurence1,
    detailImage: laurence2,
    profileImageClass: "object-cover object-[center_30%] scale-[1.2]",
    fullDesc: [
      "Laurence enseigne le piano et la formation musicale. Elle débute l'apprentissage du piano à l'âge de 8 ans et suit un cursus musical complet jusqu'à l'obtention de son diplôme de fin d'études, avant de poursuivre son perfectionnement au conservatoire d'Avignon en études supérieures.",
      "Forte d'une solide expérience pédagogique, elle transmet sa passion de la musique à des élèves de tous âges et de tous niveaux. Sa pédagogie s'adapte aussi bien au répertoire classique qu'au jazz ou au pop rock, en pratique individuelle comme en ensemble.",
      "Enseignante depuis 8 ans à l'école de musique de Saint-Gilles, elle occupe aujourd'hui le poste de directrice pédagogique, contribuant activement au développement artistique et éducatif de l'établissement."
    ]
  },
  {
    name: "Hugo Lecaux",
    discipline: "Batterie",
    shortDesc: "Batteur passionné — Pop, rock et funk avec énergie et créativité.",
    profileImage: hugo1,
    detailImage: hugo2,
    profileImageClass: "object-cover object-[center_20%] scale-[1.6]",
    fullDesc: [
      "Passionné de rythme depuis l'enfance, Hugo Lecaux découvre la batterie à l'âge de 7 ans, inspiré par son père, lui-même ancien batteur. Ce premier contact marque le début d'une aventure musicale qui dure depuis près de 18 ans.",
      "En 2019, il décide de transformer sa passion en véritable vocation en obtenant son diplôme de professeur de batterie à l'école TAM-TAM de Montluçon. Durant une année de formation intensive, rythmée par sept heures de pratique quotidienne, il perfectionne sa technique et affirme son identité musicale.",
      "Au fil des années, Hugo intègre plusieurs groupes musicaux. Son premier projet, orienté rock/funk, lui donne le goût de la scène. Il rejoint ensuite différentes formations de reprises pop/rock, multipliant les concerts et développant un solide sens du groove et de l'accompagnement.",
      "Ses influences principales se situent entre la pop, le rock et le funk, styles dans lesquels il exprime énergie, précision et créativité. Aujourd'hui, la batterie représente pour lui bien plus qu'un instrument : une passion profonde, un espace d'apprentissage permanent et une véritable source d'épanouissement."
    ]
  },
  {
    name: "Anita",
    discipline: "Chant",
    shortDesc: "Enthousiaste et bienveillante — Technique vocale, interprétation et confiance en soi.",
    profileImage: anita1,
    detailImage: anita2,
    fullDesc: [
      "Issue d'une formation musicale au conservatoire, Anita enseigne le chant avec enthousiasme et bienveillance. Motivée et dynamique, elle transmet sa passion dans une ambiance toujours positive et conviviale.",
      "Toujours dans la bonne humeur, elle accompagne ses élèves dans la découverte de leur voix, en travaillant aussi bien la technique vocale que l'interprétation et la confiance en soi. Son objectif est de permettre à chacun de progresser à son rythme tout en prenant plaisir à chanter et à s'exprimer musicalement."
    ]
  },
  {
    name: "Cécile",
    discipline: "Violon",
    shortDesc: "Sensibilité artistique — Posture, musicalité et plaisir de jouer pour tous.",
    profileImage: cecile1,
    detailImage: cecile2,
    fullDesc: [
      "Issue d'un cursus musical au conservatoire, Cécile développe très tôt une sensibilité artistique et une solide maîtrise technique du violon. Son parcours lui permet d'acquérir une formation complète alliant exigence musicale, écoute et précision.",
      "Attachée à la transmission, elle accompagne ses élèves avec bienveillance en adaptant son enseignement à chaque profil et à chaque niveau. Elle accorde une place importante à la posture, à la musicalité et au plaisir de jouer, afin de construire des bases solides tout en cultivant l'expression personnelle.",
      "Son approche pédagogique vise à rendre l'apprentissage du violon accessible, motivant et épanouissant pour tous."
    ]
  },
  {
    name: "Thibaut",
    discipline: "Saxophone & Flûte traversière",
    shortDesc: "Classique et polyvalent — Musiques de films, variété et pop pour progresser avec plaisir.",
    profileImage: thibaut1,
    detailImage: thibaut2,
    profileImageClass: "object-cover object-[center_10%] scale-[1.8]",
    fullDesc: [
      "Passionné de musique depuis son plus jeune âge, Thibaut commence le saxophone à cinq ans au conservatoire de Privas, en Ardèche. Il y suit pendant treize années un cursus classique complet comprenant instrument, formation musicale, histoire de la musique, musique de chambre et orchestre, jusqu'à la fin du troisième cycle en saxophone et solfège, ainsi qu'un deuxième cycle en flûte traversière.",
      "Ce parcours lui permet de développer une solide technique instrumentale, une grande curiosité musicale et un profond attachement à la transmission.",
      "Il possède également une expérience en direction d'ensemble à vents et d'orchestre d'harmonie, apportant une approche globale et vivante de la pratique musicale.",
      "Bien que formé dans la tradition classique, Thibaut propose un répertoire varié et motivant : musiques de films, variété et pop. Adapter des morceaux connus des élèves fait partie intégrante de sa pédagogie, avec pour objectif principal de progresser tout en prenant plaisir à jouer et à partager la musique."
    ]
  },
  {
    name: "Sébastien Hinderschiett",
    discipline: "Guitare & Basse",
    shortDesc: "Passionné et patient — Cours personnalisés et ateliers d'ensemble, du débutant au confirmé.",
    profileImage: sebastien1,
    detailImage: sebastien2,
    profileImageClass: "object-cover object-[center_25%] scale-[1.4]",
    fullDesc: [
      "Professeur de guitare depuis plus de 7 ans, Sébastien enseigne aujourd'hui à l'École de Musique Gilbert Bécaud à Saint-Gilles ainsi qu'à l'antenne de Marguerittes. Passionné, patient et toujours de bonne humeur, il transmet la musique comme une aventure collective et vivante.",
      "Sébastien propose des cours personnalisés, adaptés au niveau, aux objectifs et à la sensibilité musicale de chaque élève, du débutant au guitariste avancé. Il encadre également des ateliers d'ensemble, où il accompagne les étudiants dans la pratique collective, la cohésion et le jeu en groupe.",
      "Fort d'une solide expérience de guitariste et bassiste au sein de grandes formations, il a parcouru la France en tournée, participé à des centaines de concerts et joué dans de nombreux festivals. Cette immersion professionnelle sur scène lui permet aujourd'hui de partager des conseils concrets et précieux pour progresser en groupe, développer sa musicalité et vivre pleinement l'expérience du live."
    ]
  }
];

const TeacherCard = ({ teacher, onClick }: { teacher: Teacher; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-4 bg-card rounded-xl p-4 shadow-card hover:shadow-musical hover:-translate-y-0.5 transition-all duration-300 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
  >
    <Avatar className="h-16 w-16 shrink-0 border-2 border-primary/20">
      {teacher.profileImage ? (
        <AvatarImage
          src={teacher.profileImage}
          alt={`${teacher.name}, professeur de ${teacher.discipline}`}
          className={teacher.profileImageClass || "object-cover object-top scale-[1.15]"}
        />
      ) : null}
      <AvatarFallback className="bg-gradient-musical text-primary font-heading font-bold text-lg">
        {teacher.name.charAt(0)}
      </AvatarFallback>
    </Avatar>
    <div className="min-w-0">
      <h4 className="font-heading text-lg font-semibold text-primary leading-tight">
        {teacher.name}
      </h4>
      <p className="text-secondary font-medium text-sm mt-0.5">
        {teacher.discipline}
      </p>
      <p className="text-muted-foreground text-sm mt-1 line-clamp-1">
        {teacher.shortDesc}
      </p>
    </div>
  </button>
);

const Teachers = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  return (
    <section id="professeurs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Notre équipe pédagogique
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des musiciens professionnels et pédagogues passionnés, formés pour transmettre leur savoir avec bienveillance à Saint-Gilles.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {teachers.map((teacher, index) => (
            <TeacherCard
              key={index}
              teacher={teacher}
              onClick={() => setSelectedTeacher(teacher)}
            />
          ))}
        </div>
      </div>

      {/* Modal fiche détaillée */}
      <Dialog open={!!selectedTeacher} onOpenChange={(open) => !open && setSelectedTeacher(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          {selectedTeacher && (
            <>
              {selectedTeacher.detailImage && (
                <div className="w-full max-h-[50vh] overflow-hidden flex items-center justify-center bg-muted">
                  <img
                    src={selectedTeacher.detailImage}
                    alt={`${selectedTeacher.name}, professeur de ${selectedTeacher.discipline}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="p-6 pt-4">
                <DialogHeader className="mb-4">
                  <DialogTitle className="font-heading text-2xl md:text-3xl text-primary">
                    {selectedTeacher.name}
                  </DialogTitle>
                  <DialogDescription className="text-secondary font-medium text-base">
                    Professeur de {selectedTeacher.discipline}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {selectedTeacher.fullDesc.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="bg-gradient-musical hover:opacity-90" asChild>
                    <a href="#contact">
                      <Music className="w-4 h-4 mr-2" />
                      Réserver un cours d'essai
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Teachers;
