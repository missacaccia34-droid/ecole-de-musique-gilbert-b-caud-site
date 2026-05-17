import { Baby, Guitar, Mic, Music } from 'lucide-react';
import CourseLanding from './CourseLanding';

const Chant = () => (
  <CourseLanding
    title="Cours de chant à Saint-Gilles"
    eyebrow="Chant • Saint-Gilles (30800)"
    highlight="voix, respiration et expression"
    intro="Découvrez des cours de chant accessibles aux enfants, adolescents et adultes pour apprendre à poser sa voix, respirer, chanter juste et interpréter avec émotion."
    metaTitle="Cours de chant à Saint-Gilles (30800) | École Gilbert Bécaud"
    metaDescription="Cours de chant à Saint-Gilles dans le Gard pour enfants, adolescents et adultes. Technique vocale, respiration, justesse et interprétation à l'École Gilbert Bécaud."
    canonicalPath="/cours-chant-saint-gilles"
    icon={Mic}
    age="Dès 6 ans"
    formats={['Technique vocale', 'Respiration', 'Justesse', 'Interprétation', 'Répertoire personnalisé']}
    benefits={[
      'Un travail progressif de la respiration, du placement vocal et de la justesse.',
      'Un cadre rassurant pour oser chanter, gagner en confiance et exprimer sa personnalité.',
      "Des cours adaptés au niveau, à l'âge et aux styles musicaux de chaque élève.",
      'Une école facilement accessible depuis Saint-Gilles et les communes voisines du Gard.',
    ]}
    pedagogy={[
      "Le chant se construit avec le corps, l'écoute et l'émotion. Les cours aident chaque élève à mieux connaître sa voix et à l'utiliser avec confiance.",
      "La pédagogie associe respiration, posture, échauffement vocal, justesse, articulation et interprétation, toujours à partir d'un répertoire motivant.",
      "Débutants, enfants, adolescents ou adultes peuvent progresser sans prérequis, dans une ambiance bienveillante et exigeante juste ce qu'il faut.",
    ]}
    levels={[
      { title: 'Chant débutant', text: 'Découverte de la voix, respiration, placement, écoute et premiers repères pour chanter avec plus de confort.' },
      { title: 'Chant enfant et ado', text: 'Un travail adapté pour développer la justesse, la confiance, la présence et le plaisir de chanter.' },
      { title: 'Chant adulte', text: 'Un accompagnement personnalisé pour commencer, reprendre ou approfondir une pratique vocale régulière.' },
    ]}
    faq={[
      { question: 'Faut-il savoir lire la musique pour prendre des cours de chant ?', answer: "Non. Les bases utiles sont apportées progressivement, selon les besoins de l'élève et le répertoire travaillé." },
      { question: 'Les cours de chant sont-ils ouverts aux débutants ?', answer: 'Oui. Les débutants sont accompagnés pas à pas sur la respiration, la justesse, le placement et la confiance vocale.' },
      { question: 'Peut-on travailler des chansons modernes ?', answer: 'Oui. Le répertoire peut intégrer des styles variés, avec un travail musical adapté à la voix et au niveau de chacun.' },
    ]}
    related={[
      { title: 'Piano', href: '/cours-piano-saint-gilles', description: 'Apprendre le piano avec une progression douce, structurée et motivante.', icon: Music },
      { title: 'Guitare', href: '/cours-guitare-saint-gilles', description: 'Découvrir la guitare acoustique ou électrique à son rythme.', icon: Guitar },
      { title: 'Éveil musical', href: '/eveil-musical-saint-gilles', description: 'Initier les plus jeunes au rythme, aux sons et au plaisir musical.', icon: Baby },
    ]}
    testimonial="Les cours aident à oser, à respirer autrement et à chanter avec plus de liberté. On sent une vraie écoute de la personne."
    testimonialAuthor="Retour d'élève"
  />
);

export default Chant;
