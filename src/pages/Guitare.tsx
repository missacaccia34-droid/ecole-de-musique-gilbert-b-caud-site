import { Baby, Guitar, Mic, Music } from 'lucide-react';
import CourseLanding from './CourseLanding';

const Guitare = () => (
  <CourseLanding
    title="Cours de guitare à Saint-Gilles"
    eyebrow="Guitare • Saint-Gilles (30800)"
    highlight="acoustique ou électrique"
    intro="Apprenez la guitare dans un cadre convivial : accords, rythmique, arpèges, morceaux actuels ou classiques, avec une progression adaptée aux enfants, ados et adultes."
    metaTitle="Cours de guitare à Saint-Gilles (30800) | École Gilbert Bécaud"
    metaDescription="Cours de guitare à Saint-Gilles dans le Gard pour enfants, adolescents et adultes. Guitare acoustique ou électrique, accords, rythmique et répertoire personnalisé."
    canonicalPath="/cours-guitare-saint-gilles"
    icon={Guitar}
    age="Dès 8 ans"
    formats={['Guitare acoustique', 'Guitare électrique', 'Accords', 'Rythmique', 'Répertoire personnalisé']}
    benefits={[
      'Une progression concrète pour jouer rapidement des morceaux motivants.',
      'Un travail des accords, de la rythmique, des arpèges et de la musicalité.',
      "Un enseignement adapté au style de l'élève : variété, rock, pop, accompagnement ou bases classiques.",
      'Une école locale à Saint-Gilles, accessible depuis Vauvert, Beauvoisin, Bellegarde, Générac, Garons et Nîmes Sud.',
    ]}
    pedagogy={[
      "La guitare est un instrument très accessible pour entrer dans la musique, accompagner une chanson ou développer son propre univers musical.",
      "Les cours associent technique, rythme, écoute, posture et répertoire. L'élève avance avec des objectifs clairs, sans perdre le plaisir de jouer.",
      "Chaque parcours est ajusté selon l'âge, les goûts musicaux et le niveau : premières notes, accords, jeu au médiator, fingerpicking ou interprétation.",
    ]}
    levels={[
      { title: 'Guitare débutant', text: 'Premiers accords, tenue de l’instrument, rythmiques simples, lecture de grilles et premiers morceaux.' },
      { title: 'Guitare enfant et ado', text: 'Un apprentissage motivant autour de morceaux choisis, avec un travail régulier du rythme et de la précision.' },
      { title: 'Guitare adulte', text: 'Une approche souple pour débuter, reprendre ou progresser sur les styles musicaux qui vous donnent envie de jouer.' },
    ]}
    faq={[
      { question: 'Faut-il avoir une guitare avant de commencer ?', answer: "C'est préférable pour pratiquer à la maison, mais l'école peut vous conseiller sur le choix d'une guitare adaptée à l'âge et au projet." },
      { question: 'Peut-on apprendre la guitare électrique ?', answer: "Oui. Les cours peuvent accompagner la guitare acoustique ou électrique, selon les objectifs et le répertoire de l'élève." },
      { question: 'Combien de temps faut-il pour jouer ses premiers morceaux ?', answer: 'Avec une pratique régulière, les premiers morceaux simples peuvent arriver assez vite, surtout si le répertoire choisi motive vraiment l’élève.' },
    ]}
    related={[
      { title: 'Piano', href: '/cours-piano-saint-gilles', description: 'Développer sa pratique instrumentale, son écoute et sa musicalité.', icon: Music },
      { title: 'Chant', href: '/cours-chant-saint-gilles', description: 'Travailler sa voix, sa respiration, sa justesse et son interprétation.', icon: Mic },
      { title: 'Éveil musical', href: '/eveil-musical-saint-gilles', description: 'Une première découverte musicale ludique pour les enfants.', icon: Baby },
    ]}
    testimonial="Une approche simple, musicale et motivante. Les morceaux donnent envie de pratiquer, et les progrès se voient rapidement."
    testimonialAuthor="Retour d'élève"
  />
);

export default Guitare;
