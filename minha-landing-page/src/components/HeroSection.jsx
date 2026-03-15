import React from 'react';
import PrimaryButton from './PrimaryButton';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ cityInfo }) => {
  const navigate = useNavigate();

  return (
    <header className="relative min-h-[90vh] flex items-center bg-black overflow-hidden border-b border-orange-900/30">
      
      {/* Geolocation Tag */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50 bg-black/40 backdrop-blur-md border border-zinc-700/50 rounded-full px-3 py-2 md:px-5 md:py-3 flex items-center gap-2 md:gap-3 shadow-xl transform animate-pulse-slow">
         <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500 animate-pulse"></div>
         <span className="text-gray-300 text-[10px] md:text-sm font-medium tracking-wide">
           <span className="text-white font-black">{cityInfo.viewers}</span> 
           {cityInfo.city !== 'sua região' ? (
             <> Pessoas na sua cidade <span className="text-orange-500 font-black">{cityInfo.city}</span> estão dominando a IA</>
           ) : (
             <> pessoas da <span className="text-orange-500 font-black">sua cidade</span> estão dominando a IA</>
           )}
         </span>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[500px] lg:w-[800px] h-[500px] lg:h-[800px] bg-orange-600/15 blur-[150px] rounded-full z-0 pointer-events-none"></div>

      {/* Background Image */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-10 opacity-30 lg:opacity-100 pointer-events-none"
      >
        <img
          src="/images/BACKGROUND.PNG"
          alt="Estudante com óculos de IA"
          className="w-full h-full object-cover object-center"
        />
        <div className="hidden lg:block absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col items-start justify-center py-24 text-left">
            <div className="inline-block px-4 py-1 border border-orange-500/30 rounded-full bg-orange-500/5 text-orange-500 text-xs font-bold mb-6 tracking-widest uppercase shadow-[0_0_15px_rgba(234,88,12,0.1)]">
              A Revolução da Inteligência Artificial
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] uppercase drop-shadow-lg">
              Domine a IA em <br/><span className="text-orange-600 italic">Tempo Recorde</span>
            </h1>

            <p className="text-gray-300 text-lg mb-10 max-w-xl font-medium drop-shadow leading-relaxed">
              Aprenda a criar comerciais de alto nível e sessões de fotos de produtos profissionais com as ferramentas mais avançadas do mercado.
            </p>

            <div className="flex flex-col items-center gap-3 w-full lg:w-auto">
              <PrimaryButton onClick={() => document.getElementById('oferta').scrollIntoView({ behavior: 'smooth' })}>
                QUERO DOMINAR A IA AGORA
              </PrimaryButton>
              <button 
                onClick={() => navigate('/depoimentos')}
                className="w-full lg:w-auto px-8 py-3 rounded-full border border-orange-500/50 text-orange-500 font-bold uppercase tracking-widest hover:bg-orange-500/10 transition-colors mt-2"
              >
                Assistir Depoimentos
              </button>
              <p className="text-xs text-gray-400 flex items-center justify-center gap-2 mt-2 font-medium">
                <ShieldCheck size={14} className="text-orange-600" /> 7 dias de garantia incondicional
              </p>
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
