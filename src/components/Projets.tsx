import { ExternalLink, Zap } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';

interface Projet {
  nom: string;
  description: string;
  details: string[];
  technologies: string[];
  image: string;
}


export default function Projets() {
  const CARD_BORDER_STYLES = ['card-border-round-br', 'card-border-sharp', 'card-border-round-tr', 'card-border-round-bl'] as const;
const CARD_IMG_QUASI = ['card-img-quasi-br', 'card-img-quasi-sharp', 'card-img-quasi-tr', 'card-img-quasi-bl'] as const;

const projets: Projet[] = [
    {
      nom: 'CNAM',
      description: 'Paiement des cotisations sociales',
      details: [
        'Intégration Mobile Money et Visa/Mastercard',
        'Solution de paiement sécurisée pour cotisations',
        'Interface simplifiée pour les assurés'
      ],
      technologies: ['Mobile Money', 'Visa', 'Mastercard', 'Gateway'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    },
    {
      nom: 'ONECI',
      description: 'Système de paiement en ligne des frais de timbre',
      details: [
        'Plateforme de paiement gouvernementale',
        'Conformité PCI DSS',
        'Traçabilité complète des transactions'
      ],
      technologies: ['PCI DSS', 'Paiement en ligne', 'API REST'],
      image: 'https://images.unsplash.com/photo-1563013544-6980b0c9e6e2?w=800&q=80'
    },
    {
      nom: 'Mucrefci Connect',
      description: 'Digitalisation des demandes et paiements de crédits',
      details: [
        'Plateforme pour fonctionnaires',
        'Demande de crédit en ligne',
        'Paiement et suivi digitalisés'
      ],
      technologies: ['FinTech', 'Crédit', 'Digital Banking'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      nom: 'Monpasseport.ci',
      description: 'Application e-commerce pour passeports',
      details: [
        'Dématérialisation des demandes',
        'Paiement en ligne sécurisé',
        'Suivi en temps réel'
      ],
      technologies: ['e-Commerce', 'Paiement', 'Mobile App'],
      image: 'https://images.unsplash.com/photo-1556742111-a301067d7705?w=800&q=80'
    },
    {
      nom: 'Bridge Securities',
      description: 'Application mobile/web transactionnelle',
      details: [
        'Achat de produits financiers',
        'Encaissement de dividendes',
        'Plateforme Bridge Bank'
      ],
      technologies: ['Finance', 'Mobile Banking', 'Web App'],
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80'
    },
    {
      nom: 'MaxIt Côte d\'Ivoire',
      description: 'Application Orange CI',
      details: [
        'Univers Telco, Marketplace, Orange Money',
        'Optimisation UX/UI',
        'Backlog management'
      ],
      technologies: ['Product Management', 'UX', 'Agile'],
      image: 'https://images.unsplash.com/photo-1551431009-a22ee028f841?w=800&q=80'
    }
  ];

  return (
    <section id="projets" className="py-10 sm:py-14 md:py-24 border-t border-stone-100 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll variant="fade-down">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
              <span className="text-stone-800">Projets </span>
              <span className="text-orange-500">Clés</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="fade-up" delay={1}>
            <p className="text-stone-600 text-xs sm:text-sm mb-6 sm:mb-10 max-w-xl">
              Découvrez les projets stratégiques que j'ai pilotés.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {projets.map((projet, index) => (
              <AnimateOnScroll key={index} variant="fade-up" delay={(index % 2) as 0 | 1 | 2}>
                <article className={`group projet-card-shine projet-card-lift relative h-full bg-white border border-stone-200 overflow-hidden shadow-md hover:shadow-2xl hover:border-orange-200/60 transition-all duration-500 ${CARD_BORDER_STYLES[index % 4]}`}>
                  {/* Bandeau accent type dashboard */}
                  <div className="h-1.5 bg-gradient-to-r from-orange-500 to-amber-500" aria-hidden />
                  <div className={`aspect-[16/10] sm:aspect-[2/1] bg-stone-100 relative overflow-hidden ${CARD_IMG_QUASI[index % 4]}`}>
                    <img
                      src={projet.image}
                      alt={projet.nom}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/800x500/f5f5f4/78716c?text=${encodeURIComponent(projet.nom)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 text-white text-sm sm:text-base font-medium">
                        <ExternalLink size={18} /> Voir le projet
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <Zap className="text-orange-500 flex-shrink-0 mt-1" size={22} />
                      <h3 className="font-bold text-stone-800 text-xl sm:text-2xl md:text-[1.4rem] leading-tight">{projet.nom}</h3>
                    </div>
                    <p className="text-orange-500 text-sm sm:text-base font-semibold mb-4">{projet.description}</p>
                    <ul className="space-y-2 sm:space-y-2.5 mb-5 text-stone-600 text-sm sm:text-base">
                      {projet.details.slice(0, 3).map((detail, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-orange-500 mt-1 font-bold">·</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 sm:gap-2.5">
                      {projet.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 sm:px-3.5 sm:py-2 bg-stone-100 text-stone-600 text-xs sm:text-sm font-medium rounded-lg border border-stone-200/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
