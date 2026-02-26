import { Briefcase, Calendar } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { useInView } from '../hooks/useInView';

interface Experience {
  titre: string;
  entreprise: string;
  periode: string;
  localisation?: string;
  description: string[];
  technologies?: string[];
}

function ExperienceCard({ exp, accentSide }: { exp: Experience; accentSide: 'left' | 'right' }) {
  return (
    <div className="experience-card-parcours rounded-lg border border-stone-700/80 bg-pattern-dots-card backdrop-blur-sm p-4 sm:p-5 md:p-6 transition-all duration-300 overflow-hidden hover:border-orange-500/40 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.15)] relative">
      {/* Barre d'accent côté timeline */}
      <div
        className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-400 experience-card-accent-parcours transition-all duration-300 ${accentSide === 'left' ? 'left-0 rounded-l-lg' : 'right-0 rounded-r-lg'}`}
      />
      <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="p-2 sm:p-2.5 rounded-lg bg-orange-500/20 text-orange-400 experience-icon-wrap-parcours transition-all duration-300 shrink-0">
            <Briefcase size={20} className="sm:w-5 sm:h-5" strokeWidth={2} />
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-white text-base sm:text-lg">{exp.titre}</h3>
            <p className="text-orange-400/90 font-medium text-sm">{exp.entreprise}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-stone-400 text-xs sm:text-sm shrink-0">
          <Calendar size={14} className="text-orange-400/80 shrink-0" />
          <span>{exp.periode}</span>
        </div>
      </div>
      <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
        {exp.description.map((desc, i) => (
          <li
            key={i}
            className="text-stone-300 text-sm sm:text-base leading-relaxed flex items-start gap-2 experience-desc-item-parcours"
          >
            <span className="text-orange-400 mt-1 shrink-0 experience-bullet-parcours font-bold">›</span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
      {exp.technologies && exp.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {exp.technologies.map((tech, i) => (
            <span
              key={i}
              className="experience-tag-parcours px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md border border-orange-500/40 text-orange-200/90 bg-orange-500/10 hover:bg-orange-500/20 hover:border-orange-400/60 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experiences() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.15 });
  const experiences: Experience[] = [
    {
      titre: 'Chef de Produit Monétique',
      entreprise: 'NGSR (Nouvelle Génération de Services)',
      periode: 'Avril 2024 – Présent',
      description: [
        'Pilotage complet du développement de produits digitaux (mobile & web)',
        'Définition de stratégies pour lancer/améliorer des produits de paiement',
        'Conception et optimisation de solutions de paiement électronique sécurisées (PCI DSS)',
        'Suivi des intégrations de la gateway monétique avec banques et fintechs'
      ],
      technologies: ['Gateway Monétique', 'PCI DSS', 'Mobile Money', 'Visa/Mastercard']
    },
    {
      titre: 'Chef de Produits Digitaux',
      entreprise: "Orange Côte d'Ivoire",
      periode: 'Mai 2023 – Mars 2024',
      description: [
        'Gestion et alimentation du backlog (univers Telco, Marketplace, Orange Money)',
        'Priorisation des évolutions produit selon les enjeux métiers',
        'Collecte et analyse des besoins clients B2B/B2C',
        'Optimisation des parcours utilisateurs et ergonomie'
      ],
      technologies: ['Product Management', 'UX/UI', 'Agile/Scrum', 'B2B/B2C']
    },
    {
      titre: 'Acquisition et Animation',
      entreprise: "Orange Côte d'Ivoire",
      periode: 'Mars 2023 – Mai 2023',
      description: [
        "Suivi et analyse des campagnes Ads (boutique en ligne, app Orange & Moi)",
        "Planification et exécution d'études sur les offres B2B et B2C"
      ],
      technologies: ['Google Ads', 'Analytics', 'Marketing Digital']
    },
    {
      titre: 'Junior Digital Manager',
      entreprise: 'The Adress Abidjan',
      periode: 'Nov. 2021 – Janv. 2022',
      description: [
        'Gestion de site e-commerce (contenus, fiches produits, stocks, commandes)',
        'Optimisation des campagnes SEO et SEA',
        'Conception et suivi de campagnes d\'emailing'
      ],
      technologies: ['e-Commerce', 'SEO', 'SEA', 'Email Marketing']
    },
    {
      titre: 'Junior Digital Manager',
      entreprise: 'YM Africa',
      periode: 'Fév. 2021 – Juin 2021',
      description: [
        'Participation à la stratégie de contenu pour les Social Media Ads',
        'Optimisation SEO des contenus',
        'Community management et gestion de l\'e-réputation'
      ],
      technologies: ['Social Media', 'SEO', 'Community Management']
    }
  ];

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className={`py-10 sm:py-14 md:py-20 lg:py-28 relative overflow-hidden bg-stone-950 ${isInView ? 'in-view' : ''}`}
    >
      {/* Motifs de fond */}
      <div className="absolute inset-0 bg-pattern-dots-dark opacity-80 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-pattern-grid-dark opacity-50 pointer-events-none" aria-hidden />
      {/* Accent lumineux discret */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-400/8 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 relative">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll variant="fade-down">
            <div className="mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                <span className="text-stone-200">Parcours </span>
                <span className="text-orange-400">Professionnel</span>
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full timeline-title-underline" />
            </div>
          </AnimateOnScroll>

          <div className="relative">
            {/* Ligne de temps : à gauche sur mobile, au centre sur md+ */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-700 rounded-full overflow-hidden md:left-1/2 md:-translate-x-px">
              <div
                className="timeline-line-progress absolute inset-0 bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500/60 rounded-full origin-top scale-y-0"
                style={{ transformOrigin: 'top' }}
              />
            </div>

            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {experiences.map((exp, index) => {
                const isRight = index % 2 === 0;
                return (
                  <AnimateOnScroll
                    key={index}
                    variant={isRight ? 'slide-right' : 'slide-left'}
                    delay={(index % 3) as 0 | 1 | 2}
                  >
                    <div className="relative flex items-stretch min-h-[120px]">
                      {/* Spacer : gauche sur mobile (timeline), 50% sur desktop selon côté carte */}
                      <div
                        className={`w-14 flex-none md:w-1/2 ${isRight ? 'md:order-1' : 'md:order-2'} pr-2 md:pr-6`}
                        aria-hidden
                      />
                      {/* Carte : à droite du spacer sur mobile, alternée sur desktop */}
                      <div
                        className={`flex-1 min-w-0 md:w-1/2 md:flex-none flex ${isRight ? 'justify-start md:order-2' : 'justify-end md:order-1'} pl-2 md:pl-6`}
                      >
                        <div className="w-full max-w-md">
                          <ExperienceCard
                            exp={exp}
                            accentSide={isRight ? 'left' : 'right'}
                          />
                        </div>
                      </div>
                      {/* Point orange : gauche sur mobile, centre sur desktop */}
                      <div
                        className="absolute left-6 top-6 sm:top-7 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-orange-500 shadow-lg shadow-orange-500/30 timeline-dot-expand z-10 ring-4 ring-stone-950 md:left-1/2"
                        aria-hidden
                      />
                    </div>
                  </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
