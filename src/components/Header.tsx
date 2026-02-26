import { Menu, X, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  scrollY: number;
  activeSection: string;
}

export default function Header({ scrollY, activeSection }: HeaderProps) {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [navAnimated, setNavAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setNavAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  const liens = [
    { nom: 'Accueil', href: '#accueil', id: 'accueil' },
    { nom: 'Expériences', href: '#experiences', id: 'experiences' },
    { nom: 'Projets', href: '#projets', id: 'projets' },
    { nom: 'Compétences', href: '#competences', id: 'competences' },
    { nom: 'Formation', href: '#formation', id: 'formation' },
    { nom: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrollY > 30 ? 'bg-white border-b border-stone-200 shadow-sm' : 'bg-white'
      }`}
    >
      <nav className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between min-h-[4.5rem] py-4 gap-6">
          {/* Zone gauche : logo */}
          <a
            href="#accueil"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="Accueil"
          >
            <img
              src="/logo.svg"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-stone-800 tracking-tight">
              DA<span className="text-orange-500">N</span>
            </span>
          </a>

          {/* Zone centre : liens de navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8 lg:gap-12 xl:gap-14">
            {liens.map((lien, i) => {
              const isActive = activeSection === lien.id;
              return (
                <a
                  key={lien.id}
                  href={lien.href}
                  className={`nav-link-underline text-sm font-medium tracking-wide transition-colors duration-200 py-2 px-1 -mb-px whitespace-nowrap ${
                    navAnimated ? 'nav-link-anim' : 'opacity-0'
                  } ${
                    isActive
                      ? 'text-orange-500 active-underline'
                      : 'text-stone-600 hover:text-orange-500'
                  }`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {lien.nom}
                </a>
              );
            })}
          </div>

          {/* Zone droite : CTA + menu mobile */}
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <a
              href="/cv.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 lg:px-6 lg:py-3 bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors duration-200 rounded-lg"
            >
              <Download size={17} />
              Télécharger le CV
            </a>
            <button
              className="md:hidden p-2.5 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              onClick={() => setMenuOuvert(!menuOuvert)}
              aria-label="Menu"
            >
              {menuOuvert ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOuvert && (
          <div className="md:hidden py-6 px-4 border-t border-stone-100 space-y-1">
            {liens.map((lien) => (
              <a
                key={lien.id}
                href={lien.href}
                onClick={() => setMenuOuvert(false)}
                className={`block py-3.5 px-2 text-sm font-medium rounded-md tracking-wide ${
                  activeSection === lien.id ? 'text-orange-500 bg-orange-50' : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {lien.nom}
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2.5 py-3.5 px-2 text-sm font-medium text-orange-500 rounded-md hover:bg-orange-50"
              onClick={() => setMenuOuvert(false)}
            >
              <Download size={17} />
              Télécharger le CV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
