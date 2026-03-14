import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useElementOnScreen } from './VideoSection';

const PricingSection = () => {
  const [sectionRef, isVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <section id="precos" ref={sectionRef} className="py-24 px-6 relative bg-black z-10 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <h2 className="text-4xl font-black mb-16 uppercase italic">ESCOLHA SEU PLANO</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

          {/* Card Desativado - Stagger 1 */}
          <div className={`p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800 flex flex-col opacity-55 grayscale pointer-events-none relative transform md:scale-95 transition-all duration-1000 delay-200 ease-out ${isVisible ? "translate-y-0 opacity-[0.55]" : "translate-y-20 opacity-0"}`}>
            <h4 className="text-xl font-bold mb-1">DOMINANDO A IA</h4>
            <p className="text-sm font-medium mb-4 text-gray-400">ACESSO ANUAL</p>

            <div className="text-4xl font-black mb-1 line-through text-gray-500">R$ 497</div>
            <p className="text-sm mb-6 text-gray-500 line-through">ou 10x de R$ 51,29</p>

            <ul className="text-left space-y-3 mb-10 text-gray-500 text-sm flex-grow">
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 1 – Gerando Imagens Profissionais</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 2 – Multiplicando Imagens em Multishots</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 3 – Animando os Frames</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 4 – Upscale Profissional</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Módulo 5 – Editando Comercial</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Acesso vitalício</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Atualizações futuras</li>
              <li className="flex items-center gap-2"><CheckCircle size={16} /> Método validado</li>
            </ul>

            <div className="w-full py-4 rounded-xl border border-zinc-700 bg-zinc-800/30 text-zinc-600 font-black tracking-widest uppercase">
              DESATIVADO
            </div>
          </div>

          {/* Card Oferta - Stagger 2 */}
          <div id="oferta" className={`p-10 rounded-3xl bg-orange-600 border border-orange-400 shadow-[0_0_40px_rgba(234,88,12,0.3)] transform md:scale-105 relative overflow-hidden flex flex-col z-10 scroll-mt-8 transition-all duration-1000 delay-500 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}>
            <div className="absolute top-4 right-[-35px] bg-white text-orange-600 text-[10px] font-black px-10 py-1 rotate-45 uppercase">
              Oferta
            </div>

            <h4 className="text-xl font-bold mb-1 text-white">PLANO ANUAL</h4>
            <p className="text-sm font-bold mb-4 text-orange-200 uppercase tracking-wide">Condição Especial</p>

            <div className="text-lg font-bold text-orange-300 line-through mb-1">De R$ 497</div>

            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-xl font-bold text-white">10x de</span>
              <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">R$ 11,66</span>
            </div>
            <p className="text-sm font-bold mb-6 text-orange-200 uppercase tracking-wider">
              ou R$ 97,00 à vista
            </p>

            <ul className="text-left space-y-3 mb-10 text-white text-sm flex-grow font-medium">
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 1 – Gerando Imagens Profissionais</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 2 – Multiplicando Imagens em Multishots</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 3 – Animando os Frames</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 4 – Upscale Profissional</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Módulo 5 – Editando Comercial</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Acesso anual</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Atualizações futuras</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Método validado</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> PDFs de material</li>
              <li className="flex items-start gap-2"><CheckCircle size={18} className="mt-0.5 flex-shrink-0" /> Comunidade Exclusiva!</li>
            </ul>

            <a
              href="https://pay.kiwify.com.br/hz9KgJb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center block py-4 rounded-xl bg-black text-white font-black hover:bg-zinc-900 transition-colors shadow-xl mt-auto hover:scale-105 transform duration-300"
            >
              QUERO GARANTIR AGORA!
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
