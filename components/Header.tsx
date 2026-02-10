
import React from 'react';

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  return (
    <header className="sticky top-0 w-full bg-[#0a0a0a] border-b border-white/5 z-50 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="relative flex items-center justify-center w-10 h-10 mr-2">
              <div className="absolute inset-0 bg-gradient-to-br from-impulsoOrange to-impulsoPink rounded-full blur-[2px] opacity-90"></div>
              <span className="relative text-white font-extrabold text-sm z-10">IT</span>
            </div>
            <div className="flex flex-col">
               <div className="flex items-baseline font-black tracking-tighter text-2xl leading-none">
                <span className="text-white">IMPULSO</span>
                <span className="text-impulsoPink">IT</span>
              </div>
              <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                Embajadores de ENEB
              </div>
            </div>
          </div>
        </div>
        
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center space-x-8 text-xs font-bold text-white uppercase tracking-widest">
          <a href="#beneficios" className="hover:text-impulsoPink transition-colors">Beneficios</a>
          <a href="#programas" className="hover:text-impulsoPink transition-colors">Programas</a>
          <a href="#testimonios" className="hover:text-impulsoPink transition-colors">Alumnos</a>
        </nav>

        <button 
          onClick={onCtaClick}
          className="bg-gradient-to-r from-impulsoOrange to-impulsoPink text-white px-6 py-2.5 rounded-lg font-bold text-xs hover:brightness-110 transition-all shadow-lg active:scale-95"
        >
          SOLICITAR BECA
        </button>
      </div>
    </header>
  );
};
