import React from 'react';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Testimonials = () => {
  const navigate = useNavigate();

  const depoimentos = [
    {
      id: 1,
      nome: 'Aluno Transformado',
      videoUrl: 'https://www.youtube.com/embed/pV2vf6hCJWs?rel=0&modestbranding=1',
      destaque: 'Faturou mais no primeiro mês de curso do que no ano anterior.'
    },
    {
      id: 2,
      nome: 'Aluna Satisfeita',
      videoUrl: 'https://www.youtube.com/embed/2aOIxn1rcbA?rel=0&modestbranding=1',
      destaque: 'Aplicou a Inteligência Artificial e conquistou clientes internacionais.'
    },
    {
      id: 3,
      nome: 'Aluno Independente',
      videoUrl: 'https://www.youtube.com/embed/E97tfiHs938?rel=0&modestbranding=1',
      destaque: 'Criou sua agência do zero usando apenas os métodos do curso.'
    }
  ];

  return (
    <div className="bg-black text-gray-100 font-sans selection:bg-orange-500 selection:text-white min-h-screen flex flex-col items-center">
      
      {/* Header Fixo */}
      <header className="w-full bg-zinc-950 border-b border-zinc-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors group cursor-pointer"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-wider text-sm hidden sm:inline">Voltar e Garantir Vaga</span>
            <span className="font-bold uppercase tracking-wider text-sm sm:hidden">Voltar</span>
          </button>
          
          <div className="text-white font-black italic text-lg tracking-tighter flex items-center gap-1">
            DOMINANDO <span className="text-orange-600">A IA</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-orange-500/30 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold mb-6 tracking-widest uppercase shadow-[0_0_15px_rgba(234,88,12,0.1)]">
            <PlayCircle size={16} /> Histórias Reais
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight uppercase drop-shadow-lg italic tracking-tight">
            Veja quem já <span className="text-orange-600">Dominou a IA</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Essas pessoas comuns aplicaram nosso método e transformaram a forma como produzem conteúdo e atraem clientes.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div 
              key={depoimento.id} 
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl group hover:border-orange-500/50 transition-all duration-300 animate-slide-up-fade"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={depoimento.videoUrl}
                  title={`Depoimento ${depoimento.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-white font-black text-xl mb-2 flex items-center gap-2">
                  {depoimento.nome} 
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                </h3>
                <p className="text-sm text-gray-400 italic font-medium line-clamp-3">
                  "{depoimento.destaque}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 p-10 bg-gradient-to-br from-orange-600/20 to-zinc-900 border border-orange-500/30 rounded-[2rem] text-center shadow-[0_0_50px_rgba(234,88,12,0.1)] relative overflow-hidden">
          <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-orange-600/20 blur-[60px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-8">O próximo será você.</h2>
          <button 
            onClick={() => navigate('/')} 
            className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 text-sm md:text-base uppercase rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)] tracking-widest"
          >
            EU QUERO DOMINAR A IA
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
