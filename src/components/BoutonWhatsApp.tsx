import { MessageCircle } from 'lucide-react';

export default function BoutonWhatsApp() {
  const numeroWhatsApp = '+2250711461480';
  const message = 'Bonjour David-Alexandre, je vous contacte suite à la visite de votre portfolio.';

  const handleClick = () => {
    const url = `https://wa.me/${numeroWhatsApp.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group overflow-visible animate-float-slow hover:animate-none animate-soft-pulse-ring whatsapp-pulse-ring"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="text-white relative z-10" size={28} />

      <div className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
        <span className="text-sm font-semibold">Discuter sur WhatsApp</span>
        <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-8 border-transparent border-l-gray-900" />
      </div>

      <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-75 group-hover:animate-ping transition-opacity duration-300" style={{ animationDuration: '1.5s' }} />
    </button>
  );
}
