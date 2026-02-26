import { useState, useEffect } from 'react';
import { Code, Megaphone, ShoppingCart, CreditCard, Users, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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

const CATEGORY_KEYS = ['productManagement', 'marketingDigital', 'ecommerce', 'monetique', 'outils', 'softSkills'] as const;
const ICONS = [TrendingUp, Megaphone, ShoppingCart, CreditCard, Code, Users];
const NIVEAUX = [
  [95, 90, 92, 88, 85],
  [88, 90, 85, 87, 86],
  [92, 90, 88, 95, 89],
  [95, 92, 90, 93, 94],
  [92, 88, 85, 80, 87],
  [90, 95, 93, 91, 92],
];

export default function Competences() {
  const { t } = useTranslation();
  const [categorieActive, setCategorieActive] = useState(0);
  const { ref: barRef, isInView } = useInView({ threshold: 0.2 });

  const categories = t('competences.categories', { returnObjects: true }) as Record<string, string>;
  const skillsObj = t('competences.skills', { returnObjects: true }) as Record<string, string[]>;
  const competences: Competence[] = CATEGORY_KEYS.map((key, i) => {
    const Icon = ICONS[i];
    const noms = skillsObj[key] ?? [];
    return {
      categorie: categories[key] ?? key,
      icone: <Icon size={22} />,
      items: noms.map((nom, j) => ({ nom, niveau: NIVEAUX[i]?.[j] ?? 0 })),
    };
  });

  return (
    <section id="competences" className="py-10 sm:py-14 md:py-20 lg:py-24 border-t border-stone-100">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll variant="fade-down">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
              <span className="text-stone-800">{t('competences.title')} </span>
              <span className="text-orange-500">{t('competences.titleHighlight')}</span>
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
            <div ref={barRef} className="rounded-lg border border-stone-200 border-l-4 border-l-orange-500 p-4 sm:p-6 md:p-8 bg-white hover-lift transition-all">
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
              <div className="p-4 sm:p-6 md:p-8 rounded-lg border border-stone-200 bg-white border-l-4 border-l-orange-500 hover-lift transition-all">
                <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-3 sm:mb-4">{t('competences.languages')}</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1 sm:mb-1.5">
                      <span className="flex items-center gap-2 text-stone-700 text-sm sm:text-base">
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-md overflow-hidden bg-stone-100 flex items-center justify-center text-base sm:text-lg flex-shrink-0" aria-hidden>
                          🇫🇷
                        </span>
                        {t('competences.french')}
                      </span>
                      <span className="text-orange-500 font-bold text-xs sm:text-sm">{t('competences.frenchLevel')}</span>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full transition-all duration-1000" style={{ width: isInView ? '100%' : '0%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1 sm:mb-1.5">
                      <span className="flex items-center gap-2 text-stone-700 text-sm sm:text-base">
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-md overflow-hidden bg-stone-100 flex items-center justify-center text-base sm:text-lg flex-shrink-0" aria-hidden>
                          🇬🇧
                        </span>
                        {t('competences.english')}
                      </span>
                      <span className="text-orange-500 font-bold text-xs sm:text-sm">{t('competences.englishLevel')}</span>
                    </div>
                    <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 rounded-full transition-all duration-1000" style={{ width: isInView ? '60%' : '0%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="slide-left" delay={2}>
              <div className="p-4 sm:p-6 md:p-8 rounded-lg border border-stone-200 bg-white border-l-4 border-l-orange-500 hover-lift transition-all">
                <h3 className="text-base sm:text-lg font-bold text-stone-800 mb-3 sm:mb-4">{t('competences.certifications')}</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-stone-800 font-semibold text-sm sm:text-base">{t('competences.cert1Title')}</p>
                      <p className="text-stone-600 text-xs sm:text-sm">{t('competences.cert1Sub')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 group">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-1.5 sm:mt-2 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-stone-800 font-semibold text-sm sm:text-base">{t('competences.cert2Title')}</p>
                      <p className="text-stone-600 text-xs sm:text-sm">{t('competences.cert2Sub')}</p>
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
