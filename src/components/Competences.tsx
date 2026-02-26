import { useState, useEffect } from 'react';
import { Code, Megaphone, ShoppingCart, CreditCard, Users, TrendingUp } from 'lucide-react';
import AnimateOnScroll from './AnimateOnScroll';
import { useInView } from '../hooks/useInView';

interface Competence {
  categorie: string;
  icone: React.ReactNode;
  items: { nom: string; niveau: number }[];
}

function AnimatedBar({ niveau, inView }: { niveau: number; inView: boolean }) {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    if (inView) setAnimated(true);
  }, [inView]);
  return (
    <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-1000 ease-out"
        style={{ width: animated ? `${niveau}%` : '0%' }}
      />
    </div>
  );
}

export default function Competences() {
  const [categorieActive, setCategorieActive] = useState(0);
  const { ref: barRef, isInView } = useInView({ threshold: 0.2 });

  const competences: Competence[] = [
    {
      categorie: 'Product Management',
      icone: <TrendingUp size={22} />,
      items: [
        { nom: 'Agile/Scrum', niveau: 95 },
        { nom: 'User Stories & Specs', niveau: 90 },
        { nom: 'Roadmap & Backlog', niveau: 92 },
        { nom: 'Go-to-Market', niveau: 88 },
        { nom: 'UX Research', niveau: 85 }
      ]
    },
    {
      categorie: 'Marketing Digital',
      icone: <Megaphone size={22} />,
      items: [
        { nom: 'SEO/SEA', niveau: 88 },
        { nom: 'Google Analytics', niveau: 90 },
        { nom: 'Meta Business Suite', niveau: 85 },
        { nom: 'Email Marketing', niveau: 87 },
        { nom: 'Social Media Ads', niveau: 86 }
      ]
    },
    {
      categorie: 'e-Commerce',
      icone: <ShoppingCart size={22} />,
      items: [
        { nom: 'Stratégie e-commerce', niveau: 92 },
        { nom: 'Funnel Optimization', niveau: 90 },
        { nom: 'Conversion Rate', niveau: 88 },
        { nom: 'Payment Integration', niveau: 95 },
        { nom: 'Customer Journey', niveau: 89 }
      ]
    },
    {
      categorie: 'Monétique',
      icone: <CreditCard size={22} />,
      items: [
        { nom: 'Gateway Integration', niveau: 95 },
        { nom: 'PCI DSS Compliance', niveau: 92 },
        { nom: 'API REST', niveau: 90 },
        { nom: 'Mobile Money', niveau: 93 },
        { nom: 'Payment Security', niveau: 94 }
      ]
    },
    {
      categorie: 'Outils',
      icone: <Code size={22} />,
      items: [
        { nom: 'Jira', niveau: 92 },
        { nom: 'Trello', niveau: 88 },
        { nom: 'HubSpot CRM', niveau: 85 },
        { nom: 'Figma', niveau: 80 },
        { nom: 'Postman', niveau: 87 }
      ]
    },
    {
      categorie: 'Soft Skills',
      icone: <Users size={22} />,
      items: [
        { nom: 'Leadership', niveau: 90 },
        { nom: 'Communication', niveau: 95 },
        { nom: 'Esprit d\'équipe', niveau: 93 },
        { nom: 'Résolution de problèmes', niveau: 91 },
        { nom: 'Autonomie', niveau: 92 }
      ]
    }
  ];

  return (
    <section id="competences" className="py-10 sm:py-14 md:py-20 lg:py-24 border-t border-stone-100">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll variant="fade-down">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
              <span className="text-stone-800">Compétences </span>
              <span className="text-orange-500">& Expertise</span>
            </h2>
          </AnimateOnScroll>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
            {competences.map((comp, index) => (
              <AnimateOnScroll key={index} variant="zoom-in" delay={(index % 4) as 0 | 1 | 2}>
                <button
                  onClick={() => setCategorieActive(index)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg hover-scale ${
                    categorieActive === index
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {comp.icone}
                  <span className="ml-1">{comp.categorie}</span>
                </button>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="scale-up">
            <div ref={barRef} className="card-border-round-tr border border-stone-200 border-l-4 border-l-orange-500 p-4 sm:p-6 md:p-8 bg-white hover-lift transition-all">
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                {competences[categorieActive].items.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-1 sm:mb-1.5">
                      <span className="text-stone-800 font-medium text-sm sm:text-base">{item.nom}</span>
                      <span className="text-orange-500 font-bold text-xs sm:text-sm">{item.niveau}%</span>
                    </div>
                    <AnimatedBar niveau={item.niveau} inView={isInView} />
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
            <AnimateOnScroll variant="slide-right" delay={1}>
              <div className="p-4 sm:p-6 md:p-8 card-border-sharp border border-stone-200 bg-white border-l-4 border-l-orange-500 hover-lift transition-all">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-3 sm:mb-4">Langues</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 sm:mb-1.5">
                      <span className="text-stone-700 text-sm sm:text-base">Français</span>
                      <span className="text-orange-500 font-bold text-xs sm:text-sm">C2 - Natif</span>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full transition-all duration-1000" style={{ width: isInView ? '100%' : '0%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 sm:mb-1.5">
                      <span className="text-stone-700 text-sm sm:text-base">Anglais</span>
                      <span className="text-orange-500 font-bold text-xs sm:text-sm">B1 - Intermédiaire</span>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full transition-all duration-1000" style={{ width: isInView ? '60%' : '0%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="slide-left" delay={2}>
              <div className="p-4 sm:p-6 md:p-8 card-border-round-br border border-stone-200 bg-white border-l-4 border-l-orange-500 hover-lift transition-all">
                <h3 className="text-base sm:text-lg font-bold text-stone-800 mb-3 sm:mb-4">Certifications</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-stone-800 font-semibold text-sm sm:text-base">Google Ateliers Numériques</p>
                      <p className="text-stone-600 text-xs sm:text-sm">Marketing Digital</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-stone-800 font-semibold text-sm sm:text-base">Google My Business</p>
                      <p className="text-stone-600 text-xs sm:text-sm">Local SEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
