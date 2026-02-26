import { ChevronDown, Briefcase, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCountUp } from '../hooks/useCountUp';

const ALEXANDRE = 'ALEXANDRE';
const HERO_IMAGE_URL =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop';

interface HeroProps {
  scrollY?: number;
}

export default function Hero({ scrollY = 0 }: HeroProps) {
  const [alexandre, setAlexandre] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const countYears = useCountUp(5, 1500, true);
  const countProjets = useCountUp(6, 1500, true);

  useEffect(() => {
    if (isTyping) {
      if (alexandre.length < ALEXANDRE.length) {
        const t = setTimeout(() => setAlexandre(ALEXANDRE.slice(0, alexandre.length + 1)), 90);
        return () => clearTimeout(t);
      }
      setIsTyping(false);
      return;
    }
    const t = setTimeout(() => {
      setAlexandre('');
      setIsTyping(true);
    }, 2500);
    return () => clearTimeout(t);
  }, [isTyping, alexandre]);

  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
      {/* Fond gradient animé subtil */}
      <div className="absolute inset-0 bg-animated-mesh opacity-60 pointer-events-none" aria-hidden />
      {/* Motifs chic animés */}
      <div className="absolute inset-0 bg-pattern-dots-animated opacity-70 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-pattern-grid-animated opacity-50 pointer-events-none" aria-hidden />
      {/* Formes flottantes décoratives */}
      <div className="absolute top-[15%] left-[8%] w-20 h-20 rounded-full bg-orange-200/30 shape-float-1 shape-pulse pointer-events-none" aria-hidden />
      <div className="absolute top-[70%] right-[12%] w-12 h-12 rounded-full bg-orange-300/25 shape-float-2 pointer-events-none" aria-hidden />
      <div className="absolute bottom-[25%] left-[15%] w-8 h-8 rounded-full bg-orange-400/20 shape-float-3 pointer-events-none" aria-hidden />
      <div className="absolute top-[40%] right-[25%] w-3 h-3 rounded-full bg-orange-500/40 shape-float-1 pointer-events-none" aria-hidden />
      <div className="w-full px-4 sm:px-6 lg:px-10 py-10 sm:py-14 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Texte à gauche (avant l'image) */}
          <div className="flex-1 max-w-xl order-1 lg:order-1 min-w-0">
            <p className="text-stone-600 text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2 animate-fade-in opacity-0" style={{ animation: 'fadeIn 0.6s ease-out 0.1s forwards' }}>Bonjour, je suis</p>
            {/* Hauteur fixe pour le nom : évite que l'image bouge quand ALEXANDRE s'écrit ou disparaît */}
            <div className="mb-2 sm:mb-4 overflow-hidden min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[5.5rem]">
              <h1 className="text-[28px] sm:text-[35px] md:text-[47px] lg:text-[59px] font-bold text-stone-800 leading-tight">
                <span className="block min-h-[1.15em]">N&apos;GUESSAN AMSAH</span>
                <span className="block text-orange-500 min-h-[1.15em] mt-2 sm:mt-3 md:mt-4">
                  DAVID-
                  {alexandre.split('').map((char, i) => (
                    <span key={i} className="typewriter-letter">{char}</span>
                  ))}
                  <span className="inline-block w-0.5 h-[0.9em] bg-orange-500 align-middle animate-blink-cursor ml-0.5" />
                </span>
              </h1>
            </div>
            <p className="text-stone-600 font-medium text-sm sm:text-base mb-1 sm:mb-2">
              <span className="text-orange-500">Product Manager</span> · e-Commerce · Stratégie digitale
            </p>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Spécialiste de la transformation digitale et du développement de produits innovants, avec une expertise en monétique et paiements électroniques.
            </p>

            <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 mb-5 sm:mb-8">
              <div className="flex items-center gap-1.5 sm:gap-2 hover-scale transition-transform duration-300" style={{ animation: 'slideUp 0.6s ease-out 0.5s both' }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-100 flex items-center justify-center animate-float-slow">
                  <Briefcase className="text-orange-500 animate-icon-move animate-icon-glow" size={18} />
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-stone-800">{countYears}+</span>
                  <span className="text-stone-600 text-[10px] sm:text-xs">ans d'expérience</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 hover-scale transition-transform duration-300" style={{ animation: 'slideUp 0.6s ease-out 0.6s both' }}>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-orange-100 flex items-center justify-center animate-float-slow" style={{ animationDelay: '0.5s' }}>
                  <Zap className="text-orange-500 animate-icon-move animate-icon-glow" size={18} />
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-bold text-stone-800">{countProjets}+</span>
                  <span className="text-stone-600 text-[10px] sm:text-xs">projets clés</span>
                </div>
              </div>
            </div>

            <a
              href="#projets"
              className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-orange-500 text-white text-xs sm:text-sm font-medium hover:bg-orange-600 hover-lift hover-glow transition-all rounded btn-pulse"
              style={{ animation: 'slideUp 0.6s ease-out 0.75s both' }}
            >
              Découvrir mes projets
            </a>
          </div>

          {/* Image à droite : taille fixe, indépendante du typewriter */}
          <div
            className="flex-shrink-0 relative order-2 lg:order-2 w-full max-w-sm md:max-w-md lg:max-w-none lg:w-[28rem] xl:w-[32rem] mx-auto lg:mx-0"
            style={{ transform: `translateY(${scrollY * 0.12}px)` }}
          >
            <div className="relative w-full h-[16rem] sm:h-[20rem] md:h-[22rem] lg:h-[28rem] xl:h-[32rem] animate-hero-photo group">
              <div className="w-full h-full overflow-hidden card-img-quasi-br">
                <img
                  src={HERO_IMAGE_URL}
                  alt="N'GUESSAN AMSAH DAVID-ALEXANDRE"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full bg-stone-200 flex items-center justify-center text-stone-400 text-6xl font-bold absolute inset-0">
                  DA
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-80" style={{ transform: `translateY(${scrollY * 0.08}px)` }} aria-hidden>
              <div className="w-full h-full bg-orange-100 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown size={28} className="text-stone-400 animate-bounce" />
      </div>
    </section>
  );
}
